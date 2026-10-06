Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _Node = _interopRequireDefault(require("./Node")), _DiagonalMovement = _interopRequireDefault(require("./DiagonalMovement"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function Grid(e, t, o) {
    var i;
    "object" !== _typeof(e) ? i = e : (t = e.length, i = e[0].length, o = e), this.width = i, 
    this.height = t, this.nodes = this._buildNodes(i, t, o);
}

Grid.prototype._buildNodes = function(e, t, o) {
    var i, r, n = new Array(t);
    for (i = 0; i < t; ++i) for (n[i] = new Array(e), r = 0; r < e; ++r) n[i][r] = new _Node.default(r, i);
    if (void 0 === o) return n;
    if (o.length !== t || o[0].length !== e) throw new Error("Matrix size does not fit");
    for (i = 0; i < t; ++i) for (r = 0; r < e; ++r) o[i][r] && (n[i][r].walkable = !1);
    return n;
}, Grid.prototype.getNodeAt = function(e, t) {
    return this.nodes[t][e];
}, Grid.prototype.isWalkableAt = function(e, t) {
    return this.isInside(e, t) && this.nodes[t][e].walkable;
}, Grid.prototype.isInside = function(e, t) {
    return 0 <= e && e < this.width && 0 <= t && t < this.height;
}, Grid.prototype.setWalkableAt = function(e, t, o) {
    this.nodes[t][e].walkable = o;
}, Grid.prototype.getNeighbors = function(e, t) {
    var o = e.x, i = e.y, r = [], n = !1, a = !1, l = !1, s = !1, u = !1, f = !1, d = !1, h = !1, p = this.nodes;
    if (this.isWalkableAt(o, i - 1) && (r.push(p[i - 1][o]), n = !0), this.isWalkableAt(o + 1, i) && (r.push(p[i][o + 1]), 
    l = !0), this.isWalkableAt(o, i + 1) && (r.push(p[i + 1][o]), u = !0), this.isWalkableAt(o - 1, i) && (r.push(p[i][o - 1]), 
    d = !0), t === _DiagonalMovement.default.Never) return r;
    if (t === _DiagonalMovement.default.OnlyWhenNoObstacles) a = d && n, s = n && l, 
    f = l && u, h = u && d; else if (t === _DiagonalMovement.default.IfAtMostOneObstacle) a = d || n, 
    s = n || l, f = l || u, h = u || d; else {
        if (t !== _DiagonalMovement.default.Always) throw new Error("Incorrect value of diagonalMovement");
        h = f = s = a = !0;
    }
    return a && this.isWalkableAt(o - 1, i - 1) && r.push(p[i - 1][o - 1]), s && this.isWalkableAt(o + 1, i - 1) && r.push(p[i - 1][o + 1]), 
    f && this.isWalkableAt(o + 1, i + 1) && r.push(p[i + 1][o + 1]), h && this.isWalkableAt(o - 1, i + 1) && r.push(p[i + 1][o - 1]), 
    r;
}, Grid.prototype.clone = function() {
    var e, t, o = this.width, i = this.height, r = this.nodes, n = new Grid(o, i), a = new Array(i);
    for (e = 0; e < i; ++e) for (a[e] = new Array(o), t = 0; t < o; ++t) a[e][t] = new _Node.default(t, e, r[e][t].walkable);
    return n.nodes = a, n;
};

var _default = Grid;

exports.default = _default;