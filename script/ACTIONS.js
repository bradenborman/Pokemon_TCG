	

function Fight1() {
		isEnergyAlreadyAdded = false;
		hasAlreadyDrawn = false;
			
		getAttack(ACTIVE_POKEMON.move1)
		
	}

function Fight2() {
	isEnergyAlreadyAdded = false;
	hasAlreadyDrawn = false;
	getAttack(ACTIVE_POKEMON.move2)
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
}


function takeDamage() {
	var x = (Math.floor((Math.random() * 4) + 1) * 10);
	ACTIVE_POKEMON.hp -= x;
	$(".INFO_ONE").html(displayInfo(ACTIVE_POKEMON));
	
	if(ACTIVE_POKEMON.hp <= 0)
		faintPlayer(1)
}