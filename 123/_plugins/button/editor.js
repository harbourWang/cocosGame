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
    for (var r = 0; r < e.length; r++) {
        var o = e[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(t, o.key, o);
    }
}

function _createClass(t, e, r) {
    return e && _defineProperties(t.prototype, e), r && _defineProperties(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
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

function _createSuper(r) {
    var o = _isNativeReflectConstruct();
    return function() {
        var t, e = _getPrototypeOf(r);
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
    _inherits(o, PIXI.Container);
    var r = _createSuper(o);
    function o(t) {
        var e;
        return _classCallCheck(this, o), (e = r.call(this)).init(t), e;
    }
    return _createClass(o, [ {
        key: "init",
        value: function(t) {
            var e = t.type, r = t.normalImage, o = t.width, i = t.height, n = (this.disabled = !t.enable, 
            "0x" + t.normalColor.slice(1, 7)), l = "0x" + t.disabledColor.slice(1, 7), a = "0x" + t.labelNormalColor.slice(1, 7), s = "0x" + t.labelDisabledColor.slice(1, 7), r = (this.wrap ? this.wrap.texture = new PIXI.Texture.from(r) : (this.wrap = new PIXI.Sprite.from(r), 
            this.wrap.interactive = !0, this.wrap.anchor.set(.5), this.addChild(this.wrap)), 
            this.wrap.width = o, this.wrap.height = i, this.label || (this.label = new PIXI.Text(), 
            this.label.anchor.set(.5), this.addChild(this.label)), {
                align: "center",
                fill: a || 0,
                breakWords: !0,
                fontFamily: "Microsoft YaHei",
                fontSize: t.labelSize || 26,
                fontWeight: t.labelWeight || "normal",
                wordWrap: !0,
                wordWrapWidth: o,
                lineHeight: t.labelSize || 26
            });
            this.label.style = new PIXI.TextStyle(r), this.label.text = t.labelContent, this.label.visible = t.labelVisible, 
            1 === e ? (this.wrap.tint = n, this.disabled && (this.wrap.tint = l, this.label.style.fill = s)) : this.disabled && (this.label.style.fill = s, 
            2 === e && (this.wrap.texture = new PIXI.Texture.from(t.disabledImage)));
        }
    } ]), o;
}();

exports.default = _default;