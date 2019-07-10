/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbCalendarCell } from '../../model';
import { NbDateService } from '../../services';
export declare class NbCalendarMonthCellComponent<D> implements NbCalendarCell<D, D> {
    private dateService;
    date: D;
    selectedValue: D;
    min: D;
    max: D;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    readonly selected: boolean;
    readonly today: boolean;
    readonly disabled: boolean;
    readonly month: string;
    onClick(): void;
    private smallerThanMin;
    private greaterThanMax;
    private monthStart;
    private monthEnd;
}
