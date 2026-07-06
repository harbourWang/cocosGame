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
        glow: "img/adimg/gqx.png",
        button: "img/adimg/tile_006.png",
        barBg: "img/adimg/tile_011.png",
        barFill: "img/adimg/tile_012.png",
        adUnitId: "adunit-8cf11ddb3cc89440",              // banner ad unit id
        autoShow: true,
        autoShowDelay: 800,
        max: 100,
        clickAdd: 14,
        decayPerSecond: 4,
        completeHideMs: 0,
        playAdOnComplete: true,
        bannerShowProgress: 20,
        bannerWidth: 300
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
        button: { w: 322, h: 127 }
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
        tapAnimId: 0,
        timer: null,
        autoTimer: null,
        bannerShowing: false,
        bannerResizeHandler: null,
        bannerClickHandler: null,
        wxHideHandler: null,
        wxHideBinded: false,
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

    function getSystemInfo() {
        try { return W && W.getSystemInfoSync ? W.getSystemInfoSync() : null; } catch (e) { return null; }
    }

    function getSize(app) {
        var sys = getSystemInfo();
        var dpr = getDpr();
        var winW = ((sys && sys.windowWidth) || 375) * dpr;
        var winH = ((sys && sys.windowHeight) || 667) * dpr;
        var safeBottom = 0;
        if (sys && sys.safeArea && sys.safeArea.bottom && sys.windowHeight) {
            safeBottom = Math.max(0, (sys.windowHeight - sys.safeArea.bottom) * dpr);
        }
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
            sh: (sys && sys.windowHeight) || 667,
            safeBottom: safeBottom
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

    function setVisualScale(node, base, scale) {
        if (!node || !base) return;
        scale = Number(scale) || 1;
        var w = base.w * scale;
        var h = base.h * scale;
        node.x = base.x + (base.w - w) / 2;
        node.y = base.y + (base.h - h) / 2;
        node.width = w;
        node.height = h;
    }

    function playTapScale(done) {
        var id = ++S.tapAnimId;
        setVisualScale(S.ui.button, S.ui.buttonBase, 0.90);
        setVisualScale(S.ui.chest, S.ui.chestBase, 0.90);
        renderOnce();
        setTimeout(function () {
            if (id !== S.tapAnimId) return;
            setVisualScale(S.ui.button, S.ui.buttonBase, 1.08);
            setVisualScale(S.ui.chest, S.ui.chestBase, 1.08);
            renderOnce();
        }, 70);
        setTimeout(function () {
            if (id !== S.tapAnimId) return;
            setVisualScale(S.ui.button, S.ui.buttonBase, 1);
            setVisualScale(S.ui.chest, S.ui.chestBase, 1);
            renderOnce();
            if (done) done();
        }, 140);
    }

    function stopTouchEvent(e) {
        try { if (e && e.stopPropagation) e.stopPropagation(); } catch (err) {}
        try { if (e && e.data && e.data.originalEvent && e.data.originalEvent.stopPropagation) e.data.originalEvent.stopPropagation(); } catch (err2) {}
        try { if (e && e.data && e.data.originalEvent && e.data.originalEvent.preventDefault) e.data.originalEvent.preventDefault(); } catch (err3) {}
        return false;
    }

    function createTouchBlocker(w, h) {
        var g = new PIXI.Graphics();
        g.name = "playad_touch_blocker";
        // ????????????????????????????????????
        g.beginFill(0x000000, 0.001);
        g.drawRect(-w, -h, w * 3, h * 3);
        g.drawRect(0, 0, w, h);
        g.endFill();
        g.interactive = true;
        g.buttonMode = false;
        try { if (PIXI.Rectangle) g.hitArea = new PIXI.Rectangle(0, 0, w, h); } catch (e) {}
        var evs = [
            "pointerdown", "pointermove", "pointerup", "pointerupoutside", "pointertap",
            "touchstart", "touchmove", "touchend", "touchendoutside", "touchcancel", "tap",
            "mousedown", "mousemove", "mouseup", "mouseupoutside", "click"
        ];
        if (g.on) {
            for (var i = 0; i < evs.length; i++) g.on(evs[i], stopTouchEvent);
        }
        return g;
    }

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
        if (S.visible && !S.completed && !S.adPlayed && !S.bannerShowing && S.progress > (Number(CFG.bannerShowProgress) || 35)) {
            playAd("progress");
        }
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
        var wrap = new PIXI.Container();
        var glow = makeSprite(CFG.glow);
        var size = radius * 3.9;
        if (!glow) return null;
        wrap.name = "playad_chest_glow";
        wrap.alpha = 0.92;
        if (glow.anchor && glow.anchor.set) {
            glow.anchor.set(0.5, 0.5);
            glow.x = 0;
            glow.y = 0;
        } else {
            glow.x = -size / 2;
            glow.y = -size / 2;
        }
        glow.width = size;
        glow.height = size;
        if (PIXI.BLEND_MODES && PIXI.BLEND_MODES.ADD != null) glow.blendMode = PIXI.BLEND_MODES.ADD;
        wrap.addChild(glow);
        return wrap;
    }

    function updateGlow() {
        if (!S.ui.glow || !S.visible) return;
        var t = now();
        if (!S.lastGlowAt) S.lastGlowAt = t;
        var dt = Math.min(0.08, Math.max(0, (t - S.lastGlowAt) / 1000));
        S.lastGlowAt = t;
        var speed = ((UI_CONFIG.glow && UI_CONFIG.glow.speed) || 1.8);
        var glow = S.ui.glow;
        glow.rotation += dt * speed * 0.45;
        glow.alpha = 0.88 + Math.sin(t / 520) * 0.05;
    }

    function createPanel(app) {
        var size = getSize(app);
        var w = size.w, h = size.h;
        var C = UI_CONFIG;
        var sc = Number(C.scale) || 1;
        let temp = size.h / size.w
        if(temp > 667 / 375) {
            sc = temp  / (667 / 375);
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
        var btnX = w / 2 - btnW / 2;
        var btnBottom = h * 0.07;
        var btnY = h - btnH - btnBottom;
        btnY = Math.max(0, Math.min(h - btnH, btnY));

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
            S.ui.chest = icon;
            S.ui.chestBase = { x: iconX, y: iconY, w: iconW, h: iconH };
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
        // p.addChild(percent);

        var btn = makeSprite(CFG.button);
        if (btn) {
            btn.width = btnW;
            btn.height = btnH;
            btn.x = S.rect.btnX;
            btn.y = S.rect.btnY;
            p.addChild(btn);
            S.ui.button = btn;
            S.ui.buttonBase = { x: S.rect.btnX, y: S.rect.btnY, w: btnW, h: btnH };
        } else {
            var btn2 = new PIXI.Graphics();
            rr(btn2, 0xff7a00, 1, S.rect.btnX, S.rect.btnY, S.rect.btnW, S.rect.btnH, u(22));
            p.addChild(btn2);
            S.ui.button = btn2;
            S.ui.buttonBase = { x: S.rect.btnX, y: S.rect.btnY, w: btnW, h: btnH };
        }


        var touchBlocker = createTouchBlocker(w, h);
        p.addChild(touchBlocker);

        S.panel = p;
        S.ui.mask = mask;
        S.ui.touchBlocker = touchBlocker;
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
        if (S.bannerShowing) {
            playTapScale(function () {
                hide();
            });
            renderOnce();
            return;
        }
        setProgress(S.progress + CFG.clickAdd);
        if (S.progress >= CFG.max) {
            playTapScale(function () {
                onProgressFull("complete");
            });
        } else {
            playTapScale();
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
        preloadBanner();
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
        hideBanner(false);
        renderOnce();
    }

    function destroyPanelForAd() {
        S.visible = false;
        S.suspendPanel = true;
        S.lastGlowAt = 0;
        stopTick();
        hideBanner(false);
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
        }
        complete();
    }

    function complete() {
        if (S.completed) return;
        S.completed = true;
        setTimeout(hide, CFG.completeHideMs);
    }

    function getAdUnitId() {
        return CFG.adUnitId || G._bannerId || G._videoId || (typeof window !== "undefined" && (window._bannerId || window._videoId)) || "";
    }

    function getBannerBottom(sys) {
        return 0;
    }

    function getBannerStyle() {
        var sys = getSystemInfo() || {};
        var ww = sys.windowWidth || 375;
        var wh = sys.windowHeight || 667;
        var width = Math.min(Math.max(0, Number(CFG.bannerWidth) || 300), ww);
        return {
            left: Math.max(0, (ww - width) / 2),
            top: Math.max(0, wh - 100 - getBannerBottom(sys)),
            width: width
        };
    }

    function positionBanner(ad, res) {
        if (!ad || !ad.style) return;
        var sys = getSystemInfo() || {};
        var ww = sys.windowWidth || 375;
        var wh = sys.windowHeight || 667;
        var bw = res && res.width || ad.style.realWidth || ad.style.width || Number(CFG.bannerWidth) || 300;
        var bh = res && res.height || ad.style.realHeight || 100;
        ad.style.left = Math.max(0, (ww - bw) / 2);
        ad.style.top = Math.max(0, wh - bh - getBannerBottom(sys));
    }

    function closeAfterBannerClick() {
        if (!S.visible || !S.bannerShowing) return;
        hide();
    }

    function bindBannerHideFallback() {
        if (!W || !W.onHide || S.wxHideBinded) return;
        S.wxHideBinded = true;
        S.wxHideHandler = function () {
            closeAfterBannerClick();
        };
        W.onHide(S.wxHideHandler);
    }

    function getAd() {
        if (S.ad) return S.ad;
        var id = getAdUnitId();
        if (!W || !W.createBannerAd || !id) return null;
        try {
            S.ad = W.createBannerAd({
                adUnitId: id,
                style: getBannerStyle()
            });
            S.bannerResizeHandler = function (res) {
                positionBanner(S.ad, res);
            };
            if (S.ad.onResize) S.ad.onResize(S.bannerResizeHandler);
            if (S.ad.onError) {
                S.ad.onError(function (err) {
                    S.bannerShowing = false;
                    console.error("[playad] ad error", err);
                });
            }
            S.bannerClickHandler = function () {
                closeAfterBannerClick();
            };
            if (S.ad.onClick) S.ad.onClick(S.bannerClickHandler);
            bindBannerHideFallback();
            return S.ad;
        } catch (e) {
            console.error("[playad] create ad failed", e);
            return null;
        }
    }

    function hideBanner(destroy) {
        S.bannerShowing = false;
        if (!S.ad) return;
        try { if (S.ad.hide) S.ad.hide(); } catch (e) {}
        if (destroy) {
            try { if (S.ad.offResize && S.bannerResizeHandler) S.ad.offResize(S.bannerResizeHandler); } catch (e2) {}
            try { if (S.ad.offClick && S.bannerClickHandler) S.ad.offClick(S.bannerClickHandler); } catch (e3) {}
            try { if (S.ad.destroy) S.ad.destroy(); } catch (e4) {}
            S.ad = null;
            S.bannerResizeHandler = null;
            S.bannerClickHandler = null;
        }
    }

    function preloadBanner() {
        var ad = getAd();
        if (!ad) return;
        positionBanner(ad);
        try { if (ad.hide) ad.hide(); } catch (e) {}
        S.bannerShowing = false;
    }

    function playAd(reason) {
        if (S.adShowing || S.completed) return;
        S.adPlayed = true;
        var ad = getAd();
        if (!ad) {
            log("no ad, skip", reason);
            S.lastClickAt = now();
            return;
        }
        Promise.resolve().then(function () {
            if (!S.visible || S.completed) return null;
            positionBanner(ad);
            return ad.show();
        }).then(function () {
            if (S.visible && !S.completed) {
                S.bannerShowing = true;
            } else {
                try { if (ad.hide) ad.hide(); } catch (e) {}
            }
        }).catch(function (err) {
            S.bannerShowing = false;
            console.error("[playad] show banner failed", err);
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

