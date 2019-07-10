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
import { Component, HostBinding, Input } from '@angular/core';
import { NbPosition } from '../cdk';
import { animate, state, style, transition, trigger } from '@angular/animations';
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-bg
 * tooltip-primary-bg
 * tooltip-info-bg
 * tooltip-success-bg
 * tooltip-warning-bg
 * tooltip-danger-bg
 * tooltip-fg
 * tooltip-shadow
 * tooltip-font-size
 *
 */
var NbTooltipComponent = /** @class */ (function () {
    function NbTooltipComponent() {
        /**
         * Popover position relatively host element.
         * */
        this.position = NbPosition.TOP;
        this.context = {};
    }
    Object.defineProperty(NbTooltipComponent.prototype, "binding", {
        get: function () {
            return this.position + " " + this.context.status + "-tooltip";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTooltipComponent.prototype, "show", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbTooltipComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbTooltipComponent.prototype, "position", void 0);
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbTooltipComponent.prototype, "binding", null);
    __decorate([
        HostBinding('@showTooltip'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbTooltipComponent.prototype, "show", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbTooltipComponent.prototype, "context", void 0);
    NbTooltipComponent = __decorate([
        Component({
            selector: 'nb-tooltip',
            styles: [":host{z-index:10000;border-radius:5px}:host .content{padding:0.5rem 1.25rem;display:flex}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host .icon{font-size:1.25rem}:host span{line-height:1.25rem}:host .icon+span{margin-left:0.5rem}:host.right .icon+span{margin-right:0.5rem}:host .arrow{border-left:5px solid transparent;border-right:5px solid transparent}:host.bottom .arrow{top:-5px;left:calc(50% - 5px)}:host.left .arrow{right:-7px;top:calc(50% - 2px);transform:rotate(90deg)}:host.top .arrow{bottom:-5px;left:calc(50% - 5px);transform:rotate(180deg)}:host.right .arrow{left:-7px;top:calc(50% - 2px);transform:rotate(270deg)} "],
            template: "\n    <span class=\"arrow\"></span>\n    <div class=\"content\">\n      <i *ngIf=\"context?.icon\" class=\"icon {{ context?.icon }}\"></i>\n      <span *ngIf=\"content\">{{ content }}</span>\n    </div>\n  ",
            animations: [
                trigger('showTooltip', [
                    state('in', style({ opacity: 1 })),
                    transition('void => *', [
                        style({ opacity: 0 }),
                        animate(100),
                    ]),
                    transition('* => void', [
                        animate(100, style({ opacity: 0 })),
                    ]),
                ]),
            ],
        })
    ], NbTooltipComponent);
    return NbTooltipComponent;
}());
export { NbTooltipComponent };
//# sourceMappingURL=tooltip.component.js.map