import { Printable } from "./Printable";

export class Negotiation implements Printable {
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
}
