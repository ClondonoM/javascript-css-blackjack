let deck = [];
const types = ["C", "D", "H", "S"];
const highs = ["J", "Q", "K", "A"];

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
  //console.log(deck);

  return deck;
};
buildDeck();

console.log(deck);

const askCard = () => {
  if (deck.length === 0) {
    throw "Deck is empty";
  }
  let card = deck.pop();
  console.log(card);
  return card;
};

let card2 = askCard();
console.log(`Carta 2 ${card2}`);

const valueCard = (card2) => {
  const value = card2.substring(0, card2.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};
valueCard(card2);

console.log(`Valor carta : ${valueCard(card2)}`);
