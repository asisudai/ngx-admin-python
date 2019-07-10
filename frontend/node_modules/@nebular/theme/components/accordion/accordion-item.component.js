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
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, HostBinding, Host, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NbAccordionComponent } from './accordion.component';
import { convertToBoolProperty } from '../helpers';
/**
 * Component intended to be used within `<nb-accordion>` component
 */
var NbAccordionItemComponent = /** @class */ (function () {
    function NbAccordionItemComponent(accordion, cd) {
        this.accordion = accordion;
        this.cd = cd;
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         */
        this.collapsedChange = new EventEmitter();
        this.accordionItemInvalidate = new Subject();
        this.collapsedValue = true;
        this.disabledValue = false;
        this.alive = true;
    }
    Object.defineProperty(NbAccordionItemComponent.prototype, "collapsed", {
        /**
         * Item is collapse (`true` by default)
         * @type {boolean}
         */
        get: function () {
            return this.collapsedValue;
        },
        set: function (val) {
            this.collapsedValue = convertToBoolProperty(val);
            this.collapsedChange.emit(this.collapsedValue);
            this.invalidate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemComponent.prototype, "expanded", {
        /**
         * Item is expanded (`false` by default)
         * @type {boolean}
         */
        get: function () {
            return !this.collapsed;
        },
        set: function (val) {
            this.collapsedValue = !convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemComponent.prototype, "disabled", {
        /**
         * Item is disabled and cannot be opened.
         * @type {boolean}
         */
        get: function () {
            return this.disabledValue;
        },
        set: function (val) {
            this.disabledValue = convertToBoolProperty(val);
            this.invalidate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Open/close the item
     */
    NbAccordionItemComponent.prototype.toggle = function () {
        if (!this.disabled) {
            // we need this temporary variable as `openCloseItems.next` will change current value we need to save
            var willSet = !this.collapsed;
            if (!this.accordion.multi) {
                this.accordion.openCloseItems.next(true);
            }
            this.collapsed = willSet;
        }
    };
    /**
     * Open the item.
     */
    NbAccordionItemComponent.prototype.open = function () {
        !this.disabled && (this.collapsed = false);
    };
    /**
     * Collapse the item.
     */
    NbAccordionItemComponent.prototype.close = function () {
        !this.disabled && (this.collapsed = true);
    };
    NbAccordionItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordion.openCloseItems
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (collapsed) {
            !_this.disabled && (_this.collapsed = collapsed);
        });
    };
    NbAccordionItemComponent.prototype.ngOnChanges = function (changes) {
        this.accordionItemInvalidate.next(true);
    };
    NbAccordionItemComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.accordionItemInvalidate.complete();
    };
    NbAccordionItemComponent.prototype.invalidate = function () {
        this.accordionItemInvalidate.next(true);
        this.cd.markForCheck();
    };
    __decorate([
        Input('collapsed'),
        HostBinding('class.collapsed'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbAccordionItemComponent.prototype, "collapsed", null);
    __decorate([
        Input('expanded'),
        HostBinding('class.expanded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbAccordionItemComponent.prototype, "expanded", null);
    __decorate([
        Input('disabled'),
        HostBinding('class.disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbAccordionItemComponent.prototype, "disabled", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbAccordionItemComponent.prototype, "collapsedChange", void 0);
    NbAccordionItemComponent = __decorate([
        Component({
            selector: 'nb-accordion-item',
            styles: [":host{display:flex;flex-direction:column} "],
            template: "\n    <ng-content select=\"nb-accordion-item-header\"></ng-content>\n    <ng-content select=\"nb-accordion-item-body\"></ng-content>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __param(0, Host()),
        __metadata("design:paramtypes", [NbAccordionComponent, ChangeDetectorRef])
    ], NbAccordionItemComponent);
    return NbAccordionItemComponent;
}());
export { NbAccordionItemComponent };
//# sourceMappingURL=accordion-item.component.js.map