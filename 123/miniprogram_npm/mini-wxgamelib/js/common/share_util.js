var cacheShareInfo, App = getApp();

module.exports = {
    getShareData: function(e, t) {
        t = t || {};
        var a;
        if (console.log("shareTicket:" + App.pageInfo.shareTicket), App.debug) e && e({}, 2); else if (cacheShareInfo && !t.do_not_use_cache) e && e(cacheShareInfo, 2); else {
            if (t.shareTicket) a = t.shareTicket; else {
                if (!App.pageInfo.shareTicket && "1007" == App.pageInfo.scene) return void (e && e({}, 2));
                if (!App.pageInfo.shareTicket && "1044" == App.pageInfo.scene) return void wx.showModal({
                    title: "错误",
                    content: "无效的分享，请退出重试",
                    showCancel: !1
                });
                a = App.pageInfo.shareTicket;
            }
            this.getShareDataByTicket(a, e);
        }
    },
    getShareDataByTicket: function(e, t) {
        var a;
        wx.getShareInfo ? (a = Date.now(), wx.getShareInfo({
            shareTicket: e,
            success: function(e) {
                cacheShareInfo = e, console.log(Date.now() - a), t && t(e, 3);
            },
            fail: function(e) {
                -12008 == +e.err_code ? t && t({}, 2) : wx.showModal({
                    title: "提示",
                    content: JSON.stringify(e),
                    showCancel: !1
                });
            }
        })) : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    },
    setShareMenu: function() {
        wx.showShareMenu ? wx.showShareMenu({
            withShareTicket: !0
        }) : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    }
};