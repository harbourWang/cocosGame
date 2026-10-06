var Promise = require("../libs/Promise"), SESSION_KEY = "__session", NET = require("./net"), Util = require("./util"), Login = {
    loginWXGame: function(i) {
        return new Promise(function(e, n) {
            console.log(JSON.stringify({
                code: i,
                weapp_type: 1
            })), NET.request({
                url: "https://game.weixin.qq.com/cgi-bin/gameweappwap/login",
                data: JSON.stringify({
                    code: i,
                    weapp_type: 1
                }),
                method: "POST",
                header: {
                    "content-type": "application/json"
                },
                success: e,
                fail: n
            });
        });
    },
    checkWXLogin: function(n) {
        var i = this;
        wx.checkSession({
            success: function() {
                var e = Util.getKeyValue(SESSION_KEY) || {};
                e.errcode === NET.OK ? (i.session = e, "function" == typeof n && n(e)) : i.loginWX(n);
            },
            fail: function(e) {
                i.loginWX(n);
            }
        });
    },
    loginWX: function(n) {
        var i = this;
        wx.login({
            success: function(e) {
                (e = e || {}).code ? i.loginWXGame(e.code).then(function(e) {
                    e = e || {}, wx.setStorageSync(SESSION_KEY, e), "function" == typeof n && n(e);
                }) : (result.errcode = NET.SYSTEM_NOT_SUPPORT, "function" == typeof n && n(result)), 
                i.session = e;
            },
            fail: function(e) {
                e = {
                    res: e || {},
                    errcode: NET.USER_AUTH_REJECT,
                    errmsg: "login rejected by user"
                };
                "function" == typeof n && n(e), i.session = e;
            }
        });
    }
};

module.exports = Login;