function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

var _sysObj = !1, nilReport = [];

function intVersion(e) {
    for (var t = (e = e || "").replace(/[^0-9\.]+/g, "").split(/[^0-9]+/).splice(0, 3), n = 0, o = [ 1e3, 100, 1 ], r = 0, i = t.length; r < i; r++) n += +t[r] * o[r];
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

function _14359(e, t) {
    return [ "GameID=", encodeURIComponent(t.sGameId || ""), "&SceneID=", intNumber(t.iSceneId || "0"), "&UIArea=", intNumber(t.iUIArea || "0"), "&PositionID=", intNumber(t.iPositionId || "0"), "&ActionID=", intNumber(t.iActionId || "0"), "&Ssid=", intNumber(t.iSsid || "0"), "&GiftID=", intNumber(t.iGiftId || "0"), "&VideoQuality=", intNumber(t.iVideoQuality || "0"), "&Type=", intNumber(t.iType || "0"), "&Type_Id=", intNumber(t.iTypeId || "0"), "&Time=", intNumber(t.iTime || "0"), "&AnchorType=", intNumber(t.iAnchorType || "0"), "&Topicid=", intNumber(t.iTopicId || "0"), "&Device=", intNumber(t.sDevice || ("iphone" == e.device ? 1 : 2) || "0"), "&ClientVersion=", intNumber(t.sClientVersion || e.clientVersion || "0"), "&ConnectType=", intNumber(t.sConnectType || e.networktype || "0"), "&SourceID=", intNumber(t.iSourceID || e.iSourceID || "0"), "&sdkVersion=", intNumber(t.sdkVersion || e.sdkVersion), "&AppId=", encodeURIComponent(t.sAppid || ""), "&GeneralID=", encodeURIComponent(t.sGeneralId || ""), "&DeviceBrand=", encodeURIComponent(t.sDeviceBrand || e.brand), "&DeviceModel=", encodeURIComponent(t.sDeviceModel || e.model), "&ExternInfo=", encodeURIComponent(t.sExternInfo || e.sExternInfo || "") ].join("");
}

module.exports = Behavior({
    methods: {
        _dataset: function(e) {
            return e && e.currentTarget && e.currentTarget.dataset ? e.currentTarget.dataset : e && e.target && e.target.dataset ? e.target.dataset : {};
        },
        _res: function(t) {
            var e = !(!t || "object" != _typeof(t)) && t;
            if (!1 === e) {
                if ("string" == typeof t) try {
                    t = JSON.parse(t);
                } catch (e) {
                    t = {};
                } else t = {};
                e = t;
            }
            return e;
        },
        request: function(e) {
            var t = this;
            this.__reqReady ? (this.request = this.__request, this.__request(e)) : this.__reqTimeout = setTimeout(function() {
                t.request(e);
            }, 200);
        },
        initRequest: function(e) {
            var t = this;
            t.__request = e, t.reqReady = !0, t.__reqReady = !0;
        },
        report: function(t) {
            var e = this;
            t ? (e.getReportObj(function(e) {
                nilReport.push(_14359(e, t));
            }), setTimeout(function() {
                e.report();
            }, 10)) : (clearTimeout(e._rtimeout), e.__reqReady && 0 < nilReport.length ? nilReport.length < 5 && e.report.cnt < 3 ? (e.report.cnt++, 
            e._rtimeout = setTimeout(function() {
                e.report();
            }, 1e3)) : (e.report.cnt = 0, e.request({
                url: "https://game.weixin.qq.com/cgi-bin/comm/appstat",
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: "BatchData=" + encodeURIComponent(JSON.stringify(nilReport.concat())),
                success: function(e) {},
                fail: function(e) {}
            }), nilReport = []) : e._rtimeout = setTimeout(function() {
                e.report();
            }, 100));
        },
        getReportObj: function(n) {
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
        },
        setKeyValue: function(t, n) {
            wx.setStorage({
                key: t,
                data: n,
                fail: function(e) {
                    console.log("setStorage res", e), wx.clearStorageSync(), wx.setStorageSync(t, n);
                }
            });
        },
        getKeyValue: function(e) {
            return wx.getStorageSync(e);
        },
        delKeyValue: function(e) {
            return wx.removeStorageSync(e);
        },
        clearKeyValue: function() {
            wx.clearStorageSync();
        },
        getValue: function(e, t) {
            for (var n, o = t.split("."), r = e || {}; n = o.shift(); ) {
                if (void 0 === r[n]) return;
                r = r[n];
            }
            return r;
        }
    }
});