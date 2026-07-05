var Deeprequest = require("./request"), Strings = require("./string"), LineQueue = require("./queue"), DateFix = 0, Session = (wx.hasOwnProperty("NOW") || Object.defineProperty(wx, "NOW", {
    get: function() {
        return Date.now() + DateFix;
    },
    set: function(e) {}
}), {
    empty: "nil",
    emptySession: {
        sessionId: "nil",
        userId: "",
        lastTime: "nil",
        openid: "nil"
    },
    setSession: function(e) {
        var n = this.getSession();
        if ("[object object]" == Object.prototype.toString.call(n).toLowerCase()) {
            for (var o in e) n[o] = e[o];
            Loginer.SESSION = n;
        }
    },
    isSessionFull: function(e) {
        var n, o = this.getSession() || e;
        if ("[object object]" != Object.prototype.toString.call(o).toLowerCase()) return !1;
        for (n in Session.emptySession) if (Session.empty === o[n] || "0" === o[n] || void 0 === o[n]) return !1;
        return !0;
    },
    getSession: function() {
        var e = this.emptySession, n = Loginer.SESSION || {}, o = this.getCurrentTimeStamp();
        return n = n.lastTime <= o ? e : n;
    },
    getCurrentTimeStamp: function() {
        return parseInt(new Date().getTime() / 1e3);
    }
}), loginerLoginQueue = new LineQueue(), Requester = (loginerLoginQueue.setSync(), 
{
    addLoginToRequest: function(e) {
        var n = ("" + (e = e || "")).replace(/#(.*)$/g, "").replace(/&amp;/g, "&"), o = e, s = {}, i = n.indexOf("?"), i = (-1 != i && (o = n.substr(0, i), 
        n = n.substr(i + 1), s = Strings.strToMap(n)), Session.getSession());
        return s.session_id = encodeURIComponent(i.sessionId), e = o + "?" + Strings.mapToStr(s);
    },
    isLoginExpire: function(e) {
        return ("" + e.errcode == "-1702220400" || "" + e.errcode == "-1702220401" || "" + e.errcode == "-1702220407" || "" + e.errcode == "-1702220402" || "" + e.errcode == "40001" || 6211 === e.ret || 6204 === e.logicret) && (Session.setSession(Session.emptySession), 
        !0);
    },
    request: function(r) {
        function a(e) {
            var s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = this, n = Requester.addLoginToRequest(r.url), t = (Session.getCurrentTimeStamp(), 
            Date.now());
            Deeprequest({
                url: n,
                data: r.data,
                method: r.method,
                header: {
                    "content-type": r.header ? r.header["content-type"] : "application/json"
                },
                success: function(e) {
                    var n = e, o = (e = n.data, s.cgi = {
                        statusCode: n.statusCode,
                        duration: Date.now() - t
                    }, n && n.header && n.header.Date && (DateFix = new Date(n.header.Date).getTime() - Date.now()), 
                    Requester.isLoginExpire(e));
                    401 == n.statusCode || !0 === o ? (s.cgi.type = "fail", g.push(s), Loginer.getSession(function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        c < d ? (c++, l.run(a)) : (g.push(n), r.fail && r.fail.call(u, {
                            errmsg: "login fail after trying  many times"
                        }, g)), i.done({
                            session: e,
                            info: n
                        });
                    }, !0)) : (s.cgi.type = "success", g.push(s), r.success && r.success.call(u, e, g), 
                    i.done());
                },
                fail: function(e) {
                    console.error("request logic error ", n, e), s.cgi = {
                        type: "fail",
                        statusCode: e.statusCode,
                        duration: Date.now() - t
                    }, e && e.header && e.header.Date && (DateFix = new Date(e.header.Date).getTime() - Date.now()), 
                    g.push(s), r.fail && r.fail.call(u, e, g), i.done();
                },
                complete: function(e) {
                    r.complete && r.complete.call(u, e);
                }
            });
        }
        var u = this, d = 2, c = 0, g = [], l = new LineQueue();
        l.setSync(), l.run(function() {
            var o = this;
            Loginer.getSession(function(e, n) {
                o.done(e, n);
            });
        });
        l.run(a);
    }
}), Loginer = {
    errCount: 0,
    login: function(o) {
        Session.setSession(Session.emptySession);
        var e = new LineQueue();
        e.setSync(), e.run(function() {
            var n = this, o = Date.now();
            wx.login({
                success: function(e) {
                    n.done({
                        res: e,
                        info: {
                            type: "success",
                            duration: Date.now() - o
                        }
                    });
                },
                fail: function(e) {
                    console.error("wx.login error:", e), Session.setSession(Session.emptySession), n.done({
                        res: e,
                        info: {
                            type: "fail",
                            duration: Date.now() - o
                        }
                    });
                }
            });
        }), e.run(function(e) {
            var n = e.res, o = e.info, s = this, e = n.code, i = "https://game.weixin.qq.com/cgi-bin/gameweappauthwap/login", t = Date.now();
            Deeprequest({
                url: i,
                data: JSON.stringify({
                    code: e,
                    need_openid: !0
                }),
                method: "POST",
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    e = e.data, s.done({
                        session: e,
                        info: {
                            wxLogin: o,
                            cgiLogin: {
                                type: "success",
                                duration: Date.now() - t
                            }
                        }
                    });
                },
                fail: function(e) {
                    console.error(i, " get session id error:", e), Session.setSession(Session.emptySession), 
                    s.done({
                        session: e,
                        info: {
                            wxLogin: o,
                            cgiLogin: {
                                type: "fail",
                                duration: Date.now() - t
                            }
                        }
                    });
                }
            });
        }), e.run(function(e) {
            var n, o, s = e.session, e = e.info;
            s.data && s.data.session_id ? (n = Session.getCurrentTimeStamp(), o = {
                sessionId: s.data.session_id,
                userId: s.data.user_id,
                lastTime: n + 3600
            }, s.data.expire_seconds && (o.lastTime = n + s.data.expire_seconds), s.data.openid && (o.openid = s.data.openid), 
            Session.setSession(o), this.done({
                session: o,
                info: e
            })) : this.done({
                session: null,
                info: e
            });
        }), e.run(function(e) {
            var n = e.session, e = e.info;
            "function" == typeof o && o({
                session: n,
                info: e
            });
        });
    },
    getSession: function(s, e) {
        var i = this;
        if (!e) {
            e = Session.getSession();
            if (Session.isSessionFull(e)) return void (s && s.call(i, e));
        }
        loginerLoginQueue.run(function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, o = this;
            Session.isSessionFull(e) ? (Session.setSession(e), o.done(e, n), s && s.call(i, e, n)) : Loginer.errCount < 10 ? Loginer.login.call(Loginer, function(e) {
                var n = e.session, e = e.info;
                Loginer.errCount++, o.done(n, e), s && s.call(i, n, e);
            }) : (o.done({}), s && s.call(i, {}));
        });
    }
}, Config = {}, baseContext = null;

module.exports = {
    prepare: function(e, n) {
        console.log("runed?"), e.prepared || (Config.expiredLoginCodeMap = (n = n || {}).expiredLoginCodeMap, 
        baseContext = e, n.dont_login || Loginer.getSession(), e.session = Loginer.getSession.bind(Loginer), 
        e.request = Requester.request, e.config = n, e.prepared = !0, e.addLoginToRequest = Requester.addLoginToRequest);
    },
    request: Requester.request,
    session: Loginer.getSession.bind(Loginer),
    getSession: Loginer.getSession.bind(Loginer)
};