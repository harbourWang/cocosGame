function fullMonth(e) {
    return [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ][new Date(1e3 * (e || new Date().getTime() / 1e3)).getMonth()];
}

function fullDay(e) {
    e = new Date(1e3 * (e || new Date().getTime() / 1e3)).getDate();
    return e < 10 ? "0" + e : e;
}

function getYMD(e) {
    var e = new Date(1e3 * (e || new Date().getTime() / 1e3)), t = e.getFullYear(), n = e.getMonth() + 1, e = e.getDate();
    return [ t + "年", (n < 10 ? "0" : "") + n + "月", (e < 10 ? "0" : "") + e + "日" ].join("");
}

function getWeekDay(e) {
    e = new Date(1e3 * (e || new Date().getTime() / 1e3));
    return "星期" + "日一二三四五六".split("")[e.getDay()];
}

function formatTime(e) {
    var t = new Date(), t = new Date(t.toString().replace(/\d+:\d+:\d/, "00:00:00")), t = parseInt(t.getTime() / 1e3), t = (new Date(1e3 * (t - 86400)), 
    new Date(1e3 * e), t - e);
    return 86400 < t ? 31536e3 < t ? Math.floor(t / 31536e3) + "年前" : 2592e3 <= t ? Math.floor(t / 2592e3) + "月前" : 14515200 <= t ? Math.floor(t / 14515200) + "周前" : Math.floor(t / 86400) + "天前" : t <= 0 ? "今天" : "昨天";
}

function setKeyValue(t, n) {
    wx.setStorage({
        key: t,
        data: n,
        fail: function(e) {
            console.log("setStorage res", e), wx.clearStorageSync(), wx.setStorageSync(t, n);
        }
    });
}

function getKeyValue(e) {
    return wx.getStorageSync(e);
}

function delKeyValue(e) {
    return wx.removeStorageSync(e);
}

function clearKeyValue() {
    wx.clearStorageSync();
}

function formatNumber(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function _parseNetWork(e) {
    var e = e.toLowerCase(), t = {
        wifi: 0,
        uninet: 2,
        uniwap: 2,
        cmnet: 2,
        cmwap: 2,
        ctnet: 2,
        ctwap: 2,
        "2g": 2,
        "3g": 3,
        "3gnet": 3,
        "3gwap": 3,
        nonwifi: 3,
        "4g": 4,
        lte: 4,
        ctlte: 4,
        "3g+": 4,
        "4gnet": 4
    };
    return e in t ? t[e] + "" : "1";
}

function getAnchorType(e) {
    return "string" != typeof e || e.length < 4 ? "" : parseInt(e.slice(2, 4), 10);
}

var _sysObj = !1;

function getReportObj(n) {
    !1 !== _sysObj && "function" == typeof n ? n(_sysObj) : wx.getSystemInfo({
        complete: function(t) {
            (t = t || {}).device = /iOS\s\d+\./i.test(t.system || "") ? "iphone" : "android", 
            t.model = t.model || "", t.clientVersion = intVersion(t.version || "0"), t.sdkVersion = intVersion(t.SDKVersion || "0"), 
            wx.getNetworkType({
                complete: function(e) {
                    t.networktype = _parseNetWork(e.networkType), _sysObj = t, "function" == typeof n && n(_sysObj);
                }
            });
        }
    });
}

function intVersion(e) {
    for (var t = (e = e || "").replace(/[^0-9\.]+/g, "").split(/[^0-9]+/).splice(0, 3), n = 0, r = [ 1e3, 100, 1 ], a = 0, o = t.length; a < o; a++) n += +t[a] * r[a];
    return n;
}

function intNumber(e) {
    var t = /^\d+$/i.test("" + e);
    if (t) return e;
    try {
        t = parseInt(e);
    } catch (e) {
        t = 0;
    }
    return isNaN(t) ? 0 : t;
}

function stripThumbImg(e) {
    return e.replace(/\/\d+$/, "/0");
}

function getPageFrom() {
    var e = getCurrentPages(), t = e.length;
    return 1 < t ? e[t - 2] : {};
}

function _dataset(e) {
    return e && e.currentTarget && e.currentTarget.dataset ? e.currentTarget.dataset : e && e.target && e.target.dataset ? e.target.dataset : {};
}

function handleRequestError(e) {
    try {
        var t = wx.getSystemInfoSync() || {};
        e.errMsg && /^request:fail/.test(e.errMsg) && e.errMsg && /^request:fail/.test(e.errMsg) && ("6.5.6" !== t.version && "6.5.7" !== t.version || !/Android/i.test(t.system) || wx.showModal({
            title: "",
            content: "系统繁忙，请稍后再试(-1000)",
            confirmText: "好的",
            showCancel: !1
        }));
    } catch (e) {
        console.log("handleRequestError : " + e.message);
    }
}

function fix_app_init_params(e) {
    if ("query" in (e = e || {}) && "string" == typeof e.query) {
        for (var t = e.query.substr(1, e.query.length - 2) + ", ", n = /(\w+)=(.*?), (?:\w+=)?/i, r = null, a = {}; r = n.exec(t); ) a[r[1]] = r[2], 
        t = t.substr(r[1].length + r[2].length + 3);
        e.query = a;
    }
}

function throttle(t, n, r) {
    var a;
    return function() {
        var e = arguments;
        a = a || setTimeout(function() {
            t.apply(r, e), a = null;
        }, n);
    };
}

function debounce(t, n, r) {
    var a;
    return function() {
        var e = arguments;
        clearTimeout(a), a = setTimeout(function() {
            t.apply(r, e);
        }, n);
    };
}

module.exports = {
    setKeyValue: setKeyValue,
    getKeyValue: getKeyValue,
    delKeyValue: delKeyValue,
    clearKeyValue: clearKeyValue,
    stripThumbImg: stripThumbImg,
    getReportObj: getReportObj,
    intVersion: intVersion,
    intNumber: intNumber,
    formatTime: formatTime,
    getYMD: getYMD,
    getWeekDay: getWeekDay,
    fullDay: fullDay,
    getAnchorType: getAnchorType,
    dataset: _dataset,
    fullMonth: fullMonth,
    getPageFrom: getPageFrom,
    fixQueryStr: fix_app_init_params,
    handleRequestError: handleRequestError,
    throttle: throttle,
    debounce: debounce
};