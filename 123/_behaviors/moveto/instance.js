function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
        var n = _superPropBase(e, t);
        if (n) return n = Object.getOwnPropertyDescriptor(n, t), n.get ? n.get.call(arguments.length < 3 ? e : i) : n.value;
    }).apply(this, arguments);
}

function _superPropBase(e, t) {
    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); ) ;
    return e;
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

function _createSuper(i) {
    var n = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(i);
        return _possibleConstructorReturn(this, n ? (e = _getPrototypeOf(this).constructor, 
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

function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = function() {
    _inherits(n, LB.SDK.IBehaviorInstanceBase);
    var i = _createSuper(n);
    function n(e, t) {
        return _classCallCheck(this, n), _defineProperty(_assertThisInitialized(e = i.call(this, e)), "angleTo", function(e, t, i, n) {
            return Math.atan2(n - t, i - e);
        }), _defineProperty(_assertThisInitialized(e), "distanceSquared", function(e, t, i, n) {
            i -= e, e = n - t;
            return i * i + e * e;
        }), _defineProperty(_assertThisInitialized(e), "distanceTo", function(e, t, i, n) {
            return Math.hypot(i - e, n - t);
        }), _defineProperty(_assertThisInitialized(e), "angleDiff", function(e, t) {
            var i = Math.cos, n = Math.sin;
            if (e === t) return 0;
            var r = n(e), e = i(e), r = r * n(t) + e * i(t);
            return 1 <= r ? 0 : r <= -1 ? Math.PI : Math.acos(r);
        }), _defineProperty(_assertThisInitialized(e), "clampAngle", function(e) {
            var t = 2 * Math.PI;
            return (e %= t) < 0 && (e += t), e;
        }), _defineProperty(_assertThisInitialized(e), "angleRotate", function(e, t, i) {
            var n = Math.cos, r = Math.sin, o = r(e), s = n(e), r = r(t), n = n(t);
            return Math.acos(o * r + s * n) > i ? 0 < s * r - o * n ? this.clampAngle(e + i) : this.clampAngle(e - i) : this.clampAngle(t);
        }), e._maxSpeed = 200, e._acc = 600, e._dec = 600, e._rotateSpeed = 0, e._setAngle = !0, 
        e._stopOnSolids = !1, e._isEnabled = !0, e._speed = 0, e._movingAngle = e._instance.renderer.getRotation(), 
        e._waypoints = [], e.collisionEngine = e._runtime.renderer.collisionManager, t && (e._isEnabled = t.enable, 
        e._rotateSpeed = t.rotateSpeed, e._maxSpeed = t.maxSpeed, e._acc = t.acceleration, 
        e._dec = t.deceleration, e._setAngle = t.setAngle, e._stopOnSolids = t.stopOnSolids), 
        e._isEnabled && e.enable(), e;
    }
    return _createClass(n, [ {
        key: "setEnabled",
        value: function(e) {
            "1" === e ? this.enable() : this.disable();
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
            _get(_getPrototypeOf(n.prototype), "release", this).call(this);
        }
    }, {
        key: "_stop",
        value: function() {
            this._dx = 0, this._dy = 0;
        }
    }, {
        key: "_AddWaypoint",
        value: function(e, t, i) {
            i && (this._waypoints.length = 0), this._waypoints.push({
                x: e * this._runtime.devicePixel,
                y: t * this._runtime.devicePixel
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
        value: function(e) {
            this._IsMoving() && (this._speed = Math.min(e, this._maxSpeed));
        }
    }, {
        key: "_IsRotationEnabled",
        value: function() {
            return 0 !== this._rotateSpeed;
        }
    }, {
        key: "_movetoSprite",
        value: function(e) {
            e = this.getSpriteById(e);
            e && this._AddWaypoint(e.x, -e.y, !0);
        }
    }, {
        key: "getSpriteById",
        value: function(e) {
            e = this._runtime.runtimeData.checkAndgetSpriteId({
                str: e,
                thread: this._runtime._blockEngine.currentThread
            });
            if (!e) return !1;
            LB.Util.isArray(e) && (e = e[0]);
            e = this._runtime.runtimeData.getSpriteById(e);
            return e ? e.renderer.gPostion : void 0;
        }
    }, {
        key: "_AddWaypointBySprite",
        value: function(e) {
            e = this.getSpriteById(e);
            e && this._AddWaypoint(e.x, -e.y, !1);
        }
    }, {
        key: "tick",
        value: function(e) {
            var t = Math.sin, i = Math.min;
            if (this._isEnabled && this._IsMoving()) {
                var n, r = this._instance.renderer, o = r.getX(), s = -r.getY(), a = r.getRotation(), l = this._speed, c = this._maxSpeed, u = this._acc, _ = this._dec, h = this._GetTargetX(), p = this._GetTargetY(), f = this.angleTo(o, s, h, p), d = !1, y = (0 < _ && 1 === this._waypoints.length && (g = .5 * l * l / _ * 1.0001, 
                (d = this.distanceSquared(o, s, h, p) <= g * g) && (g = this.distanceTo(o, s, h, p), 
                c = l = Math.sqrt(2 * _ * g), this._speed = l)), !this._IsRotationEnabled() || (g = this.angleDiff(this._movingAngle, f)) > Number.EPSILON && (n = g / this._rotateSpeed, 
                y = this.distanceTo(r.getX(), -r.getY(), h, p) / (2 * t(g)), c = i(c, LB.MathUtil.clamp(y * g / n, 0, this._maxSpeed))), 
                d ? -_ : u), g = i(l * e + .5 * y * e * e, c * e);
                if (d) {
                    if (0 < _ && (this._speed = Math.max(this._speed - _ * e, 0), 0 === this._speed)) return void this._OnArrived(r, h, p);
                } else this._speed = 0 === u ? c : i(this._speed + u * e, c);
                return this.distanceSquared(r.getX(), -r.getY(), h, p) <= g * g ? void this._OnArrived(r, h, p) : (this._movingAngle = this._IsRotationEnabled() ? this.angleRotate(this._movingAngle, f, this._rotateSpeed * e) : f, 
                r.offsetXY(Math.cos(this._movingAngle) * g, t(this._movingAngle) * g), this._setAngle && r.rotateTo(-this._movingAngle / Math.PI * 180), 
                void this._CheckSolidCollision(o, s, a));
            }
        }
    }, {
        key: "_OnArrived",
        value: function(e, t, i) {
            e.setPosition(t, -i), this._waypoints.shift(), 0 === this._waypoints.length && (this._speed = 0, 
            this._stopTicking());
        }
    }, {
        key: "_CheckSolidCollision",
        value: function(e, t, i) {
            var n;
            this._stopOnSolids && this.collisionEngine.testOverlapSolid(this._instance) && (this._Stop(), 
            (n = this._instance.renderer).setPosition(e, -t), n.rotateTo(i));
        }
    }, {
        key: "_Stop",
        value: function() {
            this._waypoints.length = 0, this._speed = 0, this._stopTicking();
        }
    } ]), n;
}();

exports.default = _default;