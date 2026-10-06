Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    direction: {
        msg: "%1的方向",
        args: [ {
            type: "list",
            name: "TARGET",
            options: LB.BlockHelper.getPluginInScene,
            args: "Joystick",
            isTarget: !0
        } ],
        fun: function(t) {
            return this.limit ? this.limit.degree : 0;
        }
    },
    distance: {
        msg: "%1的%2",
        args: [ {
            type: "list",
            name: "TARGET",
            options: LB.BlockHelper.getPluginInScene,
            args: "Joystick",
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "横行距离", "_horizontal_" ], [ "纵向距离", "_vertical_" ] ]
        } ],
        fun: function(t, e) {
            return this.limit ? "_horizontal_" === e ? this.limit.resultX / 50 : "_vertical_" === e ? -this.limit.resultY / 50 : (console.error("摇杆未知参数"), 
            0) : 0;
        }
    }
};

exports.default = _default;