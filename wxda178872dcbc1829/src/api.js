Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.addComment = addComment, exports.cancelLikedProject = cancelLikedProject, 
exports.checkUseLiked = checkUseLiked, exports.deleteComment = deleteComment, exports.genleaderboardconf = genleaderboardconf, 
exports.getAllGameList = getAllGameList, exports.getAuthorGameList = getAuthorGameList, 
exports.getCommentList = getCommentList, exports.getGameIDByScene = getGameIDByScene, 
exports.getGameOperationCodeInfo = getGameOperationCodeInfo, exports.getGameVersionCode = getGameVersionCode, 
exports.getGameVersioninfo = getGameVersioninfo, exports.getLikedProject = getLikedProject, 
exports.getPublicGameCode = getPublicGameCode, exports.getPublicGameMeta = getPublicGameMeta, 
exports.getSelfProject = getSelfProject, exports.getUserInfo = getUserInfo, exports.gettoprank = gettoprank, 
exports.injectResourcesToGameJson = injectResourcesToGameJson, exports.likeGame = likeGame, 
exports.updateleaderboard = updateleaderboard;

var _injectResourcesToGameJson = require("./injectResourcesToGameJson.js"), login = require("./welogin.js"), app = {}, DOMAIN = "https://gamemaker.weixin.qq.com", Config = {
    appid: "wx722e01aaedff584c"
};

function genleaderboardconf() {
    app.request({
        url: "https://game.weixin.qq.com/cgi-bin/gameleaderboardwap/genleaderboardconf",
        data: {
            leaderboard_type: 0,
            leaderboard_threshold: 0
        },
        method: "POST",
        success: function(e) {},
        fail: function(e) {}
    });
}

function updateleaderboard(e, t) {
    app.request({
        url: "https://game.weixin.qq.com/cgi-bin/gameleaderboardwap/updateleaderboard",
        data: {
            leaderboardid: e,
            score: t
        },
        method: "POST",
        success: function(e) {},
        fail: function(e) {}
    });
}

function gettoprank(e, t) {
    app.request({
        url: "https://game.weixin.qq.com/cgi-bin/gameleaderboardwap/gettoprank",
        data: {
            leaderboardid: e,
            index: 0,
            limit: 100,
            with_self: !0
        },
        method: "GET",
        success: function(e) {
            t && t(e.data);
        },
        fail: function(e) {}
    });
}

function injectResourcesToGameJson(a, n, e, o) {
    var t, i = a.styles || {}, c = (0, _injectResourcesToGameJson.findSpriteSheetList)(e);
    for (t in i) (i[t].frame || []).forEach(function(t) {
        var e = n.find(function(e) {
            return e.blob_id === t.id;
        });
        e && (t.url = e.cdn_url, !o) || (t.url = app.addLoginToRequest(t.url)), a.pack_list && e && e.blob_id && c[e.blob_id] && (t.is_pack = !0);
    });
    var r, s = a.sounds || {};
    for (r in s) !function(t) {
        var e = n.find(function(e) {
            return e.refer_id === s[t].url;
        });
        e ? /^http/.test(e.cdn_url) ? s[t].url = e.cdn_url : s[t].url = app.addLoginToRequest(s[t].url) : /^\/cgi-bin/.test(s[t].url) && (s[t].url = app.addLoginToRequest(s[t].url));
    }(r);
}

function getGameVersioninfo(e, t, a) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getgameversioninfo",
        data: {
            game_id: e,
            local_version: t
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            0 === e.errcode ? a && a(e.data || {}) : wx.showToast({
                title: "网络错误",
                icon: "none"
            });
        }
    });
}

login.prepare(app, Config);

var LOCAL_INFO_PATH = "game_info.json";

function getGameOperationCodeInfo(t, a) {
    var n = new Date();
    wx.getFileSystemManager().readFile({
        filePath: LOCAL_INFO_PATH,
        encoding: "utf-8",
        success: function(e) {
            a && a(JSON.parse(e.data), new Date() - n);
        },
        fail: function(e) {
            app.request({
                url: DOMAIN + "/cgi-bin/gamelubanplaywap/getgameoperationcodeinfo",
                data: {
                    id: t
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    a && a(e, new Date() - n);
                }
            });
        }
    });
}

function getGameVersionCode(e, t, a, n) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getgameversioncode",
        data: {
            game_id: e,
            version: t,
            release_type: a
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            n && n(e);
        }
    });
}

function getPublicGameMeta(e, t) {
    var a = new Date();
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getprojectmeta",
        data: {
            game_id: e
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e, new Date() - a);
        }
    });
}

function getPublicGameCode(e, t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getprojectversion",
        data: {
            game_id: e
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function checkUseLiked(e, t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/checkuserliked",
        data: {
            game_id: e
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function likeGame(e, t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/likeproject",
        data: {
            game_id: e
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function cancelLikedProject(e, t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/cancellikedproject",
        data: {
            game_id: e
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function getLikedProject(t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getlikedproject",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function getSelfProject(t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getprojectlist",
        data: {
            space_type_bits: 2
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function getAuthorGameList(e, t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getauthmoreprojectmeta",
        data: {
            game_id: e
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function getAllGameList(t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getcommunitygamelist",
        data: {
            game_type: 7
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            console.log(e, "getcommunitygamelist"), t && t(e);
        }
    });
}

function getGameIDByScene(e, t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getgameidbyscene",
        data: {
            id: e
        },
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function getUserInfo(t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getloginuserinfo",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function addComment(e, t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/addcomment",
        data: {
            add_comment_req: e
        },
        method: "POST",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function getCommentList(e, t) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/getcommentlist",
        data: {
            get_comment_req: {
                content_id: e.content_id || e.game_id,
                offset: e.offset || 0,
                limit: e.limit || 3,
                first_page_visit_time: e.first_page_visit_time,
                game_id: e.game_id,
                scene: 0
            }
        },
        method: "POST",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            t && t(e);
        }
    });
}

function deleteComment(e, t, a) {
    app.request({
        url: DOMAIN + "/cgi-bin/gamelubanplaywap/deletecomment",
        data: {
            delete_comment_req: {
                content_id: e,
                game_id: t
            }
        },
        method: "POST",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            a && a(e);
        }
    });
}