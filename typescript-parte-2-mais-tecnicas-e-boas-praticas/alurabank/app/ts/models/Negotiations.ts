import { Negotiation } from "./Negotiation";
import { Printable } from "./Printable";
import { Comparable } from "./Comparable";

export class Negotiations implements Printable, Comparable<Negotiations> {
  private _negotiations: Negotiation[] = [];

  add(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  toArray(): Negotiation[] {
    return ([] as Negotiation[]).concat(this._negotiations);
  }

  toString(): void {
    console.log("Printing");
    console.log(JSON.stringify(this._negotiations));
  }

  isEqual(negotiations: Negotiations): boolean {
    return (
      JSON.stringify(this._negotiations) ==
      JSON.stringify(negotiations.toArray())
    );
  }
}
