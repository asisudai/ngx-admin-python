import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.create = new EventEmitter();
    }
    ActionsComponent.prototype.ngOnChanges = function () {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    };
    ActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-st-actions',
                    template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  ",
                },] },
    ];
    /** @nocollapse */
    ActionsComponent.propDecorators = {
        "grid": [{ type: Input },],
        "create": [{ type: Output },],
    };
    return ActionsComponent;
}());
export { ActionsComponent };
//# sourceMappingURL=actions.component.js.map