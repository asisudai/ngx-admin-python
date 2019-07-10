var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { NbComponentPortal, NbOverlay, } from './mapping';
import { NbLayoutDirectionService } from '../../../services/direction.service';
export function patch(container, containerContext) {
    Object.assign(container.instance, containerContext);
    container.changeDetectorRef.detectChanges();
    return container;
}
export function createContainer(ref, container, context, componentFactoryResolver) {
    var containerRef = ref.attach(new NbComponentPortal(container, null, null, componentFactoryResolver));
    patch(containerRef, context);
    return containerRef;
}
var NbOverlayService = /** @class */ (function () {
    function NbOverlayService(overlay, layoutDirection) {
        this.overlay = overlay;
        this.layoutDirection = layoutDirection;
    }
    Object.defineProperty(NbOverlayService.prototype, "scrollStrategies", {
        get: function () {
            return this.overlay.scrollStrategies;
        },
        enumerable: true,
        configurable: true
    });
    NbOverlayService.prototype.create = function (config) {
        var overlayRef = this.overlay.create(config);
        this.layoutDirection.onDirectionChange()
            .subscribe(function (dir) { return overlayRef.setDirection(dir); });
        return overlayRef;
    };
    NbOverlayService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NbOverlay, NbLayoutDirectionService])
    ], NbOverlayService);
    return NbOverlayService;
}());
export { NbOverlayService };
//# sourceMappingURL=overlay.js.map