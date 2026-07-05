function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _objectDestructuringEmpty(t) {
    if (null == t) throw new TypeError("Cannot destructure " + t);
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var o = e[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(o.key), o);
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
    function o(t, e) {
        var i;
        return _classCallCheck(this, o), (i = _callSuper(this, o)).app = e, i.init(t), i;
    }
    return _inherits(o, PIXI.Container), _createClass(o, [ {
        key: "init",
        value: function(t) {
            _objectDestructuringEmpty(t), this.options = t, 1 === this.options.type && (this.options.column = Math.ceil(this.options.total / this.options.row)), 
            this.wrapperContainer || (this.wrapperContainer = new PIXI.Sprite(), this.addChild(this.wrapperContainer)), 
            this.setBackground(this.options.background, this.options.alpha), this.setMask(), 
            this.list ? this.list.removeChildren() : (this.list = new PIXI.Sprite(), this.wrapperContainer.addChild(this.list), 
            this.list.anchor.set(.5)), this.initChild();
        }
    }, {
        key: "initChild",
        value: function() {
            var s = this;
            -1 != this.options.child && this.options.child && this.options.total && (this._timeoutId && clearTimeout(this._timeoutId), 
            this._timeoutId = setTimeout(function() {
                var t = s.app.getNode(s.options.child), e = t.visible, o = (t.visible = !0, s.app.renderer.plugins.extract.image(t)), i = t.children[0].getBounds(), n = i.width, r = i.height;
                o.onload = function() {
                    t.visible = e;
                }, setTimeout(function() {
                    s.list.removeChildren();
                    for (var t = 0; t < s.options.total; t++) {
                        var e = new PIXI.Sprite.from(o), i = (s.list.addChild(e), s.getPositionByIndex(t + 1, n, r));
                        e.position.set(i.x, i.y), e.anchor.set(.5);
                    }
                }, 0);
            }, 30));
        }
    }, {
        key: "getPositionByIndex",
        value: function(t, e, i) {
            var o, n = Math.ceil(t / this.options.column), t = t % this.options.column || this.options.column, r = Math.ceil(this.options.total / this.options.column), s = (this.options.column - 1) * (this.options.marginHorizontal + e), r = (r - 1) * (this.options.marginVertical + i);
            return s = 0 == this.options.type ? (o = -s / 2 + (t - 1) * (e + this.options.marginHorizontal), 
            (i + this.options.marginVertical) * (n - 1) - this.options.height / 2 + i / 2) : (o = (e + this.options.marginHorizontal) * (t - 1) - this.options.width / 2 + e / 2, 
            -r / 2 + (n - 1) * (i + this.options.marginVertical)), {
                x: o,
                y: s
            };
        }
    }, {
        key: "renderItem",
        value: function() {
            var t;
            this.options.child && (t = this.app.getNode(this.options.child), t = this.app.renderer.plugins.extract.image(t), 
            (t = new PIXI.Sprite.from(t)).anchor.set(.5), this.wrapperContainer.addChild(t));
        }
    }, {
        key: "setBackground",
        value: function(t, e) {
            return this.background && this.wrapperContainer.removeChild(this.background), "number" == typeof (t = "string" == typeof t ? PIXI.utils.string2hex(t) : t) && (t = new PIXI.Graphics().beginFill(t).drawRect(0, 0, 1, 1).endFill()), 
            this.background = t, this.background.alpha = e, t && (t.width = this.options.width, 
            t.height = this.options.height, t.position.set(-t.width / 2, -t.height / 2), this.wrapperContainer.addChildAt(t, 0)), 
            this;
        }
    }, {
        key: "setMask",
        value: function() {
            this.maskSp ? t = this.maskSp : (t = new PIXI.Graphics(), this.wrapperContainer.mask = t, 
            this.addChild(t)), t.clear(), t.lineStyle(0), t.beginFill(16711680, 1);
            var t, e = +this.options.width, i = +this.options.height;
            0 === this.options.radius ? t.drawRect(-e / 2, -i / 2, e, i) : t.drawRoundedRect(-e / 2, -i / 2, e, i, +this.options.radius), 
            t.endFill(), this.maskSp = t;
        }
    }, {
        key: "drawDashLine",
        value: function(t, e, i) {
            for (var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 16, n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 8, r = t.currentPath.points, s = {
                x: r[r.length - 2] || 0,
                y: r[r.length - 1] || 0
            }, a = Math.abs(e), p = Math.abs(i); Math.abs(s.x) < a || Math.abs(s.y) < p; ) s.x = Math.abs(s.x + o) < a ? s.x + o : e, 
            s.y = Math.abs(s.y + o) < p ? s.y + o : i, t.lineTo(s.x, s.y), s.x = Math.abs(s.x + n) < a ? s.x + n : e, 
            s.y = Math.abs(s.y + n) < p ? s.y + n : i, t.moveTo(s.x, s.y);
        }
    } ]);
}();