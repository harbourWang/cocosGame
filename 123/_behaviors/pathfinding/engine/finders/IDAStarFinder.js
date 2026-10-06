Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var Util = require("../core/Util"), Heuristic = require("../core/Heuristic"), Node = require("../core/Node"), DiagonalMovement = require("../core/DiagonalMovement").default;

function IDAStarFinder(t) {
    t = t || {}, this.allowDiagonal = t.allowDiagonal, this.dontCrossCorners = t.dontCrossCorners, 
    this.diagonalMovement = t.diagonalMovement, this.heuristic = t.heuristic || Heuristic.manhattan, 
    this.weight = t.weight || 1, this.trackRecursion = t.trackRecursion || !1, this.timeLimit = t.timeLimit || 1 / 0, 
    this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles : this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle : this.diagonalMovement = DiagonalMovement.Never), 
    this.diagonalMovement === DiagonalMovement.Never ? this.heuristic = t.heuristic || Heuristic.manhattan : this.heuristic = t.heuristic || Heuristic.octile;
}

IDAStarFinder.prototype.findPath = function(t, e, i, r, g) {
    var n, o, a, m = new Date().getTime(), v = function(t, e) {
        return this.heuristic(Math.abs(e.x - t.x), Math.abs(e.y - t.y));
    }.bind(this), f = function(t, e, i, r, n) {
        if (0, 0 < this.timeLimit && new Date().getTime() - m > 1e3 * this.timeLimit) return 1 / 0;
        var o, a, s, u, h = e + v(t, M) * this.weight;
        if (i < h) return h;
        if (t == M) return r[n] = [ t.x, t.y ], t;
        var l, c, d = g.getNeighbors(t, this.diagonalMovement);
        for (o = 1 / (s = 0); u = d[s]; ++s) {
            if (this.trackRecursion && (u.retainCount = u.retainCount + 1 || 1, !0 !== u.tested && (u.tested = !0)), 
            (a = f(u, e + (c = u, (l = t).x === c.x || l.y === c.y ? 1 : Math.SQRT2), i, r, n + 1)) instanceof Node) return r[n] = [ t.x, t.y ], 
            a;
            this.trackRecursion && 0 == --u.retainCount && (u.tested = !1), a < o && (o = a);
        }
        return o;
    }.bind(this), s = g.getNodeAt(t, e), M = g.getNodeAt(i, r), u = v(s, M);
    for (n = 0; ;++n) {
        if ((a = f(s, 0, u, o = [], 0)) === 1 / 0) return [];
        if (a instanceof Node) return o;
        u = a;
    }
    return [];
};

var _default = IDAStarFinder;

exports.default = _default;