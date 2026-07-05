Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    angle: {
        msg: "移动方向",
        fun: function() {
            return this.angle || 0;
        }
    },
    speed: {
        msg: "移动速度",
        fun: function() {
            return Math.round(100 * this._speed) / 100 || 0;
        }
    }
};