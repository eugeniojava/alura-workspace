System.register(["./../models/index", "./../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegotiationController, WeekDay;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_1.Negotiations();
                    this._negotiationsView = new index_2.NegotiationsView("#negotiationsView");
                    this._messageView = new index_2.MessageView("#messageView");
                    this._dateInput = $("#date");
                    this._quantityInput = $("#quantity");
                    this._priceInput = $("#price");
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    let date = new Date(this._dateInput.val().replace(/-/g, ","));
                    if (!this._isBusinessDay(date)) {
                        this._messageView.update("Negotiations only in business days, please");
                        return;
                    }
                    const negotiation = new index_1.Negotiation(date, parseInt(this._quantityInput.val()), parseFloat(this._priceInput.val()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update("Negotiation sucessfully added!");
                }
                _isBusinessDay(date) {
                    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
                }
            };
            exports_1("NegotiationController", NegotiationController);
            (function (WeekDay) {
                WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
                WeekDay[WeekDay["Monday"] = 1] = "Monday";
                WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
                WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
                WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
                WeekDay[WeekDay["Friday"] = 5] = "Friday";
                WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
            })(WeekDay || (WeekDay = {}));
        }
    };
});
