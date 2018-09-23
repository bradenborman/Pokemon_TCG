


 var isCardEmpty_ONE = true;
 var isCardEmpty_TWO = true;
 var ACTIVE_POKEMON = null
 
 var Charizard = new Pokemon("Charizard", 120, "Water", 3, 76, "POK\'E POWER", "FIRE SPIN");
 var Raichu = new Pokemon("Raichu", 80, "Fighting", 1, 40, "Agility", "Thunder");
 var Beedrill = new Pokemon("Beedrill", 80, "Fire", 0, 32, "Twineedle", "Posion Sting");
 var Blastoise = new Pokemon("Blastoise", 100, "Lightning", 3, 52, "POK\'E POWER", "Hydro Pump");
 var Hitmonchan = new Pokemon("Hitmonchan", 70, "Psychic", 2, 33, "Jab", "Special Punch");
 var Pidgeotto = new Pokemon("Pidgeotto", 60, "Lightning", 1, 36, "Whirlwind", "Mirror Move");
 var Alakazam = new Pokemon("Alakazam", 80, "Psychic", 3, 42, "POK\'E POWER", "Confuse Ray");
 var Gyarados = new Pokemon("Gyarados", 100, "Grass", 3, 41, "Dragon Rage", "Bubblebeam");
 var Ninetales = new Pokemon("Ninetales", 80, "Water", 1, 32, "Lure", "Fire Blast");
 var Mewtwo = new Pokemon("Mewtwo", 60, "Psychic", 3, 53, "Psychic", "Barrier"); 
 var Jigglypuff = new Pokemon("Jigglypuff", 60, "Fighting", 1, 14, "Lullaby", "Pound"); 

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
	
	else if(name == Pidgeotto.name)
		return Pidgeotto
	
	else if(name == Alakazam.name)
		return Alakazam
	
	else if(name == Gyarados.name)
		return Gyarados
	
	else if(name == Ninetales.name)
		return Ninetales
	
	else if(name == Mewtwo.name)
		return Mewtwo
	
	else if(name == Jigglypuff.name)
		return Jigglypuff
	
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
		closeNav()
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


 var DECK = [
	'<img id="card1" name="Charizard" ondragstart="drag(event)" draggable="true" src="imgs/charizard.jpg" />',
	'<img id="card2" name="Raichu" ondragstart="drag(event)" draggable="true" src="imgs/raichu.jpg" />',
	'<img id="card3" name="Beedrill" ondragstart="drag(event)" draggable="true" src="imgs/beedrill.jpg" />',
	'<img id="card4" name="Blastoise" ondragstart="drag(event)" draggable="true" src="imgs/blastoise.jpg" />',
	'<img id="card5" name="Hitmonchan" ondragstart="drag(event)" draggable="true" src="imgs/hitmonchan.jpg" />',
	'<img id="card6" name="Pidgeotto" ondragstart="drag(event)" draggable="true" src="imgs/pidgeotto.jpg" />',
	'<img id="card7" name="Alakazam" ondragstart="drag(event)" draggable="true" src="imgs/alakazam.jpg" />',
	'<img id="card8" name="Gyarados" ondragstart="drag(event)" draggable="true" src="imgs/gyarados.jpg" />',
	'<img id="card9" name="Ninetales" ondragstart="drag(event)" draggable="true" src="imgs/ninetales.jpg" />',
	'<img id="card10" name="Mewtwo" ondragstart="drag(event)" draggable="true" src="imgs/mewtwo.jpg" />',
	'<img id="card11" name="Jigglypuff" ondragstart="drag(event)" draggable="true" src="imgs/jigglypuff.jpg" />'
]


function loadHand() {
	
		$(".hand").eq(0).html(getCard())
		$(".hand").eq(1).html(getCard())
		$(".hand").eq(2).html(getCard())
		$(".hand").eq(3).html(getCard())
		$(".hand").eq(4).html(getCard())
}


function getCard() {
	var length = (DECK.length);
	var toPick = Math.floor((Math.random() * length) + 0);
	var toReturn = DECK[toPick]
	DECK.splice(toPick, 1);
	return toReturn
}

loadHand()




function draw(player) {
	
		if(player == 1 && DECK.length > 0)
			document.getElementById("CARDS_IN_HAND").innerHTML += '<div class="hand">' + getCard() +  '</div>'
		
		
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