Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Scrollview",
    type: "general",
    name: "滚动列表",
    desc: "UI组件",
    author: "",
    version: 1,
    color: "orange",
    data: {
        name: "滚动列表",
        icon: "1_Bg2prR4dRBM"
    },
    properties: {
        type: {
            name: "滚动方向",
            type: "select",
            options: [ [ "上下", 0 ], [ "左右", 1 ] ],
            value: 0
        },
        width: {
            name: "宽度",
            type: "string",
            value: "500",
            desc: "设置列表容器组件的宽度，单位是像素"
        },
        height: {
            name: "高度",
            type: "string",
            value: "1000",
            desc: "设置列表容器组件的高度，单位是像素"
        },
        column: {
            name: "列数",
            type: "number",
            value: 1,
            desc: "仅在类型为上下滚动列表生效",
            visible: {
                key: "type",
                value: 0
            }
        },
        row: {
            name: "行数",
            type: "number",
            value: 1,
            desc: "仅在类型为左右滚动列表生效",
            visible: {
                key: "type",
                value: 1
            }
        },
        marginVertical: {
            name: "垂直间距",
            type: "number",
            value: 10,
            desc: "子元素的上下间距"
        },
        marginHorizontal: {
            name: "水平间距",
            type: "number",
            value: 10,
            desc: "子元素的左右间距"
        },
        child: {
            name: "子元素",
            type: "selectObject",
            value: "-1",
            desc: "列表子元素的模板对象"
        },
        total: {
            name: "总个数",
            type: "number",
            value: "10",
            desc: "列表容器的子元素总数"
        },
        background: {
            name: "背景色",
            type: "color",
            value: "",
            desc: "列表容器的背景色"
        },
        alpha: {
            name: "背景透明度",
            type: "progress",
            min: 0,
            max: 1,
            step: .01,
            value: 1
        },
        radius: {
            name: "列表圆角",
            type: "number",
            value: 5,
            desc: "列表边框的圆角尺寸，单位像素"
        }
    }
};