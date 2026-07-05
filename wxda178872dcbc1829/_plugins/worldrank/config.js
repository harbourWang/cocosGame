Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Worldrank",
    type: "general",
    name: "世界排行榜",
    desc: "展示游戏中的世界排行榜",
    author: "",
    version: 1,
    color: "orange",
    data: {
        name: "世界排行榜",
        icon: "1_Bg2prR4dRBM"
    },
    properties: {
        period: {
            name: "排序周期",
            type: "select",
            options: [ [ "历史累计", "history" ], [ "月", "month" ], [ "周", "week" ], [ "日", "day" ] ],
            value: "history"
        },
        title: {
            name: "排行榜标题",
            type: "string",
            value: "世界排行榜",
            desc: ""
        },
        unit: {
            name: "排行榜单位",
            type: "string",
            value: "分",
            desc: "作为分数的后缀展示在排行榜上"
        },
        btnSprite: {
            name: "排行榜按钮图标",
            type: "image",
            value: "https://gamemaker.qpic.cn/luban/1_37323063343637342d333962312d346232652d393332332d326561343665353066333337"
        },
        maxPerson: {
            name: "最多显示人数",
            type: "select",
            options: [ [ "10", "10" ], [ "30", "30" ], [ "50", "50" ], [ "100", "100" ] ],
            value: "100"
        },
        sortType: {
            name: "排序方式",
            type: "select",
            options: [ [ "降序", "down" ], [ "升序", "up" ] ],
            value: "down"
        }
    }
};