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
        Object.defineProperty(t, n.key, n);
    }
}

function _createClass(t, e, r) {
    return e && _defineProperties(t.prototype, e), r && _defineProperties(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, r) {
        var n = _superPropBase(t, e);
        if (n) return n = Object.getOwnPropertyDescriptor(n, e), n.get ? n.get.call(arguments.length < 3 ? t : r) : n.value;
    }).apply(this, arguments);
}

function _superPropBase(t, e) {
    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); ) ;
    return t;
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
    return (_setPrototypeOf = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

function _createSuper(r) {
    var n = _isNativeReflectConstruct();
    return function() {
        var t, e = _getPrototypeOf(r);
        return _possibleConstructorReturn(this, n ? (t = _getPrototypeOf(this).constructor, 
        Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
    };
}

function _possibleConstructorReturn(t, e) {
    if (e && ("object" === _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}

function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
        !0;
    } catch (t) {
        return !1;
    }
}

function _getPrototypeOf(t) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

var _default = function() {
    _inherits(n, LB.SDK.IBehaviorInstanceBase);
    var r = _createSuper(n);
    function n(t, e) {
        return _classCallCheck(this, n), (t = r.call(this, t))._isAnimating = !1, t._startTime = 0, 
        t._allTime = e.allTime || 0, t.setEaseFunction(e.type), (t.properties = e) && e.enable && t.start(), 
        t;
    }
    return _createClass(n, [ {
        key: "setEaseFunction",
        value: function(t) {
            this._easeFunction = ("1" === t ? _tween.default.Cubic : "2" === t ? _tween.default.Exponential : _tween.default.Bounce).easeOut;
        }
    }, {
        key: "release",
        value: function() {
            this.stop(), _get(_getPrototypeOf(n.prototype), "release", this).call(this);
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
            "1" === this.properties.direction ? this._endValue = -720 : this._endValue = 720, 
            this._startTicking(), this._isAnimating = !0);
        }
    }, {
        key: "tick",
        value: function(t) {
            this._startTime += t, this._startTime >= this._allTime && (this._startTime = this._allTime);
            var t = this._easeFunction(this._startTime, 0, this._endValue, this._allTime), e = this._easeFunction(this._startTime, 0, 1, this._allTime);
            this.renderer.rotateTo(t), this.renderer.alpha = e, this._startTime >= this._allTime && this.stop();
        }
    } ]), n;
}();

exports.default = _default;