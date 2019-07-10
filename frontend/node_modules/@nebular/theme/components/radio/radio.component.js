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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * The `NbRadioComponent` provides the same functionality as native `<input type="radio">`
 * with Nebular styles and animations.
 *
 * @stacked-example(Showcase, radio/radio-showcase.component)
 *
 * ### Installation
 *
 * Import `NbRadioModule` to your feature module.
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbRadioModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * Radio buttons should be wrapped in `nb-radio-group` to provide form bindings.
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio>Option 1</nb-radio>
 *   <nb-radio>Option 2</nb-radio>
 *   <nb-radio>Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * You can disable some radios in the group using a `disabled` attribute.
 *
 * @stacked-example(Disabled, radio/radio-disabled.component)
 *
 *
 * @styles
 *
 * radio-bg
 * radio-fg
 * radio-size
 * radio-border-size
 * radio-border-color
 * radio-checkmark
 * radio-checked-bg
 * radio-checked-size
 * radio-checked-border-size
 * radio-checked-border-color
 * radio-checked-checkmark
 * radio-disabled-bg
 * radio-disabled-size
 * radio-disabled-border-size
 * radio-disabled-border-color
 * radio-disabled-checkmark
 * */
var NbRadioComponent = /** @class */ (function () {
    function NbRadioComponent(cd) {
        this.cd = cd;
        this.valueChange = new EventEmitter();
        this.blur = new EventEmitter();
    }
    Object.defineProperty(NbRadioComponent.prototype, "setDisabled", {
        set: function (disabled) {
            this.disabled = convertToBoolProperty(disabled);
        },
        enumerable: true,
        configurable: true
    });
    NbRadioComponent.prototype.markForCheck = function () {
        this.cd.markForCheck();
        this.cd.detectChanges();
    };
    NbRadioComponent.prototype.onChange = function (event) {
        event.stopPropagation();
        this.checked = true;
        this.valueChange.emit(this.value);
    };
    NbRadioComponent.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbRadioComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbRadioComponent.prototype, "checked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbRadioComponent.prototype, "value", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbRadioComponent.prototype, "setDisabled", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbRadioComponent.prototype, "valueChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbRadioComponent.prototype, "blur", void 0);
    NbRadioComponent = __decorate([
        Component({
            selector: 'nb-radio',
            template: "\n    <label>\n      <input\n        type=\"radio\"\n        [name]=\"name\"\n        [value]=\"value\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        (change)=\"onChange($event)\"\n        (click)=\"onClick($event)\">\n      <span class=\"radio-indicator\"></span>\n      <span class=\"radio-description\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host{display:block}:host label{position:relative;display:inline-flex;margin:0;min-height:inherit;padding:0.375rem 1.5rem 0.375rem 0}:host input{position:absolute;opacity:0}:host input:disabled+.radio-indicator,:host input:disabled ~ .radio-description{opacity:0.5}:host .radio-indicator{border-radius:50%;flex-shrink:0;display:flex;justify-content:center;align-items:center}:host .radio-indicator::before{content:'';transition:all 0.1s;border-radius:50%}[dir=ltr] :host .radio-description{padding-left:.5rem}[dir=rtl] :host .radio-description{padding-right:.5rem} "],
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], NbRadioComponent);
    return NbRadioComponent;
}());
export { NbRadioComponent };
//# sourceMappingURL=radio.component.js.map