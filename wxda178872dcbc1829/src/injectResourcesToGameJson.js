function findSpriteSheetList(e) {
    var r = {};
    return (e = e || []).forEach(function(e) {
        try {
            JSON.parse(e.meta_json).frames.forEach(function(e) {
                r[e.name] = 1;
            });
        } catch (e) {
            console.error(e);
        }
    }), r;
}

function injectResourcesToGameJson(n, t, e) {
    var r, i = n.styles || {}, o = findSpriteSheetList(e);
    for (r in i) (i[r].frame || []).forEach(function(r) {
        var e = t.find(function(e) {
            return e.blob_id === r.id;
        });
        e && (r.url = e.cdn_url), n.pack_list && e && e.blob_id && o[e.blob_id] && (r.is_pack = !0);
    });
    var s, c = n.sounds || {};
    for (s in c) !function(r) {
        var e = t.find(function(e) {
            return e.refer_id === c[r].url;
        });
        e && (c[r].url = e.cdn_url);
    }(s);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.findSpriteSheetList = findSpriteSheetList, exports.injectResourcesToGameJson = injectResourcesToGameJson;