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
                id: 'bg_game1',
                type: 'image',
                rect: ['0', '0px','2048px','1535px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Game_1/bg_game1.png",'0px','0px']
            },
            {
                id: 'gamePaperball',
                type: 'rect',
                rect: ['812px', '525px','auto','auto','auto', 'auto']
            },
            {
                id: 'gameCrip',
                type: 'rect',
                rect: ['455px', '640px','auto','auto','auto', 'auto']
            },
            {
                id: 'gamShoes',
                type: 'rect',
                rect: ['1369', '414','auto','auto','auto', 'auto']
            },
            {
                id: 'gameTeddy',
                type: 'rect',
                rect: ['839', '747','auto','auto','auto', 'auto']
            },
            {
                id: 'gameTV',
                type: 'rect',
                rect: ['1534px', '567px','auto','auto','auto', 'auto']
            },
            {
                id: 'gameCigs2',
                type: 'rect',
                rect: ['948px', '1228px','auto','auto','auto', 'auto']
            },
            {
                id: 'gameTrash',
                type: 'rect',
                rect: ['1307', '495','auto','auto','auto', 'auto']
            },
            {
                id: 'figureBackHead',
                type: 'image',
                rect: ['22px', '626px','637px','955px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Game_1/figureBackHead.png",'0px','0px']
            },
            {
                id: 'bagDrag',
                type: 'rect',
                rect: ['245px', '865px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.88094']]
            },
            {
                id: 'figureBack',
                type: 'image',
                rect: ['22px', '1032px','637px','549px','auto', 'auto'],
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
                id: 'gamShoes',
                symbolName: 'gameShoes',
                autoPlay: {

                }
            },
            {
                id: 'gameTeddy',
                symbolName: 'gameTeddy',
                autoPlay: {

                }
            },
            {
                id: 'gameTV',
                symbolName: 'gameTV',
                autoPlay: {

                }
            },
            {
                id: 'gameTrash',
                symbolName: 'gameTrash',
                autoPlay: {

                }
            },
            {
                id: 'gameCrip',
                symbolName: 'gameCrip',
                autoPlay: {

                }
            },
            {
                id: 'gamePaperball',
                symbolName: 'gamePaperball',
                autoPlay: {

                }
            },
            {
                id: 'gameCigs2',
                symbolName: 'gameCigs',
                autoPlay: {

                }
            },
            {
                id: 'bagDrag',
                symbolName: 'bagDrag',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_gameTV}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '1534px'],
                ["style", "top", '567px']
            ],
            "${_figureBack}": [
                ["style", "left", '22px'],
                ["style", "top", '1032px']
            ],
            "${_figureBackHead}": [
                ["style", "left", '22px'],
                ["style", "top", '626px']
            ],
            "${_bagDrag}": [
                ["style", "top", '865px'],
                ["style", "left", '245px'],
                ["transform", "scaleX", '0.88094']
            ],
            "${_bg_game1}": [
                ["style", "top", '0px']
            ],
            "${_gamShoes}": [
                ["transform", "scaleX", '0.58031'],
                ["transform", "scaleY", '0.58031'],
                ["style", "left", '729px'],
                ["style", "top", '426px']
            ],
            "${_gameTeddy}": [
                ["style", "left", '1180px'],
                ["style", "top", '618px']
            ],
            "${_gameCrip}": [
                ["style", "left", '828px'],
                ["style", "top", '635px']
            ],
            "${_gameTrash}": [
                ["transform", "scaleX", '0.87'],
                ["style", "left", '1225px'],
                ["transform", "scaleY", '0.87'],
                ["style", "top", '408px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1']
            ],
            "${_gameCigs2}": [
                ["style", "left", '884px'],
                ["style", "top", '1084px']
            ],
            "${_gamePaperball}": [
                ["transform", "scaleX", '0.77155'],
                ["style", "top", '325px'],
                ["style", "left", '472px'],
                ["transform", "scaleY", '0.77155']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            labels: {
                "off": 9000
            },
            timeline: [
                { id: "eid425", tween: [ "transform", "${_gamePaperball}", "scaleX", '0.77155', { fromValue: '0.77155'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid408", tween: [ "style", "${_gameCrip}", "left", '647px', { fromValue: '828px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid548", tween: [ "transform", "${_gameTrash}", "scaleY", '0.87', { fromValue: '0.87'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid409", tween: [ "transform", "${_gamShoes}", "scaleX", '0.58031', { fromValue: '0.58031'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid547", tween: [ "transform", "${_gameTrash}", "scaleX", '0.87', { fromValue: '0.87'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid410", tween: [ "transform", "${_gamShoes}", "scaleY", '0.58031', { fromValue: '0.58031'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid546", tween: [ "style", "${_gameTrash}", "left", '1225px', { fromValue: '1225px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid545", tween: [ "style", "${_gameTrash}", "top", '408px', { fromValue: '408px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid426", tween: [ "transform", "${_gamePaperball}", "scaleY", '0.77155', { fromValue: '0.77155'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid407", tween: [ "style", "${_gameCrip}", "top", '838px', { fromValue: '635px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid568", tween: [ "style", "${_gameTeddy}", "top", '618px', { fromValue: '618px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid412", tween: [ "style", "${_gamShoes}", "top", '426px', { fromValue: '426px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid472", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1497, duration: 0, easing: "easeInOutQuad" },
                { id: "eid215", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 9565, duration: 0, easing: "easeInOutQuad" },
                { id: "eid567", tween: [ "style", "${_gameTeddy}", "left", '1180px', { fromValue: '1180px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid411", tween: [ "style", "${_gamShoes}", "left", '729px', { fromValue: '729px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid423", tween: [ "style", "${_gamePaperball}", "left", '472px', { fromValue: '472px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid424", tween: [ "style", "${_gamePaperball}", "top", '325px', { fromValue: '325px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid474", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1497, easing: "easeInQuad" },
                { id: "eid214", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 9565, duration: 1435, easing: "easeInOutQuad" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_trash_3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_trash_3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px'],
                ["style", "clip", [0,330.0146484375,900,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '333px'],
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
                { id: "eid2257", tween: [ "style", "${_ss_trash_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2258", tween: [ "style", "${_ss_trash_3}", "top", '-300px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid2259", tween: [ "style", "${_ss_trash_3}", "top", '-600px', { fromValue: '-300px'}], position: 133, duration: 0 },
                { id: "eid2261", tween: [ "style", "${_ss_trash_3}", "opacity", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 },
                { id: "eid2304", tween: [ "style", "${_ss_trash_3}", "clip", [0,330.0146484375,900,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,330.0146484375,900,0]}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagDrag.png', '0px', '0px']
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
"bagUp_1_front": {
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
                    id: 'ss_bagUp1_front',
                    type: 'image',
                    rect: ['0', '0', '2040px', '340px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp1_front.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_bagUp1_front}": [
                ["style", "left", '340px']
            ],
            "${symbolSelector}": [
                ["style", "height", '340px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '340px']
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
                { id: "eid55", tween: [ "style", "${_ss_bagUp1_front}", "left", '340px', { fromValue: '340px'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_ss_bagUp1_front}", "left", '0px', { fromValue: '340px'}], position: 67, duration: 0 },
                { id: "eid57", tween: [ "style", "${_ss_bagUp1_front}", "left", '-340px', { fromValue: '0px'}], position: 133, duration: 0 },
                { id: "eid58", tween: [ "style", "${_ss_bagUp1_front}", "left", '-680px', { fromValue: '-340px'}], position: 200, duration: 0 },
                { id: "eid59", tween: [ "style", "${_ss_bagUp1_front}", "left", '-1020px', { fromValue: '-680px'}], position: 267, duration: 0 },
                { id: "eid60", tween: [ "style", "${_ss_bagUp1_front}", "left", '-1360px', { fromValue: '-1020px'}], position: 333, duration: 0 },
                { id: "eid61", tween: [ "style", "${_ss_bagUp1_front}", "left", '-1692px', { fromValue: '-1360px'}], position: 400, duration: 0 }            ]
        }
    }
},
"bagUp_1_back": {
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
                    id: 'ss_bagUp1_back',
                    type: 'image',
                    rect: ['0', '0', '1360px', '340px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp1_back.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_bagUp1_back}": [
                ["style", "left", '340px']
            ],
            "${symbolSelector}": [
                ["style", "height", '340px'],
                ["style", "width", '340px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 333,
            autoPlay: true,
            timeline: [
                { id: "eid68", tween: [ "style", "${_ss_bagUp1_back}", "left", '340px', { fromValue: '340px'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_ss_bagUp1_back}", "left", '0px', { fromValue: '340px'}], position: 67, duration: 0 },
                { id: "eid70", tween: [ "style", "${_ss_bagUp1_back}", "left", '-340px', { fromValue: '0px'}], position: 133, duration: 0 },
                { id: "eid71", tween: [ "style", "${_ss_bagUp1_back}", "left", '-680px', { fromValue: '-340px'}], position: 200, duration: 0 },
                { id: "eid72", tween: [ "style", "${_ss_bagUp1_back}", "left", '-1020px', { fromValue: '-680px'}], position: 267, duration: 0 },
                { id: "eid73", tween: [ "style", "${_ss_bagUp1_back}", "left", '340px', { fromValue: '-1020px'}], position: 333, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_paperball.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_paperball}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '440px'],
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
                { id: "eid2019", tween: [ "style", "${_ss_paperball}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2020", tween: [ "style", "${_ss_paperball}", "top", '-300px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid2021", tween: [ "style", "${_ss_paperball}", "top", '-600px', { fromValue: '-300px'}], position: 133, duration: 0 },
                { id: "eid2036", tween: [ "style", "${_ss_paperball}", "opacity", '0.9', { fromValue: '0.9'}], position: 0, duration: 0 }            ]
        }
    }
},
"gamePaperball": {
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
                    rect: ['61px', '63px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_1_back3'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['80px', '22px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_paperball'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['61px', '63px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_1_front3'
                }
            ],
            symbolInstances: [
            {
                id: 'bagUp_1_front3',
                symbolName: 'bagUp_1_front',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_1_back3',
                symbolName: 'bagUp_1_back',
                autoPlay: {

               }
            },
            {
                id: 'A_paperball',
                symbolName: 'A_paperball',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bagUp_1_front3}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_bagUp_1_back3}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_A_paperball}": [
                ["style", "top", '79px'],
                ["transform", "scaleY", '0.52929'],
                ["transform", "scaleX", '0.52929'],
                ["style", "clip", [0,429.9242248535156,300,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-42px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '340px'],
                ["style", "width", '340px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 717,
            autoPlay: false,
            labels: {
                "bag_up": 200,
                "stop": 450,
                "disappear": 533
            },
            timeline: [
                { id: "eid101", tween: [ "style", "${_bagUp_1_back3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid107", tween: [ "style", "${_A_paperball}", "clip", [0,429.9242248535156,300,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,429.9242248535156,300,0]}], position: 113, duration: 0 },
                { id: "eid420", tween: [ "transform", "${_A_paperball}", "scaleY", '0.52929', { fromValue: '0.52929'}], position: 0, duration: 0 },
                { id: "eid142", tween: [ "transform", "${_bagUp_1_front3}", "scaleX", '0.01', { fromValue: '1'}], position: 450, duration: 267, easing: "easeInOutQuad" },
                { id: "eid419", tween: [ "style", "${_A_paperball}", "top", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
                { id: "eid422", tween: [ "transform", "${_A_paperball}", "scaleX", '0.52929', { fromValue: '0.52929'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_bagUp_1_back3}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid149", tween: [ "style", "${_bagUp_1_back3}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInOutQuad" },
                { id: "eid104", tween: [ "style", "${_bagUp_1_front3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid151", tween: [ "style", "${_bagUp_1_front3}", "top", '136px', { fromValue: '0px'}], position: 450, duration: 267, easing: "easeInOutQuad" },
                { id: "eid421", tween: [ "style", "${_A_paperball}", "left", '-42px', { fromValue: '-42px'}], position: 0, duration: 0 },
                { id: "eid145", tween: [ "transform", "${_bagUp_1_front3}", "scaleY", '0.01', { fromValue: '1'}], position: 450, duration: 267, easing: "easeInOutQuad" },
                { id: "eid106", tween: [ "style", "${_bagUp_1_front3}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid148", tween: [ "style", "${_A_paperball}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInOutQuad" },
                { id: "eid153", tween: [ "style", "${_bagUp_1_front3}", "opacity", '0', { fromValue: '1'}], position: 450, duration: 267, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_bagUp_1_back3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_bagUp_1_front3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid125", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_A_paperball}', [] ], ""], position: 200 },
                { id: "eid126", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_1_front3}', [0] ], ""], position: 200 },
                { id: "eid127", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_1_back3}', [0] ], ""], position: 200 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/disposable/ss_cig1.png', '0px', '0px']
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '550px']
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
                    fill: ['rgba(0,0,0,0)', 'images/disposable/ss_cig2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_cig2}": [
                ["style", "left", '0px'],
                ["style", "top", '-6px']
            ],
            "${symbolSelector}": [
                ["style", "height", '260px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '529px']
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
                    fill: ['rgba(0,0,0,0)', 'images/disposable/ss_cig3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '260px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '590px']
            ],
            "${_ss_cig3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,576,780,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                    fill: ['rgba(0,0,0,0)', 'images/disposable/ss_cig4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '387px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '300px']
            ],
            "${_ss_cig4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                    fill: ['rgba(0,0,0,0)', 'images/s_cripmate.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s_cripmate2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.8'],
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
                { id: "eid2038", tween: [ "style", "${_s_cripmate2}", "opacity", '0.8', { fromValue: '0.8'}], position: 0, duration: 0 },
                { id: "eid1954", tween: [ "style", "${_s_cripmate2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1957", tween: [ "style", "${_s_cripmate2}", "top", '-400px', { fromValue: '0px'}], position: 67, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1958", tween: [ "style", "${_s_cripmate2}", "top", '-800px', { fromValue: '-400px'}], position: 133, duration: 0, easing: "easeInOutQuad" }            ]
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
                { id: "eid194", tween: [ "style", "${_A_cig4}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0 },
                { id: "eid203", tween: [ "style", "${_A_cig3}", "opacity", '0.8', { fromValue: '0.8'}], position: 0, duration: 0 },
                { id: "eid185", tween: [ "style", "${_A_cig3}", "top", '164px', { fromValue: '164px'}], position: 0, duration: 0 },
                { id: "eid193", tween: [ "transform", "${_A_cig4}", "scaleY", '0.87855', { fromValue: '0.87855'}], position: 0, duration: 0 },
                { id: "eid192", tween: [ "transform", "${_A_cig4}", "scaleX", '0.87855', { fromValue: '0.87855'}], position: 0, duration: 0 },
                { id: "eid182", tween: [ "transform", "${_A_cig3}", "scaleX", '-0.61539', { fromValue: '-0.61539'}], position: 0, duration: 0 },
                { id: "eid195", tween: [ "style", "${_A_cig4}", "top", '-24px', { fromValue: '-24px'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_A_cig1}", "left", '97px', { fromValue: '97px'}], position: 0, duration: 0 },
                { id: "eid163", tween: [ "transform", "${_A_cig1}", "scaleX", '0.60545', { fromValue: '0.60545'}], position: 0, duration: 0 },
                { id: "eid202", tween: [ "style", "${_A_cig2}", "opacity", '0.8', { fromValue: '0.8'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/A_shoes.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_A_shoes}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '420px'],
                ["style", "width", '525px'],
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
                { id: "eid216", tween: [ "style", "${_A_shoes}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid218", tween: [ "style", "${_A_shoes}", "top", '-420px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid219", tween: [ "style", "${_A_shoes}", "top", '-840px', { fromValue: '-420px'}], position: 133, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/A_teddy.png', '0px', '0px']
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
                ["style", "width", '447px'],
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
                { id: "eid226", tween: [ "style", "${_A_teddy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid228", tween: [ "style", "${_A_teddy}", "top", '-400px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid227", tween: [ "style", "${_A_teddy}", "top", '-800px', { fromValue: '-400px'}], position: 133, duration: 0 },
                { id: "eid229", tween: [ "style", "${_A_teddy}", "opacity", '0.9', { fromValue: '0.9'}], position: 200, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/A_tv.png', '0px', '0px']
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
                ["style", "width", '600px'],
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
                { id: "eid236", tween: [ "style", "${_A_tv}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid237", tween: [ "style", "${_A_tv}", "left", '-600px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid238", tween: [ "style", "${_A_tv}", "left", '-1200px', { fromValue: '-600px'}], position: 133, duration: 0 },
                { id: "eid239", tween: [ "style", "${_A_tv}", "opacity", '0.9', { fromValue: '0.9'}], position: 133, duration: 0 }            ]
        }
    }
},
"bagUp_2_front": {
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
                    id: 'ss_bagUp_shoesFront',
                    type: 'image',
                    rect: ['0px', '0px', '554px', '1850px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_shoesFront.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ss_bagUp_shoesFront}": [
                ["style", "left", '0px'],
                ["style", "top", '370px']
            ],
            "${symbolSelector}": [
                ["style", "height", '370px'],
                ["style", "width", '554px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 333,
            autoPlay: true,
            timeline: [
                { id: "eid316", tween: [ "style", "${_ss_bagUp_shoesFront}", "top", '370px', { fromValue: '370px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid317", tween: [ "style", "${_ss_bagUp_shoesFront}", "top", '0px', { fromValue: '370px'}], position: 66, duration: 0, easing: "easeInQuad" },
                { id: "eid318", tween: [ "style", "${_ss_bagUp_shoesFront}", "top", '-361px', { fromValue: '0px'}], position: 133, duration: 0, easing: "easeInQuad" },
                { id: "eid319", tween: [ "style", "${_ss_bagUp_shoesFront}", "top", '-730px', { fromValue: '-370px'}], position: 199, duration: 0, easing: "easeInQuad" },
                { id: "eid320", tween: [ "style", "${_ss_bagUp_shoesFront}", "top", '-1105px', { fromValue: '-740px'}], position: 266, duration: 0, easing: "easeInQuad" },
                { id: "eid321", tween: [ "style", "${_ss_bagUp_shoesFront}", "top", '-1475px', { fromValue: '-1110px'}], position: 333, duration: 0, easing: "easeInQuad" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_longFront.png', '0px', '0px']
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
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_longBack.png', '0px', '0px']
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
"bagUp_2_back": {
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
                    id: 'ss_bagUp_shoesBack2',
                    type: 'image',
                    rect: ['0', '0', '554px', '1322px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_shoesBack.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '370px'],
                ["style", "width", '554px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ss_bagUp_shoesBack2}": [
                ["style", "top", '370px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 333,
            autoPlay: true,
            timeline: [
                { id: "eid345", tween: [ "style", "${_ss_bagUp_shoesBack2}", "top", '370px', { fromValue: '370px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid346", tween: [ "style", "${_ss_bagUp_shoesBack2}", "top", '0px', { fromValue: '370px'}], position: 66, duration: 0, easing: "easeInQuad" },
                { id: "eid347", tween: [ "style", "${_ss_bagUp_shoesBack2}", "top", '-361px', { fromValue: '0px'}], position: 133, duration: 0, easing: "easeInQuad" },
                { id: "eid348", tween: [ "style", "${_ss_bagUp_shoesBack2}", "top", '-730px', { fromValue: '-361px'}], position: 199, duration: 0, easing: "easeInQuad" },
                { id: "eid349", tween: [ "style", "${_ss_bagUp_shoesBack2}", "top", '-1105px', { fromValue: '-730px'}], position: 266, duration: 0, easing: "easeInQuad" },
                { id: "eid350", tween: [ "style", "${_ss_bagUp_shoesBack2}", "top", '-1475px', { fromValue: '-1105px'}], position: 333, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"gameShoes": {
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
                    rect: ['0', '14', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_2_back'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['-829px', '-348px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_shoes2'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['99px', '-97px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_2_front'
                }
            ],
            symbolInstances: [
            {
                id: 'A_shoes2',
                symbolName: 'A_shoes',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_2_front',
                symbolName: 'bagUp_2_front',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_2_back',
                symbolName: 'bagUp_2_back',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bagUp_2_back}": [
                ["style", "display", 'none']
            ],
            "${_bagUp_2_front}": [
                ["style", "top", '14px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_A_shoes2}": [
                ["style", "top", '-25px'],
                ["transform", "scaleY", '0.88095'],
                ["transform", "scaleX", '0.88095'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '384px'],
                ["style", "width", '554px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: false,
            labels: {
                "bag_up": 200,
                "stop": 600,
                "disappear": 683
            },
            timeline: [
                { id: "eid377", tween: [ "style", "${_bagUp_2_front}", "opacity", '0', { fromValue: '1'}], position: 599, duration: 267, easing: "easeOutQuad" },
                { id: "eid323", tween: [ "style", "${_bagUp_2_front}", "top", '14px', { fromValue: '14px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid374", tween: [ "style", "${_bagUp_2_front}", "top", '175px', { fromValue: '14px'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid325", tween: [ "transform", "${_A_shoes2}", "scaleX", '0.88095', { fromValue: '0.88095'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid327", tween: [ "style", "${_A_shoes2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid364", tween: [ "style", "${_bagUp_2_back}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0, easing: "easeInQuad" },
                { id: "eid322", tween: [ "style", "${_bagUp_2_front}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid324", tween: [ "style", "${_A_shoes2}", "top", '-25px', { fromValue: '-25px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid371", tween: [ "transform", "${_bagUp_2_front}", "scaleX", '0.01', { fromValue: '1'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid353", tween: [ "style", "${_A_shoes2}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInQuad" },
                { id: "eid372", tween: [ "transform", "${_bagUp_2_front}", "scaleY", '0.01', { fromValue: '1'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid363", tween: [ "style", "${_bagUp_2_front}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0, easing: "easeInQuad" },
                { id: "eid326", tween: [ "transform", "${_A_shoes2}", "scaleY", '0.88095', { fromValue: '0.88095'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid378", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_2_front}', [] ], ""], position: 200 },
                { id: "eid379", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_2_back}', [] ], ""], position: 200 }            ]
        }
    }
},
"gameCrip": {
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
                    id: 'bagUp_3_back'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['519px', '72px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_cripmate'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['402px', '-209px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_3_front'
                }
            ],
            symbolInstances: [
            {
                id: 'bagUp_3_front',
                symbolName: 'bagUp_3_front',
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
                id: 'bagUp_3_back',
                symbolName: 'bagUp_3_back',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '533px']
            ],
            "${_bagUp_3_front}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_bagUp_3_back}": [
                ["style", "display", 'none']
            ],
            "${_A_cripmate}": [
                ["style", "top", '-58px'],
                ["transform", "scaleY", '0.40229'],
                ["transform", "scaleX", '0.40229'],
                ["style", "left", '-329px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: false,
            labels: {
                "bag_up": 200,
                "stop": 600,
                "disappear": 683
            },
            timeline: [
                { id: "eid413", tween: [ "style", "${_bagUp_3_back}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0, easing: "easeInQuad" },
                { id: "eid333", tween: [ "style", "${_bagUp_3_front}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid402", tween: [ "style", "${_bagUp_3_front}", "top", '80px', { fromValue: '0px'}], position: 599, duration: 267, easing: "easeInOutQuad" },
                { id: "eid416", tween: [ "transform", "${_A_cripmate}", "scaleY", '0.40229', { fromValue: '0.40229'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid394", tween: [ "style", "${_bagUp_3_front}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0, easing: "easeInQuad" },
                { id: "eid397", tween: [ "style", "${_bagUp_3_front}", "opacity", '0', { fromValue: '1'}], position: 599, duration: 267, easing: "easeOutQuad" },
                { id: "eid417", tween: [ "style", "${_A_cripmate}", "left", '-329px', { fromValue: '-329px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid356", tween: [ "style", "${_A_cripmate}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInQuad" },
                { id: "eid396", tween: [ "transform", "${_bagUp_3_front}", "scaleX", '0.01', { fromValue: '1'}], position: 599, duration: 267, easing: "easeInOutQuad" },
                { id: "eid332", tween: [ "style", "${_bagUp_3_front}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid398", tween: [ "transform", "${_bagUp_3_front}", "scaleY", '0.01', { fromValue: '1'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid415", tween: [ "style", "${_A_cripmate}", "top", '-58px', { fromValue: '-58px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid418", tween: [ "transform", "${_A_cripmate}", "scaleX", '0.40229', { fromValue: '0.40229'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid403", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_3_front}', [] ], ""], position: 200 },
                { id: "eid414", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_3_back}', [] ], ""], position: 200 }            ]
        }
    }
},
"bagUp_4": {
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
                    id: 'ss_bagUp_tv',
                    type: 'image',
                    rect: ['0px', '0px', '3750px', '639px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Game_1/ss_bagUp_tv.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '639px'],
                ["style", "width", '625px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ss_bagUp_tv}": [
                ["style", "left", '625px'],
                ["style", "top", '0px']
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
                { id: "eid438", tween: [ "style", "${_ss_bagUp_tv}", "left", '625px', { fromValue: '625px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid433", tween: [ "style", "${_ss_bagUp_tv}", "left", '0px', { fromValue: '625px'}], position: 66, duration: 0, easing: "easeOutQuad" },
                { id: "eid437", tween: [ "style", "${_ss_bagUp_tv}", "left", '-625px', { fromValue: '-1875px'}], position: 133, duration: 0, easing: "easeOutQuad" },
                { id: "eid436", tween: [ "style", "${_ss_bagUp_tv}", "left", '-1250px', { fromValue: '-625px'}], position: 199, duration: 0, easing: "easeOutQuad" },
                { id: "eid435", tween: [ "style", "${_ss_bagUp_tv}", "left", '-1875px', { fromValue: '-1250px'}], position: 266, duration: 0, easing: "easeOutQuad" },
                { id: "eid434", tween: [ "style", "${_ss_bagUp_tv}", "left", '-2500px', { fromValue: '-1875px'}], position: 333, duration: 0, easing: "easeOutQuad" },
                { id: "eid439", tween: [ "style", "${_ss_bagUp_tv}", "left", '-3125px', { fromValue: '-2500px'}], position: 400, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"gameTV": {
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
                    display: 'block',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_tv3'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_43'
                }
            ],
            symbolInstances: [
            {
                id: 'A_tv3',
                symbolName: 'A_tv',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_43',
                symbolName: 'bagUp_4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_A_tv3}": [
                ["style", "top", '36px'],
                ["transform", "scaleY", '0.96889'],
                ["transform", "scaleX", '0.96889'],
                ["style", "left", '9px'],
                ["style", "display", 'block']
            ],
            "${_bagUp_43}": [
                ["style", "top", '-40px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '-20px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '629px'],
                ["style", "width", '618px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 883,
            autoPlay: false,
            labels: {
                "bag_up": 200,
                "stop": 533,
                "disappear": 616
            },
            timeline: [
                { id: "eid460", tween: [ "style", "${_A_tv3}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid469", tween: [ "style", "${_bagUp_43}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0, easing: "easeInOutQuad" },
                { id: "eid465", tween: [ "style", "${_A_tv3}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInOutQuad" },
                { id: "eid455", tween: [ "transform", "${_A_tv3}", "scaleX", '0.96889', { fromValue: '0.96889'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid461", tween: [ "transform", "${_bagUp_43}", "scaleX", '0.01', { fromValue: '1'}], position: 616, duration: 267, easing: "easeInOutQuad" },
                { id: "eid462", tween: [ "style", "${_bagUp_43}", "opacity", '0', { fromValue: '1'}], position: 616, duration: 267, easing: "easeOutQuad" },
                { id: "eid454", tween: [ "style", "${_bagUp_43}", "top", '2px', { fromValue: '-40px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid468", tween: [ "style", "${_bagUp_43}", "top", '280px', { fromValue: '2px'}], position: 616, duration: 267, easing: "easeInOutQuad" },
                { id: "eid459", tween: [ "style", "${_A_tv3}", "top", '36px', { fromValue: '36px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid463", tween: [ "transform", "${_bagUp_43}", "scaleY", '0.01', { fromValue: '1'}], position: 616, duration: 267, easing: "easeInOutQuad" },
                { id: "eid453", tween: [ "style", "${_bagUp_43}", "left", '-11px', { fromValue: '-20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid456", tween: [ "transform", "${_A_tv3}", "scaleY", '0.96889', { fromValue: '0.96889'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid470", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_43}', [] ], ""], position: 200 }            ]
        }
    }
},
"gameCigs": {
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
                    rect: ['20px', '14', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_2_back'
                },
                {
                    rect: ['5px', '71px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_cig2',
                    transform: [[0, 0], [], [], ['0.65709', '0.65709']],
                    display: 'block',
                    type: 'rect'
                },
                {
                    rect: ['198px', '126px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_cig1',
                    transform: [[0, 0], [], [], ['0.58717', '0.58717']],
                    display: 'block',
                    type: 'rect'
                },
                {
                    rect: ['70px', '49px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_cig4',
                    transform: [[0, 0], [], [], ['0.7328', '0.7328']],
                    display: 'block',
                    type: 'rect'
                },
                {
                    rect: ['164px', '231px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_cig3',
                    transform: [[0, 0], [], [], ['-0.48645', '0.48728']],
                    display: 'block',
                    type: 'rect'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['99px', '-97px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_2_front'
                }
            ],
            symbolInstances: [
            {
                id: 'A_cig3',
                symbolName: 'A_cig3',
                autoPlay: {

               }
            },
            {
                id: 'A_cig4',
                symbolName: 'A_cig4',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_2_back',
                symbolName: 'bagUp_2_back',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_2_front',
                symbolName: 'bagUp_2_front',
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
            "${_A_cig1}": [
                ["style", "top", '118px'],
                ["transform", "scaleY", '0.58717'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.58717'],
                ["style", "left", '109px'],
                ["style", "display", 'block']
            ],
            "${_bagUp_2_back}": [
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '11deg'],
                ["transform", "scaleX", '-1'],
                ["style", "left", '20px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '485px'],
                ["style", "width", '700px']
            ],
            "${_A_cig3}": [
                ["style", "top", '167px'],
                ["transform", "scaleY", '0.48728'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '-0.48645'],
                ["style", "left", '76px'],
                ["style", "display", 'block']
            ],
            "${_bagUp_2_front}": [
                ["style", "top", '14px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '11deg'],
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '1'],
                ["style", "left", '20px'],
                ["style", "display", 'none']
            ],
            "${_A_cig4}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '0.7328'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '56px'],
                ["transform", "scaleX", '0.7328']
            ],
            "${_A_cig2}": [
                ["style", "top", '82px'],
                ["transform", "scaleY", '0.65709'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.65709'],
                ["style", "left", '-23px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: false,
            labels: {
                "bag_up": 200,
                "stop": 600,
                "disappear": 683
            },
            timeline: [
                { id: "eid479", tween: [ "style", "${_A_cig3}", "left", '76px', { fromValue: '76px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid489", tween: [ "transform", "${_A_cig1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid498", tween: [ "transform", "${_A_cig1}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 333, duration: 0, easing: "easeInQuad" },
                { id: "eid478", tween: [ "style", "${_A_cig3}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInQuad" },
                { id: "eid484", tween: [ "style", "${_A_cig4}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid364", tween: [ "style", "${_bagUp_2_back}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0, easing: "easeInQuad" },
                { id: "eid477", tween: [ "style", "${_A_cig4}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInQuad" },
                { id: "eid488", tween: [ "transform", "${_A_cig4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid500", tween: [ "transform", "${_A_cig4}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 333, duration: 0, easing: "easeInQuad" },
                { id: "eid502", tween: [ "transform", "${_A_cig4}", "rotateZ", '15deg', { fromValue: '8deg'}], position: 400, duration: 0, easing: "easeInQuad" },
                { id: "eid504", tween: [ "transform", "${_A_cig4}", "rotateZ", '20deg', { fromValue: '15deg'}], position: 467, duration: 0, easing: "easeInQuad" },
                { id: "eid323", tween: [ "style", "${_bagUp_2_front}", "top", '14px', { fromValue: '14px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid374", tween: [ "style", "${_bagUp_2_front}", "top", '175px', { fromValue: '14px'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid492", tween: [ "transform", "${_bagUp_2_front}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid372", tween: [ "transform", "${_bagUp_2_front}", "scaleY", '0.01', { fromValue: '1'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid482", tween: [ "style", "${_A_cig2}", "left", '-23px', { fromValue: '-23px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid506", tween: [ "style", "${_A_cig2}", "left", '7px', { fromValue: '-23px'}], position: 267, duration: 0, easing: "easeInQuad" },
                { id: "eid493", tween: [ "transform", "${_bagUp_2_back}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid496", tween: [ "transform", "${_bagUp_2_front}", "rotateZ", '11deg', { fromValue: '11deg'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid485", tween: [ "style", "${_A_cig1}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid499", tween: [ "style", "${_A_cig1}", "top", '128px', { fromValue: '118px'}], position: 333, duration: 0, easing: "easeInQuad" },
                { id: "eid495", tween: [ "transform", "${_bagUp_2_back}", "rotateZ", '11deg', { fromValue: '11deg'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid377", tween: [ "style", "${_bagUp_2_front}", "opacity", '0', { fromValue: '1'}], position: 599, duration: 267, easing: "easeOutQuad" },
                { id: "eid476", tween: [ "style", "${_A_cig1}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInQuad" },
                { id: "eid480", tween: [ "style", "${_A_cig4}", "left", '56px', { fromValue: '56px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid501", tween: [ "style", "${_A_cig4}", "left", '67px', { fromValue: '56px'}], position: 333, duration: 0, easing: "easeInQuad" },
                { id: "eid505", tween: [ "style", "${_A_cig4}", "left", '77px', { fromValue: '67px'}], position: 467, duration: 0, easing: "easeInQuad" },
                { id: "eid490", tween: [ "transform", "${_A_cig2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid481", tween: [ "style", "${_A_cig1}", "left", '109px', { fromValue: '109px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid497", tween: [ "style", "${_A_cig1}", "left", '99px', { fromValue: '109px'}], position: 333, duration: 0, easing: "easeInQuad" },
                { id: "eid503", tween: [ "style", "${_A_cig1}", "left", '89px', { fromValue: '99px'}], position: 400, duration: 0, easing: "easeInQuad" },
                { id: "eid483", tween: [ "style", "${_A_cig3}", "top", '167px', { fromValue: '167px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid487", tween: [ "transform", "${_A_cig3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid486", tween: [ "style", "${_A_cig2}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid475", tween: [ "style", "${_A_cig2}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInQuad" },
                { id: "eid494", tween: [ "transform", "${_bagUp_2_front}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid371", tween: [ "transform", "${_bagUp_2_front}", "scaleX", '0.01', { fromValue: '-1'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid322", tween: [ "style", "${_bagUp_2_front}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid363", tween: [ "style", "${_bagUp_2_front}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0, easing: "easeInQuad" },
                { id: "eid491", tween: [ "transform", "${_bagUp_2_back}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid378", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_2_front}', [] ], ""], position: 200 },
                { id: "eid379", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_2_back}', [] ], ""], position: 200 }            ]
        }
    }
},
"gameTrash": {
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
                    id: 'bagUp_3_back'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_trash_32'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['402px', '-209px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_3_front'
                }
            ],
            symbolInstances: [
            {
                id: 'A_trash_32',
                symbolName: 'A_trash_3',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_3_front',
                symbolName: 'bagUp_3_front',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_3_back',
                symbolName: 'bagUp_3_back',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bagUp_3_front}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.76958'],
                ["transform", "scaleX", '0.77279'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_bagUp_3_back}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '0.77'],
                ["style", "display", 'none'],
                ["style", "left", '-10px'],
                ["transform", "scaleX", '-0.77']
            ],
            "${_A_trash_32}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '70px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '533px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: false,
            labels: {
                "bag_up": 200,
                "stop": 600,
                "disappear": 683
            },
            timeline: [
                { id: "eid413", tween: [ "style", "${_bagUp_3_back}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid525", tween: [ "style", "${_bagUp_3_back}", "top", '29px', { fromValue: '29px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid517", tween: [ "style", "${_bagUp_3_front}", "top", '29px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid531", tween: [ "style", "${_bagUp_3_front}", "top", '88px', { fromValue: '29px'}], position: 599, duration: 267, easing: "easeInOutQuad" },
                { id: "eid522", tween: [ "style", "${_bagUp_3_front}", "left", '-10px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid394", tween: [ "style", "${_bagUp_3_front}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid542", tween: [ "transform", "${_A_trash_32}", "scaleY", '0.82', { fromValue: '1'}], position: 305, duration: 228, easing: "easeInOutQuad" },
                { id: "eid549", tween: [ "style", "${_A_trash_32}", "top", '-47px', { fromValue: '-47px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid550", tween: [ "style", "${_A_trash_32}", "top", '-34px', { fromValue: '-47px'}], position: 305, duration: 228, easing: "easeInOutQuad" },
                { id: "eid544", tween: [ "style", "${_A_trash_32}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInOutQuad" },
                { id: "eid397", tween: [ "style", "${_bagUp_3_front}", "opacity", '0', { fromValue: '1'}], position: 599, duration: 267, easing: "easeOutQuad" },
                { id: "eid527", tween: [ "style", "${_bagUp_3_back}", "left", '-10px', { fromValue: '-10px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid528", tween: [ "transform", "${_bagUp_3_back}", "scaleX", '-0.77', { fromValue: '-0.77'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid524", tween: [ "transform", "${_bagUp_3_front}", "scaleX", '-0.77', { fromValue: '0.77279'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid532", tween: [ "transform", "${_bagUp_3_front}", "scaleX", '-0.01', { fromValue: '-0.77'}], position: 599, duration: 267, easing: "easeInOutQuad" },
                { id: "eid541", tween: [ "transform", "${_A_trash_32}", "scaleX", '0.99302', { fromValue: '1'}], position: 305, duration: 228, easing: "easeInOutQuad" },
                { id: "eid523", tween: [ "transform", "${_bagUp_3_front}", "scaleY", '0.77', { fromValue: '0.76958'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid398", tween: [ "transform", "${_bagUp_3_front}", "scaleY", '0.01', { fromValue: '1'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid526", tween: [ "transform", "${_bagUp_3_back}", "scaleY", '0.77', { fromValue: '0.77'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid510", tween: [ "style", "${_A_trash_32}", "left", '70px', { fromValue: '70px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid403", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_3_front}', [] ], ""], position: 200 },
                { id: "eid414", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_3_back}', [] ], ""], position: 200 }            ]
        }
    }
},
"gameTeddy": {
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
                    rect: ['61px', '63px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_1_back3'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['0', '-6', 'auto', 'auto', 'auto', 'auto'],
                    id: 'A_teddy'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['61px', '63px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'bagUp_1_front3'
                }
            ],
            symbolInstances: [
            {
                id: 'A_teddy',
                symbolName: 'A_teddy',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_1_back3',
                symbolName: 'bagUp_1_back',
                autoPlay: {

               }
            },
            {
                id: 'bagUp_1_front3',
                symbolName: 'bagUp_1_front',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bagUp_1_front3}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '-1']
            ],
            "${_bagUp_1_back3}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '-1']
            ],
            "${_A_teddy}": [
                ["style", "top", '-14px'],
                ["transform", "scaleY", '0.56928'],
                ["transform", "scaleX", '0.56928'],
                ["style", "left", '-53px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '340px'],
                ["style", "width", '340px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: false,
            labels: {
                "bag_up": 200,
                "stop": 600,
                "disappear": 683
            },
            timeline: [
                { id: "eid558", tween: [ "transform", "${_A_teddy}", "scaleY", '0.56928', { fromValue: '0.56928'}], position: 200, duration: 0 },
                { id: "eid553", tween: [ "transform", "${_bagUp_1_back3}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_bagUp_1_back3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid554", tween: [ "transform", "${_bagUp_1_front3}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0 },
                { id: "eid142", tween: [ "transform", "${_bagUp_1_front3}", "scaleX", '0.01', { fromValue: '1'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid557", tween: [ "transform", "${_A_teddy}", "scaleX", '0.56928', { fromValue: '0.56928'}], position: 200, duration: 0 },
                { id: "eid560", tween: [ "style", "${_A_teddy}", "top", '-14px', { fromValue: '-14px'}], position: 200, duration: 0 },
                { id: "eid556", tween: [ "style", "${_bagUp_1_back3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_bagUp_1_back3}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid149", tween: [ "style", "${_bagUp_1_back3}", "display", 'none', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeInOutQuad" },
                { id: "eid104", tween: [ "style", "${_bagUp_1_front3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid151", tween: [ "style", "${_bagUp_1_front3}", "top", '136px', { fromValue: '0px'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid561", tween: [ "style", "${_A_teddy}", "display", 'none', { fromValue: 'block'}], position: 479, duration: 0, easing: "easeOutQuad" },
                { id: "eid145", tween: [ "transform", "${_bagUp_1_front3}", "scaleY", '0.01', { fromValue: '1'}], position: 600, duration: 267, easing: "easeInOutQuad" },
                { id: "eid555", tween: [ "style", "${_bagUp_1_front3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_bagUp_1_front3}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid559", tween: [ "style", "${_A_teddy}", "left", '-53px', { fromValue: '-53px'}], position: 200, duration: 0 },
                { id: "eid153", tween: [ "style", "${_bagUp_1_front3}", "opacity", '0', { fromValue: '1'}], position: 600, duration: 267, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_bagUp_1_back3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_bagUp_1_front3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid126", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_1_front3}', [0] ], ""], position: 200 },
                { id: "eid127", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bagUp_1_back3}', [0] ], ""], position: 200 }            ]
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
})(jQuery, AdobeEdge, "GAME_1");
