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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ChangeDetectionStrategy, Host, HostBinding, HostListener, ChangeDetectorRef, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { takeWhile } from 'rxjs/operators';
import { NbAccordionItemComponent } from './accordion-item.component';
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
var NbAccordionItemHeaderComponent = /** @class */ (function () {
    function NbAccordionItemHeaderComponent(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.alive = true;
    }
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "isCollapsed", {
        get: function () {
            return this.accordionItem.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "expanded", {
        get: function () {
            return !this.accordionItem.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "tabbable", {
        // issue #794
        get: function () {
            return this.accordionItem.disabled ? '-1' : '0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "disabled", {
        get: function () {
            return this.accordionItem.disabled;
        },
        enumerable: true,
        configurable: true
    });
    NbAccordionItemHeaderComponent.prototype.toggle = function () {
        this.accordionItem.toggle();
    };
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "state", {
        get: function () {
            if (this.isCollapsed) {
                return 'collapsed';
            }
            if (this.expanded) {
                return 'expanded';
            }
        },
        enumerable: true,
        configurable: true
    });
    NbAccordionItemHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordionItem.accordionItemInvalidate
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.cd.markForCheck(); });
    };
    NbAccordionItemHeaderComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    __decorate([
        HostBinding('class.accordion-item-header-collapsed'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbAccordionItemHeaderComponent.prototype, "isCollapsed", null);
    __decorate([
        HostBinding('class.accordion-item-header-expanded'),
        HostBinding('attr.aria-expanded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbAccordionItemHeaderComponent.prototype, "expanded", null);
    __decorate([
        HostBinding('attr.tabindex'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], NbAccordionItemHeaderComponent.prototype, "tabbable", null);
    __decorate([
        HostBinding('attr.aria-disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbAccordionItemHeaderComponent.prototype, "disabled", null);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbAccordionItemHeaderComponent.prototype, "toggle", null);
    NbAccordionItemHeaderComponent = __decorate([
        Component({
            selector: 'nb-accordion-item-header',
            styles: [":host{display:flex;align-items:center;cursor:pointer}:host:focus{outline:0} "],
            template: "\n    <ng-content select=\"nb-accordion-item-title\"></ng-content>\n    <ng-content select=\"nb-accordion-item-description\"></ng-content>\n    <ng-content></ng-content>\n    <i [@expansionIndicator]=\"state\" *ngIf=\"!disabled\" class=\"nb-arrow-down\"></i>\n  ",
            animations: [
                trigger('expansionIndicator', [
                    state('expanded', style({
                        transform: 'rotate(180deg)',
                    })),
                    transition('collapsed => expanded', animate('100ms ease-in')),
                    transition('expanded => collapsed', animate('100ms ease-out')),
                ]),
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __param(0, Host()),
        __metadata("design:paramtypes", [NbAccordionItemComponent, ChangeDetectorRef])
    ], NbAccordionItemHeaderComponent);
    return NbAccordionItemHeaderComponent;
}());
export { NbAccordionItemHeaderComponent };
//# sourceMappingURL=accordion-item-header.component.js.map