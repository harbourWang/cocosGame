Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var AStarFinder = require("./AStarFinder");

function BestFirstFinder(t) {
    AStarFinder.call(this, t);
    var r = this.heuristic;
    this.heuristic = function(t, e) {
        return 1e6 * r(t, e);
    };
}

BestFirstFinder.prototype = new AStarFinder();

var _default = BestFirstFinder.prototype.constructor = BestFirstFinder;

exports.default = _default;