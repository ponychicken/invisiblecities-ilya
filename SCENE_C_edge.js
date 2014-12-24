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
                rect: ['0', '0','2048px','1535px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paper_opaque.png",'0px','0px']
            },
            {
                id: 'backgrounds',
                type: 'rect',
                rect: ['-1104', '-80','auto','auto','auto', 'auto']
            },
            {
                id: 'FacePullWind',
                type: 'rect',
                rect: ['1', '262','auto','auto','auto', 'auto']
            },
            {
                id: 'house_2',
                type: 'image',
                rect: ['-348px', '895px','1031px','1562px','auto', 'auto'],
                clip: ['rect(0px 1031px 662px 324px)'],
                fill: ["rgba(0,0,0,0)",im+"house_2.png",'0px','0px']
            },
            {
                id: 'tree_1',
                type: 'image',
                rect: ['1434px', '1198px','579px','609px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tree_1.png",'0px','0px']
            },
            {
                id: 'BG_lantern',
                type: 'image',
                rect: ['274px', '834px','214px','1524px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
            },
            {
                id: 'BG_lanternCopy',
                type: 'image',
                rect: ['654px', '885px','174px','1236px','auto', 'auto'],
                opacity: 0.73983739837398,
                fill: ["rgba(0,0,0,0)",im+"BG_lantern.png",'0px','0px']
            },
            {
                id: 'text_1',
                display: 'none',
                type: 'rect',
                rect: ['386px', '491px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.76673','0.76673']]
            },
            {
                id: 'text_2',
                display: 'none',
                type: 'rect',
                rect: ['632', '592','auto','auto','auto', 'auto']
            },
            {
                id: 'text_3',
                display: 'none',
                type: 'rect',
                rect: ['823', '731','auto','auto','auto', 'auto']
            },
            {
                id: 'text_4',
                display: 'none',
                type: 'rect',
                rect: ['597px', '838px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.85299','0.85299']]
            },
            {
                id: 'text_5',
                display: 'none',
                type: 'rect',
                rect: ['669px', '952px','auto','auto','auto', 'auto'],
                transform: [[],['-1']]
            },
            {
                id: 'text_6',
                display: 'none',
                type: 'rect',
                rect: ['1244px', '1072px','auto','auto','auto', 'auto']
            },
            {
                id: 'dust_icon2',
                display: 'none',
                type: 'rect',
                rect: ['914', '246px','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle2',
                display: 'block',
                type: 'rect',
                rect: ['0px', '0px','2048px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'text_6',
                symbolName: 'text_6',
                autoPlay: {

                }
            },
            {
                id: 'backgrounds',
                symbolName: 'backgrounds',
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
                id: 'text_3',
                symbolName: 'text_3',
                autoPlay: {

                }
            },
            {
                id: 'dust_icon2',
                symbolName: 'dust_icon',
                autoPlay: {

                }
            },
            {
                id: 'FacePullWind',
                symbolName: 'FacePullWind',
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
                id: 'text_4',
                symbolName: 'text_4',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_BG_lanternCopy}": [
                ["style", "top", '1079px'],
                ["style", "height", '1236px'],
                ["style", "opacity", '0.73983739837398'],
                ["style", "left", '655px'],
                ["style", "width", '174px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "top", '0px'],
                ["style", "height", '1536px']
            ],
            "${_tree_1}": [
                ["style", "top", '1386px'],
                ["style", "height", '609px'],
                ["style", "left", '1435px'],
                ["style", "width", '579px']
            ],
            "${_backgrounds}": [
                ["style", "top", '-859px'],
                ["style", "left", '-1116px'],
                ["style", "clip", [48,3178,1203,1092], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_house_2}": [
                ["style", "top", '-257px'],
                ["style", "height", '1562px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-348px'],
                ["style", "clip", [0,1031,662,324], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1031px']
            ],
            "${_dust_icon2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "top", '226px']
            ],
            "${_text_5}": [
                ["style", "top", '952px'],
                ["style", "display", 'none'],
                ["style", "left", '669px'],
                ["transform", "rotateZ", '-1deg']
            ],
            "${_BG_lantern}": [
                ["style", "left", '275px'],
                ["style", "top", '958px']
            ],
            "${_FacePullWind}": [
                ["style", "top", '-606px'],
                ["style", "left", '0px']
            ],
            "${_text_6}": [
                ["style", "top", '1072px'],
                ["style", "opacity", '1'],
                ["style", "left", '1244px'],
                ["style", "display", 'none']
            ],
            "${_text_4}": [
                ["style", "top", '838px'],
                ["transform", "scaleY", '0.85299'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "left", '597px'],
                ["transform", "scaleX", '0.85299']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_text_1}": [
                ["style", "top", '491px'],
                ["transform", "scaleY", '0.76673'],
                ["transform", "rotateZ", '5deg'],
                ["transform", "scaleX", '0.76673'],
                ["style", "left", '386px'],
                ["style", "display", 'none']
            ],
            "${_text_3}": [
                ["style", "top", '728px'],
                ["style", "left", '419px'],
                ["style", "display", 'none']
            ],
            "${_text_2}": [
                ["style", "display", 'none'],
                ["style", "top", '609px'],
                ["style", "left", '545px'],
                ["transform", "rotateZ", '1deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 50437,
            autoPlay: true,
            labels: {
                "button": 5000,
                "in": 7867,
                "off": 12753
            },
            timeline: [
                { id: "eid191", tween: [ "style", "${_FacePullWind}", "left", '1px', { fromValue: '0px'}], position: 9292, duration: 2486, easing: "easeInOutQuad" },
                { id: "eid394", tween: [ "style", "${_FacePullWind}", "left", '0px', { fromValue: '1px'}], position: 11778, duration: 121, easing: "easeInOutQuad" },
                { id: "eid189", tween: [ "style", "${_backgrounds}", "top", '-64px', { fromValue: '-859px'}], position: 9292, duration: 2486, easing: "easeInOutQuad" },
                { id: "eid188", tween: [ "style", "${_FacePullWind}", "top", '262px', { fromValue: '-606px'}], position: 9292, duration: 2486, easing: "easeInOutQuad" },
                { id: "eid396", tween: [ "style", "${_BG_lantern}", "left", '275px', { fromValue: '275px'}], position: 11899, duration: 0, easing: "easeInOutQuad" },
                { id: "eid193", tween: [ "style", "${_dust_icon2}", "display", 'block', { fromValue: 'none'}], position: 5187, duration: 0, easing: "easeInOutQuad" },
                { id: "eid197", tween: [ "style", "${_dust_icon2}", "display", 'none', { fromValue: 'block'}], position: 8504, duration: 0, easing: "easeInOutQuad" },
                { id: "eid277", tween: [ "style", "${_text_3}", "display", 'block', { fromValue: 'none'}], position: 1783, duration: 0, easing: "easeInOutBounce" },
                { id: "eid347", tween: [ "style", "${_text_3}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid187", tween: [ "style", "${_backgrounds}", "left", '-1116px', { fromValue: '-1116px'}], position: 11777, duration: 0, easing: "easeInOutQuad" },
                { id: "eid378", tween: [ "style", "${_text_6}", "opacity", '0', { fromValue: '1'}], position: 7867, duration: 383, easing: "easeInOutQuad" },
                { id: "eid224", tween: [ "style", "${_text_1}", "display", 'block', { fromValue: 'none'}], position: 1783, duration: 0, easing: "easeInOutQuad" },
                { id: "eid349", tween: [ "style", "${_text_1}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid346", tween: [ "style", "${_text_6}", "display", 'block', { fromValue: 'none'}], position: 1783, duration: 0, easing: "easeInOutBounce" },
                { id: "eid374", tween: [ "style", "${_text_6}", "display", 'none', { fromValue: 'block'}], position: 8371, duration: 0, easing: "easeInOutQuad" },
                { id: "eid393", tween: [ "style", "${_BG_lantern}", "top", '2582px', { fromValue: '958px'}], position: 9292, duration: 2607, easing: "easeInOutQuad" },
                { id: "eid395", tween: [ "style", "${_BG_lanternCopy}", "left", '655px', { fromValue: '655px'}], position: 11899, duration: 0, easing: "easeInOutQuad" },
                { id: "eid397", tween: [ "style", "${_tree_1}", "left", '1435px', { fromValue: '1435px'}], position: 11899, duration: 0, easing: "easeInOutQuad" },
                { id: "eid345", tween: [ "style", "${_text_5}", "display", 'block', { fromValue: 'none'}], position: 1783, duration: 0, easing: "easeInOutBounce" },
                { id: "eid372", tween: [ "style", "${_text_5}", "display", 'none', { fromValue: 'block'}], position: 7867, duration: 0, easing: "easeInOutQuad" },
                { id: "eid389", tween: [ "style", "${_BG_lanternCopy}", "top", '2633px', { fromValue: '1079px'}], position: 9292, duration: 2607, easing: "easeInOutQuad" },
                { id: "eid200", tween: [ "style", "${_dust_icon2}", "opacity", '1', { fromValue: '0'}], position: 5187, duration: 504, easing: "easeInOutQuad" },
                { id: "eid201", tween: [ "style", "${_dust_icon2}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 504, easing: "easeInOutQuad" },
                { id: "eid190", tween: [ "style", "${_house_2}", "top", '895px', { fromValue: '-257px'}], position: 9292, duration: 2486, easing: "easeInOutQuad" },
                { id: "eid185", tween: [ "style", "${_house_2}", "left", '-348px', { fromValue: '-348px'}], position: 11777, duration: 0, easing: "easeInOutQuad" },
                { id: "eid247", tween: [ "transform", "${_text_1}", "rotateZ", '5deg', { fromValue: '5deg'}], position: 1783, duration: 0, easing: "easeInOutBounce" },
                { id: "eid180", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid181", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 19250, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid252", tween: [ "style", "${_text_2}", "display", 'block', { fromValue: 'none'}], position: 1783, duration: 0, easing: "easeInOutBounce" },
                { id: "eid348", tween: [ "style", "${_text_2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid344", tween: [ "style", "${_text_4}", "display", 'block', { fromValue: 'none'}], position: 1783, duration: 0, easing: "easeInOutBounce" },
                { id: "eid373", tween: [ "style", "${_text_4}", "display", 'none', { fromValue: 'block'}], position: 7867, duration: 0, easing: "easeInOutQuad" },
                { id: "eid192", tween: [ "style", "${_dust_icon2}", "top", '226px', { fromValue: '226px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid391", tween: [ "style", "${_tree_1}", "top", '2946px', { fromValue: '1386px'}], position: 9292, duration: 2607, easing: "easeInOutQuad" },
                { id: "eid173", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeInQuad" },
                { id: "eid179", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 12753, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"H_Facepull": {
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
                    rect: ['0px', '0px', '3200px', '845px', 'auto', 'auto'],
                    id: 'H_FacePull1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/H_FacePull1.png', '0px', '0px']
                },
                {
                    rect: ['0', '-4', '3200px', '845px', 'auto', 'auto'],
                    id: 'H_FacePull22',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/H_FacePull2.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '3200px', '845px', 'auto', 'auto'],
                    id: 'H_FacePull32',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/H_FacePull3.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '3200px', '845px', 'auto', 'auto'],
                    id: 'H_FacePull42',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/H_FacePull4.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '3200px', '845px', 'auto', 'auto'],
                    id: 'H_FacePull52',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/H_FacePull5.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '3200px', '845px', 'auto', 'auto'],
                    id: 'H_FacePull62',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/H_FacePull6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_H_FacePull1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_H_FacePull42}": [
                ["style", "display", 'none'],
                ["style", "left", '30px'],
                ["style", "top", '10px']
            ],
            "${symbolSelector}": [
                ["style", "height", '845px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '800px']
            ],
            "${_H_FacePull22}": [
                ["style", "top", '12px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${_H_FacePull52}": [
                ["style", "display", 'none'],
                ["style", "left", '10px'],
                ["style", "top", '0px']
            ],
            "${_H_FacePull32}": [
                ["style", "top", '10px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${_H_FacePull62}": [
                ["style", "display", 'none'],
                ["style", "left", '-20px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2042,
            autoPlay: false,
            labels: {
                "start": 0,
                "loop": 1708
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_H_FacePull1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_H_FacePull1}", "left", '-804px', { fromValue: '0px'}], position: 85, duration: 0 },
                { id: "eid9", tween: [ "style", "${_H_FacePull1}", "left", '-1592px', { fromValue: '-808px'}], position: 167, duration: 0 },
                { id: "eid10", tween: [ "style", "${_H_FacePull1}", "left", '-2413px', { fromValue: '-1612px'}], position: 250, duration: 0 },
                { id: "eid46", tween: [ "style", "${_H_FacePull42}", "left", '30px', { fromValue: '30px'}], position: 1042, duration: 0 },
                { id: "eid48", tween: [ "style", "${_H_FacePull42}", "left", '-792px', { fromValue: '30px'}], position: 1125, duration: 0 },
                { id: "eid49", tween: [ "style", "${_H_FacePull42}", "left", '-1568px', { fromValue: '-800px'}], position: 1208, duration: 0 },
                { id: "eid50", tween: [ "style", "${_H_FacePull42}", "left", '-2407px', { fromValue: '-1578px'}], position: 1292, duration: 0 },
                { id: "eid61", tween: [ "style", "${_H_FacePull62}", "left", '-20px', { fromValue: '-20px'}], position: 1708, duration: 0 },
                { id: "eid63", tween: [ "style", "${_H_FacePull62}", "left", '-831px', { fromValue: '-20px'}], position: 1792, duration: 0 },
                { id: "eid64", tween: [ "style", "${_H_FacePull62}", "left", '-1583px', { fromValue: '-831px'}], position: 1875, duration: 0 },
                { id: "eid65", tween: [ "style", "${_H_FacePull62}", "left", '-2398px', { fromValue: '-1568px'}], position: 1958, duration: 0 },
                { id: "eid60", tween: [ "style", "${_H_FacePull62}", "display", 'block', { fromValue: 'none'}], position: 1708, duration: 0 },
                { id: "eid39", tween: [ "style", "${_H_FacePull32}", "top", '10px', { fromValue: '10px'}], position: 667, duration: 0 },
                { id: "eid30", tween: [ "style", "${_H_FacePull22}", "display", 'block', { fromValue: 'none'}], position: 333, duration: 0 },
                { id: "eid37", tween: [ "style", "${_H_FacePull22}", "display", 'none', { fromValue: 'block'}], position: 667, duration: 0 },
                { id: "eid55", tween: [ "style", "${_H_FacePull52}", "top", '0px', { fromValue: '0px'}], position: 1375, duration: 0 },
                { id: "eid66", tween: [ "style", "${_H_FacePull52}", "top", '20px', { fromValue: '0px'}], position: 1458, duration: 0 },
                { id: "eid67", tween: [ "style", "${_H_FacePull52}", "top", '0px', { fromValue: '20px'}], position: 1542, duration: 0 },
                { id: "eid68", tween: [ "style", "${_H_FacePull52}", "top", '-10px', { fromValue: '0px'}], position: 1625, duration: 0 },
                { id: "eid53", tween: [ "style", "${_H_FacePull52}", "display", 'block', { fromValue: 'none'}], position: 1375, duration: 0 },
                { id: "eid59", tween: [ "style", "${_H_FacePull52}", "display", 'none', { fromValue: 'block'}], position: 1708, duration: 0 },
                { id: "eid28", tween: [ "style", "${_H_FacePull22}", "left", '15px', { fromValue: '15px'}], position: 333, duration: 0 },
                { id: "eid32", tween: [ "style", "${_H_FacePull22}", "left", '-803px', { fromValue: '11px'}], position: 417, duration: 0 },
                { id: "eid33", tween: [ "style", "${_H_FacePull22}", "left", '-1584px', { fromValue: '-813px'}], position: 500, duration: 0 },
                { id: "eid34", tween: [ "style", "${_H_FacePull22}", "left", '-2412px', { fromValue: '-1594px'}], position: 583, duration: 0 },
                { id: "eid45", tween: [ "style", "${_H_FacePull42}", "display", 'block', { fromValue: 'none'}], position: 1042, duration: 0 },
                { id: "eid52", tween: [ "style", "${_H_FacePull42}", "display", 'none', { fromValue: 'block'}], position: 1375, duration: 0 },
                { id: "eid38", tween: [ "style", "${_H_FacePull32}", "display", 'block', { fromValue: 'none'}], position: 667, duration: 0 },
                { id: "eid44", tween: [ "style", "${_H_FacePull32}", "display", 'none', { fromValue: 'block'}], position: 1042, duration: 0 },
                { id: "eid40", tween: [ "style", "${_H_FacePull32}", "left", '15px', { fromValue: '15px'}], position: 667, duration: 0 },
                { id: "eid41", tween: [ "style", "${_H_FacePull32}", "left", '-810px', { fromValue: '15px'}], position: 750, duration: 0 },
                { id: "eid42", tween: [ "style", "${_H_FacePull32}", "left", '-1581px', { fromValue: '-810px'}], position: 833, duration: 0 },
                { id: "eid43", tween: [ "style", "${_H_FacePull32}", "left", '-2405px', { fromValue: '-1581px'}], position: 917, duration: 0 },
                { id: "eid31", tween: [ "style", "${_H_FacePull1}", "display", 'none', { fromValue: 'block'}], position: 333, duration: 0 },
                { id: "eid47", tween: [ "style", "${_H_FacePull42}", "top", '10px', { fromValue: '10px'}], position: 1042, duration: 0 },
                { id: "eid51", tween: [ "style", "${_H_FacePull42}", "top", '8px', { fromValue: '10px'}], position: 1125, duration: 0 },
                { id: "eid54", tween: [ "style", "${_H_FacePull52}", "left", '10px', { fromValue: '10px'}], position: 1375, duration: 0 },
                { id: "eid56", tween: [ "style", "${_H_FacePull52}", "left", '-795px', { fromValue: '10px'}], position: 1458, duration: 0 },
                { id: "eid57", tween: [ "style", "${_H_FacePull52}", "left", '-1598px', { fromValue: '-775px'}], position: 1542, duration: 0 },
                { id: "eid58", tween: [ "style", "${_H_FacePull52}", "left", '-2369px', { fromValue: '-1608px'}], position: 1625, duration: 0 },
                { id: "eid29", tween: [ "style", "${_H_FacePull22}", "top", '12px', { fromValue: '12px'}], position: 333, duration: 0 },
                { id: "eid35", tween: [ "style", "${_H_FacePull22}", "top", '8px', { fromValue: '12px'}], position: 417, duration: 0 },
                { id: "eid36", tween: [ "style", "${_H_FacePull22}", "top", '14px', { fromValue: '8px'}], position: 500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_H_FacePull1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_H_FacePull1}", "top", '-4px', { fromValue: '0px'}], position: 250, duration: 0 },
                { id: "eid62", tween: [ "style", "${_H_FacePull62}", "top", '0px', { fromValue: '0px'}], position: 1708, duration: 0 },
                { id: "eid70", tween: [ "style", "${_H_FacePull62}", "top", '1px', { fromValue: '0px'}], position: 1875, duration: 0 },
                { id: "eid72", tween: [ "style", "${_H_FacePull62}", "top", '-9px', { fromValue: '1px'}], position: 1958, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_cloud4.png', '0px', '0px']
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
                ["transform", "scaleX", '1'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '242px']
            ],
            "${_cloud_22}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '84px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '574px']
            ],
            "${symbolSelector}": [
                ["style", "height", '302px'],
                ["style", "width", '1104px']
            ],
            "${_cloud_12Copy}": [
                ["transform", "scaleX", '-1'],
                ["style", "top", '16px'],
                ["style", "left", '470px'],
                ["transform", "scaleY", '1']
            ],
            "${_cloud_12}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '38px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '30px']
            ],
            "${_cloud_22Copy}": [
                ["transform", "scaleX", '-1'],
                ["style", "top", '102px'],
                ["style", "left", '142px'],
                ["transform", "scaleY", '1']
            ],
            "${_cloud_3Copy}": [
                ["transform", "scaleX", '-1'],
                ["style", "top", '100px'],
                ["style", "left", '362px'],
                ["transform", "scaleY", '1']
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
                { id: "eid2192", tween: [ "transform", "${_cloud_12}", "scaleX", '1.14999', { fromValue: '1'}], position: 0, duration: 2000 },
                { id: "eid2193", tween: [ "transform", "${_cloud_12}", "scaleX", '0.9', { fromValue: '1.14999'}], position: 2000, duration: 2000 },
                { id: "eid2194", tween: [ "transform", "${_cloud_12}", "scaleX", '1.14999', { fromValue: '0.9'}], position: 4000, duration: 3000 },
                { id: "eid2195", tween: [ "transform", "${_cloud_12}", "scaleX", '1', { fromValue: '1.14999'}], position: 7000, duration: 3000 },
                { id: "eid2169", tween: [ "transform", "${_cloud_22Copy}", "scaleY", '1', { fromValue: '1'}], position: 22, duration: 0 },
                { id: "eid2178", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-1.15', { fromValue: '-1'}], position: 0, duration: 2000 },
                { id: "eid2184", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-0.9', { fromValue: '-1.15'}], position: 2000, duration: 2000 },
                { id: "eid2186", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-1.15', { fromValue: '-0.9'}], position: 4000, duration: 3000 },
                { id: "eid2189", tween: [ "transform", "${_cloud_12Copy}", "scaleX", '-1', { fromValue: '-1.15'}], position: 7000, duration: 3000 },
                { id: "eid2170", tween: [ "transform", "${_cloud_12}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid2171", tween: [ "transform", "${_cloud_22}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
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
                { id: "eid876", tween: [ "style", "${_cloud_3}", "left", '252px', { fromValue: '242px'}], position: 0, duration: 0 },
                { id: "eid891", tween: [ "style", "${_cloud_3}", "left", '262px', { fromValue: '252px'}], position: 304, duration: 0, easing: "easeInOutQuad" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_cloud4.png', '0px', '0px']
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_cloud4.png', '0px', '0px']
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
},
"backgrounds": {
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
                    rect: ['1067px', '308px', '1096px', '593px', 'auto', 'auto'],
                    id: 'houses_bg_1',
                    transform: [[0, 0], [], [], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/houses_bg_1.png', '0px', '0px']
                },
                {
                    id: 'cloud_clusterCopy2',
                    type: 'rect',
                    rect: ['1104px', '80px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'house_1',
                    type: 'image',
                    rect: ['1004px', '504px', '372px', '699px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/house_1.png', '0px', '0px']
                },
                {
                    rect: ['2399px', '791px', '402px', '507px', 'auto', 'auto'],
                    id: 'house_3',
                    transform: [[0, 0], [], [], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/house_3.png', '0px', '0px']
                },
                {
                    id: 'cloud_clusterCopy',
                    type: 'rect',
                    rect: ['1104px', '80px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_cluster',
                    type: 'rect',
                    rect: ['1104px', '80px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'cloud_clusterCopy',
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
                id: 'cloud_cluster',
                symbolName: 'cloud_cluster',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_houses_bg_1}": [
                ["style", "top", '308px'],
                ["style", "left", '1067px'],
                ["transform", "scaleX", '-1']
            ],
            "${_cloud_clusterCopy2}": [
                ["style", "top", '422px'],
                ["transform", "scaleY", '0.54347'],
                ["transform", "scaleX", '0.54347'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1820px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1203px'],
                ["style", "width", '3730px']
            ],
            "${_cloud_clusterCopy}": [
                ["style", "top", '123px'],
                ["transform", "scaleY", '0.6413'],
                ["transform", "scaleX", '-0.6413'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1120px']
            ],
            "${_house_1}": [
                ["style", "left", '1004px'],
                ["style", "top", '504px']
            ],
            "${_cloud_cluster}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2236px']
            ],
            "${_house_3}": [
                ["transform", "scaleX", '-1'],
                ["style", "left", '2399px'],
                ["style", "top", '791px']
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
                { id: "eid89", tween: [ "transform", "${_cloud_clusterCopy2}", "scaleY", '0.54347', { fromValue: '0.54347'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "transform", "${_cloud_clusterCopy}", "scaleY", '0.6413', { fromValue: '0.6413'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_cloud_clusterCopy}", "left", '199px', { fromValue: '1120px'}], position: 0, duration: 6666 },
                { id: "eid106", tween: [ "style", "${_cloud_clusterCopy}", "left", '1120px', { fromValue: '2962px'}], position: 7594, duration: 12406 },
                { id: "eid98", tween: [ "style", "${_cloud_clusterCopy2}", "opacity", '0.50487803685956', { fromValue: '0.7'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_cloud_clusterCopy2}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_cloud_cluster}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_cloud_cluster}", "opacity", '0.50487803685956', { fromValue: '0.7'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_cloud_clusterCopy}", "top", '123px', { fromValue: '123px'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_cloud_clusterCopy}", "opacity", '0.50487803685956', { fromValue: '0.7'}], position: 0, duration: 0 },
                { id: "eid107", tween: [ "style", "${_cloud_clusterCopy2}", "left", '2870px', { fromValue: '1820px'}], position: 0, duration: 8000 },
                { id: "eid108", tween: [ "style", "${_cloud_clusterCopy2}", "left", '1820px', { fromValue: '244px'}], position: 9000, duration: 11000 },
                { id: "eid99", tween: [ "style", "${_cloud_cluster}", "left", '3724px', { fromValue: '2236px'}], position: 0, duration: 7594 },
                { id: "eid102", tween: [ "style", "${_cloud_cluster}", "left", '2236px', { fromValue: '-196px'}], position: 8464, duration: 11536 },
                { id: "eid86", tween: [ "transform", "${_cloud_clusterCopy}", "scaleX", '-0.6413', { fromValue: '-0.6413'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "transform", "${_cloud_clusterCopy2}", "scaleX", '0.54347', { fromValue: '0.54347'}], position: 0, duration: 0 }            ]
        }
    }
},
"backgrounds_1": {
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
                    id: 'cloud_clusterCopy2',
                    type: 'rect',
                    rect: ['1104px', '80px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_clusterCopy',
                    type: 'rect',
                    rect: ['1104px', '80px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cloud_cluster',
                    type: 'rect',
                    rect: ['1104px', '80px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'cloud_clusterCopy',
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
                id: 'cloud_cluster',
                symbolName: 'cloud_cluster',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_cloud_clusterCopy}": [
                ["style", "top", '123px'],
                ["transform", "scaleY", '0.6413'],
                ["transform", "scaleX", '-0.6413'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1120px']
            ],
            "${_cloud_cluster}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '2236px']
            ],
            "${_cloud_clusterCopy2}": [
                ["style", "top", '422px'],
                ["transform", "scaleY", '0.54347'],
                ["transform", "scaleX", '0.54347'],
                ["style", "opacity", '0.7'],
                ["style", "left", '1820px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1203px'],
                ["style", "width", '3730px']
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
                { id: "eid89", tween: [ "transform", "${_cloud_clusterCopy2}", "scaleY", '0.54347', { fromValue: '0.54347'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_cloud_clusterCopy}", "top", '123px', { fromValue: '123px'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_cloud_clusterCopy}", "left", '199px', { fromValue: '1120px'}], position: 0, duration: 6666 },
                { id: "eid106", tween: [ "style", "${_cloud_clusterCopy}", "left", '1120px', { fromValue: '2962px'}], position: 7594, duration: 12406 },
                { id: "eid91", tween: [ "style", "${_cloud_clusterCopy2}", "opacity", '0.7', { fromValue: '0.7'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_cloud_clusterCopy2}", "opacity", '0.50487803685956', { fromValue: '0.7'}], position: 1000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_cloud_clusterCopy2}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_cloud_cluster}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_cloud_cluster}", "opacity", '0.7', { fromValue: '0.7'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_cloud_cluster}", "opacity", '0.50487803685956', { fromValue: '0.7'}], position: 1000, duration: 0 },
                { id: "eid87", tween: [ "transform", "${_cloud_clusterCopy}", "scaleY", '0.6413', { fromValue: '0.6413'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_cloud_clusterCopy}", "opacity", '0.7', { fromValue: '0.7'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_cloud_clusterCopy}", "opacity", '0.50487803685956', { fromValue: '0.7'}], position: 1000, duration: 0 },
                { id: "eid107", tween: [ "style", "${_cloud_clusterCopy2}", "left", '2870px', { fromValue: '1820px'}], position: 0, duration: 8000 },
                { id: "eid108", tween: [ "style", "${_cloud_clusterCopy2}", "left", '1820px', { fromValue: '244px'}], position: 9000, duration: 11000 },
                { id: "eid99", tween: [ "style", "${_cloud_cluster}", "left", '3724px', { fromValue: '2236px'}], position: 0, duration: 7594 },
                { id: "eid102", tween: [ "style", "${_cloud_cluster}", "left", '2236px', { fromValue: '-196px'}], position: 8464, duration: 11536 },
                { id: "eid86", tween: [ "transform", "${_cloud_clusterCopy}", "scaleX", '-0.6413', { fromValue: '-0.6413'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "transform", "${_cloud_clusterCopy2}", "scaleX", '0.54347', { fromValue: '0.54347'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/wind.png', '0px', '0px']
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '770px']
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
"FacePullWind": {
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
                    type: 'audio',
                    source: ['media/windloop.mp3'],
                    id: 'windloop',
                    rect: ['325', '400', '320px', '45px', 'auto', 'auto'],
                    tag: 'audio'
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'wind2',
                    rect: ['-1px', '-262px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'wind2Copy',
                    rect: ['-1px', '-262px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'H_Facepull',
                    type: 'rect',
                    rect: ['-609px', '-20px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['-66px', '-274px', '1040px', '1456px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'wind2Copy',
                symbolName: 'wind',
                autoPlay: {

               }
            },
            {
                id: 'wind2',
                symbolName: 'wind',
                autoPlay: {

               }
            },
            {
                id: 'H_Facepull',
                symbolName: 'H_Facepull',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_H_Facepull}": [
                ["motion", "location", '-415.24609375px 397.39620838995px']
            ],
            "${_wind2Copy}": [
                ["style", "top", '-107px'],
                ["transform", "scaleX", '1.1652'],
                ["transform", "scaleY", '1.1652'],
                ["transform", "rotateZ", '-83deg'],
                ["style", "display", 'block'],
                ["subproperty", "filter.blur", '3px'],
                ["style", "left", '1107px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '1804px'],
                ["style", "width", '2291px']
            ],
            "${_wind2}": [
                ["style", "top", '317px'],
                ["transform", "scaleX", '1.1652'],
                ["transform", "scaleY", '1.1652'],
                ["transform", "rotateZ", '-46deg'],
                ["style", "display", 'block'],
                ["subproperty", "filter.blur", '3px'],
                ["style", "left", '855px'],
                ["style", "opacity", '0']
            ],
            "${_Rectangle}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_windloop}": [
                ["property", "volume", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 50437,
            autoPlay: true,
            labels: {
                "start": 333
            },
            timeline: [
                { id: "eid158", tween: [ "style", "${_wind2Copy}", "top", '90px', { fromValue: '-107px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid151", tween: [ "style", "${_wind2Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid140", tween: [ "style", "${_wind2Copy}", "display", 'block', { fromValue: 'block'}], position: 1789, duration: 0 },
                { id: "eid153", tween: [ "transform", "${_wind2}", "rotateZ", '-34deg', { fromValue: '-46deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid155", tween: [ "style", "${_wind2}", "top", '421px', { fromValue: '317px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid131", tween: [ "transform", "${_wind2}", "scaleY", '1.1652', { fromValue: '1.1652'}], position: 0, duration: 0 },
                { id: "eid154", tween: [ "style", "${_wind2}", "left", '715px', { fromValue: '855px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid381", tween: [ "property", "${_windloop}", "volume", '0.6', { fromValue: '0'}], position: 2193, duration: 807 },
                { id: "eid383", tween: [ "property", "${_windloop}", "volume", '0', { fromValue: '0.6'}], position: 7000, duration: 807 },
                { id: "eid167", tween: [ "style", "${_wind2}", "opacity", '0.2926830053329468', { fromValue: '0'}], position: 1789, duration: 744, easing: "easeInQuad" },
                { id: "eid166", tween: [ "style", "${_wind2Copy}", "opacity", '0.2926830053329468', { fromValue: '0'}], position: 1789, duration: 744, easing: "easeInQuad" },
                { id: "eid169", tween: [ "transform", "${_wind2Copy}", "scaleX", '1.1652', { fromValue: '1.1652'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid157", tween: [ "style", "${_wind2Copy}", "left", '987px', { fromValue: '1107px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid156", tween: [ "transform", "${_wind2Copy}", "rotateZ", '-67deg', { fromValue: '-83deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid134", tween: [ "transform", "${_wind2Copy}", "scaleY", '1.1652', { fromValue: '1.1652'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 333, duration: 0, easing: "easeInQuad" },
                { id: "eid152", tween: [ "style", "${_wind2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid141", tween: [ "style", "${_wind2}", "display", 'block', { fromValue: 'block'}], position: 1789, duration: 0 },
                { id: "eid76", tween: [ "motion", "${_H_Facepull}", [[-415.25, 397.4, 0, 0],[-293.22, 434.53, 59.57, 2.73, 226.28, 10.37],[-181.47, 395.61, 140.79, 46.13, 43.9, 14.38],[-112.41, 428.16, 71.1, 1.17, 173.08, 2.84],[-45.91, 410.42, 36.07, -13.17, 62.41, -22.78],[-10.94, 402.88, 175.32, 3.89, 33.96, 0.75],[145, 433.35, 410.07, 26.16, 188.15, 12],[317.56, 405.63, 155.29, 0.15, 136.46, 0.13],[400, 436.15, 0, 0]]], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid130", tween: [ "transform", "${_wind2}", "scaleX", '1.1652', { fromValue: '1.1652'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "subproperty", "${_wind2}", "filter.blur", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid170", tween: [ "subproperty", "${_wind2Copy}", "filter.blur", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid150", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_H_Facepull}', [] ], ""], position: 333.33333333333 },
                { id: "eid384", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_windloop}', [] ], ""], position: 2115.7696265832 }            ]
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
                    id: 'Text_A3',
                    type: 'image',
                    rect: ['0', '10px', '620px', '65px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_A3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text_A3}": [
                ["style", "height", '65px'],
                ["style", "opacity", '0'],
                ["style", "top", '10px'],
                ["style", "width", '620px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '620px']
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
                { id: "eid253", tween: [ "style", "${_Text_A3}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 452, easing: "easeInOutBounce" },
                { id: "eid254", tween: [ "style", "${_Text_A3}", "opacity", '0.21', { fromValue: '0.18'}], position: 452, duration: 129, easing: "easeInOutBounce" },
                { id: "eid255", tween: [ "style", "${_Text_A3}", "opacity", '0.24', { fromValue: '0.21'}], position: 581, duration: 140, easing: "easeOutBounce" },
                { id: "eid256", tween: [ "style", "${_Text_A3}", "opacity", '0.19', { fromValue: '0.24'}], position: 721, duration: 106, easing: "easeOutBounce" },
                { id: "eid257", tween: [ "style", "${_Text_A3}", "opacity", '0.16', { fromValue: '0.19'}], position: 827, duration: 61, easing: "easeOutBounce" },
                { id: "eid258", tween: [ "style", "${_Text_A3}", "opacity", '0.21', { fromValue: '0.16'}], position: 888, duration: 164, easing: "easeInOutBounce" },
                { id: "eid259", tween: [ "style", "${_Text_A3}", "opacity", '0.23', { fromValue: '0.21'}], position: 1052, duration: 67, easing: "easeInOutBounce" },
                { id: "eid260", tween: [ "style", "${_Text_A3}", "opacity", '0.25', { fromValue: '0.23'}], position: 1119, duration: 66, easing: "easeInOutBounce" },
                { id: "eid261", tween: [ "style", "${_Text_A3}", "opacity", '0.22', { fromValue: '0.25'}], position: 1185, duration: 200, easing: "easeInOutBounce" },
                { id: "eid262", tween: [ "style", "${_Text_A3}", "opacity", '0.18', { fromValue: '0.22'}], position: 1385, duration: 67, easing: "easeInOutBounce" },
                { id: "eid263", tween: [ "style", "${_Text_A3}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1585, duration: 96, easing: "easeInBounce" },
                { id: "eid264", tween: [ "style", "${_Text_A3}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1681, duration: 171, easing: "easeOutBounce" },
                { id: "eid265", tween: [ "style", "${_Text_A3}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1852, duration: 67, easing: "easeInOutBounce" },
                { id: "eid266", tween: [ "style", "${_Text_A3}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1919, duration: 34, easing: "easeInOutBounce" },
                { id: "eid267", tween: [ "style", "${_Text_A3}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1953, duration: 70, easing: "easeInOutBounce" },
                { id: "eid268", tween: [ "style", "${_Text_A3}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2023, duration: 55, easing: "easeInOutBounce" },
                { id: "eid269", tween: [ "style", "${_Text_A3}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2078, duration: 41, easing: "easeInOutBounce" },
                { id: "eid270", tween: [ "style", "${_Text_A3}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2119, duration: 38, easing: "easeInOutBounce" },
                { id: "eid271", tween: [ "style", "${_Text_A3}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2157, duration: 64, easing: "easeInOutBounce" },
                { id: "eid272", tween: [ "style", "${_Text_A3}", "opacity", '1', { fromValue: '0.500000'}], position: 2452, duration: 800, easing: "easeInOutBounce" },
                { id: "eid273", tween: [ "style", "${_Text_A3}", "opacity", '1', { fromValue: '1'}], position: 3452, duration: 0, easing: "easeInOutBounce" },
                { id: "eid274", tween: [ "style", "${_Text_A3}", "opacity", '0', { fromValue: '0.5'}], position: 3652, duration: 481, easing: "easeInOutBounce" }            ]
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
                    id: 'Text_A5',
                    type: 'image',
                    rect: ['0', '-3px', '1075px', '77px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_A5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text_A5}": [
                ["style", "height", '77px'],
                ["style", "opacity", '0'],
                ["style", "top", '-3px'],
                ["style", "width", '1075px']
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
                { id: "eid300", tween: [ "style", "${_Text_A5}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid301", tween: [ "style", "${_Text_A5}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid302", tween: [ "style", "${_Text_A5}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid303", tween: [ "style", "${_Text_A5}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid304", tween: [ "style", "${_Text_A5}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid305", tween: [ "style", "${_Text_A5}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid306", tween: [ "style", "${_Text_A5}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid307", tween: [ "style", "${_Text_A5}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid308", tween: [ "style", "${_Text_A5}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid309", tween: [ "style", "${_Text_A5}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid310", tween: [ "style", "${_Text_A5}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid311", tween: [ "style", "${_Text_A5}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid312", tween: [ "style", "${_Text_A5}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid313", tween: [ "style", "${_Text_A5}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid314", tween: [ "style", "${_Text_A5}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid315", tween: [ "style", "${_Text_A5}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid316", tween: [ "style", "${_Text_A5}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid317", tween: [ "style", "${_Text_A5}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid318", tween: [ "style", "${_Text_A5}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid319", tween: [ "style", "${_Text_A5}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid320", tween: [ "style", "${_Text_A5}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid321", tween: [ "style", "${_Text_A5}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/bText_83.png', '0px', '0px']
                },
                {
                    id: 'Text_A4',
                    type: 'image',
                    rect: ['10px', '0', '1167px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_A4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text_A4}": [
                ["style", "height", '80px'],
                ["style", "opacity", '0'],
                ["style", "left", '10px'],
                ["style", "width", '1167px']
            ],
            "${_bText_8}": [
                ["style", "top", '-1px'],
                ["style", "height", '98px'],
                ["style", "opacity", '0'],
                ["style", "left", '6px'],
                ["style", "width", '1473px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1170px']
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
                { id: "eid278", tween: [ "style", "${_Text_A4}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid279", tween: [ "style", "${_Text_A4}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid280", tween: [ "style", "${_Text_A4}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid281", tween: [ "style", "${_Text_A4}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid282", tween: [ "style", "${_Text_A4}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid283", tween: [ "style", "${_Text_A4}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid284", tween: [ "style", "${_Text_A4}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid285", tween: [ "style", "${_Text_A4}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid286", tween: [ "style", "${_Text_A4}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid287", tween: [ "style", "${_Text_A4}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid288", tween: [ "style", "${_Text_A4}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid289", tween: [ "style", "${_Text_A4}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid290", tween: [ "style", "${_Text_A4}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid291", tween: [ "style", "${_Text_A4}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid292", tween: [ "style", "${_Text_A4}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid293", tween: [ "style", "${_Text_A4}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid294", tween: [ "style", "${_Text_A4}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid295", tween: [ "style", "${_Text_A4}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid296", tween: [ "style", "${_Text_A4}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid297", tween: [ "style", "${_Text_A4}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid298", tween: [ "style", "${_Text_A4}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid299", tween: [ "style", "${_Text_A4}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/bText_63.png', '0px', '0px']
                },
                {
                    id: 'Text_A2',
                    type: 'image',
                    rect: ['0', '0', '766px', '87px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_A2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text_A2}": [
                ["style", "height", '87px'],
                ["style", "opacity", '0'],
                ["style", "width", '766px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '770px']
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
                { id: "eid225", tween: [ "style", "${_Text_A2}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 482, easing: "easeInOutBounce" },
                { id: "eid226", tween: [ "style", "${_Text_A2}", "opacity", '0.21', { fromValue: '0.18'}], position: 482, duration: 129, easing: "easeInOutBounce" },
                { id: "eid227", tween: [ "style", "${_Text_A2}", "opacity", '0.24', { fromValue: '0.21'}], position: 611, duration: 140, easing: "easeOutBounce" },
                { id: "eid228", tween: [ "style", "${_Text_A2}", "opacity", '0.19', { fromValue: '0.24'}], position: 751, duration: 106, easing: "easeOutBounce" },
                { id: "eid229", tween: [ "style", "${_Text_A2}", "opacity", '0.16', { fromValue: '0.19'}], position: 857, duration: 61, easing: "easeOutBounce" },
                { id: "eid230", tween: [ "style", "${_Text_A2}", "opacity", '0.21', { fromValue: '0.16'}], position: 918, duration: 164, easing: "easeInOutBounce" },
                { id: "eid231", tween: [ "style", "${_Text_A2}", "opacity", '0.23', { fromValue: '0.21'}], position: 1082, duration: 67, easing: "easeInOutBounce" },
                { id: "eid232", tween: [ "style", "${_Text_A2}", "opacity", '0.25', { fromValue: '0.23'}], position: 1149, duration: 66, easing: "easeInOutBounce" },
                { id: "eid233", tween: [ "style", "${_Text_A2}", "opacity", '0.22', { fromValue: '0.25'}], position: 1215, duration: 200, easing: "easeInOutBounce" },
                { id: "eid234", tween: [ "style", "${_Text_A2}", "opacity", '0.18', { fromValue: '0.22'}], position: 1415, duration: 67, easing: "easeInOutBounce" },
                { id: "eid235", tween: [ "style", "${_Text_A2}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1615, duration: 96, easing: "easeInBounce" },
                { id: "eid236", tween: [ "style", "${_Text_A2}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1711, duration: 171, easing: "easeOutBounce" },
                { id: "eid237", tween: [ "style", "${_Text_A2}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1882, duration: 67, easing: "easeInOutBounce" },
                { id: "eid238", tween: [ "style", "${_Text_A2}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1949, duration: 34, easing: "easeInOutBounce" },
                { id: "eid239", tween: [ "style", "${_Text_A2}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1983, duration: 70, easing: "easeInOutBounce" },
                { id: "eid240", tween: [ "style", "${_Text_A2}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2053, duration: 55, easing: "easeInOutBounce" },
                { id: "eid241", tween: [ "style", "${_Text_A2}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2108, duration: 41, easing: "easeInOutBounce" },
                { id: "eid242", tween: [ "style", "${_Text_A2}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2149, duration: 38, easing: "easeInOutBounce" },
                { id: "eid243", tween: [ "style", "${_Text_A2}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2187, duration: 64, easing: "easeInOutBounce" },
                { id: "eid244", tween: [ "style", "${_Text_A2}", "opacity", '1', { fromValue: '0.500000'}], position: 2482, duration: 800, easing: "easeInOutBounce" },
                { id: "eid245", tween: [ "style", "${_Text_A2}", "opacity", '1', { fromValue: '1'}], position: 3482, duration: 0, easing: "easeInOutBounce" },
                { id: "eid246", tween: [ "style", "${_Text_A2}", "opacity", '0', { fromValue: '0.5'}], position: 3682, duration: 518, easing: "easeInOutBounce" }            ]
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
                    id: 'Text_A1',
                    type: 'image',
                    rect: ['0', '-9', '490px', '98px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_A1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text_A1}": [
                ["style", "height", '98px'],
                ["style", "opacity", '0'],
                ["style", "width", '490px']
            ],
            "${symbolSelector}": [
                ["style", "height", '89px'],
                ["style", "width", '490px']
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
                { id: "eid202", tween: [ "style", "${_Text_A1}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 822, easing: "easeInOutBounce" },
                { id: "eid203", tween: [ "style", "${_Text_A1}", "opacity", '0.21', { fromValue: '0.18'}], position: 822, duration: 129, easing: "easeInOutBounce" },
                { id: "eid204", tween: [ "style", "${_Text_A1}", "opacity", '0.24', { fromValue: '0.21'}], position: 951, duration: 140, easing: "easeOutBounce" },
                { id: "eid205", tween: [ "style", "${_Text_A1}", "opacity", '0.19', { fromValue: '0.24'}], position: 1091, duration: 106, easing: "easeOutBounce" },
                { id: "eid206", tween: [ "style", "${_Text_A1}", "opacity", '0.16', { fromValue: '0.19'}], position: 1197, duration: 61, easing: "easeOutBounce" },
                { id: "eid207", tween: [ "style", "${_Text_A1}", "opacity", '0.21', { fromValue: '0.16'}], position: 1258, duration: 164, easing: "easeInOutBounce" },
                { id: "eid208", tween: [ "style", "${_Text_A1}", "opacity", '0.23', { fromValue: '0.21'}], position: 1422, duration: 67, easing: "easeInOutBounce" },
                { id: "eid209", tween: [ "style", "${_Text_A1}", "opacity", '0.25', { fromValue: '0.23'}], position: 1489, duration: 66, easing: "easeInOutBounce" },
                { id: "eid210", tween: [ "style", "${_Text_A1}", "opacity", '0.22', { fromValue: '0.25'}], position: 1555, duration: 200, easing: "easeInOutBounce" },
                { id: "eid211", tween: [ "style", "${_Text_A1}", "opacity", '0.18', { fromValue: '0.22'}], position: 1755, duration: 67, easing: "easeInOutBounce" },
                { id: "eid212", tween: [ "style", "${_Text_A1}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1955, duration: 96, easing: "easeInBounce" },
                { id: "eid213", tween: [ "style", "${_Text_A1}", "opacity", '0.5', { fromValue: '0.146612'}], position: 2051, duration: 171, easing: "easeOutBounce" },
                { id: "eid214", tween: [ "style", "${_Text_A1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2222, duration: 67, easing: "easeInOutBounce" },
                { id: "eid215", tween: [ "style", "${_Text_A1}", "opacity", '0.59', { fromValue: '0.550000'}], position: 2289, duration: 34, easing: "easeInOutBounce" },
                { id: "eid216", tween: [ "style", "${_Text_A1}", "opacity", '0.4', { fromValue: '0.590000'}], position: 2323, duration: 70, easing: "easeInOutBounce" },
                { id: "eid217", tween: [ "style", "${_Text_A1}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2393, duration: 55, easing: "easeInOutBounce" },
                { id: "eid218", tween: [ "style", "${_Text_A1}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2448, duration: 41, easing: "easeInOutBounce" },
                { id: "eid219", tween: [ "style", "${_Text_A1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2489, duration: 38, easing: "easeInOutBounce" },
                { id: "eid220", tween: [ "style", "${_Text_A1}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2527, duration: 64, easing: "easeInOutBounce" },
                { id: "eid221", tween: [ "style", "${_Text_A1}", "opacity", '1', { fromValue: '0.500000'}], position: 2822, duration: 800, easing: "easeInOutBounce" },
                { id: "eid222", tween: [ "style", "${_Text_A1}", "opacity", '1', { fromValue: '1'}], position: 3822, duration: 0, easing: "easeInOutBounce" },
                { id: "eid223", tween: [ "style", "${_Text_A1}", "opacity", '0', { fromValue: '0.5'}], position: 4022, duration: 578, easing: "easeInOutBounce" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/dust_icon4.png', '0px', '0px']
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
                    id: 'Text_A6',
                    type: 'image',
                    rect: ['5px', '0', '336px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/END/Text_A6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '330px']
            ],
            "${_Text_A6}": [
                ["style", "height", '80px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "width", '336px']
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
                { id: "eid322", tween: [ "style", "${_Text_A6}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid323", tween: [ "style", "${_Text_A6}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid324", tween: [ "style", "${_Text_A6}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid325", tween: [ "style", "${_Text_A6}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid326", tween: [ "style", "${_Text_A6}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid327", tween: [ "style", "${_Text_A6}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid328", tween: [ "style", "${_Text_A6}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid329", tween: [ "style", "${_Text_A6}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid330", tween: [ "style", "${_Text_A6}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid331", tween: [ "style", "${_Text_A6}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid332", tween: [ "style", "${_Text_A6}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid333", tween: [ "style", "${_Text_A6}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid334", tween: [ "style", "${_Text_A6}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid335", tween: [ "style", "${_Text_A6}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid336", tween: [ "style", "${_Text_A6}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid337", tween: [ "style", "${_Text_A6}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid338", tween: [ "style", "${_Text_A6}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid339", tween: [ "style", "${_Text_A6}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid340", tween: [ "style", "${_Text_A6}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid341", tween: [ "style", "${_Text_A6}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid342", tween: [ "style", "${_Text_A6}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid343", tween: [ "style", "${_Text_A6}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
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
})(jQuery, AdobeEdge, "SCENE_C");
