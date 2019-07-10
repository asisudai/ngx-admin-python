import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var ViewCellComponent = /** @class */ (function () {
    function ViewCellComponent() {
    }
    ViewCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'table-cell-view-mode',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    ",
                },] },
    ];
    /** @nocollapse */
    ViewCellComponent.propDecorators = {
        "cell": [{ type: Input },],
    };
    return ViewCellComponent;
}());
export { ViewCellComponent };
//# sourceMappingURL=view-cell.component.js.map