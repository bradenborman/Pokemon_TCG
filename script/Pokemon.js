 var Bulbasaur = new Pokemon("Bulbasaur", 40, "Fire", 1, 13, "Leech Seed", "Leech Seed");
 var Ivysaur = new Pokemon("Ivysaur", 60, "Fire", 1, 20, "Vine Whip", "Poisonpowder");
 var Venusaur = new Pokemon("Venusaur", 100, "Fire", 2, 67, "POK\'E POWER", "Solarbeam");
 var Squirtle = new Pokemon("Squirtle", 40, "Lightning", 1, 8, "Bubble", "Withdraw");
 var Wartortle = new Pokemon("Wartortle", 70, "Lightning", 1, 22, "Withdraw", "Bite");
 var Blastoise = new Pokemon("Blastoise", 100, "Lightning", 3, 52, "POK\'E POWER", "Hydro Pump");
 var Charmander = new Pokemon("Charmander", 50, "Water", 1, 10, "Scratch", "Ember");
 var Charmeleon = new Pokemon("Charmeleon", 80, "Water", 1, 32, "Slash", "Flamerthrower");
 var Charizard = new Pokemon("Charizard", 120, "Water", 3, 76, "POK\'E POWER", "Fire SPIN");
 var Caterpie = new Pokemon("Caterpie", 40, "Fire", 1, 13, "String Shot", "String Shot");
 var Metapod = new Pokemon("Metapod", 70, "Fire", 2, 21, "Stiffen", "Stun Spore");
 var Butterfree = new Pokemon("Butterfree", 70, "Fire", 0, 28, "Whirlwind", "Mega Drain");
 var Weedle = new Pokemon("Weedle", 40, "Fire", 1, 12, "Posion Sting", "Posion Sting");
 var Kakuna = new Pokemon("Kakuna", 80, "Fire", 2, 23, "Stiffen", "Poisonpowder");
 var Beedrill = new Pokemon("Beedrill", 80, "Fire", 0, 32, "Twineedle", "Posion Sting");
 var Pidgey = new Pokemon("Pidgey", 40, "Lightning", 1, 8, "Whirlwind", "Whirlwind");
 var Pidgeotto = new Pokemon("Pidgeotto", 60, "Lightning", 1, 36, "Whirlwind", "Mirror Move");
 var Pidgeot = new Pokemon("Pidgeot", 80, "Lightning", 0, 40, "Wing Attack", "Hurricane");
 var Rattata = new Pokemon("Rattata", 30, "Fighting", 0, 9, "Bite", "Bite");
 var Raticate = new Pokemon("Raticate", 60, "Fighting", 1, 43, "Bite", "Super Fang");
 var Spearow = new Pokemon("Spearow", 50, "Lightning", 0, 13, "Peck", "Mirror Move");
 var Fearow = new Pokemon("Fearow", 70, "Lightning", 0, 27, "Agility", "Drill Peck");
 var Ekans = new Pokemon("Ekans", 40, "Psychic", 1, 10, "Spit Posion", "Wrap");
 var Arbok = new Pokemon("Arbok", 60, "Psychic", 2, 27, "Terror Strike", "Posion Fang");
 var Pikachu = new Pokemon("Pikachu", 40, "Fighting", 1, 12, "Gnaw", "Thunder Jolt");  //DONE
 var Raichu = new Pokemon("Raichu", 80, "Fighting", 1, 40, "Agility", "Thunder");
 var Sandshrew = new Pokemon("Sandshrew", 40, "Grass", 1, 12, "Sand-attack", "Sand-attack");
 var Sandslash = new Pokemon("Sandslash", 70, "Grass", 1, 33, "Slash", "Fury Swipes");

 
 
 
 var Hitmonchan = new Pokemon("Hitmonchan", 70, "Psychic", 2, 33, "Jab", "Special Punch");
 var Alakazam = new Pokemon("Alakazam", 80, "Psychic", 3, 42, "POK\'E POWER", "Confuse Ray");
 var Gyarados = new Pokemon("Gyarados", 100, "Grass", 3, 41, "Dragon Rage", "Bubblebeam");	//Moves Added tocase and Functions ==> Need to get status changer created
 var Ninetales = new Pokemon("Ninetales", 80, "Water", 1, 32, "Lure", "Fire Blast");
 var Mewtwo = new Pokemon("Mewtwo", 60, "Psychic", 3, 53, "Psychic", "Barrier"); 
 var Jigglypuff = new Pokemon("Jigglypuff", 60, "Fighting", 1, 14, "Lullaby", "Pound");  //Moves Added tocase and Functions ==> Need to get status changer created

 var Nidoking = new Pokemon("Nidoking", 90, "Psychic", 3, 48, "Thrash", "Toxic"); 
 var Chansey = new Pokemon("Chansey", 120, "Fighting", 3, 55, "Scrunhc", "Double-Edge"); 
 var Arcanine = new Pokemon("Arcanine", 100, "Water", 3, 45, "Flamerthrower", "Take-Down"); 
 var Onix = new Pokemon("Onix", 90, "Grass", 3, 12, "Rock Throw", "Harden"); 



 var Grass = new Pokemon("Grass"); 
 var Fire = new Pokemon("Fire");
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