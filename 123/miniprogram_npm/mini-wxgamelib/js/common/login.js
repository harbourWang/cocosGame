var Login = {
    loginWX: function(e) {
        wx.login({
            success: function(n) {
                n && n.code ? e && e({
                    code: n.code,
                    errcode: 0,
                    errMsg: n.errMsg
                }) : e && e({
                    errcode: -1,
                    errmsg: "wx.login returned no code",
                    res: n
                });
            },
            fail: function(n) {
                e && e({
                    errcode: -1,
                    errmsg: n && n.errMsg || "wx.login failed",
                    res: n
                });
            }
        });
    },
    checkWXLogin: function(e) {
        this.loginWX(e);
    }
};

module.exports = Login;
