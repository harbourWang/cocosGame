Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    id: "Videoview",
    type: "general",
    name: "视频组件",
    desc: "UI组件",
    author: "",
    version: 1,
    color: "orange",
    data: {
        name: "视频",
        icon: "1_tQuySZUcRBM"
    },
    properties: {
        url: {
            name: "视频地址",
            type: "string",
            value: "https://xxx.com/video.mp4",
            desc: "视频的地址"
        },
        width: {
            name: "宽度",
            type: "number",
            value: 500,
            desc: "视频的宽度，单位是像素"
        },
        height: {
            name: "高度",
            type: "number",
            value: 300,
            desc: "视频的高度，单位像素"
        },
        autoplay: {
            name: "自动播放",
            type: "select",
            options: [ [ "否", 0 ], [ "是", 1 ] ],
            value: 0,
            desc: "是否自动播放"
        },
        loop: {
            name: "循环播放",
            type: "select",
            options: [ [ "否", 0 ], [ "是", 1 ] ],
            value: 0,
            desc: "是否循环播放"
        },
        controls: {
            name: "显示控件",
            type: "boolean",
            value: !0,
            desc: "视频是否显示控件"
        },
        poster: {
            name: "封面图",
            type: "string",
            value: "https://mmgame.qpic.cn/image/1891782049f68e41ec67eb8b977c3411be49167966fb10155c683bb5aff20ed2/0",
            desc: "视频的封面"
        }
    }
};