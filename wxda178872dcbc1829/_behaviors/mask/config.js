Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Mask",
    type: "behavior",
    name: "遮罩",
    desc: "遮罩是将对象的可见性限制为应用于其的遮罩形状的对象",
    author: "",
    version: 2,
    properties: {
        enable: {
            name: "启用",
            type: "boolean",
            value: !0
        },
        type: {
            name: "类型",
            type: "select",
            options: [ [ "矩形", 1 ], [ "椭圆", 2 ], [ "精灵", 3 ], [ "扇形", 4 ] ],
            value: 1
        },
        child: {
            visible: [ {
                key: "type",
                value: 3
            } ],
            name: "遮罩元素",
            type: "selectObject",
            value: "-1",
            desc: "模板对象"
        },
        x: {
            visible: [ {
                key: "type",
                value: 1
            }, {
                key: "type",
                value: 2
            }, {
                key: "type",
                value: 4
            } ],
            visibleType: 1,
            name: "X坐标",
            type: "number",
            value: 0
        },
        y: {
            visible: [ {
                key: "type",
                value: 1
            }, {
                key: "type",
                value: 2
            }, {
                key: "type",
                value: 4
            } ],
            visibleType: 1,
            name: "Y坐标",
            type: "number",
            value: 0
        },
        radius: {
            visible: [ {
                key: "type",
                value: 4
            } ],
            visibleType: 1,
            name: "半径",
            type: "number",
            value: 10
        },
        startAngle: {
            visible: [ {
                key: "type",
                value: 4
            } ],
            visibleType: 1,
            name: "起始角度",
            type: "number",
            value: 0,
            desc: "顺时针方向，三点钟方向为0度"
        },
        endAngle: {
            visible: [ {
                key: "type",
                value: 4
            } ],
            visibleType: 1,
            name: "结束角度",
            type: "number",
            value: 360
        },
        width: {
            visible: [ {
                key: "type",
                value: 1
            }, {
                key: "type",
                value: 2
            } ],
            visibleType: 1,
            name: "宽度",
            type: "number",
            value: function(e) {
                return e.getters.layerProperties.width || 100;
            }
        },
        height: {
            visible: [ {
                key: "type",
                value: 1
            }, {
                key: "type",
                value: 2
            } ],
            visibleType: 1,
            name: "高度",
            type: "number",
            value: function(e) {
                return e.getters.layerProperties.height || 100;
            }
        },
        scaleX: {
            visible: [ {
                key: "type",
                value: 1
            }, {
                key: "type",
                value: 2
            } ],
            visibleType: 1,
            name: "X轴缩放值",
            type: "number",
            value: 1,
            desc: ""
        },
        scaleY: {
            visible: [ {
                key: "type",
                value: 1
            }, {
                key: "type",
                value: 2
            } ],
            visibleType: 1,
            name: "Y轴缩放值",
            type: "number",
            value: 1
        },
        angle: {
            visible: [ {
                key: "type",
                value: 1
            }, {
                key: "type",
                value: 2
            } ],
            visibleType: 1,
            name: "旋转角度",
            type: "number",
            value: 0
        },
        anchorX: {
            visible: [ {
                key: "type",
                value: 1
            } ],
            name: "水平锚点",
            type: "select",
            options: [ [ "左", 1 ], [ "中", 2 ], [ "右", 3 ] ],
            value: 1,
            desc: "遮罩的水平起点；如果当前遮罩的宽度是100，锚点在左边表示原点是0，锚点在中间表示原点是50，锚点在右边表示原点是100"
        },
        anchorY: {
            visible: [ {
                key: "type",
                value: 1
            } ],
            name: "垂直锚点",
            type: "select",
            options: [ [ "上", 1 ], [ "中", 2 ], [ "下", 3 ] ],
            value: 1,
            desc: "遮罩的垂直起点；如果当前遮罩的高度是100，锚点在上边表示原点是0，锚点在中间表示原点是50，锚点在下边表示原点是100"
        }
    }
};