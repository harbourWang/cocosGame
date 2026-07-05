var __app__ = wx, requestQueueItem = (__app__.MAX_REQUEST_COUNT = __app__.MAX_REQUEST_COUNT || 5, 
__app__.currentRunning = 0, __app__.requestQueue = [], {
    context: __app__,
    reqData: null
}), request = function(_) {
    var p = Object.create(requestQueueItem);
    p.reqData = _, __app__.requestQueue.push(p), function e() {
        var _, u;
        __app__.currentRunning < __app__.MAX_REQUEST_COUNT && (__app__.currentRunning++, 
        _ = __app__.requestQueue.shift().reqData, u = _.complete, _.complete = function(_) {
            u && u.call(p.context, _), __app__.currentRunning--, 0 < __app__.requestQueue.length && e.call(__app__);
        }, wx.request(_));
    }();
};

module.exports = request;