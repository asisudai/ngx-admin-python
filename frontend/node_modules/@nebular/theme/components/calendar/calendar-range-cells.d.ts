import { EventEmitter } from '@angular/core';
import { NbCalendarCell, NbDateService } from '../calendar-kit';
import { NbCalendarRange } from './calendar-range.component';
export declare class NbCalendarRangeDayCellComponent<D> implements NbCalendarCell<D, NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    date: D;
    selectedValue: NbCalendarRange<D>;
    visibleDate: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    readonly inRange: boolean;
    readonly start: boolean;
    readonly end: boolean;
    readonly today: boolean;
    readonly boundingMonth: boolean;
    readonly selected: boolean;
    readonly empty: boolean;
    readonly disabled: boolean;
    readonly day: number;
    onClick(): void;
    private smallerThanMin;
    private greaterThanMax;
    private dontFitFilter;
}
export declare class NbCalendarRangeYearCellComponent<D> implements NbCalendarCell<D, NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    date: D;
    min: D;
    max: D;
    selectedValue: NbCalendarRange<D>;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    readonly selected: boolean;
    readonly today: boolean;
    readonly disabled: boolean;
    readonly year: number;
    onClick(): void;
    private smallerThanMin;
    private greaterThanMax;
    private yearStart;
    private yearEnd;
}
