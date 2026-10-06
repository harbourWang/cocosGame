function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _slicedToArray(t, e) {
    return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0;
    }
}

function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r;
}

function _iterableToArrayLimit(t, e) {
    var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (null != i) {
        var r, n, o = [], s = !0, a = !1;
        try {
            for (i = i.call(t); !(s = (r = i.next()).done) && (o.push(r.value), !e || o.length !== e); s = !0) ;
        } catch (t) {
            a = !0, n = t;
        } finally {
            try {
                s || null == i.return || i.return();
            } finally {
                if (a) throw n;
            }
        }
        return o;
    }
}

function _arrayWithHoles(t) {
    if (Array.isArray(t)) return t;
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var r = e[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(t, r.key, r);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
        var r = _superPropBase(t, e);
        if (r) return r = Object.getOwnPropertyDescriptor(r, e), r.get ? r.get.call(arguments.length < 3 ? t : i) : r.value;
    }).apply(this, arguments);
}

function _superPropBase(t, e) {
    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); ) ;
    return t;
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

function _createSuper(i) {
    var r = _isNativeReflectConstruct();
    return function() {
        var t, e = _getPrototypeOf(i);
        return _possibleConstructorReturn(this, r ? (t = _getPrototypeOf(this).constructor, 
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
    _inherits(n, LB.SDK.IBehaviorInstanceBase);
    var r = _createSuper(n);
    function n(t, e) {
        _classCallCheck(this, n), (t = r.call(this, t))._jumpKey = !1, t._downKey = !1, 
        t._leftKey = !1, t._rightKey = !1, t._ignoreInput = !1, t._simJump = !1, t._simLeft = !1, 
        t._simRight = !1, t._dx = 0, t._dy = 0, t._fallThrough = 0, t._maxSpeed = 330, t._acc = 1500, 
        t._dec = 1500, t._jumpStrength = 650, t._maxFall = 1e3, t._enableDoubleJump = !1, 
        t._jumpSustain = 0, t._g = 0, t._ga = -Math.PI / 2, t._wasOnFloor = !1, t._defaultControls = !0, 
        t._joyStickControls = !0, t._isEnabled = !0, t._joyStickMoving = !1, t._joyStickData = null, 
        t.collisionEngine = t._runtime.renderer.collisionManager;
        var i = 16.7 * t._runtime.devicePixel;
        return e && (t._maxSpeed = e.maxSpeed * i, t._acc = e.acceleration * i, t._dec = e.deceleration * i, 
        t._jumpSustain = e.jumpSustain, t._g = e.gravity * i, t._maxFall = e.maxFallSpeed * i, 
        t._jumpStrength = e.jumpStrenth * i, t._enableDoubleJump = !!e.doubleJump, t._defaultControls = !!e.defaultControl, 
        t._isEnabled = !!e.enable), t._updateGravity(), t._isEnabled && t._startTicking(), 
        t._defaultControls && t._bindEvents(), t;
    }
    return _createClass(n, [ {
        key: "isEnabled",
        value: function() {
            return this._isEnabled;
        }
    }, {
        key: "_isJumping",
        value: function() {
            return this._dy < 0;
        }
    }, {
        key: "_isFalling",
        value: function() {
            return 0 < this._dy;
        }
    }, {
        key: "_isMoving",
        value: function() {
            return 0 != this._dx;
        }
    }, {
        key: "_bindEvents",
        value: function() {
            var t = this._runtime.eventEmitter;
            t.on(t.SystemEventType.keydown, this._onKeyDown, this), t.on(t.SystemEventType.keyup, this._onKeyUp, this), 
            t.on(t.SystemEventType.joyStickMove, this._onJoyStickMove, this), t.on(t.SystemEventType.joyStickStop, this._onJoyStickStop, this);
        }
    }, {
        key: "_unBindEvents",
        value: function() {
            var t = this._runtime.eventEmitter;
            t.off(t.SystemEventType.keydown, this._onKeyDown, this), t.off(t.SystemEventType.keyup, this._onKeyUp, this), 
            t.off(t.SystemEventType.joyStickMove, this._onJoyStickMove, this), t.off(t.SystemEventType.joyStickStop, this._onJoyStickStop, this);
        }
    }, {
        key: "_onJoyStickStop",
        value: function(t) {
            this._joyStickMoving = !1, this._joyStickData = null;
        }
    }, {
        key: "_onJoyStickMove",
        value: function(t) {
            this._joyStickMoving = !0, this._joyStickData = t;
        }
    }, {
        key: "_onKeyDown",
        value: function(t) {
            switch (t.key) {
              case "ArrowLeft":
                this._leftKey = !0;
                break;

              case "ArrowUp":
                this._jumpKey = !0;
                break;

              case "ArrowRight":
                this._rightKey = !0;
                break;

              case "ArrowDown":
                this._downKey = !0;
            }
        }
    }, {
        key: "_onKeyUp",
        value: function(t) {
            switch (t.key) {
              case "ArrowLeft":
                this._leftKey = !1;
                break;

              case "ArrowUp":
                this._jumpKey = !1, this._jumped = !1;
                break;

              case "ArrowRight":
                this._rightKey = !1;
                break;

              case "ArrowDown":
                this._downKey = !1;
            }
        }
    }, {
        key: "release",
        value: function() {
            this._unBindEvents(), _get(_getPrototypeOf(n.prototype), "release", this).call(this);
        }
    }, {
        key: "_stop",
        value: function() {
            this._dx = 0, this._dy = 0;
        }
    }, {
        key: "_updateGravity",
        value: function() {
            var t = Math.PI, e = Math.sin, i = Math.cos;
            this._downX = i(this._ga), this._downY = e(this._ga), this._rightX = i(this._ga + t / 2), 
            this._rightY = e(this._ga + t / 2), this._downX = this.round6dp(this._downX), this._downY = this.round6dp(this._downY), 
            this._rightX = this.round6dp(this._rightX), this._rightY = this.round6dp(this._rightY), 
            this._g1 = this._g, 0 < this._g && (this._downX *= -1, this._downY *= -1, this._g = Math.abs(this._g));
        }
    }, {
        key: "round6dp",
        value: function(t) {
            return Math.round(1e6 * t) / 1e6;
        }
    }, {
        key: "_handleJump",
        value: function(t, e, i) {
            var r, n, o;
            return (t && e || !t && this._enableDoubleJump && i && this._canDoubleJump && !this._doubleJumped) && (n = (r = (i = this._instance).renderer).getX(), 
            o = r.getY(), r.offsetXY(-this._downX, -this._downY), this.collisionEngine.testOverlapSolid(i) ? e = !1 : (this._sustainTime = this._jumpSustain, 
            this._animMode = "jumping", this._dy = -this._jumpStrength, e = !0, t ? this._jumped = !0 : this._doubleJumped = !0), 
            r.setPosition(n, o)), e;
        }
    }, {
        key: "_applyJumpGravity",
        value: function(t, e, i) {
            e && 0 < this._sustainTime ? (this._dy = -this._jumpStrength, this._sustainTime -= 1e3 * i) : (this._lastFloorObject = null, 
            this._dy += this._g * i, this._dy > this._maxFall && (this._dy = this._maxFall)), 
            t && (this._jumped = !0);
        }
    }, {
        key: "_handleHorizontalMovement",
        value: function(t, e, i, r) {
            var n = this, o = this._instance, s = o.renderer, a = this._maxSpeed, l = o.renderer.getX(), h = o.renderer.getY(), _ = this.cal(this._dx, -a, a, e, t) * this._rightX, a = this.cal(this._dx, -a, a, e, t) * this._rightY;
            return o.renderer.offsetXY(this._rightX * (1 < this._dx ? 1 : -1) - this._downX, this._rightY * (1 < this._dx ? 1 : -1) - this._downY), 
            o.renderer.setPosition(l + _, h + a), 0 != _ && (e = this.collisionEngine.testOverlapSolid(this._instance)) && (e.forEach(function(t) {
                n.collisionEngine.registerCollision(n._instance.id, t.id);
            }), s.setPosition(l, h), this._dx = 0), !1;
        }
    }, {
        key: "_handleVerticalMovement",
        value: function(t, e) {
            Math.abs;
            var i = this._instance, r = this._downX, n = this._downY, o = !1, s = i.renderer.getX(), a = i.renderer.getY(), l = this.cal(this._dy, -1 / 0, this._maxFall, this._g, t), h = (i.renderer.offsetXY(l * r, l * n), 
            i.renderer.getX()), _ = i.renderer.getY(), u = this.collisionEngine.testOverlapSolid(i), c = !1;
            if (!(u = u && u[0]) && 0 < this._dy && !e) {
                var y = 0 < this._fallThrough ? null : this.collisionEngine.testOverlapJumpthrough(i, !0);
                if (y && y.length) {
                    i.renderer.setPosition(s, a);
                    for (var d = 0, p = 0, f = y.length; p < f; ++p) y[d] = y[p], !this.collisionEngine.testOverlap(i, y[p]._instance) && i.renderer.getY() >= y[p]._instance.renderer.getY() && ++d;
                    y.length = d, i.renderer.setPosition(h, _), 1 <= y.length && (u = y[0]._instance);
                }
                c = !!u;
            }
            return u && (this.collisionEngine.registerCollision(i.id, u.id), this._sustainTime = 0, 
            e = Math.max(Math.abs(this._dy * t * 1.1), 2), this.collisionEngine.pushOutSolid({
                x: s,
                y: a
            }, i, r * (this._dy < 0 ? 1 : -1), n * (this._dy < 0 ? 1 : -1), e, c, u) ? (h = (this._lastFloorObject = u).renderer, 
            this._lastFloorX = h.getX(), this._lastFloorY = h.getY(), (this._floorIsJumpthru = c) && (o = !0), 
            this._dy = 0) : (i.renderer.setPosition(s, a), this._wasOnFloor = !0, c || (this._dy = 0))), 
            [ o, l ];
        }
    }, {
        key: "cal",
        value: function(t, e, i, r, n) {
            return LB.MathUtil.clamp(t * n + .5 * r * n * n, e * n, i * n);
        }
    }, {
        key: "_fallThroughJumpthrough",
        value: function() {
            var t = this._instance.renderer, e = t.getX(), i = t.getY(), r = (t.offsetXY(this._downX, this._downY), 
            this.collisionEngine.testOverlapJumpthrough(this._instance, !1));
            t.setPosition(e, i), r && (this._fallThrough = 3, this._lastFloorObject = null);
        }
    }, {
        key: "_isOnFloor",
        value: function() {
            var t = this._instance.renderer, e = this.collisionEngine, i = this._instance, r = this._lastFloorObject, n = t.getX(), o = t.getY();
            if (t.offsetXY(this._downX, this._downY), r && e.testOverlap(i, r) && (!r.hasSolidBehaviours() || r._behaviorInst.Solid && r._behaviorInst.Solid.isEnabled())) return t.setPosition(n, o), 
            r;
            var r = e.testOverlapSolid(i), s = null;
            if ((r = r && r[0]) || 0 !== this._fallThrough || (s = e.testOverlapJumpthrough(i, !0)), 
            t.setPosition(n, o), r) return e.testOverlap(i, r) ? null : (this._floorIsJumpthru = !1, 
            r);
            if (s && s.length) {
                for (var a = 0, l = 0, h = s.length; l < h; ++l) s[a] = s[l], e.testOverlap(i, s[l]._instance) || ++a;
                if (1 <= a) return this._floorIsJumpthru = !0, s[0]._instance;
            }
            return null;
        }
    }, {
        key: "_applyHorizontalAcceleration",
        value: function(t, e, i) {
            var r = this._acc, n = this._dec, o = (t === e && (this._dx < 0 ? (this._dx += n * i, 
            0 < this._dx && (this._dx = 0)) : 0 < this._dx && (this._dx -= n * i, this._dx < 0 && (this._dx = 0))), 
            0);
            return t && !e && (o = 0 < this._dx ? -(r + n) : -r), e && !t && (o = this._dx < 0 ? r + n : r), 
            this._dx += o * i, this._dx = LB.MathUtil.clamp(this._dx, -this._maxSpeed, this._maxSpeed), 
            o;
        }
    }, {
        key: "_trackFloor",
        value: function(t, e, i, r) {
            var n = this._inst, o = this.collisionEngine;
            t ? (this._downX, this._downY, this._rightX, this._rightY, this._doubleJumped = !1, 
            this._canDoubleJump = !1, 0 < this._dy && (this._wasOnFloor || (this._wasOnFloor = !0), 
            this._dy = 0), this._lastFloorObject !== t ? (t = (this._lastFloorObject = t).renderer, 
            this._lastFloorX = t.getX(), this._lastFloorY = t.getY()) : e && (t = o.testOverlapSolid(n)) && this.collisionEngine.registerCollision(n.id, t.id)) : r || (this._canDoubleJump = !0);
        }
    }, {
        key: "_trackMovingPlatform",
        value: function() {
            var t, e = this._lastFloorObject, i = e ? e.renderer : null, r = 0, n = 0, o = !1;
            return !e || 0 !== this._dy || i.getY() === this._lastFloorY && i.getX() === this._lastFloorX || (e = this._instance.renderer, 
            this.collisionEngine, t = i.getX(), i = i.getY(), r = t - this._lastFloorX, n = i - this._lastFloorY, 
            e.offsetXY(r, n), this._lastFloorX = t, this._lastFloorY = i, o = !0), [ r, n, o ];
        }
    }, {
        key: "tick",
        value: function(t) {
            var e, i, r, n, o, s, a, l;
            this._isEnabled && (this._jumpKey || this._simJump || (this._jumped = !1), o = this._leftKey || this._simLeft, 
            s = this._rightKey || this._simRight, l = this._jumpKey || this._simJump, this._simLeft = !1, 
            this._simRight = !1, this._simJump = !1, this._instance.renderer, l || (this._sustainTime = 0), 
            e = l && !this._jumped, r = (i = this._isOnFloor()) && !this._wasOnFloor, a = (n = _slicedToArray(this._trackMovingPlatform(), 3))[0], 
            n[1], n = n[2], this._trackFloor(i, n, a, l), e = this._handleJump(i, e, l), i || this._applyJumpGravity(e, l, t), 
            this._wasOnFloor = !!i, n = this._applyHorizontalAcceleration(o, s, t), this._joyStickMoving && (this._dx += this._joyStickData.resultX, 
            this._dy += this._joyStickData.resultY), a = !1, (l = 0) === this._dx && 0 === this._dy || (0 !== this._dx && (a = this._handleHorizontalMovement(t, n, i, e)), 
            0 !== this._dy && (s = (o = _slicedToArray(this._handleVerticalMovement(t, i), 2))[0], 
            a = a || s, l = o[1])), !a && r && this._dy < 0 && 0 < l && (a = !(this._dy = 0)), 
            0 < this._fallThrough && this._fallThrough--, this._wasOverJumpthru = this.collisionEngine.testOverlapJumpthrough(this._instance));
        }
    } ]), n;
}();

exports.default = _default;