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
                            rect: ['0', '0', '2048px', '1535px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
                        },
                        {
                            id: 'backgrounds',
                            symbolName: 'backgrounds',
                            type: 'rect',
                            rect: ['-1116', '-859', '3730', '1203', 'auto', 'auto'],
                            clip: 'rect(48px 3178px 1203px 1092px)'
                        },
                        {
                            id: 'FacePullWind',
                            symbolName: 'FacePullWind',
                            type: 'rect',
                            rect: ['0', '-606', '2291', '1804', 'auto', 'auto']
                        },
                        {
                            id: 'house_2',
                            type: 'image',
                            rect: ['-348', '-257', '1031', '1562', 'auto', 'auto'],
                            clip: 'rect(0px 1031px 662px 324px)',
                            fill: ["rgba(0,0,0,0)",im+"house_2.png",'0px','0px']
                        },
                        {
                            id: 'tree_1',
                            type: 'image',
                            rect: ['1435', '1386', '579', '609', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree_1.png",'0px','0px']
                        },
                        {
                            id: 'BG_lantern',
                            type: 'image',
                            rect: ['275', '958', '214px', '1524px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
                        },
                        {
                            id: 'BG_lanternCopy',
                            type: 'image',
                            rect: ['655', '1079', '174', '1236', 'auto', 'auto'],
                            opacity: '0.73983739837398',
                            fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
                        },
                        {
                            id: 'text_1',
                            symbolName: 'text_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['386', '491', '490', '89', 'auto', 'auto'],
                            transform: [[],['5'],[],['0.76673','0.76673']]
                        },
                        {
                            id: 'text_2',
                            symbolName: 'text_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['545', '609', '770', '80', 'auto', 'auto'],
                            transform: [[],['1']]
                        },
                        {
                            id: 'text_3',
                            symbolName: 'text_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['419', '728', '620', '80', 'auto', 'auto']
                        },
                        {
                            id: 'text_4',
                            symbolName: 'text_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['597', '838', '1170', '80', 'auto', 'auto'],
                            transform: [[],[],[],['0.85299','0.85299']]
                        },
                        {
                            id: 'text_5',
                            symbolName: 'text_5',
                            display: 'none',
                            type: 'rect',
                            rect: ['669', '952', '1480', '80', 'auto', 'auto'],
                            transform: [[],['-1']]
                        },
                        {
                            id: 'text_6',
                            symbolName: 'text_6',
                            display: 'none',
                            type: 'rect',
                            rect: ['1244', '1072', '330', '80', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'dust_icon2',
                            symbolName: 'dust_icon',
                            display: 'none',
                            type: 'rect',
                            rect: ['914', '226', '179', '193', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'Rectangle2',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0', '2048px', '1536', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                        "button": 5000,
                        "in": 7867,
                        "off": 12753
                    },
                    data: [
                        [
                            "eid200",
                            "opacity",
                            5187,
                            504,
                            "easeInOutQuad",
                            "${dust_icon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            8000,
                            504,
                            "easeInOutQuad",
                            "${dust_icon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid247",
                            "rotateZ",
                            1783,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            '5deg',
                            '5deg'
                        ],
                        [
                            "eid345",
                            "display",
                            1783,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid372",
                            "display",
                            7867,
                            0,
                            "easeInOutQuad",
                            "${text_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid224",
                            "display",
                            1783,
                            0,
                            "easeInOutQuad",
                            "${text_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid349",
                            "display",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${text_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid378",
                            "opacity",
                            7867,
                            383,
                            "easeInOutQuad",
                            "${text_6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid396",
                            "left",
                            11899,
                            0,
                            "easeInOutQuad",
                            "${BG_lantern}",
                            '275px',
                            '275px'
                        ],
                        [
                            "eid397",
                            "left",
                            11899,
                            0,
                            "easeInOutQuad",
                            "${tree_1}",
                            '1435px',
                            '1435px'
                        ],
                        [
                            "eid193",
                            "display",
                            5187,
                            0,
                            "easeInOutQuad",
                            "${dust_icon2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            8504,
                            0,
                            "easeInOutQuad",
                            "${dust_icon2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid191",
                            "left",
                            9292,
                            2486,
                            "easeInOutQuad",
                            "${FacePullWind}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid394",
                            "left",
                            11778,
                            121,
                            "easeInOutQuad",
                            "${FacePullWind}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid395",
                            "left",
                            11899,
                            0,
                            "easeInOutQuad",
                            "${BG_lanternCopy}",
                            '655px',
                            '655px'
                        ],
                        [
                            "eid189",
                            "top",
                            9292,
                            2486,
                            "easeInOutQuad",
                            "${backgrounds}",
                            '-859px',
                            '-64px'
                        ],
                        [
                            "eid391",
                            "top",
                            9292,
                            2607,
                            "easeInOutQuad",
                            "${tree_1}",
                            '1386px',
                            '2946px'
                        ],
                        [
                            "eid192",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${dust_icon2}",
                            '226px',
                            '226px'
                        ],
                        [
                            "eid277",
                            "display",
                            1783,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid347",
                            "display",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${text_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid190",
                            "top",
                            9292,
                            2486,
                            "easeInOutQuad",
                            "${house_2}",
                            '-257px',
                            '895px'
                        ],
                        [
                            "eid180",
                            "opacity",
                            0,
                            1500,
                            "easeInOutQuad",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            19250,
                            1750,
                            "easeInOutQuad",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid252",
                            "display",
                            1783,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid348",
                            "display",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${text_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid185",
                            "left",
                            11777,
                            0,
                            "easeInOutQuad",
                            "${house_2}",
                            '-348px',
                            '-348px'
                        ],
                        [
                            "eid188",
                            "top",
                            9292,
                            2486,
                            "easeInOutQuad",
                            "${FacePullWind}",
                            '-606px',
                            '262px'
                        ],
                        [
                            "eid346",
                            "display",
                            1783,
                            0,
                            "easeInOutBounce",
                            "${text_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid374",
                            "display",
                            8371,
                            0,
                            "easeInOutQuad",
                            "${text_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            1500,
                            0,
                            "easeInQuad",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            12753,
                            0,
                            "easeInOutQuad",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid389",
                            "top",
                            9292,
                            2607,
                            "easeInOutQuad",
                            "${BG_lanternCopy}",
                            '1079px',
                            '2633px'
                        ],
                        [
                            "eid344",
                            "display",
                            1783,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid373",
                            "display",
                            7867,
                            0,
                            "easeInOutQuad",
                            "${text_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid393",
                            "top",
                            9292,
                            2607,
                            "easeInOutQuad",
                            "${BG_lantern}",
                            '958px',
                            '2582px'
                        ],
                        [
                            "eid187",
                            "left",
                            11777,
                            0,
                            "easeInOutQuad",
                            "${backgrounds}",
                            '-1116px',
                            '-1116px'
                        ]
                    ]
                }
            },
            "H_Facepull": {
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
                            display: 'block',
                            rect: [0, 0, '3200px', '845px', 'auto', 'auto'],
                            id: 'H_FacePull1',
                            fill: ['rgba(0,0,0,0)', 'images/H_FacePull1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: [15, 12, '3200px', '845px', 'auto', 'auto'],
                            id: 'H_FacePull22',
                            fill: ['rgba(0,0,0,0)', 'images/H_FacePull2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: [15, 10, '3200px', '845px', 'auto', 'auto'],
                            id: 'H_FacePull32',
                            fill: ['rgba(0,0,0,0)', 'images/H_FacePull3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: [30, 10, '3200px', '845px', 'auto', 'auto'],
                            id: 'H_FacePull42',
                            fill: ['rgba(0,0,0,0)', 'images/H_FacePull4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: [10, 0, '3200px', '845px', 'auto', 'auto'],
                            id: 'H_FacePull52',
                            fill: ['rgba(0,0,0,0)', 'images/H_FacePull5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: [-20, 0, '3200px', '845px', 'auto', 'auto'],
                            id: 'H_FacePull62',
                            fill: ['rgba(0,0,0,0)', 'images/H_FacePull6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 845]
                        }
                    }
                },
                timeline: {
                    duration: 2042,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "loop": 1708
                    },
                    data: [
                        [
                            "eid31",
                            "display",
                            333,
                            0,
                            "linear",
                            "${H_FacePull1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            1375,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            1708,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            'block',
                            'none'
                        ],
                        [
                            "eid28",
                            "left",
                            333,
                            0,
                            "linear",
                            "${H_FacePull22}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid32",
                            "left",
                            417,
                            0,
                            "linear",
                            "${H_FacePull22}",
                            '11px',
                            '-803px'
                        ],
                        [
                            "eid33",
                            "left",
                            500,
                            0,
                            "linear",
                            "${H_FacePull22}",
                            '-813px',
                            '-1584px'
                        ],
                        [
                            "eid34",
                            "left",
                            583,
                            0,
                            "linear",
                            "${H_FacePull22}",
                            '-1594px',
                            '-2412px'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            0,
                            "linear",
                            "${H_FacePull1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "top",
                            250,
                            0,
                            "linear",
                            "${H_FacePull1}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid60",
                            "display",
                            1708,
                            0,
                            "linear",
                            "${H_FacePull62}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "top",
                            1375,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid66",
                            "top",
                            1458,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid67",
                            "top",
                            1542,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            '20px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "top",
                            1625,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid45",
                            "display",
                            1042,
                            0,
                            "linear",
                            "${H_FacePull42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            1375,
                            0,
                            "linear",
                            "${H_FacePull42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "top",
                            1042,
                            0,
                            "linear",
                            "${H_FacePull42}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid51",
                            "top",
                            1125,
                            0,
                            "linear",
                            "${H_FacePull42}",
                            '10px',
                            '8px'
                        ],
                        [
                            "eid39",
                            "top",
                            667,
                            0,
                            "linear",
                            "${H_FacePull32}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid61",
                            "left",
                            1708,
                            0,
                            "linear",
                            "${H_FacePull62}",
                            '-20px',
                            '-20px'
                        ],
                        [
                            "eid63",
                            "left",
                            1792,
                            0,
                            "linear",
                            "${H_FacePull62}",
                            '-20px',
                            '-831px'
                        ],
                        [
                            "eid64",
                            "left",
                            1875,
                            0,
                            "linear",
                            "${H_FacePull62}",
                            '-831px',
                            '-1583px'
                        ],
                        [
                            "eid65",
                            "left",
                            1958,
                            0,
                            "linear",
                            "${H_FacePull62}",
                            '-1568px',
                            '-2398px'
                        ],
                        [
                            "eid46",
                            "left",
                            1042,
                            0,
                            "linear",
                            "${H_FacePull42}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid48",
                            "left",
                            1125,
                            0,
                            "linear",
                            "${H_FacePull42}",
                            '30px',
                            '-792px'
                        ],
                        [
                            "eid49",
                            "left",
                            1208,
                            0,
                            "linear",
                            "${H_FacePull42}",
                            '-800px',
                            '-1568px'
                        ],
                        [
                            "eid50",
                            "left",
                            1292,
                            0,
                            "linear",
                            "${H_FacePull42}",
                            '-1578px',
                            '-2407px'
                        ],
                        [
                            "eid54",
                            "left",
                            1375,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid56",
                            "left",
                            1458,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            '10px',
                            '-795px'
                        ],
                        [
                            "eid57",
                            "left",
                            1542,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            '-775px',
                            '-1598px'
                        ],
                        [
                            "eid58",
                            "left",
                            1625,
                            0,
                            "linear",
                            "${H_FacePull52}",
                            '-1608px',
                            '-2369px'
                        ],
                        [
                            "eid62",
                            "top",
                            1708,
                            0,
                            "linear",
                            "${H_FacePull62}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid70",
                            "top",
                            1875,
                            0,
                            "linear",
                            "${H_FacePull62}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid72",
                            "top",
                            1958,
                            0,
                            "linear",
                            "${H_FacePull62}",
                            '1px',
                            '-9px'
                        ],
                        [
                            "eid7",
                            "left",
                            0,
                            0,
                            "linear",
                            "${H_FacePull1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8",
                            "left",
                            85,
                            0,
                            "linear",
                            "${H_FacePull1}",
                            '0px',
                            '-804px'
                        ],
                        [
                            "eid9",
                            "left",
                            167,
                            0,
                            "linear",
                            "${H_FacePull1}",
                            '-808px',
                            '-1592px'
                        ],
                        [
                            "eid10",
                            "left",
                            250,
                            0,
                            "linear",
                            "${H_FacePull1}",
                            '-1612px',
                            '-2413px'
                        ],
                        [
                            "eid29",
                            "top",
                            333,
                            0,
                            "linear",
                            "${H_FacePull22}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid35",
                            "top",
                            417,
                            0,
                            "linear",
                            "${H_FacePull22}",
                            '12px',
                            '8px'
                        ],
                        [
                            "eid36",
                            "top",
                            500,
                            0,
                            "linear",
                            "${H_FacePull22}",
                            '8px',
                            '14px'
                        ],
                        [
                            "eid30",
                            "display",
                            333,
                            0,
                            "linear",
                            "${H_FacePull22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            667,
                            0,
                            "linear",
                            "${H_FacePull22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "left",
                            667,
                            0,
                            "linear",
                            "${H_FacePull32}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid41",
                            "left",
                            750,
                            0,
                            "linear",
                            "${H_FacePull32}",
                            '15px',
                            '-810px'
                        ],
                        [
                            "eid42",
                            "left",
                            833,
                            0,
                            "linear",
                            "${H_FacePull32}",
                            '-810px',
                            '-1581px'
                        ],
                        [
                            "eid43",
                            "left",
                            917,
                            0,
                            "linear",
                            "${H_FacePull32}",
                            '-1581px',
                            '-2405px'
                        ],
                        [
                            "eid38",
                            "display",
                            667,
                            0,
                            "linear",
                            "${H_FacePull32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            1042,
                            0,
                            "linear",
                            "${H_FacePull32}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "cloud_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, -1000, '500px', '1200px', 'auto', 'auto'],
                            id: 'ss_cloud2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_cloud4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 500, 200]
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    data: [
                        [
                            "eid879",
                            "top",
                            33,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-1000px',
                            '-1000px'
                        ],
                        [
                            "eid880",
                            "top",
                            133,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-1000px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "top",
                            233,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '0px',
                            '-200px'
                        ],
                        [
                            "eid18",
                            "top",
                            333,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-200px',
                            '-400px'
                        ],
                        [
                            "eid19",
                            "top",
                            433,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-400px',
                            '-600px'
                        ],
                        [
                            "eid20",
                            "top",
                            533,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-600px',
                            '-800px'
                        ]
                    ]
                }
            },
            "cloud_cluster": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [242, 0, 500, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'cloud_3',
                            symbolName: 'cloud_3',
                            type: 'rect'
                        },
                        {
                            rect: [574, 84, 500, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'cloud_22',
                            symbolName: 'cloud_2',
                            type: 'rect'
                        },
                        {
                            rect: [30, 38, 500, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'cloud_12',
                            symbolName: 'cloud_1',
                            type: 'rect'
                        },
                        {
                            rect: [362, 100, 500, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'cloud_3Copy',
                            symbolName: 'cloud_3',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', '1', 1], ['50%', '50%']]
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', '1', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'cloud_22Copy',
                            symbolName: 'cloud_2',
                            type: 'rect',
                            rect: [142, 102, 500, 200, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', '1', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'cloud_12Copy',
                            symbolName: 'cloud_1',
                            type: 'rect',
                            rect: [470, 16, 500, 200, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1104, 302]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid862",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cloud_3Copy}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid893",
                            "top",
                            304,
                            0,
                            "easeInOutQuad",
                            "${cloud_3Copy}",
                            '100px',
                            '91px'
                        ],
                        [
                            "eid2168",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_12Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid876",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cloud_3}",
                            '242px',
                            '252px'
                        ],
                        [
                            "eid891",
                            "left",
                            304,
                            0,
                            "easeInOutQuad",
                            "${cloud_3}",
                            '252px',
                            '262px'
                        ],
                        [
                            "eid2167",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2200",
                            "scaleX",
                            0,
                            2000,
                            "linear",
                            "${cloud_3}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid2201",
                            "scaleX",
                            2000,
                            2000,
                            "linear",
                            "${cloud_3}",
                            '1.14999',
                            '0.9'
                        ],
                        [
                            "eid2202",
                            "scaleX",
                            4000,
                            3000,
                            "linear",
                            "${cloud_3}",
                            '0.9',
                            '1.14999'
                        ],
                        [
                            "eid2203",
                            "scaleX",
                            7000,
                            3000,
                            "linear",
                            "${cloud_3}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid2178",
                            "scaleX",
                            0,
                            2000,
                            "linear",
                            "${cloud_12Copy}",
                            '-1',
                            '-1.15'
                        ],
                        [
                            "eid2184",
                            "scaleX",
                            2000,
                            2000,
                            "linear",
                            "${cloud_12Copy}",
                            '-1.15',
                            '-0.9'
                        ],
                        [
                            "eid2186",
                            "scaleX",
                            4000,
                            3000,
                            "linear",
                            "${cloud_12Copy}",
                            '-0.9',
                            '-1.15'
                        ],
                        [
                            "eid2189",
                            "scaleX",
                            7000,
                            3000,
                            "linear",
                            "${cloud_12Copy}",
                            '-1.15',
                            '-1'
                        ],
                        [
                            "eid2177",
                            "scaleX",
                            0,
                            2000,
                            "linear",
                            "${cloud_22Copy}",
                            '-1',
                            '-1.15'
                        ],
                        [
                            "eid2185",
                            "scaleX",
                            2000,
                            2000,
                            "linear",
                            "${cloud_22Copy}",
                            '-1.15',
                            '-0.9'
                        ],
                        [
                            "eid2187",
                            "scaleX",
                            4000,
                            3000,
                            "linear",
                            "${cloud_22Copy}",
                            '-0.9',
                            '-1.15'
                        ],
                        [
                            "eid2190",
                            "scaleX",
                            7000,
                            3000,
                            "linear",
                            "${cloud_22Copy}",
                            '-1.15',
                            '-1'
                        ],
                        [
                            "eid875",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cloud_3Copy}",
                            '362px',
                            '342px'
                        ],
                        [
                            "eid892",
                            "left",
                            304,
                            0,
                            "easeInOutQuad",
                            "${cloud_3Copy}",
                            '342px',
                            '332px'
                        ],
                        [
                            "eid2179",
                            "scaleX",
                            0,
                            2000,
                            "linear",
                            "${cloud_3Copy}",
                            '-1',
                            '-1.15'
                        ],
                        [
                            "eid2183",
                            "scaleX",
                            2000,
                            2022,
                            "linear",
                            "${cloud_3Copy}",
                            '-1.15',
                            '-0.9'
                        ],
                        [
                            "eid2188",
                            "scaleX",
                            4000,
                            3000,
                            "linear",
                            "${cloud_3Copy}",
                            '-0.9',
                            '-1.15'
                        ],
                        [
                            "eid2191",
                            "scaleX",
                            7000,
                            3000,
                            "linear",
                            "${cloud_3Copy}",
                            '-1.15',
                            '-1'
                        ],
                        [
                            "eid2170",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_12}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2192",
                            "scaleX",
                            0,
                            2000,
                            "linear",
                            "${cloud_12}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid2193",
                            "scaleX",
                            2000,
                            2000,
                            "linear",
                            "${cloud_12}",
                            '1.14999',
                            '0.9'
                        ],
                        [
                            "eid2194",
                            "scaleX",
                            4000,
                            3000,
                            "linear",
                            "${cloud_12}",
                            '0.9',
                            '1.14999'
                        ],
                        [
                            "eid2195",
                            "scaleX",
                            7000,
                            3000,
                            "linear",
                            "${cloud_12}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid2171",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_22}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2196",
                            "scaleX",
                            0,
                            2000,
                            "linear",
                            "${cloud_22}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid2197",
                            "scaleX",
                            2000,
                            2000,
                            "linear",
                            "${cloud_22}",
                            '1.14999',
                            '0.9'
                        ],
                        [
                            "eid2198",
                            "scaleX",
                            4000,
                            3000,
                            "linear",
                            "${cloud_22}",
                            '0.9',
                            '1.14999'
                        ],
                        [
                            "eid2199",
                            "scaleX",
                            7000,
                            3000,
                            "linear",
                            "${cloud_22}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid2169",
                            "scaleY",
                            22,
                            0,
                            "linear",
                            "${cloud_22Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid865",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cloud_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid890",
                            "top",
                            304,
                            0,
                            "easeInOutQuad",
                            "${cloud_3}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid864",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_3Copy}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "cloud_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '500px', '1200px', 'auto', 'auto'],
                            id: 'ss_cloud2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_cloud4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 500, 200]
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    data: [
                        [
                            "eid881",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid882",
                            "top",
                            100,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '0px',
                            '-200px'
                        ],
                        [
                            "eid18",
                            "top",
                            200,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-200px',
                            '-400px'
                        ],
                        [
                            "eid19",
                            "top",
                            299,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-400px',
                            '-600px'
                        ],
                        [
                            "eid20",
                            "top",
                            399,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-600px',
                            '-800px'
                        ],
                        [
                            "eid21",
                            "top",
                            499,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-800px',
                            '-1000px'
                        ]
                    ]
                }
            },
            "cloud_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, -800, '500px', '1200px', 'auto', 'auto'],
                            id: 'ss_cloud2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_cloud4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 500, 200]
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    data: [
                        [
                            "eid376",
                            "top",
                            67,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-800px',
                            '-800px'
                        ],
                        [
                            "eid377",
                            "top",
                            167,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-800px',
                            '-1000px'
                        ],
                        [
                            "eid16",
                            "top",
                            267,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-1000px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "top",
                            367,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '0px',
                            '-200px'
                        ],
                        [
                            "eid18",
                            "top",
                            467,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-200px',
                            '-400px'
                        ],
                        [
                            "eid19",
                            "top",
                            567,
                            0,
                            "linear",
                            "${ss_cloud2}",
                            '-400px',
                            '-600px'
                        ]
                    ]
                }
            },
            "backgrounds": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', 1, 1], ['50%', '50%']],
                            id: 'houses_bg_1',
                            type: 'image',
                            rect: [1067, 308, '1096px', '593px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/houses_bg_1.png', '0px', '0px']
                        },
                        {
                            rect: [1820, 422, 1104, 302, 'auto', 'auto'],
                            opacity: '0.7',
                            id: 'cloud_clusterCopy2',
                            symbolName: 'cloud_cluster',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.54347', '0.54347', 1], ['50%', '50%']]
                        },
                        {
                            rect: [1004, 504, '372px', '699px', 'auto', 'auto'],
                            id: 'house_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/house_1.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', 1, 1], ['50%', '50%']],
                            id: 'house_3',
                            type: 'image',
                            rect: [2399, 791, '402px', '507px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/house_3.png', '0px', '0px']
                        },
                        {
                            rect: [1120, 123, 1104, 302, 'auto', 'auto'],
                            opacity: '0.7',
                            id: 'cloud_clusterCopy',
                            symbolName: 'cloud_cluster',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.6413', '0.6413', 1], ['50%', '50%']]
                        },
                        {
                            rect: [2236, 0, 1104, 302, 'auto', 'auto'],
                            id: 'cloud_cluster',
                            symbolName: 'cloud_cluster',
                            opacity: '0.7',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 3730, 1203]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid99",
                            "left",
                            0,
                            7594,
                            "linear",
                            "${cloud_cluster}",
                            '2236px',
                            '3724px'
                        ],
                        [
                            "eid102",
                            "left",
                            8464,
                            11536,
                            "linear",
                            "${cloud_cluster}",
                            '-196px',
                            '2236px'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '0.54347',
                            '0.54347'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '-0.6413',
                            '-0.6413'
                        ],
                        [
                            "eid107",
                            "left",
                            0,
                            8000,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '1820px',
                            '2870px'
                        ],
                        [
                            "eid108",
                            "left",
                            9000,
                            11000,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '244px',
                            '1820px'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '0.54347',
                            '0.54347'
                        ],
                        [
                            "eid97",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '0.7',
                            '0.50487803685956'
                        ],
                        [
                            "eid88",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '422px',
                            '422px'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '123px',
                            '123px'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cloud_cluster}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid103",
                            "left",
                            0,
                            6666,
                            "linear",
                            "${cloud_clusterCopy}",
                            '1120px',
                            '199px'
                        ],
                        [
                            "eid106",
                            "left",
                            7594,
                            12406,
                            "linear",
                            "${cloud_clusterCopy}",
                            '2962px',
                            '1120px'
                        ],
                        [
                            "eid87",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '0.6413',
                            '0.6413'
                        ],
                        [
                            "eid96",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloud_cluster}",
                            '0.7',
                            '0.50487803685956'
                        ],
                        [
                            "eid98",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '0.7',
                            '0.50487803685956'
                        ]
                    ]
                }
            },
            "backgrounds_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [1820, 422, 1104, 302, 'auto', 'auto'],
                            opacity: '0.7',
                            id: 'cloud_clusterCopy2',
                            symbolName: 'cloud_cluster',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.54347', '0.54347', 1], ['50%', '50%']]
                        },
                        {
                            rect: [1120, 123, 1104, 302, 'auto', 'auto'],
                            opacity: '0.7',
                            id: 'cloud_clusterCopy',
                            symbolName: 'cloud_cluster',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.6413', '0.6413', 1], ['50%', '50%']]
                        },
                        {
                            rect: [2236, 0, 1104, 302, 'auto', 'auto'],
                            id: 'cloud_cluster',
                            symbolName: 'cloud_cluster',
                            opacity: '0.7',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 3730, 1203]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid99",
                            "left",
                            0,
                            7594,
                            "linear",
                            "${cloud_cluster}",
                            '2236px',
                            '3724px'
                        ],
                        [
                            "eid102",
                            "left",
                            8464,
                            11536,
                            "linear",
                            "${cloud_cluster}",
                            '-196px',
                            '2236px'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '0.54347',
                            '0.54347'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '-0.6413',
                            '-0.6413'
                        ],
                        [
                            "eid107",
                            "left",
                            0,
                            8000,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '1820px',
                            '2870px'
                        ],
                        [
                            "eid108",
                            "left",
                            9000,
                            11000,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '244px',
                            '1820px'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '0.54347',
                            '0.54347'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '0.7',
                            '0.7'
                        ],
                        [
                            "eid97",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '0.7',
                            '0.50487803685956'
                        ],
                        [
                            "eid88",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '422px',
                            '422px'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '123px',
                            '123px'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cloud_cluster}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid103",
                            "left",
                            0,
                            6666,
                            "linear",
                            "${cloud_clusterCopy}",
                            '1120px',
                            '199px'
                        ],
                        [
                            "eid106",
                            "left",
                            7594,
                            12406,
                            "linear",
                            "${cloud_clusterCopy}",
                            '2962px',
                            '1120px'
                        ],
                        [
                            "eid87",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '0.6413',
                            '0.6413'
                        ],
                        [
                            "eid80",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloud_cluster}",
                            '0.7',
                            '0.7'
                        ],
                        [
                            "eid96",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${cloud_cluster}",
                            '0.7',
                            '0.50487803685956'
                        ],
                        [
                            "eid91",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '0.7',
                            '0.7'
                        ],
                        [
                            "eid98",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '0.7',
                            '0.50487803685956'
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
                            fill: ['rgba(0,0,0,0)', 'images/wind.png', '0px', '0px']
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
            "FacePullWind": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['325', '400', '320px', '45px', 'auto', 'auto'],
                            source: ['media/windloop.mp3'],
                            volume: '0',
                            id: 'windloop',
                            type: 'audio',
                            tag: 'audio'
                        },
                        {
                            type: 'rect',
                            id: 'wind2',
                            opacity: '0',
                            fi: ['0', '0deg', '1', '1', '0', '0', '0', '3px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            rect: [855, 317, 770, 1287, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'wind',
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '3px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            transform: [[0, 0, 0], ['-46', 0, 0], [0, 0], ['1.1652', '1.1652', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            id: 'wind2Copy',
                            opacity: '0',
                            fi: ['0', '0deg', '1', '1', '0', '0', '0', '3px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            rect: [1107, -107, 770, 1287, 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'wind',
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '3px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            transform: [[0, 0, 0], ['-83', 0, 0], [0, 0], ['1.1652', '1.1652', 1], ['50%', '50%']]
                        },
                        {
                            rect: ['-609px', '-20px', 800, 845, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'H_Facepull',
                            symbolName: 'H_Facepull',
                            type: 'rect'
                        },
                        {
                            rect: ['-66px', '-274px', '1040px', '1456px', 'auto', 'auto'],
                            opacity: '0',
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2291, 1804]
                        }
                    }
                },
                timeline: {
                    duration: 50437,
                    autoPlay: true,
                    labels: {
                        "start": 333
                    },
                    data: [
                        [
                            "eid172",
                            "display",
                            333,
                            0,
                            "easeInQuad",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${wind2}",
                            '1.1652',
                            '1.1652'
                        ],
                        [
                            "eid169",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2Copy}",
                            '1.1652',
                            '1.1652'
                        ],
                        [
                            "eid167",
                            "opacity",
                            1789,
                            744,
                            "easeInQuad",
                            "${wind2}",
                            '0',
                            '0.2926830053329468'
                        ],
                        [
                            "eid154",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2}",
                            '855px',
                            '715px'
                        ],
                        [
                            "eid76",
                            "location",
                            0,
                            0,
                            "easeInOutQuad",
                            "${H_Facepull}",
                            [[-415.25, 397.4, 0, 0, 0, 0,0],[-293.22, 434.53, 59.57, 2.73, 226.28, 10.37,128.98],[-181.47, 395.61, 140.79, 46.13, 43.9, 14.38,247.99],[-112.41, 428.16, 71.1, 1.17, 173.08, 2.84,327.89],[-45.91, 410.42, 36.07, -13.17, 62.41, -22.78,397.13],[-10.94, 402.88, 175.32, 3.89, 33.96, 0.75,433.1],[145, 433.35, 410.07, 26.16, 188.15, 12,592.4],[317.56, 405.63, 155.29, 0.15, 136.46, 0.13,769.58],[400, 436.15, 0, 0, 0, 0,859.38]]
                        ],
                        [
                            "eid153",
                            "rotateZ",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2}",
                            '-46deg',
                            '-34deg'
                        ],
                        [
                            "eid158",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2Copy}",
                            '-107px',
                            '90px'
                        ],
                        [
                            "eid157",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2Copy}",
                            '1107px',
                            '987px'
                        ],
                        [
                            "eid381",
                            "volume",
                            2193,
                            807,
                            "linear",
                            "${windloop}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid383",
                            "volume",
                            7000,
                            807,
                            "linear",
                            "${windloop}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid131",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${wind2}",
                            '1.1652',
                            '1.1652'
                        ],
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            1789,
                            0,
                            "linear",
                            "${wind2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid171",
                            "filter.blur",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            1789,
                            744,
                            "easeInQuad",
                            "${wind2Copy}",
                            '0',
                            '0.2926830053329468'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${wind2Copy}",
                            '1.1652',
                            '1.1652'
                        ],
                        [
                            "eid170",
                            "filter.blur",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2Copy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid155",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2}",
                            '317px',
                            '421px'
                        ],
                        [
                            "eid156",
                            "rotateZ",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2Copy}",
                            '-83deg',
                            '-67deg'
                        ],
                        [
                            "eid151",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${wind2Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            1789,
                            0,
                            "linear",
                            "${wind2Copy}",
                            'block',
                            'block'
                        ],
                            [ "eid150", "trigger", 333.33333333333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${H_Facepull}', [] ] ],
                            [ "eid384", "trigger", 2115.7696265832, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${windloop}', [] ] ]
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
                            rect: ['0', 10, 620, 65, 'auto', 'auto'],
                            id: 'Text_A3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_A3.png', '0px', '0px']
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
                            "eid253",
                            "opacity",
                            0,
                            452,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid254",
                            "opacity",
                            452,
                            129,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid255",
                            "opacity",
                            581,
                            140,
                            "easeOutBounce",
                            "${Text_A3}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid256",
                            "opacity",
                            721,
                            106,
                            "easeOutBounce",
                            "${Text_A3}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid257",
                            "opacity",
                            827,
                            61,
                            "easeOutBounce",
                            "${Text_A3}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid258",
                            "opacity",
                            888,
                            164,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid259",
                            "opacity",
                            1052,
                            67,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid260",
                            "opacity",
                            1119,
                            66,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid261",
                            "opacity",
                            1185,
                            200,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid262",
                            "opacity",
                            1385,
                            67,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid263",
                            "opacity",
                            1585,
                            96,
                            "easeInBounce",
                            "${Text_A3}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid264",
                            "opacity",
                            1681,
                            171,
                            "easeOutBounce",
                            "${Text_A3}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid265",
                            "opacity",
                            1852,
                            67,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid266",
                            "opacity",
                            1919,
                            34,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid267",
                            "opacity",
                            1953,
                            70,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid268",
                            "opacity",
                            2023,
                            55,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid269",
                            "opacity",
                            2078,
                            41,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid270",
                            "opacity",
                            2119,
                            38,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid271",
                            "opacity",
                            2157,
                            64,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid272",
                            "opacity",
                            2452,
                            800,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid273",
                            "opacity",
                            3452,
                            0,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid274",
                            "opacity",
                            3652,
                            481,
                            "easeInOutBounce",
                            "${Text_A3}",
                            '0.5',
                            '0'
                        ]
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
                            rect: ['0', -3, 1075, 77, 'auto', 'auto'],
                            id: 'Text_A5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_A5.png', '0px', '0px']
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
                            "eid300",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid301",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid302",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${Text_A5}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid303",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${Text_A5}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid304",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${Text_A5}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid305",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid306",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid307",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid308",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid309",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid310",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${Text_A5}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid311",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${Text_A5}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid312",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid313",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid314",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid315",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid316",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid317",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid318",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid319",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid320",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${Text_A5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid321",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${Text_A5}",
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
                            fill: ['rgba(0,0,0,0)', 'images/bText_83.png', '0px', '0px']
                        },
                        {
                            rect: [10, '0', 1167, 80, 'auto', 'auto'],
                            id: 'Text_A4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_A4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1170, 80]
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
                            "eid278",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid279",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid280",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${Text_A4}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid281",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${Text_A4}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid282",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${Text_A4}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid283",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid284",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid285",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid286",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid287",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid288",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${Text_A4}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid289",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${Text_A4}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid290",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid291",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid292",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid293",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid294",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid295",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid296",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid297",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid298",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${Text_A4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid299",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${Text_A4}",
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
                            fill: ['rgba(0,0,0,0)', 'images/bText_63.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', 766, 87, 'auto', 'auto'],
                            id: 'Text_A2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_A2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 770, 80]
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
                            "eid225",
                            "opacity",
                            0,
                            482,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid226",
                            "opacity",
                            482,
                            129,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid227",
                            "opacity",
                            611,
                            140,
                            "easeOutBounce",
                            "${Text_A2}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid228",
                            "opacity",
                            751,
                            106,
                            "easeOutBounce",
                            "${Text_A2}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid229",
                            "opacity",
                            857,
                            61,
                            "easeOutBounce",
                            "${Text_A2}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid230",
                            "opacity",
                            918,
                            164,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid231",
                            "opacity",
                            1082,
                            67,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid232",
                            "opacity",
                            1149,
                            66,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid233",
                            "opacity",
                            1215,
                            200,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid234",
                            "opacity",
                            1415,
                            67,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid235",
                            "opacity",
                            1615,
                            96,
                            "easeInBounce",
                            "${Text_A2}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid236",
                            "opacity",
                            1711,
                            171,
                            "easeOutBounce",
                            "${Text_A2}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid237",
                            "opacity",
                            1882,
                            67,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid238",
                            "opacity",
                            1949,
                            34,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid239",
                            "opacity",
                            1983,
                            70,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid240",
                            "opacity",
                            2053,
                            55,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid241",
                            "opacity",
                            2108,
                            41,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid242",
                            "opacity",
                            2149,
                            38,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid243",
                            "opacity",
                            2187,
                            64,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid244",
                            "opacity",
                            2482,
                            800,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid245",
                            "opacity",
                            3482,
                            0,
                            "easeInOutBounce",
                            "${Text_A2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid246",
                            "opacity",
                            3682,
                            518,
                            "easeInOutBounce",
                            "${Text_A2}",
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
                            rect: ['0', '-9', 490, 98, 'auto', 'auto'],
                            id: 'Text_A1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_A1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 490, 89]
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
                            "eid202",
                            "opacity",
                            0,
                            822,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid203",
                            "opacity",
                            822,
                            129,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid204",
                            "opacity",
                            951,
                            140,
                            "easeOutBounce",
                            "${Text_A1}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid205",
                            "opacity",
                            1091,
                            106,
                            "easeOutBounce",
                            "${Text_A1}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid206",
                            "opacity",
                            1197,
                            61,
                            "easeOutBounce",
                            "${Text_A1}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid207",
                            "opacity",
                            1258,
                            164,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid208",
                            "opacity",
                            1422,
                            67,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid209",
                            "opacity",
                            1489,
                            66,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid210",
                            "opacity",
                            1555,
                            200,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid211",
                            "opacity",
                            1755,
                            67,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid212",
                            "opacity",
                            1955,
                            96,
                            "easeInBounce",
                            "${Text_A1}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid213",
                            "opacity",
                            2051,
                            171,
                            "easeOutBounce",
                            "${Text_A1}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid214",
                            "opacity",
                            2222,
                            67,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid215",
                            "opacity",
                            2289,
                            34,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid216",
                            "opacity",
                            2323,
                            70,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid217",
                            "opacity",
                            2393,
                            55,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid218",
                            "opacity",
                            2448,
                            41,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid219",
                            "opacity",
                            2489,
                            38,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid220",
                            "opacity",
                            2527,
                            64,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid221",
                            "opacity",
                            2822,
                            800,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid222",
                            "opacity",
                            3822,
                            0,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid223",
                            "opacity",
                            4022,
                            578,
                            "easeInOutBounce",
                            "${Text_A1}",
                            '0.5',
                            '0'
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
                            fill: ['rgba(0,0,0,0)', 'images/dust_icon4.png', '0px', '0px']
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
            "text_6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [5, '0', 336, 80, 'auto', 'auto'],
                            id: 'Text_A6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_A6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 330, 80]
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
                            "eid322",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid323",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid324",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${Text_A6}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid325",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${Text_A6}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid326",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${Text_A6}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid327",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid328",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid329",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid330",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid331",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid332",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${Text_A6}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid333",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${Text_A6}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid334",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid335",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid336",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid337",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid338",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid339",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid340",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid341",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid342",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid343",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${Text_A6}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("SCENE_C_edgeActions.js");
})("SCENE_C");
