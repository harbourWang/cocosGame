var Deeprequest = require("mini-wxgamelib/js/common/request"), Strings = require("mini-wxgamelib/js/common/string"), LineQueue = require("mini-wxgamelib/js/common/queue"), DateFix = 0, Session = (wx.hasOwnProperty("NOW") || Object.defineProperty(wx, "NOW", {
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
            for (var i in e) n[i] = e[i];
            Loginer.SESSION = n;
        }
    },
    isSessionFull: function(e) {
        var n, i = this.getSession() || e;
        if ("[object object]" != Object.prototype.toString.call(i).toLowerCase()) return !1;
        for (n in Session.emptySession) if (Session.empty === i[n] || "0" === i[n] || void 0 === i[n]) return !1;
        return !0;
    },
    getSession: function() {
        var e = this.emptySession, n = Loginer.SESSION || {}, i = this.getCurrentTimeStamp();
        return n = n.lastTime <= i ? e : n;
    },
    getCurrentTimeStamp: function() {
        return parseInt(new Date().getTime() / 1e3);
    }
}), loginerLoginQueue = new LineQueue(), Requester = (loginerLoginQueue.setSync(), 
{
    addLoginToRequest: function(e) {
        var n = ("" + (e = e || "")).replace(/#(.*)$/g, "").replace(/&amp;/g, "&"), i = e, o = {}, s = n.indexOf("?"), s = (-1 != s && (i = n.substr(0, s), 
        n = n.substr(s + 1), o = Strings.strToMap(n)), Session.getSession());
        return o.session_id = encodeURIComponent(s.sessionId), e = i + "?" + Strings.mapToStr(o);
    },
    isLoginExpire: function(e) {
        return ("" + e.errcode == "-1702220400" || "" + e.errcode == "-1702220401" || "" + e.errcode == "-1702220407" || "" + e.errcode == "-1702220402" || "" + e.errcode == "40001" || 6211 === e.ret || 6204 === e.logicret) && (Session.setSession(Session.emptySession), 
        !0);
    },
    request: function(r) {
        function a(e) {
            var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s = this, n = Requester.addLoginToRequest(r.url), t = (Session.getCurrentTimeStamp(), 
            Date.now());
            Deeprequest({
                url: n,
                data: r.data,
                method: r.method,
                header: {
                    "content-type": r.header ? r.header["content-type"] : "application/json"
                },
                success: function(e) {
                    var n = e, i = (e = n.data, o.cgi = {
                        statusCode: n.statusCode,
                        duration: Date.now() - t
                    }, n && n.header && n.header.Date && (DateFix = new Date(n.header.Date).getTime() - Date.now()), 
                    Requester.isLoginExpire(e));
                    401 == n.statusCode || !0 === i ? (o.cgi.type = "fail", g.push(o), Loginer.getSession(function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        c < d ? (c++, l.run(a)) : (g.push(n), r.fail && r.fail.call(u, {
                            errmsg: "login fail after trying  many times"
                        }, g)), s.done({
                            session: e,
                            info: n
                        });
                    }, !0)) : (o.cgi.type = "success", g.push(o), r.success && r.success.call(u, e, g), 
                    s.done());
                },
                fail: function(e) {
                    console.error("request logic error ", n, e), o.cgi = {
                        type: "fail",
                        statusCode: e.statusCode,
                        duration: Date.now() - t
                    }, e && e.header && e.header.Date && (DateFix = new Date(e.header.Date).getTime() - Date.now()), 
                    g.push(o), r.fail && r.fail.call(u, e, g), s.done();
                },
                complete: function(e) {
                    r.complete && r.complete.call(u, e);
                }
            });
        }
        var u = this, d = 2, c = 0, g = [], l = new LineQueue();
        l.setSync(), l.run(function() {
            var i = this;
            Loginer.getSession(function(e, n) {
                i.done(e, n);
            });
        });
        l.run(a);
    }
}), Loginer = {
    errCount: 0,
    login: function(i) {
        Session.setSession(Session.emptySession);
        var e = new LineQueue();
        e.setSync(), e.run(function() {
            var n = this, i = Date.now();
            wx.login({
                success: function(e) {
                    n.done({
                        res: e,
                        info: {
                            type: "success",
                            duration: Date.now() - i
                        }
                    });
                },
                fail: function(e) {
                    console.error("wx.login error:", e), Session.setSession(Session.emptySession), n.done({
                        res: e,
                        info: {
                            type: "fail",
                            duration: Date.now() - i
                        }
                    });
                }
            });
        }), e.run(function(e) {
            var n = e.res, i = e.info, o = this, e = n.code, s = "https://game.weixin.qq.com/cgi-bin/gameweappauthwap/login", t = Date.now();
            Deeprequest({
                url: s,
                data: JSON.stringify({
                    code: e,
                    need_openid: !0
                }),
                method: "POST",
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    e = e.data, o.done({
                        session: e,
                        info: {
                            wxLogin: i,
                            cgiLogin: {
                                type: "success",
                                duration: Date.now() - t
                            }
                        }
                    });
                },
                fail: function(e) {
                    console.error(s, " get session id error:", e), Session.setSession(Session.emptySession), 
                    o.done({
                        session: e,
                        info: {
                            wxLogin: i,
                            cgiLogin: {
                                type: "fail",
                                duration: Date.now() - t
                            }
                        }
                    });
                }
            });
        }), e.run(function(e) {
            var n, i, o = e.session, e = e.info;
            o.data && o.data.session_id ? (n = Session.getCurrentTimeStamp(), i = {
                nick_name: o.data.nick_name,
                head_img_url: o.data.head_img_url,
                sessionId: o.data.session_id,
                userId: o.data.user_id,
                lastTime: n + 3600
            }, o.data.expire_seconds && (i.lastTime = n + o.data.expire_seconds), o.data.openid && (i.openid = o.data.openid), 
            Session.setSession(i), this.done({
                session: i,
                info: e
            })) : this.done({
                session: null,
                info: e
            });
        }), e.run(function(e) {
            var n = e.session, e = e.info;
            "function" == typeof i && i({
                session: n,
                info: e
            });
        });
    },
    getSession: function(o, e) {
        var s = this;
        if (!e) {
            e = Session.getSession();
            if (Session.isSessionFull(e)) return void (o && o.call(s, e));
        }
        loginerLoginQueue.run(function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = this;
            Session.isSessionFull(e) ? (Session.setSession(e), i.done(e, n), o && o.call(s, e, n)) : Loginer.errCount < 10 ? Loginer.login.call(Loginer, function(e) {
                var n = e.session, e = e.info;
                Loginer.errCount++, i.done(n, e), o && o.call(s, n, e);
            }) : (i.done({}), o && o.call(s, {}));
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