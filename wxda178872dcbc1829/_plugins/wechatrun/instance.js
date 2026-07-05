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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = function() {
    function t(e) {
        return _classCallCheck(this, t), (e = _callSuper(this, t, [ e ]))._runtime.isMiniGame && wx.cloud.init(), 
        e;
    }
    return _inherits(t, LB.SDK.IPluginInstanceBase), _createClass(t, [ {
        key: "release",
        value: function() {
            _get(_getPrototypeOf(t.prototype), "release", this).call(this);
        }
    }, {
        key: "currentThread",
        get: function() {
            return this._runtime._blockEngine.currentThread;
        }
    }, {
        key: "requestWechatRun",
        value: function() {
            var t, e, r;
            this._runtime.isMiniGame ? (t = this.currentThread.peekStackFrame()).timer ? t._requestDone ? (r = "cloud.callFunction:ok" === (e = t._requestWechatRunResponse).errMsg, 
            this._runtime._blockEngine.setIfElseBranch(this.currentThread, r, {
                response: e.result
            }), t.timer = null, t._requestDone = null) : this.currentThread.setYieldStatus() : (t.timer = Date.now(), 
            this._request(function(e) {
                t._requestWechatRunResponse = e, t._requestDone = !0;
            }), this.currentThread.setYieldStatus()) : window.showTips("仅手机微信可获取【微信步数】");
        }
    }, {
        key: "_request",
        value: function(t) {
            function r(t) {
                wx.getWeRunData({
                    success: function(e) {
                        wx.cloud.callFunction({
                            name: "decodeWxCloudID",
                            data: {
                                weRunData: wx.cloud.CloudID(e.cloudID)
                            }
                        }).then(t).catch(function(e) {
                            t({
                                errMsg: "cloud.callFunction:err",
                                err: e
                            });
                        });
                    }
                });
            }
            wx.getSetting({
                success: function(e) {
                    e.authSetting["scope.werun"] ? r(t) : wx.authorize({
                        scope: "scope.werun",
                        success: function() {
                            r(t);
                        },
                        fail: function() {
                            t({
                                errMsg: "authorize error"
                            });
                        }
                    });
                }
            });
        }
    } ]);
}();