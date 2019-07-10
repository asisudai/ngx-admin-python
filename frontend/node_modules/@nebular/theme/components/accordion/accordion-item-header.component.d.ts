/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NbAccordionItemComponent } from './accordion-item.component';
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
export declare class NbAccordionItemHeaderComponent implements OnInit, OnDestroy {
    private accordionItem;
    private cd;
    readonly isCollapsed: boolean;
    readonly expanded: boolean;
    readonly tabbable: string;
    readonly disabled: boolean;
    toggle(): void;
    readonly state: string;
    private alive;
    constructor(accordionItem: NbAccordionItemComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
