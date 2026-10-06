Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var Util = require("../core/Util"), DiagonalMovement = require("../core/DiagonalMovement").default;

function BiBreadthFirstFinder(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, 
    this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles : this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle : this.diagonalMovement = DiagonalMovement.Never);
}

BiBreadthFirstFinder.prototype.findPath = function(e, t, o, n, i) {
    var a, r, s, l, d, h = i.getNodeAt(e, t), g = i.getNodeAt(o, n), f = [], u = [], p = this.diagonalMovement;
    for (f.push(h), h.opened = !0, h.by = 0, u.push(g), g.opened = !0, g.by = 1; f.length && u.length; ) {
        for ((s = f.shift()).closed = !0, l = 0, d = (a = i.getNeighbors(s, p)).length; l < d; ++l) if (!(r = a[l]).closed) if (r.opened) {
            if (1 === r.by) return Util.biBacktrace(s, r);
        } else f.push(r), r.parent = s, r.opened = !0, r.by = 0;
        for ((s = u.shift()).closed = !0, l = 0, d = (a = i.getNeighbors(s, p)).length; l < d; ++l) if (!(r = a[l]).closed) if (r.opened) {
            if (0 === r.by) return Util.biBacktrace(r, s);
        } else u.push(r), r.parent = s, r.opened = !0, r.by = 1;
    }
    return [];
};

var _default = BiBreadthFirstFinder;

exports.default = _default;