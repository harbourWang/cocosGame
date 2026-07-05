function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _tween = _interopRequireDefault(require("../tween.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var i = t[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(i.key), i);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : e + "";
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 === r) return ("string" === t ? String : Number)(e);
    r = r.call(e, t || "default");
    if ("object" != _typeof(r)) return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

function _callSuper(e, t, r) {
    return t = _getPrototypeOf(t), _possibleConstructorReturn(e, _isNativeReflectConstruct() ? Reflect.construct(t, r || [], _getPrototypeOf(e).constructor) : t.apply(e, r));
}

function _possibleConstructorReturn(e, t) {
    if (t && ("object" == _typeof(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e);
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _isNativeReflectConstruct() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (e) {}
    return (_isNativeReflectConstruct = function() {
        return !!e;
    })();
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var i = _superPropBase(e, t);
        if (i) return (i = Object.getOwnPropertyDescriptor(i, t)).get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
    }).apply(null, arguments);
}

function _superPropBase(e, t) {
    for (;!{}.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); ) ;
    return e;
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && _setPrototypeOf(e, t);
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

var _default = exports.default = function() {
    function r(e, t) {
        return _classCallCheck(this, r), (e = _callSuper(this, r, [ e ]))._isAnimating = !1, 
        e.normalWidth = 0, e.normalHeight = 0, e._behaviorTypes = t.behaviorType || "Quadratic", 
        e._behaviorSpeed = t.behaviorSpeed || "easeIn", e._originSize = t.originSize || .8, 
        e._startTime = 0, e._allTime = t.allTime || 0, e._easeFunction = _tween.default[e._behaviorTypes][e._behaviorSpeed], 
        t && t.enable && e.start(), e;
    }
    return _inherits(r, LB.SDK.IBehaviorInstanceBase), _createClass(r, [ {
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
            var e;
            this._isAnimating || this._instance && (e = this._instance.renderer, (this.renderer = e).visible = !0, 
            this.originScaleX = e.scale.x, this.originScaleY = e.scale.y, this._startTicking(), 
            this._isAnimating = !0);
        }
    }, {
        key: "tick",
        value: function(e) {
            this._startTime += e, this._startTime >= this._allTime && (this._startTime = this._allTime);
            var e = this._originSize * this.originScaleX, t = this._originSize * this.originScaleX, e = this._easeFunction(this._startTime, e, this.originScaleX - e, this._allTime), t = this._easeFunction(this._startTime, t, this.originScaleY - t, this._allTime);
            this.renderer.setScale({
                x: e,
                y: t
            }), this._startTime >= this._allTime && this.stop();
        }
    } ]);
}();