Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Bounceof",
    type: "behavior",
    name: "反弹",
    desc: "让精灵具备反弹行为",
    author: "",
    version: 1,
    properties: {
        enable: {
            name: "启用",
            type: "boolean",
            value: !0
        },
        speed: {
            name: "运动速度",
            type: "number",
            value: 10
        },
        towardsRotation: {
            name: "运动朝向",
            type: "number",
            value: 45
        }
    }
};