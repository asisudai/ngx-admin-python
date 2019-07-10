/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnDestroy, OnInit, QueryList } from '@angular/core';
import { NbToastComponent } from './toast.component';
import { NbToast } from './model';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbGlobalPosition, NbPositionHelper } from '../cdk';
export declare class NbToastrContainerComponent implements OnInit, OnDestroy {
    protected layoutDirection: NbLayoutDirectionService;
    protected positionHelper: NbPositionHelper;
    content: NbToast[];
    context: Object;
    position: NbGlobalPosition;
    toasts: QueryList<NbToastComponent>;
    fadeIn: any;
    protected alive: boolean;
    constructor(layoutDirection: NbLayoutDirectionService, positionHelper: NbPositionHelper);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected onDirectionChange(): void;
}
