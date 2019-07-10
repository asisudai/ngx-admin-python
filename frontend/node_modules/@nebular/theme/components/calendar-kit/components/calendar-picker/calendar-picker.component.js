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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Type } from '@angular/core';
var NbCalendarPickerComponent = /** @class */ (function () {
    function NbCalendarPickerComponent() {
        this.select = new EventEmitter();
    }
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NbCalendarPickerComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarPickerComponent.prototype, "visibleDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarPickerComponent.prototype, "selectedValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Type)
    ], NbCalendarPickerComponent.prototype, "cellComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarPickerComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarPickerComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], NbCalendarPickerComponent.prototype, "filter", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbCalendarPickerComponent.prototype, "select", void 0);
    NbCalendarPickerComponent = __decorate([
        Component({
            selector: 'nb-calendar-picker',
            template: "\n    <nb-calendar-picker-row\n      *ngFor=\"let row of data\"\n      [row]=\"row\"\n      [visibleDate]=\"visibleDate\"\n      [selectedValue]=\"selectedValue\"\n      [component]=\"cellComponent\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      (select)=\"select.emit($event)\">\n    </nb-calendar-picker-row>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
    ], NbCalendarPickerComponent);
    return NbCalendarPickerComponent;
}());
export { NbCalendarPickerComponent };
//# sourceMappingURL=calendar-picker.component.js.map