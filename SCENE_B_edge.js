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
                            id: 'paper_opaque2',
                            type: 'image',
                            rect: ['0px', '-1', '2048px', '1535px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
                        },
                        {
                            id: 'BG_0Copy2',
                            type: 'image',
                            rect: ['-2567', '1237', '4096px', '567px', 'auto', 'auto'],
                            clip: 'rect(70.83349609375px 4096px 567px 2536px)',
                            fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
                        },
                        {
                            id: 'BG52',
                            type: 'image',
                            rect: ['1816', '48', '890px', '711px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"BG5.png",'0px','0px'],
                            transform: [[],['-1'],[],['-1']]
                        },
                        {
                            id: 'BusStopWalkers',
                            symbolName: 'BusStopWalkers',
                            type: 'rect',
                            rect: ['2846', '418', '1296', '596', 'auto', 'auto']
                        },
                        {
                            id: 'BG_0Copy',
                            type: 'image',
                            rect: ['2455', '1007', '2048', '283', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'BG_curb',
                            type: 'image',
                            rect: ['2353', '869', '2938px', '269px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_curb.png",'0px','0px']
                        },
                        {
                            id: 'BG_poller',
                            symbolName: 'BG_poller',
                            type: 'rect',
                            rect: ['2346', '804', '1220', '350', 'auto', 'auto']
                        },
                        {
                            id: 'BG_lantern',
                            type: 'image',
                            rect: ['1989', '-180', '214px', '1524px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px'],
                            transform: [[],['1']]
                        },
                        {
                            id: 'BG_fence3',
                            symbolName: 'BG_fence',
                            type: 'rect',
                            rect: ['921', '430', '2490', '970', 'auto', 'auto']
                        },
                        {
                            id: 'FG_Hwalk',
                            symbolName: 'FG_Hwalk',
                            type: 'rect',
                            rect: ['1321', '1197', '4096', '567', 'auto', 'auto']
                        },
                        {
                            id: 'dust_button2',
                            symbolName: 'dust_button',
                            display: 'none',
                            type: 'rect',
                            rect: ['1662', '330', '193', '179', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'text_1',
                            symbolName: 'text_1',
                            display: 'block',
                            type: 'rect',
                            rect: ['33', '86', '1223', '89', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-1'],[],['0.85','0.85']]
                        },
                        {
                            id: 'text_2',
                            symbolName: 'text_2',
                            display: 'block',
                            type: 'rect',
                            rect: ['-44', '175', '2210', '80', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['0.70853','0.70853']]
                        },
                        {
                            id: 'text_3',
                            symbolName: 'text_3',
                            display: 'block',
                            type: 'rect',
                            rect: ['1124', '254', '620', '80', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['1'],[],['0.75','0.75']]
                        },
                        {
                            id: 'text_4',
                            symbolName: 'text_4',
                            display: 'block',
                            type: 'rect',
                            rect: ['285', '338', '1480', '80', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['0.88809','0.88809']]
                        },
                        {
                            id: 'dust_button2Copy',
                            symbolName: 'dust_button',
                            display: 'none',
                            type: 'rect',
                            rect: ['1566', '96', '193', '179', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Rectangle',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0', '2048px', '1545px', 'auto', 'auto'],
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
                        "button": 15000,
                        "textOut": 27993,
                        "in": 30317,
                        "out": 54938
                    },
                    data: [
                        [
                            "eid161",
                            "left",
                            30317,
                            6621,
                            "easeInOutQuad",
                            "${BG52}",
                            '1816px',
                            '166px'
                        ],
                        [
                            "eid548",
                            "display",
                            2160,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid549",
                            "display",
                            55236,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "top",
                            0,
                            0,
                            "easeInOutQuint",
                            "${BG52}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid781",
                            "display",
                            29993,
                            0,
                            "easeInOutQuad",
                            "${text_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "left",
                            30317,
                            6621,
                            "easeInOutQuad",
                            "${BG_lantern}",
                            '1989px',
                            '-512px'
                        ],
                        [
                            "eid357",
                            "left",
                            30317,
                            6621,
                            "easeInOutQuad",
                            "${BG_0Copy2}",
                            '-2567px',
                            '-5925px'
                        ],
                        [
                            "eid516",
                            "left",
                            30317,
                            6621,
                            "easeInOutQuad",
                            "${FG_Hwalk}",
                            '1321px',
                            '-2089px'
                        ],
                        [
                            "eid616",
                            "opacity",
                            27993,
                            2000,
                            "easeInOutQuad",
                            "${text_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid63",
                            "left",
                            30317,
                            6621,
                            "easeInOutQuad",
                            "${BG_poller}",
                            '2346px',
                            '-41px'
                        ],
                        [
                            "eid599",
                            "top",
                            15000,
                            0,
                            "easeInOutQuad",
                            "${dust_button2Copy}",
                            '96px',
                            '96px'
                        ],
                        [
                            "eid780",
                            "display",
                            29993,
                            0,
                            "easeInOutQuad",
                            "${text_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "opacity",
                            0,
                            2160,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid182",
                            "opacity",
                            55712,
                            2000,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid615",
                            "opacity",
                            27993,
                            2000,
                            "easeInOutQuad",
                            "${text_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid398",
                            "left",
                            30317,
                            6621,
                            "easeInOutQuad",
                            "${BusStopWalkers}",
                            '2846px',
                            '1004px'
                        ],
                        [
                            "eid614",
                            "opacity",
                            27993,
                            2000,
                            "easeInOutQuad",
                            "${text_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid617",
                            "opacity",
                            27993,
                            2000,
                            "easeInOutQuad",
                            "${text_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${BG_0Copy2}",
                            [70.83349609375,4096,567,2536],
                            [70.83349609375,4096,567,2536],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid596",
                            "display",
                            15000,
                            0,
                            "easeInOutQuad",
                            "${dust_button2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid601",
                            "display",
                            28993,
                            0,
                            "easeInOutQuad",
                            "${dust_button2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid777",
                            "display",
                            29993,
                            0,
                            "easeInOutQuad",
                            "${dust_button2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid533",
                            "opacity",
                            38257,
                            457,
                            "easeInOutQuad",
                            "${dust_button2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid535",
                            "opacity",
                            54938,
                            457,
                            "easeInOutQuad",
                            "${dust_button2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid171",
                            "top",
                            0,
                            0,
                            "linear",
                            "${BG_0Copy2}",
                            '1237px',
                            '1237px'
                        ],
                        [
                            "eid531",
                            "display",
                            38257,
                            0,
                            "easeInOutQuad",
                            "${dust_button2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid536",
                            "display",
                            55395,
                            0,
                            "easeInOutQuad",
                            "${dust_button2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid160",
                            "left",
                            30317,
                            6621,
                            "easeInOutQuad",
                            "${BG_fence3}",
                            '921px',
                            '-2150px'
                        ],
                        [
                            "eid779",
                            "display",
                            29993,
                            0,
                            "easeInOutQuad",
                            "${text_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid598",
                            "left",
                            15000,
                            0,
                            "easeInOutQuad",
                            "${dust_button2Copy}",
                            '1566px',
                            '1566px'
                        ],
                        [
                            "eid76",
                            "left",
                            30317,
                            6621,
                            "easeInOutQuad",
                            "${BG_0Copy}",
                            '2455px',
                            '9px'
                        ],
                        [
                            "eid530",
                            "left",
                            38257,
                            0,
                            "easeInOutQuad",
                            "${dust_button2}",
                            '1662px',
                            '1662px'
                        ],
                        [
                            "eid778",
                            "display",
                            29993,
                            0,
                            "easeInOutQuad",
                            "${text_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "left",
                            30317,
                            6621,
                            "easeInOutQuad",
                            "${BG_curb}",
                            '2353px',
                            '-36px'
                        ],
                        [
                            "eid597",
                            "opacity",
                            15000,
                            1000,
                            "easeInOutQuad",
                            "${dust_button2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid605",
                            "opacity",
                            27993,
                            1000,
                            "easeInOutQuad",
                            "${dust_button2Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "C_walkM_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ss_walkM_2',
                            type: 'image',
                            rect: [0, 0, '966px', '464px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ss_walkM_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 250, 464]
                        }
                    }
                },
                timeline: {
                    duration: 800,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_walkM_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2",
                            "left",
                            200,
                            0,
                            "linear",
                            "${ss_walkM_2}",
                            '0px',
                            '-250px'
                        ],
                        [
                            "eid3",
                            "left",
                            400,
                            0,
                            "linear",
                            "${ss_walkM_2}",
                            '-250px',
                            '-500px'
                        ],
                        [
                            "eid4",
                            "left",
                            600,
                            0,
                            "linear",
                            "${ss_walkM_2}",
                            '-500px',
                            '-750px'
                        ]
                    ]
                }
            },
            "C_walkW_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ss_walkW_1',
                            type: 'image',
                            rect: [0, 0, '2240px', '453px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ss_walkW_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 280, 453]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid7",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_walkW_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8",
                            "left",
                            125,
                            0,
                            "linear",
                            "${ss_walkW_1}",
                            '0px',
                            '-280px'
                        ],
                        [
                            "eid9",
                            "left",
                            250,
                            0,
                            "linear",
                            "${ss_walkW_1}",
                            '-280px',
                            '-560px'
                        ],
                        [
                            "eid10",
                            "left",
                            375,
                            0,
                            "linear",
                            "${ss_walkW_1}",
                            '-560px',
                            '-840px'
                        ],
                        [
                            "eid11",
                            "left",
                            500,
                            0,
                            "linear",
                            "${ss_walkW_1}",
                            '-840px',
                            '-1120px'
                        ],
                        [
                            "eid12",
                            "left",
                            625,
                            0,
                            "linear",
                            "${ss_walkW_1}",
                            '-1120px',
                            '-1400px'
                        ],
                        [
                            "eid13",
                            "left",
                            750,
                            0,
                            "linear",
                            "${ss_walkW_1}",
                            '-1400px',
                            '-1680px'
                        ],
                        [
                            "eid14",
                            "left",
                            875,
                            0,
                            "linear",
                            "${ss_walkW_1}",
                            '-1680px',
                            '-1960px'
                        ]
                    ]
                }
            },
            "C_walkM_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ss_walkM_1',
                            type: 'image',
                            rect: [0, 0, '1600px', '473px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ss_walkM_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 200, 473]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid20",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_walkM_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid21",
                            "left",
                            125,
                            0,
                            "linear",
                            "${ss_walkM_1}",
                            '0px',
                            '-200px'
                        ],
                        [
                            "eid22",
                            "left",
                            250,
                            0,
                            "linear",
                            "${ss_walkM_1}",
                            '-200px',
                            '-400px'
                        ],
                        [
                            "eid23",
                            "left",
                            375,
                            0,
                            "linear",
                            "${ss_walkM_1}",
                            '-400px',
                            '-600px'
                        ],
                        [
                            "eid24",
                            "left",
                            500,
                            0,
                            "linear",
                            "${ss_walkM_1}",
                            '-600px',
                            '-800px'
                        ],
                        [
                            "eid25",
                            "left",
                            625,
                            0,
                            "linear",
                            "${ss_walkM_1}",
                            '-800px',
                            '-1000px'
                        ],
                        [
                            "eid26",
                            "left",
                            750,
                            0,
                            "linear",
                            "${ss_walkM_1}",
                            '-1000px',
                            '-1200px'
                        ],
                        [
                            "eid27",
                            "left",
                            875,
                            0,
                            "linear",
                            "${ss_walkM_1}",
                            '-1200px',
                            '-1400px'
                        ]
                    ]
                }
            },
            "BG_poller": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '166px', '350px', 'auto', 'auto'],
                            id: 'poller',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/poller.png', '0px', '0px']
                        },
                        {
                            rect: [331, 0, '166px', '350px', 'auto', 'auto'],
                            id: 'pollerCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/poller.png', '0px', '0px']
                        },
                        {
                            rect: [676, 0, '166px', '350px', 'auto', 'auto'],
                            id: 'pollerCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/poller.png', '0px', '0px']
                        },
                        {
                            rect: [1024, 0, '166px', '350px', 'auto', 'auto'],
                            id: 'pollerCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/poller.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1220, 350]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "passanten": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [2280, 0, 200, 473, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'C_walkM_1',
                            symbolName: 'C_walkM_1',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [2213, 5, 250, 464, 'auto', 'auto'],
                            opacity: '0.58536585365854',
                            overflow: 'hidden',
                            id: 'C_walkM_2',
                            symbolName: 'C_walkM_2',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.4657', '0.4657', 1], ['50%', '50%']]
                        },
                        {
                            rect: [-24, 40, 280, 453, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.82984', '0.82984', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'C_walkW_1',
                            symbolName: 'C_walkW_1',
                            display: 'none',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2480, 473]
                        }
                    }
                },
                timeline: {
                    duration: 24000,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "left",
                            9671,
                            13000,
                            "linear",
                            "${C_walkM_1}",
                            '2280px',
                            '32px'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${C_walkW_1}",
                            '0.82984',
                            '0.82984'
                        ],
                        [
                            "eid36",
                            "left",
                            3000,
                            13000,
                            "linear",
                            "${C_walkW_1}",
                            '-24px',
                            '2256px'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${C_walkM_2}",
                            '-0.4657',
                            '-0.4657'
                        ],
                        [
                            "eid43",
                            "left",
                            0,
                            24000,
                            "linear",
                            "${C_walkM_2}",
                            '2213px',
                            '44px'
                        ],
                        [
                            "eid18",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${C_walkM_2}",
                            '0.4657',
                            '0.4657'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_walkM_2}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid40",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_walkM_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid41",
                            "top",
                            22671,
                            0,
                            "linear",
                            "${C_walkM_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${C_walkM_1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${C_walkM_2}",
                            '0.58536585365854',
                            '0.58536585365854'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${C_walkW_1}",
                            '0.82984',
                            '0.82984'
                        ],
                        [
                            "eid54",
                            "display",
                            9671,
                            0,
                            "linear",
                            "${C_walkM_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            22671,
                            0,
                            "linear",
                            "${C_walkM_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_walkW_1}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid52",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${C_walkW_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${C_walkW_1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "BG_fence": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-1158, 15, '1351px', '952px', 'auto', 'auto'],
                            id: 'BG_fenceCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BG_fence.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '1351px', '952px', 'auto', 'auto'],
                            id: 'BG_fence',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BG_fence.png', '0px', '0px']
                        },
                        {
                            rect: [1158, 0, '1351px', '952px', 'auto', 'auto'],
                            id: 'BG_fenceCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BG_fence.png', '0px', '0px']
                        },
                        {
                            rect: [712, 638, '608px', '251px', 'auto', 'auto'],
                            id: 'grafitti2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/grafitti2.png', '0px', '0px']
                        },
                        {
                            rect: [1633, 73, '904px', '874px', 'auto', 'auto'],
                            id: 'grafitti1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/grafitti1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2490, 970]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "lanternRow": {
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
                            id: 'BG_lanternCopy',
                            rect: [-5, -67, 95, 677, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-1', 0, 0], [0, 0], ['-0.8', '0.8', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/BG_lantern.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'BG_lanternCopy2',
                            rect: [678, -67, 95, 677, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-1', 0, 0], [0, 0], ['-0.8', '0.8', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/BG_lantern.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'BG_lanternCopy3',
                            rect: [1361, -67, 95, 677, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-1', 0, 0], [0, 0], ['-0.8', '0.8', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/BG_lantern.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1480, 543]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', 5, 615, 75, 'auto', 'auto'],
                            id: 'bText_7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_7.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 620, 80]
                        }
                    }
                },
                timeline: {
                    duration: 4133,
                    autoPlay: false,
                    labels: {
                        "fade_flimmer": 452,
                        "fade_still": 1585,
                        "still_loop": 1852,
                        "opaque": 2452,
                        "opaque_loop": 3252,
                        "fade": 3652
                    },
                    data: [
                        [
                            "eid706",
                            "opacity",
                            0,
                            452,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid707",
                            "opacity",
                            452,
                            129,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid708",
                            "opacity",
                            581,
                            140,
                            "easeOutBounce",
                            "${bText_7}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid709",
                            "opacity",
                            721,
                            106,
                            "easeOutBounce",
                            "${bText_7}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid710",
                            "opacity",
                            827,
                            61,
                            "easeOutBounce",
                            "${bText_7}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid711",
                            "opacity",
                            888,
                            164,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid712",
                            "opacity",
                            1052,
                            67,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid713",
                            "opacity",
                            1119,
                            66,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid714",
                            "opacity",
                            1185,
                            200,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid715",
                            "opacity",
                            1385,
                            67,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid716",
                            "opacity",
                            1585,
                            96,
                            "easeInBounce",
                            "${bText_7}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid717",
                            "opacity",
                            1681,
                            171,
                            "easeOutBounce",
                            "${bText_7}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid718",
                            "opacity",
                            1852,
                            67,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid719",
                            "opacity",
                            1919,
                            34,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid720",
                            "opacity",
                            1953,
                            70,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid721",
                            "opacity",
                            2023,
                            55,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid722",
                            "opacity",
                            2078,
                            41,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid723",
                            "opacity",
                            2119,
                            38,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid724",
                            "opacity",
                            2157,
                            64,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid725",
                            "opacity",
                            2452,
                            800,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid726",
                            "opacity",
                            3452,
                            0,
                            "easeInOutBounce",
                            "${bText_7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid727",
                            "opacity",
                            3652,
                            481,
                            "easeInOutBounce",
                            "${bText_7}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            },
            "text_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [6, -1, 1473, 98, 'auto', 'auto'],
                            id: 'bText_8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_8.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1480, 80]
                        }
                    }
                },
                timeline: {
                    duration: 4167,
                    autoPlay: false,
                    labels: {
                        "fade_flimmer": 467,
                        "fade_still": 1600,
                        "still_loop": 1867,
                        "opaque": 2467,
                        "opaque_loop": 3267,
                        "fade": 3667
                    },
                    data: [
                        [
                            "eid750",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid751",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid752",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${bText_8}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid753",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${bText_8}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid754",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${bText_8}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid755",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid756",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid757",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid758",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid759",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid760",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${bText_8}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid761",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${bText_8}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid762",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid763",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid764",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid765",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid766",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid767",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid768",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid769",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid770",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${bText_8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid771",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            },
            "text_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', -7, 2180, 104, 'auto', 'auto'],
                            id: 'bText_6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2210, 80]
                        }
                    }
                },
                timeline: {
                    duration: 4200,
                    autoPlay: false,
                    labels: {
                        "fade_flimmer": 482,
                        "fade_still": 1615,
                        "still_loop": 1882,
                        "opaque": 2482,
                        "opaque_loop": 3282,
                        "fade": 3682
                    },
                    data: [
                        [
                            "eid684",
                            "opacity",
                            0,
                            482,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid685",
                            "opacity",
                            482,
                            129,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid686",
                            "opacity",
                            611,
                            140,
                            "easeOutBounce",
                            "${bText_6}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid687",
                            "opacity",
                            751,
                            106,
                            "easeOutBounce",
                            "${bText_6}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid688",
                            "opacity",
                            857,
                            61,
                            "easeOutBounce",
                            "${bText_6}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid689",
                            "opacity",
                            918,
                            164,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid690",
                            "opacity",
                            1082,
                            67,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid691",
                            "opacity",
                            1149,
                            66,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid692",
                            "opacity",
                            1215,
                            200,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid693",
                            "opacity",
                            1415,
                            67,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid694",
                            "opacity",
                            1615,
                            96,
                            "easeInBounce",
                            "${bText_6}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid695",
                            "opacity",
                            1711,
                            171,
                            "easeOutBounce",
                            "${bText_6}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid696",
                            "opacity",
                            1882,
                            67,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid697",
                            "opacity",
                            1949,
                            34,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid698",
                            "opacity",
                            1983,
                            70,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid699",
                            "opacity",
                            2053,
                            55,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid700",
                            "opacity",
                            2108,
                            41,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid701",
                            "opacity",
                            2149,
                            38,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid702",
                            "opacity",
                            2187,
                            64,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid703",
                            "opacity",
                            2482,
                            800,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid704",
                            "opacity",
                            3482,
                            0,
                            "easeInOutBounce",
                            "${bText_6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid705",
                            "opacity",
                            3682,
                            518,
                            "easeInOutBounce",
                            "${bText_6}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            },
            "text_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', -9, 1200, 84, 'auto', 'auto'],
                            id: 'bText_5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1223, 89]
                        }
                    }
                },
                timeline: {
                    duration: 4600,
                    autoPlay: false,
                    labels: {
                        "fade_flimmer": 822,
                        "fade_still": 1955,
                        "still_loop": 2222,
                        "opaque": 2822,
                        "opaque_loop": 3622,
                        "fade": 4022
                    },
                    data: [
                        [
                            "eid640",
                            "opacity",
                            0,
                            822,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid641",
                            "opacity",
                            822,
                            129,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid642",
                            "opacity",
                            951,
                            140,
                            "easeOutBounce",
                            "${bText_5}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid643",
                            "opacity",
                            1091,
                            106,
                            "easeOutBounce",
                            "${bText_5}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid644",
                            "opacity",
                            1197,
                            61,
                            "easeOutBounce",
                            "${bText_5}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid645",
                            "opacity",
                            1258,
                            164,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid646",
                            "opacity",
                            1422,
                            67,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid647",
                            "opacity",
                            1489,
                            66,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid648",
                            "opacity",
                            1555,
                            200,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid649",
                            "opacity",
                            1755,
                            67,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid650",
                            "opacity",
                            1955,
                            96,
                            "easeInBounce",
                            "${bText_5}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid651",
                            "opacity",
                            2051,
                            171,
                            "easeOutBounce",
                            "${bText_5}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid652",
                            "opacity",
                            2222,
                            67,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid653",
                            "opacity",
                            2289,
                            34,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid654",
                            "opacity",
                            2323,
                            70,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid655",
                            "opacity",
                            2393,
                            55,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid656",
                            "opacity",
                            2448,
                            41,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid657",
                            "opacity",
                            2489,
                            38,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid658",
                            "opacity",
                            2527,
                            64,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid659",
                            "opacity",
                            2822,
                            800,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid660",
                            "opacity",
                            3822,
                            0,
                            "easeInOutBounce",
                            "${bText_5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid661",
                            "opacity",
                            4022,
                            578,
                            "easeInOutBounce",
                            "${bText_5}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            },
            "C_walkM_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ss_walkM_4',
                            type: 'image',
                            rect: [0, '0', '1600px', '473px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ss_walkM_4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 200, 473]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid302",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_walkM_4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid303",
                            "left",
                            125,
                            0,
                            "linear",
                            "${ss_walkM_4}",
                            '0px',
                            '-200px'
                        ],
                        [
                            "eid304",
                            "left",
                            250,
                            0,
                            "linear",
                            "${ss_walkM_4}",
                            '-200px',
                            '-400px'
                        ],
                        [
                            "eid305",
                            "left",
                            375,
                            0,
                            "linear",
                            "${ss_walkM_4}",
                            '-400px',
                            '-600px'
                        ],
                        [
                            "eid306",
                            "left",
                            500,
                            0,
                            "linear",
                            "${ss_walkM_4}",
                            '-600px',
                            '-800px'
                        ],
                        [
                            "eid307",
                            "left",
                            625,
                            0,
                            "linear",
                            "${ss_walkM_4}",
                            '-800px',
                            '-1000px'
                        ],
                        [
                            "eid308",
                            "left",
                            750,
                            0,
                            "linear",
                            "${ss_walkM_4}",
                            '-1000px',
                            '-1200px'
                        ],
                        [
                            "eid309",
                            "left",
                            875,
                            0,
                            "linear",
                            "${ss_walkM_4}",
                            '-1200px',
                            '-1400px'
                        ]
                    ]
                }
            },
            "C_walkM_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, '0', '966px', '464px', 'auto', 'auto'],
                            id: 'ss_walkM_5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_walkM_5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 250, 464]
                        }
                    }
                },
                timeline: {
                    duration: 800,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid310",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_walkM_5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid311",
                            "left",
                            200,
                            0,
                            "linear",
                            "${ss_walkM_5}",
                            '0px',
                            '-250px'
                        ],
                        [
                            "eid312",
                            "left",
                            400,
                            0,
                            "linear",
                            "${ss_walkM_5}",
                            '-250px',
                            '-500px'
                        ],
                        [
                            "eid313",
                            "left",
                            600,
                            0,
                            "linear",
                            "${ss_walkM_5}",
                            '-500px',
                            '-750px'
                        ]
                    ]
                }
            },
            "C_walkW_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, '0', '2240px', '453px', 'auto', 'auto'],
                            id: 'ss_walkW_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_walkW_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 280, 453]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid322",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_walkW_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid323",
                            "left",
                            125,
                            0,
                            "linear",
                            "${ss_walkW_2}",
                            '0px',
                            '-280px'
                        ],
                        [
                            "eid324",
                            "left",
                            250,
                            0,
                            "linear",
                            "${ss_walkW_2}",
                            '-280px',
                            '-560px'
                        ],
                        [
                            "eid325",
                            "left",
                            375,
                            0,
                            "linear",
                            "${ss_walkW_2}",
                            '-560px',
                            '-840px'
                        ],
                        [
                            "eid326",
                            "left",
                            500,
                            0,
                            "linear",
                            "${ss_walkW_2}",
                            '-840px',
                            '-1120px'
                        ],
                        [
                            "eid327",
                            "left",
                            625,
                            0,
                            "linear",
                            "${ss_walkW_2}",
                            '-1120px',
                            '-1400px'
                        ],
                        [
                            "eid328",
                            "left",
                            750,
                            0,
                            "linear",
                            "${ss_walkW_2}",
                            '-1400px',
                            '-1680px'
                        ],
                        [
                            "eid329",
                            "left",
                            875,
                            0,
                            "linear",
                            "${ss_walkW_2}",
                            '-1680px',
                            '-1960px'
                        ]
                    ]
                }
            },
            "C_walkW_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, '0', '2240px', '453px', 'auto', 'auto'],
                            id: 'ss_walkW_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_walkW_3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 280, 453]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid330",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_walkW_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid331",
                            "left",
                            125,
                            0,
                            "linear",
                            "${ss_walkW_3}",
                            '0px',
                            '-280px'
                        ],
                        [
                            "eid332",
                            "left",
                            250,
                            0,
                            "linear",
                            "${ss_walkW_3}",
                            '-280px',
                            '-560px'
                        ],
                        [
                            "eid333",
                            "left",
                            375,
                            0,
                            "linear",
                            "${ss_walkW_3}",
                            '-560px',
                            '-840px'
                        ],
                        [
                            "eid334",
                            "left",
                            500,
                            0,
                            "linear",
                            "${ss_walkW_3}",
                            '-840px',
                            '-1120px'
                        ],
                        [
                            "eid335",
                            "left",
                            625,
                            0,
                            "linear",
                            "${ss_walkW_3}",
                            '-1120px',
                            '-1400px'
                        ],
                        [
                            "eid336",
                            "left",
                            750,
                            0,
                            "linear",
                            "${ss_walkW_3}",
                            '-1400px',
                            '-1680px'
                        ],
                        [
                            "eid337",
                            "left",
                            875,
                            0,
                            "linear",
                            "${ss_walkW_3}",
                            '-1680px',
                            '-1960px'
                        ]
                    ]
                }
            },
            "C_walkM_5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, '0', '1600px', '473px', 'auto', 'auto'],
                            id: 'ss_walkM_32',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_walkM_3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 200, 473]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid314",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_walkM_32}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid315",
                            "left",
                            125,
                            0,
                            "linear",
                            "${ss_walkM_32}",
                            '0px',
                            '-200px'
                        ],
                        [
                            "eid316",
                            "left",
                            250,
                            0,
                            "linear",
                            "${ss_walkM_32}",
                            '-200px',
                            '-400px'
                        ],
                        [
                            "eid317",
                            "left",
                            375,
                            0,
                            "linear",
                            "${ss_walkM_32}",
                            '-400px',
                            '-600px'
                        ],
                        [
                            "eid318",
                            "left",
                            500,
                            0,
                            "linear",
                            "${ss_walkM_32}",
                            '-600px',
                            '-800px'
                        ],
                        [
                            "eid319",
                            "left",
                            625,
                            0,
                            "linear",
                            "${ss_walkM_32}",
                            '-800px',
                            '-1000px'
                        ],
                        [
                            "eid320",
                            "left",
                            750,
                            0,
                            "linear",
                            "${ss_walkM_32}",
                            '-1000px',
                            '-1200px'
                        ],
                        [
                            "eid321",
                            "left",
                            875,
                            0,
                            "linear",
                            "${ss_walkM_32}",
                            '-1200px',
                            '-1400px'
                        ]
                    ]
                }
            },
            "BusStopWalkers": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [579, 109, 280, 453, 'auto', 'auto'],
                            opacity: '0.8',
                            overflow: 'hidden',
                            id: 'C_walkW_3',
                            symbolName: 'C_walkW_3',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.34', '0.34', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            id: 'C_walkM_42',
                            opacity: '0.8',
                            rect: [1397, 103, 250, 464, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'C_walkM_4',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.38', '0.38', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            id: 'C_walkM_42Copy',
                            opacity: '0.8',
                            rect: [1396, 103, 250, 464, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'C_walkM_4',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.38', '0.38', 1], ['50%', '50%']]
                        },
                        {
                            rect: [-1148, -96, 1480, 543, 'auto', 'auto'],
                            id: 'lanternRow',
                            symbolName: 'lanternRow',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, 1296, 596, 'auto', 'auto'],
                            id: 'BG_BusStop',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BG_BusStop.png', '0px', '0px']
                        },
                        {
                            rect: [318, -44, 400, 742, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'C_waiting12',
                            symbolName: 'C_waiting1',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.36253', '0.36253', 1], ['50%', '50%']]
                        },
                        {
                            rect: [652, 118, 330, 440, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'C_waiting32',
                            symbolName: 'C_waiting3',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.48864', '0.48864', 1], ['50%', '50%']]
                        },
                        {
                            rect: [654, 53, 200, 514, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'C_waiting22',
                            symbolName: 'C_waiting2',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.63193', '0.63193', 1], ['50%', '50%']]
                        },
                        {
                            rect: [1027, 93, 200, 473, 'auto', 'auto'],
                            opacity: '0.85',
                            overflow: 'hidden',
                            id: 'C_walkM_5',
                            symbolName: 'C_walkM_5',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.54962', '0.54962', 1], ['50%', '50%']]
                        },
                        {
                            rect: [-75, 119, 280, 453, 'auto', 'auto'],
                            opacity: '0.85',
                            overflow: 'hidden',
                            id: 'C_walkW_2',
                            symbolName: 'C_walkW_2',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1296, 596]
                        }
                    }
                },
                timeline: {
                    duration: 37000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid380",
                            "left",
                            0,
                            22769,
                            "linear",
                            "${C_walkM_42}",
                            '1397px',
                            '-844px'
                        ],
                        [
                            "eid579",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_waiting12}",
                            '318px',
                            '318px'
                        ],
                        [
                            "eid581",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_waiting32}",
                            '652px',
                            '652px'
                        ],
                        [
                            "eid409",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${C_walkW_3}",
                            '-0.34',
                            '-0.34'
                        ],
                        [
                            "eid429",
                            "scaleX",
                            14231,
                            0,
                            "easeInOutQuad",
                            "${C_walkM_42Copy}",
                            '-0.38',
                            '-0.38'
                        ],
                        [
                            "eid402",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${C_walkM_5}",
                            '0.85',
                            '0.85'
                        ],
                        [
                            "eid430",
                            "opacity",
                            14231,
                            0,
                            "easeInOutQuad",
                            "${C_walkM_42Copy}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid446",
                            "left",
                            0,
                            19000,
                            "linear",
                            "${C_walkW_2}",
                            '-75px',
                            '1482px'
                        ],
                        [
                            "eid448",
                            "left",
                            20000,
                            17000,
                            "linear",
                            "${C_walkW_2}",
                            '-1550px',
                            '-75px'
                        ],
                        [
                            "eid449",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${C_walkM_5}",
                            '1027px',
                            '1251px'
                        ],
                        [
                            "eid451",
                            "left",
                            4000,
                            33000,
                            "linear",
                            "${C_walkM_5}",
                            '-1510px',
                            '1027px'
                        ],
                        [
                            "eid410",
                            "scaleY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${C_walkW_3}",
                            '0.34',
                            '0.34'
                        ],
                        [
                            "eid420",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${C_walkW_2}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid445",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_walkW_3}",
                            '109px',
                            '109px'
                        ],
                        [
                            "eid422",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_walkW_2}",
                            '119px',
                            '119px'
                        ],
                        [
                            "eid583",
                            "left",
                            0,
                            0,
                            "linear",
                            "${C_waiting22}",
                            '654px',
                            '654px'
                        ],
                        [
                            "eid580",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting12}",
                            '-44px',
                            '-44px'
                        ],
                        [
                            "eid425",
                            "opacity",
                            37000,
                            0,
                            "linear",
                            "${C_walkW_2}",
                            '0.85',
                            '0.85'
                        ],
                        [
                            "eid426",
                            "opacity",
                            37000,
                            0,
                            "linear",
                            "${C_walkW_3}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid476",
                            "left",
                            0,
                            24000,
                            "linear",
                            "${C_walkW_3}",
                            '579px',
                            '-947px'
                        ],
                        [
                            "eid473",
                            "left",
                            25000,
                            12000,
                            "linear",
                            "${C_walkW_3}",
                            '1192px',
                            '579px'
                        ],
                        [
                            "eid468",
                            "left",
                            14231,
                            22769,
                            "linear",
                            "${C_walkM_42Copy}",
                            '1396px',
                            '-852px'
                        ],
                        [
                            "eid454",
                            "left",
                            37000,
                            0,
                            "linear",
                            "${C_walkM_42Copy}",
                            '1396px',
                            '-843px'
                        ],
                        [
                            "eid582",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting32}",
                            '118px',
                            '118px'
                        ],
                        [
                            "eid375",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${C_walkM_42}",
                            '-0.38',
                            '-0.38'
                        ],
                        [
                            "eid475",
                            "display",
                            14231,
                            0,
                            "linear",
                            "${C_walkM_42Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid393",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_walkM_5}",
                            '93px',
                            '93px'
                        ],
                        [
                            "eid395",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${C_walkM_5}",
                            '-0.54962',
                            '-0.54962'
                        ],
                        [
                            "eid428",
                            "scaleY",
                            14231,
                            0,
                            "easeInOutQuad",
                            "${C_walkM_42Copy}",
                            '0.38',
                            '0.38'
                        ],
                        [
                            "eid376",
                            "scaleY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${C_walkM_42}",
                            '0.38',
                            '0.38'
                        ],
                        [
                            "eid390",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${C_walkM_5}",
                            '0.54962',
                            '0.54962'
                        ],
                        [
                            "eid427",
                            "top",
                            14231,
                            0,
                            "easeInOutQuad",
                            "${C_walkM_42Copy}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid378",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${C_walkM_42}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid421",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${C_walkW_2}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid401",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${C_walkM_42}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid584",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting22}",
                            '53px',
                            '53px'
                        ],
                        [
                            "eid526",
                            "left",
                            9000,
                            0,
                            "easeInOutQuad",
                            "${lanternRow}",
                            '-1148px',
                            '-1148px'
                        ],
                        [
                            "eid474",
                            "display",
                            22769,
                            0,
                            "linear",
                            "${C_walkM_42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid527",
                            "top",
                            9000,
                            0,
                            "easeInOutQuad",
                            "${lanternRow}",
                            '-96px',
                            '-96px'
                        ]
                    ]
                }
            },
            "H_walk": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-936, 0, '2880px', '1000px', 'auto', 'auto'],
                            id: 'ss_H_walk3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_H_walk2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 320, 500]
                        }
                    }
                },
                timeline: {
                    duration: 866,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid1027",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-936px',
                            '-1266px'
                        ],
                        [
                            "eid1028",
                            "left",
                            66,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1258px',
                            '-1594px'
                        ],
                        [
                            "eid1029",
                            "left",
                            133,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1594px',
                            '-1909px'
                        ],
                        [
                            "eid1030",
                            "left",
                            200,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1920px',
                            '-2234px'
                        ],
                        [
                            "eid1031",
                            "left",
                            266,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-2231px',
                            '-2549px'
                        ],
                        [
                            "eid1037",
                            "left",
                            400,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-2546px',
                            '-2234px'
                        ],
                        [
                            "eid1038",
                            "left",
                            466,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-2231px',
                            '-1909px'
                        ],
                        [
                            "eid1039",
                            "left",
                            533,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1909px',
                            '-1593px'
                        ],
                        [
                            "eid1040",
                            "left",
                            600,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1593px',
                            '-1272px'
                        ],
                        [
                            "eid1041",
                            "left",
                            666,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1266px',
                            '-951px'
                        ],
                        [
                            "eid1042",
                            "left",
                            733,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-951px',
                            '-640px'
                        ],
                        [
                            "eid1043",
                            "left",
                            800,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-642px',
                            '-308px'
                        ],
                        [
                            "eid1036",
                            "top",
                            333,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '0px',
                            '-500px'
                        ]
                    ]
                }
            },
            "FG_Hwalk": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '4096px', '567px', 'auto', 'auto'],
                            id: 'BG_0',
                            type: 'image',
                            clip: 'rect(70.83349609375px 4096px 567px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/BG_0.png', '0px', '0px']
                        },
                        {
                            rect: [-1376, -258, 320, 500, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'H_walkCopy',
                            symbolName: 'H_walk',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.75', '0.75', 1], ['50%', '50%']]
                        },
                        {
                            rect: [1991, -156, 320, 500, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'H_walkCopy2',
                            symbolName: 'H_walk',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.85', '0.9', 1], ['50%', '50%']]
                        },
                        {
                            rect: [2753, -375, 264, 731, 'auto', 'auto'],
                            id: 'H_standingBack',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/H_standingBack.png', '0px', '0px']
                        },
                        {
                            rect: [-239, -81, 320, 500, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'H_walk',
                            symbolName: 'H_walk',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 4096, 567]
                        }
                    }
                },
                timeline: {
                    duration: 25000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid494",
                            "left",
                            0,
                            18333,
                            "linear",
                            "${H_walk}",
                            '-239px',
                            '4096px'
                        ],
                        [
                            "eid497",
                            "left",
                            18472,
                            6528,
                            "linear",
                            "${H_walk}",
                            '-1815px',
                            '-239px'
                        ],
                        [
                            "eid492",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${H_walkCopy}",
                            '0.75',
                            '0.75'
                        ],
                        [
                            "eid493",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${H_walkCopy}",
                            '0.75',
                            '0.75'
                        ],
                        [
                            "eid520",
                            "top",
                            0,
                            0,
                            "linear",
                            "${H_walk}",
                            '-81px',
                            '-81px'
                        ],
                        [
                            "eid507",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${H_walkCopy2}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid590",
                            "top",
                            0,
                            0,
                            "linear",
                            "${H_walkCopy}",
                            '-258px',
                            '-251px'
                        ],
                        [
                            "eid522",
                            "top",
                            0,
                            0,
                            "linear",
                            "${H_walkCopy2}",
                            '-156px',
                            '-196px'
                        ],
                        [
                            "eid514",
                            "left",
                            0,
                            15712,
                            "linear",
                            "${H_walkCopy2}",
                            '1991px',
                            '-1580px'
                        ],
                        [
                            "eid515",
                            "left",
                            15932,
                            9068,
                            "linear",
                            "${H_walkCopy2}",
                            '4102px',
                            '1991px'
                        ],
                        [
                            "eid502",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${H_walkCopy2}",
                            '-0.85',
                            '-0.85'
                        ],
                        [
                            "eid589",
                            "left",
                            0,
                            25000,
                            "linear",
                            "${H_walkCopy}",
                            '-1376px',
                            '4073px'
                        ]
                    ]
                }
            },
            "dust_button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, -7, 179, 193, 'auto', 'auto'],
                            opacity: '1',
                            overflow: 'hidden',
                            id: 'dust_icon2',
                            symbolName: 'dust_icon',
                            type: 'rect',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 193, 179]
                        }
                    }
                },
                timeline: {
                    duration: 8409,
                    autoPlay: true,
                    data: [
                        [
                            "eid1551",
                            "left",
                            8409,
                            0,
                            "easeInOutCubic",
                            "${dust_icon2}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid1550",
                            "top",
                            8409,
                            0,
                            "easeInOutCubic",
                            "${dust_icon2}",
                            '-7px',
                            '-7px'
                        ]
                    ]
                }
            },
            "dust_icon": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [50, 0, '1242px', '193px', 'auto', 'auto'],
                            id: 'dust_iconCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dust_icon2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 179, 193]
                        }
                    }
                },
                timeline: {
                    duration: 537,
                    autoPlay: true,
                    data: [
                        [
                            "eid1543",
                            "scaleY",
                            0,
                            0,
                            "easeInOutCubic",
                            "${dust_iconCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1536",
                            "left",
                            0,
                            0,
                            "easeInOutCubic",
                            "${dust_iconCopy}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1537",
                            "left",
                            83,
                            0,
                            "easeInOutCubic",
                            "${dust_iconCopy}",
                            '50px',
                            '-111px'
                        ],
                        [
                            "eid1538",
                            "left",
                            167,
                            0,
                            "easeInOutCubic",
                            "${dust_iconCopy}",
                            '-111px',
                            '-283px'
                        ],
                        [
                            "eid1539",
                            "left",
                            250,
                            0,
                            "easeInOutCubic",
                            "${dust_iconCopy}",
                            '-283px',
                            '-481px'
                        ],
                        [
                            "eid1540",
                            "left",
                            333,
                            0,
                            "easeInOutCubic",
                            "${dust_iconCopy}",
                            '-481px',
                            '-670px'
                        ],
                        [
                            "eid1541",
                            "left",
                            417,
                            0,
                            "easeInOutCubic",
                            "${dust_iconCopy}",
                            '-670px',
                            '-876px'
                        ],
                        [
                            "eid1542",
                            "left",
                            500,
                            0,
                            "easeInOutCubic",
                            "${dust_iconCopy}",
                            '-876px',
                            '-1055px'
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
                            rect: [0, 0, '1600px', '742px', 'auto', 'auto'],
                            id: 'C_waiting3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/C_waiting3.png', '0px', '0px']
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
                            rect: [0, 0, '800px', '514px', 'auto', 'auto'],
                            id: 'C_waiting2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/C_waiting2.png', '0px', '0px']
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
                            rect: [0, 0, '990px', '440px', 'auto', 'auto'],
                            id: 'C_waiting1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/C_waiting1.png', '0px', '0px']
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
                        ],
                        [
                            "eid570",
                            "top",
                            0,
                            0,
                            "linear",
                            "${C_waiting1}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "dustButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 0, 0]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "text_5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [6, -1, 1473, 98, 'auto', 'auto'],
                            id: 'bText_8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_8.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1480, 80]
                        }
                    }
                },
                timeline: {
                    duration: 4167,
                    autoPlay: false,
                    labels: {
                        "fade_flimmer": 467,
                        "fade_still": 1600,
                        "still_loop": 1867,
                        "opaque": 2467,
                        "opaque_loop": 3267,
                        "fade": 3667
                    },
                    data: [
                        [
                            "eid750",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid751",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid752",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${bText_8}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid753",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${bText_8}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid754",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${bText_8}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid755",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid756",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid757",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid758",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid759",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid760",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${bText_8}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid761",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${bText_8}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid762",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid763",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid764",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid765",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid766",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid767",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid768",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid769",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid770",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${bText_8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid771",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${bText_8}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("SCENE_B_edgeActions.js");
})("SCENE_B");
