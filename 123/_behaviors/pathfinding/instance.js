Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _PathFinding = _interopRequireDefault(require("./engine/PathFinding"));

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

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(e, o.key, o);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t;
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t);
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

var _default = function(e) {
    function i(e, t) {
        var n;
        _classCallCheck(this, i), (n = _possibleConstructorReturn(this, _getPrototypeOf(i).call(this, e)))._cellSize = 30, 
        n._cellBorder = -1, n._obstacles = 0, n._maxSpeed = 200;
        var o = new _PathFinding.default.Grid(25, 44);
        o.setWalkableAt(0, 1, !1);
        var r = new _PathFinding.default.AStarFinder().findPath(1, 2, 4, 2, o);
        return console.log(r), n._isEnabled && n.enable(), n;
    }
    return _inherits(i, LB.SDK.IBehaviorInstanceBase), _createClass(i, [ {
        key: "tick",
        value: function(e) {}
    }, {
        key: "_onArrived",
        value: function(e, t, n) {}
    }, {
        key: "_checkSolidCollision",
        value: function(e, t, n) {}
    }, {
        key: "_stop",
        value: function() {
            this._waypoints.length = 0, this._speed = 0, this._stopTicking();
        }
    } ]), i;
}();

exports.default = _default;