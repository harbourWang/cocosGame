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

var _filterAdjustment = _interopRequireDefault(require("./filter-adjustment.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(e, t) {
    var r;
    if (e) return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (r = "Object" === (r = {}.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e);
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
    return i;
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var i = t[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(i.key), i);
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

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var i = _superPropBase(e, t);
        if (i) return (i = Object.getOwnPropertyDescriptor(i, t)).get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
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

var _default = exports.default = function() {
    function r(e, t) {
        return _classCallCheck(this, r), (e = _callSuper(this, r, [ e ])).options = t, e.runtime = e.getRuntime(), 
        e.isMiniGame = e.runtime.isMiniGame, e.renderEngine = e.runtime.RenderEngine, e.container = new e.renderEngine.Container(), 
        e.renderTarget.addChild(e.container), (0, _filterAdjustment.default)(e.renderEngine), 
        e.container.filters = [ new e.renderEngine.filters.AdjustmentFilter({
            gamma: 1.2,
            contrast: .8,
            saturation: .9,
            brightness: 1.2
        }, e.renderEngine) ], e._cameraEngine = e._objectClass._plugin.cameraEngine, e.show = !1, 
        e.nodArray = [], e.isNoded = !1, e.startTicking(), e._tickCount = 0, e;
    }
    return _inherits(r, LB.SDK.IPluginInstanceBase), _createClass(r, [ {
        key: "isCameraOpen",
        value: function() {
            return this._cameraEngine.isCameraOpen;
        }
    }, {
        key: "getSetting",
        value: function() {}
    }, {
        key: "openCamera",
        value: function() {
            this._cameraEngine.openCamera(), this.isMiniGame && (this.show = !0);
        }
    }, {
        key: "closeCamera",
        value: function() {
            this.isMiniGame, this.container.destroy(this.bg), this._cameraEngine.closeCamera();
        }
    }, {
        key: "isFaceDetectOpen",
        value: function() {
            return this._cameraEngine.isFaceDetectOpen;
        }
    }, {
        key: "openFaceDetect",
        value: function() {
            this._cameraEngine.openFaceDetect();
        }
    }, {
        key: "closeFaceDetect",
        value: function() {
            this._cameraEngine.closeFaceDetect();
        }
    }, {
        key: "isFaceDetected",
        value: function() {
            return this._cameraEngine.isFaceDetected;
        }
    }, {
        key: "getNosePositionX",
        value: function() {
            var e;
            return this.isMiniGame ? (e = this._cameraEngine.NoseX, this.renderTarget.x - this._width / 2 + e * this._width / this.cameraImageWidth) : this.renderTarget.x;
        }
    }, {
        key: "getNosePositionY",
        value: function() {
            var e;
            return this.isMiniGame ? (e = this._cameraEngine.NoseY, -(this.renderTarget.y - this._height / 2 + e * this._height / this.cameraImageHeight)) : -this.renderTarget.y;
        }
    }, {
        key: "isHeadNod",
        value: function() {
            return !!this.isMiniGame && this.isNoded;
        }
    }, {
        key: "release",
        value: function() {
            _get(_getPrototypeOf(r.prototype), "release", this).call(this);
        }
    }, {
        key: "tick",
        value: function() {
            if (this.isMiniGame && this.show) {
                if (this.frame) {
                    if (this._tickCount++, this._tickCount < 2) return;
                    this._tickCount = 0;
                    var e, t, r, i = new Uint8Array(this.frame.data), i = this.renderEngine.Texture.fromBuffer(i, this.frame.width, this.frame.height);
                    this.bg ? (this.bg.texture.destroy(!0), this.bg.texture = i) : (this.bg = new this.renderEngine.Sprite(i), 
                    i = this.runtime.renderer.gameHeight, e = this.runtime.renderer.gameWidth, t = this.frame.width, 
                    (r = this.frame.height) * e / i < t ? (this._width = i * t / r, this._height = i) : (this._width = e, 
                    this._height = e * r / t), this.bg.width = this._width, this.bg.height = this._height, 
                    this.bg.anchor.set(.5, .5), this.container.addChild(this.bg));
                } else this.frame = this._cameraEngine.cameraFrame, this.frame && (this.cameraImageWidth = this.frame.width, 
                this.cameraImageHeight = this.frame.height);
                this.frame && this.isFaceDetected() ? (this.nodArray.push(this._cameraEngine.NoseY), 
                this.nodArray = this.nodArray.slice(-10), 25 < Math.max.apply(Math, _toConsumableArray(this.nodArray)) - Math.min.apply(Math, _toConsumableArray(this.nodArray)) ? (this.isNoded = !0, 
                this.nodArray = []) : this.isNoded = !1) : this.nodArray = [];
            }
        }
    } ]);
}();