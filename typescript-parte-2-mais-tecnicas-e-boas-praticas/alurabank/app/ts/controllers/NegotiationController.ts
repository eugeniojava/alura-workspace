import {
  Negotiation,
  Negotiations,
  PartialNegotiation,
} from "./../models/index";
import { NegotiationsView, MessageView } from "./../views/index";
import { domInject } from "../helpers/decorators/index";

export class NegotiationController {
  @domInject("#date")
  private _dateInput: JQuery;

  @domInject("#quantity")
  private _quantityInput: JQuery;

  @domInject("#price")
  private _priceInput: JQuery;

  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negotiationsView");
  private _messageView = new MessageView("#messageView");

  constructor() {
    this._negotiationsView.update(this._negotiations);
  }

  add(event: Event) {
    event.preventDefault();

    let date = new Date(this._dateInput.val().replace(/-/g, ","));

    if (!this._isBusinessDay(date)) {
      this._messageView.update("Negotiations only in business days, please");

      return;
    }

    const negotiation = new Negotiation(
      date,
      parseInt(this._quantityInput.val()),
      parseFloat(this._priceInput.val())
    );

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);
    this._messageView.update("Negotiation successfully added!");
  }

  private _isBusinessDay(date: Date) {
    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
  }

  importData() {
    function isOk(response: Response) {
      if (response.ok) {
        return response;
      } else {
        throw new Error(response.statusText);
      }
    }

    fetch("http://localhost:8080/data")
      .then((response) => isOk(response))
      .then((response) => response.json())
      .then((data: PartialNegotiation[]) => {
        data
          .map((item) => new Negotiation(new Date(), item.times, item.amount))
          .forEach((negotiation) => this._negotiations.add(negotiation));
        this._negotiationsView.update(this._negotiations);
      })
      .catch((error) => console.log(error));
  }
}

enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
