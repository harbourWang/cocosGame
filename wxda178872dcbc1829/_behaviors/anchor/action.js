Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    start: {
        msg: "闪烁，显示%1秒，隐藏%2秒，持续%3秒",
        fun: function(e, t, i) {
            this._onTime = e || 0, this._offTime = t || 0, this._stage = 1, this._stageTimeLeft = t || 0, 
            this._allTime = this._timeLeft = i || 0, this._instance.renderer.visible = !1;
        },
        args: [ {
            name: "onTime",
            type: "input",
            input: "p_number",
            default: "0.1"
        }, {
            name: "offTime",
            type: "input",
            input: "p_number",
            default: "0.1"
        }, {
            name: "allTime",
            type: "input",
            input: "p_number",
            default: "1"
        } ]
    },
    stop: {
        msg: "停止闪烁",
        fun: function() {
            this._timeLeft = 0;
        }
    }
};