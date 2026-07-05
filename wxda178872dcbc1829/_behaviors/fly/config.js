Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Fly",
    type: "behavior",
    name: "飞行",
    desc: "让精灵具有飞入飞出动画效果，从场景边界到精灵位置的动画",
    author: "",
    version: 2,
    properties: {
        enable: {
            name: "自动开始",
            desc: "游戏运行后，当精灵出现时自动执行",
            type: "boolean",
            value: !0
        },
        flyType: {
            name: "类型",
            desc: "飞入飞出动画的方向",
            type: "select",
            options: [ [ "飞入", "1" ], [ "飞出", "2" ] ],
            value: "1"
        },
        direction: {
            name: "方向",
            desc: "飞入动画的方向",
            type: "select",
            options: [ [ "→从左到右", "1" ], [ "←从右到左", "2" ], [ "↓从上到下", "3" ], [ "↑从下到上", "4" ], [ "↘从左上到右下", "5" ], [ "↖从右下上到左上", "6" ], [ "↗从左下到右上", "7" ], [ "↙从右上到左下", "8" ] ],
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