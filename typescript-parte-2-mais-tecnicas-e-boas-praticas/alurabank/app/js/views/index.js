System.register(["./View", "./NegotiationsView", "./MessageView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (View_1_1) {
                exportStar_1(View_1_1);
            },
            function (NegotiationsView_1_1) {
                exportStar_1(NegotiationsView_1_1);
            },
            function (MessageView_1_1) {
                exportStar_1(MessageView_1_1);
            }
        ],
        execute: function () {
        }
    };
});
