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

var _default = exports.default = function() {
    function o(e, t) {
        _classCallCheck(this, o);
        var r = (e = _callSuper(this, o, [ e ])).getRuntime().RenderEngine, n = new _particleEngine.default(r), r = (e._renderEngine = r, 
        e._x = 0, e._y = 0, e.particleContainer = new r.ParticleContainer(15e3, {
            alpha: !0,
            scale: !0,
            rotation: !0,
            uvs: !0
        }), e.renderTarget.addChild(e.particleContainer), (e.options = t).minAngle / 180 * Math.PI), i = t.maxAngle / 180 * Math.PI, r = (e.minAngle = Math.max(0, r), 
        e.maxAngle = Math.min(i, 6.28), n.emitter(t.interval || 500, e.playSingle.bind(e)));
        return e.particleStream = r, e._particleEngine = n, e.startTicking(), t.autoPlay && e.particleStream.play(), 
        e;
    }
    return _inherits(o, LB.SDK.IPluginInstanceBase), _createClass(o, [ {
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
            var r = this._runtime.devicePixel;
            this._x = +e * r - this.renderTarget.x, this._y = -t * r - this.renderTarget.y;
        }
    }, {
        key: "playSingle",
        value: function() {
            var e = this, t = this.options, r = this._runtime.devicePixel;
            this._particleEngine.create(this._x, this._y, function() {
                return new e._renderEngine.Sprite.from(t.url);
            }, this.particleContainer, t.number, t.gravity * r, !!t.randomSpacing, this.minAngle, this.maxAngle, t.minSize * r, t.maxSize * r, t.minSpeed * r, t.maxSpeed * r, t.minScaleSpeed, t.maxScaleSpeed, t.minAlphaSpeed, t.maxAlphaSpeed, t.minRotationSpeed, t.maxRotationSpeed, t.minLifeTime, t.maxLifeTime);
        }
    }, {
        key: "tick",
        value: function() {
            this._particleEngine.update();
        }
    } ]);
}();