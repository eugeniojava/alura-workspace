System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function print(...negotiations) {
        negotiations.forEach((negotiation) => negotiation.toString());
    }
    exports_1("print", print);
    return {
        setters: [],
        execute: function () {
        }
    };
});
