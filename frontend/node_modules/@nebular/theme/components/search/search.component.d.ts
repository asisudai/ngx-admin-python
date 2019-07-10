/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NbSearchService } from './search.service';
import { NbThemeService } from '../../services/theme.service';
import { NbOverlayService, NbPortalDirective } from '../cdk';
/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
export declare class NbSearchFieldComponent implements OnChanges, AfterViewInit {
    static readonly TYPE_MODAL_ZOOMIN = "modal-zoomin";
    static readonly TYPE_ROTATE_LAYOUT = "rotate-layout";
    static readonly TYPE_MODAL_MOVE = "modal-move";
    static readonly TYPE_CURTAIN = "curtain";
    static readonly TYPE_COLUMN_CURTAIN = "column-curtain";
    static readonly TYPE_MODAL_DROP = "modal-drop";
    static readonly TYPE_MODAL_HALF = "modal-half";
    type: string;
    placeholder: string;
    hint: string;
    show: boolean;
    close: EventEmitter<{}>;
    search: EventEmitter<{}>;
    inputElement: ElementRef<HTMLInputElement>;
    readonly showClass: boolean;
    readonly modalZoomin: boolean;
    readonly rotateLayout: boolean;
    readonly modalMove: boolean;
    readonly curtain: boolean;
    readonly columnCurtain: boolean;
    readonly modalDrop: boolean;
    readonly modalHalf: boolean;
    ngOnChanges({ show }: SimpleChanges): void;
    ngAfterViewInit(): void;
    emitClose(): void;
    submitSearch(term: any): void;
    focusInput(): void;
}
/**
 * Beautiful full-page search control.
 *
 * @stacked-example(Showcase, search/search-showcase.component)
 *
 * Basic setup:
 *
 * ```ts
 *  <nb-search type="rotate-layout"></nb-search>
 * ```
 * ### Installation
 *
 * Import `NbSearchModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSearchModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Several animation types are available:
 * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
 *
 * It is also possible to handle search event using `NbSearchService`:
 *
 * @stacked-example(Search Event, search/search-event.component)
 *
 * @styles
 *
 * search-btn-open-fg:
 * search-btn-close-fg:
 * search-bg:
 * search-bg-secondary:
 * search-text:
 * search-info:
 * search-dash:
 * search-placeholder:
 */
export declare class NbSearchComponent implements OnInit, OnDestroy {
    private searchService;
    private themeService;
    private router;
    private overlayService;
    private changeDetector;
    private alive;
    private overlayRef;
    showSearchField: boolean;
    /**
     * Tags a search with some ID, can be later used in the search service
     * to determine which search component triggered the action, if multiple searches exist on the page.
     *
     * @type {string}
     */
    tag: string;
    /**
     * Search input placeholder
     * @type {string}
     */
    placeholder: string;
    /**
     * Hint showing under the input field to improve user experience
     *
     * @type {string}
     */
    hint: string;
    /**
     * Search design type, available types are
     * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
     * @type {string}
     */
    type: string;
    searchFieldPortal: NbPortalDirective;
    searchButton: ElementRef<HTMLElement>;
    constructor(searchService: NbSearchService, themeService: NbThemeService, router: Router, overlayService: NbOverlayService, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    openSearch(): void;
    hideSearch(): void;
    search(term: any): void;
    private removeLayoutClasses;
}
