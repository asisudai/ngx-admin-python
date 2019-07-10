import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
var Ng2SmartTableTheadComponent = /** @class */ (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    };
    Ng2SmartTableTheadComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ng2-st-thead]',
                    template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\" class=\"ng2-smart-titles\" [grid]=\"grid\" [isAllSelected]=\"isAllSelected\" [source]=\"source\" (sort)=\"sort.emit($event)\" (selectAllRows)=\"selectAllRows.emit($event)\"></tr><tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\" class=\"ng2-smart-filters\" [grid]=\"grid\" [source]=\"source\" (create)=\"create.emit($event)\" (filter)=\"filter.emit($event)\"></tr><tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\" [grid]=\"grid\" [createConfirm]=\"createConfirm\"></tr>",
                },] },
    ];
    /** @nocollapse */
    Ng2SmartTableTheadComponent.propDecorators = {
        "grid": [{ type: Input },],
        "source": [{ type: Input },],
        "isAllSelected": [{ type: Input },],
        "createConfirm": [{ type: Input },],
        "sort": [{ type: Output },],
        "selectAllRows": [{ type: Output },],
        "create": [{ type: Output },],
        "filter": [{ type: Output },],
    };
    return Ng2SmartTableTheadComponent;
}());
export { Ng2SmartTableTheadComponent };
//# sourceMappingURL=thead.component.js.map