var Strings = require("js/common/string"), App = getApp(), COMMANDMAPS = {
    jump: function(n) {
        wx.navigateTo({
            url: n
        });
    },
    report: function(n) {
        App.report(n);
    }
};

module.exports = {
    get: function(n) {
        return n && COMMANDMAPS[n] ? COMMANDMAPS[n] : function() {};
    }
};