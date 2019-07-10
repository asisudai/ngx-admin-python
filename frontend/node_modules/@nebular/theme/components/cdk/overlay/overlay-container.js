var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ComponentFactoryResolver, HostBinding, Injector, Input, ViewContainerRef, } from '@angular/core';
import { NbPosition } from './overlay-position';
import { NbPortalInjector } from './mapping';
var NbPositionedContainer = /** @class */ (function () {
    function NbPositionedContainer() {
    }
    Object.defineProperty(NbPositionedContainer.prototype, "top", {
        get: function () {
            return this.position === NbPosition.TOP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPositionedContainer.prototype, "right", {
        get: function () {
            return this.position === NbPosition.RIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPositionedContainer.prototype, "bottom", {
        get: function () {
            return this.position === NbPosition.BOTTOM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPositionedContainer.prototype, "left", {
        get: function () {
            return this.position === NbPosition.LEFT;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbPositionedContainer.prototype, "position", void 0);
    __decorate([
        HostBinding('class.nb-overlay-top'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbPositionedContainer.prototype, "top", null);
    __decorate([
        HostBinding('class.nb-overlay-right'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbPositionedContainer.prototype, "right", null);
    __decorate([
        HostBinding('class.nb-overlay-bottom'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbPositionedContainer.prototype, "bottom", null);
    __decorate([
        HostBinding('class.nb-overlay-left'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbPositionedContainer.prototype, "left", null);
    return NbPositionedContainer;
}());
export { NbPositionedContainer };
var NbOverlayContainerComponent = /** @class */ (function () {
    function NbOverlayContainerComponent(vcr, injector) {
        this.vcr = vcr;
        this.injector = injector;
        this.isAttached = false;
    }
    Object.defineProperty(NbOverlayContainerComponent.prototype, "isStringContent", {
        get: function () {
            return !!this.content;
        },
        enumerable: true,
        configurable: true
    });
    NbOverlayContainerComponent.prototype.attachComponentPortal = function (portal) {
        var factory = portal.cfr.resolveComponentFactory(portal.component);
        var injector = this.createChildInjector(portal.cfr);
        var componentRef = this.vcr.createComponent(factory, null, injector);
        this.isAttached = true;
        return componentRef;
    };
    NbOverlayContainerComponent.prototype.attachTemplatePortal = function (portal) {
        var embeddedView = this.vcr.createEmbeddedView(portal.templateRef, portal.context);
        this.isAttached = true;
        return embeddedView;
    };
    NbOverlayContainerComponent.prototype.attachStringContent = function (content) {
        this.content = content;
        this.isAttached = true;
    };
    NbOverlayContainerComponent.prototype.createChildInjector = function (cfr) {
        return new NbPortalInjector(this.injector, new WeakMap([
            [ComponentFactoryResolver, cfr],
        ]));
    };
    NbOverlayContainerComponent = __decorate([
        Component({
            selector: 'nb-overlay-container',
            template: "\n    <div *ngIf=\"isStringContent\" class=\"primitive-overlay\">{{ content }}</div>\n  ",
        }),
        __metadata("design:paramtypes", [ViewContainerRef, Injector])
    ], NbOverlayContainerComponent);
    return NbOverlayContainerComponent;
}());
export { NbOverlayContainerComponent };
//# sourceMappingURL=overlay-container.js.map