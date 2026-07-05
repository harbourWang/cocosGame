Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    setEnabled: {
        msg: "%1遮罩",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "启用", "1" ], [ "禁用", "2" ] ]
        } ],
        fun: function(t) {
            this.setEnabled(t);
        }
    },
    setX: {
        msg: "设置遮罩X坐标%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: .1
        } ],
        fun: function(t) {
            this.setValue("x", t);
        }
    },
    setY: {
        msg: "设置遮罩Y坐标%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: .1
        } ],
        fun: function(t) {
            this.setValue("y", t);
        }
    },
    setWidth: {
        msg: "设置遮罩宽度%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 100
        } ],
        fun: function(t) {
            this.setValue("width", t);
        }
    },
    setWidthBy: {
        msg: "设置遮罩宽度增加%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 1
        } ],
        fun: function(t) {
            t = this.options.width / this._runtime.devicePixel + +t, this.setValue("width", t);
        }
    },
    setHeight: {
        msg: "设置遮罩高度%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 100
        } ],
        fun: function(t) {
            this.setValue("height", t);
        }
    },
    setHeightBy: {
        msg: "设置遮罩高度增加%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 1
        } ],
        fun: function(t) {
            t = this.options.height / this._runtime.devicePixel + +t, this.setValue("height", t);
        }
    },
    setScaleX: {
        msg: "设置遮罩X缩放%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 1
        } ],
        fun: function(t) {
            this.setValue("scaleX", t);
        }
    },
    setScaleY: {
        msg: "设置遮罩Y缩放%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 1
        } ],
        fun: function(t) {
            this.setValue("scaleY", t);
        }
    },
    setAngle: {
        msg: "遮罩旋转%1度",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 1
        } ],
        fun: function(t) {
            this.setValue("angle", t);
        }
    },
    setStartAngle: {
        msg: "设置开始角度%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 10
        } ],
        fun: function(t) {
            this.setValue("startAngle", t / 180 * Math.PI);
        }
    },
    setEndAngle: {
        msg: "设置结束角度%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 10
        } ],
        fun: function(t) {
            this.setValue("endAngle", t / 180 * Math.PI);
        }
    },
    setStartAngleBy: {
        msg: "设置开始角度增加%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 10
        } ],
        fun: function(t) {
            t = this.options.startAngle + t / 180 * Math.PI, this.setValue("startAngle", t);
        }
    },
    setEndAngleBy: {
        msg: "设置结束角度增加%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 10
        } ],
        fun: function(t) {
            t = this.options.endAngle + t / 180 * Math.PI, this.setValue("endAngle", t);
        }
    },
    setRadius: {
        msg: "设置扇形遮罩半径%1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: 100
        } ],
        fun: function(t) {
            this.setValue("radius", t);
        }
    }
};