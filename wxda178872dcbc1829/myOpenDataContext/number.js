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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var instance, numImg = wx.createImage(), numberCanvas = [], numberCtx = [];

numImg.src = "img/nums3.png";

for (var i = 0; i < 12; i++) numberCanvas[i] = wx.createCanvas(), numberCanvas[i].width = 46, 
numberCanvas[i].height = 100, numberCtx[i] = numberCanvas[i].getContext("2d");

var Num = exports.default = function() {
    return _createClass(function e() {
        if (_classCallCheck(this, e), instance) return instance;
        if (instance = this, numImg.complete) for (var t = 0; t < 12; t++) numberCtx[t].drawImage(numImg, 0, 100 * t, 46, 100, 0, 0, 46, 100); else numImg.onload = function() {
            for (var e = 0; e < 12; e++) numberCtx[e].drawImage(numImg, 0, 100 * e, 46, 100, 0, 0, 46, 100);
        };
    }, [ {
        key: "init",
        value: function(e, t, r, n, o, i) {
            var a = 6 < arguments.length && void 0 !== arguments[6] && arguments[6], u = 7 < arguments.length && void 0 !== arguments[7] && arguments[7], l = 8 < arguments.length && void 0 !== arguments[8] && arguments[8], f = 9 < arguments.length && void 0 !== arguments[9] && arguments[9], m = 10 < arguments.length && void 0 !== arguments[10] ? arguments[10] : 1, s = (1 != m && (e.save(), 
            e.globalAlpha = m), (r + "").split("")), c = i * s.length, v = 0, p = 0;
            if (a || u) for (var y = 0; y < s.length; y++) "1" == s[y] ? c -= i / 2 : "," == s[y] && (c -= i / 3 * 2);
            for (var b = 0; b < s.length; b++) "," == s[b] && (s[b] = 10), e.drawImage(numberCanvas[s[b]], n + b * i - v * i / 2 - p * i / 3 * 2 - (a ? c / 2 : u ? c : 0), o + (l ? i / 46 * -50 : f ? i / 46 * -100 : 0), i, i / 46 * 100), 
            "1" == s[b] ? v++ : 10 == s[b] && p++;
            1 != m && e.restore();
        }
    } ]);
}();