function MSQR(e, t) {
    var x;
    if (t = t || {}, e instanceof HTMLCanvasElement) x = e.getContext("2d"); else {
        if (!(e instanceof HTMLImageElement || e instanceof HTMLVideoElement)) throw "Invalid source.";
        x = g(e);
    }
    var a, n, r, i, e = x.canvas.width, o = x.canvas.height, y = 0 | (t.x || 0), m = 0 | (t.y || 0), M = 0 | (t.width || e), p = 0 | (t.height || o), h = [], w = 3, l = Math.max(1, t.bleed || 5), s = Math.max(1, t.maxShapes || 1), b = Math.max(0, Math.min(254, t.alpha || 0)), C = t.padding || 0, I = Math.max(0, t.tolerance || 0), P = !!t.align, S = t.alignWeight || .95, c = !!t.path2D;
    if (y < 0 || m < 0 || e <= y || o <= m || M < 1 || p < 1 || e < y + M || o < m + p) return [];
    if (1 < s || C) {
        if (t = g(x.canvas), x.save(), x.setTransform(1, 0, 0, 1, 0, 0), x.fillStyle = x.strokeStyle = "#000", 
        x.globalAlpha = 1, x.shadowColor = "rgba(0,0,0,0)", C) {
            i = g(x.canvas), e = C < 0 ? 4 : 5 < C ? 16 : 8, x.globalCompositeOperation = C < 0 ? "destination-in" : "source-over";
            for (var C = Math.min(10, Math.abs(C)), u = 0, f = 2 * Math.PI / e; u < 6.28; u += f) x.drawImage(i.canvas, C * Math.cos(u), C * Math.sin(u));
        }
        x.globalCompositeOperation = "destination-out", x.lineWidth = l, x.miterLimit = 1;
        do {
            if ((a = d()).length) {
                for (h.push(c ? v(a) : a), x.beginPath(), n = a.length - 1; r = a[n--]; ) x.lineTo(r.x, r.y);
                x.closePath(), x.fill(), x.stroke();
            }
        } while (a.length && --s);
        x.globalCompositeOperation = "source-over", x.clearRect(0, 0, x.canvas.width, x.canvas.height), 
        x.drawImage(t.canvas, 0, 0), x.restore();
    } else a = d(), h.push(c ? v(a) : a);
    return h;
    function d() {
        var e, t, a, n, r, i, o, h = [], l = -1, s = 9, c = [ 9, 0, 3, 3, 2, 0, 9, 3, 1, 9, 1, 1, 2, 0, 2, 9 ], u = new Date(), f = new Uint32Array(x.getImageData(y, m, M, p).data.buffer);
        for (console.log("time", new Date() - u), e = f.length, t = w; t < e; t++) if (f[t] >>> 24 > b) {
            l = w = t;
            break;
        }
        if (0 <= l) {
            for (a = r = l % M | 0, n = i = l / M | 0; 0 === (o = function(e, t) {
                var a = 0;
                d(e - 1, t - 1) && (a |= 1);
                d(e, t - 1) && (a |= 2);
                d(e - 1, t) && (a |= 4);
                d(e, t) && (a |= 8);
                return 6 === a ? 0 === s ? 2 : 3 : 9 === a ? 3 === s ? 0 : 1 : c[a];
            }(a, n)) ? n-- : 1 === o ? n++ : 2 === o ? a-- : 3 === o && a++, o !== s && (h.push({
                x: a + y,
                y: n + m
            }), s = o), a !== r || n !== i; ) ;
            I && (h = function e(t, a) {
                var n = t.length - 1;
                if (n < 2) return t;
                var r, i, o, h = t[0], l = t[n], s = a * a, c = -1, u = 0;
                for (r = 1; r < n; r++) i = g(t[r], h, l), u < i && (u = i, c = r);
                return s < u ? (s = t.slice(0, c + 1), o = t.slice(c), s = e(s, a), o = e(o, a), 
                s.slice(0, s.length - 1).concat(o)) : [ h, l ];
            }(h, I)), P && !C && (h = function(e, t) {
                var a, n = [ 1, -1, -1, 1 ], r = [ 1, 1, -1, -1 ], i = 0;
                for (;a = e[i++]; ) {
                    a.x = Math.round(a.x), a.y = Math.round(a.y);
                    for (var o, h, l, s, c = 0; c < 4; c++) l = n[c], s = r[c], o = a.x + (l << 1), 
                    h = a.y + (s << 1), y < o && m < h && o < M - 1 && h < p - 1 && (d(o, h) || d(o -= l, h -= s) && (a.x += l * t, 
                    a.y += s * t));
                }
                return e;
            }(h, S));
        }
        function d(e, t) {
            return 0 <= e && 0 <= t && e < M && t < p && f[t * M + e] >>> 24 > b;
        }
        function g(e, t, a) {
            var n = v(t, a);
            return n ? v(e, (e = ((e.x - t.x) * (a.x - t.x) + (e.y - t.y) * (a.y - t.y)) / n) < 0 ? t : 1 < e ? a : {
                x: t.x + e * (a.x - t.x),
                y: t.y + e * (a.y - t.y)
            }) : 0;
        }
        function v(e, t) {
            var a = e.x - t.x, e = e.y - t.y;
            return a * a + e * e;
        }
        return h;
    }
    function g(e) {
        var t = document.createElement("canvas");
        return t.width = e.naturalWidth || e.videoWidth || e.width, t.height = e.naturalHeight || e.videoHeight || e.height, 
        (t = t.getContext("2d")).drawImage(e, 0, 0), t;
    }
    function v(e) {
        for (var t, a = new Path2D(), n = 0; t = e[n++]; ) a.lineTo(t.x, t.y);
        return a.closePath(), a;
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, MSQR.getBounds = function(e) {
    for (var t = 9999999, a = 9999999, n = -9999999, r = -9999999, i = e.length, o = 0; o < i; o++) e[o].x > n && (n = e[o].x), 
    e[o].x < t && (t = e[o].x), e[o].y > r && (r = e[o].y), e[o].y < a && (a = e[o].y);
    return {
        x: 0 | t,
        y: 0 | a,
        width: Math.ceil(n - t),
        height: Math.ceil(r - a)
    };
};

var _default = exports.default = MSQR;