Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    enable: {
        msg: "%1 循环克隆",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "启动", "1" ], [ "销毁", "0" ] ]
        } ],
        fun: function(e) {
            Number(e) ? this.start() : this.stop();
        }
    },
    move: {
        msg: "%1 移动",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "开始", "1" ], [ "停止", "0" ] ]
        } ],
        fun: function(e) {
            this._autoMove = !!Number(e);
        }
    }
};