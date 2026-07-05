function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

var PIXI = function(G) {
    var N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function F(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports;
    }
    var t = F(function(t, e) {
        function i() {}
        function r(t) {
            return "[object Array]" === Object.prototype.toString.call(t);
        }
        function n() {
            for (var t = 0; t < I.length; t++) I[t][0](I[t][1]);
            w = !(I = []);
        }
        function s(t, e) {
            I.push([ t, e ]), w || (w = !0, S(n, 0));
        }
        function o(t, e) {
            function i(t) {
                c(e, t);
            }
            try {
                t(function(t) {
                    u(e, t);
                }, i);
            } catch (t) {
                i(t);
            }
        }
        function a(e) {
            var t = e.owner, i = t.state_, t = t.data_, r = e[i], e = e.then;
            if ("function" == typeof r) {
                i = E;
                try {
                    t = r(t);
                } catch (t) {
                    c(e, t);
                }
            }
            h(e, t) || (i === E && u(e, t), i === T && c(e, t));
        }
        function h(e, i) {
            var r;
            try {
                if (e === i) throw new TypeError("A promises callback cannot return that same promise.");
                if (i && ("function" == typeof i || "object" === _typeof(i))) {
                    var t = i.then;
                    if ("function" == typeof t) return t.call(i, function(t) {
                        r || (r = !0, (i !== t ? u : l)(e, t));
                    }, function(t) {
                        r || (r = !0, c(e, t));
                    }), 1;
                }
            } catch (t) {
                return r || c(e, t), 1;
            }
        }
        function u(t, e) {
            t !== e && h(t, e) || l(t, e);
        }
        function l(t, e) {
            t.state_ === x && (t.state_ = b, t.data_ = e, s(p, t));
        }
        function c(t, e) {
            t.state_ === x && (t.state_ = b, t.data_ = e, s(f, t));
        }
        function d(t) {
            var e = t.then_;
            t.then_ = void 0;
            for (var i = 0; i < e.length; i++) a(e[i]);
        }
        function p(t) {
            t.state_ = E, d(t);
        }
        function f(t) {
            t.state_ = T, d(t);
        }
        function m(t) {
            if ("function" != typeof t) throw new TypeError("Promise constructor takes a function argument");
            if (this instanceof m == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this.then_ = [], o(t, this);
        }
        var g, y, _, v, x, b, E, T, w, S, I;
        g = "undefined" != typeof window ? window : 0 ? self : N, _ = g.Promise, v = _ && "resolve" in _ && "reject" in _ && "all" in _ && "race" in _ && (new _(function(t) {
            y = t;
        }), "function" == typeof y), e ? (e.Promise = v ? _ : m, e.Polyfill = m) : v || (g.Promise = m), 
        x = "pending", b = "sealed", E = "fulfilled", T = "rejected", S = "undefined" != typeof setImmediate ? setImmediate : setTimeout, 
        I = [], m.prototype = {
            constructor: m,
            state_: x,
            then_: null,
            data_: void 0,
            then: function(t, e) {
                t = {
                    owner: this,
                    then: new this.constructor(i),
                    fulfilled: t,
                    rejected: e
                };
                return this.state_ === E || this.state_ === T ? s(a, t) : this.then_.push(t), t.then;
            },
            catch: function(t) {
                return this.then(null, t);
            }
        }, m.all = function(o) {
            if (r(o)) return new this(function(i, t) {
                var r = [], n = 0;
                for (var e, s = 0; s < o.length; s++) (e = o[s]) && "function" == typeof e.then ? e.then(function(e) {
                    return n++, function(t) {
                        r[e] = t, --n || i(r);
                    };
                }(s), t) : r[s] = e;
                n || i(r);
            });
            throw new TypeError("You must pass an array to Promise.all().");
        }, m.race = function(n) {
            if (r(n)) return new this(function(t, e) {
                for (var i, r = 0; r < n.length; r++) (i = n[r]) && "function" == typeof i.then ? i.then(t, e) : t(i);
            });
            throw new TypeError("You must pass an array to Promise.race().");
        }, m.resolve = function(e) {
            return e && "object" === _typeof(e) && e.constructor === this ? e : new this(function(t) {
                t(e);
            });
        }, m.reject = function(i) {
            return new this(function(t, e) {
                e(i);
            });
        };
    }), t = (t.Promise, t.Polyfill), B = Object.getOwnPropertySymbols, U = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
    for (var X, e = function() {
        try {
            if (Object.assign) {
                var t = new String("abc");
                if (t[5] = "de", "5" !== Object.getOwnPropertyNames(t)[0]) {
                    for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                    var r, n = Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t];
                    });
                    if ("0123456789" === n.join("")) return r = {}, "abcdefghijklmnopqrst".split("").forEach(function(t) {
                        r[t] = t;
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("") ? 1 : void 0;
                }
            }
        } catch (t) {}
    }() ? Object.assign : function(t, e) {
        for (var i, r = arguments, n = function(t) {
            if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t);
        }(t), s = 1; s < arguments.length; s++) {
            for (var o in i = Object(r[s])) U.call(i, o) && (n[o] = i[o]);
            if (B) for (var a = B(i), h = 0; h < a.length; h++) k.call(i, a[h]) && (n[a[h]] = i[a[h]]);
        }
        return n;
    }, j = (window.Promise || (window.Promise = t), Object.assign || (Object.assign = e), 
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}), H = (Date.now && Date.prototype.getTime || (Date.now = function() {
        return new Date().getTime();
    }), j.performance && j.performance.now || (X = Date.now(), j.performance || (j.performance = {}), 
    j.performance.now = function() {
        return Date.now() - X;
    }), Date.now()), Y = [ "ms", "moz", "webkit", "o" ], V = 0; V < Y.length && !j.requestAnimationFrame; ++V) {
        var z = Y[V];
        j.requestAnimationFrame = j[z + "RequestAnimationFrame"], j.cancelAnimationFrame = j[z + "CancelAnimationFrame"] || j[z + "CancelRequestAnimationFrame"];
    }
    j.requestAnimationFrame || (j.requestAnimationFrame = function(t) {
        if ("function" != typeof t) throw new TypeError(t + "is not a function");
        var e = Date.now(), i = 16 + H - e;
        return i < 0 && (i = 0), H = e, setTimeout(function() {
            H = Date.now(), t(performance.now());
        }, i);
    }), j.cancelAnimationFrame || (j.cancelAnimationFrame = function(t) {
        return clearTimeout(t);
    }), Math.sign || (Math.sign = function(t) {
        return 0 === (t = Number(t)) || isNaN(t) ? t : 0 < t ? 1 : -1;
    }), Number.isInteger || (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
    }), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), 
    window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array), 
    window.Uint8Array || (window.Uint8Array = Array), window.Int32Array || (window.Int32Array = Array);
    var W = F(function(t) {
        function i(t, e) {
            return t.test(e);
        }
        function e(t) {
            var t = t || ("undefined" != typeof navigator ? navigator.userAgent : ""), e = t.split("[FBAN"), e = (void 0 !== (e = (t = void 0 !== e[1] ? e[0] : t).split("Twitter"))[1] && (t = e[0]), 
            {
                apple: {
                    phone: i(n, t) && !i(c, t),
                    ipod: i(s, t),
                    tablet: !i(n, t) && i(o, t) && !i(c, t),
                    device: (i(n, t) || i(s, t) || i(o, t)) && !i(c, t)
                },
                amazon: {
                    phone: i(u, t),
                    tablet: !i(u, t) && i(l, t),
                    device: i(u, t) || i(l, t)
                },
                android: {
                    phone: !i(c, t) && i(u, t) || !i(c, t) && i(a, t),
                    tablet: !i(c, t) && !i(u, t) && !i(a, t) && (i(l, t) || i(h, t)),
                    device: !i(c, t) && (i(u, t) || i(l, t) || i(a, t) || i(h, t)) || i(/\bokhttp\b/i, t)
                },
                windows: {
                    phone: i(c, t),
                    tablet: i(d, t),
                    device: i(c, t) || i(d, t)
                },
                other: {
                    blackberry: i(p, t),
                    blackberry10: i(f, t),
                    opera: i(m, t),
                    firefox: i(y, t),
                    chrome: i(g, t),
                    device: i(p, t) || i(f, t) || i(m, t) || i(y, t) || i(g, t)
                }
            });
            return e.any = e.apple.device || e.android.device || e.windows.device || e.other.device, 
            e.phone = e.apple.phone || e.android.phone || e.windows.phone, e.tablet = e.apple.tablet || e.android.tablet || e.windows.tablet, 
            e;
        }
        var r, n, s, o, a, h, u, l, c, d, p, f, m, g, y;
        r = N, n = /iPhone/i, s = /iPod/i, o = /iPad/i, a = /\bAndroid(?:.+)Mobile\b/i, 
        h = /Android/i, u = /\bAndroid(?:.+)SD4930UR\b/i, l = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i, 
        c = /Windows Phone/i, d = /\bWindows(?:.+)ARM\b/i, p = /BlackBerry/i, f = /BB10/i, 
        m = /Opera Mini/i, g = /\b(CriOS|Chrome)(?:.+)Mobile/i, y = /Mobile(?:.+)Firefox\b/i, 
        t.exports && "undefined" == typeof window ? t.exports = e : t.exports && "undefined" != typeof window ? (t.exports = e(), 
        t.exports.isMobile = e) : r.isMobile = e();
    });
    W.isMobile;
    var E = {
        MIPMAP_TEXTURES: 1,
        ANISOTROPIC_LEVEL: 0,
        RESOLUTION: 1,
        FILTER_RESOLUTION: 1,
        SPRITE_MAX_TEXTURES: (t = 32, e = !0, (e = (W.tablet || W.phone) && (e = !1, W.apple.device && (Z = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) && 11 <= parseInt(Z[1], 10) && (e = !0), 
        W.android.device) && (Z = navigator.userAgent.match(/Android\s([0-9.]*)/)) && 7 <= parseInt(Z[1], 10) ? !0 : e) ? t : 4),
        SPRITE_BATCH_SIZE: 4096,
        RENDER_OPTIONS: {
            view: null,
            antialias: !1,
            forceFXAA: !1,
            autoDensity: !1,
            transparent: !1,
            backgroundColor: 0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
            width: 800,
            height: 600,
            legacy: !1
        },
        GC_MODE: 0,
        GC_MAX_IDLE: 3600,
        GC_MAX_CHECK_COUNT: 600,
        WRAP_MODE: 33071,
        SCALE_MODE: 1,
        PRECISION_VERTEX: "highp",
        PRECISION_FRAGMENT: W.apple.device ? "highp" : "mediump",
        CAN_UPLOAD_SAME_BUFFER: !W.apple.device,
        CREATE_IMAGE_BITMAP: !1,
        ROUND_PIXELS: !1
    }, q = F(function(t) {
        var r = Object.prototype.hasOwnProperty, f = "~";
        function i() {}
        function s(t, e, i) {
            this.fn = t, this.context = e, this.once = i || !1;
        }
        function n(t, e, i, r, n) {
            if ("function" != typeof i) throw new TypeError("The listener must be a function");
            i = new s(i, r || t, n), r = f ? f + e : e;
            return t._events[r] ? t._events[r].fn ? t._events[r] = [ t._events[r], i ] : t._events[r].push(i) : (t._events[r] = i, 
            t._eventsCount++), t;
        }
        function h(t, e) {
            0 == --t._eventsCount ? t._events = new i() : delete t._events[e];
        }
        function e() {
            this._events = new i(), this._eventsCount = 0;
        }
        Object.create && (i.prototype = Object.create(null), new i().__proto__ || (f = !1)), 
        e.prototype.eventNames = function() {
            var t, e, i = [];
            if (0 === this._eventsCount) return i;
            for (e in t = this._events) r.call(t, e) && i.push(f ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i;
        }, e.prototype.listeners = function(t) {
            var t = f ? f + t : t, e = this._events[t];
            if (!e) return [];
            if (e.fn) return [ e.fn ];
            for (var i = 0, r = e.length, n = new Array(r); i < r; i++) n[i] = e[i].fn;
            return n;
        }, e.prototype.listenerCount = function(t) {
            t = f ? f + t : t, t = this._events[t];
            return t ? t.fn ? 1 : t.length : 0;
        }, e.prototype.emit = function(t, e, i, r, n, s) {
            var o = arguments, a = f ? f + t : t;
            if (!this._events[a]) return !1;
            var h, u = this._events[a], l = arguments.length;
            if (u.fn) {
                switch (u.once && this.removeListener(t, u.fn, void 0, !0), l) {
                  case 1:
                    return u.fn.call(u.context), !0;

                  case 2:
                    return u.fn.call(u.context, e), !0;

                  case 3:
                    return u.fn.call(u.context, e, i), !0;

                  case 4:
                    return u.fn.call(u.context, e, i, r), !0;

                  case 5:
                    return u.fn.call(u.context, e, i, r, n), !0;

                  case 6:
                    return u.fn.call(u.context, e, i, r, n, s), !0;
                }
                for (p = 1, h = new Array(l - 1); p < l; p++) h[p - 1] = o[p];
                u.fn.apply(u.context, h);
            } else for (var c, d = u.length, p = 0; p < d; p++) switch (u[p].once && this.removeListener(t, u[p].fn, void 0, !0), 
            l) {
              case 1:
                u[p].fn.call(u[p].context);
                break;

              case 2:
                u[p].fn.call(u[p].context, e);
                break;

              case 3:
                u[p].fn.call(u[p].context, e, i);
                break;

              case 4:
                u[p].fn.call(u[p].context, e, i, r);
                break;

              default:
                if (!h) for (c = 1, h = new Array(l - 1); c < l; c++) h[c - 1] = o[c];
                u[p].fn.apply(u[p].context, h);
            }
            return !0;
        }, e.prototype.on = function(t, e, i) {
            return n(this, t, e, i, !1);
        }, e.prototype.once = function(t, e, i) {
            return n(this, t, e, i, !0);
        }, e.prototype.removeListener = function(t, e, i, r) {
            t = f ? f + t : t;
            if (this._events[t]) if (e) {
                var n = this._events[t];
                if (n.fn) n.fn !== e || r && !n.once || i && n.context !== i || h(this, t); else {
                    for (var s = 0, o = [], a = n.length; s < a; s++) (n[s].fn !== e || r && !n[s].once || i && n[s].context !== i) && o.push(n[s]);
                    o.length ? this._events[t] = 1 === o.length ? o[0] : o : h(this, t);
                }
            } else h(this, t);
            return this;
        }, e.prototype.removeAllListeners = function(t) {
            return t ? (t = f ? f + t : t, this._events[t] && h(this, t)) : (this._events = new i(), 
            this._eventsCount = 0), this;
        }, e.prototype.off = e.prototype.removeListener, e.prototype.addListener = e.prototype.on, 
        e.prefixed = f, t.exports = e.EventEmitter = e;
    }), K = J, Z = J;
    function J(t, e, i) {
        i = i || 2;
        var r, n, s, o, a, h = e && e.length, u = h ? e[0] * i : t.length, l = Q(t, 0, u, i, !0), c = [];
        if (l && l.next !== l.prev) {
            if (h && (l = function(t, e, i, r) {
                var n, s, o, a, h = [];
                for (n = 0, s = e.length; n < s; n++) a = e[n] * r, o = n < s - 1 ? e[n + 1] * r : t.length, 
                (a = Q(t, a, o, r, !1)) === a.next && (a.steiner = !0), h.push(function(t) {
                    var e = t, i = t;
                    for (;(e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next, e !== t; ) ;
                    return i;
                }(a));
                for (h.sort(et), n = 0; n < h.length; n++) !function(t, e) {
                    (e = function(t, e) {
                        var i, r = e, n = t.x, s = t.y, o = -1 / 0;
                        do {
                            if (s <= r.y && s >= r.next.y && r.next.y !== r.y) {
                                var a = r.x + (s - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                                if (a <= n && o < a) {
                                    if ((o = a) === n) {
                                        if (s === r.y) return r;
                                        if (s === r.next.y) return r.next;
                                    }
                                    i = r.x < r.next.x ? r : r.next;
                                }
                            }
                        } while (r = r.next, r !== e);
                        if (!i) return null;
                        if (n !== o) {
                            var h, u = i, l = i.x, c = i.y, d = 1 / 0;
                            for (r = i; n >= r.x && r.x >= l && n !== r.x && rt(s < c ? n : o, s, l, c, s < c ? o : n, s, r.x, r.y) && (h = Math.abs(s - r.y) / (n - r.x), 
                            ht(r, t)) && (h < d || h === d && (r.x > i.x || r.x === i.x && function(t, e) {
                                return S(t.prev, t, e.prev) < 0 && S(e.next, t, t.next) < 0;
                            }(i, r))) && (i = r, d = h), (r = r.next) !== u; ) ;
                        }
                        return i;
                    }(t, e)) && $(e = ut(e, t), e.next);
                }(h[n], i), i = $(i, i.next);
                return i;
            }(t, e, l, i)), t.length > 80 * i) {
                for (var d = r = t[0], p = n = t[1], f = i; f < u; f += i) (s = t[f]) < d && (d = s), 
                (o = t[f + 1]) < p && (p = o), r < s && (r = s), n < o && (n = o);
                a = 0 !== (a = Math.max(r - d, n - p)) ? 1 / a : 0;
            }
            tt(l, c, i, d, p, a);
        }
        return c;
    }
    function Q(t, e, i, r, n) {
        var s, o;
        if (n === 0 < pt(t, e, i, r)) for (s = e; s < i; s += r) o = lt(s, t[s], t[s + 1], o); else for (s = i - r; e <= s; s -= r) o = lt(s, t[s], t[s + 1], o);
        return o && nt(o, o.next) && (ct(o), o = o.next), o;
    }
    function $(t, e) {
        if (!t) return t;
        e = e || t;
        var i, r = t;
        do {
            if (i = !1, r.steiner || !nt(r, r.next) && 0 !== S(r.prev, r, r.next)) r = r.next; else {
                if (ct(r), (r = e = r.prev) === r.next) break;
                i = !0;
            }
        } while (i || r !== e);
        return e;
    }
    function tt(t, e, i, r, n, s, o) {
        if (t) {
            if (!o && s) {
                for (var a = t, h = r, u = n, l = s, c = a; null === c.z && (c.z = it(c.x, c.y, h, u, l)), 
                c.prevZ = c.prev, c.nextZ = c.next, (c = c.next) !== a; ) ;
                c.prevZ.nextZ = null, c.prevZ = null;
                var d, p, f, m, g, y, _, v, x = c, b = 1;
                do {
                    for (p = x, g = x = null, y = 0; p; ) {
                        for (y++, f = p, d = _ = 0; d < b && (_++, f = f.nextZ); d++) ;
                        for (v = b; 0 < _ || 0 < v && f; ) 0 !== _ && (0 === v || !f || p.z <= f.z) ? (p = (m = p).nextZ, 
                        _--) : (f = (m = f).nextZ, v--), g ? g.nextZ = m : x = m, m.prevZ = g, g = m;
                        p = f;
                    }
                } while (g.nextZ = null, b *= 2, 1 < y);
            }
            for (var E, T, w = t; t.prev !== t.next; ) if (E = t.prev, T = t.next, s ? function(t, e, i, r) {
                var n = t.prev, s = t, o = t.next;
                if (0 <= S(n, s, o)) return;
                var a = (n.x < s.x ? n.x < o.x ? n : o : s.x < o.x ? s : o).x, h = (n.y < s.y ? n.y < o.y ? n : o : s.y < o.y ? s : o).y, u = (n.x > s.x ? n.x > o.x ? n : o : s.x > o.x ? s : o).x, l = (n.y > s.y ? n.y > o.y ? n : o : s.y > o.y ? s : o).y, c = it(a, h, e, i, r), d = it(u, l, e, i, r), p = t.prevZ, f = t.nextZ;
                for (;p && p.z >= c && f && f.z <= d; ) {
                    if (p !== t.prev && p !== t.next && rt(n.x, n.y, s.x, s.y, o.x, o.y, p.x, p.y) && 0 <= S(p.prev, p, p.next)) return;
                    if (p = p.prevZ, f !== t.prev && f !== t.next && rt(n.x, n.y, s.x, s.y, o.x, o.y, f.x, f.y) && 0 <= S(f.prev, f, f.next)) return;
                    f = f.nextZ;
                }
                for (;p && p.z >= c; ) {
                    if (p !== t.prev && p !== t.next && rt(n.x, n.y, s.x, s.y, o.x, o.y, p.x, p.y) && 0 <= S(p.prev, p, p.next)) return;
                    p = p.prevZ;
                }
                for (;f && f.z <= d; ) {
                    if (f !== t.prev && f !== t.next && rt(n.x, n.y, s.x, s.y, o.x, o.y, f.x, f.y) && 0 <= S(f.prev, f, f.next)) return;
                    f = f.nextZ;
                }
                return 1;
            }(t, r, n, s) : function(t) {
                var e = t.prev, i = t, r = t.next;
                if (0 <= S(e, i, r)) return;
                var n = t.next.next;
                for (;n !== t.prev; ) {
                    if (rt(e.x, e.y, i.x, i.y, r.x, r.y, n.x, n.y) && 0 <= S(n.prev, n, n.next)) return;
                    n = n.next;
                }
                return 1;
            }(t)) e.push(E.i / i), e.push(t.i / i), e.push(T.i / i), ct(t), t = T.next, w = T.next; else if ((t = T) === w) {
                o ? 1 === o ? tt(t = function(t, e, i) {
                    var r = t;
                    do {
                        var n = r.prev, s = r.next.next;
                    } while (!nt(n, s) && st(n, r, r.next, s) && ht(n, s) && ht(s, n) && (e.push(n.i / i), 
                    e.push(r.i / i), e.push(s.i / i), ct(r), ct(r.next), r = t = s), r = r.next, r !== t);
                    return $(r);
                }($(t), e, i), e, i, r, n, s, 2) : 2 === o && function(t, e, i, r, n, s) {
                    var o = t;
                    do {
                        for (var a, h = o.next.next; h !== o.prev; ) {
                            if (o.i !== h.i && function(t, e) {
                                return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
                                    var i = t;
                                    do {
                                        if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && st(i, i.next, t, e)) return 1;
                                    } while (i = i.next, i !== t);
                                    return;
                                }(t, e) && (ht(t, e) && ht(e, t) && function(t, e) {
                                    var i = t, r = !1, n = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
                                    for (;i.y > s != i.next.y > s && i.next.y !== i.y && n < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (r = !r), 
                                    i = i.next, i !== t; ) ;
                                    return r;
                                }(t, e) && (S(t.prev, t, e.prev) || S(t, e.prev, e)) || nt(t, e) && 0 < S(t.prev, t, t.next) && 0 < S(e.prev, e, e.next));
                            }(o, h)) return a = ut(o, h), o = $(o, o.next), a = $(a, a.next), tt(o, e, i, r, n, s), 
                            tt(a, e, i, r, n, s);
                            h = h.next;
                        }
                    } while (o = o.next, o !== t);
                }(t, e, i, r, n, s) : tt($(t), e, i, r, n, s, 1);
                break;
            }
        }
    }
    function et(t, e) {
        return t.x - e.x;
    }
    function it(t, e, i, r, n) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
    }
    function rt(t, e, i, r, n, s, o, a) {
        return 0 <= (n - o) * (e - a) - (t - o) * (s - a) && 0 <= (t - o) * (r - a) - (i - o) * (e - a) && 0 <= (i - o) * (s - a) - (n - o) * (r - a);
    }
    function S(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
    }
    function nt(t, e) {
        return t.x === e.x && t.y === e.y;
    }
    function st(t, e, i, r) {
        var n = at(S(t, e, i)), s = at(S(t, e, r)), o = at(S(i, r, t)), a = at(S(i, r, e));
        return n !== s && o !== a || 0 === n && ot(t, i, e) || 0 === s && ot(t, r, e) || 0 === o && ot(i, t, r) || !(0 !== a || !ot(i, e, r));
    }
    function ot(t, e, i) {
        return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y);
    }
    function at(t) {
        return 0 < t ? 1 : t < 0 ? -1 : 0;
    }
    function ht(t, e) {
        return S(t.prev, t, t.next) < 0 ? 0 <= S(t, e, t.next) && 0 <= S(t, t.prev, e) : S(t, e, t.prev) < 0 || S(t, t.next, e) < 0;
    }
    function ut(t, e) {
        var i = new dt(t.i, t.x, t.y), r = new dt(e.i, e.x, e.y), n = t.next, s = e.prev;
        return (t.next = e).prev = t, (i.next = n).prev = i, (r.next = i).prev = r, (s.next = r).prev = s, 
        r;
    }
    function lt(t, e, i, r) {
        t = new dt(t, e, i);
        return r ? (t.next = r.next, (t.prev = r).next.prev = t, r.next = t) : (t.prev = t).next = t, 
        t;
    }
    function ct(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), 
        t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function dt(t, e, i) {
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, 
        this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    function pt(t, e, i, r) {
        for (var n = 0, s = e, o = i - r; s < i; s += r) n += (t[o] - t[s]) * (t[s + 1] + t[o + 1]), 
        o = s;
        return n;
    }
    J.deviation = function(t, e, i, r) {
        var n = e && e.length, s = n ? e[0] * i : t.length, o = Math.abs(pt(t, 0, s, i));
        if (n) for (var a = 0, h = e.length; a < h; a++) {
            var u = e[a] * i, l = a < h - 1 ? e[a + 1] * i : t.length;
            o -= Math.abs(pt(t, u, l, i));
        }
        for (var c = 0, a = 0; a < r.length; a += 3) {
            var d = r[a] * i, p = r[a + 1] * i, f = r[a + 2] * i;
            c += Math.abs((t[d] - t[f]) * (t[1 + p] - t[1 + d]) - (t[d] - t[p]) * (t[1 + f] - t[1 + d]));
        }
        return 0 === o && 0 === c ? 0 : Math.abs((c - o) / o);
    }, J.flatten = function(t) {
        for (var e = t[0][0].length, i = {
            vertices: [],
            holes: [],
            dimensions: e
        }, r = 0, n = 0; n < t.length; n++) {
            for (var s = 0; s < t[n].length; s++) for (var o = 0; o < e; o++) i.vertices.push(t[n][s][o]);
            0 < n && (r += t[n - 1].length, i.holes.push(r));
        }
        return i;
    }, K.default = Z;
    var ft = F(function(t, e) {
        var i = N, r = e && !e.nodeType && e, e = t && !t.nodeType && t, n = "object" == _typeof(N) && N;
        n.global !== n && n.window !== n && n.self !== n || (i = n);
        var s, o, g = 2147483647, y = 36, _ = 26, a = 38, h = 700, u = /^xn--/, l = /[^\x20-\x7E]/, c = /[\x2E\u3002\uFF0E\uFF61]/g, d = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }, p = y - 1, v = Math.floor, x = String.fromCharCode;
        function b(t) {
            throw RangeError(d[t]);
        }
        function f(t, e) {
            for (var i = t.length, r = []; i--; ) r[i] = e(t[i]);
            return r;
        }
        function m(t, e) {
            var i = t.split("@"), r = "", i = (1 < i.length && (r = i[0] + "@", t = i[1]), (t = t.replace(c, ".")).split("."));
            return r + f(i, e).join(".");
        }
        function E(t) {
            for (var e, i, r = [], n = 0, s = t.length; n < s; ) 55296 <= (e = t.charCodeAt(n++)) && e <= 56319 && n < s ? 56320 == (64512 & (i = t.charCodeAt(n++))) ? r.push(((1023 & e) << 10) + (1023 & i) + 65536) : (r.push(e), 
            n--) : r.push(e);
            return r;
        }
        function T(t) {
            return f(t, function(t) {
                var e = "";
                return 65535 < t && (e += x((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), 
                e += x(t);
            }).join("");
        }
        function w(t, e) {
            return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        }
        function S(t, e, i) {
            var r = 0;
            for (t = i ? v(t / h) : t >> 1, t += v(t / e); p * _ >> 1 < t; r += y) t = v(t / p);
            return v(r + (p + 1) * t / (t + a));
        }
        function I(t) {
            var e, i, r, n, s, o, a, h = [], u = t.length, l = 0, c = 128, d = 72, p = t.lastIndexOf("-");
            for (p < 0 && (p = 0), i = 0; i < p; ++i) 128 <= t.charCodeAt(i) && b("not-basic"), 
            h.push(t.charCodeAt(i));
            for (r = 0 < p ? p + 1 : 0; r < u; ) {
                for (n = l, s = 1, o = y; u <= r && b("invalid-input"), a = t.charCodeAt(r++), (y <= (a = a - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : y) || a > v((g - l) / s)) && b("overflow"), 
                l += a * s, !(a < (a = o <= d ? 1 : d + _ <= o ? _ : o - d)); o += y) s > v(g / (a = y - a)) && b("overflow"), 
                s *= a;
                d = S(l - n, e = h.length + 1, 0 == n), v(l / e) > g - c && b("overflow"), c += v(l / e), 
                l %= e, h.splice(l++, 0, c);
            }
            return T(h);
        }
        function P(t) {
            for (var e, i, r, n, s, o, a, h, u, l, c = [], d = (t = E(t)).length, p = 128, f = 72, m = e = 0; m < d; ++m) (a = t[m]) < 128 && c.push(x(a));
            for (i = r = c.length, r && c.push("-"); i < d; ) {
                for (n = g, m = 0; m < d; ++m) p <= (a = t[m]) && a < n && (n = a);
                for (n - p > v((g - e) / (h = i + 1)) && b("overflow"), e += (n - p) * h, p = n, 
                m = 0; m < d; ++m) if ((a = t[m]) < p && ++e > g && b("overflow"), a == p) {
                    for (s = e, o = y; !(s < (u = o <= f ? 1 : f + _ <= o ? _ : o - f)); o += y) c.push(x(w(u + (l = s - u) % (u = y - u), 0))), 
                    s = v(l / u);
                    c.push(x(w(s, 0))), f = S(e, h, i == r), e = 0, ++i;
                }
                ++e, ++p;
            }
            return c.join("");
        }
        if (s = {
            version: "1.3.2",
            ucs2: {
                decode: E,
                encode: T
            },
            decode: I,
            encode: P,
            toASCII: function(t) {
                return m(t, function(t) {
                    return l.test(t) ? "xn--" + P(t) : t;
                });
            },
            toUnicode: function(t) {
                return m(t, function(t) {
                    return u.test(t) ? I(t.slice(4).toLowerCase()) : t;
                });
            }
        }, r && e) if (t.exports == r) e.exports = s; else for (o in s) s.hasOwnProperty(o) && (r[o] = s[o]); else i.punycode = s;
    }), mt = function(t) {
        return "string" == typeof t;
    }, gt = function(t) {
        return "object" === _typeof(t) && null !== t;
    }, yt = function(t) {
        return null === t;
    }, _t = function(t) {
        return null == t;
    };
    function vt(t, e, i, r) {
        e = e || "&", i = i || "=";
        var n = {};
        if ("string" == typeof t && 0 !== t.length) {
            var s = /\+/g, e = (t = t.split(e), 1e3), o = (r && "number" == typeof r.maxKeys && (e = r.maxKeys), 
            t.length);
            0 < e && e < o && (o = e);
            for (var a = 0; a < o; ++a) {
                var h, u = t[a].replace(s, "%20"), l = u.indexOf(i), l = 0 <= l ? (h = u.substr(0, l), 
                u.substr(l + 1)) : (h = u, ""), u = decodeURIComponent(h), l = decodeURIComponent(l);
                Object.prototype.hasOwnProperty.call(n, u) ? Array.isArray(n[u]) ? n[u].push(l) : n[u] = [ n[u], l ] : n[u] = l;
            }
        }
        return n;
    }
    function xt(t) {
        switch (_typeof(t)) {
          case "string":
            return t;

          case "boolean":
            return t ? "true" : "false";

          case "number":
            return isFinite(t) ? t : "";

          default:
            return "";
        }
    }
    function bt(i, r, n, t) {
        return r = r || "&", n = n || "=", "object" === _typeof(i = null === i ? void 0 : i) ? Object.keys(i).map(function(t) {
            var e = encodeURIComponent(xt(t)) + n;
            return Array.isArray(i[t]) ? i[t].map(function(t) {
                return e + encodeURIComponent(xt(t));
            }).join(r) : e + encodeURIComponent(xt(i[t]));
        }).join(r) : t ? encodeURIComponent(xt(t)) + n + encodeURIComponent(xt(i)) : "";
    }
    function Et(t, e) {
        return Ut(t, !1, !0).resolve(e);
    }
    function Tt(t, e) {
        return t ? Ut(t, !1, !0).resolveObject(e) : e;
    }
    function wt(t) {
        return (t = mt(t) ? Ut(t) : t) instanceof It ? t.format() : It.prototype.format.call(t);
    }
    var St = F(function(t, e) {
        e.decode = e.parse = vt, e.encode = e.stringify = bt;
    }), e = (St.decode, St.parse, St.encode, St.stringify, Ut), t = It;
    function It() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, 
        this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, 
        this.path = null, this.href = null;
    }
    var Pt = /^([a-z0-9.+-]+:)/i, At = /:[0-9]*$/, Ot = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, i = [ "{", "}", "|", "\\", "^", "`" ].concat([ "<", ">", '"', "`", " ", "\r", "\n", "\t" ]), Dt = [ "'" ].concat(i), Mt = [ "%", "/", "?", ";", "#" ].concat(Dt), Ct = [ "/", "?", "#" ], Rt = /^[+a-z0-9A-Z_-]{0,63}$/, Lt = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Nt = {
        javascript: !0,
        "javascript:": !0
    }, Ft = {
        javascript: !0,
        "javascript:": !0
    }, Bt = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    };
    function Ut(t, e, i) {
        var r;
        return t && gt(t) && t instanceof It ? t : ((r = new It()).parse(t, e, i), r);
    }
    It.prototype.parse = function(t, e, i) {
        if (!mt(t)) throw new TypeError("Parameter 'url' must be a string, not " + _typeof(t));
        var r = t.indexOf("?"), r = -1 !== r && r < t.indexOf("#") ? "?" : "#", n = t.split(r);
        n[0] = n[0].replace(/\\/g, "/");
        var s = (s = t = n.join(r)).trim();
        if (!i && 1 === t.split("#").length) {
            n = Ot.exec(s);
            if (n) return this.path = s, this.href = s, this.pathname = n[1], n[2] ? (this.search = n[2], 
            this.query = e ? St.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", 
            this.query = {}), this;
        }
        var o, r = Pt.exec(s);
        if (r && (o = (r = r[0]).toLowerCase(), this.protocol = o, s = s.substr(r.length)), 
        !(i || r || s.match(/^\/\/[^@\/]+@[^@\/]+/)) || !(x = "//" === s.substr(0, 2)) || r && Ft[r] || (s = s.substr(2), 
        this.slashes = !0), !Ft[r] && (x || r && !Bt[r])) {
            for (var a = -1, h = 0; h < Ct.length; h++) -1 !== (u = s.indexOf(Ct[h])) && (-1 === a || u < a) && (a = u);
            -1 !== (t = -1 === a ? s.lastIndexOf("@") : s.lastIndexOf("@", a)) && (n = s.slice(0, t), 
            s = s.slice(t + 1), this.auth = decodeURIComponent(n));
            for (var u, a = -1, h = 0; h < Mt.length; h++) -1 !== (u = s.indexOf(Mt[h])) && (-1 === a || u < a) && (a = u);
            -1 === a && (a = s.length), this.host = s.slice(0, a), s = s.slice(a), this.parseHost(), 
            this.hostname = this.hostname || "";
            i = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!i) for (var l = this.hostname.split(/\./), h = 0, c = l.length; h < c; h++) {
                var d = l[h];
                if (d && !d.match(Rt)) {
                    for (var p = "", f = 0, m = d.length; f < m; f++) 127 < d.charCodeAt(f) ? p += "x" : p += d[f];
                    if (!p.match(Rt)) {
                        var g = l.slice(0, h), y = l.slice(h + 1), _ = d.match(Lt);
                        _ && (g.push(_[1]), y.unshift(_[2])), y.length && (s = "/" + y.join(".") + s), this.hostname = g.join(".");
                        break;
                    }
                }
            }
            255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), 
            i || (this.hostname = ft.toASCII(this.hostname));
            var v = this.port ? ":" + this.port : "", x = this.hostname || "";
            this.host = x + v, this.href += this.host, i && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), 
            "/" !== s[0]) && (s = "/" + s);
        }
        if (!Nt[o]) for (h = 0, c = Dt.length; h < c; h++) {
            var b, E = Dt[h];
            -1 !== s.indexOf(E) && ((b = encodeURIComponent(E)) === E && (b = escape(E)), s = s.split(E).join(b));
        }
        r = s.indexOf("#"), -1 !== r && (this.hash = s.substr(r), s = s.slice(0, r)), t = s.indexOf("?");
        return -1 !== t ? (this.search = s.substr(t), this.query = s.substr(t + 1), e && (this.query = St.parse(this.query)), 
        s = s.slice(0, t)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), 
        Bt[o] && this.hostname && !this.pathname && (this.pathname = "/"), (this.pathname || this.search) && (v = this.pathname || "", 
        n = this.search || "", this.path = v + n), this.href = this.format(), this;
    }, It.prototype.format = function() {
        var t = this.auth || "", e = (t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), 
        t += "@"), this.protocol || ""), i = this.pathname || "", r = this.hash || "", n = !1, s = "", t = (this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), 
        this.port) && (n += ":" + this.port), this.query && gt(this.query) && Object.keys(this.query).length && (s = St.stringify(this.query)), 
        this.search || s && "?" + s || "");
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || Bt[e]) && !1 !== n ? (n = "//" + (n || ""), 
        i && "/" !== i.charAt(0) && (i = "/" + i)) : n = n || "", r && "#" !== r.charAt(0) && (r = "#" + r), 
        t && "?" !== t.charAt(0) && (t = "?" + t), e + n + (i = i.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t);
        })) + (t = t.replace("#", "%23")) + r;
    }, It.prototype.resolve = function(t) {
        return this.resolveObject(Ut(t, !1, !0)).format();
    }, It.prototype.resolveObject = function(t) {
        mt(t) && ((d = new It()).parse(t, !1, !0), t = d);
        for (var e = new It(), i = Object.keys(this), r = 0; r < i.length; r++) {
            var n = i[r];
            e[n] = this[n];
        }
        if (e.hash = t.hash, "" !== t.href) if (t.slashes && !t.protocol) {
            for (var s = Object.keys(t), o = 0; o < s.length; o++) {
                var a = s[o];
                "protocol" !== a && (e[a] = t[a]);
            }
            Bt[e.protocol] && e.hostname && !e.pathname && (e.path = e.pathname = "/");
        } else if (t.protocol && t.protocol !== e.protocol) if (Bt[t.protocol]) {
            if (e.protocol = t.protocol, t.host || Ft[t.protocol]) e.pathname = t.pathname; else {
                for (var h = (t.pathname || "").split("/"); h.length && !(t.host = h.shift()); ) ;
                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== h[0] && h.unshift(""), 
                h.length < 2 && h.unshift(""), e.pathname = h.join("/");
            }
            e.search = t.search, e.query = t.query, e.host = t.host || "", e.auth = t.auth, 
            e.hostname = t.hostname || t.host, e.port = t.port, (e.pathname || e.search) && (d = e.pathname || "", 
            p = e.search || "", e.path = d + p), e.slashes = e.slashes || t.slashes;
        } else for (var u = Object.keys(t), l = 0; l < u.length; l++) {
            var c = u[l];
            e[c] = t[c];
        } else {
            var d = e.pathname && "/" === e.pathname.charAt(0), p = t.host || t.pathname && "/" === t.pathname.charAt(0), d = p || d || e.host && t.pathname, f = d, m = e.pathname && e.pathname.split("/") || [], h = t.pathname && t.pathname.split("/") || [], g = e.protocol && !Bt[e.protocol];
            if (g && (e.hostname = "", e.port = null, e.host && ("" === m[0] ? m[0] = e.host : m.unshift(e.host)), 
            e.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === h[0] ? h[0] = t.host : h.unshift(t.host)), 
            t.host = null), d = d && ("" === h[0] || "" === m[0])), p) e.host = (t.host || "" === t.host ? t : e).host, 
            e.hostname = (t.hostname || "" === t.hostname ? t : e).hostname, e.search = t.search, 
            e.query = t.query, m = h; else if (h.length) (m = m || []).pop(), m = m.concat(h), 
            e.search = t.search, e.query = t.query; else if (!_t(t.search)) return g && (e.hostname = e.host = m.shift(), 
            x = !!(e.host && 0 < e.host.indexOf("@")) && e.host.split("@")) && (e.auth = x.shift(), 
            e.host = e.hostname = x.shift()), e.search = t.search, e.query = t.query, yt(e.pathname) && yt(e.search) || (e.path = (e.pathname || "") + (e.search || "")), 
            e.href = e.format(), e;
            if (m.length) {
                for (var y = m.slice(-1)[0], p = (e.host || t.host || 1 < m.length) && ("." === y || ".." === y) || "" === y, _ = 0, v = m.length; 0 <= v; v--) "." === (y = m[v]) ? m.splice(v, 1) : ".." === y ? (m.splice(v, 1), 
                _++) : _ && (m.splice(v, 1), _--);
                if (!d && !f) for (;_--; ) m.unshift("..");
                !d || "" === m[0] || m[0] && "/" === m[0].charAt(0) || m.unshift(""), p && "/" !== m.join("/").substr(-1) && m.push("");
                var x, f = "" === m[0] || m[0] && "/" === m[0].charAt(0);
                g && (e.hostname = e.host = !f && m.length ? m.shift() : "", x = !!(e.host && 0 < e.host.indexOf("@")) && e.host.split("@")) && (e.auth = x.shift(), 
                e.host = e.hostname = x.shift()), (d = d || e.host && m.length) && !f && m.unshift(""), 
                m.length ? e.pathname = m.join("/") : (e.pathname = null, e.path = null), yt(e.pathname) && yt(e.search) || (e.path = (e.pathname || "") + (e.search || "")), 
                e.auth = t.auth || e.auth, e.slashes = e.slashes || t.slashes;
            } else e.pathname = null, e.search ? e.path = "/" + e.search : e.path = null;
        }
        return e.href = e.format(), e;
    }, It.prototype.parseHost = function() {
        var t = this.host, e = At.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), 
        t && (this.hostname = t);
    };
    var kt, Xt = {
        parse: e,
        resolve: Et,
        resolveObject: Tt,
        format: wt,
        Url: t
    }, jt = ((i = G.ENV || (G.ENV = {}))[i.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", i[i.WEBGL = 1] = "WEBGL", 
    i[i.WEBGL2 = 2] = "WEBGL2", (e = G.RENDERER_TYPE || (G.RENDERER_TYPE = {}))[e.UNKNOWN = 0] = "UNKNOWN", 
    e[e.WEBGL = 1] = "WEBGL", e[e.CANVAS = 2] = "CANVAS", (t = G.BLEND_MODES || (G.BLEND_MODES = {}))[t.NORMAL = 0] = "NORMAL", 
    t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", 
    t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", 
    t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", 
    t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", 
    t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", 
    t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", 
    t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", 
    t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", 
    t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", 
    t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", 
    t[t.XOR = 29] = "XOR", (i = G.DRAW_MODES || (G.DRAW_MODES = {}))[i.POINTS = 0] = "POINTS", 
    i[i.LINES = 1] = "LINES", i[i.LINE_LOOP = 2] = "LINE_LOOP", i[i.LINE_STRIP = 3] = "LINE_STRIP", 
    i[i.TRIANGLES = 4] = "TRIANGLES", i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", 
    (e = G.FORMATS || (G.FORMATS = {}))[e.RGBA = 6408] = "RGBA", e[e.RGB = 6407] = "RGB", 
    e[e.ALPHA = 6406] = "ALPHA", e[e.LUMINANCE = 6409] = "LUMINANCE", e[e.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", 
    e[e.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", e[e.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", 
    (t = G.TARGETS || (G.TARGETS = {}))[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", 
    t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", 
    t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", 
    t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", 
    t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", (i = G.TYPES || (G.TYPES = {}))[i.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", 
    i[i.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", i[i.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", 
    i[i.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", i[i.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", 
    i[i.FLOAT = 5126] = "FLOAT", i[i.HALF_FLOAT = 36193] = "HALF_FLOAT", (e = G.SCALE_MODES || (G.SCALE_MODES = {}))[e.NEAREST = 0] = "NEAREST", 
    e[e.LINEAR = 1] = "LINEAR", (t = G.WRAP_MODES || (G.WRAP_MODES = {}))[t.CLAMP = 33071] = "CLAMP", 
    t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", 
    (i = G.MIPMAP_MODES || (G.MIPMAP_MODES = {}))[i.OFF = 0] = "OFF", i[i.POW2 = 1] = "POW2", 
    i[i.ON = 2] = "ON", (e = G.ALPHA_MODES || (G.ALPHA_MODES = {}))[e.NPM = 0] = "NPM", 
    e[e.UNPACK = 1] = "UNPACK", e[e.PMA = 2] = "PMA", e[e.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", 
    e[e.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", e[e.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", 
    (t = G.GC_MODES || (G.GC_MODES = {}))[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL", 
    (i = G.PRECISION || (G.PRECISION = {})).LOW = "lowp", i.MEDIUM = "mediump", i.HIGH = "highp", 
    (e = G.MASK_TYPES || (G.MASK_TYPES = {}))[e.NONE = 0] = "NONE", e[e.SCISSOR = 1] = "SCISSOR", 
    e[e.STENCIL = 2] = "STENCIL", e[e.SPRITE = 3] = "SPRITE", E.RETINA_PREFIX = /@([0-9\.]+)x/, 
    !(E.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0));
    function Ht(t) {
        jt || (-1 < navigator.userAgent.toLowerCase().indexOf("chrome") ? window.console.log.apply(console, [ "\n %c %c %c PixiJS 5.2.0 - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;" ]) : window.console && window.console.log("PixiJS 5.2.0 - " + t + " - http://www.pixijs.com/"), 
        jt = !0);
    }
    function Gt() {
        return kt = void 0 === kt ? function() {
            var t, e, i, r, n = {
                stencil: !0,
                failIfMajorPerformanceCaveat: E.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
            };
            try {
                return window.WebGLRenderingContext ? (i = !(!(e = (t = document.createElement("canvas")).getContext("webgl", n) || t.getContext("experimental-webgl", n)) || !e.getContextAttributes().stencil), 
                e && (r = e.getExtension("WEBGL_lose_context")) && r.loseContext(), e = null, i) : !1;
            } catch (t) {
                return !1;
            }
        }() : kt;
    }
    function Yt(t, e) {
        return (e = e || [])[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, 
        e;
    }
    function Vt(t) {
        return t = t.toString(16), "#" + (t = "000000".substr(0, 6 - t.length) + t);
    }
    function zt(t) {
        return "string" == typeof t && "#" === t[0] && (t = t.substr(1)), parseInt(t, 16);
    }
    var Wt = function() {
        for (var t = [], e = [], i = 0; i < 32; i++) e[t[i] = i] = i;
        t[G.BLEND_MODES.NORMAL_NPM] = G.BLEND_MODES.NORMAL, t[G.BLEND_MODES.ADD_NPM] = G.BLEND_MODES.ADD, 
        t[G.BLEND_MODES.SCREEN_NPM] = G.BLEND_MODES.SCREEN, e[G.BLEND_MODES.NORMAL] = G.BLEND_MODES.NORMAL_NPM, 
        e[G.BLEND_MODES.ADD] = G.BLEND_MODES.ADD_NPM, e[G.BLEND_MODES.SCREEN] = G.BLEND_MODES.SCREEN_NPM;
        var r = [];
        return r.push(e), r.push(t), r;
    }();
    function qt(t, e) {
        return Wt[e ? 1 : 0][t];
    }
    function Kt(t, e, i, r) {
        return i = i || new Float32Array(4), r || void 0 === r ? (i[0] = t[0] * e, i[1] = t[1] * e, 
        i[2] = t[2] * e) : (i[0] = t[0], i[1] = t[1], i[2] = t[2]), i[3] = e, i;
    }
    function Zt(t, e) {
        return 1 === e ? (255 * e << 24) + t : 0 === e ? 0 : (255 * e << 24) + (((t >> 16 & 255) * e + .5 | 0) << 16) + (((t >> 8 & 255) * e + .5 | 0) << 8) + ((255 & t) * e + .5 | 0);
    }
    function Jt(t, e, i, r) {
        return (i = i || new Float32Array(4))[0] = (t >> 16 & 255) / 255, i[1] = (t >> 8 & 255) / 255, 
        i[2] = (255 & t) / 255, !r && void 0 !== r || (i[0] *= e, i[1] *= e, i[2] *= e), 
        i[3] = e, i;
    }
    function Qt(t, e) {
        var i = 6 * t;
        if ((e = (e = void 0 === e ? null : e) || new Uint16Array(i)).length !== i) throw new Error("Out buffer length is incorrect, got " + e.length + " and expected " + i);
        for (var r = 0, n = 0; r < i; r += 6, n += 4) e[r + 0] = n + 0, e[r + 1] = n + 1, 
        e[r + 2] = n + 2, e[r + 3] = n + 0, e[r + 4] = n + 2, e[r + 5] = n + 3;
        return e;
    }
    function $t(t, e, i) {
        var r = t.length;
        if (!(r <= e || 0 === i)) {
            for (var n = r - (i = r < e + i ? r - e : i), s = e; s < n; ++s) t[s] = t[s + i];
            t.length = n;
        }
    }
    var te = 0;
    function ee() {
        return ++te;
    }
    function ie(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1;
    }
    function re(t) {
        return t += 0 === t, --t, (t = (t = (t = (t = (t |= t >>> 1) | t >>> 2) | t >>> 4) | t >>> 8) | t >>> 16) + 1;
    }
    function ne(t) {
        return !(t & t - 1 || !t);
    }
    function se(t) {
        var e = (65535 < t) << 4, i = (255 < (t >>>= e)) << 3;
        return (e |= i) | (i = (15 < (t >>>= i)) << 2) | (i = (3 < (t >>>= i)) << 1) | (t >>>= i) >> 1;
    }
    var oe = {}, ae = Object.create(null), he = Object.create(null);
    function ue(t) {
        for (var e, i, r = t.width, n = t.height, t = t.getContext("2d"), s = t.getImageData(0, 0, r, n).data, o = s.length, a = {
            top: null,
            left: null,
            right: null,
            bottom: null
        }, h = null, u = 0; u < o; u += 4) 0 !== s[u + 3] && (e = u / 4 % r, i = ~~(u / 4 / r), 
        null === a.top && (a.top = i), (null === a.left || e < a.left) && (a.left = e), 
        (null === a.right || a.right < e) && (a.right = 1 + e), null === a.bottom || a.bottom < i) && (a.bottom = i);
        return null !== a.top && (h = t.getImageData(a.left, a.top, r = a.right - a.left, n = a.bottom - a.top + 1)), 
        {
            height: n,
            width: r,
            data: h
        };
    }
    function le(t, e, i) {
        this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), 
        this.resolution = i || E.RESOLUTION, this.resize(t, e);
    }
    var ce, t = {
        width: {
            configurable: !0
        },
        height: {
            configurable: !0
        }
    }, de = (le.prototype.clear = function() {
        this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }, le.prototype.resize = function(t, e) {
        this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution;
    }, le.prototype.destroy = function() {
        this.context = null, this.canvas = null;
    }, t.width.get = function() {
        return this.canvas.width;
    }, t.width.set = function(t) {
        this.canvas.width = t;
    }, t.height.get = function() {
        return this.canvas.height;
    }, t.height.set = function(t) {
        this.canvas.height = t;
    }, Object.defineProperties(le.prototype, t), /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i);
    function pe(t, e) {
        if (void 0 === e && (e = window.location), 0 === t.indexOf("data:")) return "";
        e = e || window.location, (ce = ce || document.createElement("a")).href = t;
        var i = !(t = Xt.parse(ce.href)).port && "" === e.port || t.port === e.port;
        return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous";
    }
    function fe(t, e) {
        t = E.RETINA_PREFIX.exec(t);
        return t ? parseFloat(t[1]) : void 0 !== e ? e : 1;
    }
    var me = {};
    function p(t, e, i) {
        var r;
        void 0 === i && (i = 3), me[e] || (void 0 === (r = new Error().stack) ? console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t) : (r = r.split("\n").splice(i).join("\n"), 
        console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e + "\nDeprecated since v" + t), 
        console.warn(r), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t), 
        console.warn(r))), me[e] = !0);
    }
    var i = {
        BaseTextureCache: he,
        CanvasRenderTarget: le,
        DATA_URI: de,
        ProgramCache: oe,
        TextureCache: ae,
        clearTextureCache: function() {
            for (var t in ae) delete ae[t];
            for (t in he) delete he[t];
        },
        correctBlendMode: qt,
        createIndicesForQuads: Qt,
        decomposeDataUri: function(t) {
            if (t = de.exec(t)) return {
                mediaType: t[1] ? t[1].toLowerCase() : void 0,
                subType: t[2] ? t[2].toLowerCase() : void 0,
                charset: t[3] ? t[3].toLowerCase() : void 0,
                encoding: t[4] ? t[4].toLowerCase() : void 0,
                data: t[5]
            };
        },
        deprecation: p,
        destroyTextureCache: function() {
            for (var t in ae) ae[t].destroy();
            for (t in he) he[t].destroy();
        },
        determineCrossOrigin: pe,
        getResolutionOfUrl: fe,
        hex2rgb: Yt,
        hex2string: Vt,
        isPow2: ne,
        isWebGLSupported: Gt,
        log2: se,
        nextPow2: re,
        premultiplyBlendMode: Wt,
        premultiplyRgba: Kt,
        premultiplyTint: Zt,
        premultiplyTintToRgba: Jt,
        removeItems: $t,
        rgb2hex: function(t) {
            return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0);
        },
        sayHello: Ht,
        sign: ie,
        skipHello: function() {
            jt = !0;
        },
        string2hex: zt,
        trimCanvas: ue,
        uid: ee,
        isMobile: W,
        EventEmitter: q,
        earcut: K,
        url: Xt
    }, ge = (ye.prototype.clone = function() {
        return new ye(this.x, this.y);
    }, ye.prototype.copyFrom = function(t) {
        return this.set(t.x, t.y), this;
    }, ye.prototype.copyTo = function(t) {
        return t.set(this.x, this.y), t;
    }, ye.prototype.equals = function(t) {
        return t.x === this.x && t.y === this.y;
    }, ye.prototype.set = function(t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = t), this.x = t, this.y = e;
    }, ye);
    function ye(t, e) {
        void 0 === e && (e = 0), this.x = t = void 0 === t ? 0 : t, this.y = e;
    }
    ve.prototype.clone = function(t, e) {
        return new ve(t = void 0 === t ? this.cb : t, e = void 0 === e ? this.scope : e, this._x, this._y);
    }, ve.prototype.set = function(t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = t), this._x === t && this._y === e || (this._x = t, 
        this._y = e, this.cb.call(this.scope));
    }, ve.prototype.copyFrom = function(t) {
        return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), 
        this;
    }, ve.prototype.copyTo = function(t) {
        return t.set(this._x, this._y), t;
    }, ve.prototype.equals = function(t) {
        return t.x === this._x && t.y === this._y;
    }, Object.defineProperty(ve.prototype, "x", {
        get: function() {
            return this._x;
        },
        set: function(t) {
            this._x !== t && (this._x = t, this.cb.call(this.scope));
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(ve.prototype, "y", {
        get: function() {
            return this._y;
        },
        set: function(t) {
            this._y !== t && (this._y = t, this.cb.call(this.scope));
        },
        enumerable: !0,
        configurable: !0
    });
    var _e = ve;
    function ve(t, e, i, r) {
        void 0 === r && (r = 0), this._x = i = void 0 === i ? 0 : i, this._y = r, this.cb = t, 
        this.scope = e;
    }
    var xe = 2 * Math.PI, be = 180 / Math.PI, Ee = Math.PI / 180, l = ((e = G.SHAPES || (G.SHAPES = {}))[e.POLY = 0] = "POLY", 
    e[e.RECT = 1] = "RECT", e[e.CIRC = 2] = "CIRC", e[e.ELIP = 3] = "ELIP", e[e.RREC = 4] = "RREC", 
    r.prototype.fromArray = function(t) {
        this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
    }, r.prototype.set = function(t, e, i, r, n, s) {
        return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = s, 
        this;
    }, r.prototype.toArray = function(t, e) {
        this.array || (this.array = new Float32Array(9));
        e = e || this.array;
        return t ? (e[0] = this.a, e[1] = this.b, e[2] = 0, e[3] = this.c, e[4] = this.d, 
        e[5] = 0, e[6] = this.tx, e[7] = this.ty) : (e[0] = this.a, e[1] = this.c, e[2] = this.tx, 
        e[3] = this.b, e[4] = this.d, e[5] = this.ty, e[6] = 0, e[7] = 0), e[8] = 1, e;
    }, r.prototype.apply = function(t, e) {
        e = e || new ge();
        var i = t.x, t = t.y;
        return e.x = this.a * i + this.c * t + this.tx, e.y = this.b * i + this.d * t + this.ty, 
        e;
    }, r.prototype.applyInverse = function(t, e) {
        e = e || new ge();
        var i = 1 / (this.a * this.d + this.c * -this.b), r = t.x, t = t.y;
        return e.x = this.d * i * r + -this.c * i * t + (this.ty * this.c - this.tx * this.d) * i, 
        e.y = this.a * i * t + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, 
        e;
    }, r.prototype.translate = function(t, e) {
        return this.tx += t, this.ty += e, this;
    }, r.prototype.scale = function(t, e) {
        return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, 
        this;
    }, r.prototype.rotate = function(t) {
        var e = Math.cos(t), t = Math.sin(t), i = this.a, r = this.c, n = this.tx;
        return this.a = i * e - this.b * t, this.b = i * t + this.b * e, this.c = r * e - this.d * t, 
        this.d = r * t + this.d * e, this.tx = n * e - this.ty * t, this.ty = n * t + this.ty * e, 
        this;
    }, r.prototype.append = function(t) {
        var e = this.a, i = this.b, r = this.c, n = this.d;
        return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, 
        this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, 
        this;
    }, r.prototype.setTransform = function(t, e, i, r, n, s, o, a, h) {
        return this.a = Math.cos(o + h) * n, this.b = Math.sin(o + h) * n, this.c = -Math.sin(o - a) * s, 
        this.d = Math.cos(o - a) * s, this.tx = t - (i * this.a + r * this.c), this.ty = e - (i * this.b + r * this.d), 
        this;
    }, r.prototype.prepend = function(t) {
        var e, i, r = this.tx;
        return 1 === t.a && 0 === t.b && 0 === t.c && 1 === t.d || (e = this.a, i = this.c, 
        this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, 
        this.d = i * t.b + this.d * t.d), this.tx = r * t.a + this.ty * t.c + t.tx, this.ty = r * t.b + this.ty * t.d + t.ty, 
        this;
    }, r.prototype.decompose = function(t) {
        var e = this.a, i = this.b, r = this.c, n = this.d, s = -Math.atan2(-r, n), o = Math.atan2(i, e), a = Math.abs(s + o);
        return a < 1e-5 || Math.abs(xe - a) < 1e-5 ? (t.rotation = o, t.skew.x = t.skew.y = 0) : (t.rotation = 0, 
        t.skew.x = s, t.skew.y = o), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + n * n), 
        t.position.x = this.tx, t.position.y = this.ty, t;
    }, r.prototype.invert = function() {
        var t = this.a, e = this.b, i = this.c, r = this.d, n = this.tx, s = t * r - e * i;
        return this.a = r / s, this.b = -e / s, this.c = -i / s, this.d = t / s, this.tx = (i * this.ty - r * n) / s, 
        this.ty = -(t * this.ty - e * n) / s, this;
    }, r.prototype.identity = function() {
        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, 
        this;
    }, r.prototype.clone = function() {
        var t = new r();
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
        t;
    }, r.prototype.copyTo = function(t) {
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
        t;
    }, r.prototype.copyFrom = function(t) {
        return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, 
        this;
    }, Object.defineProperty(r, "IDENTITY", {
        get: function() {
            return new r();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(r, "TEMP_MATRIX", {
        get: function() {
            return new r();
        },
        enumerable: !0,
        configurable: !0
    }), r);
    function r(t, e, i, r, n, s) {
        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), 
        void 0 === n && (n = 0), void 0 === s && (s = 0), this.array = null, this.a = t, 
        this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = s;
    }
    var Te = [ 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1 ], we = [ 0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1 ], Se = [ 0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1 ], Ie = [ 1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1 ], Pe = [], Ae = [], Oe = Math.sign;
    for (var De = 0; De < 16; De++) {
        var Me = [];
        Pe.push(Me);
        for (var Ce = 0; Ce < 16; Ce++) for (var Re = Oe(Te[De] * Te[Ce] + Se[De] * we[Ce]), Le = Oe(we[De] * Te[Ce] + Ie[De] * we[Ce]), Ne = Oe(Te[De] * Se[Ce] + Se[De] * Ie[Ce]), Fe = Oe(we[De] * Se[Ce] + Ie[De] * Ie[Ce]), Be = 0; Be < 16; Be++) if (Te[Be] === Re && we[Be] === Le && Se[Be] === Ne && Ie[Be] === Fe) {
            Me.push(Be);
            break;
        }
    }
    for (De = 0; De < 16; De++) {
        var Ue = new l();
        Ue.set(Te[De], we[De], Se[De], Ie[De], 0, 0), Ae.push(Ue);
    }
    var h = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MAIN_DIAGONAL: 10,
        MIRROR_HORIZONTAL: 12,
        REVERSE_DIAGONAL: 14,
        uX: function(t) {
            return Te[t];
        },
        uY: function(t) {
            return we[t];
        },
        vX: function(t) {
            return Se[t];
        },
        vY: function(t) {
            return Ie[t];
        },
        inv: function(t) {
            return 8 & t ? 15 & t : 7 & -t;
        },
        add: function(t, e) {
            return Pe[t][e];
        },
        sub: function(t, e) {
            return Pe[t][h.inv(e)];
        },
        rotate180: function(t) {
            return 4 ^ t;
        },
        isVertical: function(t) {
            return 2 == (3 & t);
        },
        byDirection: function(t, e) {
            return 2 * Math.abs(t) <= Math.abs(e) ? 0 <= e ? h.S : h.N : 2 * Math.abs(e) <= Math.abs(t) ? 0 < t ? h.E : h.W : 0 < e ? 0 < t ? h.SE : h.SW : 0 < t ? h.NE : h.NW;
        },
        matrixAppendRotationInv: function(t, e, i, r) {
            void 0 === i && (i = 0), void 0 === r && (r = 0);
            e = Ae[h.inv(e)];
            e.tx = i, e.ty = r, t.append(e);
        }
    }, ke = (Xe.prototype.onChange = function() {
        this._localID++;
    }, Xe.prototype.updateSkew = function() {
        this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), 
        this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), 
        this._localID++;
    }, Xe.prototype.updateLocalTransform = function() {
        var t = this.localTransform;
        this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, 
        t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), 
        t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, 
        this._parentID = -1);
    }, Xe.prototype.updateTransform = function(t) {
        var e, i, r = this.localTransform;
        this._localID !== this._currentLocalID && (r.a = this._cx * this.scale.x, r.b = this._sx * this.scale.x, 
        r.c = this._cy * this.scale.y, r.d = this._sy * this.scale.y, r.tx = this.position.x - (this.pivot.x * r.a + this.pivot.y * r.c), 
        r.ty = this.position.y - (this.pivot.x * r.b + this.pivot.y * r.d), this._currentLocalID = this._localID, 
        this._parentID = -1), this._parentID !== t._worldID && (e = t.worldTransform, (i = this.worldTransform).a = r.a * e.a + r.b * e.c, 
        i.b = r.a * e.b + r.b * e.d, i.c = r.c * e.a + r.d * e.c, i.d = r.c * e.b + r.d * e.d, 
        i.tx = r.tx * e.a + r.ty * e.c + e.tx, i.ty = r.tx * e.b + r.ty * e.d + e.ty, this._parentID = t._worldID, 
        this._worldID++);
    }, Xe.prototype.setFromMatrix = function(t) {
        t.decompose(this), this._localID++;
    }, Object.defineProperty(Xe.prototype, "rotation", {
        get: function() {
            return this._rotation;
        },
        set: function(t) {
            this._rotation !== t && (this._rotation = t, this.updateSkew());
        },
        enumerable: !0,
        configurable: !0
    }), Xe.IDENTITY = new Xe(), Xe);
    function Xe() {
        this.worldTransform = new l(), this.localTransform = new l(), this.position = new _e(this.onChange, this, 0, 0), 
        this.scale = new _e(this.onChange, this, 1, 1), this.pivot = new _e(this.onChange, this, 0, 0), 
        this.skew = new _e(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, 
        this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, 
        this._worldID = 0, this._parentID = 0;
    }
    Object.defineProperty(je.prototype, "left", {
        get: function() {
            return this.x;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(je.prototype, "right", {
        get: function() {
            return this.x + this.width;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(je.prototype, "top", {
        get: function() {
            return this.y;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(je.prototype, "bottom", {
        get: function() {
            return this.y + this.height;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(je, "EMPTY", {
        get: function() {
            return new je(0, 0, 0, 0);
        },
        enumerable: !0,
        configurable: !0
    }), je.prototype.clone = function() {
        return new je(this.x, this.y, this.width, this.height);
    }, je.prototype.copyFrom = function(t) {
        return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, 
        this;
    }, je.prototype.copyTo = function(t) {
        return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, 
        t;
    }, je.prototype.contains = function(t, e) {
        return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
    }, je.prototype.pad = function(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = t), this.x -= t, this.y -= e, 
        this.width += 2 * t, this.height += 2 * e, this;
    }, je.prototype.fit = function(t) {
        var e = Math.max(this.x, t.x), i = Math.min(this.x + this.width, t.x + t.width), r = Math.max(this.y, t.y), t = Math.min(this.y + this.height, t.y + t.height);
        return this.x = e, this.width = Math.max(i - e, 0), this.y = r, this.height = Math.max(t - r, 0), 
        this;
    }, je.prototype.ceil = function(t, e) {
        void 0 === t && (t = 1), void 0 === e && (e = .001);
        var i = Math.ceil((this.x + this.width - e) * t) / t, r = Math.ceil((this.y + this.height - e) * t) / t;
        return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, 
        this.width = i - this.x, this.height = r - this.y, this;
    }, je.prototype.enlarge = function(t) {
        var e = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), r = Math.min(this.y, t.y), t = Math.max(this.y + this.height, t.y + t.height);
        return this.x = e, this.width = i - e, this.y = r, this.height = t - r, this;
    };
    var T = je;
    function je(t, e, i, r) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), 
        this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(r), 
        this.type = G.SHAPES.RECT;
    }
    Ge.prototype.clone = function() {
        return new Ge(this.x, this.y, this.radius);
    }, Ge.prototype.contains = function(t, e) {
        var i;
        return !(this.radius <= 0) && (i = this.radius * this.radius, t = this.x - t, e = this.y - e, 
        (t *= t) + (e *= e) <= i);
    }, Ge.prototype.getBounds = function() {
        return new T(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius);
    };
    var He = Ge;
    function Ge(t, e, i) {
        void 0 === e && (e = 0), void 0 === i && (i = 0), this.x = t = void 0 === t ? 0 : t, 
        this.y = e, this.radius = i, this.type = G.SHAPES.CIRC;
    }
    Ve.prototype.clone = function() {
        return new Ve(this.x, this.y, this.width, this.height);
    }, Ve.prototype.contains = function(t, e) {
        return !(this.width <= 0 || this.height <= 0) && (t = (t - this.x) / this.width, 
        e = (e - this.y) / this.height, (t *= t) + (e *= e) <= 1);
    }, Ve.prototype.getBounds = function() {
        return new T(this.x - this.width, this.y - this.height, this.width, this.height);
    };
    var Ye = Ve;
    function Ve(t, e, i, r) {
        void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), this.x = t = void 0 === t ? 0 : t, 
        this.y = e, this.width = i, this.height = r, this.type = G.SHAPES.ELIP;
    }
    We.prototype.clone = function() {
        var t = new We(this.points.slice());
        return t.closeStroke = this.closeStroke, t;
    }, We.prototype.contains = function(t, e) {
        for (var i = !1, r = this.points.length / 2, n = 0, s = r - 1; n < r; s = n++) {
            var o = this.points[2 * n], a = this.points[2 * n + 1], h = this.points[2 * s], u = this.points[2 * s + 1];
            e < a != e < u && t < (e - a) / (u - a) * (h - o) + o && (i = !i);
        }
        return i;
    };
    var ze = We;
    function We() {
        for (var t = arguments, e = [], i = 0; i < arguments.length; i++) e[i] = t[i];
        if ((e = Array.isArray(e[0]) ? e[0] : e)[0] instanceof ge) {
            for (var r = [], n = 0, s = e.length; n < s; n++) r.push(e[n].x, e[n].y);
            e = r;
        }
        this.points = e, this.type = G.SHAPES.POLY, this.closeStroke = !0;
    }
    Ke.prototype.clone = function() {
        return new Ke(this.x, this.y, this.width, this.height, this.radius);
    }, Ke.prototype.contains = function(t, e) {
        if (!(this.width <= 0 || this.height <= 0) && t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
            if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
            var i = t - (this.x + this.radius), r = e - (this.y + this.radius), n = this.radius * this.radius;
            if (i * i + r * r <= n) return !0;
            if ((i = t - (this.x + this.width - this.radius)) * i + r * r <= n) return !0;
            if (i * i + (r = e - (this.y + this.height - this.radius)) * r <= n) return !0;
            if ((i = t - (this.x + this.radius)) * i + r * r <= n) return !0;
        }
        return !1;
    };
    var qe = Ke;
    function Ke(t, e, i, r, n) {
        void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === n && (n = 20), 
        this.x = t = void 0 === t ? 0 : t, this.y = e, this.width = i, this.height = r, 
        this.radius = n, this.type = G.SHAPES.RREC;
    }
    E.SORTABLE_CHILDREN = !1;
    function n() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null;
    }
    n.prototype.isEmpty = function() {
        return this.minX > this.maxX || this.minY > this.maxY;
    }, n.prototype.clear = function() {
        this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
    }, n.prototype.getRectangle = function(t) {
        return this.minX > this.maxX || this.minY > this.maxY ? T.EMPTY : ((t = t || new T(0, 0, 1, 1)).x = this.minX, 
        t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, 
        t);
    }, n.prototype.addPoint = function(t) {
        this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), 
        this.maxY = Math.max(this.maxY, t.y);
    }, n.prototype.addQuad = function(t) {
        var e = this.minX, i = this.minY, r = this.maxX, n = this.maxY, s = t[0], o = t[1], e = s < e ? s : e, i = o < i ? o : i, r = r < s ? s : r, n = n < o ? o : n;
        e = (s = t[2]) < e ? s : e, i = (o = t[3]) < i ? o : i, r = r < s ? s : r, n = n < o ? o : n, 
        e = (s = t[4]) < e ? s : e, i = (o = t[5]) < i ? o : i, r = r < s ? s : r, n = n < o ? o : n, 
        s = t[6], i = (o = t[7]) < i ? o : i, r = r < s ? s : r, n = n < o ? o : n, this.minX = s < e ? s : e, 
        this.minY = i, this.maxX = r, this.maxY = n;
    }, n.prototype.addFrame = function(t, e, i, r, n) {
        this.addFrameMatrix(t.worldTransform, e, i, r, n);
    }, n.prototype.addFrameMatrix = function(t, e, i, r, n) {
        var s = t.a, o = t.b, a = t.c, h = t.d, u = t.tx, t = t.ty, l = s * e + a * i + u, c = o * e + h * i + t, d = l < (d = this.minX) ? l : d, p = c < (p = this.minY) ? c : p, f = (f = this.maxX) < l ? l : f, m = (m = this.maxY) < c ? c : m;
        d = (l = s * r + a * i + u) < d ? l : d, p = (c = o * r + h * i + t) < p ? c : p, 
        f = f < l ? l : f, m = m < c ? c : m, d = (l = s * e + a * n + u) < d ? l : d, p = (c = o * e + h * n + t) < p ? c : p, 
        m = m < c ? c : m, p = (c = o * r + h * n + t) < p ? c : p, f = (f = f < l ? l : f) < (l = s * r + a * n + u) ? l : f, 
        m = m < c ? c : m, this.minX = l < d ? l : d, this.minY = p, this.maxX = f, this.maxY = m;
    }, n.prototype.addVertexData = function(t, e, i) {
        for (var r = this.minX, n = this.minY, s = this.maxX, o = this.maxY, a = e; a < i; a += 2) var h = t[a], u = t[a + 1], r = h < r ? h : r, n = u < n ? u : n, s = s < h ? h : s, o = o < u ? u : o;
        this.minX = r, this.minY = n, this.maxX = s, this.maxY = o;
    }, n.prototype.addVertices = function(t, e, i, r) {
        this.addVerticesMatrix(t.worldTransform, e, i, r);
    }, n.prototype.addVerticesMatrix = function(t, e, i, r, n, s) {
        for (var o = t.a, a = t.b, h = t.c, u = t.d, l = t.tx, c = t.ty, d = (n = n || 0, 
        s = s || 0, this.minX), p = this.minY, f = this.maxX, m = this.maxY, g = i; g < r; g += 2) var y = e[g], _ = e[g + 1], v = o * y + h * _ + l, _ = u * _ + a * y + c, d = Math.min(d, v - n), f = Math.max(f, v + n), p = Math.min(p, _ - s), m = Math.max(m, _ + s);
        this.minX = d, this.minY = p, this.maxX = f, this.maxY = m;
    }, n.prototype.addBounds = function(t) {
        var e = this.minX, i = this.minY, r = this.maxX, n = this.maxY;
        this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, 
        this.maxY = t.maxY > n ? t.maxY : n;
    }, n.prototype.addBoundsMask = function(t, e) {
        var i, r, n, s = (t.minX > e.minX ? t : e).minX, o = (t.minY > e.minY ? t : e).minY, a = (t.maxX < e.maxX ? t : e).maxX, t = (t.maxY < e.maxY ? t : e).maxY;
        s <= a && o <= t && (e = this.minX, i = this.minY, r = this.maxX, n = this.maxY, 
        this.minX = s < e ? s : e, this.minY = o < i ? o : i, this.maxX = r < a ? a : r, 
        this.maxY = n < t ? t : n);
    }, n.prototype.addBoundsMatrix = function(t, e) {
        this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
    }, n.prototype.addBoundsArea = function(t, e) {
        var i, r, n, s = t.minX > e.x ? t.minX : e.x, o = t.minY > e.y ? t.minY : e.y, a = t.maxX < e.x + e.width ? t.maxX : e.x + e.width, t = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
        s <= a && o <= t && (e = this.minX, i = this.minY, r = this.maxX, n = this.maxY, 
        this.minX = s < e ? s : e, this.minY = o < i ? o : i, this.maxX = r < a ? a : r, 
        this.maxY = n < t ? t : n);
    }, n.prototype.pad = function(t, e) {
        t = t || 0, e = e || (0 !== e ? t : 0), this.isEmpty() || (this.minX -= t, this.maxX += t, 
        this.minY -= e, this.maxY += e);
    }, n.prototype.addFramePad = function(t, e, i, r, n, s) {
        e -= s, i += n, r += s, this.minX = this.minX < (t -= n) ? this.minX : t, this.maxX = this.maxX > i ? this.maxX : i, 
        this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > r ? this.maxY : r;
    }, (Ze = q) && (Je.__proto__ = Ze), t = {
        _tempDisplayObjectParent: {
            configurable: !0
        },
        x: {
            configurable: !0
        },
        y: {
            configurable: !0
        },
        worldTransform: {
            configurable: !0
        },
        localTransform: {
            configurable: !0
        },
        position: {
            configurable: !0
        },
        scale: {
            configurable: !0
        },
        pivot: {
            configurable: !0
        },
        skew: {
            configurable: !0
        },
        rotation: {
            configurable: !0
        },
        angle: {
            configurable: !0
        },
        zIndex: {
            configurable: !0
        },
        worldVisible: {
            configurable: !0
        },
        mask: {
            configurable: !0
        }
    }, ((Je.prototype = Object.create(Ze && Ze.prototype)).constructor = Je).mixin = function(t) {
        for (var e = Object.keys(t), i = 0; i < e.length; ++i) {
            var r = e[i];
            Object.defineProperty(Je.prototype, r, Object.getOwnPropertyDescriptor(t, r));
        }
    }, t._tempDisplayObjectParent.get = function() {
        return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new Je()), 
        this.tempDisplayObjectParent;
    }, Je.prototype.updateTransform = function() {
        this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, 
        this._bounds.updateID++;
    }, Je.prototype._recursivePostUpdateTransform = function() {
        this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
    }, Je.prototype.getBounds = function(t, e) {
        return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, 
        this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && (this.calculateBounds(), 
        this._lastBoundsID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new T()), 
        e = this._boundsRect), this._bounds.getRectangle(e);
    }, Je.prototype.getLocalBounds = function(t) {
        var e = this.transform, i = this.parent, t = (this.parent = null, this.transform = this._tempDisplayObjectParent.transform, 
        t || (this._localBoundsRect || (this._localBoundsRect = new T()), t = this._localBoundsRect), 
        this.getBounds(!1, t));
        return this.parent = i, this.transform = e, t;
    }, Je.prototype.toGlobal = function(t, e, i) {
        return (i = void 0 === i ? !1 : i) || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, 
        this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e);
    }, Je.prototype.toLocal = function(t, e, i, r) {
        return e && (t = e.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), 
        this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, 
        this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i);
    }, Je.prototype.render = function(t) {}, Je.prototype.setParent = function(t) {
        if (t && t.addChild) return t.addChild(this), t;
        throw new Error("setParent: Argument must be a Container");
    }, Je.prototype.setTransform = function(t, e, i, r, n, s, o, a, h) {
        return void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === r && (r = 1), 
        void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === o && (o = 0), void 0 === a && (a = 0), 
        void 0 === h && (h = 0), this.position.x = t = void 0 === t ? 0 : t, this.position.y = e, 
        this.scale.x = i || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = s, 
        this.skew.y = o, this.pivot.x = a, this.pivot.y = h, this;
    }, Je.prototype.destroy = function() {
        this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, 
        this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, 
        this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, 
        this.interactiveChildren = !1, this._destroyed = !0;
    }, t.x.get = function() {
        return this.position.x;
    }, t.x.set = function(t) {
        this.transform.position.x = t;
    }, t.y.get = function() {
        return this.position.y;
    }, t.y.set = function(t) {
        this.transform.position.y = t;
    }, t.worldTransform.get = function() {
        return this.transform.worldTransform;
    }, t.localTransform.get = function() {
        return this.transform.localTransform;
    }, t.position.get = function() {
        return this.transform.position;
    }, t.position.set = function(t) {
        this.transform.position.copyFrom(t);
    }, t.scale.get = function() {
        return this.transform.scale;
    }, t.scale.set = function(t) {
        this.transform.scale.copyFrom(t);
    }, t.pivot.get = function() {
        return this.transform.pivot;
    }, t.pivot.set = function(t) {
        this.transform.pivot.copyFrom(t);
    }, t.skew.get = function() {
        return this.transform.skew;
    }, t.skew.set = function(t) {
        this.transform.skew.copyFrom(t);
    }, t.rotation.get = function() {
        return this.transform.rotation;
    }, t.rotation.set = function(t) {
        this.transform.rotation = t;
    }, t.angle.get = function() {
        return this.transform.rotation * be;
    }, t.angle.set = function(t) {
        this.transform.rotation = t * Ee;
    }, t.zIndex.get = function() {
        return this._zIndex;
    }, t.zIndex.set = function(t) {
        this._zIndex = t, this.parent && (this.parent.sortDirty = !0);
    }, t.worldVisible.get = function() {
        var t = this;
        do {
            if (!t.visible) return !1;
        } while (t = t.parent);
        return !0;
    }, t.mask.get = function() {
        return this._mask;
    }, t.mask.set = function(t) {
        var e;
        this._mask && ((e = this._mask.maskObject || this._mask).renderable = !0, e.isMask = !1), 
        this._mask = t, this._mask && ((e = this._mask.maskObject || this._mask).renderable = !1, 
        e.isMask = !0);
    }, Object.defineProperties(Je.prototype, t);
    var Ze, e = Je;
    function Je() {
        Ze.call(this), this.tempDisplayObjectParent = null, this.transform = new ke(), this.alpha = 1, 
        this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, 
        this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, 
        this._enabledFilters = null, this._bounds = new n(), this._boundsID = 0, this._lastBoundsID = -1, 
        this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._destroyed = !1, 
        this.isSprite = !1, this.isMask = !1;
    }
    function Qe(t, e) {
        return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex;
    }
    e.prototype.displayObjectUpdateTransform = e.prototype.updateTransform;
    ($e = e) && (s.__proto__ = $e), t = {
        width: {
            configurable: !0
        },
        height: {
            configurable: !0
        }
    }, ((s.prototype = Object.create($e && $e.prototype)).constructor = s).prototype.onChildrenChange = function() {}, 
    s.prototype.addChild = function(t) {
        var e = arguments, i = arguments.length;
        if (1 < i) for (var r = 0; r < i; r++) this.addChild(e[r]); else t.parent && t.parent.removeChild(t), 
        (t.parent = this).sortDirty = !0, t.transform._parentID = -1, this.children.push(t), 
        this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", t, this, this.children.length - 1), 
        t.emit("added", this);
        return t;
    }, s.prototype.addChildAt = function(t, e) {
        if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
        return t.parent && t.parent.removeChild(t), (t.parent = this).sortDirty = !0, t.transform._parentID = -1, 
        this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), 
        this.emit("childAdded", t, this, e), t;
    }, s.prototype.swapChildren = function(t, e) {
        var i, r;
        t !== e && (i = this.getChildIndex(t), r = this.getChildIndex(e), this.children[i] = e, 
        this.children[r] = t, this.onChildrenChange(i < r ? i : r));
    }, s.prototype.getChildIndex = function(t) {
        t = this.children.indexOf(t);
        if (-1 === t) throw new Error("The supplied DisplayObject must be a child of the caller");
        return t;
    }, s.prototype.setChildIndex = function(t, e) {
        if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
        var i = this.getChildIndex(t);
        $t(this.children, i, 1), this.children.splice(e, 0, t), this.onChildrenChange(e);
    }, s.prototype.getChildAt = function(t) {
        if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
        return this.children[t];
    }, s.prototype.removeChild = function(t) {
        var e = arguments, i = arguments.length;
        if (1 < i) for (var r = 0; r < i; r++) this.removeChild(e[r]); else {
            var n = this.children.indexOf(t);
            if (-1 === n) return null;
            t.parent = null, t.transform._parentID = -1, $t(this.children, n, 1), this._boundsID++, 
            this.onChildrenChange(n), t.emit("removed", this), this.emit("childRemoved", t, this, n);
        }
        return t;
    }, s.prototype.removeChildAt = function(t) {
        var e = this.getChildAt(t);
        return e.parent = null, e.transform._parentID = -1, $t(this.children, t, 1), this._boundsID++, 
        this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), 
        e;
    }, s.prototype.removeChildren = function(t, e) {
        var i = t = void 0 === t ? 0 : t, e = "number" == typeof e ? e : this.children.length, r = e - i;
        if (0 < r && r <= e) {
            for (var n = this.children.splice(i, r), s = 0; s < n.length; ++s) n[s].parent = null, 
            n[s].transform && (n[s].transform._parentID = -1);
            this._boundsID++, this.onChildrenChange(t);
            for (var o = 0; o < n.length; ++o) n[o].emit("removed", this), this.emit("childRemoved", n[o], this, o);
            return n;
        }
        if (0 == r && 0 === this.children.length) return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
    }, s.prototype.sortChildren = function() {
        for (var t = !1, e = 0, i = this.children.length; e < i; ++e) {
            var r = this.children[e];
            r._lastSortedIndex = e, t || 0 === r.zIndex || (t = !0);
        }
        t && 1 < this.children.length && this.children.sort(Qe), this.sortDirty = !1;
    }, s.prototype.updateTransform = function() {
        this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, 
        this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
        for (var t = 0, e = this.children.length; t < e; ++t) {
            var i = this.children[t];
            i.visible && i.updateTransform();
        }
    }, s.prototype.calculateBounds = function() {
        this._bounds.clear(), this._calculateBounds();
        for (var t = 0; t < this.children.length; t++) {
            var e, i = this.children[t];
            i.visible && i.renderable && (i.calculateBounds(), i._mask ? ((e = i._mask.maskObject || i._mask).calculateBounds(), 
            this._bounds.addBoundsMask(i._bounds, e._bounds)) : i.filterArea ? this._bounds.addBoundsArea(i._bounds, i.filterArea) : this._bounds.addBounds(i._bounds));
        }
        this._lastBoundsID = this._boundsID;
    }, s.prototype._calculateBounds = function() {}, s.prototype.render = function(t) {
        if (this.visible && !(this.worldAlpha <= 0) && this.renderable) if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t); else {
            this._render(t);
            for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].render(t);
        }
    }, s.prototype.renderAdvanced = function(t) {
        t.batch.flush();
        var e = this.filters, i = this._mask;
        if (e) {
            this._enabledFilters || (this._enabledFilters = []);
            for (var r = this._enabledFilters.length = 0; r < e.length; r++) e[r].enabled && this._enabledFilters.push(e[r]);
            this._enabledFilters.length && t.filter.push(this, this._enabledFilters);
        }
        i && t.mask.push(this, this._mask), this._render(t);
        for (var n = 0, s = this.children.length; n < s; n++) this.children[n].render(t);
        t.batch.flush(), i && t.mask.pop(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filter.pop();
    }, s.prototype._render = function(t) {}, s.prototype.destroy = function(t) {
        $e.prototype.destroy.call(this), this.sortDirty = !1;
        var e = "boolean" == typeof t ? t : t && t.children, i = this.removeChildren(0, this.children.length);
        if (e) for (var r = 0; r < i.length; ++r) i[r].destroy(t);
    }, t.width.get = function() {
        return this.scale.x * this.getLocalBounds().width;
    }, t.width.set = function(t) {
        var e = this.getLocalBounds().width;
        this.scale.x = 0 !== e ? t / e : 1, this._width = t;
    }, t.height.get = function() {
        return this.scale.y * this.getLocalBounds().height;
    }, t.height.set = function(t) {
        var e = this.getLocalBounds().height;
        this.scale.y = 0 !== e ? t / e : 1, this._height = t;
    }, Object.defineProperties(s.prototype, t);
    var $e, ti = s;
    function s() {
        $e.call(this), this.children = [], this.sortableChildren = E.SORTABLE_CHILDREN, 
        this.sortDirty = !1;
    }
    ti.prototype.containerUpdateTransform = ti.prototype.updateTransform;
    function ei(t) {
        this._hookDiv = null, (W.tablet || W.phone) && this.createTouchHook();
        var e = document.createElement("div");
        e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", 
        e.style.top = "0px", e.style.left = "0px", e.style.zIndex = 2, this.div = e, this.pool = [], 
        this.renderId = 0, this.debug = !1, this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), 
        this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessibility = !1, 
        window.addEventListener("keydown", this._onKeyDown, !1);
    }
    var t = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: !1,
        accessibleType: "button",
        accessiblePointerEvents: "auto",
        accessibleChildren: !0
    }, t = (e.mixin(t), ei.prototype.createTouchHook = function() {
        var t = this, e = document.createElement("button");
        e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", 
        e.style.left = "-1000px", e.style.zIndex = 2, e.style.backgroundColor = "#FF0000", 
        e.title = "HOOK DIV", e.addEventListener("focus", function() {
            t.isMobileAccessibility = !0, t.activate(), t.destroyTouchHook();
        }), document.body.appendChild(e), this._hookDiv = e;
    }, ei.prototype.destroyTouchHook = function() {
        this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
    }, ei.prototype.activate = function() {
        this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), 
        window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), 
        this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div));
    }, ei.prototype.deactivate = function() {
        this.isActive && !this.isMobileAccessibility && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove, !0), 
        window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), 
        this.div.parentNode) && this.div.parentNode.removeChild(this.div);
    }, ei.prototype.updateAccessibleObjects = function(t) {
        if (t.visible && t.accessibleChildren) {
            t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
            for (var e = t.children, i = 0; i < e.length; i++) this.updateAccessibleObjects(e[i]);
        }
    }, ei.prototype.update = function() {
        if (this.renderer.renderingToScreen) {
            this.updateAccessibleObjects(this.renderer._lastObjectRendered);
            var t = this.renderer.view.getBoundingClientRect(), e = t.width / this.renderer.width, i = t.height / this.renderer.height;
            (n = this.div).style.left = t.left + "px", n.style.top = t.top + "px", n.style.width = this.renderer.width + "px", 
            n.style.height = this.renderer.height + "px";
            for (var r = 0; r < this.children.length; r++) {
                var n, s, o, a = this.children[r];
                a.renderId !== this.renderId ? (a._accessibleActive = !1, $t(this.children, r, 1), 
                this.div.removeChild(a._accessibleDiv), this.pool.push(a._accessibleDiv), a._accessibleDiv = null, 
                r--, 0 === this.children.length && this.deactivate()) : (n = a._accessibleDiv, s = a.hitArea, 
                o = a.worldTransform, a.hitArea ? (n.style.left = (o.tx + s.x * o.a) * e + "px", 
                n.style.top = (o.ty + s.y * o.d) * i + "px", n.style.width = s.width * o.a * e + "px", 
                n.style.height = s.height * o.d * i + "px") : (s = a.getBounds(), this.capHitArea(s), 
                n.style.left = s.x * e + "px", n.style.top = s.y * i + "px", n.style.width = s.width * e + "px", 
                n.style.height = s.height * i + "px", n.title !== a.accessibleTitle && null !== a.accessibleTitle && (n.title = a.accessibleTitle), 
                n.getAttribute("aria-label") !== a.accessibleHint && null !== a.accessibleHint && n.setAttribute("aria-label", a.accessibleHint)), 
                a.accessibleTitle === n.title && a.tabIndex === n.tabIndex || (n.title = a.accessibleTitle, 
                n.tabIndex = a.tabIndex, this.debug && this.updateDebugHTML(n)));
            }
            this.renderId++;
        }
    }, ei.prototype.updateDebugHTML = function(t) {
        t.innerHTML = "type: " + t.type + "</br> title : " + t.title + "</br> tabIndex: " + t.tabIndex;
    }, ei.prototype.capHitArea = function(t) {
        t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), 
        t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y);
    }, ei.prototype.addChild = function(t) {
        var e = this.pool.pop();
        e || ((e = document.createElement("button")).style.width = "100px", e.style.height = "100px", 
        e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", 
        e.style.position = "absolute", e.style.zIndex = 2, e.style.borderStyle = "none", 
        -1 < navigator.userAgent.toLowerCase().indexOf("chrome") ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), 
        navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), 
        e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), 
        e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, 
        e.type = t.accessibleType, t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex), 
        t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), 
        this.debug && this.updateDebugHTML(e), t._accessibleActive = !0, (t._accessibleDiv = e).displayObject = t, 
        this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex;
    }, ei.prototype._onClick = function(t) {
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "click", e.eventData), e.dispatchEvent(t.target.displayObject, "pointertap", e.eventData), 
        e.dispatchEvent(t.target.displayObject, "tap", e.eventData);
    }, ei.prototype._onFocus = function(t) {
        t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "assertive");
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData);
    }, ei.prototype._onFocusOut = function(t) {
        t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "polite");
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData);
    }, ei.prototype._onKeyDown = function(t) {
        9 === t.keyCode && this.activate();
    }, ei.prototype._onMouseMove = function(t) {
        0 === t.movementX && 0 === t.movementY || this.deactivate();
    }, ei.prototype.destroy = function() {
        this.destroyTouchHook(), this.div = null;
        for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
        window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown), 
        this.pool = null, this.children = null, this.renderer = null;
    }, {
        AccessibilityManager: ei,
        accessibleTarget: t
    }), ii = (ri.prototype.emit = function(t, e, i, r, n, s, o, a) {
        if (8 < arguments.length) throw new Error("max arguments reached");
        var h = this.name, u = this.items;
        this._aliasCount++;
        for (var l = 0, c = u.length; l < c; l++) u[l][h](t, e, i, r, n, s, o, a);
        return u === this.items && this._aliasCount--, this;
    }, ri.prototype.ensureNonAliasedItems = function() {
        0 < this._aliasCount && 1 < this.items.length && (this._aliasCount = 0, this.items = this.items.slice(0));
    }, ri.prototype.add = function(t) {
        return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), 
        this;
    }, ri.prototype.remove = function(t) {
        t = this.items.indexOf(t);
        return -1 !== t && (this.ensureNonAliasedItems(), this.items.splice(t, 1)), this;
    }, ri.prototype.contains = function(t) {
        return -1 !== this.items.indexOf(t);
    }, ri.prototype.removeAll = function() {
        return this.ensureNonAliasedItems(), this.items.length = 0, this;
    }, ri.prototype.destroy = function() {
        this.removeAll(), this.items = null, this._name = null;
    }, Object.defineProperty(ri.prototype, "empty", {
        get: function() {
            return 0 === this.items.length;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(ri.prototype, "name", {
        get: function() {
            return this._name;
        },
        enumerable: !0,
        configurable: !0
    }), ri);
    function ri(t) {
        this.items = [], this._name = t, this._aliasCount = 0;
    }
    Object.defineProperties(ii.prototype, {
        dispatch: {
            value: ii.prototype.emit
        },
        run: {
            value: ii.prototype.emit
        }
    }), E.TARGET_FPMS = .06, (ai = G.UPDATE_PRIORITY || (G.UPDATE_PRIORITY = {}))[ai.INTERACTION = 50] = "INTERACTION", 
    ai[ai.HIGH = 25] = "HIGH", ai[ai.NORMAL = 0] = "NORMAL", ai[ai.LOW = -25] = "LOW", 
    ai[ai.UTILITY = -50] = "UTILITY";
    si.prototype.match = function(t, e) {
        return void 0 === e && (e = null), this.fn === t && this.context === e;
    }, si.prototype.emit = function(t) {
        this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
        t = this.next;
        return this.once && this.destroy(!0), this._destroyed && (this.next = null), t;
    }, si.prototype.connect = function(t) {
        (this.previous = t).next && (t.next.previous = this), this.next = t.next, t.next = this;
    }, si.prototype.destroy = function(t) {
        void 0 === t && (t = !1), this._destroyed = !0, this.fn = null, this.context = null, 
        this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
        var e = this.next;
        return this.next = t ? null : e, this.previous = null, e;
    };
    var ni = si;
    function si(t, e, i, r) {
        void 0 === e && (e = null), void 0 === i && (i = 0), void 0 === r && (r = !1), this.fn = t, 
        this.context = e, this.priority = i, this.once = r, this.next = null, this.previous = null, 
        this._destroyed = !1;
    }
    o.prototype._requestIfNeeded = function() {
        null === this._requestId && this._head.next && (this.lastTime = performance.now(), 
        this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
    }, o.prototype._cancelIfNeeded = function() {
        null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null);
    }, o.prototype._startIfPossible = function() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start();
    }, o.prototype.add = function(t, e, i) {
        return void 0 === i && (i = G.UPDATE_PRIORITY.NORMAL), this._addListener(new ni(t, e, i));
    }, o.prototype.addOnce = function(t, e, i) {
        return void 0 === i && (i = G.UPDATE_PRIORITY.NORMAL), this._addListener(new ni(t, e, i, !0));
    }, o.prototype._addListener = function(t) {
        var e = this._head.next, i = this._head;
        if (e) {
            for (;e; ) {
                if (t.priority > e.priority) {
                    t.connect(i);
                    break;
                }
                e = (i = e).next;
            }
            t.previous || t.connect(i);
        } else t.connect(i);
        return this._startIfPossible(), this;
    }, o.prototype.remove = function(t, e) {
        for (var i = this._head.next; i; ) i = i.match(t, e) ? i.destroy() : i.next;
        return this._head.next || this._cancelIfNeeded(), this;
    }, o.prototype.start = function() {
        this.started || (this.started = !0, this._requestIfNeeded());
    }, o.prototype.stop = function() {
        this.started && (this.started = !1, this._cancelIfNeeded());
    }, o.prototype.destroy = function() {
        if (!this._protected) {
            this.stop();
            for (var t = this._head.next; t; ) t = t.destroy(!0);
            this._head.destroy(), this._head = null;
        }
    }, o.prototype.update = function(t) {
        var e;
        if ((t = void 0 === t ? performance.now() : t) > this.lastTime) {
            if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), 
            e *= this.speed, this._minElapsedMS) {
                var i = t - this._lastFrame | 0;
                if (i < this._minElapsedMS) return;
                this._lastFrame = t - i % this._minElapsedMS;
            }
            this.deltaMS = e, this.deltaTime = this.deltaMS * E.TARGET_FPMS;
            for (var i = this._head, r = i.next; r; ) r = r.emit(this.deltaTime);
            i.next || this._cancelIfNeeded();
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = t;
    }, Object.defineProperty(o.prototype, "FPS", {
        get: function() {
            return 1e3 / this.elapsedMS;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(o.prototype, "minFPS", {
        get: function() {
            return 1e3 / this._maxElapsedMS;
        },
        set: function(t) {
            t = Math.min(this.maxFPS, t), t = Math.min(Math.max(0, t) / 1e3, E.TARGET_FPMS);
            this._maxElapsedMS = 1 / t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(o.prototype, "maxFPS", {
        get: function() {
            return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
        },
        set: function(t) {
            0 === t ? this._minElapsedMS = 0 : (t = Math.max(this.minFPS, t), this._minElapsedMS = 1 / (t / 1e3));
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(o, "shared", {
        get: function() {
            var t;
            return o._shared || ((t = o._shared = new o()).autoStart = !0, t._protected = !0), 
            o._shared;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(o, "system", {
        get: function() {
            var t;
            return o._system || ((t = o._system = new o()).autoStart = !0, t._protected = !0), 
            o._system;
        },
        enumerable: !0,
        configurable: !0
    });
    var oi = o;
    function o() {
        var e = this;
        this._head = new ni(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, 
        this._minElapsedMS = 0, this.autoStart = !1, this.deltaTime = 1, this.deltaMS = 1 / E.TARGET_FPMS, 
        this.elapsedMS = 1 / E.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, 
        this._protected = !1, this._lastFrame = -1, this._tick = function(t) {
            e._requestId = null, e.started && (e.update(t), e.started) && null === e._requestId && e._head.next && (e._requestId = requestAnimationFrame(e._tick));
        };
    }
    hi.init = function(t) {
        var e = this;
        t = Object.assign({
            autoStart: !0,
            sharedTicker: !1
        }, t), Object.defineProperty(this, "ticker", {
            set: function(t) {
                this._ticker && this._ticker.remove(this.render, this), (this._ticker = t) && t.add(this.render, this, G.UPDATE_PRIORITY.LOW);
            },
            get: function() {
                return this._ticker;
            }
        }), this.stop = function() {
            e._ticker.stop();
        }, this.start = function() {
            e._ticker.start();
        }, this._ticker = null, this.ticker = t.sharedTicker ? oi.shared : new oi(), t.autoStart && this.start();
    }, hi.destroy = function() {
        var t;
        this._ticker && (t = this._ticker, this.ticker = null, t.destroy());
    };
    var ai = hi;
    function hi() {}
    function ui(t, e) {
        void 0 === e && (e = 0), this._width = t = void 0 === t ? 0 : t, this._height = e, 
        this.destroyed = !1, this.internal = !1, this.onResize = new ii("setRealSize", 2), 
        this.onUpdate = new ii("update"), this.onError = new ii("onError", 1);
    }
    var li, a = {
        valid: {
            configurable: !0
        },
        width: {
            configurable: !0
        },
        height: {
            configurable: !0
        }
    }, a = (ui.prototype.bind = function(t) {
        this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.run(this._width, this._height);
    }, ui.prototype.unbind = function(t) {
        this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
    }, ui.prototype.resize = function(t, e) {
        t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.run(t, e));
    }, a.valid.get = function() {
        return !!this._width && !!this._height;
    }, ui.prototype.update = function() {
        this.destroyed || this.onUpdate.run();
    }, ui.prototype.load = function() {
        return Promise.resolve();
    }, a.width.get = function() {
        return this._width;
    }, a.height.get = function() {
        return this._height;
    }, ui.prototype.upload = function(t, e, i) {
        return !1;
    }, ui.prototype.style = function(t, e, i) {
        return !1;
    }, ui.prototype.dispose = function() {}, ui.prototype.destroy = function() {
        this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), 
        this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), 
        this.onUpdate = null);
    }, Object.defineProperties(ui.prototype, a), (li = ui) && (ci.__proto__ = li), ((ci.prototype = Object.create(li && li.prototype)).constructor = ci).crossOrigin = function(t, e, i) {
        void 0 === i && 0 !== e.indexOf("data:") ? t.crossOrigin = pe(e) : !1 !== i && (t.crossOrigin = "string" == typeof i ? i : "anonymous");
    }, ci.prototype.upload = function(t, e, i, r) {
        var t = t.gl, n = e.realWidth, s = e.realHeight;
        return r = r || this.source, t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === G.ALPHA_MODES.UNPACK), 
        this.noSubImage || e.target !== t.TEXTURE_2D || i.width !== n || i.height !== s ? (i.width = n, 
        i.height = s, t.texImage2D(e.target, 0, e.format, e.format, e.type, r)) : t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, e.format, e.type, r), 
        !0;
    }, ci.prototype.update = function() {
        var t, e;
        this.destroyed || (t = this.source.naturalWidth || this.source.videoWidth || this.source.width, 
        e = this.source.naturalHeight || this.source.videoHeight || this.source.height, 
        this.resize(t, e), li.prototype.update.call(this));
    }, ci.prototype.dispose = function() {
        this.source = null;
    }, ci);
    function ci(t) {
        var e = t.naturalWidth || t.videoWidth || t.width, i = t.naturalHeight || t.videoHeight || t.height;
        li.call(this, e, i), this.source = t, this.noSubImage = !1;
    }
    (di = a) && (fi.__proto__ = di), ((fi.prototype = Object.create(di && di.prototype)).constructor = fi).prototype.load = function(t) {
        var r = this;
        return void 0 !== t && (this.createBitmap = t), this._load || (this._load = new Promise(function(t) {
            r.url = r.source.src;
            function e() {
                r.destroyed || (i.onload = null, i.onerror = null, r.resize(i.width, i.height), 
                r._load = null, r.createBitmap ? t(r.process()) : t(r));
            }
            var i = r.source;
            i.complete && i.src ? e() : (i.onload = e, i.onerror = function(t) {
                return r.onError.run(t);
            });
        })), this._load;
    }, fi.prototype.process = function() {
        var e = this;
        if (null === this._process) {
            if (null !== this.bitmap || !window.createImageBitmap) return Promise.resolve(this);
            this._process = window.createImageBitmap(this.source, 0, 0, this.source.width, this.source.height, {
                premultiplyAlpha: this.premultiplyAlpha === G.ALPHA_MODES.UNPACK ? "premultiply" : "none"
            }).then(function(t) {
                return e.destroyed ? Promise.reject() : (e.bitmap = t, e.update(), e._process = null, 
                Promise.resolve(e));
            });
        }
        return this._process;
    }, fi.prototype.upload = function(t, e, i) {
        if ("number" == typeof this.alphaMode && (e.alphaMode = this.alphaMode), !this.createBitmap) return di.prototype.upload.call(this, t, e, i);
        if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
        if (di.prototype.upload.call(this, t, e, i, this.bitmap), !this.preserveBitmap) {
            var r, n = !0;
            for (r in e._glTextures) {
                var s = e._glTextures[r];
                if (s !== i && s.dirtyId !== e.dirtyId) {
                    n = !1;
                    break;
                }
            }
            n && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
        }
        return !0;
    }, fi.prototype.dispose = function() {
        this.source.onload = null, this.source.onerror = null, di.prototype.dispose.call(this), 
        this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, 
        this._load = null;
    };
    var di, pi = fi;
    function fi(t, e) {
        var i;
        e = e || {}, t instanceof HTMLImageElement || (i = new Image(), di.crossOrigin(i, t, e.crossorigin), 
        i.src = t, t = i), di.call(this, t), !t.complete && this._width && this._height && (this._width = 0, 
        this._height = 0), this.url = t.src, this._process = null, this.preserveBitmap = !1, 
        this.createBitmap = (void 0 !== e.createBitmap ? e.createBitmap : E.CREATE_IMAGE_BITMAP) && !!window.createImageBitmap, 
        this.alphaMode = "number" == typeof e.alphaMode ? e.alphaMode : null, void 0 !== e.premultiplyAlpha && (this.premultiplyAlpha = e.premultiplyAlpha), 
        this.bitmap = null, this._load = null, !1 !== e.autoLoad && this.load();
    }
    var mi = [];
    function gi(t, e) {
        if (!t) return null;
        var i, r = "";
        "string" == typeof t && (i = /\.(\w{3,4})(?:$|\?|#)/i.exec(t)) && (r = i[1].toLowerCase());
        for (var n = mi.length - 1; 0 <= n; --n) {
            var s = mi[n];
            if (s.test && s.test(t, r)) return new s(t, e);
        }
        return new pi(t, e);
    }
    (yi = ui) && (vi.__proto__ = yi), ((vi.prototype = Object.create(yi && yi.prototype)).constructor = vi).prototype.upload = function(t, e, i) {
        t = t.gl;
        return t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === G.ALPHA_MODES.UNPACK), 
        i.width === e.width && i.height === e.height ? t.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (i.width = e.width, 
        i.height = e.height, t.texImage2D(e.target, 0, i.internalFormat, e.width, e.height, 0, e.format, i.type, this.data)), 
        !0;
    }, vi.prototype.dispose = function() {
        this.data = null;
    }, vi.test = function(t) {
        return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array;
    };
    var yi, _i = vi;
    function vi(t, e) {
        var e = e || {}, i = e.width, e = e.height;
        if (!i || !e) throw new Error("BufferResource width or height invalid");
        yi.call(this, i, e), this.data = t;
    }
    var xi, bi = {
        scaleMode: G.SCALE_MODES.NEAREST,
        format: G.FORMATS.RGBA,
        alphaMode: G.ALPHA_MODES.NPM
    }, f = ((xi = q) && (u.__proto__ = xi), (u.prototype = Object.create(xi && xi.prototype)).constructor = u, 
    (Ti = {
        realWidth: {
            configurable: !0
        },
        realHeight: {
            configurable: !0
        }
    }).realWidth.get = function() {
        return Math.ceil(this.width * this.resolution - 1e-4);
    }, Ti.realHeight.get = function() {
        return Math.ceil(this.height * this.resolution - 1e-4);
    }, u.prototype.setStyle = function(t, e) {
        var i;
        return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, i = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, 
        i = !0), i && this.dirtyStyleId++, this;
    }, u.prototype.setSize = function(t, e, i) {
        return this.resolution = i || this.resolution, this.width = t, this.height = e, 
        this._refreshPOT(), this.update(), this;
    }, u.prototype.setRealSize = function(t, e, i) {
        return this.resolution = i || this.resolution, this.width = t / this.resolution, 
        this.height = e / this.resolution, this._refreshPOT(), this.update(), this;
    }, u.prototype._refreshPOT = function() {
        this.isPowerOfTwo = ne(this.realWidth) && ne(this.realHeight);
    }, u.prototype.setResolution = function(t) {
        var e = this.resolution;
        return e !== t && (this.resolution = t, this.valid && (this.width = this.width * e / t, 
        this.height = this.height * e / t, this.emit("update", this)), this._refreshPOT()), 
        this;
    }, u.prototype.setResource = function(t) {
        if (this.resource !== t) {
            if (this.resource) throw new Error("Resource can be set only once");
            t.bind(this), this.resource = t;
        }
        return this;
    }, u.prototype.update = function() {
        this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : 0 < this.width && 0 < this.height && (this.valid = !0, 
        this.emit("loaded", this), this.emit("update", this));
    }, u.prototype.onError = function(t) {
        this.emit("error", this, t);
    }, u.prototype.destroy = function() {
        this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), 
        this.resource = null), this.cacheId && (delete he[this.cacheId], delete ae[this.cacheId], 
        this.cacheId = null), this.dispose(), u.removeFromCache(this), this.textureCacheIds = null, 
        this.destroyed = !0;
    }, u.prototype.dispose = function() {
        this.emit("dispose", this);
    }, u.from = function(t, e, i) {
        void 0 === i && (i = E.STRICT_TEXTURE_CACHE);
        var r = "string" == typeof t, n = null, n = r ? t : (t._pixiId || (t._pixiId = "pixiid_" + ++te), 
        t._pixiId), s = he[n];
        if (r && i && !s) throw new Error('The cacheId "' + n + '" does not exist in BaseTextureCache.');
        return s || ((s = new u(t, e)).cacheId = n, u.addToCache(s, n)), s;
    }, u.fromBuffer = function(t, e, i, r) {
        t = t || new Float32Array(e * i * 4);
        var n = new _i(t, {
            width: e,
            height: i
        }), t = t instanceof Float32Array ? G.TYPES.FLOAT : G.TYPES.UNSIGNED_BYTE;
        return new u(n, Object.assign(bi, r || {
            width: e,
            height: i,
            type: t
        }));
    }, u.addToCache = function(t, e) {
        e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), he[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"), 
        he[e] = t);
    }, u.removeFromCache = function(t) {
        if ("string" == typeof t) {
            var e, i = he[t];
            if (i) return -1 < (e = i.textureCacheIds.indexOf(t)) && i.textureCacheIds.splice(e, 1), 
            delete he[t], i;
        } else if (t && t.textureCacheIds) {
            for (var r = 0; r < t.textureCacheIds.length; ++r) delete he[t.textureCacheIds[r]];
            return t.textureCacheIds.length = 0, t;
        }
        return null;
    }, Object.defineProperties(u.prototype, Ti), u);
    function u(t, e) {
        void 0 === t && (t = null), void 0 === e && (e = null), xi.call(this);
        var i = (e = e || {}).alphaMode, r = e.mipmap, n = e.anisotropicLevel, s = e.scaleMode, o = e.width, a = e.height, h = e.wrapMode, u = e.format, l = e.type, c = e.target, d = e.resolution, p = e.resourceOptions;
        !t || t instanceof ui || ((t = gi(t, p)).internal = !0), this.width = o || 0, this.height = a || 0, 
        this.resolution = d || E.RESOLUTION, this.mipmap = void 0 !== r ? r : E.MIPMAP_TEXTURES, 
        this.anisotropicLevel = void 0 !== n ? n : E.ANISOTROPIC_LEVEL, this.wrapMode = h || E.WRAP_MODE, 
        this.scaleMode = void 0 !== s ? s : E.SCALE_MODE, this.format = u || G.FORMATS.RGBA, 
        this.type = l || G.TYPES.UNSIGNED_BYTE, this.target = c || G.TARGETS.TEXTURE_2D, 
        this.alphaMode = void 0 !== i ? i : G.ALPHA_MODES.UNPACK, void 0 !== e.premultiplyAlpha && (this.premultiplyAlpha = e.premultiplyAlpha), 
        this.uid = ++te, this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, 
        this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = 0 < o && 0 < a, 
        this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, 
        this._batchLocation = 0, this.setResource(t);
    }
    f._globalBatch = 0;
    (Ei = ui) && (wi.__proto__ = Ei), ((wi.prototype = Object.create(Ei && Ei.prototype)).constructor = wi).prototype.dispose = function() {
        for (var t = 0, e = this.length; t < e; t++) this.items[t].destroy();
        this.items = null, this.itemDirtyIds = null, this._load = null;
    }, wi.prototype.addResourceAt = function(t, e) {
        if (this.items[e]) return t.valid && !this.valid && this.resize(t.width, t.height), 
        this.items[e].setResource(t), this;
        throw new Error("Index " + e + " is out of bounds");
    }, wi.prototype.bind = function(t) {
        Ei.prototype.bind.call(this, t), t.target = G.TARGETS.TEXTURE_2D_ARRAY;
        for (var e = 0; e < this.length; e++) this.items[e].on("update", t.update, t);
    }, wi.prototype.unbind = function(t) {
        Ei.prototype.unbind.call(this, t);
        for (var e = 0; e < this.length; e++) this.items[e].off("update", t.update, t);
    }, wi.prototype.load = function() {
        var i, t, r = this;
        return this._load || (t = (i = this.items.map(function(t) {
            return t.resource;
        })).map(function(t) {
            return t.load();
        }), this._load = Promise.all(t).then(function() {
            var t = i[0], e = t.width, t = t.height;
            return r.resize(e, t), Promise.resolve(r);
        })), this._load;
    }, wi.prototype.upload = function(t, e, i) {
        var r = this.length, n = this.itemDirtyIds, s = this.items, o = t.gl;
        i.dirtyId < 0 && o.texImage3D(o.TEXTURE_2D_ARRAY, 0, e.format, this._width, this._height, r, 0, e.format, e.type, null);
        for (var a = 0; a < r; a++) {
            var h = s[a];
            n[a] < h.dirtyId && (n[a] = h.dirtyId, h.valid) && o.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, a, h.resource.width, h.resource.height, 1, e.format, e.type, h.resource.source);
        }
        return !0;
    };
    var Ei, Ti = wi;
    function wi(t, e) {
        e = e || {};
        var i, r = t;
        Array.isArray(t) && (r = (i = t).length), Ei.call(this, e.width, e.height), this.items = [], 
        this.itemDirtyIds = [];
        for (var n = 0; n < r; n++) {
            var s = new f();
            this.items.push(s), this.itemDirtyIds.push(-1);
        }
        if (this.length = r, this._load = null, i) for (var o = 0; o < r; o++) this.addResourceAt(gi(i[o], e), o);
    }
    (Si = a) && (Pi.__proto__ = Si), ((Pi.prototype = Object.create(Si && Si.prototype)).constructor = Pi).test = function(t) {
        var e = window.OffscreenCanvas;
        return !!(e && t instanceof e) || t instanceof HTMLCanvasElement;
    };
    var Si, Ii = Pi;
    function Pi() {
        Si.apply(this, arguments);
    }
    (Ai = Ti) && (Di.__proto__ = Ai), ((Di.prototype = Object.create(Ai && Ai.prototype)).constructor = Di).prototype.bind = function(t) {
        Ai.prototype.bind.call(this, t), t.target = G.TARGETS.TEXTURE_CUBE_MAP;
    }, Di.prototype.upload = function(t, e, i) {
        for (var r = this.itemDirtyIds, n = 0; n < Di.SIDES; n++) {
            var s = this.items[n];
            r[n] < s.dirtyId && (r[n] = s.dirtyId, s.valid) && s.resource.upload(t, s, i);
        }
        return !0;
    };
    var Ai, Oi = Di;
    function Di(t, e) {
        if (Ai.call(this, t, e = e || {}), this.length !== Di.SIDES) throw new Error("Invalid length. Got " + this.length + ", expected 6");
        for (var i = 0; i < Di.SIDES; i++) this.items[i].target = G.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + i;
        !1 !== e.autoLoad && this.load();
    }
    Oi.SIDES = 6;
    (Mi = a) && (Ci.__proto__ = Mi), ((Ci.prototype = Object.create(Mi && Mi.prototype)).constructor = Ci).prototype.load = function() {
        var e = this;
        return this._load || (this._load = new Promise(function(t) {
            if (e._resolve = function() {
                e.resize(e.source.width, e.source.height), t(e);
            }, /^\<svg/.test(e.svg.trim())) {
                if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                e.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e.svg)));
            }
            e._loadSvg();
        })), this._load;
    }, Ci.prototype._loadSvg = function() {
        var s = this, o = new Image();
        Mi.crossOrigin(o, this.svg, this._crossorigin), o.src = this.svg, o.onerror = function(t) {
            o.onerror = null, s.onError.run(t);
        }, o.onload = function() {
            var t = o.width, e = o.height;
            if (!t || !e) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
            var i = t * s.scale, r = e * s.scale, n = ((s._overrideWidth || s._overrideHeight) && (i = s._overrideWidth || s._overrideHeight / e * t, 
            r = s._overrideHeight || s._overrideWidth / t * e), i = Math.round(i), r = Math.round(r), 
            s.source);
            n.width = i, n.height = r, n._pixiId = "canvas_" + ++te, n.getContext("2d").drawImage(o, 0, 0, t, e, 0, 0, i, r), 
            s._resolve(), s._resolve = null;
        };
    }, Ci.getSize = function(t) {
        var t = Ci.SVG_SIZE.exec(t), e = {};
        return t && (e[t[1]] = Math.round(parseFloat(t[3])), e[t[5]] = Math.round(parseFloat(t[7]))), 
        e;
    }, Ci.prototype.dispose = function() {
        Mi.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null;
    }, Ci.test = function(t, e) {
        return "svg" === e || "string" == typeof t && 0 === t.indexOf("data:image/svg+xml;base64") || "string" == typeof t && 0 === t.indexOf("<svg");
    };
    var Mi, c = Ci;
    function Ci(t, e) {
        e = e || {}, Mi.call(this, document.createElement("canvas")), this._width = 0, this._height = 0, 
        this.svg = t, this.scale = e.scale || 1, this._overrideWidth = e.width, this._overrideHeight = e.height, 
        this._resolve = null, this._crossorigin = e.crossorigin, this._load = null, !1 !== e.autoLoad && this.load();
    }
    c.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
    (Ri = a) && (Li.__proto__ = Ri), d = {
        autoUpdate: {
            configurable: !0
        },
        updateFPS: {
            configurable: !0
        }
    }, ((Li.prototype = Object.create(Ri && Ri.prototype)).constructor = Li).prototype.update = function(t) {
        var e;
        void 0 === t && (t = 0), !this.destroyed && (e = oi.shared.elapsedMS * this.source.playbackRate, 
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - e), !this._updateFPS || this._msToNextUpdate <= 0) && (Ri.prototype.update.call(this, t), 
        this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0);
    }, Li.prototype.load = function() {
        var e, i = this;
        return this._load || (((e = this.source).readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), 
        e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), 
        this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), 
        e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), 
        this._load = new Promise(function(t) {
            i.valid ? t(i) : (i._resolve = t, e.load());
        })), this._load;
    }, Li.prototype._onError = function() {
        this.source.removeEventListener("error", this._onError, !0), this.onError.run(event);
    }, Li.prototype._isSourcePlaying = function() {
        var t = this.source;
        return 0 < t.currentTime && !1 === t.paused && !1 === t.ended && 2 < t.readyState;
    }, Li.prototype._isSourceReady = function() {
        return 3 === this.source.readyState || 4 === this.source.readyState;
    }, Li.prototype._onPlayStart = function() {
        this.valid || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (oi.shared.add(this.update, this), 
        this._isAutoUpdating = !0);
    }, Li.prototype._onPlayStop = function() {
        this._isAutoUpdating && (oi.shared.remove(this.update, this), this._isAutoUpdating = !1);
    }, Li.prototype._onCanPlay = function() {
        var t = this.source, e = (t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay), 
        this.valid);
        this.resize(t.videoWidth, t.videoHeight), !e && this._resolve && (this._resolve(this), 
        this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play();
    }, Li.prototype.dispose = function() {
        this._isAutoUpdating && oi.shared.remove(this.update, this), this.source && (this.source.removeEventListener("error", this._onError, !0), 
        this.source.pause(), this.source.src = "", this.source.load()), Ri.prototype.dispose.call(this);
    }, d.autoUpdate.get = function() {
        return this._autoUpdate;
    }, d.autoUpdate.set = function(t) {
        t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (oi.shared.remove(this.update, this), 
        this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (oi.shared.add(this.update, this), 
        this._isAutoUpdating = !0));
    }, d.updateFPS.get = function() {
        return this._updateFPS;
    }, d.updateFPS.set = function(t) {
        t !== this._updateFPS && (this._updateFPS = t);
    }, Li.test = function(t, e) {
        return t instanceof HTMLVideoElement || -1 < Li.TYPES.indexOf(e);
    }, Object.defineProperties(Li.prototype, d);
    var Ri, d = Li;
    function Li(t, e) {
        if (e = e || {}, !(t instanceof HTMLVideoElement)) {
            var i = document.createElement("video");
            i.setAttribute("preload", "auto"), i.setAttribute("webkit-playsinline", ""), i.setAttribute("playsinline", ""), 
            Ri.crossOrigin(i, (t = "string" == typeof t ? [ t ] : t)[0].src || t[0], e.crossorigin);
            for (var r = 0; r < t.length; ++r) {
                var n = document.createElement("source"), s = t[r], o = s.src, s = s.mime, a = (o = o || t[r]).split("?").shift().toLowerCase(), a = a.substr(a.lastIndexOf(".") + 1), s = s || "video/" + a;
                n.src = o, n.type = s, i.appendChild(n);
            }
            t = i;
        }
        Ri.call(this, t), this.noSubImage = !0, this._autoUpdate = !0, this._isAutoUpdating = !1, 
        this._updateFPS = e.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = !1 !== e.autoPlay, 
        this._load = null, this._resolve = null, this._onCanPlay = this._onCanPlay.bind(this), 
        this._onError = this._onError.bind(this), !1 !== e.autoLoad && this.load();
    }
    d.TYPES = [ "mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov" ];
    (Ni = a) && (Bi.__proto__ = Ni), ((Bi.prototype = Object.create(Ni && Ni.prototype)).constructor = Bi).test = function(t) {
        return !!window.createImageBitmap && t instanceof ImageBitmap;
    };
    var Ni, Fi = Bi;
    function Bi() {
        Ni.apply(this, arguments);
    }
    mi.push(pi, Fi, Ii, d, c, _i, Oi, Ti);
    function Ui(t) {
        this.renderer = t;
    }
    var ki, Ti = {
        INSTALLED: mi,
        autoDetectResource: gi,
        ArrayResource: Ti,
        BufferResource: _i,
        CanvasResource: Ii,
        CubeResource: Oi,
        ImageResource: pi,
        ImageBitmapResource: Fi,
        SVGResource: c,
        VideoResource: d,
        Resource: ui,
        BaseImageResource: a
    }, Xi = (Ui.prototype.destroy = function() {
        this.renderer = null;
    }, (ki = _i) && (ji.__proto__ = ki), ((ji.prototype = Object.create(ki && ki.prototype)).constructor = ji).prototype.upload = function(t, e, i) {
        t = t.gl;
        return t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === G.ALPHA_MODES.UNPACK), 
        i.width === e.width && i.height === e.height ? t.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (i.width = e.width, 
        i.height = e.height, t.texImage2D(e.target, 0, t.DEPTH_COMPONENT16, e.width, e.height, 0, e.format, e.type, this.data)), 
        !0;
    }, ji);
    function ji() {
        ki.apply(this, arguments);
    }
    function Hi(t, e) {
        this.width = Math.ceil(t || 100), this.height = Math.ceil(e || 100), this.stencil = !1, 
        this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, 
        this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new ii("disposeFramebuffer", 2);
    }
    var Gi, Fi = {
        colorTexture: {
            configurable: !0
        }
    }, Yi = (Fi.colorTexture.get = function() {
        return this.colorTextures[0];
    }, Hi.prototype.addColorTexture = function(t, e) {
        return this.colorTextures[t = void 0 === t ? 0 : t] = e || new f(null, {
            scaleMode: 0,
            resolution: 1,
            mipmap: !1,
            width: this.width,
            height: this.height
        }), this.dirtyId++, this.dirtyFormat++, this;
    }, Hi.prototype.addDepthTexture = function(t) {
        return this.depthTexture = t || new f(new Xi(null, {
            width: this.width,
            height: this.height
        }), {
            scaleMode: 0,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: !1,
            format: G.FORMATS.DEPTH_COMPONENT,
            type: G.TYPES.UNSIGNED_SHORT
        }), this.dirtyId++, this.dirtyFormat++, this;
    }, Hi.prototype.enableDepth = function() {
        return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this;
    }, Hi.prototype.enableStencil = function() {
        return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this;
    }, Hi.prototype.resize = function(t, e) {
        if (t = Math.ceil(t), e = Math.ceil(e), t !== this.width || e !== this.height) {
            this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
            for (var i, r = 0; r < this.colorTextures.length; r++) {
                var n = this.colorTextures[r], s = n.resolution;
                n.setSize(t / s, e / s);
            }
            this.depthTexture && (i = this.depthTexture.resolution, this.depthTexture.setSize(t / i, e / i));
        }
    }, Hi.prototype.dispose = function() {
        this.disposeRunner.run(this, !1);
    }, Object.defineProperties(Hi.prototype, Fi), (Gi = f) && (Vi.__proto__ = Gi), ((Vi.prototype = Object.create(Gi && Gi.prototype)).constructor = Vi).prototype.resize = function(t, e) {
        t = Math.ceil(t), e = Math.ceil(e), this.framebuffer.resize(t * this.resolution, e * this.resolution);
    }, Vi.prototype.dispose = function() {
        this.framebuffer.dispose(), Gi.prototype.dispose.call(this);
    }, Vi.prototype.destroy = function() {
        Gi.prototype.destroy.call(this, !0), this.framebuffer = null;
    }, Vi);
    function Vi(t) {
        Gi.call(this, null, t = "number" == typeof t ? {
            width: arguments[0],
            height: arguments[1],
            scaleMode: arguments[2],
            resolution: arguments[3]
        } : t);
        var t = t || {}, e = t.width, t = t.height;
        this.mipmap = !1, this.width = Math.ceil(e) || 100, this.height = Math.ceil(t) || 100, 
        this.valid = !0, this._canvasRenderTarget = null, this.clearColor = [ 0, 0, 0, 0 ], 
        this.framebuffer = new Hi(this.width * this.resolution, this.height * this.resolution).addColorTexture(0, this), 
        this.maskStack = [], this.filterStack = [ {} ];
    }
    function zi() {
        this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, 
        this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
    }
    zi.prototype.set = function(t, e, i) {
        var r, n, s, o, a = e.width, e = e.height;
        i ? (r = t.width / 2 / a, n = t.height / 2 / e, s = t.x / a + r, o = t.y / e + n, 
        i = h.add(i, h.NW), this.x0 = s + r * h.uX(i), this.y0 = o + n * h.uY(i), i = h.add(i, 2), 
        this.x1 = s + r * h.uX(i), this.y1 = o + n * h.uY(i), i = h.add(i, 2), this.x2 = s + r * h.uX(i), 
        this.y2 = o + n * h.uY(i), i = h.add(i, 2), this.x3 = s + r * h.uX(i), this.y3 = o + n * h.uY(i)) : (this.x0 = t.x / a, 
        this.y0 = t.y / e, this.x1 = (t.x + t.width) / a, this.y1 = t.y / e, this.x2 = (t.x + t.width) / a, 
        this.y2 = (t.y + t.height) / e, this.x3 = t.x / a, this.y3 = (t.y + t.height) / e), 
        this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, 
        this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, 
        this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
    };
    var Wi, qi = new zi(), w = ((Wi = q) && (m.__proto__ = Wi), c = {
        resolution: {
            configurable: !0
        },
        frame: {
            configurable: !0
        },
        rotate: {
            configurable: !0
        },
        width: {
            configurable: !0
        },
        height: {
            configurable: !0
        }
    }, ((m.prototype = Object.create(Wi && Wi.prototype)).constructor = m).prototype.update = function() {
        this.baseTexture.resource && this.baseTexture.resource.update();
    }, m.prototype.onBaseTextureUpdated = function(t) {
        if (this.noFrame) {
            if (!this.baseTexture.valid) return;
            this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs();
        } else this.frame = this._frame;
        this.emit("update", this);
    }, m.prototype.destroy = function(t) {
        this.baseTexture && (t && ((t = this.baseTexture.resource) && ae[t.url] && m.removeFromCache(t.url), 
        this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), 
        this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, 
        this.orig = null, this.valid = !1, m.removeFromCache(this), this.textureCacheIds = null;
    }, m.prototype.clone = function() {
        return new m(this.baseTexture, this.frame, this.orig, this.trim, this.rotate, this.defaultAnchor);
    }, m.prototype.updateUvs = function() {
        this._uvs === qi && (this._uvs = new zi()), this._uvs.set(this._frame, this.baseTexture, this.rotate), 
        this._updateID++;
    }, m.from = function(t, e, i) {
        void 0 === e && (e = {}), void 0 === i && (i = E.STRICT_TEXTURE_CACHE);
        var r = "string" == typeof t, n = null, n = r ? t : (t._pixiId || (t._pixiId = "pixiid_" + ++te), 
        t._pixiId), s = ae[n];
        if (r && i && !s) throw new Error('The cacheId "' + n + '" does not exist in TextureCache.');
        return s || (e.resolution || (e.resolution = fe(t)), (s = new m(new f(t, e))).baseTexture.cacheId = n, 
        f.addToCache(s.baseTexture, n), m.addToCache(s, n)), s;
    }, m.fromBuffer = function(t, e, i, r) {
        return new m(f.fromBuffer(t, e, i, r));
    }, m.fromLoader = function(t, e, i) {
        t = new pi(t);
        t.url = e;
        t = new m(new f(t, {
            scaleMode: E.SCALE_MODE,
            resolution: fe(e)
        }));
        return f.addToCache(t.baseTexture, i = i || e), m.addToCache(t, i), i !== e && (f.addToCache(t.baseTexture, e), 
        m.addToCache(t, e)), t;
    }, m.addToCache = function(t, e) {
        e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), ae[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"), 
        ae[e] = t);
    }, m.removeFromCache = function(t) {
        if ("string" == typeof t) {
            var e, i = ae[t];
            if (i) return -1 < (e = i.textureCacheIds.indexOf(t)) && i.textureCacheIds.splice(e, 1), 
            delete ae[t], i;
        } else if (t && t.textureCacheIds) {
            for (var r = 0; r < t.textureCacheIds.length; ++r) ae[t.textureCacheIds[r]] === t && delete ae[t.textureCacheIds[r]];
            return t.textureCacheIds.length = 0, t;
        }
        return null;
    }, c.resolution.get = function() {
        return this.baseTexture.resolution;
    }, c.frame.get = function() {
        return this._frame;
    }, c.frame.set = function(t) {
        this._frame = t, this.noFrame = !1;
        var e = t.x, i = t.y, r = t.width, n = t.height, s = e + r > this.baseTexture.width, o = i + n > this.baseTexture.height;
        if (s || o) throw e = "X: " + e + " + " + r + " = " + (e + r) + " > " + this.baseTexture.width, 
        i = "Y: " + i + " + " + n + " = " + (i + n) + " > " + this.baseTexture.height, new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + e + " " + (s && o ? "and" : "or") + " " + i);
        this.valid = r && n && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), 
        this.valid && this.updateUvs();
    }, c.rotate.get = function() {
        return this._rotate;
    }, c.rotate.set = function(t) {
        this._rotate = t, this.valid && this.updateUvs();
    }, c.width.get = function() {
        return this.orig.width;
    }, c.height.get = function() {
        return this.orig.height;
    }, Object.defineProperties(m.prototype, c), m);
    function m(t, e, i, r, n, s) {
        if (Wi.call(this), this.noFrame = !1, e || (this.noFrame = !0, e = new T(0, 0, 1, 1)), 
        t instanceof m && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = r, 
        this.valid = !1, this.requiresUpdate = !1, this._uvs = qi, this.uvMatrix = null, 
        this.orig = i || e, this._rotate = Number(n || 0), !0 === n) this._rotate = 2; else if (this._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        this.defaultAnchor = s ? new ge(s.x, s.y) : new ge(0, 0), this._updateID = 0, this.textureCacheIds = [], 
        t.valid ? this.noFrame ? t.valid && this.onBaseTextureUpdated(t) : this.frame = e : t.once("loaded", this.onBaseTextureUpdated, this), 
        this.noFrame && t.on("update", this.onBaseTextureUpdated, this);
    }
    function Ki(t) {
        t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {};
    }
    w.EMPTY = new w(new f()), Ki(w.EMPTY), Ki(w.EMPTY.baseTexture), w.WHITE = ((d = document.createElement("canvas")).width = 16, 
    d.height = 16, (a = d.getContext("2d")).fillStyle = "white", a.fillRect(0, 0, 16, 16), 
    new w(new f(new Ii(d)))), Ki(w.WHITE), Ki(w.WHITE.baseTexture);
    (Zi = w) && (Qi.__proto__ = Zi), ((Qi.prototype = Object.create(Zi && Zi.prototype)).constructor = Qi).prototype.resize = function(t, e, i) {
        void 0 === i && (i = !0), t = Math.ceil(t), e = Math.ceil(e), this.valid = 0 < t && 0 < e, 
        this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, 
        i && this.baseTexture.resize(t, e), this.updateUvs();
    }, Qi.prototype.setResolution = function(t) {
        var e = this.baseTexture;
        e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1));
    }, Qi.create = function(t) {
        return new Qi(new Yi(t = "number" == typeof t ? {
            width: t,
            height: arguments[1],
            scaleMode: arguments[2],
            resolution: arguments[3]
        } : t));
    };
    var Zi, Ji = Qi;
    function Qi(t, e) {
        var i, r, n, s, o = null;
        t instanceof Yi || (i = arguments[1], r = arguments[2], n = arguments[3], s = arguments[4], 
        console.warn("Please use RenderTexture.create(" + i + ", " + r + ") instead of the ctor directly."), 
        o = arguments[0], e = null, t = new Yi({
            width: i,
            height: r,
            scaleMode: n,
            resolution: s
        })), Zi.call(this, t, e), this.legacyRenderer = o, this.valid = !0, this.filterFrame = null, 
        this.filterPoolKey = null, this.updateUvs();
    }
    function $i(t) {
        this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, 
        this._pixelsWidth = 0, this._pixelsHeight = 0;
    }
    function tr(t, e, i, r, n, s, o) {
        void 0 === i && (i = !1), void 0 === r && (r = 5126), this.buffer = t, this.size = e, 
        this.normalized = i, this.type = r, this.stride = n, this.start = s, this.instance = o;
    }
    $i.prototype.createTexture = function(t, e) {
        t = new Yi(Object.assign({
            width: t,
            height: e,
            resolution: 1
        }, this.textureOptions));
        return new Ji(t);
    }, $i.prototype.getOptimalTexture = function(t, e, i) {
        var r = $i.SCREEN_KEY, n = (t *= i = void 0 === i ? 1 : i, e *= i, this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight || (r = (65535 & (t = re(t))) << 16 | 65535 & (e = re(e))), 
        this.texturePool[r] || (this.texturePool[r] = []), this.texturePool[r].pop());
        return (n = n || this.createTexture(t, e)).filterPoolKey = r, n.setResolution(i), 
        n;
    }, $i.prototype.getFilterTexture = function(t, e) {
        e = this.getOptimalTexture(t.width, t.height, e || t.resolution);
        return e.filterFrame = t.filterFrame, e;
    }, $i.prototype.returnTexture = function(t) {
        var e = t.filterPoolKey;
        t.filterFrame = null, this.texturePool[e].push(t);
    }, $i.prototype.returnFilterTexture = function(t) {
        this.returnTexture(t);
    }, $i.prototype.clear = function(t) {
        if (t = !1 !== t) for (var e in this.texturePool) {
            var i = this.texturePool[e];
            if (i) for (var r = 0; r < i.length; r++) i[r].destroy(!0);
        }
        this.texturePool = {};
    }, $i.prototype.setScreenSize = function(t) {
        if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
            var e = $i.SCREEN_KEY, i = this.texturePool[e];
            if (this.enableFullScreen = 0 < t.width && 0 < t.height, i) for (var r = 0; r < i.length; r++) i[r].destroy(!0);
            this.texturePool[e] = [], this._pixelsWidth = t.width, this._pixelsHeight = t.height;
        }
    }, $i.SCREEN_KEY = "screen";
    function b(t, e, i) {
        void 0 === e && (e = !0), void 0 === i && (i = !1), this.data = t || new Float32Array(1), 
        this._glBuffers = {}, this._updateID = 0, this.index = i, this.static = e, this.id = er++, 
        this.disposeRunner = new ii("disposeBuffer", 2);
    }
    tr.prototype.destroy = function() {
        this.buffer = null;
    }, tr.from = function(t, e, i, r, n) {
        return new tr(t, e, i, r, n);
    };
    var er = 0;
    function ir(t) {
        if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
        if (2 === t.BYTES_PER_ELEMENT) {
            if (t instanceof Uint16Array) return "Uint16Array";
        } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
        return null;
    }
    b.prototype.update = function(t) {
        this.data = t || this.data, this._updateID++;
    }, b.prototype.dispose = function() {
        this.disposeRunner.run(this, !1);
    }, b.prototype.destroy = function() {
        this.dispose(), this.data = null;
    }, b.from = function(t) {
        return t instanceof Array && (t = new Float32Array(t)), new b(t);
    };
    var rr = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array
    };
    function nr(t, e) {
        void 0 === e && (e = {}), this.buffers = t = void 0 === t ? [] : t, this.indexBuffer = null, 
        this.attributes = e, this.glVertexArrayObjects = {}, this.id = ar++, this.instanced = !1, 
        this.instanceCount = 1, this.disposeRunner = new ii("disposeGeometry", 2), this.refCount = 0;
    }
    var sr, or = {
        5126: 4,
        5123: 2,
        5121: 1
    }, ar = 0, hr = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array
    }, ur = (nr.prototype.addAttribute = function(t, e, i, r, n, s, o, a) {
        if (void 0 === r && (r = !1), void 0 === a && (a = !1), !e) throw new Error("You must pass a buffer when creating an attribute");
        e.data || (e instanceof Array && (e = new Float32Array(e)), e = new b(e));
        var h = t.split("|");
        if (1 < h.length) for (var u = 0; u < h.length; u++) this.addAttribute(h[u], e, i, r, n); else {
            var l = this.buffers.indexOf(e);
            -1 === l && (this.buffers.push(e), l = this.buffers.length - 1), this.attributes[t] = new tr(l, i, r, n, s, o, a), 
            this.instanced = this.instanced || a;
        }
        return this;
    }, nr.prototype.getAttribute = function(t) {
        return this.attributes[t];
    }, nr.prototype.getBuffer = function(t) {
        return this.buffers[this.getAttribute(t).buffer];
    }, nr.prototype.addIndex = function(t) {
        return t.data || (t instanceof Array && (t = new Uint16Array(t)), t = new b(t)), 
        t.index = !0, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), 
        this;
    }, nr.prototype.getIndex = function() {
        return this.indexBuffer;
    }, nr.prototype.interleave = function() {
        if (!(1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer)) {
            var t, e = [], i = [], r = new b();
            for (t in this.attributes) {
                var n = this.attributes[t], s = this.buffers[n.buffer];
                e.push(s.data), i.push(n.size * or[n.type] / 4), n.buffer = 0;
            }
            for (r.data = function(t, e) {
                for (var i = 0, r = 0, n = {}, s = 0; s < t.length; s++) r += e[s], i += t[s].length;
                for (var o = new ArrayBuffer(4 * i), a = null, h = 0, u = 0; u < t.length; u++) {
                    var l = e[u], c = t[u], d = ir(c);
                    n[d] || (n[d] = new rr[d](o));
                    for (var a = n[d], p = 0; p < c.length; p++) a[(p / l | 0) * r + h + p % l] = c[p];
                    h += l;
                }
                return new Float32Array(o);
            }(e, i), t = 0; t < this.buffers.length; t++) this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
            this.buffers = [ r ], this.indexBuffer && this.buffers.push(this.indexBuffer);
        }
        return this;
    }, nr.prototype.getSize = function() {
        for (var t in this.attributes) {
            t = this.attributes[t];
            return this.buffers[t.buffer].data.length / (t.stride / 4 || t.size);
        }
        return 0;
    }, nr.prototype.dispose = function() {
        this.disposeRunner.run(this, !1);
    }, nr.prototype.destroy = function() {
        this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null;
    }, nr.prototype.clone = function() {
        for (var t, e = new nr(), i = 0; i < this.buffers.length; i++) e.buffers[i] = new b(this.buffers[i].data.slice());
        for (t in this.attributes) {
            var r = this.attributes[t];
            e.attributes[t] = new tr(r.buffer, r.size, r.normalized, r.type, r.stride, r.start, r.instance);
        }
        return this.indexBuffer && (e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)], 
        e.indexBuffer.index = !0), e;
    }, nr.merge = function(t) {
        for (var e = new nr(), i = [], r = [], n = [], s = 0; s < t.length; s++) for (var o = t[s], a = 0; a < o.buffers.length; a++) r[a] = r[a] || 0, 
        r[a] += o.buffers[a].data.length, n[a] = 0;
        for (var h = 0; h < o.buffers.length; h++) i[h] = new (hr[ir(o.buffers[h].data)])(r[h]), 
        e.buffers[h] = new b(i[h]);
        for (var u = 0; u < t.length; u++) {
            o = t[u];
            for (var l = 0; l < o.buffers.length; l++) i[l].set(o.buffers[l].data, n[l]), n[l] += o.buffers[l].data.length;
        }
        if (e.attributes = o.attributes, o.indexBuffer) {
            e.indexBuffer = e.buffers[o.buffers.indexOf(o.indexBuffer)], e.indexBuffer.index = !0;
            for (var c, d = 0, p = 0, f = 0, m = 0, g = 0; g < o.buffers.length; g++) if (o.buffers[g] !== o.indexBuffer) {
                m = g;
                break;
            }
            for (c in o.attributes) {
                var y = o.attributes[c];
                (0 | y.buffer) === m && (p += y.size * or[y.type] / 4);
            }
            for (var _ = 0; _ < t.length; _++) {
                for (var v = t[_].indexBuffer.data, x = 0; x < v.length; x++) e.indexBuffer.data[x + f] += d;
                d += o.buffers[m].data.length / p, f += v.length;
            }
        }
        return e;
    }, (sr = nr) && (lr.__proto__ = sr), (lr.prototype = Object.create(sr && sr.prototype)).constructor = lr);
    function lr() {
        sr.call(this), this.addAttribute("aVertexPosition", [ 0, 0, 1, 0, 1, 1, 0, 1 ]).addIndex([ 0, 1, 3, 2 ]);
    }
    (cr = nr) && (pr.__proto__ = cr), ((pr.prototype = Object.create(cr && cr.prototype)).constructor = pr).prototype.map = function(t, e) {
        var i;
        return this.uvs[0] = 0, this.uvs[1] = 0, this.uvs[2] = 0 + e.width / t.width, this.uvs[3] = 0, 
        this.uvs[4] = 0 + e.width / t.width, this.uvs[5] = 0 + e.height / t.height, this.uvs[6] = 0, 
        this.uvs[7] = 0 + e.height / t.height, t = e.x, i = e.y, this.vertices[0] = t, this.vertices[1] = i, 
        this.vertices[2] = t + e.width, this.vertices[3] = i, this.vertices[4] = t + e.width, 
        this.vertices[5] = i + e.height, this.vertices[6] = t, this.vertices[7] = i + e.height, 
        this.invalidate(), this;
    }, pr.prototype.invalidate = function() {
        return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
    };
    var cr, dr = pr;
    function pr() {
        cr.call(this), this.vertices = new Float32Array([ -1, -1, 1, -1, 1, 1, -1, 1 ]), 
        this.uvs = new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), this.vertexBuffer = new b(this.vertices), 
        this.uvBuffer = new b(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([ 0, 1, 2, 0, 2, 3 ]);
    }
    function fr(t, e) {
        this.uniforms = t, this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = yr++, 
        this.static = !!e;
    }
    function mr() {
        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, 
        this.sourceFrame = new T(), this.destinationFrame = new T(), this.filters = [];
    }
    var gr, yr = 0, _r = (fr.prototype.update = function() {
        this.dirtyId++;
    }, fr.prototype.add = function(t, e, i) {
        this.uniforms[t] = new fr(e, i);
    }, fr.from = function(t, e) {
        return new fr(t, e);
    }, mr.prototype.clear = function() {
        this.target = null, this.filters = null, this.renderTexture = null;
    }, (gr = Ui) && (vr.__proto__ = gr), ((vr.prototype = Object.create(gr && gr.prototype)).constructor = vr).prototype.push = function(t, e) {
        for (var i = this.renderer, r = this.defaultFilterStack, n = this.statePool.pop() || new mr(), s = e[0].resolution, o = e[0].padding, a = e[0].autoFit, h = e[0].legacy, u = 1; u < e.length; u++) var l = e[u], s = Math.min(s, l.resolution), o = Math.max(o, l.padding), a = a || l.autoFit, h = h || l.legacy;
        1 === r.length && (this.defaultFilterStack[0].renderTexture = i.renderTexture.current), 
        r.push(n), n.resolution = s, n.legacy = h, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), 
        n.sourceFrame.pad(o), a && n.sourceFrame.fit(this.renderer.renderTexture.sourceFrame), 
        n.sourceFrame.ceil(s), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, s), 
        n.filters = e, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height, 
        n.renderTexture.filterFrame = n.sourceFrame, i.renderTexture.bind(n.renderTexture, n.sourceFrame), 
        i.renderTexture.clear();
    }, vr.prototype.pop = function() {
        var t = this.defaultFilterStack, e = t.pop(), i = e.filters, r = (this.activeState = e, 
        this.globalUniforms.uniforms), n = (r.outputFrame = e.sourceFrame, r.resolution = e.resolution, 
        r.inputSize), s = r.inputPixel, o = r.inputClamp, n = (n[0] = e.destinationFrame.width, 
        n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], s[0] = n[0] * e.resolution, 
        s[1] = n[1] * e.resolution, s[2] = 1 / s[0], s[3] = 1 / s[1], o[0] = .5 * s[2], 
        o[1] = .5 * s[3], o[2] = e.sourceFrame.width * n[2] - .5 * s[2], o[3] = e.sourceFrame.height * n[3] - .5 * s[3], 
        e.legacy && ((o = r.filterArea)[0] = e.destinationFrame.width, o[1] = e.destinationFrame.height, 
        o[2] = e.sourceFrame.x, o[3] = e.sourceFrame.y, r.filterClamp = r.inputClamp), this.globalUniforms.update(), 
        t[t.length - 1]);
        if (1 === i.length) i[0].apply(this, e.renderTexture, n.renderTexture, !1, e), this.returnFilterTexture(e.renderTexture); else {
            for (var a = e.renderTexture, h = ((l = this.getOptimalFilterTexture(a.width, a.height, e.resolution)).filterFrame = a.filterFrame, 
            0), h = 0; h < i.length - 1; ++h) {
                i[h].apply(this, a, l, !0, e);
                var u = a, a = l, l = u;
            }
            i[h].apply(this, a, n.renderTexture, !1, e), this.returnFilterTexture(a), this.returnFilterTexture(l);
        }
        e.clear(), this.statePool.push(e);
    }, vr.prototype.applyFilter = function(t, e, i, r) {
        var n = this.renderer;
        n.renderTexture.bind(i, i ? i.filterFrame : null), r && n.renderTexture.clear(), 
        t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.state.set(t.state), 
        n.shader.bind(t), t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), 
        n.geometry.draw(G.DRAW_MODES.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(G.DRAW_MODES.TRIANGLE_STRIP));
    }, vr.prototype.calculateSpriteMatrix = function(t, e) {
        var i = this.activeState, r = i.sourceFrame, i = i.destinationFrame, n = e._texture.orig, t = t.set(i.width, 0, 0, i.height, r.x, r.y), i = e.worldTransform.copyTo(l.TEMP_MATRIX);
        return i.invert(), t.prepend(i), t.scale(1 / n.width, 1 / n.height), t.translate(e.anchor.x, e.anchor.y), 
        t;
    }, vr.prototype.destroy = function() {
        this.texturePool.clear(!1);
    }, vr.prototype.getOptimalFilterTexture = function(t, e, i) {
        return this.texturePool.getOptimalTexture(t, e, i = void 0 === i ? 1 : i);
    }, vr.prototype.getFilterTexture = function(t, e) {
        "number" == typeof t && (i = t, t = e, e = i), t = t || this.activeState.renderTexture;
        var i = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution);
        return i.filterFrame = t.filterFrame, i;
    }, vr.prototype.returnFilterTexture = function(t) {
        this.texturePool.returnTexture(t);
    }, vr.prototype.emptyPool = function() {
        this.texturePool.clear(!0);
    }, vr.prototype.resize = function() {
        this.texturePool.setScreenSize(this.renderer.view);
    }, vr);
    function vr(t) {
        gr.call(this, t), this.defaultFilterStack = [ {} ], this.texturePool = new $i(), 
        this.texturePool.setScreenSize(t.view), this.statePool = [], this.quad = new ur(), 
        this.quadUv = new dr(), this.tempRect = new T(), this.activeState = {}, this.globalUniforms = new fr({
            outputFrame: this.tempRect,
            inputSize: new Float32Array(4),
            inputPixel: new Float32Array(4),
            inputClamp: new Float32Array(4),
            resolution: 1,
            filterArea: new Float32Array(4),
            filterClamp: new Float32Array(4)
        }, !0), this._pixelsWidth = t.view.width, this._pixelsHeight = t.view.height;
    }
    function xr(t) {
        this.renderer = t;
    }
    xr.prototype.flush = function() {}, xr.prototype.destroy = function() {
        this.renderer = null;
    }, xr.prototype.start = function() {}, xr.prototype.stop = function() {
        this.flush();
    }, xr.prototype.render = function(t) {}, (br = Ui) && (Tr.__proto__ = br), ((Tr.prototype = Object.create(br && br.prototype)).constructor = Tr).prototype.setObjectRenderer = function(t) {
        this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, 
        this.currentRenderer.start());
    }, Tr.prototype.flush = function() {
        this.setObjectRenderer(this.emptyRenderer);
    }, Tr.prototype.reset = function() {
        this.setObjectRenderer(this.emptyRenderer);
    }, Tr.prototype.copyBoundTextures = function(t, e) {
        for (var i = this.renderer.texture.boundTextures, r = e - 1; 0 <= r; --r) t[r] = i[r] || null, 
        t[r] && (t[r]._batchLocation = r);
    }, Tr.prototype.boundArray = function(t, e, i, r) {
        for (var n = t.elements, s = t.ids, o = t.count, a = 0, h = 0; h < o; h++) {
            var u = n[h], l = u._batchLocation;
            if (0 <= l && l < r && e[l] === u) s[h] = l; else for (;a < r; ) {
                var c = e[a];
                if (!c || c._batchEnabled !== i || c._batchLocation !== a) {
                    s[h] = a, e[u._batchLocation = a] = u;
                    break;
                }
                a++;
            }
        }
    };
    var br, Er = Tr;
    function Tr(t) {
        br.call(this, t), this.emptyRenderer = new xr(t), this.currentRenderer = this.emptyRenderer;
    }
    E.PREFER_ENV = W.any ? G.ENV.WEBGL : G.ENV.WEBGL2, E.STRICT_TEXTURE_CACHE = !1;
    var wr, Sr = 0, Ir = ((wr = Ui) && (Pr.__proto__ = wr), (Pr.prototype = Object.create(wr && wr.prototype)).constructor = Pr, 
    (Fi = {
        isLost: {
            configurable: !0
        }
    }).isLost.get = function() {
        return !this.gl || this.gl.isContextLost();
    }, Pr.prototype.contextChange = function(t) {
        this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = Sr++, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext();
    }, Pr.prototype.initFromContext = function(t) {
        this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = Sr++, 
        this.renderer.runners.contextChange.run(t);
    }, Pr.prototype.initFromOptions = function(t) {
        t = this.createContext(this.renderer.view, t);
        this.initFromContext(t);
    }, Pr.prototype.createContext = function(t, e) {
        var i;
        if (i = E.PREFER_ENV >= G.ENV.WEBGL2 ? t.getContext("webgl2", e) : i) this.webGLVersion = 2; else if (this.webGLVersion = 1, 
        !(i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        return this.gl = i, this.getExtensions(), i;
    }, Pr.prototype.getExtensions = function() {
        var t = this.gl;
        1 === this.webGLVersion ? Object.assign(this.extensions, {
            drawBuffers: t.getExtension("WEBGL_draw_buffers"),
            depthTexture: t.getExtension("WEBKIT_WEBGL_depth_texture"),
            loseContext: t.getExtension("WEBGL_lose_context"),
            vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
            anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
            uint32ElementIndex: t.getExtension("OES_element_index_uint"),
            floatTexture: t.getExtension("OES_texture_float"),
            floatTextureLinear: t.getExtension("OES_texture_float_linear"),
            textureHalfFloat: t.getExtension("OES_texture_half_float"),
            textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
        }) : 2 === this.webGLVersion && Object.assign(this.extensions, {
            anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
            colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
            floatTextureLinear: t.getExtension("OES_texture_float_linear")
        });
    }, Pr.prototype.handleContextLost = function(t) {
        t.preventDefault();
    }, Pr.prototype.handleContextRestored = function() {
        this.renderer.runners.contextChange.run(this.gl);
    }, Pr.prototype.destroy = function() {
        var t = this.renderer.view;
        t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), 
        this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext();
    }, Pr.prototype.postrender = function() {
        this.renderer.renderingToScreen && this.gl.flush();
    }, Pr.prototype.validateContext = function(t) {
        t.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
    }, Object.defineProperties(Pr.prototype, Fi), Pr);
    function Pr(t) {
        wr.call(this, t), this.webGLVersion = 1, this.extensions = {}, this.handleContextLost = this.handleContextLost.bind(this), 
        this.handleContextRestored = this.handleContextRestored.bind(this), t.view.addEventListener("webglcontextlost", this.handleContextLost, !1), 
        t.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1);
    }
    (Ar = Ui) && (Dr.__proto__ = Ar), c = {
        size: {
            configurable: !0
        }
    }, ((Dr.prototype = Object.create(Ar && Ar.prototype)).constructor = Dr).prototype.contextChange = function() {
        var e, t, i = this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, 
        this.viewport = new T(), this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 
        1 === this.renderer.context.webGLVersion && (e = this.renderer.context.extensions.drawBuffers, 
        t = this.renderer.context.extensions.depthTexture, E.PREFER_ENV === G.ENV.WEBGL_LEGACY && (t = e = null), 
        e ? i.drawBuffers = function(t) {
            return e.drawBuffersWEBGL(t);
        } : (this.hasMRT = !1, i.drawBuffers = function() {}), t || (this.writeDepthTexture = !1));
    }, Dr.prototype.bind = function(t, e) {
        var i = this.gl;
        if (t) {
            var r = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
            this.current !== t && (this.current = t, i.bindFramebuffer(i.FRAMEBUFFER, r.framebuffer)), 
            r.dirtyId !== t.dirtyId && (r.dirtyId = t.dirtyId, r.dirtyFormat !== t.dirtyFormat ? (r.dirtyFormat = t.dirtyFormat, 
            this.updateFramebuffer(t)) : r.dirtySize !== t.dirtySize && (r.dirtySize = t.dirtySize, 
            this.resizeFramebuffer(t)));
            for (var n = 0; n < t.colorTextures.length; n++) t.colorTextures[n].texturePart ? this.renderer.texture.unbind(t.colorTextures[n].texture) : this.renderer.texture.unbind(t.colorTextures[n]);
            t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, t.width, t.height);
        } else this.current && (this.current = null, i.bindFramebuffer(i.FRAMEBUFFER, null)), 
        e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
    }, Dr.prototype.setViewport = function(t, e, i, r) {
        var n = this.viewport;
        n.width === i && n.height === r && n.x === t && n.y === e || (n.x = t, n.y = e, 
        n.width = i, n.height = r, this.gl.viewport(t, e, i, r));
    }, c.size.get = function() {
        return this.current ? {
            x: 0,
            y: 0,
            width: this.current.width,
            height: this.current.height
        } : {
            x: 0,
            y: 0,
            width: this.renderer.width,
            height: this.renderer.height
        };
    }, Dr.prototype.clear = function(t, e, i, r) {
        var n = this.gl;
        n.clearColor(t, e, i, r), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
    }, Dr.prototype.initFramebuffer = function(t) {
        var e = {
            framebuffer: this.gl.createFramebuffer(),
            stencil: null,
            dirtyId: 0,
            dirtyFormat: 0,
            dirtySize: 0
        };
        return t.glFramebuffers[this.CONTEXT_UID] = e, this.managedFramebuffers.push(t), 
        t.disposeRunner.add(this), e;
    }, Dr.prototype.resizeFramebuffer = function(t) {
        for (var e = this.gl, i = t.glFramebuffers[this.CONTEXT_UID], r = (i.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, i.stencil), 
        e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height)), t.colorTextures), n = 0; n < r.length; n++) this.renderer.texture.bind(r[n], 0);
        t.depthTexture && this.renderer.texture.bind(t.depthTexture, 0);
    }, Dr.prototype.updateFramebuffer = function(t) {
        for (var e, i = this.gl, r = t.glFramebuffers[this.CONTEXT_UID], n = t.colorTextures.length, s = (i.drawBuffers || (n = Math.min(n, 1)), 
        []), o = 0; o < n; o++) {
            var a = t.colorTextures[o];
            a.texturePart ? (this.renderer.texture.bind(a.texture, 0), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + o, i.TEXTURE_CUBE_MAP_NEGATIVE_X + a.side, a.texture._glTextures[this.CONTEXT_UID].texture, 0)) : (this.renderer.texture.bind(a, 0), 
            i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + o, i.TEXTURE_2D, a._glTextures[this.CONTEXT_UID].texture, 0)), 
            s.push(i.COLOR_ATTACHMENT0 + o);
        }
        1 < s.length && i.drawBuffers(s), t.depthTexture && this.writeDepthTexture && (e = t.depthTexture, 
        this.renderer.texture.bind(e, 0), i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, e._glTextures[this.CONTEXT_UID].texture, 0)), 
        r.stencil || !t.stencil && !t.depth || (r.stencil = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, r.stencil), 
        i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t.width, t.height), t.depthTexture) || i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, r.stencil);
    }, Dr.prototype.disposeFramebuffer = function(t, e) {
        var i, r = t.glFramebuffers[this.CONTEXT_UID], n = this.gl;
        r && (delete t.glFramebuffers[this.CONTEXT_UID], 0 <= (i = this.managedFramebuffers.indexOf(t)) && this.managedFramebuffers.splice(i, 1), 
        t.disposeRunner.remove(this), e || (n.deleteFramebuffer(r.framebuffer), r.stencil && n.deleteRenderbuffer(r.stencil)));
    }, Dr.prototype.disposeAll = function(t) {
        var e = this.managedFramebuffers;
        this.managedFramebuffers = [];
        for (var i = 0; i < e.length; i++) this.disposeFramebuffer(e[i], t);
    }, Dr.prototype.forceStencil = function() {
        var t, e, i, r, n = this.current;
        n && (t = n.glFramebuffers[this.CONTEXT_UID]) && !t.stencil && (n.enableStencil(), 
        e = n.width, n = n.height, r = (i = this.gl).createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, r), 
        i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, e, n), t.stencil = r, i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, r));
    }, Dr.prototype.reset = function() {
        this.current = this.unknownFramebuffer, this.viewport = new T();
    }, Object.defineProperties(Dr.prototype, c);
    var Ar, Or = Dr;
    function Dr(t) {
        Ar.call(this, t), this.managedFramebuffers = [], this.unknownFramebuffer = new Hi(10, 10);
    }
    function Mr(t) {
        this.buffer = t, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
    }
    var Cr, Rr = {
        5126: 4,
        5123: 2,
        5121: 1
    }, Lr = ((Cr = Ui) && (Nr.__proto__ = Cr), ((Nr.prototype = Object.create(Cr && Cr.prototype)).constructor = Nr).prototype.contextChange = function() {
        this.disposeAll(!0);
        var e, s, t = this.gl = this.renderer.gl, i = this.renderer.context;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID, t.createVertexArray || (e = this.renderer.context.extensions.vertexArrayObject, 
        (e = E.PREFER_ENV === G.ENV.WEBGL_LEGACY ? null : e) ? (t.createVertexArray = function() {
            return e.createVertexArrayOES();
        }, t.bindVertexArray = function(t) {
            return e.bindVertexArrayOES(t);
        }, t.deleteVertexArray = function(t) {
            return e.deleteVertexArrayOES(t);
        }) : (this.hasVao = !1, t.createVertexArray = function() {}, t.bindVertexArray = function() {}, 
        t.deleteVertexArray = function() {})), t.vertexAttribDivisor || ((s = t.getExtension("ANGLE_instanced_arrays")) ? (t.vertexAttribDivisor = function(t, e) {
            return s.vertexAttribDivisorANGLE(t, e);
        }, t.drawElementsInstanced = function(t, e, i, r, n) {
            return s.drawElementsInstancedANGLE(t, e, i, r, n);
        }, t.drawArraysInstanced = function(t, e, i, r) {
            return s.drawArraysInstancedANGLE(t, e, i, r);
        }) : this.hasInstance = !1), this.canUseUInt32ElementIndex = 2 === i.webGLVersion || !!i.extensions.uint32ElementIndex;
    }, Nr.prototype.bind = function(t, e) {
        e = e || this.renderer.shader.shader;
        var i = this.gl, r = t.glVertexArrayObjects[this.CONTEXT_UID], r = (r || ((this.managedGeometries[t.id] = t).disposeRunner.add(this), 
        t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}), r[e.program.id] || this.initGeometryVao(t, e.program));
        this._activeGeometry = t, this._activeVao !== r && (this._activeVao = r, this.hasVao ? i.bindVertexArray(r) : this.activateVao(t, e.program)), 
        this.updateBuffers();
    }, Nr.prototype.reset = function() {
        this.unbind();
    }, Nr.prototype.updateBuffers = function() {
        for (var t = this._activeGeometry, e = this.gl, i = 0; i < t.buffers.length; i++) {
            var r, n, s = t.buffers[i], o = s._glBuffers[this.CONTEXT_UID];
            s._updateID !== o.updateID && (o.updateID = s._updateID, r = s.index ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER, 
            e.bindBuffer(r, o.buffer), (this._boundBuffer = o).byteLength >= s.data.byteLength ? e.bufferSubData(r, 0, s.data) : (n = s.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW, 
            o.byteLength = s.data.byteLength, e.bufferData(r, s.data, n)));
        }
    }, Nr.prototype.checkCompatibility = function(t, e) {
        var i, r = t.attributes;
        for (i in e.attributeData) if (!r[i]) throw new Error('shader and geometry incompatible, geometry missing the "' + i + '" attribute');
    }, Nr.prototype.getSignature = function(t, e) {
        var i, r = t.attributes, n = e.attributeData, s = [ "g", t.id ];
        for (i in r) n[i] && s.push(i);
        return s.join("-");
    }, Nr.prototype.initGeometryVao = function(t, e) {
        this.checkCompatibility(t, e);
        var i = this.gl, r = this.CONTEXT_UID, n = this.getSignature(t, e), s = t.glVertexArrayObjects[this.CONTEXT_UID], o = s[n];
        if (o) return s[e.id] = o;
        var a, h, u, l = t.buffers, c = t.attributes, d = {}, p = {};
        for (a in l) p[a] = d[a] = 0;
        for (h in c) !c[h].size && e.attributeData[h] ? c[h].size = e.attributeData[h].size : c[h].size || console.warn("PIXI Geometry attribute '" + h + "' size cannot be determined (likely the bound shader does not have the attribute)"), 
        d[c[h].buffer] += c[h].size * Rr[c[h].type];
        for (u in c) {
            var f = c[u], m = f.size;
            void 0 === f.stride && (d[f.buffer] === m * Rr[f.type] ? f.stride = 0 : f.stride = d[f.buffer]), 
            void 0 === f.start && (f.start = p[f.buffer], p[f.buffer] += m * Rr[f.type]);
        }
        o = i.createVertexArray(), i.bindVertexArray(o);
        for (var g = 0; g < l.length; g++) {
            var y = l[g];
            y._glBuffers[r] || (y._glBuffers[r] = new Mr(i.createBuffer()), (this.managedBuffers[y.id] = y).disposeRunner.add(this)), 
            y._glBuffers[r].refCount++;
        }
        return this.activateVao(t, e), this._activeVao = o, s[e.id] = o, s[n] = o;
    }, Nr.prototype.disposeBuffer = function(t, e) {
        var i, r;
        this.managedBuffers[t.id] && (delete this.managedBuffers[t.id], i = t._glBuffers[this.CONTEXT_UID], 
        r = this.gl, t.disposeRunner.remove(this), i) && (e || r.deleteBuffer(i.buffer), 
        delete t._glBuffers[this.CONTEXT_UID]);
    }, Nr.prototype.disposeGeometry = function(t, e) {
        if (this.managedGeometries[t.id]) {
            delete this.managedGeometries[t.id];
            var i = t.glVertexArrayObjects[this.CONTEXT_UID], r = this.gl, n = t.buffers;
            if (t.disposeRunner.remove(this), i) {
                for (var s = 0; s < n.length; s++) {
                    var o = n[s]._glBuffers[this.CONTEXT_UID];
                    o.refCount--, 0 !== o.refCount || e || this.disposeBuffer(n[s], e);
                }
                if (!e) for (var a in i) "g" === a[0] && (a = i[a], this._activeVao === a && this.unbind(), 
                r.deleteVertexArray(a));
                delete t.glVertexArrayObjects[this.CONTEXT_UID];
            }
        }
    }, Nr.prototype.disposeAll = function(t) {
        for (var e = Object.keys(this.managedGeometries), i = 0; i < e.length; i++) this.disposeGeometry(this.managedGeometries[e[i]], t);
        for (var e = Object.keys(this.managedBuffers), r = 0; r < e.length; r++) this.disposeBuffer(this.managedBuffers[e[r]], t);
    }, Nr.prototype.activateVao = function(t, e) {
        var i, r = this.gl, n = this.CONTEXT_UID, s = t.buffers, o = t.attributes, a = (t.indexBuffer && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.indexBuffer._glBuffers[n].buffer), 
        null);
        for (i in o) {
            var h = o[i], u = s[h.buffer]._glBuffers[n];
            if (e.attributeData[i]) {
                a !== u && (r.bindBuffer(r.ARRAY_BUFFER, u.buffer), a = u);
                u = e.attributeData[i].location;
                if (r.enableVertexAttribArray(u), r.vertexAttribPointer(u, h.size, h.type || r.FLOAT, h.normalized, h.stride, h.start), 
                h.instance) {
                    if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                    r.vertexAttribDivisor(u, 1);
                }
            }
        }
    }, Nr.prototype.draw = function(t, e, i, r) {
        var n, s, o = this.gl, a = this._activeGeometry;
        return a.indexBuffer ? (s = 2 === (n = a.indexBuffer.data.BYTES_PER_ELEMENT) ? o.UNSIGNED_SHORT : o.UNSIGNED_INT, 
        2 === n || 4 === n && this.canUseUInt32ElementIndex ? a.instanced ? o.drawElementsInstanced(t, e || a.indexBuffer.data.length, s, (i || 0) * n, r || 1) : o.drawElements(t, e || a.indexBuffer.data.length, s, (i || 0) * n) : console.warn("unsupported index buffer type: uint32")) : a.instanced ? o.drawArraysInstanced(t, i, e || a.getSize(), r || 1) : o.drawArrays(t, i, e || a.getSize()), 
        this;
    }, Nr.prototype.unbind = function() {
        this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
    }, Nr);
    function Nr(t) {
        Cr.call(this, t), this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, 
        this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.boundBuffers = {}, 
        this.managedGeometries = {}, this.managedBuffers = {};
    }
    function Fr(t) {
        this.type = G.MASK_TYPES.NONE, this.autoDetect = !0, this.maskObject = t || null, 
        this.pooled = !1, this.isMaskData = !0, this._stencilCounter = 0, this._scissorCounter = 0, 
        this._scissorRect = null, this._target = null;
    }
    function Br(t, e, i, r) {
        var e = Ur(t, t.VERTEX_SHADER, e), i = Ur(t, t.FRAGMENT_SHADER, i), n = t.createProgram();
        if (t.attachShader(n, e), t.attachShader(n, i), r) for (var s in r) t.bindAttribLocation(n, r[s], s);
        return t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), 
        console.error("gl.VALIDATE_STATUS", t.getProgramParameter(n, t.VALIDATE_STATUS)), 
        console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(n) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(n)), 
        t.deleteProgram(n), n = null), t.deleteShader(e), t.deleteShader(i), n;
    }
    function Ur(t, e, i) {
        e = t.createShader(e);
        return t.shaderSource(e, i), t.compileShader(e), t.getShaderParameter(e, t.COMPILE_STATUS) ? e : (console.warn(i), 
        console.error(t.getShaderInfoLog(e)), null);
    }
    function kr(t, e) {
        switch (t) {
          case "float":
            return 0;

          case "vec2":
            return new Float32Array(2 * e);

          case "vec3":
            return new Float32Array(3 * e);

          case "vec4":
            return new Float32Array(4 * e);

          case "int":
          case "sampler2D":
          case "sampler2DArray":
            return 0;

          case "ivec2":
            return new Int32Array(2 * e);

          case "ivec3":
            return new Int32Array(3 * e);

          case "ivec4":
            return new Int32Array(4 * e);

          case "bool":
            return !1;

          case "bvec2":
            return Xr(2 * e);

          case "bvec3":
            return Xr(3 * e);

          case "bvec4":
            return Xr(4 * e);

          case "mat2":
            return new Float32Array([ 1, 0, 0, 1 ]);

          case "mat3":
            return new Float32Array([ 1, 0, 0, 0, 1, 0, 0, 0, 1 ]);

          case "mat4":
            return new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);
        }
        return null;
    }
    function Xr(t) {
        for (var e = new Array(t), i = 0; i < e.length; i++) e[i] = !1;
        return e;
    }
    Fr.prototype.reset = function() {
        this.pooled && (this.maskObject = null, this.type = G.MASK_TYPES.NONE, this.autoDetect = !0), 
        this._target = null;
    }, Fr.prototype.copyCountersOrReset = function(t) {
        t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, 
        this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, 
        this._scissorRect = null);
    };
    var jr, Hr = {}, Gr = Hr;
    function Yr() {
        var t, e;
        return (Gr === Hr || Gr && Gr.isContextLost()) && (t = document.createElement("canvas"), 
        (e = E.PREFER_ENV >= G.ENV.WEBGL2 ? t.getContext("webgl2", {}) : e) || ((e = t.getContext("webgl", {}) || t.getContext("experimental-webgl", {})) ? e.getExtension("WEBGL_draw_buffers") : e = null), 
        Gr = e), Gr;
    }
    function Vr(t, e, i) {
        return "precision" !== t.substring(0, 9) ? "precision " + (e === G.PRECISION.HIGH && i !== G.PRECISION.HIGH ? G.PRECISION.MEDIUM : e) + " float;\n" + t : i !== G.PRECISION.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t;
    }
    var zr = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1
    };
    var Wr = null, qr = {
        FLOAT: "float",
        FLOAT_VEC2: "vec2",
        FLOAT_VEC3: "vec3",
        FLOAT_VEC4: "vec4",
        INT: "int",
        INT_VEC2: "ivec2",
        INT_VEC3: "ivec3",
        INT_VEC4: "ivec4",
        BOOL: "bool",
        BOOL_VEC2: "bvec2",
        BOOL_VEC3: "bvec3",
        BOOL_VEC4: "bvec4",
        FLOAT_MAT2: "mat2",
        FLOAT_MAT3: "mat3",
        FLOAT_MAT4: "mat4",
        SAMPLER_2D: "sampler2D",
        SAMPLER_CUBE: "samplerCube",
        SAMPLER_2D_ARRAY: "sampler2DArray"
    };
    function Kr(t, e) {
        if (!Wr) {
            var i = Object.keys(qr);
            Wr = {};
            for (var r = 0; r < i.length; ++r) {
                var n = i[r];
                Wr[t[n]] = qr[n];
            }
        }
        return Wr[e];
    }
    var Zr = {
        float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
        vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
        vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
        vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
        int: "gl.uniform1i(location, v)",
        ivec2: "gl.uniform2i(location, v[0], v[1])",
        ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
        ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
        bool: "gl.uniform1i(location, v)",
        bvec2: "gl.uniform2i(location, v[0], v[1])",
        bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
        bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        sampler2D: "gl.uniform1i(location, v)",
        samplerCube: "gl.uniform1i(location, v)",
        sampler2DArray: "gl.uniform1i(location, v)"
    }, Jr = {
        float: "gl.uniform1fv(location, v)",
        vec2: "gl.uniform2fv(location, v)",
        vec3: "gl.uniform3fv(location, v)",
        vec4: "gl.uniform4fv(location, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        int: "gl.uniform1iv(location, v)",
        ivec2: "gl.uniform2iv(location, v)",
        ivec3: "gl.uniform3iv(location, v)",
        ivec4: "gl.uniform4iv(location, v)",
        bool: "gl.uniform1iv(location, v)",
        bvec2: "gl.uniform2iv(location, v)",
        bvec3: "gl.uniform3iv(location, v)",
        bvec4: "gl.uniform4iv(location, v)",
        sampler2D: "gl.uniform1iv(location, v)",
        samplerCube: "gl.uniform1iv(location, v)",
        sampler2DArray: "gl.uniform1iv(location, v)"
    };
    var Qr, $r = [ "precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}" ].join("\n");
    function tn(t, e) {
        if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
        for (var i = e.createShader(e.FRAGMENT_SHADER); ;) {
            var r = $r.replace(/%forloop%/gi, function(t) {
                for (var e = "", i = 0; i < t; ++i) 0 < i && (e += "\nelse "), i < t - 1 && (e += "if(test == " + i + ".0){}");
                return e;
            }(t));
            if (e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS)) break;
            t = t / 2 | 0;
        }
        return t;
    }
    function en(t, e, i) {
        void 0 === i && (i = "pixi-shader"), this.id = on++, this.vertexSrc = t || en.defaultVertexSrc, 
        this.fragmentSrc = e || en.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), 
        this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (i = i.replace(/\s+/g, "-"), 
        an[i] ? (an[i]++, i += "-" + an[i]) : an[i] = 1, this.vertexSrc = "#define SHADER_NAME " + i + "\n" + this.vertexSrc, 
        this.fragmentSrc = "#define SHADER_NAME " + i + "\n" + this.fragmentSrc, this.vertexSrc = Vr(this.vertexSrc, E.PRECISION_VERTEX, G.PRECISION.HIGH), 
        this.fragmentSrc = Vr(this.fragmentSrc, E.PRECISION_FRAGMENT, (jr || (jr = G.PRECISION.MEDIUM, 
        (t = Yr()) && t.getShaderPrecisionFormat && (t = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT), 
        jr = t.precision ? G.PRECISION.HIGH : G.PRECISION.MEDIUM)), jr))), this.extractData(this.vertexSrc, this.fragmentSrc), 
        this.glPrograms = {}, this.syncUniforms = null;
    }
    function rn(t, e) {
        for (var i in this.program = t, this.uniformGroup = e ? e instanceof fr ? e : new fr(e) : new fr({}), 
        t.uniformData) this.uniformGroup.uniforms[i] instanceof Array && (this.uniformGroup.uniforms[i] = new Float32Array(this.uniformGroup.uniforms[i]));
    }
    function nn() {
        this.data = 0, this.blendMode = G.BLEND_MODES.NORMAL, this.polygonOffset = 0, this.blend = !0;
    }
    var sn, on = 0, an = {}, a = {
        defaultVertexSrc: {
            configurable: !0
        },
        defaultFragmentSrc: {
            configurable: !0
        }
    }, Ii = (en.prototype.extractData = function(t, e) {
        var i = Yr();
        i ? (t = Br(i, t, e), this.attributeData = this.getAttributeData(t, i), this.uniformData = this.getUniformData(t, i), 
        i.deleteProgram(t)) : (this.uniformData = {}, this.attributeData = {});
    }, en.prototype.getAttributeData = function(t, e) {
        for (var i = {}, r = [], n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), s = 0; s < n; s++) {
            var o = e.getActiveAttrib(t, s), a = Kr(e, o.type), a = {
                type: a,
                name: o.name,
                size: zr[a],
                location: 0
            };
            i[o.name] = a, r.push(a);
        }
        r.sort(function(t, e) {
            return t.name > e.name ? 1 : -1;
        });
        for (var h = 0; h < r.length; h++) r[h].location = h;
        return i;
    }, en.prototype.getUniformData = function(t, e) {
        for (var i = {}, r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; n < r; n++) {
            var s = e.getActiveUniform(t, n), o = s.name.replace(/\[.*?\]/, ""), a = s.name.match(/\[.*?\]/, ""), h = Kr(e, s.type);
            i[o] = {
                type: h,
                size: s.size,
                isArray: a,
                value: kr(h, s.size)
            };
        }
        return i;
    }, a.defaultVertexSrc.get = function() {
        return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
    }, a.defaultFragmentSrc.get = function() {
        return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";
    }, en.from = function(t, e, i) {
        var r = t + e, n = oe[r];
        return n || (oe[r] = n = new en(t, e, i)), n;
    }, Object.defineProperties(en, a), {
        uniforms: {
            configurable: !0
        }
    }), d = (rn.prototype.checkUniformExists = function(t, e) {
        if (e.uniforms[t]) return !0;
        for (var i in e.uniforms) {
            i = e.uniforms[i];
            if (i.group && this.checkUniformExists(t, i)) return !0;
        }
        return !1;
    }, rn.prototype.destroy = function() {
        this.uniformGroup = null;
    }, Ii.uniforms.get = function() {
        return this.uniformGroup.uniforms;
    }, rn.from = function(t, e, i) {
        t = en.from(t, e);
        return new rn(t, i);
    }, Object.defineProperties(rn.prototype, Ii), {
        blend: {
            configurable: !0
        },
        offsets: {
            configurable: !0
        },
        culling: {
            configurable: !0
        },
        depthTest: {
            configurable: !0
        },
        clockwiseFrontFace: {
            configurable: !0
        },
        blendMode: {
            configurable: !0
        },
        polygonOffset: {
            configurable: !0
        }
    }), a = (d.blend.get = function() {
        return !!(1 & this.data);
    }, d.blend.set = function(t) {
        !!(1 & this.data) !== t && (this.data ^= 1);
    }, d.offsets.get = function() {
        return !!(2 & this.data);
    }, d.offsets.set = function(t) {
        !!(2 & this.data) !== t && (this.data ^= 2);
    }, d.culling.get = function() {
        return !!(4 & this.data);
    }, d.culling.set = function(t) {
        !!(4 & this.data) !== t && (this.data ^= 4);
    }, d.depthTest.get = function() {
        return !!(8 & this.data);
    }, d.depthTest.set = function(t) {
        !!(8 & this.data) !== t && (this.data ^= 8);
    }, d.clockwiseFrontFace.get = function() {
        return !!(16 & this.data);
    }, d.clockwiseFrontFace.set = function(t) {
        !!(16 & this.data) !== t && (this.data ^= 16);
    }, d.blendMode.get = function() {
        return this._blendMode;
    }, d.blendMode.set = function(t) {
        this.blend = t !== G.BLEND_MODES.NONE, this._blendMode = t;
    }, d.polygonOffset.get = function() {
        return this._polygonOffset;
    }, d.polygonOffset.set = function(t) {
        this.offsets = !!t, this._polygonOffset = t;
    }, nn.for2d = function() {
        var t = new nn();
        return t.depthTest = !1, t.blend = !0, t;
    }, Object.defineProperties(nn.prototype, d), (sn = rn) && (hn.__proto__ = sn), Fi = {
        blendMode: {
            configurable: !0
        }
    }, c = {
        defaultVertexSrc: {
            configurable: !0
        },
        defaultFragmentSrc: {
            configurable: !0
        }
    }, ((hn.prototype = Object.create(sn && sn.prototype)).constructor = hn).prototype.apply = function(t, e, i, r, n) {
        t.applyFilter(this, e, i, r, n);
    }, Fi.blendMode.get = function() {
        return this.state.blendMode;
    }, Fi.blendMode.set = function(t) {
        this.state.blendMode = t;
    }, c.defaultVertexSrc.get = function() {
        return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
    }, c.defaultFragmentSrc.get = function() {
        return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";
    }, Object.defineProperties(hn.prototype, Fi), Object.defineProperties(hn, c), hn);
    function hn(t, e, i) {
        t = en.from(t || hn.defaultVertexSrc, e || hn.defaultFragmentSrc);
        sn.call(this, t, i), this.padding = 0, this.resolution = E.FILTER_RESOLUTION, this.enabled = !0, 
        this.autoFit = !0, this.legacy = !!this.program.attributeData.aTextureCoord, this.state = new nn();
    }
    a.SOURCE_KEY_MAP = {};
    function un(t, e) {
        this._texture = t, this.mapCoord = new l(), this.uClampFrame = new Float32Array(4), 
        this.uClampOffset = new Float32Array(2), this._updateID = -1, this.clampOffset = 0, 
        this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1;
    }
    var ln, cn = new l(), Ii = {
        texture: {
            configurable: !0
        }
    }, dn = (Ii.texture.get = function() {
        return this._texture;
    }, Ii.texture.set = function(t) {
        this._texture = t, this._updateID = -1;
    }, un.prototype.multiplyUvs = function(t, e) {
        void 0 === e && (e = t);
        for (var i = this.mapCoord, r = 0; r < t.length; r += 2) {
            var n = t[r], s = t[r + 1];
            e[r] = n * i.a + s * i.c + i.tx, e[r + 1] = n * i.b + s * i.d + i.ty;
        }
        return e;
    }, un.prototype.update = function(t) {
        var e = this._texture;
        if (!e || !e.valid) return !1;
        if (!t && this._updateID === e._updateID) return !1;
        this._updateID = e._updateID;
        var t = e._uvs, t = (this.mapCoord.set(t.x1 - t.x0, t.y1 - t.y0, t.x3 - t.x0, t.y3 - t.y0, t.x0, t.y0), 
        e.orig), i = e.trim, t = (i && (cn.set(t.width / i.width, 0, 0, t.height / i.height, -i.x / i.width, -i.y / i.height), 
        this.mapCoord.append(cn)), e.baseTexture), i = this.uClampFrame, r = this.clampMargin / t.resolution, n = this.clampOffset;
        return i[0] = (e._frame.x + r + n) / t.width, i[1] = (e._frame.y + r + n) / t.height, 
        i[2] = (e._frame.x + e._frame.width - r + n) / t.width, i[3] = (e._frame.y + e._frame.height - r + n) / t.height, 
        this.uClampOffset[0] = n / t.realWidth, this.uClampOffset[1] = n / t.realHeight, 
        this.isSimple = e._frame.width === t.width && e._frame.height === t.height && 0 === e.rotate, 
        !0;
    }, Object.defineProperties(un.prototype, Ii), (ln = a) && (pn.__proto__ = ln), ((pn.prototype = Object.create(ln && ln.prototype)).constructor = pn).prototype.apply = function(t, e, i, r) {
        var n = this.maskSprite, s = this.maskSprite.texture;
        s.valid && (s.transform || (s.transform = new un(s, 0)), s.transform.update(), this.uniforms.npmAlpha = s.baseTexture.alphaMode ? 0 : 1, 
        this.uniforms.mask = s, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(s.transform.mapCoord), 
        this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = s.transform.uClampFrame, 
        t.applyFilter(this, e, i, r));
    }, pn);
    function pn(t) {
        var e = new l();
        ln.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n"), 
        t.renderable = !1, this.maskSprite = t, this.maskMatrix = e;
    }
    (fn = Ui) && (gn.__proto__ = fn), ((gn.prototype = Object.create(fn && fn.prototype)).constructor = gn).prototype.setMaskStack = function(t) {
        this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t);
    }, gn.prototype.push = function(t, e) {
        var i;
        switch (e.isMaskData || ((i = this.maskDataPool.pop() || new Fr()).pooled = !0, 
        i.maskObject = e, e = i), e.autoDetect && this.detect(e), e.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]), 
        e._target = t, e.type) {
          case G.MASK_TYPES.SCISSOR:
            this.maskStack.push(e), this.renderer.scissor.push(e);
            break;

          case G.MASK_TYPES.STENCIL:
            this.maskStack.push(e), this.renderer.stencil.push(e);
            break;

          case G.MASK_TYPES.SPRITE:
            e.copyCountersOrReset(null), this.pushSpriteMask(e), this.maskStack.push(e);
        }
    }, gn.prototype.pop = function(t) {
        var e = this.maskStack.pop();
        if (e && e._target === t) {
            switch (e.type) {
              case G.MASK_TYPES.SCISSOR:
                this.renderer.scissor.pop();
                break;

              case G.MASK_TYPES.STENCIL:
                this.renderer.stencil.pop(e.maskObject);
                break;

              case G.MASK_TYPES.SPRITE:
                this.popSpriteMask();
            }
            e.reset(), e.pooled && this.maskDataPool.push(e);
        }
    }, gn.prototype.detect = function(t) {
        var e, i = t.maskObject;
        i.isSprite ? t.type = G.MASK_TYPES.SPRITE : (t.type = G.MASK_TYPES.STENCIL, this.enableScissor && i.isFastRect && i.isFastRect() && (i = i.worldTransform, 
        e = Math.atan2(i.b, i.a), i = Math.atan2(i.d, i.c), e = Math.round(e * (180 / Math.PI) * 100), 
        i = Math.round(i * (180 / Math.PI) * 100) - e, 0 == (e = (e % 9e3 + 9e3) % 9e3)) && 9e3 == (i = (i % 18e3 + 18e3) % 18e3) && (t.type = G.MASK_TYPES.SCISSOR));
    }, gn.prototype.pushSpriteMask = function(t) {
        var e = t.maskObject, t = t._target, i = this.alphaMaskPool[this.alphaMaskIndex], r = ((i = i || (this.alphaMaskPool[this.alphaMaskIndex] = [ new dn(e) ]))[0].resolution = this.renderer.resolution, 
        i[0].maskSprite = e, t.filterArea);
        t.filterArea = e.getBounds(!0), this.renderer.filter.push(t, i), t.filterArea = r, 
        this.alphaMaskIndex++;
    }, gn.prototype.popSpriteMask = function() {
        this.renderer.filter.pop(), this.alphaMaskIndex--;
    };
    var fn, mn = gn;
    function gn(t) {
        fn.call(this, t), this.scissorRenderTarget = null, this.enableScissor = !1, this.alphaMaskPool = [], 
        this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
    }
    (yn = Ui) && (_n.__proto__ = yn), ((_n.prototype = Object.create(yn && yn.prototype)).constructor = _n).prototype.getStackLength = function() {
        return this.maskStack.length;
    }, _n.prototype.setMaskStack = function(t) {
        var e = this.renderer.gl, i = this.getStackLength(), t = (this.maskStack = t, this.getStackLength());
        t !== i && (0 === t ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()));
    }, _n.prototype._useCurrent = function() {}, _n.prototype.destroy = function() {
        yn.prototype.destroy.call(this, this), this.maskStack = null;
    };
    var yn, d = _n;
    function _n(t) {
        yn.call(this, t), this.maskStack = [], this.glConst = 0;
    }
    (vn = d) && (bn.__proto__ = vn), ((bn.prototype = Object.create(vn && vn.prototype)).constructor = bn).prototype.getStackLength = function() {
        var t = this.maskStack[this.maskStack.length - 1];
        return t ? t._scissorCounter : 0;
    }, bn.prototype.push = function(t) {
        var e = t.maskObject, i = (e.renderable = !0, t._scissorRect), r = e.getBounds(!0), n = this.renderer.gl;
        e.renderable = !1, i ? r.fit(i) : n.enable(n.SCISSOR_TEST), t._scissorCounter++, 
        t._scissorRect = r, this._useCurrent();
    }, bn.prototype.pop = function() {
        var t = this.renderer.gl;
        0 < this.getStackLength() ? this._useCurrent() : t.disable(t.SCISSOR_TEST);
    }, bn.prototype._useCurrent = function() {
        var t = this.maskStack[this.maskStack.length - 1]._scissorRect, e = this.renderer.renderTexture.current, i = this.renderer.projection, r = i.transform, n = i.sourceFrame, i = i.destinationFrame, s = (e || this.renderer).resolution, o = (t.x - n.x) * s + i.x, n = (t.y - n.y) * s + i.y, i = t.width * s, t = t.height * s;
        r && (o += r.tx * s, n += r.ty * s), e || (n = this.renderer.height - t - n), this.renderer.gl.scissor(o, n, i, t);
    };
    var vn, xn = bn;
    function bn(t) {
        vn.call(this, t), this.glConst = WebGLRenderingContext.SCISSOR_TEST;
    }
    (En = d) && (wn.__proto__ = En), ((wn.prototype = Object.create(En && En.prototype)).constructor = wn).prototype.getStackLength = function() {
        var t = this.maskStack[this.maskStack.length - 1];
        return t ? t._stencilCounter : 0;
    }, wn.prototype.push = function(t) {
        var e = t.maskObject, i = this.renderer.gl, r = t._stencilCounter;
        0 === r && (this.renderer.framebuffer.forceStencil(), i.enable(i.STENCIL_TEST)), 
        t._stencilCounter++, i.colorMask(!1, !1, !1, !1), i.stencilFunc(i.EQUAL, r, this._getBitwiseMask()), 
        i.stencilOp(i.KEEP, i.KEEP, i.INCR), e.renderable = !0, e.render(this.renderer), 
        this.renderer.batch.flush(), e.renderable = !1, this._useCurrent();
    }, wn.prototype.pop = function(t) {
        var e = this.renderer.gl;
        0 === this.getStackLength() ? (e.disable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), 
        e.clearStencil(0)) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), 
        t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, 
        this._useCurrent());
    }, wn.prototype._useCurrent = function() {
        var t = this.renderer.gl;
        t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.getStackLength(), this._getBitwiseMask()), 
        t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
    }, wn.prototype._getBitwiseMask = function() {
        return (1 << this.getStackLength()) - 1;
    };
    var En, Tn = wn;
    function wn(t) {
        En.call(this, t), this.glConst = WebGLRenderingContext.STENCIL_TEST;
    }
    (Sn = Ui) && (Pn.__proto__ = Sn), ((Pn.prototype = Object.create(Sn && Sn.prototype)).constructor = Pn).prototype.update = function(t, e, i, r) {
        this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, 
        this.calculateProjection(this.destinationFrame, this.sourceFrame, i, r), this.transform && this.projectionMatrix.append(this.transform);
        e = this.renderer;
        e.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, e.globalUniforms.update(), 
        e.shader.shader && e.shader.syncUniformGroup(e.shader.shader.uniforms.globals);
    }, Pn.prototype.calculateProjection = function(t, e, i, r) {
        var n = this.projectionMatrix;
        r ? (n.a = 1 / t.width * 2 * i, n.d = -1 / t.height * 2 * i, n.tx = -1 - e.x * n.a, 
        n.ty = 1 - e.y * n.d) : (n.a = 1 / t.width * 2 * i, n.d = 1 / t.height * 2 * i, 
        n.tx = -1 - e.x * n.a, n.ty = -1 - e.y * n.d);
    }, Pn.prototype.setTransform = function() {};
    var Sn, In = Pn;
    function Pn(t) {
        Sn.call(this, t), this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, 
        this.projectionMatrix = new l(), this.transform = null;
    }
    var An, On = new T(), Dn = ((An = Ui) && (Mn.__proto__ = An), ((Mn.prototype = Object.create(An && An.prototype)).constructor = Mn).prototype.bind = function(t, e, i) {
        this.current = t = void 0 === t ? null : t;
        var r, n = this.renderer;
        t ? (r = (t = t.baseTexture).resolution, i || (On.width = t.realWidth, On.height = t.realHeight, 
        i = On), e = e || i, this.renderer.framebuffer.bind(t.framebuffer, i), this.renderer.projection.update(i, e, r, !1), 
        this.renderer.mask.setMaskStack(t.maskStack)) : (r = this.renderer.resolution, i || (On.width = n.width, 
        On.height = n.height, i = On), e = e || i, n.framebuffer.bind(null, i), this.renderer.projection.update(i, e, r, !0), 
        this.renderer.mask.setMaskStack(this.defaultMaskStack)), this.sourceFrame.copyFrom(e), 
        this.destinationFrame.x = i.x / r, this.destinationFrame.y = i.y / r, this.destinationFrame.width = i.width / r, 
        this.destinationFrame.height = i.height / r, e === i && this.sourceFrame.copyFrom(this.destinationFrame);
    }, Mn.prototype.clear = function(t) {
        t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor, 
        this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3]);
    }, Mn.prototype.resize = function() {
        this.bind(null);
    }, Mn.prototype.reset = function() {
        this.bind(null);
    }, Mn);
    function Mn(t) {
        An.call(this, t), this.clearColor = t._backgroundColorRgba, this.defaultMaskStack = [], 
        this.current = null, this.sourceFrame = new T(), this.destinationFrame = new T();
    }
    function Cn(t, e) {
        this.program = t, this.uniformData = e, this.uniformGroups = {};
    }
    Cn.prototype.destroy = function() {
        this.uniformData = null, this.uniformGroups = null, this.program = null;
    };
    var Rn, Ln = 0, Nn = ((Rn = Ui) && (Fn.__proto__ = Rn), ((Fn.prototype = Object.create(Rn && Rn.prototype)).constructor = Fn).prototype.systemCheck = function() {
        if (!function() {
            if ("boolean" != typeof Qr) try {
                var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                Qr = !0 === t({
                    a: "b"
                }, "a", "b");
            } catch (t) {
                Qr = !1;
            }
            return Qr;
        }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
    }, Fn.prototype.contextChange = function(t) {
        this.gl = t, this.reset();
    }, Fn.prototype.bind = function(t, e) {
        t.uniforms.globals = this.renderer.globalUniforms;
        var i = t.program, r = i.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(t);
        return this.shader = t, this.program !== i && (this.program = i, this.gl.useProgram(r.program)), 
        e || this.syncUniformGroup(t.uniformGroup), r;
    }, Fn.prototype.setUniforms = function(t) {
        var e = this.shader.program, i = e.glPrograms[this.renderer.CONTEXT_UID];
        e.syncUniforms(i.uniformData, t, this.renderer);
    }, Fn.prototype.syncUniformGroup = function(t) {
        var e = this.getglProgram();
        t.static && t.dirtyId === e.uniformGroups[t.id] || (e.uniformGroups[t.id] = t.dirtyId, 
        this.syncUniforms(t, e));
    }, Fn.prototype.syncUniforms = function(t, e) {
        (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer);
    }, Fn.prototype.createSyncGroups = function(t) {
        var e = this.getSignature(t, this.shader.program.uniformData);
        return this.cache[e] || (this.cache[e] = function(t, e) {
            var i, r = 0, n = "var v = null;\n    var cv = null\n    var gl = renderer.gl";
            for (i in t.uniforms) {
                var s = e[i];
                s ? "float" === s.type && 1 === s.size ? n += "\n            if(uv." + i + " !== ud." + i + ".value)\n            {\n                ud." + i + ".value = uv." + i + "\n                gl.uniform1f(ud." + i + ".location, uv." + i + ")\n            }\n" : "sampler2D" !== s.type && "samplerCube" !== s.type && "sampler2DArray" !== s.type || 1 !== s.size || s.isArray ? "mat3" === s.type && 1 === s.size ? void 0 !== t.uniforms[i].a ? n += "\n                gl.uniformMatrix3fv(ud." + i + ".location, false, uv." + i + ".toArray(true));\n                \n" : n += "\n                gl.uniformMatrix3fv(ud." + i + ".location, false, uv." + i + ");\n                \n" : "vec2" === s.type && 1 === s.size ? void 0 !== t.uniforms[i].x ? n += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud." + i + ".location, v.x, v.y);\n                }\n" : n += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud." + i + ".location, v[0], v[1]);\n                }\n                \n" : "vec4" === s.type && 1 === s.size ? void 0 !== t.uniforms[i].width ? n += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud." + i + ".location, v.x, v.y, v.width, v.height)\n                }\n" : n += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud." + i + ".location, v[0], v[1], v[2], v[3])\n                }\n                \n" : n += "\n            cv = ud." + i + ".value;\n            v = uv." + i + ";\n            " + (1 === s.size ? Zr : Jr)[s.type].replace("location", "ud." + i + ".location") + ";\n" : (n += "\n            renderer.texture.bind(uv." + i + ", " + r + ");\n\n            if(ud." + i + ".value !== " + r + ")\n            {\n                ud." + i + ".value = " + r + ";\n                gl.uniform1i(ud." + i + ".location, " + r + ");\n; // eslint-disable-line max-len\n            }\n", 
                r++) : t.uniforms[i].group && (n += "\n                    renderer.shader.syncUniformGroup(uv." + i + ");\n                ");
            }
            return new Function("ud", "uv", "renderer", n);
        }(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], 
        t.syncUniforms[this.shader.program.id];
    }, Fn.prototype.getSignature = function(t, e) {
        var i, r = [];
        for (i in t.uniforms) r.push(i), e[i] && r.push(e[i].type);
        return r.join("-");
    }, Fn.prototype.getglProgram = function() {
        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
    }, Fn.prototype.generateShader = function(t) {
        var e, i = this.gl, r = t.program, n = {};
        for (e in r.attributeData) n[e] = r.attributeData[e].location;
        var s, o = Br(i, r.vertexSrc, r.fragmentSrc, n), a = {};
        for (s in r.uniformData) {
            var h = r.uniformData[s];
            a[s] = {
                location: i.getUniformLocation(o, s),
                value: kr(h.type, h.size)
            };
        }
        t = new Cn(o, a);
        return r.glPrograms[this.renderer.CONTEXT_UID] = t;
    }, Fn.prototype.reset = function() {
        this.program = null, this.shader = null;
    }, Fn.prototype.destroy = function() {
        this.destroyed = !0;
    }, Fn);
    function Fn(t) {
        Rn.call(this, t), this.systemCheck(), this.gl = null, this.shader = null, this.program = null, 
        this.cache = {}, this.id = Ln++;
    }
    (Bn = Ui) && (kn.__proto__ = Bn), ((kn.prototype = Object.create(Bn && Bn.prototype)).constructor = kn).prototype.contextChange = function(t) {
        var e;
        this.gl = t, this.blendModes = (t = t, (e = void 0 === e ? [] : e)[G.BLEND_MODES.NORMAL] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.ADD] = [ t.ONE, t.ONE ], e[G.BLEND_MODES.MULTIPLY] = [ t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.SCREEN] = [ t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.OVERLAY] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[G.BLEND_MODES.DARKEN] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.LIGHTEN] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[G.BLEND_MODES.COLOR_DODGE] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.COLOR_BURN] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[G.BLEND_MODES.HARD_LIGHT] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.SOFT_LIGHT] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[G.BLEND_MODES.DIFFERENCE] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.EXCLUSION] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[G.BLEND_MODES.HUE] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.SATURATION] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[G.BLEND_MODES.COLOR] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.LUMINOSITY] = [ t.ONE, t.ONE_MINUS_SRC_ALPHA ], e[G.BLEND_MODES.NONE] = [ 0, 0 ], 
        e[G.BLEND_MODES.NORMAL_NPM] = [ t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.ADD_NPM] = [ t.SRC_ALPHA, t.ONE, t.ONE, t.ONE ], e[G.BLEND_MODES.SCREEN_NPM] = [ t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.SRC_IN] = [ t.DST_ALPHA, t.ZERO ], e[G.BLEND_MODES.SRC_OUT] = [ t.ONE_MINUS_DST_ALPHA, t.ZERO ], 
        e[G.BLEND_MODES.SRC_ATOP] = [ t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA ], e[G.BLEND_MODES.DST_OVER] = [ t.ONE_MINUS_DST_ALPHA, t.ONE ], 
        e[G.BLEND_MODES.DST_IN] = [ t.ZERO, t.SRC_ALPHA ], e[G.BLEND_MODES.DST_OUT] = [ t.ZERO, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.DST_ATOP] = [ t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA ], e[G.BLEND_MODES.XOR] = [ t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA ], 
        e[G.BLEND_MODES.SUBTRACT] = [ t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD ], 
        e), this.set(this.defaultState), this.reset();
    }, kn.prototype.set = function(t) {
        if (t = t || this.defaultState, this.stateId !== t.data) {
            for (var e = this.stateId ^ t.data, i = 0; e; ) 1 & e && this.map[i].call(this, !!(t.data & 1 << i)), 
            e >>= 1, i++;
            this.stateId = t.data;
        }
        for (var r = 0; r < this.checks.length; r++) this.checks[r](this, t);
    }, kn.prototype.forceState = function(t) {
        t = t || this.defaultState;
        for (var e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
        for (var i = 0; i < this.checks.length; i++) this.checks[i](this, t);
        this.stateId = t.data;
    }, kn.prototype.setBlend = function(t) {
        this.updateCheck(kn.checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND);
    }, kn.prototype.setOffset = function(t) {
        this.updateCheck(kn.checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
    }, kn.prototype.setDepthTest = function(t) {
        this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
    }, kn.prototype.setCullFace = function(t) {
        this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
    }, kn.prototype.setFrontFace = function(t) {
        this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
    }, kn.prototype.setBlendMode = function(t) {
        var e;
        t !== this.blendMode && (this.blendMode = t, t = this.blendModes[t], e = this.gl, 
        2 === t.length ? e.blendFunc(t[0], t[1]) : e.blendFuncSeparate(t[0], t[1], t[2], t[3]), 
        6 === t.length ? (this._blendEq = !0, e.blendEquationSeparate(t[4], t[5])) : this._blendEq && (this._blendEq = !1, 
        e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD)));
    }, kn.prototype.setPolygonOffset = function(t, e) {
        this.gl.polygonOffset(t, e);
    }, kn.prototype.reset = function() {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(0), this._blendEq = !0, 
        this.blendMode = -1, this.setBlendMode(0);
    }, kn.prototype.updateCheck = function(t, e) {
        var i = this.checks.indexOf(t);
        e && -1 === i ? this.checks.push(t) : e || -1 === i || this.checks.splice(i, 1);
    }, kn.checkBlendMode = function(t, e) {
        t.setBlendMode(e.blendMode);
    }, kn.checkPolygonOffset = function(t, e) {
        t.setPolygonOffset(e.polygonOffset, 0);
    };
    var Bn, Un = kn;
    function kn(t) {
        Bn.call(this, t), this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = G.BLEND_MODES.NONE, 
        this._blendEq = !1, this.map = [], this.map[0] = this.setBlend, this.map[1] = this.setOffset, 
        this.map[2] = this.setCullFace, this.map[3] = this.setDepthTest, this.map[4] = this.setFrontFace, 
        this.checks = [], this.defaultState = new nn(), this.defaultState.blend = !0, this.defaultState.depth = !0;
    }
    (Xn = Ui) && (Hn.__proto__ = Xn), ((Hn.prototype = Object.create(Xn && Xn.prototype)).constructor = Hn).prototype.postrender = function() {
        this.renderer.renderingToScreen && (this.count++, this.mode !== G.GC_MODES.MANUAL) && (this.checkCount++, 
        this.checkCount > this.checkCountMax) && (this.checkCount = 0, this.run());
    }, Hn.prototype.run = function() {
        for (var t = this.renderer.texture, e = t.managedTextures, i = !1, r = 0; r < e.length; r++) {
            var n = e[r];
            !n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), 
            i = !(e[r] = null));
        }
        if (i) {
            for (var s = 0, o = 0; o < e.length; o++) null !== e[o] && (e[s++] = e[o]);
            e.length = s;
        }
    }, Hn.prototype.unload = function(t) {
        var e = this.renderer.textureSystem;
        t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture);
        for (var i = t.children.length - 1; 0 <= i; i--) this.unload(t.children[i]);
    };
    var Xn, jn = Hn;
    function Hn(t) {
        Xn.call(this, t), this.count = 0, this.checkCount = 0, this.maxIdle = E.GC_MAX_IDLE, 
        this.checkCountMax = E.GC_MAX_CHECK_COUNT, this.mode = E.GC_MODE;
    }
    function Gn(t) {
        this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, 
        this.mipmap = !1, this.wrapMode = 33071, this.type = 6408, this.internalFormat = 5121;
    }
    (Yn = Ui) && (zn.__proto__ = Yn), ((zn.prototype = Object.create(Yn && Yn.prototype)).constructor = zn).prototype.contextChange = function() {
        var t = this.gl = this.renderer.gl, e = (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 
        this.webGLVersion = this.renderer.context.webGLVersion, t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));
        this.boundTextures.length = e;
        for (var i = 0; i < e; i++) this.boundTextures[i] = null;
        this.emptyTextures = {};
        var r = new Gn(t.createTexture());
        t.bindTexture(t.TEXTURE_2D, r.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), 
        this.emptyTextures[t.TEXTURE_2D] = r, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Gn(t.createTexture()), 
        t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
        for (var n = 0; n < 6; n++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
        for (var s = 0; s < this.boundTextures.length; s++) this.bind(null, s);
    }, zn.prototype.bind = function(t, e) {
        void 0 === e && (e = 0);
        var i, r = this.gl;
        t ? (t = t.baseTexture || t).valid && (t.touched = this.renderer.textureGC.count, 
        i = t._glTextures[this.CONTEXT_UID] || this.initTexture(t), this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, 
        r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(t.target, i.texture)), i.dirtyId !== t.dirtyId && (this.currentLocation !== e && (this.currentLocation = e, 
        r.activeTexture(r.TEXTURE0 + e)), this.updateTexture(t)), this.boundTextures[e] = t) : (this.currentLocation !== e && (this.currentLocation = e, 
        r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture), 
        this.boundTextures[e] = null);
    }, zn.prototype.reset = function() {
        this._unknownBoundTextures = !0, this.currentLocation = -1;
        for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture;
    }, zn.prototype.unbind = function(t) {
        var e = this.gl, i = this.boundTextures;
        if (this._unknownBoundTextures) {
            this._unknownBoundTextures = !1;
            for (var r = 0; r < i.length; r++) i[r] === this.unknownTexture && this.bind(null, r);
        }
        for (var n = 0; n < i.length; n++) i[n] === t && (this.currentLocation !== n && (e.activeTexture(e.TEXTURE0 + n), 
        this.currentLocation = n), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[t.target].texture), 
        i[n] = null);
    }, zn.prototype.initTexture = function(t) {
        var e = new Gn(this.gl.createTexture());
        return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), 
        t.on("dispose", this.destroyTexture, this), e;
    }, zn.prototype.initTextureType = function(t, e) {
        var i;
        e.internalFormat = t.format, e.type = t.type, 2 === this.webGLVersion && (i = this.renderer.gl, 
        t.type === i.FLOAT && t.format === i.RGBA && (e.internalFormat = i.RGBA32F), t.type === G.TYPES.HALF_FLOAT && (e.type = i.HALF_FLOAT), 
        e.type === i.HALF_FLOAT) && t.format === i.RGBA && (e.internalFormat = i.RGBA16F);
    }, zn.prototype.updateTexture = function(t) {
        var e, i, r, n = t._glTextures[this.CONTEXT_UID];
        n && (r = this.renderer, this.initTextureType(t, n), t.resource && t.resource.upload(r, t, n) || (e = t.realWidth, 
        i = t.realHeight, r = r.gl, (n.width !== e || n.height !== i || n.dirtyId < 0) && (n.width = e, 
        n.height = i, r.texImage2D(t.target, 0, n.internalFormat, e, i, 0, t.format, n.type, null))), 
        t.dirtyStyleId !== n.dirtyStyleId && this.updateTextureStyle(t), n.dirtyId = t.dirtyId);
    }, zn.prototype.destroyTexture = function(t, e) {
        var i = this.gl;
        (t = t.baseTexture || t)._glTextures[this.CONTEXT_UID] && (this.unbind(t), i.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), 
        t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], 
        e || -1 !== (i = this.managedTextures.indexOf(t)) && $t(this.managedTextures, i, 1));
    }, zn.prototype.updateTextureStyle = function(t) {
        var e = t._glTextures[this.CONTEXT_UID];
        e && (t.mipmap !== G.MIPMAP_MODES.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? e.mipmap = 1 <= t.mipmap : e.mipmap = 0, 
        2 === this.webGLVersion || t.isPowerOfTwo ? e.wrapMode = t.wrapMode : e.wrapMode = G.WRAP_MODES.CLAMP, 
        t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId);
    }, zn.prototype.setStyle = function(t, e) {
        var i, r = this.gl;
        e.mipmap && r.generateMipmap(t.target), r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode), 
        r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode), e.mipmap ? (r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST), 
        (e = this.renderer.context.extensions.anisotropicFiltering) && 0 < t.anisotropicLevel && t.scaleMode === G.SCALE_MODES.LINEAR && (i = Math.min(t.anisotropicLevel, r.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT)), 
        r.texParameterf(t.target, e.TEXTURE_MAX_ANISOTROPY_EXT, i))) : r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode ? r.LINEAR : r.NEAREST), 
        r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode ? r.LINEAR : r.NEAREST);
    };
    var Yn, Vn = zn;
    function zn(t) {
        Yn.call(this, t), this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], 
        this._unknownBoundTextures = !1, this.unknownTexture = new f();
    }
    var Wn, Fi = {
        FilterSystem: _r,
        BatchSystem: Er,
        ContextSystem: Ir,
        FramebufferSystem: Or,
        GeometrySystem: Lr,
        MaskSystem: mn,
        ScissorSystem: xn,
        StencilSystem: Tn,
        ProjectionSystem: In,
        RenderTextureSystem: Dn,
        ShaderSystem: Nn,
        StateSystem: Un,
        TextureGCSystem: jn,
        TextureSystem: Vn
    }, qn = new l(), Ii = ((Wn = q) && (Kn.__proto__ = Wn), c = {
        width: {
            configurable: !0
        },
        height: {
            configurable: !0
        },
        backgroundColor: {
            configurable: !0
        }
    }, ((Kn.prototype = Object.create(Wn && Wn.prototype)).constructor = Kn).prototype.initPlugins = function(t) {
        for (var e in t) this.plugins[e] = new t[e](this);
    }, c.width.get = function() {
        return this.view.width;
    }, c.height.get = function() {
        return this.view.height;
    }, Kn.prototype.resize = function(t, e) {
        this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, 
        this.view.height = e * this.resolution, this.autoDensity && (this.view.style.width = t + "px", 
        this.view.style.height = e + "px");
    }, Kn.prototype.generateTexture = function(t, e, i, r) {
        0 === (r = r || t.getLocalBounds()).width && (r.width = 1), 0 === r.height && (r.height = 1);
        e = Ji.create(0 | r.width, 0 | r.height, e, i);
        return qn.tx = -r.x, qn.ty = -r.y, this.render(t, e, !1, qn, !!t.parent), e;
    }, Kn.prototype.destroy = function(t) {
        for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
        t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.plugins = null, 
        this.type = G.RENDERER_TYPE.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, 
        this.transparent = !1, this.autoDensity = !1, this.blendModes = null, this.options = null, 
        this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this._backgroundColor = 0, 
        this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, 
        this._lastObjectRendered = null;
    }, c.backgroundColor.get = function() {
        return this._backgroundColor;
    }, c.backgroundColor.set = function(t) {
        this._backgroundColor = t, this._backgroundColorString = Vt(t), Yt(t, this._backgroundColorRgba);
    }, Object.defineProperties(Kn.prototype, c), Kn);
    function Kn(t, e) {
        Wn.call(this), (e = Object.assign({}, E.RENDER_OPTIONS, e)).roundPixels && (E.ROUND_PIXELS = e.roundPixels, 
        p("5.0.0", "Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS", 2)), 
        this.options = e, this.type = G.RENDERER_TYPE.UNKNOWN, this.screen = new T(0, 0, e.width, e.height), 
        this.view = e.view || document.createElement("canvas"), this.resolution = e.resolution || E.RESOLUTION, 
        this.transparent = e.transparent, this.autoDensity = e.autoDensity || e.autoResize || !1, 
        this.preserveDrawingBuffer = e.preserveDrawingBuffer, this.clearBeforeRender = e.clearBeforeRender, 
        this._backgroundColor = 0, this._backgroundColorRgba = [ 0, 0, 0, 0 ], this._backgroundColorString = "#000000", 
        this.backgroundColor = e.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = new ti(), 
        this._lastObjectRendered = this._tempDisplayObjectParent, this.plugins = {};
    }
    (Zn = Ii) && (Qn.__proto__ = Zn), ((Qn.prototype = Object.create(Zn && Zn.prototype)).constructor = Qn).create = function(t) {
        if (Gt()) return new Qn(t);
        throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.');
    }, Qn.prototype.addSystem = function(t, e) {
        e = e || t.name;
        var i, r = new t(this);
        if (this[e]) throw new Error('Whoops! The name "' + e + '" is already in use');
        for (i in this[e] = r, this.runners) this.runners[i].add(r);
        return this;
    }, Qn.prototype.render = function(t, e, i, r, n) {
        this.renderingToScreen = !e, this.runners.prerender.run(), this.emit("prerender"), 
        this.projection.transform = r, this.context.isLost || (e || (this._lastObjectRendered = t), 
        n || (r = t.parent, t.parent = this._tempDisplayObjectParent, t.updateTransform(), 
        t.parent = r), this.renderTexture.bind(e), this.batch.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this.renderTexture.clear(), 
        t.render(this), this.batch.currentRenderer.flush(), e && e.baseTexture.update(), 
        this.runners.postrender.run(), this.projection.transform = null, this.emit("postrender"));
    }, Qn.prototype.resize = function(t, e) {
        Zn.prototype.resize.call(this, t, e), this.runners.resize.run(t, e);
    }, Qn.prototype.reset = function() {
        return this.runners.reset.run(), this;
    }, Qn.prototype.clear = function() {
        this.framebuffer.bind(), this.framebuffer.clear();
    }, Qn.prototype.destroy = function(t) {
        for (var e in this.runners.destroy.run(), this.runners) this.runners[e].destroy();
        Zn.prototype.destroy.call(this, t), this.gl = null;
    }, Qn.registerPlugin = function(t, e) {
        (Qn.__plugins = Qn.__plugins || {})[t] = e;
    };
    var Zn, Jn = Qn;
    function Qn(t) {
        Zn.call(this, "WebGL", t = void 0 === t ? {} : t), t = this.options, this.type = G.RENDERER_TYPE.WEBGL, 
        this.gl = null, this.CONTEXT_UID = 0, this.runners = {
            destroy: new ii("destroy"),
            contextChange: new ii("contextChange", 1),
            reset: new ii("reset"),
            update: new ii("update"),
            postrender: new ii("postrender"),
            prerender: new ii("prerender"),
            resize: new ii("resize", 2)
        }, this.globalUniforms = new fr({
            projectionMatrix: new l()
        }, !0), this.addSystem(mn, "mask").addSystem(Ir, "context").addSystem(Un, "state").addSystem(Nn, "shader").addSystem(Vn, "texture").addSystem(Lr, "geometry").addSystem(Or, "framebuffer").addSystem(xn, "scissor").addSystem(Tn, "stencil").addSystem(In, "projection").addSystem(jn, "textureGC").addSystem(_r, "filter").addSystem(Dn, "renderTexture").addSystem(Er, "batch"), 
        this.initPlugins(Qn.__plugins), t.context ? this.context.initFromContext(t.context) : this.context.initFromOptions({
            alpha: this.transparent,
            antialias: t.antialias,
            premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
            stencil: !0,
            preserveDrawingBuffer: t.preserveDrawingBuffer,
            powerPreference: this.options.powerPreference
        }), this.renderingToScreen = !0, Ht(2 === this.context.webGLVersion ? "WebGL 2" : "WebGL 1"), 
        this.resize(this.options.width, this.options.height);
    }
    function $n(t) {
        return Jn.create(t);
    }
    var ts, es = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", is = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n", d = ((ts = f) && (rs.__proto__ = ts), 
    ((rs.prototype = Object.create(ts && ts.prototype)).constructor = rs).from = function(t, e) {
        return new rs(new Oi(t, e));
    }, rs);
    function rs() {
        ts.apply(this, arguments);
    }
    function ns() {
        this.texArray = null, this.blend = 0, this.type = G.DRAW_MODES.TRIANGLES, this.start = 0, 
        this.size = 0, this.data = null;
    }
    function ss() {
        this.elements = [], this.ids = [], this.count = 0;
    }
    function os(t) {
        this.rawBinaryData = new ArrayBuffer(t), this.uint32View = new Uint32Array(this.rawBinaryData), 
        this.float32View = new Float32Array(this.rawBinaryData);
    }
    ss.prototype.clear = function() {
        for (var t = 0; t < this.count; t++) this.elements[t] = null;
        this.count = 0;
    };
    var as, c = {
        int8View: {
            configurable: !0
        },
        uint8View: {
            configurable: !0
        },
        int16View: {
            configurable: !0
        },
        uint16View: {
            configurable: !0
        },
        int32View: {
            configurable: !0
        }
    }, hs = (c.int8View.get = function() {
        return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
    }, c.uint8View.get = function() {
        return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), 
        this._uint8View;
    }, c.int16View.get = function() {
        return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), 
        this._int16View;
    }, c.uint16View.get = function() {
        return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), 
        this._uint16View;
    }, c.int32View.get = function() {
        return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), 
        this._int32View;
    }, os.prototype.view = function(t) {
        return this[t + "View"];
    }, os.prototype.destroy = function() {
        this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, 
        this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
    }, os.sizeOf = function(t) {
        switch (t) {
          case "int8":
          case "uint8":
            return 1;

          case "int16":
          case "uint16":
            return 2;

          case "int32":
          case "uint32":
          case "float32":
            return 4;

          default:
            throw new Error(t + " isn't a valid view type");
        }
    }, Object.defineProperties(os.prototype, c), (as = xr) && (g.__proto__ = as), ((g.prototype = Object.create(as && as.prototype)).constructor = g).prototype.contextChange = function() {
        var t = this.renderer.gl;
        E.PREFER_ENV === G.ENV.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), E.SPRITE_MAX_TEXTURES), 
        this.MAX_TEXTURES = tn(this.MAX_TEXTURES, t)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
        for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass();
        this.initFlushBuffers();
    }, g.prototype.initFlushBuffers = function() {
        for (var t = g._drawCallPool, e = g._textureArrayPool, i = this.size / 4, r = Math.floor(i / this.MAX_TEXTURES) + 1; t.length < i; ) t.push(new ns());
        for (;e.length < r; ) e.push(new ss());
        for (var n = 0; n < this.MAX_TEXTURES; n++) this._tempBoundTextures[n] = null;
    }, g.prototype.onPrerender = function() {
        this._flushId = 0;
    }, g.prototype.render = function(t) {
        t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), 
        this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, 
        this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t);
    }, g.prototype.buildTexturesAndDrawCalls = function() {
        var t = this._bufferedTextures, e = this.MAX_TEXTURES, i = g._textureArrayPool, r = this.renderer.batch, n = this._tempBoundTextures, s = this.renderer.textureGC.count, o = ++f._globalBatch, a = 0, h = i[0], u = 0;
        r.copyBoundTextures(n, e);
        for (var l = 0; l < this._bufferSize; ++l) {
            var c = t[l];
            t[l] = null, c._batchEnabled !== o && (h.count >= e && (r.boundArray(h, n, o, e), 
            this.buildDrawCalls(h, u, l), u = l, h = i[++a], ++o), c._batchEnabled = o, c.touched = s, 
            h.elements[h.count++] = c);
        }
        0 < h.count && (r.boundArray(h, n, o, e), this.buildDrawCalls(h, u, this._bufferSize), 
        ++a, ++o);
        for (var d = 0; d < n.length; d++) n[d] = null;
        f._globalBatch = o;
    }, g.prototype.buildDrawCalls = function(t, e, i) {
        var r = this._bufferedElements, n = this._attributeBuffer, s = this._indexBuffer, o = this.vertexSize, a = g._drawCallPool, h = this._dcIndex, u = this._aIndex, l = this._iIndex, c = a[h];
        c.start = this._iIndex, c.texArray = t;
        for (var d = e; d < i; ++d) {
            var p = r[d], f = p._texture.baseTexture, f = Wt[f.alphaMode ? 1 : 0][p.blendMode];
            r[d] = null, e < d && c.blend !== f && (c.size = l - c.start, e = d, (c = a[++h]).texArray = t, 
            c.start = l), this.packInterleavedGeometry(p, n, s, u, l), u += p.vertexData.length / 2 * o, 
            l += p.indices.length, c.blend = f;
        }
        e < i && (c.size = l - c.start, ++h), this._dcIndex = h, this._aIndex = u, this._iIndex = l;
    }, g.prototype.bindAndClearTexArray = function(t) {
        for (var e = this.renderer.texture, i = 0; i < t.count; i++) e.bind(t.elements[i], t.ids[i]), 
        t.elements[i] = null;
        t.count = 0;
    }, g.prototype.updateGeometry = function() {
        var t = this._packedGeometries, e = this._attributeBuffer, i = this._indexBuffer;
        E.CAN_UPLOAD_SAME_BUFFER ? (t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(i), 
        this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, 
        t[this._flushId] = new this.geometryClass()), t[this._flushId]._buffer.update(e.rawBinaryData), 
        t[this._flushId]._indexBuffer.update(i), this.renderer.geometry.bind(t[this._flushId]), 
        this.renderer.geometry.updateBuffers(), this._flushId++);
    }, g.prototype.drawBatches = function() {
        for (var t = this._dcIndex, e = this.renderer, i = e.gl, r = e.state, n = g._drawCallPool, s = null, o = 0; o < t; o++) {
            var a = n[o], h = a.texArray, u = a.type, l = a.size, c = a.start, a = a.blend;
            s !== h && this.bindAndClearTexArray(s = h), r.setBlendMode(a), i.drawElements(u, l, i.UNSIGNED_SHORT, 2 * c);
        }
    }, g.prototype.flush = function() {
        0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), 
        this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, 
        this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), 
        this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0);
    }, g.prototype.start = function() {
        this.renderer.state.set(this.state), this.renderer.shader.bind(this._shader), E.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
    }, g.prototype.stop = function() {
        this.flush();
    }, g.prototype.destroy = function() {
        for (var t = 0; t < this._packedGeometryPoolSize; t++) this._packedGeometries[t] && this._packedGeometries[t].destroy();
        this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, 
        this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, 
        this._shader && (this._shader.destroy(), this._shader = null), as.prototype.destroy.call(this);
    }, g.prototype.getAttributeBuffer = function(t) {
        var t = re(Math.ceil(t / 8)), e = se(t), t = 8 * t, e = (this._aBuffers.length <= e && (this._iBuffers.length = e + 1), 
        this._aBuffers[t]);
        return e || (this._aBuffers[t] = e = new os(t * this.vertexSize * 4)), e;
    }, g.prototype.getIndexBuffer = function(t) {
        var t = re(Math.ceil(t / 12)), e = se(t), t = 12 * t, i = (this._iBuffers.length <= e && (this._iBuffers.length = e + 1), 
        this._iBuffers[e]);
        return i || (this._iBuffers[e] = i = new Uint16Array(t)), i;
    }, g.prototype.packInterleavedGeometry = function(t, e, i, r, n) {
        for (var s = e.uint32View, o = e.float32View, a = r / this.vertexSize, h = t.uvs, u = t.indices, l = t.vertexData, c = t._texture.baseTexture._batchLocation, e = Math.min(t.worldAlpha, 1), d = e < 1 && t._texture.baseTexture.alphaMode ? Zt(t._tintRGB, e) : t._tintRGB + (255 * e << 24), p = 0; p < l.length; p += 2) o[r++] = l[p], 
        o[r++] = l[p + 1], o[r++] = h[p], o[r++] = h[p + 1], s[r++] = d, o[r++] = c;
        for (var f = 0; f < u.length; f++) i[n++] = a + u[f];
    }, g);
    function g(t) {
        as.call(this, t), this.shaderGenerator = null, this.geometryClass = null, this.vertexSize = null, 
        this.state = nn.for2d(), this.size = 4 * E.SPRITE_BATCH_SIZE, this._vertexCount = 0, 
        this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], 
        this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, 
        this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.MAX_TEXTURES = 1, 
        this.renderer.on("prerender", this.onPrerender, this), t.runners.contextChange.add(this), 
        this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, 
        this._indexBuffer = null, this._tempBoundTextures = [];
    }
    hs._drawCallPool = [], hs._textureArrayPool = [];
    function us(t, e) {
        if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, 
        e.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
        if (e.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".');
    }
    us.prototype.generateShader = function(t) {
        if (!this.programCache[t]) {
            for (var e = new Int32Array(t), i = 0; i < t; i++) e[i] = i;
            this.defaultGroupCache[t] = fr.from({
                uSamplers: e
            }, !0);
            var r = this.fragTemplate;
            r = (r = r.replace(/%count%/gi, "" + t)).replace(/%forloop%/gi, this.generateSampleSrc(t)), 
            this.programCache[t] = new en(this.vertexSrc, r);
        }
        r = {
            tint: new Float32Array([ 1, 1, 1, 1 ]),
            translationMatrix: new l(),
            default: this.defaultGroupCache[t]
        };
        return new rn(this.programCache[t], r);
    }, us.prototype.generateSampleSrc = function(t) {
        for (var e = (e = "") + "\n" + "\n", i = 0; i < t; i++) 0 < i && (e += "\nelse "), 
        i < t - 1 && (e += "if(vTextureId < " + i + ".5)"), e = (e += "\n{") + "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);\n}";
        return e = e + "\n" + "\n";
    }, (ls = nr) && (ds.__proto__ = ls);
    var ls, cs = (ds.prototype = Object.create(ls && ls.prototype)).constructor = ds;
    function ds(t) {
        void 0 === t && (t = !1), ls.call(this), this._buffer = new b(null, t, !1), this._indexBuffer = new b(null, t, !0), 
        this.addAttribute("aVertexPosition", this._buffer, 2, !1, G.TYPES.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, G.TYPES.FLOAT).addAttribute("aColor", this._buffer, 4, !0, G.TYPES.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, G.TYPES.FLOAT).addIndex(this._indexBuffer);
    }
    function ps() {}
    function fs(t) {
        (this.renderer = t).extract = this;
    }
    function ms() {
        this.global = new ge(), this.target = null, this.originalEvent = null, this.identifier = null, 
        this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, 
        this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, 
        this.twist = 0, this.tangentialPressure = 0;
    }
    function gs() {
        this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, 
        this.target = null, this.currentTarget = null, this.type = null, this.data = null;
    }
    function ys(t) {
        this._pointerId = t, this._flags = ys.FLAGS.NONE;
    }
    function _s() {
        this._tempPoint = new ge();
    }
    var vs, xs = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n", bs = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n", c = {
        defaultVertexSrc: {
            configurable: !0
        },
        defaultFragmentTemplate: {
            configurable: !0
        }
    }, c = (ps.create = function(t) {
        var e, t = Object.assign({
            vertex: xs,
            fragment: bs,
            geometryClass: cs,
            vertexSize: 6
        }, t), i = t.vertex, r = t.fragment, n = t.vertexSize, s = t.geometryClass;
        return (e = hs) && (o.__proto__ = e), (o.prototype = Object.create(e && e.prototype)).constructor = o;
        function o(t) {
            e.call(this, t), this.shaderGenerator = new us(i, r), this.geometryClass = s, this.vertexSize = n;
        }
    }, c.defaultVertexSrc.get = function() {
        return xs;
    }, c.defaultFragmentTemplate.get = function() {
        return bs;
    }, Object.defineProperties(ps, c), ps.create()), Es = new T(), Ts = (fs.prototype.image = function(t, e, i) {
        var r;
        return (r = new Image()).src = this.base64(t, e, i), r;
    }, fs.prototype.base64 = function(t, e, i) {
        return this.canvas(t).toDataURL(e, i);
    }, fs.prototype.canvas = function(t) {
        var e, i, r = this.renderer, n = !1, s = !1, t = (t && (t instanceof Ji ? i = t : (i = this.renderer.generateTexture(t), 
        s = !0)), i ? (e = i.baseTexture.resolution, u = i.frame, n = !1, r.renderTexture.bind(i)) : (e = this.renderer.resolution, 
        n = !0, (u = Es).width = this.renderer.width, u.height = this.renderer.height, r.renderTexture.bind(null)), 
        Math.floor(u.width * e + 1e-4)), o = Math.floor(u.height * e + 1e-4), a = new le(t, o, 1), h = new Uint8Array(4 * t * o), r = r.gl, u = (r.readPixels(u.x * e, u.y * e, t, o, r.RGBA, r.UNSIGNED_BYTE, h), 
        a.context.getImageData(0, 0, t, o));
        return fs.arrayPostDivide(h, u.data), a.context.putImageData(u, 0, 0), n && (a.context.scale(1, -1), 
        a.context.drawImage(a.canvas, 0, -o)), s && i.destroy(!0), a.canvas;
    }, fs.prototype.pixels = function(t) {
        var e, i, r, n = this.renderer, s = !1, t = (t && (t instanceof Ji ? r = t : (r = this.renderer.generateTexture(t), 
        s = !0)), r ? (e = r.baseTexture.resolution, i = r.frame, n.renderTexture.bind(r)) : (e = n.resolution, 
        (i = Es).width = n.width, i.height = n.height, n.renderTexture.bind(null)), i.width * e), o = i.height * e, a = new Uint8Array(4 * t * o), n = n.gl;
        return n.readPixels(i.x * e, i.y * e, t, o, n.RGBA, n.UNSIGNED_BYTE, a), s && r.destroy(!0), 
        fs.arrayPostDivide(a, a), a;
    }, fs.prototype.destroy = function() {
        this.renderer.extract = null, this.renderer = null;
    }, fs.arrayPostDivide = function(t, e) {
        for (var i = 0; i < t.length; i += 4) {
            var r = e[i + 3] = t[i + 3];
            0 !== r ? (e[i] = Math.round(Math.min(255 * t[i] / r, 255)), e[i + 1] = Math.round(Math.min(255 * t[i + 1] / r, 255)), 
            e[i + 2] = Math.round(Math.min(255 * t[i + 2] / r, 255))) : (e[i] = t[i], e[i + 1] = t[i + 1], 
            e[i + 2] = t[i + 2]);
        }
    }, {
        Extract: fs
    }), ws = {
        pointerId: {
            configurable: !0
        }
    }, ws = (ws.pointerId.get = function() {
        return this.identifier;
    }, ms.prototype.getLocalPosition = function(t, e, i) {
        return t.worldTransform.applyInverse(i || this.global, e);
    }, ms.prototype.copyEvent = function(t) {
        t.isPrimary && (this.isPrimary = !0), this.button = t.button, this.buttons = Number.isInteger(t.buttons) ? t.buttons : t.which, 
        this.width = t.width, this.height = t.height, this.tiltX = t.tiltX, this.tiltY = t.tiltY, 
        this.pointerType = t.pointerType, this.pressure = t.pressure, this.rotationAngle = t.rotationAngle, 
        this.twist = t.twist || 0, this.tangentialPressure = t.tangentialPressure || 0;
    }, ms.prototype.reset = function() {
        this.isPrimary = !1;
    }, Object.defineProperties(ms.prototype, ws), gs.prototype.stopPropagation = function() {
        this.stopped = !0, this.stopPropagationHint = !0, this.stopsPropagatingAt = this.currentTarget;
    }, gs.prototype.reset = function() {
        this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, 
        this.currentTarget = null, this.target = null;
    }, {
        pointerId: {
            configurable: !0
        },
        flags: {
            configurable: !0
        },
        none: {
            configurable: !0
        },
        over: {
            configurable: !0
        },
        rightDown: {
            configurable: !0
        },
        leftDown: {
            configurable: !0
        }
    }), ws = (ys.prototype._doSet = function(t, e) {
        this._flags = e ? this._flags | t : this._flags & ~t;
    }, ws.pointerId.get = function() {
        return this._pointerId;
    }, ws.flags.get = function() {
        return this._flags;
    }, ws.flags.set = function(t) {
        this._flags = t;
    }, ws.none.get = function() {
        return this._flags === this.constructor.FLAGS.NONE;
    }, ws.over.get = function() {
        return 0 != (this._flags & this.constructor.FLAGS.OVER);
    }, ws.over.set = function(t) {
        this._doSet(this.constructor.FLAGS.OVER, t);
    }, ws.rightDown.get = function() {
        return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN);
    }, ws.rightDown.set = function(t) {
        this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t);
    }, ws.leftDown.get = function() {
        return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN);
    }, ws.leftDown.set = function(t) {
        this._doSet(this.constructor.FLAGS.LEFT_DOWN, t);
    }, Object.defineProperties(ys.prototype, ws), ys.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1,
        LEFT_DOWN: 2,
        RIGHT_DOWN: 4
    }), _s.prototype.recursiveFindHit = function(t, e, i, r, n) {
        if (!e || !e.visible) return !1;
        var s = t.data.global, o = !1, a = n = e.interactive || n, h = !0;
        if (e.hitArea ? (r && (e.worldTransform.applyInverse(s, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? o = !0 : h = r = !1), 
        a = !1) : !e._mask || !r || e._mask.containsPoint && e._mask.containsPoint(s) || (r = !1), 
        h && e.interactiveChildren && e.children) for (var u = e.children, l = u.length - 1; 0 <= l; l--) {
            var c = u[l], d = this.recursiveFindHit(t, c, i, r, a);
            d && c.parent && (a = !1, d) && (t.target && (r = !1), o = !0);
        }
        return n && (r && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(s) && (o = !0), 
        e.interactive) && (o && !t.target && (t.target = e), i) && i(t, e, !!o), o;
    }, {
        interactive: !(_s.prototype.findHit = function(t, e, i, r) {
            this.recursiveFindHit(t, e, i, r, !1);
        }),
        interactiveChildren: !0,
        hitArea: null,
        get buttonMode() {
            return "pointer" === this.cursor;
        },
        set buttonMode(t) {
            t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null);
        },
        cursor: null,
        get trackedPointers() {
            return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers;
        },
        _trackedPointers: void 0
    }), Ss = (e.mixin(ws), {
        target: null,
        data: {
            global: null
        }
    }), Is = ((vs = q) && (y.__proto__ = vs), ((y.prototype = Object.create(vs && vs.prototype)).constructor = y).prototype.hitTest = function(t, e) {
        return Ss.target = null, Ss.data.global = t, e = e || this.renderer._lastObjectRendered, 
        this.processInteractive(Ss, e, null, !0), Ss.target;
    }, y.prototype.setTargetElement = function(t, e) {
        void 0 === e && (e = 1), this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, 
        this.addEvents();
    }, y.prototype.addEvents = function() {
        this.interactionDOMElement && (oi.system.add(this.update, this, G.UPDATE_PRIORITY.INTERACTION), 
        window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", 
        this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), 
        this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), 
        this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), 
        this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), 
        this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), 
        window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), 
        this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), 
        this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), 
        this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), 
        window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), 
        this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), 
        this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), 
        this.eventsAdded = !0);
    }, y.prototype.removeEvents = function() {
        this.interactionDOMElement && (oi.system.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", 
        this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), 
        this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), 
        this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), 
        this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), 
        this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), 
        window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), 
        this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), 
        this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), 
        this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), 
        window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), 
        this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), 
        this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), 
        this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), 
        this.interactionDOMElement = null, this.eventsAdded = !1);
    }, y.prototype.update = function(t) {
        if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, 
        this.interactionDOMElement)) if (this.didMove) this.didMove = !1; else {
            for (var e in this.cursor = null, this.activeInteractionData) this.activeInteractionData.hasOwnProperty(e) && (e = this.activeInteractionData[e]).originalEvent && "touch" !== e.pointerType && (e = this.configureInteractionEventForDOMEvent(this.eventData, e.originalEvent, e), 
            this.processInteractive(e, this.renderer._lastObjectRendered, this.processPointerOverOut, !0));
            this.setCursorMode(this.cursor);
        }
    }, y.prototype.setCursorMode = function(t) {
        if (this.currentCursorMode !== (t = t || "default")) {
            this.currentCursorMode = t;
            var e = this.cursorStyles[t];
            if (e) switch (_typeof(e)) {
              case "string":
                this.interactionDOMElement.style.cursor = e;
                break;

              case "function":
                e(t);
                break;

              case "object":
                Object.assign(this.interactionDOMElement.style, e);
            } else "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t);
        }
    }, y.prototype.dispatchEvent = function(t, e, i) {
        i.stopPropagationHint && t !== i.stopsPropagatingAt || (i.currentTarget = t, i.type = e, 
        t.emit(e, i), t[e] && t[e](i));
    }, y.prototype.delayDispatchEvent = function(t, e, i) {
        this.delayedEvents.push({
            displayObject: t,
            eventString: e,
            eventData: i
        });
    }, y.prototype.mapPositionToPoint = function(t, e, i) {
        var r = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, n = 1 / this.resolution;
        t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) * n, t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) * n;
    }, y.prototype.processInteractive = function(t, e, i, r) {
        var e = this.search.findHit(t, e, i, r), n = this.delayedEvents;
        if (n.length) {
            t.stopPropagationHint = !1;
            var s = n.length;
            this.delayedEvents = [];
            for (var o = 0; o < s; o++) {
                var a = n[o], h = a.displayObject, u = a.eventString, a = a.eventData;
                a.stopsPropagatingAt === h && (a.stopPropagationHint = !0), this.dispatchEvent(h, u, a);
            }
        }
        return e;
    }, y.prototype.onPointerDown = function(t) {
        if (!this.supportsTouchEvents || "touch" !== t.pointerType) for (var e = this.normalizeToPointerData(t), i = (!this.autoPreventDefault || !e[0].isNormalized || !t.cancelable && "cancelable" in t || t.preventDefault(), 
        e.length), r = 0; r < i; r++) {
            var n = e[r], s = this.getInteractionDataForPointerId(n), s = this.configureInteractionEventForDOMEvent(this.eventData, n, s);
            s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), 
            this.emit("pointerdown", s), "touch" === n.pointerType ? this.emit("touchstart", s) : "mouse" !== n.pointerType && "pen" !== n.pointerType || (s = 2 === n.button, 
            this.emit(s ? "rightdown" : "mousedown", this.eventData));
        }
    }, y.prototype.processPointerDown = function(t, e, i) {
        var r = t.data, n = t.data.identifier;
        i && (e.trackedPointers[n] || (e.trackedPointers[n] = new ys(n)), this.dispatchEvent(e, "pointerdown", t), 
        "touch" === r.pointerType ? this.dispatchEvent(e, "touchstart", t) : "mouse" !== r.pointerType && "pen" !== r.pointerType || ((i = 2 === r.button) ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, 
        this.dispatchEvent(e, i ? "rightdown" : "mousedown", t)));
    }, y.prototype.onPointerComplete = function(t, e, i) {
        for (var r = this.normalizeToPointerData(t), n = r.length, s = t.target !== this.interactionDOMElement ? "outside" : "", o = 0; o < n; o++) {
            var a, h = r[o], u = this.getInteractionDataForPointerId(h), l = this.configureInteractionEventForDOMEvent(this.eventData, h, u);
            l.data.originalEvent = t, this.processInteractive(l, this.renderer._lastObjectRendered, i, e || !s), 
            this.emit(e ? "pointercancel" : "pointerup" + s, l), "mouse" === h.pointerType || "pen" === h.pointerType ? (a = 2 === h.button, 
            this.emit(a ? "rightup" + s : "mouseup" + s, l)) : "touch" === h.pointerType && (this.emit(e ? "touchcancel" : "touchend" + s, l), 
            this.releaseInteractionDataForPointerId(h.pointerId, u));
        }
    }, y.prototype.onPointerCancel = function(t) {
        this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel);
    }, y.prototype.processPointerCancel = function(t, e) {
        var i = t.data, r = t.data.identifier;
        void 0 !== e.trackedPointers[r] && (delete e.trackedPointers[r], this.dispatchEvent(e, "pointercancel", t), 
        "touch" === i.pointerType) && this.dispatchEvent(e, "touchcancel", t);
    }, y.prototype.onPointerUp = function(t) {
        this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp);
    }, y.prototype.processPointerUp = function(t, e, i) {
        var r, n = t.data, s = t.data.identifier, o = e.trackedPointers[s], a = "touch" === n.pointerType, h = "mouse" === n.pointerType || "pen" === n.pointerType, u = !1;
        h && (n = 2 === n.button, r = ys.FLAGS, r = n ? r.RIGHT_DOWN : r.LEFT_DOWN, r = void 0 !== o && o.flags & r, 
        i ? (this.dispatchEvent(e, n ? "rightup" : "mouseup", t), r && (this.dispatchEvent(e, n ? "rightclick" : "click", t), 
        u = !0)) : r && this.dispatchEvent(e, n ? "rightupoutside" : "mouseupoutside", t), 
        o) && (n ? o.rightDown = !1 : o.leftDown = !1), i ? (this.dispatchEvent(e, "pointerup", t), 
        a && this.dispatchEvent(e, "touchend", t), o && (h && !u || this.dispatchEvent(e, "pointertap", t), 
        a) && (this.dispatchEvent(e, "tap", t), o.over = !1)) : o && (this.dispatchEvent(e, "pointerupoutside", t), 
        a) && this.dispatchEvent(e, "touchendoutside", t), o && o.none && delete e.trackedPointers[s];
    }, y.prototype.onPointerMove = function(t) {
        if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
            for (var e = this.normalizeToPointerData(t), i = ("mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this.didMove = !0, 
            this.cursor = null), e.length), r = 0; r < i; r++) {
                var n = e[r], s = this.getInteractionDataForPointerId(n), s = this.configureInteractionEventForDOMEvent(this.eventData, n, s);
                s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, !0), 
                this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), 
                "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s);
            }
            "mouse" === e[0].pointerType && this.setCursorMode(this.cursor);
        }
    }, y.prototype.processPointerMove = function(t, e, i) {
        var r = t.data, n = "touch" === r.pointerType, r = "mouse" === r.pointerType || "pen" === r.pointerType;
        r && this.processPointerOverOut(t, e, i), this.moveWhenInside && !i || (this.dispatchEvent(e, "pointermove", t), 
        n && this.dispatchEvent(e, "touchmove", t), r && this.dispatchEvent(e, "mousemove", t));
    }, y.prototype.onPointerOut = function(t) {
        var e, i;
        this.supportsTouchEvents && "touch" === t.pointerType || ("mouse" === (t = this.normalizeToPointerData(t)[0]).pointerType && (this.mouseOverRenderer = !1, 
        this.setCursorMode(null)), e = this.getInteractionDataForPointerId(t), (i = this.configureInteractionEventForDOMEvent(this.eventData, t, e)).data.originalEvent = t, 
        this.processInteractive(i, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), 
        this.emit("pointerout", i), "mouse" === t.pointerType || "pen" === t.pointerType ? this.emit("mouseout", i) : this.releaseInteractionDataForPointerId(e.identifier));
    }, y.prototype.processPointerOverOut = function(t, e, i) {
        var r = t.data, n = t.data.identifier, r = "mouse" === r.pointerType || "pen" === r.pointerType, s = e.trackedPointers[n];
        void 0 !== (s = i && !s ? e.trackedPointers[n] = new ys(n) : s) && (i && this.mouseOverRenderer ? (s.over || (s.over = !0, 
        this.delayDispatchEvent(e, "pointerover", t), r && this.delayDispatchEvent(e, "mouseover", t)), 
        r && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, 
        this.dispatchEvent(e, "pointerout", this.eventData), r && this.dispatchEvent(e, "mouseout", t), 
        s.none) && delete e.trackedPointers[n]);
    }, y.prototype.onPointerOver = function(t) {
        var t = this.normalizeToPointerData(t)[0], e = this.getInteractionDataForPointerId(t), e = this.configureInteractionEventForDOMEvent(this.eventData, t, e);
        "mouse" === (e.data.originalEvent = t).pointerType && (this.mouseOverRenderer = !0), 
        this.emit("pointerover", e), "mouse" !== t.pointerType && "pen" !== t.pointerType || this.emit("mouseover", e);
    }, y.prototype.getInteractionDataForPointerId = function(t) {
        var e, i = t.pointerId;
        return 1 === i || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[i] ? e = this.activeInteractionData[i] : ((e = this.interactionDataPool.pop() || new ms()).identifier = i, 
        this.activeInteractionData[i] = e), e.copyEvent(t), e;
    }, y.prototype.releaseInteractionDataForPointerId = function(t) {
        var e = this.activeInteractionData[t];
        e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e));
    }, y.prototype.configureInteractionEventForDOMEvent = function(t, e, i) {
        return t.data = i, this.mapPositionToPoint(i.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = i.global.x, 
        e.globalY = i.global.y), i.originalEvent = e, t.reset(), t;
    }, y.prototype.normalizeToPointerData = function(t) {
        var e = [];
        if (this.supportsTouchEvents && t instanceof TouchEvent) for (var i = 0, r = t.changedTouches.length; i < r; i++) {
            var n = t.changedTouches[i];
            void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), 
            void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), 
            void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), 
            void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), 
            void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), 
            void 0 === n.twist && (n.twist = 0), void 0 === n.tangentialPressure && (n.tangentialPressure = 0), 
            void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), 
            n.isNormalized = !0, e.push(n);
        } else !(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof window.PointerEvent || (void 0 === t.isPrimary && (t.isPrimary = !0), 
        void 0 === t.width && (t.width = 1), void 0 === t.height && (t.height = 1), void 0 === t.tiltX && (t.tiltX = 0), 
        void 0 === t.tiltY && (t.tiltY = 0), void 0 === t.pointerType && (t.pointerType = "mouse"), 
        void 0 === t.pointerId && (t.pointerId = 1), void 0 === t.pressure && (t.pressure = .5), 
        void 0 === t.twist && (t.twist = 0), void 0 === t.tangentialPressure && (t.tangentialPressure = 0), 
        t.isNormalized = !0), e.push(t);
        return e;
    }, y.prototype.destroy = function() {
        this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, 
        this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, 
        this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, 
        this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, 
        this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, 
        this.onPointerOver = null, this.search = null;
    }, y);
    function y(t, e) {
        vs.call(this), e = e || {}, this.renderer = t, this.autoPreventDefault = void 0 === e.autoPreventDefault || e.autoPreventDefault, 
        this.interactionFrequency = e.interactionFrequency || 10, this.mouse = new ms(), 
        this.mouse.identifier = 1, this.mouse.global.set(-999999), this.activeInteractionData = {}, 
        this.activeInteractionData[1] = this.mouse, this.interactionDataPool = [], this.eventData = new gs(), 
        this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, 
        this.mouseOverRenderer = !1, this.supportsTouchEvents = "ontouchstart" in window, 
        this.supportsPointerEvents = !!window.PointerEvent, this.onPointerUp = this.onPointerUp.bind(this), 
        this.processPointerUp = this.processPointerUp.bind(this), this.onPointerCancel = this.onPointerCancel.bind(this), 
        this.processPointerCancel = this.processPointerCancel.bind(this), this.onPointerDown = this.onPointerDown.bind(this), 
        this.processPointerDown = this.processPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), 
        this.processPointerMove = this.processPointerMove.bind(this), this.onPointerOut = this.onPointerOut.bind(this), 
        this.processPointerOverOut = this.processPointerOverOut.bind(this), this.onPointerOver = this.onPointerOver.bind(this), 
        this.cursorStyles = {
            default: "inherit",
            pointer: "pointer"
        }, this.currentCursorMode = null, this.cursor = null, this.resolution = 1, this.delayedEvents = [], 
        this.search = new _s(), this.setTargetElement(this.renderer.view, this.renderer.resolution);
    }
    function Ps() {
        this.reset();
    }
    var ws = {
        InteractionData: ms,
        InteractionEvent: gs,
        InteractionManager: Is,
        InteractionTrackingData: ys,
        interactiveTarget: ws
    }, As = {
        adaptive: !0,
        maxLength: 10,
        minSegments: 8,
        maxSegments: 2048,
        _segmentsCount: function(t, e) {
            return void 0 === e && (e = 20), this.adaptive ? ((t = Math.ceil(t / this.maxLength)) < this.minSegments ? t = this.minSegments : t > this.maxSegments && (t = this.maxSegments), 
            t) : e;
        }
    }, Os = (Ps.prototype.clone = function() {
        var t = new Ps();
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, 
        t.visible = this.visible, t;
    }, Ps.prototype.reset = function() {
        this.color = 16777215, this.alpha = 1, this.texture = w.WHITE, this.matrix = null, 
        this.visible = !1;
    }, Ps.prototype.destroy = function() {
        this.texture = null, this.matrix = null;
    }, {
        build: function(t) {
            t.points = t.shape.points.slice();
        },
        triangulate: function(t, e) {
            var i = t.points, r = t.holes, n = e.points, s = e.indices;
            if (6 <= i.length) {
                for (var o = [], a = 0; a < r.length; a++) {
                    var h = r[a];
                    o.push(i.length / 2), i = i.concat(h.points);
                }
                var u = K(i, o, 2);
                if (u) {
                    for (var l = n.length / 2, c = 0; c < u.length; c += 3) s.push(u[c] + l), s.push(u[c + 1] + l), 
                    s.push(u[c + 2] + l);
                    for (var d = 0; d < i.length; d++) n.push(i[d]);
                }
            }
        }
    }), Ds = {
        build: function(t) {
            var e, i, r = t.shape, n = t.points, s = r.x, o = r.y;
            if (n.length = 0, i = t.type === G.SHAPES.CIRC ? (e = r.radius, r.radius) : (e = r.width, 
            r.height), 0 !== e && 0 !== i) {
                for (var a = Math.floor(30 * Math.sqrt(r.radius)) || Math.floor(15 * Math.sqrt(r.width + r.height)), h = (a /= 2.3, 
                2 * Math.PI / a), u = 0; u < a; u++) n.push(s + Math.sin(-h * u) * e, o + Math.cos(-h * u) * i);
                n.push(n[0], n[1]);
            }
        },
        triangulate: function(t, e) {
            var i = t.points, r = e.points, n = e.indices, s = r.length / 2, o = s;
            r.push(t.shape.x, t.shape.y);
            for (var a = 0; a < i.length; a += 2) r.push(i[a], i[a + 1]), n.push(s++, o, s);
        }
    }, _ = {
        build: function(t) {
            var e = t.shape, i = e.x, r = e.y, n = e.width, e = e.height, t = t.points;
            t.length = 0, t.push(i, r, i + n, r, i + n, r + e, i, r + e);
        },
        triangulate: function(t, e) {
            var t = t.points, i = e.points, r = i.length / 2;
            i.push(t[0], t[1], t[2], t[3], t[6], t[7], t[4], t[5]), e.indices.push(r, 1 + r, 2 + r, 1 + r, 2 + r, 3 + r);
        }
    }, v = {
        build: function(t) {
            var e = t.shape, t = t.points, i = e.x, r = e.y, n = e.width, s = e.height, e = e.radius;
            t.length = 0, Cs(i, r + e, i, r, i + e, r, t), Cs(i + n - e, r, i + n, r, i + n, r + e, t), 
            Cs(i + n, r + s - e, i + n, r + s, i + n - e, r + s, t), Cs(i + e, r + s, i, r + s, i, r + s - e, t);
        },
        triangulate: function(t, e) {
            for (var i = t.points, r = e.points, n = e.indices, s = r.length / 2, o = K(i, null, 2), a = 0, h = o.length; a < h; a += 3) n.push(o[a] + s), 
            n.push(o[a + 1] + s), n.push(o[a + 2] + s);
            for (var u = 0, l = i.length; u < l; u++) r.push(i[u], i[++u]);
        }
    };
    function Ms(t, e, i) {
        return t + (e - t) * i;
    }
    function Cs(t, e, i, r, n, s, o) {
        for (var a, h, u, l, c, d = o = void 0 === o ? [] : o, p = 0; p <= 20; ++p) u = Ms(t, i, c = p / 20), 
        a = Ms(e, r, c), l = Ms(i, n, c), h = Ms(r, s, c), u = Ms(u, l, c), l = Ms(a, h, c), 
        d.push(u, l);
    }
    function Rs(t, e) {
        if (t.lineStyle.native) {
            var i = e, r = 0, n = (o = t).shape, s = o.points || n.points, o = n.type !== G.SHAPES.POLY || n.closeStroke;
            if (0 !== s.length) {
                var a = i.points, h = i.indices, F = s.length / 2, n = a.length / 2, u = n;
                for (a.push(s[0], s[1]), r = 1; r < F; r++) a.push(s[2 * r], s[2 * r + 1]), h.push(u, u + 1), 
                u++;
                o && h.push(u, n);
            }
        } else {
            var i = e, n = (o = t).shape, l = o.points || n.points.slice(), e = i.closePointEps;
            if (0 !== l.length) {
                var o = o.lineStyle, t = new ge(l[0], l[1]), c = new ge(l[l.length - 2], l[l.length - 1]), n = n.type !== G.SHAPES.POLY || n.closeStroke, e = Math.abs(t.x - c.x) < e && Math.abs(t.y - c.y) < e, d = (n && (l = l.slice(), 
                e && (l.pop(), l.pop(), c.set(l[l.length - 2], l[l.length - 1])), n = c.x + .5 * (t.x - c.x), 
                e = c.y + .5 * (t.y - c.y), l.unshift(n, e), l.push(n, e)), i.points), p = l.length / 2, f = l.length, m = d.length / 2, g = o.width / 2, y = l[0], _ = l[1], v = l[2], x = l[3], b = 0, E = 0, T = -(_ - x), w = y - v, S = 0, I = 0, P = 0, A = 0, O = Math.sqrt(T * T + w * w), t = (T = T / O * g, 
                w = w / O * g, o.alignment), D = 2 * (1 - t), M = 2 * t;
                d.push(y - T * D, _ - w * D), d.push(y + T * M, _ + w * M);
                for (var C = 1; C < p - 1; ++C) {
                    y = l[2 * (C - 1)], _ = l[2 * (C - 1) + 1], v = l[2 * C], x = l[2 * C + 1], b = l[2 * (C + 1)], 
                    E = l[2 * (C + 1) + 1], T = -(_ - x), w = y - v, O = Math.sqrt(T * T + w * w), T = T / O * g, 
                    w = w / O * g, S = -(x - E), I = v - b, O = Math.sqrt(S * S + I * I);
                    var B = -w + _ - (-w + x), R = -T + v - (-T + y), U = (-T + y) * (-w + x) - (-T + v) * (-w + _), k = -(I = I / O * g) + E - (-I + x), L = -(S = S / O * g) + v - (-S + b), X = (-S + b) * (-I + x) - (-S + v) * (-I + E), N = B * L - k * R;
                    Math.abs(N) < .1 ? (N += 10.1, d.push(v - T * D, x - w * D), d.push(v + T * M, x + w * M)) : 196 * g * g < ((R = (R * X - L * U) / N) - v) * (R - v) + ((L = (k * U - B * X) / N) - x) * (L - x) ? (P = T - S, 
                    A = w - I, O = Math.sqrt(P * P + A * A), P = P / O * g, A = A / O * g, d.push(v - P * D, x - A * D), 
                    d.push(v + P * M, x + A * M), d.push(v - P * M * D, x - A * D), f++) : (d.push(v + (R - v) * D, x + (L - x) * D), 
                    d.push(v - (R - v) * M, x - (L - x) * M));
                }
                y = l[2 * (p - 2)], _ = l[2 * (p - 2) + 1], v = l[2 * (p - 1)], x = l[2 * (p - 1) + 1], 
                T = -(_ - x), w = y - v, O = Math.sqrt(T * T + w * w), T = T / O * g, w = w / O * g, 
                d.push(v - T * D, x - w * D), d.push(v + T * M, x + w * M);
                for (var j = i.indices, H = 0; H < f - 2; ++H) j.push(m, m + 1, m + 2), m++;
            }
        }
    }
    (Ls = ze) && (Fs.__proto__ = Ls);
    var Ls, Ns = (Fs.prototype = Object.create(Ls && Ls.prototype)).constructor = Fs;
    function Fs(t, e, i, r, n, s) {
        n = n || r / 2;
        for (var o = -1 * Math.PI / 2 + s, a = 2 * i, h = xe / a, u = [], l = 0; l < a; l++) {
            var c = l % 2 ? n : r, d = l * h + o;
            u.push(t + c * Math.cos(d), e + c * Math.sin(d));
        }
        Ls.call(this, u);
    }
    function Bs() {}
    function Us() {}
    function ks() {}
    function Xs() {
        this.reset();
    }
    Bs.curveTo = function(t, e, i, r, n, s) {
        var o, a, h, u, l = s[s.length - 2], c = s[s.length - 1] - e, l = l - t, r = r - e, i = i - t, d = Math.abs(c * i - l * r);
        return d < 1e-8 || 0 === n ? (s[s.length - 2] === t && s[s.length - 1] === e || s.push(t, e), 
        null) : (s = c * c + l * l, h = r * r + i * i, u = c * r + l * i, s = (o = n * Math.sqrt(s) / d) * u / s, 
        h = i * (o + (u = (d = n * Math.sqrt(h) / d) * u / h)), u = r * (o + u), {
            cx: (a = o * i + d * l) + t,
            cy: (t = o * r + d * c) + e,
            radius: n,
            startAngle: Math.atan2(c * (d + s) - t, l * (d + s) - a),
            endAngle: Math.atan2(u - t, h - a),
            anticlockwise: i * c < l * r
        });
    }, Bs.arc = function(t, e, i, r, n, s, o, a, h) {
        for (var o = o - s, u = As._segmentsCount(Math.abs(o) * n, 40 * Math.ceil(Math.abs(o) / xe)), l = o / (2 * u), c = 2 * l, d = Math.cos(l), p = Math.sin(l), f = u - 1, m = f % 1 / f, g = 0; g <= f; ++g) {
            var y = l + s + c * (g + m * g), _ = Math.cos(y), y = -Math.sin(y);
            h.push((d * _ + p * y) * n + i, (d * -y + p * _) * n + r);
        }
    }, Us.curveLength = function(t, e, i, r, n, s, o, a) {
        for (var h, u, l, c, d, p, f, m, g = 0, y = t, _ = e, v = 1; v <= 10; ++v) f = y - (d = (p = (m = (c = 1 - (h = v / 10)) * c) * c) * t + 3 * m * h * i + 3 * c * (u = h * h) * n + (l = u * h) * o), 
        m = _ - (p = p * e + 3 * m * h * r + 3 * c * u * s + l * a), y = d, _ = p, g += Math.sqrt(f * f + m * m);
        return g;
    }, Us.curveTo = function(t, e, i, r, n, s, o) {
        var a, h, u, l, c, d = o[o.length - 2], p = o[o.length - 1], f = (o.length -= 2, 
        As._segmentsCount(Us.curveLength(d, p, t, e, i, r, n, s)));
        o.push(d, p);
        for (var m, g = 1; g <= f; ++g) o.push((u = (h = (a = 1 - (m = g / f)) * a) * a) * d + 3 * h * m * t + 3 * a * (l = m * m) * i + (c = l * m) * n, u * p + 3 * h * m * e + 3 * a * l * r + c * s);
    }, ks.curveLength = function(t, e, i, r, n, s) {
        var n = t - 2 * i + n, s = e - 2 * r + s, i = 2 * i - 2 * t, t = 2 * r - 2 * e, r = 4 * (n * n + s * s), e = 4 * (n * i + s * t), n = i * i + t * t, s = 2 * Math.sqrt(r + e + n), i = Math.sqrt(r), t = 2 * r * i, o = 2 * Math.sqrt(n), a = e / i;
        return (t * s + i * e * (s - o) + (4 * n * r - e * e) * Math.log((2 * i + a + s) / (a + o))) / (4 * t);
    }, ks.curveTo = function(t, e, i, r, n) {
        for (var s = n[n.length - 2], o = n[n.length - 1], a = As._segmentsCount(ks.curveLength(s, o, t, e, i, r)), h = 1; h <= a; ++h) {
            var u, l = h / a;
            n.push((u = s + (t - s) * l) + (t + (i - t) * l - u) * l, (u = o + (e - o) * l) + (e + (r - e) * l - u) * l);
        }
    };
    function js(t, e, i, r) {
        void 0 === e && (e = null), void 0 === i && (i = null), void 0 === r && (r = null), 
        this.shape = t, this.lineStyle = i, this.fillStyle = e, this.matrix = r, this.type = t.type, 
        this.points = [], this.holes = [];
    }
    Xs.prototype.begin = function(t, e, i) {
        this.reset(), this.style = t, this.start = e, this.attribStart = i;
    }, Xs.prototype.end = function(t, e) {
        this.attribSize = e - this.attribStart, this.size = t - this.start;
    }, Xs.prototype.reset = function() {
        this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0;
    };
    var Hs, Gs = {}, Ys = (Gs[G.SHAPES.POLY] = Os, Gs[G.SHAPES.CIRC] = Ds, Gs[G.SHAPES.ELIP] = Ds, 
    Gs[G.SHAPES.RECT] = _, Gs[G.SHAPES.RREC] = v, []), Vs = [], Ds = {
        buildPoly: Os,
        buildCircle: Ds,
        buildRectangle: _,
        buildRoundedRectangle: v,
        FILL_COMMANDS: Gs,
        BATCH_POOL: Ys,
        DRAW_CALL_POOL: Vs,
        buildLine: Rs,
        buildComplexPoly: function(t, e) {
            var i = t.points.slice();
            if (!(i.length < 6)) {
                for (var r, n = e.indices, s = (e.points = i, e.alpha = t.fillAlpha, e.color = Yt(t.fillColor), 
                1 / 0), o = -1 / 0, a = 1 / 0, h = -1 / 0, u = 0; u < i.length; u += 2) s = (r = i[u]) < s ? r : s, 
                o = o < r ? r : o, a = (r = i[u + 1]) < a ? r : a, h = h < r ? r : h;
                i.push(s, a, o, a, o, h, s, h);
                for (var l = i.length / 2, c = 0; c < l; c++) n.push(c);
            }
        },
        bezierCurveTo: function(t, e, i, r, n, s, o, a, h, u) {
            var l, c, d, p, f;
            (u = void 0 === u ? [] : u).push(t, e);
            for (var m, g = 1; g <= h; ++g) u.push((d = (c = (l = 1 - (m = g / h)) * l) * l) * t + 3 * c * m * i + 3 * l * (p = m * m) * n + (f = p * m) * o, d * e + 3 * c * m * r + 3 * l * p * s + f * a);
            return u;
        },
        Star: Ns,
        ArcUtils: Bs,
        BezierUtils: Us,
        QuadraticUtils: ks,
        BatchPart: Xs
    }, zs = (js.prototype.clone = function() {
        return new js(this.shape, this.fillStyle, this.lineStyle, this.matrix);
    }, js.prototype.destroy = function() {
        this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, 
        this.points = null, this.lineStyle = null, this.fillStyle = null;
    }, new ge()), Ws = new n(), qs = ((Hs = cs) && (x.__proto__ = Hs), (x.prototype = Object.create(Hs && Hs.prototype)).constructor = x, 
    (_ = {
        bounds: {
            configurable: !0
        }
    }).bounds.get = function() {
        return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), 
        this._bounds;
    }, x.prototype.invalidate = function() {
        this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, 
        this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0;
        for (var t = this.textureIds.length = 0; t < this.drawCalls.length; t++) this.drawCalls[t].textures.length = 0, 
        Vs.push(this.drawCalls[t]);
        for (var e = this.drawCalls.length = 0; e < this.batches.length; e++) {
            var i = this.batches[e];
            i.start = 0, i.attribStart = 0, i.style = null, Ys.push(i);
        }
        this.batches.length = 0;
    }, x.prototype.clear = function() {
        return 0 < this.graphicsData.length && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), 
        this;
    }, x.prototype.drawShape = function(t, e, i, r) {
        t = new js(t, e, i, r);
        return this.graphicsData.push(t), this.dirty++, this;
    }, x.prototype.drawHole = function(t, e) {
        return this.graphicsData.length ? (t = new js(t, null, null, e), e = this.graphicsData[this.graphicsData.length - 1], 
        t.lineStyle = e.lineStyle, e.holes.push(t), this.dirty++, this) : null;
    }, x.prototype.destroy = function(t) {
        Hs.prototype.destroy.call(this, t);
        for (var e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();
        this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, 
        this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, 
        this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, 
        this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, 
        this.batches = null, this._bounds = null;
    }, x.prototype.containsPoint = function(t) {
        for (var e = this.graphicsData, i = 0; i < e.length; ++i) {
            var r = e[i];
            if (r.fillStyle.visible && (r.shape && (r.matrix ? r.matrix.applyInverse(t, zs) : zs.copyFrom(t), 
            r.shape.contains(zs.x, zs.y)))) {
                var n = !1;
                if (r.holes) for (var s = 0; s < r.holes.length; s++) if (r.holes[s].shape.contains(zs.x, zs.y)) {
                    n = !0;
                    break;
                }
                if (!n) return !0;
            }
        }
        return !1;
    }, x.prototype.updateBatches = function() {
        if (this.graphicsData.length) {
            if (this.validateBatching()) {
                this.cacheDirty = this.dirty;
                var t = this.uvs, e = this.graphicsData, i = null, r = null;
                0 < this.batches.length && (r = (i = this.batches[this.batches.length - 1]).style);
                for (var n, s, o = this.shapeIndex; o < e.length; o++) {
                    this.shapeIndex++;
                    var a = e[o], h = a.fillStyle, u = a.lineStyle;
                    Gs[a.type].build(a), a.matrix && this.transformPoints(a.points, a.matrix);
                    for (var l = 0; l < 2; l++) {
                        var c, d, p, f = 0 === l ? h : u;
                        f.visible && (d = f.texture.baseTexture, p = this.indices.length, c = this.points.length / 2, 
                        d.wrapMode = G.WRAP_MODES.REPEAT, (i = i && !this._compareStyles(r, f) && (i.end(p, c), 
                        0 < i.size) ? null : i) || ((i = Ys.pop() || new Xs()).begin(f, p, c), this.batches.push(i), 
                        r = f), d = this.points.length / 2, 0 === l ? this.processFill(a) : this.processLine(a), 
                        p = this.points.length / 2 - d, this.addUvs(this.points, t, f.texture, d, p, f.matrix));
                    }
                }
                i ? (n = this.indices.length, s = this.points.length / 2, i.end(n, s), this.indicesUint16 = new Uint16Array(this.indices), 
                this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls()) : this.batchable = !0;
            }
        } else this.batchable = !0;
    }, x.prototype._compareStyles = function(t, e) {
        return !(!t || !e) && t.texture.baseTexture === e.texture.baseTexture && t.color + t.alpha === e.color + e.alpha && !!t.native == !!e.native;
    }, x.prototype.validateBatching = function() {
        if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
        for (var t = 0, e = this.graphicsData.length; t < e; t++) {
            var i = this.graphicsData[t], r = i.fillStyle, i = i.lineStyle;
            if (r && !r.texture.baseTexture.valid) return !1;
            if (i && !i.texture.baseTexture.valid) return !1;
        }
        return !0;
    }, x.prototype.packBatches = function() {
        this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
        for (var t = this.batches, e = 0, i = t.length; e < i; e++) for (var r = t[e], n = 0; n < r.size; n++) {
            var s = r.start + n;
            this.indicesUint16[s] = this.indicesUint16[s] - r.attribStart;
        }
    }, x.prototype.isBatchable = function() {
        for (var t = this.batches, e = 0; e < t.length; e++) if (t[e].style.native) return !1;
        return this.points.length < 2 * x.BATCHABLE_SIZE;
    }, x.prototype.buildDrawCalls = function() {
        for (var t = ++f._globalBatch, e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].textures.length = 0, 
        Vs.push(this.drawCalls[e]);
        this.drawCalls.length = 0;
        var i = this.colors, r = this.textureIds, n = Vs.pop(), s = (n || ((n = new ns()).textures = new ss()), 
        n.textures.count = 0, n.start = 0, n.size = 0, n.type = G.DRAW_MODES.TRIANGLES, 
        0), o = null, a = !1, h = G.DRAW_MODES.TRIANGLES, u = 0;
        this.drawCalls.push(n);
        for (var l = 0; l < this.batches.length; l++) {
            var c = this.batches[l], d = c.style, p = d.texture.baseTexture;
            a !== !!d.native && (h = (a = !!d.native) ? G.DRAW_MODES.LINES : G.DRAW_MODES.TRIANGLES, 
            o = null, s = 8, t++), o !== p && (o = p)._batchEnabled !== t && (8 === s && (t++, 
            (s = 0) < n.size && ((n = Vs.pop()) || ((n = new ns()).textures = new ss()), this.drawCalls.push(n)), 
            n.start = u, n.size = 0, n.textures.count = 0, n.type = h), p.touched = 1, p._batchEnabled = t, 
            p._batchLocation = s, p.wrapMode = 10497, n.textures.elements[n.textures.count++] = p, 
            s++), n.size += c.size, u += c.size, p = p._batchLocation, this.addColors(i, d.color, d.alpha, c.attribSize), 
            this.addTextureIds(r, p, c.attribSize);
        }
        f._globalBatch = t, this.packAttributes();
    }, x.prototype.packAttributes = function() {
        for (var t = this.points, e = this.uvs, i = this.colors, r = this.textureIds, n = new ArrayBuffer(3 * t.length * 4), s = new Float32Array(n), o = new Uint32Array(n), a = 0, h = 0; h < t.length / 2; h++) s[a++] = t[2 * h], 
        s[a++] = t[2 * h + 1], s[a++] = e[2 * h], s[a++] = e[2 * h + 1], o[a++] = i[h], 
        s[a++] = r[h];
        this._buffer.update(n), this._indexBuffer.update(this.indicesUint16);
    }, x.prototype.processFill = function(t) {
        (t.holes.length ? (this.processHoles(t.holes), Os) : Gs[t.type]).triangulate(t, this);
    }, x.prototype.processLine = function(t) {
        Rs(t, this);
        for (var e = 0; e < t.holes.length; e++) Rs(t.holes[e], this);
    }, x.prototype.processHoles = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            Gs[i.type].build(i), i.matrix && this.transformPoints(i.points, i.matrix);
        }
    }, x.prototype.calculateBounds = function() {
        var t = this._bounds, e = Ws, i = l.IDENTITY;
        this._bounds.clear(), e.clear();
        for (var r = 0; r < this.graphicsData.length; r++) {
            var n, s = this.graphicsData[r], o = s.shape, a = s.type, h = s.lineStyle, s = s.matrix || l.IDENTITY, u = 0;
            h && h.visible && (n = h.alignment, u = h.width, a === G.SHAPES.POLY ? u *= .5 + Math.abs(.5 - n) : u *= Math.max(0, n)), 
            i !== s && (e.isEmpty() || (t.addBoundsMatrix(e, i), e.clear()), i = s), a === G.SHAPES.RECT || a === G.SHAPES.RREC ? e.addFramePad(o.x, o.y, o.x + o.width, o.y + o.height, u, u) : a === G.SHAPES.CIRC ? e.addFramePad(o.x, o.y, o.x, o.y, o.radius + u, o.radius + u) : a === G.SHAPES.ELIP ? e.addFramePad(o.x, o.y, o.x, o.y, o.width + u, o.height + u) : t.addVerticesMatrix(i, o.points, 0, o.points.length, u, u);
        }
        e.isEmpty() || t.addBoundsMatrix(e, i), t.pad(this.boundsPadding, this.boundsPadding);
    }, x.prototype.transformPoints = function(t, e) {
        for (var i = 0; i < t.length / 2; i++) {
            var r = t[2 * i], n = t[2 * i + 1];
            t[2 * i] = e.a * r + e.c * n + e.tx, t[2 * i + 1] = e.b * r + e.d * n + e.ty;
        }
    }, x.prototype.addColors = function(t, e, i, r) {
        for (var n = Zt((e >> 16) + (65280 & e) + ((255 & e) << 16), i); 0 < r--; ) t.push(n);
    }, x.prototype.addTextureIds = function(t, e, i) {
        for (;0 < i--; ) t.push(e);
    }, x.prototype.addUvs = function(t, e, i, r, n, s) {
        for (var o = 0, a = e.length, h = i.frame; o < n; ) {
            var u, l = t[2 * (r + o)], c = t[2 * (r + o) + 1];
            s && (u = s.a * l + s.c * c + s.tx, c = s.b * l + s.d * c + s.ty, l = u), o++, e.push(l / h.width, c / h.height);
        }
        var d = i.baseTexture;
        (h.width < d.width || h.height < d.height) && this.adjustUvs(e, i, a, n);
    }, x.prototype.adjustUvs = function(t, e, i, r) {
        for (var n = e.baseTexture, s = i + 2 * r, r = e.frame, o = r.width / n.width, a = r.height / n.height, h = r.x / r.width, u = r.y / r.height, l = Math.floor(t[i] + 1e-6), c = Math.floor(t[i + 1] + 1e-6), d = i + 2; d < s; d += 2) l = Math.min(l, Math.floor(t[d] + 1e-6)), 
        c = Math.min(c, Math.floor(t[d + 1] + 1e-6));
        h -= l, u -= c;
        for (var p = i; p < s; p += 2) t[p] = (t[p] + h) * o, t[p + 1] = (t[p + 1] + u) * a;
    }, Object.defineProperties(x.prototype, _), x);
    function x() {
        Hs.call(this), this.points = [], this.colors = [], this.uvs = [], this.indices = [], 
        this.textureIds = [], this.graphicsData = [], this.dirty = 0, this.batchDirty = -1, 
        this.cacheDirty = -1, this.clearDirty = 0, this.drawCalls = [], this.batches = [], 
        this.shapeIndex = 0, this._bounds = new n(), this.boundsDirty = -1, this.boundsPadding = 0, 
        this.batchable = !1, this.indicesUint16 = null, this.uvsFloat32 = null, this.closePointEps = 1e-4;
    }
    qs.BATCHABLE_SIZE = 100;
    (Ks = Ps) && (Js.__proto__ = Ks), ((Js.prototype = Object.create(Ks && Ks.prototype)).constructor = Js).prototype.clone = function() {
        var t = new Js();
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, 
        t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, 
        t;
    }, Js.prototype.reset = function() {
        Ks.prototype.reset.call(this), this.color = 0, this.width = 0, this.alignment = .5, 
        this.native = !1;
    };
    var Ks, Zs = Js;
    function Js() {
        Ks.apply(this, arguments);
    }
    var Qs, $s = new Float32Array(3), to = {}, eo = ((Qs = ti) && (I.__proto__ = Qs), 
    v = {
        blendMode: {
            configurable: !0
        },
        tint: {
            configurable: !0
        },
        fill: {
            configurable: !0
        },
        line: {
            configurable: !0
        }
    }, ((I.prototype = Object.create(Qs && Qs.prototype)).constructor = I).prototype.clone = function() {
        return this.finishPoly(), new I(this.geometry);
    }, v.blendMode.set = function(t) {
        this.state.blendMode = t;
    }, v.blendMode.get = function() {
        return this.state.blendMode;
    }, v.tint.get = function() {
        return this._tint;
    }, v.tint.set = function(t) {
        this._tint = t;
    }, v.fill.get = function() {
        return this._fillStyle;
    }, v.line.get = function() {
        return this._lineStyle;
    }, I.prototype.lineStyle = function(t) {
        var e;
        return "number" == typeof t && (t = {
            width: (e = arguments)[0] || 0,
            color: e[1] || 0,
            alpha: void 0 !== e[2] ? e[2] : 1,
            alignment: void 0 !== e[3] ? e[3] : .5,
            native: !!e[4]
        }), this.lineTextureStyle(t);
    }, I.prototype.lineTextureStyle = function(e) {
        "number" == typeof e && (p("v5.2.0", "Please use object-based options for Graphics#lineTextureStyle"), 
        e = {
            width: arguments[0],
            texture: arguments[1],
            color: arguments[2],
            alpha: arguments[3],
            matrix: arguments[4],
            alignment: arguments[5],
            native: arguments[6]
        }, Object.keys(e).forEach(function(t) {
            return void 0 === e[t] && delete e[t];
        })), e = Object.assign({
            width: 0,
            texture: w.WHITE,
            color: e && e.texture ? 16777215 : 0,
            alpha: 1,
            matrix: null,
            alignment: .5,
            native: !1
        }, e), this.currentPath && this.startPoly();
        var t = 0 < e.width && 0 < e.alpha;
        return t ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._lineStyle, {
            visible: t
        }, e)) : this._lineStyle.reset(), this;
    }, I.prototype.startPoly = function() {
        var t, e;
        this.currentPath ? (t = this.currentPath.points, 2 < (e = this.currentPath.points.length) && (this.drawShape(this.currentPath), 
        this.currentPath = new ze(), this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))) : (this.currentPath = new ze(), 
        this.currentPath.closeStroke = !1);
    }, I.prototype.finishPoly = function() {
        this.currentPath && (2 < this.currentPath.points.length ? (this.drawShape(this.currentPath), 
        this.currentPath = null) : this.currentPath.points.length = 0);
    }, I.prototype.moveTo = function(t, e) {
        return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, 
        this;
    }, I.prototype.lineTo = function(t, e) {
        this.currentPath || this.moveTo(0, 0);
        var i = this.currentPath.points, r = i[i.length - 2], n = i[i.length - 1];
        return r === t && n === e || i.push(t, e), this;
    }, I.prototype._initCurve = function(t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [ t, e ]) : this.moveTo(t, e);
    }, I.prototype.quadraticCurveTo = function(t, e, i, r) {
        this._initCurve();
        var n = this.currentPath.points;
        return 0 === n.length && this.moveTo(0, 0), ks.curveTo(t, e, i, r, n), this;
    }, I.prototype.bezierCurveTo = function(t, e, i, r, n, s) {
        return this._initCurve(), Us.curveTo(t, e, i, r, n, s, this.currentPath.points), 
        this;
    }, I.prototype.arcTo = function(t, e, i, r, n) {
        this._initCurve(t, e);
        var s = this.currentPath.points, t = Bs.curveTo(t, e, i, r, n, s);
        return t && (e = t.cx, i = t.cy, r = t.radius, n = t.startAngle, s = t.endAngle, 
        t = t.anticlockwise, this.arc(e, i, r, n, s, t)), this;
    }, I.prototype.arc = function(t, e, i, r, n, s) {
        var o, a, h, u, l, c;
        return void 0 === s && (s = !1), r !== n && (!s && n <= r ? n += xe : s && r <= n && (r += xe), 
        0 != n - r) && (o = t + Math.cos(r) * i, a = e + Math.sin(r) * i, h = this.geometry.closePointEps, 
        (u = this.currentPath ? this.currentPath.points : null) ? (l = Math.abs(u[u.length - 2] - o), 
        c = Math.abs(u[u.length - 1] - a), l < h && c < h || u.push(o, a)) : (this.moveTo(o, a), 
        u = this.currentPath.points), Bs.arc(o, a, t, e, i, r, n, s, u)), this;
    }, I.prototype.beginFill = function(t, e) {
        return this.beginTextureFill({
            texture: w.WHITE,
            color: t = void 0 === t ? 0 : t,
            alpha: e = void 0 === e ? 1 : e
        });
    }, I.prototype.beginTextureFill = function(e) {
        e instanceof w && (p("v5.2.0", "Please use object-based options for Graphics#beginTextureFill"), 
        e = {
            texture: arguments[0],
            color: arguments[1],
            alpha: arguments[2],
            matrix: arguments[3]
        }, Object.keys(e).forEach(function(t) {
            return void 0 === e[t] && delete e[t];
        })), e = Object.assign({
            texture: w.WHITE,
            color: 16777215,
            alpha: 1,
            matrix: null
        }, e), this.currentPath && this.startPoly();
        var t = 0 < e.alpha;
        return t ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._fillStyle, {
            visible: t
        }, e)) : this._fillStyle.reset(), this;
    }, I.prototype.endFill = function() {
        return this.finishPoly(), this._fillStyle.reset(), this;
    }, I.prototype.drawRect = function(t, e, i, r) {
        return this.drawShape(new T(t, e, i, r));
    }, I.prototype.drawRoundedRect = function(t, e, i, r, n) {
        return this.drawShape(new qe(t, e, i, r, n));
    }, I.prototype.drawCircle = function(t, e, i) {
        return this.drawShape(new He(t, e, i));
    }, I.prototype.drawEllipse = function(t, e, i, r) {
        return this.drawShape(new Ye(t, e, i, r));
    }, I.prototype.drawPolygon = function(t) {
        var e = arguments, i = !0;
        if ((r = t).points && (i = r.closeStroke, r = r.points), !Array.isArray(r)) for (var r = new Array(arguments.length), n = 0; n < r.length; ++n) r[n] = e[n];
        t = new ze(r);
        return t.closeStroke = i, this.drawShape(t), this;
    }, I.prototype.drawShape = function(t) {
        return this._holeMode ? this.geometry.drawHole(t, this._matrix) : this.geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), 
        this;
    }, I.prototype.drawStar = function(t, e, i, r, n, s) {
        return this.drawPolygon(new Ns(t, e, i, r, n, s = void 0 === s ? 0 : s));
    }, I.prototype.clear = function() {
        return this.geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), 
        this._matrix = null, this._holeMode = !1, this.currentPath = null, this;
    }, I.prototype.isFastRect = function() {
        return 1 === this.geometry.graphicsData.length && this.geometry.graphicsData[0].shape.type === G.SHAPES.RECT && !this.geometry.graphicsData[0].lineWidth;
    }, I.prototype._render = function(t) {
        this.finishPoly();
        var e = this.geometry;
        e.updateBatches(), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), 
        this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t));
    }, I.prototype._populateBatches = function() {
        var t = this.geometry, e = this.blendMode;
        this.batches = [], this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, 
        this.vertexData = new Float32Array(t.points);
        for (var i = 0, r = t.batches.length; i < r; i++) {
            var n = t.batches[i], s = n.style.color, o = new Float32Array(this.vertexData.buffer, 4 * n.attribStart * 2, 2 * n.attribSize), a = new Float32Array(t.uvsFloat32.buffer, 4 * n.attribStart * 2, 2 * n.attribSize), o = {
                vertexData: o,
                blendMode: e,
                indices: new Uint16Array(t.indicesUint16.buffer, 2 * n.start, n.size),
                uvs: a,
                _batchRGB: Yt(s),
                _tintRGB: s,
                _texture: n.style.texture,
                alpha: n.style.alpha,
                worldAlpha: 1
            };
            this.batches[i] = o;
        }
    }, I.prototype._renderBatched = function(t) {
        if (this.batches.length) {
            t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), 
            this.calculateTints();
            for (var e = 0, i = this.batches.length; e < i; e++) {
                var r = this.batches[e];
                r.worldAlpha = this.worldAlpha * r.alpha, t.plugins[this.pluginName].render(r);
            }
        }
    }, I.prototype._renderDirect = function(t) {
        var e = this._resolveDirectShader(t), i = this.geometry, r = this.tint, n = this.worldAlpha, s = e.uniforms, o = i.drawCalls;
        s.translationMatrix = this.transform.worldTransform, s.tint[0] = (r >> 16 & 255) / 255 * n, 
        s.tint[1] = (r >> 8 & 255) / 255 * n, s.tint[2] = (255 & r) / 255 * n, s.tint[3] = n, 
        t.shader.bind(e), t.geometry.bind(i, e), t.state.set(this.state);
        for (var a = 0, h = o.length; a < h; a++) this._renderDrawCallDirect(t, i.drawCalls[a]);
    }, I.prototype._renderDrawCallDirect = function(t, e) {
        for (var i = e.textures, r = e.type, n = e.size, e = e.start, s = i.count, o = 0; o < s; o++) t.texture.bind(i.elements[o], o);
        t.geometry.draw(r, n, e);
    }, I.prototype._resolveDirectShader = function(t) {
        var e = this.shader, i = this.pluginName;
        if (!e) {
            if (!to[i]) {
                for (var r = new Int32Array(16), n = 0; n < 16; n++) r[n] = n;
                var s = {
                    tint: new Float32Array([ 1, 1, 1, 1 ]),
                    translationMatrix: new l(),
                    default: fr.from({
                        uSamplers: r
                    }, !0)
                }, t = t.plugins[i]._shader.program;
                to[i] = new rn(t, s);
            }
            e = to[i];
        }
        return e;
    }, I.prototype._calculateBounds = function() {
        this.finishPoly();
        var t, e, i, r = this.geometry;
        r.graphicsData.length && (t = (r = r.bounds).minX, e = r.minY, i = r.maxX, r = r.maxY, 
        this._bounds.addFrame(this.transform, t, e, i, r));
    }, I.prototype.containsPoint = function(t) {
        return this.worldTransform.applyInverse(t, I._TEMP_POINT), this.geometry.containsPoint(I._TEMP_POINT);
    }, I.prototype.calculateTints = function() {
        if (this.batchTint !== this.tint) {
            this.batchTint = this.tint;
            for (var t = Yt(this.tint, $s), e = 0; e < this.batches.length; e++) {
                var i = this.batches[e], r = i._batchRGB, r = (t[0] * r[0] * 255 << 16) + (t[1] * r[1] * 255 << 8) + (0 | t[2] * r[2] * 255);
                i._tintRGB = (r >> 16) + (65280 & r) + ((255 & r) << 16);
            }
        }
    }, I.prototype.calculateVertices = function() {
        if (this._transformID !== this.transform._worldID) {
            this._transformID = this.transform._worldID;
            for (var t = this.transform.worldTransform, e = t.a, i = t.b, r = t.c, n = t.d, s = t.tx, o = t.ty, a = this.geometry.points, h = this.vertexData, u = 0, l = 0; l < a.length; l += 2) {
                var c = a[l], d = a[l + 1];
                h[u++] = e * c + r * d + s, h[u++] = n * d + i * c + o;
            }
        }
    }, I.prototype.closePath = function() {
        var t = this.currentPath;
        return t && (t.closeStroke = !0), this;
    }, I.prototype.setMatrix = function(t) {
        return this._matrix = t, this;
    }, I.prototype.beginHole = function() {
        return this.finishPoly(), this._holeMode = !0, this;
    }, I.prototype.endHole = function() {
        return this.finishPoly(), this._holeMode = !1, this;
    }, I.prototype.destroy = function(t) {
        Qs.prototype.destroy.call(this, t), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), 
        this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, 
        this._fillStyle.destroy(), this._fillStyle = null, this.geometry = null, this.shader = null, 
        this.vertexData = null, this.batches.length = 0, this.batches = null, Qs.prototype.destroy.call(this, t);
    }, Object.defineProperties(I.prototype, v), I);
    function I(t) {
        void 0 === t && (t = null), Qs.call(this), this.geometry = t || new qs(), this.geometry.refCount++, 
        this.shader = null, this.state = nn.for2d(), this._fillStyle = new Ps(), this._lineStyle = new Zs(), 
        this._matrix = null, this._holeMode = !1, this.currentPath = null, this.batches = [], 
        this.batchTint = -1, this.vertexData = null, this._transformID = -1, this.batchDirty = -1, 
        this.pluginName = "batch", this.tint = 16777215, this.blendMode = G.BLEND_MODES.NORMAL;
    }
    eo._TEMP_POINT = new ge();
    var io, ro = new ge(), no = new Uint16Array([ 0, 1, 2, 0, 2, 3 ]), so = ((io = ti) && (oo.__proto__ = io), 
    _ = {
        roundPixels: {
            configurable: !0
        },
        width: {
            configurable: !0
        },
        height: {
            configurable: !0
        },
        anchor: {
            configurable: !0
        },
        tint: {
            configurable: !0
        },
        texture: {
            configurable: !0
        }
    }, ((oo.prototype = Object.create(io && io.prototype)).constructor = oo).prototype._onTextureUpdate = function() {
        this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, 
        this._width && (this.scale.x = ie(this.scale.x) * this._width / this._texture.orig.width), 
        this._height && (this.scale.y = ie(this.scale.y) * this._height / this._texture.orig.height);
    }, oo.prototype._onAnchorUpdate = function() {
        this._transformID = -1, this._transformTrimmedID = -1;
    }, oo.prototype.calculateVertices = function() {
        var t = this._texture;
        if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
            this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, 
            this._textureID = t._updateID;
            var e = this.transform.worldTransform, i = e.a, r = e.b, n = e.c, s = e.d, o = e.tx, e = e.ty, a = this.vertexData, h = t.trim, t = t.orig, u = this._anchor, l = 0, c = 0, d = 0, p = 0, d = h ? (l = (c = h.x - u._x * t.width) + h.width, 
            (p = h.y - u._y * t.height) + h.height) : (l = (c = -u._x * t.width) + t.width, 
            (p = -u._y * t.height) + t.height);
            if (a[0] = i * c + n * p + o, a[1] = s * p + r * c + e, a[2] = i * l + n * p + o, 
            a[3] = s * p + r * l + e, a[4] = i * l + n * d + o, a[5] = s * d + r * l + e, a[6] = i * c + n * d + o, 
            a[7] = s * d + r * c + e, this._roundPixels) for (var f = 0; f < 8; f++) a[f] = Math.round(a[f]);
        }
    }, oo.prototype.calculateTrimmedVertices = function() {
        if (this.vertexTrimmedData) {
            if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
        } else this.vertexTrimmedData = new Float32Array(8);
        this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
        var t = this._texture, e = this.vertexTrimmedData, t = t.orig, i = this._anchor, r = this.transform.worldTransform, n = r.a, s = r.b, o = r.c, a = r.d, h = r.tx, r = r.ty, u = -i._x * t.width, l = u + t.width, i = -i._y * t.height, t = i + t.height;
        e[0] = n * u + o * i + h, e[1] = a * i + s * u + r, e[2] = n * l + o * i + h, e[3] = a * i + s * l + r, 
        e[4] = n * l + o * t + h, e[5] = a * t + s * l + r, e[6] = n * u + o * t + h, e[7] = a * t + s * u + r;
    }, oo.prototype._render = function(t) {
        this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), 
        t.plugins[this.pluginName].render(this);
    }, oo.prototype._calculateBounds = function() {
        var t = this._texture.trim, e = this._texture.orig;
        !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), 
        this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
    }, oo.prototype.getLocalBounds = function(t) {
        return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, 
        this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), 
        this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new T()), 
        t = this._localBoundsRect), this._bounds.getRectangle(t)) : io.prototype.getLocalBounds.call(this, t);
    }, oo.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, ro);
        var t = this._texture.orig.width, e = this._texture.orig.height, i = -t * this.anchor.x;
        return ro.x >= i && ro.x < i + t && (i = -e * this.anchor.y, ro.y >= i) && ro.y < i + e;
    }, oo.prototype.destroy = function(t) {
        io.prototype.destroy.call(this, t), this._texture.off("update", this._onTextureUpdate, this), 
        this._anchor = null, ("boolean" == typeof t ? t : t && t.texture) && (t = "boolean" == typeof t ? t : t && t.baseTexture, 
        this._texture.destroy(!!t)), this._texture = null, this.shader = null;
    }, oo.from = function(t, e) {
        return new oo(t instanceof w ? t : w.from(t, e));
    }, _.roundPixels.set = function(t) {
        this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t;
    }, _.roundPixels.get = function() {
        return this._roundPixels;
    }, _.width.get = function() {
        return Math.abs(this.scale.x) * this._texture.orig.width;
    }, _.width.set = function(t) {
        var e = ie(this.scale.x) || 1;
        this.scale.x = e * t / this._texture.orig.width, this._width = t;
    }, _.height.get = function() {
        return Math.abs(this.scale.y) * this._texture.orig.height;
    }, _.height.set = function(t) {
        var e = ie(this.scale.y) || 1;
        this.scale.y = e * t / this._texture.orig.height, this._height = t;
    }, _.anchor.get = function() {
        return this._anchor;
    }, _.anchor.set = function(t) {
        this._anchor.copyFrom(t);
    }, _.tint.get = function() {
        return this._tint;
    }, _.tint.set = function(t) {
        this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16);
    }, _.texture.get = function() {
        return this._texture;
    }, _.texture.set = function(t) {
        this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), 
        this._texture = t || w.EMPTY, this._cachedTint = 16777215, this._textureID = -1, 
        this._textureTrimmedID = -1, t) && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this));
    }, Object.defineProperties(oo.prototype, _), oo);
    function oo(t) {
        io.call(this), this._anchor = new _e(this._onAnchorUpdate, this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0), 
        this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, 
        this.tint = 16777215, this.blendMode = G.BLEND_MODES.NORMAL, this.shader = null, 
        this._cachedTint = 16777215, this.uvs = null, this.texture = t || w.EMPTY, this.vertexData = new Float32Array(8), 
        this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, 
        this._textureTrimmedID = -1, this.indices = no, this.size = 4, this.start = 0, this.pluginName = "batch", 
        this.isSprite = !0, this._roundPixels = E.ROUND_PIXELS;
    }
    var ao = {
        LINEAR_VERTICAL: 0,
        LINEAR_HORIZONTAL: 1
    }, ho = {
        align: "left",
        breakWords: !1,
        dropShadow: !1,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: "black",
        dropShadowDistance: 5,
        fill: "black",
        fillGradientType: ao.LINEAR_VERTICAL,
        fillGradientStops: [],
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: "miter",
        miterLimit: 10,
        padding: 0,
        stroke: "black",
        strokeThickness: 0,
        textBaseline: "alphabetic",
        trim: !1,
        whiteSpace: "pre",
        wordWrap: !1,
        wordWrapWidth: 100,
        leading: 0
    }, uo = [ "serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui" ], lo = function(t) {
        this.styleID = 0, this.reset(), fo(this, t, t);
    }, v = {
        align: {
            configurable: !0
        },
        breakWords: {
            configurable: !0
        },
        dropShadow: {
            configurable: !0
        },
        dropShadowAlpha: {
            configurable: !0
        },
        dropShadowAngle: {
            configurable: !0
        },
        dropShadowBlur: {
            configurable: !0
        },
        dropShadowColor: {
            configurable: !0
        },
        dropShadowDistance: {
            configurable: !0
        },
        fill: {
            configurable: !0
        },
        fillGradientType: {
            configurable: !0
        },
        fillGradientStops: {
            configurable: !0
        },
        fontFamily: {
            configurable: !0
        },
        fontSize: {
            configurable: !0
        },
        fontStyle: {
            configurable: !0
        },
        fontVariant: {
            configurable: !0
        },
        fontWeight: {
            configurable: !0
        },
        letterSpacing: {
            configurable: !0
        },
        lineHeight: {
            configurable: !0
        },
        leading: {
            configurable: !0
        },
        lineJoin: {
            configurable: !0
        },
        miterLimit: {
            configurable: !0
        },
        padding: {
            configurable: !0
        },
        stroke: {
            configurable: !0
        },
        strokeThickness: {
            configurable: !0
        },
        textBaseline: {
            configurable: !0
        },
        trim: {
            configurable: !0
        },
        whiteSpace: {
            configurable: !0
        },
        wordWrap: {
            configurable: !0
        },
        wordWrapWidth: {
            configurable: !0
        }
    };
    function co(t) {
        return "number" == typeof t ? Vt(t) : "string" == typeof t && 0 === t.indexOf("0x") ? t.replace("0x", "#") : t;
    }
    function po(t) {
        if (Array.isArray(t)) {
            for (var e = 0; e < t.length; ++e) t[e] = co(t[e]);
            return t;
        }
        return co(t);
    }
    function fo(t, e, i) {
        for (var r in i) Array.isArray(e[r]) ? t[r] = e[r].slice() : t[r] = e[r];
    }
    lo.prototype.clone = function() {
        var t = {};
        return fo(t, this, ho), new lo(t);
    }, lo.prototype.reset = function() {
        fo(this, ho, ho);
    }, v.align.get = function() {
        return this._align;
    }, v.align.set = function(t) {
        this._align !== t && (this._align = t, this.styleID++);
    }, v.breakWords.get = function() {
        return this._breakWords;
    }, v.breakWords.set = function(t) {
        this._breakWords !== t && (this._breakWords = t, this.styleID++);
    }, v.dropShadow.get = function() {
        return this._dropShadow;
    }, v.dropShadow.set = function(t) {
        this._dropShadow !== t && (this._dropShadow = t, this.styleID++);
    }, v.dropShadowAlpha.get = function() {
        return this._dropShadowAlpha;
    }, v.dropShadowAlpha.set = function(t) {
        this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++);
    }, v.dropShadowAngle.get = function() {
        return this._dropShadowAngle;
    }, v.dropShadowAngle.set = function(t) {
        this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++);
    }, v.dropShadowBlur.get = function() {
        return this._dropShadowBlur;
    }, v.dropShadowBlur.set = function(t) {
        this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++);
    }, v.dropShadowColor.get = function() {
        return this._dropShadowColor;
    }, v.dropShadowColor.set = function(t) {
        t = po(t);
        this._dropShadowColor !== t && (this._dropShadowColor = t, this.styleID++);
    }, v.dropShadowDistance.get = function() {
        return this._dropShadowDistance;
    }, v.dropShadowDistance.set = function(t) {
        this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++);
    }, v.fill.get = function() {
        return this._fill;
    }, v.fill.set = function(t) {
        t = po(t);
        this._fill !== t && (this._fill = t, this.styleID++);
    }, v.fillGradientType.get = function() {
        return this._fillGradientType;
    }, v.fillGradientType.set = function(t) {
        this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++);
    }, v.fillGradientStops.get = function() {
        return this._fillGradientStops;
    }, v.fillGradientStops.set = function(t) {
        !function(t, e) {
            if (!Array.isArray(t) || !Array.isArray(e)) return;
            if (t.length !== e.length) return;
            for (var i = 0; i < t.length; ++i) if (t[i] !== e[i]) return;
            return 1;
        }(this._fillGradientStops, t) && (this._fillGradientStops = t, this.styleID++);
    }, v.fontFamily.get = function() {
        return this._fontFamily;
    }, v.fontFamily.set = function(t) {
        this.fontFamily !== t && (this._fontFamily = t, this.styleID++);
    }, v.fontSize.get = function() {
        return this._fontSize;
    }, v.fontSize.set = function(t) {
        this._fontSize !== t && (this._fontSize = t, this.styleID++);
    }, v.fontStyle.get = function() {
        return this._fontStyle;
    }, v.fontStyle.set = function(t) {
        this._fontStyle !== t && (this._fontStyle = t, this.styleID++);
    }, v.fontVariant.get = function() {
        return this._fontVariant;
    }, v.fontVariant.set = function(t) {
        this._fontVariant !== t && (this._fontVariant = t, this.styleID++);
    }, v.fontWeight.get = function() {
        return this._fontWeight;
    }, v.fontWeight.set = function(t) {
        this._fontWeight !== t && (this._fontWeight = t, this.styleID++);
    }, v.letterSpacing.get = function() {
        return this._letterSpacing;
    }, v.letterSpacing.set = function(t) {
        this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++);
    }, v.lineHeight.get = function() {
        return this._lineHeight;
    }, v.lineHeight.set = function(t) {
        this._lineHeight !== t && (this._lineHeight = t, this.styleID++);
    }, v.leading.get = function() {
        return this._leading;
    }, v.leading.set = function(t) {
        this._leading !== t && (this._leading = t, this.styleID++);
    }, v.lineJoin.get = function() {
        return this._lineJoin;
    }, v.lineJoin.set = function(t) {
        this._lineJoin !== t && (this._lineJoin = t, this.styleID++);
    }, v.miterLimit.get = function() {
        return this._miterLimit;
    }, v.miterLimit.set = function(t) {
        this._miterLimit !== t && (this._miterLimit = t, this.styleID++);
    }, v.padding.get = function() {
        return this._padding;
    }, v.padding.set = function(t) {
        this._padding !== t && (this._padding = t, this.styleID++);
    }, v.stroke.get = function() {
        return this._stroke;
    }, v.stroke.set = function(t) {
        t = po(t);
        this._stroke !== t && (this._stroke = t, this.styleID++);
    }, v.strokeThickness.get = function() {
        return this._strokeThickness;
    }, v.strokeThickness.set = function(t) {
        this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++);
    }, v.textBaseline.get = function() {
        return this._textBaseline;
    }, v.textBaseline.set = function(t) {
        this._textBaseline !== t && (this._textBaseline = t, this.styleID++);
    }, v.trim.get = function() {
        return this._trim;
    }, v.trim.set = function(t) {
        this._trim !== t && (this._trim = t, this.styleID++);
    }, v.whiteSpace.get = function() {
        return this._whiteSpace;
    }, v.whiteSpace.set = function(t) {
        this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++);
    }, v.wordWrap.get = function() {
        return this._wordWrap;
    }, v.wordWrap.set = function(t) {
        this._wordWrap !== t && (this._wordWrap = t, this.styleID++);
    }, v.wordWrapWidth.get = function() {
        return this._wordWrapWidth;
    }, v.wordWrapWidth.set = function(t) {
        this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++);
    }, lo.prototype.toFontString = function() {
        for (var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize, e = this.fontFamily, i = (e = Array.isArray(this.fontFamily) ? e : this.fontFamily.split(",")).length - 1; 0 <= i; i--) {
            var r = e[i].trim();
            !/([\"\'])[^\'\"]+\1/.test(r) && uo.indexOf(r) < 0 && (r = "" + r), e[i] = r;
        }
        return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",");
    }, Object.defineProperties(lo.prototype, v);
    var mo, P = function(t, e, i, r, n, s, o, a, h) {
        this.text = t, this.style = e, this.width = i, this.height = r, this.lines = n, 
        this.lineWidths = s, this.lineHeight = o, this.maxLineWidth = a, this.fontProperties = h;
    }, _ = (P.measureText = function(t, e, i, r) {
        void 0 === r && (r = P._canvas), i = null == i ? e.wordWrap : i;
        var n = e.toFontString(), s = P.measureFont(n), o = (0 === s.fontSize && (s.fontSize = e.fontSize, 
        s.ascent = e.fontSize), r.getContext("2d"));
        o.font = n;
        for (var a = (i ? P.wordWrap(t, e, r) : t).split(/(?:\r\n|\r|\n)/), h = new Array(a.length), u = 0, l = 0; l < a.length; l++) {
            var c = o.measureText(a[l]).width + (a[l].length - 1) * e.letterSpacing;
            h[l] = c, u = Math.max(u, c);
        }
        n = u + e.strokeThickness, e.dropShadow && (n += e.dropShadowDistance), i = e.lineHeight || s.fontSize + e.strokeThickness, 
        r = Math.max(i, s.fontSize + e.strokeThickness) + (a.length - 1) * (i + e.leading);
        return e.dropShadow && (r += e.dropShadowDistance), new P(t, e, n, r, a, h, i + e.leading, u, s);
    }, P.wordWrap = function(t, e, i) {
        for (var r = (i = void 0 === i ? P._canvas : i).getContext("2d"), n = 0, s = "", o = "", a = {}, h = e.letterSpacing, i = e.whiteSpace, u = P.collapseSpaces(i), l = P.collapseNewlines(i), c = !u, d = e.wordWrapWidth + h, p = P.tokenize(t), f = 0; f < p.length; f++) {
            var m = p[f];
            if (P.isNewline(m)) {
                if (!l) {
                    o += P.addLine(s), c = !u, s = "", n = 0;
                    continue;
                }
                m = " ";
            }
            if (u) {
                var g = P.isBreakingSpace(m), y = P.isBreakingSpace(s[s.length - 1]);
                if (g && y) continue;
            }
            g = P.getFromCache(m, h, a, r);
            if (d < g) if ("" !== s && (o += P.addLine(s), s = "", n = 0), P.canBreakWords(m, e.breakWords)) for (var _ = m.split(""), v = 0; v < _.length; v++) {
                for (var x = _[v], b = 1; _[v + b]; ) {
                    var E = _[v + b], T = x[x.length - 1];
                    if (P.canBreakChars(T, E, m, v, e.breakWords)) break;
                    x += E, b++;
                }
                v += x.length - 1;
                var w = P.getFromCache(x, h, a, r);
                d < w + n && (o += P.addLine(s), c = !1, s = "", n = 0), s += x, n += w;
            } else {
                0 < s.length && (o += P.addLine(s), s = "", n = 0);
                y = f === p.length - 1;
                o += P.addLine(m, !y), c = !1, s = "", n = 0;
            } else d < g + n && (c = !1, o += P.addLine(s), s = "", n = 0), (0 < s.length || !P.isBreakingSpace(m) || c) && (s += m, 
            n += g);
        }
        return o += P.addLine(s, !1);
    }, P.addLine = function(t, e) {
        return void 0 === e && (e = !0), t = P.trimRight(t), t = e ? t + "\n" : t;
    }, P.getFromCache = function(t, e, i, r) {
        var n = i[t];
        return void 0 === n && (e = t.length * e, n = r.measureText(t).width + e, i[t] = n), 
        n;
    }, P.collapseSpaces = function(t) {
        return "normal" === t || "pre-line" === t;
    }, P.collapseNewlines = function(t) {
        return "normal" === t;
    }, P.trimRight = function(t) {
        if ("string" != typeof t) return "";
        for (var e = t.length - 1; 0 <= e; e--) {
            var i = t[e];
            if (!P.isBreakingSpace(i)) break;
            t = t.slice(0, -1);
        }
        return t;
    }, P.isNewline = function(t) {
        return "string" == typeof t && 0 <= P._newlines.indexOf(t.charCodeAt(0));
    }, P.isBreakingSpace = function(t) {
        return "string" == typeof t && 0 <= P._breakingSpaces.indexOf(t.charCodeAt(0));
    }, P.tokenize = function(t) {
        var e = [], i = "";
        if ("string" == typeof t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                P.isBreakingSpace(n) || P.isNewline(n) ? ("" !== i && (e.push(i), i = ""), e.push(n)) : i += n;
            }
            "" !== i && e.push(i);
        }
        return e;
    }, P.canBreakWords = function(t, e) {
        return e;
    }, P.canBreakChars = function(t, e, i, r, n) {
        return !0;
    }, P.measureFont = function(t) {
        if (P._fonts[t]) return P._fonts[t];
        var e = {}, i = P._canvas, r = P._context, n = (r.font = t, P.METRICS_STRING + P.BASELINE_SYMBOL), s = Math.ceil(r.measureText(n).width), o = 2 * (a = Math.ceil(r.measureText(P.BASELINE_SYMBOL).width)), a = a * P.BASELINE_MULTIPLIER | 0;
        i.width = s, i.height = o, r.fillStyle = "#f00", r.fillRect(0, 0, s, o), r.font = t, 
        r.textBaseline = "alphabetic", r.fillStyle = "#000", r.fillText(n, 0, a);
        for (var h = r.getImageData(0, 0, s = s || 1, o = o || 1).data, i = h.length, u = 4 * s, l = 0, c = 0, d = !1, l = 0; l < a; ++l) {
            for (var p = 0; p < u; p += 4) if (255 !== h[c + p]) {
                d = !0;
                break;
            }
            if (d) break;
            c += u;
        }
        for (e.ascent = a - l, c = i - u, d = !1, l = o; a < l; --l) {
            for (var f = 0; f < u; f += 4) if (255 !== h[c + f]) {
                d = !0;
                break;
            }
            if (d) break;
            c -= u;
        }
        return e.descent = l - a, e.fontSize = e.ascent + e.descent, P._fonts[t] = e;
    }, P.clearMetrics = function(t) {
        (t = void 0 === t ? "" : t) ? delete P._fonts[t] : P._fonts = {};
    }, function() {
        try {
            var t = new OffscreenCanvas(0, 0);
            return t.getContext("2d") ? t : document.createElement("canvas");
        } catch (t) {
            return document.createElement("canvas");
        }
    }()), go = (_.width = _.height = 10, P._canvas = _, P._context = _.getContext("2d"), 
    P._fonts = {}, P.METRICS_STRING = "|ÉqÅ", P.BASELINE_SYMBOL = "M", P.BASELINE_MULTIPLIER = 1.4, 
    P._newlines = [ 10, 13 ], {
        texture: !0,
        children: !(P._breakingSpaces = [ 9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288 ]),
        baseTexture: !0
    }), yo = ((mo = so) && (_o.__proto__ = mo), v = {
        width: {
            configurable: !0
        },
        height: {
            configurable: !0
        },
        style: {
            configurable: !0
        },
        text: {
            configurable: !0
        },
        resolution: {
            configurable: !0
        }
    }, ((_o.prototype = Object.create(mo && mo.prototype)).constructor = _o).prototype.updateText = function(t) {
        var e = this._style;
        if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), 
        this.dirty || !t) {
            this._font = this._style.toFontString();
            for (var i, r, n = this.context, t = P.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), s = t.width, o = t.height, a = t.lines, h = t.lineHeight, u = t.lineWidths, l = t.maxLineWidth, c = t.fontProperties, d = (this.canvas.width = Math.ceil((Math.max(1, s) + 2 * e.padding) * this._resolution), 
            this.canvas.height = Math.ceil((Math.max(1, o) + 2 * e.padding) * this._resolution), 
            n.scale(this._resolution, this._resolution), n.clearRect(0, 0, this.canvas.width, this.canvas.height), 
            n.font = this._font, n.lineWidth = e.strokeThickness, n.textBaseline = e.textBaseline, 
            n.lineJoin = e.lineJoin, n.miterLimit = e.miterLimit, e.dropShadow ? 2 : 1), p = 0; p < d; ++p) {
                var f = e.dropShadow && 0 === p, m = f ? 2 * o : 0, g = m * this.resolution;
                f ? (n.fillStyle = "black", n.strokeStyle = "black", f = Yt("number" == typeof (f = e.dropShadowColor) ? f : zt(f)), 
                n.shadowColor = "rgba(" + 255 * f[0] + "," + 255 * f[1] + "," + 255 * f[2] + "," + e.dropShadowAlpha + ")", 
                n.shadowBlur = e.dropShadowBlur, n.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, 
                n.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance + g) : (n.fillStyle = this._generateFillStyle(e, a), 
                n.strokeStyle = e.stroke, n.shadowColor = 0, n.shadowBlur = 0, n.shadowOffsetX = 0, 
                n.shadowOffsetY = 0);
                for (var y = 0; y < a.length; y++) i = e.strokeThickness / 2, r = e.strokeThickness / 2 + y * h + c.ascent, 
                "right" === e.align ? i += l - u[y] : "center" === e.align && (i += (l - u[y]) / 2), 
                e.stroke && e.strokeThickness && this.drawLetterSpacing(a[y], i + e.padding, r + e.padding - m, !0), 
                e.fill && this.drawLetterSpacing(a[y], i + e.padding, r + e.padding - m);
            }
            this.updateTexture();
        }
    }, _o.prototype.drawLetterSpacing = function(t, e, i, r) {
        void 0 === r && (r = !1);
        var n = this._style.letterSpacing;
        if (0 === n) r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i); else for (var s = e, o = Array.from ? Array.from(t) : t.split(""), a = this.context.measureText(t).width, h = 0; h < o.length; ++h) {
            var u = o[h];
            r ? this.context.strokeText(u, s, i) : this.context.fillText(u, s, i), s += a - (u = this.context.measureText(t.substring(h + 1)).width) + n, 
            a = u;
        }
    }, _o.prototype.updateTexture = function() {
        var t = this.canvas, e = (this._style.trim && (e = ue(t)).data && (t.width = e.width, 
        t.height = e.height, this.context.putImageData(e.data, 0, 0)), this._texture), i = this._style, i = i.trim ? 0 : i.padding, r = e.baseTexture;
        e.trim.width = e._frame.width = Math.ceil(t.width / this._resolution), e.trim.height = e._frame.height = Math.ceil(t.height / this._resolution), 
        e.trim.x = -i, e.trim.y = -i, e.orig.width = e._frame.width - 2 * i, e.orig.height = e._frame.height - 2 * i, 
        this._onTextureUpdate(), r.setRealSize(t.width, t.height, this._resolution), this.dirty = !1;
    }, _o.prototype._render = function(t) {
        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, 
        this.dirty = !0), this.updateText(!0), mo.prototype._render.call(this, t);
    }, _o.prototype.getLocalBounds = function(t) {
        return this.updateText(!0), mo.prototype.getLocalBounds.call(this, t);
    }, _o.prototype._calculateBounds = function() {
        this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
    }, _o.prototype._onStyleChange = function() {
        this.dirty = !0;
    }, _o.prototype._generateFillStyle = function(t, e) {
        if (!Array.isArray(t.fill)) return t.fill;
        if (1 === t.fill.length) return t.fill[0];
        var i, r = Math.ceil(this.canvas.width / this._resolution), n = Math.ceil(this.canvas.height / this._resolution), s = t.fill.slice(), o = t.fillGradientStops.slice();
        if (!o.length) for (var a = s.length + 1, h = 1; h < a; ++h) o.push(h / a);
        if (s.unshift(t.fill[0]), o.unshift(0), s.push(t.fill[t.fill.length - 1]), o.push(1), 
        t.fillGradientType === ao.LINEAR_VERTICAL) for (var u = this.context.createLinearGradient(r / 2, 0, r / 2, n), l = (s.length + 1) * e.length, c = 0, d = 0; d < e.length; d++) {
            c += 1;
            for (var p = 0; p < s.length; p++) i = "number" == typeof o[p] ? o[p] / e.length + d / e.length : c / l, 
            u.addColorStop(i, s[p]), c++;
        } else {
            u = this.context.createLinearGradient(0, n / 2, r, n / 2), l = s.length + 1, c = 1;
            for (var f = 0; f < s.length; f++) i = "number" == typeof o[f] ? o[f] : c / l, u.addColorStop(i, s[f]), 
            c++;
        }
        return u;
    }, _o.prototype.destroy = function(t) {
        "boolean" == typeof t && (t = {
            children: t
        }), t = Object.assign({}, go, t), mo.prototype.destroy.call(this, t), this.context = null, 
        this.canvas = null, this._style = null;
    }, v.width.get = function() {
        return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
    }, v.width.set = function(t) {
        this.updateText(!0);
        var e = ie(this.scale.x) || 1;
        this.scale.x = e * t / this._texture.orig.width, this._width = t;
    }, v.height.get = function() {
        return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
    }, v.height.set = function(t) {
        this.updateText(!0);
        var e = ie(this.scale.y) || 1;
        this.scale.y = e * t / this._texture.orig.height, this._height = t;
    }, v.style.get = function() {
        return this._style;
    }, v.style.set = function(t) {
        (t = t || {}) instanceof lo ? this._style = t : this._style = new lo(t), this.localStyleID = -1, 
        this.dirty = !0;
    }, v.text.get = function() {
        return this._text;
    }, v.text.set = function(t) {
        t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0);
    }, v.resolution.get = function() {
        return this._resolution;
    }, v.resolution.set = function(t) {
        this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0);
    }, Object.defineProperties(_o.prototype, v), _o);
    function _o(t, e, i) {
        (i = i || document.createElement("canvas")).width = 3, i.height = 3;
        var r = w.from(i);
        r.orig = new T(), r.trim = new T(), mo.call(this, r), this.canvas = i, this.context = this.canvas.getContext("2d"), 
        this._resolution = E.RESOLUTION, this._autoResolution = !0, this._text = null, this._style = null, 
        this._styleListener = null, this._font = "", this.text = t, this.style = e, this.localStyleID = -1;
    }
    E.UPLOADS_PER_FRAME = 4;
    function vo(t) {
        this.maxItemsPerFrame = t, this.itemsLeft = 0;
    }
    function xo(t) {
        var e = this;
        this.limiter = new vo(E.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, 
        this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], 
        this.ticking = !1, this.delayedTick = function() {
            e.queue && e.prepareItems();
        }, this.registerFindHook(Io), this.registerFindHook(Po), this.registerFindHook(bo), 
        this.registerFindHook(Eo), this.registerFindHook(To), this.registerUploadHook(wo), 
        this.registerUploadHook(So);
    }
    vo.prototype.beginFrame = function() {
        this.itemsLeft = this.maxItemsPerFrame;
    }, vo.prototype.allowedToUpload = function() {
        return 0 < this.itemsLeft--;
    };
    function bo(t, e) {
        var i = !1;
        if (t && t._textures && t._textures.length) for (var r, n = 0; n < t._textures.length; n++) t._textures[n] instanceof w && (r = t._textures[n].baseTexture, 
        -1 === e.indexOf(r)) && (e.push(r), i = !0);
        return i;
    }
    function Eo(t, e) {
        return t.baseTexture instanceof f && (t = t.baseTexture, -1 === e.indexOf(t) && e.push(t), 
        !0);
    }
    function To(t, e) {
        return !!(t._texture && t._texture instanceof w) && (t = t._texture.baseTexture, 
        -1 === e.indexOf(t) && e.push(t), !0);
    }
    function wo(t, e) {
        return e instanceof yo && (e.updateText(!0), !0);
    }
    function So(t, e) {
        return e instanceof lo && (e = e.toFontString(), P.measureFont(e), !0);
    }
    function Io(t, e) {
        return t instanceof yo && (-1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t), 
        t = t._texture.baseTexture, -1 === e.indexOf(t) && e.push(t), !0);
    }
    function Po(t, e) {
        return t instanceof lo && (-1 === e.indexOf(t) && e.push(t), !0);
    }
    xo.prototype.upload = function(t, e) {
        "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), 
        this.ticking || (this.ticking = !0, oi.system.addOnce(this.tick, this, G.UPDATE_PRIORITY.UTILITY))) : e && e();
    }, xo.prototype.tick = function() {
        setTimeout(this.delayedTick, 0);
    }, xo.prototype.prepareItems = function() {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
            var t = this.queue[0], e = !1;
            if (t && !t._destroyed) for (var i = 0, r = this.uploadHooks.length; i < r; i++) if (this.uploadHooks[i](this.uploadHookHelper, t)) {
                this.queue.shift(), e = !0;
                break;
            }
            e || this.queue.shift();
        }
        if (this.queue.length) oi.system.addOnce(this.tick, this, G.UPDATE_PRIORITY.UTILITY); else {
            this.ticking = !1;
            for (var n = this.completes.slice(0), s = this.completes.length = 0, o = n.length; s < o; s++) n[s]();
        }
    }, xo.prototype.registerFindHook = function(t) {
        return t && this.addHooks.push(t), this;
    }, xo.prototype.registerUploadHook = function(t) {
        return t && this.uploadHooks.push(t), this;
    }, xo.prototype.add = function(t) {
        for (var e = 0, i = this.addHooks.length; e < i && !this.addHooks[e](t, this.queue); e++) ;
        if (t instanceof ti) for (var r = t.children.length - 1; 0 <= r; r--) this.add(t.children[r]);
        return this;
    }, xo.prototype.destroy = function() {
        this.ticking && oi.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, 
        this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, 
        this.limiter = null, this.uploadHookHelper = null;
    };
    (Ao = xo) && (Oo.__proto__ = Ao);
    var Ao, _ = (Oo.prototype = Object.create(Ao && Ao.prototype)).constructor = Oo;
    function Oo(t) {
        Ao.call(this, t), this.uploadHookHelper = this.renderer, this.registerFindHook(Co), 
        this.registerUploadHook(Do), this.registerUploadHook(Mo);
    }
    function Do(t, e) {
        return e instanceof f && (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0);
    }
    function Mo(t, e) {
        if (!(e instanceof eo)) return !1;
        for (var i = e.geometry, r = (e.finishPoly(), i.updateBatches(), i.batches), n = 0; n < r.length; n++) {
            var s = r[n].style.texture;
            s && Do(t, s.baseTexture);
        }
        return i.batchable || t.geometry.bind(i, e._resolveDirectShader()), !0;
    }
    function Co(t, e) {
        return t instanceof eo && (e.push(t), !0);
    }
    function Ro(t) {
        this.maxMilliseconds = t, this.frameStart = 0;
    }
    function Lo(e) {
        var i = this;
        e = Object.assign({
            forceCanvas: !1
        }, e), this.renderer = $n(e), this.stage = new ti(), Lo._plugins.forEach(function(t) {
            t.init.call(i, e);
        });
    }
    function No() {}
    function Fo(t, e) {
        for (var r = {
            key: [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        }, i = r.parser[(e = e || {}).strictMode ? "strict" : "loose"].exec(t), n = {}, s = 14; s--; ) n[r.key[s]] = i[s] || "";
        return n[r.q.name] = {}, n[r.key[12]].replace(r.q.parser, function(t, e, i) {
            e && (n[r.q.name][e] = i);
        }), n;
    }
    Ro.prototype.beginFrame = function() {
        this.frameStart = Date.now();
    }, Ro.prototype.allowedToUpload = function() {
        return Date.now() - this.frameStart < this.maxMilliseconds;
    };
    var v = {
        BasePrepare: xo,
        CountLimiter: vo,
        Prepare: _,
        TimeLimiter: Ro
    }, A = {
        view: {
            configurable: !0
        },
        screen: {
            configurable: !0
        }
    }, A = (Lo.registerPlugin = function(t) {
        Lo._plugins.push(t);
    }, Lo.prototype.render = function() {
        this.renderer.render(this.stage);
    }, A.view.get = function() {
        return this.renderer.view;
    }, A.screen.get = function() {
        return this.renderer.screen;
    }, Lo.prototype.destroy = function(t, e) {
        var i = this, r = Lo._plugins.slice(0);
        r.reverse(), r.forEach(function(t) {
            t.destroy.call(i);
        }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null, 
        this._options = null;
    }, Object.defineProperties(Lo.prototype, A), Lo._plugins = [], No.init = function(t) {
        var e = this;
        Object.defineProperty(this, "resizeTo", {
            set: function(t) {
                window.removeEventListener("resize", this.resize), (this._resizeTo = t) && (window.addEventListener("resize", this.resize), 
                this.resize());
            },
            get: function() {
                return this._resizeTo;
            }
        }), this.resize = function() {
            e._resizeTo && (e._resizeTo === window ? e.renderer.resize(window.innerWidth, window.innerHeight) : e.renderer.resize(e._resizeTo.clientWidth, e._resizeTo.clientHeight));
        }, this._resizeTo = null, this.resizeTo = t.resizeTo || null;
    }, No.destroy = function() {
        this.resizeTo = null, this.resize = null;
    }, Lo.registerPlugin(No), F(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t, e, i) {
            return e && r(t.prototype, e), i && r(t, i), t;
        };
        function r(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        i(o, [ {
            key: "detach",
            value: function() {
                return null !== this._owner && (this._owner.detach(this), !0);
            }
        } ]);
        var s = o;
        function o(t, e, i) {
            void 0 === e && (e = !1), n(this, o), this._fn = t, this._once = e, this._thisArg = i, 
            this._next = this._prev = this._owner = null;
        }
        function a(t, e) {
            return t._head ? (t._tail._next = e)._prev = t._tail : t._head = e, (t._tail = e)._owner = t, 
            e;
        }
        i(h, [ {
            key: "handlers",
            value: function() {
                var t = this._head;
                if (!(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0]) return !!t;
                for (var e = []; t; ) e.push(t), t = t._next;
                return e;
            }
        }, {
            key: "has",
            value: function(t) {
                if (t instanceof s) return t._owner === this;
                throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
            }
        }, {
            key: "dispatch",
            value: function() {
                var t = arguments, e = this._head;
                if (!e) return !1;
                for (;e; ) e._once && this.detach(e), e._fn.apply(e._thisArg, t), e = e._next;
                return !0;
            }
        }, {
            key: "add",
            value: function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                return a(this, new s(t, !1, e));
            }
        }, {
            key: "once",
            value: function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                return a(this, new s(t, !0, e));
            }
        }, {
            key: "detach",
            value: function(t) {
                if (t instanceof s) return t._owner === this && (t._prev && (t._prev._next = t._next), 
                t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, 
                null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, 
                this._tail._next = null), t._owner = null), this;
                throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
            }
        }, {
            key: "detachAll",
            value: function() {
                var t = this._head;
                if (t) for (this._head = this._tail = null; t; ) t._owner = null, t = t._next;
                return this;
            }
        } ]);
        i = h;
        function h() {
            n(this, h), this._head = this._tail = void 0;
        }
        i.MiniSignalBinding = s, e.default = i, t.exports = e.default;
    })), Bo = (A = A) && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
    function Uo() {}
    function ko(i, r, n, s) {
        var o = 0, a = i.length;
        !function t(e) {
            e || o === a ? n && n(e) : s ? setTimeout(function() {
                r(i[o++], t);
            }, 1) : r(i[o++], t);
        }();
    }
    function Xo(e, t) {
        if (null == t) t = 1; else if (0 === t) throw new Error("Concurrency must not be zero");
        var i = 0, r = {
            _tasks: [],
            concurrency: t,
            saturated: Uo,
            unsaturated: Uo,
            buffer: t / 4,
            empty: Uo,
            drain: Uo,
            error: Uo,
            started: !1,
            paused: !1,
            push: function(t, e) {
                n(t, !1, e);
            },
            kill: function() {
                i = 0, r.drain = Uo, r.started = !1, r._tasks = [];
            },
            unshift: function(t, e) {
                n(t, !0, e);
            },
            process: function() {
                for (;!r.paused && i < r.concurrency && r._tasks.length; ) {
                    var t = r._tasks.shift();
                    0 === r._tasks.length && r.empty(), (i += 1) === r.concurrency && r.saturated(), 
                    e(t.data, function(e) {
                        return function() {
                            if (null === e) throw new Error("Callback was already called.");
                            var t = e;
                            e = null, t.apply(this, arguments);
                        };
                    }(function(t) {
                        return function() {
                            --i, t.callback.apply(t, arguments), null != arguments[0] && r.error(arguments[0], t.data), 
                            i <= r.concurrency - r.buffer && r.unsaturated(), r.idle() && r.drain(), r.process();
                        };
                    }(t)));
                }
            },
            length: function() {
                return r._tasks.length;
            },
            running: function() {
                return i;
            },
            idle: function() {
                return r._tasks.length + i === 0;
            },
            pause: function() {
                !0 !== r.paused && (r.paused = !0);
            },
            resume: function() {
                if (!1 !== r.paused) {
                    r.paused = !1;
                    for (var t = 1; t <= r.concurrency; t++) r.process();
                }
            }
        };
        function n(t, e, i) {
            if (null != i && "function" != typeof i) throw new Error("task callback must be a function");
            r.started = !0, null == t && r.idle() ? setTimeout(function() {
                return r.drain();
            }, 1) : (t = {
                data: t,
                callback: "function" == typeof i ? i : Uo
            }, e ? r._tasks.unshift(t) : r._tasks.push(t), setTimeout(function() {
                return r.process();
            }, 1));
        }
        return r;
    }
    var jo = {};
    function Ho(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    function Go(t, e, i) {
        e && Ho(t.prototype, e), i && Ho(t, i);
    }
    var Yo = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest()), Vo = null;
    function zo() {}
    D.setExtensionLoadType = function(t, e) {
        Wo(D._loadTypeMap, t, e);
    }, D.setExtensionXhrType = function(t, e) {
        Wo(D._xhrTypeMap, t, e);
    }, (A = D.prototype).complete = function() {
        this._clearEvents(), this._finish();
    }, A.abort = function(t) {
        if (!this.error) {
            if (this.error = new Error(t), this._clearEvents(), this.xhr) this.xhr.abort(); else if (this.xdr) this.xdr.abort(); else if (this.data) if (this.data.src) this.data.src = D.EMPTY_GIF; else for (;this.data.firstChild; ) this.data.removeChild(this.data.firstChild);
            this._finish();
        }
    }, A.load = function(t) {
        var e = this;
        if (!this.isLoading) if (this.isComplete) t && setTimeout(function() {
            return t(e);
        }, 1); else switch (t && this.onComplete.once(t), this._setFlag(D.STATUS_FLAGS.LOADING, !0), 
        this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), 
        this.loadType) {
          case D.LOAD_TYPE.IMAGE:
            this.type = D.TYPE.IMAGE, this._loadElement("image");
            break;

          case D.LOAD_TYPE.AUDIO:
            this.type = D.TYPE.AUDIO, this._loadSourceElement("audio");
            break;

          case D.LOAD_TYPE.VIDEO:
            this.type = D.TYPE.VIDEO, this._loadSourceElement("video");
            break;

          default:
            D.LOAD_TYPE.XHR;
            Yo && this.crossOrigin ? this._loadXdr() : this._loadXhr();
        }
    }, A._hasFlag = function(t) {
        return 0 != (this._flags & t);
    }, A._setFlag = function(t, e) {
        this._flags = e ? this._flags | t : this._flags & ~t;
    }, A._clearEvents = function() {
        clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), 
        this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), 
        this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), 
        this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), 
        this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, 
        this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null));
    }, A._finish = function() {
        if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
        this._setFlag(D.STATUS_FLAGS.COMPLETE, !0), this._setFlag(D.STATUS_FLAGS.LOADING, !1), 
        this.onComplete.dispatch(this);
    }, A._loadElement = function(t) {
        this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image() : this.data = document.createElement(t), 
        this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), 
        this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), 
        this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
    }, A._loadSourceElement = function(t) {
        if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio() : this.data = document.createElement(t), 
        null === this.data) this.abort("Unsupported element: " + t); else {
            if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource) if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url; else if (Array.isArray(this.url)) for (var e = this.metadata.mimeType, i = 0; i < this.url.length; ++i) this.data.appendChild(this._createSource(t, this.url[i], Array.isArray(e) ? e[i] : e)); else {
                var r = this.metadata.mimeType;
                this.data.appendChild(this._createSource(t, this.url, Array.isArray(r) ? r[0] : r));
            }
            this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), 
            this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), 
            this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
        }
    }, A._loadXhr = function() {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var t = this.xhr = new XMLHttpRequest();
        t.open("GET", this.url, !0), t.timeout = this.timeout, this.xhrType === D.XHR_RESPONSE_TYPE.JSON || this.xhrType === D.XHR_RESPONSE_TYPE.DOCUMENT ? t.responseType = D.XHR_RESPONSE_TYPE.TEXT : t.responseType = this.xhrType, 
        t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("timeout", this._boundXhrOnTimeout, !1), 
        t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), 
        t.addEventListener("load", this._boundXhrOnLoad, !1), t.send();
    }, A._loadXdr = function() {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var t = this.xhr = new XDomainRequest();
        t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, 
        t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), 
        setTimeout(function() {
            return t.send();
        }, 1);
    }, A._createSource = function(t, e, i) {
        i = i || t + "/" + this._getExtension(e);
        t = document.createElement("source");
        return t.src = e, t.type = i, t;
    }, A._onError = function(t) {
        this.abort("Failed to load element using: " + t.target.nodeName);
    }, A._onProgress = function(t) {
        t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total);
    }, A._onTimeout = function() {
        this.abort("Load timed out.");
    }, A._xhrOnError = function() {
        var t = this.xhr;
        this.abort(qo(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"');
    }, A._xhrOnTimeout = function() {
        var t = this.xhr;
        this.abort(qo(t) + " Request timed out.");
    }, A._xhrOnAbort = function() {
        var t = this.xhr;
        this.abort(qo(t) + " Request was aborted by the user.");
    }, A._xhrOnLoad = function() {
        var t, e, i = this.xhr, r = "", n = void 0 === i.status ? 200 : i.status;
        if ("" !== i.responseType && "text" !== i.responseType && void 0 !== i.responseType || (r = i.responseText), 
        0 === n && (0 < r.length || i.responseType === D.XHR_RESPONSE_TYPE.BUFFER) ? n = 200 : 1223 === n && (n = 204), 
        2 != (n / 100 | 0)) this.abort("[" + i.status + "] " + i.statusText + ": " + i.responseURL); else {
            if (this.xhrType === D.XHR_RESPONSE_TYPE.TEXT) this.data = r, this.type = D.TYPE.TEXT; else if (this.xhrType === D.XHR_RESPONSE_TYPE.JSON) try {
                this.data = JSON.parse(r), this.type = D.TYPE.JSON;
            } catch (t) {
                return void this.abort("Error trying to parse loaded json: " + t);
            } else if (this.xhrType === D.XHR_RESPONSE_TYPE.DOCUMENT) try {
                window.DOMParser ? (t = new DOMParser(), this.data = t.parseFromString(r, "text/xml")) : ((e = document.createElement("div")).innerHTML = r, 
                this.data = e), this.type = D.TYPE.XML;
            } catch (t) {
                return void this.abort("Error trying to parse loaded xml: " + t);
            } else this.data = i.response || r;
            this.complete();
        }
    }, A._determineCrossOrigin = function(t, e) {
        if (0 === t.indexOf("data:")) return "";
        if (window.origin !== window.location.origin) return "anonymous";
        e = e || window.location, (Vo = Vo || document.createElement("a")).href = t;
        var i = !(t = Fo(Vo.href, {
            strictMode: !0
        })).port && "" === e.port || t.port === e.port, r = t.protocol ? t.protocol + ":" : "";
        return t.host === e.hostname && i && r === e.protocol ? "" : "anonymous";
    }, A._determineXhrType = function() {
        return D._xhrTypeMap[this.extension] || D.XHR_RESPONSE_TYPE.TEXT;
    }, A._determineLoadType = function() {
        return D._loadTypeMap[this.extension] || D.LOAD_TYPE.XHR;
    }, A._getExtension = function() {
        var t, e, i = this.url;
        return (this.isDataUrl ? (e = i.indexOf("/"), i.substring(e + 1, i.indexOf(";", e))) : (e = i.indexOf("?"), 
        t = i.indexOf("#"), e = Math.min(-1 < e ? e : i.length, -1 < t ? t : i.length), 
        (i = i.substring(0, e)).substring(i.lastIndexOf(".") + 1))).toLowerCase();
    }, A._getMimeFromXhrType = function(t) {
        switch (t) {
          case D.XHR_RESPONSE_TYPE.BUFFER:
            return "application/octet-binary";

          case D.XHR_RESPONSE_TYPE.BLOB:
            return "application/blob";

          case D.XHR_RESPONSE_TYPE.DOCUMENT:
            return "application/xml";

          case D.XHR_RESPONSE_TYPE.JSON:
            return "application/json";

          case D.XHR_RESPONSE_TYPE.DEFAULT:
          case D.XHR_RESPONSE_TYPE.TEXT:
          default:
            return "text/plain";
        }
    }, Go(D, [ {
        key: "isDataUrl",
        get: function() {
            return this._hasFlag(D.STATUS_FLAGS.DATA_URL);
        }
    }, {
        key: "isComplete",
        get: function() {
            return this._hasFlag(D.STATUS_FLAGS.COMPLETE);
        }
    }, {
        key: "isLoading",
        get: function() {
            return this._hasFlag(D.STATUS_FLAGS.LOADING);
        }
    } ]);
    var O = D;
    function D(t, e, i) {
        if ("string" != typeof t || "string" != typeof e) throw new Error("Both name and url are required for constructing a resource.");
        i = i || {}, this._flags = 0, this._setFlag(D.STATUS_FLAGS.DATA_URL, 0 === e.indexOf("data:")), 
        this.name = t, this.url = e, this.extension = this._getExtension(), this.data = null, 
        this.crossOrigin = !0 === i.crossOrigin ? "anonymous" : i.crossOrigin, this.timeout = i.timeout || 0, 
        this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, 
        this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.children = [], 
        this.type = D.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = zo, this._onLoadBinding = null, 
        this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), 
        this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), 
        this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), 
        this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), 
        this.onStart = new Bo(), this.onProgress = new Bo(), this.onComplete = new Bo(), 
        this.onAfterMiddleware = new Bo();
    }
    function Wo(t, e, i) {
        (e = e && 0 === e.indexOf(".") ? e.substring(1) : e) && (t[e] = i);
    }
    function qo(t) {
        return t.toString().replace("object ", "");
    }
    O.STATUS_FLAGS = {
        NONE: 0,
        DATA_URL: 1,
        COMPLETE: 2,
        LOADING: 4
    }, O.TYPE = {
        UNKNOWN: 0,
        JSON: 1,
        XML: 2,
        IMAGE: 3,
        AUDIO: 4,
        VIDEO: 5,
        TEXT: 6
    }, O.LOAD_TYPE = {
        XHR: 1,
        IMAGE: 2,
        AUDIO: 3,
        VIDEO: 4
    }, O.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text"
    }, O._loadTypeMap = {
        gif: O.LOAD_TYPE.IMAGE,
        png: O.LOAD_TYPE.IMAGE,
        bmp: O.LOAD_TYPE.IMAGE,
        jpg: O.LOAD_TYPE.IMAGE,
        jpeg: O.LOAD_TYPE.IMAGE,
        tif: O.LOAD_TYPE.IMAGE,
        tiff: O.LOAD_TYPE.IMAGE,
        webp: O.LOAD_TYPE.IMAGE,
        tga: O.LOAD_TYPE.IMAGE,
        svg: O.LOAD_TYPE.IMAGE,
        "svg+xml": O.LOAD_TYPE.IMAGE,
        mp3: O.LOAD_TYPE.AUDIO,
        ogg: O.LOAD_TYPE.AUDIO,
        wav: O.LOAD_TYPE.AUDIO,
        mp4: O.LOAD_TYPE.VIDEO,
        webm: O.LOAD_TYPE.VIDEO
    }, O._xhrTypeMap = {
        xhtml: O.XHR_RESPONSE_TYPE.DOCUMENT,
        html: O.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: O.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: O.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: O.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: O.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: O.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: O.XHR_RESPONSE_TYPE.BLOB,
        png: O.XHR_RESPONSE_TYPE.BLOB,
        bmp: O.XHR_RESPONSE_TYPE.BLOB,
        jpg: O.XHR_RESPONSE_TYPE.BLOB,
        jpeg: O.XHR_RESPONSE_TYPE.BLOB,
        tif: O.XHR_RESPONSE_TYPE.BLOB,
        tiff: O.XHR_RESPONSE_TYPE.BLOB,
        webp: O.XHR_RESPONSE_TYPE.BLOB,
        tga: O.XHR_RESPONSE_TYPE.BLOB,
        json: O.XHR_RESPONSE_TYPE.JSON,
        text: O.XHR_RESPONSE_TYPE.TEXT,
        txt: O.XHR_RESPONSE_TYPE.TEXT,
        ttf: O.XHR_RESPONSE_TYPE.BUFFER,
        otf: O.XHR_RESPONSE_TYPE.BUFFER
    }, O.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    var Ko = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var Zo = window.URL || window.webkitURL;
    var A = {
        caching: function(t, e) {
            var i = this;
            jo[t.url] ? (t.data = jo[t.url], t.complete()) : t.onComplete.once(function() {
                return jo[i.url] = i.data;
            }), e();
        },
        parsing: function(t, e) {
            if (t.data && t.xhr && t.xhrType === O.XHR_RESPONSE_TYPE.BLOB) if (window.Blob && "string" != typeof t.data) {
                var i;
                if (0 === t.data.type.indexOf("image")) return i = Zo.createObjectURL(t.data), t.blob = t.data, 
                t.data = new Image(), t.data.src = i, t.type = O.TYPE.IMAGE, void (t.data.onload = function() {
                    Zo.revokeObjectURL(i), t.data.onload = null, e();
                });
            } else {
                var r = t.xhr.getResponseHeader("content-type");
                if (r && 0 === r.indexOf("image")) return t.data = new Image(), t.data.src = "data:" + r + ";base64," + function(t) {
                    for (var e = "", i = 0; i < t.length; ) {
                        for (var r = [ 0, 0, 0 ], n = [ 0, 0, 0, 0 ], s = 0; s < r.length; ++s) i < t.length ? r[s] = 255 & t.charCodeAt(i++) : r[s] = 0;
                        switch (n[0] = r[0] >> 2, n[1] = (3 & r[0]) << 4 | r[1] >> 4, n[2] = (15 & r[1]) << 2 | r[2] >> 6, 
                        n[3] = 63 & r[2], i - (t.length - 1)) {
                          case 2:
                            n[3] = 64, n[2] = 64;
                            break;

                          case 1:
                            n[3] = 64;
                        }
                        for (var o = 0; o < n.length; ++o) e += Ko.charAt(n[o]);
                    }
                    return e;
                }(t.xhr.responseText), t.type = O.TYPE.IMAGE, void (t.data.onload = function() {
                    t.data.onload = null, e();
                });
            }
            e();
        }
    }, Jo = /(#[\w-]+)?$/, Qo = ((la = $o.prototype).add = function(t, e, i, r) {
        if (Array.isArray(t)) for (var n = 0; n < t.length; ++n) this.add(t[n]); else {
            if ("object" === _typeof(t) && (r = e || t.callback || t.onComplete, e = (i = t).url, 
            t = t.name || t.key || t.url), "string" != typeof e && (r = i, i = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
            if ("function" == typeof i && (r = i, i = null), this.loading && (!i || !i.parentResource)) throw new Error("Cannot add resources while the loader is running.");
            if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
            if (e = this._prepareUrl(e), this.resources[t] = new O(t, e, i), "function" == typeof r && this.resources[t].onAfterMiddleware.once(r), 
            this.loading) {
                for (var s = i.parentResource, o = [], a = 0; a < s.children.length; ++a) s.children[a].isComplete || o.push(s.children[a]);
                var h = s.progressChunk * (o.length + 1) / (o.length + 2);
                s.children.push(this.resources[t]), s.progressChunk = h;
                for (var u = 0; u < o.length; ++u) o[u].progressChunk = h;
                this.resources[t].progressChunk = h;
            }
            this._queue.push(this.resources[t]);
        }
        return this;
    }, la.pre = function(t) {
        return this._beforeMiddleware.push(t), this;
    }, la.use = function(t) {
        return this._afterMiddleware.push(t), this;
    }, la.reset = function() {
        for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), 
        this.resources) {
            t = this.resources[t];
            t._onLoadBinding && t._onLoadBinding.detach(), t.isLoading && t.abort();
        }
        return this.resources = {}, this;
    }, la.load = function(t) {
        if ("function" == typeof t && this.onComplete.once(t), !this.loading) if (this._queue.idle()) this._onStart(), 
        this._onComplete(); else {
            for (var e = 100 / this._queue._tasks.length, i = 0; i < this._queue._tasks.length; ++i) this._queue._tasks[i].data.progressChunk = e;
            this._onStart(), this._queue.resume();
        }
        return this;
    }, la._prepareUrl = function(t) {
        var e = Fo(t, {
            strictMode: !0
        });
        return e = e.protocol || !e.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, 
        this.defaultQueryString && (t = Jo.exec(e)[0], -1 !== (e = e.substr(0, e.length - t.length)).indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString, 
        e += t), e;
    }, la._loadResource = function(i, t) {
        var r = this;
        i._dequeue = t, ko(this._beforeMiddleware, function(t, e) {
            t.call(r, i, function() {
                e(i.isComplete ? {} : null);
            });
        }, function() {
            i.isComplete ? r._onLoad(i) : (i._onLoadBinding = i.onComplete.once(r._onLoad, r), 
            i.load());
        }, !0);
    }, la._onStart = function() {
        this.progress = 0, this.loading = !0, this.onStart.dispatch(this);
    }, la._onComplete = function() {
        this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources);
    }, la._onLoad = function(i) {
        var r = this;
        i._onLoadBinding = null, this._resourcesParsing.push(i), i._dequeue(), ko(this._afterMiddleware, function(t, e) {
            t.call(r, i, e);
        }, function() {
            i.onAfterMiddleware.dispatch(i), r.progress = Math.min(100, r.progress + i.progressChunk), 
            r.onProgress.dispatch(r, i), i.error ? r.onError.dispatch(i.error, r, i) : r.onLoad.dispatch(r, i), 
            r._resourcesParsing.splice(r._resourcesParsing.indexOf(i), 1), r._queue.idle() && 0 === r._resourcesParsing.length && r._onComplete();
        }, !0);
    }, Go($o, [ {
        key: "concurrency",
        get: function() {
            return this._queue.concurrency;
        },
        set: function(t) {
            this._queue.concurrency = t;
        }
    } ]), $o);
    function $o(t, e) {
        var i = this;
        void 0 === e && (e = 10), this.baseUrl = t = void 0 === t ? "" : t, this.progress = 0, 
        this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], 
        this._resourcesParsing = [], this._boundLoadResource = function(t, e) {
            return i._loadResource(t, e);
        }, this._queue = Xo(this._boundLoadResource, e), this._queue.pause(), this.resources = {}, 
        this.onProgress = new Bo(), this.onError = new Bo(), this.onLoad = new Bo(), this.onStart = new Bo(), 
        this.onComplete = new Bo();
        for (var r = 0; r < $o._defaultBeforeMiddleware.length; ++r) this.pre($o._defaultBeforeMiddleware[r]);
        for (var n = 0; n < $o._defaultAfterMiddleware.length; ++n) this.use($o._defaultAfterMiddleware[n]);
    }
    Qo._defaultBeforeMiddleware = [], Qo._defaultAfterMiddleware = [], Qo.pre = function(t) {
        return Qo._defaultBeforeMiddleware.push(t), Qo;
    }, Qo.use = function(t) {
        return Qo._defaultAfterMiddleware.push(t), Qo;
    };
    function ta() {}
    ta.use = function(t, e) {
        t.data && t.type === O.TYPE.IMAGE && (t.texture = w.fromLoader(t.data, t.url, t.name)), 
        e();
    }, (ea = Qo) && (ra.__proto__ = ea), la = {
        shared: {
            configurable: !0
        }
    }, ((ra.prototype = Object.create(ea && ea.prototype)).constructor = ra).prototype.destroy = function() {
        this._protected || (this.removeAllListeners(), this.reset());
    }, la.shared.get = function() {
        var t = ra._shared;
        return t || ((t = new ra())._protected = !0, ra._shared = t), t;
    }, Object.defineProperties(ra, la);
    var ea, ia = ra;
    function ra(t, e) {
        var r = this;
        ea.call(this, t, e), q.call(this);
        for (var i = 0; i < ra._plugins.length; ++i) {
            var n = ra._plugins[i], s = n.pre, n = n.use;
            s && this.pre(s), n && this.use(n);
        }
        this.onStart.add(function(t) {
            return r.emit("start", t);
        }), this.onProgress.add(function(t, e) {
            return r.emit("progress", t, e);
        }), this.onError.add(function(t, e, i) {
            return r.emit("error", t, e, i);
        }), this.onLoad.add(function(t, e) {
            return r.emit("load", t, e);
        }), this.onComplete.add(function(t, e) {
            return r.emit("complete", t, e);
        }), this._protected = !1;
    }
    Object.assign(ia.prototype, q.prototype), ia._plugins = [], ia.registerPlugin = function(t) {
        return ia._plugins.push(t), t.add && t.add(), ia;
    }, ia.registerPlugin({
        use: A.parsing
    }), ia.registerPlugin(ta);
    function na() {}
    na.init = function(t) {
        t = Object.assign({
            sharedLoader: !1
        }, t), this.loader = t.sharedLoader ? ia.shared : new ia();
    }, na.destroy = function() {
        this.loader && (this.loader.destroy(), this.loader = null);
    };
    var sa, oa = O, A = ((sa = ti) && (aa.__proto__ = sa), la = {
        tint: {
            configurable: !0
        }
    }, ((aa.prototype = Object.create(sa && sa.prototype)).constructor = aa).prototype.setProperties = function(t) {
        t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], 
        this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], 
        this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4]);
    }, aa.prototype.updateTransform = function() {
        this.displayObjectUpdateTransform();
    }, la.tint.get = function() {
        return this._tint;
    }, la.tint.set = function(t) {
        Yt(this._tint = t, this.tintRgb);
    }, aa.prototype.render = function(t) {
        var e = this;
        this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, 
        this.baseTexture.valid) || this.baseTexture.once("update", function() {
            return e.onChildrenChange(0);
        }), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this));
    }, aa.prototype.onChildrenChange = function(t) {
        for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e; ) this._bufferUpdateIDs.push(0);
        this._bufferUpdateIDs[e] = ++this._updateID;
    }, aa.prototype.dispose = function() {
        if (this._buffers) {
            for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
            this._buffers = null;
        }
    }, aa.prototype.destroy = function(t) {
        sa.prototype.destroy.call(this, t), this.dispose(), this._properties = null, this._buffers = null, 
        this._bufferUpdateIDs = null;
    }, Object.defineProperties(aa.prototype, la), aa);
    function aa(t, e, i, r) {
        void 0 === t && (t = 1500), void 0 === i && (i = 16384), void 0 === r && (r = !1), 
        sa.call(this);
        16384 < i && (i = 16384), this._properties = [ !1, !0, !1, !1, !1 ], this._maxSize = t, 
        this._batchSize = i, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, 
        this.interactiveChildren = !1, this.blendMode = G.BLEND_MODES.NORMAL, this.autoResize = r, 
        this.roundPixels = !0, this.baseTexture = null, this.setProperties(e), this._tint = 0, 
        this.tintRgb = new Float32Array(4), this.tint = 16777215;
    }
    function ha(t, e, i) {
        this.geometry = new nr(), this.indexBuffer = null, this.size = i, this.dynamicProperties = [], 
        this.staticProperties = [];
        for (var r = 0; r < t.length; ++r) {
            var n = {
                attributeName: (n = t[r]).attributeName,
                size: n.size,
                uploadFunction: n.uploadFunction,
                type: n.type || G.TYPES.FLOAT,
                offset: n.offset
            };
            (e[r] ? this.dynamicProperties : this.staticProperties).push(n);
        }
        this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, 
        this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, 
        this._updateID = 0, this.initBuffers();
    }
    ha.prototype.initBuffers = function() {
        var t = this.geometry, e = 0;
        this.indexBuffer = new b(Qt(this.size), !0, !0), t.addIndex(this.indexBuffer);
        for (var i = this.dynamicStride = 0; i < this.dynamicProperties.length; ++i) {
            var r = this.dynamicProperties[i];
            r.offset = e, e += r.size, this.dynamicStride += r.size;
        }
        for (var n = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4), s = (this.dynamicData = new Float32Array(n), 
        this.dynamicDataUint32 = new Uint32Array(n), this.dynamicBuffer = new b(this.dynamicData, !1, !1), 
        0), o = this.staticStride = 0; o < this.staticProperties.length; ++o) {
            var a = this.staticProperties[o];
            a.offset = s, s += a.size, this.staticStride += a.size;
        }
        n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(n), this.staticDataUint32 = new Uint32Array(n), 
        this.staticBuffer = new b(this.staticData, !0, !1);
        for (var h = 0; h < this.dynamicProperties.length; ++h) {
            var u = this.dynamicProperties[h];
            t.addAttribute(u.attributeName, this.dynamicBuffer, 0, u.type === G.TYPES.UNSIGNED_BYTE, u.type, 4 * this.dynamicStride, 4 * u.offset);
        }
        for (var l = 0; l < this.staticProperties.length; ++l) {
            var c = this.staticProperties[l];
            t.addAttribute(c.attributeName, this.staticBuffer, 0, c.type === G.TYPES.UNSIGNED_BYTE, c.type, 4 * this.staticStride, 4 * c.offset);
        }
    }, ha.prototype.uploadDynamic = function(t, e, i) {
        for (var r = 0; r < this.dynamicProperties.length; r++) {
            var n = this.dynamicProperties[r];
            n.uploadFunction(t, e, i, n.type === G.TYPES.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset);
        }
        this.dynamicBuffer._updateID++;
    }, ha.prototype.uploadStatic = function(t, e, i) {
        for (var r = 0; r < this.staticProperties.length; r++) {
            var n = this.staticProperties[r];
            n.uploadFunction(t, e, i, n.type === G.TYPES.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset);
        }
        this.staticBuffer._updateID++;
    }, ha.prototype.destroy = function() {
        this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, 
        this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, 
        this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, 
        this.geometry.destroy();
    };
    (ua = xr) && (ca.__proto__ = ua), ((ca.prototype = Object.create(ua && ua.prototype)).constructor = ca).prototype.render = function(t) {
        var e = t.children, i = t._maxSize, r = t._batchSize, n = this.renderer, s = e.length;
        if (0 !== s) {
            i < s && !t.autoResize && (s = i);
            for (var o = (o = t._buffers) || (t._buffers = this.generateBuffers(t)), i = e[0]._texture.baseTexture, a = (this.renderer.state.setBlendMode(qt(t.blendMode, i.alphaMode)), 
            n.gl), h = t.worldTransform.copyTo(this.tempMatrix), u = (h.prepend(n.globalUniforms.uniforms.projectionMatrix), 
            this.shader.uniforms.translationMatrix = h.toArray(!0), this.shader.uniforms.uColor = Kt(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, i.alphaMode), 
            this.shader.uniforms.uSampler = i, this.renderer.shader.bind(this.shader), !1), l = 0, c = 0; l < s; l += r, 
            c += 1) {
                var d = s - l, p = (r < d && (d = r), c >= o.length && o.push(this._generateOneMoreBuffer(t)), 
                o[c]), f = (p.uploadDynamic(e, l, d), t._bufferUpdateIDs[c] || 0);
                (u = u || p._updateID < f) && (p._updateID = t._updateID, p.uploadStatic(e, l, d)), 
                n.geometry.bind(p.geometry), a.drawElements(a.TRIANGLES, 6 * d, a.UNSIGNED_SHORT, 0);
            }
        }
    }, ca.prototype.generateBuffers = function(t) {
        for (var e = [], i = t._maxSize, r = t._batchSize, n = t._properties, s = 0; s < i; s += r) e.push(new ha(this.properties, n, r));
        return e;
    }, ca.prototype._generateOneMoreBuffer = function(t) {
        var e = t._batchSize, t = t._properties;
        return new ha(this.properties, t, e);
    }, ca.prototype.uploadVertices = function(t, e, i, r, n, s) {
        for (var o = 0, a = 0, h = 0, u = 0, l = 0; l < i; ++l) {
            var c = t[e + l], d = c._texture, p = c.scale.x, f = c.scale.y, m = d.trim, d = d.orig;
            m ? (o = (a = m.x - c.anchor.x * d.width) + m.width, h = (u = m.y - c.anchor.y * d.height) + m.height) : (o = d.width * (1 - c.anchor.x), 
            a = d.width * -c.anchor.x, h = d.height * (1 - c.anchor.y), u = d.height * -c.anchor.y), 
            r[s] = a * p, r[s + 1] = u * f, r[s + n] = o * p, r[s + n + 1] = u * f, r[s + 2 * n] = o * p, 
            r[s + 2 * n + 1] = h * f, r[s + 3 * n] = a * p, r[s + 3 * n + 1] = h * f, s += 4 * n;
        }
    }, ca.prototype.uploadPosition = function(t, e, i, r, n, s) {
        for (var o = 0; o < i; o++) {
            var a = t[e + o].position;
            r[s] = a.x, r[s + 1] = a.y, r[s + n] = a.x, r[s + n + 1] = a.y, r[s + 2 * n] = a.x, 
            r[s + 2 * n + 1] = a.y, r[s + 3 * n] = a.x, r[s + 3 * n + 1] = a.y, s += 4 * n;
        }
    }, ca.prototype.uploadRotation = function(t, e, i, r, n, s) {
        for (var o = 0; o < i; o++) {
            var a = t[e + o].rotation;
            r[s] = a, r[s + n] = a, r[s + 2 * n] = a, r[s + 3 * n] = a, s += 4 * n;
        }
    }, ca.prototype.uploadUvs = function(t, e, i, r, n, s) {
        for (var o = 0; o < i; ++o) {
            var a = t[e + o]._texture._uvs;
            a ? (r[s] = a.x0, r[s + 1] = a.y0, r[s + n] = a.x1, r[s + n + 1] = a.y1, r[s + 2 * n] = a.x2, 
            r[s + 2 * n + 1] = a.y2, r[s + 3 * n] = a.x3, r[s + 3 * n + 1] = a.y3) : (r[s] = 0, 
            r[s + 1] = 0, r[s + n] = 0, r[s + n + 1] = 0, r[s + 2 * n] = 0, r[s + 2 * n + 1] = 0, 
            r[s + 3 * n] = 0, r[s + 3 * n + 1] = 0), s += 4 * n;
        }
    }, ca.prototype.uploadTint = function(t, e, i, r, n, s) {
        for (var o = 0; o < i; ++o) {
            var a = t[e + o], h = 0 < a._texture.baseTexture.alphaMode, u = a.alpha, h = u < 1 && h ? Zt(a._tintRGB, u) : a._tintRGB + (255 * u << 24);
            r[s] = h, r[s + n] = h, r[s + 2 * n] = h, r[s + 3 * n] = h, s += 4 * n;
        }
    }, ca.prototype.destroy = function() {
        ua.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), 
        this.tempMatrix = null;
    };
    var ua, la = ca;
    function ca(t) {
        ua.call(this, t), this.shader = null, this.properties = null, this.tempMatrix = new l(), 
        this.properties = [ {
            attributeName: "aVertexPosition",
            size: 2,
            uploadFunction: this.uploadVertices,
            offset: 0
        }, {
            attributeName: "aPositionCoord",
            size: 2,
            uploadFunction: this.uploadPosition,
            offset: 0
        }, {
            attributeName: "aRotation",
            size: 1,
            uploadFunction: this.uploadRotation,
            offset: 0
        }, {
            attributeName: "aTextureCoord",
            size: 2,
            uploadFunction: this.uploadUvs,
            offset: 0
        }, {
            attributeName: "aColor",
            size: 1,
            type: G.TYPES.UNSIGNED_BYTE,
            uploadFunction: this.uploadTint,
            offset: 0
        } ], this.shader = rn.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n", "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}", {});
    }
    function da(t, e, i) {
        void 0 === i && (i = null), this.baseTexture = t, this.textures = {}, this.animations = {}, 
        this.data = e, this.resolution = this._updateResolution(i || (this.baseTexture.resource ? this.baseTexture.resource.url : null)), 
        this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, 
        this._callback = null;
    }
    function pa() {}
    var fa, ma = {
        BATCH_SIZE: {
            configurable: !0
        }
    }, ga = (ma.BATCH_SIZE.get = function() {
        return 1e3;
    }, da.prototype._updateResolution = function(t) {
        var e = this.data.meta.scale, t = fe(t, null);
        return 1 !== (t = null === t ? void 0 !== e ? parseFloat(e) : 1 : t) && this.baseTexture.setResolution(t), 
        t;
    }, da.prototype.parse = function(t) {
        this._batchIndex = 0, this._callback = t, this._frameKeys.length <= da.BATCH_SIZE ? (this._processFrames(0), 
        this._processAnimations(), this._parseComplete()) : this._nextBatch();
    }, da.prototype._processFrames = function(t) {
        for (var e = t, i = da.BATCH_SIZE; e - t < i && e < this._frameKeys.length; ) {
            var r, n, s, o = this._frameKeys[e], a = this._frames[o], h = a.frame;
            h && (r = s = null, n = !1 !== a.trimmed && a.sourceSize ? a.sourceSize : a.frame, 
            n = new T(0, 0, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution), 
            s = a.rotated ? new T(Math.floor(h.x) / this.resolution, Math.floor(h.y) / this.resolution, Math.floor(h.h) / this.resolution, Math.floor(h.w) / this.resolution) : new T(Math.floor(h.x) / this.resolution, Math.floor(h.y) / this.resolution, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution), 
            !1 !== a.trimmed && a.spriteSourceSize && (r = new T(Math.floor(a.spriteSourceSize.x) / this.resolution, Math.floor(a.spriteSourceSize.y) / this.resolution, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution)), 
            this.textures[o] = new w(this.baseTexture, s, n, r, a.rotated ? 2 : 0, a.anchor), 
            w.addToCache(this.textures[o], o)), e++;
        }
    }, da.prototype._processAnimations = function() {
        var t, e = this.data.animations || {};
        for (t in e) {
            this.animations[t] = [];
            for (var i = 0; i < e[t].length; i++) {
                var r = e[t][i];
                this.animations[t].push(this.textures[r]);
            }
        }
    }, da.prototype._parseComplete = function() {
        var t = this._callback;
        this._callback = null, this._batchIndex = 0, t.call(this, this.textures);
    }, da.prototype._nextBatch = function() {
        var t = this;
        this._processFrames(this._batchIndex * da.BATCH_SIZE), this._batchIndex++, setTimeout(function() {
            t._batchIndex * da.BATCH_SIZE < t._frameKeys.length ? t._nextBatch() : (t._processAnimations(), 
            t._parseComplete());
        }, 0);
    }, da.prototype.destroy = function(t) {
        for (var e in void 0 === t && (t = !1), this.textures) this.textures[e].destroy();
        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, 
        t && this.baseTexture.destroy(), this.baseTexture = null;
    }, Object.defineProperties(da, ma), pa.use = function(i, r) {
        var t, e, n = i.name + "_image";
        i.data && i.type === oa.TYPE.JSON && i.data.frames && !this.resources[n] ? (t = {
            crossOrigin: i.crossOrigin,
            metadata: i.metadata.imageMetadata,
            parentResource: i
        }, e = pa.getResourcePath(i, this.baseUrl), this.add(n, e, t, function(t) {
            var e;
            t.error ? r(t.error) : (e = new da(t.texture.baseTexture, i.data, i.url)).parse(function() {
                i.spritesheet = e, i.textures = e.textures, r();
            });
        })) : r();
    }, pa.getResourcePath = function(t, e) {
        return t.isDataUrl ? t.data.meta.image : Xt.resolve(t.url.replace(e, ""), t.data.meta.image);
    }, new ge()), ma = ((fa = so) && (ya.__proto__ = fa), (ya.prototype = Object.create(fa && fa.prototype)).constructor = ya, 
    (ma = {
        clampMargin: {
            configurable: !0
        },
        tileScale: {
            configurable: !0
        },
        tilePosition: {
            configurable: !0
        },
        width: {
            configurable: !0
        },
        height: {
            configurable: !0
        }
    }).clampMargin.get = function() {
        return this.uvMatrix.clampMargin;
    }, ma.clampMargin.set = function(t) {
        this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0);
    }, ma.tileScale.get = function() {
        return this.tileTransform.scale;
    }, ma.tileScale.set = function(t) {
        this.tileTransform.scale.copyFrom(t);
    }, ma.tilePosition.get = function() {
        return this.tileTransform.position;
    }, ma.tilePosition.set = function(t) {
        this.tileTransform.position.copyFrom(t);
    }, ya.prototype._onTextureUpdate = function() {
        this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215;
    }, ya.prototype._render = function(t) {
        var e = this._texture;
        e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), 
        t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this));
    }, ya.prototype._calculateBounds = function() {
        var t = this._width * -this._anchor._x, e = this._height * -this._anchor._y, i = this._width * (1 - this._anchor._x), r = this._height * (1 - this._anchor._y);
        this._bounds.addFrame(this.transform, t, e, i, r);
    }, ya.prototype.getLocalBounds = function(t) {
        return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, 
        this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), 
        this._bounds.maxY = this._height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new T()), 
        t = this._localBoundsRect), this._bounds.getRectangle(t)) : fa.prototype.getLocalBounds.call(this, t);
    }, ya.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, ga);
        var t = this._width, e = this._height, i = -t * this.anchor._x;
        if (ga.x >= i && ga.x < i + t) {
            i = -e * this.anchor._y;
            if (ga.y >= i && ga.y < i + e) return !0;
        }
        return !1;
    }, ya.prototype.destroy = function(t) {
        fa.prototype.destroy.call(this, t), this.tileTransform = null, this.uvMatrix = null;
    }, ya.from = function(t, e, i) {
        return new ya(w.from(t), e, i);
    }, ya.fromFrame = function(t, e, i) {
        var r = ae[t];
        if (r) return new ya(r, e, i);
        throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
    }, ya.fromImage = function(t, e, i, r) {
        return r && "object" !== _typeof(r) && (r = {
            scaleMode: arguments[4],
            resourceOptions: {
                crossorigin: arguments[3]
            }
        }), new ya(w.from(t, r), e, i);
    }, ma.width.get = function() {
        return this._width;
    }, ma.width.set = function(t) {
        this._width = t;
    }, ma.height.get = function() {
        return this._height;
    }, ma.height.set = function(t) {
        this._height = t;
    }, Object.defineProperties(ya.prototype, ma), ya);
    function ya(t, e, i) {
        void 0 === e && (e = 100), void 0 === i && (i = 100), fa.call(this, t), this.tileTransform = new ke(), 
        this._width = e, this._height = i, this._canvasPattern = null, this.uvMatrix = t.uvMatrix || new un(t), 
        this.pluginName = "tilingSprite", this.uvRespectAnchor = !1;
    }
    var _a, va = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", xa = new l(), ba = ((_a = xr) && (Ea.__proto__ = _a), 
    ((Ea.prototype = Object.create(_a && _a.prototype)).constructor = Ea).prototype.render = function(t) {
        var e = this.renderer, i = this.quad, r = i.vertices, r = (r[0] = r[6] = t._width * -t.anchor.x, 
        r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), 
        r[5] = r[7] = t._height * (1 - t.anchor.y), t.uvRespectAnchor && ((r = i.uvs)[0] = r[6] = -t.anchor.x, 
        r[1] = r[3] = -t.anchor.y, r[2] = r[4] = 1 - t.anchor.x, r[5] = r[7] = 1 - t.anchor.y), 
        i.invalidate(), t._texture), n = r.baseTexture, s = t.tileTransform.localTransform, o = t.uvMatrix, a = n.isPowerOfTwo && r.frame.width === n.width && r.frame.height === n.height, h = (a && (n._glTextures[e.CONTEXT_UID] ? a = n.wrapMode !== G.WRAP_MODES.CLAMP : n.wrapMode === G.WRAP_MODES.CLAMP && (n.wrapMode = G.WRAP_MODES.REPEAT)), 
        a ? this.simpleShader : this.shader), u = r.width, l = r.height, c = t._width, d = t._height;
        xa.set(s.a * u / c, s.b * u / d, s.c * l / c, s.d * l / d, s.tx / c, s.ty / d), 
        xa.invert(), a ? xa.prepend(o.mapCoord) : (h.uniforms.uMapCoord = o.mapCoord.toArray(!0), 
        h.uniforms.uClampFrame = o.uClampFrame, h.uniforms.uClampOffset = o.uClampOffset), 
        h.uniforms.uTransform = xa.toArray(!0), h.uniforms.uColor = Jt(t.tint, t.worldAlpha, h.uniforms.uColor, n.alphaMode), 
        h.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), h.uniforms.uSampler = r, 
        e.shader.bind(h), e.geometry.bind(i), e.state.setBlendMode(qt(t.blendMode, n.alphaMode)), 
        e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
    }, Ea);
    function Ea(t) {
        _a.call(this, t);
        t = {
            globals: this.renderer.globalUniforms
        };
        this.shader = rn.from(va, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord - floor(vTextureCoord - uClampOffset);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n", t), 
        this.simpleShader = rn.from(va, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n", t), 
        this.quad = new dr();
    }
    (Ta = ti) && (Sa.__proto__ = Ta), M = {
        tint: {
            configurable: !0
        },
        align: {
            configurable: !0
        },
        anchor: {
            configurable: !0
        },
        font: {
            configurable: !0
        },
        text: {
            configurable: !0
        },
        maxWidth: {
            configurable: !0
        },
        maxLineHeight: {
            configurable: !0
        },
        textWidth: {
            configurable: !0
        },
        letterSpacing: {
            configurable: !0
        },
        textHeight: {
            configurable: !0
        }
    }, ((Sa.prototype = Object.create(Ta && Ta.prototype)).constructor = Sa).prototype.updateText = function() {
        for (var t = Sa.fonts[this._font.name], e = this._font.size / t.size, i = new ge(), r = [], n = [], s = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", o = s.length, a = this._maxWidth * t.size / this._font.size, h = null, u = 0, l = 0, c = 0, d = -1, p = 0, f = 0, m = 0, g = 0; g < o; g++) {
            var y = s.charCodeAt(g), _ = s.charAt(g);
            /(?:\s)/.test(_) && (d = g, p = u), "\r" === _ || "\n" === _ ? (n.push(u), l = Math.max(l, u), 
            ++c, ++f, i.x = 0, i.y += t.lineHeight, h = null) : (_ = t.chars[y]) && (h && _.kerning[h] && (i.x += _.kerning[h]), 
            r.push({
                texture: _.texture,
                line: c,
                charCode: y,
                position: new ge(i.x + _.xOffset + this._letterSpacing / 2, i.y + _.yOffset)
            }), i.x += _.xAdvance + this._letterSpacing, u = i.x, m = Math.max(m, _.yOffset + _.texture.height), 
            h = y, -1 !== d) && 0 < a && i.x > a && ($t(r, 1 + d - ++f, 1 + g - d), g = d, d = -1, 
            n.push(p), l = Math.max(l, p), c++, i.x = 0, i.y += t.lineHeight, h = null);
        }
        for (var v = s.charAt(s.length - 1), x = ("\r" !== v && "\n" !== v && (/(?:\s)/.test(v) && (u = p), 
        n.push(u), l = Math.max(l, u)), []), b = 0; b <= c; b++) {
            var E = 0;
            "right" === this._font.align ? E = l - n[b] : "center" === this._font.align && (E = (l - n[b]) / 2), 
            x.push(E);
        }
        for (var T = r.length, w = this.tint, S = 0; S < T; S++) {
            var I = this._glyphs[S];
            I ? I.texture = r[S].texture : ((I = new so(r[S].texture)).roundPixels = this.roundPixels, 
            this._glyphs.push(I)), I.position.x = (r[S].position.x + x[r[S].line]) * e, I.position.y = r[S].position.y * e, 
            I.scale.x = I.scale.y = e, I.tint = w, I.parent || this.addChild(I);
        }
        for (var P = T; P < this._glyphs.length; ++P) this.removeChild(this._glyphs[P]);
        if (this._textWidth = l * e, this._textHeight = (i.y + t.lineHeight) * e, 0 !== this.anchor.x || 0 !== this.anchor.y) for (var A = 0; A < T; A++) this._glyphs[A].x -= this._textWidth * this.anchor.x, 
        this._glyphs[A].y -= this._textHeight * this.anchor.y;
        this._maxLineHeight = m * e;
    }, Sa.prototype.updateTransform = function() {
        this.validate(), this.containerUpdateTransform();
    }, Sa.prototype.getLocalBounds = function() {
        return this.validate(), Ta.prototype.getLocalBounds.call(this);
    }, Sa.prototype.validate = function() {
        this.dirty && (this.updateText(), this.dirty = !1);
    }, M.tint.get = function() {
        return this._font.tint;
    }, M.tint.set = function(t) {
        this._font.tint = "number" == typeof t && 0 <= t ? t : 16777215, this.dirty = !0;
    }, M.align.get = function() {
        return this._font.align;
    }, M.align.set = function(t) {
        this._font.align = t || "left", this.dirty = !0;
    }, M.anchor.get = function() {
        return this._anchor;
    }, M.anchor.set = function(t) {
        "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t);
    }, M.font.get = function() {
        return this._font;
    }, M.font.set = function(t) {
        t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), 
        this._font.size = 2 <= t.length ? parseInt(t[0], 10) : Sa.fonts[this._font.name].size) : (this._font.name = t.name, 
        this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0);
    }, M.text.get = function() {
        return this._text;
    }, M.text.set = function(t) {
        t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0);
    }, M.maxWidth.get = function() {
        return this._maxWidth;
    }, M.maxWidth.set = function(t) {
        this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0);
    }, M.maxLineHeight.get = function() {
        return this.validate(), this._maxLineHeight;
    }, M.textWidth.get = function() {
        return this.validate(), this._textWidth;
    }, M.letterSpacing.get = function() {
        return this._letterSpacing;
    }, M.letterSpacing.set = function(t) {
        this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0);
    }, M.textHeight.get = function() {
        return this.validate(), this._textHeight;
    }, Sa.registerFont = function(t, e) {
        var i = {}, r = t.getElementsByTagName("info")[0], n = t.getElementsByTagName("common")[0], s = t.getElementsByTagName("page"), o = fe(s[0].getAttribute("file"), E.RESOLUTION), a = {};
        i.font = r.getAttribute("face"), i.size = parseInt(r.getAttribute("size"), 10), 
        i.lineHeight = parseInt(n.getAttribute("lineHeight"), 10) / o, i.chars = {}, e instanceof w && (e = [ e ]);
        for (var h = 0; h < s.length; h++) {
            var u = s[h].getAttribute("id"), l = s[h].getAttribute("file");
            a[u] = e instanceof Array ? e[h] : e[l];
        }
        for (var c = t.getElementsByTagName("char"), d = 0; d < c.length; d++) {
            var p = c[d], f = parseInt(p.getAttribute("id"), 10), m = p.getAttribute("page") || 0, g = new T(parseInt(p.getAttribute("x"), 10) / o + a[m].frame.x / o, parseInt(p.getAttribute("y"), 10) / o + a[m].frame.y / o, parseInt(p.getAttribute("width"), 10) / o, parseInt(p.getAttribute("height"), 10) / o);
            i.chars[f] = {
                xOffset: parseInt(p.getAttribute("xoffset"), 10) / o,
                yOffset: parseInt(p.getAttribute("yoffset"), 10) / o,
                xAdvance: parseInt(p.getAttribute("xadvance"), 10) / o,
                kerning: {},
                texture: new w(a[m].baseTexture, g),
                page: m
            };
        }
        for (var y = t.getElementsByTagName("kerning"), _ = 0; _ < y.length; _++) {
            var v = y[_], x = parseInt(v.getAttribute("first"), 10) / o, b = parseInt(v.getAttribute("second"), 10) / o, v = parseInt(v.getAttribute("amount"), 10) / o;
            i.chars[b] && (i.chars[b].kerning[x] = v);
        }
        return Sa.fonts[i.font] = i;
    }, Object.defineProperties(Sa.prototype, M);
    var Ta, wa = Sa;
    function Sa(t, e) {
        var i = this;
        void 0 === e && (e = {}), Ta.call(this), this._textWidth = 0, this._textHeight = 0, 
        this._glyphs = [], this._font = {
            tint: void 0 !== e.tint ? e.tint : 16777215,
            align: e.align || "left",
            name: null,
            size: 0
        }, this.font = e.font, this._text = t, this._maxWidth = 0, this._maxLineHeight = 0, 
        this._letterSpacing = 0, this._anchor = new _e(function() {
            i.dirty = !0;
        }, this, 0, 0), this.dirty = !1, this.roundPixels = E.ROUND_PIXELS, this.updateText();
    }
    wa.fonts = {};
    function Ia() {}
    Ia.parse = function(t, e) {
        t.bitmapFont = wa.registerFont(t.data, e);
    }, Ia.add = function() {
        oa.setExtensionXhrType("fnt", oa.XHR_RESPONSE_TYPE.DOCUMENT);
    }, Ia.dirname = function(t) {
        var e = t.replace(/\/$/, "").replace(/\/[^\/]*$/, "");
        return e === t ? "." : "" === e ? "/" : e;
    }, Ia.use = function(e, i) {
        if (e.data && e.type === oa.TYPE.XML) if (0 === e.data.getElementsByTagName("page").length || 0 === e.data.getElementsByTagName("info").length || null === e.data.getElementsByTagName("info")[0].getAttribute("face")) i(); else for (var t = e.isDataUrl ? "" : Ia.dirname(e.url), r = (e.isDataUrl && ("." === t && (t = ""), 
        this.baseUrl) && t && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (t += "/"), 
        (t = t.replace(this.baseUrl, "")) && "/" !== t.charAt(t.length - 1) && (t += "/"), 
        e.data.getElementsByTagName("page")), n = {}, s = function(t) {
            n[t.metadata.pageFile] = t.texture, Object.keys(n).length === r.length && (Ia.parse(e, n), 
            i());
        }, o = 0; o < r.length; ++o) {
            var a, h, u = r[o].getAttribute("file"), l = t + u, c = !1;
            for (a in this.resources) {
                var d = this.resources[a];
                if (d.url === l) {
                    d.metadata.pageFile = u, d.texture ? s(d) : d.onAfterMiddleware.add(s), c = !0;
                    break;
                }
            }
            c || (h = {
                crossOrigin: e.crossOrigin,
                loadType: oa.LOAD_TYPE.IMAGE,
                metadata: Object.assign({
                    pageFile: u
                }, e.metadata.imageMetadata),
                parentResource: e
            }, this.add(l, h, s));
        } else i();
    };
    (Pa = a) && (Aa.__proto__ = Pa), (Aa.prototype = Object.create(Pa && Pa.prototype)).constructor = Aa, 
    (M = {
        alpha: {
            configurable: !0
        }
    }).alpha.get = function() {
        return this.uniforms.uAlpha;
    }, M.alpha.set = function(t) {
        this.uniforms.uAlpha = t;
    }, Object.defineProperties(Aa.prototype, M);
    var Pa, M = Aa;
    function Aa(t) {
        void 0 === t && (t = 1), Pa.call(this, es, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n", {
            uAlpha: 1
        }), this.alpha = t;
    }
    var Oa = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }";
    var Da = {
        5: [ .153388, .221461, .250301 ],
        7: [ .071303, .131514, .189879, .214607 ],
        9: [ .028532, .067234, .124009, .179044, .20236 ],
        11: [ .0093, .028002, .065984, .121703, .175713, .198596 ],
        13: [ .002406, .009255, .027867, .065666, .121117, .174868, .197641 ],
        15: [ 489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448 ]
    }, Ma = [ "varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}" ].join("\n");
    (Ca = a) && (La.__proto__ = Ca), C = {
        blur: {
            configurable: !0
        },
        quality: {
            configurable: !0
        }
    }, ((La.prototype = Object.create(Ca && Ca.prototype)).constructor = La).prototype.apply = function(t, e, i, r) {
        if (i ? this.horizontal ? this.uniforms.strength = 1 / i.width * (i.width / e.width) : this.uniforms.strength = 1 / i.height * (i.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), 
        this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 
        1 === this.passes) t.applyFilter(this, e, i, r); else {
            var n = t.getFilterTexture(), s = t.renderer, o = e, a = n;
            this.state.blend = !1, t.applyFilter(this, o, a, !1);
            for (var h = 1; h < this.passes - 1; h++) {
                s.renderTexture.bind(o, o.filterFrame);
                var u = this.uniforms.uSampler = a, a = o, o = u;
                s.shader.bind(this), s.geometry.draw(5);
            }
            this.state.blend = !0, t.applyFilter(this, a, i, r), t.returnFilterTexture(n);
        }
    }, C.blur.get = function() {
        return this.strength;
    }, C.blur.set = function(t) {
        this.padding = 1 + 2 * Math.abs(t), this.strength = t;
    }, C.quality.get = function() {
        return this._quality;
    }, C.quality.set = function(t) {
        this._quality = t, this.passes = t;
    }, Object.defineProperties(La.prototype, C);
    var Ca, Ra = La;
    function La(t, e, i, r, n) {
        var s = function(t, e) {
            for (var i = Math.ceil(t / 2), r = Oa, n = "", s = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);", o = 0; o < t; o++) n = n + s.replace("%index%", o).replace("%sampleIndex%", o - (i - 1) + ".0") + "\n";
            return r = (r = r.replace("%blur%", n)).replace("%size%", t);
        }(n = n || 5, t), n = function(t) {
            for (var e = Da[t], i = e.length, r = Ma, n = "", s = 0; s < t; s++) var o = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s), a = s, n = n + (o = o.replace("%value%", e[a = i <= s ? t - s - 1 : a])) + "\n";
            return r = (r = r.replace("%blur%", n)).replace("%size%", t);
        }(n);
        Ca.call(this, s, n), this.horizontal = t, this.resolution = r || E.RESOLUTION, this._quality = 0, 
        this.quality = i || 4, this.blur = e || 8;
    }
    (Na = a) && (Fa.__proto__ = Na), C = {
        blur: {
            configurable: !0
        },
        quality: {
            configurable: !0
        },
        blurX: {
            configurable: !0
        },
        blurY: {
            configurable: !0
        },
        blendMode: {
            configurable: !0
        },
        repeatEdgePixels: {
            configurable: !0
        }
    }, ((Fa.prototype = Object.create(Na && Na.prototype)).constructor = Fa).prototype.apply = function(t, e, i, r) {
        var n = Math.abs(this.blurXFilter.strength), s = Math.abs(this.blurYFilter.strength);
        n && s ? (n = t.getFilterTexture(), this.blurXFilter.apply(t, e, n, !0), this.blurYFilter.apply(t, n, i, r), 
        t.returnFilterTexture(n)) : (s ? this.blurYFilter : this.blurXFilter).apply(t, e, i, r);
    }, Fa.prototype.updatePadding = function() {
        this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
    }, C.blur.get = function() {
        return this.blurXFilter.blur;
    }, C.blur.set = function(t) {
        this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding();
    }, C.quality.get = function() {
        return this.blurXFilter.quality;
    }, C.quality.set = function(t) {
        this.blurXFilter.quality = this.blurYFilter.quality = t;
    }, C.blurX.get = function() {
        return this.blurXFilter.blur;
    }, C.blurX.set = function(t) {
        this.blurXFilter.blur = t, this.updatePadding();
    }, C.blurY.get = function() {
        return this.blurYFilter.blur;
    }, C.blurY.set = function(t) {
        this.blurYFilter.blur = t, this.updatePadding();
    }, C.blendMode.get = function() {
        return this.blurYFilter.blendMode;
    }, C.blendMode.set = function(t) {
        this.blurYFilter.blendMode = t;
    }, C.repeatEdgePixels.get = function() {
        return this._repeatEdgePixels;
    }, C.repeatEdgePixels.set = function(t) {
        this._repeatEdgePixels = t, this.updatePadding();
    }, Object.defineProperties(Fa.prototype, C);
    var Na, C = Fa;
    function Fa(t, e, i, r) {
        Na.call(this), this.blurXFilter = new Ra(!0, t, e, i, r), this.blurYFilter = new Ra(!1, t, e, i, r), 
        this.resolution = i || E.RESOLUTION, this.quality = e || 4, this.blur = t || 8, 
        this.repeatEdgePixels = !1;
    }
    (Ba = a) && (R.__proto__ = Ba), Ua = {
        matrix: {
            configurable: !0
        },
        alpha: {
            configurable: !0
        }
    }, ((R.prototype = Object.create(Ba && Ba.prototype)).constructor = R).prototype._loadMatrix = function(t, e) {
        var i = t;
        (e = void 0 === e ? !1 : e) && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), 
        this.uniforms.m = i;
    }, R.prototype._multiply = function(t, e, i) {
        return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], 
        t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], 
        t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19] + e[4], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], 
        t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], 
        t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19] + e[9], 
        t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], 
        t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], 
        t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19] + e[14], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], 
        t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], 
        t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19] + e[19], 
        t;
    }, R.prototype._colorMatrix = function(t) {
        t = new Float32Array(t);
        return t[4] /= 255, t[9] /= 255, t[14] /= 255, t[19] /= 255, t;
    }, R.prototype.brightness = function(t, e) {
        this._loadMatrix([ t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0 ], e);
    }, R.prototype.greyscale = function(t, e) {
        this._loadMatrix([ t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0 ], e);
    }, R.prototype.blackAndWhite = function(t) {
        this._loadMatrix([ .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.hue = function(t, e) {
        t = (t || 0) / 180 * Math.PI;
        var i = Math.cos(t), t = Math.sin(t), r = (0, Math.sqrt)(1 / 3);
        this._loadMatrix([ i + 1 / 3 * (1 - i), 1 / 3 * (1 - i) - r * t, 1 / 3 * (1 - i) + r * t, 0, 0, 1 / 3 * (1 - i) + r * t, i + 1 / 3 * (1 - i), 1 / 3 * (1 - i) - r * t, 0, 0, 1 / 3 * (1 - i) - r * t, 1 / 3 * (1 - i) + r * t, i + 1 / 3 * (1 - i), 0, 0, 0, 0, 0, 1, 0 ], e);
    }, R.prototype.contrast = function(t, e) {
        var t = (t || 0) + 1, i = -.5 * (t - 1);
        this._loadMatrix([ t, 0, 0, 0, i, 0, t, 0, 0, i, 0, 0, t, 0, i, 0, 0, 0, 1, 0 ], e);
    }, R.prototype.saturate = function(t, e) {
        var t = 2 * (t = void 0 === t ? 0 : t) / 3 + 1, i = -.5 * (t - 1);
        this._loadMatrix([ t, i, i, 0, 0, i, t, i, 0, 0, i, i, t, 0, 0, 0, 0, 0, 1, 0 ], e);
    }, R.prototype.desaturate = function() {
        this.saturate(-1);
    }, R.prototype.negative = function(t) {
        this._loadMatrix([ -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.sepia = function(t) {
        this._loadMatrix([ .393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.technicolor = function(t) {
        this._loadMatrix([ 1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.polaroid = function(t) {
        this._loadMatrix([ 1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.toBGR = function(t) {
        this._loadMatrix([ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.kodachrome = function(t) {
        this._loadMatrix([ 1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.browni = function(t) {
        this._loadMatrix([ .5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.vintage = function(t) {
        this._loadMatrix([ .6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.colorTone = function(t, e, i, r, n) {
        var s = ((i = i || 16770432) >> 16 & 255) / 255, o = (i >> 8 & 255) / 255, i = (255 & i) / 255, a = ((r = r || 3375104) >> 16 & 255) / 255, h = (r >> 8 & 255) / 255, r = (255 & r) / 255;
        this._loadMatrix([ .3, .59, .11, 0, 0, s, o, i, t = t || .2, 0, a, h, r, e = e || .15, 0, s - a, o - h, i - r, 0, 0 ], n);
    }, R.prototype.night = function(t, e) {
        this._loadMatrix([ -2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0 ], e);
    }, R.prototype.predator = function(t, e) {
        this._loadMatrix([ 11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0 ], e);
    }, R.prototype.lsd = function(t) {
        this._loadMatrix([ 2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0 ], t);
    }, R.prototype.reset = function() {
        this._loadMatrix([ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ], !1);
    }, Ua.matrix.get = function() {
        return this.uniforms.m;
    }, Ua.matrix.set = function(t) {
        this.uniforms.m = t;
    }, Ua.alpha.get = function() {
        return this.uniforms.uAlpha;
    }, Ua.alpha.set = function(t) {
        this.uniforms.uAlpha = t;
    }, Object.defineProperties(R.prototype, Ua);
    var Ba, Ua = R;
    function R() {
        var t = {
            m: new Float32Array([ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ]),
            uAlpha: 1
        };
        Ba.call(this, is, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n", t), 
        this.alpha = 1;
    }
    Ua.prototype.grayscale = Ua.prototype.greyscale;
    (ka = a) && (ja.__proto__ = ka), Xa = {
        map: {
            configurable: !0
        }
    }, ((ja.prototype = Object.create(ka && ka.prototype)).constructor = ja).prototype.apply = function(t, e, i, r) {
        this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), 
        this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
        var n = this.maskSprite.transform.worldTransform, s = Math.sqrt(n.a * n.a + n.b * n.b), o = Math.sqrt(n.c * n.c + n.d * n.d);
        0 !== s && 0 !== o && (this.uniforms.rotation[0] = n.a / s, this.uniforms.rotation[1] = n.b / s, 
        this.uniforms.rotation[2] = n.c / o, this.uniforms.rotation[3] = n.d / o), t.applyFilter(this, e, i, r);
    }, Xa.map.get = function() {
        return this.uniforms.mapSampler;
    }, Xa.map.set = function(t) {
        this.uniforms.mapSampler = t;
    }, Object.defineProperties(ja.prototype, Xa);
    var ka, Xa = ja;
    function ja(t, e) {
        var i = new l();
        t.renderable = !1, ka.call(this, "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n", {
            mapSampler: t._texture,
            filterMatrix: i,
            scale: {
                x: 1,
                y: 1
            },
            rotation: new Float32Array([ 1, 0, 0, 1 ])
        }), this.maskSprite = t, this.maskMatrix = i, this.scale = new ge(e = null == e ? 20 : e, e);
    }
    (Ha = a) && (Ya.__proto__ = Ha);
    var Ha, Ga = (Ya.prototype = Object.create(Ha && Ha.prototype)).constructor = Ya;
    function Ya() {
        Ha.call(this, "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputPixel;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputPixel;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n');
    }
    (Va = a) && (Wa.__proto__ = Va), (Wa.prototype = Object.create(Va && Va.prototype)).constructor = Wa, 
    (za = {
        noise: {
            configurable: !0
        },
        seed: {
            configurable: !0
        }
    }).noise.get = function() {
        return this.uniforms.uNoise;
    }, za.noise.set = function(t) {
        this.uniforms.uNoise = t;
    }, za.seed.get = function() {
        return this.uniforms.uSeed;
    }, za.seed.set = function(t) {
        this.uniforms.uSeed = t;
    }, Object.defineProperties(Wa.prototype, za);
    var Va, za = Wa;
    function Wa(t, e) {
        void 0 === t && (t = .5), void 0 === e && (e = Math.random()), Va.call(this, is, "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n", {
            uNoise: 0,
            uSeed: 0
        }), this.noise = t, this.seed = e;
    }
    function qa() {
        this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, 
        this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, 
        this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, 
        this.originalFilterArea = null, this.sprite = null;
    }
    var Ka = new l(), L = (e.prototype._cacheAsBitmap = !1, e.prototype._cacheData = !1, 
    Object.defineProperties(e.prototype, {
        cacheAsBitmap: {
            get: function() {
                return this._cacheAsBitmap;
            },
            set: function(t) {
                var e;
                this._cacheAsBitmap !== t && ((this._cacheAsBitmap = t) ? (this._cacheData || (this._cacheData = new qa()), 
                (e = this._cacheData).originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, 
                e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, 
                e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, 
                e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, 
                this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, 
                this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), 
                this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, 
                this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, 
                this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, 
                this._mask = e.originalMask, this.filterArea = e.originalFilterArea));
            }
        }
    }), e.prototype._renderCached = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), 
        this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, 
        this._cacheData.sprite._render(t));
    }, e.prototype._initCachedDisplayObject = function(t) {
        var e, i, r, n, s, o, a;
        this._cacheData && this._cacheData.sprite || (e = this.alpha, this.alpha = 1, t.batch.flush(), 
        i = this.getLocalBounds().clone(), this.filters && (r = this.filters[0].padding, 
        i.pad(r)), i.ceil(E.RESOLUTION), r = t.renderTexture.current, n = t.renderTexture.sourceFrame, 
        s = t.projection.transform, o = Ji.create(i.width, i.height), a = "cacheAsBitmap_" + ++te, 
        this._cacheData.textureCacheId = a, f.addToCache(o.baseTexture, a), w.addToCache(o, a), 
        (a = Ka).tx = -i.x, a.ty = -i.y, this.transform.worldTransform.identity(), this.render = this._cacheData.originalRender, 
        t.render(this, o, !0, a, !0), t.projection.transform = s, t.renderTexture.bind(r, n), 
        this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, 
        this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, 
        this._mask = null, this.filterArea = null, (a = new so(o)).transform.worldTransform = this.transform.worldTransform, 
        a.anchor.x = -(i.x / i.width), a.anchor.y = -(i.y / i.height), a.alpha = e, a._bounds = this._bounds, 
        this._cacheData.sprite = a, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, 
        this.updateTransform(), this.parent = null), this.containsPoint = a.containsPoint.bind(a));
    }, e.prototype._renderCachedCanvas = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), 
        this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t));
    }, e.prototype._initCachedDisplayObjectCanvas = function(t) {
        var e, i, r, n, s;
        this._cacheData && this._cacheData.sprite || (e = this.getLocalBounds(), i = this.alpha, 
        this.alpha = 1, r = t.context, e.ceil(E.RESOLUTION), n = Ji.create(e.width, e.height), 
        s = "cacheAsBitmap_" + ++te, this._cacheData.textureCacheId = s, f.addToCache(n.baseTexture, s), 
        w.addToCache(n, s), this.transform.localTransform.copyTo(s = Ka), s.invert(), s.tx -= e.x, 
        s.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, n, !0, s, !1), 
        t.context = r, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, 
        this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, 
        this._mask = null, this.filterArea = null, (s = new so(n)).transform.worldTransform = this.transform.worldTransform, 
        s.anchor.x = -(e.x / e.width), s.anchor.y = -(e.y / e.height), s.alpha = i, s._bounds = this._bounds, 
        this._cacheData.sprite = s, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, 
        this.updateTransform(), this.parent = null), this.containsPoint = s.containsPoint.bind(s));
    }, e.prototype._calculateCachedBounds = function() {
        this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, 
        this._cacheData.sprite._calculateBounds(), this._lastBoundsID = this._boundsID;
    }, e.prototype._getCachedLocalBounds = function() {
        return this._cacheData.sprite.getLocalBounds();
    }, e.prototype._destroyCachedDisplayObject = function() {
        this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, f.removeFromCache(this._cacheData.textureCacheId), 
        w.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
    }, e.prototype._cacheAsBitmapDestroy = function(t) {
        this.cacheAsBitmap = !1, this.destroy(t);
    }, e.prototype.name = null, ti.prototype.getChildByName = function(t) {
        for (var e = 0; e < this.children.length; e++) if (this.children[e].name === t) return this.children[e];
        return null;
    }, e.prototype.getGlobalPosition = function(t, e) {
        return void 0 === t && (t = new ge()), void 0 === e && (e = !1), this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, 
        t.y = this.position.y), t;
    }, "5.0.0");
    function Za(t, e) {
        this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, 
        this._textureUpdateId = -1, this._updateID = 0;
    }
    Za.prototype.update = function(t) {
        !t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID || (this._bufferUpdateId = this.uvBuffer._updateID, 
        this._textureUpdateId = this.uvMatrix._updateID, t = this.uvBuffer.data, this.data && this.data.length === t.length || (this.data = new Float32Array(t.length)), 
        this.uvMatrix.multiplyUvs(t, this.data), this._updateID++);
    };
    var Ja, Qa = new ge(), $a = new ze(), th = ((Ja = ti) && (eh.__proto__ = Ja), (eh.prototype = Object.create(Ja && Ja.prototype)).constructor = eh, 
    (th = {
        uvBuffer: {
            configurable: !0
        },
        verticesBuffer: {
            configurable: !0
        },
        material: {
            configurable: !0
        },
        blendMode: {
            configurable: !0
        },
        roundPixels: {
            configurable: !0
        },
        tint: {
            configurable: !0
        },
        texture: {
            configurable: !0
        }
    }).uvBuffer.get = function() {
        return this.geometry.buffers[1];
    }, th.verticesBuffer.get = function() {
        return this.geometry.buffers[0];
    }, th.material.set = function(t) {
        this.shader = t;
    }, th.material.get = function() {
        return this.shader;
    }, th.blendMode.set = function(t) {
        this.state.blendMode = t;
    }, th.blendMode.get = function() {
        return this.state.blendMode;
    }, th.roundPixels.set = function(t) {
        this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t;
    }, th.roundPixels.get = function() {
        return this._roundPixels;
    }, th.tint.get = function() {
        return this.shader.tint;
    }, th.tint.set = function(t) {
        this.shader.tint = t;
    }, th.texture.get = function() {
        return this.shader.texture;
    }, th.texture.set = function(t) {
        this.shader.texture = t;
    }, eh.prototype._render = function(t) {
        var e = this.geometry.buffers[0].data;
        this.shader.batchable && this.drawMode === G.DRAW_MODES.TRIANGLES && e.length < 2 * eh.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t);
    }, eh.prototype._renderDefault = function(t) {
        var e = this.shader;
        e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.program.uniformData.translationMatrix && (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0)), 
        t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
    }, eh.prototype._renderToBatch = function(t) {
        var e = this.geometry, e = (this.shader.uvMatrix && (this.shader.uvMatrix.update(), 
        this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, 
        this._tintRGB = this.shader._tintRGB, this._texture = this.shader.texture, this.material.pluginName);
        t.batch.setObjectRenderer(t.plugins[e]), t.plugins[e].render(this);
    }, eh.prototype.calculateVertices = function() {
        var t = this.geometry, e = t.buffers[0].data;
        if (t.vertexDirtyId !== this.vertexDirty || this._transformID !== this.transform._worldID) {
            this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
            for (var i = this.transform.worldTransform, r = i.a, n = i.b, s = i.c, o = i.d, a = i.tx, h = i.ty, u = this.vertexData, l = 0; l < u.length / 2; l++) {
                var c = e[2 * l], d = e[2 * l + 1];
                u[2 * l] = r * c + s * d + a, u[2 * l + 1] = n * c + o * d + h;
            }
            if (this._roundPixels) for (var p = 0; p < u.length; p++) u[p] = Math.round(u[p]);
            this.vertexDirty = t.vertexDirtyId;
        }
    }, eh.prototype.calculateUvs = function() {
        var t = this.geometry.buffers[1];
        this.shader.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new Za(t, this.shader.uvMatrix)), 
        this.batchUvs.update(), this.uvs = this.batchUvs.data);
    }, eh.prototype._calculateBounds = function() {
        this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
    }, eh.prototype.containsPoint = function(t) {
        if (this.getBounds().contains(t.x, t.y)) {
            this.worldTransform.applyInverse(t, Qa);
            for (var e = this.geometry.getBuffer("aVertexPosition").data, i = $a.points, r = this.geometry.getIndex().data, n = r.length, s = 4 === this.drawMode ? 3 : 1, o = 0; o + 2 < n; o += s) {
                var a = 2 * r[o], h = 2 * r[o + 1], u = 2 * r[o + 2];
                if (i[0] = e[a], i[1] = e[1 + a], i[2] = e[h], i[3] = e[1 + h], i[4] = e[u], i[5] = e[1 + u], 
                $a.contains(Qa.x, Qa.y)) return !0;
            }
        }
        return !1;
    }, eh.prototype.destroy = function(t) {
        Ja.prototype.destroy.call(this, t), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), 
        this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, 
        this.vertexData = null;
    }, Object.defineProperties(eh.prototype, th), eh);
    function eh(t, e, i, r) {
        void 0 === r && (r = G.DRAW_MODES.TRIANGLES), Ja.call(this), (this.geometry = t).refCount++, 
        this.shader = e, this.state = i || nn.for2d(), this.drawMode = r, this.start = 0, 
        this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), 
        this.vertexDirty = 0, this._transformID = -1, this.tint = 16777215, this.blendMode = G.BLEND_MODES.NORMAL, 
        this._roundPixels = E.ROUND_PIXELS, this.batchUvs = null;
    }
    th.BATCHABLE_SIZE = 100;
    (ih = rn) && (nh.__proto__ = ih), (nh.prototype = Object.create(ih && ih.prototype)).constructor = nh, 
    (mh = {
        texture: {
            configurable: !0
        },
        alpha: {
            configurable: !0
        },
        tint: {
            configurable: !0
        }
    }).texture.get = function() {
        return this.uniforms.uSampler;
    }, mh.texture.set = function(t) {
        this.uniforms.uSampler !== t && (this.uniforms.uSampler = t, this.uvMatrix.texture = t);
    }, mh.alpha.set = function(t) {
        t !== this._alpha && (this._alpha = t, this._colorDirty = !0);
    }, mh.alpha.get = function() {
        return this._alpha;
    }, mh.tint.set = function(t) {
        t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), 
        this._colorDirty = !0);
    }, mh.tint.get = function() {
        return this._tint;
    }, nh.prototype.update = function() {
        var t;
        this._colorDirty && (this._colorDirty = !1, t = this.texture.baseTexture, Jt(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode)), 
        this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
    }, Object.defineProperties(nh.prototype, mh);
    var ih, rh = nh;
    function nh(t, e) {
        var i = {
            uSampler: t,
            alpha: 1,
            uTextureMatrix: l.IDENTITY,
            uColor: new Float32Array([ 1, 1, 1, 1 ])
        };
        (e = Object.assign({
            tint: 16777215,
            alpha: 1,
            pluginName: "batch"
        }, e)).uniforms && Object.assign(i, e.uniforms), ih.call(this, e.program || en.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"), i), 
        this._colorDirty = !1, this.uvMatrix = new un(t), this.batchable = void 0 === e.program, 
        this.pluginName = e.pluginName, this.tint = e.tint, this.alpha = e.alpha;
    }
    (sh = nr) && (ah.__proto__ = sh), (ah.prototype = Object.create(sh && sh.prototype)).constructor = ah, 
    (mh = {
        vertexDirtyId: {
            configurable: !0
        }
    }).vertexDirtyId.get = function() {
        return this.buffers[0]._updateID;
    }, Object.defineProperties(ah.prototype, mh);
    var sh, oh = ah;
    function ah(t, e, i) {
        sh.call(this);
        t = new b(t), e = new b(e, !0), i = new b(i, !0, !0);
        this.addAttribute("aVertexPosition", t, 2, !1, G.TYPES.FLOAT).addAttribute("aTextureCoord", e, 2, !1, G.TYPES.FLOAT).addIndex(i), 
        this._updateId = -1;
    }
    (hh = oh) && (lh.__proto__ = hh), ((lh.prototype = Object.create(hh && hh.prototype)).constructor = lh).prototype.build = function() {
        for (var t = this.segWidth * this.segHeight, e = [], i = [], r = [], n = this.segWidth - 1, s = this.segHeight - 1, o = this.width / n, a = this.height / s, h = 0; h < t; h++) {
            var u = h % this.segWidth, l = h / this.segWidth | 0;
            e.push(u * o, l * a), i.push(u / n, l / s);
        }
        for (var c = n * s, d = 0; d < c; d++) {
            var p = d % n, f = d / n | 0, m = f * this.segWidth + p, g = f * this.segWidth + p + 1, y = (1 + f) * this.segWidth + p, f = (1 + f) * this.segWidth + p + 1;
            r.push(m, g, y, g, f, y);
        }
        this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(i), 
        this.indexBuffer.data = new Uint16Array(r), this.buffers[0].update(), this.buffers[1].update(), 
        this.indexBuffer.update();
    };
    var hh, uh = lh;
    function lh(t, e, i, r) {
        void 0 === t && (t = 100), void 0 === e && (e = 100), void 0 === i && (i = 10), 
        void 0 === r && (r = 10), hh.call(this), this.segWidth = i, this.segHeight = r, 
        this.width = t, this.height = e, this.build();
    }
    (ch = oh) && (ph.__proto__ = ch), ((ph.prototype = Object.create(ch && ch.prototype)).constructor = ph).prototype.build = function() {
        var t = this.points;
        if (t) {
            var e = this.getBuffer("aVertexPosition"), i = this.getBuffer("aTextureCoord"), r = this.getIndex();
            if (!(t.length < 1)) {
                e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), i.data = new Float32Array(4 * t.length), 
                r.data = new Uint16Array(6 * (t.length - 1)));
                for (var n = i.data, s = r.data, o = (n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, 0), a = t[0], h = this.width * this.textureScale, u = t.length, l = 0; l < u; l++) {
                    var c, d, p = 4 * l;
                    0 < this.textureScale ? (d = a.x - t[l].x, c = a.y - t[l].y, d = Math.sqrt(d * d + c * c), 
                    a = t[l], o += d / h) : o = l / (u - 1), n[p] = o, n[1 + p] = 0, n[2 + p] = o, n[3 + p] = 1;
                }
                for (var f = 0, m = 0; m < u - 1; m++) {
                    var g = 2 * m;
                    s[f++] = g, s[f++] = 1 + g, s[f++] = 2 + g, s[f++] = 2 + g, s[f++] = 1 + g, s[f++] = 3 + g;
                }
                i.update(), r.update(), this.updateVertices();
            }
        }
    }, ph.prototype.updateVertices = function() {
        var t = this.points;
        if (!(t.length < 1)) {
            for (var e = t[0], i = 0, r = 0, n = this.buffers[0].data, s = t.length, o = 0; o < s; o++) {
                var a = t[o], h = 4 * o, r = -((u = o < t.length - 1 ? t[o + 1] : a).x - e.x), i = u.y - e.y, u = Math.sqrt(i * i + r * r), l = 0 < this.textureScale ? this.textureScale * this.width / 2 : this.width / 2;
                r = r / u * l, n[h] = a.x + (i = i / u * l), n[1 + h] = a.y + r, n[2 + h] = a.x - i, 
                n[3 + h] = a.y - r, e = a;
            }
            this.buffers[0].update();
        }
    }, ph.prototype.update = function() {
        0 < this.textureScale ? this.build() : this.updateVertices();
    };
    var ch, dh = ph;
    function ph(t, e, i) {
        void 0 === t && (t = 200), void 0 === i && (i = 0), ch.call(this, new Float32Array(4 * e.length), new Float32Array(4 * e.length), new Uint16Array(6 * (e.length - 1))), 
        this.points = e, this.width = t, this.textureScale = i, this.build();
    }
    (fh = th) && (gh.__proto__ = fh), ((gh.prototype = Object.create(fh && fh.prototype)).constructor = gh).prototype._render = function(t) {
        !this.autoUpdate && this.geometry.width === this.shader.texture.height || (this.geometry.width = this.shader.texture.height, 
        this.geometry.update()), fh.prototype._render.call(this, t);
    };
    var fh, mh = gh;
    function gh(t, e, i) {
        var e = new dh(t.height, e, i = void 0 === i ? 0 : i), r = new rh(t);
        0 < i && (t.baseTexture.wrapMode = G.WRAP_MODES.REPEAT), fh.call(this, e, r), this.autoUpdate = !0;
    }
    (yh = th) && (vh.__proto__ = yh), _h = {
        texture: {
            configurable: !0
        }
    }, ((vh.prototype = Object.create(yh && yh.prototype)).constructor = vh).prototype.textureUpdated = function() {
        this._textureID = this.shader.texture._updateID, this.geometry.width = this.shader.texture.width, 
        this.geometry.height = this.shader.texture.height, this.geometry.build();
    }, _h.texture.set = function(t) {
        this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this));
    }, _h.texture.get = function() {
        return this.shader.texture;
    }, vh.prototype._render = function(t) {
        this._textureID !== this.shader.texture._updateID && this.textureUpdated(), yh.prototype._render.call(this, t);
    }, Object.defineProperties(vh.prototype, _h);
    var yh, _h = vh;
    function vh(t, e, i) {
        e = new uh(t.width, t.height, e, i), i = new rh(w.WHITE);
        yh.call(this, e, i), this.texture = t;
    }
    (xh = th) && (Eh.__proto__ = xh), (Eh.prototype = Object.create(xh && xh.prototype)).constructor = Eh, 
    (bh = {
        vertices: {
            configurable: !0
        }
    }).vertices.get = function() {
        return this.geometry.getBuffer("aVertexPosition").data;
    }, bh.vertices.set = function(t) {
        this.geometry.getBuffer("aVertexPosition").data = t;
    }, Eh.prototype._render = function(t) {
        this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), xh.prototype._render.call(this, t);
    }, Object.defineProperties(Eh.prototype, bh);
    var xh, bh = Eh;
    function Eh(t, e, i, r, n) {
        void 0 === t && (t = w.EMPTY);
        e = new oh(e, i, r), e.getBuffer("aVertexPosition").static = !1, i = new rh(t);
        xh.call(this, e, i, null, n), this.autoUpdate = !0;
    }
    (Th = _h) && (Sh.__proto__ = Th), wh = {
        vertices: {
            configurable: !0
        },
        width: {
            configurable: !0
        },
        height: {
            configurable: !0
        },
        leftWidth: {
            configurable: !0
        },
        rightWidth: {
            configurable: !0
        },
        topHeight: {
            configurable: !0
        },
        bottomHeight: {
            configurable: !0
        }
    }, ((Sh.prototype = Object.create(Th && Th.prototype)).constructor = Sh).prototype.textureUpdated = function() {
        this._textureID = this.shader.texture._updateID, this._refresh();
    }, wh.vertices.get = function() {
        return this.geometry.getBuffer("aVertexPosition").data;
    }, wh.vertices.set = function(t) {
        this.geometry.getBuffer("aVertexPosition").data = t;
    }, Sh.prototype.updateHorizontalVertices = function() {
        var t = this.vertices, e = this._topHeight + this._bottomHeight, e = this._height > e ? 1 : this._height / e;
        t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, 
        t[25] = t[27] = t[29] = t[31] = this._height;
    }, Sh.prototype.updateVerticalVertices = function() {
        var t = this.vertices, e = this._leftWidth + this._rightWidth, e = this._width > e ? 1 : this._width / e;
        t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, 
        t[6] = t[14] = t[22] = t[30] = this._width;
    }, wh.width.get = function() {
        return this._width;
    }, wh.width.set = function(t) {
        this._width = t, this._refresh();
    }, wh.height.get = function() {
        return this._height;
    }, wh.height.set = function(t) {
        this._height = t, this._refresh();
    }, wh.leftWidth.get = function() {
        return this._leftWidth;
    }, wh.leftWidth.set = function(t) {
        this._leftWidth = t, this._refresh();
    }, wh.rightWidth.get = function() {
        return this._rightWidth;
    }, wh.rightWidth.set = function(t) {
        this._rightWidth = t, this._refresh();
    }, wh.topHeight.get = function() {
        return this._topHeight;
    }, wh.topHeight.set = function(t) {
        this._topHeight = t, this._refresh();
    }, wh.bottomHeight.get = function() {
        return this._bottomHeight;
    }, wh.bottomHeight.set = function(t) {
        this._bottomHeight = t, this._refresh();
    }, Sh.prototype._refresh = function() {
        var t = this.texture, e = this.geometry.buffers[1].data, t = (this._origWidth = t.orig.width, 
        this._origHeight = t.orig.height, 1 / this._origWidth), i = 1 / this._origHeight;
        e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, 
        e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = t * this._leftWidth, 
        e[4] = e[12] = e[20] = e[28] = 1 - t * this._rightWidth, e[9] = e[11] = e[13] = e[15] = i * this._topHeight, 
        e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight, this.updateHorizontalVertices(), 
        this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update();
    }, Object.defineProperties(Sh.prototype, wh);
    var Th, wh = Sh;
    function Sh(t, e, i, r, n) {
        Th.call(this, w.WHITE, 4, 4), this._origWidth = t.orig.width, this._origHeight = t.orig.height, 
        this._width = this._origWidth, this._height = this._origHeight, this._leftWidth = void 0 !== e ? e : 10, 
        this._rightWidth = void 0 !== r ? r : 10, this._topHeight = void 0 !== i ? i : 10, 
        this._bottomHeight = void 0 !== n ? n : 10, this.texture = t;
    }
    (Ih = so) && (Ah.__proto__ = Ih), Ph = {
        totalFrames: {
            configurable: !0
        },
        textures: {
            configurable: !0
        },
        currentFrame: {
            configurable: !0
        }
    }, ((Ah.prototype = Object.create(Ih && Ih.prototype)).constructor = Ah).prototype.stop = function() {
        this.playing && (this.playing = !1, this._autoUpdate) && oi.shared.remove(this.update, this);
    }, Ah.prototype.play = function() {
        this.playing || (this.playing = !0, this._autoUpdate && oi.shared.add(this.update, this, G.UPDATE_PRIORITY.HIGH));
    }, Ah.prototype.gotoAndStop = function(t) {
        this.stop();
        var e = this.currentFrame;
        this._currentTime = t, e !== this.currentFrame && this.updateTexture();
    }, Ah.prototype.gotoAndPlay = function(t) {
        var e = this.currentFrame;
        this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play();
    }, Ah.prototype.update = function(t) {
        var e = this.animationSpeed * t, i = this.currentFrame;
        if (null !== this._durations) {
            var r = this._currentTime % 1 * this._durations[this.currentFrame];
            for (r += e / 60 * 1e3; r < 0; ) this._currentTime--, r += this._durations[this.currentFrame];
            var n = Math.sign(this.animationSpeed * t);
            for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame]; ) r -= this._durations[this.currentFrame] * n, 
            this._currentTime += n;
            this._currentTime += r / this._durations[this.currentFrame];
        } else this._currentTime += e;
        this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), 
        this.onComplete && this.onComplete()) : i !== this.currentFrame && (this.loop && this.onLoop && (0 < this.animationSpeed && this.currentFrame < i || this.animationSpeed < 0 && this.currentFrame > i) && this.onLoop(), 
        this.updateTexture());
    }, Ah.prototype.updateTexture = function() {
        this._texture = this._textures[this.currentFrame], this._textureID = -1, this._textureTrimmedID = -1, 
        this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), 
        this.onFrameChange && this.onFrameChange(this.currentFrame);
    }, Ah.prototype.destroy = function(t) {
        this.stop(), Ih.prototype.destroy.call(this, t), this.onComplete = null, this.onFrameChange = null, 
        this.onLoop = null;
    }, Ah.fromFrames = function(t) {
        for (var e = [], i = 0; i < t.length; ++i) e.push(w.from(t[i]));
        return new Ah(e);
    }, Ah.fromImages = function(t) {
        for (var e = [], i = 0; i < t.length; ++i) e.push(w.from(t[i]));
        return new Ah(e);
    }, Ph.totalFrames.get = function() {
        return this._textures.length;
    }, Ph.textures.get = function() {
        return this._textures;
    }, Ph.textures.set = function(t) {
        if (t[0] instanceof w) this._textures = t, this._durations = null; else {
            this._textures = [], this._durations = [];
            for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time);
        }
        this.gotoAndStop(0), this.updateTexture();
    }, Ph.currentFrame.get = function() {
        var t = Math.floor(this._currentTime) % this._textures.length;
        return t < 0 && (t += this._textures.length), t;
    }, Object.defineProperties(Ah.prototype, Ph);
    var Ih, Ph = Ah;
    function Ah(t, e) {
        Ih.call(this, t[0] instanceof w ? t[0] : t[0].texture), this._textures = null, this._durations = null, 
        this.textures = t, this._autoUpdate = !1 !== e, this.animationSpeed = 1, this.loop = !0, 
        this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, 
        this._currentTime = 0, this.playing = !1;
    }
    Jn.registerPlugin("accessibility", ei), Jn.registerPlugin("extract", fs), Jn.registerPlugin("interaction", Is), 
    Jn.registerPlugin("particle", la), Jn.registerPlugin("prepare", _), Jn.registerPlugin("batch", c), 
    Jn.registerPlugin("tilingSprite", ba), ia.registerPlugin(Ia), ia.registerPlugin(pa), 
    Lo.registerPlugin(ai), Lo.registerPlugin(na);
    Is = {
        AlphaFilter: M,
        BlurFilter: C,
        BlurFilterPass: Ra,
        ColorMatrixFilter: Ua,
        DisplacementFilter: Xa,
        FXAAFilter: Ga,
        NoiseFilter: za
    };
    return G.AbstractBatchRenderer = hs, G.AbstractRenderer = Ii, G.AnimatedSprite = Ph, 
    G.AppLoaderPlugin = na, G.Application = Lo, G.Attribute = tr, G.BaseRenderTexture = Yi, 
    G.BaseTexture = f, G.BatchDrawCall = ns, G.BatchGeometry = cs, G.BatchPluginFactory = ps, 
    G.BatchRenderer = c, G.BatchShaderGenerator = us, G.BatchTextureArray = ss, G.BitmapFontLoader = Ia, 
    G.BitmapText = wa, G.Bounds = n, G.Buffer = b, G.Circle = He, G.Container = ti, 
    G.CubeTexture = d, G.DEG_TO_RAD = Ee, G.DisplayObject = e, G.Ellipse = Ye, G.FillStyle = Ps, 
    G.Filter = a, G.Framebuffer = Hi, G.GLProgram = Cn, G.GLTexture = Gn, G.GRAPHICS_CURVES = As, 
    G.Geometry = nr, G.Graphics = eo, G.GraphicsData = js, G.GraphicsGeometry = qs, 
    G.LineStyle = Zs, G.Loader = ia, G.LoaderResource = oa, G.MaskData = Fr, G.Matrix = l, 
    G.Mesh = th, G.MeshBatchUvs = Za, G.MeshGeometry = oh, G.MeshMaterial = rh, G.NineSlicePlane = wh, 
    G.ObjectRenderer = xr, G.ObservablePoint = _e, G.PI_2 = xe, G.ParticleContainer = A, 
    G.ParticleRenderer = la, G.PlaneGeometry = uh, G.Point = ge, G.Polygon = ze, G.Program = en, 
    G.Quad = ur, G.QuadUv = dr, G.RAD_TO_DEG = be, G.Rectangle = T, G.RenderTexture = Ji, 
    G.RenderTexturePool = $i, G.Renderer = Jn, G.RopeGeometry = dh, G.RoundedRectangle = qe, 
    G.Runner = ii, G.Shader = rn, G.SimpleMesh = bh, G.SimplePlane = _h, G.SimpleRope = mh, 
    G.Sprite = so, G.SpriteMaskFilter = dn, G.Spritesheet = da, G.SpritesheetLoader = pa, 
    G.State = nn, G.System = Ui, G.TEXT_GRADIENT = ao, G.Text = yo, G.TextMetrics = P, 
    G.TextStyle = lo, G.Texture = w, G.TextureLoader = ta, G.TextureMatrix = un, G.TextureUvs = zi, 
    G.Ticker = oi, G.TickerPlugin = ai, G.TilingSprite = ma, G.TilingSpriteRenderer = ba, 
    G.Transform = ke, G.UniformGroup = fr, G.VERSION = "5.2.0", G.ViewableBuffer = os, 
    G.accessibility = t, G.autoDetectRenderer = $n, G.checkMaxIfStatementsInShader = tn, 
    G.defaultFilterVertex = is, G.defaultVertex = es, G.extract = Ts, G.filters = Is, 
    G.graphicsUtils = Ds, G.groupD8 = h, G.interaction = ws, G.isMobile = W, G.prepare = v, 
    G.resources = Ti, G.settings = E, G.systems = Fi, G.useDeprecated = function() {
        var n, e = this, s = (Object.defineProperties(e, {
            SVG_SIZE: {
                get: function() {
                    return p(L, "PIXI.utils.SVG_SIZE property has moved to PIXI.resources.SVGResource.SVG_SIZE"), 
                    e.SVGResource.SVG_SIZE;
                }
            },
            TransformStatic: {
                get: function() {
                    return p(L, "PIXI.TransformStatic class has been removed, use PIXI.Transform"), 
                    e.Transform;
                }
            },
            TransformBase: {
                get: function() {
                    return p(L, "PIXI.TransformBase class has been removed, use PIXI.Transform"), e.Transform;
                }
            },
            TRANSFORM_MODE: {
                get: function() {
                    return p(L, "PIXI.TRANSFORM_MODE property has been removed"), {
                        STATIC: 0,
                        DYNAMIC: 1
                    };
                }
            },
            WebGLRenderer: {
                get: function() {
                    return p(L, "PIXI.WebGLRenderer class has moved to PIXI.Renderer"), e.Renderer;
                }
            },
            CanvasRenderTarget: {
                get: function() {
                    return p(L, "PIXI.CanvasRenderTarget class has moved to PIXI.utils.CanvasRenderTarget"), 
                    e.utils.CanvasRenderTarget;
                }
            },
            loader: {
                get: function() {
                    return p(L, "PIXI.loader instance has moved to PIXI.Loader.shared"), e.Loader.shared;
                }
            },
            FilterManager: {
                get: function() {
                    return p(L, "PIXI.FilterManager class has moved to PIXI.systems.FilterSystem"), 
                    e.systems.FilterSystem;
                }
            },
            CanvasTinter: {
                get: function() {
                    return p("5.2.0", "PIXI.CanvasTinter namespace has moved to PIXI.canvasUtils"), 
                    e.canvasUtils;
                }
            },
            GroupD8: {
                get: function() {
                    return p("5.2.0", "PIXI.GroupD8 namespace has moved to PIXI.groupD8"), e.groupD8;
                }
            }
        }), e.extras = {}, Object.defineProperties(e.extras, {
            TilingSprite: {
                get: function() {
                    return p(L, "PIXI.extras.TilingSprite class has moved to PIXI.TilingSprite"), e.TilingSprite;
                }
            },
            TilingSpriteRenderer: {
                get: function() {
                    return p(L, "PIXI.extras.TilingSpriteRenderer class has moved to PIXI.TilingSpriteRenderer"), 
                    e.TilingSpriteRenderer;
                }
            },
            AnimatedSprite: {
                get: function() {
                    return p(L, "PIXI.extras.AnimatedSprite class has moved to PIXI.AnimatedSprite"), 
                    e.AnimatedSprite;
                }
            },
            BitmapText: {
                get: function() {
                    return p(L, "PIXI.extras.BitmapText class has moved to PIXI.BitmapText"), e.BitmapText;
                }
            }
        }), Object.defineProperties(e.utils, {
            getSvgSize: {
                get: function() {
                    return p(L, "PIXI.utils.getSvgSize function has moved to PIXI.resources.SVGResource.getSize"), 
                    e.SVGResource.getSize;
                }
            }
        }), e.mesh = {}, Object.defineProperties(e.mesh, {
            Mesh: {
                get: function() {
                    return p(L, "PIXI.mesh.Mesh class has moved to PIXI.SimpleMesh"), e.SimpleMesh;
                }
            },
            NineSlicePlane: {
                get: function() {
                    return p(L, "PIXI.mesh.NineSlicePlane class has moved to PIXI.NineSlicePlane"), 
                    e.NineSlicePlane;
                }
            },
            Plane: {
                get: function() {
                    return p(L, "PIXI.mesh.Plane class has moved to PIXI.SimplePlane"), e.SimplePlane;
                }
            },
            Rope: {
                get: function() {
                    return p(L, "PIXI.mesh.Rope class has moved to PIXI.SimpleRope"), e.SimpleRope;
                }
            },
            RawMesh: {
                get: function() {
                    return p(L, "PIXI.mesh.RawMesh class has moved to PIXI.Mesh"), e.Mesh;
                }
            },
            CanvasMeshRenderer: {
                get: function() {
                    return p(L, "PIXI.mesh.CanvasMeshRenderer class has moved to PIXI.CanvasMeshRenderer"), 
                    e.CanvasMeshRenderer;
                }
            },
            MeshRenderer: {
                get: function() {
                    return p(L, "PIXI.mesh.MeshRenderer class has moved to PIXI.MeshRenderer"), e.MeshRenderer;
                }
            }
        }), e.particles = {}, Object.defineProperties(e.particles, {
            ParticleContainer: {
                get: function() {
                    return p(L, "PIXI.particles.ParticleContainer class has moved to PIXI.ParticleContainer"), 
                    e.ParticleContainer;
                }
            },
            ParticleRenderer: {
                get: function() {
                    return p(L, "PIXI.particles.ParticleRenderer class has moved to PIXI.ParticleRenderer"), 
                    e.ParticleRenderer;
                }
            }
        }), e.ticker = {}, Object.defineProperties(e.ticker, {
            Ticker: {
                get: function() {
                    return p(L, "PIXI.ticker.Ticker class has moved to PIXI.Ticker"), e.Ticker;
                }
            },
            shared: {
                get: function() {
                    return p(L, "PIXI.ticker.shared instance has moved to PIXI.Ticker.shared"), e.Ticker.shared;
                }
            }
        }), e.loaders = {}, Object.defineProperties(e.loaders, {
            Loader: {
                get: function() {
                    return p(L, "PIXI.loaders.Loader class has moved to PIXI.Loader"), e.Loader;
                }
            },
            Resource: {
                get: function() {
                    return p(L, "PIXI.loaders.Resource class has moved to PIXI.LoaderResource"), e.LoaderResource;
                }
            },
            bitmapFontParser: {
                get: function() {
                    return p(L, "PIXI.loaders.bitmapFontParser function has moved to PIXI.BitmapFontLoader.use"), 
                    e.BitmapFontLoader.use;
                }
            },
            parseBitmapFontData: {
                get: function() {
                    return p(L, "PIXI.loaders.parseBitmapFontData function has moved to PIXI.BitmapFontLoader.parse"), 
                    e.BitmapFontLoader.parse;
                }
            },
            spritesheetParser: {
                get: function() {
                    return p(L, "PIXI.loaders.spritesheetParser function has moved to PIXI.SpritesheetLoader.use"), 
                    e.SpritesheetLoader.use;
                }
            },
            getResourcePath: {
                get: function() {
                    return p(L, "PIXI.loaders.getResourcePath property has moved to PIXI.SpritesheetLoader.getResourcePath"), 
                    e.SpritesheetLoader.getResourcePath;
                }
            }
        }), e.Loader.addPixiMiddleware = function(t) {
            return p(L, "PIXI.loaders.Loader.addPixiMiddleware function is deprecated, use PIXI.loaders.Loader.registerPlugin"), 
            e.loaders.Loader.registerPlugin({
                use: t()
            });
        }, Object.defineProperty(e.extract, "WebGLExtract", {
            get: function() {
                return p(L, "PIXI.extract.WebGLExtract method has moved to PIXI.extract.Extract"), 
                e.extract.Extract;
            }
        }), Object.defineProperty(e.prepare, "WebGLPrepare", {
            get: function() {
                return p(L, "PIXI.prepare.WebGLPrepare class has moved to PIXI.prepare.Prepare"), 
                e.prepare.Prepare;
            }
        }), e.Container.prototype._renderWebGL = function(t) {
            p(L, "PIXI.Container._renderWebGL method has moved to PIXI.Container._render"), 
            this._render(t);
        }, e.Container.prototype.renderWebGL = function(t) {
            p(L, "PIXI.Container.renderWebGL method has moved to PIXI.Container.render"), this.render(t);
        }, e.DisplayObject.prototype.renderWebGL = function(t) {
            p(L, "PIXI.DisplayObject.renderWebGL method has moved to PIXI.DisplayObject.render"), 
            this.render(t);
        }, e.Container.prototype.renderAdvancedWebGL = function(t) {
            p(L, "PIXI.Container.renderAdvancedWebGL method has moved to PIXI.Container.renderAdvanced"), 
            this.renderAdvanced(t);
        }, Object.defineProperties(e.settings, {
            TRANSFORM_MODE: {
                get: function() {
                    return p(L, "PIXI.settings.TRANSFORM_MODE property has been removed"), 0;
                },
                set: function() {
                    p(L, "PIXI.settings.TRANSFORM_MODE property has been removed");
                }
            }
        }), e.BaseTexture), t = !(s.prototype.loadSource = function(t) {
            p(L, "PIXI.BaseTexture.loadSource method has been deprecated");
            t = e.resources.autoDetectResource(t);
            t.internal = !0, this.setResource(t), this.update();
        }), i = (Object.defineProperties(s.prototype, {
            hasLoaded: {
                get: function() {
                    return p(L, "PIXI.BaseTexture.hasLoaded property has been removed, use PIXI.BaseTexture.valid"), 
                    this.valid;
                }
            },
            imageUrl: {
                get: function() {
                    return p(L, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"), 
                    this.resource && this.resource.url;
                },
                set: function(t) {
                    p(L, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"), 
                    this.resource && (this.resource.url = t);
                }
            },
            source: {
                get: function() {
                    return p(L, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source`"), 
                    this.resource && this.resource.source;
                },
                set: function(t) {
                    p(L, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source` if you want to set HTMLCanvasElement. Otherwise, create new BaseTexture."), 
                    this.resource && (this.resource.source = t);
                }
            },
            premultiplyAlpha: {
                get: function() {
                    return p("5.2.0", "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), 
                    0 !== this.alphaMode;
                },
                set: function(t) {
                    p("5.2.0", "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), 
                    this.alphaMode = Number(t);
                }
            },
            _id: {
                get: function() {
                    return t || (p("5.2.0", "PIXI.BaseTexture._id batch local field has been changed to `_batchLocation`"), 
                    t = !0), this._batchLocation;
                },
                set: function(t) {
                    this._batchLocation = t;
                }
            }
        }), s.fromImage = function(t, e, i, r) {
            return p(L, "PIXI.BaseTexture.fromImage method has been replaced with PIXI.BaseTexture.from"), 
            s.from(t, {
                scaleMode: i,
                resourceOptions: {
                    scale: r,
                    crossorigin: e
                }
            });
        }, s.fromCanvas = function(t, e) {
            return p(L, "PIXI.BaseTexture.fromCanvas method has been replaced with PIXI.BaseTexture.from"), 
            s.from(t, {
                scaleMode: e
            });
        }, s.fromSVG = function(t, e, i, r) {
            return p(L, "PIXI.BaseTexture.fromSVG method has been replaced with PIXI.BaseTexture.from"), 
            s.from(t, {
                scaleMode: i,
                resourceOptions: {
                    scale: r,
                    crossorigin: e
                }
            });
        }, Object.defineProperties(e.resources.ImageResource.prototype, {
            premultiplyAlpha: {
                get: function() {
                    return p("5.2.0", "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), 
                    0 !== this.alphaMode;
                },
                set: function(t) {
                    p("5.2.0", "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), 
                    this.alphaMode = Number(t);
                }
            }
        }), e.Point.prototype.copy = function(t) {
            return p(L, "PIXI.Point.copy method has been replaced with PIXI.Point.copyFrom"), 
            this.copyFrom(t);
        }, e.ObservablePoint.prototype.copy = function(t) {
            return p(L, "PIXI.ObservablePoint.copy method has been replaced with PIXI.ObservablePoint.copyFrom"), 
            this.copyFrom(t);
        }, e.Rectangle.prototype.copy = function(t) {
            return p(L, "PIXI.Rectangle.copy method has been replaced with PIXI.Rectangle.copyFrom"), 
            this.copyFrom(t);
        }, e.Matrix.prototype.copy = function(t) {
            return p(L, "PIXI.Matrix.copy method has been replaced with PIXI.Matrix.copyTo"), 
            this.copyTo(t);
        }, e.systems.StateSystem.prototype.setState = function(t) {
            return p("v5.1.0", "StateSystem.setState has been renamed to StateSystem.set"), 
            this.set(t);
        }, Object.assign(e.systems.FilterSystem.prototype, {
            getRenderTarget: function(t, e) {
                return p(L, "PIXI.FilterManager.getRenderTarget method has been replaced with PIXI.systems.FilterSystem#getFilterTexture"), 
                this.getFilterTexture(e);
            },
            returnRenderTarget: function(t) {
                p(L, "PIXI.FilterManager.returnRenderTarget method has been replaced with PIXI.systems.FilterSystem.returnFilterTexture"), 
                this.returnFilterTexture(t);
            },
            calculateScreenSpaceMatrix: function(t) {
                p(L, "PIXI.systems.FilterSystem.calculateScreenSpaceMatrix method is removed, use `(vTextureCoord * inputSize.xy) + outputFrame.xy` instead");
                var t = t.identity(), e = this.activeState, i = e.sourceFrame, e = e.destinationFrame;
                return t.translate(i.x / e.width, i.y / e.height), t.scale(e.width, e.height), t;
            },
            calculateNormalizedScreenSpaceMatrix: function(t) {
                p(L, "PIXI.systems.FilterManager.calculateNormalizedScreenSpaceMatrix method is removed, use `((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw` instead.");
                var e = this.activeState, i = e.sourceFrame, e = e.destinationFrame, t = t.identity(), r = (t.translate(i.x / e.width, i.y / e.height), 
                e.width / i.width), e = e.height / i.height;
                return t.scale(r, e), t;
            }
        }), Object.defineProperties(e.RenderTexture.prototype, {
            sourceFrame: {
                get: function() {
                    return p(L, "PIXI.RenderTexture.sourceFrame property has been removed"), this.filterFrame;
                }
            },
            size: {
                get: function() {
                    return p(L, "PIXI.RenderTexture.size property has been removed"), this._frame;
                }
            }
        }), (n = e.filters.BlurFilterPass) && (r.__proto__ = n), (r.prototype = Object.create(n && n.prototype)).constructor = r);
        function r(t, e, i, r) {
            p(L, "PIXI.filters.BlurXFilter class is deprecated, use PIXI.filters.BlurFilterPass"), 
            n.call(this, !0, t, e, i, r);
        }
        (o = e.filters.BlurFilterPass) && (h.__proto__ = o);
        var o, a = (h.prototype = Object.create(o && o.prototype)).constructor = h;
        function h(t, e, i, r) {
            p(L, "PIXI.filters.BlurYFilter class is deprecated, use PIXI.filters.BlurFilterPass"), 
            o.call(this, !1, t, e, i, r);
        }
        Object.assign(e.filters, {
            BlurXFilter: i,
            BlurYFilter: a
        });
        var u = e.Sprite, l = e.Texture;
        function c(t, e, i, r) {
            return p(L, "PIXI.Sprite." + t + " method is deprecated, use PIXI.Sprite.from"), 
            u.from(e, {
                resourceOptions: {
                    scale: r,
                    crossorigin: i
                }
            });
        }
        function d(t, e, i, r) {
            return p(L, "PIXI.Texture." + t + " method is deprecated, use PIXI.Texture.from"), 
            l.from(e, {
                resourceOptions: {
                    scale: r,
                    crossorigin: i
                }
            });
        }
        (i = e.Graphics).prototype.generateCanvasTexture || (i.prototype.generateCanvasTexture = function() {
            p(L, 'PIXI.Graphics.generateCanvasTexture method is only available in "pixi.js-legacy"');
        }), Object.defineProperty(e.Graphics.prototype, "graphicsData", {
            get: function() {
                return p(L, "PIXI.Graphics.graphicsData property is deprecated, use PIXI.Graphics.geometry.graphicsData"), 
                this.geometry.graphicsData;
            }
        }), u.fromImage = c.bind(null, "fromImage"), u.fromSVG = c.bind(null, "fromSVG"), 
        u.fromCanvas = c.bind(null, "fromCanvas"), u.fromVideo = c.bind(null, "fromVideo"), 
        u.fromFrame = c.bind(null, "fromFrame"), l.fromImage = d.bind(null, "fromImage"), 
        l.fromSVG = d.bind(null, "fromSVG"), l.fromCanvas = d.bind(null, "fromCanvas"), 
        l.fromVideo = d.bind(null, "fromVideo"), l.fromFrame = d.bind(null, "fromFrame"), 
        Object.defineProperty(e.AbstractRenderer.prototype, "autoResize", {
            get: function() {
                return p(L, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"), 
                this.autoDensity;
            },
            set: function(t) {
                p(L, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"), 
                this.autoDensity = t;
            }
        }), Object.defineProperty(e.Renderer.prototype, "textureManager", {
            get: function() {
                return p(L, "PIXI.Renderer.textureManager property is deprecated, use PIXI.Renderer.texture"), 
                this.texture;
            }
        }), e.utils.mixins = {
            mixin: function() {
                p(L, "PIXI.utils.mixins.mixin function is no longer available");
            },
            delayMixin: function() {
                p(L, "PIXI.utils.mixins.delayMixin function is no longer available");
            },
            performMixins: function() {
                p(L, "PIXI.utils.mixins.performMixins function is no longer available");
            }
        };
    }, G.utils = i, G;
}({}), install = (PIXI.useDeprecated(), PIXI.settings.PREFER_ENV = PIXI.ENV.WEBGL, 
PIXI.settings.SORTABLE_CHILDREN = !0, require("./unsafe"));

function HTMLVideoElement() {}

install(PIXI), module.exports = PIXI;