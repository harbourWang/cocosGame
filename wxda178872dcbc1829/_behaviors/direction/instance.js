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
        var s = e[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(s.key), s);
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

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, i) {
        var s = _superPropBase(t, e);
        if (s) return (s = Object.getOwnPropertyDescriptor(s, e)).get ? s.get.call(arguments.length < 3 ? t : i) : s.value;
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = function() {
    function i(t, e) {
        return _classCallCheck(this, i), (t = _callSuper(this, i, [ t ]))._upKey = !1, t._downKey = !1, 
        t._leftKey = !1, t._rightKey = !1, t._ignoreInput = !1, t._simUp = !1, t._simDown = !1, 
        t._simLeft = !1, t._simRight = !1, t._dx = 0, t._dy = 0, t._speed = 0, t._maxSpeed = 12, 
        t._acc = 36, t._dec = 28, t._directions = 3, t._angle = 0, t._keyControls = !0, 
        t._defaultControls = !0, t._joyStickControls = !0, t._isEnabled = !0, t._joyStickMoving = !1, 
        t._joyStickData = null, t._vCollision = !1, t._hCollision = !1, t.collisionEngine = t._runtime.renderer.collisionManager, 
        e && (t.type = e.type, t._maxSpeed = e.maxSpeed * t._runtime.devicePixel, t._acc = e.acceleration, 
        t._dec = e.deceleration, t._directions = e.directions, t._keyControls = !!e.keyControl, 
        t._joyStickControls = !!e.joyStickControl, t._joyStickAccurate = !!e.joyStickAccurate, 
        t._joyStickSpeed = !!e.joyStickSpeed, t._isEnabled = !!e.enable, t._moveDistance = e.moveDistance * t._runtime.devicePixel, 
        t._moveInterval = e.moveInterval, t._moveTime = e.moveInterval, t._autoRotate = e.autoRotate, 
        t._defaultRotate = e.defaultRotate), t._isEnabled && t.enable(), t;
    }
    return _inherits(i, LB.SDK.IBehaviorInstanceBase), _createClass(i, [ {
        key: "setEnabled",
        value: function(t) {
            "1" == t ? this.enable() : this.disable();
        }
    }, {
        key: "enable",
        value: function() {
            this._isEnabled = !0, this._keyControls && this._bindKeyEvents(), this._joyStickControls && this._bindJoyStickEvents(), 
            this._startTicking();
        }
    }, {
        key: "disable",
        value: function() {
            this._isEnabled = !1, this._unBindEvents(), this._stopTicking();
        }
    }, {
        key: "_bindKeyEvents",
        value: function() {
            var t = this._runtime.eventEmitter;
            t.on(t.SystemEventType.keydown, this._onKeyDown, this), t.on(t.SystemEventType.keyup, this._onKeyUp, this);
        }
    }, {
        key: "_bindJoyStickEvents",
        value: function() {
            var t = this._runtime.eventEmitter;
            t.on(t.SystemEventType.joyStickStart, this._onJoyStickMove, this), t.on(t.SystemEventType.joyStickMove, this._onJoyStickMove, this), 
            t.on(t.SystemEventType.joyStickStop, this._onJoyStickStop, this);
        }
    }, {
        key: "_unBindEvents",
        value: function() {
            var t = this._runtime.eventEmitter;
            t.off(t.SystemEventType.keydown, this._onKeyDown, this), t.off(t.SystemEventType.keyup, this._onKeyUp, this), 
            t.off(t.SystemEventType.joyStickStart, this._onJoyStickMove, this), t.off(t.SystemEventType.joyStickMove, this._onJoyStickMove, this), 
            t.off(t.SystemEventType.joyStickStop, this._onJoyStickStop, this);
        }
    }, {
        key: "_onJoyStickStop",
        value: function() {
            this._joyStickMoving = !1, this._joyStickData = null, this._joyStickAccurate && (this._dx = 0, 
            this._dy = 0), this._hCollision = !1, this._vCollision = !1;
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
                this._upKey = !0;
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
                this._leftKey = !1, this._vCollision = !1;
                break;

              case "ArrowUp":
                this._upKey = !1, this._hCollision = !1;
                break;

              case "ArrowRight":
                this._rightKey = !1, this._vCollision = !1;
                break;

              case "ArrowDown":
                this._downKey = !1, this._hCollision = !1;
            }
        }
    }, {
        key: "release",
        value: function() {
            this._unBindEvents(), _get(_getPrototypeOf(i.prototype), "release", this).call(this);
        }
    }, {
        key: "_stop",
        value: function() {
            this._dx = 0, this._dy = 0;
        }
    }, {
        key: "tick",
        value: function() {
            var e = this;
            if (this._isEnabled) {
                if (1 === this.type && (this._dx = 0, this._dy = 0, this._moveTime < this._moveInterval)) return this._moveTime++, 
                !1;
                var t, i = this._leftKey || this._simLeft, s = this._rightKey || this._simRight, o = this._upKey || this._simUp, n = this._downKey || this._simDown, _ = (this._simLeft = !1, 
                this._simRight = !1, this._simUp = !1, this._simDown = !1, this._joyStickMoving && 0 !== this._joyStickData.resultX && 0 !== this._joyStickData.resultY ? (1 === this.type ? (this._dx = 100 * this._joyStickData.percentageX, 
                this._dy = 100 * this._joyStickData.percentageY) : this._joyStickAccurate ? (this._dx = this._joyStickData.percentageX * this._maxSpeed, 
                this._dy = this._joyStickData.percentageY * this._maxSpeed) : (.4 < this._joyStickData.percentageX ? s = !0 : this._joyStickData.percentageX < -.4 && (i = !0), 
                .4 < this._joyStickData.percentageY ? n = !0 : this._joyStickData.percentageY < -.4 && (o = !0)), 
                0 === this._directions ? this._dx = 0 : 1 === this._directions ? this._dy = 0 : 2 === this._directions && (Math.abs(this._dy) > Math.abs(this._dx) ? this._dx = 0 : this._dy = 0)) : (0 === this._directions ? i = s = !1 : 1 === this._directions && (o = n = 0), 
                2 === this._directions && (o || n) && (i = s = 0), 1 === this.type ? (i && (this._dx -= 100), 
                s && (this._dx += 100), o && (this._dy -= 100), n && (this._dy += 100)) : (i === s && (this._dx < 0 ? this._dx = Math.min(this._dx + this._dec, 0) : 0 < this._dx && (this._dx = Math.max(this._dx - this._dec, 0))), 
                o === n && (this._dy < 0 ? this._dy = Math.min(this._dy + this._dec, 0) : 0 < this._dy && (this._dy = Math.max(this._dy - this._dec, 0))))), 
                0), r = 0;
                1 === this.type ? (40 < this._dx ? this._dx = this._moveDistance : this._dx < -40 ? this._dx = -this._moveDistance : this._dx = 0, 
                40 < this._dy ? this._dy = this._moveDistance : this._dy < -40 ? this._dy = -this._moveDistance : this._dy = 0) : this._joyStickMoving && this._joyStickAccurate || (0 !== this._directions && i && !s && (_ = 0 < this._dx ? -(this._acc + this._dec) : -this._acc), 
                0 !== this._directions && s && !i && (_ = this._dx < 0 ? this._acc + this._dec : this._acc), 
                1 !== this._directions && o && !n && (r = 0 < this._dy ? -(this._acc + this._dec) : -this._acc), 
                1 !== this._directions && n && !o && (r = this._dy < 0 ? this._acc + this._dec : this._acc), 
                this._dx += _, this._dy += r), 0 !== this._dx || 0 !== this._dy ? (s = Math.sqrt(this._dx * this._dx + this._dy * this._dy), 
                i = Math.atan2(this._dy, this._dx), this._angle = Math.atan2(-this._dy, this._dx), 
                this.angle = Math.round((this._angle / Math.PI * 180 + 360) % 360 * 100) / 100, 
                n = this._maxSpeed * Math.cos(i), o = this._maxSpeed * Math.sin(i), 0 === this.type && (s > this._maxSpeed && (this._dx = n, 
                this._dy = o), this._joyStickMoving) && this._joyStickAccurate && !this._joyStickSpeed && (this._dx = n, 
                this._dy = o), _ = Math.abs(n), r = Math.abs(o), i = this._instance.renderer, s = LB.MathUtil.clamp(this._dx, -_, _), 
                n = LB.MathUtil.clamp(this._dy, -r, r), o = i.getX(), t = i.getY(), this._autoRotate && i.faceTo(this.angle - this._defaultRotate), 
                0 === this.type ? (this._joyStickMoving && !this._joyStickSpeed && (0 < this._dx ? s = _ : this._dx < 0 && (s = -_), 
                0 < this._dy ? n = r : 0 < this._dy && (n = -r)), i.setPosition(o + s), this._speed = Math.sqrt(s * s + n * n)) : (i.setPosition(o + this._dx), 
                this._moveTime = 0, this._speed = Math.abs(this._dx || this._dy)), 0 !== s && (_ = this.collisionEngine.testOverlapSolid(this._instance)) && (this._vCollision || (_.forEach(function(t) {
                    e.collisionEngine.registerCollision(e._instance.id, t.id);
                }), this._vCollision = !0), i.setPosition(o), this._dx = 0), 0 === this.type ? i.setPosition(null, t - n) : i.setPosition(null, t - this._dy), 
                0 !== n && (r = this.collisionEngine.testOverlapSolid(this._instance)) && (this._hCollision || (r.forEach(function(t) {
                    e.collisionEngine.registerCollision(e._instance.id, t.id);
                }), this._hCollision = !0), i.setPosition(null, t), this._dy = 0)) : this._speed = 0;
            }
        }
    } ]);
}();