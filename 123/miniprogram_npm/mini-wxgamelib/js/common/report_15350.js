var util = require("./util"), weLogin = require("./welogin");

function batch15350(e, n, t) {
    for (var i = [], o = 0, r = n.length; o < r; o++) {
        var u = n[o], u = [ "GameID=", encodeURIComponent(u.sGameId || ""), "&SceneID=", util.intNumber(u.iSceneId || "0"), "&UIArea=", util.intNumber(u.iUIArea || "0"), "&PositionID=", util.intNumber(u.iPositionId || "0"), "&ActionID=", util.intNumber(u.iActionId || "0"), "&OpType=", util.intNumber(u.iOpType || "0"), "&SSID=", util.intNumber(u.iSsid || "0"), "&GiftID=", util.intNumber(u.iGiftId || "0"), "&Type=", util.intNumber(u.iType || "0"), "&Type_Id=", util.intNumber(u.iTypeId || "0"), "&ActID=", util.intNumber(u.iActID || "0"), "&Device=", util.intNumber(u.sDevice || ("iphone" == e.device ? 1 : 2) || "0"), "&ClientVersion=", util.intNumber(u.sClientVersion || e.clientVersion || "0"), "&ConnectType=", encodeURIComponent(u.sConnectType || e.networktype || ""), "&SourceID=", util.intNumber(u.iSourceID || e.iSourceID || "0"), "&sdkVersion=", util.intNumber(u.sdkVersion || e.sdkVersion), "&extVersion=", util.intNumber(u.extVersion || e.extVersion), "&devInfo=", encodeURIComponent(u.devInfo || e.devInfo), "&DeviceBrand=", encodeURIComponent(u.sDeviceBrand || e.brand), "&DeviceModel=", encodeURIComponent(u.sDeviceModel || e.model), "&allpath=", encodeURIComponent(u.allpath || ""), "&RptId=", encodeURIComponent(u.RptId || ""), "&URL=", encodeURIComponent(u.URL || ""), "&ExternInfo=", encodeURIComponent(u.sExternInfo || e.sExternInfo || "") ].join("");
        i.push(u);
    }
    weLogin.request({
        url: "https://game.weixin.qq.com/cgi-bin/comm/gamestat",
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        data: "BatchData=" + encodeURIComponent(JSON.stringify(i)),
        success: function(e) {
            t && t("success");
        },
        fail: function(e) {
            t && t("fail");
        }
    });
}

module.exports = {
    batchCltStat: function(e, n, t) {
        util.getReportObj(function(e) {
            batch15350(e, n, t);
        });
    }
};