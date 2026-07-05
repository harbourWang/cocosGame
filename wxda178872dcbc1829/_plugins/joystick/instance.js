function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _util = require("./common/util.js");

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var r = e[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(r.key), r);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : t + "";
}

function _toPrimitive(t, e) {
    if ("object" != _typeof(t) || !t) return t;
    var i = t[Symbol.toPrimitive];
    if (void 0 === i) return ("string" === e ? String : Number)(t);
    i = i.call(t, e || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

function _callSuper(t, e, i) {
    return e = _getPrototypeOf(e), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(e, i || [], _getPrototypeOf(t).constructor) : e.apply(t, i));
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
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, i) {
        var r = _superPropBase(t, e);
        if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : i) : r.value;
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

var DOWN = "pointerdown", MOVE = "pointermove", UP = "pointerup", OUT = "pointerupoutside", CANCEL = "pointercancel", _default = exports.default = function() {
    function i(t, e) {
        return _classCallCheck(this, i), (t = _callSuper(this, i, [ t ])).runtime = t.getRuntime(), 
        t.runtime.isMiniGame && (DOWN = "touchstart", MOVE = "touchmove", UP = "touchend", 
        OUT = "touchendoutside", CANCEL = "touchcancel"), t.RenderEngine = t.runtime.RenderEngine, 
        t._follow = !1, t.init(e), t;
    }
    return _inherits(i, LB.SDK.IPluginInstanceBase), _createClass(i, [ {
        key: "init",
        value: function(t) {
            this.options = t, this.touchId = -1, this.followTouchId = -1, this.hasDisable = !1, 
            this.center = {
                x: 0,
                y: 0
            }, this.render(t), void 0 === t.enable && (t.enable = !0), this.setEnable(t.enable);
            t = this._runtime.eventEmitter;
            t.on(t.VMEventType.pointerdown, this.showRender, this), t.on(t.VMEventType.pointerup, this.hideRender, this), 
            t.on(t.VMEventType.pointerupoutside, this.hideRender, this), this.wrap.on(DOWN, this.onTouchDown.bind(this)), 
            this.moveCbk = this.onTouchMove.bind(this), this.upCbk = this.onTouchUp.bind(this);
        }
    }, {
        key: "showRender",
        value: function(t) {
            if (this._follow && this.renderTarget) {
                if (this.hasDisable || -1 !== this.touchId || -1 !== this.followTouchId) return;
                var e, i = t.data.getLocalPosition(this.renderTarget.parent);
                this.followTouchId = t.touchId || t.data.identifier, i.x > this.followAreaX && i.x < this.followAreaX + this.followAreaWidth && i.y > this.followAreaY && i.y < this.followAreaY + this.followAreaHeight && (this.renderTarget.visible = !0, 
                e = (i = this._runtime.inputManager).mouseX, i = i.mouseY, this.renderTarget.position.x = e, 
                this.renderTarget.position.y = -i, this.onTouchDown(t, !0));
            }
            t.stopPropagation();
        }
    }, {
        key: "hideRender",
        value: function(t) {
            this._follow && this.renderTarget && this.renderTarget.visible && this.followTouchId === (t.touchId || t.data.identifier) && (this._followAndFixed ? (this.renderTarget.position.x = this._fixedX, 
            this.renderTarget.position.y = this._fixedY) : this.renderTarget.visible = !1, this.followTouchId = -1, 
            this.onTouchUp()), t.stopPropagation();
        }
    }, {
        key: "setEnable",
        value: function(t) {
            t ? this.hasDisable = !1 : (this.hasDisable = !0, this.onTouchUp());
        }
    }, {
        key: "getPointInCircle",
        value: function(t, e, i, r) {
            var o = i, n = r, i = i - t.x, r = r - t.y, s = Math.atan2(r, i), a = Math.cos(s) * e, s = Math.sin(s) * e, h = (360 + parseInt((0, 
            _util.convertRadian2Degree)(Math.atan2(-r, i)))) % 360;
            return {
                resultX: o = Math.abs(i) > Math.abs(a) ? t.x + a : o,
                resultY: n = Math.abs(r) > Math.abs(s) ? t.y + s : n,
                percentageX: (o - t.x) / e || 0,
                percentageY: (n - t.y) / e || 0,
                degree: h,
                radian: (0, _util.convertDegree2Radian)(h)
            };
        }
    }, {
        key: "render",
        value: function(t) {
            var e, i = t.warpImage, r = t.buttonImage, o = t.warpSize, n = t.buttonSize, s = t.follow, t = t.followAndFixed;
            this._follow = s, this.wrap = this.RenderEngine.Sprite.from(i), this.wrap.interactive = !0, 
            this.wrap.width = o * this.runtime.devicePixel, this.wrap.height = o * this.runtime.devicePixel, 
            this.wrap.anchor.set(.5), this.renderTarget.addChild(this.wrap), this.button = this.RenderEngine.Sprite.from(r), 
            this.button.anchor.set(.5), this.button.buttonStartX = 0, this.button.buttonStartY = 0, 
            this.button.width = n * this.runtime.devicePixel, this.button.height = n * this.runtime.devicePixel, 
            this.renderTarget.addChild(this.button), this._follow && (this._followAndFixed = t, 
            this._followAndFixed ? (this._fixedX = this.renderTarget.position.x, this._fixedY = this.renderTarget.position.y) : this.renderTarget.visible = !1, 
            s = this.renderTarget.parent.parent.scale.x, o = (i = this.options).followAreaX, 
            r = i.followAreaY, n = i.followAreaWidth, t = i.followAreaHeight, o = o / 100 * (i = this.runtime.renderer.gameWidth) - i / 2, 
            r = r / 100 * (e = this.runtime.renderer.gameHeight) - e / 2, n = n / 100 * i, t = t / 100 * e, 
            r *= s, n *= s, t *= s, this.followAreaX = o *= s, this.followAreaY = r, this.followAreaWidth = n, 
            this.followAreaHeight = t, i = this._runtime.runtimeData.currentScene.renderer, 
            LB.Camera.setOutOrInCameraZone(i, this.renderTarget, !1));
        }
    }, {
        key: "bindEventHandler",
        value: function() {
            this.offEventHandler(), this.wrap.on(MOVE, this.moveCbk), this.wrap.on(OUT, this.upCbk), 
            this.wrap.on(UP, this.upCbk), this.wrap.on(CANCEL, this.upCbk);
        }
    }, {
        key: "offEventHandler",
        value: function() {
            this.wrap.off(MOVE, this.moveCbk), this.wrap.off(UP, this.upCbk), this.wrap.off(OUT, this.upCbk), 
            this.wrap.off(CANCEL, this.upCbk);
        }
    }, {
        key: "onTouchDown",
        value: function(t, e) {
            var i, r;
            this.hasDisable || -1 !== this.touchId || (this.touchId = t.touchId || t.data.identifier, 
            this.wrap.radius = this.wrap.width / 2, this.button.radius = this.button.width / 2, 
            e = e ? i = 0 : (i = (e = t.data.getLocalPosition(this.renderTarget)).x, e.y), this._startX = i, 
            this._startY = e, r = this.getPointInCircle(this.center, this.wrap.radius - this.button.radius, i, e), 
            this.button.x = r.resultX, this.button.y = r.resultY, this.bindEventHandler(), Math.abs(i) < 20 && Math.abs(e) < 20 && (r.resultX = 0, 
            r.resultY = 0), this.limit = r, this._runtime.eventEmitter.emit(this._runtime.eventEmitter.SystemEventType.joyStickStart, r), 
            t.stopPropagation());
        }
    }, {
        key: "onTouchUp",
        value: function() {
            this.touchId = -1, this.currIdentifier = void 0, this.limit = !1, this.button.x = this.button.buttonStartX, 
            this.button.y = this.button.buttonStartY, this.offEventHandler(), this._runtime.eventEmitter.emit(this._runtime.eventEmitter.SystemEventType.joyStickStop, this.limit);
        }
    }, {
        key: "onTouchMove",
        value: function(t) {
            var e, i, r;
            this.hasDisable || this.touchId !== (t.touchId || t.data.identifier) || void 0 !== this.currIdentifier && t.data.identifier !== this.currIdentifier || (this.currIdentifier = t.data.identifier, 
            e = (i = t.data.getLocalPosition(this.renderTarget)).x, i = i.y, r = this.getPointInCircle(this.center, this.wrap.radius - this.button.radius, e, i), 
            this.button.x = r.resultX, this.button.y = r.resultY, Math.abs(e) < 20 && Math.abs(i) < 20 && Math.abs(e - this._startX) < 5 && Math.abs(i - this._startY) < 5 && (r.resultX = 0, 
            r.resultY = 0), this.limit = r, this._runtime.eventEmitter.emit(this._runtime.eventEmitter.SystemEventType.joyStickMove, r), 
            t.stopPropagation());
        }
    }, {
        key: "release",
        value: function() {
            this.offEventHandler(), this.wrap.destroy(), this.button.destroy();
            var t = this._runtime.eventEmitter;
            t.off(t.VMEventType.pointerdown, this.showRender, this), t.off(t.VMEventType.pointerup, this.hideRender, this), 
            t.off(t.VMEventType.pointerupoutside, this.hideRender, this), _get(_getPrototypeOf(i.prototype), "release", this).call(this);
        }
    } ]);
}();