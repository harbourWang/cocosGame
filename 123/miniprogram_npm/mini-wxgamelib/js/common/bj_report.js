function _typeof(r) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
        return typeof r;
    } : function(r) {
        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    })(r);
}

var request = require("./request");

function stringifyError(r) {
    return r.replace(/\n/gi, "").split(/\bat\b/).slice(0, 5).join("@").replace(/\?[^:]+/gi, "");
}

function getCurrentPage() {
    var r = getCurrentPages();
    return r && r.length && r[r.length - 1].route || "";
}

function _processError(r) {
    var t = r.match("(https?://[^)]+)"), e = (e = (t = t ? t[0] : "").match(":([0-9]+):([0-9]+)")) || [ 0, 0, 0 ], r = stringifyError(r);
    return {
        msg: "(From: ".concat(_config.from, " Page: ").concat(getCurrentPage(), ") @ ").concat(r),
        rowNum: e[1],
        colNum: e[2],
        target: t.replace(e[0], "")
    };
}

function _passIgnore(r) {
    var t = !0;
    if (_isOBJByType(_config.ignore, "Array")) for (var e = 0, o = _config.ignore.length; e < o; e++) {
        var n = _config.ignore[e];
        if (_isOBJByType(n, "RegExp") && _isOBJByType(r.msg, "String") && r.msg.match(n) || _isOBJByType(n, "Function") && n(r, r.msg)) {
            t = !1;
            break;
        }
    }
    return t;
}

function getSession() {
    var r = wx.getStorageSync("__SESSION__KEY__");
    try {
        return 0 < ("" + r).length ? JSON.parse(r + "") : {};
    } catch (r) {
        return {};
    }
}

var _isOBJ = function(r) {
    return "object" === _typeof(r) && !!r;
}, _isOBJByType = function(r, t) {
    return Object.prototype.toString.call(r) === "[object " + (t || "Object") + "]";
}, _config = {
    id: 174,
    uin: "926063420",
    url: "https://badjs.weixinbridge.com/badjs",
    delay: 1e3,
    level: 4,
    ext: {},
    ignore: [ /APP\-SERVICE\-SDK\:setStorageSync\:fail/g, /appServiceSDK/g, /webviewScriptError/g ]
}, BJ_REPORT = {
    report: function(r, t) {
        if (_config.report) {
            var e = _processError(r);
            if (_passIgnore(e)) {
                var o, n = [];
                for (o in e.level = t || _config.level, e) {
                    var i = e[o];
                    if (_isOBJ(i)) try {
                        i = JSON.stringify(i);
                    } catch (r) {
                        i = "[BJ_REPORT detect value stringify error] " + r.toString();
                    }
                    n.push(o + "=" + encodeURIComponent(i));
                }
                var c = "".concat(_config.report, "&").concat(n.join("&"), "&_t=").concat(Date.now());
                setTimeout(function() {
                    request({
                        url: c,
                        success: function(r) {},
                        fail: function(r) {
                            console.log("Badjs report fail: ", r);
                        }
                    });
                }, _config.delay);
            }
        }
    },
    init: function(r) {
        if (_isOBJ(r)) for (var t in r) _config[t] = r[t];
        var e;
        _config.id && (e = (e = getSession()).user_id || e.userId || _config.uin, _config.report = "".concat(_config.url, "?id=").concat(_config.id, "&uin=").concat(e, "&from=").concat(_config.from));
    }
};

module.exports = BJ_REPORT;