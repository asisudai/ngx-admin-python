/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbLayoutDirectionService } from '../../../../services/direction.service';
import { NbDateService } from '../../services';
export declare class NbCalendarHeaderComponent<D> {
    protected directionService: NbLayoutDirectionService;
    protected dateService: NbDateService<D>;
    date: D;
    navigateToday: EventEmitter<void>;
    constructor(directionService: NbLayoutDirectionService, dateService: NbDateService<D>);
    readonly isRtl: boolean;
    readonly isLtr: boolean;
}
