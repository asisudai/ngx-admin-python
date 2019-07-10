import { Component, Input, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
var TbodyCreateCancelComponent = /** @class */ (function () {
    function TbodyCreateCancelComponent() {
    }
    TbodyCreateCancelComponent.prototype.onSave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    };
    TbodyCreateCancelComponent.prototype.onCancelEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    };
    TbodyCreateCancelComponent.prototype.ngOnChanges = function () {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
    };
    TbodyCreateCancelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-st-tbody-create-cancel',
                    template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"cancelButtonContent\" (click)=\"onCancelEdit($event)\"></a>\n  ",
                },] },
    ];
    /** @nocollapse */
    TbodyCreateCancelComponent.propDecorators = {
        "grid": [{ type: Input },],
        "row": [{ type: Input },],
        "editConfirm": [{ type: Input },],
    };
    return TbodyCreateCancelComponent;
}());
export { TbodyCreateCancelComponent };
//# sourceMappingURL=create-cancel.component.js.map