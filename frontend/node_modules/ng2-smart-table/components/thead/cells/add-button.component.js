import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
    }
    AddButtonComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    };
    AddButtonComponent.prototype.ngOnChanges = function () {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    };
    AddButtonComponent.prototype.onAdd = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    };
    AddButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ng2-st-add-button]',
                    template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  ",
                },] },
    ];
    /** @nocollapse */
    AddButtonComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AddButtonComponent.propDecorators = {
        "grid": [{ type: Input },],
        "source": [{ type: Input },],
        "create": [{ type: Output },],
    };
    return AddButtonComponent;
}());
export { AddButtonComponent };
//# sourceMappingURL=add-button.component.js.map