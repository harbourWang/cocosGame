Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    openPhysical: {
        msg: "开启物理引擎",
        fun: function() {
            this.openPhysical();
        }
    },
    closePhysical: {
        msg: "关闭物理引擎",
        fun: function() {
            this.closePhysical();
        }
    },
    setPhysicalScreenEdge: {
        msg: "设置物理边界为屏幕的 %1",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "无边缘", "_no_edge_" ], [ "全部边缘", "_edge_" ], [ "左边缘", "_left_edge_" ], [ "右边缘", "_right_edge_" ], [ "上边缘", "_top_edge_" ], [ "下边缘", "_bottom_edge_" ], [ "左右与下边缘", "_right_left_bottom_edge_" ] ]
        } ],
        fun: function() {
            this.setPhysicalScreenEdge.apply(this, arguments);
        }
    },
    setCanCollision: {
        msg: "设置精灵 %1 物理碰撞",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "不参与", "false" ], [ "参与", "true" ] ]
        } ],
        fun: function() {
            this.setCanCollision.apply(this, arguments);
        }
    },
    setCollisionPrecision: {
        msg: "设置精灵物理轮廓 %1",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "素材轮廓", "true" ], [ "矩形", "false" ], [ "圆形", "circle" ] ]
        } ],
        fun: function() {
            this.setCollisionPrecision.apply(this, arguments);
        }
    },
    setCanRotation: {
        msg: "设置精灵 %1 物理倾倒",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "不可以", "false" ], [ "可以", "true" ] ]
        } ],
        fun: function() {
            this.setCanRotation.apply(this, arguments);
        }
    },
    setfriction: {
        msg: "设置摩擦系数 %1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: "0.1"
        } ],
        fun: function() {
            this.setfriction.apply(this, arguments);
        }
    },
    setRebound: {
        msg: "设置反弹系数 %1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: "0.1"
        } ],
        fun: function() {
            this.setRebound.apply(this, arguments);
        }
    },
    setLinearDamping: {
        msg: "设置移动速度衰减系数 %1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: "0.1"
        } ],
        fun: function() {
            this.setLinearDamping.apply(this, arguments);
        }
    },
    setAngularDamping: {
        msg: "设置旋转速度衰减系数 %1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: "0.1"
        } ],
        fun: function() {
            this.setAngularDamping.apply(this, arguments);
        }
    },
    setMass: {
        msg: "设置质量为 %1",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: "1"
        } ],
        fun: function() {
            this.setMass.apply(this, arguments);
        }
    },
    setGravity: {
        msg: "设置全局重力加速度大小 %1 方向 %2 度",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: "9.8"
        }, {
            name: "VALUE_DIRECTION",
            type: "input",
            input: "angle",
            default: "-90"
        } ],
        fun: function() {
            this.setGravity.apply(this, arguments);
        }
    },
    setSpeed: {
        msg: "设置速度大小 %1 方向 %2 度",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: "0.1"
        }, {
            name: "VALUE_DIRECTION",
            type: "input",
            input: "angle",
            default: "90"
        } ],
        fun: function() {
            this.setSpeed.apply(this, arguments);
        }
    },
    setForce: {
        msg: "设置力的大小 %1 方向 %2 度",
        args: [ {
            name: "VALUE",
            type: "input",
            input: "number",
            default: "0.1"
        }, {
            name: "VALUE_DIRECTION",
            type: "input",
            input: "angle",
            default: "90"
        } ],
        fun: function() {
            this.setForce.apply(this, arguments);
        }
    },
    setStaticOrDynamicPhysics: {
        msg: "设置为 %1 刚体",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "静态", "true" ], [ "动态", "false" ] ]
        } ],
        fun: function() {
            this.setStaticOrDynamicPhysics.apply(this, arguments);
        }
    },
    setSleepingAllowed: {
        msg: "设置 %1 休眠",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "可以", "true" ], [ "不可以", "false" ] ]
        } ],
        fun: function() {
            this.setSleepingAllowed.apply(this, arguments);
        }
    }
};