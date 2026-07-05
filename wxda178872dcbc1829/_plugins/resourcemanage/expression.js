Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    getResourceLoaderProgress: {
        msg: "%1资源加载进度",
        fun: function(e) {
            e = this._runtime.runtimeData.resourceProgress[e];
            return e ? 100 === e ? 100 : this._runtime.renderer.loaderManager.progress : 0;
        },
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSceneList
        } ]
    }
};