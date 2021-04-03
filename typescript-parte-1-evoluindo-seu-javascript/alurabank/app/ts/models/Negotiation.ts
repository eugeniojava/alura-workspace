class Negotiation {

  private _date;
  private _quantity;
  private _amount;

  constructor(date, quantity, amount) {
    this._date = date;
    this._quantity = quantity;
    this._amount = amount;
  }

  get date() {
    return this._date;
  }

  get quantity() {
    return this._quantity;
  }

  get amount() {
    return this._amount;
  }

  get volume() {
    return this._quantity * this._amount;
  }
}
