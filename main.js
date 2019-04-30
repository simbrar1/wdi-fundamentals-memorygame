console.log("Up and Running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var carFour = "king";

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []

function flipcard (cardId) {
	if (cardsInPlay.length ===2) {
	if (cardsInPlay[0] === cardsInPlay[1])
	{alert("You found a match!"); }

else {alert ("Sorry, try again"); }

}
cardsInPlay.push(cards[cardId]);
console.log("user flipped" + cards[cardId]);

};

flipcard(0);
flipcard(2);
