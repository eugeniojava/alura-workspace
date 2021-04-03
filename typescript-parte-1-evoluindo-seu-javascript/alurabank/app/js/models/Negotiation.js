class Negotiation {
    constructor(date, quantity, price) {
        this._date = date;
        this._quantity = quantity;
        this._price = price;
    }
    get date() {
        return this._date;
    }
    get quantity() {
        return this._quantity;
    }
    get price() {
        return this._price;
    }
    get volume() {
        return this._quantity * this._price;
    }
}
