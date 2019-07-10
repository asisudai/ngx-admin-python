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
import { Component, Input } from '@angular/core';
/**
 * Progress Bar is a component for indicating progress.
 *
 * Simple usage:
 *
 * ```html
 * <nb-progress-bar [value]="50"></nb-progress-bar>
 * ```
 * ### Installation
 *
 * Import `NbProgressBarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbProgressBarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Progress bar accepts property `value` in range 0-100
 * @stacked-example(Progress bar, progress-bar/progress-bar-showcase.component)
 *
 * Progress bar background could be configured by providing a `status` property:
 * @stacked-example(Progress bar status, progress-bar/progress-bar-status.component)
 *
 * Progress bar size (height and font-size) could be configured by providing a `size` property:
 * @stacked-example(Progress bar size, progress-bar/progress-bar-size.component)
 *
 * `displayValue` property shows current value inside progress bar. It's also possible to add custom text inside:
 * @stacked-example(Progress bar value, progress-bar/progress-bar-value.component)
 *
 * Progress bar supports `width` and `background-color` transition:
 * @stacked-example(Progress bar interactive, progress-bar/progress-bar-interactive.component)
 *
 * @styles
 *
 * progress-bar-height-xlg:
 * progress-bar-height-lg:
 * progress-bar-height:
 * progress-bar-height-sm:
 * progress-bar-height-xs:
 * progress-bar-font-size-xlg:
 * progress-bar-font-size-lg:
 * progress-bar-font-size:
 * progress-bar-font-size-sm:
 * progress-bar-font-size-xs:
 * progress-bar-radius:
 * progress-bar-bg-color:
 * progress-bar-font-color:
 * progress-bar-font-weight:
 * progress-bar-default-bg-color:
 * progress-bar-primary-bg-color:
 * progress-bar-success-bg-color:
 * progress-bar-info-bg-color:
 * progress-bar-warning-bg-color:
 * progress-bar-danger-bg-color:
 */
var NbProgressBarComponent = /** @class */ (function () {
    function NbProgressBarComponent() {
        /**
         * Progress bar value in percent (0 - 100)
         * @type {number}
         * @private
         */
        this.value = 0;
        /**
         * Displays value inside progress bar
         * @param {string} val
         */
        this.displayValue = false;
    }
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NbProgressBarComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbProgressBarComponent.prototype, "status", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbProgressBarComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbProgressBarComponent.prototype, "displayValue", void 0);
    NbProgressBarComponent = __decorate([
        Component({
            selector: 'nb-progress-bar',
            styles: [":host{display:block}.progress-container{overflow:hidden}.progress-value{height:100%;text-align:center;overflow:hidden} "],
            template: "\n    <div class=\"progress-container {{ size ? '' + size : '' }}\">\n      <div class=\"progress-value {{ status ? '' + status : '' }}\" [style.width.%]=\"value\">\n        <span *ngIf=\"displayValue\">{{ value }}%</span>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
        })
    ], NbProgressBarComponent);
    return NbProgressBarComponent;
}());
export { NbProgressBarComponent };
//# sourceMappingURL=progress-bar.component.js.map