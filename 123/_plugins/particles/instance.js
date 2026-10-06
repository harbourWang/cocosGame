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

var _particleEngine = _interopRequireDefault(require("./particleEngine"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
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

function _createSuper(n) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(n);
        return _possibleConstructorReturn(this, r ? (e = _getPrototypeOf(this).constructor, 
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
    _inherits(a, LB.SDK.IPluginInstanceBase);
    var o = _createSuper(a);
    function a(e, t) {
        _classCallCheck(this, a);
        var n = (e = o.call(this, e)).getRuntime().RenderEngine, r = new _particleEngine.default(n), n = (e._renderEngine = n, 
        e._x = 0, e._y = 0, e.particleContainer = new n.ParticleContainer(15e3, {
            alpha: !0,
            scale: !0,
            rotation: !0,
            uvs: !0
        }), e.renderTarget.addChild(e.particleContainer), (e.options = t).minAngle / 180 * Math.PI), i = t.maxAngle / 180 * Math.PI, n = (e.minAngle = Math.max(0, n), 
        e.maxAngle = Math.min(i, 6.28), r.emitter(t.interval || 500, e.playSingle.bind(_assertThisInitialized(e))));
        return e.particleStream = n, e._particleEngine = r, e.startTicking(), t.autoPlay && e.particleStream.play(), 
        e;
    }
    return _createClass(a, [ {
        key: "getValue",
        value: function(e) {
            return this.options[e];
        }
    }, {
        key: "setValue",
        value: function(e, t) {
            return "interval" == e && this._particleEngine._setInterval(t), this.options[e] = t;
        }
    }, {
        key: "release",
        value: function() {
            this.particleStream.stop(), this.particleStream = null, this.particleContainer = null;
        }
    }, {
        key: "setPosition",
        value: function(e, t) {
            var n = this._runtime.devicePixel;
            this._x = +e * n - this.renderTarget.x, this._y = -t * n - this.renderTarget.y;
        }
    }, {
        key: "playSingle",
        value: function() {
            var e = this, t = this.options, n = this._runtime.devicePixel;
            this._particleEngine.create(this._x, this._y, function() {
                return new e._renderEngine.Sprite.from(t.url);
            }, this.particleContainer, t.number, t.gravity * n, !!t.randomSpacing, this.minAngle, this.maxAngle, t.minSize * n, t.maxSize * n, t.minSpeed * n, t.maxSpeed * n, t.minScaleSpeed, t.maxScaleSpeed, t.minAlphaSpeed, t.maxAlphaSpeed, t.minRotationSpeed, t.maxRotationSpeed, t.minLifeTime, t.maxLifeTime);
        }
    }, {
        key: "tick",
        value: function() {
            this._particleEngine.update();
        }
    } ]), a;
}();

exports.default = _default;