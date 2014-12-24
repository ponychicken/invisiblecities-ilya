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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         window.open('GAME_3.html', '_self');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4436, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1783, function(sym, e) {
         text1 = sym.getSymbol('text_1');
         text1.play(0);

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
         text3.play('fade_flimmer');

         text4 = sym.getSymbol('text_4');
         text4.play('opaque');

         text5 = sym.getSymbol('text_5');
         text5.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_5}", "click", function(sym, e) {
         text3 = sym.getSymbol('text_3');
         text3.play('fade');

         text4 = sym.getSymbol('text_4');
         text4.play('fade_flimmer');

         text5 = sym.getSymbol('text_5');
         text5.play('opaque');

         text6 = sym.getSymbol('text_6');
         text6.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${text_6}", "click", function(sym, e) {

         text4 = sym.getSymbol('text_4');
         text4.play('fade');

         text5 = sym.getSymbol('text_5');
         text5.play('fade');

         text6 = sym.getSymbol('text_6');
         text6.play('opaque');

         sym.play('button');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7649, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dust_icon2}", "click", function(sym, e) {
         sym.play('in');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'H_Facepull'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2042, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${H_FacePull1}", "click", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("H_Facepull");
   //Edge symbol end:'H_Facepull'

   //=========================================================

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

   //Edge symbol: 'backgrounds'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("backgrounds");
   //Edge symbol end:'backgrounds'

   //=========================================================

   //Edge symbol: 'backgrounds_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("backgrounds_1");
   //Edge symbol end:'backgrounds_1'

   //=========================================================

   //Edge symbol: 'wind'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("wind");
   //Edge symbol end:'wind'

   //=========================================================

   //Edge symbol: 'FacePullWind'
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${H_Facepull}", "click", function(sym, e) {
         sym.play('start');
         sym.getComposition().getStage().play('off');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("FacePullWind");
   //Edge symbol end:'FacePullWind'

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
         sym.hide();

      });
      //Edge binding end

   })("text_4");
   //Edge symbol end:'text_4'

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

   //Edge symbol: 'text_5'
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
         sym.hide();

      });
      //Edge binding end

   })("text_5");
   //Edge symbol end:'text_5'

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
         sym.hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1822, function(sym, e) {
         sym.play('fade_flimmer');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.play('opaque');

      });
      //Edge binding end

   })("text_1");
   //Edge symbol end:'text_1'

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

   //Edge symbol: 'text_6'
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3467, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4167, function(sym, e) {
         // Hide an Element.
         sym.hide();

      });
      //Edge binding end

   })("text_6");
   //Edge symbol end:'text_6'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "SCENE_C");