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
import { Component, Input, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { convertToBoolProperty } from '../helpers';
/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 * @stacked-example(Showcase, user/user-showcase.component)
 *
 * ```ts
 *   <nb-user name="John Doe" title="Engineer"></nb-user>
 * ```
 *
 * ### Installation
 *
 * Import `NbUserModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbUserModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Available in multiple sizes:
 * @stacked-example(Multiple Sizes, user/user-sizes.component)
 *
 *
 * You can hide unnecessary captions (name, title or both):
 * @stacked-example(Hide captions in user component, user/user-hide-captions.component)
 *
 *
 * You can set custom avatar background-color, user image (as link or BASE64 string) and disable user initials:
 * @stacked-example(Avatar image settings, user/user-avatar-settings.component)
 *
 *
 * @styles
 *
 * user-font-size:
 * user-line-height:
 * user-bg:
 * user-fg:
 * user-fg-highlight:
 * user-font-family-secondary:
 * user-size-small:
 * user-size-medium:
 * user-size-large:
 * user-size-xlarge:
 */
var NbUserComponent = /** @class */ (function () {
    function NbUserComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        /**
         * Specifies a name to be shown on the right of a user picture
         * @type string
         */
        this.name = 'Anonymous';
        this.showNameValue = true;
        this.showTitleValue = true;
        this.showInitialsValue = true;
        this.isMenuShown = false;
    }
    NbUserComponent_1 = NbUserComponent;
    Object.defineProperty(NbUserComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "xlarge", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "picture", {
        /**
         * Absolute path to a user picture. Or base64 image
         * User name initials (JD for John Doe) will be shown if no picture specified
         * @type string
         */
        set: function (value) {
            this.imageBackgroundStyle = value ? this.domSanitizer.bypassSecurityTrustStyle("url(" + value + ")") : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "size", {
        /**
         * Size of the component, small|medium|large|xlarge
         * @type string
         */
        set: function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showName", {
        /**
         * Whether to show a user name or not
         * @type boolean
         */
        set: function (val) {
            this.showNameValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showTitle", {
        /**
         * Whether to show a user title or not
         * @type boolean
         */
        set: function (val) {
            this.showTitleValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showInitials", {
        /**
         * Whether to show a user initials (if no picture specified) or not
         * @type boolean
         */
        set: function (val) {
            this.showInitialsValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "onlyPicture", {
        /**
         * Whether to show only a picture or also show the name and title
         * @type boolean
         */
        set: function (val) {
            this.showNameValue = this.showTitleValue = !convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "inverse", {
        /**
         * Makes colors inverse based on current theme
         * @type boolean
         */
        set: function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbUserComponent.prototype.getInitials = function () {
        if (this.name) {
            var names = this.name.split(' ');
            return names.map(function (n) { return n.charAt(0); }).splice(0, 2).join('').toUpperCase();
        }
        return '';
    };
    var NbUserComponent_1;
    // TODO: it makes sense use object instead of list of variables (or even enum)
    /*
      static readonly SIZE = {
       SMALL: 'small',
       MEDIUM: 'medium',
       LARGE: 'large',
      };
     */
    NbUserComponent.SIZE_SMALL = 'small';
    NbUserComponent.SIZE_MEDIUM = 'medium';
    NbUserComponent.SIZE_LARGE = 'large';
    NbUserComponent.SIZE_XLARGE = 'xlarge';
    __decorate([
        HostBinding('class.inverse'),
        __metadata("design:type", Boolean)
    ], NbUserComponent.prototype, "inverseValue", void 0);
    __decorate([
        HostBinding('class.small'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbUserComponent.prototype, "small", null);
    __decorate([
        HostBinding('class.medium'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbUserComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.large'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbUserComponent.prototype, "large", null);
    __decorate([
        HostBinding('class.xlarge'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbUserComponent.prototype, "xlarge", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbUserComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbUserComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbUserComponent.prototype, "picture", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbUserComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbUserComponent.prototype, "size", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "showName", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "showTitle", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "showInitials", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "onlyPicture", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "inverse", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbUserComponent.prototype, "badgeText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbUserComponent.prototype, "badgeStatus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbUserComponent.prototype, "badgePosition", void 0);
    NbUserComponent = NbUserComponent_1 = __decorate([
        Component({
            selector: 'nb-user',
            styles: [":host{display:flex}:host .user-container{position:relative;display:flex;align-items:center}:host .user-picture{position:relative;border-radius:50%;flex-shrink:0}:host .user-picture.image{background-size:cover;background-repeat:no-repeat}:host .user-picture.background{display:flex;align-items:center;justify-content:center}:host .user-title{font-size:0.75rem}[dir=rtl] :host .user-name,[dir=rtl] :host .user-title{text-align:right}[dir=ltr] :host .info-container{margin-left:.5rem}[dir=rtl] :host .info-container{margin-right:.5rem} "],
            template: "<div class=\"user-container\"> <div *ngIf=\"imageBackgroundStyle\" class=\"user-picture image\" [style.background-image]=\"imageBackgroundStyle\"> <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge> </div> <div *ngIf=\"!imageBackgroundStyle\" class=\"user-picture background\" [style.background-color]=\"color\"> <ng-container *ngIf=\"showInitialsValue\"> {{ getInitials() }} </ng-container> <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge> </div> <div class=\"info-container\"> <div *ngIf=\"showNameValue && name\" class=\"user-name\">{{ name }}</div> <div *ngIf=\"showTitleValue && title\" class=\"user-title\">{{ title }}</div> </div> </div> ",
        }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], NbUserComponent);
    return NbUserComponent;
}());
export { NbUserComponent };
//# sourceMappingURL=user.component.js.map