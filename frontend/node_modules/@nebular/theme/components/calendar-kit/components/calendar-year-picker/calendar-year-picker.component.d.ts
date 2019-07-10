/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnChanges, Type } from '@angular/core';
import { NbCalendarCell, NbCalendarSize } from '../../model';
import { NbDateService } from '../../services';
export declare class NbCalendarYearPickerComponent<D> implements OnChanges {
    protected dateService: NbDateService<D>;
    date: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    _cellComponent: Type<NbCalendarCell<D, D>>;
    cellComponent: Type<NbCalendarCell<D, D>>;
    size: NbCalendarSize;
    year: D;
    yearChange: EventEmitter<D>;
    readonly medium: boolean;
    readonly large: boolean;
    years: D[][];
    constructor(dateService: NbDateService<D>);
    ngOnChanges(): void;
    initYears(): void;
    onSelect(year: any): void;
    private createYearDateByIndex;
}
