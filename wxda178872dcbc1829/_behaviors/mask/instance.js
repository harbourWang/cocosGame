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
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(s.key), s);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : t + "";
}

function _toPrimitive(t, e) {
    if ("object" != _typeof(t) || !t) return t;
    var i = t[Symbol.toPrimitive];
    if (void 0 === i) return ("string" === e ? String : Number)(t);
    i = i.call(t, e || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

function _callSuper(t, e, i) {
    return e = _getPrototypeOf(e), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(e, i || [], _getPrototypeOf(t).constructor) : e.apply(t, i));
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
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, i) {
        var s = _superPropBase(t, e);
        if (s) return (s = Object.getOwnPropertyDescriptor(s, e)).get ? s.get.call(arguments.length < 3 ? t : i) : s.value;
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
    function n(t, e) {
        _classCallCheck(this, n), (i = _callSuper(this, n, [ t ]))._enabled = !(!e || !e.enable);
        var i, s = i._instance.renderer;
        return i.options = e, i.sprite = s, [ "radius", "x", "y", "width", "height" ].forEach(function(t) {
            i.options[t] *= i._runtime.devicePixel;
        }), i.options.startAngle = Math.floor(i.options.startAngle / 180 * Math.PI * 100) / 100, 
        i.options.endAngle = Math.floor(i.options.endAngle / 180 * Math.PI * 100) / 100, 
        i._enabled && ("container" === s.type ? setTimeout(function() {
            i.createMaskByType(s, e);
        }, 0) : i.createMaskByType(s, e), i._startTicking()), i;
    }
    return _inherits(n, LB.SDK.IBehaviorInstanceBase), _createClass(n, [ {
        key: "getPositionByAnchor",
        value: function() {
            var t, e, i = this._instance.renderer, s = this.options, n = i.getX(), o = i.getY();
            return 1 != s.type ? {
                x: n + s.x,
                y: -o - s.y
            } : (e = ("container" === i.type ? (t = (e = i.getAABB()).width, e) : (t = i.width, 
            i)).height, {
                x: 1 == this.options.anchorX ? n + s.x - t / 2 : 2 == this.options.anchorX ? n + s.x - s.width / 2 : n - s.x + t / 2 - s.width,
                y: 1 == this.options.anchorY ? -o - s.y - e / 2 : 2 == this.options.anchorY ? -o - s.y - s.height / 2 : -o - s.y - s.height + e / 2
            });
        }
    }, {
        key: "createMaskByType",
        value: function(e, i) {
            var t, s, n, o = this;
            3 == i.type ? setTimeout(function() {
                var t = o._runtime.renderer.getSpriteById(i.child);
                o.options.width = t.width, o.options.height = t.height, o.options.scaleX = t.scale.x, 
                o.options.scaleY = t.scale.y, o.options.angle = t.angle, o.options.x = t.getX(), 
                o.options.y = t.getY(), t && (e.mask = t, o.maskSp = t);
            }, 0) : (t = new this._runtime.RenderEngine.Graphics(), e.parent.addChild(t), (e.mask = t).lineStyle(0), 
            t.beginFill(14561865), s = (n = this.getPositionByAnchor()).x, n = n.y, 1 == i.type ? t.drawRect(s, n, i.width, i.height) : 4 == i.type ? (t.moveTo(s, n), 
            t.arc(s, n, this.options.radius, this.options.startAngle, this.options.endAngle), 
            t.lineTo(s, n)) : t.drawEllipse(s, n, i.width / 2, i.height / 2), t.endFill(), t.scale.x = i.scaleX, 
            t.scale.y = i.scaleY, t.angle = i.angle, t.rotation = e.rotation, this.maskSp = t);
        }
    }, {
        key: "setValue",
        value: function(t, e) {
            -1 < [ "x", "y", "width", "height" ].indexOf(t) ? this.options[t] = +e * this._runtime.devicePixel : this.options[t] = +e;
        }
    }, {
        key: "release",
        value: function() {
            this._instance.renderer.mask = null, this.maskSp && this.maskSp.parent && this.maskSp.parent.removeChild(this.maskSp), 
            _get(_getPrototypeOf(n.prototype), "release", this).call(this);
        }
    }, {
        key: "isEnabled",
        value: function() {
            return this._enabled;
        }
    }, {
        key: "setEnabled",
        value: function(t) {
            this._enabled = "1" === t, this._enabled ? this.maskSp || this.createMaskByType(this._instance.renderer, this.options) : (this._instance.renderer.mask = null, 
            this.maskSp && this.maskSp.parent && (this.maskSp.parent.removeChild(this.maskSp), 
            this.maskSp = null));
        }
    }, {
        key: "tick",
        value: function() {
            var t, e;
            this.maskSp && (t = (e = this.getPositionByAnchor()).x, e = e.y, 3 != this.options.type && (this.lastWidth !== this.options.width || this.lastHeight !== this.options.height || this.options.startAngle !== this.lastStartAngle || this.options.endAngle !== this.lastEndAngle || this.options.radius !== this.lastRadius || this.lastX != this.options.x || this.lastY != this.options.y || this.lastRendererY != this._instance.renderer.y || this.lastRendererX != this._instance.renderer.x) && 0 <= this.options.width && 0 <= this.options.height && (this.maskSp.clear(), 
            this.maskSp.beginFill(14561865), 1 == this.options.type ? this.maskSp.drawRect(t, e, this.options.width, this.options.height) : 4 == this.options.type ? (this.maskSp.moveTo(t, e), 
            this.maskSp.arc(t, e, this.options.radius, this.options.startAngle, this.options.endAngle), 
            this.maskSp.lineTo(t, e)) : this.maskSp.drawEllipse(t, e, this.options.width / 2, this.options.height / 2), 
            this.maskSp.endFill(), this.lastWidth = this.options.width, this.lastHeight = this.options.height, 
            this.lastStartAngle = this.options.startAngle, this.lastEndAngle = this.options.endAngle, 
            this.lastRadius = this.options.radius, this.lastX = this.options.x, this.lastY = this.options.y, 
            this.lastRendererY = this._instance.renderer.y, this.lastRendererX = this._instance.renderer.x), 
            4 != this.options.type && this.lastAngle !== this.options.angle && (this.maskSp.angle = this.options.angle, 
            this.lastAngle = this.options.angle), this.lastScaleY !== this.options.scaleY && (this.maskSp.scale.y = this.options.scaleY, 
            this.lastScaleY = this.options.scaleY), this.lastScaleX !== this.options.scaleX) && (this.maskSp.scale.x = this.options.scaleX, 
            this.lastScaleX = this.options.scaleX);
        }
    } ]);
}();