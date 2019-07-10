import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
var ColumnTitleComponent = /** @class */ (function () {
    function ColumnTitleComponent() {
        this.sort = new EventEmitter();
    }
    ColumnTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-st-column-title',
                    template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    ColumnTitleComponent.propDecorators = {
        "column": [{ type: Input },],
        "source": [{ type: Input },],
        "sort": [{ type: Output },],
    };
    return ColumnTitleComponent;
}());
export { ColumnTitleComponent };
//# sourceMappingURL=column-title.component.js.map