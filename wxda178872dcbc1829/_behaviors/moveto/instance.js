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
        Object.defineProperty(t, _toPropertyKey(n.key), n);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
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
        var n = _superPropBase(t, e);
        if (n) return (n = Object.getOwnPropertyDescriptor(n, e)).get ? n.get.call(arguments.length < 3 ? t : i) : n.value;
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

function _defineProperty(t, e, i) {
    return (e = _toPropertyKey(e)) in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = function() {
    function i(t, e) {
        return _classCallCheck(this, i), _defineProperty(t = _callSuper(this, i, [ t ]), "angleTo", function(t, e, i, n) {
            return Math.atan2(n - e, i - t);
        }), _defineProperty(t, "distanceSquared", function(t, e, i, n) {
            i -= t, t = n - e;
            return i * i + t * t;
        }), _defineProperty(t, "distanceTo", function(t, e, i, n) {
            return Math.hypot(i - t, n - e);
        }), _defineProperty(t, "angleDiff", function(t, e) {
            var i, n = Math.cos, o = Math.sin;
            return t === e || (i = o(t), t = n(t), 1 <= (i = i * o(e) + t * n(e))) ? 0 : i <= -1 ? Math.PI : Math.acos(i);
        }), _defineProperty(t, "clampAngle", function(t) {
            var e = 2 * Math.PI;
            return (t %= e) < 0 && (t += e), t;
        }), _defineProperty(t, "angleRotate", function(t, e, i) {
            var n = Math.cos, o = Math.sin, r = o(t), s = n(t), o = o(e), n = n(e);
            return Math.acos(r * o + s * n) > i ? 0 < s * o - r * n ? this.clampAngle(t + i) : this.clampAngle(t - i) : this.clampAngle(e);
        }), t._maxSpeed = 200, t._acc = 600, t._dec = 600, t._rotateSpeed = 0, t._setAngle = !0, 
        t._stopOnSolids = !1, t._isEnabled = !0, t._speed = 0, t._movingAngle = t._instance.renderer.getRotation(), 
        t._waypoints = [], t.collisionEngine = t._runtime.renderer.collisionManager, e && (t._isEnabled = e.enable, 
        t._rotateSpeed = e.rotateSpeed, t._maxSpeed = e.maxSpeed, t._acc = e.acceleration, 
        t._dec = e.deceleration, t._setAngle = e.setAngle, t._stopOnSolids = e.stopOnSolids), 
        t._isEnabled && t.enable(), t;
    }
    return _inherits(i, LB.SDK.IBehaviorInstanceBase), _createClass(i, [ {
        key: "setEnabled",
        value: function(t) {
            "1" === t ? this.enable() : this.disable();
        }
    }, {
        key: "enable",
        value: function() {
            this._isEnabled = !0, this._startTicking();
        }
    }, {
        key: "disable",
        value: function() {
            this._isEnabled = !1, this._stopTicking();
        }
    }, {
        key: "release",
        value: function() {
            _get(_getPrototypeOf(i.prototype), "release", this).call(this);
        }
    }, {
        key: "_stop",
        value: function() {
            this._dx = 0, this._dy = 0;
        }
    }, {
        key: "_AddWaypoint",
        value: function(t, e, i) {
            i && (this._waypoints.length = 0), this._waypoints.push({
                x: t * this._runtime.devicePixel,
                y: e * this._runtime.devicePixel
            }), this._isEnabled && this._startTicking();
        }
    }, {
        key: "_IsMoving",
        value: function() {
            return 0 < this._waypoints.length;
        }
    }, {
        key: "_GetTargetX",
        value: function() {
            return 0 < this._waypoints.length ? this._waypoints[0].x : 0;
        }
    }, {
        key: "_GetTargetY",
        value: function() {
            return 0 < this._waypoints.length ? this._waypoints[0].y : 0;
        }
    }, {
        key: "_SetSpeed",
        value: function(t) {
            this._IsMoving() && (this._speed = Math.min(t, this._maxSpeed));
        }
    }, {
        key: "_IsRotationEnabled",
        value: function() {
            return 0 !== this._rotateSpeed;
        }
    }, {
        key: "_movetoSprite",
        value: function(t) {
            t = this.getSpriteById(t);
            t && this._AddWaypoint(t.x, -t.y, !0);
        }
    }, {
        key: "getSpriteById",
        value: function(t) {
            t = this._runtime.runtimeData.checkAndgetSpriteId({
                str: t,
                thread: this._runtime._blockEngine.currentThread
            });
            if (!t) return !1;
            LB.Util.isArray(t) && (t = t[0]);
            t = this._runtime.runtimeData.getSpriteById(t);
            return t ? t.renderer.gPostion : void 0;
        }
    }, {
        key: "_AddWaypointBySprite",
        value: function(t) {
            t = this.getSpriteById(t);
            t && this._AddWaypoint(t.x, -t.y, !1);
        }
    }, {
        key: "tick",
        value: function(t) {
            var e = Math.sin, i = Math.min;
            if (this._isEnabled && this._IsMoving()) {
                var n, o = this._instance.renderer, r = o.getX(), s = -o.getY(), a = o.getRotation(), l = this._speed, u = this._maxSpeed, c = this._acc, _ = this._dec, p = this._GetTargetX(), f = this._GetTargetY(), h = this.angleTo(r, s, p, f), d = !1, y = (0 < _ && 1 === this._waypoints.length && (g = .5 * l * l / _ * 1.0001, 
                d = this.distanceSquared(r, s, p, f) <= g * g) && (g = this.distanceTo(r, s, p, f), 
                u = l = Math.sqrt(2 * _ * g), this._speed = l), this._IsRotationEnabled() && (g = this.angleDiff(this._movingAngle, h)) > Number.EPSILON && (n = g / this._rotateSpeed, 
                y = this.distanceTo(o.getX(), -o.getY(), p, f) / (2 * e(g)), u = i(u, LB.MathUtil.clamp(y * g / n, 0, this._maxSpeed))), 
                d ? -_ : c), g = i(l * t + .5 * y * t * t, u * t);
                if (d) {
                    if (0 < _ && (this._speed = Math.max(this._speed - _ * t, 0), 0 === this._speed)) return void this._OnArrived(o, p, f);
                } else this._speed = 0 === c ? u : i(this._speed + c * t, u);
                return this.distanceSquared(o.getX(), -o.getY(), p, f) <= g * g ? void this._OnArrived(o, p, f) : (this._movingAngle = this._IsRotationEnabled() ? this.angleRotate(this._movingAngle, h, this._rotateSpeed * t) : h, 
                o.offsetXY(Math.cos(this._movingAngle) * g, e(this._movingAngle) * g), this._setAngle && o.rotateTo(-this._movingAngle / Math.PI * 180), 
                void this._CheckSolidCollision(r, s, a));
            }
        }
    }, {
        key: "_OnArrived",
        value: function(t, e, i) {
            t.setPosition(e, -i), this._waypoints.shift(), 0 === this._waypoints.length && (this._speed = 0, 
            this._stopTicking());
        }
    }, {
        key: "_CheckSolidCollision",
        value: function(t, e, i) {
            var n;
            this._stopOnSolids && this.collisionEngine.testOverlapSolid(this._instance) && (this._Stop(), 
            (n = this._instance.renderer).setPosition(t, -e), n.rotateTo(i));
        }
    }, {
        key: "_Stop",
        value: function() {
            this._waypoints.length = 0, this._speed = 0, this._stopTicking();
        }
    } ]);
}();