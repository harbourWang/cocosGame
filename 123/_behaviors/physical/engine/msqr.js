function MSQR(t, e) {
    var x;
    if (e = e || {}, t instanceof HTMLCanvasElement) x = t.getContext("2d"); else {
        if (!(t instanceof HTMLImageElement || t instanceof HTMLVideoElement)) throw "Invalid source.";
        x = g(t);
    }
    var a, n, r, i, t = x.canvas.width, o = x.canvas.height, y = 0 | (e.x || 0), m = 0 | (e.y || 0), M = 0 | (e.width || t), p = 0 | (e.height || o), h = [], w = 3, l = Math.max(1, e.bleed || 5), s = Math.max(1, e.maxShapes || 1), b = Math.max(0, Math.min(254, e.alpha || 0)), C = e.padding || 0, I = Math.max(0, e.tolerance || 0), P = !!e.align, S = e.alignWeight || .95, u = !!e.path2D;
    if (y < 0 || m < 0 || t <= y || o <= m || M < 1 || p < 1 || t < y + M || o < m + p) return [];
    if (1 < s || C) {
        if (e = g(x.canvas), x.save(), x.setTransform(1, 0, 0, 1, 0, 0), x.fillStyle = x.strokeStyle = "#000", 
        x.globalAlpha = 1, x.shadowColor = "rgba(0,0,0,0)", C) {
            i = g(x.canvas), t = C < 0 ? 4 : 5 < C ? 16 : 8, x.globalCompositeOperation = C < 0 ? "destination-in" : "source-over";
            for (var C = Math.min(10, Math.abs(C)), c = 0, f = 2 * Math.PI / t; c < 6.28; c += f) x.drawImage(i.canvas, C * Math.cos(c), C * Math.sin(c));
        }
        x.globalCompositeOperation = "destination-out", x.lineWidth = l, x.miterLimit = 1;
        do {
            if ((a = d()).length) {
                for (h.push(u ? v(a) : a), x.beginPath(), n = a.length - 1; r = a[n--]; ) x.lineTo(r.x, r.y);
                x.closePath(), x.fill(), x.stroke();
            }
        } while (a.length && --s);
        return x.globalCompositeOperation = "source-over", x.clearRect(0, 0, x.canvas.width, x.canvas.height), 
        x.drawImage(e.canvas, 0, 0), x.restore(), h;
    }
    return a = d(), h.push(u ? v(a) : a), h;
    function d() {
        var t, e, a, n, r, i, o, h = [], l = -1, s = 9, u = [ 9, 0, 3, 3, 2, 0, 9, 3, 1, 9, 1, 1, 2, 0, 2, 9 ], c = new Date(), f = new Uint32Array(x.getImageData(y, m, M, p).data.buffer);
        for (console.log("time", new Date() - c), t = f.length, e = w; e < t; e++) if (f[e] >>> 24 > b) {
            l = w = e;
            break;
        }
        if (0 <= l) {
            for (a = r = l % M | 0, n = i = l / M | 0; 0 === (o = function(t, e) {
                var a = 0;
                d(t - 1, e - 1) && (a |= 1);
                d(t, e - 1) && (a |= 2);
                d(t - 1, e) && (a |= 4);
                d(t, e) && (a |= 8);
                return 6 === a ? 0 === s ? 2 : 3 : 9 === a ? 3 === s ? 0 : 1 : u[a];
            }(a, n)) ? n-- : 1 === o ? n++ : 2 === o ? a-- : 3 === o && a++, o !== s && (h.push({
                x: a + y,
                y: n + m
            }), s = o), a !== r || n !== i; ) ;
            I && (h = function t(e, a) {
                var n = e.length - 1;
                if (n < 2) return e;
                var r, i, o, h = e[0], l = e[n], s = a * a, u = -1, c = 0;
                for (r = 1; r < n; r++) i = g(e[r], h, l), c < i && (c = i, u = r);
                return s < c ? (s = e.slice(0, u + 1), o = e.slice(u), s = t(s, a), o = t(o, a), 
                s.slice(0, s.length - 1).concat(o)) : [ h, l ];
            }(h, I)), P && !C && (h = function(t, e) {
                var a, n = [ 1, -1, -1, 1 ], r = [ 1, 1, -1, -1 ], i = 0;
                for (;a = t[i++]; ) {
                    a.x = Math.round(a.x), a.y = Math.round(a.y);
                    for (var o, h, l, s, u = 0; u < 4; u++) l = n[u], s = r[u], o = a.x + (l << 1), 
                    h = a.y + (s << 1), y < o && m < h && o < M - 1 && h < p - 1 && (d(o, h) || d(o -= l, h -= s) && (a.x += l * e, 
                    a.y += s * e));
                }
                return t;
            }(h, S));
        }
        function d(t, e) {
            return 0 <= t && 0 <= e && t < M && e < p && f[e * M + t] >>> 24 > b;
        }
        function g(t, e, a) {
            var n = v(e, a);
            return n ? v(t, (t = ((t.x - e.x) * (a.x - e.x) + (t.y - e.y) * (a.y - e.y)) / n) < 0 ? e : 1 < t ? a : {
                x: e.x + t * (a.x - e.x),
                y: e.y + t * (a.y - e.y)
            }) : 0;
        }
        function v(t, e) {
            var a = t.x - e.x, t = t.y - e.y;
            return a * a + t * t;
        }
        return h;
    }
    function g(t) {
        var e = document.createElement("canvas");
        return e.width = t.naturalWidth || t.videoWidth || t.width, e.height = t.naturalHeight || t.videoHeight || t.height, 
        (e = e.getContext("2d")).drawImage(t, 0, 0), e;
    }
    function v(t) {
        for (var e, a = new Path2D(), n = 0; e = t[n++]; ) a.lineTo(e.x, e.y);
        return a.closePath(), a;
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, MSQR.getBounds = function(t) {
    for (var e = 9999999, a = 9999999, n = -9999999, r = -9999999, i = t.length, o = 0; o < i; o++) t[o].x > n && (n = t[o].x), 
    t[o].x < e && (e = t[o].x), t[o].y > r && (r = t[o].y), t[o].y < a && (a = t[o].y);
    return {
        x: 0 | e,
        y: 0 | a,
        width: Math.ceil(n - e),
        height: Math.ceil(r - a)
    };
};

var _default = MSQR;

exports.default = _default;