/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function($, Edge, compId) {
   var Composition = Edge.Composition,
      Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${H_still_leftright}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("H_still_leftright").hide();

         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("H_bag_appear");
         sym.$("H_bag_appear").show();
         mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${H_bag_appear}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an Element.
         sym.$("H_bag_appear").hide();

         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("H_walk");
         sym.$("H_walk").show();
         mySymbolObject.play();

         sym.play("city_out");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // Hide an Element.
         sym.$("Theodora").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13409, function(sym, e) {
         // Show an Element.
         sym.$("text_1").show();

         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("text_1");
         mySymbolObject.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_1}", "click", function(sym, e) {
         // Play this symbol from "opaque"
         var mySymbolObject = sym.getSymbol("text_1");
         mySymbolObject.play("opaque");

         // Show an Element.
         sym.$("text_2").show();

         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("text_2");
         mySymbolObject.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_2}", "click", function(sym, e) {
         // Play this symbol from "opaque"
         var mySymbolObject = sym.getSymbol("text_2");
         mySymbolObject.play("opaque");

         // fades text_1
         var mySymbolObject = sym.getSymbol("text_1");
         mySymbolObject.play("fade_flimmer");

         // Show an Element.
         sym.$("text_3").show();

         // enter text_3
         var mySymbolObject = sym.getSymbol("text_3");
         mySymbolObject.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_3}", "click", function(sym, e) {
         // Play this symbol from "opaque"
         var mySymbolObject = sym.getSymbol("text_3");
         mySymbolObject.play("opaque");

         // fades text_1 out
         var mySymbolObject = sym.getSymbol("text_1");
         mySymbolObject.play("fade");

         // fades text_2
         var mySymbolObject = sym.getSymbol("text_2");
         mySymbolObject.play("fade_flimmer");

         // Show an Element.
         sym.$("text_4").show();

         // enter text_4
         var mySymbolObject = sym.getSymbol("text_4");
         mySymbolObject.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_4}", "click", function(sym, e) {
         // Play this symbol from "opaque"
         var mySymbolObject = sym.getSymbol("text_4");
         mySymbolObject.play("opaque");

         // fades text_2 out
         var mySymbolObject = sym.getSymbol("text_2");
         mySymbolObject.play("fade");

         // fades text_3
         var mySymbolObject = sym.getSymbol("text_3");
         mySymbolObject.play("fade_flimmer");

         // Show an Element.
         sym.$("text_5").show();

         // enter text_5
         var mySymbolObject = sym.getSymbol("text_5");
         mySymbolObject.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_5}", "click", function(sym, e) {
         // Play this symbol from "opaque"
         var mySymbolObject = sym.getSymbol("text_5");
         mySymbolObject.play("opaque");

         // fades text_3 out
         var mySymbolObject = sym.getSymbol("text_3");
         mySymbolObject.play("fade");

         // fades text_4
         var mySymbolObject = sym.getSymbol("text_4");
         mySymbolObject.play("fade_flimmer");

         // Show an Element.
         sym.$("dust_button3").show();
         // fade in button
         var mySymbolObject = sym.getSymbol("dust_button3");
         mySymbolObject.play("opaque");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13864, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dust_button3}", "click", function(sym, e) {
         sym.play("city_start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("H_walk");
         mySymbolObject.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17521, function(sym, e) {
         // Hide an Element.
         sym.$("dust_button3").hide();

         // Play the audio track.
         sym.$("SFX_bassDrop")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // Play the audio track.
         sym.$("SFX_wind")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4272, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dust_icon_invert4}", "click", function(sym, e) {
         sym.play("start");

         sym.$("SFX_windLoop2")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         theodora = sym.getSymbol('Theodora');
         theodora.play('name_opaque');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59537, function(sym, e) {
         window.open("GAME_1.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Theodora}", "click", function(sym, e) {
         sym.play("text_in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55627, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'Theodora'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1792, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("full_opacity");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Name_00072}", "mouseover", function(sym, e) {
         sym.play("name_opaque");

      });
      //Edge binding end

   })("Theodora");
   //Edge symbol end:'Theodora'

   //=========================================================

   //Edge symbol: 'cloud'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         // insert code here// Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("cloud_2");
   //Edge symbol end:'cloud_2'

   //=========================================================

   //Edge symbol: 'cloud_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         // insert code here// Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("cloud_1");
   //Edge symbol end:'cloud_1'

   //=========================================================

   //Edge symbol: 'taube'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1292, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ss_taube_12}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("taube_fett");

         // Play the audio track.
         sym.$("my_audio_element")[0].play(6);

      });
      //Edge binding end

   })("taube");
   //Edge symbol end:'taube'

   //=========================================================

   //Edge symbol: 'cloud_3'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         // insert code here// Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("cloud_3");
   //Edge symbol end:'cloud_3'

   //=========================================================

   //Edge symbol: 'cloud_cluster'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9981, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("start");

      });
      //Edge binding end

   })("cloud_cluster");
   //Edge symbol end:'cloud_cluster'

   //=========================================================

   //Edge symbol: 'Title_Intro'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Title_Intro");
   //Edge symbol end:'Title_Intro'

   //=========================================================

   //Edge symbol: 'plasticbag'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 867, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("plasticbag");
   //Edge symbol end:'plasticbag'

   //=========================================================

   //Edge symbol: 'H_still_leftright'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15333, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("H_still_leftright");
   //Edge symbol end:'H_still_leftright'

   //=========================================================

   //Edge symbol: 'H_bag_appear'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1733, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("H_bag_appear");
   //Edge symbol end:'H_bag_appear'

   //=========================================================

   //Edge symbol: 'H_walk'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1133, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("H_walk");
   //Edge symbol end:'H_walk'

   //=========================================================

   //Edge symbol: 'bg_1'
   (function(symbolName) {

   })("bg_1");
   //Edge symbol end:'bg_1'

   //=========================================================

   //Edge symbol: 'text_01'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1889, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2591, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3822, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4600, function(sym, e) {
         // Hide an Element.
         sym.hide();

      });
      //Edge binding end

   })("text_1");
   //Edge symbol end:'text_1'

   //=========================================================

   //Edge symbol: 'text_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1549, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2251, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3482, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4200, function(sym, e) {
         // Hide an Element.
         sym.hide();

      });
      //Edge binding end

   })("text_2");
   //Edge symbol end:'text_2'

   //=========================================================

   //Edge symbol: 'text_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1519, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2221, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1519, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2221, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3452, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4133, function(sym, e) {
         // Hide an Element.
         sym.hide();

      });
      //Edge binding end

   })("text_3");
   //Edge symbol end:'text_3'

   //=========================================================

   //Edge symbol: 'text_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1534, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2236, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1534, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2236, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3467, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4445, function(sym, e) {
         // Hide an Element.
         sym.hide();

      });
      //Edge binding end

   })("text_4");
   //Edge symbol end:'text_4'

   //=========================================================

   //Edge symbol: 'text_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1505, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2207, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3438, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

   })("text_5");
   //Edge symbol end:'text_5'

   //=========================================================

   //Edge symbol: 'dust_icon'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 537, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("dust_icon");
   //Edge symbol end:'dust_icon'

   //=========================================================

   //Edge symbol: 'dust_button'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1067, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1769, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

   })("dust_button");
   //Edge symbol end:'dust_button'

   //=========================================================

   //Edge symbol: 'C_Esser'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("C_Esser");
   //Edge symbol end:'C_Esser'

   //=========================================================

   //Edge symbol: 'C_Pisser'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("C_Pisser");
   //Edge symbol end:'C_Pisser'

   //=========================================================

   //Edge symbol: 'A_cripmate'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("A_cripmate");
   //Edge symbol end:'A_cripmate'

   //=========================================================

   //Edge symbol: 'A_trash_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("A_trash_1");
   //Edge symbol end:'A_trash_1'

   //=========================================================

   //Edge symbol: 'C_paperball'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("A_paperball");
   //Edge symbol end:'A_paperball'

   //=========================================================

   //Edge symbol: 'preloader'
   (function(symbolName) {

   })("preloader");
   //Edge symbol end:'preloader'

   //=========================================================

   //Edge symbol: 'Preloader'
   (function(symbolName) {

   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================

   //Edge symbol: 'B_taube2'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.play("loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1867, function(sym, e) {
         sym.stop();
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");
         sym.$("SFX_pigeon")[0].stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ss_taube_2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("touch");

         // Play the audio track.
         sym.$("SFX_pigeon")[0].play(6);

      });
      //Edge binding end

   })("B_taube2");
   //Edge symbol end:'B_taube2'

   //=========================================================

   //Edge symbol: 'SFX_wind'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40255, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("SFX_wind");
   //Edge symbol end:'SFX_wind'

   //=========================================================

   //Edge symbol: 'A_trash_2'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("A_trash_2");
   //Edge symbol end:'A_trash_2'

   //=========================================================

   //Edge symbol: 'A_trash_3'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("A_trash_3");
   //Edge symbol end:'A_trash_3'

   //=========================================================

   //Edge symbol: 'dust_button_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1067, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1769, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

   })("dust_button_invert");
   //Edge symbol end:'dust_button_invert'

   //=========================================================

   //Edge symbol: 'dust_icon_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 537, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("dust_icon_invert");
   //Edge symbol end:'dust_icon_invert'

   //=========================================================

   //=========================================================

   //Edge symbol: 'A_cigPile'
   (function(symbolName) {

   })("A_cigPile");
   //Edge symbol end:'A_cigPile'

   //=========================================================

   //Edge symbol: 'A_cig3'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("A_cig3");
   //Edge symbol end:'A_cig3'

   //=========================================================

   //Edge symbol: 'A_cig4'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("A_cig4");
   //Edge symbol end:'A_cig4'

   //=========================================================

   //Edge symbol: 'A_tv'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("A_tv");
   //Edge symbol end:'A_tv'

   //=========================================================

   //Edge symbol: 'A_shoes'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("A_shoes");
   //Edge symbol end:'A_shoes'

   //=========================================================

   //Edge symbol: 'A_teddy'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("A_teddy");
   //Edge symbol end:'A_teddy'

   //=========================================================

   //Edge symbol: 'A_cig2'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("A_cig2");
   //Edge symbol end:'A_cig2'

   //=========================================================

   //Edge symbol: 'A_cig1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("A_cig1");
   //Edge symbol end:'A_cig1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-372280890");