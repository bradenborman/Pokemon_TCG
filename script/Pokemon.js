
 var Bulbasaur = new Pokemon("Bulbasaur", 40, "Fire", 1, 13, "Leech Seed", "Leech Seed");
 var Ivysaur = new Pokemon("Ivysaur", 60, "Fire", 1, 20, "Vine Whip", "Poisonpowder");
 var Venusaur = new Pokemon("Venusaur", 100, "Fire", 2, 67, "POK\'E POWER", "Solarbeam");
 var Squirtle = new Pokemon("Squirtle", 40, "Lightning", 1, 8, "Bubble", "Withdraw");
 var Wartortle = new Pokemon("Wartortle", 70, "Lightning", 1, 22, "Withdraw", "Bite");
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