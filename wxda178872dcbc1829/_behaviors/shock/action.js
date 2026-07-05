Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    run: {
        msg: "%1 抖动",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "开始", "1" ], [ "停止", "0" ] ]
        } ],
        fun: function(t) {
            Number(t) ? this.start() : this.stop();
        }
    },
    set: {
        msg: "设置抖动属性 %1 %2",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "次数", "_count" ], [ "频率", "_frequency" ], [ "振幅X", "_amplitude_x" ], [ "振幅Y", "_amplitude_y" ] ]
        }, {
            type: "input",
            name: "VALUE",
            input: "number",
            default: 1
        } ],
        fun: function(t, e) {
            var s = 0;
            switch (this._isShocking && (this.stop(), s = 1), t) {
              case "_count":
                this._count = Number(e) || 0, this.count = this._count;
                break;

              case "_frequency":
                this._frequency = Math.max(Number(e) || .1, .01);
                break;

              case "_amplitude_x":
                this._amplitude_x = Math.max(Number(e) || 5, 1);
                break;

              case "_amplitude_y":
                this._amplitude_y = Math.max(Number(e) || 5, 1);
            }
            s && this.start();
        }
    }
};