/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbDateService } from '../../services';
import { NbCalendarCell } from '../../model';
export declare class NbCalendarYearCellComponent<D> implements NbCalendarCell<D, D> {
    protected dateService: NbDateService<D>;
    date: D;
    min: D;
    max: D;
    selectedValue: D;
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
