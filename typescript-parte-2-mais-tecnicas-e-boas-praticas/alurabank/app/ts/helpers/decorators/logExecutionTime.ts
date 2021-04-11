export function logExecutionTime(inSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const defaultMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let unit = "ms";
      let divider = 1;

      if (inSeconds) {
        unit = "s";
        divider = 1000;
      }
      console.log("--------------------");
      console.log(
        `Parameters sent to the ${propertyKey} method: ${JSON.stringify(args)}`
      );

      const t1 = performance.now();
      const fReturn = defaultMethod.apply(this, args);
      const t2 = performance.now();

      console.log(
        `The ${propertyKey} method return is ${JSON.stringify(fReturn)}`
      );
      console.log(
        `The ${propertyKey} method took ${(t2 - t1) / divider} ${unit}`
      );

      return fReturn;
    };

    return descriptor;
  };
}
