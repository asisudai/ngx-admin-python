/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, Type } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarViewMode, NbDateService } from '../calendar-kit';
export interface NbCalendarRange<D> {
    start: D;
    end?: D;
}
/**
 * CalendarRange component provides a capability to choose a date range.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarRangeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCalendarRangeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * CalendarRange component supports all of the Calendar component customization properties. More defails can be found
 * in the [Calendar component docs](docs/components/calendar).
 *
 * @styles
 *
 * calendar-width
 * calendar-body-height
 * calendar-header-title-font-size
 * calendar-header-title-font-weight
 * calendar-header-sub-title-font-size
 * calendar-header-sub-title-font-weight
 * calendar-navigation-button-width
 * calendar-selected-item-bg
 * calendar-hover-item-bg
 * calendar-today-item-bg
 * calendar-active-item-bg
 * calendar-fg
 * calendar-selected-fg
 * calendar-day-cell-width
 * calendar-day-cell-height
 * calendar-month-cell-width
 * calendar-month-cell-height
 * calendar-year-cell-width
 * calendar-year-cell-height
 * calendar-inactive-opacity
 * calendar-disabled-opacity
 * calendar-border-radius
 * calendar-weekday-width
 * calendar-weekday-height
 * calendar-weekday-font-size
 * calendar-weekday-font-weight
 * calendar-weekday-fg
 * calendar-weekday-holiday-fg
 * calendar-range-bg-in-range
 * calendar-large-width
 * calendar-large-body-height
 * calendar-day-cell-large-width
 * calendar-day-cell-large-height
 * calendar-month-cell-large-width
 * calendar-month-cell-large-height
 * calendar-year-cell-large-width
 * calendar-year-cell-large-height
 * */
export declare class NbCalendarRangeComponent<D> {
    protected dateService: NbDateService<D>;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonth: boolean;
    /**
     * Defines starting view for the calendar.
     * */
    startView: NbCalendarViewMode;
    /**
     * A minimum available date for selection.
     * */
    min: D;
    /**
     * A maximum available date for selection.
     * */
    max: D;
    /**
     * A predicate that decides which cells will be disabled.
     * */
    filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    _cellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    dayCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    monthCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    _yearCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    yearCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    visibleDate: D;
    /**
     * Determines should we show calendars header or not.
     * */
    showHeader: boolean;
    /**
     * Range which will be rendered as selected.
     * */
    range: NbCalendarRange<D>;
    /**
     * Emits range when start selected and emits again when end selected.
     * */
    rangeChange: EventEmitter<NbCalendarRange<D>>;
    constructor(dateService: NbDateService<D>);
    onChange(date: D): void;
    private initDateIfNull;
    private handleSelected;
    private selectionStarted;
    private selectStart;
    private selectEnd;
    private selectRange;
}
