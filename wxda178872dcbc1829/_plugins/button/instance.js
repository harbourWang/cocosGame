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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var State = {
    NORMAL: 0,
    HOVER: 1,
    PRESSED: 2,
    DISABLED: 3
}, Transition = {
    NONE: 0,
    COLOR: 1,
    SPRITE: 2,
    SCALE: 3
}, _default = exports.default = function() {
    function r(t, e) {
        _classCallCheck(this, r);
        var i = (t = _callSuper(this, r, [ t ])).getRuntime().RenderEngine;
        return t.options = e, t.init(e, i), t._fromScale = LB.MathUtil.Vec2.ZERO, t._toScale = LB.MathUtil.Vec2.ZERO, 
        t._originalScale = new LB.MathUtil.Vec2(1, 1), t._registerEvent(), t.startTicking(), 
        t;
    }
    return _inherits(r, LB.SDK.IPluginInstanceBase), _createClass(r, [ {
        key: "init",
        value: function(t, e) {
            this.transition = t.type, this.disabled = !t.enable, this.renderTarget.interactive = !this.disabled, 
            this.normalColor = "0x" + t.normalColor.slice(1, 7), this.pressedColor = "0x" + t.pressedColor.slice(1, 7), 
            this.disabledColor = "0x" + t.disabledColor.slice(1, 7), this.labelNormalColor = "0x" + t.labelNormalColor.slice(1, 7), 
            this.labelPressedColor = "0x" + t.labelPressedColor.slice(1, 7), this.labelDisabledColor = "0x" + t.labelDisabledColor.slice(1, 7), 
            this.wrap = new e.Sprite.from(t.normalImage), this.wrap.width = t.width * this._runtime.devicePixel, 
            this.wrap.height = t.height * this._runtime.devicePixel, this.wrap.anchor.set(.5), 
            this.renderTarget.addChild(this.wrap), this.label = new e.Text(), this.label.anchor.set(.5), 
            this.renderTarget.addChild(this.label);
            var i = {
                align: "center",
                fill: this.labelNormalColor || 0,
                breakWords: !0,
                fontFamily: "Microsoft YaHei",
                fontSize: (t.labelSize || 26) * this._runtime.devicePixel,
                fontWeight: t.labelWeight || "normal",
                wordWrap: !0,
                wordWrapWidth: t.width * this._runtime.devicePixel,
                lineHeight: (t.labelSize || 26) * this._runtime.devicePixel
            };
            this.label.style = new e.TextStyle(i), this.label.text = t.labelContent, this.label.visible = t.labelVisible, 
            this.normalSprite = this.wrap.texture, this.pressedSprite = e.Texture.from(t.pressedImage), 
            this.disabledSprite = e.Texture.from(t.disabledImage), this.zoomScale = Math.max(0, t.zoomScale), 
            1 === this.transition ? (this.wrap.tint = this.normalColor, this.disabled && (this.wrap.tint = this.disabledColor, 
            this.label.style.fill = this.labelDisabledColor)) : this.disabled && (this.label.style.fill = this.labelDisabledColor, 
            2 === this.transition) && (this.wrap.texture = this.disabledSprite);
        }
    }, {
        key: "setText",
        value: function(t) {
            this.label.text = t;
        }
    }, {
        key: "_setTargetColor",
        value: function(t) {
            this.wrap.tint = t;
        }
    }, {
        key: "_setLabelColor",
        value: function(t) {
            this.label.style.fill = t;
        }
    }, {
        key: "_getStateColor",
        value: function(t) {
            switch (t) {
              case State.NORMAL:
                return this.normalColor;

              case State.HOVER:
                return this.hoverColor;

              case State.PRESSED:
                return this.pressedColor;

              case State.DISABLED:
                return this.disabledColor;
            }
        }
    }, {
        key: "_getLabelStateColor",
        value: function(t) {
            switch (t) {
              case State.NORMAL:
                return this.labelNormalColor;

              case State.HOVER:
                return this.labelHoverColor;

              case State.PRESSED:
                return this.labelPressedColor;

              case State.DISABLED:
                return this.labelDisabledColor;
            }
        }
    }, {
        key: "_getStateSprite",
        value: function(t) {
            switch (t) {
              case State.NORMAL:
                return this.normalSprite;

              case State.HOVER:
                return this.hoverSprite;

              case State.PRESSED:
                return this.pressedSprite;

              case State.DISABLED:
                return this.disabledSprite;
            }
        }
    }, {
        key: "_setCurrentStateColor",
        value: function(t) {
            switch (this._getButtonState()) {
              case State.NORMAL:
                this.normalColor = t;
                break;

              case State.HOVER:
                this.hoverColor = t;
                break;

              case State.PRESSED:
                this.pressedColor = t;
                break;

              case State.DISABLED:
                this.disabledColor = t;
            }
        }
    }, {
        key: "_setCurrentStateSprite",
        value: function(t) {
            switch (this._getButtonState()) {
              case State.NORMAL:
                this.normalSprite = t;
                break;

              case State.HOVER:
                this.hoverSprite = t;
                break;

              case State.PRESSED:
                this.pressedSprite = t;
                break;

              case State.DISABLED:
                this.disabledSprite = t;
            }
        }
    }, {
        key: "setEnable",
        value: function(t) {
            this.disabled = !t, this.renderTarget.interactive = !this.disabled, this._updateState();
        }
    }, {
        key: "_updateState",
        value: function() {
            var t = this._getButtonState();
            this._applyTransition(t), this._updateDisabledState();
        }
    }, {
        key: "_updateSpriteTransition",
        value: function(t) {
            t = this._getStateSprite(t);
            t && (this.wrap.texture = t);
        }
    }, {
        key: "_updateScaleTransition",
        value: function(t) {
            t === State.PRESSED ? this._zoomUp() : this._zoomBack();
        }
    }, {
        key: "_applyTransition",
        value: function(t) {
            var e = this.transition;
            e === Transition.COLOR ? this._updateColorTransition(t) : e === Transition.SPRITE ? this._updateSpriteTransition(t) : e === Transition.SCALE && this._updateScaleTransition(t), 
            this._updateLabelColor(t);
        }
    }, {
        key: "_updateColorTransitionImmediately",
        value: function(t) {
            t = this._getStateColor(t);
            this._setTargetColor(t);
        }
    }, {
        key: "_updateLabelColor",
        value: function(t) {
            t = this._getLabelStateColor(t);
            this._setLabelColor(t);
        }
    }, {
        key: "_updateDisabledState",
        value: function() {
            var t;
            this._sprite && (t = !1, !this.enableAutoGrayEffect || this.transition === Transition.SPRITE && this.disabledSprite || this.interactable || (t = !0), 
            this._switchGrayMaterial(t, this._sprite));
        }
    }, {
        key: "_updateColorTransition",
        value: function(t) {
            this._updateColorTransitionImmediately(t);
        }
    }, {
        key: "_getButtonState",
        value: function() {
            var t = this.disabled ? State.DISABLED : this._pressed ? State.PRESSED : this._hovered ? State.HOVER : State.NORMAL;
            return t;
        }
    }, {
        key: "tick",
        value: function(t) {}
    }, {
        key: "_registerEvent",
        value: function() {
            this.renderTarget.on("pointerdown", this._onTouchStart, this), this.renderTarget.on("pointercancel", this._onTouchCancel, this);
            var t = this._runtime.eventEmitter;
            t.on(t.VMEventType.pointerup, this._onTouchEnded, this), t.on(t.VMEventType.pointerupoutside, this._onTouchEnded, this);
        }
    }, {
        key: "_unregisterEvent",
        value: function() {
            this.renderTarget.off("pointerdown", this._onTouchStart, this), this.renderTarget.off("pointercancel", this._onTouchCancel, this);
            var t = this._runtime.eventEmitter;
            t.off(t.VMEventType.pointerup, this._onTouchEnded, this), t.off(t.VMEventType.pointerupoutside, this._onTouchEnded, this);
        }
    }, {
        key: "_onTouchStart",
        value: function(t) {
            this._pressed = !0, this._updateState(), t.stopPropagation();
        }
    }, {
        key: "_onTouchEnded",
        value: function(t) {
            this._pressed = !1, this._updateState();
        }
    }, {
        key: "_onTouchCancel",
        value: function() {
            this._pressed = !1, this._updateState();
        }
    }, {
        key: "_zoomUp",
        value: function() {
            this._originalScale && (this._toScale.x = this._originalScale.x * this.zoomScale, 
            this._toScale.y = this._originalScale.y * this.zoomScale, this.renderTarget.scale.set(this._toScale.x, this._toScale.y));
        }
    }, {
        key: "_zoomBack",
        value: function() {
            this.renderTarget.scale.set(this._originalScale.x, this._originalScale.y);
        }
    }, {
        key: "setState",
        value: function(t) {}
    }, {
        key: "release",
        value: function() {
            this._unregisterEvent(), this.wrap.destroy(), this.label.destroy(), _get(_getPrototypeOf(r.prototype), "release", this).call(this);
        }
    } ]);
}();