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
import { Component, Input, HostBinding, HostListener, Renderer2, ElementRef } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * Basic button component.
 *
 * Default button size is `medium` and status color is `primary`:
 * @stacked-example(Button Showcase, button/button-showcase.component)
 *
 * ```html
 * <button nbButton></button>
 * ```
 * ### Installation
 *
 * Import `NbButtonModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbButtonModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Buttons are available in multiple colors using `status` property:
 * @stacked-example(Button Colors, button/button-colors.component.html)
 *
 * There are three button sizes:
 *
 * @stacked-example(Button Sizes, button/button-sizes.component.html)
 *
 * And two additional style types - `outline`:
 *
 * @stacked-example(Outline Buttons, button/button-outline.component.html)
 *
 * and `hero`:
 *
 * @stacked-example(Button Colors, button/button-hero.component.html)
 *
 * Buttons available in different shapes, which could be combined with the other properties:
 * @stacked-example(Button Shapes, button/button-shapes.component)
 *
 * `nbButton` could be applied to the following selectors - `button`, `input[type="button"]`, `input[type="submit"]`
 * and `a`:
 * @stacked-example(Button Elements, button/button-types.component.html)
 *
 * Button can be made `fullWidth`:
 * @stacked-example(Full Width Button, button/button-full-width.component.html)
 *
 * @styles
 *
 * btn-fg:
 * btn-font-family:
 * btn-line-height:
 * btn-disabled-opacity:
 * btn-cursor:
 * btn-primary-bg:
 * btn-secondary-bg:
 * btn-info-bg:
 * btn-success-bg:
 * btn-warning-bg:
 * btn-danger-bg:
 * btn-secondary-border:
 * btn-secondary-border-width:
 * btn-padding-y-lg:
 * btn-padding-x-lg:
 * btn-font-size-lg:
 * btn-padding-y-md:
 * btn-padding-x-md:
 * btn-font-size-md:
 * btn-padding-y-sm:
 * btn-padding-x-sm:
 * btn-font-size-sm:
 * btn-padding-y-xs:
 * btn-padding-x-xs:
 * btn-font-size-xs:
 * btn-border-radius:
 * btn-rectangle-border-radius:
 * btn-semi-round-border-radius:
 * btn-round-border-radius:
 * btn-hero-shadow:
 * btn-hero-text-shadow:
 * btn-hero-bevel-size:
 * btn-hero-glow-size:
 * btn-hero-primary-glow-size:
 * btn-hero-success-glow-size:
 * btn-hero-warning-glow-size:
 * btn-hero-info-glow-size:
 * btn-hero-danger-glow-size:
 * btn-hero-secondary-glow-size:
 * btn-hero-degree:
 * btn-hero-primary-degree:
 * btn-hero-success-degree:
 * btn-hero-warning-degree:
 * btn-hero-info-degree:
 * btn-hero-danger-degree:
 * btn-hero-secondary-degree:
 * btn-hero-border-radius:
 * btn-outline-fg:
 * btn-outline-hover-fg:
 * btn-outline-focus-fg:
 */
var NbButtonComponent = /** @class */ (function () {
    function NbButtonComponent(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fullWidth = false;
    }
    NbButtonComponent_1 = NbButtonComponent;
    Object.defineProperty(NbButtonComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbButtonComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "small", {
        get: function () {
            return this.size === NbButtonComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "medium", {
        get: function () {
            return this.size === NbButtonComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "large", {
        get: function () {
            return this.size === NbButtonComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "primary", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "info", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "success", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "warning", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "danger", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "rectangle", {
        get: function () {
            return this.shape === NbButtonComponent_1.SHAPE_RECTANGLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "round", {
        get: function () {
            return this.shape === NbButtonComponent_1.SHAPE_ROUND;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "semiRound", {
        get: function () {
            return this.shape === NbButtonComponent_1.SHAPE_SEMI_ROUND;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "tabbable", {
        // issue #794
        get: function () {
            return this.disabled ? '-1' : '0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setSize", {
        /**
         * Button size, available sizes:
         * `xxsmall`, `xsmall`, `small`, `medium`, `large`
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setStatus", {
        /**
         * Button status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setShape", {
        /**
         * Button shapes: `rectangle`, `round`, `semi-round`
         * @param {string} val
         */
        set: function (val) {
            this.shape = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setHero", {
        /**
         * Adds `hero` styles
         * @param {boolean} val
         */
        set: function (val) {
            this.hero = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setDisabled", {
        /**
         * Disables the button
         * @param {boolean} val
         */
        set: function (val) {
            this.disabled = convertToBoolProperty(val);
            this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setFullWidth", {
        /**
         * If set element will fill its container
         * @param {boolean}
         */
        set: function (value) {
            this.fullWidth = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setOutline", {
        /**
         * Adds `outline` styles
         * @param {boolean} val
         */
        set: function (val) {
            this.outline = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * Keep this handler to partially support anchor disabling.
     * Unlike button, anchor doesn't have 'disabled' DOM property,
     * so handler will be called anyway. We preventing navigation and bubbling.
     * Disabling is partial due to click handlers precedence. Consider example:
     * <a nbButton [disabled]="true" (click)="clickHandler()">...</a>
     * 'clickHandler' will be called before our host listener below. We can't prevent
     * such handlers call.
     */
    NbButtonComponent.prototype.onClick = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    var NbButtonComponent_1;
    NbButtonComponent.SIZE_XSMALL = 'xsmall';
    NbButtonComponent.SIZE_SMALL = 'small';
    NbButtonComponent.SIZE_MEDIUM = 'medium';
    NbButtonComponent.SIZE_LARGE = 'large';
    NbButtonComponent.STATUS_PRIMARY = 'primary';
    NbButtonComponent.STATUS_INFO = 'info';
    NbButtonComponent.STATUS_SUCCESS = 'success';
    NbButtonComponent.STATUS_WARNING = 'warning';
    NbButtonComponent.STATUS_DANGER = 'danger';
    NbButtonComponent.SHAPE_RECTANGLE = 'rectangle';
    NbButtonComponent.SHAPE_ROUND = 'round';
    NbButtonComponent.SHAPE_SEMI_ROUND = 'semi-round';
    __decorate([
        HostBinding('class.btn-xsmall'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "xsmall", null);
    __decorate([
        HostBinding('class.btn-small'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "small", null);
    __decorate([
        HostBinding('class.btn-medium'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.btn-large'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "large", null);
    __decorate([
        HostBinding('class.btn-primary'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "primary", null);
    __decorate([
        HostBinding('class.btn-info'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "info", null);
    __decorate([
        HostBinding('class.btn-success'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.btn-warning'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.btn-danger'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "danger", null);
    __decorate([
        HostBinding('class.btn-rectangle'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "rectangle", null);
    __decorate([
        HostBinding('class.btn-round'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "round", null);
    __decorate([
        HostBinding('class.btn-semi-round'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "semiRound", null);
    __decorate([
        HostBinding('class.btn-hero'),
        __metadata("design:type", Boolean)
    ], NbButtonComponent.prototype, "hero", void 0);
    __decorate([
        HostBinding('class.btn-outline'),
        __metadata("design:type", Boolean)
    ], NbButtonComponent.prototype, "outline", void 0);
    __decorate([
        HostBinding('attr.aria-disabled'),
        HostBinding('class.btn-disabled'),
        __metadata("design:type", Boolean)
    ], NbButtonComponent.prototype, "disabled", void 0);
    __decorate([
        HostBinding('attr.tabindex'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], NbButtonComponent.prototype, "tabbable", null);
    __decorate([
        HostBinding('class.btn-full-width'),
        __metadata("design:type", Object)
    ], NbButtonComponent.prototype, "fullWidth", void 0);
    __decorate([
        Input('size'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbButtonComponent.prototype, "setSize", null);
    __decorate([
        Input('status'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbButtonComponent.prototype, "setStatus", null);
    __decorate([
        Input('shape'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbButtonComponent.prototype, "setShape", null);
    __decorate([
        Input('hero'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbButtonComponent.prototype, "setHero", null);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbButtonComponent.prototype, "setDisabled", null);
    __decorate([
        Input('fullWidth'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbButtonComponent.prototype, "setFullWidth", null);
    __decorate([
        Input('outline'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbButtonComponent.prototype, "setOutline", null);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], NbButtonComponent.prototype, "onClick", null);
    NbButtonComponent = NbButtonComponent_1 = __decorate([
        Component({
            selector: 'button[nbButton],a[nbButton],input[type="button"][nbButton],input[type="submit"][nbButton]',
            styles: [":host{text-transform:uppercase;letter-spacing:0.4px;border:2px solid transparent;transition:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;text-align:center;text-decoration:none;display:inline-block;white-space:nowrap;vertical-align:middle;user-select:none}:host:hover,:host:focus{text-decoration:none}:host.btn-full-width{width:100%} "],
            template: "\n    <ng-content></ng-content>\n  ",
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef])
    ], NbButtonComponent);
    return NbButtonComponent;
}());
export { NbButtonComponent };
//# sourceMappingURL=button.component.js.map