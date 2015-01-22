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
                            id: 'paper_bg_12',
                            type: 'image',
                            rect: ['0', '0', '2050px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"paper_bg_1.png",'0px','0px']
                        },
                        {
                            id: 'houses_bg_1',
                            type: 'image',
                            rect: ['201', '1537', '1096px', '593px', 'auto', 'auto'],
                            opacity: '0.45528455284553',
                            fill: ["rgba(0,0,0,0)",im+"houses_bg_1.png",'0px','0px']
                        },
                        {
                            id: 'house_1',
                            type: 'image',
                            rect: ['30', '1752', '372px', '699px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"house_1.png",'0px','0px']
                        },
                        {
                            id: 'house_2',
                            type: 'image',
                            rect: ['1156', '1752', '448px', '679px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"house_2.png",'0px','0px']
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['362', '1860', '678', '520', 'auto', 'auto'],
                            c: [
                            {
                                id: 'house_3',
                                type: 'image',
                                rect: ['0', '0', '402px', '507px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"house_3.png",'0px','0px']
                            },
                            {
                                id: 'tree_1',
                                type: 'image',
                                rect: ['378', '204', '300', '316', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"tree_1.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['160', '1787', '2028', '973', 'auto', 'auto'],
                            c: [
                            {
                                id: 'C_Esser',
                                symbolName: 'C_Esser',
                                display: 'none',
                                type: 'rect',
                                rect: ['1492', '500', '200', '480', 'auto', 'auto'],
                                overflow: 'hidden',
                                opacity: '1',
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                                transform: [[],[],[],['0.44','0.44']]
                            },
                            {
                                id: 'bistro_0',
                                type: 'image',
                                rect: ['1426', '510', '492px', '355px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bistro_0.png",'0px','0px']
                            },
                            {
                                id: 'BG_1',
                                type: 'image',
                                rect: ['0', '0', '2028px', '973px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"BG_1.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'C_Pisser',
                            symbolName: 'C_Pisser',
                            display: 'none',
                            type: 'rect',
                            rect: ['415', '1615', '230', '452', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['-0.80896','0.80896']]
                        },
                        {
                            id: 'Group',
                            display: 'none',
                            type: 'group',
                            rect: ['1928', '882', '763px', '419px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg_trash_cans',
                                type: 'image',
                                rect: ['0', '0', '654px', '400px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bg_trash_cans.png",'0px','0px'],
                                transform: [[],[],[],['0.7','0.7']]
                            },
                            {
                                id: 'A_trash_1',
                                symbolName: 'A_trash_1',
                                type: 'rect',
                                rect: ['37', '96', '705', '300', 'auto', 'auto'],
                                overflow: 'hidden',
                                transform: [[],[],[],['0.7','0.7']]
                            }]
                        },
                        {
                            id: 'Title_Intro',
                            symbolName: 'Title_Intro',
                            type: 'rect',
                            rect: ['0', '0', '2048', '1536', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0.60975618721024'
                        },
                        {
                            id: 'taube',
                            symbolName: 'taube',
                            display: 'block',
                            type: 'rect',
                            rect: ['1537', '1737', '350', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.48','0.48']]
                        },
                        {
                            id: 'taubeCopy',
                            symbolName: 'taube',
                            display: 'block',
                            type: 'rect',
                            rect: ['875', '1602', '350', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.35429','0.35429']]
                        },
                        {
                            id: 'taubeCopy2',
                            symbolName: 'taube',
                            display: 'block',
                            type: 'rect',
                            rect: ['438', '1620', '350', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['-0.28572','0.28571']]
                        },
                        {
                            id: 'BG_0',
                            type: 'image',
                            rect: ['0', '2560', '4096px', '567px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
                        },
                        {
                            id: 'BG_12',
                            display: 'none',
                            type: 'image',
                            rect: ['2092', '184', '2028px', '973px', 'auto', 'auto'],
                            clip: 'rect(0px 1941.1416015625px 973px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"BG_1.png",'0px','0px'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'A_trash_2',
                            symbolName: 'A_trash_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['-79', '1844', '342', '300', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'A_trash_3',
                            symbolName: 'A_trash_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['3599', '979', '333', '300', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.74667','0.74667']]
                        },
                        {
                            id: 'trashBin',
                            display: 'none',
                            type: 'image',
                            rect: ['2108', '809', '144', '247', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"trashBin.png",'0px','0px']
                        },
                        {
                            id: 'B_taube2',
                            symbolName: 'B_taube2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1083', '1761', '500', '430', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.48','0.48']]
                        },
                        {
                            id: 'BG5',
                            display: 'none',
                            type: 'image',
                            rect: ['2094', '278', '890px', '711px', 'auto', 'auto'],
                            opacity: '0.7',
                            fill: ["rgba(0,0,0,0)",im+"BG5.png",'0px','0px'],
                            transform: [[],['1']]
                        },
                        {
                            id: 'plasticbag',
                            symbolName: 'plasticbag',
                            type: 'rect',
                            rect: ['-355px', '486px', '400', '511', 'auto', 'auto'],
                            autoOrient: true,
                            overflow: 'hidden',
                            transform: [[],[],[],['0.8','0.62622']]
                        },
                        {
                            id: 'A_tv',
                            symbolName: 'A_tv',
                            display: 'none',
                            type: 'rect',
                            rect: ['3701', '854', '600', '600', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.29','0.29']]
                        },
                        {
                            id: 'A_cigPile',
                            symbolName: 'A_cigPile',
                            display: 'none',
                            type: 'rect',
                            rect: ['3639', '1228', '538', '374', 'auto', 'auto'],
                            transform: [[],[],[],['0.60428','0.60428']]
                        },
                        {
                            id: 'A_shoes',
                            symbolName: 'A_shoes',
                            display: 'none',
                            type: 'rect',
                            rect: ['3146', '1036', '525', '420', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.5819','0.5819']]
                        },
                        {
                            id: 'A_teddy',
                            symbolName: 'A_teddy',
                            display: 'none',
                            type: 'rect',
                            rect: ['2672', '985', '447', '400', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.4152','0.4152']]
                        },
                        {
                            id: 'H_still_leftright',
                            symbolName: 'H_still_leftright',
                            display: 'none',
                            type: 'rect',
                            rect: ['884', '1870', '172', '500', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'H_bag_appear',
                            symbolName: 'H_bag_appear',
                            display: 'none',
                            type: 'rect',
                            rect: ['676', '886', '510', '576', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.86806','0.86806']]
                        },
                        {
                            id: 'H_walk',
                            symbolName: 'H_walk',
                            display: 'none',
                            type: 'rect',
                            rect: ['898', '917', '320', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            clip: 'rect(0px 320px 500px 13.044392585754395px)',
                            transform: [[],[],[],['0.98125','0.98125']]
                        },
                        {
                            id: 'C_paperball',
                            symbolName: 'A_paperball',
                            display: 'none',
                            type: 'rect',
                            rect: ['2835', '1209', '440', '300', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'A_cripmate',
                            symbolName: 'A_cripmate',
                            display: 'none',
                            type: 'rect',
                            rect: ['-199', '2114', '1163', '410', 'auto', 'auto'],
                            overflow: 'hidden',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['0.6','0.6']]
                        },
                        {
                            id: 'dust_button3',
                            symbolName: 'dust_button',
                            display: 'block',
                            type: 'rect',
                            rect: ['953', '1295', '193', '179', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'text_5',
                            symbolName: 'text_5',
                            display: 'block',
                            type: 'rect',
                            rect: ['591', '1143', '1360', '80', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'text_4',
                            symbolName: 'text_4',
                            display: 'block',
                            type: 'rect',
                            rect: ['586', '1022', '720', '80', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-1']]
                        },
                        {
                            id: 'text_3',
                            symbolName: 'text_3',
                            display: 'block',
                            type: 'rect',
                            rect: ['130', '891', '1090', '80', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-2']]
                        },
                        {
                            id: 'text_2',
                            symbolName: 'text_2',
                            display: 'block',
                            type: 'rect',
                            rect: ['671', '709', '1120', '80', 'auto', 'auto'],
                            transform: [[],['3']]
                        },
                        {
                            id: 'text_1',
                            symbolName: 'text_1',
                            display: 'block',
                            type: 'rect',
                            rect: ['244', '509', '1518', '80', 'auto', 'auto'],
                            transform: [[],['-1']]
                        },
                        {
                            id: 'Rectangle',
                            display: 'block',
                            type: 'rect',
                            rect: ['0', '0', '2055px', '1536px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Theodora',
                            symbolName: 'Theodora',
                            display: 'none',
                            type: 'rect',
                            rect: ['366', '521', '1317', '299', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['0.65072','0.65072']]
                        },
                        {
                            id: 'dust_icon_invert4',
                            symbolName: 'dust_icon_invert',
                            display: 'block',
                            type: 'rect',
                            rect: ['935', '672', '179', '193', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'SFX_rumble',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['570', '374', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"SFX_rumble.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'SFX_windLoop',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"SFX_windLoop.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'SFX_bassDrop',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"SFX_bassDrop.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2048', '1536', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,249,240,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 59537,
                    autoPlay: true,
                    labels: {
                        "start": 4272,
                        "text_in": 10000,
                        "city_start": 17000,
                        "city_out": 44000
                    },
                    data: [
                        [
                            "eid1314",
                            "display",
                            17000,
                            0,
                            "easeOutQuad",
                            "${H_still_leftright}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1699",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${H_still_leftright}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1844",
                            "left",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            '586px',
                            '586px'
                        ],
                        [
                            "eid1862",
                            "left",
                            23000,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            '586px',
                            '696px'
                        ],
                        [
                            "eid2274",
                            "scaleX",
                            23000,
                            0,
                            "linear",
                            "${A_trash_3}",
                            '0.74667',
                            '0.74667'
                        ],
                        [
                            "eid2277",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${A_trash_2}",
                            '1844px',
                            '992px'
                        ],
                        [
                            "eid2555",
                            "display",
                            54687,
                            0,
                            "linear",
                            "${taube}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2531",
                            "display",
                            50301,
                            0,
                            "linear",
                            "${A_shoes}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1943",
                            "left",
                            23000,
                            0,
                            "easeOutQuad",
                            "${C_Pisser}",
                            '415px',
                            '415px'
                        ],
                        [
                            "eid1949",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${C_Pisser}",
                            '415px',
                            '-1633px'
                        ],
                        [
                            "eid2539",
                            "left",
                            44000,
                            11000,
                            "linear",
                            "${A_shoes}",
                            '3146px',
                            '1054px'
                        ],
                        [
                            "eid2548",
                            "left",
                            55000,
                            1000,
                            "linear",
                            "${A_shoes}",
                            '1054px',
                            '860px'
                        ],
                        [
                            "eid1525",
                            "opacity",
                            17000,
                            1250,
                            "linear",
                            "${text_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1672",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${Group4}",
                            '160px',
                            '-1888px'
                        ],
                        [
                            "eid1052",
                            "scaleX",
                            5000,
                            0,
                            "linear",
                            "${H_walk}",
                            '0.98125',
                            '0.98125'
                        ],
                        [
                            "eid1278",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${house_1}",
                            '1752px',
                            '1162px'
                        ],
                        [
                            "eid1309",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${house_1}",
                            '1162px',
                            '376px'
                        ],
                        [
                            "eid1526",
                            "opacity",
                            17000,
                            1250,
                            "linear",
                            "${text_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1670",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${taube}",
                            '1537px',
                            '-482px'
                        ],
                        [
                            "eid2206",
                            "left",
                            56000,
                            69,
                            "easeInOutQuad",
                            "${taube}",
                            '-482px',
                            '-512px'
                        ],
                        [
                            "eid1279",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${houses_bg_1}",
                            '1537px',
                            '1121px'
                        ],
                        [
                            "eid1691",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${houses_bg_1}",
                            '1121px',
                            '389px'
                        ],
                        [
                            "eid2116",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${B_taube2}",
                            '1761px',
                            '961px'
                        ],
                        [
                            "eid2532",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${A_tv}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2030",
                            "display",
                            0,
                            0,
                            "linear",
                            "${C_Pisser}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1984",
                            "display",
                            23000,
                            0,
                            "easeInOutQuad",
                            "${C_Pisser}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2553",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${C_Pisser}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1610",
                            "display",
                            0,
                            0,
                            "easeInOutBounce",
                            "${dust_button3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1621",
                            "display",
                            17000,
                            0,
                            "easeInOutBounce",
                            "${dust_button3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1886",
                            "display",
                            17521,
                            0,
                            "easeInOutBounce",
                            "${dust_button3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1147",
                            "left",
                            17000,
                            0,
                            "easeOutQuad",
                            "${house_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1638",
                            "left",
                            44000,
                            0,
                            "easeOutCubic",
                            "${house_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1851",
                            "left",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '591px',
                            '591px'
                        ],
                        [
                            "eid1856",
                            "left",
                            23000,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '591px',
                            '551px'
                        ],
                        [
                            "eid2286",
                            "left",
                            44000,
                            11000,
                            "linear",
                            "${A_trash_3}",
                            '3599px',
                            '1645px'
                        ],
                        [
                            "eid2291",
                            "left",
                            55000,
                            1000,
                            "linear",
                            "${A_trash_3}",
                            '1645px',
                            '1485px'
                        ],
                        [
                            "eid2104",
                            "scaleY",
                            23000,
                            0,
                            "linear",
                            "${B_taube2}",
                            '0.48',
                            '0.48'
                        ],
                        [
                            "eid2013",
                            "display",
                            44000,
                            0,
                            "easeInOutQuad",
                            "${Group}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1892",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${bistro_0}",
                            '510px',
                            '580px'
                        ],
                        [
                            "eid1982",
                            "top",
                            44000,
                            0,
                            "easeInQuad",
                            "${bistro_0}",
                            '580px',
                            '579px'
                        ],
                        [
                            "eid937",
                            "location",
                            11000,
                            2000,
                            "easeInOutQuad",
                            "${plasticbag}",
                            [[2292, 815.8, 0, 0, 0, 0,0],[1980.6, 614.04, -483.89, -92.57, -554.15, -106.01,378.22],[1473.35, 766.57, -494.46, -149.16, -1299.56, -392.03,959.94],[1038.58, 778.26, -159.21, 245.04, -560.74, 863.06,1489.08],[814.62, 484.07, 29.44, -70.07, 391.32, -931.4,2009.3],[968.29, 426.61, 482.35, 261.41, 140.23, 76,2182.97],[611.03, 768.16, -863.16, 118.01, -773.67, 105.78,2789.55],[204.41, 784.9, -613.25, 27.24, -77.99, 3.46,3197.49],[-236.95, 719.5, 0, 0, 0, 0,3645.47]]
                        ],
                        [
                            "eid2590",
                            "display",
                            0,
                            0,
                            "linear",
                            "${trashBin}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2591",
                            "display",
                            52376,
                            0,
                            "linear",
                            "${trashBin}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1945",
                            "left",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${C_Esser}",
                            '1492px',
                            '1496px'
                        ],
                        [
                            "eid1981",
                            "left",
                            44000,
                            12768,
                            "linear",
                            "${C_Esser}",
                            '1496px',
                            '1492px'
                        ],
                        [
                            "eid1126",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${H_bag_appear}",
                            '886px',
                            '886px'
                        ],
                        [
                            "eid1706",
                            "top",
                            55454,
                            0,
                            "linear",
                            "${H_bag_appear}",
                            '886px',
                            '886px'
                        ],
                        [
                            "eid2530",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${A_teddy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1151",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${BG_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2559",
                            "left",
                            56000,
                            0,
                            "linear",
                            "${BG_1}",
                            '0px',
                            '13px'
                        ],
                        [
                            "eid1713",
                            "scaleX",
                            5000,
                            0,
                            "linear",
                            "${H_bag_appear}",
                            '0.86806',
                            '0.86806'
                        ],
                        [
                            "eid1714",
                            "scaleX",
                            55454,
                            0,
                            "linear",
                            "${H_bag_appear}",
                            '0.86806',
                            '-0.86806'
                        ],
                        [
                            "eid2271",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${BG_12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2264",
                            "left",
                            23000,
                            0,
                            "linear",
                            "${A_trash_2}",
                            '-79px',
                            '-79px'
                        ],
                        [
                            "eid2294",
                            "left",
                            44000,
                            3340,
                            "linear",
                            "${A_trash_2}",
                            '-79px',
                            '-827px'
                        ],
                        [
                            "eid1467",
                            "rotateZ",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            '-1deg',
                            '-1deg'
                        ],
                        [
                            "eid1277",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${house_2}",
                            '1752px',
                            '1162px'
                        ],
                        [
                            "eid1308",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${house_2}",
                            '1162px',
                            '386px'
                        ],
                        [
                            "eid1864",
                            "top",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            '1022px',
                            '1022px'
                        ],
                        [
                            "eid1872",
                            "top",
                            23000,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            '1022px',
                            '1092px'
                        ],
                        [
                            "eid1869",
                            "left",
                            17000,
                            0,
                            "easeInOutBounce",
                            "${dust_button3}",
                            '953px',
                            '953px'
                        ],
                        [
                            "eid1099",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Title_Intro}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1140",
                            "left",
                            17000,
                            0,
                            "easeInOutCubic",
                            "${Title_Intro}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid1632",
                            "left",
                            44000,
                            0,
                            "easeOutCubic",
                            "${Title_Intro}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid2041",
                            "opacity",
                            5000,
                            3000,
                            "easeInQuad",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2045",
                            "opacity",
                            57537,
                            2000,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2266",
                            "scaleX",
                            23000,
                            0,
                            "linear",
                            "${A_trash_2}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid1687",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${H_still_leftright}",
                            '1870px',
                            '1700px'
                        ],
                        [
                            "eid1323",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${H_still_leftright}",
                            '1700px',
                            '921px'
                        ],
                        [
                            "eid2299",
                            "top",
                            44000,
                            0,
                            "linear",
                            "${BG_12}",
                            '184px',
                            '184px'
                        ],
                        [
                            "eid2301",
                            "top",
                            55000,
                            0,
                            "linear",
                            "${BG_12}",
                            '184px',
                            '185px'
                        ],
                        [
                            "eid1504",
                            "rotateZ",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            '-1deg',
                            '-1deg'
                        ],
                        [
                            "eid1855",
                            "rotateZ",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            '-2deg',
                            '-2deg'
                        ],
                        [
                            "eid1861",
                            "rotateZ",
                            23000,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            '-2deg',
                            '0deg'
                        ],
                        [
                            "eid1668",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${houses_bg_1}",
                            '201px',
                            '-1847px'
                        ],
                        [
                            "eid2538",
                            "left",
                            44000,
                            11000,
                            "linear",
                            "${A_teddy}",
                            '2672px',
                            '670px'
                        ],
                        [
                            "eid2547",
                            "left",
                            55000,
                            1000,
                            "linear",
                            "${A_teddy}",
                            '670px',
                            '486px'
                        ],
                        [
                            "eid1871",
                            "top",
                            17000,
                            0,
                            "easeInOutBounce",
                            "${dust_button3}",
                            '1295px',
                            '1295px'
                        ],
                        [
                            "eid1838",
                            "left",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            '130px',
                            '130px'
                        ],
                        [
                            "eid1859",
                            "left",
                            23000,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            '130px',
                            '558px'
                        ],
                        [
                            "eid2569",
                            "display",
                            53000,
                            0,
                            "linear",
                            "${A_trash_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2112",
                            "left",
                            23000,
                            0,
                            "linear",
                            "${B_taube2}",
                            '1083px',
                            '1087px'
                        ],
                        [
                            "eid2117",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${B_taube2}",
                            '1087px',
                            '-1066px'
                        ],
                        [
                            "eid2016",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${Group}",
                            '1928px',
                            '-114px'
                        ],
                        [
                            "eid1145",
                            "left",
                            17000,
                            0,
                            "easeOutQuad",
                            "${Group3}",
                            '362px',
                            '362px'
                        ],
                        [
                            "eid1674",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${Group3}",
                            '362px',
                            '-1686px'
                        ],
                        [
                            "eid2545",
                            "left",
                            44000,
                            11000,
                            "linear",
                            "${A_tv}",
                            '3701px',
                            '1699px'
                        ],
                        [
                            "eid2546",
                            "left",
                            55000,
                            1000,
                            "linear",
                            "${A_tv}",
                            '1699px',
                            '1543px'
                        ],
                        [
                            "eid2527",
                            "top",
                            55000,
                            0,
                            "linear",
                            "${A_shoes}",
                            '1036px',
                            '1036px'
                        ],
                        [
                            "eid2109",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${B_taube2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2558",
                            "display",
                            53695,
                            0,
                            "linear",
                            "${B_taube2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1841",
                            "top",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            '891px',
                            '891px'
                        ],
                        [
                            "eid1860",
                            "top",
                            23000,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            '891px',
                            '1001px'
                        ],
                        [
                            "eid1614",
                            "opacity",
                            17000,
                            521,
                            "easeInOutBounce",
                            "${dust_button3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1524",
                            "opacity",
                            17000,
                            1250,
                            "linear",
                            "${text_5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1682",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${taubeCopy}",
                            '875px',
                            '-1173px'
                        ],
                        [
                            "eid1867",
                            "rotateZ",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1874",
                            "rotateZ",
                            23000,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '0deg',
                            '-2deg'
                        ],
                        [
                            "eid1276",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${Group3}",
                            '1860px',
                            '1285px'
                        ],
                        [
                            "eid1307",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${Group3}",
                            '1285px',
                            '529px'
                        ],
                        [
                            "eid1156",
                            "top",
                            17000,
                            0,
                            "easeOutQuad",
                            "${house_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1289",
                            "top",
                            44000,
                            0,
                            "easeOutQuad",
                            "${house_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1624",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${BG_1}",
                            '0px',
                            '-110px'
                        ],
                        [
                            "eid1625",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${BG_1}",
                            '-110px',
                            '0px'
                        ],
                        [
                            "eid2560",
                            "top",
                            56000,
                            0,
                            "linear",
                            "${BG_1}",
                            '0px',
                            '-3px'
                        ],
                        [
                            "eid2263",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${A_trash_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2557",
                            "display",
                            45362,
                            0,
                            "linear",
                            "${A_trash_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1813",
                            "display",
                            23000,
                            0,
                            "easeInOutQuad",
                            "${C_Esser}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2554",
                            "display",
                            54687,
                            0,
                            "linear",
                            "${C_Esser}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1271",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${BG_0}",
                            '2560px',
                            '1804px'
                        ],
                        [
                            "eid1695",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${BG_0}",
                            '1804px',
                            '951px'
                        ],
                        [
                            "eid1717",
                            "top",
                            44000,
                            0,
                            "easeInOutQuad",
                            "${BG_0}",
                            '951px',
                            '951px'
                        ],
                        [
                            "eid1708",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${H_bag_appear}",
                            '676px',
                            '676px'
                        ],
                        [
                            "eid1817",
                            "left",
                            55454,
                            546,
                            "linear",
                            "${H_bag_appear}",
                            '936px',
                            '836px'
                        ],
                        [
                            "eid1146",
                            "left",
                            17000,
                            0,
                            "easeOutQuad",
                            "${tree_1}",
                            '378px',
                            '378px'
                        ],
                        [
                            "eid1637",
                            "left",
                            44000,
                            0,
                            "easeOutCubic",
                            "${tree_1}",
                            '378px',
                            '378px'
                        ],
                        [
                            "eid2267",
                            "scaleY",
                            23000,
                            0,
                            "linear",
                            "${A_trash_2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1272",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${taubeCopy2}",
                            '1620px',
                            '824px'
                        ],
                        [
                            "eid1303",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${taubeCopy2}",
                            '824px',
                            '8px'
                        ],
                        [
                            "eid1685",
                            "top",
                            44000,
                            12000,
                            "linear",
                            "${taubeCopy2}",
                            '8px',
                            '29px'
                        ],
                        [
                            "eid2381",
                            "display",
                            4272,
                            0,
                            "easeInQuad",
                            "${dust_icon_invert4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1513",
                            "display",
                            0,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1839",
                            "display",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1878",
                            "display",
                            17000,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2566",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${BG5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1021",
                            "display",
                            5000,
                            0,
                            "easeInOutBounce",
                            "${H_bag_appear}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1702",
                            "display",
                            55454,
                            0,
                            "linear",
                            "${H_bag_appear}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1273",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${taubeCopy}",
                            '1602px',
                            '806px'
                        ],
                        [
                            "eid1304",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${taubeCopy}",
                            '806px',
                            '-10px'
                        ],
                        [
                            "eid1683",
                            "top",
                            44000,
                            12000,
                            "linear",
                            "${taubeCopy}",
                            '-10px',
                            '11px'
                        ],
                        [
                            "eid2245",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${A_cripmate}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2551",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${A_cripmate}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2540",
                            "left",
                            44000,
                            4000,
                            "linear",
                            "${A_cigPile}",
                            '3639px',
                            '2877px'
                        ],
                        [
                            "eid2550",
                            "left",
                            48000,
                            7000,
                            "linear",
                            "${A_cigPile}",
                            '2877px',
                            '1547px'
                        ],
                        [
                            "eid2549",
                            "left",
                            55000,
                            1000,
                            "linear",
                            "${A_cigPile}",
                            '1547px',
                            '1353px'
                        ],
                        [
                            "eid1053",
                            "scaleY",
                            5000,
                            0,
                            "linear",
                            "${H_walk}",
                            '0.98125',
                            '0.98125'
                        ],
                        [
                            "eid1100",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Title_Intro}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1341",
                            "top",
                            10000,
                            3130,
                            "easeInOutCubic",
                            "${Title_Intro}",
                            '0px',
                            '-690px'
                        ],
                        [
                            "eid1617",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${Title_Intro}",
                            '-690px',
                            '-963px'
                        ],
                        [
                            "eid1620",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${Title_Intro}",
                            '-963px',
                            '-1523px'
                        ],
                        [
                            "eid2025",
                            "left",
                            44000,
                            11000,
                            "linear",
                            "${C_paperball}",
                            '2835px',
                            '689px'
                        ],
                        [
                            "eid2027",
                            "left",
                            55000,
                            1000,
                            "linear",
                            "${C_paperball}",
                            '689px',
                            '460px'
                        ],
                        [
                            "eid2571",
                            "left",
                            53000,
                            2000,
                            "linear",
                            "${trashBin}",
                            '2108px',
                            '1751px'
                        ],
                        [
                            "eid2572",
                            "left",
                            55000,
                            1000,
                            "linear",
                            "${trashBin}",
                            '1751px',
                            '1591px'
                        ],
                        [
                            "eid1337",
                            "opacity",
                            10000,
                            1000,
                            "easeOutCubic",
                            "${Theodora}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2529",
                            "top",
                            55000,
                            0,
                            "linear",
                            "${A_cigPile}",
                            '1228px',
                            '1228px'
                        ],
                        [
                            "eid1514",
                            "display",
                            0,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1837",
                            "display",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1879",
                            "display",
                            17000,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1884",
                            "display",
                            18250,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1274",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${taube}",
                            '1737px',
                            '941px'
                        ],
                        [
                            "eid1305",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${taube}",
                            '941px',
                            '128px'
                        ],
                        [
                            "eid1671",
                            "top",
                            44000,
                            12000,
                            "linear",
                            "${taube}",
                            '128px',
                            '149px'
                        ],
                        [
                            "eid2382",
                            "opacity",
                            0,
                            560,
                            "easeInQuad",
                            "${dust_icon_invert4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2383",
                            "opacity",
                            4272,
                            560,
                            "easeInQuad",
                            "${dust_icon_invert4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1893",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${C_Esser}",
                            '500px',
                            '570px'
                        ],
                        [
                            "eid1506",
                            "left",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            '244px',
                            '244px'
                        ],
                        [
                            "eid1507",
                            "left",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            '671px',
                            '671px'
                        ],
                        [
                            "eid1148",
                            "left",
                            17000,
                            0,
                            "easeOutQuad",
                            "${house_2}",
                            '1156px',
                            '1156px'
                        ],
                        [
                            "eid1678",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${house_2}",
                            '1156px',
                            '-892px'
                        ],
                        [
                            "eid2302",
                            "top",
                            44000,
                            0,
                            "linear",
                            "${A_trash_3}",
                            '979px',
                            '979px'
                        ],
                        [
                            "eid2568",
                            "display",
                            0,
                            0,
                            "linear",
                            "${C_paperball}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2567",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${C_paperball}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2103",
                            "scaleX",
                            23000,
                            0,
                            "linear",
                            "${B_taube2}",
                            '0.48',
                            '0.48'
                        ],
                        [
                            "eid1516",
                            "display",
                            0,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1847",
                            "display",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1881",
                            "display",
                            17000,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1882",
                            "display",
                            18250,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1807",
                            "scaleY",
                            23000,
                            0,
                            "easeInOutQuad",
                            "${C_Esser}",
                            '0.44',
                            '0.44'
                        ],
                        [
                            "eid2251",
                            "display",
                            4272,
                            0,
                            "easeOutCubic",
                            "${Theodora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1050",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${H_walk}",
                            '898px',
                            '898px'
                        ],
                        [
                            "eid1967",
                            "left",
                            23000,
                            0,
                            "easeOutQuad",
                            "${A_cripmate}",
                            '-199px',
                            '-199px'
                        ],
                        [
                            "eid1971",
                            "left",
                            44000,
                            11000,
                            "linear",
                            "${A_cripmate}",
                            '-199px',
                            '-2927px'
                        ],
                        [
                            "eid1486",
                            "rotateZ",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            '3deg',
                            '3deg'
                        ],
                        [
                            "eid1051",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${H_walk}",
                            '917px',
                            '917px'
                        ],
                        [
                            "eid1054",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${H_walk}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1700",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${H_walk}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1701",
                            "display",
                            55454,
                            0,
                            "linear",
                            "${H_walk}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2556",
                            "display",
                            54687,
                            0,
                            "linear",
                            "${taubeCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2533",
                            "display",
                            52811,
                            0,
                            "linear",
                            "${A_cigPile}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1155",
                            "top",
                            17000,
                            0,
                            "easeOutQuad",
                            "${tree_1}",
                            '204px',
                            '204px'
                        ],
                        [
                            "eid1288",
                            "top",
                            44000,
                            0,
                            "easeOutQuad",
                            "${tree_1}",
                            '204px',
                            '204px'
                        ],
                        [
                            "eid2564",
                            "left",
                            44000,
                            11000,
                            "linear",
                            "${BG5}",
                            '2094px',
                            '144px'
                        ],
                        [
                            "eid2565",
                            "left",
                            55000,
                            1000,
                            "linear",
                            "${BG5}",
                            '144px',
                            '-10px'
                        ],
                        [
                            "eid2275",
                            "scaleY",
                            23000,
                            0,
                            "linear",
                            "${A_trash_3}",
                            '0.74667',
                            '0.74667'
                        ],
                        [
                            "eid2042",
                            "display",
                            8588,
                            0,
                            "easeInOutQuad",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2043",
                            "display",
                            56000,
                            0,
                            "easeInOutQuad",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1684",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${taubeCopy2}",
                            '438px',
                            '-1610px'
                        ],
                        [
                            "eid1512",
                            "display",
                            0,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1877",
                            "display",
                            17000,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2552",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${taubeCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1275",
                            "top",
                            17000,
                            6000,
                            "easeOutQuad",
                            "${Group4}",
                            '1787px',
                            '1101px'
                        ],
                        [
                            "eid1693",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${Group4}",
                            '1101px',
                            '178px'
                        ],
                        [
                            "eid2289",
                            "left",
                            44000,
                            11000,
                            "linear",
                            "${BG_12}",
                            '2092px',
                            '138px'
                        ],
                        [
                            "eid2290",
                            "left",
                            55000,
                            1000,
                            "linear",
                            "${BG_12}",
                            '138px',
                            '-22px'
                        ],
                        [
                            "eid1185",
                            "left",
                            17000,
                            0,
                            "easeOutQuad",
                            "${BG_0}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1680",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${BG_0}",
                            '0px',
                            '-2048px'
                        ],
                        [
                            "eid1515",
                            "display",
                            0,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1842",
                            "display",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1880",
                            "display",
                            17000,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1883",
                            "display",
                            18250,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1853",
                            "top",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            '709px',
                            '709px'
                        ],
                        [
                            "eid1858",
                            "top",
                            23000,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            '709px',
                            '769px'
                        ],
                        [
                            "eid1712",
                            "scaleY",
                            5000,
                            0,
                            "linear",
                            "${H_bag_appear}",
                            '0.86806',
                            '0.86806'
                        ],
                        [
                            "eid1707",
                            "scaleY",
                            55454,
                            0,
                            "linear",
                            "${H_bag_appear}",
                            '0.86806',
                            '0.86806'
                        ],
                        [
                            "eid1149",
                            "left",
                            17000,
                            0,
                            "easeOutQuad",
                            "${house_1}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1676",
                            "left",
                            44000,
                            12000,
                            "linear",
                            "${house_1}",
                            '30px',
                            '-2018px'
                        ],
                        [
                            "eid1972",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${A_cripmate}",
                            '2114px',
                            '1180px'
                        ],
                        [
                            "eid1939",
                            "top",
                            23000,
                            5000,
                            "easeInOutQuad",
                            "${C_Pisser}",
                            '1615px',
                            '762px'
                        ],
                        [
                            "eid1952",
                            "top",
                            44000,
                            12000,
                            "linear",
                            "${C_Pisser}",
                            '762px',
                            '765px'
                        ],
                        [
                            "eid1505",
                            "top",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            '509px',
                            '509px'
                        ],
                        [
                            "eid1865",
                            "top",
                            13409,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '1143px',
                            '1143px'
                        ],
                        [
                            "eid1873",
                            "top",
                            23000,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '1143px',
                            '1313px'
                        ],
                        [
                            "eid2528",
                            "top",
                            55000,
                            0,
                            "linear",
                            "${A_tv}",
                            '854px',
                            '854px'
                        ],
                            [ "eid2589", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Theodora}', [] ] ],
                            [ "eid2592", "trigger", 10000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${SFX_rumble}', [] ] ],
                            [ "eid1710", "trigger", 55454.980961894, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${H_bag_appear}', ['still'] ] ]
                    ]
                }
            },
            "Theodora": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [39, -1177, '1255px', '1800px', 'auto', 'auto'],
                            id: 'Name_sprite',
                            opacity: '0.46',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Name_sprite.png', '0px', '0px']
                        },
                        {
                            rect: [39, 3, '1255px', '1800px', 'auto', 'auto'],
                            id: 'Name_spriteCopy',
                            opacity: '0.47',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Name_sprite.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            fi: ['1', '0deg', '1', '1', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            filter: ['1', '0deg', '1', '1', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'Name_00072',
                            opacity: '0.01',
                            rect: [0, -34, '1317px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Name_0007.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1317, 299]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "name_opaque": 625,
                        "full_opacity": 1209,
                        "fade": 2000
                    },
                    data: [
                        [
                            "eid214",
                            "opacity",
                            0,
                            300,
                            "easeInOutQuad",
                            "${Name_spriteCopy}",
                            '0.47',
                            '0.15'
                        ],
                        [
                            "eid215",
                            "opacity",
                            300,
                            325,
                            "easeInOutQuad",
                            "${Name_spriteCopy}",
                            '0.15',
                            '0.47'
                        ],
                        [
                            "eid187",
                            "opacity",
                            625,
                            584,
                            "easeInOutQuad",
                            "${Name_spriteCopy}",
                            '0.47',
                            '0.4'
                        ],
                        [
                            "eid1333",
                            "opacity",
                            2000,
                            3000,
                            "easeInOutQuad",
                            "${Name_spriteCopy}",
                            '0.4',
                            '0'
                        ],
                        [
                            "eid216",
                            "opacity",
                            0,
                            300,
                            "easeInOutQuad",
                            "${Name_sprite}",
                            '0.46',
                            '0.15'
                        ],
                        [
                            "eid217",
                            "opacity",
                            300,
                            325,
                            "easeInOutQuad",
                            "${Name_sprite}",
                            '0.15',
                            '0.46'
                        ],
                        [
                            "eid130",
                            "opacity",
                            625,
                            584,
                            "easeInOutQuad",
                            "${Name_sprite}",
                            '0.46',
                            '0.4'
                        ],
                        [
                            "eid1334",
                            "opacity",
                            2000,
                            3000,
                            "easeInOutQuad",
                            "${Name_sprite}",
                            '0.4',
                            '0'
                        ],
                        [
                            "eid188",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-1177px',
                            '-1177px'
                        ],
                        [
                            "eid189",
                            "top",
                            100,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-1177px',
                            '-1476px'
                        ],
                        [
                            "eid6",
                            "top",
                            200,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-1476px',
                            '3px'
                        ],
                        [
                            "eid7",
                            "top",
                            300,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '3px',
                            '-290px'
                        ],
                        [
                            "eid8",
                            "top",
                            400,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-285px',
                            '-588px'
                        ],
                        [
                            "eid9",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-585px',
                            '-891px'
                        ],
                        [
                            "eid190",
                            "top",
                            625,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-891px',
                            '-1177px'
                        ],
                        [
                            "eid191",
                            "top",
                            725,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-1177px',
                            '-1476px'
                        ],
                        [
                            "eid192",
                            "top",
                            825,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-1476px',
                            '3px'
                        ],
                        [
                            "eid193",
                            "top",
                            925,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '3px',
                            '-290px'
                        ],
                        [
                            "eid194",
                            "top",
                            1025,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-290px',
                            '-588px'
                        ],
                        [
                            "eid195",
                            "top",
                            1125,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-588px',
                            '-891px'
                        ],
                        [
                            "eid196",
                            "top",
                            1209,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-891px',
                            '3px'
                        ],
                        [
                            "eid197",
                            "top",
                            1309,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-1177px',
                            '-1476px'
                        ],
                        [
                            "eid198",
                            "top",
                            1409,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-1476px',
                            '3px'
                        ],
                        [
                            "eid199",
                            "top",
                            1509,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '3px',
                            '-290px'
                        ],
                        [
                            "eid200",
                            "top",
                            1609,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-290px',
                            '-588px'
                        ],
                        [
                            "eid201",
                            "top",
                            1709,
                            0,
                            "linear",
                            "${Name_sprite}",
                            '-588px',
                            '-891px'
                        ],
                        [
                            "eid54",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Name_00072}",
                            '0.01',
                            '0.01'
                        ],
                        [
                            "eid129",
                            "opacity",
                            625,
                            584,
                            "easeOutQuad",
                            "${Name_00072}",
                            '0.01',
                            '1'
                        ],
                        [
                            "eid1332",
                            "opacity",
                            2000,
                            3000,
                            "easeInOutQuad",
                            "${Name_00072}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1142",
                            "filter.invert",
                            1509,
                            0,
                            "easeOutQuad",
                            "${Name_00072}",
                            '1',
                            '1'
                        ],
                        [
                            "eid168",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid169",
                            "top",
                            100,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '3px',
                            '-290px'
                        ],
                        [
                            "eid170",
                            "top",
                            200,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-290px',
                            '-588px'
                        ],
                        [
                            "eid171",
                            "top",
                            300,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-588px',
                            '-891px'
                        ],
                        [
                            "eid172",
                            "top",
                            400,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-891px',
                            '-1177px'
                        ],
                        [
                            "eid173",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-1177px',
                            '-1476px'
                        ],
                        [
                            "eid174",
                            "top",
                            625,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-1476px',
                            '3px'
                        ],
                        [
                            "eid175",
                            "top",
                            725,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '3px',
                            '-290px'
                        ],
                        [
                            "eid176",
                            "top",
                            825,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-290px',
                            '-588px'
                        ],
                        [
                            "eid177",
                            "top",
                            925,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-588px',
                            '-891px'
                        ],
                        [
                            "eid178",
                            "top",
                            1025,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-891px',
                            '-1177px'
                        ],
                        [
                            "eid179",
                            "top",
                            1125,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-1177px',
                            '-1476px'
                        ],
                        [
                            "eid180",
                            "top",
                            1209,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-1476px',
                            '3px'
                        ],
                        [
                            "eid181",
                            "top",
                            1309,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '3px',
                            '-290px'
                        ],
                        [
                            "eid182",
                            "top",
                            1409,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-290px',
                            '-588px'
                        ],
                        [
                            "eid183",
                            "top",
                            1509,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-588px',
                            '-891px'
                        ],
                        [
                            "eid184",
                            "top",
                            1609,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-891px',
                            '-1177px'
                        ],
                        [
                            "eid185",
                            "top",
                            1709,
                            0,
                            "linear",
                            "${Name_spriteCopy}",
                            '-1177px',
                            '-1476px'
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cloud.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cloud.png', '0px', '0px']
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
            "taube": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '2450px', '500px', 'auto', 'auto'],
                            id: 'ss_taube_12',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_taube_1.png', '0px', '0px']
                        },
                        {
                            rect: ['54', '40', '320px', '45px', 'auto', 'auto'],
                            source: ['media/SFX_pigeon.mp3'],
                            volume: '0',
                            id: 'SFX_pigeon',
                            type: 'audio',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 350, 500]
                        }
                    }
                },
                timeline: {
                    duration: 1292,
                    autoPlay: true,
                    labels: {
                        "taube_fett": 292
                    },
                    data: [
                        [
                            "eid66",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid67",
                            "left",
                            83,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '0px',
                            '-350px'
                        ],
                        [
                            "eid68",
                            "left",
                            167,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-350px',
                            '-700px'
                        ],
                        [
                            "eid69",
                            "left",
                            292,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-700px',
                            '-1050px'
                        ],
                        [
                            "eid70",
                            "left",
                            375,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-1050px',
                            '-1400px'
                        ],
                        [
                            "eid71",
                            "left",
                            459,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-1400px',
                            '-1750px'
                        ],
                        [
                            "eid72",
                            "left",
                            542,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-1750px',
                            '-2100px'
                        ],
                        [
                            "eid73",
                            "left",
                            625,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-2100px',
                            '-1400px'
                        ],
                        [
                            "eid74",
                            "left",
                            709,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-1400px',
                            '-1750px'
                        ],
                        [
                            "eid75",
                            "left",
                            792,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-1750px',
                            '-2100px'
                        ],
                        [
                            "eid76",
                            "left",
                            875,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-2100px',
                            '-1400px'
                        ],
                        [
                            "eid77",
                            "left",
                            959,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-1400px',
                            '-1750px'
                        ],
                        [
                            "eid78",
                            "left",
                            1042,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-1750px',
                            '-2100px'
                        ],
                        [
                            "eid79",
                            "left",
                            1125,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-2100px',
                            '-1400px'
                        ],
                        [
                            "eid80",
                            "left",
                            1209,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-1400px',
                            '-1750px'
                        ],
                        [
                            "eid81",
                            "left",
                            1292,
                            0,
                            "easeInOutQuad",
                            "${ss_taube_12}",
                            '-1750px',
                            '-2100px'
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cloud.png', '0px', '0px']
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
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', 1, 1], ['50%', '50%']]
                        },
                        {
                            rect: [142, 102, 500, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'cloud_22Copy',
                            symbolName: 'cloud_2',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', '1', 1], ['50%', '50%']]
                        },
                        {
                            rect: [470, 16, 500, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'cloud_12Copy',
                            symbolName: 'cloud_1',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1', '1', 1], ['50%', '50%']]
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
            "Title_Intro": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['934px', '1214px', 1104, 302, 'auto', 'auto'],
                            id: 'cloud_clusterCopy4',
                            symbolName: 'cloud_cluster',
                            autoOrient: false,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.43478', '0.43478', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            rect: ['-1113px', '900px', 1104, 302, 'auto', 'auto'],
                            id: 'cloud_clusterCopy2',
                            symbolName: 'cloud_cluster',
                            autoOrient: false,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.18114', '-1.1411', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            rect: [3458, 267, 1104, 302, 'auto', 'auto'],
                            id: 'cloud_cluster',
                            symbolName: 'cloud_cluster',
                            autoOrient: 'true',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.86322', '-0.86322', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            rect: ['-884px', '186px', 1104, 302, 'auto', 'auto'],
                            id: 'cloud_clusterCopy3',
                            symbolName: 'cloud_cluster',
                            autoOrient: false,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.58423', '-0.58423', 1], ['50%', '50%']]
                        },
                        {
                            type: 'rect',
                            rect: [3276, 267, 1104, 302, 'auto', 'auto'],
                            id: 'cloud_clusterCopy',
                            symbolName: 'cloud_cluster',
                            autoOrient: false,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.0317', '1.0317', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 2048, 1536]
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
                            "eid1062",
                            "scaleY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${cloud_clusterCopy3}",
                            '-0.58423',
                            '-0.58423'
                        ],
                        [
                            "eid1821",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_cluster}",
                            '-0.86322',
                            '-0.86322'
                        ],
                        [
                            "eid1830",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '1.18114',
                            '0.95'
                        ],
                        [
                            "eid1095",
                            "location",
                            0,
                            13386,
                            "linear",
                            "${cloud_clusterCopy4}",
                            [[1473.74, 1364.65, -2265.5, 0, 0, 0,0],[-262.13, 1364.65, 0, 0, 0, 0,1735.87]]
                        ],
                        [
                            "eid1098",
                            "location",
                            13629,
                            6371,
                            "linear",
                            "${cloud_clusterCopy4}",
                            [[2288, 1364.65, 0, 0, 0, 0,0],[1473.74, 1364.65, 0, 0, 0, 0,814.26]]
                        ],
                        [
                            "eid1061",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${cloud_clusterCopy3}",
                            '0.58423',
                            '0.58423'
                        ],
                        [
                            "eid1831",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy2}",
                            '-1.1411',
                            '-0.95'
                        ],
                        [
                            "eid1077",
                            "location",
                            0,
                            13000,
                            "linear",
                            "${cloud_clusterCopy3}",
                            [[618.1, 336.78, 2349.22, 0, 0, 0,0],[2383.63, 336.78, 0, 0, 0, 0,1765.53]]
                        ],
                        [
                            "eid1080",
                            "location",
                            13386,
                            6614,
                            "linear",
                            "${cloud_clusterCopy3}",
                            [[-331.12, 336.78, 0, 0, 0, 0,0],[618.1, 336.78, 0, 0, 0, 0,949.22]]
                        ],
                        [
                            "eid1090",
                            "location",
                            0,
                            16341,
                            "linear",
                            "${cloud_clusterCopy2}",
                            [[-352.92, 1051, 2093.13, 0, 0, 0,0],[2765, 1051, 0, 0, 0, 0,3117.92]]
                        ],
                        [
                            "eid1093",
                            "location",
                            17000,
                            3000,
                            "linear",
                            "${cloud_clusterCopy2}",
                            [[-678.75, 1051, 0, 0, 0, 0,0],[-352.92, 1051, 0, 0, 0, 0,325.83]]
                        ],
                        [
                            "eid1115",
                            "location",
                            0,
                            17537,
                            "linear",
                            "${cloud_clusterCopy}",
                            [[2284.05, 60.25, 0, 0, 0, 0,0],[-645.75, 60.25, 0, 0, 0, 0,2929.8]]
                        ],
                        [
                            "eid1121",
                            "location",
                            18000,
                            2000,
                            "linear",
                            "${cloud_clusterCopy}",
                            [[2775.88, 24.25, 0, 0, 0, 0,0],[2279.13, 24.25, 0, 0, 0, 0,496.75]]
                        ],
                        [
                            "eid1820",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${cloud_cluster}",
                            '-0.86322',
                            '-0.86322'
                        ],
                        [
                            "eid1086",
                            "location",
                            0,
                            10000,
                            "linear",
                            "${cloud_cluster}",
                            [[1027.38, 711.75, -2397.37, 0, 0, 0,0],[-570.87, 711.75, 0, 0, 0, 0,1598.25]]
                        ],
                        [
                            "eid1089",
                            "location",
                            10335,
                            9665,
                            "linear",
                            "${cloud_cluster}",
                            [[2599.88, 711.75, 0, 0, 0, 0,0],[1027.38, 711.75, 0, 0, 0, 0,1572.5]]
                        ],
                        [
                            "eid1828",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '1.0317',
                            '1.0317'
                        ],
                        [
                            "eid1112",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy4}",
                            '0.43478',
                            '0.43478'
                        ],
                        [
                            "eid2165",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${cloud_clusterCopy}",
                            '1.0317',
                            '1.0317'
                        ]
                    ]
                }
            },
            "plasticbag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1200px', '511px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'ss_plasticbag',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_plasticbag.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 400, 511]
                        }
                    }
                },
                timeline: {
                    duration: 867,
                    autoPlay: true,
                    data: [
                        [
                            "eid918",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${ss_plasticbag}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid919",
                            "left",
                            67,
                            0,
                            "easeInOutQuad",
                            "${ss_plasticbag}",
                            '0px',
                            '-400px'
                        ],
                        [
                            "eid920",
                            "left",
                            333,
                            0,
                            "easeInOutQuad",
                            "${ss_plasticbag}",
                            '-400px',
                            '-800px'
                        ],
                        [
                            "eid921",
                            "left",
                            400,
                            0,
                            "easeInOutQuad",
                            "${ss_plasticbag}",
                            '-800px',
                            '0px'
                        ],
                        [
                            "eid922",
                            "left",
                            600,
                            0,
                            "easeInOutQuad",
                            "${ss_plasticbag}",
                            '0px',
                            '-400px'
                        ],
                        [
                            "eid941",
                            "left",
                            667,
                            33,
                            "easeInOutQuad",
                            "${ss_plasticbag}",
                            '800px',
                            '-800px'
                        ],
                        [
                            "eid943",
                            "left",
                            733,
                            0,
                            "easeInOutQuad",
                            "${ss_plasticbag}",
                            '-800px',
                            '-800px'
                        ],
                        [
                            "eid925",
                            "left",
                            800,
                            0,
                            "easeInOutQuad",
                            "${ss_plasticbag}",
                            '-800px',
                            '-800px'
                        ]
                    ]
                }
            },
            "H_still_leftright": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-1, 5, '1200px', '500px', 'auto', 'auto'],
                            id: 'ss_still_leftright_500px',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_still_leftright_500px.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 172, 500]
                        }
                    }
                },
                timeline: {
                    duration: 15333,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid947",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-1px',
                            '-173px'
                        ],
                        [
                            "eid950",
                            "left",
                            467,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-348px',
                            '-515px'
                        ],
                        [
                            "eid952",
                            "left",
                            533,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-687px',
                            '-859px'
                        ],
                        [
                            "eid953",
                            "left",
                            600,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-858px',
                            '-1028px'
                        ],
                        [
                            "eid2305",
                            "left",
                            1647,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-1028px',
                            '-515px'
                        ],
                        [
                            "eid2306",
                            "left",
                            1712,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-515px',
                            '-348px'
                        ],
                        [
                            "eid2307",
                            "left",
                            1779,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-348px',
                            '-173px'
                        ],
                        [
                            "eid2384",
                            "left",
                            3867,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-173px',
                            '-515px'
                        ],
                        [
                            "eid2385",
                            "left",
                            3933,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-515px',
                            '-859px'
                        ],
                        [
                            "eid2386",
                            "left",
                            4000,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-859px',
                            '-1028px'
                        ],
                        [
                            "eid2387",
                            "left",
                            7567,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-1028px',
                            '-515px'
                        ],
                        [
                            "eid2388",
                            "left",
                            7632,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-515px',
                            '-348px'
                        ],
                        [
                            "eid2389",
                            "left",
                            7699,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-348px',
                            '-173px'
                        ],
                        [
                            "eid2390",
                            "left",
                            8867,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-173px',
                            '-515px'
                        ],
                        [
                            "eid2391",
                            "left",
                            8933,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-515px',
                            '-859px'
                        ],
                        [
                            "eid2392",
                            "left",
                            9000,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-859px',
                            '-1028px'
                        ],
                        [
                            "eid2393",
                            "left",
                            13000,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-1028px',
                            '-515px'
                        ],
                        [
                            "eid2394",
                            "left",
                            13065,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-515px',
                            '-348px'
                        ],
                        [
                            "eid2395",
                            "left",
                            13132,
                            0,
                            "easeInOutQuad",
                            "${ss_still_leftright_500px}",
                            '-348px',
                            '-173px'
                        ]
                    ]
                }
            },
            "H_bag_appear": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '7140px', '1152px', 'auto', 'auto'],
                            id: 'ss_bag_appear_576px',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_bag_appear_576px.png', '0px', '0px']
                        },
                        {
                            rect: ['-2px', '2px', '516px', '584px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 510, 576]
                        }
                    }
                },
                timeline: {
                    duration: 1733,
                    autoPlay: false,
                    labels: {
                        "still": 1533
                    },
                    data: [
                        [
                            "eid969",
                            "top",
                            933,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '0px',
                            '-576px'
                        ],
                        [
                            "eid954",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid955",
                            "left",
                            67,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '0px',
                            '-510px'
                        ],
                        [
                            "eid956",
                            "left",
                            133,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-510px',
                            '-1020px'
                        ],
                        [
                            "eid957",
                            "left",
                            200,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-1020px',
                            '-1530px'
                        ],
                        [
                            "eid958",
                            "left",
                            267,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-1530px',
                            '-2040px'
                        ],
                        [
                            "eid959",
                            "left",
                            333,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '2040px',
                            '-2550px'
                        ],
                        [
                            "eid960",
                            "left",
                            400,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-2550px',
                            '-3060px'
                        ],
                        [
                            "eid961",
                            "left",
                            467,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-3060px',
                            '-3570px'
                        ],
                        [
                            "eid962",
                            "left",
                            533,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-3570px',
                            '-4080px'
                        ],
                        [
                            "eid963",
                            "left",
                            600,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '4080px',
                            '-4590px'
                        ],
                        [
                            "eid964",
                            "left",
                            667,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-4590px',
                            '-5100px'
                        ],
                        [
                            "eid965",
                            "left",
                            733,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-5100px',
                            '-5610px'
                        ],
                        [
                            "eid966",
                            "left",
                            800,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-5610px',
                            '-6120px'
                        ],
                        [
                            "eid967",
                            "left",
                            867,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-6120px',
                            '-6630px'
                        ],
                        [
                            "eid970",
                            "left",
                            933,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-6630px',
                            '-6630px'
                        ],
                        [
                            "eid971",
                            "left",
                            1000,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-6630px',
                            '-6120px'
                        ],
                        [
                            "eid972",
                            "left",
                            1067,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-6120px',
                            '-5610px'
                        ],
                        [
                            "eid973",
                            "left",
                            1133,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-5610px',
                            '-5100px'
                        ],
                        [
                            "eid974",
                            "left",
                            1200,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-5100px',
                            '-4590px'
                        ],
                        [
                            "eid975",
                            "left",
                            1267,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-4590px',
                            '-4080px'
                        ],
                        [
                            "eid976",
                            "left",
                            1333,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-4080px',
                            '-3580px'
                        ],
                        [
                            "eid977",
                            "left",
                            1400,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-3570px',
                            '-3070px'
                        ],
                        [
                            "eid978",
                            "left",
                            1467,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-3055px',
                            '-2560px'
                        ],
                        [
                            "eid979",
                            "left",
                            1533,
                            0,
                            "easeInOutQuad",
                            "${ss_bag_appear_576px}",
                            '-2557px',
                            '-2050px'
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
                            rect: [-3, 0, '2880px', '1000px', 'auto', 'auto'],
                            id: 'ss_H_walk3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_H_walk.png', '0px', '0px']
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
                    duration: 1133,
                    autoPlay: false,
                    labels: {
                        "turn": 0,
                        "loop": 267
                    },
                    data: [
                        [
                            "eid1022",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-3px',
                            '-3px'
                        ],
                        [
                            "eid1024",
                            "left",
                            67,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-3px',
                            '-329px'
                        ],
                        [
                            "eid1025",
                            "left",
                            133,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-326px',
                            '-645px'
                        ],
                        [
                            "eid1026",
                            "left",
                            200,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-638px',
                            '-951px'
                        ],
                        [
                            "eid1027",
                            "left",
                            267,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-936px',
                            '-1266px'
                        ],
                        [
                            "eid1028",
                            "left",
                            333,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1258px',
                            '-1594px'
                        ],
                        [
                            "eid1029",
                            "left",
                            400,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1594px',
                            '-1909px'
                        ],
                        [
                            "eid1030",
                            "left",
                            467,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1920px',
                            '-2234px'
                        ],
                        [
                            "eid1031",
                            "left",
                            533,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-2231px',
                            '-2549px'
                        ],
                        [
                            "eid1037",
                            "left",
                            667,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-2546px',
                            '-2234px'
                        ],
                        [
                            "eid1038",
                            "left",
                            733,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-2231px',
                            '-1909px'
                        ],
                        [
                            "eid1039",
                            "left",
                            800,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1909px',
                            '-1593px'
                        ],
                        [
                            "eid1040",
                            "left",
                            867,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1593px',
                            '-1272px'
                        ],
                        [
                            "eid1041",
                            "left",
                            933,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-1266px',
                            '-951px'
                        ],
                        [
                            "eid1042",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-951px',
                            '-640px'
                        ],
                        [
                            "eid1043",
                            "left",
                            1067,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '-642px',
                            '-308px'
                        ],
                        [
                            "eid1023",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1036",
                            "top",
                            600,
                            0,
                            "linear",
                            "${ss_H_walk3}",
                            '0px',
                            '-500px'
                        ]
                    ]
                }
            },
            "bg_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'paper_bg_02',
                            type: 'image',
                            rect: ['0', '0', '2050px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/paper_bg_0.png', '0px', '0px']
                        },
                        {
                            id: 'houses_bg_1',
                            type: 'image',
                            rect: [201, 110, '1096px', '593px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/houses_bg_1.png', '0px', '0px']
                        },
                        {
                            id: 'house_3',
                            type: 'image',
                            rect: [362, 504, '402px', '507px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/house_3.png', '0px', '0px']
                        },
                        {
                            id: 'house_1',
                            type: 'image',
                            rect: [30, 381, '372px', '699px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/house_1.png', '0px', '0px']
                        },
                        {
                            id: 'house_2',
                            type: 'image',
                            rect: [1156, 381, '448px', '679px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/house_2.png', '0px', '0px']
                        },
                        {
                            id: 'tree_1',
                            type: 'image',
                            rect: [740, 668, '362px', '381px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tree_1.png', '0px', '0px']
                        },
                        {
                            id: 'bistro_0',
                            type: 'image',
                            rect: [1586, 720, '492px', '355px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bistro_0.png', '0px', '0px']
                        },
                        {
                            id: 'BG_1',
                            type: 'image',
                            rect: [160, 150, '2028px', '973px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG_1.png', '0px', '0px']
                        },
                        {
                            id: 'BG_0',
                            type: 'image',
                            rect: [0, 973, '4096px', '567px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG_0.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
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
                            rect: [0, 0, '1536px', '72px', 'auto', 'auto'],
                            id: 'text_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/text_01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1518, 80]
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
                            "eid2577",
                            "opacity",
                            0,
                            822,
                            "easeInOutBounce",
                            "${text_01}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid1346",
                            "opacity",
                            822,
                            129,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid1719",
                            "opacity",
                            951,
                            140,
                            "easeOutBounce",
                            "${text_01}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid1721",
                            "opacity",
                            1091,
                            106,
                            "easeOutBounce",
                            "${text_01}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid1722",
                            "opacity",
                            1197,
                            61,
                            "easeOutBounce",
                            "${text_01}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid1349",
                            "opacity",
                            1258,
                            164,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid1723",
                            "opacity",
                            1422,
                            67,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid1724",
                            "opacity",
                            1489,
                            66,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid1351",
                            "opacity",
                            1555,
                            200,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid1352",
                            "opacity",
                            1755,
                            67,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid1354",
                            "opacity",
                            1955,
                            96,
                            "easeInBounce",
                            "${text_01}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid1355",
                            "opacity",
                            2051,
                            171,
                            "easeOutBounce",
                            "${text_01}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid1356",
                            "opacity",
                            2222,
                            67,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid1357",
                            "opacity",
                            2289,
                            34,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid1358",
                            "opacity",
                            2323,
                            70,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid1359",
                            "opacity",
                            2393,
                            55,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid1360",
                            "opacity",
                            2448,
                            41,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid1361",
                            "opacity",
                            2489,
                            38,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid1363",
                            "opacity",
                            2527,
                            64,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid1365",
                            "opacity",
                            2822,
                            800,
                            "easeInOutBounce",
                            "${text_01}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid1368",
                            "opacity",
                            3822,
                            0,
                            "easeInOutBounce",
                            "${text_01}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1370",
                            "opacity",
                            4022,
                            578,
                            "easeInOutBounce",
                            "${text_01}",
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
                            rect: ['0', 10, '1115px', '71px', 'auto', 'auto'],
                            id: 'text_022',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/text_02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1120, 80]
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
                            "eid2579",
                            "opacity",
                            0,
                            482,
                            "easeInOutBounce",
                            "${text_022}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid2396",
                            "opacity",
                            482,
                            129,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid2397",
                            "opacity",
                            611,
                            140,
                            "easeOutBounce",
                            "${text_022}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid2398",
                            "opacity",
                            751,
                            106,
                            "easeOutBounce",
                            "${text_022}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid2399",
                            "opacity",
                            857,
                            61,
                            "easeOutBounce",
                            "${text_022}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid2400",
                            "opacity",
                            918,
                            164,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid2401",
                            "opacity",
                            1082,
                            67,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid2402",
                            "opacity",
                            1149,
                            66,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid2403",
                            "opacity",
                            1215,
                            200,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid2404",
                            "opacity",
                            1415,
                            67,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid2405",
                            "opacity",
                            1615,
                            96,
                            "easeInBounce",
                            "${text_022}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid2406",
                            "opacity",
                            1711,
                            171,
                            "easeOutBounce",
                            "${text_022}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid2407",
                            "opacity",
                            1882,
                            67,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2408",
                            "opacity",
                            1949,
                            34,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid2409",
                            "opacity",
                            1983,
                            70,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid2410",
                            "opacity",
                            2053,
                            55,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid2411",
                            "opacity",
                            2108,
                            41,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid2412",
                            "opacity",
                            2149,
                            38,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2413",
                            "opacity",
                            2187,
                            64,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid2414",
                            "opacity",
                            2482,
                            800,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid2415",
                            "opacity",
                            3482,
                            0,
                            "easeInOutBounce",
                            "${text_022}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2586",
                            "opacity",
                            3682,
                            518,
                            "easeInOutBounce",
                            "${text_022}",
                            '0.5',
                            '0'
                        ]
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
                            rect: ['0', 5, '1092px', '79px', 'auto', 'auto'],
                            id: 'text_032',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/text_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1090, 80]
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
                            "eid2581",
                            "opacity",
                            0,
                            452,
                            "easeInOutBounce",
                            "${text_032}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid2480",
                            "opacity",
                            452,
                            129,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid2481",
                            "opacity",
                            581,
                            140,
                            "easeOutBounce",
                            "${text_032}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid2482",
                            "opacity",
                            721,
                            106,
                            "easeOutBounce",
                            "${text_032}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid2483",
                            "opacity",
                            827,
                            61,
                            "easeOutBounce",
                            "${text_032}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid2484",
                            "opacity",
                            888,
                            164,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid2485",
                            "opacity",
                            1052,
                            67,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid2486",
                            "opacity",
                            1119,
                            66,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid2487",
                            "opacity",
                            1185,
                            200,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid2488",
                            "opacity",
                            1385,
                            67,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid2489",
                            "opacity",
                            1585,
                            96,
                            "easeInBounce",
                            "${text_032}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid2490",
                            "opacity",
                            1681,
                            171,
                            "easeOutBounce",
                            "${text_032}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid2491",
                            "opacity",
                            1852,
                            67,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2492",
                            "opacity",
                            1919,
                            34,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid2493",
                            "opacity",
                            1953,
                            70,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid2494",
                            "opacity",
                            2023,
                            55,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid2495",
                            "opacity",
                            2078,
                            41,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid2496",
                            "opacity",
                            2119,
                            38,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2497",
                            "opacity",
                            2157,
                            64,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid2498",
                            "opacity",
                            2452,
                            800,
                            "easeInOutBounce",
                            "${text_032}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid2499",
                            "opacity",
                            3452,
                            0,
                            "easeInOutBounce",
                            "${text_032}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2587",
                            "opacity",
                            3652,
                            481,
                            "easeInOutBounce",
                            "${text_032}",
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
                            rect: ['0', -2, '718px', '81px', 'auto', 'auto'],
                            id: 'text_042',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/text_04.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 720, 80]
                        }
                    }
                },
                timeline: {
                    duration: 4445,
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
                            "eid2583",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${text_042}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid2459",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid2460",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${text_042}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid2461",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${text_042}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid2462",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${text_042}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid2463",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid2464",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid2465",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid2466",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid2467",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid2468",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${text_042}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid2469",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${text_042}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid2470",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2471",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid2472",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid2473",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid2474",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid2475",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2476",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid2477",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${text_042}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid2478",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${text_042}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2588",
                            "opacity",
                            3667,
                            777,
                            "easeInOutBounce",
                            "${text_042}",
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
                            rect: ['0', '0', '1338px', '79px', 'auto', 'auto'],
                            id: 'text_052',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/text_05.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1360, 80]
                        }
                    }
                },
                timeline: {
                    duration: 4105,
                    autoPlay: false,
                    labels: {
                        "fade_flimmer": 438,
                        "fade_still": 1571,
                        "still_loop": 1838,
                        "opaque": 2438,
                        "opaque_loop": 3238,
                        "fade": 3638
                    },
                    data: [
                        [
                            "eid2585",
                            "opacity",
                            0,
                            438,
                            "easeInOutBounce",
                            "${text_052}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid2501",
                            "opacity",
                            438,
                            129,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid2502",
                            "opacity",
                            567,
                            140,
                            "easeOutBounce",
                            "${text_052}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid2503",
                            "opacity",
                            707,
                            106,
                            "easeOutBounce",
                            "${text_052}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid2504",
                            "opacity",
                            813,
                            61,
                            "easeOutBounce",
                            "${text_052}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid2505",
                            "opacity",
                            874,
                            164,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid2506",
                            "opacity",
                            1038,
                            67,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid2507",
                            "opacity",
                            1105,
                            66,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid2508",
                            "opacity",
                            1171,
                            200,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid2509",
                            "opacity",
                            1371,
                            67,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid2510",
                            "opacity",
                            1571,
                            96,
                            "easeInBounce",
                            "${text_052}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid2511",
                            "opacity",
                            1667,
                            171,
                            "easeOutBounce",
                            "${text_052}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid2512",
                            "opacity",
                            1838,
                            67,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2513",
                            "opacity",
                            1905,
                            34,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid2514",
                            "opacity",
                            1939,
                            70,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid2515",
                            "opacity",
                            2009,
                            55,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid2516",
                            "opacity",
                            2064,
                            41,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid2517",
                            "opacity",
                            2105,
                            38,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2518",
                            "opacity",
                            2143,
                            64,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid2519",
                            "opacity",
                            2438,
                            800,
                            "easeInOutBounce",
                            "${text_052}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid2520",
                            "opacity",
                            3438,
                            0,
                            "easeInOutBounce",
                            "${text_052}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2521",
                            "opacity",
                            3638,
                            467,
                            "easeInOutBounce",
                            "${text_052}",
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
                            fill: ['rgba(0,0,0,0)', 'images/dust_icon.png', '0px', '0px']
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
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            symbolName: 'dust_icon',
                            overflow: 'hidden',
                            id: 'dust_icon2',
                            opacity: '0.06',
                            type: 'rect',
                            rect: [7, -7, 179, 193, 'auto', 'auto']
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
                    labels: {
                        "fade_flimmer": 0,
                        "fade_still": 1133,
                        "still_loop": 1400,
                        "opaque": 2000,
                        "opaque_loop": 2400,
                        "fade": 2800
                    },
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
                            "eid1591",
                            "opacity",
                            0,
                            129,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.06',
                            '0.01'
                        ],
                        [
                            "eid1592",
                            "opacity",
                            129,
                            140,
                            "easeInBounce",
                            "${dust_icon2}",
                            '0.01',
                            '0.05'
                        ],
                        [
                            "eid1593",
                            "opacity",
                            269,
                            167,
                            "easeOutBounce",
                            "${dust_icon2}",
                            '0.05',
                            '0.03'
                        ],
                        [
                            "eid1594",
                            "opacity",
                            436,
                            164,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.03',
                            '0.04'
                        ],
                        [
                            "eid1595",
                            "opacity",
                            630,
                            0,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.04',
                            '0.04'
                        ],
                        [
                            "eid1596",
                            "opacity",
                            733,
                            200,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.040000',
                            '0.06'
                        ],
                        [
                            "eid1597",
                            "opacity",
                            933,
                            67,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.060000',
                            '0.1'
                        ],
                        [
                            "eid1598",
                            "opacity",
                            1133,
                            96,
                            "easeInBounce",
                            "${dust_icon2}",
                            '0.100000',
                            '0.146612'
                        ],
                        [
                            "eid1599",
                            "opacity",
                            1229,
                            171,
                            "easeOutBounce",
                            "${dust_icon2}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid1600",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid1601",
                            "opacity",
                            1467,
                            34,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid1602",
                            "opacity",
                            1501,
                            70,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid1603",
                            "opacity",
                            1571,
                            55,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid1604",
                            "opacity",
                            1626,
                            41,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid1605",
                            "opacity",
                            1667,
                            38,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid1606",
                            "opacity",
                            1705,
                            64,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid1607",
                            "opacity",
                            2000,
                            400,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid1608",
                            "opacity",
                            2600,
                            0,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1609",
                            "opacity",
                            2800,
                            467,
                            "easeInOutBounce",
                            "${dust_icon2}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid1549",
                            "rotateZ",
                            0,
                            0,
                            "easeInOutCubic",
                            "${dust_icon2}",
                            '90deg',
                            '90deg'
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
            "C_Esser": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '840px', '480px', 'auto', 'auto'],
                            id: 'ss_esser',
                            opacity: '0.75',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_esser.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 200, 480]
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
                            "eid1798",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ss_esser}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1799",
                            "left",
                            67,
                            0,
                            "linear",
                            "${ss_esser}",
                            '0px',
                            '-210px'
                        ],
                        [
                            "eid1800",
                            "left",
                            133,
                            0,
                            "linear",
                            "${ss_esser}",
                            '-210px',
                            '-420px'
                        ],
                        [
                            "eid1801",
                            "left",
                            200,
                            0,
                            "linear",
                            "${ss_esser}",
                            '-420px',
                            '-630px'
                        ],
                        [
                            "eid2033",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ss_esser}",
                            '0.75',
                            '0.75'
                        ]
                    ]
                }
            },
            "C_Pisser": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '690px', '452px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'ss_pisser',
                            opacity: '0.8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ss_pisser.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 230, 452]
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
                            "eid1901",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${ss_pisser}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1902",
                            "left",
                            67,
                            0,
                            "easeInOutQuad",
                            "${ss_pisser}",
                            '0px',
                            '-230px'
                        ],
                        [
                            "eid1903",
                            "left",
                            133,
                            0,
                            "easeInOutQuad",
                            "${ss_pisser}",
                            '-230px',
                            '-458px'
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
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/disposable/s_cripmate.png', '0px', '0px']
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
                            '0.9',
                            '0.9'
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
            "A_trash_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '705px', '900px', 'auto', 'auto'],
                            type: 'image',
                            id: 'ss_trash_1',
                            opacity: '0.9',
                            clip: 'rect(0px 700.5224609375px 900px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/disposable/ss_trash_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 705, 300]
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
                            "eid1987",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_trash_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1988",
                            "top",
                            67,
                            0,
                            "linear",
                            "${ss_trash_1}",
                            '0px',
                            '-300px'
                        ],
                        [
                            "eid1989",
                            "top",
                            133,
                            0,
                            "linear",
                            "${ss_trash_1}",
                            '-300px',
                            '-600px'
                        ],
                        [
                            "eid2303",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${ss_trash_1}",
                            [0,700.5224609375,900,0],
                            [0,700.5224609375,900,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid2035",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ss_trash_1}",
                            '0.9',
                            '0.9'
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
                            fill: ['rgba(0,0,0,0)', 'images/disposable/ss_paperball.png', '0px', '0px']
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
            "preloader": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            opacity: '1',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [0, 0, '2055px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2055, 1536]
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
            "B_taube2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '500px', '2971px', 'auto', 'auto'],
                            id: 'ss_taube_2',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/disposable/ss_taube_2.png', '0px', '0px']
                        },
                        {
                            rect: ['54', '40', '320px', '45px', 'auto', 'auto'],
                            source: ['media/SFX_pigeon.mp3'],
                            volume: '0',
                            id: 'SFX_pigeon',
                            type: 'audio',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 500, 430]
                        }
                    }
                },
                timeline: {
                    duration: 1867,
                    autoPlay: true,
                    labels: {
                        "loop": 0,
                        "touch": 533
                    },
                    data: [
                        [
                            "eid2051",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2052",
                            "top",
                            67,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '0px',
                            '-423px'
                        ],
                        [
                            "eid2053",
                            "top",
                            133,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-423px',
                            '-846px'
                        ],
                        [
                            "eid2121",
                            "top",
                            533,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-846px',
                            '-1274px'
                        ],
                        [
                            "eid2124",
                            "top",
                            600,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-1274px',
                            '-1696px'
                        ],
                        [
                            "eid2123",
                            "top",
                            667,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-1696px',
                            '-2121px'
                        ],
                        [
                            "eid2122",
                            "top",
                            733,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2121px',
                            '-2545px'
                        ],
                        [
                            "eid2150",
                            "top",
                            800,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2545px',
                            '-1696px'
                        ],
                        [
                            "eid2151",
                            "top",
                            867,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-1696px',
                            '-2121px'
                        ],
                        [
                            "eid2152",
                            "top",
                            933,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2121px',
                            '-2545px'
                        ],
                        [
                            "eid2153",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2545px',
                            '-1696px'
                        ],
                        [
                            "eid2154",
                            "top",
                            1067,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-1696px',
                            '-2121px'
                        ],
                        [
                            "eid2155",
                            "top",
                            1133,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2121px',
                            '-2545px'
                        ],
                        [
                            "eid2156",
                            "top",
                            1200,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2545px',
                            '-1696px'
                        ],
                        [
                            "eid2157",
                            "top",
                            1267,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-1696px',
                            '-2121px'
                        ],
                        [
                            "eid2158",
                            "top",
                            1333,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2121px',
                            '-2545px'
                        ],
                        [
                            "eid2159",
                            "top",
                            1400,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2545px',
                            '-1696px'
                        ],
                        [
                            "eid2160",
                            "top",
                            1467,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-1696px',
                            '-2121px'
                        ],
                        [
                            "eid2161",
                            "top",
                            1533,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2121px',
                            '-2545px'
                        ],
                        [
                            "eid2162",
                            "top",
                            1600,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2545px',
                            '-1696px'
                        ],
                        [
                            "eid2163",
                            "top",
                            1667,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-1696px',
                            '-2121px'
                        ],
                        [
                            "eid2164",
                            "top",
                            1733,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2121px',
                            '-2545px'
                        ],
                        [
                            "eid2137",
                            "top",
                            1800,
                            0,
                            "linear",
                            "${ss_taube_2}",
                            '-2545px',
                            '-1274px'
                        ]
                    ]
                }
            },
            "SFX_wind": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            autoplay: 'autoplay',
                            rect: [0, 0, '320px', '45px', 'auto', 'auto'],
                            source: ['media/SFX_windLoop.mp3'],
                            volume: '0.50000028571429',
                            id: 'SFX_windLoop',
                            loop: 'loop',
                            type: 'audio',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 0, 0]
                        }
                    }
                },
                timeline: {
                    duration: 40255,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid2239",
                            "volume",
                            0,
                            0,
                            "linear",
                            "${SFX_windLoop}",
                            '0.50000028571429',
                            '0.50000028571429'
                        ],
                            [ "eid2214", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${SFX_windLoop}', [] ] ]
                    ]
                }
            },
            "A_trash_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '342px', '900px', 'auto', 'auto'],
                            id: 'ss_trash_2',
                            opacity: '0.9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/disposable/ss_trash_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 342, 300]
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
                            "eid2260",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ss_trash_2}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid2254",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ss_trash_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2255",
                            "top",
                            67,
                            0,
                            "linear",
                            "${ss_trash_2}",
                            '0px',
                            '-300px'
                        ],
                        [
                            "eid2256",
                            "top",
                            133,
                            0,
                            "linear",
                            "${ss_trash_2}",
                            '-300px',
                            '-600px'
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
                            fill: ['rgba(0,0,0,0)', 'images/disposable/ss_trash_3.png', '0px', '0px']
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
            "dust_button_invert": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            overflow: 'hidden',
                            type: 'rect',
                            symbolName: 'dust_icon_invert',
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'dust_icon_invert3',
                            opacity: '0.06',
                            rect: [7, -7, 179, 193, 'auto', 'auto'],
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
                    labels: {
                        "fade_flimmer": 0,
                        "fade_still": 1133,
                        "still_loop": 1400,
                        "opaque": 2000,
                        "opaque_loop": 2400,
                        "fade": 2800
                    },
                    data: [
                        [
                            "eid2376",
                            "left",
                            8409,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert3}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid2354",
                            "top",
                            8409,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert3}",
                            '-7px',
                            '-7px'
                        ],
                        [
                            "eid2377",
                            "filter.invert",
                            0,
                            0,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2355",
                            "rotateZ",
                            0,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert3}",
                            '90deg',
                            '90deg'
                        ],
                        [
                            "eid2357",
                            "opacity",
                            0,
                            129,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.06',
                            '0.01'
                        ],
                        [
                            "eid2358",
                            "opacity",
                            129,
                            140,
                            "easeInBounce",
                            "${dust_icon_invert3}",
                            '0.01',
                            '0.05'
                        ],
                        [
                            "eid2359",
                            "opacity",
                            269,
                            167,
                            "easeOutBounce",
                            "${dust_icon_invert3}",
                            '0.05',
                            '0.03'
                        ],
                        [
                            "eid2360",
                            "opacity",
                            436,
                            164,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.03',
                            '0.04'
                        ],
                        [
                            "eid2361",
                            "opacity",
                            630,
                            0,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.04',
                            '0.04'
                        ],
                        [
                            "eid2362",
                            "opacity",
                            733,
                            200,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.040000',
                            '0.06'
                        ],
                        [
                            "eid2363",
                            "opacity",
                            933,
                            67,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.060000',
                            '0.1'
                        ],
                        [
                            "eid2364",
                            "opacity",
                            1133,
                            96,
                            "easeInBounce",
                            "${dust_icon_invert3}",
                            '0.100000',
                            '0.146612'
                        ],
                        [
                            "eid2365",
                            "opacity",
                            1229,
                            171,
                            "easeOutBounce",
                            "${dust_icon_invert3}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid2366",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2367",
                            "opacity",
                            1467,
                            34,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid2368",
                            "opacity",
                            1501,
                            70,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid2369",
                            "opacity",
                            1571,
                            55,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid2370",
                            "opacity",
                            1626,
                            41,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid2371",
                            "opacity",
                            1667,
                            38,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid2372",
                            "opacity",
                            1705,
                            64,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid2373",
                            "opacity",
                            2000,
                            400,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid2374",
                            "opacity",
                            2600,
                            0,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2375",
                            "opacity",
                            2800,
                            467,
                            "easeInOutBounce",
                            "${dust_icon_invert3}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            },
            "dust_icon_invert": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [50, '-1', '1242px', '193px', 'auto', 'auto'],
                            id: 'dust_icon_invert2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dust_icon_invert.png', '0px', '0px']
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
                            "eid2353",
                            "scaleY",
                            0,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2346",
                            "left",
                            0,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert2}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid2347",
                            "left",
                            83,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert2}",
                            '50px',
                            '-111px'
                        ],
                        [
                            "eid2348",
                            "left",
                            167,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert2}",
                            '-111px',
                            '-283px'
                        ],
                        [
                            "eid2349",
                            "left",
                            250,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert2}",
                            '-283px',
                            '-481px'
                        ],
                        [
                            "eid2350",
                            "left",
                            333,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert2}",
                            '-481px',
                            '-670px'
                        ],
                        [
                            "eid2351",
                            "left",
                            417,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert2}",
                            '-670px',
                            '-876px'
                        ],
                        [
                            "eid2352",
                            "left",
                            500,
                            0,
                            "easeInOutCubic",
                            "${dust_icon_invert2}",
                            '-876px',
                            '-1055px'
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
                            transform: [[0, 0, 0], ['-1', 0, 0], [0, 0], ['0.81759', '0.81759', 1], ['50%', '50%']],
                            symbolName: 'A_cig2',
                            overflow: 'hidden',
                            id: 'A_cig2',
                            opacity: '0.8',
                            type: 'rect',
                            rect: [-46, 44, 529, 260, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.60545', '0.60545', 1], ['50%', '50%']],
                            symbolName: 'A_cig1',
                            overflow: 'hidden',
                            id: 'A_cig1',
                            opacity: '0.8',
                            type: 'rect',
                            rect: [97, 99, 550, 250, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.87855', '0.87855', 1], ['50%', '50%']],
                            symbolName: 'A_cig4',
                            overflow: 'hidden',
                            id: 'A_cig4',
                            opacity: '0.8',
                            type: 'rect',
                            rect: [17, -24, 300, 387, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.61539', '0.61538', 1], ['50%', '50%']],
                            symbolName: 'A_cig3',
                            overflow: 'hidden',
                            id: 'A_cig3',
                            opacity: '0.8',
                            type: 'rect',
                            rect: [42, 164, 590, 260, 'auto', 'auto']
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cig3.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/A_tv.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cig1.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cig4.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/A_teddy.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cig2.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/A_shoes.png', '0px', '0px']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-372280890");
