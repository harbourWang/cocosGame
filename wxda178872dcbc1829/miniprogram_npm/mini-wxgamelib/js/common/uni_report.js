function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

var wgLogin = require("./welogin"), util = require("./util"), tools = {
    ajax: function(t, e, i) {
        wgLogin.request({
            url: "https://game.weixin.qq.com/cgi-bin/comm/pagestat?op=batch",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                monitor_data: t
            },
            success: function() {
                e && e.call(this, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
            },
            fail: function() {
                i && i.call(this, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
            }
        });
    },
    mapToStr: function(t, e) {
        var i, o = [], e = e || "&";
        for (i in t) o.push(i + "=" + t[i]);
        return o.join(e);
    },
    getQueryStr: function(t, e) {
        e = ("" + (e || location.search)).replace(/#(.*)$/g, "").replace(/&amp;/g, "&").match(new RegExp("[?&]" + t + "=([^&]+)", "i"));
        return null === e || e.length <= 1 ? "" : e[1];
    },
    getClientVersion: function(t) {
        var t = (navigator.userAgent || navigator.wxuserAgent || t).match(/MicroMessenger\/([\d\.]+)/i), e = "";
        return (e = (e = t && 1 < t.length ? t[1] : e).split(".")).length = 3, e.join(".") + "";
    },
    isType: function(t, e) {
        return Object.prototype.toString.call(e).match(/\s(\w+)/)[1].toLowerCase() === t;
    }
}, instance = null;

function WxgameReport() {
    if (instance) return instance;
    (instance = this).init();
}

WxgameReport.prototype = {
    constructor: WxgameReport,
    init: function() {
        var e = this;
        this.config = {
            reportsize: 5,
            reportcgi: "https://game.weixin.qq.com/cgi-bin/comm/pagestat?op=batch",
            persistkey: "mmgamecenter_universe_quality_key",
            delay: 1e3
        }, this.hasBaseSetted = !1, this.isFirstReport = !0, this.base = {
            bid: 1,
            scene_id: 0,
            device: 0,
            network_type: 1,
            client_version: "",
            ssid: 0
        }, this.collectBase(function(t) {
            e.base = Object.assign(e.base, t);
        }), this.other = {
            type: 999999,
            status: 999999,
            cost_time: {},
            url: "",
            time_ms: 0,
            ext: ""
        }, this.dataPool = [];
    },
    collectBase: function(o) {
        util.getReportObj(function(t) {
            var e = t.device, i = t.networktype, t = t.clientVersion + "@" + t.sdkVersion;
            o && o({
                device: "android" === e ? 2 : "iphone" === e ? 1 : 0,
                network_type: null == i ? 1 : parseInt(i),
                client_version: t || ""
            });
        });
    },
    abstractOneReport: function(t) {
        var e, i = this.base, o = this.other, n = {};
        for (e in i) !{}.hasOwnProperty.call(i, e) || (n[e] = (void 0 !== t[e] ? t : i)[e]);
        for (e in o) if ({}.hasOwnProperty.call(o, e)) if (n[e] = (void 0 !== t[e] ? t : o)[e], 
        "time_ms" === e) n[e] = Date.now(); else if ("url" === e && 0 === t.type) n[e] = t[e]; else if ("cost_time" === e) {
            for (var r in t[e]) {
                var s = t[e][r];
                !isNaN(s) && void 0 !== s || (t[e][r] = 999999);
            }
            n[e] = (void 0 === t[e] ? o : t)[e];
        } else "ext" === e && "object" === _typeof(t[e]) && (n[e] = JSON.stringify(t[e]));
        return n;
    },
    reportArr: function(t, e) {
        t = JSON.stringify(t);
        tools.ajax(t, function(t) {
            e && e.call(this, t.ret);
        });
    },
    doReport: function() {
        var e = this, i = (this.config.persistkey, this.dataPool.splice(0, this.config.reportsize));
        i.length && this.reportArr(i, function(t) {
            0 !== t && (e.dataPool = i.concat(e.dataPool)), isNaN(t) || 0 === t || (e.dataPool = e.dataPool.slice(1));
        });
    },
    set_config: function(t) {
        if (!tools.isType("object", t)) throw "IllegalArgumentException: params must be type of Object";
        var e, i = this.config;
        for (e in t) ({}).hasOwnProperty.call(t, e) && {}.hasOwnProperty.call(i, e) && (i[e] = t[e]);
    },
    set_base: function(t) {
        if (!tools.isType("object", t)) throw "IllegalArgumentException: params must be type of Object";
        var e, i = this.base;
        for (e in t) ({}).hasOwnProperty.call(t, e) && {}.hasOwnProperty.call(i, e) && (i[e] = t[e]);
        this.hasBaseSetted = !0;
    },
    report: function(t) {
        if (!this.hasBaseSetted) throw "IllegalStateException: please invoke API `set_base` before.";
        t = this.abstractOneReport(t), this.dataPool = this.dataPool.concat(t), this.dataPool.length >= this.config.reportsize && this.doReport(), 
        this.timer && clearTimeout(this.timer), this.timer = setTimeout(this.doReport.bind(this), this.config.delay);
    },
    call: function(t, e) {
        if (null == e) throw "IllegalArgumentException: name is null or undefined.";
        if (!tools.isType("string", e)) throw "IllegalArgumentException: name must be type of String";
        this.report({
            type: 1,
            status: t,
            ext: e
        });
    },
    afterCall: function(t, e, i) {
        if (null == e) throw "IllegalArgumentException: name is null or undefined.";
        if (!tools.isType("string", e)) throw "IllegalArgumentException: name must be type of String";
        if (i && !tools.isType("object", i) && !tools.isType("string", i)) throw "IllegalArgumentException: res must be type of String or Object";
        this.report({
            type: 1,
            status: t,
            ext: e + "_res:" + (tools.isType("object", i = i || "") ? JSON.stringify(i) : i)
        });
    },
    render: function(t) {
        this.call(1e3, "render_" + (tools.isType("object", t) ? JSON.stringify(t) : t));
    },
    readCache: function(t) {
        this.call(1001, "render_" + (tools.isType("object", t) ? JSON.stringify(t) : t));
    },
    click: function(t) {
        this.call(1002, "click_" + t);
    },
    afterClick: function(t, e) {
        this.afterCall(1003, "click_" + t, e);
    },
    invokeJsapi: function(t) {
        this.call(1004, "invoke_" + t);
    },
    afterInvokeJsapi: function(t, e) {
        this.afterCall(1005, "invoke_" + t, e);
    },
    callFnBegin: function(t) {
        this.call(1006, "fncall_" + t);
    },
    callFnEnd: function(t, e) {
        this.afterCall(1007, "fncall_" + t, e);
    }
}, module.exports = new WxgameReport();