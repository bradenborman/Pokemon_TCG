
 var isCardEmpty_ONE = true;
 var isCardEmpty_TWO = true;
 var ACTIVE_POKEMON = null
 var isEnergyAlreadyAdded = false;
 var hasAlreadyDrawn = false;
 var ALLPOKEMON = []
 var PickedTpyes = [];
 var deckCopy=DECK.slice();
 
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
	var isValidE = false;
			
	if(Pokemon.isEnergy) //&& !isEnergyAlreadyAdded
	{
		isEnergyAlreadyAdded = true;
		addEnergy(ACTIVE_POKEMON, Pokemon)
		ev.preventDefault();
		ev.target.appendChild(document.getElementById(data));
	}
		
	if(!isCardEmpty_ONE && !Pokemon.isEnergy)
		if(checkForEvolution(Pokemon))
		{
			faintPlayer(1)
			isCardEmpty_ONE = true	
		    $('#a1').html(findRightImg(data))
			//CALL COPY ENERGY CARDS() 
		}

	if(isCardEmpty_ONE)
	{
		isCardEmpty_ONE = false
		ev.preventDefault();
		ev.target.appendChild(document.getElementById(data));
		$(".INFO_ONE").html(displayInfo(Pokemon));
		ACTIVE_POKEMON = Pokemon
	}
	
	clearHand()
	greyCards()
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
		$("#ENERGY_CARDS1").html(getSymbols(Pokemon));
	
	
	
	return basicInfo
}


function getSymbols(Pokemon) {
	
	var returnString = ""
	
	for(var i = 0; i < Pokemon.EnergyAdded.length; i++){
		switch(Pokemon.EnergyAdded[i]) {
		case "Grass":
			returnString += '<img name="GrassIcon" src="imgs/symbols/grass.png" style="width: 35px; height: 35px;" /> '
			break;
		case "Water":
			returnString += '<img name="WaterIcon" src="imgs/symbols/water.png" style="width: 35px; height: 35px;" /> '
			break;
		case "Fire":
			returnString += '<img name="FireIcon" src="imgs/symbols/fire.png" style="width: 35px; height: 35px;" /> '
			break;	
		case "Lightning":
			returnString += '<img name="LightningIcon" src="imgs/symbols/lightning.png" style="width: 35px; height: 35px;" /> '
			break;	
		case "Psychic":
			returnString += '<img name="PsychicIcon" src="imgs/symbols/psychic.png" style="width: 35px; height: 35px;" /> '
			break;	
		case "Fighting":
			returnString += '<img name="FightingIcon" src="imgs/symbols/fightingIcon.png" style="width: 35px; height: 35px;" /> '
			break;	
		
		
		default:
			returnString += ""
		}
	}
	return returnString;
}


function clearHand() {
	$('.hand').each(function() {
		if ($(this).find('img').length) { 
		
		}else { $(this).css("display", "none"); }
	});
}


function greyCards() {

$('#CARDS_IN_HAND img').each(function(){
    var NAME = $(this).attr('name')
	
	
	if(isCardEmpty_ONE) {
		if(!isFirstForm(NAME))
			$(this).addClass("GRAYOUT")
		else
			$(this).removeClass("GRAYOUT")
	}
	else{
		if(!isEnergyORNewFrom(NAME))
			$(this).addClass("GRAYOUT")
		else
			$(this).removeClass("GRAYOUT")
	}
});
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

function LoadAll() {
	do {draw(1)} 
	while(DECK.length != 0)
}

function draw(player) {
		if(player == 1 && DECK.length > 0) { //&& !hasAlreadyDrawn
			document.getElementById("CARDS_IN_HAND").innerHTML += '<div class="hand">' + getCard() +  '</div>'
			hasAlreadyDrawn = true;
		}	
		greyCards()
}

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

	greyCards()
});;


function doDamageToComputer(amount) {
	alert("You did " + amount + " damage to com")
}