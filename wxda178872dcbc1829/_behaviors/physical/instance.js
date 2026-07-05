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

function Strip(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2;
    return Math.round(t * Math.pow(10, e)) / Math.pow(10, e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = function() {
    function s(t, e) {
        _classCallCheck(this, s), (t = _callSuper(this, s, [ t ]))._defaultProperties = e, 
        t.PTM_RATIO = 32, t.dprcon = 2 < window.devicePixelRatio ? window.devicePixelRatio / 2 : 1, 
        t._scaleSize = t.PTM_RATIO * t.dprcon;
        var i = t._instance.renderer;
        return t._lastKnownX = Strip(i.x), t._lastKnownY = Strip(i.y), t._lastKnownAngle = Strip(i.rotation), 
        t._lastKnownScale = i.scale, t._lastWidth = Strip(i.width), t._lastHeight = Strip(i.height), 
        t.renderer = t._runtime.renderer, t.physicsSystem = t.behaviorType.physicsSystem, 
        t._enabled = e.enable, e && e.enable && t.openPhysical(), t._startTicking(), t;
    }
    return _inherits(s, LB.SDK.IBehaviorInstanceBase), _createClass(s, [ {
        key: "initProp",
        value: function(t) {
            this.setMass(t.mass), this.setfriction(t.friction), this.setForce(t.force, t.forceDirection), 
            this.setSpeed(t.speed, t.speedDirection), this.setRebound(t.rebound), this.setStaticOrDynamicPhysics(t.type), 
            this.setCollisionPrecision(t.precision), this.setCanRotation(t.canRotation), this.setAngularDamping(t.angularDamping), 
            this.setLinearDamping(t.linearDamping);
        }
    }, {
        key: "release",
        value: function() {
            this.closePhysical(), _get(_getPrototypeOf(s.prototype), "release", this).call(this);
        }
    }, {
        key: "tick",
        value: function(t) {
            var e;
            this._enabled && (e = this._runtime.tickCount) > this.behaviorType.lastUpdateTick && (this.physicsSystem.update(), 
            this.behaviorType.lastUpdateTick = e);
        }
    }, {
        key: "_getTempVec2A",
        value: function(t, e) {
            return a.set_x(t), a.set_y(e), a;
        }
    }, {
        key: "_updateBodyMatchInstance",
        value: function() {
            var t, e, i, s, n, r, o, a = this._instance.renderer, c = this._body;
            c && (a.visible ? (c.IsActive() || c.SetActive(1), t = c.GetPosition(), s = Strip(a.x) !== this._lastKnownX, 
            n = Strip(a.y) !== this._lastKnownY, r = this._lastKnownAngle !== a.rotation, o = Strip(this._lastKnownScale.x) !== Strip(a.scale.x) || Strip(this._lastKnownScale.y) !== Strip(a.scale.y), 
            e = Strip(a.x / this._scaleSize), i = Strip(-a.y / this._scaleSize), r && c.SetAngle(Strip(-a.rotation)), 
            s && c.SetTransformXY(e, Strip(t.y), Strip(c.GetAngle())), n && c.SetTransformXY(Strip(t.x), i, Strip(c.GetAngle())), 
            Strip(a.width) == this._lastWidth && Strip(a.height) == this._lastHeight || (console.log("xxxxxxxxxxxxx"), 
            this.physicsSystem.setScale(this._instance.id)), (s || n || r || o) && !c.IsAwake() && c.SetAwake(!0), 
            isNaN(t.x) || isNaN(t.y) || o ? (this.physicsSystem.destroyFixtureForBody(c), this.physicsSystem.world.DestroyBody(c), 
            e = c.GetType(), delete this.physicsSystem.running_actors[this._instance.id], (i = this.physicsSystem.addToEngineWorld(this._instance.renderer, "false")).SetType(e), 
            this._body = i) : (n = Strip((s = c.GetPosition()).x * this._scaleSize), r = Strip(s.y * this._scaleSize), 
            o = Strip(c.GetAngle()), n !== Strip(a.x) && a.setX(Strip(t.x) * this._scaleSize), 
            r !== Strip(a.y) && a.setY(Strip(t.y) * this._scaleSize), o !== Strip(-a.rotation) && (a.rotation = -Strip(c.GetAngle()))), 
            this._lastKnownX = Strip(a.x), this._lastKnownY = Strip(a.y), this._lastKnownAngle = Strip(a.rotation), 
            this._lastKnownScale = a.scale, this._lastWidth = Strip(a.width), this._lastHeight = Strip(a.height)) : a.visible || c.IsActive() && c.SetActive(0));
        }
    }, {
        key: "setAngularDamping",
        value: function(t) {
            isNaN(Number(t)) || t < 0 || this._body && this._body.SetAngularDamping(parseFloat(t));
        }
    }, {
        key: "setLinearDamping",
        value: function(t) {
            isNaN(Number(t)) || t < 0 || this._body && this._body.SetLinearDamping(parseFloat(t));
        }
    }, {
        key: "setSleepingAllowed",
        value: function(t) {
            t = "false" !== t;
            var e = this._body;
            e && e.SetSleepingAllowed(t);
        }
    }, {
        key: "getPhysicalSpriteProperty",
        value: function(t) {
            var e = this._body;
            if (e) {
                var i = 0;
                switch (t) {
                  case "_rebound_":
                    i = e.GetFixtureList().GetRestitution();
                    break;

                  case "_friction_":
                    i = e.GetFixtureList().GetFriction();
                    break;

                  case "_speed_x_":
                    i = e.GetLinearVelocity().x;
                    break;

                  case "_speed_y_":
                    i = e.GetLinearVelocity().y;
                    break;

                  case "_quality_":
                    i = e.GetMass();
                    break;

                  default:
                    i = 0;
                }
                return +i.toFixed(2);
            }
        }
    }, {
        key: "setCanCollision",
        value: function(t) {
            "false" === t || !1 === t ? this.physicsSystem.setCanCollision(this._instance.id, this._instance.renderer, !0) : this.physicsSystem.setCanCollision(this._instance.id, this._instance.renderer, !1);
        }
    }, {
        key: "setStaticOrDynamicPhysics",
        value: function(t) {
            "false" === t || !1 === t ? this.physicsSystem.setDynamicPhysics(this._instance.id) : this.physicsSystem.setStaticPhysics(this._instance.id);
        }
    }, {
        key: "setCanRotation",
        value: function(t) {
            "false" === t || !1 === t ? this.physicsSystem.disableRotation(this._instance.id) : this.physicsSystem.enableRotation(this._instance.id);
        }
    }, {
        key: "setfriction",
        value: function(t) {
            isNaN(Number(t)) || t < 0 || this.physicsSystem.setFriction(this._instance.id, parseFloat(t));
        }
    }, {
        key: "setCanDump",
        value: function(t) {
            console.error(t);
        }
    }, {
        key: "setRebound",
        value: function(t) {
            isNaN(Number(t)) || t < 0 || this.physicsSystem.setRestitution(this._instance.id, parseFloat(t));
        }
    }, {
        key: "setGravity",
        value: function(t, e) {
            t = parseFloat(t), e = parseFloat(e), isNaN(Number(t)) || isNaN(Number(e)) || t < 0 || this.physicsSystem.setGravity(t, e);
        }
    }, {
        key: "setSpeed",
        value: function(t, e) {
            var i = parseFloat(t), e = parseFloat(e);
            isNaN(Number(i)) || isNaN(Number(e)) || t < 0 || this.physicsSystem.setVelocity(this._instance.id, NaN !== i ? i : 0, NaN !== e ? e : 0);
        }
    }, {
        key: "setForce",
        value: function(t, e) {
            var i = parseFloat(t), e = parseFloat(e);
            isNaN(Number(i)) || isNaN(Number(e)) || t < 0 || this.physicsSystem.setForce(this._instance.id, NaN !== i ? i : 0, NaN !== e ? e : 0);
        }
    }, {
        key: "setMass",
        value: function(t) {
            isNaN(Number(t)) || t < 0 || this.physicsSystem.setMass(this._instance.id, parseFloat(t));
        }
    }, {
        key: "setPhysicalScreenEdge",
        value: function(t) {
            var e = this.physicsSystem;
            if (t) switch (e.clearAllWalls(), t) {
              case "_no_edge_":
                e.clearAllWalls();
                break;

              case "_edge_":
                e.setAllWalls();
                break;

              case "_left_edge_":
                e.setLeftBoundary();
                break;

              case "_right_edge_":
                e.setRightBoundary();
                break;

              case "_top_edge_":
                e.setTopBoundary();
                break;

              case "_bottom_edge_":
                e.setBottomBoundary();
                break;

              case "_right_left_bottom_edge_":
                e.setLeftBoundary(), e.setRightBoundary(), e.setBottomBoundary();
            }
        }
    }, {
        key: "closePhysical",
        value: function() {
            this.physicsSystem.removeFromEngingWorld(this._instance.id), this._enabled = !1;
        }
    }, {
        key: "openPhysical",
        value: function() {
            this._enabled = !0;
            var t = this.physicsSystem.addToEngineWorld(this._instance.id, this._defaultProperties.precision);
            t && (this.physicsSystem.enablePhysics(this._instance.id), this._body || (this._body = t, 
            this.initProp(this._defaultProperties)));
        }
    }, {
        key: "setCollisionPrecision",
        value: function() {
            this.physicsSystem.setCollisionPrecision(this._instance.id, !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]);
        }
    } ]);
}();