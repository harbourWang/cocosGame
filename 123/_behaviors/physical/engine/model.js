Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _msqr = _interopRequireDefault(require("./msqr.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
        Object.defineProperty(e, a.key, a);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

var Model = function() {
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
        value: function(n) {
            var e, a = this, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            for (e in r) this.models[e] = r[e];
            var i = new Date();
            t.forEach(function(e) {
                (e.frame || []).forEach(function(e) {
                    var t = n.getTexture(e.id);
                    t && a.getModelByImg(e.id, t);
                });
            }), console.log("load physic model cost", new Date() - i);
        }
    }, {
        key: "getImageFromTexture",
        value: function(e) {
            if (e.width === e.baseTexture.width && e.height === e.baseTexture.height) return e.baseTexture.source;
            var t = this.isMiniGame ? wx.createCanvas() : document.createElement("canvas"), n = t.width = e.width, a = t.height = e.height, r = (t.width = n, 
            t.height = a, t.getContext("2d")), n = (r.clearRect(0, 0, n, a), e.rotate && (r.translate(0, t.height), 
            r.rotate(-Math.PI / 180 * 90)), e.frame.width), a = e.frame.height;
            return r.drawImage(e.baseTexture.source, e.frame.x || 0, e.frame.y || 0, n, a, 0, 0, n, a), 
            t;
        }
    }, {
        key: "img2Context",
        value: function(e) {
            var t = this.isMiniGame ? wx.createCanvas() : document.createElement("canvas"), n = (t.width = e.width, 
            t.height = e.height, t.getContext("2d"));
            return n.translate(0, t.height), n.scale(1, -1), n.drawImage(e, 0, 0, e.width, e.height), 
            n.translate(0, t.height), n.scale(1, -1), t;
        }
    }, {
        key: "getModelByImg",
        value: function(e, t) {
            e = e.replace(/^style_/, "");
            var n = [];
            if (this.models[e]) return this.models[e];
            t = this.getImageFromTexture(t);
            if (!t) return n;
            var a = new Date(), t = this.img2Context(t);
            try {
                n = (0, _msqr.default)(t, {
                    maxShapes: 35,
                    tolerance: 2
                });
            } catch (e) {
                console.log(e), n = [];
            }
            return t = null, console.log("单个精灵物理描边耗时", new Date() - a), n = n.filter(function(e) {
                return 2 < e.length;
            }).sort(function(e, t) {
                return t.length - e.length;
            }).slice(0, 10), this.models[e] = n;
        }
    } ], [ {
        key: "getInstance",
        value: function(e) {
            return t.instance = t.instance ? t.instance : new t(e);
        }
    } ]), t;
}();

exports.default = Model;