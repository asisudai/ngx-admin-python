/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit, OnDestroy, ElementRef, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { NbThemeService } from '../../services/theme.service';
import { NbSidebarService } from './sidebar.service';
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
export declare class NbSidebarHeaderComponent {
}
/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
export declare class NbSidebarFooterComponent {
}
/**
 * Layout sidebar component.
 *
 * @stacked-example(Showcase, sidebar/sidebar-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSidebarModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSidebarModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbSidebarModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSidebarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Sidebar can be placed on the left or the right side of the layout,
 * or on start/end position of layout (depends on document direction, left to right or right to left)
 * It can be fixed (shown above the content) or can push the layout when opened.
 *
 * There are three states - `expanded`, `collapsed`, `compacted`.
 * By default sidebar content is fixed and saves its position while the page is being scrolled.
 *
 * Compacted sidebar example:
 * @stacked-example(Compacted Sidebar, sidebar/sidebar-compacted.component)
 *
 * Sidebar also supports a `responsive` behavior, listening to window size change and changing its size respectably.
 *
 * In a pair with header it is possible to setup a configuration when header is placed on a side of the sidebar
 * and not on top of it. To achieve this simply put a `subheader` property to the header like this:
 * ```html
 * <nb-layout-header subheader></nb-layout-header>
 * ```
 * @stacked-example(Subheader, layout/layout-sidebar-subheader.component)
 * Note that in such configuration sidebar shadow is removed and header cannot be make `fixed`.
 *
 * @additional-example(Right Sidebar, sidebar/sidebar-right.component)
 * @additional-example(Fixed Sidebar, sidebar/sidebar-fixed.component)
 *
 * @styles
 *
 * sidebar-font-size: Sidebar content font size
 * sidebar-line-height: Sidebar content line height
 * sidebar-fg: Foreground color
 * sidebar-bg: Background color
 * sidebar-height: Content height
 * sidebar-width: Expanded width
 * sidebar-width-compact: Compacted width
 * sidebar-padding: Sidebar content padding
 * sidebar-header-height: Sidebar header height
 * sidebar-footer-height: Sidebar footer height
 * sidebar-shadow: Sidebar container shadow
 *
 */
export declare class NbSidebarComponent implements OnChanges, OnInit, OnDestroy {
    private sidebarService;
    private themeService;
    private element;
    static readonly STATE_EXPANDED: string;
    static readonly STATE_COLLAPSED: string;
    static readonly STATE_COMPACTED: string;
    static readonly RESPONSIVE_STATE_MOBILE: string;
    static readonly RESPONSIVE_STATE_TABLET: string;
    static readonly RESPONSIVE_STATE_PC: string;
    protected stateValue: string;
    protected responsiveValue: boolean;
    private alive;
    containerFixedValue: boolean;
    fixedValue: boolean;
    rightValue: boolean;
    leftValue: boolean;
    startValue: boolean;
    endValue: boolean;
    readonly expanded: boolean;
    readonly collapsed: boolean;
    readonly compacted: boolean;
    /**
     * Places sidebar on the right side
     * @type {boolean}
     */
    right: boolean;
    /**
     * Places sidebar on the left side
     * @type {boolean}
     */
    left: boolean;
    /**
     * Places sidebar on the start edge of layout
     * @type {boolean}
     */
    start: boolean;
    /**
     * Places sidebar on the end edge of layout
     * @type {boolean}
     */
    end: boolean;
    /**
     * Makes sidebar fixed (shown above the layout content)
     * @type {boolean}
     */
    fixed: boolean;
    /**
     * Makes sidebar container fixed
     * @type {boolean}
     */
    containerFixed: boolean;
    /**
     * Initial sidebar state, `expanded`|`collapsed`|`compacted`
     * @type {string}
     */
    state: string;
    /**
     * Makes sidebar listen to media query events and change its behaviour
     * @type {boolean}
     */
    responsive: boolean;
    /**
     * Tags a sidebar with some ID, can be later used in the sidebar service
     * to determine which sidebar triggered the action, if multiple sidebars exist on the page.
     *
     * @type {string}
     */
    tag: string;
    /**
     * Controls on which screen sizes sidebar should be switched to compacted state.
     * Works only when responsive mode is on.
     * Default values are `['xs', 'is', 'sm', 'md', 'lg']`.
     *
     * @type string[]
     */
    compactedBreakpoints: string[];
    /**
     * Controls on which screen sizes sidebar should be switched to collapsed state.
     * Works only when responsive mode is on.
     * Default values are `['xs', 'is']`.
     *
     * @type string[]
     */
    collapsedBreakpoints: string[];
    private mediaQuerySubscription;
    private responsiveState;
    constructor(sidebarService: NbSidebarService, themeService: NbThemeService, element: ElementRef);
    toggleResponsive(enabled: boolean): void;
    ngOnChanges(changes: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(event: any): void;
    /**
     * Collapses the sidebar
     */
    collapse(): void;
    /**
     * Expands the sidebar
     */
    expand(): void;
    /**
     * Compacts the sidebar (minimizes)
     */
    compact(): void;
    /**
     * Toggles sidebar state (expanded|collapsed|compacted)
     * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
     * otherwise - between expanded & collapsed. False by default.
     *
     * Toggle sidebar state
     *
     * ```ts
     * this.sidebar.toggle(true);
     * ```
     */
    toggle(compact?: boolean): void;
    protected onMediaQueryChanges(): Subscription;
    protected responsiveEnabled(): boolean;
}
