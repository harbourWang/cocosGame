Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Flip",
    type: "behavior",
    name: "翻转",
    desc: "让精灵具有翻转动画效果",
    author: "",
    version: 2,
    properties: {
        enable: {
            name: "自动开始",
            desc: "游戏运行后，当精灵出现时自动执行",
            type: "boolean",
            value: !0
        },
        direction: {
            name: "方向",
            desc: "飞入动画的方向",
            type: "select",
            options: [ [ "左右", "1" ], [ "上下", "2" ] ],
            value: "1"
        },
        type: {
            name: "动画类型",
            desc: "飞入动画的方向",
            type: "select",
            options: [ [ "正常", "1" ], [ "先慢后快", "2" ], [ "弹跳", "3" ] ],
            value: "1"
        },
        allTime: {
            name: "动画持续时间",
            desc: "一次动画执行的总时间，单位秒",
            type: "number",
            value: .75
        }
    }
};