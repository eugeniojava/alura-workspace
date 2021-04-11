import { data } from "jquery";
import { Negotiation, Negotiations } from "./../models/index";
import { NegotiationsView, MessageView } from "./../views/index";

export class NegotiationController {
  private _dateInput: JQuery;
  private _quantityInput: JQuery;
  private _priceInput: JQuery;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negotiationsView");
  private _messageView = new MessageView("#messageView");

  constructor() {
    this._dateInput = $("#date");
    this._quantityInput = $("#quantity");
    this._priceInput = $("#price");
    this._negotiationsView.update(this._negotiations);
  }

  add(event: Event) {
    const t1 = performance.now();

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

    const t2 = performance.now();

    console.log(`add: ${t2 - t1}`);
  }

  private _isBusinessDay(date: Date) {
    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
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
