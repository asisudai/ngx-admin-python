/*
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ComponentFactoryResolver, Directive, ElementRef, Inject, Input, } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { createContainer, NbAdjustment, NbOverlayService, NbPosition, NbPositionBuilderService, NbTrigger, NbTriggerStrategyBuilder, patch, } from '../cdk';
import { NB_DOCUMENT } from '../../theme.options';
import { NbTooltipComponent } from './tooltip.component';
/**
 *
 * Tooltip directive for small text/icon hints.
 *
 * ### Installation
 *
 * Import `NbTooltipModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbTooltipModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * @stacked-example(Showcase, tooltip/tooltip-showcase.component)
 *
 * Tooltip can accept a hint text and/or an icon:
 * @stacked-example(With Icon, tooltip/tooltip-with-icon.component)
 *
 * Same way as Popover, tooltip can accept placement position with `nbTooltipPlacement` proprety:
 * @stacked-example(Placements, tooltip/tooltip-placements.component)
 *
 * It is also possible to specify tooltip color using `nbTooltipStatus` property:
 * @stacked-example(Colored Tooltips, tooltip/tooltip-colors.component)
 *
 */
var NbTooltipDirective = /** @class */ (function () {
    function NbTooltipDirective(document, hostRef, positionBuilder, overlay, componentFactoryResolver) {
        this.document = document;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         */
        this.position = NbPosition.TOP;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         */
        this.adjustment = NbAdjustment.CLOCKWISE;
        this.alive = true;
    }
    Object.defineProperty(NbTooltipDirective.prototype, "icon", {
        /**
         *
         * @param {string} icon
         */
        set: function (icon) {
            this.context = Object.assign(this.context, { icon: icon });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTooltipDirective.prototype, "status", {
        /**
         *
         * @param {string} status
         */
        set: function (status) {
            this.context = Object.assign(this.context, { status: status });
        },
        enumerable: true,
        configurable: true
    });
    NbTooltipDirective.prototype.ngAfterViewInit = function () {
        this.subscribeOnTriggers();
    };
    NbTooltipDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbTooltipDirective.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openTooltip();
    };
    NbTooltipDirective.prototype.hide = function () {
        this.ref.detach();
    };
    NbTooltipDirective.prototype.toggle = function () {
        if (this.ref && this.ref.hasAttached()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    NbTooltipDirective.prototype.createOverlay = function () {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.subscribeOnPositionChange();
    };
    NbTooltipDirective.prototype.openTooltip = function () {
        this.container = createContainer(this.ref, NbTooltipComponent, {
            position: this.position,
            content: this.content,
            context: this.context,
            cfr: this.componentFactoryResolver,
        }, this.componentFactoryResolver);
    };
    NbTooltipDirective.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(this.position)
            .adjustment(this.adjustment)
            .offset(8);
    };
    NbTooltipDirective.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(NbTrigger.HINT)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.container; })
            .build();
    };
    NbTooltipDirective.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy.positionChange
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return patch(_this.container, { position: position }); });
    };
    NbTooltipDirective.prototype.subscribeOnTriggers = function () {
        var _this = this;
        var triggerStrategy = this.createTriggerStrategy();
        triggerStrategy.show$.pipe(takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.show(); });
        triggerStrategy.hide$.pipe(takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.hide(); });
    };
    __decorate([
        Input('nbTooltip'),
        __metadata("design:type", String)
    ], NbTooltipDirective.prototype, "content", void 0);
    __decorate([
        Input('nbTooltipPlacement'),
        __metadata("design:type", String)
    ], NbTooltipDirective.prototype, "position", void 0);
    __decorate([
        Input('nbTooltipAdjustment'),
        __metadata("design:type", String)
    ], NbTooltipDirective.prototype, "adjustment", void 0);
    __decorate([
        Input('nbTooltipIcon'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbTooltipDirective.prototype, "icon", null);
    __decorate([
        Input('nbTooltipStatus'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbTooltipDirective.prototype, "status", null);
    NbTooltipDirective = __decorate([
        Directive({ selector: '[nbTooltip]' }),
        __param(0, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [Object, ElementRef,
            NbPositionBuilderService,
            NbOverlayService,
            ComponentFactoryResolver])
    ], NbTooltipDirective);
    return NbTooltipDirective;
}());
export { NbTooltipDirective };
//# sourceMappingURL=tooltip.directive.js.map