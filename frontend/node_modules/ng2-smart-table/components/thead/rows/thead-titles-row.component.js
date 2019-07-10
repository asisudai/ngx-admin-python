import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var TheadTitlesRowComponent = /** @class */ (function () {
    function TheadTitlesRowComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    TheadTitlesRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    };
    TheadTitlesRowComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ng2-st-thead-titles-row]',
                    template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  ",
                },] },
    ];
    /** @nocollapse */
    TheadTitlesRowComponent.propDecorators = {
        "grid": [{ type: Input },],
        "isAllSelected": [{ type: Input },],
        "source": [{ type: Input },],
        "sort": [{ type: Output },],
        "selectAllRows": [{ type: Output },],
    };
    return TheadTitlesRowComponent;
}());
export { TheadTitlesRowComponent };
//# sourceMappingURL=thead-titles-row.component.js.map