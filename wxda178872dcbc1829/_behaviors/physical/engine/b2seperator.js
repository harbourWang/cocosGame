function _default(k) {
    var e = {};
    function E(e, r, n, t, u, y) {
        return (e <= n + .1 && u - .1 <= e || n - .1 <= e && e <= u + .1) && (r <= t + .1 && y - .1 <= r || t - .1 <= r && r <= y + .1) && function(e, r, n, t, u, y) {
            if (.1 < u - n || .1 < n - u) return (r < (y = (y - t) / (u - n) * (e - n) + t) ? y - r : r - y) < .1;
            return e - n < .1 || n - e < .1;
        }(e, r, n, t, u, y);
    }
    function M(e, r, n, t) {
        return (e <= n ? n - e : e - n) < .1 && (r <= t ? t - r : r - t) < .1;
    }
    function U(e, r, n, t, u, y) {
        return e * t + n * y + u * r - r * n - t * u - y * e;
    }
    function L() {
        throw new Error("A problem has occurred. Use the Validate() method to see where the problem is.");
    }
    e.Separate = function(e, r, n, t, u) {
        u = u || 32;
        for (var y, o, f, x, a = n.length, h = new Array(), i = 0; i < a; i++) h.push(new k.b2Vec2(n[i].x, n[i].y));
        for (a = (f = function(e) {
            var r, n, t, u, y, o, f, x, a, h, i, s, p, c, l, b, w, A, d, v, V, g, _, m = [], S = [];
            S.push(e);
            for (;S.length; ) {
                for (t = (r = S[0]).length, _ = !0, n = 0; n < t; n++) if (a = (x = n) < t - 1 ? n + 1 : n + 1 - t, 
                s = n < t - 2 ? n + 2 : n + 2 - t, h = r[x], i = r[a], s = r[s], U(h.x, h.y, i.x, i.y, s.x, s.y) < 0) {
                    for (_ = !1, f = Number.MAX_VALUE, u = 0; u < t; u++) u != x && u != a && (c = (p = u) < t - 1 ? u + 1 : 0, 
                    l = r[p], b = r[c], V = function(e, r, n, t, u, y, o, f) {
                        var x = n - e, a = t - r, h = o - u, i = f - y, i = e + (h = (h * (y - r) - i * (u - e)) / (a * h - x * i)) * x, x = r + h * a, h = E(n, t, e, r, i, x), a = E(i, x, u, y, o, f);
                        if (h && a) return new k.b2Vec2(i, x);
                        return null;
                    }(h.x, h.y, i.x, i.y, l.x, l.y, b.x, b.y)) && (y = i.x - V.x, o = i.y - V.y, (y = y * y + o * o) < f) && (A = p, 
                    w = c, g = V, f = y);
                    for (f == Number.MAX_VALUE && L(), d = new Array(), v = new Array(), c = w, l = r[p = A], 
                    b = r[c], M(g.x, g.y, b.x, b.y) || d.push(g), M(g.x, g.y, l.x, l.y) || v.push(g), 
                    A = -1, w = x; ;) {
                        if (w == c) {
                            (A < 0 || t <= A) && L(), E(b.x, b.y, r[A].x, r[A].y, h.x, h.y) || d.push(r[w]);
                            break;
                        }
                        d.push(r[w]), (A = w) - 1 < 0 ? w = t - 1 : w--;
                    }
                    for (d = d.reverse(), A = -1, w = a; ;) {
                        if (w == p) {
                            (A < 0 || t <= A) && L(), w != p || E(l.x, l.y, r[A].x, r[A].y, i.x, i.y) || v.push(r[w]);
                            break;
                        }
                        v.push(r[w]), t - 1 < (A = w) + 1 ? w = 0 : w++;
                    }
                    S.push(d, v), S.shift();
                    break;
                }
                _ && m.push(S.shift());
            }
            return m;
        }(h)).length, i = 0; i < a; i++) {
            for (n = new Array(), o = (h = f[i]).length, y = 0; y < o; y++) n.push(new k.b2Vec2(h[y].x / t * u.x * 2, h[y].y / t * u.y * 2));
            (x = new k.b2PolygonShape()).SetAsArray(n), r.shape = x, e.CreateFixture(r);
        }
    }, e.Validate = function(e) {
        for (var r, n, t, u, y, o = e.length, f = 0, x = !1, a = 0; a < o; a++) {
            for (t = a < o - 1 ? a + 1 : 0, u = 0 < a ? a - 1 : o - 1, y = !1, r = 0; r < o; r++) r != a && r != t && (y || 0 < U(e[a].x, e[a].y, e[t].x, e[t].y, e[r].x, e[r].y) && (y = !0), 
            r != u) && function(e, r, n, t, u, y, o, f) {
                var x = n - e, a = t - r, h = o - u, i = f - y, i = e + (h = (h * (y - r) - i * (u - e)) / (a * h - x * i)) * x, x = r + h * a, h = E(i, x, e, r, n, t), a = E(i, x, u, y, o, f);
                if (h && a) return new k.b2Vec2(i, x);
                return;
            }(e[a].x, e[a].y, e[t].x, e[t].y, e[r].x, e[r].y, e[n = r < o - 1 ? r + 1 : 0].x, e[n].y) && (f = 1);
            y || (x = !0);
        }
        return f = x ? 1 == f ? 3 : 2 : f;
    }, k.b2Separator = e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;