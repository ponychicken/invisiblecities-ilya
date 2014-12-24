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
                id: 'windloop',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                autoplay: 'autoplay',
                loop: 'loop',
                source: ['media/windloop.mp3']
            },
            {
                id: 'paper_opaque2',
                type: 'image',
                rect: ['0', '0','2048px','1535px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
            },
            {
                id: 'BG_0',
                type: 'image',
                rect: ['67px', '977px','1913px','265px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
            },
            {
                id: 'BG_0Copy',
                type: 'image',
                rect: ['-101px', '1187px','2311px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px'],
                transform: [[],[],[],['-1','-1']]
            },
            {
                id: 'tree_1',
                type: 'image',
                rect: ['747px', '576px','362px','381px','auto', 'auto'],
                opacity: 0.71544713314956,
                fill: ["rgba(0,0,0,0)",im+"tree_1.png",'0px','0px']
            },
            {
                id: 'houses_bg_1',
                type: 'image',
                rect: ['806px', '236px','1096px','593px','auto', 'auto'],
                opacity: 0.5,
                fill: ["rgba(0,0,0,0)",im+"houses_bg_1.png",'0px','0px']
            },
            {
                id: 'house_1',
                type: 'image',
                rect: ['223px', '204px','372px','699px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"house_1.png",'0px','0px']
            },
            {
                id: 'house_3',
                type: 'image',
                rect: ['1320px', '454px','402px','507px','auto', 'auto'],
                opacity: 0.55284552845528,
                fill: ["rgba(0,0,0,0)",im+"house_3.png",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'poller',
                type: 'image',
                rect: ['1289px', '864px','130px','274px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"poller.png",'0px','0px']
            },
            {
                id: 'pollerCopy',
                type: 'image',
                rect: ['989px', '864px','130px','274px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"poller.png",'0px','0px']
            },
            {
                id: 'pollerCopy2',
                type: 'image',
                rect: ['689px', '864px','130px','274px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"poller.png",'0px','0px']
            },
            {
                id: 'pollerCopy3',
                type: 'image',
                rect: ['398px', '864px','130px','274px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"poller.png",'0px','0px']
            },
            {
                id: 'BG_lantern',
                type: 'image',
                rect: ['1735px', '139px','137px','976px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
            },
            {
                id: 'BG_lanternCopy2',
                type: 'image',
                rect: ['1410px', '367px','86px','610px','auto', 'auto'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'BG_curb',
                type: 'image',
                rect: ['-64px', '1117px','2383px','218px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_curb.png",'0px','0px'],
                transform: [[],[],[],['1','-1']]
            },
            {
                id: 'wind',
                type: 'rect',
                rect: ['-129', '13','auto','auto','auto', 'auto']
            },
            {
                id: 'windCopy',
                type: 'rect',
                rect: ['-129', '13','auto','auto','auto', 'auto']
            },
            {
                id: 'windCopy4',
                type: 'rect',
                rect: ['-129', '13','auto','auto','auto', 'auto']
            },
            {
                id: 'windCopy2',
                type: 'rect',
                rect: ['-129', '13','auto','auto','auto', 'auto']
            },
            {
                id: 'windCopy3',
                type: 'rect',
                rect: ['-129', '13','auto','auto','auto', 'auto']
            },
            {
                id: 'C_wind22',
                type: 'rect',
                rect: ['1074', '-31','auto','auto','auto', 'auto']
            },
            {
                id: 'C_wind32',
                type: 'rect',
                rect: ['933', '-58','auto','auto','auto', 'auto']
            },
            {
                id: 'C_wind32Copy',
                type: 'rect',
                rect: ['933', '-58','auto','auto','auto', 'auto']
            },
            {
                id: 'C_wind12',
                type: 'rect',
                rect: ['269', '69','auto','auto','auto', 'auto']
            },
            {
                id: 'C_wind12Copy',
                type: 'rect',
                rect: ['269', '69','auto','auto','auto', 'auto']
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
                id: 'wind',
                symbolName: 'wind',
                autoPlay: {

                }
            },
            {
                id: 'C_wind12Copy',
                symbolName: 'C_wind1',
                autoPlay: {

                }
            },
            {
                id: 'windCopy',
                symbolName: 'wind',
                autoPlay: {

                }
            },
            {
                id: 'windCopy2',
                symbolName: 'wind',
                autoPlay: {

                }
            },
            {
                id: 'windCopy3',
                symbolName: 'wind',
                autoPlay: {

                }
            },
            {
                id: 'C_wind32Copy',
                symbolName: 'C_wind3',
                autoPlay: {

                }
            },
            {
                id: 'C_wind32',
                symbolName: 'C_wind3',
                autoPlay: {

                }
            },
            {
                id: 'C_wind22',
                symbolName: 'C_wind2',
                autoPlay: {

                }
            },
            {
                id: 'windCopy4',
                symbolName: 'wind',
                autoPlay: {

                }
            },
            {
                id: 'C_wind12',
                symbolName: 'C_wind1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_BG_0Copy}": [
                ["style", "top", '1187px'],
                ["transform", "scaleY", '-1'],
                ["style", "height", '320px'],
                ["transform", "scaleX", '-1'],
                ["style", "left", '-101px'],
                ["style", "width", '2311px']
            ],
            "${_C_wind32Copy}": [
                ["style", "top", '-73px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '-48deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0.7'],
                ["style", "left", '600px']
            ],
            "${_BG_lantern}": [
                ["style", "top", '139px'],
                ["style", "height", '976px'],
                ["style", "left", '1735px'],
                ["style", "width", '137px']
            ],
            "${_windloop}": [
                ["property", "volume", '0']
            ],
            "${_C_wind12Copy}": [
                ["style", "top", '-406px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "rotateZ", '-66deg'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0.75'],
                ["style", "left", '1065px']
            ],
            "${_C_wind12}": [
                ["style", "top", '-73px'],
                ["style", "left", '148px'],
                ["transform", "rotateZ", '-52deg']
            ],
            "${_wind}": [
                ["style", "top", '6px'],
                ["style", "opacity", '0.1'],
                ["transform", "scaleY", '1.5'],
                ["transform", "rotateZ", '-58deg'],
                ["transform", "scaleX", '1.5'],
                ["subproperty", "filter.blur", '2px'],
                ["style", "clip", [0,555.5634155273438,1287,290.21173095703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '92px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "display", 'block'],
                ["style", "height", '1536px']
            ],
            "${_BG_lanternCopy2}": [
                ["style", "top", '367px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '-1'],
                ["style", "height", '610px'],
                ["style", "opacity", '0.8'],
                ["style", "left", '1410px'],
                ["style", "width", '86px']
            ],
            "${_C_wind22}": [
                ["style", "top", '-146px'],
                ["style", "left", '690px'],
                ["transform", "rotateZ", '-55deg']
            ],
            "${_houses_bg_1}": [
                ["style", "top", '236px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '806px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_house_1}": [
                ["style", "left", '223px'],
                ["style", "top", '204px']
            ],
            "${_windCopy4}": [
                ["style", "top", '-213px'],
                ["style", "left", '464px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "rotateZ", '-58deg'],
                ["transform", "scaleX", '1.2'],
                ["style", "opacity", '0.1'],
                ["style", "clip", [0,555.5634155273438,1287,290.21173095703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["subproperty", "filter.blur", '2px']
            ],
            "${_windCopy3}": [
                ["style", "top", '-230px'],
                ["style", "opacity", '0.1'],
                ["transform", "scaleY", '1.5'],
                ["transform", "rotateZ", '-58deg'],
                ["transform", "scaleX", '1.5'],
                ["subproperty", "filter.blur", '2px'],
                ["style", "clip", [0,596.2573852539062,1287,346.743896484375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1016px']
            ],
            "${_BG_curb}": [
                ["style", "top", '1117px'],
                ["transform", "scaleY", '-1'],
                ["style", "height", '218px'],
                ["style", "left", '-64px'],
                ["style", "width", '2383px']
            ],
            "${_windCopy}": [
                ["style", "top", '82px'],
                ["style", "opacity", '0.1'],
                ["transform", "scaleY", '1.2'],
                ["transform", "rotateZ", '-58deg'],
                ["transform", "scaleX", '1.2'],
                ["subproperty", "filter.blur", '2px'],
                ["style", "clip", [0,555.5634155273438,1287,290.21173095703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '604px']
            ],
            "${_C_wind32}": [
                ["style", "top", '-366px'],
                ["style", "left", '1173px'],
                ["transform", "rotateZ", '-59deg']
            ],
            "${_tree_1}": [
                ["style", "top", '576px'],
                ["style", "opacity", '0.71544713314956'],
                ["style", "left", '747px']
            ],
            "${_house_3}": [
                ["style", "top", '454px'],
                ["style", "opacity", '0.55284552845528'],
                ["style", "left", '1320px'],
                ["transform", "scaleX", '-1']
            ],
            "${_windCopy2}": [
                ["style", "top", '439px'],
                ["style", "opacity", '0.1'],
                ["transform", "scaleY", '1.5'],
                ["transform", "rotateZ", '-58deg'],
                ["transform", "scaleX", '1.5'],
                ["subproperty", "filter.blur", '2px'],
                ["style", "clip", [0,477.58831787109375,1287,234.41053771972656], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '239px']
            ],
            "${_BG_0}": [
                ["style", "height", '265px'],
                ["style", "top", '977px'],
                ["style", "left", '67px'],
                ["style", "width", '1913px']
            ],
            "${_pollerCopy3}": [
                ["style", "height", '274px'],
                ["style", "top", '864px'],
                ["style", "left", '398px'],
                ["style", "width", '130px']
            ],
            "${_pollerCopy}": [
                ["style", "height", '274px'],
                ["style", "top", '864px'],
                ["style", "left", '989px'],
                ["style", "width", '130px']
            ],
            "${_pollerCopy2}": [
                ["style", "top", '864px'],
                ["style", "height", '274px'],
                ["style", "left", '689px'],
                ["style", "width", '130px']
            ],
            "${_poller}": [
                ["style", "top", '864px'],
                ["style", "height", '274px'],
                ["style", "left", '1289px'],
                ["style", "width", '130px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 48321,
            autoPlay: true,
            labels: {
                "off": 4000
            },
            timeline: [
                { id: "eid206", tween: [ "property", "${_windloop}", "volume", '0.5', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid208", tween: [ "property", "${_windloop}", "volume", '0', { fromValue: '0.5'}], position: 5157, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid198", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInQuart" },
                { id: "eid203", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeInQuart" },
                { id: "eid200", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 6349, duration: 0, easing: "easeInQuart" },
                { id: "eid199", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid202", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 1349, easing: "easeInOutQuad" }            ]
        }
    }
},
"wind": {
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
                    id: 'wind',
                    type: 'image',
                    rect: ['0px', '0px', '3080px', '1287px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wind2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wind}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1287px'],
                ["style", "width", '770px'],
                ["style", "overflow", 'hidden']
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
                { id: "eid122", tween: [ "style", "${_wind}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_wind}", "left", '-770px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid124", tween: [ "style", "${_wind}", "left", '-1540px', { fromValue: '-770px'}], position: 133, duration: 0 },
                { id: "eid125", tween: [ "style", "${_wind}", "left", '-2310px', { fromValue: '-1540px'}], position: 200, duration: 0 }            ]
        }
    }
},
"C_wind1": {
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
                    rect: ['0px', '0px', '1350px', '558px', 'auto', 'auto'],
                    id: 'C_wind1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/C_wind1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_C_wind1}": [
                ["style", "top", '756px'],
                ["style", "opacity", '1'],
                ["style", "left", '-7px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '1320px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 867,
            autoPlay: true,
            labels: {
                "loop": 0,
                "fly": 467
            },
            timeline: [
                { id: "eid116", tween: [ "style", "${_C_wind1}", "opacity", '0', { fromValue: '1'}], position: 533, duration: 267, easing: "easeInQuart" },
                { id: "eid83", tween: [ "style", "${_C_wind1}", "top", '756px', { fromValue: '756px'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${_C_wind1}", "top", '644px', { fromValue: '756px'}], position: 533, duration: 0 },
                { id: "eid109", tween: [ "style", "${_C_wind1}", "top", '366px', { fromValue: '644px'}], position: 600, duration: 0 },
                { id: "eid110", tween: [ "style", "${_C_wind1}", "top", '139px', { fromValue: '366px'}], position: 667, duration: 0 },
                { id: "eid111", tween: [ "style", "${_C_wind1}", "top", '-220px', { fromValue: '139px'}], position: 733, duration: 0 },
                { id: "eid112", tween: [ "style", "${_C_wind1}", "top", '-479px', { fromValue: '-220px'}], position: 800, duration: 0 },
                { id: "eid84", tween: [ "style", "${_C_wind1}", "left", '-7px', { fromValue: '-7px'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_C_wind1}", "left", '-146px', { fromValue: '-7px'}], position: 67, duration: 0 },
                { id: "eid86", tween: [ "style", "${_C_wind1}", "left", '-300px', { fromValue: '-146px'}], position: 133, duration: 0 },
                { id: "eid87", tween: [ "style", "${_C_wind1}", "left", '-442px', { fromValue: '-300px'}], position: 200, duration: 0 },
                { id: "eid88", tween: [ "style", "${_C_wind1}", "left", '-600px', { fromValue: '-450px'}], position: 467, duration: 0 },
                { id: "eid89", tween: [ "style", "${_C_wind1}", "left", '-748px', { fromValue: '-600px'}], position: 533, duration: 0 },
                { id: "eid90", tween: [ "style", "${_C_wind1}", "left", '-900px', { fromValue: '-750px'}], position: 600, duration: 0 },
                { id: "eid92", tween: [ "style", "${_C_wind1}", "left", '-1200px', { fromValue: '-1050px'}], position: 667, duration: 0 },
                { id: "eid113", tween: [ "style", "${_C_wind1}", "display", 'none', { fromValue: 'block'}], position: 867, duration: 0 }            ]
        }
    }
},
"C_wind3": {
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
                    rect: ['0px', '0px', '1350px', '558px', 'auto', 'auto'],
                    id: 'C_wind3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/C_wind3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '1400px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '150px']
            ],
            "${_C_wind3}": [
                ["style", "top", '883px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
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
                "loop": 0,
                "fly": 467
            },
            timeline: [
                { id: "eid99", tween: [ "style", "${_C_wind3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_C_wind3}", "left", '-146px', { fromValue: '0px'}], position: 67, duration: 0 },
                { id: "eid101", tween: [ "style", "${_C_wind3}", "left", '-300px', { fromValue: '-146px'}], position: 133, duration: 0 },
                { id: "eid102", tween: [ "style", "${_C_wind3}", "left", '-442px', { fromValue: '-300px'}], position: 200, duration: 0 },
                { id: "eid103", tween: [ "style", "${_C_wind3}", "left", '-590px', { fromValue: '-442px'}], position: 467, duration: 0 },
                { id: "eid104", tween: [ "style", "${_C_wind3}", "left", '-740px', { fromValue: '-600px'}], position: 533, duration: 0 },
                { id: "eid105", tween: [ "style", "${_C_wind3}", "left", '-888px', { fromValue: '-750px'}], position: 600, duration: 0 },
                { id: "eid106", tween: [ "style", "${_C_wind3}", "left", '-1200px', { fromValue: '-900px'}], position: 667, duration: 0 },
                { id: "eid128", tween: [ "style", "${_C_wind3}", "opacity", '0', { fromValue: '1'}], position: 467, duration: 266, easing: "easeInQuart" },
                { id: "eid107", tween: [ "style", "${_C_wind3}", "top", '883px', { fromValue: '883px'}], position: 0, duration: 0 },
                { id: "eid117", tween: [ "style", "${_C_wind3}", "top", '853px', { fromValue: '883px'}], position: 467, duration: 0, easing: "easeInQuart" },
                { id: "eid118", tween: [ "style", "${_C_wind3}", "top", '668px', { fromValue: '853px'}], position: 533, duration: 0, easing: "easeInQuart" },
                { id: "eid119", tween: [ "style", "${_C_wind3}", "top", '353px', { fromValue: '668px'}], position: 600, duration: 0, easing: "easeInQuart" },
                { id: "eid120", tween: [ "style", "${_C_wind3}", "top", '63px', { fromValue: '353px'}], position: 667, duration: 0, easing: "easeInQuart" },
                { id: "eid121", tween: [ "style", "${_C_wind3}", "top", '-293px', { fromValue: '63px'}], position: 733, duration: 0, easing: "easeInQuart" },
                { id: "eid126", tween: [ "style", "${_C_wind3}", "display", 'none', { fromValue: 'block'}], position: 800, duration: 0, easing: "easeInQuart" }            ]
        }
    }
},
"C_wind2": {
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
                    rect: ['0px', '0px', '1350px', '558px', 'auto', 'auto'],
                    id: 'C_wind2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/C_wind2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_C_wind2}": [
                ["style", "top", '848px'],
                ["style", "opacity", '1'],
                ["style", "left", '-7px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '1400px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '150px']
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
                "loop": 0,
                "fly": 467
            },
            timeline: [
                { id: "eid176", tween: [ "style", "${_C_wind2}", "top", '848px', { fromValue: '848px'}], position: 0, duration: 0, easing: "easeInQuart" },
                { id: "eid177", tween: [ "style", "${_C_wind2}", "top", '808px', { fromValue: '848px'}], position: 467, duration: 0, easing: "easeInQuart" },
                { id: "eid178", tween: [ "style", "${_C_wind2}", "top", '568px', { fromValue: '808px'}], position: 533, duration: 0, easing: "easeInQuart" },
                { id: "eid179", tween: [ "style", "${_C_wind2}", "top", '258px', { fromValue: '568px'}], position: 600, duration: 0, easing: "easeInQuart" },
                { id: "eid180", tween: [ "style", "${_C_wind2}", "top", '-16px', { fromValue: '258px'}], position: 667, duration: 0, easing: "easeInQuart" },
                { id: "eid181", tween: [ "style", "${_C_wind2}", "top", '-296px', { fromValue: '-16px'}], position: 733, duration: 0, easing: "easeInQuart" },
                { id: "eid155", tween: [ "style", "${_C_wind2}", "display", 'none', { fromValue: 'block'}], position: 800, duration: 0 },
                { id: "eid157", tween: [ "style", "${_C_wind2}", "left", '-7px', { fromValue: '-7px'}], position: 0, duration: 0 },
                { id: "eid158", tween: [ "style", "${_C_wind2}", "left", '-146px', { fromValue: '-7px'}], position: 67, duration: 0 },
                { id: "eid159", tween: [ "style", "${_C_wind2}", "left", '-300px', { fromValue: '-146px'}], position: 133, duration: 0 },
                { id: "eid160", tween: [ "style", "${_C_wind2}", "left", '-442px', { fromValue: '-300px'}], position: 200, duration: 0 },
                { id: "eid161", tween: [ "style", "${_C_wind2}", "left", '-600px', { fromValue: '-442px'}], position: 467, duration: 0 },
                { id: "eid162", tween: [ "style", "${_C_wind2}", "left", '-748px', { fromValue: '-600px'}], position: 533, duration: 0 },
                { id: "eid163", tween: [ "style", "${_C_wind2}", "left", '-900px', { fromValue: '-748px'}], position: 600, duration: 0 },
                { id: "eid164", tween: [ "style", "${_C_wind2}", "left", '-1200px', { fromValue: '-900px'}], position: 667, duration: 0 },
                { id: "eid156", tween: [ "style", "${_C_wind2}", "opacity", '0', { fromValue: '1'}], position: 466, duration: 267, easing: "easeInQuart" }            ]
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
})(jQuery, AdobeEdge, "GAME_3");
