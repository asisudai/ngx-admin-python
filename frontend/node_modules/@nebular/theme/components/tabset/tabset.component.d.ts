/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, QueryList, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**
 * Specific tab container.
 *
 * ```ts
 * <nb-tab tabTitle="Users"
 *   badgeText="99+"
 *   badgeStatus="danger">
 *   <p>List of <strong>users</strong>.</p>
 * </nb-tab>
 ```
 */
export declare class NbTabComponent {
    /**
     * Tab title
     * @type {string}
     */
    tabTitle: string;
    /**
     * Tab icon
     * @type {string}
     */
    tabIcon: string;
    /**
     * Show only icons when width is smaller than `tabs-icon-only-max-width`
     * @type {boolean}
     */
    responsive: boolean;
    route: string;
    activeValue: boolean;
    responsiveValue: boolean;
    /**
     * Specifies active tab
     * @returns {boolean}
     */
    active: boolean;
    /**
     * Lazy load content before tab selection
     * TODO: rename, as lazy is by default, and this is more `instant load`
     * @param {boolean} val
     */
    lazyLoad: boolean;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * 'primary', 'info', 'success', 'warning', 'danger'
     * @param {string} val
     */
    badgeStatus: string;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    badgePosition: string;
    init: boolean;
}
/**
 *
 * Dynamic tabset component.
 * @stacked-example(Showcase, tabset/tabset-showcase.component)
 *
 * Basic tabset example
 *
 * ```html
 * <nb-tabset>
 *  <nb-tab tabTitle="Simple Tab #1">
 *    Tab content 1
 *  </nb-tab>
 *  <nb-tab tabTitle="Simple Tab #2">
 *    Tab content 2
 *  </nb-tab>
 * </nb-tabset>
 * ```
 *
 * ### Installation
 *
 * Import `NbTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * It is also possible to set a badge to a particular tab:
 * @stacked-example(Tab With Badge, tabset/tabset-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, tabset/tabset-width.component)
 *
 * `tabIcon` should be used to add an icon to the tab. Icon can also be combined with title.
 * `responsive` tab property if set allows you to hide the title on smaller screens
 * (`tabs-icon-only-max-width` property) for better responsive behaviour. You can open the following example and make
 * your screen smaller - titles will be hidden in the last tabset in the list:
 *
 * @stacked-example(Icon, tabset/tabset-icon.component)
 *
 * @styles
 *
 * tabs-font-family:
 * tabs-font-size:
 * tabs-content-font-family:
 * tabs-content-font-size:
 * tabs-active-bg:
 * tabs-active-font-weight:
 * tabs-padding:
 * tabs-content-padding:
 * tabs-header-bg:
 * tabs-separator:
 * tabs-fg:
 * tabs-fg-text:
 * tabs-fg-heading:
 * tabs-bg:
 * tabs-selected:
 * tabs-icon-only-max-width
 *
 */
export declare class NbTabsetComponent implements AfterContentInit {
    private route;
    private changeDetectorRef;
    tabs: QueryList<NbTabComponent>;
    fullWidthValue: boolean;
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    fullWidth: boolean;
    /**
     * If specified - tabset listens to this parameter and selects corresponding tab.
     * @type {string}
     */
    routeParam: string;
    /**
     * Emits when tab is selected
     * @type EventEmitter<any>
     */
    changeTab: EventEmitter<any>;
    constructor(route: ActivatedRoute, changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    selectTab(selectedTab: NbTabComponent): void;
}
