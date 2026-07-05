Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    isResourceLoaded: {
        msg: "%1资源预加载完成",
        fun: function(e) {
            e = this._runtime.runtimeData.resourceProgress[e];
            return !(!e || 100 !== e);
        },
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSceneList
        } ]
    }
};