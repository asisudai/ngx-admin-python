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
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
var NbOptionGroupComponent = /** @class */ (function () {
    function NbOptionGroupComponent() {
        this.disabled = false;
    }
    Object.defineProperty(NbOptionGroupComponent.prototype, "setDisabled", {
        set: function (disabled) {
            this.disabled = convertToBoolProperty(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionGroupComponent.prototype, "disabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbOptionGroupComponent.prototype, "title", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbOptionGroupComponent.prototype, "setDisabled", null);
    __decorate([
        HostBinding('class.disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbOptionGroupComponent.prototype, "disabledClass", null);
    NbOptionGroupComponent = __decorate([
        Component({
            selector: 'nb-option-group',
            styles: [":host{display:block}:host span{padding:1.125rem 0.5rem;display:block}:host.disabled{pointer-events:none}:host /deep/ nb-option{padding:0.75rem 0.75rem 0.75rem 2.5rem} "],
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <span>{{ title }}</span>\n    <ng-content select=\"nb-option, ng-container\"></ng-content>\n  ",
        })
    ], NbOptionGroupComponent);
    return NbOptionGroupComponent;
}());
export { NbOptionGroupComponent };
//# sourceMappingURL=option-group.component.js.map