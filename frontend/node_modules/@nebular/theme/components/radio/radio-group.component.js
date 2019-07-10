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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, forwardRef, Input, Output, QueryList, PLATFORM_ID, Inject, ElementRef, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { filter, switchMap, take, takeWhile } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NB_DOCUMENT } from '../../theme.options';
import { NbRadioComponent } from './radio.component';
/**
 * The `NbRadioGroupComponent` is the wrapper for `nb-radio` button.
 * It provides form bindings:
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio>Option 1</nb-radio>
 *   <nb-radio>Option 2</nb-radio>
 *   <nb-radio>Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Also, you can use `value` and `valueChange` for binding without forms.
 *
 * ```html
 * <nb-radio-group [(value)]="selectedOption">
 *   <nb-radio>Option 1</nb-radio>
 *   <nb-radio>Option 2</nb-radio>
 *   <nb-radio>Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Radio items name has to be provided through `name` input property of the radio group.
 *
 * ```html
 * <nb-radio-group name="my-radio-group">
 *   ...
 * </nb-radio-group>
 * ```
 *
 * Also, you can disable the whole group using `disabled` attribute.
 *
 * ```html
 * <nb-radio-group disabled>
 *   ...
 * </nb-radio-group>
 * ```
 * */
var NbRadioGroupComponent = /** @class */ (function () {
    function NbRadioGroupComponent(cd, hostElement, platformId, document) {
        this.cd = cd;
        this.hostElement = hostElement;
        this.platformId = platformId;
        this.document = document;
        this.valueChange = new EventEmitter();
        this.alive = true;
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    NbRadioGroupComponent_1 = NbRadioGroupComponent;
    Object.defineProperty(NbRadioGroupComponent.prototype, "setValue", {
        set: function (value) {
            this.value = value;
            this.updateValues();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRadioGroupComponent.prototype, "setName", {
        set: function (name) {
            this.name = name;
            this.updateNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRadioGroupComponent.prototype, "setDisabled", {
        set: function (disabled) {
            this.disabled = convertToBoolProperty(disabled);
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    NbRadioGroupComponent.prototype.ngAfterContentInit = function () {
        this.updateNames();
        this.updateValues();
        this.updateDisabled();
        this.subscribeOnRadiosValueChange();
        this.subscribeOnRadiosBlur();
    };
    NbRadioGroupComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbRadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbRadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbRadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        if (typeof value !== 'undefined') {
            this.updateValues();
        }
    };
    NbRadioGroupComponent.prototype.updateNames = function () {
        var _this = this;
        if (this.radios) {
            this.radios.forEach(function (radio) { return radio.name = _this.name; });
            this.markRadiosForCheck();
        }
    };
    NbRadioGroupComponent.prototype.updateValues = function () {
        var _this = this;
        if (this.radios && typeof this.value !== 'undefined') {
            this.radios.forEach(function (radio) { return radio.checked = radio.value === _this.value; });
            this.markRadiosForCheck();
        }
    };
    NbRadioGroupComponent.prototype.updateDisabled = function () {
        var _this = this;
        if (this.radios && typeof this.disabled !== 'undefined') {
            this.radios.forEach(function (radio) { return radio.setDisabled = _this.disabled; });
            this.markRadiosForCheck();
        }
    };
    NbRadioGroupComponent.prototype.subscribeOnRadiosValueChange = function () {
        var _this = this;
        merge.apply(void 0, this.radios.map(function (radio) { return radio.valueChange; })).pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (value) {
            _this.writeValue(value);
            _this.propagateValue(value);
        });
    };
    NbRadioGroupComponent.prototype.propagateValue = function (value) {
        this.valueChange.emit(value);
        this.onChange(value);
    };
    NbRadioGroupComponent.prototype.markRadiosForCheck = function () {
        this.radios.forEach(function (radio) { return radio.markForCheck(); });
    };
    NbRadioGroupComponent.prototype.subscribeOnRadiosBlur = function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        var hostElement = this.hostElement.nativeElement;
        fromEvent(hostElement, 'focusin')
            .pipe(filter(function (event) { return hostElement.contains(event.target); }), switchMap(function () { return merge(fromEvent(_this.document, 'focusin'), fromEvent(_this.document, 'click')); }), filter(function (event) { return !hostElement.contains(event.target); }), take(1))
            .subscribe(function () { return _this.onTouched(); });
    };
    var NbRadioGroupComponent_1;
    __decorate([
        ContentChildren(NbRadioComponent, { descendants: true }),
        __metadata("design:type", QueryList)
    ], NbRadioGroupComponent.prototype, "radios", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbRadioGroupComponent.prototype, "setValue", null);
    __decorate([
        Input('name'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbRadioGroupComponent.prototype, "setName", null);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbRadioGroupComponent.prototype, "setDisabled", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbRadioGroupComponent.prototype, "valueChange", void 0);
    NbRadioGroupComponent = NbRadioGroupComponent_1 = __decorate([
        Component({
            selector: 'nb-radio-group',
            template: "\n    <ng-content select=\"nb-radio\"></ng-content>",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return NbRadioGroupComponent_1; }),
                    multi: true,
                },
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __param(2, Inject(PLATFORM_ID)),
        __param(3, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            ElementRef, Object, Object])
    ], NbRadioGroupComponent);
    return NbRadioGroupComponent;
}());
export { NbRadioGroupComponent };
//# sourceMappingURL=radio-group.component.js.map