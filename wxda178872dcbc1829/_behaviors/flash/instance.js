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
        return _classCallCheck(this, r), (t = _callSuper(this, r, [ t ]))._onTime = Math.max(e.onTime, .01) || 0, 
        t._offTime = Math.max(e.offTime, .01) || 0, t._stage = 0, t._isFlashing = !1, t._stageTimeLeft = t._offTime || 0, 
        t._allTime = e.allTime || 0, t._offAlpha = Math.min(1, Math.max(e.offAlpha || 0, 0)), 
        t.cacheAlpha = t._instance.renderer.alpha, e && e.enable && t.start(), t;
    }
    return _inherits(r, LB.SDK.IBehaviorInstanceBase), _createClass(r, [ {
        key: "release",
        value: function() {
            this.stop(), _get(_getPrototypeOf(r.prototype), "release", this).call(this);
        }
    }, {
        key: "start",
        value: function() {
            this._isFlashing || (this._timeLeft = this._allTime, this._allTime < 0 && (this._timeLeft = 1), 
            this._startTicking(), this._isFlashing = !0);
        }
    }, {
        key: "stop",
        value: function() {
            this._isFlashing && (this._stopTicking(), this._timeLeft = 0, this.cacheAlpha && (this._instance.renderer.alpha = this.cacheAlpha), 
            this._isFlashing = !1);
        }
    }, {
        key: "tick",
        value: function(t) {
            0 < this._timeLeft ? (0 <= this._allTime && (this._timeLeft -= t), this._stageTimeLeft -= t, 
            this._stageTimeLeft <= 0 && (0 === this._stage ? (this.cacheAlpha = this._instance.renderer.alpha, 
            this._instance.renderer.alpha = this._offAlpha, this._stage = 1, this._stageTimeLeft += this._offTime) : (this.cacheAlpha && (this._instance.renderer.alpha = this.cacheAlpha), 
            this._stage = 0, this._stageTimeLeft += this._onTime)), this._isFlashing = !0) : (this._timeLeft = 0, 
            this.cacheAlpha && (this._instance.renderer.alpha = this.cacheAlpha), this._isFlashing = !1);
        }
    } ]);
}();