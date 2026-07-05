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
        var r = t[o];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(r.key), r);
    }
}

function _createClass(e, t, o) {
    return t && _defineProperties(e.prototype, t), o && _defineProperties(e, o), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : e + "";
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var o = e[Symbol.toPrimitive];
    if (void 0 === o) return ("string" === t ? String : Number)(e);
    o = o.call(e, t || "default");
    if ("object" != _typeof(o)) return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

var Event = function() {
    return _createClass(function e() {
        _classCallCheck(this, e), this._stores = {};
    }, [ {
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
            var t, o, r, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = 2 < arguments.length ? arguments[2] : void 0, s = this, f = null;
            i && "number" == typeof i ? setTimeout(function() {
                f = s._stores[e], s._emitData(f, n);
            }, i) : i && "object" == _typeof(i) ? (t = i.repeat || 20, i = i.time || 100, o = 0, 
            r = setInterval(function() {
                if (o == t) return clearInterval(r);
                f = s._stores[e], s._emitData(f, n, r), o++;
            }, i)) : (f = s._stores[e], s._emitData(f, n));
        }
    }, {
        key: "_emitData",
        value: function(e, t, o) {
            e && e.length && ((e = e.slice(0)).forEach(function(e) {
                e.cb.call(e.ctx, t);
            }), o) && clearInterval(o);
        }
    }, {
        key: "off",
        value: function(e, t) {
            if (arguments.length) {
                var o = this._stores[e];
                if (o) if (1 === arguments.length) delete this._stores[e]; else for (var r = 0, n = o.length; r < n; r++) if (o[r].cb === t) {
                    o.splice(r, 1);
                    break;
                }
            } else this._stores = {};
        }
    } ]);
}();

module.exports = Event;