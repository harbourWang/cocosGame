var DEFAULT_IMG = "https://mmocgame.qpic.cn/wechatgame/mEMdfrX5RU3YnFFdslRaeMLfdlRDm8oNYgLUWEPObWdgQcnxgA0vuXX58XknIUo7/0", CommonUtil = {
    getUserHeadImgUrl: function(o, n) {
        return o ? n ? o + "/0" : o : DEFAULT_IMG;
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
        for (var n = 0, t = 0; t < o.length; t++) 0 <= o.charCodeAt(t) && o.charCodeAt(t) <= 255 ? n += 1 : n += 2;
        return n;
    }
};

module.exports = CommonUtil;