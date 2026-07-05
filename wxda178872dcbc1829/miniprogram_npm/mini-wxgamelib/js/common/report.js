var util = require("./util"), weLogin = require("./welogin");

function batch11332(e, t, n) {
    for (var i = [], o = 0, c = t.length; o < c; o++) {
        var r = t[o], r = [ "GameID=", encodeURIComponent(r.sGameId || ""), "&SceneID=", util.intNumber(r.iSceneId || "0"), "&OpType=", util.intNumber(r.iOpType || "0"), "&LogType=", util.intNumber(r.iLogType || "0"), "&UIArea=", util.intNumber(r.iUIArea || "0"), "&ActionID=", util.intNumber(r.iActionId || "0"), "&SourceID=", util.intNumber(r.iSourceSceneId || "0"), "&PositionID=", util.intNumber(r.iPositionId || "0"), "&ActionStatus=", encodeURIComponent(r.sActionStatus || "0"), "&GiftID=", util.intNumber(r.iGiftBagId || "0"), "&GiftType=", util.intNumber(r.iGiftBagType || "0"), "&ActID=", util.intNumber(r.iActID || "0"), "&DeviceBrand=", encodeURIComponent(r.sDeviceBrand || "0"), "&ISP=", encodeURIComponent(r.sServiceProvider || "0"), "&Device=", util.intNumber(r.sDevice || ("iphone" == e.device ? 1 : 2) || "0"), "&DeviceModel=", encodeURIComponent(r.sDeviceModel || e.model || "0"), "&ConnectType=", encodeURIComponent(r.sConnectType || e.networktype || "0"), "&ClientVersion=", util.intNumber(r.sClientVersion || e.clientVersion || "0"), "&ExternInfo=", encodeURIComponent(r.sExternInfo || e.sExternInfo || "") ].join("");
        i.push(r);
    }
    weLogin.request({
        url: "https://game.weixin.qq.com/cgi-bin/comm/cltstat",
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        data: "BatchData=" + encodeURIComponent(JSON.stringify(i)),
        success: function(e) {
            console.log(e);
        },
        fail: function(e) {
            console.error(e);
        }
    });
}

module.exports = {
    batchCltStat: function(e, t, n) {
        util.getReportObj(function(e) {
            batch11332(e, t, n);
        });
    }
};