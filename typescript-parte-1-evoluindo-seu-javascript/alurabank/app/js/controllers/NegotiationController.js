class NegotiationController {
    constructor() {
        this._dateInput = document.querySelector("#date");
        this._quantityInput = document.querySelector("#quantity");
        this._priceInput = document.querySelector("#price");
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._dateInput.value.replace(/-/g, ",")), parseInt(this._quantityInput.value), parseFloat(this._priceInput.value));
        console.log(negotiation);
    }
}
