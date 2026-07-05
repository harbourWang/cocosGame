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
        barBg: "img/adimg/tile_011.png",
        barFill: "img/adimg/tile_012.png",
        adUnitId: "adunit-8cf11ddb3cc89440",              // 默认读取 GameGlobal._videoId；需要固定广告位可填这里
        autoShow: true,
        autoShowDelay: 800,
        max: 100,
        clickAdd: 14,
        decayPerSecond: 4,
        slowNoClickMs: 3000,
        slowMinSpeed: 6,
        slowCheckMs: 4500,
        completeHideMs: 0,
        playAdOnComplete: true
    };

    // ================= UI CONFIG START =================
    // ?????????????
    // scale??????1 ???????????0.8 ???1.2 ???
    // x?????????????y?????????????
    var UI_CONFIG = {
        scale: 1,
        offsetX: 0,
        offsetY: 0,
        groupHeight: 537,
        maskAlpha: 0.72,
        background: { w: 570, h: 260, x: 0, y: -330 },
        chest: { w: 312, h: 258, x: 0, y: 100},
        glow: { enabled: true, radiusScale: 0.68, alpha: 0.95, speed: 1.8 },
        title: { text: "\u72C2\u70B9\u6253\u5F00\u5B9D\u7BB1", x: 0, y: -70, fontSize: 41, color: 0xffffff, bold: true },
        progress: { w: 470, h: 43, fillH: 40, x: 0, y: 550, nineSlice: { left: 20, top: 12, right: 20, bottom: 12 } },
        percent: { yOffset: 0, fontSize: 22, color: 0x5a3200, bold: true },
        button: { w: 322, h: 127, x: 0, y: 620 }
    };
    // ================== UI CONFIG END ==================

    function mergeConfig(target, src) {
        if (!src) return target;
        for (var k in src) {
            if (!src.hasOwnProperty(k)) continue;
            if (src[k] && typeof src[k] === "object" && !Array.isArray(src[k])) {
                if (!target[k] || typeof target[k] !== "object") target[k] = {};
                mergeConfig(target[k], src[k]);
            } else {
                target[k] = src[k];
            }
        }
        return target;
    }

    var S = {
        inited: false,
        hooked: false,
        visible: false,
        suspendPanel: false,
        completed: false,
        adShowing: false,
        adPlayed: false,
        progress: 0,
        firstClickAt: 0,
        lastClickAt: 0,
        lastTickAt: 0,
        lastTapAt: 0,
        lastGlowAt: 0,
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
        var winW = ((sys && sys.windowWidth) || 375) * dpr;
        var winH = ((sys && sys.windowHeight) || 667) * dpr;
        var canvasW = 0, canvasH = 0;
        try {
            var c = (typeof canvas !== "undefined" && canvas) || G.canvas || (app && app.view);
            canvasW = (c && (c.width || c.clientWidth * dpr)) || 0;
            canvasH = (c && (c.height || c.clientHeight * dpr)) || 0;
        } catch (e) {}
        var rendererW = app && (app.gameWidth || app.width || app.screen && app.screen.width || app.view && app.view.width) || 0;
        var rendererH = app && (app.gameHeight || app.height || app.screen && app.screen.height || app.view && app.view.height) || 0;
        return {
            dpr: dpr,
            // ?????????????????????????? canvas?
            w: Math.max(rendererW, canvasW, winW),
            h: Math.max(rendererH, canvasH, winH),
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

    function makeTexture(path) {
        try {
            if (PIXI.Texture && PIXI.Texture.from) return PIXI.Texture.from(path);
            if (PIXI.Texture && PIXI.Texture.fromImage) return PIXI.Texture.fromImage(path);
        } catch (e) {
            console.error("[playad] texture create failed", path, e);
        }
        return null;
    }

    function makeNineSlice(path, left, top, right, bottom) {
        var tex = makeTexture(path);
        if (!tex) return makeSprite(path);
        try {
            if (PIXI.NineSlicePlane) return new PIXI.NineSlicePlane(tex, left, top, right, bottom);
            if (PIXI.mesh && PIXI.mesh.NineSlicePlane) return new PIXI.mesh.NineSlicePlane(tex, left, top, right, bottom);
        } catch (e) {
            console.error("[playad] nine-slice create failed", path, e);
        }
        return new PIXI.Sprite(tex);
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
        if (!S.ui.fill || !S.ui.percent || !S.rect) return;
        var bw = S.rect.bw;
        var fw = Math.max(0, bw * S.progress / CFG.max);
        if (S.ui.fillIsImage) {
            S.ui.fill.visible = fw > 1;
            S.ui.fill.width = Math.max(1, fw);
            S.ui.fill.height = S.rect.fillH || S.rect.bh;
        } else {
            rr(S.ui.fill, 0xffd54a, 1, 0, 0, fw, S.rect.bh, S.rect.bh / 2);
        }
        S.ui.percent.text = Math.floor(S.progress) + "%";
        S.ui.percent.x = S.rect.barX + bw / 2 - S.ui.percent.width / 2;
    }

    function setProgress(v) {
        S.progress = clamp(v);
        drawProgress();
    }

    function ensurePanel() {
        if (S.suspendPanel && !S.visible) return false;
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

    function createGlow(radius) {
        var c = new PIXI.Container();
        c.name = "playad_chest_glow";
        c.alpha = 0.95;

        var circle1 = new PIXI.Graphics();
        circle1.beginFill(0xfff1a6, 0.20);
        circle1.drawCircle(0, 0, radius * 0.62);
        circle1.endFill();
        c.addChild(circle1);

        var circle2 = new PIXI.Graphics();
        circle2.beginFill(0xffffff, 0.16);
        circle2.drawCircle(0, 0, radius * 0.38);
        circle2.endFill();
        c.addChild(circle2);

        for (var i = 0; i < 16; i++) {
            var ray = new PIXI.Graphics();
            var longRay = i % 2 === 0;
            var inner = radius * (longRay ? 0.26 : 0.22);
            var outer = radius * (longRay ? 1.05 : 0.82);
            var half = radius * (longRay ? 0.085 : 0.06);
            ray.beginFill(0xfff6b8, longRay ? 0.42 : 0.28);
            ray.moveTo(0, -inner);
            ray.lineTo(half, -outer);
            ray.lineTo(0, -outer * 1.12);
            ray.lineTo(-half, -outer);
            ray.lineTo(0, -inner);
            ray.endFill();
            ray.rotation = Math.PI * 2 * i / 16;
            c.addChild(ray);
        }
        return c;
    }

    function updateGlow() {
        if (!S.ui.glow || !S.visible) return;
        var t = now();
        if (!S.lastGlowAt) S.lastGlowAt = t;
        var dt = Math.min(0.08, Math.max(0, (t - S.lastGlowAt) / 1000));
        S.lastGlowAt = t;
        S.ui.glow.rotation += dt * ((UI_CONFIG.glow && UI_CONFIG.glow.speed) || 1.8);
    }

    function createPanel(app) {
        var size = getSize(app);
        var w = size.w, h = size.h;
        var C = UI_CONFIG;
        var sc = Number(C.scale) || 1;
        let temp = size.h / size.w
        if(temp > 667/375) {
            // sc = (temp - 1) * 0.5 + 1
            sc = temp
            // sc = 1.5
            console.error("sc",sc)
        }
        console.error("sc",size)
        if (sc <= 0) sc = 1;
        function u(v) { return (Number(v) || 0) * sc; }

        var centerX = w / 2 + u(C.offsetX);
        var groupH = u(C.groupHeight || 537);
        var groupTop = Math.max(20, (h - groupH) / 2) + u(C.offsetY);

        var bgCfg = C.background || {};
        var chestCfg = C.chest || {};
        var progCfg = C.progress || {};
        var btnCfg = C.button || {};

        var pw = u(bgCfg.w || 570);
        var ph = u(bgCfg.h || 260);
        var px = centerX + u(bgCfg.x) - pw / 2;
        var py = groupTop + u(bgCfg.y);

        var iconW = u(chestCfg.w || 312);
        var iconH = u(chestCfg.h || 258);
        var iconX = centerX + u(chestCfg.x) - iconW / 2;
        var iconY = groupTop + u(chestCfg.y);

        var barW = u(progCfg.w || 470);
        var barH = u(progCfg.h || 43);
        var fillH = u(progCfg.fillH || 40);
        var barX = centerX + u(progCfg.x) - barW / 2;
        var barY = groupTop + u(progCfg.y || 342);

        var btnW = u(btnCfg.w || 322);
        var btnH = u(btnCfg.h || 127);
        var btnX = centerX + u(btnCfg.x) - btnW / 2;
        var btnY = groupTop + u(btnCfg.y || 406);

        S.rect = {
            x: px,
            y: py,
            w: pw,
            h: ph,
            btnX: btnX,
            btnY: btnY,
            btnW: btnW,
            btnH: btnH,
            barX: barX,
            barY: barY,
            bw: barW,
            bh: barH,
            fillH: fillH,
            dpr: size.dpr
        };

        var p = new PIXI.Container();
        p.name = "playad_panel";
        p.visible = false;
        p.interactive = false;
        p.x = 0;
        p.y = 0;

        var mask = new PIXI.Graphics();
        mask.beginFill(0x000000, C.maskAlpha == null ? 0.72 : C.maskAlpha);
        mask.drawRect(-w, -h, w * 3, h * 3);
        mask.drawRect(0, 0, w, h);
        mask.endFill();
        p.addChild(mask);

        var shadow = new PIXI.Graphics();
        rr(shadow, 0x000000, 0.30, px - u(14), py - u(14), pw + u(28), ph + u(28), u(30));
        p.addChild(shadow);

        var bg = makeSprite(CFG.bg);
        if (bg) {
            bg.x = px;
            bg.y = py;
            bg.width = pw;
            bg.height = ph;
            p.addChild(bg);
        } else {
            var bg2 = new PIXI.Graphics();
            rr(bg2, 0x2d8cff, 1, px, py, pw, ph, u(26));
            p.addChild(bg2);
        }

        var glow = null;
        if (!C.glow || C.glow.enabled !== false) {
            glow = createGlow(Math.max(iconW, iconH) * ((C.glow && C.glow.radiusScale) || 0.68));
            glow.alpha = C.glow && C.glow.alpha == null ? 0.95 : (C.glow && C.glow.alpha);
            glow.x = iconX + iconW / 2;
            glow.y = iconY + iconH / 2;
            p.addChild(glow);
        }

        var icon = makeSprite(CFG.icon);
        if (icon) {
            icon.width = iconW;
            icon.height = iconH;
            icon.x = iconX;
            icon.y = iconY;
            p.addChild(icon);
        }

        var titleCfg = C.title || {};
        var title = makeText(titleCfg.text || "\u70b9\u51fb\u52a0\u901f", u(titleCfg.fontSize || 41), titleCfg.color == null ? 0xffffff : titleCfg.color, titleCfg.bold !== false);
        title.x = centerX + u(titleCfg.x) - title.width / 2;
        title.y = groupTop + u(titleCfg.y || 244);
        p.addChild(title);


        var barBg = makeSprite(CFG.barBg);
        if (barBg) {
            barBg.x = S.rect.barX;
            barBg.y = S.rect.barY;
            barBg.width = barW;
            barBg.height = barH;
            p.addChild(barBg);
        } else {
            barBg = new PIXI.Graphics();
            rr(barBg, 0x1b1b1b, 0.78, 0, 0, S.rect.bw, S.rect.bh, S.rect.bh / 2);
            barBg.x = S.rect.barX;
            barBg.y = S.rect.barY;
            p.addChild(barBg);
        }

        var ns = progCfg.nineSlice || {};
        var fill = makeNineSlice(CFG.barFill, u(ns.left || 20), u(ns.top || 12), u(ns.right || 20), u(ns.bottom || 12));
        if (fill) {
            fill.x = S.rect.barX;
            fill.y = S.rect.barY + Math.round((S.rect.bh - S.rect.fillH) / 2);
            fill.width = 1;
            fill.height = S.rect.fillH;
            p.addChild(fill);
            S.ui.fillIsImage = true;
        } else {
            fill = new PIXI.Graphics();
            fill.x = S.rect.barX;
            fill.y = S.rect.barY;
            p.addChild(fill);
            S.ui.fillIsImage = false;
        }

        var percentCfg = C.percent || {};
        var percent = makeText("0%", u(percentCfg.fontSize || 22), percentCfg.color == null ? 0x5a3200 : percentCfg.color, percentCfg.bold !== false);
        percent.y = S.rect.barY + S.rect.bh / 2 - percent.height / 2 + u(percentCfg.yOffset);
        p.addChild(percent);

        var btn = makeSprite(CFG.button);
        if (btn) {
            btn.width = btnW;
            btn.height = btnH;
            btn.x = S.rect.btnX;
            btn.y = S.rect.btnY;
            p.addChild(btn);
        } else {
            var btn2 = new PIXI.Graphics();
            rr(btn2, 0xff7a00, 1, S.rect.btnX, S.rect.btnY, S.rect.btnW, S.rect.btnH, u(22));
            p.addChild(btn2);
        }


        S.panel = p;
        S.ui.mask = mask;
        S.ui.glow = glow;
        S.ui.barBg = barBg;
        S.ui.fill = fill;
        S.ui.percent = percent;
        setProgress(0);
    }

    function hookRender() {
        var app = getApp();
        if (!app || app.__playadHooked) return false;
        var old = app.renderStage;
        app.renderStage = function () {
            ensurePanel();
            updateGlow();
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
        }
        renderOnce();
    }

    function renderOnce() {
        updateGlow();
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
        setProgress(0);
    }

    function show() {
        S.suspendPanel = false;
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
        S.lastGlowAt = 0;
        if (S.panel) S.panel.visible = false;
        stopTick();
        renderOnce();
    }

    function destroyPanelForAd() {
        S.visible = false;
        S.suspendPanel = true;
        S.lastGlowAt = 0;
        stopTick();
        if (S.panel && S.panel.parent && S.panel.parent.removeChild) {
            try { S.panel.parent.removeChild(S.panel); } catch (e) {}
        }
        try { S.panel && S.panel.destroy && S.panel.destroy({ children: true }); } catch (e) {}
        S.panel = null;
        S.ui = {};
        S.rect = null;
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
            renderOnce();
            playAd(reason || "complete");
            return;
        }
        complete();
    }

    function complete() {
        if (S.completed) return;
        S.completed = true;
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
        destroyPanelForAd();
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
            setProgress(CFG.max);
            complete();
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
            if (reason === "complete" || reason === "api") complete();
            renderOnce();
        });
    }

    function rebuildPanel() {
        var wasVisible = S.visible;
        var oldProgress = S.progress;
        if (S.panel && S.panel.parent && S.panel.parent.removeChild) {
            try { S.panel.parent.removeChild(S.panel); } catch (e) {}
        }
        try { S.panel && S.panel.destroy && S.panel.destroy({ children: true }); } catch (e) {}
        S.panel = null;
        S.ui = {};
        if (ensurePanel()) {
            S.panel.visible = wasVisible;
            S.visible = wasVisible;
            setProgress(oldProgress);
            renderOnce();
        }
    }

    function configureUI(opt) {
        mergeConfig(UI_CONFIG, opt || {});
        if (S.panel) rebuildPanel();
        return api;
    }

    function install(opt) {
        if (opt) {
            if (opt.ui) mergeConfig(UI_CONFIG, opt.ui);
            for (var k in opt) if (k !== "ui") CFG[k] = opt[k];
        }
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
        configure: function (opt) {
            if (opt) {
                if (opt.ui) configureUI(opt.ui);
                for (var k in opt) if (k !== "ui") CFG[k] = opt[k];
            }
            return api;
        },
        configureUI: configureUI,
        _state: S,
        _config: CFG,
        _uiConfig: UI_CONFIG
    };

    G.PlayAdPanel = api;
    if (typeof window !== "undefined") window.PlayAdPanel = api;
    if (typeof module !== "undefined" && module.exports) module.exports = api;

    install();
})();

