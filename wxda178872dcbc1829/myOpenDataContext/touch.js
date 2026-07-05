function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var o = e[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(o.key), o);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}

function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : t + "";
}

function _toPrimitive(t, e) {
    if ("object" != _typeof(t) || !t) return t;
    var i = t[Symbol.toPrimitive];
    if (void 0 === i) return ("string" === e ? String : Number)(t);
    i = i.call(t, e || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var Touch = function() {
    return _createClass(function t() {
        _classCallCheck(this, t), this.needProcess = !1, this.startFunc = this.touchStartHandler.bind(this), 
        this.endFunc = this.touchEndHandler.bind(this), this.moveFunc = this.touchMoveHandler.bind(this);
    }, [ {
        key: "reset",
        value: function() {
            this.touchTime = new Date(), this.touchStartX = 0, this.touchStartY = 0, this.start = 0, 
            this.end = 0, this.move = 0, this.target = 0, this.scroll = null, cancelAnimationFrame(this.animate);
        }
    }, {
        key: "enable",
        value: function() {
            this.reset(), this.needProcess = !0, this.bindTouchEvent();
        }
    }, {
        key: "disable",
        value: function() {
            this.needProcess = !1;
        }
    }, {
        key: "setTouchRange",
        value: function(t, e, i) {
            this.enable(), this.start = t, this.end = e, 0 === t && 0 === e || (this.scroll = i, 
            this.animate = requestAnimationFrame(this.loop.bind(this)));
        }
    }, {
        key: "limitTarget",
        value: function(t) {
            var e = t;
            return t > this.end ? e = this.end : t < this.start && (e = this.start), e;
        }
    }, {
        key: "bindTouchEvent",
        value: function() {
            this.hasTouchBind || (this.hasTouchBind = !0, wx.onTouchStart(this.startFunc), wx.onTouchMove(this.moveFunc), 
            wx.onTouchEnd(this.endFunc));
        }
    }, {
        key: "offTouchEvent",
        value: function() {
            wx.offTouchStart(this.startFunc), wx.offTouchMove(this.moveFunc), wx.offTouchEnd(this.endFunc);
        }
    }, {
        key: "touchStartHandler",
        value: function(t) {
            this.touchStartX = t.touches[0].clientX, this.touchStartY = t.touches[0].clientY, 
            this.touchTime = new Date();
        }
    }, {
        key: "touchMoveHandler",
        value: function(t) {
            t = t.touches[0].clientY;
            (2 < this.touchStartY - t || this.touchStartY - t < -2) && (this.target -= this.touchStartY - t), 
            this.target = this.limitTarget(this.target), this.touchStartY = t;
        }
    }, {
        key: "touchEndHandler",
        value: function() {
            (Date.now() - this.touchTime) / 1e3 < .9 && (this.target += .7 * (this.target - this.move) / ((Date.now() - this.touchTime) / 1e3), 
            this.target = this.limitTarget(this.target));
        }
    }, {
        key: "loop",
        value: function() {
            this.needProcess ? (.1 < Math.abs(this.target - this.move) ? (this.move += .1 * (this.target - this.move), 
            this.scroll && this.scroll(this.move)) : this.move = this.target, this.animate = requestAnimationFrame(this.loop.bind(this))) : cancelAnimationFrame(this.animate);
        }
    } ]);
}(), _default = exports.default = new Touch();