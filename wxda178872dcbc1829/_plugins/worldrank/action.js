Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    showWorldRank: {
        msg: "打开世界排行榜",
        visible: !1,
        fun: function() {
            this.showWorldRank();
        }
    },
    hideWorldRank: {
        msg: "隐藏世界排行榜",
        visible: !1,
        fun: function() {
            this.hideWorldRank();
        }
    },
    hideWorldRankBtn: {
        msg: "隐藏世界排行榜按钮",
        fun: function() {
            this.userInfoButton ? (this.userInfoButton.hide(), this.userInfoButtonVisible = !1) : this.renderTarget.visible = !1;
        }
    },
    showWorldRankBtn: {
        msg: "显示世界排行榜按钮",
        fun: function() {
            this.userInfoButton ? (this.userInfoButton.show(), this.userInfoButtonVisible = !0) : this.renderTarget.visible = !0;
        }
    },
    setWorldRankTitle: {
        msg: "设置世界排行榜的标题 %1",
        args: [ {
            type: "input",
            name: "TEXT_SET",
            input: "string",
            default: "分数排行榜"
        } ],
        fun: function() {
            this.setTitle.apply(this, arguments);
        }
    },
    setWorldRankUnit: {
        msg: "设置世界排行榜的单位 %1",
        args: [ {
            type: "input",
            name: "TEXT_SET",
            input: "string",
            default: "分"
        } ],
        fun: function() {
            this.setRankUnit.apply(this, arguments);
        }
    },
    uploadData: {
        msg: "上传世界排行榜数据 %1",
        args: [ {
            type: "input",
            name: "CHANGE",
            input: "number",
            default: 0
        } ],
        fun: function() {
            this.uploadData.apply(this, arguments);
        }
    },
    removeWorldRankData: {
        msg: "删除世界排行榜数据",
        fun: function() {
            this.removeWorldRankData.apply(this, arguments);
        }
    },
    setWorldRankPeriod: {
        msg: "设置世界排行榜周期 %1",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "历史累计", "history" ], [ "月", "month" ], [ "周", "week" ], [ "日", "day" ] ]
        } ],
        fun: function() {
            this.setRankPeriod.apply(this, arguments);
        }
    },
    setWorldRankSort: {
        msg: "设置世界排行榜排序%1",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "降序", "down" ], [ "升序", "up" ] ]
        } ],
        fun: function() {
            this.setRankSortType.apply(this, arguments);
        }
    },
    setWorldRankMaxPerson: {
        msg: "世界排行榜最多显示%1人",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "10", "10" ], [ "30", "30" ], [ "50", "50" ], [ "100", "100" ] ]
        } ],
        fun: function() {
            this.setRankMaxPerson.apply(this, arguments);
        }
    }
};