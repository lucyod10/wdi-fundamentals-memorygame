console.log("up and running");

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];

function flipCard (cardId) {
	if (cardId < cards.length){
		
		console.log("Flipped card: " + cards[cardId].rank);
		console.log("card image: " + cards[cardId].cardImage);
		console.log("card suit: " + cards[cardId].suit);
		cardsInPlay.push(cards[cardId.rank]);
	}
	if(cardsInPlay.length === 2){
		checkForMatch();
	}
};

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}
}

flipCard(0);
flipCard(2);

