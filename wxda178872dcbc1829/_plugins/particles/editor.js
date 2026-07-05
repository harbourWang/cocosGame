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

var PIXI = _interopRequireWildcard(require("pixi.js")), _client = require("../../util/client");

function _getRequireWildcardCache(t) {
    var e, r;
    return "function" != typeof WeakMap ? null : (e = new WeakMap(), r = new WeakMap(), 
    (_getRequireWildcardCache = function(t) {
        return t ? r : e;
    })(t));
}

function _interopRequireWildcard(t, e) {
    if (!e && t && t.__esModule) return t;
    if (null === t || "object" != _typeof(t) && "function" != typeof t) return {
        default: t
    };
    e = _getRequireWildcardCache(e);
    if (e && e.has(t)) return e.get(t);
    var r, o, n = {
        __proto__: null
    }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (r in t) "default" !== r && {}.hasOwnProperty.call(t, r) && ((o = i ? Object.getOwnPropertyDescriptor(t, r) : null) && (o.get || o.set) ? Object.defineProperty(n, r, o) : n[r] = t[r]);
    return n.default = t, e && e.set(t, n), n;
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var r = 0; r < e.length; r++) {
        var o = e[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(o.key), o);
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

var dpr = (0, _client.getDeviceInfo)().devicePixelRatio, _default = exports.default = function() {
    function r(t) {
        var e;
        return _classCallCheck(this, r), (e = _callSuper(this, r)).init(t), e;
    }
    return _inherits(r, PIXI.Container), _createClass(r, [ {
        key: "init",
        value: function(t) {
            t = t.url;
            this.wrap ? this.wrap.texture = new PIXI.Texture.from(t) : (this.wrap = PIXI.Sprite.from(t), 
            this.wrap.interactive = !0, this.wrap.width = 150 * dpr, this.wrap.height = 150 * dpr, 
            this.wrap.x = 0, this.wrap.y = 0, this.wrap.anchor.set(.5), this.addChild(this.wrap));
        }
    } ]);
}();