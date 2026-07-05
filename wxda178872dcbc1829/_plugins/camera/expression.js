Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var config = {
    type: "list",
    name: "OPTION_LIST",
    options: LB.BlockHelper.getPluginInScene,
    args: "Camera",
    isTarget: !0
}, _default = exports.default = {
    getNosePositionX: {
        msg: "获取%1的鼻尖坐标X",
        args: [ config ],
        fun: function(e, t) {
            return this.getNosePositionX();
        }
    },
    getNosePositionY: {
        msg: "获取%1的鼻尖坐标Y",
        args: [ config ],
        fun: function(e, t) {
            return this.getNosePositionY();
        }
    }
};