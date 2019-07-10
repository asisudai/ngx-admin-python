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
import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { NbToast, NbToastStatus } from './model';
/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-bg
 * toastr-padding
 * toastr-fg
 * toastr-border
 * toastr-border-radius
 * toastr-border-color
 * */
/**
 * TODO
 * Remove svg icons, include them in font.
 * */
var NbToastComponent = /** @class */ (function () {
    function NbToastComponent() {
        this.destroy = new EventEmitter();
    }
    Object.defineProperty(NbToastComponent.prototype, "success", {
        get: function () {
            return this.toast.config.status === NbToastStatus.SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "info", {
        get: function () {
            return this.toast.config.status === NbToastStatus.INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "warning", {
        get: function () {
            return this.toast.config.status === NbToastStatus.WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "primary", {
        get: function () {
            return this.toast.config.status === NbToastStatus.PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "danger", {
        get: function () {
            return this.toast.config.status === NbToastStatus.DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "default", {
        get: function () {
            return this.toast.config.status === NbToastStatus.DEFAULT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "destroyByClick", {
        get: function () {
            return this.toast.config.destroyByClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "hasIcon", {
        get: function () {
            return this.toast.config.hasIcon && this.toast.config.status !== NbToastStatus.DEFAULT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "customIcon", {
        get: function () {
            return !!this.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "icon", {
        get: function () {
            return this.toast.config.icon;
        },
        enumerable: true,
        configurable: true
    });
    NbToastComponent.prototype.onClick = function () {
        this.destroy.emit();
    };
    __decorate([
        Input(),
        __metadata("design:type", NbToast)
    ], NbToastComponent.prototype, "toast", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbToastComponent.prototype, "destroy", void 0);
    __decorate([
        HostBinding('class.success'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbToastComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.info'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbToastComponent.prototype, "info", null);
    __decorate([
        HostBinding('class.warning'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbToastComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.primary'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbToastComponent.prototype, "primary", null);
    __decorate([
        HostBinding('class.danger'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbToastComponent.prototype, "danger", null);
    __decorate([
        HostBinding('class.default'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbToastComponent.prototype, "default", null);
    __decorate([
        HostBinding('class.destroy-by-click'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbToastComponent.prototype, "destroyByClick", null);
    __decorate([
        HostBinding('class.has-icon'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbToastComponent.prototype, "hasIcon", null);
    __decorate([
        HostBinding('class.custom-icon'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbToastComponent.prototype, "customIcon", null);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbToastComponent.prototype, "onClick", null);
    NbToastComponent = __decorate([
        Component({
            selector: 'nb-toast',
            styles: [":host{display:flex;align-items:center;width:25rem;margin:0.5rem;opacity:0.9}:host .title{font-weight:800;margin-right:0.25rem}:host>.content-container{line-height:1.25}:host>.content-container>.message{font-weight:300}:host.default .content-container,:host:not(.has-icon) .content-container{display:flex;flex-direction:row}:host.destroy-by-click{cursor:pointer}:host.destroy-by-click:hover{opacity:1}:host .icon{font-size:2.5rem}:host svg{width:2.5rem;height:2.5rem} "],
            template: "<i class=\"icon {{ icon }}\" *ngIf=\"hasIcon\"></i> <div class=\"content-container\"> <span class=\"title\">{{ toast.title }}</span> <div class=\"message\">{{ toast.message }}</div> </div> ",
        })
    ], NbToastComponent);
    return NbToastComponent;
}());
export { NbToastComponent };
//# sourceMappingURL=toast.component.js.map