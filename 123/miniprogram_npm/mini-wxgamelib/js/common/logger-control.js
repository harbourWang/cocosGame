Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _message = _interopRequireDefault(require("./message")), _logger = require("./logger");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, g) {
    if (!(e instanceof g)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, g) {
    for (var o = 0; o < g.length; o++) {
        var n = g[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, g, o) {
    return g && _defineProperties(e.prototype, g), o && _defineProperties(e, o), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

var LoggingControl = function() {
    function o() {
        _classCallCheck(this, o);
    }
    return _createClass(o, null, [ {
        key: "forceGlobalTag",
        get: function() {
            return _logger.Log.FORCE_GLOBAL_TAG;
        },
        set: function(e) {
            _logger.Log.FORCE_GLOBAL_TAG = e, o._notifyChange();
        }
    }, {
        key: "globalTag",
        get: function() {
            return _logger.Log.GLOBAL_TAG;
        },
        set: function(e) {
            _logger.Log.GLOBAL_TAG = e, o._notifyChange();
        }
    }, {
        key: "enableAll",
        get: function() {
            return _logger.Log.ENABLE_VERBOSE && _logger.Log.ENABLE_DEBUG && _logger.Log.ENABLE_INFO && _logger.Log.ENABLE_WARN && _logger.Log.ENABLE_ERROR && _logger.Log.ENABLE_INTERACT && _logger.Log.ENABLE_LIFE && _logger.Log.ENABLE_REQUEST;
        },
        set: function(e) {
            _logger.Log.ENABLE_VERBOSE = e, _logger.Log.ENABLE_DEBUG = e, _logger.Log.ENABLE_INFO = e, 
            _logger.Log.ENABLE_WARN = e, _logger.Log.ENABLE_ERROR = e, _logger.Log.ENABLE_INTERACT = e, 
            _logger.Log.ENABLE_LIFE = e, _logger.Log.ENABLE_REQUEST = e, o._notifyChange();
        }
    }, {
        key: "enableDebug",
        get: function() {
            return _logger.Log.ENABLE_DEBUG;
        },
        set: function(e) {
            _logger.Log.ENABLE_DEBUG = e, o._notifyChange();
        }
    }, {
        key: "enableVerbose",
        get: function() {
            return _logger.Log.ENABLE_VERBOSE;
        },
        set: function(e) {
            _logger.Log.ENABLE_VERBOSE = e, o._notifyChange();
        }
    }, {
        key: "enableInfo",
        get: function() {
            return _logger.Log.ENABLE_INFO;
        },
        set: function(e) {
            _logger.Log.ENABLE_INFO = e, o._notifyChange();
        }
    }, {
        key: "enableWarn",
        get: function() {
            return _logger.Log.ENABLE_WARN;
        },
        set: function(e) {
            _logger.Log.ENABLE_WARN = e, o._notifyChange();
        }
    }, {
        key: "enableError",
        get: function() {
            return _logger.Log.ENABLE_ERROR;
        },
        set: function(e) {
            _logger.Log.ENABLE_ERROR = e, o._notifyChange();
        }
    }, {
        key: "enableInteract",
        get: function() {
            return _logger.Log.ENABLE_INTERACT;
        },
        set: function(e) {
            _logger.Log.ENABLE_INTERACT = e, o._notifyChange();
        }
    }, {
        key: "enableLife",
        get: function() {
            return _logger.Log.ENABLE_LIFE;
        },
        set: function(e) {
            _logger.Log.ENABLE_LIFE = e, o._notifyChange();
        }
    }, {
        key: "enableRequest",
        get: function() {
            return _logger.Log.ENABLE_REQUEST;
        },
        set: function(e) {
            _logger.Log.ENABLE_REQUEST = e, o._notifyChange();
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
            var e, g = o.emitter;
            0 < g.listenerCount("change") && (e = o.getConfig(), g.emit("change", e));
        }
    }, {
        key: "registerListener",
        value: function(e) {
            o.emitter.on("change", e);
        }
    }, {
        key: "removeListener",
        value: function(e) {
            o.emitter.off("change", e);
        }
    }, {
        key: "addLogListener",
        value: function(e) {
            _logger.Log.emitter.on("log", e), 0 < _logger.Log.emitter.listenerCount("log") && (_logger.Log.ENABLE_CALLBACK = !0, 
            o._notifyChange());
        }
    }, {
        key: "removeLogListener",
        value: function(e) {
            _logger.Log.emitter.off("log", e), 0 === _logger.Log.emitter.listenerCount("log") && (_logger.Log.ENABLE_CALLBACK = !1, 
            o._notifyChange());
        }
    } ]), o;
}(), _default = (LoggingControl.emitter = new _message.default(), LoggingControl);

exports.default = _default;