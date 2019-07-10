/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit } from '@angular/core';
import { NbCalendarDay } from '../../model';
import { NbDateService } from '../../services';
export declare class NbCalendarDaysNamesComponent<D> implements OnInit {
    private dateService;
    days: NbCalendarDay[];
    constructor(dateService: NbDateService<D>);
    ngOnInit(): void;
    private createDaysNames;
    private shiftStartOfWeek;
    private markIfHoliday;
}
