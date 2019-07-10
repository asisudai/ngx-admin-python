/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbCalendarCell } from '../../model';
import { NbDateService } from '../../services';
export declare class NbCalendarDayCellComponent<D> implements NbCalendarCell<D, D> {
    protected dateService: NbDateService<D>;
    date: D;
    selectedValue: D;
    visibleDate: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
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
