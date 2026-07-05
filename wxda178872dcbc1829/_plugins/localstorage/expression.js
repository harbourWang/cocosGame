Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    get: {
        msg: "获取缓存%1的值",
        fun: function(e) {
            return this._getStorageObj()[e] || 0;
        },
        args: [ {
            name: "KEY",
            type: "input",
            input: "string",
            default: "KEY"
        } ]
    }
};