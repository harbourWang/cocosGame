Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var Heap = require("heap"), Util = require("../core/Util"), Heuristic = require("../core/Heuristic"), DiagonalMovement = require("../core/DiagonalMovement").default;

function JumpPointFinderBase(e) {
    e = e || {}, this.heuristic = e.heuristic || Heuristic.manhattan, this.trackJumpRecursion = e.trackJumpRecursion || !1;
}

JumpPointFinderBase.prototype.findPath = function(e, t, i, r, o) {
    var s, n = this.openList = new Heap(function(e, t) {
        return e.f - t.f;
    }), u = this.startNode = o.getNodeAt(e, t), a = this.endNode = o.getNodeAt(i, r);
    for (this.grid = o, u.g = 0, u.f = 0, n.push(u), u.opened = !0; !n.empty(); ) {
        if ((s = n.pop()).closed = !0, s === a) return Util.expandPath(Util.backtrace(a));
        this._identifySuccessors(s);
    }
    return [];
}, JumpPointFinderBase.prototype._identifySuccessors = function(e) {
    var t, i, r, o, s, n, u, a, d, p, c = this.grid, h = this.heuristic, f = this.openList, l = this.endNode.x, g = this.endNode.y, m = e.x, v = e.y, y = Math.abs;
    Math.max;
    for (o = 0, s = (t = this._findNeighbors(e)).length; o < s; ++o) if (i = t[o], r = this._jump(i[0], i[1], m, v)) {
        if (n = r[0], u = r[1], (p = c.getNodeAt(n, u)).closed) continue;
        a = Heuristic.octile(y(n - m), y(u - v)), d = e.g + a, (!p.opened || d < p.g) && (p.g = d, 
        p.h = p.h || h(y(n - l), y(u - g)), p.f = p.g + p.h, p.parent = e, p.opened ? f.updateItem(p) : (f.push(p), 
        p.opened = !0));
    }
};

var _default = JumpPointFinderBase;

exports.default = _default;