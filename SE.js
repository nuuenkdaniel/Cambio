class SE extends Special {
  constructor(number, suit, active) {
    if(number != "seven" && number != "eight" ) {
      throw new error("SE must be a seven or an eight");
    }
    super(number, suit, active);
  }
}
