export class Negotiation {
  constructor(
    readonly date: Date,
    readonly quantity: number,
    readonly price: number
  ) {}

  get volume() {
    return this.quantity * this.price;
  }
}
