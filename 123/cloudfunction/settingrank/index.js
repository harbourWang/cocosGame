function asyncGeneratorStep(e, r, t, n, a, o, c) {
    try {
        var u = e[o](c), s = u.value;
    } catch (e) {
        return void t(e);
    }
    u.done ? r(s) : Promise.resolve(s).then(n, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, c = arguments;
        return new Promise(function(r, t) {
            var n = u.apply(e, c);
            function a(e) {
                asyncGeneratorStep(n, r, t, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, r, t, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

var cloud = require("wx-server-sdk"), db = (cloud.init(), cloud.database()), collection = db.collection("rankdesc"), _ = db.command, uploadInfo = function() {
    var t = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        var n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return", {
                    errcode: -1001,
                    msg: "错误，用户信息为空"
                });

              case 2:
                return n = r, t.upload_time = db.serverDate(), e.next = 6, collection.where({
                    _id: n
                }).get();

              case 6:
                if (a = e.sent, console.log(a), 0 < a.data.length) return e.next = 11, collection.doc(n).update({
                    data: t
                });
                e.next = 14;
                break;

              case 11:
                e.sent, e.next = 17;
                break;

              case 14:
                return e.next = 16, collection.doc(n).set({
                    data: t
                });

              case 16:
                e.sent;

              case 17:
                return e.abrupt("return", {
                    errcode: 0,
                    msg: "上传成功"
                });

              case 18:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(e, r) {
        return t.apply(this, arguments);
    };
}();

exports.main = function() {
    var t = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        var n, a, o;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = r.game_id, a = r.data, o = cloud.getWXContext(), o.OPENID, o.APPID, o.UNIONID, 
                e.next = 4, uploadInfo(n, a);

              case 4:
                return o = e.sent, e.abrupt("return", o);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(e, r) {
        return t.apply(this, arguments);
    };
}();