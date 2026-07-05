function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

!function(n) {
    var o = {};
    function r(e) {
        var t;
        return (o[e] || (t = o[e] = {
            exports: {},
            id: e,
            loaded: !1
        }, n[e].call(t.exports, t, t.exports, r), t.loaded = !0, t)).exports;
    }
    r.m = n, r.c = o, r.p = "", r(0);
}([ function(e, t, n) {
    var o = function(e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t;
        }
    }(n(1)), n = n(4);
    (n = n) && n.__esModule;
    var r = GameGlobal;
    if (!GameGlobal.__isAdapterInjected) if (GameGlobal.__isAdapterInjected = !0, o.canvas && (o.canvas.addEventListener = o.addEventListener, 
    o.canvas.removeEventListener = o.removeEventListener), "devtools" === wx.getSystemInfoSync().platform) {
        for (var a in o) {
            var i = Object.getOwnPropertyDescriptor(r, a);
            i && !0 !== i.configurable || Object.defineProperty(window, a, {
                value: o[a]
            });
        }
        for (var u in o.document) {
            var l = Object.getOwnPropertyDescriptor(r.document, u);
            l && !0 !== l.configurable || Object.defineProperty(r.document, u, {
                value: o.document[u]
            });
        }
        window.parent = window;
    } else {
        for (var c in o) r[c] = o[c];
        r.window = o, (window = r).top = window.parent = window;
    }
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.clientTop = t.clientLeft = t.pageYOffset = t.pageXOffset = t.cancelAnimationFrame = t.requestAnimationFrame = t.clearInterval = t.clearTimeout = t.setInterval = t.setTimeout = t.canvas = t.TouchEvent = t.location = t.localStorage = t.HTMLElement = t.FileReader = t.Audio = t.Image = t.WebSocket = t.XMLHttpRequest = t.navigator = t.document = void 0;
    var o = n(2), r = (Object.keys(o).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return o[e];
            }
        });
    }), n(3));
    Object.keys(r).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return r[e];
            }
        });
    }), t.addEventListener = function() {
        var e;
        (e = document).addEventListener.apply(e, arguments);
    }, t.removeEventListener = function() {
        var e;
        (e = document).removeEventListener.apply(e, arguments);
    }, t.WebGLRenderingContext = function() {};
    var a = v(n(9)), i = v(n(10)), u = v(n(17)), l = v(n(18)), c = v(n(19)), s = v(n(11)), f = v(n(12)), p = v(n(20)), d = v(n(4)), h = v(n(21)), y = v(n(22)), n = v(n(16));
    function v(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.document = i.default, t.navigator = u.default, t.XMLHttpRequest = l.default, t.WebSocket = c.default, 
    t.Image = s.default, t.Audio = f.default, t.FileReader = p.default, t.HTMLElement = d.default, 
    t.localStorage = h.default, t.location = y.default, t.TouchEvent = n.default;
    i = new a.default();
    t.canvas = i, t.setTimeout = setTimeout, t.setInterval = setInterval, t.clearTimeout = clearTimeout, 
    t.clearInterval = clearInterval, t.requestAnimationFrame = requestAnimationFrame, 
    t.cancelAnimationFrame = cancelAnimationFrame, t.pageXOffset = 0, t.pageYOffset = 0, 
    t.clientLeft = 0, t.clientTop = 0;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = wx.getSystemInfoSync(), o = n.screenWidth, r = n.screenHeight, n = n.devicePixelRatio, o = t.innerWidth = o, r = t.innerHeight = r;
    t.devicePixelRatio = n, t.screen = {
        availWidth: o,
        availHeight: r
    }, t.performance = wx.getPerformance(), t.ontouchstart = null, t.ontouchmove = null, 
    t.ontouchend = null;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HTMLCanvasElement = t.HTMLImageElement = void 0;
    var n = n(4), n = (n = n) && n.__esModule ? n : {
        default: n
    };
    var o = wx.createImage().constructor;
    t.HTMLImageElement = o, t.HTMLCanvasElement = function(e) {
        var t = n;
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        function n() {
            if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
            var e = this, t = (n.__proto__ || Object.getPrototypeOf(n)).call(this, "canvas");
            if (e) return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), 
        n;
    }(n.default);
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
    };
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    var a = n(5), a = (a = a) && a.__esModule ? a : {
        default: a
    }, i = n(8), u = n(2);
    n = function(e) {
        var t = o;
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        function o() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = this, n = o;
            if (t instanceof n) return (t = function(e, t) {
                if (e) return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this))).className = "", t.childern = [], 
            t.style = {
                width: u.innerWidth + "px",
                height: u.innerHeight + "px"
            }, t.insertBefore = i.noop, t.innerHTML = "", t.tagName = e.toUpperCase(), t;
            throw new TypeError("Cannot call a class as a function");
        }
        return t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), 
        r(o, [ {
            key: "setAttribute",
            value: function(e, t) {
                this[e] = t;
            }
        }, {
            key: "getAttribute",
            value: function(e) {
                return this[e];
            }
        }, {
            key: "getBoundingClientRect",
            value: function() {
                return {
                    top: 0,
                    left: 0,
                    width: u.innerWidth,
                    height: u.innerHeight
                };
            }
        }, {
            key: "focus",
            value: function() {}
        }, {
            key: "clientWidth",
            get: function() {
                var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
                return Number.isNaN(e) ? 0 : e;
            }
        }, {
            key: "clientHeight",
            get: function() {
                var e = parseInt(this.style.fontSize, 10);
                return Number.isNaN(e) ? 0 : e;
            }
        } ]), o;
    }(a.default);
    t.default = n;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = n(6);
    n = function(e) {
        var t = n;
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        function n() {
            var e;
            if (this instanceof n) return (e = function(e, t) {
                if (e) return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this))).className = "", e.children = [], 
            e;
            throw new TypeError("Cannot call a class as a function");
        }
        return t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), 
        n;
    }(((n = n) && n.__esModule ? n : {
        default: n
    }).default);
    t.default = n;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
    };
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    var n = n(7);
    n = function(e) {
        var t = n;
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        function n() {
            var e;
            if (this instanceof n) return (e = function(e, t) {
                if (e) return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this))).childNodes = [], 
            e;
            throw new TypeError("Cannot call a class as a function");
        }
        return t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), 
        o(n, [ {
            key: "appendChild",
            value: function(e) {
                if (!(e instanceof n)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");
                this.childNodes.push(e);
            }
        }, {
            key: "cloneNode",
            value: function() {
                var e = Object.create(this);
                return Object.assign(e, this), e;
            }
        }, {
            key: "removeChild",
            value: function(t) {
                var e = this.childNodes.findIndex(function(e) {
                    return e === t;
                });
                return -1 < e ? this.childNodes.splice(e, 1) : null;
            }
        } ]), n;
    }(((n = n) && n.__esModule ? n : {
        default: n
    }).default);
    t.default = n;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
    };
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    var r = new WeakMap(), n = (n(a, [ {
        key: "addEventListener",
        value: function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, o = r.get(this);
            o || r.set(this, o = {}), o[e] || (o[e] = []), o[e].push(t), n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), 
            n.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), 
            n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.");
        }
    }, {
        key: "removeEventListener",
        value: function(e, t) {
            var n = r.get(this)[e];
            if (n && 0 < n.length) for (var o = n.length; o--; ) if (n[o] === t) {
                n.splice(o, 1);
                break;
            }
        }
    }, {
        key: "dispatchEvent",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = r.get(this)[e.type];
            if (t) for (var n = 0; n < t.length; n++) t[n](e);
        }
    } ]), a);
    function a() {
        if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
        r.set(this, {});
    }
    t.default = n;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.noop = function() {};
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        var e = wx.createCanvas();
        e.type = "canvas", e.__proto__.__proto__ = new o.HTMLCanvasElement(), e.getContext;
        return e.getBoundingClientRect = function() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }, e;
    };
    var o = n(3);
    r(n(4)), r(n(10));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t;
        }
    }(n(1)), r = l(n(4)), a = l(n(11)), i = l(n(12)), u = l(n(9));
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    n(15);
    var c = {}, s = {
        readyState: "complete",
        visibilityState: "visible",
        documentElement: o,
        hidden: !1,
        style: {},
        location: o.location,
        ontouchstart: null,
        ontouchmove: null,
        ontouchend: null,
        head: new r.default("head"),
        body: new r.default("body"),
        createElement: function(e) {
            return "canvas" === e ? new u.default() : "audio" === e ? new i.default() : "img" === e ? new a.default() : new r.default(e);
        },
        getElementById: function(e) {
            return e === o.canvas.id ? o.canvas : null;
        },
        getElementsByTagName: function(e) {
            return "head" === e ? [ s.head ] : "body" === e ? [ s.body ] : "canvas" === e ? [ o.canvas ] : [];
        },
        getElementsByName: function(e) {
            return "head" === e ? [ s.head ] : "body" === e ? [ s.body ] : "canvas" === e ? [ o.canvas ] : [];
        },
        querySelector: function(e) {
            return "head" === e ? s.head : "body" === e ? s.body : "canvas" === e || e === "#" + o.canvas.id ? o.canvas : null;
        },
        querySelectorAll: function(e) {
            return "head" === e ? [ s.head ] : "body" === e ? [ s.body ] : "canvas" === e ? [ o.canvas ] : [];
        },
        addEventListener: function(e, t) {
            c[e] || (c[e] = []), c[e].push(t);
        },
        removeEventListener: function(e, t) {
            var n = c[e];
            if (n && 0 < n.length) for (var o = n.length; o--; ) if (n[o] === t) {
                n.splice(o, 1);
                break;
            }
        },
        dispatchEvent: function(e) {
            var t = c[e.type];
            if (t) for (var n = 0; n < t.length; n++) t[n](e);
        }
    };
    t.default = s;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        return wx.createImage();
    };
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
    };
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    var n = n(13), n = (n = n) && n.__esModule ? n : {
        default: n
    };
    var a = new WeakMap(), i = new WeakMap(), n = (new WeakMap(), new WeakMap(), function(e) {
        var t = o;
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        function o(e) {
            var t, n;
            if (this instanceof o) return (t = function(e, t) {
                if (e) return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this))).HAVE_NOTHING = 0, 
            t.HAVE_METADATA = 1, t.HAVE_CURRENT_DATA = 2, t.HAVE_FUTURE_DATA = 3, t.HAVE_ENOUGH_DATA = 4, 
            t.readyState = 0, i.set(t, ""), n = wx.createInnerAudioContext(), a.set(t, n), n.onCanplay(function() {
                t.dispatchEvent({
                    type: "load"
                }), t.dispatchEvent({
                    type: "loadend"
                }), t.dispatchEvent({
                    type: "canplay"
                }), t.dispatchEvent({
                    type: "canplaythrough"
                }), t.dispatchEvent({
                    type: "loadedmetadata"
                }), t.readyState = 2;
            }), n.onPlay(function() {
                t.dispatchEvent({
                    type: "play"
                });
            }), n.onPause(function() {
                t.dispatchEvent({
                    type: "pause"
                });
            }), n.onEnded(function() {
                t.dispatchEvent({
                    type: "ended"
                }), t.readyState = 4;
            }), n.onError(function() {
                t.dispatchEvent({
                    type: "error"
                });
            }), e && (a.get(t).src = e), t;
            throw new TypeError("Cannot call a class as a function");
        }
        return t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), 
        r(o, [ {
            key: "load",
            value: function() {
                this.dispatchEvent({
                    type: "canplay"
                });
            }
        }, {
            key: "play",
            value: function() {
                a.get(this).play();
            }
        }, {
            key: "pause",
            value: function() {
                a.get(this).pause();
            }
        }, {
            key: "canPlayType",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                return "string" == typeof e && (-1 < e.indexOf("audio/mpeg") || e.indexOf("audio/mp4")) ? "probably" : "";
            }
        }, {
            key: "cloneNode",
            value: function() {
                var e = new o();
                return e.loop = a.get(this).loop, e.autoplay = a.get(this).autoplay, e.src = this.src, 
                e;
            }
        }, {
            key: "currentTime",
            get: function() {
                return a.get(this).currentTime;
            },
            set: function(e) {
                a.get(this).seek(e);
            }
        }, {
            key: "src",
            get: function() {
                return i.get(this);
            },
            set: function(e) {
                i.set(this, e), a.get(this).src = e;
            }
        }, {
            key: "loop",
            get: function() {
                return a.get(this).loop;
            },
            set: function(e) {
                a.get(this).loop = e;
            }
        }, {
            key: "autoplay",
            get: function() {
                return a.get(this).autoplay;
            },
            set: function(e) {
                a.get(this).autoplay = e;
            }
        }, {
            key: "paused",
            get: function() {
                return a.get(this).paused;
            }
        } ]), o;
    }(n.default));
    t.default = n;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = n(14);
    n = function(e) {
        var t = n;
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        function n() {
            if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
            var e = this, t = (n.__proto__ || Object.getPrototypeOf(n)).call(this, "audio");
            if (e) return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), 
        n;
    }(((n = n) && n.__esModule ? n : {
        default: n
    }).default);
    t.default = n;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
    };
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    var n = n(4);
    n = function(e) {
        var t = n;
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        function n(e) {
            if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
            var t = this, e = (n.__proto__ || Object.getPrototypeOf(n)).call(this, e);
            if (t) return !e || "object" !== _typeof(e) && "function" != typeof e ? t : e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), 
        o(n, [ {
            key: "addTextTrack",
            value: function() {}
        }, {
            key: "captureStream",
            value: function() {}
        }, {
            key: "fastSeek",
            value: function() {}
        }, {
            key: "load",
            value: function() {}
        }, {
            key: "pause",
            value: function() {}
        }, {
            key: "play",
            value: function() {}
        } ]), n;
    }(((n = n) && n.__esModule ? n : {
        default: n
    }).default);
    t.default = n;
}, function(e, t, n) {
    n(16);
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t;
        }
    }(n(1)), r = n(10), a = (r = r) && r.__esModule ? r : {
        default: r
    }, i = n(8);
    function u(e) {
        if (!(this instanceof u)) throw new TypeError("Cannot call a class as a function");
        this.target = o.canvas, this.currentTarget = o.canvas, this.touches = [], this.targetTouches = [], 
        this.changedTouches = [], this.preventDefault = i.noop, this.stopPropagation = i.noop, 
        this.type = e;
    }
    function l(n) {
        return function(e) {
            var t = new u(n);
            t.touches = e.touches, t.targetTouches = Array.prototype.slice.call(e.touches), 
            t.changedTouches = e.changedTouches, t.timeStamp = e.timeStamp, a.default.dispatchEvent(t);
        };
    }
    t.default = u, wx.onTouchStart(l("touchstart")), wx.onTouchMove(l("touchmove")), 
    wx.onTouchEnd(l("touchend")), wx.onTouchCancel(l("touchcancel"));
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    n = n(8), n = {
        platform: wx.getSystemInfoSync().platform,
        language: "zh-cn",
        appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",
        onLine: !0,
        geolocation: {
            getCurrentPosition: n.noop,
            watchPosition: n.noop,
            clearWatch: n.noop
        }
    };
    t.default = n;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
    };
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    var l = new WeakMap(), r = new WeakMap(), a = new WeakMap(), c = new WeakMap(), i = new WeakMap();
    function s(e) {
        if ("function" == typeof this["on" + e]) {
            for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            this["on" + e].apply(this, n);
        }
    }
    function f(e) {
        this.readyState = e, s.call(this, "readystatechange");
    }
    n(p, [ {
        key: "addEventListener",
        value: function(e, t) {
            this["on" + e] = t;
        }
    }, {
        key: "abort",
        value: function() {
            var e = i.get(this);
            e && e.abort();
        }
    }, {
        key: "getAllResponseHeaders",
        value: function() {
            var t = c.get(this);
            return Object.keys(t).map(function(e) {
                return e + ": " + t[e];
            }).join("\n");
        }
    }, {
        key: "getResponseHeader",
        value: function(e) {
            return c.get(this)[e];
        }
    }, {
        key: "open",
        value: function(e, t) {
            r.set(this, e), l.set(this, t), f.call(this, p.OPENED);
        }
    }, {
        key: "overrideMimeType",
        value: function() {}
    }, {
        key: "send",
        value: function() {
            var i = this, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            if (this.readyState !== p.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
            var u = "blob" === this.responseType ? (this.responseType = "arraybuffer", "blob") : null;
            wx.request({
                data: e,
                url: l.get(this),
                method: r.get(this),
                header: a.get(this),
                responseType: this.responseType,
                success: function(e) {
                    var t = e.data, n = e.statusCode, e = e.header;
                    if ("string" != typeof t && !(t instanceof ArrayBuffer)) try {
                        t = JSON.stringify(t);
                    } catch (e) {}
                    if (i.status = n, c.set(i, e), s.call(i, "loadstart"), f.call(i, p.HEADERS_RECEIVED), 
                    f.call(i, p.LOADING), i.response = "blob" === u ? l.get(i) : t, t instanceof ArrayBuffer) {
                        i.responseText = "";
                        for (var o = new Uint8Array(t), r = o.byteLength, a = 0; a < r; a++) i.responseText += String.fromCharCode(o[a]);
                    } else i.responseText = t;
                    f.call(i, p.DONE), s.call(i, "load", {
                        target: i
                    }), s.call(i, "loadend");
                },
                fail: function(e) {
                    e = e.errMsg;
                    -1 !== e.indexOf("abort") ? s.call(i, "abort") : s.call(i, "error", e), s.call(i, "loadend");
                }
            });
        }
    }, {
        key: "setRequestHeader",
        value: function(e, t) {
            var n = a.get(this);
            n[e] = t, a.set(this, n);
        }
    } ]);
    n = p;
    function p() {
        if (!(this instanceof p)) throw new TypeError("Cannot call a class as a function");
        this.onabort = null, this.onerror = null, this.onload = null, this.onloadstart = null, 
        this.onprogress = null, this.ontimeout = null, this.onloadend = null, this.onreadystatechange = null, 
        this.readyState = 0, this.response = null, this.responseText = null, this.responseType = "", 
        this.responseXML = null, this.status = 0, this.statusText = "", this.upload = {}, 
        this.withCredentials = !1, a.set(this, {
            "content-type": "application/x-www-form-urlencoded"
        }), c.set(this, {});
    }
    n.UNSEND = 0, n.OPENED = 1, n.HEADERS_RECEIVED = 2, n.LOADING = 3, n.DONE = 4, t.default = n;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
    };
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    var a = new WeakMap(), n = (n(i, [ {
        key: "close",
        value: function(e, t) {
            this.readyState = i.CLOSING, a.get(this).close({
                code: e,
                reason: t
            });
        }
    }, {
        key: "send",
        value: function(e) {
            if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + e + " is invalid");
            a.get(this).send({
                data: e
            });
        }
    } ]), i);
    function i(e) {
        var t = this, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], o = this, r = i;
        if (!(o instanceof r)) throw new TypeError("Cannot call a class as a function");
        if (this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", this.onclose = null, 
        this.onerror = null, this.onmessage = null, this.onopen = null, this.protocol = "", 
        this.readyState = 3, "string" != typeof e || !/(^ws:\/\/)|(^wss:\/\/)/.test(e)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + e + "' is invalid");
        this.url = e, this.readyState = i.CONNECTING;
        o = wx.connectSocket({
            url: e,
            protocols: Array.isArray(n) ? n : [ n ]
        });
        return a.set(this, o), o.onClose(function(e) {
            t.readyState = i.CLOSED, "function" == typeof t.onclose && t.onclose(e);
        }), o.onMessage(function(e) {
            "function" == typeof t.onmessage && t.onmessage(e);
        }), o.onOpen(function() {
            t.readyState = i.OPEN, "function" == typeof t.onopen && t.onopen();
        }), o.onError(function(e) {
            "function" == typeof t.onerror && t.onerror(new Error(e.errMsg));
        }), this;
    }
    n.CONNECTING = 0, n.OPEN = 1, n.CLOSING = 2, n.CLOSED = 3, t.default = n;
}, function(e, t) {
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    function n() {
        if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), function(e, t, n) {
        t && o(e.prototype, t), n && o(e, n);
    }(n, [ {
        key: "construct",
        value: function() {}
    } ]), t.default = n;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        get length() {
            return wx.getStorageInfoSync().keys.length;
        },
        key: function(e) {
            return wx.getStorageInfoSync().keys[e];
        },
        getItem: function(e) {
            return wx.getStorageSync(e);
        },
        setItem: function(e, t) {
            return wx.setStorageSync(e, t);
        },
        removeItem: function(e) {
            wx.removeStorageSync(e);
        },
        clear: function() {
            wx.clearStorageSync();
        }
    };
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        href: "game.js",
        reload: function() {}
    };
} ]);