Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Joystick",
    type: "general",
    name: "摇杆",
    desc: "控制精灵移动",
    author: "",
    version: 4,
    isGlobal: 0,
    color: "orange",
    data: {
        name: "摇杆",
        icon: "1__AzI73kbRBM"
    },
    properties: {
        enable: {
            name: "启用",
            type: "boolean",
            desc: "是否开启",
            value: !0
        },
        warpSize: {
            name: "轮廓宽高",
            type: "number",
            value: 260
        },
        warpImage: {
            name: "轮廓图片",
            type: "image",
            value: "https://wximg.qq.com/wxgame/minigame/luban/joystick_wrap.png"
        },
        buttonSize: {
            name: "按钮宽高",
            type: "number",
            value: 100
        },
        buttonImage: {
            name: "按钮图片",
            type: "image",
            value: "https://wximg.qq.com/wxgame/minigame/luban/joystick.png"
        },
        follow: {
            name: "跟随手指定位",
            type: "boolean",
            value: !1
        },
        followAreaX: {
            visible: {
                key: "follow",
                value: !0
            },
            desc: "从屏幕左上角开始计算，单位是%，最小为0，最大为100",
            name: "跟随区域 x",
            type: "number",
            value: 0,
            unit: "%",
            min: 0,
            max: 100
        },
        followAreaY: {
            visible: {
                key: "follow",
                value: !0
            },
            desc: "从屏幕左上角开始计算，单位是%，最小为0，最大为100",
            name: "跟随区域 y",
            type: "number",
            value: 0,
            unit: "%",
            min: 0,
            max: 100
        },
        followAreaWidth: {
            visible: {
                key: "follow",
                value: !0
            },
            desc: "从屏幕左上角开始计算，单位是%，默认100%，最小为0，最大为100",
            name: "跟随区域宽度",
            type: "number",
            value: 100,
            unit: "%",
            min: 0,
            max: 100
        },
        followAreaHeight: {
            visible: {
                key: "follow",
                value: !0
            },
            desc: "从屏幕左上角开始计算，单位是%，默认100%，最小为0，最大为100",
            name: "跟随区域高度",
            type: "number",
            value: 100,
            unit: "%",
            min: 0,
            max: 100
        },
        followAndFixed: {
            visible: {
                key: "follow",
                value: !0
            },
            desc: "跟随但是不消失，默认按照初始位置固定",
            name: "跟随并固定初始位置",
            type: "boolean",
            value: !1
        }
    }
};