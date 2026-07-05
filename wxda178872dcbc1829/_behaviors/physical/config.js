Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Physical",
    type: "behavior",
    name: "物理",
    desc: "让精灵具有物理行为",
    author: "",
    version: 1,
    properties: {
        enable: {
            name: "启用",
            type: "boolean",
            desc: "是否开启",
            value: !0
        },
        canRotation: {
            name: "能否倾倒",
            type: "boolean",
            desc: "如果关闭，精灵会一直保持方向不变",
            value: !0
        },
        friction: {
            name: "摩擦系数",
            type: "number",
            desc: "当两个物体相互滑动时，摩擦开始起作用，它由一个系数定义，通常从0（无摩擦）到1（强摩擦）。不能为负",
            value: .1
        },
        linearDamping: {
            name: "移动速度衰减系数",
            type: "number",
            value: 0,
            desc: "移动速度衰减系数，可以用来模拟空气摩擦力等效果，它会使现有速度越来越慢。"
        },
        angularDamping: {
            name: "旋转速度衰减系数",
            type: "number",
            value: 0,
            desc: "它会使现有旋转速度越来越慢。"
        },
        rebound: {
            name: "反弹系数",
            type: "number",
            desc: "决定了碰撞后身体会弹跳多少。像密度和摩擦一样，它不能为负，它通常由0到1的系数定义",
            value: 0
        },
        speed: {
            name: "速度大小",
            type: "number",
            value: 0
        },
        speedDirection: {
            name: "速度方向",
            type: "number",
            value: 0
        },
        force: {
            name: "力的大小",
            type: "number",
            value: 0
        },
        forceDirection: {
            name: "力的方向",
            type: "number",
            value: 0
        },
        type: {
            name: "类型",
            type: "select",
            options: [ [ "动态刚体", "false" ], [ "静态刚体", "true" ] ],
            value: "false",
            desc: "静态刚体，零质量，零速度，即不会受到重力或速度影响，但是可以设置他的位置来进行移动。动态刚体，有质量，可以设置速度，会受到重力影响。"
        },
        precision: {
            name: "精灵轮廓",
            type: "select",
            options: [ [ "素材轮廓", "true" ], [ "矩形", "rect" ], [ "圆形", "circle" ] ],
            value: "true",
            desc: "素材轮廓更精确但对性能要求高"
        }
    }
};