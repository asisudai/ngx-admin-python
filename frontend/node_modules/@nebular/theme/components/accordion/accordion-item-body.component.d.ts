/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { NbAccordionItemComponent } from './accordion-item.component';
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
export declare class NbAccordionItemBodyComponent implements OnInit, OnDestroy {
    private accordionItem;
    private cd;
    private alive;
    constructor(accordionItem: NbAccordionItemComponent, cd: ChangeDetectorRef);
    readonly state: string;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
