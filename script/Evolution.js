


function checkForEvolution(droppedPokemon) {
	return ACTIVE_POKEMON.name == droppedPokemon.child ? true : false
}



function findRightImg(imgID) {		
	for(var y = 0; y < deckCopy.length; y++)
	{
		if(deckCopy[y].includes(imgID))
			return deckCopy[y]
	}
}


function isFirstForm(name) {
	var pokemon = getPokemonData(name)
	
		if(pokemon.child == null )
			return true
		else
			return false
}


function isEnergyORNewFrom(name) {
		
	var pokemon = getPokemonData(name)
		
	if(pokemon.child == ACTIVE_POKEMON.name)
		return true
		
	var pokemon = getPokemonData(name)
		return pokemon.isEnergy ? true : false			
}