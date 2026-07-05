function velocityDecomposition(e, t) {
    return {
        x: Math.cos(t) * e,
        y: -Math.sin(t) * e
    };
}

function convertDegree2Radian(e) {
    return e * Math.PI / 180;
}

function convertRadian2Degree(e) {
    return 180 * e / Math.PI;
}

function getNumInRange(e, t, n) {
    return e < t ? t : n < e ? n : e;
}

function makePointRotate(e, t, n) {
    var o = t.x - e.x, t = t.y - e.y, r = Math.cos(n), n = Math.sin(n);
    return {
        x: e.x + o * r - t * n,
        y: e.y + t * r + o * n
    };
}

function getDistanceOf2Point(e, t) {
    return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y));
}

function getTriangleArea(e, t, n) {
    var o = getDistanceOf2Point(e, t), t = getDistanceOf2Point(t, n), n = getDistanceOf2Point(n, e), e = (o + t + n) / 2;
    return Math.sqrt(e * (e - o) * (e - t) * (e - n));
}

function getAABBForBody(e) {
    for (var t, n = e.GetFixtureList(); n; n = n.m_next) t ? t.Combine1(n.GetAABB(0)) : t = n.GetAABB(0);
    return t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.convertDegree2Radian = convertDegree2Radian, exports.convertRadian2Degree = convertRadian2Degree, 
exports.getAABBForBody = getAABBForBody, exports.getDistanceOf2Point = getDistanceOf2Point, 
exports.getNumInRange = getNumInRange, exports.getTriangleArea = getTriangleArea, 
exports.makePointRotate = makePointRotate, exports.velocityDecomposition = velocityDecomposition;