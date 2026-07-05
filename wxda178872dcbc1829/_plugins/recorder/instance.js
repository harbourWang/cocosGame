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
        return _classCallCheck(this, t), (e = _callSuper(this, t, [ e ])).RenderEngine = e._runtime.RenderEngine, 
        e.writeTime = 5e3, e.recording = !1, e._runtime.isMiniGame && wx.getGameRecorder && (e.recorder = wx.getGameRecorder(), 
        e.isFrameSupported = e.recorder.isFrameSupported(), e.bindevent()), e;
    }
    return _inherits(t, LB.SDK.IPluginInstanceBase), _createClass(t, [ {
        key: "bindevent",
        value: function() {
            var e = this, t = this._runtime.eventEmitter;
            t.on("game_pause", function() {
                e._runtime.status || e.shareButton && e.shareButtonVisible && (e._openShareButton = !0, 
                e.hideShareButton());
            }, this), t.on("game_start", function() {
                e._runtime.status && e.shareButton && e._openShareButton && e.showShareButton();
            }, this);
        }
    }, {
        key: "reset",
        value: function() {
            this.bindevent();
        }
    }, {
        key: "release",
        value: function() {
            this.hideShareButton(), this.shareButton = null, _get(_getPrototypeOf(t.prototype), "release", this).call(this);
        }
    }, {
        key: "start",
        value: function() {
            var t = this;
            this.isFrameSupported && this.recorder.start().then(function(e) {
                e.error.code || (t.recording = !0, t.recorder.on("timeUpdate", function(e) {
                    t.writeTime = e.currentTime;
                }));
            });
        }
    }, {
        key: "stop",
        value: function() {
            var t = this;
            this.isFrameSupported && this.recorder.stop().then(function(e) {
                e.error.code || (t.recording = !1, t.recorder.off("timeUpdate"));
            });
        }
    }, {
        key: "pause",
        value: function() {
            var t = this;
            this.isFrameSupported && this.recorder.pause().then(function(e) {
                e.error.code || (t.recording = !1);
            });
        }
    }, {
        key: "resume",
        value: function() {
            var t = this;
            this.isFrameSupported && this.recorder.resume().then(function(e) {
                e.error.code || (t.recording = !0);
            });
        }
    }, {
        key: "createGameRecorderShareButton",
        value: function(e, t, r) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 66, i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 40, o = this._runtime.renderer.realWidth / this._runtime.devicePixel, s = this._runtime.renderer.realHeight / this._runtime.devicePixel, a = this._runtime.renderer.stage.scale.x, u = 18.75, h = (n - 37.5) / e.length, c = n * a || (37.5 + h * e.length) * a, l = i * a;
            this._runtime.isMiniGame ? this.writeTime < 2e3 ? console.error("录制时间过短无法创建分享按钮") : wx.createGameRecorderShareButton && (this.shareButton ? this.shareButton.share.timeRange = [ [ 0, this.writeTime ] ] : this.shareButton = wx.createGameRecorderShareButton({
                style: {
                    left: o / 4 - c / 2 + t / 2 * a,
                    top: s / 4 - l / 2 - r / 2 * a,
                    height: l,
                    fontSize: h * a,
                    color: "#ffffff",
                    backgroundColor: "transparent",
                    iconMarginRight: -24,
                    paddingLeft: u * a,
                    paddingRight: u * a
                },
                icon: "https://gamemaker.qpic.cn/luban/1_34343034363037382d653065302d343438622d613730352d346334366666646135613335",
                text: e,
                image: "https://gamemaker.qpic.cn/luban/1_34343034363037382d653065302d343438622d613730352d346334366666646135613335",
                share: {
                    query: "scene=" + wx.getStorageSync("lastGameId"),
                    bgm: "",
                    timeRange: [ [ 0, this.writeTime ] ]
                }
            }), this.shareButton.show(), this.shareButtonVisible = !0) : this.shareButton ? (this.shareButton.visible = !0, 
            window.showTips && window.showTips("分享按钮只能创建一次")) : (this.shareButton = new this.RenderEngine.Container(), 
            o = new this.RenderEngine.Text(), c = {
                align: "center",
                fill: "#ffffff",
                breakWords: !1,
                fontFamily: "Microsoft YaHei",
                fontSize: 2 * h * this._runtime.devicePixel,
                wordWrap: !1,
                lineHeight: 0
            }, o.style = new this.RenderEngine.TextStyle(c), o.anchor.set(.5), o.text = e, this.shareLabel = o, 
            this.shareBackground = new this.RenderEngine.Graphics(), this.shareBackground.setWidth = 2 * n, 
            this.shareBackground.setHeight = 2 * i, this.shareButton.addChild(this.shareBackground, this.shareLabel), 
            this._runtime.renderer.stage.addChild(this.shareButton), this.shareButton.x = t, 
            this.shareButton.y = -r, this.shareButton.interactive = !0, this.shareButton.hitArea = new this.RenderEngine.Rectangle(-n, -i, 2 * n, 2 * i), 
            this.shareButton.on("pointerdown", function() {
                window.showTips("请在移动端体验游戏对局回放功能");
            }));
        }
    }, {
        key: "setShareButtonColor",
        value: function(e, t) {
            var r;
            this.shareButton && (this._runtime.isMiniGame ? this.shareButton.style[e] = t : "backgroundColor" === e ? (e = this.shareBackground.setWidth, 
            r = this.shareBackground.setHeight, this.shareBackground.clear().beginFill("0x" + t.slice(-6)).drawRoundedRect(-e / 2, -r / 2, e, r, 3).endFill()) : this.shareLabel.style.fill = t);
        }
    }, {
        key: "hideShareButton",
        value: function() {
            this.shareButton && (this._runtime.isMiniGame ? (this.shareButton.hide(), this.shareButtonVisible = !1) : this.shareButton.visible = !1);
        }
    }, {
        key: "showShareButton",
        value: function() {
            this.shareButton && (this._runtime.isMiniGame ? (this.shareButton.show(), this.shareButtonVisible = !0, 
            this.shareButton.share.timeRange = [ [ 0, this.writeTime ] ]) : this.shareButton.visible = !0);
        }
    } ]);
}();