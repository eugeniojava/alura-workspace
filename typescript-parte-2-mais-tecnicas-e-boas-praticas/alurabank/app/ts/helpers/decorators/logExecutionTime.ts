export function logExecutionTime() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const defaultMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const fReturn = defaultMethod.apply(this, args);

      return fReturn;
    };

    return descriptor;
  };
}
