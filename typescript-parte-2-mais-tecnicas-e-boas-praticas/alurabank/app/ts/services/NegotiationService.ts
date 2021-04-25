import { Negotiation, PartialNegotiation } from "../models/index";

export class NegotiationService {
  obtainNegotiations(handler: HandlerFunction): Promise<Negotiation[]> {
    return fetch("http://localhost:8080/datas")
      .then((response) => handler(response))
      .then((response) => response.json())
      .then((data: PartialNegotiation[]) =>
        data.map((item) => new Negotiation(new Date(), item.times, item.amount))
      )
      .catch((error) => {
        console.log(error);
        throw new Error("Negotiations could not be imported");
      });
  }
}

export interface HandlerFunction {
  (response: Response): Response;
}
