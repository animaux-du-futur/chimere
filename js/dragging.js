function initDraggingAllElem(){
	var draggableCollection = document.getElementsByClassName("draggable");
	var collectionLength = draggableCollection.length;
	var lItem;
	for (var i = 0; i < collectionLength; i++) {
		lItem = draggableCollection.item(i);
		initDragging(lItem);
	}
}

function initDragging(pItem) {
	pItem.addEventListener("mousedown", onMouseDown);
	pItem.addEventListener("mousemove", onMouseMove);
	pItem.addEventListener("mouseup", onMouseUp);
	pItem.addEventListener("mouseleave", removeSelectMenu);
	pItem.addEventListener("mouseenter", creatSelectMenu);
}

function onMouseDown(e) {
this.prevX = mToVw(e);
this.prevY = mToVh(e);
this.isMouseDown = true;
if (this.parentNode) {
	this.parentNode.appendChild(this);
}
}

function onMouseMove(e) {
if(this.isMouseDown) {
this.style.left = (Number(this.style.left.substring(0,this.style.left.length -2)) + (mToVw(e) - this.prevX)) + "vw";
this.style.top = (Number(this.style.top.substring(0,this.style.top.length -2)) + (mToVh(e) - this.prevY)) + "vh";
}

this.prevX = mToVw(e);
this.prevY = mToVh(e);
}

function onMouseUp(e) {
this.isMouseDown = false;
}

function mToVw(m) {
	return 100*m.clientX/window.innerWidth;
}

function mToVh(m) {
	return 100*m.clientY/window.innerHeight;
}

initDraggingAllElem();
shuffleElement();
