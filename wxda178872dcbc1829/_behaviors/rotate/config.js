Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Rotate",
    type: "behavior",
    name: "旋转",
    desc: "让精灵具有旋转动画效果",
    author: "",
    version: 2,
    properties: {
        enable: {
            name: "自动开始",
            desc: "游戏运行后，当精灵初始化后自动执行",
            type: "boolean",
            value: !0
        },
        direction: {
            name: "方向",
            desc: "旋转方向",
            type: "select",
            options: [ [ "顺时针", "1" ], [ "逆时针", "2" ] ],
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