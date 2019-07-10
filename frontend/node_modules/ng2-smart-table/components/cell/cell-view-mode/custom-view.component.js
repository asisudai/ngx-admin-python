import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var CustomViewComponent = /** @class */ (function () {
    function CustomViewComponent(resolver) {
        this.resolver = resolver;
    }
    CustomViewComponent.prototype.ngOnInit = function () {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    };
    CustomViewComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomViewComponent.prototype.createCustomComponent = function () {
        var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    };
    CustomViewComponent.prototype.callOnComponentInit = function () {
        var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    };
    CustomViewComponent.prototype.patchInstance = function () {
        Object.assign(this.customComponent.instance, this.getPatch());
    };
    CustomViewComponent.prototype.getPatch = function () {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    };
    CustomViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'custom-view-component',
                    template: "\n    <ng-template #dynamicTarget></ng-template>\n  ",
                },] },
    ];
    /** @nocollapse */
    CustomViewComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
    ]; };
    CustomViewComponent.propDecorators = {
        "cell": [{ type: Input },],
        "dynamicTarget": [{ type: ViewChild, args: ['dynamicTarget', { read: ViewContainerRef },] },],
    };
    return CustomViewComponent;
}());
export { CustomViewComponent };
//# sourceMappingURL=custom-view.component.js.map