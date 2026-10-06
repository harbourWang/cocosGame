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
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
        var r = _superPropBase(e, t);
        if (r) return r = Object.getOwnPropertyDescriptor(r, t), r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value;
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
    var r = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(n);
        return _possibleConstructorReturn(this, r ? (e = _getPrototypeOf(this).constructor, 
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

var _default = function() {
    _inherits(r, LB.SDK.IPluginInstanceBase);
    var n = _createSuper(r);
    function r(e, t) {
        return _classCallCheck(this, r), (e = n.call(this, e))._userInfo = null, e.options = t, 
        e.renderButton(t.btnSprite), e.bindEvent(), e.startTicking(), e;
    }
    return _createClass(r, [ {
        key: "userInfo",
        get: function() {
            return this._userInfo;
        }
    }, {
        key: "renderButton",
        value: function(r) {
            var o = this, i = r.replace(/^https:\/\/gamemaker\.qpic\.cn\/luban\//, "");
            this._runtime.isMiniGame ? wx.getSetting({
                success: function(e) {
                    var n, t = o._runtime.RenderEngine.utils.TextureCache[i];
                    e.authSetting["scope.userInfo"] ? o.drawUserInfoButton(r, i, t) : (n = o.renderTarget.getGlobalPosition(), 
                    t ? o.createRankBtnInMiniGame(r, t, n) : ((e = new o._runtime.RenderEngine.Loader()).add(i, r, {
                        crossOrigin: !0,
                        loadType: o._runtime.RenderEngine.LoaderResource.LOAD_TYPE.IMAGE,
                        xhrType: o._runtime.RenderEngine.LoaderResource.XHR_RESPONSE_TYPE.BLOB
                    }), e.load(function(e, t) {
                        t = t[i].texture;
                        o.createRankBtnInMiniGame(r, t, n);
                    })));
                }
            }) : this.drawUserInfoButton(r, i);
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
            var r = this, o = t.width / 2 * r._runtime.renderer.stage.scale.x, t = t.height / 2 * r._runtime.renderer.stage.scale.y, e = wx.createUserInfoButton({
                type: "image",
                lang: this.options.lang || "en",
                image: e,
                style: {
                    left: n.x / r._runtime.devicePixel / 2 - o / 2,
                    top: n.y / r._runtime.devicePixel / 2 - t / 2,
                    width: o,
                    height: t
                }
            });
            e.onTap(function(e) {
                e.userInfo && (r._userInfo = e.userInfo);
            }), this.userInfoButton = e, this.userInfoButtonVisible = !0, this.renderTarget.visible || (this.userInfoButton.hide(), 
            this.userInfoButtonVisible = !1);
        }
    }, {
        key: "addUserInfoBtn",
        value: function() {
            this.btnRank.interactive = !0, this.btnRank.anchor.set(.5), this.btnRank.width *= this._runtime.devicePixel, 
            this.btnRank.height *= this._runtime.devicePixel, this.renderTarget.addChild(this.btnRank);
        }
    }, {
        key: "drawUserInfoButton",
        value: function(e, n, t) {
            var r = this;
            this.btnRank ? this.btnRank.texture = t || new this._runtime.RenderEngine.Texture.from(e) : t ? (this.btnRank = new this._runtime.RenderEngine.Sprite.from(t), 
            this.addUserInfoBtn()) : ((t = new this._runtime.RenderEngine.Loader()).add(n, e, {
                crossOrigin: !0,
                loadType: this._runtime.RenderEngine.LoaderResource.LOAD_TYPE.IMAGE,
                xhrType: this._runtime.RenderEngine.LoaderResource.XHR_RESPONSE_TYPE.BLOB
            }), t.load(function(e, t) {
                r.btnRank = new r._runtime.RenderEngine.Sprite.from(t[n].texture), r.addUserInfoBtn();
            })), this.renderTarget.on(this._runtime.isMiniGame ? "tap" : "click", function() {
                var t;
                r._runtime.isMiniGame ? (t = r, wx.getUserInfo({
                    lang: r.options.lang || "en",
                    success: function(e) {
                        e.userInfo && (t._userInfo = e.userInfo);
                    }
                })) : r.unsupportTips();
            });
        }
    }, {
        key: "release",
        value: function() {
            this.userInfoButton && this.userInfoButton.destroy(), _get(_getPrototypeOf(r.prototype), "release", this).call(this);
        }
    }, {
        key: "unsupportTips",
        value: function() {
            this._runtime.isMiniGame || window.showTips("仅手机微信上可调用");
        }
    }, {
        key: "tick",
        value: function(e) {}
    } ]), r;
}();

exports.default = _default;