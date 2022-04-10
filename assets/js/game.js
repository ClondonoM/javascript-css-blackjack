let deck = [];
const types = ["C", "D", "H", "S"];
const highs = ["J", "Q", "K", "A"];
let playerPoints = 0,
  compPoints = 0;

// html references
const btnAsk = document.querySelector("#btnAsk");
const btnStop = document.querySelector("#btnStop");
const btnNewGame = document.querySelector("#btnNewGame");
const smalls = document.querySelectorAll("small");
const divPlayerCards = document.querySelector("#player-cards");
const divCompCards = document.querySelector("#comp-cards");

const buildDeck = () => {
  for (i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let high of highs) {
      deck.push(high + type);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};
buildDeck();

const askCard = () => {
  if (deck.length === 0) {
    throw "Deck is empty";
  }
  let card = deck.pop();

  return card;
};

let card2 = askCard();

const valueCard = (card2) => {
  const value = card2.substring(0, card2.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};
valueCard(card2);

//comp turn

const turnComp = (minPoints) => {
  do {
    const card = askCard();
    compPoints = compPoints + valueCard(card);
    smalls[1].innerText = compPoints;

    const imgCard = document.createElement("img");
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.classList.add("card");
    divCompCards.append(imgCard);

    if (minPoints > 21) {
      break;
    }
  } while (compPoints < minPoints && minPoints <= 21);

  setTimeout(() => {
    if (compPoints === minPoints) {
      alert("Even");
    } else if (minPoints > 21) {
      alert("You lose!!");
    } else if (compPoints > 21) {
      alert("You Win!!");
    } else if (compPoints > minPoints) {
      alert("You lose!!");
    }
  }, 100);
};

// events
btnAsk.addEventListener("click", () => {
  const card = askCard();
  playerPoints = playerPoints + valueCard(card);
  smalls[0].innerText = playerPoints;

  const imgCard = document.createElement("img");
  imgCard.src = `assets/cards/${card}.png`;
  imgCard.classList.add("card");
  divPlayerCards.append(imgCard);

  if (playerPoints > 21) {
    console.warn("you lost");
    btnAsk.disabled = true;
    btnStop.disabled = true;
    turnComp(playerPoints);
  } else if (playerPoints === 21) {
    console.warn("you win!!");
    btnAsk.disabled = true;
    btnStop.disabled = true;
    turnComp(playerPoints);
  }
});

btnStop.addEventListener("click", () => {
  btnAsk.disabled = true;
  btnStop.disabled = true;
  turnComp(playerPoints);
});

btnNewGame.addEventListener("click", () => {
  deck = [];
  deck = buildDeck();
  playerPoints = 0;
  compPoints = 0;
  smalls[0].innerText = 0;
  smalls[1].innerText = 0;
  divPlayerCards.innerHTML = "";
  divCompCards.innerHTML = "";
  btnAsk.disabled = false;
  btnStop.disabled = false;
});
