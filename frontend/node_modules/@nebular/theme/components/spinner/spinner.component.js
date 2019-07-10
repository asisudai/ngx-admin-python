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
import { Component, HostBinding, Input } from '@angular/core';
/**
 * Styled spinner component
 */
var NbSpinnerComponent = /** @class */ (function () {
    function NbSpinnerComponent() {
        this.size = NbSpinnerComponent_1.SIZE_MEDIUM;
        this.status = NbSpinnerComponent_1.STATUS_ACTIVE;
        /**
         * Loading text that is shown near the icon
         * @type string
         */
        this.message = 'Loading...';
    }
    NbSpinnerComponent_1 = NbSpinnerComponent;
    Object.defineProperty(NbSpinnerComponent.prototype, "setSize", {
        /**
         * Spiiner size, available sizes:
         * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "setStatus", {
        /**
         * Spiiner status (adds specific styles):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "small", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "medium", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "large", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "active", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "primary", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "info", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "success", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "warning", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "danger", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    var NbSpinnerComponent_1;
    NbSpinnerComponent.SIZE_XXSMALL = 'xxsmall';
    NbSpinnerComponent.SIZE_XSMALL = 'xsmall';
    NbSpinnerComponent.SIZE_SMALL = 'small';
    NbSpinnerComponent.SIZE_MEDIUM = 'medium';
    NbSpinnerComponent.SIZE_LARGE = 'large';
    NbSpinnerComponent.SIZE_XLARGE = 'xlarge';
    NbSpinnerComponent.SIZE_XXLARGE = 'xxlarge';
    NbSpinnerComponent.STATUS_ACTIVE = 'active';
    NbSpinnerComponent.STATUS_DISABLED = 'disabled';
    NbSpinnerComponent.STATUS_PRIMARY = 'primary';
    NbSpinnerComponent.STATUS_INFO = 'info';
    NbSpinnerComponent.STATUS_SUCCESS = 'success';
    NbSpinnerComponent.STATUS_WARNING = 'warning';
    NbSpinnerComponent.STATUS_DANGER = 'danger';
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSpinnerComponent.prototype, "message", void 0);
    __decorate([
        Input('size'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbSpinnerComponent.prototype, "setSize", null);
    __decorate([
        Input('status'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbSpinnerComponent.prototype, "setStatus", null);
    __decorate([
        HostBinding('class.xxsmall-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "xxsmall", null);
    __decorate([
        HostBinding('class.xsmall-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "xsmall", null);
    __decorate([
        HostBinding('class.small-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "small", null);
    __decorate([
        HostBinding('class.medium-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.large-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "large", null);
    __decorate([
        HostBinding('class.xlarge-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "xlarge", null);
    __decorate([
        HostBinding('class.xxlarge-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "xxlarge", null);
    __decorate([
        HostBinding('class.active-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "active", null);
    __decorate([
        HostBinding('class.disabled-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "disabled", null);
    __decorate([
        HostBinding('class.primary-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "primary", null);
    __decorate([
        HostBinding('class.info-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "info", null);
    __decorate([
        HostBinding('class.success-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.warning-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.danger-spinner'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "danger", null);
    NbSpinnerComponent = NbSpinnerComponent_1 = __decorate([
        Component({
            selector: 'nb-spinner',
            template: "\n    <span class=\"spin-circle\"></span>\n    <span class=\"message\" *ngIf=\"message\">{{ message }}</span>\n  ",
            styles: [":host{opacity:1;position:absolute;border-radius:inherit;top:0;right:0;left:0;bottom:0;overflow:hidden;z-index:9999;display:flex;justify-content:center;align-items:center;visibility:visible}:host .spin-circle{animation:spin 0.8s infinite linear;border-radius:50%;border-style:solid;border-width:0.125em;width:1em;height:1em}:host .message{margin-left:0.5rem;line-height:1rem;font-size:1rem} "],
        })
    ], NbSpinnerComponent);
    return NbSpinnerComponent;
}());
export { NbSpinnerComponent };
//# sourceMappingURL=spinner.component.js.map