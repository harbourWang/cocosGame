Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _string = require("./string"), _report_ = _interopRequireDefault(require("./report_14359")), _util = require("./util");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : e + "";
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 === r) return ("string" === t ? String : Number)(e);
    r = r.call(e, t || "default");
    if ("object" != _typeof(r)) return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

var _commonReportData = {
    iSceneId: 1,
    iUIArea: 0,
    sGameId: 0,
    iGiftId: 0,
    iSsid: 0
}, _defaultOption = Object.assign({
    wrapperClass: "j_exposure",
    page: null,
    pageComponents: [],
    screenHeight: 0,
    screenWidth: 0
}, _commonReportData), ScrollExposure = exports.default = function() {
    return _createClass(function e(t) {
        if (_classCallCheck(this, e), this.isSupport = !!wx.createSelectorQuery, this.isSupport) {
            for (var r in [ "screenHeight", "screenWidth", "iUIArea" ].forEach(function(e) {
                if (!(e in t)) throw new Error("ScrollExposure must has ".concat(e));
            }), t = Object.assign({}, _defaultOption, t), console.log(t), this.wrapperClass = t.wrapperClass, 
            this.page = t.page, this.pageComponents = t.pageComponents || [], this.screenWidth = t.screenWidth, 
            this.screenHeight = t.screenHeight, this.commonReportData = {}, _commonReportData) this.commonReportData[r] = t[r];
            this.isWorking = !1, this.isStop = !1;
        }
    }, [ {
        key: "changeCommonReportData",
        value: function(e) {
            for (var t in e) void 0 !== _commonReportData[t] && (this.commonReportData[t] = e[t]);
        }
    }, {
        key: "scroll",
        value: function() {
            var n = this;
            this.isWorking || this.isStop || !this.isSupport || (this.scrollHandle || (this.scrollHandle = (0, 
            _util.throttle)(function() {
                n.isWorking = !0;
                try {
                    n._getExporseRects().then(function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            o(r.context, r.rects);
                        }
                        n.isWorking = !1;
                    });
                    var o = function(r, e) {
                        var o = [];
                        e.forEach(function(e) {
                            var t;
                            n.isInScreen(e) && ("object" === _typeof(t = "string" == typeof (e = e.dataset.rpkey) && (0, 
                            _string.getValue)(r.data, e.replace(/\[(\d+)\]/g, ".$1"))) && t ? t.isExposure || (t.isExposure = !0, 
                            o.push(t), "".concat(e, ".isExposure"), !0) : console.warn("scrollExposure find a ele that has not reportData; rpkey : ".concat(e)));
                        }), 0 < o.length && n.report(o);
                    };
                } catch (e) {
                    console.warn(e), n.isWorking = !1;
                }
            }, 300)), this.scrollHandle());
        }
    }, {
        key: "isInScreen",
        value: function(e) {
            return 0 < e.top + e.height && e.top < this.screenHeight && 0 < e.left + e.width && e.left < this.screenWidth;
        }
    }, {
        key: "_getExporseRects",
        value: function() {
            function e(r) {
                return new Promise(function(t, e) {
                    r.createSelectorQuery().selectAll(".".concat(o.wrapperClass)).boundingClientRect(function(e) {
                        t({
                            context: r === wx ? o.page : r,
                            rects: e
                        });
                    }).exec();
                });
            }
            var o = this, t = [];
            this.page && t.push(e(wx));
            for (var r = 0; r < this.pageComponents.length; r++) {
                var n = this.pageComponents[r];
                n && t.push(e(n));
            }
            return Promise.all(t);
        }
    }, {
        key: "report",
        value: function(e) {
            var t = this;
            "[object Array]" === Object.prototype.toString.call(e) && 0 !== e.length && (e = e.map(function(e) {
                return e.sExternInfo = e.sExternInfo || {}, e.sExternInfo = "string" == typeof e.sExternInfo ? e.sExternInfo : JSON.stringify(e.sExternInfo), 
                e.sGeneralId && (e.iAnchorType = (0, _util.getAnchorType)(e.sGeneralId)), Object.assign({
                    iActionId: 1
                }, t.commonReportData, e);
            }), _report_.default.batchCltStat(null, e));
        }
    } ]);
}();