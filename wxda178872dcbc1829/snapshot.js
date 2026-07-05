function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = sceneSnapshot;

var PIXI = _interopRequireWildcard(require("pixi.js"));

function _getRequireWildcardCache(e) {
    var t, r;
    return "function" != typeof WeakMap ? null : (t = new WeakMap(), r = new WeakMap(), 
    (_getRequireWildcardCache = function(e) {
        return e ? r : t;
    })(e));
}

function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
    };
    t = _getRequireWildcardCache(t);
    if (t && t.has(e)) return t.get(e);
    var r, n, i = {
        __proto__: null
    }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (r in e) "default" !== r && {}.hasOwnProperty.call(e, r) && ((n = o ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ? Object.defineProperty(i, r, n) : i[r] = e[r]);
    return i.default = e, t && t.set(e, i), i;
}

var info = {}, dpr = 2, dragMap = {
    _any_: [],
    _horizontal_: [],
    _vertical_: [],
    none: []
}, eventList = [ "event_when_touching_sprite" ];

try {
    dpr = (info = wx.getSystemInfoSync()).devicePixelRatio;
} catch (e) {
    console.log(e);
}

function checkSpriteHasClickEvent(t, r) {
    var n = !1;
    return (t.id || t.sourceSpriteId) && r.runtimeData.hasBlock(t.sourceSpriteId || t.id) ? eventList.forEach(function(e) {
        r.runtimeData.hasBlockOfType(e, t.id) && (n = !0);
    }) : n = t.interactive, n;
}

function getMsgForOneSprite(e, t) {
    var r = t.renderer, n = r.localToScreen(e.getGlobalPosition()), r = r.localSizeToScreen({
        width: e.width,
        height: e.height
    });
    return e.anchor ? (n.x = n.x - r.width * e.anchor.x, n.y = n.y - r.height * e.anchor.y) : (n.x = n.x - .5 * r.width, 
    n.y = n.y - .5 * r.height), {
        name: e.name,
        position: [ n.x, n.y, r.width, r.height ],
        visible: e.visible || !1,
        action_info: {
            click: checkSpriteHasClickEvent(e, t),
            drag: !!(dragMap[e.dragMode] || []).length
        },
        children: e.children.map(function(e) {
            return getMsgForOneSprite(e, t);
        }),
        feature: {
            alpha: e.alpha,
            className: e.constructor.name,
            rotation: e.rotation,
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height
        },
        swipeDirection: dragMap[e.dragMode] || []
    };
}

function sceneSnapshot(e, t) {
    var r = e.renderer, n = r.current_scene, i = new Date(), r = getMsgForOneSprite(r.stage, e), e = {
        _id: n && n.id || "",
        name: "",
        appId: t.game_id,
        tree: {
            engine: "luban",
            costTime: new Date() - i,
            timestamp: +new Date(),
            outerWidth: info.windowWidth,
            outerHeight: info.windowHeight,
            version: "2.0.0",
            animationInterval: 1e3 / 60,
            root: r
        }
    };
    return console.log("curr scene snapshot", e), e;
}