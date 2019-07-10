/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NB_BUILT_IN_JS_THEMES, NB_MEDIA_BREAKPOINTS, NB_THEME_OPTIONS, NB_JS_THEMES, NB_DOCUMENT, NB_WINDOW, } from './theme.options';
import { NbThemeService } from './services/theme.service';
import { NbSpinnerService } from './services/spinner.service';
import { BUILT_IN_THEMES, NbJSThemesRegistry } from './services/js-themes-registry.service';
import { DEFAULT_MEDIA_BREAKPOINTS, NbMediaBreakpointsService, } from './services/breakpoints.service';
import { NbLayoutDirectionService, NbLayoutDirection, NB_LAYOUT_DIRECTION } from './services/direction.service';
import { NbLayoutScrollService } from './services/scroll.service';
import { NbLayoutRulerService } from './services/ruler.service';
import { NbOverlayModule } from './components/cdk';
export function nbWindowFactory() {
    return window;
}
var NbThemeModule = /** @class */ (function () {
    function NbThemeModule() {
    }
    NbThemeModule_1 = NbThemeModule;
    // TODO: check the options (throw exception?)
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
    NbThemeModule.forRoot = function (nbThemeOptions, nbJSThemes, nbMediaBreakpoints, layoutDirection) {
        if (nbThemeOptions === void 0) { nbThemeOptions = { name: 'default' }; }
        return {
            ngModule: NbThemeModule_1,
            providers: [
                { provide: NB_THEME_OPTIONS, useValue: nbThemeOptions || {} },
                { provide: NB_BUILT_IN_JS_THEMES, useValue: BUILT_IN_THEMES },
                { provide: NB_JS_THEMES, useValue: nbJSThemes || [] },
                { provide: NB_MEDIA_BREAKPOINTS, useValue: nbMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
                { provide: NB_WINDOW, useFactory: nbWindowFactory },
                { provide: NB_DOCUMENT, useExisting: DOCUMENT },
                NbJSThemesRegistry,
                NbThemeService,
                NbMediaBreakpointsService,
                NbSpinnerService,
                { provide: NB_LAYOUT_DIRECTION, useValue: layoutDirection || NbLayoutDirection.LTR },
                NbLayoutDirectionService,
                NbLayoutScrollService,
                NbLayoutRulerService
            ].concat(NbOverlayModule.forRoot().providers),
        };
    };
    var NbThemeModule_1;
    NbThemeModule = NbThemeModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            exports: [],
        })
    ], NbThemeModule);
    return NbThemeModule;
}());
export { NbThemeModule };
//# sourceMappingURL=theme.module.js.map