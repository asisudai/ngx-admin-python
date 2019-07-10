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
import { Component, Input, HostBinding, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
var NbActionComponent = /** @class */ (function () {
    function NbActionComponent() {
        this.disabledValue = false;
    }
    Object.defineProperty(NbActionComponent.prototype, "disabled", {
        /**
         * Disables the item (changes item opacity and mouse cursor)
         * @type boolean
         */
        set: function (val) {
            this.disabledValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.disabled'),
        __metadata("design:type", Boolean)
    ], NbActionComponent.prototype, "disabledValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbActionComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbActionComponent.prototype, "disabled", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbActionComponent.prototype, "badgeText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbActionComponent.prototype, "badgeStatus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbActionComponent.prototype, "badgePosition", void 0);
    NbActionComponent = __decorate([
        Component({
            selector: 'nb-action',
            template: "\n    <a class=\"icon-container\" href=\"#\" *ngIf=\"icon; else showContent\" (click)=\"$event.preventDefault()\">\n      <i class=\"control-icon {{ icon }}\"></i>\n    </a>\n    <ng-template #showContent>\n      <ng-content></ng-content>\n    </ng-template>\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  ",
        })
    ], NbActionComponent);
    return NbActionComponent;
}());
export { NbActionComponent };
/**
 * Shows a horizontal list of actions, available in multiple sizes.
 * Aligns items vertically.
 *
 * @stacked-example(Showcase, action/action-showcase.component)
 *
 * Basic actions setup:
 * ```html
 * <nb-actions size="small">
 *   <nb-action icon="nb-search"></nb-action>
 *   <nb-action icon="nb-power-circled"></nb-action>
 *   <nb-action icon="nb-person"></nb-action>
 * </nb-actions>
 * ```
 * ### Installation
 *
 * Import `NbActionsModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbActionsModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Multiple sizes example:
 * @stacked-example(Multiple Sizes, action/action-sizes.component)
 *
 * It is also possible to specify a `badge` value:
 *
 * @stacked-example(Action Badge, action/action-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, action/action-width.component)
 *
 * @styles
 *
 * actions-font-size:
 * actions-font-family:
 * actions-line-height:
 * actions-fg:
 * actions-bg:
 * actions-separator:
 * actions-padding:
 * actions-size-small:
 * actions-size-medium:
 * actions-size-large:
 */
var NbActionsComponent = /** @class */ (function () {
    function NbActionsComponent() {
        this.fullWidthValue = false;
    }
    NbActionsComponent_1 = NbActionsComponent;
    Object.defineProperty(NbActionsComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbActionsComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbActionsComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbActionsComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "size", {
        /**
         * Size of the component, small|medium|large
         * @type string
         */
        set: function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "inverse", {
        /**
         * Makes colors inverse based on current theme
         * @type boolean
         */
        set: function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "fullWidth", {
        /**
         * Component will fill full width of the container
         * @type boolean
         */
        set: function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    var NbActionsComponent_1;
    NbActionsComponent.SIZE_SMALL = 'small';
    NbActionsComponent.SIZE_MEDIUM = 'medium';
    NbActionsComponent.SIZE_LARGE = 'large';
    __decorate([
        HostBinding('class.inverse'),
        __metadata("design:type", Boolean)
    ], NbActionsComponent.prototype, "inverseValue", void 0);
    __decorate([
        HostBinding('class.small'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbActionsComponent.prototype, "small", null);
    __decorate([
        HostBinding('class.medium'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbActionsComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.large'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbActionsComponent.prototype, "large", null);
    __decorate([
        HostBinding('class.full-width'),
        __metadata("design:type", Boolean)
    ], NbActionsComponent.prototype, "fullWidthValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbActionsComponent.prototype, "size", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbActionsComponent.prototype, "inverse", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbActionsComponent.prototype, "fullWidth", null);
    NbActionsComponent = NbActionsComponent_1 = __decorate([
        Component({
            selector: 'nb-actions',
            styles: [":host{display:flex;align-items:center}:host /deep/ nb-action{display:flex;flex-wrap:wrap;align-items:center;position:relative}:host /deep/ nb-action i.control-icon:hover{cursor:pointer}:host /deep/ nb-action.disabled{cursor:not-allowed}:host /deep/ nb-action.disabled>*{opacity:0.5}:host /deep/ nb-action.disabled a,:host /deep/ nb-action.disabled i{cursor:not-allowed !important} "],
            template: "\n    <ng-content select=\"nb-action\"></ng-content>\n  ",
        })
    ], NbActionsComponent);
    return NbActionsComponent;
}());
export { NbActionsComponent };
//# sourceMappingURL=actions.component.js.map