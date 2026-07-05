var _config = _interopRequireDefault(require("./config.js")), _render = _interopRequireDefault(require("./render.js")), _data = require("./data.js"), _draw = require("./draw.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var postType, cacheUserData, userinfo, selfData, currentScore, postTypeMap = _config.default.postTypeMap, gameid = "", currentMaxScore = 0, cacheRankData = [];

function loadFriendDataAndRender(e, r) {
    (0, _data.getFriendData)(e, function(e) {
        var a = (0, _data.findSelf)(e, r);
        (selfData = a.self) ? void 0 !== currentScore && currentScore > selfData.score && (e = (0, 
        _data.replaceSelfDataInList)(e, r, currentMaxScore, _render.default.sort)) : selfData = (0, 
        _data.injectSelfToList)(e, r, currentMaxScore), cacheRankData = e, _render.default.draw(e, selfData, void 0 === currentScore ? selfData.score : currentScore);
    });
}

wx.onMessage(function(e) {
    console.log("主域Post数据", e), postType = e.postType, gameid = (cacheUserData = e).gameid, 
    postType === postTypeMap.init ? (cacheRankData = [], currentScore = void (currentMaxScore = 0), 
    _render.default.initRender(), userinfo = selfData = null) : postType === postTypeMap.friendRank ? (cacheRankData && cacheRankData.length && (userinfo && currentScore && (cacheRankData = (0, 
    _data.replaceSelfDataInList)(cacheRankData, userinfo, currentScore, _render.default.sort)), 
    _render.default.draw(cacheRankData, selfData, currentScore)), userinfo ? loadFriendDataAndRender(gameid, userinfo) : (0, 
    _data.getUserInfo)(function(e) {
        loadFriendDataAndRender(gameid, userinfo = e);
    })) : postType === postTypeMap.report ? (currentMaxScore = e.score, currentScore = e.score, 
    _render.default.setSelfTitle("本次成绩"), (0, _data.setUserRecord)(gameid, e, _render.default.startTime, _render.default.period)) : postType === postTypeMap.setTitle ? _render.default.setTitle(e.value) : postType === postTypeMap.setUnit ? _render.default.setUnit(e.value) : postType === postTypeMap.setSort ? _render.default.setSort(e.value) : postType === postTypeMap.setPeriod ? _render.default.setPeriod(e.value) : postType === postTypeMap.close && _render.default.touch.disable();
});