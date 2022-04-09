let deck = [];
const types = ["C", "D", "H", "S"];
const highs = ["J", "Q", "K", "A"];
let playerPoints = 0,
  compPoints = 0;

// html references
const btnAsk = document.querySelector("#btnAsk");
const smalls = document.querySelectorAll("small");

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

// events
btnAsk.addEventListener("click", () => {
  const card = askCard();
  playerPoints = playerPoints + valueCard(card);
  console.log(`carta :${card} puntos jugador: ${playerPoints}`);
  smalls[0].innerText = playerPoints;
});
