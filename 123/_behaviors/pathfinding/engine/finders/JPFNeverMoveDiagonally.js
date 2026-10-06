Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var JumpPointFinderBase = require("./JumpPointFinderBase"), DiagonalMovement = require("../core/DiagonalMovement").default;

function JPFNeverMoveDiagonally(e) {
    JumpPointFinderBase.call(this, e);
}

JPFNeverMoveDiagonally.prototype = new JumpPointFinderBase(), (JPFNeverMoveDiagonally.prototype.constructor = JPFNeverMoveDiagonally).prototype._jump = function(e, t, a, i) {
    var l = this.grid, r = e - a, o = t - i;
    if (!l.isWalkableAt(e, t)) return null;
    if (!0 === this.trackJumpRecursion && (l.getNodeAt(e, t).tested = !0), l.getNodeAt(e, t) === this.endNode) return [ e, t ];
    if (0 != r) {
        if (l.isWalkableAt(e, t - 1) && !l.isWalkableAt(e - r, t - 1) || l.isWalkableAt(e, t + 1) && !l.isWalkableAt(e - r, t + 1)) return [ e, t ];
    } else {
        if (0 == o) throw new Error("Only horizontal and vertical movements are allowed");
        if (l.isWalkableAt(e - 1, t) && !l.isWalkableAt(e - 1, t - o) || l.isWalkableAt(e + 1, t) && !l.isWalkableAt(e + 1, t - o)) return [ e, t ];
        if (this._jump(e + 1, t, e, t) || this._jump(e - 1, t, e, t)) return [ e, t ];
    }
    return this._jump(e + r, t + o, e, t);
}, JPFNeverMoveDiagonally.prototype._findNeighbors = function(e) {
    var t, a, i, l, r, o, s, n, u = e.parent, p = e.x, h = e.y, v = this.grid, d = [];
    if (u) t = u.x, a = u.y, i = (p - t) / Math.max(Math.abs(p - t), 1), l = (h - a) / Math.max(Math.abs(h - a), 1), 
    0 != i ? (v.isWalkableAt(p, h - 1) && d.push([ p, h - 1 ]), v.isWalkableAt(p, h + 1) && d.push([ p, h + 1 ]), 
    v.isWalkableAt(p + i, h) && d.push([ p + i, h ])) : 0 != l && (v.isWalkableAt(p - 1, h) && d.push([ p - 1, h ]), 
    v.isWalkableAt(p + 1, h) && d.push([ p + 1, h ]), v.isWalkableAt(p, h + l) && d.push([ p, h + l ])); else for (s = 0, 
    n = (r = v.getNeighbors(e, DiagonalMovement.Never)).length; s < n; ++s) o = r[s], 
    d.push([ o.x, o.y ]);
    return d;
};

var _default = JPFNeverMoveDiagonally;

exports.default = _default;