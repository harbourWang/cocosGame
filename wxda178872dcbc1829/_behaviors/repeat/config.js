Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Repeat",
    type: "behavior",
    name: "循环滚动",
    desc: "让精灵可以循环衔接滚动",
    author: "",
    version: 1,
    properties: {
        enable: {
            name: "启用",
            type: "boolean",
            value: !0
        },
        cloneCount: {
            name: "平铺个数",
            desc: "注意：平铺并非克隆，平铺的精灵不具有事件和行为",
            type: "number",
            value: 1
        },
        cloneDirection: {
            name: "平铺方向",
            type: "select",
            options: [ [ "横向", 1 ], [ "竖向", 2 ], [ "全部", 3 ] ],
            value: 3
        },
        autoMove: {
            name: "自动移动",
            desc: "是否自动移动",
            type: "boolean",
            value: !1
        },
        speed: {
            visible: {
                key: "autoMove",
                value: !0
            },
            name: "移动速度",
            type: "number",
            value: 5
        },
        speedDirection: {
            visible: {
                key: "autoMove",
                value: !0
            },
            name: "移动方向",
            type: "select",
            options: [ [ "横向", 1 ], [ "竖向", 2 ] ],
            value: 1
        },
        reset: {
            name: "重置位置",
            desc: "在移动后会重置到启动时的位置",
            type: "boolean",
            value: !0
        }
    }
};