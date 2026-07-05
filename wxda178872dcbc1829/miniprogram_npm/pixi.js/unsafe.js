var GLSL_TO_SINGLE_SETTERS = {
    float: function(i, n, o, f) {
        o !== f && (o.v = f, i.uniform1f(n, f));
    },
    vec2: function(i, n, o, f) {
        o[0] === f[0] && o[1] === f[1] || (o[0] = f[0], o[1] = f[1], i.uniform2f(n, f[0], f[1]));
    },
    vec3: function(i, n, o, f) {
        o[0] === f[0] && o[1] === f[1] && o[2] === f[2] || (o[0] = f[0], o[1] = f[1], o[2] = f[2], 
        i.uniform3f(n, f[0], f[1], f[2]));
    },
    int: function(i, n, o, f) {
        i.uniform1i(n, f);
    },
    ivec2: function(i, n, o, f) {
        i.uniform2i(n, f[0], f[1]);
    },
    ivec3: function(i, n, o, f) {
        i.uniform3i(n, f[0], f[1], f[2]);
    },
    ivec4: function(i, n, o, f) {
        i.uniform4i(n, f[0], f[1], f[2], f[3]);
    },
    bool: function(i, n, o, f) {
        i.uniform1i(n, f);
    },
    bvec2: function(i, n, o, f) {
        i.uniform2i(n, f[0], f[1]);
    },
    bvec3: function(i, n, o, f) {
        i.uniform3i(n, f[0], f[1], f[2]);
    },
    bvec4: function(i, n, o, f) {
        i.uniform4i(n, f[0], f[1], f[2], f[3]);
    },
    mat2: function(i, n, o, f) {
        i.uniformMatrix2fv(n, !1, f);
    },
    mat3: function(i, n, o, f) {
        i.uniformMatrix3fv(n, !1, f);
    },
    mat4: function(i, n, o, f) {
        i.uniformMatrix4fv(n, !1, f);
    },
    sampler2D: function(i, n, o, f) {
        i.uniform1i(n, f);
    },
    samplerCube: function(i, n, o, f) {
        i.uniform1i(n, f);
    },
    sampler2DArray: function(i, n, o, f) {
        i.uniform1i(n, f);
    }
}, GLSL_TO_ARRAY_SETTERS = {
    float: function(i, n, o, f) {
        i.uniform1fv(n, f);
    },
    vec2: function(i, n, o, f) {
        i.uniform2fv(n, f);
    },
    vec3: function(i, n, o, f) {
        i.uniform3fv(n, f);
    },
    vec4: function(i, n, o, f) {
        i.uniform4fv(n, f);
    },
    int: function(i, n, o, f) {
        i.uniform1iv(n, f);
    },
    ivec2: function(i, n, o, f) {
        i.uniform2iv(n, f);
    },
    ivec3: function(i, n, o, f) {
        i.uniform3iv(n, f);
    },
    ivec4: function(i, n, o, f) {
        i.uniform4iv(n, f);
    },
    bool: function(i, n, o, f) {
        i.uniform1iv(n, f);
    },
    bvec2: function(i, n, o, f) {
        i.uniform2iv(n, f);
    },
    bvec3: function(i, n, o, f) {
        i.uniform3iv(n, f);
    },
    bvec4: function(i, n, o, f) {
        i.uniform4iv(n, f);
    },
    sampler2D: function(i, n, o, f) {
        i.uniform1iv(n, f);
    },
    samplerCube: function(i, n, o, f) {
        i.uniform1iv(n, f);
    },
    sampler2DArray: function(i, n, o, f) {
        i.uniform1iv(n, f);
    }
};

function syncUniforms(i, n, o, f, t) {
    var u, r = 0, e = null, c = null, m = t.gl;
    for (u in i.uniforms) {
        var a = n[u], v = f[u], s = o[u], l = i.uniforms[u];
        a ? "float" === a.type && 1 === a.size ? v !== s.value && (s.value = v, m.uniform1f(s.location, v)) : "sampler2D" !== a.type && "samplerCube" !== a.type && "sampler2DArray" !== a.type || 1 !== a.size || a.isArray ? "mat3" === a.type && 1 === a.size ? void 0 !== l.a ? m.uniformMatrix3fv(s.location, !1, v.toArray(!0)) : m.uniformMatrix3fv(s.location, !1, v) : "vec2" === a.type && 1 === a.size ? void 0 !== l.x ? (c = s.value)[0] === (e = v).x && c[1] === e.y || (c[0] = e.x, 
        c[1] = e.y, m.uniform2f(s.location, e.x, e.y)) : (c = s.value)[0] === (e = v)[0] && c[1] === e[1] || (c[0] = e[0], 
        c[1] = e[1], m.uniform2f(s.location, e[0], e[1])) : "vec4" === a.type && 1 === a.size ? void 0 !== l.width ? (c = s.value)[0] === (e = v).x && c[1] === e.y && c[2] === e.width && c[3] === e.height || (c[0] = e.x, 
        c[1] = e.y, c[2] = e.width, c[3] = e.height, m.uniform4f(s.location, e.x, e.y, e.width, e.height)) : (c = s.value)[0] === (e = v)[0] && c[1] === e[1] && c[2] === e[2] && c[3] === e[3] || (c[0] = e[0], 
        c[1] = e[1], c[2] = e[2], c[3] = e[3], m.uniform4f(s.location, e[0], e[1], e[2], e[3])) : (1 === a.size ? GLSL_TO_SINGLE_SETTERS : GLSL_TO_ARRAY_SETTERS)[a.type].call(null, m, s.location, s.value, v) : (t.texture.bind(v, r), 
        s.value !== r && (s.value = r, m.uniform1i(s.location, r)), r++) : l.group && t.shader.syncUniformGroup(v);
    }
}

function install(i) {
    if (!i || !i.systems || !i.systems.ShaderSystem) throw new Error("Unable to patch ShaderSystem, class not found.");
    var i = i.systems.ShaderSystem, n = !1;
    try {
        i.prototype.systemCheck.call(null), n = !1;
    } catch (i) {
        n = !0;
    }
    n && Object.assign(i.prototype, {
        systemCheck: function() {},
        syncUniforms: function(i, n) {
            var o = this.shader, f = this.renderer;
            syncUniforms(i, o.program.uniformData, n.uniformData, i.uniforms, f);
        }
    });
}

module.exports = install;