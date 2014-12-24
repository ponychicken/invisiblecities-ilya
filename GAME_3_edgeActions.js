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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         counter = 0;
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         if(counter === 5){
         	sym.play('off');
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6349, function(sym, e) {
         window.open('END.html','_self');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

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
   
   //Edge symbol: 'C_wind1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_C_wind1}", "click", function(sym, e) {
         counter++;
         sym.play('fly');

      });
      //Edge binding end

   })("C_wind1");
   //Edge symbol end:'C_wind1'

   //=========================================================
   
   //Edge symbol: 'C_wind3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_C_wind3}", "click", function(sym, e) {
         counter++;
         sym.play('fly');

      });
      //Edge binding end

   })("C_wind3");
   //Edge symbol end:'C_wind3'

   //=========================================================
   
   //Edge symbol: 'C_wind2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 267, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_C_wind2}", "click", function(sym, e) {
         counter++;
         sym.play('fly');

      });
      //Edge binding end

   })("C_wind2");
   //Edge symbol end:'C_wind2'

})(jQuery, AdobeEdge, "GAME_3");