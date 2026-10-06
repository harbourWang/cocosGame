Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var DiagonalMovement = require("../core/DiagonalMovement").default, JPFNeverMoveDiagonally = require("./JPFNeverMoveDiagonally"), JPFAlwaysMoveDiagonally = require("./JPFAlwaysMoveDiagonally"), JPFMoveDiagonallyIfNoObstacles = require("./JPFMoveDiagonallyIfNoObstacles"), JPFMoveDiagonallyIfAtMostOneObstacle = require("./JPFMoveDiagonallyIfAtMostOneObstacle");

function JumpPointFinder(e) {
    return (e = e || {}).diagonalMovement === DiagonalMovement.Never ? new JPFNeverMoveDiagonally(e) : e.diagonalMovement === DiagonalMovement.Always ? new JPFAlwaysMoveDiagonally(e) : e.diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles ? new JPFMoveDiagonallyIfNoObstacles(e) : new JPFMoveDiagonallyIfAtMostOneObstacle(e);
}

var _default = JumpPointFinder;

exports.default = _default;