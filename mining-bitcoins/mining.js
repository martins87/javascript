var blockHeight = 3;
var ourList = document.querySelector("#our-list");
var ourButton = document.getElementById("our-button");
var totalSupplyButton = document.querySelector("#total-supply-button");
var ourHeadline = document.getElementById("our-header");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

/*
 * addEventListener adds an event to an item
 * 1st argument: event
 * 2nd argument: function to be called
 */
ourList.addEventListener("click", changeHeader);

function changeHeader(e){
	if(e.target.nodeName == "LI"){
		ourHeadline.innerHTML = e.target.innerHTML;
	}
}

totalSupplyButton.addEventListener("click", showTotalSupply);
ourButton.addEventListener("click", addItem);

function addItem(){
	blockHeight++;
	ourList.innerHTML += "<li>Block #" + blockHeight + ": + 50 Bitcoins created!</li>";
}

function showTotalSupply(){
	totalSupply = blockHeight * 50;
	ourHeadline.innerHTML = "Bitcoins in circulation: " + totalSupply.toString();
}