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
                            id: 'bg_game1',
                            type: 'image',
                            rect: ['0', '0', '2048px', '1535px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Game_1/bg_game1.png",'0px','0px']
                        },
                        {
                            id: 'gamePaperball',
                            symbolName: 'gamePaperball',
                            type: 'rect',
                            rect: ['472', '325', '340', '340', 'auto', 'auto'],
                            transform: [[],[],[],['0.77155','0.77155']]
                        },
                        {
                            id: 'gameCrip',
                            symbolName: 'gameCrip',
                            type: 'rect',
                            rect: ['828', '635', '533', '240', 'auto', 'auto']
                        },
                        {
                            id: 'gamShoes',
                            symbolName: 'gameShoes',
                            type: 'rect',
                            rect: ['729', '426', '554', '384', 'auto', 'auto'],
                            transform: [[],[],[],['0.58031','0.58031']]
                        },
                        {
                            id: 'gameTeddy',
                            symbolName: 'gameTeddy',
                            type: 'rect',
                            rect: ['1180', '618', '340', '340', 'auto', 'auto']
                        },
                        {
                            id: 'gameTV',
                            symbolName: 'gameTV',
                            type: 'rect',
                            rect: ['1534', '567', '618', '629', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'gameCigs2',
                            symbolName: 'gameCigs',
                            type: 'rect',
                            rect: ['884', '1084', '700', '485', 'auto', 'auto']
                        },
                        {
                            id: 'gameTrash',
                            symbolName: 'gameTrash',
                            type: 'rect',
                            rect: ['1225', '408', '533', '240', 'auto', 'auto'],
                            transform: [[],[],[],['0.87','0.87']]
                        },
                        {
                            id: 'figureBackHead',
                            type: 'image',
                            rect: ['22', '626', '637px', '955px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Game_1/figureBackHead.png",'0px','0px']
                        },
                        {
                            id: 'bagDrag',
                            symbolName: 'bagDrag',
                            type: 'rect',
                            rect: ['245', '865', '180', '382', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.88094']]
                        },
                        {
                            id: 'figureBack',
                            type: 'image',
                            rect: ['22', '1032', '637px', '549px', 'auto', 'auto'],
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
                    duration: 11000,
                    autoPlay: true,
                    labels: {
                        "off": 9000
                    },
                    data: [
                        [
                            "eid472",
                            "display",
                            1497,
                            0,
                            "easeInOutQuad",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            9565,
                            0,
                            "easeInOutQuad",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid546",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gameTrash}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid423",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${gamePaperball}",
                            '472px',
                            '472px'
                        ],
                        [
                            "eid548",
                            "scaleY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gameTrash}",
                            '0.87',
                            '0.87'
                        ],
                        [
                            "eid545",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gameTrash}",
                            '408px',
                            '408px'
                        ],
                        [
                            "eid424",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${gamePaperball}",
                            '325px',
                            '325px'
                        ],
                        [
                            "eid425",
                            "scaleX",
                            0,
                            0,
                            "easeOutQuad",
                            "${gamePaperball}",
                            '0.77155',
                            '0.77155'
                        ],
                        [
                            "eid474",
                            "opacity",
                            0,
                            1497,
                            "easeInQuad",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid214",
                            "opacity",
                            9565,
                            1435,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid407",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${gameCrip}",
                            '635px',
                            '838px'
                        ],
                        [
                            "eid408",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${gameCrip}",
                            '828px',
                            '647px'
                        ],
                        [
                            "eid426",
                            "scaleY",
                            0,
                            0,
                            "easeOutQuad",
                            "${gamePaperball}",
                            '0.77155',
                            '0.77155'
                        ],
                        [
                            "eid410",
                            "scaleY",
                            0,
                            0,
                            "easeOutQuad",
                            "${gamShoes}",
                            '0.58031',
                            '0.58031'
                        ],
                        [
                            "eid409",
                            "scaleX",
                            0,
                            0,
                            "easeOutQuad",
                            "${gamShoes}",
                            '0.58031',
                            '0.58031'
                        ],
                        [
                            "eid547",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${gameTrash}",
                            '0.87',
                            '0.87'
                        ],
                        [
                            "eid412",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${gamShoes}",
                            '426px',
                            '426px'
                        ],
                        [
                            "eid411",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${gamShoes}",
                            '729px',
                            '729px'
                        ],
                        [
                            "eid567",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${gameTeddy}",
                            '1180px',
                            '1180px'
                        ],
                        [
                            "eid568",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${gameTeddy}",
                            '618px',
                            '618px'
                        ]
                    ]
                }
            },
            "A_trash_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '333px', '900px', 'auto', 'auto'],
                            type: 'image',
                            id: 'ss_trash_3',
                            opacity: '0.9',
                            clip: 'rect(0px 330.0146484375px 900px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/ss_trash_3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 333, 300]
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
                            "eid2261",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ss_trash_3}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid2257",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_trash_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2258",
                            "top",
                            67,
                            0,
                            "linear",
                            "${ss_trash_3}",
                            '0px',
                            '-300px'
                        ],
                        [
                            "eid2259",
                            "top",
                            133,
                            0,
                            "linear",
                            "${ss_trash_3}",
                            '-300px',
                            '-600px'
                        ],
                        [
                            "eid2304",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${ss_trash_3}",
                            [0,330.0146484375,900,0],
                            [0,330.0146484375,900,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
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
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagDrag.png', '0px', '0px']
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
            "bagUp_1_front": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [340, '0', '2040px', '340px', 'auto', 'auto'],
                            id: 'ss_bagUp1_front',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp1_front.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 340, 340]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_bagUp1_front}",
                            '340px',
                            '340px'
                        ],
                        [
                            "eid56",
                            "left",
                            67,
                            0,
                            "linear",
                            "${ss_bagUp1_front}",
                            '340px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "left",
                            133,
                            0,
                            "linear",
                            "${ss_bagUp1_front}",
                            '0px',
                            '-340px'
                        ],
                        [
                            "eid58",
                            "left",
                            200,
                            0,
                            "linear",
                            "${ss_bagUp1_front}",
                            '-340px',
                            '-680px'
                        ],
                        [
                            "eid59",
                            "left",
                            267,
                            0,
                            "linear",
                            "${ss_bagUp1_front}",
                            '-680px',
                            '-1020px'
                        ],
                        [
                            "eid60",
                            "left",
                            333,
                            0,
                            "linear",
                            "${ss_bagUp1_front}",
                            '-1020px',
                            '-1360px'
                        ],
                        [
                            "eid61",
                            "left",
                            400,
                            0,
                            "linear",
                            "${ss_bagUp1_front}",
                            '-1360px',
                            '-1692px'
                        ]
                    ]
                }
            },
            "bagUp_1_back": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [340, '0', '1360px', '340px', 'auto', 'auto'],
                            id: 'ss_bagUp1_back',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp1_back.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 340, 340]
                        }
                    }
                },
                timeline: {
                    duration: 333,
                    autoPlay: true,
                    data: [
                        [
                            "eid68",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_bagUp1_back}",
                            '340px',
                            '340px'
                        ],
                        [
                            "eid69",
                            "left",
                            67,
                            0,
                            "linear",
                            "${ss_bagUp1_back}",
                            '340px',
                            '0px'
                        ],
                        [
                            "eid70",
                            "left",
                            133,
                            0,
                            "linear",
                            "${ss_bagUp1_back}",
                            '0px',
                            '-340px'
                        ],
                        [
                            "eid71",
                            "left",
                            200,
                            0,
                            "linear",
                            "${ss_bagUp1_back}",
                            '-340px',
                            '-680px'
                        ],
                        [
                            "eid72",
                            "left",
                            267,
                            0,
                            "linear",
                            "${ss_bagUp1_back}",
                            '-680px',
                            '-1020px'
                        ],
                        [
                            "eid73",
                            "left",
                            333,
                            0,
                            "linear",
                            "${ss_bagUp1_back}",
                            '-1020px',
                            '340px'
                        ]
                    ]
                }
            },
            "A_paperball": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '440px', '900px', 'auto', 'auto'],
                            id: 'ss_paperball',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_paperball.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 440, 300]
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
                            "eid2036",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ss_paperball}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid2019",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_paperball}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2020",
                            "top",
                            67,
                            0,
                            "linear",
                            "${ss_paperball}",
                            '0px',
                            '-300px'
                        ],
                        [
                            "eid2021",
                            "top",
                            133,
                            0,
                            "linear",
                            "${ss_paperball}",
                            '-300px',
                            '-600px'
                        ]
                    ]
                }
            },
            "gamePaperball": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 340, 340, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'bagUp_1_back3',
                            symbolName: 'bagUp_1_back',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'A_paperball',
                            rect: [-42, 79, 440, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'A_paperball',
                            clip: 'rect(0px 429.9242248535156px 300px 0px)',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.52929', '0.52929', 1], ['50%', '50%']]
                        },
                        {
                            rect: [0, 0, 340, 340, 'auto', 'auto'],
                            opacity: '1',
                            overflow: 'hidden',
                            id: 'bagUp_1_front3',
                            symbolName: 'bagUp_1_front',
                            display: 'none',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 340, 340]
                        }
                    }
                },
                timeline: {
                    duration: 717,
                    autoPlay: false,
                    labels: {
                        "bag_up": 200,
                        "stop": 450,
                        "disappear": 533
                    },
                    data: [
                        [
                            "eid148",
                            "display",
                            533,
                            0,
                            "easeInOutQuad",
                            "${A_paperball}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_back3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid103",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_front3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid102",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_back3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid419",
                            "top",
                            0,
                            0,
                            "linear",
                            "${A_paperball}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid420",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${A_paperball}",
                            '0.52929',
                            '0.52929'
                        ],
                        [
                            "eid104",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_front3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid151",
                            "top",
                            450,
                            267,
                            "easeInOutQuad",
                            "${bagUp_1_front3}",
                            '0px',
                            '136px'
                        ],
                        [
                            "eid153",
                            "opacity",
                            450,
                            267,
                            "easeOutQuad",
                            "${bagUp_1_front3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid106",
                            "display",
                            200,
                            0,
                            "linear",
                            "${bagUp_1_front3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "scaleY",
                            450,
                            267,
                            "easeInOutQuad",
                            "${bagUp_1_front3}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid105",
                            "display",
                            200,
                            0,
                            "linear",
                            "${bagUp_1_back3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            533,
                            0,
                            "easeInOutQuad",
                            "${bagUp_1_back3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid421",
                            "left",
                            0,
                            0,
                            "linear",
                            "${A_paperball}",
                            '-42px',
                            '-42px'
                        ],
                        [
                            "eid142",
                            "scaleX",
                            450,
                            267,
                            "easeInOutQuad",
                            "${bagUp_1_front3}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid107",
                            "clip",
                            113,
                            0,
                            "linear",
                            "${A_paperball}",
                            [0,429.9242248535156,300,0],
                            [0,429.9242248535156,300,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid422",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${A_paperball}",
                            '0.52929',
                            '0.52929'
                        ],
                            [ "eid125", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${A_paperball}', [] ] ],
                            [ "eid126", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_1_front3}', [0] ] ],
                            [ "eid127", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_1_back3}', [0] ] ]
                    ]
                }
            },
            "A_cig1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '550px', '750px', 'auto', 'auto'],
                            id: 'ss_cig1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/disposable/ss_cig1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 550, 250]
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
                            "eid158",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_cig1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid159",
                            "top",
                            67,
                            0,
                            "linear",
                            "${ss_cig1}",
                            '0px',
                            '-250px'
                        ],
                        [
                            "eid160",
                            "top",
                            133,
                            0,
                            "linear",
                            "${ss_cig1}",
                            '-250px',
                            '-500px'
                        ]
                    ]
                }
            },
            "A_cig2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, -6, '529px', '780px', 'auto', 'auto'],
                            id: 'ss_cig2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/disposable/ss_cig2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 529, 260]
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
                            "eid169",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_cig2}",
                            '-6px',
                            '-6px'
                        ],
                        [
                            "eid170",
                            "top",
                            67,
                            0,
                            "linear",
                            "${ss_cig2}",
                            '-6px',
                            '-258px'
                        ],
                        [
                            "eid171",
                            "top",
                            133,
                            0,
                            "linear",
                            "${ss_cig2}",
                            '-260px',
                            '-518px'
                        ]
                    ]
                }
            },
            "A_cig3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '590px', '780px', 'auto', 'auto'],
                            id: 'ss_cig3',
                            type: 'image',
                            clip: 'rect(0px 576px 780px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/disposable/ss_cig3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 590, 260]
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
                            "eid177",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_cig3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid178",
                            "top",
                            67,
                            0,
                            "linear",
                            "${ss_cig3}",
                            '0px',
                            '-260px'
                        ],
                        [
                            "eid179",
                            "top",
                            133,
                            0,
                            "linear",
                            "${ss_cig3}",
                            '-260px',
                            '-520px'
                        ],
                        [
                            "eid181",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${ss_cig3}",
                            [0,576,780,0],
                            [0,576,780,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "A_cig4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '900px', '387px', 'auto', 'auto'],
                            id: 'ss_cig4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/disposable/ss_cig4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 300, 387]
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
                            "eid186",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_cig4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid187",
                            "left",
                            67,
                            0,
                            "linear",
                            "${ss_cig4}",
                            '0px',
                            '-300px'
                        ],
                        [
                            "eid188",
                            "left",
                            133,
                            0,
                            "linear",
                            "${ss_cig4}",
                            '-300px',
                            '-600px'
                        ]
                    ]
                }
            },
            "A_cripmate": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1163px', '1200px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 's_cripmate2',
                            opacity: '0.8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s_cripmate.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1163, 410]
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
                            "eid2038",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${s_cripmate2}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid1954",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${s_cripmate2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1957",
                            "top",
                            67,
                            0,
                            "easeInOutQuad",
                            "${s_cripmate2}",
                            '0px',
                            '-400px'
                        ],
                        [
                            "eid1958",
                            "top",
                            133,
                            0,
                            "easeInOutQuad",
                            "${s_cripmate2}",
                            '-400px',
                            '-800px'
                        ]
                    ]
                }
            },
            "A_cigPile": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-46, 44, 529, 260, 'auto', 'auto'],
                            opacity: '0.8',
                            overflow: 'hidden',
                            id: 'A_cig2',
                            symbolName: 'A_cig2',
                            type: 'rect',
                            transform: [[0, 0, 0], ['-1', 0, 0], [0, 0], ['0.81759', '0.81759', 1], ['50%', '50%']]
                        },
                        {
                            rect: [97, 99, 550, 250, 'auto', 'auto'],
                            opacity: '0.8',
                            overflow: 'hidden',
                            id: 'A_cig1',
                            symbolName: 'A_cig1',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.60545', '0.60545', 1], ['50%', '50%']]
                        },
                        {
                            rect: [17, -24, 300, 387, 'auto', 'auto'],
                            opacity: '0.8',
                            overflow: 'hidden',
                            id: 'A_cig4',
                            symbolName: 'A_cig4',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.87855', '0.87855', 1], ['50%', '50%']]
                        },
                        {
                            rect: [42, 164, 590, 260, 'auto', 'auto'],
                            opacity: '0.8',
                            overflow: 'hidden',
                            id: 'A_cig3',
                            symbolName: 'A_cig3',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.61539', '0.61538', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 538, 374]
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: true,
                    data: [
                        [
                            "eid167",
                            "left",
                            0,
                            0,
                            "linear",
                            "${A_cig1}",
                            '97px',
                            '97px'
                        ],
                        [
                            "eid175",
                            "top",
                            0,
                            0,
                            "linear",
                            "${A_cig2}",
                            '44px',
                            '44px'
                        ],
                        [
                            "eid192",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${A_cig4}",
                            '0.87855',
                            '0.87855'
                        ],
                        [
                            "eid194",
                            "left",
                            0,
                            0,
                            "linear",
                            "${A_cig4}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid185",
                            "top",
                            0,
                            0,
                            "linear",
                            "${A_cig3}",
                            '164px',
                            '164px'
                        ],
                        [
                            "eid183",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${A_cig3}",
                            '0.61538',
                            '0.61538'
                        ],
                        [
                            "eid203",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${A_cig3}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid173",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${A_cig2}",
                            '0.81759',
                            '0.81759'
                        ],
                        [
                            "eid205",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${A_cig1}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid172",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${A_cig2}",
                            '0.81759',
                            '0.81759'
                        ],
                        [
                            "eid176",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${A_cig2}",
                            '-1deg',
                            '-1deg'
                        ],
                        [
                            "eid204",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${A_cig4}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid202",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${A_cig2}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid195",
                            "top",
                            0,
                            0,
                            "linear",
                            "${A_cig4}",
                            '-24px',
                            '-24px'
                        ],
                        [
                            "eid163",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${A_cig1}",
                            '0.60545',
                            '0.60545'
                        ],
                        [
                            "eid182",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${A_cig3}",
                            '-0.61539',
                            '-0.61539'
                        ],
                        [
                            "eid174",
                            "left",
                            0,
                            0,
                            "linear",
                            "${A_cig2}",
                            '-46px',
                            '-46px'
                        ],
                        [
                            "eid193",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${A_cig4}",
                            '0.87855',
                            '0.87855'
                        ],
                        [
                            "eid184",
                            "left",
                            0,
                            0,
                            "linear",
                            "${A_cig3}",
                            '42px',
                            '42px'
                        ],
                        [
                            "eid168",
                            "top",
                            0,
                            0,
                            "linear",
                            "${A_cig1}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid164",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${A_cig1}",
                            '0.60545',
                            '0.60545'
                        ]
                    ]
                }
            },
            "A_shoes": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '525px', '1260px', 'auto', 'auto'],
                            id: 'A_shoes',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/A_shoes.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 525, 420]
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
                            "eid216",
                            "top",
                            0,
                            0,
                            "linear",
                            "${A_shoes}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid218",
                            "top",
                            67,
                            0,
                            "linear",
                            "${A_shoes}",
                            '0px',
                            '-420px'
                        ],
                        [
                            "eid219",
                            "top",
                            133,
                            0,
                            "linear",
                            "${A_shoes}",
                            '-420px',
                            '-840px'
                        ]
                    ]
                }
            },
            "A_teddy": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '447px', '1200px', 'auto', 'auto'],
                            id: 'A_teddy',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/A_teddy.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 447, 400]
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
                            "eid229",
                            "opacity",
                            200,
                            0,
                            "linear",
                            "${A_teddy}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid226",
                            "top",
                            0,
                            0,
                            "linear",
                            "${A_teddy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid228",
                            "top",
                            67,
                            0,
                            "linear",
                            "${A_teddy}",
                            '0px',
                            '-400px'
                        ],
                        [
                            "eid227",
                            "top",
                            133,
                            0,
                            "linear",
                            "${A_teddy}",
                            '-400px',
                            '-800px'
                        ]
                    ]
                }
            },
            "A_tv": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1800px', '600px', 'auto', 'auto'],
                            id: 'A_tv',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/A_tv.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 600, 600]
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
                            "eid236",
                            "left",
                            0,
                            0,
                            "linear",
                            "${A_tv}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid237",
                            "left",
                            67,
                            0,
                            "linear",
                            "${A_tv}",
                            '0px',
                            '-600px'
                        ],
                        [
                            "eid238",
                            "left",
                            133,
                            0,
                            "linear",
                            "${A_tv}",
                            '-600px',
                            '-1200px'
                        ],
                        [
                            "eid239",
                            "opacity",
                            133,
                            0,
                            "linear",
                            "${A_tv}",
                            '0.9',
                            '0.9'
                        ]
                    ]
                }
            },
            "bagUp_2_front": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 370, '554px', '1850px', 'auto', 'auto'],
                            id: 'ss_bagUp_shoesFront',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_shoesFront.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 554, 370]
                        }
                    }
                },
                timeline: {
                    duration: 333,
                    autoPlay: true,
                    data: [
                        [
                            "eid316",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesFront}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid317",
                            "top",
                            66,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesFront}",
                            '370px',
                            '0px'
                        ],
                        [
                            "eid318",
                            "top",
                            133,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesFront}",
                            '0px',
                            '-361px'
                        ],
                        [
                            "eid319",
                            "top",
                            199,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesFront}",
                            '-370px',
                            '-730px'
                        ],
                        [
                            "eid320",
                            "top",
                            266,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesFront}",
                            '-740px',
                            '-1105px'
                        ],
                        [
                            "eid321",
                            "top",
                            333,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesFront}",
                            '-1110px',
                            '-1475px'
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
                            rect: [0, 240, '522px', '1440px', 'auto', 'auto'],
                            id: 'ss_bagUp_longFront',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_longFront.png', '0px', '0px']
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
                            rect: ['0', 240, '522px', '884px', 'auto', 'auto'],
                            id: 'ss_bagUp_longBack',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_longBack.png', '0px', '0px']
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
            "bagUp_2_back": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', 370, '554px', '1322px', 'auto', 'auto'],
                            id: 'ss_bagUp_shoesBack2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_shoesBack.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 554, 370]
                        }
                    }
                },
                timeline: {
                    duration: 333,
                    autoPlay: true,
                    data: [
                        [
                            "eid345",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesBack2}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid346",
                            "top",
                            66,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesBack2}",
                            '370px',
                            '0px'
                        ],
                        [
                            "eid347",
                            "top",
                            133,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesBack2}",
                            '0px',
                            '-361px'
                        ],
                        [
                            "eid348",
                            "top",
                            199,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesBack2}",
                            '-361px',
                            '-730px'
                        ],
                        [
                            "eid349",
                            "top",
                            266,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesBack2}",
                            '-730px',
                            '-1105px'
                        ],
                        [
                            "eid350",
                            "top",
                            333,
                            0,
                            "easeInQuad",
                            "${ss_bagUp_shoesBack2}",
                            '-1105px',
                            '-1475px'
                        ]
                    ]
                }
            },
            "gameShoes": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '14', 554, 370, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'bagUp_2_back',
                            symbolName: 'bagUp_2_back',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [0, -25, 525, 420, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.88095', '0.88095', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'A_shoes2',
                            symbolName: 'A_shoes',
                            display: 'block',
                            type: 'rect'
                        },
                        {
                            rect: [0, 14, 554, 370, 'auto', 'auto'],
                            opacity: '1',
                            overflow: 'hidden',
                            id: 'bagUp_2_front',
                            symbolName: 'bagUp_2_front',
                            display: 'none',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 554, 384]
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: false,
                    labels: {
                        "bag_up": 200,
                        "stop": 600,
                        "disappear": 683
                    },
                    data: [
                        [
                            "eid364",
                            "display",
                            200,
                            0,
                            "easeInQuad",
                            "${bagUp_2_back}",
                            'none',
                            'block'
                        ],
                        [
                            "eid324",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${A_shoes2}",
                            '-25px',
                            '-25px'
                        ],
                        [
                            "eid377",
                            "opacity",
                            599,
                            267,
                            "easeOutQuad",
                            "${bagUp_2_front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid325",
                            "scaleX",
                            0,
                            0,
                            "easeInQuad",
                            "${A_shoes2}",
                            '0.88095',
                            '0.88095'
                        ],
                        [
                            "eid323",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_front}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid374",
                            "top",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_2_front}",
                            '14px',
                            '175px'
                        ],
                        [
                            "eid327",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${A_shoes2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid326",
                            "scaleY",
                            0,
                            0,
                            "easeInQuad",
                            "${A_shoes2}",
                            '0.88095',
                            '0.88095'
                        ],
                        [
                            "eid363",
                            "display",
                            200,
                            0,
                            "easeInQuad",
                            "${bagUp_2_front}",
                            'none',
                            'block'
                        ],
                        [
                            "eid353",
                            "display",
                            533,
                            0,
                            "easeInQuad",
                            "${A_shoes2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid371",
                            "scaleX",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_2_front}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid322",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_front}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid372",
                            "scaleY",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_2_front}",
                            '1',
                            '0.01'
                        ],
                            [ "eid378", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_2_front}', [] ] ],
                            [ "eid379", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_2_back}', [] ] ]
                    ]
                }
            },
            "gameCrip": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', 522, 240, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'bagUp_3_back',
                            symbolName: 'bagUp_3_back',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [-329, -58, 1163, 410, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.40229', '0.40229', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'A_cripmate',
                            symbolName: 'A_cripmate',
                            display: 'block',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, 522, 240, 'auto', 'auto'],
                            opacity: '1',
                            overflow: 'hidden',
                            id: 'bagUp_3_front',
                            symbolName: 'bagUp_3_front',
                            display: 'none',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 533, 240]
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: false,
                    labels: {
                        "bag_up": 200,
                        "stop": 600,
                        "disappear": 683
                    },
                    data: [
                        [
                            "eid416",
                            "scaleY",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cripmate}",
                            '0.40229',
                            '0.40229'
                        ],
                        [
                            "eid332",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_3_front}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid397",
                            "opacity",
                            599,
                            267,
                            "easeOutQuad",
                            "${bagUp_3_front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid417",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cripmate}",
                            '-329px',
                            '-329px'
                        ],
                        [
                            "eid418",
                            "scaleX",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cripmate}",
                            '0.40229',
                            '0.40229'
                        ],
                        [
                            "eid413",
                            "display",
                            200,
                            0,
                            "easeInQuad",
                            "${bagUp_3_back}",
                            'none',
                            'block'
                        ],
                        [
                            "eid356",
                            "display",
                            533,
                            0,
                            "easeInQuad",
                            "${A_cripmate}",
                            'block',
                            'none'
                        ],
                        [
                            "eid415",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cripmate}",
                            '-58px',
                            '-58px'
                        ],
                        [
                            "eid394",
                            "display",
                            200,
                            0,
                            "easeInQuad",
                            "${bagUp_3_front}",
                            'none',
                            'block'
                        ],
                        [
                            "eid396",
                            "scaleX",
                            599,
                            267,
                            "easeInOutQuad",
                            "${bagUp_3_front}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid333",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_3_front}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid402",
                            "top",
                            599,
                            267,
                            "easeInOutQuad",
                            "${bagUp_3_front}",
                            '0px',
                            '80px'
                        ],
                        [
                            "eid398",
                            "scaleY",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_3_front}",
                            '1',
                            '0.01'
                        ],
                            [ "eid403", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_3_front}', [] ] ],
                            [ "eid414", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_3_back}', [] ] ]
                    ]
                }
            },
            "bagUp_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [625, 0, '3750px', '639px', 'auto', 'auto'],
                            id: 'ss_bagUp_tv',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_tv.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 625, 639]
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: true,
                    data: [
                        [
                            "eid438",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${ss_bagUp_tv}",
                            '625px',
                            '625px'
                        ],
                        [
                            "eid433",
                            "left",
                            66,
                            0,
                            "easeOutQuad",
                            "${ss_bagUp_tv}",
                            '625px',
                            '0px'
                        ],
                        [
                            "eid437",
                            "left",
                            133,
                            0,
                            "easeOutQuad",
                            "${ss_bagUp_tv}",
                            '-1875px',
                            '-625px'
                        ],
                        [
                            "eid436",
                            "left",
                            199,
                            0,
                            "easeOutQuad",
                            "${ss_bagUp_tv}",
                            '-625px',
                            '-1250px'
                        ],
                        [
                            "eid435",
                            "left",
                            266,
                            0,
                            "easeOutQuad",
                            "${ss_bagUp_tv}",
                            '-1250px',
                            '-1875px'
                        ],
                        [
                            "eid434",
                            "left",
                            333,
                            0,
                            "easeOutQuad",
                            "${ss_bagUp_tv}",
                            '-1875px',
                            '-2500px'
                        ],
                        [
                            "eid439",
                            "left",
                            400,
                            0,
                            "easeOutQuad",
                            "${ss_bagUp_tv}",
                            '-2500px',
                            '-3125px'
                        ]
                    ]
                }
            },
            "gameTV": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [9, 36, 600, 600, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.96889', '0.96889', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'A_tv3',
                            symbolName: 'A_tv',
                            display: 'block',
                            type: 'rect'
                        },
                        {
                            rect: [-20, -40, 625, 639, 'auto', 'auto'],
                            opacity: '1',
                            overflow: 'hidden',
                            id: 'bagUp_43',
                            symbolName: 'bagUp_4',
                            display: 'none',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 618, 629]
                        }
                    }
                },
                timeline: {
                    duration: 883,
                    autoPlay: false,
                    labels: {
                        "bag_up": 200,
                        "stop": 533,
                        "disappear": 616
                    },
                    data: [
                        [
                            "eid463",
                            "scaleY",
                            616,
                            267,
                            "easeInOutQuad",
                            "${bagUp_43}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid455",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${A_tv3}",
                            '0.96889',
                            '0.96889'
                        ],
                        [
                            "eid465",
                            "display",
                            533,
                            0,
                            "easeInOutQuad",
                            "${A_tv3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid461",
                            "scaleX",
                            616,
                            267,
                            "easeInOutQuad",
                            "${bagUp_43}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid469",
                            "display",
                            200,
                            0,
                            "easeInOutQuad",
                            "${bagUp_43}",
                            'none',
                            'block'
                        ],
                        [
                            "eid456",
                            "scaleY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${A_tv3}",
                            '0.96889',
                            '0.96889'
                        ],
                        [
                            "eid460",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${A_tv3}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid459",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${A_tv3}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid453",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_43}",
                            '-20px',
                            '-11px'
                        ],
                        [
                            "eid454",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_43}",
                            '-40px',
                            '2px'
                        ],
                        [
                            "eid468",
                            "top",
                            616,
                            267,
                            "easeInOutQuad",
                            "${bagUp_43}",
                            '2px',
                            '280px'
                        ],
                        [
                            "eid462",
                            "opacity",
                            616,
                            267,
                            "easeOutQuad",
                            "${bagUp_43}",
                            '1',
                            '0'
                        ],
                            [ "eid470", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_43}', [] ] ]
                    ]
                }
            },
            "gameCigs": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [20, '14', 554, 370, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['11', 0, 0], [0, 0], ['-1', 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'bagUp_2_back',
                            symbolName: 'bagUp_2_back',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['0.65709', '0.65709', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'A_cig2',
                            id: 'A_cig2',
                            rect: [-23, 82, 529, 260, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['0.58717', '0.58717', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'A_cig1',
                            id: 'A_cig1',
                            rect: [109, 118, 550, 250, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['0.7328', '0.7328', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'A_cig4',
                            id: 'A_cig4',
                            rect: [56, 25, 300, 387, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['-0.48645', '0.48728', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'A_cig3',
                            id: 'A_cig3',
                            rect: [76, 167, 590, 260, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'bagUp_2_front',
                            opacity: '1',
                            rect: [20, 14, 554, 370, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'bagUp_2_front',
                            transform: [[0, 0, 0], ['11', 0, 0], [0, 0], ['-1', 1, 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 700, 485]
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: false,
                    labels: {
                        "bag_up": 200,
                        "stop": 600,
                        "disappear": 683
                    },
                    data: [
                        [
                            "eid477",
                            "display",
                            533,
                            0,
                            "easeInQuad",
                            "${A_cig4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid486",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig2}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid495",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_back}",
                            '11deg',
                            '11deg'
                        ],
                        [
                            "eid377",
                            "opacity",
                            599,
                            267,
                            "easeOutQuad",
                            "${bagUp_2_front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid483",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig3}",
                            '167px',
                            '167px'
                        ],
                        [
                            "eid323",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_front}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid374",
                            "top",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_2_front}",
                            '14px',
                            '175px'
                        ],
                        [
                            "eid482",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig2}",
                            '-23px',
                            '-23px'
                        ],
                        [
                            "eid506",
                            "left",
                            267,
                            0,
                            "easeInQuad",
                            "${A_cig2}",
                            '-23px',
                            '7px'
                        ],
                        [
                            "eid493",
                            "scaleX",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_back}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid475",
                            "display",
                            533,
                            0,
                            "easeInQuad",
                            "${A_cig2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid491",
                            "scaleY",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid492",
                            "scaleY",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_front}",
                            '1',
                            '1'
                        ],
                        [
                            "eid372",
                            "scaleY",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_2_front}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid480",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig4}",
                            '56px',
                            '56px'
                        ],
                        [
                            "eid501",
                            "left",
                            333,
                            0,
                            "easeInQuad",
                            "${A_cig4}",
                            '56px',
                            '67px'
                        ],
                        [
                            "eid505",
                            "left",
                            467,
                            0,
                            "easeInQuad",
                            "${A_cig4}",
                            '67px',
                            '77px'
                        ],
                        [
                            "eid494",
                            "scaleX",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_front}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid371",
                            "scaleX",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_2_front}",
                            '-1',
                            '0.01'
                        ],
                        [
                            "eid478",
                            "display",
                            533,
                            0,
                            "easeInQuad",
                            "${A_cig3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid364",
                            "display",
                            200,
                            0,
                            "easeInQuad",
                            "${bagUp_2_back}",
                            'none',
                            'block'
                        ],
                        [
                            "eid488",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig4}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid500",
                            "rotateZ",
                            333,
                            0,
                            "easeInQuad",
                            "${A_cig4}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid502",
                            "rotateZ",
                            400,
                            0,
                            "easeInQuad",
                            "${A_cig4}",
                            '8deg',
                            '15deg'
                        ],
                        [
                            "eid504",
                            "rotateZ",
                            467,
                            0,
                            "easeInQuad",
                            "${A_cig4}",
                            '15deg',
                            '20deg'
                        ],
                        [
                            "eid322",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_front}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid490",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid481",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig1}",
                            '109px',
                            '109px'
                        ],
                        [
                            "eid497",
                            "left",
                            333,
                            0,
                            "easeInQuad",
                            "${A_cig1}",
                            '109px',
                            '99px'
                        ],
                        [
                            "eid503",
                            "left",
                            400,
                            0,
                            "easeInQuad",
                            "${A_cig1}",
                            '99px',
                            '89px'
                        ],
                        [
                            "eid484",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig4}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid487",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid363",
                            "display",
                            200,
                            0,
                            "easeInQuad",
                            "${bagUp_2_front}",
                            'none',
                            'block'
                        ],
                        [
                            "eid476",
                            "display",
                            533,
                            0,
                            "easeInQuad",
                            "${A_cig1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid496",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_2_front}",
                            '11deg',
                            '11deg'
                        ],
                        [
                            "eid479",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig3}",
                            '76px',
                            '76px'
                        ],
                        [
                            "eid485",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig1}",
                            '118px',
                            '118px'
                        ],
                        [
                            "eid499",
                            "top",
                            333,
                            0,
                            "easeInQuad",
                            "${A_cig1}",
                            '118px',
                            '128px'
                        ],
                        [
                            "eid489",
                            "rotateZ",
                            0,
                            0,
                            "easeInQuad",
                            "${A_cig1}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid498",
                            "rotateZ",
                            333,
                            0,
                            "easeInQuad",
                            "${A_cig1}",
                            '0deg',
                            '-2deg'
                        ],
                            [ "eid378", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_2_front}', [] ] ],
                            [ "eid379", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_2_back}', [] ] ]
                    ]
                }
            },
            "gameTrash": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-10, 29, 522, 240, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.77', '0.77', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'bagUp_3_back',
                            symbolName: 'bagUp_3_back',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [70, -47, 333, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'A_trash_32',
                            symbolName: 'A_trash_3',
                            display: 'block',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'bagUp_3_front',
                            opacity: '1',
                            rect: [0, 0, 522, 240, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'bagUp_3_front',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.77279', '0.76958', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 533, 240]
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: false,
                    labels: {
                        "bag_up": 200,
                        "stop": 600,
                        "disappear": 683
                    },
                    data: [
                        [
                            "eid510",
                            "left",
                            0,
                            0,
                            "easeInQuad",
                            "${A_trash_32}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid517",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_3_front}",
                            '0px',
                            '29px'
                        ],
                        [
                            "eid531",
                            "top",
                            599,
                            267,
                            "easeInOutQuad",
                            "${bagUp_3_front}",
                            '29px',
                            '88px'
                        ],
                        [
                            "eid397",
                            "opacity",
                            599,
                            267,
                            "easeOutQuad",
                            "${bagUp_3_front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid541",
                            "scaleX",
                            305,
                            228,
                            "easeInOutQuad",
                            "${A_trash_32}",
                            '1',
                            '0.99302'
                        ],
                        [
                            "eid549",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${A_trash_32}",
                            '-47px',
                            '-47px'
                        ],
                        [
                            "eid550",
                            "top",
                            305,
                            228,
                            "easeInOutQuad",
                            "${A_trash_32}",
                            '-47px',
                            '-34px'
                        ],
                        [
                            "eid522",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_3_front}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid542",
                            "scaleY",
                            305,
                            228,
                            "easeInOutQuad",
                            "${A_trash_32}",
                            '1',
                            '0.82'
                        ],
                        [
                            "eid394",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_3_front}",
                            'none',
                            'block'
                        ],
                        [
                            "eid525",
                            "top",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_3_back}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid413",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${bagUp_3_back}",
                            'none',
                            'block'
                        ],
                        [
                            "eid527",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_3_back}",
                            '-10px',
                            '-10px'
                        ],
                        [
                            "eid526",
                            "scaleY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_3_back}",
                            '0.77',
                            '0.77'
                        ],
                        [
                            "eid544",
                            "display",
                            533,
                            0,
                            "easeInOutQuad",
                            "${A_trash_32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid524",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_3_front}",
                            '0.77279',
                            '-0.77'
                        ],
                        [
                            "eid532",
                            "scaleX",
                            599,
                            267,
                            "easeInOutQuad",
                            "${bagUp_3_front}",
                            '-0.77',
                            '-0.01'
                        ],
                        [
                            "eid528",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_3_back}",
                            '-0.77',
                            '-0.77'
                        ],
                        [
                            "eid523",
                            "scaleY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${bagUp_3_front}",
                            '0.76958',
                            '0.77'
                        ],
                        [
                            "eid398",
                            "scaleY",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_3_front}",
                            '1',
                            '0.01'
                        ],
                            [ "eid403", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_3_front}', [] ] ],
                            [ "eid414", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_3_back}', [] ] ]
                    ]
                }
            },
            "gameTeddy": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 340, 340, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'bagUp_1_back3',
                            symbolName: 'bagUp_1_back',
                            display: 'none',
                            type: 'rect'
                        },
                        {
                            rect: [-53, -14, 447, 400, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.56928', '0.56928', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'A_teddy',
                            symbolName: 'A_teddy',
                            display: 'block',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'bagUp_1_front3',
                            opacity: '1',
                            rect: [0, 0, 340, 340, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'bagUp_1_front',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', 1, 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 340, 340]
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: false,
                    labels: {
                        "bag_up": 200,
                        "stop": 600,
                        "disappear": 683
                    },
                    data: [
                        [
                            "eid103",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_front3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid101",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_back3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid102",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_back3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid561",
                            "display",
                            479,
                            0,
                            "easeOutQuad",
                            "${A_teddy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid558",
                            "scaleY",
                            200,
                            0,
                            "linear",
                            "${A_teddy}",
                            '0.56928',
                            '0.56928'
                        ],
                        [
                            "eid145",
                            "scaleY",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_1_front3}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid104",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_front3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid151",
                            "top",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_1_front3}",
                            '0px',
                            '136px'
                        ],
                        [
                            "eid553",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_back3}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid560",
                            "top",
                            200,
                            0,
                            "linear",
                            "${A_teddy}",
                            '-14px',
                            '-14px'
                        ],
                        [
                            "eid559",
                            "left",
                            200,
                            0,
                            "linear",
                            "${A_teddy}",
                            '-53px',
                            '-53px'
                        ],
                        [
                            "eid556",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_back3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            200,
                            0,
                            "linear",
                            "${bagUp_1_back3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            533,
                            0,
                            "easeInOutQuad",
                            "${bagUp_1_back3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid555",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_front3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            200,
                            0,
                            "linear",
                            "${bagUp_1_front3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid554",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${bagUp_1_front3}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid142",
                            "scaleX",
                            600,
                            267,
                            "easeInOutQuad",
                            "${bagUp_1_front3}",
                            '1',
                            '0.01'
                        ],
                        [
                            "eid153",
                            "opacity",
                            600,
                            267,
                            "easeOutQuad",
                            "${bagUp_1_front3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid557",
                            "scaleX",
                            200,
                            0,
                            "linear",
                            "${A_teddy}",
                            '0.56928',
                            '0.56928'
                        ],
                            [ "eid126", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_1_front3}', [0] ] ],
                            [ "eid127", "trigger", 200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bagUp_1_back3}', [0] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("GAME_1_edgeActions.js");
})("GAME_1");
