function Message() {
    this._evtObjs = {}, this._outdatedMsgs = {};
}

function noop() {}

Message.prototype.on = function(t, e, s) {
    this._evtObjs[t] || (this._evtObjs[t] = []), this._evtObjs[t].push({
        handler: e,
        once: s
    });
    var n = this;
    return function() {
        n.off(t, e);
    };
}, Message.prototype.wait = function(t, e) {
    return this._outdatedMsgs[t] ? (e.apply(null, this._outdatedMsgs[t]), noop) : this.on(t, e, !0);
}, Message.prototype.off = function(t, n) {
    var o = this, t = t ? [ t ] : Object.keys(this._evtObjs);
    return t.forEach(function(t) {
        var e, s;
        n ? (e = o._evtObjs[t] || [], s = [], e.forEach(function(t) {
            t.handler !== n && s.push(t);
        }), o._evtObjs[t] = s) : o._evtObjs[t] = [];
    }), this;
}, Message.prototype.emit = function(t) {
    var e = Array.prototype.slice.call(arguments, 1);
    this._outdatedMsgs[t] = e, (this._evtObjs[t] || []).forEach(function(t) {
        if (!t.once || !t.called) {
            t.called = !0;
            try {
                t.handler && t.handler.apply(null, e);
            } catch (t) {
                console.error(t.stack || t.message || t);
            }
        }
    });
}, Message.prototype.emitAsync = function() {
    var t = arguments, e = this;
    setTimeout(function() {
        e.emit.apply(e, t);
    }, 0);
}, Message.prototype.listenerCount = function(t) {
    return this._evtObjs[t] ? this._evtObjs[t].length : 0;
}, Message.prototype.assign = function(s) {
    var n = this;
    [ "on", "off", "wait", "emit", "emitAsync" ].forEach(function(t) {
        var e = n[t];
        s[t] = function() {
            return e.apply(n, arguments);
        };
    });
}, new Message().assign(Message), module.exports = Message;