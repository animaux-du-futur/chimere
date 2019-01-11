var path = "./images/organe/";

function setImg() {
    var id = this.id.substr(4).toLowerCase();
    var value = this.value;
    console.dir(id);
    var img = document.getElementById(id);
    if (img == null) {
      console.error("L'images n'as pas était trouvé");
      return;
    }

    if(value == "none"){
      img.style.display = "none";
      return;
    }

    img.src = path + value;
    img.style.display = "block";
}

function initSelect(){
  var selectCollection = document.getElementsByClassName("mselect");
  var collectionLength = selectCollection.length;
  var lItem;
  for (var i = 0; i < collectionLength; i++) {
    lItem = selectCollection.item(i);
    lItem.onchange = setImg;
  }
}

initSelect();
