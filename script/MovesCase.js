
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
		
		default:
			
	}
	
	output("A", attack)
	
	$(".INFO_ONE").html(displayInfo(ACTIVE_POKEMON));



}