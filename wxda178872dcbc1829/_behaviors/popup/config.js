Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "popUp",
    type: "behavior",
    name: "弹出",
    desc: "让精灵具有缓动弹出效果",
    author: "",
    version: 2,
    properties: {
        enable: {
            name: "自动开始",
            desc: "游戏运行后，当精灵出现时自动执行",
            type: "boolean",
            value: !1
        },
        behaviorType: {
            name: "缓动类型",
            desc: "缓动的类型",
            type: "select",
            options: [ [ "二次方", "Quadratic" ], [ "三次方", "Cubic" ], [ "四次方", "Quartic" ], [ "五次方", "Quintic" ], [ "正弦曲线", "Sinusoidal" ], [ "指数曲线", "Exponential" ], [ "圆形曲线", "Circular" ], [ "弹性曲线", "Elastic" ], [ "弹跳曲线", "Bounce" ], [ "背部曲线", "Back" ] ],
            value: "Quadratic"
        },
        behaviorSpeed: {
            name: "缓动方式",
            type: "select",
            desc: "In：从0开始加速的缓动；\n            Out：减速到0的缓动；\n            InOut：前半段从0开始加速，后半段减速到0的缓动。",
            options: [ [ "In", "easeIn" ], [ "Out", "easeOut" ], [ "InOut", "easeInOut" ] ],
            value: "easeIn"
        },
        allTime: {
            name: "动画持续时间",
            desc: "一次动画执行的总时间，单位秒",
            type: "number",
            value: 1
        },
        originSize: {
            name: "初始scale大小",
            desc: "元素的初始scale大小",
            type: "number",
            value: .8
        }
    }
};