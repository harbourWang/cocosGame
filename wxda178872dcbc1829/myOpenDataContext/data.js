function none() {}

function getUserInfo() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : none;
    wx.getUserInfo({
        openIdList: [ "selfOpenId" ],
        lang: "zh_CN",
        success: function(e) {
            console.log("getUserInfo", e), t(e.data[0] || {});
        },
        fail: function(e) {
            console.log("getUserInfo error", e), t({});
        }
    });
}

function getDataFromSource(t) {
    var r;
    try {
        r = JSON.parse(t.KVDataList[0].value);
    } catch (e) {
        r = {
            wxgame: {
                score: t.KVDataList[1] && t.KVDataList[1].value || 0,
                update_time: getCurrTime()
            }
        };
    }
    return r.wxgame;
}

function findSelf(e, a) {
    var n = {
        index: -1,
        self: null
    };
    return e.forEach(function(e, t) {
        var r;
        e.avatarUrl === a.avatarUrl && (r = (e = getDataFromSource(n.self = e)).score, e = e.update_time, 
        n.self.score = r, n.self.update_time = e, n.index = t);
    }), n;
}

function injectSelfToList(e, t, r) {
    r = {
        rank: 1,
        score: r,
        avatarUrl: t.avatarUrl,
        nickname: t.nickname || t.nickName
    };
    return e.push(r), e.sort(function(e, t) {
        return t.score - e.score;
    }), e.forEach(function(e, t) {
        return e.rank = t + 1;
    }), r;
}

function replaceSelfDataInList(e, t, r, a) {
    return e.forEach(function(e) {
        e.avatarUrl === t.avatarUrl && ("up" === a ? r < e.score : r > e.score) && (e.score = r);
    }), e.sort(function(e, t) {
        return t.score - e.score;
    }), e.forEach(function(e, t) {
        return e.rank = t + 1;
    }), e;
}

function getFriendData(e) {
    var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : none, u = new Date();
    wx.getFriendCloudStorage({
        keyList: [ e + "_score", e + "_game_score" ],
        success: function(e) {
            console.log("getFriendData cost", new Date() - u, e), e.data = e.data.filter(function(e) {
                return e.KVDataList.length;
            });
            for (var t = [], r = 0; r < e.data.length; r++) {
                var a = e.data[r], n = getDataFromSource(a), o = n.score, n = n.update_time;
                a.score = o, a.update_time = n, t.push(a);
            }
            t.sort(function(e, t) {
                return t.score - e.score;
            });
            for (var s = 0; s < t.length; s++) t[s].rank = s + 1, t[s].check = !0;
            c(t);
        },
        fail: function(e) {
            console.error(e);
        }
    });
}

function getCurrTime() {
    return parseInt(+new Date() / 1e3);
}

function setUserRecord(r, e, t, a) {
    var n, o, s, c = e.score;
    null != c && (n = getCurrTime(), o = 0, wx.getUserCloudStorage({
        keyList: [ r + "_score", r + "_game_score" ],
        success: function(e) {
            var t;
            0 < e.KVDataList.length && (t = (e = getDataFromSource(e)).score, e = e.update_time, 
            o = t, s = e), (o < c || s && updateByTime(n, s, a)) && wx.setUserCloudStorage({
                KVDataList: [ {
                    key: r + "_score",
                    value: JSON.stringify({
                        wxgame: {
                            score: c,
                            update_time: n
                        }
                    })
                }, {
                    key: r + "_game_score",
                    value: c + ""
                }, {
                    key: "update_time",
                    value: n + ""
                } ],
                success: function(e) {
                    console.log("写用户数据成功", e);
                },
                fail: function(e) {
                    console.error("写用户数据失败", e);
                }
            });
        },
        fail: function(e) {
            console.error("获取用户数据失败", e);
        }
    }));
}

function updateByTime(e, t, r) {
    var a = new Date(1e3 * e), n = a.getFullYear(), o = a.getMonth(), s = a.getDate(), a = new Date(1e3 * t), c = a.getFullYear(), u = a.getMonth(), i = a.getDate();
    switch (r) {
      case "week":
        return t < e && !isSameWeek(1e3 * e, 1e3 * t);

      case "month":
        return t < e && (u < o || c < n);

      case "day":
        return t < e && (i < s || u < o || c < n);

      default:
        return !1;
    }
}

function isSameWeek(e, t) {
    e = new Date(e).setHours(0, 0, 0, 0), t = new Date(t).setHours(0, 0, 0, 0), e = parseInt(e / 864e5), 
    t = parseInt(t / 864e5);
    return parseInt((e + 4) / 7) == parseInt((t + 4) / 7);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.findSelf = findSelf, exports.getCurrTime = getCurrTime, exports.getDataFromSource = getDataFromSource, 
exports.getFriendData = getFriendData, exports.getUserInfo = getUserInfo, exports.injectSelfToList = injectSelfToList, 
exports.replaceSelfDataInList = replaceSelfDataInList, exports.setUserRecord = setUserRecord;