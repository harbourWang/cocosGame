function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, n) {
    for (var r = 0; r < n.length; r++) {
        var t = n[r];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
        Object.defineProperty(e, t.key, t);
    }
}

function _createClass(e, n, r) {
    return n && _defineProperties(e.prototype, n), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var instance, numImg = wx.createImage(), numberCanvas = [], numberCtx = [];

numImg.src = "img/nums3.png";

for (var i = 0; i < 12; i++) numberCanvas[i] = wx.createCanvas(), numberCanvas[i].width = 46, 
numberCanvas[i].height = 100, numberCtx[i] = numberCanvas[i].getContext("2d");

var Num = function() {
    function n() {
        if (_classCallCheck(this, n), instance) return instance;
        if (instance = this, numImg.complete) for (var e = 0; e < 12; e++) numberCtx[e].drawImage(numImg, 0, 100 * e, 46, 100, 0, 0, 46, 100); else numImg.onload = function() {
            for (var e = 0; e < 12; e++) numberCtx[e].drawImage(numImg, 0, 100 * e, 46, 100, 0, 0, 46, 100);
        };
    }
    return _createClass(n, [ {
        key: "init",
        value: function(e, n, r, t, a, i) {
            var o = 6 < arguments.length && void 0 !== arguments[6] && arguments[6], s = 7 < arguments.length && void 0 !== arguments[7] && arguments[7], u = 8 < arguments.length && void 0 !== arguments[8] && arguments[8], l = 9 < arguments.length && void 0 !== arguments[9] && arguments[9], m = 10 < arguments.length && void 0 !== arguments[10] ? arguments[10] : 1, c = (1 != m && (e.save(), 
            e.globalAlpha = m), (r + "").split("")), f = i * c.length, v = 0, g = 0;
            if (o || s) for (var d = 0; d < c.length; d++) "1" == c[d] ? f -= i / 2 : "," == c[d] && (f -= i / 3 * 2);
            for (var b = 0; b < c.length; b++) "," == c[b] && (c[b] = 10), e.drawImage(numberCanvas[c[b]], t + b * i - v * i / 2 - g * i / 3 * 2 - (o ? f / 2 : s ? f : 0), a + (u ? i / 46 * -50 : l ? i / 46 * -100 : 0), i, i / 46 * 100), 
            "1" == c[b] ? v++ : 10 == c[b] && g++;
            1 != m && e.restore();
        }
    } ]), n;
}();

exports.default = Num;