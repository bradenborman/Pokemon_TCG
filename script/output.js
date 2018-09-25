


	var PICK_A_CARD = "Player 1: Please choose a starter pokemon."
	var DO_ACTION   = "Player 1: Please do an action"
	var POKEMON_PICKED = " was dropped into play."
	var ENERY_ATTACHED = " was attached."
	var DAMAGE_TAKEN = " points were taken as damage"
	var ATTACK = "Player 1 uses: "
	var COMPUTERS_TURN = "Computers Turn to Play"
		
	function output(tpye, message) {
		
		
		switch(tpye) {
			case "E":
				message += ENERY_ATTACHED
				break;
			case "D":
				message += POKEMON_PICKED
				break;
			case "SlotEmpty":
				message = PICK_A_CARD
				break;
			case "TD":
				message += DAMAGE_TAKEN
				break;
			case "EV":
				message  = message.child + " evolved into.. " + message.name + "!" 
				break;	
			case "A":
				message = ATTACK + message
				break;
			case "COM":
				message = COMPUTERS_TURN
				break;
				
		default:
			
		}
		
		
	
		
		$(".INFO_TWO").html(message)
	}
	