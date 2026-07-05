Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    acc: {
        msg: "平台角色的加速度",
        fun: function() {
            return Math.round(this._acc / 16.7 / this._runtime.devicePixel * 100) / 100;
        }
    },
    dec: {
        msg: "平台角色的减速度",
        fun: function() {
            return Math.round(this._dec / 16.7 / this._runtime.devicePixel * 100) / 100;
        }
    },
    maxSpeed: {
        msg: "平台角色的最大速度",
        fun: function() {
            return Math.round(this._maxSpeed / 16.7 / this._runtime.devicePixel * 100) / 100;
        }
    },
    maxFall: {
        msg: "平台角色的最大的掉落速度",
        fun: function() {
            return Math.round(this._maxFall / 16.7 / this._runtime.devicePixel * 100) / 100;
        }
    },
    jumpStrength: {
        msg: "平台角色的最大的跳跃强度",
        fun: function() {
            return Math.round(this._jumpStrength / 16.7 / this._runtime.devicePixel * 100) / 100;
        }
    },
    g: {
        msg: "平台角色的最大的重力大小",
        fun: function() {
            return Math.round(this._g / 16.7 / this._runtime.devicePixel * 100) / 100;
        }
    }
};