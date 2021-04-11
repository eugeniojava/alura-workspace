export abstract class View<T> {
  private _element: JQuery;
  private _escape: boolean;

  constructor(selector: string, escape: boolean = false) {
    this._element = $(selector);
    this._escape = escape;
  }

  update(model: T): void {
    const t1 = performance.now();

    let template = this.template(model);

    if (this._escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
    }

    this._element.html(template);

    const t2 = performance.now();

    console.log(`update: ${t2 - t1}`);
  }

  abstract template(model: T): string;
}
