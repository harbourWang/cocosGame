Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    run: {
        msg: "%1 闪烁",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "开始", "1" ], [ "停止", "0" ] ]
        } ],
        fun: function(e) {
            Number(e) ? this.start() : this.stop();
        }
    },
    set: {
        msg: "设置闪烁属性 %1 %2",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "持续时间", "_allTime" ], [ "显示间隔时间", "_onTime" ], [ "隐藏间隔时间", "_offTime" ] ]
        }, {
            type: "input",
            name: "VALUE",
            input: "number",
            default: 1
        } ],
        fun: function(e, t) {
            switch (e) {
              case "_onTime":
                this._onTime = Number(t) || 0;
                break;

              case "_offTime":
                this.offTime = Number(t) || 0, this._stageTimeLeft = this.offTime;
                break;

              case "_allTime":
                this._allTime = Number(t) || 0, this._allTime < 0 ? this._timeLeft = 1 : this._timeLeft = this._allTime;
            }
        }
    }
};