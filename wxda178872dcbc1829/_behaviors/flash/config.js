Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Flash",
    type: "behavior",
    name: "闪烁",
    desc: "让精灵具有闪烁行为",
    author: "",
    version: 2,
    properties: {
        enable: {
            name: "自动开始",
            desc: "游戏运行后，当精灵出现时自动执行",
            type: "boolean",
            value: !0
        },
        allTime: {
            name: "持续时间",
            desc: "闪烁n秒后自动停止，如设置为负数则表示无限",
            type: "number",
            value: 1
        },
        onTime: {
            name: "显示间隔时间",
            desc: "单位/秒",
            type: "number",
            value: .1
        },
        offTime: {
            name: "隐藏间隔时间",
            desc: "单位/秒",
            type: "number",
            value: .1
        },
        offAlpha: {
            name: "隐藏透明度",
            desc: "闪烁隐藏时的透明度",
            type: "number",
            value: 0
        }
    }
};