Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../sdk/IPluginBase"), require("../sdk/IPluginInstanceBase");

var _index = _interopRequireDefault(require("./logic/index")), _index2 = _interopRequireDefault(require("./control/index")), _index3 = _interopRequireDefault(require("./motion/index")), _index4 = _interopRequireDefault(require("./operators/index")), _index5 = _interopRequireDefault(require("./sound/index")), _index6 = _interopRequireDefault(require("./looks/index")), _index7 = _interopRequireDefault(require("./animation/index")), _index8 = _interopRequireDefault(require("./sensing/index")), _index9 = _interopRequireDefault(require("./minigame/index")), _index10 = _interopRequireDefault(require("./data/index")), _index11 = _interopRequireDefault(require("./procedure/index"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _plugins = {
    Logic: _index.default,
    Control: _index2.default,
    Motion: _index3.default,
    Looks: _index6.default,
    Animation: _index7.default,
    Sensing: _index8.default,
    Operators: _index4.default,
    Data: _index10.default,
    Procedure: _index11.default,
    Sound: _index5.default,
    Minigame: _index9.default
}, _default = (LB.Plugins = Object.assign(LB.Plugins, _plugins), exports.default = _plugins);