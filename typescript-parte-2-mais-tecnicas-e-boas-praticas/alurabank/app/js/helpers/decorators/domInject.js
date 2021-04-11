System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(selector) {
        return function (target, propertyKey) {
            let element;
            const getter = function () {
                if (!element) {
                    console.log(`Looking ${selector} to inject in ${propertyKey}`);
                    element = $(selector);
                }
                return element;
            };
            Object.defineProperty(target, propertyKey, {
                get: getter,
            });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
