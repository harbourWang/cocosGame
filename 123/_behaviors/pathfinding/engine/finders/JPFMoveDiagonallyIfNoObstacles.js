Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var JumpPointFinderBase = require("./JumpPointFinderBase"), DiagonalMovement = require("../core/DiagonalMovement").default;

function JPFMoveDiagonallyIfNoObstacles(e) {
    JumpPointFinderBase.call(this, e);
}

JPFMoveDiagonallyIfNoObstacles.prototype = new JumpPointFinderBase(), (JPFMoveDiagonallyIfNoObstacles.prototype.constructor = JPFMoveDiagonallyIfNoObstacles).prototype._jump = function(e, a, t, l) {
    var s = this.grid, i = e - t, o = a - l;
    if (!s.isWalkableAt(e, a)) return null;
    if (!0 === this.trackJumpRecursion && (s.getNodeAt(e, a).tested = !0), s.getNodeAt(e, a) === this.endNode) return [ e, a ];
    if (0 != i && 0 != o) {
        if (this._jump(e + i, a, e, a) || this._jump(e, a + o, e, a)) return [ e, a ];
    } else if (0 != i) {
        if (s.isWalkableAt(e, a - 1) && !s.isWalkableAt(e - i, a - 1) || s.isWalkableAt(e, a + 1) && !s.isWalkableAt(e - i, a + 1)) return [ e, a ];
    } else if (0 != o && (s.isWalkableAt(e - 1, a) && !s.isWalkableAt(e - 1, a - o) || s.isWalkableAt(e + 1, a) && !s.isWalkableAt(e + 1, a - o))) return [ e, a ];
    return s.isWalkableAt(e + i, a) && s.isWalkableAt(e, a + o) ? this._jump(e + i, a + o, e, a) : null;
}, JPFMoveDiagonallyIfNoObstacles.prototype._findNeighbors = function(e) {
    var a, t, l, s, i, o, r, u, n, p = e.parent, b = e.x, h = e.y, f = this.grid, A = [];
    if (p) {
        if (a = p.x, t = p.y, l = (b - a) / Math.max(Math.abs(b - a), 1), s = (h - t) / Math.max(Math.abs(h - t), 1), 
        0 != l && 0 != s) f.isWalkableAt(b, h + s) && A.push([ b, h + s ]), f.isWalkableAt(b + l, h) && A.push([ b + l, h ]), 
        f.isWalkableAt(b, h + s) && f.isWalkableAt(b + l, h) && A.push([ b + l, h + s ]); else if (0 != l) {
            n = f.isWalkableAt(b + l, h);
            var k = f.isWalkableAt(b, h + 1), W = f.isWalkableAt(b, h - 1);
            n && (A.push([ b + l, h ]), k && A.push([ b + l, h + 1 ]), W && A.push([ b + l, h - 1 ])), 
            k && A.push([ b, h + 1 ]), W && A.push([ b, h - 1 ]);
        } else if (0 != s) {
            n = f.isWalkableAt(b, h + s);
            var d = f.isWalkableAt(b + 1, h), c = f.isWalkableAt(b - 1, h);
            n && (A.push([ b, h + s ]), d && A.push([ b + 1, h + s ]), c && A.push([ b - 1, h + s ])), 
            d && A.push([ b + 1, h ]), c && A.push([ b - 1, h ]);
        }
    } else for (r = 0, u = (i = f.getNeighbors(e, DiagonalMovement.OnlyWhenNoObstacles)).length; r < u; ++r) o = i[r], 
    A.push([ o.x, o.y ]);
    return A;
};

var _default = JPFMoveDiagonallyIfNoObstacles;

exports.default = _default;