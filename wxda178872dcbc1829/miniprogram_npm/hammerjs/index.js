function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

module.exports = function() {
    function e(e, t) {
        var n;
        return i[e] ? (i[e].status || (n = {
            exports: {}
        }, i[e].status = 1, i[e].func(i[e].req, n, n.exports), "object" === _typeof(n.exports) ? (Object.keys(n.exports).forEach(function(t) {
            i[e].m.exports[t] = n.exports[t];
        }), n.exports.__esModule && Object.defineProperty(i[e].m.exports, "__esModule", {
            value: !0
        })) : i[e].m.exports = n.exports), i[e].m.exports) : require(t);
    }
    var i = {};
    return i[1544789697429] = {
        status: 0,
        func: function(X, Y, F) {
            var s = window, q = document, c = void 0, W = [ "", "webkit", "Moz", "MS", "ms", "o" ], k = q.createElement("div"), H = "function", r = Math.round, l = Math.abs, L = Date.now;
            function j(t, e, n) {
                return setTimeout(Z(t, n), e);
            }
            function n(t, e, n) {
                return Array.isArray(t) && (o(t, n[e], n), 1);
            }
            function o(t, e, n) {
                if (t) if (t.forEach) t.forEach(e, n); else if (t.length !== c) for (i = 0; i < t.length; ) e.call(n, t[i], i, t), 
                i++; else for (var i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t);
            }
            function U(n, t, e) {
                var i = "DEPRECATED METHOD: " + t + "\n" + e + " AT \n";
                return function() {
                    var t = new Error("get-stack-trace"), t = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", e = s.console && (s.console.warn || s.console.log);
                    return e && e.call(s.console, i, t), n.apply(this, arguments);
                };
            }
            var a = "function" != typeof Object.assign ? function(t) {
                if (t === c || null === t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (i !== c && null !== i) for (var s in i) i.hasOwnProperty(s) && (e[s] = i[s]);
                }
                return e;
            } : Object.assign, V = U(function(t, e, n) {
                for (var i = Object.keys(e), s = 0; s < i.length; ) n && t[i[s]] !== c || (t[i[s]] = e[i[s]]), 
                s++;
                return t;
            }, "extend", "Use `assign`."), G = U(function(t, e) {
                return V(t, e, !0);
            }, "merge", "Use `assign`.");
            function t(t, e, n) {
                var e = e.prototype, i = t.prototype = Object.create(e);
                i.constructor = t, i._super = e, n && a(i, n);
            }
            function Z(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }
            function B(t, e) {
                return _typeof(t) == H ? t.apply(e && e[0] || c, e) : t;
            }
            function $(t, e) {
                return t === c ? e : t;
            }
            function e(e, t, n) {
                o(h(t), function(t) {
                    e.addEventListener(t, n, !1);
                });
            }
            function i(e, t, n) {
                o(h(t), function(t) {
                    e.removeEventListener(t, n, !1);
                });
            }
            function J(t, e) {
                for (;t; ) {
                    if (t == e) return !0;
                    t = t.parentNode;
                }
                return !1;
            }
            function u(t, e) {
                return -1 < t.indexOf(e);
            }
            function h(t) {
                return t.trim().split(/\s+/g);
            }
            function p(t, e, n) {
                if (t.indexOf && !n) return t.indexOf(e);
                for (var i = 0; i < t.length; ) {
                    if (n && t[i][n] == e || !n && t[i] === e) return i;
                    i++;
                }
                return -1;
            }
            function f(t) {
                return Array.prototype.slice.call(t, 0);
            }
            function K(t, n, e) {
                for (var i = [], s = [], r = 0; r < t.length; ) {
                    var o = n ? t[r][n] : t[r];
                    p(s, o) < 0 && i.push(t[r]), s[r] = o, r++;
                }
                return i = e ? n ? i.sort(function(t, e) {
                    return t[n] > e[n];
                }) : i.sort() : i;
            }
            function d(t, e) {
                for (var n, i = e[0].toUpperCase() + e.slice(1), s = 0; s < W.length; ) {
                    if ((n = (n = W[s]) ? n + i : e) in t) return n;
                    s++;
                }
                return c;
            }
            var Q = 1;
            function tt(t) {
                t = t.ownerDocument || t;
                return t.defaultView || t.parentWindow || s;
            }
            var et = "ontouchstart" in s, nt = d(s, "PointerEvent") !== c, it = et && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), v = "touch", st = "mouse", rt = 25, m = 1, g = 4, y = 8, T = 1, E = 2, b = 4, I = 8, _ = 16, x = E | b, A = I | _, ot = x | A, at = [ "x", "y" ], S = [ "clientX", "clientY" ];
            function C(e, t) {
                var n = this;
                this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, 
                this.domHandler = function(t) {
                    B(e.options.enable, [ e ]) && n.handler(t);
                }, this.init();
            }
            function ut(t, e, n) {
                var i = n.pointers.length, s = n.changedPointers.length, r = e & m && i - s == 0, i = e & (g | y) && i - s == 0, s = (n.isFirst = !!r, 
                n.isFinal = !!i, r && (t.session = {}), n.eventType = e, t), i = n, r = s.session, e = i.pointers, o = e.length, o = (r.firstInput || (r.firstInput = ht(i)), 
                1 < o && !r.firstMultiple ? r.firstMultiple = ht(i) : 1 === o && (r.firstMultiple = !1), 
                r.firstInput), a = r.firstMultiple, u = (a || o).center, h = i.center = ct(e), o = (i.timeStamp = L(), 
                i.deltaTime = i.timeStamp - o.timeStamp, i.angle = ft(u, h), i.distance = P(u, h), 
                function(t, e) {
                    var n = e.center, i = t.offsetDelta || {}, s = t.prevDelta || {}, r = t.prevInput || {};
                    e.eventType !== m && r.eventType !== g || (s = t.prevDelta = {
                        x: r.deltaX || 0,
                        y: r.deltaY || 0
                    }, i = t.offsetDelta = {
                        x: n.x,
                        y: n.y
                    });
                    e.deltaX = s.x + (n.x - i.x), e.deltaY = s.y + (n.y - i.y);
                }(r, i), i.offsetDirection = pt(i.deltaX, i.deltaY), lt(i.deltaTime, i.deltaX, i.deltaY)), u = (i.overallVelocityX = o.x, 
                i.overallVelocityY = o.y, i.overallVelocity = l(o.x) > l(o.y) ? o.x : o.y, i.scale = a ? function(t, e) {
                    return P(e[0], e[1], S) / P(t[0], t[1], S);
                }(a.pointers, e) : 1, i.rotation = a ? function(t, e) {
                    return ft(e[1], e[0], S) + ft(t[1], t[0], S);
                }(a.pointers, e) : 0, i.maxPointers = !r.prevInput || i.pointers.length > r.prevInput.maxPointers ? i.pointers.length : r.prevInput.maxPointers, 
                function(t, e) {
                    var n, i, s, r = t.lastInterval || e, o = e.timeStamp - r.timeStamp;
                    {
                        var a, u;
                        e.eventType != y && (rt < o || r.velocity === c) ? (a = e.deltaX - r.deltaX, u = e.deltaY - r.deltaY, 
                        o = lt(o, a, u), i = o.x, s = o.y, n = l(o.x) > l(o.y) ? o.x : o.y, a = pt(a, u), 
                        t.lastInterval = e) : (n = r.velocity, i = r.velocityX, s = r.velocityY, a = r.direction);
                    }
                    e.velocity = n, e.velocityX = i, e.velocityY = s, e.direction = a;
                }(r, i), s.element);
                J(i.srcEvent.target, u) && (u = i.srcEvent.target), i.target = u, t.emit("hammer.input", n), 
                t.recognize(n), t.session.prevInput = n;
            }
            function ht(t) {
                for (var e = [], n = 0; n < t.pointers.length; ) e[n] = {
                    clientX: r(t.pointers[n].clientX),
                    clientY: r(t.pointers[n].clientY)
                }, n++;
                return {
                    timeStamp: L(),
                    pointers: e,
                    center: ct(e),
                    deltaX: t.deltaX,
                    deltaY: t.deltaY
                };
            }
            function ct(t) {
                var e = t.length;
                if (1 === e) return {
                    x: r(t[0].clientX),
                    y: r(t[0].clientY)
                };
                for (var n = 0, i = 0, s = 0; s < e; ) n += t[s].clientX, i += t[s].clientY, s++;
                return {
                    x: r(n / e),
                    y: r(i / e)
                };
            }
            function lt(t, e, n) {
                return {
                    x: e / t || 0,
                    y: n / t || 0
                };
            }
            function pt(t, e) {
                return t === e ? T : l(t) >= l(e) ? t < 0 ? E : b : e < 0 ? I : _;
            }
            function P(t, e, n) {
                var i = e[(n = n || at)[0]] - t[n[0]], e = e[n[1]] - t[n[1]];
                return Math.sqrt(i * i + e * e);
            }
            function ft(t, e, n) {
                var i = e[(n = n || at)[0]] - t[n[0]], e = e[n[1]] - t[n[1]];
                return 180 * Math.atan2(e, i) / Math.PI;
            }
            C.prototype = {
                handler: function() {},
                init: function() {
                    this.evEl && e(this.element, this.evEl, this.domHandler), this.evTarget && e(this.target, this.evTarget, this.domHandler), 
                    this.evWin && e(tt(this.element), this.evWin, this.domHandler);
                },
                destroy: function() {
                    this.evEl && i(this.element, this.evEl, this.domHandler), this.evTarget && i(this.target, this.evTarget, this.domHandler), 
                    this.evWin && i(tt(this.element), this.evWin, this.domHandler);
                }
            };
            var dt = {
                mousedown: m,
                mousemove: 2,
                mouseup: g
            }, vt = "mousedown", mt = "mousemove mouseup";
            function D() {
                this.evEl = vt, this.evWin = mt, this.pressed = !1, C.apply(this, arguments);
            }
            t(D, C, {
                handler: function(t) {
                    var e = dt[t.type];
                    e & m && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = g), 
                    this.pressed && (e & g && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [ t ],
                        changedPointers: [ t ],
                        pointerType: st,
                        srcEvent: t
                    }));
                }
            });
            var gt = {
                pointerdown: m,
                pointermove: 2,
                pointerup: g,
                pointercancel: y,
                pointerout: y
            }, yt = {
                2: v,
                3: "pen",
                4: st,
                5: "kinect"
            }, Tt = "pointerdown", Et = "pointermove pointerup pointercancel";
            function bt() {
                this.evEl = Tt, this.evWin = Et, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
            }
            s.MSPointerEvent && !s.PointerEvent && (Tt = "MSPointerDown", Et = "MSPointerMove MSPointerUp MSPointerCancel"), 
            t(bt, C, {
                handler: function(t) {
                    var e = this.store, n = !1, i = t.type.toLowerCase().replace("ms", ""), i = gt[i], s = yt[t.pointerType] || t.pointerType, r = s == v, o = p(e, t.pointerId, "pointerId");
                    i & m && (0 === t.button || r) ? o < 0 && (e.push(t), o = e.length - 1) : i & (g | y) && (n = !0), 
                    o < 0 || (e[o] = t, this.callback(this.manager, i, {
                        pointers: e,
                        changedPointers: [ t ],
                        pointerType: s,
                        srcEvent: t
                    }), n && e.splice(o, 1));
                }
            });
            var It = {
                touchstart: m,
                touchmove: 2,
                touchend: g,
                touchcancel: y
            };
            function _t() {
                this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", 
                this.started = !1, C.apply(this, arguments);
            }
            t(_t, C, {
                handler: function(t) {
                    var e, n = It[t.type];
                    n === m && (this.started = !0), this.started && (e = function(t, e) {
                        var n = f(t.touches), t = f(t.changedTouches);
                        e & (g | y) && (n = K(n.concat(t), "identifier", !0));
                        return [ n, t ];
                    }.call(this, t, n), n & (g | y) && e[0].length - e[1].length == 0 && (this.started = !1), 
                    this.callback(this.manager, n, {
                        pointers: e[0],
                        changedPointers: e[1],
                        pointerType: v,
                        srcEvent: t
                    }));
                }
            });
            var xt = {
                touchstart: m,
                touchmove: 2,
                touchend: g,
                touchcancel: y
            }, At = "touchstart touchmove touchend touchcancel";
            function St() {
                this.evTarget = At, this.targetIds = {}, C.apply(this, arguments);
            }
            t(St, C, {
                handler: function(t) {
                    var e = xt[t.type], n = function(t, e) {
                        var n = f(t.touches), i = this.targetIds;
                        if (e & (2 | m) && 1 === n.length) return i[n[0].identifier] = !0, [ n, n ];
                        var s, r, o = f(t.changedTouches), a = [], u = this.target;
                        if (r = n.filter(function(t) {
                            return J(t.target, u);
                        }), e === m) for (s = 0; s < r.length; ) i[r[s].identifier] = !0, s++;
                        s = 0;
                        for (;s < o.length; ) i[o[s].identifier] && a.push(o[s]), e & (g | y) && delete i[o[s].identifier], 
                        s++;
                        if (a.length) return [ K(r.concat(a), "identifier", !0), a ];
                    }.call(this, t, e);
                    n && this.callback(this.manager, e, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: v,
                        srcEvent: t
                    });
                }
            });
            var Ct = 2500;
            function Pt() {
                C.apply(this, arguments);
                var t = Z(this.handler, this);
                this.touch = new St(this.manager, t), this.mouse = new D(this.manager, t), this.primaryTouch = null, 
                this.lastTouches = [];
            }
            function Dt(t) {
                var e, n, t = t.changedPointers[0];
                t.identifier === this.primaryTouch && (e = {
                    x: t.clientX,
                    y: t.clientY
                }, this.lastTouches.push(e), n = this.lastTouches, setTimeout(function() {
                    var t = n.indexOf(e);
                    -1 < t && n.splice(t, 1);
                }, Ct));
            }
            t(Pt, C, {
                handler: function(t, e, n) {
                    var i = n.pointerType == v, s = n.pointerType == st;
                    if (!(s && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                        if (i) !function(t, e) {
                            t & m ? (this.primaryTouch = e.changedPointers[0].identifier, Dt.call(this, e)) : t & (g | y) && Dt.call(this, e);
                        }.call(this, e, n); else if (s && function(t) {
                            for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                                var s = this.lastTouches[i], r = Math.abs(e - s.x), s = Math.abs(n - s.y);
                                if (r <= 25 && s <= 25) return !0;
                            }
                            return !1;
                        }.call(this, n)) return;
                        this.callback(t, e, n);
                    }
                },
                destroy: function() {
                    this.touch.destroy(), this.mouse.destroy();
                }
            });
            var wt, Ot, Mt = d(k.style, "touchAction"), Rt = Mt !== c, zt = "compute", Nt = "manipulation", w = "none", O = "pan-x", M = "pan-y", Xt = Rt && (wt = {}, 
            Ot = s.CSS && s.CSS.supports, [ "auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none" ].forEach(function(t) {
                wt[t] = !Ot || s.CSS.supports("touch-action", t);
            }), wt);
            function Yt(t, e) {
                this.manager = t, this.set(e);
            }
            function R(t) {
                this.options = a({}, this.defaults, t || {}), this.id = Q++, this.manager = null, 
                this.options.enable = $(this.options.enable, !0), this.state = 1, this.simultaneous = {}, 
                this.requireFail = [];
            }
            function Ft(t) {
                return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : "";
            }
            function qt(t) {
                return t == _ ? "down" : t == I ? "up" : t == E ? "left" : t == b ? "right" : "";
            }
            function Wt(t, e) {
                e = e.manager;
                return e ? e.get(t) : t;
            }
            function z() {
                R.apply(this, arguments);
            }
            function kt() {
                z.apply(this, arguments), this.pX = null, this.pY = null;
            }
            function Ht() {
                z.apply(this, arguments);
            }
            function Lt() {
                R.apply(this, arguments), this._timer = null, this._input = null;
            }
            function jt() {
                z.apply(this, arguments);
            }
            function Ut() {
                z.apply(this, arguments);
            }
            function Vt() {
                R.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, 
                this._input = null, this.count = 0;
            }
            function N(t, e) {
                return (e = e || {}).recognizers = $(e.recognizers, N.defaults.preset), new Gt(t, e);
            }
            function Gt(t, e) {
                this.options = a({}, N.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, 
                this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, 
                this.element = t, this.input = new ((e = this).options.inputClass || (nt ? bt : it ? St : et ? Pt : D))(e, ut), 
                this.touchAction = new Yt(this, this.options.touchAction), Zt(this, !0), o(this.options.recognizers, function(t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
                }, this);
            }
            function Zt(n, i) {
                var s, r = n.element;
                r.style && (o(n.options.cssProps, function(t, e) {
                    s = d(r.style, e), i ? (n.oldCssProps[s] = r.style[s], r.style[s] = t) : r.style[s] = n.oldCssProps[s] || "";
                }), i || (n.oldCssProps = {}));
            }
            Yt.prototype = {
                set: function(t) {
                    t == zt && (t = this.compute()), Rt && this.manager.element.style && Xt[t] && (this.manager.element.style[Mt] = t), 
                    this.actions = t.toLowerCase().trim();
                },
                update: function() {
                    this.set(this.manager.options.touchAction);
                },
                compute: function() {
                    var t, e, n = [], i = (o(this.manager.recognizers, function(t) {
                        B(t.options.enable, [ t ]) && (n = n.concat(t.getTouchAction()));
                    }), n.join(" "));
                    return u(i, w) || (t = u(i, O), e = u(i, M), t && e) ? w : t || e ? t ? O : M : u(i, Nt) ? Nt : "auto";
                },
                preventDefaults: function(t) {
                    var e = t.srcEvent, n = t.offsetDirection;
                    if (!this.manager.session.prevented) {
                        var i = this.actions, s = u(i, w) && !Xt[w], r = u(i, M) && !Xt[M], i = u(i, O) && !Xt[O];
                        if (s) {
                            var o = 1 === t.pointers.length, a = t.distance < 2, t = t.deltaTime < 250;
                            if (o && a && t) return;
                        }
                        return i && r ? void 0 : s || r && n & x || i && n & A ? this.preventSrc(e) : void 0;
                    }
                    e.preventDefault();
                },
                preventSrc: function(t) {
                    this.manager.session.prevented = !0, t.preventDefault();
                }
            }, R.prototype = {
                defaults: {},
                set: function(t) {
                    return a(this.options, t), this.manager && this.manager.touchAction.update(), this;
                },
                recognizeWith: function(t) {
                    var e;
                    return n(t, "recognizeWith", this) || (e = this.simultaneous)[(t = Wt(t, this)).id] || (e[t.id] = t).recognizeWith(this), 
                    this;
                },
                dropRecognizeWith: function(t) {
                    return n(t, "dropRecognizeWith", this) || (t = Wt(t, this), delete this.simultaneous[t.id]), 
                    this;
                },
                requireFailure: function(t) {
                    var e;
                    return n(t, "requireFailure", this) || -1 === p(e = this.requireFail, t = Wt(t, this)) && (e.push(t), 
                    t.requireFailure(this)), this;
                },
                dropRequireFailure: function(t) {
                    return n(t, "dropRequireFailure", this) || (t = Wt(t, this), -1 < (t = p(this.requireFail, t)) && this.requireFail.splice(t, 1)), 
                    this;
                },
                hasRequireFailures: function() {
                    return 0 < this.requireFail.length;
                },
                canRecognizeWith: function(t) {
                    return !!this.simultaneous[t.id];
                },
                emit: function(e) {
                    var n = this, t = this.state;
                    function i(t) {
                        n.manager.emit(t, e);
                    }
                    t < 8 && i(n.options.event + Ft(t)), i(n.options.event), e.additionalEvent && i(e.additionalEvent), 
                    8 <= t && i(n.options.event + Ft(t));
                },
                tryEmit: function(t) {
                    if (this.canEmit()) return this.emit(t);
                    this.state = 32;
                },
                canEmit: function() {
                    for (var t = 0; t < this.requireFail.length; ) {
                        if (!(33 & this.requireFail[t].state)) return !1;
                        t++;
                    }
                    return !0;
                },
                recognize: function(t) {
                    t = a({}, t);
                    B(this.options.enable, [ this, t ]) ? (56 & this.state && (this.state = 1), this.state = this.process(t), 
                    30 & this.state && this.tryEmit(t)) : (this.reset(), this.state = 32);
                },
                process: function(t) {},
                getTouchAction: function() {},
                reset: function() {}
            }, t(z, R, {
                defaults: {
                    pointers: 1
                },
                attrTest: function(t) {
                    var e = this.options.pointers;
                    return 0 === e || t.pointers.length === e;
                },
                process: function(t) {
                    var e = this.state, n = t.eventType, i = 6 & e, t = this.attrTest(t);
                    return i && (n & y || !t) ? 16 | e : i || t ? n & g ? 8 | e : 2 & e ? 4 | e : 2 : 32;
                }
            }), t(kt, z, {
                defaults: {
                    event: "pan",
                    threshold: 10,
                    pointers: 1,
                    direction: ot
                },
                getTouchAction: function() {
                    var t = this.options.direction, e = [];
                    return t & x && e.push(M), t & A && e.push(O), e;
                },
                directionTest: function(t) {
                    var e = this.options, n = !0, i = t.distance, s = t.direction, r = t.deltaX, o = t.deltaY;
                    return s & e.direction || (i = e.direction & x ? (s = 0 === r ? T : r < 0 ? E : b, 
                    n = r != this.pX, Math.abs(t.deltaX)) : (s = 0 === o ? T : o < 0 ? I : _, n = o != this.pY, 
                    Math.abs(t.deltaY))), t.direction = s, n && i > e.threshold && s & e.direction;
                },
                attrTest: function(t) {
                    return z.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t));
                },
                emit: function(t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var e = qt(t.direction);
                    e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
                }
            }), t(Ht, z, {
                defaults: {
                    event: "pinch",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [ w ];
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state);
                },
                emit: function(t) {
                    var e;
                    1 !== t.scale && (e = t.scale < 1 ? "in" : "out", t.additionalEvent = this.options.event + e), 
                    this._super.emit.call(this, t);
                }
            }), t(Lt, R, {
                defaults: {
                    event: "press",
                    pointers: 1,
                    time: 251,
                    threshold: 9
                },
                getTouchAction: function() {
                    return [ "auto" ];
                },
                process: function(t) {
                    var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, s = t.deltaTime > e.time;
                    if (this._input = t, !i || !n || t.eventType & (g | y) && !s) this.reset(); else if (t.eventType & m) this.reset(), 
                    this._timer = j(function() {
                        this.state = 8, this.tryEmit();
                    }, e.time, this); else if (t.eventType & g) return 8;
                    return 32;
                },
                reset: function() {
                    clearTimeout(this._timer);
                },
                emit: function(t) {
                    8 === this.state && (t && t.eventType & g ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = L(), 
                    this.manager.emit(this.options.event, this._input)));
                }
            }), t(jt, z, {
                defaults: {
                    event: "rotate",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [ w ];
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state);
                }
            }), t(Ut, z, {
                defaults: {
                    event: "swipe",
                    threshold: 10,
                    velocity: .3,
                    direction: x | A,
                    pointers: 1
                },
                getTouchAction: function() {
                    return kt.prototype.getTouchAction.call(this);
                },
                attrTest: function(t) {
                    var e, n = this.options.direction;
                    return n & (x | A) ? e = t.overallVelocity : n & x ? e = t.overallVelocityX : n & A && (e = t.overallVelocityY), 
                    this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && l(e) > this.options.velocity && t.eventType & g;
                },
                emit: function(t) {
                    var e = qt(t.offsetDirection);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
                }
            }), t(Vt, R, {
                defaults: {
                    event: "tap",
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 9,
                    posThreshold: 10
                },
                getTouchAction: function() {
                    return [ Nt ];
                },
                process: function(t) {
                    var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, s = t.deltaTime < e.time;
                    if (this.reset(), t.eventType & m && 0 === this.count) return this.failTimeout();
                    if (i && s && n) {
                        if (t.eventType != g) return this.failTimeout();
                        i = !this.pTime || t.timeStamp - this.pTime < e.interval, s = !this.pCenter || P(this.pCenter, t.center) < e.posThreshold;
                        if (this.pTime = t.timeStamp, this.pCenter = t.center, s && i ? this.count += 1 : this.count = 1, 
                        this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = j(function() {
                            this.state = 8, this.tryEmit();
                        }, e.interval, this), 2) : 8;
                    }
                    return 32;
                },
                failTimeout: function() {
                    return this._timer = j(function() {
                        this.state = 32;
                    }, this.options.interval, this), 32;
                },
                reset: function() {
                    clearTimeout(this._timer);
                },
                emit: function() {
                    8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
                }
            }), N.VERSION = "2.0.7", N.defaults = {
                domEvents: !1,
                touchAction: zt,
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [ [ jt, {
                    enable: !1
                } ], [ Ht, {
                    enable: !1
                }, [ "rotate" ] ], [ Ut, {
                    direction: x
                } ], [ kt, {
                    direction: x
                }, [ "swipe" ] ], [ Vt ], [ Vt, {
                    event: "doubletap",
                    taps: 2
                }, [ "tap" ] ], [ Lt ] ],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            }, Gt.prototype = {
                set: function(t) {
                    return a(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), 
                    this.input.target = t.inputTarget, this.input.init()), this;
                },
                stop: function(t) {
                    this.session.stopped = t ? 2 : 1;
                },
                recognize: function(t) {
                    var e = this.session;
                    if (!e.stopped) {
                        this.touchAction.preventDefaults(t);
                        for (var n, i = this.recognizers, s = e.curRecognizer, r = ((!s || 8 & s.state) && (s = e.curRecognizer = null), 
                        0); r < i.length; ) n = i[r], 2 === e.stopped || s && n != s && !n.canRecognizeWith(s) ? n.reset() : n.recognize(t), 
                        !s && 14 & n.state && (s = e.curRecognizer = n), r++;
                    }
                },
                get: function(t) {
                    if (t instanceof R) return t;
                    for (var e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
                    return null;
                },
                add: function(t) {
                    var e;
                    return n(t, "add", this) ? this : ((e = this.get(t.options.event)) && this.remove(e), 
                    this.recognizers.push(t), (t.manager = this).touchAction.update(), t);
                },
                remove: function(t) {
                    var e;
                    return n(t, "remove", this) || (t = this.get(t)) && -1 !== (t = p(e = this.recognizers, t)) && (e.splice(t, 1), 
                    this.touchAction.update()), this;
                },
                on: function(t, e) {
                    var n;
                    if (t !== c && e !== c) return n = this.handlers, o(h(t), function(t) {
                        n[t] = n[t] || [], n[t].push(e);
                    }), this;
                },
                off: function(t, e) {
                    var n;
                    if (t !== c) return n = this.handlers, o(h(t), function(t) {
                        e ? n[t] && n[t].splice(p(n[t], e), 1) : delete n[t];
                    }), this;
                },
                emit: function(t, e) {
                    this.options.domEvents && (n = t, i = e, (s = q.createEvent("Event")).initEvent(n, !0, !0), 
                    (s.gesture = i).target.dispatchEvent(s));
                    var n, i, s, r = this.handlers[t] && this.handlers[t].slice();
                    if (r && r.length) {
                        e.type = t, e.preventDefault = function() {
                            e.srcEvent.preventDefault();
                        };
                        for (var o = 0; o < r.length; ) r[o](e), o++;
                    }
                },
                destroy: function() {
                    this.element && Zt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), 
                    this.element = null;
                }
            }, a(N, {
                INPUT_START: m,
                INPUT_MOVE: 2,
                INPUT_END: g,
                INPUT_CANCEL: y,
                STATE_POSSIBLE: 1,
                STATE_BEGAN: 2,
                STATE_CHANGED: 4,
                STATE_ENDED: 8,
                STATE_RECOGNIZED: 8,
                STATE_CANCELLED: 16,
                STATE_FAILED: 32,
                DIRECTION_NONE: T,
                DIRECTION_LEFT: E,
                DIRECTION_RIGHT: b,
                DIRECTION_UP: I,
                DIRECTION_DOWN: _,
                DIRECTION_HORIZONTAL: x,
                DIRECTION_VERTICAL: A,
                DIRECTION_ALL: ot,
                Manager: Gt,
                Input: C,
                TouchAction: Yt,
                TouchInput: St,
                MouseInput: D,
                PointerEventInput: bt,
                TouchMouseInput: Pt,
                SingleTouchInput: _t,
                Recognizer: R,
                AttrRecognizer: z,
                Tap: Vt,
                Pan: kt,
                Swipe: Ut,
                Pinch: Ht,
                Rotate: jt,
                Press: Lt,
                on: e,
                off: i,
                each: o,
                merge: G,
                extend: V,
                assign: a,
                inherit: t,
                bindFn: Z,
                prefixed: d
            }), (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = N, "function" == typeof define && define.amd ? define(function() {
                return N;
            }) : void 0 !== Y && Y.exports ? Y.exports = N : s.Hammer = N;
        },
        req: function(t) {
            return e({}[t], t);
        },
        m: {
            exports: {}
        }
    }, e(1544789697429);
}();