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
         
         
         paperCount = 0;
         shoesCount = 0;
         cripCount = 0;
         tvCount = 0;
         cigCount = 0;
         trashCount = 0;
         teddyCount = 0;
         
         counter = 0;
         
         
         
         yepnope({nope:['js/jquery-ui-1.10.4.custom.min.js', 'js/jquery.ui.touch-punch.min.js'], complete: init});
         
         //________________________________________________________________pommes
         // Hide an Element.
         
         // see http://www.tutorialspoint.com/javascript/javascript_functions.htm
         //<var counter = function() {
         
         
         
         
         function init(){
         
         
         
         	//Drag This
         	sym.$('bagDrag').draggable({opacity:1, revert:'invalid'});
         
         
         
         
         
         //________________________________________________________________paper
         
         
         	//Drop on the paper only once
         	sym.$('gamePaperball').droppable({drop: function() {
         		paperCount++;
         
         		//if paper bagged up once, don't animate again when bag droppen on this 
         		if(paperCount === 1) {
         			var paper = sym.getSymbol("gamePaperball");
         			paper.play("bag_up");
         
         		//} else {
         		//	var paper = sym.getSymbol("gamePaperball");
         		//	paper.play("stop");	
         	//	};
         		}
         
         
         
         		//reset offset for draggable bag
         		sym.$("bagDrag").offset({top:865,left:250});
         		newBag = sym.getSymbol("bagDrag");
         		newBag.play("appear");
         		}
         	});
         
         
         
         //________________________________________________________________shoes
         
         
         	//Drop on the shoes only once
         	sym.$('gamShoes').droppable({drop: function() {
         		shoesCount++;
         
         		//if shoes bagged up once, don't animate again when bag droppen on this 
         		if(shoesCount === 1) {
         			var shoes = sym.getSymbol("gamShoes");
         			shoes.play("bag_up");
         
         		//} else {
         		//	var shoes = sym.getSymbol("gamShoes");
         		//	shoes.play("stop");	
         	//	};
         		}
         
         
         
         		//reset offset for draggable bag
         		sym.$("bagDrag").offset({top:865,left:250});
         		newBag = sym.getSymbol("bagDrag");
         		newBag.play("appear");
         		}
         	});
         
         
         
         
         //________________________________________________________________cripMate
         
         
         	//Drop on the shoes only once
         	sym.$('gameCrip').droppable({drop: function() {
         		cripCount++;
         
         		//if shoes bagged up once, don't animate again when bag droppen on this 
         		if(cripCount === 1) {
         			var crip = sym.getSymbol("gameCrip");
         			crip.play("bag_up");
         
         		//} else {
         		//	var crip = sym.getSymbol("gameCrip");
         		//	crip.play("stop");	
         	//	};
         		}
         
         
         
         		//reset offset for draggable bag
         		sym.$("bagDrag").offset({top:865,left:250});
         		newBag = sym.getSymbol("bagDrag");
         		newBag.play("appear");
         		}
         	});
         
         
         
         //________________________________________________________________TV
         
         
         	//Drop on the tv only once
         	sym.$('gameTV').droppable({drop: function() {
         		tvCount++;
         
         		//if tv bagged up once, don't animate again when bag droppen on this 
         		if(tvCount === 1) {
         			var tv = sym.getSymbol("gameTV");
         			tv.play("bag_up");
         
         
         		//} else {
         		//	var tv = sym.getSymbol("gameTV");
         		//	tv.play("stop");	
         	//	};
         		}
         
         
         
         		//reset offset for draggable bag
         		sym.$("bagDrag").offset({top:865,left:250});
         		newBag = sym.getSymbol("bagDrag");
         		newBag.play("appear");
         		}
         	});
         
         
         	//________________________________________________________________cigs
         
         
         	//Drop on the tv only once
         	sym.$('gameCigs2').droppable({drop: function() {
         		cigCount++;
         
         		//if tv bagged up once, don't animate again when bag droppen on this 
         		if(cigCount == 1) {
         			var cigs = sym.getSymbol("gameCigs2");
         			cigs.play("bag_up");
         
         
         		//} else {
         		//	var cigs = sym.getSymbol("gameCigs2");
         		//	cigs.play("stop");	
         	//	};
         		}
         
         
         
         		//reset offset for draggable bag
         		sym.$("bagDrag").offset({top:865,left:250});
         		newBag = sym.getSymbol("bagDrag");
         		newBag.play("appear");
         		}
         	});
         
         
         	//________________________________________________________________trash
         
         
         	//Drop on the trash only once
         	sym.$('gameTrash').droppable({drop: function() {
         		trashCount++;
         
         		//if trash bagged up once, don't animate again when bag droppen on this 
         		if(trashCount == 1) {
         			var trash = sym.getSymbol("gameTrash");
         			trash.play("bag_up");
         
         
         		//} else {
         		//	var trash = sym.getSymbol("gameTrash");
         		//	trash.play("stop");	
         	//	};
         		}
         
         
         
         		//reset offset for draggable bag
         		sym.$("bagDrag").offset({top:865,left:250});
         		newBag = sym.getSymbol("bagDrag");
         		newBag.play("appear");
         		}
         	});
         
         
         
         	//________________________________________________________________teddy
         
         
         	//Drop on the teddy only once
         	sym.$('gameTeddy').droppable({drop: function() {
         		teddyCount++;
         
         		//if teddy bagged up once, don't animate again when bag droppen on this 
         		if(teddyCount == 1) {
         			var teddy = sym.getSymbol("gameTeddy");
         			teddy.play("bag_up");
         
         
         		//} else {
         		//	var teddy = sym.getSymbol("gameTeddy");
         		//	teddy.play("stop");	
         	//	};
         		}
         
         
         
         		//reset offset for draggable bag
         		sym.$("bagDrag").offset({top:865,left:250});
         		newBag = sym.getSymbol("bagDrag");
         		newBag.play("appear");
         		}
         	});
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {
         
         
         
         
         if(counter === 7) {
         
         	sym.play('off');
         
         	}
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         window.open("SCENE_A.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

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
   
   //Edge symbol: 'bagUp_1'
   (function(symbolName) {   
   
      

   })("bagUp_1_front");
   //Edge symbol end:'bagUp_1_front'

   //=========================================================
   
   //Edge symbol: 'bagUp_2'
   (function(symbolName) {   
   
      })("bagUp_1_back");
   //Edge symbol end:'bagUp_1_back'

   //=========================================================

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
   
   //Edge symbol: 'gamePaperball'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bagUp_1_front3}", "click", function(sym, e) {
         counter++;
         console.log("counter = " + counter);
         sym.play('disappear');
         

      });
      //Edge binding end

   })("gamePaperball");
   //Edge symbol end:'gamePaperball'

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
   
   //Edge symbol: 'A_cigPile'
   (function(symbolName) {   
   
   })("A_cigPile");
   //Edge symbol end:'A_cigPile'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

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
   
   //Edge symbol: 'bagUp_2_front'
   (function(symbolName) {   
   
   })("bagUp_2_front");
   //Edge symbol end:'bagUp_2_front'

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
   
   //Edge symbol: 'bagUp_2_front_1'
   (function(symbolName) {   
   
   })("bagUp_2_back");
   //Edge symbol end:'bagUp_2_back'

   //=========================================================
   
   //Edge symbol: 'gamShoes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bagUp_2_front}", "click", function(sym, e) {
         counter++;
         console.log("counter = " + counter);
         sym.play('disappear');

      });
      //Edge binding end

   })("gameShoes");
   //Edge symbol end:'gameShoes'

   //=========================================================
   
   //Edge symbol: 'gameCrip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bagUp_3_front}", "click", function(sym, e) {
         counter++;
         console.log("counter = " + counter);
         sym.play('disappear');

      });
      //Edge binding end

   })("gameCrip");
   //Edge symbol end:'gameCrip'

   //=========================================================
   
   //Edge symbol: 'bagUp_4'
   (function(symbolName) {   
   
   })("bagUp_4");
   //Edge symbol end:'bagUp_4'

   //=========================================================
   
   //Edge symbol: 'gamePaperball_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 533, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${bagUp_43}", "click", function(sym, e) {
         counter++;
         console.log("counter = " + counter);
         sym.play('disappear');

      });
      //Edge binding end

      })("gameTV");
   //Edge symbol end:'gameTV'

   //=========================================================
   
   //Edge symbol: 'gameShoes_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bagUp_2_front}", "click", function(sym, e) {
         counter++;
         console.log("counter = " + counter);
         sym.play('disappear');

      });
         //Edge binding end

      })("gameCigs");
   //Edge symbol end:'gameCigs'

   //=========================================================
   
   //Edge symbol: 'gameCrip_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bagUp_3_front}", "click", function(sym, e) {
         counter++;
         console.log("counter = " + counter);
         sym.play('disappear');

      });
         //Edge binding end

      })("gameTrash");
   //Edge symbol end:'gameTrash'

   //=========================================================
   
   //Edge symbol: 'gamePaperball_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bagUp_1_front3}", "click", function(sym, e) {
         counter++;
         console.log("counter = " + counter);
         sym.play('disappear');
         
         

      });
         //Edge binding end

      })("gameTeddy");
   //Edge symbol end:'gameTeddy'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "GAME_1");