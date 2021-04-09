class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new Views.NegotiationsView("#negotiationsView");
        this._messageView = new Views.MessageView("#messageView");
        this._dateInput = $("#date");
        this._quantityInput = $("#quantity");
        this._priceInput = $("#price");
        this._negotiationsView.update(this._negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._dateInput.val().replace(/-/g, ",")), parseInt(this._quantityInput.val()), parseFloat(this._priceInput.val()));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negotiation sucessfully added!");
    }
}
