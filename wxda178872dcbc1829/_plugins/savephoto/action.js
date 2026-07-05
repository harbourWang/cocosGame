Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    createCanvas: {
        msg: "创建一个canvas画布宽%1 高%2",
        args: [ {
            type: "input",
            name: "width",
            input: "number",
            default: 750
        }, {
            name: "height",
            type: "input",
            input: "number",
            default: 1334
        } ],
        fun: function() {
            this.createCanvas.apply(this, arguments);
        }
    },
    drawImage: {
        msg: "如果 绘制一张图片url %1 X %2 Y %3 宽 %4 高 %5成功 %& 否则 %& %}",
        args: [ {
            type: "input",
            name: "url",
            input: "string",
            default: "https://xxx.png"
        }, {
            type: "input",
            name: "x",
            input: "number",
            default: 0
        }, {
            name: "y",
            type: "input",
            input: "number",
            default: 0
        }, {
            type: "input",
            name: "width",
            input: "number",
            default: 750
        }, {
            name: "height",
            type: "input",
            input: "number",
            default: 1334
        } ],
        fun: function() {
            this.drawImage.apply(this, arguments);
        }
    },
    drawText: {
        msg: "绘制文本 %1 X %2 Y %3 字体大小 %4 颜色 %5 %6",
        args: [ {
            type: "input",
            name: "url",
            input: "string",
            default: "你好"
        }, {
            type: "input",
            name: "x",
            input: "number",
            default: 0
        }, {
            name: "y",
            type: "input",
            input: "number",
            default: 0
        }, {
            type: "input",
            name: "fontSize",
            input: "number",
            default: 26
        }, {
            type: "input",
            name: "COLOR",
            input: "color"
        }, {
            type: "list",
            name: "align",
            options: [ [ "左对齐", "left" ], [ "居中对齐", "center" ], [ "右对齐", "right" ] ]
        } ],
        fun: function() {
            this.drawText.apply(this, arguments);
        }
    },
    savePhoto: {
        msg: "如果 保存图片 成功 %& 否则 %& %}",
        fun: function() {
            this.savePhoto();
        },
        args: []
    }
};