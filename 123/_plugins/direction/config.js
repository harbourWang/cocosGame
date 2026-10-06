Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    id: "Joystick",
    type: "general",
    name: "摇杆",
    desc: "控制精灵移动",
    author: "",
    version: 1,
    isGlobal: 0,
    color: "orange",
    data: {
        name: "摇杆",
        width: 260,
        height: 260,
        icon: "https://res.wx.qq.com/wechatgame/product/cdn/luban/joystick_06ad3805.png"
    },
    properties: {
        backgroundUrl: {
            name: "背景图",
            type: "image",
            value: "https://wximg.qq.com/wxgame/minigame/luban/joystick_wrap.png"
        },
        buttonUrl: {
            name: "按钮图",
            type: "image",
            value: "https://wximg.qq.com/wxgame/minigame/luban/joystick.png"
        }
    }
};

exports.default = _default;