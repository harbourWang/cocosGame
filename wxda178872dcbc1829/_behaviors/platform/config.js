Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Platform",
    type: "behavior",
    name: "平台角色",
    desc: '添加此行为后，精灵可以在平台游戏上跳跃，跑动，配合"固体"和"跳跃穿透"一起使用',
    author: "addy",
    version: 1,
    properties: {
        enable: {
            name: "启用",
            type: "boolean",
            value: !0
        },
        maxSpeed: {
            name: "最大速度",
            type: "number",
            value: 20,
            desc: "物体可以行进的最大速度（以像素/帧为单位）。"
        },
        acceleration: {
            name: "加速度",
            type: "number",
            value: 90,
            desc: "加速度，像素/帧为单位。"
        },
        deceleration: {
            name: "减速速率",
            type: "number",
            value: 90,
            desc: "减速速率，像素/帧为单位。"
        },
        jumpStrenth: {
            name: "起跳速度",
            type: "number",
            value: 40,
            desc: "跳跃开始的速度，像素/帧为单位。"
        },
        gravity: {
            name: "重力大小",
            type: "number",
            value: 90,
            desc: "重力加速度，像素/帧为单位。"
        },
        maxFallSpeed: {
            name: "最大的掉落速度",
            type: "number",
            value: 60,
            desc: "物体可以达到的最大速度自由落体，像素/帧为单位。"
        },
        doubleJump: {
            name: "两段跳",
            type: "boolean",
            value: !1,
            desc: "降落前，在半空中多跳一次。"
        },
        jumpSustain: {
            name: "跳跃持续时间",
            type: "number",
            value: 0,
            desc: "长按跳跃键允许持续跳跃的时间（以毫秒为单位），如果保持时间更长，则跳的更高。"
        },
        defaultControl: {
            name: "键盘控制",
            type: "boolean",
            value: !0
        }
    }
};