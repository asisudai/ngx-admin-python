import { Component, Input, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
var ActionsTitleComponent = /** @class */ (function () {
    function ActionsTitleComponent(ref) {
        this.ref = ref;
    }
    ActionsTitleComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    };
    ActionsTitleComponent.prototype.ngOnChanges = function () {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    };
    ActionsTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ng2-st-actions-title]',
                    template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  ",
                },] },
    ];
    /** @nocollapse */
    ActionsTitleComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ActionsTitleComponent.propDecorators = {
        "grid": [{ type: Input },],
    };
    return ActionsTitleComponent;
}());
export { ActionsTitleComponent };
//# sourceMappingURL=actions-title.component.js.map