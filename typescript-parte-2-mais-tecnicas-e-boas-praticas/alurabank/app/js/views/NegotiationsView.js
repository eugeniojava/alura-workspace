System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, NegotiationsView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegotiationsView = class NegotiationsView extends View_1.View {
                template(model) {
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
                        .map((negotiation) => `
              <tr>
              <td> ${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}
              </td>
              <td>${negotiation.quantity}</td>
              <td>${negotiation.price}</td>
              <td>${negotiation.volume}</td>
              </tr>
              `)
                        .join("")}
        </tbody>
        <tfoot>
        </tfoot>
      </table>
      `;
                }
            };
            exports_1("NegotiationsView", NegotiationsView);
        }
    };
});
