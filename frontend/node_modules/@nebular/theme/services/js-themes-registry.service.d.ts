/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbJSThemeOptions } from './js-themes/theme.options';
export declare const BUILT_IN_THEMES: NbJSThemeOptions[];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
export declare class NbJSThemesRegistry {
    private themes;
    constructor(builtInThemes: NbJSThemeOptions[], newThemes?: NbJSThemeOptions[]);
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    register(config: any, themeName: string, baseTheme: string): void;
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    has(themeName: string): boolean;
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    get(themeName: string): NbJSThemeOptions;
    private combineByNames;
    private isObject;
    private mergeDeep;
}
