/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbDateService = /** @class */ (function () {
    function NbDateService() {
        this.DAYS_IN_WEEK = 7;
    }
    NbDateService.prototype.setLocale = function (locale) {
        this.locale = locale;
    };
    /**
     * Checks if the date is between the start date and the end date.
     * */
    NbDateService.prototype.isBetween = function (date, start, end) {
        return this.compareDates(date, start) > 0 && this.compareDates(date, end) < 0;
    };
    ;
    /**
     * Checks is two dates have the same day.
     * */
    NbDateService.prototype.isSameDaySafe = function (date1, date2) {
        return date1 && date2 && this.isSameDay(date1, date2);
    };
    ;
    /**
     * Checks is two dates have the same month.
     * */
    NbDateService.prototype.isSameMonthSafe = function (date1, date2) {
        return date1 && date2 && this.isSameMonth(date1, date2);
    };
    /**
     * Checks is two dates have the same year.
     * */
    NbDateService.prototype.isSameYearSafe = function (date1, date2) {
        return date1 && date2 && this.isSameYear(date1, date2);
    };
    return NbDateService;
}());
export { NbDateService };
//# sourceMappingURL=date.service.js.map