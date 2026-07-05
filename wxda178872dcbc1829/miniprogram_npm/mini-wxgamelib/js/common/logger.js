Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Log = exports.LOG_TYPES = void 0;

var _message = _interopRequireDefault(require("./message"));

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

function _classCallCheck(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, o) {
    for (var t = 0; t < o.length; t++) {
        var n = o[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(n.key), n);
    }
}

function _createClass(e, o, t) {
    return o && _defineProperties(e.prototype, o), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : e + "";
}

function _toPrimitive(e, o) {
    if ("object" != _typeof(e) || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (void 0 === t) return ("string" === o ? String : Number)(e);
    t = t.call(e, o || "default");
    if ("object" != _typeof(t)) return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

var LOG_TYPES = exports.LOG_TYPES = {
    ERROR: "error",
    INFO: "info",
    WARN: "warn",
    DEBUG: "debug",
    DEFAULT: "log",
    INTERACT: "interact",
    LIFE: "life",
    REQUEST: "request"
}, Log = exports.Log = function() {
    function t() {
        _classCallCheck(this, t);
    }
    return _createClass(t, null, [ {
        key: "e",
        value: function(e, o) {
            e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.ERROR, "][").concat(e, "] > ").concat(o);
            t.ENABLE_CALLBACK && t.emitter.emit("log", LOG_TYPES.ERROR, e), t.ENABLE_ERROR && (console.error ? console.error(e) : console.warn ? console.warn(e) : console.log(e));
        }
    }, {
        key: "i",
        value: function(e, o) {
            e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.INFO, "][").concat(e, "] > ").concat(o);
            t.ENABLE_CALLBACK && t.emitter.emit("log", LOG_TYPES.INFO, e), t.ENABLE_INFO && (console.info ? console.info(e) : console.log(e));
        }
    }, {
        key: "w",
        value: function(e, o) {
            e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.WARN, "][").concat(e, "] > ").concat(o);
            t.ENABLE_CALLBACK && t.emitter.emit("log", LOG_TYPES.WARN, e), t.ENABLE_WARN && (console.warn ? console.warn(e) : console.log(e));
        }
    }, {
        key: "d",
        value: function(e, o) {
            e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.DEBUG, "][").concat(e, "] > ").concat(o);
            t.ENABLE_CALLBACK && t.emitter.emit("log", LOG_TYPES.DEBUG, e), t.ENABLE_DEBUG && (console.debug ? console.debug(e) : console.log(e));
        }
    }, {
        key: "v",
        value: function(e, o) {
            e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.DEFAULT, "][").concat(e, "] > ").concat(o || "");
            t.ENABLE_CALLBACK && t.emitter.emit("log", LOG_TYPES.DEFAULT, e), t.ENABLE_VERBOSE && console.log(e);
        }
    }, {
        key: "interact",
        value: function(e, o) {
            e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.INTERACT, "][").concat(e, "] > ").concat(o || "");
            t.ENABLE_CALLBACK && t.emitter.emit("log", LOG_TYPES.INTERACT, e), t.ENABLE_INTERACT && console.log(e);
        }
    }, {
        key: "life",
        value: function(e, o) {
            e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.LIFE, "][").concat(e, "] > ").concat(o || "");
            t.ENABLE_CALLBACK && t.emitter.emit("log", LOG_TYPES.LIFE, e), t.ENABLE_LIFE && console.log(e);
        }
    }, {
        key: "request",
        value: function(e, o) {
            e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.REQUEST, "][").concat(e, "] > ").concat(o || "");
            t.ENABLE_CALLBACK && t.emitter.emit("log", LOG_TYPES.REQUEST, e), t.ENABLE_REQUEST && console.log(e);
        }
    } ]);
}();

Log.GLOBAL_TAG = "mini-logger", Log.FORCE_GLOBAL_TAG = !1, Log.ENABLE_ERROR = !0, 
Log.ENABLE_INFO = !0, Log.ENABLE_WARN = !0, Log.ENABLE_DEBUG = !0, Log.ENABLE_VERBOSE = !0, 
Log.ENABLE_INTERACT = !0, Log.ENABLE_LIFE = !0, Log.ENABLE_REQUEST = !0, Log.ENABLE_CALLBACK = !0, 
Log.emitter = new _message.default();