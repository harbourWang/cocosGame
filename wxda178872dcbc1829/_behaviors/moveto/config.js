Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Moveto",
    type: "behavior",
    name: "移动行为",
    desc: "将精灵移动到某个位置，可以附加加速度和减速度",
    author: "addy",
    version: 1,
    properties: {
        enable: {
            name: "启用",
            desc: "启用后可以通过系统指令控制该精灵",
            type: "boolean",
            value: !0
        },
        maxSpeed: {
            name: "最大速度",
            desc: "最大每秒移动多少像素",
            type: "number",
            value: 200
        },
        acceleration: {
            name: "加速度",
            type: "number",
            value: 600
        },
        deceleration: {
            name: "减慢速度",
            type: "number",
            value: 600
        },
        rotateSpeed: {
            name: "旋转速度",
            desc: "单位：度/帧",
            type: "number",
            value: 0
        },
        setAngle: {
            name: "可旋转",
            type: "boolean",
            value: !0
        },
        stopOnSolids: {
            name: "不可以穿过固体",
            type: "boolean",
            value: !0
        }
    }
};