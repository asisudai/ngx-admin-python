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
import { Component, Input, HostBinding, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { convertToBoolProperty } from '../helpers';
/**
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Can have one of the following statuses: danger, success or warning
 *
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * @additional-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 *
 * @styles
 *
 * checkbox-bg:
 * checkbox-size:
 * checkbox-border-size:
 * checkbox-border-color:
 * checkbox-checkmark:
 * checkbox-checked-bg:
 * checkbox-checked-size:
 * checkbox-checked-border-size:
 * checkbox-checked-border-color:
 * checkbox-checked-checkmark:
 * checkbox-disabled-bg:
 * checkbox-disabled-size:
 * checkbox-disabled-border-size:
 * checkbox-disabled-border-color:
 * checkbox-disabled-checkmark:
 */
var NbCheckboxComponent = /** @class */ (function () {
    function NbCheckboxComponent(changeDetector) {
        this.changeDetector = changeDetector;
        /**
         * Checkbox value
         * @type {boolean}
         * @private
         */
        this._value = false;
        this.disabled = false;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    NbCheckboxComponent_1 = NbCheckboxComponent;
    Object.defineProperty(NbCheckboxComponent.prototype, "setDisabled", {
        set: function (val) {
            this.disabled = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "setStatus", {
        /**
         * Checkbox status (success, warning, danger)
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
        },
        enumerable: true,
        configurable: true
    });
    NbCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbCheckboxComponent.prototype.writeValue = function (val) {
        this._value = val;
        this.changeDetector.detectChanges();
    };
    NbCheckboxComponent.prototype.setDisabledState = function (val) {
        this.disabled = convertToBoolProperty(val);
    };
    NbCheckboxComponent.prototype.setTouched = function () {
        this.onTouched();
    };
    var NbCheckboxComponent_1;
    __decorate([
        Input('value'),
        __metadata("design:type", Boolean)
    ], NbCheckboxComponent.prototype, "_value", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbCheckboxComponent.prototype, "setDisabled", null);
    __decorate([
        Input('status'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbCheckboxComponent.prototype, "setStatus", null);
    __decorate([
        HostBinding('class.success'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.warning'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.danger'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "danger", null);
    NbCheckboxComponent = NbCheckboxComponent_1 = __decorate([
        Component({
            selector: 'nb-checkbox',
            template: "\n    <label class=\"customised-control\">\n      <input type=\"checkbox\" class=\"customised-control-input\"\n             [disabled]=\"disabled\"\n             [checked]=\"value\"\n             (change)=\"value = !value\"\n             (blur)=\"setTouched()\">\n      <span class=\"customised-control-indicator\"></span>\n      <span class=\"customised-control-description\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
            styles: [":host .customised-control{position:relative;display:inline-flex;margin:0;min-height:inherit;padding:0.375rem 1.5rem 0.375rem 0}:host .customised-control-input{position:absolute;opacity:0}:host .customised-control-input:disabled ~ .customised-control-indicator,:host .customised-control-input:disabled ~ .customised-control-description{opacity:0.5}:host .customised-control-indicator{border-radius:0.25rem;flex-shrink:0}:host .customised-control-indicator::before{content:'';border-style:solid;display:block;margin:0 auto;transform:rotate(45deg)}[dir=ltr] :host .customised-control-description{padding-left:.5rem}[dir=rtl] :host .customised-control-description{padding-right:.5rem} "],
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return NbCheckboxComponent_1; }),
                    multi: true,
                }],
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], NbCheckboxComponent);
    return NbCheckboxComponent;
}());
export { NbCheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map