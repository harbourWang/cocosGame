Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    start: {
        msg: "播放视频",
        fun: function() {
            this.play();
        }
    },
    stop: {
        msg: "停止播放视频",
        fun: function() {
            this.stop();
        }
    },
    pause: {
        msg: "暂停播放视频",
        fun: function() {
            this.pause();
        }
    },
    destroy: {
        msg: "销毁视频",
        fun: function() {
            this.destroy();
        }
    },
    hide: {
        msg: "隐藏视频",
        fun: function() {
            this._video && (this._video.hide = !0), this._videoVisible = !1;
        }
    },
    show: {
        msg: "显示视频",
        fun: function() {
            this._video && (this._video.hide = !1), this._videoVisible = !0;
        }
    },
    seek: {
        msg: "视频跳转到时间%1s",
        args: [ {
            type: "input",
            name: "X",
            input: "integer",
            default: 0
        } ],
        fun: function() {
            this.seek.apply(this, arguments);
        }
    },
    fullScreen: {
        msg: "设置全屏%1",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "竖屏", "0" ], [ "屏幕逆时针90度", "90" ], [ "屏幕顺时针90度", "-90" ] ]
        } ],
        fun: function(t) {
            this.fullScreen(Number(t));
        }
    },
    setUrl: {
        msg: "设置视频的%1为%2",
        args: [ {
            type: "list",
            name: "OPTION_LIST1",
            options: [ [ "x坐标", "x" ], [ "y坐标", "y" ], [ "宽度", "width" ], [ "高度", "height" ], [ "自动播放", "autoplay" ], [ "循环播放", "loop" ], [ "视频地址", "src" ] ]
        }, {
            type: "input",
            name: "url",
            input: "string",
            default: "100"
        } ],
        fun: function(t, e) {
            this.setVideoValue(t, e);
        }
    }
};