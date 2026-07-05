Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
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
    move: {
        msg: "向 %1 移动",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "左", "_simLeft" ], [ "右", "_simRight" ], [ "上", "_simUp" ], [ "下", "_simDown" ] ]
        } ],
        fun: function(e) {
            this[e] = !0;
        }
    },
    setSpeed: {
        msg: "设置 %1 %2",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "最大速度", "_maxSpeed" ], [ "加速度", "_acc" ], [ "减慢速度", "_dec" ] ]
        }, {
            name: "value",
            type: "input",
            input: "p_number",
            default: "1"
        } ],
        fun: function(e, t) {
            this[e] = Number(t);
        }
    },
    setMove: {
        msg: "设置 %1 %2",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "格子移动距离", "_moveDistance" ], [ "格子移动间隔", "_moveInterval" ] ]
        }, {
            name: "value",
            type: "input",
            input: "p_number",
            default: "1"
        } ],
        fun: function(e, t) {
            this[e] = Number(t);
        }
    }
};