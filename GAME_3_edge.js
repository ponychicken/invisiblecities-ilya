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
                            id: 'windloop',
                            display: 'none',
                            volume: '0',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [aud+"windloop.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'paper_opaque2',
                            type: 'image',
                            rect: ['0', '0', '2048px', '1535px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
                        },
                        {
                            id: 'BG_0',
                            type: 'image',
                            rect: ['67', '977', '1913', '265', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
                        },
                        {
                            id: 'BG_0Copy',
                            type: 'image',
                            rect: ['-101', '1187', '2311', '320', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px'],
                            transform: [[],[],[],['-1','-1']]
                        },
                        {
                            id: 'tree_1',
                            type: 'image',
                            rect: ['747', '576', '362px', '381px', 'auto', 'auto'],
                            opacity: '0.71544713314956',
                            fill: ["rgba(0,0,0,0)",im+"tree_1.png",'0px','0px']
                        },
                        {
                            id: 'houses_bg_1',
                            type: 'image',
                            rect: ['806', '236', '1096px', '593px', 'auto', 'auto'],
                            opacity: '0.5',
                            fill: ["rgba(0,0,0,0)",im+"houses_bg_1.png",'0px','0px']
                        },
                        {
                            id: 'house_1',
                            type: 'image',
                            rect: ['223', '204', '372px', '699px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"house_1.png",'0px','0px']
                        },
                        {
                            id: 'house_3',
                            type: 'image',
                            rect: ['1320', '454', '402px', '507px', 'auto', 'auto'],
                            opacity: '0.55284552845528',
                            fill: ["rgba(0,0,0,0)",im+"house_3.png",'0px','0px'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'poller',
                            type: 'image',
                            rect: ['1289', '864', '130', '274', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"poller.png",'0px','0px']
                        },
                        {
                            id: 'pollerCopy',
                            type: 'image',
                            rect: ['989', '864', '130', '274', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"poller.png",'0px','0px']
                        },
                        {
                            id: 'pollerCopy2',
                            type: 'image',
                            rect: ['689', '864', '130', '274', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"poller.png",'0px','0px']
                        },
                        {
                            id: 'pollerCopy3',
                            type: 'image',
                            rect: ['398', '864', '130', '274', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"poller.png",'0px','0px']
                        },
                        {
                            id: 'BG_lantern',
                            type: 'image',
                            rect: ['1735', '139', '137', '976', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
                        },
                        {
                            id: 'BG_lanternCopy2',
                            type: 'image',
                            rect: ['1410', '367', '86', '610', 'auto', 'auto'],
                            opacity: '0.8',
                            fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'BG_curb',
                            type: 'image',
                            rect: ['-64', '1117', '2383', '218', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_curb.png",'0px','0px'],
                            transform: [[],[],[],['1','-1']]
                        },
                        {
                            id: 'wind',
                            symbolName: 'wind',
                            type: 'rect',
                            rect: ['92', '6', '770', '1287', 'auto', 'auto'],
                            overflow: 'hidden',
                            clip: 'rect(0px 555.5634155273438px 1287px 290.21173095703125px)',
                            opacity: '0.1',
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-58'],[],['1.5','1.5']]
                        },
                        {
                            id: 'windCopy',
                            symbolName: 'wind',
                            type: 'rect',
                            rect: ['604', '82', '770', '1287', 'auto', 'auto'],
                            overflow: 'hidden',
                            clip: 'rect(0px 555.5634155273438px 1287px 290.21173095703125px)',
                            opacity: '0.1',
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-58'],[],['1.2','1.2']]
                        },
                        {
                            id: 'windCopy4',
                            symbolName: 'wind',
                            type: 'rect',
                            rect: ['464', '-213', '770', '1287', 'auto', 'auto'],
                            overflow: 'hidden',
                            clip: 'rect(0px 555.5634155273438px 1287px 290.21173095703125px)',
                            opacity: '0.1',
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-58'],[],['1.2','1.2']]
                        },
                        {
                            id: 'windCopy2',
                            symbolName: 'wind',
                            type: 'rect',
                            rect: ['239', '439', '770', '1287', 'auto', 'auto'],
                            overflow: 'hidden',
                            clip: 'rect(0px 477.58831787109375px 1287px 234.41053771972656px)',
                            opacity: '0.1',
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-58'],[],['1.5','1.5']]
                        },
                        {
                            id: 'windCopy3',
                            symbolName: 'wind',
                            type: 'rect',
                            rect: ['1016', '-230', '770', '1287', 'auto', 'auto'],
                            overflow: 'hidden',
                            clip: 'rect(0px 596.2573852539062px 1287px 346.743896484375px)',
                            opacity: '0.1',
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-58'],[],['1.5','1.5']]
                        },
                        {
                            id: 'C_wind22',
                            symbolName: 'C_wind2',
                            type: 'rect',
                            rect: ['690', '-146', '150', '1400', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],['-55']]
                        },
                        {
                            id: 'C_wind32',
                            symbolName: 'C_wind3',
                            type: 'rect',
                            rect: ['1173', '-366', '150', '1400', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],['-59']]
                        },
                        {
                            id: 'C_wind32Copy',
                            symbolName: 'C_wind3',
                            type: 'rect',
                            rect: ['600', '-73', '150', '1400', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0.7',
                            transform: [[],['-48'],[],['0.5','0.5']]
                        },
                        {
                            id: 'C_wind12',
                            symbolName: 'C_wind1',
                            type: 'rect',
                            rect: ['148', '-73', '150', '1320', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],['-52']]
                        },
                        {
                            id: 'C_wind12Copy',
                            symbolName: 'C_wind1',
                            type: 'rect',
                            rect: ['1065', '-406', '150', '1320', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0.75',
                            transform: [[],['-66'],[],['0.6','0.6']]
                        },
                        {
                            id: 'Rectangle',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0px', '2048px', '1536', 'auto', 'auto'],
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
                        "off": 4000
                    },
                    data: [
                        [
                            "eid198",
                            "display",
                            1000,
                            0,
                            "easeInQuart",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            5000,
                            0,
                            "easeInQuart",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "display",
                            6349,
                            0,
                            "easeInQuart",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "volume",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${windloop}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid208",
                            "volume",
                            5157,
                            1000,
                            "easeInOutQuad",
                            "${windloop}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid199",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid202",
                            "opacity",
                            5000,
                            1349,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "wind": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '3080px', '1287px', 'auto', 'auto'],
                            id: 'wind',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wind2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 770, 1287]
                        }
                    }
                },
                timeline: {
                    duration: 267,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid122",
                            "left",
                            0,
                            0,
                            "linear",
                            "${wind}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid123",
                            "left",
                            67,
                            0,
                            "linear",
                            "${wind}",
                            '0px',
                            '-770px'
                        ],
                        [
                            "eid124",
                            "left",
                            133,
                            0,
                            "linear",
                            "${wind}",
                            '-770px',
                            '-1540px'
                        ],
                        [
                            "eid125",
                            "left",
                            200,
                            0,
                            "linear",
                            "${wind}",
                            '-1540px',
                            '-2310px'
                        ]
                    ]
                }
            },
            "C_wind1": {
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
                            rect: [-7, 756, '1350px', '558px', 'auto', 'auto'],
                            display: 'block',
                            opacity: '1',
                            id: 'C_wind1',
                            fill: ['rgba(0,0,0,0)', 'images/C_wind1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 150, 1320]
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: true,
                    labels: {
                        "loop": 0,
                        "fly": 467
                    },
                    data: [
                        [
                            "eid116",
                            "opacity",
                            533,
                            267,
                            "easeInQuart",
                            "${C_wind1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_wind1}",
                            '-7px',
                            '-7px'
                        ],
                        [
                            "eid85",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_wind1}",
                            '-7px',
                            '-146px'
                        ],
                        [
                            "eid86",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_wind1}",
                            '-146px',
                            '-300px'
                        ],
                        [
                            "eid87",
                            "left",
                            200,
                            0,
                            "linear",
                            "${C_wind1}",
                            '-300px',
                            '-442px'
                        ],
                        [
                            "eid88",
                            "left",
                            467,
                            0,
                            "linear",
                            "${C_wind1}",
                            '-450px',
                            '-600px'
                        ],
                        [
                            "eid89",
                            "left",
                            533,
                            0,
                            "linear",
                            "${C_wind1}",
                            '-600px',
                            '-748px'
                        ],
                        [
                            "eid90",
                            "left",
                            600,
                            0,
                            "linear",
                            "${C_wind1}",
                            '-750px',
                            '-900px'
                        ],
                        [
                            "eid92",
                            "left",
                            667,
                            0,
                            "linear",
                            "${C_wind1}",
                            '-1050px',
                            '-1200px'
                        ],
                        [
                            "eid113",
                            "display",
                            867,
                            0,
                            "linear",
                            "${C_wind1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_wind1}",
                            '756px',
                            '756px'
                        ],
                        [
                            "eid108",
                            "top",
                            533,
                            0,
                            "linear",
                            "${C_wind1}",
                            '756px',
                            '644px'
                        ],
                        [
                            "eid109",
                            "top",
                            600,
                            0,
                            "linear",
                            "${C_wind1}",
                            '644px',
                            '366px'
                        ],
                        [
                            "eid110",
                            "top",
                            667,
                            0,
                            "linear",
                            "${C_wind1}",
                            '366px',
                            '139px'
                        ],
                        [
                            "eid111",
                            "top",
                            733,
                            0,
                            "linear",
                            "${C_wind1}",
                            '139px',
                            '-220px'
                        ],
                        [
                            "eid112",
                            "top",
                            800,
                            0,
                            "linear",
                            "${C_wind1}",
                            '-220px',
                            '-479px'
                        ]
                    ]
                }
            },
            "C_wind3": {
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
                            rect: [0, 883, '1350px', '558px', 'auto', 'auto'],
                            display: 'block',
                            opacity: '1',
                            id: 'C_wind3',
                            fill: ['rgba(0,0,0,0)', 'images/C_wind3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 150, 1400]
                        }
                    }
                },
                timeline: {
                    duration: 800,
                    autoPlay: true,
                    labels: {
                        "loop": 0,
                        "fly": 467
                    },
                    data: [
                        [
                            "eid107",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_wind3}",
                            '883px',
                            '883px'
                        ],
                        [
                            "eid117",
                            "top",
                            467,
                            0,
                            "easeInQuart",
                            "${C_wind3}",
                            '883px',
                            '853px'
                        ],
                        [
                            "eid118",
                            "top",
                            533,
                            0,
                            "easeInQuart",
                            "${C_wind3}",
                            '853px',
                            '668px'
                        ],
                        [
                            "eid119",
                            "top",
                            600,
                            0,
                            "easeInQuart",
                            "${C_wind3}",
                            '668px',
                            '353px'
                        ],
                        [
                            "eid120",
                            "top",
                            667,
                            0,
                            "easeInQuart",
                            "${C_wind3}",
                            '353px',
                            '63px'
                        ],
                        [
                            "eid121",
                            "top",
                            733,
                            0,
                            "easeInQuart",
                            "${C_wind3}",
                            '63px',
                            '-293px'
                        ],
                        [
                            "eid126",
                            "display",
                            800,
                            0,
                            "easeInQuart",
                            "${C_wind3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "opacity",
                            467,
                            266,
                            "easeInQuart",
                            "${C_wind3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_wind3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid100",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_wind3}",
                            '0px',
                            '-146px'
                        ],
                        [
                            "eid101",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_wind3}",
                            '-146px',
                            '-300px'
                        ],
                        [
                            "eid102",
                            "left",
                            200,
                            0,
                            "linear",
                            "${C_wind3}",
                            '-300px',
                            '-442px'
                        ],
                        [
                            "eid103",
                            "left",
                            467,
                            0,
                            "linear",
                            "${C_wind3}",
                            '-442px',
                            '-590px'
                        ],
                        [
                            "eid104",
                            "left",
                            533,
                            0,
                            "linear",
                            "${C_wind3}",
                            '-600px',
                            '-740px'
                        ],
                        [
                            "eid105",
                            "left",
                            600,
                            0,
                            "linear",
                            "${C_wind3}",
                            '-750px',
                            '-888px'
                        ],
                        [
                            "eid106",
                            "left",
                            667,
                            0,
                            "linear",
                            "${C_wind3}",
                            '-900px',
                            '-1200px'
                        ]
                    ]
                }
            },
            "C_wind2": {
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
                            rect: [-7, 848, '1350px', '558px', 'auto', 'auto'],
                            display: 'block',
                            opacity: '1',
                            id: 'C_wind2',
                            fill: ['rgba(0,0,0,0)', 'images/C_wind2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 150, 1400]
                        }
                    }
                },
                timeline: {
                    duration: 800,
                    autoPlay: true,
                    labels: {
                        "loop": 0,
                        "fly": 467
                    },
                    data: [
                        [
                            "eid155",
                            "display",
                            800,
                            0,
                            "linear",
                            "${C_wind2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "opacity",
                            466,
                            267,
                            "easeInQuart",
                            "${C_wind2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid157",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_wind2}",
                            '-7px',
                            '-7px'
                        ],
                        [
                            "eid158",
                            "left",
                            67,
                            0,
                            "linear",
                            "${C_wind2}",
                            '-7px',
                            '-146px'
                        ],
                        [
                            "eid159",
                            "left",
                            133,
                            0,
                            "linear",
                            "${C_wind2}",
                            '-146px',
                            '-300px'
                        ],
                        [
                            "eid160",
                            "left",
                            200,
                            0,
                            "linear",
                            "${C_wind2}",
                            '-300px',
                            '-442px'
                        ],
                        [
                            "eid161",
                            "left",
                            467,
                            0,
                            "linear",
                            "${C_wind2}",
                            '-442px',
                            '-600px'
                        ],
                        [
                            "eid162",
                            "left",
                            533,
                            0,
                            "linear",
                            "${C_wind2}",
                            '-600px',
                            '-748px'
                        ],
                        [
                            "eid163",
                            "left",
                            600,
                            0,
                            "linear",
                            "${C_wind2}",
                            '-748px',
                            '-900px'
                        ],
                        [
                            "eid164",
                            "left",
                            667,
                            0,
                            "linear",
                            "${C_wind2}",
                            '-900px',
                            '-1200px'
                        ],
                        [
                            "eid176",
                            "top",
                            0,
                            0,
                            "easeInQuart",
                            "${C_wind2}",
                            '848px',
                            '848px'
                        ],
                        [
                            "eid177",
                            "top",
                            467,
                            0,
                            "easeInQuart",
                            "${C_wind2}",
                            '848px',
                            '808px'
                        ],
                        [
                            "eid178",
                            "top",
                            533,
                            0,
                            "easeInQuart",
                            "${C_wind2}",
                            '808px',
                            '568px'
                        ],
                        [
                            "eid179",
                            "top",
                            600,
                            0,
                            "easeInQuart",
                            "${C_wind2}",
                            '568px',
                            '258px'
                        ],
                        [
                            "eid180",
                            "top",
                            667,
                            0,
                            "easeInQuart",
                            "${C_wind2}",
                            '258px',
                            '-16px'
                        ],
                        [
                            "eid181",
                            "top",
                            733,
                            0,
                            "easeInQuart",
                            "${C_wind2}",
                            '-16px',
                            '-296px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("GAME_3_edgeActions.js");
})("GAME_3");
