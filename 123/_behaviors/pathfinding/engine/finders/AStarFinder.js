Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _heap = _interopRequireDefault(require("heap")), Util = _interopRequireWildcard(require("../core/Util")), _Heuristic = _interopRequireDefault(require("../core/Heuristic")), _DiagonalMovement = _interopRequireDefault(require("../core/DiagonalMovement"));

function _getRequireWildcardCache() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return _getRequireWildcardCache = function() {
        return e;
    }, e;
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = _getRequireWildcardCache();
    if (t && t.has(e)) return t.get(e);
    var r = {};
    if (null != e) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
            var n = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            n && (n.get || n.set) ? Object.defineProperty(r, a, n) : r[a] = e[a];
        }
    }
    return r.default = e, t && t.set(e, r), r;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function AStarFinder(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, 
    this.heuristic = e.heuristic || _Heuristic.default.manhattan, this.weight = e.weight || 1, 
    this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = _DiagonalMovement.default.OnlyWhenNoObstacles : this.diagonalMovement = _DiagonalMovement.default.IfAtMostOneObstacle : this.diagonalMovement = _DiagonalMovement.default.Never), 
    this.diagonalMovement === _DiagonalMovement.default.Never ? this.heuristic = e.heuristic || _Heuristic.default.manhattan : this.heuristic = e.heuristic || _Heuristic.default.octile;
}

AStarFinder.prototype.findPath = function(e, t, r, i, a) {
    var n, o, u, l, s, d, c, h, f = new _heap.default(function(e, t) {
        return e.f - t.f;
    }), p = a.getNodeAt(e, t), g = a.getNodeAt(r, i), _ = this.heuristic, v = this.diagonalMovement, M = this.weight, m = Math.abs, D = Math.SQRT2;
    for (p.g = 0, p.f = 0, f.push(p), p.opened = !0; !f.empty(); ) {
        if ((n = f.pop()).closed = !0, n === g) return Util.backtrace(g);
        for (l = 0, s = (o = a.getNeighbors(n, v)).length; l < s; ++l) (u = o[l]).closed || (d = u.x, 
        c = u.y, h = n.g + (d - n.x == 0 || c - n.y == 0 ? 1 : D), (!u.opened || h < u.g) && (u.g = h, 
        u.h = u.h || M * _(m(d - r), m(c - i)), u.f = u.g + u.h, u.parent = n, u.opened ? f.updateItem(u) : (f.push(u), 
        u.opened = !0)));
    }
    return [];
};

var _default = AStarFinder;

exports.default = _default;