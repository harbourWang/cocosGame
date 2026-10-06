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
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
    }
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e);
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
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

var _default = function() {
    _inherits(n, LB.SDK.IPluginInstanceBase);
    var r = _createSuper(n);
    function n(e, t) {
        return _classCallCheck(this, n), (e = r.call(this, e)).options = t, e.runtime = e.getRuntime(), 
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
    return _createClass(n, [ {
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
            _get(_getPrototypeOf(n.prototype), "release", this).call(this);
        }
    }, {
        key: "tick",
        value: function() {
            if (this.isMiniGame && this.show) {
                if (this.frame) {
                    if (this._tickCount++, this._tickCount < 2) return;
                    this._tickCount = 0;
                    var e, t, r, n = new Uint8Array(this.frame.data), n = this.renderEngine.Texture.fromBuffer(n, this.frame.width, this.frame.height);
                    this.bg ? (this.bg.texture.destroy(!0), this.bg.texture = n) : (this.bg = new this.renderEngine.Sprite(n), 
                    n = this.runtime.renderer.gameHeight, e = this.runtime.renderer.gameWidth, t = this.frame.width, 
                    (r = this.frame.height) * e / n < t ? (this._width = n * t / r, this._height = n) : (this._width = e, 
                    this._height = e * r / t), this.bg.width = this._width, this.bg.height = this._height, 
                    this.bg.anchor.set(.5, .5), this.container.addChild(this.bg));
                } else this.frame = this._cameraEngine.cameraFrame, this.frame && (this.cameraImageWidth = this.frame.width, 
                this.cameraImageHeight = this.frame.height);
                this.frame && this.isFaceDetected() ? (this.nodArray.push(this._cameraEngine.NoseY), 
                this.nodArray = this.nodArray.slice(-10), 25 < Math.max.apply(Math, _toConsumableArray(this.nodArray)) - Math.min.apply(Math, _toConsumableArray(this.nodArray)) ? (this.isNoded = !0, 
                this.nodArray = []) : this.isNoded = !1) : this.nodArray = [];
            }
        }
    } ]), n;
}();

exports.default = _default;