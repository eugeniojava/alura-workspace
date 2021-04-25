import {
  Negotiation,
  Negotiations,
  PartialNegotiation,
} from "./../models/index";
import { NegotiationsView, MessageView } from "./../views/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegotiationService } from "../services/index";
import { print } from "../helpers/index";

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
  private _negotiationService = new NegotiationService();

  constructor() {
    this._negotiationsView.update(this._negotiations);
  }

  @throttle()
  add() {
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

    print(negotiation, this._negotiations, date);

    this._negotiationsView.update(this._negotiations);
    this._messageView.update("Negotiation successfully added!");
  }

  private _isBusinessDay(date: Date) {
    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
  }

  @throttle()
  async importData() {
    try {
      const negotiationsToImport = await this._negotiationService.obtainNegotiations(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            throw new Error(response.statusText);
          }
        }
      );

      const negotiationsAlreadyImported = this._negotiations.toArray();

      negotiationsToImport
        .filter(
          (negotiation) =>
            !negotiationsAlreadyImported.some((alreadyImported) =>
              negotiation.isEqual(alreadyImported)
            )
        )
        .forEach((negotiation) => this._negotiations.add(negotiation));

      this._negotiationsView.update(this._negotiations);
    } catch (error) {
      this._messageView.update(error.message);
    }
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
