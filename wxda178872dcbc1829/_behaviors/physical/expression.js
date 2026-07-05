Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    rebound: {
        msg: "反弹系数",
        fun: function() {
            return this.getPhysicalSpriteProperty("_rebound_");
        }
    },
    friction: {
        msg: "摩擦系数",
        fun: function() {
            return this.getPhysicalSpriteProperty("_friction_");
        }
    },
    speedX: {
        msg: "水平速度",
        fun: function() {
            return this.getPhysicalSpriteProperty("_speed_x_");
        }
    },
    speedY: {
        msg: "垂直速度",
        fun: function() {
            return this.getPhysicalSpriteProperty("_speed_y_");
        }
    },
    quality: {
        msg: "质量",
        fun: function() {
            return this.getPhysicalSpriteProperty("_quality_");
        }
    }
};