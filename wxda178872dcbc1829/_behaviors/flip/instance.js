function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _tween = _interopRequireDefault(require("../tween.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(n.key), n);
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
        var n = _superPropBase(t, e);
        if (n) return (n = Object.getOwnPropertyDescriptor(n, e)).get ? n.get.call(arguments.length < 3 ? t : r) : n.value;
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

var _default = exports.default = function() {
    function r(t, e) {
        return _classCallCheck(this, r), (t = _callSuper(this, r, [ t ]))._isAnimating = !1, 
        t._startTime = 0, t._allTime = e.allTime || 0, t.setEaseFunction(e.type), (t.properties = e) && e.enable && t.start(), 
        t;
    }
    return _inherits(r, LB.SDK.IBehaviorInstanceBase), _createClass(r, [ {
        key: "setEaseFunction",
        value: function(t) {
            this._easeFunction = ("1" === t ? _tween.default.Cubic : "2" === t ? _tween.default.Exponential : _tween.default.Bounce).easeOut;
        }
    }, {
        key: "release",
        value: function() {
            this.stop(), _get(_getPrototypeOf(r.prototype), "release", this).call(this);
        }
    }, {
        key: "stop",
        value: function() {
            this._isAnimating && (this._stopTicking(), this._isAnimating = !1, this._startTime = 0);
        }
    }, {
        key: "start",
        value: function() {
            this._isAnimating || this._instance && (this.renderer = this._instance.renderer, 
            this.originY = this.renderer.getY(), this.originX = this.renderer.getX(), this._startTicking(), 
            this._isAnimating = !0);
        }
    }, {
        key: "tick",
        value: function(t) {
            this._startTime += t, this._startTime >= this._allTime && (this._startTime = this._allTime);
            t = this._easeFunction(this._startTime, 0, 2 * Math.PI, this._allTime);
            "1" === this.properties.direction ? this.renderer.skew.y = t : this.renderer.skew.x = t, 
            this._startTime >= this._allTime && this.stop();
        }
    } ]);
}();