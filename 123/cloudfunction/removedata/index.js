function asyncGeneratorStep(e, r, n, t, o, a, c) {
    try {
        var u = e[a](c), i = u.value;
    } catch (e) {
        return void n(e);
    }
    u.done ? r(i) : Promise.resolve(i).then(t, o);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, c = arguments;
        return new Promise(function(r, n) {
            var t = u.apply(e, c);
            function o(e) {
                asyncGeneratorStep(t, r, n, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(t, r, n, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

var cloud = require("wx-server-sdk"), db = (cloud.init(), cloud.database()), collection = db.collection("worldrank"), _ = db.command, uploadScore = function() {
    var n = _asyncToGenerator(regeneratorRuntime.mark(function e(r, n) {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return", {
                    errcode: -1001,
                    msg: "错误，gameid 为空"
                });

              case 2:
                return t = r + "_" + n, e.next = 5, collection.doc(t).remove();

              case 5:
                if (t = e.sent, console.log(t), "document.remove:ok" === t.errMsg) return e.abrupt("return", {
                    errcode: 0,
                    msg: "删除成功"
                });
                e.next = 11;
                break;

              case 11:
                return e.abrupt("return", {
                    errcode: -1,
                    msg: "删除失败"
                });

              case 12:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(e, r) {
        return n.apply(this, arguments);
    };
}();

exports.main = function() {
    var n = _asyncToGenerator(regeneratorRuntime.mark(function e(r, n) {
        var t, o, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.game_id, a = cloud.getWXContext(), o = a.OPENID, a.APPID, a.UNIONID, 
                e.next = 4, uploadScore(o, t);

              case 4:
                return a = e.sent, e.abrupt("return", a);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(e, r) {
        return n.apply(this, arguments);
    };
}();