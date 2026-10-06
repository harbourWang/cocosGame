Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = tranformCode;

var _constant = require("../constant"), _white = _interopRequireDefault(require("./white"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var defaultConfig = {
    id: "Physical",
    type: "behavior",
    name: "物理",
    desc: "让精灵具有物理行为",
    author: "",
    version: 1,
    properties: {
        enable: {
            name: "Enable",
            type: "boolean",
            value: !1
        },
        canRotation: {
            name: "能否倾倒",
            type: "boolean",
            value: !0
        },
        friction: {
            name: "摩擦系数",
            type: "number",
            value: .1
        },
        linearDamping: {
            name: "表面摩擦系数",
            type: "number",
            value: 0
        },
        angularDamping: {
            name: "旋转摩擦系数",
            type: "number",
            value: 0
        },
        rebound: {
            name: "反弹系数",
            type: "number",
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
            value: "false"
        },
        precision: {
            name: "精灵轮廓",
            type: "select",
            options: [ [ "素材轮廓", "true" ], [ "矩形", "rect" ], [ "圆形", "circle" ] ],
            value: "true"
        }
    },
    category: "behavior",
    visible: !0
}, BounceofConfig = {
    id: "Bounceof",
    type: "behavior",
    name: "反弹",
    desc: "让精灵具备反弹的行为",
    author: "",
    version: 1,
    properties: {
        enable: {
            name: "Enable",
            type: "boolean",
            value: !0
        },
        speed: {
            name: "运动速度",
            type: "number",
            value: 0
        },
        towardsRotation: {
            name: "运动朝向",
            type: "number",
            value: 0
        }
    },
    visible: !0,
    category: "behavior"
}, fieldNeedTranslate = [ _constant.OLDCODE_TRANSFORM_NEWCODE.mm, _constant.OLDCODE_TRANSFORM_NEWCODE.mt, _constant.OLDCODE_TRANSFORM_NEWCODE.mto, _constant.OLDCODE_TRANSFORM_NEWCODE.mg, _constant.OLDCODE_TRANSFORM_NEWCODE.mr, _constant.OLDCODE_TRANSFORM_NEWCODE.mro, _constant.OLDCODE_TRANSFORM_NEWCODE.mtu, _constant.OLDCODE_TRANSFORM_NEWCODE.mgo, _constant.OLDCODE_TRANSFORM_NEWCODE.ms, _constant.OLDCODE_TRANSFORM_NEWCODE.mc, _constant.OLDCODE_TRANSFORM_NEWCODE.mse, _constant.OLDCODE_TRANSFORM_NEWCODE.ls, _constant.OLDCODE_TRANSFORM_NEWCODE.lh, _constant.OLDCODE_TRANSFORM_NEWCODE.lswi, _constant.OLDCODE_TRANSFORM_NEWCODE.lsw, _constant.OLDCODE_TRANSFORM_NEWCODE.lsss, _constant.OLDCODE_TRANSFORM_NEWCODE.lse, _constant.OLDCODE_TRANSFORM_NEWCODE.lc, _constant.OLDCODE_TRANSFORM_NEWCODE.lset, _constant.OLDCODE_TRANSFORM_NEWCODE.lca, _constant.OLDCODE_TRANSFORM_NEWCODE.lssf, _constant.OLDCODE_TRANSFORM_NEWCODE.lscr, _constant.OLDCODE_TRANSFORM_NEWCODE.lscb, _constant.OLDCODE_TRANSFORM_NEWCODE.ln, _constant.OLDCODE_TRANSFORM_NEWCODE.af, _constant.OLDCODE_TRANSFORM_NEWCODE.as, _constant.OLDCODE_TRANSFORM_NEWCODE.afo, _constant.OLDCODE_TRANSFORM_NEWCODE.afi, _constant.OLDCODE_TRANSFORM_NEWCODE.ag, _constant.OLDCODE_TRANSFORM_NEWCODE.agp, _constant.OLDCODE_TRANSFORM_NEWCODE.csd, _constant.OLDCODE_TRANSFORM_NEWCODE.cj ], PhysicalPropertyMap = {
    _rebound_: {
        value: "Physical-rebound",
        name: "反弹系数"
    },
    _friction_: {
        value: "Physical-friction",
        name: "摩擦系数"
    },
    _speed_x_: {
        value: "Physical-speedX",
        name: "水平速度"
    },
    _speed_y_: {
        value: "Physical-speedY",
        name: "垂直速度"
    },
    _quality_: {
        value: "Physical-quality",
        name: "质量"
    }
};

function tranformCode(e) {
    if (!e.version || e.version <= 13) {
        var a = 0, t = 0, n = 0, o = e.components;
        for (var i in o) {
            var r = o[i];
            for (var s in r.layers || (r.layers = []), r.blocks) {
                var O = r.blocks[s];
                if (_white.default[O.opcode]) {
                    if ("physical_sprite_property" === O.opcode) {
                        var l = O.fields.OPTION_LIST2;
                        O.fields.OPTION_LIST2 = {
                            name: "OPTION_LIST2",
                            value: "Physical",
                            text: "物理"
                        }, O.fields.OPTION_LIST3 = {
                            name: "OPTION_LIST3",
                            value: PhysicalPropertyMap[l.value].value,
                            text: PhysicalPropertyMap[l.value].name
                        };
                    }
                    O.opcode = _white.default[O.opcode], r.plugins || (r.plugins = []), /physical/i.test(O.opcode) && !hasKey(r.plugins, "Physical") ? (a++, 
                    r.plugins.push(defaultConfig)) : /bounceOf/i.test(O.opcode) && !hasKey(r.plugins, "Bounceof") ? (t++, 
                    r.plugins.push(BounceofConfig)) : !n && -1 < O.opcode.indexOf("LocalStorage") && (n = 1);
                }
                -1 < fieldNeedTranslate.indexOf(O.opcode) && void 0 === O.fields.OPTION_LIST1 && (O.fields.OPTION_LIST1 = {
                    name: "OPTION_LIST1",
                    value: "_self_"
                });
            }
        }
        for (var _ in e.behaviors.Physical || e.behaviors.Bounceof || (e.behaviors = {}), 
        a && (e.behaviors ? e.behaviors.Physical = a : e.behaviors = {
            Physical: a
        }), t && (e.behaviors ? e.behaviors.Bounceof = t : e.behaviors = {
            Bounceof: t
        }), n && (e.plugins = [ {
            id: "LocalStorage",
            type: "data",
            name: "本地缓存",
            desc: "将数据存储在本地缓存中指定的 key 中",
            author: "",
            version: 1,
            isGlobal: 1,
            color: "cyanogen",
            category: "plugin"
        } ]), e.sprites) {
            var c = e.sprites[_].origin;
            e.components[c].layers.push(_);
        }
    }
    if (!e.version || e.version <= 14) {
        var u = 0, p = e.components;
        for (var i in p) {
            var D = p[i];
            "background" === D.type && 0 < D.scripts.length && (D.properties.adaptationMode = 3, 
            D.plugins || (D.plugins = []), D.plugins.findIndex(function(e) {
                return "Repeat" === e.id;
            }) < 0 && (u++, D.plugins.push({
                id: "Repeat",
                type: "behavior",
                name: "循环滚动",
                desc: "让精灵可以循环衔接滚动",
                author: "",
                version: 1,
                properties: {
                    enable: {
                        value: !0
                    },
                    cloneCount: {
                        value: 1
                    },
                    cloneDirection: {
                        value: 3
                    },
                    autoMove: {
                        value: !1
                    },
                    speed: {
                        value: 5
                    },
                    speedDirection: {
                        value: 2
                    },
                    reset: {
                        value: !0
                    }
                },
                category: "behavior",
                visible: !0
            })));
        }
        e.behaviors ? e.behaviors.Repeat = u : e.behaviors = {
            Repeat: u
        };
    }
    if (!e.version || e.version <= 17) {
        var E = e.meta.horizontal ? 667 : 375, d = e.meta.horizontal ? 375 : 667, v = e.sprites, C = e.components;
        for (var i in v) {
            var N = v[i], h = N.properties, R = C[N.origin];
            h.backgroundColor && (h.alpha = h.backgroundColor.alpha, h.tint = h.backgroundColor.hex, 
            "text" !== N.type ? delete h.backgroundColor : (delete h.tint, h.alpha = 1)), "plugin" !== N.type && "container" !== N.type || (h.alpha = 1);
            var y = h.height / 2, f = h.width / 2;
            f || (f = R.properties.width / 2), y || (y = R.properties.height / 2), h.widgetModeV && (1 === h.widgetModeV ? (h.widgetV = Math.round(d - h.y - y), 
            h.y = Math.round(d - h.widgetV - y)) : 2 === h.widgetModeV && (h.widgetV = Math.round(d + h.y - y), 
            h.y = Math.round(h.widgetV - d + y))), h.widgetModeH && (1 === h.widgetModeH ? (h.widgetH = Math.round(E + h.x - f), 
            h.x = Math.round(h.widgetH - E + f)) : 2 === h.widgetModeH && (h.widgetH = Math.round(E - h.x - f), 
            h.x = Math.round(E - h.widgetH - f)));
        }
    }
    return e;
}

function hasKey(e, a) {
    for (var t = 0; t < e.length; t++) if (e[t].id === a) return !0;
    return !1;
}