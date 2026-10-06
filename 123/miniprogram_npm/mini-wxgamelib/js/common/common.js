var DEFAULT_IMG = "https://mmocgame.qpic.cn/wechatgame/mEMdfrX5RU3YnFFdslRaeMLfdlRDm8oNYgLUWEPObWdgQcnxgA0vuXX58XknIUo7/0", CommonUtil = {
    getUserHeadImgUrl: function(o, t) {
        return o ? t ? o + "/0" : o : DEFAULT_IMG;
    },
    showTips: function(o) {
        wx.showModal({
            title: "温馨提示",
            content: o,
            showCancel: !1,
            confirmText: "确定",
            success: function(o) {
                o.confirm && console.log("用户点击确定");
            }
        });
    },
    getStringLength: function(o) {
        for (var t = 0, n = 0; n < o.length; n++) 0 <= o.charCodeAt(n) && o.charCodeAt(n) <= 255 ? t += 1 : t += 2;
        return t;
    }
};

module.exports = CommonUtil;