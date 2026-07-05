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
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, _toPropertyKey(n.key), n);
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : e + "";
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var i = e[Symbol.toPrimitive];
    if (void 0 === i) return ("string" === t ? String : Number)(e);
    i = i.call(e, t || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var CameraEngine = exports.default = function() {
    return _createClass(function e(t) {
        _classCallCheck(this, e), this._isCameraOpened = !1, this._isFacedetectOpened = !1, 
        this._isFacedetectOpening = !1, this._isFacedetected = !1, this._isMiniGame = t.isMiniGame, 
        this._dpr = t.devicePixel, this._cameraFrame = null, this._nosex = -1, this._nosey = -1, 
        this._maxQueueSize = 2, this._queueSize = 0, this._isMiniGame ? this._camera = wx.createCamera({
            width: 1,
            height: 1,
            devicePosition: "front",
            size: "medium"
        }) : this._video = document.createElement("video");
    }, [ {
        key: "Camera",
        get: function() {
            return this._isMiniGame ? this._camera : this._video;
        }
    }, {
        key: "isCameraOpen",
        get: function() {
            return this._isCameraOpened;
        }
    }, {
        key: "cameraFrame",
        get: function() {
            return this._isMiniGame ? this._cameraFrame : this._stream;
        }
    }, {
        key: "isFaceDetectOpen",
        get: function() {
            return this._isFacedetectOpened;
        }
    }, {
        key: "isFaceDetected",
        get: function() {
            return this._isFacedetected;
        }
    }, {
        key: "NoseX",
        get: function() {
            return this._nosex;
        }
    }, {
        key: "NoseY",
        get: function() {
            return this._nosey;
        }
    }, {
        key: "openCamera",
        value: function() {
            var t = this;
            if (this._isMiniGame) {
                if (this._isCameraOpened) return !0;
                this._isCameraOpened = !0, this._camera.listenFrameChange(), this._camera.onCameraFrame(function(e) {
                    t._cameraFrame = e, t._isFacedetectOpened && t.faceDetect(e.data, e.width, e.height);
                });
            } else navigator.mediaDevices.getUserMedia({
                video: !0,
                audio: !1
            }).then(function(e) {
                t._isCameraOpened = !0, t._stream = e, t._video.srcObject = t._stream;
            }).catch(function(e) {
                console.log("An error occurred: " + e);
            });
        }
    }, {
        key: "closeCamera",
        value: function() {
            this._isMiniGame ? (this._camera.closeFrameChange(), this._camera.destroy(), this._isCameraOpened = !1) : this._stream && this._stream.getTracks && this._stream.getTracks().forEach(function(e) {
                e.stop();
            });
        }
    }, {
        key: "closeFaceDetect",
        value: function() {
            this._isFacedetectOpened = !1, this._isFacedetectOpening = !1, this.isMiniGame && wx.stopFaceDetect && wx.stopFaceDetect();
        }
    }, {
        key: "openFaceDetect",
        value: function() {
            var t = this;
            this._isMiniGame ? this._isFacedetectOpened || this._isFacedetectOpening || (this._isFacedetectOpening = !0, 
            wx.initFaceDetect && wx.initFaceDetect({
                success: function(e) {
                    t._isFacedetectOpening = !1, 0 == e.errCode ? t._isFacedetectOpened = !0 : t._isFacedetectOpened = !1;
                },
                fail: function(e) {
                    2 === e.errCode && (t._isFacedetectOpened = !0);
                }
            })) : (this._isFacedetectOpened = !0, this._isFacedetected = !0);
        }
    }, {
        key: "faceDetect",
        value: function(e, t, i) {
            var n = this;
            this._queueSize > this._maxQueueSize || (this._queueSize++, wx.faceDetect && wx.faceDetect({
                frameBuffer: e,
                width: t,
                height: i,
                __use_native_direct_buffer__: !0,
                success: function(e) {
                    n._queueSize--, 0 === e.errCode ? (n._nosex = e.x, n._nosey = e.y, n._isFacedetected = !0) : n._isFacedetected = !1;
                },
                fail: function(e) {
                    n._queueSize--;
                }
            }));
        }
    } ]);
}();