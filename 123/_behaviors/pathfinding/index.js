Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _instance = _interopRequireDefault(require("./instance")), _action = _interopRequireDefault(require("./action")), _condition = _interopRequireDefault(require("./condition")), _expression = _interopRequireDefault(require("./expression")), _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

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
        Object.defineProperty(e, o.key, o);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t;
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _get(e, t, r) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
        var o = _superPropBase(e, t);
        if (o) {
            var n = Object.getOwnPropertyDescriptor(o, t);
            return n.get ? n.get.call(r) : n.value;
        }
    })(e, t, r || e);
}

function _superPropBase(e, t) {
    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); ) ;
    return e;
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
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
    }), t && _setPrototypeOf(e, t);
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var _default = function(e) {
    function t(e) {
        return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e));
    }
    return _inherits(t, LB.SDK.IBehaviorBase), _createClass(t, [ {
        key: "release",
        value: function() {
            _get(_getPrototypeOf(t.prototype), "release", this).call(this);
        }
    } ]), t;
}();

_defineProperty(exports.default = _default, "Config", _config.default), _defineProperty(_default, "Instance", _instance.default), 
_defineProperty(_default, "Action", _action.default), _defineProperty(_default, "Condition", _condition.default), 
_defineProperty(_default, "Expression", _expression.default);