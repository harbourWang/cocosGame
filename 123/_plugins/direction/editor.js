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
    return e && _defineProperties(t.prototype, e), r && _defineProperties(t, r), t;
}

function _possibleConstructorReturn(t, e) {
    return !e || "object" !== _typeof(e) && "function" != typeof e ? _assertThisInitialized(t) : e;
}

function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}

function _getPrototypeOf(t) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
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
    }), e && _setPrototypeOf(t, e);
}

function _setPrototypeOf(t, e) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = function(t) {
    function r(t) {
        var e;
        return _classCallCheck(this, r), (e = _possibleConstructorReturn(this, _getPrototypeOf(r).call(this))).render(t), 
        e;
    }
    return _inherits(r, PIXI.Container), _createClass(r, [ {
        key: "render",
        value: function(t) {
            var e = t.backgroundUrl, r = t.buttonUrl, o = t.width, n = t.height;
            this.wrap ? this.wrap.texture = PIXI.Texture.from(e) : (this.wrap = PIXI.Sprite.from(e), 
            this.wrap.anchor.set(.5), this.addChild(this.wrap)), this.wrap.width = o / this.scale.x, 
            this.wrap.height = n / this.scale.y, this.button ? this.button.texture = PIXI.Texture.from(r) : (this.button = PIXI.Sprite.from(r), 
            this.button.anchor.set(.5), this.addChild(this.button)), this.button.width = .24 * this.wrap.width, 
            this.button.height = .24 * this.wrap.height;
        }
    } ]), r;
}();

exports.default = _default;