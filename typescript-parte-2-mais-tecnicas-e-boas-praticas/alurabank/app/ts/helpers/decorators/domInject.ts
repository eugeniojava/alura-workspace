export function domInject(selector: string) {
  return function (target: any, propertyKey: string) {
    let element: JQuery;

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
