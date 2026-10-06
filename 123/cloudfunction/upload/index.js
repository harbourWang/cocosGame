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

var cloud = require("wx-server-sdk"), db = (cloud.init(), cloud.database()), collection = db.collection("worldrank"), _ = db.command, uploadScore = function() {
    var n = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t, n) {
        var a, o;
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
                return a = r + "_" + n, e.next = 5, collection.where({
                    _id: _.eq(a)
                }).get();

              case 5:
                if (!(o = e.sent).data || !o.data.length) {
                    e.next = 17;
                    break;
                }
                if (o.data[0].score >= t) return e.abrupt("return", {
                    errcode: 0,
                    msg: "分数小于历史分数，更新不成功"
                });
                e.next = 11;
                break;

              case 11:
                return e.next = 13, collection.doc(a).update({
                    data: {
                        score: t,
                        upload_time: db.serverDate()
                    }
                });

              case 13:
                return e.sent, e.abrupt("return", {
                    errcode: 0,
                    msg: "更新成功"
                });

              case 15:
                e.next = 21;
                break;

              case 17:
                return e.next = 19, collection.doc(a).set({
                    data: {
                        score: t,
                        game_id: n,
                        openid: r,
                        upload_time: db.serverDate()
                    }
                });

              case 19:
                return e.sent, e.abrupt("return", {
                    errcode: 0,
                    msg: "上传成功"
                });

              case 21:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(e, r, t) {
        return n.apply(this, arguments);
    };
}();

exports.main = function() {
    var t = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
        var n, a, o, c;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = r.score, a = r.game_id, c = cloud.getWXContext(), o = c.OPENID, c.APPID, 
                c.UNIONID, e.next = 4, uploadScore(o, n, a);

              case 4:
                return c = e.sent, e.abrupt("return", c);

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