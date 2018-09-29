
function doDamageToComputer(amount) {
	
	amount = weaknessAdjuster(amount, ACTIVE_POKEMON.type, COMPUTER_POKEMON.type)
	
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
				takeDamage(10)
			doDamageToComputer(30)
		}else {
			NotEnoughEnergys()
		}
			 
	}
	
	function POISON_STING() {
		if(ACTIVE_POKEMON.name != "Beedrill") {
			if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1) {
				if(Coinflip())
					addPoison(2)
				doDamageToComputer(10)
			}else {
				NotEnoughEnergys()
			}
		}else{

			if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 3) {
				if(Coinflip())
					addPoison(2)
				doDamageToComputer(40)
			}else {
				NotEnoughEnergys()
			}
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
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 1)
			doDamageToComputer(10)
		else
			NotEnoughEnergys()
	}

	function HARDEN() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 2)
			console.log("VAR TO HOLD REMOVE DAMAGE")//PREVENT VAR HERE
		else
			NotEnoughEnergys()
	}

	function CONFUSE_RAY() {
		var PScards = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Psychic").length;
		if(PScards >= 3) {
			if(Math.floor(Math.random() * 2) == 1)
				addConfusion(2)
			doDamageToComputer(30)
		}else
			NotEnoughEnergys()
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
		if(ACTIVE_POKEMON.name == "Dugtrio" || ACTIVE_POKEMON.name == "Charmeleon" )
		{
			SLASH2(); return;
		}
		
		amt = ACTIVE_POKEMON.name == "Parasect" ? 30 : 20	
						
		if(ACTIVE_POKEMON.eneryAttached >= 2 ) 
			doDamageToComputer(amt)
		else 
			NotEnoughEnergys()
	}
		
	function SLASH2() {		
		if(ACTIVE_POKEMON.name == "Dugtrio") {
			if(ACTIVE_POKEMON.eneryAttached >= 3 && ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 2) 
				doDamageToComputer(40)
			else 
				NotEnoughEnergys()
		}else{
			if(ACTIVE_POKEMON.eneryAttached >= 3) 
				doDamageToComputer(30)
			else 
				NotEnoughEnergys()
		}
	}
		
		
	function FURY_SWIPES() {
		if(ACTIVE_POKEMON.name != "Nidoran") {
			if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 2) {
				var x = 0
				for(var t = 0; t < 3; t++)
					if(Coinflip())
						x++
			
				doDamageToComputer(20 * x)
						
			}
			else 
				NotEnoughEnergys()
		}else{
			if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1) {
				var x = 0
				for(var t = 0; t < 3; t++)
					if(Coinflip())
						x++
			
				doDamageToComputer(10 * x)
						
			}
			else 
				NotEnoughEnergys()
		}
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
	
	function AGILITY() {
		if(ACTIVE_POKEMON.name == "Fearow") {
			if(ACTIVE_POKEMON.eneryAttached >= 3) {
				if(Coinflip)
					console.log("PREVENT ALL DAMAGE and EFFECTS NEXT TURN") //VAR HERE
				doDamageToComputer(20)
			}
				else 
					NotEnoughEnergys()
		}else {
			if(ACTIVE_POKEMON.eneryAttached >= 3 && ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Lightning").length >= 1) {
				if(Coinflip)
					console.log("PREVENT ALL DAMAGE and EFFECTS NEXT TURN") //VAR HERE
				doDamageToComputer(20)
			}
			else 
				NotEnoughEnergys()
		}
	}
	
	function THUNDER() {
		if(ACTIVE_POKEMON.eneryAttached >= 4 && ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Lightning").length >= 3) {
			if(Coinflip)
				takeDamage(30)
			doDamageToComputer(60)
		}
		else 
			NotEnoughEnergys()
	}
	
	function WHIRLWIND() {
	amt = ACTIVE_POKEMON.name == "Pidgeotto" || ACTIVE_POKEMON.name == "Butterfree" ? 20 : 10	
		if(ACTIVE_POKEMON.eneryAttached >= 2) {
			doDamageToComputer(amt)
			console.log("SWAP WITH BENCH if there is one") //VAR HERE
		}
		else 
			NotEnoughEnergys()
	}
		
	function WINGATTACK() {
		if(ACTIVE_POKEMON.eneryAttached >= 2) {
			doDamageToComputer(20)
		}
		else 
			NotEnoughEnergys()
	}
		
	function HURRICANE() {
		if(ACTIVE_POKEMON.eneryAttached >= 3) {
			doDamageToComputer(30)
			console.log("RETURN cards to hand") //VAR HERE
		}
		else 
			NotEnoughEnergys()
	}
	
	function SCRATCH() {
		if(ACTIVE_POKEMON.name == "Pidgeotto") {
			if(ACTIVE_POKEMON.eneryAttached >= 2) 
				doDamageToComputer(20)
			else 
				NotEnoughEnergys()
		}else {
			if(ACTIVE_POKEMON.eneryAttached >= 1) 
				doDamageToComputer(10)
			else 
				NotEnoughEnergys()
		}
	}
	
	function SPORE() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 2) 
			addSleep(2)
		else 
			NotEnoughEnergys()
	}
		
	function LURE() {
		if(ACTIVE_POKEMON.eneryAttached >= 2) 
			console.log("Swap a pokemon") //VAR HERE
		else 
			NotEnoughEnergys()
	}
	
	function FIRE_BLAST() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fire").length >= 4) {
			console.log("CREATE function that removes one fire enegry") //VAR HERE
			doDamageToComputer(80)
		}
		else
			NotEnoughEnergys()
	}
	
	function DOUBLE_KICK() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1 && ACTIVE_POKEMON.eneryAttached >= 3) {
			var x = 0
			for(var t = 0; t < 2; t++)
				if(Coinflip())
					x++
		
			doDamageToComputer(30 * x)
		}
		else
			NotEnoughEnergys()
	}
		

	function HORN_DRILL() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 2 && ACTIVE_POKEMON.eneryAttached >= 4) {
			doDamageToComputer(50)
		}
		else
			NotEnoughEnergys()
	}
	
	
	function SUPERSONIC() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1) 
			if(Coinflip())
				addConfusion(2)
		else
			NotEnoughEnergys()
	}
			
	function CALL_FOR_FAMILY() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 2) 
			console.log("SEARCH DECK") //VAR HERE
		else
			NotEnoughEnergys()
	}
	
	function HORN_HAZARD() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1) 
			if(Coinflip())
				doDamageToComputer(30)
		else
			NotEnoughEnergys()
	}
		
	function BOY_FRIENDS() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1 && ACTIVE_POKEMON.eneryAttached >= 2) 
				doDamageToComputer(20)
		else
			NotEnoughEnergys()
	}
	
	function MEGA_PUNCH() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 2 && ACTIVE_POKEMON.eneryAttached >= 2) 
				doDamageToComputer(50)
		else
			NotEnoughEnergys()
	}
	
	function THRASH() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1 && ACTIVE_POKEMON.eneryAttached >= 3) {
			if(Coinflip())
				doDamageToComputer(40)
			else{
				takeDamage(10)
				doDamageToComputer(30)
			}
		}	
		else
			NotEnoughEnergys()
	}
	
	function TOXIC() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 3) {
			addPoison(2)
			doDamageToComputer(20)
		}	
		else
			NotEnoughEnergys()
	}
	
	function PSYCHIC() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Psychic").length >= 1 && ACTIVE_POKEMON.eneryAttached >= 2) {
			var d = (COMPUTER_POKEMON.eneryAttached * 10) + 10
			doDamageToComputer(d)
		}	
		else
			NotEnoughEnergys()
	}
	
	function PSYCHIC() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Psychic").length >= 1 && ACTIVE_POKEMON.eneryAttached >= 2) {
			var d = (COMPUTER_POKEMON.eneryAttached * 10) + 10
			doDamageToComputer(d)
		}	
		else
			NotEnoughEnergys()
	}	
	
	function BARRIER() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Psychic").length >= 2) {
			console.log("Protect mewtwo and discard en") //VAR HERE
		}	
		else
			NotEnoughEnergys()
	}		
	
	function STUN_SPORE() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 2) {
			if(Coinflip())
				addParalyzation(2)
			doDamageToComputer(20)
		}	
		else
			NotEnoughEnergys()
	}
	
	function STIFFEN() {
		if(ACTIVE_POKEMON.eneryAttached >= 2) {
			if(Coinflip())
				console.log("Prevent d") //VAR HERE
		}	
		else
			NotEnoughEnergys()
	}
	
	function PAYDAY() {
		if(ACTIVE_POKEMON.eneryAttached >= 2) {
			if(Coinflip())
				draw(1)
			doDamageToComputer(10)
		}	
		else
			NotEnoughEnergys()
	}	
	
	function TACKLE() {
		if(ACTIVE_POKEMON.eneryAttached >= 1) 
			doDamageToComputer(10)
		else
			NotEnoughEnergys()
	}	
	
	function FLAIL() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Water").length >= 1) 
			doDamageToComputer(10 * ACTIVE_POKEMON.damageTaken)
		else
			NotEnoughEnergys()
	}
	
	function POISON_POWEDER() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 2) {
			if(Coinflip())
				addPoison(2)
			doDamageToComputer(20)
		}			
		else
			NotEnoughEnergys()
	}
	
	function VINE_WHIP() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1 && ACTIVE_POKEMON.eneryAttached >= 2) 
			doDamageToComputer(30)			
		else
			NotEnoughEnergys()
	}
	
		
	function DRILL_PECK() {
		if(ACTIVE_POKEMON.eneryAttached >= 4) 
			doDamageToComputer(40)			
		else
			NotEnoughEnergys()
	}
	
	function JAB() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 1) 
			doDamageToComputer(20)			
		else
			NotEnoughEnergys()
	}
	
	function SPECIAL_PUNCH() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 2 && ACTIVE_POKEMON.eneryAttached >= 3) 
			doDamageToComputer(40)			
		else
			NotEnoughEnergys()
	}
	
	
	function SPIT_POISON() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1) 
				if(Coinflip())
					addPoison(2)
		else
			NotEnoughEnergys()
	}
	
	function SPIT_POISON() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1) 
				if(Coinflip())
					addPoison(2)
		else
			NotEnoughEnergys()
	}
	
	function WRAP() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1 && ACTIVE_POKEMON.eneryAttached >= 2) {
				if(Coinflip())
					addParalyzation(2)
				doDamageToComputer(20)			
		}
		else
			NotEnoughEnergys()
	}
	
	
	function EARTHQUAKE() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 4) {
				console.log("Damage to bench") //VAR HERE
				doDamageToComputer(70)			
		}
		else
			NotEnoughEnergys()
	}
	
	function DIG() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 1) 
				doDamageToComputer(10)			
		else
			NotEnoughEnergys()
	}
	
	function MUD_SLAP() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fighting").length >= 2) 
				doDamageToComputer(30)			
		else
			NotEnoughEnergys()
	}
	
		
	function SING() {
		if(ACTIVE_POKEMON.eneryAttached >= 1) 
				if(Coinflip())
					addSleep(2)
		else
			NotEnoughEnergys()
	}
	
			
	function METRONOME() {
		var e = ACTIVE_POKEMON.name == "Clefable" ? 1 : 3
		if(ACTIVE_POKEMON.eneryAttached >= e) 
				console.log(COMPUTER_POKEMON.move1 + " " + COMPUTER_POKEMON.move2)
		else
			NotEnoughEnergys()
	}
	
	function MININIZE() {
		if(ACTIVE_POKEMON.eneryAttached >= 2) 
				console.log("REDUCE BY 20")
		else
			NotEnoughEnergys()
	}	
	
	
	function FLAMETHROWER() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fire").length >= 2 && ACTIVE_POKEMON.eneryAttached >= 3) {
			console.log("CREATE function that removes one fire enegry") //VAR HERE
			doDamageToComputer(50)
		}		
		else
			NotEnoughEnergys()
	}
	
	function EMBER() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fire").length >= 1 && ACTIVE_POKEMON.eneryAttached >= 2) {
			console.log("CREATE function that removes one fire enegry") //VAR HERE
			doDamageToComputer(30)
		}		
		else
			NotEnoughEnergys()
	}
	
	function FIRE_SPIN() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fire").length >= 4) {
			console.log("CREATE function that removes two fire enegry") //VAR HERE
			doDamageToComputer(100)
		}		
		else
			NotEnoughEnergys()
	}
	
	
	function SCRUNCH() {
		if(ACTIVE_POKEMON.eneryAttached >= 2) 
			if(Coinflip())
				console.log("Prevent d") //VAR HERE
		else
			NotEnoughEnergys()
	}
	
	function DOUBLE_EDGE() {
		if(ACTIVE_POKEMON.eneryAttached >= 4) {
			takeDamage(80)
			doDamageToComputer(80)
		}
		else
			NotEnoughEnergys()
	}
	
	
	function STRING_SHOT() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 1) {
			if(Coinflip())
				addParalyzation(2)
			doDamageToComputer(10)
		}
		else
			NotEnoughEnergys()
	}

	function MEGA_DRAIN() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 4) {
			var x = COMPUTER_POKEMON.hp >= 40 ? 20 : 10
			takeDamage(x * -1)
			if(ACTIVE_POKEMON.hp > 70){
				ACTIVE_POKEMON.hp = 70
				ACTIVE_POKEMON.damageTaken = 0
			}
			doDamageToComputer(40)
		}
		else
			NotEnoughEnergys()
	}

	function LEECH_SEED() {
		if(ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Grass").length >= 2) {
			takeDamage(-10)
			if(ACTIVE_POKEMON.hp > 40) {
				ACTIVE_POKEMON.hp = 40
				ACTIVE_POKEMON.damageTaken = 0
			}
			doDamageToComputer(40)
		}
		else
			NotEnoughEnergys()
	}
	
	
	function HYDRO_PUMP() {
		var waterEnergy = ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Water").length
		if(waterEnergy >= 3) {
			var y = ((waterEnergy - 3) * 10) + 40
			if(y > 60)
				y = 60
			doDamageToComputer(y)
		}
		else
			NotEnoughEnergys()
	}
		
	function TWINEEDLE() {
		if(ACTIVE_POKEMON.eneryAttached >= 3) {
			var x = 0
			for(var t = 0; t < 2; t++)
				if(Coinflip())
					x++
		
			doDamageToComputer(30 * x)
		}
		else
			NotEnoughEnergys()
	}
		
	
	function TAKE_DOWN() {
		if(ACTIVE_POKEMON.eneryAttached >= 4 && ACTIVE_POKEMON.EnergyAdded.filter(c => c === "Fire").length >= 2) {
			takeDamage(30)
			doDamageToComputer(80)
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

function addPoison(player) {
	if(player == 1) {
		ACTIVE_POKEMON.status = "POSIONED"
		$(".STATUS1").html("POSIONED");
	}else{
		COMPUTER_POKEMON.status = "POSIONED"
		$(".STATUS2").html("POSIONED");
	}
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

function addParalyzation(player) {
	if(player == 1) {
		ACTIVE_POKEMON.status = "PARALYZED"
		$(".STATUS1").html("PARALYZED");
	}else{
		COMPUTER_POKEMON.status = "PARALYZED"
		$(".STATUS2").html("PARALYZED");
	}
}

