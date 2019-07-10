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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ComponentFactoryResolver, Directive, ElementRef, Inject, Input, } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbAdjustment, NbOverlayService, NbPosition, NbPositionBuilderService, NbTrigger, NbTriggerStrategyBuilder, patch, createContainer, } from '../cdk';
import { NB_DOCUMENT } from '../../theme.options';
import { NbPopoverComponent } from './popover.component';
/**
 * Powerful popover directive, which provides the best UX for your users.
 *
 * @stacked-example(Showcase, popover/popover-showcase.component)
 *
 * Popover can accept different content such as:
 * TemplateRef
 *
 * ```html
 * <button [nbPopover]="templateRef"></button>
 * <ng-template #templateRef>
 *   <span>Hello, Popover!</span>
 * </ng-template>
 * ```
 * ### Installation
 *
 * Import `NbPopoverModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbPopoverModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Custom components
 *
 * ```html
 * <button [nbPopover]="MyPopoverComponent"></button>
 * ```
 *
 * Both custom components and templateRef popovers can receive *contentContext* property
 * that will be passed to the content props.
 *
 * Primitive types
 *
 * ```html
 * <button nbPopover="Hello, Popover!"></button>
 * ```
 *
 * Popover has different placements, such as: top, bottom, left, right, start and end
 * which can be used as following:
 *
 * @stacked-example(Placements, popover/popover-placements.component)
 *
 * By default popover will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the popover container.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button nbPopover="Hello, Popover!" [nbPopoverAdjust]="false"></button>
 * ```
 *
 * Also popover has some different modes which provides capability show$ and hide$ popover in different ways:
 *
 * - Click mode popover shows when a user clicking on the host element and hides when the user clicks
 * somewhere on the document except popover.
 * - Hint mode provides capability show$ popover when the user hovers on the host element
 * and hide$ popover when user hovers out of the host.
 * - Hover mode works like hint mode with one exception - when the user moves mouse from host element to
 * the container element popover will not be hidden.
 *
 * @stacked-example(Available Modes, popover/popover-modes.component.html)
 *
 * @additional-example(Template Ref, popover/popover-template-ref.component)
 * @additional-example(Custom Component, popover/popover-custom-component.component)
 * */
var NbPopoverDirective = /** @class */ (function () {
    function NbPopoverDirective(document, hostRef, positionBuilder, overlay, componentFactoryResolver) {
        this.document = document;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        /**
         * Container content context. Will be applied to the rendered component.
         * */
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         * */
        this.position = NbPosition.TOP;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         * */
        this.adjustment = NbAdjustment.CLOCKWISE;
        /**
         * Describes when the container will be shown.
         * Available options: click, hover and hint
         * */
        this.mode = NbTrigger.CLICK;
        this.alive = true;
    }
    NbPopoverDirective.prototype.ngAfterViewInit = function () {
        this.subscribeOnTriggers();
        this.subscribeOnPositionChange();
    };
    NbPopoverDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.hide();
        if (this.ref) {
            this.ref.dispose();
        }
    };
    NbPopoverDirective.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openPopover();
    };
    NbPopoverDirective.prototype.hide = function () {
        if (this.ref) {
            this.ref.detach();
        }
        this.container = null;
    };
    NbPopoverDirective.prototype.toggle = function () {
        if (this.ref && this.ref.hasAttached()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    NbPopoverDirective.prototype.createOverlay = function () {
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
    };
    NbPopoverDirective.prototype.openPopover = function () {
        this.container = createContainer(this.ref, NbPopoverComponent, {
            position: this.position,
            content: this.content,
            context: this.context,
            cfr: this.componentFactoryResolver,
        }, this.componentFactoryResolver);
    };
    NbPopoverDirective.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(this.position)
            .adjustment(this.adjustment);
    };
    NbPopoverDirective.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(this.mode)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.container; })
            .build();
    };
    NbPopoverDirective.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy = this.createPositionStrategy();
        this.positionStrategy.positionChange
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return patch(_this.container, { position: position }); });
    };
    NbPopoverDirective.prototype.subscribeOnTriggers = function () {
        var _this = this;
        var triggerStrategy = this.createTriggerStrategy();
        triggerStrategy.show$.pipe(takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.show(); });
        triggerStrategy.hide$.pipe(takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.hide(); });
    };
    __decorate([
        Input('nbPopover'),
        __metadata("design:type", Object)
    ], NbPopoverDirective.prototype, "content", void 0);
    __decorate([
        Input('nbPopoverContext'),
        __metadata("design:type", Object)
    ], NbPopoverDirective.prototype, "context", void 0);
    __decorate([
        Input('nbPopoverPlacement'),
        __metadata("design:type", String)
    ], NbPopoverDirective.prototype, "position", void 0);
    __decorate([
        Input('nbPopoverAdjustment'),
        __metadata("design:type", String)
    ], NbPopoverDirective.prototype, "adjustment", void 0);
    __decorate([
        Input('nbPopoverMode'),
        __metadata("design:type", String)
    ], NbPopoverDirective.prototype, "mode", void 0);
    NbPopoverDirective = __decorate([
        Directive({ selector: '[nbPopover]' }),
        __param(0, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [Object, ElementRef,
            NbPositionBuilderService,
            NbOverlayService,
            ComponentFactoryResolver])
    ], NbPopoverDirective);
    return NbPopoverDirective;
}());
export { NbPopoverDirective };
//# sourceMappingURL=popover.directive.js.map