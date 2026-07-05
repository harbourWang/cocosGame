Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    hasKey: {
        msg: "缓存%1是否存在",
        fun: function(e) {
            return void 0 !== this._getStorageObj()[e];
        },
        args: [ {
            name: "KEY",
            type: "input",
            input: "string",
            default: "KEY"
        } ]
    }
};