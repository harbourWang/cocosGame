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
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
        var r = _superPropBase(e, t);
        if (r) return r = Object.getOwnPropertyDescriptor(r, t), r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value;
    }).apply(this, arguments);
}

function _superPropBase(e, t) {
    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); ) ;
    return e;
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
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function _createSuper(n) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(n);
        return _possibleConstructorReturn(this, r ? (e = _getPrototypeOf(this).constructor, 
        Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
}

function _possibleConstructorReturn(e, t) {
    if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e);
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
        !0;
    } catch (e) {
        return !1;
    }
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

var _default = function() {
    _inherits(r, LB.SDK.IBehaviorInstanceBase);
    var n = _createSuper(r);
    function r(e, t) {
        return _classCallCheck(this, r), (e = n.call(this, e))._isTweening = !1, e._obj = {}, 
        e._end = !1, e;
    }
    return _createClass(r, [ {
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
                    var n = this._obj[t];
                    if (n.currentTime += e, n.currentTime > n.time) delete this._obj[t]; else {
                        var r = _tween.default[n.tweenType][n.easeType], i = n.target, o = n.time, s = n.currentTime;
                        switch (t) {
                          case "x":
                            this._changeValueX = i * this._runtime.devicePixel - this._currentX, this._instance.renderer.setPosition(r(s, this._currentX, this._changeValueX, o), null);
                            break;

                          case "y":
                            this._changeValueY = i * this._runtime.devicePixel - this._currentY, this._instance.renderer.setPosition(null, r(s, this._currentY, this._changeValueY, o));
                            break;

                          case "alpha":
                            this._instance.renderer.setAlpha(r(s, this.cacheAlpha, i - this.cacheAlpha, o));
                            break;

                          case "width":
                            this._instance.renderer.changeSize("width", r(s, this._cacheWidth, i - this._cacheWidth, o));
                            break;

                          case "height":
                            this._instance.renderer.changeSize("height", r(s, this._cacheHeight, i - this._cacheHeight, o));
                            break;

                          case "scaleX":
                            this._instance.renderer.setOneScale("x", r(s, 1, i - 1, o) * this._cacheScaleX);
                            break;

                          case "scaleY":
                            this._instance.renderer.setOneScale("y", r(s, 1, i - 1, o) * this._cacheScaleY);
                        }
                    }
                }
                0 === Object.keys(this._obj).length && (this._isTweening = !1, this._stopTicking());
            }
        }
    } ]), r;
}();

exports.default = _default;