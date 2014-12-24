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
                id: 'paper_opaque2',
                type: 'image',
                rect: ['0px', '-1px','2048px','1535px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
            },
            {
                id: 'BG_0Copy2',
                type: 'image',
                rect: ['-562px', '1117px','4096px','567px','auto', 'auto'],
                clip: ['rect(70.83349609375px 4096px 567px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
            },
            {
                id: 'BG52',
                type: 'image',
                rect: ['949px', '95px','890px','711px','auto', 'auto'],
                opacity: 0.79674795148818,
                fill: ["rgba(0,0,0,0)",im+"BG5.png",'0px','0px'],
                transform: [[],['-1'],[],['-1']]
            },
            {
                id: 'BusStopWalkers',
                type: 'rect',
                rect: ['2844', '418','auto','auto','auto', 'auto']
            },
            {
                id: 'BG_0Copy',
                type: 'image',
                rect: ['1069px', '997px','2048px','283px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'BG_curb',
                type: 'image',
                rect: ['190px', '919px','2938px','269px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_curb.png",'0px','0px']
            },
            {
                id: 'BG_poller',
                type: 'rect',
                rect: ['73', '882','auto','auto','auto', 'auto']
            },
            {
                id: 'BG_lantern',
                type: 'image',
                rect: ['708px', '-140px','214px','1524px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
            },
            {
                id: 'BG_fence3',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'FG_Hwalk',
                type: 'rect',
                rect: ['1317', '1197','auto','auto','auto', 'auto']
            },
            {
                id: 'dust_button2',
                display: 'none',
                type: 'rect',
                rect: ['1652px', '330','auto','auto','auto', 'auto']
            },
            {
                id: 'text_1',
                display: 'block',
                type: 'rect',
                rect: ['33px', '86px','auto','auto','auto', 'auto'],
                transform: [[],['-1'],[],['0.85','0.85']]
            },
            {
                id: 'text_2',
                display: 'block',
                type: 'rect',
                rect: ['-44px', '175px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.70853','0.70853']]
            },
            {
                id: 'text_3',
                display: 'block',
                type: 'rect',
                rect: ['1124px', '254px','auto','auto','auto', 'auto'],
                transform: [[],['1'],[],['0.75','0.75']]
            },
            {
                id: 'text_4',
                display: 'block',
                type: 'rect',
                rect: ['285px', '338px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.88809','0.88809']]
            },
            {
                id: 'dust_button2Copy',
                display: 'none',
                type: 'rect',
                rect: ['1652px', '330px','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle',
                display: 'block',
                type: 'rect',
                rect: ['0px', '-10px','2048px','1545px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [
            {
                id: 'BusStopWalkers',
                symbolName: 'BusStopWalkers',
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
                id: 'FG_Hwalk',
                symbolName: 'FG_Hwalk',
                autoPlay: {

                }
            },
            {
                id: 'dust_button2',
                symbolName: 'dust_button',
                autoPlay: {

                }
            },
            {
                id: 'BG_fence3',
                symbolName: 'BG_fence',
                autoPlay: {

                }
            },
            {
                id: 'BG_poller',
                symbolName: 'BG_poller',
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
                id: 'text_3',
                symbolName: 'text_3',
                autoPlay: {

                }
            },
            {
                id: 'dust_button2Copy',
                symbolName: 'dust_button',
                autoPlay: {

                }
            },
            {
                id: 'text_1',
                symbolName: 'text_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_BG_0Copy}": [
                ["style", "top", '1007px'],
                ["style", "height", '283px'],
                ["transform", "scaleX", '-1'],
                ["style", "left", '2455px'],
                ["style", "width", '2048px']
            ],
            "${_dust_button2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1662px']
            ],
            "${_text_1}": [
                ["style", "top", '86px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '33px'],
                ["transform", "scaleX", '0.85']
            ],
            "${_BG_lantern}": [
                ["style", "top", '-180px'],
                ["style", "left", '1989px'],
                ["transform", "rotateZ", '1deg']
            ],
            "${_BG_poller}": [
                ["style", "top", '804px'],
                ["style", "left", '2346px']
            ],
            "${_paper_opaque2}": [
                ["style", "top", '-1px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "display", 'block'],
                ["style", "top", '0px']
            ],
            "${_BG_0Copy2}": [
                ["style", "top", '1237px'],
                ["style", "clip", [70.83349609375,4096,567,2536], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-2567px']
            ],
            "${_BG52}": [
                ["style", "top", '48px'],
                ["transform", "rotateZ", '-1deg'],
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '1'],
                ["style", "left", '1816px']
            ],
            "${_dust_button2Copy}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1566px'],
                ["style", "top", '96px']
            ],
            "${_BusStopWalkers}": [
                ["style", "left", '2846px']
            ],
            "${_text_3}": [
                ["style", "top", '254px'],
                ["transform", "scaleY", '0.75'],
                ["transform", "rotateZ", '1deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '1124px'],
                ["transform", "scaleX", '0.75']
            ],
            "${_BG_fence3}": [
                ["style", "left", '921px'],
                ["style", "top", '430px']
            ],
            "${_text_4}": [
                ["style", "top", '338px'],
                ["transform", "scaleY", '0.88809'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '285px'],
                ["transform", "scaleX", '0.88809']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FG_Hwalk}": [
                ["style", "left", '1321px']
            ],
            "${_BG_curb}": [
                ["style", "top", '869px'],
                ["style", "left", '2353px']
            ],
            "${_text_2}": [
                ["style", "top", '175px'],
                ["transform", "scaleY", '0.70853'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '-44px'],
                ["transform", "scaleX", '0.70853']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 57712,
            autoPlay: true,
            labels: {
                "button": 15000,
                "textOut": 27993,
                "in": 30317,
                "out": 54938
            },
            timeline: [
                { id: "eid63", tween: [ "style", "${_BG_poller}", "left", '-41px', { fromValue: '2346px'}], position: 30317, duration: 6621, easing: "easeInOutQuad" },
                { id: "eid598", tween: [ "style", "${_dust_button2Copy}", "left", '1566px', { fromValue: '1566px'}], position: 15000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid614", tween: [ "style", "${_text_4}", "opacity", '0', { fromValue: '1'}], position: 27993, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid516", tween: [ "style", "${_FG_Hwalk}", "left", '-2089px', { fromValue: '1321px'}], position: 30317, duration: 6621, easing: "easeInOutQuad" },
                { id: "eid357", tween: [ "style", "${_BG_0Copy2}", "left", '-5925px', { fromValue: '-2567px'}], position: 30317, duration: 6621, easing: "easeInOutQuad" },
                { id: "eid76", tween: [ "style", "${_BG_0Copy}", "left", '9px', { fromValue: '2455px'}], position: 30317, duration: 6621, easing: "easeInOutQuad" },
                { id: "eid530", tween: [ "style", "${_dust_button2}", "left", '1662px', { fromValue: '1662px'}], position: 38257, duration: 0, easing: "easeInOutQuad" },
                { id: "eid599", tween: [ "style", "${_dust_button2Copy}", "top", '96px', { fromValue: '96px'}], position: 15000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid780", tween: [ "style", "${_text_2}", "display", 'none', { fromValue: 'block'}], position: 29993, duration: 0, easing: "easeInOutQuad" },
                { id: "eid779", tween: [ "style", "${_text_3}", "display", 'none', { fromValue: 'block'}], position: 29993, duration: 0, easing: "easeInOutQuad" },
                { id: "eid533", tween: [ "style", "${_dust_button2}", "opacity", '1', { fromValue: '0'}], position: 38257, duration: 457, easing: "easeInOutQuad" },
                { id: "eid535", tween: [ "style", "${_dust_button2}", "opacity", '0', { fromValue: '1'}], position: 54938, duration: 457, easing: "easeInOutQuad" },
                { id: "eid74", tween: [ "style", "${_BG_curb}", "left", '-36px', { fromValue: '2353px'}], position: 30317, duration: 6621, easing: "easeInOutQuad" },
                { id: "eid781", tween: [ "style", "${_text_1}", "display", 'none', { fromValue: 'block'}], position: 29993, duration: 0, easing: "easeInOutQuad" },
                { id: "eid398", tween: [ "style", "${_BusStopWalkers}", "left", '1004px', { fromValue: '2846px'}], position: 30317, duration: 6621, easing: "easeInOutQuad" },
                { id: "eid617", tween: [ "style", "${_text_1}", "opacity", '0', { fromValue: '1'}], position: 27993, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid161", tween: [ "style", "${_BG52}", "left", '166px', { fromValue: '1816px'}], position: 30317, duration: 6621, easing: "easeInOutQuad" },
                { id: "eid597", tween: [ "style", "${_dust_button2Copy}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid605", tween: [ "style", "${_dust_button2Copy}", "opacity", '0', { fromValue: '1'}], position: 27993, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid162", tween: [ "style", "${_BG52}", "top", '48px', { fromValue: '48px'}], position: 0, duration: 0, easing: "easeInOutQuint" },
                { id: "eid160", tween: [ "style", "${_BG_fence3}", "left", '-2150px', { fromValue: '921px'}], position: 30317, duration: 6621, easing: "easeInOutQuad" },
                { id: "eid531", tween: [ "style", "${_dust_button2}", "display", 'block', { fromValue: 'none'}], position: 38257, duration: 0, easing: "easeInOutQuad" },
                { id: "eid536", tween: [ "style", "${_dust_button2}", "display", 'none', { fromValue: 'block'}], position: 55395, duration: 0, easing: "easeInOutQuad" },
                { id: "eid615", tween: [ "style", "${_text_3}", "opacity", '0', { fromValue: '1'}], position: 27993, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid616", tween: [ "style", "${_text_2}", "opacity", '0', { fromValue: '1'}], position: 27993, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid164", tween: [ "style", "${_BG_lantern}", "left", '-512px', { fromValue: '1989px'}], position: 30317, duration: 6621, easing: "easeInOutQuad" },
                { id: "eid548", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 2160, duration: 0 },
                { id: "eid549", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 55236, duration: 0 },
                { id: "eid596", tween: [ "style", "${_dust_button2Copy}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid601", tween: [ "style", "${_dust_button2Copy}", "display", 'none', { fromValue: 'block'}], position: 28993, duration: 0, easing: "easeInOutQuad" },
                { id: "eid777", tween: [ "style", "${_dust_button2Copy}", "display", 'none', { fromValue: 'none'}], position: 29993, duration: 0, easing: "easeInOutQuad" },
                { id: "eid778", tween: [ "style", "${_text_4}", "display", 'none', { fromValue: 'block'}], position: 29993, duration: 0, easing: "easeInOutQuad" },
                { id: "eid175", tween: [ "style", "${_BG_0Copy2}", "clip", [70.83349609375,4096,567,2536], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [70.83349609375,4096,567,2536]}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "style", "${_BG_0Copy2}", "top", '1237px', { fromValue: '1237px'}], position: 0, duration: 0 },
                { id: "eid180", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 2160, easing: "easeInOutQuad" },
                { id: "eid182", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 55712, duration: 2000, easing: "easeInOutQuad" }            ]
        }
    }
},
"C_walkM_2": {
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
                    id: 'ss_walkM_2',
                    type: 'image',
                    rect: ['0px', '0px', '966px', '464px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_walkM_2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_walkM_2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '464px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 800,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid1", tween: [ "style", "${_ss_walkM_2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_ss_walkM_2}", "left", '-250px', { fromValue: '0px'}], position: 200, duration: 0 },
                { id: "eid3", tween: [ "style", "${_ss_walkM_2}", "left", '-500px', { fromValue: '-250px'}], position: 400, duration: 0 },
                { id: "eid4", tween: [ "style", "${_ss_walkM_2}", "left", '-750px', { fromValue: '-500px'}], position: 600, duration: 0 }            ]
        }
    }
},
"C_walkW_1": {
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
                    id: 'ss_walkW_1',
                    type: 'image',
                    rect: ['0px', '0px', '2240px', '453px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_walkW_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '453px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '280px']
            ],
            "${_ss_walkW_1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_ss_walkW_1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_ss_walkW_1}", "left", '-280px', { fromValue: '0px'}], position: 125, duration: 0 },
                { id: "eid9", tween: [ "style", "${_ss_walkW_1}", "left", '-560px', { fromValue: '-280px'}], position: 250, duration: 0 },
                { id: "eid10", tween: [ "style", "${_ss_walkW_1}", "left", '-840px', { fromValue: '-560px'}], position: 375, duration: 0 },
                { id: "eid11", tween: [ "style", "${_ss_walkW_1}", "left", '-1120px', { fromValue: '-840px'}], position: 500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_ss_walkW_1}", "left", '-1400px', { fromValue: '-1120px'}], position: 625, duration: 0 },
                { id: "eid13", tween: [ "style", "${_ss_walkW_1}", "left", '-1680px', { fromValue: '-1400px'}], position: 750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_ss_walkW_1}", "left", '-1960px', { fromValue: '-1680px'}], position: 875, duration: 0 }            ]
        }
    }
},
"C_walkM_1": {
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
                    id: 'ss_walkM_1',
                    type: 'image',
                    rect: ['0px', '0px', '1600px', '473px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_walkM_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_walkM_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '473px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid20", tween: [ "style", "${_ss_walkM_1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_ss_walkM_1}", "left", '-200px', { fromValue: '0px'}], position: 125, duration: 0 },
                { id: "eid22", tween: [ "style", "${_ss_walkM_1}", "left", '-400px', { fromValue: '-200px'}], position: 250, duration: 0 },
                { id: "eid23", tween: [ "style", "${_ss_walkM_1}", "left", '-600px', { fromValue: '-400px'}], position: 375, duration: 0 },
                { id: "eid24", tween: [ "style", "${_ss_walkM_1}", "left", '-800px', { fromValue: '-600px'}], position: 500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_ss_walkM_1}", "left", '-1000px', { fromValue: '-800px'}], position: 625, duration: 0 },
                { id: "eid26", tween: [ "style", "${_ss_walkM_1}", "left", '-1200px', { fromValue: '-1000px'}], position: 750, duration: 0 },
                { id: "eid27", tween: [ "style", "${_ss_walkM_1}", "left", '-1400px', { fromValue: '-1200px'}], position: 875, duration: 0 }            ]
        }
    }
},
"BG_poller": {
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
                    id: 'poller',
                    type: 'image',
                    rect: ['0px', '0px', '166px', '350px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/poller.png', '0px', '0px']
                },
                {
                    id: 'pollerCopy',
                    type: 'image',
                    rect: ['331px', '0px', '166px', '350px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/poller.png', '0px', '0px']
                },
                {
                    id: 'pollerCopy2',
                    type: 'image',
                    rect: ['676px', '0px', '166px', '350px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/poller.png', '0px', '0px']
                },
                {
                    id: 'pollerCopy3',
                    type: 'image',
                    rect: ['1024px', '0px', '166px', '350px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/poller.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '350px'],
                ["style", "width", '1220px']
            ],
            "${_pollerCopy3}": [
                ["style", "left", '1024px'],
                ["style", "top", '0px']
            ],
            "${_pollerCopy}": [
                ["style", "left", '331px'],
                ["style", "top", '0px']
            ],
            "${_pollerCopy2}": [
                ["style", "left", '676px'],
                ["style", "top", '0px']
            ],
            "${_poller}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
"passanten": {
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
                    display: 'none',
                    type: 'rect',
                    id: 'C_walkM_1',
                    rect: ['232px', '-617px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'C_walkM_2',
                    type: 'rect',
                    rect: ['392px', '571px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'C_walkW_1',
                    rect: ['160px', '27px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'C_walkM_2',
                symbolName: 'C_walkM_2',
                autoPlay: {

               }
            },
            {
                id: 'C_walkM_1',
                symbolName: 'C_walkM_1',
                autoPlay: {

               }
            },
            {
                id: 'C_walkW_1',
                symbolName: 'C_walkW_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_C_walkM_2}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '0.4657'],
                ["transform", "scaleX", '-0.4657'],
                ["style", "opacity", '0.58536585365854'],
                ["style", "left", '2213px']
            ],
            "${symbolSelector}": [
                ["style", "height", '473px'],
                ["style", "width", '2480px']
            ],
            "${_C_walkW_1}": [
                ["style", "top", '40px'],
                ["transform", "scaleY", '0.82984'],
                ["transform", "scaleX", '0.82984'],
                ["style", "left", '-24px'],
                ["style", "display", 'none']
            ],
            "${_C_walkM_1}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '0px'],
                ["style", "left", '2280px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 24000,
            autoPlay: true,
            timeline: [
                { id: "eid19", tween: [ "style", "${_C_walkM_2}", "opacity", '0.58536585365854', { fromValue: '0.58536585365854'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "transform", "${_C_walkM_1}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "transform", "${_C_walkM_2}", "scaleX", '-0.4657', { fromValue: '-0.4657'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_C_walkW_1}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid53", tween: [ "style", "${_C_walkW_1}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0 },
                { id: "eid54", tween: [ "style", "${_C_walkM_1}", "display", 'block', { fromValue: 'none'}], position: 9671, duration: 0 },
                { id: "eid55", tween: [ "style", "${_C_walkM_1}", "display", 'none', { fromValue: 'block'}], position: 22671, duration: 0 },
                { id: "eid43", tween: [ "style", "${_C_walkM_2}", "left", '44px', { fromValue: '2213px'}], position: 0, duration: 24000 },
                { id: "eid36", tween: [ "style", "${_C_walkW_1}", "left", '2256px', { fromValue: '-24px'}], position: 3000, duration: 13000 },
                { id: "eid37", tween: [ "style", "${_C_walkM_1}", "left", '32px', { fromValue: '2280px'}], position: 9671, duration: 13000 },
                { id: "eid16", tween: [ "style", "${_C_walkW_1}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "transform", "${_C_walkW_1}", "scaleX", '0.82984', { fromValue: '0.82984'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "transform", "${_C_walkW_1}", "scaleY", '0.82984', { fromValue: '0.82984'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_C_walkM_2}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_C_walkM_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_C_walkM_1}", "top", '0px', { fromValue: '0px'}], position: 22671, duration: 0 },
                { id: "eid18", tween: [ "transform", "${_C_walkM_2}", "scaleY", '0.4657', { fromValue: '0.4657'}], position: 0, duration: 0 }            ]
        }
    }
},
"BG_fence": {
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
                    id: 'BG_fenceCopy2',
                    type: 'image',
                    rect: ['-1158px', '15px', '1351px', '952px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_fence.png', '0px', '0px']
                },
                {
                    id: 'BG_fence',
                    type: 'image',
                    rect: ['0px', '0px', '1351px', '952px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_fence.png', '0px', '0px']
                },
                {
                    id: 'BG_fenceCopy',
                    type: 'image',
                    rect: ['1158px', '0px', '1351px', '952px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_fence.png', '0px', '0px']
                },
                {
                    id: 'grafitti2',
                    type: 'image',
                    rect: ['712px', '638px', '608px', '251px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/grafitti2.png', '0px', '0px']
                },
                {
                    id: 'grafitti1',
                    type: 'image',
                    rect: ['1633px', '73px', '904px', '874px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/grafitti1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '970px'],
                ["style", "width", '2490px']
            ],
            "${_BG_fenceCopy2}": [
                ["style", "left", '-1158px'],
                ["style", "top", '15px']
            ],
            "${_BG_fenceCopy}": [
                ["style", "left", '1158px'],
                ["style", "top", '0px']
            ],
            "${_grafitti1}": [
                ["style", "left", '1633px'],
                ["style", "top", '73px']
            ],
            "${_BG_fence}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_grafitti2}": [
                ["style", "left", '712px'],
                ["style", "top", '638px']
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
"lanternRow": {
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
                    transform: [[0, 0], [], [], ['-1']],
                    id: 'BG_lanternCopy',
                    type: 'image',
                    rect: ['-225px', '-18px', '95px', '677px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_lantern.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-1']],
                    id: 'BG_lanternCopy2',
                    type: 'image',
                    rect: ['678px', '-18px', '95px', '677px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_lantern.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-1']],
                    id: 'BG_lanternCopy3',
                    type: 'image',
                    rect: ['1361px', '-18px', '95px', '677px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_lantern.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BG_lanternCopy}": [
                ["style", "top", '-67px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '677px'],
                ["transform", "scaleX", '-0.8'],
                ["style", "left", '-5px'],
                ["style", "width", '95px']
            ],
            "${_BG_lanternCopy2}": [
                ["style", "top", '-67px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '677px'],
                ["transform", "scaleX", '-0.8'],
                ["style", "left", '678px'],
                ["style", "width", '95px']
            ],
            "${_BG_lanternCopy3}": [
                ["style", "top", '-67px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '677px'],
                ["transform", "scaleX", '-0.8'],
                ["style", "left", '1361px'],
                ["style", "width", '95px']
            ],
            "${symbolSelector}": [
                ["style", "height", '543px'],
                ["style", "width", '1480px']
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
                    id: 'bText_7',
                    type: 'image',
                    rect: ['0', '5px', '615px', '75px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_7.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '620px']
            ],
            "${_bText_7}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "height", '75px'],
                ["style", "width", '615px']
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
                { id: "eid706", tween: [ "style", "${_bText_7}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 452, easing: "easeInOutBounce" },
                { id: "eid707", tween: [ "style", "${_bText_7}", "opacity", '0.21', { fromValue: '0.18'}], position: 452, duration: 129, easing: "easeInOutBounce" },
                { id: "eid708", tween: [ "style", "${_bText_7}", "opacity", '0.24', { fromValue: '0.21'}], position: 581, duration: 140, easing: "easeOutBounce" },
                { id: "eid709", tween: [ "style", "${_bText_7}", "opacity", '0.19', { fromValue: '0.24'}], position: 721, duration: 106, easing: "easeOutBounce" },
                { id: "eid710", tween: [ "style", "${_bText_7}", "opacity", '0.16', { fromValue: '0.19'}], position: 827, duration: 61, easing: "easeOutBounce" },
                { id: "eid711", tween: [ "style", "${_bText_7}", "opacity", '0.21', { fromValue: '0.16'}], position: 888, duration: 164, easing: "easeInOutBounce" },
                { id: "eid712", tween: [ "style", "${_bText_7}", "opacity", '0.23', { fromValue: '0.21'}], position: 1052, duration: 67, easing: "easeInOutBounce" },
                { id: "eid713", tween: [ "style", "${_bText_7}", "opacity", '0.25', { fromValue: '0.23'}], position: 1119, duration: 66, easing: "easeInOutBounce" },
                { id: "eid714", tween: [ "style", "${_bText_7}", "opacity", '0.22', { fromValue: '0.25'}], position: 1185, duration: 200, easing: "easeInOutBounce" },
                { id: "eid715", tween: [ "style", "${_bText_7}", "opacity", '0.18', { fromValue: '0.22'}], position: 1385, duration: 67, easing: "easeInOutBounce" },
                { id: "eid716", tween: [ "style", "${_bText_7}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1585, duration: 96, easing: "easeInBounce" },
                { id: "eid717", tween: [ "style", "${_bText_7}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1681, duration: 171, easing: "easeOutBounce" },
                { id: "eid718", tween: [ "style", "${_bText_7}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1852, duration: 67, easing: "easeInOutBounce" },
                { id: "eid719", tween: [ "style", "${_bText_7}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1919, duration: 34, easing: "easeInOutBounce" },
                { id: "eid720", tween: [ "style", "${_bText_7}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1953, duration: 70, easing: "easeInOutBounce" },
                { id: "eid721", tween: [ "style", "${_bText_7}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2023, duration: 55, easing: "easeInOutBounce" },
                { id: "eid722", tween: [ "style", "${_bText_7}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2078, duration: 41, easing: "easeInOutBounce" },
                { id: "eid723", tween: [ "style", "${_bText_7}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2119, duration: 38, easing: "easeInOutBounce" },
                { id: "eid724", tween: [ "style", "${_bText_7}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2157, duration: 64, easing: "easeInOutBounce" },
                { id: "eid725", tween: [ "style", "${_bText_7}", "opacity", '1', { fromValue: '0.500000'}], position: 2452, duration: 800, easing: "easeInOutBounce" },
                { id: "eid726", tween: [ "style", "${_bText_7}", "opacity", '1', { fromValue: '1'}], position: 3452, duration: 0, easing: "easeInOutBounce" },
                { id: "eid727", tween: [ "style", "${_bText_7}", "opacity", '0', { fromValue: '0.5'}], position: 3652, duration: 481, easing: "easeInOutBounce" }            ]
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
                    id: 'bText_8',
                    type: 'image',
                    rect: ['6px', '-1px', '1473px', '98px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_8.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bText_8}": [
                ["style", "top", '-1px'],
                ["style", "height", '98px'],
                ["style", "opacity", '0'],
                ["style", "left", '6px'],
                ["style", "width", '1473px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1480px']
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
                { id: "eid750", tween: [ "style", "${_bText_8}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid751", tween: [ "style", "${_bText_8}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid752", tween: [ "style", "${_bText_8}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid753", tween: [ "style", "${_bText_8}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid754", tween: [ "style", "${_bText_8}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid755", tween: [ "style", "${_bText_8}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid756", tween: [ "style", "${_bText_8}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid757", tween: [ "style", "${_bText_8}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid758", tween: [ "style", "${_bText_8}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid759", tween: [ "style", "${_bText_8}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid760", tween: [ "style", "${_bText_8}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid761", tween: [ "style", "${_bText_8}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid762", tween: [ "style", "${_bText_8}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid763", tween: [ "style", "${_bText_8}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid764", tween: [ "style", "${_bText_8}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid765", tween: [ "style", "${_bText_8}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid766", tween: [ "style", "${_bText_8}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid767", tween: [ "style", "${_bText_8}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid768", tween: [ "style", "${_bText_8}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid769", tween: [ "style", "${_bText_8}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid770", tween: [ "style", "${_bText_8}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid771", tween: [ "style", "${_bText_8}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
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
                    id: 'bText_6',
                    type: 'image',
                    rect: ['0', '-7px', '2180px', '104px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '2210px']
            ],
            "${_bText_6}": [
                ["style", "height", '104px'],
                ["style", "opacity", '0'],
                ["style", "top", '-7px'],
                ["style", "width", '2180px']
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
                { id: "eid684", tween: [ "style", "${_bText_6}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 482, easing: "easeInOutBounce" },
                { id: "eid685", tween: [ "style", "${_bText_6}", "opacity", '0.21', { fromValue: '0.18'}], position: 482, duration: 129, easing: "easeInOutBounce" },
                { id: "eid686", tween: [ "style", "${_bText_6}", "opacity", '0.24', { fromValue: '0.21'}], position: 611, duration: 140, easing: "easeOutBounce" },
                { id: "eid687", tween: [ "style", "${_bText_6}", "opacity", '0.19', { fromValue: '0.24'}], position: 751, duration: 106, easing: "easeOutBounce" },
                { id: "eid688", tween: [ "style", "${_bText_6}", "opacity", '0.16', { fromValue: '0.19'}], position: 857, duration: 61, easing: "easeOutBounce" },
                { id: "eid689", tween: [ "style", "${_bText_6}", "opacity", '0.21', { fromValue: '0.16'}], position: 918, duration: 164, easing: "easeInOutBounce" },
                { id: "eid690", tween: [ "style", "${_bText_6}", "opacity", '0.23', { fromValue: '0.21'}], position: 1082, duration: 67, easing: "easeInOutBounce" },
                { id: "eid691", tween: [ "style", "${_bText_6}", "opacity", '0.25', { fromValue: '0.23'}], position: 1149, duration: 66, easing: "easeInOutBounce" },
                { id: "eid692", tween: [ "style", "${_bText_6}", "opacity", '0.22', { fromValue: '0.25'}], position: 1215, duration: 200, easing: "easeInOutBounce" },
                { id: "eid693", tween: [ "style", "${_bText_6}", "opacity", '0.18', { fromValue: '0.22'}], position: 1415, duration: 67, easing: "easeInOutBounce" },
                { id: "eid694", tween: [ "style", "${_bText_6}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1615, duration: 96, easing: "easeInBounce" },
                { id: "eid695", tween: [ "style", "${_bText_6}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1711, duration: 171, easing: "easeOutBounce" },
                { id: "eid696", tween: [ "style", "${_bText_6}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1882, duration: 67, easing: "easeInOutBounce" },
                { id: "eid697", tween: [ "style", "${_bText_6}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1949, duration: 34, easing: "easeInOutBounce" },
                { id: "eid698", tween: [ "style", "${_bText_6}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1983, duration: 70, easing: "easeInOutBounce" },
                { id: "eid699", tween: [ "style", "${_bText_6}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2053, duration: 55, easing: "easeInOutBounce" },
                { id: "eid700", tween: [ "style", "${_bText_6}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2108, duration: 41, easing: "easeInOutBounce" },
                { id: "eid701", tween: [ "style", "${_bText_6}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2149, duration: 38, easing: "easeInOutBounce" },
                { id: "eid702", tween: [ "style", "${_bText_6}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2187, duration: 64, easing: "easeInOutBounce" },
                { id: "eid703", tween: [ "style", "${_bText_6}", "opacity", '1', { fromValue: '0.500000'}], position: 2482, duration: 800, easing: "easeInOutBounce" },
                { id: "eid704", tween: [ "style", "${_bText_6}", "opacity", '1', { fromValue: '1'}], position: 3482, duration: 0, easing: "easeInOutBounce" },
                { id: "eid705", tween: [ "style", "${_bText_6}", "opacity", '0', { fromValue: '0.5'}], position: 3682, duration: 518, easing: "easeInOutBounce" }            ]
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
                    id: 'bText_5',
                    type: 'image',
                    rect: ['0', '-9px', '1200px', '84px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bText_5}": [
                ["style", "height", '84px'],
                ["style", "opacity", '0'],
                ["style", "top", '-9px'],
                ["style", "width", '1200px']
            ],
            "${symbolSelector}": [
                ["style", "height", '89px'],
                ["style", "width", '1223px']
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
                { id: "eid640", tween: [ "style", "${_bText_5}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 822, easing: "easeInOutBounce" },
                { id: "eid641", tween: [ "style", "${_bText_5}", "opacity", '0.21', { fromValue: '0.18'}], position: 822, duration: 129, easing: "easeInOutBounce" },
                { id: "eid642", tween: [ "style", "${_bText_5}", "opacity", '0.24', { fromValue: '0.21'}], position: 951, duration: 140, easing: "easeOutBounce" },
                { id: "eid643", tween: [ "style", "${_bText_5}", "opacity", '0.19', { fromValue: '0.24'}], position: 1091, duration: 106, easing: "easeOutBounce" },
                { id: "eid644", tween: [ "style", "${_bText_5}", "opacity", '0.16', { fromValue: '0.19'}], position: 1197, duration: 61, easing: "easeOutBounce" },
                { id: "eid645", tween: [ "style", "${_bText_5}", "opacity", '0.21', { fromValue: '0.16'}], position: 1258, duration: 164, easing: "easeInOutBounce" },
                { id: "eid646", tween: [ "style", "${_bText_5}", "opacity", '0.23', { fromValue: '0.21'}], position: 1422, duration: 67, easing: "easeInOutBounce" },
                { id: "eid647", tween: [ "style", "${_bText_5}", "opacity", '0.25', { fromValue: '0.23'}], position: 1489, duration: 66, easing: "easeInOutBounce" },
                { id: "eid648", tween: [ "style", "${_bText_5}", "opacity", '0.22', { fromValue: '0.25'}], position: 1555, duration: 200, easing: "easeInOutBounce" },
                { id: "eid649", tween: [ "style", "${_bText_5}", "opacity", '0.18', { fromValue: '0.22'}], position: 1755, duration: 67, easing: "easeInOutBounce" },
                { id: "eid650", tween: [ "style", "${_bText_5}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1955, duration: 96, easing: "easeInBounce" },
                { id: "eid651", tween: [ "style", "${_bText_5}", "opacity", '0.5', { fromValue: '0.146612'}], position: 2051, duration: 171, easing: "easeOutBounce" },
                { id: "eid652", tween: [ "style", "${_bText_5}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2222, duration: 67, easing: "easeInOutBounce" },
                { id: "eid653", tween: [ "style", "${_bText_5}", "opacity", '0.59', { fromValue: '0.550000'}], position: 2289, duration: 34, easing: "easeInOutBounce" },
                { id: "eid654", tween: [ "style", "${_bText_5}", "opacity", '0.4', { fromValue: '0.590000'}], position: 2323, duration: 70, easing: "easeInOutBounce" },
                { id: "eid655", tween: [ "style", "${_bText_5}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2393, duration: 55, easing: "easeInOutBounce" },
                { id: "eid656", tween: [ "style", "${_bText_5}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2448, duration: 41, easing: "easeInOutBounce" },
                { id: "eid657", tween: [ "style", "${_bText_5}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2489, duration: 38, easing: "easeInOutBounce" },
                { id: "eid658", tween: [ "style", "${_bText_5}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2527, duration: 64, easing: "easeInOutBounce" },
                { id: "eid659", tween: [ "style", "${_bText_5}", "opacity", '1', { fromValue: '0.500000'}], position: 2822, duration: 800, easing: "easeInOutBounce" },
                { id: "eid660", tween: [ "style", "${_bText_5}", "opacity", '1', { fromValue: '1'}], position: 3822, duration: 0, easing: "easeInOutBounce" },
                { id: "eid661", tween: [ "style", "${_bText_5}", "opacity", '0', { fromValue: '0.5'}], position: 4022, duration: 578, easing: "easeInOutBounce" }            ]
        }
    }
},
"C_walkM_3": {
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
                    id: 'ss_walkM_4',
                    type: 'image',
                    rect: ['0', '0', '1600px', '473px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_walkM_4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_walkM_4}": [
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '473px'],
                ["style", "width", '200px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid302", tween: [ "style", "${_ss_walkM_4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid303", tween: [ "style", "${_ss_walkM_4}", "left", '-200px', { fromValue: '0px'}], position: 125, duration: 0 },
                { id: "eid304", tween: [ "style", "${_ss_walkM_4}", "left", '-400px', { fromValue: '-200px'}], position: 250, duration: 0 },
                { id: "eid305", tween: [ "style", "${_ss_walkM_4}", "left", '-600px', { fromValue: '-400px'}], position: 375, duration: 0 },
                { id: "eid306", tween: [ "style", "${_ss_walkM_4}", "left", '-800px', { fromValue: '-600px'}], position: 500, duration: 0 },
                { id: "eid307", tween: [ "style", "${_ss_walkM_4}", "left", '-1000px', { fromValue: '-800px'}], position: 625, duration: 0 },
                { id: "eid308", tween: [ "style", "${_ss_walkM_4}", "left", '-1200px', { fromValue: '-1000px'}], position: 750, duration: 0 },
                { id: "eid309", tween: [ "style", "${_ss_walkM_4}", "left", '-1400px', { fromValue: '-1200px'}], position: 875, duration: 0 }            ]
        }
    }
},
"C_walkM_4": {
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
                    id: 'ss_walkM_5',
                    type: 'image',
                    rect: ['0', '0', '966px', '464px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_walkM_5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_walkM_5}": [
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '464px'],
                ["style", "width", '250px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 800,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid310", tween: [ "style", "${_ss_walkM_5}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid311", tween: [ "style", "${_ss_walkM_5}", "left", '-250px', { fromValue: '0px'}], position: 200, duration: 0 },
                { id: "eid312", tween: [ "style", "${_ss_walkM_5}", "left", '-500px', { fromValue: '-250px'}], position: 400, duration: 0 },
                { id: "eid313", tween: [ "style", "${_ss_walkM_5}", "left", '-750px', { fromValue: '-500px'}], position: 600, duration: 0 }            ]
        }
    }
},
"C_walkW_2": {
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
                    id: 'ss_walkW_2',
                    type: 'image',
                    rect: ['0', '0', '2240px', '453px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_walkW_2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_walkW_2}": [
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '453px'],
                ["style", "width", '280px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid322", tween: [ "style", "${_ss_walkW_2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid323", tween: [ "style", "${_ss_walkW_2}", "left", '-280px', { fromValue: '0px'}], position: 125, duration: 0 },
                { id: "eid324", tween: [ "style", "${_ss_walkW_2}", "left", '-560px', { fromValue: '-280px'}], position: 250, duration: 0 },
                { id: "eid325", tween: [ "style", "${_ss_walkW_2}", "left", '-840px', { fromValue: '-560px'}], position: 375, duration: 0 },
                { id: "eid326", tween: [ "style", "${_ss_walkW_2}", "left", '-1120px', { fromValue: '-840px'}], position: 500, duration: 0 },
                { id: "eid327", tween: [ "style", "${_ss_walkW_2}", "left", '-1400px', { fromValue: '-1120px'}], position: 625, duration: 0 },
                { id: "eid328", tween: [ "style", "${_ss_walkW_2}", "left", '-1680px', { fromValue: '-1400px'}], position: 750, duration: 0 },
                { id: "eid329", tween: [ "style", "${_ss_walkW_2}", "left", '-1960px', { fromValue: '-1680px'}], position: 875, duration: 0 }            ]
        }
    }
},
"C_walkW_3": {
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
                    id: 'ss_walkW_3',
                    type: 'image',
                    rect: ['0', '0', '2240px', '453px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_walkW_3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_walkW_3}": [
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '453px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '280px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid330", tween: [ "style", "${_ss_walkW_3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid331", tween: [ "style", "${_ss_walkW_3}", "left", '-280px', { fromValue: '0px'}], position: 125, duration: 0 },
                { id: "eid332", tween: [ "style", "${_ss_walkW_3}", "left", '-560px', { fromValue: '-280px'}], position: 250, duration: 0 },
                { id: "eid333", tween: [ "style", "${_ss_walkW_3}", "left", '-840px', { fromValue: '-560px'}], position: 375, duration: 0 },
                { id: "eid334", tween: [ "style", "${_ss_walkW_3}", "left", '-1120px', { fromValue: '-840px'}], position: 500, duration: 0 },
                { id: "eid335", tween: [ "style", "${_ss_walkW_3}", "left", '-1400px', { fromValue: '-1120px'}], position: 625, duration: 0 },
                { id: "eid336", tween: [ "style", "${_ss_walkW_3}", "left", '-1680px', { fromValue: '-1400px'}], position: 750, duration: 0 },
                { id: "eid337", tween: [ "style", "${_ss_walkW_3}", "left", '-1960px', { fromValue: '-1680px'}], position: 875, duration: 0 }            ]
        }
    }
},
"C_walkM_5": {
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
                    id: 'ss_walkM_32',
                    type: 'image',
                    rect: ['0', '0', '1600px', '473px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_walkM_3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_walkM_32}": [
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '473px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid314", tween: [ "style", "${_ss_walkM_32}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "style", "${_ss_walkM_32}", "left", '-200px', { fromValue: '0px'}], position: 125, duration: 0 },
                { id: "eid316", tween: [ "style", "${_ss_walkM_32}", "left", '-400px', { fromValue: '-200px'}], position: 250, duration: 0 },
                { id: "eid317", tween: [ "style", "${_ss_walkM_32}", "left", '-600px', { fromValue: '-400px'}], position: 375, duration: 0 },
                { id: "eid318", tween: [ "style", "${_ss_walkM_32}", "left", '-800px', { fromValue: '-600px'}], position: 500, duration: 0 },
                { id: "eid319", tween: [ "style", "${_ss_walkM_32}", "left", '-1000px', { fromValue: '-800px'}], position: 625, duration: 0 },
                { id: "eid320", tween: [ "style", "${_ss_walkM_32}", "left", '-1200px', { fromValue: '-1000px'}], position: 750, duration: 0 },
                { id: "eid321", tween: [ "style", "${_ss_walkM_32}", "left", '-1400px', { fromValue: '-1200px'}], position: 875, duration: 0 }            ]
        }
    }
},
"BusStopWalkers": {
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
                    id: 'C_walkW_3',
                    type: 'rect',
                    rect: ['1172px', '200px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['1314px', '220px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'C_walkM_42'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['1314px', '220px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'C_walkM_42Copy'
                },
                {
                    id: 'lanternRow',
                    type: 'rect',
                    rect: ['656px', '316px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BG_BusStop',
                    type: 'image',
                    rect: ['-920px', '0px', '1296px', '596px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_BusStop.png', '0px', '0px']
                },
                {
                    id: 'C_waiting12',
                    type: 'rect',
                    rect: ['350px', '440px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'C_waiting32',
                    type: 'rect',
                    rect: ['325px', '496px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'C_waiting22',
                    type: 'rect',
                    rect: ['404px', '394px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'C_walkM_5',
                    type: 'rect',
                    rect: ['215px', '224px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'C_walkW_2',
                    type: 'rect',
                    rect: ['-326', '272', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'C_walkM_42',
                symbolName: 'C_walkM_4',
                autoPlay: {

               }
            },
            {
                id: 'C_walkM_42Copy',
                symbolName: 'C_walkM_4',
                autoPlay: {

               }
            },
            {
                id: 'C_waiting22',
                symbolName: 'C_waiting2',
                autoPlay: {

               }
            },
            {
                id: 'C_walkW_2',
                symbolName: 'C_walkW_2',
                autoPlay: {

               }
            },
            {
                id: 'C_walkW_3',
                symbolName: 'C_walkW_3',
                autoPlay: {

               }
            },
            {
                id: 'C_walkM_5',
                symbolName: 'C_walkM_5',
                autoPlay: {

               }
            },
            {
                id: 'C_waiting32',
                symbolName: 'C_waiting3',
                autoPlay: {

               }
            },
            {
                id: 'lanternRow',
                symbolName: 'lanternRow',
                autoPlay: {

               }
            },
            {
                id: 'C_waiting12',
                symbolName: 'C_waiting1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_C_walkW_3}": [
                ["style", "top", '109px'],
                ["transform", "scaleY", '0.34'],
                ["transform", "scaleX", '-0.34'],
                ["style", "opacity", '0.8'],
                ["style", "left", '579px']
            ],
            "${_lanternRow}": [
                ["style", "left", '-1148px'],
                ["style", "top", '-96px']
            ],
            "${_C_walkM_5}": [
                ["style", "top", '93px'],
                ["transform", "scaleY", '0.54962'],
                ["transform", "scaleX", '-0.54962'],
                ["style", "opacity", '0.85'],
                ["style", "left", '1027px']
            ],
            "${_C_waiting12}": [
                ["style", "top", '-44px'],
                ["style", "left", '318px'],
                ["transform", "scaleY", '0.36253'],
                ["transform", "scaleX", '0.36253']
            ],
            "${_C_waiting22}": [
                ["style", "top", '53px'],
                ["transform", "scaleX", '0.63193'],
                ["transform", "scaleY", '0.63193'],
                ["style", "left", '654px']
            ],
            "${_C_walkM_42Copy}": [
                ["style", "top", '103px'],
                ["transform", "scaleY", '0.38'],
                ["transform", "scaleX", '-0.38'],
                ["style", "opacity", '0.8'],
                ["style", "left", '1396px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '596px'],
                ["style", "width", '1296px']
            ],
            "${_C_walkW_2}": [
                ["style", "top", '119px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0.85'],
                ["style", "left", '-75px']
            ],
            "${_C_waiting32}": [
                ["style", "top", '118px'],
                ["style", "left", '652px'],
                ["transform", "scaleY", '0.48864'],
                ["transform", "scaleX", '0.48864']
            ],
            "${_C_walkM_42}": [
                ["style", "top", '103px'],
                ["transform", "scaleY", '0.38'],
                ["transform", "scaleX", '-0.38'],
                ["style", "opacity", '0.8'],
                ["style", "left", '1397px'],
                ["style", "display", 'block']
            ],
            "${_BG_BusStop}": [
                ["style", "height", '596px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1296px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 37000,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid425", tween: [ "style", "${_C_walkW_2}", "opacity", '0.85', { fromValue: '0.85'}], position: 37000, duration: 0 },
                { id: "eid401", tween: [ "style", "${_C_walkM_42}", "opacity", '0.8', { fromValue: '0.8'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid474", tween: [ "style", "${_C_walkM_42}", "display", 'none', { fromValue: 'block'}], position: 22769, duration: 0 },
                { id: "eid475", tween: [ "style", "${_C_walkM_42Copy}", "display", 'block', { fromValue: 'none'}], position: 14231, duration: 0 },
                { id: "eid420", tween: [ "transform", "${_C_walkW_2}", "scaleY", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
                { id: "eid409", tween: [ "transform", "${_C_walkW_3}", "scaleX", '-0.34', { fromValue: '-0.34'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid378", tween: [ "style", "${_C_walkM_42}", "top", '103px', { fromValue: '103px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid527", tween: [ "style", "${_lanternRow}", "top", '-96px', { fromValue: '-96px'}], position: 9000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid446", tween: [ "style", "${_C_walkW_2}", "left", '1482px', { fromValue: '-75px'}], position: 0, duration: 19000 },
                { id: "eid448", tween: [ "style", "${_C_walkW_2}", "left", '-75px', { fromValue: '-1550px'}], position: 20000, duration: 17000 },
                { id: "eid526", tween: [ "style", "${_lanternRow}", "left", '-1148px', { fromValue: '-1148px'}], position: 9000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid376", tween: [ "transform", "${_C_walkM_42}", "scaleY", '0.38', { fromValue: '0.38'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid422", tween: [ "style", "${_C_walkW_2}", "top", '119px', { fromValue: '119px'}], position: 0, duration: 0 },
                { id: "eid426", tween: [ "style", "${_C_walkW_3}", "opacity", '0.8', { fromValue: '0.8'}], position: 37000, duration: 0 },
                { id: "eid430", tween: [ "style", "${_C_walkM_42Copy}", "opacity", '0.8', { fromValue: '0.8'}], position: 14231, duration: 0, easing: "easeInOutQuad" },
                { id: "eid393", tween: [ "style", "${_C_walkM_5}", "top", '93px', { fromValue: '93px'}], position: 0, duration: 0 },
                { id: "eid410", tween: [ "transform", "${_C_walkW_3}", "scaleY", '0.34', { fromValue: '0.34'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid395", tween: [ "transform", "${_C_walkM_5}", "scaleX", '-0.54962', { fromValue: '-0.54962'}], position: 0, duration: 0 },
                { id: "eid476", tween: [ "style", "${_C_walkW_3}", "left", '-947px', { fromValue: '579px'}], position: 0, duration: 24000 },
                { id: "eid473", tween: [ "style", "${_C_walkW_3}", "left", '579px', { fromValue: '1192px'}], position: 25000, duration: 12000 },
                { id: "eid402", tween: [ "style", "${_C_walkM_5}", "opacity", '0.85', { fromValue: '0.85'}], position: 0, duration: 0 },
                { id: "eid583", tween: [ "style", "${_C_waiting22}", "left", '654px', { fromValue: '654px'}], position: 0, duration: 0 },
                { id: "eid428", tween: [ "transform", "${_C_walkM_42Copy}", "scaleY", '0.38', { fromValue: '0.38'}], position: 14231, duration: 0, easing: "easeInOutQuad" },
                { id: "eid421", tween: [ "transform", "${_C_walkW_2}", "scaleX", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
                { id: "eid579", tween: [ "style", "${_C_waiting12}", "left", '318px', { fromValue: '318px'}], position: 0, duration: 0 },
                { id: "eid390", tween: [ "transform", "${_C_walkM_5}", "scaleY", '0.54962', { fromValue: '0.54962'}], position: 0, duration: 0 },
                { id: "eid445", tween: [ "style", "${_C_walkW_3}", "top", '109px', { fromValue: '109px'}], position: 0, duration: 0 },
                { id: "eid584", tween: [ "style", "${_C_waiting22}", "top", '53px', { fromValue: '53px'}], position: 0, duration: 0 },
                { id: "eid380", tween: [ "style", "${_C_walkM_42}", "left", '-844px', { fromValue: '1397px'}], position: 0, duration: 22769 },
                { id: "eid449", tween: [ "style", "${_C_walkM_5}", "left", '1251px', { fromValue: '1027px'}], position: 0, duration: 3000 },
                { id: "eid451", tween: [ "style", "${_C_walkM_5}", "left", '1027px', { fromValue: '-1510px'}], position: 4000, duration: 33000 },
                { id: "eid581", tween: [ "style", "${_C_waiting32}", "left", '652px', { fromValue: '652px'}], position: 0, duration: 0 },
                { id: "eid429", tween: [ "transform", "${_C_walkM_42Copy}", "scaleX", '-0.38', { fromValue: '-0.38'}], position: 14231, duration: 0, easing: "easeInOutQuad" },
                { id: "eid580", tween: [ "style", "${_C_waiting12}", "top", '-44px', { fromValue: '-44px'}], position: 0, duration: 0 },
                { id: "eid427", tween: [ "style", "${_C_walkM_42Copy}", "top", '103px', { fromValue: '103px'}], position: 14231, duration: 0, easing: "easeInOutQuad" },
                { id: "eid375", tween: [ "transform", "${_C_walkM_42}", "scaleX", '-0.38', { fromValue: '-0.38'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid468", tween: [ "style", "${_C_walkM_42Copy}", "left", '-852px', { fromValue: '1396px'}], position: 14231, duration: 22769 },
                { id: "eid454", tween: [ "style", "${_C_walkM_42Copy}", "left", '-843px', { fromValue: '1396px'}], position: 37000, duration: 0 },
                { id: "eid582", tween: [ "style", "${_C_waiting32}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_H_walk2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_H_walk3}": [
                ["style", "left", '-936px'],
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
            duration: 866,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid1027", tween: [ "style", "${_ss_H_walk3}", "left", '-1266px', { fromValue: '-936px'}], position: 0, duration: 0 },
                { id: "eid1028", tween: [ "style", "${_ss_H_walk3}", "left", '-1594px', { fromValue: '-1258px'}], position: 66, duration: 0 },
                { id: "eid1029", tween: [ "style", "${_ss_H_walk3}", "left", '-1909px', { fromValue: '-1594px'}], position: 133, duration: 0 },
                { id: "eid1030", tween: [ "style", "${_ss_H_walk3}", "left", '-2234px', { fromValue: '-1920px'}], position: 200, duration: 0 },
                { id: "eid1031", tween: [ "style", "${_ss_H_walk3}", "left", '-2549px', { fromValue: '-2231px'}], position: 266, duration: 0 },
                { id: "eid1037", tween: [ "style", "${_ss_H_walk3}", "left", '-2234px', { fromValue: '-2546px'}], position: 400, duration: 0 },
                { id: "eid1038", tween: [ "style", "${_ss_H_walk3}", "left", '-1909px', { fromValue: '-2231px'}], position: 466, duration: 0 },
                { id: "eid1039", tween: [ "style", "${_ss_H_walk3}", "left", '-1593px', { fromValue: '-1909px'}], position: 533, duration: 0 },
                { id: "eid1040", tween: [ "style", "${_ss_H_walk3}", "left", '-1272px', { fromValue: '-1593px'}], position: 600, duration: 0 },
                { id: "eid1041", tween: [ "style", "${_ss_H_walk3}", "left", '-951px', { fromValue: '-1266px'}], position: 666, duration: 0 },
                { id: "eid1042", tween: [ "style", "${_ss_H_walk3}", "left", '-640px', { fromValue: '-951px'}], position: 733, duration: 0 },
                { id: "eid1043", tween: [ "style", "${_ss_H_walk3}", "left", '-308px', { fromValue: '-642px'}], position: 800, duration: 0 },
                { id: "eid1036", tween: [ "style", "${_ss_H_walk3}", "top", '-500px', { fromValue: '0px'}], position: 333, duration: 0 }            ]
        }
    }
},
"FG_Hwalk": {
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
                    id: 'BG_0',
                    rect: ['-1879px', '-80px', '4096px', '567px', 'auto', 'auto'],
                    clip: ['rect(70.83349609375px 4096px 567px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/BG_0.png', '0px', '0px']
                },
                {
                    id: 'H_walkCopy',
                    type: 'rect',
                    rect: ['1065px', '-121px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'H_walkCopy2',
                    type: 'rect',
                    rect: ['1065px', '-121px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'H_standingBack',
                    type: 'image',
                    rect: ['2753px', '-375px', '264px', '731px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/H_standingBack.png', '0px', '0px']
                },
                {
                    id: 'H_walk',
                    type: 'rect',
                    rect: ['1065', '-121', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'H_walk',
                symbolName: 'H_walk',
                autoPlay: {

               }
            },
            {
                id: 'H_walkCopy2',
                symbolName: 'H_walk',
                autoPlay: {

               }
            },
            {
                id: 'H_walkCopy',
                symbolName: 'H_walk',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_H_walkCopy2}": [
                ["transform", "scaleX", '-0.85'],
                ["style", "left", '1991px'],
                ["transform", "scaleY", '0.9'],
                ["style", "top", '-156px']
            ],
            "${symbolSelector}": [
                ["style", "height", '567px'],
                ["style", "width", '4096px']
            ],
            "${_H_walkCopy}": [
                ["transform", "scaleX", '0.75'],
                ["style", "top", '-258px'],
                ["transform", "scaleY", '0.75'],
                ["style", "left", '-1376px']
            ],
            "${_H_walk}": [
                ["style", "left", '-239px'],
                ["style", "top", '-81px']
            ],
            "${_BG_0}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [70.83349609375,4096,567,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_H_standingBack}": [
                ["style", "height", '731px'],
                ["style", "top", '-375px'],
                ["style", "left", '2753px'],
                ["style", "width", '264px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25000,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid492", tween: [ "transform", "${_H_walkCopy}", "scaleX", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
                { id: "eid590", tween: [ "style", "${_H_walkCopy}", "top", '-251px', { fromValue: '-258px'}], position: 0, duration: 0 },
                { id: "eid589", tween: [ "style", "${_H_walkCopy}", "left", '4073px', { fromValue: '-1376px'}], position: 0, duration: 25000 },
                { id: "eid502", tween: [ "transform", "${_H_walkCopy2}", "scaleX", '-0.85', { fromValue: '-0.85'}], position: 0, duration: 0 },
                { id: "eid522", tween: [ "style", "${_H_walkCopy2}", "top", '-196px', { fromValue: '-156px'}], position: 0, duration: 0 },
                { id: "eid520", tween: [ "style", "${_H_walk}", "top", '-81px', { fromValue: '-81px'}], position: 0, duration: 0 },
                { id: "eid494", tween: [ "style", "${_H_walk}", "left", '4096px', { fromValue: '-239px'}], position: 0, duration: 18333 },
                { id: "eid497", tween: [ "style", "${_H_walk}", "left", '-239px', { fromValue: '-1815px'}], position: 18472, duration: 6528 },
                { id: "eid514", tween: [ "style", "${_H_walkCopy2}", "left", '-1580px', { fromValue: '1991px'}], position: 0, duration: 15712 },
                { id: "eid515", tween: [ "style", "${_H_walkCopy2}", "left", '1991px', { fromValue: '4102px'}], position: 15932, duration: 9068 },
                { id: "eid507", tween: [ "transform", "${_H_walkCopy2}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid493", tween: [ "transform", "${_H_walkCopy}", "scaleY", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 }            ]
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
                ["style", "opacity", '1'],
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
            timeline: [
                { id: "eid1550", tween: [ "style", "${_dust_icon2}", "top", '-7px', { fromValue: '-7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" },
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
                    fill: ['rgba(0,0,0,0)', 'images/dust_icon2.png', '0px', '0px']
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
"C_waiting1": {
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
                    id: 'C_waiting3',
                    type: 'image',
                    rect: ['0px', '0px', '1600px', '742px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/C_waiting3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_C_waiting3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '742px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '400px']
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
                { id: "eid551", tween: [ "style", "${_C_waiting3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid552", tween: [ "style", "${_C_waiting3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid553", tween: [ "style", "${_C_waiting3}", "left", '-400px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid554", tween: [ "style", "${_C_waiting3}", "left", '-800px', { fromValue: '-400px'}], position: 133, duration: 0 }            ]
        }
    }
},
"C_waiting2": {
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
                    id: 'C_waiting2',
                    type: 'image',
                    rect: ['0px', '0px', '800px', '514px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/C_waiting2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_C_waiting2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '514px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '200px']
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
                { id: "eid559", tween: [ "style", "${_C_waiting2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid561", tween: [ "style", "${_C_waiting2}", "left", '-206px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid563", tween: [ "style", "${_C_waiting2}", "left", '-403px', { fromValue: '-206px'}], position: 133, duration: 0 },
                { id: "eid560", tween: [ "style", "${_C_waiting2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid562", tween: [ "style", "${_C_waiting2}", "top", '7px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid564", tween: [ "style", "${_C_waiting2}", "top", '12px', { fromValue: '3px'}], position: 133, duration: 0 }            ]
        }
    }
},
"C_waiting3": {
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
                    id: 'C_waiting1',
                    type: 'image',
                    rect: ['0px', '0px', '990px', '440px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/C_waiting1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_C_waiting1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '440px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '330px']
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
                { id: "eid570", tween: [ "style", "${_C_waiting1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid569", tween: [ "style", "${_C_waiting1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid571", tween: [ "style", "${_C_waiting1}", "left", '-316px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid572", tween: [ "style", "${_C_waiting1}", "left", '-646px', { fromValue: '-326px'}], position: 133, duration: 0 }            ]
        }
    }
},
"dustButton": {
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
        },
    states: {
        "Base State": {
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
            duration: 10000,
            autoPlay: false,
            timeline: [
            ]
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
                    id: 'bText_8',
                    type: 'image',
                    rect: ['6px', '-1px', '1473px', '98px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_8.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bText_8}": [
                ["style", "top", '-1px'],
                ["style", "height", '98px'],
                ["style", "opacity", '0'],
                ["style", "left", '6px'],
                ["style", "width", '1473px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1480px']
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
                { id: "eid750", tween: [ "style", "${_bText_8}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid751", tween: [ "style", "${_bText_8}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid752", tween: [ "style", "${_bText_8}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid753", tween: [ "style", "${_bText_8}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid754", tween: [ "style", "${_bText_8}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid755", tween: [ "style", "${_bText_8}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid756", tween: [ "style", "${_bText_8}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid757", tween: [ "style", "${_bText_8}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid758", tween: [ "style", "${_bText_8}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid759", tween: [ "style", "${_bText_8}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid760", tween: [ "style", "${_bText_8}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid761", tween: [ "style", "${_bText_8}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid762", tween: [ "style", "${_bText_8}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid763", tween: [ "style", "${_bText_8}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid764", tween: [ "style", "${_bText_8}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid765", tween: [ "style", "${_bText_8}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid766", tween: [ "style", "${_bText_8}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid767", tween: [ "style", "${_bText_8}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid768", tween: [ "style", "${_bText_8}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid769", tween: [ "style", "${_bText_8}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid770", tween: [ "style", "${_bText_8}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid771", tween: [ "style", "${_bText_8}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
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
})(jQuery, AdobeEdge, "SCENE_B");
