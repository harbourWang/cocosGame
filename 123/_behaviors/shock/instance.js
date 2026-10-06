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
        var r = e[o];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(t, r.key, r);
    }
}

function _createClass(t, e, o) {
    return e && _defineProperties(t.prototype, e), o && _defineProperties(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, o) {
        var r = _superPropBase(t, e);
        if (r) return r = Object.getOwnPropertyDescriptor(r, e), r.get ? r.get.call(arguments.length < 3 ? t : o) : r.value;
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

function _createSuper(o) {
    var r = _isNativeReflectConstruct();
    return function() {
        var t, e = _getPrototypeOf(o);
        return _possibleConstructorReturn(this, r ? (t = _getPrototypeOf(this).constructor, 
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = function() {
    _inherits(r, LB.SDK.IBehaviorInstanceBase);
    var o = _createSuper(r);
    function r(t, e) {
        return _classCallCheck(this, r), (t = o.call(this, t))._time = 0, t._count = e.count || 0, 
        t.count = t._count, t._frequency = Math.max(e.frequency || .1, .01), t._amplitude_x = Math.max(e.amplitude_x, 0), 
        t._amplitude_y = Math.max(e.amplitude_y, 0), t._moved = !1, t._isShocking = !1, 
        t._shockPos = {
            x: 0,
            y: 0
        }, e && e.enable && t._startTicking(), t;
    }
    return _createClass(r, [ {
        key: "release",
        value: function() {
            this.stop(), _get(_getPrototypeOf(r.prototype), "release", this).call(this);
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
            this._isShocking && (this._stopTicking(), this._isShocking = !1, this._moved && (t = this._instance.renderer, 
            this._shockPos.x = -this._shockPos.x, this._shockPos.y = -this._shockPos.y, t.position.x += this._shockPos.x, 
            t.position.y += this._shockPos.y));
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
    } ]), r;
}();

exports.default = _default;