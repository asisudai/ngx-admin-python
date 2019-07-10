/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Media breakpoint type
 *
 * Where `name` - breakpoint name alias (e.g. xs, sm, md, etc), and width - min breakpoint width
 */
export interface NbMediaBreakpoint {
    name: string;
    width: number;
}
export declare const DEFAULT_MEDIA_BREAKPOINTS: {
    name: string;
    width: number;
}[];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
export declare class NbMediaBreakpointsService {
    private breakpoints;
    private breakpointsMap;
    constructor(breakpoints: any);
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    getByWidth(width: number): NbMediaBreakpoint;
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    getByName(name: string): NbMediaBreakpoint;
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    getBreakpoints(): NbMediaBreakpoint[];
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    getBreakpointsMap(): {
        [breakpoint: string]: number;
    };
}
