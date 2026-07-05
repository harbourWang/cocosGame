Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var config = {
    type: "list",
    name: "OPTION_LIST",
    options: LB.BlockHelper.getPluginInScene,
    args: "Scrollview",
    isTarget: !0
}, _default = exports.default = {
    setText: {
        msg: "设置%1的 %3 为 %2",
        args: [ config, {
            type: "input",
            name: "p_number",
            input: "string",
            default: 10
        }, {
            type: "list",
            name: "OPTION_LIST1",
            options: [ [ "总个数", "total" ], [ "列数", "column" ], [ "行数", "row" ], [ "水平间距", "marginHorizontal" ], [ "垂直间距", "marginVertical" ], [ "透明度", "alpha" ], [ "圆角", "radius" ], [ "宽度", "width" ], [ "高度", "height" ] ]
        } ],
        fun: function(t, e, i) {
            -1 !== [ "width", "height", "radius", "marginHorizontal", "marginVertical" ].indexOf(i) ? this.setValue(i, e) : this.setNumber(i, e);
        }
    },
    scrollToItemByIndex: {
        msg: "%1滚动到第 %2 个子元素",
        args: [ config, {
            type: "input",
            name: "p_number",
            input: "string",
            default: 1
        } ],
        fun: function(t, e) {
            this.scrollTo(e);
        }
    }
};