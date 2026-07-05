Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    isActive: {
        msg: "%1 移动中",
        args: [ {
            type: "list",
            name: "TARGET",
            options: LB.BlockHelper.getPluginInScene,
            args: "Joystick",
            isTarget: !0
        } ],
        fun: function(e) {
            return !!this.limit;
        }
    }
};