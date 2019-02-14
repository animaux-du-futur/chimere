const PATH_IMG = "./images/organe/";
const RANGE_RANDOM = 20;

var conteurelement = 0;

var organeList = {
	oeuil : oeuilArr,
	nez	: nezArr,
	bou : bouArr,
	prot : protArr
};

var organePos = {
	oeuil : {x : 26 , y : 20},
	nez : {x : 50 , y : 35},
	bou : {x : 50 , y : 50},
	prot : {x : 35 , y : 50}
}

function getRandomFromArray(array) {
	//console.log(array);
	var arrayLength = array.length;
	var random = Math.floor(Math.random()*arrayLength);
	//console.log(random);
	return array[random];
}

function creatRandomElement(type , isMirror, x, y) {
	//console.log(type);
	var lType = type ? type : getRandomFromArray(Object.keys(organeList));
	//console.log(lType);

	var newElem = document.createElement("div");
	var newImg =  document.createElement("img");
	newElem.className = "canvas draggable";
	newElem.id = "id"+conteurelement;
	newElem.setAttribute("data-type" , lType);
	conteurelement++;
	newElem.appendChild(newImg);

	var mirror = isMirror ? " mirror" : "";
	newImg.className = "chim"+mirror;
	newImg.setAttribute("src" , PATH_IMG+lType+"/"+getRandomFromArray(Object.values(organeList[lType])));

	document.getElementById("chimContainer").appendChild(newElem);

var organePosX = isMirror ? 100-organePos[lType].x : organePos[lType].x;
	var lX = x ? x:organePosX+Math.random()*RANGE_RANDOM-RANGE_RANDOM/2;
	var lY = y ? y:organePos[lType].y+Math.random()*RANGE_RANDOM-RANGE_RANDOM/2;

	newElem.setAttribute("style", "height:20vh; left:"+lX+"vw; top:"+lY+"vh");

	initDragging(newElem);
}

function shuffleTex() {
	var texImg = document.getElementById("tex");
	texImg.setAttribute("src" , PATH_IMG+"tex"+"/"+getRandomFromArray(Object.values(texArr)));
}

function shuffleElement() {
	var draggableCollection = document.getElementsByClassName("draggable");
	var collectionLength = draggableCollection.length;
	var lItem;
	for (var i = 0; i < collectionLength; i++) {
		lItem = draggableCollection.item(0);
		if (lItem && lItem.parentNode) {
		  lItem.parentNode.removeChild(lItem);
		}
	}

	creatRandomElement("oeuil");
	creatRandomElement("oeuil", true);
	creatRandomElement("nez");
	creatRandomElement("bou");
	creatRandomElement("prot");
	creatRandomElement("prot", true);
	shuffleTex();

}

