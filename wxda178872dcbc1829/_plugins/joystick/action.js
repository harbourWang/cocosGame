Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    setEnable: {
        msg: "%1 %2",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "禁用", "0" ], [ "启用", "1" ] ]
        }, {
            type: "list",
            name: "TARGET",
            options: LB.BlockHelper.getPluginInScene,
            args: "Joystick",
            isTarget: !0
        } ],
        fun: function(e, t) {
            this.setEnable(Number(e));
        }
    }
};