/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Observable } from 'rxjs';
import { NbJSThemeOptions } from './js-themes/theme.options';
import { NbJSThemesRegistry } from './js-themes-registry.service';
import { NbMediaBreakpointsService, NbMediaBreakpoint } from './breakpoints.service';
/**
 * Main Nebular service. Includes various helper methods.
 */
export declare class NbThemeService {
    protected options: any;
    private breakpointService;
    private jsThemesRegistry;
    currentTheme: string;
    private themeChanges$;
    private appendLayoutClass$;
    private removeLayoutClass$;
    private changeWindowWidth$;
    constructor(options: any, breakpointService: NbMediaBreakpointsService, jsThemesRegistry: NbJSThemesRegistry);
    /**
     * Change current application theme
     * @param {string} name
     */
    changeTheme(name: string): void;
    changeWindowWidth(width: number): void;
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    getJsTheme(): Observable<NbJSThemeOptions>;
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```ts
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    onMediaQueryChange(): Observable<NbMediaBreakpoint[]>;
    /**
     * Triggered when current theme is changed
     * @returns {Observable<any>}
     */
    onThemeChange(): Observable<any>;
    /**
     * Append a class to nb-layout
     * @param {string} className
     */
    appendLayoutClass(className: string): void;
    /**
     * Triggered when a new class is added to nb-layout through `appendLayoutClass` method
     * @returns {Observable<any>}
     */
    onAppendLayoutClass(): Observable<any>;
    /**
     * Removes a class from nb-layout
     * @param {string} className
     */
    removeLayoutClass(className: string): void;
    /**
     * Triggered when a class is removed from nb-layout through `removeLayoutClass` method
     * @returns {Observable<any>}
     */
    onRemoveLayoutClass(): Observable<any>;
}
