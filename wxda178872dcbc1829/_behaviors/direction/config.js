Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Direction",
    type: "behavior",
    name: "方向控制",
    desc: "控制精灵运动方向",
    author: "addy",
    version: 3,
    properties: {
        enable: {
            name: "启用",
            desc: "启用后可以通过系统指令控制该精灵",
            type: "boolean",
            value: !0
        },
        type: {
            name: "移动类型",
            type: "select",
            options: [ [ "自由", 0 ], [ "格子", 1 ] ],
            value: 0
        },
        maxSpeed: {
            visible: {
                key: "type",
                value: 0
            },
            name: "最大速度",
            desc: "最大每帧移动多少像素",
            type: "number",
            value: 5
        },
        acceleration: {
            visible: {
                key: "type",
                value: 0
            },
            name: "加速度",
            type: "number",
            value: 1
        },
        deceleration: {
            visible: {
                key: "type",
                value: 0
            },
            name: "减慢速度",
            type: "number",
            value: .5
        },
        moveDistance: {
            visible: {
                key: "type",
                value: 1
            },
            name: "移动距离",
            desc: "每次移动多少像素",
            type: "number",
            value: 60
        },
        moveInterval: {
            visible: {
                key: "type",
                value: 1
            },
            name: "移动间隔",
            desc: "每间隔多久移动一次，单位为帧",
            type: "number",
            value: 10
        },
        directions: {
            name: "方向选择",
            type: "select",
            options: [ [ "上下", 0 ], [ "左右", 1 ], [ "四方向", 2 ], [ "自由方向", 3 ] ],
            value: 3
        },
        keyControl: {
            name: "键盘控制",
            type: "boolean",
            value: !0
        },
        joyStickControl: {
            name: "摇杆控制",
            type: "boolean",
            value: !0
        },
        joyStickAccurate: {
            visible: [ {
                key: "type",
                value: 0
            }, {
                key: "joyStickControl",
                value: !0
            } ],
            name: "摇杆精确控制",
            desc: "是否随着摇杆位置而自由改变移动方向，不再受到加速度和减速影响",
            type: "boolean",
            value: !1
        },
        joyStickSpeed: {
            visible: [ {
                key: "type",
                value: 0
            }, {
                key: "joyStickControl",
                value: !0
            }, {
                key: "joyStickAccurate",
                value: !0
            } ],
            name: "摇杆变速控制",
            desc: "是否随着摇杆按钮距离中心的距离而改变速度，取消保持匀速只改变方向",
            type: "boolean",
            value: !1
        },
        autoRotate: {
            name: "自动旋转",
            desc: "是否随着方向移动而改变精灵的面向角度",
            type: "boolean",
            value: !1
        },
        defaultRotate: {
            visible: {
                key: "autoRotate",
                value: !0
            },
            name: "初始面向角度",
            desc: "精灵初始面向的角度，根据素材自己选择默认角度，上为90，下为270，左为180，右为0",
            type: "number",
            value: 90
        }
    }
};