System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negotiation;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(date, quantity, price) {
                    this.date = date;
                    this.quantity = quantity;
                    this.price = price;
                }
                get volume() {
                    return this.quantity * this.price;
                }
                toString() {
                    console.log("Printing");
                    console.log(`Date: ${this.date}
      Quantity: ${this.quantity}
      Price: ${this.price}
      Volume: ${this.volume}`);
                }
                isEqual(negotiation) {
                    return (this.date.getDate() == negotiation.date.getDate() &&
                        this.date.getMonth() == negotiation.date.getMonth() &&
                        this.date.getFullYear() == negotiation.date.getFullYear());
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
