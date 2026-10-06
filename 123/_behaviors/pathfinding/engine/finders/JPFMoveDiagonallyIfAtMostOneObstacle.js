Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var JumpPointFinderBase = require("./JumpPointFinderBase"), DiagonalMovement = require("../core/DiagonalMovement").default;

function JPFMoveDiagonallyIfAtMostOneObstacle(e) {
    JumpPointFinderBase.call(this, e);
}

JPFMoveDiagonallyIfAtMostOneObstacle.prototype = new JumpPointFinderBase(), (JPFMoveDiagonallyIfAtMostOneObstacle.prototype.constructor = JPFMoveDiagonallyIfAtMostOneObstacle).prototype._jump = function(e, t, a, l) {
    var s = this.grid, i = e - a, o = t - l;
    if (!s.isWalkableAt(e, t)) return null;
    if (!0 === this.trackJumpRecursion && (s.getNodeAt(e, t).tested = !0), s.getNodeAt(e, t) === this.endNode) return [ e, t ];
    if (0 != i && 0 != o) {
        if (s.isWalkableAt(e - i, t + o) && !s.isWalkableAt(e - i, t) || s.isWalkableAt(e + i, t - o) && !s.isWalkableAt(e, t - o)) return [ e, t ];
        if (this._jump(e + i, t, e, t) || this._jump(e, t + o, e, t)) return [ e, t ];
    } else if (0 != i) {
        if (s.isWalkableAt(e + i, t + 1) && !s.isWalkableAt(e, t + 1) || s.isWalkableAt(e + i, t - 1) && !s.isWalkableAt(e, t - 1)) return [ e, t ];
    } else if (s.isWalkableAt(e + 1, t + o) && !s.isWalkableAt(e + 1, t) || s.isWalkableAt(e - 1, t + o) && !s.isWalkableAt(e - 1, t)) return [ e, t ];
    return s.isWalkableAt(e + i, t) || s.isWalkableAt(e, t + o) ? this._jump(e + i, t + o, e, t) : null;
}, JPFMoveDiagonallyIfAtMostOneObstacle.prototype._findNeighbors = function(e) {
    var t, a, l, s, i, o, n, r, u = e.parent, b = e.x, A = e.y, p = this.grid, k = [];
    if (u) t = u.x, a = u.y, l = (b - t) / Math.max(Math.abs(b - t), 1), s = (A - a) / Math.max(Math.abs(A - a), 1), 
    0 != l && 0 != s ? (p.isWalkableAt(b, A + s) && k.push([ b, A + s ]), p.isWalkableAt(b + l, A) && k.push([ b + l, A ]), 
    (p.isWalkableAt(b, A + s) || p.isWalkableAt(b + l, A)) && k.push([ b + l, A + s ]), 
    !p.isWalkableAt(b - l, A) && p.isWalkableAt(b, A + s) && k.push([ b - l, A + s ]), 
    !p.isWalkableAt(b, A - s) && p.isWalkableAt(b + l, A) && k.push([ b + l, A - s ])) : 0 == l ? p.isWalkableAt(b, A + s) && (k.push([ b, A + s ]), 
    p.isWalkableAt(b + 1, A) || k.push([ b + 1, A + s ]), p.isWalkableAt(b - 1, A) || k.push([ b - 1, A + s ])) : p.isWalkableAt(b + l, A) && (k.push([ b + l, A ]), 
    p.isWalkableAt(b, A + 1) || k.push([ b + l, A + 1 ]), p.isWalkableAt(b, A - 1) || k.push([ b + l, A - 1 ])); else for (n = 0, 
    r = (i = p.getNeighbors(e, DiagonalMovement.IfAtMostOneObstacle)).length; n < r; ++n) o = i[n], 
    k.push([ o.x, o.y ]);
    return k;
};

var _default = JPFMoveDiagonallyIfAtMostOneObstacle;

exports.default = _default;