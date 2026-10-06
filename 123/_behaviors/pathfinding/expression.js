Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    angle: {
        msg: "移动方向",
        fun: function() {
            return Math.round((this._angle / Math.PI * 180 + 360) % 360 * 100) / 100;
        }
    },
    speed: {
        msg: "移动速度",
        fun: function() {
            return Math.round(100 * this._speed) / 100;
        }
    }
};

exports.default = _default;