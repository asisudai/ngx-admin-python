import { Component, Input } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var CheckboxSelectAllComponent = /** @class */ (function () {
    function CheckboxSelectAllComponent() {
    }
    CheckboxSelectAllComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ng2-st-checkbox-select-all]',
                    template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  ",
                },] },
    ];
    /** @nocollapse */
    CheckboxSelectAllComponent.propDecorators = {
        "grid": [{ type: Input },],
        "source": [{ type: Input },],
        "isAllSelected": [{ type: Input },],
    };
    return CheckboxSelectAllComponent;
}());
export { CheckboxSelectAllComponent };
//# sourceMappingURL=checkbox-select-all.component.js.map