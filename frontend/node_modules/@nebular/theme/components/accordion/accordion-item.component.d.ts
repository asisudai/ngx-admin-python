/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, EventEmitter, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NbAccordionComponent } from './accordion.component';
/**
 * Component intended to be used within `<nb-accordion>` component
 */
export declare class NbAccordionItemComponent implements OnInit, OnChanges, OnDestroy {
    private accordion;
    private cd;
    /**
     * Item is collapse (`true` by default)
     * @type {boolean}
     */
    collapsed: boolean;
    /**
     * Item is expanded (`false` by default)
     * @type {boolean}
     */
    expanded: boolean;
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     */
    collapsedChange: EventEmitter<boolean>;
    accordionItemInvalidate: Subject<boolean>;
    private collapsedValue;
    private disabledValue;
    private alive;
    constructor(accordion: NbAccordionComponent, cd: ChangeDetectorRef);
    /**
     * Open/close the item
     */
    toggle(): void;
    /**
     * Open the item.
     */
    open(): void;
    /**
     * Collapse the item.
     */
    close(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private invalidate;
}
