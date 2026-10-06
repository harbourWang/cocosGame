var Deeprequest = require("mini-wxgamelib/js/common/request"), LOGIN_CODE_LIFETIME = 300, loginQueue = [], loginRunning = !1, cachedSession = null;

function now() {
    return Math.floor(Date.now() / 1e3);
}

function emptySession() {
    return {
        code: "",
        codeTime: 0,
        lastTime: 0,
        sessionId: "",
        userId: "",
        openid: ""
    };
}

function isSessionFull(e) {
    return !!e && "string" == typeof e.code && 0 < e.code.length && e.lastTime > now();
}

function getCachedSession() {
    return isSessionFull(cachedSession) ? cachedSession : emptySession();
}

function finishLogin(e, n) {
    loginRunning = !1, cachedSession = isSessionFull(e) ? e : null;
    var t = loginQueue.splice(0);
    t.forEach(function(t) {
        t(e, n);
    });
}

function requestLogin(e) {
    "function" == typeof e && loginQueue.push(e);
    if (loginRunning) return;
    loginRunning = !0;
    var n = Date.now();
    if ("undefined" == typeof wx || !wx || "function" != typeof wx.login) return finishLogin(null, {
        type: "fail",
        errMsg: "wx.login is unavailable",
        duration: Date.now() - n
    });
    try {
        wx.login({
            success: function(e) {
                var t = e && e.code;
                if (!t) return console.error("wx.login returned no code", e), void finishLogin(null, {
                    type: "fail",
                    errMsg: "wx.login returned no code",
                    duration: Date.now() - n
                });
                var o = now();
                finishLogin({
                    code: t,
                    codeTime: o,
                    lastTime: o + LOGIN_CODE_LIFETIME,
                    sessionId: "",
                    userId: "",
                    openid: ""
                }, {
                    type: "success",
                    duration: Date.now() - n
                });
            },
            fail: function(e) {
                console.error("wx.login error:", e), finishLogin(null, {
                    type: "fail",
                    errMsg: e && e.errMsg || "wx.login failed",
                    duration: Date.now() - n,
                    error: e
                });
            }
        });
    } catch (e) {
        console.error("wx.login error:", e), finishLogin(null, {
            type: "fail",
            errMsg: e && e.message || "wx.login failed",
            duration: Date.now() - n,
            error: e
        });
    }
}

var Loginer = {
    login: function(e) {
        cachedSession = null, requestLogin(function(n, t) {
            "function" == typeof e && e({
                session: n,
                info: t
            });
        });
    },
    getSession: function(e, n) {
        var t = getCachedSession();
        if (!n && isSessionFull(t)) return void ("function" == typeof e && e(t, {
            type: "success",
            cached: !0
        }));
        requestLogin(e);
    }
}, Requester = {
    addLoginToRequest: function(e) {
        // wx.login returns a one-time code. Keep it out of requests to the
        // retired game-maker services until an application server exchanges it.
        return e || "";
    },
    request: function(e) {
        var n = this, t = e || {}, o = Date.now();
        Deeprequest({
            url: t.url,
            data: t.data,
            method: t.method || "GET",
            header: t.header || {
                "content-type": "application/json"
            },
            success: function(e) {
                var i = [ {
                    cgi: {
                        type: "success",
                        statusCode: e && e.statusCode,
                        duration: Date.now() - o
                    }
                } ];
                t.success && t.success.call(n, e && e.data, i);
            },
            fail: function(e) {
                var i = [ {
                    cgi: {
                        type: "fail",
                        statusCode: e && e.statusCode,
                        duration: Date.now() - o
                    }
                } ];
                t.fail && t.fail.call(n, e, i);
            },
            complete: function(e) {
                t.complete && t.complete.call(n, e);
            }
        });
    }
};

module.exports = {
    prepare: function(e, n) {
        e && !e.prepared && (n = n || {}, e.config = n, e.session = Loginer.getSession.bind(Loginer),
        e.getSession = Loginer.getSession.bind(Loginer), e.login = Loginer.login.bind(Loginer),
        e.request = Requester.request, e.addLoginToRequest = Requester.addLoginToRequest, e.prepared = !0,
        n.dont_login || Loginer.getSession());
    },
    login: Loginer.login.bind(Loginer),
    request: Requester.request,
    session: Loginer.getSession.bind(Loginer),
    getSession: Loginer.getSession.bind(Loginer),
    addLoginToRequest: Requester.addLoginToRequest
};
