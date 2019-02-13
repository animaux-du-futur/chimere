const PATH_IMG = "./images/organe/";

var conteurelement = 0;

var organeList = {
	oeuil : oeuilArr,
	nez	: nezArr,
	bou : bouArr,
	prot : protArr
};

function getRandomFromArray(array) {
	//console.log(array);
	var arrayLength = array.length;
	var random = Math.floor(Math.random()*arrayLength);
	//console.log(random);
	return array[random];
}

function creatRandomElement(type , x, y) {
	//console.log(type);
	var lType = type ? type : getRandomFromArray(Object.keys(organeList));
	//console.log(lType);

	var newElem = document.createElement("div");
	var newImg =  document.createElement("img");
	newElem.className = "canvas draggable";
	newElem.id = "id"+conteurelement;
	conteurelement++;
	newElem.appendChild(newImg);

	newImg.className = "chim";
	newImg.setAttribute("src" , PATH_IMG+lType+"/"+getRandomFromArray(Object.values(organeList[lType])));

	document.getElementById("chimContainer").appendChild(newElem);

	var lX = x ? x:20+Math.random()*60;
	var lY = y ? y:20+Math.random()*60;

	newElem.setAttribute("style", "height:20vh; left:"+lX+"vw; top:"+lY+"vh");

	initDragging(newElem);
}

