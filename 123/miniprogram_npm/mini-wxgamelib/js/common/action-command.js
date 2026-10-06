var Strings = require("js/common/string"), App = getApp(), COMMANDMAPS = {
    jump: function(t) {
        wx.navigateTo({
            url: t
        });
    },
    report: function(t) {
        App.report(t);
    }
};

module.exports = {
    get: function(t) {
        return t && COMMANDMAPS[t] ? COMMANDMAPS[t] : function() {};
    }
};