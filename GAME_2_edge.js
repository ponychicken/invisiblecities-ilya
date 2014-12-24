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
                rect: ['0', '0px','2048px','1535px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
            },
            {
                id: 'BG_curb',
                type: 'image',
                rect: ['-322px', '1186px','2938px','269px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_curb.png",'0px','0px']
            },
            {
                id: 'BG_BusStop',
                type: 'image',
                rect: ['168px', '143px','1612px','741px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_BusStop.png",'0px','0px'],
                transform: [[],[],[],['1.5','1.5']]
            },
            {
                id: 'Game_C3',
                type: 'rect',
                rect: ['786', '670','auto','auto','auto', 'auto']
            },
            {
                id: 'GameRun12',
                type: 'rect',
                rect: ['-264px', '265px','auto','auto','auto', 'auto']
            },
            {
                id: 'Game_C1',
                type: 'rect',
                rect: ['1308px', '961px','auto','auto','auto', 'auto']
            },
            {
                id: 'BG_lantern',
                type: 'image',
                rect: ['1775px', '6px','214px','1524px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
            },
            {
                id: 'BG_lanternCopy',
                type: 'image',
                rect: ['101px', '0px','214px','1524px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
            },
            {
                id: 'figureBackHead',
                type: 'image',
                rect: ['46px', '640px','637px','955px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Game_1/figureBackHead.png",'0px','0px']
            },
            {
                id: 'bagDrag',
                type: 'rect',
                rect: ['270', '838','auto','auto','auto', 'auto']
            },
            {
                id: 'figureBack',
                type: 'image',
                rect: ['46px', '1046px','637px','549px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Game_1/figureBack.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                display: 'block',
                type: 'rect',
                rect: ['0px', '0px','2048px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [
            {
                id: 'GameRun12',
                symbolName: 'Game_C2',
                autoPlay: {

                }
            },
            {
                id: 'bagDrag',
                symbolName: 'bagDrag',
                autoPlay: {

                }
            },
            {
                id: 'Game_C3',
                symbolName: 'Game_C3',
                autoPlay: {

                }
            },
            {
                id: 'Game_C1',
                symbolName: 'Game_C1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Game_C1}": [
                ["style", "top", '702px'],
                ["transform", "scaleX", '0.54316'],
                ["style", "left", '1096px'],
                ["transform", "scaleY", '0.54316']
            ],
            "${_BG_BusStop}": [
                ["style", "top", '143px'],
                ["transform", "scaleX", '1.5'],
                ["transform", "scaleY", '1.5'],
                ["style", "left", '168px']
            ],
            "${_figureBack}": [
                ["style", "top", '1046px'],
                ["style", "left", '46px']
            ],
            "${_BG_curb}": [
                ["style", "left", '-322px'],
                ["style", "top", '1186px']
            ],
            "${_GameRun12}": [
                ["transform", "scaleX", '0.88288'],
                ["style", "top", '332px'],
                ["style", "left", '6px'],
                ["transform", "scaleY", '0.88288']
            ],
            "${_figureBackHead}": [
                ["style", "top", '640px'],
                ["style", "left", '46px']
            ],
            "${_BG_lantern}": [
                ["style", "top", '6px'],
                ["style", "left", '1775px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "display", 'block']
            ],
            "${_BG_lanternCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '101px']
            ],
            "${_Game_C3}": [
                ["style", "top", '350px'],
                ["style", "left", '1154px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11366,
            autoPlay: true,
            labels: {
                "off": 8067
            },
            timeline: [
                { id: "eid224", tween: [ "style", "${_Game_C1}", "top", '262px', { fromValue: '702px'}], position: 0, duration: 0 },
                { id: "eid228", tween: [ "style", "${_GameRun12}", "top", '376px', { fromValue: '332px'}], position: 0, duration: 0 },
                { id: "eid223", tween: [ "style", "${_Game_C1}", "left", '1408px', { fromValue: '1096px'}], position: 0, duration: 0 },
                { id: "eid225", tween: [ "style", "${_Game_C3}", "top", '350px', { fromValue: '350px'}], position: 0, duration: 0 },
                { id: "eid206", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid205", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 9863, duration: 1503 },
                { id: "eid107", tween: [ "transform", "${_Game_C1}", "scaleX", '0.54316', { fromValue: '0.54316'}], position: 0, duration: 0 },
                { id: "eid226", tween: [ "style", "${_Game_C3}", "left", '1154px', { fromValue: '1154px'}], position: 0, duration: 0 },
                { id: "eid227", tween: [ "style", "${_GameRun12}", "left", '563px', { fromValue: '6px'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "transform", "${_Game_C1}", "scaleY", '0.54316', { fromValue: '0.54316'}], position: 0, duration: 0 },
                { id: "eid207", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid200", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 9863, duration: 0 },
                { id: "eid229", tween: [ "transform", "${_GameRun12}", "scaleX", '0.88288', { fromValue: '0.88288'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "transform", "${_GameRun12}", "scaleY", '0.88288', { fromValue: '0.88288'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/C_waiting32.png', '0px', '0px']
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
                ["style", "width", '400px'],
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
                { id: "eid552", tween: [ "style", "${_C_waiting3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid553", tween: [ "style", "${_C_waiting3}", "left", '-400px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid554", tween: [ "style", "${_C_waiting3}", "left", '-800px', { fromValue: '-400px'}], position: 133, duration: 0 },
                { id: "eid551", tween: [ "style", "${_C_waiting3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/C_waiting12.png', '0px', '0px']
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
                ["style", "width", '330px'],
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
                { id: "eid569", tween: [ "style", "${_C_waiting1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid571", tween: [ "style", "${_C_waiting1}", "left", '-316px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid572", tween: [ "style", "${_C_waiting1}", "left", '-646px', { fromValue: '-326px'}], position: 133, duration: 0 },
                { id: "eid570", tween: [ "style", "${_C_waiting1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/C_waiting22.png', '0px', '0px']
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
                ["style", "width", '200px'],
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
                { id: "eid559", tween: [ "style", "${_C_waiting2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid561", tween: [ "style", "${_C_waiting2}", "left", '-206px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid563", tween: [ "style", "${_C_waiting2}", "left", '-403px', { fromValue: '-206px'}], position: 133, duration: 0 },
                { id: "eid560", tween: [ "style", "${_C_waiting2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid562", tween: [ "style", "${_C_waiting2}", "top", '7px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid564", tween: [ "style", "${_C_waiting2}", "top", '12px', { fromValue: '3px'}], position: 133, duration: 0 }            ]
        }
    }
},
"Game_C2": {
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
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'GameRun22'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['-6px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_C_back3'
                },
                {
                    rect: ['0px', '0px', '990px', '440px', 'auto', 'auto'],
                    id: 'C_waiting1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/C_waiting12.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-6', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_C_front3'
                }
            ],
            symbolInstances: [
            {
                id: 'bagUp_C_front3',
                symbolName: 'bagUp_C_front',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_C_back3',
                symbolName: 'bagUp_C_back',
                autoPlay: {

               }
            },
            {
                id: 'GameRun22',
                symbolName: 'GameRun2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_GameRun22}": [
                ["style", "display", 'none'],
                ["style", "left", '7px'],
                ["style", "top", '-6px']
            ],
            "${symbolSelector}": [
                ["style", "height", '444px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '330px']
            ],
            "${_bagUp_C_back3}": [
                ["style", "top", '-35px'],
                ["transform", "scaleY", '0.83165'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '1'],
                ["style", "left", '61px'],
                ["style", "display", 'block']
            ],
            "${_C_waiting1}": [
                ["style", "top", '3px'],
                ["style", "clip", [0,324.2109375,440,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1px'],
                ["style", "display", 'block']
            ],
            "${_bagUp_C_front3}": [
                ["style", "top", '-35px'],
                ["transform", "scaleY", '0.83165'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '1'],
                ["style", "left", '61px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4800,
            autoPlay: true,
            labels: {
                "wait": 0,
                "bagUp": 400,
                "disappear": 1000,
                "run": 3067
            },
            timeline: [
                { id: "eid312", tween: [ "style", "${_bagUp_C_front3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid313", tween: [ "style", "${_bagUp_C_front3}", "display", 'block', { fromValue: 'none'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid314", tween: [ "style", "${_bagUp_C_front3}", "display", 'none', { fromValue: 'block'}], position: 1733, duration: 0, easing: "easeInOutQuad" },
                { id: "eid356", tween: [ "style", "${_bagUp_C_back3}", "display", 'none', { fromValue: 'block'}], position: 703, duration: 0, easing: "easeInOutQuad" },
                { id: "eid150", tween: [ "style", "${_C_waiting1}", "clip", [0,324.2109375,440,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,324.2109375,440,0]}], position: 0, duration: 0 },
                { id: "eid151", tween: [ "style", "${_C_waiting1}", "clip", [0,640,440,313.158203125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,324.2109375,440,0]}], position: 67, duration: 0 },
                { id: "eid152", tween: [ "style", "${_C_waiting1}", "clip", [0,1003.158203125,440,647.3681640625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,440,313.158203125]}], position: 133, duration: 0 },
                { id: "eid335", tween: [ "style", "${_bagUp_C_back3}", "left", '61px', { fromValue: '61px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid209", tween: [ "style", "${_C_waiting1}", "display", 'none', { fromValue: 'block'}], position: 703, duration: 0 },
                { id: "eid148", tween: [ "style", "${_C_waiting1}", "display", 'none', { fromValue: 'none'}], position: 3067, duration: 0 },
                { id: "eid130", tween: [ "style", "${_GameRun22}", "left", '2823px', { fromValue: '7px'}], position: 3067, duration: 1733 },
                { id: "eid347", tween: [ "style", "${_bagUp_C_front3}", "top", '-35px', { fromValue: '-35px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid351", tween: [ "style", "${_bagUp_C_front3}", "top", '135px', { fromValue: '-35px'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid146", tween: [ "style", "${_C_waiting1}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid349", tween: [ "style", "${_bagUp_C_front3}", "left", '61px', { fromValue: '61px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid353", tween: [ "style", "${_bagUp_C_front3}", "left", '59px', { fromValue: '61px'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid348", tween: [ "transform", "${_bagUp_C_front3}", "scaleY", '0.83165', { fromValue: '0.83165'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid352", tween: [ "transform", "${_bagUp_C_front3}", "scaleY", '0.04987', { fromValue: '0.83165'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid336", tween: [ "style", "${_bagUp_C_back3}", "top", '-35px', { fromValue: '-35px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid123", tween: [ "style", "${_GameRun22}", "top", '-6px', { fromValue: '-6px'}], position: 3067, duration: 0 },
                { id: "eid316", tween: [ "style", "${_bagUp_C_front3}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid324", tween: [ "style", "${_bagUp_C_back3}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid155", tween: [ "style", "${_C_waiting1}", "left", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid156", tween: [ "style", "${_C_waiting1}", "left", '-316px', { fromValue: '1px'}], position: 67, duration: 0 },
                { id: "eid140", tween: [ "style", "${_C_waiting1}", "left", '-646px', { fromValue: '-316px'}], position: 133, duration: 0 },
                { id: "eid332", tween: [ "transform", "${_bagUp_C_back3}", "scaleY", '0.83165', { fromValue: '0.83165'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid210", tween: [ "style", "${_GameRun22}", "display", 'none', { fromValue: 'none'}], position: 933, duration: 0 },
                { id: "eid117", tween: [ "style", "${_GameRun22}", "display", 'block', { fromValue: 'none'}], position: 3067, duration: 0 },
                { id: "eid350", tween: [ "transform", "${_bagUp_C_front3}", "scaleX", '0.9', { fromValue: '0.9'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid354", tween: [ "transform", "${_bagUp_C_front3}", "scaleX", '0.05396', { fromValue: '0.9'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid331", tween: [ "transform", "${_bagUp_C_back3}", "scaleX", '0.9', { fromValue: '0.9'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid357", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_bagUp_C_front3}', [] ], ""], position: 0 },
                { id: "eid358", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_bagUp_C_back3}', [] ], ""], position: 0 },
                { id: "eid131", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_GameRun22}', [] ], ""], position: 0 },
                { id: "eid359", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_C_front3}', [] ], ""], position: 400 },
                { id: "eid360", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_C_back3}', [] ], ""], position: 400 },
                { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_GameRun22}', [0] ], ""], position: 3067 }            ]
        }
    }
},
"Game_C1": {
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
                    rect: ['-16', '17', 'auto', 'auto', 'auto', 'auto'],
                    id: 'GameRun3'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['-6px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_C_back3'
                },
                {
                    rect: ['0px', '0px', '1600px', '742px', 'auto', 'auto'],
                    id: 'C_waiting3Copy2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/C_waiting32.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-6', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_C_front3'
                }
            ],
            symbolInstances: [
            {
                id: 'bagUp_C_front3',
                symbolName: 'bagUp_C_front',
                autoPlay: {

               }
            },
            {
                id: 'GameRun3',
                symbolName: 'GameRun3',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_C_back3',
                symbolName: 'bagUp_C_back',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_C_waiting3Copy2}": [
                ["style", "display", 'block'],
                ["style", "left", '30px'],
                ["style", "clip", [0,432.2578125,742,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '689px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '475px']
            ],
            "${_bagUp_C_back3}": [
                ["style", "top", '115px'],
                ["transform", "scaleY", '1.21667'],
                ["transform", "scaleX", '1.31667'],
                ["style", "opacity", '1'],
                ["style", "left", '106px'],
                ["style", "display", 'block']
            ],
            "${_bagUp_C_front3}": [
                ["style", "top", '115px'],
                ["transform", "scaleY", '1.21667'],
                ["transform", "scaleX", '1.31667'],
                ["style", "opacity", '1'],
                ["style", "left", '106px'],
                ["style", "display", 'none']
            ],
            "${_GameRun3}": [
                ["style", "display", 'none'],
                ["style", "left", '-16px'],
                ["style", "top", '-5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3766,
            autoPlay: true,
            labels: {
                "wait": 0,
                "bagUp": 400,
                "disappear": 1000,
                "run": 2233
            },
            timeline: [
                { id: "eid285", tween: [ "style", "${_bagUp_C_front3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid283", tween: [ "style", "${_bagUp_C_front3}", "display", 'block', { fromValue: 'none'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid276", tween: [ "style", "${_bagUp_C_front3}", "display", 'none', { fromValue: 'block'}], position: 1502, duration: 0, easing: "easeInOutQuad" },
                { id: "eid275", tween: [ "style", "${_bagUp_C_back3}", "display", 'none', { fromValue: 'block'}], position: 800, duration: 0 },
                { id: "eid212", tween: [ "style", "${_GameRun3}", "display", 'none', { fromValue: 'none'}], position: 400, duration: 0 },
                { id: "eid85", tween: [ "style", "${_GameRun3}", "display", 'block', { fromValue: 'none'}], position: 2300, duration: 0 },
                { id: "eid252", tween: [ "transform", "${_bagUp_C_front3}", "scaleX", '1.31667', { fromValue: '1.31667'}], position: 0, duration: 0 },
                { id: "eid271", tween: [ "transform", "${_bagUp_C_front3}", "scaleX", '0.05396', { fromValue: '1.31667'}], position: 1000, duration: 502, easing: "easeInOutQuad" },
                { id: "eid255", tween: [ "style", "${_bagUp_C_front3}", "top", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
                { id: "eid274", tween: [ "style", "${_bagUp_C_front3}", "top", '390px', { fromValue: '115px'}], position: 1000, duration: 502, easing: "easeInOutQuad" },
                { id: "eid211", tween: [ "style", "${_C_waiting3Copy2}", "display", 'none', { fromValue: 'block'}], position: 800, duration: 0 },
                { id: "eid65", tween: [ "style", "${_C_waiting3Copy2}", "display", 'none', { fromValue: 'none'}], position: 2300, duration: 0 },
                { id: "eid89", tween: [ "style", "${_C_waiting3Copy2}", "clip", [0,432.2578125,742,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,432.2578125,742,0]}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_C_waiting3Copy2}", "clip", [0,835.484375,742,380.64453125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,432.2578125,742,0]}], position: 67, duration: 0 },
                { id: "eid91", tween: [ "style", "${_C_waiting3Copy2}", "clip", [0,1251.61328125,742,770.966796875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,835.484375,742,380.64453125]}], position: 133, duration: 0 },
                { id: "eid257", tween: [ "style", "${_C_waiting3Copy2}", "clip", [0,1251.61328125,662,770.966796875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1251.61328125,742,770.966796875]}], position: 500, duration: 0 },
                { id: "eid258", tween: [ "style", "${_C_waiting3Copy2}", "clip", [0,1251.61328125,602,770.966796875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1251.61328125,662,770.966796875]}], position: 600, duration: 0 },
                { id: "eid95", tween: [ "style", "${_C_waiting3Copy2}", "clip", [0,1667.7431640625,742,1180.6435546875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1251.61328125,478,770.966796875]}], position: 2233, duration: 0 },
                { id: "eid260", tween: [ "style", "${_bagUp_C_front3}", "left", '101px', { fromValue: '106px'}], position: 0, duration: 0 },
                { id: "eid273", tween: [ "style", "${_bagUp_C_front3}", "left", '109px', { fromValue: '101px'}], position: 1000, duration: 502, easing: "easeInOutQuad" },
                { id: "eid84", tween: [ "style", "${_GameRun3}", "top", '-5px', { fromValue: '-5px'}], position: 2300, duration: 0 },
                { id: "eid248", tween: [ "transform", "${_bagUp_C_back3}", "scaleX", '1.31667', { fromValue: '1.31667'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_C_waiting3Copy2}", "top", '-50px', { fromValue: '-50px'}], position: 0, duration: 0 },
                { id: "eid261", tween: [ "style", "${_bagUp_C_back3}", "left", '101px', { fromValue: '106px'}], position: 0, duration: 0 },
                { id: "eid265", tween: [ "style", "${_bagUp_C_front3}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 502, easing: "easeInOutQuad" },
                { id: "eid96", tween: [ "style", "${_GameRun3}", "left", '-3736px', { fromValue: '-16px'}], position: 2300, duration: 1466 },
                { id: "eid251", tween: [ "style", "${_bagUp_C_back3}", "top", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
                { id: "eid249", tween: [ "transform", "${_bagUp_C_back3}", "scaleY", '1.21667', { fromValue: '1.21667'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_C_waiting3Copy2}", "left", '30px', { fromValue: '30px'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_C_waiting3Copy2}", "left", '-369px', { fromValue: '30px'}], position: 67, duration: 0 },
                { id: "eid60", tween: [ "style", "${_C_waiting3Copy2}", "left", '-769px', { fromValue: '-400px'}], position: 133, duration: 0 },
                { id: "eid63", tween: [ "style", "${_C_waiting3Copy2}", "left", '-1185px', { fromValue: '-769px'}], position: 2233, duration: 0 },
                { id: "eid253", tween: [ "transform", "${_bagUp_C_front3}", "scaleY", '1.21667', { fromValue: '1.21667'}], position: 0, duration: 0 },
                { id: "eid272", tween: [ "transform", "${_bagUp_C_front3}", "scaleY", '0.04987', { fromValue: '1.21667'}], position: 1000, duration: 502, easing: "easeInOutQuad" },
                { id: "eid263", tween: [ "style", "${_bagUp_C_back3}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid97", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_GameRun3}', [] ], ""], position: 0 },
                { id: "eid286", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_bagUp_C_front3}', [] ], ""], position: 0 },
                { id: "eid287", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_bagUp_C_back3}', [] ], ""], position: 0 },
                { id: "eid288", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_C_back3}', [] ], ""], position: 400 },
                { id: "eid289", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_C_front3}', [] ], ""], position: 400 },
                { id: "eid98", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_GameRun3}', [] ], ""], position: 2300.3333333333 }            ]
        }
    }
},
"GameRun3": {
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
                    rect: ['-3326px', '92px', '3800px', '576px', 'auto', 'auto'],
                    id: 'C_run3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/C_run3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_C_run3}": [
                ["style", "top", '92px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '689px'],
                ["style", "width", '475px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 533,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid76", tween: [ "style", "${_C_run3}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_C_run3}", "left", '-513px', { fromValue: '15px'}], position: 67, duration: 0 },
                { id: "eid78", tween: [ "style", "${_C_run3}", "left", '-938px', { fromValue: '-61px'}], position: 133, duration: 0 },
                { id: "eid79", tween: [ "style", "${_C_run3}", "left", '-1435px', { fromValue: '-502px'}], position: 200, duration: 0 },
                { id: "eid80", tween: [ "style", "${_C_run3}", "left", '-1877px', { fromValue: '-992px'}], position: 267, duration: 0 },
                { id: "eid81", tween: [ "style", "${_C_run3}", "left", '-2389px', { fromValue: '-1452px'}], position: 333, duration: 0 },
                { id: "eid82", tween: [ "style", "${_C_run3}", "left", '-2822px', { fromValue: '-1931px'}], position: 400, duration: 0 },
                { id: "eid83", tween: [ "style", "${_C_run3}", "left", '-3326px', { fromValue: '-2390px'}], position: 467, duration: 0 },
                { id: "eid75", tween: [ "style", "${_C_run3}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"GameRun2": {
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
                    id: 'GameRun1',
                    type: 'image',
                    rect: ['-1345px', '0px', '3960px', '444px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/GameRun1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_GameRun1}": [
                ["style", "left", '-990px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '444px'],
                ["style", "width", '330px'],
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
            labels: {
                "loop": 67
            },
            timeline: [
                { id: "eid143", tween: [ "style", "${_GameRun1}", "left", '-990px', { fromValue: '-990px'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_GameRun1}", "left", '-1345px', { fromValue: '-990px'}], position: 67, duration: 0 },
                { id: "eid31", tween: [ "style", "${_GameRun1}", "left", '-1650px', { fromValue: '-1320px'}], position: 133, duration: 0 },
                { id: "eid32", tween: [ "style", "${_GameRun1}", "left", '-1986px', { fromValue: '-1650px'}], position: 200, duration: 0 },
                { id: "eid33", tween: [ "style", "${_GameRun1}", "left", '-2310px', { fromValue: '-1980px'}], position: 267, duration: 0 },
                { id: "eid34", tween: [ "style", "${_GameRun1}", "left", '-2599px', { fromValue: '-2319px'}], position: 333, duration: 0 },
                { id: "eid35", tween: [ "style", "${_GameRun1}", "left", '-2970px', { fromValue: '-2619px'}], position: 400, duration: 0 },
                { id: "eid36", tween: [ "style", "${_GameRun1}", "left", '-3290px', { fromValue: '-2976px'}], position: 467, duration: 0 },
                { id: "eid37", tween: [ "style", "${_GameRun1}", "left", '-3624px', { fromValue: '-3301px'}], position: 533, duration: 0 }            ]
        }
    }
},
"GameRun1": {
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
                    id: 'C_run2',
                    type: 'image',
                    rect: ['0px', '0px', '2520px', '346px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/C_run2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_C_run2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '346px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '280px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 600,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid159", tween: [ "style", "${_C_run2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "style", "${_C_run2}", "left", '-290px', { fromValue: '-280px'}], position: 67, duration: 0 },
                { id: "eid161", tween: [ "style", "${_C_run2}", "left", '-558px', { fromValue: '-290px'}], position: 133, duration: 0 },
                { id: "eid162", tween: [ "style", "${_C_run2}", "left", '-833px', { fromValue: '-558px'}], position: 200, duration: 0 },
                { id: "eid163", tween: [ "style", "${_C_run2}", "left", '-1111px', { fromValue: '-833px'}], position: 267, duration: 0 },
                { id: "eid168", tween: [ "style", "${_C_run2}", "left", '-1400px', { fromValue: '-1111px'}], position: 333, duration: 0 },
                { id: "eid169", tween: [ "style", "${_C_run2}", "left", '-1683px', { fromValue: '-1380px'}], position: 400, duration: 0 },
                { id: "eid166", tween: [ "style", "${_C_run2}", "left", '-1961px', { fromValue: '-1683px'}], position: 467, duration: 0 },
                { id: "eid167", tween: [ "style", "${_C_run2}", "left", '-2240px', { fromValue: '-1961px'}], position: 533, duration: 0 }            ]
        }
    }
},
"Game_C3": {
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
                    rect: ['0', '-6', 'auto', 'auto', 'auto', 'auto'],
                    id: 'GameRun13'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['-6px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_C_back3Copy'
                },
                {
                    rect: ['0px', '0px', '800px', '514px', 'auto', 'auto'],
                    id: 'C_waiting2Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/C_waiting22.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-6', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_C_front3Copy'
                }
            ],
            symbolInstances: [
            {
                id: 'bagUp_C_back3Copy',
                symbolName: 'bagUp_C_back',
                autoPlay: {

               }
            },
            {
                id: 'GameRun13',
                symbolName: 'GameRun1',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_C_front3Copy',
                symbolName: 'bagUp_C_front',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_GameRun13}": [
                ["style", "top", '94px'],
                ["style", "left", '20px'],
                ["style", "display", 'none']
            ],
            "${_bagUp_C_back3Copy}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.74008'],
                ["transform", "scaleX", '0.80089'],
                ["style", "opacity", '1'],
                ["style", "left", '29px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '444px'],
                ["style", "width", '330px'],
                ["style", "overflow", 'visible']
            ],
            "${_bagUp_C_front3Copy}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.74008'],
                ["transform", "scaleX", '0.80089'],
                ["style", "opacity", '1'],
                ["style", "left", '29px'],
                ["style", "display", 'none']
            ],
            "${_C_waiting2Copy}": [
                ["style", "display", 'block'],
                ["style", "left", '50px'],
                ["style", "clip", [0,221.875,514,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-43px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3267,
            autoPlay: true,
            labels: {
                "wait": 0,
                "bagUp": 400,
                "disappear": 1000,
                "run": 2001
            },
            timeline: [
                { id: "eid186", tween: [ "style", "${_C_waiting2Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid213", tween: [ "style", "${_C_waiting2Copy}", "display", 'none', { fromValue: 'block'}], position: 733, duration: 0 },
                { id: "eid180", tween: [ "style", "${_C_waiting2Copy}", "display", 'none', { fromValue: 'none'}], position: 2067, duration: 0 },
                { id: "eid368", tween: [ "style", "${_bagUp_C_front3Copy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid193", tween: [ "style", "${_GameRun13}", "left", '2005px', { fromValue: '20px'}], position: 2067, duration: 1200 },
                { id: "eid381", tween: [ "style", "${_bagUp_C_back3Copy}", "left", '29px', { fromValue: '29px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid365", tween: [ "style", "${_bagUp_C_front3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid366", tween: [ "style", "${_bagUp_C_front3Copy}", "display", 'block', { fromValue: 'none'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid367", tween: [ "style", "${_bagUp_C_front3Copy}", "display", 'none', { fromValue: 'block'}], position: 1467, duration: 0, easing: "easeInOutQuad" },
                { id: "eid376", tween: [ "style", "${_bagUp_C_back3Copy}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid371", tween: [ "transform", "${_bagUp_C_front3Copy}", "scaleX", '0.80089', { fromValue: '0.80089'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid390", tween: [ "transform", "${_bagUp_C_front3Copy}", "scaleX", '0.05396', { fromValue: '0.80089'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid369", tween: [ "style", "${_bagUp_C_front3Copy}", "left", '29px', { fromValue: '29px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid388", tween: [ "style", "${_bagUp_C_front3Copy}", "left", '39px', { fromValue: '29px'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid175", tween: [ "style", "${_C_waiting2Copy}", "top", '-43px', { fromValue: '-43px'}], position: 0, duration: 0 },
                { id: "eid176", tween: [ "style", "${_C_waiting2Copy}", "top", '-37px', { fromValue: '-43px'}], position: 67, duration: 0 },
                { id: "eid177", tween: [ "style", "${_C_waiting2Copy}", "top", '-34px', { fromValue: '7px'}], position: 133, duration: 0 },
                { id: "eid379", tween: [ "style", "${_bagUp_C_back3Copy}", "top", '-11px', { fromValue: '-11px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid361", tween: [ "style", "${_bagUp_C_front3Copy}", "top", '-11px', { fromValue: '-11px'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid389", tween: [ "style", "${_bagUp_C_front3Copy}", "top", '121px', { fromValue: '-11px'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid181", tween: [ "style", "${_GameRun13}", "top", '94px', { fromValue: '94px'}], position: 2067, duration: 0 },
                { id: "eid380", tween: [ "transform", "${_bagUp_C_back3Copy}", "scaleY", '0.74008', { fromValue: '0.74008'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid172", tween: [ "style", "${_C_waiting2Copy}", "left", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
                { id: "eid173", tween: [ "style", "${_C_waiting2Copy}", "left", '-152px', { fromValue: '50px'}], position: 67, duration: 0 },
                { id: "eid174", tween: [ "style", "${_C_waiting2Copy}", "left", '-351px', { fromValue: '-206px'}], position: 133, duration: 0 },
                { id: "eid179", tween: [ "style", "${_C_waiting2Copy}", "left", '-538px', { fromValue: '-349px'}], position: 2001, duration: 0 },
                { id: "eid188", tween: [ "style", "${_C_waiting2Copy}", "clip", [0,221.875,514,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,221.875,514,0]}], position: 0, duration: 0 },
                { id: "eid189", tween: [ "style", "${_C_waiting2Copy}", "clip", [0,403.125,514,200], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,221.875,514,0]}], position: 67, duration: 0 },
                { id: "eid191", tween: [ "style", "${_C_waiting2Copy}", "clip", [0,614.0625,514,389.0625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,403.125,514,200]}], position: 133, duration: 0 },
                { id: "eid192", tween: [ "style", "${_C_waiting2Copy}", "clip", [0,832.8125,514,587.5], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,614.0625,514,389.0625]}], position: 2001, duration: 0 },
                { id: "eid382", tween: [ "transform", "${_bagUp_C_back3Copy}", "scaleX", '0.80089', { fromValue: '0.80089'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid378", tween: [ "style", "${_bagUp_C_back3Copy}", "display", 'none', { fromValue: 'block'}], position: 678, duration: 0, easing: "easeInOutQuad" },
                { id: "eid214", tween: [ "style", "${_GameRun13}", "display", 'none', { fromValue: 'none'}], position: 610, duration: 0 },
                { id: "eid187", tween: [ "style", "${_GameRun13}", "display", 'block', { fromValue: 'none'}], position: 2067, duration: 0 },
                { id: "eid363", tween: [ "transform", "${_bagUp_C_front3Copy}", "scaleY", '0.74008', { fromValue: '0.74008'}], position: 400, duration: 0, easing: "easeInOutQuad" },
                { id: "eid391", tween: [ "transform", "${_bagUp_C_front3Copy}", "scaleY", '0.04987', { fromValue: '0.74008'}], position: 1000, duration: 467, easing: "easeInOutQuad" },
                { id: "eid183", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_GameRun13}', [] ], ""], position: 0 },
                { id: "eid394", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_bagUp_C_back3Copy}', [] ], ""], position: 0 },
                { id: "eid395", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_bagUp_C_front3Copy}', [] ], ""], position: 0 },
                { id: "eid396", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_C_front3Copy}', [] ], ""], position: 400 },
                { id: "eid397", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_C_back3Copy}', [] ], ""], position: 400 },
                { id: "eid184", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_GameRun13}', [] ], ""], position: 2066.6666666667 }            ]
        }
    }
},
"bagUp_3_back": {
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
                    id: 'ss_bagUp_longBack',
                    type: 'image',
                    rect: ['0', '0', '522px', '884px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_bagUp_longBack.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_bagUp_longBack}": [
                ["style", "top", '240px']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '522px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: true,
            timeline: [
                { id: "eid338", tween: [ "style", "${_ss_bagUp_longBack}", "top", '240px', { fromValue: '240px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid339", tween: [ "style", "${_ss_bagUp_longBack}", "top", '0px', { fromValue: '240px'}], position: 67, duration: 0, easing: "easeInQuad" },
                { id: "eid340", tween: [ "style", "${_ss_bagUp_longBack}", "top", '-232px', { fromValue: '0px'}], position: 134, duration: 0, easing: "easeInQuad" },
                { id: "eid341", tween: [ "style", "${_ss_bagUp_longBack}", "top", '-475px', { fromValue: '-232px'}], position: 200, duration: 0, easing: "easeInQuad" },
                { id: "eid342", tween: [ "style", "${_ss_bagUp_longBack}", "top", '-708px', { fromValue: '-475px'}], position: 267, duration: 0, easing: "easeInQuad" },
                { id: "eid343", tween: [ "style", "${_ss_bagUp_longBack}", "top", '-938px', { fromValue: '-708px'}], position: 334, duration: 0, easing: "easeInQuad" },
                { id: "eid315", tween: [ "style", "${_ss_bagUp_longBack}", "top", '-900px', { fromValue: '-1180px'}], position: 400, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"bagUp_3_front": {
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
                    id: 'ss_bagUp_longFront',
                    type: 'image',
                    rect: ['0px', '0px', '522px', '1440px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_bagUp_longFront.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '522px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ss_bagUp_longFront}": [
                ["style", "left", '0px'],
                ["style", "top", '240px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: false,
            timeline: [
                { id: "eid284", tween: [ "style", "${_ss_bagUp_longFront}", "top", '240px', { fromValue: '240px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid277", tween: [ "style", "${_ss_bagUp_longFront}", "top", '0px', { fromValue: '240px'}], position: 67, duration: 0, easing: "easeInQuad" },
                { id: "eid278", tween: [ "style", "${_ss_bagUp_longFront}", "top", '-232px', { fromValue: '0px'}], position: 134, duration: 0, easing: "easeInQuad" },
                { id: "eid279", tween: [ "style", "${_ss_bagUp_longFront}", "top", '-475px', { fromValue: '-240px'}], position: 200, duration: 0, easing: "easeInQuad" },
                { id: "eid280", tween: [ "style", "${_ss_bagUp_longFront}", "top", '-708px', { fromValue: '-480px'}], position: 267, duration: 0, easing: "easeInQuad" },
                { id: "eid281", tween: [ "style", "${_ss_bagUp_longFront}", "top", '-938px', { fromValue: '-720px'}], position: 334, duration: 0, easing: "easeInQuad" },
                { id: "eid282", tween: [ "style", "${_ss_bagUp_longFront}", "top", '-1180px', { fromValue: '-960px'}], position: 400, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"bagDrag": {
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
                    id: 'ss_bagDrag',
                    type: 'image',
                    rect: ['0px', '0px', '540px', '382px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ss_bagDrag.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '382px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '180px']
            ],
            "${_ss_bagDrag}": [
                ["style", "left", '-360px'],
                ["style", "top", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1067,
            autoPlay: true,
            labels: {
                "appear": 0,
                "loop": 867
            },
            timeline: [
                { id: "eid112", tween: [ "style", "${_ss_bagDrag}", "top", '0px', { fromValue: '400px'}], position: 0, duration: 733, easing: "easeInOutQuad" },
                { id: "eid113", tween: [ "style", "${_ss_bagDrag}", "left", '0px', { fromValue: '-360px'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_ss_bagDrag}", "left", '-180px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid115", tween: [ "style", "${_ss_bagDrag}", "left", '-360px', { fromValue: '-180px'}], position: 133, duration: 0 },
                { id: "eid116", tween: [ "style", "${_ss_bagDrag}", "left", '0px', { fromValue: '-360px'}], position: 200, duration: 0 },
                { id: "eid117", tween: [ "style", "${_ss_bagDrag}", "left", '-180px', { fromValue: '0px'}], position: 267, duration: 0 },
                { id: "eid118", tween: [ "style", "${_ss_bagDrag}", "left", '-360px', { fromValue: '-180px'}], position: 333, duration: 0 },
                { id: "eid119", tween: [ "style", "${_ss_bagDrag}", "left", '0px', { fromValue: '-360px'}], position: 400, duration: 0 },
                { id: "eid120", tween: [ "style", "${_ss_bagDrag}", "left", '-180px', { fromValue: '0px'}], position: 467, duration: 0 },
                { id: "eid121", tween: [ "style", "${_ss_bagDrag}", "left", '-360px', { fromValue: '-180px'}], position: 533, duration: 0 },
                { id: "eid122", tween: [ "style", "${_ss_bagDrag}", "left", '0px', { fromValue: '-360px'}], position: 600, duration: 0 },
                { id: "eid123", tween: [ "style", "${_ss_bagDrag}", "left", '-180px', { fromValue: '0px'}], position: 667, duration: 0 },
                { id: "eid124", tween: [ "style", "${_ss_bagDrag}", "left", '-360px', { fromValue: '-180px'}], position: 733, duration: 0 },
                { id: "eid128", tween: [ "style", "${_ss_bagDrag}", "left", '0px', { fromValue: '-360px'}], position: 867, duration: 0 },
                { id: "eid129", tween: [ "style", "${_ss_bagDrag}", "left", '-180px', { fromValue: '0px'}], position: 934, duration: 0 },
                { id: "eid130", tween: [ "style", "${_ss_bagDrag}", "left", '-360px', { fromValue: '-180px'}], position: 1000, duration: 0 }            ]
        }
    }
},
"bagUp_C_front": {
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
                    id: 'bagUp_C_front',
                    type: 'image',
                    rect: ['0px', '0px', '1440px', '522px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/bagUp_C_front.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bagUp_C_front}": [
                ["style", "top", '0px'],
                ["style", "left", '280px']
            ],
            "${symbolSelector}": [
                ["style", "height", '522px'],
                ["style", "width", '240px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 400,
            autoPlay: true,
            timeline: [
                { id: "eid237", tween: [ "style", "${_bagUp_C_front}", "left", '280px', { fromValue: '280px'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_bagUp_C_front}", "left", '-23px', { fromValue: '280px'}], position: 67, duration: 0 },
                { id: "eid232", tween: [ "style", "${_bagUp_C_front}", "left", '-240px', { fromValue: '-23px'}], position: 133, duration: 0 },
                { id: "eid233", tween: [ "style", "${_bagUp_C_front}", "left", '-480px', { fromValue: '-240px'}], position: 200, duration: 0 },
                { id: "eid383", tween: [ "style", "${_bagUp_C_front}", "left", '-704px', { fromValue: '-480px'}], position: 267, duration: 0, easing: "easeInOutQuad" },
                { id: "eid234", tween: [ "style", "${_bagUp_C_front}", "left", '-943px', { fromValue: '-704px'}], position: 333, duration: 0 },
                { id: "eid236", tween: [ "style", "${_bagUp_C_front}", "left", '-1187px', { fromValue: '-943px'}], position: 400, duration: 0 }            ]
        }
    }
},
"bagUp_C_back": {
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
                    id: 'bagUp_C_back2',
                    type: 'image',
                    rect: ['6', '0', '960px', '522px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/bagUp_C_back.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bagUp_C_back2}": [
                ["style", "left", '280px']
            ],
            "${symbolSelector}": [
                ["style", "height", '522px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '240px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 267,
            autoPlay: true,
            timeline: [
                { id: "eid238", tween: [ "style", "${_bagUp_C_back2}", "left", '280px', { fromValue: '280px'}], position: 0, duration: 0 },
                { id: "eid239", tween: [ "style", "${_bagUp_C_back2}", "left", '-23px', { fromValue: '280px'}], position: 67, duration: 0 },
                { id: "eid240", tween: [ "style", "${_bagUp_C_back2}", "left", '-240px', { fromValue: '-23px'}], position: 133, duration: 0 },
                { id: "eid241", tween: [ "style", "${_bagUp_C_back2}", "left", '-480px', { fromValue: '-240px'}], position: 200, duration: 0 },
                { id: "eid243", tween: [ "style", "${_bagUp_C_back2}", "left", '-992px', { fromValue: '-480px'}], position: 267, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "GAME_2");
