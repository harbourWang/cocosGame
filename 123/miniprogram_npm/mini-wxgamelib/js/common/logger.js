Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Log = exports.LOG_TYPES = void 0;

var _message = _interopRequireDefault(require("./message"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, o) {
    for (var L = 0; L < o.length; L++) {
        var E = o[L];
        E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), 
        Object.defineProperty(e, E.key, E);
    }
}

function _createClass(e, o, L) {
    return o && _defineProperties(e.prototype, o), L && _defineProperties(e, L), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

var LOG_TYPES = {
    ERROR: "error",
    INFO: "info",
    WARN: "warn",
    DEBUG: "debug",
    DEFAULT: "log",
    INTERACT: "interact",
    LIFE: "life",
    REQUEST: "request"
}, Log = (exports.LOG_TYPES = LOG_TYPES, function() {
    function L() {
        _classCallCheck(this, L);
    }
    return _createClass(L, null, [ {
        key: "e",
        value: function(e, o) {
            e && !L.FORCE_GLOBAL_TAG || (e = L.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.ERROR, "][").concat(e, "] > ").concat(o);
            L.ENABLE_CALLBACK && L.emitter.emit("log", LOG_TYPES.ERROR, e), L.ENABLE_ERROR && (console.error ? console.error(e) : console.warn ? console.warn(e) : console.log(e));
        }
    }, {
        key: "i",
        value: function(e, o) {
            e && !L.FORCE_GLOBAL_TAG || (e = L.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.INFO, "][").concat(e, "] > ").concat(o);
            L.ENABLE_CALLBACK && L.emitter.emit("log", LOG_TYPES.INFO, e), L.ENABLE_INFO && (console.info ? console.info(e) : console.log(e));
        }
    }, {
        key: "w",
        value: function(e, o) {
            e && !L.FORCE_GLOBAL_TAG || (e = L.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.WARN, "][").concat(e, "] > ").concat(o);
            L.ENABLE_CALLBACK && L.emitter.emit("log", LOG_TYPES.WARN, e), L.ENABLE_WARN && (console.warn ? console.warn(e) : console.log(e));
        }
    }, {
        key: "d",
        value: function(e, o) {
            e && !L.FORCE_GLOBAL_TAG || (e = L.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.DEBUG, "][").concat(e, "] > ").concat(o);
            L.ENABLE_CALLBACK && L.emitter.emit("log", LOG_TYPES.DEBUG, e), L.ENABLE_DEBUG && (console.debug ? console.debug(e) : console.log(e));
        }
    }, {
        key: "v",
        value: function(e, o) {
            e && !L.FORCE_GLOBAL_TAG || (e = L.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.DEFAULT, "][").concat(e, "] > ").concat(o || "");
            L.ENABLE_CALLBACK && L.emitter.emit("log", LOG_TYPES.DEFAULT, e), L.ENABLE_VERBOSE && console.log(e);
        }
    }, {
        key: "interact",
        value: function(e, o) {
            e && !L.FORCE_GLOBAL_TAG || (e = L.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.INTERACT, "][").concat(e, "] > ").concat(o || "");
            L.ENABLE_CALLBACK && L.emitter.emit("log", LOG_TYPES.INTERACT, e), L.ENABLE_INTERACT && console.log(e);
        }
    }, {
        key: "life",
        value: function(e, o) {
            e && !L.FORCE_GLOBAL_TAG || (e = L.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.LIFE, "][").concat(e, "] > ").concat(o || "");
            L.ENABLE_CALLBACK && L.emitter.emit("log", LOG_TYPES.LIFE, e), L.ENABLE_LIFE && console.log(e);
        }
    }, {
        key: "request",
        value: function(e, o) {
            e && !L.FORCE_GLOBAL_TAG || (e = L.GLOBAL_TAG);
            e = "[".concat(LOG_TYPES.REQUEST, "][").concat(e, "] > ").concat(o || "");
            L.ENABLE_CALLBACK && L.emitter.emit("log", LOG_TYPES.REQUEST, e), L.ENABLE_REQUEST && console.log(e);
        }
    } ]), L;
}());

(exports.Log = Log).GLOBAL_TAG = "mini-logger", Log.FORCE_GLOBAL_TAG = !1, Log.ENABLE_ERROR = !0, 
Log.ENABLE_INFO = !0, Log.ENABLE_WARN = !0, Log.ENABLE_DEBUG = !0, Log.ENABLE_VERBOSE = !0, 
Log.ENABLE_INTERACT = !0, Log.ENABLE_LIFE = !0, Log.ENABLE_REQUEST = !0, Log.ENABLE_CALLBACK = !0, 
Log.emitter = new _message.default();