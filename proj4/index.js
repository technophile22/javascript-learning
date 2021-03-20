const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;
var score = 0;

var counter = document.querySelector(".score");
counter.innerText = score;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

var checkIt = () => {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

var success = () => {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  counter.innerText = ++score;
  if (score == 8){
    window.alert("You won!");
  }
  reset();
}

var fail = () => {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

var reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();

