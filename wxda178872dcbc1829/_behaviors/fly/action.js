Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    fly: {
        msg: "飞入",
        fun: function() {
            this.properties.flyType = "1", this.start();
        }
    },
    flyOut: {
        msg: "飞出",
        fun: function() {
            this.properties.flyType = "2", this.start();
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
            options: [ [ "→从左到右", "1" ], [ "←从右到左", "2" ], [ "↓从上到下", "3" ], [ "↑从下到上", "4" ], [ "↘从左上到右下", "5" ], [ "↖从右下上到左上", "6" ], [ "↗从左下到右上", "7" ], [ "↙从右上到左下", "8" ] ]
        } ],
        fun: function(t) {
            this.properties.direction = t, this.setStartXY();
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