/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnInit, Type } from '@angular/core';
import { NbDateService, NbCalendarCell, NbCalendarSize, NbCalendarViewMode } from '../calendar-kit';
/**
 * The basis for calendar and range calendar components.
 * Encapsulates common behavior - store calendar state and perform navigation
 * between pickers.
 * */
export declare class NbBaseCalendarComponent<D, T> implements OnInit {
    protected dateService: NbDateService<D>;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonth: boolean;
    /**
     * Defines active view for calendar.
     * */
    activeViewMode: NbCalendarViewMode;
    /**
     * Minimum available date for selection.
     * */
    min: D;
    /**
     * Maximum available date for selection.
     * */
    max: D;
    /**
     * Predicate that decides which cells will be disabled.
     * */
    filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    dayCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    monthCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    yearCellComponent: Type<NbCalendarCell<D, T>>;
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
     * Value which will be rendered as selected.
     * */
    date: T;
    /**
     * Emits date when selected.
     * */
    dateChange: EventEmitter<T>;
    constructor(dateService: NbDateService<D>);
    ngOnInit(): void;
    readonly medium: boolean;
    readonly large: boolean;
    ViewMode: typeof NbCalendarViewMode;
    setViewMode(viewMode: NbCalendarViewMode): void;
    setVisibleDate(visibleDate: D): void;
    prevMonth(): void;
    nextMonth(): void;
    prevYears(): void;
    nextYears(): void;
    navigateToday(): void;
    private changeVisibleMonth;
    private changeVisibleYear;
}
