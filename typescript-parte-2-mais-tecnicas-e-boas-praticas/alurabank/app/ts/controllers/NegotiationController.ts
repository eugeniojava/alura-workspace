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
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._dateInput.val().replace(/-/g, ",")),
      parseInt(this._quantityInput.val()),
      parseFloat(this._priceInput.val())
    );

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);
    this._messageView.update("Negotiation sucessfully added!");
  }
}
