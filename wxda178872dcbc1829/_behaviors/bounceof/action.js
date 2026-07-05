Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    setEnabled: {
        msg: "%1反弹",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "启用", "1" ], [ "禁用", "2" ] ]
        } ],
        fun: function(e) {
            this.setEnabled(e);
        }
    },
    bounceOfTarget: {
        msg: "设置碰到 %1 就反弹",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSpriteListEdge
        } ],
        fun: function(e) {
            this.setBounceOf(e);
        }
    }
};