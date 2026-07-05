function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var r = 0; r < e.length; r++) {
        var i = e[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(i.key), i);
    }
}

function _createClass(t, e, r) {
    return e && _defineProperties(t.prototype, e), r && _defineProperties(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : t + "";
}

function _toPrimitive(t, e) {
    if ("object" != _typeof(t) || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 === r) return ("string" === e ? String : Number)(t);
    r = r.call(t, e || "default");
    if ("object" != _typeof(r)) return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

function _callSuper(t, e, r) {
    return e = _getPrototypeOf(e), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(e, r || [], _getPrototypeOf(t).constructor) : e.apply(t, r));
}

function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}

function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}

function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function() {
        return !!t;
    })();
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
        var i = _superPropBase(t, e);
        if (i) return (i = Object.getOwnPropertyDescriptor(i, e)).get ? i.get.call(arguments.length < 3 ? t : r) : i.value;
    }).apply(null, arguments);
}

function _superPropBase(t, e) {
    for (;!{}.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); ) ;
    return t;
}

function _getPrototypeOf(t) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}

function _setPrototypeOf(t, e) {
    return (_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = function() {
    function r(t, e) {
        return _classCallCheck(this, r), (t = _callSuper(this, r, [ t ]))._time = 0, t._count = Math.max(1, e.cloneCount) || 2, 
        t._speed = e.speed, t._cloneDirection = Math.max(0, e.cloneDirection) || 3, t._speedDirection = Math.max(0, e.speedDirection) || 1, 
        t._autoMove = e.autoMove, t._resetPostion = e.reset, t._isMoving = !1, t._isCloned = !1, 
        1 === t._speedDirection ? t._instance.renderer.towardsTo(0) : t._instance.renderer.towardsTo(90), 
        e.enable && t.start(), t;
    }
    return _inherits(r, LB.SDK.IBehaviorInstanceBase), _createClass(r, [ {
        key: "release",
        value: function() {
            this.stop(), _get(_getPrototypeOf(r.prototype), "release", this).call(this);
        }
    }, {
        key: "switchStyleClone",
        value: function(t) {
            t === this._instance.renderer.id && this.cloneSelf(1);
        }
    }, {
        key: "start",
        value: function() {
            var t = this._runtime.eventEmitter;
            t.on(t.SystemEventType.switchStyle, this.switchStyleClone, this), this.cloneSelf(0), 
            this._startTicking();
        }
    }, {
        key: "stop",
        value: function() {
            this._isMoving = !1;
            var t = this._runtime.eventEmitter;
            t.off(t.SystemEventType.switchStyle, this.switchStyleClone, this), this.removeClone(), 
            this._stopTicking();
        }
    }, {
        key: "removeClone",
        value: function() {
            var t = this._instance.renderer;
            "background" === t.type && 1 !== t.options.repeat && (t = t.children[0]), this._isCloned && t.removeChildren();
        }
    }, {
        key: "cloneSelf",
        value: function(t) {
            var e = this._instance.renderer, r = ("background" === e.type && 1 !== e.options.repeat && (e = e.children[0]), 
            this._isCloned && e.removeChildren(), t && (e.x = this._startX, e.y = this._startY), 
            e.getWidth ? e.getWidth() : e.width), i = e.getHeight ? e.getHeight() : e.height, t = e.getScale ? e.getScale() : e.scale, n = t.x, o = t.y, s = e.texture;
            if (3 === this._cloneDirection) for (var c = -this._count; c <= this._count; c++) for (var a, u = -this._count; u <= this._count; u++) 0 === c && 0 === u || ((a = this._runtime.RenderEngine.Sprite.from(s)).anchor.set(.5), 
            a.x = c * r / n, a.y = u * i / o, e.addChild(a)); else if (2 === this._cloneDirection) for (var l, f = -this._count; f <= this._count; f++) 0 !== f && ((l = this._runtime.RenderEngine.Sprite.from(s)).anchor.set(.5), 
            l.y = f * i / o, e.addChild(l)); else if (1 === this._cloneDirection) for (var h, _ = -this._count; _ <= this._count; _++) 0 !== _ && ((h = this._runtime.RenderEngine.Sprite.from(s)).anchor.set(.5), 
            h.x = _ * r / n, e.addChild(h));
            this._isCloned = !0, this._startX = e.x, this._startY = e.y;
        }
    }, {
        key: "resetIfOutOfScreen",
        value: function() {
            var t = this._instance.renderer, e = t.getWidth ? t.getWidth() : t.width, r = t.getHeight ? t.getHeight() : t.height;
            (t.x - this._startX > e || t.x - this._startX < -e) && (t.x = this._startX), (t.y - this._startY > r || t.y - this._startY < -r) && (t.y = this._startY);
        }
    }, {
        key: "tick",
        value: function() {
            var t = this._instance.renderer;
            this._autoMove ? (this._isMoving = !0, t.goForward(this._speed)) : this._isMoving = !1, 
            !this._resetPostion || this._lastX === t.x && this._lastY === t.y || this.resetIfOutOfScreen(), 
            this._lastX = t.x, this._lastY = t.y;
        }
    } ]);
}();