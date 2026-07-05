Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    getText: {
        msg: "%1的%2",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getPluginInScene,
            args: "Scrollview",
            isTarget: !0
        }, {
            type: "list",
            name: "OPTION_LIST1",
            options: [ [ "总个数", "total" ], [ "列数", "column" ], [ "行数", "row" ], [ "垂直间距", "marginVertical" ], [ "水平间距", "marginHorizontal" ], [ "透明度", "alpha" ], [ "圆角", "radius" ], [ "宽度", "width" ], [ "高度", "height" ] ]
        } ],
        fun: function(e, t) {
            return this.options[t];
        }
    }
};