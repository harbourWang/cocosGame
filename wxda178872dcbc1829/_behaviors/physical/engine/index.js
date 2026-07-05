Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _b2seperator = _interopRequireDefault(require("./b2seperator.js")), _model = _interopRequireDefault(require("./model.js")), _box2ddebugger = _interopRequireDefault(require("./box2ddebugger.js")), _polygonSeparator = _interopRequireDefault(require("./polygonSeparator")), _config = _interopRequireDefault(require("./config.js")), _utils = require("./utils.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

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
        var o = t[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : e + "";
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var i = e[Symbol.toPrimitive];
    if (void 0 === i) return ("string" === t ? String : Number)(e);
    i = i.call(e, t || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

var jsbox2d = require("@flyover/box2d/dist/box2d.umd.js"), userNative = "undefined" != typeof wx && !!wx.getBox2D && wx.getBox2D(), box2d = userNative ? wx.getBox2D() : jsbox2d, Box2D = (console.log("userNative", userNative), 
box2d.b2BodyType = box2d.b2BodyType || {
    0: "b2_staticBody",
    1: "b2_kinematicBody",
    2: "b2_dynamicBody",
    b2_unknown: -1,
    "-1": "b2_unknown",
    b2_staticBody: 0,
    b2_kinematicBody: 1,
    b2_dynamicBody: 2
}, (0, _b2seperator.default)(box2d), box2d), b2Vec2 = Box2D.b2Vec2, b2BodyDef = Box2D.b2BodyDef, b2Body = Box2D.b2Body, b2FixtureDef = Box2D.b2FixtureDef, b2World = Box2D.b2World, b2PolygonShape = Box2D.b2PolygonShape, b2CircleShape = Box2D.b2CircleShape, b2EdgeShape = Box2D.b2EdgeShape, b2ContactListener = Box2D.b2ContactListener, b2AABB = Box2D.b2AABB, Physics = exports.default = function() {
    function o(e) {
        _classCallCheck(this, o), console.log("Current physics engine: Box2d"), this.running_actors = {}, 
        this.collision_pair = [], this.runtime = e, this.dprcon = 2 < window.devicePixelRatio ? window.devicePixelRatio / 2 : 1, 
        this.PTM_RATIO = 32, this.deps = {}, this.stage = {
            width: 1e3,
            height: 1e3
        }, this.timeStep = 1 / 60, this.modelManager = _model.default.getInstance(), this.debugger = new _box2ddebugger.default(), 
        this.debug = !1, window.box2d = box2d, this.wallTop = 1, this.wallBottom = 2, this.wallLeft = 4, 
        this.wallRight = 8;
    }
    return _createClass(o, [ {
        key: "clear",
        value: function(e) {
            for (var t = this.world.GetBodyList(), i = null; t && (i = t.GetNext()); ) this.world.DestroyBody(t), 
            t = i;
            t && this.world.DestroyBody(t), this.running_actors = {}, e && (o.instance = null), 
            this.wallHasClear = !0;
        }
    }, {
        key: "init",
        value: function(e, t) {
            this.initEngine(), this.fps = e.fps || 60, this.deps = e.deps || {}, this.stage.width = e.width / t.x / this.dprcon, 
            this.stage.height = e.height / t.y / this.dprcon, this.initWalls(), this.debug && !this.runtime.isMiniGame && this.debugger.open(this.stage);
        }
    }, {
        key: "initEngine",
        value: function() {
            this.world = new b2World(new b2Vec2(0, -20)), this.world.SetAllowSleeping(!1);
        }
    }, {
        key: "initWalls",
        value: function(e) {
            var t = this.stage.width / this.PTM_RATIO, i = this.stage.height / this.PTM_RATIO, o = new b2Vec2(-t / 2, -i / 2), n = new b2Vec2(t / 2, -i / 2), r = new b2Vec2(-t / 2, i / 2), t = new b2Vec2(t / 2, i / 2), i = new b2BodyDef(), i = (i.type = box2d.b2BodyType.b2_staticBody, 
            i.position.Set(0, 0), this.world.CreateBody(i)), s = new b2EdgeShape();
            e & this.wallBottom && (s.Set(o, n), i.CreateFixture(s, 0).bits = this.wallBottom), 
            e & this.wallRight && (s.Set(n, t), i.CreateFixture(s, 0).bits = this.wallRight), 
            e & this.wallTop && (s.Set(t, r), i.CreateFixture(s, 0).bits = this.wallTop), e & this.wallLeft && (s.Set(r, o), 
            i.CreateFixture(s, 0).bits = this.wallLeft), this.container = i, this.walls = e;
        }
    }, {
        key: "setAllWalls",
        value: function() {
            this.initWalls(this.wallTop | this.wallBottom | this.wallLeft | this.wallRight);
        }
    }, {
        key: "clearAllWalls",
        value: function() {
            !this.wallHasClear && this.container && (this.world.DestroyBody(this.container), 
            this.container = null);
        }
    }, {
        key: "setTopBoundary",
        value: function() {
            this.initWalls(this.wallTop);
        }
    }, {
        key: "setBottomBoundary",
        value: function() {
            this.initWalls(this.wallBottom);
        }
    }, {
        key: "setLeftBoundary",
        value: function() {
            this.initWalls(this.wallLeft);
        }
    }, {
        key: "setRightBoundary",
        value: function() {
            this.initWalls(this.wallRight);
        }
    }, {
        key: "setActor",
        value: function(e, t) {
            this.running_actors[e] = t;
        }
    }, {
        key: "getActor",
        value: function(e) {
            return this.running_actors[e];
        }
    }, {
        key: "removeFromEngingWorld",
        value: function(e) {
            var t = this.getActor(e);
            t && (this.world.DestroyBody(t), delete this.running_actors[e]);
        }
    }, {
        key: "setCanCollision",
        value: function(e, t, i) {
            var o = this.getActor(e);
            if (o) for (var n = o.GetFixtureList(); n; n = n.GetNext()) n.SetSensor(i); else i || this.addToEngineWorld(e);
        }
    }, {
        key: "createShapes",
        value: function(e, t, i, o) {
            for (var t = t.map(function(e) {
                return {
                    x: e.x - i.width / 2,
                    y: e.y - i.height / 2
                };
            }), n = [], r = _polygonSeparator.default.ConvexPartition(t), s = 0; s < r.length; s++) {
                for (var a = null, l = [], u = null, c = r[s], h = r[s], d = (c.length, 0), y = h.length; d < y; d++) {
                    var a = a || new box2d.b2PolygonShape(), f = new b2Vec2(c[d].x / this.PTM_RATIO / this.dprcon * o.x, c[d].y / this.PTM_RATIO / this.dprcon * o.y);
                    l.push(f), u = u || f, 8 === l.length && (f = b2Vec2.__FROM_ARRAY && b2Vec2.__FROM_ARRAY(l) || l, 
                    a.Set(f, l.length), n.push(a), a = null, d < y - 1) && (l = [ u, l[l.length - 1] ]);
                }
                a && (h = b2Vec2.__FROM_ARRAY && b2Vec2.__FROM_ARRAY(l) || l, a.Set(h, l.length), 
                n.push(a));
            }
            return n;
        }
    }, {
        key: "createBody",
        value: function(e, t) {
            var i, o = this, n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, s = ("container" === t.type && (n = "true" == n ? "rect" : n), 
            _config.default.precisionMap[n]), a = t.scale, l = t._texture, u = ("container" !== t.type && (i = t._texture.baseTexture.source), 
            l && l.width || t.width / a.x), c = l && l.height || t.height / a.y, l = Math.max(t.width / this.dprcon, t.height / this.dprcon) / this.PTM_RATIO / 2, n = ("container" === t.type && ("rect" === n ? (t._config.outline = t._config.outline || {}, 
            u = t._config.outline.width || t.width, c = t._config.outline.height || t.height) : l = t._config.outline.radius / this.PTM_RATIO), 
            [ {
                x: 0,
                y: 0
            }, {
                x: 0,
                y: c
            }, {
                x: u,
                y: c
            }, {
                x: u,
                y: 0
            } ]), h = t.currentFrameId || t.currentStyleId, h = s === _config.default.precisionMap.true && this.modelManager.getModelByImg(h, t._texture), d = [];
            if (s === _config.default.precisionMap.circle) {
                var y = new box2d.b2CircleShape();
                y.m_radius = l, d = [ y ];
            } else {
                i && h && h.length && s !== _config.default.precisionMap.rect || (h = [ n ]);
                try {
                    h.forEach(function(e) {
                        e = o.createShapes(t, e, {
                            width: u,
                            height: c
                        }, a);
                        d = d.concat(e);
                    });
                } catch (e) {
                    console.error(e);
                    d = [], l = this.createShapes(t, n, {
                        width: u,
                        height: c
                    }, a);
                    d = d.concat(l);
                }
            }
            for (var f = 0; f < d.length; f++) {
                var g = d[f], p = new b2FixtureDef();
                p.density = r.density || _config.default.density, p.friction = r.friction || _config.default.friction, 
                p.restitution = r.restitution || _config.default.restitution, p.shape = g, e.CreateFixture(p);
            }
            return t._body = e;
        }
    }, {
        key: "addToEngineWorld",
        value: function(e) {
            var t, i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], o = this.deps.getSpriteById(e);
            if (!o.isBackground) return "container" === o.type && (i = "true" == i ? "rect" : i), 
            this.getActor(e) || ((t = new b2BodyDef()).type = box2d.b2BodyType.b2_staticBody, 
            t.position.Set(0, 0), t = this.world.CreateBody(t), (t = this.createBody(t, o, i)).name = o.name, 
            t.collision_precision = _config.default.precisionMap[i], this.setActor(e, t), this.adjustPosition(e), 
            t.SetAngle ? t.SetAngle(-o.rotation) : t.SetTransform(t.GetPosition(), -o.rotation), 
            t);
        }
    }, {
        key: "setGravity",
        value: function(e, t) {
            e = (0, _utils.velocityDecomposition)(e, (0, _utils.convertDegree2Radian)(t));
            this.world.SetGravity(new b2Vec2(2 * e.x, 2 * -e.y));
        }
    }, {
        key: "setMass",
        value: function(e, t) {
            var i, e = this.getActor(e);
            e && (i = new box2d.b2MassData(), e.GetMassData(i), i.mass = t, e.SetMassData(i));
        }
    }, {
        key: "setRestitution",
        value: function(e, t) {
            e = this.getActor(e);
            if (e) for (var i = e.GetFixtureList(); i; i = i.GetNext()) i.SetRestitution(t);
        }
    }, {
        key: "update",
        value: function() {
            var n = this;
            this.world.Step(this.timeStep, 8, 3), this.render(), Object.keys(this.running_actors);
            Object.keys(this.running_actors).forEach(function(e) {
                var t, i, o = n.running_actors[e], e = n.deps.getSpriteById(e);
                e && o && o.IsAwake() && e.visible && (t = o.GetPosition(), isNaN(t.x) || isNaN(t.y) ? (n.destroyFixtureForBody(o), 
                n.world.DestroyBody(o), i = o.GetType(), delete n.running_actors[e.id], n.addToEngineWorld(e.id, "false").SetType(i)) : (e.ContainerID ? (e.setX(t.x * n.PTM_RATIO * n.dprcon - e.parent.getX()), 
                e.setY(t.y * n.PTM_RATIO * n.dprcon - e.parent.getY())) : (e.setX(t.x * n.PTM_RATIO * n.dprcon), 
                e.setY(t.y * n.PTM_RATIO * n.dprcon)), e.rotation = -o.GetAngle()));
            });
        }
    }, {
        key: "render",
        value: function() {
            this.debug && !this.runtime.isMiniGame && this.debugger.render(this.world, this.stage);
        }
    }, {
        key: "enablePhysics",
        value: function(e) {
            e = this.getActor(e);
            e && e.SetType(box2d.b2BodyType.b2_dynamicBody);
        }
    }, {
        key: "enableRotation",
        value: function(e) {
            e = this.getActor(e);
            e && e.SetFixedRotation(!1);
        }
    }, {
        key: "disableRotation",
        value: function(e) {
            e = this.getActor(e);
            e && e.SetFixedRotation(!0);
        }
    }, {
        key: "setLinearDamping",
        value: function(e, t) {
            e = this.getActor(e);
            e && e.SetLinearDamping(t);
        }
    }, {
        key: "setAngularDamping",
        value: function(e, t) {
            e = this.getActor(e);
            e && e.SetAngularDamping(t);
        }
    }, {
        key: "setVelocity",
        value: function(e, t, i) {
            e = this.getActor(e), t = (0, _utils.velocityDecomposition)(t, (0, _utils.convertDegree2Radian)(-i));
            e && e.SetLinearVelocity(new b2Vec2(t.x, t.y));
        }
    }, {
        key: "setFriction",
        value: function(e, t) {
            e = this.getActor(e);
            if (e) for (var i = e.GetFixtureList(); i; i = i.GetNext()) i.SetFriction(t);
        }
    }, {
        key: "setForce",
        value: function(e, t, i) {
            e = this.getActor(e);
            e && (t = (0, _utils.velocityDecomposition)(100 * t, (0, _utils.convertDegree2Radian)(-i)), 
            e.ApplyForce(new b2Vec2(t.x, t.y), e.GetWorldCenter(), !0));
        }
    }, {
        key: "checkBodyBump",
        value: function(e, t) {
            new Date();
            for (var i = !1, o = userNative ? Box2D.b2TestOverlap : Box2D.b2TestOverlapAABB, n = e.GetFixtureList(); n; n = n.GetNext()) for (var r = n.GetAABB(0), s = t.GetFixtureList(); s; s = s.GetNext()) {
                if (o(r, s.GetAABB(0))) {
                    i = !0;
                    break;
                }
                if (i) break;
            }
            return i;
        }
    }, {
        key: "checkBump",
        value: function(e, t) {
            e = this.getActor(e), t = this.getActor(t);
            return !(!e || !t) && this.checkBodyBump(e, t);
        }
    }, {
        key: "checkBumpWithWall",
        value: function(e, t) {
            void 0 === t && (t = this.wall);
            e = this.getActor(e);
            if (e) {
                for (var i = (0, _utils.getAABBForBody)(e), o = !1, n = userNative ? Box2D.b2TestOverlap : Box2D.b2TestOverlapAABB, r = this.container.GetFixtureList(); r; r = r.GetNext()) if (r.bits && r.bits & t) if (o = n(i, r.GetAABB(0))) break;
                return o;
            }
        }
    }, {
        key: "adjustPosition",
        value: function(e) {
            var t = this.deps.getSpriteById(e), e = this.getActor(e);
            t && e && (t.position, t = new b2Vec2(t.getX(1) / this.PTM_RATIO / this.dprcon, t.getY(1) / this.PTM_RATIO / this.dprcon), 
            userNative ? e.SetTransform(t, e.GetAngle()) : e.SetPosition(t));
        }
    }, {
        key: "setPosition",
        value: function(e) {
            var t = e._body;
            e && t && (e = new b2Vec2(e.getX(1) / this.PTM_RATIO / this.dprcon, e.getY(1) / this.PTM_RATIO / this.dprcon), 
            userNative ? t.SetTransform(e, t.GetAngle()) : t.SetPosition(e));
        }
    }, {
        key: "adjustScale",
        value: function(e) {
            this.deps.getSpriteById(e);
        }
    }, {
        key: "setScale",
        value: function(e) {
            this.syncStyle(e);
        }
    }, {
        key: "setRotation",
        value: function(e, t) {
            e = this.getActor(e);
            e && (e.SetAngle ? e.SetAngle(e.GetAngle() - t) : e.SetTransform(e.GetPosition(), e.GetAngle() - t));
        }
    }, {
        key: "setStaticPhysics",
        value: function(e) {
            e = this.getActor(e);
            e && e.SetType(box2d.b2BodyType.b2_staticBody);
        }
    }, {
        key: "setDynamicPhysics",
        value: function(e) {
            e = this.getActor(e);
            e && e.SetType(box2d.b2BodyType.b2_dynamicBody);
        }
    }, {
        key: "destroyFixtureForBody",
        value: function(t) {
            for (var e, i, o = [], n = t.GetFixtureList(); n; n = n.GetNext()) o.push(n), e = n.GetRestitution(), 
            i = n.GetFriction();
            return o.forEach(function(e) {
                return t.DestroyFixture(e);
            }), {
                restitution: e,
                friction: i
            };
        }
    }, {
        key: "setCollisionPrecision",
        value: function(e, t) {
            var i, o = this.getActor(e);
            o && o.collision_precision !== t && (i = this.destroyFixtureForBody(o), this.createBody(o, this.deps.getSpriteById(e), t, i));
        }
    }, {
        key: "release",
        value: function() {
            this.modelManager && (this.modelManager.release(), this.modelManager = null), o.instance = null;
        }
    }, {
        key: "syncStyle",
        value: function(e) {
            var t, i, o = this.getActor(e);
            o && (t = o.collision_precision, i = this.destroyFixtureForBody(o), this.createBody(o, this.deps.getSpriteById(e), t, i));
        }
    } ], [ {
        key: "getInstance",
        value: function(e, t, i) {
            return o.instance || (o.instance = new o(i)).init(e, t), o.instance;
        }
    } ]);
}();