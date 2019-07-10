/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, Type } from '@angular/core';
import { NbCalendarCell } from '../../model';
export declare class NbCalendarPickerComponent<D, T> {
    data: D[][];
    visibleDate: D;
    selectedValue: T;
    cellComponent: Type<NbCalendarCell<D, T>>;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    select: EventEmitter<D>;
}
