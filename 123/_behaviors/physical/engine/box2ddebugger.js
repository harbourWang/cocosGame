function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function drawPoly(e, t, r) {
    e.beginPath(), e.moveTo(t[0].x, t[0].y);
    for (var n = 1; n < r; n++) e.lineTo(t[n].x, t[n].y);
    e.closePath(), e.stroke();
}

function drawCircle(e, t, r, n) {
    e.beginPath(), e.arc(r, n, t, 0, 2 * Math.PI), e.stroke();
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var Debugger = function() {
    function e() {
        _classCallCheck(this, e);
    }
    return _createClass(e, [ {
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
            for (var n = e.m_bodyList; n; n = n.m_next) {
                var a = n.m_xf;
                r.save(), r.translate(a.p.x, a.p.y), r.rotate(a.q.GetAngle());
                for (var o = n.m_fixtureList; o; o = o.m_next) {
                    var i = o.GetShape();
                    i.m_vertices ? drawPoly(r, i.m_vertices, i.m_count) : i.m_p && drawCircle(r, i.m_radius, i.m_p.x, i.m_p.y);
                }
                r.restore();
            }
            r.restore();
        }
    } ]), e;
}();

exports.default = Debugger;