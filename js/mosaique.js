
function creatSelectMenu() {
	//console.log(this.getAttribute("data-type"));
	var type = this.getAttribute("data-type");
	var theCaller = this;

	var control = document.createElement("div");
	control.className = "control";
	control.setAttribute("style" , "position:absolute; top:-20px;");
	this.appendChild(control);
	this.control = control;

	var removeB = document.createElement("button");
	removeB.className = "change";
	var newImgremove =  document.createElement("img");
	newImgremove.className = "change";
	newImgremove.setAttribute("src" , "images/pictos/chimere_picto_hide.svg");
	removeB.appendChild(newImgremove);
	control.appendChild(removeB);

	var newMosB = document.createElement("button");
	newMosB.className = "change";

	var newImg =  document.createElement("img");
	newImg.className = "change";
	newImg.setAttribute("src" , "images/pictos/chimere_picto_mosaique.svg");
	newMosB.appendChild(newImg);
	control.appendChild(newMosB);

	var callbackSelectionImage = function (src) {
		theCaller.firstChild.setAttribute("src" , src);
		removeSelectMenu();
	}


	removeB.addEventListener("mousedown", function (e) {
		theCaller.parentNode.removeChild(theCaller);
	});

	newMosB.addEventListener("mousedown", function (e) {
		this.appendChild(creatMosaique(type, callbackSelectionImage));
	});
}

function removeSelectMenu() {
	if (this.control) {
		this.removeChild(this.control);
	}
}

function creatMosaique(type, cb) {
	var newMos = document.createElement("div");
	newMos.className = "mosaique mCustomScrollbar";
	Object.values(organeList[type]).forEach(function(element) {
	  newMos.appendChild(creatButtonMosaique(PATH_IMG+type+"/"+element, cb));
	});
	return newMos;
}

function creatButtonMosaique(src , cb) {
	var newButtM = document.createElement("button");
	newButtM.className = "mosa";

	var newImg =  document.createElement("img");
	newImg.className = "mosa";
	newImg.setAttribute("src" , src);

	newButtM.appendChild(newImg);

	newButtM.addEventListener("mousedown", function (e) {
		cb(src);
	});

	return newButtM;
}
