Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getGameJsonConfig = getGameJsonConfig;

var _base = _interopRequireDefault(require("./base64.js")), _constant = require("../constant");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getGameJsonConfig(o) {
    var e, n = {};
    try {
        n = JSON.parse(o);
    } catch (e) {
        console.log(e), n = JSON.parse(decodeURIComponent((0, _base.default)(o)));
    }
    for (e in n.components) {
        var t, a = n.components[e];
        for (t in a.blocks) _constant.OPCODE.eventGameStart === a.blocks[t].opcode && (a.blocks[t].opcode = "10d046370a9ac562557ccf254db3c484"), 
        _constant.OLDCODE_TRANSFORM_NEWCODE.af === a.blocks[t].opcode && (a.blocks[t].opcode = "ad7914e9f7cdc9b852298566fca16df88.a817f0fde4a498635713f539fa51dca4");
    }
    return n;
}