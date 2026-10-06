function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

module.exports = function() {
    function e(e, t) {
        return i[e] ? (i[e].status || (n = {
            exports: {}
        }, i[e].status = 1, i[e].func(i[e].req, n, n.exports), "object" === _typeof(n.exports) ? (Object.keys(n.exports).forEach(function(t) {
            i[e].m.exports[t] = n.exports[t];
        }), n.exports.__esModule && Object.defineProperty(i[e].m.exports, "__esModule", {
            value: !0
        })) : i[e].m.exports = n.exports), i[e].m.exports) : require(t);
        var n;
    }
    var t, n, i = {};
    return t = function(X, Y, F) {
        var r = window, q = document, c = void 0, W = [ "", "webkit", "Moz", "MS", "ms", "o" ], k = q.createElement("div"), H = "function", s = Math.round, l = Math.abs, L = Date.now;
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
                var t = new Error("get-stack-trace"), t = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", e = r.console && (r.console.warn || r.console.log);
                return e && e.call(r.console, i, t), n.apply(this, arguments);
            };
        }
        var a = "function" != typeof Object.assign ? function(t) {
            if (t === c || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (i !== c && null !== i) for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r]);
            }
            return e;
        } : Object.assign, V = U(function(t, e, n) {
            for (var i = Object.keys(e), r = 0; r < i.length; ) n && t[i[r]] !== c || (t[i[r]] = e[i[r]]), 
            r++;
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
            for (var i = [], r = [], s = 0; s < t.length; ) {
                var o = n ? t[s][n] : t[s];
                p(r, o) < 0 && i.push(t[s]), r[s] = o, s++;
            }
            return i = e ? n ? i.sort(function(t, e) {
                return t[n] > e[n];
            }) : i.sort() : i;
        }
        function d(t, e) {
            for (var n, i = e[0].toUpperCase() + e.slice(1), r = 0; r < W.length; ) {
                if ((n = (n = W[r]) ? n + i : e) in t) return n;
                r++;
            }
            return c;
        }
        var Q = 1;
        function tt(t) {
            t = t.ownerDocument || t;
            return t.defaultView || t.parentWindow || r;
        }
        var et = "ontouchstart" in r, nt = d(r, "PointerEvent") !== c, it = et && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), v = "touch", rt = "mouse", st = 25, m = 1, g = 4, y = 8, T = 1, E = 2, b = 4, I = 8, _ = 16, x = E | b, A = I | _, ot = x | A, at = [ "x", "y" ], S = [ "clientX", "clientY" ];
        function C(e, t) {
            var n = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, 
            this.domHandler = function(t) {
                B(e.options.enable, [ e ]) && n.handler(t);
            }, this.init();
        }
        function ut(t, e, n) {
            var i = n.pointers.length, r = n.changedPointers.length, s = e & m && i - r == 0, i = e & (g | y) && i - r == 0, r = (n.isFirst = !!s, 
            n.isFinal = !!i, s && (t.session = {}), n.eventType = e, t), i = n, s = r.session, e = i.pointers, o = e.length, o = (s.firstInput || (s.firstInput = ht(i)), 
            1 < o && !s.firstMultiple ? s.firstMultiple = ht(i) : 1 === o && (s.firstMultiple = !1), 
            s.firstInput), a = s.firstMultiple, u = (a || o).center, h = i.center = ct(e), o = (i.timeStamp = L(), 
            i.deltaTime = i.timeStamp - o.timeStamp, i.angle = ft(u, h), i.distance = P(u, h), 
            function(t, e) {
                var n = e.center, i = t.offsetDelta || {}, r = t.prevDelta || {}, s = t.prevInput || {};
                e.eventType !== m && s.eventType !== g || (r = t.prevDelta = {
                    x: s.deltaX || 0,
                    y: s.deltaY || 0
                }, i = t.offsetDelta = {
                    x: n.x,
                    y: n.y
                });
                e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y);
            }(s, i), i.offsetDirection = pt(i.deltaX, i.deltaY), lt(i.deltaTime, i.deltaX, i.deltaY)), u = (i.overallVelocityX = o.x, 
            i.overallVelocityY = o.y, i.overallVelocity = l(o.x) > l(o.y) ? o.x : o.y, i.scale = a ? function(t, e) {
                return P(e[0], e[1], S) / P(t[0], t[1], S);
            }(a.pointers, e) : 1, i.rotation = a ? function(t, e) {
                return ft(e[1], e[0], S) + ft(t[1], t[0], S);
            }(a.pointers, e) : 0, i.maxPointers = !s.prevInput || i.pointers.length > s.prevInput.maxPointers ? i.pointers.length : s.prevInput.maxPointers, 
            function(t, e) {
                var n, i, r, s = t.lastInterval || e, o = e.timeStamp - s.timeStamp;
                {
                    var a, u;
                    e.eventType != y && (st < o || s.velocity === c) ? (a = e.deltaX - s.deltaX, u = e.deltaY - s.deltaY, 
                    o = lt(o, a, u), i = o.x, r = o.y, n = l(o.x) > l(o.y) ? o.x : o.y, a = pt(a, u), 
                    t.lastInterval = e) : (n = s.velocity, i = s.velocityX, r = s.velocityY, a = s.direction);
                }
                e.velocity = n, e.velocityX = i, e.velocityY = r, e.direction = a;
            }(s, i), r.element);
            J(i.srcEvent.target, u) && (u = i.srcEvent.target), i.target = u, t.emit("hammer.input", n), 
            t.recognize(n), t.session.prevInput = n;
        }
        function ht(t) {
            for (var e = [], n = 0; n < t.pointers.length; ) e[n] = {
                clientX: s(t.pointers[n].clientX),
                clientY: s(t.pointers[n].clientY)
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
                x: s(t[0].clientX),
                y: s(t[0].clientY)
            };
            for (var n = 0, i = 0, r = 0; r < e; ) n += t[r].clientX, i += t[r].clientY, r++;
            return {
                x: s(n / e),
                y: s(i / e)
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
        };
        function D() {
            this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, C.apply(this, arguments);
        }
        t(D, C, {
            handler: function(t) {
                var e = dt[t.type];
                e & m && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = g), 
                this.pressed && (e & g && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [ t ],
                    changedPointers: [ t ],
                    pointerType: rt,
                    srcEvent: t
                }));
            }
        });
        var vt = {
            pointerdown: m,
            pointermove: 2,
            pointerup: g,
            pointercancel: y,
            pointerout: y
        }, mt = {
            2: v,
            3: "pen",
            4: rt,
            5: "kinect"
        }, gt = "pointerdown", yt = "pointermove pointerup pointercancel";
        function Tt() {
            this.evEl = gt, this.evWin = yt, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
        }
        r.MSPointerEvent && !r.PointerEvent && (gt = "MSPointerDown", yt = "MSPointerMove MSPointerUp MSPointerCancel"), 
        t(Tt, C, {
            handler: function(t) {
                var e = this.store, n = !1, i = t.type.toLowerCase().replace("ms", ""), i = vt[i], r = mt[t.pointerType] || t.pointerType, s = r == v, o = p(e, t.pointerId, "pointerId");
                i & m && (0 === t.button || s) ? o < 0 && (e.push(t), o = e.length - 1) : i & (g | y) && (n = !0), 
                o < 0 || (e[o] = t, this.callback(this.manager, i, {
                    pointers: e,
                    changedPointers: [ t ],
                    pointerType: r,
                    srcEvent: t
                }), n && e.splice(o, 1));
            }
        });
        var Et = {
            touchstart: m,
            touchmove: 2,
            touchend: g,
            touchcancel: y
        };
        function bt() {
            this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", 
            this.started = !1, C.apply(this, arguments);
        }
        t(bt, C, {
            handler: function(t) {
                var e, n = Et[t.type];
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
        var It = {
            touchstart: m,
            touchmove: 2,
            touchend: g,
            touchcancel: y
        };
        function _t() {
            this.evTarget = "touchstart touchmove touchend touchcancel", this.targetIds = {}, 
            C.apply(this, arguments);
        }
        t(_t, C, {
            handler: function(t) {
                var e = It[t.type], n = function(t, e) {
                    var n = f(t.touches), i = this.targetIds;
                    if (e & (2 | m) && 1 === n.length) return i[n[0].identifier] = !0, [ n, n ];
                    var r, s, o = f(t.changedTouches), a = [], u = this.target;
                    if (s = n.filter(function(t) {
                        return J(t.target, u);
                    }), e === m) for (r = 0; r < s.length; ) i[s[r].identifier] = !0, r++;
                    r = 0;
                    for (;r < o.length; ) i[o[r].identifier] && a.push(o[r]), e & (g | y) && delete i[o[r].identifier], 
                    r++;
                    if (a.length) return [ K(s.concat(a), "identifier", !0), a ];
                }.call(this, t, e);
                n && this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: v,
                    srcEvent: t
                });
            }
        });
        var xt = 2500;
        function At() {
            C.apply(this, arguments);
            var t = Z(this.handler, this);
            this.touch = new _t(this.manager, t), this.mouse = new D(this.manager, t), this.primaryTouch = null, 
            this.lastTouches = [];
        }
        function St(t) {
            var e, n, t = t.changedPointers[0];
            t.identifier === this.primaryTouch && (e = {
                x: t.clientX,
                y: t.clientY
            }, this.lastTouches.push(e), n = this.lastTouches, setTimeout(function() {
                var t = n.indexOf(e);
                -1 < t && n.splice(t, 1);
            }, xt));
        }
        t(At, C, {
            handler: function(t, e, n) {
                var i = n.pointerType == v, r = n.pointerType == rt;
                if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (i) !function(t, e) {
                        t & m ? (this.primaryTouch = e.changedPointers[0].identifier, St.call(this, e)) : t & (g | y) && St.call(this, e);
                    }.call(this, e, n); else if (r && function(t) {
                        for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                            var r = this.lastTouches[i], s = Math.abs(e - r.x), r = Math.abs(n - r.y);
                            if (s <= 25 && r <= 25) return !0;
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
        var Ct = d(k.style, "touchAction"), Pt = Ct !== c, Dt = "compute", wt = "manipulation", w = "none", O = "pan-x", M = "pan-y", Ot = function() {
            if (!Pt) return !1;
            var e = {}, n = r.CSS && r.CSS.supports;
            return [ "auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none" ].forEach(function(t) {
                e[t] = !n || r.CSS.supports("touch-action", t);
            }), e;
        }();
        function Mt(t, e) {
            this.manager = t, this.set(e);
        }
        function R(t) {
            this.options = a({}, this.defaults, t || {}), this.id = Q++, this.manager = null, 
            this.options.enable = $(this.options.enable, !0), this.state = 1, this.simultaneous = {}, 
            this.requireFail = [];
        }
        function Rt(t) {
            return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : "";
        }
        function zt(t) {
            return t == _ ? "down" : t == I ? "up" : t == E ? "left" : t == b ? "right" : "";
        }
        function Nt(t, e) {
            e = e.manager;
            return e ? e.get(t) : t;
        }
        function z() {
            R.apply(this, arguments);
        }
        function Xt() {
            z.apply(this, arguments), this.pX = null, this.pY = null;
        }
        function Yt() {
            z.apply(this, arguments);
        }
        function Ft() {
            R.apply(this, arguments), this._timer = null, this._input = null;
        }
        function qt() {
            z.apply(this, arguments);
        }
        function Wt() {
            z.apply(this, arguments);
        }
        function kt() {
            R.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, 
            this._input = null, this.count = 0;
        }
        function N(t, e) {
            return (e = e || {}).recognizers = $(e.recognizers, N.defaults.preset), new Ht(t, e);
        }
        function Ht(t, e) {
            this.options = a({}, N.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, 
            this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, 
            this.element = t, this.input = new ((e = this).options.inputClass || (nt ? Tt : it ? _t : et ? At : D))(e, ut), 
            this.touchAction = new Mt(this, this.options.touchAction), Lt(this, !0), o(this.options.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
            }, this);
        }
        function Lt(n, i) {
            var r, s = n.element;
            s.style && (o(n.options.cssProps, function(t, e) {
                r = d(s.style, e), i ? (n.oldCssProps[r] = s.style[r], s.style[r] = t) : s.style[r] = n.oldCssProps[r] || "";
            }), i || (n.oldCssProps = {}));
        }
        Mt.prototype = {
            set: function(t) {
                t == Dt && (t = this.compute()), Pt && this.manager.element.style && Ot[t] && (this.manager.element.style[Ct] = t), 
                this.actions = t.toLowerCase().trim();
            },
            update: function() {
                this.set(this.manager.options.touchAction);
            },
            compute: function() {
                var e = [], t = (o(this.manager.recognizers, function(t) {
                    B(t.options.enable, [ t ]) && (e = e.concat(t.getTouchAction()));
                }), e.join(" "));
                if (u(t, w)) return w;
                var n = u(t, O), i = u(t, M);
                return n && i ? w : n || i ? n ? O : M : u(t, wt) ? wt : "auto";
            },
            preventDefaults: function(t) {
                var e = t.srcEvent, n = t.offsetDirection;
                if (this.manager.session.prevented) e.preventDefault(); else {
                    var i = this.actions, r = u(i, w) && !Ot[w], s = u(i, M) && !Ot[M], i = u(i, O) && !Ot[O];
                    if (r) {
                        var o = 1 === t.pointers.length, a = t.distance < 2, t = t.deltaTime < 250;
                        if (o && a && t) return;
                    }
                    if (!i || !s) return r || s && n & x || i && n & A ? this.preventSrc(e) : void 0;
                }
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
                if (n(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return e[(t = Nt(t, this)).id] || (e[t.id] = t).recognizeWith(this), this;
            },
            dropRecognizeWith: function(t) {
                return n(t, "dropRecognizeWith", this) || (t = Nt(t, this), delete this.simultaneous[t.id]), 
                this;
            },
            requireFailure: function(t) {
                if (n(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return -1 === p(e, t = Nt(t, this)) && (e.push(t), t.requireFailure(this)), this;
            },
            dropRequireFailure: function(t) {
                if (n(t, "dropRequireFailure", this)) return this;
                t = Nt(t, this);
                t = p(this.requireFail, t);
                return -1 < t && this.requireFail.splice(t, 1), this;
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
                t < 8 && i(n.options.event + Rt(t)), i(n.options.event), e.additionalEvent && i(e.additionalEvent), 
                8 <= t && i(n.options.event + Rt(t));
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
                if (!B(this.options.enable, [ this, t ])) return this.reset(), void (this.state = 32);
                56 & this.state && (this.state = 1), this.state = this.process(t), 30 & this.state && this.tryEmit(t);
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
        }), t(Xt, z, {
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
                var e = this.options, n = !0, i = t.distance, r = t.direction, s = t.deltaX, o = t.deltaY;
                return r & e.direction || (i = e.direction & x ? (r = 0 === s ? T : s < 0 ? E : b, 
                n = s != this.pX, Math.abs(t.deltaX)) : (r = 0 === o ? T : o < 0 ? I : _, n = o != this.pY, 
                Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction;
            },
            attrTest: function(t) {
                return z.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t));
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = zt(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
            }
        }), t(Yt, z, {
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
        }), t(Ft, R, {
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
                var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, r = t.deltaTime > e.time;
                if (this._input = t, !i || !n || t.eventType & (g | y) && !r) this.reset(); else if (t.eventType & m) this.reset(), 
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
        }), t(qt, z, {
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
        }), t(Wt, z, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: x | A,
                pointers: 1
            },
            getTouchAction: function() {
                return Xt.prototype.getTouchAction.call(this);
            },
            attrTest: function(t) {
                var e, n = this.options.direction;
                return n & (x | A) ? e = t.overallVelocity : n & x ? e = t.overallVelocityX : n & A && (e = t.overallVelocityY), 
                this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && l(e) > this.options.velocity && t.eventType & g;
            },
            emit: function(t) {
                var e = zt(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
            }
        }), t(kt, R, {
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
                return [ wt ];
            },
            process: function(t) {
                var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, r = t.deltaTime < e.time;
                if (this.reset(), t.eventType & m && 0 === this.count) return this.failTimeout();
                if (i && r && n) {
                    if (t.eventType != g) return this.failTimeout();
                    i = !this.pTime || t.timeStamp - this.pTime < e.interval, r = !this.pCenter || P(this.pCenter, t.center) < e.posThreshold;
                    if (this.pTime = t.timeStamp, this.pCenter = t.center, r && i ? this.count += 1 : this.count = 1, 
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
            touchAction: Dt,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [ [ qt, {
                enable: !1
            } ], [ Yt, {
                enable: !1
            }, [ "rotate" ] ], [ Wt, {
                direction: x
            } ], [ Xt, {
                direction: x
            }, [ "swipe" ] ], [ kt ], [ kt, {
                event: "doubletap",
                taps: 2
            }, [ "tap" ] ], [ Ft ] ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        }, Ht.prototype = {
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
                    for (var n, i = this.recognizers, r = e.curRecognizer, s = ((!r || 8 & r.state) && (r = e.curRecognizer = null), 
                    0); s < i.length; ) n = i[s], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), 
                    !r && 14 & n.state && (r = e.curRecognizer = n), s++;
                }
            },
            get: function(t) {
                if (t instanceof R) return t;
                for (var e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
                return null;
            },
            add: function(t) {
                if (n(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), (t.manager = this).touchAction.update(), 
                t;
            },
            remove: function(t) {
                return n(t, "remove", this) || (t = this.get(t)) && -1 !== (t = p(e = this.recognizers, t)) && (e.splice(t, 1), 
                this.touchAction.update()), this;
                var e;
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
                this.options.domEvents && (n = t, i = e, (r = q.createEvent("Event")).initEvent(n, !0, !0), 
                (r.gesture = i).target.dispatchEvent(r));
                var n, i, r, s = this.handlers[t] && this.handlers[t].slice();
                if (s && s.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault();
                    };
                    for (var o = 0; o < s.length; ) s[o](e), o++;
                }
            },
            destroy: function() {
                this.element && Lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), 
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
            Manager: Ht,
            Input: C,
            TouchAction: Mt,
            TouchInput: _t,
            MouseInput: D,
            PointerEventInput: Tt,
            TouchMouseInput: At,
            SingleTouchInput: bt,
            Recognizer: R,
            AttrRecognizer: z,
            Tap: kt,
            Pan: Xt,
            Swipe: Wt,
            Pinch: Yt,
            Rotate: qt,
            Press: Ft,
            on: e,
            off: i,
            each: o,
            merge: G,
            extend: V,
            assign: a,
            inherit: t,
            bindFn: Z,
            prefixed: d
        }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = N, "function" == typeof define && define.amd ? define(function() {
            return N;
        }) : void 0 !== Y && Y.exports ? Y.exports = N : r.Hammer = N;
    }, n = function(t) {
        return e({}[t], t);
    }, i[1544789697429] = {
        status: 0,
        func: t,
        req: n,
        m: {
            exports: {}
        }
    }, e(1544789697429);
}();