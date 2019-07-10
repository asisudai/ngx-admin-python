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
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
/**
 * An accordion allows to toggle the display of sections of content
 *
 * Basic example
 * @stacked-example(Showcase, accordion/accordion-showcase.component)
 *
 * ```ts
 * <nb-accordion>
 *  <nb-accordion-item>
 *   <nb-accordion-item-header>Product Details</nb-accordion-item-header>
 *   <nb-accordion-item-body>
 *     Item Content
 *   </nb-accordion-item-body>
 *  </nb-accordion-item>
 * </nb-accordion>
 * ```
 * ### Installation
 *
 * Import `NbAccordionModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbAccordionModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * With `multi` mode acordion can have multiple items expanded:
 * @stacked-example(Showcase, accordion/accordion-multi.component)
 *
 * `NbAccordionItemComponent` has several method, for example it is possible to trigger item click/toggle:
 * @stacked-example(Showcase, accordion/accordion-toggle.component)
 *
 * @styles
 *
 * accordion-padding:
 * accordion-separator:
 * accordion-header-font-family:
 * accordion-header-font-size:
 * accordion-header-font-weight:
 * accordion-header-fg-heading:
 * accordion-header-disabled-fg:
 * accordion-header-border-width:
 * accordion-header-border-type:
 * accordion-header-border-color:
 * accordion-item-bg:
 * accordion-item-font-size:
 * accordion-item-font-weight:
 * accordion-item-font-family:
 * accordion-item-fg-text:
 * accordion-item-shadow:
 */
var NbAccordionComponent = /** @class */ (function () {
    function NbAccordionComponent() {
        this.openCloseItems = new Subject();
        this.multiValue = false;
    }
    Object.defineProperty(NbAccordionComponent.prototype, "multi", {
        /**
         *  Allow multiple items to be expanded at the same time.
         * @type {boolean}
         */
        get: function () {
            return this.multiValue;
        },
        set: function (val) {
            this.multiValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens all enabled accordion items.
     */
    NbAccordionComponent.prototype.openAll = function () {
        if (this.multi) {
            this.openCloseItems.next(false);
        }
    };
    /**
     * Closes all enabled accordion items.
     */
    NbAccordionComponent.prototype.closeAll = function () {
        this.openCloseItems.next(true);
    };
    NbAccordionComponent.STATUS_ACTIVE = 'active';
    NbAccordionComponent.STATUS_DISABLED = 'disabled';
    NbAccordionComponent.STATUS_PRIMARY = 'primary';
    NbAccordionComponent.STATUS_INFO = 'info';
    NbAccordionComponent.STATUS_SUCCESS = 'success';
    NbAccordionComponent.STATUS_WARNING = 'warning';
    NbAccordionComponent.STATUS_DANGER = 'danger';
    __decorate([
        Input('multi'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbAccordionComponent.prototype, "multi", null);
    NbAccordionComponent = __decorate([
        Component({
            selector: 'nb-accordion',
            template: "\n    <ng-content select=\"nb-accordion-item\"></ng-content>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
    ], NbAccordionComponent);
    return NbAccordionComponent;
}());
export { NbAccordionComponent };
//# sourceMappingURL=accordion.component.js.map