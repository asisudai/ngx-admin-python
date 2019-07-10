/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { DatePipe, TranslationWidth } from '@angular/common';
import { NbDateService } from './date.service';
/**
 * The `NbNativeDateService` is basic implementation of `NbDateService` using
 * native js date objects and angular localization services.
 * */
export declare class NbNativeDateService extends NbDateService<Date> {
    protected datePipe: DatePipe;
    constructor(locale: string);
    setLocale(locale: string): void;
    isValidDateString(date: string, format: string): boolean;
    today(): Date;
    getDate(date: Date): number;
    getMonth(date: Date): number;
    getYear(date: Date): number;
    getDayOfWeek(date: Date): number;
    /**
     * returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    getFirstDayOfWeek(): number;
    getMonthName(date: Date, style?: TranslationWidth): string;
    getMonthNameByIndex(index: number, style?: TranslationWidth): string;
    getDayOfWeekNames(): string[];
    format(date: Date, format: string): string;
    /**
     * We haven't got capability to parse date using formatting without third party libraries.
     * */
    parse(date: string, format: string): Date;
    addDay(date: Date, num: number): Date;
    addMonth(date: Date, num: number): Date;
    addYear(date: Date, num: number): Date;
    clone(date: Date): Date;
    compareDates(date1: Date, date2: Date): number;
    createDate(year: number, month: number, date: number): Date;
    getMonthEnd(date: Date): Date;
    getMonthStart(date: Date): Date;
    getNumberOfDaysInMonth(date: Date): number;
    getYearEnd(date: Date): Date;
    getYearStart(date: Date): Date;
    isSameDay(date1: Date, date2: Date): boolean;
    isSameMonth(date1: Date, date2: Date): boolean;
    isSameYear(date1: Date, date2: Date): boolean;
    getId(): string;
}
