Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    setEnable: {
        msg: "%1平台角色行为",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "启用", "1" ], [ "禁用", "2" ] ]
        } ],
        fun: function(t) {
            this._isEnabled = "1" === t;
        }
    },
    setValue: {
        msg: "设置%1为%2",
        args: [ {
            type: "list",
            name: "OPTION_LIST1",
            options: [ [ "最大速度", "_maxSpeed" ], [ "加速度", "_acc" ], [ "减速度", "_dec" ], [ "最大的掉落速度", "_maxFall" ], [ "跳跃强度", "_jumpStrength" ] ]
        }, {
            name: "value",
            type: "input",
            input: "number",
            default: "90"
        } ],
        fun: function(t, e) {
            this[t] = 16.7 * e;
        }
    },
    setGravity: {
        msg: "设置重力大小%1",
        args: [ {
            name: "gravity",
            type: "input",
            input: "p_number",
            default: "90"
        } ],
        fun: function(t) {
            this._g = 16.7 * t, this._updateGravity();
        }
    },
    setDoubleJump: {
        msg: "%1两段跳",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "启用", "1" ], [ "禁用", "2" ] ]
        } ],
        fun: function(t) {
            this._enableDoubleJump = "1" === t;
        }
    },
    jump: {
        msg: "平台角色跳跃",
        fun: function() {
            this._simJump = !0;
        }
    },
    moveLeft: {
        msg: "平台角色左移",
        fun: function() {
            this._simLeft = !0;
        }
    },
    moveRight: {
        msg: "平台角色右移",
        fun: function() {
            this._simRight = !0;
        }
    },
    fall: {
        msg: "平台角色向下穿透",
        fun: function() {
            this._fallThroughJumpthrough();
        }
    }
};