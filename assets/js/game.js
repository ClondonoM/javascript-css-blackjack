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

const valueCard = () => {
  let card2 = askCard();
  const value = card2.substring(0, card2.length - 1);
  console.log(`Carta 2: ${card2}`);
  console.log(`Valor carta 2: ${value}`);
};
valueCard();
