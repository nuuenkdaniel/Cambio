class K extends Special {
  constructor(number, suit, active) {
    if(number != "king") {
      throw new error("K must be a king");
    }
    super(number, suit, active);
  }
}
