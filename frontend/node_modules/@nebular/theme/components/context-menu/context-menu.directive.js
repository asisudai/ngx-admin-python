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
import { filter, takeWhile } from 'rxjs/operators';
import { createContainer, NbAdjustment, NbOverlayService, NbPosition, NbPositionBuilderService, NbTrigger, NbTriggerStrategyBuilder, patch, } from '../cdk';
import { NbContextMenuComponent } from './context-menu.component';
import { NbMenuService } from '../menu/menu.service';
import { NB_DOCUMENT } from '../../theme.options';
/**
 * Full featured context menu directive.
 *
 * @stacked-example(Showcase, context-menu/context-menu-showcase.component)
 *
 * Just pass menu items array:
 *
 * ```html
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * ### Installation
 *
 * Import `NbContextMenuModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbContextMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to handle context menu clicks you have to pass `nbContextMenuTag`
 * param and register to events using NbMenuService.
 * `NbContextMenu` renders plain `NbMenu` inside, so
 * you have to work with it just like with `NbMenu` component:
 *
 * @stacked-example(Menu item click, context-menu/context-menu-click.component)
 *
 * Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * */
var NbContextMenuDirective = /** @class */ (function () {
    function NbContextMenuDirective(document, menuService, hostRef, positionBuilder, overlay, componentFactoryResolver) {
        this.document = document;
        this.menuService = menuService;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom and left.
         * */
        this.position = NbPosition.BOTTOM;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         * */
        this.adjustment = NbAdjustment.CLOCKWISE;
        this.alive = true;
        this.items = [];
    }
    Object.defineProperty(NbContextMenuDirective.prototype, "setItems", {
        /**
         * Basic menu items, will be passed to the internal NbMenuComponent.
         * */
        set: function (items) {
            this.validateItems(items);
            this.items = items;
        },
        enumerable: true,
        configurable: true
    });
    ;
    NbContextMenuDirective.prototype.ngAfterViewInit = function () {
        this.subscribeOnTriggers();
        this.subscribeOnItemClick();
    };
    NbContextMenuDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.hide();
    };
    NbContextMenuDirective.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openContextMenu();
    };
    NbContextMenuDirective.prototype.hide = function () {
        if (this.ref) {
            this.ref.detach();
        }
        this.container = null;
    };
    NbContextMenuDirective.prototype.toggle = function () {
        if (this.ref && this.ref.hasAttached()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    NbContextMenuDirective.prototype.createOverlay = function () {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.subscribeOnPositionChange();
    };
    NbContextMenuDirective.prototype.openContextMenu = function () {
        this.container = createContainer(this.ref, NbContextMenuComponent, {
            position: this.position,
            items: this.items,
            tag: this.tag,
        }, this.componentFactoryResolver);
    };
    NbContextMenuDirective.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(this.position)
            .adjustment(this.adjustment);
    };
    NbContextMenuDirective.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(NbTrigger.CLICK)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.container; })
            .build();
    };
    NbContextMenuDirective.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy.positionChange
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return patch(_this.container, { position: position }); });
    };
    NbContextMenuDirective.prototype.subscribeOnTriggers = function () {
        var _this = this;
        var triggerStrategy = this.createTriggerStrategy();
        triggerStrategy.show$.pipe(takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.show(); });
        triggerStrategy.hide$.pipe(takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.hide(); });
    };
    /*
     * NbMenuComponent will crash if don't pass menu items to it.
     * So, we just validating them and throw custom obvious error.
     * */
    NbContextMenuDirective.prototype.validateItems = function (items) {
        if (!items || !items.length) {
            throw Error("List of menu items expected, but given: " + items);
        }
    };
    NbContextMenuDirective.prototype.subscribeOnItemClick = function () {
        var _this = this;
        this.menuService.onItemClick()
            .pipe(takeWhile(function () { return _this.alive; }), filter(function (_a) {
            var tag = _a.tag;
            return tag === _this.tag;
        }))
            .subscribe(function () { return _this.hide(); });
    };
    __decorate([
        Input('nbContextMenuPlacement'),
        __metadata("design:type", String)
    ], NbContextMenuDirective.prototype, "position", void 0);
    __decorate([
        Input('nbContextMenuAdjustment'),
        __metadata("design:type", String)
    ], NbContextMenuDirective.prototype, "adjustment", void 0);
    __decorate([
        Input('nbContextMenuTag'),
        __metadata("design:type", String)
    ], NbContextMenuDirective.prototype, "tag", void 0);
    __decorate([
        Input('nbContextMenu'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NbContextMenuDirective.prototype, "setItems", null);
    NbContextMenuDirective = __decorate([
        Directive({ selector: '[nbContextMenu]' }),
        __param(0, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [Object, NbMenuService,
            ElementRef,
            NbPositionBuilderService,
            NbOverlayService,
            ComponentFactoryResolver])
    ], NbContextMenuDirective);
    return NbContextMenuDirective;
}());
export { NbContextMenuDirective };
//# sourceMappingURL=context-menu.directive.js.map