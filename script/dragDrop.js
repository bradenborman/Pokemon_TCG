
 var isCardEmpty_ONE = true;
 var isCardEmpty_TWO = true;
 var ACTIVE_POKEMON = null
 
 var Charizard = new Pokemon("Charizard", 120, "Water", 3, 76, "POK\'E POWER", "FIRE SPIN");
 var Raichu = new Pokemon("Raichu", 80, "Fighting", 1, 40, "Agility", "Thunder");
 var Beedrill = new Pokemon("Beedrill", 80, "Fire", 0, 32, "Twineedle", "Posion Sting");
 var Blastoise = new Pokemon("Blastoise", 100, "Lightning", 3, 52, "POK\'E POWER", "Hydro Pump");
 var Hitmonchan = new Pokemon("Hitmonchan", 70, "Psychic", 2, 33, "Jab", "Special Punch");
 

function Pokemon(name, hp, weakness, retreat, level, move1, move2) {
    this.name = name;
    this.hp = hp;
	this.weakness = weakness;
	this.retreat = retreat;
	this.level = level;
	this.move1 = move1;
	this.move2 = move2;
    this.eneryAttached = 0;
}
 
 function getPokemonData(name) {	
	if(name == Charizard.name)
		return Charizard
	
	else if(name == Beedrill.name)
		return Beedrill
	
	else if(name == Hitmonchan.name)
		return Hitmonchan
	
	else if(name == Blastoise.name)
		return Blastoise
	
	else if(name == Raichu.name)
		return Raichu
	
	else
		return null
	
}
 
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	ev.dataTransfer.setData("name", ev.target.name);
}

function drop1(ev) {

	if(isCardEmpty_ONE)
	{
		isCardEmpty_ONE = false
		ev.preventDefault();
		var name = ev.dataTransfer.getData("name");
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
		var Pokemon = getPokemonData(name)
		var Display = "<b><span style='font-size: 2em'>" + Pokemon.name + "</span></b><br>Level: <i>" + Pokemon.level + "</i><br>HP Remaining: <i>" + Pokemon.hp + "</i><br>Weakness: <i>" + Pokemon.weakness + "</i>"
		
		$(".INFO_ONE").html(Display);
		ACTIVE_POKEMON = Pokemon
	}
	
	clearHand()
}

function clearHand() {
	//$(".hand").has().css("display", "none");
	$('.hand').each(function() {
    if ($(this).find('img').length) {
        
    }else {
		$(this).css("display", "none");
	}
});
	
	
}





function Fight1() {
	alert(ACTIVE_POKEMON.move1)
}

function Fight2() {
	alert(ACTIVE_POKEMON.move2)
}




 
function faintPlayer(player) {
var cardHolder = null;
	
		if(player == 1){
			cardHolder = document.getElementById("a1");
			isCardEmpty_ONE = true
			$(".INFO_ONE").html("");
		}else{
			cardHolder = document.getElementById("a2");
			isCardEmpty_TWO = true
		}
		
		cardHolder.innerHTML = ""
		
}




























function drop2(ev) {
    if(isCardEmpty_TWO)
	{
	isCardEmpty_TWO = false
	ev.preventDefault();
	var name = ev.dataTransfer.getData("name");
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
	$(".INFO_TWO").text(name);
	}else{
		alert("Already Card")
	}

}