
function doDamageToComputer(amount) {
	setTimeout(function(){
		$(".INFO_TWO").html(amount + " points of damage was done.")
	}, 2200);
	setTimeout(function(){
		output("COM")
	}, 3800);
}


	function THUNDER_JOLT() {
		var Ele = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Lightning").length;
		if(ACTIVE_POKEMON.eneryAttached >= 2 && Ele >= 1) {
			if(Math.floor(Math.random() * 2) == 1)
				ACTIVE_POKEMON.hp -= 10;
			doDamageToComputer(30)
		}
			 
	}

	function GNAW() {
		if(ACTIVE_POKEMON.eneryAttached >= 1)
			doDamageToComputer(10) 
	}

	function LULLABY() {
		if(ACTIVE_POKEMON.eneryAttached >= 1) { }
			//statusChange("S", 1)
	}

	function POUND() {
		if(ACTIVE_POKEMON.eneryAttached >= 2) 
			doDamageToComputer(20) 	
	}

	function DRAGON_RAGE() {
		var waters = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Water").length;
			if(waters >= 3) doDamageToComputer(50) 	
	}

	function BUBBLEBEAM() {
		var waters = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Water").length;
		if(waters >= 4) {
			doDamageToComputer(40) 
		   //statusChange("P", .5)
		} 	
	}

	function ROCK_THROW() {
		//1 F => 10 
	}

	function HARDEN() {
		//2 F => C
	}
