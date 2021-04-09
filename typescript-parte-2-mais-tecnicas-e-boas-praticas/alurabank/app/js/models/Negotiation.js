export class Negotiation {
    constructor(_date, _quantity, _price) {
        this._date = _date;
        this._quantity = _quantity;
        this._price = _price;
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
