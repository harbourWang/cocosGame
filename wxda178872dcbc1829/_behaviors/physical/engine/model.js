Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _msqr = _interopRequireDefault(require("./msqr.js"));

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

var Model = exports.default = function() {
    function t(e) {
        _classCallCheck(this, t), this.models = {}, this.isMiniGame = e, this.canvas = e ? wx.createCanvas() : document.createElement("canvas"), 
        this.ctx = this.canvas.getContext("2d"), e ? this.models = window.physicalmodels || {} : window.physicalmodels = this.models;
    }
    return _createClass(t, [ {
        key: "release",
        value: function() {
            this.models = null, this.ctx = null, this.canvas = null, t.instance = null;
        }
    }, {
        key: "loadAllModels",
        value: function(r) {
            var e, n = this, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            for (e in i) this.models[e] = i[e];
            var o = new Date();
            t.forEach(function(e) {
                (e.frame || []).forEach(function(e) {
                    var t = r.getTexture(e.id);
                    t && n.getModelByImg(e.id, t);
                });
            }), console.log("load physic model cost", new Date() - o);
        }
    }, {
        key: "getImageFromTexture",
        value: function(e) {
            var t, r, n, i;
            return e.width === e.baseTexture.width && e.height === e.baseTexture.height ? e.baseTexture.source : (n = (t = this.isMiniGame ? wx.createCanvas() : document.createElement("canvas")).width = e.width, 
            i = t.height = e.height, t.width = n, t.height = i, (r = t.getContext("2d")).clearRect(0, 0, n, i), 
            e.rotate && (r.translate(0, t.height), r.rotate(-Math.PI / 180 * 90)), n = e.frame.width, 
            i = e.frame.height, r.drawImage(e.baseTexture.source, e.frame.x || 0, e.frame.y || 0, n, i, 0, 0, n, i), 
            t);
        }
    }, {
        key: "img2Context",
        value: function(e) {
            var t = this.isMiniGame ? wx.createCanvas() : document.createElement("canvas"), r = (t.width = e.width, 
            t.height = e.height, t.getContext("2d"));
            return r.translate(0, t.height), r.scale(1, -1), r.drawImage(e, 0, 0, e.width, e.height), 
            r.translate(0, t.height), r.scale(1, -1), t;
        }
    }, {
        key: "getModelByImg",
        value: function(e, t) {
            e = e.replace(/^style_/, "");
            var r = [];
            if (this.models[e]) return this.models[e];
            t = this.getImageFromTexture(t);
            if (t) {
                var n = new Date(), t = this.img2Context(t);
                try {
                    r = (0, _msqr.default)(t, {
                        maxShapes: 35,
                        tolerance: 2
                    });
                } catch (e) {
                    console.log(e), r = [];
                }
                console.log("单个精灵物理描边耗时", new Date() - n), r = r.filter(function(e) {
                    return 2 < e.length;
                }).sort(function(e, t) {
                    return t.length - e.length;
                }).slice(0, 10), this.models[e] = r;
            }
            return r;
        }
    } ], [ {
        key: "getInstance",
        value: function(e) {
            return t.instance = t.instance ? t.instance : new t(e);
        }
    } ]);
}();