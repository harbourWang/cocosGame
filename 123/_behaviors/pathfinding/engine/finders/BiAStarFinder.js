Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var Heap = require("heap"), Util = require("../core/Util"), Heuristic = require("../core/Heuristic"), DiagonalMovement = require("../core/DiagonalMovement").default;

function BiAStarFinder(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, 
    this.diagonalMovement = e.diagonalMovement, this.heuristic = e.heuristic || Heuristic.manhattan, 
    this.weight = e.weight || 1, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles : this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle : this.diagonalMovement = DiagonalMovement.Never), 
    this.diagonalMovement === DiagonalMovement.Never ? this.heuristic = e.heuristic || Heuristic.manhattan : this.heuristic = e.heuristic || Heuristic.octile;
}

BiAStarFinder.prototype.findPath = function(e, t, i, o, n) {
    var a, r, s, h, l, d, g, u, p = function(e, t) {
        return e.f - t.f;
    }, c = new Heap(p), f = new Heap(p), v = n.getNodeAt(e, t), m = n.getNodeAt(i, o), M = this.heuristic, y = this.diagonalMovement, D = this.weight, b = Math.abs, w = Math.SQRT2;
    for (v.g = 0, v.f = 0, c.push(v), v.opened = 1, m.g = 0, m.f = 0, f.push(m), m.opened = 2; !c.empty() && !f.empty(); ) {
        for ((a = c.pop()).closed = !0, h = 0, l = (r = n.getNeighbors(a, y)).length; h < l; ++h) if (!(s = r[h]).closed) {
            if (2 === s.opened) return Util.biBacktrace(a, s);
            d = s.x, g = s.y, u = a.g + (d - a.x == 0 || g - a.y == 0 ? 1 : w), (!s.opened || u < s.g) && (s.g = u, 
            s.h = s.h || D * M(b(d - i), b(g - o)), s.f = s.g + s.h, s.parent = a, s.opened ? c.updateItem(s) : (c.push(s), 
            s.opened = 1));
        }
        for ((a = f.pop()).closed = !0, h = 0, l = (r = n.getNeighbors(a, y)).length; h < l; ++h) if (!(s = r[h]).closed) {
            if (1 === s.opened) return Util.biBacktrace(s, a);
            d = s.x, g = s.y, u = a.g + (d - a.x == 0 || g - a.y == 0 ? 1 : w), (!s.opened || u < s.g) && (s.g = u, 
            s.h = s.h || D * M(b(d - e), b(g - t)), s.f = s.g + s.h, s.parent = a, s.opened ? f.updateItem(s) : (f.push(s), 
            s.opened = 2));
        }
    }
    return [];
};

var _default = BiAStarFinder;

exports.default = _default;