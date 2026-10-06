function velocityDecomposition(e, n) {
    return {
        x: Math.cos(n) * e,
        y: -Math.sin(n) * e
    };
}

function convertDegree2Radian(e) {
    return e * Math.PI / 180;
}

function convertRadian2Degree(e) {
    return 180 * e / Math.PI;
}

function getNumInRange(e, n, t) {
    return e < n ? n : t < e ? t : e;
}

function none() {}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.convertDegree2Radian = convertDegree2Radian, exports.convertRadian2Degree = convertRadian2Degree, 
exports.getNumInRange = getNumInRange, exports.none = none, exports.velocityDecomposition = velocityDecomposition;