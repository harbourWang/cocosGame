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
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
        Object.defineProperty(e, i.key, i);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
        var i = _superPropBase(e, t);
        if (i) return i = Object.getOwnPropertyDescriptor(i, t), i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
    }).apply(this, arguments);
}

function _superPropBase(e, t) {
    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); ) ;
    return e;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && _setPrototypeOf(e, t);
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function _createSuper(n) {
    var i = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(n);
        return _possibleConstructorReturn(this, i ? (e = _getPrototypeOf(this).constructor, 
        Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
}

function _possibleConstructorReturn(e, t) {
    if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e);
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
        !0;
    } catch (e) {
        return !1;
    }
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var TOTAL_TIMES = 3, _default = function() {
    _inherits(i, LB.SDK.IPluginInstanceBase);
    var n = _createSuper(i);
    function i(e, t) {
        if (_classCallCheck(this, i), (e = n.call(this, e))._currentKey = "", e._keyNamesList = [], 
        e._errorMessage = "", e._storageKey = e._runtime._getProjectStorageKey(), e._runtime.isMiniGame && GameGlobal.isPublish) return _possibleConstructorReturn(e);
        e.horizontal = e._runtime.config.meta.horizontal, e.renderRankButton(t.btnSprite), 
        e._rankTitle = t.title, e._rankPeriod = t.period, e._rankMaxPerson = t.maxPerson, 
        e._rankSortType = t.sortType, e._rankUnit = t.unit, e.time = 0, e.begin = 0, e.change = 100, 
        e.duration = -1, e._scrolling = !1, e.speed = 0;
        t = 2 * e._runtime.devicePixel;
        return e.startY = (e.horizontal ? -180 : -300) * t, e.itemWidth = 328 * t, e.itemHeight = 64 * t, 
        e._startCallCloudFunctionTime = null, e.cloudFunctionCallTimes = 0, e.worldRankHeight = (e.horizontal ? 3 : 6) * e.itemHeight, 
        e.bindEvent(), e.startTicking(), e;
    }
    return _createClass(i, [ {
        key: "renderRankButton",
        value: function(i) {
            var r = this, s = i.replace(/^https:\/\/gamemaker\.qpic\.cn\/luban\//, "");
            this._runtime.isMiniGame ? wx.getSetting({
                success: function(e) {
                    var n, t = r._runtime.RenderEngine.utils.TextureCache[s];
                    e.authSetting["scope.userInfo"] ? (console.log("用户已授权"), r.drawRankButton(i, s, t)) : (n = r.renderTarget.getGlobalPosition(), 
                    t ? r.createRankBtnInMiniGame(i, t, n) : ((e = new r._runtime.RenderEngine.Loader()).add(s, i, {
                        crossOrigin: !0,
                        loadType: r._runtime.RenderEngine.LoaderResource.LOAD_TYPE.IMAGE,
                        xhrType: r._runtime.RenderEngine.LoaderResource.XHR_RESPONSE_TYPE.BLOB
                    }), e.load(function(e, t) {
                        t = t[s].texture;
                        r.createRankBtnInMiniGame(i, t, n);
                    })));
                }
            }) : this.drawRankButton(i, s);
        }
    }, {
        key: "bindEvent",
        value: function() {
            var e = this, t = this._runtime.eventEmitter;
            t.on("game_pause", function() {
                e.userInfoButton && e.userInfoButton.hide();
            }, this), t.on("game_start", function() {
                e.userInfoButton && e.userInfoButtonVisible && e.userInfoButton.show();
            }, this);
        }
    }, {
        key: "createRankBtnInMiniGame",
        value: function(e, t, n) {
            var i = this, r = t.width / 2 * i._runtime.renderer.stage.scale.x, t = t.height / 2 * i._runtime.renderer.stage.scale.y, e = wx.createUserInfoButton({
                type: "image",
                image: e,
                style: {
                    left: n.x / i._runtime.devicePixel / 2 - r / 2,
                    top: n.y / i._runtime.devicePixel / 2 - t / 2,
                    width: r,
                    height: t
                }
            });
            e.onTap(function(e) {
                console.log(e), e.userInfo ? i._uploadUserInfo(e.userInfo, function() {
                    i.showWorldRank();
                }) : wx.showToast({
                    title: "需要授权才能查看排行榜",
                    icon: "none"
                });
            }), this.userInfoButton = e, this.userInfoButtonVisible = !0, this.renderTarget.visible || (this.userInfoButton.hide(), 
            this.userInfoButtonVisible = !1);
        }
    }, {
        key: "addBtnRank",
        value: function() {
            this.btnRank.interactive = !0, this.btnRank.anchor.set(.5), this.btnRank.width *= this._runtime.devicePixel, 
            this.btnRank.height *= this._runtime.devicePixel, this.renderTarget.addChild(this.btnRank);
        }
    }, {
        key: "drawRankButton",
        value: function(e, n, t) {
            var i = this;
            this.btnRank ? this.btnRank.texture = new t() ? t : new this._runtime.RenderEngine.Texture.from(e) : t ? (this.btnRank = new this._runtime.RenderEngine.Sprite.from(t), 
            this.addBtnRank()) : ((t = new this._runtime.RenderEngine.Loader()).add(n, e, {
                crossOrigin: !0,
                loadType: this._runtime.RenderEngine.LoaderResource.LOAD_TYPE.IMAGE,
                xhrType: this._runtime.RenderEngine.LoaderResource.XHR_RESPONSE_TYPE.BLOB
            }), t.load(function(e, t) {
                i.btnRank = new i._runtime.RenderEngine.Sprite.from(t[n].texture), i.addBtnRank();
            })), this.renderTarget.on(this._runtime.isMiniGame ? "tap" : "click", function() {
                var t;
                !i._runtime.isMiniGame || GameGlobal.isPublish ? i.unsupportTips() : (i.showWorldRank(), 
                t = i, wx.getUserInfo({
                    success: function(e) {
                        e.userInfo && t._uploadUserInfo(e.userInfo);
                    }
                }));
            });
        }
    }, {
        key: "easeOut",
        value: function(e, t, n, i, r) {
            return n * ((e = e / i - 1) * e * (((r = void 0 === r ? 1.70158 : r) + 1) * e + r) + 1) + t;
        }
    }, {
        key: "_uploadUserInfo",
        value: function(e, t) {
            this._isMaxCall("上传世界排行榜用户信息接口") || wx.cloud.callFunction({
                name: "uploaduserinfo",
                data: {
                    data: e
                },
                success: function(e) {
                    console.log(e), t && t();
                },
                fail: console.error
            });
        }
    }, {
        key: "release",
        value: function() {
            this.userInfoButton && this.userInfoButton.destroy();
            var e = this._runtime.RenderEngine.utils.TextureCache.btnSprite;
            e && e.destroy(), _get(_getPrototypeOf(i.prototype), "release", this).call(this);
        }
    }, {
        key: "showWorldRank",
        value: function() {
            var t = this;
            !this._runtime.isMiniGame || GameGlobal.isPublish ? this.unsupportTips() : this._isMaxCall("显示世界排行榜接口") || (this.userInfoButton && (this.userInfoButton.hide(), 
            this.userInfoButtonVisible = !1), wx.showLoading({
                title: "加载中..."
            }), wx.cloud.callFunction({
                name: "getworldrank",
                data: {
                    game_id: GameGlobal.game_id,
                    period: this._rankPeriod || "history",
                    sortType: this._rankSortType || "down",
                    count: +this._rankMaxPerson || 100
                },
                success: function(e) {
                    console.log(e), e.result && t.renderWorldRank(e.result), wx.hideLoading();
                },
                fail: function(e) {
                    wx.hideLoading(), console.error(e);
                }
            }));
        }
    }, {
        key: "hideWorldRank",
        value: function() {
            this._closeRank();
        }
    }, {
        key: "setTitle",
        value: function(e) {
            this._rankTitle = e;
        }
    }, {
        key: "unsupportTips",
        value: function() {
            this._runtime.isMiniGame ? GameGlobal.isPublish && wx.showToast({
                title: "发布成独立小游戏暂不支持世界排行榜",
                icon: "none"
            }) : window.showTips("仅手机微信上可查看世界排行榜");
        }
    }, {
        key: "uploadData",
        value: function(e) {
            !this._runtime.isMiniGame || GameGlobal.isPublish ? this.unsupportTips() : (e = +e, 
            isNaN(e) && (e = 0), this._isMaxCall("上传世界排行榜分数接口") || wx.cloud.callFunction({
                name: "upload",
                data: {
                    score: e,
                    game_id: GameGlobal.game_id
                },
                success: function(e) {
                    console.log(e);
                },
                fail: console.error
            }));
        }
    }, {
        key: "setRankUnit",
        value: function(e) {
            this._rankUnit = e;
        }
    }, {
        key: "setRankPeriod",
        value: function(e) {
            this._rankPeriod = e;
        }
    }, {
        key: "setRankSortType",
        value: function(e) {
            this._rankSortType = e;
        }
    }, {
        key: "setRankMaxPerson",
        value: function(e) {
            this._rankMaxPerson = +e;
        }
    }, {
        key: "_isMaxCall",
        value: function(e) {
            this.cloudFunctionCallTimes++, this._startCallCloudFunctionTime || (this._startCallCloudFunctionTime = Date.now());
            var t = Math.ceil((Date.now() - this._startCallCloudFunctionTime) / 1e3);
            return 0 < t && this.cloudFunctionCallTimes / t > TOTAL_TIMES && (wx.showToast({
                title: "调用错误，".concat(e, "调用太频繁"),
                icon: "none"
            }), !0);
        }
    }, {
        key: "removeWorldRankData",
        value: function() {
            !this._runtime.isMiniGame || GameGlobal.isPublish ? this.unsupportTips() : this._isMaxCall("删除世界排行榜分数接口") || (wx.showLoading({
                title: "删除中..."
            }), wx.cloud.callFunction({
                name: "removedata",
                data: {
                    game_id: GameGlobal.game_id
                },
                success: function(e) {
                    0 === e.result.errcode ? wx.showToast({
                        title: "删除成功",
                        icon: "none"
                    }) : wx.showToast({
                        title: "删除失败",
                        icon: "none"
                    });
                },
                fail: function() {
                    wx.showToast({
                        title: "删除失败",
                        icon: "none"
                    });
                },
                complete: function() {
                    wx.hideLoading();
                }
            }));
        }
    }, {
        key: "tick",
        value: function(e) {
            var t;
            this.worldRankShow && this._rankList && (this.time <= this.duration && (t = this.easeOut(this.time, this.begin, this.change, this.duration), 
            this.time++, this._rankList.y = t), t = Math.min(Math.abs(this.speed) / 32, 1), 
            this.speed > TOTAL_TIMES ? this.speed -= t : this.speed < -1 ? this.speed += t : this.speed = 0, 
            0 !== this.speed && this._scrolling && (t = this.worldRankHeight - this._rankList.height, 
            t = Math.round(Math.min(0, t)), this._rankList.y < t ? (this._scrolling = !1, this.time = 0, 
            this.begin = this._rankList.y, this.change = t - this._rankList.y, this.duration = 20) : 0 < this._rankList.y ? (this._scrolling = !1, 
            this.time = 0, this.begin = this._rankList.y, this.change = -this._rankList.y, this.duration = 20) : (this._scrolling = !0, 
            this._rankList.y += Math.round(this.speed))));
        }
    }, {
        key: "renderWorldRank",
        value: function(e) {
            var t, n, i, r, s, o, a, h, l, u, d, c, f, _, m = this, p = 2 * this._runtime.devicePixel, k = 16 * p * 2;
            if (this.worldRankShow) return !e || e === this.cacheData ? void 0 : (this.cacheData = e, 
            this._rankList.destroy(), this._rankList = this.renderWorldList(e.rank_list, this.itemWidth, this.itemHeight, k, p), 
            this._rankListContainer.addChild(this._rankList), this._rankSelf.destroy(), this._rankSelf = this.renderRankItem(e.self_rank, 0, !0, this.itemWidth, this.itemHeight, k, p), 
            void this._rankSelfContainer.addChild(this._rankSelf));
            function g(e) {
                d && (e = e.data.getLocalPosition(a.parent), this.speed = (e.y - d.y) / (Date.now() - u) * 16, 
                d = null);
            }
            (e || this.cacheData) && (e ? this.cacheData = e : e = this.cacheData, this.worldRankShow = !0, 
            i = this._runtime.renderer.gameWidth, r = this._runtime.renderer.gameHeight, t = new this._runtime.RenderEngine.Container(), 
            this._rank = t, (n = new this._runtime.RenderEngine.Graphics()).beginFill(0), n.drawRect(-100, -100, 2 * i, 2 * r), 
            n.endFill(), n.alpha = .8, n.x = -i / 2, n.y = -r / 2, n.interactive = !0, this.bg = n, 
            i = this.startY, r = new this._runtime.RenderEngine.Sprite.from("img/close.png"), 
            (s = new this._runtime.RenderEngine.Text(this._rankTitle || "世界排行榜", new this._runtime.RenderEngine.TextStyle({
                align: "center",
                fontFamily: "Microsoft YaHei",
                fontSize: k,
                fill: "#FFFFFF",
                breakWords: !1,
                wordWrap: !1
            }))).texture.baseTexture.scaleMode = 1, s.y = i + 40 * p, s.anchor.set(.5), this.title = s, 
            i += 46 * p + 28 * p, o = e.rank_list, e = e.self_rank, this._rankListContainer = new this._runtime.RenderEngine.Container(), 
            a = new this._runtime.RenderEngine.Container(), l = new this._runtime.RenderEngine.Graphics(), 
            this._rankScroll = a, (this._rankMask = l).lineStyle(0), l.beginFill(16777215, 1), 
            l.drawRoundedRect(0, 0, this.itemWidth, this.worldRankHeight, 8 * p), l.endFill(), 
            (h = new this._runtime.RenderEngine.Graphics()).lineStyle(0), h.beginFill(16777215, 1), 
            h.drawRoundedRect(0, 0, this.itemWidth, this.worldRankHeight, 8 * p), h.endFill(), 
            this._rankBackground = h, this._rankList = this.renderWorldList(o, this.itemWidth, this.itemHeight, k, p), 
            this._rankListContainer.addChild(this._rankList), a.addChild(h, this._rankListContainer, l), 
            a.x = -this.itemWidth / 2, a.y = i, a.mask = l, i += this.worldRankHeight + 8 * p, 
            this._rankSelfContainer = new this._runtime.RenderEngine.Container(), this._rankSelfContainer.x = -this.itemWidth / 2, 
            this._rankSelfContainer.y = i, this._rankSelf = this.renderRankItem(e, 0, !0, this.itemWidth, this.itemHeight, k, p), 
            this._rankSelfContainer.addChild(this._rankSelf), i += this.itemHeight + 40 * p, 
            r.width = 40 * p, r.height = 40 * p, r.x = -r.width / 2 + (this.horizontal ? this.itemWidth / 2 + 200 : 0), 
            r.y = this.horizontal ? 0 : i, r.interactive = !0, this.close = r, h = "排行榜根据历史所有用户数据排名，仅展示前" + this._rankMaxPerson + "人", 
            "day" === this._rankPeriod ? h = "注：排行榜每天凌晨清空，仅展示前" + this._rankMaxPerson + "人" : "month" === this._rankPeriod ? h = "注：排行榜每月1号凌晨清空，仅展示前" + this._rankMaxPerson + "人" : "week" === this._rankPeriod && (h = "注：排行榜每周一凌晨清空，仅展示前" + this._rankMaxPerson + "人"), 
            (l = new this._runtime.RenderEngine.Text(h, new this._runtime.RenderEngine.TextStyle({
                align: "center",
                fontFamily: "Microsoft YaHei",
                fontSize: k / 3,
                fill: "#FFFFFF",
                breakWords: !1,
                wordWrap: !1
            }))).texture.baseTexture.scaleMode = 1, l.alpha = .5, l.x = -l.width / 2, l.y = i - r.height / 2 - 15, 
            this._tips = l, t.addChild(n, s, a, this._rankSelfContainer, r, l), this._runtime.renderer.stage.addChild(t), 
            r.on("pointerdown", function() {
                m._closeRank && m._closeRank(), m.userInfoButton && (m.userInfoButton.show(), m.userInfoButtonVisible = !0);
            }), f = this.itemHeight, _ = (-Math.max(0, o.length - (this.horizontal ? 3 : 6)) - 1) * this.itemHeight, 
            a.interactive = !0, a.on("pointerdown", function(e) {
                this.speed = 0, u = Date.now(), d = e.data.getLocalPosition(a.parent), c = this._rankList.position.y;
            }, this), a.on("pointermove", function(e) {
                d && (this._scrolling = !0, e = e.data.getLocalPosition(a.parent).y - d.y, 0 !== Math.round(e) && (e = c + e, 
                e = Math.min(e, f), e = Math.max(e, _), this._rankList.y = e));
            }, this), a.on("pointerup", function(e) {
                g.call(this, e);
            }, this), a.on("pointerout", function(e) {
                g.call(this, e);
            }, this), a.on("pointerupoutside", function(e) {
                g.call(this, e);
            }, this));
        }
    }, {
        key: "_closeRank",
        value: function() {
            this.worldRankVisible = !1, this.worldRankShow = !1, this._runtime.renderer.stage.removeChild(this._rank), 
            this.bg.destroy(), this.close.destroy(), this.title.destroy(), this._rankList.destroy(), 
            this._rankSelf.destroy(), this._rankBackground.destroy(), this._rankScroll.destroy(), 
            this._rankMask.destroy(), this._rank.destroy(), this._tips.destroy(), this._rankList = null, 
            this.close = null, this.bg = null, this._tips = null;
        }
    }, {
        key: "renderRankItem",
        value: function(e, t, n, i, r, s, o, a) {
            var h = new this._runtime.RenderEngine.Container(), l = new this._runtime.RenderEngine.Graphics();
            if (l.beginFill(t % 2 == 0 ? 16777215 : 15856885, 1), n ? l.drawRoundedRect(0, 0, i, r, 8 * o) : l.drawRect(0, 0, i, r), 
            l.endFill(), !e) return h.addChild(l), h.position.y = t * r, h;
            var n = new this._runtime.RenderEngine.Sprite.from(e.userInfo.avatarUrl || "img/head.png"), u = new this._runtime.RenderEngine.Text(-1 === e.rank ? "/" : e.rank, new this._runtime.RenderEngine.TextStyle({
                align: "center",
                fontFamily: "Microsoft YaHei",
                fontSize: s,
                fill: e.rank <= 3 ? "#FF3E3E" : "#B3B3B3",
                breakWords: !1,
                wordWrap: !1
            })), d = (u.texture.baseTexture.scaleMode = 1, new this._runtime.RenderEngine.Text(e.userInfo.nickName || "匿名用户", new this._runtime.RenderEngine.TextStyle({
                fontFamily: "Microsoft YaHei",
                fontSize: s,
                fill: "#151E45",
                breakWords: !1,
                wordWrap: !1
            }))), e = (d.texture.baseTexture.scaleMode = 1, new this._runtime.RenderEngine.Text(a ? "" : -1 === e.rank ? "暂无数据" : e.score + this._rankUnit || "", new this._runtime.RenderEngine.TextStyle({
                align: "right",
                fontFamily: "Microsoft YaHei",
                fontSize: s,
                fill: "#3EAE1C",
                breakWords: !1,
                wordWrap: !1
            })));
            return e.texture.baseTexture.scaleMode = 1, n.width = 32 * o, n.height = 32 * o, 
            u.anchor.set(.5), d.anchor.set(0, .5), e.anchor.set(0, .5), u.scale.set(.5), d.scale.set(.5), 
            e.scale.set(.5), u.position.set(20 * o, r / 2), n.position.set(40 * o, 16 * o), 
            d.position.set(84 * o + (a ? 60 * o : 0), r / 2), e.position.set(i - 24 * o - e.width, r / 2), 
            h.addChild(l, u, n, d, e), h.position.y = t * r, h;
        }
    }, {
        key: "renderWorldList",
        value: function(e, t, n, i, r) {
            var s, o = new this._runtime.RenderEngine.Container(), a = e.length;
            if (0 == a) return s = this.renderRankItem({
                score: "",
                userInfo: {
                    nickName: "暂无",
                    avatarUrl: ""
                },
                rank: ""
            }, 0, 0, t, n, i, r, !0), o.addChild(s), o;
            for (var h = 0; h < a; h++) {
                var l = e[h], l = (l.rank = h + 1, this.renderRankItem(l, h, 0, t, n, i, r));
                o.addChild(l);
            }
            return o;
        }
    } ]), i;
}();

exports.default = _default;