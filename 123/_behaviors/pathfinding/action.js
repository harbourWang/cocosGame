Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    setEnable: {
        msg: "%1 方向控制",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "启用", "1" ], [ "禁用", "0" ] ]
        } ],
        fun: function(e) {
            this.setEnabled(e);
        }
    },
    moveToPosition: {
        msg: "移动到X%1 Y%2",
        args: [ {
            name: "x",
            type: "input",
            input: "number",
            default: 10
        }, {
            name: "y",
            type: "input",
            input: "number",
            default: 10
        } ],
        fun: function(e, t, n) {
            this._AddWaypoint(+e, -t, !0);
        }
    }
};

exports.default = _default;