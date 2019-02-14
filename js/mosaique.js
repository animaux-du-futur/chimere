
function creatSelectMenu() {
	//console.log(this.getAttribute("data-type"));
	var type = this.getAttribute("data-type");
	var theCaller = this;

	var removeB = document.createElement("button");
	removeB.className = "change";
	var newImgremove =  document.createElement("img");
	newImgremove.className = "change";
	newImgremove.setAttribute("src" , "images/pictos/chimere_picto_hide.svg");
	removeB.appendChild(newImgremove);
	this.appendChild(removeB);
	this.removeButton = removeB;

	var newMosB = document.createElement("button");
	newMosB.className = "change";

	var newImg =  document.createElement("img");
	newImg.className = "change";
	newImg.setAttribute("src" , "images/pictos/chimere_picto_mosaique.svg");
	newMosB.appendChild(newImg);
	this.appendChild(newMosB);
	this.mosaiqueButton = newMosB;


	removeB.addEventListener("mousedown", function (e) {
		theCaller.parentNode.removeChild(theCaller);
	});

	newMosB.addEventListener("mousedown", function (e) {
		this.appendChild(creatMosaique(type));
	});
}

function removeSelectMenu() {
	if (this.removeButton) {
		this.removeChild(this.removeButton);
	}
	if (this.mosaiqueButton) {
		this.removeChild(this.mosaiqueButton);
	}
}

function creatMosaique(type) {
	var newMos = document.createElement("div");
	newMos.className = "mosaique mCustomScrollbar";
	Object.values(organeList[type]).forEach(function(element) {
	  newMos.appendChild(creatButtonMosaique(PATH_IMG+type+"/"+element));
	});
	return newMos;
}

function creatButtonMosaique(src) {
	var newButtM = document.createElement("button");
	newButtM.className = "mosa";

	var newImg =  document.createElement("img");
	newImg.className = "mosa";
	newImg.setAttribute("src" , src);

	newButtM.appendChild(newImg);
	return newButtM;
}