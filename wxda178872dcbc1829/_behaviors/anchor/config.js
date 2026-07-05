Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Flash",
    type: "behavior",
    name: "闪烁",
    desc: "让精灵闪烁的一个行为",
    author: "",
    version: 1,
    properties: {
        enable: {
            name: "Enable",
            type: "boolean",
            value: !0
        },
        onTime: {
            name: "显示间隔时间",
            type: "number",
            value: .1
        },
        offTime: {
            name: "隐藏间隔时间",
            type: "number",
            value: .1
        },
        allTime: {
            name: "持续时间",
            type: "number",
            value: 1
        }
    }
};