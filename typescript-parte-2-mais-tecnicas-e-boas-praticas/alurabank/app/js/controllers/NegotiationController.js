System.register(["./../models/index", "./../views/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, timer, NegotiationController, WeekDay;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            timer = 0;
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_1.Negotiations();
                    this._negotiationsView = new index_2.NegotiationsView("#negotiationsView");
                    this._messageView = new index_2.MessageView("#messageView");
                    this._negotiationsView.update(this._negotiations);
                }
                add() {
                    let date = new Date(this._dateInput.val().replace(/-/g, ","));
                    if (!this._isBusinessDay(date)) {
                        this._messageView.update("Negotiations only in business days, please");
                        return;
                    }
                    const negotiation = new index_1.Negotiation(date, parseInt(this._quantityInput.val()), parseFloat(this._priceInput.val()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update("Negotiation successfully added!");
                }
                _isBusinessDay(date) {
                    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
                }
                importData() {
                    function isOk(response) {
                        if (response.ok) {
                            return response;
                        }
                        else {
                            throw new Error(response.statusText);
                        }
                    }
                    fetch("http://localhost:8080/data")
                        .then((response) => isOk(response))
                        .then((response) => response.json())
                        .then((data) => {
                        data
                            .map((item) => new index_1.Negotiation(new Date(), item.times, item.amount))
                            .forEach((negotiation) => this._negotiations.add(negotiation));
                        this._negotiationsView.update(this._negotiations);
                    })
                        .catch((error) => console.log(error));
                }
            };
            __decorate([
                index_3.domInject("#date")
            ], NegotiationController.prototype, "_dateInput", void 0);
            __decorate([
                index_3.domInject("#quantity")
            ], NegotiationController.prototype, "_quantityInput", void 0);
            __decorate([
                index_3.domInject("#price")
            ], NegotiationController.prototype, "_priceInput", void 0);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "add", null);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "importData", null);
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
