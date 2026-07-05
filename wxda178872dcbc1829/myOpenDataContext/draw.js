function roundRect(t, e, a, n, r, o, i, l) {
    var s = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : 15;
    r -= a / 2, o -= n / 2, t.beginPath(), t.moveTo(r + i, o), 1 & s ? t.arcTo(r + a, o, r + a, o + n, i) : t.arcTo(r + a, o, r + a, o + n, 0), 
    2 & s ? t.arcTo(r + a, o + n, r, o + n, i) : t.arcTo(r + a, o + n, r, o + n, 0), 
    4 & s ? t.arcTo(r, o + n, r, o, i) : t.arcTo(r, o + n, r, o, 0), 8 & s ? t.arcTo(r, o, r + a, o, i) : t.arcTo(r, o, r + a, o, 0), 
    e && (t.fillStyle = e, t.fill()), l && (t.strokeStyle = l, t.stroke());
}

function createImageInCanvas(t, e, a, n, r, o, i, l) {
    var s = 8 < arguments.length && void 0 !== arguments[8] && arguments[8], c = 9 < arguments.length ? arguments[9] : void 0;
    a && (1 == a.status || a.img.complete && a.status < 2) ? (e.save(), s ? (e.beginPath(), 
    e.arc(n, r, o / 2, 0, 2 * Math.PI), e.strokeStyle = "#333333", e.stroke()) : roundRect(e, "#D8D8D8", o, i, n, r, 4 * t, "rgba(241,241,241,.2)"), 
    e.clip(), e.drawImage(a.img, n - o / 2, r - i / 2, o, i), e.restore(), c && c()) : null == a || 2 == a.status ? (e.save(), 
    s ? (e.fillStyle = "#D8D8D8", e.beginPath(), e.arc(n, r, o / 2, 0, 2 * Math.PI), 
    e.fill()) : roundRect(e, "#D8D8D8", o, i, n, r, 4 * t, "rgba(241,241,241,.2)"), 
    e.restore(), c ? c() : l && l()) : (a.img.onload = function() {
        a.status = 1, createImageInCanvas(t, e, a, n, r, o, i, null, s, c), l && l();
    }, a.img.onerror = function() {
        a.status = 2, createImageInCanvas(t, e, null, n, r, o, i, null, s, c), l && l();
    });
}

function drawImgToCanvas(t, e, a, n, r, o) {
    var i = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : none, l = wx.createImage();
    l.src = e, l.onload = function() {
        t.drawImage(l, a - r / 2, n - o / 2, r, o), i();
    };
}

function limitTextWidth(t, e, a) {
    return e < t.measureText(a).width ? limitTextWidth(t, e, a.substr(0, a.length - 1)) : a;
}

function drawTextToCanvas(t, e, a, n) {
    var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 999;
    t.fillStyle = r.fillStyle || "#ffffff", t.textBaseline = r.textBaseline || "middle", 
    t.textAlign = r.textAlign || "center", t.font = r.font || "28px Arial", t.measureText(e).width > o && (e = limitTextWidth(t, o, e + "") + "..."), 
    t.fillText(e, a, n);
}

function createCanvas(t, e) {
    var a = wx.createCanvas(), n = a.getContext("2d");
    return a.width = t, a.height = e, {
        can: a,
        ctx: n
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createCanvas = createCanvas, exports.createImageInCanvas = createImageInCanvas, 
exports.drawImgToCanvas = drawImgToCanvas, exports.drawTextToCanvas = drawTextToCanvas, 
exports.limitTextWidth = limitTextWidth, exports.roundRect = roundRect;