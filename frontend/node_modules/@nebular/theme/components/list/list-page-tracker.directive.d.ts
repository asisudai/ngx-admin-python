import { QueryList, ElementRef, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import 'intersection-observer';
/**
 * List pager directive
 *
 * Directive allows you to determine page of currently viewing items.
 *
 */
export declare class NbListPageTrackerDirective implements AfterViewInit, OnDestroy {
    private alive;
    private observer;
    private currentPage;
    /**
     * Items per page.
     */
    pageSize: number;
    /**
     * Page to start counting with.
     */
    startPage: number;
    /**
     * Emits when another page become visible.
     */
    pageChange: EventEmitter<number>;
    listItems: QueryList<ElementRef>;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private observeItems;
    private checkForPageChange;
    private findMostVisiblePage;
    private elementIndex;
}
