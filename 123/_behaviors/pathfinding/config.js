Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _default = {
    id: "Pathfinding",
    type: "behavior",
    name: "路径查找",
    desc: "路径查找，绕开障碍物",
    author: "addy",
    version: 1,
    properties: {
        enable: {
            name: "启用",
            desc: "启用后可以通过系统指令控制该精灵",
            type: "boolean",
            value: !(exports.default = void 0)
        },
        maxSpeed: {
            name: "最大速度",
            desc: "最大每帧移动多少像素",
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
            desc: "每次移动多少像素",
            type: "number",
            value: 0
        },
        setAngle: {
            name: "角度旋转",
            type: "boolean",
            value: !0
        },
        stopOnSolids: {
            name: "不可穿透",
            type: "boolean",
            value: !0
        }
    }
};

exports.default = _default;