Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _draw = require("./draw.js"), _time = require("./time.js"), _touch = _interopRequireDefault(require("./touch.js")), _config = _interopRequireDefault(require("./config.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _classCallCheck(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, i) {
    for (var e = 0; e < i.length; e++) {
        var s = i[e];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(s.key), s);
    }
}

function _createClass(t, i, e) {
    return i && _defineProperties(t.prototype, i), e && _defineProperties(t, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : t + "";
}

function _toPrimitive(t, i) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 === e) return ("string" === i ? String : Number)(t);
    e = e.call(t, i || "default");
    if ("object" != _typeof(e)) return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

var colorMap = {
    1: "#FFC741",
    2: "#C1C9D7",
    3: "#CE9575"
};

function getRankColor(t) {
    return colorMap[t] || "#9B9B9B";
}

var userImgList = [], Render = function() {
    return _createClass(function t() {
        _classCallCheck(this, t);
        var i = this;
        wx.getSystemInfo({
            success: function(t) {
                i.initRender(t);
            }
        });
    }, [ {
        key: "initRender",
        value: function(t) {
            t && (this.sys = t), this.sys.windowHeight < this.sys.windowWidth && (this.isLandscape = !0), 
            this.title = "排行榜", this.unit = "", this.sort = "down", this.period = "history", 
            this.selfTitle = "历史最佳", this.currScore = 0, this.startTime = (0, _time.getSomeDaysBefore)(999).s, 
            this.sharedCanvas = wx.getSharedCanvas(), this.context = this.sharedCanvas.getContext("2d"), 
            this.touch = _touch.default, this.initScale(), this.canvasList = [], this.ctxList = [], 
            this.pgWidth = 300 * this.scale, this.pgHeight = (this.isLandscape ? 200 : 300) * this.scale, 
            this.rankHeight = (this.isLandscape ? 255 : 355) * this.scale, this.itemHeight = 50 * this.scale, 
            this.pgCount = Math.floor(this.pgHeight / this.itemHeight);
            var t = (0, _draw.createCanvas)(this.pgWidth, this.rankHeight), i = t.can, t = t.ctx, i = (this.infoCanvas = i, 
            this.infoCtx = t, (0, _draw.createCanvas)(this.pgWidth, this.pgHeight)), t = i.can, i = i.ctx, t = (this.pageCanvas = t, 
            this.pageCtx = i, (0, _draw.createCanvas)(this.gameWidth, this.gameHeight)), i = t.can, t = t.ctx;
            this.selfCanvas = i, this.selfCtx = t;
        }
    }, {
        key: "initScale",
        value: function() {
            var t = this.sys.pixelRatio;
            this.gameWidth = t * (this.isLandscape ? _config.default.GameHeight : _config.default.GameWidth), 
            this.gameHeight = t * (this.isLandscape ? _config.default.GameWidth : _config.default.GameHeight), 
            this.scale = t, this.sharedCanvas.width = this.gameWidth, this.sharedCanvas.height = this.gameHeight;
        }
    }, {
        key: "calPageData",
        value: function(t) {
            t = (this.data = t).length;
            this.pgNum = Math.ceil(t / this.pgCount), this.needScroll = !!(t > this.pgCount);
            for (var i, e = 0; e < this.pgNum; e++) this.canvasList[e] || (i = wx.createCanvas(), 
            this.canvasList[e] = i, this.ctxList[e] = i.getContext("2d"), i.width = this.pgWidth, 
            i.height = this.pgHeight);
            this.data.length > this.pgCount && (t = -(this.data.length - this.pgCount) * this.itemHeight / this.scale, 
            _touch.default.setTouchRange(t, 0, this.update.bind(this)));
        }
    }, {
        key: "renderSelf",
        value: function() {
            var t = this.selfCtx, i = (t.clearRect(0, 0, this.gameWidth, this.gameHeight), this.gameWidth / 2), e = (this.isLandscape ? 65 : 135) * this.scale;
            (0, _draw.drawImgToCanvas)(t, "img/box.png", i, e, this.pgWidth, 90 * this.scale, this.update.bind(this)), 
            (0, _draw.drawTextToCanvas)(t, this.selfTitle, i, e - 45 * this.scale, {
                font: 12 * this.scale + "px Arial",
                fillStyle: "#2BDDAE"
            }), (0, _draw.drawImgToCanvas)(t, "img/ribbon.png", i, e, 175 * this.scale, 47 * this.scale, this.update.bind(this)), 
            (0, _draw.drawTextToCanvas)(t, "历史最佳" === this.selfTitle ? this.selfData.score : this.currScore, i, e, {
                font: 18 * this.scale + "px Arial"
            }, 77 * this.scale);
        }
    }, {
        key: "renderPageData",
        value: function() {
            var t = this, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = this.canvasList[i], s = this.ctxList[i], a = this.scale;
            if (s) {
                s.clearRect(0, 0, e.width, e.height), s.fillStyle = "#33353C", s.fillRect(0, 0, e.width, e.height);
                for (var h = i * this.pgCount; h < (i + 1) * this.pgCount && h < this.data.length; h++) {
                    for (var n = this.data[h], r = h % this.pgCount, o = this.itemHeight * r, r = (r % 2 == 1 && (s.fillStyle = "#292B32", 
                    s.fillRect(0, o, this.pgWidth, this.itemHeight)), (0, _draw.drawTextToCanvas)(s, n.rank, 14 * a, o + this.itemHeight / 2, {
                        textAlign: "center",
                        fillStyle: getRankColor(n.rank),
                        font: 14 * this.scale + "px Arial"
                    }), (0, _draw.drawTextToCanvas)(s, n.nickname, 70 * a, o + this.itemHeight / 2, {
                        textAlign: "left",
                        fillStyle: "#ffffff",
                        font: 12 * this.scale + "px Arial"
                    }, 100 * this.scale), s.measureText(this.unit).width), r = 30 * a < r ? 40 * a : 10 * a + r, l = ((0, 
                    _draw.drawTextToCanvas)(s, n.score, this.pgWidth - r, o + this.itemHeight / 2, {
                        textAlign: "right",
                        fillStyle: "#ffffff",
                        font: 16 * this.scale + "px Arial"
                    }, 77 * this.scale), this.unit && (0, _draw.drawTextToCanvas)(s, this.unit, this.pgWidth - r + 5 * this.scale, o + this.itemHeight / 2, {
                        textAlign: "left",
                        fillStyle: "#9B9B9B",
                        font: 10 * this.scale + "px Arial"
                    }, 30 * this.scale), null), c = 0; c < userImgList.length; c++) if (userImgList[c].avatarUrl === n.avatarUrl) {
                        l = userImgList[c];
                        break;
                    }
                    l || ((r = wx.createImage()).src = n.avatarUrl, l = {
                        avatarUrl: n.avatarUrl,
                        img: r,
                        status: 0
                    }, userImgList.push(l)), (0, _draw.createImageInCanvas)(a, s, l, 45 * a, o + this.itemHeight / 2, 30 * a, 30 * a, null, !1);
                }
                this.pageCtx.drawImage(e, 0, this.pgHeight * i, e.width, e.height), i < this.pgNum - 1 && setTimeout(function() {
                    t.renderPageData(++i);
                }, 100);
            }
        }
    }, {
        key: "renderRankInfo",
        value: function(t) {
            var i = this.scale, e = (this.infoCtx.clearRect(0, 0, this.infoCanvas.width, this.infoCanvas.height), 
            13 * i), e = ((0, _draw.roundRect)(this.infoCtx, "#27AD8A", this.pgWidth, 25 * i, this.pgWidth / 2, e, 4 * i, "", 9), 
            (0, _draw.drawTextToCanvas)(this.infoCtx, this.title, this.pgWidth / 2, e, {
                textAlign: "center",
                fillStyle: "#FFFFFF",
                font: 12 * i + "px Arial"
            }, this.pgWidth - 24 * i), 13 * i);
            (0, _draw.drawTextToCanvas)(this.infoCtx, "我的排名", 10 * this.scale, this.rankHeight - e, {
                textAlign: "left",
                fillStyle: "#9B9B9B",
                font: 10 * i + "px Arial"
            }), (0, _draw.drawTextToCanvas)(this.infoCtx, t.rank, this.infoCtx.measureText("我的排名").width + 15 * i, this.rankHeight - e, {
                textAlign: "left",
                fillStyle: "#2BDDAE",
                font: 10 * i + "px Arial"
            }), (0, _draw.drawTextToCanvas)(this.infoCtx, "共".concat(this.data.length, "个好友在玩"), this.pgWidth - 10 * i, this.rankHeight - e, {
                textAlign: "right",
                fillStyle: "#9B9B9B",
                font: 10 * i + "px Arial"
            });
        }
    }, {
        key: "update",
        value: function(t) {
            var i = (this.gameWidth - this.pgWidth) / 2, e = (this.isLandscape ? 145 : 220) * this.scale;
            this.context.clearRect(0, 0, this.gameWidth, this.gameHeight), this.context.drawImage(this.selfCanvas, 0, 0, this.gameWidth, this.gameHeight), 
            this.context.drawImage(this.infoCanvas, i, (this.isLandscape ? 120 : 195) * this.scale, this.infoCanvas.width, this.infoCanvas.height);
            for (var s = 0; s < this.pgNum; s++) this.pgHeight * s + t * this.scale < this.pgHeight && 0 < this.pgHeight * (s + 1) + t * this.scale && this.canvasList[s] && this.pageCtx.drawImage(this.canvasList[s], 0, this.pgHeight * s + t * this.scale, this.pgWidth, this.pgHeight);
            this.context.drawImage(this.pageCanvas, i, e, this.pgWidth, this.pgHeight);
        }
    }, {
        key: "dataFilter",
        value: function(t) {
            var i = this;
            return "history" !== this.period && (t = t.filter(function(t) {
                return t.update_time >= i.startTime;
            })), "up" == this.sort && t.sort(function(t, i) {
                return t.score - i.score;
            }), t.forEach(function(t, i) {
                return t.rank = i + 1;
            }), t;
        }
    }, {
        key: "draw",
        value: function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], i = 1 < arguments.length ? arguments[1] : void 0, e = 2 < arguments.length ? arguments[2] : void 0, t = this.dataFilter(t);
            this.selfData = i, this.currScore = e, this.calPageData(t), this.renderSelf(), this.renderPageData(0), 
            this.renderRankInfo(i), this.update();
        }
    }, {
        key: "setTitle",
        value: function(t) {
            this.title = String(t);
        }
    }, {
        key: "setUnit",
        value: function(t) {
            this.unit = String(t);
        }
    }, {
        key: "setSelfTitle",
        value: function(t) {
            this.selfTitle = String(t);
        }
    }, {
        key: "setSort",
        value: function(t) {
            this.sort = t;
        }
    }, {
        key: "setPeriod",
        value: function(t) {
            var i;
            switch (this.period = t, this.period) {
              case "week":
                i = (0, _time.getMonday)().s;
                break;

              case "month":
                i = (0, _time.getFirstDayOfSomeMonthsBefore)(0).s;
                break;

              case "day":
                i = (0, _time.getSomeDaysBefore)(0).s;
                break;

              default:
                i = (0, _time.getSomeDaysBefore)(999).s;
            }
            this.startTime = i;
        }
    } ]);
}(), _default = exports.default = new Render();