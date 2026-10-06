Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _util = require("./common/util.js"), _client = require("../../util/client");

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
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(t, n.key, n);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}

function _possibleConstructorReturn(t, e) {
    return !e || "object" !== _typeof(e) && "function" != typeof e ? _assertThisInitialized(t) : e;
}

function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}

function _get(t, e, i) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
        var n = _superPropBase(t, e);
        if (n) {
            var r = Object.getOwnPropertyDescriptor(n, e);
            return r.get ? r.get.call(i) : r.value;
        }
    })(t, e, i || t);
}

function _superPropBase(t, e) {
    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); ) ;
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

var dpr = (0, _client.getDeviceInfo)().devicePixelRatio, DOWN = _client.isMiniGame ? "touchstart" : "pointerdown", MOVE = _client.isMiniGame ? "touchmove" : "pointermove", UP = _client.isMiniGame ? "touchend" : "pointerup", OUT = _client.isMiniGame ? "touchendoutside" : "pointerupoutside", CANCEL = _client.isMiniGame ? "touchcancel" : "pointercancel", _default = function(t) {
    function n(t, e) {
        var i;
        return _classCallCheck(this, n), (i = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, t))).init(e), 
        i;
    }
    return _inherits(n, LB.SDK.IPluginInstanceBase), _createClass(n, [ {
        key: "release",
        value: function() {
            this.offEventHandler(), _get(_getPrototypeOf(n.prototype), "release", this).call(this);
        }
    }, {
        key: "update",
        value: function() {}
    }, {
        key: "init",
        value: function(t) {
            this.touchId = -1, this.hasDisable = !1, this.center = {
                x: 0,
                y: 0
            }, this.render(t), this.wrap.on(DOWN, this.onTouchDown.bind(this)), this.moveCbk = this.onTouchMove.bind(this), 
            this.upCbk = this.onTouchUp.bind(this);
        }
    }, {
        key: "enable",
        value: function() {
            this.hasDisable = !1, this.visible = !0;
        }
    }, {
        key: "disable",
        value: function() {
            this.hasDisable = !0, this.onTouchUp(), this.visible = !1;
        }
    }, {
        key: "getPointInCircle",
        value: function(t, e, i, n) {
            var r = i, o = n, s = i - t.x, a = n - t.y, u = Math.atan2(a, s), h = Math.cos(u) * e, c = Math.sin(u) * e, l = (360 + parseInt((0, 
            _util.convertRadian2Degree)(u))) % 360;
            return Math.abs(s) > Math.abs(h) && (r = t.x + h), Math.abs(a) > Math.abs(c) && (o = t.y + c), 
            {
                resultX: r,
                resultY: o,
                degree: l,
                radian: (0, _util.convertDegree2Radian)(l)
            };
        }
    }, {
        key: "render",
        value: function(t) {
            var e = t.backgroundUrl, i = t.buttonUrl;
            this.wrap = PIXI.Sprite.from(e), this.wrap.interactive = !0, this.wrap.x = 0, this.wrap.y = 0, 
            this.wrap.anchor.set(.5), this.renderTarget.addChild(this.wrap), this.button = PIXI.Sprite.from(i), 
            this.button.anchor.set(.5), this.button.buttonStartX = 0, this.button.buttonStartY = 0, 
            this.button.x = this.button.buttonStartX, this.button.y = this.button.buttonStartY, 
            this.renderTarget.addChild(this.button);
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
            this.wrap.on(CANCEL, this.upCbk);
        }
    }, {
        key: "onTouchDown",
        value: function(t) {
            if (!this.hasDisable && -1 === this.touchId) {
                this.touchId = t.touchId, this.wrap.radius = this.wrap.width / 2 * dpr, this.button.radius = this.button.width / 2 * dpr;
                var e = t.data.getLocalPosition(this.wrap), i = e.x, n = e.y;
                this._startX = i, this._startY = n;
                var r = this.getPointInCircle(this.center, this.wrap.radius - this.button.radius, i, n);
                this.button.x = r.resultX, this.button.y = r.resultY, this.bindEventHandler(), Math.abs(i) < 20 && Math.abs(n) < 20 && (r.resultX = 0, 
                r.resultY = 0), this.limit = r;
            }
        }
    }, {
        key: "onTouchUp",
        value: function(t) {
            this.touchId = -1, this.currIdentifier = void 0, this.limit = !1, this.button.x = this.button.buttonStartX, 
            this.button.y = this.button.buttonStartY, this.offEventHandler();
        }
    }, {
        key: "onTouchMove",
        value: function(t) {
            if (!this.hasDisable && (void 0 === this.currIdentifier || t.data.identifier === this.currIdentifier)) {
                this.currIdentifier = t.data.identifier;
                var e = t.data.getLocalPosition(this.wrap), i = e.x, n = e.y, r = this.getPointInCircle(this.center, this.wrap.radius - this.button.radius, i, n);
                this.button.x = r.resultX, this.button.y = r.resultY, Math.abs(i) < 20 && Math.abs(n) < 20 && Math.abs(i - this._startX) < 5 && Math.abs(n - this._startY) < 5 && (r.resultX = 0, 
                r.resultY = 0), this.limit = r;
            }
        }
    } ]), n;
}();

exports.default = _default;