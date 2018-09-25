


function checkForEvolution(droppedPokemon) {
	return ACTIVE_POKEMON.name == droppedPokemon.child ? true : false
}



function findRightImg(imgID) {		
	for(var y = 0; y < deckCopy.length; y++)
		if(deckCopy[y].includes(imgID))
			return deckCopy[y]
}


function isFirstForm(name) {
	var pokemon = getPokemonData(name)
	return pokemon.child == null ? true : false
}


function isEnergyORNewFrom(name) {
		
	var pokemon = getPokemonData(name)
		return pokemon.isEnergy || pokemon.child == ACTIVE_POKEMON.name ? true : false			
}