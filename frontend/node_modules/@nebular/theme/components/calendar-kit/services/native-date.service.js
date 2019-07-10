/**
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { DatePipe, FormStyle, getLocaleDayNames, getLocaleFirstDayOfWeek, getLocaleMonthNames, TranslationWidth, } from '@angular/common';
import { NbDateService } from './date.service';
/**
 * The `NbNativeDateService` is basic implementation of `NbDateService` using
 * native js date objects and angular localization services.
 * */
var NbNativeDateService = /** @class */ (function (_super) {
    __extends(NbNativeDateService, _super);
    function NbNativeDateService(locale) {
        var _this = _super.call(this) || this;
        _this.setLocale(locale);
        return _this;
    }
    NbNativeDateService.prototype.setLocale = function (locale) {
        _super.prototype.setLocale.call(this, locale);
        this.datePipe = new DatePipe(locale);
    };
    NbNativeDateService.prototype.isValidDateString = function (date, format) {
        return !isNaN(this.parse(date, format).getTime());
    };
    NbNativeDateService.prototype.today = function () {
        return new Date();
    };
    NbNativeDateService.prototype.getDate = function (date) {
        return date.getDate();
    };
    NbNativeDateService.prototype.getMonth = function (date) {
        return date.getMonth();
    };
    NbNativeDateService.prototype.getYear = function (date) {
        return date.getFullYear();
    };
    NbNativeDateService.prototype.getDayOfWeek = function (date) {
        return date.getDay();
    };
    /**
     * returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    NbNativeDateService.prototype.getFirstDayOfWeek = function () {
        return getLocaleFirstDayOfWeek(this.locale);
    };
    NbNativeDateService.prototype.getMonthName = function (date, style) {
        if (style === void 0) { style = TranslationWidth.Abbreviated; }
        var index = date.getMonth();
        return this.getMonthNameByIndex(index, style);
    };
    NbNativeDateService.prototype.getMonthNameByIndex = function (index, style) {
        if (style === void 0) { style = TranslationWidth.Abbreviated; }
        return getLocaleMonthNames(this.locale, FormStyle.Format, style)[index];
    };
    NbNativeDateService.prototype.getDayOfWeekNames = function () {
        return getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Short);
    };
    NbNativeDateService.prototype.format = function (date, format) {
        return this.datePipe.transform(date, format);
    };
    /**
     * We haven't got capability to parse date using formatting without third party libraries.
     * */
    NbNativeDateService.prototype.parse = function (date, format) {
        return new Date(Date.parse(date));
    };
    NbNativeDateService.prototype.addDay = function (date, num) {
        return this.createDate(date.getFullYear(), date.getMonth(), date.getDate() + num);
    };
    NbNativeDateService.prototype.addMonth = function (date, num) {
        return this.createDate(date.getFullYear(), date.getMonth() + num, date.getDate());
    };
    NbNativeDateService.prototype.addYear = function (date, num) {
        return this.createDate(date.getFullYear() + num, date.getMonth(), date.getDate());
    };
    NbNativeDateService.prototype.clone = function (date) {
        return new Date(date.getTime());
    };
    NbNativeDateService.prototype.compareDates = function (date1, date2) {
        return date1.getTime() - date2.getTime();
    };
    NbNativeDateService.prototype.createDate = function (year, month, date) {
        var result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(result.getFullYear() - 1900);
        }
        return result;
    };
    NbNativeDateService.prototype.getMonthEnd = function (date) {
        return this.createDate(date.getFullYear(), date.getMonth() + 1, 0);
    };
    NbNativeDateService.prototype.getMonthStart = function (date) {
        return this.createDate(date.getFullYear(), date.getMonth(), 1);
    };
    NbNativeDateService.prototype.getNumberOfDaysInMonth = function (date) {
        return this.getMonthEnd(date).getDate();
    };
    NbNativeDateService.prototype.getYearEnd = function (date) {
        return this.createDate(date.getFullYear(), 11, 31);
    };
    NbNativeDateService.prototype.getYearStart = function (date) {
        return this.createDate(date.getFullYear(), 0, 1);
    };
    NbNativeDateService.prototype.isSameDay = function (date1, date2) {
        return this.isSameMonth(date1, date2) &&
            date1.getDate() === date2.getDate();
    };
    NbNativeDateService.prototype.isSameMonth = function (date1, date2) {
        return this.isSameYear(date1, date2) &&
            date1.getMonth() === date2.getMonth();
    };
    NbNativeDateService.prototype.isSameYear = function (date1, date2) {
        return date1.getFullYear() === date2.getFullYear();
    };
    NbNativeDateService.prototype.getId = function () {
        return 'native';
    };
    NbNativeDateService = __decorate([
        Injectable(),
        __param(0, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [String])
    ], NbNativeDateService);
    return NbNativeDateService;
}(NbDateService));
export { NbNativeDateService };
//# sourceMappingURL=native-date.service.js.map