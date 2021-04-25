System.register(["./Printable"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Printable_1, Negotiation;
    return {
        setters: [
            function (Printable_1_1) {
                Printable_1 = Printable_1_1;
            }
        ],
        execute: function () {
            Negotiation = class Negotiation extends Printable_1.Printable {
                constructor(date, quantity, price) {
                    super();
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
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
