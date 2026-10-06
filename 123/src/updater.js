function installUpdater() {
    var t = wx.getUpdateManager();
    t.onCheckForUpdate(function(e) {}), t.onUpdateReady(function() {
        wx.showModal({
            title: "更新提示",
            content: "新版本已经准备好，是否重启应用？",
            success: function(e) {
                e.confirm && t.applyUpdate();
            }
        });
    }), t.onUpdateFailed(function() {
        console.log("新版本下载失败");
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = installUpdater;