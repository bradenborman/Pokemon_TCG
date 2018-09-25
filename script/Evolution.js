

	
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