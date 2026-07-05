Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    get: {
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
            options: [ [ "横行距离", "_horizontal_" ], [ "纵向距离", "_vertical_" ], [ "横行百分比", "_percentageX_" ], [ "纵向百分比", "_percentageY_" ], [ "方向", "_degree_" ] ]
        } ],
        fun: function(e, t) {
            return this.limit ? "_horizontal_" === t ? this.limit.resultX / 50 : "_vertical_" === t ? -this.limit.resultY / 50 : "_percentageX_" === t ? this.limit.percentageX : "_percentageY_" === t ? -this.limit.percentageY : "_degree_" === t ? this.limit.degree : (console.error("摇杆未知参数"), 
            0) : 0;
        }
    }
};