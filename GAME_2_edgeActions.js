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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         C1Count = 0;
         C2Count = 0;
         C3Count = 0;

         counter = 0;

         yepnope({
            nope: ['js/jquery-ui-1.10.4.custom.min.js', 'js/jquery.ui.touch-punch.min.js'],
            complete: init
         });

         //________________________________________________________________pommes
         // Hide an Element.

         // see http://www.tutorialspoint.com/javascript/javascript_functions.htm
         //<var counter = function() {

         function init() {

            //Drag This
            sym.$('bagDrag').draggable({
               opacity: 1,
               revert: 'invalid'
            });

            //________________________________________________________________

            sym.$('Game_C1').droppable({
               drop: function() {
                  C1Count++;

                  if (C1Count === 1) {
                     var C1 = sym.getSymbol("Game_C1");
                     var C2 = sym.getSymbol("GameRun12");
                     var C3 = sym.getSymbol("Game_C3");
                     C1.play("bagUp");
                     C2.play("run");
                     C3.play("run");
                  }

                  //reset offset for draggable bag
                  sym.$("bagDrag").offset({
                     top: 838,
                     left: 270
                  });
                  newBag = sym.getSymbol("bagDrag");
                  newBag.play("appear");
               }
            });

            //________________________________________________________________

            sym.$('GameRun12').droppable({
               drop: function() {
                  C2Count++;

                  if (C2Count === 1) {
                     var C2 = sym.getSymbol("GameRun12");
                     var C1 = sym.getSymbol("Game_C1");
                     var C3 = sym.getSymbol("Game_C3");
                     C2.play("bagUp");
                     C1.play("run");
                     C3.play("run");
                  }

                  //reset offset for draggable bag
                  sym.$("bagDrag").offset({
                     top: 838,
                     left: 270
                  });
                  newBag = sym.getSymbol("bagDrag");
                  newBag.play("appear");
               }
            });

            //________________________________________________________________

            sym.$('Game_C3').droppable({
               drop: function() {
                  C3Count++;

                  if (C3Count === 1) {
                     var C3 = sym.getSymbol("Game_C3");
                     var C1 = sym.getSymbol("Game_C1");
                     var C2 = sym.getSymbol("GameRun12");
                     C3.play("bagUp");
                     C1.play("run");
                     C2.play("run");
                  }

                  //reset offset for draggable bag
                  sym.$("bagDrag").offset({
                     top: 838,
                     left: 270
                  });
                  newBag = sym.getSymbol("bagDrag");
                  newBag.play("appear");
               }
            });

         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1533, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {

         if (counter === 1) {

            sym.play('off');
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11366, function(sym, e) {
         window.open('SCENE_C.html', '_self');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================

   //Edge symbol: 'C_waiting1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("C_waiting1");
   //Edge symbol end:'C_waiting1'

   //=========================================================

   //Edge symbol: 'C_waiting3'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("C_waiting3");
   //Edge symbol end:'C_waiting3'

   //=========================================================

   //Edge symbol: 'C_waiting2'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("C_waiting2");
   //Edge symbol end:'C_waiting2'

   //=========================================================

   //Edge symbol: 'GameRun1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('wait');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2267, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bagUp_C_front3}", "click", function(sym, e) {
         counter++;

         sym.play('disappear');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 867, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Game_C2");
   //Edge symbol end:'Game_C2'

   //=========================================================

   //Edge symbol: 'GameRun2'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.play('wait');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1900, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bagUp_C_front3}", "click", function(sym, e) {
         counter++;

         sym.play('disappear');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Game_C1");
   //Edge symbol end:'Game_C1'

   //=========================================================

   //Edge symbol: 'GameRun2_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 533, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("GameRun3");
   //Edge symbol end:'GameRun3'

   //=========================================================

   //Edge symbol: 'GameRun1_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GameRun1}", "click", function(sym, e) {
         sym.play('run');

      });
      //Edge binding end

   })("GameRun2");
   //Edge symbol end:'GameRun2'

   //=========================================================

   //Edge symbol: 'GameRun1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("GameRun1");
   //Edge symbol end:'GameRun1'

   //=========================================================

   //Edge symbol: 'Game_C2_1'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('wait');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1677, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bagUp_C_front3Copy}", "click", function(sym, e) {
         counter++;

         sym.play('disappear');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 933, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Game_C3");
   //Edge symbol end:'Game_C3'

   //=========================================================

   //=========================================================

   //Edge symbol: 'bagDrag'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1067, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("bagDrag");
   //Edge symbol end:'bagDrag'

   //=========================================================

   //Edge symbol: 'bagUp_3_front'
   (function(symbolName) {

   })("bagUp_3_front");
   //Edge symbol end:'bagUp_3_front'

   //=========================================================

   //Edge symbol: 'bagUp_3_front_1'
   (function(symbolName) {

   })("bagUp_3_back");
   //Edge symbol end:'bagUp_3_back'

   //=========================================================

   //Edge symbol: 'bagUp_C_front'
   (function(symbolName) {

   })("bagUp_C_front");
   //Edge symbol end:'bagUp_C_front'

   //=========================================================

   //Edge symbol: 'bagUp_C_front_1'
   (function(symbolName) {

   })("bagUp_C_back");
   //Edge symbol end:'bagUp_C_back'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "GAME_2");