var app = getApp();

function getLocation(t, o, a) {
    var e = app.location_ts || 0, e = new Date().getTime() - e;
    app.location && e < 6e4 ? (console.log("old app.location" + app.location), t(app.location)) : wx.getLocation({
        type: "gcj02",
        success: function(o) {
            app.location_ts = new Date().getTime(), wx.setStorageSync("LOCATION_GCJ02", o), 
            app.location = {
                speed: o.speed,
                accuracy: o.accuracy,
                lat: o.latitude,
                lng: o.longitude
            }, console.log("new: wx.getLocation" + app.location), wx.setStorageSync("LOCATION_NORMAL", app), 
            t(app.location);
        },
        fail: o,
        complete: function(o) {
            console.log("请求地址：" + new Date());
        }
    });
}

function getLocationByGcj02(t, o, a) {
    var e = app.location_ts || 0, e = new Date().getTime() - e;
    app.location_gcj02_res && e < 6e4 ? (console.log("old app.location_gcj02_res" + app.location_gcj02_res), 
    t(app.location_gcj02_res)) : wx.getLocation({
        type: "gcj02",
        success: function(o) {
            app.location_ts = new Date().getTime(), app.location = {
                speed: o.speed,
                accuracy: o.accuracy,
                lat: o.latitude,
                lng: o.longitude
            }, wx.setStorageSync("LOCATION_NORMAL", app), app.location_gcj02_res = o, wx.setStorageSync("LOCATION_GCJ02", o), 
            console.log("new app.location_gcj02_res" + app.location_gcj02_res), t(o);
        },
        fail: o,
        complete: function(o) {
            a(o), console.log("请求地址：" + new Date());
        }
    });
}

app.block_location = !1, module.exports = {
    getLocation: getLocation,
    getLocationByGcj02: getLocationByGcj02
};