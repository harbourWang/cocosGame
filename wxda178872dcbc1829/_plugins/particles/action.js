Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var config = {
    type: "list",
    name: "OPTION_LIST",
    options: LB.BlockHelper.getPluginInScene,
    args: "Particles",
    isTarget: !0
}, _default = exports.default = {
    setValue: {
        msg: "设置 %1 的 %2 为 %3",
        args: [ config, {
            type: "list",
            name: "OPTION_LIST1",
            options: [ [ "产生频率", "interval" ], [ "粒子数量", "number" ], [ "最小粒子尺寸", "minSize" ], [ "最大粒子尺寸", "maxSize" ], [ "最小角度", "minAngle" ], [ "最大角度", "maxAngle" ], [ "最小速度", "minSpeed" ], [ "最大速度", "maxSpeed" ], [ "最小缩放速度", "minScaleSpeed" ], [ "最大缩放速度", "maxScaleSpeed" ], [ "最小透明度衰减速度", "minAlphaSpeed" ], [ "最大透明度衰减速度", "maxAlphaSpeed" ], [ "最小旋转速度", "minRotationSpeed" ], [ "最大旋转速度", "maxRotationSpeed" ], [ "最小生命周期", "minLifeTime" ], [ "最大生命周期", "maxLifeTime" ], [ "重力大小", "gravity" ] ]
        }, {
            type: "input",
            name: "value",
            input: "number",
            default: 0
        } ],
        fun: function(e, n, t) {
            this.setValue(n, +t);
        }
    },
    playSingle: {
        msg: "%1 播放粒子效果",
        args: [ config ],
        fun: function() {
            this.playSingle();
        }
    },
    play: {
        msg: "%1 播放粒子流效果",
        args: [ config ],
        fun: function() {
            this.particleStream.play();
        }
    },
    stop: {
        msg: "%1 停止粒子流效果",
        args: [ config ],
        fun: function() {
            this.particleStream.stop();
        }
    },
    setPosition: {
        msg: "设置 %1 粒子原点坐标X %2 Y %3",
        args: [ config, {
            type: "input",
            name: "x",
            input: "number",
            default: 0
        }, {
            type: "input",
            name: "y",
            input: "number",
            default: 0
        } ],
        fun: function(e, n, t) {
            this.setPosition(n, t);
        }
    }
};