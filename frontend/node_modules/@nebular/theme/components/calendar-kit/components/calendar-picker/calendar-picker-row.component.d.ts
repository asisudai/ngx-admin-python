/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver, EventEmitter, OnChanges, Type, ViewContainerRef } from '@angular/core';
import { NbCalendarCell } from '../../model';
export declare class NbCalendarPickerRowComponent<D, T> implements OnChanges {
    private cfr;
    row: D[];
    selectedValue: T;
    visibleDate: D;
    component: Type<NbCalendarCell<D, T>>;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    select: EventEmitter<D>;
    containerRef: ViewContainerRef;
    constructor(cfr: ComponentFactoryResolver);
    ngOnChanges(): void;
    private patchWithContext;
}
