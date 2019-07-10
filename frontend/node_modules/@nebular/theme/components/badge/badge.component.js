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
import { NbLayoutDirectionService } from '../../services/direction.service';
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 * ### Installation
 *
 * Import `NbBadgeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbBadgeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Badge with default position and status(color):
 *
 * ```html
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * For example, badge can be placed into nb-card header:
 * @stacked-example(Showcase, badge/badge-showcase.component)
 *
 * Badge located on the bottom right with warning status:
 *
 * ```html
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-fg-text:
 * badge-primary-bg-color:
 * badge-success-bg-color:
 * badge-info-bg-color:
 * badge-warning-bg-color:
 * badge-danger-bg-color:
 */
var NbBadgeComponent = /** @class */ (function () {
    function NbBadgeComponent(layoutDirectionService) {
        this.layoutDirectionService = layoutDirectionService;
        this.colorClass = NbBadgeComponent_1.STATUS_PRIMARY;
        /**
         * Text to display
         * @type string
         */
        this.text = '';
    }
    NbBadgeComponent_1 = NbBadgeComponent;
    Object.defineProperty(NbBadgeComponent.prototype, "status", {
        /**
         * Badge status (adds specific styles):
         * 'primary', 'info', 'success', 'warning', 'danger'
         * @param {string} val
         * @type string
         */
        set: function (value) {
            if (value) {
                this.colorClass = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "positionClass", {
        get: function () {
            if (!this.position) {
                return NbBadgeComponent_1.TOP_RIGHT;
            }
            var isLtr = this.layoutDirectionService.isLtr();
            var startValue = isLtr ? 'left' : 'right';
            var endValue = isLtr ? 'right' : 'left';
            return this.position
                .replace(/\bstart\b/, startValue)
                .replace(/\bend\b/, endValue);
        },
        enumerable: true,
        configurable: true
    });
    var NbBadgeComponent_1;
    NbBadgeComponent.TOP_LEFT = 'top left';
    NbBadgeComponent.TOP_RIGHT = 'top right';
    NbBadgeComponent.BOTTOM_LEFT = 'bottom left';
    NbBadgeComponent.BOTTOM_RIGHT = 'bottom right';
    NbBadgeComponent.TOP_START = 'top start';
    NbBadgeComponent.TOP_END = 'top end';
    NbBadgeComponent.BOTTOM_START = 'bottom start';
    NbBadgeComponent.BOTTOM_END = 'bottom end';
    NbBadgeComponent.STATUS_PRIMARY = 'primary';
    NbBadgeComponent.STATUS_INFO = 'info';
    NbBadgeComponent.STATUS_SUCCESS = 'success';
    NbBadgeComponent.STATUS_WARNING = 'warning';
    NbBadgeComponent.STATUS_DANGER = 'danger';
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbBadgeComponent.prototype, "text", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbBadgeComponent.prototype, "position", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbBadgeComponent.prototype, "status", null);
    NbBadgeComponent = NbBadgeComponent_1 = __decorate([
        Component({
            selector: 'nb-badge',
            styles: [":host .nb-badge{position:absolute;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem}:host .nb-badge.top{top:0}:host .nb-badge.right{right:0}:host .nb-badge.bottom{bottom:0}:host .nb-badge.left{left:0} "],
            template: "\n    <span class=\"nb-badge {{positionClass}} nb-badge-{{colorClass}}\">{{text}}</span>\n  ",
        }),
        __metadata("design:paramtypes", [NbLayoutDirectionService])
    ], NbBadgeComponent);
    return NbBadgeComponent;
}());
export { NbBadgeComponent };
//# sourceMappingURL=badge.component.js.map