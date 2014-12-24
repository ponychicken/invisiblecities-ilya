/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'paper_opaque',
                            type: 'image',
                            rect: ['0', '0px', '2048px', '1535px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
                        },
                        {
                            id: 'BG_curb',
                            type: 'image',
                            rect: ['-322', '1186', '2938px', '269px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_curb.png",'0px','0px']
                        },
                        {
                            id: 'BG_BusStop',
                            type: 'image',
                            rect: ['168', '143', '1612px', '741px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_BusStop.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'Game_C3',
                            symbolName: 'Game_C3',
                            type: 'rect',
                            rect: ['1154', '350', '330', '444', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'GameRun12',
                            symbolName: 'Game_C2',
                            type: 'rect',
                            rect: ['6', '332', '330', '444', 'auto', 'auto'],
                            overflow: 'visible',
                            transform: [[],[],[],['0.88288','0.88288']]
                        },
                        {
                            id: 'Game_C1',
                            symbolName: 'Game_C1',
                            type: 'rect',
                            rect: ['1096', '702', '475', '689', 'auto', 'auto'],
                            overflow: 'visible',
                            transform: [[],[],[],['0.54316','0.54316']]
                        },
                        {
                            id: 'BG_lantern',
                            type: 'image',
                            rect: ['1775', '6', '214px', '1524px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
                        },
                        {
                            id: 'BG_lanternCopy',
                            type: 'image',
                            rect: ['101', '0', '214px', '1524px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
                        },
                        {
                            id: 'figureBackHead',
                            type: 'image',
                            rect: ['46', '640', '637px', '955px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Game_1/figureBackHead.png",'0px','0px']
                        },
                        {
                            id: 'bagDrag',
                            symbolName: 'bagDrag',
                            type: 'rect',
                            rect: ['270', '838', '180', '382', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'figureBack',
                            type: 'image',
                            rect: ['46', '1046', '637px', '549px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Game_1/figureBack.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2048', '1536', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    labels: {
                        "off": 8067
                    },
                    data: [
                        [
                            "eid206",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            9863,
                            1503,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Game_C3}",
                            '1154px',
                            '1154px'
                        ],
                        [
                            "eid108",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Game_C1}",
                            '0.54316',
                            '0.54316'
                        ],
                        [
                            "eid229",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${GameRun12}",
                            '0.88288',
                            '0.88288'
                        ],
                        [
                            "eid228",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GameRun12}",
                            '332px',
                            '376px'
                        ],
                        [
                            "eid224",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Game_C1}",
                            '702px',
                            '262px'
                        ],
                        [
                            "eid107",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Game_C1}",
                            '0.54316',
                            '0.54316'
                        ],
                        [
                            "eid230",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${GameRun12}",
                            '0.88288',
                            '0.88288'
                        ],
                        [
                            "eid225",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Game_C3}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid207",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            9863,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid223",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Game_C1}",
                            '1096px',
                            '1408px'
                        ],
                        [
                            "eid227",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GameRun12}",
                            '6px',
                            '563px'
                        ]
                    ]
                }
            },
            "C_waiting1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'C_waiting3',
                            type: 'image',
                            rect: [0, 0, '1600px', '742px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/C_waiting32.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 400, 742]
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid552",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_waiting3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid553",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_waiting3}",
                            '0px',
                            '-400px'
                        ],
                        [
                            "eid554",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_waiting3}",
                            '-400px',
                            '-800px'
                        ],
                        [
                            "eid551",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting3}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "C_waiting3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'C_waiting1',
                            type: 'image',
                            rect: [0, 0, '990px', '440px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/C_waiting12.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 330, 440]
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid570",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid569",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_waiting1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid571",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_waiting1}",
                            '0px',
                            '-316px'
                        ],
                        [
                            "eid572",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_waiting1}",
                            '-326px',
                            '-646px'
                        ]
                    ]
                }
            },
            "C_waiting2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'C_waiting2',
                            type: 'image',
                            rect: [0, 0, '800px', '514px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/C_waiting22.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 200, 514]
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid559",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_waiting2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid561",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_waiting2}",
                            '0px',
                            '-206px'
                        ],
                        [
                            "eid563",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_waiting2}",
                            '-206px',
                            '-403px'
                        ],
                        [
                            "eid560",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid562",
                            "top",
                            67,
                            0,
                            "linear",
                            "${C_waiting2}",
                            '0px',
                            '7px'
                        ],
                        [
                            "eid564",
                            "top",
                            133,
                            0,
                            "linear",
                            "${C_waiting2}",
                            '3px',
                            '12px'
                        ]
                    ]
                }
            },
            "Game_C2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, -6, 330, 444, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'GameRun22',
                            symbolName: 'GameRun2',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'bagUp_C_back3',
                            opacity: '1',
                            rect: [61, -35, 240, 522, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'bagUp_C_back',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.9', '0.83165', 1], ['50%', '50%']]
                        },
                        {
                            type: 'image',
                            id: 'C_waiting1',
                            display: 'block',
                            rect: [1, 3, '990px', '440px', 'auto', 'auto'],
                            clip: 'rect(0px 324.2109375px 440px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/C_waiting12.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'bagUp_C_front3',
                            opacity: '1',
                            rect: [61, -35, 240, 522, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'bagUp_C_front',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.9', '0.83165', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 330, 444]
                        }
                    }
                },
                timeline: {
                    duration: 4800,
                    autoPlay: true,
                    labels: {
                        "wait": 0,
                        "bagUp": 400,
                        "disappear": 1000,
                        "run": 3067
                    },
                    data: [
                        [
                            "eid348",
                            "scaleY",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '0.83165',
                            '0.83165'
                        ],
                        [
                            "eid352",
                            "scaleY",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '0.83165',
                            '0.04987'
                        ],
                        [
                            "eid316",
                            "opacity",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid347",
                            "top",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '-35px',
                            '-35px'
                        ],
                        [
                            "eid351",
                            "top",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '-35px',
                            '135px'
                        ],
                        [
                            "eid123",
                            "top",
                            3067,
                            0,
                            "linear",
                            "${GameRun22}",
                            '-6px',
                            '-6px'
                        ],
                        [
                            "eid350",
                            "scaleX",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid354",
                            "scaleX",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '0.9',
                            '0.05396'
                        ],
                        [
                            "eid210",
                            "display",
                            933,
                            0,
                            "linear",
                            "${GameRun22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            3067,
                            0,
                            "linear",
                            "${GameRun22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid209",
                            "display",
                            703,
                            0,
                            "linear",
                            "${C_waiting1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            3067,
                            0,
                            "linear",
                            "${C_waiting1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid324",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${bagUp_C_back3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid146",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting1}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid336",
                            "top",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3}",
                            '-35px',
                            '-35px'
                        ],
                        [
                            "eid150",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${C_waiting1}",
                            [0,324.2109375,440,0],
                            [0,324.2109375,440,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid151",
                            "clip",
                            67,
                            0,
                            "linear",
                            "${C_waiting1}",
                            [0,324.2109375,440,0],
                            [0,640,440,313.158203125],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid152",
                            "clip",
                            133,
                            0,
                            "linear",
                            "${C_waiting1}",
                            [0,640,440,313.158203125],
                            [0,1003.158203125,440,647.3681640625],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid331",
                            "scaleX",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid130",
                            "left",
                            3067,
                            1733,
                            "linear",
                            "${GameRun22}",
                            '7px',
                            '2823px'
                        ],
                        [
                            "eid312",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid314",
                            "display",
                            1733,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid332",
                            "scaleY",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3}",
                            '0.83165',
                            '0.83165'
                        ],
                        [
                            "eid349",
                            "left",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '61px',
                            '61px'
                        ],
                        [
                            "eid353",
                            "left",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '61px',
                            '59px'
                        ],
                        [
                            "eid335",
                            "left",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3}",
                            '61px',
                            '61px'
                        ],
                        [
                            "eid356",
                            "display",
                            703,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_waiting1}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid156",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_waiting1}",
                            '1px',
                            '-316px'
                        ],
                        [
                            "eid140",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_waiting1}",
                            '-316px',
                            '-646px'
                        ],
                            [ "eid357", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bagUp_C_front3}', [] ] ],
                            [ "eid358", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bagUp_C_back3}', [] ] ],
                            [ "eid131", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${GameRun22}', [] ] ],
                            [ "eid359", "trigger", 400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_C_front3}', [] ] ],
                            [ "eid360", "trigger", 400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_C_back3}', [] ] ],
                            [ "eid157", "trigger", 3067, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GameRun22}', [0] ] ]
                    ]
                }
            },
            "Game_C1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-16, -5, 475, 689, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'GameRun3',
                            symbolName: 'GameRun3',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'bagUp_C_back3',
                            opacity: '1',
                            rect: [106, 115, 240, 522, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'bagUp_C_back',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.31667', '1.21667', 1], ['50%', '50%']]
                        },
                        {
                            type: 'image',
                            id: 'C_waiting3Copy2',
                            display: 'block',
                            rect: [30, -50, '1600px', '742px', 'auto', 'auto'],
                            clip: 'rect(0px 432.2578125px 742px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/C_waiting32.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'bagUp_C_front3',
                            opacity: '1',
                            rect: [106, 115, 240, 522, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'bagUp_C_front',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.31667', '1.21667', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 475, 689]
                        }
                    }
                },
                timeline: {
                    duration: 3766,
                    autoPlay: true,
                    labels: {
                        "wait": 0,
                        "bagUp": 400,
                        "disappear": 1000,
                        "run": 2233
                    },
                    data: [
                        [
                            "eid96",
                            "left",
                            2300,
                            1466,
                            "linear",
                            "${GameRun3}",
                            '-16px',
                            '-3736px'
                        ],
                        [
                            "eid251",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_back3}",
                            '115px',
                            '115px'
                        ],
                        [
                            "eid255",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_front3}",
                            '115px',
                            '115px'
                        ],
                        [
                            "eid274",
                            "top",
                            1000,
                            502,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '115px',
                            '390px'
                        ],
                        [
                            "eid252",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_front3}",
                            '1.31667',
                            '1.31667'
                        ],
                        [
                            "eid271",
                            "scaleX",
                            1000,
                            502,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '1.31667',
                            '0.05396'
                        ],
                        [
                            "eid249",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_back3}",
                            '1.21667',
                            '1.21667'
                        ],
                        [
                            "eid61",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            '-50px',
                            '-50px'
                        ],
                        [
                            "eid263",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${bagUp_C_back3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid253",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_front3}",
                            '1.21667',
                            '1.21667'
                        ],
                        [
                            "eid272",
                            "scaleY",
                            1000,
                            502,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '1.21667',
                            '0.04987'
                        ],
                        [
                            "eid58",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid59",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            '30px',
                            '-369px'
                        ],
                        [
                            "eid60",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            '-400px',
                            '-769px'
                        ],
                        [
                            "eid63",
                            "left",
                            2233,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            '-769px',
                            '-1185px'
                        ],
                        [
                            "eid89",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            [0,432.2578125,742,0],
                            [0,432.2578125,742,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid90",
                            "clip",
                            67,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            [0,432.2578125,742,0],
                            [0,835.484375,742,380.64453125],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid91",
                            "clip",
                            133,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            [0,835.484375,742,380.64453125],
                            [0,1251.61328125,742,770.966796875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid257",
                            "clip",
                            500,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            [0,1251.61328125,742,770.966796875],
                            [0,1251.61328125,662,770.966796875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid258",
                            "clip",
                            600,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            [0,1251.61328125,662,770.966796875],
                            [0,1251.61328125,602,770.966796875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid95",
                            "clip",
                            2233,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            [0,1251.61328125,478,770.966796875],
                            [0,1667.7431640625,742,1180.6435546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid265",
                            "opacity",
                            1000,
                            502,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid248",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_back3}",
                            '1.31667',
                            '1.31667'
                        ],
                        [
                            "eid211",
                            "display",
                            800,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            2300,
                            0,
                            "linear",
                            "${C_waiting3Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid283",
                            "display",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            1502,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "top",
                            2300,
                            0,
                            "linear",
                            "${GameRun3}",
                            '-5px',
                            '-5px'
                        ],
                        [
                            "eid260",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_front3}",
                            '106px',
                            '101px'
                        ],
                        [
                            "eid273",
                            "left",
                            1000,
                            502,
                            "easeInOutQuad",
                            "${bagUp_C_front3}",
                            '101px',
                            '109px'
                        ],
                        [
                            "eid261",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_back3}",
                            '106px',
                            '101px'
                        ],
                        [
                            "eid275",
                            "display",
                            800,
                            0,
                            "linear",
                            "${bagUp_C_back3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid212",
                            "display",
                            400,
                            0,
                            "linear",
                            "${GameRun3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            2300,
                            0,
                            "linear",
                            "${GameRun3}",
                            'none',
                            'block'
                        ],
                            [ "eid97", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${GameRun3}', [] ] ],
                            [ "eid286", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bagUp_C_front3}', [] ] ],
                            [ "eid287", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bagUp_C_back3}', [] ] ],
                            [ "eid288", "trigger", 400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_C_back3}', [] ] ],
                            [ "eid289", "trigger", 400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_C_front3}', [] ] ],
                            [ "eid98", "trigger", 2300.3333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GameRun3}', [] ] ]
                    ]
                }
            },
            "GameRun3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: [15, 92, '3800px', '576px', 'auto', 'auto'],
                            id: 'C_run3',
                            fill: ['rgba(0,0,0,0)', 'images/C_run3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 475, 689]
                        }
                    }
                },
                timeline: {
                    duration: 533,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid76",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_run3}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid77",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_run3}",
                            '15px',
                            '-513px'
                        ],
                        [
                            "eid78",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_run3}",
                            '-61px',
                            '-938px'
                        ],
                        [
                            "eid79",
                            "left",
                            200,
                            0,
                            "linear",
                            "${C_run3}",
                            '-502px',
                            '-1435px'
                        ],
                        [
                            "eid80",
                            "left",
                            267,
                            0,
                            "linear",
                            "${C_run3}",
                            '-992px',
                            '-1877px'
                        ],
                        [
                            "eid81",
                            "left",
                            333,
                            0,
                            "linear",
                            "${C_run3}",
                            '-1452px',
                            '-2389px'
                        ],
                        [
                            "eid82",
                            "left",
                            400,
                            0,
                            "linear",
                            "${C_run3}",
                            '-1931px',
                            '-2822px'
                        ],
                        [
                            "eid83",
                            "left",
                            467,
                            0,
                            "linear",
                            "${C_run3}",
                            '-2390px',
                            '-3326px'
                        ],
                        [
                            "eid75",
                            "display",
                            0,
                            0,
                            "linear",
                            "${C_run3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "GameRun2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-990, 0, '3960px', '444px', 'auto', 'auto'],
                            id: 'GameRun1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/GameRun1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 330, 444]
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "loop": 67
                    },
                    data: [
                        [
                            "eid143",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GameRun1}",
                            '-990px',
                            '-990px'
                        ],
                        [
                            "eid30",
                            "left",
                            67,
                            0,
                            "linear",
                            "${GameRun1}",
                            '-990px',
                            '-1345px'
                        ],
                        [
                            "eid31",
                            "left",
                            133,
                            0,
                            "linear",
                            "${GameRun1}",
                            '-1320px',
                            '-1650px'
                        ],
                        [
                            "eid32",
                            "left",
                            200,
                            0,
                            "linear",
                            "${GameRun1}",
                            '-1650px',
                            '-1986px'
                        ],
                        [
                            "eid33",
                            "left",
                            267,
                            0,
                            "linear",
                            "${GameRun1}",
                            '-1980px',
                            '-2310px'
                        ],
                        [
                            "eid34",
                            "left",
                            333,
                            0,
                            "linear",
                            "${GameRun1}",
                            '-2319px',
                            '-2599px'
                        ],
                        [
                            "eid35",
                            "left",
                            400,
                            0,
                            "linear",
                            "${GameRun1}",
                            '-2619px',
                            '-2970px'
                        ],
                        [
                            "eid36",
                            "left",
                            467,
                            0,
                            "linear",
                            "${GameRun1}",
                            '-2976px',
                            '-3290px'
                        ],
                        [
                            "eid37",
                            "left",
                            533,
                            0,
                            "linear",
                            "${GameRun1}",
                            '-3301px',
                            '-3624px'
                        ]
                    ]
                }
            },
            "GameRun1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '2520px', '346px', 'auto', 'auto'],
                            id: 'C_run2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/C_run2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 280, 346]
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid159",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_run2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid171",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_run2}",
                            '-280px',
                            '-290px'
                        ],
                        [
                            "eid161",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_run2}",
                            '-290px',
                            '-558px'
                        ],
                        [
                            "eid162",
                            "left",
                            200,
                            0,
                            "linear",
                            "${C_run2}",
                            '-558px',
                            '-833px'
                        ],
                        [
                            "eid163",
                            "left",
                            267,
                            0,
                            "linear",
                            "${C_run2}",
                            '-833px',
                            '-1111px'
                        ],
                        [
                            "eid168",
                            "left",
                            333,
                            0,
                            "linear",
                            "${C_run2}",
                            '-1111px',
                            '-1400px'
                        ],
                        [
                            "eid169",
                            "left",
                            400,
                            0,
                            "linear",
                            "${C_run2}",
                            '-1380px',
                            '-1683px'
                        ],
                        [
                            "eid166",
                            "left",
                            467,
                            0,
                            "linear",
                            "${C_run2}",
                            '-1683px',
                            '-1961px'
                        ],
                        [
                            "eid167",
                            "left",
                            533,
                            0,
                            "linear",
                            "${C_run2}",
                            '-1961px',
                            '-2240px'
                        ]
                    ]
                }
            },
            "Game_C3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [20, 94, 280, 346, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'GameRun13',
                            symbolName: 'GameRun1',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'bagUp_C_back3Copy',
                            opacity: '1',
                            rect: [29, -11, 240, 522, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'bagUp_C_back',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.80089', '0.74008', 1], ['50%', '50%']]
                        },
                        {
                            type: 'image',
                            id: 'C_waiting2Copy',
                            display: 'block',
                            rect: [50, -43, '800px', '514px', 'auto', 'auto'],
                            clip: 'rect(0px 221.875px 514px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/C_waiting22.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'bagUp_C_front3Copy',
                            opacity: '1',
                            rect: [29, -11, 240, 522, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'bagUp_C_front',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.80089', '0.74008', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 330, 444]
                        }
                    }
                },
                timeline: {
                    duration: 3267,
                    autoPlay: true,
                    labels: {
                        "wait": 0,
                        "bagUp": 400,
                        "disappear": 1000,
                        "run": 2001
                    },
                    data: [
                        [
                            "eid172",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid173",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            '50px',
                            '-152px'
                        ],
                        [
                            "eid174",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            '-206px',
                            '-351px'
                        ],
                        [
                            "eid179",
                            "left",
                            2001,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            '-349px',
                            '-538px'
                        ],
                        [
                            "eid369",
                            "left",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid388",
                            "left",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            '29px',
                            '39px'
                        ],
                        [
                            "eid193",
                            "left",
                            2067,
                            1200,
                            "linear",
                            "${GameRun13}",
                            '20px',
                            '2005px'
                        ],
                        [
                            "eid188",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            [0,221.875,514,0],
                            [0,221.875,514,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid189",
                            "clip",
                            67,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            [0,221.875,514,0],
                            [0,403.125,514,200],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid191",
                            "clip",
                            133,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            [0,403.125,514,200],
                            [0,614.0625,514,389.0625],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid192",
                            "clip",
                            2001,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            [0,614.0625,514,389.0625],
                            [0,832.8125,514,587.5],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid181",
                            "top",
                            2067,
                            0,
                            "linear",
                            "${GameRun13}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid380",
                            "scaleY",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3Copy}",
                            '0.74008',
                            '0.74008'
                        ],
                        [
                            "eid382",
                            "scaleX",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3Copy}",
                            '0.80089',
                            '0.80089'
                        ],
                        [
                            "eid363",
                            "scaleY",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            '0.74008',
                            '0.74008'
                        ],
                        [
                            "eid391",
                            "scaleY",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            '0.74008',
                            '0.04987'
                        ],
                        [
                            "eid381",
                            "left",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3Copy}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid214",
                            "display",
                            610,
                            0,
                            "linear",
                            "${GameRun13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid187",
                            "display",
                            2067,
                            0,
                            "linear",
                            "${GameRun13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid378",
                            "display",
                            678,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid376",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_back3Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid371",
                            "scaleX",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            '0.80089',
                            '0.80089'
                        ],
                        [
                            "eid390",
                            "scaleX",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            '0.80089',
                            '0.05396'
                        ],
                        [
                            "eid361",
                            "top",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            '-11px',
                            '-11px'
                        ],
                        [
                            "eid389",
                            "top",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            '-11px',
                            '121px'
                        ],
                        [
                            "eid368",
                            "opacity",
                            1000,
                            467,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid186",
                            "display",
                            0,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid213",
                            "display",
                            733,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            2067,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid379",
                            "top",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_back3Copy}",
                            '-11px',
                            '-11px'
                        ],
                        [
                            "eid365",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid366",
                            "display",
                            400,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid367",
                            "display",
                            1467,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid175",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            '-43px',
                            '-43px'
                        ],
                        [
                            "eid176",
                            "top",
                            67,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            '-43px',
                            '-37px'
                        ],
                        [
                            "eid177",
                            "top",
                            133,
                            0,
                            "linear",
                            "${C_waiting2Copy}",
                            '7px',
                            '-34px'
                        ],
                            [ "eid183", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${GameRun13}', [] ] ],
                            [ "eid394", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bagUp_C_back3Copy}', [] ] ],
                            [ "eid395", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bagUp_C_front3Copy}', [] ] ],
                            [ "eid396", "trigger", 400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_C_front3Copy}', [] ] ],
                            [ "eid397", "trigger", 400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_C_back3Copy}', [] ] ],
                            [ "eid184", "trigger", 2066.6666666667, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${GameRun13}', [] ] ]
                    ]
                }
            },
            "bagUp_3_back": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ss_bagUp_longBack',
                            type: 'image',
                            rect: ['0', 240, '522px', '884px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ss_bagUp_longBack.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 522, 240]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid338",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longBack}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid339",
                            "top",
                            67,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longBack}",
                            '240px',
                            '0px'
                        ],
                        [
                            "eid340",
                            "top",
                            134,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longBack}",
                            '0px',
                            '-232px'
                        ],
                        [
                            "eid341",
                            "top",
                            200,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longBack}",
                            '-232px',
                            '-475px'
                        ],
                        [
                            "eid342",
                            "top",
                            267,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longBack}",
                            '-475px',
                            '-708px'
                        ],
                        [
                            "eid343",
                            "top",
                            334,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longBack}",
                            '-708px',
                            '-938px'
                        ],
                        [
                            "eid315",
                            "top",
                            400,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longBack}",
                            '-1180px',
                            '-900px'
                        ]
                    ]
                }
            },
            "bagUp_3_front": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ss_bagUp_longFront',
                            type: 'image',
                            rect: [0, 240, '522px', '1440px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ss_bagUp_longFront.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 522, 240]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    data: [
                        [
                            "eid284",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longFront}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid277",
                            "top",
                            67,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longFront}",
                            '240px',
                            '0px'
                        ],
                        [
                            "eid278",
                            "top",
                            134,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longFront}",
                            '0px',
                            '-232px'
                        ],
                        [
                            "eid279",
                            "top",
                            200,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longFront}",
                            '-240px',
                            '-475px'
                        ],
                        [
                            "eid280",
                            "top",
                            267,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longFront}",
                            '-480px',
                            '-708px'
                        ],
                        [
                            "eid281",
                            "top",
                            334,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longFront}",
                            '-720px',
                            '-938px'
                        ],
                        [
                            "eid282",
                            "top",
                            400,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_longFront}",
                            '-960px',
                            '-1180px'
                        ]
                    ]
                }
            },
            "bagDrag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-360, 400, '540px', '382px', 'auto', 'auto'],
                            id: 'ss_bagDrag',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_bagDrag.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 180, 382]
                        }
                    }
                },
                timeline: {
                    duration: 1067,
                    autoPlay: true,
                    labels: {
                        "appear": 0,
                        "loop": 867
                    },
                    data: [
                        [
                            "eid112",
                            "top",
                            0,
                            733,
                            "easeInOutQuad",
                            "${ss_bagDrag}",
                            '400px',
                            '0px'
                        ],
                        [
                            "eid113",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-360px',
                            '0px'
                        ],
                        [
                            "eid114",
                            "left",
                            67,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '0px',
                            '-180px'
                        ],
                        [
                            "eid115",
                            "left",
                            133,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-180px',
                            '-360px'
                        ],
                        [
                            "eid116",
                            "left",
                            200,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-360px',
                            '0px'
                        ],
                        [
                            "eid117",
                            "left",
                            267,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '0px',
                            '-180px'
                        ],
                        [
                            "eid118",
                            "left",
                            333,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-180px',
                            '-360px'
                        ],
                        [
                            "eid119",
                            "left",
                            400,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-360px',
                            '0px'
                        ],
                        [
                            "eid120",
                            "left",
                            467,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '0px',
                            '-180px'
                        ],
                        [
                            "eid121",
                            "left",
                            533,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-180px',
                            '-360px'
                        ],
                        [
                            "eid122",
                            "left",
                            600,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-360px',
                            '0px'
                        ],
                        [
                            "eid123",
                            "left",
                            667,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '0px',
                            '-180px'
                        ],
                        [
                            "eid124",
                            "left",
                            733,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-180px',
                            '-360px'
                        ],
                        [
                            "eid128",
                            "left",
                            867,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-360px',
                            '0px'
                        ],
                        [
                            "eid129",
                            "left",
                            934,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '0px',
                            '-180px'
                        ],
                        [
                            "eid130",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${ss_bagDrag}",
                            '-180px',
                            '-360px'
                        ]
                    ]
                }
            },
            "bagUp_C_front": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [280, 0, '1440px', '522px', 'auto', 'auto'],
                            id: 'bagUp_C_front',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/bagUp_C_front.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 240, 522]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid237",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_front}",
                            '280px',
                            '280px'
                        ],
                        [
                            "eid231",
                            "left",
                            67,
                            0,
                            "linear",
                            "${bagUp_C_front}",
                            '280px',
                            '-23px'
                        ],
                        [
                            "eid232",
                            "left",
                            133,
                            0,
                            "linear",
                            "${bagUp_C_front}",
                            '-23px',
                            '-240px'
                        ],
                        [
                            "eid233",
                            "left",
                            200,
                            0,
                            "linear",
                            "${bagUp_C_front}",
                            '-240px',
                            '-480px'
                        ],
                        [
                            "eid383",
                            "left",
                            267,
                            0,
                            "easeInOutQuad",
                            "${bagUp_C_front}",
                            '-480px',
                            '-704px'
                        ],
                        [
                            "eid234",
                            "left",
                            333,
                            0,
                            "linear",
                            "${bagUp_C_front}",
                            '-704px',
                            '-943px'
                        ],
                        [
                            "eid236",
                            "left",
                            400,
                            0,
                            "linear",
                            "${bagUp_C_front}",
                            '-943px',
                            '-1187px'
                        ]
                    ]
                }
            },
            "bagUp_C_back": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [280, '0', '960px', '522px', 'auto', 'auto'],
                            id: 'bagUp_C_back2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/bagUp_C_back.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 240, 522]
                        }
                    }
                },
                timeline: {
                    duration: 267,
                    autoPlay: true,
                    data: [
                        [
                            "eid238",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bagUp_C_back2}",
                            '280px',
                            '280px'
                        ],
                        [
                            "eid239",
                            "left",
                            67,
                            0,
                            "linear",
                            "${bagUp_C_back2}",
                            '280px',
                            '-23px'
                        ],
                        [
                            "eid240",
                            "left",
                            133,
                            0,
                            "linear",
                            "${bagUp_C_back2}",
                            '-23px',
                            '-240px'
                        ],
                        [
                            "eid241",
                            "left",
                            200,
                            0,
                            "linear",
                            "${bagUp_C_back2}",
                            '-240px',
                            '-480px'
                        ],
                        [
                            "eid243",
                            "left",
                            267,
                            0,
                            "linear",
                            "${bagUp_C_back2}",
                            '-480px',
                            '-992px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("GAME_2_edgeActions.js");
})("GAME_2");
