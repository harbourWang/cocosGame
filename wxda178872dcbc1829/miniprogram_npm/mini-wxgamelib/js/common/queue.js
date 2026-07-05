var QUEUE_TYPE = {
    Sync: "Sync",
    Parallel: "Parallel",
    Relevant: "Relevant"
};

function LineQueue(l) {
    function c() {
        var e = null;
        if (l === QUEUE_TYPE.Relevant) for (;e = o.shift(); ) console.log("nextQueueItem", e), 
        "function" == typeof e.backFn && e.backFn.call(e.context, o.injectData);
        if (l === QUEUE_TYPE.Sync) {
            for (;(e = o.shift()) && e.called; ) ;
            if (e && e.fn) try {
                o.injectData ? e.fn.call(e.context, o.injectData) : e.fn.call(e.context);
            } catch (n) {
                window && window.logInfo && logInfo("Queue", "error", n.message), e.context.end = !0, 
                console.error(n);
            }
        }
    }
    var o = [], l = l || QUEUE_TYPE.Parallel;
    this.setSync = function() {
        l = QUEUE_TYPE.Sync;
    }, this.setParallel = function() {
        l = QUEUE_TYPE.Parallel;
    }, this.setRelevant = function() {
        l = QUEUE_TYPE.Relevant;
    };
    this.run = function(n) {
        switch (l) {
          case QUEUE_TYPE.Sync:
          case QUEUE_TYPE.Relevant:
            var e = n;
            if (l === QUEUE_TYPE.Relevant) {
                if ("function" != typeof e.fn) throw "Illegal param, parm.fn should be function ";
                if ("function" != typeof e.backFn) throw "Illegal param, fn.backFn should be function ";
            } else if (l === QUEUE_TYPE.Sync && "function" != typeof e) throw "Illegal param,param should be function ";
            var t = Object.create(Object.prototype, {
                end: {
                    get: function() {
                        return this.ended;
                    },
                    set: function(n) {
                        !0 === (this.ended = n) && c();
                    }
                }
            }), a = (t.done = function(n) {
                n && (o.injectData = n), this.end = !0;
            }, {});
            if (l === QUEUE_TYPE.Relevant && (a = {
                fn: e.fn,
                backFn: e.backFn,
                context: t
            }), l === QUEUE_TYPE.Sync && (a = {
                fn: e,
                context: t
            }), o.push(a), "function" != typeof a.fn) throw "Illegal param,param should be function ";
            l === QUEUE_TYPE.Relevant && (console.info("queue", o, o.injectData), o.injectData ? c() : 1 === o.length && (a.called = !0, 
            a.fn.call(a.context))), l === QUEUE_TYPE.Sync && 1 === o.length && (a.called = !0, 
            a.fn.call(a.context, o.injectData));
            break;

          case QUEUE_TYPE.Parallel:
            e = {}, n.call(e);
        }
    };
}

module.exports = LineQueue;