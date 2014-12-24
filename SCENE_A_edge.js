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
                id: 'BG_1',
                type: 'image',
                rect: ['-30px', '62px','2028px','973px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG_1.png",'0px','0px']
            },
            {
                id: 'BG_02',
                type: 'image',
                rect: ['-100px', '890px','2304px','319px','auto', 'auto'],
                opacity: 0.60162601626016,
                fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
            },
            {
                id: 'BG_02Copy',
                type: 'image',
                rect: ['-476px', '1137px','3315px','459px','auto', 'auto'],
                opacity: 0.77235772357724,
                fill: ["rgba(0,0,0,0)",im+"BG_0.png",'0px','0px']
            },
            {
                id: 'B_taube2',
                display: 'block',
                type: 'rect',
                rect: ['1074', '142','auto','auto','auto', 'auto']
            },
            {
                id: 'B_taube2Copy',
                display: 'block',
                type: 'rect',
                rect: ['1074', '142','auto','auto','auto', 'auto']
            },
            {
                id: 'B_taube22',
                display: 'block',
                type: 'rect',
                rect: ['282px', '1394px','auto','auto','auto', 'auto']
            },
            {
                id: 'taube',
                display: 'block',
                type: 'rect',
                rect: ['614px', '82px','auto','auto','auto', 'auto']
            },
            {
                id: 'taubeCopy2',
                display: 'block',
                type: 'rect',
                rect: ['614px', '82px','auto','auto','auto', 'auto']
            },
            {
                id: 'taubeCopy3',
                display: 'block',
                type: 'rect',
                rect: ['614px', '82px','auto','auto','auto', 'auto']
            },
            {
                id: 'taubeCopy',
                display: 'block',
                type: 'rect',
                rect: ['614px', '82px','auto','auto','auto', 'auto']
            },
            {
                id: 'taube2',
                display: 'block',
                type: 'rect',
                rect: ['1250px', '245px','auto','auto','auto', 'auto']
            },
            {
                id: 'bag1',
                display: 'none',
                type: 'image',
                rect: ['-163px', '895px','459px','472px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bag1.png",'0px','0px']
            },
            {
                id: 'bag2Copy',
                display: 'none',
                type: 'image',
                rect: ['1672px', '1110px','352px','340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bag2.png",'0px','0px']
            },
            {
                id: 'bag5',
                display: 'none',
                type: 'image',
                rect: ['1604px', '1280px','522px','255px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bag5.png",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'bag2',
                display: 'none',
                type: 'image',
                rect: ['28px', '1082px','352px','340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bag2.png",'0px','0px']
            },
            {
                id: 'bag3',
                display: 'none',
                type: 'image',
                rect: ['52px', '1172px','554px','372px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bag3.png",'0px','0px'],
                transform: [[],['-6']]
            },
            {
                id: 'bag4',
                display: 'none',
                type: 'image',
                rect: ['-60px', '1064px','260px','522px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bag4.png",'0px','0px'],
                transform: [[],['-8']]
            },
            {
                id: 'bag4Copy',
                display: 'none',
                type: 'image',
                rect: ['1864px', '1024px','260px','522px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bag4.png",'0px','0px'],
                transform: [[],['2']]
            },
            {
                id: 'text_1',
                type: 'rect',
                rect: ['41px', '69px','auto','auto','auto', 'auto'],
                transform: [[],['-3']]
            },
            {
                id: 'text_2',
                type: 'rect',
                rect: ['471px', '149px','auto','auto','auto', 'auto'],
                transform: [[],['3']]
            },
            {
                id: 'text_3',
                type: 'rect',
                rect: ['229', '267px','auto','auto','auto', 'auto'],
                transform: [[],['-1']]
            },
            {
                id: 'text_4',
                type: 'rect',
                rect: ['1112px', '358px','auto','auto','auto', 'auto']
            },
            {
                id: 'dust_button2',
                display: 'none',
                type: 'rect',
                rect: ['1652px', '330px','auto','auto','auto', 'auto']
            },
            {
                id: 'RectangleCopy',
                display: 'block',
                type: 'rect',
                rect: ['0px', '-10px','2048px','1545px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [
            {
                id: 'B_taube2',
                symbolName: 'B_taube2'
            },
            {
                id: 'text_2',
                symbolName: 'text_2_1',
                autoPlay: {

                }
            },
            {
                id: 'dust_button2',
                symbolName: 'dust_button_1',
                autoPlay: {

                }
            },
            {
                id: 'taubeCopy',
                symbolName: 'taube'
            },
            {
                id: 'text_1',
                symbolName: 'text_1_1',
                autoPlay: {

                }
            },
            {
                id: 'text_4',
                symbolName: 'text_4_1',
                autoPlay: {

                }
            },
            {
                id: 'text_3',
                symbolName: 'text_3_1',
                autoPlay: {

                }
            },
            {
                id: 'taube',
                symbolName: 'taube'
            },
            {
                id: 'B_taube2Copy',
                symbolName: 'B_taube2'
            },
            {
                id: 'taube2',
                symbolName: 'taube'
            },
            {
                id: 'taubeCopy2',
                symbolName: 'taube'
            },
            {
                id: 'B_taube22',
                symbolName: 'B_taube2'
            },
            {
                id: 'taubeCopy3',
                symbolName: 'taube'
            }
            ]
        },
    states: {
        "Base State": {
            "${_dust_button2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '927px'],
                ["style", "top", '1256px']
            ],
            "${_text_1}": [
                ["style", "top", '409px'],
                ["style", "opacity", '1'],
                ["style", "left", '342px'],
                ["transform", "rotateZ", '-3deg']
            ],
            "${_bag2}": [
                ["style", "top", '1082px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '28px'],
                ["style", "display", 'none']
            ],
            "${_BG_02}": [
                ["style", "top", '890px'],
                ["style", "height", '319px'],
                ["style", "opacity", '0.60162601626016'],
                ["style", "left", '-100px'],
                ["style", "width", '2304px']
            ],
            "${_taube2}": [
                ["style", "top", '12px'],
                ["transform", "scaleY", '0.53416'],
                ["transform", "scaleX", '-0.53416'],
                ["style", "opacity", '1'],
                ["style", "left", '1371px'],
                ["style", "display", 'block']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "top", '0px'],
                ["style", "display", 'block']
            ],
            "${_bag1}": [
                ["style", "top", '895px'],
                ["style", "display", 'none'],
                ["style", "height", '472px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-163px'],
                ["style", "width", '459px']
            ],
            "${_text_3}": [
                ["style", "top", '743px'],
                ["style", "opacity", '1'],
                ["style", "left", '158px'],
                ["transform", "rotateZ", '-1deg']
            ],
            "${_bag5}": [
                ["style", "top", '1280px'],
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1604px'],
                ["style", "display", 'none']
            ],
            "${_taubeCopy3}": [
                ["style", "top", '-153px'],
                ["transform", "scaleY", '0.25653'],
                ["transform", "scaleX", '0.25704'],
                ["style", "opacity", '1'],
                ["style", "left", '149px'],
                ["style", "display", 'block']
            ],
            "${_taubeCopy2}": [
                ["style", "top", '-91px'],
                ["transform", "scaleY", '0.34331'],
                ["transform", "scaleX", '-0.344'],
                ["style", "opacity", '1'],
                ["style", "left", '735px'],
                ["style", "display", 'block']
            ],
            "${_taubeCopy}": [
                ["style", "top", '-88px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '1'],
                ["style", "left", '919px'],
                ["style", "display", 'block']
            ],
            "${_BG_02Copy}": [
                ["style", "top", '1137px'],
                ["style", "height", '459px'],
                ["style", "opacity", '0.77235772357724'],
                ["style", "left", '-476px'],
                ["style", "width", '3315px']
            ],
            "${_B_taube22}": [
                ["style", "top", '1157px'],
                ["style", "opacity", '1'],
                ["style", "left", '358px'],
                ["style", "display", 'block']
            ],
            "${_BG_1}": [
                ["style", "left", '-30px'],
                ["style", "top", '62px']
            ],
            "${_taube}": [
                ["style", "top", '-91px'],
                ["transform", "scaleY", '0.34331'],
                ["transform", "scaleX", '-0.344'],
                ["style", "opacity", '1'],
                ["style", "left", '735px'],
                ["style", "display", 'block']
            ],
            "${_B_taube2Copy}": [
                ["style", "top", '873px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '-0.4'],
                ["style", "opacity", '1'],
                ["style", "left", '-71px'],
                ["style", "display", 'block']
            ],
            "${_bag2Copy}": [
                ["style", "top", '1110px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1672px'],
                ["style", "display", 'none']
            ],
            "${_B_taube2}": [
                ["style", "top", '962px'],
                ["transform", "scaleY", '0.59302'],
                ["transform", "scaleX", '-0.59302'],
                ["style", "opacity", '1'],
                ["style", "left", '1444px'],
                ["style", "display", 'block']
            ],
            "${_bag4}": [
                ["style", "top", '1064px'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-60px']
            ],
            "${_text_4}": [
                ["style", "top", '1000px'],
                ["style", "opacity", '1'],
                ["style", "left", '734px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bag4Copy}": [
                ["style", "top", '1024px'],
                ["transform", "rotateZ", '2deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1864px'],
                ["style", "display", 'none']
            ],
            "${_bag3}": [
                ["style", "top", '1172px'],
                ["transform", "rotateZ", '-6deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '52px']
            ],
            "${_text_2}": [
                ["style", "top", '547px'],
                ["style", "opacity", '1'],
                ["style", "left", '911px'],
                ["transform", "rotateZ", '3deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17476,
            autoPlay: true,
            labels: {
                "button": 5000,
                "textOut": 11589
            },
            timeline: [
                { id: "eid150", tween: [ "transform", "${_taube2}", "scaleY", '0.53416', { fromValue: '0.53416'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid130", tween: [ "style", "${_taube}", "top", '-91px', { fromValue: '-91px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid133", tween: [ "transform", "${_taubeCopy2}", "scaleX", '-0.344', { fromValue: '-0.344'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid38", tween: [ "style", "${_text_3}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid179", tween: [ "style", "${_taubeCopy3}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 1411, easing: "easeInOutQuad" },
                { id: "eid124", tween: [ "style", "${_taubeCopy}", "top", '-88px', { fromValue: '-88px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid67", tween: [ "style", "${_bag4Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid70", tween: [ "style", "${_bag1}", "opacity", '1', { fromValue: '0.000000'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid31", tween: [ "style", "${_dust_button2}", "top", '1256px', { fromValue: '1256px'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid175", tween: [ "style", "${_taubeCopy}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 1411, easing: "easeInOutQuad" },
                { id: "eid83", tween: [ "transform", "${_B_taube2}", "scaleY", '0.59302', { fromValue: '0.59302'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid37", tween: [ "style", "${_text_4}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid41", tween: [ "style", "${_RectangleCopy}", "display", 'none', { fromValue: 'block'}], position: 2160, duration: 0 },
                { id: "eid42", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_dust_button2}", "left", '927px', { fromValue: '927px'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid127", tween: [ "style", "${_taube}", "left", '735px', { fromValue: '735px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "style", "${_bag2Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid65", tween: [ "style", "${_bag5}", "opacity", '1', { fromValue: '0.000000'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid32", tween: [ "style", "${_dust_button2}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid33", tween: [ "style", "${_dust_button2}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid40", tween: [ "style", "${_text_1}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid26", tween: [ "style", "${_text_3}", "top", '743px', { fromValue: '743px'}], position: 0, duration: 0 },
                { id: "eid173", tween: [ "style", "${_B_taube22}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 1411, easing: "easeInOutQuad" },
                { id: "eid39", tween: [ "style", "${_text_2}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid23", tween: [ "style", "${_text_1}", "left", '342px', { fromValue: '342px'}], position: 0, duration: 0 },
                { id: "eid153", tween: [ "style", "${_taube2}", "left", '1371px', { fromValue: '1371px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid43", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 2160 },
                { id: "eid162", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '0'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid44", tween: [ "style", "${_RectangleCopy}", "opacity", '1', { fromValue: '0'}], position: 15476, duration: 2000 },
                { id: "eid120", tween: [ "transform", "${_taubeCopy}", "scaleX", '0.4', { fromValue: '0.4'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid25", tween: [ "style", "${_text_3}", "left", '158px', { fromValue: '158px'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_taubeCopy}", "left", '919px', { fromValue: '919px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid171", tween: [ "style", "${_bag4Copy}", "display", 'block', { fromValue: 'none'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid145", tween: [ "transform", "${_taubeCopy3}", "scaleY", '0.25653', { fromValue: '0.25653'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid112", tween: [ "style", "${_B_taube2Copy}", "top", '873px', { fromValue: '873px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid105", tween: [ "style", "${_B_taube22}", "left", '358px', { fromValue: '358px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid180", tween: [ "style", "${_taube2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid111", tween: [ "style", "${_B_taube2Copy}", "left", '-71px', { fromValue: '-71px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid29", tween: [ "style", "${_text_2}", "left", '911px', { fromValue: '911px'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_B_taube2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid230", tween: [ "style", "${_B_taube2Copy}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid147", tween: [ "style", "${_taubeCopy3}", "top", '-153px', { fromValue: '-153px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid169", tween: [ "style", "${_bag3}", "display", 'block', { fromValue: 'none'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid181", tween: [ "style", "${_taubeCopy}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid184", tween: [ "style", "${_taube}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid183", tween: [ "style", "${_taubeCopy2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid182", tween: [ "style", "${_taubeCopy3}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid170", tween: [ "style", "${_bag4}", "display", 'block', { fromValue: 'none'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid126", tween: [ "transform", "${_taube}", "scaleY", '0.34331', { fromValue: '0.34331'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid107", tween: [ "style", "${_B_taube2}", "left", '1444px', { fromValue: '1444px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid27", tween: [ "style", "${_text_4}", "left", '734px', { fromValue: '734px'}], position: 0, duration: 0 },
                { id: "eid229", tween: [ "style", "${_B_taube22}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid168", tween: [ "style", "${_bag2}", "display", 'block', { fromValue: 'none'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid167", tween: [ "style", "${_bag5}", "display", 'block', { fromValue: 'none'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid30", tween: [ "style", "${_text_2}", "top", '547px', { fromValue: '547px'}], position: 0, duration: 0 },
                { id: "eid166", tween: [ "style", "${_bag2Copy}", "display", 'block', { fromValue: 'none'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid106", tween: [ "style", "${_B_taube22}", "top", '1157px', { fromValue: '1157px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid66", tween: [ "style", "${_bag3}", "opacity", '1', { fromValue: '0.000000'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid165", tween: [ "style", "${_bag1}", "display", 'block', { fromValue: 'none'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid28", tween: [ "style", "${_text_4}", "top", '1000px', { fromValue: '1000px'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${_B_taube2}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 1411, easing: "easeInOutQuad" },
                { id: "eid69", tween: [ "style", "${_bag2}", "opacity", '1', { fromValue: '0.000000'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid71", tween: [ "style", "${_bag4}", "opacity", '1', { fromValue: '0.000000'}], position: 11589, duration: 2000, easing: "easeInOutQuad" },
                { id: "eid176", tween: [ "style", "${_taube}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 1411, easing: "easeInOutQuad" },
                { id: "eid98", tween: [ "transform", "${_B_taube2Copy}", "scaleY", '0.4', { fromValue: '0.4'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid178", tween: [ "style", "${_taube2}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 1411, easing: "easeInOutQuad" },
                { id: "eid24", tween: [ "style", "${_text_1}", "top", '409px', { fromValue: '409px'}], position: 0, duration: 0 },
                { id: "eid155", tween: [ "transform", "${_taube2}", "scaleX", '-0.53416', { fromValue: '-0.53416'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid148", tween: [ "style", "${_taubeCopy3}", "left", '149px', { fromValue: '149px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid154", tween: [ "style", "${_taube2}", "top", '12px', { fromValue: '12px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid177", tween: [ "style", "${_taubeCopy2}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 1411, easing: "easeInOutQuad" },
                { id: "eid108", tween: [ "style", "${_B_taube2}", "top", '962px', { fromValue: '962px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid132", tween: [ "style", "${_taubeCopy2}", "top", '-91px', { fromValue: '-91px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid134", tween: [ "transform", "${_taubeCopy2}", "scaleY", '0.34331', { fromValue: '0.34331'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid144", tween: [ "transform", "${_taubeCopy3}", "scaleX", '0.25704', { fromValue: '0.25704'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid135", tween: [ "style", "${_taubeCopy2}", "left", '735px', { fromValue: '735px'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid35", tween: [ "style", "${_dust_button2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid36", tween: [ "style", "${_dust_button2}", "display", 'none', { fromValue: 'block'}], position: 12589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid121", tween: [ "transform", "${_taubeCopy}", "scaleY", '0.4', { fromValue: '0.4'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid97", tween: [ "transform", "${_B_taube2Copy}", "scaleX", '-0.4', { fromValue: '-0.4'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid109", tween: [ "transform", "${_B_taube2}", "scaleX", '-0.59302', { fromValue: '-0.59302'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid131", tween: [ "transform", "${_taube}", "scaleX", '-0.344', { fromValue: '-0.344'}], position: 11589, duration: 0, easing: "easeInOutQuad" },
                { id: "eid174", tween: [ "style", "${_B_taube2Copy}", "opacity", '0', { fromValue: '1'}], position: 11589, duration: 1411, easing: "easeInOutQuad" }            ]
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
                    id: 'bText_32',
                    type: 'image',
                    rect: ['0', '0', '1766px', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_32.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1770px']
            ],
            "${_bText_32}": [
                ["style", "height", '95px'],
                ["style", "opacity", '0'],
                ["style", "width", '1766px']
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
                { id: "eid251", tween: [ "style", "${_bText_32}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 452, easing: "easeInOutBounce" },
                { id: "eid252", tween: [ "style", "${_bText_32}", "opacity", '0.21', { fromValue: '0.18'}], position: 452, duration: 129, easing: "easeInOutBounce" },
                { id: "eid253", tween: [ "style", "${_bText_32}", "opacity", '0.24', { fromValue: '0.21'}], position: 581, duration: 140, easing: "easeOutBounce" },
                { id: "eid254", tween: [ "style", "${_bText_32}", "opacity", '0.19', { fromValue: '0.24'}], position: 721, duration: 106, easing: "easeOutBounce" },
                { id: "eid255", tween: [ "style", "${_bText_32}", "opacity", '0.16', { fromValue: '0.19'}], position: 827, duration: 61, easing: "easeOutBounce" },
                { id: "eid256", tween: [ "style", "${_bText_32}", "opacity", '0.21', { fromValue: '0.16'}], position: 888, duration: 164, easing: "easeInOutBounce" },
                { id: "eid257", tween: [ "style", "${_bText_32}", "opacity", '0.23', { fromValue: '0.21'}], position: 1052, duration: 67, easing: "easeInOutBounce" },
                { id: "eid258", tween: [ "style", "${_bText_32}", "opacity", '0.25', { fromValue: '0.23'}], position: 1119, duration: 66, easing: "easeInOutBounce" },
                { id: "eid259", tween: [ "style", "${_bText_32}", "opacity", '0.22', { fromValue: '0.25'}], position: 1185, duration: 200, easing: "easeInOutBounce" },
                { id: "eid260", tween: [ "style", "${_bText_32}", "opacity", '0.18', { fromValue: '0.22'}], position: 1385, duration: 67, easing: "easeInOutBounce" },
                { id: "eid261", tween: [ "style", "${_bText_32}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1585, duration: 96, easing: "easeInBounce" },
                { id: "eid262", tween: [ "style", "${_bText_32}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1681, duration: 171, easing: "easeOutBounce" },
                { id: "eid263", tween: [ "style", "${_bText_32}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1852, duration: 67, easing: "easeInOutBounce" },
                { id: "eid264", tween: [ "style", "${_bText_32}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1919, duration: 34, easing: "easeInOutBounce" },
                { id: "eid265", tween: [ "style", "${_bText_32}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1953, duration: 70, easing: "easeInOutBounce" },
                { id: "eid266", tween: [ "style", "${_bText_32}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2023, duration: 55, easing: "easeInOutBounce" },
                { id: "eid267", tween: [ "style", "${_bText_32}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2078, duration: 41, easing: "easeInOutBounce" },
                { id: "eid268", tween: [ "style", "${_bText_32}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2119, duration: 38, easing: "easeInOutBounce" },
                { id: "eid269", tween: [ "style", "${_bText_32}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2157, duration: 64, easing: "easeInOutBounce" },
                { id: "eid270", tween: [ "style", "${_bText_32}", "opacity", '1', { fromValue: '0.500000'}], position: 2452, duration: 800, easing: "easeInOutBounce" },
                { id: "eid271", tween: [ "style", "${_bText_32}", "opacity", '1', { fromValue: '1'}], position: 3452, duration: 0, easing: "easeInOutBounce" },
                { id: "eid272", tween: [ "style", "${_bText_32}", "opacity", '0', { fromValue: '0.5'}], position: 3652, duration: 481, easing: "easeInOutBounce" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/dust_icon22.png', '0px', '0px']
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
                    id: 'bText_22',
                    type: 'image',
                    rect: ['0', '-10px', '899px', '104px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_22.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bText_22}": [
                ["style", "height", '104px'],
                ["style", "opacity", '0'],
                ["style", "top", '-10px'],
                ["style", "width", '899px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '900px']
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
                { id: "eid207", tween: [ "style", "${_bText_22}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 482, easing: "easeInOutBounce" },
                { id: "eid208", tween: [ "style", "${_bText_22}", "opacity", '0.21', { fromValue: '0.18'}], position: 482, duration: 129, easing: "easeInOutBounce" },
                { id: "eid209", tween: [ "style", "${_bText_22}", "opacity", '0.24', { fromValue: '0.21'}], position: 611, duration: 140, easing: "easeOutBounce" },
                { id: "eid210", tween: [ "style", "${_bText_22}", "opacity", '0.19', { fromValue: '0.24'}], position: 751, duration: 106, easing: "easeOutBounce" },
                { id: "eid211", tween: [ "style", "${_bText_22}", "opacity", '0.16', { fromValue: '0.19'}], position: 857, duration: 61, easing: "easeOutBounce" },
                { id: "eid212", tween: [ "style", "${_bText_22}", "opacity", '0.21', { fromValue: '0.16'}], position: 918, duration: 164, easing: "easeInOutBounce" },
                { id: "eid213", tween: [ "style", "${_bText_22}", "opacity", '0.23', { fromValue: '0.21'}], position: 1082, duration: 67, easing: "easeInOutBounce" },
                { id: "eid214", tween: [ "style", "${_bText_22}", "opacity", '0.25', { fromValue: '0.23'}], position: 1149, duration: 66, easing: "easeInOutBounce" },
                { id: "eid215", tween: [ "style", "${_bText_22}", "opacity", '0.22', { fromValue: '0.25'}], position: 1215, duration: 200, easing: "easeInOutBounce" },
                { id: "eid216", tween: [ "style", "${_bText_22}", "opacity", '0.18', { fromValue: '0.22'}], position: 1415, duration: 67, easing: "easeInOutBounce" },
                { id: "eid217", tween: [ "style", "${_bText_22}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1615, duration: 96, easing: "easeInBounce" },
                { id: "eid218", tween: [ "style", "${_bText_22}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1711, duration: 171, easing: "easeOutBounce" },
                { id: "eid219", tween: [ "style", "${_bText_22}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1882, duration: 67, easing: "easeInOutBounce" },
                { id: "eid220", tween: [ "style", "${_bText_22}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1949, duration: 34, easing: "easeInOutBounce" },
                { id: "eid221", tween: [ "style", "${_bText_22}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1983, duration: 70, easing: "easeInOutBounce" },
                { id: "eid222", tween: [ "style", "${_bText_22}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2053, duration: 55, easing: "easeInOutBounce" },
                { id: "eid223", tween: [ "style", "${_bText_22}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2108, duration: 41, easing: "easeInOutBounce" },
                { id: "eid224", tween: [ "style", "${_bText_22}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2149, duration: 38, easing: "easeInOutBounce" },
                { id: "eid225", tween: [ "style", "${_bText_22}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2187, duration: 64, easing: "easeInOutBounce" },
                { id: "eid226", tween: [ "style", "${_bText_22}", "opacity", '1', { fromValue: '0.500000'}], position: 2482, duration: 800, easing: "easeInOutBounce" },
                { id: "eid227", tween: [ "style", "${_bText_22}", "opacity", '1', { fromValue: '1'}], position: 3482, duration: 0, easing: "easeInOutBounce" },
                { id: "eid228", tween: [ "style", "${_bText_22}", "opacity", '0', { fromValue: '0.5'}], position: 3682, duration: 518, easing: "easeInOutBounce" }            ]
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
                    id: 'bText_42',
                    type: 'image',
                    rect: ['0', '-1px', '589px', '90px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_42.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '599px']
            ],
            "${_bText_42}": [
                ["style", "height", '90px'],
                ["style", "opacity", '0'],
                ["style", "top", '-1px'],
                ["style", "width", '589px']
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
                { id: "eid273", tween: [ "style", "${_bText_42}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid274", tween: [ "style", "${_bText_42}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid275", tween: [ "style", "${_bText_42}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid276", tween: [ "style", "${_bText_42}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid277", tween: [ "style", "${_bText_42}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid278", tween: [ "style", "${_bText_42}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid279", tween: [ "style", "${_bText_42}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid280", tween: [ "style", "${_bText_42}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid281", tween: [ "style", "${_bText_42}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid282", tween: [ "style", "${_bText_42}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid283", tween: [ "style", "${_bText_42}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid284", tween: [ "style", "${_bText_42}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid285", tween: [ "style", "${_bText_42}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid286", tween: [ "style", "${_bText_42}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid287", tween: [ "style", "${_bText_42}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid288", tween: [ "style", "${_bText_42}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid289", tween: [ "style", "${_bText_42}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid290", tween: [ "style", "${_bText_42}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid291", tween: [ "style", "${_bText_42}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid292", tween: [ "style", "${_bText_42}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid293", tween: [ "style", "${_bText_42}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid294", tween: [ "style", "${_bText_42}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
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
            "${_dust_icon2}": [
                ["style", "top", '-7px'],
                ["style", "opacity", '1'],
                ["style", "left", '7px'],
                ["transform", "rotateZ", '90deg']
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
            timeline: [
                { id: "eid1551", tween: [ "style", "${_dust_icon2}", "left", '7px', { fromValue: '7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1550", tween: [ "style", "${_dust_icon2}", "top", '-7px', { fromValue: '-7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" }            ]
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
                    id: 'bText_1',
                    type: 'image',
                    rect: ['10px', '-11px', '980px', '96px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_12.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bText_1}": [
                ["style", "top", '-11px'],
                ["style", "height", '96px'],
                ["style", "opacity", '0'],
                ["style", "left", '10px'],
                ["style", "width", '980px']
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '1094px']
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
                { id: "eid185", tween: [ "style", "${_bText_1}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 822, easing: "easeInOutBounce" },
                { id: "eid186", tween: [ "style", "${_bText_1}", "opacity", '0.21', { fromValue: '0.18'}], position: 822, duration: 129, easing: "easeInOutBounce" },
                { id: "eid187", tween: [ "style", "${_bText_1}", "opacity", '0.24', { fromValue: '0.21'}], position: 951, duration: 140, easing: "easeOutBounce" },
                { id: "eid188", tween: [ "style", "${_bText_1}", "opacity", '0.19', { fromValue: '0.24'}], position: 1091, duration: 106, easing: "easeOutBounce" },
                { id: "eid189", tween: [ "style", "${_bText_1}", "opacity", '0.16', { fromValue: '0.19'}], position: 1197, duration: 61, easing: "easeOutBounce" },
                { id: "eid190", tween: [ "style", "${_bText_1}", "opacity", '0.21', { fromValue: '0.16'}], position: 1258, duration: 164, easing: "easeInOutBounce" },
                { id: "eid191", tween: [ "style", "${_bText_1}", "opacity", '0.23', { fromValue: '0.21'}], position: 1422, duration: 67, easing: "easeInOutBounce" },
                { id: "eid192", tween: [ "style", "${_bText_1}", "opacity", '0.25', { fromValue: '0.23'}], position: 1489, duration: 66, easing: "easeInOutBounce" },
                { id: "eid193", tween: [ "style", "${_bText_1}", "opacity", '0.22', { fromValue: '0.25'}], position: 1555, duration: 200, easing: "easeInOutBounce" },
                { id: "eid194", tween: [ "style", "${_bText_1}", "opacity", '0.18', { fromValue: '0.22'}], position: 1755, duration: 67, easing: "easeInOutBounce" },
                { id: "eid195", tween: [ "style", "${_bText_1}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1955, duration: 96, easing: "easeInBounce" },
                { id: "eid196", tween: [ "style", "${_bText_1}", "opacity", '0.5', { fromValue: '0.146612'}], position: 2051, duration: 171, easing: "easeOutBounce" },
                { id: "eid197", tween: [ "style", "${_bText_1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2222, duration: 67, easing: "easeInOutBounce" },
                { id: "eid198", tween: [ "style", "${_bText_1}", "opacity", '0.59', { fromValue: '0.550000'}], position: 2289, duration: 34, easing: "easeInOutBounce" },
                { id: "eid199", tween: [ "style", "${_bText_1}", "opacity", '0.4', { fromValue: '0.590000'}], position: 2323, duration: 70, easing: "easeInOutBounce" },
                { id: "eid200", tween: [ "style", "${_bText_1}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2393, duration: 55, easing: "easeInOutBounce" },
                { id: "eid201", tween: [ "style", "${_bText_1}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2448, duration: 41, easing: "easeInOutBounce" },
                { id: "eid202", tween: [ "style", "${_bText_1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2489, duration: 38, easing: "easeInOutBounce" },
                { id: "eid203", tween: [ "style", "${_bText_1}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2527, duration: 64, easing: "easeInOutBounce" },
                { id: "eid204", tween: [ "style", "${_bText_1}", "opacity", '1', { fromValue: '0.500000'}], position: 2822, duration: 800, easing: "easeInOutBounce" },
                { id: "eid205", tween: [ "style", "${_bText_1}", "opacity", '1', { fromValue: '1'}], position: 3822, duration: 0, easing: "easeInOutBounce" },
                { id: "eid206", tween: [ "style", "${_bText_1}", "opacity", '0', { fromValue: '0.5'}], position: 4022, duration: 578, easing: "easeInOutBounce" }            ]
        }
    }
},
"dust_icon_1": {
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
"dust_button_1": {
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
                symbolName: 'dust_icon_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_dust_icon2}": [
                ["style", "top", '-7px'],
                ["style", "opacity", '1'],
                ["style", "left", '7px'],
                ["transform", "rotateZ", '90deg']
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
            timeline: [
                { id: "eid1551", tween: [ "style", "${_dust_icon2}", "left", '7px', { fromValue: '7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" },
                { id: "eid1550", tween: [ "style", "${_dust_icon2}", "top", '-7px', { fromValue: '-7px'}], position: 8409, duration: 0, easing: "easeInOutCubic" }            ]
        }
    }
},
"text_4_1": {
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
                    id: 'bText_42',
                    type: 'image',
                    rect: ['0', '-1px', '589px', '90px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '599px']
            ],
            "${_bText_42}": [
                ["style", "height", '90px'],
                ["style", "opacity", '0'],
                ["style", "top", '-1px'],
                ["style", "width", '589px']
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
                { id: "eid273", tween: [ "style", "${_bText_42}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 467, easing: "easeInOutBounce" },
                { id: "eid274", tween: [ "style", "${_bText_42}", "opacity", '0.21', { fromValue: '0.18'}], position: 467, duration: 129, easing: "easeInOutBounce" },
                { id: "eid275", tween: [ "style", "${_bText_42}", "opacity", '0.24', { fromValue: '0.21'}], position: 596, duration: 140, easing: "easeOutBounce" },
                { id: "eid276", tween: [ "style", "${_bText_42}", "opacity", '0.19', { fromValue: '0.24'}], position: 736, duration: 106, easing: "easeOutBounce" },
                { id: "eid277", tween: [ "style", "${_bText_42}", "opacity", '0.16', { fromValue: '0.19'}], position: 842, duration: 61, easing: "easeOutBounce" },
                { id: "eid278", tween: [ "style", "${_bText_42}", "opacity", '0.21', { fromValue: '0.16'}], position: 903, duration: 164, easing: "easeInOutBounce" },
                { id: "eid279", tween: [ "style", "${_bText_42}", "opacity", '0.23', { fromValue: '0.21'}], position: 1067, duration: 67, easing: "easeInOutBounce" },
                { id: "eid280", tween: [ "style", "${_bText_42}", "opacity", '0.25', { fromValue: '0.23'}], position: 1134, duration: 66, easing: "easeInOutBounce" },
                { id: "eid281", tween: [ "style", "${_bText_42}", "opacity", '0.22', { fromValue: '0.25'}], position: 1200, duration: 200, easing: "easeInOutBounce" },
                { id: "eid282", tween: [ "style", "${_bText_42}", "opacity", '0.18', { fromValue: '0.22'}], position: 1400, duration: 67, easing: "easeInOutBounce" },
                { id: "eid283", tween: [ "style", "${_bText_42}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1600, duration: 96, easing: "easeInBounce" },
                { id: "eid284", tween: [ "style", "${_bText_42}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1696, duration: 171, easing: "easeOutBounce" },
                { id: "eid285", tween: [ "style", "${_bText_42}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1867, duration: 67, easing: "easeInOutBounce" },
                { id: "eid286", tween: [ "style", "${_bText_42}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1934, duration: 34, easing: "easeInOutBounce" },
                { id: "eid287", tween: [ "style", "${_bText_42}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1968, duration: 70, easing: "easeInOutBounce" },
                { id: "eid288", tween: [ "style", "${_bText_42}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2038, duration: 55, easing: "easeInOutBounce" },
                { id: "eid289", tween: [ "style", "${_bText_42}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2093, duration: 41, easing: "easeInOutBounce" },
                { id: "eid290", tween: [ "style", "${_bText_42}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2134, duration: 38, easing: "easeInOutBounce" },
                { id: "eid291", tween: [ "style", "${_bText_42}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2172, duration: 64, easing: "easeInOutBounce" },
                { id: "eid292", tween: [ "style", "${_bText_42}", "opacity", '1', { fromValue: '0.500000'}], position: 2467, duration: 800, easing: "easeInOutBounce" },
                { id: "eid293", tween: [ "style", "${_bText_42}", "opacity", '1', { fromValue: '1'}], position: 3467, duration: 0, easing: "easeInOutBounce" },
                { id: "eid294", tween: [ "style", "${_bText_42}", "opacity", '0', { fromValue: '0.5'}], position: 3667, duration: 500, easing: "easeInOutBounce" }            ]
        }
    }
},
"text_3_1": {
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
                    id: 'bText_32',
                    type: 'image',
                    rect: ['0', '0', '1766px', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1770px']
            ],
            "${_bText_32}": [
                ["style", "height", '95px'],
                ["style", "opacity", '0'],
                ["style", "width", '1766px']
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
                { id: "eid251", tween: [ "style", "${_bText_32}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 452, easing: "easeInOutBounce" },
                { id: "eid252", tween: [ "style", "${_bText_32}", "opacity", '0.21', { fromValue: '0.18'}], position: 452, duration: 129, easing: "easeInOutBounce" },
                { id: "eid253", tween: [ "style", "${_bText_32}", "opacity", '0.24', { fromValue: '0.21'}], position: 581, duration: 140, easing: "easeOutBounce" },
                { id: "eid254", tween: [ "style", "${_bText_32}", "opacity", '0.19', { fromValue: '0.24'}], position: 721, duration: 106, easing: "easeOutBounce" },
                { id: "eid255", tween: [ "style", "${_bText_32}", "opacity", '0.16', { fromValue: '0.19'}], position: 827, duration: 61, easing: "easeOutBounce" },
                { id: "eid256", tween: [ "style", "${_bText_32}", "opacity", '0.21', { fromValue: '0.16'}], position: 888, duration: 164, easing: "easeInOutBounce" },
                { id: "eid257", tween: [ "style", "${_bText_32}", "opacity", '0.23', { fromValue: '0.21'}], position: 1052, duration: 67, easing: "easeInOutBounce" },
                { id: "eid258", tween: [ "style", "${_bText_32}", "opacity", '0.25', { fromValue: '0.23'}], position: 1119, duration: 66, easing: "easeInOutBounce" },
                { id: "eid259", tween: [ "style", "${_bText_32}", "opacity", '0.22', { fromValue: '0.25'}], position: 1185, duration: 200, easing: "easeInOutBounce" },
                { id: "eid260", tween: [ "style", "${_bText_32}", "opacity", '0.18', { fromValue: '0.22'}], position: 1385, duration: 67, easing: "easeInOutBounce" },
                { id: "eid261", tween: [ "style", "${_bText_32}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1585, duration: 96, easing: "easeInBounce" },
                { id: "eid262", tween: [ "style", "${_bText_32}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1681, duration: 171, easing: "easeOutBounce" },
                { id: "eid263", tween: [ "style", "${_bText_32}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1852, duration: 67, easing: "easeInOutBounce" },
                { id: "eid264", tween: [ "style", "${_bText_32}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1919, duration: 34, easing: "easeInOutBounce" },
                { id: "eid265", tween: [ "style", "${_bText_32}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1953, duration: 70, easing: "easeInOutBounce" },
                { id: "eid266", tween: [ "style", "${_bText_32}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2023, duration: 55, easing: "easeInOutBounce" },
                { id: "eid267", tween: [ "style", "${_bText_32}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2078, duration: 41, easing: "easeInOutBounce" },
                { id: "eid268", tween: [ "style", "${_bText_32}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2119, duration: 38, easing: "easeInOutBounce" },
                { id: "eid269", tween: [ "style", "${_bText_32}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2157, duration: 64, easing: "easeInOutBounce" },
                { id: "eid270", tween: [ "style", "${_bText_32}", "opacity", '1', { fromValue: '0.500000'}], position: 2452, duration: 800, easing: "easeInOutBounce" },
                { id: "eid271", tween: [ "style", "${_bText_32}", "opacity", '1', { fromValue: '1'}], position: 3452, duration: 0, easing: "easeInOutBounce" },
                { id: "eid272", tween: [ "style", "${_bText_32}", "opacity", '0', { fromValue: '0.5'}], position: 3652, duration: 481, easing: "easeInOutBounce" }            ]
        }
    }
},
"text_2_1": {
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
                    id: 'bText_22',
                    type: 'image',
                    rect: ['0', '-10px', '899px', '104px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bText_22}": [
                ["style", "height", '104px'],
                ["style", "opacity", '0'],
                ["style", "top", '-10px'],
                ["style", "width", '899px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '900px']
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
                { id: "eid207", tween: [ "style", "${_bText_22}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 482, easing: "easeInOutBounce" },
                { id: "eid208", tween: [ "style", "${_bText_22}", "opacity", '0.21', { fromValue: '0.18'}], position: 482, duration: 129, easing: "easeInOutBounce" },
                { id: "eid209", tween: [ "style", "${_bText_22}", "opacity", '0.24', { fromValue: '0.21'}], position: 611, duration: 140, easing: "easeOutBounce" },
                { id: "eid210", tween: [ "style", "${_bText_22}", "opacity", '0.19', { fromValue: '0.24'}], position: 751, duration: 106, easing: "easeOutBounce" },
                { id: "eid211", tween: [ "style", "${_bText_22}", "opacity", '0.16', { fromValue: '0.19'}], position: 857, duration: 61, easing: "easeOutBounce" },
                { id: "eid212", tween: [ "style", "${_bText_22}", "opacity", '0.21', { fromValue: '0.16'}], position: 918, duration: 164, easing: "easeInOutBounce" },
                { id: "eid213", tween: [ "style", "${_bText_22}", "opacity", '0.23', { fromValue: '0.21'}], position: 1082, duration: 67, easing: "easeInOutBounce" },
                { id: "eid214", tween: [ "style", "${_bText_22}", "opacity", '0.25', { fromValue: '0.23'}], position: 1149, duration: 66, easing: "easeInOutBounce" },
                { id: "eid215", tween: [ "style", "${_bText_22}", "opacity", '0.22', { fromValue: '0.25'}], position: 1215, duration: 200, easing: "easeInOutBounce" },
                { id: "eid216", tween: [ "style", "${_bText_22}", "opacity", '0.18', { fromValue: '0.22'}], position: 1415, duration: 67, easing: "easeInOutBounce" },
                { id: "eid217", tween: [ "style", "${_bText_22}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1615, duration: 96, easing: "easeInBounce" },
                { id: "eid218", tween: [ "style", "${_bText_22}", "opacity", '0.5', { fromValue: '0.146612'}], position: 1711, duration: 171, easing: "easeOutBounce" },
                { id: "eid219", tween: [ "style", "${_bText_22}", "opacity", '0.55', { fromValue: '0.500000'}], position: 1882, duration: 67, easing: "easeInOutBounce" },
                { id: "eid220", tween: [ "style", "${_bText_22}", "opacity", '0.59', { fromValue: '0.550000'}], position: 1949, duration: 34, easing: "easeInOutBounce" },
                { id: "eid221", tween: [ "style", "${_bText_22}", "opacity", '0.4', { fromValue: '0.590000'}], position: 1983, duration: 70, easing: "easeInOutBounce" },
                { id: "eid222", tween: [ "style", "${_bText_22}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2053, duration: 55, easing: "easeInOutBounce" },
                { id: "eid223", tween: [ "style", "${_bText_22}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2108, duration: 41, easing: "easeInOutBounce" },
                { id: "eid224", tween: [ "style", "${_bText_22}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2149, duration: 38, easing: "easeInOutBounce" },
                { id: "eid225", tween: [ "style", "${_bText_22}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2187, duration: 64, easing: "easeInOutBounce" },
                { id: "eid226", tween: [ "style", "${_bText_22}", "opacity", '1', { fromValue: '0.500000'}], position: 2482, duration: 800, easing: "easeInOutBounce" },
                { id: "eid227", tween: [ "style", "${_bText_22}", "opacity", '1', { fromValue: '1'}], position: 3482, duration: 0, easing: "easeInOutBounce" },
                { id: "eid228", tween: [ "style", "${_bText_22}", "opacity", '0', { fromValue: '0.5'}], position: 3682, duration: 518, easing: "easeInOutBounce" }            ]
        }
    }
},
"text_1_1": {
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
                    id: 'bText_1',
                    type: 'image',
                    rect: ['10px', '-11px', '980px', '96px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bText_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bText_1}": [
                ["style", "top", '-11px'],
                ["style", "height", '96px'],
                ["style", "opacity", '0'],
                ["style", "left", '10px'],
                ["style", "width", '980px']
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '1094px']
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
                { id: "eid185", tween: [ "style", "${_bText_1}", "opacity", '0.18', { fromValue: '0'}], position: 0, duration: 822, easing: "easeInOutBounce" },
                { id: "eid186", tween: [ "style", "${_bText_1}", "opacity", '0.21', { fromValue: '0.18'}], position: 822, duration: 129, easing: "easeInOutBounce" },
                { id: "eid187", tween: [ "style", "${_bText_1}", "opacity", '0.24', { fromValue: '0.21'}], position: 951, duration: 140, easing: "easeOutBounce" },
                { id: "eid188", tween: [ "style", "${_bText_1}", "opacity", '0.19', { fromValue: '0.24'}], position: 1091, duration: 106, easing: "easeOutBounce" },
                { id: "eid189", tween: [ "style", "${_bText_1}", "opacity", '0.16', { fromValue: '0.19'}], position: 1197, duration: 61, easing: "easeOutBounce" },
                { id: "eid190", tween: [ "style", "${_bText_1}", "opacity", '0.21', { fromValue: '0.16'}], position: 1258, duration: 164, easing: "easeInOutBounce" },
                { id: "eid191", tween: [ "style", "${_bText_1}", "opacity", '0.23', { fromValue: '0.21'}], position: 1422, duration: 67, easing: "easeInOutBounce" },
                { id: "eid192", tween: [ "style", "${_bText_1}", "opacity", '0.25', { fromValue: '0.23'}], position: 1489, duration: 66, easing: "easeInOutBounce" },
                { id: "eid193", tween: [ "style", "${_bText_1}", "opacity", '0.22', { fromValue: '0.25'}], position: 1555, duration: 200, easing: "easeInOutBounce" },
                { id: "eid194", tween: [ "style", "${_bText_1}", "opacity", '0.18', { fromValue: '0.22'}], position: 1755, duration: 67, easing: "easeInOutBounce" },
                { id: "eid195", tween: [ "style", "${_bText_1}", "opacity", '0.146612', { fromValue: '0.18'}], position: 1955, duration: 96, easing: "easeInBounce" },
                { id: "eid196", tween: [ "style", "${_bText_1}", "opacity", '0.5', { fromValue: '0.146612'}], position: 2051, duration: 171, easing: "easeOutBounce" },
                { id: "eid197", tween: [ "style", "${_bText_1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2222, duration: 67, easing: "easeInOutBounce" },
                { id: "eid198", tween: [ "style", "${_bText_1}", "opacity", '0.59', { fromValue: '0.550000'}], position: 2289, duration: 34, easing: "easeInOutBounce" },
                { id: "eid199", tween: [ "style", "${_bText_1}", "opacity", '0.4', { fromValue: '0.590000'}], position: 2323, duration: 70, easing: "easeInOutBounce" },
                { id: "eid200", tween: [ "style", "${_bText_1}", "opacity", '0.46', { fromValue: '0.400000'}], position: 2393, duration: 55, easing: "easeInOutBounce" },
                { id: "eid201", tween: [ "style", "${_bText_1}", "opacity", '0.5', { fromValue: '0.460000'}], position: 2448, duration: 41, easing: "easeInOutBounce" },
                { id: "eid202", tween: [ "style", "${_bText_1}", "opacity", '0.55', { fromValue: '0.500000'}], position: 2489, duration: 38, easing: "easeInOutBounce" },
                { id: "eid203", tween: [ "style", "${_bText_1}", "opacity", '0.5', { fromValue: '0.550000'}], position: 2527, duration: 64, easing: "easeInOutBounce" },
                { id: "eid204", tween: [ "style", "${_bText_1}", "opacity", '1', { fromValue: '0.500000'}], position: 2822, duration: 800, easing: "easeInOutBounce" },
                { id: "eid205", tween: [ "style", "${_bText_1}", "opacity", '1', { fromValue: '1'}], position: 3822, duration: 0, easing: "easeInOutBounce" },
                { id: "eid206", tween: [ "style", "${_bText_1}", "opacity", '0', { fromValue: '0.5'}], position: 4022, duration: 578, easing: "easeInOutBounce" }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/ss_taube_12.png', '0px', '0px']
                },
                {
                    rect: ['54', '40', '320px', '45px', 'auto', 'auto'],
                    source: ['media/SFX_pigeon.mp3'],
                    id: 'SFX_pigeon',
                    type: 'audio',
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
                    rect: ['0px', '0px', '500px', '2971px', 'auto', 'auto'],
                    id: 'ss_taube_2',
                    opacity: 0.9,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ss_taube_2.png', '0px', '0px']
                },
                {
                    rect: ['54', '40', '320px', '45px', 'auto', 'auto'],
                    source: ['media/SFX_pigeon.mp3'],
                    id: 'SFX_pigeon',
                    type: 'audio',
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "SCENE_A");
