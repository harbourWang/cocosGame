Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    isEnabled: {
        msg: "是否启用",
        fun: function() {
            return this.isEnabled();
        }
    },
    enableDoubleJump: {
        msg: "是否开启两段跳",
        fun: function() {
            return this._enableDoubleJump;
        }
    },
    isOnFloor: {
        msg: "是否在地面上",
        fun: function() {
            return this._isOnFloor();
        }
    },
    isJumping: {
        msg: "是否在跳跃",
        fun: function() {
            return this._isJumping();
        }
    },
    isFalling: {
        msg: "是否在下落",
        fun: function() {
            return this._isFalling();
        }
    },
    isMoving: {
        msg: "是否在水平方向移动",
        fun: function() {
            return this._isMoving();
        }
    }
};