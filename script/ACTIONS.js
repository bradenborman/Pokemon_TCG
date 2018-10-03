	

function Fight1() {
		if(isPlayerOneTurn) {	
			isEnergyAlreadyAdded = false;
			hasAlreadyDrawn = false;	
			getAttack(ACTIVE_POKEMON.move1)
		}
	}

function Fight2() {
	if(isPlayerOneTurn) {		
		isEnergyAlreadyAdded = false;
		hasAlreadyDrawn = false;
		getAttack(ACTIVE_POKEMON.move2)
	}
}

function faintPlayer(player) {
	var cardHolder = null;
	isEnergyAlreadyAdded = false;
	hasAlreadyDrawn = false;	
	ACTIVE_POKEMON = null;
			if(player == 1){
				cardHolder = document.getElementById("a1");
				isCardEmpty_ONE = true
				$(".INFO_ONE").html("");
			}else{
				cardHolder = document.getElementById("a2");
				isCardEmpty_TWO = true
			}
			
			cardHolder.innerHTML = ""
			greyCards()
			$("#ENERGY_CARDS1").html("")
			output("SlotEmpty")
			$("#btnMove1").text(" ");
			$("#btnMove2").text(" ");
}


function takeDamage(y) {
	var x = (Math.floor((Math.random() * 4) + 1) * 10);
	if(y != null)
		x = y
	
	output("TD", x)
	ACTIVE_POKEMON.damageTaken += x
	ACTIVE_POKEMON.hp -= x;
	$(".INFO_ONE").html(displayInfo(ACTIVE_POKEMON));
	
	if(ACTIVE_POKEMON.hp <= 0)
		faintPlayer(1)
}

function carryOverToNextForm(currentPokemon) {

	var child = getPokemonData(currentPokemon.child) 
	
	currentPokemon.damageTaken += child.damageTaken
	currentPokemon.hp -= currentPokemon.damageTaken
	currentPokemon.eneryAttached = child.eneryAttached
	currentPokemon.EnergyAdded = child.EnergyAdded
	
}


function statusChange() {
	var x = (Math.floor((Math.random() * 5) + 1));
	
	if(x == 1)
		addSleep()
	else if(x == 2)
		addPoison()
	else if(x == 3)
		addConfusion()
	else if(x == 4)
		$(".STATUS1").html("PARALYZED");
	else 
		removeStatus()
	
}



function weaknessAdjuster(amount, x, y) {
		
		if(x == "Grass" && y == "Ground")
			amount += amount

		else if(x == "Water")
		{
			if(y == "Fire")
				 amount += amount
		}
		else if(x == "Fire")
		{
			if(y == "Grass")
				 amount += amount
		}	
		else if(x == "Lightning")
		{
			if(y == "Water")
				amount += amount
		}		
		else if(x == "Fighting" || x == "Ground")
		{
			if(y == "Normal")
				 amount += amount
		}				
		else if(x == "Psychic")
		{
			if(y == "Grass" || y == "Fighting")
				 amount += amount
			else
				 amount -= 30
		}		
		
	
	if(amount < 0)
		amount = 0
	
		return amount
		
}






function COMPUTERS_TURN_START() {
	
	
	
	setTimeout(function(){
		takeDamage(10)
		isPlayerOneTurn = true;
	}, 2500);
		
}





