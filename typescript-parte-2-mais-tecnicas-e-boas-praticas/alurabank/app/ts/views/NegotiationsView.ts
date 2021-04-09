import { View } from "./View";
import { Negotiations } from "./../models/Negotiations";

export class NegotiationsView extends View<Negotiations> {
  template(model: Negotiations): string {
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
          ${model
            .toArray()
            .map(
              (negotiation) =>
                `
              <tr>
              <td> ${negotiation.date.getDate()}/${
                  negotiation.date.getMonth() + 1
                }/${negotiation.date.getFullYear()}
              </td>
              <td>${negotiation.quantity}</td>
              <td>${negotiation.price}</td>
              <td>${negotiation.volume}</td>
              </tr>
              `
            )
            .join("")}
        </tbody>
        <tfoot>
        </tfoot>
      </table>`;
  }
}
