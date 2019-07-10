/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NbFocusTrapFactoryService, NbPortalOutletDirective, } from '../cdk';
import { NbDialogConfig } from './dialog-config';
/**
 * Container component for each dialog.
 * All the dialogs will be attached to it.
 * // TODO add animations
 * */
var NbDialogContainerComponent = /** @class */ (function () {
    function NbDialogContainerComponent(config, elementRef, focusTrapFactory) {
        this.config = config;
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
    }
    NbDialogContainerComponent.prototype.ngOnInit = function () {
        if (this.config.autoFocus) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            this.focusTrap.blurPreviouslyFocusedElement();
            this.focusTrap.focusInitialElement();
        }
    };
    NbDialogContainerComponent.prototype.ngOnDestroy = function () {
        if (this.config.autoFocus && this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
    };
    NbDialogContainerComponent.prototype.attachComponentPortal = function (portal) {
        return this.portalOutlet.attachComponentPortal(portal);
    };
    NbDialogContainerComponent.prototype.attachTemplatePortal = function (portal) {
        return this.portalOutlet.attachTemplatePortal(portal);
    };
    __decorate([
        ViewChild(NbPortalOutletDirective),
        __metadata("design:type", NbPortalOutletDirective)
    ], NbDialogContainerComponent.prototype, "portalOutlet", void 0);
    NbDialogContainerComponent = __decorate([
        Component({
            selector: 'nb-dialog-container',
            template: '<ng-template nbPortalOutlet></ng-template>',
        }),
        __metadata("design:paramtypes", [NbDialogConfig,
            ElementRef,
            NbFocusTrapFactoryService])
    ], NbDialogContainerComponent);
    return NbDialogContainerComponent;
}());
export { NbDialogContainerComponent };
//# sourceMappingURL=dialog-container.js.map