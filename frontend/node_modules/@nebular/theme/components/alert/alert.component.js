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
import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * Alert component.
 *
 * Basic alert example:
 * @stacked-example(Showcase, alert/alert-showcase.component)
 *
 * Alert configuration:
 *
 * ```html
 * <nb-alert status="success">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 * ### Installation
 *
 * Import `NbButtonModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbAlertModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Alert could additionally have a `close` button when `closable` property is set:
 * ```html
 * <nb-alert status="success" closable (close)="onClose()">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 *
 * Colored alerts could be simply configured by providing a `status` property:
 * @stacked-example(Colored Alert, alert/alert-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight alert highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Alert, alert/alert-accents.component)
 *
 * And `outline` property:
 * @stacked-example(Outline Alert, alert/alert-outline.component)
 *
 * @additional-example(Multiple Sizes, alert/alert-sizes.component)
 *
 * @styles
 *
 * alert-font-size:
 * alert-line-height:
 * alert-font-weight:
 * alert-fg:
 * alert-outline-fg:
 * alert-bg:
 * alert-active-bg:
 * alert-disabled-bg:
 * alert-disabled-fg:
 * alert-primary-bg:
 * alert-info-bg:
 * alert-success-bg:
 * alert-warning-bg:
 * alert-danger-bg:
 * alert-height-xxsmall:
 * alert-height-xsmall:
 * alert-height-small:
 * alert-height-medium:
 * alert-height-large:
 * alert-height-xlarge:
 * alert-height-xxlarge:
 * alert-shadow:
 * alert-border-radius:
 * alert-padding:
 * alert-closable-padding:
 * alert-button-padding:
 * alert-margin:
 */
var NbAlertComponent = /** @class */ (function () {
    function NbAlertComponent() {
        this.closableValue = false;
        /**
         * Emits when chip is removed
         * @type EventEmitter<any>
         */
        this.close = new EventEmitter();
    }
    NbAlertComponent_1 = NbAlertComponent;
    Object.defineProperty(NbAlertComponent.prototype, "closable", {
        /**
         * Shows `close` icon
         */
        set: function (val) {
            this.closableValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "small", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "medium", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "large", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "active", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "primary", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "info", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "success", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "warning", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "danger", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "hasAccent", {
        get: function () {
            return this.accent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "hasStatus", {
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "primaryAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "infoAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "successAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "warningAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "dangerAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "activeAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "disabledAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "hasOutline", {
        get: function () {
            return this.outline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "primaryOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "infoOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "successOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "warningOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "dangerOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "activeOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "disabledOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "setSize", {
        /**
         * Alert size, available sizes:
         * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "setStatus", {
        /**
         * Alert status (adds specific styles):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "setAccent", {
        /**
         * Alert accent (color of the top border):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.accent = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "setOutline", {
        /**
         * Alert outline (color of the border):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.outline = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Emits the removed chip event
     */
    NbAlertComponent.prototype.onClose = function () {
        this.close.emit();
    };
    var NbAlertComponent_1;
    NbAlertComponent.SIZE_XXSMALL = 'xxsmall';
    NbAlertComponent.SIZE_XSMALL = 'xsmall';
    NbAlertComponent.SIZE_SMALL = 'small';
    NbAlertComponent.SIZE_MEDIUM = 'medium';
    NbAlertComponent.SIZE_LARGE = 'large';
    NbAlertComponent.SIZE_XLARGE = 'xlarge';
    NbAlertComponent.SIZE_XXLARGE = 'xxlarge';
    NbAlertComponent.STATUS_ACTIVE = 'active';
    NbAlertComponent.STATUS_DISABLED = 'disabled';
    NbAlertComponent.STATUS_PRIMARY = 'primary';
    NbAlertComponent.STATUS_INFO = 'info';
    NbAlertComponent.STATUS_SUCCESS = 'success';
    NbAlertComponent.STATUS_WARNING = 'warning';
    NbAlertComponent.STATUS_DANGER = 'danger';
    NbAlertComponent.ACCENT_ACTIVE = 'active';
    NbAlertComponent.ACCENT_DISABLED = 'disabled';
    NbAlertComponent.ACCENT_PRIMARY = 'primary';
    NbAlertComponent.ACCENT_INFO = 'info';
    NbAlertComponent.ACCENT_SUCCESS = 'success';
    NbAlertComponent.ACCENT_WARNING = 'warning';
    NbAlertComponent.ACCENT_DANGER = 'danger';
    NbAlertComponent.OUTLINE_ACTIVE = 'active';
    NbAlertComponent.OUTLINE_DISABLED = 'disabled';
    NbAlertComponent.OUTLINE_PRIMARY = 'primary';
    NbAlertComponent.OUTLINE_INFO = 'info';
    NbAlertComponent.OUTLINE_SUCCESS = 'success';
    NbAlertComponent.OUTLINE_WARNING = 'warning';
    NbAlertComponent.OUTLINE_DANGER = 'danger';
    __decorate([
        HostBinding('class.closable'),
        __metadata("design:type", Boolean)
    ], NbAlertComponent.prototype, "closableValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbAlertComponent.prototype, "closable", null);
    __decorate([
        HostBinding('class.xxsmall-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "xxsmall", null);
    __decorate([
        HostBinding('class.xsmall-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "xsmall", null);
    __decorate([
        HostBinding('class.small-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "small", null);
    __decorate([
        HostBinding('class.medium-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.large-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "large", null);
    __decorate([
        HostBinding('class.xlarge-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "xlarge", null);
    __decorate([
        HostBinding('class.xxlarge-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "xxlarge", null);
    __decorate([
        HostBinding('class.active-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "active", null);
    __decorate([
        HostBinding('class.disabled-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "disabled", null);
    __decorate([
        HostBinding('class.primary-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "primary", null);
    __decorate([
        HostBinding('class.info-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "info", null);
    __decorate([
        HostBinding('class.success-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.warning-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.danger-alert'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "danger", null);
    __decorate([
        HostBinding('class.accent'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "hasAccent", null);
    __decorate([
        HostBinding('class.status'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "hasStatus", null);
    __decorate([
        HostBinding('class.accent-primary'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "primaryAccent", null);
    __decorate([
        HostBinding('class.accent-info'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "infoAccent", null);
    __decorate([
        HostBinding('class.accent-success'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "successAccent", null);
    __decorate([
        HostBinding('class.accent-warning'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "warningAccent", null);
    __decorate([
        HostBinding('class.accent-danger'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "dangerAccent", null);
    __decorate([
        HostBinding('class.accent-active'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "activeAccent", null);
    __decorate([
        HostBinding('class.accent-disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "disabledAccent", null);
    __decorate([
        HostBinding('class.outline'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "hasOutline", null);
    __decorate([
        HostBinding('class.outline-primary'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "primaryOutline", null);
    __decorate([
        HostBinding('class.outline-info'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "infoOutline", null);
    __decorate([
        HostBinding('class.outline-success'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "successOutline", null);
    __decorate([
        HostBinding('class.outline-warning'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "warningOutline", null);
    __decorate([
        HostBinding('class.outline-danger'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "dangerOutline", null);
    __decorate([
        HostBinding('class.outline-active'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "activeOutline", null);
    __decorate([
        HostBinding('class.outline-disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbAlertComponent.prototype, "disabledOutline", null);
    __decorate([
        Input('size'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbAlertComponent.prototype, "setSize", null);
    __decorate([
        Input('status'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbAlertComponent.prototype, "setStatus", null);
    __decorate([
        Input('accent'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbAlertComponent.prototype, "setAccent", null);
    __decorate([
        Input('outline'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbAlertComponent.prototype, "setOutline", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbAlertComponent.prototype, "close", void 0);
    NbAlertComponent = NbAlertComponent_1 = __decorate([
        Component({
            selector: 'nb-alert',
            styles: [":host{display:flex;flex-direction:column;position:relative}.close{position:absolute;top:0;right:0;color:inherit;background-color:transparent;border:0;-webkit-appearance:none} "],
            template: "\n    <button *ngIf=\"closableValue\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <ng-content></ng-content>\n  ",
        })
    ], NbAlertComponent);
    return NbAlertComponent;
}());
export { NbAlertComponent };
//# sourceMappingURL=alert.component.js.map