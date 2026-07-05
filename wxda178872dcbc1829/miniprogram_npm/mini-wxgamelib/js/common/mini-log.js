Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MiniLog = void 0;

var _loggerControl = _interopRequireDefault(require("./logger-control")), _uni_report = _interopRequireDefault(require("./uni_report")), _logger = require("./logger");

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
    for (var n = 0; n < o.length; n++) {
        var t = o[n];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(t.key), t);
    }
}

function _createClass(e, o, n) {
    return o && _defineProperties(e.prototype, o), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : e + "";
}

function _toPrimitive(e, o) {
    if ("object" != _typeof(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 === n) return ("string" === o ? String : Number)(e);
    n = n.call(e, o || "default");
    if ("object" != _typeof(n)) return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

var Device = null, localLogManager = wx.getLogManager ? wx.getLogManager({
    level: 1
}) : null;

function createDefaultConfig() {
    return {
        isLocalLog: !0,
        isOnlineLog: !0,
        bid: 0,
        blockUrls: []
    };
}

_uni_report.default.set_config({
    reportsize: 10,
    delay: 2e3
});

var MiniLog = exports.MiniLog = function() {
    return _createClass(function e(o) {
        _classCallCheck(this, e), this._config = createDefaultConfig(), "object" === _typeof(o) && Object.assign(this._config, o), 
        App = this._wrapApp(App), Page = this._wrapPage(Page), Component = this._wrapComponent(Component), 
        _loggerControl.default.addLogListener(this._logEvent.bind(this)), this._config.isOnlineLog && _uni_report.default.set_base({
            bid: this._config.bid
        });
    }, [ {
        key: "_wrapApp",
        value: function(o) {
            var n = this, t = this;
            return function(e) {
                n._hook(e, "onLaunch", n._onAppLaunch, function() {
                    t._wrapRequest(this);
                }), n._hook(e, "onShow", n._onAppShow), n._hook(e, "onHide", n._onAppHide), n._hook(e, "onError", n._onAppError), 
                o(e);
            };
        }
    }, {
        key: "_wrapPage",
        value: function(o) {
            var n = this, t = this;
            return function(e) {
                n._hook(e, "onLoad", function(e) {
                    t._onPageLoad(e, this);
                }), n._hook(e, "onShow", function(e) {
                    t._onPageShow(e, this);
                }), n._hook(e, "onReady", function(e) {
                    t._onPageReady(e, this);
                }), n._hook(e, "onUnload", function(e) {
                    t._onPageUnload(e, this);
                }), n._hook(e, "onHide", function(e) {
                    t._onPageHide(e, this);
                }), o(e);
            };
        }
    }, {
        key: "_wrapComponent",
        value: function(o) {
            var n = this;
            return function(e) {
                n._hook(e, "created", n._onComponentCreated), n._hook(e, "attached", n._onComponentAttached), 
                n._hook(e, "ready", n._onComponentReady), n._hook(e, "detached", n._onComponentDetached), 
                o(e);
            };
        }
    }, {
        key: "_wrapRequest",
        value: function(t) {
            var e = this, o = t.request;
            o ? t.request = function(n) {
                e._isBlockUrl(n.url) || ([ "success", "fail", "compelete" ].forEach(function(e) {
                    var o = n[e];
                    o && (n[e] = function() {
                        _logger.Log.request(e, JSON.stringify(arguments)), o.apply(t, arguments);
                    });
                }), _logger.Log.request(n.method || "query", JSON.stringify(n))), o(n);
            } : _logger.Log.w("request", "wrapRequest failed");
        }
    }, {
        key: "_hook",
        value: function(e, o, n, t) {
            var i = e[o];
            e[o] = i ? function(e) {
                n.call(this, e, o), i.call(this, e), t && t.call(this, e);
            } : function(e) {
                n.call(this, e, o), t && t.call(this, e);
            };
        }
    }, {
        key: "_onAppLaunch",
        value: function(e) {
            _logger.Log.life("onAppLaunch", JSON.stringify(e));
        }
    }, {
        key: "_onAppShow",
        value: function() {
            Device = Device || wx.getSystemInfoSync(), _logger.Log.life("onAppShow", JSON.stringify(Device));
        }
    }, {
        key: "_onAppHide",
        value: function() {
            _logger.Log.life("onAppHide");
        }
    }, {
        key: "_onAppError",
        value: function() {
            var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).replace(/\n/gi, "").split(/\bat\b/).slice(0, 5).join("@").replace(/\?[^:]+/gi, "");
            _logger.Log.e(e);
        }
    }, {
        key: "_onPageLoad",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            _logger.Log.life("onPageLoad", JSON.stringify(Object.assign({
                route: (1 < arguments.length ? arguments[1] : void 0).route
            }, e)));
        }
    }, {
        key: "_onPageShow",
        value: function(e, o) {
            _logger.Log.life("onPageShow", JSON.stringify({
                route: o.route
            }));
        }
    }, {
        key: "_onPageReady",
        value: function(e, o) {
            _logger.Log.life("onPageReady", JSON.stringify({
                route: o.route
            }));
        }
    }, {
        key: "_onPageHide",
        value: function(e, o) {
            _logger.Log.life("onPageHide", JSON.stringify({
                route: o.route
            }));
        }
    }, {
        key: "_onPageUnload",
        value: function(e, o) {
            _logger.Log.life("onPageUnload", JSON.stringify({
                route: o.route
            }));
        }
    }, {
        key: "_onComponentCreated",
        value: function() {
            _logger.Log.life("onComponentCreated", JSON.stringify({
                route: this.is,
                data: this.data
            }));
        }
    }, {
        key: "_onComponentDetached",
        value: function() {
            _logger.Log.life("onComponentDetached", JSON.stringify({
                route: this.is,
                data: this.data
            }));
        }
    }, {
        key: "_onComponentAttached",
        value: function() {
            _logger.Log.life("onComponentAttached", JSON.stringify({
                route: this.is
            }));
        }
    }, {
        key: "_onComponentReady",
        value: function() {
            _logger.Log.life("onComponentReady", JSON.stringify({
                route: this.is
            }));
        }
    }, {
        key: "_logEvent",
        value: function(e) {
            var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
            this._config.isLocalLog && localLogManager && localLogManager.log(o), this._logOnlineLog(e, o);
        }
    }, {
        key: "_logOnlineLog",
        value: function(e) {
            var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
            if (this._config.isOnlineLog) {
                var n = 12006;
                switch (e) {
                  case _logger.LOG_TYPES.INTERACT:
                    n = 12002;
                    break;

                  case _logger.LOG_TYPES.LIFE:
                    n = 12001;
                    break;

                  case _logger.LOG_TYPES.REQUEST:
                    n = 12003;
                    break;

                  case _logger.LOG_TYPES.ERROR:
                    n = 12004;
                    break;

                  case _logger.LOG_TYPES.INFO:
                    n = 12007;
                    break;

                  case _logger.LOG_TYPES.DEBUG:
                    n = 12008;
                    break;

                  case _logger.LOG_TYPES.WARN:
                    n = 12005;
                    break;

                  default:
                    n = 12006;
                }
                _uni_report.default.report({
                    status: n,
                    ext: o
                });
            }
        }
    }, {
        key: "_isBlockUrl",
        value: function(e) {
            return e = e.replace(/(^.*\:\/\/)?/, "").replace(/[#\?](.*)$/g, ""), -1 < this._config.blockUrls.join("|").indexOf(e);
        }
    } ]);
}();