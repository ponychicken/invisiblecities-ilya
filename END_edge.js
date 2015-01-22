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
                            rect: ['0', '0', '2048px', '1535px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
                        },
                        {
                            id: 'houses_bg_1',
                            display: 'block',
                            type: 'image',
                            rect: ['378', '1071', '1096px', '593px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"houses_bg_1.png",'0px','0px']
                        },
                        {
                            id: 'house_2',
                            display: 'block',
                            type: 'image',
                            rect: ['1815', '1302', '448px', '679px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"house_2.png",'0px','0px']
                        },
                        {
                            id: 'house_1',
                            display: 'block',
                            type: 'image',
                            rect: ['-56', '1282', '372px', '699px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"house_1.png",'0px','0px']
                        },
                        {
                            id: 'Title_Intro',
                            symbolName: 'Title_Intro',
                            type: 'rect',
                            rect: ['0', '-335', '2048', '1536', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0.6'
                        },
                        {
                            id: 'End_body3',
                            display: 'block',
                            type: 'image',
                            rect: ['1341', '863', '432', '728', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"END/End_body.png",'0px','0px']
                        },
                        {
                            id: 'H_End',
                            symbolName: 'H_head',
                            display: 'block',
                            type: 'rect',
                            rect: ['1213', '590', '500', '560', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.775','0.775']]
                        },
                        {
                            id: 'H_crack',
                            symbolName: 'H_crack',
                            display: 'none',
                            type: 'rect',
                            rect: ['1296', '690', '318', '182', 'auto', 'auto'],
                            overflow: 'hidden',
                            clip: 'rect(0px 318px 324.12261962890625px 0px)',
                            opacity: '0',
                            transform: [[],[],[],['0.775','0.775']]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['1252px', '654px', '443px', '356px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'text_1',
                            symbolName: 'text_1',
                            display: 'block',
                            type: 'rect',
                            rect: ['-40', '132', '1433', '89', 'auto', 'auto'],
                            transform: [[],['-3'],[],['0.84796','0.84796']]
                        },
                        {
                            id: 'text_2',
                            symbolName: 'text_2',
                            display: 'block',
                            type: 'rect',
                            rect: ['100', '263', '850', '80', 'auto', 'auto'],
                            transform: [[],['-2'],[],['0.94336','0.94336']]
                        },
                        {
                            id: 'text_3',
                            symbolName: 'text_3',
                            display: 'block',
                            type: 'rect',
                            rect: ['107', '664', '1190', '80', 'auto', 'auto'],
                            transform: [[],[],[],['1.10416','1.10416']]
                        },
                        {
                            id: 'text_4',
                            symbolName: 'text_4',
                            display: 'block',
                            type: 'rect',
                            rect: ['267', '784', '470', '80', 'auto', 'auto'],
                            transform: [[],[],[],['0.94336','0.94336']]
                        },
                        {
                            id: 'text_5',
                            symbolName: 'text_5',
                            display: 'block',
                            type: 'rect',
                            rect: ['64', '908', '1040', '80', 'auto', 'auto'],
                            transform: [[],['1'],[],['0.78173','0.78173']]
                        },
                        {
                            id: 'text_6',
                            symbolName: 'text_6',
                            display: 'block',
                            type: 'rect',
                            rect: ['97', '989', '1200', '80', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['1'],[],['0.94336','0.94336']]
                        },
                        {
                            id: 'Rectangle',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0', '2048px', '1545px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Titel_betreut',
                            display: 'none',
                            type: 'image',
                            rect: ['672', '514', '704', '508', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"END/Titel_betreut.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Titel_Ilya',
                            display: 'none',
                            type: 'image',
                            rect: ['694', '627', '659', '290', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"END/Titel_Ilya.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Titel_Italo',
                            display: 'none',
                            type: 'image',
                            rect: ['587', '279', '873', '440', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"END/Titel_Italo.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Titel_IV',
                            display: 'none',
                            type: 'image',
                            rect: ['653', '978', '739', '196', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"END/Titel_IV.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Titel_linie',
                            display: 'none',
                            type: 'image',
                            rect: ['576', '833', '894', '41', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"END/Titel_linie.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'SFX_rumble',
                            display: 'none',
                            volume: '0',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['466', '294', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"SFX_rumble.mp3"],
                            preload: 'auto'
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
                    duration: 40500,
                    autoPlay: true,
                    labels: {
                        "button": 4400,
                        "egg": 4900,
                        "crack": 10200
                    },
                    data: [
                        [
                            "eid239",
                            "left",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            '267px',
                            '267px'
                        ],
                        [
                            "eid226",
                            "scaleX",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_6}",
                            '0.94336',
                            '0.94336'
                        ],
                        [
                            "eid189",
                            "left",
                            10600,
                            0,
                            "easeInOutBounce",
                            "${H_crack}",
                            '1296px',
                            '1296px'
                        ],
                        [
                            "eid305",
                            "width",
                            28000,
                            0,
                            "easeInOutBounce",
                            "${Titel_Ilya}",
                            '659px',
                            '659px'
                        ],
                        [
                            "eid315",
                            "top",
                            35000,
                            0,
                            "easeInOutBounce",
                            "${Titel_betreut}",
                            '514px',
                            '514px'
                        ],
                        [
                            "eid208",
                            "scaleY",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            '0.84796',
                            '0.84796'
                        ],
                        [
                            "eid262",
                            "top",
                            13000,
                            2976,
                            "easeInOutQuad",
                            "${house_1}",
                            '1282px',
                            '1711px'
                        ],
                        [
                            "eid279",
                            "display",
                            18000,
                            0,
                            "easeInOutBounce",
                            "${Titel_IV}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            26500,
                            0,
                            "easeInOutBounce",
                            "${Titel_IV}",
                            'block',
                            'none'
                        ],
                        [
                            "eid242",
                            "scaleY",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            '1.10416',
                            '1.10416'
                        ],
                        [
                            "eid273",
                            "display",
                            15976,
                            0,
                            "easeInOutBounce",
                            "${house_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid237",
                            "scaleX",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            '0.94336',
                            '0.94336'
                        ],
                        [
                            "eid190",
                            "top",
                            10600,
                            0,
                            "easeInOutBounce",
                            "${H_crack}",
                            '690px',
                            '690px'
                        ],
                        [
                            "eid321",
                            "top",
                            13000,
                            2976,
                            "easeInOutQuad",
                            "${H_crack}",
                            '690px',
                            '1127px'
                        ],
                        [
                            "eid233",
                            "left",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid314",
                            "left",
                            35000,
                            0,
                            "easeInOutBounce",
                            "${Titel_betreut}",
                            '672px',
                            '672px'
                        ],
                        [
                            "eid304",
                            "height",
                            28000,
                            0,
                            "easeInOutBounce",
                            "${Titel_Ilya}",
                            '290px',
                            '290px'
                        ],
                        [
                            "eid207",
                            "scaleX",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            '0.84796',
                            '0.84796'
                        ],
                        [
                            "eid232",
                            "scaleY",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '0.78173',
                            '0.78173'
                        ],
                        [
                            "eid222",
                            "top",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            '263px',
                            '263px'
                        ],
                        [
                            "eid264",
                            "opacity",
                            13000,
                            1500,
                            "easeInOutQuad",
                            "${text_6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '0.78173',
                            '0.78173'
                        ],
                        [
                            "eid326",
                            "top",
                            10200,
                            0,
                            "easeInOutBounce",
                            "${Title_Intro}",
                            '-335px',
                            '-335px'
                        ],
                        [
                            "eid329",
                            "top",
                            13000,
                            2976,
                            "easeInOutQuad",
                            "${Title_Intro}",
                            '-335px',
                            '0px'
                        ],
                        [
                            "eid278",
                            "display",
                            18000,
                            0,
                            "easeInOutBounce",
                            "${Titel_linie}",
                            'none',
                            'block'
                        ],
                        [
                            "eid297",
                            "display",
                            26500,
                            0,
                            "easeInOutBounce",
                            "${Titel_linie}",
                            'block',
                            'none'
                        ],
                        [
                            "eid219",
                            "scaleX",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            '0.94336',
                            '0.94336'
                        ],
                        [
                            "eid225",
                            "rotateZ",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid289",
                            "opacity",
                            21000,
                            1500,
                            "easeInOutQuad",
                            "${Titel_IV}",
                            '0',
                            '1'
                        ],
                        [
                            "eid295",
                            "opacity",
                            25000,
                            1500,
                            "easeInOutQuad",
                            "${Titel_IV}",
                            '1',
                            '0'
                        ],
                        [
                            "eid307",
                            "top",
                            28000,
                            0,
                            "easeInOutBounce",
                            "${Titel_Ilya}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid266",
                            "display",
                            15976,
                            0,
                            "easeInOutBounce",
                            "${text_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid252",
                            "top",
                            3092,
                            3733,
                            "easeInOutQuad",
                            "${text_3}",
                            '664px',
                            '714px'
                        ],
                        [
                            "eid241",
                            "scaleX",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            '1.10416',
                            '1.10416'
                        ],
                        [
                            "eid256",
                            "top",
                            13000,
                            2976,
                            "easeInOutQuad",
                            "${H_End}",
                            '590px',
                            '1029px'
                        ],
                        [
                            "eid271",
                            "display",
                            15976,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid238",
                            "scaleY",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            '0.94336',
                            '0.94336'
                        ],
                        [
                            "eid253",
                            "left",
                            3092,
                            3733,
                            "easeInOutQuad",
                            "${text_3}",
                            '107px',
                            '67px'
                        ],
                        [
                            "eid255",
                            "top",
                            13000,
                            2976,
                            "easeInOutQuad",
                            "${End_body3}",
                            '863px',
                            '1297px'
                        ],
                        [
                            "eid270",
                            "display",
                            15976,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            4900,
                            0,
                            "linear",
                            "${H_crack}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            16162,
                            0,
                            "easeInOutBounce",
                            "${H_crack}",
                            'block',
                            'none'
                        ],
                        [
                            "eid221",
                            "left",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid312",
                            "height",
                            35000,
                            0,
                            "easeInOutBounce",
                            "${Titel_betreut}",
                            '508px',
                            '508px'
                        ],
                        [
                            "eid276",
                            "display",
                            16162,
                            0,
                            "easeInOutBounce",
                            "${End_body3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid281",
                            "display",
                            18000,
                            0,
                            "easeInOutBounce",
                            "${Titel_Ilya}",
                            'none',
                            'block'
                        ],
                        [
                            "eid324",
                            "opacity",
                            4900,
                            0,
                            "easeInOutQuad",
                            "${H_crack}",
                            '0',
                            '0'
                        ],
                        [
                            "eid323",
                            "opacity",
                            10200,
                            0,
                            "easeInOutQuad",
                            "${H_crack}",
                            '0',
                            '1'
                        ],
                        [
                            "eid290",
                            "opacity",
                            20500,
                            1500,
                            "easeInOutQuad",
                            "${Titel_linie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid294",
                            "opacity",
                            25000,
                            1500,
                            "easeInOutQuad",
                            "${Titel_linie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid319",
                            "opacity",
                            35000,
                            1500,
                            "easeInOutQuad",
                            "${Titel_betreut}",
                            '0',
                            '1'
                        ],
                        [
                            "eid318",
                            "opacity",
                            39000,
                            1500,
                            "easeInOutQuad",
                            "${Titel_betreut}",
                            '1',
                            '0'
                        ],
                        [
                            "eid209",
                            "left",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            '-40px',
                            '-40px'
                        ],
                        [
                            "eid267",
                            "display",
                            15976,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid272",
                            "display",
                            15976,
                            0,
                            "easeInOutBounce",
                            "${house_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid275",
                            "display",
                            16162,
                            0,
                            "easeInOutBounce",
                            "${H_End}",
                            'block',
                            'none'
                        ],
                        [
                            "eid325",
                            "opacity",
                            10200,
                            0,
                            "easeInOutBounce",
                            "${Title_Intro}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid268",
                            "display",
                            15976,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid280",
                            "display",
                            18000,
                            0,
                            "easeInOutBounce",
                            "${Titel_Italo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid299",
                            "display",
                            26500,
                            0,
                            "easeInOutBounce",
                            "${Titel_Italo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid248",
                            "top",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_5}",
                            '908px',
                            '908px'
                        ],
                        [
                            "eid210",
                            "top",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_1}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid228",
                            "left",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_6}",
                            '97px',
                            '97px'
                        ],
                        [
                            "eid261",
                            "top",
                            13000,
                            2976,
                            "easeInOutQuad",
                            "${house_2}",
                            '1302px',
                            '1731px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            2160,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4",
                            "opacity",
                            13976,
                            2000,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "display",
                            2160,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            10200,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "scaleY",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_2}",
                            '0.94336',
                            '0.94336'
                        ],
                        [
                            "eid260",
                            "top",
                            13000,
                            2976,
                            "easeInOutQuad",
                            "${houses_bg_1}",
                            '1071px',
                            '1500px'
                        ],
                        [
                            "eid285",
                            "opacity",
                            18000,
                            1500,
                            "easeInOutQuad",
                            "${Titel_Italo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid296",
                            "opacity",
                            25000,
                            1500,
                            "easeInOutQuad",
                            "${Titel_Italo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid313",
                            "width",
                            35000,
                            0,
                            "easeInOutBounce",
                            "${Titel_betreut}",
                            '704px',
                            '704px'
                        ],
                        [
                            "eid277",
                            "display",
                            15976,
                            0,
                            "easeInOutBounce",
                            "${houses_bg_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid308",
                            "opacity",
                            28000,
                            1500,
                            "easeInOutQuad",
                            "${Titel_Ilya}",
                            '0',
                            '1'
                        ],
                        [
                            "eid309",
                            "opacity",
                            32000,
                            1500,
                            "easeInOutQuad",
                            "${Titel_Ilya}",
                            '1',
                            '0'
                        ],
                        [
                            "eid306",
                            "left",
                            28000,
                            0,
                            "easeInOutBounce",
                            "${Titel_Ilya}",
                            '694px',
                            '694px'
                        ],
                        [
                            "eid227",
                            "scaleY",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_6}",
                            '0.94336',
                            '0.94336'
                        ],
                        [
                            "eid335",
                            "volume",
                            10100,
                            900,
                            "easeInOutQuad",
                            "${SFX_rumble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid334",
                            "volume",
                            27032,
                            2764,
                            "easeInOutQuad",
                            "${SFX_rumble}",
                            '1',
                            '0'
                        ],
                        [
                            "eid247",
                            "top",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_4}",
                            '784px',
                            '784px'
                        ],
                        [
                            "eid282",
                            "display",
                            18000,
                            0,
                            "easeInOutBounce",
                            "${Titel_betreut}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "top",
                            6825,
                            0,
                            "easeInOutBounce",
                            "${text_6}",
                            '989px',
                            '989px'
                        ],
                        [
                            "eid269",
                            "display",
                            15976,
                            0,
                            "easeInOutBounce",
                            "${text_3}",
                            'block',
                            'none'
                        ],
                            [ "eid21", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${H_End}', [] ] ],
                            [ "eid22", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${H_crack}', [] ] ],
                            [ "eid23", "trigger", 4900, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${H_End}', [] ] ],
                            [ "eid24", "trigger", 10200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${H_crack}', [] ] ],
                            [ "eid336", "trigger", 10200, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${SFX_rumble}', [] ] ]
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
                            rect: ['0', '0', 1171, 80, 'auto', 'auto'],
                            id: 'Text_C1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_C1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1190, 80]
                        }
                    }
                },
                timeline: {
                    duration: 4733,
                    autoPlay: false,
                    labels: {
                        "fade_flimmer": 1052,
                        "fade_still": 2185,
                        "still_loop": 2452,
                        "opaque": 3052,
                        "opaque_loop": 3852,
                        "fade": 4252
                    },
                    data: [
                        [
                            "eid69",
                            "opacity",
                            0,
                            1052,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid70",
                            "opacity",
                            1052,
                            129,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid71",
                            "opacity",
                            1181,
                            140,
                            "easeOutBounce",
                            "${Text_C1}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid72",
                            "opacity",
                            1321,
                            106,
                            "easeOutBounce",
                            "${Text_C1}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid73",
                            "opacity",
                            1427,
                            61,
                            "easeOutBounce",
                            "${Text_C1}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid74",
                            "opacity",
                            1488,
                            164,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid75",
                            "opacity",
                            1652,
                            67,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid76",
                            "opacity",
                            1719,
                            66,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid77",
                            "opacity",
                            1785,
                            200,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid78",
                            "opacity",
                            1985,
                            67,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid79",
                            "opacity",
                            2185,
                            96,
                            "easeInBounce",
                            "${Text_C1}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid80",
                            "opacity",
                            2281,
                            171,
                            "easeOutBounce",
                            "${Text_C1}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid81",
                            "opacity",
                            2452,
                            67,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid82",
                            "opacity",
                            2519,
                            34,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid83",
                            "opacity",
                            2553,
                            70,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid84",
                            "opacity",
                            2623,
                            55,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid85",
                            "opacity",
                            2678,
                            41,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid86",
                            "opacity",
                            2719,
                            38,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid87",
                            "opacity",
                            2757,
                            64,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid88",
                            "opacity",
                            3052,
                            800,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            4052,
                            0,
                            "easeInOutBounce",
                            "${Text_C1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            4252,
                            481,
                            "easeInOutBounce",
                            "${Text_C1}",
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
                            rect: ['0', '0', 991, 80, 'auto', 'auto'],
                            id: 'Text_C3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_C3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1040, 80]
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
                            "eid113",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid114",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid115",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${Text_C3}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid116",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${Text_C3}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid117",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${Text_C3}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid118",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid119",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid120",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid121",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid122",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid123",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${Text_C3}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid124",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${Text_C3}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid125",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid126",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid127",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid128",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid129",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid130",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid131",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid132",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${Text_C3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${Text_C3}",
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
                            rect: [3, 0, 458, 80, 'auto', 'auto'],
                            id: 'Text_C2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_C2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 470, 80]
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
                            "eid91",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid92",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid93",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${Text_C2}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid94",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${Text_C2}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid95",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${Text_C2}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid96",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid97",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid98",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid99",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid100",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid101",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${Text_C2}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid102",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${Text_C2}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid103",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid104",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid105",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid106",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid107",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid108",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid109",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid110",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${Text_C2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid112",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${Text_C2}",
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
                            rect: ['0', '0', 817, 80, 'auto', 'auto'],
                            id: 'Text_B2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_B2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 850, 80]
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
                            "eid47",
                            "opacity",
                            0,
                            482,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid48",
                            "opacity",
                            482,
                            129,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid49",
                            "opacity",
                            611,
                            140,
                            "easeOutBounce",
                            "${Text_B2}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid50",
                            "opacity",
                            751,
                            106,
                            "easeOutBounce",
                            "${Text_B2}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid51",
                            "opacity",
                            857,
                            61,
                            "easeOutBounce",
                            "${Text_B2}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid52",
                            "opacity",
                            918,
                            164,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid53",
                            "opacity",
                            1082,
                            67,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid54",
                            "opacity",
                            1149,
                            66,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid55",
                            "opacity",
                            1215,
                            200,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid56",
                            "opacity",
                            1415,
                            67,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid57",
                            "opacity",
                            1615,
                            96,
                            "easeInBounce",
                            "${Text_B2}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid58",
                            "opacity",
                            1711,
                            171,
                            "easeOutBounce",
                            "${Text_B2}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid59",
                            "opacity",
                            1882,
                            67,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid60",
                            "opacity",
                            1949,
                            34,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid61",
                            "opacity",
                            1983,
                            70,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid62",
                            "opacity",
                            2053,
                            55,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid63",
                            "opacity",
                            2108,
                            41,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid64",
                            "opacity",
                            2149,
                            38,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid65",
                            "opacity",
                            2187,
                            64,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid66",
                            "opacity",
                            2482,
                            800,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            3482,
                            0,
                            "easeInOutBounce",
                            "${Text_B2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            3682,
                            518,
                            "easeInOutBounce",
                            "${Text_B2}",
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
                            rect: ['0', '6', 1434, 89, 'auto', 'auto'],
                            id: 'Text_B1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_B1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1433, 89]
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
                            "eid25",
                            "opacity",
                            0,
                            822,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid26",
                            "opacity",
                            822,
                            129,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid27",
                            "opacity",
                            951,
                            140,
                            "easeOutBounce",
                            "${Text_B1}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1091,
                            106,
                            "easeOutBounce",
                            "${Text_B1}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid29",
                            "opacity",
                            1197,
                            61,
                            "easeOutBounce",
                            "${Text_B1}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1258,
                            164,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1422,
                            67,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1489,
                            66,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1555,
                            200,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid34",
                            "opacity",
                            1755,
                            67,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid35",
                            "opacity",
                            1955,
                            96,
                            "easeInBounce",
                            "${Text_B1}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2051,
                            171,
                            "easeOutBounce",
                            "${Text_B1}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid37",
                            "opacity",
                            2222,
                            67,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid38",
                            "opacity",
                            2289,
                            34,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid39",
                            "opacity",
                            2323,
                            70,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid40",
                            "opacity",
                            2393,
                            55,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2448,
                            41,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid42",
                            "opacity",
                            2489,
                            38,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2527,
                            64,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid44",
                            "opacity",
                            2822,
                            800,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            3822,
                            0,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            4022,
                            578,
                            "easeInOutBounce",
                            "${Text_B1}",
                            '0.5',
                            '0'
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
                            id: 'dust_iconCopy',
                            type: 'image',
                            rect: [50, 0, '1242px', '193px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/dust_icon3.png', '0px', '0px']
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
            "H_head": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '3500px', '454px', 'auto', 'auto'],
                            id: 'End_head',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/End_head.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 500, 560]
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "left",
                            0,
                            0,
                            "linear",
                            "${End_head}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid7",
                            "left",
                            100,
                            0,
                            "linear",
                            "${End_head}",
                            '0px',
                            '-522px'
                        ],
                        [
                            "eid8",
                            "left",
                            200,
                            0,
                            "linear",
                            "${End_head}",
                            '-500px',
                            '-1000px'
                        ],
                        [
                            "eid9",
                            "left",
                            300,
                            0,
                            "linear",
                            "${End_head}",
                            '-1000px',
                            '-1500px'
                        ],
                        [
                            "eid10",
                            "left",
                            400,
                            0,
                            "linear",
                            "${End_head}",
                            '-1500px',
                            '-2000px'
                        ],
                        [
                            "eid11",
                            "left",
                            500,
                            0,
                            "linear",
                            "${End_head}",
                            '-2000px',
                            '-2500px'
                        ],
                        [
                            "eid12",
                            "left",
                            600,
                            0,
                            "linear",
                            "${End_head}",
                            '-2500px',
                            '-3002px'
                        ]
                    ]
                }
            },
            "H_crack": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '318px', '700px', 'auto', 'auto'],
                            id: 'End_crack2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/End_crack.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 318, 182]
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: true,
                    data: [
                        [
                            "eid13",
                            "left",
                            0,
                            0,
                            "linear",
                            "${End_crack2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "left",
                            200,
                            0,
                            "linear",
                            "${End_crack2}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid18",
                            "left",
                            300,
                            0,
                            "linear",
                            "${End_crack2}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            0,
                            "linear",
                            "${End_crack2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid15",
                            "top",
                            100,
                            0,
                            "linear",
                            "${End_crack2}",
                            '0px',
                            '-170px'
                        ],
                        [
                            "eid16",
                            "top",
                            200,
                            0,
                            "linear",
                            "${End_crack2}",
                            '-170px',
                            '-325px'
                        ],
                        [
                            "eid19",
                            "top",
                            300,
                            0,
                            "linear",
                            "${End_crack2}",
                            '-325px',
                            '-496px'
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
                            rect: [3, -3, 1186, 80, 'auto', 'auto'],
                            id: 'Text_C4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/END/Text_C4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1200, 80]
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
                            "eid157",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid158",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid159",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${Text_C4}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid160",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${Text_C4}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid161",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${Text_C4}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid162",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid163",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid164",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid165",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid166",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid167",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${Text_C4}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid168",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${Text_C4}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid169",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid170",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid171",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid172",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid173",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid174",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid175",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid176",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid177",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid178",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${Text_C4}",
                            '0.5',
                            '0'
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cloud5.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cloud5.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_cloud5.png', '0px', '0px']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("END_edgeActions.js");
})("END");
