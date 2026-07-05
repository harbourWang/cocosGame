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
    getUserInfo: {
        args: [ config ],
        msg: "%1用户信息",
        fun: function() {
            return this.userInfo || {};
        }
    }
};