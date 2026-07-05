Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    setEnable: {
        msg: "%1 移动行为",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "启用", "1" ], [ "禁用", "0" ] ]
        } ],
        fun: function(t) {
            this.setEnabled(t);
        }
    },
    moveToPosition: {
        msg: "移动到X%1 Y%2",
        args: [ {
            name: "x",
            type: "input",
            input: "number",
            default: 10
        }, {
            name: "y",
            type: "input",
            input: "number",
            default: 10
        } ],
        fun: function(t, e, n) {
            this._AddWaypoint(+t, -e, !0);
        }
    },
    moveToSprite: {
        msg: "移动到%1",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSpritesListWithSelf
        } ],
        fun: function(t) {
            this._movetoSprite(t, !0);
        }
    },
    addPosToWayPoints: {
        msg: "将X%1 Y%2添加到航路点",
        args: [ {
            name: "x",
            type: "input",
            input: "number",
            default: 10
        }, {
            name: "y",
            type: "input",
            input: "number",
            default: 10
        } ],
        fun: function(t, e) {
            this._AddWaypoint(+t, -e, !1);
        }
    },
    addSpriteToWayPoints: {
        msg: "将%1添加到航路点",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSpritesListWithSelf
        } ],
        fun: function(t) {
            this._AddWaypointBySprite(t, !1);
        }
    },
    stop: {
        msg: "停止移动",
        fun: function(t) {
            this._Stop();
        }
    },
    setConfig: {
        msg: "设置 %1 %2",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "最大速度", "_maxSpeed" ], [ "加速度", "_acc" ], [ "减慢速度", "_dec" ], [ "旋转速度", "_rotateSpeed" ] ]
        }, {
            name: "value",
            type: "input",
            input: "p_number",
            default: "1"
        } ],
        fun: function(t, e) {
            this[t] = Number(e);
        }
    },
    setBoolConfig: {
        msg: "设置 %1 %2",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "可以", "1" ], [ "不可以", "0" ] ]
        }, {
            type: "list",
            name: "OPTION_LIST1",
            options: [ [ "旋转", "_setAngle" ], [ "穿过固体", "_stopOnSolids" ] ]
        } ],
        fun: function(t, e) {
            this[e] = "_stopOnSolids" === e ? "0" === t : "1" === t;
        }
    }
};