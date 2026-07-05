Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Shock",
    type: "behavior",
    name: "抖动",
    desc: "让精灵具有抖动行为",
    author: "",
    version: 1,
    properties: {
        enable: {
            name: "自动开始",
            desc: "游戏运行后，当精灵出现时自动执行",
            type: "boolean",
            value: !0
        },
        count: {
            name: "抖动次数",
            desc: "抖动n次后自动停止，如设置为负数则表示无限",
            type: "number",
            value: 3
        },
        frequency: {
            name: "抖动间隔",
            desc: "单位/秒",
            type: "number",
            value: .1
        },
        amplitude_x: {
            name: "抖动幅度X",
            type: "number",
            value: 5
        },
        amplitude_y: {
            name: "抖动幅度Y",
            type: "number",
            value: 5
        }
    }
};