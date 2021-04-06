class NegotiationController {
  private _dateInput: HTMLInputElement;
  private _quantityInput: HTMLInputElement;
  private _priceInput: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negotiationsView");
  private _messageView = new MessageView("#messageView");

  constructor() {
    this._dateInput = <HTMLInputElement>document.querySelector("#date");
    this._quantityInput = <HTMLInputElement>document.querySelector("#quantity");
    this._priceInput = <HTMLInputElement>document.querySelector("#price");
    this._negotiationsView.update(this._negotiations);
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._dateInput.value.replace(/-/g, ",")),
      parseInt(this._quantityInput.value),
      parseFloat(this._priceInput.value)
    );

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);
    this._messageView.update("Negotiation sucessfully added!");
  }
}
