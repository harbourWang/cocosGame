function setShareContent(e, t) {
    wx.showShareMenu({
        withShareTicket: !0,
        menus: [ "shareAppMessage", "shareTimeline" ]
    }), wx.onShareAppMessage(function() {
        return mta && mta.Event.stat("home_share_game", {}), {
            title: e.share_title || e.project_name || "来玩个小游戏吧",
            imageUrl: e.public_share_image_url || e.screenshot || "https://res.wx.qq.com/wechatgame/product/webpack/userupload/20200929/104614/share.jpg",
            query: window.isPublish ? "" : "scene=" + t
        };
    }), wx.onShareTimeline && wx.onShareTimeline(function() {
        return {
            title: e.share_title || e.project_name || "来玩个小游戏吧",
            imageUrl: e.public_share_image_url || e.screenshot || "https://res.wx.qq.com/wechatgame/product/webpack/userupload/20200929/104614/share.jpg",
            query: window.isPublish ? "" : "scene=" + t
        };
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setShareContent = setShareContent;