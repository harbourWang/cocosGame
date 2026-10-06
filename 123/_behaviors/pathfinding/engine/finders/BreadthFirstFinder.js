Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var Util = require("../core/Util"), DiagonalMovement = require("../core/DiagonalMovement").default;

function BreadthFirstFinder(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, 
    this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles : this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle : this.diagonalMovement = DiagonalMovement.Never);
}

BreadthFirstFinder.prototype.findPath = function(e, t, o, n, a) {
    var i, r, l, s, d, g = [], h = this.diagonalMovement, v = a.getNodeAt(e, t), u = a.getNodeAt(o, n);
    for (g.push(v), v.opened = !0; g.length; ) {
        if ((l = g.shift()).closed = !0, l === u) return Util.backtrace(u);
        for (s = 0, d = (i = a.getNeighbors(l, h)).length; s < d; ++s) (r = i[s]).closed || r.opened || (g.push(r), 
        r.opened = !0, r.parent = l);
    }
    return [];
};

var _default = BreadthFirstFinder;

exports.default = _default;