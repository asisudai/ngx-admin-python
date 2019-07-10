/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbThemeOptions } from './theme.options';
import { NbJSThemeOptions } from './services/js-themes/theme.options';
import { NbMediaBreakpoint } from './services/breakpoints.service';
import { NbLayoutDirection } from './services/direction.service';
export declare function nbWindowFactory(): Window;
export declare class NbThemeModule {
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     * @param layoutDirection {NbLayoutDirection} Layout direction
     *
     * @returns {ModuleWithProviders}
     */
    static forRoot(nbThemeOptions?: NbThemeOptions, nbJSThemes?: NbJSThemeOptions[], nbMediaBreakpoints?: NbMediaBreakpoint[], layoutDirection?: NbLayoutDirection): ModuleWithProviders;
}
