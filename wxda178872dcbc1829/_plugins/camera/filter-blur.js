function _default(t) {
    var a, n = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nconst int GAUSSIAN_SAMPLES = 9;\nconst float texelWidthOffset = 1.0;\nconst float texelHeightOffset = 1.0;\n\nvarying vec2 blurCoordinates[GAUSSIAN_SAMPLES];\n\nvoid main()\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    int multiplier = 0;\n    vec2 blurStep;\n    vec2 singleStepOffset = vec2(texelWidthOffset, texelHeightOffset);\n    for (int i = 0; i < GAUSSIAN_SAMPLES; i++)\n    {\n        multiplier = (i - ((GAUSSIAN_SAMPLES - 1) / 2));\n        blurStep = float(multiplier) * singleStepOffset;\n        blurCoordinates[i] = aTextureCoord + blurStep;\n\n    }\n}", e = "uniform sampler2D uSampler;\n\nconst lowp int GAUSSIAN_SAMPLES = 9;\nvarying highp vec2 textureCoordinate;\nvarying highp vec2 blurCoordinates[GAUSSIAN_SAMPLES];\nconst mediump float distanceNormalizationFactor = 0.5;\n\nvoid main()\n{\n    lowp vec4 centralColor;\n    lowp float gaussianWeightTotal;\n    lowp vec4 sum;\n    lowp vec4 sampleColor;\n    lowp float distanceFromCentralColor;\n    lowp float gaussianWeight;\n    \n    centralColor = texture2D(uSampler, blurCoordinates[4]);\n    gaussianWeightTotal = 0.18; sum = centralColor * 0.18;\n    \n    sampleColor = texture2D(uSampler, blurCoordinates[0]);\n    distanceFromCentralColor = min(distance(centralColor, sampleColor) * distanceNormalizationFactor, 1.0);\n    gaussianWeight = 0.05 * (1.0 - distanceFromCentralColor);\n    gaussianWeightTotal += gaussianWeight;\n    sum += sampleColor * gaussianWeight;\n    \n    sampleColor = texture2D(uSampler, blurCoordinates[1]);\n    distanceFromCentralColor = min(distance(centralColor, sampleColor) * distanceNormalizationFactor, 1.0);\n    gaussianWeight = 0.09 * (1.0 - distanceFromCentralColor);\n    gaussianWeightTotal += gaussianWeight;\n    sum += sampleColor * gaussianWeight;\n    \n    sampleColor = texture2D(uSampler, blurCoordinates[2]);\n    distanceFromCentralColor = min(distance(centralColor, sampleColor) * distanceNormalizationFactor, 1.0);\n    gaussianWeight = 0.12 * (1.0 - distanceFromCentralColor);\n    gaussianWeightTotal += gaussianWeight;\n    sum += sampleColor * gaussianWeight;\n    \n    sampleColor = texture2D(uSampler, blurCoordinates[3]);\n    distanceFromCentralColor = min(distance(centralColor, sampleColor) * distanceNormalizationFactor, 1.0);\n    gaussianWeight = 0.15 * (1.0 - distanceFromCentralColor);\n    gaussianWeightTotal += gaussianWeight;\n    sum += sampleColor * gaussianWeight;\n    \n    sampleColor = texture2D(uSampler, blurCoordinates[5]);\n    distanceFromCentralColor = min(distance(centralColor, sampleColor) * distanceNormalizationFactor, 1.0);\n    gaussianWeight = 0.15 * (1.0 - distanceFromCentralColor);\n    gaussianWeightTotal += gaussianWeight;\n    sum += sampleColor * gaussianWeight;\n    \n    sampleColor = texture2D(uSampler, blurCoordinates[6]);\n    distanceFromCentralColor = min(distance(centralColor, sampleColor) * distanceNormalizationFactor, 1.0);\n    gaussianWeight = 0.12 * (1.0 - distanceFromCentralColor);\n    gaussianWeightTotal += gaussianWeight;\n    sum += sampleColor * gaussianWeight;\n    \n    sampleColor = texture2D(uSampler, blurCoordinates[7]);\n    distanceFromCentralColor = min(distance(centralColor, sampleColor) * distanceNormalizationFactor, 1.0);\n    gaussianWeight = 0.09 * (1.0 - distanceFromCentralColor);\n    gaussianWeightTotal += gaussianWeight;\n    sum += sampleColor * gaussianWeight;\n    \n    sampleColor = texture2D(uSampler, blurCoordinates[8]);\n    distanceFromCentralColor = min(distance(centralColor, sampleColor) * distanceNormalizationFactor, 1.0);\n    gaussianWeight = 0.05 * (1.0 - distanceFromCentralColor);\n    gaussianWeightTotal += gaussianWeight;\n    sum += sampleColor * gaussianWeight;\n\n    gl_FragColor = sum / gaussianWeightTotal;\n}", o = ((a = t.Filter) && (i.__proto__ = a), 
    ((i.prototype = Object.create(a && a.prototype)).constructor = i).prototype.apply = function(t, a, n, e) {
        this.uniforms.gamma = Math.max(this.gamma, 1e-4), this.uniforms.saturation = this.saturation, 
        this.uniforms.contrast = this.contrast, this.uniforms.brightness = this.brightness, 
        this.uniforms.red = this.red, this.uniforms.green = this.green, this.uniforms.blue = this.blue, 
        this.uniforms.alpha = this.alpha, t.applyFilter(this, a, n, e);
    }, i);
    function i(t) {
        a.call(this, n, e), Object.assign(this, {
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
        BlurFilter: o
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;