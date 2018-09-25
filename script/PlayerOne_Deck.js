  var DECK = [
	'<img id="card1" name="Charizard" ondragstart="drag(event)" draggable="true" src="imgs/charizard.jpg" />',
	'<img id="card2" name="Raichu" ondragstart="drag(event)" draggable="true" src="imgs/raichu.jpg" />',
	'<img id="card3" name="Beedrill" ondragstart="drag(event)" draggable="true" src="imgs/beedrill.jpg" />',
	'<img id="card4" name="Blastoise" ondragstart="drag(event)" draggable="true" src="imgs/blastoise.jpg" />',
	'<img id="card5" name="Hitmonchan" ondragstart="drag(event)" draggable="true" src="imgs/hitmonchan.jpg" />',
	'<img id="card6" name="Pidgeotto" ondragstart="drag(event)" draggable="true" src="imgs/pidgeotto.jpg" />',
	'<img id="card7" name="Alakazam" ondragstart="drag(event)" draggable="true" src="imgs/alakazam.jpg" />',
	'<img id="card8" name="Gyarados" ondragstart="drag(event)" draggable="true" src="imgs/gyarados.jpg" />',
	'<img id="card9" name="Ninetales" ondragstart="drag(event)" draggable="true" src="imgs/ninetales.jpg" />',
	'<img id="card10" name="Mewtwo" ondragstart="drag(event)" draggable="true" src="imgs/mewtwo.jpg" />',
	'<img id="card11" name="Jigglypuff" ondragstart="drag(event)" draggable="true" src="imgs/jigglypuff.jpg" />',
	'<img id="card12" name="Grass" ondragstart="drag(event)" draggable="true" src="imgs/grass.jpg" />',
	'<img id="card13" name="Grass" ondragstart="drag(event)" draggable="true" src="imgs/grass.jpg" />',
	'<img id="card14" name="Grass" ondragstart="drag(event)" draggable="true" src="imgs/grass.jpg" />',
	'<img id="card15" name="Fire" ondragstart="drag(event)" draggable="true" src="imgs/fire.jpg" />',
	'<img id="card16" name="Fire" ondragstart="drag(event)" draggable="true" src="imgs/fire.jpg" />',
	'<img id="card17" name="Fire" ondragstart="drag(event)" draggable="true" src="imgs/fire.jpg" />',
	'<img id="card18" name="Pikachu" ondragstart="drag(event)" draggable="true" src="imgs/pikachu.jpg" />',
	'<img id="card19" name="Nidoking" ondragstart="drag(event)" draggable="true" src="imgs/nidoking.jpg" />',
	'<img id="card20" name="Chansey" ondragstart="drag(event)" draggable="true" src="imgs/chansey.jpg" />',
	'<img id="card21" name="Water" ondragstart="drag(event)" draggable="true" src="imgs/water.jpg" />',
	'<img id="card22" name="Water" ondragstart="drag(event)" draggable="true" src="imgs/water.jpg" />',
	'<img id="card23" name="Water" ondragstart="drag(event)" draggable="true" src="imgs/water.jpg" />',
	'<img id="card24" name="Arcanine" ondragstart="drag(event)" draggable="true" src="imgs/arcanine.jpg" />',
	'<img id="card25" name="Onix" ondragstart="drag(event)" draggable="true" src="imgs/onix.jpg" />',
	'<img id="card26" name="Lightning" ondragstart="drag(event)" draggable="true" src="imgs/lightning.jpg" />',
	'<img id="card27" name="Lightning" ondragstart="drag(event)" draggable="true" src="imgs/lightning.jpg" />',
	'<img id="card28" name="Lightning" ondragstart="drag(event)" draggable="true" src="imgs/lightning.jpg" />',
	'<img id="card29" name="Water" ondragstart="drag(event)" draggable="true" src="imgs/water.jpg" />',
	'<img id="card30" name="Psychic" ondragstart="drag(event)" draggable="true" src="imgs/psychic.jpg" />',
	'<img id="card31" name="Psychic" ondragstart="drag(event)" draggable="true" src="imgs/psychic.jpg" />',
	'<img id="card32" name="Fighting" ondragstart="drag(event)" draggable="true" src="imgs/fighting.jpg" />',
	'<img id="card33" name="Fighting" ondragstart="drag(event)" draggable="true" src="imgs/fighting.jpg" />',
	'<img id="card34" name="Bulbasaur" ondragstart="drag(event)" draggable="true" src="imgs/bulbasaur.jpg" />',
	'<img id="card35" name="Ivysaur" ondragstart="drag(event)" draggable="true" src="imgs/ivysaur.jpg" />',
	'<img id="card36" name="Venusaur" ondragstart="drag(event)" draggable="true" src="imgs/venusaur.jpg" />',
	'<img id="card37" name="Squirtle" ondragstart="drag(event)" draggable="true" src="imgs/squirtle.jpg" />',
	'<img id="card38" name="Wartortle" ondragstart="drag(event)" draggable="true" src="imgs/wartortle.jpg" />',
	'<img id="card39" name="Charmander" ondragstart="drag(event)" draggable="true" src="imgs/charmander.jpg" />',
	'<img id="card40" name="Charmeleon" ondragstart="drag(event)" draggable="true" src="imgs/charmeleon.jpg" />',
	'<img id="card41" name="Caterpie" ondragstart="drag(event)" draggable="true" src="imgs/caterpie.jpg" />',
	'<img id="card41" name="Metapod" ondragstart="drag(event)" draggable="true" src="imgs/metapod.jpg" />',
	'<img id="card42" name="Butterfree" ondragstart="drag(event)" draggable="true" src="imgs/butterfree.jpg" />',
	'<img id="card43" name="Weedle" ondragstart="drag(event)" draggable="true" src="imgs/weedle.jpg" />',
	'<img id="card44" name="Kakuna" ondragstart="drag(event)" draggable="true" src="imgs/kakuna.jpg" />',
	'<img id="card45" name="Pidgey" ondragstart="drag(event)" draggable="true" src="imgs/pidgey.jpg" />',
	'<img id="card46" name="Pidgeot" ondragstart="drag(event)" draggable="true" src="imgs/pidgeot.jpg" />',
	'<img id="card47" name="Rattata" ondragstart="drag(event)" draggable="true" src="imgs/rattata.jpg" />',
	'<img id="card48" name="Raticate" ondragstart="drag(event)" draggable="true" src="imgs/raticate.jpg" />',
	'<img id="card49" name="Spearow" ondragstart="drag(event)" draggable="true" src="imgs/spearow.jpg" />',
	'<img id="card50" name="Fearow" ondragstart="drag(event)" draggable="true" src="imgs/fearow.jpg" />',
	'<img id="card51" name="Arbok" ondragstart="drag(event)" draggable="true" src="imgs/arbok.jpg" />',
	'<img id="card52" name="Sandshrew" ondragstart="drag(event)" draggable="true" src="imgs/sandshrew.jpg" />',
	'<img id="card53" name="Sandslash" ondragstart="drag(event)" draggable="true" src="imgs/sandslash.jpg" />',	
	'<img id="card54" name="Nidoranb" ondragstart="drag(event)" draggable="true" src="imgs/nidoran.jpg" />',	
	'<img id="card55" name="Nidorino" ondragstart="drag(event)" draggable="true" src="imgs/nidorino.jpg" />',
	'<img id="card56" name="Nidorang" ondragstart="drag(event)" draggable="true" src="imgs/nidorang.jpg" />',	
	'<img id="card57" name="Nidorina" ondragstart="drag(event)" draggable="true" src="imgs/nidorina.jpg" />',	
	'<img id="card58" name="Nidoqueen" ondragstart="drag(event)" draggable="true" src="imgs/nidoqueen.jpg" />',	
	'<img id="card59" name="Clefairy" ondragstart="drag(event)" draggable="true" src="imgs/clefairy.jpg" />',
	'<img id="card60" name="Clefable" ondragstart="drag(event)" draggable="true" src="imgs/clefable.jpg" />',	
	'<img id="card61" name="Vulpix" ondragstart="drag(event)" draggable="true" src="imgs/vulpix.jpg" />',
	'<img id="card62" name="Wigglytuff" ondragstart="drag(event)" draggable="true" src="imgs/wigglytuff.jpg" />',
	'<img id="card63" name="Paras" ondragstart="drag(event)" draggable="true" src="imgs/paras.jpg" />',
	'<img id="card64" name="Parasect" ondragstart="drag(event)" draggable="true" src="imgs/parasect.jpg" />',
	'<img id="card65" name="Diglett" ondragstart="drag(event)" draggable="true" src="imgs/diglett.jpg" />',
	'<img id="card65" name="Diglett" ondragstart="drag(event)" draggable="true" src="imgs/diglett.jpg" />',
	'<img id="card66" name="Dugtrio" ondragstart="drag(event)" draggable="true" src="imgs/dugtrio.jpg" />',
	'<img id="card67" name="Meowth" ondragstart="drag(event)" draggable="true" src="imgs/meowth.jpg" />',
]




















