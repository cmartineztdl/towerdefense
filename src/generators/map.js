module.exports = function(sizeX, sizeY, blockedProb){
	sizeX = sizeX || 5;
	sizeY = sizeY || 5;
	blockedProb = blockedProb || .2
	if(sizeX < 0 || sizeY < 0 || blockedProb > .3)
		throw new Error("Invalid size for map");

	var gmap = [];

	//Generate player zone
	var housePos = Math.round(Math.random() * (sizeX - 3));
	var aux = [];
	for(x = 0; x < sizeX; x++){
		aux[x] = (x == housePos + 1) ? "Home" : "Imposible";
	}
	gmap.push(aux);

	//Generate game zone
	for(y = 0; y < sizeY; y++){
		var aux = [];
		for(x = 0; x < sizeX; x++){
			aux[x] = (Math.random() <= blockedProb) ? "Obstacle" : "Ground";
		}
		gmap.push(aux);
	}

	//Generate spawn point
	var spawnPos = Math.round(Math.random() * (sizeX - 3));
	var aux = [];
	for(x = 0; x < sizeX; x++){
		aux[x] = (x == spawnPos + 1) ? "Spawn" : "Imposible";
	}
	gmap.push(aux);

	return gmap;
}