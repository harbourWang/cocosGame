Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var config = {
    type: "list",
    name: "OPTION_LIST",
    options: LB.BlockHelper.getPluginInScene,
    args: "Userinfo",
    isTarget: !0
}, _default = exports.default = {
    hideBtn: {
        args: [ config ],
        msg: "隐藏%1",
        fun: function() {
            this.userInfoButton ? (this.userInfoButton.hide(), this.userInfoButtonVisible = !1) : this.renderTarget.visible = !1;
        }
    },
    showBtn: {
        args: [ config ],
        msg: "显示%1",
        fun: function() {
            this.userInfoButton ? (this.userInfoButton.show(), this.userInfoButtonVisible = !0) : this.renderTarget.visible = !0;
        }
    }
};