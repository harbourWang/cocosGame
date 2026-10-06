function asyncGeneratorStep(e, n, r, t, o, a, u) {
    try {
        var i = e[a](u), c = i.value;
    } catch (e) {
        return void r(e);
    }
    i.done ? n(c) : Promise.resolve(c).then(t, o);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(n, r) {
            var t = i.apply(e, u);
            function o(e) {
                asyncGeneratorStep(t, n, r, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(t, n, r, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

var cloud = require("wx-server-sdk");

cloud.init(), exports.main = function() {
    var r = _asyncToGenerator(regeneratorRuntime.mark(function e(n, r) {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = cloud.getWXContext(), e.abrupt("return", {
                    event: n,
                    openid: t.OPENID,
                    appid: t.APPID,
                    unionid: t.UNIONID
                });

              case 2:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(e, n) {
        return r.apply(this, arguments);
    };
}();