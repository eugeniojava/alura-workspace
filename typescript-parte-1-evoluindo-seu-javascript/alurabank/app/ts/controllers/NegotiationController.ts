class NegotiationController {
  private _dateInput: Date;
  private _quantityInput: number;
  private _priceInput: number;

  constructor() {
    this._dateInput = document.querySelector("#date");
    this._quantityInput = document.querySelector("#quantity");
    this._priceInput = document.querySelector("#price");
  }

  add(event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      this._dateInput.value,
      this._quantityInput.value,
      this._priceInput.value
    );

    console.log(negotiation.quantity + 20);
  }
}
