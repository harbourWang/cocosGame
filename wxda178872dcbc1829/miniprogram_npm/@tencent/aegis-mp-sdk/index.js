function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

!function(e) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : ("undefined" != typeof globalThis ? globalThis : self).Aegis = e();
}(function() {
    var n = function(e, t) {
        return (n = Object.setPrototypeOf || ({
            __proto__: []
        } instanceof Array ? function(e, t) {
            e.__proto__ = t;
        } : function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }))(e, t);
    }, s = function() {
        return (s = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
        }).apply(this, arguments);
    }, j = (e.prototype.indexOf = function(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].callback === t) return n;
        return -1;
    }, e.prototype.on = function(e, t, n) {
        var i;
        if (void 0 === n && (n = 0), this) return (i = this.EventsList[e]) || (this.EventsList[e] = [], 
        i = this.EventsList[e]), -1 !== this.indexOf(i, t) || i.push({
            name: e,
            type: n || 0,
            callback: t
        }), this;
    }, e.prototype.one = function(e, t) {
        this.on(e, t, 1);
    }, e.prototype.remove = function(e, t) {
        if (this) {
            var n = this.EventsList[e];
            if (n) {
                if (t) return n.length && (t = this.indexOf(n, t), n.splice(t, 1)), this;
                try {
                    delete this.EventsList[e];
                } catch (e) {}
            }
            return null;
        }
    }, e.prototype.clear = function() {
        this.EventsList = {};
    }, e), o = function(t) {
        try {
            return encodeURIComponent(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    };
    function e() {
        var s = this;
        this.emit = function(e, t) {
            if (s) {
                var n;
                if (null != (i = s.EventsList[e]) && i.length) for (var i = i.slice(), o = 0; o < i.length; o++) {
                    n = i[o];
                    try {
                        var r = n.callback.apply(s, [ t ]);
                        if (1 === n.type && s.remove(e, n.callback), !1 === r) break;
                    } catch (e) {
                        throw e;
                    }
                }
                return s;
            }
        }, this.EventsList = {};
    }
    function l(e, t) {
        return "string" == typeof e ? e.split("?")[t ? 1 : 0] || "" : e;
    }
    function f(e) {
        if ("string" == typeof e) return e;
        try {
            return (JSON.stringify(e, (i = [], o = [], function(e, t) {
                if (t instanceof Error) return "Error.message: " + t.message + " \n  Error.stack: " + t.stack;
                if ("object" == _typeof(t) && null !== t) {
                    var n = i.indexOf(t);
                    if (-1 !== n) return "[Circular " + o[n] + "]";
                    i.push(t), o.push(e || "root");
                }
                return t;
            }), 4) || "undefined").replace(/"/gim, "");
        } catch (e) {
            return "error happen when aegis stringify: \n " + e.message + " \n " + e.stack;
        }
        var i, o;
    }
    var m, a, c, y, q = {
        number: -1,
        "-1": "number",
        string: ""
    }, p = [ "ret", "retcode", "code" ];
    function u(e) {
        return e.filter(function(n, i) {
            return !e.find(function(e, t) {
                return i !== t && n.url === e.url && 200 === n.status;
            });
        });
    }
    function v(e) {
        e.level === m.INFO_ALL && (e.level = m.INFO);
    }
    function r() {}
    function h(t, n) {
        Object.getOwnPropertyNames(t).forEach(function(e) {
            "function" == typeof t[e] && "constructor" !== e && (n ? n[e] = function() {} : t[e] = function() {});
        });
    }
    function i() {
        try {
            var e = getCurrentPages();
            return (e[e.length - 1] || {}).route || "";
        } catch (e) {
            return "";
        }
    }
    (I = m = m || {}).INFO_ALL = "-1", I.API_RESPONSE = "1", I.INFO = "2", I.ERROR = "4", 
    I.PROMISE_ERROR = "8", I.AJAX_ERROR = "16", I.SCRIPT_ERROR = "32", I.IMAGE_ERROR = "64", 
    I.CSS_ERROR = "128", I.CONSOLE_ERROR = "256", I.MEDIA_ERROR = "512", I.RET_ERROR = "1024", 
    I.REPORT = "2048", C = a = {
        android: 1,
        1: "android",
        ios: 2,
        2: "ios",
        windows: 3,
        3: "windows",
        macos: 4,
        4: "macos",
        linux: 5,
        5: "linux",
        devtools: 6,
        6: "devtools",
        other: 100,
        100: "other"
    }, k = c = {
        unknown: 100,
        100: "unknown",
        wifi: 1,
        1: "wifi",
        net2g: 2,
        2: "net2g",
        net3g: 3,
        3: "net3g",
        net4g: 4,
        4: "net4g",
        net5g: 5,
        5: "net5g",
        net6g: 6,
        6: "net6g"
    }, (U = y = y || {}).LOG = "log", U.SPEED = "speed", U.PERFORMANCE = "performance", 
    U.OFFLINE = "offline", U.WHITE_LIST = "whiteList", U.VITALS = "vitals", U.PV = "pv", 
    U.CUSTOM_PV = "customPV", U.EVENT = "event", U.CUSTOM = "custom", U.SDK_ERROR = "sdkError";
    function w(e, n) {
        var i, o = [], r = e.config;
        return e.lifeCycle.on("destroy", function() {
            o.length = 0;
        }), function(e, t) {
            o.push(e), n && o.length >= n ? (o = u(o), t(o.splice(0, o.length)), i && clearTimeout(i)) : (i && clearTimeout(i), 
            i = setTimeout(function() {
                i = null, 0 < (o = u(o)).length && t(o.splice(0, o.length));
            }, r.delay));
        };
    }
    function F(e, t) {
        return Array.isArray(e) ? t(e.map(function(e) {
            return {
                msg: "string" == typeof e.msg ? e.msg : [].concat(e.msg).map(f).join(" "),
                level: e.level,
                trace: e.trace
            };
        })) : t({
            msg: "string" == typeof e.msg ? e.msg : f(e.msg),
            level: e.level,
            trace: e.trace
        });
    }
    function b(n) {
        if (n && n.reduce && n.length) return 1 === n.length ? function(e, t) {
            n[0](e, t || r);
        } : n.reduce(function(n, i) {
            return function(e, t) {
                return void 0 === t && (t = r), n(e, function(e) {
                    return null == i ? void 0 : i(e, t);
                });
            };
        });
        throw new TypeError("createPipeline need at least one function param");
    }
    var O = function(i) {
        return function(e, n) {
            var t;
            i.send({
                url: i.config.url || "",
                data: (t = e, (t = Array.isArray(t) ? t : [ t ]).map(function(t, n) {
                    return Object.getOwnPropertyNames(t).map(function(e) {
                        return o(e) + "[" + n + "]=" + (void 0 === t[e] ? "" : o(t[e]));
                    }).join("&");
                }).join("&") + (t.length ? "&count=" + t.length : "")),
                method: "post",
                contentType: "application/x-www-form-urlencoded",
                type: y.LOG
            }, function() {
                var t = i.config.onReport;
                "function" == typeof t && e.forEach(function(e) {
                    t(e);
                }), "function" == typeof n && n([]);
            }, function(e) {
                "403 forbidden" === e && i.destroy();
            });
        };
    }, t = (R.prototype.init = function(e) {
        this.setConfig(e);
        for (var t = 0; t < R.installedPlugins.length; t++) try {
            R.installedPlugins[t].patch(this);
        } catch (e) {
            this.sendSDKError(e);
        }
        this.lifeCycle.emit("onInited");
    }, R.prototype.setConfig = function(e) {
        Object.assign(this.config, e);
        var t = (a = this.config).id, n = a.uin, i = a.version, o = a.ext1, r = a.ext2, s = a.ext3, e = a.aid, a = this.bean.id !== t || this.bean.uin !== n || this.bean.aid !== e;
        return this.bean.id = t || "", this.bean.uin = n || "", this.bean.version = i || "1.34.21", 
        this.bean.aid = e || "", o && (this.bean.ext1 = o), r && (this.bean.ext2 = r), s && (this.bean.ext3 = s), 
        a && this.lifeCycle.emit("onConfigChange", this.config), this.config;
    }, R.use = function(e) {
        -1 === R.installedPlugins.indexOf(e) && e.aegisPlugin && R.installedPlugins.push(e);
    }, R.unuse = function(e) {
        -1 !== (e = R.installedPlugins.indexOf(e)) && R.installedPlugins.splice(e, 1);
    }, R.prototype.info = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.normalLogPipeline({
            msg: e,
            level: m.INFO
        });
    }, R.prototype.infoAll = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.normalLogPipeline({
            msg: e,
            level: m.INFO_ALL
        });
    }, R.prototype.report = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.normalLogPipeline({
            msg: e,
            level: m.REPORT
        });
    }, R.prototype.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.normalLogPipeline({
            msg: e,
            level: m.ERROR
        });
    }, R.prototype.speedLogPipeline = function(e) {
        throw new Error('You need to override "speedLogPipeline" method');
    }, R.prototype.reportPv = function(e) {
        var t, n = this;
        e && (console.warn("reportPv is deprecated, please use reportEvent"), t = "" + Object.getOwnPropertyNames(this.bean).filter(function(e) {
            return "id" !== e;
        }).map(function(e) {
            return e + "=" + n.bean[e];
        }).join("&"), this.send({
            url: this.config.url + "/" + e + "?" + t,
            addBean: !1,
            type: y.CUSTOM_PV
        }, function() {}, function(e) {
            "403 forbidden" === e && (console.log(e), n.destroy());
        }));
    }, R.prototype.reportEvent = function(e) {
        e && ((e = "string" == typeof e ? {
            name: e,
            ext1: this.config.ext1 || "",
            ext2: this.config.ext2 || "",
            ext3: this.config.ext3 || ""
        } : e).name ? this.eventPipeline(e) : console.warn("reportEvent params error"));
    }, R.prototype.reportTime = function(e, t) {
        if ("object" == _typeof(e)) return this.reportT(e);
        "string" == typeof e ? "number" == typeof t ? t < 0 || 6e4 < t ? console.warn("reportTime: duration must between 0 and 60000") : this.submitCustomTime(e, t) : console.warn("reportTime: second param must be number") : console.warn("reportTime: first param must be a string");
    }, R.prototype.reportT = function(e) {
        var t = e.name, n = e.duration, i = void 0 === (o = e.ext1) ? "" : o, o = void 0 === (r = e.ext2) ? "" : r, r = void 0 === (r = e.ext3) ? "" : r, e = e.from;
        if ("string" == typeof t && "number" == typeof n && "string" == typeof i && "string" == typeof o && "string" == typeof r) {
            if (!(n < 0 || 6e4 < n)) return this.submitCustomTime(t, n, i, o, r, void 0 === e ? "" : e);
            console.warn("reportTime: duration must between 0 and 60000");
        } else console.warn("reportTime: params error");
    }, R.prototype.time = function(e) {
        "string" == typeof e ? this.timeMap[e] ? console.warn("Timer " + e + " already exists") : this.timeMap[e] = Date.now() : console.warn("time: first param must be a string");
    }, R.prototype.timeEnd = function(e) {
        "string" == typeof e ? this.timeMap[e] ? (this.submitCustomTime(e, Date.now() - this.timeMap[e]), 
        delete this.timeMap[e]) : console.warn("Timer " + e + " does not exist") : console.warn("timeEnd: first param must be a string");
    }, R.prototype.submitCustomTime = function(e, t, n, i, o, r) {
        this.customTimePipeline({
            name: e,
            duration: t,
            ext1: n || this.config.ext1,
            ext2: i || this.config.ext2,
            ext3: o || this.config.ext3,
            from: r || void 0
        });
    }, R.prototype.extendBean = function(e, t) {
        this.bean[e] = t;
    }, R.prototype.send = function(e, t, n) {
        throw new Error('You need to override "send" method');
    }, R.prototype.sendSDKError = function(e) {
        this.send({
            url: this.config.url + "?id=1085&msg[0]=" + encodeURIComponent(f(e)) + "&level[0]=2&from=" + this.config.id + "&count=1&version=" + this.config.id + "(1.34.21)",
            addBean: !1,
            method: "get",
            type: y.SDK_ERROR
        });
    }, R.prototype.destroy = function(e) {
        void 0 === e && (e = !1);
        var t, n, i = R.instances.indexOf(this);
        -1 !== i && R.instances.splice(i, 1);
        for (var o = R.installedPlugins.length - 1; 0 <= o; o--) try {
            var r = R.installedPlugins[o];
            r.unpatch(this), 0 === r.countInstance() && (r.uninstall(), R.unuse(r), r = null);
        } catch (e) {
            this.sendSDKError(e);
        }
        if (this.lifeCycle.emit("destroy"), this.lifeCycle.clear(), e) t = this, n = Object.getOwnPropertyDescriptors(t), 
        Object.keys(n).forEach(function(e) {
            n[e].writable && (t[e] = null);
        }), Object.setPrototypeOf(this, null); else {
            for (var s = this; s.constructor !== Object && h(s, this), s = Object.getPrototypeOf(s); ) ;
            0 === R.instances.length && (h(e = Object.getPrototypeOf(this).constructor), h(R));
        }
    }, R.instances = [], R.LOG_TYPE = m, R.installedPlugins = [], R), d = (g.prototype.patch = function(e) {
        this.canUse(e) && this.exist(e) && (this.instances.push(e), this.triggerInit(e), 
        this.triggerOnNewAegis(e));
    }, g.prototype.unpatch = function(e) {
        -1 !== (e = this.instances.indexOf(e)) && this.instances.splice(e, 1);
    }, g.prototype.countInstance = function() {
        return this.instances.length;
    }, g.prototype.uninstall = function() {
        var e;
        null != (e = null == (e = this.option) ? void 0 : e.destroy) && e.apply(this);
    }, g.prototype.walk = function(n) {
        var i = this;
        this.instances.forEach(function(e) {
            var t = i.canUse(e);
            t && n(e, t);
        });
    }, g.prototype.canUse = function(e) {
        return !(!(e = this.getConfig(e)) || "object" != _typeof(e)) || !!e;
    }, g.prototype.getConfig = function(e) {
        return null == (e = e.config) ? void 0 : e[this.name];
    }, g.prototype.exist = function(e) {
        return -1 === this.instances.indexOf(e);
    }, g.prototype.triggerInit = function(e) {
        var t;
        this.inited || (this.inited = !0, null == (t = null == (t = this.option) ? void 0 : t.init)) || t.call(this.option, this.getConfig(e));
    }, g.prototype.triggerOnNewAegis = function(e) {
        var t;
        null != (t = null == (t = this.option) ? void 0 : t.onNewAegis) && t.call(this.option, e, this.getConfig(e));
    }, g);
    function g(e) {
        this.aegisPlugin = !0, this.name = "", this.instances = [], this.inited = !1, e.$walk = this.walk.bind(this), 
        e.$getConfig = this.getConfig.bind(this), this.option = e, this.name = e.name;
    }
    function R(e) {
        var n, t, i, o, r, s, a, c, u, l, f, p, h, d, g = this;
        this.config = {
            version: 0,
            delay: 1e3,
            onError: !0,
            repeat: 5,
            random: 1,
            aid: !0,
            device: !0,
            pagePerformance: !0,
            webVitals: !0,
            speedSample: !0,
            hostUrl: "https://aegis.qq.com",
            url: "",
            offlineUrl: "",
            whiteListUrl: "",
            pvUrl: "",
            speedUrl: "",
            customTimeUrl: "",
            performanceUrl: "",
            webVitalsUrl: "",
            eventUrl: ""
        }, this.isWhiteList = !1, this.lifeCycle = new j(), this.bean = {}, this.normalLogPipeline = b([ w(this, 5), F, function(e, t) {
            if ("number" != typeof n.config.random && (console.warn("random必须为0~1的数字，如非数字，会使用1（不过滤）"), 
            n.config.random = 1), Math.random() < n.config.random) return t(e);
        }, (h = (n = this).config, d = {}, function(e, t) {
            var n = "number" == typeof h.repeat ? h.repeat : 5;
            if (0 === n) return t(e);
            t(e.filter(function(e) {
                return e.level !== m.ERROR && e.level !== m.PROMISE_ERROR && e.level !== m.AJAX_ERROR && e.level !== m.SCRIPT_ERROR && e.level !== m.IMAGE_ERROR && e.level !== m.CSS_ERROR && e.level !== m.MEDIA_ERROR || (d[e.msg] = d[e.msg] || 0, 
                d[e.msg] += 1, !(d[e.msg] > n));
            }));
        }), (f = this.lifeCycle.emit, p = this.config, function(e, t) {
            var n = p.logCreated;
            return "function" == typeof n && (e = e.filter(function(e) {
                return !1 !== n(e);
            })), f("beforeWrite", e), t(e);
        }), (l = this, setTimeout(function() {
            var e = l.config.pvUrl;
            (e = void 0 === e ? "" : e) && l.send({
                url: e,
                type: y.PV
            }, function() {}, function(e) {
                "403 forbidden" === e && l.destroy();
            });
        }), function(e, t) {
            t(e);
        }), (a = s = r = !1, c = [], (i = this).lifeCycle.on("onConfigChange", function() {
            o && clearTimeout(o), o = setTimeout(function() {
                var e;
                !a && i.config && (a = !0, (e = void 0 === (e = i.config.whiteListUrl) ? "" : e) && i.send({
                    url: e,
                    type: y.WHITE_LIST
                }, function(e) {
                    s = !0;
                    try {
                        var t = e.data || JSON.parse(e);
                        if (0 === t.retcode) {
                            if (r = t.result.is_in_white_list, i.isWhiteList = r, t.result.shutdown) return void i.destroy();
                            0 <= t.result.rate && t.result.rate <= 1 && (i.config.random = t.result.rate);
                        }
                        i.isWhiteList && c.length ? O(i)(c.splice(0), function() {}) : !i.isWhiteList && c.length && (c.length = 0);
                        var n = i.config.onWhitelist;
                        "function" == typeof n && n(r);
                    } catch (e) {}
                }, function(e) {
                    "403 forbidden" === e && i.destroy(), s = !0;
                }), a = !1);
            }, i.config.uin ? 50 : 500);
        }), i.lifeCycle.on("destroy", function() {
            c.length = 0;
        }), u = !1, function(e, t) {
            !u && e.some(function(e) {
                return e.level === m.ERROR;
            }) && (u = !0), r || u ? t(e.concat(c.splice(0)).map(function(e) {
                return v(e), e;
            })) : (e = e.filter(function(e) {
                return e.level !== m.INFO && e.level !== m.API_RESPONSE ? (v(e), !0) : (s || (c.push(e), 
                200 <= c.length && (c.length = 200)), !1);
            })).length && t(e);
        }), function(e, t) {
            var n = JSON.parse(JSON.stringify(e)), i = (g.lifeCycle.emit("beforeReport", n), 
            g.config.beforeReport);
            if ((e = "function" == typeof i ? e.filter(function(e) {
                return !1 !== i(e);
            }) : e).length) return t(e);
        }, O(this) ]), this.eventPipeline = b([ w(this, 5), function(e) {
            g.send({
                url: g.config.eventUrl + "?" + e.map(function(e, t) {
                    var n = encodeURIComponent(e.ext1 || g.config.ext1 || ""), i = encodeURIComponent(e.ext2 || g.config.ext2 || ""), o = encodeURIComponent(e.ext3 || g.config.ext3 || "");
                    return "event[" + t + "]=" + encodeURIComponent(e.name) + "&ext1[" + t + "]=" + n + "&ext2[" + t + "]=" + i + "&ext3[" + t + "]=" + o;
                }).join("&"),
                type: y.EVENT
            }, function() {}, function(e) {
                "403 forbidden" === e && (console.log(e), g.destroy());
            });
        } ]), this.timeMap = {}, this.customTimePipeline = b([ w(this, 10), function(e) {
            g.send({
                url: g.config.customTimeUrl + "?payload=" + encodeURIComponent(JSON.stringify({
                    custom: e
                })),
                type: y.CUSTOM
            }, function() {}, function(e) {
                "403 forbidden" === e && g.destroy();
            });
        } ]), this.config = (t = this.config, void 0 === (e = e.hostUrl) && (e = "https://aegis.qq.com"), 
        t.url = t.url || e + "/collect", t.offlineUrl = t.offlineUrl || e + "/offline", 
        t.whiteListUrl = t.whiteListUrl || e + "/collect/whitelist", t.pvUrl = t.pvUrl || e + "/collect/pv", 
        t.eventUrl = t.eventUrl || e + "/collect/events", t.speedUrl = t.speedUrl || e + "/speed", 
        t.customTimeUrl = t.customTimeUrl || e + "/speed/custom", t.performanceUrl = t.performanceUrl || e + "/speed/performance", 
        t.webVitalsUrl = t.webVitalsUrl || e + "/speed/webvitals", t), R.instances.push(this);
    }
    function D(i) {
        return N.forEach(function(e) {
            var t;
            try {
                null != (t = e.onStart) && t.call(e, i);
            } catch (e) {}
        }), $(s(s({}, i), {
            success: function(n) {
                var e;
                N.forEach(function(e) {
                    var t;
                    try {
                        null != (t = e.success) && t.call(e, n, i);
                    } catch (e) {}
                }), null != (e = i.success) && e.call(i, n);
            },
            fail: function(n) {
                var e;
                N.forEach(function(e) {
                    var t;
                    try {
                        null != (t = e.fail) && t.call(e, n, i);
                    } catch (e) {}
                }), null != (e = i.fail) && e.call(i, n);
            },
            complete: function(n) {
                var e;
                N.forEach(function(e) {
                    var t;
                    try {
                        null != (t = e.complete) && t.call(e, n, i);
                    } catch (e) {}
                }), null != (e = i.complete) && e.call(i, n);
            }
        }));
    }
    function x(e) {
        if (!G) try {
            Object.defineProperty(V, "request", {
                get: function() {
                    return D;
                }
            });
        } catch (e) {
            console.warn("无法重定义`request`，无法进行CGI测速，错误详情：", e);
        } finally {
            G = !0;
        }
        N.push(e);
    }
    Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(e) {
            if (null == e) throw new TypeError("Cannot convert first argument to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) if (null != (i = arguments[n])) for (var i = Object(i), o = Object.keys(Object(i)), r = 0, s = o.length; r < s; r++) {
                var a = o[r], c = Object.getOwnPropertyDescriptor(i, a);
                null != c && c.enumerable && (t[a] = i[a]);
            }
            return t;
        }
    });
    function P(e) {
        return function(e) {
            if ("1.1.1" === e) return 1;
            for (var t = e.split("."), n = "1.1.1".split("."), i = Math.max(t.length, n.length), o = 0; o < i; o++) {
                var r = ~~t[o], s = ~~n[o];
                if (r < s) return;
                if (s < r) return 1;
            }
        }(T.getSystemInfoSync().SDKVersion) && T.canIUse ? T.canIUse(e) : !!T[e];
    }
    function E(e) {
        for (var t, n = {
            unknown: /unknown|none/i,
            wifi: /wifi/i,
            net2g: /2g/i,
            net3g: /3g/i,
            net4g: /4g/i,
            net5g: /5g/i,
            net6g: /6g/i
        }, i = c.unknown, o = 0; o < Object.keys(n).length; o++) {
            var r = Object.keys(n)[o];
            if (null != (t = n[r]) && t.test(e)) {
                i = c[r];
                break;
            }
        }
        return i;
    }
    var S, L, T = wx || qq, M = new d({
        name: "offlineLog",
        onNewAegis: function(o, e) {
            if (T.getFileSystemManager) try {
                var t = o.config, n = t.id, r = void 0 === n ? "" : n, i = t.uin, s = void 0 === i ? 0 : i, a = t.offlineUrl, c = void 0 === a ? "" : a, u = t.offlineLogLimit, l = new B({
                    limit: u
                });
                o.lifeCycle.on("beforeWrite", function(e) {
                    l.save2Offline(e = void 0 === e ? [] : e, o.config);
                }), l.ready(function(t) {
                    var e = (o.bean || {}).aid, i = void 0 === e ? "" : e;
                    !t && r && (s || i) && o.send({
                        url: c + "/offlineAuto"
                    }, function(e) {
                        var n = (null == e ? void 0 : e.data).secretKey;
                        n && !t && l.getLogs({
                            id: r,
                            uin: s
                        }, function(e, t) {
                            e ? console.error(e) : o.send({
                                url: c + "/offlineLog",
                                data: {
                                    logs: t,
                                    secretKey: n,
                                    id: r,
                                    uin: s,
                                    aid: i
                                },
                                method: "post"
                            }, function() {
                                l.clearLogs();
                            });
                        });
                    });
                });
            } catch (o) {
                console.error(o);
            } else console.warn("[aegis-mp-sdk]unsupport getFileSystemManager offline log not work!");
        }
    }), B = (_.prototype.getLogs = function(e, t) {
        var n = this.fileSystem, i = this.filePath;
        n.readFile({
            filePath: i,
            encoding: "utf8",
            fail: function(e) {
                console.error(e);
            },
            success: function(e) {
                e = (void 0 === (e = e.data) ? "" : e).toString().split("\n").filter(function(e) {
                    return e;
                }).map(function(e) {
                    return JSON.parse(e);
                }), t(null, e);
            }
        });
    }, _.prototype.checkLimit = function(o, r) {
        void 0 === r && (r = function() {});
        var s = this.fileSystem, a = this.filePath, c = this.limitSize;
        s.readFile({
            filePath: a,
            encoding: "utf8",
            success: function(e) {
                if ((e = (e = void 0 === (e = e.data) ? "" : e).toString() + o).length > c) {
                    for (var t = e.split("\n"), n = "", i = t.length - 1; 0 <= i && !(t[i] && (n = t[i] + "\n" + n).length > c); i--) ;
                    s.writeFile({
                        filePath: a,
                        data: n,
                        success: r
                    });
                } else s.appendFile({
                    data: o,
                    filePath: a,
                    encoding: "utf8",
                    success: r,
                    fail: function(e) {
                        console.error(e);
                    }
                });
            }
        });
    }, _), q = new d({
        name: "device",
        onNewAegis: function(n) {
            return e = this, a = function() {
                return i = this, o = function(e) {
                    return this.setSystemInfo(n), this.refreshNetwork(n), this.setNetworkChange(n), 
                    [ 2 ];
                }, c = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                }, t = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                    return this;
                }), t;
                function e(n) {
                    return function(e) {
                        var t = [ n, e ];
                        if (r) throw new TypeError("Generator is already executing.");
                        for (;c; ) try {
                            if (r = 1, s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s), 
                            0) : s.next) && !(a = a.call(s, t[1])).done) return a;
                            switch (s = 0, (t = a ? [ 2 & t[0], a.value ] : t)[0]) {
                              case 0:
                              case 1:
                                a = t;
                                break;

                              case 4:
                                return c.label++, {
                                    value: t[1],
                                    done: !1
                                };

                              case 5:
                                c.label++, s = t[1], t = [ 0 ];
                                continue;

                              case 7:
                                t = c.ops.pop(), c.trys.pop();
                                continue;

                              default:
                                if (!((a = 0 < (a = c.trys).length && a[a.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                                    c = 0;
                                    continue;
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) c.label = t[1]; else if (6 === t[0] && c.label < a[1]) c.label = a[1], 
                                a = t; else {
                                    if (!(a && c.label < a[2])) {
                                        a[2] && c.ops.pop(), c.trys.pop();
                                        continue;
                                    }
                                    c.label = a[2], c.ops.push(t);
                                }
                            }
                            t = o.call(i, c);
                        } catch (e) {
                            t = [ 6, e ], s = 0;
                        } finally {
                            r = a = 0;
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        };
                    };
                }
                var i, o, r, s, a, c, t;
            }, s = void 0, new (s = Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(a.next(e));
                    } catch (e) {
                        t(e);
                    }
                }
                function o(e) {
                    try {
                        r(a.throw(e));
                    } catch (e) {
                        t(e);
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t);
                    })).then(i, o);
                }
                r((a = a.apply(e, [])).next());
            });
            var e, s, a;
        },
        setSystemInfo: function(n) {
            var i = this;
            try {
                P("getSystemInfo") && T.getSystemInfo({
                    success: function(e) {
                        var t = e.platform, e = e.model;
                        n.extendBean("platform", i.getPlatFormType(t)), n.extendBean("model", e);
                    }
                });
            } catch (n) {}
        },
        getPlatFormType: function(e) {
            for (var t, n = {
                android: /android/i,
                ios: /ios/i,
                windows: /windows/i,
                macos: /mac/i,
                devtools: /devtools/i
            }, i = a.other, o = 0; o < Object.keys(n).length; o++) {
                var r = Object.keys(n)[o];
                if (null != (t = n[r]) && t.test(e)) {
                    i = a[r];
                    break;
                }
            }
            return i;
        },
        setNetworkChange: function(t) {
            P("onNetworkStatusChange") && T.onNetworkStatusChange(function(e) {
                e = E(e.networkType), t.extendBean("netType", e);
            });
        },
        setNetworkType: function(t) {
            P("getNetworkType") && T.getNetworkType({
                success: function(e) {
                    e = E(e.networkType), t.extendBean("netType", e);
                }
            });
        },
        refreshNetwork: function(e) {
            var t = this;
            this.timer && clearTimeout(this.timer), this.setNetworkType(e), this.timer = setTimeout(function() {
                t.refreshNetwork(e);
            }, 1e4);
        }
    }), J = T.request, C = (n(L = A, I = S = t), L.prototype = null === I ? Object.create(I) : (K.prototype = I.prototype, 
    new K()), Object.defineProperty(A.prototype, "getBean", {
        get: function() {
            var t = this;
            return Object.getOwnPropertyNames(this.bean).map(function(e) {
                return e + "=" + t.bean[e];
            }).join("&") + "&from=" + encodeURIComponent(i());
        },
        enumerable: !1,
        configurable: !0
    }), A.prototype.initOfflineLog = function() {
        A.use(M);
    }, A.prototype.uploadLogs = function(e, t) {
        this.lifeCycle.emit("uploadLogs", e = void 0 === e ? {} : e, t = void 0 === t ? {} : t);
    }, A.prototype.reportPv = function(e) {
        var t, n = this;
        e && (t = Object.getOwnPropertyNames(this.bean).filter(function(e) {
            return "id" !== e;
        }).map(function(e) {
            return e + "=" + n.bean[e];
        }).join("&") + "&from=" + encodeURIComponent(i()), this.send({
            url: this.config.url + "/" + e + "?" + t,
            addBean: !1
        }, function() {}, function() {}));
    }, A.__version__ = "1.34.21", A.sessionID = "session-" + Date.now(), A.asyncPluginIndex = 0, 
    A), k = new d({
        name: "aid",
        aid: "",
        init: function(e) {
            var t = wx || qq;
            try {
                var n = !0 !== e && e || t.getStorageSync("AEGIS_ID");
                n || (n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16);
                }), t.setStorageSync("AEGIS_ID", n)), this.aid = n;
            } catch (e) {}
        },
        onNewAegis: function(e) {
            e.bean.aid = this.aid, e.config.aid = this.aid;
        }
    }), V = wx || qq, N = [], $ = V.request, G = !1, U = new d({
        name: "reportApiSpeed",
        override: !1,
        onNewAegis: function(e, t) {
            this.override || (this.override = !0, this.hackRequest(e.config));
        },
        hackRequest: function(a) {
            var c = this, u = 0;
            x({
                onStart: function() {
                    u = Date.now();
                },
                success: function(e, t) {
                    var n, i, o, r = {
                        method: t.method || "get",
                        url: l(t.url),
                        duration: Date.now() - u,
                        status: e.statusCode,
                        isHttps: (n = t.url, /^https/.test(n)),
                        type: "fetch"
                    }, s = "req url: " + r.url + " \n                        \nreq method: " + r.method + " \n                        \nreq param: " + f(t.data) + " \n                        \nres duration: " + r.duration + " \n                        \nres status: " + e.statusCode + " \n                        \nres data: " + JSON.stringify(e.data);
                    c.publishNormalLog({
                        msg: s,
                        level: m.API_RESPONSE
                    }), c.publishSpeedLog(r), ("function" == typeof (null == (n = a.api) ? void 0 : n.retCodeHandler) ? (o = (i = a.api.retCodeHandler(e.data, t.url, t, e)).code, 
                    i = i.isErr, r.ret = o, i) : (i = function(e, t) {
                        var n;
                        try {
                            "string" == typeof e && (e = JSON.parse(e)), "function" == typeof (null == (n = null == t ? void 0 : t.ret) ? void 0 : n.join) && (p = [].concat(t.ret.map(function(e) {
                                return e.toLowerCase();
                            })));
                            var i = Object.getOwnPropertyNames(e).filter(function(e) {
                                return -1 !== p.indexOf(e.toLowerCase());
                            });
                            return i.length ? "" + e[i[0]] : "unknown";
                        } catch (e) {
                            return "unknown";
                        }
                    }(e.data, a.api), r.ret = i, r = (r = null == (e = a.api) ? void 0 : e.errCode) && [].concat(r), 
                    o = (o = null == (e = a.api) ? void 0 : e.code) && [].concat(o), r && -1 !== r.indexOf(i) || o && -1 === o.indexOf(i) || !r && !o && "0" !== i && "unknown" !== i)) && c.publishNormalLog({
                        msg: s,
                        level: m.RET_ERROR
                    });
                }
            });
        },
        publishSpeedLog: function(t) {
            this.$walk(function(e) {
                e.speedLogPipeline(t);
            });
        },
        publishApiRes: function(t) {
            this.$walk(function(e) {
                e.normalLogPipeline(t);
            });
        },
        publishNormalLog: function(t) {
            this.$walk(function(e) {
                e.normalLogPipeline(t);
            });
        }
    }), H = wx || qq, t = new d({
        name: "onError",
        init: function() {
            this.listenError(), this.hackRequest();
        },
        listenError: function() {
            var t = this;
            H.onError(function(e) {
                e && t.publishErrorLog({
                    msg: e,
                    level: m.ERROR
                });
            });
        },
        publishErrorLog: function(t) {
            this.$walk(function(e) {
                e.normalLogPipeline(t);
            });
        },
        hackRequest: function() {
            var r = this;
            x({
                complete: function(e, t) {
                    var n = e.errMsg, i = e.statusCode, o = e.data, e = "";
                    -1 < n.indexOf("timeout") ? e = "timeout" : -1 < n.indexOf("fail") || !i || i < 0 ? e = "failed" : 400 <= i && (e = "error"), 
                    e && r.publishErrorLog({
                        msg: "AJAX_ERROR: request " + e + "\n                  \nres status: " + i + "\n                  \nreq url: " + t.url + "\n                  \nreq method: " + t.method + "\n                  \nreq body: " + f(o) + ".",
                        level: m.AJAX_ERROR
                    });
                }
            });
        }
    }), I = new d({
        name: "reportAssetSpeed",
        isStart: !1,
        onNewAegis: function(e) {
            this.isStart || (this.isStart = !0, this.start(e));
        },
        entryTypes: [ "render", "script" ],
        start: function() {
            var t = this, e = wx || qq;
            e.getPerformance && e.getPerformance().createObserver(function(e) {
                e.getEntries().forEach(function(e) {
                    if (e.duration) switch (e.entryType) {
                      case "render":
                        t.publishPagePerformance(e);
                        break;

                      case "script":
                        t.publishAssetLog(e);
                    }
                });
            }).observe({
                entryTypes: this.entryTypes
            });
        },
        generateLog: function(e) {
            return {
                url: l(e.path || e.moduleName) + "js",
                method: "get",
                duration: Number(e.duration.toFixed(2)),
                status: 200,
                type: "static",
                isHttps: !0,
                urlQuery: "",
                domainLookup: 0,
                connectTime: 0
            };
        },
        publishAssetLog: function(t) {
            var n = this;
            this.$walk(function(e) {
                e.speedLogPipeline(n.generateLog(t));
            });
        },
        publishSpeedLog: function(t) {
            this.$walk(function(e) {
                e.speedLogPipeline(t);
            });
        },
        publishPagePerformance: function(e) {
            var t = {
                dnsLookup: 0,
                tcp: 0,
                ssl: 0,
                ttfb: 0,
                contentDownload: 0,
                domParse: 0,
                resourceDownload: 0,
                firstScreenTiming: e.duration
            };
            this.$walk(function(e) {
                e.send({
                    url: e.config.performanceUrl,
                    data: t
                });
            });
        }
    }), d = (new d({
        name: "pagePerformance"
    }), new d({
        name: "pagePerformance",
        onNewAegis: function(e) {
            try {
                P("getPerformance") && this.getFirstScreenTiming(e), this.setPagePV(e);
            } catch (e) {}
        },
        getFirstScreenTiming: function(r) {
            var s, a = this;
            T.getPerformance().createObserver(function(e) {
                for (var t = e.getEntries(), n = 0; n < t.length; n++) {
                    var i = t[n], o = i.duration < 0 ? 0 : i.duration;
                    if ("firstRender" === i.name) {
                        s = {
                            dnsLookup: 0,
                            tcp: 0,
                            ssl: 0,
                            ttfb: 0,
                            contentDownload: 0,
                            domParse: 0,
                            resourceDownload: 0,
                            firstScreenTiming: o
                        }, a.publish(s, r);
                        break;
                    }
                }
            }).observe({
                entryTypes: [ "render" ]
            });
        },
        publish: function(e, t) {
            var n, i, o = [], r = this.$getConfig(t), s = -1 === (null == (n = t.config.performanceUrl) ? void 0 : n.indexOf("?")) ? "?" : "&";
            for (i in e) o.push(i + "=" + e[i]);
            "function" == typeof r.urlHandler ? this.$walk(function(e) {
                e.send({
                    url: t.config.performanceUrl + s + o.join("&") + "&from=" + (encodeURIComponent(r.urlHandler()) || window.location.href),
                    beanFilter: [ "from" ],
                    type: y.PERFORMANCE
                });
            }) : this.$walk(function(e) {
                e.send({
                    url: t.config.performanceUrl + s + o.join("&"),
                    type: y.PERFORMANCE
                });
            });
        },
        setPagePV: function(e) {
            var t = this;
            T.onAppRoute && T.onAppRoute(function(e) {
                "appLaunch" !== e.openType && t.$walk(function(e) {
                    e.send({
                        url: "" + e.config.pvUrl,
                        type: y.PV
                    });
                });
            });
        }
    }));
    function A(e) {
        var i, o, r, l = S.call(this, e) || this;
        l.originRequest = J, l.speedLogPipeline = b([ (o = l.config, r = {}, function(e, t) {
            var n;
            o.speedSample ? Array.isArray(e) ? (n = e.filter(function(e) {
                var t = !r[e.url] || -1 === r[e.url].indexOf(e.status);
                return r[e.url] = (r[e.url] || []).concat(e.status), t;
            })).length && t(n) : r[e.url] && -1 !== r[e.url].indexOf(e.status) || (r[e.url] = (r[e.url] || []).concat(e.status), 
            t(e)) : t(e);
        }), w(l), (i = l, function(t, n) {
            P("getNetworkType") ? T.getNetworkType({
                success: function(e) {
                    e = E(e.networkType), i.extendBean("netType", e), n(t);
                }
            }) : n(t);
        }), function(e, t) {
            l.lifeCycle.emit("beforeReportSpeed", e);
            var n = l.config.beforeReportSpeed;
            if ((e = "function" == typeof n ? e.filter(function(e) {
                return !1 !== n(e);
            }) : e).length) return t(e);
        }, function(e) {
            var t, n, i;
            l.send({
                url: "" + l.config.speedUrl,
                method: "post",
                data: (e = e, t = l.bean, n = {
                    fetch: [],
                    static: []
                }, i = {}, Array.isArray(e) ? e.forEach(function(e) {
                    n[e.type].push(e);
                }) : n[e.type].push(e), i.payload = JSON.stringify(s({
                    duration: n
                }, t)), i)
            });
        } ]), l.requestQueue = [], l.requesting = !1, l.send = function(e, t, n) {
            if (e.url && l.bean.id) {
                var i, o, r, s;
                if (!(l.requesting || P("getNetworkType") && void 0 === l.bean.netType)) return l.requesting = !0, 
                o = e.url, l.config.whiteListUrl === o && (i = t, t = function(e) {
                    null != i && i(JSON.stringify(e.data));
                }), !1 !== e.addBean && (o = o + (-1 === o.indexOf("?") ? "?" : "&") + l.getBean), 
                u = e.method || "get", r = function() {
                    l.requesting = !1;
                    var e = l.requestQueue.shift();
                    e && l.send(e.options, e.success, e.fail);
                }, s = e, (s = (a = l.config.onBeforeRequest) ? a(e, l) : s) && s.url ? ("get" === u ? (a = o, 
                c = s.data, o = "string" != typeof a ? "" : "object" == _typeof(c) && c ? (u = Object.getOwnPropertyNames(c).map(function(e) {
                    var t = c[e];
                    return e + "=" + ("string" == typeof t ? encodeURIComponent(t) : encodeURIComponent(JSON.stringify(t)));
                }).join("&").replace(/eval/gi, "evaI"), a + (-1 === a.indexOf("?") ? "?" : "&") + u) : a, 
                l.originRequest({
                    url: o,
                    success: t,
                    fail: n,
                    complete: r
                })) : ("string" == typeof s.data && (s.data = s.data.replace(/eval/gi, "evaI")), 
                l.originRequest({
                    url: o,
                    header: s.contentType ? {
                        "content-type": s.contentType
                    } : void 0,
                    method: "POST",
                    data: s.data,
                    success: t,
                    fail: n,
                    complete: r
                })), !0) : (o = "", s || (o = "Sending request blocked", console.log(o)), s.url || (o = "Please handle the parameters reasonably, options.url is necessary", 
                console.warn(o)), null != n && n(o), r(), !1);
                l.requestQueue.push({
                    options: e,
                    success: t,
                    fail: n
                });
            }
            var a, c, u;
        };
        try {
            e.offlineLog && l.initOfflineLog(), l.init(e), l.extendBean("sessionId", A.sessionID), 
            l.extendBean("referer", (P("getLaunchOptionsSync") ? T.getLaunchOptionsSync() : {
                scene: ""
            }).scene || "");
        } catch (e) {
            console.warn(e), console.log("%c以上错误发生在初始化 Aegis 的过程中，将会影响您正常使用 Aegis，\n建议您联系 aegis-helper，进行反馈，感谢您的支持。", "color: red"), 
            l.sendSDKError(e);
        }
        return l;
    }
    function K() {
        this.constructor = L;
    }
    function _(e) {
        var o, r, s = this, e = void 0 === (e = (t = void 0 === e ? {} : e).path) ? "/.aegis.offline.log" : e, t = void 0 === (t = t.limit) ? 2e4 : t;
        this.offlineBuffer = [], this.insertLog = (o = null, r = [], function(e) {
            r = r.concat(e), o = o || setTimeout(function() {
                o = null;
                var e, t = s.fileSystem, n = s.filePath, i = r.map(function(e) {
                    return JSON.stringify(e);
                }).join("\n") + "\n";
                i && (e = function(e) {
                    e ? s.checkLimit(i, function() {
                        r = [];
                    }) : t.writeFile({
                        data: i,
                        filePath: n,
                        encoding: "utf8",
                        fail: function(e) {
                            console.error(e);
                        },
                        success: function() {
                            r = [];
                        }
                    });
                }, t.access({
                    path: n,
                    success: function() {
                        e(!0);
                    },
                    fail: function() {
                        e();
                    }
                }));
            }, 2e3);
        }), this.ready = function(e) {
            s.fileSystem ? setTimeout(function() {
                e(null);
            }, 0) : (e(new Error("getFileSystemManager file")), s.offlineLog = !1);
        }, this.clearLogs = function() {
            var e = s.fileSystem, t = s.filePath;
            e.writeFile({
                filePath: t,
                data: "",
                fail: function() {
                    e.unlinkSync(t);
                }
            });
        }, this.save2Offline = function(e, t) {
            e = (e = Array.isArray(e) ? e : [ e ]).map(function(e) {
                return "string" == typeof e && (e = {
                    msg: e
                }), function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    if (0 === e.length) throw new TypeError("Cannot convert undefined or null to object");
                    for (var n = Object(e[0]), i = 1; i < e.length; i++) {
                        var o = e[i];
                        if (null !== o) for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
                    }
                    return n;
                }({
                    id: t.id,
                    uin: t.uin,
                    time: +Date.now(),
                    version: t.version,
                    from: i()
                }, e);
            }), s.fileSystem ? s.insertLog(e) : (s.fileSystem || s.offlineBuffer.length || s.ready(function(e) {
                e ? console.error(e) : s.offlineBuffer.length && (s.addLogs(s.offlineBuffer), s.offlineBuffer = []);
            }), s.offlineBuffer = s.offlineBuffer.concat(e));
        }, this.addLogs = function(e) {
            s.fileSystem && s.insertLog(e);
        }, this.filePath = T.env.USER_DATA_PATH + e, this.fileSystem = T.getFileSystemManager(), 
        this.limitSize = t;
    }
    return C.use(t), C.use(U), C.use(k), C.use(I), C.use(d), C.use(q), C;
});