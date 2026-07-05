function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var o = 0; o < e.length; o++) {
        var n = e[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(n.key), n);
    }
}

function _createClass(t, e, o) {
    return e && _defineProperties(t.prototype, e), o && _defineProperties(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : t + "";
}

function _toPrimitive(t, e) {
    if ("object" != _typeof(t) || !t) return t;
    var o = t[Symbol.toPrimitive];
    if (void 0 === o) return ("string" === e ? String : Number)(t);
    o = o.call(t, e || "default");
    if ("object" != _typeof(o)) return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

function _callSuper(t, e, o) {
    return e = _getPrototypeOf(e), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(e, o || [], _getPrototypeOf(t).constructor) : e.apply(t, o));
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

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, o) {
        var n = _superPropBase(t, e);
        if (n) return (n = Object.getOwnPropertyDescriptor(n, e)).get ? n.get.call(arguments.length < 3 ? t : o) : n.value;
    }).apply(null, arguments);
}

function _superPropBase(t, e) {
    for (;!{}.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); ) ;
    return t;
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = function() {
    function e(t) {
        return _classCallCheck(this, e), _callSuper(this, e, [ t ]);
    }
    return _inherits(e, LB.SDK.IPluginInstanceBase), _createClass(e, [ {
        key: "release",
        value: function() {
            _get(_getPrototypeOf(e.prototype), "release", this).call(this), this._photoCanvas = null, 
            this._context = null;
        }
    }, {
        key: "currentThread",
        get: function() {
            return this._runtime._blockEngine.currentThread;
        }
    }, {
        key: "createCanvas",
        value: function(t, e) {
            var o;
            this._runtime.isMiniGame ? this._context ? (this._photoCanvas.width = t, this._photoCanvas.height = e, 
            this._context.clearRect(0, 0, t, e)) : ((o = wx.createCanvas()).width = t, o.height = e, 
            (t = o.getContext("2d")).fillStyle = "#000000", t.fillRect(0, 0, o.width, o.height), 
            this._photoCanvas = o, this._context = t) : window.showTips("仅手机微信可调用【创建canvas画布接口】");
        }
    }, {
        key: "savePhoto",
        value: function() {
            var e, t, o;
            this._runtime.isMiniGame ? this._photoCanvas ? (e = this.currentThread.peekStackFrame()).timer ? e._requestDone ? (t = e._requestResult, 
            o = JSON.stringify(t).includes(":ok"), this._runtime._blockEngine.setIfElseBranch(this.currentThread, o, {
                response: t
            }), e.timer = null, e._requestDone = null) : this.currentThread.setYieldStatus() : (e.timer = Date.now(), 
            this._savePhoto(function(t) {
                e._requestResult = t, e._requestDone = !0;
            }), this.currentThread.setYieldStatus()) : wx.showToast({
                title: "当前无可保存的画布",
                icon: "none"
            }) : window.showTips("仅手机微信可调用【保存图片接口】");
        }
    }, {
        key: "_savePhoto",
        value: function(o) {
            var n = this._photoCanvas.toTempFilePathSync();
            wx.getSetting({
                success: function(t) {
                    t.authSetting["scope.writePhotosAlbum"] ? wx.saveImageToPhotosAlbum({
                        filePath: n,
                        success: function(t) {
                            o(t);
                        },
                        fail: function(t) {
                            o(t);
                        }
                    }) : wx.authorize({
                        scope: "scope.writePhotosAlbum",
                        success: function() {
                            wx.saveImageToPhotosAlbum({
                                filePath: n,
                                success: function(t) {
                                    o(t);
                                },
                                fail: function(t) {
                                    o(t);
                                }
                            });
                        },
                        fail: function(e) {
                            wx.showModal({
                                title: "授权失败",
                                content: "需要授权成功才能保存图片",
                                success: function(t) {
                                    t.confirm ? wx.openSetting({
                                        success: function(t) {
                                            t.authSetting["sscope.writePhotosAlbum"] || wx.saveImageToPhotosAlbum({
                                                filePath: n,
                                                success: function(t) {
                                                    o(t);
                                                },
                                                fail: function(t) {
                                                    o(t);
                                                }
                                            });
                                        }
                                    }) : o(e);
                                }
                            });
                        }
                    });
                },
                fail: function(e) {
                    wx.showModal({
                        title: "授权失败",
                        content: "需要授权成功才能保存图片",
                        success: function(t) {
                            t.confirm ? wx.openSetting({
                                success: function(t) {
                                    t.authSetting["sscope.writePhotosAlbum"] || wx.saveImageToPhotosAlbum({
                                        filePath: n,
                                        success: function(t) {
                                            o(t);
                                        },
                                        fail: function(t) {
                                            o(t);
                                        }
                                    });
                                }
                            }) : o(e);
                        }
                    });
                }
            });
        }
    }, {
        key: "drawImage",
        value: function(t, e, o, n, r) {
            var i, s;
            t && (this._runtime.isMiniGame ? this._photoCanvas ? (i = this.currentThread.peekStackFrame()).timer ? i._requestDone ? ((s = i._requestResult) && this._context.drawImage(s, e, o, n, r), 
            this._runtime._blockEngine.setIfElseBranch(this.currentThread, !!s, {
                response: s
            }), i.timer = null, i._requestDone = null) : this.currentThread.setYieldStatus() : (i.timer = Date.now(), 
            this._loadImage(t, function(t) {
                i._requestResult = t, i._requestDone = !0;
            }), this.currentThread.setYieldStatus()) : wx.showToast({
                title: "当前无可绘制的画布",
                icon: "none"
            }) : window.showTips("仅手机微信可调用【绘制图片接口】"));
        }
    }, {
        key: "_loadImage",
        value: function(t, e) {
            var o = new Image();
            o.src = t, o.crossOrigin = "anonymous", o.onload = function() {
                e(o);
            }, o.onerror = function() {
                e(null);
            };
        }
    }, {
        key: "drawText",
        value: function(t, e, o, n, r, i) {
            var s;
            this._runtime.isMiniGame ? this._photoCanvas ? ((s = this._context).restore(), s.textAlign = i || "left", 
            s.fillStyle = r, s.font = n * this._runtime.devicePixel + "px Arial", s.fillText(t, +e, +o), 
            s.save()) : wx.showToast({
                title: "当前无可绘制的画布",
                icon: "none"
            }) : window.showTips("仅手机微信可调用【绘制文本接口】");
        }
    } ]);
}();