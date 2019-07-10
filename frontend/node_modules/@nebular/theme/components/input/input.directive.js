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
import { Directive, Input, HostBinding } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * Basic input directive.
 *
 * ```html
 * <input nbInput></input>
 * ```
 *
 * ### Installation
 *
 * Import `NbInputModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbInputModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Default input size is `medium`:
 * @stacked-example(Showcase, input/input-showcase.component)
 *
 * Inputs are available in multiple colors using `status` property:
 * @stacked-example(Input Colors, input/input-colors.component)
 *
 * There are three input sizes:
 *
 * @stacked-example(Input Sizes, input/input-sizes.component)
 *
 * Inputs available in different shapes, which could be combined with the other properties:
 * @stacked-example(Input Shapes, input/input-shapes.component)
 *
 * `nbInput` could be applied to the following selectors - `input`, `textarea`:
 * @stacked-example(Input Elements, input/input-types.component)
 *
 * You can add `fullWidth` attribute to make element fill container:
 * @stacked-example(Full width inputs, input/input-full-width.component)
 *
 * Or you can bind control with form controls or ngModel:
 * @stacked-example(Input form binding, input/input-form.component)
 *
 * @styles
 *
 * form-control-bg:
 * form-control-border-width:
 * form-control-border-type:
 * form-control-border-color:
 * form-control-text-primary-color:
 * form-control-focus-bg:
 * form-control-selected-border-color:
 * form-control-placeholder-font-size:
 * form-control-placeholder-color:
 * form-control-font-size:
 * form-control-padding:
 * form-control-font-size-sm:
 * form-control-padding-sm:
 * form-control-font-size-lg:
 * form-control-padding-lg:
 * form-control-border-radius:
 * form-control-semi-round-border-radius:
 * form-control-round-border-radius:
 * form-control-info-border-color:
 * form-control-success-border-color:
 * form-control-warning-border-color:
 * form-control-danger-border-color:
 */
var NbInputDirective = /** @class */ (function () {
    function NbInputDirective() {
        this.size = NbInputDirective_1.SIZE_MEDIUM;
        /**
         * Field shapes: `rectangle`, `round`, `semi-round`
         * @param {string} val
         */
        this.shape = NbInputDirective_1.SHAPE_RECTANGLE;
        this.fullWidth = false;
    }
    NbInputDirective_1 = NbInputDirective;
    Object.defineProperty(NbInputDirective.prototype, "setSize", {
        /**
         * Field size, available sizes:
         * `small`, `medium`, `large`
         * @param {string} val
         */
        set: function (value) {
            this.size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "setFullWidth", {
        /**
         * If set element will fill container
         * @param {string}
         */
        set: function (value) {
            this.fullWidth = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "small", {
        get: function () {
            return this.size === NbInputDirective_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "medium", {
        get: function () {
            return this.size === NbInputDirective_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "large", {
        get: function () {
            return this.size === NbInputDirective_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "info", {
        get: function () {
            return this.status === NbInputDirective_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "success", {
        get: function () {
            return this.status === NbInputDirective_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "warning", {
        get: function () {
            return this.status === NbInputDirective_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "danger", {
        get: function () {
            return this.status === NbInputDirective_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "rectangle", {
        get: function () {
            return this.shape === NbInputDirective_1.SHAPE_RECTANGLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "semiRound", {
        get: function () {
            return this.shape === NbInputDirective_1.SHAPE_SEMI_ROUND;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "round", {
        get: function () {
            return this.shape === NbInputDirective_1.SHAPE_ROUND;
        },
        enumerable: true,
        configurable: true
    });
    var NbInputDirective_1;
    NbInputDirective.SIZE_SMALL = 'small';
    NbInputDirective.SIZE_MEDIUM = 'medium';
    NbInputDirective.SIZE_LARGE = 'large';
    NbInputDirective.STATUS_INFO = 'info';
    NbInputDirective.STATUS_SUCCESS = 'success';
    NbInputDirective.STATUS_WARNING = 'warning';
    NbInputDirective.STATUS_DANGER = 'danger';
    NbInputDirective.SHAPE_RECTANGLE = 'rectangle';
    NbInputDirective.SHAPE_SEMI_ROUND = 'semi-round';
    NbInputDirective.SHAPE_ROUND = 'round';
    __decorate([
        Input('fieldSize'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbInputDirective.prototype, "setSize", null);
    __decorate([
        Input('status'),
        __metadata("design:type", String)
    ], NbInputDirective.prototype, "status", void 0);
    __decorate([
        Input('shape'),
        __metadata("design:type", String)
    ], NbInputDirective.prototype, "shape", void 0);
    __decorate([
        Input('fullWidth'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbInputDirective.prototype, "setFullWidth", null);
    __decorate([
        HostBinding('class.input-full-width'),
        __metadata("design:type", Object)
    ], NbInputDirective.prototype, "fullWidth", void 0);
    __decorate([
        HostBinding('class.input-sm'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "small", null);
    __decorate([
        HostBinding('class.input-md'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "medium", null);
    __decorate([
        HostBinding('class.input-lg'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "large", null);
    __decorate([
        HostBinding('class.input-info'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "info", null);
    __decorate([
        HostBinding('class.input-success'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "success", null);
    __decorate([
        HostBinding('class.input-warning'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "warning", null);
    __decorate([
        HostBinding('class.input-danger'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "danger", null);
    __decorate([
        HostBinding('class.input-rectangle'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "rectangle", null);
    __decorate([
        HostBinding('class.input-semi-round'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "semiRound", null);
    __decorate([
        HostBinding('class.input-round'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbInputDirective.prototype, "round", null);
    NbInputDirective = NbInputDirective_1 = __decorate([
        Directive({
            selector: 'input[nbInput],textarea[nbInput]',
        })
    ], NbInputDirective);
    return NbInputDirective;
}());
export { NbInputDirective };
//# sourceMappingURL=input.directive.js.map