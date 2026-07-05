Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var config = {
    type: "list",
    name: "OPTION_LIST",
    options: LB.BlockHelper.getPluginInScene,
    args: "Camera",
    isTarget: !0
}, _default = exports.default = {
    isCameraOpen: {
        msg: "%1 是否打开了摄像头",
        args: [ config ],
        fun: function() {
            return this.isCameraOpen();
        }
    },
    isFaceDetectOpen: {
        msg: "%1 是否打开了人脸识别",
        args: [ config ],
        fun: function() {
            return this.isFaceDetectOpen();
        }
    },
    isFaceDetected: {
        msg: "%1 是否检测到了人脸",
        args: [ config ],
        fun: function() {
            return this.isFaceDetected();
        }
    },
    isHeadNod: {
        msg: "%1 是否点头",
        args: [ config ],
        fun: function() {
            return this.isHeadNod();
        }
    }
};