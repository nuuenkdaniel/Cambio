class KH extends K {
  constructor(number, suit, active) {
    if(suit != "heart") throw new error("dis king need heart or no good");
    super(number, suit, active);
  }
}
