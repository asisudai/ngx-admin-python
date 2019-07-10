/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnChanges, SimpleChanges, Type } from '@angular/core';
import { NbCalendarMonthModelService } from '../../services';
import { NbCalendarCell, NbCalendarSize } from '../../model';
/**
 * Provides capability pick days.
 * */
export declare class NbCalendarDayPickerComponent<D, T> implements OnChanges {
    private monthModel;
    /**
     * Describes which month picker have to render.
     * */
    visibleDate: D;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonths: boolean;
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
    setCellComponent: Type<NbCalendarCell<D, T>>;
    cellComponent: Type<NbCalendarCell<any, any>>;
    /**
     * Size of the component.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    /**
     * Already selected date.
     * */
    date: T;
    /**
     * Fires newly selected date.
     * */
    dateChange: EventEmitter<D>;
    readonly medium: boolean;
    readonly large: boolean;
    /**
     * Day picker model.
     * Provides all days in current month and if boundingMonth is true some days
     * from previous and next one.
     * */
    weeks: D[][];
    constructor(monthModel: NbCalendarMonthModelService<D>);
    ngOnChanges({ visibleDate }: SimpleChanges): void;
    onSelect(day: D): void;
}
