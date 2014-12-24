/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'paper_bg_12',
                type: 'image',
                rect: ['0', '0','2050px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paper_bg_1.png",'0px','0px']
            },
            {
                id: 'houses_bg_1',
                type: 'image',
                rect: ['201px', '1487px','1096px','593px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"houses_bg_1.png",'0px','0px']
            },
            {
                id: 'house_1',
                type: 'image',
                rect: ['30px', '1758px','372px','699px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"house_1.png",'0px','0px']
            },
            {
                id: 'house_2',
                type: 'image',
                rect: ['1156px', '1758px','448px','679px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"house_2.png",'0px','0px']
            },
            {
                id: 'Group3',
                type: 'group',
                rect: ['362', '1881','678','520','auto', 'auto'],
                c: [
                {
                    id: 'house_3',
                    type: 'image',
                    rect: ['0px', '0px','402px','507px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"house_3.png",'0px','0px']
                },
                {
                    id: 'tree_1',
                    type: 'image',
                    rect: ['378px', '204px','300px','316px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"tree_1.png",'0px','0px']
                }]
            },
            {
                id: 'Group4',
                type: 'group',
                rect: ['160', '1527','2028','973','auto', 'auto'],
                c: [
                {
                    id: 'C_Esser',
                    display: 'none',
                    type: 'rect',
                    rect: ['3246px', '676px','auto','auto','auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'bistro_0',
                    type: 'image',
                    rect: ['1426px', '540px','492px','355px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bistro_0.png",'0px','0px']
                },
                {
                    id: 'BG_1',
                    type: 'image',
                    rect: ['0px', '0px','2028px','973px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"BG_1.png",'0px','0px']
                }]
            },
            {
                id: 'C_Pisser',
                display: 'none',
                type: 'rect',
                rect: ['680px', '745px','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Group',
                display: 'none',
                type: 'group',
                rect: ['1933px', '882','763px','419px','auto', 'auto'],
                c: [
                {
                    id: 'bg_trash_cans',
                    type: 'image',
                    rect: ['0px', '0px','654px','400px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bg_trash_cans.png",'0px','0px'],
                    transform: [[],[],[],['0.7','0.7']]
                },
                {
                    id: 'A_trash_1',
                    type: 'rect',
                    rect: ['721px', '255px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Title_Intro',
                type: 'rect',
                rect: ['-1288px', '-111px','auto','auto','auto', 'auto']
            },
            {
                id: 'taube',
                display: 'block',
                type: 'rect',
                rect: ['1537px', '1477px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.48','0.48']]
            },
            {
                id: 'taubeCopy',
                display: 'block',
                type: 'rect',
                rect: ['875px', '1342px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.35429','0.35429']]
            },
            {
                id: 'taubeCopy2',
                display: 'block',
                type: 'rect',
                rect: ['438px', '1360px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['-0.28572','0.28571']]
            },
            {
                id: 'BG_0',
                type: 'image',
                rect: ['0px', '2350px','4096px','567px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
            },
            {
                id: 'BG_12',
                display: 'none',
                type: 'image',
                rect: ['2092px', '991px','2028px','973px','auto', 'auto'],
                clip: ['rect(0px 1941.1416015625px 973px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"BG_1.png",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'A_trash_2',
                display: 'none',
                type: 'rect',
                rect: ['1118', '924','auto','auto','auto', 'auto']
            },
            {
                id: 'A_trash_3',
                display: 'none',
                type: 'rect',
                rect: ['1566', '924','auto','auto','auto', 'auto']
            },
            {
                id: 'trashBin',
                display: 'none',
                type: 'image',
                rect: ['1749px', '809px','144px','247px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"trashBin.png",'0px','0px']
            },
            {
                id: 'B_taube2',
                display: 'none',
                type: 'rect',
                rect: ['485px', '503px','auto','auto','auto', 'auto']
            },
            {
                id: 'BG5',
                display: 'none',
                type: 'image',
                rect: ['22px', '278px','890px','711px','auto', 'auto'],
                opacity: 0.7,
                fill: ["rgba(0,0,0,0)",im+"BG5.png",'0px','0px'],
                transform: [[],['1']]
            },
            {
                id: 'plasticbag',
                type: 'rect',
                rect: ['-355px', '486px','auto','auto','auto', 'auto'],
                autoOrient: true
            },
            {
                id: 'A_tv',
                display: 'none',
                type: 'rect',
                rect: ['1679px', '854px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.29','0.29']]
            },
            {
                id: 'A_cigPile',
                display: 'none',
                type: 'rect',
                rect: ['1567px', '1228px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.60428','0.60428']]
            },
            {
                id: 'A_shoes',
                display: 'none',
                type: 'rect',
                rect: ['1074px', '1036px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.5819','0.5819']]
            },
            {
                id: 'A_teddy',
                display: 'none',
                type: 'rect',
                rect: ['600px', '985px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.4152','0.4152']]
            },
            {
                id: 'H_still_leftright',
                display: 'none',
                type: 'rect',
                rect: ['964px', '1001px','auto','auto','auto', 'auto']
            },
            {
                id: 'H_bag_appear',
                display: 'none',
                type: 'rect',
                rect: ['756px', '966px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.86806','0.86806']]
            },
            {
                id: 'H_walk',
                display: 'none',
                type: 'rect',
                rect: ['1152', '1104','auto','auto','auto', 'auto'],
                clip: ['rect(0px 320px 500px 13.044392585754395px)']
            },
            {
                id: 'C_paperball',
                display: 'none',
                type: 'rect',
                rect: ['1170px', '715px','auto','auto','auto', 'auto']
            },
            {
                id: 'A_cripmate',
                display: 'none',
                type: 'rect',
                rect: ['442', '488','auto','auto','auto', 'auto'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                transform: [[],[],[],['0.6','0.6']]
            },
            {
                id: 'dust_button3',
                display: 'block',
                type: 'rect',
                rect: ['958', '663','auto','auto','auto', 'auto']
            },
            {
                id: 'text_5',
                display: 'block',
                type: 'rect',
                rect: ['508', '496','auto','auto','auto', 'auto']
            },
            {
                id: 'text_4',
                display: 'block',
                type: 'rect',
                rect: ['508px', '496px','auto','auto','auto', 'auto']
            },
            {
                id: 'text_3',
                display: 'block',
                type: 'rect',
                rect: ['508px', '496px','auto','auto','auto', 'auto']
            },
            {
                id: 'text_2',
                display: 'block',
                type: 'rect',
                rect: ['508', '496','auto','auto','auto', 'auto']
            },
            {
                id: 'text_1',
                display: 'block',
                type: 'rect',
                rect: ['508px', '496px','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle',
                display: 'block',
                type: 'rect',
                rect: ['-2px', '3px','2055px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Theodora',
                display: 'none',
                type: 'rect',
                rect: ['366px', '521px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.65072','0.65072']]
            },
            {
                id: 'dust_icon_invert4',
                display: 'block',
                type: 'rect',
                rect: ['935px', '672px','auto','auto','auto', 'auto']
            },
            {
                id: 'SFX_rumble',
                type: 'audio',
                tag: 'audio',
                rect: ['570', '374','320px','45px','auto', 'auto'],
                source: ['media/SFX_rumble.mp3']
            }],
            symbolInstances: [
            {
                id: 'A_cigPile',
                symbolName: 'A_cigPile',
                autoPlay: {

                }
            },
            {
                id: 'A_trash_2',
                symbolName: 'A_trash_2',
                autoPlay: {

                }
            },
            {
                id: 'text_5',
                symbolName: 'text_5',
                autoPlay: {

                }
            },
            {
                id: 'text_1',
                symbolName: 'text_1',
                autoPlay: {

                }
            },
            {
                id: 'dust_icon_invert4',
                symbolName: 'dust_icon_invert',
                autoPlay: {

                }
            },
            {
                id: 'text_4',
                symbolName: 'text_4',
                autoPlay: {

                }
            },
            {
                id: 'taube',
                symbolName: 'taube',
                autoPlay: {

                }
            },
            {
                id: 'Theodora',
                symbolName: 'Theodora',
                autoPlay: {

                }
            },
            {
                id: 'text_2',
                symbolName: 'text_2',
                autoPlay: {

                }
            },
            {
                id: 'text_3',
                symbolName: 'text_3',
                autoPlay: {

                }
            },
            {
                id: 'taubeCopy2',
                symbolName: 'taube',
                autoPlay: {

                }
            },
            {
                id: 'dust_button3',
                symbolName: 'dust_button',
                autoPlay: {

                }
            },
            {
                id: 'A_trash_3',
                symbolName: 'A_trash_3',
                autoPlay: {

                }
            },
            {
                id: 'B_taube2',
                symbolName: 'B_taube2',
                autoPlay: {

                }
            },
            {
                id: 'A_cripmate',
                symbolName: 'A_cripmate',
                autoPlay: {

                }
            },
            {
                id: 'C_paperball',
                symbolName: 'A_paperball',
                autoPlay: {

                }
            },
            {
                id: 'H_walk',
                symbolName: 'H_walk',
                autoPlay: {

                }
            },
            {
                id: 'plasticbag',
                symbolName: 'plasticbag',
                autoPlay: {

                }
            },
            {
                id: 'taubeCopy',
                symbolName: 'taube',
                autoPlay: {

                }
            },
            {
                id: 'A_shoes',
                symbolName: 'A_shoes',
                autoPlay: {

                }
            },
            {
                id: 'H_bag_appear',
                symbolName: 'H_bag_appear',
                autoPlay: {

                }
            },
            {
                id: 'C_Esser',
                symbolName: 'C_Esser',
                autoPlay: {

                }
            },
            {
                id: 'Title_Intro',
                symbolName: 'Title_Intro',
                autoPlay: {

                }
            },
            {
                id: 'H_still_leftright',
                symbolName: 'H_still_leftright',
                autoPlay: {

                }
            },
            {
                id: 'A_tv',
                symbolName: 'A_tv',
                autoPlay: {

                }
            },
            {
                id: 'A_teddy',
                symbolName: 'A_teddy',
                autoPlay: {

                }
            },
            {
                id: 'A_trash_1',
                symbolName: 'A_trash_1',
                autoPlay: {

                }
            },
            {
                id: 'C_Pisser',
                symbolName: 'C_Pisser',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_A_cigPile}": [
                ["style", "top", '1228px'],
                ["transform", "scaleY", '0.60428'],
                ["transform", "scaleX", '0.60428'],
                ["style", "left", '3639px'],
                ["style", "display", 'none']
            ],
            "${_Group3}": [
                ["style", "top", '1860px'],
                ["style", "left", '362px']
            ],
            "${_paper_bg_12}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_H_walk}": [
                ["style", "top", '917px'],
                ["transform", "scaleY", '0.98125'],
                ["transform", "scaleX", '0.98125'],
                ["style", "display", 'none'],
                ["style", "clip", [0,320,500,13.044392585754395], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '898px']
            ],
            "${_A_trash_1}": [
                ["style", "top", '96px'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '37px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_H_bag_appear}": [
                ["style", "top", '886px'],
                ["transform", "scaleY", '0.86806'],
                ["transform", "scaleX", '0.86806'],
                ["style", "left", '676px'],
                ["style", "display", 'none']
            ],
            "${_plasticbag}": [
                ["motion", "location", '2292px 815.79638671875px'],
                ["transform", "scaleY", '0.62622'],
                ["transform", "scaleX", '0.8']
            ],
            "${_Theodora}": [
                ["style", "top", '521px'],
                ["transform", "scaleY", '0.65072'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '366px'],
                ["transform", "scaleX", '0.65072']
            ],
            "${_house_2}": [
                ["style", "top", '1752px'],
                ["style", "left", '1156px']
            ],
            "${_BG_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_taube}": [
                ["style", "top", '1737px'],
                ["transform", "scaleY", '0.48'],
                ["transform", "scaleX", '0.48'],
                ["style", "left", '1537px'],
                ["style", "display", 'block']
            ],
            "${_Group}": [
                ["style", "display", 'none'],
                ["style", "left", '1928px']
            ],
            "${_B_taube2}": [
                ["style", "top", '1761px'],
                ["transform", "scaleY", '0.48'],
                ["transform", "scaleX", '0.48'],
                ["style", "left", '1083px'],
                ["style", "display", 'none']
            ],
            "${_text_2}": [
                ["style", "display", 'block'],
                ["style", "top", '709px'],
                ["style", "left", '671px'],
                ["transform", "rotateZ", '3deg']
            ],
            "${_Group4}": [
                ["style", "top", '1787px'],
                ["style", "left", '160px']
            ],
            "${_tree_1}": [
                ["style", "height", '316px'],
                ["style", "top", '204px'],
                ["style", "left", '378px'],
                ["style", "width", '300px']
            ],
            "${_bg_trash_cans}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_Title_Intro}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.60975618721024'],
                ["style", "left", '0px']
            ],
            "${_C_Esser}": [
                ["style", "top", '500px'],
                ["transform", "scaleY", '0.44'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.44'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '1492px'],
                ["style", "opacity", '1']
            ],
            "${_dust_button3}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '953px'],
                ["style", "top", '1295px']
            ],
            "${_A_teddy}": [
                ["style", "top", '985px'],
                ["transform", "scaleY", '0.4152'],
                ["transform", "scaleX", '0.4152'],
                ["style", "left", '2672px'],
                ["style", "display", 'none']
            ],
            "${_text_3}": [
                ["style", "top", '891px'],
                ["transform", "rotateZ", '-2deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '130px']
            ],
            "${_A_tv}": [
                ["style", "top", '854px'],
                ["transform", "scaleY", '0.29'],
                ["transform", "scaleX", '0.29'],
                ["style", "left", '3701px'],
                ["style", "display", 'none']
            ],
            "${_A_trash_3}": [
                ["style", "top", '979px'],
                ["transform", "scaleY", '0.74667'],
                ["style", "display", 'none'],
                ["style", "left", '3599px'],
                ["transform", "scaleX", '0.74667']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${_trashBin}": [
                ["style", "top", '809px'],
                ["style", "height", '247px'],
                ["style", "display", 'none'],
                ["style", "left", '2108px'],
                ["style", "width", '144px']
            ],
            "${_text_1}": [
                ["style", "display", 'block'],
                ["style", "top", '509px'],
                ["style", "left", '244px'],
                ["transform", "rotateZ", '-1deg']
            ],
            "${_A_trash_2}": [
                ["style", "top", '1844px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '-1'],
                ["style", "left", '-79px'],
                ["style", "display", 'none']
            ],
            "${_BG_12}": [
                ["style", "top", '184px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,1941.1416015625,973,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '2092px'],
                ["transform", "scaleX", '-1']
            ],
            "${_house_1}": [
                ["style", "top", '1752px'],
                ["style", "left", '30px']
            ],
            "${_houses_bg_1}": [
                ["style", "top", '1537px'],
                ["style", "opacity", '0.45528455284553'],
                ["style", "left", '201px']
            ],
            "${_taubeCopy}": [
                ["style", "top", '1602px'],
                ["transform", "scaleY", '0.35429'],
                ["transform", "scaleX", '0.35429'],
                ["style", "left", '875px'],
                ["style", "display", 'block']
            ],
            "${_H_still_leftright}": [
                ["style", "top", '1870px'],
                ["style", "left", '884px'],
                ["style", "display", 'none']
            ],
            "${_house_3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_C_paperball}": [
                ["style", "top", '1209px'],
                ["style", "left", '2835px'],
                ["style", "display", 'none']
            ],
            "${_C_Pisser}": [
                ["style", "top", '1615px'],
                ["transform", "scaleY", '0.80896'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.80896'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '415px'],
                ["style", "opacity", '1']
            ],
            "${_text_5}": [
                ["style", "top", '1143px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '591px']
            ],
            "${_A_cripmate}": [
                ["style", "top", '2114px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '-199px'],
                ["style", "display", 'none']
            ],
            "${_BG5}": [
                ["style", "top", '278px'],
                ["transform", "rotateZ", '1deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2094px']
            ],
            "${_bistro_0}": [
                ["style", "left", '1426px'],
                ["style", "top", '510px']
            ],
            "${_dust_icon_invert4}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '935px'],
                ["style", "top", '672px']
            ],
            "${_text_4}": [
                ["style", "top", '1022px'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '586px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,249,240,1.00)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_taubeCopy2}": [
                ["style", "top", '1620px'],
                ["transform", "scaleY", '0.28571'],
                ["transform", "scaleX", '-0.28572'],
                ["style", "left", '438px'],
                ["style", "display", 'block']
            ],
            "${_BG_0}": [
                ["style", "top", '2560px'],
                ["style", "left", '0px']
            ],
            "${_A_shoes}": [
                ["style", "top", '1036px'],
                ["transform", "scaleY", '0.5819'],
                ["transform", "scaleX", '0.5819'],
                ["style", "left", '3146px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 59537,
            autoPlay: true,
            labels: {
                "start": 4272,
                "text_in": 10000,
                "city_start": 17000,
                "city_out": 44000
            },
            timeline: [
                { id: "eid1278", tween: [ "style", "${_house_1}", "top", '1162px', { fromValue: '1752px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1309", tween: [ "style", "${_house_1}", "top", '376px', { fromValue: '1162px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1807", tween: [ "transform", "${_C_Esser}", "scaleY", '0.44', { fromValue: '0.44'}], position: 23000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1274", tween: [ "style", "${_taube}", "top", '941px', { fromValue: '1737px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1305", tween: [ "style", "${_taube}", "top", '128px', { fromValue: '941px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1671", tween: [ "style", "${_taube}", "top", '149px', { fromValue: '128px'}], position: 44000, duration: 12000 },
                { id: "eid1871", tween: [ "style", "${_dust_button3}", "top", '1295px', { fromValue: '1295px'}], position: 17000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1967", tween: [ "style", "${_A_cripmate}", "left", '-199px', { fromValue: '-199px'}], position: 23000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1971", tween: [ "style", "${_A_cripmate}", "left", '-2927px', { fromValue: '-199px'}], position: 44000, duration: 11000 },
                { id: "eid2299", tween: [ "style", "${_BG_12}", "top", '184px', { fromValue: '184px'}], position: 44000, duration: 0 },
                { id: "eid2301", tween: [ "style", "${_BG_12}", "top", '185px', { fromValue: '184px'}], position: 55000, duration: 0 },
                { id: "eid1051", tween: [ "style", "${_H_walk}", "top", '917px', { fromValue: '917px'}], position: 5000, duration: 0 },
                { id: "eid2013", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2267", tween: [ "transform", "${_A_trash_2}", "scaleY", '1', { fromValue: '1'}], position: 23000, duration: 0 },
                { id: "eid1972", tween: [ "style", "${_A_cripmate}", "top", '1180px', { fromValue: '2114px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1279", tween: [ "style", "${_houses_bg_1}", "top", '1121px', { fromValue: '1537px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1691", tween: [ "style", "${_houses_bg_1}", "top", '389px', { fromValue: '1121px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1151", tween: [ "style", "${_BG_1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid2559", tween: [ "style", "${_BG_1}", "left", '13px', { fromValue: '0px'}], position: 56000, duration: 0 },
                { id: "eid1614", tween: [ "style", "${_dust_button3}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 521, easing: "easeInOutBounce" },
                { id: "eid1273", tween: [ "style", "${_taubeCopy}", "top", '806px', { fromValue: '1602px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1304", tween: [ "style", "${_taubeCopy}", "top", '-10px', { fromValue: '806px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1683", tween: [ "style", "${_taubeCopy}", "top", '11px', { fromValue: '-10px'}], position: 44000, duration: 12000 },
                { id: "eid1146", tween: [ "style", "${_tree_1}", "left", '378px', { fromValue: '378px'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1637", tween: [ "style", "${_tree_1}", "left", '378px', { fromValue: '378px'}], position: 44000, duration: 0, easing: "easeOutCubic" },
                { id: "eid1516", tween: [ "style", "${_text_5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1847", tween: [ "style", "${_text_5}", "display", 'none', { fromValue: 'none'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1881", tween: [ "style", "${_text_5}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1882", tween: [ "style", "${_text_5}", "display", 'none', { fromValue: 'block'}], position: 18250, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1505", tween: [ "style", "${_text_1}", "top", '509px', { fromValue: '509px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2266", tween: [ "transform", "${_A_trash_2}", "scaleX", '-1', { fromValue: '-1'}], position: 23000, duration: 0 },
                { id: "eid1277", tween: [ "style", "${_house_2}", "top", '1162px', { fromValue: '1752px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1308", tween: [ "style", "${_house_2}", "top", '386px', { fromValue: '1162px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1185", tween: [ "style", "${_BG_0}", "left", '0px', { fromValue: '0px'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1680", tween: [ "style", "${_BG_0}", "left", '-2048px', { fromValue: '0px'}], position: 44000, duration: 12000 },
                { id: "eid2539", tween: [ "style", "${_A_shoes}", "left", '1054px', { fromValue: '3146px'}], position: 44000, duration: 11000 },
                { id: "eid2548", tween: [ "style", "${_A_shoes}", "left", '860px', { fromValue: '1054px'}], position: 55000, duration: 1000 },
                { id: "eid1943", tween: [ "style", "${_C_Pisser}", "left", '415px', { fromValue: '415px'}], position: 23000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1949", tween: [ "style", "${_C_Pisser}", "left", '-1633px', { fromValue: '415px'}], position: 44000, duration: 12000 },
                { id: "eid1684", tween: [ "style", "${_taubeCopy2}", "left", '-1610px', { fromValue: '438px'}], position: 44000, duration: 12000 },
                { id: "eid2104", tween: [ "transform", "${_B_taube2}", "scaleY", '0.48', { fromValue: '0.48'}], position: 23000, duration: 0 },
                { id: "eid1524", tween: [ "style", "${_text_5}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1250 },
                { id: "eid1867", tween: [ "transform", "${_text_5}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1874", tween: [ "transform", "${_text_5}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 23000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2545", tween: [ "style", "${_A_tv}", "left", '1699px', { fromValue: '3701px'}], position: 44000, duration: 11000 },
                { id: "eid2546", tween: [ "style", "${_A_tv}", "left", '1543px', { fromValue: '1699px'}], position: 55000, duration: 1000 },
                { id: "eid1712", tween: [ "transform", "${_H_bag_appear}", "scaleY", '0.86806', { fromValue: '0.86806'}], position: 5000, duration: 0 },
                { id: "eid1707", tween: [ "transform", "${_H_bag_appear}", "scaleY", '0.86806', { fromValue: '0.86806'}], position: 55454, duration: 0 },
                { id: "eid2245", tween: [ "style", "${_A_cripmate}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid2551", tween: [ "style", "${_A_cripmate}", "display", 'none', { fromValue: 'block'}], position: 48000, duration: 0 },
                { id: "eid2564", tween: [ "style", "${_BG5}", "left", '144px', { fromValue: '2094px'}], position: 44000, duration: 11000 },
                { id: "eid2565", tween: [ "style", "${_BG5}", "left", '-10px', { fromValue: '144px'}], position: 55000, duration: 1000 },
                { id: "eid1021", tween: [ "style", "${_H_bag_appear}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1702", tween: [ "style", "${_H_bag_appear}", "display", 'block', { fromValue: 'none'}], position: 55454, duration: 0 },
                { id: "eid1945", tween: [ "style", "${_C_Esser}", "left", '1496px', { fromValue: '1492px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1981", tween: [ "style", "${_C_Esser}", "left", '1492px', { fromValue: '1496px'}], position: 44000, duration: 12768 },
                { id: "eid2103", tween: [ "transform", "${_B_taube2}", "scaleX", '0.48', { fromValue: '0.48'}], position: 23000, duration: 0 },
                { id: "eid2540", tween: [ "style", "${_A_cigPile}", "left", '2877px', { fromValue: '3639px'}], position: 44000, duration: 4000 },
                { id: "eid2550", tween: [ "style", "${_A_cigPile}", "left", '1547px', { fromValue: '2877px'}], position: 48000, duration: 7000 },
                { id: "eid2549", tween: [ "style", "${_A_cigPile}", "left", '1353px', { fromValue: '1547px'}], position: 55000, duration: 1000 },
                { id: "eid2274", tween: [ "transform", "${_A_trash_3}", "scaleX", '0.74667', { fromValue: '0.74667'}], position: 23000, duration: 0 },
                { id: "eid1149", tween: [ "style", "${_house_1}", "left", '30px', { fromValue: '30px'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1676", tween: [ "style", "${_house_1}", "left", '-2018px', { fromValue: '30px'}], position: 44000, duration: 12000 },
                { id: "eid1276", tween: [ "style", "${_Group3}", "top", '1285px', { fromValue: '1860px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1307", tween: [ "style", "${_Group3}", "top", '529px', { fromValue: '1285px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid2529", tween: [ "style", "${_A_cigPile}", "top", '1228px', { fromValue: '1228px'}], position: 55000, duration: 0 },
                { id: "eid1624", tween: [ "style", "${_BG_1}", "top", '-110px', { fromValue: '0px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1625", tween: [ "style", "${_BG_1}", "top", '0px', { fromValue: '-110px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid2560", tween: [ "style", "${_BG_1}", "top", '-3px', { fromValue: '0px'}], position: 56000, duration: 0 },
                { id: "eid2538", tween: [ "style", "${_A_teddy}", "left", '670px', { fromValue: '2672px'}], position: 44000, duration: 11000 },
                { id: "eid2547", tween: [ "style", "${_A_teddy}", "left", '486px', { fromValue: '670px'}], position: 55000, duration: 1000 },
                { id: "eid1813", tween: [ "style", "${_C_Esser}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2554", tween: [ "style", "${_C_Esser}", "display", 'none', { fromValue: 'block'}], position: 54687, duration: 0 },
                { id: "eid2533", tween: [ "style", "${_A_cigPile}", "display", 'block', { fromValue: 'none'}], position: 52811, duration: 0 },
                { id: "eid2555", tween: [ "style", "${_taube}", "display", 'none', { fromValue: 'block'}], position: 54687, duration: 0 },
                { id: "eid2590", tween: [ "style", "${_trashBin}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2591", tween: [ "style", "${_trashBin}", "display", 'block', { fromValue: 'none'}], position: 52376, duration: 0 },
                { id: "eid1272", tween: [ "style", "${_taubeCopy2}", "top", '824px', { fromValue: '1620px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1303", tween: [ "style", "${_taubeCopy2}", "top", '8px', { fromValue: '824px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1685", tween: [ "style", "${_taubeCopy2}", "top", '29px', { fromValue: '8px'}], position: 44000, duration: 12000 },
                { id: "eid1314", tween: [ "style", "${_H_still_leftright}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1699", tween: [ "style", "${_H_still_leftright}", "display", 'none', { fromValue: 'block'}], position: 44000, duration: 0 },
                { id: "eid1851", tween: [ "style", "${_text_5}", "left", '591px', { fromValue: '591px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1856", tween: [ "style", "${_text_5}", "left", '551px', { fromValue: '591px'}], position: 23000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1713", tween: [ "transform", "${_H_bag_appear}", "scaleX", '0.86806', { fromValue: '0.86806'}], position: 5000, duration: 0 },
                { id: "eid1714", tween: [ "transform", "${_H_bag_appear}", "scaleX", '-0.86806', { fromValue: '0.86806'}], position: 55454, duration: 0 },
                { id: "eid1155", tween: [ "style", "${_tree_1}", "top", '204px', { fromValue: '204px'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1288", tween: [ "style", "${_tree_1}", "top", '204px', { fromValue: '204px'}], position: 44000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1939", tween: [ "style", "${_C_Pisser}", "top", '762px', { fromValue: '1615px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1952", tween: [ "style", "${_C_Pisser}", "top", '765px', { fromValue: '762px'}], position: 44000, duration: 12000 },
                { id: "eid1526", tween: [ "style", "${_text_4}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1250 },
                { id: "eid1467", tween: [ "transform", "${_text_4}", "rotateZ", '-1deg', { fromValue: '-1deg'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1708", tween: [ "style", "${_H_bag_appear}", "left", '676px', { fromValue: '676px'}], position: 5000, duration: 0 },
                { id: "eid1817", tween: [ "style", "${_H_bag_appear}", "left", '836px', { fromValue: '936px'}], position: 55454, duration: 546 },
                { id: "eid1869", tween: [ "style", "${_dust_button3}", "left", '953px', { fromValue: '953px'}], position: 17000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1050", tween: [ "style", "${_H_walk}", "left", '898px', { fromValue: '898px'}], position: 5000, duration: 0 },
                { id: "eid2275", tween: [ "transform", "${_A_trash_3}", "scaleY", '0.74667', { fromValue: '0.74667'}], position: 23000, duration: 0 },
                { id: "eid1126", tween: [ "style", "${_H_bag_appear}", "top", '886px', { fromValue: '886px'}], position: 5000, duration: 0 },
                { id: "eid1706", tween: [ "style", "${_H_bag_appear}", "top", '886px', { fromValue: '886px'}], position: 55454, duration: 0 },
                { id: "eid1147", tween: [ "style", "${_house_3}", "left", '0px', { fromValue: '0px'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1638", tween: [ "style", "${_house_3}", "left", '0px', { fromValue: '0px'}], position: 44000, duration: 0, easing: "easeOutCubic" },
                { id: "eid2532", tween: [ "style", "${_A_tv}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0 },
                { id: "eid1156", tween: [ "style", "${_house_3}", "top", '0px', { fromValue: '0px'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1289", tween: [ "style", "${_house_3}", "top", '0px', { fromValue: '0px'}], position: 44000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1893", tween: [ "style", "${_C_Esser}", "top", '570px', { fromValue: '500px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid2382", tween: [ "style", "${_dust_icon_invert4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 560, easing: "easeInQuad" },
                { id: "eid2383", tween: [ "style", "${_dust_icon_invert4}", "opacity", '0', { fromValue: '1'}], position: 4272, duration: 560, easing: "easeInQuad" },
                { id: "eid1687", tween: [ "style", "${_H_still_leftright}", "top", '1700px', { fromValue: '1870px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1323", tween: [ "style", "${_H_still_leftright}", "top", '921px', { fromValue: '1700px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid2566", tween: [ "style", "${_BG5}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0 },
                { id: "eid1610", tween: [ "style", "${_dust_button3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1621", tween: [ "style", "${_dust_button3}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1886", tween: [ "style", "${_dust_button3}", "display", 'none', { fromValue: 'block'}], position: 17521, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1855", tween: [ "transform", "${_text_3}", "rotateZ", '-2deg', { fromValue: '-2deg'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1861", tween: [ "transform", "${_text_3}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 23000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1841", tween: [ "style", "${_text_3}", "top", '891px', { fromValue: '891px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1860", tween: [ "style", "${_text_3}", "top", '1001px', { fromValue: '891px'}], position: 23000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1271", tween: [ "style", "${_BG_0}", "top", '1804px', { fromValue: '2560px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1695", tween: [ "style", "${_BG_0}", "top", '951px', { fromValue: '1804px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1717", tween: [ "style", "${_BG_0}", "top", '951px', { fromValue: '951px'}], position: 44000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2277", tween: [ "style", "${_A_trash_2}", "top", '992px', { fromValue: '1844px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1100", tween: [ "style", "${_Title_Intro}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid1341", tween: [ "style", "${_Title_Intro}", "top", '-690px', { fromValue: '0px'}], position: 10000, duration: 3130, easing: "easeInOutCubic" },
                { id: "eid1617", tween: [ "style", "${_Title_Intro}", "top", '-963px', { fromValue: '-690px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1620", tween: [ "style", "${_Title_Intro}", "top", '-1523px', { fromValue: '-963px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid2568", tween: [ "style", "${_C_paperball}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2567", tween: [ "style", "${_C_paperball}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0 },
                { id: "eid1514", tween: [ "style", "${_text_3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1837", tween: [ "style", "${_text_3}", "display", 'none', { fromValue: 'none'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1879", tween: [ "style", "${_text_3}", "display", 'none', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1884", tween: [ "style", "${_text_3}", "display", 'none', { fromValue: 'none'}], position: 18250, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1275", tween: [ "style", "${_Group4}", "top", '1101px', { fromValue: '1787px'}], position: 17000, duration: 6000, easing: "easeOutQuad" },
                { id: "eid1693", tween: [ "style", "${_Group4}", "top", '178px', { fromValue: '1101px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1513", tween: [ "style", "${_text_2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1839", tween: [ "style", "${_text_2}", "display", 'none', { fromValue: 'none'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1878", tween: [ "style", "${_text_2}", "display", 'none', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2025", tween: [ "style", "${_C_paperball}", "left", '689px', { fromValue: '2835px'}], position: 44000, duration: 11000 },
                { id: "eid2027", tween: [ "style", "${_C_paperball}", "left", '460px', { fromValue: '689px'}], position: 55000, duration: 1000 },
                { id: "eid1682", tween: [ "style", "${_taubeCopy}", "left", '-1173px', { fromValue: '875px'}], position: 44000, duration: 12000 },
                { id: "eid1668", tween: [ "style", "${_houses_bg_1}", "left", '-1847px', { fromValue: '201px'}], position: 44000, duration: 12000 },
                { id: "eid2286", tween: [ "style", "${_A_trash_3}", "left", '1645px', { fromValue: '3599px'}], position: 44000, duration: 11000 },
                { id: "eid2291", tween: [ "style", "${_A_trash_3}", "left", '1485px', { fromValue: '1645px'}], position: 55000, duration: 1000 },
                { id: "eid1507", tween: [ "style", "${_text_2}", "left", '671px', { fromValue: '671px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2271", tween: [ "style", "${_BG_12}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid1865", tween: [ "style", "${_text_5}", "top", '1143px', { fromValue: '1143px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1873", tween: [ "style", "${_text_5}", "top", '1313px', { fromValue: '1143px'}], position: 23000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1054", tween: [ "style", "${_H_walk}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid1700", tween: [ "style", "${_H_walk}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0 },
                { id: "eid1701", tween: [ "style", "${_H_walk}", "display", 'none', { fromValue: 'block'}], position: 55454, duration: 0 },
                { id: "eid2569", tween: [ "style", "${_A_trash_3}", "display", 'block', { fromValue: 'none'}], position: 53000, duration: 0 },
                { id: "eid1148", tween: [ "style", "${_house_2}", "left", '1156px', { fromValue: '1156px'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1678", tween: [ "style", "${_house_2}", "left", '-892px', { fromValue: '1156px'}], position: 44000, duration: 12000 },
                { id: "eid2556", tween: [ "style", "${_taubeCopy}", "display", 'none', { fromValue: 'block'}], position: 54687, duration: 0 },
                { id: "eid2042", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 8588, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2043", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 56000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1672", tween: [ "style", "${_Group4}", "left", '-1888px', { fromValue: '160px'}], position: 44000, duration: 12000 },
                { id: "eid1892", tween: [ "style", "${_bistro_0}", "top", '580px', { fromValue: '510px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid1982", tween: [ "style", "${_bistro_0}", "top", '579px', { fromValue: '580px'}], position: 44000, duration: 0, easing: "easeInQuad" },
                { id: "eid2041", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 3000, easing: "easeInQuad" },
                { id: "eid2045", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 57537, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid937", tween: [ "motion", "${_plasticbag}", [[2292, 815.8, 0, 0],[1980.6, 614.04, -483.89, -92.57, -554.15, -106.01],[1473.35, 766.57, -494.46, -149.16, -1299.56, -392.03],[1038.58, 778.26, -159.21, 245.04, -560.74, 863.06],[814.62, 484.07, 29.44, -70.07, 391.32, -931.4],[968.29, 426.61, 482.35, 261.41, 140.23, 76],[611.03, 768.16, -863.16, 118.01, -773.67, 105.78],[204.41, 784.9, -613.25, 27.24, -77.99, 3.46],[-236.95, 719.5, 0, 0]]], position: 11000, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid2112", tween: [ "style", "${_B_taube2}", "left", '1087px', { fromValue: '1083px'}], position: 23000, duration: 0 },
                { id: "eid2117", tween: [ "style", "${_B_taube2}", "left", '-1066px', { fromValue: '1087px'}], position: 44000, duration: 12000 },
                { id: "eid1844", tween: [ "style", "${_text_4}", "left", '586px', { fromValue: '586px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1862", tween: [ "style", "${_text_4}", "left", '696px', { fromValue: '586px'}], position: 23000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1504", tween: [ "transform", "${_text_1}", "rotateZ", '-1deg', { fromValue: '-1deg'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1506", tween: [ "style", "${_text_1}", "left", '244px', { fromValue: '244px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1099", tween: [ "style", "${_Title_Intro}", "left", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid1140", tween: [ "style", "${_Title_Intro}", "left", '1px', { fromValue: '0px'}], position: 17000, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1632", tween: [ "style", "${_Title_Intro}", "left", '1px', { fromValue: '1px'}], position: 44000, duration: 0, easing: "easeOutCubic" },
                { id: "eid1853", tween: [ "style", "${_text_2}", "top", '709px', { fromValue: '709px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1858", tween: [ "style", "${_text_2}", "top", '769px', { fromValue: '709px'}], position: 23000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1337", tween: [ "style", "${_Theodora}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid1145", tween: [ "style", "${_Group3}", "left", '362px', { fromValue: '362px'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid1674", tween: [ "style", "${_Group3}", "left", '-1686px', { fromValue: '362px'}], position: 44000, duration: 12000 },
                { id: "eid1864", tween: [ "style", "${_text_4}", "top", '1022px', { fromValue: '1022px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1872", tween: [ "style", "${_text_4}", "top", '1092px', { fromValue: '1022px'}], position: 23000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1486", tween: [ "transform", "${_text_2}", "rotateZ", '3deg', { fromValue: '3deg'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2251", tween: [ "style", "${_Theodora}", "display", 'block', { fromValue: 'none'}], position: 4272, duration: 0, easing: "easeOutCubic" },
                { id: "eid2030", tween: [ "style", "${_C_Pisser}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1984", tween: [ "style", "${_C_Pisser}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2553", tween: [ "style", "${_C_Pisser}", "display", 'none', { fromValue: 'block'}], position: 48000, duration: 0 },
                { id: "eid2302", tween: [ "style", "${_A_trash_3}", "top", '979px', { fromValue: '979px'}], position: 44000, duration: 0 },
                { id: "eid2552", tween: [ "style", "${_taubeCopy2}", "display", 'none', { fromValue: 'block'}], position: 48000, duration: 0 },
                { id: "eid1525", tween: [ "style", "${_text_3}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1250 },
                { id: "eid1838", tween: [ "style", "${_text_3}", "left", '130px', { fromValue: '130px'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1859", tween: [ "style", "${_text_3}", "left", '558px', { fromValue: '130px'}], position: 23000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1512", tween: [ "style", "${_text_1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1877", tween: [ "style", "${_text_1}", "display", 'none', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2289", tween: [ "style", "${_BG_12}", "left", '138px', { fromValue: '2092px'}], position: 44000, duration: 11000 },
                { id: "eid2290", tween: [ "style", "${_BG_12}", "left", '-22px', { fromValue: '138px'}], position: 55000, duration: 1000 },
                { id: "eid2531", tween: [ "style", "${_A_shoes}", "display", 'block', { fromValue: 'none'}], position: 50301, duration: 0 },
                { id: "eid2016", tween: [ "style", "${_Group}", "left", '-114px', { fromValue: '1928px'}], position: 44000, duration: 12000 },
                { id: "eid2116", tween: [ "style", "${_B_taube2}", "top", '961px', { fromValue: '1761px'}], position: 23000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid2263", tween: [ "style", "${_A_trash_2}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid2557", tween: [ "style", "${_A_trash_2}", "display", 'none', { fromValue: 'block'}], position: 45362, duration: 0 },
                { id: "eid2528", tween: [ "style", "${_A_tv}", "top", '854px', { fromValue: '854px'}], position: 55000, duration: 0 },
                { id: "eid2381", tween: [ "style", "${_dust_icon_invert4}", "display", 'none', { fromValue: 'block'}], position: 4272, duration: 0, easing: "easeInQuad" },
                { id: "eid2571", tween: [ "style", "${_trashBin}", "left", '1751px', { fromValue: '2108px'}], position: 53000, duration: 2000 },
                { id: "eid2572", tween: [ "style", "${_trashBin}", "left", '1591px', { fromValue: '1751px'}], position: 55000, duration: 1000 },
                { id: "eid1052", tween: [ "transform", "${_H_walk}", "scaleX", '0.98125', { fromValue: '0.98125'}], position: 5000, duration: 0 },
                { id: "eid2530", tween: [ "style", "${_A_teddy}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0 },
                { id: "eid1670", tween: [ "style", "${_taube}", "left", '-482px', { fromValue: '1537px'}], position: 44000, duration: 12000 },
                { id: "eid2206", tween: [ "style", "${_taube}", "left", '-512px', { fromValue: '-482px'}], position: 56000, duration: 69, easing: "easeInOutQuad" },
                { id: "eid2527", tween: [ "style", "${_A_shoes}", "top", '1036px', { fromValue: '1036px'}], position: 55000, duration: 0 },
                { id: "eid1515", tween: [ "style", "${_text_4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1842", tween: [ "style", "${_text_4}", "display", 'none', { fromValue: 'none'}], position: 13409, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1880", tween: [ "style", "${_text_4}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1883", tween: [ "style", "${_text_4}", "display", 'none', { fromValue: 'block'}], position: 18250, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1053", tween: [ "transform", "${_H_walk}", "scaleY", '0.98125', { fromValue: '0.98125'}], position: 5000, duration: 0 },
                { id: "eid2109", tween: [ "style", "${_B_taube2}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid2558", tween: [ "style", "${_B_taube2}", "display", 'none', { fromValue: 'block'}], position: 53695, duration: 0 },
                { id: "eid2264", tween: [ "style", "${_A_trash_2}", "left", '-79px', { fromValue: '-79px'}], position: 23000, duration: 0 },
                { id: "eid2294", tween: [ "style", "${_A_trash_2}", "left", '-827px', { fromValue: '-79px'}], position: 44000, duration: 3340 },
                { id: "eid2589", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Theodora}', [] ], ""], position: 5000 },
                { id: "eid2592", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_SFX_rumble}', [] ], ""], position: 10000 },
                { id: "eid1710", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_H_bag_appear}', ['still'] ], ""], position: 55454.980961894 }            ]
        }
    }
},
"Theodora": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Name_sprite',
                    type: 'image',
                    rect: ['42px', '11px', '1255px', '1800px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Name_sprite.png', '0px', '0px']
                },
                {
                    id: 'Name_spriteCopy',
                    type: 'image',
                    rect: ['42px', '11px', '1255px', '1800px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Name_sprite.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-34px', '1317px', '394px', 'auto', 'auto'],
                    id: 'Name_00072',
                    opacity: 0.065040650406504,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Name_0007.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Name_00072}": [
                ["style", "top", '-34px'],
                ["style", "opacity", '0.01'],
                ["style", "left", '0px'],
                ["subproperty", "filter.invert", '1']
            ],
            "${_Name_sprite}": [
                ["style", "top", '-1177px'],
                ["style", "opacity", '0.46'],
                ["style", "left", '39px']
            ],
            "${symbolSelector}": [
                ["style", "height", '299px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1317px']
            ],
            "${_Name_spriteCopy}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0.47'],
                ["style", "left", '39px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "name_opaque": 625,
                "full_opacity": 1209,
                "fade": 2000
            },
            timeline: [
                { id: "eid168", tween: [ "style", "${_Name_spriteCopy}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid169", tween: [ "style", "${_Name_spriteCopy}", "top", '-290px', { fromValue: '3px'}], position: 100, duration: 0 },
                { id: "eid170", tween: [ "style", "${_Name_spriteCopy}", "top", '-588px', { fromValue: '-290px'}], position: 200, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Name_spriteCopy}", "top", '-891px', { fromValue: '-588px'}], position: 300, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Name_spriteCopy}", "top", '-1177px', { fromValue: '-891px'}], position: 400, duration: 0 },
                { id: "eid173", tween: [ "style", "${_Name_spriteCopy}", "top", '-1476px', { fromValue: '-1177px'}], position: 500, duration: 0 },
                { id: "eid174", tween: [ "style", "${_Name_spriteCopy}", "top", '3px', { fromValue: '-1476px'}], position: 625, duration: 0 },
                { id: "eid175", tween: [ "style", "${_Name_spriteCopy}", "top", '-290px', { fromValue: '3px'}], position: 725, duration: 0 },
                { id: "eid176", tween: [ "style", "${_Name_spriteCopy}", "top", '-588px', { fromValue: '-290px'}], position: 825, duration: 0 },
                { id: "eid177", tween: [ "style", "${_Name_spriteCopy}", "top", '-891px', { fromValue: '-588px'}], position: 925, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Name_spriteCopy}", "top", '-1177px', { fromValue: '-891px'}], position: 1025, duration: 0 },
                { id: "eid179", tween: [ "style", "${_Name_spriteCopy}", "top", '-1476px', { fromValue: '-1177px'}], position: 1125, duration: 0 },
                { id: "eid180", tween: [ "style", "${_Name_spriteCopy}", "top", '3px', { fromValue: '-1476px'}], position: 1209, duration: 0 },
                { id: "eid181", tween: [ "style", "${_Name_spriteCopy}", "top", '-290px', { fromValue: '3px'}], position: 1309, duration: 0 },
                { id: "eid182", tween: [ "style", "${_Name_spriteCopy}", "top", '-588px', { fromValue: '-290px'}], position: 1409, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Name_spriteCopy}", "top", '-891px', { fromValue: '-588px'}], position: 1509, duration: 0 },
                { id: "eid184", tween: [ "style", "${_Name_spriteCopy}", "top", '-1177px', { fromValue: '-891px'}], position: 1609, duration: 0 },
                { id: "eid185", tween: [ "style", "${_Name_spriteCopy}", "top", '-1476px', { fromValue: '-1177px'}], position: 1709, duration: 0 },
                { id: "eid188", tween: [ "style", "${_Name_sprite}", "top", '-1177px', { fromValue: '-1177px'}], position: 0, duration: 0 },
                { id: "eid189", tween: [ "style", "${_Name_sprite}", "top", '-1476px', { fromValue: '-1177px'}], position: 100, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Name_sprite}", "top", '3px', { fromValue: '-1476px'}], position: 200, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Name_sprite}", "top", '-290px', { fromValue: '3px'}], position: 300, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Name_sprite}", "top", '-588px', { fromValue: '-285px'}], position: 400, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Name_sprite}", "top", '-891px', { fromValue: '-585px'}], position: 500, duration: 0 },
                { id: "eid190", tween: [ "style", "${_Name_sprite}", "top", '-1177px', { fromValue: '-891px'}], position: 625, duration: 0 },
                { id: "eid191", tween: [ "style", "${_Name_sprite}", "top", '-1476px', { fromValue: '-1177px'}], position: 725, duration: 0 },
                { id: "eid192", tween: [ "style", "${_Name_sprite}", "top", '3px', { fromValue: '-1476px'}], position: 825, duration: 0 },
                { id: "eid193", tween: [ "style", "${_Name_sprite}", "top", '-290px', { fromValue: '3px'}], position: 925, duration: 0 },
                { id: "eid194", tween: [ "style", "${_Name_sprite}", "top", '-588px', { fromValue: '-290px'}], position: 1025, duration: 0 },
                { id: "eid195", tween: [ "style", "${_Name_sprite}", "top", '-891px', { fromValue: '-588px'}], position: 1125, duration: 0 },
                { id: "eid196", tween: [ "style", "${_Name_sprite}", "top", '3px', { fromValue: '-891px'}], position: 1209, duration: 0 },
                { id: "eid197", tween: [ "style", "${_Name_sprite}", "top", '-1476px', { fromValue: '-1177px'}], position: 1309, duration: 0 },
                { id: "eid198", tween: [ "style", "${_Name_sprite}", "top", '3px', { fromValue: '-1476px'}], position: 1409, duration: 0 },
                { id: "eid199", tween: [ "style", "${_Name_sprite}", "top", '-290px', { fromValue: '3px'}], position: 1509, duration: 0 },
                { id: "eid200", tween: [ "style", "${_Name_sprite}", "top", '-588px', { fromValue: '-290px'}], position: 1609, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Name_sprite}", "top", '-891px', { fromValue: '-588px'}], position: 1709, duration: 0 },
                { id: "eid1142", tween: [ "subproperty", "${_Name_00072}", "filter.invert", '1', { fromValue: '1'}], position: 1509, duration: 0, easing: "easeOutQuad" },
                { id: "eid216", tween: [ "style", "${_Name_sprite}", "opacity", '0.15', { fromValue: '0.46'}], position: 0, duration: 300, easing: "easeInOutQuad" },
                { id: "eid217", tween: [ "style", "${_Name_sprite}", "opacity", '0.46', { fromValue: '0.15'}], position: 300, duration: 325, easing: "easeInOutQuad" },
                { id: "eid130", tween: [ "style", "${_Name_sprite}", "opacity", '0.4', { fromValue: '0.46'}], position: 625, duration: 584, easing: "easeInOutQuad" },
                { id: "eid1334", tween: [ "style", "${_Name_sprite}", "opacity", '0', { fromValue: '0.4'}], position: 2000, duration: 3000, easing: "easeInOutQuad" },
                { id: "eid214", tween: [ "style", "${_Name_spriteCopy}", "opacity", '0.15', { fromValue: '0.47'}], position: 0, duration: 300, easing: "easeInOutQuad" },
                { id: "eid215", tween: [ "style", "${_Name_spriteCopy}", "opacity", '0.47', { fromValue: '0.15'}], position: 300, duration: 325, easing: "easeInOutQuad" },
                { id: "eid187", tween: [ "style", "${_Name_spriteCopy}", "opacity", '0.4', { fromValue: '0.47'}], position: 625, duration: 584, easing: "easeInOutQuad" },
                { id: "eid1333", tween: [ "style", "${_Name_spriteCopy}", "opacity", '0', { fromValue: '0.4'}], position: 2000, duration: 3000, easing: "easeInOutQuad" },
                { id: "eid54", tween: [ "style", "${_Name_00072}", "opacity", '0.01', { fromValue: '0.01'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid129", tween: [ "style", "${_Name_00072}", "opacity", '1', { fromValue: '0.01'}], position: 625, duration: 584, easing: "easeOutQuad" },
                { id: "eid1332", tween: [ "style", "${_Name_00072}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 3000, easing: "easeInOutQuad" }            ]
        }
    }
},
"cloud_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_cloud2',
                    type: 'image',
                    rect: ['0px', '0px', '500px', '1200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_cloud.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_cloud2}": [
                ["style", "left", '0px'],
                ["style", "top", '-1000px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: true,
            timeline: [
                { id: "eid879", tween: [ "style", "${_ss_cloud2}", "top", '-1000px', { fromValue: '-1000px'}], position: 33, duration: 0 },
                { id: "eid880", tween: [ "style", "${_ss_cloud2}", "top", '0px', { fromValue: '-1000px'}], position: 133, duration: 0 },
                { id: "eid17", tween: [ "style", "${_ss_cloud2}", "top", '-200px', { fromValue: '0px'}], position: 233, duration: 0 },
                { id: "eid18", tween: [ "style", "${_ss_cloud2}", "top", '-400px', { fromValue: '-200px'}], position: 333, duration: 0 },
                { id: "eid19", tween: [ "style", "${_ss_cloud2}", "top", '-600px', { fromValue: '-400px'}], position: 433, duration: 0 },
                { id: "eid20", tween: [ "style", "${_ss_cloud2}", "top", '-800px', { fromValue: '-600px'}], position: 533, duration: 0 }            ]
        }
    }
},
"cloud_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_cloud2',
                    type: 'image',
                    rect: ['0px', '0px', '500px', '1200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_cloud.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_cloud2}": [
                ["style", "left", '0px'],
                ["style", "top", '-800px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '500px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: true,
            timeline: [
                { id: "eid376", tween: [ "style", "${_ss_cloud2}", "top", '-800px', { fromValue: '-800px'}], position: 67, duration: 0 },
                { id: "eid377", tween: [ "style", "${_ss_cloud2}", "top", '-1000px', { fromValue: '-800px'}], position: 167, duration: 0 },
                { id: "eid16", tween: [ "style", "${_ss_cloud2}", "top", '0px', { fromValue: '-1000px'}], position: 267, duration: 0 },
                { id: "eid17", tween: [ "style", "${_ss_cloud2}", "top", '-200px', { fromValue: '0px'}], position: 367, duration: 0 },
                { id: "eid18", tween: [ "style", "${_ss_cloud2}", "top", '-400px', { fromValue: '-200px'}], position: 467, duration: 0 },
                { id: "eid19", tween: [ "style", "${_ss_cloud2}", "top", '-600px', { fromValue: '-400px'}], position: 567, duration: 0 }            ]
        }
    }
},
"taube": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_taube_12',
                    type: 'image',
                    rect: ['0px', '0px', '2450px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_taube_1.png', '0px', '0px']
                },
                {
                    type: 'audio',
                    source: ['media/SFX_pigeon.mp3'],
                    id: 'SFX_pigeon',
                    rect: ['54', '40', '320px', '45px', 'auto', 'auto'],
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_taube_12}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_SFX_pigeon}": [
                ["property", "volume", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '350px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1292,
            autoPlay: true,
            labels: {
                "taube_fett": 292
            },
            timeline: [
                { id: "eid66", tween: [ "style", "${_ss_taube_12}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid67", tween: [ "style", "${_ss_taube_12}", "left", '-350px', { fromValue: '0px'}], position: 83, duration: 0, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "style", "${_ss_taube_12}", "left", '-700px', { fromValue: '-350px'}], position: 167, duration: 0, easing: "easeInOutQuad" },
                { id: "eid69", tween: [ "style", "${_ss_taube_12}", "left", '-1050px', { fromValue: '-700px'}], position: 292, duration: 0, easing: "easeInOutQuad" },
                { id: "eid70", tween: [ "style", "${_ss_taube_12}", "left", '-1400px', { fromValue: '-1050px'}], position: 375, duration: 0, easing: "easeInOutQuad" },
                { id: "eid71", tween: [ "style", "${_ss_taube_12}", "left", '-1750px', { fromValue: '-1400px'}], position: 459, duration: 0, easing: "easeInOutQuad" },
                { id: "eid72", tween: [ "style", "${_ss_taube_12}", "left", '-2100px', { fromValue: '-1750px'}], position: 542, duration: 0, easing: "easeInOutQuad" },
                { id: "eid73", tween: [ "style", "${_ss_taube_12}", "left", '-1400px', { fromValue: '-2100px'}], position: 625, duration: 0, easing: "easeInOutQuad" },
                { id: "eid74", tween: [ "style", "${_ss_taube_12}", "left", '-1750px', { fromValue: '-1400px'}], position: 709, duration: 0, easing: "easeInOutQuad" },
                { id: "eid75", tween: [ "style", "${_ss_taube_12}", "left", '-2100px', { fromValue: '-1750px'}], position: 792, duration: 0, easing: "easeInOutQuad" },
                { id: "eid76", tween: [ "style", "${_ss_taube_12}", "left", '-1400px', { fromValue: '-2100px'}], position: 875, duration: 0, easing: "easeInOutQuad" },
                { id: "eid77", tween: [ "style", "${_ss_taube_12}", "left", '-1750px', { fromValue: '-1400px'}], position: 959, duration: 0, easing: "easeInOutQuad" },
                { id: "eid78", tween: [ "style", "${_ss_taube_12}", "left", '-2100px', { fromValue: '-1750px'}], position: 1042, duration: 0, easing: "easeInOutQuad" },
                { id: "eid79", tween: [ "style", "${_ss_taube_12}", "left", '-1400px', { fromValue: '-2100px'}], position: 1125, duration: 0, easing: "easeInOutQuad" },
                { id: "eid80", tween: [ "style", "${_ss_taube_12}", "left", '-1750px', { fromValue: '-1400px'}], position: 1209, duration: 0, easing: "easeInOutQuad" },
                { id: "eid81", tween: [ "style", "${_ss_taube_12}", "left", '-2100px', { fromValue: '-1750px'}], position: 1292, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"cloud_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_cloud2',
                    type: 'image',
                    rect: ['0px', '0px', '500px', '1200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_cloud.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_cloud2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '500px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: true,
            timeline: [
                { id: "eid881", tween: [ "style", "${_ss_cloud2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid882", tween: [ "style", "${_ss_cloud2}", "top", '-200px', { fromValue: '0px'}], position: 100, duration: 0 },
                { id: "eid18", tween: [ "style", "${_ss_cloud2}", "top", '-400px', { fromValue: '-200px'}], position: 200, duration: 0 },
                { id: "eid19", tween: [ "style", "${_ss_cloud2}", "top", '-600px', { fromValue: '-400px'}], position: 299, duration: 0 },
                { id: "eid20", tween: [ "style", "${_ss_cloud2}", "top", '-800px', { fromValue: '-600px'}], position: 399, duration: 0 },
                { id: "eid21", tween: [ "style", "${_ss_cloud2}", "top", '-1000px', { fromValue: '-800px'}], position: 499, duration: 0 }            ]
        }
    }
},
"cloud_cluster": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cloud_3',
                    type: 'rect',
                    rect: ['272px', '12px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_22',
                    type: 'rect',
                    rect: ['574px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_12',
                    type: 'rect',
                    rect: ['30px', '38px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_3Copy',
                    type: 'rect',
                    rect: ['272px', '12px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_22Copy',
                    type: 'rect',
                    rect: ['142px', '102px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-1']]
                },
                {
                    id: 'cloud_12Copy',
                    type: 'rect',
                    rect: ['470px', '16px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-1']]
                }
            ],
            symbolInstances: [
            {
                id: 'cloud_12Copy',
                symbolName: 'cloud_1',
                autoPlay: {

               }
            },
            {
                id: 'cloud_22',
                symbolName: 'cloud_2',
                autoPlay: {

               }
            },
            {
                id: 'cloud_3Copy',
                symbolName: 'cloud_3',
                autoPlay: {

               }
            },
            {
                id: 'cloud_12',
                symbolName: 'cloud_1',
                autoPlay: {

               }
            },
            {
                id: 'cloud_3',
                symbolName: 'cloud_3',
                autoPlay: {

               }
            },
            {
                id: 'cloud_22Copy',
                symbolName: 'cloud_2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_cloud_3}": [
                ["style", "top", '0px'],
                ["style", "left", '242px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_cloud_12}": [
                ["style", "top", '38px'],
                ["style", "left", '30px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '302px'],
                ["style", "width", '1104px']
            ],
            "${_cloud_12Copy}": [
                ["style", "top", '16px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '470px'],
                ["transform", "scaleX", '-1']
            ],
            "${_cloud_3Copy}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '362px'],
                ["transform", "scaleX", '-1']
            ],
            "${_cloud_22Copy}": [
                ["style", "top", '102px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '142px'],
                ["transform", "scaleX", '-1']
            ],
            "${_cloud_22}": [
                ["style", "top", '84px'],
                ["style", "left", '574px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid876", tween: [ "style", "${_cloud_3}", "left", '252px', { fromValue: '242px'}], position: 0, duration: 0 },
                { id: "eid891", tween: [ "style", "${_cloud_3}", "left", '262px', { fromValue: '252px'}], position: 304, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2169", tween: [ "transform", "${_cloud_22Copy}", "scaleY", '1', { fromValue: '1'}], position: 22, duration: 0 },
                { id: "eid2178", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-1.15', { fromValue: '-1'}], position: 0, duration: 2000 },
                { id: "eid2184", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-0.9', { fromValue: '-1.15'}], position: 2000, duration: 2000 },
                { id: "eid2186", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-1.15', { fromValue: '-0.9'}], position: 4000, duration: 3000 },
                { id: "eid2189", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-1', { fromValue: '-1.15'}], position: 7000, duration: 3000 },
                { id: "eid2192", tween: [ "transform", "${_cloud_12}", "scaleX", '1.14999', { fromValue: '1'}], position: 0, duration: 2000 },
                { id: "eid2193", tween: [ "transform", "${_cloud_12}", "scaleX", '0.9', { fromValue: '1.14999'}], position: 2000, duration: 2000 },
                { id: "eid2194", tween: [ "transform", "${_cloud_12}", "scaleX", '1.14999', { fromValue: '0.9'}], position: 4000, duration: 3000 },
                { id: "eid2195", tween: [ "transform", "${_cloud_12}", "scaleX", '1', { fromValue: '1.14999'}], position: 7000, duration: 3000 },
                { id: "eid2168", tween: [ "transform", "${_cloud_12Copy}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid2179", tween: [ "transform", "${_cloud_3Copy}", "scaleX", '-1.15', { fromValue: '-1'}], position: 0, duration: 2000 },
                { id: "eid2183", tween: [ "transform", "${_cloud_3Copy}", "scaleX", '-0.9', { fromValue: '-1.15'}], position: 2000, duration: 2022 },
                { id: "eid2188", tween: [ "transform", "${_cloud_3Copy}", "scaleX", '-1.15', { fromValue: '-0.9'}], position: 4000, duration: 3000 },
                { id: "eid2191", tween: [ "transform", "${_cloud_3Copy}", "scaleX", '-1', { fromValue: '-1.15'}], position: 7000, duration: 3000 },
                { id: "eid865", tween: [ "style", "${_cloud_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid890", tween: [ "style", "${_cloud_3}", "top", '10px', { fromValue: '0px'}], position: 304, duration: 0, easing: "easeInOutQuad" },
                { id: "eid875", tween: [ "style", "${_cloud_3Copy}", "left", '342px', { fromValue: '362px'}], position: 0, duration: 0 },
                { id: "eid892", tween: [ "style", "${_cloud_3Copy}", "left", '332px', { fromValue: '342px'}], position: 304, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2200", tween: [ "transform", "${_cloud_3}", "scaleX", '1.14999', { fromValue: '1'}], position: 0, duration: 2000 },
                { id: "eid2201", tween: [ "transform", "${_cloud_3}", "scaleX", '0.9', { fromValue: '1.14999'}], position: 2000, duration: 2000 },
                { id: "eid2202", tween: [ "transform", "${_cloud_3}", "scaleX", '1.14999', { fromValue: '0.9'}], position: 4000, duration: 3000 },
                { id: "eid2203", tween: [ "transform", "${_cloud_3}", "scaleX", '1', { fromValue: '1.14999'}], position: 7000, duration: 3000 },
                { id: "eid2167", tween: [ "transform", "${_cloud_3}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid864", tween: [ "transform", "${_cloud_3Copy}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid2177", tween: [ "transform", "${_cloud_22Copy}", "scaleX", '-1.15', { fromValue: '-1'}], position: 0, duration: 2000 },
                { id: "eid2185", tween: [ "transform", "${_cloud_22Copy}", "scaleX", '-0.9', { fromValue: '-1.15'}], position: 2000, duration: 2000 },
                { id: "eid2187", tween: [ "transform", "${_cloud_22Copy}", "scaleX", '-1.15', { fromValue: '-0.9'}], position: 4000, duration: 3000 },
                { id: "eid2190", tween: [ "transform", "${_cloud_22Copy}", "scaleX", '-1', { fromValue: '-1.15'}], position: 7000, duration: 3000 },
                { id: "eid2196", tween: [ "transform", "${_cloud_22}", "scaleX", '1.14999', { fromValue: '1'}], position: 0, duration: 2000 },
                { id: "eid2197", tween: [ "transform", "${_cloud_22}", "scaleX", '0.9', { fromValue: '1.14999'}], position: 2000, duration: 2000 },
                { id: "eid2198", tween: [ "transform", "${_cloud_22}", "scaleX", '1.14999', { fromValue: '0.9'}], position: 4000, duration: 3000 },
                { id: "eid2199", tween: [ "transform", "${_cloud_22}", "scaleX", '1', { fromValue: '1.14999'}], position: 7000, duration: 3000 },
                { id: "eid862", tween: [ "style", "${_cloud_3Copy}", "top", '100px', { fromValue: '100px'}], position: 0, duration: 0 },
                { id: "eid893", tween: [ "style", "${_cloud_3Copy}", "top", '91px', { fromValue: '100px'}], position: 304, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2171", tween: [ "transform", "${_cloud_22}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid2170", tween: [ "transform", "${_cloud_12}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 }            ]
        }
    }
},
"Title_Intro": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cloud_clusterCopy4',
                    type: 'rect',
                    autoOrient: false,
                    rect: ['934px', '1214px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_clusterCopy2',
                    type: 'rect',
                    autoOrient: false,
                    rect: ['-1113px', '900px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_cluster',
                    type: 'rect',
                    autoOrient: 'true',
                    rect: ['2074px', '561px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_clusterCopy3',
                    type: 'rect',
                    autoOrient: false,
                    rect: ['-884px', '186px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_clusterCopy',
                    type: 'rect',
                    autoOrient: false,
                    rect: ['1732px', '-91px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'cloud_clusterCopy4',
                symbolName: 'cloud_cluster',
                autoPlay: {

               }
            },
            {
                id: 'cloud_clusterCopy2',
                symbolName: 'cloud_cluster',
                autoPlay: {

               }
            },
            {
                id: 'cloud_clusterCopy',
                symbolName: 'cloud_cluster',
                autoPlay: {

               }
            },
            {
                id: 'cloud_cluster',
                symbolName: 'cloud_cluster',
                autoPlay: {

               }
            },
            {
                id: 'cloud_clusterCopy3',
                symbolName: 'cloud_cluster',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_cloud_clusterCopy2}": [
                ["transform", "scaleX", '1.18114'],
                ["transform", "scaleY", '-1.1411'],
                ["motion", "location", '-352.91926759883px 1051px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cloud_clusterCopy3}": [
                ["motion", "location", '618.09687666207px 336.78108722306px'],
                ["transform", "scaleY", '-0.58423'],
                ["transform", "scaleX", '0.58423']
            ],
            "${_cloud_clusterCopy4}": [
                ["transform", "scaleX", '0.43478'],
                ["transform", "scaleY", '0.43478'],
                ["motion", "location", '1473.7442404852px 1364.6518269183px']
            ],
            "${_cloud_cluster}": [
                ["style", "top", '267px'],
                ["transform", "scaleY", '-0.86322'],
                ["transform", "scaleX", '-0.86322'],
                ["style", "left", '3458px'],
                ["motion", "location", '1027.375px 711.75px']
            ],
            "${_cloud_clusterCopy}": [
                ["style", "top", '267px'],
                ["transform", "scaleY", '1.0317'],
                ["transform", "scaleX", '1.0317'],
                ["style", "left", '3276px'],
                ["motion", "location", '2284.05px 60.25px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20000,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid1112", tween: [ "transform", "${_cloud_clusterCopy4}", "scaleY", '0.43478', { fromValue: '0.43478'}], position: 0, duration: 0 },
                { id: "eid1828", tween: [ "transform", "${_cloud_clusterCopy}", "scaleY", '1.0317', { fromValue: '1.0317'}], position: 0, duration: 0 },
                { id: "eid1077", tween: [ "motion", "${_cloud_clusterCopy3}", [[618.1, 336.78, 2349.22, 0],[2383.63, 336.78, 0, 0]]], position: 0, duration: 13000 },
                { id: "eid1080", tween: [ "motion", "${_cloud_clusterCopy3}", [[-331.12, 336.78, 0, 0],[618.1, 336.78, 0, 0]]], position: 13386, duration: 6614 },
                { id: "eid1061", tween: [ "transform", "${_cloud_clusterCopy3}", "scaleX", '0.58423', { fromValue: '0.58423'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1086", tween: [ "motion", "${_cloud_cluster}", [[1027.38, 711.75, -2397.37, 0],[-570.87, 711.75, 0, 0]]], position: 0, duration: 10000 },
                { id: "eid1089", tween: [ "motion", "${_cloud_cluster}", [[2599.88, 711.75, 0, 0],[1027.38, 711.75, 0, 0]]], position: 10335, duration: 9665 },
                { id: "eid1090", tween: [ "motion", "${_cloud_clusterCopy2}", [[-352.92, 1051, 2093.13, 0],[2765, 1051, 0, 0]]], position: 0, duration: 16341 },
                { id: "eid1093", tween: [ "motion", "${_cloud_clusterCopy2}", [[-678.75, 1051, 0, 0],[-352.92, 1051, 0, 0]]], position: 17000, duration: 3000 },
                { id: "eid1062", tween: [ "transform", "${_cloud_clusterCopy3}", "scaleY", '-0.58423', { fromValue: '-0.58423'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2165", tween: [ "transform", "${_cloud_clusterCopy}", "scaleX", '1.0317', { fromValue: '1.0317'}], position: 0, duration: 0 },
                { id: "eid1115", tween: [ "motion", "${_cloud_clusterCopy}", [[2284.05, 60.25, 0, 0],[-645.75, 60.25, 0, 0]]], position: 0, duration: 17537 },
                { id: "eid1121", tween: [ "motion", "${_cloud_clusterCopy}", [[2775.88, 24.25, 0, 0],[2279.13, 24.25, 0, 0]]], position: 18000, duration: 2000 },
                { id: "eid1830", tween: [ "transform", "${_cloud_clusterCopy2}", "scaleX", '0.95', { fromValue: '1.18114'}], position: 0, duration: 0 },
                { id: "eid1831", tween: [ "transform", "${_cloud_clusterCopy2}", "scaleY", '-0.95', { fromValue: '-1.1411'}], position: 0, duration: 0 },
                { id: "eid1821", tween: [ "transform", "${_cloud_cluster}", "scaleY", '-0.86322', { fromValue: '-0.86322'}], position: 0, duration: 0 },
                { id: "eid1095", tween: [ "motion", "${_cloud_clusterCopy4}", [[1473.74, 1364.65, -2265.5, 0],[-262.13, 1364.65, 0, 0]]], position: 0, duration: 13386 },
                { id: "eid1098", tween: [ "motion", "${_cloud_clusterCopy4}", [[2288, 1364.65, 0, 0],[1473.74, 1364.65, 0, 0]]], position: 13629, duration: 6371 },
                { id: "eid1820", tween: [ "transform", "${_cloud_cluster}", "scaleX", '-0.86322', { fromValue: '-0.86322'}], position: 0, duration: 0 }            ]
        }
    }
},
"plasticbag": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_plasticbag',
                    type: 'image',
                    rect: ['0px', '0px', '1200px', '511px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_plasticbag.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_plasticbag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${symbolSelector}": [
                ["style", "height", '511px'],
                ["style", "width", '400px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: true,
            timeline: [
                { id: "eid918", tween: [ "style", "${_ss_plasticbag}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid919", tween: [ "style", "${_ss_plasticbag}", "left", '-400px', { fromValue: '0px'}], position: 67, duration: 0, easing: "easeInOutQuad" },
                { id: "eid920", tween: [ "style", "${_ss_plasticbag}", "left", '-800px', { fromValue: '-400px'}], position: 333, duration: 0, easing: "easeInOutQuad" },
                { id: "eid921", tween: [ "style", "${_ss_plasticbag}", "left", '0px', { fromValue: '-800px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid922", tween: [ "style", "${_ss_plasticbag}", "left", '-400px', { fromValue: '0px'}], position: 600, duration: 0, easing: "easeInOutQuad" },
                { id: "eid941", tween: [ "style", "${_ss_plasticbag}", "left", '-800px', { fromValue: '800px'}], position: 667, duration: 33, easing: "easeInOutQuad" },
                { id: "eid943", tween: [ "style", "${_ss_plasticbag}", "left", '-800px', { fromValue: '-800px'}], position: 733, duration: 0, easing: "easeInOutQuad" },
                { id: "eid925", tween: [ "style", "${_ss_plasticbag}", "left", '-800px', { fromValue: '-800px'}], position: 800, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"H_still_leftright": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_still_leftright_500px',
                    type: 'image',
                    rect: ['0px', '5px', '1200px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_still_leftright_500px.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '500px'],
                ["style", "width", '172px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ss_still_leftright_500px}": [
                ["style", "top", '5px'],
                ["style", "left", '-1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15333,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid947", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-173px', { fromValue: '-1px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid950", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-515px', { fromValue: '-348px'}], position: 467, duration: 0, easing: "easeInOutQuad" },
                { id: "eid952", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-859px', { fromValue: '-687px'}], position: 533, duration: 0, easing: "easeInOutQuad" },
                { id: "eid953", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-1028px', { fromValue: '-858px'}], position: 600, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2305", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-515px', { fromValue: '-1028px'}], position: 1647, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2306", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-348px', { fromValue: '-515px'}], position: 1712, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2307", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-173px', { fromValue: '-348px'}], position: 1779, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2384", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-515px', { fromValue: '-173px'}], position: 3867, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2385", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-859px', { fromValue: '-515px'}], position: 3933, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2386", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-1028px', { fromValue: '-859px'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2387", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-515px', { fromValue: '-1028px'}], position: 7567, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2388", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-348px', { fromValue: '-515px'}], position: 7632, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2389", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-173px', { fromValue: '-348px'}], position: 7699, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2390", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-515px', { fromValue: '-173px'}], position: 8867, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2391", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-859px', { fromValue: '-515px'}], position: 8933, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2392", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-1028px', { fromValue: '-859px'}], position: 9000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2393", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-515px', { fromValue: '-1028px'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2394", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-348px', { fromValue: '-515px'}], position: 13065, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2395", tween: [ "style", "${_ss_still_leftright_500px}", "left", '-173px', { fromValue: '-348px'}], position: 13132, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"H_bag_appear": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_bag_appear_576px',
                    type: 'image',
                    rect: ['0px', '0px', '7140px', '1152px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_bag_appear_576px.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-2px', '2px', '516px', '584px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "opacity", '0']
            ],
            "${_ss_bag_appear_576px}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '576px'],
                ["style", "width", '510px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1733,
            autoPlay: false,
            labels: {
                "still": 1533
            },
            timeline: [
                { id: "eid969", tween: [ "style", "${_ss_bag_appear_576px}", "top", '-576px', { fromValue: '0px'}], position: 933, duration: 0, easing: "easeInOutQuad" },
                { id: "eid954", tween: [ "style", "${_ss_bag_appear_576px}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid955", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-510px', { fromValue: '0px'}], position: 67, duration: 0, easing: "easeInOutQuad" },
                { id: "eid956", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-1020px', { fromValue: '-510px'}], position: 133, duration: 0, easing: "easeInOutQuad" },
                { id: "eid957", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-1530px', { fromValue: '-1020px'}], position: 200, duration: 0, easing: "easeInOutQuad" },
                { id: "eid958", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-2040px', { fromValue: '-1530px'}], position: 267, duration: 0, easing: "easeInOutQuad" },
                { id: "eid959", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-2550px', { fromValue: '2040px'}], position: 333, duration: 0, easing: "easeInOutQuad" },
                { id: "eid960", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-3060px', { fromValue: '-2550px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid961", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-3570px', { fromValue: '-3060px'}], position: 467, duration: 0, easing: "easeInOutQuad" },
                { id: "eid962", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-4080px', { fromValue: '-3570px'}], position: 533, duration: 0, easing: "easeInOutQuad" },
                { id: "eid963", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-4590px', { fromValue: '4080px'}], position: 600, duration: 0, easing: "easeInOutQuad" },
                { id: "eid964", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-5100px', { fromValue: '-4590px'}], position: 667, duration: 0, easing: "easeInOutQuad" },
                { id: "eid965", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-5610px', { fromValue: '-5100px'}], position: 733, duration: 0, easing: "easeInOutQuad" },
                { id: "eid966", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-6120px', { fromValue: '-5610px'}], position: 800, duration: 0, easing: "easeInOutQuad" },
                { id: "eid967", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-6630px', { fromValue: '-6120px'}], position: 867, duration: 0, easing: "easeInOutQuad" },
                { id: "eid970", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-6630px', { fromValue: '-6630px'}], position: 933, duration: 0, easing: "easeInOutQuad" },
                { id: "eid971", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-6120px', { fromValue: '-6630px'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid972", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-5610px', { fromValue: '-6120px'}], position: 1067, duration: 0, easing: "easeInOutQuad" },
                { id: "eid973", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-5100px', { fromValue: '-5610px'}], position: 1133, duration: 0, easing: "easeInOutQuad" },
                { id: "eid974", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-4590px', { fromValue: '-5100px'}], position: 1200, duration: 0, easing: "easeInOutQuad" },
                { id: "eid975", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-4080px', { fromValue: '-4590px'}], position: 1267, duration: 0, easing: "easeInOutQuad" },
                { id: "eid976", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-3580px', { fromValue: '-4080px'}], position: 1333, duration: 0, easing: "easeInOutQuad" },
                { id: "eid977", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-3070px', { fromValue: '-3570px'}], position: 1400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid978", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-2560px', { fromValue: '-3055px'}], position: 1467, duration: 0, easing: "easeInOutQuad" },
                { id: "eid979", tween: [ "style", "${_ss_bag_appear_576px}", "left", '-2050px', { fromValue: '-2557px'}], position: 1533, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"H_walk": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_H_walk3',
                    type: 'image',
                    rect: ['0px', '0px', '2880px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_H_walk.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_H_walk3}": [
                ["style", "left", '-3px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '500px'],
                ["style", "width", '320px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1133,
            autoPlay: false,
            labels: {
                "turn": 0,
                "loop": 267
            },
            timeline: [
                { id: "eid1022", tween: [ "style", "${_ss_H_walk3}", "left", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
                { id: "eid1024", tween: [ "style", "${_ss_H_walk3}", "left", '-329px', { fromValue: '-3px'}], position: 67, duration: 0 },
                { id: "eid1025", tween: [ "style", "${_ss_H_walk3}", "left", '-645px', { fromValue: '-326px'}], position: 133, duration: 0 },
                { id: "eid1026", tween: [ "style", "${_ss_H_walk3}", "left", '-951px', { fromValue: '-638px'}], position: 200, duration: 0 },
                { id: "eid1027", tween: [ "style", "${_ss_H_walk3}", "left", '-1266px', { fromValue: '-936px'}], position: 267, duration: 0 },
                { id: "eid1028", tween: [ "style", "${_ss_H_walk3}", "left", '-1594px', { fromValue: '-1258px'}], position: 333, duration: 0 },
                { id: "eid1029", tween: [ "style", "${_ss_H_walk3}", "left", '-1909px', { fromValue: '-1594px'}], position: 400, duration: 0 },
                { id: "eid1030", tween: [ "style", "${_ss_H_walk3}", "left", '-2234px', { fromValue: '-1920px'}], position: 467, duration: 0 },
                { id: "eid1031", tween: [ "style", "${_ss_H_walk3}", "left", '-2549px', { fromValue: '-2231px'}], position: 533, duration: 0 },
                { id: "eid1037", tween: [ "style", "${_ss_H_walk3}", "left", '-2234px', { fromValue: '-2546px'}], position: 667, duration: 0 },
                { id: "eid1038", tween: [ "style", "${_ss_H_walk3}", "left", '-1909px', { fromValue: '-2231px'}], position: 733, duration: 0 },
                { id: "eid1039", tween: [ "style", "${_ss_H_walk3}", "left", '-1593px', { fromValue: '-1909px'}], position: 800, duration: 0 },
                { id: "eid1040", tween: [ "style", "${_ss_H_walk3}", "left", '-1272px', { fromValue: '-1593px'}], position: 867, duration: 0 },
                { id: "eid1041", tween: [ "style", "${_ss_H_walk3}", "left", '-951px', { fromValue: '-1266px'}], position: 933, duration: 0 },
                { id: "eid1042", tween: [ "style", "${_ss_H_walk3}", "left", '-640px', { fromValue: '-951px'}], position: 1000, duration: 0 },
                { id: "eid1043", tween: [ "style", "${_ss_H_walk3}", "left", '-308px', { fromValue: '-642px'}], position: 1067, duration: 0 },
                { id: "eid1023", tween: [ "style", "${_ss_H_walk3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1036", tween: [ "style", "${_ss_H_walk3}", "top", '-500px', { fromValue: '0px'}], position: 600, duration: 0 }            ]
        }
    }
},
"bg_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
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
                    rect: ['201px', '110px', '1096px', '593px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/houses_bg_1.png', '0px', '0px']
                },
                {
                    id: 'house_3',
                    type: 'image',
                    rect: ['362px', '504px', '402px', '507px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house_3.png', '0px', '0px']
                },
                {
                    id: 'house_1',
                    type: 'image',
                    rect: ['30px', '381px', '372px', '699px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house_1.png', '0px', '0px']
                },
                {
                    id: 'house_2',
                    type: 'image',
                    rect: ['1156px', '381px', '448px', '679px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house_2.png', '0px', '0px']
                },
                {
                    id: 'tree_1',
                    type: 'image',
                    rect: ['740px', '668px', '362px', '381px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tree_1.png', '0px', '0px']
                },
                {
                    id: 'bistro_0',
                    type: 'image',
                    rect: ['1586px', '720px', '492px', '355px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bistro_0.png', '0px', '0px']
                },
                {
                    id: 'BG_1',
                    type: 'image',
                    rect: ['160px', '150px', '2028px', '973px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_1.png', '0px', '0px']
                },
                {
                    id: 'BG_0',
                    type: 'image',
                    rect: ['0px', '973px', '4096px', '567px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_0.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_houses_bg_1}": [
                ["style", "left", '201px'],
                ["style", "top", '110px']
            ],
            "${_tree_1}": [
                ["style", "left", '740px'],
                ["style", "top", '668px']
            ],
            "${_house_2}": [
                ["style", "left", '1156px'],
                ["style", "top", '381px']
            ],
            "${_BG_1}": [
                ["style", "left", '160px'],
                ["style", "top", '150px']
            ],
            "${_bistro_0}": [
                ["style", "left", '1586px'],
                ["style", "top", '720px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_house_3}": [
                ["style", "left", '362px'],
                ["style", "top", '504px']
            ],
            "${_BG_0}": [
                ["style", "left", '0px'],
                ["style", "top", '973px']
            ],
            "${_house_1}": [
                ["style", "left", '30px'],
                ["style", "top", '381px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"text_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'text_01',
                    type: 'image',
                    rect: ['0px', '0px', '1536px', '72px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/text_01.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_text_01}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1518px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid2577", tween: [ "style", "${_text_01}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 822, easing: "easeInOutBounce" },
                { id: "eid1346", tween: [ "style", "${_text_01}", "opacity", '0.21', { fromValue: '0.18'}], position: 822, duration: 129, easing: "easeInOutBounce" },
                { id: "eid1719", tween: [ "style", "${_text_01}", "opacity", '0.24', { fromValue: '0.21'}], position: 951, duration: 140, easing: "easeOutBounce" },
                { id: "eid1721", tween: [ "style", "${_text_01}", "opacity", '0.19', { fromValue: '0.24'}], position: 1091, duration: 106, easing: "easeOutBounce" },
                { id: "eid1722", tween: [ "style", "${_text_01}", "opacity", '0.16', { fromValue: '0.19'}], position: 1197, duration: 61, easing: "easeOutBounce" },
                { id: "eid1349", tween: [ "style", "${_text_01}", "opacity", '0.21', { fromValue: '0.16'}], position: 1258, duration: 164, easing: "easeInOutBounce" },
                { id: "eid1723", tween: [ "style", "${_text_01}", "opacity", '0.23', { fromValue: '0.21'}], position: 1422, duration: 67, easing: "easeInOutBounce" },
                { id: "eid1724", tween: [ "style", "${_text_01}", "opacity", '0.25', { fromValue: '0.23'}], position: 1489, duration: 66, easing: "easeInOutBounce" },
                { id: "eid1351", tween: [ "style", "${_text_01}", "opacity", '0.22', { fromValue: '0.25'}], position: 1555, duration: 200, easing: "easeInOutBounce" },
                { id: "eid1352", tween: [ "style", "${_text_01}", "opacity", '0.18', { fromValue: '0.22'}], position: 1755, duration: 67, easing: "easeInOutBounce" },
                { id: "eid1354", tween: [ "style", "${_text_01}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1955, duration: 96, easing: "easeInBounce" },
                { id: "eid1355", tween: [ "style", "${_text_01}", "opacity", '0.5', { fromValue: '0.146612'}], position: 2051, duration: 171, easing: "easeOutBounce" },
                { id: "eid1356", tween: [ "style", "${_text_01}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2222, duration: 67, easing: "easeInOutBounce" },
                { id: "eid1357", tween: [ "style", "${_text_01}", "opacity", '0.59', { fromValue: '0.550000'}], position: 2289, duration: 34, easing: "easeInOutBounce" },
                { id: "eid1358", tween: [ "style", "${_text_01}", "opacity", '0.4', { fromValue: '0.590000'}], position: 2323, duration: 70, easing: "easeInOutBounce" },
                { id: "eid1359", tween: [ "style", "${_text_01}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2393, duration: 55, easing: "easeInOutBounce" },
                { id: "eid1360", tween: [ "style", "${_text_01}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2448, duration: 41, easing: "easeInOutBounce" },
                { id: "eid1361", tween: [ "style", "${_text_01}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2489, duration: 38, easing: "easeInOutBounce" },
                { id: "eid1363", tween: [ "style", "${_text_01}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2527, duration: 64, easing: "easeInOutBounce" },
                { id: "eid1365", tween: [ "style", "${_text_01}", "opacity", '1', { fromValue: '0.500000'}], position: 2822, duration: 800, easing: "easeInOutBounce" },
                { id: "eid1368", tween: [ "style", "${_text_01}", "opacity", '1', { fromValue: '1'}], position: 3822, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1370", tween: [ "style", "${_text_01}", "opacity", '0', { fromValue: '0.5'}], position: 4022, duration: 578, easing: "easeInOutBounce" }            ]
        }
    }
},
"text_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'text_022',
                    type: 'image',
                    rect: ['0', '10px', '1115px', '71px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/text_02.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_text_022}": [
                ["style", "top", '10px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1120px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid2579", tween: [ "style", "${_text_022}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 482, easing: "easeInOutBounce" },
                { id: "eid2396", tween: [ "style", "${_text_022}", "opacity", '0.21', { fromValue: '0.18'}], position: 482, duration: 129, easing: "easeInOutBounce" },
                { id: "eid2397", tween: [ "style", "${_text_022}", "opacity", '0.24', { fromValue: '0.21'}], position: 611, duration: 140, easing: "easeOutBounce" },
                { id: "eid2398", tween: [ "style", "${_text_022}", "opacity", '0.19', { fromValue: '0.24'}], position: 751, duration: 106, easing: "easeOutBounce" },
                { id: "eid2399", tween: [ "style", "${_text_022}", "opacity", '0.16', { fromValue: '0.19'}], position: 857, duration: 61, easing: "easeOutBounce" },
                { id: "eid2400", tween: [ "style", "${_text_022}", "opacity", '0.21', { fromValue: '0.16'}], position: 918, duration: 164, easing: "easeInOutBounce" },
                { id: "eid2401", tween: [ "style", "${_text_022}", "opacity", '0.23', { fromValue: '0.21'}], position: 1082, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2402", tween: [ "style", "${_text_022}", "opacity", '0.25', { fromValue: '0.23'}], position: 1149, duration: 66, easing: "easeInOutBounce" },
                { id: "eid2403", tween: [ "style", "${_text_022}", "opacity", '0.22', { fromValue: '0.25'}], position: 1215, duration: 200, easing: "easeInOutBounce" },
                { id: "eid2404", tween: [ "style", "${_text_022}", "opacity", '0.18', { fromValue: '0.22'}], position: 1415, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2405", tween: [ "style", "${_text_022}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1615, duration: 96, easing: "easeInBounce" },
                { id: "eid2406", tween: [ "style", "${_text_022}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1711, duration: 171, easing: "easeOutBounce" },
                { id: "eid2407", tween: [ "style", "${_text_022}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1882, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2408", tween: [ "style", "${_text_022}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1949, duration: 34, easing: "easeInOutBounce" },
                { id: "eid2409", tween: [ "style", "${_text_022}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1983, duration: 70, easing: "easeInOutBounce" },
                { id: "eid2410", tween: [ "style", "${_text_022}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2053, duration: 55, easing: "easeInOutBounce" },
                { id: "eid2411", tween: [ "style", "${_text_022}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2108, duration: 41, easing: "easeInOutBounce" },
                { id: "eid2412", tween: [ "style", "${_text_022}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2149, duration: 38, easing: "easeInOutBounce" },
                { id: "eid2413", tween: [ "style", "${_text_022}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2187, duration: 64, easing: "easeInOutBounce" },
                { id: "eid2414", tween: [ "style", "${_text_022}", "opacity", '1', { fromValue: '0.500000'}], position: 2482, duration: 800, easing: "easeInOutBounce" },
                { id: "eid2415", tween: [ "style", "${_text_022}", "opacity", '1', { fromValue: '1'}], position: 3482, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2586", tween: [ "style", "${_text_022}", "opacity", '0', { fromValue: '0.5'}], position: 3682, duration: 518, easing: "easeInOutBounce" }            ]
        }
    }
},
"text_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'text_032',
                    type: 'image',
                    rect: ['0', '5px', '1092px', '79px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/text_03.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_text_032}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1090px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid2581", tween: [ "style", "${_text_032}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 452, easing: "easeInOutBounce" },
                { id: "eid2480", tween: [ "style", "${_text_032}", "opacity", '0.21', { fromValue: '0.18'}], position: 452, duration: 129, easing: "easeInOutBounce" },
                { id: "eid2481", tween: [ "style", "${_text_032}", "opacity", '0.24', { fromValue: '0.21'}], position: 581, duration: 140, easing: "easeOutBounce" },
                { id: "eid2482", tween: [ "style", "${_text_032}", "opacity", '0.19', { fromValue: '0.24'}], position: 721, duration: 106, easing: "easeOutBounce" },
                { id: "eid2483", tween: [ "style", "${_text_032}", "opacity", '0.16', { fromValue: '0.19'}], position: 827, duration: 61, easing: "easeOutBounce" },
                { id: "eid2484", tween: [ "style", "${_text_032}", "opacity", '0.21', { fromValue: '0.16'}], position: 888, duration: 164, easing: "easeInOutBounce" },
                { id: "eid2485", tween: [ "style", "${_text_032}", "opacity", '0.23', { fromValue: '0.21'}], position: 1052, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2486", tween: [ "style", "${_text_032}", "opacity", '0.25', { fromValue: '0.23'}], position: 1119, duration: 66, easing: "easeInOutBounce" },
                { id: "eid2487", tween: [ "style", "${_text_032}", "opacity", '0.22', { fromValue: '0.25'}], position: 1185, duration: 200, easing: "easeInOutBounce" },
                { id: "eid2488", tween: [ "style", "${_text_032}", "opacity", '0.18', { fromValue: '0.22'}], position: 1385, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2489", tween: [ "style", "${_text_032}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1585, duration: 96, easing: "easeInBounce" },
                { id: "eid2490", tween: [ "style", "${_text_032}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1681, duration: 171, easing: "easeOutBounce" },
                { id: "eid2491", tween: [ "style", "${_text_032}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1852, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2492", tween: [ "style", "${_text_032}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1919, duration: 34, easing: "easeInOutBounce" },
                { id: "eid2493", tween: [ "style", "${_text_032}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1953, duration: 70, easing: "easeInOutBounce" },
                { id: "eid2494", tween: [ "style", "${_text_032}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2023, duration: 55, easing: "easeInOutBounce" },
                { id: "eid2495", tween: [ "style", "${_text_032}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2078, duration: 41, easing: "easeInOutBounce" },
                { id: "eid2496", tween: [ "style", "${_text_032}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2119, duration: 38, easing: "easeInOutBounce" },
                { id: "eid2497", tween: [ "style", "${_text_032}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2157, duration: 64, easing: "easeInOutBounce" },
                { id: "eid2498", tween: [ "style", "${_text_032}", "opacity", '1', { fromValue: '0.500000'}], position: 2452, duration: 800, easing: "easeInOutBounce" },
                { id: "eid2499", tween: [ "style", "${_text_032}", "opacity", '1', { fromValue: '1'}], position: 3452, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2587", tween: [ "style", "${_text_032}", "opacity", '0', { fromValue: '0.5'}], position: 3652, duration: 481, easing: "easeInOutBounce" }            ]
        }
    }
},
"text_4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'text_042',
                    type: 'image',
                    rect: ['0', '-2px', '718px', '81px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/text_04.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '720px']
            ],
            "${_text_042}": [
                ["style", "top", '-2px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid2583", tween: [ "style", "${_text_042}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid2459", tween: [ "style", "${_text_042}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid2460", tween: [ "style", "${_text_042}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid2461", tween: [ "style", "${_text_042}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid2462", tween: [ "style", "${_text_042}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid2463", tween: [ "style", "${_text_042}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid2464", tween: [ "style", "${_text_042}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2465", tween: [ "style", "${_text_042}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid2466", tween: [ "style", "${_text_042}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid2467", tween: [ "style", "${_text_042}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2468", tween: [ "style", "${_text_042}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid2469", tween: [ "style", "${_text_042}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid2470", tween: [ "style", "${_text_042}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2471", tween: [ "style", "${_text_042}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid2472", tween: [ "style", "${_text_042}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid2473", tween: [ "style", "${_text_042}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid2474", tween: [ "style", "${_text_042}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid2475", tween: [ "style", "${_text_042}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid2476", tween: [ "style", "${_text_042}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid2477", tween: [ "style", "${_text_042}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid2478", tween: [ "style", "${_text_042}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2588", tween: [ "style", "${_text_042}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 777, easing: "easeInOutBounce" }            ]
        }
    }
},
"text_5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'text_052',
                    type: 'image',
                    rect: ['0', '0', '1338px', '79px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/text_05.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1360px']
            ],
            "${_text_052}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid2585", tween: [ "style", "${_text_052}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 438, easing: "easeInOutBounce" },
                { id: "eid2501", tween: [ "style", "${_text_052}", "opacity", '0.21', { fromValue: '0.18'}], position: 438, duration: 129, easing: "easeInOutBounce" },
                { id: "eid2502", tween: [ "style", "${_text_052}", "opacity", '0.24', { fromValue: '0.21'}], position: 567, duration: 140, easing: "easeOutBounce" },
                { id: "eid2503", tween: [ "style", "${_text_052}", "opacity", '0.19', { fromValue: '0.24'}], position: 707, duration: 106, easing: "easeOutBounce" },
                { id: "eid2504", tween: [ "style", "${_text_052}", "opacity", '0.16', { fromValue: '0.19'}], position: 813, duration: 61, easing: "easeOutBounce" },
                { id: "eid2505", tween: [ "style", "${_text_052}", "opacity", '0.21', { fromValue: '0.16'}], position: 874, duration: 164, easing: "easeInOutBounce" },
                { id: "eid2506", tween: [ "style", "${_text_052}", "opacity", '0.23', { fromValue: '0.21'}], position: 1038, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2507", tween: [ "style", "${_text_052}", "opacity", '0.25', { fromValue: '0.23'}], position: 1105, duration: 66, easing: "easeInOutBounce" },
                { id: "eid2508", tween: [ "style", "${_text_052}", "opacity", '0.22', { fromValue: '0.25'}], position: 1171, duration: 200, easing: "easeInOutBounce" },
                { id: "eid2509", tween: [ "style", "${_text_052}", "opacity", '0.18', { fromValue: '0.22'}], position: 1371, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2510", tween: [ "style", "${_text_052}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1571, duration: 96, easing: "easeInBounce" },
                { id: "eid2511", tween: [ "style", "${_text_052}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1667, duration: 171, easing: "easeOutBounce" },
                { id: "eid2512", tween: [ "style", "${_text_052}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1838, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2513", tween: [ "style", "${_text_052}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1905, duration: 34, easing: "easeInOutBounce" },
                { id: "eid2514", tween: [ "style", "${_text_052}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1939, duration: 70, easing: "easeInOutBounce" },
                { id: "eid2515", tween: [ "style", "${_text_052}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2009, duration: 55, easing: "easeInOutBounce" },
                { id: "eid2516", tween: [ "style", "${_text_052}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2064, duration: 41, easing: "easeInOutBounce" },
                { id: "eid2517", tween: [ "style", "${_text_052}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2105, duration: 38, easing: "easeInOutBounce" },
                { id: "eid2518", tween: [ "style", "${_text_052}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2143, duration: 64, easing: "easeInOutBounce" },
                { id: "eid2519", tween: [ "style", "${_text_052}", "opacity", '1', { fromValue: '0.500000'}], position: 2438, duration: 800, easing: "easeInOutBounce" },
                { id: "eid2520", tween: [ "style", "${_text_052}", "opacity", '1', { fromValue: '1'}], position: 3438, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2521", tween: [ "style", "${_text_052}", "opacity", '0', { fromValue: '0.5'}], position: 3638, duration: 467, easing: "easeInOutBounce" }            ]
        }
    }
},
"dust_icon": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'dust_iconCopy',
                    type: 'image',
                    rect: ['50px', '0px', '1242px', '193px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dust_icon.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dust_iconCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '50px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '193px'],
                ["style", "width", '179px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 537,
            autoPlay: true,
            timeline: [
                { id: "eid1543", tween: [ "transform", "${_dust_iconCopy}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1536", tween: [ "style", "${_dust_iconCopy}", "left", '50px', { fromValue: '50px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1537", tween: [ "style", "${_dust_iconCopy}", "left", '-111px', { fromValue: '50px'}], position: 83, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1538", tween: [ "style", "${_dust_iconCopy}", "left", '-283px', { fromValue: '-111px'}], position: 167, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1539", tween: [ "style", "${_dust_iconCopy}", "left", '-481px', { fromValue: '-283px'}], position: 250, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1540", tween: [ "style", "${_dust_iconCopy}", "left", '-670px', { fromValue: '-481px'}], position: 333, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1541", tween: [ "style", "${_dust_iconCopy}", "left", '-876px', { fromValue: '-670px'}], position: 417, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1542", tween: [ "style", "${_dust_iconCopy}", "left", '-1055px', { fromValue: '-876px'}], position: 500, duration: 0, easing: "easeInOutCubic" }            ]
        }
    }
},
"dust_button": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'dust_icon2',
                    type: 'rect',
                    rect: ['-88px', '-391px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'dust_icon2',
                symbolName: 'dust_icon',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '179px'],
                ["style", "width", '193px']
            ],
            "${_dust_icon2}": [
                ["style", "top", '-7px'],
                ["style", "opacity", '0.06'],
                ["style", "left", '7px'],
                ["transform", "rotateZ", '90deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid1591", tween: [ "style", "${_dust_icon2}", "opacity", '0.01', { fromValue: '0.06'}], position: 0, duration: 129, easing: "easeInOutBounce" },
                { id: "eid1592", tween: [ "style", "${_dust_icon2}", "opacity", '0.05', { fromValue: '0.01'}], position: 129, duration: 140, easing: "easeInBounce" },
                { id: "eid1593", tween: [ "style", "${_dust_icon2}", "opacity", '0.03', { fromValue: '0.05'}], position: 269, duration: 167, easing: "easeOutBounce" },
                { id: "eid1594", tween: [ "style", "${_dust_icon2}", "opacity", '0.04', { fromValue: '0.03'}], position: 436, duration: 164, easing: "easeInOutBounce" },
                { id: "eid1595", tween: [ "style", "${_dust_icon2}", "opacity", '0.04', { fromValue: '0.04'}], position: 630, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1596", tween: [ "style", "${_dust_icon2}", "opacity", '0.06', { fromValue: '0.040000'}], position: 733, duration: 200, easing: "easeInOutBounce" },
                { id: "eid1597", tween: [ "style", "${_dust_icon2}", "opacity", '0.1', { fromValue: '0.060000'}], position: 933, duration: 67, easing: "easeInOutBounce" },
                { id: "eid1598", tween: [ "style", "${_dust_icon2}", "opacity", '0.146612', { fromValue: '0.100000'}], position: 1133, duration: 96, easing: "easeInBounce" },
                { id: "eid1599", tween: [ "style", "${_dust_icon2}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1229, duration: 171, easing: "easeOutBounce" },
                { id: "eid1600", tween: [ "style", "${_dust_icon2}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid1601", tween: [ "style", "${_dust_icon2}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1467, duration: 34, easing: "easeInOutBounce" },
                { id: "eid1602", tween: [ "style", "${_dust_icon2}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1501, duration: 70, easing: "easeInOutBounce" },
                { id: "eid1603", tween: [ "style", "${_dust_icon2}", "opacity", '0.46', { fromValue: '0.400000'}], position: 1571, duration: 55, easing: "easeInOutBounce" },
                { id: "eid1604", tween: [ "style", "${_dust_icon2}", "opacity", '0.5', { fromValue: '0.460000'}], position: 1626, duration: 41, easing: "easeInOutBounce" },
                { id: "eid1605", tween: [ "style", "${_dust_icon2}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1667, duration: 38, easing: "easeInOutBounce" },
                { id: "eid1606", tween: [ "style", "${_dust_icon2}", "opacity", '0.5', { fromValue: '0.550000'}], position: 1705, duration: 64, easing: "easeInOutBounce" },
                { id: "eid1607", tween: [ "style", "${_dust_icon2}", "opacity", '1', { fromValue: '0.500000'}], position: 2000, duration: 400, easing: "easeInOutBounce" },
                { id: "eid1608", tween: [ "style", "${_dust_icon2}", "opacity", '1', { fromValue: '1'}], position: 2600, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1609", tween: [ "style", "${_dust_icon2}", "opacity", '0', { fromValue: '0.5'}], position: 2800, duration: 467, easing: "easeInOutBounce" },
                { id: "eid1551", tween: [ "style", "${_dust_icon2}", "left", '7px', { fromValue: '7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1549", tween: [ "transform", "${_dust_icon2}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1550", tween: [ "style", "${_dust_icon2}", "top", '-7px', { fromValue: '-7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" }            ]
        }
    }
},
"C_Esser": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_esser',
                    type: 'image',
                    rect: ['0px', '0px', '840px', '480px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_esser.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_esser}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.75'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '480px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 267,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid1798", tween: [ "style", "${_ss_esser}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1799", tween: [ "style", "${_ss_esser}", "left", '-210px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid1800", tween: [ "style", "${_ss_esser}", "left", '-420px', { fromValue: '-210px'}], position: 133, duration: 0 },
                { id: "eid1801", tween: [ "style", "${_ss_esser}", "left", '-630px', { fromValue: '-420px'}], position: 200, duration: 0 },
                { id: "eid2033", tween: [ "style", "${_ss_esser}", "opacity", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 }            ]
        }
    }
},
"C_Pisser": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ss_pisser',
                    opacity: 0.8,
                    rect: ['0px', '0px', '690px', '452px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_pisser.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_pisser}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.8'],
                ["style", "left", '0px'],
                ["style", "overflow", 'hidden']
            ],
            "${symbolSelector}": [
                ["style", "height", '452px'],
                ["style", "width", '230px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid1901", tween: [ "style", "${_ss_pisser}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1902", tween: [ "style", "${_ss_pisser}", "left", '-230px', { fromValue: '0px'}], position: 67, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1903", tween: [ "style", "${_ss_pisser}", "left", '-458px', { fromValue: '-230px'}], position: 133, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"A_cripmate": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 's_cripmate2',
                    type: 'image',
                    rect: ['0px', '0px', '1163px', '1200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/disposable/s_cripmate.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s_cripmate2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px'],
                ["style", "overflow", 'hidden']
            ],
            "${symbolSelector}": [
                ["style", "height", '410px'],
                ["style", "width", '1163px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid2038", tween: [ "style", "${_s_cripmate2}", "opacity", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid1954", tween: [ "style", "${_s_cripmate2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1957", tween: [ "style", "${_s_cripmate2}", "top", '-400px', { fromValue: '0px'}], position: 67, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1958", tween: [ "style", "${_s_cripmate2}", "top", '-800px', { fromValue: '-400px'}], position: 133, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"A_trash_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_trash_1',
                    type: 'image',
                    rect: ['0px', '0px', '705px', '900px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/disposable/ss_trash_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '705px']
            ],
            "${_ss_trash_1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px'],
                ["style", "clip", [0,700.5224609375,900,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid2303", tween: [ "style", "${_ss_trash_1}", "clip", [0,700.5224609375,900,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,700.5224609375,900,0]}], position: 0, duration: 0 },
                { id: "eid2035", tween: [ "style", "${_ss_trash_1}", "opacity", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid1987", tween: [ "style", "${_ss_trash_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1988", tween: [ "style", "${_ss_trash_1}", "top", '-300px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid1989", tween: [ "style", "${_ss_trash_1}", "top", '-600px', { fromValue: '-300px'}], position: 133, duration: 0 }            ]
        }
    }
},
"A_paperball": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_paperball',
                    type: 'image',
                    rect: ['0px', '0px', '440px', '900px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/disposable/ss_paperball.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '440px']
            ],
            "${_ss_paperball}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid2019", tween: [ "style", "${_ss_paperball}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2020", tween: [ "style", "${_ss_paperball}", "top", '-300px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid2021", tween: [ "style", "${_ss_paperball}", "top", '-600px', { fromValue: '-300px'}], position: 133, duration: 0 },
                { id: "eid2036", tween: [ "style", "${_ss_paperball}", "opacity", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 }            ]
        }
    }
},
"preloader": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '2055px', '1536px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2055px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"B_taube2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ss_taube_2',
                    opacity: 0.9,
                    rect: ['0px', '0px', '500px', '2971px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/disposable/ss_taube_2.png', '0px', '0px']
                },
                {
                    type: 'audio',
                    source: ['media/SFX_pigeon.mp3'],
                    id: 'SFX_pigeon',
                    rect: ['54', '40', '320px', '45px', 'auto', 'auto'],
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_taube_2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px']
            ],
            "${_SFX_pigeon}": [
                ["property", "volume", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '430px'],
                ["style", "width", '500px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1867,
            autoPlay: true,
            labels: {
                "loop": 0,
                "touch": 533
            },
            timeline: [
                { id: "eid2051", tween: [ "style", "${_ss_taube_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2052", tween: [ "style", "${_ss_taube_2}", "top", '-423px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid2053", tween: [ "style", "${_ss_taube_2}", "top", '-846px', { fromValue: '-423px'}], position: 133, duration: 0 },
                { id: "eid2121", tween: [ "style", "${_ss_taube_2}", "top", '-1274px', { fromValue: '-846px'}], position: 533, duration: 0 },
                { id: "eid2124", tween: [ "style", "${_ss_taube_2}", "top", '-1696px', { fromValue: '-1274px'}], position: 600, duration: 0 },
                { id: "eid2123", tween: [ "style", "${_ss_taube_2}", "top", '-2121px', { fromValue: '-1696px'}], position: 667, duration: 0 },
                { id: "eid2122", tween: [ "style", "${_ss_taube_2}", "top", '-2545px', { fromValue: '-2121px'}], position: 733, duration: 0 },
                { id: "eid2150", tween: [ "style", "${_ss_taube_2}", "top", '-1696px', { fromValue: '-2545px'}], position: 800, duration: 0 },
                { id: "eid2151", tween: [ "style", "${_ss_taube_2}", "top", '-2121px', { fromValue: '-1696px'}], position: 867, duration: 0 },
                { id: "eid2152", tween: [ "style", "${_ss_taube_2}", "top", '-2545px', { fromValue: '-2121px'}], position: 933, duration: 0 },
                { id: "eid2153", tween: [ "style", "${_ss_taube_2}", "top", '-1696px', { fromValue: '-2545px'}], position: 1000, duration: 0 },
                { id: "eid2154", tween: [ "style", "${_ss_taube_2}", "top", '-2121px', { fromValue: '-1696px'}], position: 1067, duration: 0 },
                { id: "eid2155", tween: [ "style", "${_ss_taube_2}", "top", '-2545px', { fromValue: '-2121px'}], position: 1133, duration: 0 },
                { id: "eid2156", tween: [ "style", "${_ss_taube_2}", "top", '-1696px', { fromValue: '-2545px'}], position: 1200, duration: 0 },
                { id: "eid2157", tween: [ "style", "${_ss_taube_2}", "top", '-2121px', { fromValue: '-1696px'}], position: 1267, duration: 0 },
                { id: "eid2158", tween: [ "style", "${_ss_taube_2}", "top", '-2545px', { fromValue: '-2121px'}], position: 1333, duration: 0 },
                { id: "eid2159", tween: [ "style", "${_ss_taube_2}", "top", '-1696px', { fromValue: '-2545px'}], position: 1400, duration: 0 },
                { id: "eid2160", tween: [ "style", "${_ss_taube_2}", "top", '-2121px', { fromValue: '-1696px'}], position: 1467, duration: 0 },
                { id: "eid2161", tween: [ "style", "${_ss_taube_2}", "top", '-2545px', { fromValue: '-2121px'}], position: 1533, duration: 0 },
                { id: "eid2162", tween: [ "style", "${_ss_taube_2}", "top", '-1696px', { fromValue: '-2545px'}], position: 1600, duration: 0 },
                { id: "eid2163", tween: [ "style", "${_ss_taube_2}", "top", '-2121px', { fromValue: '-1696px'}], position: 1667, duration: 0 },
                { id: "eid2164", tween: [ "style", "${_ss_taube_2}", "top", '-2545px', { fromValue: '-2121px'}], position: 1733, duration: 0 },
                { id: "eid2137", tween: [ "style", "${_ss_taube_2}", "top", '-1274px', { fromValue: '-2545px'}], position: 1800, duration: 0 }            ]
        }
    }
},
"SFX_wind": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    autoplay: 'autoplay',
                    rect: ['0px', '0px', '320px', '45px', 'auto', 'auto'],
                    source: ['media/SFX_windLoop.mp3'],
                    id: 'SFX_windLoop',
                    loop: 'loop',
                    type: 'audio',
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_SFX_windLoop}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["property", "volume", '0.50000028571429']
            ],
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 40255,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid2239", tween: [ "property", "${_SFX_windLoop}", "volume", '0.50000028571429', { fromValue: '0.50000028571429'}], position: 0, duration: 0 },
                { id: "eid2214", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_SFX_windLoop}', [] ], ""], position: 0 }            ]
        }
    }
},
"A_trash_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_trash_2',
                    type: 'image',
                    rect: ['0px', '0px', '342px', '900px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/disposable/ss_trash_2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '342px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ss_trash_2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid2254", tween: [ "style", "${_ss_trash_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2255", tween: [ "style", "${_ss_trash_2}", "top", '-300px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid2256", tween: [ "style", "${_ss_trash_2}", "top", '-600px', { fromValue: '-300px'}], position: 133, duration: 0 },
                { id: "eid2260", tween: [ "style", "${_ss_trash_2}", "opacity", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 }            ]
        }
    }
},
"A_trash_3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_trash_3',
                    type: 'image',
                    rect: ['0px', '0px', '333px', '900px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/disposable/ss_trash_3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '333px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ss_trash_3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px'],
                ["style", "clip", [0,330.0146484375,900,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid2257", tween: [ "style", "${_ss_trash_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2258", tween: [ "style", "${_ss_trash_3}", "top", '-300px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid2259", tween: [ "style", "${_ss_trash_3}", "top", '-600px', { fromValue: '-300px'}], position: 133, duration: 0 },
                { id: "eid2261", tween: [ "style", "${_ss_trash_3}", "opacity", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid2304", tween: [ "style", "${_ss_trash_3}", "clip", [0,330.0146484375,900,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,330.0146484375,900,0]}], position: 0, duration: 0 }            ]
        }
    }
},
"dust_button_invert": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'dust_icon_invert3',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'dust_icon_invert3',
                symbolName: 'dust_icon_invert',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_dust_icon_invert3}": [
                ["style", "top", '-7px'],
                ["transform", "rotateZ", '90deg'],
                ["subproperty", "filter.invert", '0'],
                ["style", "opacity", '0.06'],
                ["style", "left", '7px']
            ],
            "${symbolSelector}": [
                ["style", "height", '179px'],
                ["style", "width", '193px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid2354", tween: [ "style", "${_dust_icon_invert3}", "top", '-7px', { fromValue: '-7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2376", tween: [ "style", "${_dust_icon_invert3}", "left", '7px', { fromValue: '7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2355", tween: [ "transform", "${_dust_icon_invert3}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2357", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.01', { fromValue: '0.06'}], position: 0, duration: 129, easing: "easeInOutBounce" },
                { id: "eid2358", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.05', { fromValue: '0.01'}], position: 129, duration: 140, easing: "easeInBounce" },
                { id: "eid2359", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.03', { fromValue: '0.05'}], position: 269, duration: 167, easing: "easeOutBounce" },
                { id: "eid2360", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.04', { fromValue: '0.03'}], position: 436, duration: 164, easing: "easeInOutBounce" },
                { id: "eid2361", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.04', { fromValue: '0.04'}], position: 630, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2362", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.06', { fromValue: '0.040000'}], position: 733, duration: 200, easing: "easeInOutBounce" },
                { id: "eid2363", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.1', { fromValue: '0.060000'}], position: 933, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2364", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.146612', { fromValue: '0.100000'}], position: 1133, duration: 96, easing: "easeInBounce" },
                { id: "eid2365", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1229, duration: 171, easing: "easeOutBounce" },
                { id: "eid2366", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid2367", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1467, duration: 34, easing: "easeInOutBounce" },
                { id: "eid2368", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1501, duration: 70, easing: "easeInOutBounce" },
                { id: "eid2369", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.46', { fromValue: '0.400000'}], position: 1571, duration: 55, easing: "easeInOutBounce" },
                { id: "eid2370", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.5', { fromValue: '0.460000'}], position: 1626, duration: 41, easing: "easeInOutBounce" },
                { id: "eid2371", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1667, duration: 38, easing: "easeInOutBounce" },
                { id: "eid2372", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0.5', { fromValue: '0.550000'}], position: 1705, duration: 64, easing: "easeInOutBounce" },
                { id: "eid2373", tween: [ "style", "${_dust_icon_invert3}", "opacity", '1', { fromValue: '0.500000'}], position: 2000, duration: 400, easing: "easeInOutBounce" },
                { id: "eid2374", tween: [ "style", "${_dust_icon_invert3}", "opacity", '1', { fromValue: '1'}], position: 2600, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2375", tween: [ "style", "${_dust_icon_invert3}", "opacity", '0', { fromValue: '0.5'}], position: 2800, duration: 467, easing: "easeInOutBounce" },
                { id: "eid2377", tween: [ "subproperty", "${_dust_icon_invert3}", "filter.invert", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutBounce" }            ]
        }
    }
},
"dust_icon_invert": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'dust_icon_invert2',
                    type: 'image',
                    rect: ['0', '-1', '1242px', '193px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dust_icon_invert.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dust_icon_invert2}": [
                ["style", "left", '50px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '193px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '179px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 537,
            autoPlay: true,
            timeline: [
                { id: "eid2353", tween: [ "transform", "${_dust_icon_invert2}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2346", tween: [ "style", "${_dust_icon_invert2}", "left", '50px', { fromValue: '50px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2347", tween: [ "style", "${_dust_icon_invert2}", "left", '-111px', { fromValue: '50px'}], position: 83, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2348", tween: [ "style", "${_dust_icon_invert2}", "left", '-283px', { fromValue: '-111px'}], position: 167, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2349", tween: [ "style", "${_dust_icon_invert2}", "left", '-481px', { fromValue: '-283px'}], position: 250, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2350", tween: [ "style", "${_dust_icon_invert2}", "left", '-670px', { fromValue: '-481px'}], position: 333, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2351", tween: [ "style", "${_dust_icon_invert2}", "left", '-876px', { fromValue: '-670px'}], position: 417, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2352", tween: [ "style", "${_dust_icon_invert2}", "left", '-1055px', { fromValue: '-876px'}], position: 500, duration: 0, easing: "easeInOutCubic" }            ]
        }
    }
},
"A_cigPile": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'A_cig2',
                    type: 'rect',
                    rect: ['493px', '-33px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'A_cig1',
                    type: 'rect',
                    rect: ['-385px', '-681px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'A_cig4',
                    type: 'rect',
                    rect: ['85px', '-63px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'A_cig3',
                    type: 'rect',
                    rect: ['617px', '-158px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'A_cig4',
                symbolName: 'A_cig4',
                autoPlay: {

               }
            },
            {
                id: 'A_cig3',
                symbolName: 'A_cig3',
                autoPlay: {

               }
            },
            {
                id: 'A_cig2',
                symbolName: 'A_cig2',
                autoPlay: {

               }
            },
            {
                id: 'A_cig1',
                symbolName: 'A_cig1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_A_cig2}": [
                ["style", "top", '44px'],
                ["transform", "scaleY", '0.81759'],
                ["transform", "rotateZ", '-1deg'],
                ["transform", "scaleX", '0.81759'],
                ["style", "opacity", '0.8'],
                ["style", "left", '-46px']
            ],
            "${symbolSelector}": [
                ["style", "height", '374px'],
                ["style", "width", '538px']
            ],
            "${_A_cig3}": [
                ["style", "top", '164px'],
                ["transform", "scaleY", '0.61538'],
                ["transform", "scaleX", '-0.61539'],
                ["style", "opacity", '0.8'],
                ["style", "left", '42px']
            ],
            "${_A_cig4}": [
                ["style", "top", '-24px'],
                ["transform", "scaleY", '0.87855'],
                ["transform", "scaleX", '0.87855'],
                ["style", "opacity", '0.8'],
                ["style", "left", '17px']
            ],
            "${_A_cig1}": [
                ["style", "top", '99px'],
                ["transform", "scaleY", '0.60545'],
                ["transform", "scaleX", '0.60545'],
                ["style", "opacity", '0.8'],
                ["style", "left", '97px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            timeline: [
                { id: "eid184", tween: [ "style", "${_A_cig3}", "left", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
                { id: "eid205", tween: [ "style", "${_A_cig1}", "opacity", '0.8', { fromValue: '0.8'}], position: 0, duration: 0 },
                { id: "eid173", tween: [ "transform", "${_A_cig2}", "scaleY", '0.81759', { fromValue: '0.81759'}], position: 0, duration: 0 },
                { id: "eid175", tween: [ "style", "${_A_cig2}", "top", '44px', { fromValue: '44px'}], position: 0, duration: 0 },
                { id: "eid176", tween: [ "transform", "${_A_cig2}", "rotateZ", '-1deg', { fromValue: '-1deg'}], position: 0, duration: 0 },
                { id: "eid174", tween: [ "style", "${_A_cig2}", "left", '-46px', { fromValue: '-46px'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "transform", "${_A_cig1}", "scaleY", '0.60545', { fromValue: '0.60545'}], position: 0, duration: 0 },
                { id: "eid168", tween: [ "style", "${_A_cig1}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
                { id: "eid204", tween: [ "style", "${_A_cig4}", "opacity", '0.8', { fromValue: '0.8'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "transform", "${_A_cig2}", "scaleX", '0.81759', { fromValue: '0.81759'}], position: 0, duration: 0 },
                { id: "eid183", tween: [ "transform", "${_A_cig3}", "scaleY", '0.61538', { fromValue: '0.61538'}], position: 0, duration: 0 },
                { id: "eid203", tween: [ "style", "${_A_cig3}", "opacity", '0.8', { fromValue: '0.8'}], position: 0, duration: 0 },
                { id: "eid202", tween: [ "style", "${_A_cig2}", "opacity", '0.8', { fromValue: '0.8'}], position: 0, duration: 0 },
                { id: "eid185", tween: [ "style", "${_A_cig3}", "top", '164px', { fromValue: '164px'}], position: 0, duration: 0 },
                { id: "eid193", tween: [ "transform", "${_A_cig4}", "scaleY", '0.87855', { fromValue: '0.87855'}], position: 0, duration: 0 },
                { id: "eid163", tween: [ "transform", "${_A_cig1}", "scaleX", '0.60545', { fromValue: '0.60545'}], position: 0, duration: 0 },
                { id: "eid182", tween: [ "transform", "${_A_cig3}", "scaleX", '-0.61539', { fromValue: '-0.61539'}], position: 0, duration: 0 },
                { id: "eid195", tween: [ "style", "${_A_cig4}", "top", '-24px', { fromValue: '-24px'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_A_cig1}", "left", '97px', { fromValue: '97px'}], position: 0, duration: 0 },
                { id: "eid192", tween: [ "transform", "${_A_cig4}", "scaleX", '0.87855', { fromValue: '0.87855'}], position: 0, duration: 0 },
                { id: "eid194", tween: [ "style", "${_A_cig4}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0 }            ]
        }
    }
},
"A_cig3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_cig3',
                    type: 'image',
                    rect: ['0px', '0px', '590px', '780px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_cig3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_cig3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,576,780,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '260px'],
                ["style", "width", '590px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid177", tween: [ "style", "${_ss_cig3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid178", tween: [ "style", "${_ss_cig3}", "top", '-260px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid179", tween: [ "style", "${_ss_cig3}", "top", '-520px', { fromValue: '-260px'}], position: 133, duration: 0 },
                { id: "eid181", tween: [ "style", "${_ss_cig3}", "clip", [0,576,780,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,576,780,0]}], position: 0, duration: 0 }            ]
        }
    }
},
"A_tv": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'A_tv',
                    type: 'image',
                    rect: ['0px', '0px', '1800px', '600px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/A_tv.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_A_tv}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '600px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid239", tween: [ "style", "${_A_tv}", "opacity", '0.9', { fromValue: '0.9'}], position: 133, duration: 0 },
                { id: "eid236", tween: [ "style", "${_A_tv}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid237", tween: [ "style", "${_A_tv}", "left", '-600px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid238", tween: [ "style", "${_A_tv}", "left", '-1200px', { fromValue: '-600px'}], position: 133, duration: 0 }            ]
        }
    }
},
"A_cig1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_cig1',
                    type: 'image',
                    rect: ['0px', '0px', '550px', '750px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_cig1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_cig1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '250px'],
                ["style", "width", '550px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid158", tween: [ "style", "${_ss_cig1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid159", tween: [ "style", "${_ss_cig1}", "top", '-250px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid160", tween: [ "style", "${_ss_cig1}", "top", '-500px', { fromValue: '-250px'}], position: 133, duration: 0 }            ]
        }
    }
},
"A_cig4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_cig4',
                    type: 'image',
                    rect: ['0px', '0px', '900px', '387px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_cig4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_cig4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '387px'],
                ["style", "width", '300px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid186", tween: [ "style", "${_ss_cig4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid187", tween: [ "style", "${_ss_cig4}", "left", '-300px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid188", tween: [ "style", "${_ss_cig4}", "left", '-600px', { fromValue: '-300px'}], position: 133, duration: 0 }            ]
        }
    }
},
"A_teddy": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'A_teddy',
                    type: 'image',
                    rect: ['0px', '0px', '447px', '1200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/A_teddy.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_A_teddy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '447px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid226", tween: [ "style", "${_A_teddy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid228", tween: [ "style", "${_A_teddy}", "top", '-400px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid227", tween: [ "style", "${_A_teddy}", "top", '-800px', { fromValue: '-400px'}], position: 133, duration: 0 },
                { id: "eid229", tween: [ "style", "${_A_teddy}", "opacity", '0.9', { fromValue: '0.9'}], position: 200, duration: 0 }            ]
        }
    }
},
"A_cig2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ss_cig2',
                    type: 'image',
                    rect: ['0px', '0px', '529px', '780px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_cig2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '260px'],
                ["style", "width", '529px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ss_cig2}": [
                ["style", "left", '0px'],
                ["style", "top", '-6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid169", tween: [ "style", "${_ss_cig2}", "top", '-6px', { fromValue: '-6px'}], position: 0, duration: 0 },
                { id: "eid170", tween: [ "style", "${_ss_cig2}", "top", '-258px', { fromValue: '-6px'}], position: 67, duration: 0 },
                { id: "eid171", tween: [ "style", "${_ss_cig2}", "top", '-518px', { fromValue: '-260px'}], position: 133, duration: 0 }            ]
        }
    }
},
"A_shoes": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'A_shoes',
                    type: 'image',
                    rect: ['0px', '0px', '525px', '1260px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/A_shoes.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '420px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '525px']
            ],
            "${_A_shoes}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid216", tween: [ "style", "${_A_shoes}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid218", tween: [ "style", "${_A_shoes}", "top", '-420px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid219", tween: [ "style", "${_A_shoes}", "top", '-840px', { fromValue: '-420px'}], position: 133, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-372280890");
