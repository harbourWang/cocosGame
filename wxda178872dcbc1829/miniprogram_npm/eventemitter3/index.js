var has = Object.prototype.hasOwnProperty, prefix = "~";

function Events() {}

function EE(e, t, n) {
    this.fn = e, this.context = t, this.once = n || !1;
}

function EventEmitter() {
    this._events = new Events(), this._eventsCount = 0;
}

Object.create && (Events.prototype = Object.create(null), new Events().__proto__ || (prefix = !1)), 
EventEmitter.prototype.eventNames = function() {
    var e, t, n = [];
    if (0 === this._eventsCount) return n;
    for (t in e = this._events) has.call(e, t) && n.push(prefix ? t.slice(1) : t);
    return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
}, EventEmitter.prototype.listeners = function(e, t) {
    var e = prefix ? prefix + e : e, n = this._events[e];
    if (t) return !!n;
    if (!n) return [];
    if (n.fn) return [ n.fn ];
    for (var s = 0, r = n.length, i = new Array(r); s < r; s++) i[s] = n[s].fn;
    return i;
}, EventEmitter.prototype.emit = function(e, t, n, s, r, i) {
    var o = prefix ? prefix + e : e;
    if (!this._events[o]) return !1;
    var v, f = this._events[o], h = arguments.length;
    if (f.fn) {
        switch (f.once && this.removeListener(e, f.fn, void 0, !0), h) {
          case 1:
            return f.fn.call(f.context), !0;

          case 2:
            return f.fn.call(f.context, t), !0;

          case 3:
            return f.fn.call(f.context, t, n), !0;

          case 4:
            return f.fn.call(f.context, t, n, s), !0;

          case 5:
            return f.fn.call(f.context, t, n, s, r), !0;

          case 6:
            return f.fn.call(f.context, t, n, s, r, i), !0;
        }
        for (E = 1, v = new Array(h - 1); E < h; E++) v[E - 1] = arguments[E];
        f.fn.apply(f.context, v);
    } else for (var c, p = f.length, E = 0; E < p; E++) switch (f[E].once && this.removeListener(e, f[E].fn, void 0, !0), 
    h) {
      case 1:
        f[E].fn.call(f[E].context);
        break;

      case 2:
        f[E].fn.call(f[E].context, t);
        break;

      case 3:
        f[E].fn.call(f[E].context, t, n);
        break;

      case 4:
        f[E].fn.call(f[E].context, t, n, s);
        break;

      default:
        if (!v) for (c = 1, v = new Array(h - 1); c < h; c++) v[c - 1] = arguments[c];
        f[E].fn.apply(f[E].context, v);
    }
    return !0;
}, EventEmitter.prototype.on = function(e, t, n) {
    t = new EE(t, n || this), n = prefix ? prefix + e : e;
    return this._events[n] ? this._events[n].fn ? this._events[n] = [ this._events[n], t ] : this._events[n].push(t) : (this._events[n] = t, 
    this._eventsCount++), this;
}, EventEmitter.prototype.once = function(e, t, n) {
    t = new EE(t, n || this, !0), n = prefix ? prefix + e : e;
    return this._events[n] ? this._events[n].fn ? this._events[n] = [ this._events[n], t ] : this._events[n].push(t) : (this._events[n] = t, 
    this._eventsCount++), this;
}, EventEmitter.prototype.removeListener = function(e, t, n, s) {
    e = prefix ? prefix + e : e;
    if (this._events[e]) if (t) {
        var r = this._events[e];
        if (r.fn) r.fn !== t || s && !r.once || n && r.context !== n || (0 == --this._eventsCount ? this._events = new Events() : delete this._events[e]); else {
            for (var i = 0, o = [], v = r.length; i < v; i++) (r[i].fn !== t || s && !r[i].once || n && r[i].context !== n) && o.push(r[i]);
            o.length ? this._events[e] = 1 === o.length ? o[0] : o : 0 == --this._eventsCount ? this._events = new Events() : delete this._events[e];
        }
    } else 0 == --this._eventsCount ? this._events = new Events() : delete this._events[e];
    return this;
}, EventEmitter.prototype.removeAllListeners = function(e) {
    return e ? (e = prefix ? prefix + e : e, this._events[e] && (0 == --this._eventsCount ? this._events = new Events() : delete this._events[e])) : (this._events = new Events(), 
    this._eventsCount = 0), this;
}, EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.addListener = EventEmitter.prototype.on, 
EventEmitter.prototype.setMaxListeners = function() {
    return this;
}, EventEmitter.prefixed = prefix, EventEmitter.EventEmitter = EventEmitter, "undefined" != typeof module && (module.exports = EventEmitter);