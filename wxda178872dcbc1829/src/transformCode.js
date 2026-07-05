Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = tranformCode;

var _constant = require("../constant"), defaultConfig = {
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
    if (!e.components) {
        var t = [ "width", "height", "_width", "_height", "x", "y", "rotation", "scale", "pivot", "align", "smooth", "unequal", "alpha", "mirror", "repeat", "backgroundColor", "visible", "fillColor", "verticalAlign", "borderRadius", "fontSize", "lineHeight", "fontFamily", "fontWeight", "padding", "breakWords", "text" ], o = e.sprites;
        if (o && 0 < Object.keys(o).length) {
            for (var n in o) {
                var a, i = o[n];
                for (a in t) void 0 !== i[t[a]] && (void 0 === i.properties && (i.properties = Object.create(null)), 
                i.origin = n, i.properties[t[a]] = i[t[a]], delete i[t[a]]);
            }
            e.components = o;
        }
    }
    for (var n in e.sprites) e.sprites[n].id = n;
    for (var n in e.styles) e.styles[n].id = n;
    for (var n in e.variables) e.variables[n].varId = n;
    for (var n in e.sounds) e.sounds[n].id = n;
    for (var n in e.scenes) e.scenes[n].id = n;
    if (!e.version || e.version <= 13) {
        var r, s, l = 0, O = 0, d = 0, c = e.components;
        for (n in c) for (r in (i = c[n]).layers || (i.layers = []), i.blocks) {
            var p, u = i.blocks[r];
            u.opcode === _constant.OLDCODE_TRANSFORM_NEWCODE.sgbp && (p = u.fields.OPTION_LIST2, 
            u.fields.OPTION_LIST2 = {
                name: "OPTION_LIST2",
                value: "Physical",
                text: "物理"
            }, u.fields.OPTION_LIST3 = {
                name: "OPTION_LIST3",
                value: PhysicalPropertyMap[p.value].value,
                text: PhysicalPropertyMap[p.value].name
            }), i.plugins || (i.plugins = []), /physical/i.test(u.opcode) && !hasKey(i.plugins, "Physical") ? (l++, 
            i.plugins.push(defaultConfig)) : /bounceOf/i.test(u.opcode) && !hasKey(i.plugins, "Bounceof") ? (O++, 
            i.plugins.push(BounceofConfig)) : !d && -1 < u.opcode.indexOf("LocalStorage") && (d = 1), 
            -1 < fieldNeedTranslate.indexOf(u.opcode) && void 0 === u.fields.OPTION_LIST1 && (u.fields.OPTION_LIST1 = {
                name: "OPTION_LIST1",
                value: "_self_"
            });
        }
        for (s in e.behaviors.Physical || e.behaviors.Bounceof || (e.behaviors = {}), l && (e.behaviors ? e.behaviors.Physical = l : e.behaviors = {
            Physical: l
        }), O && (e.behaviors ? e.behaviors.Bounceof = O : e.behaviors = {
            Bounceof: O
        }), d && (e.plugins = [ {
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
            var x = e.sprites[s].origin;
            e.components[x].layers.push(s);
        }
    }
    if (!e.version || e.version <= 14) {
        var _ = 0, h = e.components;
        for (n in h) {
            var v = h[n];
            "background" === v.type && 0 < v.scripts.length && (v.properties.adaptationMode = 3, 
            v.plugins || (v.plugins = []), v.plugins.findIndex(function(e) {
                return "Repeat" === e.id;
            }) < 0) && (_++, v.plugins.push({
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
            }));
        }
        e.behaviors ? e.behaviors.Repeat = _ : e.behaviors = {
            Repeat: _
        };
    }
    var D, E;
    if ((!e.version || e.version <= 15) && (D = e.sprites, E = e.components, Object.keys(E).forEach(function(n) {
        "container" === (n = E[n]).type && Object.keys(n.blocks).forEach(function(o) {
            o = n.blocks[o], Object.keys(o.fields).forEach(function(e) {
                var t;
                -1 < (e = o.fields[e]).value.indexOf("_children_") && (t = (t = e.value.replace("_children_", "")).split("&&")[0]) && E[t] && n.layers[0] && D[n.layers[0]] && (0 < (t = E[t].layers.filter(function(e) {
                    return D[n.layers[0]].children.includes(e);
                })).length ? e.value = "_children_" + t[0] : console.error("查找子元素出错", t, e));
            });
        });
    })), !e.version || e.version <= 17) {
        var g = e.meta.horizontal ? 667 : 375, y = e.meta.horizontal ? 375 : 667, f = e.sprites, k = e.components;
        for (n in f) {
            var C = f[n], N = C.properties, R = k[C.origin], C = (N.backgroundColor && (N.alpha = N.backgroundColor.alpha, 
            N.tint = N.backgroundColor.hex, "text" !== C.type ? delete N.backgroundColor : (delete N.tint, 
            N.alpha = 1)), "plugin" !== C.type && "container" !== C.type || (N.alpha = 1), N.height / 2), b = (b = N.width / 2) || R.properties.width / 2, C = C || R.properties.height / 2;
            N.widgetModeV && (1 === N.widgetModeV ? (N.widgetV = Math.round(y - N.y - C), N.y = Math.round(y - N.widgetV - C)) : 2 === N.widgetModeV && (N.widgetV = Math.round(y + N.y - C), 
            N.y = Math.round(N.widgetV - y + C))), N.widgetModeH && (1 === N.widgetModeH ? (N.widgetH = Math.round(g + N.x - b), 
            N.x = Math.round(N.widgetH - g + b)) : 2 === N.widgetModeH && (N.widgetH = Math.round(g - N.x - b), 
            N.x = Math.round(g - N.widgetH - b)));
        }
    }
    if (!e.version || e.version <= 13) {
        var m, M = e.components;
        for (m in e.layers) {
            var T = e.layers[m];
            T.parent && (T.parent = !1), T.origin && M[T.origin].layers.indexOf(T.id) < 0 && M[T.origin].layers.push(T.id);
        }
    }
    if (!e.version || e.version <= 14) for (var S in e.layers) {
        S = e.layers[S];
        "container" === S.type && (S.properties.unequal = !0, S.properties.width || (S.properties.width = 750), 
        S.properties.height || (S.properties.height = 1334));
    }
    if (!e.version || e.version <= 17) {
        var I, L = e.meta.horizontal ? 667 : 375, w = e.meta.horizontal ? 375 : 667, H = e.components;
        for (I in e.layers) {
            var W = e.layers[I], A = W.properties, F = H[W.origin], W = (A.backgroundColor && (A.alpha = A.backgroundColor.alpha, 
            A.tint = A.backgroundColor.hex, "text" !== W.type ? delete A.backgroundColor : (delete A.tint, 
            F.properties.plainText && (A.alpha = 1))), "plugin" !== W.type && "container" !== W.type || (A.alpha = 1), 
            A.height / 2), P = (P = A.width / 2) || F.properties.width / 2, W = W || F.properties.height / 2;
            A.widgetModeV && (1 === A.widgetModeV ? (A.widgetV = Math.round(w - A.y - W), A.y = Math.round(w - A.widgetV - W)) : 2 === A.widgetModeV && (A.widgetV = Math.round(w + A.y - W), 
            A.y = Math.round(A.widgetV - w + W))), A.widgetModeH && (1 === A.widgetModeH ? (A.widgetH = Math.round(L + A.x - P), 
            A.x = Math.round(A.widgetH - L + P)) : 2 === A.widgetModeH && (A.widgetH = Math.round(L - A.x - P), 
            A.x = Math.round(L - A.widgetH - P)));
        }
    }
    return e;
}

function hasKey(e, t) {
    for (var o = 0; o < e.length; o++) if (e[o].id === t) return !0;
    return !1;
}