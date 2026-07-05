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
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(n.key), n);
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
        var n = _superPropBase(e, t);
        if (n) return (n = Object.getOwnPropertyDescriptor(n, t)).get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
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
        return _classCallCheck(this, r), (e = _callSuper(this, r, [ e ]))._isTweening = !1, 
        e._obj = {}, e._end = !1, e;
    }
    return _inherits(r, LB.SDK.IBehaviorInstanceBase), _createClass(r, [ {
        key: "pause",
        value: function() {
            this._isTweening && (this._stopTicking(), this._isTweening = !1);
        }
    }, {
        key: "start",
        value: function() {
            this._isTweening || this._end || (this._startTicking(), this._isTweening = !0);
        }
    }, {
        key: "end",
        value: function() {
            this._stopTicking(), this._isTweening = !1, this._obj = {}, this._end = !0;
        }
    }, {
        key: "stop",
        value: function() {
            this._isTweening && (this._stopTicking(), this._isTweening = !1);
        }
    }, {
        key: "release",
        value: function() {
            this.stop(), _get(_getPrototypeOf(r.prototype), "release", this).call(this);
        }
    }, {
        key: "tick",
        value: function(e) {
            if (this._isTweening) {
                for (var t in this._obj) {
                    var r = this._obj[t];
                    if (r.currentTime += e, r.currentTime > r.time) delete this._obj[t]; else {
                        var n = _tween.default[r.tweenType][r.easeType], i = r.target, o = r.time, s = r.currentTime;
                        switch (t) {
                          case "x":
                            this._changeValueX = i * this._runtime.devicePixel - this._currentX, this._instance.renderer.setPosition(n(s, this._currentX, this._changeValueX, o), null);
                            break;

                          case "y":
                            this._changeValueY = i * this._runtime.devicePixel - this._currentY, this._instance.renderer.setPosition(null, n(s, this._currentY, this._changeValueY, o));
                            break;

                          case "alpha":
                            this._instance.renderer.setAlpha(n(s, this.cacheAlpha, i - this.cacheAlpha, o));
                            break;

                          case "width":
                            this._instance.renderer.changeSize("width", n(s, this._cacheWidth, i - this._cacheWidth, o));
                            break;

                          case "height":
                            this._instance.renderer.changeSize("height", n(s, this._cacheHeight, i - this._cacheHeight, o));
                            break;

                          case "scaleX":
                            this._instance.renderer.setOneScale("x", n(s, 1, i - 1, o) * this._cacheScaleX);
                            break;

                          case "scaleY":
                            this._instance.renderer.setOneScale("y", n(s, 1, i - 1, o) * this._cacheScaleY);
                        }
                    }
                }
                0 === Object.keys(this._obj).length && (this._isTweening = !1, this._stopTicking());
            }
        }
    } ]);
}();