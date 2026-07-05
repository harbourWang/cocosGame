Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Turret",
    type: "behavior",
    name: "炮塔",
    desc: "找最近的敌人，射击",
    author: "addy",
    version: 1,
    properties: {
        enable: {
            name: "启用",
            desc: "启用后可以通过系统指令控制该精灵",
            type: "boolean",
            value: !0
        },
        shootRange: {
            name: "炮塔半径范围",
            desc: "单位像素",
            type: "number",
            value: 300
        },
        isRotate: {
            name: "是否旋转",
            type: "boolean",
            value: !0
        },
        rotateSpeed: {
            visible: {
                key: "isRotate",
                value: !0
            },
            name: "旋转速度",
            desc: "每一帧的旋转速度",
            type: "number",
            value: 200
        }
    }
};