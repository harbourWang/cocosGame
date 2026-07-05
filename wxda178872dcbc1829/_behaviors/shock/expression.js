Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    allCount: {
        msg: "抖动总次数",
        fun: function() {
            return this._count;
        }
    },
    remainCount: {
        msg: "抖动剩余次数",
        fun: function() {
            return this.count;
        }
    }
};