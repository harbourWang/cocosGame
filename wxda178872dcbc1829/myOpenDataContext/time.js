function getCurrTime() {
    return parseInt(+new Date() / 1e3);
}

function deepCopy(t) {
    try {
        return JSON.parse(JSON.stringify(t));
    } catch (e) {
        return t;
    }
}

function isLeapYear(e) {
    return null == e ? null : e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0;
}

function getMonthLastDay(e, t) {
    if (null == e || null == t) return null;
    for (var n = [ [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ] ]; t < 0; ) --e, 
    t += 12;
    return n[isLeapYear(e)][t];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deepCopy = deepCopy, exports.getCurrTime = getCurrTime, exports.getFirstDayOfSomeMonthsBefore = getFirstDayOfSomeMonthsBefore, 
exports.getLastDayOfSomeMonthsBefore = getLastDayOfSomeMonthsBefore, exports.getLastSunday = getLastSunday, 
exports.getMonday = getMonday, exports.getSomeDaysBefore = getSomeDaysBefore;

var currHours = new Date().getHours();

function getSomeDaysBefore(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0, n = (null == e && (e = 0), 
    0), n = null == t ? new Date() : new Date(t), t = new Date(n.getTime() - 24 * e * 3600 * 1e3), n = t.getFullYear(), e = t.getMonth(), t = t.getDate();
    return {
        ms: +new Date(n, e, t),
        s: parseInt(+new Date(n, e, t) / 1e3)
    };
}

function getMonday(e) {
    var t = 0, n = 0, n = null == e ? (t = new Date()).getTime() : (t = new Date(e), 
    deepCopy(e));
    return getSomeDaysBefore(0 == t.getDay() ? 6 : t.getDay(), n);
}

function getLastSunday(e) {
    var t = 0, n = 0, n = null == e ? (t = new Date()).getTime() : (t = new Date(e), 
    deepCopy(e));
    return getSomeDaysBefore(0 == t.getDay() ? 7 : t.getDay(), n);
}

function getFirstDayOfSomeMonthsBefore(e, t) {
    null == e && (e = 0);
    for (var n = 0, r = (n = null == t ? new Date() : new Date(t)).getFullYear(), a = n.getMonth() - e; a < 0; ) --r, 
    a += 12;
    for (;11 < a; ) r += 1, a -= 12;
    return {
        ms: +new Date(r, a, 1),
        s: parseInt(+new Date(r, a, 1) / 1e3)
    };
}

function getLastDayOfSomeMonthsBefore(e, t) {
    null == e && (e = 0);
    for (var n = 0, r = (n = null == t ? new Date() : new Date(t)).getFullYear(), a = n.getMonth() - e; a < 0; ) --r, 
    a += 12;
    t = getMonthLastDay(r, a);
    return {
        ms: +new Date(r, a, t),
        s: parseInt(+new Date(r, a, t) / 1e3)
    };
}