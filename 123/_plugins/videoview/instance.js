function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _constant = require("../../constant.js");

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var o = t[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(e, o.key, o);
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
        var o = _superPropBase(e, t);
        if (o) return o = Object.getOwnPropertyDescriptor(o, t), o.get ? o.get.call(arguments.length < 3 ? e : i) : o.value;
    }).apply(this, arguments);
}

function _superPropBase(e, t) {
    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); ) ;
    return e;
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
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function _createSuper(i) {
    var o = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(i);
        return _possibleConstructorReturn(this, o ? (e = _getPrototypeOf(this).constructor, 
        Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
}

function _possibleConstructorReturn(e, t) {
    if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e);
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
        !0;
    } catch (e) {
        return !1;
    }
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

var _default = function() {
    _inherits(o, LB.SDK.IPluginInstanceBase);
    var i = _createSuper(o);
    function o(e, t) {
        return _classCallCheck(this, o), (e = i.call(this, e)).options = t, e.initElement(), 
        e._videoVisible = !0, e;
    }
    return _createClass(o, [ {
        key: "getVideoRect",
        value: function() {
            var e = this.getRuntime(), t = (this._scale = this._runtime.renderer.stage.scale, 
            this.options.width / 2 * this._scale.x), i = this.options.height / 2 * this._scale.y, o = e.renderer.gameWidth / 2 / e.devicePixel, n = e.renderer.gameHeight / 2 / e.devicePixel;
            return {
                x: o / 2 - t / 2 + this.renderTarget.x * this._scale.x / e.devicePixel / 2,
                y: n / 2 - i / 2 + this.renderTarget.y * this._scale.y / e.devicePixel / 2,
                width: t,
                height: i
            };
        }
    }, {
        key: "initElement",
        value: function() {
            var e, t = this._runtime.eventEmitter;
            this._runtime.isMiniGame ? (e = this.getVideoRect(), this._video = wx.createVideo({
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height,
                src: this.options.url,
                autoplay: !!this.options.autoplay,
                loop: !!this.options.loop,
                controls: this.options.controls,
                poster: this.options.poster,
                showProgress: !0,
                enableProgressGesture: !0,
                enablePlayGesture: !0
            }), this._video.onEnded(function() {
                t.emit(_constant.OPCODE.eventVideoEnded);
            }), this.bindEvent()) : (window.showTips("只能在手机上体验视频组件"), this.renderBg());
        }
    }, {
        key: "_hideVideo",
        value: function() {
            this._video && (this._video.hide = !0);
        }
    }, {
        key: "_showVideo",
        value: function() {
            this._video && this._videoVisible && (this._video.hide = !1);
        }
    }, {
        key: "bindEvent",
        value: function() {
            var e = this._runtime.eventEmitter;
            e.on("game_pause", this._hideVideo, this), e.on("game_start", this._showVideo, this);
        }
    }, {
        key: "release",
        value: function() {
            var e;
            this._runtime.isMiniGame && ((e = this._runtime.eventEmitter).off("game_pause", this._hideVideo), 
            e.off("game_start", this._showVideo)), this._video && this._video.destroy(), _get(_getPrototypeOf(o.prototype), "release", this).call(this);
        }
    }, {
        key: "renderBg",
        value: function() {
            this.background && this.renderTarget.removeChild(this.background);
            var e = new PIXI.Graphics().beginFill(0).drawRect(0, 0, 1, 1).endFill();
            (this.background = e) && (e.width = this.options.width, e.height = this.options.height, 
            e.position.set(-this.options.width / 2, -this.options.height / 2), this.renderTarget.addChildAt(e, 0));
        }
    }, {
        key: "setVideoValue",
        value: function(e, t) {
            switch (e) {
              case "width":
                this.options.width = +t, this._runtime.isMiniGame ? (i = this.getVideoRect(), this._video[e] = i.width, 
                this._video.x = i.x) : this.renderBg();
                break;

              case "height":
                var i;
                this.options.height = +t, this._runtime.isMiniGame ? (i = this.getVideoRect(), this._video[e] = i.height, 
                this._video.y = i.y) : this.renderBg();
                break;

              case "x":
                this.renderTarget.x = -t * this._runtime.devicePixel, this._runtime.isMiniGame && (this._video[e] = this.getVideoRect().x);
                break;

              case "y":
                this.renderTarget.y = -t * this._runtime.devicePixel, this._runtime.isMiniGame && (this._video[e] = this.getVideoRect().y);
                break;

              case "autoplay":
              case "loop":
                this._runtime.isMiniGame && (this._video[e] = "0" !== t);
                break;

              case "src":
                this._runtime.isMiniGame && (this._video[e] = t);
            }
        }
    }, {
        key: "fullScreen",
        value: function(e) {
            this._runtime.isMiniGame ? this._video && this._video.requestFullScreen(e || 0) : window.showTips("只能在手机上调用视频组件接口");
        }
    }, {
        key: "destroy",
        value: function() {
            this._runtime.isMiniGame ? (this._video && this._video.destroy(), this._video = null) : window.showTips("只能在手机上调用视频组件接口");
        }
    }, {
        key: "stop",
        value: function() {
            this._runtime.isMiniGame ? this._video && this._video.stop() : window.showTips("只能在手机上调用视频组件接口");
        }
    }, {
        key: "play",
        value: function() {
            this._runtime.isMiniGame ? this._video && this._video.play() : window.showTips("只能在手机上调用视频组件接口");
        }
    }, {
        key: "pause",
        value: function() {
            this._runtime.isMiniGame ? this._video && this._video.pause() : window.showTips("只能在手机上调用视频组件接口");
        }
    }, {
        key: "seek",
        value: function(e) {
            this._runtime.isMiniGame ? this._video && this._video.seek(Number(e) || 0) : window.showTips("只能在手机上调用视频组件接口");
        }
    } ]), o;
}();

exports.default = _default;