Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    getResponse: {
        msg: "当前请求的返回值",
        fun: function() {
            var e = this._runtime._blockEngine.currentThread.stackFrames;
            return 1 < e.length && e[e.length - 2].response || {};
        },
        args: []
    }
};