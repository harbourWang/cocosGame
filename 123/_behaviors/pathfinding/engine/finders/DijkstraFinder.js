Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var AStarFinder = require("./AStarFinder");

function DijkstraFinder(r) {
    AStarFinder.call(this, r), this.heuristic = function(r, t) {
        return 0;
    };
}

DijkstraFinder.prototype = new AStarFinder();

var _default = DijkstraFinder.prototype.constructor = DijkstraFinder;

exports.default = _default;