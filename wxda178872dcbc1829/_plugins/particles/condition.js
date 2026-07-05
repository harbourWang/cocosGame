Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var config = {
    type: "list",
    name: "OPTION_LIST",
    options: LB.BlockHelper.getPluginInScene,
    args: "Particles",
    isTarget: !0
}, _default = exports.default = {
    isPlaying: {
        msg: "%1 是否在播放",
        args: [ config ],
        fun: function() {
            return this.particleStream.playing;
        }
    }
};