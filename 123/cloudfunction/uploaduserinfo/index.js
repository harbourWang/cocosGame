function asyncGeneratorStep(e, r, n, t, o, a, u) {
    try {
        var c = e[a](u), s = c.value;
    } catch (e) {
        return void n(e);
    }
    c.done ? r(s) : Promise.resolve(s).then(t, o);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, n) {
            var t = c.apply(e, u);
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

var cloud = require("wx-server-sdk"), db = (cloud.init(), cloud.database()), collection = db.collection("userinfo"), _ = db.command, uploadUserInfo = function() {
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
                    msg: "错误，用户信息为空"
                });

              case 2:
                return t = r, e.next = 5, collection.doc(t).set({
                    data: {
                        userinfo: n,
                        upload_time: db.serverDate()
                    }
                });

              case 5:
                return e.sent, e.abrupt("return", {
                    errcode: 0,
                    msg: "上传成功"
                });

              case 7:
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
                return t = r.data, a = cloud.getWXContext(), o = a.OPENID, a.APPID, a.UNIONID, e.next = 4, 
                uploadUserInfo(o, t);

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