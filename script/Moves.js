
function doDamageToComputer(amount) {
	setTimeout(function(){
		$(".INFO_TWO").html(amount + " points of damage was done.")
	}, 1200);
	setTimeout(function(){
		output("COM")
		if(ACTIVE_POKEMON.hp == 0)
			faintPlayer(1)
	}, 2500);
	
	
}

function NotEnoughEnergys() {
	setTimeout(function(){
		$(".INFO_TWO").html("Not enough energy cards attached.")
	}, 1200);
	setTimeout(function(){
		output("COM")
	}, 2500);
}


	function THUNDER_JOLT() {
		var Ele = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Lightning").length;
		if(ACTIVE_POKEMON.eneryAttached >= 2 && Ele >= 1) {
			if(Math.floor(Math.random() * 2) == 1)
				ACTIVE_POKEMON.hp -= 10;
			doDamageToComputer(30)
		}else {
			NotEnoughEnergys()
		}
			 
	}

	function GNAW() {
		if(ACTIVE_POKEMON.eneryAttached >= 1)
			doDamageToComputer(10)
		else 
			NotEnoughEnergys()
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
		} else {
			NotEnoughEnergys()
		}		
	}

	function ROCK_THROW() {
		//1 F => 10 
	}

	function HARDEN() {
		//2 F => C
	}
