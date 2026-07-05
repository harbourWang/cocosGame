Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Button",
    type: "general",
    name: "按钮",
    desc: "UI组件",
    author: "",
    version: 1,
    color: "orange",
    data: {
        name: "按钮",
        icon: "1_64356631303835622d666339332d343139612d393033302d633533666132363865323938"
    },
    properties: {
        enable: {
            name: "Enable",
            type: "boolean",
            desc: "是否开启",
            value: !0
        },
        width: {
            name: "宽度",
            type: "number",
            value: 240
        },
        height: {
            name: "高度",
            type: "number",
            value: 80
        },
        type: {
            name: "交互类型",
            type: "select",
            options: [ [ "颜色", 1 ], [ "图片", 2 ], [ "缩放", 3 ] ],
            value: 1
        },
        normalImage: {
            name: "默认图片",
            type: "image",
            value: "https://gamemaker.qpic.cn/luban/1_65383831623333612d663735642d346433662d393034662d313635613565636532653837"
        },
        normalColor: {
            visible: {
                key: "type",
                value: 1
            },
            name: "正常颜色",
            type: "color",
            value: "#f2f2f2"
        },
        pressedColor: {
            visible: {
                key: "type",
                value: 1
            },
            name: "按下颜色",
            type: "color",
            value: "#e6e6e6"
        },
        disabledColor: {
            visible: {
                key: "type",
                value: 1
            },
            name: "禁用颜色",
            type: "color",
            value: "#d7d7d7"
        },
        pressedImage: {
            visible: {
                key: "type",
                value: 2
            },
            name: "按下图片",
            type: "image",
            value: "https://gamemaker.qpic.cn/luban/1_35333866626463612d303835342d343639632d386561652d393938386465383237336536"
        },
        disabledImage: {
            visible: {
                key: "type",
                value: 2
            },
            name: "禁止图片",
            type: "image",
            value: "https://gamemaker.qpic.cn/luban/1_66613237616334322d343737652d343761642d616630342d613431626465373834326634"
        },
        zoomScale: {
            visible: {
                key: "type",
                value: 3
            },
            name: "缩放比例",
            type: "number",
            value: 1.2
        },
        labelVisible: {
            name: "启用文字",
            type: "boolean",
            value: !0
        },
        labelContent: {
            visible: {
                key: "labelVisible",
                value: !0
            },
            name: "文字内容",
            type: "string",
            value: "按钮"
        },
        labelSize: {
            visible: {
                key: "labelVisible",
                value: !0
            },
            name: "字体大小",
            type: "number",
            value: 40
        },
        labelNormalColor: {
            visible: {
                key: "labelVisible",
                value: !0
            },
            name: "正常颜色",
            type: "color",
            value: "#06ae56"
        },
        labelPressedColor: {
            visible: {
                key: "labelVisible",
                value: !0
            },
            name: "按下颜色",
            type: "color",
            value: "#06ae56"
        },
        labelDisabledColor: {
            visible: {
                key: "labelVisible",
                value: !0
            },
            name: "禁用颜色",
            type: "color",
            value: "#c6c6c6"
        },
        labelWeight: {
            visible: {
                key: "labelVisible",
                value: !0
            },
            name: "字体粗细",
            type: "select",
            options: [ [ "细体", "lighter" ], [ "正常", "normal" ], [ "粗体", "bold" ] ],
            value: "normal"
        }
    }
};