System.register(["./../models/Negotiation", "./../models/Negotiations", "./../views/NegotiationsView", "./../views/MessageView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negotiation_1, Negotiations_1, NegotiationsView_1, MessageView_1, NegotiationController;
    return {
        setters: [
            function (Negotiation_1_1) {
                Negotiation_1 = Negotiation_1_1;
            },
            function (Negotiations_1_1) {
                Negotiations_1 = Negotiations_1_1;
            },
            function (NegotiationsView_1_1) {
                NegotiationsView_1 = NegotiationsView_1_1;
            },
            function (MessageView_1_1) {
                MessageView_1 = MessageView_1_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new Negotiations_1.Negotiations();
                    this._negotiationsView = new NegotiationsView_1.NegotiationsView("#negotiationsView");
                    this._messageView = new MessageView_1.MessageView("#messageView");
                    this._dateInput = $("#date");
                    this._quantityInput = $("#quantity");
                    this._priceInput = $("#price");
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new Negotiation_1.Negotiation(new Date(this._dateInput.val().replace(/-/g, ",")), parseInt(this._quantityInput.val()), parseFloat(this._priceInput.val()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update("Negotiation sucessfully added!");
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
