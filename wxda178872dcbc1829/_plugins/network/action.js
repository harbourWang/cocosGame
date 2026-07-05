Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    request: {
        msg: "如果 以%3方式请求网络接口%1 数据%2 成功 %& 否则 %& %}",
        args: [ {
            type: "input",
            name: "url",
            input: "string",
            default: "https://xxx.com"
        }, {
            name: "data",
            type: "input",
            input: "string",
            default: '{"a":1,"b":2}'
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "POST", "POST" ], [ "GET", "GET" ], [ "OPTIONS", "OPTIONS" ], [ "HEAD", "HEAD" ], [ "PUT", "PUT" ], [ "DELETE", "DELETE" ], [ "TRACE", "TRACE" ], [ "CONNECT", "CONNECT" ] ]
        } ],
        fun: function(e, t, u) {
            this.request(e, t, u);
        }
    },
    login: {
        msg: "如果 微信登录 成功 %& 否则 %& %}",
        fun: function(e) {
            this.wxLogin(e);
        },
        args: []
    },
    clearRequestHeader: {
        msg: "清空请求头",
        fun: function() {
            this.clearRequestHeader();
        },
        args: []
    },
    setRequestHeader: {
        msg: "设置请求头 %1 的值为 %2",
        fun: function(e, t) {
            this.setRequestHeader(e, t);
        },
        args: [ {
            name: "key",
            type: "input",
            input: "string",
            default: "key"
        }, {
            name: "value",
            type: "input",
            input: "string",
            default: "value"
        } ]
    }
};