Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var BiAStarFinder = require("./BiAStarFinder");

function BiBestFirstFinder(t) {
    BiAStarFinder.call(this, t);
    var r = this.heuristic;
    this.heuristic = function(t, e) {
        return 1e6 * r(t, e);
    };
}

BiBestFirstFinder.prototype = new BiAStarFinder();

var _default = BiBestFirstFinder.prototype.constructor = BiBestFirstFinder;

exports.default = _default;