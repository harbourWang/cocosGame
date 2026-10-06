Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var JumpPointFinderBase = require("./JumpPointFinderBase"), DiagonalMovement = require("../core/DiagonalMovement").default;

function JPFAlwaysMoveDiagonally(a) {
    JumpPointFinderBase.call(this, a);
}

JPFAlwaysMoveDiagonally.prototype = new JumpPointFinderBase(), (JPFAlwaysMoveDiagonally.prototype.constructor = JPFAlwaysMoveDiagonally).prototype._jump = function(a, e, t, l) {
    var i = this.grid, s = a - t, o = e - l;
    if (!i.isWalkableAt(a, e)) return null;
    if (!0 === this.trackJumpRecursion && (i.getNodeAt(a, e).tested = !0), i.getNodeAt(a, e) === this.endNode) return [ a, e ];
    if (0 != s && 0 != o) {
        if (i.isWalkableAt(a - s, e + o) && !i.isWalkableAt(a - s, e) || i.isWalkableAt(a + s, e - o) && !i.isWalkableAt(a, e - o)) return [ a, e ];
        if (this._jump(a + s, e, a, e) || this._jump(a, e + o, a, e)) return [ a, e ];
    } else if (0 != s) {
        if (i.isWalkableAt(a + s, e + 1) && !i.isWalkableAt(a, e + 1) || i.isWalkableAt(a + s, e - 1) && !i.isWalkableAt(a, e - 1)) return [ a, e ];
    } else if (i.isWalkableAt(a + 1, e + o) && !i.isWalkableAt(a + 1, e) || i.isWalkableAt(a - 1, e + o) && !i.isWalkableAt(a - 1, e)) return [ a, e ];
    return this._jump(a + s, e + o, a, e);
}, JPFAlwaysMoveDiagonally.prototype._findNeighbors = function(a) {
    var e, t, l, i, s, o, r, u, n = a.parent, p = a.x, A = a.y, b = this.grid, h = [];
    if (n) e = n.x, t = n.y, l = (p - e) / Math.max(Math.abs(p - e), 1), i = (A - t) / Math.max(Math.abs(A - t), 1), 
    0 != l && 0 != i ? (b.isWalkableAt(p, A + i) && h.push([ p, A + i ]), b.isWalkableAt(p + l, A) && h.push([ p + l, A ]), 
    b.isWalkableAt(p + l, A + i) && h.push([ p + l, A + i ]), b.isWalkableAt(p - l, A) || h.push([ p - l, A + i ]), 
    b.isWalkableAt(p, A - i) || h.push([ p + l, A - i ])) : 0 == l ? (b.isWalkableAt(p, A + i) && h.push([ p, A + i ]), 
    b.isWalkableAt(p + 1, A) || h.push([ p + 1, A + i ]), b.isWalkableAt(p - 1, A) || h.push([ p - 1, A + i ])) : (b.isWalkableAt(p + l, A) && h.push([ p + l, A ]), 
    b.isWalkableAt(p, A + 1) || h.push([ p + l, A + 1 ]), b.isWalkableAt(p, A - 1) || h.push([ p + l, A - 1 ])); else for (r = 0, 
    u = (s = b.getNeighbors(a, DiagonalMovement.Always)).length; r < u; ++r) o = s[r], 
    h.push([ o.x, o.y ]);
    return h;
};

var _default = JPFAlwaysMoveDiagonally;

exports.default = _default;