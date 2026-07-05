Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = exports.default = {
    run: {
        msg: "%1 缓动动画",
        args: [ {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "暂停", "pause" ], [ "恢复", "continue" ], [ "停止", "end" ] ]
        } ],
        fun: function(e) {
            switch (e) {
              case "pause":
                this.pause();
                break;

              case "continue":
                this.start();
                break;

              case "end":
                this.end();
            }
        }
    },
    setAttributes: {
        msg: "在 %1 秒内将 %2 以 %3 %4 方式缓动到 %5",
        args: [ {
            name: "time",
            type: "input",
            input: "p_number",
            default: "2"
        }, {
            type: "list",
            name: "CHOICE_LIST",
            options: [ [ "X坐标", "x" ], [ "Y坐标", "y" ], [ "透明度", "alpha" ], [ "宽度", "width" ], [ "高度", "height" ], [ "X缩放比例", "scaleX" ], [ "Y缩放比例", "scaleY" ] ]
        }, {
            type: "list",
            name: "OPTION_LIST",
            options: [ [ "Linear", "Linear" ], [ "Quadratic", "Quadratic" ], [ "Cubic", "Cubic" ], [ "Quartic", "Quartic" ], [ "Quintic", "Quintic" ], [ "Sinusoidal", "Sinusoidal" ], [ "Exponential", "Exponential" ], [ "Circular", "Circular" ], [ "Elastic", "Elastic" ], [ "Back", "Back" ], [ "Bounce", "Bounce" ] ]
        }, {
            type: "list",
            name: "OPTION_LIST1",
            options: [ [ "easeIn", "easeIn" ], [ "easeOut", "easeOut" ], [ "easeInOut", "easeInOut" ] ]
        }, {
            name: "value",
            type: "input",
            input: "number"
        } ],
        fun: function(e, t, a, i, s) {
            switch (this._obj[t] = {}, this._obj[t].tweenType = a, this._obj[t].easeType = i, 
            this._obj[t].time = Number(e), this._obj[t].target = Number(s), this._obj[t].currentTime = 0, 
            t) {
              case "x":
                this._currentX = this._instance.renderer.getX();
                break;

              case "y":
                this._currentY = this._instance.renderer.getY();
                break;

              case "alpha":
                this.cacheAlpha = this._instance.renderer.alpha;
                break;

              case "width":
                this._cacheWidth = this._instance.renderer.width;
                break;

              case "height":
                this._cacheHeight = this._instance.renderer.height;
                break;

              case "scaleX":
                this._cacheScaleX = this._instance.renderer.scale.x;
                break;

              case "scaleY":
                this._cacheScaleY = this._instance.renderer.scale.y;
            }
            this.start();
        }
    }
};