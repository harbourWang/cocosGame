var g = function() {
    return this;
}() || Function("return this")(), hadRuntime = g.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime"), oldRuntime = hadRuntime && g.regeneratorRuntime;

if (g.regeneratorRuntime = void 0, module.exports = require("./runtime"), hadRuntime) g.regeneratorRuntime = oldRuntime; else try {
    delete g.regeneratorRuntime;
} catch (e) {
    g.regeneratorRuntime = void 0;
}