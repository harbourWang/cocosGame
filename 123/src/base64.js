Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = base64decode;

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(e) {
    for (var r, a, o, c = e.length, t = 0, h = ""; t < c; ) {
        if (r = 255 & e.charCodeAt(t++), t == c) {
            h = (h += base64EncodeChars.charAt(r >> 2)) + base64EncodeChars.charAt((3 & r) << 4) + "==";
            break;
        }
        if (a = e.charCodeAt(t++), t == c) {
            h = (h = (h += base64EncodeChars.charAt(r >> 2)) + base64EncodeChars.charAt((3 & r) << 4 | (240 & a) >> 4)) + base64EncodeChars.charAt((15 & a) << 2) + "=";
            break;
        }
        o = e.charCodeAt(t++), h = (h = (h = (h += base64EncodeChars.charAt(r >> 2)) + base64EncodeChars.charAt((3 & r) << 4 | (240 & a) >> 4)) + base64EncodeChars.charAt((15 & a) << 2 | (192 & o) >> 6)) + base64EncodeChars.charAt(63 & o);
    }
    return h;
}

function base64decode(e) {
    for (var r, a, o, c, t = e.length, h = 0, s = ""; h < t; ) {
        for (;r = base64DecodeChars[255 & e.charCodeAt(h++)], h < t && -1 == r; ) ;
        if (-1 == r) break;
        for (;a = base64DecodeChars[255 & e.charCodeAt(h++)], h < t && -1 == a; ) ;
        if (-1 == a) break;
        s += String.fromCharCode(r << 2 | (48 & a) >> 4);
        do {
            if (61 == (o = 255 & e.charCodeAt(h++))) return s;
        } while (o = base64DecodeChars[o], h < t && -1 == o);
        if (-1 == o) break;
        s += String.fromCharCode((15 & a) << 4 | (60 & o) >> 2);
        do {
            if (61 == (c = 255 & e.charCodeAt(h++))) return s;
        } while (c = base64DecodeChars[c], h < t && -1 == c);
        if (-1 == c) break;
        s += String.fromCharCode((3 & o) << 6 | c);
    }
    return s;
}

function utf16to8(e) {
    for (var r, a = "", o = e.length, c = 0; c < o; c++) 1 <= (r = e.charCodeAt(c)) && r <= 127 ? a += e.charAt(c) : a = 2047 < r ? (a = (a += String.fromCharCode(224 | r >> 12 & 15)) + String.fromCharCode(128 | r >> 6 & 63)) + String.fromCharCode(128 | r >> 0 & 63) : (a += String.fromCharCode(192 | r >> 6 & 31)) + String.fromCharCode(128 | r >> 0 & 63);
    return a;
}

function utf8to16(e) {
    for (var r, a, o, c = "", t = e.length, h = 0; h < t; ) switch ((r = e.charCodeAt(h++)) >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        c += e.charAt(h - 1);
        break;

      case 12:
      case 13:
        a = e.charCodeAt(h++), c += String.fromCharCode((31 & r) << 6 | 63 & a);
        break;

      case 14:
        a = e.charCodeAt(h++), o = e.charCodeAt(h++), c += String.fromCharCode((15 & r) << 12 | (63 & a) << 6 | (63 & o) << 0);
    }
    return c;
}