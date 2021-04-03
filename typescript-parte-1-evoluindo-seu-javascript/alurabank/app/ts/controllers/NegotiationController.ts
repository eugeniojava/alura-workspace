class NegotiationController {
  private _dateInput: HTMLInputElement;
  private _quantityInput: HTMLInputElement;
  private _priceInput: HTMLInputElement;

  constructor() {
    this._dateInput = <HTMLInputElement>document.querySelector("#date");
    this._quantityInput = <HTMLInputElement>document.querySelector("#quantity");
    this._priceInput = <HTMLInputElement>document.querySelector("#price");
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._dateInput.value.replace(/-/g, ",")),
      parseInt(this._quantityInput.value),
      parseFloat(this._priceInput.value)
    );

    console.log(negotiation);
  }
}
