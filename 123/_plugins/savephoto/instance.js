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
    for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(t, o.key, o);
    }
}

function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
        var o = _superPropBase(t, e);
        if (o) return o = Object.getOwnPropertyDescriptor(o, e), o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
    }).apply(this, arguments);
}

function _superPropBase(t, e) {
    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); ) ;
    return t;
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
    return (_setPrototypeOf = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

function _createSuper(n) {
    var o = _isNativeReflectConstruct();
    return function() {
        var t, e = _getPrototypeOf(n);
        return _possibleConstructorReturn(this, o ? (t = _getPrototypeOf(this).constructor, 
        Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
    };
}

function _possibleConstructorReturn(t, e) {
    if (e && ("object" === _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}

function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
        !0;
    } catch (t) {
        return !1;
    }
}

function _getPrototypeOf(t) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = function() {
    _inherits(n, LB.SDK.IPluginInstanceBase);
    var e = _createSuper(n);
    function n(t) {
        return _classCallCheck(this, n), e.call(this, t);
    }
    return _createClass(n, [ {
        key: "release",
        value: function() {
            _get(_getPrototypeOf(n.prototype), "release", this).call(this), this._photoCanvas = null, 
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
            if (this._runtime.isMiniGame) {
                if (this._context) return this._photoCanvas.width = t, this._photoCanvas.height = e, 
                void this._context.clearRect(0, 0, t, e);
                var n = wx.createCanvas(), t = (n.width = t, n.height = e, n.getContext("2d"));
                t.fillStyle = "#000000", t.fillRect(0, 0, n.width, n.height), this._photoCanvas = n, 
                this._context = t;
            } else window.showTips("仅手机微信可调用【创建canvas画布接口】");
        }
    }, {
        key: "savePhoto",
        value: function() {
            var e, t, n;
            this._runtime.isMiniGame ? this._photoCanvas ? (e = this.currentThread.peekStackFrame()).timer ? e._requestDone ? (t = e._requestResult, 
            n = JSON.stringify(t).includes(":ok"), this._runtime._blockEngine.setIfElseBranch(this.currentThread, n, {
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
        value: function(n) {
            var o = this._photoCanvas.toTempFilePathSync();
            wx.getSetting({
                success: function(t) {
                    t.authSetting["scope.writePhotosAlbum"] ? wx.saveImageToPhotosAlbum({
                        filePath: o,
                        success: function(t) {
                            n(t);
                        },
                        fail: function(t) {
                            n(t);
                        }
                    }) : wx.authorize({
                        scope: "scope.writePhotosAlbum",
                        success: function() {
                            wx.saveImageToPhotosAlbum({
                                filePath: o,
                                success: function(t) {
                                    n(t);
                                },
                                fail: function(t) {
                                    n(t);
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
                                                filePath: o,
                                                success: function(t) {
                                                    n(t);
                                                },
                                                fail: function(t) {
                                                    n(t);
                                                }
                                            });
                                        }
                                    }) : n(e);
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
                                        filePath: o,
                                        success: function(t) {
                                            n(t);
                                        },
                                        fail: function(t) {
                                            n(t);
                                        }
                                    });
                                }
                            }) : n(e);
                        }
                    });
                }
            });
        }
    }, {
        key: "drawImage",
        value: function(t, e, n, o, r) {
            var i, s;
            t && (this._runtime.isMiniGame ? this._photoCanvas ? (i = this.currentThread.peekStackFrame()).timer ? i._requestDone ? ((s = i._requestResult) && this._context.drawImage(s, e, n, o, r), 
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
            var n = new Image();
            n.src = t, n.crossOrigin = "anonymous", n.onload = function() {
                e(n);
            }, n.onerror = function() {
                e(null);
            };
        }
    }, {
        key: "drawText",
        value: function(t, e, n, o, r, i) {
            var s;
            this._runtime.isMiniGame ? this._photoCanvas ? ((s = this._context).restore(), s.textAlign = i || "left", 
            s.fillStyle = r, s.font = o * this._runtime.devicePixel + "px Arial", s.fillText(t, +e, +n), 
            s.save()) : wx.showToast({
                title: "当前无可绘制的画布",
                icon: "none"
            }) : window.showTips("仅手机微信可调用【绘制文本接口】");
        }
    } ]), n;
}();

exports.default = _default;