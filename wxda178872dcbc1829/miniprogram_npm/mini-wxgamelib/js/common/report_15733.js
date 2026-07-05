var util = require("./util"), weLogin = require("./welogin");

function batch15733(e, i, n) {
    for (var t = [], o = 0, u = i.length; o < u; o++) {
        var r = i[o], r = [ "GameId=", encodeURIComponent(r.sGameId || "0"), "&SceneId=", util.intNumber(r.iSceneId || "0"), "&UIArea=", util.intNumber(r.iUIArea || "0"), "&PositionId=", util.intNumber(r.iPositionId || "0"), "&ActionId=", util.intNumber(r.iActionId || "0"), "&SsId=", util.intNumber(r.iSsid || "0"), "&GiftId=", util.intNumber(r.iGiftId || "0"), "&GeneralID=", encodeURIComponent(r.sGeneralId || ""), "&VideoQuality=", util.intNumber(r.iVideoQuality || "0"), "&Type=", util.intNumber(r.iType || "0"), "&TypeId=", util.intNumber(r.iTypeId || "0"), "&VideoID=", encodeURIComponent(r.iVideoId || ""), "&Time=", util.intNumber(r.iTime || "0"), "&Videotime=", util.intNumber(r.iVideoTime || "0"), "&depth=", util.intNumber(r.iDepth || "0"), "&AnchorType=", util.intNumber(r.iAnchorType || "0"), "&Device=", util.intNumber(r.sDevice || ("iphone" == e.device ? 1 : 2) || "0"), "&ClientVersion=", util.intNumber(r.sClientVersion || e.clientVersion || "0"), "&ConnectType=", util.intNumber(r.sConnectType || e.networktype || "0"), "&SourceID=", util.intNumber(r.iSourceID || e.iSourceID || "0"), "&sdkVersion=", util.intNumber(r.sdkVersion || e.sdkVersion), "&DeviceBrand=", encodeURIComponent(r.sDeviceBrand || e.brand), "&DeviceModel=", encodeURIComponent(r.sDeviceModel || e.model), "&ExternInfo=", encodeURIComponent(r.sExternInfo || e.sExternInfo || ""), "&extVersion=", util.intNumber(r.iExtVersion || ""), "&devInfo=", encodeURIComponent(r.sDevInfo || ""), "&Abt=0" ].join("");
        t.push(r);
    }
    weLogin.request({
        url: "https://game.weixin.qq.com/cgi-bin/comm/videostat",
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        data: "BatchData=" + encodeURIComponent(JSON.stringify(t)),
        success: function(e) {
            n && n("success");
        },
        fail: function(e) {
            n && n("fail");
        }
    });
}

module.exports = {
    batchCltStat: function(e, i, n) {
        util.getReportObj(function(e) {
            batch15733(e, i, n);
        });
    }
};