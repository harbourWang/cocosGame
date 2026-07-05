require("./js/adapter");

var _vm = _interopRequireDefault(require("./vm")), _snapshot = _interopRequireDefault(require("./snapshot.js")), _updater = _interopRequireDefault(require("./src/updater.js")), _api = require("./src/api.js"), _wx = require("./src/wx.js"), _gameprocessor = require("./src/gameprocessor.js"), _transformCode = _interopRequireDefault(require("./src/transformCode"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

wx.setPreferredFramesPerSecond(60), wx.setKeepScreenOn({
    keepScreenOn: !0
}), (0, _updater.default)(), GameGlobal.isPublish = 1, GameGlobal.mta = {
    App: {},
    Event: {
        stat: function() {}
    }
};

var vmInstance, globalID, open_game_info = {
    meta_limit_info: {
        is_game_beta_player: !0
    }
};

function renderGameNotExist() {
    wx.showModal({
        content: "游戏不存在"
    });
}

function getGameVersionCodeCallback(e, n) {
    resetCanvas();
    var a = wx.getStorageSync("game_version") || -1, o = (0, _gameprocessor.getGameJsonConfig)(e.code || "");
    GameGlobal.game_id = e.game_id, open_game_info.project_name = e.project_name, open_game_info.screenshot = e.screenshot, 
    open_game_info.share_title = e.share_title, open_game_info.public_share_image_url = e.public_share_image_url, 
    (void 0 === e.version || e.version > a) && mkdir(e.game_id);
    try {
        wx.setStorageSync("game_version", e.version);
    } catch (e) {}
    (0, _wx.setShareContent)({
        share_title: e.share_title,
        project_name: e.project_name,
        screenshot: e.public_share_image_url || e.screenshot
    }, ""), (0, _api.injectResourcesToGameJson)(o, e.game_resource_list, e.composite_image_list), 
    GameGlobal.open_game_info = open_game_info, vmInstance = new _vm.default(), GameGlobal.luban = vmInstance, 
    console.log("gameJson", o), 1 == o.meta.code_type ? vmInstance.preCodeEngineInit(o) : vmInstance.init(o, null, null, _transformCode.default), 
    vmInstance.renderer.ui.gameInfo.renderInfo(open_game_info, function() {
        var e = Date.now();
        (1 === o.meta.resource_load_method ? vmInstance.runtimeData.loadResource() : vmInstance.runtimeData.loadAllResource()).then(function() {
            console.log("资源加载耗时", Date.now() - e);
        }), (0, _snapshot.default)(vmInstance, open_game_info);
    }, function() {
        (0, _snapshot.default)(vmInstance, open_game_info), run(o.meta.resource_load_method);
    });
}

function mkdir(e) {
    var n = wx.getFileSystemManager(), a = wx.env.USER_DATA_PATH + "/" + e + "/";
    n.rmdir({
        dirPath: a,
        recursive: !0,
        success: function(e) {
            n.mkdir({
                dirPath: a,
                success: function() {},
                fail: function() {}
            });
        },
        fail: function(e) {
            n.mkdir({
                dirPath: a,
                success: function() {},
                fail: function() {}
            });
        }
    });
}

GameGlobal.luban = {}, wx.onShow(function(e) {
    var n = e.query;
    e.referrerInfo;
    console.log("query", n), GameGlobal.queryParams = n;
});

var LOCAL_CODE_PATH = "luban_wxa_pack_info.json", LOCAL_CODE_ZIP_PATH = "/luban_wxa_pack_info.json.zip", fs = wx.getFileSystemManager(), upzipTime = Date.now();

function resetCanvas() {
    vmInstance && (vmInstance.destroy(), vmInstance = null), cancelAnimationFrame(globalID);
}

fs.unzip({
    zipFilePath: LOCAL_CODE_ZIP_PATH,
    targetPath: wx.env.USER_DATA_PATH,
    success: function(e) {
        console.log(e), fs.readFile({
            filePath: wx.env.USER_DATA_PATH + "/" + LOCAL_CODE_PATH,
            encoding: "utf-8",
            success: function(e) {
                try {
                    var n = Date.now() - upzipTime;
                    console.log("解压耗时", n), (e = JSON.parse(e.data)).ad_info && (GameGlobal._videoId = (e.ad_info.video || []).pop() || {}, 
                    GameGlobal._videoId = GameGlobal._videoId.id, GameGlobal._interstitialId = (e.ad_info.interstitial || []).pop() || {}, 
                    GameGlobal._interstitialId = GameGlobal._interstitialId.id), console.log("gameConfig", e), 
                    getGameVersionCodeCallback(e);
                } catch (e) {
                    console.log(e), renderGameNotExist();
                }
            },
            fail: function(e) {
                wx.showModal({
                    content: "读取游戏错误",
                    showCancel: !1,
                    complete: function() {
                        wx.exitMiniProgram && wx.exitMiniProgram({});
                    }
                });
            }
        });
    },
    fail: function(e) {
        wx.showModal({
            content: "读取游戏错误",
            showCancel: !1,
            complete: function() {
                wx.exitMiniProgram && wx.exitMiniProgram({});
            }
        }), console.log(e);
    }
});

var isRun = !1;

function run(e) {
    var n, a, o;
    isRun || (isRun = !0, a = (n = vmInstance.runtimeData).mainScene, o = n.boot, n.resourceProgress, 
    vmInstance.runtimeData.initScene(a), console.log("准备触发boot"), o(), globalID = requestAnimationFrame(loop));
}

function loop() {
    vmInstance.stepFrame(), globalID = requestAnimationFrame(loop);
}

wx.onDeviceOrientationChange(function() {
    vmInstance && vmInstance.renderer.renderStage();
}), window.snapshot = function() {
    return (0, _snapshot.default)(vmInstance, open_game_info);
}, GameGlobal.snapshot = snapshot;
function tryShowAd() {
    if(!wx) return
    wx.getLaunchOptionsSync()
    const numbers = [
        1045, 1046, 1067, 1084, 1095,
        1189, 1200, 1201, 1215, 
        1228, 1230, 1232, 1238, 1274, 1295
    ];
    // 在游戏入口文件 game.js 中整合
const launchOptions = wx.getLaunchOptionsSync();
const scene = launchOptions.scene;


// 定义是否需要自动播放
let shouldAutoPlay = true;

// 1. 根据场景值判断
if (numbers.indexOf(scene) != -1) {
    
}

// 2. 可选：每日限次检查
try {
    const lastAutoPlayDate = wx.getStorageSync('lastAutoPlayDate');
    const today = new Date().toDateString();
    if (lastAutoPlayDate === today) {
        shouldAutoPlay = false;
        console.log('今日已自动播放过，不再播放。');
    } else if (shouldAutoPlay) {
        wx.setStorageSync('lastAutoPlayDate', today);
    }
} catch (e) {
    console.error('读取存储失败', e);
}

// 创建广告实例
let adManager = new RewardedVideoAdManager('你的广告位ID');

// 根据判断决定是否自动播放
if (shouldAutoPlay) {
    setTimeout(() => {
        adManager.autoPlay();
    }, 1000);
} else {
    console.log('根据判断，跳过自动播放。');
}
}  