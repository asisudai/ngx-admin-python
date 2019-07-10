/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { NbDatepickerComponent, NbRangepickerComponent } from './datepicker.component';
import { NbDatepickerAdapter } from './datepicker.directive';
import { NbDateService } from '../calendar-kit';
var NbDateAdapterService = /** @class */ (function (_super) {
    __extends(NbDateAdapterService, _super);
    function NbDateAdapterService(dateService) {
        var _this = _super.call(this) || this;
        _this.dateService = dateService;
        _this.picker = NbDatepickerComponent;
        return _this;
    }
    NbDateAdapterService.prototype.parse = function (date, format) {
        return this.dateService.parse(date, format);
    };
    NbDateAdapterService.prototype.format = function (date, format) {
        return this.dateService.format(date, format);
    };
    NbDateAdapterService.prototype.isValid = function (date, format) {
        return this.dateService.isValidDateString(date, format);
    };
    NbDateAdapterService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NbDateService])
    ], NbDateAdapterService);
    return NbDateAdapterService;
}(NbDatepickerAdapter));
export { NbDateAdapterService };
var NbRangeAdapterService = /** @class */ (function (_super) {
    __extends(NbRangeAdapterService, _super);
    function NbRangeAdapterService(dateService) {
        var _this = _super.call(this) || this;
        _this.dateService = dateService;
        _this.picker = NbRangepickerComponent;
        return _this;
    }
    NbRangeAdapterService.prototype.parse = function (range, format) {
        var _a = range.split('-').map(function (subDate) { return subDate.trim(); }), start = _a[0], end = _a[1];
        return {
            start: this.dateService.parse(start, format),
            end: this.dateService.parse(end, format),
        };
    };
    NbRangeAdapterService.prototype.format = function (range, format) {
        if (!range) {
            return '';
        }
        var start = this.dateService.format(range.start, format);
        var end = this.dateService.format(range.end, format);
        if (end) {
            return start + " - " + end;
        }
        else {
            return start;
        }
    };
    NbRangeAdapterService.prototype.isValid = function (range, format) {
        var _a = range.split('-').map(function (subDate) { return subDate.trim(); }), start = _a[0], end = _a[1];
        return this.dateService.isValidDateString(start, format) && this.dateService.isValidDateString(end, format);
    };
    NbRangeAdapterService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NbDateService])
    ], NbRangeAdapterService);
    return NbRangeAdapterService;
}(NbDatepickerAdapter));
export { NbRangeAdapterService };
//# sourceMappingURL=datepicker-adapter.js.map