System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegotiationService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegotiationService = class NegotiationService {
                obtainNegotiations(handler) {
                    fetch("http://localhost:8080/data")
                        .then((response) => handler(response))
                        .then((response) => response.json())
                        .then((data) => {
                        data.map((item) => new index_1.Negotiation(new Date(), item.times, item.amount));
                    })
                        .catch((error) => console.log(error));
                }
            };
            exports_1("NegotiationService", NegotiationService);
        }
    };
});
