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
                            id: 'BG_1',
                            type: 'image',
                            rect: ['-30', '62', '2028px', '973px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BG_1.png",'0px','0px']
                        },
                        {
                            id: 'BG_02',
                            type: 'image',
                            rect: ['-100', '890', '2304', '319', 'auto', 'auto'],
                            opacity: '0.60162601626016',
                            fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
                        },
                        {
                            id: 'BG_02Copy',
                            type: 'image',
                            rect: ['-476', '1137', '3315', '459', 'auto', 'auto'],
                            opacity: '0.77235772357724',
                            fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
                        },
                        {
                            id: 'B_taube2',
                            symbolName: 'B_taube2',
                            display: 'block',
                            type: 'rect',
                            rect: ['1444', '962', '500', '430', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['-0.59302','0.59302']]
                        },
                        {
                            id: 'B_taube2Copy',
                            symbolName: 'B_taube2',
                            display: 'block',
                            type: 'rect',
                            rect: ['-71', '873', '500', '430', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['-0.4','0.4']]
                        },
                        {
                            id: 'B_taube22',
                            symbolName: 'B_taube2',
                            display: 'block',
                            type: 'rect',
                            rect: ['358', '1157', '500', '430', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1'
                        },
                        {
                            id: 'taube',
                            symbolName: 'taube',
                            display: 'block',
                            type: 'rect',
                            rect: ['735', '-91', '350', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['-0.344','0.34331']]
                        },
                        {
                            id: 'taubeCopy2',
                            symbolName: 'taube',
                            display: 'block',
                            type: 'rect',
                            rect: ['735', '-91', '350', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['-0.344','0.34331']]
                        },
                        {
                            id: 'taubeCopy3',
                            symbolName: 'taube',
                            display: 'block',
                            type: 'rect',
                            rect: ['149', '-153', '350', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['0.25704','0.25653']]
                        },
                        {
                            id: 'taubeCopy',
                            symbolName: 'taube',
                            display: 'block',
                            type: 'rect',
                            rect: ['919', '-88', '350', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'taube2',
                            symbolName: 'taube',
                            display: 'block',
                            type: 'rect',
                            rect: ['1371', '12', '350', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['-0.53416','0.53416']]
                        },
                        {
                            id: 'bag1',
                            display: 'none',
                            type: 'image',
                            rect: ['-163', '895', '459', '472', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"bag1.png",'0px','0px']
                        },
                        {
                            id: 'bag2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1672', '1110', '352px', '340px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"bag2.png",'0px','0px']
                        },
                        {
                            id: 'bag5',
                            display: 'none',
                            type: 'image',
                            rect: ['1604', '1280', '522px', '255px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"bag5.png",'0px','0px'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'bag2',
                            display: 'none',
                            type: 'image',
                            rect: ['28', '1082', '352px', '340px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"bag2.png",'0px','0px']
                        },
                        {
                            id: 'bag3',
                            display: 'none',
                            type: 'image',
                            rect: ['52', '1172', '554px', '372px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"bag3.png",'0px','0px'],
                            transform: [[],['-6']]
                        },
                        {
                            id: 'bag4',
                            display: 'none',
                            type: 'image',
                            rect: ['-60', '1064', '260px', '522px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"bag4.png",'0px','0px'],
                            transform: [[],['-8']]
                        },
                        {
                            id: 'bag4Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1864', '1024', '260px', '522px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"bag4.png",'0px','0px'],
                            transform: [[],['2']]
                        },
                        {
                            id: 'text_1',
                            symbolName: 'text_1_1',
                            type: 'rect',
                            rect: ['342', '409', '1094', '71', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-3']]
                        },
                        {
                            id: 'text_2',
                            symbolName: 'text_2_1',
                            type: 'rect',
                            rect: ['911', '547', '900', '80', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['3']]
                        },
                        {
                            id: 'text_3',
                            symbolName: 'text_3_1',
                            type: 'rect',
                            rect: ['158', '743', '1770', '80', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-1']]
                        },
                        {
                            id: 'text_4',
                            symbolName: 'text_4_1',
                            type: 'rect',
                            rect: ['734', '1000', '599', '80', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'dust_button2',
                            symbolName: 'dust_button_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['927', '1256', '193', '179', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'RectangleCopy',
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
                        "button": 5000,
                        "textOut": 11589
                    },
                    data: [
                        [
                            "eid132",
                            "top",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy2}",
                            '-91px',
                            '-91px'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            0,
                            "linear",
                            "${text_4}",
                            '734px',
                            '734px'
                        ],
                        [
                            "eid229",
                            "display",
                            13000,
                            0,
                            "easeInOutQuad",
                            "${B_taube22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid126",
                            "scaleY",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taube}",
                            '0.34331',
                            '0.34331'
                        ],
                        [
                            "eid167",
                            "display",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${bag5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            13000,
                            0,
                            "easeInOutQuad",
                            "${taube}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${bag4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "opacity",
                            11589,
                            1411,
                            "easeInOutQuad",
                            "${B_taube22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${text_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "top",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube2}",
                            '962px',
                            '962px'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taube2}",
                            '0.53416',
                            '0.53416'
                        ],
                        [
                            "eid106",
                            "top",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube22}",
                            '1157px',
                            '1157px'
                        ],
                        [
                            "eid111",
                            "left",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube2Copy}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid65",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${bag5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid230",
                            "display",
                            13000,
                            0,
                            "easeInOutQuad",
                            "${B_taube2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid176",
                            "opacity",
                            11589,
                            1411,
                            "easeInOutQuad",
                            "${taube}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "top",
                            0,
                            0,
                            "linear",
                            "${text_2}",
                            '547px',
                            '547px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${text_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid145",
                            "scaleY",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy3}",
                            '0.25653',
                            '0.25653'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy}",
                            '0.4',
                            '0.4'
                        ],
                        [
                            "eid127",
                            "left",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taube}",
                            '735px',
                            '735px'
                        ],
                        [
                            "eid148",
                            "left",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy3}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid147",
                            "top",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy3}",
                            '-153px',
                            '-153px'
                        ],
                        [
                            "eid231",
                            "display",
                            13000,
                            0,
                            "easeInOutQuad",
                            "${B_taube2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "top",
                            0,
                            0,
                            "linear",
                            "${text_3}",
                            '743px',
                            '743px'
                        ],
                        [
                            "eid35",
                            "display",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${dust_button2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            12589,
                            0,
                            "easeInOutQuad",
                            "${dust_button2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid123",
                            "left",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy}",
                            '919px',
                            '919px'
                        ],
                        [
                            "eid121",
                            "scaleY",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy}",
                            '0.4',
                            '0.4'
                        ],
                        [
                            "eid169",
                            "display",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${bag3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "display",
                            13000,
                            0,
                            "easeInOutQuad",
                            "${taube2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "opacity",
                            11589,
                            1411,
                            "easeInOutQuad",
                            "${taubeCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            0,
                            "linear",
                            "${text_3}",
                            '158px',
                            '158px'
                        ],
                        [
                            "eid165",
                            "display",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${bag1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid168",
                            "display",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${bag2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "top",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube2Copy}",
                            '873px',
                            '873px'
                        ],
                        [
                            "eid29",
                            "left",
                            0,
                            0,
                            "linear",
                            "${text_2}",
                            '911px',
                            '911px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            5000,
                            1000,
                            "easeInOutQuad",
                            "${dust_button2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            11589,
                            1000,
                            "easeInOutQuad",
                            "${dust_button2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            0,
                            2160,
                            "linear",
                            "${RectangleCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${RectangleCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid44",
                            "opacity",
                            15476,
                            2000,
                            "linear",
                            "${RectangleCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "top",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy}",
                            '-88px',
                            '-88px'
                        ],
                        [
                            "eid105",
                            "left",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube22}",
                            '358px',
                            '358px'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taube}",
                            '-0.344',
                            '-0.344'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy2}",
                            '0.34331',
                            '0.34331'
                        ],
                        [
                            "eid130",
                            "top",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taube}",
                            '-91px',
                            '-91px'
                        ],
                        [
                            "eid182",
                            "display",
                            13000,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid68",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${bag2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            0,
                            "linear",
                            "${text_1}",
                            '342px',
                            '342px'
                        ],
                        [
                            "eid97",
                            "scaleX",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube2Copy}",
                            '-0.4',
                            '-0.4'
                        ],
                        [
                            "eid172",
                            "opacity",
                            11589,
                            1411,
                            "easeInOutQuad",
                            "${B_taube2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid109",
                            "scaleX",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube2}",
                            '-0.59302',
                            '-0.59302'
                        ],
                        [
                            "eid70",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${bag1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid154",
                            "top",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taube2}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid155",
                            "scaleX",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taube2}",
                            '-0.53416',
                            '-0.53416'
                        ],
                        [
                            "eid153",
                            "left",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taube2}",
                            '1371px',
                            '1371px'
                        ],
                        [
                            "eid179",
                            "opacity",
                            11589,
                            1411,
                            "easeInOutQuad",
                            "${taubeCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid178",
                            "opacity",
                            11589,
                            1411,
                            "easeInOutQuad",
                            "${taube2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid171",
                            "display",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${bag4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "top",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${dust_button2}",
                            '1256px',
                            '1256px'
                        ],
                        [
                            "eid181",
                            "display",
                            13000,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            2160,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "scaleY",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube2Copy}",
                            '0.4',
                            '0.4'
                        ],
                        [
                            "eid69",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${bag2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${text_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid67",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${bag4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid135",
                            "left",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy2}",
                            '735px',
                            '735px'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy2}",
                            '-0.344',
                            '-0.344'
                        ],
                        [
                            "eid183",
                            "display",
                            13000,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid71",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${bag4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid28",
                            "top",
                            0,
                            0,
                            "linear",
                            "${text_4}",
                            '1000px',
                            '1000px'
                        ],
                        [
                            "eid66",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${bag3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid166",
                            "display",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${bag2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "left",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube2}",
                            '1444px',
                            '1444px'
                        ],
                        [
                            "eid144",
                            "scaleX",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${taubeCopy3}",
                            '0.25704',
                            '0.25704'
                        ],
                        [
                            "eid174",
                            "opacity",
                            11589,
                            1411,
                            "easeInOutQuad",
                            "${B_taube2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "scaleY",
                            11589,
                            0,
                            "easeInOutQuad",
                            "${B_taube2}",
                            '0.59302',
                            '0.59302'
                        ],
                        [
                            "eid34",
                            "left",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${dust_button2}",
                            '927px',
                            '927px'
                        ],
                        [
                            "eid24",
                            "top",
                            0,
                            0,
                            "linear",
                            "${text_1}",
                            '409px',
                            '409px'
                        ],
                        [
                            "eid38",
                            "opacity",
                            11589,
                            2000,
                            "easeInOutQuad",
                            "${text_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "opacity",
                            11589,
                            1411,
                            "easeInOutQuad",
                            "${taubeCopy}",
                            '1',
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
                            rect: ['0', '0', 1766, 95, 'auto', 'auto'],
                            id: 'bText_32',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_32.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1770, 80]
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
                            "eid251",
                            "opacity",
                            0,
                            452,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid252",
                            "opacity",
                            452,
                            129,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid253",
                            "opacity",
                            581,
                            140,
                            "easeOutBounce",
                            "${bText_32}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid254",
                            "opacity",
                            721,
                            106,
                            "easeOutBounce",
                            "${bText_32}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid255",
                            "opacity",
                            827,
                            61,
                            "easeOutBounce",
                            "${bText_32}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid256",
                            "opacity",
                            888,
                            164,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid257",
                            "opacity",
                            1052,
                            67,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid258",
                            "opacity",
                            1119,
                            66,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid259",
                            "opacity",
                            1185,
                            200,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid260",
                            "opacity",
                            1385,
                            67,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid261",
                            "opacity",
                            1585,
                            96,
                            "easeInBounce",
                            "${bText_32}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid262",
                            "opacity",
                            1681,
                            171,
                            "easeOutBounce",
                            "${bText_32}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid263",
                            "opacity",
                            1852,
                            67,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid264",
                            "opacity",
                            1919,
                            34,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid265",
                            "opacity",
                            1953,
                            70,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid266",
                            "opacity",
                            2023,
                            55,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid267",
                            "opacity",
                            2078,
                            41,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid268",
                            "opacity",
                            2119,
                            38,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid269",
                            "opacity",
                            2157,
                            64,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid270",
                            "opacity",
                            2452,
                            800,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            3452,
                            0,
                            "easeInOutBounce",
                            "${bText_32}",
                            '1',
                            '1'
                        ],
                        [
                            "eid272",
                            "opacity",
                            3652,
                            481,
                            "easeInOutBounce",
                            "${bText_32}",
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
                            id: 'dust_iconCopy',
                            type: 'image',
                            rect: [50, 0, '1242px', '193px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/dust_icon22.png', '0px', '0px']
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
                            rect: ['0', -10, 899, 104, 'auto', 'auto'],
                            id: 'bText_22',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_22.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 900, 80]
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
                            "eid207",
                            "opacity",
                            0,
                            482,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid208",
                            "opacity",
                            482,
                            129,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid209",
                            "opacity",
                            611,
                            140,
                            "easeOutBounce",
                            "${bText_22}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid210",
                            "opacity",
                            751,
                            106,
                            "easeOutBounce",
                            "${bText_22}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid211",
                            "opacity",
                            857,
                            61,
                            "easeOutBounce",
                            "${bText_22}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid212",
                            "opacity",
                            918,
                            164,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid213",
                            "opacity",
                            1082,
                            67,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid214",
                            "opacity",
                            1149,
                            66,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid215",
                            "opacity",
                            1215,
                            200,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid216",
                            "opacity",
                            1415,
                            67,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid217",
                            "opacity",
                            1615,
                            96,
                            "easeInBounce",
                            "${bText_22}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid218",
                            "opacity",
                            1711,
                            171,
                            "easeOutBounce",
                            "${bText_22}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid219",
                            "opacity",
                            1882,
                            67,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid220",
                            "opacity",
                            1949,
                            34,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid221",
                            "opacity",
                            1983,
                            70,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid222",
                            "opacity",
                            2053,
                            55,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid223",
                            "opacity",
                            2108,
                            41,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid224",
                            "opacity",
                            2149,
                            38,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid225",
                            "opacity",
                            2187,
                            64,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid226",
                            "opacity",
                            2482,
                            800,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            3482,
                            0,
                            "easeInOutBounce",
                            "${bText_22}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "opacity",
                            3682,
                            518,
                            "easeInOutBounce",
                            "${bText_22}",
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
                            rect: ['0', -1, 589, 90, 'auto', 'auto'],
                            id: 'bText_42',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_42.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 599, 80]
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
                            "eid273",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid274",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid275",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${bText_42}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid276",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${bText_42}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid277",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${bText_42}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid278",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid279",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid280",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid281",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid282",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid283",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${bText_42}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid284",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${bText_42}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid285",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid286",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid287",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid288",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid289",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid290",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid291",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid292",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid293",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${bText_42}",
                            '1',
                            '1'
                        ],
                        [
                            "eid294",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${bText_42}",
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
                            rect: [10, -11, 980, 96, 'auto', 'auto'],
                            id: 'bText_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_12.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1094, 71]
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
                            "eid185",
                            "opacity",
                            0,
                            822,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid186",
                            "opacity",
                            822,
                            129,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid187",
                            "opacity",
                            951,
                            140,
                            "easeOutBounce",
                            "${bText_1}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid188",
                            "opacity",
                            1091,
                            106,
                            "easeOutBounce",
                            "${bText_1}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid189",
                            "opacity",
                            1197,
                            61,
                            "easeOutBounce",
                            "${bText_1}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid190",
                            "opacity",
                            1258,
                            164,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid191",
                            "opacity",
                            1422,
                            67,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid192",
                            "opacity",
                            1489,
                            66,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid193",
                            "opacity",
                            1555,
                            200,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid194",
                            "opacity",
                            1755,
                            67,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid195",
                            "opacity",
                            1955,
                            96,
                            "easeInBounce",
                            "${bText_1}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid196",
                            "opacity",
                            2051,
                            171,
                            "easeOutBounce",
                            "${bText_1}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid197",
                            "opacity",
                            2222,
                            67,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid198",
                            "opacity",
                            2289,
                            34,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid199",
                            "opacity",
                            2323,
                            70,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid200",
                            "opacity",
                            2393,
                            55,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid201",
                            "opacity",
                            2448,
                            41,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid202",
                            "opacity",
                            2489,
                            38,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid203",
                            "opacity",
                            2527,
                            64,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid204",
                            "opacity",
                            2822,
                            800,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            3822,
                            0,
                            "easeInOutBounce",
                            "${bText_1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid206",
                            "opacity",
                            4022,
                            578,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            },
            "dust_icon_1": {
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
            "dust_button_1": {
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
                            symbolName: 'dust_icon_1',
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
            "text_4_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', -1, 589, 90, 'auto', 'auto'],
                            id: 'bText_42',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 599, 80]
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
                            "eid273",
                            "opacity",
                            0,
                            467,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid274",
                            "opacity",
                            467,
                            129,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid275",
                            "opacity",
                            596,
                            140,
                            "easeOutBounce",
                            "${bText_42}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid276",
                            "opacity",
                            736,
                            106,
                            "easeOutBounce",
                            "${bText_42}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid277",
                            "opacity",
                            842,
                            61,
                            "easeOutBounce",
                            "${bText_42}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid278",
                            "opacity",
                            903,
                            164,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid279",
                            "opacity",
                            1067,
                            67,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid280",
                            "opacity",
                            1134,
                            66,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid281",
                            "opacity",
                            1200,
                            200,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid282",
                            "opacity",
                            1400,
                            67,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid283",
                            "opacity",
                            1600,
                            96,
                            "easeInBounce",
                            "${bText_42}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid284",
                            "opacity",
                            1696,
                            171,
                            "easeOutBounce",
                            "${bText_42}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid285",
                            "opacity",
                            1867,
                            67,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid286",
                            "opacity",
                            1934,
                            34,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid287",
                            "opacity",
                            1968,
                            70,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid288",
                            "opacity",
                            2038,
                            55,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid289",
                            "opacity",
                            2093,
                            41,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid290",
                            "opacity",
                            2134,
                            38,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid291",
                            "opacity",
                            2172,
                            64,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid292",
                            "opacity",
                            2467,
                            800,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid293",
                            "opacity",
                            3467,
                            0,
                            "easeInOutBounce",
                            "${bText_42}",
                            '1',
                            '1'
                        ],
                        [
                            "eid294",
                            "opacity",
                            3667,
                            500,
                            "easeInOutBounce",
                            "${bText_42}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            },
            "text_3_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', 1766, 95, 'auto', 'auto'],
                            id: 'bText_32',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1770, 80]
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
                            "eid251",
                            "opacity",
                            0,
                            452,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid252",
                            "opacity",
                            452,
                            129,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid253",
                            "opacity",
                            581,
                            140,
                            "easeOutBounce",
                            "${bText_32}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid254",
                            "opacity",
                            721,
                            106,
                            "easeOutBounce",
                            "${bText_32}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid255",
                            "opacity",
                            827,
                            61,
                            "easeOutBounce",
                            "${bText_32}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid256",
                            "opacity",
                            888,
                            164,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid257",
                            "opacity",
                            1052,
                            67,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid258",
                            "opacity",
                            1119,
                            66,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid259",
                            "opacity",
                            1185,
                            200,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid260",
                            "opacity",
                            1385,
                            67,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid261",
                            "opacity",
                            1585,
                            96,
                            "easeInBounce",
                            "${bText_32}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid262",
                            "opacity",
                            1681,
                            171,
                            "easeOutBounce",
                            "${bText_32}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid263",
                            "opacity",
                            1852,
                            67,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid264",
                            "opacity",
                            1919,
                            34,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid265",
                            "opacity",
                            1953,
                            70,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid266",
                            "opacity",
                            2023,
                            55,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid267",
                            "opacity",
                            2078,
                            41,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid268",
                            "opacity",
                            2119,
                            38,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid269",
                            "opacity",
                            2157,
                            64,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid270",
                            "opacity",
                            2452,
                            800,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            3452,
                            0,
                            "easeInOutBounce",
                            "${bText_32}",
                            '1',
                            '1'
                        ],
                        [
                            "eid272",
                            "opacity",
                            3652,
                            481,
                            "easeInOutBounce",
                            "${bText_32}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            },
            "text_2_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', -10, 899, 104, 'auto', 'auto'],
                            id: 'bText_22',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 900, 80]
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
                            "eid207",
                            "opacity",
                            0,
                            482,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid208",
                            "opacity",
                            482,
                            129,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid209",
                            "opacity",
                            611,
                            140,
                            "easeOutBounce",
                            "${bText_22}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid210",
                            "opacity",
                            751,
                            106,
                            "easeOutBounce",
                            "${bText_22}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid211",
                            "opacity",
                            857,
                            61,
                            "easeOutBounce",
                            "${bText_22}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid212",
                            "opacity",
                            918,
                            164,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid213",
                            "opacity",
                            1082,
                            67,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid214",
                            "opacity",
                            1149,
                            66,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid215",
                            "opacity",
                            1215,
                            200,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid216",
                            "opacity",
                            1415,
                            67,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid217",
                            "opacity",
                            1615,
                            96,
                            "easeInBounce",
                            "${bText_22}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid218",
                            "opacity",
                            1711,
                            171,
                            "easeOutBounce",
                            "${bText_22}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid219",
                            "opacity",
                            1882,
                            67,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid220",
                            "opacity",
                            1949,
                            34,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid221",
                            "opacity",
                            1983,
                            70,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid222",
                            "opacity",
                            2053,
                            55,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid223",
                            "opacity",
                            2108,
                            41,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid224",
                            "opacity",
                            2149,
                            38,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid225",
                            "opacity",
                            2187,
                            64,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid226",
                            "opacity",
                            2482,
                            800,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            3482,
                            0,
                            "easeInOutBounce",
                            "${bText_22}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "opacity",
                            3682,
                            518,
                            "easeInOutBounce",
                            "${bText_22}",
                            '0.5',
                            '0'
                        ]
                    ]
                }
            },
            "text_1_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [10, -11, 980, 96, 'auto', 'auto'],
                            id: 'bText_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bText_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1094, 71]
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
                            "eid185",
                            "opacity",
                            0,
                            822,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0',
                            '0.18'
                        ],
                        [
                            "eid186",
                            "opacity",
                            822,
                            129,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.18',
                            '0.21'
                        ],
                        [
                            "eid187",
                            "opacity",
                            951,
                            140,
                            "easeOutBounce",
                            "${bText_1}",
                            '0.21',
                            '0.24'
                        ],
                        [
                            "eid188",
                            "opacity",
                            1091,
                            106,
                            "easeOutBounce",
                            "${bText_1}",
                            '0.24',
                            '0.19'
                        ],
                        [
                            "eid189",
                            "opacity",
                            1197,
                            61,
                            "easeOutBounce",
                            "${bText_1}",
                            '0.19',
                            '0.16'
                        ],
                        [
                            "eid190",
                            "opacity",
                            1258,
                            164,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.16',
                            '0.21'
                        ],
                        [
                            "eid191",
                            "opacity",
                            1422,
                            67,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.21',
                            '0.23'
                        ],
                        [
                            "eid192",
                            "opacity",
                            1489,
                            66,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.23',
                            '0.25'
                        ],
                        [
                            "eid193",
                            "opacity",
                            1555,
                            200,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.25',
                            '0.22'
                        ],
                        [
                            "eid194",
                            "opacity",
                            1755,
                            67,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.22',
                            '0.18'
                        ],
                        [
                            "eid195",
                            "opacity",
                            1955,
                            96,
                            "easeInBounce",
                            "${bText_1}",
                            '0.18',
                            '0.146612'
                        ],
                        [
                            "eid196",
                            "opacity",
                            2051,
                            171,
                            "easeOutBounce",
                            "${bText_1}",
                            '0.146612',
                            '0.5'
                        ],
                        [
                            "eid197",
                            "opacity",
                            2222,
                            67,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid198",
                            "opacity",
                            2289,
                            34,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.550000',
                            '0.59'
                        ],
                        [
                            "eid199",
                            "opacity",
                            2323,
                            70,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.590000',
                            '0.4'
                        ],
                        [
                            "eid200",
                            "opacity",
                            2393,
                            55,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.400000',
                            '0.46'
                        ],
                        [
                            "eid201",
                            "opacity",
                            2448,
                            41,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.460000',
                            '0.5'
                        ],
                        [
                            "eid202",
                            "opacity",
                            2489,
                            38,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.500000',
                            '0.55'
                        ],
                        [
                            "eid203",
                            "opacity",
                            2527,
                            64,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.550000',
                            '0.5'
                        ],
                        [
                            "eid204",
                            "opacity",
                            2822,
                            800,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            3822,
                            0,
                            "easeInOutBounce",
                            "${bText_1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid206",
                            "opacity",
                            4022,
                            578,
                            "easeInOutBounce",
                            "${bText_1}",
                            '0.5',
                            '0'
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
                            fill: ['rgba(0,0,0,0)', 'images/ss_taube_12.png', '0px', '0px']
                        },
                        {
                            type: 'audio',
                            source: ['media/SFX_pigeon.mp3'],
                            volume: '0',
                            id: 'SFX_pigeon',
                            rect: ['54', '40', '320px', '45px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'ss_taube_2',
                            opacity: '0.9',
                            rect: [0, 0, '500px', '2971px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ss_taube_2.png', '0px', '0px']
                        },
                        {
                            type: 'audio',
                            source: ['media/SFX_pigeon.mp3'],
                            volume: '0',
                            id: 'SFX_pigeon',
                            rect: ['54', '40', '320px', '45px', 'auto', 'auto'],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("SCENE_A_edgeActions.js");
})("SCENE_A");
