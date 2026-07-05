function _default(t) {
    var n, r = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", e = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n", o = ((n = t.Filter) && (i.__proto__ = n), 
    ((i.prototype = Object.create(n && n.prototype)).constructor = i).prototype.apply = function(t, n, r, e) {
        this.uniforms.gamma = Math.max(this.gamma, 1e-4), this.uniforms.saturation = this.saturation, 
        this.uniforms.contrast = this.contrast, this.uniforms.brightness = this.brightness, 
        this.uniforms.red = this.red, this.uniforms.green = this.green, this.uniforms.blue = this.blue, 
        this.uniforms.alpha = this.alpha, t.applyFilter(this, n, r, e);
    }, i);
    function i(t) {
        n.call(this, r, e), Object.assign(this, {
            gamma: 1,
            saturation: 1,
            contrast: 1,
            brightness: 1,
            red: 1,
            green: 1,
            blue: 1,
            alpha: 1
        }, t);
    }
    Object.assign(t.filters, {
        AdjustmentFilter: o
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;