function asyncGeneratorStep(e, t, n, r, o, a, i) {
    try {
        var c = e[a](i), s = c.value;
    } catch (e) {
        return void n(e);
    }
    c.done ? t(s) : Promise.resolve(s).then(r, o);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, n) {
            var r = c.apply(e, i);
            function o(e) {
                asyncGeneratorStep(r, t, n, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(r, t, n, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

var cloud = require("wx-server-sdk"), db = (cloud.init(), cloud.database()), collection = db.collection("worldrank"), userinfoCollection = db.collection("userinfo"), _ = db.command, getScoreRankInfo = function() {
    var n = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
        var r, o, a, i, c, s, u, d, l, p, f;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = {
                    game_id: _.eq(n.game_id)
                }, "day" === n.period ? r.upload_time = _.gte(new Date(new Date().setHours(0, 0, 0, 0))) : "month" === n.period ? ((o = new Date()).setDate(1), 
                o.setHours(0), o.setSeconds(0), o.setMinutes(0), r.upload_time = _.gte(n)) : "week" === n.period && ((o = new Date()).setDate(o.getDate() - o.getDay() + 1), 
                a = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate() + " 00:00:00", 
                r.upload_time = _.gte(new Date(a))), console.log(n.period, r), e.next = 5, collection.where(r).orderBy("score", "down" === n.sortType ? "desc" : "asc").orderBy("upload_time", "asc").limit(100).get();

              case 5:
                return a = e.sent, i = a.data, c = [], i.forEach(function(e) {
                    c.push(e.openid);
                }), e.next = 11, userinfoCollection.where({
                    _id: _.in(c)
                }).get();

              case 11:
                return p = (p = e.sent).data, s = {}, p.forEach(function(e) {
                    s[e._id] = e.userinfo;
                }), u = [], i.forEach(function(e) {
                    u.push({
                        upload_time: e.upload_time,
                        score: e.score,
                        openid: e.openid,
                        userInfo: s[e.openid] || {}
                    });
                }), p = t + "_" + n.game_id, e.next = 20, collection.where({
                    _id: _.eq(p)
                }).get();

              case 20:
                if (d = e.sent, l = {
                    rank: -1,
                    score: 0,
                    openid: t
                }, d.data && d.data.length) return e.next = 25, collection.where({
                    game_id: _.eq(n.game_id),
                    upload_time: r.upload_time,
                    score: "down" === n.sortType ? _.gte(d.data[0].score) : _.lte(d.data[0].score)
                }).count();
                e.next = 28;
                break;

              case 25:
                p = e.sent, l.rank = p.total, l.score = d.data[0].score;

              case 28:
                if (!s[t]) {
                    e.next = 32;
                    break;
                }
                l.userInfo = s[t], e.next = 36;
                break;

              case 32:
                return e.next = 34, userinfoCollection.where({
                    _id: _.eq(t)
                }).get();

              case 34:
                f = e.sent, l.userInfo = f.data.length ? f.data[0].userinfo : {};

              case 36:
                return e.abrupt("return", {
                    rank_list: u,
                    self_rank: l
                });

              case 37:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(e, t) {
        return n.apply(this, arguments);
    };
}();

exports.main = function() {
    var n = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
        var r, o, a, i, c, s;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.game_id, o = t.count, a = t.sortType, i = t.period, s = cloud.getWXContext(), 
                c = s.OPENID, s.APPID, s.UNIONID, e.next = 4, getScoreRankInfo(c, {
                    game_id: r,
                    count: o,
                    sortType: a,
                    period: i
                });

              case 4:
                return s = e.sent, e.abrupt("return", s);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(e, t) {
        return n.apply(this, arguments);
    };
}();