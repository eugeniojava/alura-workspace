import { MyObject } from "./MyObject";

export class Negotiation implements MyObject<Negotiation> {
  constructor(
    readonly date: Date,
    readonly quantity: number,
    readonly price: number
  ) {}

  get volume() {
    return this.quantity * this.price;
  }

  toString(): void {
    console.log("Printing");
    console.log(
      `Date: ${this.date}
      Quantity: ${this.quantity}
      Price: ${this.price}
      Volume: ${this.volume}`
    );
  }

  isEqual(negotiation: Negotiation): boolean {
    return (
      this.date.getDate() == negotiation.date.getDate() &&
      this.date.getMonth() == negotiation.date.getMonth() &&
      this.date.getFullYear() == negotiation.date.getFullYear()
    );
  }
}
