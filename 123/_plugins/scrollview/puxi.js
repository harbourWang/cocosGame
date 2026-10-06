function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _createForOfIteratorHelper(t, e) {
    var i, n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) return n && (t = n), 
        i = 0, {
            s: e = function() {},
            n: function() {
                return i >= t.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: t[i++]
                };
            },
            e: function(t) {
                throw t;
            },
            f: e
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var s, r = !0, o = !1;
    return {
        s: function() {
            n = n.call(t);
        },
        n: function() {
            var t = n.next();
            return r = t.done, t;
        },
        e: function(t) {
            o = !0, s = t;
        },
        f: function() {
            try {
                r || null == n.return || n.return();
            } finally {
                if (o) throw s;
            }
        }
    };
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
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
}

function _iterableToArrayLimit(t, e) {
    var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (null != i) {
        var n, s, r = [], o = !0, a = !1;
        try {
            for (i = i.call(t); !(o = (n = i.next()).done) && (r.push(n.value), !e || r.length !== e); o = !0) ;
        } catch (t) {
            a = !0, s = t;
        } finally {
            try {
                o || null == i.return || i.return();
            } finally {
                if (a) throw s;
            }
        }
        return r;
    }
}

function _arrayWithHoles(t) {
    if (Array.isArray(t)) return t;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
        var n = _superPropBase(t, e);
        if (n) return n = Object.getOwnPropertyDescriptor(n, e), n.get ? n.get.call(arguments.length < 3 ? t : i) : n.value;
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
    var n = _isNativeReflectConstruct();
    return function() {
        var t, e = _getPrototypeOf(i);
        return _possibleConstructorReturn(this, n ? (t = _getPrototypeOf(this).constructor, 
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

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(t, n.key, n);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var puxi_js = function(E, p, H) {
    var o = [], N = function(t, e) {
        return t._dragDropEventId = e.data.identifier, -1 === o.indexOf(t) && (o.push(t), 
        !0);
    }, B = function(t) {
        for (var e, i = null, n = 0; n < o.length; n++) if (o[n] === t) {
            i = o[n], e = n;
            break;
        }
        return null !== i && (o.splice(e, 1), i);
    }, W = function(t, e) {
        for (var i, n = null, s = t.data.identifier, r = 0; r < o.length; r++) if (o[r]._dragDropEventId === s) {
            if (e !== o[r].dragGroup) return !1;
            n = o[r], i = r;
            break;
        }
        return null !== n && (o.splice(i, 1), n);
    }, F = function() {
        function t() {
            _classCallCheck(this, t), this.reset(), this.dirtyId = 0;
        }
        return _createClass(t, [ {
            key: "reset",
            value: function() {
                this.left = -1, this.top = -1, this.right = -1, this.bottom = -1;
            }
        } ]), t;
    }(), t = ((e = E.MeasureMode || (E.MeasureMode = {}))[e.UNBOUNDED = 0] = "UNBOUNDED", 
    e[e.EXACTLY = 1] = "EXACTLY", e[e.AT_MOST = 2] = "AT_MOST", function() {
        function e(t) {
            _classCallCheck(this, e), this.target = t, this.isEnabled = !1;
        }
        return _createClass(e, [ {
            key: "getTarget",
            value: function() {
                return this.target;
            }
        } ]), e;
    }()), e = function() {
        _inherits(r, t);
        var s = _createSuper(r);
        function r(t, e, i, n) {
            var a;
            return _classCallCheck(this, r), (a = s.call(this, t)).startEvent = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : a._includeHover, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a._rightMouseButton, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a._doubleClick;
                a.isEnabled || (a._includeHover = t, a.rightMouseButton = e, a._doubleClick = i, 
                (t = _assertThisInitialized(a).target).insetContainer.on(a.evMouseDown, a.onMouseDownImpl), 
                a._rightMouseButton || t.insetContainer.on("touchstart", a.onMouseDownImpl), a._includeHover && (t.insetContainer.on("mouseover", a.onMouseOverImpl), 
                t.insetContainer.on("mouseout", a.onMouseOutImpl)), a.isEnabled = !0);
            }, a.stopEvent = function() {
                var t;
                a.isEnabled && (t = _assertThisInitialized(a).target, a.bound && (t.insetContainer.removeListener(a.evMouseUp, a.onMouseUpImpl), 
                t.insetContainer.removeListener(a.evMouseUpOutside, a.onMouseUpOutsideImpl), a._rightMouseButton || (t.insetContainer.removeListener("touchend", a.onMouseUpImpl), 
                t.insetContainer.removeListener("touchendoutside", a.onMouseUpOutsideImpl)), a.bound = !1), 
                t.insetContainer.removeListener(a.evMouseDown, a.onMouseDownImpl), a._rightMouseButton || t.insetContainer.removeListener("touchstart", a.onMouseDownImpl), 
                a._includeHover && (t.insetContainer.removeListener("mouseover", a.onMouseOverImpl), 
                t.insetContainer.removeListener("mouseout", a.onMouseOutImpl), t.insetContainer.removeListener("mousemove", a.onMouseMoveImpl), 
                t.insetContainer.removeListener("touchmove", a.onMouseMoveImpl)), a.isEnabled = !1);
            }, a.onMouseDownImpl = function(t) {
                var e = _assertThisInitialized(a), i = e.target, n = e.evMouseUp, s = e.onMouseUpImpl, r = e.evMouseUpOutside, o = e.onMouseUpOutsideImpl, e = e._rightMouseButton;
                a.mouse.copyFrom(t.data.global), a.id = t.data.identifier, a.onPress.call(a.target, t, !0), 
                a.bound || (i.insetContainer.on(n, s), i.insetContainer.on(r, o), e || (i.insetContainer.on("touchend", s), 
                i.insetContainer.on("touchendoutside", o)), a.bound = !0), a._doubleClick && ((n = performance.now()) - a.time < 210 ? a.onClick.call(i, t) : a.time = n), 
                t.data.originalEvent.preventDefault();
            }, a.onMouseUpCommonImpl = function(t) {
                var e = _assertThisInitialized(a), i = e.target, n = e.evMouseUp, s = e.onMouseUpImpl, r = e.evMouseUpOutside, e = e.onMouseUpOutsideImpl;
                t.data.identifier === a.id && (a.offset.set(t.data.global.x - a.mouse.x, t.data.global.y - a.mouse.y), 
                a.bound && (i.insetContainer.removeListener(n, s), i.insetContainer.removeListener(r, e), 
                a._rightMouseButton || (i.insetContainer.removeListener("touchend", s), i.insetContainer.removeListener("touchendoutside", e)), 
                a.bound = !1), a.onPress.call(i, t, !1));
            }, a.onMouseUpImpl = function(t) {
                t.data.identifier === a.id && (a.onMouseUpCommonImpl(t), a.target.dragThreshold && (a.movementX = Math.abs(a.offset.x), 
                a.movementY = Math.abs(a.offset.y), Math.max(a.movementX, a.movementY) > a.target.dragThreshold) || a._doubleClick || a.onClick.call(a.target, t));
            }, a.onMouseUpOutsideImpl = function(t) {
                t.data.identifier === a.id && a.onMouseUpCommonImpl(t);
            }, a.onMouseOverImpl = function(t) {
                a.ishover || (a.ishover = !0, a.target.insetContainer.on("mousemove", a.onMouseMoveImpl), 
                a.target.insetContainer.on("touchmove", a.onMouseMoveImpl), a.onHover.call(a.target, t, !0));
            }, a.onMouseOutImpl = function(t) {
                a.ishover && (a.ishover = !1, a.target.insetContainer.removeListener("mousemove", a.onMouseMoveImpl), 
                a.target.insetContainer.removeListener("touchmove", a.onMouseMoveImpl), a.onHover.call(a.target, t, !1));
            }, a.onMouseMoveImpl = function(t) {
                a.onMove.call(a.target, t);
            }, a.bound = !1, a.id = 0, a.ishover = !1, a.mouse = new p.Point(), a.offset = new p.Point(), 
            a.movementX = 0, a.movementY = 0, a._includeHover = void 0 === e || e, a.rightMouseButton = void 0 !== i && i, 
            a._doubleClick = void 0 !== n && n, t.interactive = !0, a.time = 0, a.startEvent(), 
            a.onHover = function() {
                return null;
            }, a.onPress = function() {
                return null;
            }, a.onClick = function() {
                return null;
            }, a.onMove = function() {
                return null;
            }, a;
        }
        return _createClass(r, [ {
            key: "rightMouseButton",
            get: function() {
                return this._rightMouseButton;
            },
            set: function(t) {
                this._rightMouseButton = t, this.evMouseDown = this._rightMouseButton ? "rightdown" : "mousedown", 
                this.evMouseUp = this._rightMouseButton ? "rightup" : "mouseup", this.evMouseUpOutside = this._rightMouseButton ? "rightupoutside" : "mouseupoutside";
            }
        } ]), r;
    }(), V = function() {
        _inherits(i, t);
        var e = _createSuper(i);
        function i(t) {
            var r;
            return _classCallCheck(this, i), (r = e.call(this, t)).onDragStartImpl = function(t) {
                var e = _assertThisInitialized(r).target;
                r.id = t.data.identifier, r.onPress(t, !0), r.isBound || (r.dragStart.copyFrom(t.data.global), 
                e.stage.on("mousemove", r.onDragMoveImpl), e.stage.on("touchmove", r.onDragMoveImpl), 
                e.stage.on("mouseup", r.onDragEndImpl), e.stage.on("mouseupoutside", r.onDragEndImpl), 
                e.stage.on("touchend", r.onDragEndImpl), e.stage.on("touchendoutside", r.onDragEndImpl), 
                e.stage.on("touchcancel", r.onDragEndImpl), r.isBound = !0), t.data.originalEvent.preventDefault();
            }, r.onDragMoveImpl = function(t) {
                if (t.data.identifier === r.id) {
                    var e = _assertThisInitialized(r), i = e.lastCursor, n = e.dragOffset, s = e.dragStart, e = e.target;
                    if (r.lastCursor.copyFrom(t.data.global), r.dragOffset.set(i.x - s.x, i.y - s.y), 
                    !r.isDragging) {
                        if (r.movementX = Math.abs(n.x), r.movementY = Math.abs(n.y), 0 === r.movementX && 0 === r.movementY || Math.max(r.movementX, r.movementY) < e.dragThreshold) return;
                        if (null !== e.dragRestrictAxis && (r.cancel = !1, ("x" === e.dragRestrictAxis && r.movementY > r.movementX || "y" === e.dragRestrictAxis && r.movementY <= r.movementX) && (r.cancel = !0), 
                        r.cancel)) return void r.onDragEndImpl(t);
                        r.onDragStart(t), r.isDragging = !0;
                    }
                    r.onDragMove(t, n);
                }
            }, r.onDragEndImpl = function(t) {
                var e;
                t.data.identifier === r.id && (e = _assertThisInitialized(r).target, r.isBound && (e.stage.removeListener("mousemove", r.onDragMoveImpl), 
                e.stage.removeListener("touchmove", r.onDragMoveImpl), e.stage.removeListener("mouseup", r.onDragEndImpl), 
                e.stage.removeListener("mouseupoutside", r.onDragEndImpl), e.stage.removeListener("touchend", r.onDragEndImpl), 
                e.stage.removeListener("touchendoutside", r.onDragEndImpl), e.stage.removeListener("touchcancel", r.onDragEndImpl), 
                r.isDragging = !1, r.isBound = !1, r.onDragEnd(t), r.onPress(t, !1)));
            }, r.isBound = !1, r.isDragging = !1, r.id = 0, r.dragStart = new p.Point(), r.dragOffset = new p.Point(), 
            r.lastCursor = new p.Point(), r.movementX = 0, r.movementY = 0, r.cancel = !1, r.target.interactive = !0, 
            r.onPress = function() {
                return null;
            }, r.onDragStart = function() {
                return null;
            }, r.onDragMove = function() {
                return null;
            }, r.onDragEnd = function() {
                return null;
            }, r.startEvent(), r;
        }
        return _createClass(i, [ {
            key: "startEvent",
            value: function() {
                var t;
                this.isEnabled || ((t = this.target).insetContainer.on("mousedown", this.onDragStartImpl), 
                t.insetContainer.on("touchstart", this.onDragStartImpl), this.isEnabled = !0);
            }
        }, {
            key: "stopEvent",
            value: function() {
                var t;
                this.isEnabled && (t = this.target, this.isBound && (t.stage.removeListener("mousemove", this.onDragMoveImpl), 
                t.stage.removeListener("touchmove", this.onDragMoveImpl), t.stage.removeListener("mouseup", this.onDragEndImpl), 
                t.stage.removeListener("mouseupoutside", this.onDragEndImpl), t.stage.removeListener("touchend", this.onDragEndImpl), 
                t.stage.removeListener("touchendoutside", this.onDragEndImpl), this.isBound = !1), 
                t.insetContainer.removeListener("mousedown", this.onDragStartImpl), t.insetContainer.removeListener("touchstart", this.onDragStartImpl), 
                this.isEnabled = !1);
            }
        } ]), i;
    }(), n = _createClass(function e(t) {
        for (var i = this, n = (_classCallCheck(this, e), this.target = t, 0), s = Object.keys(e.MANAGER_MAP); n < s.length; n++) !function() {
            var t = s[n];
            Object.defineProperty(i, t, {
                get: function() {
                    return this["_".concat(t)] || (this["_".concat(t)] = new e.MANAGER_MAP[t](this.target)), 
                    this["_".concat(t)];
                }
            });
        }();
    }), G = (n.MANAGER_MAP = {
        click: e,
        dnd: V
    }, function() {
        _inherits(s, t);
        var i = _createSuper(s);
        function s(t) {
            var n, e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            return _classCallCheck(this, s), (n = i.call(this, t)).onMouseScrollImpl = function(t) {
                var e = _assertThisInitialized(n), i = e.target, e = (e.preventDefault, e.delta);
                void 0 !== t.deltaX ? e.set(t.deltaX, t.deltaY) : e.set(1 === t.axis ? 60 * t.detail : 0, 2 === t.axis ? 60 * t.detail : 0), 
                n.onMouseScroll.call(i, event, e);
            }, n.onHoverImpl = function(t) {
                var e = _assertThisInitialized(n).onMouseScrollImpl;
                n.bound || (document.addEventListener("mousewheel", e, !1), document.addEventListener("DOMMouseScroll", e, !1), 
                n.bound = !0);
            }, n.onMouseOutImpl = function(t) {
                var e = _assertThisInitialized(n).onMouseScrollImpl;
                n.bound && (document.removeEventListener("mousewheel", e), document.removeEventListener("DOMMouseScroll", e), 
                n.bound = !1);
            }, n.onMouseScroll = function(t, e) {}, n.bound = !1, n.delta = new p.Point(), n.preventDefault = e, 
            n.startEvent(), n;
        }
        return _createClass(s, [ {
            key: "startEvent",
            value: function() {
                var t = this.target, e = this.onHoverImpl, i = this.onMouseOutImpl;
                t.contentContainer.on("mouseover", e), t.contentContainer.on("mouseout", i);
            }
        }, {
            key: "stopEvent",
            value: function() {
                var t = this.target, e = this.onMouseScrollImpl, i = this.onHoverImpl, n = this.onMouseOutImpl;
                this.bound && (document.removeEventListener("mousewheel", e), document.removeEventListener("DOMMouseScroll", e), 
                this.bound = !1), t.contentContainer.removeListener("mouseover", i), t.contentContainer.removeListener("mouseout", n);
            }
        } ]), s;
    }()), I = function() {
        _inherits(i, p.utils.EventEmitter);
        var e = _createSuper(i);
        function i() {
            var t;
            return _classCallCheck(this, i), (t = e.call(this)).insetContainer = new p.Container(), 
            t.contentContainer = t.insetContainer.addChild(new p.Container()), t.widgetChildren = [], 
            t.stage = null, t.layoutMeasure = new F(), t.initialized = !1, t.dragInitialized = !1, 
            t.dropInitialized = !1, t.dirty = !0, t._oldWidth = -1, t._oldHeight = -1, t.pixelPerfect = !0, 
            t._paddingLeft = 0, t._paddingTop = 0, t._paddingRight = 0, t._paddingBottom = 0, 
            t._elevation = 0, t.tint = 0, t.blendMode = p.BLEND_MODES.NORMAL, t.draggable = !1, 
            t.droppable = !1, t;
        }
        return _createClass(i, [ {
            key: "update",
            value: function() {
                var t = this;
                this._layoutDirty && (console.log("here"), setTimeout(function() {
                    t._layoutDirty && t.stage.measureAndLayout();
                }, 0));
            }
        }, {
            key: "measuredWidth",
            get: function() {
                return this._measuredWidth;
            }
        }, {
            key: "measuredHeight",
            get: function() {
                return this._measuredHeight;
            }
        }, {
            key: "getMeasuredWidth",
            value: function() {
                return this._measuredWidth;
            }
        }, {
            key: "getMeasuredHeight",
            value: function() {
                return this._measuredHeight;
            }
        }, {
            key: "onMeasure",
            value: function(t, e, i, n) {
                var s = this.contentContainer.width + this.paddingHorizontal, r = this.contentContainer.height + this.paddingVertical;
                switch (i) {
                  case E.MeasureMode.EXACTLY:
                    this._measuredWidth = t;
                    break;

                  case E.MeasureMode.UNBOUNDED:
                    this._measuredWidth = s;
                    break;

                  case E.MeasureMode.AT_MOST:
                    this._measuredWidth = Math.min(t, s);
                }
                switch (n) {
                  case E.MeasureMode.EXACTLY:
                    this._measuredHeight = e;
                    break;

                  case E.MeasureMode.UNBOUNDED:
                    this._measuredHeight = r;
                    break;

                  case E.MeasureMode.AT_MOST:
                    this._measuredHeight = Math.min(e, r);
                }
            }
        }, {
            key: "measure",
            value: function(t, e, i, n) {
                this.onMeasure(t, e, i, n);
            }
        }, {
            key: "onLayout",
            value: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t, n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : e;
                this.layoutMeasure.left = t, this.layoutMeasure.top = e, this.layoutMeasure.right = i, 
                this.layoutMeasure.bottom = n, this._width = i - t, this._height = n - e, this.background && (this.background.x = 0, 
                this.background.y = 0, this.background.width = i - t, this.background.height = n - e), 
                this.insetContainer.x = t, this.insetContainer.y = e, this.contentContainer.x = this._paddingLeft, 
                this.contentContainer.y = this._paddingTop, this._layoutDirty = !1;
            }
        }, {
            key: "layout",
            value: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t;
                this.onLayout(t, e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t, 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : e, !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4]);
            }
        }, {
            key: "setLayoutOptions",
            value: function(t) {
                return this.layoutOptions = t, this;
            }
        }, {
            key: "eventBroker",
            get: function() {
                return this._eventBroker || (this._eventBroker = new n(this)), this._eventBroker;
            }
        }, {
            key: "paddingLeft",
            get: function() {
                return this._paddingLeft;
            },
            set: function(t) {
                this._paddingLeft = t, this.dirty = !0;
            }
        }, {
            key: "paddingTop",
            get: function() {
                return this._paddingTop;
            },
            set: function(t) {
                this._paddingTop = t, this.dirty = !0;
            }
        }, {
            key: "paddingRight",
            get: function() {
                return this._paddingRight;
            },
            set: function(t) {
                this._paddingRight = t, this.dirty = !0;
            }
        }, {
            key: "paddingBottom",
            get: function() {
                return this._paddingBottom;
            },
            set: function(t) {
                this._paddingBottom = t, this.dirty = !0;
            }
        }, {
            key: "paddingHorizontal",
            get: function() {
                return this._paddingLeft + this._paddingRight;
            }
        }, {
            key: "paddingVertical",
            get: function() {
                return this._paddingTop + this._paddingBottom;
            }
        }, {
            key: "interactive",
            get: function() {
                return this.insetContainer.interactive;
            },
            set: function(t) {
                this.insetContainer.interactive = !0, this.contentContainer.interactive = !0;
            }
        }, {
            key: "width",
            get: function() {
                return this._width;
            }
        }, {
            key: "height",
            get: function() {
                return this._height;
            }
        }, {
            key: "contentWidth",
            get: function() {
                return this._width - this.paddingHorizontal;
            }
        }, {
            key: "contentHeight",
            get: function() {
                return this._height - this.paddingVertical;
            }
        }, {
            key: "alpha",
            get: function() {
                return this.insetContainer.alpha;
            },
            set: function(t) {
                this.insetContainer.alpha = t;
            }
        }, {
            key: "setPadding",
            value: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t, n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : e;
                return this._paddingLeft = t, this._paddingTop = e, this._paddingRight = i, this._paddingBottom = n, 
                this.dirty = !0, this;
            }
        }, {
            key: "getBackground",
            value: function() {
                return this.background;
            }
        }, {
            key: "setBackground",
            value: function(t) {
                return this.background && this.insetContainer.removeChild(this.background), "number" == typeof (t = "string" == typeof t ? p.utils.string2hex(t) : t) && (t = new p.Graphics().beginFill(t).drawRect(0, 0, 1, 1).endFill()), 
                (this.background = t) && (t.width = this.width, t.height = this.height, this.insetContainer.addChildAt(t, 0)), 
                t && this._elevation && this._dropShadow && (this.background.filters || (this.background.filters = []), 
                this.background.filters.push(this._dropShadow)), this;
            }
        }, {
            key: "getBackgroundAlpha",
            value: function() {
                return this.background ? this.background.alpha : 1;
            }
        }, {
            key: "setBackgroundAlpha",
            value: function(t) {
                return this.background || this.setBackground(16777215), this.background.alpha = t, 
                this;
            }
        }, {
            key: "getElevation",
            value: function() {
                return this._elevation;
            }
        }, {
            key: "setElevation",
            value: function(t) {
                if (0 === (this._elevation = t) && this._dropShadow) {
                    if (!this.background) return this;
                    var e = this.background.filters.indexOf(this._dropShadow);
                    0 < e && this.background.filters.splice(e, 1);
                } else 0 < t && (this._dropShadow || (this.background && !this.background.filters && (this.background.filters = []), 
                this._dropShadow = new H.DropShadowFilter({
                    distance: t
                }), this.background && this.background.filters.push(this._dropShadow)), this._dropShadow.distance = t);
                return this;
            }
        }, {
            key: "requestLayout",
            value: function() {
                this._layoutDirty = !0;
            }
        }, {
            key: "addChild",
            value: function() {
                for (var t = 0; t < arguments.length; t++) {
                    var e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                    e.parent && e.parent.removeChild(e), (e.parent = this).contentContainer.addChild(e.insetContainer), 
                    this.widgetChildren.push(e);
                }
                return this;
            }
        }, {
            key: "removeChild",
            value: function() {
                for (var t = 0; t < arguments.length; t++) {
                    var e = t < 0 || arguments.length <= t ? void 0 : arguments[t], i = this.widgetChildren.indexOf(e);
                    -1 !== i && (e.insetContainer.parent.removeChild(e.insetContainer), this.widgetChildren.splice(i, 1), 
                    e.parent = null);
                }
                return this;
            }
        }, {
            key: "makeDraggable",
            value: function() {
                return this.draggable = !0, this.initialized && this.initDraggable(), this;
            }
        }, {
            key: "clearDraggable",
            value: function() {
                this.dragInitialized && (this.dragInitialized = !1, this.eventBroker.dnd.stopEvent());
            }
        }, {
            key: "initialize",
            value: function() {
                this.initialized || (this.draggable && this.initDraggable(), this.droppable && this.initDroppable(), 
                this.initialized = !0);
            }
        }, {
            key: "initDraggable",
            value: function() {
                var i, n, t, s, r = this;
                this.dragInitialized || (this.dragInitialized = !0, i = new p.Point(), n = new p.Point(), 
                t = this.eventBroker.dnd, s = this.insetContainer, t.onDragStart = function(t) {
                    var e = N(r, t);
                    !r.isDragging && e && (r.isDragging = !0, s.interactive = !1, i.copyFrom(s.position), 
                    r.emit("draggablestart", t));
                }, t.onDragMove = function(t, e) {
                    r.isDragging && (n.set(i.x + e.x, i.y + e.y), s.x = n.x, s.y = n.y, r.emit("draggablemove", t));
                }, t.onDragEnd = function(t) {
                    r.isDragging && (r.isDragging = !1, B(r), setTimeout(function() {
                        r.insetContainer.interactive = !0, r.insetContainer.position.copyFrom(i), r.emit("draggableend", t);
                    }, 0));
                });
            }
        }, {
            key: "makeDroppable",
            value: function() {
                return this.droppable = !0, this.initialized && this.initDroppable(), this;
            }
        }, {
            key: "clearDroppable",
            value: function() {
                this.dropInitialized && (this.dropInitialized = !1, this.contentContainer.removeListener("mouseup", this.onDrop), 
                this.contentContainer.removeListener("touchend", this.onDrop));
            }
        }, {
            key: "initDroppable",
            value: function() {
                var t, i = this;
                this.dropInitialized || (this.dropInitialized = !0, t = this.contentContainer, this.contentContainer.interactive = !0, 
                this.onDrop = function(t) {
                    var e, t = W(t, i.dropGroup);
                    t && t.isDragging && (t.isDragging = !1, t.insetContainer.interactive = !0, (e = null !== i.droppableReparent ? i.droppableReparent : self).container.toLocal(t.container.position, t.container.parent, t), 
                    e.container != t.container.parent && e.addChild(t));
                }, t.on("mouseup", this.onDrop), t.on("touchend", this.onDrop));
            }
        } ], [ {
            key: "fromContent",
            value: function(t) {
                if (t instanceof i) return t;
                var e = new i();
                return e.contentContainer.addChild(t), e;
            }
        }, {
            key: "resolveMeasuredDimen",
            value: function(t, e, i) {
                return i === E.MeasureMode.EXACTLY ? e : i === E.MeasureMode.AT_MOST ? Math.min(e, t) : t;
            }
        } ]), i;
    }(), O = ((i = E.ALIGN || (E.ALIGN = {}))[i.LEFT = 0] = "LEFT", i[i.TOP = 0] = "TOP", 
    i[i.MIDDLE = 4081] = "MIDDLE", i[i.CENTER = 4081] = "CENTER", i[i.RIGHT = 1048561] = "RIGHT", 
    i[i.BOTTOM = 1048561] = "BOTTOM", i[i.NONE = 4294967295] = "NONE", function() {
        function i() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : i.WRAP_CONTENT, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : i.WRAP_CONTENT;
            _classCallCheck(this, i), this.setWidth(t), this.setHeight(e), this.cache = {};
        }
        return _createClass(i, [ {
            key: "setWidth",
            value: function(t) {
                this.width = i.parseDimen(t);
            }
        }, {
            key: "setHeight",
            value: function(t) {
                this.height = i.parseDimen(t);
            }
        }, {
            key: "isWidthPredefined",
            get: function() {
                return 1 < this.width && this.width <= i.MAX_DIMEN;
            }
        }, {
            key: "isHeightPredefined",
            get: function() {
                return 1 < this.height && this.height <= i.MAX_DIMEN;
            }
        }, {
            key: "marginLeft",
            get: function() {
                return this._marginLeft || 0;
            },
            set: function(t) {
                this._marginLeft = t;
            }
        }, {
            key: "marginTop",
            get: function() {
                return this._marginTop || 0;
            },
            set: function(t) {
                this._marginTop = t;
            }
        }, {
            key: "marginRight",
            get: function() {
                return this._marginRight || 0;
            },
            set: function(t) {
                this._marginRight = t;
            }
        }, {
            key: "marginBottom",
            get: function() {
                return this._marginBottom || 0;
            },
            set: function(t) {
                this._marginBottom = t;
            }
        }, {
            key: "setMargin",
            value: function(t, e, i, n) {
                this._marginLeft = t, this._marginTop = e, this._marginRight = i, this._marginBottom = n;
            }
        } ], [ {
            key: "parseDimen",
            value: function(t) {
                if ("string" == typeof t && (t.endsWith("%") ? t = parseFloat(t.replace("%", "")) / 100 : t.endsWith("px") && (t = parseFloat(t.replace("px", ""))), 
                "string" == typeof t || isNaN(t))) throw new Error("Width could not be parsed!");
                return t;
            }
        } ]), i;
    }()), i = (O.FILL_PARENT = 4294967281, O.WRAP_CONTENT = 4294967282, O.MAX_DIMEN = 4294967280, 
    O.DEFAULT = new O(), function() {
        _inherits(n, O);
        var i = _createSuper(n);
        function n(t) {
            var e;
            return _classCallCheck(this, n), (e = i.call(this, t.width, t.height)).anchorLeft = t.anchorLeft || 0, 
            e.anchorTop = t.anchorTop || 0, e.anchorBottom = t.anchorBottom || 0, e.anchorRight = t.anchorRight || 0, 
            e.horizontalAlign = t.horizontalAlign || E.ALIGN.LEFT, e.verticalAlign = t.verticalAlign || E.ALIGN.CENTER, 
            e;
        }
        return _createClass(n);
    }()), u = function() {
        _inherits(n, O);
        var i = _createSuper(n);
        function n(t) {
            var e;
            return _classCallCheck(this, n), (e = i.call(this, t.width, t.height)).x = t.x || 0, 
            e.y = t.y || 0, e.anchor = t.anchor || n.DEFAULT_ANCHOR.clone(), e;
        }
        return _createClass(n);
    }(), a = (u.DEFAULT_ANCHOR = new p.Point(0, 0), u.CENTER_ANCHOR = new p.Point(.5, .5), 
    function() {
        _inherits(n, O);
        var i = _createSuper(n);
        function n(t) {
            var e;
            return _classCallCheck(this, n), (e = i.call(this, t.width, t.height)).region = t.region || n.REGION_CENTER, 
            e.horizontalAlign = t.horizontalAlign || E.ALIGN.LEFT, e.verticalAlign = t.verticalAlign || E.ALIGN.TOP, 
            e;
        }
        return _createClass(n);
    }()), U = (a.REGION_LEFT = 61425, a.REGION_TOP = 61426, a.REGION_RIGHT = 61427, 
    a.REGION_BOTTOM = 61428, a.REGION_CENTER = 61429, function() {
        function t() {
            _classCallCheck(this, t);
        }
        return _createClass(t, [ {
            key: "onAttach",
            value: function(t) {
                this.host = t;
            }
        }, {
            key: "onDetach",
            value: function() {
                this.host = null;
            }
        }, {
            key: "onLayout",
            value: function() {
                for (var t = this.host, e = t.contentWidth, i = t.contentHeight, n = t.widgetChildren, s = 0, r = n.length; s < r; s++) {
                    var o = n[s], a = o.layoutOptions || O.DEFAULT, h = a.x || 0, l = a.y || 0, a = (Math.abs(h) < 1 && (h *= e), 
                    Math.abs(l) < 1 && (l *= i), a.anchor || u.DEFAULT_ANCHOR), h = h - a.x * o.getMeasuredWidth(), l = l - a.y * o.getMeasuredHeight();
                    o.layout(h, l, h + o.getMeasuredWidth(), l + o.getMeasuredHeight());
                }
            }
        }, {
            key: "onMeasure",
            value: function(t, e, i, n) {
                this._measuredWidth = t, this._measuredHeight = e;
                for (var s = this.host.widgetChildren, r = 0, o = s.length; r < o; r++) {
                    var a = s[r], h = a.layoutOptions || O.DEFAULT, l = Math.abs(h.width) < 1 ? h.width * t : h.width, u = Math.abs(h.height) < 1 ? h.height * e : h.height, c = this.getChildMeasureMode(h.width, i), h = this.getChildMeasureMode(h.height, n);
                    a.measure(l, u, c, h);
                }
                this._measuredWidth = this.measureWidthReach(t, i), this._measuredHeight = this.measureHeightReach(e, n), 
                this.measureChildFillers();
            }
        }, {
            key: "getChildMeasureMode",
            value: function(t, e) {
                return t === O.WRAP_CONTENT ? e === E.MeasureMode.UNBOUNDED ? E.MeasureMode.UNBOUNDED : E.MeasureMode.AT_MOST : e;
            }
        }, {
            key: "measureWidthReach",
            value: function(t, e) {
                if (e === E.MeasureMode.EXACTLY) return t;
                for (var i = this.host.widgetChildren, n = 0, s = 0, r = i.length; s < r; s++) var o = i[s], a = o.getMeasuredWidth(), o = o.layoutOptions || O.DEFAULT, h = o.x || 0, o = o.anchor || u.DEFAULT_ANCHOR, o = Math.abs(h) < 1 ? (1 - o.x) * a / (1 - h) : h + a, n = Math.max(n, o);
                return n = e === E.MeasureMode.AT_MOST ? Math.min(t, n) : n;
            }
        }, {
            key: "measureHeightReach",
            value: function(t, e) {
                if (e === E.MeasureMode.EXACTLY) return t;
                for (var i = this.host.widgetChildren, n = 0, s = 0, r = i.length; s < r; s++) var o = i[s], a = o.getMeasuredHeight(), o = o.layoutOptions || O.DEFAULT, h = o.y || 0, o = o.anchor || u.DEFAULT_ANCHOR, o = Math.abs(h) < 1 ? (1 - o.y) * a / (1 - h) : h + a, n = Math.max(n, o);
                return n = e === E.MeasureMode.AT_MOST ? Math.min(t, n) : n;
            }
        }, {
            key: "measureChildFillers",
            value: function() {
                for (var t = this.host.widgetChildren, e = 0, i = t.length; e < i; e++) {
                    var n = t[e], s = n.layoutOptions || O.DEFAULT, r = Math.abs(s.width) < 1 ? s.width * this._measuredWidth : s.width, o = Math.abs(s.height) < 1 ? s.height * this._measuredHeight : s.height;
                    r === O.WRAP_CONTENT && (r = n.getMeasuredWidth()), o === O.WRAP_CONTENT && (o = n.getMeasuredHeight()), 
                    s.width !== O.FILL_PARENT && s.height !== O.FILL_PARENT || n.measure(s.width === O.FILL_PARENT ? this._measuredWidth : r, s.height === O.FILL_PARENT ? this._measuredHeight : o, E.MeasureMode.EXACTLY, E.MeasureMode.EXACTLY);
                }
            }
        }, {
            key: "getMeasuredWidth",
            value: function() {
                return this._measuredWidth;
            }
        }, {
            key: "getMeasuredHeight",
            value: function() {
                return this._measuredHeight;
            }
        } ]), t;
    }()), z = function() {
        _inherits(r, I);
        var t = _createSuper(r);
        function r() {
            return _classCallCheck(this, r), t.apply(this, arguments);
        }
        return _createClass(r, [ {
            key: "useLayout",
            value: function(t) {
                return this.layoutMgr && this.layoutMgr.onDetach(), (this.layoutMgr = t) && this.layoutMgr.onAttach(this), 
                this;
            }
        }, {
            key: "useDefaultLayout",
            value: function() {
                this.useLayout(new U());
            }
        }, {
            key: "onMeasure",
            value: function(t, e, i, n) {
                _get(_getPrototypeOf(r.prototype), "onMeasure", this).call(this, t, e, i, n), 0 !== this.widgetChildren.length && (this.layoutMgr || this.useDefaultLayout(), 
                this.layoutMgr.onMeasure(t - this.paddingHorizontal, e - this.paddingVertical, i, n), 
                this._measuredWidth = Math.max(this.measuredWidth, this.layoutMgr.getMeasuredWidth()), 
                this._measuredHeight = Math.max(this.measuredHeight, this.layoutMgr.getMeasuredHeight()));
            }
        }, {
            key: "onLayout",
            value: function(t, e, i, n) {
                var s = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4];
                _get(_getPrototypeOf(r.prototype), "onLayout", this).call(this, t, e, i, n, s), 
                0 !== this.widgetChildren.length && (this.layoutMgr || this.useDefaultLayout(), 
                this.layoutMgr.onLayout());
            }
        } ]), r;
    }(), h = function() {
        _inherits(r, z);
        var e = _createSuper(r);
        function r() {
            var t;
            return _classCallCheck(this, r), (t = e.call(this)).hitArea = new p.Rectangle(), 
            t.insetContainer.hitArea = t.hitArea, t;
        }
        return _createClass(r, [ {
            key: "update",
            value: function() {
                _get(_getPrototypeOf(r.prototype), "update", this).call(this);
            }
        }, {
            key: "layout",
            value: function(t, e, i, n, s) {
                _get(_getPrototypeOf(r.prototype), "layout", this).call(this, t, e, i, n, s), this.hitArea.width = this.width, 
                this.hitArea.height = this.height;
            }
        } ]), r;
    }(), s = function() {
        _inherits(s, h);
        var n = _createSuper(s);
        function s() {
            var t, i, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return _classCallCheck(this, s), (i = n.call(this)).bindEvents = function() {
                i.stage.on("pointerdown", i.onDocumentPointerDownImpl), document.addEventListener("keydown", i.onKeyDownImpl);
            }, i.clearEvents = function() {
                i.stage.off("pointerdown", i.onDocumentPointerDownImpl), document.removeEventListener("keydown", i.onKeyDownImpl);
            }, i.onKeyDownImpl = function(t) {
                var e = i.stage.focusController;
                9 === t.which && e.useTab ? (e.onTab(), t.preventDefault()) : 38 === t.which && e.useBack ? (e.onBack(), 
                t.preventDefault()) : 40 === t.which && e.useForward && (e.onForward(), t.preventDefault()), 
                i.emit("keydown");
            }, i.onDocumentPointerDownImpl = function() {
                i._isMousePressed || i.blur();
            }, e.background && _get((t = _assertThisInitialized(i), _getPrototypeOf(s.prototype)), "setBackground", t).call(t, e.background), 
            i._isFocused = !1, i._isMousePressed = !1, i.interactive = !0, i.tabIndex = e.tabIndex, 
            i.tabGroup = e.tabGroup, i.insetContainer.on("pointerdown", function() {
                i.focus(), i._isMousePressed = !0;
            }), i.insetContainer.on("pointerup", function() {
                i._isMousePressed = !1;
            }), i.insetContainer.on("pointerupoutside", function() {
                i._isMousePressed = !1;
            }), i;
        }
        return _createClass(s, [ {
            key: "focus",
            value: function() {
                this.isFocused || (this.stage.focusController.notifyFocus(this), this._isFocused = !0, 
                this.bindEvents(), this.emit("focusChanged", !0), this.emit("focus"));
            }
        }, {
            key: "blur",
            value: function() {
                this._isFocused && (this.stage.focusController.notifyBlur(), this._isFocused = !1, 
                this.clearEvents(), this.emit("focusChanged", !1), this.emit("blur"));
            }
        }, {
            key: "isFocused",
            get: function() {
                return this._isFocused;
            }
        }, {
            key: "initialize",
            value: function() {
                _get(_getPrototypeOf(s.prototype), "initialize", this).call(this), this.stage.focusController.in(this, this.tabIndex, this.tabGroup);
            }
        } ]), s;
    }(), X = function() {
        _inherits(s, I);
        var n = _createSuper(s);
        function s(t, e) {
            var i;
            return _classCallCheck(this, s), (i = n.call(this)).textDisplay = new p.Text(t, e), 
            i.contentContainer.addChild(i.textDisplay), i;
        }
        return _createClass(s, [ {
            key: "update",
            value: function() {
                null !== this.tint && (this.textDisplay.tint = this.tint), null !== this.blendMode && (this.textDisplay.blendMode = this.blendMode);
            }
        }, {
            key: "value",
            get: function() {
                return this.textDisplay.text;
            },
            set: function(t) {
                this.textDisplay.text = t;
            }
        }, {
            key: "text",
            get: function() {
                return this.value;
            },
            set: function(t) {
                this.value = t;
            }
        } ]), s;
    }(), j = function() {
        _inherits(n, s);
        var i = _createSuper(n);
        function n(t) {
            var e;
            return _classCallCheck(this, n), (e = i.call(this, t)).isHover = !1, "string" == typeof t.text && (t.text = new X(t.text, new p.TextStyle())), 
            e.textWidget = t.text.setLayoutOptions(new u({
                width: O.WRAP_CONTENT,
                height: O.WRAP_CONTENT,
                x: .5,
                y: .5,
                anchor: u.CENTER_ANCHOR
            })), e.textWidget && e.addChild(e.textWidget), e.contentContainer.buttonMode = !0, 
            e.setupClick(), e;
        }
        return _createClass(n, [ {
            key: "setupClick",
            value: function() {
                var i = this, t = this.eventBroker.click;
                t.onHover = function(t, e) {
                    i.isHover = e, i.emit("hover", e);
                }, t.onPress = function(t, e) {
                    e && (i.focus(), t.data.originalEvent.preventDefault()), i.emit("press", e);
                }, t.onClick = function(t) {
                    i.click();
                }, this.click = function() {
                    i.emit("click");
                };
            }
        }, {
            key: "update",
            value: function() {
                _get(_getPrototypeOf(n.prototype), "update", this).call(this);
            }
        }, {
            key: "initialize",
            value: function() {
                _get(_getPrototypeOf(n.prototype), "initialize", this).call(this), this.setupClick(), 
                this.insetContainer.interactiveChildren = !1;
            }
        }, {
            key: "value",
            get: function() {
                return this.textWidget ? this.textWidget.text : "";
            },
            set: function(t) {
                this.textWidget && (this.textWidget.text = t);
            }
        }, {
            key: "text",
            get: function() {
                return this.textWidget;
            },
            set: function(t) {
                this.value = t;
            }
        } ]), n;
    }(), Y = function() {
        _inherits(n, s);
        var i = _createSuper(n);
        function n(t) {
            var e;
            return _classCallCheck(this, n), (e = i.call(this, t)).change = function(t) {
                e.checkmark && (e.checkmark.alpha = t ? 1 : 0);
            }, e.click = function() {
                e.emit("click"), null !== e.checkGroup && e.checked || (e.checked = !e.checked, 
                e.emit("changed", e.checked));
            }, e._checked = void 0 !== t.checked && t.checked, e._value = t.value || "", e.checkGroup = t.checkGroup || null, 
            e.checkmark = new h(), e.checkmark.contentContainer.addChild(t.checkmark), e.checkmark.setLayoutOptions(new u({
                width: O.WRAP_CONTENT,
                height: O.WRAP_CONTENT,
                x: .5,
                y: .5,
                anchor: u.CENTER_ANCHOR
            })), e.checkmark.alpha = e._checked ? 1 : 0, e.addChild(e.checkmark), e.contentContainer.buttonMode = !0, 
            e;
        }
        return _createClass(n, [ {
            key: "update",
            value: function() {}
        }, {
            key: "checked",
            get: function() {
                return this._checked;
            },
            set: function(t) {
                t !== this._checked && (null !== this.checkGroup && t && this.stage.checkBoxGroupController.notifyCheck(this), 
                this._checked = t, this.change(t));
            }
        }, {
            key: "value",
            get: function() {
                return this._value;
            },
            set: function(t) {
                this._value = t, this.checked && this.stage.checkBoxGroupController.notifyCheck(this);
            }
        }, {
            key: "selectedValue",
            get: function() {
                var t;
                return null == (t = this.stage) ? void 0 : t.checkBoxGroupController.getSelected(this.checkGroup).value;
            }
        }, {
            key: "initialize",
            value: function() {
                var i = this, t = (_get(_getPrototypeOf(n.prototype), "initialize", this).call(this), 
                this.eventBroker.click);
                t.onHover = function(t, e) {
                    i.emit("hover", e);
                }, t.onPress = function(t, e) {
                    e && (i.focus(), t.data.originalEvent.preventDefault()), i.emit("press", e);
                }, t.onClick = function() {
                    i.click();
                }, null !== this.checkGroup && this.stage.checkBoxGroupController.in(this, this.checkGroup);
            }
        } ]), n;
    }(), r = function() {
        function t() {
            _classCallCheck(this, t);
        }
        return _createClass(t, [ {
            key: "getPosition",
            value: function(t) {
                return t;
            }
        } ]), t;
    }();
    function l(t, e, i) {
        var n = t, s = e && i ? 3 : i ? 1 : 2;
        this.getPosition = function(t) {
            var e = 1 == s ? 1 - t : 2 == s ? t : t < .5 ? 2 * t : 2 * (1 - t);
            return 1 === n ? e *= e : 2 === n ? e *= e * e : 3 === n ? e *= e * e * e : 4 === n && (e *= e * e * e * e), 
            1 == s ? 1 - e : 2 == s ? e : t < .5 ? e / 2 : 1 - e / 2;
        };
    }
    (l.prototype = Object.create(r.prototype)).constructor = l;
    var c = {}, K = .5 * Math.PI;
    function d(t) {
        var e = Object.create(r.prototype);
        return e.getPosition = t, e;
    }
    var g = new r();
    function f(t, e, i) {
        return {
            easeIn: t,
            easeOut: e,
            easeInOut: i
        };
    }
    c.Linear = g, c.Power0 = {
        easeNone: g
    }, c.Power1 = c.Quad = f(new l(1, 1, 0), new l(1, 0, 1), new l(1, 1, 1)), c.Power2 = c.Cubic = f(new l(2, 1, 0), new l(2, 0, 1), new l(2, 1, 1)), 
    c.Power3 = c.Quart = f(new l(3, 1, 0), new l(3, 0, 1), new l(3, 1, 1)), c.Power4 = c.Quint = f(new l(4, 1, 0), new l(4, 0, 1), new l(4, 1, 1)), 
    c.Bounce = {
        BounceIn: d(function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
        }),
        BounceOut: d(function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        }),
        BounceInOut: d(function(t) {
            var e = t < .5;
            return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, 
            e ? .5 * (1 - t) : .5 * t + .5;
        })
    }, c.Circ = {
        CircIn: d(function(t) {
            return -(Math.sqrt(1 - t * t) - 1);
        }),
        CircOut: d(function(t) {
            return Math.sqrt(1 - (t -= 1) * t);
        }),
        CircInOut: d(function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        })
    }, c.Expo = {
        ExpoIn: d(function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001;
        }),
        ExpoOut: d(function(t) {
            return 1 - Math.pow(2, -10 * t);
        }),
        ExpoInOut: d(function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        })
    }, c.Sine = {
        SineIn: d(function(t) {
            return 1 - Math.cos(t * K);
        }),
        SineOut: d(function(t) {
            return Math.sin(t * K);
        }),
        SineInOut: d(function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1);
        })
    };
    var v = {
        Lerp: function(t, e, i) {
            return 1 < i ? i = 1 : i < 0 && (i = 0), t + (e - t) * i;
        },
        Round: function(t, e) {
            e = Math.pow(10, e);
            return Math.round(t * e) / e;
        },
        componentToHex: function(t) {
            t = t.toString(16);
            return 1 == t.length ? "0".concat(t) : t;
        },
        rgbToHex: function(t, e, i) {
            return "#".concat(this.componentToHex(t)).concat(this.componentToHex(e)).concat(this.componentToHex(i));
        },
        rgbToNumber: function(t, e, i) {
            return 65536 * t + 256 * e + i;
        },
        numberToRgb: function(t) {
            return {
                r: Math.floor(t / 65536),
                g: Math.floor(t / 256) % 256,
                b: t % 256
            };
        },
        hexToRgb: function(t) {
            if (null === t && (t = 16777215), !isNaN(t)) return this.numberToRgb(t);
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                return e + e + i + i + n + n;
            });
            t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null;
        }
    }, m = function() {
        _inherits(a, I);
        var i = _createSuper(a);
        function a(t) {
            var e;
            return _classCallCheck(this, a), (e = i.call(this)).percentValue = 0, e._disabled = !1, 
            e.fill = t.fill || null, e.percentValue = e._minValue, e._minValue = t.minValue || 0, 
            e._maxValue = t.maxValue || 100, e.decimals = t.decimals || 0, e.orientation = t.orientation || a.HORIZONTAL, 
            e.onValueChange = t.onValueChange || null, e.onValueChanging = t.onValueChanging || null, 
            e.value = t.value || 50, e.track = I.fromContent(t.track || (e.orientation === a.HORIZONTAL ? a.DEFAULT_HORIZONTAL_TRACK : a.DEFAULT_VERTICAL_TRACK).clone()), 
            e.handle = I.fromContent(t.handle || a.DEFAULT_HANDLE.clone()), e.addChild(e.track, e.handle), 
            e._localCursor = new p.Point(), e.handle.contentContainer.buttonMode = !0, e;
        }
        return _createClass(a, [ {
            key: "initialize",
            value: function() {
                function t() {
                    s.emit("change", s.value), s._lastChange != s.value && (s._lastChange = s.value, 
                    "function" == typeof s.onValueChange && s.onValueChange(s.value));
                }
                function i(t, e) {
                    s.percentValue = s.getValueAtPhysicalPosition(t), s.layoutHandle(), o();
                }
                var n, s = this, r = (_get(_getPrototypeOf(a.prototype), "initialize", this).call(this), 
                0), o = function() {
                    s.emit("changing", s.value), s._lastChanging != s.value && (s._lastChanging = s.value, 
                    "function" == typeof s.onValueChanging && s.onValueChanging(s.value));
                }, e = this.handle.eventBroker.dnd, e = (e.onPress = function(t) {
                    t.stopPropagation();
                }, e.onDragStart = function() {
                    r = s.percentValue, n = s.orientation === a.HORIZONTAL ? s.track.width : s.track.height;
                }, e.onDragMove = function(t, e) {
                    s.percentValue = Math.max(0, Math.min(1, r + (s.orientation === a.HORIZONTAL ? e.x : e.y) / n)), 
                    o(), s.layoutHandle();
                }, e.onDragEnd = function() {
                    t(), s.layoutHandle();
                }, this.track.eventBroker.dnd);
                e.onPress = function(t, e) {
                    e && i(t.data.global), t.stopPropagation();
                }, e.onDragMove = function(t) {
                    i(t.data.global);
                }, e.onDragEnd = function() {
                    t();
                }, this.layoutHandle();
            }
        }, {
            key: "value",
            get: function() {
                return v.Round(v.Lerp(this._minValue, this._maxValue, this.percentValue), this.decimals);
            },
            set: function(t) {
                if (t !== this.value) {
                    if (isNaN(t)) throw new Error("Cannot use NaN as a value");
                    this.percentValue = (Math.max(this._minValue, Math.min(this._maxValue, t)) - this._minValue) / (this._maxValue - this._minValue), 
                    "function" == typeof this.onValueChange && this.onValueChange(this.value), "function" == typeof this.onValueChanging && this.onValueChanging(this.value), 
                    this.handle && this.initialized && this.layoutHandle();
                }
            }
        }, {
            key: "minValue",
            get: function() {
                return this._minValue;
            },
            set: function(t) {
                this._minValue = t, this.update();
            }
        }, {
            key: "maxValue",
            get: function() {
                return this._maxValue;
            },
            set: function(t) {
                this._maxValue = t, this.update();
            }
        }, {
            key: "disabled",
            get: function() {
                return this._disabled;
            },
            set: function(t) {
                t !== this._disabled && (this._disabled = t, this.handle.contentContainer.buttonMode = !t, 
                this.handle.contentContainer.interactive = !t, this.track.contentContainer.interactive = !t);
            }
        }, {
            key: "getPhysicalRange",
            value: function() {
                return this.orientation === a.HORIZONTAL ? this.contentWidth - this.handle.getMeasuredWidth() : this.contentHeight - this.handle.getMeasuredHeight();
            }
        }, {
            key: "getValueAtPhysicalPosition",
            value: function(t) {
                var e, i, t = this.contentContainer.toLocal(t, null, this._localCursor, !0);
                return t = this.orientation === a.HORIZONTAL ? (i = this.handle.getMeasuredWidth(), 
                e = t.x - this.paddingLeft - i / 4, this.contentWidth - i) : (i = this.handle.getMeasuredHeight(), 
                e = t.y - this.paddingTop - i / 4, this.contentHeight - i), e / t;
            }
        }, {
            key: "layoutHandle",
            value: function() {
                var t, e, i = this.handle, n = i.getMeasuredWidth(), s = i.getMeasuredHeight(), r = this.width - this.paddingHorizontal, o = this.height - this.paddingVertical;
                this.orientation === a.HORIZONTAL ? (e = (o - s) / 2, t = (r -= n) * this.percentValue) : (t = (r - n) / 2, 
                e = (o -= s) * this.percentValue), i.layout(t, e, t + n, e + s);
            }
        }, {
            key: "onMeasure",
            value: function(t, e, i, n) {
                var s = (this.orientation === a.HORIZONTAL ? this._maxValue - this._minValue : Math.max(this.handle.contentContainer.width, this.track.contentContainer.width)) + this.paddingHorizontal, r = (this.orientation === a.VERTICAL ? this._maxValue - this._minValue : Math.max(this.handle.contentContainer.height, this.track.contentContainer.height)) + this.paddingVertical;
                switch (i) {
                  case E.MeasureMode.EXACTLY:
                    this._measuredWidth = t;
                    break;

                  case E.MeasureMode.UNBOUNDED:
                    this._measuredWidth = s;
                    break;

                  case E.MeasureMode.AT_MOST:
                    this._measuredWidth = Math.min(t, s);
                }
                switch (n) {
                  case E.MeasureMode.EXACTLY:
                    this._measuredHeight = e;
                    break;

                  case E.MeasureMode.UNBOUNDED:
                    this._measuredHeight = r;
                    break;

                  case E.MeasureMode.AT_MOST:
                    this._measuredHeight = Math.min(e, r);
                }
            }
        }, {
            key: "onLayout",
            value: function(t, e, i, n, s) {
                _get(_getPrototypeOf(a.prototype), "onLayout", this).call(this, t, e, i, n, s);
                t = this.handle, e = this.track;
                e.layout(0, 0, this.width - this.paddingHorizontal, this.height - this.paddingVertical), 
                e.insetContainer.width = e.width, e.insetContainer.height = e.height, t.measure(this.width, this.height, E.MeasureMode.AT_MOST, E.MeasureMode.AT_MOST), 
                this.layoutHandle();
            }
        } ]), a;
    }(), _ = (m.DEFAULT_HORIZONTAL_TRACK = new p.Graphics().beginFill(16777215, 1).drawRect(0, 0, 16, 16).endFill().lineStyle(1, 0, .7, 1, !0).moveTo(1, 8).lineTo(15, 8), 
    m.DEFAULT_VERTICAL_TRACK = new p.Graphics().beginFill(16777215, 1).drawRect(0, 0, 16, 16).endFill().lineStyle(1, 0, .7, 1, !0).moveTo(8, 1).lineTo(8, 15), 
    m.DEFAULT_HANDLE = new p.Graphics().beginFill(0).drawCircle(16, 16, 8).endFill().beginFill(0, .5).drawCircle(16, 16, 16).endFill(), 
    m.HORIZONTAL = 4085, m.VERTICAL = 4094, []), y = [], Z = {}, C = {}, q = 1, Q = _createClass(function t(e) {
        _classCallCheck(this, t), this.object = e, this.tweens = {}, this.active = !1, this.onUpdate = null;
    }), $ = function() {
        function t() {
            _classCallCheck(this, t), this._ready = !1, this.obj = null, this.parent = null, 
            this.key = "", this.time = 0, this.callback = null, this.currentTime = 0;
        }
        return _createClass(t, [ {
            key: "remove",
            value: function() {
                this._ready = !0, delete this.parent.tweens[this.key], Object.keys(this.parent.tweens).length || (this.parent.active = !1, 
                this.parent.onUpdate = null, delete C[this.obj._tweenObjectId]);
            }
        }, {
            key: "set",
            value: function(t, e, i) {
                this.obj = t.object, this.obj._currentCallbackID ? this.obj._currentCallbackID++ : this.obj._currentCallbackID = 1, 
                this.time = i, this.parent = t, this.callback = e, this._ready = !1, this.key = "cb_".concat(this.obj._currentCallbackID), 
                this.currentTime = 0, this.parent.active || (this.parent.active = !0, C[this.obj._tweenObjectId] = this.parent);
            }
        }, {
            key: "update",
            value: function(t) {
                this.currentTime += t, this.currentTime >= this.time && (this.remove(), this.callback.call(this.parent));
            }
        } ]), t;
    }(), J = function() {
        function t() {
            _classCallCheck(this, t), this._ready = !1, this.parent = null, this.obj = null, 
            this.key = "", this.from = 0, this.to = 0, this.time = 0, this.ease = 0, this.currentTime = 0, 
            this.t = 0, this.isColor = !1;
        }
        return _createClass(t, [ {
            key: "remove",
            value: function() {
                this._ready = !0, delete this.parent.tweens[this.key], Object.keys(this.parent.tweens).length || (this.parent.active = !1, 
                delete C[this.obj._tweenObjectId]);
            }
        }, {
            key: "set",
            value: function(t, e, i, n, s, r) {
                this.isColor = isNaN(i) && "#" === i[0] || isNaN(n) && "#" === n[0], this.parent = t, 
                this.obj = t.object, this.key = e, this.surfix = function(t) {
                    if (isNaN(t) && -1 !== t.indexOf("%")) return "%";
                }(n), this.isColor ? (this.to = v.hexToRgb(n), this.from = v.hexToRgb(i), this.currentColor = {
                    r: this.from.r,
                    g: this.from.g,
                    b: this.from.b
                }) : (this.to = function(t) {
                    if (!isNaN(t)) return t;
                    if (isNaN(t) && -1 !== t.indexOf("%")) return parseFloat(t.replace("%", ""));
                }(n), this.from = function(t, e, i, n) {
                    if (!isNaN(t) && !isNaN(e)) return t;
                    if (isNaN(t) && isNaN(e) && -1 !== t.indexOf("%") && -1 !== e.indexOf("%")) return parseFloat(t.replace("%", ""));
                    if (isNaN(t) && !isNaN(e) && -1 !== t.indexOf("%")) return -1 !== tt.indexOf(n) ? i.parent._width * (.01 * parseFloat(t.replace("%", ""))) : -1 !== et.indexOf(n) ? i.parent._height * (.01 * parseFloat(t.replace("%", ""))) : 0;
                    if (isNaN(t) || !isNaN(e) || -1 === e.indexOf("%")) return 0;
                    {
                        if (-1 !== tt.indexOf(n)) return t / i.parent._width * 100;
                        if (-1 !== et.indexOf(n)) return t / i.parent._height * 100;
                    }
                    return 0;
                }(i, n, this.obj, e)), this.time = s, this.currentTime = 0, this.ease = r, this._ready = !1, 
                this.parent.active || (this.parent.active = !0, C[this.obj._tweenObjectId] = this.parent);
            }
        }, {
            key: "update",
            value: function(t) {
                this.currentTime += t, this.t = Math.min(this.currentTime, this.time) / this.time, 
                this.ease && (this.t = this.ease.getPosition(this.t)), this.isColor ? (this.currentColor.r = Math.round(v.Lerp(this.from.r, this.to.r, this.t)), 
                this.currentColor.g = Math.round(v.Lerp(this.from.g, this.to.g, this.t)), this.currentColor.b = Math.round(v.Lerp(this.from.b, this.to.b, this.t)), 
                this.obj[this.key] = v.rgbToNumber(this.currentColor.r, this.currentColor.g, this.currentColor.b)) : (t = v.Lerp(this.from, this.to, this.t), 
                this.obj[this.key] = this.surfix ? t + this.surfix : t), this.currentTime >= this.time && this.remove();
            }
        } ]), t;
    }(), tt = [ "width", "minWidth", "maxWidth", "anchorLeft", "anchorRight", "left", "right", "x" ], et = [ "height", "minHeight", "maxHeight", "anchorTop", "anchorBottom", "top", "bottom", "y" ];
    function w(t) {
        return t._tweenObjectId || (t._tweenObjectId = q, q++), Z[t._tweenObjectId] || (Z[t._tweenObjectId] = new Q(t));
    }
    function M() {
        for (var t = 0; t < _.length; t++) if (_[t]._ready) return _[t];
        var e = new J();
        return _.push(e), e;
    }
    function k() {
        for (var t = 0; t < y.length; t++) if (y[t]._ready) return y[t];
        var e = new $();
        return y.push(e), e;
    }
    var b, T = {
        to: function(t, e, i, n) {
            var s, r, o = w(t), a = null;
            for (s in i) "onComplete" === s ? ((r = k()).set(o, i[s], e), o.tweens[r.key] = r) : "onUpdate" === s ? a = i[s] : e && (r = i[s] === t[s], 
            void 0 !== t[s] && (r ? o.tweens[s] && o.tweens[s].remove() : (o.tweens[s] || (o.tweens[s] = M()), 
            o.tweens[s].set(o, s, t[s], i[s], e, n))));
            e ? o.onUpdate = a : this.set(t, i);
        },
        from: function(t, e, i, n) {
            var s, r, o = w(t), a = null;
            for (s in i) "onComplete" === s ? ((r = k()).set(o, i[s], e), o.tweens[r.key] = r) : "onUpdate" === s ? a = i[s] : e && (r = i[s] == t[s], 
            void 0 !== t[s] && (r ? o.tweens[s] && o.tweens[s].remove() : (o.tweens[s] || (o.tweens[s] = M()), 
            o.tweens[s].set(o, s, i[s], t[s], e, n))));
            e ? o.onUpdate = a : this.set(t, i);
        },
        fromTo: function(t, e, i, n, s) {
            var r, o, a = w(t), h = null;
            for (r in n) "onComplete" === r ? ((o = k()).set(a, n[r], e), a.tweens[o.key] = o) : "onUpdate" === r ? h = n[r] : e && (o = i[r] == n[r], 
            void 0 !== t[r] && void 0 !== i[r] && (o ? (a.tweens[r] && a.tweens[r].remove(), 
            t[r] = n[r]) : (a.tweens[r] || (a.tweens[r] = M()), a.tweens[r].set(a, r, i[r], n[r], e, s))));
            e ? a.onUpdate = h : this.set(t, n);
        },
        set: function(t, e) {
            var i, n = w(t);
            for (i in e) void 0 !== t[i] && (n.tweens[i] && n.tweens[i].remove(), t[i] = e[i]);
        },
        _update: function(t) {
            for (var e in C) {
                var i, n = C[e];
                for (i in n.tweens) n.tweens[i].update(t);
                n.onUpdate && n.onUpdate.call(n.object, t);
            }
        }
    }, x = function() {
        _inherits(n, m);
        var i = _createSuper(n);
        function n(t) {
            var e;
            return _classCallCheck(this, n), (e = i.call(this, {
                track: t.track || n.DEFAULT_TRACK.clone(),
                handle: t.handle || n.DEFAULT_HANDLE.clone(),
                fill: null,
                orientation: t.orientation,
                minValue: 0,
                maxValue: 1
            })).scrollingContainer = t.scrollingContainer, e.autohide = t.autohide, e._hidden = !1, 
            e;
        }
        return _createClass(n, [ {
            key: "initialize",
            value: function() {
                var t = this;
                _get(_getPrototypeOf(n.prototype), "initialize", this).call(this), this.decimals = 3, 
                this.on("changing", function() {
                    t.scrollingContainer.forcePctPosition(t.orientation === m.HORIZONTAL ? "x" : "y", t.percentValue);
                }), this.on("change", function() {
                    t.scrollingContainer.setScrollPosition();
                });
            }
        }, {
            key: "toggleHidden",
            value: function(t) {
                this.autohide && (t && !this._hidden ? (T.to(this, .2, {
                    alpha: 0
                }), this._hidden = !0) : !t && this._hidden && (T.to(this, .2, {
                    alpha: 1
                }), this._hidden = !1));
            }
        } ]), n;
    }(), g = (x.DEFAULT_TRACK = new p.Graphics().beginFill(16777215).drawRect(0, 0, 8, 8).endFill(), 
    x.DEFAULT_HANDLE = new p.Graphics().beginFill(0).drawCircle(8, 8, 4).endFill().beginFill(0, .5).drawCircle(8, 8, 8).endFill(), 
    function() {
        function t() {
            _classCallCheck(this, t);
        }
        return _createClass(t, [ {
            key: "onAttach",
            value: function(t) {
                this.host = t;
            }
        }, {
            key: "onDetach",
            value: function() {
                this.host = null;
            }
        }, {
            key: "onLayout",
            value: function() {
                for (var t = this.host, e = t.widgetChildren, i = t.contentWidth, n = t.contentHeight, s = 0; s < e.length; s++) {
                    var r = e[s], o = r.layoutOptions || {}, a = r.getMeasuredWidth(), h = r.getMeasuredHeight(), l = this.calculateAnchor(o.anchorLeft || 0, i, !1), u = this.calculateAnchor(o.anchorTop || 0, n, !1), c = this.calculateAnchor(o.anchorRight || 0, i, !0), d = this.calculateAnchor(o.anchorBottom || 0, n, !0), g = l, p = u;
                    switch (o.horizontalAlign) {
                      case E.ALIGN.MIDDLE:
                        g = (c + l - a) / 2;
                        break;

                      case E.ALIGN.RIGHT:
                        g = c - a;
                    }
                    switch (o.verticalAlign) {
                      case E.ALIGN.MIDDLE:
                        p = (d + u - h) / 2;
                        break;

                      case E.ALIGN.BOTTOM:
                        p = d - h;
                    }
                    r.layout(g, p, g + a, p + h);
                }
            }
        }, {
            key: "onMeasure",
            value: function(t, e, i, n) {
                for (var s = this.host.widgetChildren, r = 0, o = 0, a = i === E.MeasureMode.EXACTLY ? E.MeasureMode.AT_MOST : i, h = n === E.MeasureMode.EXACTLY ? E.MeasureMode.AT_MOST : n, l = !1, u = 0, c = s.length; u < c; u++) {
                    var d = s[u], g = d.layoutOptions || O.DEFAULT;
                    if (g.width === O.FILL_PARENT) throw new Error("AnchorLayout does not support width = FILL_PARENT. Use anchorLeft = 0 & anchorRight = 0");
                    if (g.height === O.FILL_PARENT) throw new Error("AnchorLayout does not support height = FILL_PARENT. Use anchorTop = 0 & anchorBottom = 0");
                    var p = this.calculateAnchor(g.anchorLeft || 0, t, !1), f = this.calculateAnchor(g.anchorTop || 0, e, !1), v = this.calculateAnchor(g.anchorRight || 0, t, !0), m = this.calculateAnchor(g.anchorBottom || 0, e, !0), _ = g.isWidthPredefined, y = g.isHeightPredefined, v = _ ? g.width : v - p, p = y ? g.height : m - f, m = _ ? E.MeasureMode.EXACTLY : a, f = y ? E.MeasureMode.EXACTLY : h, l = l || 0 === g.width || 0 === g.height, _ = (d.measure(v, p, m, f), 
                    this.calculateReach(g.anchorLeft || 0, g.anchorRight || 0, d.getMeasuredWidth())), y = this.calculateReach(g.anchorTop || 0, g.anchorBottom || 0, d.getMeasuredHeight()), r = Math.max(r, _), o = Math.max(o, y);
                }
                if (this.measuredWidth = I.resolveMeasuredDimen(r, t, i), this.measuredHeight = I.resolveMeasuredDimen(o, e, n), 
                l) for (var C = 0, w = s.length; C < w; C++) {
                    var M, k, b, T, x = s[C], L = x.layoutOptions || O.DEFAULT;
                    0 !== L.width && 0 !== L.height || (M = this.calculateAnchor(L.anchorLeft || 0, this.measuredWidth, !1), 
                    k = this.calculateAnchor(L.anchorTop || 0, this.measuredHeight, !1), b = this.calculateAnchor(L.anchorRight || 0, this.measuredWidth, !0), 
                    T = this.calculateAnchor(L.anchorBottom || 0, this.measuredHeight, !0), x.measure(L.isWidthPredefined ? L.width : b - M, L.isHeightPredefined ? L.height : T - k, 0 === L.width || L.isWidthPredefined ? E.MeasureMode.EXACTLY : E.MeasureMode.AT_MOST, 0 === L.height || L.isHeightPredefined ? E.MeasureMode.EXACTLY : E.MeasureMode.AT_MOST));
                }
            }
        }, {
            key: "getMeasuredWidth",
            value: function() {
                return this.measuredWidth;
            }
        }, {
            key: "getMeasuredHeight",
            value: function() {
                return this.measuredHeight;
            }
        }, {
            key: "calculateAnchor",
            value: function(t, e, i) {
                t = Math.abs(t) < 1 ? t * e : t;
                return i ? e - t : t;
            }
        }, {
            key: "calculateReach",
            value: function(t, e, i) {
                return Math.abs(t) < 1 && Math.abs(e) < 1 ? i / (1 - e - t) : Math.abs(t) < 1 ? (e + i) / (1 - t) : Math.abs(e) < 1 ? (t + i) / (1 - e) : t + i + e;
            }
        } ]), t;
    }()), it = a.REGION_LEFT, nt = a.REGION_TOP, rt = a.REGION_RIGHT, ot = a.REGION_BOTTOM, at = a.REGION_CENTER, L = O.FILL_PARENT, A = E.MeasureMode, D = A.EXACTLY, ht = A.AT_MOST, lt = function() {
        function t() {
            _classCallCheck(this, t), this.leftWidgets = [], this.topWidgets = [], this.rightWidgets = [], 
            this.bottomWidgets = [], this.centerWidgets = [];
        }
        return _createClass(t, [ {
            key: "onAttach",
            value: function(t) {
                this.host = t;
            }
        }, {
            key: "onDetach",
            value: function() {
                this.host = null, this.clearMeasureCache(), this.clearRegions();
            }
        }, {
            key: "onLayout",
            value: function() {
                this.layoutChildren(this.leftWidgets, 0, this.measuredTopHeight, this.measuredLeftWidth, this.measuredCenterHeight), 
                this.layoutChildren(this.topWidgets, 0, 0, this.measuredWidth, this.measuredTopHeight), 
                this.layoutChildren(this.rightWidgets, this.measuredWidth - this.measuredRightWidth, this.measuredTopHeight, this.measuredRightWidth, this.measuredCenterHeight), 
                this.layoutChildren(this.bottomWidgets, 0, this.measuredTopHeight + this.measuredCenterHeight, this.measuredWidth, this.measuredBottomHeight), 
                this.layoutChildren(this.centerWidgets, this.measuredLeftWidth, this.measuredTopHeight, this.measuredCenterWidth, this.measuredCenterHeight);
            }
        }, {
            key: "layoutChildren",
            value: function(t, e, i, n, s) {
                for (var r, o = 0, a = t.length; o < a; o++) {
                    var h = t[o], l = 0, u = 0;
                    switch (null == (r = h.layoutOptions) ? void 0 : r.horizontalAlign) {
                      case E.ALIGN.CENTER:
                        l = (n - h.getMeasuredWidth()) / 2;
                        break;

                      case E.ALIGN.RIGHT:
                        l = n - h.getMeasuredWidth();
                        break;

                      default:
                        l = 0;
                    }
                    switch (null == (r = h.layoutOptions) ? void 0 : r.verticalAlign) {
                      case E.ALIGN.CENTER:
                        u = (s - h.getMeasuredHeight()) / 2;
                        break;

                      case E.ALIGN.BOTTOM:
                        u = s - h.getMeasuredHeight();
                        break;

                      default:
                        u = 0;
                    }
                    l += e, u += i, h.layout(l, u, l + h.getMeasuredWidth(), u + h.getMeasuredHeight(), !0);
                }
            }
        }, {
            key: "onMeasure",
            value: function(t, e, i, n) {
                this.indexRegions(), this.clearMeasureCache();
                var s = i === E.MeasureMode.EXACTLY ? E.MeasureMode.AT_MOST : i, r = n === E.MeasureMode.EXACTLY ? E.MeasureMode.AT_MOST : i, o = _slicedToArray(this.measureChildren(this.topWidgets, t, e, s, r), 4), a = o[0], h = o[1], o = o[3], r = _slicedToArray(this.measureChildren(this.bottomWidgets, t, e, s, r), 4), l = r[0], u = r[1], r = r[3], c = _slicedToArray(this.measureChildren(this.centerWidgets, t, e, s, n), 4), d = c[0], g = c[1], p = c[2], c = c[3], f = _slicedToArray(this.measureChildren(this.leftWidgets, t, g, s, E.MeasureMode.AT_MOST), 3), v = f[0], f = f[2], s = _slicedToArray(this.measureChildren(this.rightWidgets, t, g, s, E.MeasureMode.AT_MOST), 3), m = s[0], s = s[2], a = Math.max(a, l, v + m + d), l = h + u + g;
                i === E.MeasureMode.EXACTLY ? this.measuredWidth = t : i === E.MeasureMode.AT_MOST ? this.measuredWidth = Math.min(a, t) : this.measuredWidth = a, 
                n === E.MeasureMode.EXACTLY ? this.measuredHeight = e : n === E.MeasureMode.AT_MOST ? this.measuredHeight = Math.min(l, e) : this.measuredHeight = l, 
                this.measuredWidth, this.measuredWidth, l > this.measuredHeight && ((i = o + c + r) < this.measuredHeight ? (h = o + (h - o) * (t = (this.measuredHeight - i) / (l - i)), 
                u = r + (u - r) * t, g = c + (g - c) * t) : (h *= n = this.measuredHeight / l, u *= n, 
                g *= n)), a > this.measuredWidth && ((e = f + p + s) < this.measuredWidth ? (v = f + (v - f) * (o = (this.measuredWidth - e) / (a - e)), 
                d = p + (d - p) * o, m = s + (m - s) * o) : (v *= i = this.measuredWidth / a, d *= i, 
                m *= i)), this.measuredLeftWidth = v, this.measuredRightWidth = m, this.measuredCenterWidth = d, 
                this.measuredTopHeight = h, this.measuredBottomHeight = u, this.measuredCenterHeight = g, 
                this.fitChildren(this.leftWidgets, this.measuredLeftWidth, this.measuredCenterHeight), 
                this.fitChildren(this.topWidgets, this.measuredWidth, this.measuredTopHeight), this.fitChildren(this.rightWidgets, this.measuredRightWidth, this.measuredCenterHeight), 
                this.fitChildren(this.bottomWidgets, this.measuredWidth, this.measuredBottomHeight), 
                this.fitChildren(this.centerWidgets, this.measuredCenterWidth, this.measuredCenterHeight);
            }
        }, {
            key: "measureChildren",
            value: function(t, e, i, n, s) {
                for (var r = 0, o = 0, a = 0, h = 0, l = 0, u = t.length; l < u; l++) {
                    var c = t[l], d = c.layoutOptions || O.DEFAULT, g = e, p = i, f = n, v = s;
                    d.width <= O.MAX_DIMEN && (g = d.width, f = D, a = Math.max(a, g)), d.height <= O.MAX_DIMEN && (p = d.height, 
                    v = D, h = Math.max(h, p)), c.measure(g, p, f, v), r = Math.max(r, c.getMeasuredWidth()), 
                    o = Math.max(o, c.getMeasuredHeight());
                }
                return [ r, o, a, h ];
            }
        }, {
            key: "fitChildren",
            value: function(t, e, i) {
                for (var n, s = 0, r = t.length; s < r; s++) {
                    var o, a, h = t[s];
                    h.getMeasuredWidth() <= e && h.getMeasuredHeight() <= i && 0 < h.getMeasuredWidth() && 0 < h.getMeasuredHeight() && (null == (n = h.layoutOptions) ? void 0 : n.width) !== L && (null == (n = h.layoutOptions) ? void 0 : n.height) !== L || 0 < e && 0 < i && (o = (null == (n = h.layoutOptions) ? void 0 : n.width) === L ? D : ht, 
                    a = (null == (a = h.layoutOptions) ? void 0 : a.height) === L ? D : ht, h.measure(e, i, o, a));
                }
            }
        }, {
            key: "indexRegions",
            value: function() {
                this.clearRegions();
                for (var t = this.host.widgetChildren, e = 0, i = t.length; e < i; e++) {
                    var n = t[e];
                    switch ((n.layoutOptions || O.DEFAULT).region || at) {
                      case it:
                        this.leftWidgets.push(n);
                        break;

                      case nt:
                        this.topWidgets.push(n);
                        break;

                      case rt:
                        this.rightWidgets.push(n);
                        break;

                      case ot:
                        this.bottomWidgets.push(n);
                        break;

                      default:
                        this.centerWidgets.push(n);
                    }
                }
            }
        }, {
            key: "clearRegions",
            value: function() {
                this.leftWidgets.length = 0, this.topWidgets.length = 0, this.rightWidgets.length = 0, 
                this.bottomWidgets.length = 0;
            }
        }, {
            key: "clearMeasureCache",
            value: function() {
                this.measuredLeftWidth = 0, this.measuredRightWidth = 0, this.measuredCenterWidth = 0, 
                this.measuredTopHeight = 0, this.measuredBottomHeight = 0, this.measuredCenterHeight = 0;
            }
        }, {
            key: "getMeasuredWidth",
            value: function() {
                return this.measuredWidth;
            }
        }, {
            key: "getMeasuredHeight",
            value: function() {
                return this.measuredHeight;
            }
        } ]), t;
    }(), ut = function() {
        _inherits(s, h);
        var n = _createSuper(s);
        function s() {
            var r, t, e, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return _classCallCheck(this, s), (r = n.call(this)).forcePctPosition = function(t, e) {
                var i = r.getInnerBounds(), n = r.innerContainer.insetContainer;
                r.scrollX && "x" === t && (n.position[t] = -(i.width - r.width) * e), r.scrollY && "y" === t && (n.position[t] = -(i.height - r.height) * e), 
                r.scrollPosition[t] = r.targetPosition[t] = n.position[t];
            }, r.focusPosition = function(t) {
                var e, i, n = r.getInnerBounds(), s = r.innerContainer.insetContainer;
                r.scrollX && ((i = Math.max(0, Math.min(n.width, t.x))) + s.x > r.width ? (e = i - r.width, 
                s.x = -e) : i + s.x < 0 && (e = i + s.x, s.x -= e)), r.scrollY && ((i = Math.max(0, Math.min(n.height, t.y))) + s.y > r.height ? (e = i - r.height, 
                s.y = -e) : i + s.y < 0 && (e = i + s.y, s.y -= e)), r.lastPosition.copyFrom(s.position), 
                r.targetPosition.copyFrom(s.position), r.scrollPosition.copyFrom(s.position), r.updateScrollBars();
            }, r.setScrollPosition = function(t) {
                t && r.scrollVelocity.copyFrom(t);
                t = r.innerContainer.insetContainer;
                r.animating || (r.animating = !0, r.lastPosition.copyFrom(t.position), r.targetPosition.copyFrom(t.position), 
                p.Ticker.shared.add(r.updateScrollPosition));
            }, r.updateScrollPosition = function(t) {
                r.stop = !0, r.scrollX && r.updateDirection("x", t), r.scrollY && r.updateDirection("y", t), 
                r.stop && (p.Ticker.shared.remove(r.updateScrollPosition), r.animating = !1), r.updateScrollBars();
            }, r.updateDirection = function(t, e) {
                var i = r.innerContainer.insetContainer.getLocalBounds(), n = _assertThisInitialized(r), s = (n.scrollPosition, 
                n.scrollVelocity), n = (n.targetPosition, n.lastPosition, r.innerContainer.insetContainer), i = "y" === t ? Math.round(Math.min(0, r.height - i.height)) : Math.round(Math.min(0, r.width - i.width));
                console.error(n[t], n.position[t]), 0 !== Math.round(s[t]) && (n.position[t] < i ? n.position[t] = i : 0 < n.position[t] ? n.position[t] = 0 : n.position[t] += s[t]);
            }, r.speed = 0, r.mask = new p.Graphics(), r.innerContainer = new h(), r.innerBounds = new p.Rectangle(), 
            _get((t = _assertThisInitialized(r), _getPrototypeOf(s.prototype)), "addChild", t).call(t, r.innerContainer), 
            r.contentContainer.addChild(r.mask), r.contentContainer.mask = r.mask, r.scrollX = void 0 !== i.scrollX && i.scrollX, 
            r.scrollY = void 0 !== i.scrollY && i.scrollY, r.dragScrolling = void 0 === i.dragScrolling || i.dragScrolling, 
            r.softness = void 0 !== i.softness ? Math.max(Math.min(i.softness || 0, 1), 0) : .5, 
            r.radius = i.radius || 0, r.expandMask = i.expandMask || 0, r.overflowY = i.overflowY || 0, 
            r.overflowX = i.overflowX || 0, r.scrollVelocity = new p.Point(), r.scrollPosition = new p.Point(), 
            r.targetPosition = new p.Point(), r.lastPosition = new p.Point(), r.useLayout(new lt()), 
            r.animating = !1, r.scrolling = !1, r.scrollBars = [], r.maxMarigin = 50, i.scrollBars && r.scrollX && (t = new x({
                orientation: x.HORIZONTAL,
                scrollingContainer: _assertThisInitialized(r),
                minValue: 0,
                maxValue: 1
            }).setLayoutOptions(new a({
                width: O.FILL_PARENT,
                height: O.WRAP_CONTENT,
                region: a.REGION_BOTTOM,
                horizontalAlign: E.ALIGN.CENTER,
                verticalAlign: E.ALIGN.BOTTOM
            })).setBackground(255).setBackgroundAlpha(.8), _get((e = _assertThisInitialized(r), 
            _getPrototypeOf(s.prototype)), "addChild", e).call(e, t), r.scrollBars.push(t)), 
            i.scrollBars && r.scrollY && (e = new x({
                orientation: x.VERTICAL,
                scrollingContainer: _assertThisInitialized(r),
                minValue: 0,
                maxValue: 1
            }).setLayoutOptions(new a({
                width: O.WRAP_CONTENT,
                height: O.FILL_PARENT,
                region: a.REGION_RIGHT,
                horizontalAlign: E.ALIGN.RIGHT,
                verticalAlign: E.ALIGN.CENTER
            })).setBackground(255).setBackgroundAlpha(.8), _get((t = _assertThisInitialized(r), 
            _getPrototypeOf(s.prototype)), "addChild", t).call(t, e), r.scrollBars.push(e)), 
            r.boundCached = 0, r;
        }
        return _createClass(s, [ {
            key: "easeOutQuad",
            value: function(t, e, i, n) {
                return -i * (t /= n) * (t - 2) + e;
            }
        }, {
            key: "update",
            value: function() {
                var t, e = Math.min(Math.abs(this.speed) / 32, 1), e = (1 < this.speed ? this.speed -= e : this.speed < -1 ? this.speed += e : this.speed = 0, 
                this.innerContainer.insetContainer);
                0 !== this.speed && this._scrolling && (this._bounds = this._bounds || this.innerContainer.insetContainer.getLocalBounds(), 
                t = Math.round(Math.min(0, this.height - this._bounds.height)), e.y < t ? (e.y = t, 
                this._scrolling = !1) : 0 < e.y ? (this._scrolling = !1, this.current = 0, e.y = 0, 
                this._needBack = !0) : (this._scrolling = !0, this._needBack = !1, e.y += Math.round(this.speed))), 
                _get(_getPrototypeOf(s.prototype), "update", this).call(this), this.lastWidth === this.width && this.lastHeight === this.height || (t = this.expandMask, 
                this.mask.clear(), this.mask.lineStyle(0), this.mask.beginFill(16777215, 1), 0 === this.radius ? this.mask.drawRect(-t, -t, this.width + t, this.height + t) : this.mask.drawRoundedRect(-t, -t, this.width + t, this.height + t, this.radius), 
                this.mask.endFill(), this.lastWidth = this.width, this.lastHeight = this.height);
            }
        }, {
            key: "addScrollBar",
            value: function(t) {
                return _get(_getPrototypeOf(s.prototype), "addChild", this).call(this, t), this.scrollBars.push(t), 
                this;
            }
        }, {
            key: "addChild",
            value: function() {
                for (var t = 0; t < arguments.length; t++) this.innerContainer.addChild(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
                return this.getInnerBounds(!0), this;
            }
        }, {
            key: "updateScrollBars",
            value: function() {
                for (var t = 0, e = this.scrollBars.length; t < e; t++) {
                    var i, n = this.scrollBars[t];
                    n.orientation === m.HORIZONTAL ? (i = this.getPercentPosition("x"), n.value = i) : n.orientation === m.VERTICAL && (i = this.getPercentPosition("y"), 
                    n.value = i);
                }
            }
        }, {
            key: "getInnerBounds",
            value: function(t) {
                return (t || 1e3 < performance.now() - this.boundCached) && (this.innerContainer.insetContainer.getLocalBounds(this.innerBounds), 
                this.innerBounds.height = this.innerBounds.y + this.innerContainer.height || 0, 
                this.innerBounds.width = this.innerBounds.x + this.innerContainer.width || 0, this.boundCached = performance.now()), 
                this.innerBounds;
            }
        }, {
            key: "initialize",
            value: function() {
                _get(_getPrototypeOf(s.prototype), "initialize", this).call(this), (this.scrollX || this.scrollY) && this.initScrolling();
            }
        }, {
            key: "initScrolling",
            value: function() {
                var t, i, e, n, s = this, r = this.innerContainer.insetContainer, o = (new p.Point(), 
                this.scrollPosition, this.targetPosition, this), a = (this.dragScrolling && ((t = this.eventBroker.dnd).onDragStart = function(t) {
                    console.log("start drag"), e = Date.now(), t.data.pointerPosition, i = {
                        x: r.x,
                        y: r.y
                    }, s.scrolling;
                }, t.onDragMove = function(t, e) {
                    if (o._bounds = o._bounds || o.innerContainer.insetContainer.getLocalBounds(), s.scrollX && (r.x = i.x + e.x), 
                    s.scrollY) {
                        if (r.y > o.maxMarigin) return;
                        if (r.y < o.height - o._bounds.height - o.maxMarigin) return;
                        o._scrolling = !0, r.y = i.y + e.y;
                    }
                    n = e;
                }, t.onDragEnd = function(t) {
                    n && (s.speed = n.y / (Date.now() - e) * 16), s.scrolling && (s.scrolling = !1, 
                    s.emit("scrollend", t));
                }), new p.Point());
                new G(this, !0).onMouseScroll = function(t, e) {
                    console.error("onMouseScroll"), a.set(.2 * -e.x, .2 * -e.y), s.setScrollPosition(a);
                }, this.updateScrollBars();
            }
        }, {
            key: "momentum",
            value: function(t, e, i, n, s, r) {
                var e = t - e, i = Math.abs(e) / i, o = r.deceleration, a = r.itemHeight, h = r.swipeBounceTime, l = r.wheel, r = r.swipeTime, u = l ? 4 : 15, t = t + i / o * (e < 0 ? -1 : 1);
                return (t = l && a ? Math.round(t / a) * a : t) < n ? (t = s ? n - s / u * i : n, 
                r = h) : 0 < t && (t = s ? s / u * i : 0, r = h), {
                    destination: Math.round(t),
                    duration: r
                };
            }
        }, {
            key: "getPercentPosition",
            value: function(t) {
                var e = this.getInnerBounds(), i = this.innerContainer.insetContainer;
                return "x" === t ? i.x / (this.width - e.width) : "y" === t ? i.y / (this.height - e.height) : 0;
            }
        } ]), s;
    }(), A = function() {
        _inherits(r, h);
        var s = _createSuper(r);
        function r(t, e, i) {
            var n;
            return _classCallCheck(this, r), (n = s.call(this, 0, 0)).desc = void 0 !== t && t, 
            n.tweenTime = e || 0, n.tweenEase = i, n.items = [], n;
        }
        return _createClass(r, [ {
            key: "addChild",
            value: function(t, e, i) {
                _get(_getPrototypeOf(r.prototype), "addChild", this).call(this, t), -1 === this.items.indexOf(t) && this.items.push(t), 
                "function" == typeof e && (t._sortListValue = e), "function" == typeof i && (t._sortListThenByValue = i), 
                t._sortListRnd || (t._sortListRnd = Math.random()), this.sort();
            }
        }, {
            key: "removeChild",
            value: function(t) {
                if (1 < arguments.length) for (var e = 0; e < arguments.length; e++) this.removeChild(arguments[e]); else {
                    _get(_getPrototypeOf(r.prototype), "removeChild", this).call(this, t);
                    t = this.items.indexOf(t);
                    -1 !== t && this.items.splice(t, 1), this.sort();
                }
            }
        }, {
            key: "sort",
            value: function() {
                var t = this, e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                clearTimeout(this._sortTimeout), e ? this._sort() : this._sortTimeout = setTimeout(function() {
                    t._sort();
                }, 0);
            }
        }, {
            key: "_sort",
            value: function() {
                var t = this, n = this.desc, e = 0, i = !0;
                this.items.sort(function(t, e) {
                    var i = t._sortListValue() < e._sortListValue() ? n ? 1 : -1 : t._sortListValue() > e._sortListValue() ? n ? -1 : 1 : 0;
                    return i = 0 === (i = 0 === i && t._sortListThenByValue && e._sortListThenByValue ? t._sortListThenByValue() < e._sortListThenByValue() ? n ? 1 : -1 : t._sortListThenByValue() > e._sortListThenByValue() ? n ? -1 : 1 : 0 : i) ? t._sortListRnd > e._sortListRnd ? 1 : t._sortListRnd < e._sortListRnd ? -1 : 0 : i;
                });
                for (var s = 0; s < this.items.length; s++) {
                    var r = this.items[s], i = !i;
                    0 < this.tweenTime ? T.fromTo(r, this.tweenTime, {
                        x: r.x,
                        y: r.y
                    }, {
                        x: 0,
                        y: e
                    }, this.tweenEase) : (r.x = 0, r.y = e), e += r.height, "function" == typeof r.altering && r.altering(i);
                }
                0 < this.tweenTime && setTimeout(function() {
                    t.updatesettings(!1, !0);
                }, 1e3 * this.tweenTime);
            }
        } ]), r;
    }(), ct = function() {
        _inherits(a, I);
        var o = _createSuper(a);
        function a(t, e, i, n, s) {
            var r;
            return _classCallCheck(this, a), (r = o.call(this, t.width, t.height)).bw = e || 5, 
            r.vs = void 0 === n || n, r.hs = void 0 === i || i, r.t = t.baseTexture, r.f = t.frame, 
            r.tile = s, r.hs && (r.setting.minWidth = 2 * e), r.vs && (r.setting.minHeight = 2 * e), 
            r.update = function() {
                this.initialized && (vs && hs ? (str.x = sbr.x = sr.x = this._width - bw, sbl.y = sbr.y = sb.y = this._height - bw, 
                sf.width = st.width = sb.width = this._width - 2 * bw, sf.height = sl.height = sr.height = this._height - 2 * bw) : hs ? (sr.x = this._width - bw, 
                sl.height = sr.height = sf.height = this._height, sf.width = this._width - 2 * bw) : (sb.y = this._height - bw, 
                st.width = sb.width = sf.width = this._width, sf.height = this._height - 2 * bw), 
                null !== this.tint && (sf.tint = this.tint, vs && hs && (stl.tint = str.tint = sbl.tint = sbr.tint = this.tint), 
                hs && (sl.tint = sr.tint = this.tint), vs && (st.tint = sb.tint = this.tint)), null !== this.blendMode && (sf.blendMode = this.blendMode, 
                vs && hs && (stl.blendMode = str.blendMode = sbl.blendMode = sbr.blendMode = this.blendMode), 
                hs && (sl.blendMode = sr.blendMode = this.blendMode), vs && (st.blendMode = sb.blendMode = this.blendMode)));
            }, r;
        }
        return _createClass(a, [ {
            key: "initialize",
            value: function() {
                _get(_getPrototypeOf(a.prototype), "initialize", this).call(this);
                var t = this.f, e = this.bw, t = (this.vs && this.hs ? (this.ftl = new p.Rectangle(t.x, t.y, e, e), 
                this.ftr = new p.Rectangle(t.x + t.width - e, t.y, e, e), this.fbl = new p.Rectangle(t.x, t.y + t.height - e, e, e), 
                this.fbr = new p.Rectangle(t.x + t.width - e, t.y + t.height - e, e, e), this.ft = new p.Rectangle(t.x + e, t.y, t.width - 2 * e, e), 
                this.fb = new p.Rectangle(t.x + e, t.y + t.height - e, t.width - 2 * e, e), this.fl = new p.Rectangle(t.x, t.y + e, e, t.height - 2 * e), 
                this.fr = new p.Rectangle(t.x + t.width - e, t.y + e, e, t.height - 2 * e), this.ff = new p.Rectangle(t.x + e, t.y + e, t.width - 2 * e, t.height - 2 * e)) : this.hs ? (this.fl = new p.Rectangle(this.f.x, t.y, e, t.height), 
                this.fr = new p.Rectangle(t.x + t.width - e, t.y, e, t.height), this.ff = new p.Rectangle(t.x + e, t.y, t.width - 2 * e, t.height)) : (this.ft = new p.Rectangle(t.x, t.y, t.width, e), 
                this.fb = new p.Rectangle(t.x, t.y + t.height - e, t.width, e), this.ff = new p.Rectangle(t.x, t.y + e, t.width, t.height - 2 * e)), 
                this.t), i = this.ff, n = this.fl, s = this.fr, r = this.ft, o = this.fb;
                this.sf = new (this.tile ? p.extras.TilingSprite : p.Sprite)(new p.Texture(t, i)), 
                this.contentContainer.addChildAt(this.sf, 0), this.vs && this.hs && (this.stl = new p.Sprite(new p.Texture(t, this.ftl)), 
                this.str = new p.Sprite(new p.Texture(t, this.ftr)), this.sbl = new p.Sprite(new p.Texture(t, this.fbl)), 
                this.sbr = new p.Sprite(new p.Texture(t, this.fbr)), this.contentContainer.addChildAt(this.stl, 0), 
                this.contentContainer.addChildAt(this.str, 0), this.contentContainer.addChildAt(this.sbl, 0), 
                this.contentContainer.addChildAt(this.sbr, 0)), hs && (this.sl = new (this.tile ? p.extras.TilingSprite : p.Sprite)(new p.Texture(t, n)), 
                this.sr = new (this.tile ? p.extras.TilingSprite : p.Sprite)(new p.Texture(t, s)), 
                this.contentContainer.addChildAt(this.sl, 0), this.contentContainer.addChildAt(this.sr, 0)), 
                this.vs && (this.st = new (this.tile ? p.extras.TilingSprite : p.Sprite)(new p.Texture(t, r)), 
                this.sb = new (this.tile ? p.extras.TilingSprite : p.Sprite)(new p.Texture(t, o)), 
                this.contentContainer.addChildAt(this.st, 0), this.contentContainer.addChildAt(this.sb, 0)), 
                this.vs && this.hs && (this.st.x = e, this.sb.x = e, this.sl.y = e, this.sr.y = e, 
                this.stl.width = e, this.str.width = e, this.sbl.width = e, this.sbr.width = e, 
                this.stl.height = e, this.str.height = e, this.sbl.height = e, this.sbr.height = e), 
                this.hs && (this.sf.x = this.sl.width = this.sr.width = e), this.vs && (this.sf.y = this.st.height = this.sb.height = e);
            }
        }, {
            key: "update",
            value: function() {}
        } ]), a;
    }(), dt = function() {
        _inherits(n, I);
        var i = _createSuper(n);
        function n(t) {
            var e;
            return _classCallCheck(this, n), (e = i.call(this)).spriteDisplay = new p.Sprite(t), 
            e.contentContainer.addChild(e.spriteDisplay), e;
        }
        return _createClass(n, [ {
            key: "update",
            value: function() {
                null !== this.tint && (this.spriteDisplay.tint = this.tint), null !== this.blendMode && (this.spriteDisplay.blendMode = this.blendMode);
            }
        } ], [ {
            key: "fromImage",
            value: function(t) {
                return new n(new p.Texture(new p.BaseTexture(t)));
            }
        } ]), n;
    }(), gt = function() {
        _inherits(n, p.utils.EventEmitter);
        var i = _createSuper(n);
        function n(t) {
            var e;
            return _classCallCheck(this, n), (e = i.call(this)).stage = t, e;
        }
        return _createClass(n);
    }(), pt = function() {
        _inherits(i, gt);
        var e = _createSuper(i);
        function i(t) {
            return _classCallCheck(this, i), (t = e.call(this, t)).checkGroups = new Map(), 
            t;
        }
        return _createClass(i, [ {
            key: "in",
            value: function(t, e) {
                if (!e) throw new Error("Default check groups don't exist!");
                (this.checkGroups.get(e) || this.initGroup(e)).checks.push(t), t.checkGroup = e;
            }
        }, {
            key: "out",
            value: function(t) {
                var e = this.checkGroups.get(t.checkGroup), i = e.checks.indexOf(t);
                0 < i && e.checks.splice(i, 1), t.checkGroup = null;
            }
        }, {
            key: "notifyCheck",
            value: function(t) {
                var e = this.checkGroups.get(t.checkGroup);
                if (e) {
                    for (var i = e.checks, n = 0, s = i.length; n < s; n++) i[n] !== t && (i[n].checked = !1);
                    e.selected = t;
                }
            }
        }, {
            key: "getSelected",
            value: function(t) {
                return null == (t = this.checkGroups.get(t)) ? void 0 : t.selected;
            }
        }, {
            key: "initGroup",
            value: function(t) {
                var e = {
                    checks: [],
                    selected: null
                };
                return this.checkGroups.set(t, e), e;
            }
        } ]), i;
    }(), ft = function() {
        _inherits(i, gt);
        var e = _createSuper(i);
        function i(t) {
            return _classCallCheck(this, i), (t = e.call(this, t)).tabGroups = new Map(), t.useTab = !0, 
            t.useForward = !0, t.useBack = !0, t;
        }
        return _createClass(i, [ {
            key: "in",
            value: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "default", n = this.tabGroups.get(i);
                n || this.tabGroups.set(i, n = []), -1 === n.indexOf(t) && (t.tabIndex = void 0 !== e ? e : -1, 
                t.tabGroup = i, n.push(t), n.sort(function(t, e) {
                    return t.tabIndex - e.tabIndex;
                }));
            }
        }, {
            key: "out",
            value: function(t) {
                var e = this.tabGroups.get(t.tabGroup);
                !e || -1 !== (t = e.indexOf(t)) && e.splice(t, 1);
            }
        }, {
            key: "notifyFocus",
            value: function(t) {
                var e = this.currentItem;
                e && (e.blur(), this.emit("blur", e)), this.currentItem = t, this.emit("focus", t), 
                this.emit("focusChanged", t, e);
            }
        }, {
            key: "notifyBlur",
            value: function() {
                this.emit("blur", this.currentItem), this.emit("focusChanged", null, this.currentItem), 
                this.currentItem = null;
            }
        }, {
            key: "focus",
            value: function(t) {
                var e = this.currentItem;
                e && (e.blur(), this.emit("blur", e)), t.focus(), this.emit("focus", t), this.emit("focusChanged", t, e);
            }
        }, {
            key: "blur",
            value: function() {
                this.currentItem && (this.currentItem.blur(), this.emit("blur", this.currentItem), 
                this.emit("focusChanged", null, this.currentItem), this.currentItem = null);
            }
        }, {
            key: "onTab",
            value: function() {
                var t = this.tabGroups, e = this.currentItem;
                e && ((e = (t = t.get(e.tabGroup)).indexOf(e) + 1) >= t.length && (e = 0), this.focus(t[e]));
            }
        }, {
            key: "onForward",
            value: function() {
                var t, e;
                this.useForward && (e = this.currentItem, t = this.tabGroups, e && ((e = (t = t.get(e.tabGroup)).indexOf(e) + 1) >= t.length && (e = t.length - 1), 
                this.focus(t[e])));
            }
        }, {
            key: "onBack",
            value: function() {
                var t = this.currentItem, e = this.tabGroups;
                t && (t = (e = e.get(t.tabGroup)).indexOf(t) - 1, this.focus(e[t = t < 0 ? 0 : t]));
            }
        } ]), i;
    }(), R = function() {
        _inherits(s, p.Container);
        var n = _createSuper(s);
        function s(t, e) {
            var i;
            return _classCallCheck(this, s), (i = n.call(this)).__width = t, i.__height = e, 
            i.minWidth = 0, i.minHeight = 0, i.widgetChildren = [], i.interactive = !0, i.stage = _assertThisInitialized(i), 
            i.hitArea = new p.Rectangle(0, 0, 0, 0), i.initialized = !0, i.resize(t, e), i._checkBoxGroupCtl = new s.CHECK_BOX_GROUP_CONTROLLER(_assertThisInitialized(i)), 
            i._focusCtl = new s.FOCUS_CONTROLLER(_assertThisInitialized(i)), i;
        }
        return _createClass(s, [ {
            key: "measureAndLayout",
            value: function() {
                this.background && (this.background.width = this.width, this.background.height = this.height);
                for (var t = 0, e = this.widgetChildren.length; t < e; t++) {
                    var i = this.widgetChildren[t], n = i.layoutOptions || O.DEFAULT, s = n.width < O.MAX_DIMEN ? E.MeasureMode.EXACTLY : E.MeasureMode.AT_MOST, r = n.height < O.MAX_DIMEN ? E.MeasureMode.EXACTLY : E.MeasureMode.AT_MOST, o = Math.abs(n.width) < 1 ? n.width * this.width : n.width, a = Math.abs(n.height) < 1 ? n.height * this.height : n.height, o = (i.measure(s === E.MeasureMode.EXACTLY ? o : this.width, r === E.MeasureMode.EXACTLY ? a : this.height, s, r), 
                    n.x || 0), a = n.y || 0, s = (Math.abs(o) < 1 && (o *= this.width), Math.abs(a) < 1 && (a *= this.height), 
                    n.anchor || u.DEFAULT_ANCHOR), r = o - s.x * i.getMeasuredWidth(), n = a - s.y * i.getMeasuredHeight();
                    i.layout(r, n, r + i.getMeasuredWidth(), n + i.getMeasuredHeight(), !0);
                }
            }
        }, {
            key: "getBackground",
            value: function() {
                return this.background;
            }
        }, {
            key: "setBackground",
            value: function(t) {
                this.background && _get(_getPrototypeOf(s.prototype), "removeChild", this).call(this, this.background), 
                (this.background = t) && (_get(_getPrototypeOf(s.prototype), "addChildAt", this).call(this, t, 0), 
                this.background.width = this.width, this.background.height = this.height);
            }
        }, {
            key: "update",
            value: function(t) {
                this.emit("preupdate", this);
                for (var e = 0, i = t.length; e < i; e++) {
                    var n = t[e];
                    n.stage = this, n.initialized || n.initialize(), this.update(n.widgetChildren), 
                    n.update();
                }
                this.emit("postupdate", this);
            }
        }, {
            key: "render",
            value: function(t) {
                this.update(this.widgetChildren), _get(_getPrototypeOf(s.prototype), "render", this).call(this, t);
            }
        }, {
            key: "addChild",
            value: function(t) {
                var e = arguments.length;
                if (1 < e) for (var i = 0; i < e; i++) this.addChild(arguments[i]); else t.parent && t.parent.removeChild(t), 
                (t.parent = this).widgetChildren.push(t), _get(_getPrototypeOf(s.prototype), "addChild", this).call(this, t.insetContainer);
                this.measureAndLayout();
            }
        }, {
            key: "removeChild",
            value: function(t) {
                var e = arguments.length;
                if (1 < e) for (var i = 0; i < e; i++) this.removeChild(arguments[i]); else {
                    _get(_getPrototypeOf(s.prototype), "removeChild", this).call(this, t.insetContainer);
                    var n = this.widgetChildren.indexOf(t);
                    -1 !== n && (this.children.splice(n, 1), t.parent = null);
                }
                this.measureAndLayout();
            }
        }, {
            key: "resize",
            value: function(t, e) {
                this.width = t, this.height = e, this.hitArea && (this.hitArea.width = this.__width, 
                this.hitArea.height = this.__height), this.measureAndLayout();
            }
        }, {
            key: "width",
            get: function() {
                return this.__width;
            },
            set: function(t) {
                isNaN(t) || (this.__width = t, this.resize());
            }
        }, {
            key: "height",
            get: function() {
                return this.__height;
            },
            set: function(t) {
                isNaN(t) || (this.__height = t, this.resize());
            }
        }, {
            key: "checkBoxGroupController",
            get: function() {
                return this._checkBoxGroupCtl;
            }
        }, {
            key: "focusController",
            get: function() {
                return this._focusCtl;
            }
        } ]), s;
    }();
    R.CHECK_BOX_GROUP_CONTROLLER = pt, R.FOCUS_CONTROLLER = ft;
    var pt = function() {
        _inherits(a, s);
        var o = _createSuper(a);
        function a(t) {
            _classCallCheck(this, a), (h = o.call(this, t)).onKeyDown = function(t) {
                if (t.which !== h.ctrlKey && t.which !== h.cmdKey || (h.ctrlDown = !0), t.which === h.shiftKey && (h.shiftDown = !0), 
                !t.defaultPrevented) {
                    if (13 === t.which) return h.insertTextAtCaret("\n"), void t.preventDefault();
                    if (h.ctrlDown) {
                        if (65 === t.which) return h.select(), void t.preventDefault();
                        if (90 === t.which) return h.value != h._lastValue && (h.valueEvent = h._lastValue), 
                        h.setCaretIndex(h._lastValue.length + 1), void t.preventDefault();
                    }
                    if (8 === t.which) return h.deleteSelection() || (0 < h.caret._index || 1 === h.chars.length && h.caret._atEnd) && (h.caret._atEnd ? (h.valueEvent = h.value.slice(0, h.chars.length - 1), 
                    h.setCaretIndex(h.caret._index)) : (h.valueEvent = h.value.slice(0, h.caret._index - 1) + h.value.slice(h.caret._index), 
                    h.setCaretIndex(h.caret._index - 1))), void t.preventDefault();
                    var e;
                    46 === t.which ? (h.deleteSelection() || h.caret._atEnd || (h.valueEvent = h.value.slice(0, h.caret._index) + h.value.slice(h.caret._index + 1), 
                    h.setCaretIndex(h.caret._index)), t.preventDefault()) : 37 === t.which || 39 === t.which ? (h.rdd = 37 === t.which, 
                    h.shiftDown ? h.hasSelection ? h.selectionStart === h.caret._index ? h.selectionStart === h.selectionEnd && h.rdd === h.caret._forward ? h.setCaretIndex(h.caret._forward ? h.caret._index : h.caret._index + 1) : (e = h.rdd ? h.caret._index - 1 : h.caret._index + 1, 
                    h.selectRange(e, h.selectionEnd), h.caret._index = Math.min(h.chars.length - 1, Math.max(0, e))) : (e = h.rdd ? h.caret._index - 1 : h.caret._index + 1, 
                    h.selectRange(h.selectionStart, e), h.caret._index = Math.min(h.chars.length - 1, Math.max(0, e))) : (e = h.caret._atEnd ? h.caret._index + 1 : h.caret._index, 
                    e = h.rdd ? e - 1 : e, h.selectRange(e, e), h.caret._index = e, h.caret._forward = !rdd) : h.hasSelection ? h.setCaretIndex(h.rdd ? h.selectionStart : h.selectionEnd + 1) : h.setCaretIndex(h.caret._index + (h.rdd ? h.caret._atEnd ? 0 : -1 : 1)), 
                    t.preventDefault()) : !h.multiLine || 38 !== t.which && 40 !== t.which || (h.vrdd = 38 === t.which, 
                    h.shiftDown ? h.hasSelection ? (h.de.y = Math.max(0, Math.min(h.textHeightPX, h.de.y + (h.vrdd ? -h.lineHeight : h.lineHeight))), 
                    h.updateClosestIndex(h.de, !1), Math.abs(h.si - h.ei) <= 1 ? h.setCaretIndex(h.sie ? h.si + 1 : h.si) : (h.caret._index = (h.eie ? h.ei + 1 : h.ei) + (h.caret._down ? -1 : 0), 
                    h.selectRange(h.caret._down ? h.si : h.si - 1, h.caret._index))) : (h.si = h.caret._index, 
                    h.sie = !1, h.de.copyFrom(h.caret), h.de.y = Math.max(0, Math.min(h.textHeightPX, h.de.y + (h.vrdd ? -h.lineHeight : h.lineHeight))), 
                    h.updateClosestIndex(h.de, !1), h.caret._index = (h.eie ? h.ei + 1 : ei) - (h.vrdd ? 0 : 1), 
                    h.selectRange(h.vrdd ? h.si - 1 : h.si, h.caret._index), h.caret._down = !h.vrdd) : h.hasSelection ? h.setCaretIndex(h.vrdd ? h.selectionStart : h.selectionEnd + 1) : (h.ds.copyFrom(h.caret), 
                    h.ds.y += h.vrdd ? -h.lineHeight : h.lineHeight, h.ds.x += 1, h.updateClosestIndex(h.ds, !0), 
                    h.setCaretIndex(h.sie ? h.si + 1 : h.si)), t.preventDefault());
                }
            }, h.keyUpEvent = function(t) {
                t.which !== h.ctrlKey && t.which !== h.cmdKey || (h.ctrlDown = !1), t.which === h.shiftKey && (h.shiftDown = !1), 
                h.emit("keyup", t), t.defaultPrevented;
            }, h.copyEvent = function(t) {
                h.emit("copy", t), t.defaultPrevented || (h.hasSelection && (t.clipboardData || window.clipboardData).setData("Text", h.value.slice(h.selectionStart, h.selectionEnd + 1)), 
                t.preventDefault());
            }, h.cutEvent = function(t) {
                h.emit("cut", t), t.defaultPrevented || (h.hasSelection && (h.copyEvent(t), h.deleteSelection()), 
                t.preventDefault());
            }, h.pasteEvent = function(t) {
                var e;
                h.emit("paste", t), t.defaultPrevented || (e = t.clipboardData || window.clipboardData, 
                h.insertTextAtCaret(e.getData("Text")), t.preventDefault());
            }, h.inputEvent = function(t) {
                var e = b.value;
                e.length && (h.insertTextAtCaret(e), b.value = ""), t.preventDefault();
            }, h.inputBlurEvent = function(t) {
                h.blur();
            }, h.focus = function() {
                var t, e, i, n;
                h._isFocused || (_get((s = _assertThisInitialized(h), _getPrototypeOf(a.prototype)), "focus", s).call(s), 
                t = "".concat(h.contentContainer.worldTransform.tx, "px"), e = "".concat(h.contentContainer.worldTransform.ty, "px"), 
                i = "".concat(h.contentContainer.height, "px"), n = "".concat(h.contentContainer.width, "px"), 
                b.setAttribute("style", "position:fixed; left:".concat(t, "; top:").concat(e, "; height:").concat(i, "; width:").concat(n, ";")), 
                b.value = "", b.focus(), b.setAttribute("style", "position:fixed; left:-10px; top:-10px; width:0px; height: 0px;"), 
                h.innerContainer.cacheAsBitmap = !1, b.addEventListener("blur", h.inputBlurEvent, !1), 
                document.addEventListener("keydown", h.onKeyDown, !1), document.addEventListener("keyup", h.keyUpEvent, !1), 
                document.addEventListener("paste", h.pasteEvent, !1), document.addEventListener("copy", h.copyEvent, !1), 
                document.addEventListener("cut", h.cutEvent, !1), b.addEventListener("input", h.inputEvent, !1), 
                setTimeout(function() {
                    h.caret.visible || h.selection.visible || h.multiLine || h.setCaretIndex(h.chars.length);
                }, 0));
            }, h.blur = function() {
                h._isFocused && (_get((e = _assertThisInitialized(h), _getPrototypeOf(a.prototype)), "blur", e).call(e), 
                h.ctrlDown = !1, h.shiftDown = !1, h.hideCaret(), h.clearSelection(), 1 < h.chars.length && (h.innerContainer.cacheAsBitmap = !0), 
                b.removeEventListener("blur", h.inputBlurEvent), document.removeEventListener("keydown", h.onKeyDown), 
                document.removeEventListener("keyup", h.keyUpEvent), document.removeEventListener("paste", h.pasteEvent), 
                document.removeEventListener("copy", h.copyEvent), document.removeEventListener("cut", h.cutEvent), 
                b.removeEventListener("input", h.inputEvent), b.blur()), h.multiLine || h.resetScrollPosition();
            }, h.setCaretIndex = function(t) {
                var e, i;
                h.caret._atEnd = t >= h.chars.length, h.caret._index = Math.max(0, Math.min(h.chars.length - 1, t)), 
                h.chars.length && 0 < t ? (e = Math.max(0, Math.min(t, h.chars.length - 1)), (i = h.chars[e]) && i.wrapped ? (h.caret.x = i.x, 
                h.caret.y = i.y) : (e = Math.max(0, Math.min(t - 1, h.chars.length - 1)), i = h.chars[e], 
                h.caret.x = h.chars[e].x + h.chars[e].width, h.caret.y = h.chars[e].lineIndex * h.lineHeight + .5 * (h.lineHeight - h.textHeight))) : (h.caret.x = 0, 
                h.caret.y = .5 * (h.lineHeight - h.textHeight)), h.scrollToPosition(h.caret), h.showCaret();
            }, h.select = function() {
                h.selectRange(0, h.chars.length - 1);
            }, h.selectWord = function(t) {
                for (var e = h.chars.length, i = 0, n = 0; n < h.chars.length; n++) h.chars[n].wordIndex === t && (n < e && (e = n), 
                i < n && (i = n));
                h.selectRange(e, i);
            }, h.selectRange = function(t, e) {
                var i;
                -1 < t && -1 < e ? (i = Math.min(t, e, h.chars.length - 1), t = Math.min(Math.max(t, e), h.chars.length - 1), 
                i === h.selectionStart && t === h.selectionEnd || (h.hasSelection = !0, h.selection.visible = !0, 
                h.selectionStart = i, h.selectionEnd = t, h.hideCaret(), h.updateSelectionGraphics(), 
                h.updateSelectionColors()), h.focus()) : h.clearSelection();
            }, h.clearSelection = function() {
                h.hasSelection && (h.hasSelection = !1, h.selection.visible = !1, h.selectionStart = -1, 
                h.selectionEnd = -1, h.updateSelectionColors());
            }, h.updateSelectionGraphics = function() {
                var t = h.chars[h.selectionStart];
                if (void 0 !== t) {
                    var e = t.x, i = t.y, n = 0, s = h.textHeight, r = t.lineIndex;
                    h.selection.clear();
                    for (var o = h.selectionStart; o <= h.selectionEnd; o++) {
                        var a = h.chars[o];
                        a.lineIndex != r && (h.drawSelectionRect(e, i, n, s), e = a.x, i = a.y, r = a.lineIndex, 
                        n = 0), n += a.width;
                    }
                    h.drawSelectionRect(e, i, n, s), h.innerContainer.addChildAt(h.selection, 0);
                }
            }, h.drawSelectionRect = function(t, e, i, n) {
                h.selection.beginFill("0x".concat(h.selectedBackgroundColor.slice(1)), 1), h.selection.moveTo(t, e), 
                h.selection.lineTo(t + i, e), h.selection.lineTo(t + i, e + n), h.selection.lineTo(t, e + n), 
                h.selection.endFill();
            }, void 0 === b && ((b = document.createElement("INPUT")).setAttribute("type", "text"), 
            b.setAttribute("id", "_pui_tempInput"), b.setAttribute("style", "position:fixed; left:-10px; top:-10px; width:0px; height: 0px;"), 
            document.body.appendChild(b)), h.options = t, h._dirtyText = !0, h.maxLength = t.maxLength || 0, 
            h._value = h._lastValue = t.value || "", h.maxLength && (h._value = h._value.slice(0, h.maxLength)), 
            h.chars = [], h.multiLine = void 0 !== t.multiLine && t.multiLine, h.color = t.style && t.style.fill ? t.style.fill : "#000000", 
            h.selectedColor = t.selectedColor || "#ffffff", h.selectedBackgroundColor = t.selectedBackgroundColor || "#318cfa", 
            h.tempText = new p.Text("1", t.style), h.textHeight = h.tempText.height, h.lineHeight = t.lineHeight || h.textHeight || h._height, 
            h.tempText.destroy(), h.selection = new p.Graphics(), h.selection.visible = !1, 
            h.selection._startIndex = 0, h.selection._endIndex = 0, h.caret = new p.Graphics(), 
            h.caret.visible = !1, h.caret._index = 0, h.caret.lineStyle(t.caretWidth || 1, "#ffffff", 1), 
            h.caret.moveTo(0, 0), h.caret.lineTo(0, h.textHeight);
            var s, e, h, i = void 0 !== t.paddingLeft ? t.paddingLeft : t.padding, n = void 0 !== t.paddingRight ? t.paddingRight : t.padding, r = void 0 !== t.paddingBottom ? t.paddingBottom : t.padding, t = void 0 !== t.paddingTop ? t.paddingTop : t.padding;
            return h.textContainer = new ut({
                scrollX: !h.multiLine,
                scrollY: h.multiLine,
                dragScrolling: h.multiLine,
                expandMask: 2,
                softness: .2,
                overflowX: 40,
                overflowY: 40
            }).setPadding(i || 3, t || 3, n || 3, r || 3).setLayoutOptions(new O(O.FILL_PARENT, O.FILL_PARENT)), 
            h.addChild(h.textContainer), h.multiLine && (h._useNext = h._usePrev = !1, h.textContainer.dragRestrictAxis = "y", 
            h.textContainer.dragThreshold = 5, h.dragRestrictAxis = "x", h.dragThreshold = 5), 
            h.sp = new p.Point(), h._sp = new p.Point(), h.ds = new p.Point(), h.de = new p.Point(), 
            h.rdd = !1, h.vrdd = !1, h.selectionStart = -1, h.selectionEnd = -1, h.hasSelection = !1, 
            h.t = performance.now(), h.cc = 0, h.textLengthPX = 0, h.textHeightPX = 0, h.lineIndexMax = 0, 
            h.ctrlDown = !1, h.shiftDown = !1, h.shiftKey = 16, h.ctrlKey = 17, h.cmdKey = 91, 
            h.setupDrag(), h;
        }
        return _createClass(a, [ {
            key: "setupDrag",
            value: function() {
                var i = this, t = new V(this);
                t.onPress = function(t, e) {
                    e && (e = performance.now() - i.t, i.t = performance.now(), e < 250 ? (i.cc++, 1 < i.cc ? i.select() : (i.innerContainer.toLocal(i.sp, void 0, i.ds, !0), 
                    i.updateClosestIndex(i.ds, !0), (e = i.chars[i.si]) && (-1 != e.wordIndex ? i.selectWord(e.wordIndex) : i.selectRange(i.si, i.si)))) : (i.cc = 0, 
                    i.sp.copyFrom(t.data.global), i.innerContainer.toLocal(i.sp, void 0, i.ds, !0), 
                    i.chars.length && (i.updateClosestIndex(i.ds, !0), i.setCaretIndex(i.sie ? i.si + 1 : i.si)))), 
                    t.data.originalEvent.preventDefault();
                }, t.onDragMove = function(t, e) {
                    i.chars.length && i._isFocused && (i.de.x = i.sp.x + e.x, i.de.y = i.sp.y + e.y, 
                    i.innerContainer.toLocal(i.de, void 0, i.de, !0), i.updateClosestIndex(i.de, !1), 
                    i.si < i.ei ? (i.selectRange(i.sie ? i.si + 1 : i.si, i.eie ? i.ei : i.ei - 1), 
                    i.caret._index = i.eie ? i.ei : i.ei - 1) : i.si > i.ei ? (i.selectRange(i.ei, i.sie ? i.si : i.si - 1), 
                    i.caret._index = i.ei) : i.sie === i.eie ? i.setCaretIndex(i.sie ? i.si + 1 : i.si) : (i.selectRange(i.si, i.ei), 
                    i.caret._index = i.ei), i.caret._forward = i.si <= i.ei, i.caret._down = 0 < e.y, 
                    i.scrollToPosition(i.de));
                };
            }
        }, {
            key: "innerContainer",
            get: function() {
                return this.textContainer.innerContainer.insetContainer;
            }
        }, {
            key: "update",
            value: function() {
                this.width !== this._lastWidth && (this._lastWidth = this._width, this.multiLine && (this.updateText(), 
                this.caret.visible && this.setCaretIndex(this.caret._index), this.hasSelection && this.updateSelectionGraphics())), 
                this._dirtyText && (this.updateText(), this._dirtyText = !1);
            }
        }, {
            key: "updateText",
            value: function() {
                this.textLengthPX = 0, this.textHeightPX = 0;
                var t = this.lineIndexMax = 0, e = this._value.length, i = 0, n = .5 * (this.lineHeight - this.textHeight), s = 0;
                if (this.chars.length > e) {
                    for (s = this.chars.length - 1; e <= s; s--) this.innerContainer.removeChild(this.chars[s]), 
                    this.chars[s].destroy();
                    this.chars.splice(e, this.chars.length - e);
                }
                for (var r = !1, o = !1, a = 0, h = -1, l = !1, s = 0; s < this._value.length; s++) {
                    (r || o) && (h = s, a++);
                    var u = this._value[s], r = " " === u, c = ((o = "\n" === u) && (u = ""), this.chars[s]);
                    c ? c.text = u : (c = new p.Text(u, this.options.style), this.innerContainer.addChild(c), 
                    this.chars.push(c)), c.scale.x = o ? 0 : 1, c.wrapped = l, l = !1, (o || this.multiLine && i + c.width >= this._width - this.paddingLeft - this.paddingRight) && (t++, 
                    i = 0, n += this.lineHeight, -1 !== h && !o) ? (s = h - 1, h = -1, l = !0) : (c.lineIndex = t, 
                    c.x = i, c.y = n, c.wordIndex = r || o ? -1 : a, (i += c.width) > this.textLengthPX && (this.textLengthPX = i), 
                    n > this.textHeightPX && (this.textHeightPX = n));
                }
                this.lineIndexMax = t, this.innerContainer.addChild(this.caret), this.innerContainer.cacheAsBitmap && (this.innerContainer.cacheAsBitmap = !1, 
                this.innerContainer.cacheAsBitmap = !0), this.textContainer.update();
            }
        }, {
            key: "updateClosestIndex",
            value: function(t, e) {
                var i = 99999, n = -1, s = !1, r = 0;
                0 < this.lineIndexMax && (r = Math.max(0, Math.min(this.lineIndexMax, Math.floor(t.y / this.lineHeight))));
                for (var o = 0; o < this.chars.length; o++) {
                    var a, h = this.chars[o];
                    h.lineIndex === r && ((a = Math.abs(t.x - (h.x + .5 * h.width))) < i && (i = a, 
                    n = o, s = t.x > h.x + .5 * h.width));
                }
                e ? (this.si = n, this.sie = s) : (this.ei = n, this.eie = s);
            }
        }, {
            key: "deleteSelection",
            value: function() {
                return !!this.hasSelection && (this.value = this.value.slice(0, this.selectionStart) + this.value.slice(this.selectionEnd + 1), 
                this.setCaretIndex(this.selectionStart), !0);
            }
        }, {
            key: "updateSelectionColors",
            value: function() {
                for (var t = 0; t < this.chars.length; t++) t >= this.selectionStart && t <= this.selectionEnd ? this.chars[t].style.fill = this.selectedColor : this.chars[t].style.fill = this.color;
            }
        }, {
            key: "scrollToPosition",
            value: function(t) {
                this._sp.x = t.x, this._sp.y = t.y, this.multiLine && this._sp.y >= this.lineHeight && (this._sp.y += this.lineHeight), 
                this.textContainer.focusPosition(this._sp);
            }
        }, {
            key: "resetScrollPosition",
            value: function() {
                this._sp.set(0, 0), this.textContainer.focusPosition(this._sp);
            }
        }, {
            key: "hideCaret",
            value: function() {
                this.caret.visible = !1, clearInterval(this.caretInterval);
            }
        }, {
            key: "showCaret",
            value: function() {
                var t = this;
                this.clearSelection(), clearInterval(this.caretInterval), this.caret.alpha = 1, 
                this.caret.visible = !0, this.caretInterval = setInterval(function() {
                    t.caret.alpha = 0 === t.caret.alpha ? 1 : 0;
                }, 500);
            }
        }, {
            key: "insertTextAtCaret",
            value: function(t) {
                var e;
                this.multiLine || -1 === t.indexOf("\n") || (t = t.replace(/\n/g, "")), this.hasSelection && this.deleteSelection(), 
                (!this.maxLength || this.chars.length < this.maxLength) && (this.caret._atEnd ? (this.valueEvent += t, 
                this.setCaretIndex(this.chars.length)) : (e = Math.min(this.chars.length - 1, this.caret._index), 
                this.valueEvent = this.value.slice(0, e) + t + this.value.slice(e), this.setCaretIndex(e + t.length)));
            }
        }, {
            key: "valueEvent",
            get: function() {
                return this._value;
            },
            set: function(t) {
                this.maxLength && (t = t.slice(0, this.maxLength)), this._value != t && (this.value = t, 
                this.emit("change"));
            }
        }, {
            key: "value",
            get: function() {
                return this._value;
            },
            set: function(t) {
                this.maxLength && (t = t.slice(0, this.maxLength)), this._value != t && (this._lastValue = this._value, 
                this._value = t, this._dirtyText = !0, this.update());
            }
        }, {
            key: "text",
            get: function() {
                return this.value;
            },
            set: function(t) {
                this.value = t;
            }
        } ]), a;
    }(), ft = function() {
        _inherits(s, I);
        var n = _createSuper(s);
        function s(t, e, i) {
            _classCallCheck(this, s);
            t = new p.extras.TilingSprite(t), e = n.call(this, e || t.width, i || t.height);
            return e.sprite = t, e.contentContainer.addChild(e.sprite), e;
        }
        return _createClass(s, [ {
            key: "update",
            value: function() {
                null !== this.tint && (this.sprite.tint = this.tint), null !== this.blendMode && (this.sprite.blendMode = this.blendMode), 
                this.sprite.width = this._width, this.sprite.height = this._height;
            }
        }, {
            key: "tilePosition",
            get: function() {
                return this.sprite.tilePosition;
            }
        }, {
            key: "tilingPosition",
            set: function(t) {
                this.sprite.tilePosition = t;
            }
        }, {
            key: "tileScale",
            get: function() {
                return this.sprite.tileScale;
            },
            set: function(t) {
                this.sprite.tileScale = t;
            }
        } ]), s;
    }(), P = function() {
        _inherits(n, p.utils.EventEmitter);
        var i = _createSuper(n);
        function n(t) {
            var e;
            return _classCallCheck(this, n), (e = i.call(this))._disabled = !0, e._now = 0, 
            e.DeltaTime = 0, e.Time = performance.now(), e.Ms = 0, t && (e.disabled = !1), n.shared = _assertThisInitialized(e), 
            e;
        }
        return _createClass(n, [ {
            key: "disabled",
            get: function() {
                return this._disabled;
            },
            set: function(t) {
                this._disabled ? (this._disabled = !1, (n.shared = this).update(performance.now(), !0)) : this._disabled = !0;
            }
        }, {
            key: "update",
            value: function(t) {
                n.shared._now = t, n.shared.Ms = n.shared._now - n.shared.Time, n.shared.Time = n.shared._now, 
                n.shared.DeltaTime = .001 * n.shared.Ms, n.shared.emit("update", n.shared.DeltaTime), 
                T._update(n.shared.DeltaTime), n.shared._disabled || requestAnimationFrame(n.shared.update);
            }
        } ], [ {
            key: "on",
            value: function(t, e, i) {
                n.shared.on(t, e, i);
            }
        }, {
            key: "once",
            value: function(t, e, i) {
                n.shared.once(t, e, i);
            }
        }, {
            key: "removeListener",
            value: function(t, e) {
                n.shared.removeListener(t, e);
            }
        } ]), n;
    }(), S = (P.shared = new P(!0), function() {
        _inherits(g, p.utils.EventEmitter);
        var d = _createSuper(g);
        function g(t, e, i, n, s, r, o, a, h) {
            var l, u = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 1, c = !(10 < arguments.length && void 0 !== arguments[10]) || arguments[10];
            return _classCallCheck(this, g), (l = d.call(this)).manager = t, l.key = e, l.startValue = i, 
            l.endValue = n, l.erp = s, l.ease = r, l.observedValue = o, l.startTime = a, l.endTime = h, 
            l._repeat = u, l._flip = c, l._next = null, l._target = null, l._observedProperty = null, 
            l.autoCreated = !1, l;
        }
        return _createClass(g, [ {
            key: "update",
            value: function() {
                var t, e = ((e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : performance.now()) - this.startTime) / (this.endTime - this.startTime);
                if (e = Math.min(Math.max(e, 0), 1), this.ease && (e = this.ease(e)), this.observedValue = this.erp(this.startValue, this.endValue, Math.min(Math.max(e, 0), 1), this.observedValue), 
                this.emit("update", this.observedValue, this.key), this._target && (this._target[this._observedProperty] = this.observedValue), 
                1 <= e) {
                    if (--this._repeat, this.emit("cycle", this), 0 < this._repeat) return this._flip && (e = this.startValue, 
                    t = this.endValue, this.endValue = e, this.startValue = t), e = this.endTime - this.startTime, 
                    this.startTime += e, void (this.endTime += e);
                    this._next && this.manager.queue(this._next), this.reset(), this.emit("complete", this), 
                    this.removeAllListeners();
                }
            }
        }, {
            key: "target",
            value: function(t, e) {
                return this._target = t, this._observedProperty = e, this;
            }
        }, {
            key: "repeat",
            value: function(t) {
                var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                return this._repeat = t, this._flip = e, this;
            }
        }, {
            key: "chain",
            value: function(t, e, i, n, s) {
                var r = g.pool.pop() || new g();
                return r.manager = this.manager, r.key = 0, r.startValue = t, r.endValue = e, r.startTime = this.endTime, 
                r.endTime = r.startTime + i, r.erp = n, r.ease = s, this._next = r;
            }
        }, {
            key: "reset",
            value: function() {
                this.ease = null, this._repeat = 0, this._next = null, this._target = null, this._observedProperty = null;
            }
        }, {
            key: "destroy",
            value: function() {
                this.reset(), this.autoCreated && g.pool.push(this);
            }
        } ]), g;
    }()), vt = (S.pool = [], 0), mt = function() {
        function e() {
            var i = this, t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            _classCallCheck(this, e), this.onUpdate = function() {
                var t, e = _createForOfIteratorHelper(i.tweenMap);
                try {
                    for (e.s(); !(t = e.n()).done; ) _slicedToArray(t.value, 2)[1].update();
                } catch (t) {
                    e.e(t);
                } finally {
                    e.f();
                }
            }, this.onTweenComplete = function(t) {
                i.tweenMap.delete(t.key), t.destroy();
            }, this.tweenMap = new Map(), t && this.start();
        }
        return _createClass(e, [ {
            key: "tween",
            value: function(t, e, i, n, s) {
                var r = S.pool.pop() || new S();
                return r.autoCreated = !0, r.reset(), r.manager = this, r.key = vt++, r.startValue = t, 
                r.endValue = e, r.erp = n, r.ease = s, r.startTime = performance.now(), r.endTime = r.startTime + i, 
                this.tweenMap.set(r.key, r), r.on("complete", this.onTweenComplete), r;
            }
        }, {
            key: "queue",
            value: function(t) {
                return t.key = vt++, this.tweenMap.set(t.key, t), t.on("complete", this.onTweenComplete), 
                this;
            }
        }, {
            key: "start",
            value: function() {
                this.isRunning || (p.Ticker.shared.add(this.onUpdate), this.isRunning = !0);
            }
        }, {
            key: "stop",
            value: function() {
                this.isRunning && (p.Ticker.shared.remove(this.onUpdate), this.isRunning = !1);
            }
        } ]), e;
    }(), mt = Object.freeze({
        __proto__: null,
        EaseBoth: function(t) {
            return t <= .5 ? 2 * t * t : (t - .5) * (1.5 - t) * 2 + .5;
        },
        EaseIn: function(t) {
            return t * t;
        },
        EaseOut: function(t) {
            return (1 - t) * (1 - t);
        },
        NumberErp: function(t, e, i) {
            return (1 - i) * t + i * e;
        },
        PointErp: function(t, e, i, n) {
            return (n = n || new p.Point()).x = (1 - i) * t.x + i * e.x, n.y = (1 - i) * t.y + i * e.y, 
            n;
        },
        Tween: S,
        TweenManager: mt,
        get nextTweenKey() {
            return vt;
        }
    });
    return E.AnchorLayout = g, E.AnchorLayoutOptions = i, E.BorderLayout = lt, E.BorderLayoutOptions = a, 
    E.Button = j, E.CheckBox = Y, E.ClickManager = e, E.Ease = c, E.EventBroker = n, 
    E.EventManager = t, E.FastLayout = U, E.FastLayoutOptions = u, E.Helpers = v, E.Insets = F, 
    E.InteractiveGroup = h, E.LayoutOptions = O, E.ScrollBar = x, E.ScrollManager = G, 
    E.ScrollWidget = ut, E.SliceSprite = ct, E.Slider = m, E.SortableList = A, E.Sprite = dt, 
    E.Stage = R, E.TextInput = pt, E.TextWidget = X, E.Ticker = P, E.TilingSprite = ft, 
    E.Widget = I, E.WidgetGroup = z, E.create = d, E.tween = mt, E.wrapEase = f, E;
}, _default = puxi_js;

exports.default = _default;