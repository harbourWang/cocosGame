function backtrace(t) {
    for (var e = [ [ t.x, t.y ] ]; t.parent; ) t = t.parent, e.push([ t.x, t.y ]);
    return e.reverse();
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.compressPath = exports.smoothenPath = exports.expandPath = exports.interpolate = exports.pathLength = exports.biBacktrace = exports.backtrace = void 0;

var _backtrace = backtrace;

function biBacktrace(t, e) {
    var a = backtrace(t), r = backtrace(e);
    return a.concat(r.reverse());
}

exports.backtrace = _backtrace;

var _biBacktrace = biBacktrace;

function pathLength(t) {
    var e, a, r, o, n, h = 0;
    for (e = 1; e < t.length; ++e) a = t[e - 1], r = t[e], o = a[0] - r[0], n = a[1] - r[1], 
    h += Math.sqrt(o * o + n * n);
    return h;
}

exports.biBacktrace = _biBacktrace;

var _pathLength = pathLength;

function interpolate(t, e, a, r) {
    var o, n, h, s, p, c, i = Math.abs, u = [];
    for (o = t < a ? 1 : -1, n = e < r ? 1 : -1, p = (h = i(a - t)) - (s = i(r - e)); u.push([ t, e ]), 
    t !== a || e !== r; ) -s < (c = 2 * p) && (p -= s, t += o), c < h && (p += h, e += n);
    return u;
}

exports.pathLength = _pathLength;

var _interpolate = interpolate;

function expandPath(t) {
    var e, a, r, o, n, h, s = [], p = t.length;
    if (p < 2) return s;
    for (n = 0; n < p - 1; ++n) for (e = t[n], a = t[n + 1], o = (r = interpolate(e[0], e[1], a[0], a[1])).length, 
    h = 0; h < o - 1; ++h) s.push(r[h]);
    return s.push(t[p - 1]), s;
}

exports.interpolate = _interpolate;

var _expandPath = expandPath;

function smoothenPath(t, e) {
    var a, r, o, n, h, s, p, c, i, u = e.length, l = e[0][0], x = e[0][1], f = e[u - 1][0], P = e[u - 1][1];
    for (o = [ [ a = l, r = x ] ], n = 2; n < u; ++n) {
        for (p = interpolate(a, r, (s = e[n])[0], s[1]), i = !1, h = 1; h < p.length; ++h) if (c = p[h], 
        !t.isWalkableAt(c[0], c[1])) {
            i = !0;
            break;
        }
        i && (lastValidCoord = e[n - 1], o.push(lastValidCoord), a = lastValidCoord[0], 
        r = lastValidCoord[1]);
    }
    return o.push([ f, P ]), o;
}

exports.expandPath = _expandPath;

var _smoothenPath = smoothenPath;

function compressPath(t) {
    if (t.length < 3) return t;
    var e, a, r, o, n, h, s = [], p = t[0][0], c = t[0][1], i = t[1][0], u = t[1][1], l = i - p, x = u - c;
    for (l /= n = Math.sqrt(l * l + x * x), x /= n, s.push([ p, c ]), h = 2; h < t.length; h++) e = i, 
    a = u, r = l, o = x, l = (i = t[h][0]) - e, x = (u = t[h][1]) - a, x /= n = Math.sqrt(l * l + x * x), 
    (l /= n) === r && x === o || s.push([ e, a ]);
    return s.push([ i, u ]), s;
}

exports.smoothenPath = _smoothenPath;

var _compressPath = compressPath;

exports.compressPath = _compressPath;