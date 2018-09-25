 var Bulbasaur = new Pokemon("Bulbasaur", "Grass", 40, "Fire", 1, 13, "Leech Seed", "Leech Seed", null);
 var Ivysaur = new Pokemon("Ivysaur", 60, "Grass", "Fire", 1, 20, "Vine Whip", "Poisonpowder", "Bulbasaur");
 var Venusaur = new Pokemon("Venusaur", "Grass", 100, "Fire", 2, 67, "POK\'E POWER", "Solarbeam", "Ivysaur");
 var Squirtle = new Pokemon("Squirtle", "Water", 40, "Lightning", 1, 8, "Bubble", "Withdraw", null);
 var Wartortle = new Pokemon("Wartortle", "Water", 70, "Lightning", 1, 22, "Withdraw", "Bite", "Squirtle");
 var Blastoise = new Pokemon("Blastoise", "Water", 100, "Lightning", 3, 52, "POK\'E POWER", "Hydro Pump", "Wartortle");
 var Charmander = new Pokemon("Charmander", "Fire", 50, "Water", 1, 10, "Scratch", "Ember", null);
 var Charmeleon = new Pokemon("Charmeleon", "Fire", 80, "Water", 1, 32, "Slash", "Flamerthrower", "Charmander");
 var Charizard = new Pokemon("Charizard", "Fire", 120, "Water", 3, 76, "POK\'E POWER", "Fire SPIN", "Charmeleon");
 var Caterpie = new Pokemon("Caterpie", "Grass", 40, "Fire", 1, 13, "String Shot", "String Shot", null);
 var Metapod = new Pokemon("Metapod", "Grass", 70, "Fire", 2, 21, "Stiffen", "Stun Spore", "Caterpie");
 var Butterfree = new Pokemon("Butterfree", "Grass", 70, "Fire", 0, 28, "Whirlwind", "Mega Drain", "Metapod");
 var Weedle = new Pokemon("Weedle", "Grass", 40, "Fire", 1, 12, "Posion Sting", "Posion Sting", null);
 var Kakuna = new Pokemon("Kakuna", "Grass", 80, "Fire", 2, 23, "Stiffen", "Poisonpowder", "Weedle");
 var Beedrill = new Pokemon("Beedrill", "Grass", 80, "Fire", 0, 32, "Twineedle", "Posion Sting", "Kakuna");
 var Pidgey = new Pokemon("Pidgey", "Normal", 40, "Lightning", 1, 8, "Whirlwind", "Whirlwind", null);
 var Pidgeotto = new Pokemon("Pidgeotto", "Normal", 60, "Lightning", 1, 36, "Whirlwind", "Mirror Move", "Pidgey");
 var Pidgeot = new Pokemon("Pidgeot", "Normal", 80, "Lightning", 0, 40, "Wing Attack", "Hurricane", "Pidgeotto");
 var Rattata = new Pokemon("Rattata", "Normal", 30, "Fighting", 0, 9, "Bite", "Bite", null);
 var Raticate = new Pokemon("Raticate", "Normal", 60, "Fighting", 1, 43, "Bite", "Super Fang", "Rattata");
 var Spearow = new Pokemon("Spearow", "Normal", 50, "Lightning", 0, 13, "Peck", "Mirror Move", null);
 var Fearow = new Pokemon("Fearow", "Normal", 70, "Lightning", 0, 27, "Agility", "Drill Peck", "Spearow");
 var Ekans = new Pokemon("Ekans", "Grass", 40, "Psychic", 1, 10, "Spit Posion", "Wrap", null);
 var Arbok = new Pokemon("Arbok", "Grass", 60, "Psychic", 2, 27, "Terror Strike", "Posion Fang", "Ekans");
 var Pikachu = new Pokemon("Pikachu", "Lightning", 40, "Fighting", 1, 12, "Gnaw", "Thunder Jolt", null);  //DONE
 var Raichu = new Pokemon("Raichu", "Lightning", 80, "Fighting", 1, 40, "Agility", "Thunder", "Pikachu");
 var Sandshrew = new Pokemon("Sandshrew", "Ground", 40, "Grass", 1, 12, "Sand-attack", "Sand-attack", null);
 var Sandslash = new Pokemon("Sandslash", "Ground", 70, "Grass", 1, 33, "Slash", "Fury Swipes", "Sandshrew");
 var Nidoranb = new Pokemon("Nidoranb", "Grass", 40, "Psychic", 1, 20, "Horn Harzard", "Horn Harzard", null); 
 var Nidorino = new Pokemon("Nidorino", "Grass", 60, "Psychic", 1, 25, "Double Kick", "Horn Drill", "Nidoranb"); 
 var Nidoking = new Pokemon("Nidoking", "Grass", 90, "Psychic", 3, 48, "Thrash", "Toxic", "Nidorino"); 
 var Nidoranbg = new Pokemon("Nidorang", "Grass", 60, "Psychic", 1, 13, "Fury Swipes", "Call for Family", null); 
 var Nidorina = new Pokemon("Nidorina", "Grass", 70, "Psychic", 1, 24, "Supersonic", "Double Kick", "Nidorang"); 
 var Nidoqueen = new Pokemon("Nidoqueen", "Grass", 90, "Psychic", 3, 43, "Boyfriends", "MegaPunch", "Nidorina"); 
 
 
 
 var Hitmonchan = new Pokemon("Hitmonchan", "Fighting", 70, "Psychic", 2, 33, "Jab", "Special Punch", null);
 var Alakazam = new Pokemon("Alakazam", "Psychic", 80, "Psychic", 3, 42, "POK\'E POWER", "Confuse Ray");
 var Gyarados = new Pokemon("Gyarados", "Water", 100, "Grass", 3, 41, "Dragon Rage", "Bubblebeam");	//Moves Added tocase and Functions ==> Need to get status changer created
 var Ninetales = new Pokemon("Ninetales", "Fire", 80, "Water", 1, 32, "Lure", "Fire Blast");
 var Mewtwo = new Pokemon("Mewtwo", "Psychic", 60, "Psychic", 3, 53, "Psychic", "Barrier", null); 
 var Jigglypuff = new Pokemon("Jigglypuff", "Normal", 60, "Fighting", 1, 14, "Lullaby", "Pound", null);  //Moves Added tocase and Functions ==> Need to get status changer created

 
 var Chansey = new Pokemon("Chansey", "Normal", 120, "Fighting", 3, 55, "Scrunhc", "Double-Edge", null); 
 var Arcanine = new Pokemon("Arcanine", "Fire", 100, "Water", 3, 45, "Flamerthrower", "Take-Down"); 
 var Onix = new Pokemon("Onix", "Ground", 90, "Grass", 3, 12, "Rock Throw", "Harden", null); 



 var Grass = new Pokemon("Grass"); 
 var Fire = new Pokemon("Fire");
 var Water = new Pokemon("Water")
 var Lightning = new Pokemon("Lightning")
 var Psychic = new Pokemon("Psychic")
 var Fighting = new Pokemon("Fighting")
 




function Pokemon(name, type, hp, weakness, retreat, level, move1, move2, child) {
	this.name = name;
	this.type = type;
    this.hp = hp;
	this.weakness = weakness;
	this.retreat = retreat;
	this.level = level;
	this.move1 = move1;
	this.move2 = move2;
	this.child = child;
    this.eneryAttached = 0;
	this.isEnergy = this.name == "Grass" || this.name == "Fire" || this.name == "Water" || this.name == "Lightning" || this.name == "Psychic" || this.name == "Fighting" ? true : false
	this.EnergyAdded = [];
	
	ALLPOKEMON.push(this)
}