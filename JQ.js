class JQ extends Special {
  constructor(number, suit, active) {
    if(number != "jack" && number != "queen" ) {
      throw new error("JQ must be a jack or a queen");
    }
    super(number, suit, active);
  }
}
