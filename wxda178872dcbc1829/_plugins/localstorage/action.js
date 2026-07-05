Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    set: {
        msg: "设置缓存%1的值为%2",
        fun: function(t, e) {
            var i = this._getStorageObj();
            i[t] = e, this._setStorageObj(JSON.stringify(i));
        },
        args: [ {
            name: "KEY",
            type: "input",
            input: "string",
            default: "KEY"
        }, {
            name: "VALUE",
            type: "input",
            input: "string",
            default: "VALUE"
        } ]
    },
    remove: {
        msg: "删除缓存%1的值",
        fun: function(t) {
            var e = this._getStorageObj();
            delete e[t], this._setStorageObj(JSON.stringify(e));
        },
        args: [ {
            name: "KEY",
            type: "input",
            input: "string",
            default: "KEY"
        } ]
    },
    clear: {
        msg: "清空全部缓存值",
        fun: function() {
            this._setStorageObj(JSON.stringify({}));
        }
    }
};