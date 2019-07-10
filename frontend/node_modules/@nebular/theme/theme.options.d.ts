/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken } from '@angular/core';
import { NbMediaBreakpoint } from './services/breakpoints.service';
import { NbJSThemeOptions } from './services/js-themes/theme.options';
export interface NbThemeOptions {
    name: string;
}
export declare const NB_THEME_OPTIONS: InjectionToken<NbThemeOptions>;
export declare const NB_MEDIA_BREAKPOINTS: InjectionToken<NbMediaBreakpoint[]>;
export declare const NB_BUILT_IN_JS_THEMES: InjectionToken<NbJSThemeOptions[]>;
export declare const NB_JS_THEMES: InjectionToken<NbJSThemeOptions[]>;
/**
 * We're providing browser apis with tokens to improve testing capabilities.
 * */
export declare const NB_WINDOW: InjectionToken<Window>;
export declare const NB_DOCUMENT: InjectionToken<Document>;
