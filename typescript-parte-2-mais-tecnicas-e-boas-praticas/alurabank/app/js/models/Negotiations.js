System.register(["./Printable"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Printable_1, Negotiations;
    return {
        setters: [
            function (Printable_1_1) {
                Printable_1 = Printable_1_1;
            }
        ],
        execute: function () {
            Negotiations = class Negotiations extends Printable_1.Printable {
                constructor() {
                    super(...arguments);
                    this._negotiations = [];
                }
                add(negotiation) {
                    this._negotiations.push(negotiation);
                }
                toArray() {
                    return [].concat(this._negotiations);
                }
                toString() {
                    console.log("Printing");
                    console.log(JSON.stringify(this._negotiations));
                }
            };
            exports_1("Negotiations", Negotiations);
        }
    };
});
