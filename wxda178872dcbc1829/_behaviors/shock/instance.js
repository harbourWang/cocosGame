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
    for (var o = 0; o < e.length; o++) {
        var i = e[o];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(i.key), i);
    }
}

function _createClass(t, e, o) {
    return e && _defineProperties(t.prototype, e), o && _defineProperties(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : t + "";
}

function _toPrimitive(t, e) {
    if ("object" != _typeof(t) || !t) return t;
    var o = t[Symbol.toPrimitive];
    if (void 0 === o) return ("string" === e ? String : Number)(t);
    o = o.call(t, e || "default");
    if ("object" != _typeof(o)) return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

function _callSuper(t, e, o) {
    return e = _getPrototypeOf(e), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(e, o || [], _getPrototypeOf(t).constructor) : e.apply(t, o));
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
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, o) {
        var i = _superPropBase(t, e);
        if (i) return (i = Object.getOwnPropertyDescriptor(i, e)).get ? i.get.call(arguments.length < 3 ? t : o) : i.value;
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
    function o(t, e) {
        return _classCallCheck(this, o), (t = _callSuper(this, o, [ t ]))._time = 0, t._count = e.count || 0, 
        t.count = t._count, t._frequency = Math.max(e.frequency || .1, .01), t._amplitude_x = Math.max(e.amplitude_x, 0), 
        t._amplitude_y = Math.max(e.amplitude_y, 0), t._moved = !1, t._isShocking = !1, 
        t._shockPos = {
            x: 0,
            y: 0
        }, e && e.enable && t._startTicking(), t;
    }
    return _inherits(o, LB.SDK.IBehaviorInstanceBase), _createClass(o, [ {
        key: "release",
        value: function() {
            this.stop(), _get(_getPrototypeOf(o.prototype), "release", this).call(this);
        }
    }, {
        key: "start",
        value: function() {
            this._isShocking || (this.count = this._count, this._time = 0, this._isShocking = !0, 
            this._startTicking());
        }
    }, {
        key: "stop",
        value: function() {
            var t;
            this._isShocking && (this._stopTicking(), this._isShocking = !1, this._moved) && (t = this._instance.renderer, 
            this._shockPos.x = -this._shockPos.x, this._shockPos.y = -this._shockPos.y, t.position.x += this._shockPos.x, 
            t.position.y += this._shockPos.y);
        }
    }, {
        key: "tick",
        value: function(t) {
            0 !== this.count ? (this._time += t, t = this._instance.renderer, this._time >= this._frequency / 2 && (this._time = 0, 
            this._moved ? (this._moved = !1, this._shockPos.x = -this._shockPos.x, this._shockPos.y = -this._shockPos.y, 
            this.count--) : (this._moved = !0, this._shockPos = {
                x: .5 < Math.random() ? this._amplitude_x : -this._amplitude_x,
                y: .5 < Math.random() ? this._amplitude_y : -this._amplitude_y
            }), t.position.x += this._shockPos.x, t.position.y += this._shockPos.y), this._isShocking = !0) : this._isShocking && this.stop();
        }
    } ]);
}();