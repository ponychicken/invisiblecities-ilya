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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         text1 = sym.getSymbol('text_1');
         text1.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_1}", "click", function(sym, e) {
         text1 = sym.getSymbol('text_1');
         text1.play('opaque');

         text2 = sym.getSymbol('text_2');
         text2.play('0');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_2}", "click", function(sym, e) {
         text1 = sym.getSymbol('text_1');
         text1.play('fade_flimmer');

         text2 = sym.getSymbol('text_2');
         text2.play('opaque');

         text3 = sym.getSymbol('text_3');
         text3.play('0');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_3}", "click", function(sym, e) {
         text1 = sym.getSymbol('text_1');
         text1.play('fade');

         text2 = sym.getSymbol('text_2');
         text2.play('fade_flimmer');

         text3 = sym.getSymbol('text_3');
         text3.play('opaque');

         text4 = sym.getSymbol('text_4');
         text4.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_4}", "click", function(sym, e) {

         text2 = sym.getSymbol('text_2');
         text2.play('fade');

         text3 = sym.getSymbol('text_3');
         text3.play('fade');

         text4 = sym.getSymbol('text_4');
         text4.play('opaque');

         sym.play('button');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dust_button2}", "click", function(sym, e) {
         sym.play();
         sym.play('textOut');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17476, function(sym, e) {
         window.open("SCENE_B.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4167, function(sym, e) {
         // Hide an Element.
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("text_4");
   //Edge symbol end:'text_4'

   //=========================================================

   //Edge symbol: 'text_01'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3822, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4600, function(sym, e) {
         // Hide an Element.
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1822, function(sym, e) {
         sym.play('fade_flimmer');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.play('fade_still');

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
         sym.getSymbolElement().hide();

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
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("text_3");
   //Edge symbol end:'text_3'

   //=========================================================

   //=========================================================

   //Edge symbol: 'dust_button'
   (function(symbolName) {

   })("dust_button");
   //Edge symbol end:'dust_button'

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

   })("dust_icon_1");
   //Edge symbol end:'dust_icon_1'

   //=========================================================

   //Edge symbol: 'dust_button_1'
   (function(symbolName) {

   })("dust_button_1");
   //Edge symbol end:'dust_button_1'

   //=========================================================

   //Edge symbol: 'text_4_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1534, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4167, function(sym, e) {
         // Hide an Element.
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("text_4_1");
   //Edge symbol end:'text_4_1'

   //=========================================================

   //Edge symbol: 'text_3_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1519, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

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
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("text_3_1");
   //Edge symbol end:'text_3_1'

   //=========================================================

   //Edge symbol: 'text_2_1'
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
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("text_2_1");
   //Edge symbol end:'text_2_1'

   //=========================================================

   //Edge symbol: 'text_1_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.play('fade_still');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1822, function(sym, e) {
         sym.play('fade_flimmer');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3822, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4600, function(sym, e) {
         // Hide an Element.
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("text_1_1");
   //Edge symbol end:'text_1_1'

   //=========================================================

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "SCENE_A");