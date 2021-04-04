class NegotiationsView {
  private _element: Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  update(): void {
    this._element.innerHTML = this.template();
  }

  template(): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
      <tfoot>
      </tfoot>
    </table>`;
  }
}
