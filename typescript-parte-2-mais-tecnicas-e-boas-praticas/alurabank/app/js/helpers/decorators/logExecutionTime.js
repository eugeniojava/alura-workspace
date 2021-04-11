System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime(inSeconds = false) {
        return function (target, propertyKey, descriptor) {
            const defaultMethod = descriptor.value;
            descriptor.value = function (...args) {
                let unit = "ms";
                let divider = 1;
                if (inSeconds) {
                    unit = "s";
                    divider = 1000;
                }
                console.log("--------------------");
                console.log(`Parameters sent to the ${propertyKey} method: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const fReturn = defaultMethod.apply(this, args);
                const t2 = performance.now();
                console.log(`The ${propertyKey} method return is ${JSON.stringify(fReturn)}`);
                console.log(`The ${propertyKey} method took ${(t2 - t1) / divider} ${unit}`);
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
