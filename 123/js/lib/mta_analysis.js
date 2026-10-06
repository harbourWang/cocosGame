var MTA_CONFIG = {
    app_id: "",
    event_id: "",
    api_base: "https://pingtas.qq.com/pingd",
    prefix: "_mta_",
    version: "1.3.6",
    stat_share_app: !1,
    stat_pull_down_fresh: !1,
    stat_reach_bottom: !1
};

function getNetworkType(e) {
    wx.getNetworkType({
        success: function(t) {
            e(t.networkType);
        }
    });
}

function getSystemInfo() {
    var t = wx.getSystemInfoSync();
    return {
        adt: encodeURIComponent(t.model),
        scl: t.pixelRatio,
        scr: t.windowWidth + "x" + t.windowHeight,
        lg: t.language,
        fl: t.version,
        jv: encodeURIComponent(t.system),
        tz: encodeURIComponent(t.platform)
    };
}

function getUID() {
    try {
        return wx.getStorageSync(MTA_CONFIG.prefix + "auid");
    } catch (t) {}
}

function setUID() {
    try {
        var t = getRandom();
        return wx.setStorageSync(MTA_CONFIG.prefix + "auid", t), t;
    } catch (t) {}
}

function getSID() {
    try {
        return wx.getStorageSync(MTA_CONFIG.prefix + "ssid");
    } catch (t) {}
}

function setSID() {
    try {
        var t = "s" + getRandom();
        return wx.setStorageSync(MTA_CONFIG.prefix + "ssid", t), t;
    } catch (t) {}
}

function getRandom(t) {
    for (var e = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], n = 10; 1 < n; n--) {
        var a = Math.floor(10 * Math.random()), o = e[a];
        e[a] = e[n - 1], e[n - 1] = o;
    }
    for (n = a = 0; n < 5; n++) a = 10 * a + e[n];
    return (t || "") + (a + "" + +new Date());
}

function getPagePath() {
    try {
        var t = getCurrentPages(), e = "/";
        return e = 0 < t.length ? t.pop().__route__ : e;
    } catch (t) {}
}

function getMainInfo() {
    var t, e = {
        dm: "wechat.apps.xx",
        url: getPagePath(),
        pvi: "",
        si: "",
        ty: 0
    };
    return e.pvi = ((t = getUID()) || (t = setUID(), e.ty = 1), t), e.si = getSID() || setSID(), 
    e;
}

function getBasicInfo() {
    var t = getSystemInfo();
    return getNetworkType(function(t) {
        try {
            wx.setStorageSync(MTA_CONFIG.prefix + "ntdata", t);
        } catch (t) {}
    }), t.ct = wx.getStorageSync(MTA_CONFIG.prefix + "ntdata") || "4g", t;
}

function getExtentInfo() {
    var t, e = MTA.Data.userInfo, n = [];
    for (t in e) e.hasOwnProperty(t) && n.push(t + "=" + e[t]);
    return e = n.join(";"), {
        r2: MTA_CONFIG.app_id,
        r4: "wx",
        ext: "v=" + MTA_CONFIG.version + (null !== e && "" !== e ? ";ui=" + encodeURIComponent(e) : "")
    };
}

var MTA = {
    App: {
        init: function(t) {
            "appID" in t && (MTA_CONFIG.app_id = t.appID), "eventID" in t && (MTA_CONFIG.event_id = t.eventID), 
            "statShareApp" in t && (MTA_CONFIG.stat_share_app = t.statShareApp), "statPullDownFresh" in t && (MTA_CONFIG.stat_pull_down_fresh = t.statPullDownFresh), 
            "statReachBottom" in t && (MTA_CONFIG.stat_reach_bottom = t.statReachBottom), setSID();
            try {
                "lauchOpts" in t && (MTA.Data.lanchInfo = t.lauchOpts, MTA.Data.lanchInfo.landing = 1);
            } catch (t) {}
        }
    },
    Page: {
        init: function() {
            var t, e, n, a, o = getCurrentPages()[getCurrentPages().length - 1];
            o.onShow && (t = o.onShow, o.onShow = function() {
                MTA.Page.stat(), t.call(this, arguments);
            }), MTA_CONFIG.stat_pull_down_fresh && o.onPullDownRefresh && (e = o.onPullDownRefresh, 
            o.onPullDownRefresh = function() {
                MTA.Event.stat(MTA_CONFIG.prefix + "pulldownfresh", {
                    url: o.__route__
                }), e.call(this, arguments);
            }), MTA_CONFIG.stat_reach_bottom && o.onReachBottom && (n = o.onReachBottom, o.onReachBottom = function() {
                MTA.Event.stat(MTA_CONFIG.prefix + "reachbottom", {
                    url: o.__route__
                }), n.call(this, arguments);
            }), MTA_CONFIG.stat_share_app && o.onShareAppMessage && (a = o.onShareAppMessage, 
            o.onShareAppMessage = function() {
                return MTA.Event.stat(MTA_CONFIG.prefix + "shareapp", {
                    url: o.__route__
                }), a.call(this, arguments);
            });
        },
        multiStat: function(t, e) {
            var n;
            1 == e ? MTA.Page.stat(t) : (e = getCurrentPages()[getCurrentPages().length - 1]).onShow && (n = e.onShow, 
            e.onShow = function() {
                MTA.Page.stat(t), n.call(this, arguments);
            });
        },
        stat: function(t) {
            if ("" != MTA_CONFIG.app_id) {
                var e = [], n = getExtentInfo();
                if (t && (n.r2 = t), t = [ getMainInfo(), n, getBasicInfo() ], MTA.Data.lanchInfo) {
                    t.push({
                        ht: MTA.Data.lanchInfo.scene,
                        rdm: "/",
                        rurl: MTA.Data.lanchInfo.path
                    }), MTA.Data.lanchInfo.query && MTA.Data.lanchInfo.query._mta_ref_id && t.push({
                        rarg: MTA.Data.lanchInfo.query._mta_ref_id
                    });
                    try {
                        1 == MTA.Data.lanchInfo.landing && (n.ext += ";lp=1", MTA.Data.lanchInfo.landing = 0);
                    } catch (t) {}
                }
                t.push({
                    rand: +new Date()
                });
                for (var n = 0, a = t.length; n < a; n++) for (var o in t[n]) t[n].hasOwnProperty(o) && e.push(o + "=" + (void 0 === t[n][o] ? "" : t[n][o]));
                wx.request({
                    url: MTA_CONFIG.api_base + "?" + e.join("&").toLowerCase()
                });
            }
        }
    },
    Event: {
        stat: function(t, e) {
            if ("" != MTA_CONFIG.event_id) {
                var n, a = [], o = getMainInfo(), r = getExtentInfo(), s = (o.dm = "wxapps.click", 
                o.url = t, r.r2 = MTA_CONFIG.event_id, void 0 === e ? {} : e), i = [];
                for (n in s) s.hasOwnProperty(n) && i.push(encodeURIComponent(n) + "=" + encodeURIComponent(s[n]));
                for (s = i.join(";"), r.r5 = s, s = 0, r = (o = [ o, r, getBasicInfo(), {
                    rand: +new Date()
                } ]).length; s < r; s++) for (var c in o[s]) o[s].hasOwnProperty(c) && a.push(c + "=" + (void 0 === o[s][c] ? "" : o[s][c]));
                wx.request({
                    url: MTA_CONFIG.api_base + "?" + a.join("&").toLowerCase()
                });
            }
        }
    },
    Data: {
        userInfo: null,
        lanchInfo: null
    }
};

module.exports = MTA;