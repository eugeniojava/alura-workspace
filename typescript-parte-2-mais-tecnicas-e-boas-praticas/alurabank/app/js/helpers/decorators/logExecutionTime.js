System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime() {
        return function (target, propertyKey, descriptor) {
            const defaultMethod = descriptor.value;
            descriptor.value = function (...args) {
                const fReturn = defaultMethod.apply(this, args);
                return fReturn;
            };
            return descriptor;
        };
    }
    exports_1("logExecutionTime", logExecutionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
