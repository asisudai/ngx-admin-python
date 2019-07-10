/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbDateService } from './date.service';
export declare class NbCalendarMonthModelService<D> {
    protected dateService: NbDateService<D>;
    constructor(dateService: NbDateService<D>);
    createDaysGrid(activeMonth: D, boundingMonth?: boolean): D[][];
    private createDates;
    private withBoundingMonths;
    private addPrevBoundingMonth;
    private addNextBoundingMonth;
    private createPrevBoundingDays;
    private createNextBoundingDays;
    private getStartOfWeekDayDiff;
    private getWeekStartDiff;
    private isShouldAddPrevBoundingMonth;
    private isShouldAddNextBoundingMonth;
    private createDateRangeForMonth;
}
