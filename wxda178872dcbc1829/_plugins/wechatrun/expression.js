Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    getWechatSteps: {
        msg: "返回昨日微信步数",
        fun: function() {
            try {
                var e = this._runtime._blockEngine.currentThread.stackFrames, t = e[e.length - 2].response.event.weRunData.data.stepInfoList;
                return t.reverse(), t[1].step;
            } catch (e) {
                return "获取数据发生错误";
            }
        }
    },
    args: []
};