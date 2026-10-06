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
    for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, t, o) {
    return t && _defineProperties(e.prototype, t), o && _defineProperties(e, o), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

var Event = function() {
    function e() {
        _classCallCheck(this, e), this._stores = {};
    }
    return _createClass(e, [ {
        key: "on",
        value: function(e, t, o) {
            "function" == typeof t && (this._stores[e] = this._stores[e] || [], this._stores[e].push({
                cb: t,
                ctx: o
            }));
        }
    }, {
        key: "emit",
        value: function(e) {
            var t, o, n, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = 2 < arguments.length ? arguments[2] : void 0, s = this, l = null;
            i && "number" == typeof i ? setTimeout(function() {
                l = s._stores[e], s._emitData(l, r);
            }, i) : i && "object" == _typeof(i) ? (t = i.repeat || 20, i = i.time || 100, o = 0, 
            n = setInterval(function() {
                if (o == t) return clearInterval(n);
                l = s._stores[e], s._emitData(l, r, n), o++;
            }, i)) : (l = s._stores[e], s._emitData(l, r));
        }
    }, {
        key: "_emitData",
        value: function(e, t, o) {
            e && e.length && ((e = e.slice(0)).forEach(function(e) {
                e.cb.call(e.ctx, t);
            }), o && clearInterval(o));
        }
    }, {
        key: "off",
        value: function(e, t) {
            if (arguments.length) {
                var o = this._stores[e];
                if (o) if (1 === arguments.length) delete this._stores[e]; else for (var n = 0, r = o.length; n < r; n++) if (o[n].cb === t) {
                    o.splice(n, 1);
                    break;
                }
            } else this._stores = {};
        }
    } ]), e;
}();

module.exports = Event;