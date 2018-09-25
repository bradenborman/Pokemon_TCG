
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
	
	output("A", attack)
	
	$(".INFO_ONE").html(displayInfo(ACTIVE_POKEMON));



}