function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _classCallCheck(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, i) {
    for (var e = 0; e < i.length; e++) {
        var n = i[e];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(n.key), n);
    }
}

function _createClass(t, i, e) {
    return i && _defineProperties(t.prototype, i), e && _defineProperties(t, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : t + "";
}

function _toPrimitive(t, i) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 === e) return ("string" === i ? String : Number)(t);
    e = e.call(t, i || "default");
    if ("object" != _typeof(e)) return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

function _callSuper(t, i, e) {
    return i = _getPrototypeOf(i), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(i, e || [], _getPrototypeOf(t).constructor) : i.apply(t, e));
}

function _possibleConstructorReturn(t, i) {
    if (i && ("object" == _typeof(i) || "function" == typeof i)) return i;
    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
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
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, i, e) {
        var n = _superPropBase(t, i);
        if (n) return (n = Object.getOwnPropertyDescriptor(n, i)).get ? n.get.call(arguments.length < 3 ? t : e) : n.value;
    }).apply(null, arguments);
}

function _superPropBase(t, i) {
    for (;!{}.hasOwnProperty.call(t, i) && null !== (t = _getPrototypeOf(t)); ) ;
    return t;
}

function _getPrototypeOf(t) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

function _inherits(t, i) {
    if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(i && i.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), i && _setPrototypeOf(t, i);
}

function _setPrototypeOf(t, i) {
    return (_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, i) {
        return t.__proto__ = i, t;
    })(t, i);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = function() {
    function o(t, i) {
        _classCallCheck(this, o), (t = _callSuper(this, o, [ t ])).time = 0, t.begin = 0, 
        t.change = 100, t.duration = -1;
        var e = t.getRuntime(), n = e.RenderEngine;
        return t._scale = t._runtime.renderer.stage.scale, t.radius = 5 * e.devicePixel, 
        t.width = 500 * e.devicePixel, t.height = 1e3 * e.devicePixel, t.scrollX = !1, t.scrollY = !0, 
        t._scrolling = !1, t.speed = 0, t.marginVertical = 10 * e.devicePixel, t.marginHorizontal = 10 * e.devicePixel, 
        t.options = i, t.options.id = t.options.child, t.width = t.options.width * e.devicePixel || t.width, 
        t.height = t.options.height * e.devicePixel || t.height, t.marginVertical = t.options.marginVertical * e.devicePixel || t.marginVertical, 
        t.marginHorizontal = t.options.marginHorizontal * e.devicePixel || t.marginHorizontal, 
        t.scrollY = 0 === t.options.type, t.scrollX = !t.scrollY, t.radius = t.options.radius * e.devicePixel || t.radius, 
        t.scrollX && (t.options.column = Math.ceil(t.options.total / t.options.row)), t._velocity = t.scrollY ? "y" : "x", 
        t.RenderEngine = n, t.init(i, n), t.renderTarget.interactive = !0, t.startTicking(), 
        t;
    }
    return _inherits(o, LB.SDK.IPluginInstanceBase), _createClass(o, [ {
        key: "setValue",
        value: function(t, i) {
            this[t] = this._runtime.devicePixel * i, this.resetItem();
        }
    }, {
        key: "setNumber",
        value: function(t, i) {
            this.options[t] = +i, "total" === t ? this.resetItem() : "alpha" === t ? (this.background && (this.background.alpha = i), 
            this.options.alpha = i) : "row" === t ? this.scrollX && (this.options.row = i, this.options.column = Math.ceil(this.options.total / this.options.row), 
            this.resetItem()) : "column" === t && this.scrollY && (this.options.column = i, 
            this.resetItem());
        }
    }, {
        key: "init",
        value: function(t, i) {
            this.contentContainer = new i.Sprite(), this.contentContainer.anchor.set(.5), this.mask = new i.Graphics(), 
            this.mask.clear(), this.mask.lineStyle(0), this.mask.beginFill(16777215, 1), 0 === this.radius ? this.mask.drawRect(-this.width / 2, -this.height / 2, this.width, this.height) : this.mask.drawRoundedRect(-this.width / 2, -this.height / 2, this.width, this.height, this.radius), 
            this.mask.endFill(), this.wrapperContainer = new i.Sprite(), this.wrapperContainer.anchor.set(.5), 
            this.renderTarget.addChild(this.wrapperContainer), this.renderTarget.addChild(this.contentContainer), 
            this.renderTarget.addChild(this.mask), this.renderTarget.mask = this.mask, this._runtime.eventEmitter.on("onLoad", this.onLoad, this);
        }
    }, {
        key: "onLoad",
        value: function() {
            this.initChild(), this.updateBounds(), this.setBackground(), this.bindEvent();
        }
    }, {
        key: "resetItem",
        value: function() {
            this.contentContainer.alpha = .01, this.initChild();
        }
    }, {
        key: "initChild",
        value: function() {
            if (-1 !== this.options.id && this.options.id && this.options.total) {
                this.contentContainer.removeChildren();
                var t, i = this._runtime.runtimeData, e = i.getSpriteById(this.options.id);
                if (e) {
                    i.deleteAllClones(e.id);
                    for (var n = 0; n < this.options.total; n++) {
                        var o = i.makeClone(e, null), s = (o._listIndex = n + 1, o = o.renderer, t || ((t = o.getAABB ? o.getAABB() : {
                            width: o.width,
                            height: o.height
                        }).width = t.width, t.height = t.height, this._childItem = t), o.visible = !0, this.contentContainer.addChild(o), 
                        this.getPositionByIndex(n + 1, t.width, t.height));
                        o.position.set(s.x, s.y);
                    }
                    this.scrollX;
                }
            }
        }
    }, {
        key: "getPositionByIndex",
        value: function(t, i, e) {
            var n, o = Math.ceil(t / this.options.column), t = t % this.options.column || this.options.column, s = Math.ceil(this.options.total / this.options.column), r = (this.options.column - 1) * (this.marginHorizontal + i), s = (s - 1) * (this.marginVertical + e);
            return r = this.scrollY ? (n = -r / 2 + (t - 1) * (i + this.marginHorizontal), (e + this.marginVertical) * (o - 1) - this.height / 2 + e / 2) : (n = (i + this.marginHorizontal) * (t - 1) - this.width / 2 + i / 2, 
            -s / 2 + (o - 1) * (e + this.marginVertical)), {
                x: n,
                y: r
            };
        }
    }, {
        key: "scrollTo",
        value: function(t) {
            var i, e;
            this._childItem && (i = this.scrollY ? this.height - this.bounds.height : this.width - this.bounds.width, 
            i = Math.round(Math.min(0, i)), this.scrollY ? (0 < (e = -(this._childItem.height + this.marginVertical) * (t - 1)) ? e = 0 : e < i && (e = i), 
            this.contentContainer.y = e) : (0 < (e = -(this._childItem.width + this.marginHorizontal) * (t - 1)) ? e = 0 : e < i && (e = i), 
            this.contentContainer.x = e));
        }
    }, {
        key: "updateBounds",
        value: function() {
            this.bounds = this.contentContainer.getLocalBounds();
        }
    }, {
        key: "bindEvent",
        value: function() {
            var i, e, n;
            function o(t) {
                this._currEventIdentifier = null, i && (t = t.data.getLocalPosition(this.renderTarget.parent), 
                this.speed = (t[this._velocity] - i[this._velocity]) / (Date.now() - n) * 16, i = null);
            }
            this.contentContainer.on("added", function() {
                this.updateBounds();
            }, this), this.renderTarget.on("pointerdown", function(t) {
                this._currEventIdentifier = t.data.identifier, this.updateBounds(), this.speed = 0, 
                n = Date.now(), i = t.data.getLocalPosition(this.renderTarget.parent), e = this.contentContainer.position[this._velocity];
            }, this), this.renderTarget.on("pointermove", function(t) {
                this._currEventIdentifier === t.data.identifier && i && (this._scrolling = !0, t = t.data.getLocalPosition(this.renderTarget.parent)[this._velocity] - i[this._velocity], 
                0 != Math.round(t)) && (this.contentContainer[this._velocity] = e + t);
            }, this), this.renderTarget.on("pointerup", function(t) {
                o.call(this, t);
            }, this), this.renderTarget.on("pointerout", function(t) {
                o.call(this, t);
            }, this), this.renderTarget.on("pointerupoutside", function(t) {
                o.call(this, t);
            }, this);
        }
    }, {
        key: "setBackground",
        value: function() {
            var t = this.options.background;
            return this.background && this.wrapperContainer.removeChild(this.background), "number" == typeof (t = "string" == typeof t ? this.RenderEngine.utils.string2hex(this.options.background) : t) && (t = new this.RenderEngine.Graphics().beginFill(t).drawRect(0, 0, 1, 1).endFill()), 
            this.background = t, this.background.alpha = this.options.alpha, t && (t.width = this.width, 
            t.height = this.height, t.position.set(-this.width / 2, -this.height / 2), this.wrapperContainer.addChildAt(t, 0)), 
            this;
        }
    }, {
        key: "easeOut",
        value: function(t, i, e, n, o) {
            return e * ((t = t / n - 1) * t * (((o = void 0 === o ? 1.70158 : o) + 1) * t + o) + 1) + i;
        }
    }, {
        key: "tick",
        value: function(t) {
            this.contentContainer.alpha < 1 && (this.contentContainer.alpha += .001, .02 < this.contentContainer.alpha) && (this.contentContainer.alpha = 1), 
            this.time <= this.duration && (i = this.easeOut(this.time, this.begin, this.change, this.duration), 
            this.time++, this.contentContainer[this._velocity] = i);
            var i = Math.min(Math.abs(this.speed) / 32, 1);
            1 < this.speed ? this.speed -= i : this.speed < -1 ? this.speed += i : this.speed = 0, 
            0 !== this.speed && this._scrolling && (i = this.scrollY ? this.height - this.bounds.height : this.width - this.bounds.width, 
            i = Math.round(Math.min(0, i)), this.contentContainer[this._velocity] < i ? (this._scrolling = !1, 
            this.time = 0, this.begin = this.contentContainer[this._velocity], this.change = i - this.contentContainer[this._velocity], 
            this.duration = 20) : 0 < this.contentContainer[this._velocity] ? (this._scrolling = !1, 
            this.time = 0, this.begin = this.contentContainer[this._velocity], this.change = -this.contentContainer[this._velocity], 
            this.duration = 20) : (this._scrolling = !0, this.contentContainer[this._velocity] += Math.round(this.speed))), 
            this.lastWidth === this.width && this.lastHeight === this.height && this.lastRadius === this.radius || (this.expandMask, 
            this.mask.clear(), this.mask.lineStyle(0), this.mask.beginFill(16777215, 1), 0 === this.radius ? this.mask.drawRect(-this.width / 2, -this.height / 2, this.width, this.height) : this.mask.drawRoundedRect(-this.width / 2, -this.height / 2, this.width, this.height, this.radius), 
            this.mask.endFill(), this.lastWidth = this.width, this.lastHeight = this.height, 
            this.lastRadius = this.radius);
        }
    }, {
        key: "release",
        value: function() {
            this.wrapperContainer.destroy(), this.contentContainer.destroy(), this._runtime.eventEmitter.off("onLoad", this.onLoad, this), 
            _get(_getPrototypeOf(o.prototype), "release", this).call(this);
        }
    } ]);
}();