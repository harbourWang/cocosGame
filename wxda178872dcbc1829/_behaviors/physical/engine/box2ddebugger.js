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
    for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : e + "";
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 === r) return ("string" === t ? String : Number)(e);
    r = r.call(e, t || "default");
    if ("object" != _typeof(r)) return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

function drawPoly(e, t, r) {
    e.beginPath(), e.moveTo(t[0].x, t[0].y);
    for (var o = 1; o < r; o++) e.lineTo(t[o].x, t[o].y);
    e.closePath(), e.stroke();
}

function drawCircle(e, t, r, o) {
    e.beginPath(), e.arc(r, o, t, 0, 2 * Math.PI), e.stroke();
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var Debugger = exports.default = function() {
    return _createClass(function e() {
        _classCallCheck(this, e);
    }, [ {
        key: "open",
        value: function(e) {
            var t = document.getElementsByTagName("canvas")[0], t = t && t.parentElement, r = document.getElementById("debugger-for-box2d");
            r && t && t.removeChild(r), (r = document.createElement("canvas")).id = "debugger-for-box2d", 
            r.style.cssText = "\n            width : ".concat(e.width / 2, "px;\n            height: ").concat(e.height / 2, "px;\n            opacity: 1;\n            position: absolute;\n        "), 
            t.appendChild(r), r.width = e.width, r.height = e.height, this.ctx = r.getContext("2d"), 
            this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#000000";
        }
    }, {
        key: "close",
        value: function() {
            var e = document.getElementsByTagName("canvas")[0], e = e && e.parentElement, t = document.getElementById("debugger-for-box2d");
            t && e && e.removeChild(t);
        }
    }, {
        key: "render",
        value: function(e, t) {
            var r = this.ctx;
            r.clearRect(0, 0, t.width, t.height), r.save(), r.translate(t.width / 2, t.height / 2), 
            r.scale(10, -10), r.lineWidth = .1;
            for (var o = e.m_bodyList; o; o = o.m_next) {
                var n = o.m_xf;
                r.save(), r.translate(n.p.x, n.p.y), r.rotate(n.q.GetAngle());
                for (var i = o.m_fixtureList; i; i = i.m_next) {
                    var a = i.GetShape();
                    a.m_vertices ? drawPoly(r, a.m_vertices, a.m_count) : a.m_p && drawCircle(r, a.m_radius, a.m_p.x, a.m_p.y);
                }
                r.restore();
            }
            r.restore();
        }
    } ]);
}();