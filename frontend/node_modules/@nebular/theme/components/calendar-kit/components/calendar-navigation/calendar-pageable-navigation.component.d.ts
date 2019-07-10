/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbLayoutDirectionService } from '../../../../services/direction.service';
export declare class NbCalendarPageableNavigationComponent<D> {
    private directionService;
    date: D;
    changeMode: EventEmitter<void>;
    next: EventEmitter<void>;
    prev: EventEmitter<void>;
    constructor(directionService: NbLayoutDirectionService);
    readonly isRtl: boolean;
    readonly isLtr: boolean;
}
