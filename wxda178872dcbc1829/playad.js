try { if (typeof GameGlobal !== "undefined") GameGlobal.__PLAYAD_FILE_EXECUTED__ = true; console.error("[playad] file executed"); } catch(e) {}
/*
 * playad.js
 * 微信小游戏广告进度面板：点击按钮增加进度，进度太慢自动播放激励视频。
 * 面板使用 PIXI 直接画在游戏最上层，图片来自 img/adimg。
 */
(function () {
    "use strict";

    var PIXI;
    try {
        PIXI = require("pixi.js");
    } catch (e) {
        console.error("[playad] require pixi.js failed", e);
        return;
    }

    var G = typeof GameGlobal !== "undefined" ? GameGlobal : (typeof window !== "undefined" ? window : {});
    var W = typeof wx !== "undefined" ? wx : null;

    var CFG = {
        bg: "img/adimg/tile_001.png",
        icon: "img/adimg/tile_004.png",
        button: "img/adimg/tile_006.png",
        adUnitId: "adunit-8cf11ddb3cc89440",              // 默认读取 GameGlobal._videoId；需要固定广告位可填这里
        autoShow: true,
        autoShowDelay: 800,
        max: 100,
        clickAdd: 14,
        decayPerSecond: 4,
        slowNoClickMs: 3000,
        slowMinSpeed: 6,
        slowCheckMs: 4500,
        completeHideMs: 500,
        playAdOnComplete: true
    };

    var S = {
        inited: false,
        hooked: false,
        visible: false,
        completed: false,
        adShowing: false,
        adPlayed: false,
        progress: 0,
        firstClickAt: 0,
        lastClickAt: 0,
        lastTickAt: 0,
        lastTapAt: 0,
        timer: null,
        autoTimer: null,
        app: null,
        root: null,
        panel: null,
        rect: null,
        ad: null,
        ui: {}
    };

    function log() {
        try {
            var args = Array.prototype.slice.call(arguments);
            args.unshift("[playad]");
            console.log.apply(console, args);
        } catch (e) {}
    }

    function now() { return Date.now ? Date.now() : +new Date(); }
    function clamp(v) { v = Number(v) || 0; return Math.max(0, Math.min(CFG.max, v)); }

    function getApp() {
        var luban = G && G.luban;
        if (!luban || !luban.renderer || !luban.renderer._Container || !luban.renderer.renderStage) return null;
        return luban.renderer;
    }

    function getDpr() {
        try { return (W && W.getSystemInfoSync && W.getSystemInfoSync().pixelRatio) || 2; } catch (e) { return 2; }
    }

    function getSize(app) {
        var sys;
        try { sys = W && W.getSystemInfoSync ? W.getSystemInfoSync() : null; } catch (e) {}
        var dpr = getDpr();
        return {
            dpr: dpr,
            w: app && app.gameWidth || app && app.renderer && app.renderer.width || ((sys && sys.windowWidth) || 375) * dpr,
            h: app && app.gameHeight || app && app.renderer && app.renderer.height || ((sys && sys.windowHeight) || 667) * dpr,
            sw: (sys && sys.windowWidth) || 375,
            sh: (sys && sys.windowHeight) || 667
        };
    }

    function makeSprite(path) {
        try {
            if (PIXI.Sprite.from) return PIXI.Sprite.from(path);
            if (PIXI.Sprite.fromImage) return PIXI.Sprite.fromImage(path);
            if (PIXI.Texture && PIXI.Texture.from) return new PIXI.Sprite(PIXI.Texture.from(path));
            if (PIXI.Texture && PIXI.Texture.fromImage) return new PIXI.Sprite(PIXI.Texture.fromImage(path));
        } catch (e) {
            console.error("[playad] 图片创建失败", path, e);
        }
        return null;
    }

    function makeText(text, size, color, bold) {
        return new PIXI.Text(text, {
            fontFamily: "Arial",
            fontSize: size,
            fontWeight: bold ? "bold" : "normal",
            fill: color,
            align: "center"
        });
    }

    function rr(g, color, alpha, x, y, w, h, r) {
        g.clear();
        g.beginFill(color, alpha == null ? 1 : alpha);
        g.drawRoundedRect(x, y, w, h, r || 12);
        g.endFill();
    }

    function setText(t, v) { if (t) t.text = v; }

    function drawProgress() {
        if (!S.ui.fill || !S.ui.percent) return;
        var bw = S.rect.bw, bh = S.rect.bh;
        rr(S.ui.fill, 0xffd54a, 1, 0, 0, bw * S.progress / CFG.max, bh, bh / 2);
        S.ui.percent.text = Math.floor(S.progress) + "%";
        S.ui.percent.x = S.rect.barX + bw / 2 - S.ui.percent.width / 2;
    }

    function setProgress(v) {
        S.progress = clamp(v);
        drawProgress();
    }

    function ensurePanel() {
        var app = getApp();
        if (!app) return false;

        S.app = app;
        S.root = app._Container;

        if (!S.panel) {
            createPanel(app);
            bindTouch();
            log("panel created");
        }

        if (S.panel.parent !== S.root) {
            S.root.addChild(S.panel);
        }
        // 每帧都放到最上面，避免被游戏场景盖住
        if (S.root.children && S.root.children[S.root.children.length - 1] !== S.panel) {
            S.root.addChild(S.panel);
        }
        return true;
    }

    function createPanel(app) {
        var size = getSize(app);
        var w = size.w, h = size.h;
        var pw = Math.min(w * 0.88, 650);
        var ph = Math.max(260, pw * 345 / 814);
        var px = (w - pw) / 2;
        var py = h * 0.52 - ph / 2;

        S.rect = {
            x: px,
            y: py,
            w: pw,
            h: ph,
            btnX: px + pw * 0.64 - pw * 0.42 / 2,
            btnY: py + ph * 0.78 - (pw * 0.42 * 137 / 405) / 2,
            btnW: pw * 0.42,
            btnH: pw * 0.42 * 137 / 405,
            barX: pw * 0.32,
            barY: ph * 0.47,
            bw: pw * 0.62,
            bh: 24,
            dpr: size.dpr
        };

        var p = new PIXI.Container();
        p.name = "playad_panel";
        p.visible = false;
        p.interactive = false;
        p.x = px;
        p.y = py;

        // 全屏背景蒙版：panel 本身放在面板位置(px, py)，所以蒙版用负坐标铺满整个游戏画布
        var mask = new PIXI.Graphics();
        mask.beginFill(0x000000, 0.65);
        mask.drawRect(-px, -py, w, h);
        mask.endFill();
        p.addChild(mask);

        // 兜底阴影/底板：即使图片没加载，也一定能看到面板
        var shadow = new PIXI.Graphics();
        rr(shadow, 0x000000, 0.28, -10, -10, pw + 20, ph + 20, 26);
        p.addChild(shadow);

        var bg = makeSprite(CFG.bg);
        if (bg) {
            bg.width = pw;
            bg.height = ph;
            p.addChild(bg);
        } else {
            var bg2 = new PIXI.Graphics();
            rr(bg2, 0x2d8cff, 1, 0, 0, pw, ph, 24);
            p.addChild(bg2);
        }

        var icon = makeSprite(CFG.icon);
        if (icon) {
            icon.width = pw * 0.23;
            icon.height = icon.width * 277 / 330;
            icon.x = pw * 0.06;
            icon.y = ph * 0.18;
            p.addChild(icon);
        }

        var title = makeText("点击加速", Math.max(30, pw * 0.055), 0xffffff, true);
        title.x = pw * 0.36;
        title.y = ph * 0.13;
        p.addChild(title);

        var tip = makeText("连续点击按钮增加进度", Math.max(20, pw * 0.032), 0xffffff, false);
        tip.x = pw * 0.36;
        tip.y = ph * 0.30;
        p.addChild(tip);

        var barBg = new PIXI.Graphics();
        rr(barBg, 0x1b1b1b, 0.75, 0, 0, S.rect.bw, S.rect.bh, S.rect.bh / 2);
        barBg.x = S.rect.barX;
        barBg.y = S.rect.barY;
        p.addChild(barBg);

        var fill = new PIXI.Graphics();
        fill.x = S.rect.barX;
        fill.y = S.rect.barY;
        p.addChild(fill);

        var percent = makeText("0%", Math.max(16, pw * 0.028), 0x5a3200, true);
        percent.y = S.rect.barY + S.rect.bh / 2 - percent.height / 2;
        p.addChild(percent);

        var btn = makeSprite(CFG.button);
        if (btn) {
            btn.width = S.rect.btnW;
            btn.height = S.rect.btnH;
            btn.x = pw * 0.64 - S.rect.btnW / 2;
            btn.y = ph * 0.78 - S.rect.btnH / 2;
            p.addChild(btn);
        } else {
            var btn2 = new PIXI.Graphics();
            rr(btn2, 0xff7a00, 1, pw * 0.64 - S.rect.btnW / 2, ph * 0.78 - S.rect.btnH / 2, S.rect.btnW, S.rect.btnH, 20);
            p.addChild(btn2);
        }

        var btnText = makeText("点 击", Math.max(26, pw * 0.045), 0xffffff, true);
        btnText.x = pw * 0.64 - btnText.width / 2;
        btnText.y = ph * 0.78 - btnText.height / 2;
        p.addChild(btnText);

        S.panel = p;
        S.ui.mask = mask;
        S.ui.tip = tip;
        S.ui.fill = fill;
        S.ui.percent = percent;
        S.ui.btnText = btnText;
        setProgress(0);
    }

    function hookRender() {
        var app = getApp();
        if (!app || app.__playadHooked) return false;
        var old = app.renderStage;
        app.renderStage = function () {
            ensurePanel();
            return old.apply(this, arguments);
        };
        app.__playadHooked = true;
        S.hooked = true;
        log("renderStage hooked");
        return true;
    }

    function bindTouch() {
        if (!W || !W.onTouchEnd || S.touchBinded) return;
        S.touchBinded = true;
        W.onTouchEnd(function (e) {
            if (!S.visible || S.completed || S.adShowing || !S.rect) return;
            var t = now();
            if (t - S.lastTapAt < 80) return;
            var touch = e && e.changedTouches && e.changedTouches[0] || e && e.touches && e.touches[0];
            if (!touch) return;
            var x = touch.clientX * S.rect.dpr;
            var y = touch.clientY * S.rect.dpr;
            if (x >= S.rect.btnX && x <= S.rect.btnX + S.rect.btnW && y >= S.rect.btnY && y <= S.rect.btnY + S.rect.btnH) {
                S.lastTapAt = t;
                clickAdd();
            }
        });
    }

    function clickAdd() {
        var t = now();
        if (!S.firstClickAt) S.firstClickAt = t;
        S.lastClickAt = t;
        setProgress(S.progress + CFG.clickAdd);
        if (S.progress >= CFG.max) {
            onProgressFull("complete");
        } else {
            setText(S.ui.tip, "\u7ee7\u7eed\u70b9\u51fb\uff0c\u8fdb\u5ea6\u6ee1\u5373\u53ef\u5f00\u59cb");
        }
        renderOnce();
    }

    function renderOnce() {
        try { if (S.app && S.app.renderStage) S.app.renderStage(); } catch (e) {}
    }

    function reset() {
        S.completed = false;
        S.adShowing = false;
        S.adPlayed = false;
        S.progress = 0;
        S.firstClickAt = 0;
        S.lastClickAt = 0;
        S.lastTickAt = now();
        setText(S.ui.tip, "连续点击按钮增加进度");
        setProgress(0);
    }

    function show() {
        if (!ensurePanel()) {
            log("show failed: renderer not ready");
            return false;
        }
        reset();
        S.visible = true;
        S.panel.visible = true;
        ensurePanel();
        startTick();
        renderOnce();
        log("panel show");
        return true;
    }

    function hide() {
        S.visible = false;
        if (S.panel) S.panel.visible = false;
        stopTick();
        renderOnce();
    }

    function startTick() {
        stopTick();
        S.lastTickAt = now();
        S.timer = setInterval(function () {
            if (!S.visible || S.completed || S.adShowing) return;
            var t = now();
            var dt = Math.max(0, t - S.lastTickAt) / 1000;
            S.lastTickAt = t;
            if (S.progress > 0) setProgress(S.progress - CFG.decayPerSecond * dt);

            if (S.firstClickAt && !S.adPlayed) {
                var inactive = t - S.lastClickAt;
                var elapsed = t - S.firstClickAt;
                var speed = elapsed > 0 ? S.progress / (elapsed / 1000) : 999;
                if (inactive >= CFG.slowNoClickMs || (elapsed >= CFG.slowCheckMs && speed < CFG.slowMinSpeed)) {
                    setText(S.ui.tip, "进度太慢，准备播放广告");
                    playAd("slow");
                }
            }
            renderOnce();
        }, 200);
    }

    function stopTick() {
        if (S.timer) clearInterval(S.timer);
        S.timer = null;
    }

    function onProgressFull(reason) {
        if (S.completed || S.adShowing) return;
        setProgress(CFG.max);
        if (CFG.playAdOnComplete !== false && !S.adPlayed) {
            setText(S.ui.tip, "\u8fdb\u5ea6\u5df2\u6ee1\uff0c\u51c6\u5907\u64ad\u653e\u5e7f\u544a");
            renderOnce();
            playAd(reason || "complete");
            return;
        }
        complete();
    }

    function complete() {
        if (S.completed) return;
        S.completed = true;
        setText(S.ui.tip, "\u5b8c\u6210\uff01");
        setTimeout(hide, CFG.completeHideMs);
    }

    function getAdUnitId() {
        return CFG.adUnitId || G._videoId || (typeof window !== "undefined" && window._videoId) || "";
    }

    function getAd() {
        if (S.ad) return S.ad;
        var id = getAdUnitId();
        if (!W || !W.createRewardedVideoAd || !id) return null;
        try {
            S.ad = W.createRewardedVideoAd({ adUnitId: id });
            S.ad.onError(function (err) {
                S.adShowing = false;
                console.error("[playad] ad error", err);
            });
            return S.ad;
        } catch (e) {
            console.error("[playad] create ad failed", e);
            return null;
        }
    }

    function playAd(reason) {
        if (S.adShowing || S.adPlayed || S.completed) return;
        S.adPlayed = true;
        var ad = getAd();
        if (!ad) {
            log("no ad, skip", reason);
            S.lastClickAt = now();
            if (reason === "complete" || reason === "api") complete();
            return;
        }
        S.adShowing = true;
        var close = function (res) {
            S.adShowing = false;
            if (ad.offClose) ad.offClose(close);
            if (!res || res.isEnded) {
                setProgress(CFG.max);
                complete();
            } else {
                S.lastClickAt = now();
                setText(S.ui.tip, "继续点击，进度满即可开始");
            }
            renderOnce();
        };
        ad.onClose(close);
        Promise.resolve().then(function () {
            return ad.load ? ad.load() : null;
        }).then(function () {
            return ad.show();
        }).catch(function (err) {
            S.adShowing = false;
            if (ad.offClose) ad.offClose(close);
            console.error("[playad] show ad failed", err);
            setText(S.ui.tip, "\u5e7f\u544a\u6682\u4e0d\u53ef\u7528\uff0c\u8bf7\u7ee7\u7eed\u70b9\u51fb");
            if (reason === "complete" || reason === "api") complete();
            renderOnce();
        });
    }

    function install(opt) {
        if (opt) for (var k in opt) CFG[k] = opt[k];
        if (S.inited) return;
        S.inited = true;
        log("install");
        var wait = setInterval(function () {
            var ready = ensurePanel();
            hookRender();
            if (ready && CFG.autoShow && !S.autoTimer) {
                S.autoTimer = setTimeout(show, CFG.autoShowDelay);
            }
        }, 300);
        // 不清除 wait：持续保证面板挂在当前最新容器上。
        S.wait = wait;
    }

    var api = {
        install: install,
        show: show,
        hide: hide,
        playAd: playAd,
        addProgress: function (v) {
            if (!S.visible) show();
            setProgress(S.progress + (Number(v) || CFG.clickAdd));
            if (S.progress >= CFG.max) onProgressFull("api");
            renderOnce();
        },
        configure: function (opt) { if (opt) for (var k in opt) CFG[k] = opt[k]; return api; },
        _state: S,
        _config: CFG
    };

    G.PlayAdPanel = api;
    if (typeof window !== "undefined") window.PlayAdPanel = api;
    if (typeof module !== "undefined" && module.exports) module.exports = api;

    install();
})();

