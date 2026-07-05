Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Camera",
    type: "general",
    name: "摄像头",
    desc: "摄像头组件",
    author: "",
    version: 3,
    color: "green",
    data: {
        name: "摄像头",
        icon: "https://mmgame.qpic.cn/image/af0819a53e9c1e7a48a4c2cbcfd6fb15ba7ca90dc875f25f046413959fadd66c"
    },
    properties: {
        full: {
            name: "是否全屏",
            type: "boolean",
            desc: "是否全屏显示摄像头",
            value: !1
        },
        width: {
            visible: {
                key: "full",
                value: !1
            },
            name: "摄像头宽度",
            type: "number",
            value: 300,
            desc: "摄像头显示宽度"
        }
    }
};