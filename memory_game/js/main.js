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

function flipCard () {
	//this function runs whenever a card is clicked
	//check whether it's already been flipped,
	//otherwise do nothing
	if (this.getAttribute('name') === "notFlipped"){

		let cardId = this.getAttribute('data-id');
		this.setAttribute('name', "flipped");
		if (cardId <= cards.length){

			//this is where I change the image
			this.setAttribute('src', cards[this.getAttribute('data-id')].cardImage);
			cardsInPlay.push(cards[cardId]);

				if(cardsInPlay.length === 2) {
					//this is where the alert is
					//set timeout so that there is a small pause
					//to allow for the image change to be loaded.
					setTimeout(checkForMatch, 300);
				}
		}
	}
	else
	{
		console.log("This card is already flipped!")
		errorSound.play();
	}




};

function checkForMatch () {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) 
	{
		correctSound.play();
		alert("You found a match!");
		//add score
		var score = document.getElementById('score');
		score.innerHTML = parseInt(score.textContent) + 1;
	}
	else 
	{
		noMatch();
		alert("Sorry, try again.");
		
	}
	clearCardsInPlay();
}

function clearCardsInPlay () {
	cardsInPlay = [];
}

function noMatch () {
	errorSound.play();
	//find original card objects
	//loop through the cards on the board for their ID's, 
	//then if it matches the cardsInPlay ID, then reset image
	let cardElement = document.getElementsByClassName('card');
	for (let i = 0; i < cardElement.length; i++) {
		let cardId = cardElement[i].getAttribute('data-id');
		if ((cardId == cardsInPlay[0].id) || (cardId == cardsInPlay[1].id))
		{
			cardElement[i].setAttribute('src', "images/back.png");
			cardElement[i].setAttribute('name', "notFlipped");
		}
	}
}

function resetGame () {
	//reset the game
	//clear list
	clearCardsInPlay();
	//reshuffle?
	//Remove played cards
	let cardElement = document.getElementsByClassName('card');
	console.log("cardElement: " + cardElement[0]);
	for (let i = 0; i < cardElement.length; i++){

		cardElement[i].setAttribute('src', "images/back.png");
		cardElement[i].setAttribute('name', "notFlipped");
	}

}

function createBoard () {
	console.log("createBoard running");
	for (let i = 0; i < cards.length; i++) {
		
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('name', "notFlipped");
		cards[i].id = i;
		cardElement.setAttribute('class', "card");
		cardElement.addEventListener('click', flipCard);
		var gameBoard = document.getElementById('game-board');
		gameBoard.appendChild(cardElement);
		console.log("forloop running" + i);
	}
}

createBoard();

document.getElementById('reset').addEventListener('click', resetGame);

document.getElementById('reset').addEventListener('click', resetGame);

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

var errorSound = new sound("audio/wrong1.mp3");
var correctSound = new sound("audio/correct1.mp3");





