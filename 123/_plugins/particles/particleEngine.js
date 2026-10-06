function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
        Object.defineProperty(e, i.key, i);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var ParticleEngine = function() {
    function t(e) {
        if (_classCallCheck(this, t), void 0 === e) throw new Error("Please assign a rendering engine in the constructor before using pixiDust.js");
        this.renderer = "", e.ParticleContainer && (this.Container = e.Container, this.renderer = "pixi"), 
        this.globalParticles = [];
    }
    return _createClass(t, [ {
        key: "randomFloat",
        value: function(e, t) {
            return e + Math.random() * (t - e);
        }
    }, {
        key: "randomInt",
        value: function(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
        }
    }, {
        key: "create",
        value: function() {
            for (var e, i = this, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {
                return console.log("Sprite creation function");
            }, l = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {
                return new i.Container();
            }, t = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 20, s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0, n = !(6 < arguments.length && void 0 !== arguments[6]) || arguments[6], h = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : 0, d = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : 6.28, c = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 4, u = 10 < arguments.length && void 0 !== arguments[10] ? arguments[10] : 16, v = 11 < arguments.length && void 0 !== arguments[11] ? arguments[11] : .3, p = 12 < arguments.length && void 0 !== arguments[12] ? arguments[12] : 3, g = 13 < arguments.length && void 0 !== arguments[13] ? arguments[13] : .01, f = 14 < arguments.length && void 0 !== arguments[14] ? arguments[14] : .05, y = 15 < arguments.length && void 0 !== arguments[15] ? arguments[15] : .02, m = 16 < arguments.length && void 0 !== arguments[16] ? arguments[16] : .02, P = 17 < arguments.length && void 0 !== arguments[17] ? arguments[17] : .01, b = 18 < arguments.length && void 0 !== arguments[18] ? arguments[18] : .03, _ = 19 < arguments.length && void 0 !== arguments[19] ? arguments[19] : .2, w = 20 < arguments.length && void 0 !== arguments[20] ? arguments[20] : .8, x = [], C = (this.globalParticles.push(x), 
            []), F = (d - h) / (t - 1), S = 0; S < t; S++) n ? (e = this.randomFloat(h, d), 
            C.push(e)) : (C.push(e = void 0 === e ? h : e), e += F);
            return C.forEach(function(e) {
                return e = e, 0 < (t = r()).totalFrames && t.gotoAndStop(i.randomInt(0, t.totalFrames - 1)), 
                n = i.randomInt(c, u), t.width = n, t.height = n, t.anchor.set(.5, .5), t.x = a, 
                t.y = o, t.scaleSpeed = i.randomFloat(g, f), t.alphaSpeed = i.randomFloat(y, m), 
                t.rotationSpeed = i.randomFloat(P, b), t.lifeTime = i.randomFloat(_, w), n = i.randomFloat(v, p), 
                t.vx = n * Math.cos(e), t.vy = n * Math.sin(e), x.push(t), l.addChild(t), t._startTime = Date.now(), 
                void (t.updateParticle = function() {
                    t.vy += s, t.x += t.vx, t.y += t.vy, 0 < t.scale.x - t.scaleSpeed && (t.scale.x -= t.scaleSpeed), 
                    0 < t.scale.y - t.scaleSpeed && (t.scale.y -= t.scaleSpeed), t.rotation += t.rotationSpeed, 
                    t.alpha -= t.alphaSpeed, (t.alpha <= 0 || Date.now() - t._startTime > 1e3 * t.lifeTime) && (l.removeChild(t), 
                    x.splice(x.indexOf(t), 1));
                });
                var t, n;
            }), x;
        }
    }, {
        key: "emitter",
        value: function(e, t) {
            var n = {}, i = (n.playing = !1, this.interval = e, this.particleFunction = t, this);
            return n.play = function() {
                n.playing || (i.emitterPlay = !0, i._startTime = Date.now(), t(), n.playing = !0);
            }, n.stop = function() {
                n.playing && (i.emitterPlay = !1, n.playing = !1);
            }, n;
        }
    }, {
        key: "_setInterval",
        value: function(e) {
            this.interval = e;
        }
    }, {
        key: "update",
        value: function() {
            if (this.emitterPlay && Date.now() - this._startTime > this.interval && (this.particleFunction(), 
            this._startTime = Date.now()), 0 < this.globalParticles.length) for (var e = this.globalParticles.length - 1; 0 <= e; e--) {
                var t = this.globalParticles[e];
                if (0 < t.length) for (var n = t.length - 1; 0 <= n; n--) t[n].updateParticle(); else this.globalParticles.splice(this.globalParticles.indexOf(t), 1);
            }
        }
    } ]), t;
}();

exports.default = ParticleEngine;