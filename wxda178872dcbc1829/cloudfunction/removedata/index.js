function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return a;
    };
    var u, a = {}, t = Object.prototype, f = t.hasOwnProperty, s = Object.defineProperty || function(t, r, e) {
        t[r] = e.value;
    }, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", e = r.asyncIterator || "@@asyncIterator", o = r.toStringTag || "@@toStringTag";
    function i(t, r, e) {
        return Object.defineProperty(t, r, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[r];
    }
    try {
        i({}, "");
    } catch (u) {
        i = function(t, r, e) {
            return t[r] = e;
        };
    }
    function c(t, r, e, n) {
        var o, i, a, c, r = r && r.prototype instanceof g ? r : g, r = Object.create(r.prototype), n = new S(n || []);
        return s(r, "_invoke", {
            value: (o = t, i = e, a = n, c = h, function(t, r) {
                if (c === y) throw Error("Generator is already running");
                if (c === d) {
                    if ("throw" === t) throw r;
                    return {
                        value: u,
                        done: !0
                    };
                }
                for (a.method = t, a.arg = r; ;) {
                    var e = a.delegate;
                    if (e) {
                        e = function t(r, e) {
                            var n = e.method, o = r.iterator[n];
                            if (o === u) return e.delegate = null, "throw" === n && r.iterator.return && (e.method = "return", 
                            e.arg = u, t(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                            e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                            n = l(o, r.iterator, e.arg);
                            if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, 
                            v;
                            o = n.arg;
                            return o ? o.done ? (e[r.resultName] = o.value, e.next = r.nextLoc, "return" !== e.method && (e.method = "next", 
                            e.arg = u), e.delegate = null, v) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                            e.delegate = null, v);
                        }(e, a);
                        if (e) {
                            if (e === v) continue;
                            return e;
                        }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg; else if ("throw" === a.method) {
                        if (c === h) throw c = d, a.arg;
                        a.dispatchException(a.arg);
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    c = y;
                    e = l(o, i, a);
                    if ("normal" === e.type) {
                        if (c = a.done ? d : p, e.arg === v) continue;
                        return {
                            value: e.arg,
                            done: a.done
                        };
                    }
                    "throw" === e.type && (c = d, a.method = "throw", a.arg = e.arg);
                }
            })
        }), r;
    }
    function l(t, r, e) {
        try {
            return {
                type: "normal",
                arg: t.call(r, e)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    a.wrap = c;
    var h = "suspendedStart", p = "suspendedYield", y = "executing", d = "completed", v = {};
    function g() {}
    function m() {}
    function w() {}
    var r = {}, b = (i(r, n, function() {
        return this;
    }), Object.getPrototypeOf), b = b && b(b(k([]))), x = (b && b !== t && f.call(b, n) && (r = b), 
    w.prototype = g.prototype = Object.create(r));
    function _(t) {
        [ "next", "throw", "return" ].forEach(function(r) {
            i(t, r, function(t) {
                return this._invoke(r, t);
            });
        });
    }
    function L(a, c) {
        var r;
        s(this, "_invoke", {
            value: function(e, n) {
                function t() {
                    return new c(function(t, r) {
                        !function r(t, e, n, o) {
                            var i, t = l(a[t], a, e);
                            if ("throw" !== t.type) return (e = (i = t.arg).value) && "object" == _typeof(e) && f.call(e, "__await") ? c.resolve(e.__await).then(function(t) {
                                r("next", t, n, o);
                            }, function(t) {
                                r("throw", t, n, o);
                            }) : c.resolve(e).then(function(t) {
                                i.value = t, n(i);
                            }, function(t) {
                                return r("throw", t, n, o);
                            });
                            o(t.arg);
                        }(e, n, t, r);
                    });
                }
                return r = r ? r.then(t, t) : t();
            }
        });
    }
    function E(t) {
        var r = {
            tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), 
        this.tryEntries.push(r);
    }
    function O(t) {
        var r = t.completion || {};
        r.type = "normal", delete r.arg, t.completion = r;
    }
    function S(t) {
        this.tryEntries = [ {
            tryLoc: "root"
        } ], t.forEach(E, this), this.reset(!0);
    }
    function k(r) {
        if (r || "" === r) {
            var e, t = r[n];
            if (t) return t.call(r);
            if ("function" == typeof r.next) return r;
            if (!isNaN(r.length)) return e = -1, (t = function t() {
                for (;++e < r.length; ) if (f.call(r, e)) return t.value = r[e], t.done = !1, t;
                return t.value = u, t.done = !0, t;
            }).next = t;
        }
        throw new TypeError(_typeof(r) + " is not iterable");
    }
    return s(x, "constructor", {
        value: m.prototype = w,
        configurable: !0
    }), s(w, "constructor", {
        value: m,
        configurable: !0
    }), m.displayName = i(w, o, "GeneratorFunction"), a.isGeneratorFunction = function(t) {
        t = "function" == typeof t && t.constructor;
        return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
    }, a.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, i(t, o, "GeneratorFunction")), 
        t.prototype = Object.create(x), t;
    }, a.awrap = function(t) {
        return {
            __await: t
        };
    }, _(L.prototype), i(L.prototype, e, function() {
        return this;
    }), a.AsyncIterator = L, a.async = function(t, r, e, n, o) {
        void 0 === o && (o = Promise);
        var i = new L(c(t, r, e, n), o);
        return a.isGeneratorFunction(r) ? i : i.next().then(function(t) {
            return t.done ? t.value : i.next();
        });
    }, _(x), i(x, o, "Generator"), i(x, n, function() {
        return this;
    }), i(x, "toString", function() {
        return "[object Generator]";
    }), a.keys = function(t) {
        var r, e = Object(t), n = [];
        for (r in e) n.push(r);
        return n.reverse(), function t() {
            for (;n.length; ) {
                var r = n.pop();
                if (r in e) return t.value = r, t.done = !1, t;
            }
            return t.done = !0, t;
        };
    }, a.values = k, S.prototype = {
        constructor: S,
        reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = u, this.done = !1, this.delegate = null, 
            this.method = "next", this.arg = u, this.tryEntries.forEach(O), !t) for (var r in this) "t" === r.charAt(0) && f.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = u);
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function(e) {
            if (this.done) throw e;
            var n = this;
            function t(t, r) {
                return i.type = "throw", i.arg = e, n.next = t, r && (n.method = "next", n.arg = u), 
                !!r;
            }
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                var o = this.tryEntries[r], i = o.completion;
                if ("root" === o.tryLoc) return t("end");
                if (o.tryLoc <= this.prev) {
                    var a = f.call(o, "catchLoc"), c = f.call(o, "finallyLoc");
                    if (a && c) {
                        if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                    } else if (a) {
                        if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                    } else {
                        if (!c) throw Error("try statement without catch or finally");
                        if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(t, r) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc <= this.prev && f.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                    var o = n;
                    break;
                }
            }
            var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc ? null : o) ? o.completion : {};
            return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o.finallyLoc, 
            v) : this.complete(i);
        },
        complete: function(t, r) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
            this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), 
            v;
        },
        finish: function(t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), v;
            }
        },
        catch: function(t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                var e, n, o = this.tryEntries[r];
                if (o.tryLoc === t) return "throw" === (e = o.completion).type && (n = e.arg, O(o)), 
                n;
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function(t, r, e) {
            return this.delegate = {
                iterator: k(t),
                resultName: r,
                nextLoc: e
            }, "next" === this.method && (this.arg = u), v;
        }
    }, a;
}

function asyncGeneratorStep(t, r, e, n, o, i, a) {
    try {
        var c = t[i](a), u = c.value;
    } catch (t) {
        return void e(t);
    }
    c.done ? r(u) : Promise.resolve(u).then(n, o);
}

function _asyncToGenerator(c) {
    return function() {
        var t = this, a = arguments;
        return new Promise(function(r, e) {
            var n = c.apply(t, a);
            function o(t) {
                asyncGeneratorStep(n, r, e, o, i, "next", t);
            }
            function i(t) {
                asyncGeneratorStep(n, r, e, o, i, "throw", t);
            }
            o(void 0);
        });
    };
}

var cloud = require("wx-server-sdk"), db = (cloud.init(), cloud.database()), collection = db.collection("worldrank"), _ = db.command, uploadScore = function() {
    var e = _asyncToGenerator(_regeneratorRuntime().mark(function t(r, e) {
        var n;
        return _regeneratorRuntime().wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (e) {
                    t.next = 2;
                    break;
                }
                return t.abrupt("return", {
                    errcode: -1001,
                    msg: "错误，gameid 为空"
                });

              case 2:
                return n = r + "_" + e, t.next = 5, collection.doc(n).remove();

              case 5:
                if (n = t.sent, console.log(n), "document.remove:ok" === n.errMsg) return t.abrupt("return", {
                    errcode: 0,
                    msg: "删除成功"
                });
                t.next = 11;
                break;

              case 11:
                return t.abrupt("return", {
                    errcode: -1,
                    msg: "删除失败"
                });

              case 12:
              case "end":
                return t.stop();
            }
        }, t);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}();

exports.main = function() {
    var e = _asyncToGenerator(_regeneratorRuntime().mark(function t(r, e) {
        var n, o, i;
        return _regeneratorRuntime().wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return n = r.game_id, i = cloud.getWXContext(), o = i.OPENID, i.APPID, i.UNIONID, 
                t.next = 4, uploadScore(o, n);

              case 4:
                return i = t.sent, t.abrupt("return", i);

              case 6:
              case "end":
                return t.stop();
            }
        }, t);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}();