Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    fly: {
        msg: "翻转",
        fun: function() {
            this.start();
        }
    },
    setTotalTime: {
        msg: "设置动画时间 %1",
        args: [ {
            name: "value",
            type: "input",
            input: "p_number",
            default: "1"
        } ],
        fun: function(t) {
            this._allTime = Number(t);
        }
    },
    setDirection: {
        msg: "设置动画方向 %1",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "左右", "1" ], [ "上下", "2" ] ]
        } ],
        fun: function(t) {
            this.properties.direction = t;
        }
    },
    setType: {
        msg: "设置动画类型 %1",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "正常", "1" ], [ "先慢后快", "2" ], [ "弹跳", "3" ] ]
        } ],
        fun: function(t) {
            this.properties.type = t, this.setEaseFunction(t);
        }
    }
};