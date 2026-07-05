function _typeof2(t) {
    return (_typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

var _get = function t(e, i, s) {
    null === e && (e = Function.prototype);
    var n = Object.getOwnPropertyDescriptor(e, i);
    return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(s) : void 0 : null !== (n = Object.getPrototypeOf(e)) ? t(n, i, s) : void 0;
}, _createClass = function() {
    function s(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(t, s.key, s);
        }
    }
    return function(t, e, i) {
        return e && s(t.prototype, e), i && s(t, i), t;
    };
}(), _typeof = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function(t) {
    return _typeof2(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
};

function _possibleConstructorReturn(t, e) {
    if (t) return !e || "object" !== _typeof2(e) && "function" != typeof e ? t : e;
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof2(e));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

!function(t, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([ "exports" ], e) : e((t = t || self).box2d = {});
}(void 0, function(N) {
    function f(t, e) {
        return void 0 !== t ? t : e;
    }
    var T = 1e37, I = 1e-5, C = I * I, y = 3.14159265359, G = .008, k = 2 / 180 * y, B = 2 * G, O = .2, S = 8 / 180 * y, E = .5 * y, j = E * E, J = -1, b = 2 / 180 * y;
    _createClass(V, [ {
        key: "toString",
        value: function() {
            return this.major + "." + this.minor + "." + this.revision;
        }
    } ]);
    var A = V;
    function V() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
        _classCallCheck(this, V), this.major = 0, this.minor = 0, this.revision = 0, this.major = t, 
        this.minor = e, this.revision = i;
    }
    var Z = new A(2, 3, 2);
    function W(t, e) {
        for (var i = [], s = 0; s < t; ++s) i.push(e(s));
        return i;
    }
    function H(t) {
        for (var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, i = [], s = 0; s < t; ++s) i.push(e);
        return i;
    }
    var Q = y / 180, Y = 180 / y, K = 2 * y, R = Math.abs, L = Math.min, D = Math.max;
    function M(t, e, i) {
        return t < e ? e : i < t ? i : t;
    }
    var $ = isFinite;
    function tt(t) {
        return t * t;
    }
    function et(t) {
        return 1 / Math.sqrt(t);
    }
    var it = Math.sqrt, st = Math.pow;
    var nt = Math.cos, ot = Math.sin, rt = Math.acos, at = Math.asin, lt = Math.atan2;
    _createClass(_t, [ {
        key: "Clone",
        value: function() {
            return new _t(this.x, this.y);
        }
    }, {
        key: "SetZero",
        value: function() {
            return this.x = 0, this.y = 0, this;
        }
    }, {
        key: "Set",
        value: function(t, e) {
            return this.x = t, this.y = e, this;
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.x = t.x, this.y = t.y, this;
        }
    }, {
        key: "SelfAdd",
        value: function(t) {
            return this.x += t.x, this.y += t.y, this;
        }
    }, {
        key: "SelfAddXY",
        value: function(t, e) {
            return this.x += t, this.y += e, this;
        }
    }, {
        key: "SelfSub",
        value: function(t) {
            return this.x -= t.x, this.y -= t.y, this;
        }
    }, {
        key: "SelfSubXY",
        value: function(t, e) {
            return this.x -= t, this.y -= e, this;
        }
    }, {
        key: "SelfMul",
        value: function(t) {
            return this.x *= t, this.y *= t, this;
        }
    }, {
        key: "SelfMulAdd",
        value: function(t, e) {
            return this.x += t * e.x, this.y += t * e.y, this;
        }
    }, {
        key: "SelfMulSub",
        value: function(t, e) {
            return this.x -= t * e.x, this.y -= t * e.y, this;
        }
    }, {
        key: "Dot",
        value: function(t) {
            return this.x * t.x + this.y * t.y;
        }
    }, {
        key: "Cross",
        value: function(t) {
            return this.x * t.y - this.y * t.x;
        }
    }, {
        key: "Length",
        value: function() {
            var t = this.x, e = this.y;
            return Math.sqrt(t * t + e * e);
        }
    }, {
        key: "LengthSquared",
        value: function() {
            var t = this.x, e = this.y;
            return t * t + e * e;
        }
    }, {
        key: "Normalize",
        value: function() {
            var t, e = this.Length();
            return I <= e && (this.x *= t = 1 / e, this.y *= t), e;
        }
    }, {
        key: "SelfNormalize",
        value: function() {
            var t = this.Length();
            return I <= t && (this.x *= t = 1 / t, this.y *= t), this;
        }
    }, {
        key: "SelfRotate",
        value: function(t) {
            var e = Math.cos(t), t = Math.sin(t), i = this.x;
            return this.x = e * i - t * this.y, this.y = t * i + e * this.y, this;
        }
    }, {
        key: "SelfRotateCosSin",
        value: function(t, e) {
            var i = this.x;
            return this.x = t * i - e * this.y, this.y = e * i + t * this.y, this;
        }
    }, {
        key: "IsValid",
        value: function() {
            return isFinite(this.x) && isFinite(this.y);
        }
    }, {
        key: "SelfCrossVS",
        value: function(t) {
            var e = this.x;
            return this.x = t * this.y, this.y = -t * e, this;
        }
    }, {
        key: "SelfCrossSV",
        value: function(t) {
            var e = this.x;
            return this.x = -t * this.y, this.y = t * e, this;
        }
    }, {
        key: "SelfMinV",
        value: function(t) {
            return this.x = L(this.x, t.x), this.y = L(this.y, t.y), this;
        }
    }, {
        key: "SelfMaxV",
        value: function(t) {
            return this.x = D(this.x, t.x), this.y = D(this.y, t.y), this;
        }
    }, {
        key: "SelfAbs",
        value: function() {
            return this.x = R(this.x), this.y = R(this.y), this;
        }
    }, {
        key: "SelfNeg",
        value: function() {
            return this.x = -this.x, this.y = -this.y, this;
        }
    }, {
        key: "SelfSkew",
        value: function() {
            var t = this.x;
            return this.x = -this.y, this.y = t, this;
        }
    } ], [ {
        key: "MakeArray",
        value: function(t) {
            return W(t, function(t) {
                return new _t();
            });
        }
    }, {
        key: "AbsV",
        value: function(t, e) {
            return e.x = R(t.x), e.y = R(t.y), e;
        }
    }, {
        key: "MinV",
        value: function(t, e, i) {
            return i.x = L(t.x, e.x), i.y = L(t.y, e.y), i;
        }
    }, {
        key: "MaxV",
        value: function(t, e, i) {
            return i.x = D(t.x, e.x), i.y = D(t.y, e.y), i;
        }
    }, {
        key: "ClampV",
        value: function(t, e, i, s) {
            return s.x = M(t.x, e.x, i.x), s.y = M(t.y, e.y, i.y), s;
        }
    }, {
        key: "RotateV",
        value: function(t, e, i) {
            var s = t.x, t = t.y, n = Math.cos(e), e = Math.sin(e);
            return i.x = n * s - e * t, i.y = e * s + n * t, i;
        }
    }, {
        key: "DotVV",
        value: function(t, e) {
            return t.x * e.x + t.y * e.y;
        }
    }, {
        key: "CrossVV",
        value: function(t, e) {
            return t.x * e.y - t.y * e.x;
        }
    }, {
        key: "CrossVS",
        value: function(t, e, i) {
            var s = t.x;
            return i.x = e * t.y, i.y = -e * s, i;
        }
    }, {
        key: "CrossVOne",
        value: function(t, e) {
            var i = t.x;
            return e.x = t.y, e.y = -i, e;
        }
    }, {
        key: "CrossSV",
        value: function(t, e, i) {
            var s = e.x;
            return i.x = -t * e.y, i.y = t * s, i;
        }
    }, {
        key: "CrossOneV",
        value: function(t, e) {
            var i = t.x;
            return e.x = -t.y, e.y = i, e;
        }
    }, {
        key: "AddVV",
        value: function(t, e, i) {
            return i.x = t.x + e.x, i.y = t.y + e.y, i;
        }
    }, {
        key: "SubVV",
        value: function(t, e, i) {
            return i.x = t.x - e.x, i.y = t.y - e.y, i;
        }
    }, {
        key: "MulSV",
        value: function(t, e, i) {
            return i.x = e.x * t, i.y = e.y * t, i;
        }
    }, {
        key: "MulVS",
        value: function(t, e, i) {
            return i.x = t.x * e, i.y = t.y * e, i;
        }
    }, {
        key: "AddVMulSV",
        value: function(t, e, i, s) {
            return s.x = t.x + e * i.x, s.y = t.y + e * i.y, s;
        }
    }, {
        key: "SubVMulSV",
        value: function(t, e, i, s) {
            return s.x = t.x - e * i.x, s.y = t.y - e * i.y, s;
        }
    }, {
        key: "AddVCrossSV",
        value: function(t, e, i, s) {
            var n = i.x;
            return s.x = t.x - e * i.y, s.y = t.y + e * n, s;
        }
    }, {
        key: "MidVV",
        value: function(t, e, i) {
            return i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y), i;
        }
    }, {
        key: "ExtVV",
        value: function(t, e, i) {
            return i.x = .5 * (e.x - t.x), i.y = .5 * (e.y - t.y), i;
        }
    }, {
        key: "IsEqualToV",
        value: function(t, e) {
            return t.x === e.x && t.y === e.y;
        }
    }, {
        key: "DistanceVV",
        value: function(t, e) {
            var i = t.x - e.x, t = t.y - e.y;
            return Math.sqrt(i * i + t * t);
        }
    }, {
        key: "DistanceSquaredVV",
        value: function(t, e) {
            var i = t.x - e.x, t = t.y - e.y;
            return i * i + t * t;
        }
    }, {
        key: "NegV",
        value: function(t, e) {
            return e.x = -t.x, e.y = -t.y, e;
        }
    } ]);
    var X = _t;
    function _t() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
        _classCallCheck(this, _t), this.x = t, this.y = e;
    }
    X.ZERO = new X(0, 0), X.UNITX = new X(1, 0), X.UNITY = new X(0, 1), X.s_t0 = new X(), 
    X.s_t1 = new X(), X.s_t2 = new X(), X.s_t3 = new X();
    var mt = new X(0, 0), l = (_createClass(ht, [ {
        key: "Clone",
        value: function() {
            return new ht(this.x, this.y, this.z);
        }
    }, {
        key: "SetZero",
        value: function() {
            return this.x = 0, this.y = 0, this.z = 0, this;
        }
    }, {
        key: "SetXYZ",
        value: function(t, e, i) {
            return this.x = t, this.y = e, this.z = i, this;
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this;
        }
    }, {
        key: "SelfNeg",
        value: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
    }, {
        key: "SelfAdd",
        value: function(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z, this;
        }
    }, {
        key: "SelfAddXYZ",
        value: function(t, e, i) {
            return this.x += t, this.y += e, this.z += i, this;
        }
    }, {
        key: "SelfSub",
        value: function(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
        }
    }, {
        key: "SelfSubXYZ",
        value: function(t, e, i) {
            return this.x -= t, this.y -= e, this.z -= i, this;
        }
    }, {
        key: "SelfMul",
        value: function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this;
        }
    } ], [ {
        key: "DotV3V3",
        value: function(t, e) {
            return t.x * e.x + t.y * e.y + t.z * e.z;
        }
    }, {
        key: "CrossV3V3",
        value: function(t, e, i) {
            var s = t.x, n = t.y, t = t.z, o = e.x, r = e.y, e = e.z;
            return i.x = n * e - t * r, i.y = t * o - s * e, i.z = s * r - n * o, i;
        }
    } ]), ht);
    function ht() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
        _classCallCheck(this, ht), this.x = t, this.y = e, this.z = i;
    }
    l.ZERO = new l(0, 0, 0), l.s_t0 = new l();
    _createClass(ut, [ {
        key: "Clone",
        value: function() {
            return new ut().Copy(this);
        }
    }, {
        key: "SetSSSS",
        value: function(t, e, i, s) {
            return this.ex.Set(t, i), this.ey.Set(e, s), this;
        }
    }, {
        key: "SetVV",
        value: function(t, e) {
            return this.ex.Copy(t), this.ey.Copy(e), this;
        }
    }, {
        key: "SetAngle",
        value: function(t) {
            var e = Math.cos(t), t = Math.sin(t);
            return this.ex.Set(e, t), this.ey.Set(-t, e), this;
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.ex.Copy(t.ex), this.ey.Copy(t.ey), this;
        }
    }, {
        key: "SetIdentity",
        value: function() {
            return this.ex.Set(1, 0), this.ey.Set(0, 1), this;
        }
    }, {
        key: "SetZero",
        value: function() {
            return this.ex.SetZero(), this.ey.SetZero(), this;
        }
    }, {
        key: "GetAngle",
        value: function() {
            return Math.atan2(this.ex.y, this.ex.x);
        }
    }, {
        key: "GetInverse",
        value: function(t) {
            var e = this.ex.x, i = this.ey.x, s = this.ex.y, n = this.ey.y, o = e * n - i * s;
            return t.ex.x = (o = 0 !== o ? 1 / o : o) * n, t.ey.x = -o * i, t.ex.y = -o * s, 
            t.ey.y = o * e, t;
        }
    }, {
        key: "Solve",
        value: function(t, e, i) {
            var s = this.ex.x, n = this.ey.x, o = this.ex.y, r = this.ey.y, a = s * r - n * o;
            return i.x = (a = 0 !== a ? 1 / a : a) * (r * t - n * e), i.y = a * (s * e - o * t), 
            i;
        }
    }, {
        key: "SelfAbs",
        value: function() {
            return this.ex.SelfAbs(), this.ey.SelfAbs(), this;
        }
    }, {
        key: "SelfInv",
        value: function() {
            return this.GetInverse(this), this;
        }
    }, {
        key: "SelfAddM",
        value: function(t) {
            return this.ex.SelfAdd(t.ex), this.ey.SelfAdd(t.ey), this;
        }
    }, {
        key: "SelfSubM",
        value: function(t) {
            return this.ex.SelfSub(t.ex), this.ey.SelfSub(t.ey), this;
        }
    } ], [ {
        key: "FromVV",
        value: function(t, e) {
            return new ut().SetVV(t, e);
        }
    }, {
        key: "FromSSSS",
        value: function(t, e, i, s) {
            return new ut().SetSSSS(t, e, i, s);
        }
    }, {
        key: "FromAngle",
        value: function(t) {
            return new ut().SetAngle(t);
        }
    }, {
        key: "AbsM",
        value: function(t, e) {
            var i = t.ex, t = t.ey;
            return e.ex.x = R(i.x), e.ex.y = R(i.y), e.ey.x = R(t.x), e.ey.y = R(t.y), e;
        }
    }, {
        key: "MulMV",
        value: function(t, e, i) {
            var s = t.ex, t = t.ey, n = e.x, e = e.y;
            return i.x = s.x * n + t.x * e, i.y = s.y * n + t.y * e, i;
        }
    }, {
        key: "MulTMV",
        value: function(t, e, i) {
            var s = t.ex, t = t.ey, n = e.x, e = e.y;
            return i.x = s.x * n + s.y * e, i.y = t.x * n + t.y * e, i;
        }
    }, {
        key: "AddMM",
        value: function(t, e, i) {
            var s = t.ex, t = t.ey, n = e.ex, e = e.ey;
            return i.ex.x = s.x + n.x, i.ex.y = s.y + n.y, i.ey.x = t.x + e.x, i.ey.y = t.y + e.y, 
            i;
        }
    }, {
        key: "MulMM",
        value: function(t, e, i) {
            var s = t.ex.x, n = t.ex.y, o = t.ey.x, t = t.ey.y, r = e.ex.x, a = e.ex.y, l = e.ey.x, e = e.ey.y;
            return i.ex.x = s * r + o * a, i.ex.y = n * r + t * a, i.ey.x = s * l + o * e, i.ey.y = n * l + t * e, 
            i;
        }
    }, {
        key: "MulTMM",
        value: function(t, e, i) {
            var s = t.ex.x, n = t.ex.y, o = t.ey.x, t = t.ey.y, r = e.ex.x, a = e.ex.y, l = e.ey.x, e = e.ey.y;
            return i.ex.x = s * r + n * a, i.ex.y = o * r + t * a, i.ey.x = s * l + n * e, i.ey.y = o * l + t * e, 
            i;
        }
    } ]);
    var d = ut;
    function ut() {
        _classCallCheck(this, ut), this.ex = new X(1, 0), this.ey = new X(0, 1);
    }
    d.IDENTITY = new d();
    _createClass(ft, [ {
        key: "Clone",
        value: function() {
            return new ft().Copy(this);
        }
    }, {
        key: "SetVVV",
        value: function(t, e, i) {
            return this.ex.Copy(t), this.ey.Copy(e), this.ez.Copy(i), this;
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.ex.Copy(t.ex), this.ey.Copy(t.ey), this.ez.Copy(t.ez), this;
        }
    }, {
        key: "SetIdentity",
        value: function() {
            return this.ex.SetXYZ(1, 0, 0), this.ey.SetXYZ(0, 1, 0), this.ez.SetXYZ(0, 0, 1), 
            this;
        }
    }, {
        key: "SetZero",
        value: function() {
            return this.ex.SetZero(), this.ey.SetZero(), this.ez.SetZero(), this;
        }
    }, {
        key: "SelfAddM",
        value: function(t) {
            return this.ex.SelfAdd(t.ex), this.ey.SelfAdd(t.ey), this.ez.SelfAdd(t.ez), this;
        }
    }, {
        key: "Solve33",
        value: function(t, e, i, s) {
            var n = this.ex.x, o = this.ex.y, r = this.ex.z, a = this.ey.x, l = this.ey.y, _ = this.ey.z, m = this.ez.x, h = this.ez.y, u = this.ez.z, c = n * (l * u - _ * h) + o * (_ * m - a * u) + r * (a * h - l * m);
            return s.x = (c = 0 !== c ? 1 / c : c) * (t * (l * u - _ * h) + e * (_ * m - a * u) + i * (a * h - l * m)), 
            s.y = c * (n * (e * u - i * h) + o * (i * m - t * u) + r * (t * h - e * m)), s.z = c * (n * (l * i - _ * e) + o * (_ * t - a * i) + r * (a * e - l * t)), 
            s;
        }
    }, {
        key: "Solve22",
        value: function(t, e, i) {
            var s = this.ex.x, n = this.ey.x, o = this.ex.y, r = this.ey.y, a = s * r - n * o;
            return i.x = (a = 0 !== a ? 1 / a : a) * (r * t - n * e), i.y = a * (s * e - o * t), 
            i;
        }
    }, {
        key: "GetInverse22",
        value: function(t) {
            var e = this.ex.x, i = this.ey.x, s = this.ex.y, n = this.ey.y, o = e * n - i * s;
            t.ex.x = (o = 0 !== o ? 1 / o : o) * n, t.ey.x = -o * i, t.ex.z = 0, t.ex.y = -o * s, 
            t.ey.y = o * e, t.ey.z = 0, t.ez.x = 0, t.ez.y = 0, t.ez.z = 0;
        }
    }, {
        key: "GetSymInverse33",
        value: function(t) {
            var e = l.DotV3V3(this.ex, l.CrossV3V3(this.ey, this.ez, l.s_t0)), i = this.ex.x, s = this.ey.x, n = this.ez.x, o = this.ey.y, r = this.ez.y, a = this.ez.z;
            t.ex.x = (e = 0 !== e ? 1 / e : e) * (o * a - r * r), t.ex.y = e * (n * r - s * a), 
            t.ex.z = e * (s * r - n * o), t.ey.x = t.ex.y, t.ey.y = e * (i * a - n * n), t.ey.z = e * (n * s - i * r), 
            t.ez.x = t.ex.z, t.ez.y = t.ey.z, t.ez.z = e * (i * o - s * s);
        }
    } ], [ {
        key: "MulM33V3",
        value: function(t, e, i) {
            var s = e.x, n = e.y, e = e.z;
            return i.x = t.ex.x * s + t.ey.x * n + t.ez.x * e, i.y = t.ex.y * s + t.ey.y * n + t.ez.y * e, 
            i.z = t.ex.z * s + t.ey.z * n + t.ez.z * e, i;
        }
    }, {
        key: "MulM33XYZ",
        value: function(t, e, i, s, n) {
            return n.x = t.ex.x * e + t.ey.x * i + t.ez.x * s, n.y = t.ex.y * e + t.ey.y * i + t.ez.y * s, 
            n.z = t.ex.z * e + t.ey.z * i + t.ez.z * s, n;
        }
    }, {
        key: "MulM33V2",
        value: function(t, e, i) {
            var s = e.x, e = e.y;
            return i.x = t.ex.x * s + t.ey.x * e, i.y = t.ex.y * s + t.ey.y * e, i;
        }
    }, {
        key: "MulM33XY",
        value: function(t, e, i, s) {
            return s.x = t.ex.x * e + t.ey.x * i, s.y = t.ex.y * e + t.ey.y * i, s;
        }
    } ]);
    var ct = ft;
    function ft() {
        _classCallCheck(this, ft), this.ex = new l(1, 0, 0), this.ey = new l(0, 1, 0), this.ez = new l(0, 0, 1);
    }
    ct.IDENTITY = new ct();
    _createClass(dt, [ {
        key: "Clone",
        value: function() {
            return new dt().Copy(this);
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.s = t.s, this.c = t.c, this;
        }
    }, {
        key: "SetAngle",
        value: function(t) {
            return this.s = Math.sin(t), this.c = Math.cos(t), this;
        }
    }, {
        key: "SetIdentity",
        value: function() {
            return this.s = 0, this.c = 1, this;
        }
    }, {
        key: "GetAngle",
        value: function() {
            return Math.atan2(this.s, this.c);
        }
    }, {
        key: "GetXAxis",
        value: function(t) {
            return t.x = this.c, t.y = this.s, t;
        }
    }, {
        key: "GetYAxis",
        value: function(t) {
            return t.x = -this.s, t.y = this.c, t;
        }
    } ], [ {
        key: "MulRR",
        value: function(t, e, i) {
            var s = t.c, t = t.s, n = e.c, e = e.s;
            return i.s = t * n + s * e, i.c = s * n - t * e, i;
        }
    }, {
        key: "MulTRR",
        value: function(t, e, i) {
            var s = t.c, t = t.s, n = e.c, e = e.s;
            return i.s = s * e - t * n, i.c = s * n + t * e, i;
        }
    }, {
        key: "MulRV",
        value: function(t, e, i) {
            var s = t.c, t = t.s, n = e.x, e = e.y;
            return i.x = s * n - t * e, i.y = t * n + s * e, i;
        }
    }, {
        key: "MulTRV",
        value: function(t, e, i) {
            var s = t.c, t = t.s, n = e.x, e = e.y;
            return i.x = s * n + t * e, i.y = -t * n + s * e, i;
        }
    } ]);
    var P = dt;
    function dt() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
        _classCallCheck(this, dt), this.s = 0, this.c = 1, t && (this.s = Math.sin(t), this.c = Math.cos(t));
    }
    P.IDENTITY = new P();
    _createClass(yt, [ {
        key: "Clone",
        value: function() {
            return new yt().Copy(this);
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.p.Copy(t.p), this.q.Copy(t.q), this;
        }
    }, {
        key: "SetIdentity",
        value: function() {
            return this.p.SetZero(), this.q.SetIdentity(), this;
        }
    }, {
        key: "SetPositionRotation",
        value: function(t, e) {
            return this.p.Copy(t), this.q.Copy(e), this;
        }
    }, {
        key: "SetPositionAngle",
        value: function(t, e) {
            return this.p.Copy(t), this.q.SetAngle(e), this;
        }
    }, {
        key: "SetPosition",
        value: function(t) {
            return this.p.Copy(t), this;
        }
    }, {
        key: "SetPositionXY",
        value: function(t, e) {
            return this.p.Set(t, e), this;
        }
    }, {
        key: "SetRotation",
        value: function(t) {
            return this.q.Copy(t), this;
        }
    }, {
        key: "SetRotationAngle",
        value: function(t) {
            return this.q.SetAngle(t), this;
        }
    }, {
        key: "GetPosition",
        value: function() {
            return this.p;
        }
    }, {
        key: "GetRotation",
        value: function() {
            return this.q;
        }
    }, {
        key: "GetRotationAngle",
        value: function() {
            return this.q.GetAngle();
        }
    }, {
        key: "GetAngle",
        value: function() {
            return this.q.GetAngle();
        }
    } ], [ {
        key: "MulXV",
        value: function(t, e, i) {
            var s = t.q.c, n = t.q.s, o = e.x, e = e.y;
            return i.x = s * o - n * e + t.p.x, i.y = n * o + s * e + t.p.y, i;
        }
    }, {
        key: "MulTXV",
        value: function(t, e, i) {
            var s = t.q.c, n = t.q.s, o = e.x - t.p.x, e = e.y - t.p.y;
            return i.x = s * o + n * e, i.y = -n * o + s * e, i;
        }
    }, {
        key: "MulXX",
        value: function(t, e, i) {
            return P.MulRR(t.q, e.q, i.q), X.AddVV(P.MulRV(t.q, e.p, i.p), t.p, i.p), i;
        }
    }, {
        key: "MulTXX",
        value: function(t, e, i) {
            return P.MulTRR(t.q, e.q, i.q), P.MulTRV(t.q, X.SubVV(e.p, t.p, i.p), i.p), i;
        }
    } ]);
    var F = yt;
    function yt() {
        _classCallCheck(this, yt), this.p = new X(), this.q = new P();
    }
    F.IDENTITY = new F();
    _createClass(vt, [ {
        key: "Clone",
        value: function() {
            return new vt().Copy(this);
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.localCenter.Copy(t.localCenter), this.c0.Copy(t.c0), this.c.Copy(t.c), 
            this.a0 = t.a0, this.a = t.a, this.alpha0 = t.alpha0, this;
        }
    }, {
        key: "GetTransform",
        value: function(t, e) {
            var i = 1 - e, i = (t.p.x = i * this.c0.x + e * this.c.x, t.p.y = i * this.c0.y + e * this.c.y, 
            i * this.a0 + e * this.a);
            return t.q.SetAngle(i), t.p.SelfSub(P.MulRV(t.q, this.localCenter, X.s_t0)), t;
        }
    }, {
        key: "Advance",
        value: function(t) {
            var e = (t - this.alpha0) / (1 - this.alpha0), i = 1 - e;
            this.c0.x = i * this.c0.x + e * this.c.x, this.c0.y = i * this.c0.y + e * this.c.y, 
            this.a0 = i * this.a0 + e * this.a, this.alpha0 = t;
        }
    }, {
        key: "Normalize",
        value: function() {
            var t = K * Math.floor(this.a0 / K);
            this.a0 -= t, this.a -= t;
        }
    } ]);
    var pt = vt;
    function vt() {
        _classCallCheck(this, vt), this.localCenter = new X(), this.c0 = new X(), this.c = new X(), 
        this.a0 = 0, this.a = 0, this.alpha0 = 0;
    }
    _createClass(xt, [ {
        key: "Clone",
        value: function() {
            return new xt().Copy(this);
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this;
        }
    }, {
        key: "IsEqual",
        value: function(t) {
            return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
        }
    }, {
        key: "IsZero",
        value: function() {
            return 0 === this.r && 0 === this.g && 0 === this.b && 0 === this.a;
        }
    }, {
        key: "Set",
        value: function(t, e, i) {
            var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : this.a;
            this.SetRGBA(t, e, i, s);
        }
    }, {
        key: "SetByteRGB",
        value: function(t, e, i) {
            return this.r = t / 255, this.g = e / 255, this.b = i / 255, this;
        }
    }, {
        key: "SetByteRGBA",
        value: function(t, e, i, s) {
            return this.r = t / 255, this.g = e / 255, this.b = i / 255, this.a = s / 255, this;
        }
    }, {
        key: "SetRGB",
        value: function(t, e, i) {
            return this.r = t, this.g = e, this.b = i, this;
        }
    }, {
        key: "SetRGBA",
        value: function(t, e, i, s) {
            return this.r = t, this.g = e, this.b = i, this.a = s, this;
        }
    }, {
        key: "SelfAdd",
        value: function(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this.a += t.a, this;
        }
    }, {
        key: "Add",
        value: function(t, e) {
            return e.r = this.r + t.r, e.g = this.g + t.g, e.b = this.b + t.b, e.a = this.a + t.a, 
            e;
        }
    }, {
        key: "SelfSub",
        value: function(t) {
            return this.r -= t.r, this.g -= t.g, this.b -= t.b, this.a -= t.a, this;
        }
    }, {
        key: "Sub",
        value: function(t, e) {
            return e.r = this.r - t.r, e.g = this.g - t.g, e.b = this.b - t.b, e.a = this.a - t.a, 
            e;
        }
    }, {
        key: "SelfMul",
        value: function(t) {
            return this.r *= t, this.g *= t, this.b *= t, this.a *= t, this;
        }
    }, {
        key: "Mul",
        value: function(t, e) {
            return e.r = this.r * t, e.g = this.g * t, e.b = this.b * t, e.a = this.a * t, e;
        }
    }, {
        key: "Mix",
        value: function(t, e) {
            xt.MixColors(this, t, e);
        }
    }, {
        key: "MakeStyleString",
        value: function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.a;
            return xt.MakeStyleString(this.r, this.g, this.b, t);
        }
    } ], [ {
        key: "MixColors",
        value: function(t, e, i) {
            var s = i * (e.r - t.r), n = i * (e.g - t.g), o = i * (e.b - t.b), i = i * (e.a - t.a);
            t.r += s, t.g += n, t.b += o, t.a += i, e.r -= s, e.g -= n, e.b -= o, e.a -= i;
        }
    }, {
        key: "MakeStyleString",
        value: function(t, e, i) {
            var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1;
            return t *= 255, e *= 255, i *= 255, s < 1 ? "rgba(" + t + "," + e + "," + i + "," + s + ")" : "rgb(" + t + "," + e + "," + i + ")";
        }
    } ]);
    var o = xt;
    function xt() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .5, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .5, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .5, s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1;
        _classCallCheck(this, xt), this.r = t, this.g = e, this.b = i, this.a = s;
    }
    o.ZERO = new o(0, 0, 0, 0), o.RED = new o(1, 0, 0), o.GREEN = new o(0, 1, 0), o.BLUE = new o(0, 0, 1), 
    (t = N.b2DrawFlags || (N.b2DrawFlags = {}))[t.e_none = 0] = "e_none", t[t.e_shapeBit = 1] = "e_shapeBit", 
    t[t.e_jointBit = 2] = "e_jointBit", t[t.e_aabbBit = 4] = "e_aabbBit", t[t.e_pairBit = 8] = "e_pairBit", 
    t[t.e_centerOfMassBit = 16] = "e_centerOfMassBit", t[t.e_particleBit = 32] = "e_particleBit", 
    t[t.e_controllerBit = 64] = "e_controllerBit", t[t.e_all = 63] = "e_all";
    _createClass(Ct, [ {
        key: "SetFlags",
        value: function(t) {
            this.m_drawFlags = t;
        }
    }, {
        key: "GetFlags",
        value: function() {
            return this.m_drawFlags;
        }
    }, {
        key: "AppendFlags",
        value: function(t) {
            this.m_drawFlags |= t;
        }
    }, {
        key: "ClearFlags",
        value: function(t) {
            this.m_drawFlags &= ~t;
        }
    } ]);
    var t = Ct;
    function Ct() {
        _classCallCheck(this, Ct), this.m_drawFlags = 0;
    }
    _createClass(St, [ {
        key: "Reset",
        value: function() {
            return this.m_start = Date.now(), this;
        }
    }, {
        key: "GetMilliseconds",
        value: function() {
            return Date.now() - this.m_start;
        }
    } ]);
    var Bt = St;
    function St() {
        _classCallCheck(this, St), this.m_start = Date.now();
    }
    _createClass(At, [ {
        key: "GetCount",
        value: function() {
            return this.m_count;
        }
    }, {
        key: "GetMinCount",
        value: function() {
            return this.m_min_count;
        }
    }, {
        key: "GetMaxCount",
        value: function() {
            return this.m_max_count;
        }
    }, {
        key: "ResetCount",
        value: function() {
            var t = this.m_count;
            return this.m_count = 0, t;
        }
    }, {
        key: "ResetMinCount",
        value: function() {
            this.m_min_count = 0;
        }
    }, {
        key: "ResetMaxCount",
        value: function() {
            this.m_max_count = 0;
        }
    }, {
        key: "Increment",
        value: function() {
            this.m_count++, this.m_max_count < this.m_count && (this.m_max_count = this.m_count);
        }
    }, {
        key: "Decrement",
        value: function() {
            this.m_count--, this.m_min_count > this.m_count && (this.m_min_count = this.m_count);
        }
    } ]);
    var bt = At;
    function At() {
        _classCallCheck(this, At), this.m_count = 0, this.m_min_count = 0, this.m_max_count = 0;
    }
    _createClass(Vt, [ {
        key: "Reset",
        value: function() {
            return this.m_count = 0, this;
        }
    }, {
        key: "Push",
        value: function(t) {
            this.m_stack[this.m_count] = t, this.m_count++;
        }
    }, {
        key: "Pop",
        value: function() {
            this.m_count--;
            var t = this.m_stack[this.m_count];
            if ((this.m_stack[this.m_count] = null) === t) throw new Error();
            return t;
        }
    }, {
        key: "GetCount",
        value: function() {
            return this.m_count;
        }
    } ]);
    var gt = Vt;
    function Vt(t) {
        _classCallCheck(this, Vt), this.m_stack = [], this.m_count = 0, this.m_stack = W(t, function(t) {
            return null;
        }), this.m_count = 0;
    }
    function wt() {
        _classCallCheck(this, wt);
    }
    function kt() {
        _classCallCheck(this, kt);
    }
    _createClass(Pt, [ {
        key: "Copy",
        value: function(t) {
            return t.m_vertices === t.m_buffer ? (this.m_vertices = this.m_buffer, this.m_buffer[0].Copy(t.m_buffer[0]), 
            this.m_buffer[1].Copy(t.m_buffer[1])) : this.m_vertices = t.m_vertices, this.m_count = t.m_count, 
            this.m_radius = t.m_radius, this;
        }
    }, {
        key: "Reset",
        value: function() {
            return this.m_vertices = this.m_buffer, this.m_count = 0, this.m_radius = 0, this;
        }
    }, {
        key: "SetShape",
        value: function(t, e) {
            t.SetupDistanceProxy(this, e);
        }
    }, {
        key: "SetVerticesRadius",
        value: function(t, e, i) {
            this.m_vertices = t, this.m_count = e, this.m_radius = i;
        }
    }, {
        key: "GetSupport",
        value: function(t) {
            for (var e = 0, i = X.DotVV(this.m_vertices[0], t), s = 1; s < this.m_count; ++s) {
                var n = X.DotVV(this.m_vertices[s], t);
                i < n && (e = s, i = n);
            }
            return e;
        }
    }, {
        key: "GetSupportVertex",
        value: function(t) {
            for (var e = 0, i = X.DotVV(this.m_vertices[0], t), s = 1; s < this.m_count; ++s) {
                var n = X.DotVV(this.m_vertices[s], t);
                i < n && (e = s, i = n);
            }
            return this.m_vertices[e];
        }
    }, {
        key: "GetVertexCount",
        value: function() {
            return this.m_count;
        }
    }, {
        key: "GetVertex",
        value: function(t) {
            return this.m_vertices[t];
        }
    } ]);
    var Mt = Pt;
    function Pt() {
        _classCallCheck(this, Pt), this.m_buffer = X.MakeArray(2), this.m_vertices = this.m_buffer, 
        this.m_count = 0, this.m_radius = 0;
    }
    _createClass(Gt, [ {
        key: "Reset",
        value: function() {
            return this.metric = 0, this.count = 0, this;
        }
    } ]);
    var It = Gt;
    function Gt() {
        _classCallCheck(this, Gt), this.metric = 0, this.count = 0, this.indexA = [ 0, 0, 0 ], 
        this.indexB = [ 0, 0, 0 ];
    }
    _createClass(Ft, [ {
        key: "Reset",
        value: function() {
            return this.proxyA.Reset(), this.proxyB.Reset(), this.transformA.SetIdentity(), 
            this.transformB.SetIdentity(), this.useRadii = !1, this;
        }
    } ]);
    var Dt = Ft;
    function Ft() {
        _classCallCheck(this, Ft), this.proxyA = new Mt(), this.proxyB = new Mt(), this.transformA = new F(), 
        this.transformB = new F(), this.useRadii = !1;
    }
    _createClass(Rt, [ {
        key: "Reset",
        value: function() {
            return this.pointA.SetZero(), this.pointB.SetZero(), this.distance = 0, this.iterations = 0, 
            this;
        }
    } ]);
    var Tt = Rt;
    function Rt() {
        _classCallCheck(this, Rt), this.pointA = new X(), this.pointB = new X(), this.distance = 0, 
        this.iterations = 0;
    }
    function Lt() {
        _classCallCheck(this, Lt), this.proxyA = new Mt(), this.proxyB = new Mt(), this.transformA = new F(), 
        this.transformB = new F(), this.translationB = new X();
    }
    function qt() {
        _classCallCheck(this, qt), this.point = new X(), this.normal = new X(), this.lambda = 0, 
        this.iterations = 0;
    }
    N.b2_gjkCalls = 0, N.b2_gjkIters = 0, N.b2_gjkMaxIters = 0;
    _createClass(Ot, [ {
        key: "Copy",
        value: function(t) {
            return this.wA.Copy(t.wA), this.wB.Copy(t.wB), this.w.Copy(t.w), this.a = t.a, this.indexA = t.indexA, 
            this.indexB = t.indexB, this;
        }
    } ]);
    var zt = Ot;
    function Ot() {
        _classCallCheck(this, Ot), this.wA = new X(), this.wB = new X(), this.w = new X(), 
        this.a = 0, this.indexA = 0, this.indexB = 0;
    }
    _createClass(jt, [ {
        key: "ReadCache",
        value: function(t, e, i, s, n) {
            this.m_count = t.count;
            for (var o, r, a, l = this.m_vertices, _ = 0; _ < this.m_count; ++_) {
                var m = l[_], h = (m.indexA = t.indexA[_], m.indexB = t.indexB[_], e.GetVertex(m.indexA)), u = s.GetVertex(m.indexB);
                F.MulXV(i, h, m.wA), F.MulXV(n, u, m.wB), X.SubVV(m.wB, m.wA, m.w), m.a = 0;
            }
            1 < this.m_count && (o = t.metric, (r = this.GetMetric()) < .5 * o || 2 * o < r || r < I) && (this.m_count = 0), 
            0 === this.m_count && ((o = l[0]).indexA = 0, o.indexB = 0, r = e.GetVertex(0), 
            a = s.GetVertex(0), F.MulXV(i, r, o.wA), F.MulXV(n, a, o.wB), X.SubVV(o.wB, o.wA, o.w), 
            o.a = 1, this.m_count = 1);
        }
    }, {
        key: "WriteCache",
        value: function(t) {
            t.metric = this.GetMetric(), t.count = this.m_count;
            for (var e = this.m_vertices, i = 0; i < this.m_count; ++i) t.indexA[i] = e[i].indexA, 
            t.indexB[i] = e[i].indexB;
        }
    }, {
        key: "GetSearchDirection",
        value: function(t) {
            switch (this.m_count) {
              case 1:
                return X.NegV(this.m_v1.w, t);

              case 2:
                var e = X.SubVV(this.m_v2.w, this.m_v1.w, t);
                return 0 < X.CrossVV(e, X.NegV(this.m_v1.w, X.s_t0)) ? X.CrossOneV(e, t) : X.CrossVOne(e, t);

              default:
                return t.SetZero();
            }
        }
    }, {
        key: "GetClosestPoint",
        value: function(t) {
            switch (this.m_count) {
              case 0:
                return t.SetZero();

              case 1:
                return t.Copy(this.m_v1.w);

              case 2:
                return t.Set(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);

              default:
                return t.SetZero();
            }
        }
    }, {
        key: "GetWitnessPoints",
        value: function(t, e) {
            switch (this.m_count) {
              case 0:
                break;

              case 1:
                t.Copy(this.m_v1.wA), e.Copy(this.m_v1.wB);
                break;

              case 2:
                t.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x, t.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y, 
                e.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x, e.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
                break;

              case 3:
                e.x = t.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x, 
                e.y = t.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
            }
        }
    }, {
        key: "GetMetric",
        value: function() {
            switch (this.m_count) {
              case 0:
              case 1:
                return 0;

              case 2:
                return X.DistanceVV(this.m_v1.w, this.m_v2.w);

              case 3:
                return X.CrossVV(X.SubVV(this.m_v2.w, this.m_v1.w, X.s_t0), X.SubVV(this.m_v3.w, this.m_v1.w, X.s_t1));

              default:
                return 0;
            }
        }
    }, {
        key: "Solve2",
        value: function() {
            var t = this.m_v1.w, e = this.m_v2.w, i = X.SubVV(e, t, jt.s_e12), t = -X.DotVV(t, i);
            t <= 0 ? (this.m_v1.a = 1, this.m_count = 1) : (e = X.DotVV(e, i)) <= 0 ? (this.m_v2.a = 1, 
            this.m_count = 1, this.m_v1.Copy(this.m_v2)) : (this.m_v1.a = e * (i = 1 / (e + t)), 
            this.m_v2.a = t * i, this.m_count = 2);
        }
    }, {
        key: "Solve3",
        value: function() {
            var t = this.m_v1.w, e = this.m_v2.w, i = this.m_v3.w, s = X.SubVV(e, t, jt.s_e12), n = X.DotVV(t, s), o = X.DotVV(e, s), n = -n, r = X.SubVV(i, t, jt.s_e13), a = X.DotVV(t, r), l = X.DotVV(i, r), a = -a, _ = X.SubVV(i, e, jt.s_e23), m = X.DotVV(e, _), _ = X.DotVV(i, _), m = -m, s = X.CrossVV(s, r), r = s * X.CrossVV(e, i), i = s * X.CrossVV(i, t), s = s * X.CrossVV(t, e);
            n <= 0 && a <= 0 ? (this.m_v1.a = 1, this.m_count = 1) : 0 < o && 0 < n && s <= 0 ? (this.m_v1.a = o * (t = 1 / (o + n)), 
            this.m_v2.a = n * t, this.m_count = 2) : 0 < l && 0 < a && i <= 0 ? (this.m_v1.a = l * (e = 1 / (l + a)), 
            this.m_v3.a = a * e, this.m_count = 2, this.m_v2.Copy(this.m_v3)) : o <= 0 && m <= 0 ? (this.m_v2.a = 1, 
            this.m_count = 1, this.m_v1.Copy(this.m_v2)) : l <= 0 && _ <= 0 ? (this.m_v3.a = 1, 
            this.m_count = 1, this.m_v1.Copy(this.m_v3)) : 0 < _ && 0 < m && r <= 0 ? (this.m_v2.a = _ * (n = 1 / (_ + m)), 
            this.m_v3.a = m * n, this.m_count = 2, this.m_v1.Copy(this.m_v3)) : (this.m_v1.a = r * (t = 1 / (r + i + s)), 
            this.m_v2.a = i * t, this.m_v3.a = s * t, this.m_count = 3);
        }
    } ]);
    var Et = jt;
    function jt() {
        _classCallCheck(this, jt), this.m_v1 = new zt(), this.m_v2 = new zt(), this.m_v3 = new zt(), 
        this.m_vertices = [], this.m_count = 0, this.m_vertices[0] = this.m_v1, this.m_vertices[1] = this.m_v2, 
        this.m_vertices[2] = this.m_v3;
    }
    Et.s_e12 = new X(), Et.s_e13 = new X(), Et.s_e23 = new X();
    var Jt = new Et(), Nt = [ 0, 0, 0 ], Xt = [ 0, 0, 0 ], Ut = new X(), Zt = new X(), Wt = new X(), Ht = new X(), Qt = new X();
    function Yt(t, e, i) {
        ++N.b2_gjkCalls;
        for (var s, n = i.proxyA, o = i.proxyB, r = i.transformA, a = i.transformB, l = Jt, _ = (l.ReadCache(e, n, r, o, a), 
        l.m_vertices), m = Nt, h = Xt, u = 0; u < 20; ) {
            for (var c = l.m_count, f = 0; f < c; ++f) m[f] = _[f].indexA, h[f] = _[f].indexB;
            switch (l.m_count) {
              case 1:
                break;

              case 2:
                l.Solve2();
                break;

              case 3:
                l.Solve3();
            }
            if (3 === l.m_count) break;
            var d = l.GetSearchDirection(Zt);
            if (d.LengthSquared() < C) break;
            for (var y = _[l.m_count], p = (y.indexA = n.GetSupport(P.MulTRV(r.q, X.NegV(d, X.s_t0), Ht)), 
            F.MulXV(r, n.GetVertex(y.indexA), y.wA), y.indexB = o.GetSupport(P.MulTRV(a.q, d, Qt)), 
            F.MulXV(a, o.GetVertex(y.indexB), y.wB), X.SubVV(y.wB, y.wA, y.w), ++u, ++N.b2_gjkIters, 
            !1), v = 0; v < c; ++v) if (y.indexA === m[v] && y.indexB === h[v]) {
                p = !0;
                break;
            }
            if (p) break;
            ++l.m_count;
        }
        N.b2_gjkMaxIters = D(N.b2_gjkMaxIters, u), l.GetWitnessPoints(t.pointA, t.pointB), 
        t.distance = X.DistanceVV(t.pointA, t.pointB), t.iterations = u, l.WriteCache(e), 
        i.useRadii && (e = n.m_radius, i = o.m_radius, t.distance > e + i && t.distance > I ? (t.distance -= e + i, 
        (s = X.SubVV(t.pointB, t.pointA, Wt)).Normalize(), t.pointA.SelfMulAdd(e, s), t.pointB.SelfMulSub(i, s)) : (e = X.MidVV(t.pointA, t.pointB, Ut), 
        t.pointA.Copy(e), t.pointB.Copy(e), t.distance = 0));
    }
    var Kt = new X(), $t = new Et(), te = new X(), ee = new X(), ie = new X(), se = new X(), ne = new X(), oe = new X();
    (e = N.b2ContactFeatureType || (N.b2ContactFeatureType = {}))[e.e_vertex = 0] = "e_vertex", 
    e[e.e_face = 1] = "e_face";
    _createClass(ae, [ {
        key: "key",
        get: function() {
            return this._key_invalid && (this._key_invalid = !1, this._key = this._indexA | this._indexB << 8 | this._typeA << 16 | this._typeB << 24), 
            this._key;
        },
        set: function(t) {
            this._key = t, this._key_invalid = !1, this._indexA = 255 & this._key, this._indexB = this._key >> 8 & 255, 
            this._typeA = this._key >> 16 & 255, this._typeB = this._key >> 24 & 255;
        }
    }, {
        key: "indexA",
        get: function() {
            return this._indexA;
        },
        set: function(t) {
            this._indexA = t, this._key_invalid = !0;
        }
    }, {
        key: "indexB",
        get: function() {
            return this._indexB;
        },
        set: function(t) {
            this._indexB = t, this._key_invalid = !0;
        }
    }, {
        key: "typeA",
        get: function() {
            return this._typeA;
        },
        set: function(t) {
            this._typeA = t, this._key_invalid = !0;
        }
    }, {
        key: "typeB",
        get: function() {
            return this._typeB;
        },
        set: function(t) {
            this._typeB = t, this._key_invalid = !0;
        }
    } ]);
    var re = ae;
    function ae() {
        _classCallCheck(this, ae), this._key = 0, this._key_invalid = !1, this._indexA = 0, 
        this._indexB = 0, this._typeA = 0, this._typeB = 0;
    }
    _createClass(_e, [ {
        key: "Copy",
        value: function(t) {
            return this.key = t.key, this;
        }
    }, {
        key: "Clone",
        value: function() {
            return new _e().Copy(this);
        }
    }, {
        key: "key",
        get: function() {
            return this.cf.key;
        },
        set: function(t) {
            this.cf.key = t;
        }
    } ]);
    var le = _e;
    function _e() {
        _classCallCheck(this, _e), this.cf = new re();
    }
    _createClass(he, [ {
        key: "Reset",
        value: function() {
            this.localPoint.SetZero(), this.normalImpulse = 0, this.tangentImpulse = 0, this.id.key = 0;
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.localPoint.Copy(t.localPoint), this.normalImpulse = t.normalImpulse, 
            this.tangentImpulse = t.tangentImpulse, this.id.Copy(t.id), this;
        }
    } ], [ {
        key: "MakeArray",
        value: function(t) {
            return W(t, function(t) {
                return new he();
            });
        }
    } ]);
    var me = he;
    function he() {
        _classCallCheck(this, he), this.localPoint = new X(), this.normalImpulse = 0, this.tangentImpulse = 0, 
        this.id = new le();
    }
    (e = N.b2ManifoldType || (N.b2ManifoldType = {}))[e.e_unknown = -1] = "e_unknown", 
    e[e.e_circles = 0] = "e_circles", e[e.e_faceA = 1] = "e_faceA", e[e.e_faceB = 2] = "e_faceB";
    _createClass(ce, [ {
        key: "Reset",
        value: function() {
            for (var t = 0; t < 2; ++t) this.points[t].Reset();
            this.localNormal.SetZero(), this.localPoint.SetZero(), this.type = N.b2ManifoldType.e_unknown, 
            this.pointCount = 0;
        }
    }, {
        key: "Copy",
        value: function(t) {
            this.pointCount = t.pointCount;
            for (var e = 0; e < 2; ++e) this.points[e].Copy(t.points[e]);
            return this.localNormal.Copy(t.localNormal), this.localPoint.Copy(t.localPoint), 
            this.type = t.type, this;
        }
    }, {
        key: "Clone",
        value: function() {
            return new ce().Copy(this);
        }
    } ]);
    var ue = ce;
    function ce() {
        _classCallCheck(this, ce), this.points = me.MakeArray(2), this.localNormal = new X(), 
        this.localPoint = new X(), this.type = N.b2ManifoldType.e_unknown, this.pointCount = 0;
    }
    _createClass(fe, [ {
        key: "Initialize",
        value: function(t, e, i, s, n) {
            if (0 !== t.pointCount) switch (t.type) {
              case N.b2ManifoldType.e_circles:
                this.normal.Set(1, 0);
                var o = F.MulXV(e, t.localPoint, fe.Initialize_s_pointA), r = F.MulXV(s, t.points[0].localPoint, fe.Initialize_s_pointB), o = (X.DistanceSquaredVV(o, r) > C && X.SubVV(r, o, this.normal).SelfNormalize(), 
                X.AddVMulSV(o, i, this.normal, fe.Initialize_s_cA)), r = X.SubVMulSV(r, n, this.normal, fe.Initialize_s_cB);
                X.MidVV(o, r, this.points[0]), this.separations[0] = X.DotVV(X.SubVV(r, o, X.s_t0), this.normal);
                break;

              case N.b2ManifoldType.e_faceA:
                P.MulRV(e.q, t.localNormal, this.normal);
                for (var a = F.MulXV(e, t.localPoint, fe.Initialize_s_planePoint), l = 0; l < t.pointCount; ++l) {
                    var _ = F.MulXV(s, t.points[l].localPoint, fe.Initialize_s_clipPoint), m = i - X.DotVV(X.SubVV(_, a, X.s_t0), this.normal), m = X.AddVMulSV(_, m, this.normal, fe.Initialize_s_cA), _ = X.SubVMulSV(_, n, this.normal, fe.Initialize_s_cB);
                    X.MidVV(m, _, this.points[l]), this.separations[l] = X.DotVV(X.SubVV(_, m, X.s_t0), this.normal);
                }
                break;

              case N.b2ManifoldType.e_faceB:
                P.MulRV(s.q, t.localNormal, this.normal);
                for (var h = F.MulXV(s, t.localPoint, fe.Initialize_s_planePoint), u = 0; u < t.pointCount; ++u) {
                    var c = F.MulXV(e, t.points[u].localPoint, fe.Initialize_s_clipPoint), f = n - X.DotVV(X.SubVV(c, h, X.s_t0), this.normal), f = X.AddVMulSV(c, f, this.normal, fe.Initialize_s_cB), c = X.SubVMulSV(c, i, this.normal, fe.Initialize_s_cA);
                    X.MidVV(c, f, this.points[u]), this.separations[u] = X.DotVV(X.SubVV(c, f, X.s_t0), this.normal);
                }
                this.normal.SelfNeg();
            }
        }
    } ]);
    var e = fe;
    function fe() {
        _classCallCheck(this, fe), this.normal = new X(), this.points = X.MakeArray(2), 
        this.separations = H(2);
    }
    e.Initialize_s_pointA = new X(), e.Initialize_s_pointB = new X(), e.Initialize_s_cA = new X(), 
    e.Initialize_s_cB = new X(), e.Initialize_s_planePoint = new X(), e.Initialize_s_clipPoint = new X(), 
    (de = N.b2PointState || (N.b2PointState = {}))[de.b2_nullState = 0] = "b2_nullState", 
    de[de.b2_addState = 1] = "b2_addState", de[de.b2_persistState = 2] = "b2_persistState", 
    de[de.b2_removeState = 3] = "b2_removeState";
    _createClass(ye, [ {
        key: "Copy",
        value: function(t) {
            return this.v.Copy(t.v), this.id.Copy(t.id), this;
        }
    } ], [ {
        key: "MakeArray",
        value: function(t) {
            return W(t, function(t) {
                return new ye();
            });
        }
    } ]);
    var de = ye;
    function ye() {
        _classCallCheck(this, ye), this.v = new X(), this.id = new le();
    }
    _createClass(ve, [ {
        key: "Copy",
        value: function(t) {
            return this.p1.Copy(t.p1), this.p2.Copy(t.p2), this.maxFraction = t.maxFraction, 
            this;
        }
    } ]);
    var pe = ve;
    function ve() {
        _classCallCheck(this, ve), this.p1 = new X(), this.p2 = new X(), this.maxFraction = 1;
    }
    _createClass(Ce, [ {
        key: "Copy",
        value: function(t) {
            return this.normal.Copy(t.normal), this.fraction = t.fraction, this;
        }
    } ]);
    var xe = Ce;
    function Ce() {
        _classCallCheck(this, Ce), this.normal = new X(), this.fraction = 0;
    }
    _createClass(Be, [ {
        key: "Copy",
        value: function(t) {
            return this.lowerBound.Copy(t.lowerBound), this.upperBound.Copy(t.upperBound), this;
        }
    }, {
        key: "IsValid",
        value: function() {
            var t = this.upperBound.x - this.lowerBound.x, e = this.upperBound.y - this.lowerBound.y;
            return 0 <= t && 0 <= e && this.lowerBound.IsValid() && this.upperBound.IsValid();
        }
    }, {
        key: "GetCenter",
        value: function() {
            return X.MidVV(this.lowerBound, this.upperBound, this.m_cache_center);
        }
    }, {
        key: "GetExtents",
        value: function() {
            return X.ExtVV(this.lowerBound, this.upperBound, this.m_cache_extent);
        }
    }, {
        key: "GetPerimeter",
        value: function() {
            return 2 * (this.upperBound.x - this.lowerBound.x + (this.upperBound.y - this.lowerBound.y));
        }
    }, {
        key: "Combine1",
        value: function(t) {
            return this.lowerBound.x = L(this.lowerBound.x, t.lowerBound.x), this.lowerBound.y = L(this.lowerBound.y, t.lowerBound.y), 
            this.upperBound.x = D(this.upperBound.x, t.upperBound.x), this.upperBound.y = D(this.upperBound.y, t.upperBound.y), 
            this;
        }
    }, {
        key: "Combine2",
        value: function(t, e) {
            return this.lowerBound.x = L(t.lowerBound.x, e.lowerBound.x), this.lowerBound.y = L(t.lowerBound.y, e.lowerBound.y), 
            this.upperBound.x = D(t.upperBound.x, e.upperBound.x), this.upperBound.y = D(t.upperBound.y, e.upperBound.y), 
            this;
        }
    }, {
        key: "Contains",
        value: function(t) {
            return this.lowerBound.x <= t.lowerBound.x && this.lowerBound.y <= t.lowerBound.y && t.upperBound.x <= this.upperBound.x && t.upperBound.y <= this.upperBound.y;
        }
    }, {
        key: "RayCast",
        value: function(t, e) {
            var i = -T, s = T, n = e.p1.x, o = e.p1.y, r = e.p2.x - e.p1.x, a = e.p2.y - e.p1.y, l = R(r), _ = R(a), m = t.normal;
            if (l < I) {
                if (n < this.lowerBound.x || this.upperBound.x < n) return !1;
            } else {
                l = 1 / r, r = (this.lowerBound.x - n) * l, n = (this.upperBound.x - n) * l, l = -1;
                if (n < r && (h = r, r = n, n = h, l = 1), i < r && (m.x = l, m.y = 0, i = r), (s = L(s, n)) < i) return !1;
            }
            if (_ < I) {
                if (o < this.lowerBound.y || this.upperBound.y < o) return !1;
            } else {
                var h = 1 / a, l = (this.lowerBound.y - o) * h, r = (this.upperBound.y - o) * h, n = -1;
                if (r < l && (_ = l, l = r, r = _, n = 1), i < l && (m.x = 0, m.y = n, i = l), (s = L(s, r)) < i) return !1;
            }
            return !(i < 0 || e.maxFraction < i || (t.fraction = i, 0));
        }
    }, {
        key: "TestContain",
        value: function(t) {
            return !(t.x < this.lowerBound.x || this.upperBound.x < t.x || t.y < this.lowerBound.y || this.upperBound.y < t.y);
        }
    }, {
        key: "TestOverlap",
        value: function(t) {
            var e = t.lowerBound.x - this.upperBound.x, i = t.lowerBound.y - this.upperBound.y, s = this.lowerBound.x - t.upperBound.x, t = this.lowerBound.y - t.upperBound.y;
            return !(0 < e || 0 < i || 0 < s || 0 < t);
        }
    } ], [ {
        key: "Combine",
        value: function(t, e, i) {
            return i.Combine2(t, e), i;
        }
    } ]);
    var _ = Be;
    function Be() {
        _classCallCheck(this, Be), this.lowerBound = new X(), this.upperBound = new X(), 
        this.m_cache_center = new X(), this.m_cache_extent = new X();
    }
    function Se(t, e) {
        var i = e.lowerBound.x - t.upperBound.x, s = e.lowerBound.y - t.upperBound.y, n = t.lowerBound.x - e.upperBound.x, t = t.lowerBound.y - e.upperBound.y;
        return !(0 < i || 0 < s || 0 < n || 0 < t);
    }
    function be(t, e, i, s, n) {
        var o = 0, r = e[0], e = e[1], a = X.DotVV(i, r.v) - s, i = X.DotVV(i, e.v) - s;
        return a <= 0 && t[o++].Copy(r), i <= 0 && t[o++].Copy(e), a * i < 0 && ((s = t[o].v).x = r.v.x + (a = a / (a - i)) * (e.v.x - r.v.x), 
        s.y = r.v.y + a * (e.v.y - r.v.y), (i = t[o].id).cf.indexA = n, i.cf.indexB = r.id.cf.indexB, 
        i.cf.typeA = N.b2ContactFeatureType.e_vertex, i.cf.typeB = N.b2ContactFeatureType.e_face, 
        ++o), o;
    }
    var Ae = new Dt(), ge = new It(), Ve = new Tt();
    function we(t, e, i, s, n, o) {
        var r = Ae.Reset(), t = (r.proxyA.SetShape(t, e), r.proxyB.SetShape(i, s), r.transformA.Copy(n), 
        r.transformB.Copy(o), r.useRadii = !0, ge.Reset()), e = (t.count = 0, Ve.Reset());
        return Yt(e, t, r), e.distance < 10 * I;
    }
    function p(t) {
        if (null === t) throw new Error();
        return t;
    }
    _createClass(Me, [ {
        key: "IsLeaf",
        value: function() {
            return null === this.child1;
        }
    } ]);
    var ke = Me;
    function Me() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
        _classCallCheck(this, Me), this.m_id = 0, this.aabb = new _(), this.parent = null, 
        this.child1 = null, this.child2 = null, this.height = 0, this.m_id = t;
    }
    _createClass(v, [ {
        key: "Query",
        value: function(t, e) {
            if (null !== this.m_root) {
                var i = this.m_stack.Reset();
                for (i.Push(this.m_root); 0 < i.GetCount(); ) {
                    var s = i.Pop();
                    if (s.aabb.TestOverlap(t)) if (s.IsLeaf()) {
                        if (!e(s)) return;
                    } else i.Push(p(s.child1)), i.Push(p(s.child2));
                }
            }
        }
    }, {
        key: "QueryPoint",
        value: function(t, e) {
            if (null !== this.m_root) {
                var i = this.m_stack.Reset();
                for (i.Push(this.m_root); 0 < i.GetCount(); ) {
                    var s = i.Pop();
                    if (s.aabb.TestContain(t)) if (s.IsLeaf()) {
                        if (!e(s)) return;
                    } else i.Push(p(s.child1)), i.Push(p(s.child2));
                }
            }
        }
    }, {
        key: "RayCast",
        value: function(t, e) {
            if (null !== this.m_root) {
                var i = t.p1, s = t.p2, n = X.SubVV(s, i, v.s_r), o = (n.Normalize(), X.CrossOneV(n, v.s_v)), r = X.AbsV(o, v.s_abs_v), a = t.maxFraction, l = v.s_segmentAABB, _ = i.x + a * (s.x - i.x), m = i.y + a * (s.y - i.y), h = (l.lowerBound.x = L(i.x, _), 
                l.lowerBound.y = L(i.y, m), l.upperBound.x = D(i.x, _), l.upperBound.y = D(i.y, m), 
                this.m_stack.Reset());
                for (h.Push(this.m_root); 0 < h.GetCount(); ) {
                    var u = h.Pop();
                    if (Se(u.aabb, l)) {
                        var c = u.aabb.GetCenter(), f = u.aabb.GetExtents(), c = R(X.DotVV(o, X.SubVV(i, c, X.s_t0))) - X.DotVV(r, f);
                        if (!(0 < c)) if (u.IsLeaf()) {
                            f = v.s_subInput, c = (f.p1.Copy(t.p1), f.p2.Copy(t.p2), f.maxFraction = a, e(f, u));
                            if (0 === c) return;
                            0 < c && (_ = i.x + (a = c) * (s.x - i.x), m = i.y + a * (s.y - i.y), l.lowerBound.x = L(i.x, _), 
                            l.lowerBound.y = L(i.y, m), l.upperBound.x = D(i.x, _), l.upperBound.y = D(i.y, m));
                        } else h.Push(p(u.child1)), h.Push(p(u.child2));
                    }
                }
            }
        }
    }, {
        key: "AllocateNode",
        value: function() {
            var t;
            return this.m_freeList ? (t = this.m_freeList, this.m_freeList = t.parent, t.parent = null, 
            t.child1 = null, t.child2 = null, t.height = 0, delete t.userData, t) : new ke(v.s_node_id++);
        }
    }, {
        key: "FreeNode",
        value: function(t) {
            t.parent = this.m_freeList, t.child1 = null, t.child2 = null, t.height = -1, delete t.userData, 
            this.m_freeList = t;
        }
    }, {
        key: "CreateProxy",
        value: function(t, e) {
            var i = this.AllocateNode();
            return i.aabb.lowerBound.x = t.lowerBound.x - .1, i.aabb.lowerBound.y = t.lowerBound.y - .1, 
            i.aabb.upperBound.x = t.upperBound.x + .1, i.aabb.upperBound.y = t.upperBound.y + .1, 
            i.userData = e, i.height = 0, this.InsertLeaf(i), i;
        }
    }, {
        key: "DestroyProxy",
        value: function(t) {
            this.RemoveLeaf(t), this.FreeNode(t);
        }
    }, {
        key: "MoveProxy",
        value: function(t, e, i) {
            if (t.aabb.Contains(e)) return !1;
            this.RemoveLeaf(t);
            var s = .1 + 2 * (0 < i.x ? i.x : -i.x), i = .1 + 2 * (0 < i.y ? i.y : -i.y);
            return t.aabb.lowerBound.x = e.lowerBound.x - s, t.aabb.lowerBound.y = e.lowerBound.y - i, 
            t.aabb.upperBound.x = e.upperBound.x + s, t.aabb.upperBound.y = e.upperBound.y + i, 
            this.InsertLeaf(t), !0;
        }
    }, {
        key: "InsertLeaf",
        value: function(t) {
            if (++this.m_insertionCount, null === this.m_root) this.m_root = t, this.m_root.parent = null; else {
                for (var e = t.aabb, i = this.m_root; !i.IsLeaf(); ) {
                    var s = p(i.child1), n = p(i.child2), o = i.aabb.GetPerimeter(), r = v.s_combinedAABB, r = (r.Combine2(i.aabb, e), 
                    r.GetPerimeter()), a = 2 * r, r = 2 * (r - o), o = void 0, l = v.s_aabb, _ = void 0, o = s.IsLeaf() ? (l.Combine2(e, s.aabb), 
                    l.GetPerimeter() + r) : (l.Combine2(e, s.aabb), _ = s.aabb.GetPerimeter(), l.GetPerimeter() - _ + r), m = void 0, m = n.IsLeaf() ? (l.Combine2(e, n.aabb), 
                    l.GetPerimeter() + r) : (l.Combine2(e, n.aabb), _ = n.aabb.GetPerimeter(), l.GetPerimeter() - _ + r);
                    if (a < o && a < m) break;
                    i = o < m ? s : n;
                }
                for (var h = i, u = h.parent, c = this.AllocateNode(), f = (c.parent = u, delete c.userData, 
                c.aabb.Combine2(e, h.aabb), c.height = h.height + 1, u ? (u.child1 === h ? u.child1 = c : u.child2 = c, 
                c.child1 = h, c.child2 = t, h.parent = c, t.parent = c) : (c.child1 = h, c.child2 = t, 
                h.parent = c, t.parent = c, this.m_root = c), t.parent); null !== f; ) {
                    var d = p((f = this.Balance(f)).child1), y = p(f.child2);
                    f.height = 1 + D(d.height, y.height), f.aabb.Combine2(d.aabb, y.aabb), f = f.parent;
                }
            }
        }
    }, {
        key: "RemoveLeaf",
        value: function(t) {
            if (t === this.m_root) this.m_root = null; else {
                var e = p(t.parent), i = e && e.parent, s = void 0, s = e.child1 === t ? p(e.child2) : p(e.child1);
                if (i) {
                    i.child1 === e ? i.child1 = s : i.child2 = s, s.parent = i, this.FreeNode(e);
                    for (var n = i; n; ) {
                        var o = p((n = this.Balance(n)).child1), r = p(n.child2);
                        n.aabb.Combine2(o.aabb, r.aabb), n.height = 1 + D(o.height, r.height), n = n.parent;
                    }
                } else (this.m_root = s).parent = null, this.FreeNode(e);
            }
        }
    }, {
        key: "Balance",
        value: function(t) {
            var e, i, s, n, o;
            return t.IsLeaf() || t.height < 2 ? t : (e = p(t.child1), 1 < (s = (i = p(t.child2)).height - e.height) ? (n = p(i.child1), 
            o = p(i.child2), i.child1 = t, i.parent = t.parent, null !== (t.parent = i).parent ? i.parent.child1 === t ? i.parent.child1 = i : i.parent.child2 = i : this.m_root = i, 
            n.height > o.height ? (i.child2 = n, ((t.child2 = o).parent = t).aabb.Combine2(e.aabb, o.aabb), 
            i.aabb.Combine2(t.aabb, n.aabb), t.height = 1 + D(e.height, o.height), i.height = 1 + D(t.height, n.height)) : (i.child2 = o, 
            ((t.child2 = n).parent = t).aabb.Combine2(e.aabb, n.aabb), i.aabb.Combine2(t.aabb, o.aabb), 
            t.height = 1 + D(e.height, n.height), i.height = 1 + D(t.height, o.height)), i) : s < -1 ? (n = p(e.child1), 
            o = p(e.child2), e.child1 = t, e.parent = t.parent, null !== (t.parent = e).parent ? e.parent.child1 === t ? e.parent.child1 = e : e.parent.child2 = e : this.m_root = e, 
            n.height > o.height ? (e.child2 = n, ((t.child1 = o).parent = t).aabb.Combine2(i.aabb, o.aabb), 
            e.aabb.Combine2(t.aabb, n.aabb), t.height = 1 + D(i.height, o.height), e.height = 1 + D(t.height, n.height)) : (e.child2 = o, 
            ((t.child1 = n).parent = t).aabb.Combine2(i.aabb, n.aabb), e.aabb.Combine2(t.aabb, o.aabb), 
            t.height = 1 + D(i.height, n.height), e.height = 1 + D(t.height, o.height)), e) : t);
        }
    }, {
        key: "GetHeight",
        value: function() {
            return null === this.m_root ? 0 : this.m_root.height;
        }
    }, {
        key: "GetAreaRatio",
        value: function() {
            var t;
            return null === this.m_root ? 0 : (t = this.m_root.aabb.GetPerimeter(), v.GetAreaNode(this.m_root) / t);
        }
    }, {
        key: "ComputeHeightNode",
        value: function(t) {
            var e;
            return !t || t.IsLeaf() ? 0 : (e = this.ComputeHeightNode(t.child1), t = this.ComputeHeightNode(t.child2), 
            1 + D(e, t));
        }
    }, {
        key: "ComputeHeight",
        value: function() {
            return this.ComputeHeightNode(this.m_root);
        }
    }, {
        key: "ValidateStructure",
        value: function(t) {
            var e;
            null === t || (this.m_root, (t = t).IsLeaf()) || (e = p(t.child1), t = p(t.child2), 
            this.ValidateStructure(e), this.ValidateStructure(t));
        }
    }, {
        key: "ValidateMetrics",
        value: function(t) {
            var e;
            null === t || (t = t).IsLeaf() || (e = p(t.child1), t = p(t.child2), v.s_aabb.Combine2(e.aabb, t.aabb), 
            this.ValidateMetrics(e), this.ValidateMetrics(t));
        }
    }, {
        key: "Validate",
        value: function() {}
    }, {
        key: "GetMaxBalance",
        value: function() {
            return v.GetMaxBalanceNode(this.m_root, 0);
        }
    }, {
        key: "RebuildBottomUp",
        value: function() {
            this.Validate();
        }
    }, {
        key: "ShiftOrigin",
        value: function(t) {
            v.ShiftOriginNode(this.m_root, t);
        }
    } ], [ {
        key: "GetAreaNode",
        value: function(t) {
            var e;
            return null === t || t.IsLeaf() ? 0 : (e = t.aabb.GetPerimeter(), (e += v.GetAreaNode(t.child1)) + v.GetAreaNode(t.child2));
        }
    }, {
        key: "GetMaxBalanceNode",
        value: function(t, e) {
            var i;
            return null === t || t.height <= 1 ? e : (i = p(t.child1), t = p(t.child2), t = R(t.height - i.height), 
            D(e, t));
        }
    }, {
        key: "ShiftOriginNode",
        value: function(t, e) {
            var i, s;
            null === t || t.height <= 1 || (i = t.child1, s = t.child2, v.ShiftOriginNode(i, e), 
            v.ShiftOriginNode(s, e), t.aabb.lowerBound.SelfSub(e), t.aabb.upperBound.SelfSub(e));
        }
    } ]);
    var Pe = v;
    function v() {
        _classCallCheck(this, v), this.m_root = null, this.m_freeList = null, this.m_path = 0, 
        this.m_insertionCount = 0, this.m_stack = new gt(256);
    }
    Pe.s_r = new X(), Pe.s_v = new X(), Pe.s_abs_v = new X(), Pe.s_segmentAABB = new _(), 
    Pe.s_subInput = new pe(), Pe.s_combinedAABB = new _(), Pe.s_aabb = new _(), Pe.s_node_id = 0;
    function Ie(t, e) {
        _classCallCheck(this, Ie), this.proxyA = t, this.proxyB = e;
    }
    _createClass(De, [ {
        key: "CreateProxy",
        value: function(t, e) {
            t = this.m_tree.CreateProxy(t, e);
            return ++this.m_proxyCount, this.BufferMove(t), t;
        }
    }, {
        key: "DestroyProxy",
        value: function(t) {
            this.UnBufferMove(t), --this.m_proxyCount, this.m_tree.DestroyProxy(t);
        }
    }, {
        key: "MoveProxy",
        value: function(t, e, i) {
            this.m_tree.MoveProxy(t, e, i) && this.BufferMove(t);
        }
    }, {
        key: "TouchProxy",
        value: function(t) {
            this.BufferMove(t);
        }
    }, {
        key: "GetProxyCount",
        value: function() {
            return this.m_proxyCount;
        }
    }, {
        key: "UpdatePairs",
        value: function(t) {
            for (var n = this, e = this.m_pairCount = 0; e < this.m_moveCount; ++e) !function(t) {
                var s = n.m_moveBuffer[t];
                if (null === s) return;
                t = s.aabb;
                n.m_tree.Query(t, function(t) {
                    var e, i;
                    return t.m_id !== s.m_id && (i = e = void 0, i = t.m_id < s.m_id ? (e = t, s) : (e = s, 
                    t), n.m_pairCount === n.m_pairBuffer.length ? n.m_pairBuffer[n.m_pairCount] = new Ie(e, i) : ((t = n.m_pairBuffer[n.m_pairCount]).proxyA = e, 
                    t.proxyB = i), ++n.m_pairCount), !0;
                });
            }(e);
            this.m_moveCount = 0, this.m_pairBuffer.length = this.m_pairCount, this.m_pairBuffer.sort(Fe);
            for (var i = 0; i < this.m_pairCount; ) {
                var s = this.m_pairBuffer[i];
                for (t(s.proxyA.userData, s.proxyB.userData), ++i; i < this.m_pairCount; ) {
                    var o = this.m_pairBuffer[i];
                    if (o.proxyA.m_id !== s.proxyA.m_id || o.proxyB.m_id !== s.proxyB.m_id) break;
                    ++i;
                }
            }
        }
    }, {
        key: "Query",
        value: function(t, e) {
            this.m_tree.Query(t, e);
        }
    }, {
        key: "QueryPoint",
        value: function(t, e) {
            this.m_tree.QueryPoint(t, e);
        }
    }, {
        key: "RayCast",
        value: function(t, e) {
            this.m_tree.RayCast(t, e);
        }
    }, {
        key: "GetTreeHeight",
        value: function() {
            return this.m_tree.GetHeight();
        }
    }, {
        key: "GetTreeBalance",
        value: function() {
            return this.m_tree.GetMaxBalance();
        }
    }, {
        key: "GetTreeQuality",
        value: function() {
            return this.m_tree.GetAreaRatio();
        }
    }, {
        key: "ShiftOrigin",
        value: function(t) {
            this.m_tree.ShiftOrigin(t);
        }
    }, {
        key: "BufferMove",
        value: function(t) {
            this.m_moveBuffer[this.m_moveCount] = t, ++this.m_moveCount;
        }
    }, {
        key: "UnBufferMove",
        value: function(t) {
            t = this.m_moveBuffer.indexOf(t);
            this.m_moveBuffer[t] = null;
        }
    } ]);
    var Ge = De;
    function De() {
        _classCallCheck(this, De), this.m_tree = new Pe(), this.m_proxyCount = 0, this.m_moveCount = 0, 
        this.m_moveBuffer = [], this.m_pairCount = 0, this.m_pairBuffer = [];
    }
    function Fe(t, e) {
        return t.proxyA.m_id === e.proxyA.m_id ? t.proxyB.m_id - e.proxyB.m_id : t.proxyA.m_id - e.proxyA.m_id;
    }
    N.b2_toiTime = 0, N.b2_toiMaxTime = 0, N.b2_toiCalls = 0, N.b2_toiIters = 0, N.b2_toiMaxIters = 0, 
    N.b2_toiRootIters = 0, N.b2_toiMaxRootIters = 0;
    function Te() {
        _classCallCheck(this, Te), this.proxyA = new Mt(), this.proxyB = new Mt(), this.sweepA = new pt(), 
        this.sweepB = new pt(), this.tMax = 0;
    }
    function Re() {
        _classCallCheck(this, Re), this.state = N.b2TOIOutputState.e_unknown, this.t = 0;
    }
    var Le = new F(), qe = new F(), ze = new X(), Oe = new X(), Ee = new X(), je = new X(), Je = new X(), i = ((i = N.b2TOIOutputState || (N.b2TOIOutputState = {}))[i.e_unknown = 0] = "e_unknown", 
    i[i.e_failed = 1] = "e_failed", i[i.e_overlapped = 2] = "e_overlapped", i[i.e_touching = 3] = "e_touching", 
    i[i.e_separated = 4] = "e_separated", (i = N.b2SeparationFunctionType || (N.b2SeparationFunctionType = {}))[i.e_unknown = -1] = "e_unknown", 
    i[i.e_points = 0] = "e_points", i[i.e_faceA = 1] = "e_faceA", i[i.e_faceB = 2] = "e_faceB", 
    _createClass(Ne, [ {
        key: "Initialize",
        value: function(t, e, i, s, n, o) {
            this.m_proxyA = e, this.m_proxyB = s;
            var e = t.count, s = (this.m_sweepA.Copy(i), this.m_sweepB.Copy(n), Le), i = qe;
            return this.m_sweepA.GetTransform(s, o), this.m_sweepB.GetTransform(i, o), 1 === e ? (this.m_type = N.b2SeparationFunctionType.e_points, 
            n = this.m_proxyA.GetVertex(t.indexA[0]), o = this.m_proxyB.GetVertex(t.indexB[0]), 
            e = F.MulXV(s, n, ze), n = F.MulXV(i, o, Oe), X.SubVV(n, e, this.m_axis), o = this.m_axis.Normalize(), 
            this.m_localPoint.SetZero(), o) : t.indexA[0] === t.indexA[1] ? (this.m_type = N.b2SeparationFunctionType.e_faceB, 
            n = this.m_proxyB.GetVertex(t.indexB[0]), e = this.m_proxyB.GetVertex(t.indexB[1]), 
            X.CrossVOne(X.SubVV(e, n, X.s_t0), this.m_axis).SelfNormalize(), o = P.MulRV(i.q, this.m_axis, Ee), 
            X.MidVV(n, e, this.m_localPoint), n = F.MulXV(i, this.m_localPoint, Oe), e = this.m_proxyA.GetVertex(t.indexA[0]), 
            e = F.MulXV(s, e, ze), (e = X.DotVV(X.SubVV(e, n, X.s_t0), o)) < 0 && (this.m_axis.SelfNeg(), 
            e = -e), e) : (this.m_type = N.b2SeparationFunctionType.e_faceA, n = this.m_proxyA.GetVertex(t.indexA[0]), 
            o = this.m_proxyA.GetVertex(t.indexA[1]), X.CrossVOne(X.SubVV(o, n, X.s_t0), this.m_axis).SelfNormalize(), 
            e = P.MulRV(s.q, this.m_axis, Ee), X.MidVV(n, o, this.m_localPoint), n = F.MulXV(s, this.m_localPoint, ze), 
            o = this.m_proxyB.GetVertex(t.indexB[0]), s = F.MulXV(i, o, Oe), (t = X.DotVV(X.SubVV(s, n, X.s_t0), e)) < 0 && (this.m_axis.SelfNeg(), 
            t = -t), t);
        }
    }, {
        key: "FindMinSeparation",
        value: function(t, e, i) {
            var s = Le, n = qe;
            switch (this.m_sweepA.GetTransform(s, i), this.m_sweepB.GetTransform(n, i), this.m_type) {
              case N.b2SeparationFunctionType.e_points:
                var o = P.MulTRV(s.q, this.m_axis, je), r = P.MulTRV(n.q, X.NegV(this.m_axis, X.s_t0), Je), o = (t[0] = this.m_proxyA.GetSupport(o), 
                e[0] = this.m_proxyB.GetSupport(r), this.m_proxyA.GetVertex(t[0])), r = this.m_proxyB.GetVertex(e[0]), o = F.MulXV(s, o, ze), r = F.MulXV(n, r, Oe);
                return X.DotVV(X.SubVV(r, o, X.s_t0), this.m_axis);

              case N.b2SeparationFunctionType.e_faceA:
                var r = P.MulRV(s.q, this.m_axis, Ee), o = F.MulXV(s, this.m_localPoint, ze), a = P.MulTRV(n.q, X.NegV(r, X.s_t0), Je), a = (t[0] = -1, 
                e[0] = this.m_proxyB.GetSupport(a), this.m_proxyB.GetVertex(e[0])), a = F.MulXV(n, a, Oe);
                return X.DotVV(X.SubVV(a, o, X.s_t0), r);

              case N.b2SeparationFunctionType.e_faceB:
                a = P.MulRV(n.q, this.m_axis, Ee), o = F.MulXV(n, this.m_localPoint, Oe), r = P.MulTRV(s.q, X.NegV(a, X.s_t0), je), 
                r = (e[0] = -1, t[0] = this.m_proxyA.GetSupport(r), this.m_proxyA.GetVertex(t[0])), 
                r = F.MulXV(s, r, ze);
                return X.DotVV(X.SubVV(r, o, X.s_t0), a);

              default:
                return t[0] = -1, e[0] = -1, 0;
            }
        }
    }, {
        key: "Evaluate",
        value: function(t, e, i) {
            var s = Le, n = qe;
            switch (this.m_sweepA.GetTransform(s, i), this.m_sweepB.GetTransform(n, i), this.m_type) {
              case N.b2SeparationFunctionType.e_points:
                var o = this.m_proxyA.GetVertex(t), r = this.m_proxyB.GetVertex(e), o = F.MulXV(s, o, ze), r = F.MulXV(n, r, Oe);
                return X.DotVV(X.SubVV(r, o, X.s_t0), this.m_axis);

              case N.b2SeparationFunctionType.e_faceA:
                var r = P.MulRV(s.q, this.m_axis, Ee), o = F.MulXV(s, this.m_localPoint, ze), a = this.m_proxyB.GetVertex(e), a = F.MulXV(n, a, Oe);
                return X.DotVV(X.SubVV(a, o, X.s_t0), r);

              case N.b2SeparationFunctionType.e_faceB:
                a = P.MulRV(n.q, this.m_axis, Ee), o = F.MulXV(n, this.m_localPoint, Oe), r = this.m_proxyA.GetVertex(t), 
                r = F.MulXV(s, r, ze);
                return X.DotVV(X.SubVV(r, o, X.s_t0), a);

              default:
                return 0;
            }
        }
    } ]), Ne);
    function Ne() {
        _classCallCheck(this, Ne), this.m_sweepA = new pt(), this.m_sweepB = new pt(), this.m_type = N.b2SeparationFunctionType.e_unknown, 
        this.m_localPoint = new X(), this.m_axis = new X();
    }
    var Xe = new Bt(), Ue = new It(), Ze = new Dt(), We = new Tt(), He = new i(), Qe = [ 0 ], Ye = [ 0 ], Ke = new pt(), $e = new pt();
    function ti(t, e) {
        var i = Xe.Reset(), s = (++N.b2_toiCalls, t.state = N.b2TOIOutputState.e_unknown, 
        t.t = e.tMax, e.proxyA), n = e.proxyB, o = D(8, s.m_count, n.m_count), r = Ke.Copy(e.sweepA), a = $e.Copy(e.sweepB), l = (r.Normalize(), 
        a.Normalize(), e.tMax), _ = s.m_radius + n.m_radius, m = D(G, _ - 3 * G), h = .002, u = 0, c = 0, f = Ue, d = (f.count = 0, 
        Ze);
        for (d.proxyA.Copy(e.proxyA), d.proxyB.Copy(e.proxyB), d.useRadii = !1; ;) {
            var y = Le, p = qe, y = (r.GetTransform(y, u), a.GetTransform(p, u), d.transformA.Copy(y), 
            d.transformB.Copy(p), We);
            if (Yt(y, f, d), y.distance <= 0) {
                t.state = N.b2TOIOutputState.e_overlapped, t.t = 0;
                break;
            }
            if (y.distance < m + h) {
                t.state = N.b2TOIOutputState.e_touching, t.t = u;
                break;
            }
            for (var v = He, x = (v.Initialize(f, s, r, n, a, u), !1), C = l, B = 0; ;) {
                var S = Qe, b = Ye, A = v.FindMinSeparation(S, b, C);
                if (m + h < A) {
                    t.state = N.b2TOIOutputState.e_separated, t.t = l, x = !0;
                    break;
                }
                if (m - h < A) {
                    u = C;
                    break;
                }
                var g = v.Evaluate(S[0], b[0], u);
                if (g < m - h) {
                    t.state = N.b2TOIOutputState.e_failed, t.t = u, x = !0;
                    break;
                }
                if (g <= m + h) {
                    t.state = N.b2TOIOutputState.e_touching, t.t = u, x = !0;
                    break;
                }
                for (var V = 0, w = u, k = C; ;) {
                    var M = 0, M = 1 & V ? w + (m - g) * (k - w) / (A - g) : .5 * (w + k), P = (++V, 
                    ++N.b2_toiRootIters, v.Evaluate(S[0], b[0], M));
                    if (R(P - m) < h) {
                        C = M;
                        break;
                    }
                    if (m < P ? (w = M, g = P) : (k = M, A = P), 50 === V) break;
                }
                if (N.b2_toiMaxRootIters = D(N.b2_toiMaxRootIters, V), ++B === o) break;
            }
            if (++c, ++N.b2_toiIters, x) break;
            if (20 === c) {
                t.state = N.b2TOIOutputState.e_failed, t.t = u;
                break;
            }
        }
        N.b2_toiMaxIters = D(N.b2_toiMaxIters, c);
        _ = i.GetMilliseconds();
        N.b2_toiMaxTime = D(N.b2_toiMaxTime, _), N.b2_toiTime += _;
    }
    var ei = new X(), ii = new X();
    function si(t, e, i, s, n) {
        t.pointCount = 0;
        i = F.MulXV(i, e.m_p, ei), n = F.MulXV(n, s.m_p, ii), i = X.DistanceSquaredVV(i, n), 
        n = e.m_radius + s.m_radius;
        n * n < i || (t.type = N.b2ManifoldType.e_circles, t.localPoint.Copy(e.m_p), t.localNormal.SetZero(), 
        t.pointCount = 1, t.points[0].localPoint.Copy(s.m_p), t.points[0].id.key = 0);
    }
    var ni = new X(), oi = new X(), ri = new X();
    function ai(t, e, i, s, n) {
        t.pointCount = 0;
        for (var n = F.MulXV(n, s.m_p, ni), o = F.MulTXV(i, n, oi), r = 0, a = -T, l = e.m_radius + s.m_radius, _ = e.m_count, m = e.m_vertices, h = e.m_normals, u = 0; u < _; ++u) {
            var c = X.DotVV(h[u], X.SubVV(o, m[u], X.s_t0));
            if (l < c) return;
            a < c && (a = c, r = u);
        }
        var f, d, i = r, n = m[i], e = m[(i + 1) % _];
        a < I ? (t.pointCount = 1, t.type = N.b2ManifoldType.e_faceA, t.localNormal.Copy(h[r]), 
        X.MidVV(n, e, t.localPoint), t.points[0].localPoint.Copy(s.m_p), t.points[0].id.key = 0) : (d = X.DotVV(X.SubVV(o, n, X.s_t0), X.SubVV(e, n, X.s_t1)), 
        f = X.DotVV(X.SubVV(o, e, X.s_t0), X.SubVV(n, e, X.s_t1)), d <= 0 ? X.DistanceSquaredVV(o, n) > l * l || (t.pointCount = 1, 
        t.type = N.b2ManifoldType.e_faceA, X.SubVV(o, n, t.localNormal).SelfNormalize(), 
        t.localPoint.Copy(n), t.points[0].localPoint.Copy(s.m_p), t.points[0].id.key = 0) : f <= 0 ? X.DistanceSquaredVV(o, e) > l * l || (t.pointCount = 1, 
        t.type = N.b2ManifoldType.e_faceA, X.SubVV(o, e, t.localNormal).SelfNormalize(), 
        t.localPoint.Copy(e), t.points[0].localPoint.Copy(s.m_p), t.points[0].id.key = 0) : (d = X.MidVV(n, e, ri), 
        l < X.DotVV(X.SubVV(o, d, X.s_t1), h[i]) || (t.pointCount = 1, t.type = N.b2ManifoldType.e_faceA, 
        t.localNormal.Copy(h[i]).SelfNormalize(), t.localPoint.Copy(d), t.points[0].localPoint.Copy(s.m_p), 
        t.points[0].id.key = 0)));
    }
    var li = new X(), _i = new X(), mi = new X(), hi = new X();
    function ui(t, e, i, s, n) {
        for (var o = t.m_vertices, t = t.m_normals, r = s.m_count, a = s.m_vertices, s = P.MulRV(e.q, t[i], li), l = P.MulTRV(n.q, s, _i), _ = 0, m = T, h = 0; h < r; ++h) {
            var u = X.DotVV(a[h], l);
            u < m && (m = u, _ = h);
        }
        t = F.MulXV(e, o[i], mi), e = F.MulXV(n, a[_], hi);
        return X.DotVV(X.SubVV(e, t, X.s_t0), s);
    }
    var ci = new X(), fi = new X();
    function di(t, e, i, s, n) {
        for (var o = e.m_count, r = e.m_normals, a = X.SubVV(F.MulXV(n, s.m_centroid, X.s_t0), F.MulXV(i, e.m_centroid, X.s_t1), ci), l = P.MulTRV(i.q, a, fi), _ = 0, m = -T, h = 0; h < o; ++h) {
            var u = X.DotVV(r[h], l);
            m < u && (m = u, _ = h);
        }
        var c = ui(e, i, _, s, n), a = (_ + o - 1) % o, f = ui(e, i, a, s, n), d = (_ + 1) % o, y = ui(e, i, d, s, n), p = 0, v = 0, x = 0;
        if (c < f && y < f) x = -1, p = a, v = f; else {
            if (!(c < y)) return t[0] = _, c;
            x = 1, p = d, v = y;
        }
        for (;;) {
            if (!(v < (c = ui(e, i, _ = -1 === x ? (p + o - 1) % o : (p + 1) % o, s, n)))) break;
            p = _, v = c;
        }
        return t[0] = p, v;
    }
    var yi = new X();
    var pi = de.MakeArray(2), vi = de.MakeArray(2), xi = de.MakeArray(2), Ci = [ 0 ], Bi = [ 0 ], Si = new X(), bi = new X(), Ai = new X(), gi = new X(), Vi = new X(), wi = new X(), ki = new X(), Mi = new X();
    function Pi(t, e, i, s, n) {
        t.pointCount = 0;
        var o = e.m_radius + s.m_radius, r = Ci, a = (r[0] = 0, di(r, e, i, s, n));
        if (!(o < a)) {
            var l = Bi, _ = (l[0] = 0, di(l, s, n, e, i));
            if (!(o < _)) {
                for (var m = void 0, h = void 0, u = void 0, c = void 0, f = 0, d = 0, d = .98 * a + .001 < _ ? (m = s, 
                h = e, u = n, c = i, f = l[0], t.type = N.b2ManifoldType.e_faceB, 1) : (m = e, h = s, 
                u = i, c = n, f = r[0], t.type = N.b2ManifoldType.e_faceA, 0), a = pi, _ = a, l = u, e = f, s = h, i = c, n = (n = m).m_normals, y = s.m_count, r = s.m_vertices, p = s.m_normals, v = P.MulTRV(i.q, P.MulRV(l.q, n[e], X.s_t0), yi), x = 0, C = T, B = 0; B < y; ++B) {
                    var S = X.DotVV(v, p[B]);
                    S < C && (C = S, x = B);
                }
                l = ((s = x) + 1) % y, n = _[0], F.MulXV(i, r[s], n.v), (n = n.id.cf).indexA = e, 
                n.indexB = s, n.typeA = N.b2ContactFeatureType.e_face, n.typeB = N.b2ContactFeatureType.e_vertex, 
                s = _[1], F.MulXV(i, r[l], s.v), (n = s.id.cf).indexA = e, n.indexB = l, n.typeA = N.b2ContactFeatureType.e_face, 
                n.typeB = N.b2ContactFeatureType.e_vertex;
                var h = m.m_count, _ = m.m_vertices, i = f, r = (f + 1) % h, s = _[i], e = _[r], l = X.SubVV(e, s, Si), n = (l.Normalize(), 
                X.CrossVOne(l, bi)), m = X.MidVV(s, e, Ai), f = P.MulRV(u.q, l, Vi), b = X.CrossVOne(f, gi), h = F.MulXV(u, s, ki), _ = F.MulXV(u, e, Mi), A = X.DotVV(b, h), l = -X.DotVV(f, h) + o, s = X.DotVV(f, _) + o, u = vi, g = xi, e = be(u, a, X.NegV(f, wi), l, i);
                if (!(e < 2 || be(g, u, f, s, r) < 2)) {
                    t.localNormal.Copy(n), t.localPoint.Copy(m);
                    for (var V = 0, w = 0; w < 2; ++w) {
                        var k, M = g[w];
                        X.DotVV(b, M.v) - A <= o && (k = t.points[V], F.MulTXV(c, M.v, k.localPoint), k.id.Copy(M.id), 
                        d && (M = k.id.cf, k.id.cf.indexA = M.indexB, k.id.cf.indexB = M.indexA, k.id.cf.typeA = M.typeB, 
                        k.id.cf.typeB = M.typeA), ++V);
                    }
                    t.pointCount = V;
                }
            }
        }
    }
    var Ii = new X(), Gi = new X(), Di = new X(), Fi = new X(), Ti = new X(), Ri = new X(), Li = new X(), qi = new le();
    function zi(t, e, i, s, n) {
        t.pointCount = 0;
        var i = F.MulTXV(i, F.MulXV(n, s.m_p, X.s_t0), Ii), n = e.m_vertex1, o = e.m_vertex2, r = X.SubVV(o, n, Gi), a = X.DotVV(r, X.SubVV(o, i, X.s_t0)), l = X.DotVV(r, X.SubVV(i, n, X.s_t0)), _ = e.m_radius + s.m_radius, m = qi;
        if (m.cf.indexB = 0, m.cf.typeB = N.b2ContactFeatureType.e_vertex, l <= 0) {
            var h = n, u = X.SubVV(i, h, Di);
            if (!(_ * _ < X.DotVV(u, u))) {
                if (e.m_hasVertex0) {
                    var u = e.m_vertex0, c = n, u = X.SubVV(c, u, Fi);
                    if (0 < X.DotVV(u, X.SubVV(c, i, X.s_t0))) return;
                }
                m.cf.indexA = 0, m.cf.typeA = N.b2ContactFeatureType.e_vertex, t.pointCount = 1, 
                t.type = N.b2ManifoldType.e_circles, t.localNormal.SetZero(), t.localPoint.Copy(h), 
                t.points[0].id.Copy(m), t.points[0].localPoint.Copy(s.m_p);
            }
        } else if (a <= 0) {
            u = o, c = X.SubVV(i, u, Di);
            if (!(_ * _ < X.DotVV(c, c))) {
                if (e.m_hasVertex3) {
                    h = e.m_vertex3, c = o, e = X.SubVV(h, c, Ti);
                    if (0 < X.DotVV(e, X.SubVV(i, c, X.s_t0))) return;
                }
                m.cf.indexA = 1, m.cf.typeA = N.b2ContactFeatureType.e_vertex, t.pointCount = 1, 
                t.type = N.b2ManifoldType.e_circles, t.localNormal.SetZero(), t.localPoint.Copy(u), 
                t.points[0].id.Copy(m), t.points[0].localPoint.Copy(s.m_p);
            }
        } else {
            h = X.DotVV(r, r), e = Ri, c = (e.x = 1 / h * (a * n.x + l * o.x), e.y = 1 / h * (a * n.y + l * o.y), 
            X.SubVV(i, e, Di));
            _ * _ < X.DotVV(c, c) || (u = Li.Set(-r.y, r.x), X.DotVV(u, X.SubVV(i, n, X.s_t0)) < 0 && u.Set(-u.x, -u.y), 
            u.Normalize(), m.cf.indexA = 0, m.cf.typeA = N.b2ContactFeatureType.e_face, t.pointCount = 1, 
            t.type = N.b2ManifoldType.e_faceA, t.localNormal.Copy(u), t.localPoint.Copy(n), 
            t.points[0].id.Copy(m), t.points[0].localPoint.Copy(s.m_p));
        }
    }
    function Oi() {
        _classCallCheck(this, Oi), this.type = 0, this.index = 0, this.separation = 0;
    }
    function Ei() {
        _classCallCheck(this, Ei), this.vertices = [], this.normals = [], this.count = 0;
    }
    function ji() {
        _classCallCheck(this, ji), this.i1 = 0, this.i2 = 0, this.v1 = new X(), this.v2 = new X(), 
        this.normal = new X(), this.sideNormal1 = new X(), this.sideOffset1 = 0, this.sideNormal2 = new X(), 
        this.sideOffset2 = 0;
    }
    _createClass(Ji, [ {
        key: "Collide",
        value: function(t, e, i, s, n) {
            F.MulTXX(i, n, this.m_xf), F.MulXV(this.m_xf, s.m_centroid, this.m_centroidB), this.m_v0.Copy(e.m_vertex0), 
            this.m_v1.Copy(e.m_vertex1), this.m_v2.Copy(e.m_vertex2), this.m_v3.Copy(e.m_vertex3);
            var i = e.m_hasVertex0, n = e.m_hasVertex3, o = X.SubVV(this.m_v2, this.m_v1, Ji.s_edge1), r = (o.Normalize(), 
            this.m_normal1.Set(o.y, -o.x), X.DotVV(this.m_normal1, X.SubVV(this.m_centroidB, this.m_v1, X.s_t0))), a = 0, l = 0, _ = !1, m = !1;
            i && ((u = X.SubVV(this.m_v1, this.m_v0, Ji.s_edge0)).Normalize(), this.m_normal0.Set(u.y, -u.x), 
            _ = 0 <= X.CrossVV(u, o), a = X.DotVV(this.m_normal0, X.SubVV(this.m_centroidB, this.m_v0, X.s_t0))), 
            n && ((u = X.SubVV(this.m_v3, this.m_v2, Ji.s_edge2)).Normalize(), this.m_normal2.Set(u.y, -u.x), 
            m = 0 < X.CrossVV(o, u), l = X.DotVV(this.m_normal2, X.SubVV(this.m_centroidB, this.m_v2, X.s_t0))), 
            i && n ? _ && m ? (this.m_front = 0 <= a || 0 <= r || 0 <= l, this.m_front ? (this.m_normal.Copy(this.m_normal1), 
            this.m_lowerLimit.Copy(this.m_normal0), this.m_upperLimit.Copy(this.m_normal2)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), 
            this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1).SelfNeg())) : _ ? (this.m_front = 0 <= a || 0 <= r && 0 <= l, 
            this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal0), 
            this.m_upperLimit.Copy(this.m_normal1)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), 
            this.m_lowerLimit.Copy(this.m_normal2).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1).SelfNeg())) : m ? (this.m_front = 0 <= l || 0 <= a && 0 <= r, 
            this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1), 
            this.m_upperLimit.Copy(this.m_normal2)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), 
            this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal0).SelfNeg())) : (this.m_front = 0 <= a && 0 <= r && 0 <= l, 
            this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1), 
            this.m_upperLimit.Copy(this.m_normal1)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), 
            this.m_lowerLimit.Copy(this.m_normal2).SelfNeg(), this.m_upperLimit.Copy(this.m_normal0).SelfNeg())) : i ? (_ ? (this.m_front = 0 <= a || 0 <= r, 
            this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal0)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), 
            this.m_lowerLimit.Copy(this.m_normal1)), this.m_upperLimit.Copy(this.m_normal1)) : (this.m_front = 0 <= a && 0 <= r, 
            this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1), 
            this.m_upperLimit.Copy(this.m_normal1)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), 
            this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal0)))).SelfNeg() : n ? m ? (this.m_front = 0 <= r || 0 <= l, 
            this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), 
            this.m_upperLimit.Copy(this.m_normal2)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), 
            this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1))) : (this.m_front = 0 <= r && 0 <= l, 
            (this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), 
            this.m_lowerLimit.Copy(this.m_normal2))).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1)) : (this.m_front = 0 <= r, 
            this.m_front ? (this.m_normal.Copy(this.m_normal1), this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), 
            this.m_upperLimit.Copy(this.m_normal1).SelfNeg()) : (this.m_normal.Copy(this.m_normal1).SelfNeg(), 
            this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal1))), 
            this.m_polygonB.count = s.m_count;
            for (var h = 0; h < s.m_count; ++h) this.m_polygonB.vertices.length <= h && this.m_polygonB.vertices.push(new X()), 
            this.m_polygonB.normals.length <= h && this.m_polygonB.normals.push(new X()), F.MulXV(this.m_xf, s.m_vertices[h], this.m_polygonB.vertices[h]), 
            P.MulRV(this.m_xf.q, s.m_normals[h], this.m_polygonB.normals[h]);
            this.m_radius = s.m_radius + e.m_radius, t.pointCount = 0;
            o = this.ComputeEdgeSeparation(Ji.s_edgeAxis);
            if (0 !== o.type && !(o.separation > this.m_radius)) {
                var u = this.ComputePolygonSeparation(Ji.s_polygonAxis);
                if (!(0 !== u.type && u.separation > this.m_radius)) {
                    var c = void 0, c = 0 !== u.type && u.separation > .98 * o.separation + .001 ? u : o, i = Ji.s_ie, f = Ji.s_rf;
                    if (1 === c.type) {
                        t.type = N.b2ManifoldType.e_faceA;
                        for (var d = 0, y = X.DotVV(this.m_normal, this.m_polygonB.normals[0]), p = 1; p < this.m_polygonB.count; ++p) {
                            var v = X.DotVV(this.m_normal, this.m_polygonB.normals[p]);
                            v < y && (y = v, d = p);
                        }
                        _ = d, a = (_ + 1) % this.m_polygonB.count, n = i[0], m = (n.v.Copy(this.m_polygonB.vertices[_]), 
                        n.id.cf.indexA = 0, n.id.cf.indexB = _, n.id.cf.typeA = N.b2ContactFeatureType.e_face, 
                        n.id.cf.typeB = N.b2ContactFeatureType.e_vertex, i[1]);
                        m.v.Copy(this.m_polygonB.vertices[a]), m.id.cf.indexA = 0, m.id.cf.indexB = a, m.id.cf.typeA = N.b2ContactFeatureType.e_face, 
                        m.id.cf.typeB = N.b2ContactFeatureType.e_vertex, this.m_front ? (f.i1 = 0, f.i2 = 1, 
                        f.v1.Copy(this.m_v1), f.v2.Copy(this.m_v2), f.normal.Copy(this.m_normal1)) : (f.i1 = 1, 
                        f.i2 = 0, f.v1.Copy(this.m_v2), f.v2.Copy(this.m_v1), f.normal.Copy(this.m_normal1).SelfNeg());
                    } else {
                        t.type = N.b2ManifoldType.e_faceB;
                        l = i[0], r = (l.v.Copy(this.m_v1), l.id.cf.indexA = 0, l.id.cf.indexB = c.index, 
                        l.id.cf.typeA = N.b2ContactFeatureType.e_vertex, l.id.cf.typeB = N.b2ContactFeatureType.e_face, 
                        i[1]);
                        r.v.Copy(this.m_v2), r.id.cf.indexA = 0, r.id.cf.indexB = c.index, r.id.cf.typeA = N.b2ContactFeatureType.e_vertex, 
                        r.id.cf.typeB = N.b2ContactFeatureType.e_face, f.i1 = c.index, f.i2 = (f.i1 + 1) % this.m_polygonB.count, 
                        f.v1.Copy(this.m_polygonB.vertices[f.i1]), f.v2.Copy(this.m_polygonB.vertices[f.i2]), 
                        f.normal.Copy(this.m_polygonB.normals[f.i1]);
                    }
                    f.sideNormal1.Set(f.normal.y, -f.normal.x), f.sideNormal2.Copy(f.sideNormal1).SelfNeg(), 
                    f.sideOffset1 = X.DotVV(f.sideNormal1, f.v1), f.sideOffset2 = X.DotVV(f.sideNormal2, f.v2);
                    var e = Ji.s_clipPoints1, x = Ji.s_clipPoints2, u = be(e, i, f.sideNormal1, f.sideOffset1, f.i1);
                    if (!(u < 2 || be(x, e, f.sideNormal2, f.sideOffset2, f.i2) < 2)) {
                        1 === c.type ? (t.localNormal.Copy(f.normal), t.localPoint.Copy(f.v1)) : (t.localNormal.Copy(s.m_normals[f.i1]), 
                        t.localPoint.Copy(s.m_vertices[f.i1]));
                        for (var C = 0, B = 0; B < 2; ++B) {
                            var S;
                            X.DotVV(f.normal, X.SubVV(x[B].v, f.v1, X.s_t0)) <= this.m_radius && (S = t.points[C], 
                            1 === c.type ? (F.MulTXV(this.m_xf, x[B].v, S.localPoint), S.id = x[B].id) : (S.localPoint.Copy(x[B].v), 
                            S.id.cf.typeA = x[B].id.cf.typeB, S.id.cf.typeB = x[B].id.cf.typeA, S.id.cf.indexA = x[B].id.cf.indexB, 
                            S.id.cf.indexB = x[B].id.cf.indexA), ++C);
                        }
                        t.pointCount = C;
                    }
                }
            }
        }
    }, {
        key: "ComputeEdgeSeparation",
        value: function(t) {
            var e = t;
            e.type = 1, e.index = this.m_front ? 0 : 1, e.separation = T;
            for (var i = 0; i < this.m_polygonB.count; ++i) {
                var s = X.DotVV(this.m_normal, X.SubVV(this.m_polygonB.vertices[i], this.m_v1, X.s_t0));
                s < e.separation && (e.separation = s);
            }
            return e;
        }
    }, {
        key: "ComputePolygonSeparation",
        value: function(t) {
            for (var e = t, i = (e.type = 0, e.index = -1, e.separation = -T, Ji.s_perp.Set(-this.m_normal.y, this.m_normal.x)), s = 0; s < this.m_polygonB.count; ++s) {
                var n = X.NegV(this.m_polygonB.normals[s], Ji.s_n), o = X.DotVV(n, X.SubVV(this.m_polygonB.vertices[s], this.m_v1, X.s_t0)), r = X.DotVV(n, X.SubVV(this.m_polygonB.vertices[s], this.m_v2, X.s_t0)), o = L(o, r);
                if (o > this.m_radius) return e.type = 2, e.index = s, e.separation = o, e;
                if (0 <= X.DotVV(n, i)) {
                    if (X.DotVV(X.SubVV(n, this.m_upperLimit, X.s_t0), this.m_normal) < -k) continue;
                } else if (X.DotVV(X.SubVV(n, this.m_lowerLimit, X.s_t0), this.m_normal) < -k) continue;
                o > e.separation && (e.type = 2, e.index = s, e.separation = o);
            }
            return e;
        }
    } ]);
    var s = Ji;
    function Ji() {
        _classCallCheck(this, Ji), this.m_polygonB = new Ei(), this.m_xf = new F(), this.m_centroidB = new X(), 
        this.m_v0 = new X(), this.m_v1 = new X(), this.m_v2 = new X(), this.m_v3 = new X(), 
        this.m_normal0 = new X(), this.m_normal1 = new X(), this.m_normal2 = new X(), this.m_normal = new X(), 
        this.m_type1 = 0, this.m_type2 = 0, this.m_lowerLimit = new X(), this.m_upperLimit = new X(), 
        this.m_radius = 0, this.m_front = !1;
    }
    s.s_edge1 = new X(), s.s_edge0 = new X(), s.s_edge2 = new X(), s.s_ie = de.MakeArray(2), 
    s.s_rf = new ji(), s.s_clipPoints1 = de.MakeArray(2), s.s_clipPoints2 = de.MakeArray(2), 
    s.s_edgeAxis = new Oi(), s.s_polygonAxis = new Oi(), s.s_n = new X(), s.s_perp = new X();
    var Ni = new s();
    function Xi(t, e, i, s, n) {
        Ni.Collide(t, e, i, s, n);
    }
    function Ui() {
        _classCallCheck(this, Ui), this.mass = 0, this.center = new X(0, 0), this.I = 0;
    }
    (s = N.b2ShapeType || (N.b2ShapeType = {}))[s.e_unknown = -1] = "e_unknown", s[s.e_circleShape = 0] = "e_circleShape", 
    s[s.e_edgeShape = 1] = "e_edgeShape", s[s.e_polygonShape = 2] = "e_polygonShape", 
    s[s.e_chainShape = 3] = "e_chainShape", s[s.e_shapeTypeCount = 4] = "e_shapeTypeCount", 
    _createClass(Wi, [ {
        key: "Copy",
        value: function(t) {
            return this.m_radius = t.m_radius, this;
        }
    }, {
        key: "GetType",
        value: function() {
            return this.m_type;
        }
    } ]);
    var Zi = Wi;
    function Wi(t, e) {
        _classCallCheck(this, Wi), this.m_type = N.b2ShapeType.e_unknown, this.m_radius = 0, 
        this.m_type = t, this.m_radius = e;
    }
    _inherits(Hi, Zi), _createClass(Hi, [ {
        key: "Set",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.m_radius;
            return this.m_p.Copy(t), this.m_radius = e, this;
        }
    }, {
        key: "Clone",
        value: function() {
            return new Hi().Copy(this);
        }
    }, {
        key: "Copy",
        value: function(t) {
            return _get(Hi.prototype.__proto__ || Object.getPrototypeOf(Hi.prototype), "Copy", this).call(this, t), 
            this.m_p.Copy(t.m_p), this;
        }
    }, {
        key: "GetChildCount",
        value: function() {
            return 1;
        }
    }, {
        key: "TestPoint",
        value: function(t, e) {
            t = F.MulXV(t, this.m_p, Hi.TestPoint_s_center), e = X.SubVV(e, t, Hi.TestPoint_s_d);
            return X.DotVV(e, e) <= tt(this.m_radius);
        }
    }, {
        key: "ComputeDistance",
        value: function(t, e, i, s) {
            t = F.MulXV(t, this.m_p, Hi.ComputeDistance_s_center);
            return X.SubVV(e, t, i), i.Normalize() - this.m_radius;
        }
    }, {
        key: "RayCast",
        value: function(t, e, i, s) {
            var i = F.MulXV(i, this.m_p, Hi.RayCast_s_position), i = X.SubVV(e.p1, i, Hi.RayCast_s_s), n = X.DotVV(i, i) - tt(this.m_radius), o = X.SubVV(e.p2, e.p1, Hi.RayCast_s_r), r = X.DotVV(i, o), a = X.DotVV(o, o), n = r * r - a * n;
            return !(n < 0 || a < I) && 0 <= (r = -(r + it(n))) && r <= e.maxFraction * a && (t.fraction = r /= a, 
            X.AddVMulSV(i, r, o, t.normal).SelfNormalize(), !0);
        }
    }, {
        key: "ComputeAABB",
        value: function(t, e, i) {
            e = F.MulXV(e, this.m_p, Hi.ComputeAABB_s_p);
            t.lowerBound.Set(e.x - this.m_radius, e.y - this.m_radius), t.upperBound.Set(e.x + this.m_radius, e.y + this.m_radius);
        }
    }, {
        key: "ComputeMass",
        value: function(t, e) {
            var i = tt(this.m_radius);
            t.mass = e * y * i, t.center.Copy(this.m_p), t.I = t.mass * (.5 * i + X.DotVV(this.m_p, this.m_p));
        }
    }, {
        key: "SetupDistanceProxy",
        value: function(t, e) {
            t.m_vertices = t.m_buffer, t.m_vertices[0].Copy(this.m_p), t.m_count = 1, t.m_radius = this.m_radius;
        }
    }, {
        key: "ComputeSubmergedArea",
        value: function(t, e, i, s) {
            var n, o, i = F.MulXV(i, this.m_p, new X()), e = -(X.DotVV(t, i) - e);
            return e < -this.m_radius + I ? 0 : e > this.m_radius ? (s.Copy(i), y * this.m_radius * this.m_radius) : (n = e * e, 
            e = (o = this.m_radius * this.m_radius) * (at(e / this.m_radius) + y / 2) + e * it(o - n), 
            o = -2 / 3 * st(o - n, 1.5) / e, s.x = i.x + t.x * o, s.y = i.y + t.y * o, e);
        }
    }, {
        key: "Dump",
        value: function(t) {
            t("    const shape: b2CircleShape = new b2CircleShape();\n"), t("    shape.m_radius = %.15f;\n", this.m_radius), 
            t("    shape.m_p.Set(%.15f, %.15f);\n", this.m_p.x, this.m_p.y);
        }
    } ]);
    s = Hi;
    function Hi() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, t = (_classCallCheck(this, Hi), 
        _possibleConstructorReturn(this, (Hi.__proto__ || Object.getPrototypeOf(Hi)).call(this, N.b2ShapeType.e_circleShape, t)));
        return t.m_p = new X(), t;
    }
    s.TestPoint_s_center = new X(), s.TestPoint_s_d = new X(), s.ComputeDistance_s_center = new X(), 
    s.RayCast_s_position = new X(), s.RayCast_s_s = new X(), s.RayCast_s_r = new X(), 
    s.ComputeAABB_s_p = new X();
    _inherits(g, Zi), _createClass(g, [ {
        key: "Clone",
        value: function() {
            return new g().Copy(this);
        }
    }, {
        key: "Copy",
        value: function(t) {
            _get(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "Copy", this).call(this, t), 
            this.m_centroid.Copy(t.m_centroid), this.m_count = t.m_count, this.m_vertices = X.MakeArray(this.m_count), 
            this.m_normals = X.MakeArray(this.m_count);
            for (var e = 0; e < this.m_count; ++e) this.m_vertices[e].Copy(t.m_vertices[e]), 
            this.m_normals[e].Copy(t.m_normals[e]);
            return this;
        }
    }, {
        key: "GetChildCount",
        value: function() {
            return 1;
        }
    }, {
        key: "Set",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.length, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            if (e < 3) return this.SetAsBox(1, 1);
            for (var s = e, n = [], o = 0; o < s; ++o) {
                for (var r = t[i + o], a = !0, l = 0; l < n.length; ++l) if (X.DistanceSquaredVV(r, n[l]) < 16e-6) {
                    a = !1;
                    break;
                }
                a && n.push(r);
            }
            if ((s = n.length) < 3) return this.SetAsBox(1, 1);
            for (var _ = 0, m = n[0].x, h = 1; h < s; ++h) {
                var u = n[h].x;
                (m < u || u === m && n[h].y < n[_].y) && (_ = h, m = u);
            }
            for (var c = [], f = 0, d = _; ;) {
                c[f] = d;
                for (var y, p, v, x = 0, C = 1; C < s; ++C) x === d ? x = C : (y = X.SubVV(n[x], n[c[f]], g.Set_s_r), 
                p = X.SubVV(n[C], n[c[f]], g.Set_s_v), (v = X.CrossVV(y, p)) < 0 && (x = C), 0 === v && p.LengthSquared() > y.LengthSquared() && (x = C));
                if (++f, (d = x) === _) break;
            }
            this.m_count = f, this.m_vertices = X.MakeArray(this.m_count), this.m_normals = X.MakeArray(this.m_count);
            for (var B = 0; B < f; ++B) this.m_vertices[B].Copy(n[c[B]]);
            for (var S = 0; S < f; ++S) {
                var b = this.m_vertices[S], A = this.m_vertices[(S + 1) % f], A = X.SubVV(A, b, X.s_t0);
                X.CrossVOne(A, this.m_normals[S]).SelfNormalize();
            }
            return g.ComputeCentroid(this.m_vertices, f, this.m_centroid), this;
        }
    }, {
        key: "SetAsArray",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.length;
            return this.Set(t, e);
        }
    }, {
        key: "SetAsBox",
        value: function(t, e, i) {
            var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
            if (this.m_count = 4, this.m_vertices = X.MakeArray(this.m_count), this.m_normals = X.MakeArray(this.m_count), 
            this.m_vertices[0].Set(-t, -e), this.m_vertices[1].Set(t, -e), this.m_vertices[2].Set(t, e), 
            this.m_vertices[3].Set(-t, e), this.m_normals[0].Set(0, -1), this.m_normals[1].Set(1, 0), 
            this.m_normals[2].Set(0, 1), this.m_normals[3].Set(-1, 0), this.m_centroid.SetZero(), 
            i) {
                this.m_centroid.Copy(i);
                var n = new F();
                n.SetPosition(i), n.SetRotationAngle(s);
                for (var o = 0; o < this.m_count; ++o) F.MulXV(n, this.m_vertices[o], this.m_vertices[o]), 
                P.MulRV(n.q, this.m_normals[o], this.m_normals[o]);
            }
            return this;
        }
    }, {
        key: "TestPoint",
        value: function(t, e) {
            for (var i = F.MulTXV(t, e, g.TestPoint_s_pLocal), s = 0; s < this.m_count; ++s) if (0 < X.DotVV(this.m_normals[s], X.SubVV(i, this.m_vertices[s], X.s_t0))) return !1;
            return !0;
        }
    }, {
        key: "ComputeDistance",
        value: function(t, e, i, s) {
            for (var n = F.MulTXV(t, e, g.ComputeDistance_s_pLocal), o = -T, r = g.ComputeDistance_s_normalForMaxDistance.Copy(n), a = 0; a < this.m_count; ++a) {
                var l = X.DotVV(this.m_normals[a], X.SubVV(n, this.m_vertices[a], X.s_t0));
                o < l && (o = l, r.Copy(this.m_normals[a]));
            }
            if (0 < o) {
                for (var _ = g.ComputeDistance_s_minDistance.Copy(r), m = o * o, h = 0; h < this.m_count; ++h) {
                    var u = X.SubVV(n, this.m_vertices[h], g.ComputeDistance_s_distance), c = u.LengthSquared();
                    c < m && (_.Copy(u), m = c);
                }
                return P.MulRV(t.q, _, i), i.Normalize(), Math.sqrt(m);
            }
            return P.MulRV(t.q, r, i), o;
        }
    }, {
        key: "RayCast",
        value: function(t, e, i, s) {
            for (var n = F.MulTXV(i, e.p1, g.RayCast_s_p1), o = F.MulTXV(i, e.p2, g.RayCast_s_p2), r = X.SubVV(o, n, g.RayCast_s_d), a = 0, l = e.maxFraction, _ = -1, m = 0; m < this.m_count; ++m) {
                var h = X.DotVV(this.m_normals[m], X.SubVV(this.m_vertices[m], n, X.s_t0)), u = X.DotVV(this.m_normals[m], r);
                if (0 === u) {
                    if (h < 0) return !1;
                } else u < 0 && h < a * u ? (a = h / u, _ = m) : 0 < u && h < l * u && (l = h / u);
                if (l < a) return !1;
            }
            return 0 <= _ && (t.fraction = a, P.MulRV(i.q, this.m_normals[_], t.normal), !0);
        }
    }, {
        key: "ComputeAABB",
        value: function(t, e, i) {
            for (var s = F.MulXV(e, this.m_vertices[0], t.lowerBound), n = t.upperBound.Copy(s), o = 0; o < this.m_count; ++o) {
                var r = F.MulXV(e, this.m_vertices[o], g.ComputeAABB_s_v);
                X.MinV(r, s, s), X.MaxV(r, n, n);
            }
            t = this.m_radius;
            s.SelfSubXY(t, t), n.SelfAddXY(t, t);
        }
    }, {
        key: "ComputeMass",
        value: function(t, e) {
            for (var i = g.ComputeMass_s_center.SetZero(), s = 0, n = 0, o = g.ComputeMass_s_s.SetZero(), r = 0; r < this.m_count; ++r) o.SelfAdd(this.m_vertices[r]);
            o.SelfMul(1 / this.m_count);
            for (var a = 0; a < this.m_count; ++a) {
                var l = X.SubVV(this.m_vertices[a], o, g.ComputeMass_s_e1), _ = X.SubVV(this.m_vertices[(a + 1) % this.m_count], o, g.ComputeMass_s_e2), m = X.CrossVV(l, _), h = .5 * m, h = (s += h, 
                i.SelfAdd(X.MulSV(1 / 3 * h, X.AddVV(l, _, X.s_t0), X.s_t1)), l.x), l = l.y, u = _.x, _ = _.y;
                n += 1 / 3 * .25 * m * (h * h + u * h + u * u + (l * l + _ * l + _ * _));
            }
            t.mass = e * s, i.SelfMul(1 / s), X.AddVV(i, o, t.center), t.I = e * n, t.I += t.mass * (X.DotVV(t.center, t.center) - X.DotVV(i, i));
        }
    }, {
        key: "Validate",
        value: function() {
            for (var t = 0; t < this.m_count; ++t) for (var e = t, i = (t + 1) % this.m_count, s = this.m_vertices[e], n = X.SubVV(this.m_vertices[i], s, g.Validate_s_e), o = 0; o < this.m_count; ++o) if (o !== e && o !== i) {
                var r = X.SubVV(this.m_vertices[o], s, g.Validate_s_v);
                if (X.CrossVV(n, r) < 0) return !1;
            }
            return !0;
        }
    }, {
        key: "SetupDistanceProxy",
        value: function(t, e) {
            t.m_vertices = this.m_vertices, t.m_count = this.m_count, t.m_radius = this.m_radius;
        }
    }, {
        key: "ComputeSubmergedArea",
        value: function(t, e, i, s) {
            for (var n, o = P.MulTRV(i.q, t, g.ComputeSubmergedArea_s_normalL), r = e - X.DotVV(t, i.p), a = [], l = 0, _ = -1, m = -1, h = !1, u = 0; u < this.m_count; ++u) {
                a[u] = X.DotVV(o, this.m_vertices[u]) - r;
                var c = a[u] < -I;
                0 < u && (c ? h || (_ = u - 1, l++) : h && (m = u - 1, l++)), h = c;
            }
            switch (l) {
              case 0:
                return h ? (this.ComputeMass(n = g.ComputeSubmergedArea_s_md, 1), F.MulXV(i, n.center, s), 
                n.mass) : 0;

              case 1:
                -1 === _ ? _ = this.m_count - 1 : m = this.m_count - 1;
            }
            for (var e = (_ + 1) % this.m_count, f = (m + 1) % this.m_count, t = (0 - a[_]) / (a[e] - a[_]), d = (0 - a[m]) / (a[f] - a[m]), y = g.ComputeSubmergedArea_s_intoVec.Set(this.m_vertices[_].x * (1 - t) + this.m_vertices[e].x * t, this.m_vertices[_].y * (1 - t) + this.m_vertices[e].y * t), p = g.ComputeSubmergedArea_s_outoVec.Set(this.m_vertices[m].x * (1 - d) + this.m_vertices[f].x * d, this.m_vertices[m].y * (1 - d) + this.m_vertices[f].y * d), v = 0, x = g.ComputeSubmergedArea_s_center.SetZero(), C = this.m_vertices[e], B = void 0, S = e; S !== f; ) {
                var B = (S = (S + 1) % this.m_count) === f ? p : this.m_vertices[S], b = .5 * ((C.x - y.x) * (B.y - y.y) - (C.y - y.y) * (B.x - y.x));
                v += b, x.x += b * (y.x + C.x + B.x) / 3, x.y += b * (y.y + C.y + B.y) / 3, C = B;
            }
            return x.SelfMul(1 / v), F.MulXV(i, x, s), v;
        }
    }, {
        key: "Dump",
        value: function(t) {
            t("    const shape: b2PolygonShape = new b2PolygonShape();\n"), t("    const vs: b2Vec2[] = [];\n");
            for (var e = 0; e < this.m_count; ++e) t("    vs[%d] = new b2Vec2(%.15f, %.15f);\n", e, this.m_vertices[e].x, this.m_vertices[e].y);
            t("    shape.Set(vs, %d);\n", this.m_count);
        }
    } ], [ {
        key: "ComputeCentroid",
        value: function(t, e, i) {
            for (var s = i, n = (s.SetZero(), 0), o = g.ComputeCentroid_s_pRef.SetZero(), r = 0; r < e; ++r) {
                var a = o, l = t[r], _ = t[(r + 1) % e], m = X.SubVV(l, a, g.ComputeCentroid_s_e1), h = X.SubVV(_, a, g.ComputeCentroid_s_e2), m = .5 * X.CrossVV(m, h);
                n += m, s.x += 1 / 3 * m * (a.x + l.x + _.x), s.y += 1 / 3 * m * (a.y + l.y + _.y);
            }
            return s.SelfMul(1 / n), s;
        }
    } ]);
    var n = g;
    function g() {
        _classCallCheck(this, g);
        var t = _possibleConstructorReturn(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, N.b2ShapeType.e_polygonShape, B));
        return t.m_centroid = new X(0, 0), t.m_vertices = [], t.m_normals = [], t.m_count = 0, 
        t;
    }
    n.Set_s_r = new X(), n.Set_s_v = new X(), n.TestPoint_s_pLocal = new X(), n.ComputeDistance_s_pLocal = new X(), 
    n.ComputeDistance_s_normalForMaxDistance = new X(), n.ComputeDistance_s_minDistance = new X(), 
    n.ComputeDistance_s_distance = new X(), n.RayCast_s_p1 = new X(), n.RayCast_s_p2 = new X(), 
    n.RayCast_s_d = new X(), n.ComputeAABB_s_v = new X(), n.ComputeMass_s_center = new X(), 
    n.ComputeMass_s_s = new X(), n.ComputeMass_s_e1 = new X(), n.ComputeMass_s_e2 = new X(), 
    n.Validate_s_e = new X(), n.Validate_s_v = new X(), n.ComputeSubmergedArea_s_normalL = new X(), 
    n.ComputeSubmergedArea_s_md = new Ui(), n.ComputeSubmergedArea_s_intoVec = new X(), 
    n.ComputeSubmergedArea_s_outoVec = new X(), n.ComputeSubmergedArea_s_center = new X(), 
    n.ComputeCentroid_s_pRef = new X(), n.ComputeCentroid_s_e1 = new X(), n.ComputeCentroid_s_e2 = new X();
    _inherits(m, Zi), _createClass(m, [ {
        key: "Set",
        value: function(t, e) {
            return this.m_vertex1.Copy(t), this.m_vertex2.Copy(e), this.m_hasVertex0 = !1, this.m_hasVertex3 = !1, 
            this;
        }
    }, {
        key: "Clone",
        value: function() {
            return new m().Copy(this);
        }
    }, {
        key: "Copy",
        value: function(t) {
            return _get(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "Copy", this).call(this, t), 
            this.m_vertex1.Copy(t.m_vertex1), this.m_vertex2.Copy(t.m_vertex2), this.m_vertex0.Copy(t.m_vertex0), 
            this.m_vertex3.Copy(t.m_vertex3), this.m_hasVertex0 = t.m_hasVertex0, this.m_hasVertex3 = t.m_hasVertex3, 
            this;
        }
    }, {
        key: "GetChildCount",
        value: function() {
            return 1;
        }
    }, {
        key: "TestPoint",
        value: function(t, e) {
            return !1;
        }
    }, {
        key: "ComputeDistance",
        value: function(t, e, i, s) {
            var n, o = F.MulXV(t, this.m_vertex1, m.ComputeDistance_s_v1), t = F.MulXV(t, this.m_vertex2, m.ComputeDistance_s_v2), r = X.SubVV(e, o, m.ComputeDistance_s_d), o = X.SubVV(t, o, m.ComputeDistance_s_s), a = X.DotVV(r, o);
            return 0 < a && ((n = X.DotVV(o, o)) < a ? X.SubVV(e, t, r) : r.SelfMulSub(a / n, o)), 
            i.Copy(r), i.Normalize();
        }
    }, {
        key: "RayCast",
        value: function(t, e, i, s) {
            var n = F.MulTXV(i, e.p1, m.RayCast_s_p1), o = F.MulTXV(i, e.p2, m.RayCast_s_p2), o = X.SubVV(o, n, m.RayCast_s_d), r = this.m_vertex1, a = this.m_vertex2, l = X.SubVV(a, r, m.RayCast_s_e), l = t.normal.Set(l.y, -l.x).SelfNormalize(), _ = X.DotVV(l, X.SubVV(r, n, X.s_t0)), l = X.DotVV(l, o);
            return 0 !== l && !((l = _ / l) < 0 || e.maxFraction < l || (e = X.AddVMulSV(n, l, o, m.RayCast_s_q), 
            n = X.SubVV(a, r, m.RayCast_s_r), 0 === (o = X.DotVV(n, n))) || (a = X.DotVV(X.SubVV(e, r, X.s_t0), n) / o) < 0 || 1 < a || (t.fraction = l, 
            P.MulRV(i.q, t.normal, t.normal), 0 < _ && t.normal.SelfNeg(), 0));
        }
    }, {
        key: "ComputeAABB",
        value: function(t, e, i) {
            var s = F.MulXV(e, this.m_vertex1, m.ComputeAABB_s_v1), e = F.MulXV(e, this.m_vertex2, m.ComputeAABB_s_v2), s = (X.MinV(s, e, t.lowerBound), 
            X.MaxV(s, e, t.upperBound), this.m_radius);
            t.lowerBound.SelfSubXY(s, s), t.upperBound.SelfAddXY(s, s);
        }
    }, {
        key: "ComputeMass",
        value: function(t, e) {
            t.mass = 0, X.MidVV(this.m_vertex1, this.m_vertex2, t.center), t.I = 0;
        }
    }, {
        key: "SetupDistanceProxy",
        value: function(t, e) {
            t.m_vertices = t.m_buffer, t.m_vertices[0].Copy(this.m_vertex1), t.m_vertices[1].Copy(this.m_vertex2), 
            t.m_count = 2, t.m_radius = this.m_radius;
        }
    }, {
        key: "ComputeSubmergedArea",
        value: function(t, e, i, s) {
            return s.SetZero(), 0;
        }
    }, {
        key: "Dump",
        value: function(t) {
            t("    const shape: b2EdgeShape = new b2EdgeShape();\n"), t("    shape.m_radius = %.15f;\n", this.m_radius), 
            t("    shape.m_vertex0.Set(%.15f, %.15f);\n", this.m_vertex0.x, this.m_vertex0.y), 
            t("    shape.m_vertex1.Set(%.15f, %.15f);\n", this.m_vertex1.x, this.m_vertex1.y), 
            t("    shape.m_vertex2.Set(%.15f, %.15f);\n", this.m_vertex2.x, this.m_vertex2.y), 
            t("    shape.m_vertex3.Set(%.15f, %.15f);\n", this.m_vertex3.x, this.m_vertex3.y), 
            t("    shape.m_hasVertex0 = %s;\n", this.m_hasVertex0), t("    shape.m_hasVertex3 = %s;\n", this.m_hasVertex3);
        }
    } ]);
    var Qi = m;
    function m() {
        _classCallCheck(this, m);
        var t = _possibleConstructorReturn(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, N.b2ShapeType.e_edgeShape, B));
        return t.m_vertex1 = new X(), t.m_vertex2 = new X(), t.m_vertex0 = new X(), t.m_vertex3 = new X(), 
        t.m_hasVertex0 = !1, t.m_hasVertex3 = !1, t;
    }
    Qi.ComputeDistance_s_v1 = new X(), Qi.ComputeDistance_s_v2 = new X(), Qi.ComputeDistance_s_d = new X(), 
    Qi.ComputeDistance_s_s = new X(), Qi.RayCast_s_p1 = new X(), Qi.RayCast_s_p2 = new X(), 
    Qi.RayCast_s_d = new X(), Qi.RayCast_s_e = new X(), Qi.RayCast_s_q = new X(), Qi.RayCast_s_r = new X(), 
    Qi.ComputeAABB_s_v1 = new X(), Qi.ComputeAABB_s_v2 = new X();
    _inherits(Ki, Zi), _createClass(Ki, [ {
        key: "CreateLoop",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.length, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            if (!(e < 3)) {
                this.m_count = e + 1, this.m_vertices = X.MakeArray(this.m_count);
                for (var s = 0; s < e; ++s) this.m_vertices[s].Copy(t[i + s]);
                this.m_vertices[e].Copy(this.m_vertices[0]), this.m_prevVertex.Copy(this.m_vertices[this.m_count - 2]), 
                this.m_nextVertex.Copy(this.m_vertices[1]), this.m_hasPrevVertex = !0, this.m_hasNextVertex = !0;
            }
            return this;
        }
    }, {
        key: "CreateChain",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.length, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            this.m_count = e, this.m_vertices = X.MakeArray(e);
            for (var s = 0; s < e; ++s) this.m_vertices[s].Copy(t[i + s]);
            return this.m_hasPrevVertex = !1, this.m_hasNextVertex = !1, this.m_prevVertex.SetZero(), 
            this.m_nextVertex.SetZero(), this;
        }
    }, {
        key: "SetPrevVertex",
        value: function(t) {
            return this.m_prevVertex.Copy(t), this.m_hasPrevVertex = !0, this;
        }
    }, {
        key: "SetNextVertex",
        value: function(t) {
            return this.m_nextVertex.Copy(t), this.m_hasNextVertex = !0, this;
        }
    }, {
        key: "Clone",
        value: function() {
            return new Ki().Copy(this);
        }
    }, {
        key: "Copy",
        value: function(t) {
            return _get(Ki.prototype.__proto__ || Object.getPrototypeOf(Ki.prototype), "Copy", this).call(this, t), 
            this.CreateChain(t.m_vertices, t.m_count), this.m_prevVertex.Copy(t.m_prevVertex), 
            this.m_nextVertex.Copy(t.m_nextVertex), this.m_hasPrevVertex = t.m_hasPrevVertex, 
            this.m_hasNextVertex = t.m_hasNextVertex, this;
        }
    }, {
        key: "GetChildCount",
        value: function() {
            return this.m_count - 1;
        }
    }, {
        key: "GetChildEdge",
        value: function(t, e) {
            t.m_type = N.b2ShapeType.e_edgeShape, t.m_radius = this.m_radius, t.m_vertex1.Copy(this.m_vertices[e]), 
            t.m_vertex2.Copy(this.m_vertices[e + 1]), 0 < e ? (t.m_vertex0.Copy(this.m_vertices[e - 1]), 
            t.m_hasVertex0 = !0) : (t.m_vertex0.Copy(this.m_prevVertex), t.m_hasVertex0 = this.m_hasPrevVertex), 
            e < this.m_count - 2 ? (t.m_vertex3.Copy(this.m_vertices[e + 2]), t.m_hasVertex3 = !0) : (t.m_vertex3.Copy(this.m_nextVertex), 
            t.m_hasVertex3 = this.m_hasNextVertex);
        }
    }, {
        key: "TestPoint",
        value: function(t, e) {
            return !1;
        }
    }, {
        key: "ComputeDistance",
        value: function(t, e, i, s) {
            var n = Ki.ComputeDistance_s_edgeShape;
            return this.GetChildEdge(n, s), n.ComputeDistance(t, e, i, 0);
        }
    }, {
        key: "RayCast",
        value: function(t, e, i, s) {
            var n = Ki.RayCast_s_edgeShape;
            return n.m_vertex1.Copy(this.m_vertices[s]), n.m_vertex2.Copy(this.m_vertices[(s + 1) % this.m_count]), 
            n.RayCast(t, e, i, 0);
        }
    }, {
        key: "ComputeAABB",
        value: function(t, e, i) {
            var s = this.m_vertices[i], i = this.m_vertices[(i + 1) % this.m_count], s = F.MulXV(e, s, Ki.ComputeAABB_s_v1), e = F.MulXV(e, i, Ki.ComputeAABB_s_v2);
            X.MinV(s, e, t.lowerBound), X.MaxV(s, e, t.upperBound);
        }
    }, {
        key: "ComputeMass",
        value: function(t, e) {
            t.mass = 0, t.center.SetZero(), t.I = 0;
        }
    }, {
        key: "SetupDistanceProxy",
        value: function(t, e) {
            t.m_vertices = t.m_buffer, t.m_vertices[0].Copy(this.m_vertices[e]), e + 1 < this.m_count ? t.m_vertices[1].Copy(this.m_vertices[e + 1]) : t.m_vertices[1].Copy(this.m_vertices[0]), 
            t.m_count = 2, t.m_radius = this.m_radius;
        }
    }, {
        key: "ComputeSubmergedArea",
        value: function(t, e, i, s) {
            return s.SetZero(), 0;
        }
    }, {
        key: "Dump",
        value: function(t) {
            t("    const shape: b2ChainShape = new b2ChainShape();\n"), t("    const vs: b2Vec2[] = [];\n");
            for (var e = 0; e < this.m_count; ++e) t("    vs[%d] = new bVec2(%.15f, %.15f);\n", e, this.m_vertices[e].x, this.m_vertices[e].y);
            t("    shape.CreateChain(vs, %d);\n", this.m_count), t("    shape.m_prevVertex.Set(%.15f, %.15f);\n", this.m_prevVertex.x, this.m_prevVertex.y), 
            t("    shape.m_nextVertex.Set(%.15f, %.15f);\n", this.m_nextVertex.x, this.m_nextVertex.y), 
            t("    shape.m_hasPrevVertex = %s;\n", this.m_hasPrevVertex ? "true" : "false"), 
            t("    shape.m_hasNextVertex = %s;\n", this.m_hasNextVertex ? "true" : "false");
        }
    } ]);
    var Yi = Ki;
    function Ki() {
        _classCallCheck(this, Ki);
        var t = _possibleConstructorReturn(this, (Ki.__proto__ || Object.getPrototypeOf(Ki)).call(this, N.b2ShapeType.e_chainShape, B));
        return t.m_vertices = [], t.m_count = 0, t.m_prevVertex = new X(), t.m_nextVertex = new X(), 
        t.m_hasPrevVertex = !1, t.m_hasNextVertex = !1, t;
    }
    Yi.ComputeDistance_s_edgeShape = new Qi(), Yi.RayCast_s_edgeShape = new Qi(), Yi.ComputeAABB_s_v1 = new X(), 
    Yi.ComputeAABB_s_v2 = new X();
    _createClass(ts, [ {
        key: "Clone",
        value: function() {
            return new ts().Copy(this);
        }
    }, {
        key: "Copy",
        value: function(t) {
            return this.categoryBits = t.categoryBits, this.maskBits = t.maskBits, this.groupIndex = t.groupIndex || 0, 
            this;
        }
    } ]);
    var $i = ts;
    function ts() {
        _classCallCheck(this, ts), this.categoryBits = 1, this.maskBits = 65535, this.groupIndex = 0;
    }
    $i.DEFAULT = new $i();
    function es() {
        _classCallCheck(this, es), this.userData = null, this.friction = .2, this.restitution = 0, 
        this.density = 0, this.isSensor = !1, this.filter = new $i();
    }
    function is(t) {
        _classCallCheck(this, is), this.aabb = new _(), this.childIndex = 0, this.fixture = t;
    }
    _createClass(ns, [ {
        key: "GetType",
        value: function() {
            return this.m_shape.GetType();
        }
    }, {
        key: "GetShape",
        value: function() {
            return this.m_shape;
        }
    }, {
        key: "SetSensor",
        value: function(t) {
            t !== this.m_isSensor && (this.m_body.SetAwake(!0), this.m_isSensor = t);
        }
    }, {
        key: "IsSensor",
        value: function() {
            return this.m_isSensor;
        }
    }, {
        key: "SetFilterData",
        value: function(t) {
            this.m_filter.Copy(t), this.Refilter();
        }
    }, {
        key: "GetFilterData",
        value: function() {
            return this.m_filter;
        }
    }, {
        key: "Refilter",
        value: function() {
            for (var t = this.m_body.GetContactList(); t; ) {
                var e = t.contact, i = e.GetFixtureA(), s = e.GetFixtureB();
                i !== this && s !== this || e.FlagForFiltering(), t = t.next;
            }
            var n = this.m_body.GetWorld();
            if (null !== n) for (var o = n.m_contactManager.m_broadPhase, r = 0; r < this.m_proxyCount; ++r) o.TouchProxy(this.m_proxies[r].treeNode);
        }
    }, {
        key: "GetBody",
        value: function() {
            return this.m_body;
        }
    }, {
        key: "GetNext",
        value: function() {
            return this.m_next;
        }
    }, {
        key: "GetUserData",
        value: function() {
            return this.m_userData;
        }
    }, {
        key: "SetUserData",
        value: function(t) {
            this.m_userData = t;
        }
    }, {
        key: "TestPoint",
        value: function(t) {
            return this.m_shape.TestPoint(this.m_body.GetTransform(), t);
        }
    }, {
        key: "ComputeDistance",
        value: function(t, e, i) {
            return this.m_shape.ComputeDistance(this.m_body.GetTransform(), t, e, i);
        }
    }, {
        key: "RayCast",
        value: function(t, e, i) {
            return this.m_shape.RayCast(t, e, this.m_body.GetTransform(), i);
        }
    }, {
        key: "GetMassData",
        value: function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : new Ui();
            return this.m_shape.ComputeMass(t, this.m_density), t;
        }
    }, {
        key: "SetDensity",
        value: function(t) {
            this.m_density = t;
        }
    }, {
        key: "GetDensity",
        value: function() {
            return this.m_density;
        }
    }, {
        key: "GetFriction",
        value: function() {
            return this.m_friction;
        }
    }, {
        key: "SetFriction",
        value: function(t) {
            this.m_friction = t;
        }
    }, {
        key: "GetRestitution",
        value: function() {
            return this.m_restitution;
        }
    }, {
        key: "SetRestitution",
        value: function(t) {
            this.m_restitution = t;
        }
    }, {
        key: "GetAABB",
        value: function(t) {
            return this.m_proxies[t].aabb;
        }
    }, {
        key: "Dump",
        value: function(t, e) {
            t("    const fd: b2FixtureDef = new b2FixtureDef();\n"), t("    fd.friction = %.15f;\n", this.m_friction), 
            t("    fd.restitution = %.15f;\n", this.m_restitution), t("    fd.density = %.15f;\n", this.m_density), 
            t("    fd.isSensor = %s;\n", this.m_isSensor ? "true" : "false"), t("    fd.filter.categoryBits = %d;\n", this.m_filter.categoryBits), 
            t("    fd.filter.maskBits = %d;\n", this.m_filter.maskBits), t("    fd.filter.groupIndex = %d;\n", this.m_filter.groupIndex), 
            this.m_shape.Dump(t), t("\n"), t("    fd.shape = shape;\n"), t("\n"), t("    bodies[%d].CreateFixture(fd);\n", e);
        }
    }, {
        key: "Create",
        value: function(t) {
            var e = this;
            this.m_userData = t.userData, this.m_friction = f(t.friction, .2), this.m_restitution = f(t.restitution, 0), 
            this.m_next = null, this.m_filter.Copy(f(t.filter, $i.DEFAULT)), this.m_isSensor = f(t.isSensor, !1), 
            this.m_proxies = W(this.m_shape.GetChildCount(), function(t) {
                return new is(e);
            }), this.m_proxyCount = 0, this.m_density = f(t.density, 0);
        }
    }, {
        key: "Destroy",
        value: function() {}
    }, {
        key: "CreateProxies",
        value: function(t) {
            var e = this.m_body.m_world.m_contactManager.m_broadPhase;
            this.m_proxyCount = this.m_shape.GetChildCount();
            for (var i = 0; i < this.m_proxyCount; ++i) {
                var s = this.m_proxies[i] = new is(this);
                this.m_shape.ComputeAABB(s.aabb, t, i), s.treeNode = e.CreateProxy(s.aabb, s), s.childIndex = i;
            }
        }
    }, {
        key: "DestroyProxies",
        value: function() {
            for (var t = this.m_body.m_world.m_contactManager.m_broadPhase, e = 0; e < this.m_proxyCount; ++e) {
                var i = this.m_proxies[e];
                delete i.treeNode.userData, t.DestroyProxy(i.treeNode), delete i.treeNode;
            }
            this.m_proxyCount = 0;
        }
    }, {
        key: "TouchProxies",
        value: function() {
            for (var t = this.m_body.m_world.m_contactManager.m_broadPhase, e = this.m_proxyCount, i = 0; i < e; ++i) t.TouchProxy(this.m_proxies[i].treeNode);
        }
    }, {
        key: "Synchronize",
        value: function(t, e) {
            if (0 !== this.m_proxyCount) for (var i = this.m_body.m_world.m_contactManager.m_broadPhase, s = 0; s < this.m_proxyCount; ++s) {
                var n = this.m_proxies[s], o = ns.Synchronize_s_aabb1, r = ns.Synchronize_s_aabb2, o = (this.m_shape.ComputeAABB(o, t, s), 
                this.m_shape.ComputeAABB(r, e, s), n.aabb.Combine2(o, r), X.SubVV(e.p, t.p, ns.Synchronize_s_displacement));
                i.MoveProxy(n.treeNode, n.aabb, o);
            }
        }
    } ]);
    var ss = ns;
    function ns(t, e) {
        _classCallCheck(this, ns), this.m_density = 0, this.m_next = null, this.m_friction = 0, 
        this.m_restitution = 0, this.m_proxies = [], this.m_proxyCount = 0, this.m_filter = new $i(), 
        this.m_isSensor = !1, this.m_userData = null, this.m_body = e, this.m_shape = t.shape.Clone();
    }
    ss.Synchronize_s_aabb1 = new _(), ss.Synchronize_s_aabb2 = new _(), ss.Synchronize_s_displacement = new X(), 
    (r = N.b2BodyType || (N.b2BodyType = {}))[r.b2_unknown = -1] = "b2_unknown", r[r.b2_staticBody = 0] = "b2_staticBody", 
    r[r.b2_kinematicBody = 1] = "b2_kinematicBody", r[r.b2_dynamicBody = 2] = "b2_dynamicBody";
    function os() {
        _classCallCheck(this, os), this.type = N.b2BodyType.b2_staticBody, this.position = new X(0, 0), 
        this.angle = 0, this.linearVelocity = new X(0, 0), this.angularVelocity = 0, this.linearDamping = 0, 
        this.angularDamping = 0, this.allowSleep = !0, this.awake = !0, this.fixedRotation = !1, 
        this.bullet = !1, this.active = !0, this.userData = null, this.gravityScale = 1;
    }
    _createClass(as, [ {
        key: "CreateFixture",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
            return t instanceof Zi ? this.CreateFixtureShapeDensity(t, e) : this.CreateFixtureDef(t);
        }
    }, {
        key: "CreateFixtureDef",
        value: function(t) {
            if (this.m_world.IsLocked()) throw new Error();
            var e = new ss(t, this);
            return e.Create(t), this.m_activeFlag && e.CreateProxies(this.m_xf), e.m_next = this.m_fixtureList, 
            this.m_fixtureList = e, ++this.m_fixtureCount, 0 < e.m_density && this.ResetMassData(), 
            this.m_world.m_newFixture = !0, e;
        }
    }, {
        key: "CreateFixtureShapeDensity",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, i = as.CreateFixtureShapeDensity_s_def;
            return i.shape = t, i.density = e, this.CreateFixtureDef(i);
        }
    }, {
        key: "DestroyFixture",
        value: function(t) {
            if (this.m_world.IsLocked()) throw new Error();
            for (var e = this.m_fixtureList, i = null; null !== e; ) {
                if (e === t) {
                    i ? i.m_next = t.m_next : this.m_fixtureList = t.m_next;
                    break;
                }
                e = (i = e).m_next;
            }
            for (var s = this.m_contactList; s; ) {
                var n = s.contact, s = s.next, o = n.GetFixtureA(), r = n.GetFixtureB();
                t !== o && t !== r || this.m_world.m_contactManager.Destroy(n);
            }
            this.m_activeFlag && t.DestroyProxies(), t.m_next = null, t.Destroy(), --this.m_fixtureCount, 
            this.ResetMassData();
        }
    }, {
        key: "SetTransformVec",
        value: function(t, e) {
            this.SetTransformXY(t.x, t.y, e);
        }
    }, {
        key: "SetTransformXY",
        value: function(t, e, i) {
            if (this.m_world.IsLocked()) throw new Error();
            this.m_xf.q.SetAngle(i), this.m_xf.p.Set(t, e), this.m_xf0.Copy(this.m_xf), F.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c), 
            this.m_sweep.a = i, this.m_sweep.c0.Copy(this.m_sweep.c), this.m_sweep.a0 = i;
            for (var s = this.m_fixtureList; s; s = s.m_next) s.Synchronize(this.m_xf, this.m_xf);
            this.m_world.m_contactManager.FindNewContacts();
        }
    }, {
        key: "SetTransform",
        value: function(t) {
            this.SetTransformVec(t.p, t.GetAngle());
        }
    }, {
        key: "GetTransform",
        value: function() {
            return this.m_xf;
        }
    }, {
        key: "GetPosition",
        value: function() {
            return this.m_xf.p;
        }
    }, {
        key: "SetPosition",
        value: function(t) {
            this.SetTransformVec(t, this.GetAngle());
        }
    }, {
        key: "SetPositionXY",
        value: function(t, e) {
            this.SetTransformXY(t, e, this.GetAngle());
        }
    }, {
        key: "GetAngle",
        value: function() {
            return this.m_sweep.a;
        }
    }, {
        key: "SetAngle",
        value: function(t) {
            this.SetTransformVec(this.GetPosition(), t);
        }
    }, {
        key: "GetWorldCenter",
        value: function() {
            return this.m_sweep.c;
        }
    }, {
        key: "GetLocalCenter",
        value: function() {
            return this.m_sweep.localCenter;
        }
    }, {
        key: "SetLinearVelocity",
        value: function(t) {
            this.m_type !== N.b2BodyType.b2_staticBody && (0 < X.DotVV(t, t) && this.SetAwake(!0), 
            this.m_linearVelocity.Copy(t));
        }
    }, {
        key: "GetLinearVelocity",
        value: function() {
            return this.m_linearVelocity;
        }
    }, {
        key: "SetAngularVelocity",
        value: function(t) {
            this.m_type !== N.b2BodyType.b2_staticBody && (0 < t * t && this.SetAwake(!0), this.m_angularVelocity = t);
        }
    }, {
        key: "GetAngularVelocity",
        value: function() {
            return this.m_angularVelocity;
        }
    }, {
        key: "GetDefinition",
        value: function(t) {
            return t.type = this.GetType(), t.allowSleep = this.m_autoSleepFlag, t.angle = this.GetAngle(), 
            t.angularDamping = this.m_angularDamping, t.gravityScale = this.m_gravityScale, 
            t.angularVelocity = this.m_angularVelocity, t.fixedRotation = this.m_fixedRotationFlag, 
            t.bullet = this.m_bulletFlag, t.awake = this.m_awakeFlag, t.linearDamping = this.m_linearDamping, 
            t.linearVelocity.Copy(this.GetLinearVelocity()), t.position.Copy(this.GetPosition()), 
            t.userData = this.GetUserData(), t;
        }
    }, {
        key: "ApplyForce",
        value: function(t, e) {
            this.m_type === N.b2BodyType.b2_dynamicBody && (2 < arguments.length && void 0 !== arguments[2] && !arguments[2] || this.m_awakeFlag || this.SetAwake(!0), 
            this.m_awakeFlag) && (this.m_force.x += t.x, this.m_force.y += t.y, this.m_torque += (e.x - this.m_sweep.c.x) * t.y - (e.y - this.m_sweep.c.y) * t.x);
        }
    }, {
        key: "ApplyForceToCenter",
        value: function(t) {
            this.m_type === N.b2BodyType.b2_dynamicBody && (1 < arguments.length && void 0 !== arguments[1] && !arguments[1] || this.m_awakeFlag || this.SetAwake(!0), 
            this.m_awakeFlag) && (this.m_force.x += t.x, this.m_force.y += t.y);
        }
    }, {
        key: "ApplyTorque",
        value: function(t) {
            this.m_type === N.b2BodyType.b2_dynamicBody && (1 < arguments.length && void 0 !== arguments[1] && !arguments[1] || this.m_awakeFlag || this.SetAwake(!0), 
            this.m_awakeFlag) && (this.m_torque += t);
        }
    }, {
        key: "ApplyLinearImpulse",
        value: function(t, e) {
            this.m_type === N.b2BodyType.b2_dynamicBody && (2 < arguments.length && void 0 !== arguments[2] && !arguments[2] || this.m_awakeFlag || this.SetAwake(!0), 
            this.m_awakeFlag) && (this.m_linearVelocity.x += this.m_invMass * t.x, this.m_linearVelocity.y += this.m_invMass * t.y, 
            this.m_angularVelocity += this.m_invI * ((e.x - this.m_sweep.c.x) * t.y - (e.y - this.m_sweep.c.y) * t.x));
        }
    }, {
        key: "ApplyLinearImpulseToCenter",
        value: function(t) {
            this.m_type === N.b2BodyType.b2_dynamicBody && (1 < arguments.length && void 0 !== arguments[1] && !arguments[1] || this.m_awakeFlag || this.SetAwake(!0), 
            this.m_awakeFlag) && (this.m_linearVelocity.x += this.m_invMass * t.x, this.m_linearVelocity.y += this.m_invMass * t.y);
        }
    }, {
        key: "ApplyAngularImpulse",
        value: function(t) {
            this.m_type === N.b2BodyType.b2_dynamicBody && (1 < arguments.length && void 0 !== arguments[1] && !arguments[1] || this.m_awakeFlag || this.SetAwake(!0), 
            this.m_awakeFlag) && (this.m_angularVelocity += this.m_invI * t);
        }
    }, {
        key: "GetMass",
        value: function() {
            return this.m_mass;
        }
    }, {
        key: "GetInertia",
        value: function() {
            return this.m_I + this.m_mass * X.DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter);
        }
    }, {
        key: "GetMassData",
        value: function(t) {
            return t.mass = this.m_mass, t.I = this.m_I + this.m_mass * X.DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter), 
            t.center.Copy(this.m_sweep.localCenter), t;
        }
    }, {
        key: "SetMassData",
        value: function(t) {
            if (this.m_world.IsLocked()) throw new Error();
            var e;
            this.m_type === N.b2BodyType.b2_dynamicBody && (this.m_invMass = 0, this.m_I = 0, 
            this.m_invI = 0, this.m_mass = t.mass, this.m_mass <= 0 && (this.m_mass = 1), this.m_invMass = 1 / this.m_mass, 
            0 < t.I && !this.m_fixedRotationFlag && (this.m_I = t.I - this.m_mass * X.DotVV(t.center, t.center), 
            this.m_invI = 1 / this.m_I), e = as.SetMassData_s_oldCenter.Copy(this.m_sweep.c), 
            this.m_sweep.localCenter.Copy(t.center), F.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c), 
            this.m_sweep.c0.Copy(this.m_sweep.c), X.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, X.SubVV(this.m_sweep.c, e, X.s_t0), this.m_linearVelocity));
        }
    }, {
        key: "ResetMassData",
        value: function() {
            if (this.m_mass = 0, this.m_invMass = 0, this.m_I = 0, this.m_invI = 0, this.m_sweep.localCenter.SetZero(), 
            this.m_type === N.b2BodyType.b2_staticBody || this.m_type === N.b2BodyType.b2_kinematicBody) this.m_sweep.c0.Copy(this.m_xf.p), 
            this.m_sweep.c.Copy(this.m_xf.p), this.m_sweep.a0 = this.m_sweep.a; else {
                for (var t, e = as.ResetMassData_s_localCenter.SetZero(), i = this.m_fixtureList; i; i = i.m_next) 0 !== i.m_density && (t = i.GetMassData(as.ResetMassData_s_massData), 
                this.m_mass += t.mass, e.x += t.center.x * t.mass, e.y += t.center.y * t.mass, this.m_I += t.I);
                0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, e.x *= this.m_invMass, e.y *= this.m_invMass) : (this.m_mass = 1, 
                this.m_invMass = 1), 0 < this.m_I && !this.m_fixedRotationFlag ? (this.m_I -= this.m_mass * X.DotVV(e, e), 
                this.m_invI = 1 / this.m_I) : (this.m_I = 0, this.m_invI = 0);
                var s = as.ResetMassData_s_oldCenter.Copy(this.m_sweep.c);
                this.m_sweep.localCenter.Copy(e), F.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c), 
                this.m_sweep.c0.Copy(this.m_sweep.c), X.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, X.SubVV(this.m_sweep.c, s, X.s_t0), this.m_linearVelocity);
            }
        }
    }, {
        key: "GetWorldPoint",
        value: function(t, e) {
            return F.MulXV(this.m_xf, t, e);
        }
    }, {
        key: "GetWorldVector",
        value: function(t, e) {
            return P.MulRV(this.m_xf.q, t, e);
        }
    }, {
        key: "GetLocalPoint",
        value: function(t, e) {
            return F.MulTXV(this.m_xf, t, e);
        }
    }, {
        key: "GetLocalVector",
        value: function(t, e) {
            return P.MulTRV(this.m_xf.q, t, e);
        }
    }, {
        key: "GetLinearVelocityFromWorldPoint",
        value: function(t, e) {
            return X.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, X.SubVV(t, this.m_sweep.c, X.s_t0), e);
        }
    }, {
        key: "GetLinearVelocityFromLocalPoint",
        value: function(t, e) {
            return this.GetLinearVelocityFromWorldPoint(this.GetWorldPoint(t, e), e);
        }
    }, {
        key: "GetLinearDamping",
        value: function() {
            return this.m_linearDamping;
        }
    }, {
        key: "SetLinearDamping",
        value: function(t) {
            this.m_linearDamping = t;
        }
    }, {
        key: "GetAngularDamping",
        value: function() {
            return this.m_angularDamping;
        }
    }, {
        key: "SetAngularDamping",
        value: function(t) {
            this.m_angularDamping = t;
        }
    }, {
        key: "GetGravityScale",
        value: function() {
            return this.m_gravityScale;
        }
    }, {
        key: "SetGravityScale",
        value: function(t) {
            this.m_gravityScale = t;
        }
    }, {
        key: "SetType",
        value: function(t) {
            if (this.m_world.IsLocked()) throw new Error();
            if (this.m_type !== t) {
                this.m_type = t, this.ResetMassData(), this.m_type === N.b2BodyType.b2_staticBody && (this.m_linearVelocity.SetZero(), 
                this.m_angularVelocity = 0, this.m_sweep.a0 = this.m_sweep.a, this.m_sweep.c0.Copy(this.m_sweep.c), 
                this.SynchronizeFixtures()), this.SetAwake(!0), this.m_force.SetZero(), this.m_torque = 0;
                for (var e = this.m_contactList; e; ) {
                    var i = e, e = e.next;
                    this.m_world.m_contactManager.Destroy(i.contact);
                }
                this.m_contactList = null;
                for (var s = this.m_fixtureList; s; s = s.m_next) s.TouchProxies();
            }
        }
    }, {
        key: "GetType",
        value: function() {
            return this.m_type;
        }
    }, {
        key: "SetBullet",
        value: function(t) {
            this.m_bulletFlag = t;
        }
    }, {
        key: "IsBullet",
        value: function() {
            return this.m_bulletFlag;
        }
    }, {
        key: "SetSleepingAllowed",
        value: function(t) {
            (this.m_autoSleepFlag = t) || this.SetAwake(!0);
        }
    }, {
        key: "IsSleepingAllowed",
        value: function() {
            return this.m_autoSleepFlag;
        }
    }, {
        key: "SetAwake",
        value: function(t) {
            t ? (this.m_awakeFlag = !0, this.m_sleepTime = 0) : (this.m_awakeFlag = !1, this.m_sleepTime = 0, 
            this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), 
            this.m_torque = 0);
        }
    }, {
        key: "IsAwake",
        value: function() {
            return this.m_awakeFlag;
        }
    }, {
        key: "SetActive",
        value: function(t) {
            if (this.m_world.IsLocked()) throw new Error();
            if (t !== this.IsActive()) if (this.m_activeFlag = t) for (var e = this.m_fixtureList; e; e = e.m_next) e.CreateProxies(this.m_xf); else {
                for (var i = this.m_fixtureList; i; i = i.m_next) i.DestroyProxies();
                for (var s = this.m_contactList; s; ) {
                    var n = s, s = s.next;
                    this.m_world.m_contactManager.Destroy(n.contact);
                }
                this.m_contactList = null;
            }
        }
    }, {
        key: "IsActive",
        value: function() {
            return this.m_activeFlag;
        }
    }, {
        key: "SetFixedRotation",
        value: function(t) {
            this.m_fixedRotationFlag !== t && (this.m_fixedRotationFlag = t, this.m_angularVelocity = 0, 
            this.ResetMassData());
        }
    }, {
        key: "IsFixedRotation",
        value: function() {
            return this.m_fixedRotationFlag;
        }
    }, {
        key: "GetFixtureList",
        value: function() {
            return this.m_fixtureList;
        }
    }, {
        key: "GetJointList",
        value: function() {
            return this.m_jointList;
        }
    }, {
        key: "GetContactList",
        value: function() {
            return this.m_contactList;
        }
    }, {
        key: "GetNext",
        value: function() {
            return this.m_next;
        }
    }, {
        key: "GetUserData",
        value: function() {
            return this.m_userData;
        }
    }, {
        key: "SetUserData",
        value: function(t) {
            this.m_userData = t;
        }
    }, {
        key: "GetWorld",
        value: function() {
            return this.m_world;
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_islandIndex, i = (t("{\n"), t("  const bd: b2BodyDef = new b2BodyDef();\n"), 
            "");
            switch (this.m_type) {
              case N.b2BodyType.b2_staticBody:
                i = "b2BodyType.b2_staticBody";
                break;

              case N.b2BodyType.b2_kinematicBody:
                i = "b2BodyType.b2_kinematicBody";
                break;

              case N.b2BodyType.b2_dynamicBody:
                i = "b2BodyType.b2_dynamicBody";
            }
            t("  bd.type = %s;\n", i), t("  bd.position.Set(%.15f, %.15f);\n", this.m_xf.p.x, this.m_xf.p.y), 
            t("  bd.angle = %.15f;\n", this.m_sweep.a), t("  bd.linearVelocity.Set(%.15f, %.15f);\n", this.m_linearVelocity.x, this.m_linearVelocity.y), 
            t("  bd.angularVelocity = %.15f;\n", this.m_angularVelocity), t("  bd.linearDamping = %.15f;\n", this.m_linearDamping), 
            t("  bd.angularDamping = %.15f;\n", this.m_angularDamping), t("  bd.allowSleep = %s;\n", this.m_autoSleepFlag ? "true" : "false"), 
            t("  bd.awake = %s;\n", this.m_awakeFlag ? "true" : "false"), t("  bd.fixedRotation = %s;\n", this.m_fixedRotationFlag ? "true" : "false"), 
            t("  bd.bullet = %s;\n", this.m_bulletFlag ? "true" : "false"), t("  bd.active = %s;\n", this.m_activeFlag ? "true" : "false"), 
            t("  bd.gravityScale = %.15f;\n", this.m_gravityScale), t("\n"), t("  bodies[%d] = this.m_world.CreateBody(bd);\n", this.m_islandIndex), 
            t("\n");
            for (var s = this.m_fixtureList; s; s = s.m_next) t("  {\n"), s.Dump(t, e), t("  }\n");
            t("}\n");
        }
    }, {
        key: "SynchronizeFixtures",
        value: function() {
            var t = as.SynchronizeFixtures_s_xf1;
            t.q.SetAngle(this.m_sweep.a0), P.MulRV(t.q, this.m_sweep.localCenter, t.p), X.SubVV(this.m_sweep.c0, t.p, t.p);
            for (var e = this.m_fixtureList; e; e = e.m_next) e.Synchronize(t, this.m_xf);
        }
    }, {
        key: "SynchronizeTransform",
        value: function() {
            this.m_xf.q.SetAngle(this.m_sweep.a), P.MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p), 
            X.SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
        }
    }, {
        key: "ShouldCollide",
        value: function(t) {
            return (this.m_type !== N.b2BodyType.b2_staticBody || t.m_type !== N.b2BodyType.b2_staticBody) && this.ShouldCollideConnected(t);
        }
    }, {
        key: "ShouldCollideConnected",
        value: function(t) {
            for (var e = this.m_jointList; e; e = e.next) if (e.other === t && !e.joint.m_collideConnected) return !1;
            return !0;
        }
    }, {
        key: "Advance",
        value: function(t) {
            this.m_sweep.Advance(t), this.m_sweep.c.Copy(this.m_sweep.c0), this.m_sweep.a = this.m_sweep.a0, 
            this.m_xf.q.SetAngle(this.m_sweep.a), P.MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p), 
            X.SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
        }
    }, {
        key: "GetControllerList",
        value: function() {
            return this.m_controllerList;
        }
    }, {
        key: "GetControllerCount",
        value: function() {
            return this.m_controllerCount;
        }
    } ]);
    var rs = as;
    function as(t, e) {
        _classCallCheck(this, as), this.m_type = N.b2BodyType.b2_staticBody, this.m_islandFlag = !1, 
        this.m_awakeFlag = !1, this.m_autoSleepFlag = !1, this.m_bulletFlag = !1, this.m_fixedRotationFlag = !1, 
        this.m_activeFlag = !1, this.m_toiFlag = !1, this.m_islandIndex = 0, this.m_xf = new F(), 
        this.m_xf0 = new F(), this.m_sweep = new pt(), this.m_linearVelocity = new X(), 
        this.m_angularVelocity = 0, this.m_force = new X(), this.m_torque = 0, this.m_prev = null, 
        this.m_next = null, this.m_fixtureList = null, this.m_fixtureCount = 0, this.m_jointList = null, 
        this.m_contactList = null, this.m_mass = 1, this.m_invMass = 1, this.m_I = 0, this.m_invI = 0, 
        this.m_linearDamping = 0, this.m_angularDamping = 0, this.m_gravityScale = 1, this.m_sleepTime = 0, 
        this.m_userData = null, this.m_controllerList = null, this.m_controllerCount = 0, 
        this.m_bulletFlag = f(t.bullet, !1), this.m_fixedRotationFlag = f(t.fixedRotation, !1), 
        this.m_autoSleepFlag = f(t.allowSleep, !0), this.m_awakeFlag = f(t.awake, !0), this.m_activeFlag = f(t.active, !0), 
        this.m_world = e, this.m_xf.p.Copy(f(t.position, X.ZERO)), this.m_xf.q.SetAngle(f(t.angle, 0)), 
        this.m_xf0.Copy(this.m_xf), this.m_sweep.localCenter.SetZero(), this.m_sweep.c0.Copy(this.m_xf.p), 
        this.m_sweep.c.Copy(this.m_xf.p), this.m_sweep.a0 = this.m_sweep.a = this.m_xf.q.GetAngle(), 
        this.m_sweep.alpha0 = 0, this.m_linearVelocity.Copy(f(t.linearVelocity, X.ZERO)), 
        this.m_angularVelocity = f(t.angularVelocity, 0), this.m_linearDamping = f(t.linearDamping, 0), 
        this.m_angularDamping = f(t.angularDamping, 0), this.m_gravityScale = f(t.gravityScale, 1), 
        this.m_force.SetZero(), this.m_torque = 0, this.m_sleepTime = 0, this.m_type = f(t.type, N.b2BodyType.b2_staticBody), 
        t.type === N.b2BodyType.b2_dynamicBody ? (this.m_mass = 1, this.m_invMass = 1) : (this.m_mass = 0, 
        this.m_invMass = 0), this.m_I = 0, this.m_invI = 0, this.m_userData = t.userData, 
        this.m_fixtureList = null, this.m_fixtureCount = 0, this.m_controllerList = null, 
        this.m_controllerCount = 0;
    }
    rs.CreateFixtureShapeDensity_s_def = new es(), rs.SetMassData_s_oldCenter = new X(), 
    rs.ResetMassData_s_localCenter = new X(), rs.ResetMassData_s_oldCenter = new X(), 
    rs.ResetMassData_s_massData = new Ui(), rs.SynchronizeFixtures_s_xf1 = new F(), 
    (r = N.b2JointType || (N.b2JointType = {}))[r.e_unknownJoint = 0] = "e_unknownJoint", 
    r[r.e_revoluteJoint = 1] = "e_revoluteJoint", r[r.e_prismaticJoint = 2] = "e_prismaticJoint", 
    r[r.e_distanceJoint = 3] = "e_distanceJoint", r[r.e_pulleyJoint = 4] = "e_pulleyJoint", 
    r[r.e_mouseJoint = 5] = "e_mouseJoint", r[r.e_gearJoint = 6] = "e_gearJoint", r[r.e_wheelJoint = 7] = "e_wheelJoint", 
    r[r.e_weldJoint = 8] = "e_weldJoint", r[r.e_frictionJoint = 9] = "e_frictionJoint", 
    r[r.e_ropeJoint = 10] = "e_ropeJoint", r[r.e_motorJoint = 11] = "e_motorJoint", 
    r[r.e_areaJoint = 12] = "e_areaJoint", (r = N.b2LimitState || (N.b2LimitState = {}))[r.e_inactiveLimit = 0] = "e_inactiveLimit", 
    r[r.e_atLowerLimit = 1] = "e_atLowerLimit", r[r.e_atUpperLimit = 2] = "e_atUpperLimit", 
    r[r.e_equalLimits = 3] = "e_equalLimits";
    _createClass(ls, [ {
        key: "SetZero",
        value: function() {
            return this.linear.SetZero(), this.angularA = 0, this.angularB = 0, this;
        }
    }, {
        key: "Set",
        value: function(t, e, i) {
            return this.linear.Copy(t), this.angularA = e, this.angularB = i, this;
        }
    } ]);
    var r = ls;
    function ls() {
        _classCallCheck(this, ls), this.linear = new X(), this.angularA = 0, this.angularB = 0;
    }
    function _s(t, e) {
        _classCallCheck(this, _s), this.prev = null, this.next = null, this.joint = t, this.other = e;
    }
    function ms(t) {
        _classCallCheck(this, ms), this.type = N.b2JointType.e_unknownJoint, this.userData = null, 
        this.collideConnected = !1, this.type = t;
    }
    _createClass(us, [ {
        key: "GetType",
        value: function() {
            return this.m_type;
        }
    }, {
        key: "GetBodyA",
        value: function() {
            return this.m_bodyA;
        }
    }, {
        key: "GetBodyB",
        value: function() {
            return this.m_bodyB;
        }
    }, {
        key: "GetNext",
        value: function() {
            return this.m_next;
        }
    }, {
        key: "GetUserData",
        value: function() {
            return this.m_userData;
        }
    }, {
        key: "SetUserData",
        value: function(t) {
            this.m_userData = t;
        }
    }, {
        key: "IsActive",
        value: function() {
            return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
        }
    }, {
        key: "GetCollideConnected",
        value: function() {
            return this.m_collideConnected;
        }
    }, {
        key: "Dump",
        value: function(t) {
            t("// Dump is not supported for this joint type.\n");
        }
    }, {
        key: "ShiftOrigin",
        value: function(t) {}
    } ]);
    var hs = us;
    function us(t) {
        _classCallCheck(this, us), this.m_type = N.b2JointType.e_unknownJoint, this.m_prev = null, 
        this.m_next = null, this.m_index = 0, this.m_islandFlag = !1, this.m_collideConnected = !1, 
        this.m_userData = null, this.m_type = t.type, this.m_edgeA = new _s(this, t.bodyB), 
        this.m_edgeB = new _s(this, t.bodyA), this.m_bodyA = t.bodyA, this.m_bodyB = t.bodyB, 
        this.m_collideConnected = f(t.collideConnected, !1), this.m_userData = t.userData;
    }
    _inherits(fs, ms), _createClass(fs, [ {
        key: "Initialize",
        value: function(t, e, i, s) {
            this.bodyA = t, this.bodyB = e, this.bodyA.GetLocalPoint(i, this.localAnchorA), 
            this.bodyB.GetLocalPoint(s, this.localAnchorB), this.length = X.DistanceVV(i, s), 
            this.frequencyHz = 0, this.dampingRatio = 0;
        }
    } ]);
    var cs = fs;
    function fs() {
        _classCallCheck(this, fs);
        var t = _possibleConstructorReturn(this, (fs.__proto__ || Object.getPrototypeOf(fs)).call(this, N.b2JointType.e_distanceJoint));
        return t.localAnchorA = new X(), t.localAnchorB = new X(), t.length = 1, t.frequencyHz = 0, 
        t.dampingRatio = 0, t;
    }
    _inherits(ys, hs), _createClass(ys, [ {
        key: "GetAnchorA",
        value: function(t) {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t);
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return e.x = t * this.m_impulse * this.m_u.x, e.y = t * this.m_impulse * this.m_u.y, 
            e;
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return 0;
        }
    }, {
        key: "GetLocalAnchorA",
        value: function() {
            return this.m_localAnchorA;
        }
    }, {
        key: "GetLocalAnchorB",
        value: function() {
            return this.m_localAnchorB;
        }
    }, {
        key: "SetLength",
        value: function(t) {
            this.m_length = t;
        }
    }, {
        key: "Length",
        value: function() {
            return this.m_length;
        }
    }, {
        key: "SetFrequency",
        value: function(t) {
            this.m_frequencyHz = t;
        }
    }, {
        key: "GetFrequency",
        value: function() {
            return this.m_frequencyHz;
        }
    }, {
        key: "SetDampingRatio",
        value: function(t) {
            this.m_dampingRatio = t;
        }
    }, {
        key: "GetDampingRatio",
        value: function() {
            return this.m_dampingRatio;
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex;
            t("  const jd: b2DistanceJointDef = new b2DistanceJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), 
            t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), 
            t("  jd.length = %.15f;\n", this.m_length), t("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz), 
            t("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio), t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
            var e, i = t.positions[this.m_indexA].c, s = t.positions[this.m_indexA].a, n = t.velocities[this.m_indexA].v, o = t.velocities[this.m_indexA].w, r = t.positions[this.m_indexB].c, a = t.positions[this.m_indexB].a, l = t.velocities[this.m_indexB].v, _ = t.velocities[this.m_indexB].w, s = this.m_qA.SetAngle(s), a = this.m_qB.SetAngle(a), s = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(s, this.m_lalcA, this.m_rA), X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(a, this.m_lalcB, this.m_rB), this.m_u.x = r.x + this.m_rB.x - i.x - this.m_rA.x, 
            this.m_u.y = r.y + this.m_rB.y - i.y - this.m_rA.y, this.m_u.Length()), a = (G < s ? this.m_u.SelfMul(1 / s) : this.m_u.SetZero(), 
            X.CrossVV(this.m_rA, this.m_u)), r = X.CrossVV(this.m_rB, this.m_u), i = this.m_invMassA + this.m_invIA * a * a + this.m_invMassB + this.m_invIB * r * r;
            this.m_mass = 0 !== i ? 1 / i : 0, 0 < this.m_frequencyHz ? (a = s - this.m_length, 
            r = 2 * y * this.m_frequencyHz, s = 2 * this.m_mass * this.m_dampingRatio * r, r = this.m_mass * r * r, 
            e = t.step.dt, this.m_gamma = e * (s + e * r), this.m_gamma = 0 !== this.m_gamma ? 1 / this.m_gamma : 0, 
            this.m_bias = a * e * r * this.m_gamma, i += this.m_gamma, this.m_mass = 0 !== i ? 1 / i : 0) : (this.m_gamma = 0, 
            this.m_bias = 0), t.step.warmStarting ? (this.m_impulse *= t.step.dtRatio, s = X.MulSV(this.m_impulse, this.m_u, ys.InitVelocityConstraints_s_P), 
            n.SelfMulSub(this.m_invMassA, s), o -= this.m_invIA * X.CrossVV(this.m_rA, s), l.SelfMulAdd(this.m_invMassB, s), 
            _ += this.m_invIB * X.CrossVV(this.m_rB, s)) : this.m_impulse = 0, t.velocities[this.m_indexA].w = o, 
            t.velocities[this.m_indexB].w = _;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e = t.velocities[this.m_indexA].v, i = t.velocities[this.m_indexA].w, s = t.velocities[this.m_indexB].v, n = t.velocities[this.m_indexB].w, o = X.AddVCrossSV(e, i, this.m_rA, ys.SolveVelocityConstraints_s_vpA), r = X.AddVCrossSV(s, n, this.m_rB, ys.SolveVelocityConstraints_s_vpB), r = X.DotVV(this.m_u, X.SubVV(r, o, X.s_t0)), o = -this.m_mass * (r + this.m_bias + this.m_gamma * this.m_impulse), r = (this.m_impulse += o, 
            X.MulSV(o, this.m_u, ys.SolveVelocityConstraints_s_P));
            e.SelfMulSub(this.m_invMassA, r), i -= this.m_invIA * X.CrossVV(this.m_rA, r), s.SelfMulAdd(this.m_invMassB, r), 
            n += this.m_invIB * X.CrossVV(this.m_rB, r), t.velocities[this.m_indexA].w = i, 
            t.velocities[this.m_indexB].w = n;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            if (0 < this.m_frequencyHz) return !0;
            var e = t.positions[this.m_indexA].c, i = t.positions[this.m_indexA].a, s = t.positions[this.m_indexB].c, n = t.positions[this.m_indexB].a, o = this.m_qA.SetAngle(i), r = this.m_qB.SetAngle(n), o = P.MulRV(o, this.m_lalcA, this.m_rA), r = P.MulRV(r, this.m_lalcB, this.m_rB), a = this.m_u;
            a.x = s.x + r.x - e.x - o.x, a.y = s.y + r.y - e.y - o.y;
            var l = M(this.m_u.Normalize() - this.m_length, -O, O), _ = -this.m_mass * l, _ = X.MulSV(_, a, ys.SolvePositionConstraints_s_P);
            return e.SelfMulSub(this.m_invMassA, _), i -= this.m_invIA * X.CrossVV(o, _), s.SelfMulAdd(this.m_invMassB, _), 
            n += this.m_invIB * X.CrossVV(r, _), t.positions[this.m_indexA].a = i, t.positions[this.m_indexB].a = n, 
            R(l) < G;
        }
    } ]);
    var ds = ys;
    function ys(t) {
        _classCallCheck(this, ys);
        var e = _possibleConstructorReturn(this, (ys.__proto__ || Object.getPrototypeOf(ys)).call(this, t));
        return e.m_frequencyHz = 0, e.m_dampingRatio = 0, e.m_bias = 0, e.m_localAnchorA = new X(), 
        e.m_localAnchorB = new X(), e.m_gamma = 0, e.m_impulse = 0, e.m_length = 0, e.m_indexA = 0, 
        e.m_indexB = 0, e.m_u = new X(), e.m_rA = new X(), e.m_rB = new X(), e.m_localCenterA = new X(), 
        e.m_localCenterB = new X(), e.m_invMassA = 0, e.m_invMassB = 0, e.m_invIA = 0, e.m_invIB = 0, 
        e.m_mass = 0, e.m_qA = new P(), e.m_qB = new P(), e.m_lalcA = new X(), e.m_lalcB = new X(), 
        e.m_frequencyHz = f(t.frequencyHz, 0), e.m_dampingRatio = f(t.dampingRatio, 0), 
        e.m_localAnchorA.Copy(t.localAnchorA), e.m_localAnchorB.Copy(t.localAnchorB), e.m_length = t.length, 
        e;
    }
    ds.InitVelocityConstraints_s_P = new X(), ds.SolveVelocityConstraints_s_vpA = new X(), 
    ds.SolveVelocityConstraints_s_vpB = new X(), ds.SolveVelocityConstraints_s_P = new X(), 
    ds.SolvePositionConstraints_s_P = new X();
    _inherits(vs, ms), _createClass(vs, [ {
        key: "AddBody",
        value: function(t) {
            this.bodies.push(t), 1 === this.bodies.length ? this.bodyA = t : 2 === this.bodies.length && (this.bodyB = t);
        }
    } ]);
    var ps = vs;
    function vs() {
        _classCallCheck(this, vs);
        var t = _possibleConstructorReturn(this, (vs.__proto__ || Object.getPrototypeOf(vs)).call(this, N.b2JointType.e_areaJoint));
        return t.bodies = [], t.frequencyHz = 0, t.dampingRatio = 0, t;
    }
    _inherits(Cs, hs), _createClass(Cs, [ {
        key: "GetAnchorA",
        value: function(t) {
            return t;
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return t;
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return e;
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return 0;
        }
    }, {
        key: "SetFrequency",
        value: function(t) {
            this.m_frequencyHz = t;
            for (var e = 0; e < this.m_joints.length; ++e) this.m_joints[e].SetFrequency(t);
        }
    }, {
        key: "GetFrequency",
        value: function() {
            return this.m_frequencyHz;
        }
    }, {
        key: "SetDampingRatio",
        value: function(t) {
            this.m_dampingRatio = t;
            for (var e = 0; e < this.m_joints.length; ++e) this.m_joints[e].SetDampingRatio(t);
        }
    }, {
        key: "GetDampingRatio",
        value: function() {
            return this.m_dampingRatio;
        }
    }, {
        key: "Dump",
        value: function(t) {
            t("Area joint dumping is not supported.\n");
        }
    }, {
        key: "InitVelocityConstraints",
        value: function(t) {
            for (var e = 0; e < this.m_bodies.length; ++e) {
                var i = this.m_bodies[(e + this.m_bodies.length - 1) % this.m_bodies.length], s = this.m_bodies[(e + 1) % this.m_bodies.length], i = t.positions[i.m_islandIndex].c, s = t.positions[s.m_islandIndex].c, n = this.m_deltas[e];
                X.SubVV(s, i, n);
            }
            if (t.step.warmStarting) {
                this.m_impulse *= t.step.dtRatio;
                for (var o = 0; o < this.m_bodies.length; ++o) {
                    var r = this.m_bodies[o], a = t.velocities[r.m_islandIndex].v, l = this.m_deltas[o];
                    a.x += r.m_invMass * l.y * .5 * this.m_impulse, a.y += r.m_invMass * -l.x * .5 * this.m_impulse;
                }
            } else this.m_impulse = 0;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            for (var e = 0, i = 0, s = 0; s < this.m_bodies.length; ++s) {
                var n = this.m_bodies[s], o = t.velocities[n.m_islandIndex].v, r = this.m_deltas[s];
                e += r.LengthSquared() / n.GetMass(), i += X.CrossVV(o, r);
            }
            var a = -2 * i / e;
            this.m_impulse += a;
            for (var l = 0; l < this.m_bodies.length; ++l) {
                var _ = this.m_bodies[l], m = t.velocities[_.m_islandIndex].v, h = this.m_deltas[l];
                m.x += _.m_invMass * h.y * .5 * a, m.y += _.m_invMass * -h.x * .5 * a;
            }
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            for (var e = 0, i = 0, s = 0; s < this.m_bodies.length; ++s) {
                var n = this.m_bodies[s], o = this.m_bodies[(s + 1) % this.m_bodies.length], n = t.positions[n.m_islandIndex].c, o = t.positions[o.m_islandIndex].c, r = X.SubVV(o, n, this.m_delta), a = r.Length();
                a < I && (a = 1), this.m_normals[s].x = r.y / a, this.m_normals[s].y = -r.x / a, 
                e += a, i += X.CrossVV(n, o);
            }
            for (var l = .5 * (this.m_targetArea - (i *= .5)) / e, _ = !0, m = 0; m < this.m_bodies.length; ++m) {
                var h = this.m_bodies[m], h = t.positions[h.m_islandIndex].c, u = (m + 1) % this.m_bodies.length, u = X.AddVV(this.m_normals[m], this.m_normals[u], this.m_delta), c = (u.SelfMul(l), 
                u.LengthSquared());
                c > tt(O) && u.SelfMul(O / it(c)), 64e-6 < c && (_ = !1), h.x += u.x, h.y += u.y;
            }
            return _;
        }
    } ]);
    var xs = Cs;
    function Cs(t) {
        _classCallCheck(this, Cs);
        var e = _possibleConstructorReturn(this, (Cs.__proto__ || Object.getPrototypeOf(Cs)).call(this, t)), i = (e.m_frequencyHz = 0, 
        e.m_dampingRatio = 0, e.m_impulse = 0, e.m_targetArea = 0, e.m_bodies = t.bodies, 
        e.m_frequencyHz = f(t.frequencyHz, 0), e.m_dampingRatio = f(t.dampingRatio, 0), 
        e.m_targetLengths = H(t.bodies.length), e.m_normals = X.MakeArray(t.bodies.length), 
        e.m_joints = [], e.m_deltas = X.MakeArray(t.bodies.length), e.m_delta = new X(), 
        new cs());
        i.frequencyHz = e.m_frequencyHz, i.dampingRatio = e.m_dampingRatio;
        for (var s = e.m_targetArea = 0; s < e.m_bodies.length; ++s) {
            var n = e.m_bodies[s], o = e.m_bodies[(s + 1) % e.m_bodies.length], r = n.GetWorldCenter(), a = o.GetWorldCenter();
            e.m_targetLengths[s] = X.DistanceVV(r, a), e.m_targetArea += X.CrossVV(r, a), i.Initialize(n, o, r, a), 
            e.m_joints[s] = n.GetWorld().CreateJoint(i);
        }
        return e.m_targetArea *= .5, e;
    }
    _inherits(Ss, ms), _createClass(Ss, [ {
        key: "Initialize",
        value: function(t, e, i) {
            this.bodyA = t, this.bodyB = e, this.bodyA.GetLocalPoint(i, this.localAnchorA), 
            this.bodyB.GetLocalPoint(i, this.localAnchorB);
        }
    } ]);
    var Bs = Ss;
    function Ss() {
        _classCallCheck(this, Ss);
        var t = _possibleConstructorReturn(this, (Ss.__proto__ || Object.getPrototypeOf(Ss)).call(this, N.b2JointType.e_frictionJoint));
        return t.localAnchorA = new X(), t.localAnchorB = new X(), t.maxForce = 0, t.maxTorque = 0, 
        t;
    }
    _inherits(As, hs), _createClass(As, [ {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
            var e = t.positions[this.m_indexA].a, i = t.velocities[this.m_indexA].v, s = t.velocities[this.m_indexA].w, n = t.positions[this.m_indexB].a, o = t.velocities[this.m_indexB].v, r = t.velocities[this.m_indexB].w, e = this.m_qA.SetAngle(e), n = this.m_qB.SetAngle(n), e = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(e, this.m_lalcA, this.m_rA)), n = (X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(n, this.m_lalcB, this.m_rB)), a = this.m_invMassA, l = this.m_invMassB, _ = this.m_invIA, m = this.m_invIB, h = this.m_K;
            h.ex.x = a + l + _ * e.y * e.y + m * n.y * n.y, h.ex.y = -_ * e.x * e.y - m * n.x * n.y, 
            h.ey.x = h.ex.y, h.ey.y = a + l + _ * e.x * e.x + m * n.x * n.x, h.GetInverse(this.m_linearMass), 
            this.m_angularMass = _ + m, 0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass), 
            t.step.warmStarting ? (this.m_linearImpulse.SelfMul(t.step.dtRatio), this.m_angularImpulse *= t.step.dtRatio, 
            e = this.m_linearImpulse, i.SelfMulSub(a, e), s -= _ * (X.CrossVV(this.m_rA, e) + this.m_angularImpulse), 
            o.SelfMulAdd(l, e), r += m * (X.CrossVV(this.m_rB, e) + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(), 
            this.m_angularImpulse = 0), t.velocities[this.m_indexA].w = s, t.velocities[this.m_indexB].w = r;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e = t.velocities[this.m_indexA].v, i = t.velocities[this.m_indexA].w, s = t.velocities[this.m_indexB].v, n = t.velocities[this.m_indexB].w, o = this.m_invMassA, r = this.m_invMassB, a = this.m_invIA, l = this.m_invIB, _ = t.step.dt, m = -this.m_angularMass * (n - i), h = this.m_angularImpulse, u = _ * this.m_maxTorque, u = (this.m_angularImpulse = M(this.m_angularImpulse + m, -u, u), 
            i -= a * (m = this.m_angularImpulse - h), X.SubVV(X.AddVCrossSV(s, n += l * m, this.m_rB, X.s_t0), X.AddVCrossSV(e, i, this.m_rA, X.s_t1), As.SolveVelocityConstraints_s_Cdot_v2)), h = d.MulMV(this.m_linearMass, u, As.SolveVelocityConstraints_s_impulseV).SelfNeg(), m = As.SolveVelocityConstraints_s_oldImpulseV.Copy(this.m_linearImpulse), u = (this.m_linearImpulse.SelfAdd(h), 
            _ * this.m_maxForce);
            this.m_linearImpulse.LengthSquared() > u * u && (this.m_linearImpulse.Normalize(), 
            this.m_linearImpulse.SelfMul(u)), X.SubVV(this.m_linearImpulse, m, h), e.SelfMulSub(o, h), 
            i -= a * X.CrossVV(this.m_rA, h), s.SelfMulAdd(r, h), n += l * X.CrossVV(this.m_rB, h), 
            t.velocities[this.m_indexA].w = i, t.velocities[this.m_indexB].w = n;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            return !0;
        }
    }, {
        key: "GetAnchorA",
        value: function(t) {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t);
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return e.x = t * this.m_linearImpulse.x, e.y = t * this.m_linearImpulse.y, e;
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return t * this.m_angularImpulse;
        }
    }, {
        key: "GetLocalAnchorA",
        value: function() {
            return this.m_localAnchorA;
        }
    }, {
        key: "GetLocalAnchorB",
        value: function() {
            return this.m_localAnchorB;
        }
    }, {
        key: "SetMaxForce",
        value: function(t) {
            this.m_maxForce = t;
        }
    }, {
        key: "GetMaxForce",
        value: function() {
            return this.m_maxForce;
        }
    }, {
        key: "SetMaxTorque",
        value: function(t) {
            this.m_maxTorque = t;
        }
    }, {
        key: "GetMaxTorque",
        value: function() {
            return this.m_maxTorque;
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex;
            t("  const jd: b2FrictionJointDef = new b2FrictionJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), 
            t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), 
            t("  jd.maxForce = %.15f;\n", this.m_maxForce), t("  jd.maxTorque = %.15f;\n", this.m_maxTorque), 
            t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    } ]);
    var bs = As;
    function As(t) {
        _classCallCheck(this, As);
        var e = _possibleConstructorReturn(this, (As.__proto__ || Object.getPrototypeOf(As)).call(this, t));
        return e.m_localAnchorA = new X(), e.m_localAnchorB = new X(), e.m_linearImpulse = new X(), 
        e.m_angularImpulse = 0, e.m_maxForce = 0, e.m_maxTorque = 0, e.m_indexA = 0, e.m_indexB = 0, 
        e.m_rA = new X(), e.m_rB = new X(), e.m_localCenterA = new X(), e.m_localCenterB = new X(), 
        e.m_invMassA = 0, e.m_invMassB = 0, e.m_invIA = 0, e.m_invIB = 0, e.m_linearMass = new d(), 
        e.m_angularMass = 0, e.m_qA = new P(), e.m_qB = new P(), e.m_lalcA = new X(), e.m_lalcB = new X(), 
        e.m_K = new d(), e.m_localAnchorA.Copy(t.localAnchorA), e.m_localAnchorB.Copy(t.localAnchorB), 
        e.m_linearImpulse.SetZero(), e.m_maxForce = f(t.maxForce, 0), e.m_maxTorque = f(t.maxTorque, 0), 
        e.m_linearMass.SetZero(), e;
    }
    bs.SolveVelocityConstraints_s_Cdot_v2 = new X(), bs.SolveVelocityConstraints_s_impulseV = new X(), 
    bs.SolveVelocityConstraints_s_oldImpulseV = new X();
    _inherits(Vs, ms);
    var gs = Vs;
    function Vs() {
        _classCallCheck(this, Vs);
        var t = _possibleConstructorReturn(this, (Vs.__proto__ || Object.getPrototypeOf(Vs)).call(this, N.b2JointType.e_gearJoint));
        return t.ratio = 1, t;
    }
    _inherits(ks, hs), _createClass(ks, [ {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_indexC = this.m_bodyC.m_islandIndex, this.m_indexD = this.m_bodyD.m_islandIndex, 
            this.m_lcA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_lcB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_lcC.Copy(this.m_bodyC.m_sweep.localCenter), this.m_lcD.Copy(this.m_bodyD.m_sweep.localCenter), 
            this.m_mA = this.m_bodyA.m_invMass, this.m_mB = this.m_bodyB.m_invMass, this.m_mC = this.m_bodyC.m_invMass, 
            this.m_mD = this.m_bodyD.m_invMass, this.m_iA = this.m_bodyA.m_invI, this.m_iB = this.m_bodyB.m_invI, 
            this.m_iC = this.m_bodyC.m_invI, this.m_iD = this.m_bodyD.m_invI;
            var e, i = t.positions[this.m_indexA].a, s = t.velocities[this.m_indexA].v, n = t.velocities[this.m_indexA].w, o = t.positions[this.m_indexB].a, r = t.velocities[this.m_indexB].v, a = t.velocities[this.m_indexB].w, l = t.positions[this.m_indexC].a, _ = t.velocities[this.m_indexC].v, m = t.velocities[this.m_indexC].w, h = t.positions[this.m_indexD].a, u = t.velocities[this.m_indexD].v, c = t.velocities[this.m_indexD].w, i = this.m_qA.SetAngle(i), o = this.m_qB.SetAngle(o), l = this.m_qC.SetAngle(l), h = this.m_qD.SetAngle(h);
            this.m_mass = 0, this.m_typeA === N.b2JointType.e_revoluteJoint ? (this.m_JvAC.SetZero(), 
            this.m_JwA = 1, this.m_JwC = 1, this.m_mass += this.m_iA + this.m_iC) : (e = P.MulRV(l, this.m_localAxisC, ks.InitVelocityConstraints_s_u), 
            X.SubVV(this.m_localAnchorC, this.m_lcC, this.m_lalcC), l = P.MulRV(l, this.m_lalcC, ks.InitVelocityConstraints_s_rC), 
            X.SubVV(this.m_localAnchorA, this.m_lcA, this.m_lalcA), i = P.MulRV(i, this.m_lalcA, ks.InitVelocityConstraints_s_rA), 
            this.m_JvAC.Copy(e), this.m_JwC = X.CrossVV(l, e), this.m_JwA = X.CrossVV(i, e), 
            this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA), 
            this.m_typeB === N.b2JointType.e_revoluteJoint ? (this.m_JvBD.SetZero(), this.m_JwB = this.m_ratio, 
            this.m_JwD = this.m_ratio, this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD)) : (l = P.MulRV(h, this.m_localAxisD, ks.InitVelocityConstraints_s_u), 
            X.SubVV(this.m_localAnchorD, this.m_lcD, this.m_lalcD), i = P.MulRV(h, this.m_lalcD, ks.InitVelocityConstraints_s_rD), 
            X.SubVV(this.m_localAnchorB, this.m_lcB, this.m_lalcB), e = P.MulRV(o, this.m_lalcB, ks.InitVelocityConstraints_s_rB), 
            X.MulSV(this.m_ratio, l, this.m_JvBD), this.m_JwD = this.m_ratio * X.CrossVV(i, l), 
            this.m_JwB = this.m_ratio * X.CrossVV(e, l), this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB), 
            this.m_mass = 0 < this.m_mass ? 1 / this.m_mass : 0, t.step.warmStarting ? (s.SelfMulAdd(this.m_mA * this.m_impulse, this.m_JvAC), 
            n += this.m_iA * this.m_impulse * this.m_JwA, r.SelfMulAdd(this.m_mB * this.m_impulse, this.m_JvBD), 
            a += this.m_iB * this.m_impulse * this.m_JwB, _.SelfMulSub(this.m_mC * this.m_impulse, this.m_JvAC), 
            m -= this.m_iC * this.m_impulse * this.m_JwC, u.SelfMulSub(this.m_mD * this.m_impulse, this.m_JvBD), 
            c -= this.m_iD * this.m_impulse * this.m_JwD) : this.m_impulse = 0, t.velocities[this.m_indexA].w = n, 
            t.velocities[this.m_indexB].w = a, t.velocities[this.m_indexC].w = m, t.velocities[this.m_indexD].w = c;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e = t.velocities[this.m_indexA].v, i = t.velocities[this.m_indexA].w, s = t.velocities[this.m_indexB].v, n = t.velocities[this.m_indexB].w, o = t.velocities[this.m_indexC].v, r = t.velocities[this.m_indexC].w, a = t.velocities[this.m_indexD].v, l = t.velocities[this.m_indexD].w, _ = X.DotVV(this.m_JvAC, X.SubVV(e, o, X.s_t0)) + X.DotVV(this.m_JvBD, X.SubVV(s, a, X.s_t0)), _ = (_ += this.m_JwA * i - this.m_JwC * r + (this.m_JwB * n - this.m_JwD * l), 
            -this.m_mass * _);
            this.m_impulse += _, e.SelfMulAdd(this.m_mA * _, this.m_JvAC), i += this.m_iA * _ * this.m_JwA, 
            s.SelfMulAdd(this.m_mB * _, this.m_JvBD), n += this.m_iB * _ * this.m_JwB, o.SelfMulSub(this.m_mC * _, this.m_JvAC), 
            r -= this.m_iC * _ * this.m_JwC, a.SelfMulSub(this.m_mD * _, this.m_JvBD), l -= this.m_iD * _ * this.m_JwD, 
            t.velocities[this.m_indexA].w = i, t.velocities[this.m_indexB].w = n, t.velocities[this.m_indexC].w = r, 
            t.velocities[this.m_indexD].w = l;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            var e, i, s = t.positions[this.m_indexA].c, n = t.positions[this.m_indexA].a, o = t.positions[this.m_indexB].c, r = t.positions[this.m_indexB].a, a = t.positions[this.m_indexC].c, l = t.positions[this.m_indexC].a, _ = t.positions[this.m_indexD].c, m = t.positions[this.m_indexD].a, h = this.m_qA.SetAngle(n), u = this.m_qB.SetAngle(r), c = this.m_qC.SetAngle(l), f = this.m_qD.SetAngle(m), d = void 0, y = void 0, p = this.m_JvAC, v = this.m_JvBD, x = void 0, C = void 0, B = void 0, S = void 0, b = 0, h = (d = this.m_typeA === N.b2JointType.e_revoluteJoint ? (p.SetZero(), 
            B = x = 1, b += this.m_iA + this.m_iC, n - l - this.m_referenceAngleA) : (e = P.MulRV(c, this.m_localAxisC, ks.SolvePositionConstraints_s_u), 
            i = P.MulRV(c, this.m_lalcC, ks.SolvePositionConstraints_s_rC), h = P.MulRV(h, this.m_lalcA, ks.SolvePositionConstraints_s_rA), 
            p.Copy(e), B = X.CrossVV(i, e), x = X.CrossVV(h, e), b += this.m_mC + this.m_mA + this.m_iC * B * B + this.m_iA * x * x, 
            i = this.m_lalcC, e = P.MulTRV(c, X.AddVV(h, X.SubVV(s, a, X.s_t0), X.s_t0), X.s_t0), 
            X.DotVV(X.SubVV(e, i, X.s_t0), this.m_localAxisC)), y = this.m_typeB === N.b2JointType.e_revoluteJoint ? (v.SetZero(), 
            C = this.m_ratio, S = this.m_ratio, b += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD), 
            r - m - this.m_referenceAngleB) : (c = P.MulRV(f, this.m_localAxisD, ks.SolvePositionConstraints_s_u), 
            h = P.MulRV(f, this.m_lalcD, ks.SolvePositionConstraints_s_rD), e = P.MulRV(u, this.m_lalcB, ks.SolvePositionConstraints_s_rB), 
            X.MulSV(this.m_ratio, c, v), S = this.m_ratio * X.CrossVV(h, c), C = this.m_ratio * X.CrossVV(e, c), 
            b += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * S * S + this.m_iB * C * C, 
            i = this.m_lalcD, u = P.MulTRV(f, X.AddVV(e, X.SubVV(o, _, X.s_t0), X.s_t0), X.s_t0), 
            X.DotVV(X.SubVV(u, i, X.s_t0), this.m_localAxisD)), d + this.m_ratio * y - this.m_constant), c = 0 < b ? -h / b : 0;
            return s.SelfMulAdd(this.m_mA * c, p), n += this.m_iA * c * x, o.SelfMulAdd(this.m_mB * c, v), 
            r += this.m_iB * c * C, a.SelfMulSub(this.m_mC * c, p), l -= this.m_iC * c * B, 
            _.SelfMulSub(this.m_mD * c, v), m -= this.m_iD * c * S, t.positions[this.m_indexA].a = n, 
            t.positions[this.m_indexB].a = r, t.positions[this.m_indexC].a = l, t.positions[this.m_indexD].a = m, 
            !0;
        }
    }, {
        key: "GetAnchorA",
        value: function(t) {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t);
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return X.MulSV(t * this.m_impulse, this.m_JvAC, e);
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return t * this.m_impulse * this.m_JwA;
        }
    }, {
        key: "GetJoint1",
        value: function() {
            return this.m_joint1;
        }
    }, {
        key: "GetJoint2",
        value: function() {
            return this.m_joint2;
        }
    }, {
        key: "GetRatio",
        value: function() {
            return this.m_ratio;
        }
    }, {
        key: "SetRatio",
        value: function(t) {
            this.m_ratio = t;
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex, s = this.m_joint1.m_index, n = this.m_joint2.m_index;
            t("  const jd: b2GearJointDef = new b2GearJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.joint1 = joints[%d];\n", s), t("  jd.joint2 = joints[%d];\n", n), t("  jd.ratio = %.15f;\n", this.m_ratio), 
            t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    } ]);
    var ws = ks;
    function ks(t) {
        _classCallCheck(this, ks);
        var e = _possibleConstructorReturn(this, (ks.__proto__ || Object.getPrototypeOf(ks)).call(this, t)), i = (e.m_typeA = N.b2JointType.e_unknownJoint, 
        e.m_typeB = N.b2JointType.e_unknownJoint, e.m_localAnchorA = new X(), e.m_localAnchorB = new X(), 
        e.m_localAnchorC = new X(), e.m_localAnchorD = new X(), e.m_localAxisC = new X(), 
        e.m_localAxisD = new X(), e.m_referenceAngleA = 0, e.m_referenceAngleB = 0, e.m_constant = 0, 
        e.m_ratio = 0, e.m_impulse = 0, e.m_indexA = 0, e.m_indexB = 0, e.m_indexC = 0, 
        e.m_indexD = 0, e.m_lcA = new X(), e.m_lcB = new X(), e.m_lcC = new X(), e.m_lcD = new X(), 
        e.m_mA = 0, e.m_mB = 0, e.m_mC = 0, e.m_mD = 0, e.m_iA = 0, e.m_iB = 0, e.m_iC = 0, 
        e.m_iD = 0, e.m_JvAC = new X(), e.m_JvBD = new X(), e.m_JwA = 0, e.m_JwB = 0, e.m_JwC = 0, 
        e.m_JwD = 0, e.m_mass = 0, e.m_qA = new P(), e.m_qB = new P(), e.m_qC = new P(), 
        e.m_qD = new P(), e.m_lalcA = new X(), e.m_lalcB = new X(), e.m_lalcC = new X(), 
        e.m_lalcD = new X(), e.m_joint1 = t.joint1, e.m_joint2 = t.joint2, e.m_typeA = e.m_joint1.GetType(), 
        e.m_typeB = e.m_joint2.GetType(), void 0), s = void 0, n = (e.m_bodyC = e.m_joint1.GetBodyA(), 
        e.m_bodyA = e.m_joint1.GetBodyB(), e.m_bodyA.m_xf), o = e.m_bodyA.m_sweep.a, r = e.m_bodyC.m_xf, a = e.m_bodyC.m_sweep.a, l = (i = e.m_typeA === N.b2JointType.e_revoluteJoint ? (l = t.joint1, 
        e.m_localAnchorC.Copy(l.m_localAnchorA), e.m_localAnchorA.Copy(l.m_localAnchorB), 
        e.m_referenceAngleA = l.m_referenceAngle, e.m_localAxisC.SetZero(), o - a - e.m_referenceAngleA) : (l = t.joint1, 
        e.m_localAnchorC.Copy(l.m_localAnchorA), e.m_localAnchorA.Copy(l.m_localAnchorB), 
        e.m_referenceAngleA = l.m_referenceAngle, e.m_localAxisC.Copy(l.m_localXAxisA), 
        o = e.m_localAnchorC, a = P.MulTRV(r.q, X.AddVV(P.MulRV(n.q, e.m_localAnchorA, X.s_t0), X.SubVV(n.p, r.p, X.s_t1), X.s_t0), X.s_t0), 
        X.DotVV(X.SubVV(a, o, X.s_t0), e.m_localAxisC)), e.m_bodyD = e.m_joint2.GetBodyA(), 
        e.m_bodyB = e.m_joint2.GetBodyB(), e.m_bodyB.m_xf), n = e.m_bodyB.m_sweep.a, r = e.m_bodyD.m_xf, a = e.m_bodyD.m_sweep.a;
        return s = e.m_typeB === N.b2JointType.e_revoluteJoint ? (o = t.joint2, e.m_localAnchorD.Copy(o.m_localAnchorA), 
        e.m_localAnchorB.Copy(o.m_localAnchorB), e.m_referenceAngleB = o.m_referenceAngle, 
        e.m_localAxisD.SetZero(), n - a - e.m_referenceAngleB) : (o = t.joint2, e.m_localAnchorD.Copy(o.m_localAnchorA), 
        e.m_localAnchorB.Copy(o.m_localAnchorB), e.m_referenceAngleB = o.m_referenceAngle, 
        e.m_localAxisD.Copy(o.m_localXAxisA), n = e.m_localAnchorD, a = P.MulTRV(r.q, X.AddVV(P.MulRV(l.q, e.m_localAnchorB, X.s_t0), X.SubVV(l.p, r.p, X.s_t1), X.s_t0), X.s_t0), 
        X.DotVV(X.SubVV(a, n, X.s_t0), e.m_localAxisD)), e.m_ratio = f(t.ratio, 1), e.m_constant = i + e.m_ratio * s, 
        e.m_impulse = 0, e;
    }
    ws.InitVelocityConstraints_s_u = new X(), ws.InitVelocityConstraints_s_rA = new X(), 
    ws.InitVelocityConstraints_s_rB = new X(), ws.InitVelocityConstraints_s_rC = new X(), 
    ws.InitVelocityConstraints_s_rD = new X(), ws.SolvePositionConstraints_s_u = new X(), 
    ws.SolvePositionConstraints_s_rA = new X(), ws.SolvePositionConstraints_s_rB = new X(), 
    ws.SolvePositionConstraints_s_rC = new X(), ws.SolvePositionConstraints_s_rD = new X();
    _inherits(Ps, ms), _createClass(Ps, [ {
        key: "Initialize",
        value: function(t, e) {
            this.bodyA = t, this.bodyB = e, this.bodyA.GetLocalPoint(this.bodyB.GetPosition(), this.linearOffset);
            t = this.bodyA.GetAngle(), e = this.bodyB.GetAngle();
            this.angularOffset = e - t;
        }
    } ]);
    var Ms = Ps;
    function Ps() {
        _classCallCheck(this, Ps);
        var t = _possibleConstructorReturn(this, (Ps.__proto__ || Object.getPrototypeOf(Ps)).call(this, N.b2JointType.e_motorJoint));
        return t.linearOffset = new X(0, 0), t.angularOffset = 0, t.maxForce = 1, t.maxTorque = 1, 
        t.correctionFactor = .3, t;
    }
    _inherits(Gs, hs), _createClass(Gs, [ {
        key: "GetAnchorA",
        value: function(t) {
            var e = this.m_bodyA.GetPosition();
            return t.x = e.x, t.y = e.y, t;
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            var e = this.m_bodyB.GetPosition();
            return t.x = e.x, t.y = e.y, t;
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return X.MulSV(t, this.m_linearImpulse, e);
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return t * this.m_angularImpulse;
        }
    }, {
        key: "SetLinearOffset",
        value: function(t) {
            X.IsEqualToV(t, this.m_linearOffset) || (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_linearOffset.Copy(t));
        }
    }, {
        key: "GetLinearOffset",
        value: function() {
            return this.m_linearOffset;
        }
    }, {
        key: "SetAngularOffset",
        value: function(t) {
            t !== this.m_angularOffset && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_angularOffset = t);
        }
    }, {
        key: "GetAngularOffset",
        value: function() {
            return this.m_angularOffset;
        }
    }, {
        key: "SetMaxForce",
        value: function(t) {
            this.m_maxForce = t;
        }
    }, {
        key: "GetMaxForce",
        value: function() {
            return this.m_maxForce;
        }
    }, {
        key: "SetMaxTorque",
        value: function(t) {
            this.m_maxTorque = t;
        }
    }, {
        key: "GetMaxTorque",
        value: function() {
            return this.m_maxTorque;
        }
    }, {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
            var e = t.positions[this.m_indexA].c, i = t.positions[this.m_indexA].a, s = t.velocities[this.m_indexA].v, n = t.velocities[this.m_indexA].w, o = t.positions[this.m_indexB].c, r = t.positions[this.m_indexB].a, a = t.velocities[this.m_indexB].v, l = t.velocities[this.m_indexB].w, _ = this.m_qA.SetAngle(i), m = this.m_qB.SetAngle(r), _ = P.MulRV(_, X.SubVV(this.m_linearOffset, this.m_localCenterA, X.s_t0), this.m_rA), m = P.MulRV(m, X.NegV(this.m_localCenterB, X.s_t0), this.m_rB), h = this.m_invMassA, u = this.m_invMassB, c = this.m_invIA, f = this.m_invIB, d = this.m_K;
            d.ex.x = h + u + c * _.y * _.y + f * m.y * m.y, d.ex.y = -c * _.x * _.y - f * m.x * m.y, 
            d.ey.x = d.ex.y, d.ey.y = h + u + c * _.x * _.x + f * m.x * m.x, d.GetInverse(this.m_linearMass), 
            this.m_angularMass = c + f, 0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass), 
            X.SubVV(X.AddVV(o, m, X.s_t0), X.AddVV(e, _, X.s_t1), this.m_linearError), this.m_angularError = r - i - this.m_angularOffset, 
            t.step.warmStarting ? (this.m_linearImpulse.SelfMul(t.step.dtRatio), this.m_angularImpulse *= t.step.dtRatio, 
            d = this.m_linearImpulse, s.SelfMulSub(h, d), n -= c * (X.CrossVV(_, d) + this.m_angularImpulse), 
            a.SelfMulAdd(u, d), l += f * (X.CrossVV(m, d) + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(), 
            this.m_angularImpulse = 0), t.velocities[this.m_indexA].w = n, t.velocities[this.m_indexB].w = l;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e = t.velocities[this.m_indexA].v, i = t.velocities[this.m_indexA].w, s = t.velocities[this.m_indexB].v, n = t.velocities[this.m_indexB].w, o = this.m_invMassA, r = this.m_invMassB, a = this.m_invIA, l = this.m_invIB, _ = t.step.dt, m = t.step.inv_dt, h = n - i + m * this.m_correctionFactor * this.m_angularError, h = -this.m_angularMass * h, u = this.m_angularImpulse, c = _ * this.m_maxTorque, c = (this.m_angularImpulse = M(this.m_angularImpulse + h, -c, c), 
            i -= a * (h = this.m_angularImpulse - u), this.m_rA), u = this.m_rB, h = X.AddVV(X.SubVV(X.AddVV(s, X.CrossSV(n += l * h, u, X.s_t0), X.s_t0), X.AddVV(e, X.CrossSV(i, c, X.s_t1), X.s_t1), X.s_t2), X.MulSV(m * this.m_correctionFactor, this.m_linearError, X.s_t3), Gs.SolveVelocityConstraints_s_Cdot_v2), m = d.MulMV(this.m_linearMass, h, Gs.SolveVelocityConstraints_s_impulse_v2).SelfNeg(), h = Gs.SolveVelocityConstraints_s_oldImpulse_v2.Copy(this.m_linearImpulse), _ = (this.m_linearImpulse.SelfAdd(m), 
            _ * this.m_maxForce);
            this.m_linearImpulse.LengthSquared() > _ * _ && (this.m_linearImpulse.Normalize(), 
            this.m_linearImpulse.SelfMul(_)), X.SubVV(this.m_linearImpulse, h, m), e.SelfMulSub(o, m), 
            i -= a * X.CrossVV(c, m), s.SelfMulAdd(r, m), n += l * X.CrossVV(u, m), t.velocities[this.m_indexA].w = i, 
            t.velocities[this.m_indexB].w = n;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            return !0;
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex;
            t("  const jd: b2MotorJointDef = new b2MotorJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.linearOffset.Set(%.15f, %.15f);\n", this.m_linearOffset.x, this.m_linearOffset.y), 
            t("  jd.angularOffset = %.15f;\n", this.m_angularOffset), t("  jd.maxForce = %.15f;\n", this.m_maxForce), 
            t("  jd.maxTorque = %.15f;\n", this.m_maxTorque), t("  jd.correctionFactor = %.15f;\n", this.m_correctionFactor), 
            t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    } ]);
    var Is = Gs;
    function Gs(t) {
        _classCallCheck(this, Gs);
        var e = _possibleConstructorReturn(this, (Gs.__proto__ || Object.getPrototypeOf(Gs)).call(this, t));
        return e.m_linearOffset = new X(), e.m_angularOffset = 0, e.m_linearImpulse = new X(), 
        e.m_angularImpulse = 0, e.m_maxForce = 0, e.m_maxTorque = 0, e.m_correctionFactor = .3, 
        e.m_indexA = 0, e.m_indexB = 0, e.m_rA = new X(), e.m_rB = new X(), e.m_localCenterA = new X(), 
        e.m_localCenterB = new X(), e.m_linearError = new X(), e.m_angularError = 0, e.m_invMassA = 0, 
        e.m_invMassB = 0, e.m_invIA = 0, e.m_invIB = 0, e.m_linearMass = new d(), e.m_angularMass = 0, 
        e.m_qA = new P(), e.m_qB = new P(), e.m_K = new d(), e.m_linearOffset.Copy(f(t.linearOffset, X.ZERO)), 
        e.m_linearImpulse.SetZero(), e.m_maxForce = f(t.maxForce, 0), e.m_maxTorque = f(t.maxTorque, 0), 
        e.m_correctionFactor = f(t.correctionFactor, .3), e;
    }
    Is.SolveVelocityConstraints_s_Cdot_v2 = new X(), Is.SolveVelocityConstraints_s_impulse_v2 = new X(), 
    Is.SolveVelocityConstraints_s_oldImpulse_v2 = new X();
    _inherits(Fs, ms);
    var Ds = Fs;
    function Fs() {
        _classCallCheck(this, Fs);
        var t = _possibleConstructorReturn(this, (Fs.__proto__ || Object.getPrototypeOf(Fs)).call(this, N.b2JointType.e_mouseJoint));
        return t.target = new X(), t.maxForce = 0, t.frequencyHz = 5, t.dampingRatio = .7, 
        t;
    }
    _inherits(Rs, hs), _createClass(Rs, [ {
        key: "SetTarget",
        value: function(t) {
            this.m_bodyB.IsAwake() || this.m_bodyB.SetAwake(!0), this.m_targetA.Copy(t);
        }
    }, {
        key: "GetTarget",
        value: function() {
            return this.m_targetA;
        }
    }, {
        key: "SetMaxForce",
        value: function(t) {
            this.m_maxForce = t;
        }
    }, {
        key: "GetMaxForce",
        value: function() {
            return this.m_maxForce;
        }
    }, {
        key: "SetFrequency",
        value: function(t) {
            this.m_frequencyHz = t;
        }
    }, {
        key: "GetFrequency",
        value: function() {
            return this.m_frequencyHz;
        }
    }, {
        key: "SetDampingRatio",
        value: function(t) {
            this.m_dampingRatio = t;
        }
    }, {
        key: "GetDampingRatio",
        value: function() {
            return this.m_dampingRatio;
        }
    }, {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIB = this.m_bodyB.m_invI;
            var e = t.positions[this.m_indexB].c, i = t.positions[this.m_indexB].a, s = t.velocities[this.m_indexB].v, n = t.velocities[this.m_indexB].w, i = this.m_qB.SetAngle(i), o = this.m_bodyB.GetMass(), r = 2 * y * this.m_frequencyHz, a = 2 * o * this.m_dampingRatio * r, o = o * (r * r), r = t.step.dt, a = (this.m_gamma = r * (a + r * o), 
            0 !== this.m_gamma && (this.m_gamma = 1 / this.m_gamma), this.m_beta = r * o * this.m_gamma, 
            X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), P.MulRV(i, this.m_lalcB, this.m_rB), 
            this.m_K);
            a.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma, 
            a.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y, a.ey.x = a.ex.y, a.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma, 
            a.GetInverse(this.m_mass), this.m_C.x = e.x + this.m_rB.x - this.m_targetA.x, this.m_C.y = e.y + this.m_rB.y - this.m_targetA.y, 
            this.m_C.SelfMul(this.m_beta), n *= .98, t.step.warmStarting ? (this.m_impulse.SelfMul(t.step.dtRatio), 
            s.x += this.m_invMassB * this.m_impulse.x, s.y += this.m_invMassB * this.m_impulse.y, 
            n += this.m_invIB * X.CrossVV(this.m_rB, this.m_impulse)) : this.m_impulse.SetZero(), 
            t.velocities[this.m_indexB].w = n;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e = t.velocities[this.m_indexB].v, i = t.velocities[this.m_indexB].w, s = X.AddVCrossSV(e, i, this.m_rB, Rs.SolveVelocityConstraints_s_Cdot), s = d.MulMV(this.m_mass, X.AddVV(s, X.AddVV(this.m_C, X.MulSV(this.m_gamma, this.m_impulse, X.s_t0), X.s_t0), X.s_t0).SelfNeg(), Rs.SolveVelocityConstraints_s_impulse), n = Rs.SolveVelocityConstraints_s_oldImpulse.Copy(this.m_impulse), o = (this.m_impulse.SelfAdd(s), 
            t.step.dt * this.m_maxForce);
            this.m_impulse.LengthSquared() > o * o && this.m_impulse.SelfMul(o / this.m_impulse.Length()), 
            X.SubVV(this.m_impulse, n, s), e.SelfMulAdd(this.m_invMassB, s), i += this.m_invIB * X.CrossVV(this.m_rB, s), 
            t.velocities[this.m_indexB].w = i;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            return !0;
        }
    }, {
        key: "GetAnchorA",
        value: function(t) {
            return t.x = this.m_targetA.x, t.y = this.m_targetA.y, t;
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return X.MulSV(t, this.m_impulse, e);
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return 0;
        }
    }, {
        key: "Dump",
        value: function(t) {
            t("Mouse joint dumping is not supported.\n");
        }
    }, {
        key: "ShiftOrigin",
        value: function(t) {
            this.m_targetA.SelfSub(t);
        }
    } ]);
    var Ts = Rs;
    function Rs(t) {
        _classCallCheck(this, Rs);
        var e = _possibleConstructorReturn(this, (Rs.__proto__ || Object.getPrototypeOf(Rs)).call(this, t));
        return e.m_localAnchorB = new X(), e.m_targetA = new X(), e.m_frequencyHz = 0, e.m_dampingRatio = 0, 
        e.m_beta = 0, e.m_impulse = new X(), e.m_maxForce = 0, e.m_gamma = 0, e.m_indexA = 0, 
        e.m_indexB = 0, e.m_rB = new X(), e.m_localCenterB = new X(), e.m_invMassB = 0, 
        e.m_invIB = 0, e.m_mass = new d(), e.m_C = new X(), e.m_qB = new P(), e.m_lalcB = new X(), 
        e.m_K = new d(), e.m_targetA.Copy(f(t.target, X.ZERO)), F.MulTXV(e.m_bodyB.GetTransform(), e.m_targetA, e.m_localAnchorB), 
        e.m_maxForce = f(t.maxForce, 0), e.m_impulse.SetZero(), e.m_frequencyHz = f(t.frequencyHz, 0), 
        e.m_dampingRatio = f(t.dampingRatio, 0), e.m_beta = 0, e.m_gamma = 0, e;
    }
    Ts.SolveVelocityConstraints_s_Cdot = new X(), Ts.SolveVelocityConstraints_s_impulse = new X(), 
    Ts.SolveVelocityConstraints_s_oldImpulse = new X();
    _inherits(qs, ms), _createClass(qs, [ {
        key: "Initialize",
        value: function(t, e, i, s) {
            this.bodyA = t, this.bodyB = e, this.bodyA.GetLocalPoint(i, this.localAnchorA), 
            this.bodyB.GetLocalPoint(i, this.localAnchorB), this.bodyA.GetLocalVector(s, this.localAxisA), 
            this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
        }
    } ]);
    var Ls = qs;
    function qs() {
        _classCallCheck(this, qs);
        var t = _possibleConstructorReturn(this, (qs.__proto__ || Object.getPrototypeOf(qs)).call(this, N.b2JointType.e_prismaticJoint));
        return t.localAnchorA = new X(), t.localAnchorB = new X(), t.localAxisA = new X(1, 0), 
        t.referenceAngle = 0, t.enableLimit = !1, t.lowerTranslation = 0, t.upperTranslation = 0, 
        t.enableMotor = !1, t.maxMotorForce = 0, t.motorSpeed = 0, t;
    }
    _inherits(w, hs), _createClass(w, [ {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
            var e = t.positions[this.m_indexA].c, i = t.positions[this.m_indexA].a, s = t.velocities[this.m_indexA].v, n = t.velocities[this.m_indexA].w, o = t.positions[this.m_indexB].c, r = t.positions[this.m_indexB].a, a = t.velocities[this.m_indexB].v, l = t.velocities[this.m_indexB].w, i = this.m_qA.SetAngle(i), r = this.m_qB.SetAngle(r), _ = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(i, this.m_lalcA, this.m_rA)), r = (X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(r, this.m_lalcB, this.m_rB)), o = X.AddVV(X.SubVV(o, e, X.s_t0), X.SubVV(r, _, X.s_t1), w.InitVelocityConstraints_s_d), e = this.m_invMassA, m = this.m_invMassB, h = this.m_invIA, u = this.m_invIB;
            P.MulRV(i, this.m_localXAxisA, this.m_axis), this.m_a1 = X.CrossVV(X.AddVV(o, _, X.s_t0), this.m_axis), 
            this.m_a2 = X.CrossVV(r, this.m_axis), this.m_motorMass = e + m + h * this.m_a1 * this.m_a1 + u * this.m_a2 * this.m_a2, 
            0 < this.m_motorMass && (this.m_motorMass = 1 / this.m_motorMass), P.MulRV(i, this.m_localYAxisA, this.m_perp), 
            this.m_s1 = X.CrossVV(X.AddVV(o, _, X.s_t0), this.m_perp), this.m_s2 = X.CrossVV(r, this.m_perp), 
            this.m_K.ex.x = e + m + h * this.m_s1 * this.m_s1 + u * this.m_s2 * this.m_s2, this.m_K.ex.y = h * this.m_s1 + u * this.m_s2, 
            this.m_K.ex.z = h * this.m_s1 * this.m_a1 + u * this.m_s2 * this.m_a2, this.m_K.ey.x = this.m_K.ex.y, 
            this.m_K.ey.y = h + u, 0 === this.m_K.ey.y && (this.m_K.ey.y = 1), this.m_K.ey.z = h * this.m_a1 + u * this.m_a2, 
            this.m_K.ez.x = this.m_K.ex.z, this.m_K.ez.y = this.m_K.ey.z, this.m_K.ez.z = e + m + h * this.m_a1 * this.m_a1 + u * this.m_a2 * this.m_a2, 
            this.m_enableLimit ? (i = X.DotVV(this.m_axis, o), R(this.m_upperTranslation - this.m_lowerTranslation) < 2 * G ? this.m_limitState = N.b2LimitState.e_equalLimits : i <= this.m_lowerTranslation ? this.m_limitState !== N.b2LimitState.e_atLowerLimit && (this.m_limitState = N.b2LimitState.e_atLowerLimit, 
            this.m_impulse.z = 0) : i >= this.m_upperTranslation ? this.m_limitState !== N.b2LimitState.e_atUpperLimit && (this.m_limitState = N.b2LimitState.e_atUpperLimit, 
            this.m_impulse.z = 0) : (this.m_limitState = N.b2LimitState.e_inactiveLimit, this.m_impulse.z = 0)) : (this.m_limitState = N.b2LimitState.e_inactiveLimit, 
            this.m_impulse.z = 0), this.m_enableMotor || (this.m_motorImpulse = 0), t.step.warmStarting ? (this.m_impulse.SelfMul(t.step.dtRatio), 
            this.m_motorImpulse *= t.step.dtRatio, _ = X.AddVV(X.MulSV(this.m_impulse.x, this.m_perp, X.s_t0), X.MulSV(this.m_motorImpulse + this.m_impulse.z, this.m_axis, X.s_t1), w.InitVelocityConstraints_s_P), 
            r = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, 
            o = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2, 
            s.SelfMulSub(e, _), n -= h * r, a.SelfMulAdd(m, _), l += u * o) : (this.m_impulse.SetZero(), 
            this.m_motorImpulse = 0), t.velocities[this.m_indexA].w = n, t.velocities[this.m_indexB].w = l;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e, i, s, n, o = t.velocities[this.m_indexA].v, r = t.velocities[this.m_indexA].w, a = t.velocities[this.m_indexB].v, l = t.velocities[this.m_indexB].w, _ = this.m_invMassA, m = this.m_invMassB, h = this.m_invIA, u = this.m_invIB, c = (this.m_enableMotor && this.m_limitState !== N.b2LimitState.e_equalLimits && (e = X.DotVV(this.m_axis, X.SubVV(a, o, X.s_t0)) + this.m_a2 * l - this.m_a1 * r, 
            e = this.m_motorMass * (this.m_motorSpeed - e), c = this.m_motorImpulse, f = t.step.dt * this.m_maxMotorForce, 
            this.m_motorImpulse = M(this.m_motorImpulse + e, -f, f), e = this.m_motorImpulse - c, 
            f = X.MulSV(e, this.m_axis, w.SolveVelocityConstraints_s_P), c = e * this.m_a1, 
            e = e * this.m_a2, o.SelfMulSub(_, f), r -= h * c, a.SelfMulAdd(m, f), l += u * e), 
            X.DotVV(this.m_perp, X.SubVV(a, o, X.s_t0)) + this.m_s2 * l - this.m_s1 * r), f = l - r;
            this.m_enableLimit && this.m_limitState !== N.b2LimitState.e_inactiveLimit ? (e = X.DotVV(this.m_axis, X.SubVV(a, o, X.s_t0)) + this.m_a2 * l - this.m_a1 * r, 
            n = w.SolveVelocityConstraints_s_f1.Copy(this.m_impulse), e = this.m_K.Solve33(-c, -f, -e, w.SolveVelocityConstraints_s_df3), 
            this.m_impulse.SelfAdd(e), this.m_limitState === N.b2LimitState.e_atLowerLimit ? this.m_impulse.z = D(this.m_impulse.z, 0) : this.m_limitState === N.b2LimitState.e_atUpperLimit && (this.m_impulse.z = L(this.m_impulse.z, 0)), 
            i = -c - (this.m_impulse.z - n.z) * this.m_K.ez.x, s = -f - (this.m_impulse.z - n.z) * this.m_K.ez.y, 
            (i = this.m_K.Solve22(i, s, w.SolveVelocityConstraints_s_f2r)).x += n.x, i.y += n.y, 
            this.m_impulse.x = i.x, this.m_impulse.y = i.y, e.x = this.m_impulse.x - n.x, e.y = this.m_impulse.y - n.y, 
            e.z = this.m_impulse.z - n.z, s = X.AddVV(X.MulSV(e.x, this.m_perp, X.s_t0), X.MulSV(e.z, this.m_axis, X.s_t1), w.SolveVelocityConstraints_s_P), 
            i = e.x * this.m_s1 + e.y + e.z * this.m_a1, n = e.x * this.m_s2 + e.y + e.z * this.m_a2, 
            o.SelfMulSub(_, s), r -= h * i, a.SelfMulAdd(m, s), l += u * n) : (e = this.m_K.Solve22(-c, -f, w.SolveVelocityConstraints_s_df2), 
            this.m_impulse.x += e.x, this.m_impulse.y += e.y, i = X.MulSV(e.x, this.m_perp, w.SolveVelocityConstraints_s_P), 
            s = e.x * this.m_s1 + e.y, n = e.x * this.m_s2 + e.y, o.SelfMulSub(_, i), r -= h * s, 
            a.SelfMulAdd(m, i), l += u * n), t.velocities[this.m_indexA].w = r, t.velocities[this.m_indexB].w = l;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            var e, i, s = t.positions[this.m_indexA].c, n = t.positions[this.m_indexA].a, o = t.positions[this.m_indexB].c, r = t.positions[this.m_indexB].a, a = this.m_qA.SetAngle(n), l = this.m_qB.SetAngle(r), _ = this.m_invMassA, m = this.m_invMassB, h = this.m_invIA, u = this.m_invIB, c = P.MulRV(a, this.m_lalcA, this.m_rA), l = P.MulRV(l, this.m_lalcB, this.m_rB), f = X.SubVV(X.AddVV(o, l, X.s_t0), X.AddVV(s, c, X.s_t1), w.SolvePositionConstraints_s_d), d = P.MulRV(a, this.m_localXAxisA, this.m_axis), y = X.CrossVV(X.AddVV(f, c, X.s_t0), d), p = X.CrossVV(l, d), a = P.MulRV(a, this.m_localYAxisA, this.m_perp), c = X.CrossVV(X.AddVV(f, c, X.s_t0), a), l = X.CrossVV(l, a), v = w.SolvePositionConstraints_s_impulse, x = X.DotVV(a, f), C = r - n - this.m_referenceAngle, B = R(x), S = R(C), b = !1, A = 0, g = (this.m_enableLimit && (f = X.DotVV(d, f), 
            R(this.m_upperTranslation - this.m_lowerTranslation) < 2 * G ? (A = M(f, -O, O), 
            B = D(B, R(f)), b = !0) : f <= this.m_lowerTranslation ? (A = M(f - this.m_lowerTranslation + G, -O, 0), 
            B = D(B, this.m_lowerTranslation - f), b = !0) : f >= this.m_upperTranslation && (A = M(f - this.m_upperTranslation - G, 0, O), 
            B = D(B, f - this.m_upperTranslation), b = !0)), b ? (0 === (f = h + u) && (f = 1), 
            b = h * y + u * p, g = _ + m + h * y * y + u * p * p, (V = this.m_K3).ex.SetXYZ(_ + m + h * c * c + u * l * l, i = h * c + u * l, e = h * c * y + u * l * p), 
            V.ey.SetXYZ(i, f, b), V.ez.SetXYZ(e, b, g), v = V.Solve33(-x, -C, -A, v)) : (0 === (i = h + u) && (i = 1), 
            (f = this.m_K2).ex.Set(_ + m + h * c * c + u * l * l, e = h * c + u * l), f.ey.Set(e, i), 
            b = f.Solve(-x, -C, w.SolvePositionConstraints_s_impulse1), v.x = b.x, v.y = b.y, 
            v.z = 0), X.AddVV(X.MulSV(v.x, a, X.s_t0), X.MulSV(v.z, d, X.s_t1), w.SolvePositionConstraints_s_P)), V = v.x * c + v.y + v.z * y, A = v.x * l + v.y + v.z * p;
            return s.SelfMulSub(_, g), n -= h * V, o.SelfMulAdd(m, g), r += u * A, t.positions[this.m_indexA].a = n, 
            t.positions[this.m_indexB].a = r, B <= G && S <= k;
        }
    }, {
        key: "GetAnchorA",
        value: function(t) {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t);
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return e.x = t * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), 
            e.y = t * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y), 
            e;
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return t * this.m_impulse.y;
        }
    }, {
        key: "GetLocalAnchorA",
        value: function() {
            return this.m_localAnchorA;
        }
    }, {
        key: "GetLocalAnchorB",
        value: function() {
            return this.m_localAnchorB;
        }
    }, {
        key: "GetLocalAxisA",
        value: function() {
            return this.m_localXAxisA;
        }
    }, {
        key: "GetReferenceAngle",
        value: function() {
            return this.m_referenceAngle;
        }
    }, {
        key: "GetJointTranslation",
        value: function() {
            var t = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, w.GetJointTranslation_s_pA), e = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, w.GetJointTranslation_s_pB), e = X.SubVV(e, t, w.GetJointTranslation_s_d), t = this.m_bodyA.GetWorldVector(this.m_localXAxisA, w.GetJointTranslation_s_axis);
            return X.DotVV(e, t);
        }
    }, {
        key: "GetJointSpeed",
        value: function() {
            var t = this.m_bodyA, e = this.m_bodyB, i = (X.SubVV(this.m_localAnchorA, t.m_sweep.localCenter, this.m_lalcA), 
            P.MulRV(t.m_xf.q, this.m_lalcA, this.m_rA)), s = (X.SubVV(this.m_localAnchorB, e.m_sweep.localCenter, this.m_lalcB), 
            P.MulRV(e.m_xf.q, this.m_lalcB, this.m_rB)), n = X.AddVV(t.m_sweep.c, i, X.s_t0), o = X.AddVV(e.m_sweep.c, s, X.s_t1), o = X.SubVV(o, n, X.s_t2), n = t.GetWorldVector(this.m_localXAxisA, this.m_axis), r = t.m_linearVelocity, a = e.m_linearVelocity, t = t.m_angularVelocity, e = e.m_angularVelocity;
            return X.DotVV(o, X.CrossSV(t, n, X.s_t0)) + X.DotVV(n, X.SubVV(X.AddVCrossSV(a, e, s, X.s_t0), X.AddVCrossSV(r, t, i, X.s_t1), X.s_t0));
        }
    }, {
        key: "IsLimitEnabled",
        value: function() {
            return this.m_enableLimit;
        }
    }, {
        key: "EnableLimit",
        value: function(t) {
            t !== this.m_enableLimit && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_enableLimit = t, this.m_impulse.z = 0);
        }
    }, {
        key: "GetLowerLimit",
        value: function() {
            return this.m_lowerTranslation;
        }
    }, {
        key: "GetUpperLimit",
        value: function() {
            return this.m_upperTranslation;
        }
    }, {
        key: "SetLimits",
        value: function(t, e) {
            t === this.m_lowerTranslation && e === this.m_upperTranslation || (this.m_bodyA.SetAwake(!0), 
            this.m_bodyB.SetAwake(!0), this.m_lowerTranslation = t, this.m_upperTranslation = e, 
            this.m_impulse.z = 0);
        }
    }, {
        key: "IsMotorEnabled",
        value: function() {
            return this.m_enableMotor;
        }
    }, {
        key: "EnableMotor",
        value: function(t) {
            t !== this.m_enableMotor && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_enableMotor = t);
        }
    }, {
        key: "SetMotorSpeed",
        value: function(t) {
            t !== this.m_motorSpeed && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_motorSpeed = t);
        }
    }, {
        key: "GetMotorSpeed",
        value: function() {
            return this.m_motorSpeed;
        }
    }, {
        key: "SetMaxMotorForce",
        value: function(t) {
            t !== this.m_maxMotorForce && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_maxMotorForce = t);
        }
    }, {
        key: "GetMaxMotorForce",
        value: function() {
            return this.m_maxMotorForce;
        }
    }, {
        key: "GetMotorForce",
        value: function(t) {
            return t * this.m_motorImpulse;
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex;
            t("  const jd: b2PrismaticJointDef = new b2PrismaticJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), 
            t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), 
            t("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y), 
            t("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle), t("  jd.enableLimit = %s;\n", this.m_enableLimit ? "true" : "false"), 
            t("  jd.lowerTranslation = %.15f;\n", this.m_lowerTranslation), t("  jd.upperTranslation = %.15f;\n", this.m_upperTranslation), 
            t("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false"), t("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed), 
            t("  jd.maxMotorForce = %.15f;\n", this.m_maxMotorForce), t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    } ]);
    var zs = w;
    function w(t) {
        _classCallCheck(this, w);
        var e = _possibleConstructorReturn(this, (w.__proto__ || Object.getPrototypeOf(w)).call(this, t));
        return e.m_localAnchorA = new X(), e.m_localAnchorB = new X(), e.m_localXAxisA = new X(), 
        e.m_localYAxisA = new X(), e.m_referenceAngle = 0, e.m_impulse = new l(0, 0, 0), 
        e.m_motorImpulse = 0, e.m_lowerTranslation = 0, e.m_upperTranslation = 0, e.m_maxMotorForce = 0, 
        e.m_motorSpeed = 0, e.m_enableLimit = !1, e.m_enableMotor = !1, e.m_limitState = N.b2LimitState.e_inactiveLimit, 
        e.m_indexA = 0, e.m_indexB = 0, e.m_localCenterA = new X(), e.m_localCenterB = new X(), 
        e.m_invMassA = 0, e.m_invMassB = 0, e.m_invIA = 0, e.m_invIB = 0, e.m_axis = new X(0, 0), 
        e.m_perp = new X(0, 0), e.m_s1 = 0, e.m_s2 = 0, e.m_a1 = 0, e.m_a2 = 0, e.m_K = new ct(), 
        e.m_K3 = new ct(), e.m_K2 = new d(), e.m_motorMass = 0, e.m_qA = new P(), e.m_qB = new P(), 
        e.m_lalcA = new X(), e.m_lalcB = new X(), e.m_rA = new X(), e.m_rB = new X(), e.m_localAnchorA.Copy(f(t.localAnchorA, X.ZERO)), 
        e.m_localAnchorB.Copy(f(t.localAnchorB, X.ZERO)), e.m_localXAxisA.Copy(f(t.localAxisA, new X(1, 0))).SelfNormalize(), 
        X.CrossOneV(e.m_localXAxisA, e.m_localYAxisA), e.m_referenceAngle = f(t.referenceAngle, 0), 
        e.m_lowerTranslation = f(t.lowerTranslation, 0), e.m_upperTranslation = f(t.upperTranslation, 0), 
        e.m_maxMotorForce = f(t.maxMotorForce, 0), e.m_motorSpeed = f(t.motorSpeed, 0), 
        e.m_enableLimit = f(t.enableLimit, !1), e.m_enableMotor = f(t.enableMotor, !1), 
        e;
    }
    zs.InitVelocityConstraints_s_d = new X(), zs.InitVelocityConstraints_s_P = new X(), 
    zs.SolveVelocityConstraints_s_P = new X(), zs.SolveVelocityConstraints_s_f2r = new X(), 
    zs.SolveVelocityConstraints_s_f1 = new l(), zs.SolveVelocityConstraints_s_df3 = new l(), 
    zs.SolveVelocityConstraints_s_df2 = new X(), zs.SolvePositionConstraints_s_d = new X(), 
    zs.SolvePositionConstraints_s_impulse = new l(), zs.SolvePositionConstraints_s_impulse1 = new X(), 
    zs.SolvePositionConstraints_s_P = new X(), zs.GetJointTranslation_s_pA = new X(), 
    zs.GetJointTranslation_s_pB = new X(), zs.GetJointTranslation_s_d = new X(), zs.GetJointTranslation_s_axis = new X();
    _inherits(Es, ms), _createClass(Es, [ {
        key: "Initialize",
        value: function(t, e, i, s, n, o, r) {
            this.bodyA = t, this.bodyB = e, this.groundAnchorA.Copy(i), this.groundAnchorB.Copy(s), 
            this.bodyA.GetLocalPoint(n, this.localAnchorA), this.bodyB.GetLocalPoint(o, this.localAnchorB), 
            this.lengthA = X.DistanceVV(n, i), this.lengthB = X.DistanceVV(o, s), this.ratio = r;
        }
    } ]);
    var Os = Es;
    function Es() {
        _classCallCheck(this, Es);
        var t = _possibleConstructorReturn(this, (Es.__proto__ || Object.getPrototypeOf(Es)).call(this, N.b2JointType.e_pulleyJoint));
        return t.groundAnchorA = new X(-1, 1), t.groundAnchorB = new X(1, 1), t.localAnchorA = new X(-1, 0), 
        t.localAnchorB = new X(1, 0), t.lengthA = 0, t.lengthB = 0, t.ratio = 1, t.collideConnected = !0, 
        t;
    }
    _inherits(Js, hs), _createClass(Js, [ {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
            var e = t.positions[this.m_indexA].c, i = t.positions[this.m_indexA].a, s = t.velocities[this.m_indexA].v, n = t.velocities[this.m_indexA].w, o = t.positions[this.m_indexB].c, r = t.positions[this.m_indexB].a, a = t.velocities[this.m_indexB].v, l = t.velocities[this.m_indexB].w, i = this.m_qA.SetAngle(i), r = this.m_qB.SetAngle(r), i = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(i, this.m_lalcA, this.m_rA), X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(r, this.m_lalcB, this.m_rB), this.m_uA.Copy(e).SelfAdd(this.m_rA).SelfSub(this.m_groundAnchorA), 
            this.m_uB.Copy(o).SelfAdd(this.m_rB).SelfSub(this.m_groundAnchorB), this.m_uA.Length()), r = this.m_uB.Length(), e = (.08 < i ? this.m_uA.SelfMul(1 / i) : this.m_uA.SetZero(), 
            .08 < r ? this.m_uB.SelfMul(1 / r) : this.m_uB.SetZero(), X.CrossVV(this.m_rA, this.m_uA)), o = X.CrossVV(this.m_rB, this.m_uB), i = this.m_invMassA + this.m_invIA * e * e, r = this.m_invMassB + this.m_invIB * o * o;
            this.m_mass = i + this.m_ratio * this.m_ratio * r, 0 < this.m_mass && (this.m_mass = 1 / this.m_mass), 
            t.step.warmStarting ? (this.m_impulse *= t.step.dtRatio, e = X.MulSV(-this.m_impulse, this.m_uA, Js.InitVelocityConstraints_s_PA), 
            o = X.MulSV(-this.m_ratio * this.m_impulse, this.m_uB, Js.InitVelocityConstraints_s_PB), 
            s.SelfMulAdd(this.m_invMassA, e), n += this.m_invIA * X.CrossVV(this.m_rA, e), a.SelfMulAdd(this.m_invMassB, o), 
            l += this.m_invIB * X.CrossVV(this.m_rB, o)) : this.m_impulse = 0, t.velocities[this.m_indexA].w = n, 
            t.velocities[this.m_indexB].w = l;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e = t.velocities[this.m_indexA].v, i = t.velocities[this.m_indexA].w, s = t.velocities[this.m_indexB].v, n = t.velocities[this.m_indexB].w, o = X.AddVCrossSV(e, i, this.m_rA, Js.SolveVelocityConstraints_s_vpA), r = X.AddVCrossSV(s, n, this.m_rB, Js.SolveVelocityConstraints_s_vpB), o = -X.DotVV(this.m_uA, o) - this.m_ratio * X.DotVV(this.m_uB, r), r = -this.m_mass * o, o = (this.m_impulse += r, 
            X.MulSV(-r, this.m_uA, Js.SolveVelocityConstraints_s_PA)), r = X.MulSV(-this.m_ratio * r, this.m_uB, Js.SolveVelocityConstraints_s_PB);
            e.SelfMulAdd(this.m_invMassA, o), i += this.m_invIA * X.CrossVV(this.m_rA, o), s.SelfMulAdd(this.m_invMassB, r), 
            n += this.m_invIB * X.CrossVV(this.m_rB, r), t.velocities[this.m_indexA].w = i, 
            t.velocities[this.m_indexB].w = n;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            var e = t.positions[this.m_indexA].c, i = t.positions[this.m_indexA].a, s = t.positions[this.m_indexB].c, n = t.positions[this.m_indexB].a, o = this.m_qA.SetAngle(i), r = this.m_qB.SetAngle(n), o = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(o, this.m_lalcA, this.m_rA)), r = (X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(r, this.m_lalcB, this.m_rB)), a = this.m_uA.Copy(e).SelfAdd(o).SelfSub(this.m_groundAnchorA), l = this.m_uB.Copy(s).SelfAdd(r).SelfSub(this.m_groundAnchorB), _ = a.Length(), m = l.Length(), h = (.08 < _ ? a.SelfMul(1 / _) : a.SetZero(), 
            .08 < m ? l.SelfMul(1 / m) : l.SetZero(), X.CrossVV(o, a)), u = X.CrossVV(r, l), h = this.m_invMassA + this.m_invIA * h * h, u = this.m_invMassB + this.m_invIB * u * u, h = h + this.m_ratio * this.m_ratio * u, u = (0 < h && (h = 1 / h), 
            this.m_constant - _ - this.m_ratio * m), _ = R(u), m = -h * u, h = X.MulSV(-m, a, Js.SolvePositionConstraints_s_PA), u = X.MulSV(-this.m_ratio * m, l, Js.SolvePositionConstraints_s_PB);
            return e.SelfMulAdd(this.m_invMassA, h), i += this.m_invIA * X.CrossVV(o, h), s.SelfMulAdd(this.m_invMassB, u), 
            n += this.m_invIB * X.CrossVV(r, u), t.positions[this.m_indexA].a = i, t.positions[this.m_indexB].a = n, 
            _ < G;
        }
    }, {
        key: "GetAnchorA",
        value: function(t) {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t);
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return e.x = t * this.m_impulse * this.m_uB.x, e.y = t * this.m_impulse * this.m_uB.y, 
            e;
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return 0;
        }
    }, {
        key: "GetGroundAnchorA",
        value: function() {
            return this.m_groundAnchorA;
        }
    }, {
        key: "GetGroundAnchorB",
        value: function() {
            return this.m_groundAnchorB;
        }
    }, {
        key: "GetLengthA",
        value: function() {
            return this.m_lengthA;
        }
    }, {
        key: "GetLengthB",
        value: function() {
            return this.m_lengthB;
        }
    }, {
        key: "GetRatio",
        value: function() {
            return this.m_ratio;
        }
    }, {
        key: "GetCurrentLengthA",
        value: function() {
            var t = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, Js.GetCurrentLengthA_s_p), e = this.m_groundAnchorA;
            return X.DistanceVV(t, e);
        }
    }, {
        key: "GetCurrentLengthB",
        value: function() {
            var t = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, Js.GetCurrentLengthB_s_p), e = this.m_groundAnchorB;
            return X.DistanceVV(t, e);
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex;
            t("  const jd: b2PulleyJointDef = new b2PulleyJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.groundAnchorA.Set(%.15f, %.15f);\n", this.m_groundAnchorA.x, this.m_groundAnchorA.y), 
            t("  jd.groundAnchorB.Set(%.15f, %.15f);\n", this.m_groundAnchorB.x, this.m_groundAnchorB.y), 
            t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), 
            t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), 
            t("  jd.lengthA = %.15f;\n", this.m_lengthA), t("  jd.lengthB = %.15f;\n", this.m_lengthB), 
            t("  jd.ratio = %.15f;\n", this.m_ratio), t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, {
        key: "ShiftOrigin",
        value: function(t) {
            this.m_groundAnchorA.SelfSub(t), this.m_groundAnchorB.SelfSub(t);
        }
    } ]);
    var js = Js;
    function Js(t) {
        _classCallCheck(this, Js);
        var e = _possibleConstructorReturn(this, (Js.__proto__ || Object.getPrototypeOf(Js)).call(this, t));
        return e.m_groundAnchorA = new X(), e.m_groundAnchorB = new X(), e.m_lengthA = 0, 
        e.m_lengthB = 0, e.m_localAnchorA = new X(), e.m_localAnchorB = new X(), e.m_constant = 0, 
        e.m_ratio = 0, e.m_impulse = 0, e.m_indexA = 0, e.m_indexB = 0, e.m_uA = new X(), 
        e.m_uB = new X(), e.m_rA = new X(), e.m_rB = new X(), e.m_localCenterA = new X(), 
        e.m_localCenterB = new X(), e.m_invMassA = 0, e.m_invMassB = 0, e.m_invIA = 0, e.m_invIB = 0, 
        e.m_mass = 0, e.m_qA = new P(), e.m_qB = new P(), e.m_lalcA = new X(), e.m_lalcB = new X(), 
        e.m_groundAnchorA.Copy(f(t.groundAnchorA, new X(-1, 1))), e.m_groundAnchorB.Copy(f(t.groundAnchorB, new X(1, 0))), 
        e.m_localAnchorA.Copy(f(t.localAnchorA, new X(-1, 0))), e.m_localAnchorB.Copy(f(t.localAnchorB, new X(1, 0))), 
        e.m_lengthA = f(t.lengthA, 0), e.m_lengthB = f(t.lengthB, 0), e.m_ratio = f(t.ratio, 1), 
        e.m_constant = f(t.lengthA, 0) + e.m_ratio * f(t.lengthB, 0), e.m_impulse = 0, e;
    }
    js.InitVelocityConstraints_s_PA = new X(), js.InitVelocityConstraints_s_PB = new X(), 
    js.SolveVelocityConstraints_s_vpA = new X(), js.SolveVelocityConstraints_s_vpB = new X(), 
    js.SolveVelocityConstraints_s_PA = new X(), js.SolveVelocityConstraints_s_PB = new X(), 
    js.SolvePositionConstraints_s_PA = new X(), js.SolvePositionConstraints_s_PB = new X(), 
    js.GetCurrentLengthA_s_p = new X(), js.GetCurrentLengthB_s_p = new X();
    _inherits(Xs, ms), _createClass(Xs, [ {
        key: "Initialize",
        value: function(t, e, i) {
            this.bodyA = t, this.bodyB = e, this.bodyA.GetLocalPoint(i, this.localAnchorA), 
            this.bodyB.GetLocalPoint(i, this.localAnchorB), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
        }
    } ]);
    var Ns = Xs;
    function Xs() {
        _classCallCheck(this, Xs);
        var t = _possibleConstructorReturn(this, (Xs.__proto__ || Object.getPrototypeOf(Xs)).call(this, N.b2JointType.e_revoluteJoint));
        return t.localAnchorA = new X(0, 0), t.localAnchorB = new X(0, 0), t.referenceAngle = 0, 
        t.enableLimit = !1, t.lowerAngle = 0, t.upperAngle = 0, t.enableMotor = !1, t.motorSpeed = 0, 
        t.maxMotorTorque = 0, t;
    }
    _inherits(Zs, hs), _createClass(Zs, [ {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
            var e = t.positions[this.m_indexA].a, i = t.velocities[this.m_indexA].v, s = t.velocities[this.m_indexA].w, n = t.positions[this.m_indexB].a, o = t.velocities[this.m_indexB].v, r = t.velocities[this.m_indexB].w, a = this.m_qA.SetAngle(e), l = this.m_qB.SetAngle(n), a = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(a, this.m_lalcA, this.m_rA), X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(l, this.m_lalcB, this.m_rB), this.m_invMassA), l = this.m_invMassB, _ = this.m_invIA, m = this.m_invIB, h = _ + m === 0;
            this.m_mass.ex.x = a + l + this.m_rA.y * this.m_rA.y * _ + this.m_rB.y * this.m_rB.y * m, 
            this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * _ - this.m_rB.y * this.m_rB.x * m, 
            this.m_mass.ez.x = -this.m_rA.y * _ - this.m_rB.y * m, this.m_mass.ex.y = this.m_mass.ey.x, 
            this.m_mass.ey.y = a + l + this.m_rA.x * this.m_rA.x * _ + this.m_rB.x * this.m_rB.x * m, 
            this.m_mass.ez.y = this.m_rA.x * _ + this.m_rB.x * m, this.m_mass.ex.z = this.m_mass.ez.x, 
            this.m_mass.ey.z = this.m_mass.ez.y, this.m_mass.ez.z = _ + m, this.m_motorMass = _ + m, 
            0 < this.m_motorMass && (this.m_motorMass = 1 / this.m_motorMass), this.m_enableMotor && !h || (this.m_motorImpulse = 0), 
            this.m_enableLimit && !h ? (h = n - e - this.m_referenceAngle, R(this.m_upperAngle - this.m_lowerAngle) < 2 * k ? this.m_limitState = N.b2LimitState.e_equalLimits : h <= this.m_lowerAngle ? (this.m_limitState !== N.b2LimitState.e_atLowerLimit && (this.m_impulse.z = 0), 
            this.m_limitState = N.b2LimitState.e_atLowerLimit) : h >= this.m_upperAngle ? (this.m_limitState !== N.b2LimitState.e_atUpperLimit && (this.m_impulse.z = 0), 
            this.m_limitState = N.b2LimitState.e_atUpperLimit) : (this.m_limitState = N.b2LimitState.e_inactiveLimit, 
            this.m_impulse.z = 0)) : this.m_limitState = N.b2LimitState.e_inactiveLimit, t.step.warmStarting ? (this.m_impulse.SelfMul(t.step.dtRatio), 
            this.m_motorImpulse *= t.step.dtRatio, n = Zs.InitVelocityConstraints_s_P.Set(this.m_impulse.x, this.m_impulse.y), 
            i.SelfMulSub(a, n), s -= _ * (X.CrossVV(this.m_rA, n) + this.m_motorImpulse + this.m_impulse.z), 
            o.SelfMulAdd(l, n), r += m * (X.CrossVV(this.m_rB, n) + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(), 
            this.m_motorImpulse = 0), t.velocities[this.m_indexA].w = s, t.velocities[this.m_indexB].w = r;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e, i, s, n = t.velocities[this.m_indexA].v, o = t.velocities[this.m_indexA].w, r = t.velocities[this.m_indexB].v, a = t.velocities[this.m_indexB].w, l = this.m_invMassA, _ = this.m_invMassB, m = this.m_invIA, h = this.m_invIB, u = m + h === 0;
            this.m_enableMotor && this.m_limitState !== N.b2LimitState.e_equalLimits && !u && (i = a - o - this.m_motorSpeed, 
            i = -this.m_motorMass * i, e = this.m_motorImpulse, s = t.step.dt * this.m_maxMotorTorque, 
            this.m_motorImpulse = M(this.m_motorImpulse + i, -s, s), o -= m * (i = this.m_motorImpulse - e), 
            a += h * i), this.m_enableLimit && this.m_limitState !== N.b2LimitState.e_inactiveLimit && !u ? (s = X.SubVV(X.AddVCrossSV(r, a, this.m_rB, X.s_t0), X.AddVCrossSV(n, o, this.m_rA, X.s_t1), Zs.SolveVelocityConstraints_s_Cdot1), 
            e = this.m_mass.Solve33(s.x, s.y, a - o, Zs.SolveVelocityConstraints_s_impulse_v3).SelfNeg(), 
            this.m_limitState === N.b2LimitState.e_equalLimits ? this.m_impulse.SelfAdd(e) : this.m_limitState === N.b2LimitState.e_atLowerLimit ? this.m_impulse.z + e.z < 0 ? (i = -s.x + this.m_impulse.z * this.m_mass.ez.x, 
            u = -s.y + this.m_impulse.z * this.m_mass.ez.y, i = this.m_mass.Solve22(i, u, Zs.SolveVelocityConstraints_s_reduced_v2), 
            e.x = i.x, e.y = i.y, e.z = -this.m_impulse.z, this.m_impulse.x += i.x, this.m_impulse.y += i.y, 
            this.m_impulse.z = 0) : this.m_impulse.SelfAdd(e) : this.m_limitState === N.b2LimitState.e_atUpperLimit && (0 < this.m_impulse.z + e.z ? (u = -s.x + this.m_impulse.z * this.m_mass.ez.x, 
            i = -s.y + this.m_impulse.z * this.m_mass.ez.y, s = this.m_mass.Solve22(u, i, Zs.SolveVelocityConstraints_s_reduced_v2), 
            e.x = s.x, e.y = s.y, e.z = -this.m_impulse.z, this.m_impulse.x += s.x, this.m_impulse.y += s.y, 
            this.m_impulse.z = 0) : this.m_impulse.SelfAdd(e)), u = Zs.SolveVelocityConstraints_s_P.Set(e.x, e.y), 
            n.SelfMulSub(l, u), o -= m * (X.CrossVV(this.m_rA, u) + e.z), r.SelfMulAdd(_, u), 
            a += h * (X.CrossVV(this.m_rB, u) + e.z)) : (i = X.SubVV(X.AddVCrossSV(r, a, this.m_rB, X.s_t0), X.AddVCrossSV(n, o, this.m_rA, X.s_t1), Zs.SolveVelocityConstraints_s_Cdot_v2), 
            s = this.m_mass.Solve22(-i.x, -i.y, Zs.SolveVelocityConstraints_s_impulse_v2), this.m_impulse.x += s.x, 
            this.m_impulse.y += s.y, n.SelfMulSub(l, s), o -= m * X.CrossVV(this.m_rA, s), r.SelfMulAdd(_, s), 
            a += h * X.CrossVV(this.m_rB, s)), t.velocities[this.m_indexA].w = o, t.velocities[this.m_indexB].w = a;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            var e = t.positions[this.m_indexA].c, i = t.positions[this.m_indexA].a, s = t.positions[this.m_indexB].c, n = t.positions[this.m_indexB].a, o = this.m_qA.SetAngle(i), r = this.m_qB.SetAngle(n), a = 0, l = this.m_invIA + this.m_invIB === 0, l = (this.m_enableLimit && this.m_limitState !== N.b2LimitState.e_inactiveLimit && !l && (l = n - i - this.m_referenceAngle, 
            m = 0, this.m_limitState === N.b2LimitState.e_equalLimits ? (_ = M(l - this.m_lowerAngle, -S, S), 
            m = -this.m_motorMass * _, a = R(_)) : this.m_limitState === N.b2LimitState.e_atLowerLimit ? (a = -(_ = l - this.m_lowerAngle), 
            _ = M(_ + k, -S, 0), m = -this.m_motorMass * _) : this.m_limitState === N.b2LimitState.e_atUpperLimit && (_ = M((a = _ = l - this.m_upperAngle) - k, 0, S), 
            m = -this.m_motorMass * _), i -= this.m_invIA * m, n += this.m_invIB * m), o.SetAngle(i), 
            r.SetAngle(n), X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(o, this.m_lalcA, this.m_rA)), _ = (X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(r, this.m_lalcB, this.m_rB)), m = X.SubVV(X.AddVV(s, _, X.s_t0), X.AddVV(e, l, X.s_t1), Zs.SolvePositionConstraints_s_C_v2), o = m.Length(), r = this.m_invMassA, h = this.m_invMassB, u = this.m_invIA, c = this.m_invIB, f = this.m_K, f = (f.ex.x = r + h + u * l.y * l.y + c * _.y * _.y, 
            f.ex.y = -u * l.x * l.y - c * _.x * _.y, f.ey.x = f.ex.y, f.ey.y = r + h + u * l.x * l.x + c * _.x * _.x, 
            f.Solve(m.x, m.y, Zs.SolvePositionConstraints_s_impulse).SelfNeg());
            return e.SelfMulSub(r, f), i -= u * X.CrossVV(l, f), s.SelfMulAdd(h, f), n += c * X.CrossVV(_, f), 
            t.positions[this.m_indexA].a = i, t.positions[this.m_indexB].a = n, o <= G && a <= k;
        }
    }, {
        key: "GetAnchorA",
        value: function(t) {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t);
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return e.x = t * this.m_impulse.x, e.y = t * this.m_impulse.y, e;
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return t * this.m_impulse.z;
        }
    }, {
        key: "GetLocalAnchorA",
        value: function() {
            return this.m_localAnchorA;
        }
    }, {
        key: "GetLocalAnchorB",
        value: function() {
            return this.m_localAnchorB;
        }
    }, {
        key: "GetReferenceAngle",
        value: function() {
            return this.m_referenceAngle;
        }
    }, {
        key: "GetJointAngle",
        value: function() {
            return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
        }
    }, {
        key: "GetJointSpeed",
        value: function() {
            return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
        }
    }, {
        key: "IsMotorEnabled",
        value: function() {
            return this.m_enableMotor;
        }
    }, {
        key: "EnableMotor",
        value: function(t) {
            t !== this.m_enableMotor && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_enableMotor = t);
        }
    }, {
        key: "GetMotorTorque",
        value: function(t) {
            return t * this.m_motorImpulse;
        }
    }, {
        key: "GetMotorSpeed",
        value: function() {
            return this.m_motorSpeed;
        }
    }, {
        key: "SetMaxMotorTorque",
        value: function(t) {
            t !== this.m_maxMotorTorque && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_maxMotorTorque = t);
        }
    }, {
        key: "GetMaxMotorTorque",
        value: function() {
            return this.m_maxMotorTorque;
        }
    }, {
        key: "IsLimitEnabled",
        value: function() {
            return this.m_enableLimit;
        }
    }, {
        key: "EnableLimit",
        value: function(t) {
            t !== this.m_enableLimit && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_enableLimit = t, this.m_impulse.z = 0);
        }
    }, {
        key: "GetLowerLimit",
        value: function() {
            return this.m_lowerAngle;
        }
    }, {
        key: "GetUpperLimit",
        value: function() {
            return this.m_upperAngle;
        }
    }, {
        key: "SetLimits",
        value: function(t, e) {
            t === this.m_lowerAngle && e === this.m_upperAngle || (this.m_bodyA.SetAwake(!0), 
            this.m_bodyB.SetAwake(!0), this.m_impulse.z = 0, this.m_lowerAngle = t, this.m_upperAngle = e);
        }
    }, {
        key: "SetMotorSpeed",
        value: function(t) {
            t !== this.m_motorSpeed && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_motorSpeed = t);
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex;
            t("  const jd: b2RevoluteJointDef = new b2RevoluteJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), 
            t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), 
            t("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle), t("  jd.enableLimit = %s;\n", this.m_enableLimit ? "true" : "false"), 
            t("  jd.lowerAngle = %.15f;\n", this.m_lowerAngle), t("  jd.upperAngle = %.15f;\n", this.m_upperAngle), 
            t("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false"), t("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed), 
            t("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque), t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    } ]);
    var Us = Zs;
    function Zs(t) {
        _classCallCheck(this, Zs);
        var e = _possibleConstructorReturn(this, (Zs.__proto__ || Object.getPrototypeOf(Zs)).call(this, t));
        return e.m_localAnchorA = new X(), e.m_localAnchorB = new X(), e.m_impulse = new l(), 
        e.m_motorImpulse = 0, e.m_enableMotor = !1, e.m_maxMotorTorque = 0, e.m_motorSpeed = 0, 
        e.m_enableLimit = !1, e.m_referenceAngle = 0, e.m_lowerAngle = 0, e.m_upperAngle = 0, 
        e.m_indexA = 0, e.m_indexB = 0, e.m_rA = new X(), e.m_rB = new X(), e.m_localCenterA = new X(), 
        e.m_localCenterB = new X(), e.m_invMassA = 0, e.m_invMassB = 0, e.m_invIA = 0, e.m_invIB = 0, 
        e.m_mass = new ct(), e.m_motorMass = 0, e.m_limitState = N.b2LimitState.e_inactiveLimit, 
        e.m_qA = new P(), e.m_qB = new P(), e.m_lalcA = new X(), e.m_lalcB = new X(), e.m_K = new d(), 
        e.m_localAnchorA.Copy(f(t.localAnchorA, X.ZERO)), e.m_localAnchorB.Copy(f(t.localAnchorB, X.ZERO)), 
        e.m_referenceAngle = f(t.referenceAngle, 0), e.m_impulse.SetZero(), e.m_motorImpulse = 0, 
        e.m_lowerAngle = f(t.lowerAngle, 0), e.m_upperAngle = f(t.upperAngle, 0), e.m_maxMotorTorque = f(t.maxMotorTorque, 0), 
        e.m_motorSpeed = f(t.motorSpeed, 0), e.m_enableLimit = f(t.enableLimit, !1), e.m_enableMotor = f(t.enableMotor, !1), 
        e.m_limitState = N.b2LimitState.e_inactiveLimit, e;
    }
    Us.InitVelocityConstraints_s_P = new X(), Us.SolveVelocityConstraints_s_P = new X(), 
    Us.SolveVelocityConstraints_s_Cdot_v2 = new X(), Us.SolveVelocityConstraints_s_Cdot1 = new X(), 
    Us.SolveVelocityConstraints_s_impulse_v3 = new l(), Us.SolveVelocityConstraints_s_reduced_v2 = new X(), 
    Us.SolveVelocityConstraints_s_impulse_v2 = new X(), Us.SolvePositionConstraints_s_C_v2 = new X(), 
    Us.SolvePositionConstraints_s_impulse = new X();
    _inherits(Hs, ms);
    var Ws = Hs;
    function Hs() {
        _classCallCheck(this, Hs);
        var t = _possibleConstructorReturn(this, (Hs.__proto__ || Object.getPrototypeOf(Hs)).call(this, N.b2JointType.e_ropeJoint));
        return t.localAnchorA = new X(-1, 0), t.localAnchorB = new X(1, 0), t.maxLength = 0, 
        t;
    }
    _inherits(Ys, hs), _createClass(Ys, [ {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
            var e = t.positions[this.m_indexA].c, i = t.positions[this.m_indexA].a, s = t.velocities[this.m_indexA].v, n = t.velocities[this.m_indexA].w, o = t.positions[this.m_indexB].c, r = t.positions[this.m_indexB].a, a = t.velocities[this.m_indexB].v, l = t.velocities[this.m_indexB].w, i = this.m_qA.SetAngle(i), r = this.m_qB.SetAngle(r), i = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(i, this.m_lalcA, this.m_rA), X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(r, this.m_lalcB, this.m_rB), this.m_u.Copy(o).SelfAdd(this.m_rB).SelfSub(e).SelfSub(this.m_rA), 
            this.m_length = this.m_u.Length(), this.m_length - this.m_maxLength);
            this.m_state = 0 < i ? N.b2LimitState.e_atUpperLimit : N.b2LimitState.e_inactiveLimit, 
            this.m_length > G ? (this.m_u.SelfMul(1 / this.m_length), r = X.CrossVV(this.m_rA, this.m_u), 
            o = X.CrossVV(this.m_rB, this.m_u), e = this.m_invMassA + this.m_invIA * r * r + this.m_invMassB + this.m_invIB * o * o, 
            this.m_mass = 0 !== e ? 1 / e : 0, t.step.warmStarting ? (this.m_impulse *= t.step.dtRatio, 
            i = X.MulSV(this.m_impulse, this.m_u, Ys.InitVelocityConstraints_s_P), s.SelfMulSub(this.m_invMassA, i), 
            n -= this.m_invIA * X.CrossVV(this.m_rA, i), a.SelfMulAdd(this.m_invMassB, i), l += this.m_invIB * X.CrossVV(this.m_rB, i)) : this.m_impulse = 0, 
            t.velocities[this.m_indexA].w = n, t.velocities[this.m_indexB].w = l) : (this.m_u.SetZero(), 
            this.m_mass = 0, this.m_impulse = 0);
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e = t.velocities[this.m_indexA].v, i = t.velocities[this.m_indexA].w, s = t.velocities[this.m_indexB].v, n = t.velocities[this.m_indexB].w, o = X.AddVCrossSV(e, i, this.m_rA, Ys.SolveVelocityConstraints_s_vpA), r = X.AddVCrossSV(s, n, this.m_rB, Ys.SolveVelocityConstraints_s_vpB), a = this.m_length - this.m_maxLength, r = X.DotVV(this.m_u, X.SubVV(r, o, X.s_t0)), o = (a < 0 && (r += t.step.inv_dt * a), 
            -this.m_mass * r), a = this.m_impulse, r = (this.m_impulse = L(0, this.m_impulse + o), 
            o = this.m_impulse - a, X.MulSV(o, this.m_u, Ys.SolveVelocityConstraints_s_P));
            e.SelfMulSub(this.m_invMassA, r), i -= this.m_invIA * X.CrossVV(this.m_rA, r), s.SelfMulAdd(this.m_invMassB, r), 
            n += this.m_invIB * X.CrossVV(this.m_rB, r), t.velocities[this.m_indexA].w = i, 
            t.velocities[this.m_indexB].w = n;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            var e = t.positions[this.m_indexA].c, i = t.positions[this.m_indexA].a, s = t.positions[this.m_indexB].c, n = t.positions[this.m_indexB].a, o = this.m_qA.SetAngle(i), r = this.m_qB.SetAngle(n), o = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(o, this.m_lalcA, this.m_rA)), r = (X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(r, this.m_lalcB, this.m_rB)), a = this.m_u.Copy(s).SelfAdd(r).SelfSub(e).SelfSub(o), l = a.Normalize(), _ = M(l - this.m_maxLength, 0, O), _ = -this.m_mass * _, _ = X.MulSV(_, a, Ys.SolvePositionConstraints_s_P);
            return e.SelfMulSub(this.m_invMassA, _), i -= this.m_invIA * X.CrossVV(o, _), s.SelfMulAdd(this.m_invMassB, _), 
            n += this.m_invIB * X.CrossVV(r, _), t.positions[this.m_indexA].a = i, t.positions[this.m_indexB].a = n, 
            l - this.m_maxLength < G;
        }
    }, {
        key: "GetAnchorA",
        value: function(t) {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t);
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return X.MulSV(t * this.m_impulse, this.m_u, e);
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return 0;
        }
    }, {
        key: "GetLocalAnchorA",
        value: function() {
            return this.m_localAnchorA;
        }
    }, {
        key: "GetLocalAnchorB",
        value: function() {
            return this.m_localAnchorB;
        }
    }, {
        key: "SetMaxLength",
        value: function(t) {
            this.m_maxLength = t;
        }
    }, {
        key: "GetMaxLength",
        value: function() {
            return this.m_maxLength;
        }
    }, {
        key: "GetLimitState",
        value: function() {
            return this.m_state;
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex;
            t("  const jd: b2RopeJointDef = new b2RopeJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), 
            t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), 
            t("  jd.maxLength = %.15f;\n", this.m_maxLength), t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    } ]);
    var Qs = Ys;
    function Ys(t) {
        _classCallCheck(this, Ys);
        var e = _possibleConstructorReturn(this, (Ys.__proto__ || Object.getPrototypeOf(Ys)).call(this, t));
        return e.m_localAnchorA = new X(), e.m_localAnchorB = new X(), e.m_maxLength = 0, 
        e.m_length = 0, e.m_impulse = 0, e.m_indexA = 0, e.m_indexB = 0, e.m_u = new X(), 
        e.m_rA = new X(), e.m_rB = new X(), e.m_localCenterA = new X(), e.m_localCenterB = new X(), 
        e.m_invMassA = 0, e.m_invMassB = 0, e.m_invIA = 0, e.m_invIB = 0, e.m_mass = 0, 
        e.m_state = N.b2LimitState.e_inactiveLimit, e.m_qA = new P(), e.m_qB = new P(), 
        e.m_lalcA = new X(), e.m_lalcB = new X(), e.m_localAnchorA.Copy(f(t.localAnchorA, new X(-1, 0))), 
        e.m_localAnchorB.Copy(f(t.localAnchorB, new X(1, 0))), e.m_maxLength = f(t.maxLength, 0), 
        e;
    }
    Qs.InitVelocityConstraints_s_P = new X(), Qs.SolveVelocityConstraints_s_vpA = new X(), 
    Qs.SolveVelocityConstraints_s_vpB = new X(), Qs.SolveVelocityConstraints_s_P = new X(), 
    Qs.SolvePositionConstraints_s_P = new X();
    _inherits($s, ms), _createClass($s, [ {
        key: "Initialize",
        value: function(t, e, i) {
            this.bodyA = t, this.bodyB = e, this.bodyA.GetLocalPoint(i, this.localAnchorA), 
            this.bodyB.GetLocalPoint(i, this.localAnchorB), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
        }
    } ]);
    var Ks = $s;
    function $s() {
        _classCallCheck(this, $s);
        var t = _possibleConstructorReturn(this, ($s.__proto__ || Object.getPrototypeOf($s)).call(this, N.b2JointType.e_weldJoint));
        return t.localAnchorA = new X(), t.localAnchorB = new X(), t.referenceAngle = 0, 
        t.frequencyHz = 0, t.dampingRatio = 0, t;
    }
    _inherits(en, hs), _createClass(en, [ {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
            var e, i, s, n, o = t.positions[this.m_indexA].a, r = t.velocities[this.m_indexA].v, a = t.velocities[this.m_indexA].w, l = t.positions[this.m_indexB].a, _ = t.velocities[this.m_indexB].v, m = t.velocities[this.m_indexB].w, h = this.m_qA.SetAngle(o), u = this.m_qB.SetAngle(l), h = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(h, this.m_lalcA, this.m_rA), X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(u, this.m_lalcB, this.m_rB), this.m_invMassA), u = this.m_invMassB, c = this.m_invIA, f = this.m_invIB, d = this.m_K;
            d.ex.x = h + u + this.m_rA.y * this.m_rA.y * c + this.m_rB.y * this.m_rB.y * f, 
            d.ey.x = -this.m_rA.y * this.m_rA.x * c - this.m_rB.y * this.m_rB.x * f, d.ez.x = -this.m_rA.y * c - this.m_rB.y * f, 
            d.ex.y = d.ey.x, d.ey.y = h + u + this.m_rA.x * this.m_rA.x * c + this.m_rB.x * this.m_rB.x * f, 
            d.ez.y = this.m_rA.x * c + this.m_rB.x * f, d.ex.z = d.ez.x, d.ey.z = d.ez.y, d.ez.z = c + f, 
            0 < this.m_frequencyHz ? (d.GetInverse22(this.m_mass), l = l - o - this.m_referenceAngle, 
            o = 2 * y * this.m_frequencyHz, i = 2 * (n = 0 < (e = c + f) ? 1 / e : 0) * this.m_dampingRatio * o, 
            s = t.step.dt, this.m_gamma = s * (i + s * (i = n * o * o)), this.m_gamma = 0 !== this.m_gamma ? 1 / this.m_gamma : 0, 
            this.m_bias = l * s * i * this.m_gamma, e += this.m_gamma, this.m_mass.ez.z = 0 !== e ? 1 / e : 0) : (d.GetSymInverse33(this.m_mass), 
            this.m_gamma = 0, this.m_bias = 0), t.step.warmStarting ? (this.m_impulse.SelfMul(t.step.dtRatio), 
            n = en.InitVelocityConstraints_s_P.Set(this.m_impulse.x, this.m_impulse.y), r.SelfMulSub(h, n), 
            a -= c * (X.CrossVV(this.m_rA, n) + this.m_impulse.z), _.SelfMulAdd(u, n), m += f * (X.CrossVV(this.m_rB, n) + this.m_impulse.z)) : this.m_impulse.SetZero(), 
            t.velocities[this.m_indexA].w = a, t.velocities[this.m_indexB].w = m;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e, i, s = t.velocities[this.m_indexA].v, n = t.velocities[this.m_indexA].w, o = t.velocities[this.m_indexB].v, r = t.velocities[this.m_indexB].w, a = this.m_invMassA, l = this.m_invMassB, _ = this.m_invIA, m = this.m_invIB;
            0 < this.m_frequencyHz ? (e = -this.m_mass.ez.z * (r - n + this.m_bias + this.m_gamma * this.m_impulse.z), 
            this.m_impulse.z += e, n -= _ * e, e = X.SubVV(X.AddVCrossSV(o, r += m * e, this.m_rB, X.s_t0), X.AddVCrossSV(s, n, this.m_rA, X.s_t1), en.SolveVelocityConstraints_s_Cdot1), 
            e = ct.MulM33XY(this.m_mass, e.x, e.y, en.SolveVelocityConstraints_s_impulse1).SelfNeg(), 
            this.m_impulse.x += e.x, this.m_impulse.y += e.y, s.SelfMulSub(a, e = e), n -= _ * X.CrossVV(this.m_rA, e), 
            o.SelfMulAdd(l, e), r += m * X.CrossVV(this.m_rB, e)) : (e = X.SubVV(X.AddVCrossSV(o, r, this.m_rB, X.s_t0), X.AddVCrossSV(s, n, this.m_rA, X.s_t1), en.SolveVelocityConstraints_s_Cdot1), 
            e = ct.MulM33XYZ(this.m_mass, e.x, e.y, r - n, en.SolveVelocityConstraints_s_impulse).SelfNeg(), 
            this.m_impulse.SelfAdd(e), i = en.SolveVelocityConstraints_s_P.Set(e.x, e.y), s.SelfMulSub(a, i), 
            n -= _ * (X.CrossVV(this.m_rA, i) + e.z), o.SelfMulAdd(l, i), r += m * (X.CrossVV(this.m_rB, i) + e.z)), 
            t.velocities[this.m_indexA].w = n, t.velocities[this.m_indexB].w = r;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            var e, i = t.positions[this.m_indexA].c, s = t.positions[this.m_indexA].a, n = t.positions[this.m_indexB].c, o = t.positions[this.m_indexB].a, r = this.m_qA.SetAngle(s), a = this.m_qB.SetAngle(o), l = this.m_invMassA, _ = this.m_invMassB, m = this.m_invIA, h = this.m_invIB, r = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(r, this.m_lalcA, this.m_rA)), a = (X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(a, this.m_lalcB, this.m_rB)), u = void 0, c = void 0, f = this.m_K;
            return f.ex.x = l + _ + r.y * r.y * m + a.y * a.y * h, f.ey.x = -r.y * r.x * m - a.y * a.x * h, 
            f.ez.x = -r.y * m - a.y * h, f.ex.y = f.ey.x, f.ey.y = l + _ + r.x * r.x * m + a.x * a.x * h, 
            f.ez.y = r.x * m + a.x * h, f.ex.z = f.ez.x, f.ey.z = f.ez.y, f.ez.z = m + h, 0 < this.m_frequencyHz ? (u = (e = X.SubVV(X.AddVV(n, a, X.s_t0), X.AddVV(i, r, X.s_t1), en.SolvePositionConstraints_s_C1)).Length(), 
            c = 0, e = f.Solve22(e.x, e.y, en.SolvePositionConstraints_s_P).SelfNeg(), i.SelfMulSub(l, e), 
            s -= m * X.CrossVV(r, e), n.SelfMulAdd(_, e), o += h * X.CrossVV(a, e)) : (e = X.SubVV(X.AddVV(n, a, X.s_t0), X.AddVV(i, r, X.s_t1), en.SolvePositionConstraints_s_C1), 
            a = o - s - this.m_referenceAngle, u = e.Length(), c = R(a), r = f.Solve33(e.x, e.y, a, en.SolvePositionConstraints_s_impulse).SelfNeg(), 
            f = en.SolvePositionConstraints_s_P.Set(r.x, r.y), i.SelfMulSub(l, f), s -= m * (X.CrossVV(this.m_rA, f) + r.z), 
            n.SelfMulAdd(_, f), o += h * (X.CrossVV(this.m_rB, f) + r.z)), t.positions[this.m_indexA].a = s, 
            t.positions[this.m_indexB].a = o, u <= G && c <= k;
        }
    }, {
        key: "GetAnchorA",
        value: function(t) {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t);
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return e.x = t * this.m_impulse.x, e.y = t * this.m_impulse.y, e;
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return t * this.m_impulse.z;
        }
    }, {
        key: "GetLocalAnchorA",
        value: function() {
            return this.m_localAnchorA;
        }
    }, {
        key: "GetLocalAnchorB",
        value: function() {
            return this.m_localAnchorB;
        }
    }, {
        key: "GetReferenceAngle",
        value: function() {
            return this.m_referenceAngle;
        }
    }, {
        key: "SetFrequency",
        value: function(t) {
            this.m_frequencyHz = t;
        }
    }, {
        key: "GetFrequency",
        value: function() {
            return this.m_frequencyHz;
        }
    }, {
        key: "SetDampingRatio",
        value: function(t) {
            this.m_dampingRatio = t;
        }
    }, {
        key: "GetDampingRatio",
        value: function() {
            return this.m_dampingRatio;
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex;
            t("  const jd: b2WeldJointDef = new b2WeldJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), 
            t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), 
            t("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle), t("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz), 
            t("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio), t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    } ]);
    var tn = en;
    function en(t) {
        _classCallCheck(this, en);
        var e = _possibleConstructorReturn(this, (en.__proto__ || Object.getPrototypeOf(en)).call(this, t));
        return e.m_frequencyHz = 0, e.m_dampingRatio = 0, e.m_bias = 0, e.m_localAnchorA = new X(), 
        e.m_localAnchorB = new X(), e.m_referenceAngle = 0, e.m_gamma = 0, e.m_impulse = new l(0, 0, 0), 
        e.m_indexA = 0, e.m_indexB = 0, e.m_rA = new X(), e.m_rB = new X(), e.m_localCenterA = new X(), 
        e.m_localCenterB = new X(), e.m_invMassA = 0, e.m_invMassB = 0, e.m_invIA = 0, e.m_invIB = 0, 
        e.m_mass = new ct(), e.m_qA = new P(), e.m_qB = new P(), e.m_lalcA = new X(), e.m_lalcB = new X(), 
        e.m_K = new ct(), e.m_frequencyHz = f(t.frequencyHz, 0), e.m_dampingRatio = f(t.dampingRatio, 0), 
        e.m_localAnchorA.Copy(f(t.localAnchorA, X.ZERO)), e.m_localAnchorB.Copy(f(t.localAnchorB, X.ZERO)), 
        e.m_referenceAngle = f(t.referenceAngle, 0), e.m_impulse.SetZero(), e;
    }
    tn.InitVelocityConstraints_s_P = new X(), tn.SolveVelocityConstraints_s_Cdot1 = new X(), 
    tn.SolveVelocityConstraints_s_impulse1 = new X(), tn.SolveVelocityConstraints_s_impulse = new l(), 
    tn.SolveVelocityConstraints_s_P = new X(), tn.SolvePositionConstraints_s_C1 = new X(), 
    tn.SolvePositionConstraints_s_P = new X(), tn.SolvePositionConstraints_s_impulse = new l();
    _inherits(nn, ms), _createClass(nn, [ {
        key: "Initialize",
        value: function(t, e, i, s) {
            this.bodyA = t, this.bodyB = e, this.bodyA.GetLocalPoint(i, this.localAnchorA), 
            this.bodyB.GetLocalPoint(i, this.localAnchorB), this.bodyA.GetLocalVector(s, this.localAxisA);
        }
    } ]);
    var sn = nn;
    function nn() {
        _classCallCheck(this, nn);
        var t = _possibleConstructorReturn(this, (nn.__proto__ || Object.getPrototypeOf(nn)).call(this, N.b2JointType.e_wheelJoint));
        return t.localAnchorA = new X(0, 0), t.localAnchorB = new X(0, 0), t.localAxisA = new X(1, 0), 
        t.enableMotor = !1, t.maxMotorTorque = 0, t.motorSpeed = 0, t.frequencyHz = 2, t.dampingRatio = .7, 
        t;
    }
    _inherits(rn, hs), _createClass(rn, [ {
        key: "GetMotorSpeed",
        value: function() {
            return this.m_motorSpeed;
        }
    }, {
        key: "GetMaxMotorTorque",
        value: function() {
            return this.m_maxMotorTorque;
        }
    }, {
        key: "SetSpringFrequencyHz",
        value: function(t) {
            this.m_frequencyHz = t;
        }
    }, {
        key: "GetSpringFrequencyHz",
        value: function() {
            return this.m_frequencyHz;
        }
    }, {
        key: "SetSpringDampingRatio",
        value: function(t) {
            this.m_dampingRatio = t;
        }
    }, {
        key: "GetSpringDampingRatio",
        value: function() {
            return this.m_dampingRatio;
        }
    }, {
        key: "InitVelocityConstraints",
        value: function(t) {
            this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex, 
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter), 
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
            var e = this.m_invMassA, i = this.m_invMassB, s = this.m_invIA, n = this.m_invIB, o = t.positions[this.m_indexA].c, r = t.positions[this.m_indexA].a, a = t.velocities[this.m_indexA].v, l = t.velocities[this.m_indexA].w, _ = t.positions[this.m_indexB].c, m = t.positions[this.m_indexB].a, h = t.velocities[this.m_indexB].v, u = t.velocities[this.m_indexB].w, r = this.m_qA.SetAngle(r), m = this.m_qB.SetAngle(m), c = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(r, this.m_lalcA, this.m_rA)), m = (X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(m, this.m_lalcB, this.m_rB)), _ = X.SubVV(X.AddVV(_, m, X.s_t0), X.AddVV(o, c, X.s_t1), rn.InitVelocityConstraints_s_d);
            P.MulRV(r, this.m_localYAxisA, this.m_ay), this.m_sAy = X.CrossVV(X.AddVV(_, c, X.s_t0), this.m_ay), 
            this.m_sBy = X.CrossVV(m, this.m_ay), this.m_mass = e + i + s * this.m_sAy * this.m_sAy + n * this.m_sBy * this.m_sBy, 
            0 < this.m_mass && (this.m_mass = 1 / this.m_mass), this.m_springMass = 0, this.m_bias = 0, 
            (this.m_gamma = 0) < this.m_frequencyHz ? (P.MulRV(r, this.m_localXAxisA, this.m_ax), 
            this.m_sAx = X.CrossVV(X.AddVV(_, c, X.s_t0), this.m_ax), this.m_sBx = X.CrossVV(m, this.m_ax), 
            0 < (o = e + i + s * this.m_sAx * this.m_sAx + n * this.m_sBx * this.m_sBx) && (this.m_springMass = 1 / o, 
            r = X.DotVV(_, this.m_ax), c = 2 * y * this.m_frequencyHz, m = 2 * this.m_springMass * this.m_dampingRatio * c, 
            e = this.m_springMass * c * c, i = t.step.dt, this.m_gamma = i * (m + i * e), 0 < this.m_gamma && (this.m_gamma = 1 / this.m_gamma), 
            this.m_bias = r * i * e * this.m_gamma, this.m_springMass = o + this.m_gamma, 0 < this.m_springMass) && (this.m_springMass = 1 / this.m_springMass)) : this.m_springImpulse = 0, 
            this.m_enableMotor ? (this.m_motorMass = s + n, 0 < this.m_motorMass && (this.m_motorMass = 1 / this.m_motorMass)) : (this.m_motorMass = 0, 
            this.m_motorImpulse = 0), t.step.warmStarting ? (this.m_impulse *= t.step.dtRatio, 
            this.m_springImpulse *= t.step.dtRatio, this.m_motorImpulse *= t.step.dtRatio, _ = X.AddVV(X.MulSV(this.m_impulse, this.m_ay, X.s_t0), X.MulSV(this.m_springImpulse, this.m_ax, X.s_t1), rn.InitVelocityConstraints_s_P), 
            c = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse, 
            m = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse, 
            a.SelfMulSub(this.m_invMassA, _), l -= this.m_invIA * c, h.SelfMulAdd(this.m_invMassB, _), 
            u += this.m_invIB * m) : (this.m_impulse = 0, this.m_springImpulse = 0, this.m_motorImpulse = 0), 
            t.velocities[this.m_indexA].w = l, t.velocities[this.m_indexB].w = u;
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function(t) {
            var e = this.m_invMassA, i = this.m_invMassB, s = this.m_invIA, n = this.m_invIB, o = t.velocities[this.m_indexA].v, r = t.velocities[this.m_indexA].w, a = t.velocities[this.m_indexB].v, l = t.velocities[this.m_indexB].w, _ = X.DotVV(this.m_ax, X.SubVV(a, o, X.s_t0)) + this.m_sBx * l - this.m_sAx * r, _ = -this.m_springMass * (_ + this.m_bias + this.m_gamma * this.m_springImpulse), m = (this.m_springImpulse += _, 
            X.MulSV(_, this.m_ax, rn.SolveVelocityConstraints_s_P)), h = _ * this.m_sAx, _ = _ * this.m_sBx, h = (o.SelfMulSub(e, m), 
            r -= s * h, a.SelfMulAdd(i, m), (l += n * _) - r - this.m_motorSpeed), m = -this.m_motorMass * h, _ = this.m_motorImpulse, h = t.step.dt * this.m_maxMotorTorque, h = (this.m_motorImpulse = M(this.m_motorImpulse + m, -h, h), 
            r -= s * (m = this.m_motorImpulse - _), l += n * m, X.DotVV(this.m_ay, X.SubVV(a, o, X.s_t0)) + this.m_sBy * l - this.m_sAy * r), _ = -this.m_mass * h, m = (this.m_impulse += _, 
            X.MulSV(_, this.m_ay, rn.SolveVelocityConstraints_s_P)), h = _ * this.m_sAy, _ = _ * this.m_sBy;
            o.SelfMulSub(e, m), r -= s * h, a.SelfMulAdd(i, m), l += n * _, t.velocities[this.m_indexA].w = r, 
            t.velocities[this.m_indexB].w = l;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function(t) {
            var e = t.positions[this.m_indexA].c, i = t.positions[this.m_indexA].a, s = t.positions[this.m_indexB].c, n = t.positions[this.m_indexB].a, o = this.m_qA.SetAngle(i), r = this.m_qB.SetAngle(n), a = (X.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), 
            P.MulRV(o, this.m_lalcA, this.m_rA)), r = (X.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), 
            P.MulRV(r, this.m_lalcB, this.m_rB)), l = X.AddVV(X.SubVV(s, e, X.s_t0), X.SubVV(r, a, X.s_t1), rn.SolvePositionConstraints_s_d), o = P.MulRV(o, this.m_localYAxisA, this.m_ay), a = X.CrossVV(X.AddVV(l, a, X.s_t0), o), r = X.CrossVV(r, o), l = X.DotVV(l, this.m_ay), _ = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy, m = void 0, m = 0 !== _ ? -l / _ : 0, _ = X.MulSV(m, o, rn.SolvePositionConstraints_s_P), o = m * a, a = m * r;
            return e.SelfMulSub(this.m_invMassA, _), i -= this.m_invIA * o, s.SelfMulAdd(this.m_invMassB, _), 
            n += this.m_invIB * a, t.positions[this.m_indexA].a = i, t.positions[this.m_indexB].a = n, 
            R(l) <= G;
        }
    }, {
        key: "GetDefinition",
        value: function(t) {
            return t;
        }
    }, {
        key: "GetAnchorA",
        value: function(t) {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t);
        }
    }, {
        key: "GetAnchorB",
        value: function(t) {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t);
        }
    }, {
        key: "GetReactionForce",
        value: function(t, e) {
            return e.x = t * (this.m_impulse * this.m_ay.x + this.m_springImpulse * this.m_ax.x), 
            e.y = t * (this.m_impulse * this.m_ay.y + this.m_springImpulse * this.m_ax.y), e;
        }
    }, {
        key: "GetReactionTorque",
        value: function(t) {
            return t * this.m_motorImpulse;
        }
    }, {
        key: "GetLocalAnchorA",
        value: function() {
            return this.m_localAnchorA;
        }
    }, {
        key: "GetLocalAnchorB",
        value: function() {
            return this.m_localAnchorB;
        }
    }, {
        key: "GetLocalAxisA",
        value: function() {
            return this.m_localXAxisA;
        }
    }, {
        key: "GetJointTranslation",
        value: function() {
            return this.GetPrismaticJointTranslation();
        }
    }, {
        key: "GetJointLinearSpeed",
        value: function() {
            return this.GetPrismaticJointSpeed();
        }
    }, {
        key: "GetJointAngle",
        value: function() {
            return this.GetRevoluteJointAngle();
        }
    }, {
        key: "GetJointAngularSpeed",
        value: function() {
            return this.GetRevoluteJointSpeed();
        }
    }, {
        key: "GetPrismaticJointTranslation",
        value: function() {
            var t = this.m_bodyA, e = this.m_bodyB, i = t.GetWorldPoint(this.m_localAnchorA, new X()), e = e.GetWorldPoint(this.m_localAnchorB, new X()), e = X.SubVV(e, i, new X()), i = t.GetWorldVector(this.m_localXAxisA, new X());
            return X.DotVV(e, i);
        }
    }, {
        key: "GetPrismaticJointSpeed",
        value: function() {
            var t = this.m_bodyA, e = this.m_bodyB, i = (X.SubVV(this.m_localAnchorA, t.m_sweep.localCenter, this.m_lalcA), 
            P.MulRV(t.m_xf.q, this.m_lalcA, this.m_rA)), s = (X.SubVV(this.m_localAnchorB, e.m_sweep.localCenter, this.m_lalcB), 
            P.MulRV(e.m_xf.q, this.m_lalcB, this.m_rB)), n = X.AddVV(t.m_sweep.c, i, X.s_t0), o = X.AddVV(e.m_sweep.c, s, X.s_t1), o = X.SubVV(o, n, X.s_t2), n = t.GetWorldVector(this.m_localXAxisA, new X()), r = t.m_linearVelocity, a = e.m_linearVelocity, t = t.m_angularVelocity, e = e.m_angularVelocity;
            return X.DotVV(o, X.CrossSV(t, n, X.s_t0)) + X.DotVV(n, X.SubVV(X.AddVCrossSV(a, e, s, X.s_t0), X.AddVCrossSV(r, t, i, X.s_t1), X.s_t0));
        }
    }, {
        key: "GetRevoluteJointAngle",
        value: function() {
            return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a;
        }
    }, {
        key: "GetRevoluteJointSpeed",
        value: function() {
            var t = this.m_bodyA.m_angularVelocity;
            return this.m_bodyB.m_angularVelocity - t;
        }
    }, {
        key: "IsMotorEnabled",
        value: function() {
            return this.m_enableMotor;
        }
    }, {
        key: "EnableMotor",
        value: function(t) {
            t !== this.m_enableMotor && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_enableMotor = t);
        }
    }, {
        key: "SetMotorSpeed",
        value: function(t) {
            t !== this.m_motorSpeed && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_motorSpeed = t);
        }
    }, {
        key: "SetMaxMotorTorque",
        value: function(t) {
            t !== this.m_maxMotorTorque && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), 
            this.m_maxMotorTorque = t);
        }
    }, {
        key: "GetMotorTorque",
        value: function(t) {
            return t * this.m_motorImpulse;
        }
    }, {
        key: "Dump",
        value: function(t) {
            var e = this.m_bodyA.m_islandIndex, i = this.m_bodyB.m_islandIndex;
            t("  const jd: b2WheelJointDef = new b2WheelJointDef();\n"), t("  jd.bodyA = bodies[%d];\n", e), 
            t("  jd.bodyB = bodies[%d];\n", i), t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"), 
            t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y), 
            t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y), 
            t("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y), 
            t("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false"), t("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed), 
            t("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque), t("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz), 
            t("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio), t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    } ]);
    var on = rn;
    function rn(t) {
        _classCallCheck(this, rn);
        var e = _possibleConstructorReturn(this, (rn.__proto__ || Object.getPrototypeOf(rn)).call(this, t));
        return e.m_frequencyHz = 0, e.m_dampingRatio = 0, e.m_localAnchorA = new X(), e.m_localAnchorB = new X(), 
        e.m_localXAxisA = new X(), e.m_localYAxisA = new X(), e.m_impulse = 0, e.m_motorImpulse = 0, 
        e.m_springImpulse = 0, e.m_maxMotorTorque = 0, e.m_motorSpeed = 0, e.m_enableMotor = !1, 
        e.m_indexA = 0, e.m_indexB = 0, e.m_localCenterA = new X(), e.m_localCenterB = new X(), 
        e.m_invMassA = 0, e.m_invMassB = 0, e.m_invIA = 0, e.m_invIB = 0, e.m_ax = new X(), 
        e.m_ay = new X(), e.m_sAx = 0, e.m_sBx = 0, e.m_sAy = 0, e.m_sBy = 0, e.m_mass = 0, 
        e.m_motorMass = 0, e.m_springMass = 0, e.m_bias = 0, e.m_gamma = 0, e.m_qA = new P(), 
        e.m_qB = new P(), e.m_lalcA = new X(), e.m_lalcB = new X(), e.m_rA = new X(), e.m_rB = new X(), 
        e.m_frequencyHz = f(t.frequencyHz, 2), e.m_dampingRatio = f(t.dampingRatio, .7), 
        e.m_localAnchorA.Copy(f(t.localAnchorA, X.ZERO)), e.m_localAnchorB.Copy(f(t.localAnchorB, X.ZERO)), 
        e.m_localXAxisA.Copy(f(t.localAxisA, X.UNITX)), X.CrossOneV(e.m_localXAxisA, e.m_localYAxisA), 
        e.m_maxMotorTorque = f(t.maxMotorTorque, 0), e.m_motorSpeed = f(t.motorSpeed, 0), 
        e.m_enableMotor = f(t.enableMotor, !1), e.m_ax.SetZero(), e.m_ay.SetZero(), e;
    }
    function an(t, e) {
        return it(t * e);
    }
    function ln(t, e) {
        return e < t ? t : e;
    }
    on.InitVelocityConstraints_s_d = new X(), on.InitVelocityConstraints_s_P = new X(), 
    on.SolveVelocityConstraints_s_P = new X(), on.SolvePositionConstraints_s_d = new X(), 
    on.SolvePositionConstraints_s_P = new X();
    function _n(t) {
        _classCallCheck(this, _n), this.prev = null, this.next = null, this.contact = t;
    }
    _createClass(hn, [ {
        key: "GetManifold",
        value: function() {
            return this.m_manifold;
        }
    }, {
        key: "GetWorldManifold",
        value: function(t) {
            var e = this.m_fixtureA.GetBody(), i = this.m_fixtureB.GetBody(), s = this.m_fixtureA.GetShape(), n = this.m_fixtureB.GetShape();
            t.Initialize(this.m_manifold, e.GetTransform(), s.m_radius, i.GetTransform(), n.m_radius);
        }
    }, {
        key: "IsTouching",
        value: function() {
            return this.m_touchingFlag;
        }
    }, {
        key: "SetEnabled",
        value: function(t) {
            this.m_enabledFlag = t;
        }
    }, {
        key: "IsEnabled",
        value: function() {
            return this.m_enabledFlag;
        }
    }, {
        key: "GetNext",
        value: function() {
            return this.m_next;
        }
    }, {
        key: "GetFixtureA",
        value: function() {
            return this.m_fixtureA;
        }
    }, {
        key: "GetChildIndexA",
        value: function() {
            return this.m_indexA;
        }
    }, {
        key: "GetFixtureB",
        value: function() {
            return this.m_fixtureB;
        }
    }, {
        key: "GetChildIndexB",
        value: function() {
            return this.m_indexB;
        }
    }, {
        key: "FlagForFiltering",
        value: function() {
            this.m_filterFlag = !0;
        }
    }, {
        key: "SetFriction",
        value: function(t) {
            this.m_friction = t;
        }
    }, {
        key: "GetFriction",
        value: function() {
            return this.m_friction;
        }
    }, {
        key: "ResetFriction",
        value: function() {
            this.m_friction = an(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
        }
    }, {
        key: "SetRestitution",
        value: function(t) {
            this.m_restitution = t;
        }
    }, {
        key: "GetRestitution",
        value: function() {
            return this.m_restitution;
        }
    }, {
        key: "ResetRestitution",
        value: function() {
            this.m_restitution = ln(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
        }
    }, {
        key: "SetTangentSpeed",
        value: function(t) {
            this.m_tangentSpeed = t;
        }
    }, {
        key: "GetTangentSpeed",
        value: function() {
            return this.m_tangentSpeed;
        }
    }, {
        key: "Reset",
        value: function(t, e, i, s) {
            this.m_islandFlag = !1, this.m_touchingFlag = !1, this.m_enabledFlag = !0, this.m_filterFlag = !1, 
            this.m_bulletHitFlag = !1, this.m_toiFlag = !1, this.m_fixtureA = t, this.m_fixtureB = i, 
            this.m_indexA = e, this.m_indexB = s, this.m_manifold.pointCount = 0, this.m_prev = null, 
            this.m_next = null, delete this.m_nodeA.contact, this.m_nodeA.prev = null, this.m_nodeA.next = null, 
            delete this.m_nodeA.other, delete this.m_nodeB.contact, this.m_nodeB.prev = null, 
            this.m_nodeB.next = null, delete this.m_nodeB.other, this.m_toiCount = 0, this.m_friction = an(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction), 
            this.m_restitution = ln(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
        }
    }, {
        key: "Update",
        value: function(t) {
            var e = this.m_oldManifold, e = (this.m_oldManifold = this.m_manifold, this.m_manifold = e, 
            !(this.m_enabledFlag = !0)), i = this.m_touchingFlag, s = this.m_fixtureA.IsSensor(), n = this.m_fixtureB.IsSensor(), s = s || n, n = this.m_fixtureA.GetBody(), o = this.m_fixtureB.GetBody(), r = n.GetTransform(), a = o.GetTransform();
            if (s) {
                var l = this.m_fixtureA.GetShape(), _ = this.m_fixtureB.GetShape(), e = we(l, this.m_indexA, _, this.m_indexB, r, a);
                this.m_manifold.pointCount = 0;
            } else {
                this.Evaluate(this.m_manifold, r, a), e = 0 < this.m_manifold.pointCount;
                for (var m = 0; m < this.m_manifold.pointCount; ++m) for (var h = this.m_manifold.points[m], u = (h.normalImpulse = 0, 
                h.tangentImpulse = 0, h.id), c = 0; c < this.m_oldManifold.pointCount; ++c) {
                    var f = this.m_oldManifold.points[c];
                    if (f.id.key === u.key) {
                        h.normalImpulse = f.normalImpulse, h.tangentImpulse = f.tangentImpulse;
                        break;
                    }
                }
                e !== i && (n.SetAwake(!0), o.SetAwake(!0));
            }
            this.m_touchingFlag = e, !i && e && t && t.BeginContact(this), i && !e && t && t.EndContact(this), 
            !s && e && t && t.PreSolve(this, this.m_oldManifold);
        }
    }, {
        key: "ComputeTOI",
        value: function(t, e) {
            var i = hn.ComputeTOI_s_input, t = (i.proxyA.SetShape(this.m_fixtureA.GetShape(), this.m_indexA), 
            i.proxyB.SetShape(this.m_fixtureB.GetShape(), this.m_indexB), i.sweepA.Copy(t), 
            i.sweepB.Copy(e), i.tMax = G, hn.ComputeTOI_s_output);
            return ti(t, i), t.t;
        }
    } ]);
    var mn = hn;
    function hn() {
        _classCallCheck(this, hn), this.m_islandFlag = !1, this.m_touchingFlag = !1, this.m_enabledFlag = !1, 
        this.m_filterFlag = !1, this.m_bulletHitFlag = !1, this.m_toiFlag = !1, this.m_prev = null, 
        this.m_next = null, this.m_indexA = 0, this.m_indexB = 0, this.m_manifold = new ue(), 
        this.m_toiCount = 0, this.m_toi = 0, this.m_friction = 0, this.m_restitution = 0, 
        this.m_tangentSpeed = 0, this.m_oldManifold = new ue(), this.m_nodeA = new _n(this), 
        this.m_nodeB = new _n(this);
    }
    mn.ComputeTOI_s_input = new Te(), mn.ComputeTOI_s_output = new Re();
    _inherits(cn, mn), _createClass(cn, [ {
        key: "Reset",
        value: function(t, e, i, s) {
            _get(cn.prototype.__proto__ || Object.getPrototypeOf(cn.prototype), "Reset", this).call(this, t, e, i, s);
        }
    }, {
        key: "Evaluate",
        value: function(t, e, i) {
            si(t, this.m_fixtureA.GetShape(), e, this.m_fixtureB.GetShape(), i);
        }
    } ], [ {
        key: "Create",
        value: function(t) {
            return new cn();
        }
    }, {
        key: "Destroy",
        value: function(t, e) {}
    } ]);
    var un = cn;
    function cn() {
        return _classCallCheck(this, cn), _possibleConstructorReturn(this, (cn.__proto__ || Object.getPrototypeOf(cn)).call(this));
    }
    _inherits(dn, mn), _createClass(dn, [ {
        key: "Reset",
        value: function(t, e, i, s) {
            _get(dn.prototype.__proto__ || Object.getPrototypeOf(dn.prototype), "Reset", this).call(this, t, e, i, s);
        }
    }, {
        key: "Evaluate",
        value: function(t, e, i) {
            Pi(t, this.m_fixtureA.GetShape(), e, this.m_fixtureB.GetShape(), i);
        }
    } ], [ {
        key: "Create",
        value: function(t) {
            return new dn();
        }
    }, {
        key: "Destroy",
        value: function(t, e) {}
    } ]);
    var fn = dn;
    function dn() {
        return _classCallCheck(this, dn), _possibleConstructorReturn(this, (dn.__proto__ || Object.getPrototypeOf(dn)).call(this));
    }
    _inherits(pn, mn), _createClass(pn, [ {
        key: "Reset",
        value: function(t, e, i, s) {
            _get(pn.prototype.__proto__ || Object.getPrototypeOf(pn.prototype), "Reset", this).call(this, t, e, i, s);
        }
    }, {
        key: "Evaluate",
        value: function(t, e, i) {
            ai(t, this.m_fixtureA.GetShape(), e, this.m_fixtureB.GetShape(), i);
        }
    } ], [ {
        key: "Create",
        value: function(t) {
            return new pn();
        }
    }, {
        key: "Destroy",
        value: function(t, e) {}
    } ]);
    var yn = pn;
    function pn() {
        return _classCallCheck(this, pn), _possibleConstructorReturn(this, (pn.__proto__ || Object.getPrototypeOf(pn)).call(this));
    }
    _inherits(xn, mn), _createClass(xn, [ {
        key: "Reset",
        value: function(t, e, i, s) {
            _get(xn.prototype.__proto__ || Object.getPrototypeOf(xn.prototype), "Reset", this).call(this, t, e, i, s);
        }
    }, {
        key: "Evaluate",
        value: function(t, e, i) {
            zi(t, this.m_fixtureA.GetShape(), e, this.m_fixtureB.GetShape(), i);
        }
    } ], [ {
        key: "Create",
        value: function(t) {
            return new xn();
        }
    }, {
        key: "Destroy",
        value: function(t, e) {}
    } ]);
    var vn = xn;
    function xn() {
        return _classCallCheck(this, xn), _possibleConstructorReturn(this, (xn.__proto__ || Object.getPrototypeOf(xn)).call(this));
    }
    _inherits(Bn, mn), _createClass(Bn, [ {
        key: "Reset",
        value: function(t, e, i, s) {
            _get(Bn.prototype.__proto__ || Object.getPrototypeOf(Bn.prototype), "Reset", this).call(this, t, e, i, s);
        }
    }, {
        key: "Evaluate",
        value: function(t, e, i) {
            Xi(t, this.m_fixtureA.GetShape(), e, this.m_fixtureB.GetShape(), i);
        }
    } ], [ {
        key: "Create",
        value: function(t) {
            return new Bn();
        }
    }, {
        key: "Destroy",
        value: function(t, e) {}
    } ]);
    var Cn = Bn;
    function Bn() {
        return _classCallCheck(this, Bn), _possibleConstructorReturn(this, (Bn.__proto__ || Object.getPrototypeOf(Bn)).call(this));
    }
    _inherits(bn, mn), _createClass(bn, [ {
        key: "Reset",
        value: function(t, e, i, s) {
            _get(bn.prototype.__proto__ || Object.getPrototypeOf(bn.prototype), "Reset", this).call(this, t, e, i, s);
        }
    }, {
        key: "Evaluate",
        value: function(t, e, i) {
            var s = this.m_fixtureA.GetShape(), n = this.m_fixtureB.GetShape(), o = bn.Evaluate_s_edge;
            s.GetChildEdge(o, this.m_indexA), zi(t, o, e, n, i);
        }
    } ], [ {
        key: "Create",
        value: function(t) {
            return new bn();
        }
    }, {
        key: "Destroy",
        value: function(t, e) {}
    } ]);
    var Sn = bn;
    function bn() {
        return _classCallCheck(this, bn), _possibleConstructorReturn(this, (bn.__proto__ || Object.getPrototypeOf(bn)).call(this));
    }
    Sn.Evaluate_s_edge = new Qi();
    _inherits(gn, mn), _createClass(gn, [ {
        key: "Reset",
        value: function(t, e, i, s) {
            _get(gn.prototype.__proto__ || Object.getPrototypeOf(gn.prototype), "Reset", this).call(this, t, e, i, s);
        }
    }, {
        key: "Evaluate",
        value: function(t, e, i) {
            var s = this.m_fixtureA.GetShape(), n = this.m_fixtureB.GetShape(), o = gn.Evaluate_s_edge;
            s.GetChildEdge(o, this.m_indexA), Xi(t, o, e, n, i);
        }
    } ], [ {
        key: "Create",
        value: function(t) {
            return new gn();
        }
    }, {
        key: "Destroy",
        value: function(t, e) {}
    } ]);
    var An = gn;
    function gn() {
        return _classCallCheck(this, gn), _possibleConstructorReturn(this, (gn.__proto__ || Object.getPrototypeOf(gn)).call(this));
    }
    An.Evaluate_s_edge = new Qi();
    function Vn() {
        _classCallCheck(this, Vn), this.createFcn = null, this.destroyFcn = null, this.primary = !1;
    }
    _createClass(kn, [ {
        key: "AddType",
        value: function(e, t, i, s) {
            var n = this, o = W(256, function(t) {
                return e(n.m_allocator);
            });
            function r(t) {
                return o.pop() || e(t);
            }
            function a(t, e) {
                o.push(t);
            }
            this.m_registers[i][s].createFcn = r, this.m_registers[i][s].destroyFcn = a, this.m_registers[i][s].primary = !0, 
            i !== s && (this.m_registers[s][i].createFcn = r, this.m_registers[s][i].destroyFcn = a, 
            this.m_registers[s][i].primary = !1);
        }
    }, {
        key: "InitializeRegisters",
        value: function() {
            this.m_registers = [];
            for (var t = 0; t < N.b2ShapeType.e_shapeTypeCount; t++) {
                this.m_registers[t] = [];
                for (var e = 0; e < N.b2ShapeType.e_shapeTypeCount; e++) this.m_registers[t][e] = new Vn();
            }
            this.AddType(un.Create, un.Destroy, N.b2ShapeType.e_circleShape, N.b2ShapeType.e_circleShape), 
            this.AddType(yn.Create, yn.Destroy, N.b2ShapeType.e_polygonShape, N.b2ShapeType.e_circleShape), 
            this.AddType(fn.Create, fn.Destroy, N.b2ShapeType.e_polygonShape, N.b2ShapeType.e_polygonShape), 
            this.AddType(vn.Create, vn.Destroy, N.b2ShapeType.e_edgeShape, N.b2ShapeType.e_circleShape), 
            this.AddType(Cn.Create, Cn.Destroy, N.b2ShapeType.e_edgeShape, N.b2ShapeType.e_polygonShape), 
            this.AddType(Sn.Create, Sn.Destroy, N.b2ShapeType.e_chainShape, N.b2ShapeType.e_circleShape), 
            this.AddType(An.Create, An.Destroy, N.b2ShapeType.e_chainShape, N.b2ShapeType.e_polygonShape);
        }
    }, {
        key: "Create",
        value: function(t, e, i, s) {
            var n = t.GetType(), o = i.GetType(), n = this.m_registers[n][o];
            return n.createFcn ? (o = n.createFcn(this.m_allocator), n.primary ? o.Reset(t, e, i, s) : o.Reset(i, s, t, e), 
            o) : null;
        }
    }, {
        key: "Destroy",
        value: function(t) {
            var e = t.m_fixtureA, i = t.m_fixtureB, e = (0 < t.m_manifold.pointCount && !e.IsSensor() && !i.IsSensor() && (e.GetBody().SetAwake(!0), 
            i.GetBody().SetAwake(!0)), e.GetType()), i = i.GetType(), e = this.m_registers[e][i];
            e.destroyFcn && e.destroyFcn(t, this.m_allocator);
        }
    } ]);
    var wn = kn;
    function kn(t) {
        _classCallCheck(this, kn), this.m_allocator = null, this.m_allocator = t, this.InitializeRegisters();
    }
    _createClass(Pn, [ {
        key: "SayGoodbyeJoint",
        value: function(t) {}
    }, {
        key: "SayGoodbyeFixture",
        value: function(t) {}
    }, {
        key: "SayGoodbyeParticleGroup",
        value: function(t) {}
    }, {
        key: "SayGoodbyeParticle",
        value: function(t, e) {}
    } ]);
    var Mn = Pn;
    function Pn() {
        _classCallCheck(this, Pn);
    }
    _createClass(Gn, [ {
        key: "ShouldCollide",
        value: function(t, e) {
            var i = t.GetBody(), s = e.GetBody();
            return (s.GetType() !== N.b2BodyType.b2_staticBody || i.GetType() !== N.b2BodyType.b2_staticBody) && !!s.ShouldCollideConnected(i) && (s = t.GetFilterData(), 
            i = e.GetFilterData(), s.groupIndex === i.groupIndex && 0 !== s.groupIndex ? 0 < s.groupIndex : 0 != (s.maskBits & i.categoryBits) && 0 != (s.categoryBits & i.maskBits));
        }
    }, {
        key: "ShouldCollideFixtureParticle",
        value: function(t, e, i) {
            return !0;
        }
    }, {
        key: "ShouldCollideParticleParticle",
        value: function(t, e, i) {
            return !0;
        }
    } ]);
    var In = Gn;
    function Gn() {
        _classCallCheck(this, Gn);
    }
    In.b2_defaultFilter = new In();
    function Dn() {
        _classCallCheck(this, Dn), this.normalImpulses = H(2), this.tangentImpulses = H(2), 
        this.count = 0;
    }
    _createClass(Tn, [ {
        key: "BeginContact",
        value: function(t) {}
    }, {
        key: "EndContact",
        value: function(t) {}
    }, {
        key: "BeginContactFixtureParticle",
        value: function(t, e) {}
    }, {
        key: "EndContactFixtureParticle",
        value: function(t, e) {}
    }, {
        key: "BeginContactParticleParticle",
        value: function(t, e) {}
    }, {
        key: "EndContactParticleParticle",
        value: function(t, e) {}
    }, {
        key: "PreSolve",
        value: function(t, e) {}
    }, {
        key: "PostSolve",
        value: function(t, e) {}
    } ]);
    var Fn = Tn;
    function Tn() {
        _classCallCheck(this, Tn);
    }
    Fn.b2_defaultListener = new Fn();
    _createClass(Ln, [ {
        key: "ReportFixture",
        value: function(t) {
            return !0;
        }
    }, {
        key: "ReportParticle",
        value: function(t, e) {
            return !1;
        }
    }, {
        key: "ShouldQueryParticleSystem",
        value: function(t) {
            return !0;
        }
    } ]);
    var Rn = Ln;
    function Ln() {
        _classCallCheck(this, Ln);
    }
    _createClass(zn, [ {
        key: "ReportFixture",
        value: function(t, e, i, s) {
            return s;
        }
    }, {
        key: "ReportParticle",
        value: function(t, e, i, s, n) {
            return 0;
        }
    }, {
        key: "ShouldQueryParticleSystem",
        value: function(t) {
            return !0;
        }
    } ]);
    var qn = zn;
    function zn() {
        _classCallCheck(this, zn);
    }
    _createClass(En, [ {
        key: "AddPair",
        value: function(t, e) {
            var i = t.fixture, s = e.fixture, n = t.childIndex, o = e.childIndex, r = i.GetBody(), t = s.GetBody();
            if (r !== t) {
                for (var a = t.GetContactList(); a; ) {
                    if (a.other === r) {
                        var l = a.contact.GetFixtureA(), _ = a.contact.GetFixtureB(), m = a.contact.GetChildIndexA(), h = a.contact.GetChildIndexB();
                        if (l === i && _ === s && m === n && h === o) return;
                        if (l === s && _ === i && m === o && h === n) return;
                    }
                    a = a.next;
                }
                this.m_contactFilter && !this.m_contactFilter.ShouldCollide(i, s) || null !== (e = this.m_contactFactory.Create(i, n, s, o)) && (i = e.GetFixtureA(), 
                s = e.GetFixtureB(), n = e.GetChildIndexA(), o = e.GetChildIndexB(), r = i.m_body, 
                t = s.m_body, e.m_prev = null, e.m_next = this.m_contactList, null !== this.m_contactList && (this.m_contactList.m_prev = e), 
                ((this.m_contactList = e).m_nodeA.contact = e).m_nodeA.other = t, e.m_nodeA.prev = null, 
                e.m_nodeA.next = r.m_contactList, null !== r.m_contactList && (r.m_contactList.prev = e.m_nodeA), 
                r.m_contactList = e.m_nodeA, (e.m_nodeB.contact = e).m_nodeB.other = r, e.m_nodeB.prev = null, 
                e.m_nodeB.next = t.m_contactList, null !== t.m_contactList && (t.m_contactList.prev = e.m_nodeB), 
                t.m_contactList = e.m_nodeB, i.IsSensor() || s.IsSensor() || (r.SetAwake(!0), t.SetAwake(!0)), 
                ++this.m_contactCount);
            }
        }
    }, {
        key: "FindNewContacts",
        value: function() {
            var i = this;
            this.m_broadPhase.UpdatePairs(function(t, e) {
                i.AddPair(t, e);
            });
        }
    }, {
        key: "Destroy",
        value: function(t) {
            var e = t.GetFixtureA(), i = t.GetFixtureB(), e = e.GetBody(), i = i.GetBody();
            this.m_contactListener && t.IsTouching() && this.m_contactListener.EndContact(t), 
            t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), 
            t === this.m_contactList && (this.m_contactList = t.m_next), t.m_nodeA.prev && (t.m_nodeA.prev.next = t.m_nodeA.next), 
            t.m_nodeA.next && (t.m_nodeA.next.prev = t.m_nodeA.prev), t.m_nodeA === e.m_contactList && (e.m_contactList = t.m_nodeA.next), 
            t.m_nodeB.prev && (t.m_nodeB.prev.next = t.m_nodeB.next), t.m_nodeB.next && (t.m_nodeB.next.prev = t.m_nodeB.prev), 
            t.m_nodeB === i.m_contactList && (i.m_contactList = t.m_nodeB.next), this.m_contactFactory.Destroy(t), 
            --this.m_contactCount;
        }
    }, {
        key: "Collide",
        value: function() {
            for (var t = this.m_contactList; t; ) {
                var e = t.GetFixtureA(), i = t.GetFixtureB(), s = t.GetChildIndexA(), n = t.GetChildIndexB(), o = e.GetBody(), r = i.GetBody();
                if (t.m_filterFlag) {
                    if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(e, i)) {
                        var a = t, t = a.m_next;
                        this.Destroy(a);
                        continue;
                    }
                    t.m_filterFlag = !1;
                }
                var a = o.IsAwake() && o.m_type !== N.b2BodyType.b2_staticBody, o = r.IsAwake() && r.m_type !== N.b2BodyType.b2_staticBody;
                a || o ? (r = e.m_proxies[s].treeNode, o = i.m_proxies[n].treeNode, Se(r.aabb, o.aabb) ? (t.Update(this.m_contactListener), 
                t = t.m_next) : (t = (e = t).m_next, this.Destroy(e))) : t = t.m_next;
            }
        }
    } ]);
    var On = En;
    function En() {
        _classCallCheck(this, En), this.m_broadPhase = new Ge(), this.m_contactList = null, 
        this.m_contactCount = 0, this.m_contactFilter = In.b2_defaultFilter, this.m_contactListener = Fn.b2_defaultListener, 
        this.m_allocator = null, this.m_contactFactory = new wn(this.m_allocator);
    }
    _createClass(Jn, [ {
        key: "Reset",
        value: function() {
            return this.step = 0, this.collide = 0, this.solve = 0, this.solveInit = 0, this.solveVelocity = 0, 
            this.solvePosition = 0, this.broadphase = 0, this.solveTOI = 0, this;
        }
    } ]);
    var jn = Jn;
    function Jn() {
        _classCallCheck(this, Jn), this.step = 0, this.collide = 0, this.solve = 0, this.solveInit = 0, 
        this.solveVelocity = 0, this.solvePosition = 0, this.broadphase = 0, this.solveTOI = 0;
    }
    _createClass(Xn, [ {
        key: "Copy",
        value: function(t) {
            return this.dt = t.dt, this.inv_dt = t.inv_dt, this.dtRatio = t.dtRatio, this.positionIterations = t.positionIterations, 
            this.velocityIterations = t.velocityIterations, this.particleIterations = t.particleIterations, 
            this.warmStarting = t.warmStarting, this;
        }
    } ]);
    var Nn = Xn;
    function Xn() {
        _classCallCheck(this, Xn), this.dt = 0, this.inv_dt = 0, this.dtRatio = 0, this.velocityIterations = 0, 
        this.positionIterations = 0, this.particleIterations = 0, this.warmStarting = !1;
    }
    _createClass(Zn, null, [ {
        key: "MakeArray",
        value: function(t) {
            return W(t, function(t) {
                return new Zn();
            });
        }
    } ]);
    var Un = Zn;
    function Zn() {
        _classCallCheck(this, Zn), this.c = new X(), this.a = 0;
    }
    _createClass(Hn, null, [ {
        key: "MakeArray",
        value: function(t) {
            return W(t, function(t) {
                return new Hn();
            });
        }
    } ]);
    var Wn = Hn;
    function Hn() {
        _classCallCheck(this, Hn), this.v = new X(), this.w = 0;
    }
    function Qn() {
        _classCallCheck(this, Qn), this.step = new Nn();
    }
    _createClass(Kn, null, [ {
        key: "MakeArray",
        value: function(t) {
            return W(t, function(t) {
                return new Kn();
            });
        }
    } ]);
    var Yn = Kn;
    function Kn() {
        _classCallCheck(this, Kn), this.rA = new X(), this.rB = new X(), this.normalImpulse = 0, 
        this.tangentImpulse = 0, this.normalMass = 0, this.tangentMass = 0, this.velocityBias = 0;
    }
    _createClass(to, null, [ {
        key: "MakeArray",
        value: function(t) {
            return W(t, function(t) {
                return new to();
            });
        }
    } ]);
    var $n = to;
    function to() {
        _classCallCheck(this, to), this.points = Yn.MakeArray(2), this.normal = new X(), 
        this.tangent = new X(), this.normalMass = new d(), this.K = new d(), this.indexA = 0, 
        this.indexB = 0, this.invMassA = 0, this.invMassB = 0, this.invIA = 0, this.invIB = 0, 
        this.friction = 0, this.restitution = 0, this.tangentSpeed = 0, this.pointCount = 0, 
        this.contactIndex = 0;
    }
    _createClass(io, null, [ {
        key: "MakeArray",
        value: function(t) {
            return W(t, function(t) {
                return new io();
            });
        }
    } ]);
    var eo = io;
    function io() {
        _classCallCheck(this, io), this.localPoints = X.MakeArray(2), this.localNormal = new X(), 
        this.localPoint = new X(), this.indexA = 0, this.indexB = 0, this.invMassA = 0, 
        this.invMassB = 0, this.localCenterA = new X(), this.localCenterB = new X(), this.invIA = 0, 
        this.invIB = 0, this.type = N.b2ManifoldType.e_unknown, this.radiusA = 0, this.radiusB = 0, 
        this.pointCount = 0;
    }
    function so() {
        _classCallCheck(this, so), this.step = new Nn(), this.count = 0, this.allocator = null;
    }
    _createClass(oo, [ {
        key: "Initialize",
        value: function(t, e, i, s) {
            var n = oo.Initialize_s_pointA, o = oo.Initialize_s_pointB, r = oo.Initialize_s_planePoint, a = oo.Initialize_s_clipPoint;
            switch (t.type) {
              case N.b2ManifoldType.e_circles:
                F.MulXV(e, t.localPoint, n), F.MulXV(i, t.localPoints[0], o), X.SubVV(o, n, this.normal).SelfNormalize(), 
                X.MidVV(n, o, this.point), this.separation = X.DotVV(X.SubVV(o, n, X.s_t0), this.normal) - t.radiusA - t.radiusB;
                break;

              case N.b2ManifoldType.e_faceA:
                P.MulRV(e.q, t.localNormal, this.normal), F.MulXV(e, t.localPoint, r), F.MulXV(i, t.localPoints[s], a), 
                this.separation = X.DotVV(X.SubVV(a, r, X.s_t0), this.normal) - t.radiusA - t.radiusB, 
                this.point.Copy(a);
                break;

              case N.b2ManifoldType.e_faceB:
                P.MulRV(i.q, t.localNormal, this.normal), F.MulXV(i, t.localPoint, r), F.MulXV(e, t.localPoints[s], a), 
                this.separation = X.DotVV(X.SubVV(a, r, X.s_t0), this.normal) - t.radiusA - t.radiusB, 
                this.point.Copy(a), this.normal.SelfNeg();
            }
        }
    } ]);
    var no = oo;
    function oo() {
        _classCallCheck(this, oo), this.normal = new X(), this.point = new X(), this.separation = 0;
    }
    no.Initialize_s_pointA = new X(), no.Initialize_s_pointB = new X(), no.Initialize_s_planePoint = new X(), 
    no.Initialize_s_clipPoint = new X();
    _createClass(q, [ {
        key: "Initialize",
        value: function(t) {
            if (this.m_step.Copy(t.step), this.m_allocator = t.allocator, this.m_count = t.count, 
            this.m_positionConstraints.length < this.m_count) for (var e = D(2 * this.m_positionConstraints.length, this.m_count); this.m_positionConstraints.length < e; ) this.m_positionConstraints[this.m_positionConstraints.length] = new eo();
            if (this.m_velocityConstraints.length < this.m_count) for (var i = D(2 * this.m_velocityConstraints.length, this.m_count); this.m_velocityConstraints.length < i; ) this.m_velocityConstraints[this.m_velocityConstraints.length] = new $n();
            this.m_positions = t.positions, this.m_velocities = t.velocities, this.m_contacts = t.contacts;
            for (var s = 0; s < this.m_count; ++s) {
                var n = this.m_contacts[s], o = n.m_fixtureA, r = n.m_fixtureB, a = o.GetShape(), l = r.GetShape(), a = a.m_radius, l = l.m_radius, o = o.GetBody(), r = r.GetBody(), _ = n.GetManifold(), m = _.pointCount, h = this.m_velocityConstraints[s], u = (h.friction = n.m_friction, 
                h.restitution = n.m_restitution, h.tangentSpeed = n.m_tangentSpeed, h.indexA = o.m_islandIndex, 
                h.indexB = r.m_islandIndex, h.invMassA = o.m_invMass, h.invMassB = r.m_invMass, 
                h.invIA = o.m_invI, h.invIB = r.m_invI, h.contactIndex = s, h.pointCount = m, h.K.SetZero(), 
                h.normalMass.SetZero(), this.m_positionConstraints[s]);
                u.indexA = o.m_islandIndex, u.indexB = r.m_islandIndex, u.invMassA = o.m_invMass, 
                u.invMassB = r.m_invMass, u.localCenterA.Copy(o.m_sweep.localCenter), u.localCenterB.Copy(r.m_sweep.localCenter), 
                u.invIA = o.m_invI, u.invIB = r.m_invI, u.localNormal.Copy(_.localNormal), u.localPoint.Copy(_.localPoint), 
                u.pointCount = m, u.radiusA = a, u.radiusB = l, u.type = _.type;
                for (var c = 0; c < m; ++c) {
                    var f = _.points[c], d = h.points[c];
                    this.m_step.warmStarting ? (d.normalImpulse = this.m_step.dtRatio * f.normalImpulse, 
                    d.tangentImpulse = this.m_step.dtRatio * f.tangentImpulse) : (d.normalImpulse = 0, 
                    d.tangentImpulse = 0), d.rA.SetZero(), d.rB.SetZero(), d.normalMass = 0, d.tangentMass = 0, 
                    d.velocityBias = 0, u.localPoints[c].Copy(f.localPoint);
                }
            }
            return this;
        }
    }, {
        key: "InitializeVelocityConstraints",
        value: function() {
            for (var t = q.InitializeVelocityConstraints_s_xfA, e = q.InitializeVelocityConstraints_s_xfB, i = q.InitializeVelocityConstraints_s_worldManifold, s = 0; s < this.m_count; ++s) {
                for (var n = this.m_velocityConstraints[s], o = this.m_positionConstraints[s], r = o.radiusA, a = o.radiusB, l = this.m_contacts[n.contactIndex].GetManifold(), _ = n.indexA, m = n.indexB, h = n.invMassA, u = n.invMassB, c = n.invIA, f = n.invIB, d = o.localCenterA, o = o.localCenterB, y = this.m_positions[_].c, p = this.m_positions[_].a, v = this.m_velocities[_].v, x = this.m_velocities[_].w, C = this.m_positions[m].c, _ = this.m_positions[m].a, B = this.m_velocities[m].v, S = this.m_velocities[m].w, b = (t.q.SetAngle(p), 
                e.q.SetAngle(_), X.SubVV(y, P.MulRV(t.q, d, X.s_t0), t.p), X.SubVV(C, P.MulRV(e.q, o, X.s_t0), e.p), 
                i.Initialize(l, t, r, e, a), n.normal.Copy(i.normal), X.CrossVOne(n.normal, n.tangent), 
                n.pointCount), A = 0; A < b; ++A) {
                    var g = n.points[A], V = (X.SubVV(i.points[A], y, g.rA), X.SubVV(i.points[A], C, g.rB), 
                    X.CrossVV(g.rA, n.normal)), w = X.CrossVV(g.rB, n.normal), V = h + u + c * V * V + f * w * w, w = (g.normalMass = 0 < V ? 1 / V : 0, 
                    n.tangent), V = X.CrossVV(g.rA, w), w = X.CrossVV(g.rB, w), V = h + u + c * V * V + f * w * w, w = (g.tangentMass = 0 < V ? 1 / V : 0, 
                    g.velocityBias = 0, X.DotVV(n.normal, X.SubVV(X.AddVCrossSV(B, S, g.rB, X.s_t0), X.AddVCrossSV(v, x, g.rA, X.s_t1), X.s_t0)));
                    w < -1 && (g.velocityBias += -n.restitution * w);
                }
                n.pointCount;
            }
        }
    }, {
        key: "WarmStart",
        value: function() {
            for (var t = q.WarmStart_s_P, e = 0; e < this.m_count; ++e) {
                for (var i = this.m_velocityConstraints[e], s = i.indexA, n = i.indexB, o = i.invMassA, r = i.invIA, a = i.invMassB, l = i.invIB, _ = i.pointCount, m = this.m_velocities[s].v, h = this.m_velocities[s].w, u = this.m_velocities[n].v, c = this.m_velocities[n].w, f = i.normal, d = i.tangent, y = 0; y < _; ++y) {
                    var p = i.points[y];
                    X.AddVV(X.MulSV(p.normalImpulse, f, X.s_t0), X.MulSV(p.tangentImpulse, d, X.s_t1), t), 
                    h -= r * X.CrossVV(p.rA, t), m.SelfMulSub(o, t), c += l * X.CrossVV(p.rB, t), u.SelfMulAdd(a, t);
                }
                this.m_velocities[s].w = h, this.m_velocities[n].w = c;
            }
        }
    }, {
        key: "SolveVelocityConstraints",
        value: function() {
            for (var t = q.SolveVelocityConstraints_s_dv, e = q.SolveVelocityConstraints_s_P, i = 0; i < this.m_count; ++i) {
                for (var s = this.m_velocityConstraints[i], n = s.indexA, o = s.indexB, r = s.invMassA, a = s.invIA, l = s.invMassB, _ = s.invIB, m = s.pointCount, h = this.m_velocities[n].v, u = this.m_velocities[n].w, c = this.m_velocities[o].v, f = this.m_velocities[o].w, d = s.normal, y = s.tangent, p = s.friction, v = 0; v < m; ++v) {
                    var x = s.points[v], C = (X.SubVV(X.AddVCrossSV(c, f, x.rB, X.s_t0), X.AddVCrossSV(h, u, x.rA, X.s_t1), t), 
                    X.DotVV(t, y) - s.tangentSpeed), C = x.tangentMass * -C, B = p * x.normalImpulse, B = M(x.tangentImpulse + C, -B, B), C = B - x.tangentImpulse;
                    x.tangentImpulse = B, X.MulSV(C, y, e), h.SelfMulSub(r, e), u -= a * X.CrossVV(x.rA, e), 
                    c.SelfMulAdd(l, e), f += _ * X.CrossVV(x.rB, e);
                }
                s.pointCount;
                for (var S = 0; S < m; ++S) {
                    var b = s.points[S], A = (X.SubVV(X.AddVCrossSV(c, f, b.rB, X.s_t0), X.AddVCrossSV(h, u, b.rA, X.s_t1), t), 
                    X.DotVV(t, d)), A = -b.normalMass * (A - b.velocityBias), g = D(b.normalImpulse + A, 0), A = g - b.normalImpulse;
                    b.normalImpulse = g, X.MulSV(A, d, e), h.SelfMulSub(r, e), u -= a * X.CrossVV(b.rA, e), 
                    c.SelfMulAdd(l, e), f += _ * X.CrossVV(b.rB, e);
                }
                this.m_velocities[n].w = u, this.m_velocities[o].w = f;
            }
        }
    }, {
        key: "StoreImpulses",
        value: function() {
            for (var t = 0; t < this.m_count; ++t) for (var e = this.m_velocityConstraints[t], i = this.m_contacts[e.contactIndex].GetManifold(), s = 0; s < e.pointCount; ++s) i.points[s].normalImpulse = e.points[s].normalImpulse, 
            i.points[s].tangentImpulse = e.points[s].tangentImpulse;
        }
    }, {
        key: "SolvePositionConstraints",
        value: function() {
            for (var t = q.SolvePositionConstraints_s_xfA, e = q.SolvePositionConstraints_s_xfB, i = q.SolvePositionConstraints_s_psm, s = q.SolvePositionConstraints_s_rA, n = q.SolvePositionConstraints_s_rB, o = q.SolvePositionConstraints_s_P, r = 0, a = 0; a < this.m_count; ++a) {
                for (var l = this.m_positionConstraints[a], _ = l.indexA, m = l.indexB, h = l.localCenterA, u = l.invMassA, c = l.invIA, f = l.localCenterB, d = l.invMassB, y = l.invIB, p = l.pointCount, v = this.m_positions[_].c, x = this.m_positions[_].a, C = this.m_positions[m].c, B = this.m_positions[m].a, S = 0; S < p; ++S) {
                    t.q.SetAngle(x), e.q.SetAngle(B), X.SubVV(v, P.MulRV(t.q, h, X.s_t0), t.p), X.SubVV(C, P.MulRV(e.q, f, X.s_t0), e.p), 
                    i.Initialize(l, t, e, S);
                    var b = i.normal, A = i.point, g = i.separation, A = (X.SubVV(A, v, s), X.SubVV(A, C, n), 
                    r = L(r, g), M(.2 * (g + G), -O, 0)), g = X.CrossVV(s, b), V = X.CrossVV(n, b), g = u + d + c * g * g + y * V * V;
                    X.MulSV(0 < g ? -A / g : 0, b, o), v.SelfMulSub(u, o), x -= c * X.CrossVV(s, o), 
                    C.SelfMulAdd(d, o), B += y * X.CrossVV(n, o);
                }
                this.m_positions[_].a = x, this.m_positions[m].a = B;
            }
            return -3 * G < r;
        }
    }, {
        key: "SolveTOIPositionConstraints",
        value: function(t, e) {
            for (var i = q.SolveTOIPositionConstraints_s_xfA, s = q.SolveTOIPositionConstraints_s_xfB, n = q.SolveTOIPositionConstraints_s_psm, o = q.SolveTOIPositionConstraints_s_rA, r = q.SolveTOIPositionConstraints_s_rB, a = q.SolveTOIPositionConstraints_s_P, l = 0, _ = 0; _ < this.m_count; ++_) {
                for (var m = this.m_positionConstraints[_], h = m.indexA, u = m.indexB, c = m.localCenterA, f = m.localCenterB, d = m.pointCount, y = 0, p = 0, v = (h !== t && h !== e || (y = m.invMassA, 
                p = m.invIA), 0), x = 0, C = (u !== t && u !== e || (v = m.invMassB, x = m.invIB), 
                this.m_positions[h].c), B = this.m_positions[h].a, S = this.m_positions[u].c, b = this.m_positions[u].a, A = 0; A < d; ++A) {
                    i.q.SetAngle(B), s.q.SetAngle(b), X.SubVV(C, P.MulRV(i.q, c, X.s_t0), i.p), X.SubVV(S, P.MulRV(s.q, f, X.s_t0), s.p), 
                    n.Initialize(m, i, s, A);
                    var g = n.normal, V = n.point, w = n.separation, V = (X.SubVV(V, C, o), X.SubVV(V, S, r), 
                    l = L(l, w), M(.75 * (w + G), -O, 0)), w = X.CrossVV(o, g), k = X.CrossVV(r, g), w = y + v + p * w * w + x * k * k;
                    X.MulSV(0 < w ? -V / w : 0, g, a), C.SelfMulSub(y, a), B -= p * X.CrossVV(o, a), 
                    S.SelfMulAdd(v, a), b += x * X.CrossVV(r, a);
                }
                this.m_positions[h].a = B, this.m_positions[u].a = b;
            }
            return -.012 <= l;
        }
    } ]);
    var a = q;
    function q() {
        _classCallCheck(this, q), this.m_step = new Nn(), this.m_allocator = null, this.m_positionConstraints = eo.MakeArray(1024), 
        this.m_velocityConstraints = $n.MakeArray(1024), this.m_count = 0;
    }
    a.InitializeVelocityConstraints_s_xfA = new F(), a.InitializeVelocityConstraints_s_xfB = new F(), 
    a.InitializeVelocityConstraints_s_worldManifold = new e(), a.WarmStart_s_P = new X(), 
    a.SolveVelocityConstraints_s_dv = new X(), a.SolveVelocityConstraints_s_dv1 = new X(), 
    a.SolveVelocityConstraints_s_dv2 = new X(), a.SolveVelocityConstraints_s_P = new X(), 
    a.SolveVelocityConstraints_s_a = new X(), a.SolveVelocityConstraints_s_b = new X(), 
    a.SolveVelocityConstraints_s_x = new X(), a.SolveVelocityConstraints_s_d = new X(), 
    a.SolveVelocityConstraints_s_P1 = new X(), a.SolveVelocityConstraints_s_P2 = new X(), 
    a.SolveVelocityConstraints_s_P1P2 = new X(), a.SolvePositionConstraints_s_xfA = new F(), 
    a.SolvePositionConstraints_s_xfB = new F(), a.SolvePositionConstraints_s_psm = new no(), 
    a.SolvePositionConstraints_s_rA = new X(), a.SolvePositionConstraints_s_rB = new X(), 
    a.SolvePositionConstraints_s_P = new X(), a.SolveTOIPositionConstraints_s_xfA = new F(), 
    a.SolveTOIPositionConstraints_s_xfB = new F(), a.SolveTOIPositionConstraints_s_psm = new no(), 
    a.SolveTOIPositionConstraints_s_rA = new X(), a.SolveTOIPositionConstraints_s_rB = new X(), 
    a.SolveTOIPositionConstraints_s_P = new X();
    _createClass(ao, [ {
        key: "Initialize",
        value: function(t, e, i, s, n) {
            if (this.m_bodyCapacity = t, this.m_contactCapacity = e, this.m_jointCapacity = i, 
            this.m_bodyCount = 0, this.m_contactCount = 0, this.m_jointCount = 0, this.m_allocator = s, 
            this.m_listener = n, this.m_positions.length < t) for (var o = D(2 * this.m_positions.length, t); this.m_positions.length < o; ) this.m_positions[this.m_positions.length] = new Un();
            if (this.m_velocities.length < t) for (var r = D(2 * this.m_velocities.length, t); this.m_velocities.length < r; ) this.m_velocities[this.m_velocities.length] = new Wn();
        }
    }, {
        key: "Clear",
        value: function() {
            this.m_bodyCount = 0, this.m_contactCount = 0, this.m_jointCount = 0;
        }
    }, {
        key: "AddBody",
        value: function(t) {
            t.m_islandIndex = this.m_bodyCount, this.m_bodies[this.m_bodyCount++] = t;
        }
    }, {
        key: "AddContact",
        value: function(t) {
            this.m_contacts[this.m_contactCount++] = t;
        }
    }, {
        key: "AddJoint",
        value: function(t) {
            this.m_joints[this.m_jointCount++] = t;
        }
    }, {
        key: "Solve",
        value: function(t, e, i, s) {
            for (var n = ao.s_timer.Reset(), o = e.dt, r = 0; r < this.m_bodyCount; ++r) {
                var a = this.m_bodies[r], l = (this.m_positions[r].c.Copy(a.m_sweep.c), a.m_sweep.a), _ = this.m_velocities[r].v.Copy(a.m_linearVelocity), m = a.m_angularVelocity;
                a.m_sweep.c0.Copy(a.m_sweep.c), a.m_sweep.a0 = a.m_sweep.a, a.m_type === N.b2BodyType.b2_dynamicBody && (_.x += o * (a.m_gravityScale * i.x + a.m_invMass * a.m_force.x), 
                _.y += o * (a.m_gravityScale * i.y + a.m_invMass * a.m_force.y), m += o * a.m_invI * a.m_torque, 
                _.SelfMul(1 / (1 + o * a.m_linearDamping)), m *= 1 / (1 + o * a.m_angularDamping)), 
                this.m_positions[r].a = l, this.m_velocities[r].w = m;
            }
            n.Reset();
            var h = ao.s_solverData, u = (h.step.Copy(e), h.positions = this.m_positions, h.velocities = this.m_velocities, 
            ao.s_contactSolverDef), c = (u.step.Copy(e), u.contacts = this.m_contacts, u.count = this.m_contactCount, 
            u.positions = this.m_positions, u.velocities = this.m_velocities, u.allocator = this.m_allocator, 
            ao.s_contactSolver.Initialize(u));
            c.InitializeVelocityConstraints(), e.warmStarting && c.WarmStart();
            for (var f = 0; f < this.m_jointCount; ++f) this.m_joints[f].InitVelocityConstraints(h);
            t.solveInit = n.GetMilliseconds(), n.Reset();
            for (var d = 0; d < e.velocityIterations; ++d) {
                for (var y = 0; y < this.m_jointCount; ++y) this.m_joints[y].SolveVelocityConstraints(h);
                c.SolveVelocityConstraints();
            }
            c.StoreImpulses(), t.solveVelocity = n.GetMilliseconds();
            for (var p = 0; p < this.m_bodyCount; ++p) {
                var v = this.m_positions[p].c, x = this.m_positions[p].a, C = this.m_velocities[p].v, B = this.m_velocities[p].w, S = X.MulSV(o, C, ao.s_translation), S = (4 < X.DotVV(S, S) && (S = 2 / S.Length(), 
                C.SelfMul(S)), o * B);
                j < S * S && (B *= E / R(S)), v.x += o * C.x, v.y += o * C.y, x += o * B, this.m_positions[p].a = x, 
                this.m_velocities[p].w = B;
            }
            n.Reset();
            for (var b = !1, A = 0; A < e.positionIterations; ++A) {
                for (var g = c.SolvePositionConstraints(), V = !0, w = 0; w < this.m_jointCount; ++w) var k = this.m_joints[w].SolvePositionConstraints(h), V = V && k;
                if (g && V) {
                    b = !0;
                    break;
                }
            }
            for (var M = 0; M < this.m_bodyCount; ++M) {
                var P = this.m_bodies[M];
                P.m_sweep.c.Copy(this.m_positions[M].c), P.m_sweep.a = this.m_positions[M].a, P.m_linearVelocity.Copy(this.m_velocities[M].v), 
                P.m_angularVelocity = this.m_velocities[M].w, P.SynchronizeTransform();
            }
            if (t.solvePosition = n.GetMilliseconds(), this.Report(c.m_velocityConstraints), 
            s) {
                for (var I = T, G = 0; G < this.m_bodyCount; ++G) {
                    var D = this.m_bodies[G];
                    D.GetType() !== N.b2BodyType.b2_staticBody && (I = !D.m_autoSleepFlag || .0012184696791469947 < D.m_angularVelocity * D.m_angularVelocity || 1e-4 < X.DotVV(D.m_linearVelocity, D.m_linearVelocity) ? D.m_sleepTime = 0 : (D.m_sleepTime += o, 
                    L(I, D.m_sleepTime)));
                }
                if (.5 <= I && b) for (var F = 0; F < this.m_bodyCount; ++F) this.m_bodies[F].SetAwake(!1);
            }
        }
    }, {
        key: "SolveTOI",
        value: function(t, e, i) {
            for (var s = 0; s < this.m_bodyCount; ++s) {
                var n = this.m_bodies[s];
                this.m_positions[s].c.Copy(n.m_sweep.c), this.m_positions[s].a = n.m_sweep.a, this.m_velocities[s].v.Copy(n.m_linearVelocity), 
                this.m_velocities[s].w = n.m_angularVelocity;
            }
            for (var o = ao.s_contactSolverDef, r = (o.contacts = this.m_contacts, o.count = this.m_contactCount, 
            o.allocator = this.m_allocator, o.step.Copy(t), o.positions = this.m_positions, 
            o.velocities = this.m_velocities, ao.s_contactSolver.Initialize(o)), a = 0; a < t.positionIterations && !r.SolveTOIPositionConstraints(e, i); ++a) ;
            this.m_bodies[e].m_sweep.c0.Copy(this.m_positions[e].c), this.m_bodies[e].m_sweep.a0 = this.m_positions[e].a, 
            this.m_bodies[i].m_sweep.c0.Copy(this.m_positions[i].c), this.m_bodies[i].m_sweep.a0 = this.m_positions[i].a, 
            r.InitializeVelocityConstraints();
            for (var l = 0; l < t.velocityIterations; ++l) r.SolveVelocityConstraints();
            for (var _ = t.dt, m = 0; m < this.m_bodyCount; ++m) {
                var h = this.m_positions[m].c, u = this.m_positions[m].a, c = this.m_velocities[m].v, f = this.m_velocities[m].w, d = X.MulSV(_, c, ao.s_translation), d = (4 < X.DotVV(d, d) && (d = 2 / d.Length(), 
                c.SelfMul(d)), _ * f), d = (j < d * d && (f *= E / R(d)), h.SelfMulAdd(_, c), u += _ * f, 
                this.m_positions[m].a = u, this.m_velocities[m].w = f, this.m_bodies[m]);
                d.m_sweep.c.Copy(h), d.m_sweep.a = u, d.m_linearVelocity.Copy(c), d.m_angularVelocity = f, 
                d.SynchronizeTransform();
            }
            this.Report(r.m_velocityConstraints);
        }
    }, {
        key: "Report",
        value: function(t) {
            if (null !== this.m_listener) for (var e = 0; e < this.m_contactCount; ++e) {
                var i = this.m_contacts[e];
                if (i) {
                    var s = t[e], n = ao.s_impulse;
                    n.count = s.pointCount;
                    for (var o = 0; o < s.pointCount; ++o) n.normalImpulses[o] = s.points[o].normalImpulse, 
                    n.tangentImpulses[o] = s.points[o].tangentImpulse;
                    this.m_listener.PostSolve(i, n);
                }
            }
        }
    } ]);
    var ro = ao;
    function ao() {
        _classCallCheck(this, ao), this.m_allocator = null, this.m_bodies = [], this.m_contacts = [], 
        this.m_joints = [], this.m_positions = Un.MakeArray(1024), this.m_velocities = Wn.MakeArray(1024), 
        this.m_bodyCount = 0, this.m_jointCount = 0, this.m_contactCount = 0, this.m_bodyCapacity = 0, 
        this.m_contactCapacity = 0, this.m_jointCapacity = 0;
    }
    ro.s_timer = new Bt(), ro.s_solverData = new Qn(), ro.s_contactSolverDef = new so(), 
    ro.s_contactSolver = new a(), ro.s_translation = new X(), ro.s_impulse = new Dn(), 
    (h = N.b2ParticleFlag || (N.b2ParticleFlag = {}))[h.b2_waterParticle = 0] = "b2_waterParticle", 
    h[h.b2_zombieParticle = 2] = "b2_zombieParticle", h[h.b2_wallParticle = 4] = "b2_wallParticle", 
    h[h.b2_springParticle = 8] = "b2_springParticle", h[h.b2_elasticParticle = 16] = "b2_elasticParticle", 
    h[h.b2_viscousParticle = 32] = "b2_viscousParticle", h[h.b2_powderParticle = 64] = "b2_powderParticle", 
    h[h.b2_tensileParticle = 128] = "b2_tensileParticle", h[h.b2_colorMixingParticle = 256] = "b2_colorMixingParticle", 
    h[h.b2_destructionListenerParticle = 512] = "b2_destructionListenerParticle", h[h.b2_barrierParticle = 1024] = "b2_barrierParticle", 
    h[h.b2_staticPressureParticle = 2048] = "b2_staticPressureParticle", h[h.b2_reactiveParticle = 4096] = "b2_reactiveParticle", 
    h[h.b2_repulsiveParticle = 8192] = "b2_repulsiveParticle", h[h.b2_fixtureContactListenerParticle = 16384] = "b2_fixtureContactListenerParticle", 
    h[h.b2_particleContactListenerParticle = 32768] = "b2_particleContactListenerParticle", 
    h[h.b2_fixtureContactFilterParticle = 65536] = "b2_fixtureContactFilterParticle", 
    h[h.b2_particleContactFilterParticle = 131072] = "b2_particleContactFilterParticle";
    function lo() {
        _classCallCheck(this, lo), this.flags = 0, this.position = new X(), this.velocity = new X(), 
        this.color = new o(0, 0, 0, 0), this.lifetime = 0, this.userData = null, this.group = null;
    }
    function _o(t, e, i) {
        return M(Math.ceil(Math.sqrt(t / (.01 * e)) * i), 1, 8);
    }
    _createClass(ho, [ {
        key: "GetIndex",
        value: function() {
            return this.m_index;
        }
    }, {
        key: "SetIndex",
        value: function(t) {
            this.m_index = t;
        }
    } ]);
    var mo = ho;
    function ho() {
        _classCallCheck(this, ho), this.m_index = J;
    }
    (h = N.b2ParticleGroupFlag || (N.b2ParticleGroupFlag = {}))[h.b2_solidParticleGroup = 1] = "b2_solidParticleGroup", 
    h[h.b2_rigidParticleGroup = 2] = "b2_rigidParticleGroup", h[h.b2_particleGroupCanBeEmpty = 4] = "b2_particleGroupCanBeEmpty", 
    h[h.b2_particleGroupWillBeDestroyed = 8] = "b2_particleGroupWillBeDestroyed", h[h.b2_particleGroupNeedsUpdateDepth = 16] = "b2_particleGroupNeedsUpdateDepth", 
    h[h.b2_particleGroupInternalMask = 24] = "b2_particleGroupInternalMask";
    function uo() {
        _classCallCheck(this, uo), this.flags = 0, this.groupFlags = 0, this.position = new X(), 
        this.angle = 0, this.linearVelocity = new X(), this.angularVelocity = 0, this.color = new o(), 
        this.strength = 1, this.shapeCount = 0, this.stride = 0, this.particleCount = 0, 
        this.lifetime = 0, this.userData = null, this.group = null;
    }
    _createClass(fo, [ {
        key: "GetNext",
        value: function() {
            return this.m_next;
        }
    }, {
        key: "GetParticleSystem",
        value: function() {
            return this.m_system;
        }
    }, {
        key: "GetParticleCount",
        value: function() {
            return this.m_lastIndex - this.m_firstIndex;
        }
    }, {
        key: "GetBufferIndex",
        value: function() {
            return this.m_firstIndex;
        }
    }, {
        key: "ContainsParticle",
        value: function(t) {
            return this.m_firstIndex <= t && t < this.m_lastIndex;
        }
    }, {
        key: "GetAllParticleFlags",
        value: function() {
            if (!this.m_system.m_flagsBuffer.data) throw new Error();
            for (var t = 0, e = this.m_firstIndex; e < this.m_lastIndex; e++) t |= this.m_system.m_flagsBuffer.data[e];
            return t;
        }
    }, {
        key: "GetGroupFlags",
        value: function() {
            return this.m_groupFlags;
        }
    }, {
        key: "SetGroupFlags",
        value: function(t) {
            t |= this.m_groupFlags & N.b2ParticleGroupFlag.b2_particleGroupInternalMask, this.m_system.SetGroupFlags(this, t);
        }
    }, {
        key: "GetMass",
        value: function() {
            return this.UpdateStatistics(), this.m_mass;
        }
    }, {
        key: "GetInertia",
        value: function() {
            return this.UpdateStatistics(), this.m_inertia;
        }
    }, {
        key: "GetCenter",
        value: function() {
            return this.UpdateStatistics(), this.m_center;
        }
    }, {
        key: "GetLinearVelocity",
        value: function() {
            return this.UpdateStatistics(), this.m_linearVelocity;
        }
    }, {
        key: "GetAngularVelocity",
        value: function() {
            return this.UpdateStatistics(), this.m_angularVelocity;
        }
    }, {
        key: "GetTransform",
        value: function() {
            return this.m_transform;
        }
    }, {
        key: "GetPosition",
        value: function() {
            return this.m_transform.p;
        }
    }, {
        key: "GetAngle",
        value: function() {
            return this.m_transform.q.GetAngle();
        }
    }, {
        key: "GetLinearVelocityFromWorldPoint",
        value: function(t, e) {
            var i = fo.GetLinearVelocityFromWorldPoint_s_t0;
            return this.UpdateStatistics(), X.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, X.SubVV(t, this.m_center, i), e);
        }
    }, {
        key: "GetUserData",
        value: function() {
            return this.m_userData;
        }
    }, {
        key: "SetUserData",
        value: function(t) {
            this.m_userData = t;
        }
    }, {
        key: "ApplyForce",
        value: function(t) {
            this.m_system.ApplyForce(this.m_firstIndex, this.m_lastIndex, t);
        }
    }, {
        key: "ApplyLinearImpulse",
        value: function(t) {
            this.m_system.ApplyLinearImpulse(this.m_firstIndex, this.m_lastIndex, t);
        }
    }, {
        key: "DestroyParticles",
        value: function(t) {
            if (this.m_system.m_world.IsLocked()) throw new Error();
            for (var e = this.m_firstIndex; e < this.m_lastIndex; e++) this.m_system.DestroyParticle(e, t);
        }
    }, {
        key: "UpdateStatistics",
        value: function() {
            if (!this.m_system.m_positionBuffer.data) throw new Error();
            if (!this.m_system.m_velocityBuffer.data) throw new Error();
            var t = new X(), e = new X();
            if (this.m_timestamp !== this.m_system.m_timestamp) {
                var i = this.m_system.GetParticleMass();
                this.m_mass = i * (this.m_lastIndex - this.m_firstIndex), this.m_center.SetZero(), 
                this.m_linearVelocity.SetZero();
                for (var s, n = this.m_firstIndex; n < this.m_lastIndex; n++) this.m_center.SelfMulAdd(i, this.m_system.m_positionBuffer.data[n]), 
                this.m_linearVelocity.SelfMulAdd(i, this.m_system.m_velocityBuffer.data[n]);
                0 < this.m_mass && (s = 1 / this.m_mass, this.m_center.SelfMul(s), this.m_linearVelocity.SelfMul(s)), 
                this.m_inertia = 0, this.m_angularVelocity = 0;
                for (var o = this.m_firstIndex; o < this.m_lastIndex; o++) X.SubVV(this.m_system.m_positionBuffer.data[o], this.m_center, t), 
                X.SubVV(this.m_system.m_velocityBuffer.data[o], this.m_linearVelocity, e), this.m_inertia += i * X.DotVV(t, t), 
                this.m_angularVelocity += i * X.CrossVV(t, e);
                0 < this.m_inertia && (this.m_angularVelocity *= 1 / this.m_inertia), this.m_timestamp = this.m_system.m_timestamp;
            }
        }
    } ]);
    var co = fo;
    function fo(t) {
        _classCallCheck(this, fo), this.m_firstIndex = 0, this.m_lastIndex = 0, this.m_groupFlags = 0, 
        this.m_strength = 1, this.m_prev = null, this.m_next = null, this.m_timestamp = -1, 
        this.m_mass = 0, this.m_inertia = 0, this.m_center = new X(), this.m_linearVelocity = new X(), 
        this.m_angularVelocity = 0, this.m_transform = new F(), this.m_userData = null, 
        this.m_system = t;
    }
    co.GetLinearVelocityFromWorldPoint_s_t0 = new X();
    _createClass(po, [ {
        key: "Push",
        value: function(t) {
            if (this.m_back >= this.m_capacity) {
                for (var e = this.m_front; e < this.m_back; e++) this.m_buffer[e - this.m_front] = this.m_buffer[e];
                this.m_back -= this.m_front, this.m_front = 0, this.m_back >= this.m_capacity && (0 < this.m_capacity ? (this.m_buffer.concat(W(this.m_capacity, function(t) {
                    return null;
                })), this.m_capacity *= 2) : (this.m_buffer.concat(W(1, function(t) {
                    return null;
                })), this.m_capacity = 1));
            }
            this.m_buffer[this.m_back] = t, this.m_back++;
        }
    }, {
        key: "Pop",
        value: function() {
            this.m_buffer[this.m_front] = null, this.m_front++;
        }
    }, {
        key: "Empty",
        value: function() {
            return this.m_front === this.m_back;
        }
    }, {
        key: "Front",
        value: function() {
            var t = this.m_buffer[this.m_front];
            if (t) return t;
            throw new Error();
        }
    } ]);
    var yo = po;
    function po(t) {
        _classCallCheck(this, po), this.m_front = 0, this.m_back = 0, this.m_capacity = 0, 
        this.m_buffer = W(t, function(t) {
            return null;
        }), this.m_capacity = t;
    }
    _createClass(xo, [ {
        key: "AddGenerator",
        value: function(t, e, i) {
            var s = this.m_generatorBuffer[this.m_generatorCount++];
            s.center.Copy(t), s.tag = e, s.necessary = i;
        }
    }, {
        key: "Generate",
        value: function(t, e) {
            for (var i = 1 / t, s = new X(+T, +T), n = new X(-T, -T), o = 0, r = 0; r < this.m_generatorCount; r++) {
                var a = this.m_generatorBuffer[r];
                a.necessary && (X.MinV(s, a.center, s), X.MaxV(n, a.center, n), ++o);
            }
            if (0 === o) this.m_countX = 0, this.m_countY = 0; else {
                s.x -= e, s.y -= e, n.x += e, n.y += e, this.m_countX = 1 + Math.floor(i * (n.x - s.x)), 
                this.m_countY = 1 + Math.floor(i * (n.y - s.y)), this.m_diagram = [];
                for (var l = new yo(4 * this.m_countX * this.m_countY), _ = 0; _ < this.m_generatorCount; _++) {
                    var m = this.m_generatorBuffer[_], h = (m.center.SelfSub(s).SelfMul(i), Math.floor(m.center.x)), u = Math.floor(m.center.y);
                    0 <= h && 0 <= u && h < this.m_countX && u < this.m_countY && l.Push(new xo.Task(h, u, h + u * this.m_countX, m));
                }
                for (;!l.Empty(); ) {
                    var c = l.Front(), f = c.m_x, d = c.m_y, y = c.m_i, c = c.m_generator;
                    l.Pop(), this.m_diagram[y] || (this.m_diagram[y] = c, 0 < f && l.Push(new xo.Task(f - 1, d, y - 1, c)), 
                    0 < d && l.Push(new xo.Task(f, d - 1, y - this.m_countX, c)), f < this.m_countX - 1 && l.Push(new xo.Task(f + 1, d, y + 1, c)), 
                    d < this.m_countY - 1 && l.Push(new xo.Task(f, d + 1, y + this.m_countX, c)));
                }
                for (var p = 0; p < this.m_countY; p++) for (var v = 0; v < this.m_countX - 1; v++) {
                    var x = v + p * this.m_countX, C = this.m_diagram[x], B = this.m_diagram[x + 1];
                    C !== B && (l.Push(new xo.Task(v, p, x, B)), l.Push(new xo.Task(v + 1, p, x + 1, C)));
                }
                for (var S = 0; S < this.m_countY - 1; S++) for (var b = 0; b < this.m_countX; b++) {
                    var A = b + S * this.m_countX, g = this.m_diagram[A], V = this.m_diagram[A + this.m_countX];
                    g !== V && (l.Push(new xo.Task(b, S, A, V)), l.Push(new xo.Task(b, S + 1, A + this.m_countX, g)));
                }
                for (;!l.Empty(); ) {
                    var w, k, M = l.Front(), P = M.m_x, I = M.m_y, G = M.m_i, M = M.m_generator, D = (l.Pop(), 
                    this.m_diagram[G]);
                    D !== M && (w = D.center.x - P, D = D.center.y - I, (k = M.center.x - P) * k + (k = M.center.y - I) * k < w * w + D * D) && (this.m_diagram[G] = M, 
                    0 < P && l.Push(new xo.Task(P - 1, I, G - 1, M)), 0 < I && l.Push(new xo.Task(P, I - 1, G - this.m_countX, M)), 
                    P < this.m_countX - 1 && l.Push(new xo.Task(P + 1, I, G + 1, M)), I < this.m_countY - 1) && l.Push(new xo.Task(P, I + 1, G + this.m_countX, M));
                }
            }
        }
    }, {
        key: "GetNodes",
        value: function(t) {
            for (var e = 0; e < this.m_countY - 1; e++) for (var i = 0; i < this.m_countX - 1; i++) {
                var s = i + e * this.m_countX, n = this.m_diagram[s], o = this.m_diagram[s + 1], r = this.m_diagram[s + this.m_countX], s = this.m_diagram[s + 1 + this.m_countX];
                o !== r && (n !== o && n !== r && (n.necessary || o.necessary || r.necessary) && t(n.tag, o.tag, r.tag), 
                s !== o) && s !== r && (n.necessary || o.necessary || r.necessary) && t(o.tag, s.tag, r.tag);
            }
        }
    } ]);
    var vo = xo;
    function xo(t) {
        _classCallCheck(this, xo), this.m_generatorCapacity = 0, this.m_generatorCount = 0, 
        this.m_countX = 0, this.m_countY = 0, this.m_diagram = [], this.m_generatorBuffer = W(t, function(t) {
            return new xo.Generator();
        }), this.m_generatorCapacity = t;
    }
    var h = vo = xo || {};
    function Co(t, e, i, s) {
        _classCallCheck(this, Co), this.m_x = t, this.m_y = e, this.m_i = i, this.m_generator = s;
    }
    function Bo(t, e, i) {
        var s = t[e];
        t[e] = t[i], t[i] = s;
    }
    function So(t, e) {
        return t < e;
    }
    function bo(t, e, i, s) {
        for (var e = 1 < arguments.length && void 0 !== e ? e : 0, n = 2 < arguments.length && void 0 !== i ? i : t.length - e, o = 3 < arguments.length && void 0 !== s ? s : So, r = e, a = [], l = 0; ;) {
            for (;r + 1 < n; n++) {
                var _ = t[r + Math.floor(Math.random() * (n - r))];
                a[l++] = n;
                for (var m = r - 1; ;) {
                    for (;o(t[++m], _); ) ;
                    for (;o(_, t[--n]); ) ;
                    if (n <= m) break;
                    Bo(t, m, n);
                }
            }
            if (0 === l) break;
            r = n, n = a[--l];
        }
        return t;
    }
    function Ao(t, e, i, s) {
        e = 1 < arguments.length && void 0 !== e ? e : 0;
        bo(t, e, 2 < arguments.length && void 0 !== i ? i : t.length - e, 3 < arguments.length && void 0 !== s ? s : So);
    }
    function go(t, e, i) {
        for (var s = 2 < arguments.length && void 0 !== i ? i : t.length, n = 0, o = 0; o < s; ++o) e(t[o]) || (o === n ? ++n : Bo(t, n++, o));
        return n;
    }
    function Vo(t, e, i, s, n) {
        for (var o = i - e; 0 < o; ) {
            var r = Math.floor(o / 2), a = e + r;
            n(t[a], s) ? (e = ++a, o -= r + 1) : o = r;
        }
        return e;
    }
    function wo(t, e, i, s, n) {
        for (var o = i - e; 0 < o; ) {
            var r = Math.floor(o / 2), a = e + r;
            n(s, t[a]) ? o = r : (e = ++a, o -= r + 1);
        }
        return e;
    }
    function ko(t, e, i, s) {
        for (var n = i; e !== n; ) Bo(t, e++, n++), n === s ? n = i : e === i && (i = n);
    }
    h.Generator = function t() {
        _classCallCheck(this, t), this.center = new X(), this.tag = 0, this.necessary = !1;
    }, h.Task = Co;
    _createClass(Po, [ {
        key: "Append",
        value: function() {
            return this.count >= this.capacity && this.Grow(), this.count++;
        }
    }, {
        key: "Reserve",
        value: function(t) {
            if (!(this.capacity >= t)) {
                for (var e = this.capacity; e < t; ++e) this.data[e] = this.allocator();
                this.capacity = t;
            }
        }
    }, {
        key: "Grow",
        value: function() {
            var t = this.capacity ? 2 * this.capacity : 256;
            this.Reserve(t);
        }
    }, {
        key: "Free",
        value: function() {
            0 !== this.data.length && (this.data = [], this.capacity = 0, this.count = 0);
        }
    }, {
        key: "Shorten",
        value: function(t) {}
    }, {
        key: "Data",
        value: function() {
            return this.data;
        }
    }, {
        key: "GetCount",
        value: function() {
            return this.count;
        }
    }, {
        key: "SetCount",
        value: function(t) {
            this.count = t;
        }
    }, {
        key: "GetCapacity",
        value: function() {
            return this.capacity;
        }
    }, {
        key: "RemoveIf",
        value: function(t) {
            this.count = go(this.data, t, this.count);
        }
    }, {
        key: "Unique",
        value: function(t) {
            this.count = function(t, e, i, s) {
                if (e === i) return i;
                for (var n = e; ++e !== i; ) s(t[n], t[e]) || Bo(t, ++n, e);
                return ++n;
            }(this.data, 0, this.count, t);
        }
    } ]);
    var Mo = Po;
    function Po(t) {
        _classCallCheck(this, Po), this.data = [], this.count = 0, this.capacity = 0, this.allocator = t;
    }
    _inherits(Io, Rn), _createClass(Io, [ {
        key: "ShouldQueryParticleSystem",
        value: function(t) {
            return !1;
        }
    }, {
        key: "ReportFixture",
        value: function(t) {
            if (!t.IsSensor()) for (var e = t.GetShape().GetChildCount(), i = 0; i < e; i++) for (var s, n = t.GetAABB(i), o = this.m_system.GetInsideBoundsEnumerator(n); 0 <= (s = o.GetNext()); ) this.ReportFixtureAndParticle(t, i, s);
            return !0;
        }
    }, {
        key: "ReportParticle",
        value: function(t, e) {
            return !1;
        }
    }, {
        key: "ReportFixtureAndParticle",
        value: function(t, e, i) {}
    } ]);
    h = Io;
    function Io(t) {
        _classCallCheck(this, Io);
        var e = _possibleConstructorReturn(this, (Io.__proto__ || Object.getPrototypeOf(Io)).call(this));
        return e.m_system = t, e;
    }
    _createClass(Do, [ {
        key: "SetIndices",
        value: function(t, e) {
            this.indexA = t, this.indexB = e;
        }
    }, {
        key: "SetWeight",
        value: function(t) {
            this.weight = t;
        }
    }, {
        key: "SetNormal",
        value: function(t) {
            this.normal.Copy(t);
        }
    }, {
        key: "SetFlags",
        value: function(t) {
            this.flags = t;
        }
    }, {
        key: "GetIndexA",
        value: function() {
            return this.indexA;
        }
    }, {
        key: "GetIndexB",
        value: function() {
            return this.indexB;
        }
    }, {
        key: "GetWeight",
        value: function() {
            return this.weight;
        }
    }, {
        key: "GetNormal",
        value: function() {
            return this.normal;
        }
    }, {
        key: "GetFlags",
        value: function() {
            return this.flags;
        }
    }, {
        key: "IsEqual",
        value: function(t) {
            return this.indexA === t.indexA && this.indexB === t.indexB && this.flags === t.flags && this.weight === t.weight && this.normal.x === t.normal.x && this.normal.y === t.normal.y;
        }
    }, {
        key: "IsNotEqual",
        value: function(t) {
            return !this.IsEqual(t);
        }
    }, {
        key: "ApproximatelyEqual",
        value: function(t) {
            return this.indexA === t.indexA && this.indexB === t.indexB && this.flags === t.flags && R(this.weight - t.weight) < .01 && X.DistanceSquaredVV(this.normal, t.normal) < 1e-4;
        }
    } ]);
    var Go = Do;
    function Do() {
        _classCallCheck(this, Do), this.indexA = 0, this.indexB = 0, this.weight = 0, this.normal = new X(), 
        this.flags = 0;
    }
    function Fo() {
        _classCallCheck(this, Fo), this.index = 0, this.weight = 0, this.normal = new X(), 
        this.mass = 0;
    }
    function To() {
        _classCallCheck(this, To), this.indexA = 0, this.indexB = 0, this.flags = 0, this.strength = 0, 
        this.distance = 0;
    }
    function Ro() {
        _classCallCheck(this, Ro), this.indexA = 0, this.indexB = 0, this.indexC = 0, this.flags = 0, 
        this.strength = 0, this.pa = new X(0, 0), this.pb = new X(0, 0), this.pc = new X(0, 0), 
        this.ka = 0, this.kb = 0, this.kc = 0, this.s = 0;
    }
    _createClass(qo, [ {
        key: "Copy",
        value: function(t) {
            return this.strictContactCheck = t.strictContactCheck, this.density = t.density, 
            this.gravityScale = t.gravityScale, this.radius = t.radius, this.maxCount = t.maxCount, 
            this.pressureStrength = t.pressureStrength, this.dampingStrength = t.dampingStrength, 
            this.elasticStrength = t.elasticStrength, this.springStrength = t.springStrength, 
            this.viscousStrength = t.viscousStrength, this.surfaceTensionPressureStrength = t.surfaceTensionPressureStrength, 
            this.surfaceTensionNormalStrength = t.surfaceTensionNormalStrength, this.repulsiveStrength = t.repulsiveStrength, 
            this.powderStrength = t.powderStrength, this.ejectionStrength = t.ejectionStrength, 
            this.staticPressureStrength = t.staticPressureStrength, this.staticPressureRelaxation = t.staticPressureRelaxation, 
            this.staticPressureIterations = t.staticPressureIterations, this.colorMixingStrength = t.colorMixingStrength, 
            this.destroyByAge = t.destroyByAge, this.lifetimeGranularity = t.lifetimeGranularity, 
            this;
        }
    }, {
        key: "Clone",
        value: function() {
            return new qo().Copy(this);
        }
    } ]);
    var Lo = qo;
    function qo() {
        _classCallCheck(this, qo), this.strictContactCheck = !1, this.density = 1, this.gravityScale = 1, 
        this.radius = 1, this.maxCount = 0, this.pressureStrength = .005, this.dampingStrength = 1, 
        this.elasticStrength = .25, this.springStrength = .25, this.viscousStrength = .25, 
        this.surfaceTensionPressureStrength = .2, this.surfaceTensionNormalStrength = .2, 
        this.repulsiveStrength = 1, this.powderStrength = .5, this.ejectionStrength = .5, 
        this.staticPressureStrength = .2, this.staticPressureRelaxation = .2, this.staticPressureIterations = 8, 
        this.colorMixingStrength = .5, this.destroyByAge = !0, this.lifetimeGranularity = 1 / 60;
    }
    _createClass(U, [ {
        key: "Drop",
        value: function() {
            for (;this.m_groupList; ) this.DestroyParticleGroup(this.m_groupList);
            this.FreeUserOverridableBuffer(this.m_handleIndexBuffer), this.FreeUserOverridableBuffer(this.m_flagsBuffer), 
            this.FreeUserOverridableBuffer(this.m_lastBodyContactStepBuffer), this.FreeUserOverridableBuffer(this.m_bodyContactCountBuffer), 
            this.FreeUserOverridableBuffer(this.m_consecutiveContactStepsBuffer), this.FreeUserOverridableBuffer(this.m_positionBuffer), 
            this.FreeUserOverridableBuffer(this.m_velocityBuffer), this.FreeUserOverridableBuffer(this.m_colorBuffer), 
            this.FreeUserOverridableBuffer(this.m_userDataBuffer), this.FreeUserOverridableBuffer(this.m_expirationTimeBuffer), 
            this.FreeUserOverridableBuffer(this.m_indexByExpirationTimeBuffer), this.FreeBuffer(this.m_forceBuffer, this.m_internalAllocatedCapacity), 
            this.FreeBuffer(this.m_weightBuffer, this.m_internalAllocatedCapacity), this.FreeBuffer(this.m_staticPressureBuffer, this.m_internalAllocatedCapacity), 
            this.FreeBuffer(this.m_accumulationBuffer, this.m_internalAllocatedCapacity), this.FreeBuffer(this.m_accumulation2Buffer, this.m_internalAllocatedCapacity), 
            this.FreeBuffer(this.m_depthBuffer, this.m_internalAllocatedCapacity), this.FreeBuffer(this.m_groupBuffer, this.m_internalAllocatedCapacity);
        }
    }, {
        key: "CreateParticle",
        value: function(t) {
            if (this.m_world.IsLocked()) throw new Error();
            if (this.m_count >= this.m_internalAllocatedCapacity && (e = this.m_count ? 2 * this.m_count : 256, 
            this.ReallocateInternalAllocatedBuffers(e)), this.m_count >= this.m_internalAllocatedCapacity) {
                if (!this.m_def.destroyByAge) return J;
                this.DestroyOldestParticle(0, !1), this.SolveZombie();
            }
            var e = this.m_count++;
            if (!this.m_flagsBuffer.data) throw new Error();
            if (this.m_flagsBuffer.data[e] = 0, this.m_lastBodyContactStepBuffer.data && (this.m_lastBodyContactStepBuffer.data[e] = 0), 
            this.m_bodyContactCountBuffer.data && (this.m_bodyContactCountBuffer.data[e] = 0), 
            this.m_consecutiveContactStepsBuffer.data && (this.m_consecutiveContactStepsBuffer.data[e] = 0), 
            !this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            this.m_positionBuffer.data[e] = (this.m_positionBuffer.data[e] || new X()).Copy(f(t.position, X.ZERO)), 
            this.m_velocityBuffer.data[e] = (this.m_velocityBuffer.data[e] || new X()).Copy(f(t.velocity, X.ZERO)), 
            this.m_weightBuffer[e] = 0, this.m_forceBuffer[e] = (this.m_forceBuffer[e] || new X()).SetZero(), 
            this.m_staticPressureBuffer && (this.m_staticPressureBuffer[e] = 0), this.m_depthBuffer && (this.m_depthBuffer[e] = 0);
            var i = new o().Copy(f(t.color, o.ZERO)), i = (!this.m_colorBuffer.data && i.IsZero() || (this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data), 
            this.m_colorBuffer.data[e] = (this.m_colorBuffer.data[e] || new o()).Copy(i)), (this.m_userDataBuffer.data || t.userData) && (this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data), 
            this.m_userDataBuffer.data[e] = t.userData), this.m_handleIndexBuffer.data && (this.m_handleIndexBuffer.data[e] = null), 
            this.m_proxyBuffer.data[this.m_proxyBuffer.Append()]), s = f(t.lifetime, 0), n = 0 < s;
            if (this.m_expirationTimeBuffer.data || n) {
                if (this.SetParticleLifetime(e, n ? s : this.ExpirationTimeToLifetime(-this.GetQuantizedTimeElapsed())), 
                !this.m_indexByExpirationTimeBuffer.data) throw new Error();
                this.m_indexByExpirationTimeBuffer.data[e] = e;
            }
            i.index = e;
            n = f(t.group, null);
            return (this.m_groupBuffer[e] = n) && (n.m_firstIndex < n.m_lastIndex ? this.RotateBuffer(n.m_firstIndex, n.m_lastIndex, e) : n.m_firstIndex = e, 
            n.m_lastIndex = 1 + e), this.SetParticleFlags(e, f(t.flags, 0)), e;
        }
    }, {
        key: "GetParticleHandleFromIndex",
        value: function(t) {
            this.m_handleIndexBuffer.data = this.RequestBuffer(this.m_handleIndexBuffer.data);
            var e = this.m_handleIndexBuffer.data[t];
            return e || ((e = new mo()).SetIndex(t), this.m_handleIndexBuffer.data[t] = e), 
            e;
        }
    }, {
        key: "DestroyParticle",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            if (!this.m_flagsBuffer.data) throw new Error();
            var i = N.b2ParticleFlag.b2_zombieParticle;
            e && (i |= N.b2ParticleFlag.b2_destructionListenerParticle), this.SetParticleFlags(t, this.m_flagsBuffer.data[t] | i);
        }
    }, {
        key: "DestroyOldestParticle",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], i = this.GetParticleCount();
            if (!this.m_indexByExpirationTimeBuffer.data) throw new Error();
            if (!this.m_expirationTimeBuffer.data) throw new Error();
            i = this.m_indexByExpirationTimeBuffer.data[i - (t + 1)], t = this.m_indexByExpirationTimeBuffer.data[t];
            this.DestroyParticle(0 < this.m_expirationTimeBuffer.data[i] ? i : t, e);
        }
    }, {
        key: "DestroyParticlesInShape",
        value: function(t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], s = U.DestroyParticlesInShape_s_aabb;
            if (this.m_world.IsLocked()) throw new Error();
            i = new U.DestroyParticlesInShapeCallback(this, t, e, i);
            return t.ComputeAABB(s, e, 0), this.m_world.QueryAABB(i, s), i.Destroyed();
        }
    }, {
        key: "CreateParticleGroup",
        value: function(t) {
            var e = U.CreateParticleGroup_s_transform;
            if (this.m_world.IsLocked()) throw new Error();
            var i = e, e = (i.SetPositionAngle(f(t.position, X.ZERO), f(t.angle, 0)), this.m_count);
            if (t.shape && this.CreateParticlesWithShapeForGroup(t.shape, t, i), t.shapes && this.CreateParticlesWithShapesForGroup(t.shapes, f(t.shapeCount, t.shapes.length), t, i), 
            t.positionData) for (var s = f(t.particleCount, t.positionData.length), n = 0; n < s; n++) {
                var o = t.positionData[n];
                this.CreateParticleForGroup(t, i, o);
            }
            var r = this.m_count, a = new co(this);
            a.m_firstIndex = e, a.m_lastIndex = r, a.m_strength = f(t.strength, 1), a.m_userData = t.userData, 
            a.m_transform.Copy(i), a.m_prev = null, a.m_next = this.m_groupList, this.m_groupList && (this.m_groupList.m_prev = a), 
            this.m_groupList = a, ++this.m_groupCount;
            for (var l = e; l < r; l++) this.m_groupBuffer[l] = a;
            this.SetGroupFlags(a, f(t.groupFlags, 0));
            var _ = new U.ConnectionFilter();
            return this.UpdateContacts(!0), this.UpdatePairsAndTriads(e, r, _), t.group && (this.JoinParticleGroups(t.group, a), 
            a = t.group), a;
        }
    }, {
        key: "JoinParticleGroups",
        value: function(t, e) {
            if (this.m_world.IsLocked()) throw new Error();
            this.RotateBuffer(e.m_firstIndex, e.m_lastIndex, this.m_count), this.RotateBuffer(t.m_firstIndex, t.m_lastIndex, e.m_firstIndex);
            var i = new U.JoinParticleGroupsFilter(e.m_firstIndex);
            this.UpdateContacts(!0), this.UpdatePairsAndTriads(t.m_firstIndex, e.m_lastIndex, i);
            for (var s = e.m_firstIndex; s < e.m_lastIndex; s++) this.m_groupBuffer[s] = t;
            i = t.m_groupFlags | e.m_groupFlags;
            this.SetGroupFlags(t, i), t.m_lastIndex = e.m_lastIndex, e.m_firstIndex = e.m_lastIndex, 
            this.DestroyParticleGroup(e);
        }
    }, {
        key: "SplitParticleGroup",
        value: function(t) {
            this.UpdateContacts(!0);
            var e = W(t.GetParticleCount(), function(t) {
                return new U.ParticleListNode();
            }), i = (U.InitializeParticleLists(t, e), this.MergeParticleListsInContact(t, e), 
            U.FindLongestParticleList(t, e));
            this.MergeZombieParticleListNodes(t, e, i), this.CreateParticleGroupsFromParticleList(t, e, i), 
            this.UpdatePairsAndTriadsWithParticleList(t, e);
        }
    }, {
        key: "GetParticleGroupList",
        value: function() {
            return this.m_groupList;
        }
    }, {
        key: "GetParticleGroupCount",
        value: function() {
            return this.m_groupCount;
        }
    }, {
        key: "GetParticleCount",
        value: function() {
            return this.m_count;
        }
    }, {
        key: "GetMaxParticleCount",
        value: function() {
            return this.m_def.maxCount;
        }
    }, {
        key: "SetMaxParticleCount",
        value: function(t) {
            this.m_def.maxCount = t;
        }
    }, {
        key: "GetAllParticleFlags",
        value: function() {
            return this.m_allParticleFlags;
        }
    }, {
        key: "GetAllGroupFlags",
        value: function() {
            return this.m_allGroupFlags;
        }
    }, {
        key: "SetPaused",
        value: function(t) {
            this.m_paused = t;
        }
    }, {
        key: "GetPaused",
        value: function() {
            return this.m_paused;
        }
    }, {
        key: "SetDensity",
        value: function(t) {
            this.m_def.density = t, this.m_inverseDensity = 1 / this.m_def.density;
        }
    }, {
        key: "GetDensity",
        value: function() {
            return this.m_def.density;
        }
    }, {
        key: "SetGravityScale",
        value: function(t) {
            this.m_def.gravityScale = t;
        }
    }, {
        key: "GetGravityScale",
        value: function() {
            return this.m_def.gravityScale;
        }
    }, {
        key: "SetDamping",
        value: function(t) {
            this.m_def.dampingStrength = t;
        }
    }, {
        key: "GetDamping",
        value: function() {
            return this.m_def.dampingStrength;
        }
    }, {
        key: "SetStaticPressureIterations",
        value: function(t) {
            this.m_def.staticPressureIterations = t;
        }
    }, {
        key: "GetStaticPressureIterations",
        value: function() {
            return this.m_def.staticPressureIterations;
        }
    }, {
        key: "SetRadius",
        value: function(t) {
            this.m_particleDiameter = 2 * t, this.m_squaredDiameter = this.m_particleDiameter * this.m_particleDiameter, 
            this.m_inverseDiameter = 1 / this.m_particleDiameter;
        }
    }, {
        key: "GetRadius",
        value: function() {
            return this.m_particleDiameter / 2;
        }
    }, {
        key: "GetPositionBuffer",
        value: function() {
            if (this.m_positionBuffer.data) return this.m_positionBuffer.data;
            throw new Error();
        }
    }, {
        key: "GetVelocityBuffer",
        value: function() {
            if (this.m_velocityBuffer.data) return this.m_velocityBuffer.data;
            throw new Error();
        }
    }, {
        key: "GetColorBuffer",
        value: function() {
            return this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data), this.m_colorBuffer.data;
        }
    }, {
        key: "GetGroupBuffer",
        value: function() {
            return this.m_groupBuffer;
        }
    }, {
        key: "GetWeightBuffer",
        value: function() {
            return this.m_weightBuffer;
        }
    }, {
        key: "GetUserDataBuffer",
        value: function() {
            return this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data), 
            this.m_userDataBuffer.data;
        }
    }, {
        key: "GetFlagsBuffer",
        value: function() {
            if (this.m_flagsBuffer.data) return this.m_flagsBuffer.data;
            throw new Error();
        }
    }, {
        key: "SetParticleFlags",
        value: function(t, e) {
            if (!this.m_flagsBuffer.data) throw new Error();
            this.m_flagsBuffer.data[t] & ~e && (this.m_needsUpdateAllParticleFlags = !0), ~this.m_allParticleFlags & e && (e & N.b2ParticleFlag.b2_tensileParticle && (this.m_accumulation2Buffer = this.RequestBuffer(this.m_accumulation2Buffer)), 
            e & N.b2ParticleFlag.b2_colorMixingParticle && (this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data)), 
            this.m_allParticleFlags |= e), this.m_flagsBuffer.data[t] = e;
        }
    }, {
        key: "GetParticleFlags",
        value: function(t) {
            if (this.m_flagsBuffer.data) return this.m_flagsBuffer.data[t];
            throw new Error();
        }
    }, {
        key: "SetFlagsBuffer",
        value: function(t, e) {
            this.SetUserOverridableBuffer(this.m_flagsBuffer, t, e);
        }
    }, {
        key: "SetPositionBuffer",
        value: function(t, e) {
            this.SetUserOverridableBuffer(this.m_positionBuffer, t, e);
        }
    }, {
        key: "SetVelocityBuffer",
        value: function(t, e) {
            this.SetUserOverridableBuffer(this.m_velocityBuffer, t, e);
        }
    }, {
        key: "SetColorBuffer",
        value: function(t, e) {
            this.SetUserOverridableBuffer(this.m_colorBuffer, t, e);
        }
    }, {
        key: "SetUserDataBuffer",
        value: function(t, e) {
            this.SetUserOverridableBuffer(this.m_userDataBuffer, t, e);
        }
    }, {
        key: "GetContacts",
        value: function() {
            return this.m_contactBuffer.data;
        }
    }, {
        key: "GetContactCount",
        value: function() {
            return this.m_contactBuffer.count;
        }
    }, {
        key: "GetBodyContacts",
        value: function() {
            return this.m_bodyContactBuffer.data;
        }
    }, {
        key: "GetBodyContactCount",
        value: function() {
            return this.m_bodyContactBuffer.count;
        }
    }, {
        key: "GetPairs",
        value: function() {
            return this.m_pairBuffer.data;
        }
    }, {
        key: "GetPairCount",
        value: function() {
            return this.m_pairBuffer.count;
        }
    }, {
        key: "GetTriads",
        value: function() {
            return this.m_triadBuffer.data;
        }
    }, {
        key: "GetTriadCount",
        value: function() {
            return this.m_triadBuffer.count;
        }
    }, {
        key: "SetStuckThreshold",
        value: function(t) {
            0 < (this.m_stuckThreshold = t) && (this.m_lastBodyContactStepBuffer.data = this.RequestBuffer(this.m_lastBodyContactStepBuffer.data), 
            this.m_bodyContactCountBuffer.data = this.RequestBuffer(this.m_bodyContactCountBuffer.data), 
            this.m_consecutiveContactStepsBuffer.data = this.RequestBuffer(this.m_consecutiveContactStepsBuffer.data));
        }
    }, {
        key: "GetStuckCandidates",
        value: function() {
            return this.m_stuckParticleBuffer.Data();
        }
    }, {
        key: "GetStuckCandidateCount",
        value: function() {
            return this.m_stuckParticleBuffer.GetCount();
        }
    }, {
        key: "ComputeCollisionEnergy",
        value: function() {
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var t = U.ComputeCollisionEnergy_s_v, e = this.m_velocityBuffer.data, i = 0, s = 0; s < this.m_contactBuffer.count; s++) {
                var n = this.m_contactBuffer.data[s], o = n.indexA, r = n.indexB, n = n.normal, r = X.SubVV(e[r], e[o], t), o = X.DotVV(r, n);
                o < 0 && (i += o * o);
            }
            return .5 * this.GetParticleMass() * i;
        }
    }, {
        key: "SetStrictContactCheck",
        value: function(t) {
            this.m_def.strictContactCheck = t;
        }
    }, {
        key: "GetStrictContactCheck",
        value: function() {
            return this.m_def.strictContactCheck;
        }
    }, {
        key: "SetParticleLifetime",
        value: function(t, e) {
            var i = null === this.m_indexByExpirationTimeBuffer.data;
            if (this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data), 
            this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data), 
            i) for (var s = this.GetParticleCount(), n = 0; n < s; ++n) this.m_indexByExpirationTimeBuffer.data[n] = n;
            i = e / this.m_def.lifetimeGranularity, e = 0 < i ? this.GetQuantizedTimeElapsed() + i : i;
            e !== this.m_expirationTimeBuffer.data[t] && (this.m_expirationTimeBuffer.data[t] = e, 
            this.m_expirationTimeBufferRequiresSorting = !0);
        }
    }, {
        key: "GetParticleLifetime",
        value: function(t) {
            return this.ExpirationTimeToLifetime(this.GetExpirationTimeBuffer()[t]);
        }
    }, {
        key: "SetDestructionByAge",
        value: function(t) {
            t && this.GetExpirationTimeBuffer(), this.m_def.destroyByAge = t;
        }
    }, {
        key: "GetDestructionByAge",
        value: function() {
            return this.m_def.destroyByAge;
        }
    }, {
        key: "GetExpirationTimeBuffer",
        value: function() {
            return this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data), 
            this.m_expirationTimeBuffer.data;
        }
    }, {
        key: "ExpirationTimeToLifetime",
        value: function(t) {
            return (0 < t ? t - this.GetQuantizedTimeElapsed() : t) * this.m_def.lifetimeGranularity;
        }
    }, {
        key: "GetIndexByExpirationTimeBuffer",
        value: function() {
            if (this.GetParticleCount() ? this.SetParticleLifetime(0, this.GetParticleLifetime(0)) : this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data), 
            this.m_indexByExpirationTimeBuffer.data) return this.m_indexByExpirationTimeBuffer.data;
            throw new Error();
        }
    }, {
        key: "ParticleApplyLinearImpulse",
        value: function(t, e) {
            this.ApplyLinearImpulse(t, t + 1, e);
        }
    }, {
        key: "ApplyLinearImpulse",
        value: function(t, e, i) {
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var s = this.m_velocityBuffer.data, n = (e - t) * this.GetParticleMass(), o = new X().Copy(i).SelfMul(1 / n), r = t; r < e; r++) s[r].SelfAdd(o);
        }
    }, {
        key: "ParticleApplyForce",
        value: function(t, e) {
            if (!this.m_flagsBuffer.data) throw new Error();
            U.IsSignificantForce(e) && this.ForceCanBeApplied(this.m_flagsBuffer.data[t]) && (this.PrepareForceBuffer(), 
            this.m_forceBuffer[t].SelfAdd(e));
        }
    }, {
        key: "ApplyForce",
        value: function(t, e, i) {
            var s = new X().Copy(i).SelfMul(1 / (e - t));
            if (U.IsSignificantForce(s)) {
                this.PrepareForceBuffer();
                for (var n = t; n < e; n++) this.m_forceBuffer[n].SelfAdd(s);
            }
        }
    }, {
        key: "GetNext",
        value: function() {
            return this.m_next;
        }
    }, {
        key: "QueryAABB",
        value: function(t, e) {
            if (0 !== this.m_proxyBuffer.count) {
                var i = this.m_proxyBuffer.count, s = Vo(this.m_proxyBuffer.data, 0, i, U.computeTag(this.m_inverseDiameter * e.lowerBound.x, this.m_inverseDiameter * e.lowerBound.y), U.Proxy.CompareProxyTag), n = wo(this.m_proxyBuffer.data, s, i, U.computeTag(this.m_inverseDiameter * e.upperBound.x, this.m_inverseDiameter * e.upperBound.y), U.Proxy.CompareTagProxy);
                if (!this.m_positionBuffer.data) throw new Error();
                for (var o = this.m_positionBuffer.data, r = s; r < n; ++r) {
                    var a = this.m_proxyBuffer.data[r].index, l = o[a];
                    if (e.lowerBound.x < l.x && l.x < e.upperBound.x && e.lowerBound.y < l.y && l.y < e.upperBound.y && !t.ReportParticle(this, a)) break;
                }
            }
        }
    }, {
        key: "QueryShapeAABB",
        value: function(t, e, i) {
            var s = U.QueryShapeAABB_s_aabb;
            e.ComputeAABB(s, i, 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0), 
            this.QueryAABB(t, s);
        }
    }, {
        key: "QueryPointAABB",
        value: function(t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : G, s = U.QueryPointAABB_s_aabb;
            s.lowerBound.Set(e.x - i, e.y - i), s.upperBound.Set(e.x + i, e.y + i), this.QueryAABB(t, s);
        }
    }, {
        key: "RayCast",
        value: function(t, e, i) {
            var s = U.RayCast_s_aabb, n = U.RayCast_s_p, o = U.RayCast_s_v, r = U.RayCast_s_n, a = U.RayCast_s_point;
            if (0 !== this.m_proxyBuffer.count) {
                if (!this.m_positionBuffer.data) throw new Error();
                for (var l, _ = this.m_positionBuffer.data, m = (X.MinV(e, i, s.lowerBound), X.MaxV(e, i, s.upperBound), 
                1), h = X.SubVV(i, e, o), u = X.DotVV(h, h), c = this.GetInsideBoundsEnumerator(s); 0 <= (l = c.GetNext()); ) {
                    var f = X.SubVV(e, _[l], n), d = X.DotVV(f, h), y = d * d - u * (X.DotVV(f, f) - this.m_squaredDiameter);
                    if (0 <= y) {
                        var y = it(y), p = (-d - y) / u;
                        if (!(m < p) && !(p < 0 && ((p = (-d + y) / u) < 0 || m < p))) {
                            d = X.AddVMulSV(f, p, h, r), y = (d.Normalize(), t.ReportParticle(this, l, X.AddVMulSV(e, p, h, a), d, p));
                            if ((m = L(m, y)) <= 0) break;
                        }
                    }
                }
            }
        }
    }, {
        key: "ComputeAABB",
        value: function(t) {
            var e = this.GetParticleCount();
            if (t.lowerBound.x = +T, t.lowerBound.y = +T, t.upperBound.x = -T, t.upperBound.y = -T, 
            !this.m_positionBuffer.data) throw new Error();
            for (var i = this.m_positionBuffer.data, s = 0; s < e; s++) {
                var n = i[s];
                X.MinV(t.lowerBound, n, t.lowerBound), X.MaxV(t.upperBound, n, t.upperBound);
            }
            t.lowerBound.x -= this.m_particleDiameter, t.lowerBound.y -= this.m_particleDiameter, 
            t.upperBound.x += this.m_particleDiameter, t.upperBound.y += this.m_particleDiameter;
        }
    }, {
        key: "FreeBuffer",
        value: function(t, e) {
            null !== t && (t.length = 0);
        }
    }, {
        key: "FreeUserOverridableBuffer",
        value: function(t) {
            0 === t.userSuppliedCapacity && this.FreeBuffer(t.data, this.m_internalAllocatedCapacity);
        }
    }, {
        key: "ReallocateBuffer3",
        value: function(t, e, i) {
            if (i <= e) throw new Error();
            e = t ? t.slice() : [];
            return e.length = i, e;
        }
    }, {
        key: "ReallocateBuffer5",
        value: function(t, e, i, s, n) {
            if (s <= i || e && !(s <= e)) throw new Error();
            return t = n && !t || e ? t : this.ReallocateBuffer3(t, i, s);
        }
    }, {
        key: "ReallocateBuffer4",
        value: function(t, e, i, s) {
            return this.ReallocateBuffer5(t.data, t.userSuppliedCapacity, e, i, s);
        }
    }, {
        key: "RequestBuffer",
        value: function(t) {
            return t || (0 === this.m_internalAllocatedCapacity && this.ReallocateInternalAllocatedBuffers(256), 
            (t = []).length = this.m_internalAllocatedCapacity), t;
        }
    }, {
        key: "ReallocateHandleBuffers",
        value: function(t) {
            this.m_handleIndexBuffer.data = this.ReallocateBuffer4(this.m_handleIndexBuffer, this.m_internalAllocatedCapacity, t, !0);
        }
    }, {
        key: "ReallocateInternalAllocatedBuffers",
        value: function(t) {
            function e(t, e) {
                return e && e < t ? e : t;
            }
            var i;
            t = e(t, this.m_def.maxCount), t = e(t, this.m_flagsBuffer.userSuppliedCapacity), 
            t = e(t, this.m_positionBuffer.userSuppliedCapacity), t = e(t, this.m_velocityBuffer.userSuppliedCapacity), 
            t = e(t, this.m_colorBuffer.userSuppliedCapacity), t = e(t, this.m_userDataBuffer.userSuppliedCapacity), 
            this.m_internalAllocatedCapacity < t && (this.ReallocateHandleBuffers(t), this.m_flagsBuffer.data = this.ReallocateBuffer4(this.m_flagsBuffer, this.m_internalAllocatedCapacity, t, !1), 
            i = 0 < this.m_stuckThreshold, this.m_lastBodyContactStepBuffer.data = this.ReallocateBuffer4(this.m_lastBodyContactStepBuffer, this.m_internalAllocatedCapacity, t, i), 
            this.m_bodyContactCountBuffer.data = this.ReallocateBuffer4(this.m_bodyContactCountBuffer, this.m_internalAllocatedCapacity, t, i), 
            this.m_consecutiveContactStepsBuffer.data = this.ReallocateBuffer4(this.m_consecutiveContactStepsBuffer, this.m_internalAllocatedCapacity, t, i), 
            this.m_positionBuffer.data = this.ReallocateBuffer4(this.m_positionBuffer, this.m_internalAllocatedCapacity, t, !1), 
            this.m_velocityBuffer.data = this.ReallocateBuffer4(this.m_velocityBuffer, this.m_internalAllocatedCapacity, t, !1), 
            this.m_forceBuffer = this.ReallocateBuffer5(this.m_forceBuffer, 0, this.m_internalAllocatedCapacity, t, !1), 
            this.m_weightBuffer = this.ReallocateBuffer5(this.m_weightBuffer, 0, this.m_internalAllocatedCapacity, t, !1), 
            this.m_staticPressureBuffer = this.ReallocateBuffer5(this.m_staticPressureBuffer, 0, this.m_internalAllocatedCapacity, t, !0), 
            this.m_accumulationBuffer = this.ReallocateBuffer5(this.m_accumulationBuffer, 0, this.m_internalAllocatedCapacity, t, !1), 
            this.m_accumulation2Buffer = this.ReallocateBuffer5(this.m_accumulation2Buffer, 0, this.m_internalAllocatedCapacity, t, !0), 
            this.m_depthBuffer = this.ReallocateBuffer5(this.m_depthBuffer, 0, this.m_internalAllocatedCapacity, t, !0), 
            this.m_colorBuffer.data = this.ReallocateBuffer4(this.m_colorBuffer, this.m_internalAllocatedCapacity, t, !0), 
            this.m_groupBuffer = this.ReallocateBuffer5(this.m_groupBuffer, 0, this.m_internalAllocatedCapacity, t, !1), 
            this.m_userDataBuffer.data = this.ReallocateBuffer4(this.m_userDataBuffer, this.m_internalAllocatedCapacity, t, !0), 
            this.m_expirationTimeBuffer.data = this.ReallocateBuffer4(this.m_expirationTimeBuffer, this.m_internalAllocatedCapacity, t, !0), 
            this.m_indexByExpirationTimeBuffer.data = this.ReallocateBuffer4(this.m_indexByExpirationTimeBuffer, this.m_internalAllocatedCapacity, t, !1), 
            this.m_internalAllocatedCapacity = t);
        }
    }, {
        key: "CreateParticleForGroup",
        value: function(t, e, i) {
            var s = new lo();
            s.flags = f(t.flags, 0), F.MulXV(e, i, s.position), X.AddVV(f(t.linearVelocity, X.ZERO), X.CrossSV(f(t.angularVelocity, 0), X.SubVV(s.position, f(t.position, X.ZERO), X.s_t0), X.s_t0), s.velocity), 
            s.color.Copy(f(t.color, o.ZERO)), s.lifetime = f(t.lifetime, 0), s.userData = t.userData, 
            this.CreateParticle(s);
        }
    }, {
        key: "CreateParticlesStrokeShapeForGroup",
        value: function(t, e, i) {
            for (var s = U.CreateParticlesStrokeShapeForGroup_s_edge, n = U.CreateParticlesStrokeShapeForGroup_s_d, o = U.CreateParticlesStrokeShapeForGroup_s_p, r = f(e.stride, 0), a = (0 === r && (r = this.GetParticleStride()), 
            0), l = t.GetChildCount(), _ = 0; _ < l; _++) {
                for (var m = null, h = (t.GetType() === N.b2ShapeType.e_edgeShape ? m = t : t.GetChildEdge(m = s, _), 
                X.SubVV(m.m_vertex2, m.m_vertex1, n)), u = h.Length(); a < u; ) {
                    var c = X.AddVMulSV(m.m_vertex1, a / u, h, o);
                    this.CreateParticleForGroup(e, i, c), a += r;
                }
                a -= u;
            }
        }
    }, {
        key: "CreateParticlesFillShapeForGroup",
        value: function(t, e, i) {
            var s = U.CreateParticlesFillShapeForGroup_s_aabb, n = U.CreateParticlesFillShapeForGroup_s_p, o = f(e.stride, 0), r = (0 === o && (o = this.GetParticleStride()), 
            F.IDENTITY), a = s;
            t.ComputeAABB(a, r, 0);
            for (var l = Math.floor(a.lowerBound.y / o) * o; l < a.upperBound.y; l += o) for (var _ = Math.floor(a.lowerBound.x / o) * o; _ < a.upperBound.x; _ += o) {
                var m = n.Set(_, l);
                t.TestPoint(r, m) && this.CreateParticleForGroup(e, i, m);
            }
        }
    }, {
        key: "CreateParticlesWithShapeForGroup",
        value: function(t, e, i) {
            switch (t.GetType()) {
              case N.b2ShapeType.e_edgeShape:
              case N.b2ShapeType.e_chainShape:
                this.CreateParticlesStrokeShapeForGroup(t, e, i);
                break;

              case N.b2ShapeType.e_polygonShape:
              case N.b2ShapeType.e_circleShape:
                this.CreateParticlesFillShapeForGroup(t, e, i);
            }
        }
    }, {
        key: "CreateParticlesWithShapesForGroup",
        value: function(t, e, i, s) {
            t = new U.CompositeShape(t, e);
            this.CreateParticlesFillShapeForGroup(t, i, s);
        }
    }, {
        key: "CloneParticle",
        value: function(t, e) {
            var i = new lo();
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            i.flags = this.m_flagsBuffer.data[t], i.position.Copy(this.m_positionBuffer.data[t]), 
            i.velocity.Copy(this.m_velocityBuffer.data[t]), this.m_colorBuffer.data && i.color.Copy(this.m_colorBuffer.data[t]), 
            this.m_userDataBuffer.data && (i.userData = this.m_userDataBuffer.data[t]), i.group = e;
            e = this.CreateParticle(i);
            return this.m_handleIndexBuffer.data && ((i = this.m_handleIndexBuffer.data[t]) && i.SetIndex(e), 
            this.m_handleIndexBuffer.data[e] = i, this.m_handleIndexBuffer.data[t] = null), 
            this.m_lastBodyContactStepBuffer.data && (this.m_lastBodyContactStepBuffer.data[e] = this.m_lastBodyContactStepBuffer.data[t]), 
            this.m_bodyContactCountBuffer.data && (this.m_bodyContactCountBuffer.data[e] = this.m_bodyContactCountBuffer.data[t]), 
            this.m_consecutiveContactStepsBuffer.data && (this.m_consecutiveContactStepsBuffer.data[e] = this.m_consecutiveContactStepsBuffer.data[t]), 
            this.m_hasForce && this.m_forceBuffer[e].Copy(this.m_forceBuffer[t]), this.m_staticPressureBuffer && (this.m_staticPressureBuffer[e] = this.m_staticPressureBuffer[t]), 
            this.m_depthBuffer && (this.m_depthBuffer[e] = this.m_depthBuffer[t]), this.m_expirationTimeBuffer.data && (this.m_expirationTimeBuffer.data[e] = this.m_expirationTimeBuffer.data[t]), 
            e;
        }
    }, {
        key: "DestroyParticlesInGroup",
        value: function(t) {
            for (var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], i = t.m_firstIndex; i < t.m_lastIndex; i++) this.DestroyParticle(i, e);
        }
    }, {
        key: "DestroyParticleGroup",
        value: function(t) {
            this.m_world.m_destructionListener && this.m_world.m_destructionListener.SayGoodbyeParticleGroup(t), 
            this.SetGroupFlags(t, 0);
            for (var e = t.m_firstIndex; e < t.m_lastIndex; e++) this.m_groupBuffer[e] = null;
            t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), 
            t === this.m_groupList && (this.m_groupList = t.m_next), --this.m_groupCount;
        }
    }, {
        key: "UpdatePairsAndTriads",
        value: function(t, e, y) {
            var p = U.UpdatePairsAndTriads_s_dab, v = U.UpdatePairsAndTriads_s_dbc, x = U.UpdatePairsAndTriads_s_dca;
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var C = this.m_positionBuffer.data, i = 0, s = t; s < e; s++) i |= this.m_flagsBuffer.data[s];
            if (i & U.k_pairFlags) for (var n = 0; n < this.m_contactBuffer.count; n++) {
                var o = this.m_contactBuffer.data[n], r = o.indexA, a = o.indexB, l = this.m_flagsBuffer.data[r], _ = this.m_flagsBuffer.data[a], m = this.m_groupBuffer[r], h = this.m_groupBuffer[a];
                t <= r && r < e && t <= a && a < e && !((l | _) & N.b2ParticleFlag.b2_zombieParticle) && (l | _) & U.k_pairFlags && (y.IsNecessary(r) || y.IsNecessary(a)) && U.ParticleCanBeConnected(l, m) && U.ParticleCanBeConnected(_, h) && y.ShouldCreatePair(r, a) && ((l = this.m_pairBuffer.data[this.m_pairBuffer.Append()]).indexA = r, 
                l.indexB = a, l.flags = o.flags, l.strength = L(m ? m.m_strength : 1, h ? h.m_strength : 1), 
                l.distance = X.DistanceVV(C[r], C[a])), Ao(this.m_pairBuffer.data, 0, this.m_pairBuffer.count, U.ComparePairIndices), 
                this.m_pairBuffer.Unique(U.MatchPairIndices);
            }
            if (i & U.k_triadFlags) {
                for (var u = new vo(e - t), c = t; c < e; c++) {
                    var f = this.m_flagsBuffer.data[c], d = this.m_groupBuffer[c];
                    f & N.b2ParticleFlag.b2_zombieParticle || !U.ParticleCanBeConnected(f, d) || u.AddGenerator(C[c], c, y.IsNecessary(c));
                }
                var B = this.GetParticleStride(), S = (u.Generate(B / 2, 2 * B), this);
                u.GetNodes(function(t, e, i) {
                    if (!S.m_flagsBuffer.data) throw new Error();
                    var s, n, o, r, a, l, _, m, h, u, c = S.m_flagsBuffer.data[t], f = S.m_flagsBuffer.data[e], d = S.m_flagsBuffer.data[i];
                    (c | f | d) & U.k_triadFlags && y.ShouldCreateTriad(t, e, i) && (s = C[t], n = C[e], 
                    o = C[i], r = X.SubVV(s, n, p), a = X.SubVV(n, o, v), l = X.SubVV(o, s, x), _ = 4 * S.m_squaredDiameter, 
                    X.DotVV(r, r) > _ || X.DotVV(a, a) > _ || X.DotVV(l, l) > _ || (_ = S.m_groupBuffer[t], 
                    m = S.m_groupBuffer[e], h = S.m_groupBuffer[i], (u = S.m_triadBuffer.data[S.m_triadBuffer.Append()]).indexA = t, 
                    u.indexB = e, u.indexC = i, u.flags = c | f | d, u.strength = L(L(_ ? _.m_strength : 1, m ? m.m_strength : 1), h ? h.m_strength : 1), 
                    t = (s.x + n.x + o.x) / 3, e = (s.y + n.y + o.y) / 3, u.pa.x = s.x - t, u.pa.y = s.y - e, 
                    u.pb.x = n.x - t, u.pb.y = n.y - e, u.pc.x = o.x - t, u.pc.y = o.y - e, u.ka = -X.DotVV(l, r), 
                    u.kb = -X.DotVV(r, a), u.kc = -X.DotVV(a, l), u.s = X.CrossVV(s, n) + X.CrossVV(n, o) + X.CrossVV(o, s)));
                }), Ao(this.m_triadBuffer.data, 0, this.m_triadBuffer.count, U.CompareTriadIndices), 
                this.m_triadBuffer.Unique(U.MatchTriadIndices);
            }
        }
    }, {
        key: "UpdatePairsAndTriadsWithReactiveParticles",
        value: function() {
            var t = new U.ReactiveFilter(this.m_flagsBuffer);
            if (this.UpdatePairsAndTriads(0, this.m_count, t), !this.m_flagsBuffer.data) throw new Error();
            for (var e = 0; e < this.m_count; e++) this.m_flagsBuffer.data[e] &= ~N.b2ParticleFlag.b2_reactiveParticle;
            this.m_allParticleFlags &= ~N.b2ParticleFlag.b2_reactiveParticle;
        }
    }, {
        key: "MergeParticleListsInContact",
        value: function(t, e) {
            for (var i = t.GetBufferIndex(), s = 0; s < this.m_contactBuffer.count; s++) {
                var n, o = this.m_contactBuffer.data[s], r = o.indexA, o = o.indexB;
                t.ContainsParticle(r) && t.ContainsParticle(o) && (r = e[r - i].list) !== (o = e[o - i].list) && (r.count < o.count && (n = r, 
                r = o, o = n), U.MergeParticleLists(r, o));
            }
        }
    }, {
        key: "MergeZombieParticleListNodes",
        value: function(t, e, i) {
            if (!this.m_flagsBuffer.data) throw new Error();
            for (var s = t.GetParticleCount(), n = 0; n < s; n++) {
                var o = e[n];
                o !== i && this.m_flagsBuffer.data[o.index] & N.b2ParticleFlag.b2_zombieParticle && U.MergeParticleListAndNode(i, o);
            }
        }
    }, {
        key: "CreateParticleGroupsFromParticleList",
        value: function(t, e, i) {
            if (!this.m_flagsBuffer.data) throw new Error();
            var s = t.GetParticleCount(), n = new uo();
            n.groupFlags = t.GetGroupFlags(), n.userData = t.GetUserData();
            for (var o = 0; o < s; o++) {
                var r = e[o];
                if (r.count && r !== i) for (var a = this.CreateParticleGroup(n), l = r; l; l = l.next) {
                    var _ = l.index, m = this.CloneParticle(_, a);
                    this.m_flagsBuffer.data[_] |= N.b2ParticleFlag.b2_zombieParticle, l.index = m;
                }
            }
        }
    }, {
        key: "UpdatePairsAndTriadsWithParticleList",
        value: function(t, e) {
            for (var i = t.GetBufferIndex(), s = 0; s < this.m_pairBuffer.count; s++) {
                var n = this.m_pairBuffer.data[s], o = n.indexA, r = n.indexB;
                t.ContainsParticle(o) && (n.indexA = e[o - i].index), t.ContainsParticle(r) && (n.indexB = e[r - i].index);
            }
            for (var a = 0; a < this.m_triadBuffer.count; a++) {
                var l = this.m_triadBuffer.data[a], _ = l.indexA, m = l.indexB, h = l.indexC;
                t.ContainsParticle(_) && (l.indexA = e[_ - i].index), t.ContainsParticle(m) && (l.indexB = e[m - i].index), 
                t.ContainsParticle(h) && (l.indexC = e[h - i].index);
            }
        }
    }, {
        key: "ComputeDepth",
        value: function() {
            for (var t = [], e = 0, i = 0; i < this.m_contactBuffer.count; i++) {
                var s = this.m_contactBuffer.data[i], n = s.indexA, o = s.indexB, n = this.m_groupBuffer[n], o = this.m_groupBuffer[o];
                n && n === o && n.m_groupFlags & N.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth && (t[e++] = s);
            }
            for (var r = [], a = 0, l = this.m_groupList; l; l = l.GetNext()) if (l.m_groupFlags & N.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth) {
                r[a++] = l, this.SetGroupFlags(l, l.m_groupFlags & ~N.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth);
                for (var _ = l.m_firstIndex; _ < l.m_lastIndex; _++) this.m_accumulationBuffer[_] = 0;
            }
            for (var m = 0; m < e; m++) {
                var h = t[m], u = h.indexA, c = h.indexB, h = h.weight;
                this.m_accumulationBuffer[u] += h, this.m_accumulationBuffer[c] += h;
            }
            for (var f = 0; f < a; f++) for (var d = r[f], y = d.m_firstIndex; y < d.m_lastIndex; y++) {
                var p = this.m_accumulationBuffer[y];
                this.m_depthBuffer[y] = p < .8 ? 0 : T;
            }
            for (var v = it(this.m_count) >> 0, x = 0; x < v; x++) {
                for (var C = !1, B = 0; B < e; B++) {
                    var S = t[B], b = S.indexA, A = S.indexB, S = 1 - S.weight, g = this.m_depthBuffer[b], V = this.m_depthBuffer[A], w = V + S, S = g + S;
                    w < g && (this.m_depthBuffer[b] = w, C = !0), S < V && (this.m_depthBuffer[A] = S, 
                    C = !0);
                }
                if (!C) break;
            }
            for (var k = 0; k < a; k++) for (var M = r[k], P = M.m_firstIndex; P < M.m_lastIndex; P++) this.m_depthBuffer[P] < T ? this.m_depthBuffer[P] *= this.m_particleDiameter : this.m_depthBuffer[P] = 0;
        }
    }, {
        key: "GetInsideBoundsEnumerator",
        value: function(t) {
            var e = U.computeTag(this.m_inverseDiameter * t.lowerBound.x - 1, this.m_inverseDiameter * t.lowerBound.y - 1), t = U.computeTag(this.m_inverseDiameter * t.upperBound.x + 1, this.m_inverseDiameter * t.upperBound.y + 1), i = this.m_proxyBuffer.count, s = Vo(this.m_proxyBuffer.data, 0, i, e, U.Proxy.CompareProxyTag), i = wo(this.m_proxyBuffer.data, 0, i, t, U.Proxy.CompareTagProxy);
            return new U.InsideBoundsEnumerator(this, e, t, s, i);
        }
    }, {
        key: "UpdateAllParticleFlags",
        value: function() {
            if (!this.m_flagsBuffer.data) throw new Error();
            for (var t = this.m_allParticleFlags = 0; t < this.m_count; t++) this.m_allParticleFlags |= this.m_flagsBuffer.data[t];
            this.m_needsUpdateAllParticleFlags = !1;
        }
    }, {
        key: "UpdateAllGroupFlags",
        value: function() {
            this.m_allGroupFlags = 0;
            for (var t = this.m_groupList; t; t = t.GetNext()) this.m_allGroupFlags |= t.m_groupFlags;
            this.m_needsUpdateAllGroupFlags = !1;
        }
    }, {
        key: "AddContact",
        value: function(t, e, i) {
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_positionBuffer.data) throw new Error();
            var s, n, o = U.AddContact_s_d, r = this.m_positionBuffer.data, r = X.SubVV(r[e], r[t], o), o = X.DotVV(r, r);
            o < this.m_squaredDiameter && (s = et(o), isFinite(s) || (s = 198177537e11), (n = this.m_contactBuffer.data[this.m_contactBuffer.Append()]).indexA = t, 
            n.indexB = e, n.flags = this.m_flagsBuffer.data[t] | this.m_flagsBuffer.data[e], 
            n.weight = 1 - o * s * this.m_inverseDiameter, X.MulSV(s, r, n.normal));
        }
    }, {
        key: "FindContacts_Reference",
        value: function(t) {
            for (var e = this.m_proxyBuffer.count, i = this.m_contactBuffer.count = 0, s = 0; i < e; i++) {
                for (var n = U.computeRelativeTag(this.m_proxyBuffer.data[i].tag, 1, 0), o = i + 1; o < e && !(n < this.m_proxyBuffer.data[o].tag); o++) this.AddContact(this.m_proxyBuffer.data[i].index, this.m_proxyBuffer.data[o].index, this.m_contactBuffer);
                for (var r = U.computeRelativeTag(this.m_proxyBuffer.data[i].tag, -1, 1); s < e && !(r <= this.m_proxyBuffer.data[s].tag); s++) ;
                for (var a = U.computeRelativeTag(this.m_proxyBuffer.data[i].tag, 1, 1), l = s; l < e && !(a < this.m_proxyBuffer.data[l].tag); l++) this.AddContact(this.m_proxyBuffer.data[i].index, this.m_proxyBuffer.data[l].index, this.m_contactBuffer);
            }
        }
    }, {
        key: "FindContacts",
        value: function(t) {
            this.FindContacts_Reference(t);
        }
    }, {
        key: "UpdateProxies_Reference",
        value: function(t) {
            if (!this.m_positionBuffer.data) throw new Error();
            for (var e = this.m_positionBuffer.data, i = this.m_inverseDiameter, s = 0; s < this.m_proxyBuffer.count; ++s) {
                var n = this.m_proxyBuffer.data[s], o = e[n.index];
                n.tag = U.computeTag(i * o.x, i * o.y);
            }
        }
    }, {
        key: "UpdateProxies",
        value: function(t) {
            this.UpdateProxies_Reference(t);
        }
    }, {
        key: "SortProxies",
        value: function(t) {
            bo(this.m_proxyBuffer.data, 0, this.m_proxyBuffer.count, U.Proxy.CompareProxyProxy);
        }
    }, {
        key: "FilterContacts",
        value: function(t) {
            var e, i = this.GetParticleContactFilter();
            null !== i && (e = this).m_contactBuffer.RemoveIf(function(t) {
                return 0 != (t.flags & N.b2ParticleFlag.b2_particleContactFilterParticle) && !i.ShouldCollideParticleParticle(e, t.indexA, t.indexB);
            });
        }
    }, {
        key: "NotifyContactListenerPreContact",
        value: function(t) {
            var e = this.GetParticleContactListener();
            if (null !== e) throw t.Initialize(this.m_contactBuffer, this.m_flagsBuffer), new Error();
        }
    }, {
        key: "NotifyContactListenerPostContact",
        value: function(t) {
            var e = this.GetParticleContactListener();
            if (null !== e) {
                for (var i = 0; i < this.m_contactBuffer.count; ++i) {
                    var s = this.m_contactBuffer.data[i];
                    e.BeginContactParticleParticle(this, s);
                }
                throw new Error();
            }
        }
    }, {
        key: "UpdateContacts",
        value: function(t) {
            this.UpdateProxies(this.m_proxyBuffer), this.SortProxies(this.m_proxyBuffer);
            var e = new U.b2ParticlePairSet();
            this.NotifyContactListenerPreContact(e), this.FindContacts(this.m_contactBuffer), 
            this.FilterContacts(this.m_contactBuffer), this.NotifyContactListenerPostContact(e), 
            t && this.m_contactBuffer.RemoveIf(U.b2ParticleContactIsZombie);
        }
    }, {
        key: "NotifyBodyContactListenerPreContact",
        value: function(t) {
            var e = this.GetFixtureContactListener();
            if (null !== e) throw t.Initialize(this.m_bodyContactBuffer, this.m_flagsBuffer), 
            new Error();
        }
    }, {
        key: "NotifyBodyContactListenerPostContact",
        value: function(t) {
            var e = this.GetFixtureContactListener();
            if (null !== e) {
                for (var i = 0; i < this.m_bodyContactBuffer.count; i++) {
                    var s = this.m_bodyContactBuffer.data[i];
                    e.BeginContactFixtureParticle(this, s);
                }
                throw new Error();
            }
        }
    }, {
        key: "UpdateBodyContacts",
        value: function() {
            var t = U.UpdateBodyContacts_s_aabb, e = new U.FixtureParticleSet();
            if (this.NotifyBodyContactListenerPreContact(e), 0 < this.m_stuckThreshold) {
                if (!this.m_bodyContactCountBuffer.data) throw new Error();
                if (!this.m_lastBodyContactStepBuffer.data) throw new Error();
                if (!this.m_consecutiveContactStepsBuffer.data) throw new Error();
                for (var i = this.GetParticleCount(), s = 0; s < i; s++) this.m_bodyContactCountBuffer.data[s] = 0, 
                this.m_timestamp > this.m_lastBodyContactStepBuffer.data[s] + 1 && (this.m_consecutiveContactStepsBuffer.data[s] = 0);
            }
            this.m_bodyContactBuffer.SetCount(0), this.m_stuckParticleBuffer.SetCount(0);
            this.ComputeAABB(t);
            var n = new U.UpdateBodyContactsCallback(this, this.GetFixtureContactFilter());
            this.m_world.QueryAABB(n, t), this.m_def.strictContactCheck && this.RemoveSpuriousBodyContacts(), 
            this.NotifyBodyContactListenerPostContact(e);
        }
    }, {
        key: "Solve",
        value: function(t) {
            var e = U.Solve_s_subStep;
            if (0 !== this.m_count && (this.m_expirationTimeBuffer.data && this.SolveLifetimes(t), 
            this.m_allParticleFlags & N.b2ParticleFlag.b2_zombieParticle && this.SolveZombie(), 
            this.m_needsUpdateAllParticleFlags && this.UpdateAllParticleFlags(), this.m_needsUpdateAllGroupFlags && this.UpdateAllGroupFlags(), 
            !this.m_paused)) for (this.m_iterationIndex = 0; this.m_iterationIndex < t.particleIterations; this.m_iterationIndex++) {
                ++this.m_timestamp;
                var i = e.Copy(t);
                if (i.dt /= t.particleIterations, i.inv_dt *= t.particleIterations, this.UpdateContacts(!1), 
                this.UpdateBodyContacts(), this.ComputeWeight(), this.m_allGroupFlags & N.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth && this.ComputeDepth(), 
                this.m_allParticleFlags & N.b2ParticleFlag.b2_reactiveParticle && this.UpdatePairsAndTriadsWithReactiveParticles(), 
                this.m_hasForce && this.SolveForce(i), this.m_allParticleFlags & N.b2ParticleFlag.b2_viscousParticle && this.SolveViscous(), 
                this.m_allParticleFlags & N.b2ParticleFlag.b2_repulsiveParticle && this.SolveRepulsive(i), 
                this.m_allParticleFlags & N.b2ParticleFlag.b2_powderParticle && this.SolvePowder(i), 
                this.m_allParticleFlags & N.b2ParticleFlag.b2_tensileParticle && this.SolveTensile(i), 
                this.m_allGroupFlags & N.b2ParticleGroupFlag.b2_solidParticleGroup && this.SolveSolid(i), 
                this.m_allParticleFlags & N.b2ParticleFlag.b2_colorMixingParticle && this.SolveColorMixing(), 
                this.SolveGravity(i), this.m_allParticleFlags & N.b2ParticleFlag.b2_staticPressureParticle && this.SolveStaticPressure(i), 
                this.SolvePressure(i), this.SolveDamping(i), this.m_allParticleFlags & U.k_extraDampingFlags && this.SolveExtraDamping(), 
                this.m_allParticleFlags & N.b2ParticleFlag.b2_elasticParticle && this.SolveElastic(i), 
                this.m_allParticleFlags & N.b2ParticleFlag.b2_springParticle && this.SolveSpring(i), 
                this.LimitVelocity(i), this.m_allGroupFlags & N.b2ParticleGroupFlag.b2_rigidParticleGroup && this.SolveRigidDamping(), 
                this.m_allParticleFlags & N.b2ParticleFlag.b2_barrierParticle && this.SolveBarrier(i), 
                this.SolveCollision(i), this.m_allGroupFlags & N.b2ParticleGroupFlag.b2_rigidParticleGroup && this.SolveRigid(i), 
                this.m_allParticleFlags & N.b2ParticleFlag.b2_wallParticle && this.SolveWall(), 
                !this.m_positionBuffer.data) throw new Error();
                if (!this.m_velocityBuffer.data) throw new Error();
                for (var s = 0; s < this.m_count; s++) this.m_positionBuffer.data[s].SelfMulAdd(i.dt, this.m_velocityBuffer.data[s]);
            }
        }
    }, {
        key: "SolveCollision",
        value: function(t) {
            var e = U.SolveCollision_s_aabb;
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            var i = this.m_positionBuffer.data, s = this.m_velocityBuffer.data, n = e;
            n.lowerBound.x = +T, n.lowerBound.y = +T, n.upperBound.x = -T, n.upperBound.y = -T;
            for (var o = 0; o < this.m_count; o++) {
                var r = s[o], a = i[o], l = a.x + t.dt * r.x, r = a.y + t.dt * r.y;
                n.lowerBound.x = L(n.lowerBound.x, L(a.x, l)), n.lowerBound.y = L(n.lowerBound.y, L(a.y, r)), 
                n.upperBound.x = D(n.upperBound.x, D(a.x, l)), n.upperBound.y = D(n.upperBound.y, D(a.y, r));
            }
            e = new U.SolveCollisionCallback(this, t);
            this.m_world.QueryAABB(e, n);
        }
    }, {
        key: "LimitVelocity",
        value: function(t) {
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var e = this.m_velocityBuffer.data, i = this.GetCriticalVelocitySquared(t), s = 0; s < this.m_count; s++) {
                var n = e[s], o = X.DotVV(n, n);
                i < o && n.SelfMul(it(i / o));
            }
        }
    }, {
        key: "SolveGravity",
        value: function(t) {
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var e = U.SolveGravity_s_gravity, i = this.m_velocityBuffer.data, s = X.MulSV(t.dt * this.m_def.gravityScale, this.m_world.GetGravity(), e), n = 0; n < this.m_count; n++) i[n].SelfAdd(s);
        }
    }, {
        key: "SolveBarrier",
        value: function(t) {
            var e = U.SolveBarrier_s_aabb, i = U.SolveBarrier_s_va, s = U.SolveBarrier_s_vb, n = U.SolveBarrier_s_pba, o = U.SolveBarrier_s_vba, r = U.SolveBarrier_s_vc, R = U.SolveBarrier_s_pca, L = U.SolveBarrier_s_vca, q = U.SolveBarrier_s_qba, z = U.SolveBarrier_s_qca, O = U.SolveBarrier_s_dv, E = U.SolveBarrier_s_f;
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var a = this.m_positionBuffer.data, l = this.m_velocityBuffer.data, _ = 0; _ < this.m_count; _++) 0 != (this.m_flagsBuffer.data[_] & U.k_barrierWallFlags) && l[_].SetZero();
            for (var m = 2.5 * t.dt, j = this.GetParticleMass(), h = 0; h < this.m_pairBuffer.count; h++) {
                var u = this.m_pairBuffer.data[h];
                if (u.flags & N.b2ParticleFlag.b2_barrierParticle) for (var c, f = u.indexA, u = u.indexB, d = a[f], y = a[u], p = e, v = (X.MinV(d, y, p.lowerBound), 
                X.MaxV(d, y, p.upperBound), this.m_groupBuffer[f]), x = this.m_groupBuffer[u], C = this.GetLinearVelocity(v, f, d, i), f = this.GetLinearVelocity(x, u, y, s), B = X.SubVV(y, d, n), S = X.SubVV(f, C, o), J = this.GetInsideBoundsEnumerator(p); 0 <= (c = J.GetNext()); ) {
                    var b = a[c], A = this.m_groupBuffer[c];
                    if (v !== A && x !== A) {
                        var g = this.GetLinearVelocity(A, c, b, r), V = X.SubVV(b, d, R), w = X.SubVV(g, C, L), k = X.CrossVV(S, w), M = X.CrossVV(B, w) - X.CrossVV(V, S), P = X.CrossVV(B, V), I = void 0, G = void 0, D = q, F = z;
                        if (0 === k) {
                            if (0 == M) continue;
                            if (!(0 <= (G = -P / M) && G < m)) continue;
                            if (X.AddVMulSV(B, G, S, D), X.AddVMulSV(V, G, w, F), !(0 <= (I = X.DotVV(D, F) / X.DotVV(D, D)) && I <= 1)) continue;
                        } else {
                            P = M * M - 4 * P * k;
                            if (P < 0) continue;
                            var P = it(P), T = (-M - P) / (2 * k), M = (-M + P) / (2 * k);
                            if (M < T && (P = T, T = M, M = P), G = T, X.AddVMulSV(B, G, S, D), X.AddVMulSV(V, G, w, F), 
                            I = X.DotVV(D, F) / X.DotVV(D, D), !(0 <= G && G < m && 0 <= I && I <= 1)) {
                                if (!(0 <= (G = M) && G < m)) continue;
                                if (X.AddVMulSV(B, G, S, D), X.AddVMulSV(V, G, w, F), !(0 <= (I = X.DotVV(D, F) / X.DotVV(D, D)) && I <= 1)) continue;
                            }
                        }
                        k = O, P = (k.x = C.x + I * S.x - g.x, k.y = C.y + I * S.y - g.y, X.MulSV(j, k, E));
                        A && this.IsRigidGroup(A) ? (T = A.GetMass(), M = A.GetInertia(), 0 < T && A.m_linearVelocity.SelfMulAdd(1 / T, P), 
                        0 < M && (A.m_angularVelocity += X.CrossVV(X.SubVV(b, A.GetCenter(), X.s_t0), P) / M)) : l[c].SelfAdd(k), 
                        this.ParticleApplyForce(c, P.SelfMul(-t.inv_dt));
                    }
                }
            }
        }
    }, {
        key: "SolveStaticPressure",
        value: function(t) {
            if (!this.m_flagsBuffer.data) throw new Error();
            this.m_staticPressureBuffer = this.RequestBuffer(this.m_staticPressureBuffer);
            for (var t = this.GetCriticalPressure(t), e = this.m_def.staticPressureStrength * t, i = .25 * t, s = this.m_def.staticPressureRelaxation, n = 0; n < this.m_def.staticPressureIterations; n++) {
                for (var o = 0; o < this.m_count; o++) this.m_accumulationBuffer[o] = 0;
                for (var r = 0; r < this.m_contactBuffer.count; r++) {
                    var a, l, _ = this.m_contactBuffer.data[r];
                    _.flags & N.b2ParticleFlag.b2_staticPressureParticle && (a = _.indexA, l = _.indexB, 
                    _ = _.weight, this.m_accumulationBuffer[a] += _ * this.m_staticPressureBuffer[l], 
                    this.m_accumulationBuffer[l] += _ * this.m_staticPressureBuffer[a]);
                }
                for (var m = 0; m < this.m_count; m++) {
                    var h, u = this.m_weightBuffer[m];
                    this.m_flagsBuffer.data[m] & N.b2ParticleFlag.b2_staticPressureParticle ? (h = this.m_accumulationBuffer[m], 
                    this.m_staticPressureBuffer[m] = M((h + e * (u - 1)) / (u + s), 0, i)) : this.m_staticPressureBuffer[m] = 0;
                }
            }
        }
    }, {
        key: "ComputeWeight",
        value: function() {
            for (var t = 0; t < this.m_count; t++) this.m_weightBuffer[t] = 0;
            for (var e = 0; e < this.m_bodyContactBuffer.count; e++) {
                var i = this.m_bodyContactBuffer.data[e], s = i.index, i = i.weight;
                this.m_weightBuffer[s] += i;
            }
            for (var n = 0; n < this.m_contactBuffer.count; n++) {
                var o = this.m_contactBuffer.data[n], r = o.indexA, a = o.indexB, o = o.weight;
                this.m_weightBuffer[r] += o, this.m_weightBuffer[a] += o;
            }
        }
    }, {
        key: "SolvePressure",
        value: function(t) {
            var e = U.SolvePressure_s_f;
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var i = this.m_positionBuffer.data, s = this.m_velocityBuffer.data, n = this.GetCriticalPressure(t), o = this.m_def.pressureStrength * n, r = .25 * n, a = 0; a < this.m_count; a++) {
                var l = this.m_weightBuffer[a], l = o * D(0, l - 1);
                this.m_accumulationBuffer[a] = L(l, r);
            }
            if (this.m_allParticleFlags & U.k_noPressureFlags) for (var _ = 0; _ < this.m_count; _++) this.m_flagsBuffer.data[_] & U.k_noPressureFlags && (this.m_accumulationBuffer[_] = 0);
            if (this.m_allParticleFlags & N.b2ParticleFlag.b2_staticPressureParticle) for (var m = 0; m < this.m_count; m++) this.m_flagsBuffer.data[m] & N.b2ParticleFlag.b2_staticPressureParticle && (this.m_accumulationBuffer[m] += this.m_staticPressureBuffer[m]);
            for (var h = t.dt / (this.m_def.density * this.m_particleDiameter), u = this.GetParticleInvMass(), c = 0; c < this.m_bodyContactBuffer.count; c++) {
                var f = this.m_bodyContactBuffer.data[c], d = f.index, y = f.body, p = f.weight, v = f.mass, f = f.normal, x = i[d], C = this.m_accumulationBuffer[d] + o * p, p = X.MulSV(h * p * v * C, f, e);
                s[d].SelfMulSub(u, p), y.ApplyLinearImpulse(p, x, !0);
            }
            for (var B = 0; B < this.m_contactBuffer.count; B++) {
                var S = this.m_contactBuffer.data[B], b = S.indexA, A = S.indexB, g = S.weight, S = S.normal, V = this.m_accumulationBuffer[b] + this.m_accumulationBuffer[A], g = X.MulSV(h * g * V, S, e);
                s[b].SelfSub(g), s[A].SelfAdd(g);
            }
        }
    }, {
        key: "SolveDamping",
        value: function(t) {
            var e = U.SolveDamping_s_v, i = U.SolveDamping_s_f;
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var s = this.m_positionBuffer.data, n = this.m_velocityBuffer.data, o = this.m_def.dampingStrength, r = 1 / this.GetCriticalVelocity(t), a = this.GetParticleInvMass(), l = 0; l < this.m_bodyContactBuffer.count; l++) {
                var _ = this.m_bodyContactBuffer.data[l], m = _.index, h = _.body, u = _.weight, c = _.mass, _ = _.normal, f = s[m], d = X.SubVV(h.GetLinearVelocityFromWorldPoint(f, X.s_t0), n[m], e), d = X.DotVV(d, _);
                d < 0 && (u = D(o * u, L(-r * d, .5)), u = X.MulSV(u * c * d, _, i), n[m].SelfMulAdd(a, u), 
                h.ApplyLinearImpulse(u.SelfNeg(), f, !0));
            }
            for (var y = 0; y < this.m_contactBuffer.count; y++) {
                var p = this.m_contactBuffer.data[y], v = p.indexA, x = p.indexB, C = p.weight, p = p.normal, B = X.SubVV(n[x], n[v], e), B = X.DotVV(B, p);
                B < 0 && (C = D(o * C, L(-r * B, .5)), C = X.MulSV(C * B, p, i), n[v].SelfAdd(C), 
                n[x].SelfSub(C));
            }
        }
    }, {
        key: "SolveRigidDamping",
        value: function() {
            var t = U.SolveRigidDamping_s_t0, e = U.SolveRigidDamping_s_t1, i = U.SolveRigidDamping_s_p, s = U.SolveRigidDamping_s_v, n = [ 0 ], o = [ 0 ], r = [ 0 ], a = [ 0 ], l = [ 0 ], _ = [ 0 ];
            if (!this.m_positionBuffer.data) throw new Error();
            for (var m = this.m_positionBuffer.data, h = this.m_def.dampingStrength, u = 0; u < this.m_bodyContactBuffer.count; u++) {
                var c, f, d, y, p = this.m_bodyContactBuffer.data[u], v = p.index, x = this.m_groupBuffer[v];
                x && this.IsRigidGroup(x) && (c = p.body, f = p.normal, p = p.weight, d = m[v], 
                y = X.SubVV(c.GetLinearVelocityFromWorldPoint(d, t), x.GetLinearVelocityFromWorldPoint(d, e), s), 
                (y = X.DotVV(y, f)) < 0) && (this.InitDampingParameterWithRigidGroupOrParticle(n, o, r, !0, x, v, d, f), 
                this.InitDampingParameter(a, l, _, c.GetMass(), c.GetInertia() - c.GetMass() * c.GetLocalCenter().LengthSquared(), c.GetWorldCenter(), d, f), 
                p = h * L(p, 1) * this.ComputeDampingImpulse(n[0], o[0], r[0], a[0], l[0], _[0], y), 
                this.ApplyDamping(n[0], o[0], r[0], !0, x, v, p, f), c.ApplyLinearImpulse(X.MulSV(-p, f, X.s_t0), d, !0));
            }
            for (var C = 0; C < this.m_contactBuffer.count; C++) {
                var B, S, b = this.m_contactBuffer.data[C], A = b.indexA, g = b.indexB, V = b.normal, b = b.weight, w = this.m_groupBuffer[A], k = this.m_groupBuffer[g], M = this.IsRigidGroup(w), P = this.IsRigidGroup(k);
                w !== k && (M || P) && (S = X.MidVV(m[A], m[g], i), B = X.SubVV(this.GetLinearVelocity(k, g, S, t), this.GetLinearVelocity(w, A, S, e), s), 
                (B = X.DotVV(B, V)) < 0) && (this.InitDampingParameterWithRigidGroupOrParticle(n, o, r, M, w, A, S, V), 
                this.InitDampingParameterWithRigidGroupOrParticle(a, l, _, P, k, g, S, V), S = h * b * this.ComputeDampingImpulse(n[0], o[0], r[0], a[0], l[0], _[0], B), 
                this.ApplyDamping(n[0], o[0], r[0], M, w, A, S, V), this.ApplyDamping(a[0], l[0], _[0], P, k, g, -S, V));
            }
        }
    }, {
        key: "SolveExtraDamping",
        value: function() {
            var t = U.SolveExtraDamping_s_v, e = U.SolveExtraDamping_s_f;
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var i = this.m_velocityBuffer.data, s = this.m_positionBuffer.data, n = this.GetParticleInvMass(), o = 0; o < this.m_bodyContactBuffer.count; o++) {
                var r, a, l, _, m = this.m_bodyContactBuffer.data[o], h = m.index;
                this.m_flagsBuffer.data[h] & U.k_extraDampingFlags && (r = m.body, _ = m.mass, m = m.normal, 
                a = s[h], l = X.SubVV(r.GetLinearVelocityFromWorldPoint(a, X.s_t0), i[h], t), (l = X.DotVV(l, m)) < 0) && (_ = X.MulSV(.5 * _ * l, m, e), 
                i[h].SelfMulAdd(n, _), r.ApplyLinearImpulse(_.SelfNeg(), a, !0));
            }
        }
    }, {
        key: "SolveWall",
        value: function() {
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var t = this.m_velocityBuffer.data, e = 0; e < this.m_count; e++) this.m_flagsBuffer.data[e] & N.b2ParticleFlag.b2_wallParticle && t[e].SetZero();
        }
    }, {
        key: "SolveRigid",
        value: function(t) {
            var e = U.SolveRigid_s_position, i = U.SolveRigid_s_rotation, s = U.SolveRigid_s_transform, n = U.SolveRigid_s_velocityTransform;
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var o = this.m_positionBuffer.data, r = this.m_velocityBuffer.data, a = this.m_groupList; a; a = a.GetNext()) if (a.m_groupFlags & N.b2ParticleGroupFlag.b2_rigidParticleGroup) {
                a.UpdateStatistics();
                var l = i, _ = (l.SetAngle(t.dt * a.m_angularVelocity), X.AddVV(a.m_center, X.SubVV(X.MulSV(t.dt, a.m_linearVelocity, X.s_t0), P.MulRV(l, a.m_center, X.s_t1), X.s_t0), e)), m = s, h = (m.SetPositionRotation(_, l), 
                F.MulXX(m, a.m_transform, a.m_transform), n);
                h.p.x = t.inv_dt * m.p.x, h.p.y = t.inv_dt * m.p.y, h.q.s = t.inv_dt * m.q.s, h.q.c = t.inv_dt * (m.q.c - 1);
                for (var u = a.m_firstIndex; u < a.m_lastIndex; u++) F.MulXV(h, o[u], r[u]);
            }
        }
    }, {
        key: "SolveElastic",
        value: function(t) {
            var e = U.SolveElastic_s_pa, i = U.SolveElastic_s_pb, s = U.SolveElastic_s_pc, n = U.SolveElastic_s_r, o = U.SolveElastic_s_t0;
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var r = this.m_positionBuffer.data, a = this.m_velocityBuffer.data, l = t.inv_dt * this.m_def.elasticStrength, _ = 0; _ < this.m_triadBuffer.count; _++) {
                var m, h, u, c, f, d, y, p, v, x, C, B = this.m_triadBuffer.data[_];
                B.flags & N.b2ParticleFlag.b2_elasticParticle && (y = B.indexA, p = B.indexB, v = B.indexC, 
                m = B.pa, h = B.pb, u = B.pc, c = e.Copy(r[y]), f = i.Copy(r[p]), d = s.Copy(r[v]), 
                y = a[y], p = a[p], v = a[v], c.SelfMulAdd(t.dt, y), f.SelfMulAdd(t.dt, p), d.SelfMulAdd(t.dt, v), 
                x = (c.x + f.x + d.x) / 3, C = (c.y + f.y + d.y) / 3, c.x -= x, c.y -= C, f.x -= x, 
                f.y -= C, d.x -= x, d.y -= C, (x = n).s = X.CrossVV(m, c) + X.CrossVV(h, f) + X.CrossVV(u, d), 
                x.c = X.DotVV(m, c) + X.DotVV(h, f) + X.DotVV(u, d), C = et(x.s * x.s + x.c * x.c), 
                isFinite(C) || (C = 198177537e11), x.s *= C, x.c *= C, C = l * B.strength, P.MulRV(x, m, o), 
                X.SubVV(o, c, o), X.MulSV(C, o, o), y.SelfAdd(o), P.MulRV(x, h, o), X.SubVV(o, f, o), 
                X.MulSV(C, o, o), p.SelfAdd(o), P.MulRV(x, u, o), X.SubVV(o, d, o), X.MulSV(C, o, o), 
                v.SelfAdd(o));
            }
        }
    }, {
        key: "SolveSpring",
        value: function(t) {
            var e = U.SolveSpring_s_pa, i = U.SolveSpring_s_pb, s = U.SolveSpring_s_d, n = U.SolveSpring_s_f;
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var o = this.m_positionBuffer.data, r = this.m_velocityBuffer.data, a = t.inv_dt * this.m_def.springStrength, l = 0; l < this.m_pairBuffer.count; l++) {
                var _, m, h, u, c, f = this.m_pairBuffer.data[l];
                f.flags & N.b2ParticleFlag.b2_springParticle && (_ = f.indexA, m = f.indexB, u = e.Copy(o[_]), 
                h = i.Copy(o[m]), _ = r[_], m = r[m], u.SelfMulAdd(t.dt, _), h.SelfMulAdd(t.dt, m), 
                h = X.SubVV(h, u, s), u = f.distance, c = h.Length(), f = a * f.strength, f = X.MulSV(f * (u - c) / c, h, n), 
                _.SelfSub(f), m.SelfAdd(f));
            }
        }
    }, {
        key: "SolveTensile",
        value: function(t) {
            var e = U.SolveTensile_s_weightedNormal, i = U.SolveTensile_s_s, s = U.SolveTensile_s_f;
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var n = this.m_velocityBuffer.data, o = 0; o < this.m_count; o++) this.m_accumulation2Buffer[o] = new X(), 
            this.m_accumulation2Buffer[o].SetZero();
            for (var r = 0; r < this.m_contactBuffer.count; r++) {
                var a, l, _, m = this.m_contactBuffer.data[r];
                m.flags & N.b2ParticleFlag.b2_tensileParticle && (a = m.indexA, l = m.indexB, _ = m.weight, 
                m = m.normal, _ = X.MulSV((1 - _) * _, m, e), this.m_accumulation2Buffer[a].SelfSub(_), 
                this.m_accumulation2Buffer[l].SelfAdd(_));
            }
            for (var t = this.GetCriticalVelocity(t), h = this.m_def.surfaceTensionPressureStrength * t, u = this.m_def.surfaceTensionNormalStrength * t, c = .5 * t, f = 0; f < this.m_contactBuffer.count; f++) {
                var d, y, p, v, x, C = this.m_contactBuffer.data[f];
                C.flags & N.b2ParticleFlag.b2_tensileParticle && (d = C.indexA, y = C.indexB, p = C.weight, 
                C = C.normal, v = this.m_weightBuffer[d] + this.m_weightBuffer[y], x = X.SubVV(this.m_accumulation2Buffer[y], this.m_accumulation2Buffer[d], i), 
                v = L(h * (v - 2) + u * X.DotVV(x, C), c) * p, x = X.MulSV(v, C, s), n[d].SelfSub(x), 
                n[y].SelfAdd(x));
            }
        }
    }, {
        key: "SolveViscous",
        value: function() {
            var t = U.SolveViscous_s_v, e = U.SolveViscous_s_f;
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var i = this.m_positionBuffer.data, s = this.m_velocityBuffer.data, n = this.m_def.viscousStrength, o = this.GetParticleInvMass(), r = 0; r < this.m_bodyContactBuffer.count; r++) {
                var a, l, _, m, h = this.m_bodyContactBuffer.data[r], u = h.index;
                this.m_flagsBuffer.data[u] & N.b2ParticleFlag.b2_viscousParticle && (a = h.body, 
                l = h.weight, h = h.mass, _ = i[u], m = X.SubVV(a.GetLinearVelocityFromWorldPoint(_, X.s_t0), s[u], t), 
                h = X.MulSV(n * h * l, m, e), s[u].SelfMulAdd(o, h), a.ApplyLinearImpulse(h.SelfNeg(), _, !0));
            }
            for (var c = 0; c < this.m_contactBuffer.count; c++) {
                var f, d, y, p = this.m_contactBuffer.data[c];
                p.flags & N.b2ParticleFlag.b2_viscousParticle && (f = p.indexA, d = p.indexB, p = p.weight, 
                y = X.SubVV(s[d], s[f], t), p = X.MulSV(n * p, y, e), s[f].SelfAdd(p), s[d].SelfSub(p));
            }
        }
    }, {
        key: "SolveRepulsive",
        value: function(t) {
            var e = U.SolveRepulsive_s_f;
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var i = this.m_velocityBuffer.data, s = this.m_def.repulsiveStrength * this.GetCriticalVelocity(t), n = 0; n < this.m_contactBuffer.count; n++) {
                var o, r, a, l = this.m_contactBuffer.data[n];
                l.flags & N.b2ParticleFlag.b2_repulsiveParticle && (o = l.indexA, r = l.indexB, 
                this.m_groupBuffer[o] !== this.m_groupBuffer[r]) && (a = l.weight, l = l.normal, 
                a = X.MulSV(s * a, l, e), i[o].SelfSub(a), i[r].SelfAdd(a));
            }
        }
    }, {
        key: "SolvePowder",
        value: function(t) {
            var e = U.SolvePowder_s_f;
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var i = this.m_positionBuffer.data, s = this.m_velocityBuffer.data, n = this.m_def.powderStrength * this.GetCriticalVelocity(t), o = this.GetParticleInvMass(), r = 0; r < this.m_bodyContactBuffer.count; r++) {
                var a, l, _, m, h = this.m_bodyContactBuffer.data[r], u = h.index;
                this.m_flagsBuffer.data[u] & N.b2ParticleFlag.b2_powderParticle && .25 < (a = h.weight) && (l = h.body, 
                m = h.mass, _ = i[u], h = h.normal, m = X.MulSV(n * m * (a - .25), h, e), s[u].SelfMulSub(o, m), 
                l.ApplyLinearImpulse(m, _, !0));
            }
            for (var c = 0; c < this.m_contactBuffer.count; c++) {
                var f, d, y, p = this.m_contactBuffer.data[c];
                p.flags & N.b2ParticleFlag.b2_powderParticle && .25 < (y = p.weight) && (f = p.indexA, 
                d = p.indexB, p = p.normal, y = X.MulSV(n * (y - .25), p, e), s[f].SelfSub(y), s[d].SelfAdd(y));
            }
        }
    }, {
        key: "SolveSolid",
        value: function(t) {
            var e = U.SolveSolid_s_f;
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var i = this.m_velocityBuffer.data, s = (this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer), 
            t.inv_dt * this.m_def.ejectionStrength), n = 0; n < this.m_contactBuffer.count; n++) {
                var o, r, a = this.m_contactBuffer.data[n], l = a.indexA, _ = a.indexB;
                this.m_groupBuffer[l] !== this.m_groupBuffer[_] && (o = a.weight, a = a.normal, 
                r = this.m_depthBuffer[l] + this.m_depthBuffer[_], r = X.MulSV(s * r * o, a, e), 
                i[l].SelfSub(r), i[_].SelfAdd(r));
            }
        }
    }, {
        key: "SolveForce",
        value: function(t) {
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var e = this.m_velocityBuffer.data, i = t.dt * this.GetParticleInvMass(), s = 0; s < this.m_count; s++) e[s].SelfMulAdd(i, this.m_forceBuffer[s]);
            this.m_hasForce = !1;
        }
    }, {
        key: "SolveColorMixing",
        value: function() {
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_colorBuffer.data) throw new Error();
            var t = .5 * this.m_def.colorMixingStrength;
            if (t) for (var e = 0; e < this.m_contactBuffer.count; e++) {
                var i = this.m_contactBuffer.data[e], s = i.indexA, i = i.indexB;
                this.m_flagsBuffer.data[s] & this.m_flagsBuffer.data[i] & N.b2ParticleFlag.b2_colorMixingParticle && (s = this.m_colorBuffer.data[s], 
                i = this.m_colorBuffer.data[i], o.MixColors(s, i, t));
            }
        }
    }, {
        key: "SolveZombie",
        value: function() {
            if (!this.m_flagsBuffer.data) throw new Error();
            if (!this.m_positionBuffer.data) throw new Error();
            if (!this.m_velocityBuffer.data) throw new Error();
            for (var t = 0, e = [], i = 0; i < this.m_count; i++) e[i] = J;
            for (var s = 0, n = 0; n < this.m_count; n++) {
                var o, r = this.m_flagsBuffer.data[n];
                r & N.b2ParticleFlag.b2_zombieParticle ? (o = this.m_world.m_destructionListener, 
                r & N.b2ParticleFlag.b2_destructionListenerParticle && o && o.SayGoodbyeParticle(this, n), 
                this.m_handleIndexBuffer.data && (o = this.m_handleIndexBuffer.data[n]) && (o.SetIndex(J), 
                this.m_handleIndexBuffer.data[n] = null), e[n] = J) : (n !== (e[n] = t) && (this.m_handleIndexBuffer.data && ((o = this.m_handleIndexBuffer.data[n]) && o.SetIndex(t), 
                this.m_handleIndexBuffer.data[t] = o), this.m_flagsBuffer.data[t] = this.m_flagsBuffer.data[n], 
                this.m_lastBodyContactStepBuffer.data && (this.m_lastBodyContactStepBuffer.data[t] = this.m_lastBodyContactStepBuffer.data[n]), 
                this.m_bodyContactCountBuffer.data && (this.m_bodyContactCountBuffer.data[t] = this.m_bodyContactCountBuffer.data[n]), 
                this.m_consecutiveContactStepsBuffer.data && (this.m_consecutiveContactStepsBuffer.data[t] = this.m_consecutiveContactStepsBuffer.data[n]), 
                this.m_positionBuffer.data[t].Copy(this.m_positionBuffer.data[n]), this.m_velocityBuffer.data[t].Copy(this.m_velocityBuffer.data[n]), 
                this.m_groupBuffer[t] = this.m_groupBuffer[n], this.m_hasForce && this.m_forceBuffer[t].Copy(this.m_forceBuffer[n]), 
                this.m_staticPressureBuffer && (this.m_staticPressureBuffer[t] = this.m_staticPressureBuffer[n]), 
                this.m_depthBuffer && (this.m_depthBuffer[t] = this.m_depthBuffer[n]), this.m_colorBuffer.data && this.m_colorBuffer.data[t].Copy(this.m_colorBuffer.data[n]), 
                this.m_userDataBuffer.data && (this.m_userDataBuffer.data[t] = this.m_userDataBuffer.data[n]), 
                this.m_expirationTimeBuffer.data) && (this.m_expirationTimeBuffer.data[t] = this.m_expirationTimeBuffer.data[n]), 
                t++, s |= r);
            }
            for (var a = function(t) {
                return t.index < 0;
            }, l = function(t) {
                return t.indexA < 0 || t.indexB < 0;
            }, _ = function(t) {
                return t.index < 0;
            }, m = function(t) {
                return t.indexA < 0 || t.indexB < 0;
            }, h = function(t) {
                return t.indexA < 0 || t.indexB < 0 || t.indexC < 0;
            }, u = 0; u < this.m_proxyBuffer.count; u++) {
                var c = this.m_proxyBuffer.data[u];
                c.index = e[c.index];
            }
            this.m_proxyBuffer.RemoveIf(a);
            for (var f = 0; f < this.m_contactBuffer.count; f++) {
                var d = this.m_contactBuffer.data[f];
                d.indexA = e[d.indexA], d.indexB = e[d.indexB];
            }
            this.m_contactBuffer.RemoveIf(l);
            for (var y = 0; y < this.m_bodyContactBuffer.count; y++) {
                var p = this.m_bodyContactBuffer.data[y];
                p.index = e[p.index];
            }
            this.m_bodyContactBuffer.RemoveIf(_);
            for (var v = 0; v < this.m_pairBuffer.count; v++) {
                var x = this.m_pairBuffer.data[v];
                x.indexA = e[x.indexA], x.indexB = e[x.indexB];
            }
            this.m_pairBuffer.RemoveIf(m);
            for (var C = 0; C < this.m_triadBuffer.count; C++) {
                var B = this.m_triadBuffer.data[C];
                B.indexA = e[B.indexA], B.indexB = e[B.indexB], B.indexC = e[B.indexC];
            }
            if (this.m_triadBuffer.RemoveIf(h), this.m_indexByExpirationTimeBuffer.data) for (var S = 0, b = 0; b < this.m_count; b++) {
                var A = e[this.m_indexByExpirationTimeBuffer.data[b]];
                A !== J && (this.m_indexByExpirationTimeBuffer.data[S++] = A);
            }
            for (var g = this.m_groupList; g; g = g.GetNext()) {
                for (var V = t, w = 0, k = !1, M = g.m_firstIndex; M < g.m_lastIndex; M++) {
                    var P = e[M];
                    0 <= P ? (V = L(V, P), w = D(w, P + 1)) : k = !0;
                }
                V < w ? (g.m_firstIndex = V, g.m_lastIndex = w, k && g.m_groupFlags & N.b2ParticleGroupFlag.b2_solidParticleGroup && this.SetGroupFlags(g, g.m_groupFlags | N.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth)) : (g.m_firstIndex = 0, 
                g.m_lastIndex = 0, g.m_groupFlags & N.b2ParticleGroupFlag.b2_particleGroupCanBeEmpty || this.SetGroupFlags(g, g.m_groupFlags | N.b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed));
            }
            this.m_count = t, this.m_allParticleFlags = s, this.m_needsUpdateAllParticleFlags = !1;
            for (var I = this.m_groupList; I; ) {
                var G = I.GetNext();
                I.m_groupFlags & N.b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed && this.DestroyParticleGroup(I), 
                I = G;
            }
        }
    }, {
        key: "SolveLifetimes",
        value: function(t) {
            if (!this.m_expirationTimeBuffer.data) throw new Error();
            if (!this.m_indexByExpirationTimeBuffer.data) throw new Error();
            this.m_timeElapsed = this.LifetimeToExpirationTime(t.dt);
            var e = this.GetQuantizedTimeElapsed(), s = this.m_expirationTimeBuffer.data, i = this.m_indexByExpirationTimeBuffer.data, t = this.GetParticleCount();
            this.m_expirationTimeBufferRequiresSorting && (bo(i, 0, t, function(t, e) {
                var t = s[t], e = s[e], i = t <= 0;
                return i == e <= 0 ? e < t : i;
            }), this.m_expirationTimeBufferRequiresSorting = !1);
            for (var n = t - 1; 0 <= n; --n) {
                var o = i[n], r = s[o];
                if (e < r || r <= 0) break;
                this.DestroyParticle(o);
            }
        }
    }, {
        key: "RotateBuffer",
        value: function(e, i, s) {
            if (e !== i && i !== s) {
                if (!this.m_flagsBuffer.data) throw new Error();
                if (!this.m_positionBuffer.data) throw new Error();
                if (!this.m_velocityBuffer.data) throw new Error();
                if (ko(this.m_flagsBuffer.data, e, i, s), this.m_lastBodyContactStepBuffer.data && ko(this.m_lastBodyContactStepBuffer.data, e, i, s), 
                this.m_bodyContactCountBuffer.data && ko(this.m_bodyContactCountBuffer.data, e, i, s), 
                this.m_consecutiveContactStepsBuffer.data && ko(this.m_consecutiveContactStepsBuffer.data, e, i, s), 
                ko(this.m_positionBuffer.data, e, i, s), ko(this.m_velocityBuffer.data, e, i, s), 
                ko(this.m_groupBuffer, e, i, s), this.m_hasForce && ko(this.m_forceBuffer, e, i, s), 
                this.m_staticPressureBuffer && ko(this.m_staticPressureBuffer, e, i, s), this.m_depthBuffer && ko(this.m_depthBuffer, e, i, s), 
                this.m_colorBuffer.data && ko(this.m_colorBuffer.data, e, i, s), this.m_userDataBuffer.data && ko(this.m_userDataBuffer.data, e, i, s), 
                this.m_handleIndexBuffer.data) {
                    ko(this.m_handleIndexBuffer.data, e, i, s);
                    for (var t = e; t < s; ++t) {
                        var n = this.m_handleIndexBuffer.data[t];
                        n && n.SetIndex(x(n.GetIndex()));
                    }
                }
                if (this.m_expirationTimeBuffer.data) {
                    ko(this.m_expirationTimeBuffer.data, e, i, s);
                    var o = this.GetParticleCount();
                    if (!this.m_indexByExpirationTimeBuffer.data) throw new Error();
                    for (var r = this.m_indexByExpirationTimeBuffer.data, a = 0; a < o; ++a) r[a] = x(r[a]);
                }
                for (var l = 0; l < this.m_proxyBuffer.count; l++) {
                    var _ = this.m_proxyBuffer.data[l];
                    _.index = x(_.index);
                }
                for (var m = 0; m < this.m_contactBuffer.count; m++) {
                    var h = this.m_contactBuffer.data[m];
                    h.indexA = x(h.indexA), h.indexB = x(h.indexB);
                }
                for (var u = 0; u < this.m_bodyContactBuffer.count; u++) {
                    var c = this.m_bodyContactBuffer.data[u];
                    c.index = x(c.index);
                }
                for (var f = 0; f < this.m_pairBuffer.count; f++) {
                    var d = this.m_pairBuffer.data[f];
                    d.indexA = x(d.indexA), d.indexB = x(d.indexB);
                }
                for (var y = 0; y < this.m_triadBuffer.count; y++) {
                    var p = this.m_triadBuffer.data[y];
                    p.indexA = x(p.indexA), p.indexB = x(p.indexB), p.indexC = x(p.indexC);
                }
                for (var v = this.m_groupList; v; v = v.GetNext()) v.m_firstIndex = x(v.m_firstIndex), 
                v.m_lastIndex = x(v.m_lastIndex - 1) + 1;
            }
            function x(t) {
                return t < e ? t : t < i ? t + s - i : t < s ? t + e - i : t;
            }
        }
    }, {
        key: "GetCriticalVelocity",
        value: function(t) {
            return this.m_particleDiameter * t.inv_dt;
        }
    }, {
        key: "GetCriticalVelocitySquared",
        value: function(t) {
            t = this.GetCriticalVelocity(t);
            return t * t;
        }
    }, {
        key: "GetCriticalPressure",
        value: function(t) {
            return this.m_def.density * this.GetCriticalVelocitySquared(t);
        }
    }, {
        key: "GetParticleStride",
        value: function() {
            return .75 * this.m_particleDiameter;
        }
    }, {
        key: "GetParticleMass",
        value: function() {
            var t = this.GetParticleStride();
            return this.m_def.density * t * t;
        }
    }, {
        key: "GetParticleInvMass",
        value: function() {
            var t = this.m_inverseDiameter * (1 / .75);
            return this.m_inverseDensity * t * t;
        }
    }, {
        key: "GetFixtureContactFilter",
        value: function() {
            return this.m_allParticleFlags & N.b2ParticleFlag.b2_fixtureContactFilterParticle ? this.m_world.m_contactManager.m_contactFilter : null;
        }
    }, {
        key: "GetParticleContactFilter",
        value: function() {
            return this.m_allParticleFlags & N.b2ParticleFlag.b2_particleContactFilterParticle ? this.m_world.m_contactManager.m_contactFilter : null;
        }
    }, {
        key: "GetFixtureContactListener",
        value: function() {
            return this.m_allParticleFlags & N.b2ParticleFlag.b2_fixtureContactListenerParticle ? this.m_world.m_contactManager.m_contactListener : null;
        }
    }, {
        key: "GetParticleContactListener",
        value: function() {
            return this.m_allParticleFlags & N.b2ParticleFlag.b2_particleContactListenerParticle ? this.m_world.m_contactManager.m_contactListener : null;
        }
    }, {
        key: "SetUserOverridableBuffer",
        value: function(t, e, i) {
            t.data = e, t.userSuppliedCapacity = i;
        }
    }, {
        key: "SetGroupFlags",
        value: function(t, e) {
            var i = t.m_groupFlags;
            (i ^ e) & N.b2ParticleGroupFlag.b2_solidParticleGroup && (e |= N.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth), 
            i & ~e && (this.m_needsUpdateAllGroupFlags = !0), ~this.m_allGroupFlags & e && (e & N.b2ParticleGroupFlag.b2_solidParticleGroup && (this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer)), 
            this.m_allGroupFlags |= e), t.m_groupFlags = e;
        }
    }, {
        key: "RemoveSpuriousBodyContacts",
        value: function() {
            bo(this.m_bodyContactBuffer.data, 0, this.m_bodyContactBuffer.count, U.BodyContactCompare);
            var o = U.RemoveSpuriousBodyContacts_s_n, r = U.RemoveSpuriousBodyContacts_s_pos, a = U.RemoveSpuriousBodyContacts_s_normal, l = this, _ = -1, m = 0;
            this.m_bodyContactBuffer.count = go(this.m_bodyContactBuffer.data, function(t) {
                if (t.index !== _ && (m = 0, _ = t.index), !(3 < m++)) {
                    var e = o.Copy(t.normal);
                    if (e.SelfMul(l.m_particleDiameter * (1 - t.weight)), !l.m_positionBuffer.data) throw new Error();
                    var i = X.AddVV(l.m_positionBuffer.data[t.index], e, r);
                    if (t.fixture.TestPoint(i)) return !1;
                    for (var s = t.fixture.GetShape().GetChildCount(), n = 0; n < s; n++) if (t.fixture.ComputeDistance(i, a, n) < G) return !1;
                }
                return !0;
            }, this.m_bodyContactBuffer.count);
        }
    }, {
        key: "DetectStuckParticle",
        value: function(t) {
            if (!(this.m_stuckThreshold <= 0)) {
                if (!this.m_bodyContactCountBuffer.data) throw new Error();
                if (!this.m_consecutiveContactStepsBuffer.data) throw new Error();
                if (!this.m_lastBodyContactStepBuffer.data) throw new Error();
                ++this.m_bodyContactCountBuffer.data[t], 2 === this.m_bodyContactCountBuffer.data[t] && (++this.m_consecutiveContactStepsBuffer.data[t], 
                this.m_consecutiveContactStepsBuffer.data[t] > this.m_stuckThreshold) && (this.m_stuckParticleBuffer.data[this.m_stuckParticleBuffer.Append()] = t), 
                this.m_lastBodyContactStepBuffer.data[t] = this.m_timestamp;
            }
        }
    }, {
        key: "ValidateParticleIndex",
        value: function(t) {
            return 0 <= t && t < this.GetParticleCount() && t !== J;
        }
    }, {
        key: "GetQuantizedTimeElapsed",
        value: function() {
            return Math.floor(this.m_timeElapsed / 4294967296);
        }
    }, {
        key: "LifetimeToExpirationTime",
        value: function(t) {
            return this.m_timeElapsed + Math.floor(t / this.m_def.lifetimeGranularity * 4294967296);
        }
    }, {
        key: "ForceCanBeApplied",
        value: function(t) {
            return !(t & N.b2ParticleFlag.b2_wallParticle);
        }
    }, {
        key: "PrepareForceBuffer",
        value: function() {
            if (!this.m_hasForce) {
                for (var t = 0; t < this.m_count; t++) this.m_forceBuffer[t].SetZero();
                this.m_hasForce = !0;
            }
        }
    }, {
        key: "IsRigidGroup",
        value: function(t) {
            return null !== t && 0 != (t.m_groupFlags & N.b2ParticleGroupFlag.b2_rigidParticleGroup);
        }
    }, {
        key: "GetLinearVelocity",
        value: function(t, e, i, s) {
            if (t && this.IsRigidGroup(t)) return t.GetLinearVelocityFromWorldPoint(i, s);
            if (this.m_velocityBuffer.data) return s.Copy(this.m_velocityBuffer.data[e]);
            throw new Error();
        }
    }, {
        key: "InitDampingParameter",
        value: function(t, e, i, s, n, o, r, a) {
            t[0] = 0 < s ? 1 / s : 0, e[0] = 0 < n ? 1 / n : 0, i[0] = X.CrossVV(X.SubVV(r, o, X.s_t0), a);
        }
    }, {
        key: "InitDampingParameterWithRigidGroupOrParticle",
        value: function(t, e, i, s, n, o, r, a) {
            if (n && s) this.InitDampingParameter(t, e, i, n.GetMass(), n.GetInertia(), n.GetCenter(), r, a); else {
                if (!this.m_flagsBuffer.data) throw new Error();
                s = this.m_flagsBuffer.data[o];
                this.InitDampingParameter(t, e, i, s & N.b2ParticleFlag.b2_wallParticle ? 0 : this.GetParticleMass(), 0, r, r, a);
            }
        }
    }, {
        key: "ComputeDampingImpulse",
        value: function(t, e, i, s, n, o, r) {
            t = t + e * i * i + s + n * o * o;
            return 0 < t ? r / t : 0;
        }
    }, {
        key: "ApplyDamping",
        value: function(t, e, i, s, n, o, r, a) {
            if (n && s) n.m_linearVelocity.SelfMulAdd(r * t, a), n.m_angularVelocity += r * i * e; else {
                if (!this.m_velocityBuffer.data) throw new Error();
                this.m_velocityBuffer.data[o].SelfMulAdd(r * t, a);
            }
        }
    } ], [ {
        key: "computeTag",
        value: function(t, e) {
            return (e + U.yOffset >>> 0 << U.yShift) + (U.xScale * t + U.xOffset >>> 0) >>> 0;
        }
    }, {
        key: "computeRelativeTag",
        value: function(t, e, i) {
            return t + (i << U.yShift) + (e << U.xShift) >>> 0;
        }
    }, {
        key: "IsSignificantForce",
        value: function(t) {
            return 0 !== t.x || 0 !== t.y;
        }
    }, {
        key: "ParticleCanBeConnected",
        value: function(t, e) {
            return 0 != (t & (N.b2ParticleFlag.b2_wallParticle | N.b2ParticleFlag.b2_springParticle | N.b2ParticleFlag.b2_elasticParticle)) || null !== e && 0 != (e.GetGroupFlags() & N.b2ParticleGroupFlag.b2_rigidParticleGroup);
        }
    }, {
        key: "ComparePairIndices",
        value: function(t, e) {
            var i = t.indexA - e.indexA;
            return 0 != i ? i < 0 : t.indexB < e.indexB;
        }
    }, {
        key: "MatchPairIndices",
        value: function(t, e) {
            return t.indexA === e.indexA && t.indexB === e.indexB;
        }
    }, {
        key: "CompareTriadIndices",
        value: function(t, e) {
            var i = t.indexA - e.indexA;
            return 0 != i || 0 != (i = t.indexB - e.indexB) ? i < 0 : t.indexC < e.indexC;
        }
    }, {
        key: "MatchTriadIndices",
        value: function(t, e) {
            return t.indexA === e.indexA && t.indexB === e.indexB && t.indexC === e.indexC;
        }
    }, {
        key: "InitializeParticleLists",
        value: function(t, e) {
            for (var i = t.GetBufferIndex(), s = t.GetParticleCount(), n = 0; n < s; n++) {
                var o = e[n];
                (o.list = o).next = null, o.count = 1, o.index = n + i;
            }
        }
    }, {
        key: "MergeParticleLists",
        value: function(t, e) {
            for (var i = e; ;) {
                i.list = t;
                var s = i.next;
                if (!s) {
                    i.next = t.next;
                    break;
                }
                i = s;
            }
            t.next = e, t.count += e.count, e.count = 0;
        }
    }, {
        key: "FindLongestParticleList",
        value: function(t, e) {
            for (var i = t.GetParticleCount(), s = e[0], n = 0; n < i; n++) {
                var o = e[n];
                s.count < o.count && (s = o);
            }
            return s;
        }
    }, {
        key: "MergeParticleListAndNode",
        value: function(t, e) {
            e.list = t, e.next = t.next, t.next = e, t.count++, e.count = 0;
        }
    }, {
        key: "b2ParticleContactIsZombie",
        value: function(t) {
            return (t.flags & N.b2ParticleFlag.b2_zombieParticle) === N.b2ParticleFlag.b2_zombieParticle;
        }
    }, {
        key: "BodyContactCompare",
        value: function(t, e) {
            return t.index === e.index ? t.weight > e.weight : t.index < e.index;
        }
    } ]);
    var u = U;
    function U(t, e) {
        _classCallCheck(this, U), this.m_paused = !1, this.m_timestamp = 0, this.m_allParticleFlags = 0, 
        this.m_needsUpdateAllParticleFlags = !1, this.m_allGroupFlags = 0, this.m_needsUpdateAllGroupFlags = !1, 
        this.m_hasForce = !1, this.m_iterationIndex = 0, this.m_inverseDensity = 0, this.m_particleDiameter = 0, 
        this.m_inverseDiameter = 0, this.m_squaredDiameter = 0, this.m_count = 0, this.m_internalAllocatedCapacity = 0, 
        this.m_handleIndexBuffer = new U.UserOverridableBuffer(), this.m_flagsBuffer = new U.UserOverridableBuffer(), 
        this.m_positionBuffer = new U.UserOverridableBuffer(), this.m_velocityBuffer = new U.UserOverridableBuffer(), 
        this.m_forceBuffer = [], this.m_weightBuffer = [], this.m_staticPressureBuffer = [], 
        this.m_accumulationBuffer = [], this.m_accumulation2Buffer = [], this.m_depthBuffer = [], 
        this.m_colorBuffer = new U.UserOverridableBuffer(), this.m_groupBuffer = [], this.m_userDataBuffer = new U.UserOverridableBuffer(), 
        this.m_stuckThreshold = 0, this.m_lastBodyContactStepBuffer = new U.UserOverridableBuffer(), 
        this.m_bodyContactCountBuffer = new U.UserOverridableBuffer(), this.m_consecutiveContactStepsBuffer = new U.UserOverridableBuffer(), 
        this.m_stuckParticleBuffer = new Mo(function() {
            return 0;
        }), this.m_proxyBuffer = new Mo(function() {
            return new U.Proxy();
        }), this.m_contactBuffer = new Mo(function() {
            return new Go();
        }), this.m_bodyContactBuffer = new Mo(function() {
            return new Fo();
        }), this.m_pairBuffer = new Mo(function() {
            return new To();
        }), this.m_triadBuffer = new Mo(function() {
            return new Ro();
        }), this.m_expirationTimeBuffer = new U.UserOverridableBuffer(), this.m_indexByExpirationTimeBuffer = new U.UserOverridableBuffer(), 
        this.m_timeElapsed = 0, this.m_expirationTimeBufferRequiresSorting = !1, this.m_groupCount = 0, 
        this.m_groupList = null, this.m_def = new Lo(), this.m_prev = null, this.m_next = null, 
        this.SetStrictContactCheck(t.strictContactCheck), this.SetDensity(t.density), this.SetGravityScale(t.gravityScale), 
        this.SetRadius(t.radius), this.SetMaxParticleCount(t.maxCount), this.m_def = t.Clone(), 
        this.m_world = e, this.SetDestructionByAge(this.m_def.destroyByAge);
    }
    u.xTruncBits = 12, u.yTruncBits = 12, u.tagBits = 32, u.yOffset = 1 << u.yTruncBits - 1, 
    u.yShift = u.tagBits - u.yTruncBits, u.xShift = u.tagBits - u.yTruncBits - u.xTruncBits, 
    u.xScale = 1 << u.xShift, u.xOffset = u.xScale * (1 << u.xTruncBits - 1), u.yMask = (1 << u.yTruncBits) - 1 << u.yShift, 
    u.xMask = ~u.yMask, u.DestroyParticlesInShape_s_aabb = new _(), u.CreateParticleGroup_s_transform = new F(), 
    u.ComputeCollisionEnergy_s_v = new X(), u.QueryShapeAABB_s_aabb = new _(), u.QueryPointAABB_s_aabb = new _(), 
    u.RayCast_s_aabb = new _(), u.RayCast_s_p = new X(), u.RayCast_s_v = new X(), u.RayCast_s_n = new X(), 
    u.RayCast_s_point = new X(), u.k_pairFlags = N.b2ParticleFlag.b2_springParticle, 
    u.k_triadFlags = N.b2ParticleFlag.b2_elasticParticle, u.k_noPressureFlags = N.b2ParticleFlag.b2_powderParticle | N.b2ParticleFlag.b2_tensileParticle, 
    u.k_extraDampingFlags = N.b2ParticleFlag.b2_staticPressureParticle, u.k_barrierWallFlags = N.b2ParticleFlag.b2_barrierParticle | N.b2ParticleFlag.b2_wallParticle, 
    u.CreateParticlesStrokeShapeForGroup_s_edge = new Qi(), u.CreateParticlesStrokeShapeForGroup_s_d = new X(), 
    u.CreateParticlesStrokeShapeForGroup_s_p = new X(), u.CreateParticlesFillShapeForGroup_s_aabb = new _(), 
    u.CreateParticlesFillShapeForGroup_s_p = new X(), u.UpdatePairsAndTriads_s_dab = new X(), 
    u.UpdatePairsAndTriads_s_dbc = new X(), u.UpdatePairsAndTriads_s_dca = new X(), 
    u.AddContact_s_d = new X(), u.UpdateBodyContacts_s_aabb = new _(), u.Solve_s_subStep = new Nn(), 
    u.SolveCollision_s_aabb = new _(), u.SolveGravity_s_gravity = new X(), u.SolveBarrier_s_aabb = new _(), 
    u.SolveBarrier_s_va = new X(), u.SolveBarrier_s_vb = new X(), u.SolveBarrier_s_pba = new X(), 
    u.SolveBarrier_s_vba = new X(), u.SolveBarrier_s_vc = new X(), u.SolveBarrier_s_pca = new X(), 
    u.SolveBarrier_s_vca = new X(), u.SolveBarrier_s_qba = new X(), u.SolveBarrier_s_qca = new X(), 
    u.SolveBarrier_s_dv = new X(), u.SolveBarrier_s_f = new X(), u.SolvePressure_s_f = new X(), 
    u.SolveDamping_s_v = new X(), u.SolveDamping_s_f = new X(), u.SolveRigidDamping_s_t0 = new X(), 
    u.SolveRigidDamping_s_t1 = new X(), u.SolveRigidDamping_s_p = new X(), u.SolveRigidDamping_s_v = new X(), 
    u.SolveExtraDamping_s_v = new X(), u.SolveExtraDamping_s_f = new X(), u.SolveRigid_s_position = new X(), 
    u.SolveRigid_s_rotation = new P(), u.SolveRigid_s_transform = new F(), u.SolveRigid_s_velocityTransform = new F(), 
    u.SolveElastic_s_pa = new X(), u.SolveElastic_s_pb = new X(), u.SolveElastic_s_pc = new X(), 
    u.SolveElastic_s_r = new P(), u.SolveElastic_s_t0 = new X(), u.SolveSpring_s_pa = new X(), 
    u.SolveSpring_s_pb = new X(), u.SolveSpring_s_d = new X(), u.SolveSpring_s_f = new X(), 
    u.SolveTensile_s_weightedNormal = new X(), u.SolveTensile_s_s = new X(), u.SolveTensile_s_f = new X(), 
    u.SolveViscous_s_v = new X(), u.SolveViscous_s_f = new X(), u.SolveRepulsive_s_f = new X(), 
    u.SolvePowder_s_f = new X(), u.SolveSolid_s_f = new X(), u.RemoveSpuriousBodyContacts_s_n = new X(), 
    u.RemoveSpuriousBodyContacts_s_pos = new X(), u.RemoveSpuriousBodyContacts_s_normal = new X();
    var c = u = u || {}, x = (c.UserOverridableBuffer = function t() {
        _classCallCheck(this, t), this.data = null, this.userSuppliedCapacity = 0;
    }, _createClass(zo, null, [ {
        key: "CompareProxyProxy",
        value: function(t, e) {
            return t.tag < e.tag;
        }
    }, {
        key: "CompareTagProxy",
        value: function(t, e) {
            return t < e.tag;
        }
    }, {
        key: "CompareProxyTag",
        value: function(t, e) {
            return t.tag < e;
        }
    } ]), zo);
    function zo() {
        _classCallCheck(this, zo), this.index = J, this.tag = 0;
    }
    function Oo(t, e, i, s, n) {
        _classCallCheck(this, Oo), this.m_system = t, this.m_xLower = (e & c.xMask) >>> 0, 
        this.m_xUpper = (i & c.xMask) >>> 0, this.m_yLower = (e & c.yMask) >>> 0, this.m_yUpper = (i & c.yMask) >>> 0, 
        this.m_first = s, this.m_last = n;
    }
    function Eo() {
        _classCallCheck(this, Eo);
    }
    function jo() {
        return _classCallCheck(this, jo), _possibleConstructorReturn(this, (jo.__proto__ || Object.getPrototypeOf(jo)).apply(this, arguments));
    }
    function Jo() {
        return _classCallCheck(this, Jo), _possibleConstructorReturn(this, (Jo.__proto__ || Object.getPrototypeOf(Jo)).apply(this, arguments));
    }
    function No() {
        _classCallCheck(this, No);
    }
    function Xo(t, e, i, s) {
        _classCallCheck(this, Xo);
        var n = _possibleConstructorReturn(this, (Xo.__proto__ || Object.getPrototypeOf(Xo)).call(this));
        return n.m_callDestructionListener = !1, n.m_destroyed = 0, n.m_system = t, n.m_shape = e, 
        n.m_xf = i, n.m_callDestructionListener = s, n.m_destroyed = 0, n;
    }
    function Uo(t) {
        _classCallCheck(this, Uo);
        var e = _possibleConstructorReturn(this, (Uo.__proto__ || Object.getPrototypeOf(Uo)).call(this));
        return e.m_threshold = 0, e.m_threshold = t, e;
    }
    function Zo(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.length, i = (_classCallCheck(this, Zo), 
        _possibleConstructorReturn(this, (Zo.__proto__ || Object.getPrototypeOf(Zo)).call(this, N.b2ShapeType.e_unknown, 0)));
        return i.m_shapeCount = 0, i.m_shapes = t, i.m_shapeCount = e, i;
    }
    function Wo(t) {
        _classCallCheck(this, Wo);
        var e = _possibleConstructorReturn(this, (Wo.__proto__ || Object.getPrototypeOf(Wo)).call(this));
        return e.m_flagsBuffer = t, e;
    }
    function Ho(t, e) {
        _classCallCheck(this, Ho);
        t = _possibleConstructorReturn(this, (Ho.__proto__ || Object.getPrototypeOf(Ho)).call(this, t));
        return t.m_contactFilter = e, t;
    }
    function Qo(t, e) {
        _classCallCheck(this, Qo);
        t = _possibleConstructorReturn(this, (Qo.__proto__ || Object.getPrototypeOf(Qo)).call(this, t));
        return t.m_step = e, t;
    }
    c.Proxy = x, _createClass(Oo, [ {
        key: "GetNext",
        value: function() {
            for (;this.m_first < this.m_last; ) {
                var t = (this.m_system.m_proxyBuffer.data[this.m_first].tag & c.xMask) >>> 0;
                if (t >= this.m_xLower && t <= this.m_xUpper) return this.m_system.m_proxyBuffer.data[this.m_first++].index;
                this.m_first++;
            }
            return J;
        }
    } ]), c.InsideBoundsEnumerator = Oo, c.ParticleListNode = function t() {
        _classCallCheck(this, t), this.next = null, this.count = 0, this.index = 0;
    }, _createClass(Eo, [ {
        key: "Allocate",
        value: function(t, e) {
            return e;
        }
    }, {
        key: "Clear",
        value: function() {}
    }, {
        key: "GetCount",
        value: function() {
            return 0;
        }
    }, {
        key: "Invalidate",
        value: function(t) {}
    }, {
        key: "GetValidBuffer",
        value: function() {
            return [];
        }
    }, {
        key: "GetBuffer",
        value: function() {
            return [];
        }
    }, {
        key: "SetCount",
        value: function(t) {}
    } ]), x = Eo, c.FixedSetAllocator = x, c.FixtureParticle = function t(e, i) {
        _classCallCheck(this, t), this.second = J, this.first = e, this.second = i;
    }, _inherits(jo, c.FixedSetAllocator), _createClass(jo, [ {
        key: "Initialize",
        value: function(t, e) {}
    }, {
        key: "Find",
        value: function(t) {
            return J;
        }
    } ]), x = jo, c.FixtureParticleSet = x, c.ParticlePair = function t(e, i) {
        _classCallCheck(this, t), this.first = J, this.second = J, this.first = e, this.second = i;
    }, _inherits(Jo, c.FixedSetAllocator), _createClass(Jo, [ {
        key: "Initialize",
        value: function(t, e) {}
    }, {
        key: "Find",
        value: function(t) {
            return J;
        }
    } ]), x = Jo, c.b2ParticlePairSet = x, _createClass(No, [ {
        key: "IsNecessary",
        value: function(t) {
            return !0;
        }
    }, {
        key: "ShouldCreatePair",
        value: function(t, e) {
            return !0;
        }
    }, {
        key: "ShouldCreateTriad",
        value: function(t, e, i) {
            return !0;
        }
    } ]), c.ConnectionFilter = No, _inherits(Xo, Rn), _createClass(Xo, [ {
        key: "ReportFixture",
        value: function(t) {
            return !1;
        }
    }, {
        key: "ReportParticle",
        value: function(t, e) {
            if (t !== this.m_system) return !1;
            if (this.m_system.m_positionBuffer.data) return this.m_shape.TestPoint(this.m_xf, this.m_system.m_positionBuffer.data[e]) && (this.m_system.DestroyParticle(e, this.m_callDestructionListener), 
            this.m_destroyed++), !0;
            throw new Error();
        }
    }, {
        key: "Destroyed",
        value: function() {
            return this.m_destroyed;
        }
    } ]), c.DestroyParticlesInShapeCallback = Xo, _inherits(Uo, c.ConnectionFilter), 
    _createClass(Uo, [ {
        key: "ShouldCreatePair",
        value: function(t, e) {
            return t < this.m_threshold && this.m_threshold <= e || e < this.m_threshold && this.m_threshold <= t;
        }
    }, {
        key: "ShouldCreateTriad",
        value: function(t, e, i) {
            return (t < this.m_threshold || e < this.m_threshold || i < this.m_threshold) && (this.m_threshold <= t || this.m_threshold <= e || this.m_threshold <= i);
        }
    } ]), c.JoinParticleGroupsFilter = Uo, _inherits(Zo, Zi), _createClass(Zo, [ {
        key: "Clone",
        value: function() {
            throw new Error();
        }
    }, {
        key: "GetChildCount",
        value: function() {
            return 1;
        }
    }, {
        key: "TestPoint",
        value: function(t, e) {
            for (var i = 0; i < this.m_shapeCount; i++) if (this.m_shapes[i].TestPoint(t, e)) return !0;
            return !1;
        }
    }, {
        key: "ComputeDistance",
        value: function(t, e, i, s) {
            return 0;
        }
    }, {
        key: "RayCast",
        value: function(t, e, i, s) {
            return !1;
        }
    }, {
        key: "ComputeAABB",
        value: function(t, e, i) {
            var s = new _();
            t.lowerBound.x = +T, t.lowerBound.y = +T, t.upperBound.x = -T, t.upperBound.y = -T;
            for (var n = 0; n < this.m_shapeCount; n++) for (var o = this.m_shapes[n].GetChildCount(), r = 0; r < o; r++) {
                var a = s;
                this.m_shapes[n].ComputeAABB(a, e, r), t.Combine1(a);
            }
        }
    }, {
        key: "ComputeMass",
        value: function(t, e) {}
    }, {
        key: "SetupDistanceProxy",
        value: function(t, e) {}
    }, {
        key: "ComputeSubmergedArea",
        value: function(t, e, i, s) {
            return 0;
        }
    }, {
        key: "Dump",
        value: function(t) {}
    } ]), x = Zo, c.CompositeShape = x, _inherits(Wo, c.ConnectionFilter), _createClass(Wo, [ {
        key: "IsNecessary",
        value: function(t) {
            if (this.m_flagsBuffer.data) return 0 != (this.m_flagsBuffer.data[t] & N.b2ParticleFlag.b2_reactiveParticle);
            throw new Error();
        }
    } ]), c.ReactiveFilter = Wo, _inherits(Ho, h), _createClass(Ho, [ {
        key: "ShouldCollideFixtureParticle",
        value: function(t, e, i) {
            if (this.m_contactFilter && this.m_system.GetFlagsBuffer()[i] & N.b2ParticleFlag.b2_fixtureContactFilterParticle) return this.m_contactFilter.ShouldCollideFixtureParticle(t, this.m_system, i);
            return !0;
        }
    }, {
        key: "ReportFixtureAndParticle",
        value: function(t, e, i) {
            var s = c.UpdateBodyContactsCallback.ReportFixtureAndParticle_s_n, n = c.UpdateBodyContactsCallback.ReportFixtureAndParticle_s_rp;
            if (!this.m_system.m_flagsBuffer.data) throw new Error();
            if (!this.m_system.m_positionBuffer.data) throw new Error();
            var o, r, a, l, _, m = this.m_system.m_positionBuffer.data[i], e = t.ComputeDistance(m, s, e);
            e < this.m_system.m_particleDiameter && this.ShouldCollideFixtureParticle(t, this.m_system, i) && (l = (o = t.GetBody()).GetWorldCenter(), 
            r = 0 < (a = o.GetMass()) ? 1 / a : 0, a = 0 < (a = o.GetInertia() - a * o.GetLocalCenter().LengthSquared()) ? 1 / a : 0, 
            _ = this.m_system.m_flagsBuffer.data[i] & N.b2ParticleFlag.b2_wallParticle ? 0 : this.m_system.GetParticleInvMass(), 
            m = X.SubVV(m, l, n), n = _ + r + a * (l = X.CrossVV(m, s)) * l, (_ = this.m_system.m_bodyContactBuffer.data[this.m_system.m_bodyContactBuffer.Append()]).index = i, 
            _.body = o, _.fixture = t, _.weight = 1 - e * this.m_system.m_inverseDiameter, _.normal.Copy(s.SelfNeg()), 
            _.mass = 0 < n ? 1 / n : 0, this.m_system.DetectStuckParticle(i));
        }
    } ]), (x = Ho).ReportFixtureAndParticle_s_n = new X(), x.ReportFixtureAndParticle_s_rp = new X(), 
    c.UpdateBodyContactsCallback = x, _inherits(Qo, h), _createClass(Qo, [ {
        key: "ReportFixtureAndParticle",
        value: function(t, e, i) {
            var s = c.SolveCollisionCallback.ReportFixtureAndParticle_s_p1, n = c.SolveCollisionCallback.ReportFixtureAndParticle_s_output, o = c.SolveCollisionCallback.ReportFixtureAndParticle_s_input, r = c.SolveCollisionCallback.ReportFixtureAndParticle_s_p, a = c.SolveCollisionCallback.ReportFixtureAndParticle_s_v, l = c.SolveCollisionCallback.ReportFixtureAndParticle_s_f, _ = t.GetBody();
            if (!this.m_system.m_positionBuffer.data) throw new Error();
            if (!this.m_system.m_velocityBuffer.data) throw new Error();
            var m = this.m_system.m_positionBuffer.data[i], h = this.m_system.m_velocityBuffer.data[i];
            0 === this.m_system.m_iterationIndex ? (s = F.MulTXV(_.m_xf0, m, s), t.GetShape().GetType() === N.b2ShapeType.e_circleShape && (s.SelfSub(_.GetLocalCenter()), 
            P.MulRV(_.m_xf0.q, s, s), P.MulTRV(_.m_xf.q, s, s), s.SelfAdd(_.GetLocalCenter())), 
            F.MulXV(_.m_xf, s, o.p1)) : o.p1.Copy(m), X.AddVMulSV(m, this.m_step.dt, h, o.p2), 
            o.maxFraction = 1, t.RayCast(n, o, e) && (_ = n.normal, (s = r).x = (1 - n.fraction) * o.p1.x + n.fraction * o.p2.x + G * _.x, 
            s.y = (1 - n.fraction) * o.p1.y + n.fraction * o.p2.y + G * _.y, (t = a).x = this.m_step.inv_dt * (s.x - m.x), 
            t.y = this.m_step.inv_dt * (s.y - m.y), this.m_system.m_velocityBuffer.data[i].Copy(t), 
            (e = l).x = this.m_step.inv_dt * this.m_system.GetParticleMass() * (h.x - t.x), 
            e.y = this.m_step.inv_dt * this.m_system.GetParticleMass() * (h.y - t.y), this.m_system.ParticleApplyForce(i, e));
        }
    }, {
        key: "ReportParticle",
        value: function(t, e) {
            return !1;
        }
    } ]), (x = Qo).ReportFixtureAndParticle_s_p1 = new X(), x.ReportFixtureAndParticle_s_output = new xe(), 
    x.ReportFixtureAndParticle_s_input = new pe(), x.ReportFixtureAndParticle_s_p = new X(), 
    x.ReportFixtureAndParticle_s_v = new X(), x.ReportFixtureAndParticle_s_f = new X(), 
    c.SolveCollisionCallback = x;
    _createClass(z, [ {
        key: "SetDestructionListener",
        value: function(t) {
            this.m_destructionListener = t;
        }
    }, {
        key: "SetContactFilter",
        value: function(t) {
            this.m_contactManager.m_contactFilter = t;
        }
    }, {
        key: "SetContactListener",
        value: function(t) {
            this.m_contactManager.m_contactListener = t;
        }
    }, {
        key: "SetDebugDraw",
        value: function(t) {
            this.m_debugDraw = t;
        }
    }, {
        key: "CreateBody",
        value: function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.IsLocked()) throw new Error();
            t = new rs(t, this);
            return t.m_prev = null, t.m_next = this.m_bodyList, this.m_bodyList && (this.m_bodyList.m_prev = t), 
            this.m_bodyList = t, ++this.m_bodyCount, t;
        }
    }, {
        key: "DestroyBody",
        value: function(t) {
            if (this.IsLocked()) throw new Error();
            for (var e = t.m_jointList; e; ) {
                var i = e, e = e.next;
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(i.joint), 
                this.DestroyJoint(i.joint), t.m_jointList = e;
            }
            t.m_jointList = null;
            for (var s = t.m_controllerList; s; ) {
                var n = s, s = s.nextController;
                n.controller.RemoveBody(t);
            }
            for (var o = t.m_contactList; o; ) {
                var r = o, o = o.next;
                this.m_contactManager.Destroy(r.contact);
            }
            t.m_contactList = null;
            for (var a = t.m_fixtureList; a; ) {
                var l = a, a = a.m_next;
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(l), l.DestroyProxies(), 
                l.Destroy(), t.m_fixtureList = a, --t.m_fixtureCount;
            }
            t.m_fixtureList = null, t.m_fixtureCount = 0, t.m_prev && (t.m_prev.m_next = t.m_next), 
            t.m_next && (t.m_next.m_prev = t.m_prev), t === this.m_bodyList && (this.m_bodyList = t.m_next), 
            --this.m_bodyCount;
        }
    }, {
        key: "CreateJoint",
        value: function(t) {
            if (this.IsLocked()) throw new Error();
            var e = z._Joint_Create(t, null), i = (e.m_prev = null, e.m_next = this.m_jointList, 
            this.m_jointList && (this.m_jointList.m_prev = e), this.m_jointList = e, ++this.m_jointCount, 
            e.m_edgeA.prev = null, e.m_edgeA.next = e.m_bodyA.m_jointList, e.m_bodyA.m_jointList && (e.m_bodyA.m_jointList.prev = e.m_edgeA), 
            e.m_bodyA.m_jointList = e.m_edgeA, e.m_edgeB.prev = null, e.m_edgeB.next = e.m_bodyB.m_jointList, 
            e.m_bodyB.m_jointList && (e.m_bodyB.m_jointList.prev = e.m_edgeB), e.m_bodyB.m_jointList = e.m_edgeB, 
            t.bodyA), s = t.bodyB;
            if (!t.collideConnected) for (var n = s.GetContactList(); n; ) n.other === i && n.contact.FlagForFiltering(), 
            n = n.next;
            return e;
        }
    }, {
        key: "DestroyJoint",
        value: function(t) {
            if (this.IsLocked()) throw new Error();
            var e = t.m_collideConnected, i = (t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), 
            t === this.m_jointList && (this.m_jointList = t.m_next), t.m_bodyA), s = t.m_bodyB;
            if (i.SetAwake(!0), s.SetAwake(!0), t.m_edgeA.prev && (t.m_edgeA.prev.next = t.m_edgeA.next), 
            t.m_edgeA.next && (t.m_edgeA.next.prev = t.m_edgeA.prev), t.m_edgeA === i.m_jointList && (i.m_jointList = t.m_edgeA.next), 
            t.m_edgeA.prev = null, t.m_edgeA.next = null, t.m_edgeB.prev && (t.m_edgeB.prev.next = t.m_edgeB.next), 
            t.m_edgeB.next && (t.m_edgeB.next.prev = t.m_edgeB.prev), t.m_edgeB === s.m_jointList && (s.m_jointList = t.m_edgeB.next), 
            t.m_edgeB.prev = null, t.m_edgeB.next = null, z._Joint_Destroy(t, null), --this.m_jointCount, 
            !e) for (var n = s.GetContactList(); n; ) n.other === i && n.contact.FlagForFiltering(), 
            n = n.next;
        }
    }, {
        key: "CreateParticleSystem",
        value: function(t) {
            if (this.IsLocked()) throw new Error();
            t = new u(t, this);
            return t.m_prev = null, t.m_next = this.m_particleSystemList, this.m_particleSystemList && (this.m_particleSystemList.m_prev = t), 
            this.m_particleSystemList = t;
        }
    }, {
        key: "DestroyParticleSystem",
        value: function(t) {
            if (this.IsLocked()) throw new Error();
            t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), 
            t === this.m_particleSystemList && (this.m_particleSystemList = t.m_next);
        }
    }, {
        key: "CalculateReasonableParticleIterations",
        value: function(t) {
            return null === this.m_particleSystemList ? 1 : _o(this.m_gravity.Length(), function(t) {
                for (var e = T, i = t.GetParticleSystemList(); null !== i; i = i.m_next) e = L(e, i.GetRadius());
                return e;
            }(this), t);
        }
    }, {
        key: "Step",
        value: function(t, e, i) {
            var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : this.CalculateReasonableParticleIterations(t), n = z.Step_s_stepTimer.Reset(), o = (this.m_newFixture && (this.m_contactManager.FindNewContacts(), 
            this.m_newFixture = !1), this.m_locked = !0, z.Step_s_step), e = (o.dt = t, o.velocityIterations = e, 
            o.positionIterations = i, o.particleIterations = s, o.inv_dt = 0 < t ? 1 / t : 0, 
            o.dtRatio = this.m_inv_dt0 * t, o.warmStarting = this.m_warmStarting, z.Step_s_timer.Reset());
            if (this.m_contactManager.Collide(), this.m_profile.collide = e.GetMilliseconds(), 
            this.m_stepComplete && 0 < o.dt) {
                for (var i = z.Step_s_timer.Reset(), r = this.m_particleSystemList; r; r = r.m_next) r.Solve(o);
                this.Solve(o), this.m_profile.solve = i.GetMilliseconds();
            }
            this.m_continuousPhysics && 0 < o.dt && (s = z.Step_s_timer.Reset(), this.SolveTOI(o), 
            this.m_profile.solveTOI = s.GetMilliseconds()), 0 < o.dt && (this.m_inv_dt0 = o.inv_dt), 
            this.m_clearForces && this.ClearForces(), this.m_locked = !1, this.m_profile.step = n.GetMilliseconds();
        }
    }, {
        key: "ClearForces",
        value: function() {
            for (var t = this.m_bodyList; t; t = t.m_next) t.m_force.SetZero(), t.m_torque = 0;
        }
    }, {
        key: "DrawParticleSystem",
        value: function(t) {
            var e, i, s;
            null !== this.m_debugDraw && (e = t.GetParticleCount()) && (i = t.GetRadius(), s = t.GetPositionBuffer(), 
            t.m_colorBuffer.data ? (t = t.GetColorBuffer(), this.m_debugDraw.DrawParticles(s, i, t, e)) : this.m_debugDraw.DrawParticles(s, i, null, e));
        }
    }, {
        key: "DrawDebugData",
        value: function() {
            if (null !== this.m_debugDraw) {
                var t = this.m_debugDraw.GetFlags(), e = z.DrawDebugData_s_color.SetRGB(0, 0, 0);
                if (t & N.b2DrawFlags.e_shapeBit) for (var i = this.m_bodyList; i; i = i.m_next) {
                    var s = i.m_xf;
                    this.m_debugDraw.PushTransform(s);
                    for (var n = i.GetFixtureList(); n; n = n.m_next) i.IsActive() ? i.GetType() === N.b2BodyType.b2_staticBody ? e.SetRGB(.5, .9, .5) : i.GetType() === N.b2BodyType.b2_kinematicBody ? e.SetRGB(.5, .5, .9) : i.IsAwake() ? e.SetRGB(.9, .7, .7) : e.SetRGB(.6, .6, .6) : e.SetRGB(.5, .5, .3), 
                    this.DrawShape(n, e);
                    this.m_debugDraw.PopTransform(s);
                }
                if (t & N.b2DrawFlags.e_particleBit) for (var o = this.m_particleSystemList; o; o = o.m_next) this.DrawParticleSystem(o);
                if (t & N.b2DrawFlags.e_jointBit) for (var r = this.m_jointList; r; r = r.m_next) this.DrawJoint(r);
                if (t & N.b2DrawFlags.e_aabbBit) {
                    e.SetRGB(.9, .3, .9);
                    for (var a = z.DrawDebugData_s_vs, l = this.m_bodyList; l; l = l.m_next) if (l.IsActive()) for (var _ = l.GetFixtureList(); _; _ = _.m_next) for (var m = 0; m < _.m_proxyCount; ++m) {
                        var h = _.m_proxies[m].treeNode.aabb;
                        a[0].Set(h.lowerBound.x, h.lowerBound.y), a[1].Set(h.upperBound.x, h.lowerBound.y), 
                        a[2].Set(h.upperBound.x, h.upperBound.y), a[3].Set(h.lowerBound.x, h.upperBound.y), 
                        this.m_debugDraw.DrawPolygon(a, 4, e);
                    }
                }
                if (t & N.b2DrawFlags.e_centerOfMassBit) for (var u = this.m_bodyList; u; u = u.m_next) {
                    var c = z.DrawDebugData_s_xf;
                    c.q.Copy(u.m_xf.q), c.p.Copy(u.GetWorldCenter()), this.m_debugDraw.DrawTransform(c);
                }
                if (t & N.b2DrawFlags.e_controllerBit) for (var f = this.m_controllerList; f; f = f.m_next) f.Draw(this.m_debugDraw);
            }
        }
    }, {
        key: "QueryAABB",
        value: function(e, t, i) {
            if (this.m_contactManager.m_broadPhase.Query(t, function(t) {
                t = t.userData.fixture;
                return e ? e.ReportFixture(t) : !i || i(t);
            }), e instanceof Rn) for (var s = this.m_particleSystemList; s; s = s.m_next) e.ShouldQueryParticleSystem(s) && s.QueryAABB(e, t);
        }
    }, {
        key: "QueryAllAABB",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
            return this.QueryAABB(null, t, function(t) {
                return e.push(t), !0;
            }), e;
        }
    }, {
        key: "QueryPointAABB",
        value: function(e, t, i) {
            if (this.m_contactManager.m_broadPhase.QueryPoint(t, function(t) {
                t = t.userData.fixture;
                return e ? e.ReportFixture(t) : !i || i(t);
            }), e instanceof Rn) for (var s = this.m_particleSystemList; s; s = s.m_next) e.ShouldQueryParticleSystem(s) && s.QueryPointAABB(e, t);
        }
    }, {
        key: "QueryAllPointAABB",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
            return this.QueryPointAABB(null, t, function(t) {
                return e.push(t), !0;
            }), e;
        }
    }, {
        key: "QueryFixtureShape",
        value: function(i, s, n, o, r) {
            var t = z.QueryFixtureShape_s_aabb;
            if (s.ComputeAABB(t, o, n), this.m_contactManager.m_broadPhase.Query(t, function(t) {
                var t = t.userData, e = t.fixture;
                if (we(s, n, e.GetShape(), t.childIndex, o, e.GetBody().GetTransform())) {
                    if (i) return i.ReportFixture(e);
                    if (r) return r(e);
                }
                return !0;
            }), i instanceof Rn) for (var e = this.m_particleSystemList; e; e = e.m_next) i.ShouldQueryParticleSystem(e) && e.QueryAABB(i, t);
        }
    }, {
        key: "QueryAllFixtureShape",
        value: function(t, e, i) {
            var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [];
            return this.QueryFixtureShape(null, t, e, i, function(t) {
                return s.push(t), !0;
            }), s;
        }
    }, {
        key: "QueryFixturePoint",
        value: function(e, i, s) {
            if (this.m_contactManager.m_broadPhase.QueryPoint(i, function(t) {
                t = t.userData.fixture;
                if (t.TestPoint(i)) {
                    if (e) return e.ReportFixture(t);
                    if (s) return s(t);
                }
                return !0;
            }), e) for (var t = this.m_particleSystemList; t; t = t.m_next) e.ShouldQueryParticleSystem(t) && t.QueryPointAABB(e, i);
        }
    }, {
        key: "QueryAllFixturePoint",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
            return this.QueryFixturePoint(null, t, function(t) {
                return e.push(t), !0;
            }), e;
        }
    }, {
        key: "RayCast",
        value: function(o, r, a, l) {
            var t = z.RayCast_s_input;
            if (t.maxFraction = 1, t.p1.Copy(r), t.p2.Copy(a), this.m_contactManager.m_broadPhase.RayCast(t, function(t, e) {
                var e = e.userData, i = e.fixture, e = e.childIndex, s = z.RayCast_s_output;
                if (i.RayCast(s, t, e)) {
                    var e = s.fraction, n = z.RayCast_s_point;
                    if (n.Set((1 - e) * r.x + e * a.x, (1 - e) * r.y + e * a.y), o) return o.ReportFixture(i, n, s.normal, e);
                    if (l) return l(i, n, s.normal, e);
                }
                return t.maxFraction;
            }), o) for (var e = this.m_particleSystemList; e; e = e.m_next) o.ShouldQueryParticleSystem(e) && e.RayCast(o, r, a);
        }
    }, {
        key: "RayCastOne",
        value: function(t, e) {
            var n = null, o = 1;
            return this.RayCast(null, t, e, function(t, e, i, s) {
                return s < o && (o = s, n = t), o;
            }), n;
        }
    }, {
        key: "RayCastAll",
        value: function(t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
            return this.RayCast(null, t, e, function(t, e, i, s) {
                return n.push(t), 1;
            }), n;
        }
    }, {
        key: "GetBodyList",
        value: function() {
            return this.m_bodyList;
        }
    }, {
        key: "GetJointList",
        value: function() {
            return this.m_jointList;
        }
    }, {
        key: "GetParticleSystemList",
        value: function() {
            return this.m_particleSystemList;
        }
    }, {
        key: "GetContactList",
        value: function() {
            return this.m_contactManager.m_contactList;
        }
    }, {
        key: "SetAllowSleeping",
        value: function(t) {
            if (t !== this.m_allowSleep && (this.m_allowSleep = t, !this.m_allowSleep)) for (var e = this.m_bodyList; e; e = e.m_next) e.SetAwake(!0);
        }
    }, {
        key: "GetAllowSleeping",
        value: function() {
            return this.m_allowSleep;
        }
    }, {
        key: "SetWarmStarting",
        value: function(t) {
            this.m_warmStarting = t;
        }
    }, {
        key: "GetWarmStarting",
        value: function() {
            return this.m_warmStarting;
        }
    }, {
        key: "SetContinuousPhysics",
        value: function(t) {
            this.m_continuousPhysics = t;
        }
    }, {
        key: "GetContinuousPhysics",
        value: function() {
            return this.m_continuousPhysics;
        }
    }, {
        key: "SetSubStepping",
        value: function(t) {
            this.m_subStepping = t;
        }
    }, {
        key: "GetSubStepping",
        value: function() {
            return this.m_subStepping;
        }
    }, {
        key: "GetProxyCount",
        value: function() {
            return this.m_contactManager.m_broadPhase.GetProxyCount();
        }
    }, {
        key: "GetBodyCount",
        value: function() {
            return this.m_bodyCount;
        }
    }, {
        key: "GetJointCount",
        value: function() {
            return this.m_jointCount;
        }
    }, {
        key: "GetContactCount",
        value: function() {
            return this.m_contactManager.m_contactCount;
        }
    }, {
        key: "GetTreeHeight",
        value: function() {
            return this.m_contactManager.m_broadPhase.GetTreeHeight();
        }
    }, {
        key: "GetTreeBalance",
        value: function() {
            return this.m_contactManager.m_broadPhase.GetTreeBalance();
        }
    }, {
        key: "GetTreeQuality",
        value: function() {
            return this.m_contactManager.m_broadPhase.GetTreeQuality();
        }
    }, {
        key: "SetGravity",
        value: function(t) {
            var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            if (!X.IsEqualToV(this.m_gravity, t) && (this.m_gravity.Copy(t), e)) for (var i = this.m_bodyList; i; i = i.m_next) i.SetAwake(!0);
        }
    }, {
        key: "GetGravity",
        value: function() {
            return this.m_gravity;
        }
    }, {
        key: "IsLocked",
        value: function() {
            return this.m_locked;
        }
    }, {
        key: "SetAutoClearForces",
        value: function(t) {
            this.m_clearForces = t;
        }
    }, {
        key: "GetAutoClearForces",
        value: function() {
            return this.m_clearForces;
        }
    }, {
        key: "ShiftOrigin",
        value: function(t) {
            if (this.IsLocked()) throw new Error();
            for (var e = this.m_bodyList; e; e = e.m_next) e.m_xf.p.SelfSub(t), e.m_sweep.c0.SelfSub(t), 
            e.m_sweep.c.SelfSub(t);
            for (var i = this.m_jointList; i; i = i.m_next) i.ShiftOrigin(t);
            this.m_contactManager.m_broadPhase.ShiftOrigin(t);
        }
    }, {
        key: "GetContactManager",
        value: function() {
            return this.m_contactManager;
        }
    }, {
        key: "GetProfile",
        value: function() {
            return this.m_profile;
        }
    }, {
        key: "Dump",
        value: function(t) {
            if (!this.m_locked) {
                t("const g: b2Vec2 = new b2Vec2(%.15f, %.15f);\n", this.m_gravity.x, this.m_gravity.y), 
                t("this.m_world.SetGravity(g);\n"), t("const bodies: b2Body[] = [];\n"), t("const joints: b2Joint[] = [];\n");
                for (var e = 0, i = this.m_bodyList; i; i = i.m_next) i.m_islandIndex = e, i.Dump(t), 
                ++e;
                for (var e = 0, s = this.m_jointList; s; s = s.m_next) s.m_index = e, ++e;
                for (var n = this.m_jointList; n; n = n.m_next) n.m_type !== N.b2JointType.e_gearJoint && (t("{\n"), 
                n.Dump(t), t("}\n"));
                for (var o = this.m_jointList; o; o = o.m_next) o.m_type === N.b2JointType.e_gearJoint && (t("{\n"), 
                o.Dump(t), t("}\n"));
            }
        }
    }, {
        key: "DrawJoint",
        value: function(t) {
            if (null !== this.m_debugDraw) {
                var e = t.GetBodyA(), i = t.GetBodyB(), e = e.m_xf, i = i.m_xf, s = e.p, n = i.p, o = t.GetAnchorA(z.DrawJoint_s_p1), r = t.GetAnchorB(z.DrawJoint_s_p2), a = z.DrawJoint_s_color.SetRGB(.5, .8, .8);
                switch (t.m_type) {
                  case N.b2JointType.e_distanceJoint:
                    this.m_debugDraw.DrawSegment(o, r, a);
                    break;

                  case N.b2JointType.e_pulleyJoint:
                    var l = t, _ = l.GetGroundAnchorA(), l = l.GetGroundAnchorB();
                    this.m_debugDraw.DrawSegment(_, o, a), this.m_debugDraw.DrawSegment(l, r, a), this.m_debugDraw.DrawSegment(_, l, a);
                    break;

                  case N.b2JointType.e_mouseJoint:
                    _ = z.DrawJoint_s_c;
                    _.Set(0, 1, 0), this.m_debugDraw.DrawPoint(o, 4, _), this.m_debugDraw.DrawPoint(r, 4, _), 
                    _.Set(.8, .8, .8), this.m_debugDraw.DrawSegment(o, r, _);
                    break;

                  default:
                    this.m_debugDraw.DrawSegment(s, o, a), this.m_debugDraw.DrawSegment(o, r, a), this.m_debugDraw.DrawSegment(n, r, a);
                }
            }
        }
    }, {
        key: "DrawShape",
        value: function(t, e) {
            if (null !== this.m_debugDraw) {
                var i = t.GetShape();
                switch (i.m_type) {
                  case N.b2ShapeType.e_circleShape:
                    var s = i.m_p, n = i.m_radius, o = X.UNITX;
                    this.m_debugDraw.DrawSolidCircle(s, n, o, e);
                    break;

                  case N.b2ShapeType.e_edgeShape:
                    s = i.m_vertex1, n = i.m_vertex2;
                    this.m_debugDraw.DrawSegment(s, n, e);
                    break;

                  case N.b2ShapeType.e_chainShape:
                    var o = i, r = o.m_count, a = o.m_vertices, s = z.DrawShape_s_ghostColor.SetRGBA(.75 * e.r, .75 * e.g, .75 * e.b, e.a), l = a[0];
                    this.m_debugDraw.DrawPoint(l, 4, e), o.m_hasPrevVertex && (n = o.m_prevVertex, this.m_debugDraw.DrawSegment(n, l, s), 
                    this.m_debugDraw.DrawCircle(n, .1, s));
                    for (var _ = 1; _ < r; ++_) {
                        var m = a[_];
                        this.m_debugDraw.DrawSegment(l, m, e), this.m_debugDraw.DrawPoint(m, 4, e), l = m;
                    }
                    o.m_hasNextVertex && (n = o.m_nextVertex, this.m_debugDraw.DrawSegment(n, l, s), 
                    this.m_debugDraw.DrawCircle(n, .1, s));
                    break;

                  case N.b2ShapeType.e_polygonShape:
                    o = i.m_count, n = i.m_vertices;
                    this.m_debugDraw.DrawSolidPolygon(n, o, e);
                }
            }
        }
    }, {
        key: "Solve",
        value: function(t) {
            for (var e = this.m_bodyList; e; e = e.m_next) e.m_xf0.Copy(e.m_xf);
            for (var i = this.m_controllerList; i; i = i.m_next) i.Step(t);
            this.m_profile.solveInit = 0, this.m_profile.solveVelocity = 0, this.m_profile.solvePosition = 0;
            var s = this.m_island;
            s.Initialize(this.m_bodyCount, this.m_contactManager.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener);
            for (var n = this.m_bodyList; n; n = n.m_next) n.m_islandFlag = !1;
            for (var o = this.m_contactManager.m_contactList; o; o = o.m_next) o.m_islandFlag = !1;
            for (var r = this.m_jointList; r; r = r.m_next) r.m_islandFlag = !1;
            for (var a = this.s_stack, l = this.m_bodyList; l; l = l.m_next) if (!l.m_islandFlag && l.IsAwake() && l.IsActive() && l.GetType() !== N.b2BodyType.b2_staticBody) {
                s.Clear();
                var _ = 0;
                for ((a[_++] = l).m_islandFlag = !0; 0 < _; ) {
                    var m = a[--_];
                    if (!m) throw new Error();
                    if (s.AddBody(m), m.m_awakeFlag = !0, m.GetType() !== N.b2BodyType.b2_staticBody) {
                        for (var h = m.m_contactList; h; h = h.next) {
                            var u = h.contact;
                            if (!u.m_islandFlag && (u.IsEnabled() && u.IsTouching())) {
                                var c = u.m_fixtureA.m_isSensor, f = u.m_fixtureB.m_isSensor;
                                if (!c && !f) {
                                    s.AddContact(u), u.m_islandFlag = !0;
                                    c = h.other;
                                    if (!c) throw new Error();
                                    c.m_islandFlag || ((a[_++] = c).m_islandFlag = !0);
                                }
                            }
                        }
                        for (var d, y = m.m_jointList; y; y = y.next) y.joint.m_islandFlag || (d = y.other).IsActive() && (s.AddJoint(y.joint), 
                        y.joint.m_islandFlag = !0, d.m_islandFlag || ((a[_++] = d).m_islandFlag = !0));
                    }
                }
                var p = new jn();
                s.Solve(p, t, this.m_gravity, this.m_allowSleep), this.m_profile.solveInit += p.solveInit, 
                this.m_profile.solveVelocity += p.solveVelocity, this.m_profile.solvePosition += p.solvePosition;
                for (var v = 0; v < s.m_bodyCount; ++v) {
                    var x = s.m_bodies[v];
                    x.GetType() === N.b2BodyType.b2_staticBody && (x.m_islandFlag = !1);
                }
            }
            for (var C = 0; C < a.length && a[C]; ++C) a[C] = null;
            for (var B = new Bt(), S = this.m_bodyList; S; S = S.m_next) S.m_islandFlag && S.GetType() !== N.b2BodyType.b2_staticBody && S.SynchronizeFixtures();
            this.m_contactManager.FindNewContacts(), this.m_profile.broadphase = B.GetMilliseconds();
        }
    }, {
        key: "SolveTOI",
        value: function(t) {
            var e = this.m_island;
            if (e.Initialize(64, 32, 0, null, this.m_contactManager.m_contactListener), this.m_stepComplete) {
                for (var i = this.m_bodyList; i; i = i.m_next) i.m_islandFlag = !1, i.m_sweep.alpha0 = 0;
                for (var s = this.m_contactManager.m_contactList; s; s = s.m_next) s.m_toiFlag = !1, 
                s.m_islandFlag = !1, s.m_toiCount = 0, s.m_toi = 1;
            }
            for (;;) {
                for (var n = null, o = 1, r = this.m_contactManager.m_contactList; r; r = r.m_next) if (r.IsEnabled() && !(8 < r.m_toiCount)) {
                    var a = 1;
                    if (r.m_toiFlag) a = r.m_toi; else {
                        var l = r.GetFixtureA(), _ = r.GetFixtureB();
                        if (l.IsSensor() || _.IsSensor()) continue;
                        var m = l.GetBody(), h = _.GetBody(), u = m.m_type, c = h.m_type, f = m.IsAwake() && u !== N.b2BodyType.b2_staticBody, d = h.IsAwake() && c !== N.b2BodyType.b2_staticBody;
                        if (!f && !d) continue;
                        f = m.IsBullet() || u !== N.b2BodyType.b2_dynamicBody, d = h.IsBullet() || c !== N.b2BodyType.b2_dynamicBody;
                        if (!f && !d) continue;
                        u = m.m_sweep.alpha0, c = (m.m_sweep.alpha0 < h.m_sweep.alpha0 ? (u = h.m_sweep.alpha0, 
                        m.m_sweep.Advance(u)) : h.m_sweep.alpha0 < m.m_sweep.alpha0 && (u = m.m_sweep.alpha0, 
                        h.m_sweep.Advance(u)), r.GetChildIndexA()), f = r.GetChildIndexB(), d = z.SolveTOI_s_toi_input, 
                        l = (d.proxyA.SetShape(l.GetShape(), c), d.proxyB.SetShape(_.GetShape(), f), d.sweepA.Copy(m.m_sweep), 
                        d.sweepB.Copy(h.m_sweep), d.tMax = 1, z.SolveTOI_s_toi_output), c = (ti(l, d), l.t), 
                        a = l.state === N.b2TOIOutputState.e_touching ? L(u + (1 - u) * c, 1) : 1;
                        r.m_toi = a, r.m_toiFlag = !0;
                    }
                    a < o && (n = r, o = a);
                }
                if (null === n || 1 - 10 * I < o) {
                    this.m_stepComplete = !0;
                    break;
                }
                var y = n.GetFixtureA(), p = n.GetFixtureB(), v = y.GetBody(), x = p.GetBody(), y = z.SolveTOI_s_backup1.Copy(v.m_sweep), p = z.SolveTOI_s_backup2.Copy(x.m_sweep);
                if (v.Advance(o), x.Advance(o), n.Update(this.m_contactManager.m_contactListener), 
                n.m_toiFlag = !1, ++n.m_toiCount, n.IsEnabled() && n.IsTouching()) {
                    v.SetAwake(!0), x.SetAwake(!0), e.Clear(), e.AddBody(v), e.AddBody(x), e.AddContact(n), 
                    v.m_islandFlag = !0, x.m_islandFlag = !0, n.m_islandFlag = !0;
                    for (var C = 0; C < 2; ++C) {
                        var B = 0 === C ? v : x;
                        if (B.m_type === N.b2BodyType.b2_dynamicBody) for (var S = B.m_contactList; S && e.m_bodyCount !== e.m_bodyCapacity && e.m_contactCount !== e.m_contactCapacity; S = S.next) {
                            var b, A, g, V = S.contact;
                            V.m_islandFlag || (b = S.other).m_type === N.b2BodyType.b2_dynamicBody && !B.IsBullet() && !b.IsBullet() || (g = V.m_fixtureA.m_isSensor, 
                            A = V.m_fixtureB.m_isSensor, g) || A || (g = z.SolveTOI_s_backup.Copy(b.m_sweep), 
                            b.m_islandFlag || b.Advance(o), V.Update(this.m_contactManager.m_contactListener), 
                            V.IsEnabled() && V.IsTouching() ? (V.m_islandFlag = !0, e.AddContact(V), b.m_islandFlag || (b.m_islandFlag = !0, 
                            b.m_type !== N.b2BodyType.b2_staticBody && b.SetAwake(!0), e.AddBody(b))) : (b.m_sweep.Copy(g), 
                            b.SynchronizeTransform()));
                        }
                    }
                    var w = z.SolveTOI_s_subStep;
                    w.dt = (1 - o) * t.dt, w.inv_dt = 1 / w.dt, w.dtRatio = 1, w.positionIterations = 20, 
                    w.velocityIterations = t.velocityIterations, w.particleIterations = t.particleIterations, 
                    w.warmStarting = !1, e.SolveTOI(w, v.m_islandIndex, x.m_islandIndex);
                    for (var k = 0; k < e.m_bodyCount; ++k) {
                        var M = e.m_bodies[k];
                        if (M.m_islandFlag = !1, M.m_type === N.b2BodyType.b2_dynamicBody) {
                            M.SynchronizeFixtures();
                            for (var P = M.m_contactList; P; P = P.next) P.contact.m_toiFlag = !1, P.contact.m_islandFlag = !1;
                        }
                    }
                    if (this.m_contactManager.FindNewContacts(), this.m_subStepping) {
                        this.m_stepComplete = !1;
                        break;
                    }
                } else n.SetEnabled(!1), v.m_sweep.Copy(y), x.m_sweep.Copy(p), v.SynchronizeTransform(), 
                x.SynchronizeTransform();
            }
        }
    }, {
        key: "AddController",
        value: function(t) {
            return t.m_next = this.m_controllerList, t.m_prev = null, this.m_controllerList && (this.m_controllerList.m_prev = t), 
            this.m_controllerList = t, ++this.m_controllerCount, t;
        }
    }, {
        key: "RemoveController",
        value: function(t) {
            return t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), 
            this.m_controllerList === t && (this.m_controllerList = t.m_next), --this.m_controllerCount, 
            t.m_prev = null, t.m_next = null, t;
        }
    } ], [ {
        key: "_Joint_Create",
        value: function(t, e) {
            switch (t.type) {
              case N.b2JointType.e_distanceJoint:
                return new ds(t);

              case N.b2JointType.e_mouseJoint:
                return new Ts(t);

              case N.b2JointType.e_prismaticJoint:
                return new zs(t);

              case N.b2JointType.e_revoluteJoint:
                return new Us(t);

              case N.b2JointType.e_pulleyJoint:
                return new js(t);

              case N.b2JointType.e_gearJoint:
                return new ws(t);

              case N.b2JointType.e_wheelJoint:
                return new on(t);

              case N.b2JointType.e_weldJoint:
                return new tn(t);

              case N.b2JointType.e_frictionJoint:
                return new bs(t);

              case N.b2JointType.e_ropeJoint:
                return new Qs(t);

              case N.b2JointType.e_motorJoint:
                return new Is(t);

              case N.b2JointType.e_areaJoint:
                return new xs(t);
            }
            throw new Error();
        }
    }, {
        key: "_Joint_Destroy",
        value: function(t, e) {}
    } ]);
    x = z;
    function z(t) {
        _classCallCheck(this, z), this.m_newFixture = !1, this.m_locked = !1, this.m_clearForces = !0, 
        this.m_contactManager = new On(), this.m_bodyList = null, this.m_jointList = null, 
        this.m_particleSystemList = null, this.m_bodyCount = 0, this.m_jointCount = 0, this.m_gravity = new X(), 
        this.m_allowSleep = !0, this.m_destructionListener = null, this.m_debugDraw = null, 
        this.m_inv_dt0 = 0, this.m_warmStarting = !0, this.m_continuousPhysics = !0, this.m_subStepping = !1, 
        this.m_stepComplete = !0, this.m_profile = new jn(), this.m_island = new ro(), this.s_stack = [], 
        this.m_controllerList = null, this.m_controllerCount = 0, this.m_gravity.Copy(t);
    }
    x.Step_s_step = new Nn(), x.Step_s_stepTimer = new Bt(), x.Step_s_timer = new Bt(), 
    x.DrawDebugData_s_color = new o(0, 0, 0), x.DrawDebugData_s_vs = X.MakeArray(4), 
    x.DrawDebugData_s_xf = new F(), x.QueryFixtureShape_s_aabb = new _(), x.RayCast_s_input = new pe(), 
    x.RayCast_s_output = new xe(), x.RayCast_s_point = new X(), x.DrawJoint_s_p1 = new X(), 
    x.DrawJoint_s_p2 = new X(), x.DrawJoint_s_color = new o(.5, .8, .8), x.DrawJoint_s_c = new o(), 
    x.DrawShape_s_ghostColor = new o(), x.SolveTOI_s_subStep = new Nn(), x.SolveTOI_s_backup = new pt(), 
    x.SolveTOI_s_backup1 = new pt(), x.SolveTOI_s_backup2 = new pt(), x.SolveTOI_s_toi_input = new Te(), 
    x.SolveTOI_s_toi_output = new Re();
    function Yo(t, e) {
        _classCallCheck(this, Yo), this.prevBody = null, this.nextBody = null, this.prevController = null, 
        this.nextController = null, this.controller = t, this.body = e;
    }
    _createClass($o, [ {
        key: "GetNext",
        value: function() {
            return this.m_next;
        }
    }, {
        key: "GetPrev",
        value: function() {
            return this.m_prev;
        }
    }, {
        key: "GetBodyList",
        value: function() {
            return this.m_bodyList;
        }
    }, {
        key: "AddBody",
        value: function(t) {
            var e = new Yo(this, t);
            e.nextBody = this.m_bodyList, e.prevBody = null, this.m_bodyList && (this.m_bodyList.prevBody = e), 
            this.m_bodyList = e, ++this.m_bodyCount, e.nextController = t.m_controllerList, 
            e.prevController = null, t.m_controllerList && (t.m_controllerList.prevController = e), 
            t.m_controllerList = e, ++t.m_controllerCount;
        }
    }, {
        key: "RemoveBody",
        value: function(t) {
            if (this.m_bodyCount <= 0) throw new Error();
            for (var e = this.m_bodyList; e && e.body !== t; ) e = e.nextBody;
            if (null === e) throw new Error();
            e.prevBody && (e.prevBody.nextBody = e.nextBody), e.nextBody && (e.nextBody.prevBody = e.prevBody), 
            this.m_bodyList === e && (this.m_bodyList = e.nextBody), --this.m_bodyCount, e.nextController && (e.nextController.prevController = e.prevController), 
            e.prevController && (e.prevController.nextController = e.nextController), t.m_controllerList === e && (t.m_controllerList = e.nextController), 
            --t.m_controllerCount;
        }
    }, {
        key: "Clear",
        value: function() {
            for (;this.m_bodyList; ) this.RemoveBody(this.m_bodyList.body);
            this.m_bodyCount = 0;
        }
    } ]);
    var Ko = $o;
    function $o() {
        _classCallCheck(this, $o), this.m_bodyList = null, this.m_bodyCount = 0, this.m_prev = null, 
        this.m_next = null;
    }
    _inherits(er, Ko), _createClass(er, [ {
        key: "Step",
        value: function(t) {
            if (this.m_bodyList) {
                this.useWorldGravity && this.gravity.Copy(this.m_bodyList.body.GetWorld().GetGravity());
                for (var e = this.m_bodyList; e; e = e.nextBody) {
                    var i = e.body;
                    if (i.IsAwake()) {
                        for (var s, n = new X(), o = new X(), r = 0, a = 0, l = i.GetFixtureList(); l; l = l.m_next) {
                            var _ = new X(), m = l.GetShape().ComputeSubmergedArea(this.normal, this.offset, i.GetTransform(), _), h = (r += m, 
                            n.x += m * _.x, n.y += m * _.y, 0);
                            a += m * (h = this.useDensity ? l.GetDensity() : 1), o.x += m * _.x * h, o.y += m * _.y * h;
                        }
                        n.x /= r, n.y /= r, o.x /= a, o.y /= a, r < I || ((s = this.gravity.Clone().SelfNeg()).SelfMul(this.density * r), 
                        i.ApplyForce(s, o), (s = i.GetLinearVelocityFromWorldPoint(n, new X())).SelfSub(this.velocity), 
                        s.SelfMul(-this.linearDrag * r), i.ApplyForce(s, n), i.ApplyTorque(-i.GetInertia() / i.GetMass() * r * i.GetAngularVelocity() * this.angularDrag));
                    }
                }
            }
        }
    }, {
        key: "Draw",
        value: function(t) {
            var e = new X(), i = new X(), s = (e.x = this.normal.x * this.offset + 100 * this.normal.y, 
            e.y = this.normal.y * this.offset - 100 * this.normal.x, i.x = this.normal.x * this.offset - 100 * this.normal.y, 
            i.y = this.normal.y * this.offset + 100 * this.normal.x, new o(0, 0, .8));
            t.DrawSegment(e, i, s);
        }
    } ]);
    var tr = er;
    function er() {
        _classCallCheck(this, er);
        var t = _possibleConstructorReturn(this, (er.__proto__ || Object.getPrototypeOf(er)).apply(this, arguments));
        return t.normal = new X(0, 1), t.offset = 0, t.density = 0, t.velocity = new X(0, 0), 
        t.linearDrag = 0, t.angularDrag = 0, t.useDensity = !1, t.useWorldGravity = !0, 
        t.gravity = new X(0, 0), t;
    }
    _inherits(sr, Ko), _createClass(sr, [ {
        key: "Step",
        value: function(t) {
            for (var e = X.MulSV(t.dt, this.A, sr.Step_s_dtA), i = this.m_bodyList; i; i = i.nextBody) {
                var s = i.body;
                s.IsAwake() && s.SetLinearVelocity(X.AddVV(s.GetLinearVelocity(), e, X.s_t0));
            }
        }
    }, {
        key: "Draw",
        value: function(t) {}
    } ]);
    var ir = sr;
    function sr() {
        _classCallCheck(this, sr);
        var t = _possibleConstructorReturn(this, (sr.__proto__ || Object.getPrototypeOf(sr)).apply(this, arguments));
        return t.A = new X(0, 0), t;
    }
    ir.Step_s_dtA = new X();
    _inherits(or, Ko), _createClass(or, [ {
        key: "Step",
        value: function(t) {
            for (var e = this.m_bodyList; e; e = e.nextBody) {
                var i = e.body;
                i.IsAwake() && i.ApplyForce(this.F, i.GetWorldCenter());
            }
        }
    }, {
        key: "Draw",
        value: function(t) {}
    } ]);
    var nr = or;
    function or() {
        _classCallCheck(this, or);
        var t = _possibleConstructorReturn(this, (or.__proto__ || Object.getPrototypeOf(or)).apply(this, arguments));
        return t.F = new X(0, 0), t;
    }
    _inherits(ar, Ko), _createClass(ar, [ {
        key: "Step",
        value: function(t) {
            if (this.invSqr) for (var e = this.m_bodyList; e; e = e.nextBody) for (var i = e.body, s = i.GetWorldCenter(), n = i.GetMass(), o = this.m_bodyList; o && o !== e; o = o.nextBody) {
                var r = o.body, a = r.GetWorldCenter(), l = r.GetMass(), _ = a.x - s.x, m = a.y - s.y, h = _ * _ + m * m;
                h < I || ((_ = ar.Step_s_f.Set(_, m)).SelfMul(this.G / h / it(h) * n * l), i.IsAwake() && i.ApplyForce(_, s), 
                r.IsAwake() && r.ApplyForce(_.SelfMul(-1), a));
            } else for (var u = this.m_bodyList; u; u = u.nextBody) for (var c = u.body, f = c.GetWorldCenter(), d = c.GetMass(), y = this.m_bodyList; y && y !== u; y = y.nextBody) {
                var p = y.body, v = p.GetWorldCenter(), x = p.GetMass(), C = v.x - f.x, B = v.y - f.y, S = C * C + B * B;
                S < I || ((C = ar.Step_s_f.Set(C, B)).SelfMul(this.G / S * d * x), c.IsAwake() && c.ApplyForce(C, f), 
                p.IsAwake() && p.ApplyForce(C.SelfMul(-1), v));
            }
        }
    }, {
        key: "Draw",
        value: function(t) {}
    } ]);
    var rr = ar;
    function ar() {
        _classCallCheck(this, ar);
        var t = _possibleConstructorReturn(this, (ar.__proto__ || Object.getPrototypeOf(ar)).apply(this, arguments));
        return t.G = 1, t.invSqr = !0, t;
    }
    rr.Step_s_f = new X();
    _inherits(_r, Ko), _createClass(_r, [ {
        key: "Step",
        value: function(t) {
            var e = t.dt;
            if (!(e <= I)) {
                e > this.maxTimestep && 0 < this.maxTimestep && (e = this.maxTimestep);
                for (var i = this.m_bodyList; i; i = i.nextBody) {
                    var s, n = i.body;
                    n.IsAwake() && (s = n.GetWorldVector(d.MulMV(this.T, n.GetLocalVector(n.GetLinearVelocity(), X.s_t0), X.s_t1), _r.Step_s_damping), 
                    n.SetLinearVelocity(X.AddVV(n.GetLinearVelocity(), X.MulSV(e, s, X.s_t0), X.s_t1)));
                }
            }
        }
    }, {
        key: "Draw",
        value: function(t) {}
    }, {
        key: "SetAxisAligned",
        value: function(t, e) {
            this.T.ex.x = -t, this.T.ex.y = 0, this.T.ey.x = 0, this.T.ey.y = -e, this.maxTimestep = 0 < t || 0 < e ? 1 / D(t, e) : 0;
        }
    } ]);
    var lr = _r;
    function _r() {
        _classCallCheck(this, _r);
        var t = _possibleConstructorReturn(this, (_r.__proto__ || Object.getPrototypeOf(_r)).apply(this, arguments));
        return t.T = new d(), t.maxTimestep = 0, t;
    }
    lr.Step_s_damping = new X();
    function mr() {
        _classCallCheck(this, mr), this.vertices = [], this.count = 0, this.masses = [], 
        this.gravity = new X(0, 0), this.damping = .1, this.k2 = .9, this.k3 = .1;
    }
    _createClass(ur, [ {
        key: "GetVertexCount",
        value: function() {
            return this.m_count;
        }
    }, {
        key: "GetVertices",
        value: function() {
            return this.m_ps;
        }
    }, {
        key: "Initialize",
        value: function(t) {
            this.m_count = t.count, this.m_ps = X.MakeArray(this.m_count), this.m_p0s = X.MakeArray(this.m_count), 
            this.m_vs = X.MakeArray(this.m_count), this.m_ims = H(this.m_count);
            for (var e = 0; e < this.m_count; ++e) {
                this.m_ps[e].Copy(t.vertices[e]), this.m_p0s[e].Copy(t.vertices[e]), this.m_vs[e].SetZero();
                var i = t.masses[e];
                this.m_ims[e] = 0 < i ? 1 / i : 0;
            }
            var s = this.m_count - 1, n = this.m_count - 2;
            this.m_Ls = H(s), this.m_as = H(n);
            for (var o = 0; o < s; ++o) {
                var r = this.m_ps[o], a = this.m_ps[o + 1];
                this.m_Ls[o] = X.DistanceVV(r, a);
            }
            for (var l = 0; l < n; ++l) {
                var _ = this.m_ps[l], m = this.m_ps[l + 1], h = this.m_ps[l + 2], _ = X.SubVV(m, _, X.s_t0), h = X.SubVV(h, m, X.s_t1), m = X.CrossVV(_, h), _ = X.DotVV(_, h);
                this.m_as[l] = lt(m, _);
            }
            this.m_gravity.Copy(t.gravity), this.m_damping = t.damping, this.m_k2 = t.k2, this.m_k3 = t.k3;
        }
    }, {
        key: "Step",
        value: function(t, e) {
            if (0 !== t) {
                for (var i = Math.exp(-t * this.m_damping), s = 0; s < this.m_count; ++s) this.m_p0s[s].Copy(this.m_ps[s]), 
                0 < this.m_ims[s] && this.m_vs[s].SelfMulAdd(t, this.m_gravity), this.m_vs[s].SelfMul(i), 
                this.m_ps[s].SelfMulAdd(t, this.m_vs[s]);
                for (var n = 0; n < e; ++n) this.SolveC2(), this.SolveC3(), this.SolveC2();
                for (var o = 1 / t, r = 0; r < this.m_count; ++r) X.MulSV(o, X.SubVV(this.m_ps[r], this.m_p0s[r], X.s_t0), this.m_vs[r]);
            }
        }
    }, {
        key: "SolveC2",
        value: function() {
            for (var t = this.m_count - 1, e = 0; e < t; ++e) {
                var i, s = this.m_ps[e], n = this.m_ps[e + 1], o = X.SubVV(n, s, ur.s_d), r = o.Normalize(), a = this.m_ims[e], l = this.m_ims[e + 1];
                a + l !== 0 && (i = l / (a + l), s.SelfMulSub(this.m_k2 * (a / (a + l)) * (this.m_Ls[e] - r), o), 
                n.SelfMulAdd(this.m_k2 * i * (this.m_Ls[e] - r), o));
            }
        }
    }, {
        key: "SetAngle",
        value: function(t) {
            for (var e = this.m_count - 2, i = 0; i < e; ++i) this.m_as[i] = t;
        }
    }, {
        key: "SolveC3",
        value: function() {
            for (var t = this.m_count - 2, e = 0; e < t; ++e) {
                var i = this.m_ps[e], s = this.m_ps[e + 1], n = this.m_ps[e + 2], o = this.m_ims[e], r = this.m_ims[e + 1], a = this.m_ims[e + 2], l = X.SubVV(s, i, ur.s_d1), _ = X.SubVV(n, s, ur.s_d2), m = l.LengthSquared(), h = _.LengthSquared();
                if (m * h != 0) {
                    var u = X.CrossVV(l, _), c = X.DotVV(l, _), f = lt(u, c), u = X.MulSV(-1 / m, l.SelfSkew(), ur.s_Jd1), c = X.MulSV(1 / h, _.SelfSkew(), ur.s_Jd2), m = X.NegV(u, ur.s_J1), l = X.SubVV(u, c, ur.s_J2), h = c, _ = o * X.DotVV(m, m) + r * X.DotVV(l, l) + a * X.DotVV(h, h);
                    if (0 != _) {
                        for (var _ = 1 / _, d = f - this.m_as[e]; y < d; ) d = (f -= 2 * y) - this.m_as[e];
                        for (;d < -y; ) d = (f += 2 * y) - this.m_as[e];
                        u = -this.m_k3 * _ * d;
                        i.SelfMulAdd(o * u, m), s.SelfMulAdd(r * u, l), n.SelfMulAdd(a * u, h);
                    }
                }
            }
        }
    }, {
        key: "Draw",
        value: function(t) {
            for (var e = new o(.4, .5, .7), i = 0; i < this.m_count - 1; ++i) t.DrawSegment(this.m_ps[i], this.m_ps[i + 1], e);
        }
    } ]);
    var hr = ur;
    function ur() {
        _classCallCheck(this, ur), this.m_count = 0, this.m_ps = [], this.m_p0s = [], this.m_vs = [], 
        this.m_ims = [], this.m_Ls = [], this.m_as = [], this.m_gravity = new X(), this.m_damping = 0, 
        this.m_k2 = 1, this.m_k3 = .1;
    }
    hr.s_d = new X(), hr.s_d1 = new X(), hr.s_d2 = new X(), hr.s_Jd1 = new X(), hr.s_Jd2 = new X(), 
    hr.s_J1 = new X(), hr.s_J2 = new X(), N.b2Assert = function(t) {
        if (!t) {
            for (var e = arguments.length, i = Array(1 < e ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
            throw new (Function.prototype.bind.apply(Error, [ null ].concat(i)))();
        }
    }, N.b2Maybe = f, N.b2_maxFloat = T, N.b2_epsilon = I, N.b2_epsilon_sq = C, N.b2_pi = y, 
    N.b2_maxManifoldPoints = 2, N.b2_maxPolygonVertices = 8, N.b2_aabbExtension = .1, 
    N.b2_aabbMultiplier = 2, N.b2_linearSlop = G, N.b2_angularSlop = k, N.b2_polygonRadius = B, 
    N.b2_maxSubSteps = 8, N.b2_maxTOIContacts = 32, N.b2_velocityThreshold = 1, N.b2_maxLinearCorrection = O, 
    N.b2_maxAngularCorrection = S, N.b2_maxTranslation = 2, N.b2_maxTranslationSquared = 4, 
    N.b2_maxRotation = E, N.b2_maxRotationSquared = j, N.b2_baumgarte = .2, N.b2_toiBaumgarte = .75, 
    N.b2_invalidParticleIndex = J, N.b2_maxParticleIndex = 2147483647, N.b2_particleStride = .75, 
    N.b2_minParticleWeight = 1, N.b2_maxParticlePressure = .25, N.b2_maxParticleForce = .5, 
    N.b2_maxTriadDistance = 2, N.b2_maxTriadDistanceSquared = 4, N.b2_minParticleSystemBufferCapacity = 256, 
    N.b2_barrierCollisionTime = 2.5, N.b2_timeToSleep = .5, N.b2_linearSleepTolerance = .01, 
    N.b2_angularSleepTolerance = b, N.b2Alloc = function(t) {
        return null;
    }, N.b2Free = function(t) {}, N.b2Log = function(t) {}, N.b2Version = A, N.b2_version = Z, 
    N.b2_branch = "master", N.b2_commit = "fbf51801d80fc389d43dc46524520e89043b6faf", 
    N.b2ParseInt = function(t) {
        return parseInt(t, 10);
    }, N.b2ParseUInt = function(t) {
        return Math.abs(parseInt(t, 10));
    }, N.b2MakeArray = W, N.b2MakeNullArray = function(t) {
        for (var e = [], i = 0; i < t; ++i) e.push(null);
        return e;
    }, N.b2MakeNumberArray = H, N.b2_pi_over_180 = Q, N.b2_180_over_pi = Y, N.b2_two_pi = K, 
    N.b2Abs = R, N.b2Min = L, N.b2Max = D, N.b2Clamp = M, N.b2Swap = function(t, e) {
        var i = t[0];
        t[0] = e[0], e[0] = i;
    }, N.b2IsValid = $, N.b2Sq = tt, N.b2InvSqrt = et, N.b2Sqrt = it, N.b2Pow = st, 
    N.b2DegToRad = function(t) {
        return t * Q;
    }, N.b2RadToDeg = function(t) {
        return t * Y;
    }, N.b2Cos = nt, N.b2Sin = ot, N.b2Acos = rt, N.b2Asin = at, N.b2Atan2 = lt, N.b2NextPowerOfTwo = function(t) {
        return (t = (t = (t = (t = (t |= t >> 1 & 2147483647) | t >> 2 & 1073741823) | t >> 4 & 268435455) | t >> 8 & 16777215) | t >> 16 & 65535) + 1;
    }, N.b2IsPowerOfTwo = function(t) {
        return 0 < t && 0 == (t & t - 1);
    }, N.b2Random = function() {
        return 2 * Math.random() - 1;
    }, N.b2RandomRange = function(t, e) {
        return (e - t) * Math.random() + t;
    }, N.b2Vec2 = X, N.b2Vec2_zero = mt, N.b2Vec3 = l, N.b2Mat22 = d, N.b2Mat33 = ct, 
    N.b2Rot = P, N.b2Transform = F, N.b2Sweep = pt, N.b2Color = o, N.b2Draw = t, N.b2Timer = Bt, 
    N.b2Counter = bt, N.b2GrowableStack = gt, N.b2BlockAllocator = wt, N.b2StackAllocator = kt, 
    N.b2ContactFeature = re, N.b2ContactID = le, N.b2ManifoldPoint = me, N.b2Manifold = ue, 
    N.b2WorldManifold = e, N.b2GetPointStates = function(t, e, i, s) {
        for (var n = void 0, n = 0; n < i.pointCount; ++n) {
            var o = i.points[n].id.key;
            t[n] = N.b2PointState.b2_removeState;
            for (var r = 0, a = s.pointCount; r < a; ++r) if (s.points[r].id.key === o) {
                t[n] = N.b2PointState.b2_persistState;
                break;
            }
        }
        for (;n < 2; ++n) t[n] = N.b2PointState.b2_nullState;
        for (n = 0; n < s.pointCount; ++n) {
            var l = s.points[n].id.key;
            e[n] = N.b2PointState.b2_addState;
            for (var _ = 0, m = i.pointCount; _ < m; ++_) if (i.points[_].id.key === l) {
                e[n] = N.b2PointState.b2_persistState;
                break;
            }
        }
        for (;n < 2; ++n) e[n] = N.b2PointState.b2_nullState;
    }, N.b2ClipVertex = de, N.b2RayCastInput = pe, N.b2RayCastOutput = xe, N.b2AABB = _, 
    N.b2TestOverlapAABB = Se, N.b2ClipSegmentToLine = be, N.b2TestOverlapShape = we, 
    N.b2DistanceProxy = Mt, N.b2SimplexCache = It, N.b2DistanceInput = Dt, N.b2DistanceOutput = Tt, 
    N.b2ShapeCastInput = Lt, N.b2ShapeCastOutput = qt, N.b2_gjk_reset = function() {
        N.b2_gjkCalls = 0, N.b2_gjkIters = 0, N.b2_gjkMaxIters = 0;
    }, N.b2SimplexVertex = zt, N.b2Simplex = Et, N.b2Distance = Yt, N.b2ShapeCast = function(t, e) {
        t.iterations = 0, t.lambda = 1, t.normal.SetZero(), t.point.SetZero();
        for (var i = e.proxyA, s = e.proxyB, n = D(i.m_radius, B) + D(s.m_radius, B), o = e.transformA, r = e.transformB, a = e.translationB, l = Kt.Set(0, 0), _ = 0, m = $t, h = (m.m_count = 0, 
        m.m_vertices), u = i.GetSupport(P.MulTRV(o.q, X.NegV(a, X.s_t1), X.s_t0)), c = F.MulXV(o, i.GetVertex(u), te), f = s.GetSupport(P.MulTRV(r.q, a, X.s_t0)), d = F.MulXV(r, s.GetVertex(f), ee), y = X.SubVV(c, d, ie), p = D(B, n - B), v = 0; v < 20 && .004 < R(y.Length() - p); ) {
            t.iterations += 1;
            var u = i.GetSupport(P.MulTRV(o.q, X.NegV(y, X.s_t1), X.s_t0)), c = F.MulXV(o, i.GetVertex(u), te), f = s.GetSupport(P.MulTRV(r.q, y, X.s_t0)), d = F.MulXV(r, s.GetVertex(f), ee), x = X.SubVV(c, d, se), x = (y.Normalize(), 
            X.DotVV(y, x)), C = X.DotVV(y, a);
            if (_ * C < x - p) {
                if (C <= 0) return !1;
                if (1 < (_ = (x - p) / C)) return !1;
                l.Copy(y).SelfNeg(), m.m_count = 0;
            }
            x = h[m.m_count];
            switch (x.indexA = f, x.wA.Copy(d).SelfMulAdd(_, a), x.indexB = u, x.wB.Copy(c), 
            x.w.Copy(x.wB).SelfSub(x.wA), x.a = 1, m.m_count += 1, m.m_count) {
              case 1:
                break;

              case 2:
                m.Solve2();
                break;

              case 3:
                m.Solve3();
            }
            if (3 === m.m_count) return !1;
            m.GetClosestPoint(y), ++v;
        }
        return m.GetWitnessPoints(ne, oe), 0 < y.LengthSquared() && (l.Copy(y).SelfNeg(), 
        l.Normalize()), t.normal.Copy(l), t.lambda = _, t.iterations = v, !0;
    }, N.b2Pair = Ie, N.b2BroadPhase = Ge, N.b2PairLessThan = Fe, N.b2TreeNode = ke, 
    N.b2DynamicTree = Pe, N.b2_toi_reset = function() {
        N.b2_toiTime = 0, N.b2_toiMaxTime = 0, N.b2_toiCalls = 0, N.b2_toiIters = 0, N.b2_toiMaxIters = 0, 
        N.b2_toiRootIters = 0, N.b2_toiMaxRootIters = 0;
    }, N.b2TOIInput = Te, N.b2TOIOutput = Re, N.b2SeparationFunction = i, N.b2TimeOfImpact = ti, 
    N.b2CollideCircles = si, N.b2CollidePolygonAndCircle = ai, N.b2CollidePolygons = Pi, 
    N.b2CollideEdgeAndCircle = zi, N.b2CollideEdgeAndPolygon = Xi, N.b2MassData = Ui, 
    N.b2Shape = Zi, N.b2CircleShape = s, N.b2PolygonShape = n, N.b2EdgeShape = Qi, N.b2ChainShape = Yi, 
    N.b2Filter = $i, N.b2FixtureDef = es, N.b2FixtureProxy = is, N.b2Fixture = ss, N.b2BodyDef = os, 
    N.b2Body = rs, N.b2World = x, N.b2DestructionListener = Mn, N.b2ContactFilter = In, 
    N.b2ContactImpulse = Dn, N.b2ContactListener = Fn, N.b2QueryCallback = Rn, N.b2RayCastCallback = qn, 
    N.b2Island = ro, N.b2Profile = jn, N.b2TimeStep = Nn, N.b2Position = Un, N.b2Velocity = Wn, 
    N.b2SolverData = Qn, N.b2ContactManager = On, N.b2MixFriction = an, N.b2MixRestitution = ln, 
    N.b2ContactEdge = _n, N.b2Contact = mn, N.b2ContactRegister = Vn, N.b2ContactFactory = wn, 
    N.g_blockSolve = !1, N.b2VelocityConstraintPoint = Yn, N.b2ContactVelocityConstraint = $n, 
    N.b2ContactPositionConstraint = eo, N.b2ContactSolverDef = so, N.b2PositionSolverManifold = no, 
    N.b2ContactSolver = a, N.b2CircleContact = un, N.b2PolygonContact = fn, N.b2PolygonAndCircleContact = yn, 
    N.b2EdgeAndCircleContact = vn, N.b2EdgeAndPolygonContact = Cn, N.b2ChainAndCircleContact = Sn, 
    N.b2ChainAndPolygonContact = An, N.b2Jacobian = r, N.b2JointEdge = _s, N.b2JointDef = ms, 
    N.b2Joint = hs, N.b2AreaJointDef = ps, N.b2AreaJoint = xs, N.b2DistanceJointDef = cs, 
    N.b2DistanceJoint = ds, N.b2FrictionJointDef = Bs, N.b2FrictionJoint = bs, N.b2GearJointDef = gs, 
    N.b2GearJoint = ws, N.b2MotorJointDef = Ms, N.b2MotorJoint = Is, N.b2MouseJointDef = Ds, 
    N.b2MouseJoint = Ts, N.b2PrismaticJointDef = Ls, N.b2PrismaticJoint = zs, N.b2_minPulleyLength = 2, 
    N.b2PulleyJointDef = Os, N.b2PulleyJoint = js, N.b2RevoluteJointDef = Ns, N.b2RevoluteJoint = Us, 
    N.b2RopeJointDef = Ws, N.b2RopeJoint = Qs, N.b2WeldJointDef = Ks, N.b2WeldJoint = tn, 
    N.b2WheelJointDef = sn, N.b2WheelJoint = on, N.b2ControllerEdge = Yo, N.b2Controller = Ko, 
    N.b2BuoyancyController = tr, N.b2ConstantAccelController = ir, N.b2ConstantForceController = nr, 
    N.b2GravityController = rr, N.b2TensorDampingController = lr, N.b2ParticleDef = lo, 
    N.b2CalculateParticleIterations = _o, N.b2ParticleHandle = mo, N.b2ParticleGroupDef = uo, 
    N.b2ParticleGroup = co, N.b2GrowableBuffer = Mo, N.b2FixtureParticleQueryCallback = h, 
    N.b2ParticleContact = Go, N.b2ParticleBodyContact = Fo, N.b2ParticlePair = To, N.b2ParticleTriad = Ro, 
    N.b2ParticleSystemDef = Lo, N.b2ParticleSystem = u, N.b2RopeDef = mr, N.b2Rope = hr, 
    Object.defineProperty(N, "__esModule", {
        value: !0
    });
});