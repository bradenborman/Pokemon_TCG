
 var isCardEmpty_ONE = true;
 var isCardEmpty_TWO = true;
 var ACTIVE_POKEMON = null
 var isEnergyAlreadyAdded = false;
 var hasAlreadyDrawn = false;
 var ALLPOKEMON = []
 
 
 var Charizard = new Pokemon("Charizard", 120, "Water", 3, 76, "POK\'E POWER", "FIRE SPIN");
 var Raichu = new Pokemon("Raichu", 80, "Fighting", 1, 40, "Agility", "Thunder");
 var Beedrill = new Pokemon("Beedrill", 80, "Fire", 0, 32, "Twineedle", "Posion Sting");
 var Blastoise = new Pokemon("Blastoise", 100, "Lightning", 3, 52, "POK\'E POWER", "Hydro Pump");
 var Hitmonchan = new Pokemon("Hitmonchan", 70, "Psychic", 2, 33, "Jab", "Special Punch");
 var Pidgeotto = new Pokemon("Pidgeotto", 60, "Lightning", 1, 36, "Whirlwind", "Mirror Move");
 var Alakazam = new Pokemon("Alakazam", 80, "Psychic", 3, 42, "POK\'E POWER", "Confuse Ray");
 var Gyarados = new Pokemon("Gyarados", 100, "Grass", 3, 41, "Dragon Rage", "Bubblebeam");	//Moves Added tocase and Functions ==> Need to get status changer created
 var Ninetales = new Pokemon("Ninetales", 80, "Water", 1, 32, "Lure", "Fire Blast");
 var Mewtwo = new Pokemon("Mewtwo", 60, "Psychic", 3, 53, "Psychic", "Barrier"); 
 var Jigglypuff = new Pokemon("Jigglypuff", 60, "Fighting", 1, 14, "Lullaby", "Pound");  //Moves Added tocase and Functions ==> Need to get status changer created
 var Pikachu = new Pokemon("Pikachu", 40, "Fighting", 1, 12, "Gnaw", "Thunder Jolt");  //Moves Added => DONE
 var Nidoking = new Pokemon("Nidoking", 90, "Psychic", 3, 48, "Thrash", "Toxic"); 
 var Chansey = new Pokemon("Chansey", 120, "Fighting", 3, 55, "Scrunhc", "Double-Edge"); 
 var Arcanine = new Pokemon("Arcanine", 100, "Water", 3, 45, "Flamerthrower", "Take-Down"); 
 var Onix = new Pokemon("Onix", 90, "Grass", 3, 12, "Rock Throw", "Harden"); 

 var GRASS = new Pokemon("Grass"); 
 var FIRE = new Pokemon("Fire");
 var Water = new Pokemon("Water")
 var Lightning = new Pokemon("Lightning")
 var Psychic = new Pokemon("Psychic")
 var Fighting = new Pokemon("Fighting")
 
 
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
	'<img id="card11" name="Jigglypuff" ondragstart="drag(event)" draggable="true" src="imgs/jigglypuff.jpg" />',
	'<img id="card12" name="Grass" ondragstart="drag(event)" draggable="true" src="imgs/grass.jpg" />',
	'<img id="card13" name="Grass" ondragstart="drag(event)" draggable="true" src="imgs/grass.jpg" />',
	'<img id="card14" name="Grass" ondragstart="drag(event)" draggable="true" src="imgs/grass.jpg" />',
	'<img id="card15" name="Fire" ondragstart="drag(event)" draggable="true" src="imgs/fire.jpg" />',
	'<img id="card16" name="Fire" ondragstart="drag(event)" draggable="true" src="imgs/fire.jpg" />',
	'<img id="card17" name="Fire" ondragstart="drag(event)" draggable="true" src="imgs/fire.jpg" />',
	'<img id="card18" name="Pikachu" ondragstart="drag(event)" draggable="true" src="imgs/pikachu.jpg" />',
	'<img id="card19" name="Nidoking" ondragstart="drag(event)" draggable="true" src="imgs/nidoking.jpg" />',
	'<img id="card20" name="Chansey" ondragstart="drag(event)" draggable="true" src="imgs/chansey.jpg" />',
	'<img id="card21" name="Water" ondragstart="drag(event)" draggable="true" src="imgs/water.jpg" />',
	'<img id="card22" name="Water" ondragstart="drag(event)" draggable="true" src="imgs/water.jpg" />',
	'<img id="card23" name="Water" ondragstart="drag(event)" draggable="true" src="imgs/water.jpg" />',
	'<img id="card24" name="Arcanine" ondragstart="drag(event)" draggable="true" src="imgs/arcanine.jpg" />',
	'<img id="card25" name="Onix" ondragstart="drag(event)" draggable="true" src="imgs/onix.jpg" />',
	'<img id="card26" name="Lightning" ondragstart="drag(event)" draggable="true" src="imgs/lightning.jpg" />',
	'<img id="card27" name="Lightning" ondragstart="drag(event)" draggable="true" src="imgs/lightning.jpg" />',
	'<img id="card28" name="Lightning" ondragstart="drag(event)" draggable="true" src="imgs/lightning.jpg" />',
	'<img id="card29" name="Water" ondragstart="drag(event)" draggable="true" src="imgs/water.jpg" />',
	'<img id="card30" name="Psychic" ondragstart="drag(event)" draggable="true" src="imgs/psychic.jpg" />',
	'<img id="card31" name="Psychic" ondragstart="drag(event)" draggable="true" src="imgs/psychic.jpg" />',
	'<img id="card32" name="Fighting" ondragstart="drag(event)" draggable="true" src="imgs/fighting.jpg" />',
	'<img id="card33" name="Fighting" ondragstart="drag(event)" draggable="true" src="imgs/fighting.jpg" />',
]

 
 
function Pokemon(name, hp, weakness, retreat, level, move1, move2) {
    this.name = name;
    this.hp = hp;
	this.weakness = weakness;
	this.retreat = retreat;
	this.level = level;
	this.move1 = move1;
	this.move2 = move2;
    this.eneryAttached = 0;
	this.isEnergy = this.name == "Grass" || this.name == "Fire" || this.name == "Water" || this.name == "Lightning" || this.name == "Psychic" || this.name == "Fighting" ? true : false
	this.EnergyAdded = [];
	
	ALLPOKEMON.push(this)
}
 
 function getPokemonData(name) {	
	    for(var y = 0; y < ALLPOKEMON.length; y++)
			if(ALLPOKEMON[y].name == name)
				return ALLPOKEMON[y]
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	ev.dataTransfer.setData("name", ev.target.name);
}

function drop1(ev) {

	var name = ev.dataTransfer.getData("name");
	var data = ev.dataTransfer.getData("text");
	var Pokemon = getPokemonData(name)
	
	if(Pokemon.isEnergy) //&& !isEnergyAlreadyAdded
	{
		isEnergyAlreadyAdded = true;
		addEnergy(ACTIVE_POKEMON, Pokemon)
		ev.preventDefault();
		ev.target.appendChild(document.getElementById(data));
		closeNav()
	}
		
	
	if(isCardEmpty_ONE)
	{
		isCardEmpty_ONE = false
		ev.preventDefault();
		ev.target.appendChild(document.getElementById(data));
		$(".INFO_ONE").html(displayInfo(Pokemon));
		ACTIVE_POKEMON = Pokemon
		closeNav()
	}
	clearHand()
}

function addEnergy(Pokemon, energyCard) {
	Pokemon.eneryAttached++;
	Pokemon.EnergyAdded.push(energyCard.name)
	$(".INFO_ONE").html(displayInfo(Pokemon));
}



function displayInfo(Pokemon) {
	var basicInfo = "<b><span style='font-size: 2em'>" + Pokemon.name + "</span></b><br>Level: <i>" + Pokemon.level + "</i><br>HP Remaining: <i><b>" + Pokemon.hp + "</b></i><br>Weakness: <i>" + Pokemon.weakness + "</i>"
	$("#btnMove1").text(Pokemon.move1);
	$("#btnMove2").text(Pokemon.move2);
	
	if(Pokemon.EnergyAdded.length > 0)
		basicInfo += getSymbols(Pokemon);
	
	return basicInfo
}




function getSymbols(Pokemon) {
	
	var returnString = "<hr>Energy Attached<br>";
	
	for(var i = 0; i < Pokemon.EnergyAdded.length; i++){
		switch(Pokemon.EnergyAdded[i]) {
		case "Grass":
			returnString += "<span style='color: green;' class='glyphicon glyphicon-leaf'></span> "
			break;
		case "Water":
			returnString += '<span style="color: Blue;" class="glyphicon glyphicon-tint"></span> '
			break;
		case "Fire":
			returnString += '<span style="color: Orange;" class="glyphicon glyphicon-fire"></span> '
			break;	
		case "Lightning":
			returnString += '<span style="color: Yellow;" class="glyphicon glyphicon-flash"></span> '
			break;	
		case "Psychic":
			returnString += '<span  style="color: purple;" class="glyphicon glyphicon-eye-open"></span> '
			break;	
		case "Fighting":
			returnString += '<span style="color: brown;" class="glyphicon glyphicon-record"></span> '
			break;	
		
		
		default:
			returnString += ""
		}
	}
	return returnString;
}


function clearHand() {
	$('.hand').each(function() {
    if ($(this).find('img').length) { }else { $(this).css("display", "none"); }
});
}

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
}


function load() {
	
		$(".hand").eq(0).html(getCard())
		$(".hand").eq(1).html(getCard())
		$(".hand").eq(2).html(getCard())
		$(".hand").eq(3).html(getCard())
		$(".hand").eq(4).html(getCard())
		$(".hand").eq(5).html(getCard())
		
		$(".Active_CARD_TWO").html(getCOMCard())
}


function getCard() {
	var length = (DECK.length);
	var toPick = Math.floor((Math.random() * length) + 0);
	var toReturn = DECK[toPick]
	DECK.splice(toPick, 1);
	return toReturn
}



function draw(player) {
		if(player == 1 && DECK.length > 0) { //&& !hasAlreadyDrawn
			document.getElementById("CARDS_IN_HAND").innerHTML += '<div class="hand">' + getCard() +  '</div>'
			hasAlreadyDrawn = true;
		}	
}


function takeDamage() {
	var x = (Math.floor((Math.random() * 4) + 1) * 10);
	ACTIVE_POKEMON.hp -= x;
	$(".INFO_ONE").html(displayInfo(ACTIVE_POKEMON));
	
	if(ACTIVE_POKEMON.hp <= 0)
		faintPlayer(1)
}

//////////////////////////////////////////////////////////////////////

 var DECK_COM = [
	'<img id="card1" name="Charizard" ondragstart="drag(event)" draggable="true" src="imgs/back.jpg" />'
]


function getCOMCard() {
	var length = (DECK_COM.length);
	var toPick = Math.floor((Math.random() * length) + 0);
	var toReturn = DECK_COM[toPick]
	DECK_COM.splice(toPick, 1);
	return toReturn
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

$(".ActiveCARDS").on("dblclick", function(){
   // for(var y = 0; y < ALLPOKEMON.length; y++)
//	alert(ALLPOKEMON[y].name)
});;

load()






function doDamageToComputer(amount) {
	alert("You did " + amount + " damage to com")
}



function getAttack(attack) {
	
	
	switch(attack) {
		
		case "Rock Throw":
			ROCK_THROW()
			break;

		case "Harden":
			HARDEN()
			break;
			
		case "Dragon Rage":
			DRAGON_RAGE()
			break;
			
		case "Bubblebeam":
			BUBBLEBEAM()
			break;	
			
		case "Pound":
			POUND()
			break;

		case "Lullaby":
			LULLABY()
			break;
		
		case "Gnaw":
			GNAW()
			break;
		
		case "Thunder Jolt":
			THUNDER_JOLT()
			break;
			
		default:
			
	}
$(".INFO_ONE").html(displayInfo(ACTIVE_POKEMON));
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













