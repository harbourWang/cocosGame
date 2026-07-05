Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    show: {
        msg: "显示键盘 %1 多行输入",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "禁用", "false" ], [ "启用", "true" ] ]
        } ],
        fun: function(e) {
            this._obj.multiple = JSON.parse(e), this._showKeyboard(this._obj);
        }
    },
    hide: {
        msg: "隐藏键盘",
        fun: function() {
            this._hideKeyboard(this._obj);
        }
    }
};