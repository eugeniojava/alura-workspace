class Negotiation {
  constructor(
    private _date: Date,
    private _quantity: number,
    private _price: number
  ) {}

  get date() {
    return this._date;
  }

  get quantity() {
    return this._quantity;
  }

  get price() {
    return this._price;
  }

  get volume() {
    return this._quantity * this._price;
  }
}
