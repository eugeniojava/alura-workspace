System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, escape = false) {
                    this._element = $(selector);
                    this._escape = escape;
                }
                update(model) {
                    const t1 = performance.now();
                    let template = this.template(model);
                    if (this._escape) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
                    }
                    this._element.html(template);
                    const t2 = performance.now();
                    console.log(`update: ${t2 - t1}`);
                }
            };
            exports_1("View", View);
        }
    };
});
