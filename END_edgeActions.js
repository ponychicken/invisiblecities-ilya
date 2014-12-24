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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10100, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2400, function(sym, e) {
         text1 = sym.getSymbol('text_1');
         text1.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text_1}", "click", function(sym, e) {
         text1 = sym.getSymbol('text_1');
         text1.play('opaque');
         
         text2 = sym.getSymbol('text_2');
         text2.play('0');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text_2}", "click", function(sym, e) {
         
         text1 = sym.getSymbol('text_1');
         text1.play('fade_flimmer');
         
         text2 = sym.getSymbol('text_2');
         text2.play('opaque');
         
         text3 = sym.getSymbol('text_3');
         text3.play('0');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text_3}", "click", function(sym, e) {
         text1 = sym.getSymbol('text_1');
         text1.play('fade');
         
         text2 = sym.getSymbol('text_2');
         text2.play('fade');
         
         text3 = sym.getSymbol('text_3');
         text3.play('opaque');
         
         text4 = sym.getSymbol('text_4');
         text4.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text_4}", "click", function(sym, e) {
         
         
         text3 = sym.getSymbol('text_3');
         text3.play('fade_flimmer');
         
         text4 = sym.getSymbol('text_4');
         text4.play('opaque');
         
         text5 = sym.getSymbol('text_5');
         text5.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text_5}", "click", function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${_text_6}", "click", function(sym, e) {
         
         text4 = sym.getSymbol('text_4');
         text4.play('fade');
         
         text5 = sym.getSymbol('text_5');
         text5.play('fade');
         
         text6 = sym.getSymbol('text_6');
         text6.play('opaque');
         
         sym.play('button');
         
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40500, function(sym, e) {
         window.open('INTRO.html','_self');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_H_crack}", "click", function(sym, e) {
         sym.play('crack');
         

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
   
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2119, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2821, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2119, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("fade_flimmer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2821, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("still_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4052, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opaque_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4733, function(sym, e) {
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
   
   //Edge symbol: 'H_End'
   (function(symbolName) {   
   
   })("H_head");
   //Edge symbol end:'H_head'

   //=========================================================
   
   //Edge symbol: 'H_crack'
   (function(symbolName) {   
   
   })("H_crack");
   //Edge symbol end:'H_crack'

   //=========================================================
   
   //Edge symbol: 'text_6'
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

         })("text_6");
   //Edge symbol end:'text_6'

   //=========================================================

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

})(jQuery, AdobeEdge, "END");