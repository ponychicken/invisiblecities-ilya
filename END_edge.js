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
                id: 'paper_opaque',
                type: 'image',
                rect: ['0', '0','2048px','1535px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
            },
            {
                id: 'houses_bg_1',
                display: 'block',
                type: 'image',
                rect: ['378px', '1071px','1096px','593px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"houses_bg_1.png",'0px','0px']
            },
            {
                id: 'house_2',
                display: 'block',
                type: 'image',
                rect: ['1815px', '1302px','448px','679px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"house_2.png",'0px','0px']
            },
            {
                id: 'house_1',
                display: 'block',
                type: 'image',
                rect: ['-56px', '1282px','372px','699px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"house_1.png",'0px','0px']
            },
            {
                id: 'Title_Intro',
                type: 'rect',
                rect: ['0', '141px','auto','auto','auto', 'auto']
            },
            {
                id: 'End_body3',
                display: 'block',
                type: 'image',
                rect: ['1341px', '652px','432px','728px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"END/End_body.png",'0px','0px']
            },
            {
                id: 'H_End',
                display: 'block',
                type: 'rect',
                rect: ['1213px', '384px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.775','0.775']]
            },
            {
                id: 'H_crack',
                display: 'none',
                type: 'rect',
                rect: ['591px', '362px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 318px 324.12261962890625px 0px)'],
                transform: [[],[],[],['0.775','0.775']]
            },
            {
                id: 'text_1',
                display: 'block',
                type: 'rect',
                rect: ['69px', '133px','auto','auto','auto', 'auto'],
                transform: [[],['-3']]
            },
            {
                id: 'text_2',
                display: 'block',
                type: 'rect',
                rect: ['124px', '264px','auto','auto','auto', 'auto'],
                transform: [[],['-2']]
            },
            {
                id: 'text_3',
                display: 'block',
                type: 'rect',
                rect: ['89px', '760px','auto','auto','auto', 'auto'],
                transform: [[],['3']]
            },
            {
                id: 'text_4',
                display: 'block',
                type: 'rect',
                rect: ['281px', '1007px','auto','auto','auto', 'auto']
            },
            {
                id: 'text_5',
                display: 'block',
                type: 'rect',
                rect: ['177px', '1149px','auto','auto','auto', 'auto'],
                transform: [[],['1']]
            },
            {
                id: 'text_6',
                display: 'block',
                type: 'rect',
                rect: ['131px', '1272px','auto','auto','auto', 'auto'],
                transform: [[],['1']]
            },
            {
                id: 'Rectangle',
                display: 'block',
                type: 'rect',
                rect: ['0px', '-10px','2048px','1545px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Titel_betreut',
                display: 'none',
                type: 'image',
                rect: ['-1473px', '1036px','1079px','778px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"END/Titel_betreut.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Titel_Ilya',
                display: 'none',
                type: 'image',
                rect: ['-989px', '-173px','1079px','476px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"END/Titel_Ilya.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Titel_Italo',
                display: 'none',
                type: 'image',
                rect: ['587px', '279px','873px','440px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"END/Titel_Italo.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Titel_IV',
                display: 'none',
                type: 'image',
                rect: ['653px', '978px','739px','196px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"END/Titel_IV.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Titel_linie',
                display: 'none',
                type: 'image',
                rect: ['576px', '833px','894px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"END/Titel_linie.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'SFX_rumble',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['466', '294','320px','45px','auto', 'auto'],
                source: ['media/SFX_rumble.mp3']
            }],
            symbolInstances: [
            {
                id: 'H_crack',
                symbolName: 'H_crack',
                autoPlay: {

                }
            },
            {
                id: 'H_End',
                symbolName: 'H_head',
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
                id: 'text_1',
                symbolName: 'text_1',
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
                id: 'Title_Intro',
                symbolName: 'Title_Intro',
                autoPlay: {

                }
            },
            {
                id: 'text_6',
                symbolName: 'text_6',
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
                id: 'text_5',
                symbolName: 'text_5',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_End_body3}": [
                ["style", "top", '863px'],
                ["style", "display", 'block'],
                ["style", "height", '728px'],
                ["style", "left", '1341px'],
                ["style", "width", '432px']
            ],
            "${_text_1}": [
                ["style", "top", '132px'],
                ["transform", "scaleY", '0.84796'],
                ["transform", "rotateZ", '-3deg'],
                ["transform", "scaleX", '0.84796'],
                ["style", "left", '-40px'],
                ["style", "display", 'block']
            ],
            "${_Titel_Italo}": [
                ["style", "top", '279px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "display", 'none'],
                ["style", "height", '440px'],
                ["style", "opacity", '0'],
                ["style", "left", '587px'],
                ["style", "width", '873px']
            ],
            "${_Titel_Ilya}": [
                ["style", "top", '627px'],
                ["style", "height", '290px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '694px'],
                ["style", "width", '659px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "display", 'block'],
                ["style", "top", '0px']
            ],
            "${_text_3}": [
                ["style", "top", '664px'],
                ["transform", "scaleY", '1.10416'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1.10416'],
                ["style", "left", '107px'],
                ["style", "display", 'block']
            ],
            "${_house_1}": [
                ["style", "top", '1282px'],
                ["style", "left", '-56px'],
                ["style", "display", 'block']
            ],
            "${_houses_bg_1}": [
                ["style", "top", '1071px'],
                ["style", "left", '378px'],
                ["style", "display", 'block']
            ],
            "${_SFX_rumble}": [
                ["property", "volume", '0']
            ],
            "${_house_2}": [
                ["style", "top", '1302px'],
                ["style", "left", '1815px'],
                ["style", "display", 'block']
            ],
            "${_H_crack}": [
                ["style", "top", '690px'],
                ["transform", "scaleY", '0.775'],
                ["transform", "scaleX", '0.775'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,318,324.12261962890625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1296px']
            ],
            "${_text_5}": [
                ["style", "top", '908px'],
                ["transform", "scaleY", '0.78173'],
                ["transform", "rotateZ", '1deg'],
                ["transform", "scaleX", '0.78173'],
                ["style", "left", '64px'],
                ["style", "display", 'block']
            ],
            "${_H_End}": [
                ["style", "top", '590px'],
                ["transform", "scaleY", '0.775'],
                ["style", "display", 'block'],
                ["style", "left", '1213px'],
                ["transform", "scaleX", '0.775']
            ],
            "${_Titel_betreut}": [
                ["style", "top", '514px'],
                ["style", "height", '508px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '672px'],
                ["style", "width", '704px']
            ],
            "${_text_6}": [
                ["style", "top", '989px'],
                ["transform", "scaleY", '0.94336'],
                ["transform", "rotateZ", '1deg'],
                ["transform", "scaleX", '0.94336'],
                ["style", "opacity", '1'],
                ["style", "left", '97px'],
                ["style", "display", 'block']
            ],
            "${_Titel_linie}": [
                ["style", "top", '833px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "display", 'none'],
                ["style", "height", '41px'],
                ["style", "opacity", '0'],
                ["style", "left", '576px'],
                ["style", "width", '894px']
            ],
            "${_text_4}": [
                ["style", "top", '784px'],
                ["transform", "scaleY", '0.94336'],
                ["transform", "scaleX", '0.94336'],
                ["style", "left", '267px'],
                ["style", "display", 'block']
            ],
            "${_Title_Intro}": [
                ["style", "top", '-335px'],
                ["style", "opacity", '0.6']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_Titel_IV}": [
                ["style", "top", '978px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "display", 'none'],
                ["style", "height", '196px'],
                ["style", "opacity", '0'],
                ["style", "left", '653px'],
                ["style", "width", '739px']
            ],
            "${_text_2}": [
                ["style", "top", '263px'],
                ["transform", "scaleY", '0.94336'],
                ["transform", "rotateZ", '-2deg'],
                ["transform", "scaleX", '0.94336'],
                ["style", "left", '100px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 40500,
            autoPlay: true,
            labels: {
                "button": 4400,
                "egg": 4900,
                "crack": 10200
            },
            timeline: [
                { id: "eid307", tween: [ "style", "${_Titel_Ilya}", "top", '627px', { fromValue: '627px'}], position: 28000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid262", tween: [ "style", "${_house_1}", "top", '1711px', { fromValue: '1282px'}], position: 13000, duration: 2976, easing: "easeInOutQuad" },
                { id: "eid208", tween: [ "transform", "${_text_1}", "scaleY", '0.84796', { fromValue: '0.84796'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid20", tween: [ "style", "${_H_crack}", "display", 'block', { fromValue: 'none'}], position: 4900, duration: 0 },
                { id: "eid274", tween: [ "style", "${_H_crack}", "display", 'none', { fromValue: 'block'}], position: 16162, duration: 0, easing: "easeInOutBounce" },
                { id: "eid247", tween: [ "style", "${_text_4}", "top", '784px', { fromValue: '784px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid241", tween: [ "transform", "${_text_3}", "scaleX", '1.10416', { fromValue: '1.10416'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid260", tween: [ "style", "${_houses_bg_1}", "top", '1500px', { fromValue: '1071px'}], position: 13000, duration: 2976, easing: "easeInOutQuad" },
                { id: "eid261", tween: [ "style", "${_house_2}", "top", '1731px', { fromValue: '1302px'}], position: 13000, duration: 2976, easing: "easeInOutQuad" },
                { id: "eid207", tween: [ "transform", "${_text_1}", "scaleX", '0.84796', { fromValue: '0.84796'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid226", tween: [ "transform", "${_text_6}", "scaleX", '0.94336', { fromValue: '0.94336'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid324", tween: [ "style", "${_H_crack}", "opacity", '0', { fromValue: '0'}], position: 4900, duration: 0, easing: "easeInOutQuad" },
                { id: "eid323", tween: [ "style", "${_H_crack}", "opacity", '1', { fromValue: '0'}], position: 10200, duration: 0, easing: "easeInOutQuad" },
                { id: "eid319", tween: [ "style", "${_Titel_betreut}", "opacity", '1', { fromValue: '0'}], position: 35000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid318", tween: [ "style", "${_Titel_betreut}", "opacity", '0', { fromValue: '1'}], position: 39000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid227", tween: [ "transform", "${_text_6}", "scaleY", '0.94336', { fromValue: '0.94336'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid225", tween: [ "transform", "${_text_3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid237", tween: [ "transform", "${_text_4}", "scaleX", '0.94336', { fromValue: '0.94336'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid267", tween: [ "style", "${_text_5}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0, easing: "easeInOutBounce" },
                { id: "eid210", tween: [ "style", "${_text_1}", "top", '132px', { fromValue: '132px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid252", tween: [ "style", "${_text_3}", "top", '714px', { fromValue: '664px'}], position: 3092, duration: 3733, easing: "easeInOutQuad" },
                { id: "eid246", tween: [ "style", "${_text_6}", "top", '989px', { fromValue: '989px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid276", tween: [ "style", "${_End_body3}", "display", 'none', { fromValue: 'block'}], position: 16162, duration: 0, easing: "easeInOutBounce" },
                { id: "eid281", tween: [ "style", "${_Titel_Ilya}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid255", tween: [ "style", "${_End_body3}", "top", '1297px', { fromValue: '863px'}], position: 13000, duration: 2976, easing: "easeInOutQuad" },
                { id: "eid266", tween: [ "style", "${_text_6}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0, easing: "easeInOutBounce" },
                { id: "eid209", tween: [ "style", "${_text_1}", "left", '-40px', { fromValue: '-40px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid279", tween: [ "style", "${_Titel_IV}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid298", tween: [ "style", "${_Titel_IV}", "display", 'none', { fromValue: 'block'}], position: 26500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid256", tween: [ "style", "${_H_End}", "top", '1029px', { fromValue: '590px'}], position: 13000, duration: 2976, easing: "easeInOutQuad" },
                { id: "eid219", tween: [ "transform", "${_text_2}", "scaleX", '0.94336', { fromValue: '0.94336'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid253", tween: [ "style", "${_text_3}", "left", '67px', { fromValue: '107px'}], position: 3092, duration: 3733, easing: "easeInOutQuad" },
                { id: "eid282", tween: [ "style", "${_Titel_betreut}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid231", tween: [ "transform", "${_text_5}", "scaleX", '0.78173', { fromValue: '0.78173'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid326", tween: [ "style", "${_Title_Intro}", "top", '-335px', { fromValue: '-335px'}], position: 10200, duration: 0, easing: "easeInOutBounce" },
                { id: "eid329", tween: [ "style", "${_Title_Intro}", "top", '0px', { fromValue: '-335px'}], position: 13000, duration: 2976, easing: "easeInOutQuad" },
                { id: "eid189", tween: [ "style", "${_H_crack}", "left", '1296px', { fromValue: '1296px'}], position: 10600, duration: 0, easing: "easeInOutBounce" },
                { id: "eid242", tween: [ "transform", "${_text_3}", "scaleY", '1.10416', { fromValue: '1.10416'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid270", tween: [ "style", "${_text_2}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0, easing: "easeInOutBounce" },
                { id: "eid305", tween: [ "style", "${_Titel_Ilya}", "width", '659px', { fromValue: '659px'}], position: 28000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid221", tween: [ "style", "${_text_2}", "left", '100px', { fromValue: '100px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid272", tween: [ "style", "${_house_1}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0, easing: "easeInOutBounce" },
                { id: "eid248", tween: [ "style", "${_text_5}", "top", '908px', { fromValue: '908px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid190", tween: [ "style", "${_H_crack}", "top", '690px', { fromValue: '690px'}], position: 10600, duration: 0, easing: "easeInOutBounce" },
                { id: "eid321", tween: [ "style", "${_H_crack}", "top", '1127px', { fromValue: '690px'}], position: 13000, duration: 2976, easing: "easeInOutQuad" },
                { id: "eid1", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 2160, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 10200, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 2160, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 13976, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid232", tween: [ "transform", "${_text_5}", "scaleY", '0.78173', { fromValue: '0.78173'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid290", tween: [ "style", "${_Titel_linie}", "opacity", '1', { fromValue: '0'}], position: 20500, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid294", tween: [ "style", "${_Titel_linie}", "opacity", '0', { fromValue: '1'}], position: 25000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid222", tween: [ "style", "${_text_2}", "top", '263px', { fromValue: '263px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid275", tween: [ "style", "${_H_End}", "display", 'none', { fromValue: 'block'}], position: 16162, duration: 0, easing: "easeInOutBounce" },
                { id: "eid335", tween: [ "property", "${_SFX_rumble}", "volume", '1', { fromValue: '0'}], position: 10100, duration: 900, easing: "easeInOutQuad" },
                { id: "eid334", tween: [ "property", "${_SFX_rumble}", "volume", '0', { fromValue: '1'}], position: 27032, duration: 2764, easing: "easeInOutQuad" },
                { id: "eid314", tween: [ "style", "${_Titel_betreut}", "left", '672px', { fromValue: '672px'}], position: 35000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid280", tween: [ "style", "${_Titel_Italo}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid299", tween: [ "style", "${_Titel_Italo}", "display", 'none', { fromValue: 'block'}], position: 26500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid289", tween: [ "style", "${_Titel_IV}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid295", tween: [ "style", "${_Titel_IV}", "opacity", '0', { fromValue: '1'}], position: 25000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid325", tween: [ "style", "${_Title_Intro}", "opacity", '0.6', { fromValue: '0.6'}], position: 10200, duration: 0, easing: "easeInOutBounce" },
                { id: "eid285", tween: [ "style", "${_Titel_Italo}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid296", tween: [ "style", "${_Titel_Italo}", "opacity", '0', { fromValue: '1'}], position: 25000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid271", tween: [ "style", "${_text_1}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0, easing: "easeInOutBounce" },
                { id: "eid277", tween: [ "style", "${_houses_bg_1}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0, easing: "easeInOutBounce" },
                { id: "eid313", tween: [ "style", "${_Titel_betreut}", "width", '704px', { fromValue: '704px'}], position: 35000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid239", tween: [ "style", "${_text_4}", "left", '267px', { fromValue: '267px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid278", tween: [ "style", "${_Titel_linie}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid297", tween: [ "style", "${_Titel_linie}", "display", 'none', { fromValue: 'block'}], position: 26500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid238", tween: [ "transform", "${_text_4}", "scaleY", '0.94336', { fromValue: '0.94336'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid306", tween: [ "style", "${_Titel_Ilya}", "left", '694px', { fromValue: '694px'}], position: 28000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid233", tween: [ "style", "${_text_5}", "left", '64px', { fromValue: '64px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid228", tween: [ "style", "${_text_6}", "left", '97px', { fromValue: '97px'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid269", tween: [ "style", "${_text_3}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0, easing: "easeInOutBounce" },
                { id: "eid264", tween: [ "style", "${_text_6}", "opacity", '0', { fromValue: '1'}], position: 13000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid308", tween: [ "style", "${_Titel_Ilya}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid309", tween: [ "style", "${_Titel_Ilya}", "opacity", '0', { fromValue: '1'}], position: 32000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid304", tween: [ "style", "${_Titel_Ilya}", "height", '290px', { fromValue: '290px'}], position: 28000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid220", tween: [ "transform", "${_text_2}", "scaleY", '0.94336', { fromValue: '0.94336'}], position: 6825, duration: 0, easing: "easeInOutBounce" },
                { id: "eid268", tween: [ "style", "${_text_4}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0, easing: "easeInOutBounce" },
                { id: "eid315", tween: [ "style", "${_Titel_betreut}", "top", '514px', { fromValue: '514px'}], position: 35000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid312", tween: [ "style", "${_Titel_betreut}", "height", '508px', { fromValue: '508px'}], position: 35000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid273", tween: [ "style", "${_house_2}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0, easing: "easeInOutBounce" },
                { id: "eid21", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_H_End}', [] ], ""], position: 0 },
                { id: "eid22", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_H_crack}', [] ], ""], position: 2000 },
                { id: "eid23", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_H_End}', [] ], ""], position: 4900 },
                { id: "eid24", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_H_crack}', [] ], ""], position: 10200 },
                { id: "eid336", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_SFX_rumble}', [] ], ""], position: 10200 }            ]
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
                    id: 'Text_C1',
                    type: 'image',
                    rect: ['0', '0', '1171px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_C1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text_C1}": [
                ["style", "height", '80px'],
                ["style", "opacity", '0'],
                ["style", "width", '1171px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1190px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid69", tween: [ "style", "${_Text_C1}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 1052, easing: "easeInOutBounce" },
                { id: "eid70", tween: [ "style", "${_Text_C1}", "opacity", '0.21', { fromValue: '0.18'}], position: 1052, duration: 129, easing: "easeInOutBounce" },
                { id: "eid71", tween: [ "style", "${_Text_C1}", "opacity", '0.24', { fromValue: '0.21'}], position: 1181, duration: 140, easing: "easeOutBounce" },
                { id: "eid72", tween: [ "style", "${_Text_C1}", "opacity", '0.19', { fromValue: '0.24'}], position: 1321, duration: 106, easing: "easeOutBounce" },
                { id: "eid73", tween: [ "style", "${_Text_C1}", "opacity", '0.16', { fromValue: '0.19'}], position: 1427, duration: 61, easing: "easeOutBounce" },
                { id: "eid74", tween: [ "style", "${_Text_C1}", "opacity", '0.21', { fromValue: '0.16'}], position: 1488, duration: 164, easing: "easeInOutBounce" },
                { id: "eid75", tween: [ "style", "${_Text_C1}", "opacity", '0.23', { fromValue: '0.21'}], position: 1652, duration: 67, easing: "easeInOutBounce" },
                { id: "eid76", tween: [ "style", "${_Text_C1}", "opacity", '0.25', { fromValue: '0.23'}], position: 1719, duration: 66, easing: "easeInOutBounce" },
                { id: "eid77", tween: [ "style", "${_Text_C1}", "opacity", '0.22', { fromValue: '0.25'}], position: 1785, duration: 200, easing: "easeInOutBounce" },
                { id: "eid78", tween: [ "style", "${_Text_C1}", "opacity", '0.18', { fromValue: '0.22'}], position: 1985, duration: 67, easing: "easeInOutBounce" },
                { id: "eid79", tween: [ "style", "${_Text_C1}", "opacity", '0.146612', { fromValue: '0.18'}], position: 2185, duration: 96, easing: "easeInBounce" },
                { id: "eid80", tween: [ "style", "${_Text_C1}", "opacity", '0.5', { fromValue: '0.146612'}], position: 2281, duration: 171, easing: "easeOutBounce" },
                { id: "eid81", tween: [ "style", "${_Text_C1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2452, duration: 67, easing: "easeInOutBounce" },
                { id: "eid82", tween: [ "style", "${_Text_C1}", "opacity", '0.59', { fromValue: '0.550000'}], position: 2519, duration: 34, easing: "easeInOutBounce" },
                { id: "eid83", tween: [ "style", "${_Text_C1}", "opacity", '0.4', { fromValue: '0.590000'}], position: 2553, duration: 70, easing: "easeInOutBounce" },
                { id: "eid84", tween: [ "style", "${_Text_C1}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2623, duration: 55, easing: "easeInOutBounce" },
                { id: "eid85", tween: [ "style", "${_Text_C1}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2678, duration: 41, easing: "easeInOutBounce" },
                { id: "eid86", tween: [ "style", "${_Text_C1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2719, duration: 38, easing: "easeInOutBounce" },
                { id: "eid87", tween: [ "style", "${_Text_C1}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2757, duration: 64, easing: "easeInOutBounce" },
                { id: "eid88", tween: [ "style", "${_Text_C1}", "opacity", '1', { fromValue: '0.500000'}], position: 3052, duration: 800, easing: "easeInOutBounce" },
                { id: "eid89", tween: [ "style", "${_Text_C1}", "opacity", '1', { fromValue: '1'}], position: 4052, duration: 0, easing: "easeInOutBounce" },
                { id: "eid90", tween: [ "style", "${_Text_C1}", "opacity", '0', { fromValue: '0.5'}], position: 4252, duration: 481, easing: "easeInOutBounce" }            ]
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
                    id: 'Text_C3',
                    type: 'image',
                    rect: ['0', '0', '991px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_C3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1040px']
            ],
            "${_Text_C3}": [
                ["style", "height", '80px'],
                ["style", "opacity", '0'],
                ["style", "width", '991px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid113", tween: [ "style", "${_Text_C3}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid114", tween: [ "style", "${_Text_C3}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid115", tween: [ "style", "${_Text_C3}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid116", tween: [ "style", "${_Text_C3}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid117", tween: [ "style", "${_Text_C3}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid118", tween: [ "style", "${_Text_C3}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid119", tween: [ "style", "${_Text_C3}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid120", tween: [ "style", "${_Text_C3}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid121", tween: [ "style", "${_Text_C3}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid122", tween: [ "style", "${_Text_C3}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid123", tween: [ "style", "${_Text_C3}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid124", tween: [ "style", "${_Text_C3}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid125", tween: [ "style", "${_Text_C3}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid126", tween: [ "style", "${_Text_C3}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid127", tween: [ "style", "${_Text_C3}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid128", tween: [ "style", "${_Text_C3}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid129", tween: [ "style", "${_Text_C3}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid130", tween: [ "style", "${_Text_C3}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid131", tween: [ "style", "${_Text_C3}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid132", tween: [ "style", "${_Text_C3}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid133", tween: [ "style", "${_Text_C3}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid134", tween: [ "style", "${_Text_C3}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
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
                    id: 'Text_C2',
                    type: 'image',
                    rect: ['3px', '0px', '458px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_C2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text_C2}": [
                ["style", "top", '0px'],
                ["style", "height", '80px'],
                ["style", "opacity", '0'],
                ["style", "left", '3px'],
                ["style", "width", '458px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '470px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid91", tween: [ "style", "${_Text_C2}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid92", tween: [ "style", "${_Text_C2}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid93", tween: [ "style", "${_Text_C2}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid94", tween: [ "style", "${_Text_C2}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid95", tween: [ "style", "${_Text_C2}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid96", tween: [ "style", "${_Text_C2}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid97", tween: [ "style", "${_Text_C2}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid98", tween: [ "style", "${_Text_C2}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid99", tween: [ "style", "${_Text_C2}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid100", tween: [ "style", "${_Text_C2}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid101", tween: [ "style", "${_Text_C2}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid102", tween: [ "style", "${_Text_C2}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid103", tween: [ "style", "${_Text_C2}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid104", tween: [ "style", "${_Text_C2}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid105", tween: [ "style", "${_Text_C2}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid106", tween: [ "style", "${_Text_C2}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid107", tween: [ "style", "${_Text_C2}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid108", tween: [ "style", "${_Text_C2}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid109", tween: [ "style", "${_Text_C2}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid110", tween: [ "style", "${_Text_C2}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid111", tween: [ "style", "${_Text_C2}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid112", tween: [ "style", "${_Text_C2}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
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
                    id: 'Text_B2',
                    type: 'image',
                    rect: ['0', '0', '817px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_B2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text_B2}": [
                ["style", "height", '80px'],
                ["style", "opacity", '0'],
                ["style", "width", '817px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '850px']
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
                { id: "eid47", tween: [ "style", "${_Text_B2}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 482, easing: "easeInOutBounce" },
                { id: "eid48", tween: [ "style", "${_Text_B2}", "opacity", '0.21', { fromValue: '0.18'}], position: 482, duration: 129, easing: "easeInOutBounce" },
                { id: "eid49", tween: [ "style", "${_Text_B2}", "opacity", '0.24', { fromValue: '0.21'}], position: 611, duration: 140, easing: "easeOutBounce" },
                { id: "eid50", tween: [ "style", "${_Text_B2}", "opacity", '0.19', { fromValue: '0.24'}], position: 751, duration: 106, easing: "easeOutBounce" },
                { id: "eid51", tween: [ "style", "${_Text_B2}", "opacity", '0.16', { fromValue: '0.19'}], position: 857, duration: 61, easing: "easeOutBounce" },
                { id: "eid52", tween: [ "style", "${_Text_B2}", "opacity", '0.21', { fromValue: '0.16'}], position: 918, duration: 164, easing: "easeInOutBounce" },
                { id: "eid53", tween: [ "style", "${_Text_B2}", "opacity", '0.23', { fromValue: '0.21'}], position: 1082, duration: 67, easing: "easeInOutBounce" },
                { id: "eid54", tween: [ "style", "${_Text_B2}", "opacity", '0.25', { fromValue: '0.23'}], position: 1149, duration: 66, easing: "easeInOutBounce" },
                { id: "eid55", tween: [ "style", "${_Text_B2}", "opacity", '0.22', { fromValue: '0.25'}], position: 1215, duration: 200, easing: "easeInOutBounce" },
                { id: "eid56", tween: [ "style", "${_Text_B2}", "opacity", '0.18', { fromValue: '0.22'}], position: 1415, duration: 67, easing: "easeInOutBounce" },
                { id: "eid57", tween: [ "style", "${_Text_B2}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1615, duration: 96, easing: "easeInBounce" },
                { id: "eid58", tween: [ "style", "${_Text_B2}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1711, duration: 171, easing: "easeOutBounce" },
                { id: "eid59", tween: [ "style", "${_Text_B2}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1882, duration: 67, easing: "easeInOutBounce" },
                { id: "eid60", tween: [ "style", "${_Text_B2}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1949, duration: 34, easing: "easeInOutBounce" },
                { id: "eid61", tween: [ "style", "${_Text_B2}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1983, duration: 70, easing: "easeInOutBounce" },
                { id: "eid62", tween: [ "style", "${_Text_B2}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2053, duration: 55, easing: "easeInOutBounce" },
                { id: "eid63", tween: [ "style", "${_Text_B2}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2108, duration: 41, easing: "easeInOutBounce" },
                { id: "eid64", tween: [ "style", "${_Text_B2}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2149, duration: 38, easing: "easeInOutBounce" },
                { id: "eid65", tween: [ "style", "${_Text_B2}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2187, duration: 64, easing: "easeInOutBounce" },
                { id: "eid66", tween: [ "style", "${_Text_B2}", "opacity", '1', { fromValue: '0.500000'}], position: 2482, duration: 800, easing: "easeInOutBounce" },
                { id: "eid67", tween: [ "style", "${_Text_B2}", "opacity", '1', { fromValue: '1'}], position: 3482, duration: 0, easing: "easeInOutBounce" },
                { id: "eid68", tween: [ "style", "${_Text_B2}", "opacity", '0', { fromValue: '0.5'}], position: 3682, duration: 518, easing: "easeInOutBounce" }            ]
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
                    id: 'Text_B1',
                    type: 'image',
                    rect: ['0', '6', '1434px', '89px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_B1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '89px'],
                ["style", "width", '1433px']
            ],
            "${_Text_B1}": [
                ["style", "height", '89px'],
                ["style", "opacity", '0'],
                ["style", "width", '1434px']
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
                { id: "eid25", tween: [ "style", "${_Text_B1}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 822, easing: "easeInOutBounce" },
                { id: "eid26", tween: [ "style", "${_Text_B1}", "opacity", '0.21', { fromValue: '0.18'}], position: 822, duration: 129, easing: "easeInOutBounce" },
                { id: "eid27", tween: [ "style", "${_Text_B1}", "opacity", '0.24', { fromValue: '0.21'}], position: 951, duration: 140, easing: "easeOutBounce" },
                { id: "eid28", tween: [ "style", "${_Text_B1}", "opacity", '0.19', { fromValue: '0.24'}], position: 1091, duration: 106, easing: "easeOutBounce" },
                { id: "eid29", tween: [ "style", "${_Text_B1}", "opacity", '0.16', { fromValue: '0.19'}], position: 1197, duration: 61, easing: "easeOutBounce" },
                { id: "eid30", tween: [ "style", "${_Text_B1}", "opacity", '0.21', { fromValue: '0.16'}], position: 1258, duration: 164, easing: "easeInOutBounce" },
                { id: "eid31", tween: [ "style", "${_Text_B1}", "opacity", '0.23', { fromValue: '0.21'}], position: 1422, duration: 67, easing: "easeInOutBounce" },
                { id: "eid32", tween: [ "style", "${_Text_B1}", "opacity", '0.25', { fromValue: '0.23'}], position: 1489, duration: 66, easing: "easeInOutBounce" },
                { id: "eid33", tween: [ "style", "${_Text_B1}", "opacity", '0.22', { fromValue: '0.25'}], position: 1555, duration: 200, easing: "easeInOutBounce" },
                { id: "eid34", tween: [ "style", "${_Text_B1}", "opacity", '0.18', { fromValue: '0.22'}], position: 1755, duration: 67, easing: "easeInOutBounce" },
                { id: "eid35", tween: [ "style", "${_Text_B1}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1955, duration: 96, easing: "easeInBounce" },
                { id: "eid36", tween: [ "style", "${_Text_B1}", "opacity", '0.5', { fromValue: '0.146612'}], position: 2051, duration: 171, easing: "easeOutBounce" },
                { id: "eid37", tween: [ "style", "${_Text_B1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2222, duration: 67, easing: "easeInOutBounce" },
                { id: "eid38", tween: [ "style", "${_Text_B1}", "opacity", '0.59', { fromValue: '0.550000'}], position: 2289, duration: 34, easing: "easeInOutBounce" },
                { id: "eid39", tween: [ "style", "${_Text_B1}", "opacity", '0.4', { fromValue: '0.590000'}], position: 2323, duration: 70, easing: "easeInOutBounce" },
                { id: "eid40", tween: [ "style", "${_Text_B1}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2393, duration: 55, easing: "easeInOutBounce" },
                { id: "eid41", tween: [ "style", "${_Text_B1}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2448, duration: 41, easing: "easeInOutBounce" },
                { id: "eid42", tween: [ "style", "${_Text_B1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2489, duration: 38, easing: "easeInOutBounce" },
                { id: "eid43", tween: [ "style", "${_Text_B1}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2527, duration: 64, easing: "easeInOutBounce" },
                { id: "eid44", tween: [ "style", "${_Text_B1}", "opacity", '1', { fromValue: '0.500000'}], position: 2822, duration: 800, easing: "easeInOutBounce" },
                { id: "eid45", tween: [ "style", "${_Text_B1}", "opacity", '1', { fromValue: '1'}], position: 3822, duration: 0, easing: "easeInOutBounce" },
                { id: "eid46", tween: [ "style", "${_Text_B1}", "opacity", '0', { fromValue: '0.5'}], position: 4022, duration: 578, easing: "easeInOutBounce" }            ]
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
                { id: "eid1550", tween: [ "style", "${_dust_icon2}", "top", '-7px', { fromValue: '-7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" },
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
                { id: "eid1549", tween: [ "transform", "${_dust_icon2}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1551", tween: [ "style", "${_dust_icon2}", "left", '7px', { fromValue: '7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/dust_icon3.png', '0px', '0px']
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
"H_head": {
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
                    id: 'End_head',
                    type: 'image',
                    rect: ['0px', '0px', '3500px', '454px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/End_head.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '560px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '500px']
            ],
            "${_End_head}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
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
                { id: "eid6", tween: [ "style", "${_End_head}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${_End_head}", "left", '-522px', { fromValue: '0px'}], position: 100, duration: 0 },
                { id: "eid8", tween: [ "style", "${_End_head}", "left", '-1000px', { fromValue: '-500px'}], position: 200, duration: 0 },
                { id: "eid9", tween: [ "style", "${_End_head}", "left", '-1500px', { fromValue: '-1000px'}], position: 300, duration: 0 },
                { id: "eid10", tween: [ "style", "${_End_head}", "left", '-2000px', { fromValue: '-1500px'}], position: 400, duration: 0 },
                { id: "eid11", tween: [ "style", "${_End_head}", "left", '-2500px', { fromValue: '-2000px'}], position: 500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_End_head}", "left", '-3002px', { fromValue: '-2500px'}], position: 600, duration: 0 }            ]
        }
    }
},
"H_crack": {
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
                    id: 'End_crack2',
                    type: 'image',
                    rect: ['0px', '0px', '318px', '700px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/End_crack.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_End_crack2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '182px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '318px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "style", "${_End_crack2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_End_crack2}", "top", '-170px', { fromValue: '0px'}], position: 100, duration: 0 },
                { id: "eid16", tween: [ "style", "${_End_crack2}", "top", '-325px', { fromValue: '-170px'}], position: 200, duration: 0 },
                { id: "eid19", tween: [ "style", "${_End_crack2}", "top", '-496px', { fromValue: '-325px'}], position: 300, duration: 0 },
                { id: "eid13", tween: [ "style", "${_End_crack2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_End_crack2}", "left", '2px', { fromValue: '0px'}], position: 200, duration: 0 },
                { id: "eid18", tween: [ "style", "${_End_crack2}", "left", '2px', { fromValue: '2px'}], position: 300, duration: 0 }            ]
        }
    }
},
"text_6": {
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
                    id: 'Text_C4',
                    type: 'image',
                    rect: ['3px', '-3px', '1186px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_C4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1200px']
            ],
            "${_Text_C4}": [
                ["style", "top", '-3px'],
                ["style", "height", '80px'],
                ["style", "opacity", '0'],
                ["style", "left", '3px'],
                ["style", "width", '1186px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
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
            timeline: [
                { id: "eid157", tween: [ "style", "${_Text_C4}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid158", tween: [ "style", "${_Text_C4}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid159", tween: [ "style", "${_Text_C4}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid160", tween: [ "style", "${_Text_C4}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid161", tween: [ "style", "${_Text_C4}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid162", tween: [ "style", "${_Text_C4}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid163", tween: [ "style", "${_Text_C4}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid164", tween: [ "style", "${_Text_C4}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid165", tween: [ "style", "${_Text_C4}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid166", tween: [ "style", "${_Text_C4}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid167", tween: [ "style", "${_Text_C4}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid168", tween: [ "style", "${_Text_C4}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid169", tween: [ "style", "${_Text_C4}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid170", tween: [ "style", "${_Text_C4}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid171", tween: [ "style", "${_Text_C4}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid172", tween: [ "style", "${_Text_C4}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid173", tween: [ "style", "${_Text_C4}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid174", tween: [ "style", "${_Text_C4}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid175", tween: [ "style", "${_Text_C4}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid176", tween: [ "style", "${_Text_C4}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid177", tween: [ "style", "${_Text_C4}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid178", tween: [ "style", "${_Text_C4}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_cloud5.png', '0px', '0px']
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
                { id: "eid879", tween: [ "style", "${_ss_cloud2}", "top", '-1000px', { fromValue: '-1000px'}], position: 33, duration: 0 },
                { id: "eid880", tween: [ "style", "${_ss_cloud2}", "top", '0px', { fromValue: '-1000px'}], position: 133, duration: 0 },
                { id: "eid17", tween: [ "style", "${_ss_cloud2}", "top", '-200px', { fromValue: '0px'}], position: 233, duration: 0 },
                { id: "eid18", tween: [ "style", "${_ss_cloud2}", "top", '-400px', { fromValue: '-200px'}], position: 333, duration: 0 },
                { id: "eid19", tween: [ "style", "${_ss_cloud2}", "top", '-600px', { fromValue: '-400px'}], position: 433, duration: 0 },
                { id: "eid20", tween: [ "style", "${_ss_cloud2}", "top", '-800px', { fromValue: '-600px'}], position: 533, duration: 0 }            ]
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '2048px']
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
                { id: "eid1062", tween: [ "transform", "${_cloud_clusterCopy3}", "scaleY", '-0.58423', { fromValue: '-0.58423'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1828", tween: [ "transform", "${_cloud_clusterCopy}", "scaleY", '1.0317', { fromValue: '1.0317'}], position: 0, duration: 0 },
                { id: "eid1090", tween: [ "motion", "${_cloud_clusterCopy2}", [[-352.92, 1051, 2093.13, 0],[2765, 1051, 0, 0]]], position: 0, duration: 16341 },
                { id: "eid1093", tween: [ "motion", "${_cloud_clusterCopy2}", [[-678.75, 1051, 0, 0],[-352.92, 1051, 0, 0]]], position: 17000, duration: 3000 },
                { id: "eid1820", tween: [ "transform", "${_cloud_cluster}", "scaleX", '-0.86322', { fromValue: '-0.86322'}], position: 0, duration: 0 },
                { id: "eid1086", tween: [ "motion", "${_cloud_cluster}", [[1027.38, 711.75, -2397.37, 0],[-570.87, 711.75, 0, 0]]], position: 0, duration: 10000 },
                { id: "eid1089", tween: [ "motion", "${_cloud_cluster}", [[2599.88, 711.75, 0, 0],[1027.38, 711.75, 0, 0]]], position: 10335, duration: 9665 },
                { id: "eid1077", tween: [ "motion", "${_cloud_clusterCopy3}", [[618.1, 336.78, 2349.22, 0],[2383.63, 336.78, 0, 0]]], position: 0, duration: 13000 },
                { id: "eid1080", tween: [ "motion", "${_cloud_clusterCopy3}", [[-331.12, 336.78, 0, 0],[618.1, 336.78, 0, 0]]], position: 13386, duration: 6614 },
                { id: "eid1112", tween: [ "transform", "${_cloud_clusterCopy4}", "scaleY", '0.43478', { fromValue: '0.43478'}], position: 0, duration: 0 },
                { id: "eid1831", tween: [ "transform", "${_cloud_clusterCopy2}", "scaleY", '-0.95', { fromValue: '-1.1411'}], position: 0, duration: 0 },
                { id: "eid1115", tween: [ "motion", "${_cloud_clusterCopy}", [[2284.05, 60.25, 0, 0],[-645.75, 60.25, 0, 0]]], position: 0, duration: 17537 },
                { id: "eid1121", tween: [ "motion", "${_cloud_clusterCopy}", [[2775.88, 24.25, 0, 0],[2279.13, 24.25, 0, 0]]], position: 18000, duration: 2000 },
                { id: "eid1830", tween: [ "transform", "${_cloud_clusterCopy2}", "scaleX", '0.95', { fromValue: '1.18114'}], position: 0, duration: 0 },
                { id: "eid2165", tween: [ "transform", "${_cloud_clusterCopy}", "scaleX", '1.0317', { fromValue: '1.0317'}], position: 0, duration: 0 },
                { id: "eid1821", tween: [ "transform", "${_cloud_cluster}", "scaleY", '-0.86322', { fromValue: '-0.86322'}], position: 0, duration: 0 },
                { id: "eid1095", tween: [ "motion", "${_cloud_clusterCopy4}", [[1473.74, 1364.65, -2265.5, 0],[-262.13, 1364.65, 0, 0]]], position: 0, duration: 13386 },
                { id: "eid1098", tween: [ "motion", "${_cloud_clusterCopy4}", [[2288, 1364.65, 0, 0],[1473.74, 1364.65, 0, 0]]], position: 13629, duration: 6371 },
                { id: "eid1061", tween: [ "transform", "${_cloud_clusterCopy3}", "scaleX", '0.58423', { fromValue: '0.58423'}], position: 0, duration: 0, easing: "easeInOutQuad" }            ]
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
                    transform: [[0, 0], [], [], ['-1']],
                    rect: ['142px', '102px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_12Copy',
                    type: 'rect',
                    transform: [[0, 0], [], [], ['-1']],
                    rect: ['470px', '16px', 'auto', 'auto', 'auto', 'auto']
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
                ["transform", "scaleX", '1'],
                ["style", "left", '242px'],
                ["transform", "scaleY", '1']
            ],
            "${_cloud_22}": [
                ["style", "top", '84px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '574px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '302px'],
                ["style", "width", '1104px']
            ],
            "${_cloud_12Copy}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '-1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '470px']
            ],
            "${_cloud_12}": [
                ["style", "top", '38px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '30px'],
                ["transform", "scaleY", '1']
            ],
            "${_cloud_22Copy}": [
                ["style", "top", '102px'],
                ["transform", "scaleX", '-1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '142px']
            ],
            "${_cloud_3Copy}": [
                ["style", "top", '100px'],
                ["transform", "scaleX", '-1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '362px']
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
                { id: "eid2170", tween: [ "transform", "${_cloud_12}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid2169", tween: [ "transform", "${_cloud_22Copy}", "scaleY", '1', { fromValue: '1'}], position: 22, duration: 0 },
                { id: "eid2178", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-1.15', { fromValue: '-1'}], position: 0, duration: 2000 },
                { id: "eid2184", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-0.9', { fromValue: '-1.15'}], position: 2000, duration: 2000 },
                { id: "eid2186", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-1.15', { fromValue: '-0.9'}], position: 4000, duration: 3000 },
                { id: "eid2189", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-1', { fromValue: '-1.15'}], position: 7000, duration: 3000 },
                { id: "eid2192", tween: [ "transform", "${_cloud_12}", "scaleX", '1.14999', { fromValue: '1'}], position: 0, duration: 2000 },
                { id: "eid2193", tween: [ "transform", "${_cloud_12}", "scaleX", '0.9', { fromValue: '1.14999'}], position: 2000, duration: 2000 },
                { id: "eid2194", tween: [ "transform", "${_cloud_12}", "scaleX", '1.14999', { fromValue: '0.9'}], position: 4000, duration: 3000 },
                { id: "eid2195", tween: [ "transform", "${_cloud_12}", "scaleX", '1', { fromValue: '1.14999'}], position: 7000, duration: 3000 },
                { id: "eid2171", tween: [ "transform", "${_cloud_22}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid876", tween: [ "style", "${_cloud_3}", "left", '252px', { fromValue: '242px'}], position: 0, duration: 0 },
                { id: "eid891", tween: [ "style", "${_cloud_3}", "left", '262px', { fromValue: '252px'}], position: 304, duration: 0, easing: "easeInOutQuad" },
                { id: "eid865", tween: [ "style", "${_cloud_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid890", tween: [ "style", "${_cloud_3}", "top", '10px', { fromValue: '0px'}], position: 304, duration: 0, easing: "easeInOutQuad" },
                { id: "eid875", tween: [ "style", "${_cloud_3Copy}", "left", '342px', { fromValue: '362px'}], position: 0, duration: 0 },
                { id: "eid892", tween: [ "style", "${_cloud_3Copy}", "left", '332px', { fromValue: '342px'}], position: 304, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2200", tween: [ "transform", "${_cloud_3}", "scaleX", '1.14999', { fromValue: '1'}], position: 0, duration: 2000 },
                { id: "eid2201", tween: [ "transform", "${_cloud_3}", "scaleX", '0.9', { fromValue: '1.14999'}], position: 2000, duration: 2000 },
                { id: "eid2202", tween: [ "transform", "${_cloud_3}", "scaleX", '1.14999', { fromValue: '0.9'}], position: 4000, duration: 3000 },
                { id: "eid2203", tween: [ "transform", "${_cloud_3}", "scaleX", '1', { fromValue: '1.14999'}], position: 7000, duration: 3000 },
                { id: "eid2196", tween: [ "transform", "${_cloud_22}", "scaleX", '1.14999', { fromValue: '1'}], position: 0, duration: 2000 },
                { id: "eid2197", tween: [ "transform", "${_cloud_22}", "scaleX", '0.9', { fromValue: '1.14999'}], position: 2000, duration: 2000 },
                { id: "eid2198", tween: [ "transform", "${_cloud_22}", "scaleX", '1.14999', { fromValue: '0.9'}], position: 4000, duration: 3000 },
                { id: "eid2199", tween: [ "transform", "${_cloud_22}", "scaleX", '1', { fromValue: '1.14999'}], position: 7000, duration: 3000 },
                { id: "eid2177", tween: [ "transform", "${_cloud_22Copy}", "scaleX", '-1.15', { fromValue: '-1'}], position: 0, duration: 2000 },
                { id: "eid2185", tween: [ "transform", "${_cloud_22Copy}", "scaleX", '-0.9', { fromValue: '-1.15'}], position: 2000, duration: 2000 },
                { id: "eid2187", tween: [ "transform", "${_cloud_22Copy}", "scaleX", '-1.15', { fromValue: '-0.9'}], position: 4000, duration: 3000 },
                { id: "eid2190", tween: [ "transform", "${_cloud_22Copy}", "scaleX", '-1', { fromValue: '-1.15'}], position: 7000, duration: 3000 },
                { id: "eid864", tween: [ "transform", "${_cloud_3Copy}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid2167", tween: [ "transform", "${_cloud_3}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid862", tween: [ "style", "${_cloud_3Copy}", "top", '100px', { fromValue: '100px'}], position: 0, duration: 0 },
                { id: "eid893", tween: [ "style", "${_cloud_3Copy}", "top", '91px', { fromValue: '100px'}], position: 304, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2168", tween: [ "transform", "${_cloud_12Copy}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid2179", tween: [ "transform", "${_cloud_3Copy}", "scaleX", '-1.15', { fromValue: '-1'}], position: 0, duration: 2000 },
                { id: "eid2183", tween: [ "transform", "${_cloud_3Copy}", "scaleX", '-0.9', { fromValue: '-1.15'}], position: 2000, duration: 2022 },
                { id: "eid2188", tween: [ "transform", "${_cloud_3Copy}", "scaleX", '-1.15', { fromValue: '-0.9'}], position: 4000, duration: 3000 },
                { id: "eid2191", tween: [ "transform", "${_cloud_3Copy}", "scaleX", '-1', { fromValue: '-1.15'}], position: 7000, duration: 3000 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_cloud5.png', '0px', '0px']
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
                { id: "eid881", tween: [ "style", "${_ss_cloud2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid882", tween: [ "style", "${_ss_cloud2}", "top", '-200px', { fromValue: '0px'}], position: 100, duration: 0 },
                { id: "eid18", tween: [ "style", "${_ss_cloud2}", "top", '-400px', { fromValue: '-200px'}], position: 200, duration: 0 },
                { id: "eid19", tween: [ "style", "${_ss_cloud2}", "top", '-600px', { fromValue: '-400px'}], position: 299, duration: 0 },
                { id: "eid20", tween: [ "style", "${_ss_cloud2}", "top", '-800px', { fromValue: '-600px'}], position: 399, duration: 0 },
                { id: "eid21", tween: [ "style", "${_ss_cloud2}", "top", '-1000px', { fromValue: '-800px'}], position: 499, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_cloud5.png', '0px', '0px']
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
                { id: "eid376", tween: [ "style", "${_ss_cloud2}", "top", '-800px', { fromValue: '-800px'}], position: 67, duration: 0 },
                { id: "eid377", tween: [ "style", "${_ss_cloud2}", "top", '-1000px', { fromValue: '-800px'}], position: 167, duration: 0 },
                { id: "eid16", tween: [ "style", "${_ss_cloud2}", "top", '0px', { fromValue: '-1000px'}], position: 267, duration: 0 },
                { id: "eid17", tween: [ "style", "${_ss_cloud2}", "top", '-200px', { fromValue: '0px'}], position: 367, duration: 0 },
                { id: "eid18", tween: [ "style", "${_ss_cloud2}", "top", '-400px', { fromValue: '-200px'}], position: 467, duration: 0 },
                { id: "eid19", tween: [ "style", "${_ss_cloud2}", "top", '-600px', { fromValue: '-400px'}], position: 567, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "END");
