import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
var TbodyCustomComponent = /** @class */ (function () {
    function TbodyCustomComponent() {
        this.custom = new EventEmitter();
    }
    TbodyCustomComponent.prototype.onCustom = function (action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    };
    TbodyCustomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-st-tbody-custom',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
                },] },
    ];
    /** @nocollapse */
    TbodyCustomComponent.propDecorators = {
        "grid": [{ type: Input },],
        "row": [{ type: Input },],
        "source": [{ type: Input },],
        "custom": [{ type: Output },],
    };
    return TbodyCustomComponent;
}());
export { TbodyCustomComponent };
//# sourceMappingURL=custom.component.js.map