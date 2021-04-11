import { Negotiation } from "./Negotiation";
import { logExecutionTime } from "../helpers/decorators/index";

export class Negotiations {
  private _negotiations: Negotiation[] = [];

  add(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  toArray(): Negotiation[] {
    return ([] as Negotiation[]).concat(this._negotiations);
  }
}
