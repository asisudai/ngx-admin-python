var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef, ViewChild } from '@angular/core';
var NbWindowsContainerComponent = /** @class */ (function () {
    function NbWindowsContainerComponent() {
    }
    __decorate([
        ViewChild('viewContainerRef', { read: ViewContainerRef }),
        __metadata("design:type", ViewContainerRef)
    ], NbWindowsContainerComponent.prototype, "viewContainerRef", void 0);
    NbWindowsContainerComponent = __decorate([
        Component({
            selector: 'nb-windows-container',
            template: "<ng-container #viewContainerRef></ng-container>",
            styles: [":host{display:flex;align-items:flex-end;overflow-x:auto}:host /deep/ nb-window:not(.full-screen){margin:0 2rem} "],
        })
    ], NbWindowsContainerComponent);
    return NbWindowsContainerComponent;
}());
export { NbWindowsContainerComponent };
//# sourceMappingURL=windows-container.component.js.map