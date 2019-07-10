/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ComponentFactoryResolver, Input, TemplateRef, Type, ViewChild } from '@angular/core';
import { NbComponentPortal, NbOverlayContainerComponent, NbPositionedContainer, NbTemplatePortal } from '../cdk';
/**
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-fg
 * popover-bg
 * popover-border
 * popover-shadow
 * */
var NbPopoverComponent = /** @class */ (function (_super) {
    __extends(NbPopoverComponent, _super);
    function NbPopoverComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPopoverComponent.prototype.ngAfterViewInit = function () {
        if (this.content instanceof TemplateRef) {
            this.attachTemplate();
        }
        else if (this.content instanceof Type) {
            this.attachComponent();
        }
        else {
            this.attachString();
        }
    };
    NbPopoverComponent.prototype.attachTemplate = function () {
        this.overlayContainer.attachTemplatePortal(new NbTemplatePortal(this.content, null, this.context));
    };
    NbPopoverComponent.prototype.attachComponent = function () {
        var portal = new NbComponentPortal(this.content, null, null, this.cfr);
        var ref = this.overlayContainer.attachComponentPortal(portal);
        Object.assign(ref.instance, this.context);
        ref.changeDetectorRef.detectChanges();
    };
    NbPopoverComponent.prototype.attachString = function () {
        this.overlayContainer.attachStringContent(this.content);
    };
    __decorate([
        ViewChild(NbOverlayContainerComponent),
        __metadata("design:type", NbOverlayContainerComponent)
    ], NbPopoverComponent.prototype, "overlayContainer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbPopoverComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbPopoverComponent.prototype, "context", void 0);
    __decorate([
        Input(),
        __metadata("design:type", ComponentFactoryResolver)
    ], NbPopoverComponent.prototype, "cfr", void 0);
    NbPopoverComponent = __decorate([
        Component({
            selector: 'nb-popover',
            styles: [":host .arrow{position:absolute;width:0;height:0}:host /deep/ nb-overlay-container .primitive-overlay{padding:0.75rem 1rem} "],
            template: "\n    <span class=\"arrow\"></span>\n    <nb-overlay-container></nb-overlay-container>\n  ",
        })
    ], NbPopoverComponent);
    return NbPopoverComponent;
}(NbPositionedContainer));
export { NbPopoverComponent };
//# sourceMappingURL=popover.component.js.map