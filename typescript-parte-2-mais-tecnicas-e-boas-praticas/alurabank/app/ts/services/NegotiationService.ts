import { Negotiation, PartialNegotiation } from "../models/index";

export class NegotiationService {
  obtainNegotiations(handler: Function): Promise<Negotiation[]> {
    return fetch("http://localhost:8080/data")
      .then((response) => handler(response))
      .then((response) => response.json())
      .then((data: PartialNegotiation[]) =>
        data.map(
          (item) => new Negotiation(new Date(), item.times, item.amount)
        )
      .catch((error) => console.log(error));
  }
}
