class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView("#negotiationsView");
        this._dateInput = document.querySelector("#date");
        this._quantityInput = document.querySelector("#quantity");
        this._priceInput = document.querySelector("#price");
        this._negotiationsView.update(this._negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._dateInput.value.replace(/-/g, ",")), parseInt(this._quantityInput.value), parseFloat(this._priceInput.value));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
    }
}
