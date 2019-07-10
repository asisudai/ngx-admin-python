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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, Output, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NbSelectComponent } from './select.component';
var NbOptionComponent = /** @class */ (function () {
    function NbOptionComponent(parent, elementRef, cd) {
        this.parent = parent;
        this.elementRef = elementRef;
        this.cd = cd;
        /**
         * Fires value on click.
         * */
        this.selectionChange = new EventEmitter();
        this.selected = false;
        this.disabled = false;
        this.alive = true;
    }
    Object.defineProperty(NbOptionComponent.prototype, "setDisabled", {
        set: function (disabled) {
            this.disabled = convertToBoolProperty(disabled);
        },
        enumerable: true,
        configurable: true
    });
    NbOptionComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Object.defineProperty(NbOptionComponent.prototype, "withCheckbox", {
        /**
         * Determines should we render checkbox.
         * */
        get: function () {
            return this.multiple && !!this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "content", {
        get: function () {
            return this.elementRef.nativeElement.textContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "multiple", {
        get: function () {
            return this.parent.multiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "selectedClass", {
        get: function () {
            return this.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "disabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    NbOptionComponent.prototype.onClick = function () {
        this.selectionChange.emit(this);
    };
    NbOptionComponent.prototype.select = function () {
        this.selected = true;
        this.cd.markForCheck();
        this.cd.detectChanges();
    };
    NbOptionComponent.prototype.deselect = function () {
        /**
         * In case of changing options in runtime the reference to the selected option will be kept in select component.
         * This may lead to exceptions with detecting changes in destroyed component.
         * */
        if (!this.alive) {
            return;
        }
        this.selected = false;
        this.cd.markForCheck();
        this.cd.detectChanges();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbOptionComponent.prototype, "value", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbOptionComponent.prototype, "setDisabled", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbOptionComponent.prototype, "selectionChange", void 0);
    __decorate([
        HostBinding('class.selected'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbOptionComponent.prototype, "selectedClass", null);
    __decorate([
        HostBinding('class.disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbOptionComponent.prototype, "disabledClass", null);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbOptionComponent.prototype, "onClick", null);
    NbOptionComponent = __decorate([
        Component({
            selector: 'nb-option',
            styles: ["/*! * @license * Copyright Akveo. All Rights Reserved. * Licensed under the MIT License. See License.txt in the project root for license information. */:host{display:block}:host.disabled{pointer-events:none}:host:hover{cursor:pointer}:host nb-checkbox{pointer-events:none} "],
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <nb-checkbox *ngIf=\"withCheckbox\" [(ngModel)]=\"selected\">\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n    </nb-checkbox>\n\n    <ng-container *ngIf=\"!withCheckbox\">\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n    </ng-container>\n\n    <ng-template #content>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
        }),
        __param(0, Inject(forwardRef(function () { return NbSelectComponent; }))),
        __metadata("design:paramtypes", [Object, ElementRef,
            ChangeDetectorRef])
    ], NbOptionComponent);
    return NbOptionComponent;
}());
export { NbOptionComponent };
//# sourceMappingURL=option.component.js.map