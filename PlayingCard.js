class PlayingCard.js {

  constructor(number, suit, state) {
    this.number = number;
    this.suit = suit;
    this.state = state;
  }
  
  getNumber() {
    return this.number;
  }
  
  setNumber(newNumber) {
    this.number = newNumber;
  }

  getSuit() {
    return this.suit;
  }

  setSuit(newSuit) {
    this.suit = newSuit;
  }
}
