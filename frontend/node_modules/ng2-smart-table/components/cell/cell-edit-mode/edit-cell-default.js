import { Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var EditCellDefault = /** @class */ (function () {
    function EditCellDefault() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    EditCellDefault.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellDefault.prototype.onStopEditing = function () {
        this.cell.getRow().isInEditing = false;
        return false;
    };
    EditCellDefault.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    EditCellDefault.propDecorators = {
        "cell": [{ type: Input },],
        "inputClass": [{ type: Input },],
        "edited": [{ type: Output },],
    };
    return EditCellDefault;
}());
export { EditCellDefault };
//# sourceMappingURL=edit-cell-default.js.map