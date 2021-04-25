import { Negotiation } from "./Negotiation";
import { MyObject } from "./MyObject";

export class Negotiations implements MyObject<Negotiations> {
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
