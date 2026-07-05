Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    setEnabled: {
        msg: "%1单向穿透行为",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "启用", "1" ], [ "禁用", "2" ] ]
        } ],
        fun: function(e) {
            this.setEnabled(e);
        }
    }
};