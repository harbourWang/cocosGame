var util = require("./util"), weLogin = require("./welogin");

function batch14359(e, i, n) {
    for (var t = [], o = 0, u = i.length; o < u; o++) {
        var r = i[o], r = [ "GameID=", encodeURIComponent(r.sGameId || ""), "&SceneID=", util.intNumber(r.iSceneId || "0"), "&UIArea=", util.intNumber(r.iUIArea || "0"), "&PositionID=", util.intNumber(r.iPositionId || "0"), "&ActionID=", util.intNumber(r.iActionId || "0"), "&Ssid=", util.intNumber(r.iSsid || "0"), "&GiftID=", util.intNumber(r.iGiftId || "0"), "&GeneralID=", encodeURIComponent(r.sGeneralId || ""), "&VideoQuality=", util.intNumber(r.iVideoQuality || "0"), "&Type=", util.intNumber(r.iType || "0"), "&Type_Id=", util.intNumber(r.iTypeId || "0"), "&Time=", util.intNumber(r.iTime || "0"), "&AnchorType=", util.intNumber(r.iAnchorType || "0"), "&Topicid=", util.intNumber(r.iTopicId || "0"), "&Device=", util.intNumber(r.sDevice || ("iphone" == e.device ? 1 : 2) || "0"), "&ClientVersion=", util.intNumber(r.sClientVersion || e.clientVersion || "0"), "&ConnectType=", util.intNumber(r.sConnectType || e.networktype || "0"), "&SourceID=", util.intNumber(r.iSourceID || e.iSourceID || "0"), "&sdkVersion=", util.intNumber(r.sdkVersion || e.sdkVersion), "&AppId=", encodeURIComponent(r.sAppid || ""), "&DeviceBrand=", encodeURIComponent(r.sDeviceBrand || e.brand), "&DeviceModel=", encodeURIComponent(r.sDeviceModel || e.model), "&ExternInfo=", encodeURIComponent(r.sExternInfo || e.sExternInfo || "") ].join("");
        t.push(r);
    }
    weLogin.request({
        url: "https://game.weixin.qq.com/cgi-bin/comm/appstat",
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
            batch14359(e, i, n);
        });
    }
};