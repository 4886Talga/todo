//Adding todo item to todo list

function addInputToList (){
//retrieving input text
	var itemToAdd = document.getElementById("todoitem").value;

/*retrieving number of li-element within ul-element
	var numberLiElements = document.querySelectorAll("ul.ul-list-container-left > li").length;
	var elementNumber = numberLiElements + 1;
	console.log(elementNumber);
	var strElementNumber = elementNumber.toString();*/
	
//id building	
	var strElementNumber = idGenerator();
	//console.log(strElementNumber);
//creating li element
	var li = document.createElement("li");
//adding id atribute ti li
	li.setAttribute("id", strElementNumber);
	li.setAttribute("class", "list-group-item justify-content-between");
	
	var element = document.getElementById("list-left");
	element.appendChild(li);
	
	document.getElementById(strElementNumber).innerHTML = itemToAdd + '<p class="icons"><span class="remove" id="' + strElementNumber + '">&nbsp;<i class="fa fa-trash-o" aria-hidden="true"></i></span>&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i>&nbsp;<span class="changeList" id="' + strElementNumber + '"><i class="fa fa-hand-o-right" aria-hidden="true"></i></span></p>';
	
	//clean input
	document.getElementById("todoitem").value = "";
	
	
	var spanRemoveEvents = document.getElementsByClassName("remove");
	//console.log(spanRemoveEvents.length);
	for (var i=0; i < spanRemoveEvents.length; i++) {
        spanRemoveEvents[i].addEventListener('click', removeItem);
    };
	
	var spanChangeListEvents = document.getElementsByClassName("changeList");
	for (var j=0; j < spanChangeListEvents.length; j++) {
        spanChangeListEvents[j].addEventListener('click', changeList);
    };
}
function idGenerator(){
	
	var id=Math.floor((Math.random() * 1000) + 1);
	return id;
}
function removeItem (){
	var id = this.getAttribute("id");
	
	var targetLi = document.getElementById(id);
	targetLi.parentNode.removeChild(targetLi);

}

function removeItemFromRightList (){
	var id = this.getAttribute("id");
	
	var targetLi = document.getElementById(id);
	targetLi.parentNode.removeChild(targetLi);
}

function changeList (){
	var id = this.getAttribute("id");
	
	//var li = document.getElementById("list-left").childNodes[id];
	var liToMove = document.getElementById(id);
	
	var element = document.getElementById("list-right");
	element.appendChild(liToMove);
	
	
	var strRightSide = document.getElementById(id).innerHTML;
	var strSign = strRightSide.indexOf("<");
	var strNewLi = strRightSide.slice(0, strSign);
	
	document.getElementById(id).innerHTML = '<del>' + strNewLi + '</del><p class="icons">&nbsp;<i class="fa fa-check-square-o" aria-hidden="true"></i>&nbsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i>&nbsp;<span class="remove" id="' + id + '">&nbsp;<i class="fa fa-trash-o" aria-hidden="true"></i></span></p>';
	
	var spanRemoveEvents = document.getElementsByClassName("remove");
	for (var i=0; i < spanRemoveEvents.length; i++) {
        spanRemoveEvents[i].addEventListener('click', removeItemFromRightList);
    };
}

