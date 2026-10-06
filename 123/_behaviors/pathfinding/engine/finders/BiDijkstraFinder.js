Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var BiAStarFinder = require("./BiAStarFinder");

function BiDijkstraFinder(r) {
    BiAStarFinder.call(this, r), this.heuristic = function(r, t) {
        return 0;
    };
}

BiDijkstraFinder.prototype = new BiAStarFinder();

var _default = BiDijkstraFinder.prototype.constructor = BiDijkstraFinder;

exports.default = _default;