
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
		
		case "Confuse Ray":
			CONFUSE_RAY()
			break;

		case "Do the Wave":
			DO_THE_WAVE()
			break;

		case "Poison Sting":
			POISON_STING()
			break;
			
		case "Bite":
			BITE()
			break;
			
		case "Withdraw":
			WITHDRAW()
			break;
			
		case "Confuse Ray":
			CONFUSE_RAY()()
			break;
	
		case "Solarbeam":
			SOLARBEAM()()
			break;
			
		case "Bubble":
			BUBBLE()
			break;
			
		case "Peck":
			PECK()
			break;
	
		case "Mirror Move":
			MIRROR_MOVE()
			break;
	
		case "Slash":
			SLASH()
			break;
			
		case "Fury Swipes":
			FURY_SWIPES()
			break;
	
		case "Sand-attack":
			SAND_ATTACK()
			break;
			
		case "Bite":
			BITE()
			break;
			
		case "Super Fang":
			SUPER_FANG()
			break;	
		
		case "Agility":
			AGILITY()
			break;	
		
		case "Thunder":
			THUNDER()
			break;	
		
		case "Whirlwind":
			WHIRLWIND()
			break;	
			
		case "Wing Attack":
			WINGATTACK()
			break;		
		
		case "Hurricane":
			HURRICANE()
			break;		
			
		case "Spore":
			SPORE()
			break;	
			
		case "Scratch":
			SCRATCH()
			break;		
			
		case "Lure":
			LURE()
			break;
			
		case "Fire Blast":
			FIRE_BLAST()
			break;

		case "Double Kick":
			DOUBLE_KICK()
			break;

		case "Horn Drill":
			HORN_DRILL()
			break;			
		
		case "Supersonic":
			SUPERSONIC()
			break;	

		case "Double Kick":
			DOUBLE_KICK()
			break;	
		
		case "Call for Family":
			CALL_FOR_FAMILY()
			break;
			
		case "Horn Hazard":
			HORN_HAZARD()
			break;
		
		case "Boy Friends":
			BOY_FRIENDS()
			break;
		
		case "Mega Punch":
			MEGA_PUNCH()
			break;
		
		case "Thrash":
			THRASH()
			break;
			
		case "Toxic":
			TOXIC()
			break;
			
		case "Psychic":
			PSYCHIC()
			break;
		
		case "Barrier":
			BARRIER()
			break;
		
		case "Stiffen":
			STIFFEN()
			break;
			
		case "Stun Spore":
			STUN_SPORE()
			break;
			
		case "Payday":
			PAYDAY()
			break;
			
		case "Tackle":
			TACKLE()
			break;
		
		case "Flail":
			FLAIL()
			break;
			
		case "Poisonpowder":
			POISON_POWEDER()
			break;
			
		case "Vine Whip":
			VINE_WHIP()
			break;
	
		case "Dril Peck":
			DRILL_PECK()
			break;
			
		case "Jab":
			JAB()
			break;		

		case "Special Punch":
			SPECIAL_PUNCH()
			break;		

		case "Spit Poison":
			SPIT_POISON()
			break;	
			
		case "Wrap":
			WRAP()
			break;

		case "Earthquake":
			EARTHQUAKE()
			break;
			
		case "Dig":
			DIG()
			break;
			
		case "Mud Slap":
			MUD_SLAP()
			break;			
		
				
		case "Sing":
			SING()
			break;	

		
		case "Metronome":
			METRONOME()
			break;	

		case "Minimize":
			MININIZE()
			break;	

		case "Flamerthrower":
			FLAMETHROWER()
			break	
	
		case "Ember":
			EMBER()
			break
			
		case "Fire Spin":
			FIRE_SPIN()
			break
			
		case "Scrunch":
			SCRUNCH()
			break
			
		case "Double-Edge":
			DOUBLE_EDGE()
			break
	
		case "String Shot":
			STRING_SHOT()
			break
	
		case "Mega Drain":
			MEGA_DRAIN()
			break
			
		case "Leech Seed":
			LEECH_SEED()
			break	

		case "Hydro Pump":
			HYDRO_PUMP()
			break	
			
		case "Twineedle":
			TWINEEDLE()
			break	
			
		case "Take-Down":
			TAKE_DOWN()
			break	
			
		default:	
			
	}
	
	output("A", attack)
	
	$(".INFO_ONE").html(displayInfo(ACTIVE_POKEMON));



}