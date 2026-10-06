Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    manhattan: function(t, e) {
        return t + e;
    },
    euclidean: function(t, e) {
        return Math.sqrt(t * t + e * e);
    },
    octile: function(t, e) {
        var r = Math.SQRT2 - 1;
        return t < e ? r * t + e : r * e + t;
    },
    chebyshev: function(t, e) {
        return Math.max(t, e);
    }
};

exports.default = _default;