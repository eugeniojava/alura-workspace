import { Negotiation } from "./Negotiation";

export class Negotiations {
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
}
