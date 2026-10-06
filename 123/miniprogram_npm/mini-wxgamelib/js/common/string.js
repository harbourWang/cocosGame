function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function trim(t) {
    return (t && t.replace ? t : "").replace(/(^\s*)|(\s*$)/g, "");
}

function mapToStr(t, r, e) {
    try {
        r = r || "&", e = e || "=";
        var n, o = [];
        for (n in t) o.push(n + e + t[n]);
        return o.join(r);
    } catch (t) {
        alert(t.message);
    }
}

function strToMap(t, r, e) {
    e = e || "=";
    var n, o = t.split(r = r || "&"), i = {};
    for (n in o) {
        var l = o[n].split(e);
        2 == l.length && (i[l[0]] = l[1]);
    }
    return i;
}

function getQueryStr(t, r) {
    r = ("" + (r || "")).replace(/#(.*)$/g, "").replace(/&amp;/g, "&").match(new RegExp("[?&]" + t + "=([^&]+)", "i"));
    return null == r || r.length <= 1 ? "" : r[1];
}

function filterXSS(t, r) {
    t = "" + (t || "");
    return (t = r ? t.replace(/<[^>]+>/g, "") : t).replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/\"/gm, "&quot;").replace(/\'/gm, "&#39;");
}

function filterArrXSS(t, r) {
    for (var e = 0, n = (t = t || []).length; e < n; e++) t[e] = filterXSS(t[e], r);
    return t;
}

var format = function(t, e, n) {
    return n = !!(n = void 0 === n ? !0 : n), (t += "").replace(/\{(\w+)\}/g, function(t, r) {
        r = void 0 !== e[r] ? e[r].toString() : t;
        return n ? filterXSS(r) : r;
    });
};

function filterImg(t) {
    var r = /android/i.test(navigator.userAgent), e = (t + "").replace(/^\s*https?:\/\//i, "").replace(/^\s*\/\//, "");
    return /^\/[^\/]/i.test(t) ? t : (r ? "http:" : location.protocol) + "//" + e;
}

function insertHTMLFilterXss(t, r, e) {
    var n, o;
    "object" === _typeof(t) ? (r = t.elem, e = t.unXss, n = t.position, o = e ? t.data : filterXSS(t.data), 
    r.insertAdjacentHTML(n, o)) : "string" == typeof t && (r.innerHTML = e ? t : filterXSS(t));
}

function getValue(t, r) {
    for (var e, n = r.split("."), o = t || {}; e = n.shift(); ) {
        if (void 0 === o[e]) return;
        o = o[e];
    }
    return o;
}

module.exports = {
    trim: trim,
    format: format,
    mapToStr: mapToStr,
    strToMap: strToMap,
    filterImg: filterImg,
    filterXSS: filterXSS,
    getQueryStr: getQueryStr,
    filterArrXSS: filterArrXSS,
    insertHTMLFilterXss: insertHTMLFilterXss,
    getValue: getValue
};