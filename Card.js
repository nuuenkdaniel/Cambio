class Card {
  constructor(number, suit) {
    this.number = number;
    this.suit = suit;
  }
  
  // Getters and setters
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
