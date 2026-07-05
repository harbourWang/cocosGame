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
    getSetting: {
        msg: "%1 拉起摄像头授权",
        args: [ config ],
        fun: function() {
            this.getSetting();
        }
    },
    openCamera: {
        msg: "%1 打开摄像头",
        args: [ config ],
        fun: function() {
            this.openCamera();
        }
    },
    closeCamera: {
        msg: "%1 关闭摄像头",
        args: [ config ],
        fun: function() {
            this.closeCamera();
        }
    },
    openFaceDetect: {
        msg: "%1 打开人脸识别",
        args: [ config ],
        fun: function() {
            this.openFaceDetect();
        }
    },
    closeFaceDetect: {
        msg: "%1 关闭人脸识别",
        args: [ config ],
        fun: function() {
            this.closeFaceDetect();
        }
    }
};