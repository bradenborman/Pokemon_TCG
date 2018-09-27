
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

	
	function WITHDRAW() {
		var w = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Water").length;
		if(ACTIVE_POKEMON.eneryAttached >= 2 && w >= 1) {
			if(Coinflip()) {
				console.log("STILL NEEDS A NEW VAR")//PREVENT VAR HERE
			}
		} else 
			NotEnoughEnergys()
		
	}
	
	function BITE() {
		
		if(ACTIVE_POKEMON.name == "Wartortle") { 
		var w = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Water").length;
		if(ACTIVE_POKEMON.eneryAttached >= 3 && w >= 1)
			doDamageToComputer(40)
		else 
			NotEnoughEnergys()
		}
		else if(ACTIVE_POKEMON.name == "Rattata" || ACTIVE_POKEMON.name == "Raticate") { //rattata
				if(ACTIVE_POKEMON.eneryAttached >= 1 ) {
					doDamageToComputer(20)
				}
				else 
					NotEnoughEnergys()
		}
		
	}
	
	
	function CONFUSE_RAY() {
		var f = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fire").length;
		if(f >= 2) {
			if(Coinflip())
				addConfusion(2)
			doDamageToComputer(10)
		}
		else 
			NotEnoughEnergys()
	}
	
	
	function SOLARBEAM() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 4) {
			doDamageToComputer(60)
		}
		else 
			NotEnoughEnergys()
	}
	
	function BUBBLE() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Water").length >= 1) {
			if(Coinflip())
				addParalyzation(2)
			doDamageToComputer(10)
		}
		else 
			NotEnoughEnergys()
	}
	
	function WITHDRAW() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Water").length >= 1) {
			if(Coinflip())
				addParalyzation(2)
			doDamageToComputer(10)
		}
		else 
			NotEnoughEnergys()
	}
	
	
		
	function PECK() {
		if(ACTIVE_POKEMON.eneryAttached >= 1 ) {
			doDamageToComputer(10)
		}
		else 
			NotEnoughEnergys()
	}
	
	function MIRROR_MOVE() {
		if(ACTIVE_POKEMON.eneryAttached >= 3 ) {
			console.log("NEED TO SET UP PAST DAMAGE VAR")//VAR HERE
		}
		else 
			NotEnoughEnergys()
	}
	
	
	function SLASH() {
		if(ACTIVE_POKEMON.eneryAttached >= 2 ) 
			doDamageToComputer(20)
		else 
			NotEnoughEnergys()
	}
	
	
	function FURY_SWIPES() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 2) {
			var x = 0
			for(var t = 0; t < 3; t++)
				if(Coinflip())
					x++
		
			doDamageToComputer(20 * x)
					
		}
		else 
			NotEnoughEnergys()
	}
	
	
	
	function SAND_ATTACK() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 1) {
			if(Coinflip)
				console.log("CHANGE PREVENT ATTACK NEXT TIME = true") //VAR HERE
			doDamageToComputer(10)
		}
		else 
			NotEnoughEnergys()
	}
	
	
	function SUPER_FANG() {
		if(ACTIVE_POKEMON.eneryAttached >= 3) {
			doDamageToComputer(Math.ceil(((COMPUTER_POKEMON.hp / 2) / 10)) * 10)
		}
		else 
			NotEnoughEnergys()
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