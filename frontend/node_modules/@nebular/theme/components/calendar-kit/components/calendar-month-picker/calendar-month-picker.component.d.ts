/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnInit, Type } from '@angular/core';
import { NbCalendarCell, NbCalendarSize } from '../../model';
import { NbDateService } from '../../services';
export declare class NbCalendarMonthPickerComponent<D, T> implements OnInit {
    protected dateService: NbDateService<D>;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    month: D;
    monthChange: EventEmitter<D>;
    months: D[][];
    constructor(dateService: NbDateService<D>);
    _cellComponent: Type<NbCalendarCell<D, T>>;
    cellComponent: Type<NbCalendarCell<any, any>>;
    readonly medium: boolean;
    readonly large: boolean;
    ngOnInit(): void;
    initMonths(): void;
    onSelect(month: D): void;
    private createMonthDateByIndex;
}
