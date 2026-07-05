Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _message = _interopRequireDefault(require("./message")), _logger = require("./logger");

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
    for (var g = 0; g < o.length; g++) {
        var n = o[g];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(n.key), n);
    }
}

function _createClass(e, o, g) {
    return o && _defineProperties(e.prototype, o), g && _defineProperties(e, g), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : e + "";
}

function _toPrimitive(e, o) {
    if ("object" != _typeof(e) || !e) return e;
    var g = e[Symbol.toPrimitive];
    if (void 0 === g) return ("string" === o ? String : Number)(e);
    g = g.call(e, o || "default");
    if ("object" != _typeof(g)) return g;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

var LoggingControl = function() {
    function g() {
        _classCallCheck(this, g);
    }
    return _createClass(g, null, [ {
        key: "forceGlobalTag",
        get: function() {
            return _logger.Log.FORCE_GLOBAL_TAG;
        },
        set: function(e) {
            _logger.Log.FORCE_GLOBAL_TAG = e, g._notifyChange();
        }
    }, {
        key: "globalTag",
        get: function() {
            return _logger.Log.GLOBAL_TAG;
        },
        set: function(e) {
            _logger.Log.GLOBAL_TAG = e, g._notifyChange();
        }
    }, {
        key: "enableAll",
        get: function() {
            return _logger.Log.ENABLE_VERBOSE && _logger.Log.ENABLE_DEBUG && _logger.Log.ENABLE_INFO && _logger.Log.ENABLE_WARN && _logger.Log.ENABLE_ERROR && _logger.Log.ENABLE_INTERACT && _logger.Log.ENABLE_LIFE && _logger.Log.ENABLE_REQUEST;
        },
        set: function(e) {
            _logger.Log.ENABLE_VERBOSE = e, _logger.Log.ENABLE_DEBUG = e, _logger.Log.ENABLE_INFO = e, 
            _logger.Log.ENABLE_WARN = e, _logger.Log.ENABLE_ERROR = e, _logger.Log.ENABLE_INTERACT = e, 
            _logger.Log.ENABLE_LIFE = e, _logger.Log.ENABLE_REQUEST = e, g._notifyChange();
        }
    }, {
        key: "enableDebug",
        get: function() {
            return _logger.Log.ENABLE_DEBUG;
        },
        set: function(e) {
            _logger.Log.ENABLE_DEBUG = e, g._notifyChange();
        }
    }, {
        key: "enableVerbose",
        get: function() {
            return _logger.Log.ENABLE_VERBOSE;
        },
        set: function(e) {
            _logger.Log.ENABLE_VERBOSE = e, g._notifyChange();
        }
    }, {
        key: "enableInfo",
        get: function() {
            return _logger.Log.ENABLE_INFO;
        },
        set: function(e) {
            _logger.Log.ENABLE_INFO = e, g._notifyChange();
        }
    }, {
        key: "enableWarn",
        get: function() {
            return _logger.Log.ENABLE_WARN;
        },
        set: function(e) {
            _logger.Log.ENABLE_WARN = e, g._notifyChange();
        }
    }, {
        key: "enableError",
        get: function() {
            return _logger.Log.ENABLE_ERROR;
        },
        set: function(e) {
            _logger.Log.ENABLE_ERROR = e, g._notifyChange();
        }
    }, {
        key: "enableInteract",
        get: function() {
            return _logger.Log.ENABLE_INTERACT;
        },
        set: function(e) {
            _logger.Log.ENABLE_INTERACT = e, g._notifyChange();
        }
    }, {
        key: "enableLife",
        get: function() {
            return _logger.Log.ENABLE_LIFE;
        },
        set: function(e) {
            _logger.Log.ENABLE_LIFE = e, g._notifyChange();
        }
    }, {
        key: "enableRequest",
        get: function() {
            return _logger.Log.ENABLE_REQUEST;
        },
        set: function(e) {
            _logger.Log.ENABLE_REQUEST = e, g._notifyChange();
        }
    }, {
        key: "getConfig",
        value: function() {
            return {
                globalTag: _logger.Log.GLOBAL_TAG,
                forceGlobalTag: _logger.Log.FORCE_GLOBAL_TAG,
                enableVerbose: _logger.Log.ENABLE_VERBOSE,
                enableDebug: _logger.Log.ENABLE_DEBUG,
                enableInfo: _logger.Log.ENABLE_INFO,
                enableWarn: _logger.Log.ENABLE_WARN,
                enableError: _logger.Log.ENABLE_ERROR,
                enableCallback: _logger.Log.ENABLE_CALLBACK,
                enableInteract: _logger.Log.ENABLE_INTERACT,
                enableLife: _logger.Log.ENABLE_LIFE,
                enableRequest: _logger.Log.ENABLE_REQUEST
            };
        }
    }, {
        key: "applyConfig",
        value: function(e) {
            _logger.Log.GLOBAL_TAG = e.globalTag, _logger.Log.FORCE_GLOBAL_TAG = e.forceGlobalTag, 
            _logger.Log.ENABLE_VERBOSE = e.enableVerbose, _logger.Log.ENABLE_DEBUG = e.enableDebug, 
            _logger.Log.ENABLE_INFO = e.enableInfo, _logger.Log.ENABLE_WARN = e.enableWarn, 
            _logger.Log.ENABLE_ERROR = e.enableError, _logger.Log.ENABLE_CALLBACK = e.enableCallback, 
            _logger.Log.ENABLE_INTERACT = e.enableInteract, _logger.Log.ENABLE_LIFE = e.enableLife, 
            _logger.Log.ENABLE_REQUEST = e.enableRequest;
        }
    }, {
        key: "_notifyChange",
        value: function() {
            var e, o = g.emitter;
            0 < o.listenerCount("change") && (e = g.getConfig(), o.emit("change", e));
        }
    }, {
        key: "registerListener",
        value: function(e) {
            g.emitter.on("change", e);
        }
    }, {
        key: "removeListener",
        value: function(e) {
            g.emitter.off("change", e);
        }
    }, {
        key: "addLogListener",
        value: function(e) {
            _logger.Log.emitter.on("log", e), 0 < _logger.Log.emitter.listenerCount("log") && (_logger.Log.ENABLE_CALLBACK = !0, 
            g._notifyChange());
        }
    }, {
        key: "removeLogListener",
        value: function(e) {
            _logger.Log.emitter.off("log", e), 0 === _logger.Log.emitter.listenerCount("log") && (_logger.Log.ENABLE_CALLBACK = !1, 
            g._notifyChange());
        }
    } ]);
}(), _default = (LoggingControl.emitter = new _message.default(), exports.default = LoggingControl);