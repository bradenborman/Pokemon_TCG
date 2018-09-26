
function doDamageToComputer(amount) {
	setTimeout(function(){
		$(".INFO_TWO").html(amount + " points of damage was done.")
	}, 1200);
	setTimeout(function(){
		output("COM")
		if(ACTIVE_POKEMON.hp <= 0)
			faintPlayer(1)
		if(COMPUTER_POKEMON.hp <= 0) {
			$(".Active_CARD_TWO").html(getCOMCard())
			displayCOMPUTER()
			COMPUTER_POKEMON.status = "Healthy"
		}
			
	}, 2500);
	
	
	COMPUTER_POKEMON.hp -= amount
	displayCOMPUTER()
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
	
	function POISON_STING() {
		var Grass = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length;
		if(Grass >= 1) {
			if(Coinflip())
				addSleep(2)
			doDamageToComputer(10)
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
		if(ACTIVE_POKEMON.eneryAttached >= 1)
			addSleep(2)
		else 
			NotEnoughEnergys()
	}

	function DO_THE_WAVE() {
		if(ACTIVE_POKEMON.eneryAttached >= 3) 
			doDamageToComputer(10)
		else 
			NotEnoughEnergys()
			
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

	function CONFUSE_RAY() {
		var PScards = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Psychic").length;
		if(PScards >= 3) {
			if(Math.floor(Math.random() * 2) == 1)
				addConfusion(2)
			doDamageToComputer(30)
		}else {
			NotEnoughEnergys()
		}
	}

	
	
	
	
	
	
	
	
function Coinflip() {
	return (Math.floor(Math.random() * 2) == 1)
			
}
	

	
function addSleep(player) {
	if(player == 1) {
		ACTIVE_POKEMON.status = "ASLEEP"
		$(".STATUS1").html("ASLEEP");
	}else{
		COMPUTER_POKEMON.status = "ASLEEP"
		$(".STATUS2").html("ASLEEP");
	}
}

function addPoison() {
	ACTIVE_POKEMON.status = "POSIONED"
	$(".STATUS1").html("POSIONED");
}

function addConfusion(player) {
	if(player == 1) {
		ACTIVE_POKEMON.status = "CONFUSED"
		$(".STATUS1").html("CONFUSED");
	}else{
		COMPUTER_POKEMON.status = "CONFUSED"
		$(".STATUS2").html("CONFUSED");
	}
}

function addParalyzation() {
	ACTIVE_POKEMON.status = "PARALYZED"
	$(".STATUS1").html("PARALYZED");
}

function addParalyzation() {
	ACTIVE_POKEMON.status = "Healthy"
	$(".STATUS1").html("");
}