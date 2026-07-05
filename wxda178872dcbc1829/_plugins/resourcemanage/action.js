Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    set: {
        msg: "预加载%1的资源",
        fun: function(e) {
            this._runtime.runtimeData.preloadSceneRes(e);
        },
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSceneList
        } ]
    }
};