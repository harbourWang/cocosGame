function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var cc = {};

function Vec2(t, e) {
    t && "object" === _typeof(t) && (e = t.y, t = t.x), this.x = t || 0, this.y = e || 0;
}

var proto = Vec2.prototype;

function At(t, e) {
    var n = e.length;
    return e[t < 0 ? n - -t % n : t % n];
}

function Copy(t, e, n) {
    for (var r = []; e < t; ) e += n.length;
    for (;t <= e; ++t) r.push(At(t, n));
    return r;
}

function ConvexPartition(t) {
    ForceCounterClockWise(t);
    for (var e, n, r, o, i = [], u = cc.v2(), f = cc.v2(), A = 0, c = 0, a = 0; a < t.length; ++a) if (Reflex(a, t)) {
        for (var y = n = 1e8, s = 0; s < t.length; ++s) Left(At(a - 1, t), At(a, t), At(s, t)) && RightOn(At(a - 1, t), At(a, t), At(s - 1, t)) && (r = LineIntersect(At(a - 1, t), At(a, t), At(s, t), At(s - 1, t)), 
        Right(At(a + 1, t), At(a, t), r) && (e = SquareDist(At(a, t), r)) < y && (y = e, 
        u = r, A = s)), Left(At(a + 1, t), At(a, t), At(s + 1, t)) && RightOn(At(a + 1, t), At(a, t), At(s, t)) && (r = LineIntersect(At(a + 1, t), At(a, t), At(s, t), At(s + 1, t)), 
        Left(At(a - 1, t), At(a, t), r) && (e = SquareDist(At(a, t), r)) < n && (n = e, 
        c = s, f = r));
        if (A == (c + 1) % t.length) {
            var l, h = u.add(f).div(2);
            (l = Copy(a, c, t)).push(h), (o = Copy(A, a, t)).push(h);
        } else {
            for (var x = 0, v = A; c < A; ) c += t.length;
            for (var p, s = A; s <= c; ++s) CanSee(a, s, t) && (p = 1 / (SquareDist(At(a, t), At(s, t)) + 1), 
            Reflex(s, t) ? RightOn(At(s - 1, t), At(s, t), At(a, t)) && LeftOn(At(s + 1, t), At(s, t), At(a, t)) ? p += 3 : p += 2 : p += 1, 
            x < p && (v = s, x = p));
            l = Copy(a, v, t), o = Copy(v, a, t);
        }
        return i = (i = i.concat(ConvexPartition(l))).concat(ConvexPartition(o));
    }
    i.push(t);
    for (a = i.length - 1; 0 <= a; a--) 0 == i[a].length && i.splice(a, 0);
    return i;
}

function CanSee(t, e, n) {
    if (Reflex(t, n)) {
        if (LeftOn(At(t, n), At(t - 1, n), At(e, n)) && RightOn(At(t, n), At(t + 1, n), At(e, n))) return !1;
    } else if (RightOn(At(t, n), At(t + 1, n), At(e, n)) || LeftOn(At(t, n), At(t - 1, n), At(e, n))) return !1;
    if (Reflex(e, n)) {
        if (LeftOn(At(e, n), At(e - 1, n), At(t, n)) && RightOn(At(e, n), At(e + 1, n), At(t, n))) return !1;
    } else if (RightOn(At(e, n), At(e + 1, n), At(t, n)) || LeftOn(At(e, n), At(e - 1, n), At(t, n))) return !1;
    for (var r = 0; r < n.length; ++r) if ((r + 1) % n.length != t && r != t && (r + 1) % n.length != e && r != e) {
        var o = cc.v2();
        if (LineIntersect2(At(t, n), At(e, n), At(r, n), At(r + 1, n), o)) return !1;
    }
    return !0;
}

function Reflex(t, e) {
    return Right(t, e);
}

function Right(t, e, n) {
    var r, o;
    return void 0 === n && (t = At((r = t) - 1, o = e), e = At(r, o), n = At(r + 1, o)), 
    Area(t, e, n) < 0;
}

function Left(t, e, n) {
    return 0 < Area(t, e, n);
}

function LeftOn(t, e, n) {
    return 0 <= Area(t, e, n);
}

function RightOn(t, e, n) {
    return Area(t, e, n) <= 0;
}

function SquareDist(t, e) {
    var n = e.x - t.x, e = e.y - t.y;
    return n * n + e * e;
}

function ForceCounterClockWise(t) {
    IsCounterClockWise(t) || t.reverse();
}

function IsCounterClockWise(t) {
    return t.length < 3 || 0 < GetSignedArea(t);
}

function GetSignedArea(t) {
    for (var e = 0, n = 0; n < t.length; n++) var r = (n + 1) % t.length, e = (e += t[n].x * t[r].y) - t[n].y * t[r].x;
    return e /= 2;
}

function LineIntersect(t, e, n, r) {
    var o = cc.v2(), i = e.y - t.y, e = t.x - e.x, t = i * t.x + e * t.y, u = r.y - n.y, r = n.x - r.x, n = u * n.x + r * n.y, f = i * r - u * e;
    return FloatEquals(f, 0) || (o.x = (r * t - e * n) / f, o.y = (i * n - u * t) / f), 
    o;
}

function LineIntersect2(t, e, n, r, o) {
    if (t == n || t == r || e == n || e == r) return !1;
    var i = t.x, t = t.y, u = e.x, e = e.y, f = n.x, n = n.y, A = r.x, r = r.y;
    if (Math.max(i, u) < Math.min(f, A) || Math.max(f, A) < Math.min(i, u)) return !1;
    if (Math.max(t, e) < Math.min(n, r) || Math.max(n, r) < Math.min(t, e)) return !1;
    var c = (A - f) * (t - n) - (r - n) * (i - f), a = (u - i) * (t - n) - (e - t) * (i - f), r = (r - n) * (u - i) - (A - f) * (e - t);
    return !(Math.abs(r) < 1e-6) && (a /= r, 0 < (c /= r) && c < 1 && 0 < a && a < 1 && (o.x = i + c * (u - i), 
    o.y = t + c * (e - t), !0));
}

function FloatEquals(t, e) {
    return Math.abs(t - e) <= 1e-6;
}

function Area(t, e, n) {
    return t.x * (e.y - n.y) + e.x * (n.y - t.y) + n.x * (t.y - e.y);
}

proto.add = function(t, e) {
    return (e = e || new Vec2()).x = this.x + t.x, e.y = this.y + t.y, e;
}, proto.div = function(t, e) {
    return (e = e || new Vec2()).x = this.x / t, e.y = this.y / t, e;
}, cc.v2 = function(t, e) {
    return new Vec2(t, e);
};

var _default = {
    ConvexPartition: ConvexPartition,
    ForceCounterClockWise: ForceCounterClockWise,
    IsCounterClockWise: IsCounterClockWise
};

exports.default = _default;