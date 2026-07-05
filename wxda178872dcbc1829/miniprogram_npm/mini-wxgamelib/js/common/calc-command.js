var Strings = require("js/common/string"), Template = function(n, t) {
    return (n += "").replace(/\{(\w+)\}/g, function(n, e) {
        return void 0 !== t[e] ? t[e].toString() : n;
    });
}, COMMANDMAPS = {
    assign: function(n, e) {
        return !(arguments.length <= 2) && arguments.length - 2 ? arguments.length <= 2 ? void 0 : arguments[2] : e || n;
    },
    number: function(n, e) {
        return !(arguments.length <= 2) && arguments.length - 2 ? Number(arguments.length <= 2 ? void 0 : arguments[2]) : e ? Number(e) : Number(n);
    },
    string: function(n, e) {
        return !(arguments.length <= 2) && arguments.length - 2 ? String(arguments.length <= 2 ? void 0 : arguments[2]) : e ? String(e) : String(n);
    },
    boolean: function(n, e) {
        return !(arguments.length <= 2) && arguments.length - 2 ? Boolean(arguments.length <= 2 ? void 0 : arguments[2]) : e ? Boolean(e) : Boolean(n);
    },
    concat: function(n, e) {
        var t = [];
        return n && n.length && (t = t.concat(n)), e && e.length && (t = t.concat(t)), t = !(arguments.length <= 2) && arguments.length - 2 ? t.concat(t) : t;
    },
    extend: function(n, e) {
        var t = {};
        n && (t = Object.assign({}, t, n)), e && (t = Object.assign({}, t, e));
        for (var r = arguments.length, u = new Array(2 < r ? r - 2 : 0), o = 2; o < r; o++) u[o - 2] = arguments[o];
        return u.length && u.forEach(function(n) {
            t = Object.assign({}, t, n);
        }), t;
    },
    increase: function(n, e) {
        return Number(n) + Number(e);
    },
    increaseOne: function(n) {
        return Number(n) + 1;
    },
    increaseStep: function(n, e) {
        return !(arguments.length <= 2) && arguments.length - 2 ? Number(n) + Number(arguments.length <= 2 ? void 0 : arguments[2]) : Number(n) + 1;
    },
    template: function(n, e) {
        return !(arguments.length <= 2) && arguments.length - 2 ? Template(arguments.length <= 2 ? void 0 : arguments[2], e) : e;
    },
    getValue: function(n, e) {
        for (var t = {}, r = arguments.length, u = new Array(2 < r ? r - 2 : 0), o = 2; o < r; o++) u[o - 2] = arguments[o];
        if (u.length) for (var g = 0; g < u.length; g++) t[u[g]] = Strings.getValue(e, u[g]); else t = e;
        return t;
    }
};

module.exports = {
    get: function(n) {
        return n && COMMANDMAPS[n] ? COMMANDMAPS[n] : function(n, e) {
            return e;
        };
    }
};