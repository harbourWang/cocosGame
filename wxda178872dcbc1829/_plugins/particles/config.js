Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Particles",
    type: "general",
    name: "粒子效果",
    desc: "播放粒子",
    author: "",
    version: 1,
    color: "green",
    data: {
        name: "粒子",
        icon: "1_NgoOT5sdRBM"
    },
    properties: {
        autoPlay: {
            name: "自动循环播放",
            type: "boolean",
            value: !0,
            desc: "开始游戏时是否自动播放"
        },
        url: {
            name: "源图片",
            type: "image",
            value: "https://gamemaker.qpic.cn/luban/1_62313534396338352d333739302d346561352d393135392d333938366534303631613931"
        },
        randomSpacing: {
            name: "是否随机分布",
            type: "boolean",
            value: !0,
            desc: "粒子应均匀分布（假）还是随机分布(真)"
        },
        interval: {
            name: "产生频率",
            type: "number",
            value: 500,
            desc: "创建粒子的间隔，以毫秒为单位"
        },
        number: {
            name: "粒子数量",
            type: "number",
            value: 50
        },
        minSize: {
            name: "最小粒子尺寸",
            type: "number",
            value: 12,
            desc: "粒子像素最小值。粒子的大小为正方形，粒子的大小会从最大值和最小值取随机值"
        },
        maxSize: {
            name: "最大粒子尺寸",
            type: "number",
            value: 24,
            desc: "粒子像素最大值"
        },
        minAngle: {
            name: "最小角度",
            type: "number",
            value: 0,
            desc: "0是从3点钟的位置开始，指向右侧。最小值是0。为了获得完全圆形的爆炸效果，请使用最小角度0和最大角度360。"
        },
        maxAngle: {
            name: "最大角度",
            type: "number",
            value: 360,
            desc: "360回到零的位置，如果要将粒子范围限制为更窄的角度，只需提供描述该角度的最小和最大值即可"
        },
        minSpeed: {
            name: "最小速度",
            type: "number",
            value: .3,
            desc: "粒子的最小线性速度，单位：像素/帧。会从最小速度和最大速度取随机值"
        },
        maxSpeed: {
            name: "最大速度",
            type: "number",
            value: 3,
            desc: "粒子的最大线性速度"
        },
        minScaleSpeed: {
            name: "最小缩放速度",
            type: "number",
            value: .005,
            desc: "缩放速度的最小值，每一帧粒子缩小单位值，直到为0。会从最小值和最大值取随机值"
        },
        maxScaleSpeed: {
            name: "最大缩放速度",
            type: "number",
            value: .01,
            desc: "缩放速度的最大值"
        },
        minAlphaSpeed: {
            name: "最小透明度衰减速度",
            type: "number",
            value: .005,
            desc: "透明度衰减的最小值，每一帧粒子透明度衰减单位值，直到为0。会从最小值和最大值取随机值"
        },
        maxAlphaSpeed: {
            name: "最大透明度衰减速度",
            type: "number",
            value: .01,
            desc: "透明度衰减速度的最大值"
        },
        minRotationSpeed: {
            name: "最小旋转速度",
            type: "number",
            value: .005,
            desc: "旋转速度的最小值，每一帧粒子旋转速度单位值，会从最小值和最大值取随机值"
        },
        maxRotationSpeed: {
            name: "最大旋转速度",
            type: "number",
            value: .01,
            desc: "旋转速度的最大值"
        },
        minLifeTime: {
            name: "最小生命周期",
            type: "number",
            value: .2,
            desc: "生命周期最小值，每个粒子的存活时间，单位秒，会从最小值和最大值取随机值"
        },
        maxLifeTime: {
            name: "最大生命周期",
            type: "number",
            value: .8,
            desc: "生命周期最大值，单位秒"
        },
        gravity: {
            name: "重力大小",
            type: "number",
            value: .1,
            desc: "将重力设置为更大的值会更快的拉低粒子。"
        }
    }
};