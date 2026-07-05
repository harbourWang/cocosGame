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

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var n = _superPropBase(e, t);
        if (n) return (n = Object.getOwnPropertyDescriptor(n, t)).get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }).apply(null, arguments);
}

function _superPropBase(e, t) {
    for (;!{}.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); ) ;
    return e;
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

function _defineProperty(e, t, r) {
    return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = function() {
    function n(e, t) {
        _classCallCheck(this, n), _defineProperty(e = _callSuper(this, n, [ e ]), "angleTo", function(e, t, r, n) {
            return Math.atan2(n - t, r - e);
        }), _defineProperty(e, "clampAngle", function(e) {
            var t = 2 * Math.PI;
            return (e %= t) < 0 && (e += t), e;
        }), _defineProperty(e, "angleRotate", function(e, t, r) {
            var n = Math.cos, o = Math.sin, i = o(e), a = n(e), o = o(t), n = n(t);
            return Math.acos(i * o + a * n) > r ? 0 < a * o - i * n ? this.clampAngle(e + r) : this.clampAngle(e - r) : this.clampAngle(t);
        }), e.targetListId = [];
        var r = e._runtime.devicePixel;
        return e._range = 300 * r, e._rateOfFire = 1, e._isRotateEnabled = !0, e._rotateSpeed = Math.PI, 
        e._targetMode = 0, e._predictiveAim = !1, e._projectileSpeed = 500, e._useCollisionCells = !0, 
        e._isEnabled = !0, e._lastCheckTime = 0, e._fireTimeCount = 0, e._currentTarget = null, 
        e._loadTargetUid = -1, e._oldTargetX = 0, e._oldTargetY = 0, e._lastSpeeds = [ 0, 0, 0, 0 ], 
        e._speedsCount = 0, e._firstTickWithTarget = !0, t && (e._isEnabled = !!t.enable, 
        e._range = t.shootRange * r || e._range, e._isRotateEnabled = !!t.isRotate, e._rotateSpeed = t.rotateSpeed / 180 * Math.PI || e._rotateSpeed), 
        e._isEnabled && e.enable(), e;
    }
    return _inherits(n, LB.SDK.IBehaviorInstanceBase), _createClass(n, [ {
        key: "setEnabled",
        value: function(e) {
            1 === e ? this.enable() : this.disable();
        }
    }, {
        key: "setRangle",
        value: function(e) {
            this._range = e * this._runtime.devicePixel;
        }
    }, {
        key: "getRangle",
        value: function() {
            return this._range / this._runtime.devicePixel;
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
        key: "_addTarget",
        value: function(e) {
            -1 === this.targetListId.indexOf(e) && this.targetListId.push(e);
        }
    }, {
        key: "getAngle",
        value: function() {
            var e, t = this._instance.renderer;
            return this._currentTarget ? (e = this._currentTarget.renderer, 360 * (0 < (t = this.angleTo(t.getX(), t.getY(), e.getX(), e.getY())) ? t : 2 * Math.PI + t) / (2 * Math.PI)) : 0;
        }
    }, {
        key: "tick",
        value: function(e) {
            var t, r;
            this._isEnabled && (t = this._instance.renderer, this.lookForNearestTarget(), this._currentTarget) && (r = this._currentTarget.renderer, 
            r = this.angleTo(t.getX(), t.getY(), r.getX(), r.getY()), r = 180 / Math.PI * this.angleRotate(t.getRotation() / 180 * Math.PI, r, this._rotateSpeed * e), 
            this._isRotateEnabled) && t.rotateTo(r);
        }
    }, {
        key: "lookForNearestTarget",
        value: function() {
            var e, t = this._instance.renderer, r = t.getX(), n = t.getY(), o = this._runtime.runtimeData, i = {}, a = (this.targetListId.forEach(function(e) {
                (o.getCloneListById(e) || []).forEach(function(e) {
                    var t = o.getSpriteById(e);
                    t && t.renderer.visible && (i[e] = t);
                });
            }), this._range * this._range);
            for (e in this._currentTarget = null, i) {
                var s = i[e].renderer, l = r - s.getX(), s = n - s.getY(), l = l * l + s * s;
                l < a && (this._currentTarget = i[e], a = l);
            }
            i = {};
        }
    } ]);
}();