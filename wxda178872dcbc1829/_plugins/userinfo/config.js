Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Userinfo",
    type: "general",
    name: "用户信息",
    desc: "获取用户的头像昵称",
    author: "",
    version: 1,
    color: "orange",
    data: {
        name: "用户信息",
        icon: "1_3QomDWoCyBM"
    },
    properties: {
        btnSprite: {
            name: "按钮图标",
            type: "image",
            value: "https://gamemaker.qpic.cn/luban/1_QgqZf-mDyhM"
        },
        lang: {
            name: "描述用户信息的语言",
            type: "select",
            options: [ [ "英文", "en" ], [ "简体中文", "zh_CN" ], [ "繁体中文", "zh_TW" ] ],
            value: "en"
        }
    }
};