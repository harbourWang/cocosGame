module.exports = {
    meta: {
        id: "lbzaNIJtv7S0i4QI1SSdquaw",
        type: 1,
        horizontal: !1,
        projectName: "新游戏",
        code_type: 0,
        defaultDebug: !1,
        resource_load_method: 0,
        adaptationMode: 1,
        angle_mode: 1e7
    },
    mainScene: "GrgN!3+xWo%)X^C{^|z.",
    scenes: {
        "GrgN!3+xWo%)X^C{^|z.": {
            id: "GrgN!3+xWo%)X^C{^|z.",
            sprites: [ "BcMwg*`[-.gslC(.2LP-", ")T*{=^2r}-De[J`{FyS:" ],
            backgroundColor: "465070",
            zIndex: 1
        }
    },
    components: {
        "c6ZMxt3Vluu4doX.mIzN": {
            id: "c6ZMxt3Vluu4doX.mIzN",
            type: "background",
            properties: {
                width: 100,
                height: 100,
                _width: 100,
                _height: 100,
                x: 0,
                y: 0,
                rotation: 0,
                scale: {
                    x: 1,
                    y: 1
                },
                pivot: {
                    x: 0,
                    y: 0
                },
                align: 0,
                smooth: !1,
                unequal: !1,
                alpha: 1,
                mirror: 0,
                repeat: 1,
                visible: !0,
                adaptationMode: 3
            },
            scripts: [ "kK:^zl[NcXhs/|:~n]C2" ],
            variables: {},
            blocks: {
                "!))i/kQ`$K:UzBi+1$K0": {
                    id: "!))i/kQ`$K:UzBi+1$K0",
                    category: "logic",
                    opcode: "FRI7PCImUEBsUVpSPAYJMj1aGwUG",
                    inputs: {},
                    fields: {},
                    next: null,
                    topLevel: !1,
                    parent: "kK:^zl[NcXhs/|:~n]C2",
                    shadow: !1,
                    x: 113.75,
                    y: 112.5
                },
                "kK:^zl[NcXhs/|:~n]C2": {
                    id: "kK:^zl[NcXhs/|:~n]C2",
                    category: "events",
                    opcode: "FAA/OiY1VgAgVi94aTJQOCsdSlcM",
                    inputs: {
                        SUBSTACK: {
                            name: "SUBSTACK",
                            block: "!))i/kQ`$K:UzBi+1$K0",
                            shadow: null
                        }
                    },
                    fields: {},
                    next: null,
                    topLevel: !0,
                    parent: null,
                    shadow: !1,
                    x: 20,
                    y: 20
                }
            },
            code: [],
            children: [],
            styles: [ "styles_0" ],
            currentStyle: "styles_0",
            scene: "GrgN!3+xWo%)X^C{^|z.",
            layers: [ "BcMwg*`[-.gslC(.2LP-" ],
            name: "背景",
            plugins: [ {
                id: "Repeat",
                type: "behavior",
                name: "循环滚动",
                desc: "让精灵可以循环衔接滚动",
                author: "",
                version: 1,
                properties: {
                    enable: {
                        value: !0
                    },
                    cloneCount: {
                        value: 1
                    },
                    cloneDirection: {
                        value: 3
                    },
                    autoMove: {
                        value: !1
                    },
                    speed: {
                        value: 5
                    },
                    speedDirection: {
                        value: 2
                    },
                    reset: {
                        value: !0
                    }
                },
                category: "behavior",
                visible: !0
            } ],
            pinyin: "BJ"
        },
        "F,4mM%eZwTbJzQ2`Bb_H": {
            id: "F,4mM%eZwTbJzQ2`Bb_H",
            type: "sprite",
            name: "2",
            properties: {
                x: 0,
                y: 0,
                scale: {
                    x: 1,
                    y: 1
                },
                pivot: {
                    x: 0,
                    y: 0
                },
                visible: !0,
                width: 200,
                height: 200,
                _width: 200,
                _height: 200,
                rotation: 0,
                unequal: !1,
                alpha: 1,
                mirror: 0,
                repeat: 1,
                tint: "#FFFFFF"
            },
            layers: [ ")T*{=^2r}-De[J`{FyS:" ],
            scripts: [ "W#foB`+48WzjF$7T-8Ph" ],
            variables: {},
            blocks: {
                "W#foB`+48WzjF$7T-8Ph": {
                    id: "W#foB`+48WzjF$7T-8Ph",
                    category: "events",
                    opcode: "FAA/OiY1VgAgVi94aTJQOCsdSlcM",
                    inputs: {
                        SUBSTACK: {
                            name: "SUBSTACK",
                            block: "b$JhDWs2.u=:/%z`/60A",
                            shadow: null
                        }
                    },
                    fields: {},
                    next: null,
                    topLevel: !0,
                    parent: null,
                    shadow: !1,
                    x: 20,
                    y: 20
                },
                "f)BW8kV2b${vV[F6#9l+": {
                    id: "f)BW8kV2b${vV[F6#9l+",
                    category: "logic",
                    opcode: "FRI7PCImUEBsUVpSPAYJMj1aGwUG",
                    inputs: {
                        SUBSTACK: {
                            name: "SUBSTACK",
                            block: "y`U3*c570S,ER_GJwTaZ",
                            shadow: null
                        }
                    },
                    fields: {},
                    next: null,
                    topLevel: !1,
                    parent: "s$7Ksz|pgR^~r)@eVCfI",
                    shadow: !1,
                    x: "319",
                    y: "58"
                },
                "y`U3*c570S,ER_GJwTaZ": {
                    id: "y`U3*c570S,ER_GJwTaZ",
                    category: "motion",
                    opcode: "MTI8HjYpFEEOAlxaGyF8KAgoOSBY",
                    inputs: {
                        DEGREES: {
                            name: "DEGREES",
                            block: "M[O7Wt0cLb}y,7QtW1gc",
                            shadow: "M[O7Wt0cLb}y,7QtW1gc"
                        }
                    },
                    fields: {
                        OPTION_LIST1: {
                            name: "OPTION_LIST1",
                            value: "_self_"
                        }
                    },
                    next: null,
                    topLevel: !1,
                    parent: "f)BW8kV2b${vV[F6#9l+",
                    shadow: !1,
                    x: "319",
                    y: "498"
                },
                "M[O7Wt0cLb}y,7QtW1gc": {
                    id: "M[O7Wt0cLb}y,7QtW1gc",
                    category: "null",
                    opcode: "FlxtAWVYLlgpRlN3OgR+Dg8aFjZb",
                    inputs: {},
                    fields: {
                        NUM: {
                            name: "NUM",
                            value: "45"
                        }
                    },
                    next: null,
                    topLevel: !1,
                    parent: "y`U3*c570S,ER_GJwTaZ",
                    shadow: !0,
                    name: "DEGREES"
                },
                "s$7Ksz|pgR^~r)@eVCfI": {
                    id: "s$7Ksz|pgR^~r)@eVCfI",
                    category: "looks",
                    opcode: "KSIgBTo4CEQYAF1fMiZcHAoTMwky",
                    inputs: {},
                    fields: {
                        OPTION_LIST1: {
                            name: "OPTION_LIST1",
                            value: "_self_"
                        },
                        OPTION_LIST: {
                            name: "OPTION_LIST",
                            value: "_justify_"
                        }
                    },
                    next: "f)BW8kV2b${vV[F6#9l+",
                    topLevel: !1,
                    parent: "syL4`6(Aeltoy{[m.S4X",
                    shadow: !1,
                    x: "319",
                    y: "351"
                },
                "b$JhDWs2.u=:/%z`/60A": {
                    id: "b$JhDWs2.u=:/%z`/60A",
                    category: "motion",
                    opcode: "MTI8HjYpFEEOAlxcDBJMYwJTSlYk",
                    inputs: {},
                    fields: {
                        OPTION_LIST1: {
                            name: "OPTION_LIST1",
                            value: "_self_"
                        },
                        OPTION_LIST: {
                            name: "OPTION_LIST",
                            value: "_random_"
                        }
                    },
                    next: "syL4`6(Aeltoy{[m.S4X",
                    topLevel: !1,
                    parent: "W#foB`+48WzjF$7T-8Ph",
                    shadow: !1,
                    x: "319",
                    y: "278"
                },
                "syL4`6(Aeltoy{[m.S4X": {
                    id: "syL4`6(Aeltoy{[m.S4X",
                    category: "motion",
                    opcode: "MTI8HjYpFEEOAlxcDBJMYwJTSlYk",
                    inputs: {},
                    fields: {
                        OPTION_LIST1: {
                            name: "OPTION_LIST1",
                            value: "_self_"
                        },
                        OPTION_LIST: {
                            name: "OPTION_LIST",
                            value: "_random_"
                        },
                        OPTION_LIST2: {
                            name: "OPTION_LIST2",
                            value: "2",
                            text: "绝对坐标"
                        }
                    },
                    next: "s$7Ksz|pgR^~r)@eVCfI",
                    topLevel: !1,
                    parent: "b$JhDWs2.u=:/%z`/60A",
                    shadow: !1,
                    x: "319",
                    y: "278"
                }
            },
            plugins: [],
            code: [],
            styles: [ "1_A705F79409FD43518A1669001D7523BC" ],
            currentStyle: "1_A705F79409FD43518A1669001D7523BC",
            parentFolderId: 0,
            outline: {},
            pinyin: "!2"
        }
    },
    styles: {
        "1_A705F79409FD43518A1669001D7523BC": {
            id: "1_A705F79409FD43518A1669001D7523BC",
            type: "sprite",
            name: "2",
            frame: [ {
                id: "1_A705F79409FD43518A1669001D7523BC"
            } ],
            count: 1
        }
    },
    pack_list: {
        "GrgN!3+xWo%)X^C{^|z.": {
            extra: [ {
                blob_id: "1_A705F79409FD43518A1669001D7523BC",
                w: 200,
                h: 200
            } ]
        }
    },
    sounds: {},
    variables: {},
    messages: {},
    outlines: {},
    physicalmodels: {},
    codeType: 0,
    sprites: {
        "BcMwg*`[-.gslC(.2LP-": {
            id: "BcMwg*`[-.gslC(.2LP-",
            type: "background",
            properties: {
                x: 0,
                y: 0,
                visible: !0
            },
            scene: "GrgN!3+xWo%)X^C{^|z.",
            origin: "c6ZMxt3Vluu4doX.mIzN",
            name: "背景",
            _zIndex: 1
        },
        ")T*{=^2r}-De[J`{FyS:": {
            id: ")T*{=^2r}-De[J`{FyS:",
            type: "sprite",
            name: "2",
            properties: {
                x: -52,
                y: 327,
                visible: !0
            },
            parentFolderId: 0,
            outline: {},
            origin: "F,4mM%eZwTbJzQ2`Bb_H",
            scene: "GrgN!3+xWo%)X^C{^|z.",
            _zIndex: 2
        }
    },
    procedures: {},
    behaviors: {
        Repeat: 1
    },
    plugins: [],
    version: 18
};