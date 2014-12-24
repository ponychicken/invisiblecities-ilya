/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43482, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${dust_button2}", "click", function(sym, e) {
         sym.play('out');

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57712, function(sym, e) {
         window.open('GAME_2.html', '_self');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2416, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.stop();

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

      Symbol.bindElementAction(compId, symbolName, "${dust_button2Copy}", "click", function(sym, e) {
         sym.play();sym.play('textOut');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'C_walkM_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         
         sym.play('loop');

      });
      //Edge binding end

   })("C_walkM_2");
   //Edge symbol end:'C_walkM_2'

   //=========================================================
   
   //Edge symbol: 'C_walkW_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("C_walkW_1");
   //Edge symbol end:'C_walkW_1'

   //=========================================================
   
   //Edge symbol: 'C_walkM_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("C_walkM_1");
   //Edge symbol end:'C_walkM_1'

   //=========================================================
   
   //Edge symbol: 'BG_poller'
   (function(symbolName) {   
   
   })("BG_poller");
   //Edge symbol end:'BG_poller'

   //=========================================================
   
   //Edge symbol: 'passanten'
   (function(symbolName) {   
   
   })("passanten");
   //Edge symbol end:'passanten'

   //=========================================================
   
   //Edge symbol: 'BG_fence'
   (function(symbolName) {   
   
   })("BG_fence");
   //Edge symbol end:'BG_fence'

   //=========================================================
   
   //Edge symbol: 'lanternRow'
   (function(symbolName) {   
   
   })("lanternRow");
   //Edge symbol end:'lanternRow'

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
         sym.play('fade_still');

      });
      //Edge binding end

   })("text_1");
   //Edge symbol end:'text_1'

   //=========================================================
   
   //Edge symbol: 'C_walkM_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play('loop');

      });
         //Edge binding end

      })("C_walkM_3");
   //Edge symbol end:'C_walkM_3'

   //=========================================================
   
   //Edge symbol: 'C_walkM_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         
         sym.play('loop');

      });
         //Edge binding end

      })("C_walkM_4");
   //Edge symbol end:'C_walkM_4'

   //=========================================================
   
   //Edge symbol: 'C_walkW_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play('loop');

      });
         //Edge binding end

      })("C_walkW_2");
   //Edge symbol end:'C_walkW_2'

   //=========================================================
   
   //Edge symbol: 'C_walkW_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play('loop');

      });
         //Edge binding end

      })("C_walkW_3");
   //Edge symbol end:'C_walkW_3'

   //=========================================================
   
   //Edge symbol: 'C_walkM_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play('loop');

      });
         //Edge binding end

      })("C_walkM_5");
   //Edge symbol end:'C_walkM_5'

   //=========================================================
   
   //Edge symbol: 'BusStopWalkers'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("BusStopWalkers");
   //Edge symbol end:'BusStopWalkers'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'H_walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 866, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("loop");

      });
      //Edge binding end

   })("H_walk");
   //Edge symbol end:'H_walk'

   //=========================================================
   
   //Edge symbol: 'FG_Hwalk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

   })("FG_Hwalk");
   //Edge symbol end:'FG_Hwalk'

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
   
   //Edge symbol: 'dustButton'
   (function(symbolName) {   
   
   })("dustButton");
   //Edge symbol end:'dustButton'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "SCENE_B");