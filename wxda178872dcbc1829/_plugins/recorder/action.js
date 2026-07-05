Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    start: {
        msg: "开始录制",
        fun: function() {
            this.start();
        }
    },
    stop: {
        msg: "结束录制",
        fun: function() {
            this.stop();
        }
    },
    pause: {
        msg: "暂停录制",
        fun: function() {
            this.pause();
        }
    },
    resume: {
        msg: "继续录制",
        fun: function() {
            this.resume();
        }
    },
    createShareButton: {
        msg: "创建分享按钮，文案%1 X%2 Y%3 宽度%4 高度%5",
        args: [ {
            type: "input",
            name: "TEXT",
            input: "string",
            default: "分享"
        }, {
            type: "input",
            name: "X",
            input: "integer",
            default: 0
        }, {
            type: "input",
            name: "Y",
            input: "integer",
            default: 0
        }, {
            type: "input",
            name: "WIDTH",
            input: "w_number",
            default: 66
        }, {
            type: "input",
            name: "HEIGHT",
            input: "w_number",
            default: 40
        } ],
        fun: function() {
            this.createGameRecorderShareButton.apply(this, arguments);
        }
    },
    setShareButton: {
        msg: "%1 分享按钮",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "隐藏", "0" ], [ "显示", "1" ] ]
        } ],
        fun: function(t) {
            Number(t) ? this.showShareButton() : this.hideShareButton();
        }
    },
    setShareButtonColor: {
        msg: "设置分享按钮 %1 颜色 %2",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "背景", "backgroundColor" ], [ "文字", "color" ] ]
        }, {
            type: "input",
            name: "COLOR",
            input: "color",
            default: "#07c160"
        } ],
        fun: function() {
            this.setShareButtonColor.apply(this, arguments);
        }
    }
};