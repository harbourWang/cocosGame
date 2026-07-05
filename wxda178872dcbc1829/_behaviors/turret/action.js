Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    addTarget: {
        msg: "添加目标敌人%1",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: LB.BlockHelper.getSpriteALLList
        } ],
        fun: function(e) {
            this._addTarget(e);
        }
    },
    setRadius: {
        msg: "设置炮塔半径 %1",
        args: [ {
            type: "input",
            name: "VALUE",
            input: "number",
            default: 200
        } ],
        fun: function(e) {
            this.setRangle(e);
        }
    }
};