Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _constant = require("../../constant.js");

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
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
        var o = _superPropBase(e, t);
        if (o) return (o = Object.getOwnPropertyDescriptor(o, t)).get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
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

function _defineProperty(e, t, r) {
    return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
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

var _default = exports.default = function() {
    function r(e) {
        var t;
        return _classCallCheck(this, r), _defineProperty(t = _callSuper(this, r, [ e ]), "_keyboardConfirm", function(e) {
            t._keyboardValue = e.value, t._runtime.eventEmitter.emit(_constant.OPCODE.eventKeyboardConfirm);
        }), _defineProperty(t, "_keyboardComplete", function() {
            t._isKeyboardOn = !1, t._runtime.eventEmitter.emit(_constant.OPCODE.eventKeyboardComplete), 
            wx.offKeyboardConfirm(t._keyboardConfirm), wx.offKeyboardComplete(t._keyboardComplete);
        }), t._isKeyboardOn = !1, t._obj = {
            maxLength: 255,
            confirmHold: !1,
            confirmType: "done",
            defaultValue: ""
        }, t._keyboardValue = "", t;
    }
    return _inherits(r, LB.SDK.IPluginInstanceBase), _createClass(r, [ {
        key: "release",
        value: function() {
            _get(_getPrototypeOf(r.prototype), "release", this).call(this);
        }
    }, {
        key: "_showKeyboard",
        value: function(e) {
            this._runtime.isMiniGame ? this._isKeyboardOn || (this._isKeyboardOn = !0, wx.showKeyboard(e), 
            wx.onKeyboardConfirm(this._keyboardConfirm), wx.onKeyboardComplete(this._keyboardComplete)) : window.showTips("请在手机微信端体验键盘功能");
        }
    }, {
        key: "_hideKeyboard",
        value: function(e) {
            this._isKeyboardOn && wx.hideKeyboard(e);
        }
    } ]);
}();