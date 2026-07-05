Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    nearestTarget: {
        msg: "最近敌人的ID",
        fun: function() {
            return this._currentTarget ? this._currentTarget.id : null;
        }
    },
    nearestTargetAngle: {
        msg: "最近敌人的角度",
        fun: function() {
            return this.getAngle();
        }
    },
    radius: {
        msg: "炮塔的半径",
        fun: function() {
            return this.getRangle();
        }
    }
};