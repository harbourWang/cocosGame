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
        Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
        var n = _superPropBase(e, t);
        if (n) return n = Object.getOwnPropertyDescriptor(n, t), n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
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

function _createSuper(r) {
    var n = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(r);
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var TYPE = {
    _edge_: 1,
    _left_edge_: 1,
    _right_edge_: 1,
    _top_edge_: 1,
    _bottom_edge_: 1
}, _default = function() {
    _inherits(n, LB.SDK.IBehaviorInstanceBase);
    var r = _createSuper(n);
    function n(e, t) {
        return _classCallCheck(this, n), (e = r.call(this, e))._blockEngine = e._runtime._blockEngine, 
        e.renderer = e._runtime.renderer, e._speed = t.speed || 0, e._towardsRotation = t.towardsRotation || 0, 
        e._targetList = [], e._sprite = e._instance.renderer, e._sprite.towardsTo(-e._towardsRotation), 
        e._enabled = !!t.enable, t && t.enable && e._startTicking(), e;
    }
    return _createClass(n, [ {
        key: "currentThread",
        get: function() {
            return this._blockEngine.currentThread;
        }
    }, {
        key: "release",
        value: function() {
            _get(_getPrototypeOf(n.prototype), "release", this).call(this);
        }
    }, {
        key: "tick",
        value: function(e) {
            var r = this;
            this._enabled && (this._sprite.goForward(this._speed), this._targetList.forEach(function(e) {
                TYPE[e] ? r._sprite.bounceOfEdge(e) : (e = "string" == typeof (e = r._runtime.runtimeData.checkAndgetSpriteId({
                    str: e,
                    thread: r.currentThread
                })) ? [ e ] : e).forEach(function(e) {
                    try {
                        var t = r.renderer.getSpriteById(e);
                        r._sprite.bounceOfSprite(t);
                    } catch (e) {}
                });
            }));
        }
    }, {
        key: "setSpeed",
        value: function() {}
    }, {
        key: "setTowardsRotation",
        value: function() {}
    }, {
        key: "setEnabled",
        value: function(e) {
            this._enabled = "1" == e;
        }
    }, {
        key: "setBounceOf",
        value: function(e) {
            -1 === this._targetList.indexOf(e) && this._targetList.push(e);
        }
    } ]), n;
}();

exports.default = _default;