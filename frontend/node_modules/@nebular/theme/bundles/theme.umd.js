(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('@angular/router'), require('@angular/cdk/a11y'), require('@angular/cdk/portal'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/cdk/bidi'), require('@angular/cdk/scrolling'), require('@angular/animations'), require('@angular/platform-browser'), require('intersection-observer')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/forms', '@angular/router', '@angular/cdk/a11y', '@angular/cdk/portal', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/cdk/bidi', '@angular/cdk/scrolling', '@angular/animations', '@angular/platform-browser', 'intersection-observer'], factory) :
	(factory((global.nb = global.nb || {}, global.nb.theme = global.nb.theme || {}),global.ng.core,global.ng.common,global.Rx,global.Rx.operators,global.ng.forms,global.ng.router,global.ng.cdk.a11y,global.ng.cdk.portal,global.ng.cdk.overlay,global.ng.cdk.platform,global.ng.cdk.bidi,global.ng.cdk.scrolling,global.ng.animations,global.ng.platformBrowser));
}(this, (function (exports,i0,i1,rxjs,rxjs_operators,_angular_forms,_angular_router,_angular_cdk_a11y,_angular_cdk_portal,_angular_cdk_overlay,_angular_cdk_platform,_angular_cdk_bidi,i2,_angular_animations,_angular_platformBrowser) { 'use strict';

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_THEME_OPTIONS = new i0.InjectionToken('Nebular Theme Options');
var NB_MEDIA_BREAKPOINTS = new i0.InjectionToken('Nebular Media Breakpoints');
var NB_BUILT_IN_JS_THEMES = new i0.InjectionToken('Nebular Built-in JS Themes');
var NB_JS_THEMES = new i0.InjectionToken('Nebular JS Themes');
/**
 * We're providing browser apis with tokens to improve testing capabilities.
 * */
var NB_WINDOW = new i0.InjectionToken('Window');
var NB_DOCUMENT = new i0.InjectionToken('Document');

var NbColorHelper = /** @class */ (function () {
    function NbColorHelper() {
    }
    NbColorHelper.shade = function (color, weight) {
        return NbColorHelper.mix('#000000', color, weight);
    };
    NbColorHelper.tint = function (color, weight) {
        return NbColorHelper.mix('#ffffff', color, weight);
    };
    NbColorHelper.mix = function (color1, color2, weight) {
        var d2h = function (d) { return d.toString(16); };
        var h2d = function (h) { return parseInt(h, 16); };
        var result = '#';
        for (var i = 1; i < 7; i += 2) {
            var firstPart = h2d(color1.substr(i, 2));
            var secondPart = h2d(color2.substr(i, 2));
            var resultPart = d2h(Math.floor(secondPart + (firstPart - secondPart) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
    NbColorHelper.hexToRgbA = function (hex, alpha) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };
    return NbColorHelper;
}());

var palette = {
    primary: '#8a7fff',
    success: '#40dc7e',
    info: '#4ca6ff',
    warning: '#ffa100',
    danger: '#ff4c6a',
};
var DEFAULT_THEME = {
    name: 'default',
    variables: {
        fontMain: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSecondary: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        bg: '#ffffff',
        fg: '#a4abb3',
        fgHeading: '#2a2a2a',
        fgText: '#3b3b3b',
        fgHighlight: '#41d974',
        layoutBg: '#ebeff5',
        separator: '#ebeef2',
        primary: palette.primary,
        success: palette.success,
        info: palette.info,
        warning: palette.warning,
        danger: palette.danger,
        primaryLight: NbColorHelper.tint(palette.primary, 15),
        successLight: NbColorHelper.tint(palette.success, 15),
        infoLight: NbColorHelper.tint(palette.info, 15),
        warningLight: NbColorHelper.tint(palette.warning, 15),
        dangerLight: NbColorHelper.tint(palette.danger, 15),
    },
};

var palette$1 = {
    primary: '#7659ff',
    success: '#00d977',
    info: '#0088ff',
    warning: '#ffa100',
    danger: '#ff386a',
};
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        bg: '#3d3780',
        fg: '#a1a1e5',
        fgHeading: '#ffffff',
        fgText: '#d1d1ff',
        fgHighlight: '#00f9a6',
        layoutBg: '#2f296b',
        separator: '#342e73',
        primary: palette$1.primary,
        success: palette$1.success,
        info: palette$1.info,
        warning: palette$1.warning,
        danger: palette$1.danger,
        primaryLight: NbColorHelper.tint(palette$1.primary, 20),
        successLight: NbColorHelper.tint(palette$1.success, 20),
        infoLight: NbColorHelper.tint(palette$1.info, 20),
        warningLight: NbColorHelper.tint(palette$1.warning, 20),
        dangerLight: NbColorHelper.tint(palette$1.danger, 20),
    },
};

var palette$2 = {
    primary: '#73a1ff',
    success: '#5dcfe3',
    info: '#ba7fec',
    warning: '#ffa36b',
    danger: '#ff6b83',
};
var CORPORATE_THEME = {
    name: 'corporate',
    base: 'default',
    variables: {
        fg: '#f1f5f8',
        bg: '#ffffff',
        fgHeading: '#181818',
        fgText: '#4b4b4b',
        fgHighlight: '#a4abb3',
        layoutBg: '#f1f5f8',
        separator: '#cdd5dc',
        primary: palette$2.primary,
        success: palette$2.success,
        info: palette$2.info,
        warning: palette$2.warning,
        danger: palette$2.danger,
        primaryLight: NbColorHelper.tint(palette$2.primary, 15),
        successLight: NbColorHelper.tint(palette$2.success, 15),
        infoLight: NbColorHelper.tint(palette$2.info, 15),
        warningLight: NbColorHelper.tint(palette$2.warning, 15),
        dangerLight: NbColorHelper.tint(palette$2.danger, 15),
    },
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BUILT_IN_THEMES = [
    DEFAULT_THEME,
    COSMIC_THEME,
    CORPORATE_THEME,
];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
var NbJSThemesRegistry = /** @class */ (function () {
    function NbJSThemesRegistry(builtInThemes, newThemes) {
        if (newThemes === void 0) { newThemes = []; }
        var _this = this;
        this.themes = {};
        var themes = this.combineByNames(newThemes, builtInThemes);
        themes.forEach(function (theme) {
            _this.register(theme, theme.name, theme.base);
        });
    }
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    NbJSThemesRegistry.prototype.register = function (config, themeName, baseTheme) {
        var base = this.has(baseTheme) ? this.get(baseTheme) : {};
        this.themes[themeName] = this.mergeDeep({}, base, config);
    };
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    NbJSThemesRegistry.prototype.has = function (themeName) {
        return !!this.themes[themeName];
    };
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    NbJSThemesRegistry.prototype.get = function (themeName) {
        if (!this.themes[themeName]) {
            throw Error("NbThemeConfig: no theme '" + themeName + "' found registered.");
        }
        return JSON.parse(JSON.stringify(this.themes[themeName]));
    };
    NbJSThemesRegistry.prototype.combineByNames = function (newThemes, oldThemes) {
        var _this = this;
        if (newThemes) {
            var mergedThemes_1 = [];
            newThemes.forEach(function (theme) {
                var sameOld = oldThemes.find(function (tm) { return tm.name === theme.name; })
                    || {};
                var mergedTheme = _this.mergeDeep({}, sameOld, theme);
                mergedThemes_1.push(mergedTheme);
            });
            oldThemes.forEach(function (theme) {
                if (!mergedThemes_1.find(function (tm) { return tm.name === theme.name; })) {
                    mergedThemes_1.push(theme);
                }
            });
            return mergedThemes_1;
        }
        return oldThemes;
    };
    NbJSThemesRegistry.prototype.isObject = function (item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    };
    // TODO: move to helpers
    NbJSThemesRegistry.prototype.mergeDeep = function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        var _a, _b;
        if (!sources.length) {
            return target;
        }
        var source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (var key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    this.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return this.mergeDeep.apply(this, [target].concat(sources));
    };
    NbJSThemesRegistry = __decorate$2([
        i0.Injectable(),
        __param$1(0, i0.Inject(NB_BUILT_IN_JS_THEMES)),
        __param$1(1, i0.Inject(NB_JS_THEMES)),
        __metadata$1("design:paramtypes", [Array, Array])
    ], NbJSThemesRegistry);
    return NbJSThemesRegistry;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var DEFAULT_MEDIA_BREAKPOINTS = [
    {
        name: 'xs',
        width: 0,
    },
    {
        name: 'is',
        width: 400,
    },
    {
        name: 'sm',
        width: 576,
    },
    {
        name: 'md',
        width: 768,
    },
    {
        name: 'lg',
        width: 992,
    },
    {
        name: 'xl',
        width: 1200,
    },
    {
        name: 'xxl',
        width: 1400,
    },
    {
        name: 'xxxl',
        width: 1600,
    },
];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
var NbMediaBreakpointsService = /** @class */ (function () {
    function NbMediaBreakpointsService(breakpoints) {
        this.breakpoints = breakpoints;
        this.breakpointsMap = this.breakpoints.reduce(function (res, b) {
            res[b.name] = b.width;
            return res;
        }, {});
    }
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    NbMediaBreakpointsService.prototype.getByWidth = function (width) {
        var unknown = { name: 'unknown', width: width };
        var breakpoints = this.getBreakpoints();
        return breakpoints
            .find(function (point, index) {
            var next = breakpoints[index + 1];
            return width >= point.width && (!next || width < next.width);
        }) || unknown;
    };
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    NbMediaBreakpointsService.prototype.getByName = function (name) {
        var unknown = { name: 'unknown', width: NaN };
        var breakpoints = this.getBreakpoints();
        return breakpoints.find(function (point) { return name === point.name; }) || unknown;
    };
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    NbMediaBreakpointsService.prototype.getBreakpoints = function () {
        return this.breakpoints;
    };
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    NbMediaBreakpointsService.prototype.getBreakpointsMap = function () {
        return this.breakpointsMap;
    };
    NbMediaBreakpointsService = __decorate$3([
        i0.Injectable(),
        __param$2(0, i0.Inject(NB_MEDIA_BREAKPOINTS)),
        __metadata$2("design:paramtypes", [Object])
    ], NbMediaBreakpointsService);
    return NbMediaBreakpointsService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Main Nebular service. Includes various helper methods.
 */
var NbThemeService = /** @class */ (function () {
    function NbThemeService(options, breakpointService, jsThemesRegistry) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.themeChanges$ = new rxjs.ReplaySubject(1);
        this.appendLayoutClass$ = new rxjs.Subject();
        this.removeLayoutClass$ = new rxjs.Subject();
        this.changeWindowWidth$ = new rxjs.ReplaySubject(2);
        if (options && options.name) {
            this.changeTheme(options.name);
        }
    }
    /**
     * Change current application theme
     * @param {string} name
     */
    NbThemeService.prototype.changeTheme = function (name) {
        this.themeChanges$.next({ name: name, previous: this.currentTheme });
        this.currentTheme = name;
    };
    NbThemeService.prototype.changeWindowWidth = function (width) {
        this.changeWindowWidth$.next(width);
    };
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    NbThemeService.prototype.getJsTheme = function () {
        var _this = this;
        return this.onThemeChange().pipe(rxjs_operators.map(function (theme) {
            return _this.jsThemesRegistry.get(theme.name);
        }));
    };
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```ts
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    NbThemeService.prototype.onMediaQueryChange = function () {
        var _this = this;
        return this.changeWindowWidth$
            .pipe(rxjs_operators.startWith(undefined), rxjs_operators.pairwise(), rxjs_operators.map(function (_a) {
            var prevWidth = _a[0], width = _a[1];
            return [
                _this.breakpointService.getByWidth(prevWidth),
                _this.breakpointService.getByWidth(width),
            ];
        }), rxjs_operators.filter(function (_a) {
            var prevPoint = _a[0], point = _a[1];
            return prevPoint.name !== point.name;
        }), rxjs_operators.distinctUntilChanged(null, function (params) { return params[0].name + params[1].name; }), rxjs_operators.share());
    };
    /**
     * Triggered when current theme is changed
     * @returns {Observable<any>}
     */
    NbThemeService.prototype.onThemeChange = function () {
        return this.themeChanges$.pipe(rxjs_operators.share());
    };
    /**
     * Append a class to nb-layout
     * @param {string} className
     */
    NbThemeService.prototype.appendLayoutClass = function (className) {
        this.appendLayoutClass$.next(className);
    };
    /**
     * Triggered when a new class is added to nb-layout through `appendLayoutClass` method
     * @returns {Observable<any>}
     */
    NbThemeService.prototype.onAppendLayoutClass = function () {
        return this.appendLayoutClass$.pipe(rxjs_operators.share());
    };
    /**
     * Removes a class from nb-layout
     * @param {string} className
     */
    NbThemeService.prototype.removeLayoutClass = function (className) {
        this.removeLayoutClass$.next(className);
    };
    /**
     * Triggered when a class is removed from nb-layout through `removeLayoutClass` method
     * @returns {Observable<any>}
     */
    NbThemeService.prototype.onRemoveLayoutClass = function () {
        return this.removeLayoutClass$.pipe(rxjs_operators.share());
    };
    NbThemeService = __decorate$1([
        i0.Injectable(),
        __param(0, i0.Inject(NB_THEME_OPTIONS)),
        __metadata("design:paramtypes", [Object, NbMediaBreakpointsService,
            NbJSThemesRegistry])
    ], NbThemeService);
    return NbThemeService;
}());

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Service to control the global page spinner.
 */
var NbSpinnerService = /** @class */ (function () {
    function NbSpinnerService(document) {
        this.document = document;
        this.loaders = [];
        this.selector = 'nb-global-spinner';
    }
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    NbSpinnerService.prototype.registerLoader = function (method) {
        this.loaders.push(method);
    };
    /**
     * Clears the list of loader
     */
    NbSpinnerService.prototype.clear = function () {
        this.loaders = [];
    };
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    NbSpinnerService.prototype.load = function () {
        this.showSpinner();
        this.executeAll();
    };
    NbSpinnerService.prototype.executeAll = function (done) {
        var _this = this;
        if (done === void 0) { done = function () { }; }
        Promise.all(this.loaders).then(function (values) {
            _this.hideSpinner();
            done.call(null, values);
        })
            .catch(function (error) {
            // TODO: Promise.reject
            console.error(error);
        });
    };
    // TODO is there any better way of doing this?
    NbSpinnerService.prototype.showSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
        }
    };
    NbSpinnerService.prototype.hideSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'none';
        }
    };
    NbSpinnerService.prototype.getSpinnerElement = function () {
        return this.document.getElementById(this.selector);
    };
    NbSpinnerService = __decorate$4([
        i0.Injectable(),
        __param$3(0, i0.Inject(NB_DOCUMENT)),
        __metadata$3("design:paramtypes", [Object])
    ], NbSpinnerService);
    return NbSpinnerService;
}());

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$4 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Layout direction.
 * */

(function (NbLayoutDirection) {
    NbLayoutDirection["LTR"] = "ltr";
    NbLayoutDirection["RTL"] = "rtl";
})(exports.NbLayoutDirection || (exports.NbLayoutDirection = {}));

/**
 * Layout direction setting injection token.
 * */
var NB_LAYOUT_DIRECTION = new i0.InjectionToken('Layout direction');
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to its changes
 */
var NbLayoutDirectionService = /** @class */ (function () {
    function NbLayoutDirectionService(direction) {
        if (direction === void 0) { direction = exports.NbLayoutDirection.LTR; }
        this.direction = direction;
        this.$directionChange = new rxjs.ReplaySubject(1);
        this.setDirection(direction);
    }
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    NbLayoutDirectionService.prototype.isLtr = function () {
        return this.direction === exports.NbLayoutDirection.LTR;
    };
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    NbLayoutDirectionService.prototype.isRtl = function () {
        return this.direction === exports.NbLayoutDirection.RTL;
    };
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    NbLayoutDirectionService.prototype.getDirection = function () {
        return this.direction;
    };
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    NbLayoutDirectionService.prototype.setDirection = function (direction) {
        this.direction = direction;
        this.$directionChange.next(direction);
    };
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    NbLayoutDirectionService.prototype.onDirectionChange = function () {
        return this.$directionChange.pipe(rxjs_operators.share());
    };
    NbLayoutDirectionService = __decorate$5([
        i0.Injectable(),
        __param$4(0, i0.Optional()), __param$4(0, i0.Inject(NB_LAYOUT_DIRECTION)),
        __metadata$4("design:paramtypes", [Object])
    ], NbLayoutDirectionService);
    return NbLayoutDirectionService;
}());

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Layout scroll service. Provides information about current scroll position,
 * as well as methods to update position of the scroll.
 *
 * The reason we added this service is that in Nebular there are two scroll modes:
 * - the default mode when scroll is on body
 * - and the `withScroll` mode, when scroll is removed from the body and moved to an element inside of the
 * `nb-layout` component
 */
var NbLayoutScrollService = /** @class */ (function () {
    function NbLayoutScrollService() {
        this.scrollPositionReq$ = new rxjs.Subject();
        this.manualScroll$ = new rxjs.Subject();
        this.scroll$ = new rxjs.Subject();
        this.scrollable$ = new rxjs.Subject();
    }
    /**
     * Returns scroll position
     *
     * @returns {Observable<NbScrollPosition>}
     */
    NbLayoutScrollService.prototype.getPosition = function () {
        var _this = this;
        return rxjs.Observable.create(function (observer) {
            var listener = new rxjs.Subject();
            listener.subscribe(observer);
            _this.scrollPositionReq$.next({ listener: listener });
            return function () { return listener.complete(); };
        });
    };
    /**
     * Sets scroll position
     *
     * @param {number} x
     * @param {number} y
     */
    NbLayoutScrollService.prototype.scrollTo = function (x, y) {
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        this.manualScroll$.next({ x: x, y: y });
    };
    /**
     * Returns a stream of scroll events
     *
     * @returns {Observable<any>}
     */
    NbLayoutScrollService.prototype.onScroll = function () {
        return this.scroll$.pipe(rxjs_operators.share());
    };
    /**
     * @private
     * @returns Observable<NbScrollPosition>.
     */
    NbLayoutScrollService.prototype.onManualScroll = function () {
        return this.manualScroll$.pipe(rxjs_operators.share());
    };
    /**
     * @private
     * @returns {Subject<any>}
     */
    NbLayoutScrollService.prototype.onGetPosition = function () {
        return this.scrollPositionReq$;
    };
    NbLayoutScrollService.prototype.onScrollableChange = function () {
        return this.scrollable$.pipe(rxjs_operators.share());
    };
    /**
     * @private
     * @param {any} event
     */
    NbLayoutScrollService.prototype.fireScrollChange = function (event) {
        this.scroll$.next(event);
    };
    NbLayoutScrollService.prototype.scrollable = function (scrollable) {
        this.scrollable$.next(scrollable);
    };
    NbLayoutScrollService = __decorate$6([
        i0.Injectable()
    ], NbLayoutScrollService);
    return NbLayoutScrollService;
}());

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Simple helper service to return Layout dimensions
 * Depending of current Layout scroll mode (default or `withScroll` when scroll is moved to an element
 * inside of the layout) corresponding dimensions will be returns  - of `documentElement` in first case and
 * `.scrollable-container` in the second.
 */
var NbLayoutRulerService = /** @class */ (function () {
    function NbLayoutRulerService() {
        this.contentDimensionsReq$ = new rxjs.Subject();
    }
    /**
     * Content dimensions
     * @returns {Observable<NbLayoutDimensions>}
     */
    NbLayoutRulerService.prototype.getDimensions = function () {
        var _this = this;
        return rxjs.Observable.create(function (observer) {
            var listener = new rxjs.Subject();
            listener.subscribe(observer);
            _this.contentDimensionsReq$.next({ listener: listener });
            return function () { return listener.complete(); };
        });
    };
    /**
     * @private
     * @returns {Subject<any>}
     */
    NbLayoutRulerService.prototype.onGetDimensions = function () {
        return this.contentDimensionsReq$;
    };
    NbLayoutRulerService = __decorate$7([
        i0.Injectable()
    ], NbLayoutRulerService);
    return NbLayoutRulerService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbSharedModule = /** @class */ (function () {
    function NbSharedModule() {
    }
    NbSharedModule = __decorate$9([
        i0.NgModule({
            exports: [
                i1.CommonModule,
                // TODO: probably we don't need FormsModule in SharedModule
                _angular_forms.FormsModule,
                _angular_router.RouterModule,
            ],
        })
    ], NbSharedModule);
    return NbSharedModule;
}());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$5 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Overrides angular cdk focus trap to keep restore functionality inside trap.
 * */
var NbFocusTrap = /** @class */ (function (_super) {
    __extends(NbFocusTrap, _super);
    function NbFocusTrap(element, checker, ngZone, document, deferAnchors) {
        var _this = _super.call(this, element, checker, ngZone, document, deferAnchors) || this;
        _this.element = element;
        _this.checker = checker;
        _this.ngZone = ngZone;
        _this.document = document;
        _this.savePreviouslyFocusedElement();
        return _this;
    }
    NbFocusTrap.prototype.restoreFocus = function () {
        this.previouslyFocusedElement.focus();
        this.destroy();
    };
    NbFocusTrap.prototype.blurPreviouslyFocusedElement = function () {
        this.previouslyFocusedElement.blur();
    };
    NbFocusTrap.prototype.savePreviouslyFocusedElement = function () {
        this.previouslyFocusedElement = this.document.activeElement;
    };
    return NbFocusTrap;
}(_angular_cdk_a11y.FocusTrap));
var NbFocusTrapFactoryService = /** @class */ (function (_super) {
    __extends(NbFocusTrapFactoryService, _super);
    function NbFocusTrapFactoryService(checker, ngZone, document) {
        var _this = _super.call(this, checker, ngZone, document) || this;
        _this.checker = checker;
        _this.ngZone = ngZone;
        _this.document = document;
        return _this;
    }
    NbFocusTrapFactoryService.prototype.create = function (element, deferCaptureElements) {
        return new NbFocusTrap(element, this.checker, this.ngZone, this.document, deferCaptureElements);
    };
    NbFocusTrapFactoryService = __decorate$11([
        i0.Injectable(),
        __param$5(2, i0.Inject(NB_DOCUMENT)),
        __metadata$5("design:paramtypes", [_angular_cdk_a11y.InteractivityChecker,
            i0.NgZone, Object])
    ], NbFocusTrapFactoryService);
    return NbFocusTrapFactoryService;
}(_angular_cdk_a11y.FocusTrapFactory));

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbA11yModule = /** @class */ (function () {
    function NbA11yModule() {
    }
    NbA11yModule_1 = NbA11yModule;
    NbA11yModule.forRoot = function () {
        return {
            ngModule: NbA11yModule_1,
            providers: [NbFocusTrapFactoryService],
        };
    };
    var NbA11yModule_1;
    NbA11yModule = NbA11yModule_1 = __decorate$10([
        i0.NgModule({})
    ], NbA11yModule);
    return NbA11yModule;
}());

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$6 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NbPortalDirective = /** @class */ (function (_super) {
    __extends$1(NbPortalDirective, _super);
    function NbPortalDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPortalDirective = __decorate$12([
        i0.Directive({ selector: '[nbPortal]' })
    ], NbPortalDirective);
    return NbPortalDirective;
}(_angular_cdk_portal.CdkPortal));
var NbPortalOutletDirective = /** @class */ (function (_super) {
    __extends$1(NbPortalOutletDirective, _super);
    function NbPortalOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPortalOutletDirective = __decorate$12([
        i0.Directive({ selector: '[nbPortalOutlet]' })
    ], NbPortalOutletDirective);
    return NbPortalOutletDirective;
}(_angular_cdk_portal.CdkPortalOutlet));
var NbComponentPortal = /** @class */ (function (_super) {
    __extends$1(NbComponentPortal, _super);
    function NbComponentPortal(component, vcr, injector, cfr) {
        var _this = _super.call(this, component, vcr, injector) || this;
        _this.cfr = cfr;
        return _this;
    }
    return NbComponentPortal;
}(_angular_cdk_portal.ComponentPortal));
/**
 * TODO remove after @angular/cdk@7.0.0 relased
 * */
var NbDomPortalOutlet = /** @class */ (function (_super) {
    __extends$1(NbDomPortalOutlet, _super);
    function NbDomPortalOutlet(
    /** Element into which the content is projected. */
    outletElement, componentFactoryResolver, appRef, defaultInjector) {
        var _this = _super.call(this, outletElement, componentFactoryResolver, appRef, defaultInjector) || this;
        _this.outletElement = outletElement;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.appRef = appRef;
        _this.defaultInjector = defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    NbDomPortalOutlet.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        var resolver = portal.cfr || this.componentFactoryResolver;
        var componentFactory = resolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this.defaultInjector);
            this.appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this.appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this.getComponentRootNode(componentRef));
        return componentRef;
    };
    /** Gets the root HTMLElement for an instantiated component. */
    NbDomPortalOutlet.prototype.getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return NbDomPortalOutlet;
}(_angular_cdk_portal.DomPortalOutlet));
var NbOverlay = /** @class */ (function (_super) {
    __extends$1(NbOverlay, _super);
    function NbOverlay(
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies, overlayContainer, componentFactoryResolver, positionBuilder, keyboardDispatcher, injector, ngZone, document, directionality) {
        var _this = _super.call(this, scrollStrategies, overlayContainer, componentFactoryResolver, positionBuilder, keyboardDispatcher, injector, ngZone, document, directionality) || this;
        _this.scrollStrategies = scrollStrategies;
        _this.overlayContainer = overlayContainer;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.positionBuilder = positionBuilder;
        _this.keyboardDispatcher = keyboardDispatcher;
        _this.injector = injector;
        _this.ngZone = ngZone;
        _this.document = document;
        _this.directionality = directionality;
        return _this;
    }
    NbOverlay_1 = NbOverlay;
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    NbOverlay.prototype.create = function (config) {
        var host = this.createHostElement();
        var pane = this.createPaneElement(host);
        var portalOutlet = this.createPortalOutlet(pane);
        var overlayConfig = new _angular_cdk_overlay.OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this.directionality.value;
        return new _angular_cdk_overlay.OverlayRef(portalOutlet, host, pane, overlayConfig, this.ngZone, this.keyboardDispatcher, this.document);
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    NbOverlay.prototype.createPaneElement = function (host) {
        var pane = this.document.createElement('div');
        pane.id = "cdk-overlay-" + NbOverlay_1.nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    };
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @returns Newly-create host element.
     */
    NbOverlay.prototype.createHostElement = function () {
        var host = this.document.createElement('div');
        this.overlayContainer.getContainerElement().appendChild(host);
        return host;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal outlet.
     * @returns A portal outlet for the given DOM element.
     */
    NbOverlay.prototype.createPortalOutlet = function (pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this.appRef) {
            this.appRef = this.injector.get(i0.ApplicationRef);
        }
        return new NbDomPortalOutlet(pane, this.componentFactoryResolver, this.appRef, this.injector);
    };
    var NbOverlay_1;
    NbOverlay.nextUniqueId = 0;
    NbOverlay = NbOverlay_1 = __decorate$12([
        i0.Injectable(),
        __param$6(7, i0.Inject(NB_DOCUMENT)),
        __metadata$6("design:paramtypes", [_angular_cdk_overlay.ScrollStrategyOptions,
            _angular_cdk_overlay.OverlayContainer,
            i0.ComponentFactoryResolver,
            _angular_cdk_overlay.OverlayPositionBuilder,
            _angular_cdk_overlay.OverlayKeyboardDispatcher,
            i0.Injector,
            i0.NgZone, Object, _angular_cdk_bidi.Directionality])
    ], NbOverlay);
    return NbOverlay;
}(_angular_cdk_overlay.Overlay));
var NbPlatform = /** @class */ (function (_super) {
    __extends$1(NbPlatform, _super);
    function NbPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPlatform = __decorate$12([
        i0.Injectable()
    ], NbPlatform);
    return NbPlatform;
}(_angular_cdk_platform.Platform));
var NbOverlayPositionBuilder = /** @class */ (function (_super) {
    __extends$1(NbOverlayPositionBuilder, _super);
    function NbOverlayPositionBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayPositionBuilder = __decorate$12([
        i0.Injectable()
    ], NbOverlayPositionBuilder);
    return NbOverlayPositionBuilder;
}(_angular_cdk_overlay.OverlayPositionBuilder));
var NbTemplatePortal = /** @class */ (function (_super) {
    __extends$1(NbTemplatePortal, _super);
    function NbTemplatePortal(template, viewContainerRef, context) {
        return _super.call(this, template, viewContainerRef, context) || this;
    }
    return NbTemplatePortal;
}(_angular_cdk_portal.TemplatePortal));
var NbOverlayContainer = /** @class */ (function (_super) {
    __extends$1(NbOverlayContainer, _super);
    function NbOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayContainer.ngInjectableDef = i0.defineInjectable({ factory: function NbOverlayContainer_Factory() { return new NbOverlayContainer(i0.inject(i1.DOCUMENT)); }, token: NbOverlayContainer, providedIn: "root" });
    return NbOverlayContainer;
}(_angular_cdk_overlay.OverlayContainer));
var NbFlexibleConnectedPositionStrategy = /** @class */ (function (_super) {
    __extends$1(NbFlexibleConnectedPositionStrategy, _super);
    function NbFlexibleConnectedPositionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbFlexibleConnectedPositionStrategy;
}(_angular_cdk_overlay.FlexibleConnectedPositionStrategy));
var NbPortalInjector = /** @class */ (function (_super) {
    __extends$1(NbPortalInjector, _super);
    function NbPortalInjector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbPortalInjector;
}(_angular_cdk_portal.PortalInjector));
var CDK_MODULES = [_angular_cdk_overlay.OverlayModule, _angular_cdk_portal.PortalModule];
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
var NbCdkMappingModule = /** @class */ (function () {
    function NbCdkMappingModule() {
    }
    NbCdkMappingModule_1 = NbCdkMappingModule;
    NbCdkMappingModule.forRoot = function () {
        return {
            ngModule: NbCdkMappingModule_1,
            providers: [
                NbOverlay,
                NbPlatform,
                NbOverlayPositionBuilder,
            ],
        };
    };
    var NbCdkMappingModule_1;
    NbCdkMappingModule = NbCdkMappingModule_1 = __decorate$12([
        i0.NgModule({
            imports: CDK_MODULES.slice(),
            exports: CDK_MODULES.concat([
                NbPortalDirective,
                NbPortalOutletDirective,
            ]),
            declarations: [NbPortalDirective, NbPortalOutletDirective],
        })
    ], NbCdkMappingModule);
    return NbCdkMappingModule;
}());

var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbViewportRulerAdapter = /** @class */ (function (_super) {
    __extends$3(NbViewportRulerAdapter, _super);
    function NbViewportRulerAdapter(platform, ngZone, ruler, scroll) {
        var _this = _super.call(this, platform, ngZone) || this;
        _this.ruler = ruler;
        _this.scroll = scroll;
        return _this;
    }
    NbViewportRulerAdapter.prototype.getViewportSize = function () {
        var res;
        /*
        * getDimensions call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.ruler.getDimensions()
            .pipe(rxjs_operators.map(function (dimensions) { return ({ width: dimensions.clientWidth, height: dimensions.clientHeight }); }))
            .subscribe(function (rect) { return res = rect; });
        return res;
    };
    NbViewportRulerAdapter.prototype.getViewportScrollPosition = function () {
        var res;
        /*
        * getPosition call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.scroll.getPosition()
            .pipe(rxjs_operators.map(function (position) { return ({ top: position.y, left: position.x }); }))
            .subscribe(function (position) { return res = position; });
        return res;
    };
    NbViewportRulerAdapter = __decorate$14([
        i0.Injectable(),
        __metadata$8("design:paramtypes", [NbPlatform, i0.NgZone,
            NbLayoutRulerService,
            NbLayoutScrollService])
    ], NbViewportRulerAdapter);
    return NbViewportRulerAdapter;
}(_angular_cdk_overlay.ViewportRuler));

var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

(function (NbGlobalLogicalPosition) {
    NbGlobalLogicalPosition["TOP_START"] = "top-start";
    NbGlobalLogicalPosition["TOP_END"] = "top-end";
    NbGlobalLogicalPosition["BOTTOM_START"] = "bottom-start";
    NbGlobalLogicalPosition["BOTTOM_END"] = "bottom-end";
})(exports.NbGlobalLogicalPosition || (exports.NbGlobalLogicalPosition = {}));

(function (NbGlobalPhysicalPosition) {
    NbGlobalPhysicalPosition["TOP_RIGHT"] = "top-right";
    NbGlobalPhysicalPosition["TOP_LEFT"] = "top-left";
    NbGlobalPhysicalPosition["BOTTOM_RIGHT"] = "bottom-right";
    NbGlobalPhysicalPosition["BOTTOM_LEFT"] = "bottom-left";
})(exports.NbGlobalPhysicalPosition || (exports.NbGlobalPhysicalPosition = {}));
var NbPositionHelper = /** @class */ (function () {
    function NbPositionHelper(layoutDirection) {
        this.layoutDirection = layoutDirection;
    }
    NbPositionHelper.prototype.toLogicalPosition = function (position) {
        if (Object.values(exports.NbGlobalLogicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toLogicalPositionWhenLtr(position);
        }
        else {
            return this.toLogicalPositionWhenRtl(position);
        }
    };
    NbPositionHelper.prototype.toPhysicalPosition = function (position) {
        if (Object.values(exports.NbGlobalPhysicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toPhysicalPositionWhenLtr(position);
        }
        else {
            return this.toPhysicalPositionWhenRtl(position);
        }
    };
    NbPositionHelper.prototype.isTopPosition = function (position) {
        var logicalPosition = this.toLogicalPosition(position);
        return logicalPosition === exports.NbGlobalLogicalPosition.TOP_END
            || logicalPosition === exports.NbGlobalLogicalPosition.TOP_START;
    };
    NbPositionHelper.prototype.isRightPosition = function (position) {
        var physicalPosition = this.toPhysicalPosition(position);
        return physicalPosition === exports.NbGlobalPhysicalPosition.TOP_RIGHT
            || physicalPosition === exports.NbGlobalPhysicalPosition.BOTTOM_RIGHT;
    };
    NbPositionHelper.prototype.toLogicalPositionWhenLtr = function (position) {
        switch (position) {
            case exports.NbGlobalPhysicalPosition.TOP_RIGHT:
                return exports.NbGlobalLogicalPosition.TOP_END;
            case exports.NbGlobalPhysicalPosition.TOP_LEFT:
                return exports.NbGlobalLogicalPosition.TOP_START;
            case exports.NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return exports.NbGlobalLogicalPosition.BOTTOM_END;
            case exports.NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return exports.NbGlobalLogicalPosition.BOTTOM_START;
        }
    };
    NbPositionHelper.prototype.toLogicalPositionWhenRtl = function (position) {
        switch (position) {
            case exports.NbGlobalPhysicalPosition.TOP_RIGHT:
                return exports.NbGlobalLogicalPosition.TOP_START;
            case exports.NbGlobalPhysicalPosition.TOP_LEFT:
                return exports.NbGlobalLogicalPosition.TOP_END;
            case exports.NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return exports.NbGlobalLogicalPosition.BOTTOM_START;
            case exports.NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return exports.NbGlobalLogicalPosition.BOTTOM_END;
        }
    };
    NbPositionHelper.prototype.toPhysicalPositionWhenLtr = function (position) {
        switch (position) {
            case exports.NbGlobalLogicalPosition.TOP_START:
                return exports.NbGlobalPhysicalPosition.TOP_LEFT;
            case exports.NbGlobalLogicalPosition.TOP_END:
                return exports.NbGlobalPhysicalPosition.TOP_RIGHT;
            case exports.NbGlobalLogicalPosition.BOTTOM_START:
                return exports.NbGlobalPhysicalPosition.BOTTOM_LEFT;
            case exports.NbGlobalLogicalPosition.BOTTOM_END:
                return exports.NbGlobalPhysicalPosition.BOTTOM_RIGHT;
        }
    };
    NbPositionHelper.prototype.toPhysicalPositionWhenRtl = function (position) {
        switch (position) {
            case exports.NbGlobalLogicalPosition.TOP_START:
                return exports.NbGlobalPhysicalPosition.TOP_RIGHT;
            case exports.NbGlobalLogicalPosition.TOP_END:
                return exports.NbGlobalPhysicalPosition.TOP_LEFT;
            case exports.NbGlobalLogicalPosition.BOTTOM_START:
                return exports.NbGlobalPhysicalPosition.BOTTOM_RIGHT;
            case exports.NbGlobalLogicalPosition.BOTTOM_END:
                return exports.NbGlobalPhysicalPosition.BOTTOM_LEFT;
        }
    };
    NbPositionHelper = __decorate$15([
        i0.Injectable(),
        __metadata$9("design:paramtypes", [NbLayoutDirectionService])
    ], NbPositionHelper);
    return NbPositionHelper;
}());

var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$7 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;

(function (NbAdjustment) {
    NbAdjustment["NOOP"] = "noop";
    NbAdjustment["CLOCKWISE"] = "clockwise";
    NbAdjustment["COUNTERCLOCKWISE"] = "counterclockwise";
    NbAdjustment["VERTICAL"] = "vertical";
    NbAdjustment["HORIZONTAL"] = "horizontal";
})(exports.NbAdjustment || (exports.NbAdjustment = {}));

(function (NbPosition) {
    NbPosition["TOP"] = "top";
    NbPosition["BOTTOM"] = "bottom";
    NbPosition["LEFT"] = "left";
    NbPosition["RIGHT"] = "right";
    NbPosition["START"] = "start";
    NbPosition["END"] = "end";
})(exports.NbPosition || (exports.NbPosition = {}));
var POSITIONS = (_a = {},
    _a[exports.NbPosition.RIGHT] = function (offset) {
        return { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: offset };
    },
    _a[exports.NbPosition.BOTTOM] = function (offset) {
        return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: offset };
    },
    _a[exports.NbPosition.LEFT] = function (offset) {
        return { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -offset };
    },
    _a[exports.NbPosition.TOP] = function (offset) {
        return { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -offset };
    },
    _a);
var COUNTER_CLOCKWISE_POSITIONS = [exports.NbPosition.TOP, exports.NbPosition.LEFT, exports.NbPosition.BOTTOM, exports.NbPosition.RIGHT];
var NOOP_POSITIONS = [exports.NbPosition.TOP, exports.NbPosition.BOTTOM, exports.NbPosition.LEFT, exports.NbPosition.RIGHT];
var CLOCKWISE_POSITIONS = [exports.NbPosition.TOP, exports.NbPosition.RIGHT, exports.NbPosition.BOTTOM, exports.NbPosition.LEFT];
var VERTICAL_POSITIONS = [exports.NbPosition.BOTTOM, exports.NbPosition.TOP];
var HORIZONTAL_POSITIONS = [exports.NbPosition.START, exports.NbPosition.END];
function comparePositions(p1, p2) {
    return p1.originX === p2.originX
        && p1.originY === p2.originY
        && p1.overlayX === p2.overlayX
        && p1.overlayY === p2.overlayY;
}
/**
 * The main idea of the adjustable connected strategy is to provide predefined set of positions for your overlay.
 * You have to provide adjustment and appropriate strategy will be chosen in runtime.
 * */
var NbAdjustableConnectedPositionStrategy = /** @class */ (function (_super) {
    __extends$2(NbAdjustableConnectedPositionStrategy, _super);
    function NbAdjustableConnectedPositionStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._offset = 15;
        _this.positionChange = _this.positionChanges.pipe(rxjs_operators.map(function (positionChange) { return positionChange.connectionPair; }), rxjs_operators.map(function (connectionPair) {
            return _this.appliedPositions.find(function (_a) {
                var connectedPosition = _a.connectedPosition;
                return comparePositions(connectedPosition, connectionPair);
            }).key;
        }));
        return _this;
    }
    NbAdjustableConnectedPositionStrategy.prototype.attach = function (overlayRef) {
        /**
         * We have to apply positions before attach because super.attach() validates positions and crashes app
         * if no positions provided.
         * */
        this.applyPositions();
        _super.prototype.attach.call(this, overlayRef);
    };
    NbAdjustableConnectedPositionStrategy.prototype.apply = function () {
        this.applyPositions();
        _super.prototype.apply.call(this);
    };
    NbAdjustableConnectedPositionStrategy.prototype.position = function (position) {
        this._position = position;
        return this;
    };
    NbAdjustableConnectedPositionStrategy.prototype.adjustment = function (adjustment) {
        this._adjustment = adjustment;
        return this;
    };
    NbAdjustableConnectedPositionStrategy.prototype.offset = function (offset) {
        this._offset = offset;
        return this;
    };
    NbAdjustableConnectedPositionStrategy.prototype.applyPositions = function () {
        var positions = this.createPositions();
        this.persistChosenPositions(positions);
        this.withPositions(this.appliedPositions.map(function (_a) {
            var connectedPosition = _a.connectedPosition;
            return connectedPosition;
        }));
    };
    NbAdjustableConnectedPositionStrategy.prototype.createPositions = function () {
        var _this = this;
        switch (this._adjustment) {
            case exports.NbAdjustment.NOOP:
                return NOOP_POSITIONS.filter(function (position) { return _this._position === position; });
            case exports.NbAdjustment.CLOCKWISE:
                return this.reorderPreferredPositions(CLOCKWISE_POSITIONS);
            case exports.NbAdjustment.COUNTERCLOCKWISE:
                return this.reorderPreferredPositions(COUNTER_CLOCKWISE_POSITIONS);
            case exports.NbAdjustment.HORIZONTAL:
                return this.reorderPreferredPositions(HORIZONTAL_POSITIONS);
            case exports.NbAdjustment.VERTICAL:
                return this.reorderPreferredPositions(VERTICAL_POSITIONS);
        }
    };
    NbAdjustableConnectedPositionStrategy.prototype.persistChosenPositions = function (positions) {
        var _this = this;
        this.appliedPositions = positions.map(function (position) { return ({
            key: position,
            connectedPosition: POSITIONS[position](_this._offset),
        }); });
    };
    NbAdjustableConnectedPositionStrategy.prototype.reorderPreferredPositions = function (positions) {
        var cpy = positions.slice();
        var startIndex = positions.indexOf(this._position);
        var start = cpy.splice(startIndex);
        return start.concat.apply(start, cpy);
    };
    return NbAdjustableConnectedPositionStrategy;
}(NbFlexibleConnectedPositionStrategy));
var NbGlobalPositionStrategy = /** @class */ (function (_super) {
    __extends$2(NbGlobalPositionStrategy, _super);
    function NbGlobalPositionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbGlobalPositionStrategy.prototype.position = function (position) {
        switch (position) {
            case exports.NbGlobalLogicalPosition.TOP_START:
                return this.top().left();
            case exports.NbGlobalLogicalPosition.TOP_END:
                return this.top().right();
            case exports.NbGlobalLogicalPosition.BOTTOM_START:
                return this.bottom().left();
            case exports.NbGlobalLogicalPosition.BOTTOM_END:
                return this.bottom().right();
        }
    };
    return NbGlobalPositionStrategy;
}(_angular_cdk_overlay.GlobalPositionStrategy));
var NbPositionBuilderService = /** @class */ (function () {
    function NbPositionBuilderService(document, viewportRuler, platform, positionBuilder) {
        this.document = document;
        this.viewportRuler = viewportRuler;
        this.platform = platform;
        this.positionBuilder = positionBuilder;
    }
    NbPositionBuilderService.prototype.global = function () {
        return new NbGlobalPositionStrategy();
    };
    NbPositionBuilderService.prototype.connectedTo = function (elementRef) {
        return new NbAdjustableConnectedPositionStrategy(elementRef, this.viewportRuler, this.document, this.platform)
            .withFlexibleDimensions(false)
            .withPush(false);
    };
    NbPositionBuilderService = __decorate$13([
        i0.Injectable(),
        __param$7(0, i0.Inject(NB_DOCUMENT)),
        __metadata$7("design:paramtypes", [Object, NbViewportRulerAdapter,
            NbPlatform,
            NbOverlayPositionBuilder])
    ], NbPositionBuilderService);
    return NbPositionBuilderService;
}());

var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbPositionedContainer = /** @class */ (function () {
    function NbPositionedContainer() {
    }
    Object.defineProperty(NbPositionedContainer.prototype, "top", {
        get: function () {
            return this.position === exports.NbPosition.TOP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPositionedContainer.prototype, "right", {
        get: function () {
            return this.position === exports.NbPosition.RIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPositionedContainer.prototype, "bottom", {
        get: function () {
            return this.position === exports.NbPosition.BOTTOM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPositionedContainer.prototype, "left", {
        get: function () {
            return this.position === exports.NbPosition.LEFT;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$16([
        i0.Input(),
        __metadata$10("design:type", String)
    ], NbPositionedContainer.prototype, "position", void 0);
    __decorate$16([
        i0.HostBinding('class.nb-overlay-top'),
        __metadata$10("design:type", Boolean),
        __metadata$10("design:paramtypes", [])
    ], NbPositionedContainer.prototype, "top", null);
    __decorate$16([
        i0.HostBinding('class.nb-overlay-right'),
        __metadata$10("design:type", Boolean),
        __metadata$10("design:paramtypes", [])
    ], NbPositionedContainer.prototype, "right", null);
    __decorate$16([
        i0.HostBinding('class.nb-overlay-bottom'),
        __metadata$10("design:type", Boolean),
        __metadata$10("design:paramtypes", [])
    ], NbPositionedContainer.prototype, "bottom", null);
    __decorate$16([
        i0.HostBinding('class.nb-overlay-left'),
        __metadata$10("design:type", Boolean),
        __metadata$10("design:paramtypes", [])
    ], NbPositionedContainer.prototype, "left", null);
    return NbPositionedContainer;
}());
var NbOverlayContainerComponent = /** @class */ (function () {
    function NbOverlayContainerComponent(vcr, injector) {
        this.vcr = vcr;
        this.injector = injector;
        this.isAttached = false;
    }
    Object.defineProperty(NbOverlayContainerComponent.prototype, "isStringContent", {
        get: function () {
            return !!this.content;
        },
        enumerable: true,
        configurable: true
    });
    NbOverlayContainerComponent.prototype.attachComponentPortal = function (portal) {
        var factory = portal.cfr.resolveComponentFactory(portal.component);
        var injector = this.createChildInjector(portal.cfr);
        var componentRef = this.vcr.createComponent(factory, null, injector);
        this.isAttached = true;
        return componentRef;
    };
    NbOverlayContainerComponent.prototype.attachTemplatePortal = function (portal) {
        var embeddedView = this.vcr.createEmbeddedView(portal.templateRef, portal.context);
        this.isAttached = true;
        return embeddedView;
    };
    NbOverlayContainerComponent.prototype.attachStringContent = function (content) {
        this.content = content;
        this.isAttached = true;
    };
    NbOverlayContainerComponent.prototype.createChildInjector = function (cfr) {
        return new NbPortalInjector(this.injector, new WeakMap([
            [i0.ComponentFactoryResolver, cfr],
        ]));
    };
    NbOverlayContainerComponent = __decorate$16([
        i0.Component({
            selector: 'nb-overlay-container',
            template: "\n    <div *ngIf=\"isStringContent\" class=\"primitive-overlay\">{{ content }}</div>\n  ",
        }),
        __metadata$10("design:paramtypes", [i0.ViewContainerRef, i0.Injector])
    ], NbOverlayContainerComponent);
    return NbOverlayContainerComponent;
}());

var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function patch(container, containerContext) {
    Object.assign(container.instance, containerContext);
    container.changeDetectorRef.detectChanges();
    return container;
}
function createContainer(ref, container, context, componentFactoryResolver) {
    var containerRef = ref.attach(new NbComponentPortal(container, null, null, componentFactoryResolver));
    patch(containerRef, context);
    return containerRef;
}
var NbOverlayService = /** @class */ (function () {
    function NbOverlayService(overlay, layoutDirection) {
        this.overlay = overlay;
        this.layoutDirection = layoutDirection;
    }
    Object.defineProperty(NbOverlayService.prototype, "scrollStrategies", {
        get: function () {
            return this.overlay.scrollStrategies;
        },
        enumerable: true,
        configurable: true
    });
    NbOverlayService.prototype.create = function (config) {
        var overlayRef = this.overlay.create(config);
        this.layoutDirection.onDirectionChange()
            .subscribe(function (dir) { return overlayRef.setDirection(dir); });
        return overlayRef;
    };
    NbOverlayService = __decorate$17([
        i0.Injectable(),
        __metadata$11("design:paramtypes", [NbOverlay, NbLayoutDirectionService])
    ], NbOverlayService);
    return NbOverlayService;
}());

var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$19 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Provides nb-layout as overlay container.
 * Container has to be cleared when layout destroys.
 * Another way previous version of the container will be used
 * but it isn't inserted in DOM and exists in memory only.
 * This case important only if you switch between multiple layouts.
 * */
var NbOverlayContainerAdapter = /** @class */ (function (_super) {
    __extends$4(NbOverlayContainerAdapter, _super);
    function NbOverlayContainerAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayContainerAdapter.prototype.setContainer = function (container) {
        this.container = container;
    };
    NbOverlayContainerAdapter.prototype.clearContainer = function () {
        this.container = null;
        this._containerElement = null;
    };
    NbOverlayContainerAdapter.prototype._createContainer = function () {
        var container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this.container.appendChild(container);
        this._containerElement = container;
    };
    NbOverlayContainerAdapter = __decorate$19([
        i0.Injectable()
    ], NbOverlayContainerAdapter);
    return NbOverlayContainerAdapter;
}(NbOverlayContainer));

var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$20 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbScrollDispatcherAdapter = /** @class */ (function (_super) {
    __extends$5(NbScrollDispatcherAdapter, _super);
    function NbScrollDispatcherAdapter(ngZone, platform, scrollService) {
        var _this = _super.call(this, ngZone, platform) || this;
        _this.scrollService = scrollService;
        return _this;
    }
    NbScrollDispatcherAdapter.prototype.scrolled = function (auditTimeInMs) {
        return this.scrollService.onScroll();
    };
    NbScrollDispatcherAdapter = __decorate$20([
        i0.Injectable(),
        __metadata$12("design:paramtypes", [i0.NgZone, NbPlatform, NbLayoutScrollService])
    ], NbScrollDispatcherAdapter);
    return NbScrollDispatcherAdapter;
}(_angular_cdk_overlay.ScrollDispatcher));

var __extends$6 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$21 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$8 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Overrides default block scroll strategy because default strategy blocks scrolling on the body only.
 * But Nebular has its own scrollable container - nb-layout. So, we need to block scrolling in it to.
 * */
var NbBlockScrollStrategyAdapter = /** @class */ (function (_super) {
    __extends$6(NbBlockScrollStrategyAdapter, _super);
    function NbBlockScrollStrategyAdapter(document, viewportRuler, scrollService) {
        var _this = _super.call(this, viewportRuler, document) || this;
        _this.scrollService = scrollService;
        return _this;
    }
    NbBlockScrollStrategyAdapter.prototype.enable = function () {
        _super.prototype.enable.call(this);
        this.scrollService.scrollable(false);
    };
    NbBlockScrollStrategyAdapter.prototype.disable = function () {
        _super.prototype.disable.call(this);
        this.scrollService.scrollable(true);
    };
    NbBlockScrollStrategyAdapter = __decorate$21([
        i0.Injectable(),
        __param$8(0, i0.Inject(NB_DOCUMENT)),
        __metadata$13("design:paramtypes", [Object, NbViewportRulerAdapter,
            NbLayoutScrollService])
    ], NbBlockScrollStrategyAdapter);
    return NbBlockScrollStrategyAdapter;
}(_angular_cdk_overlay.BlockScrollStrategy));
var NbScrollStrategyOptions = /** @class */ (function (_super) {
    __extends$6(NbScrollStrategyOptions, _super);
    function NbScrollStrategyOptions(scrollService, scrollDispatcher, viewportRuler, ngZone, document) {
        var _this = _super.call(this, scrollDispatcher, viewportRuler, ngZone, document) || this;
        _this.scrollService = scrollService;
        _this.scrollDispatcher = scrollDispatcher;
        _this.viewportRuler = viewportRuler;
        _this.ngZone = ngZone;
        _this.document = document;
        _this.block = function () { return new NbBlockScrollStrategyAdapter(_this.document, _this.viewportRuler, _this.scrollService); };
        return _this;
    }
    NbScrollStrategyOptions.ngInjectableDef = i0.defineInjectable({ factory: function NbScrollStrategyOptions_Factory() { return new NbScrollStrategyOptions(i0.inject(NbLayoutScrollService), i0.inject(i2.ScrollDispatcher), i0.inject(NbViewportRulerAdapter), i0.inject(i0.NgZone), i0.inject(NB_DOCUMENT)); }, token: NbScrollStrategyOptions, providedIn: "root" });
    NbScrollStrategyOptions = __decorate$21([
        __param$8(4, i0.Inject(NB_DOCUMENT)),
        __metadata$13("design:paramtypes", [NbLayoutScrollService,
            _angular_cdk_overlay.ScrollDispatcher,
            NbViewportRulerAdapter,
            i0.NgZone, Object])
    ], NbScrollStrategyOptions);
    return NbScrollStrategyOptions;
}(_angular_cdk_overlay.ScrollStrategyOptions));

var __decorate$18 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbCdkAdapterModule = /** @class */ (function () {
    function NbCdkAdapterModule() {
    }
    NbCdkAdapterModule_1 = NbCdkAdapterModule;
    NbCdkAdapterModule.forRoot = function () {
        return {
            ngModule: NbCdkAdapterModule_1,
            providers: [
                NbViewportRulerAdapter,
                NbOverlayContainerAdapter,
                NbBlockScrollStrategyAdapter,
                { provide: _angular_cdk_overlay.OverlayContainer, useExisting: NbOverlayContainerAdapter },
                { provide: _angular_cdk_overlay.ScrollDispatcher, useClass: NbScrollDispatcherAdapter },
                { provide: _angular_cdk_overlay.ScrollStrategyOptions, useClass: NbScrollStrategyOptions },
            ],
        };
    };
    var NbCdkAdapterModule_1;
    NbCdkAdapterModule = NbCdkAdapterModule_1 = __decorate$18([
        i0.NgModule({})
    ], NbCdkAdapterModule);
    return NbCdkAdapterModule;
}());

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbOverlayModule = /** @class */ (function () {
    function NbOverlayModule() {
    }
    NbOverlayModule_1 = NbOverlayModule;
    NbOverlayModule.forRoot = function () {
        return {
            ngModule: NbOverlayModule_1,
            providers: [
                NbPositionBuilderService,
                NbOverlayService,
                NbPositionHelper
            ].concat(NbCdkMappingModule.forRoot().providers, NbCdkAdapterModule.forRoot().providers, NbA11yModule.forRoot().providers),
        };
    };
    var NbOverlayModule_1;
    NbOverlayModule = NbOverlayModule_1 = __decorate$8([
        i0.NgModule({
            imports: [
                NbCdkMappingModule,
                NbSharedModule,
            ],
            declarations: [NbOverlayContainerComponent],
            exports: [
                NbCdkMappingModule,
                NbCdkAdapterModule,
                NbOverlayContainerComponent,
            ],
        })
    ], NbOverlayModule);
    return NbOverlayModule;
}());

var __extends$7 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

(function (NbTrigger) {
    NbTrigger["CLICK"] = "click";
    NbTrigger["HOVER"] = "hover";
    NbTrigger["HINT"] = "hint";
    NbTrigger["FOCUS"] = "focus";
})(exports.NbTrigger || (exports.NbTrigger = {}));
/**
 * Provides entity with two event stream: show and hide.
 * Each stream provides different events depends on implementation.
 * We have three main trigger strategies: click, hint and hover.
 * */
/**
 * TODO maybe we have to use renderer.listen instead of observableFromEvent?
 * Renderer provides capability use it in service worker, ssr and so on.
 * */
var NbTriggerStrategy = /** @class */ (function () {
    function NbTriggerStrategy(document, host, container) {
        this.document = document;
        this.host = host;
        this.container = container;
    }
    NbTriggerStrategy.prototype.isNotOnHostOrContainer = function (event) {
        return !this.isOnHost(event) && !this.isOnContainer(event);
    };
    NbTriggerStrategy.prototype.isOnHostOrContainer = function (event) {
        return this.isOnHost(event) || this.isOnContainer(event);
    };
    NbTriggerStrategy.prototype.isOnHost = function (_a) {
        var target = _a.target;
        return this.host.contains(target);
    };
    NbTriggerStrategy.prototype.isOnContainer = function (_a) {
        var target = _a.target;
        return this.container() && this.container().location.nativeElement.contains(target);
    };
    NbTriggerStrategy.prototype.isElementInBody = function (element) {
        return this.document.body.contains(element);
    };
    NbTriggerStrategy.prototype.isHostInBody = function () {
        return this.isElementInBody(this.host);
    };
    return NbTriggerStrategy;
}());
/**
 * Creates show and hide event streams.
 * Fires toggle event when the click was performed on the host element.
 * Fires close event when the click was performed on the document but
 * not on the host or container.
 * */
var NbClickTriggerStrategy = /** @class */ (function (_super) {
    __extends$7(NbClickTriggerStrategy, _super);
    function NbClickTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // since we should track click for both SHOW and HIDE event we firstly need to track the click and the state
        // of the container and then later on decide should we hide it or show
        // if we track the click & state separately this will case a behavior when the container is getting shown
        // and then hidden right away
        _this.click$ = rxjs.fromEvent(_this.document, 'click')
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.map(function (event) { return [!_this.container() && _this.isOnHost(event), event]; }), rxjs_operators.share());
        _this.show$ = _this.click$
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.filter(function (_a) {
            var shouldShow = _a[0];
            return shouldShow;
        }), rxjs_operators.map(function (_a) {
            var event = _a[1];
            return event;
        }));
        _this.hide$ = _this.click$
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.filter(function (_a) {
            var shouldShow = _a[0], event = _a[1];
            return !shouldShow && !_this.isOnContainer(event);
        }), rxjs_operators.map(function (_a) {
            var event = _a[1];
            return event;
        }));
        return _this;
    }
    return NbClickTriggerStrategy;
}(NbTriggerStrategy));
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element and stops out of the host and popover container.
 * */
var NbHoverTriggerStrategy = /** @class */ (function (_super) {
    __extends$7(NbHoverTriggerStrategy, _super);
    function NbHoverTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show$ = rxjs.fromEvent(_this.host, 'mouseenter')
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.filter(function () { return !_this.container(); }), rxjs_operators.delay(100), rxjs_operators.takeUntil(rxjs.fromEvent(_this.host, 'mouseleave')), rxjs_operators.repeat());
        _this.hide$ = rxjs.fromEvent(_this.host, 'mouseleave')
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.switchMap(function () { return rxjs.fromEvent(_this.document, 'mousemove')
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.debounceTime(100), rxjs_operators.takeWhile(function () { return !!_this.container(); }), rxjs_operators.filter(function (event) { return _this.isNotOnHostOrContainer(event); })); }));
        return _this;
    }
    return NbHoverTriggerStrategy;
}(NbTriggerStrategy));
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element.
 * */
var NbHintTriggerStrategy = /** @class */ (function (_super) {
    __extends$7(NbHintTriggerStrategy, _super);
    function NbHintTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show$ = rxjs.fromEvent(_this.host, 'mouseenter')
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.delay(100), rxjs_operators.takeUntil(rxjs.fromEvent(_this.host, 'mouseleave')), 
        // this `delay & takeUntil & repeat` operators combination is a synonym for `conditional debounce`
        // meaning that if one event occurs in some time after the initial one we won't react to it
        rxjs_operators.repeat());
        _this.hide$ = rxjs.fromEvent(_this.host, 'mouseleave');
        return _this;
    }
    return NbHintTriggerStrategy;
}(NbTriggerStrategy));
/**
 * Creates show and hide event streams.
 * Fires open event when a focus is on the host element and stay over at least 100 milliseconds.
 * Fires close event when the focus leaves the host element.
 * */
var NbFocusTriggerStrategy = /** @class */ (function (_super) {
    __extends$7(NbFocusTriggerStrategy, _super);
    function NbFocusTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.focusOut$ = rxjs.fromEvent(_this.host, 'focusout')
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.switchMap(function () { return rxjs.fromEvent(_this.document, 'focusin')
            .pipe(rxjs_operators.takeWhile(function () { return !!_this.container(); }), rxjs_operators.filter(function (event) { return _this.isNotOnHostOrContainer(event); })); }));
        _this.clickIn$ = rxjs.fromEvent(_this.host, 'click')
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.filter(function () { return !_this.container(); }));
        _this.clickOut$ = rxjs.fromEvent(_this.document, 'click')
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.filter(function () { return !!_this.container(); }), rxjs_operators.filter(function (event) { return _this.isNotOnHostOrContainer(event); }));
        _this.tabKeyPress$ = rxjs.fromEvent(_this.document, 'keydown')
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.filter(function (event) { return event.keyCode === 9; }), rxjs_operators.filter(function () { return !!_this.container(); }));
        _this.show$ = rxjs.merge(rxjs.fromEvent(_this.host, 'focusin'), _this.clickIn$)
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }), rxjs_operators.filter(function () { return !_this.container(); }), rxjs_operators.debounceTime(100), rxjs_operators.takeUntil(rxjs.fromEvent(_this.host, 'focusout')), rxjs_operators.repeat());
        _this.hide$ = rxjs.merge(_this.focusOut$, _this.tabKeyPress$, _this.clickOut$)
            .pipe(rxjs_operators.takeWhile(function () { return _this.isHostInBody(); }));
        return _this;
    }
    return NbFocusTriggerStrategy;
}(NbTriggerStrategy));
var NbTriggerStrategyBuilder = /** @class */ (function () {
    function NbTriggerStrategyBuilder() {
    }
    NbTriggerStrategyBuilder.prototype.document = function (document) {
        this._document = document;
        return this;
    };
    NbTriggerStrategyBuilder.prototype.trigger = function (trigger$$1) {
        this._trigger = trigger$$1;
        return this;
    };
    NbTriggerStrategyBuilder.prototype.host = function (host) {
        this._host = host;
        return this;
    };
    NbTriggerStrategyBuilder.prototype.container = function (container) {
        this._container = container;
        return this;
    };
    NbTriggerStrategyBuilder.prototype.build = function () {
        switch (this._trigger) {
            case exports.NbTrigger.CLICK:
                return new NbClickTriggerStrategy(this._document, this._host, this._container);
            case exports.NbTrigger.HINT:
                return new NbHintTriggerStrategy(this._document, this._host, this._container);
            case exports.NbTrigger.HOVER:
                return new NbHoverTriggerStrategy(this._document, this._host, this._container);
            case exports.NbTrigger.FOCUS:
                return new NbFocusTriggerStrategy(this._document, this._host, this._container);
            default:
                throw new Error('Trigger have to be provided');
        }
    };
    return NbTriggerStrategyBuilder;
}());

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
function nbWindowFactory() {
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
                { provide: NB_DOCUMENT, useExisting: i1.DOCUMENT },
                NbJSThemesRegistry,
                NbThemeService,
                NbMediaBreakpointsService,
                NbSpinnerService,
                { provide: NB_LAYOUT_DIRECTION, useValue: layoutDirection || exports.NbLayoutDirection.LTR },
                NbLayoutDirectionService,
                NbLayoutScrollService,
                NbLayoutRulerService
            ].concat(NbOverlayModule.forRoot().providers),
        };
    };
    var NbThemeModule_1;
    NbThemeModule = NbThemeModule_1 = __decorate([
        i0.NgModule({
            imports: [
                i1.CommonModule,
            ],
            exports: [],
        })
    ], NbThemeModule);
    return NbThemeModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$23 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Component intended to be used within the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-font-family:
 * card-header-font-size:
 * card-header-font-weight:
 * card-header-fg:
 * card-header-fg-heading:
 * card-header-active-bg:
 * card-header-active-fg:
 * card-header-disabled-bg:
 * card-header-primary-bg:
 * card-header-info-bg:
 * card-header-success-bg:
 * card-header-warning-bg:
 * card-header-danger-bg:
 */
var NbCardHeaderComponent = /** @class */ (function () {
    function NbCardHeaderComponent() {
    }
    NbCardHeaderComponent = __decorate$23([
        i0.Component({
            selector: 'nb-card-header',
            template: "<ng-content></ng-content>",
        })
    ], NbCardHeaderComponent);
    return NbCardHeaderComponent;
}());
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
var NbCardBodyComponent = /** @class */ (function () {
    function NbCardBodyComponent() {
    }
    NbCardBodyComponent = __decorate$23([
        i0.Component({
            selector: 'nb-card-body',
            template: "<ng-content></ng-content>",
        })
    ], NbCardBodyComponent);
    return NbCardBodyComponent;
}());
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
var NbCardFooterComponent = /** @class */ (function () {
    function NbCardFooterComponent() {
    }
    NbCardFooterComponent = __decorate$23([
        i0.Component({
            selector: 'nb-card-footer',
            template: "<ng-content></ng-content>",
        })
    ], NbCardFooterComponent);
    return NbCardFooterComponent;
}());
/**
 * Basic content container component.
 *
 * Basic card example:
 * @stacked-example(Showcase, card/card-showcase.component)
 *
 * Basic card configuration:
 *
 * ```html
 * <nb-card>
 *   <nb-card-body>
 *     Card
 *   </nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Card with header and footer:
 * @stacked-example(With Header & Footer, card/card-full.component)
 *
 * Most of the time main card content goes to `nb-card-body`,
 * so it is styled and aligned in accordance with the header and footer.
 * In case you need a higher level of control, you can pass contend directly to `nb-card`,
 * so `nb-card-body` styling will not be applied.
 *
 * Consider an example with `nb-list` component:
 * @stacked-example(Showcase, card/card-without-body.component)
 *
 * Colored cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, card/card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, card/card-accents.component)
 *
 * @additional-example(Multiple Sizes, card/card-sizes.component)
 *
 * @styles
 *
 * card-line-height:
 * card-font-weight:
 * card-fg-text:
 * card-bg:
 * card-height-xxsmall:
 * card-height-xsmall:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-xlarge:
 * card-height-xxlarge:
 * card-shadow:
 * card-border-radius:
 * card-padding:
 * card-margin:
 * card-separator:
 *
 */
var NbCardComponent = /** @class */ (function () {
    function NbCardComponent() {
    }
    NbCardComponent_1 = NbCardComponent;
    Object.defineProperty(NbCardComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "small", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "medium", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "large", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbCardComponent_1.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "active", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primary", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "info", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "success", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warning", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "danger", {
        get: function () {
            return this.status === NbCardComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "hasAccent", {
        get: function () {
            return this.accent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primaryAccent", {
        get: function () {
            return this.accent === NbCardComponent_1.ACCENT_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "infoAccent", {
        get: function () {
            return this.accent === NbCardComponent_1.ACCENT_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "successAccent", {
        get: function () {
            return this.accent === NbCardComponent_1.ACCENT_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warningAccent", {
        get: function () {
            return this.accent === NbCardComponent_1.ACCENT_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "dangerAccent", {
        get: function () {
            return this.accent === NbCardComponent_1.ACCENT_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "activeAccent", {
        get: function () {
            return this.accent === NbCardComponent_1.ACCENT_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "disabledAccent", {
        get: function () {
            return this.accent === NbCardComponent_1.ACCENT_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setSize", {
        /**
         * Card size, available sizes:
         * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setStatus", {
        /**
         * Card status (adds specific styles):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setAccent", {
        /**
         * Card accent (color of the top border):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.accent = val;
        },
        enumerable: true,
        configurable: true
    });
    var NbCardComponent_1;
    NbCardComponent.SIZE_XXSMALL = 'xxsmall';
    NbCardComponent.SIZE_XSMALL = 'xsmall';
    NbCardComponent.SIZE_SMALL = 'small';
    NbCardComponent.SIZE_MEDIUM = 'medium';
    NbCardComponent.SIZE_LARGE = 'large';
    NbCardComponent.SIZE_XLARGE = 'xlarge';
    NbCardComponent.SIZE_XXLARGE = 'xxlarge';
    NbCardComponent.STATUS_ACTIVE = 'active';
    NbCardComponent.STATUS_DISABLED = 'disabled';
    NbCardComponent.STATUS_PRIMARY = 'primary';
    NbCardComponent.STATUS_INFO = 'info';
    NbCardComponent.STATUS_SUCCESS = 'success';
    NbCardComponent.STATUS_WARNING = 'warning';
    NbCardComponent.STATUS_DANGER = 'danger';
    NbCardComponent.ACCENT_ACTIVE = 'active';
    NbCardComponent.ACCENT_DISABLED = 'disabled';
    NbCardComponent.ACCENT_PRIMARY = 'primary';
    NbCardComponent.ACCENT_INFO = 'info';
    NbCardComponent.ACCENT_SUCCESS = 'success';
    NbCardComponent.ACCENT_WARNING = 'warning';
    NbCardComponent.ACCENT_DANGER = 'danger';
    __decorate$23([
        i0.HostBinding('class.xxsmall-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "xxsmall", null);
    __decorate$23([
        i0.HostBinding('class.xsmall-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "xsmall", null);
    __decorate$23([
        i0.HostBinding('class.small-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "small", null);
    __decorate$23([
        i0.HostBinding('class.medium-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "medium", null);
    __decorate$23([
        i0.HostBinding('class.large-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "large", null);
    __decorate$23([
        i0.HostBinding('class.xlarge-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "xlarge", null);
    __decorate$23([
        i0.HostBinding('class.xxlarge-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "xxlarge", null);
    __decorate$23([
        i0.HostBinding('class.active-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "active", null);
    __decorate$23([
        i0.HostBinding('class.disabled-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "disabled", null);
    __decorate$23([
        i0.HostBinding('class.primary-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "primary", null);
    __decorate$23([
        i0.HostBinding('class.info-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "info", null);
    __decorate$23([
        i0.HostBinding('class.success-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "success", null);
    __decorate$23([
        i0.HostBinding('class.warning-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "warning", null);
    __decorate$23([
        i0.HostBinding('class.danger-card'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "danger", null);
    __decorate$23([
        i0.HostBinding('class.accent'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "hasAccent", null);
    __decorate$23([
        i0.HostBinding('class.accent-primary'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "primaryAccent", null);
    __decorate$23([
        i0.HostBinding('class.accent-info'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "infoAccent", null);
    __decorate$23([
        i0.HostBinding('class.accent-success'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "successAccent", null);
    __decorate$23([
        i0.HostBinding('class.accent-warning'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "warningAccent", null);
    __decorate$23([
        i0.HostBinding('class.accent-danger'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "dangerAccent", null);
    __decorate$23([
        i0.HostBinding('class.accent-active'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "activeAccent", null);
    __decorate$23([
        i0.HostBinding('class.accent-disabled'),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [])
    ], NbCardComponent.prototype, "disabledAccent", null);
    __decorate$23([
        i0.Input('size'),
        __metadata$14("design:type", String),
        __metadata$14("design:paramtypes", [String])
    ], NbCardComponent.prototype, "setSize", null);
    __decorate$23([
        i0.Input('status'),
        __metadata$14("design:type", String),
        __metadata$14("design:paramtypes", [String])
    ], NbCardComponent.prototype, "setStatus", null);
    __decorate$23([
        i0.Input('accent'),
        __metadata$14("design:type", String),
        __metadata$14("design:paramtypes", [String])
    ], NbCardComponent.prototype, "setAccent", null);
    NbCardComponent = NbCardComponent_1 = __decorate$23([
        i0.Component({
            selector: 'nb-card',
            styles: [":host{display:flex;flex-direction:column} "],
            template: "\n    <ng-content select=\"nb-card-header\"></ng-content>\n    <ng-content select=\"nb-card-body\"></ng-content>\n    <ng-content></ng-content>\n    <ng-content select=\"nb-card-footer\"></ng-content>\n  ",
        })
    ], NbCardComponent);
    return NbCardComponent;
}());

var __decorate$24 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 *
 * Reveal card example:
 * @stacked-example(My example, reveal-card/reveal-card-showcase.component)
 *
 * As a content Reveal card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic reveal card configuration:
 *
 * ```html
 * <nb-reveal-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-reveal-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Reveal Card with header and footer:
 * @stacked-example(With Header & Footer, reveal-card/reveal-card-full.component)
 *
 * Colored reveal-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, reveal-card/reveal-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, reveal-card/reveal-card-accents.component)
 *
 * @additional-example(Multiple Sizes, reveal-card/reveal-card-sizes.component)
 */
var NbRevealCardComponent = /** @class */ (function () {
    function NbRevealCardComponent() {
        /**
         * Reveal state
         * @type boolean
         */
        this.revealed = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    NbRevealCardComponent.prototype.toggle = function () {
        this.revealed = !this.revealed;
    };
    __decorate$24([
        i0.Input(),
        i0.HostBinding('class.revealed'),
        __metadata$15("design:type", Boolean)
    ], NbRevealCardComponent.prototype, "revealed", void 0);
    __decorate$24([
        i0.Input(),
        __metadata$15("design:type", Object)
    ], NbRevealCardComponent.prototype, "showToggleButton", void 0);
    NbRevealCardComponent = __decorate$24([
        i0.Component({
            selector: 'nb-reveal-card',
            styles: [":host{display:block;position:relative;overflow:hidden}:host.revealed .second-card-container{top:0;transition:none}:host.revealed .second-card-container /deep/ nb-card-back{top:0}:host.revealed .reveal-button{transform:none}:host /deep/ nb-card-front{display:block;height:100%}:host .second-card-container{position:absolute;top:100%;right:0;left:0;overflow:hidden;transition:top 0s 0.5s}:host .second-card-container /deep/ nb-card-back{position:absolute;left:0;top:100%;width:100%;transition:top 0.5s}:host .reveal-button{cursor:pointer;position:absolute;right:0;bottom:0;transform:rotate(180deg);transition:transform 0.3s} "],
            template: "\n    <ng-content select=\"nb-card-front\"></ng-content>\n    <div class=\"second-card-container\">\n      <ng-content select=\"nb-card-back\"></ng-content>\n    </div>\n    <a *ngIf=\"showToggleButton\" class=\"reveal-button\" (click)=\"toggle()\">\n      <i class=\"nb-arrow-dropdown\" aria-hidden=\"true\"></i>\n    </a>\n  ",
        })
    ], NbRevealCardComponent);
    return NbRevealCardComponent;
}());

var __decorate$25 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 *
 * Flip card example:
 * @stacked-example(Showcase, flip-card/flip-card-showcase.component)
 *
 * As a content Flip card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic flip card configuration:
 *
 * ```html
 * <nb-flip-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-flip-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Flip Card with header and footer:
 * @stacked-example(With Header & Footer, flip-card/flip-card-full.component.ts)
 *
 * Colored flip-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, flip-card/flip-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, flip-card/flip-card-accents.component)
 *
 * @additional-example(Multiple Sizes, flip-card/flip-card-sizes.component)
 *
 */
var NbFlipCardComponent = /** @class */ (function () {
    function NbFlipCardComponent() {
        /**
         * Flip state
         * @type boolean
         */
        this.flipped = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    NbFlipCardComponent.prototype.toggle = function () {
        this.flipped = !this.flipped;
    };
    __decorate$25([
        i0.Input(),
        i0.HostBinding('class.flipped'),
        __metadata$16("design:type", Boolean)
    ], NbFlipCardComponent.prototype, "flipped", void 0);
    __decorate$25([
        i0.Input(),
        __metadata$16("design:type", Object)
    ], NbFlipCardComponent.prototype, "showToggleButton", void 0);
    NbFlipCardComponent = __decorate$25([
        i0.Component({
            selector: 'nb-flip-card',
            styles: [":host{display:block;perspective:1200px;position:relative}:host-context(.flipped) .flipcard-body{transform:rotateY(-180deg)}:host-context(.flipped) .flipcard-body .front-container{opacity:0;transition:opacity 0s 0.25s;backface-visibility:hidden}:host-context(.flipped) .flipcard-body .front-container .flip-button{opacity:0;z-index:-1}:host-context(.flipped) .flipcard-body .back-container{backface-visibility:visible}.flipcard-body{display:flex;transition:transform 0.5s;transform-style:preserve-3d}.flipcard-body .front-container,.flipcard-body .back-container{flex:1}.flipcard-body .front-container .flip-button,.flipcard-body .back-container .flip-button{cursor:pointer;position:absolute;right:0;bottom:0;opacity:1;transition:opacity 0s 0.15s}.flipcard-body .front-container{backface-visibility:visible;transition:opacity 0s 0.2s}.flipcard-body .back-container{backface-visibility:hidden;transform:rotateY(180deg)} "],
            template: "\n    <div class=\"flipcard-body\">\n      <div class=\"front-container\">\n        <ng-content select=\"nb-card-front\"></ng-content>\n        <a *ngIf=\"showToggleButton\" class=\"flip-button\" (click)=\"toggle()\">\n          <i class=\"nb-arrow-dropleft\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <div class=\"back-container\">\n        <ng-content select=\"nb-card-back\"></ng-content>\n        <a *ngIf=\"showToggleButton\" class=\"flip-button\" (click)=\"toggle()\">\n          <i class=\"nb-arrow-dropleft\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n  ",
        })
    ], NbFlipCardComponent);
    return NbFlipCardComponent;
}());

var __decorate$26 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the front card.
 */
var NbCardFrontComponent = /** @class */ (function () {
    function NbCardFrontComponent() {
    }
    NbCardFrontComponent = __decorate$26([
        i0.Component({
            selector: 'nb-card-front',
            template: '<ng-content select="nb-card"></ng-content>',
        })
    ], NbCardFrontComponent);
    return NbCardFrontComponent;
}());
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the back card.
 */
var NbCardBackComponent = /** @class */ (function () {
    function NbCardBackComponent() {
    }
    NbCardBackComponent = __decorate$26([
        i0.Component({
            selector: 'nb-card-back',
            template: '<ng-content select="nb-card"></ng-content>',
        })
    ], NbCardBackComponent);
    return NbCardBackComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$22 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_CARD_COMPONENTS = [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardFooterComponent,
    NbCardHeaderComponent,
    NbRevealCardComponent,
    NbFlipCardComponent,
    NbCardFrontComponent,
    NbCardBackComponent,
];
var NbCardModule = /** @class */ (function () {
    function NbCardModule() {
    }
    NbCardModule = __decorate$22([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: NB_CARD_COMPONENTS.slice(),
            exports: NB_CARD_COMPONENTS.slice(),
        })
    ], NbCardModule);
    return NbCardModule;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbDateService = /** @class */ (function () {
    function NbDateService() {
        this.DAYS_IN_WEEK = 7;
    }
    NbDateService.prototype.setLocale = function (locale) {
        this.locale = locale;
    };
    /**
     * Checks if the date is between the start date and the end date.
     * */
    NbDateService.prototype.isBetween = function (date, start, end) {
        return this.compareDates(date, start) > 0 && this.compareDates(date, end) < 0;
    };
    
    /**
     * Checks is two dates have the same day.
     * */
    NbDateService.prototype.isSameDaySafe = function (date1, date2) {
        return date1 && date2 && this.isSameDay(date1, date2);
    };
    
    /**
     * Checks is two dates have the same month.
     * */
    NbDateService.prototype.isSameMonthSafe = function (date1, date2) {
        return date1 && date2 && this.isSameMonth(date1, date2);
    };
    /**
     * Checks is two dates have the same year.
     * */
    NbDateService.prototype.isSameYearSafe = function (date1, date2) {
        return date1 && date2 && this.isSameYear(date1, date2);
    };
    return NbDateService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var batch = function (target, batchSize, offset) {
    if (offset === void 0) { offset = 0; }
    return target.reduce(function (res, item, index) {
        var chunkIndex = Math.floor((index + offset) / batchSize);
        if (!res[chunkIndex]) {
            res[chunkIndex] = [];
        }
        res[chunkIndex].push(item);
        return res;
    }, []);
};
/**
 * returns array with numbers from zero to bound.
 * */
var range = function (bound, producer) {
    if (producer === void 0) { producer = function (i) { return i; }; }
    var arr = [];
    for (var i = 0; i < bound; i++) {
        arr.push(producer(i));
    }
    return arr;
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$30 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$19 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarMonthModelService = /** @class */ (function () {
    function NbCalendarMonthModelService(dateService) {
        this.dateService = dateService;
    }
    NbCalendarMonthModelService.prototype.createDaysGrid = function (activeMonth, boundingMonth) {
        if (boundingMonth === void 0) { boundingMonth = true; }
        var weeks = this.createDates(activeMonth);
        return this.withBoundingMonths(weeks, activeMonth, boundingMonth);
    };
    NbCalendarMonthModelService.prototype.createDates = function (activeMonth) {
        var days = this.createDateRangeForMonth(activeMonth);
        var startOfWeekDayDiff = this.getStartOfWeekDayDiff(activeMonth);
        return batch(days, this.dateService.DAYS_IN_WEEK, startOfWeekDayDiff);
    };
    NbCalendarMonthModelService.prototype.withBoundingMonths = function (weeks, activeMonth, boundingMonth) {
        var withBoundingMonths = weeks;
        if (this.isShouldAddPrevBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addPrevBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        if (this.isShouldAddNextBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addNextBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        return withBoundingMonths;
    };
    NbCalendarMonthModelService.prototype.addPrevBoundingMonth = function (weeks, activeMonth, boundingMonth) {
        var firstWeek = weeks.shift();
        var requiredItems = this.dateService.DAYS_IN_WEEK - firstWeek.length;
        firstWeek.unshift.apply(firstWeek, this.createPrevBoundingDays(activeMonth, boundingMonth, requiredItems));
        return [firstWeek].concat(weeks);
    };
    NbCalendarMonthModelService.prototype.addNextBoundingMonth = function (weeks, activeMonth, boundingMonth) {
        var lastWeek = weeks.pop();
        var requiredItems = this.dateService.DAYS_IN_WEEK - lastWeek.length;
        lastWeek.push.apply(lastWeek, this.createNextBoundingDays(activeMonth, boundingMonth, requiredItems));
        return weeks.concat([lastWeek]);
    };
    NbCalendarMonthModelService.prototype.createPrevBoundingDays = function (activeMonth, boundingMonth, requiredItems) {
        var month = this.dateService.addMonth(activeMonth, -1);
        var daysInMonth = this.dateService.getNumberOfDaysInMonth(month);
        return this.createDateRangeForMonth(month)
            .slice(daysInMonth - requiredItems)
            .map(function (date) { return boundingMonth ? date : null; });
    };
    NbCalendarMonthModelService.prototype.createNextBoundingDays = function (activeMonth, boundingMonth, requiredItems) {
        var month = this.dateService.addMonth(activeMonth, 1);
        return this.createDateRangeForMonth(month)
            .slice(0, requiredItems)
            .map(function (date) { return boundingMonth ? date : null; });
    };
    NbCalendarMonthModelService.prototype.getStartOfWeekDayDiff = function (date) {
        var startOfMonth = this.dateService.getMonthStart(date);
        return this.getWeekStartDiff(startOfMonth);
    };
    NbCalendarMonthModelService.prototype.getWeekStartDiff = function (date) {
        return (7 - this.dateService.getFirstDayOfWeek() + this.dateService.getDayOfWeek(date)) % 7;
    };
    NbCalendarMonthModelService.prototype.isShouldAddPrevBoundingMonth = function (weeks) {
        return weeks[0].length < this.dateService.DAYS_IN_WEEK;
    };
    NbCalendarMonthModelService.prototype.isShouldAddNextBoundingMonth = function (weeks) {
        return weeks[weeks.length - 1].length < this.dateService.DAYS_IN_WEEK;
    };
    NbCalendarMonthModelService.prototype.createDateRangeForMonth = function (date) {
        var _this = this;
        var daysInMonth = this.dateService.getNumberOfDaysInMonth(date);
        return range(daysInMonth, function (i) {
            var year = _this.dateService.getYear(date);
            var month = _this.dateService.getMonth(date);
            return _this.dateService.createDate(year, month, i + 1);
        });
    };
    NbCalendarMonthModelService = __decorate$30([
        i0.Injectable(),
        __metadata$19("design:paramtypes", [NbDateService])
    ], NbCalendarMonthModelService);
    return NbCalendarMonthModelService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends$8 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$31 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$20 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$9 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The `NbNativeDateService` is basic implementation of `NbDateService` using
 * native js date objects and angular localization services.
 * */
var NbNativeDateService = /** @class */ (function (_super) {
    __extends$8(NbNativeDateService, _super);
    function NbNativeDateService(locale) {
        var _this = _super.call(this) || this;
        _this.setLocale(locale);
        return _this;
    }
    NbNativeDateService.prototype.setLocale = function (locale) {
        _super.prototype.setLocale.call(this, locale);
        this.datePipe = new i1.DatePipe(locale);
    };
    NbNativeDateService.prototype.isValidDateString = function (date, format) {
        return !isNaN(this.parse(date, format).getTime());
    };
    NbNativeDateService.prototype.today = function () {
        return new Date();
    };
    NbNativeDateService.prototype.getDate = function (date) {
        return date.getDate();
    };
    NbNativeDateService.prototype.getMonth = function (date) {
        return date.getMonth();
    };
    NbNativeDateService.prototype.getYear = function (date) {
        return date.getFullYear();
    };
    NbNativeDateService.prototype.getDayOfWeek = function (date) {
        return date.getDay();
    };
    /**
     * returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    NbNativeDateService.prototype.getFirstDayOfWeek = function () {
        return i1.getLocaleFirstDayOfWeek(this.locale);
    };
    NbNativeDateService.prototype.getMonthName = function (date, style$$1) {
        if (style$$1 === void 0) { style$$1 = i1.TranslationWidth.Abbreviated; }
        var index = date.getMonth();
        return this.getMonthNameByIndex(index, style$$1);
    };
    NbNativeDateService.prototype.getMonthNameByIndex = function (index, style$$1) {
        if (style$$1 === void 0) { style$$1 = i1.TranslationWidth.Abbreviated; }
        return i1.getLocaleMonthNames(this.locale, i1.FormStyle.Format, style$$1)[index];
    };
    NbNativeDateService.prototype.getDayOfWeekNames = function () {
        return i1.getLocaleDayNames(this.locale, i1.FormStyle.Format, i1.TranslationWidth.Short);
    };
    NbNativeDateService.prototype.format = function (date, format) {
        return this.datePipe.transform(date, format);
    };
    /**
     * We haven't got capability to parse date using formatting without third party libraries.
     * */
    NbNativeDateService.prototype.parse = function (date, format) {
        return new Date(Date.parse(date));
    };
    NbNativeDateService.prototype.addDay = function (date, num) {
        return this.createDate(date.getFullYear(), date.getMonth(), date.getDate() + num);
    };
    NbNativeDateService.prototype.addMonth = function (date, num) {
        return this.createDate(date.getFullYear(), date.getMonth() + num, date.getDate());
    };
    NbNativeDateService.prototype.addYear = function (date, num) {
        return this.createDate(date.getFullYear() + num, date.getMonth(), date.getDate());
    };
    NbNativeDateService.prototype.clone = function (date) {
        return new Date(date.getTime());
    };
    NbNativeDateService.prototype.compareDates = function (date1, date2) {
        return date1.getTime() - date2.getTime();
    };
    NbNativeDateService.prototype.createDate = function (year, month, date) {
        var result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(result.getFullYear() - 1900);
        }
        return result;
    };
    NbNativeDateService.prototype.getMonthEnd = function (date) {
        return this.createDate(date.getFullYear(), date.getMonth() + 1, 0);
    };
    NbNativeDateService.prototype.getMonthStart = function (date) {
        return this.createDate(date.getFullYear(), date.getMonth(), 1);
    };
    NbNativeDateService.prototype.getNumberOfDaysInMonth = function (date) {
        return this.getMonthEnd(date).getDate();
    };
    NbNativeDateService.prototype.getYearEnd = function (date) {
        return this.createDate(date.getFullYear(), 11, 31);
    };
    NbNativeDateService.prototype.getYearStart = function (date) {
        return this.createDate(date.getFullYear(), 0, 1);
    };
    NbNativeDateService.prototype.isSameDay = function (date1, date2) {
        return this.isSameMonth(date1, date2) &&
            date1.getDate() === date2.getDate();
    };
    NbNativeDateService.prototype.isSameMonth = function (date1, date2) {
        return this.isSameYear(date1, date2) &&
            date1.getMonth() === date2.getMonth();
    };
    NbNativeDateService.prototype.isSameYear = function (date1, date2) {
        return date1.getFullYear() === date2.getFullYear();
    };
    NbNativeDateService.prototype.getId = function () {
        return 'native';
    };
    NbNativeDateService = __decorate$31([
        i0.Injectable(),
        __param$9(0, i0.Inject(i0.LOCALE_ID)),
        __metadata$20("design:paramtypes", [String])
    ], NbNativeDateService);
    return NbNativeDateService;
}(NbDateService));

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$29 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$18 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarHeaderComponent = /** @class */ (function () {
    function NbCalendarHeaderComponent(directionService, dateService) {
        this.directionService = directionService;
        this.dateService = dateService;
        this.navigateToday = new i0.EventEmitter();
        this.date = this.dateService.today();
    }
    Object.defineProperty(NbCalendarHeaderComponent.prototype, "isRtl", {
        get: function () {
            return this.directionService.isRtl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarHeaderComponent.prototype, "isLtr", {
        get: function () {
            return this.directionService.isLtr();
        },
        enumerable: true,
        configurable: true
    });
    __decorate$29([
        i0.Input(),
        __metadata$18("design:type", Object)
    ], NbCalendarHeaderComponent.prototype, "date", void 0);
    __decorate$29([
        i0.Output(),
        __metadata$18("design:type", i0.EventEmitter)
    ], NbCalendarHeaderComponent.prototype, "navigateToday", void 0);
    NbCalendarHeaderComponent = __decorate$29([
        i0.Component({
            selector: 'nb-calendar-header',
            template: "\n    <div class=\"header\">\n      <span class=\"title\" (click)=\"navigateToday.emit()\">\n        {{ date | date: 'mediumDate' }}\n        <i [ngClass]=\"{ 'nb-arrow-dropright': isLtr, 'nb-arrow-dropleft': isRtl }\"></i>\n      </span>\n      <span class=\"sub-title\">Today</span>\n    </div>\n  ",
        }),
        __metadata$18("design:paramtypes", [NbLayoutDirectionService, NbDateService])
    ], NbCalendarHeaderComponent);
    return NbCalendarHeaderComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$32 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$21 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarDayCellComponent = /** @class */ (function () {
    function NbCalendarDayCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new i0.EventEmitter(true);
    }
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "today", {
        get: function () {
            return this.dateService.isSameDaySafe(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "boundingMonth", {
        get: function () {
            return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "selected", {
        get: function () {
            return this.dateService.isSameDaySafe(this.date, this.selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "empty", {
        get: function () {
            return !this.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "disabled", {
        get: function () {
            return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "day", {
        get: function () {
            return this.date && this.dateService.getDate(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarDayCellComponent.prototype.onClick = function () {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarDayCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    };
    NbCalendarDayCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    };
    NbCalendarDayCellComponent.prototype.dontFitFilter = function () {
        return this.date && this.filter && !this.filter(this.date);
    };
    __decorate$32([
        i0.Input(),
        __metadata$21("design:type", Object)
    ], NbCalendarDayCellComponent.prototype, "date", void 0);
    __decorate$32([
        i0.Input(),
        __metadata$21("design:type", Object)
    ], NbCalendarDayCellComponent.prototype, "selectedValue", void 0);
    __decorate$32([
        i0.Input(),
        __metadata$21("design:type", Object)
    ], NbCalendarDayCellComponent.prototype, "visibleDate", void 0);
    __decorate$32([
        i0.Input(),
        __metadata$21("design:type", Object)
    ], NbCalendarDayCellComponent.prototype, "min", void 0);
    __decorate$32([
        i0.Input(),
        __metadata$21("design:type", Object)
    ], NbCalendarDayCellComponent.prototype, "max", void 0);
    __decorate$32([
        i0.Input(),
        __metadata$21("design:type", Function)
    ], NbCalendarDayCellComponent.prototype, "filter", void 0);
    __decorate$32([
        i0.Output(),
        __metadata$21("design:type", i0.EventEmitter)
    ], NbCalendarDayCellComponent.prototype, "select", void 0);
    __decorate$32([
        i0.HostBinding('class.today'),
        __metadata$21("design:type", Boolean),
        __metadata$21("design:paramtypes", [])
    ], NbCalendarDayCellComponent.prototype, "today", null);
    __decorate$32([
        i0.HostBinding('class.bounding-month'),
        __metadata$21("design:type", Boolean),
        __metadata$21("design:paramtypes", [])
    ], NbCalendarDayCellComponent.prototype, "boundingMonth", null);
    __decorate$32([
        i0.HostBinding('class.selected'),
        __metadata$21("design:type", Boolean),
        __metadata$21("design:paramtypes", [])
    ], NbCalendarDayCellComponent.prototype, "selected", null);
    __decorate$32([
        i0.HostBinding('class.empty'),
        __metadata$21("design:type", Boolean),
        __metadata$21("design:paramtypes", [])
    ], NbCalendarDayCellComponent.prototype, "empty", null);
    __decorate$32([
        i0.HostBinding('class.disabled'),
        __metadata$21("design:type", Boolean),
        __metadata$21("design:paramtypes", [])
    ], NbCalendarDayCellComponent.prototype, "disabled", null);
    __decorate$32([
        i0.HostListener('click'),
        __metadata$21("design:type", Function),
        __metadata$21("design:paramtypes", []),
        __metadata$21("design:returntype", void 0)
    ], NbCalendarDayCellComponent.prototype, "onClick", null);
    NbCalendarDayCellComponent = __decorate$32([
        i0.Component({
            selector: 'nb-calendar-day-cell',
            template: '{{ day }}',
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            host: { 'class': 'day-cell' },
        }),
        __metadata$21("design:paramtypes", [NbDateService])
    ], NbCalendarDayCellComponent);
    return NbCalendarDayCellComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

(function (NbCalendarViewMode) {
    NbCalendarViewMode["YEAR"] = "year";
    NbCalendarViewMode["MONTH"] = "month";
    NbCalendarViewMode["DATE"] = "date";
})(exports.NbCalendarViewMode || (exports.NbCalendarViewMode = {}));

(function (NbCalendarSize) {
    NbCalendarSize["MEDIUM"] = "medium";
    NbCalendarSize["LARGE"] = "large";
})(exports.NbCalendarSize || (exports.NbCalendarSize = {}));

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$34 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$23 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarYearCellComponent = /** @class */ (function () {
    function NbCalendarYearCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new i0.EventEmitter(true);
    }
    Object.defineProperty(NbCalendarYearCellComponent.prototype, "selected", {
        get: function () {
            return this.dateService.isSameYearSafe(this.date, this.selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearCellComponent.prototype, "today", {
        get: function () {
            return this.dateService.isSameYearSafe(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearCellComponent.prototype, "disabled", {
        get: function () {
            return this.smallerThanMin() || this.greaterThanMax();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearCellComponent.prototype, "year", {
        get: function () {
            return this.dateService.getYear(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarYearCellComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarYearCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    };
    NbCalendarYearCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    };
    NbCalendarYearCellComponent.prototype.yearStart = function () {
        return this.dateService.getYearStart(this.date);
    };
    NbCalendarYearCellComponent.prototype.yearEnd = function () {
        return this.dateService.getYearEnd(this.date);
    };
    __decorate$34([
        i0.Input(),
        __metadata$23("design:type", Object)
    ], NbCalendarYearCellComponent.prototype, "date", void 0);
    __decorate$34([
        i0.Input(),
        __metadata$23("design:type", Object)
    ], NbCalendarYearCellComponent.prototype, "min", void 0);
    __decorate$34([
        i0.Input(),
        __metadata$23("design:type", Object)
    ], NbCalendarYearCellComponent.prototype, "max", void 0);
    __decorate$34([
        i0.Input(),
        __metadata$23("design:type", Object)
    ], NbCalendarYearCellComponent.prototype, "selectedValue", void 0);
    __decorate$34([
        i0.Output(),
        __metadata$23("design:type", i0.EventEmitter)
    ], NbCalendarYearCellComponent.prototype, "select", void 0);
    __decorate$34([
        i0.HostBinding('class.selected'),
        __metadata$23("design:type", Boolean),
        __metadata$23("design:paramtypes", [])
    ], NbCalendarYearCellComponent.prototype, "selected", null);
    __decorate$34([
        i0.HostBinding('class.today'),
        __metadata$23("design:type", Boolean),
        __metadata$23("design:paramtypes", [])
    ], NbCalendarYearCellComponent.prototype, "today", null);
    __decorate$34([
        i0.HostBinding('class.disabled'),
        __metadata$23("design:type", Boolean),
        __metadata$23("design:paramtypes", [])
    ], NbCalendarYearCellComponent.prototype, "disabled", null);
    __decorate$34([
        i0.HostListener('click'),
        __metadata$23("design:type", Function),
        __metadata$23("design:paramtypes", []),
        __metadata$23("design:returntype", void 0)
    ], NbCalendarYearCellComponent.prototype, "onClick", null);
    NbCalendarYearCellComponent = __decorate$34([
        i0.Component({
            selector: 'nb-calendar-year-cell',
            template: "{{ year }}",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            host: { 'class': 'year-cell' },
        }),
        __metadata$23("design:paramtypes", [NbDateService])
    ], NbCalendarYearCellComponent);
    return NbCalendarYearCellComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$33 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$22 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var defaultYearCount = 20;
var NbCalendarYearPickerComponent = /** @class */ (function () {
    function NbCalendarYearPickerComponent(dateService) {
        this.dateService = dateService;
        this.cellComponent = NbCalendarYearCellComponent;
        this.size = exports.NbCalendarSize.MEDIUM;
        this.yearChange = new i0.EventEmitter();
    }
    Object.defineProperty(NbCalendarYearPickerComponent.prototype, "_cellComponent", {
        set: function (cellComponent) {
            if (cellComponent) {
                this.cellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearPickerComponent.prototype, "medium", {
        get: function () {
            return this.size === exports.NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearPickerComponent.prototype, "large", {
        get: function () {
            return this.size === exports.NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarYearPickerComponent.prototype.ngOnChanges = function () {
        this.initYears();
    };
    NbCalendarYearPickerComponent.prototype.initYears = function () {
        var _this = this;
        var selectedYear = this.dateService.getYear(this.year);
        var startYear = Math.ceil(selectedYear - defaultYearCount / 2);
        var years = range(defaultYearCount).map(function (i) { return _this.createYearDateByIndex(i + startYear); });
        this.years = batch(years, 4);
    };
    NbCalendarYearPickerComponent.prototype.onSelect = function (year) {
        this.yearChange.emit(year);
    };
    NbCalendarYearPickerComponent.prototype.createYearDateByIndex = function (i) {
        return this.dateService.createDate(i, this.dateService.getMonth(this.year), this.dateService.getDate(this.year));
    };
    __decorate$33([
        i0.Input(),
        __metadata$22("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "date", void 0);
    __decorate$33([
        i0.Input(),
        __metadata$22("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "min", void 0);
    __decorate$33([
        i0.Input(),
        __metadata$22("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "max", void 0);
    __decorate$33([
        i0.Input(),
        __metadata$22("design:type", Function)
    ], NbCalendarYearPickerComponent.prototype, "filter", void 0);
    __decorate$33([
        i0.Input('cellComponent'),
        __metadata$22("design:type", i0.Type),
        __metadata$22("design:paramtypes", [i0.Type])
    ], NbCalendarYearPickerComponent.prototype, "_cellComponent", null);
    __decorate$33([
        i0.Input(),
        __metadata$22("design:type", String)
    ], NbCalendarYearPickerComponent.prototype, "size", void 0);
    __decorate$33([
        i0.Input(),
        __metadata$22("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "year", void 0);
    __decorate$33([
        i0.Output(),
        __metadata$22("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "yearChange", void 0);
    __decorate$33([
        i0.HostBinding('class.medium'),
        __metadata$22("design:type", Object),
        __metadata$22("design:paramtypes", [])
    ], NbCalendarYearPickerComponent.prototype, "medium", null);
    __decorate$33([
        i0.HostBinding('class.large'),
        __metadata$22("design:type", Object),
        __metadata$22("design:paramtypes", [])
    ], NbCalendarYearPickerComponent.prototype, "large", null);
    NbCalendarYearPickerComponent = __decorate$33([
        i0.Component({
            selector: 'nb-calendar-year-picker',
            template: "\n    <nb-calendar-picker\n      [data]=\"years\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      [selectedValue]=\"date\"\n      [visibleDate]=\"year\"\n      [cellComponent]=\"cellComponent\"\n      (select)=\"onSelect($event)\">\n    </nb-calendar-picker>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __metadata$22("design:paramtypes", [NbDateService])
    ], NbCalendarYearPickerComponent);
    return NbCalendarYearPickerComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$36 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$25 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarMonthCellComponent = /** @class */ (function () {
    function NbCalendarMonthCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new i0.EventEmitter(true);
    }
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "selected", {
        get: function () {
            return this.dateService.isSameMonthSafe(this.date, this.selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "today", {
        get: function () {
            return this.dateService.isSameMonthSafe(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "disabled", {
        get: function () {
            return this.smallerThanMin() || this.greaterThanMax();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "month", {
        get: function () {
            return this.dateService.getMonthName(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarMonthCellComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarMonthCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.monthEnd(), this.min) < 0;
    };
    NbCalendarMonthCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.monthStart(), this.max) > 0;
    };
    NbCalendarMonthCellComponent.prototype.monthStart = function () {
        return this.dateService.getMonthStart(this.date);
    };
    NbCalendarMonthCellComponent.prototype.monthEnd = function () {
        return this.dateService.getMonthEnd(this.date);
    };
    __decorate$36([
        i0.Input(),
        __metadata$25("design:type", Object)
    ], NbCalendarMonthCellComponent.prototype, "date", void 0);
    __decorate$36([
        i0.Input(),
        __metadata$25("design:type", Object)
    ], NbCalendarMonthCellComponent.prototype, "selectedValue", void 0);
    __decorate$36([
        i0.Input(),
        __metadata$25("design:type", Object)
    ], NbCalendarMonthCellComponent.prototype, "min", void 0);
    __decorate$36([
        i0.Input(),
        __metadata$25("design:type", Object)
    ], NbCalendarMonthCellComponent.prototype, "max", void 0);
    __decorate$36([
        i0.Output(),
        __metadata$25("design:type", i0.EventEmitter)
    ], NbCalendarMonthCellComponent.prototype, "select", void 0);
    __decorate$36([
        i0.HostBinding('class.selected'),
        __metadata$25("design:type", Boolean),
        __metadata$25("design:paramtypes", [])
    ], NbCalendarMonthCellComponent.prototype, "selected", null);
    __decorate$36([
        i0.HostBinding('class.today'),
        __metadata$25("design:type", Boolean),
        __metadata$25("design:paramtypes", [])
    ], NbCalendarMonthCellComponent.prototype, "today", null);
    __decorate$36([
        i0.HostBinding('class.disabled'),
        __metadata$25("design:type", Boolean),
        __metadata$25("design:paramtypes", [])
    ], NbCalendarMonthCellComponent.prototype, "disabled", null);
    __decorate$36([
        i0.HostListener('click'),
        __metadata$25("design:type", Function),
        __metadata$25("design:paramtypes", []),
        __metadata$25("design:returntype", void 0)
    ], NbCalendarMonthCellComponent.prototype, "onClick", null);
    NbCalendarMonthCellComponent = __decorate$36([
        i0.Component({
            selector: 'nb-calendar-month-cell',
            template: "{{ month }}",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            host: { 'class': 'month-cell' },
        }),
        __metadata$25("design:paramtypes", [NbDateService])
    ], NbCalendarMonthCellComponent);
    return NbCalendarMonthCellComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$35 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$24 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarMonthPickerComponent = /** @class */ (function () {
    function NbCalendarMonthPickerComponent(dateService) {
        this.dateService = dateService;
        this.size = exports.NbCalendarSize.MEDIUM;
        this.monthChange = new i0.EventEmitter();
        this.cellComponent = NbCalendarMonthCellComponent;
    }
    Object.defineProperty(NbCalendarMonthPickerComponent.prototype, "_cellComponent", {
        set: function (cellComponent) {
            if (cellComponent) {
                this.cellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthPickerComponent.prototype, "medium", {
        get: function () {
            return this.size === exports.NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthPickerComponent.prototype, "large", {
        get: function () {
            return this.size === exports.NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarMonthPickerComponent.prototype.ngOnInit = function () {
        this.initMonths();
    };
    NbCalendarMonthPickerComponent.prototype.initMonths = function () {
        var _this = this;
        var months = range(12).map(function (i) { return _this.createMonthDateByIndex(i); });
        this.months = batch(months, 4);
    };
    NbCalendarMonthPickerComponent.prototype.onSelect = function (month) {
        this.monthChange.emit(month);
    };
    NbCalendarMonthPickerComponent.prototype.createMonthDateByIndex = function (i) {
        return this.dateService.createDate(this.dateService.getYear(this.month), i, this.dateService.getDate(this.month));
    };
    __decorate$35([
        i0.Input(),
        __metadata$24("design:type", Object)
    ], NbCalendarMonthPickerComponent.prototype, "min", void 0);
    __decorate$35([
        i0.Input(),
        __metadata$24("design:type", Object)
    ], NbCalendarMonthPickerComponent.prototype, "max", void 0);
    __decorate$35([
        i0.Input(),
        __metadata$24("design:type", Function)
    ], NbCalendarMonthPickerComponent.prototype, "filter", void 0);
    __decorate$35([
        i0.Input(),
        __metadata$24("design:type", String)
    ], NbCalendarMonthPickerComponent.prototype, "size", void 0);
    __decorate$35([
        i0.Input(),
        __metadata$24("design:type", Object)
    ], NbCalendarMonthPickerComponent.prototype, "month", void 0);
    __decorate$35([
        i0.Output(),
        __metadata$24("design:type", i0.EventEmitter)
    ], NbCalendarMonthPickerComponent.prototype, "monthChange", void 0);
    __decorate$35([
        i0.Input('cellComponent'),
        __metadata$24("design:type", i0.Type),
        __metadata$24("design:paramtypes", [i0.Type])
    ], NbCalendarMonthPickerComponent.prototype, "_cellComponent", null);
    __decorate$35([
        i0.HostBinding('class.medium'),
        __metadata$24("design:type", Object),
        __metadata$24("design:paramtypes", [])
    ], NbCalendarMonthPickerComponent.prototype, "medium", null);
    __decorate$35([
        i0.HostBinding('class.large'),
        __metadata$24("design:type", Object),
        __metadata$24("design:paramtypes", [])
    ], NbCalendarMonthPickerComponent.prototype, "large", null);
    NbCalendarMonthPickerComponent = __decorate$35([
        i0.Component({
            selector: 'nb-calendar-month-picker',
            template: "\n    <nb-calendar-picker\n      [data]=\"months\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      [selectedValue]=\"month\"\n      [cellComponent]=\"cellComponent\"\n      (select)=\"onSelect($event)\">\n    </nb-calendar-picker>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __metadata$24("design:paramtypes", [NbDateService])
    ], NbCalendarMonthPickerComponent);
    return NbCalendarMonthPickerComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$37 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$26 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Provides capability pick days.
 * */
var NbCalendarDayPickerComponent = /** @class */ (function () {
    function NbCalendarDayPickerComponent(monthModel) {
        this.monthModel = monthModel;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonths = true;
        this.cellComponent = NbCalendarDayCellComponent;
        /**
         * Size of the component.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = exports.NbCalendarSize.MEDIUM;
        /**
         * Fires newly selected date.
         * */
        this.dateChange = new i0.EventEmitter();
    }
    Object.defineProperty(NbCalendarDayPickerComponent.prototype, "setCellComponent", {
        /**
         * Custom day cell component. Have to implement `NbCalendarCell` interface.
         * */
        set: function (cellComponent) {
            if (cellComponent) {
                this.cellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayPickerComponent.prototype, "medium", {
        get: function () {
            return this.size === exports.NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayPickerComponent.prototype, "large", {
        get: function () {
            return this.size === exports.NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarDayPickerComponent.prototype.ngOnChanges = function (_a) {
        var visibleDate = _a.visibleDate;
        if (visibleDate) {
            this.weeks = this.monthModel.createDaysGrid(this.visibleDate, this.boundingMonths);
        }
    };
    NbCalendarDayPickerComponent.prototype.onSelect = function (day) {
        this.dateChange.emit(day);
    };
    __decorate$37([
        i0.Input(),
        __metadata$26("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "visibleDate", void 0);
    __decorate$37([
        i0.Input(),
        __metadata$26("design:type", Boolean)
    ], NbCalendarDayPickerComponent.prototype, "boundingMonths", void 0);
    __decorate$37([
        i0.Input(),
        __metadata$26("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "min", void 0);
    __decorate$37([
        i0.Input(),
        __metadata$26("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "max", void 0);
    __decorate$37([
        i0.Input(),
        __metadata$26("design:type", Function)
    ], NbCalendarDayPickerComponent.prototype, "filter", void 0);
    __decorate$37([
        i0.Input('cellComponent'),
        __metadata$26("design:type", i0.Type),
        __metadata$26("design:paramtypes", [i0.Type])
    ], NbCalendarDayPickerComponent.prototype, "setCellComponent", null);
    __decorate$37([
        i0.Input(),
        __metadata$26("design:type", String)
    ], NbCalendarDayPickerComponent.prototype, "size", void 0);
    __decorate$37([
        i0.Input(),
        __metadata$26("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "date", void 0);
    __decorate$37([
        i0.Output(),
        __metadata$26("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "dateChange", void 0);
    __decorate$37([
        i0.HostBinding('class.medium'),
        __metadata$26("design:type", Object),
        __metadata$26("design:paramtypes", [])
    ], NbCalendarDayPickerComponent.prototype, "medium", null);
    __decorate$37([
        i0.HostBinding('class.large'),
        __metadata$26("design:type", Object),
        __metadata$26("design:paramtypes", [])
    ], NbCalendarDayPickerComponent.prototype, "large", null);
    NbCalendarDayPickerComponent = __decorate$37([
        i0.Component({
            selector: 'nb-calendar-day-picker',
            styles: [" :host { display: block; } "],
            template: "\n    <nb-calendar-days-names></nb-calendar-days-names>\n    <nb-calendar-picker\n      [data]=\"weeks\"\n      [visibleDate]=\"visibleDate\"\n      [selectedValue]=\"date\"\n      [cellComponent]=\"cellComponent\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      (select)=\"onSelect($event)\">\n    </nb-calendar-picker>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __metadata$26("design:paramtypes", [NbCalendarMonthModelService])
    ], NbCalendarDayPickerComponent);
    return NbCalendarDayPickerComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$38 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$27 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarNavigationComponent = /** @class */ (function () {
    function NbCalendarNavigationComponent() {
        this.changeMode = new i0.EventEmitter(true);
    }
    __decorate$38([
        i0.Input(),
        __metadata$27("design:type", Object)
    ], NbCalendarNavigationComponent.prototype, "date", void 0);
    __decorate$38([
        i0.Output(),
        __metadata$27("design:type", Object)
    ], NbCalendarNavigationComponent.prototype, "changeMode", void 0);
    NbCalendarNavigationComponent = __decorate$38([
        i0.Component({
            selector: 'nb-calendar-navigation',
            styles: ["\n    :host {\n      display: flex;\n      justify-content: center;\n    }\n\n    :host button {\n      height: 3.125rem;\n    }\n  "],
            template: "\n    <button nbButton (click)=\"changeMode.emit()\">\n      {{ date | date: 'MMM yyyy' }}\n    </button>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        })
    ], NbCalendarNavigationComponent);
    return NbCalendarNavigationComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$39 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$28 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarPageableNavigationComponent = /** @class */ (function () {
    function NbCalendarPageableNavigationComponent(directionService) {
        this.directionService = directionService;
        this.changeMode = new i0.EventEmitter();
        this.next = new i0.EventEmitter();
        this.prev = new i0.EventEmitter();
    }
    Object.defineProperty(NbCalendarPageableNavigationComponent.prototype, "isRtl", {
        get: function () {
            return this.directionService.isRtl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarPageableNavigationComponent.prototype, "isLtr", {
        get: function () {
            return this.directionService.isLtr();
        },
        enumerable: true,
        configurable: true
    });
    __decorate$39([
        i0.Input(),
        __metadata$28("design:type", Object)
    ], NbCalendarPageableNavigationComponent.prototype, "date", void 0);
    __decorate$39([
        i0.Output(),
        __metadata$28("design:type", Object)
    ], NbCalendarPageableNavigationComponent.prototype, "changeMode", void 0);
    __decorate$39([
        i0.Output(),
        __metadata$28("design:type", Object)
    ], NbCalendarPageableNavigationComponent.prototype, "next", void 0);
    __decorate$39([
        i0.Output(),
        __metadata$28("design:type", Object)
    ], NbCalendarPageableNavigationComponent.prototype, "prev", void 0);
    NbCalendarPageableNavigationComponent = __decorate$39([
        i0.Component({
            selector: 'nb-calendar-pageable-navigation',
            styles: [":host{display:flex;align-items:center;justify-content:space-between}:host i{font-size:1.5rem;cursor:pointer} "],
            template: "\n    <i [ngClass]=\"{'nb-arrow-left': isLtr, 'nb-arrow-right': isRtl }\" (click)=\"prev.emit()\"></i>\n    <nb-calendar-navigation [date]=\"date\" (changeMode)=\"changeMode.emit()\"></nb-calendar-navigation>\n    <i [ngClass]=\"{'nb-arrow-right': isLtr, 'nb-arrow-left': isRtl }\" (click)=\"next.emit()\"></i>\n  ",
        }),
        __metadata$28("design:paramtypes", [NbLayoutDirectionService])
    ], NbCalendarPageableNavigationComponent);
    return NbCalendarPageableNavigationComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$40 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$29 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarDaysNamesComponent = /** @class */ (function () {
    function NbCalendarDaysNamesComponent(dateService) {
        this.dateService = dateService;
    }
    NbCalendarDaysNamesComponent.prototype.ngOnInit = function () {
        var days = this.createDaysNames();
        this.days = this.shiftStartOfWeek(days);
    };
    NbCalendarDaysNamesComponent.prototype.createDaysNames = function () {
        return this.dateService.getDayOfWeekNames()
            .map(this.markIfHoliday);
    };
    NbCalendarDaysNamesComponent.prototype.shiftStartOfWeek = function (days) {
        for (var i = 0; i < this.dateService.getFirstDayOfWeek(); i++) {
            days.push(days.shift());
        }
        return days;
    };
    NbCalendarDaysNamesComponent.prototype.markIfHoliday = function (name, i) {
        return { name: name, isHoliday: i % 6 === 0 };
    };
    NbCalendarDaysNamesComponent = __decorate$40([
        i0.Component({
            selector: 'nb-calendar-days-names',
            styles: [":host{display:flex;justify-content:space-between}:host .day{display:flex;align-items:center;justify-content:center;margin:1px} "],
            template: "\n    <div class=\"day\" *ngFor=\"let day of days\" [class.holiday]=\"day.isHoliday\">{{ day.name }}</div>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __metadata$29("design:paramtypes", [NbDateService])
    ], NbCalendarDaysNamesComponent);
    return NbCalendarDaysNamesComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$41 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$30 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarPickerRowComponent = /** @class */ (function () {
    function NbCalendarPickerRowComponent(cfr) {
        this.cfr = cfr;
        this.select = new i0.EventEmitter();
    }
    NbCalendarPickerRowComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var factory = this.cfr.resolveComponentFactory(this.component);
        this.containerRef.clear();
        this.row.forEach(function (date) {
            var component = _this.containerRef.createComponent(factory);
            _this.patchWithContext(component.instance, date);
            component.changeDetectorRef.detectChanges();
        });
    };
    NbCalendarPickerRowComponent.prototype.patchWithContext = function (component, date) {
        component.visibleDate = this.visibleDate;
        component.selectedValue = this.selectedValue;
        component.date = date;
        component.min = this.min;
        component.max = this.max;
        component.filter = this.filter;
        component.select.subscribe(this.select.emit.bind(this.select));
    };
    __decorate$41([
        i0.Input(),
        __metadata$30("design:type", Array)
    ], NbCalendarPickerRowComponent.prototype, "row", void 0);
    __decorate$41([
        i0.Input(),
        __metadata$30("design:type", Object)
    ], NbCalendarPickerRowComponent.prototype, "selectedValue", void 0);
    __decorate$41([
        i0.Input(),
        __metadata$30("design:type", Object)
    ], NbCalendarPickerRowComponent.prototype, "visibleDate", void 0);
    __decorate$41([
        i0.Input(),
        __metadata$30("design:type", i0.Type)
    ], NbCalendarPickerRowComponent.prototype, "component", void 0);
    __decorate$41([
        i0.Input(),
        __metadata$30("design:type", Object)
    ], NbCalendarPickerRowComponent.prototype, "min", void 0);
    __decorate$41([
        i0.Input(),
        __metadata$30("design:type", Object)
    ], NbCalendarPickerRowComponent.prototype, "max", void 0);
    __decorate$41([
        i0.Input(),
        __metadata$30("design:type", Function)
    ], NbCalendarPickerRowComponent.prototype, "filter", void 0);
    __decorate$41([
        i0.Output(),
        __metadata$30("design:type", i0.EventEmitter)
    ], NbCalendarPickerRowComponent.prototype, "select", void 0);
    __decorate$41([
        i0.ViewChild(i0.TemplateRef, { read: i0.ViewContainerRef }),
        __metadata$30("design:type", i0.ViewContainerRef)
    ], NbCalendarPickerRowComponent.prototype, "containerRef", void 0);
    NbCalendarPickerRowComponent = __decorate$41([
        i0.Component({
            selector: 'nb-calendar-picker-row',
            styles: ["\n    :host {\n      display: flex;\n      justify-content: space-between;\n    }\n  "],
            template: '<ng-template></ng-template>',
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __metadata$30("design:paramtypes", [i0.ComponentFactoryResolver])
    ], NbCalendarPickerRowComponent);
    return NbCalendarPickerRowComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$42 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$31 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarPickerComponent = /** @class */ (function () {
    function NbCalendarPickerComponent() {
        this.select = new i0.EventEmitter();
    }
    __decorate$42([
        i0.Input(),
        __metadata$31("design:type", Array)
    ], NbCalendarPickerComponent.prototype, "data", void 0);
    __decorate$42([
        i0.Input(),
        __metadata$31("design:type", Object)
    ], NbCalendarPickerComponent.prototype, "visibleDate", void 0);
    __decorate$42([
        i0.Input(),
        __metadata$31("design:type", Object)
    ], NbCalendarPickerComponent.prototype, "selectedValue", void 0);
    __decorate$42([
        i0.Input(),
        __metadata$31("design:type", i0.Type)
    ], NbCalendarPickerComponent.prototype, "cellComponent", void 0);
    __decorate$42([
        i0.Input(),
        __metadata$31("design:type", Object)
    ], NbCalendarPickerComponent.prototype, "min", void 0);
    __decorate$42([
        i0.Input(),
        __metadata$31("design:type", Object)
    ], NbCalendarPickerComponent.prototype, "max", void 0);
    __decorate$42([
        i0.Input(),
        __metadata$31("design:type", Function)
    ], NbCalendarPickerComponent.prototype, "filter", void 0);
    __decorate$42([
        i0.Output(),
        __metadata$31("design:type", i0.EventEmitter)
    ], NbCalendarPickerComponent.prototype, "select", void 0);
    NbCalendarPickerComponent = __decorate$42([
        i0.Component({
            selector: 'nb-calendar-picker',
            template: "\n    <nb-calendar-picker-row\n      *ngFor=\"let row of data\"\n      [row]=\"row\"\n      [visibleDate]=\"visibleDate\"\n      [selectedValue]=\"selectedValue\"\n      [component]=\"cellComponent\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      (select)=\"select.emit($event)\">\n    </nb-calendar-picker-row>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        })
    ], NbCalendarPickerComponent);
    return NbCalendarPickerComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function convertToBoolProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === '');
    }
    return !!val;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$45 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$32 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Basic button component.
 *
 * Default button size is `medium` and status color is `primary`:
 * @stacked-example(Button Showcase, button/button-showcase.component)
 *
 * ```html
 * <button nbButton></button>
 * ```
 * ### Installation
 *
 * Import `NbButtonModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbButtonModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Buttons are available in multiple colors using `status` property:
 * @stacked-example(Button Colors, button/button-colors.component.html)
 *
 * There are three button sizes:
 *
 * @stacked-example(Button Sizes, button/button-sizes.component.html)
 *
 * And two additional style types - `outline`:
 *
 * @stacked-example(Outline Buttons, button/button-outline.component.html)
 *
 * and `hero`:
 *
 * @stacked-example(Button Colors, button/button-hero.component.html)
 *
 * Buttons available in different shapes, which could be combined with the other properties:
 * @stacked-example(Button Shapes, button/button-shapes.component)
 *
 * `nbButton` could be applied to the following selectors - `button`, `input[type="button"]`, `input[type="submit"]`
 * and `a`:
 * @stacked-example(Button Elements, button/button-types.component.html)
 *
 * Button can be made `fullWidth`:
 * @stacked-example(Full Width Button, button/button-full-width.component.html)
 *
 * @styles
 *
 * btn-fg:
 * btn-font-family:
 * btn-line-height:
 * btn-disabled-opacity:
 * btn-cursor:
 * btn-primary-bg:
 * btn-secondary-bg:
 * btn-info-bg:
 * btn-success-bg:
 * btn-warning-bg:
 * btn-danger-bg:
 * btn-secondary-border:
 * btn-secondary-border-width:
 * btn-padding-y-lg:
 * btn-padding-x-lg:
 * btn-font-size-lg:
 * btn-padding-y-md:
 * btn-padding-x-md:
 * btn-font-size-md:
 * btn-padding-y-sm:
 * btn-padding-x-sm:
 * btn-font-size-sm:
 * btn-padding-y-xs:
 * btn-padding-x-xs:
 * btn-font-size-xs:
 * btn-border-radius:
 * btn-rectangle-border-radius:
 * btn-semi-round-border-radius:
 * btn-round-border-radius:
 * btn-hero-shadow:
 * btn-hero-text-shadow:
 * btn-hero-bevel-size:
 * btn-hero-glow-size:
 * btn-hero-primary-glow-size:
 * btn-hero-success-glow-size:
 * btn-hero-warning-glow-size:
 * btn-hero-info-glow-size:
 * btn-hero-danger-glow-size:
 * btn-hero-secondary-glow-size:
 * btn-hero-degree:
 * btn-hero-primary-degree:
 * btn-hero-success-degree:
 * btn-hero-warning-degree:
 * btn-hero-info-degree:
 * btn-hero-danger-degree:
 * btn-hero-secondary-degree:
 * btn-hero-border-radius:
 * btn-outline-fg:
 * btn-outline-hover-fg:
 * btn-outline-focus-fg:
 */
var NbButtonComponent = /** @class */ (function () {
    function NbButtonComponent(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fullWidth = false;
    }
    NbButtonComponent_1 = NbButtonComponent;
    Object.defineProperty(NbButtonComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbButtonComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "small", {
        get: function () {
            return this.size === NbButtonComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "medium", {
        get: function () {
            return this.size === NbButtonComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "large", {
        get: function () {
            return this.size === NbButtonComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "primary", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "info", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "success", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "warning", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "danger", {
        get: function () {
            return this.status === NbButtonComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "rectangle", {
        get: function () {
            return this.shape === NbButtonComponent_1.SHAPE_RECTANGLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "round", {
        get: function () {
            return this.shape === NbButtonComponent_1.SHAPE_ROUND;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "semiRound", {
        get: function () {
            return this.shape === NbButtonComponent_1.SHAPE_SEMI_ROUND;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "tabbable", {
        // issue #794
        get: function () {
            return this.disabled ? '-1' : '0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setSize", {
        /**
         * Button size, available sizes:
         * `xxsmall`, `xsmall`, `small`, `medium`, `large`
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setStatus", {
        /**
         * Button status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setShape", {
        /**
         * Button shapes: `rectangle`, `round`, `semi-round`
         * @param {string} val
         */
        set: function (val) {
            this.shape = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setHero", {
        /**
         * Adds `hero` styles
         * @param {boolean} val
         */
        set: function (val) {
            this.hero = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setDisabled", {
        /**
         * Disables the button
         * @param {boolean} val
         */
        set: function (val) {
            this.disabled = convertToBoolProperty(val);
            this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setFullWidth", {
        /**
         * If set element will fill its container
         * @param {boolean}
         */
        set: function (value) {
            this.fullWidth = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbButtonComponent.prototype, "setOutline", {
        /**
         * Adds `outline` styles
         * @param {boolean} val
         */
        set: function (val) {
            this.outline = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * Keep this handler to partially support anchor disabling.
     * Unlike button, anchor doesn't have 'disabled' DOM property,
     * so handler will be called anyway. We preventing navigation and bubbling.
     * Disabling is partial due to click handlers precedence. Consider example:
     * <a nbButton [disabled]="true" (click)="clickHandler()">...</a>
     * 'clickHandler' will be called before our host listener below. We can't prevent
     * such handlers call.
     */
    NbButtonComponent.prototype.onClick = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    var NbButtonComponent_1;
    NbButtonComponent.SIZE_XSMALL = 'xsmall';
    NbButtonComponent.SIZE_SMALL = 'small';
    NbButtonComponent.SIZE_MEDIUM = 'medium';
    NbButtonComponent.SIZE_LARGE = 'large';
    NbButtonComponent.STATUS_PRIMARY = 'primary';
    NbButtonComponent.STATUS_INFO = 'info';
    NbButtonComponent.STATUS_SUCCESS = 'success';
    NbButtonComponent.STATUS_WARNING = 'warning';
    NbButtonComponent.STATUS_DANGER = 'danger';
    NbButtonComponent.SHAPE_RECTANGLE = 'rectangle';
    NbButtonComponent.SHAPE_ROUND = 'round';
    NbButtonComponent.SHAPE_SEMI_ROUND = 'semi-round';
    __decorate$45([
        i0.HostBinding('class.btn-xsmall'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "xsmall", null);
    __decorate$45([
        i0.HostBinding('class.btn-small'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "small", null);
    __decorate$45([
        i0.HostBinding('class.btn-medium'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "medium", null);
    __decorate$45([
        i0.HostBinding('class.btn-large'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "large", null);
    __decorate$45([
        i0.HostBinding('class.btn-primary'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "primary", null);
    __decorate$45([
        i0.HostBinding('class.btn-info'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "info", null);
    __decorate$45([
        i0.HostBinding('class.btn-success'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "success", null);
    __decorate$45([
        i0.HostBinding('class.btn-warning'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "warning", null);
    __decorate$45([
        i0.HostBinding('class.btn-danger'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "danger", null);
    __decorate$45([
        i0.HostBinding('class.btn-rectangle'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "rectangle", null);
    __decorate$45([
        i0.HostBinding('class.btn-round'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "round", null);
    __decorate$45([
        i0.HostBinding('class.btn-semi-round'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "semiRound", null);
    __decorate$45([
        i0.HostBinding('class.btn-hero'),
        __metadata$32("design:type", Boolean)
    ], NbButtonComponent.prototype, "hero", void 0);
    __decorate$45([
        i0.HostBinding('class.btn-outline'),
        __metadata$32("design:type", Boolean)
    ], NbButtonComponent.prototype, "outline", void 0);
    __decorate$45([
        i0.HostBinding('attr.aria-disabled'),
        i0.HostBinding('class.btn-disabled'),
        __metadata$32("design:type", Boolean)
    ], NbButtonComponent.prototype, "disabled", void 0);
    __decorate$45([
        i0.HostBinding('attr.tabindex'),
        __metadata$32("design:type", String),
        __metadata$32("design:paramtypes", [])
    ], NbButtonComponent.prototype, "tabbable", null);
    __decorate$45([
        i0.HostBinding('class.btn-full-width'),
        __metadata$32("design:type", Object)
    ], NbButtonComponent.prototype, "fullWidth", void 0);
    __decorate$45([
        i0.Input('size'),
        __metadata$32("design:type", String),
        __metadata$32("design:paramtypes", [String])
    ], NbButtonComponent.prototype, "setSize", null);
    __decorate$45([
        i0.Input('status'),
        __metadata$32("design:type", String),
        __metadata$32("design:paramtypes", [String])
    ], NbButtonComponent.prototype, "setStatus", null);
    __decorate$45([
        i0.Input('shape'),
        __metadata$32("design:type", String),
        __metadata$32("design:paramtypes", [String])
    ], NbButtonComponent.prototype, "setShape", null);
    __decorate$45([
        i0.Input('hero'),
        __metadata$32("design:type", Boolean),
        __metadata$32("design:paramtypes", [Boolean])
    ], NbButtonComponent.prototype, "setHero", null);
    __decorate$45([
        i0.Input('disabled'),
        __metadata$32("design:type", Boolean),
        __metadata$32("design:paramtypes", [Boolean])
    ], NbButtonComponent.prototype, "setDisabled", null);
    __decorate$45([
        i0.Input('fullWidth'),
        __metadata$32("design:type", Object),
        __metadata$32("design:paramtypes", [Object])
    ], NbButtonComponent.prototype, "setFullWidth", null);
    __decorate$45([
        i0.Input('outline'),
        __metadata$32("design:type", Boolean),
        __metadata$32("design:paramtypes", [Boolean])
    ], NbButtonComponent.prototype, "setOutline", null);
    __decorate$45([
        i0.HostListener('click', ['$event']),
        __metadata$32("design:type", Function),
        __metadata$32("design:paramtypes", [Event]),
        __metadata$32("design:returntype", void 0)
    ], NbButtonComponent.prototype, "onClick", null);
    NbButtonComponent = NbButtonComponent_1 = __decorate$45([
        i0.Component({
            selector: 'button[nbButton],a[nbButton],input[type="button"][nbButton],input[type="submit"][nbButton]',
            styles: [":host{text-transform:uppercase;letter-spacing:0.4px;border:2px solid transparent;transition:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;text-align:center;text-decoration:none;display:inline-block;white-space:nowrap;vertical-align:middle;user-select:none}:host:hover,:host:focus{text-decoration:none}:host.btn-full-width{width:100%} "],
            template: "\n    <ng-content></ng-content>\n  ",
        }),
        __metadata$32("design:paramtypes", [i0.Renderer2,
            i0.ElementRef])
    ], NbButtonComponent);
    return NbButtonComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$44 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_BUTTON_COMPONENTS = [
    NbButtonComponent,
];
var NbButtonModule = /** @class */ (function () {
    function NbButtonModule() {
    }
    NbButtonModule = __decorate$44([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: NB_BUTTON_COMPONENTS.slice(),
            exports: NB_BUTTON_COMPONENTS.slice(),
        })
    ], NbButtonModule);
    return NbButtonModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$43 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SERVICES = [
    { provide: NbDateService, useClass: NbNativeDateService },
    i1.DatePipe,
    NbCalendarMonthModelService,
];
var COMPONENTS = [
    NbCalendarHeaderComponent,
    NbCalendarNavigationComponent,
    NbCalendarPageableNavigationComponent,
    NbCalendarDaysNamesComponent,
    NbCalendarYearPickerComponent,
    NbCalendarMonthPickerComponent,
    NbCalendarDayPickerComponent,
    NbCalendarDayCellComponent,
    NbCalendarMonthCellComponent,
    NbCalendarYearCellComponent,
    NbCalendarPickerRowComponent,
    NbCalendarPickerComponent,
];
/**
 * `NbCalendarKitModule` is a module that contains multiple useful components for building custom calendars.
 * So if you think our calendars is not enough powerful for you just use calendar-kit and build your own calendar!
 *
 * Available components:
 * - `NbCalendarDayPicker`
 * - `NbCalendarDayCell`
 * - `NbCalendarMonthPicker`
 * - `NbCalendarMonthCell`
 * - `NbCalendarYearPicker`
 * - `NbCalendarYearCell`
 * - `NbCalendarHeader`
 * - `NbCalendarNavigation`
 * - `NbCalendarPageableNavigation`
 *
 * For example you can easily build full calendar:
 * @stacked-example(Full calendar, calendar-kit/calendar-kit-full-calendar.component)
 * */
var NbCalendarKitModule = /** @class */ (function () {
    function NbCalendarKitModule() {
    }
    NbCalendarKitModule = __decorate$43([
        i0.NgModule({
            imports: [NbSharedModule, NbButtonModule],
            exports: COMPONENTS.slice(),
            declarations: COMPONENTS.slice(),
            providers: SERVICES.slice(),
            entryComponents: [
                NbCalendarDayCellComponent,
                NbCalendarMonthCellComponent,
                NbCalendarYearCellComponent,
            ],
        })
    ], NbCalendarKitModule);
    return NbCalendarKitModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$28 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$17 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Calendar component provides a capability to choose a date.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Showcase, calendar/calendar-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCalendarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to select ranges you can use `NbCalendarRangeComponent`.
 *
 * ```html
 * <nb-calendar-range [(range)]="range"></nb-calendar-range>
 * <nb-calendar-range [range]="range" (rangeChange)="handleRangeChange($event)"></nb-calendar-range>
 * ```
 *
 * In order to use it, you have to import `NbCalendarRangeModule`.
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * The calendar component is supplied with a calendar header that contains navigate today button.
 * If you do not want to use it you can hide calendar header using `showHeader` property.
 * @stacked-example(Header, calendar/calendar-without-header.component)
 *
 * As you can see in the basic usage example calendar contains previous and next month days
 * which can be disabled using `boundingMonth` property.
 * @stacked-example(Bounding months, calendar/calendar-bounding-month.component)
 *
 * You can define starting view of the calendar by setting `startView` property.
 * Available values: year, month and date.
 * @stacked-example(Start view, calendar/calendar-start-view.component)
 *
 * You can use a larger version of the calendar by defining size property.
 * Available values: medium(which is default) and large.
 * @stacked-example(Size, calendar/calendar-size.component)
 *
 * Calendar supports min and max dates which disables values out of min-max range.
 * @stacked-example(Borders, calendar/calendar-min-max.component)
 *
 * Also, you can define custom filter property that should be predicate which receives
 * date and returns false if this date has to be disabled. In this example, we provide the filter
 * which disables weekdays.
 * @stacked-example(Filter, calendar/calendar-filter.component)
 *
 * If you need create custom cells you can easily provide custom components for
 * calendar. For examples if you want to show any average price under each date you can
 * just provide custom `dayCellComponent`. Custom cells for month and year can be provided
 * the same way, check API reference.
 * @stacked-example(Custom day cell, calendar/calendar-custom-day-cell-showcase.component)
 *
 * @styles
 *
 * calendar-width
 * calendar-body-height
 * calendar-header-title-font-size
 * calendar-header-title-font-weight
 * calendar-header-sub-title-font-size
 * calendar-header-sub-title-font-weight
 * calendar-navigation-button-width
 * calendar-selected-item-bg
 * calendar-hover-item-bg
 * calendar-today-item-bg
 * calendar-active-item-bg
 * calendar-fg
 * calendar-selected-fg
 * calendar-day-cell-width
 * calendar-day-cell-height
 * calendar-month-cell-width
 * calendar-month-cell-height
 * calendar-year-cell-width
 * calendar-year-cell-height
 * calendar-inactive-opacity
 * calendar-disabled-opacity
 * calendar-border-radius
 * calendar-weekday-width
 * calendar-weekday-height
 * calendar-weekday-font-size
 * calendar-weekday-font-weight
 * calendar-weekday-fg
 * calendar-weekday-holiday-fg
 * calendar-range-bg-in-range
 * calendar-large-width
 * calendar-large-body-height
 * calendar-day-cell-large-width
 * calendar-day-cell-large-height
 * calendar-month-cell-large-width
 * calendar-month-cell-large-height
 * calendar-year-cell-large-width
 * calendar-year-cell-large-height
 * */
var NbCalendarComponent = /** @class */ (function () {
    function NbCalendarComponent() {
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for calendar.
         * */
        this.startView = exports.NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = exports.NbCalendarSize.MEDIUM;
        /**
         * Determines should we show calendars header or not.
         * */
        this.showHeader = true;
        /**
         * Emits date when selected.
         * */
        this.dateChange = new i0.EventEmitter();
    }
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", Boolean)
    ], NbCalendarComponent.prototype, "boundingMonth", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", String)
    ], NbCalendarComponent.prototype, "startView", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", Object)
    ], NbCalendarComponent.prototype, "min", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", Object)
    ], NbCalendarComponent.prototype, "max", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", Function)
    ], NbCalendarComponent.prototype, "filter", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", i0.Type)
    ], NbCalendarComponent.prototype, "dayCellComponent", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", i0.Type)
    ], NbCalendarComponent.prototype, "monthCellComponent", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", i0.Type)
    ], NbCalendarComponent.prototype, "yearCellComponent", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", String)
    ], NbCalendarComponent.prototype, "size", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", Object)
    ], NbCalendarComponent.prototype, "visibleDate", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", Boolean)
    ], NbCalendarComponent.prototype, "showHeader", void 0);
    __decorate$28([
        i0.Input(),
        __metadata$17("design:type", Object)
    ], NbCalendarComponent.prototype, "date", void 0);
    __decorate$28([
        i0.Output(),
        __metadata$17("design:type", i0.EventEmitter)
    ], NbCalendarComponent.prototype, "dateChange", void 0);
    NbCalendarComponent = __decorate$28([
        i0.Component({
            selector: 'nb-calendar',
            template: "\n    <nb-base-calendar\n      [boundingMonth]=\"boundingMonth\"\n      [startView]=\"startView\"\n      [date]=\"date\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      [dayCellComponent]=\"dayCellComponent\"\n      [monthCellComponent]=\"monthCellComponent\"\n      [yearCellComponent]=\"yearCellComponent\"\n      [size]=\"size\"\n      [visibleDate]=\"visibleDate\"\n      [showHeader]=\"showHeader\"\n      (dateChange)=\"dateChange.emit($event)\"\n    ></nb-base-calendar>\n  ",
        })
    ], NbCalendarComponent);
    return NbCalendarComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$47 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$33 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The basis for calendar and range calendar components.
 * Encapsulates common behavior - store calendar state and perform navigation
 * between pickers.
 * */
var NbBaseCalendarComponent = /** @class */ (function () {
    function NbBaseCalendarComponent(dateService) {
        this.dateService = dateService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines active view for calendar.
         * */
        this.activeViewMode = exports.NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = exports.NbCalendarSize.MEDIUM;
        /**
         * Determines should we show calendars header or not.
         * */
        this.showHeader = true;
        /**
         * Emits date when selected.
         * */
        this.dateChange = new i0.EventEmitter();
        this.ViewMode = exports.NbCalendarViewMode;
    }
    NbBaseCalendarComponent.prototype.ngOnInit = function () {
        if (!this.visibleDate) {
            this.visibleDate = this.dateService.today();
        }
    };
    Object.defineProperty(NbBaseCalendarComponent.prototype, "medium", {
        get: function () {
            return this.size === exports.NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBaseCalendarComponent.prototype, "large", {
        get: function () {
            return this.size === exports.NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbBaseCalendarComponent.prototype.setViewMode = function (viewMode) {
        this.activeViewMode = viewMode;
    };
    NbBaseCalendarComponent.prototype.setVisibleDate = function (visibleDate) {
        this.visibleDate = visibleDate;
    };
    NbBaseCalendarComponent.prototype.prevMonth = function () {
        this.changeVisibleMonth(-1);
    };
    NbBaseCalendarComponent.prototype.nextMonth = function () {
        this.changeVisibleMonth(1);
    };
    NbBaseCalendarComponent.prototype.prevYears = function () {
        this.changeVisibleYear(-1);
    };
    NbBaseCalendarComponent.prototype.nextYears = function () {
        this.changeVisibleYear(1);
    };
    NbBaseCalendarComponent.prototype.navigateToday = function () {
        this.setViewMode(exports.NbCalendarViewMode.DATE);
        this.visibleDate = this.dateService.today();
    };
    NbBaseCalendarComponent.prototype.changeVisibleMonth = function (direction) {
        this.visibleDate = this.dateService.addMonth(this.visibleDate, direction);
    };
    NbBaseCalendarComponent.prototype.changeVisibleYear = function (direction) {
        this.visibleDate = this.dateService.addYear(this.visibleDate, direction * 20);
    };
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", Boolean)
    ], NbBaseCalendarComponent.prototype, "boundingMonth", void 0);
    __decorate$47([
        i0.Input('startView'),
        __metadata$33("design:type", String)
    ], NbBaseCalendarComponent.prototype, "activeViewMode", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", Object)
    ], NbBaseCalendarComponent.prototype, "min", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", Object)
    ], NbBaseCalendarComponent.prototype, "max", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", Function)
    ], NbBaseCalendarComponent.prototype, "filter", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", i0.Type)
    ], NbBaseCalendarComponent.prototype, "dayCellComponent", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", i0.Type)
    ], NbBaseCalendarComponent.prototype, "monthCellComponent", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", i0.Type)
    ], NbBaseCalendarComponent.prototype, "yearCellComponent", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", String)
    ], NbBaseCalendarComponent.prototype, "size", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", Object)
    ], NbBaseCalendarComponent.prototype, "visibleDate", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", Boolean)
    ], NbBaseCalendarComponent.prototype, "showHeader", void 0);
    __decorate$47([
        i0.Input(),
        __metadata$33("design:type", Object)
    ], NbBaseCalendarComponent.prototype, "date", void 0);
    __decorate$47([
        i0.Output(),
        __metadata$33("design:type", i0.EventEmitter)
    ], NbBaseCalendarComponent.prototype, "dateChange", void 0);
    __decorate$47([
        i0.HostBinding('class.medium'),
        __metadata$33("design:type", Object),
        __metadata$33("design:paramtypes", [])
    ], NbBaseCalendarComponent.prototype, "medium", null);
    __decorate$47([
        i0.HostBinding('class.large'),
        __metadata$33("design:type", Object),
        __metadata$33("design:paramtypes", [])
    ], NbBaseCalendarComponent.prototype, "large", null);
    NbBaseCalendarComponent = __decorate$47([
        i0.Component({
            selector: 'nb-base-calendar',
            template: "<nb-card> <nb-card-header *ngIf=\"showHeader\"> <nb-calendar-header (navigateToday)=\"navigateToday()\"></nb-calendar-header> </nb-card-header> <nb-card-body [ngSwitch]=\"activeViewMode\"> <ng-container *ngSwitchCase=\"ViewMode.DATE\"> <nb-calendar-pageable-navigation *ngSwitchCase=\"ViewMode.DATE\" [date]=\"visibleDate\" (next)=\"nextMonth()\" (prev)=\"prevMonth()\" (changeMode)=\"setViewMode(ViewMode.YEAR)\"> </nb-calendar-pageable-navigation> <nb-calendar-day-picker [boundingMonths]=\"boundingMonth\" [cellComponent]=\"dayCellComponent\" [min]=\"min\" [max]=\"max\" [filter]=\"filter\" [visibleDate]=\"visibleDate\" [size]=\"size\" [date]=\"date\" (dateChange)=\"dateChange.emit($event)\"> </nb-calendar-day-picker> </ng-container> <ng-container *ngSwitchCase=\"ViewMode.YEAR\"> <nb-calendar-pageable-navigation [date]=\"visibleDate\" (next)=\"nextYears()\" (prev)=\"prevYears()\" (changeMode)=\"setViewMode(ViewMode.DATE)\"> </nb-calendar-pageable-navigation> <nb-calendar-year-picker [cellComponent]=\"yearCellComponent\" [date]=\"date\" [min]=\"min\" [max]=\"max\" [filter]=\"filter\" [size]=\"size\" [year]=\"visibleDate\" (yearChange)=\"setVisibleDate($event); setViewMode(ViewMode.MONTH)\"> </nb-calendar-year-picker> </ng-container> <ng-container *ngSwitchCase=\"ViewMode.MONTH\"> <nb-calendar-navigation [date]=\"visibleDate\" (changeMode)=\"setViewMode(ViewMode.DATE)\"> </nb-calendar-navigation> <nb-calendar-month-picker [cellComponent]=\"monthCellComponent\" [min]=\"min\" [max]=\"max\" [filter]=\"filter\" [size]=\"size\" [month]=\"visibleDate\" (monthChange)=\"setVisibleDate($event); setViewMode(ViewMode.DATE)\"> </nb-calendar-month-picker> </ng-container> </nb-card-body> </nb-card> ",
        }),
        __metadata$33("design:paramtypes", [NbDateService])
    ], NbBaseCalendarComponent);
    return NbBaseCalendarComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$46 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbBaseCalendarModule = /** @class */ (function () {
    function NbBaseCalendarModule() {
    }
    NbBaseCalendarModule = __decorate$46([
        i0.NgModule({
            imports: [NbCalendarKitModule, NbSharedModule, NbCardModule],
            exports: [NbBaseCalendarComponent],
            declarations: [NbBaseCalendarComponent],
        })
    ], NbBaseCalendarModule);
    return NbBaseCalendarModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$27 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbCalendarModule = /** @class */ (function () {
    function NbCalendarModule() {
    }
    NbCalendarModule = __decorate$27([
        i0.NgModule({
            imports: [NbBaseCalendarModule],
            exports: [NbCalendarComponent],
            declarations: [NbCalendarComponent],
        })
    ], NbCalendarModule);
    return NbCalendarModule;
}());

var __decorate$50 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$35 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbCalendarRangeDayCellComponent = /** @class */ (function () {
    function NbCalendarRangeDayCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new i0.EventEmitter(true);
    }
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "inRange", {
        get: function () {
            return this.date && this.selectedValue
                && (this.selectedValue.start && this.dateService.compareDates(this.date, this.selectedValue.start) >= 0)
                && (this.selectedValue.end && this.dateService.compareDates(this.date, this.selectedValue.end) <= 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "start", {
        get: function () {
            return this.date && this.selectedValue && this.selectedValue.end
                && (this.selectedValue.start && this.dateService.isSameDay(this.date, this.selectedValue.start));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "end", {
        get: function () {
            return this.date && this.selectedValue &&
                (this.selectedValue.end && this.dateService.isSameDay(this.date, this.selectedValue.end));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "today", {
        get: function () {
            return this.date && this.dateService.isSameDay(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "boundingMonth", {
        get: function () {
            return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "selected", {
        get: function () {
            return this.date && this.selectedValue
                && (this.selectedValue.start && this.dateService.isSameDay(this.date, this.selectedValue.start)) || this.end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "empty", {
        get: function () {
            return !this.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "disabled", {
        get: function () {
            return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "day", {
        get: function () {
            return this.date && this.dateService.getDate(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarRangeDayCellComponent.prototype.onClick = function () {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarRangeDayCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    };
    NbCalendarRangeDayCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    };
    NbCalendarRangeDayCellComponent.prototype.dontFitFilter = function () {
        return this.date && this.filter && !this.filter(this.date);
    };
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "date", void 0);
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "selectedValue", void 0);
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "visibleDate", void 0);
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "min", void 0);
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "max", void 0);
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Function)
    ], NbCalendarRangeDayCellComponent.prototype, "filter", void 0);
    __decorate$50([
        i0.Output(),
        __metadata$35("design:type", i0.EventEmitter)
    ], NbCalendarRangeDayCellComponent.prototype, "select", void 0);
    __decorate$50([
        i0.HostBinding('class.in-range'),
        __metadata$35("design:type", Boolean),
        __metadata$35("design:paramtypes", [])
    ], NbCalendarRangeDayCellComponent.prototype, "inRange", null);
    __decorate$50([
        i0.HostBinding('class.start'),
        __metadata$35("design:type", Boolean),
        __metadata$35("design:paramtypes", [])
    ], NbCalendarRangeDayCellComponent.prototype, "start", null);
    __decorate$50([
        i0.HostBinding('class.end'),
        __metadata$35("design:type", Boolean),
        __metadata$35("design:paramtypes", [])
    ], NbCalendarRangeDayCellComponent.prototype, "end", null);
    NbCalendarRangeDayCellComponent = __decorate$50([
        i0.Component({
            selector: 'nb-calendar-range-day-cell',
            template: "\n    <div\n      class=\"day-cell\"\n      [class.today]=\"today\"\n      [class.selected]=\"selected\"\n      [class.bounding-month]=\"boundingMonth\"\n      [class.start]=\"start\"\n      [class.end]=\"end\"\n      [class.in-range]=\"inRange\"\n      [class.disabled]=\"disabled\">\n      {{ day }}\n    </div>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            host: { '(click)': 'onClick()', 'class': 'range-cell' },
        }),
        __metadata$35("design:paramtypes", [NbDateService])
    ], NbCalendarRangeDayCellComponent);
    return NbCalendarRangeDayCellComponent;
}());
var NbCalendarRangeYearCellComponent = /** @class */ (function () {
    function NbCalendarRangeYearCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new i0.EventEmitter(true);
    }
    Object.defineProperty(NbCalendarRangeYearCellComponent.prototype, "selected", {
        get: function () {
            return this.selectedValue && this.dateService.isSameYear(this.date, this.selectedValue.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeYearCellComponent.prototype, "today", {
        get: function () {
            return this.date && this.dateService.isSameYear(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeYearCellComponent.prototype, "disabled", {
        get: function () {
            return this.smallerThanMin() || this.greaterThanMax();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeYearCellComponent.prototype, "year", {
        get: function () {
            return this.dateService.getYear(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarRangeYearCellComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarRangeYearCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    };
    NbCalendarRangeYearCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    };
    NbCalendarRangeYearCellComponent.prototype.yearStart = function () {
        return this.dateService.getYearStart(this.date);
    };
    NbCalendarRangeYearCellComponent.prototype.yearEnd = function () {
        return this.dateService.getYearEnd(this.date);
    };
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Object)
    ], NbCalendarRangeYearCellComponent.prototype, "date", void 0);
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Object)
    ], NbCalendarRangeYearCellComponent.prototype, "min", void 0);
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Object)
    ], NbCalendarRangeYearCellComponent.prototype, "max", void 0);
    __decorate$50([
        i0.Input(),
        __metadata$35("design:type", Object)
    ], NbCalendarRangeYearCellComponent.prototype, "selectedValue", void 0);
    __decorate$50([
        i0.Output(),
        __metadata$35("design:type", i0.EventEmitter)
    ], NbCalendarRangeYearCellComponent.prototype, "select", void 0);
    __decorate$50([
        i0.HostBinding('class.selected'),
        __metadata$35("design:type", Boolean),
        __metadata$35("design:paramtypes", [])
    ], NbCalendarRangeYearCellComponent.prototype, "selected", null);
    __decorate$50([
        i0.HostBinding('class.today'),
        __metadata$35("design:type", Boolean),
        __metadata$35("design:paramtypes", [])
    ], NbCalendarRangeYearCellComponent.prototype, "today", null);
    __decorate$50([
        i0.HostBinding('class.disabled'),
        __metadata$35("design:type", Boolean),
        __metadata$35("design:paramtypes", [])
    ], NbCalendarRangeYearCellComponent.prototype, "disabled", null);
    __decorate$50([
        i0.HostListener('click'),
        __metadata$35("design:type", Function),
        __metadata$35("design:paramtypes", []),
        __metadata$35("design:returntype", void 0)
    ], NbCalendarRangeYearCellComponent.prototype, "onClick", null);
    NbCalendarRangeYearCellComponent = __decorate$50([
        i0.Component({
            selector: 'nb-calendar-range-year-cell',
            template: "{{ year }}",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            host: { 'class': 'year-cell' },
        }),
        __metadata$35("design:paramtypes", [NbDateService])
    ], NbCalendarRangeYearCellComponent);
    return NbCalendarRangeYearCellComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$49 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$34 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * CalendarRange component provides a capability to choose a date range.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarRangeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCalendarRangeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * CalendarRange component supports all of the Calendar component customization properties. More defails can be found
 * in the [Calendar component docs](docs/components/calendar).
 *
 * @styles
 *
 * calendar-width
 * calendar-body-height
 * calendar-header-title-font-size
 * calendar-header-title-font-weight
 * calendar-header-sub-title-font-size
 * calendar-header-sub-title-font-weight
 * calendar-navigation-button-width
 * calendar-selected-item-bg
 * calendar-hover-item-bg
 * calendar-today-item-bg
 * calendar-active-item-bg
 * calendar-fg
 * calendar-selected-fg
 * calendar-day-cell-width
 * calendar-day-cell-height
 * calendar-month-cell-width
 * calendar-month-cell-height
 * calendar-year-cell-width
 * calendar-year-cell-height
 * calendar-inactive-opacity
 * calendar-disabled-opacity
 * calendar-border-radius
 * calendar-weekday-width
 * calendar-weekday-height
 * calendar-weekday-font-size
 * calendar-weekday-font-weight
 * calendar-weekday-fg
 * calendar-weekday-holiday-fg
 * calendar-range-bg-in-range
 * calendar-large-width
 * calendar-large-body-height
 * calendar-day-cell-large-width
 * calendar-day-cell-large-height
 * calendar-month-cell-large-width
 * calendar-month-cell-large-height
 * calendar-year-cell-large-width
 * calendar-year-cell-large-height
 * */
var NbCalendarRangeComponent = /** @class */ (function () {
    function NbCalendarRangeComponent(dateService) {
        this.dateService = dateService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for the calendar.
         * */
        this.startView = exports.NbCalendarViewMode.DATE;
        this.dayCellComponent = NbCalendarRangeDayCellComponent;
        this.yearCellComponent = NbCalendarRangeYearCellComponent;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = exports.NbCalendarSize.MEDIUM;
        /**
         * Determines should we show calendars header or not.
         * */
        this.showHeader = true;
        /**
         * Emits range when start selected and emits again when end selected.
         * */
        this.rangeChange = new i0.EventEmitter();
    }
    Object.defineProperty(NbCalendarRangeComponent.prototype, "_cellComponent", {
        /**
         * Custom day cell component. Have to implement `NbCalendarCell` interface.
         * */
        set: function (cellComponent) {
            if (cellComponent) {
                this.dayCellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeComponent.prototype, "_yearCellComponent", {
        /**
         * Custom year cell component. Have to implement `NbCalendarCell` interface.
         * */
        set: function (cellComponent) {
            if (cellComponent) {
                this.yearCellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarRangeComponent.prototype.onChange = function (date) {
        this.initDateIfNull();
        this.handleSelected(date);
    };
    NbCalendarRangeComponent.prototype.initDateIfNull = function () {
        if (!this.range) {
            this.range = { start: null, end: null };
        }
    };
    NbCalendarRangeComponent.prototype.handleSelected = function (date) {
        if (this.selectionStarted()) {
            this.selectEnd(date);
        }
        else {
            this.selectStart(date);
        }
    };
    NbCalendarRangeComponent.prototype.selectionStarted = function () {
        var _a = this.range, start = _a.start, end = _a.end;
        return start && !end;
    };
    NbCalendarRangeComponent.prototype.selectStart = function (start) {
        this.selectRange({ start: start });
    };
    NbCalendarRangeComponent.prototype.selectEnd = function (date) {
        var start = this.range.start;
        if (this.dateService.compareDates(date, start) > 0) {
            this.selectRange({ start: start, end: date });
        }
        else {
            this.selectRange({ start: date, end: start });
        }
    };
    NbCalendarRangeComponent.prototype.selectRange = function (range) {
        this.range = range;
        this.rangeChange.emit(range);
    };
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", Boolean)
    ], NbCalendarRangeComponent.prototype, "boundingMonth", void 0);
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", String)
    ], NbCalendarRangeComponent.prototype, "startView", void 0);
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", Object)
    ], NbCalendarRangeComponent.prototype, "min", void 0);
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", Object)
    ], NbCalendarRangeComponent.prototype, "max", void 0);
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", Function)
    ], NbCalendarRangeComponent.prototype, "filter", void 0);
    __decorate$49([
        i0.Input('dayCellComponent'),
        __metadata$34("design:type", i0.Type),
        __metadata$34("design:paramtypes", [i0.Type])
    ], NbCalendarRangeComponent.prototype, "_cellComponent", null);
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", i0.Type)
    ], NbCalendarRangeComponent.prototype, "monthCellComponent", void 0);
    __decorate$49([
        i0.Input('yearCellComponent'),
        __metadata$34("design:type", i0.Type),
        __metadata$34("design:paramtypes", [i0.Type])
    ], NbCalendarRangeComponent.prototype, "_yearCellComponent", null);
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", String)
    ], NbCalendarRangeComponent.prototype, "size", void 0);
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", Object)
    ], NbCalendarRangeComponent.prototype, "visibleDate", void 0);
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", Boolean)
    ], NbCalendarRangeComponent.prototype, "showHeader", void 0);
    __decorate$49([
        i0.Input(),
        __metadata$34("design:type", Object)
    ], NbCalendarRangeComponent.prototype, "range", void 0);
    __decorate$49([
        i0.Output(),
        __metadata$34("design:type", i0.EventEmitter)
    ], NbCalendarRangeComponent.prototype, "rangeChange", void 0);
    NbCalendarRangeComponent = __decorate$49([
        i0.Component({
            selector: 'nb-calendar-range',
            template: "\n    <nb-base-calendar\n      [date]=\"range\"\n      (dateChange)=\"onChange($event)\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      [startView]=\"startView\"\n      [boundingMonth]=\"boundingMonth\"\n      [dayCellComponent]=\"dayCellComponent\"\n      [monthCellComponent]=\"monthCellComponent\"\n      [yearCellComponent]=\"yearCellComponent\"\n      [visibleDate]=\"visibleDate\"\n      [showHeader]=\"showHeader\"\n      [size]=\"size\"\n    ></nb-base-calendar>\n  ",
        }),
        __metadata$34("design:paramtypes", [NbDateService])
    ], NbCalendarRangeComponent);
    return NbCalendarRangeComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$48 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbCalendarRangeModule = /** @class */ (function () {
    function NbCalendarRangeModule() {
    }
    NbCalendarRangeModule = __decorate$48([
        i0.NgModule({
            imports: [NbBaseCalendarModule],
            exports: [NbCalendarRangeComponent],
            declarations: [
                NbCalendarRangeComponent,
                NbCalendarRangeDayCellComponent,
                NbCalendarRangeYearCellComponent,
            ],
            entryComponents: [NbCalendarRangeDayCellComponent, NbCalendarRangeYearCellComponent],
        })
    ], NbCalendarRangeModule);
    return NbCalendarRangeModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function isUrlPathEqual(path, link) {
    var locationPath = getPathPartOfUrl(path);
    return link === locationPath;
}
function isUrlPathContain(path, link) {
    var locationPath = getPathPartOfUrl(path);
    var endOfUrlSegmentRegExp = /\/|^$/;
    return locationPath.startsWith(link) &&
        locationPath.slice(link.length).charAt(0).search(endOfUrlSegmentRegExp) !== -1;
}
function getPathPartOfUrl(url) {
    return url.match(/.*?(?=[?;#]|$)/)[0];
}

var __decorate$53 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$37 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This service determines whether we should scroll the layout back to top.
 * This occurs when the page is changed, so when current url PATH is not equal to the previous one.
 *
 *  TODO: this is most likely a temporary solutions as recently Angular introduces ViewportScroll
 *  and scroll restoration process
 */
var NbRestoreScrollTopHelper = /** @class */ (function () {
    function NbRestoreScrollTopHelper(router) {
        this.router = router;
    }
    NbRestoreScrollTopHelper.prototype.shouldRestore = function () {
        var _this = this;
        return this.router.events
            .pipe(rxjs_operators.startWith(null), rxjs_operators.filter(function (event) { return event === null || event instanceof _angular_router.NavigationEnd; }), rxjs_operators.pairwise(), rxjs_operators.map(function (_a) {
            var prev = _a[0], current = _a[1];
            return _this.pageChanged(prev, current);
        }), rxjs_operators.filter(function (res) { return !!res; }));
    };
    NbRestoreScrollTopHelper.prototype.pageChanged = function (prev, current) {
        return !prev || getPathPartOfUrl(prev.url) !== getPathPartOfUrl(current.url);
    };
    NbRestoreScrollTopHelper = __decorate$53([
        i0.Injectable(),
        __metadata$37("design:paramtypes", [_angular_router.Router])
    ], NbRestoreScrollTopHelper);
    return NbRestoreScrollTopHelper;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$52 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$36 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$10 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * A container component which determines a content position inside of the layout.
 * The layout could contain unlimited columns (not including the sidebars).
 *
 * By default the columns are ordered from the left to the right,
 * but it's also possible to overwrite this behavior by setting a `left` attribute to the column,
 * moving it to the very first position:
 *
 * @stacked-example(Column Left, layout/layout-column-left.component)
 */
var NbLayoutColumnComponent = /** @class */ (function () {
    function NbLayoutColumnComponent() {
    }
    Object.defineProperty(NbLayoutColumnComponent.prototype, "left", {
        /**
         * Move the column to the very left position in the layout.
         * @param {boolean} val
         */
        set: function (val) {
            this.leftValue = convertToBoolProperty(val);
            this.startValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutColumnComponent.prototype, "start", {
        /**
         * Make columnt first in the layout.
         * @param {boolean} val
         */
        set: function (val) {
            this.startValue = convertToBoolProperty(val);
            this.leftValue = false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$52([
        i0.HostBinding('class.left'),
        __metadata$36("design:type", Boolean)
    ], NbLayoutColumnComponent.prototype, "leftValue", void 0);
    __decorate$52([
        i0.HostBinding('class.start'),
        __metadata$36("design:type", Boolean)
    ], NbLayoutColumnComponent.prototype, "startValue", void 0);
    __decorate$52([
        i0.Input(),
        __metadata$36("design:type", Boolean),
        __metadata$36("design:paramtypes", [Boolean])
    ], NbLayoutColumnComponent.prototype, "left", null);
    __decorate$52([
        i0.Input(),
        __metadata$36("design:type", Boolean),
        __metadata$36("design:paramtypes", [Boolean])
    ], NbLayoutColumnComponent.prototype, "start", null);
    NbLayoutColumnComponent = __decorate$52([
        i0.Component({
            selector: 'nb-layout-column',
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], NbLayoutColumnComponent);
    return NbLayoutColumnComponent;
}());
/**
 * Page header component.
 * Located on top of the page above the layout columns and sidebars.
 * Could be made `fixed` by setting the corresponding property. In the fixed mode the header becomes
 * sticky to the top of the nb-layout (to of the page). Here's an example:
 *
 * @stacked-example(Fixed Header, layout/layout-fixed-header.component)
 *
 * In a pair with sidebar it is possible to setup a configuration when header is placed on a side of the sidebar
 * and not on top of it. To achieve this simply put a `subheader` property to the header like this:
 * ```html
 * <nb-layout-header subheader></nb-layout-header>
 * ```
 * @stacked-example(Subheader, layout/layout-sidebar-subheader.component)
 * Note that in such configuration sidebar shadow is removed and header cannot be make `fixed`.
 *
 * Same way you can put both `fixed` and `clipped` headers adding creating a sub-header for your app:
 *
 * @stacked-example(Subheader, layout/layout-subheader.component)
 *
 * @styles
 *
 * header-font-family
 * header-line-height
 * header-fg
 * header-bg
 * header-height
 * header-padding
 * header-shadow
 */
var NbLayoutHeaderComponent = /** @class */ (function () {
    // tslint:disable-next-line
    function NbLayoutHeaderComponent(layout) {
        this.layout = layout;
    }
    Object.defineProperty(NbLayoutHeaderComponent.prototype, "fixed", {
        /**
         * Makes the header sticky to the top of the nb-layout.
         * @param {boolean} val
         */
        set: function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutHeaderComponent.prototype, "subheader", {
        /**
         * Places header on a side of the sidebar, and not above.
         * Disables fixed mode for this header and remove a shadow from the sidebar.
         * @param {boolean} val
         */
        set: function (val) {
            this.subheaderValue = convertToBoolProperty(val);
            this.fixedValue = false;
            this.layout.withSubheader = this.subheaderValue;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$52([
        i0.HostBinding('class.fixed'),
        __metadata$36("design:type", Boolean)
    ], NbLayoutHeaderComponent.prototype, "fixedValue", void 0);
    __decorate$52([
        i0.HostBinding('class.subheader'),
        __metadata$36("design:type", Boolean)
    ], NbLayoutHeaderComponent.prototype, "subheaderValue", void 0);
    __decorate$52([
        i0.Input(),
        __metadata$36("design:type", Boolean),
        __metadata$36("design:paramtypes", [Boolean])
    ], NbLayoutHeaderComponent.prototype, "fixed", null);
    __decorate$52([
        i0.Input(),
        __metadata$36("design:type", Boolean),
        __metadata$36("design:paramtypes", [Boolean])
    ], NbLayoutHeaderComponent.prototype, "subheader", null);
    NbLayoutHeaderComponent = __decorate$52([
        i0.Component({
            selector: 'nb-layout-header',
            template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
        }),
        __param$10(0, i0.Inject(i0.forwardRef(function () { return NbLayoutComponent; }))),
        __metadata$36("design:paramtypes", [NbLayoutComponent])
    ], NbLayoutHeaderComponent);
    return NbLayoutHeaderComponent;
}());
/**
 * Page footer.
 * Located under the nb-layout content (specifically, under the columns).
 * Could be made `fixed`, becoming sticky to the bottom of the view port (window).
 *
 * @styles
 *
 * footer-height
 * footer-padding
 * footer-fg
 * footer-bg
 * footer-separator
 * footer-shadow
 */
var NbLayoutFooterComponent = /** @class */ (function () {
    function NbLayoutFooterComponent() {
    }
    Object.defineProperty(NbLayoutFooterComponent.prototype, "fixed", {
        /**
         * Makes the footer sticky to the bottom of the window.
         * @param {boolean} val
         */
        set: function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$52([
        i0.HostBinding('class.fixed'),
        __metadata$36("design:type", Boolean)
    ], NbLayoutFooterComponent.prototype, "fixedValue", void 0);
    __decorate$52([
        i0.Input(),
        __metadata$36("design:type", Boolean),
        __metadata$36("design:paramtypes", [Boolean])
    ], NbLayoutFooterComponent.prototype, "fixed", null);
    NbLayoutFooterComponent = __decorate$52([
        i0.Component({
            selector: 'nb-layout-footer',
            template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
        })
    ], NbLayoutFooterComponent);
    return NbLayoutFooterComponent;
}());
/**
 * Layout container component.
 * When using with Nebular Theme System it is required that all child components should be placed inside.
 *
 * Basic example of two column layout with header:
 *
 * @stacked-example(Showcase, layout/layout-showcase.component)
 *
 * Can contain the following components inside:
 *
 * ```html
 * <nb-layout>
 *  <nb-layout-header></nb-layout-header>
 *  <nb-layout-footer></nb-layout-column>
 *  <nb-layout-column></nb-layout-column>
 *  <nb-sidebar></nb-sidebar>
 * </nb-layout>
 * ```
 * ### Installation
 *
 * Import `NbLayoutModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbLayoutModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbLayoutModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbLayoutModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 * By default the layout fills up the whole view-port.
 * The window scrollbars are disabled on the body and moved inside of the nb-layout, so that the scrollbars
 * won't mess with the fixed nb-header.
 *
 * The child components are projected into a flexible layout structure allowing to adjust the layout behavior
 * based on the settings provided.
 *
 * The layout content (columns) becomes centered when the window width is more than
 * the value specified in the theme variable `layout-content-width`.
 *
 * The layout also contains the area on the very top (the first child of the nb-layout), which could be used
 * to dynamically append some components like modals or spinners/loaders
 * so that they are located on top of the elements hierarchy.
 * More details are under the `ThemeService` section.
 *
 * The layout component is also responsible for changing application themes.
 * It listens to the `themeChange` event and change a theme CSS class appended to body.
 * Based on the class appended, specific CSS-theme is applied to the application.
 * More details of the Theme System could be found here [Enabling Theme System](#/docs/concepts/theme-system)
 *
 * A simple layout with footer:
 *
 * @stacked-example(Layout With Footer, layout/layout-w-footer.component)
 *
 * It is possible to ask the layout to center the columns (notice: we added a `center` attribute
 * to the layout:
 *
 * ```html
 * <nb-layout center>
 *   <nb-layout-header>Awesome Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @styles
 *
 * layout-font-family
 * layout-font-size
 * layout-line-height
 * layout-fg
 * layout-bg
 * layout-min-height
 * layout-content-width
 * layout-window-mode-min-width
 * layout-window-mode-max-width: window mode only, after this value layout turns into a floating window
 * layout-window-mode-bg: window mode only, background
 * layout-window-mode-padding-top: window mode only, max padding from top
 * layout-window-shadow: window mode shadow
 * layout-padding
 * layout-medium-padding
 * layout-small-padding
 */
var NbLayoutComponent = /** @class */ (function () {
    function NbLayoutComponent(themeService, spinnerService, elementRef, renderer, window, document, platformId, layoutDirectionService, scrollService, rulerService, scrollTop, overlayContainer) {
        var _this = this;
        this.themeService = themeService;
        this.spinnerService = spinnerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.window = window;
        this.document = document;
        this.platformId = platformId;
        this.layoutDirectionService = layoutDirectionService;
        this.scrollService = scrollService;
        this.rulerService = rulerService;
        this.scrollTop = scrollTop;
        this.overlayContainer = overlayContainer;
        this.centerValue = false;
        this.restoreScrollTopValue = true;
        this.windowModeValue = false;
        this.withScrollValue = false;
        this.withSubheader = false;
        this.overlayScrollBlock = false;
        this.afterViewInit$ = new rxjs.BehaviorSubject(null);
        this.alive = true;
        this.registerAsOverlayContainer();
        this.themeService.onThemeChange()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            var body = _this.document.getElementsByTagName('body')[0];
            if (theme.previous) {
                _this.renderer.removeClass(body, "nb-theme-" + theme.previous);
            }
            _this.renderer.addClass(body, "nb-theme-" + theme.name);
        });
        this.themeService.onAppendLayoutClass()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (className) {
            _this.renderer.addClass(_this.elementRef.nativeElement, className);
        });
        this.themeService.onRemoveLayoutClass()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (className) {
            _this.renderer.removeClass(_this.elementRef.nativeElement, className);
        });
        this.spinnerService.registerLoader(new Promise(function (resolve, reject) {
            _this.afterViewInit$
                .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
                .subscribe(function (_) { return resolve(); });
        }));
        this.spinnerService.load();
        this.rulerService.onGetDimensions()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var listener = _a.listener;
            listener.next(_this.getDimensions());
            listener.complete();
        });
        this.scrollService.onGetPosition()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var listener = _a.listener;
            listener.next(_this.getScrollPosition());
            listener.complete();
        });
        this.scrollTop
            .shouldRestore()
            .pipe(rxjs_operators.filter(function () { return _this.restoreScrollTopValue; }), rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function () {
            _this.scroll(0, 0);
        });
        this.scrollService
            .onScrollableChange()
            .pipe(rxjs_operators.filter(function () { return _this.withScrollValue; }))
            .subscribe(function (scrollable) {
            _this.overlayScrollBlock = !scrollable;
        });
        if (i1.isPlatformBrowser(this.platformId)) {
            // trigger first time so that after the change we have the initial value
            this.themeService.changeWindowWidth(this.window.innerWidth);
        }
    }
    Object.defineProperty(NbLayoutComponent.prototype, "center", {
        /**
         * Defines whether the layout columns will be centered after some width
         * @param {boolean} val
         */
        set: function (val) {
            this.centerValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutComponent.prototype, "windowMode", {
        /**
         * Defines whether the layout enters a 'window' mode, when the layout content (including sidebars and fixed header)
         * becomes centered by width with a margin from the top of the screen, like a floating window.
         * Automatically enables `withScroll` mode, as in the window mode scroll must be inside the layout and cannot be on
         * window. (TODO: check this)
         * @param {boolean} val
         */
        set: function (val) {
            this.windowModeValue = convertToBoolProperty(val);
            this.withScroll = this.windowModeValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutComponent.prototype, "withScroll", {
        /**
         * Defines whether to move the scrollbars to layout or leave it at the body level.
         * Automatically set to true when `windowMode` is enabled.
         * @param {boolean} val
         */
        set: function (val) {
            this.withScrollValue = convertToBoolProperty(val);
            // TODO: is this the best way of doing it? as we don't have access to body from theme styles
            // TODO: add e2e test
            var body = this.document.getElementsByTagName('body')[0];
            if (this.withScrollValue) {
                this.renderer.setStyle(body, 'overflow', 'hidden');
            }
            else {
                this.renderer.setStyle(body, 'overflow', 'initial');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutComponent.prototype, "restoreScrollTop", {
        /**
         * Restores scroll to the top of the page after navigation
         * @param {boolean} val
         */
        set: function (val) {
            this.restoreScrollTopValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutDirectionService.onDirectionChange()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (direction) {
            _this.renderer.setProperty(_this.document, 'dir', direction);
        });
        this.scrollService.onManualScroll()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var x = _a.x, y = _a.y;
            return _this.scroll(x, y);
        });
        this.afterViewInit$.next(true);
    };
    NbLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.unregisterAsOverlayContainer();
    };
    NbLayoutComponent.prototype.onScroll = function ($event) {
        this.scrollService.fireScrollChange($event);
    };
    NbLayoutComponent.prototype.onResize = function (event) {
        this.themeService.changeWindowWidth(event.target.innerWidth);
    };
    /**
     * Returns scroll and client height/width
     *
     * Depending on the current scroll mode (`withScroll=true`) returns sizes from the body element
     * or from the `.scrollable-container`
     * @returns {NbLayoutDimensions}
     */
    NbLayoutComponent.prototype.getDimensions = function () {
        var clientWidth, clientHeight, scrollWidth, scrollHeight = 0;
        if (this.withScrollValue) {
            var container = this.scrollableContainerRef.nativeElement;
            clientWidth = container.clientWidth;
            clientHeight = container.clientHeight;
            scrollWidth = container.scrollWidth;
            scrollHeight = container.scrollHeight;
        }
        else {
            var _a = this.document, documentElement = _a.documentElement, body = _a.body;
            clientWidth = documentElement.clientWidth || body.clientWidth;
            clientHeight = documentElement.clientHeight || body.clientHeight;
            scrollWidth = documentElement.scrollWidth || body.scrollWidth;
            scrollHeight = documentElement.scrollHeight || body.scrollHeight;
        }
        return {
            clientWidth: clientWidth,
            clientHeight: clientHeight,
            scrollWidth: scrollWidth,
            scrollHeight: scrollHeight,
        };
    };
    /**
     * Returns scroll position of current scroll container.
     *
     * If `withScroll` = true, returns scroll position of the `.scrollable-container` element,
     * otherwise - of the scrollable element of the window (which may be different depending of a browser)
     *
     * @returns {NbScrollPosition}
     */
    NbLayoutComponent.prototype.getScrollPosition = function () {
        if (!i1.isPlatformBrowser(this.platformId)) {
            return { x: 0, y: 0 };
        }
        if (this.withScrollValue) {
            var container = this.scrollableContainerRef.nativeElement;
            return { x: container.scrollLeft, y: container.scrollTop };
        }
        var documentRect = this.document.documentElement.getBoundingClientRect();
        var x = -documentRect.left || this.document.body.scrollLeft || this.window.scrollX ||
            this.document.documentElement.scrollLeft || 0;
        var y = -documentRect.top || this.document.body.scrollTop || this.window.scrollY ||
            this.document.documentElement.scrollTop || 0;
        return { x: x, y: y };
    };
    NbLayoutComponent.prototype.registerAsOverlayContainer = function () {
        if (this.overlayContainer.setContainer) {
            this.overlayContainer.setContainer(this.elementRef.nativeElement);
        }
    };
    NbLayoutComponent.prototype.unregisterAsOverlayContainer = function () {
        if (this.overlayContainer.clearContainer) {
            this.overlayContainer.clearContainer();
        }
    };
    NbLayoutComponent.prototype.scroll = function (x, y) {
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        var _a = this.getScrollPosition(), currentX = _a.x, currentY = _a.y;
        x = x == null ? currentX : x;
        y = y == null ? currentY : y;
        if (!i1.isPlatformBrowser(this.platformId)) {
            return;
        }
        if (this.withScrollValue) {
            var scrollable = this.scrollableContainerRef.nativeElement;
            if (scrollable.scrollTo) {
                scrollable.scrollTo(x, y);
            }
            else {
                scrollable.scrollLeft = x;
                scrollable.scrollTop = y;
            }
        }
        else {
            this.window.scrollTo(x, y);
        }
    };
    __decorate$52([
        i0.HostBinding('class.window-mode'),
        __metadata$36("design:type", Boolean)
    ], NbLayoutComponent.prototype, "windowModeValue", void 0);
    __decorate$52([
        i0.HostBinding('class.with-scroll'),
        __metadata$36("design:type", Boolean)
    ], NbLayoutComponent.prototype, "withScrollValue", void 0);
    __decorate$52([
        i0.HostBinding('class.with-subheader'),
        __metadata$36("design:type", Boolean)
    ], NbLayoutComponent.prototype, "withSubheader", void 0);
    __decorate$52([
        i0.HostBinding('class.overlay-scroll-block'),
        __metadata$36("design:type", Boolean)
    ], NbLayoutComponent.prototype, "overlayScrollBlock", void 0);
    __decorate$52([
        i0.Input(),
        __metadata$36("design:type", Boolean),
        __metadata$36("design:paramtypes", [Boolean])
    ], NbLayoutComponent.prototype, "center", null);
    __decorate$52([
        i0.Input(),
        __metadata$36("design:type", Boolean),
        __metadata$36("design:paramtypes", [Boolean])
    ], NbLayoutComponent.prototype, "windowMode", null);
    __decorate$52([
        i0.Input(),
        __metadata$36("design:type", Boolean),
        __metadata$36("design:paramtypes", [Boolean])
    ], NbLayoutComponent.prototype, "withScroll", null);
    __decorate$52([
        i0.Input(),
        __metadata$36("design:type", Boolean),
        __metadata$36("design:paramtypes", [Boolean])
    ], NbLayoutComponent.prototype, "restoreScrollTop", null);
    __decorate$52([
        i0.ViewChild('layoutTopDynamicArea', { read: i0.ViewContainerRef }),
        __metadata$36("design:type", i0.ViewContainerRef)
    ], NbLayoutComponent.prototype, "veryTopRef", void 0);
    __decorate$52([
        i0.ViewChild('scrollableContainer', { read: i0.ElementRef }),
        __metadata$36("design:type", i0.ElementRef)
    ], NbLayoutComponent.prototype, "scrollableContainerRef", void 0);
    __decorate$52([
        i0.HostListener('window:scroll', ['$event']),
        __metadata$36("design:type", Function),
        __metadata$36("design:paramtypes", [Object]),
        __metadata$36("design:returntype", void 0)
    ], NbLayoutComponent.prototype, "onScroll", null);
    __decorate$52([
        i0.HostListener('window:resize', ['$event']),
        __metadata$36("design:type", Function),
        __metadata$36("design:paramtypes", [Object]),
        __metadata$36("design:returntype", void 0)
    ], NbLayoutComponent.prototype, "onResize", null);
    NbLayoutComponent = __decorate$52([
        i0.Component({
            selector: 'nb-layout',
            styles: [":host{-webkit-font-smoothing:antialiased}[dir=ltr] :host{text-align:left}[dir=rtl] :host{text-align:right}:host .layout{display:flex;flex-direction:column}:host /deep/ nb-layout-header{display:block}:host /deep/ nb-layout-header nav{align-items:center;justify-content:flex-start;display:flex}:host /deep/ nb-layout-header.fixed{position:fixed;left:0;right:0;z-index:1040}:host .layout-container{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}[dir=ltr] :host .layout-container /deep/ nb-sidebar.left{order:0}[dir=rtl] :host .layout-container /deep/ nb-sidebar.left{order:2}[dir=ltr] :host .layout-container /deep/ nb-sidebar.right{order:2}[dir=rtl] :host .layout-container /deep/ nb-sidebar.right{order:0}:host .layout-container /deep/ nb-sidebar.end{order:2}:host .layout-container /deep/ nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}:host .layout-container .content{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:column;min-width:0}:host .layout-container .content.center{max-width:100%;position:relative;margin-left:auto;margin-right:auto}:host .layout-container .content .columns{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row;width:100%}:host .layout-container .content .columns /deep/ nb-layout-column{order:1;flex:1 0;min-width:0}[dir=ltr] :host .layout-container .content .columns /deep/ nb-layout-column.left{order:0}[dir=rtl] :host .layout-container .content .columns /deep/ nb-layout-column.left{order:2}:host .layout-container .content .columns /deep/ nb-layout-column.start{order:0}:host .layout-container .content /deep/ nb-layout-footer{display:block;margin-top:auto}:host .layout-container .content /deep/ nb-layout-footer nav{justify-content:center;display:flex} "],
            template: "\n    <div class=\"scrollable-container\" #scrollableContainer (scroll)=\"onScroll($event)\">\n      <div class=\"layout\">\n        <ng-content select=\"nb-layout-header:not([subheader])\"></ng-content>\n        <div class=\"layout-container\">\n          <ng-content select=\"nb-sidebar\"></ng-content>\n          <div class=\"content\" [class.center]=\"centerValue\">\n            <ng-content select=\"nb-layout-header[subheader]\"></ng-content>\n            <div class=\"columns\">\n              <ng-content select=\"nb-layout-column\"></ng-content>\n            </div>\n            <ng-content select=\"nb-layout-footer\"></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
        }),
        __param$10(4, i0.Inject(NB_WINDOW)),
        __param$10(5, i0.Inject(NB_DOCUMENT)),
        __param$10(6, i0.Inject(i0.PLATFORM_ID)),
        __metadata$36("design:paramtypes", [NbThemeService,
            NbSpinnerService,
            i0.ElementRef,
            i0.Renderer2, Object, Object, Object,
            NbLayoutDirectionService,
            NbLayoutScrollService,
            NbLayoutRulerService,
            NbRestoreScrollTopHelper,
            NbOverlayContainerAdapter])
    ], NbLayoutComponent);
    return NbLayoutComponent;
}());

var __decorate$51 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_LAYOUT_COMPONENTS = [
    NbLayoutComponent,
    NbLayoutColumnComponent,
    NbLayoutFooterComponent,
    NbLayoutHeaderComponent,
];
var NbLayoutModule = /** @class */ (function () {
    function NbLayoutModule() {
    }
    NbLayoutModule = __decorate$51([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: NB_LAYOUT_COMPONENTS.slice(),
            providers: [
                NbRestoreScrollTopHelper,
            ],
            exports: NB_LAYOUT_COMPONENTS.slice(),
        })
    ], NbLayoutModule);
    return NbLayoutModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate$56 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$39 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var itemClick$ = new rxjs.Subject();
var addItems$ = new rxjs.ReplaySubject(1);
var navigateHome$ = new rxjs.ReplaySubject(1);
var getSelectedItem$ = new rxjs.ReplaySubject(1);
var itemSelect$ = new rxjs.ReplaySubject(1);
var itemHover$ = new rxjs.ReplaySubject(1);
var submenuToggle$ = new rxjs.ReplaySubject(1);
var collapseAll$ = new rxjs.ReplaySubject(1);
// TODO: check if we need both URL and LINK
/**
 *
 *
 * Menu Item options example
 * @stacked-example(Menu Link Parameters, menu/menu-link-params.component)
 *
 *
 */
var NbMenuItem = /** @class */ (function () {
    function NbMenuItem() {
        /**
         * Item is selected when partly or fully equal to the current url
         * @type {string}
         */
        this.pathMatch = 'full';
    }
    /**
     * @returns item parents in top-down order
     */
    NbMenuItem.getParents = function (item) {
        var parents = [];
        var parent = item.parent;
        while (parent) {
            parents.unshift(parent);
            parent = parent.parent;
        }
        return parents;
    };
    NbMenuItem.isParent = function (item, possibleChild) {
        return possibleChild.parent
            ? possibleChild.parent === item || this.isParent(item, possibleChild.parent)
            : false;
    };
    return NbMenuItem;
}());
// TODO: map select events to router change events
// TODO: review the interface
/**
 *
 *
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 * @stacked-example(Menu Service, menu/menu-service.component)
 *
 *
 */
var NbMenuService = /** @class */ (function () {
    function NbMenuService() {
    }
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    NbMenuService.prototype.addItems = function (items, tag) {
        addItems$.next({ tag: tag, items: items });
    };
    /**
     * Collapses all menu items
     * @param {string} tag
     */
    NbMenuService.prototype.collapseAll = function (tag) {
        collapseAll$.next({ tag: tag });
    };
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    NbMenuService.prototype.navigateHome = function (tag) {
        navigateHome$.next({ tag: tag });
    };
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    NbMenuService.prototype.getSelectedItem = function (tag) {
        var listener = new rxjs.BehaviorSubject(null);
        getSelectedItem$.next({ tag: tag, listener: listener });
        return listener.asObservable();
    };
    NbMenuService.prototype.onItemClick = function () {
        return itemClick$.pipe(rxjs_operators.share());
    };
    NbMenuService.prototype.onItemSelect = function () {
        return itemSelect$.pipe(rxjs_operators.share());
    };
    NbMenuService.prototype.onItemHover = function () {
        return itemHover$.pipe(rxjs_operators.share());
    };
    NbMenuService.prototype.onSubmenuToggle = function () {
        return submenuToggle$.pipe(rxjs_operators.share());
    };
    NbMenuService = __decorate$56([
        i0.Injectable()
    ], NbMenuService);
    return NbMenuService;
}());
var NbMenuInternalService = /** @class */ (function () {
    function NbMenuInternalService(location) {
        this.location = location;
    }
    NbMenuInternalService.prototype.prepareItems = function (items) {
        var _this = this;
        var defaultItem = new NbMenuItem();
        items.forEach(function (i) {
            _this.applyDefaults(i, defaultItem);
            _this.setParent(i);
        });
    };
    NbMenuInternalService.prototype.selectFromUrl = function (items, tag, collapseOther) {
        if (collapseOther === void 0) { collapseOther = false; }
        var selectedItem = this.findItemByUrl(items);
        if (selectedItem) {
            this.selectItem(selectedItem, items, collapseOther, tag);
        }
    };
    NbMenuInternalService.prototype.selectItem = function (item, items, collapseOther, tag) {
        if (collapseOther === void 0) { collapseOther = false; }
        var unselectedItems = this.resetSelection(items);
        var collapsedItems = collapseOther ? this.collapseItems(items) : [];
        for (var _i = 0, _a = NbMenuItem.getParents(item); _i < _a.length; _i++) {
            var parent_1 = _a[_i];
            parent_1.selected = true;
            // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
            if (!unselectedItems.includes(parent_1)) {
                this.itemSelect(parent_1, tag);
            }
            var wasNotExpanded = !parent_1.expanded;
            parent_1.expanded = true;
            var i = collapsedItems.indexOf(parent_1);
            // emit event only for items that weren't expanded before.
            // 'collapsedItems' contains items that were expanded, so no need to emit event.
            // in case 'collapseOther' is false, 'collapsedItems' will be empty,
            // so also check if item isn't expanded already ('wasNotExpanded').
            if (i === -1 && wasNotExpanded) {
                this.submenuToggle(parent_1, tag);
            }
            else {
                collapsedItems.splice(i, 1);
            }
        }
        item.selected = true;
        // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
        if (!unselectedItems.includes(item)) {
            this.itemSelect(item, tag);
        }
        // remaining items which wasn't expanded back after expanding all currently selected items
        for (var _b = 0, collapsedItems_1 = collapsedItems; _b < collapsedItems_1.length; _b++) {
            var collapsedItem = collapsedItems_1[_b];
            this.submenuToggle(collapsedItem, tag);
        }
    };
    NbMenuInternalService.prototype.collapseAll = function (items, tag, except) {
        var collapsedItems = this.collapseItems(items, except);
        for (var _i = 0, collapsedItems_2 = collapsedItems; _i < collapsedItems_2.length; _i++) {
            var item = collapsedItems_2[_i];
            this.submenuToggle(item, tag);
        }
    };
    NbMenuInternalService.prototype.onAddItem = function () {
        return addItems$.pipe(rxjs_operators.share());
    };
    NbMenuInternalService.prototype.onNavigateHome = function () {
        return navigateHome$.pipe(rxjs_operators.share());
    };
    NbMenuInternalService.prototype.onCollapseAll = function () {
        return collapseAll$.pipe(rxjs_operators.share());
    };
    NbMenuInternalService.prototype.onGetSelectedItem = function () {
        return getSelectedItem$.pipe(rxjs_operators.share());
    };
    NbMenuInternalService.prototype.itemHover = function (item, tag) {
        itemHover$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.submenuToggle = function (item, tag) {
        submenuToggle$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemSelect = function (item, tag) {
        itemSelect$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemClick = function (item, tag) {
        itemClick$.next({ tag: tag, item: item });
    };
    /**
     * Unselect all given items deeply.
     * @param items array of items to unselect.
     * @returns items which selected value was changed.
     */
    NbMenuInternalService.prototype.resetSelection = function (items) {
        var unselectedItems = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.selected) {
                unselectedItems.push(item);
            }
            item.selected = false;
            if (item.children) {
                unselectedItems.push.apply(unselectedItems, this.resetSelection(item.children));
            }
        }
        return unselectedItems;
    };
    /**
     * Collapse all given items deeply.
     * @param items array of items to collapse.
     * @param except menu item which shouldn't be collapsed, also disables collapsing for parents of this item.
     * @returns items which expanded value was changed.
     */
    NbMenuInternalService.prototype.collapseItems = function (items, except) {
        var collapsedItems = [];
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            if (except && (item === except || NbMenuItem.isParent(item, except))) {
                continue;
            }
            if (item.expanded) {
                collapsedItems.push(item);
            }
            item.expanded = false;
            if (item.children) {
                collapsedItems.push.apply(collapsedItems, this.collapseItems(item.children));
            }
        }
        return collapsedItems;
    };
    NbMenuInternalService.prototype.applyDefaults = function (item, defaultItem) {
        var _this = this;
        var menuItem = __assign({}, item);
        Object.assign(item, defaultItem, menuItem);
        item.children && item.children.forEach(function (child) {
            _this.applyDefaults(child, defaultItem);
        });
    };
    NbMenuInternalService.prototype.setParent = function (item) {
        var _this = this;
        item.children && item.children.forEach(function (child) {
            child.parent = item;
            _this.setParent(child);
        });
    };
    /**
     * Find deepest item which link matches current URL path.
     * @param items array of items to search in.
     * @returns found item of undefined.
     */
    NbMenuInternalService.prototype.findItemByUrl = function (items) {
        var _this = this;
        var selectedItem;
        items.some(function (item) {
            if (item.children) {
                selectedItem = _this.findItemByUrl(item.children);
            }
            if (!selectedItem && _this.isSelectedInUrl(item)) {
                selectedItem = item;
            }
            return selectedItem;
        });
        return selectedItem;
    };
    NbMenuInternalService.prototype.isSelectedInUrl = function (item) {
        var exact = item.pathMatch === 'full';
        return exact
            ? isUrlPathEqual(this.location.path(), item.link)
            : isUrlPathContain(this.location.path(), item.link);
    };
    NbMenuInternalService = __decorate$56([
        i0.Injectable(),
        __metadata$39("design:paramtypes", [i1.Location])
    ], NbMenuInternalService);
    return NbMenuInternalService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$55 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$38 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$11 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NbToggleStates;
(function (NbToggleStates) {
    NbToggleStates["Expanded"] = "expanded";
    NbToggleStates["Collapsed"] = "collapsed";
})(NbToggleStates || (NbToggleStates = {}));
var NbMenuItemComponent = /** @class */ (function () {
    function NbMenuItemComponent(menuService) {
        this.menuService = menuService;
        this.menuItem = null;
        this.hoverItem = new i0.EventEmitter();
        this.toggleSubMenu = new i0.EventEmitter();
        this.selectItem = new i0.EventEmitter();
        this.itemClick = new i0.EventEmitter();
        this.alive = true;
    }
    NbMenuItemComponent.prototype.ngDoCheck = function () {
        this.toggleState = this.menuItem.expanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed;
    };
    NbMenuItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.menuService.onSubmenuToggle()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (_a) {
            var item = _a.item;
            return item === _this.menuItem;
        }), rxjs_operators.map(function (_a) {
            var item = _a.item;
            return item.expanded;
        }))
            .subscribe(function (isExpanded) { return _this.toggleState = isExpanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed; });
    };
    NbMenuItemComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbMenuItemComponent.prototype.onToggleSubMenu = function (item) {
        this.toggleSubMenu.emit(item);
    };
    NbMenuItemComponent.prototype.onHoverItem = function (item) {
        this.hoverItem.emit(item);
    };
    NbMenuItemComponent.prototype.onSelectItem = function (item) {
        this.selectItem.emit(item);
    };
    NbMenuItemComponent.prototype.onItemClick = function (item) {
        this.itemClick.emit(item);
    };
    __decorate$55([
        i0.Input(),
        __metadata$38("design:type", Object)
    ], NbMenuItemComponent.prototype, "menuItem", void 0);
    __decorate$55([
        i0.Output(),
        __metadata$38("design:type", Object)
    ], NbMenuItemComponent.prototype, "hoverItem", void 0);
    __decorate$55([
        i0.Output(),
        __metadata$38("design:type", Object)
    ], NbMenuItemComponent.prototype, "toggleSubMenu", void 0);
    __decorate$55([
        i0.Output(),
        __metadata$38("design:type", Object)
    ], NbMenuItemComponent.prototype, "selectItem", void 0);
    __decorate$55([
        i0.Output(),
        __metadata$38("design:type", Object)
    ], NbMenuItemComponent.prototype, "itemClick", void 0);
    NbMenuItemComponent = __decorate$55([
        i0.Component({
            selector: '[nbMenuItem]',
            template: "<span *ngIf=\"menuItem.group\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> {{ menuItem.title }} </span> <a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group\" [routerLink]=\"menuItem.link\" [queryParams]=\"menuItem.queryParams\" [fragment]=\"menuItem.fragment\" [skipLocationChange]=\"menuItem.skipLocationChange\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onItemClick(menuItem);\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group\" [attr.href]=\"menuItem.url\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"$event.preventDefault(); onItemClick(menuItem);\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.children\" (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" href=\"#\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> <i class=\"ion chevron\" [class.ion-chevron-left]=\"!menuItem.expanded\" [class.ion-chevron-down]=\"menuItem.expanded\"></i> </a> <ul *ngIf=\"menuItem.children\" [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\" [class.expanded]=\"menuItem.expanded\" [@toggle]=\"toggleState\" class=\"menu-items\"> <ng-container *ngFor=\"let item of menuItem.children\"> <li nbMenuItem *ngIf=\"!item.hidden\" [menuItem]=\"item\" [class.menu-group]=\"item.group\" (hoverItem)=\"onHoverItem($event)\" (toggleSubMenu)=\"onToggleSubMenu($event)\" (selectItem)=\"onSelectItem($event)\" (itemClick)=\"onItemClick($event)\" class=\"menu-item\"> </li> </ng-container> </ul> ",
            animations: [
                _angular_animations.trigger('toggle', [
                    _angular_animations.state(NbToggleStates.Collapsed, _angular_animations.style({ height: '0' })),
                    _angular_animations.state(NbToggleStates.Expanded, _angular_animations.style({ height: '*' })),
                    _angular_animations.transition(NbToggleStates.Collapsed + " <=> " + NbToggleStates.Expanded, _angular_animations.animate(300)),
                ]),
            ],
        }),
        __metadata$38("design:paramtypes", [NbMenuService])
    ], NbMenuItemComponent);
    return NbMenuItemComponent;
}());
/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * Basic example
 * @stacked-example(Showcase, menu/menu-showcase.component)
 *
 * ```ts
 * // ...
 * items: NbMenuItem[] = [
 *  {
 *    title: home,
 *    link: '/'
 *  },
 *  {
 *    title: dashboard,
 *    link: 'dashboard'
 *  }
 * ];
 * // ...
 * <nb-menu [items]="items"></nb-menu>
 * ```
 * ### Installation
 *
 * Import `NbMenuModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbMenuModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Two-level menu example
 * @stacked-example(Two Levels, menu/menu-children.component)
 *
 *
 * Autocollapse menu example
 * @stacked-example(Autocollapse Menu, menu/menu-autocollapse.component)
 *
 *
 * @styles
 *
 * menu-font-family:
 * menu-font-size:
 * menu-font-weight:
 * menu-fg:
 * menu-bg:
 * menu-active-fg:
 * menu-active-bg:
 * menu-active-font-weight:
 * menu-submenu-bg:
 * menu-submenu-fg:
 * menu-submenu-active-fg:
 * menu-submenu-active-bg:
 * menu-submenu-active-border-color:
 * menu-submenu-active-shadow:
 * menu-submenu-hover-fg:
 * menu-submenu-hover-bg:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-container-padding:
 * menu-submenu-padding:
 * menu-group-font-weight:
 * menu-group-font-size:
 * menu-group-fg:
 * menu-group-padding
 * menu-item-padding:
 * menu-item-separator:
 * menu-icon-font-size:
 * menu-icon-margin:
 * menu-icon-color:
 * menu-icon-active-color:
 */
var NbMenuComponent = /** @class */ (function () {
    function NbMenuComponent(window, menuInternalService, router) {
        this.window = window;
        this.menuInternalService = menuInternalService;
        this.router = router;
        this.alive = true;
        this.autoCollapseValue = false;
    }
    Object.defineProperty(NbMenuComponent.prototype, "inverse", {
        /**
         * Makes colors inverse based on current theme
         * @type boolean
         */
        set: function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbMenuComponent.prototype, "autoCollapse", {
        /**
         * Collapse all opened submenus on the toggle event
         * Default value is "false"
         * @type boolean
         */
        set: function (val) {
            this.autoCollapseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService
            .onAddItem()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (data) { return _this.compareTag(data.tag); }))
            .subscribe(function (data) { return _this.onAddItem(data); });
        this.menuInternalService
            .onNavigateHome()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (data) { return _this.compareTag(data.tag); }))
            .subscribe(function () { return _this.navigateHome(); });
        this.menuInternalService
            .onGetSelectedItem()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (data) { return _this.compareTag(data.tag); }))
            .subscribe(function (data) {
            data.listener.next({ tag: _this.tag, item: _this.getSelectedItem(_this.items) });
        });
        this.menuInternalService
            .onCollapseAll()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (data) { return _this.compareTag(data.tag); }))
            .subscribe(function () { return _this.collapseAll(); });
        this.router.events
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (event) { return event instanceof _angular_router.NavigationEnd; }))
            .subscribe(function () {
            _this.menuInternalService.selectFromUrl(_this.items, _this.tag, _this.autoCollapseValue);
        });
    };
    NbMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.menuInternalService.selectFromUrl(_this.items, _this.tag, _this.autoCollapseValue); });
    };
    NbMenuComponent.prototype.onAddItem = function (data) {
        var _a;
        (_a = this.items).push.apply(_a, data.items);
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapseValue);
    };
    NbMenuComponent.prototype.onHoverItem = function (item) {
        this.menuInternalService.itemHover(item, this.tag);
    };
    NbMenuComponent.prototype.onToggleSubMenu = function (item) {
        if (this.autoCollapseValue) {
            this.menuInternalService.collapseAll(this.items, this.tag, item);
        }
        item.expanded = !item.expanded;
        this.menuInternalService.submenuToggle(item, this.tag);
    };
    // TODO: is not fired on page reload
    NbMenuComponent.prototype.onSelectItem = function (item) {
        this.menuInternalService.selectItem(item, this.items, this.autoCollapseValue, this.tag);
    };
    NbMenuComponent.prototype.onItemClick = function (item) {
        this.menuInternalService.itemClick(item, this.tag);
    };
    NbMenuComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbMenuComponent.prototype.navigateHome = function () {
        var homeItem = this.getHomeItem(this.items);
        if (homeItem) {
            if (homeItem.link) {
                this.router.navigate([homeItem.link], { queryParams: homeItem.queryParams, fragment: homeItem.fragment });
            }
            if (homeItem.url) {
                this.window.location.href = homeItem.url;
            }
        }
    };
    NbMenuComponent.prototype.collapseAll = function () {
        this.menuInternalService.collapseAll(this.items, this.tag);
    };
    NbMenuComponent.prototype.getHomeItem = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.home) {
                return item;
            }
            var homeItem = item.children && this.getHomeItem(item.children);
            if (homeItem) {
                return homeItem;
            }
        }
    };
    NbMenuComponent.prototype.compareTag = function (tag) {
        return !tag || tag === this.tag;
    };
    NbMenuComponent.prototype.getSelectedItem = function (items) {
        var _this = this;
        var selected = null;
        items.forEach(function (item) {
            if (item.selected) {
                selected = item;
            }
            if (item.selected && item.children && item.children.length > 0) {
                selected = _this.getSelectedItem(item.children);
            }
        });
        return selected;
    };
    __decorate$55([
        i0.HostBinding('class.inverse'),
        __metadata$38("design:type", Boolean)
    ], NbMenuComponent.prototype, "inverseValue", void 0);
    __decorate$55([
        i0.Input(),
        __metadata$38("design:type", String)
    ], NbMenuComponent.prototype, "tag", void 0);
    __decorate$55([
        i0.Input(),
        __metadata$38("design:type", Array)
    ], NbMenuComponent.prototype, "items", void 0);
    __decorate$55([
        i0.Input(),
        __metadata$38("design:type", Boolean),
        __metadata$38("design:paramtypes", [Boolean])
    ], NbMenuComponent.prototype, "inverse", null);
    __decorate$55([
        i0.Input(),
        __metadata$38("design:type", Boolean),
        __metadata$38("design:paramtypes", [Boolean])
    ], NbMenuComponent.prototype, "autoCollapse", null);
    NbMenuComponent = __decorate$55([
        i0.Component({
            selector: 'nb-menu',
            styles: [":host /deep/ {display:block}:host /deep/ .menu-items,:host /deep/ .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host /deep/ .menu-item a{display:flex;color:inherit;text-decoration:none;align-items:center}:host /deep/ .menu-item a .menu-title{flex:1}[dir=rtl] :host /deep/ .menu-item a .menu-title{text-align:right} "],
            template: "\n    <ul class=\"menu-items\">\n      <ng-container *ngFor=\"let item of items\">\n        <li nbMenuItem *ngIf=\"!item.hidden\"\n            [menuItem]=\"item\"\n            [class.menu-group]=\"item.group\"\n            (hoverItem)=\"onHoverItem($event)\"\n            (toggleSubMenu)=\"onToggleSubMenu($event)\"\n            (selectItem)=\"onSelectItem($event)\"\n            (itemClick)=\"onItemClick($event)\"\n            class=\"menu-item\">\n        </li>\n      </ng-container>\n    </ul>\n  ",
        }),
        __param$11(0, i0.Inject(NB_WINDOW)),
        __metadata$38("design:paramtypes", [Object, NbMenuInternalService,
            _angular_router.Router])
    ], NbMenuComponent);
    return NbMenuComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$54 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var nbMenuComponents = [NbMenuComponent, NbMenuItemComponent];
var NB_MENU_PROVIDERS = [NbMenuService, NbMenuInternalService];
var NbMenuModule = /** @class */ (function () {
    function NbMenuModule() {
    }
    NbMenuModule_1 = NbMenuModule;
    NbMenuModule.forRoot = function () {
        return {
            ngModule: NbMenuModule_1,
            providers: NB_MENU_PROVIDERS.slice(),
        };
    };
    var NbMenuModule_1;
    NbMenuModule = NbMenuModule_1 = __decorate$54([
        i0.NgModule({
            imports: [NbSharedModule],
            declarations: nbMenuComponents.slice(),
            exports: nbMenuComponents.slice(),
        })
    ], NbMenuModule);
    return NbMenuModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$58 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$40 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * ```ts
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *    icon: 'nb-home',
 *    responsive: true, // hide title before `route-tabs-icon-only-max-width` value
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
 * ```
 * ### Installation
 *
 * Import `NbRouteTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbRouteTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * @stacked-example(Route Tabset, tabset/route-tabset-showcase.component)
 *
 * @styles
 *
 * route-tabs-font-family:
 * route-tabs-font-size:
 * route-tabs-active-bg:
 * route-tabs-active-font-weight:
 * route-tabs-padding:
 * route-tabs-header-bg:
 * route-tabs-separator:
 * route-tabs-fg:
 * route-tabs-fg-heading:
 * route-tabs-bg:
 * route-tabs-selected:
 * route-tabs-icon-only-max-width:
 */
var NbRouteTabsetComponent = /** @class */ (function () {
    function NbRouteTabsetComponent(router) {
        this.router = router;
        this.fullWidthValue = false;
        /**
         * Emits when tab is selected
         * @type {EventEmitter<any>}
         */
        this.changeTab = new i0.EventEmitter();
    }
    Object.defineProperty(NbRouteTabsetComponent.prototype, "fullWidth", {
        /**
         * Take full width of a parent
         * @param {boolean} val
         */
        set: function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbRouteTabsetComponent.prototype.selectTab = function (tab) {
        this.changeTab.emit(tab);
        this.router.navigate([tab.route]);
    };
    __decorate$58([
        i0.HostBinding('class.full-width'),
        __metadata$40("design:type", Boolean)
    ], NbRouteTabsetComponent.prototype, "fullWidthValue", void 0);
    __decorate$58([
        i0.Input(),
        __metadata$40("design:type", Array)
    ], NbRouteTabsetComponent.prototype, "tabs", void 0);
    __decorate$58([
        i0.Input(),
        __metadata$40("design:type", Boolean),
        __metadata$40("design:paramtypes", [Boolean])
    ], NbRouteTabsetComponent.prototype, "fullWidth", null);
    __decorate$58([
        i0.Output(),
        __metadata$40("design:type", Object)
    ], NbRouteTabsetComponent.prototype, "changeTab", void 0);
    NbRouteTabsetComponent = __decorate$58([
        i0.Component({
            selector: 'nb-route-tabset',
            styles: [".route-tabset{display:flex;flex-direction:row;list-style-type:none;margin:0}.route-tabset .route-tab{cursor:pointer;margin-bottom:-1px;text-align:center}.route-tabset .route-tab.active a::before{display:block}.route-tabset .route-tab a{position:relative;text-decoration:none;display:inline-block}.route-tabset .route-tab a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0}.route-tabset .route-tab a i{font-size:1.5rem;vertical-align:middle}[dir=ltr] .route-tabset .route-tab a i+span{margin-left:.5rem}[dir=rtl] .route-tabset .route-tab a i+span{margin-right:.5rem}:host.full-width .route-tabset{justify-content:space-around} "],
            template: "\n    <ul class=\"route-tabset\">\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"$event.preventDefault(); selectTab(tab)\"\n          routerLink=\"{{tab.route}}\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n          [class.responsive]=\"tab.responsive\"\n          class=\"route-tab\">\n        <a href>\n          <i *ngIf=\"tab.icon\" [class]=\"tab.icon\"></i>\n          <span *ngIf=\"tab.title\">{{ tab.title }}</span>\n        </a>\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  ",
        }),
        __metadata$40("design:paramtypes", [_angular_router.Router])
    ], NbRouteTabsetComponent);
    return NbRouteTabsetComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$57 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbRouteTabsetModule = /** @class */ (function () {
    function NbRouteTabsetModule() {
    }
    NbRouteTabsetModule = __decorate$57([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: [
                NbRouteTabsetComponent,
            ],
            exports: [
                NbRouteTabsetComponent,
            ],
        })
    ], NbRouteTabsetModule);
    return NbRouteTabsetModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$61 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 *
 * Allows you to change sidebar state dynamically from any part of the app:
 * @stacked-example(Sidebar State, sidebar/sidebar-toggle.component)
 */
var NbSidebarService = /** @class */ (function () {
    function NbSidebarService() {
        this.toggle$ = new rxjs.Subject();
        this.expand$ = new rxjs.Subject();
        this.collapse$ = new rxjs.Subject();
    }
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    NbSidebarService.prototype.onToggle = function () {
        return this.toggle$.pipe(rxjs_operators.share());
    };
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    NbSidebarService.prototype.onExpand = function () {
        return this.expand$.pipe(rxjs_operators.share());
    };
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    NbSidebarService.prototype.onCollapse = function () {
        return this.collapse$.pipe(rxjs_operators.share());
    };
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    NbSidebarService.prototype.toggle = function (compact, tag) {
        if (compact === void 0) { compact = false; }
        this.toggle$.next({ compact: compact, tag: tag });
    };
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    NbSidebarService.prototype.expand = function (tag) {
        this.expand$.next({ tag: tag });
    };
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    NbSidebarService.prototype.collapse = function (tag) {
        this.collapse$.next({ tag: tag });
    };
    NbSidebarService = __decorate$61([
        i0.Injectable()
    ], NbSidebarService);
    return NbSidebarService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$60 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$41 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
var NbSidebarHeaderComponent = /** @class */ (function () {
    function NbSidebarHeaderComponent() {
    }
    NbSidebarHeaderComponent = __decorate$60([
        i0.Component({
            selector: 'nb-sidebar-header',
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], NbSidebarHeaderComponent);
    return NbSidebarHeaderComponent;
}());
/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
var NbSidebarFooterComponent = /** @class */ (function () {
    function NbSidebarFooterComponent() {
    }
    NbSidebarFooterComponent = __decorate$60([
        i0.Component({
            selector: 'nb-sidebar-footer',
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], NbSidebarFooterComponent);
    return NbSidebarFooterComponent;
}());
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
var NbSidebarComponent = /** @class */ (function () {
    function NbSidebarComponent(sidebarService, themeService, element) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.element = element;
        this.responsiveValue = false;
        this.alive = true;
        this.containerFixedValue = true;
        this.fixedValue = false;
        this.rightValue = false;
        this.leftValue = true;
        this.startValue = false;
        this.endValue = false;
        // TODO: get width by the key and define only max width for the tablets and mobiles
        /**
         * Controls on which screen sizes sidebar should be switched to compacted state.
         * Works only when responsive mode is on.
         * Default values are `['xs', 'is', 'sm', 'md', 'lg']`.
         *
         * @type string[]
         */
        this.compactedBreakpoints = ['xs', 'is', 'sm', 'md', 'lg'];
        /**
         * Controls on which screen sizes sidebar should be switched to collapsed state.
         * Works only when responsive mode is on.
         * Default values are `['xs', 'is']`.
         *
         * @type string[]
         */
        this.collapsedBreakpoints = ['xs', 'is'];
        this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_PC;
    }
    NbSidebarComponent_1 = NbSidebarComponent;
    Object.defineProperty(NbSidebarComponent.prototype, "expanded", {
        // TODO: rename stateValue to state (take a look to the card component)
        get: function () {
            return this.stateValue === NbSidebarComponent_1.STATE_EXPANDED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "collapsed", {
        get: function () {
            return this.stateValue === NbSidebarComponent_1.STATE_COLLAPSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "compacted", {
        get: function () {
            return this.stateValue === NbSidebarComponent_1.STATE_COMPACTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "right", {
        /**
         * Places sidebar on the right side
         * @type {boolean}
         */
        set: function (val) {
            this.rightValue = convertToBoolProperty(val);
            this.leftValue = !this.rightValue;
            this.startValue = false;
            this.endValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "left", {
        /**
         * Places sidebar on the left side
         * @type {boolean}
         */
        set: function (val) {
            this.leftValue = convertToBoolProperty(val);
            this.rightValue = !this.leftValue;
            this.startValue = false;
            this.endValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "start", {
        /**
         * Places sidebar on the start edge of layout
         * @type {boolean}
         */
        set: function (val) {
            this.startValue = convertToBoolProperty(val);
            this.endValue = !this.startValue;
            this.leftValue = false;
            this.rightValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "end", {
        /**
         * Places sidebar on the end edge of layout
         * @type {boolean}
         */
        set: function (val) {
            this.endValue = convertToBoolProperty(val);
            this.startValue = !this.endValue;
            this.leftValue = false;
            this.rightValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "fixed", {
        /**
         * Makes sidebar fixed (shown above the layout content)
         * @type {boolean}
         */
        set: function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "containerFixed", {
        /**
         * Makes sidebar container fixed
         * @type {boolean}
         */
        set: function (val) {
            this.containerFixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "state", {
        /**
         * Initial sidebar state, `expanded`|`collapsed`|`compacted`
         * @type {string}
         */
        set: function (val) {
            this.stateValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "responsive", {
        /**
         * Makes sidebar listen to media query events and change its behaviour
         * @type {boolean}
         */
        set: function (val) {
            this.responsiveValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbSidebarComponent.prototype.toggleResponsive = function (enabled) {
        if (enabled) {
            this.mediaQuerySubscription = this.onMediaQueryChanges();
        }
        else if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    NbSidebarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.responsive) {
            this.toggleResponsive(this.responsiveValue);
        }
    };
    NbSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarService.onToggle()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.toggle(data.compact);
            }
        });
        this.sidebarService.onExpand()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.expand();
            }
        });
        this.sidebarService.onCollapse()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.collapse();
            }
        });
    };
    NbSidebarComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    // TODO: this is more of a workaround, should be a better way to make components communicate to each other
    NbSidebarComponent.prototype.onClick = function (event) {
        var menu = this.element.nativeElement.querySelector('nb-menu');
        if (menu && menu.contains(event.target)) {
            var link = event.target;
            var linkChildren = ['span', 'i'];
            // if we clicked on span - get the link
            if (linkChildren.includes(link.tagName.toLowerCase()) && link.parentNode) {
                link = event.target.parentNode;
            }
            // we only expand if an item has children
            if (link && link.nextElementSibling && link.nextElementSibling.classList.contains('menu-items')) {
                this.expand();
            }
        }
    };
    /**
     * Collapses the sidebar
     */
    NbSidebarComponent.prototype.collapse = function () {
        this.state = NbSidebarComponent_1.STATE_COLLAPSED;
    };
    /**
     * Expands the sidebar
     */
    NbSidebarComponent.prototype.expand = function () {
        this.state = NbSidebarComponent_1.STATE_EXPANDED;
    };
    /**
     * Compacts the sidebar (minimizes)
     */
    NbSidebarComponent.prototype.compact = function () {
        this.state = NbSidebarComponent_1.STATE_COMPACTED;
    };
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
    NbSidebarComponent.prototype.toggle = function (compact) {
        if (compact === void 0) { compact = false; }
        if (this.responsiveEnabled()) {
            if (this.responsiveState === NbSidebarComponent_1.RESPONSIVE_STATE_MOBILE) {
                compact = false;
            }
        }
        var closedStates = [NbSidebarComponent_1.STATE_COMPACTED, NbSidebarComponent_1.STATE_COLLAPSED];
        if (compact) {
            this.state = closedStates.includes(this.stateValue) ?
                NbSidebarComponent_1.STATE_EXPANDED : NbSidebarComponent_1.STATE_COMPACTED;
        }
        else {
            this.state = closedStates.includes(this.stateValue) ?
                NbSidebarComponent_1.STATE_EXPANDED : NbSidebarComponent_1.STATE_COLLAPSED;
        }
    };
    NbSidebarComponent.prototype.onMediaQueryChanges = function () {
        var _this = this;
        return this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var prev = _a[0], current = _a[1];
            var isCollapsed = _this.collapsedBreakpoints.includes(current.name);
            var isCompacted = _this.compactedBreakpoints.includes(current.name);
            if (isCompacted) {
                _this.fixed = _this.containerFixedValue;
                _this.compact();
                _this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_TABLET;
            }
            if (isCollapsed) {
                _this.fixed = true;
                _this.collapse();
                _this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_MOBILE;
            }
            if (!isCollapsed && !isCompacted && prev.width < current.width) {
                _this.expand();
                _this.fixed = false;
                _this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_PC;
            }
        });
    };
    NbSidebarComponent.prototype.responsiveEnabled = function () {
        return this.responsiveValue;
    };
    var NbSidebarComponent_1;
    NbSidebarComponent.STATE_EXPANDED = 'expanded';
    NbSidebarComponent.STATE_COLLAPSED = 'collapsed';
    NbSidebarComponent.STATE_COMPACTED = 'compacted';
    NbSidebarComponent.RESPONSIVE_STATE_MOBILE = 'mobile';
    NbSidebarComponent.RESPONSIVE_STATE_TABLET = 'tablet';
    NbSidebarComponent.RESPONSIVE_STATE_PC = 'pc';
    __decorate$60([
        i0.HostBinding('class.fixed'),
        __metadata$41("design:type", Boolean)
    ], NbSidebarComponent.prototype, "fixedValue", void 0);
    __decorate$60([
        i0.HostBinding('class.right'),
        __metadata$41("design:type", Boolean)
    ], NbSidebarComponent.prototype, "rightValue", void 0);
    __decorate$60([
        i0.HostBinding('class.left'),
        __metadata$41("design:type", Boolean)
    ], NbSidebarComponent.prototype, "leftValue", void 0);
    __decorate$60([
        i0.HostBinding('class.start'),
        __metadata$41("design:type", Boolean)
    ], NbSidebarComponent.prototype, "startValue", void 0);
    __decorate$60([
        i0.HostBinding('class.end'),
        __metadata$41("design:type", Boolean)
    ], NbSidebarComponent.prototype, "endValue", void 0);
    __decorate$60([
        i0.HostBinding('class.expanded'),
        __metadata$41("design:type", Object),
        __metadata$41("design:paramtypes", [])
    ], NbSidebarComponent.prototype, "expanded", null);
    __decorate$60([
        i0.HostBinding('class.collapsed'),
        __metadata$41("design:type", Object),
        __metadata$41("design:paramtypes", [])
    ], NbSidebarComponent.prototype, "collapsed", null);
    __decorate$60([
        i0.HostBinding('class.compacted'),
        __metadata$41("design:type", Object),
        __metadata$41("design:paramtypes", [])
    ], NbSidebarComponent.prototype, "compacted", null);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", Boolean),
        __metadata$41("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "right", null);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", Boolean),
        __metadata$41("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "left", null);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", Boolean),
        __metadata$41("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "start", null);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", Boolean),
        __metadata$41("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "end", null);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", Boolean),
        __metadata$41("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "fixed", null);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", Boolean),
        __metadata$41("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "containerFixed", null);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", String),
        __metadata$41("design:paramtypes", [String])
    ], NbSidebarComponent.prototype, "state", null);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", Boolean),
        __metadata$41("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "responsive", null);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", String)
    ], NbSidebarComponent.prototype, "tag", void 0);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", Array)
    ], NbSidebarComponent.prototype, "compactedBreakpoints", void 0);
    __decorate$60([
        i0.Input(),
        __metadata$41("design:type", Array)
    ], NbSidebarComponent.prototype, "collapsedBreakpoints", void 0);
    NbSidebarComponent = NbSidebarComponent_1 = __decorate$60([
        i0.Component({
            selector: 'nb-sidebar',
            styles: [":host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{transform:translate3d(0, 0, 0);display:flex;flex-direction:column}:host .main-container-fixed{position:fixed}:host.right{margin-right:0;margin-left:auto}[dir=ltr] :host.right{order:4}[dir=rtl] :host.right{order:0}:host.end{order:4}[dir=ltr] :host.end{margin-right:0;margin-left:auto}[dir=rtl] :host.end{margin-left:0;margin-right:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}[dir=ltr] :host.fixed.start{left:0}[dir=rtl] :host.fixed.start{right:0}[dir=ltr] :host.fixed.end{right:0}[dir=rtl] :host.fixed.end{left:0}:host /deep/ nb-sidebar-footer{margin-top:auto;display:block}:host /deep/ nb-sidebar-header{display:block} "],
            template: "\n    <div class=\"main-container\"\n         [class.main-container-fixed]=\"containerFixedValue\">\n      <ng-content select=\"nb-sidebar-header\"></ng-content>\n      <div class=\"scrollable\" (click)=\"onClick($event)\">\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"nb-sidebar-footer\"></ng-content>\n    </div>\n  ",
        }),
        __metadata$41("design:paramtypes", [NbSidebarService,
            NbThemeService,
            i0.ElementRef])
    ], NbSidebarComponent);
    return NbSidebarComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$59 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_SIDEBAR_COMPONENTS = [
    NbSidebarComponent,
    NbSidebarFooterComponent,
    NbSidebarHeaderComponent,
];
var NB_SIDEBAR_PROVIDERS = [
    NbSidebarService,
];
var NbSidebarModule = /** @class */ (function () {
    function NbSidebarModule() {
    }
    NbSidebarModule_1 = NbSidebarModule;
    NbSidebarModule.forRoot = function () {
        return {
            ngModule: NbSidebarModule_1,
            providers: NB_SIDEBAR_PROVIDERS.slice(),
        };
    };
    var NbSidebarModule_1;
    NbSidebarModule = NbSidebarModule_1 = __decorate$59([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: NB_SIDEBAR_COMPONENTS.slice(),
            exports: NB_SIDEBAR_COMPONENTS.slice(),
        })
    ], NbSidebarModule);
    return NbSidebarModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$63 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$42 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var NbTabComponent = /** @class */ (function () {
    function NbTabComponent() {
        this.activeValue = false;
        this.responsiveValue = false;
        this.init = false;
    }
    Object.defineProperty(NbTabComponent.prototype, "responsive", {
        get: function () {
            return this.responsiveValue;
        },
        /**
         * Show only icons when width is smaller than `tabs-icon-only-max-width`
         * @type {boolean}
         */
        set: function (val) {
            this.responsiveValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTabComponent.prototype, "active", {
        /**
         * Specifies active tab
         * @returns {boolean}
         */
        get: function () {
            return this.activeValue;
        },
        set: function (val) {
            this.activeValue = convertToBoolProperty(val);
            if (this.activeValue) {
                this.init = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTabComponent.prototype, "lazyLoad", {
        /**
         * Lazy load content before tab selection
         * TODO: rename, as lazy is by default, and this is more `instant load`
         * @param {boolean} val
         */
        set: function (val) {
            this.init = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", String)
    ], NbTabComponent.prototype, "tabTitle", void 0);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", String)
    ], NbTabComponent.prototype, "tabIcon", void 0);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", Boolean),
        __metadata$42("design:paramtypes", [Boolean])
    ], NbTabComponent.prototype, "responsive", null);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", String)
    ], NbTabComponent.prototype, "route", void 0);
    __decorate$63([
        i0.HostBinding('class.content-active'),
        __metadata$42("design:type", Boolean)
    ], NbTabComponent.prototype, "activeValue", void 0);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", Boolean),
        __metadata$42("design:paramtypes", [Boolean])
    ], NbTabComponent.prototype, "active", null);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", Boolean),
        __metadata$42("design:paramtypes", [Boolean])
    ], NbTabComponent.prototype, "lazyLoad", null);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", String)
    ], NbTabComponent.prototype, "badgeText", void 0);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", String)
    ], NbTabComponent.prototype, "badgeStatus", void 0);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", String)
    ], NbTabComponent.prototype, "badgePosition", void 0);
    NbTabComponent = __decorate$63([
        i0.Component({
            selector: 'nb-tab',
            template: "\n    <ng-container *ngIf=\"init\">\n      <ng-content></ng-content>\n    </ng-container>\n  ",
        })
    ], NbTabComponent);
    return NbTabComponent;
}());
// TODO: Combine tabset with route-tabset, so that we can:
// - have similar interface
// - easy to migrate from one to another
// - can mix them both (route/content tab)
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
var NbTabsetComponent = /** @class */ (function () {
    function NbTabsetComponent(route, changeDetectorRef) {
        this.route = route;
        this.changeDetectorRef = changeDetectorRef;
        this.fullWidthValue = false;
        /**
         * Emits when tab is selected
         * @type EventEmitter<any>
         */
        this.changeTab = new i0.EventEmitter();
    }
    Object.defineProperty(NbTabsetComponent.prototype, "fullWidth", {
        /**
         * Take full width of a parent
         * @param {boolean} val
         */
        set: function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    // TODO: refactoring this component, avoid change detection loop
    NbTabsetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.route.params
            .pipe(rxjs_operators.map(function (params) {
            return _this.tabs.find(function (tab) { return _this.routeParam ? tab.route === params[_this.routeParam] : tab.active; });
        }), rxjs_operators.delay(0))
            .subscribe(function (activeTab) {
            _this.selectTab(activeTab || _this.tabs.first);
            _this.changeDetectorRef.markForCheck();
        });
    };
    // TODO: navigate to routeParam
    NbTabsetComponent.prototype.selectTab = function (selectedTab) {
        this.tabs.forEach(function (tab) { return tab.active = tab === selectedTab; });
        this.changeTab.emit(selectedTab);
    };
    __decorate$63([
        i0.ContentChildren(NbTabComponent),
        __metadata$42("design:type", i0.QueryList)
    ], NbTabsetComponent.prototype, "tabs", void 0);
    __decorate$63([
        i0.HostBinding('class.full-width'),
        __metadata$42("design:type", Boolean)
    ], NbTabsetComponent.prototype, "fullWidthValue", void 0);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", Boolean),
        __metadata$42("design:paramtypes", [Boolean])
    ], NbTabsetComponent.prototype, "fullWidth", null);
    __decorate$63([
        i0.Input(),
        __metadata$42("design:type", String)
    ], NbTabsetComponent.prototype, "routeParam", void 0);
    __decorate$63([
        i0.Output(),
        __metadata$42("design:type", Object)
    ], NbTabsetComponent.prototype, "changeTab", void 0);
    NbTabsetComponent = __decorate$63([
        i0.Component({
            selector: 'nb-tabset',
            styles: [":host{display:block}:host.full-width .tabset{justify-content:space-around}:host /deep/ nb-tab{flex:1;-ms-flex:1 1 auto;overflow:auto;display:none}:host /deep/ nb-tab.content-active{display:block}:host .tabset{display:flex;flex-direction:row;list-style-type:none;margin:0}:host .tabset .tab{cursor:pointer;margin-bottom:-1px;text-align:center;position:relative}:host .tabset .tab.active a::before{display:block}:host .tabset .tab a{display:flex;position:relative;text-decoration:none}:host .tabset .tab a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0}:host .tabset .tab a i{font-size:1.5rem;vertical-align:middle}[dir=ltr] :host .tabset .tab a i+span{margin-left:.5rem}[dir=rtl] :host .tabset .tab a i+span{margin-right:.5rem} "],
            template: "\n    <ul class=\"tabset\">\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"selectTab(tab)\"\n          [class.responsive]=\"tab.responsive\"\n          [class.active]=\"tab.active\"\n          class=\"tab\">\n        <a href (click)=\"$event.preventDefault()\">\n          <i *ngIf=\"tab.tabIcon\" [class]=\"tab.tabIcon\"></i>\n          <span *ngIf=\"tab.tabTitle\">{{ tab.tabTitle }}</span>\n        </a>\n        <nb-badge *ngIf=\"tab.badgeText\"\n          [text]=\"tab.badgeText\"\n          [status]=\"tab.badgeStatus\"\n          [position]=\"tab.badgePosition\">\n        </nb-badge>\n      </li>\n    </ul>\n    <ng-content select=\"nb-tab\"></ng-content>\n  ",
        }),
        __metadata$42("design:paramtypes", [_angular_router.ActivatedRoute,
            i0.ChangeDetectorRef])
    ], NbTabsetComponent);
    return NbTabsetComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$65 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$43 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 * ### Installation
 *
 * Import `NbBadgeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbBadgeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Badge with default position and status(color):
 *
 * ```html
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * For example, badge can be placed into nb-card header:
 * @stacked-example(Showcase, badge/badge-showcase.component)
 *
 * Badge located on the bottom right with warning status:
 *
 * ```html
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-fg-text:
 * badge-primary-bg-color:
 * badge-success-bg-color:
 * badge-info-bg-color:
 * badge-warning-bg-color:
 * badge-danger-bg-color:
 */
var NbBadgeComponent = /** @class */ (function () {
    function NbBadgeComponent(layoutDirectionService) {
        this.layoutDirectionService = layoutDirectionService;
        this.colorClass = NbBadgeComponent_1.STATUS_PRIMARY;
        /**
         * Text to display
         * @type string
         */
        this.text = '';
    }
    NbBadgeComponent_1 = NbBadgeComponent;
    Object.defineProperty(NbBadgeComponent.prototype, "status", {
        /**
         * Badge status (adds specific styles):
         * 'primary', 'info', 'success', 'warning', 'danger'
         * @param {string} val
         * @type string
         */
        set: function (value) {
            if (value) {
                this.colorClass = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "positionClass", {
        get: function () {
            if (!this.position) {
                return NbBadgeComponent_1.TOP_RIGHT;
            }
            var isLtr = this.layoutDirectionService.isLtr();
            var startValue = isLtr ? 'left' : 'right';
            var endValue = isLtr ? 'right' : 'left';
            return this.position
                .replace(/\bstart\b/, startValue)
                .replace(/\bend\b/, endValue);
        },
        enumerable: true,
        configurable: true
    });
    var NbBadgeComponent_1;
    NbBadgeComponent.TOP_LEFT = 'top left';
    NbBadgeComponent.TOP_RIGHT = 'top right';
    NbBadgeComponent.BOTTOM_LEFT = 'bottom left';
    NbBadgeComponent.BOTTOM_RIGHT = 'bottom right';
    NbBadgeComponent.TOP_START = 'top start';
    NbBadgeComponent.TOP_END = 'top end';
    NbBadgeComponent.BOTTOM_START = 'bottom start';
    NbBadgeComponent.BOTTOM_END = 'bottom end';
    NbBadgeComponent.STATUS_PRIMARY = 'primary';
    NbBadgeComponent.STATUS_INFO = 'info';
    NbBadgeComponent.STATUS_SUCCESS = 'success';
    NbBadgeComponent.STATUS_WARNING = 'warning';
    NbBadgeComponent.STATUS_DANGER = 'danger';
    __decorate$65([
        i0.Input(),
        __metadata$43("design:type", String)
    ], NbBadgeComponent.prototype, "text", void 0);
    __decorate$65([
        i0.Input(),
        __metadata$43("design:type", String)
    ], NbBadgeComponent.prototype, "position", void 0);
    __decorate$65([
        i0.Input(),
        __metadata$43("design:type", Object),
        __metadata$43("design:paramtypes", [Object])
    ], NbBadgeComponent.prototype, "status", null);
    NbBadgeComponent = NbBadgeComponent_1 = __decorate$65([
        i0.Component({
            selector: 'nb-badge',
            styles: [":host .nb-badge{position:absolute;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem}:host .nb-badge.top{top:0}:host .nb-badge.right{right:0}:host .nb-badge.bottom{bottom:0}:host .nb-badge.left{left:0} "],
            template: "\n    <span class=\"nb-badge {{positionClass}} nb-badge-{{colorClass}}\">{{text}}</span>\n  ",
        }),
        __metadata$43("design:paramtypes", [NbLayoutDirectionService])
    ], NbBadgeComponent);
    return NbBadgeComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$64 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbBadgeModule = /** @class */ (function () {
    function NbBadgeModule() {
    }
    NbBadgeModule = __decorate$64([
        i0.NgModule({
            exports: [NbBadgeComponent],
            declarations: [NbBadgeComponent],
        })
    ], NbBadgeModule);
    return NbBadgeModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$62 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_TABSET_COMPONENTS = [
    NbTabsetComponent,
    NbTabComponent,
];
var NbTabsetModule = /** @class */ (function () {
    function NbTabsetModule() {
    }
    NbTabsetModule = __decorate$62([
        i0.NgModule({
            imports: [
                NbSharedModule,
                NbBadgeModule,
            ],
            declarations: NB_TABSET_COMPONENTS.slice(),
            exports: NB_TABSET_COMPONENTS.slice(),
        })
    ], NbTabsetModule);
    return NbTabsetModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$67 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$44 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 * @stacked-example(Showcase, user/user-showcase.component)
 *
 * ```ts
 *   <nb-user name="John Doe" title="Engineer"></nb-user>
 * ```
 *
 * ### Installation
 *
 * Import `NbUserModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbUserModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Available in multiple sizes:
 * @stacked-example(Multiple Sizes, user/user-sizes.component)
 *
 *
 * You can hide unnecessary captions (name, title or both):
 * @stacked-example(Hide captions in user component, user/user-hide-captions.component)
 *
 *
 * You can set custom avatar background-color, user image (as link or BASE64 string) and disable user initials:
 * @stacked-example(Avatar image settings, user/user-avatar-settings.component)
 *
 *
 * @styles
 *
 * user-font-size:
 * user-line-height:
 * user-bg:
 * user-fg:
 * user-fg-highlight:
 * user-font-family-secondary:
 * user-size-small:
 * user-size-medium:
 * user-size-large:
 * user-size-xlarge:
 */
var NbUserComponent = /** @class */ (function () {
    function NbUserComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        /**
         * Specifies a name to be shown on the right of a user picture
         * @type string
         */
        this.name = 'Anonymous';
        this.showNameValue = true;
        this.showTitleValue = true;
        this.showInitialsValue = true;
        this.isMenuShown = false;
    }
    NbUserComponent_1 = NbUserComponent;
    Object.defineProperty(NbUserComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "xlarge", {
        get: function () {
            return this.sizeValue === NbUserComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "picture", {
        /**
         * Absolute path to a user picture. Or base64 image
         * User name initials (JD for John Doe) will be shown if no picture specified
         * @type string
         */
        set: function (value) {
            this.imageBackgroundStyle = value ? this.domSanitizer.bypassSecurityTrustStyle("url(" + value + ")") : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "size", {
        /**
         * Size of the component, small|medium|large|xlarge
         * @type string
         */
        set: function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showName", {
        /**
         * Whether to show a user name or not
         * @type boolean
         */
        set: function (val) {
            this.showNameValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showTitle", {
        /**
         * Whether to show a user title or not
         * @type boolean
         */
        set: function (val) {
            this.showTitleValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showInitials", {
        /**
         * Whether to show a user initials (if no picture specified) or not
         * @type boolean
         */
        set: function (val) {
            this.showInitialsValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "onlyPicture", {
        /**
         * Whether to show only a picture or also show the name and title
         * @type boolean
         */
        set: function (val) {
            this.showNameValue = this.showTitleValue = !convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "inverse", {
        /**
         * Makes colors inverse based on current theme
         * @type boolean
         */
        set: function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbUserComponent.prototype.getInitials = function () {
        if (this.name) {
            var names = this.name.split(' ');
            return names.map(function (n) { return n.charAt(0); }).splice(0, 2).join('').toUpperCase();
        }
        return '';
    };
    var NbUserComponent_1;
    // TODO: it makes sense use object instead of list of variables (or even enum)
    /*
      static readonly SIZE = {
       SMALL: 'small',
       MEDIUM: 'medium',
       LARGE: 'large',
      };
     */
    NbUserComponent.SIZE_SMALL = 'small';
    NbUserComponent.SIZE_MEDIUM = 'medium';
    NbUserComponent.SIZE_LARGE = 'large';
    NbUserComponent.SIZE_XLARGE = 'xlarge';
    __decorate$67([
        i0.HostBinding('class.inverse'),
        __metadata$44("design:type", Boolean)
    ], NbUserComponent.prototype, "inverseValue", void 0);
    __decorate$67([
        i0.HostBinding('class.small'),
        __metadata$44("design:type", Object),
        __metadata$44("design:paramtypes", [])
    ], NbUserComponent.prototype, "small", null);
    __decorate$67([
        i0.HostBinding('class.medium'),
        __metadata$44("design:type", Object),
        __metadata$44("design:paramtypes", [])
    ], NbUserComponent.prototype, "medium", null);
    __decorate$67([
        i0.HostBinding('class.large'),
        __metadata$44("design:type", Object),
        __metadata$44("design:paramtypes", [])
    ], NbUserComponent.prototype, "large", null);
    __decorate$67([
        i0.HostBinding('class.xlarge'),
        __metadata$44("design:type", Object),
        __metadata$44("design:paramtypes", [])
    ], NbUserComponent.prototype, "xlarge", null);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", String)
    ], NbUserComponent.prototype, "name", void 0);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", String)
    ], NbUserComponent.prototype, "title", void 0);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", String),
        __metadata$44("design:paramtypes", [String])
    ], NbUserComponent.prototype, "picture", null);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", String)
    ], NbUserComponent.prototype, "color", void 0);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", String),
        __metadata$44("design:paramtypes", [String])
    ], NbUserComponent.prototype, "size", null);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", Boolean),
        __metadata$44("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "showName", null);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", Boolean),
        __metadata$44("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "showTitle", null);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", Boolean),
        __metadata$44("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "showInitials", null);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", Boolean),
        __metadata$44("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "onlyPicture", null);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", Boolean),
        __metadata$44("design:paramtypes", [Boolean])
    ], NbUserComponent.prototype, "inverse", null);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", String)
    ], NbUserComponent.prototype, "badgeText", void 0);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", String)
    ], NbUserComponent.prototype, "badgeStatus", void 0);
    __decorate$67([
        i0.Input(),
        __metadata$44("design:type", String)
    ], NbUserComponent.prototype, "badgePosition", void 0);
    NbUserComponent = NbUserComponent_1 = __decorate$67([
        i0.Component({
            selector: 'nb-user',
            styles: [":host{display:flex}:host .user-container{position:relative;display:flex;align-items:center}:host .user-picture{position:relative;border-radius:50%;flex-shrink:0}:host .user-picture.image{background-size:cover;background-repeat:no-repeat}:host .user-picture.background{display:flex;align-items:center;justify-content:center}:host .user-title{font-size:0.75rem}[dir=rtl] :host .user-name,[dir=rtl] :host .user-title{text-align:right}[dir=ltr] :host .info-container{margin-left:.5rem}[dir=rtl] :host .info-container{margin-right:.5rem} "],
            template: "<div class=\"user-container\"> <div *ngIf=\"imageBackgroundStyle\" class=\"user-picture image\" [style.background-image]=\"imageBackgroundStyle\"> <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge> </div> <div *ngIf=\"!imageBackgroundStyle\" class=\"user-picture background\" [style.background-color]=\"color\"> <ng-container *ngIf=\"showInitialsValue\"> {{ getInitials() }} </ng-container> <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge> </div> <div class=\"info-container\"> <div *ngIf=\"showNameValue && name\" class=\"user-name\">{{ name }}</div> <div *ngIf=\"showTitleValue && title\" class=\"user-title\">{{ title }}</div> </div> </div> ",
        }),
        __metadata$44("design:paramtypes", [_angular_platformBrowser.DomSanitizer])
    ], NbUserComponent);
    return NbUserComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$66 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_USER_COMPONENTS = [
    NbUserComponent,
];
var NbUserModule = /** @class */ (function () {
    function NbUserModule() {
    }
    NbUserModule = __decorate$66([
        i0.NgModule({
            imports: [
                NbSharedModule,
                NbBadgeModule,
            ],
            declarations: NB_USER_COMPONENTS.slice(),
            exports: NB_USER_COMPONENTS.slice(),
        })
    ], NbUserModule);
    return NbUserModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$69 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$45 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
var NbActionComponent = /** @class */ (function () {
    function NbActionComponent() {
        this.disabledValue = false;
    }
    Object.defineProperty(NbActionComponent.prototype, "disabled", {
        /**
         * Disables the item (changes item opacity and mouse cursor)
         * @type boolean
         */
        set: function (val) {
            this.disabledValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$69([
        i0.HostBinding('class.disabled'),
        __metadata$45("design:type", Boolean)
    ], NbActionComponent.prototype, "disabledValue", void 0);
    __decorate$69([
        i0.Input(),
        __metadata$45("design:type", String)
    ], NbActionComponent.prototype, "icon", void 0);
    __decorate$69([
        i0.Input(),
        __metadata$45("design:type", Boolean),
        __metadata$45("design:paramtypes", [Boolean])
    ], NbActionComponent.prototype, "disabled", null);
    __decorate$69([
        i0.Input(),
        __metadata$45("design:type", String)
    ], NbActionComponent.prototype, "badgeText", void 0);
    __decorate$69([
        i0.Input(),
        __metadata$45("design:type", String)
    ], NbActionComponent.prototype, "badgeStatus", void 0);
    __decorate$69([
        i0.Input(),
        __metadata$45("design:type", String)
    ], NbActionComponent.prototype, "badgePosition", void 0);
    NbActionComponent = __decorate$69([
        i0.Component({
            selector: 'nb-action',
            template: "\n    <a class=\"icon-container\" href=\"#\" *ngIf=\"icon; else showContent\" (click)=\"$event.preventDefault()\">\n      <i class=\"control-icon {{ icon }}\"></i>\n    </a>\n    <ng-template #showContent>\n      <ng-content></ng-content>\n    </ng-template>\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  ",
        })
    ], NbActionComponent);
    return NbActionComponent;
}());
/**
 * Shows a horizontal list of actions, available in multiple sizes.
 * Aligns items vertically.
 *
 * @stacked-example(Showcase, action/action-showcase.component)
 *
 * Basic actions setup:
 * ```html
 * <nb-actions size="small">
 *   <nb-action icon="nb-search"></nb-action>
 *   <nb-action icon="nb-power-circled"></nb-action>
 *   <nb-action icon="nb-person"></nb-action>
 * </nb-actions>
 * ```
 * ### Installation
 *
 * Import `NbActionsModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbActionsModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Multiple sizes example:
 * @stacked-example(Multiple Sizes, action/action-sizes.component)
 *
 * It is also possible to specify a `badge` value:
 *
 * @stacked-example(Action Badge, action/action-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, action/action-width.component)
 *
 * @styles
 *
 * actions-font-size:
 * actions-font-family:
 * actions-line-height:
 * actions-fg:
 * actions-bg:
 * actions-separator:
 * actions-padding:
 * actions-size-small:
 * actions-size-medium:
 * actions-size-large:
 */
var NbActionsComponent = /** @class */ (function () {
    function NbActionsComponent() {
        this.fullWidthValue = false;
    }
    NbActionsComponent_1 = NbActionsComponent;
    Object.defineProperty(NbActionsComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbActionsComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbActionsComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbActionsComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "size", {
        /**
         * Size of the component, small|medium|large
         * @type string
         */
        set: function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "inverse", {
        /**
         * Makes colors inverse based on current theme
         * @type boolean
         */
        set: function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "fullWidth", {
        /**
         * Component will fill full width of the container
         * @type boolean
         */
        set: function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    var NbActionsComponent_1;
    NbActionsComponent.SIZE_SMALL = 'small';
    NbActionsComponent.SIZE_MEDIUM = 'medium';
    NbActionsComponent.SIZE_LARGE = 'large';
    __decorate$69([
        i0.HostBinding('class.inverse'),
        __metadata$45("design:type", Boolean)
    ], NbActionsComponent.prototype, "inverseValue", void 0);
    __decorate$69([
        i0.HostBinding('class.small'),
        __metadata$45("design:type", Object),
        __metadata$45("design:paramtypes", [])
    ], NbActionsComponent.prototype, "small", null);
    __decorate$69([
        i0.HostBinding('class.medium'),
        __metadata$45("design:type", Object),
        __metadata$45("design:paramtypes", [])
    ], NbActionsComponent.prototype, "medium", null);
    __decorate$69([
        i0.HostBinding('class.large'),
        __metadata$45("design:type", Object),
        __metadata$45("design:paramtypes", [])
    ], NbActionsComponent.prototype, "large", null);
    __decorate$69([
        i0.HostBinding('class.full-width'),
        __metadata$45("design:type", Boolean)
    ], NbActionsComponent.prototype, "fullWidthValue", void 0);
    __decorate$69([
        i0.Input(),
        __metadata$45("design:type", String),
        __metadata$45("design:paramtypes", [String])
    ], NbActionsComponent.prototype, "size", null);
    __decorate$69([
        i0.Input(),
        __metadata$45("design:type", Boolean),
        __metadata$45("design:paramtypes", [Boolean])
    ], NbActionsComponent.prototype, "inverse", null);
    __decorate$69([
        i0.Input(),
        __metadata$45("design:type", Boolean),
        __metadata$45("design:paramtypes", [Boolean])
    ], NbActionsComponent.prototype, "fullWidth", null);
    NbActionsComponent = NbActionsComponent_1 = __decorate$69([
        i0.Component({
            selector: 'nb-actions',
            styles: [":host{display:flex;align-items:center}:host /deep/ nb-action{display:flex;flex-wrap:wrap;align-items:center;position:relative}:host /deep/ nb-action i.control-icon:hover{cursor:pointer}:host /deep/ nb-action.disabled{cursor:not-allowed}:host /deep/ nb-action.disabled>*{opacity:0.5}:host /deep/ nb-action.disabled a,:host /deep/ nb-action.disabled i{cursor:not-allowed !important} "],
            template: "\n    <ng-content select=\"nb-action\"></ng-content>\n  ",
        })
    ], NbActionsComponent);
    return NbActionsComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$68 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_ACTIONS_COMPONENTS = [
    NbActionComponent,
    NbActionsComponent,
];
var NbActionsModule = /** @class */ (function () {
    function NbActionsModule() {
    }
    NbActionsModule = __decorate$68([
        i0.NgModule({
            imports: [
                NbSharedModule,
                NbBadgeModule,
            ],
            declarations: NB_ACTIONS_COMPONENTS.slice(),
            exports: NB_ACTIONS_COMPONENTS.slice(),
        })
    ], NbActionsModule);
    return NbActionsModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$72 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Search component service, connects your code to a page-level search component.
 */
var NbSearchService = /** @class */ (function () {
    function NbSearchService() {
        this.searchSubmittings$ = new rxjs.Subject();
        this.searchActivations$ = new rxjs.Subject();
        this.searchDeactivations$ = new rxjs.Subject();
    }
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    NbSearchService.prototype.activateSearch = function (searchType, tag) {
        this.searchActivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    NbSearchService.prototype.deactivateSearch = function (searchType, tag) {
        this.searchDeactivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    NbSearchService.prototype.submitSearch = function (term, tag) {
        this.searchSubmittings$.next({ term: term, tag: tag });
    };
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchActivate = function () {
        return this.searchActivations$.pipe(rxjs_operators.share());
    };
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchDeactivate = function () {
        return this.searchDeactivations$.pipe(rxjs_operators.share());
    };
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchSubmit = function () {
        return this.searchSubmittings$.pipe(rxjs_operators.share());
    };
    NbSearchService = __decorate$72([
        i0.Injectable()
    ], NbSearchService);
    return NbSearchService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$71 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$46 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
var NbSearchFieldComponent = /** @class */ (function () {
    function NbSearchFieldComponent() {
        this.show = false;
        this.close = new i0.EventEmitter();
        this.search = new i0.EventEmitter();
    }
    NbSearchFieldComponent_1 = NbSearchFieldComponent;
    Object.defineProperty(NbSearchFieldComponent.prototype, "showClass", {
        get: function () {
            return this.show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalZoomin", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_MODAL_ZOOMIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "rotateLayout", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_ROTATE_LAYOUT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalMove", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_MODAL_MOVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "curtain", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "columnCurtain", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_COLUMN_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalDrop", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_MODAL_DROP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalHalf", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_MODAL_HALF;
        },
        enumerable: true,
        configurable: true
    });
    NbSearchFieldComponent.prototype.ngOnChanges = function (_a) {
        var show = _a.show;
        var becameHidden = !show.isFirstChange() && show.currentValue === false;
        if (becameHidden && this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
        this.focusInput();
    };
    NbSearchFieldComponent.prototype.ngAfterViewInit = function () {
        this.focusInput();
    };
    NbSearchFieldComponent.prototype.emitClose = function () {
        this.close.emit();
    };
    NbSearchFieldComponent.prototype.submitSearch = function (term) {
        if (term) {
            this.search.emit(term);
        }
    };
    NbSearchFieldComponent.prototype.focusInput = function () {
        if (this.show && this.inputElement) {
            this.inputElement.nativeElement.focus();
        }
    };
    var NbSearchFieldComponent_1;
    NbSearchFieldComponent.TYPE_MODAL_ZOOMIN = 'modal-zoomin';
    NbSearchFieldComponent.TYPE_ROTATE_LAYOUT = 'rotate-layout';
    NbSearchFieldComponent.TYPE_MODAL_MOVE = 'modal-move';
    NbSearchFieldComponent.TYPE_CURTAIN = 'curtain';
    NbSearchFieldComponent.TYPE_COLUMN_CURTAIN = 'column-curtain';
    NbSearchFieldComponent.TYPE_MODAL_DROP = 'modal-drop';
    NbSearchFieldComponent.TYPE_MODAL_HALF = 'modal-half';
    __decorate$71([
        i0.Input(),
        __metadata$46("design:type", String)
    ], NbSearchFieldComponent.prototype, "type", void 0);
    __decorate$71([
        i0.Input(),
        __metadata$46("design:type", String)
    ], NbSearchFieldComponent.prototype, "placeholder", void 0);
    __decorate$71([
        i0.Input(),
        __metadata$46("design:type", String)
    ], NbSearchFieldComponent.prototype, "hint", void 0);
    __decorate$71([
        i0.Input(),
        __metadata$46("design:type", Object)
    ], NbSearchFieldComponent.prototype, "show", void 0);
    __decorate$71([
        i0.Output(),
        __metadata$46("design:type", Object)
    ], NbSearchFieldComponent.prototype, "close", void 0);
    __decorate$71([
        i0.Output(),
        __metadata$46("design:type", Object)
    ], NbSearchFieldComponent.prototype, "search", void 0);
    __decorate$71([
        i0.ViewChild('searchInput'),
        __metadata$46("design:type", i0.ElementRef)
    ], NbSearchFieldComponent.prototype, "inputElement", void 0);
    __decorate$71([
        i0.HostBinding('class.show'),
        __metadata$46("design:type", Object),
        __metadata$46("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "showClass", null);
    __decorate$71([
        i0.HostBinding('class.modal-zoomin'),
        __metadata$46("design:type", Object),
        __metadata$46("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "modalZoomin", null);
    __decorate$71([
        i0.HostBinding('class.rotate-layout'),
        __metadata$46("design:type", Object),
        __metadata$46("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "rotateLayout", null);
    __decorate$71([
        i0.HostBinding('class.modal-move'),
        __metadata$46("design:type", Object),
        __metadata$46("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "modalMove", null);
    __decorate$71([
        i0.HostBinding('class.curtain'),
        __metadata$46("design:type", Object),
        __metadata$46("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "curtain", null);
    __decorate$71([
        i0.HostBinding('class.column-curtain'),
        __metadata$46("design:type", Object),
        __metadata$46("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "columnCurtain", null);
    __decorate$71([
        i0.HostBinding('class.modal-drop'),
        __metadata$46("design:type", Object),
        __metadata$46("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "modalDrop", null);
    __decorate$71([
        i0.HostBinding('class.modal-half'),
        __metadata$46("design:type", Object),
        __metadata$46("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "modalHalf", null);
    NbSearchFieldComponent = NbSearchFieldComponent_1 = __decorate$71([
        i0.Component({
            selector: 'nb-search-field',
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            styles: [":host button{margin:0;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}:host input{border-top:0;border-right:0;border-left:0;background:transparent;border-radius:0;line-height:1;display:inline-block;box-sizing:border-box;padding:0.05rem 0;-webkit-appearance:none}:host input:focus{outline:none}:host input::placeholder{opacity:0.3}:host span{font-size:90%;font-weight:bold;display:block;width:75%;margin:0 auto;padding:0.85rem 0;text-align:right}:host.modal-zoomin{display:block}:host.modal-zoomin .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-zoomin .search::before,:host.modal-zoomin .search::after{content:'';position:absolute;width:calc(100% + 15px);height:calc(100% + 15px);pointer-events:none}:host.modal-zoomin .search::before{top:0;left:0;border-right-width:0;border-bottom-width:0;transform:translate3d(-15px, -15px, 0)}:host.modal-zoomin .search::after{right:0;bottom:0;border-top-width:0;border-left-width:0;transform:translate3d(15px, 15px, 0)}:host.modal-zoomin .search button{position:absolute;top:3rem;font-size:2.5rem}[dir=ltr] :host.modal-zoomin .search button{right:3rem}[dir=rtl] :host.modal-zoomin .search button{left:3rem}:host.modal-zoomin .search input{font-size:10vw;width:75%}:host.modal-zoomin .search button{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin .search form{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin.show .search{pointer-events:auto;opacity:1}:host.modal-zoomin.show .search::before,:host.modal-zoomin.show .search::after{transform:translate3d(0, 0, 0);transition:transform 0.5s}:host.modal-zoomin.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-zoomin.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40rem){:host.modal-zoomin form{margin:5rem 0 1rem}:host.modal-zoomin span{text-align:left}} ",
"/deep/ nb-layout.rotate-layout{position:fixed;overflow:hidden;width:100%}/deep/ nb-layout.rotate-layout .scrollable-container{position:relative;z-index:10001;transition:transform 0.5s cubic-bezier(0.2, 1, 0.3, 1)}/deep/ nb-layout.rotate-layout.with-search .scrollable-container{transition:transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);transform-origin:50vw 50vh;transform:perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);pointer-events:none}:host.rotate-layout{position:absolute;display:block;width:100vw;height:100vh;pointer-events:none;opacity:0;transition-property:opacity;transition-delay:0.4s}:host.rotate-layout .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:50vh;pointer-events:none;opacity:0;transition:opacity 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}[dir=ltr] :host.rotate-layout .search button{right:3rem}[dir=rtl] :host.rotate-layout .search button{left:3rem}:host.rotate-layout .search form{margin:5rem 0;opacity:0;transform:scale3d(0.7, 0.7, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search input{font-size:7vw;width:75%}:host.rotate-layout.show{opacity:1;transition-delay:0s}:host.rotate-layout.show .search{pointer-events:auto;opacity:1}:host.rotate-layout.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.rotate-layout.show .search form{opacity:1;transform:scale3d(1, 1, 1)} ",
"/deep/ nb-layout.modal-move .layout{transition:transform 0.5s}/deep/ nb-layout.modal-move.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-move .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-move .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}[dir=ltr] :host.modal-move .search button{right:3rem}[dir=rtl] :host.modal-move .search button{left:3rem}:host.modal-move .search form{margin:5rem 0;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-move .search input{font-size:10vw;width:75%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s}:host.modal-move.show .search{pointer-events:auto;opacity:1}:host.modal-move.show .search button{opacity:1}:host.modal-move.show .search form{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-move.show .search input{transform:scale3d(1, 1, 1);transition-duration:0.5s}@media screen and (max-width: 40rem){:host.modal-move span{text-align:left}} ",
":host.curtain .search{position:fixed;z-index:1050;top:0;left:100%;overflow:hidden;height:100vh;width:100%;padding:3rem;pointer-events:none;transition:transform 0.3s;transition-delay:0.4s;transition-timing-function:ease-out}:host.curtain .search::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transition:transform 0.3s;transition-timing-function:ease-out}:host.curtain .search button{font-size:2.5rem;position:absolute;top:3rem;transition:opacity 0.1s;transition-delay:0.3s}[dir=ltr] :host.curtain .search button{right:3rem}[dir=rtl] :host.curtain .search button{left:3rem}:host.curtain .search form{width:50%;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.curtain .search input{width:100%;font-size:6vw}:host.curtain.show .search{width:100%;pointer-events:auto;transform:translate3d(-100%, 0, 0);transition-delay:0s}:host.curtain.show .search::after{transform:translate3d(100%, 0, 0);transition-delay:0.4s}:host.curtain.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.curtain.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40em){:host.curtain span{width:90%}:host.curtain input{font-size:2em;width:90%}}/deep/ nb-layout.curtain .scrollable-container{position:relative;z-index:0} ",
"/deep/ nb-layout.column-curtain.with-search .layout{pointer-events:none}:host.column-curtain{display:block;position:fixed;z-index:1050;top:0;left:50%;overflow:hidden;width:50%;height:100vh;pointer-events:none}:host.column-curtain::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain .search{position:relative;padding:2.5rem 1.5rem 0;background:transparent}:host.column-curtain .search button{position:absolute;top:2rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}[dir=ltr] :host.column-curtain .search button{right:2rem}[dir=rtl] :host.column-curtain .search button{left:2rem}:host.column-curtain .search form{width:85%;transform:translate3d(-150%, 0, 0);transition:transform 0.3s}:host.column-curtain .search input{font-size:2.5rem;width:100%}:host.column-curtain .search span{font-size:85%}:host.column-curtain.show{pointer-events:auto}:host.column-curtain.show::before{transform:scale3d(1, 1, 1)}:host.column-curtain.show .search form{transform:translate3d(0, 0, 0);transition-delay:0.15s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain.show .search button{opacity:1;z-index:100}@media screen and (max-width: 40rem){:host.column-curtain span{width:90%}:host.column-curtain input{font-size:2rem;width:90%}} ",
"/deep/ nb-layout.modal-drop .layout{position:relative;transition:transform 0.4s, opacity 0.4s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}/deep/ nb-layout.modal-drop.with-search .layout{opacity:0;transform:scale3d(0.9, 0.9, 1);pointer-events:none}:host.modal-drop .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-drop .search::before{content:'';position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;transition:opacity 0.4s}:host.modal-drop .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;opacity:0;transition:opacity 0.4s}[dir=ltr] :host.modal-drop .search button{right:3rem}[dir=rtl] :host.modal-drop .search button{left:3rem}:host.modal-drop .search form{position:relative;margin:5rem 0 2rem}:host.modal-drop .search input{font-size:6vw;width:60%;padding:0.25rem;text-align:center;opacity:0;transition:opacity 0.4s}:host.modal-drop .search span{position:relative;z-index:9;display:block;width:60%;padding:0.85rem 0;opacity:0;transform:translate3d(0, -50px, 0);transition:opacity 0.4s, transform 0.4s}:host.modal-drop .search .form-content{position:relative;z-index:10;overflow:hidden;transform:translate3d(0, -50px, 0);transition:transform 0.4s}:host.modal-drop .search .form-content::after{content:'';position:absolute;top:0;left:20%;width:60%;height:105%;opacity:0;transform-origin:50% 0}:host.modal-drop.show .search{pointer-events:auto}:host.modal-drop.show .search::before{opacity:1}:host.modal-drop.show .search button{opacity:1}:host.modal-drop.show .search .form-content{transform:translate3d(0, 0, 0);transition:none}:host.modal-drop.show .search .form-content::after{animation:scaleUpDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards}:host.modal-drop.show .search input{opacity:1;transition:opacity 0s 0.4s}:host.modal-drop.show .search span{opacity:1;transform:translate3d(0, 0, 0);transition-delay:0.4s;transition-timing-function:ease-out}@keyframes scaleUpDown{0%{opacity:1;transform:scale3d(1, 0, 1)}50%{transform:scale3d(1, 1, 1);transform-origin:50% 0;transition-timing-function:ease-out}50.1%{transform-origin:50% 100%;transition-timing-function:ease-out}100%{opacity:1;transform:scale3d(1, 0, 1);transform-origin:50% 100%;transition-timing-function:ease-out}}@media screen and (max-width: 40rem){:host.modal-drop form{margin:2rem 0}:host.modal-drop input{width:100%;left:0}} ",
"/deep/ nb-layout.modal-half .layout{transition:transform 0.6s, opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}/deep/ nb-layout.modal-half.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-half .search{text-align:center;position:fixed;z-index:1050;top:0;left:0;overflow:hidden;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-half .search::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.modal-half .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;z-index:100;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.6s, transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}[dir=ltr] :host.modal-half .search button{right:3rem}[dir=rtl] :host.modal-half .search button{left:3rem}:host.modal-half .search .form-wrapper{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:50%;transition:transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1);transform:translate3d(0, -100%, 0)}:host.modal-half .search form{width:75%;margin:0 auto}:host.modal-half .search input{font-size:7vw;width:100%}:host.modal-half.show .search{pointer-events:auto}:host.modal-half.show .search::before{opacity:1}:host.modal-half.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-half.show .search .form-wrapper{transform:translate3d(0, 0, 0)} "],
            template: "\n    <div class=\"search\" (keyup.esc)=\"emitClose()\">\n      <button (click)=\"emitClose()\">\n        <i class=\"nb-close-circled\"></i>\n      </button>\n      <div class=\"form-wrapper\">\n        <form class=\"form\" (keyup.enter)=\"submitSearch(searchInput.value)\">\n          <div class=\"form-content\">\n            <input class=\"search-input\"\n                   #searchInput\n                   autocomplete=\"off\"\n                   [attr.placeholder]=\"placeholder\"\n                   tabindex=\"-1\"\n                   (blur)=\"focusInput()\"/>\n          </div>\n          <span class=\"info\">{{ hint }}</span>\n        </form>\n      </div>\n    </div>\n  ",
        })
    ], NbSearchFieldComponent);
    return NbSearchFieldComponent;
}());
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
var NbSearchComponent = /** @class */ (function () {
    function NbSearchComponent(searchService, themeService, router, overlayService, changeDetector) {
        this.searchService = searchService;
        this.themeService = themeService;
        this.router = router;
        this.overlayService = overlayService;
        this.changeDetector = changeDetector;
        this.alive = true;
        this.showSearchField = false;
        /**
         * Search input placeholder
         * @type {string}
         */
        this.placeholder = 'Search...';
        /**
         * Hint showing under the input field to improve user experience
         *
         * @type {string}
         */
        this.hint = 'Hit enter to search';
    }
    NbSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (event) { return event instanceof _angular_router.NavigationEnd; }))
            .subscribe(function () { return _this.hideSearch(); });
        this.searchService.onSearchActivate()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (data) { return !_this.tag || data.tag === _this.tag; }))
            .subscribe(function () { return _this.openSearch(); });
        this.searchService.onSearchDeactivate()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (data) { return !_this.tag || data.tag === _this.tag; }))
            .subscribe(function () { return _this.hideSearch(); });
    };
    NbSearchComponent.prototype.ngOnDestroy = function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.removeLayoutClasses();
            this.overlayRef.detach();
        }
        this.alive = false;
    };
    NbSearchComponent.prototype.openSearch = function () {
        var _this = this;
        if (!this.overlayRef) {
            this.overlayRef = this.overlayService.create();
            this.overlayRef.attach(this.searchFieldPortal);
        }
        this.themeService.appendLayoutClass(this.type);
        rxjs.of(null).pipe(rxjs_operators.delay(0)).subscribe(function () {
            _this.themeService.appendLayoutClass('with-search');
            _this.showSearchField = true;
            _this.changeDetector.detectChanges();
        });
    };
    NbSearchComponent.prototype.hideSearch = function () {
        this.removeLayoutClasses();
        this.showSearchField = false;
        this.changeDetector.detectChanges();
        this.searchButton.nativeElement.focus();
    };
    NbSearchComponent.prototype.search = function (term) {
        this.searchService.submitSearch(term, this.tag);
        this.hideSearch();
    };
    NbSearchComponent.prototype.removeLayoutClasses = function () {
        var _this = this;
        this.themeService.removeLayoutClass('with-search');
        rxjs.of(null).pipe(rxjs_operators.delay(500)).subscribe(function () {
            _this.themeService.removeLayoutClass(_this.type);
        });
    };
    __decorate$71([
        i0.Input(),
        __metadata$46("design:type", String)
    ], NbSearchComponent.prototype, "tag", void 0);
    __decorate$71([
        i0.Input(),
        __metadata$46("design:type", String)
    ], NbSearchComponent.prototype, "placeholder", void 0);
    __decorate$71([
        i0.Input(),
        __metadata$46("design:type", String)
    ], NbSearchComponent.prototype, "hint", void 0);
    __decorate$71([
        i0.Input(),
        __metadata$46("design:type", String)
    ], NbSearchComponent.prototype, "type", void 0);
    __decorate$71([
        i0.ViewChild(NbPortalDirective),
        __metadata$46("design:type", NbPortalDirective)
    ], NbSearchComponent.prototype, "searchFieldPortal", void 0);
    __decorate$71([
        i0.ViewChild('searchButton'),
        __metadata$46("design:type", i0.ElementRef)
    ], NbSearchComponent.prototype, "searchButton", void 0);
    NbSearchComponent = __decorate$71([
        i0.Component({
            selector: 'nb-search',
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            styles: [":host button{font-size:2rem;margin:0 auto;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}/deep/ nb-layout.with-search .scrollable-container{position:relative;z-index:0} "],
            template: "\n    <button #searchButton class=\"start-search\" (click)=\"openSearch()\">\n      <i class=\"nb-search\"></i>\n    </button>\n    <nb-search-field\n      *nbPortal\n      [show]=\"showSearchField\"\n      [type]=\"type\"\n      [placeholder]=\"placeholder\"\n      [hint]=\"hint\"\n      (search)=\"search($event)\"\n      (close)=\"hideSearch()\">\n    </nb-search-field>\n  ",
        }),
        __metadata$46("design:paramtypes", [NbSearchService,
            NbThemeService,
            _angular_router.Router,
            NbOverlayService,
            i0.ChangeDetectorRef])
    ], NbSearchComponent);
    return NbSearchComponent;
}());

var __decorate$70 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbSearchModule = /** @class */ (function () {
    function NbSearchModule() {
    }
    NbSearchModule = __decorate$70([
        i0.NgModule({
            imports: [
                NbSharedModule,
                NbOverlayModule,
            ],
            declarations: [
                NbSearchComponent,
                NbSearchFieldComponent,
            ],
            exports: [
                NbSearchComponent,
                NbSearchFieldComponent,
            ],
            providers: [
                NbSearchService,
            ],
            entryComponents: [
                NbSearchFieldComponent,
            ],
        })
    ], NbSearchModule);
    return NbSearchModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$73 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$47 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Can have one of the following statuses: danger, success or warning
 *
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * @additional-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 *
 * @styles
 *
 * checkbox-bg:
 * checkbox-size:
 * checkbox-border-size:
 * checkbox-border-color:
 * checkbox-checkmark:
 * checkbox-checked-bg:
 * checkbox-checked-size:
 * checkbox-checked-border-size:
 * checkbox-checked-border-color:
 * checkbox-checked-checkmark:
 * checkbox-disabled-bg:
 * checkbox-disabled-size:
 * checkbox-disabled-border-size:
 * checkbox-disabled-border-color:
 * checkbox-disabled-checkmark:
 */
var NbCheckboxComponent = /** @class */ (function () {
    function NbCheckboxComponent(changeDetector) {
        this.changeDetector = changeDetector;
        /**
         * Checkbox value
         * @type {boolean}
         * @private
         */
        this._value = false;
        this.disabled = false;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    NbCheckboxComponent_1 = NbCheckboxComponent;
    Object.defineProperty(NbCheckboxComponent.prototype, "setDisabled", {
        set: function (val) {
            this.disabled = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "setStatus", {
        /**
         * Checkbox status (success, warning, danger)
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
        },
        enumerable: true,
        configurable: true
    });
    NbCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbCheckboxComponent.prototype.writeValue = function (val) {
        this._value = val;
        this.changeDetector.detectChanges();
    };
    NbCheckboxComponent.prototype.setDisabledState = function (val) {
        this.disabled = convertToBoolProperty(val);
    };
    NbCheckboxComponent.prototype.setTouched = function () {
        this.onTouched();
    };
    var NbCheckboxComponent_1;
    __decorate$73([
        i0.Input('value'),
        __metadata$47("design:type", Boolean)
    ], NbCheckboxComponent.prototype, "_value", void 0);
    __decorate$73([
        i0.Input('disabled'),
        __metadata$47("design:type", Boolean),
        __metadata$47("design:paramtypes", [Boolean])
    ], NbCheckboxComponent.prototype, "setDisabled", null);
    __decorate$73([
        i0.Input('status'),
        __metadata$47("design:type", String),
        __metadata$47("design:paramtypes", [String])
    ], NbCheckboxComponent.prototype, "setStatus", null);
    __decorate$73([
        i0.HostBinding('class.success'),
        __metadata$47("design:type", Object),
        __metadata$47("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "success", null);
    __decorate$73([
        i0.HostBinding('class.warning'),
        __metadata$47("design:type", Object),
        __metadata$47("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "warning", null);
    __decorate$73([
        i0.HostBinding('class.danger'),
        __metadata$47("design:type", Object),
        __metadata$47("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "danger", null);
    NbCheckboxComponent = NbCheckboxComponent_1 = __decorate$73([
        i0.Component({
            selector: 'nb-checkbox',
            template: "\n    <label class=\"customised-control\">\n      <input type=\"checkbox\" class=\"customised-control-input\"\n             [disabled]=\"disabled\"\n             [checked]=\"value\"\n             (change)=\"value = !value\"\n             (blur)=\"setTouched()\">\n      <span class=\"customised-control-indicator\"></span>\n      <span class=\"customised-control-description\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
            styles: [":host .customised-control{position:relative;display:inline-flex;margin:0;min-height:inherit;padding:0.375rem 1.5rem 0.375rem 0}:host .customised-control-input{position:absolute;opacity:0}:host .customised-control-input:disabled ~ .customised-control-indicator,:host .customised-control-input:disabled ~ .customised-control-description{opacity:0.5}:host .customised-control-indicator{border-radius:0.25rem;flex-shrink:0}:host .customised-control-indicator::before{content:'';border-style:solid;display:block;margin:0 auto;transform:rotate(45deg)}[dir=ltr] :host .customised-control-description{padding-left:.5rem}[dir=rtl] :host .customised-control-description{padding-right:.5rem} "],
            providers: [{
                    provide: _angular_forms.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return NbCheckboxComponent_1; }),
                    multi: true,
                }],
        }),
        __metadata$47("design:paramtypes", [i0.ChangeDetectorRef])
    ], NbCheckboxComponent);
    return NbCheckboxComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$74 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbCheckboxModule = /** @class */ (function () {
    function NbCheckboxModule() {
    }
    NbCheckboxModule = __decorate$74([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: [NbCheckboxComponent],
            exports: [NbCheckboxComponent],
        })
    ], NbCheckboxModule);
    return NbCheckboxModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends$9 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$76 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$49 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-fg
 * popover-bg
 * popover-border
 * popover-shadow
 * */
var NbPopoverComponent = /** @class */ (function (_super) {
    __extends$9(NbPopoverComponent, _super);
    function NbPopoverComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPopoverComponent.prototype.ngAfterViewInit = function () {
        if (this.content instanceof i0.TemplateRef) {
            this.attachTemplate();
        }
        else if (this.content instanceof i0.Type) {
            this.attachComponent();
        }
        else {
            this.attachString();
        }
    };
    NbPopoverComponent.prototype.attachTemplate = function () {
        this.overlayContainer.attachTemplatePortal(new NbTemplatePortal(this.content, null, this.context));
    };
    NbPopoverComponent.prototype.attachComponent = function () {
        var portal = new NbComponentPortal(this.content, null, null, this.cfr);
        var ref = this.overlayContainer.attachComponentPortal(portal);
        Object.assign(ref.instance, this.context);
        ref.changeDetectorRef.detectChanges();
    };
    NbPopoverComponent.prototype.attachString = function () {
        this.overlayContainer.attachStringContent(this.content);
    };
    __decorate$76([
        i0.ViewChild(NbOverlayContainerComponent),
        __metadata$49("design:type", NbOverlayContainerComponent)
    ], NbPopoverComponent.prototype, "overlayContainer", void 0);
    __decorate$76([
        i0.Input(),
        __metadata$49("design:type", Object)
    ], NbPopoverComponent.prototype, "content", void 0);
    __decorate$76([
        i0.Input(),
        __metadata$49("design:type", Object)
    ], NbPopoverComponent.prototype, "context", void 0);
    __decorate$76([
        i0.Input(),
        __metadata$49("design:type", i0.ComponentFactoryResolver)
    ], NbPopoverComponent.prototype, "cfr", void 0);
    NbPopoverComponent = __decorate$76([
        i0.Component({
            selector: 'nb-popover',
            styles: [":host .arrow{position:absolute;width:0;height:0}:host /deep/ nb-overlay-container .primitive-overlay{padding:0.75rem 1rem} "],
            template: "\n    <span class=\"arrow\"></span>\n    <nb-overlay-container></nb-overlay-container>\n  ",
        })
    ], NbPopoverComponent);
    return NbPopoverComponent;
}(NbPositionedContainer));

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$75 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$48 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$12 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Powerful popover directive, which provides the best UX for your users.
 *
 * @stacked-example(Showcase, popover/popover-showcase.component)
 *
 * Popover can accept different content such as:
 * TemplateRef
 *
 * ```html
 * <button [nbPopover]="templateRef"></button>
 * <ng-template #templateRef>
 *   <span>Hello, Popover!</span>
 * </ng-template>
 * ```
 * ### Installation
 *
 * Import `NbPopoverModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbPopoverModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Custom components
 *
 * ```html
 * <button [nbPopover]="MyPopoverComponent"></button>
 * ```
 *
 * Both custom components and templateRef popovers can receive *contentContext* property
 * that will be passed to the content props.
 *
 * Primitive types
 *
 * ```html
 * <button nbPopover="Hello, Popover!"></button>
 * ```
 *
 * Popover has different placements, such as: top, bottom, left, right, start and end
 * which can be used as following:
 *
 * @stacked-example(Placements, popover/popover-placements.component)
 *
 * By default popover will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the popover container.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button nbPopover="Hello, Popover!" [nbPopoverAdjust]="false"></button>
 * ```
 *
 * Also popover has some different modes which provides capability show$ and hide$ popover in different ways:
 *
 * - Click mode popover shows when a user clicking on the host element and hides when the user clicks
 * somewhere on the document except popover.
 * - Hint mode provides capability show$ popover when the user hovers on the host element
 * and hide$ popover when user hovers out of the host.
 * - Hover mode works like hint mode with one exception - when the user moves mouse from host element to
 * the container element popover will not be hidden.
 *
 * @stacked-example(Available Modes, popover/popover-modes.component.html)
 *
 * @additional-example(Template Ref, popover/popover-template-ref.component)
 * @additional-example(Custom Component, popover/popover-custom-component.component)
 * */
var NbPopoverDirective = /** @class */ (function () {
    function NbPopoverDirective(document, hostRef, positionBuilder, overlay, componentFactoryResolver) {
        this.document = document;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        /**
         * Container content context. Will be applied to the rendered component.
         * */
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         * */
        this.position = exports.NbPosition.TOP;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         * */
        this.adjustment = exports.NbAdjustment.CLOCKWISE;
        /**
         * Describes when the container will be shown.
         * Available options: click, hover and hint
         * */
        this.mode = exports.NbTrigger.CLICK;
        this.alive = true;
    }
    NbPopoverDirective.prototype.ngAfterViewInit = function () {
        this.subscribeOnTriggers();
        this.subscribeOnPositionChange();
    };
    NbPopoverDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.hide();
        if (this.ref) {
            this.ref.dispose();
        }
    };
    NbPopoverDirective.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openPopover();
    };
    NbPopoverDirective.prototype.hide = function () {
        if (this.ref) {
            this.ref.detach();
        }
        this.container = null;
    };
    NbPopoverDirective.prototype.toggle = function () {
        if (this.ref && this.ref.hasAttached()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    NbPopoverDirective.prototype.createOverlay = function () {
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
    };
    NbPopoverDirective.prototype.openPopover = function () {
        this.container = createContainer(this.ref, NbPopoverComponent, {
            position: this.position,
            content: this.content,
            context: this.context,
            cfr: this.componentFactoryResolver,
        }, this.componentFactoryResolver);
    };
    NbPopoverDirective.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(this.position)
            .adjustment(this.adjustment);
    };
    NbPopoverDirective.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(this.mode)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.container; })
            .build();
    };
    NbPopoverDirective.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy = this.createPositionStrategy();
        this.positionStrategy.positionChange
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return patch(_this.container, { position: position }); });
    };
    NbPopoverDirective.prototype.subscribeOnTriggers = function () {
        var _this = this;
        var triggerStrategy = this.createTriggerStrategy();
        triggerStrategy.show$.pipe(rxjs_operators.takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.show(); });
        triggerStrategy.hide$.pipe(rxjs_operators.takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.hide(); });
    };
    __decorate$75([
        i0.Input('nbPopover'),
        __metadata$48("design:type", Object)
    ], NbPopoverDirective.prototype, "content", void 0);
    __decorate$75([
        i0.Input('nbPopoverContext'),
        __metadata$48("design:type", Object)
    ], NbPopoverDirective.prototype, "context", void 0);
    __decorate$75([
        i0.Input('nbPopoverPlacement'),
        __metadata$48("design:type", String)
    ], NbPopoverDirective.prototype, "position", void 0);
    __decorate$75([
        i0.Input('nbPopoverAdjustment'),
        __metadata$48("design:type", String)
    ], NbPopoverDirective.prototype, "adjustment", void 0);
    __decorate$75([
        i0.Input('nbPopoverMode'),
        __metadata$48("design:type", String)
    ], NbPopoverDirective.prototype, "mode", void 0);
    NbPopoverDirective = __decorate$75([
        i0.Directive({ selector: '[nbPopover]' }),
        __param$12(0, i0.Inject(NB_DOCUMENT)),
        __metadata$48("design:paramtypes", [Object, i0.ElementRef,
            NbPositionBuilderService,
            NbOverlayService,
            i0.ComponentFactoryResolver])
    ], NbPopoverDirective);
    return NbPopoverDirective;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$77 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbPopoverModule = /** @class */ (function () {
    function NbPopoverModule() {
    }
    NbPopoverModule = __decorate$77([
        i0.NgModule({
            imports: [NbOverlayModule],
            declarations: [NbPopoverDirective, NbPopoverComponent],
            exports: [NbPopoverDirective],
            entryComponents: [NbPopoverComponent],
        })
    ], NbPopoverModule);
    return NbPopoverModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends$10 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$79 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$51 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-fg
 * context-menu-active-fg
 * context-menu-active-bg
 * */
var NbContextMenuComponent = /** @class */ (function (_super) {
    __extends$10(NbContextMenuComponent, _super);
    function NbContextMenuComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        return _this;
    }
    __decorate$79([
        i0.Input(),
        __metadata$51("design:type", Array)
    ], NbContextMenuComponent.prototype, "items", void 0);
    __decorate$79([
        i0.Input(),
        __metadata$51("design:type", String)
    ], NbContextMenuComponent.prototype, "tag", void 0);
    NbContextMenuComponent = __decorate$79([
        i0.Component({
            selector: 'nb-context-menu',
            styles: [":host .arrow{position:absolute;width:0;height:0}:host /deep/ nb-menu{display:inline;font-size:0.875rem;line-height:1.5rem}:host /deep/ nb-menu ul.menu-items{margin:0;padding:0.5rem 0}:host /deep/ nb-menu ul.menu-items .menu-item{border:none;white-space:nowrap}:host /deep/ nb-menu ul.menu-items .menu-item:first-child{border:none}:host /deep/ nb-menu ul.menu-items .menu-item a{cursor:pointer;border-radius:0;padding:0}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon{font-size:1.5rem;width:auto}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-title{padding:0.375rem 3rem}[dir=rtl] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-title{text-align:right}[dir=ltr] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon ~ .menu-title{padding-left:0}[dir=rtl] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon ~ .menu-title{padding-right:0}[dir=ltr] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon:first-child{padding-left:1rem}[dir=rtl] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon:first-child{padding-right:1rem} "],
            template: "\n    <span class=\"arrow\"></span>\n    <nb-menu class=\"context-menu\" [items]=\"items\" [tag]=\"tag\"></nb-menu>\n  ",
        })
    ], NbContextMenuComponent);
    return NbContextMenuComponent;
}(NbPositionedContainer));

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$78 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$50 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$13 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Full featured context menu directive.
 *
 * @stacked-example(Showcase, context-menu/context-menu-showcase.component)
 *
 * Just pass menu items array:
 *
 * ```html
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * ### Installation
 *
 * Import `NbContextMenuModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbContextMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to handle context menu clicks you have to pass `nbContextMenuTag`
 * param and register to events using NbMenuService.
 * `NbContextMenu` renders plain `NbMenu` inside, so
 * you have to work with it just like with `NbMenu` component:
 *
 * @stacked-example(Menu item click, context-menu/context-menu-click.component)
 *
 * Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * */
var NbContextMenuDirective = /** @class */ (function () {
    function NbContextMenuDirective(document, menuService, hostRef, positionBuilder, overlay, componentFactoryResolver) {
        this.document = document;
        this.menuService = menuService;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom and left.
         * */
        this.position = exports.NbPosition.BOTTOM;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         * */
        this.adjustment = exports.NbAdjustment.CLOCKWISE;
        this.alive = true;
        this.items = [];
    }
    Object.defineProperty(NbContextMenuDirective.prototype, "setItems", {
        /**
         * Basic menu items, will be passed to the internal NbMenuComponent.
         * */
        set: function (items) {
            this.validateItems(items);
            this.items = items;
        },
        enumerable: true,
        configurable: true
    });
    
    NbContextMenuDirective.prototype.ngAfterViewInit = function () {
        this.subscribeOnTriggers();
        this.subscribeOnItemClick();
    };
    NbContextMenuDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.hide();
    };
    NbContextMenuDirective.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openContextMenu();
    };
    NbContextMenuDirective.prototype.hide = function () {
        if (this.ref) {
            this.ref.detach();
        }
        this.container = null;
    };
    NbContextMenuDirective.prototype.toggle = function () {
        if (this.ref && this.ref.hasAttached()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    NbContextMenuDirective.prototype.createOverlay = function () {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.subscribeOnPositionChange();
    };
    NbContextMenuDirective.prototype.openContextMenu = function () {
        this.container = createContainer(this.ref, NbContextMenuComponent, {
            position: this.position,
            items: this.items,
            tag: this.tag,
        }, this.componentFactoryResolver);
    };
    NbContextMenuDirective.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(this.position)
            .adjustment(this.adjustment);
    };
    NbContextMenuDirective.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(exports.NbTrigger.CLICK)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.container; })
            .build();
    };
    NbContextMenuDirective.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy.positionChange
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return patch(_this.container, { position: position }); });
    };
    NbContextMenuDirective.prototype.subscribeOnTriggers = function () {
        var _this = this;
        var triggerStrategy = this.createTriggerStrategy();
        triggerStrategy.show$.pipe(rxjs_operators.takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.show(); });
        triggerStrategy.hide$.pipe(rxjs_operators.takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.hide(); });
    };
    /*
     * NbMenuComponent will crash if don't pass menu items to it.
     * So, we just validating them and throw custom obvious error.
     * */
    NbContextMenuDirective.prototype.validateItems = function (items) {
        if (!items || !items.length) {
            throw Error("List of menu items expected, but given: " + items);
        }
    };
    NbContextMenuDirective.prototype.subscribeOnItemClick = function () {
        var _this = this;
        this.menuService.onItemClick()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function (_a) {
            var tag = _a.tag;
            return tag === _this.tag;
        }))
            .subscribe(function () { return _this.hide(); });
    };
    __decorate$78([
        i0.Input('nbContextMenuPlacement'),
        __metadata$50("design:type", String)
    ], NbContextMenuDirective.prototype, "position", void 0);
    __decorate$78([
        i0.Input('nbContextMenuAdjustment'),
        __metadata$50("design:type", String)
    ], NbContextMenuDirective.prototype, "adjustment", void 0);
    __decorate$78([
        i0.Input('nbContextMenuTag'),
        __metadata$50("design:type", String)
    ], NbContextMenuDirective.prototype, "tag", void 0);
    __decorate$78([
        i0.Input('nbContextMenu'),
        __metadata$50("design:type", Array),
        __metadata$50("design:paramtypes", [Array])
    ], NbContextMenuDirective.prototype, "setItems", null);
    NbContextMenuDirective = __decorate$78([
        i0.Directive({ selector: '[nbContextMenu]' }),
        __param$13(0, i0.Inject(NB_DOCUMENT)),
        __metadata$50("design:paramtypes", [Object, NbMenuService,
            i0.ElementRef,
            NbPositionBuilderService,
            NbOverlayService,
            i0.ComponentFactoryResolver])
    ], NbContextMenuDirective);
    return NbContextMenuDirective;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$80 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbContextMenuModule = /** @class */ (function () {
    function NbContextMenuModule() {
    }
    NbContextMenuModule = __decorate$80([
        i0.NgModule({
            imports: [i1.CommonModule, NbOverlayModule, NbMenuModule],
            exports: [NbContextMenuDirective],
            declarations: [NbContextMenuDirective, NbContextMenuComponent],
            entryComponents: [NbContextMenuComponent],
        })
    ], NbContextMenuModule);
    return NbContextMenuModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$81 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$52 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Progress Bar is a component for indicating progress.
 *
 * Simple usage:
 *
 * ```html
 * <nb-progress-bar [value]="50"></nb-progress-bar>
 * ```
 * ### Installation
 *
 * Import `NbProgressBarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbProgressBarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Progress bar accepts property `value` in range 0-100
 * @stacked-example(Progress bar, progress-bar/progress-bar-showcase.component)
 *
 * Progress bar background could be configured by providing a `status` property:
 * @stacked-example(Progress bar status, progress-bar/progress-bar-status.component)
 *
 * Progress bar size (height and font-size) could be configured by providing a `size` property:
 * @stacked-example(Progress bar size, progress-bar/progress-bar-size.component)
 *
 * `displayValue` property shows current value inside progress bar. It's also possible to add custom text inside:
 * @stacked-example(Progress bar value, progress-bar/progress-bar-value.component)
 *
 * Progress bar supports `width` and `background-color` transition:
 * @stacked-example(Progress bar interactive, progress-bar/progress-bar-interactive.component)
 *
 * @styles
 *
 * progress-bar-height-xlg:
 * progress-bar-height-lg:
 * progress-bar-height:
 * progress-bar-height-sm:
 * progress-bar-height-xs:
 * progress-bar-font-size-xlg:
 * progress-bar-font-size-lg:
 * progress-bar-font-size:
 * progress-bar-font-size-sm:
 * progress-bar-font-size-xs:
 * progress-bar-radius:
 * progress-bar-bg-color:
 * progress-bar-font-color:
 * progress-bar-font-weight:
 * progress-bar-default-bg-color:
 * progress-bar-primary-bg-color:
 * progress-bar-success-bg-color:
 * progress-bar-info-bg-color:
 * progress-bar-warning-bg-color:
 * progress-bar-danger-bg-color:
 */
var NbProgressBarComponent = /** @class */ (function () {
    function NbProgressBarComponent() {
        /**
         * Progress bar value in percent (0 - 100)
         * @type {number}
         * @private
         */
        this.value = 0;
        /**
         * Displays value inside progress bar
         * @param {string} val
         */
        this.displayValue = false;
    }
    __decorate$81([
        i0.Input(),
        __metadata$52("design:type", Number)
    ], NbProgressBarComponent.prototype, "value", void 0);
    __decorate$81([
        i0.Input(),
        __metadata$52("design:type", String)
    ], NbProgressBarComponent.prototype, "status", void 0);
    __decorate$81([
        i0.Input(),
        __metadata$52("design:type", String)
    ], NbProgressBarComponent.prototype, "size", void 0);
    __decorate$81([
        i0.Input(),
        __metadata$52("design:type", Boolean)
    ], NbProgressBarComponent.prototype, "displayValue", void 0);
    NbProgressBarComponent = __decorate$81([
        i0.Component({
            selector: 'nb-progress-bar',
            styles: [":host{display:block}.progress-container{overflow:hidden}.progress-value{height:100%;text-align:center;overflow:hidden} "],
            template: "\n    <div class=\"progress-container {{ size ? '' + size : '' }}\">\n      <div class=\"progress-value {{ status ? '' + status : '' }}\" [style.width.%]=\"value\">\n        <span *ngIf=\"displayValue\">{{ value }}%</span>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
        })
    ], NbProgressBarComponent);
    return NbProgressBarComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$82 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbProgressBarModule = /** @class */ (function () {
    function NbProgressBarModule() {
    }
    NbProgressBarModule = __decorate$82([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: [NbProgressBarComponent],
            exports: [NbProgressBarComponent],
        })
    ], NbProgressBarModule);
    return NbProgressBarModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$83 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$53 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Alert component.
 *
 * Basic alert example:
 * @stacked-example(Showcase, alert/alert-showcase.component)
 *
 * Alert configuration:
 *
 * ```html
 * <nb-alert status="success">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 * ### Installation
 *
 * Import `NbButtonModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbAlertModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Alert could additionally have a `close` button when `closable` property is set:
 * ```html
 * <nb-alert status="success" closable (close)="onClose()">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 *
 * Colored alerts could be simply configured by providing a `status` property:
 * @stacked-example(Colored Alert, alert/alert-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight alert highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Alert, alert/alert-accents.component)
 *
 * And `outline` property:
 * @stacked-example(Outline Alert, alert/alert-outline.component)
 *
 * @additional-example(Multiple Sizes, alert/alert-sizes.component)
 *
 * @styles
 *
 * alert-font-size:
 * alert-line-height:
 * alert-font-weight:
 * alert-fg:
 * alert-outline-fg:
 * alert-bg:
 * alert-active-bg:
 * alert-disabled-bg:
 * alert-disabled-fg:
 * alert-primary-bg:
 * alert-info-bg:
 * alert-success-bg:
 * alert-warning-bg:
 * alert-danger-bg:
 * alert-height-xxsmall:
 * alert-height-xsmall:
 * alert-height-small:
 * alert-height-medium:
 * alert-height-large:
 * alert-height-xlarge:
 * alert-height-xxlarge:
 * alert-shadow:
 * alert-border-radius:
 * alert-padding:
 * alert-closable-padding:
 * alert-button-padding:
 * alert-margin:
 */
var NbAlertComponent = /** @class */ (function () {
    function NbAlertComponent() {
        this.closableValue = false;
        /**
         * Emits when chip is removed
         * @type EventEmitter<any>
         */
        this.close = new i0.EventEmitter();
    }
    NbAlertComponent_1 = NbAlertComponent;
    Object.defineProperty(NbAlertComponent.prototype, "closable", {
        /**
         * Shows `close` icon
         */
        set: function (val) {
            this.closableValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "small", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "medium", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "large", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbAlertComponent_1.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "active", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "primary", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "info", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "success", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "warning", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "danger", {
        get: function () {
            return this.status === NbAlertComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "hasAccent", {
        get: function () {
            return this.accent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "hasStatus", {
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "primaryAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "infoAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "successAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "warningAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "dangerAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "activeAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "disabledAccent", {
        get: function () {
            return this.accent === NbAlertComponent_1.ACCENT_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "hasOutline", {
        get: function () {
            return this.outline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "primaryOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "infoOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "successOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "warningOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "dangerOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "activeOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "disabledOutline", {
        get: function () {
            return this.outline === NbAlertComponent_1.OUTLINE_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "setSize", {
        /**
         * Alert size, available sizes:
         * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "setStatus", {
        /**
         * Alert status (adds specific styles):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "setAccent", {
        /**
         * Alert accent (color of the top border):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.accent = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAlertComponent.prototype, "setOutline", {
        /**
         * Alert outline (color of the border):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.outline = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Emits the removed chip event
     */
    NbAlertComponent.prototype.onClose = function () {
        this.close.emit();
    };
    var NbAlertComponent_1;
    NbAlertComponent.SIZE_XXSMALL = 'xxsmall';
    NbAlertComponent.SIZE_XSMALL = 'xsmall';
    NbAlertComponent.SIZE_SMALL = 'small';
    NbAlertComponent.SIZE_MEDIUM = 'medium';
    NbAlertComponent.SIZE_LARGE = 'large';
    NbAlertComponent.SIZE_XLARGE = 'xlarge';
    NbAlertComponent.SIZE_XXLARGE = 'xxlarge';
    NbAlertComponent.STATUS_ACTIVE = 'active';
    NbAlertComponent.STATUS_DISABLED = 'disabled';
    NbAlertComponent.STATUS_PRIMARY = 'primary';
    NbAlertComponent.STATUS_INFO = 'info';
    NbAlertComponent.STATUS_SUCCESS = 'success';
    NbAlertComponent.STATUS_WARNING = 'warning';
    NbAlertComponent.STATUS_DANGER = 'danger';
    NbAlertComponent.ACCENT_ACTIVE = 'active';
    NbAlertComponent.ACCENT_DISABLED = 'disabled';
    NbAlertComponent.ACCENT_PRIMARY = 'primary';
    NbAlertComponent.ACCENT_INFO = 'info';
    NbAlertComponent.ACCENT_SUCCESS = 'success';
    NbAlertComponent.ACCENT_WARNING = 'warning';
    NbAlertComponent.ACCENT_DANGER = 'danger';
    NbAlertComponent.OUTLINE_ACTIVE = 'active';
    NbAlertComponent.OUTLINE_DISABLED = 'disabled';
    NbAlertComponent.OUTLINE_PRIMARY = 'primary';
    NbAlertComponent.OUTLINE_INFO = 'info';
    NbAlertComponent.OUTLINE_SUCCESS = 'success';
    NbAlertComponent.OUTLINE_WARNING = 'warning';
    NbAlertComponent.OUTLINE_DANGER = 'danger';
    __decorate$83([
        i0.HostBinding('class.closable'),
        __metadata$53("design:type", Boolean)
    ], NbAlertComponent.prototype, "closableValue", void 0);
    __decorate$83([
        i0.Input(),
        __metadata$53("design:type", Boolean),
        __metadata$53("design:paramtypes", [Boolean])
    ], NbAlertComponent.prototype, "closable", null);
    __decorate$83([
        i0.HostBinding('class.xxsmall-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "xxsmall", null);
    __decorate$83([
        i0.HostBinding('class.xsmall-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "xsmall", null);
    __decorate$83([
        i0.HostBinding('class.small-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "small", null);
    __decorate$83([
        i0.HostBinding('class.medium-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "medium", null);
    __decorate$83([
        i0.HostBinding('class.large-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "large", null);
    __decorate$83([
        i0.HostBinding('class.xlarge-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "xlarge", null);
    __decorate$83([
        i0.HostBinding('class.xxlarge-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "xxlarge", null);
    __decorate$83([
        i0.HostBinding('class.active-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "active", null);
    __decorate$83([
        i0.HostBinding('class.disabled-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "disabled", null);
    __decorate$83([
        i0.HostBinding('class.primary-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "primary", null);
    __decorate$83([
        i0.HostBinding('class.info-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "info", null);
    __decorate$83([
        i0.HostBinding('class.success-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "success", null);
    __decorate$83([
        i0.HostBinding('class.warning-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "warning", null);
    __decorate$83([
        i0.HostBinding('class.danger-alert'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "danger", null);
    __decorate$83([
        i0.HostBinding('class.accent'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "hasAccent", null);
    __decorate$83([
        i0.HostBinding('class.status'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "hasStatus", null);
    __decorate$83([
        i0.HostBinding('class.accent-primary'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "primaryAccent", null);
    __decorate$83([
        i0.HostBinding('class.accent-info'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "infoAccent", null);
    __decorate$83([
        i0.HostBinding('class.accent-success'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "successAccent", null);
    __decorate$83([
        i0.HostBinding('class.accent-warning'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "warningAccent", null);
    __decorate$83([
        i0.HostBinding('class.accent-danger'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "dangerAccent", null);
    __decorate$83([
        i0.HostBinding('class.accent-active'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "activeAccent", null);
    __decorate$83([
        i0.HostBinding('class.accent-disabled'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "disabledAccent", null);
    __decorate$83([
        i0.HostBinding('class.outline'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "hasOutline", null);
    __decorate$83([
        i0.HostBinding('class.outline-primary'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "primaryOutline", null);
    __decorate$83([
        i0.HostBinding('class.outline-info'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "infoOutline", null);
    __decorate$83([
        i0.HostBinding('class.outline-success'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "successOutline", null);
    __decorate$83([
        i0.HostBinding('class.outline-warning'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "warningOutline", null);
    __decorate$83([
        i0.HostBinding('class.outline-danger'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "dangerOutline", null);
    __decorate$83([
        i0.HostBinding('class.outline-active'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "activeOutline", null);
    __decorate$83([
        i0.HostBinding('class.outline-disabled'),
        __metadata$53("design:type", Object),
        __metadata$53("design:paramtypes", [])
    ], NbAlertComponent.prototype, "disabledOutline", null);
    __decorate$83([
        i0.Input('size'),
        __metadata$53("design:type", String),
        __metadata$53("design:paramtypes", [String])
    ], NbAlertComponent.prototype, "setSize", null);
    __decorate$83([
        i0.Input('status'),
        __metadata$53("design:type", String),
        __metadata$53("design:paramtypes", [String])
    ], NbAlertComponent.prototype, "setStatus", null);
    __decorate$83([
        i0.Input('accent'),
        __metadata$53("design:type", String),
        __metadata$53("design:paramtypes", [String])
    ], NbAlertComponent.prototype, "setAccent", null);
    __decorate$83([
        i0.Input('outline'),
        __metadata$53("design:type", String),
        __metadata$53("design:paramtypes", [String])
    ], NbAlertComponent.prototype, "setOutline", null);
    __decorate$83([
        i0.Output(),
        __metadata$53("design:type", Object)
    ], NbAlertComponent.prototype, "close", void 0);
    NbAlertComponent = NbAlertComponent_1 = __decorate$83([
        i0.Component({
            selector: 'nb-alert',
            styles: [":host{display:flex;flex-direction:column;position:relative}.close{position:absolute;top:0;right:0;color:inherit;background-color:transparent;border:0;-webkit-appearance:none} "],
            template: "\n    <button *ngIf=\"closableValue\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <ng-content></ng-content>\n  ",
        })
    ], NbAlertComponent);
    return NbAlertComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$84 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbAlertModule = /** @class */ (function () {
    function NbAlertModule() {
    }
    NbAlertModule = __decorate$84([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: [
                NbAlertComponent,
            ],
            exports: [
                NbAlertComponent,
            ],
        })
    ], NbAlertModule);
    return NbAlertModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$86 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$55 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Chat message component.
 *
 * Multiple message types are available through a `type` property, such as
 * - text - simple text message
 * - file - could be a file preview or a file icon
 * if multiple files are provided grouped files are shown
 * - quote - quotes a message with specific quote styles
 * - map - shows a google map picture by provided [latitude] and [longitude] properties
 *
 * @stacked-example(Available Types, chat/chat-message-types-showcase.component)
 *
 * Message with attached files:
 * ```html
 * <nb-chat-message
 *   type="file"
 *   [files]="[ { url: '...' } ]"
 *   message="Hello world!">
 * </nb-chat-message>
 * ```
 *
 * Map message:
 * ```html
 * <nb-chat-message
 *   type="map"
 *   [latitude]="53.914"
 *   [longitude]="27.59"
 *   message="Here I am">
 * </nb-chat-message>
 * ```
 *
 * @styles
 *
 * chat-message-fg:
 * chat-message-bg:
 * chat-message-reply-bg:
 * chat-message-reply-fg:
 * chat-message-avatar-bg:
 * chat-message-sender-fg:
 * chat-message-quote-fg:
 * chat-message-quote-bg:
 * chat-message-file-fg:
 * chat-message-file-bg:
 */
var NbChatMessageComponent = /** @class */ (function () {
    function NbChatMessageComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.replyValue = false;
    }
    Object.defineProperty(NbChatMessageComponent.prototype, "flyInOut", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatMessageComponent.prototype, "notReply", {
        get: function () {
            return !this.replyValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatMessageComponent.prototype, "reply", {
        /**
         * Determines if a message is a reply
         */
        set: function (val) {
            this.replyValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatMessageComponent.prototype, "avatar", {
        /**
         * Message send avatar
         * @type {string}
         */
        set: function (value) {
            this.avatarStyle = value ? this.domSanitizer.bypassSecurityTrustStyle("url(" + value + ")") : null;
        },
        enumerable: true,
        configurable: true
    });
    NbChatMessageComponent.prototype.getInitials = function () {
        if (this.sender) {
            var names = this.sender.split(' ');
            return names.map(function (n) { return n.charAt(0); }).splice(0, 2).join('').toUpperCase();
        }
        return '';
    };
    __decorate$86([
        i0.HostBinding('@flyInOut'),
        __metadata$55("design:type", Object),
        __metadata$55("design:paramtypes", [])
    ], NbChatMessageComponent.prototype, "flyInOut", null);
    __decorate$86([
        i0.HostBinding('class.reply'),
        __metadata$55("design:type", Boolean)
    ], NbChatMessageComponent.prototype, "replyValue", void 0);
    __decorate$86([
        i0.HostBinding('class.not-reply'),
        __metadata$55("design:type", Object),
        __metadata$55("design:paramtypes", [])
    ], NbChatMessageComponent.prototype, "notReply", null);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", Boolean),
        __metadata$55("design:paramtypes", [Boolean])
    ], NbChatMessageComponent.prototype, "reply", null);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", String)
    ], NbChatMessageComponent.prototype, "message", void 0);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", String)
    ], NbChatMessageComponent.prototype, "sender", void 0);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", Date)
    ], NbChatMessageComponent.prototype, "date", void 0);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", Array)
    ], NbChatMessageComponent.prototype, "files", void 0);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", String)
    ], NbChatMessageComponent.prototype, "quote", void 0);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", Number)
    ], NbChatMessageComponent.prototype, "latitude", void 0);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", Number)
    ], NbChatMessageComponent.prototype, "longitude", void 0);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", String),
        __metadata$55("design:paramtypes", [String])
    ], NbChatMessageComponent.prototype, "avatar", null);
    __decorate$86([
        i0.Input(),
        __metadata$55("design:type", String)
    ], NbChatMessageComponent.prototype, "type", void 0);
    NbChatMessageComponent = __decorate$86([
        i0.Component({
            selector: 'nb-chat-message',
            template: "\n    <div class=\"avatar\" [style.background-image]=\"avatarStyle\" *ngIf=\"!replyValue\">\n      <ng-container *ngIf=\"!avatarStyle\">\n        {{ getInitials() }}\n      </ng-container>\n    </div>\n    <div class=\"message\">\n      <ng-container [ngSwitch]=\"type\">\n\n        <nb-chat-message-file *ngSwitchCase=\"'file'\"\n                              [sender]=\"sender\" [date]=\"date\" [message]=\"message\" [files]=\"files\">\n        </nb-chat-message-file>\n\n        <nb-chat-message-quote *ngSwitchCase=\"'quote'\"\n                              [sender]=\"sender\" [date]=\"date\" [message]=\"message\" [quote]=\"quote\">\n        </nb-chat-message-quote>\n\n        <nb-chat-message-map *ngSwitchCase=\"'map'\"\n                              [sender]=\"sender\" [date]=\"date\"\n                              [message]=\"message\" [latitude]=\"latitude\" [longitude]=\"longitude\">\n        </nb-chat-message-map>\n\n        <nb-chat-message-text *ngSwitchDefault\n                              [sender]=\"sender\" [date]=\"date\" [message]=\"message\">\n        </nb-chat-message-text>\n      </ng-container>\n    </div>\n  ",
            animations: [
                _angular_animations.trigger('flyInOut', [
                    _angular_animations.state('in', _angular_animations.style({ transform: 'translateX(0)' })),
                    _angular_animations.transition('void => *', [
                        _angular_animations.style({ transform: 'translateX(-100%)' }),
                        _angular_animations.animate(80),
                    ]),
                    _angular_animations.transition('* => void', [
                        _angular_animations.animate(80, _angular_animations.style({ transform: 'translateX(100%)' })),
                    ]),
                ]),
            ],
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __metadata$55("design:paramtypes", [_angular_platformBrowser.DomSanitizer])
    ], NbChatMessageComponent);
    return NbChatMessageComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$85 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$54 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Conversational UI collection - a set of components for chat-like UI construction.
 *
 * Main features:
 * - different message types support (text, image, file, file group, map, etc)
 * - drag & drop for images and files with preview
 * - different UI styles
 * - custom action buttons (coming soon)
 *
 * Here's a complete example build in a bot-like app. Type `help` to be able to receive different message types.
 * Enjoy the conversation and the beautiful UI.
 * @stacked-example(Showcase, chat/chat-showcase.component)
 *
 * Basic chat configuration and usage:
 * ```ts
 * <nb-chat title="Nebular Conversational UI">
 *       <nb-chat-message *ngFor="let msg of messages"
 *                        [type]="msg.type"
 *                        [message]="msg.text"
 *                        [reply]="msg.reply"
 *                        [sender]="msg.user.name"
 *                        [date]="msg.date"
 *                        [files]="msg.files"
 *                        [quote]="msg.quote"
 *                        [latitude]="msg.latitude"
 *                        [longitude]="msg.longitude"
 *                        [avatar]="msg.user.avatar">
 *   </nb-chat-message>
 *
 *   <nb-chat-form (send)="sendMessage($event)" [dropFiles]="true">
 *   </nb-chat-form>
 * </nb-chat>
 * ```
 * ### Installation
 *
 * Import `NbChatModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbChatModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * If you need to provide an API key for a `map` message type (which is required by Google Maps)
 * you may use `NbChatModule.forRoot({ ... })` call if this is a global app configuration
 * or `NbChatModule.forChild({ ... })` for a feature module configuration:
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
 *   ],
 * })
 * export class AppModule { }
 *
 * ### Usage
 *
 * There are three main components:
 * ```ts
 * <nb-chat>
 * </nb-chat> // chat container
 *
 * <nb-chat-form>
 * </nb-chat-form> // chat form with drag&drop files feature
 *
 * <nb-chat-message>
 * </nb-chat-message> // chat message, available multiple types
 * ```
 *
 * Two users conversation showcase:
 * @stacked-example(Conversation, chat/chat-conversation-showcase.component)
 *
 * Chat UI is also available in different colors by specifying a `[status]` input:
 *
 * @stacked-example(Colored Chat, chat/chat-colors.component)
 *
 * Also it is possible to configure sizes through `[size]` input:
 *
 * @stacked-example(Chat Sizes, chat/chat-sizes.component)
 *
 * @styles
 *
 * chat-font-size:
 * chat-fg:
 * chat-bg:
 * chat-border-radius:
 * chat-fg-text:
 * chat-height-xxsmall:
 * chat-height-xsmall:
 * chat-height-small:
 * chat-height-medium:
 * chat-height-large:
 * chat-height-xlarge:
 * chat-height-xxlarge:
 * chat-border:
 * chat-padding:
 * chat-shadow:
 * chat-separator:
 * chat-active-bg:
 * chat-disabled-bg:
 * chat-disabled-fg:
 * chat-primary-bg:
 * chat-info-bg:
 * chat-success-bg:
 * chat-warning-bg:
 * chat-danger-bg:
 */
var NbChatComponent = /** @class */ (function () {
    function NbChatComponent() {
        this.scrollBottom = true;
    }
    NbChatComponent_1 = NbChatComponent;
    Object.defineProperty(NbChatComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "small", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "medium", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "large", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "active", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "primary", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "info", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "success", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "warning", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "danger", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "hasAccent", {
        get: function () {
            return this.accent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "setSize", {
        /**
         * Chat size, available sizes:
         * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "setStatus", {
        /**
         * Chat status color (adds specific styles):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "setScrollBottom", {
        /**
         * Scroll chat to the bottom of the list when a new message arrives
         * @param {boolean} val
         */
        set: function (val) {
            this.scrollBottom = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbChatComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.messages.changes
            .subscribe(function (messages) {
            _this.messages = messages;
            _this.updateView();
        });
        this.updateView();
    };
    NbChatComponent.prototype.updateView = function () {
        if (this.scrollBottom) {
            this.scrollListBottom();
        }
    };
    NbChatComponent.prototype.scrollListBottom = function () {
        this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
    };
    var NbChatComponent_1;
    NbChatComponent.SIZE_XXSMALL = 'xxsmall';
    NbChatComponent.SIZE_XSMALL = 'xsmall';
    NbChatComponent.SIZE_SMALL = 'small';
    NbChatComponent.SIZE_MEDIUM = 'medium';
    NbChatComponent.SIZE_LARGE = 'large';
    NbChatComponent.SIZE_XLARGE = 'xlarge';
    NbChatComponent.SIZE_XXLARGE = 'xxlarge';
    NbChatComponent.STATUS_ACTIVE = 'active';
    NbChatComponent.STATUS_DISABLED = 'disabled';
    NbChatComponent.STATUS_PRIMARY = 'primary';
    NbChatComponent.STATUS_INFO = 'info';
    NbChatComponent.STATUS_SUCCESS = 'success';
    NbChatComponent.STATUS_WARNING = 'warning';
    NbChatComponent.STATUS_DANGER = 'danger';
    __decorate$85([
        i0.Input(),
        __metadata$54("design:type", String)
    ], NbChatComponent.prototype, "title", void 0);
    __decorate$85([
        i0.HostBinding('class.xxsmall-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "xxsmall", null);
    __decorate$85([
        i0.HostBinding('class.xsmall-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "xsmall", null);
    __decorate$85([
        i0.HostBinding('class.small-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "small", null);
    __decorate$85([
        i0.HostBinding('class.medium-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "medium", null);
    __decorate$85([
        i0.HostBinding('class.large-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "large", null);
    __decorate$85([
        i0.HostBinding('class.xlarge-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "xlarge", null);
    __decorate$85([
        i0.HostBinding('class.xxlarge-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "xxlarge", null);
    __decorate$85([
        i0.HostBinding('class.active-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "active", null);
    __decorate$85([
        i0.HostBinding('class.disabled-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "disabled", null);
    __decorate$85([
        i0.HostBinding('class.primary-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "primary", null);
    __decorate$85([
        i0.HostBinding('class.info-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "info", null);
    __decorate$85([
        i0.HostBinding('class.success-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "success", null);
    __decorate$85([
        i0.HostBinding('class.warning-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "warning", null);
    __decorate$85([
        i0.HostBinding('class.danger-chat'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "danger", null);
    __decorate$85([
        i0.HostBinding('class.accent'),
        __metadata$54("design:type", Object),
        __metadata$54("design:paramtypes", [])
    ], NbChatComponent.prototype, "hasAccent", null);
    __decorate$85([
        i0.Input('size'),
        __metadata$54("design:type", String),
        __metadata$54("design:paramtypes", [String])
    ], NbChatComponent.prototype, "setSize", null);
    __decorate$85([
        i0.Input('status'),
        __metadata$54("design:type", String),
        __metadata$54("design:paramtypes", [String])
    ], NbChatComponent.prototype, "setStatus", null);
    __decorate$85([
        i0.Input('scrollBottom'),
        __metadata$54("design:type", Boolean),
        __metadata$54("design:paramtypes", [Boolean])
    ], NbChatComponent.prototype, "setScrollBottom", null);
    __decorate$85([
        i0.ViewChild('scrollable'),
        __metadata$54("design:type", i0.ElementRef)
    ], NbChatComponent.prototype, "scrollable", void 0);
    __decorate$85([
        i0.ContentChildren(NbChatMessageComponent),
        __metadata$54("design:type", i0.QueryList)
    ], NbChatComponent.prototype, "messages", void 0);
    NbChatComponent = NbChatComponent_1 = __decorate$85([
        i0.Component({
            selector: 'nb-chat',
            styles: [":host{display:flex;flex-direction:column;position:relative;height:100%} "],
            template: "\n    <div class=\"header\">{{ title }}</div>\n    <div class=\"scrollable\" #scrollable>\n      <div class=\"messages\">\n        <ng-content select=\"nb-chat-message\"></ng-content>\n        <p class=\"no-messages\" *ngIf=\"!messages?.length\">No messages yet.</p>\n      </div>\n    </div>\n    <div class=\"form\">\n      <ng-content select=\"nb-chat-form\"></ng-content>\n    </div>\n  ",
        })
    ], NbChatComponent);
    return NbChatComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbChatOptions = /** @class */ (function () {
    function NbChatOptions() {
    }
    return NbChatOptions;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$87 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$56 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Chat message component.
 *
 * @styles
 *
 */
var NbChatMessageMapComponent = /** @class */ (function () {
    function NbChatMessageMapComponent(options) {
        this.mapKey = options.messageGoogleMapKey;
    }
    Object.defineProperty(NbChatMessageMapComponent.prototype, "file", {
        get: function () {
            return {
                // tslint:disable-next-line
                url: "https://maps.googleapis.com/maps/api/staticmap?center=" + this.latitude + "," + this.longitude + "&zoom=12&size=400x400&key=" + this.mapKey,
                type: 'image/png',
                icon: 'nb-location',
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate$87([
        i0.Input(),
        __metadata$56("design:type", String)
    ], NbChatMessageMapComponent.prototype, "message", void 0);
    __decorate$87([
        i0.Input(),
        __metadata$56("design:type", String)
    ], NbChatMessageMapComponent.prototype, "sender", void 0);
    __decorate$87([
        i0.Input(),
        __metadata$56("design:type", Date)
    ], NbChatMessageMapComponent.prototype, "date", void 0);
    __decorate$87([
        i0.Input(),
        __metadata$56("design:type", Number)
    ], NbChatMessageMapComponent.prototype, "latitude", void 0);
    __decorate$87([
        i0.Input(),
        __metadata$56("design:type", Number)
    ], NbChatMessageMapComponent.prototype, "longitude", void 0);
    NbChatMessageMapComponent = __decorate$87([
        i0.Component({
            selector: 'nb-chat-message-map',
            template: "\n    <nb-chat-message-file [files]=\"[file]\" [message]=\"message\" [sender]=\"sender\" [date]=\"date\"></nb-chat-message-file>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __metadata$56("design:paramtypes", [NbChatOptions])
    ], NbChatMessageMapComponent);
    return NbChatMessageMapComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __assign$1 = (this && this.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var __decorate$88 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$57 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Chat message component.
 *
 * @styles
 *
 */
var NbChatMessageFileComponent = /** @class */ (function () {
    function NbChatMessageFileComponent(cd, domSanitizer) {
        this.cd = cd;
        this.domSanitizer = domSanitizer;
    }
    Object.defineProperty(NbChatMessageFileComponent.prototype, "files", {
        /**
         * Message file path
         * @type {Date}
         */
        set: function (files) {
            var _this = this;
            this.readyFiles = (files || []).map(function (file) {
                var isImage = _this.isImage(file);
                return __assign$1({}, file, { urlStyle: isImage && _this.domSanitizer.bypassSecurityTrustStyle("url(" + file.url + ")"), isImage: isImage });
            });
            this.cd.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    NbChatMessageFileComponent.prototype.isImage = function (file) {
        return ['image/png', 'image/jpeg', 'image/gif'].includes(file.type);
    };
    __decorate$88([
        i0.Input(),
        __metadata$57("design:type", String)
    ], NbChatMessageFileComponent.prototype, "message", void 0);
    __decorate$88([
        i0.Input(),
        __metadata$57("design:type", String)
    ], NbChatMessageFileComponent.prototype, "sender", void 0);
    __decorate$88([
        i0.Input(),
        __metadata$57("design:type", Date)
    ], NbChatMessageFileComponent.prototype, "date", void 0);
    __decorate$88([
        i0.Input(),
        __metadata$57("design:type", Array),
        __metadata$57("design:paramtypes", [Array])
    ], NbChatMessageFileComponent.prototype, "files", null);
    NbChatMessageFileComponent = __decorate$88([
        i0.Component({
            selector: 'nb-chat-message-file',
            template: "\n    <nb-chat-message-text [sender]=\"sender\" [date]=\"date\" [message]=\"message\">\n      {{ message }}\n    </nb-chat-message-text>\n\n    <ng-container *ngIf=\"readyFiles?.length > 1\">\n      <div class=\"message-content-group\">\n        <a *ngFor=\"let file of readyFiles\" [href]=\"file.url\" target=\"_blank\">\n          <span [class]=\"file.icon\" *ngIf=\"!file.urlStyle\"></span>\n          <div *ngIf=\"file.isImage\" [style.background-image]=\"file.urlStyle\"></div>\n        </a>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"readyFiles?.length === 1\">\n      <a [href]=\"readyFiles[0].url\" target=\"_blank\">\n        <span [class]=\"readyFiles[0].icon\"  *ngIf=\"!readyFiles[0].urlStyle\"></span>\n        <div *ngIf=\"readyFiles[0].isImage\" [style.background-image]=\"readyFiles[0].urlStyle\"></div>\n      </a>\n    </ng-container>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __metadata$57("design:paramtypes", [i0.ChangeDetectorRef, _angular_platformBrowser.DomSanitizer])
    ], NbChatMessageFileComponent);
    return NbChatMessageFileComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$89 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$58 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Chat message component.
 *
 * @styles
 *
 */
var NbChatMessageQuoteComponent = /** @class */ (function () {
    function NbChatMessageQuoteComponent() {
    }
    __decorate$89([
        i0.Input(),
        __metadata$58("design:type", String)
    ], NbChatMessageQuoteComponent.prototype, "message", void 0);
    __decorate$89([
        i0.Input(),
        __metadata$58("design:type", String)
    ], NbChatMessageQuoteComponent.prototype, "sender", void 0);
    __decorate$89([
        i0.Input(),
        __metadata$58("design:type", Date)
    ], NbChatMessageQuoteComponent.prototype, "date", void 0);
    __decorate$89([
        i0.Input(),
        __metadata$58("design:type", String)
    ], NbChatMessageQuoteComponent.prototype, "quote", void 0);
    NbChatMessageQuoteComponent = __decorate$89([
        i0.Component({
            selector: 'nb-chat-message-quote',
            template: "\n    <p class=\"sender\" *ngIf=\"sender || date\">{{ sender }} <time>{{ date  | date:'shortTime' }}</time></p>\n    <p class=\"quote\">\n      {{ quote }}\n    </p>\n    <nb-chat-message-text [message]=\"message\">\n      {{ message }}\n    </nb-chat-message-text>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        })
    ], NbChatMessageQuoteComponent);
    return NbChatMessageQuoteComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$90 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$59 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Chat message component.
 *
 * @styles
 *
 */
var NbChatMessageTextComponent = /** @class */ (function () {
    function NbChatMessageTextComponent() {
    }
    __decorate$90([
        i0.Input(),
        __metadata$59("design:type", String)
    ], NbChatMessageTextComponent.prototype, "sender", void 0);
    __decorate$90([
        i0.Input(),
        __metadata$59("design:type", String)
    ], NbChatMessageTextComponent.prototype, "message", void 0);
    __decorate$90([
        i0.Input(),
        __metadata$59("design:type", Date)
    ], NbChatMessageTextComponent.prototype, "date", void 0);
    NbChatMessageTextComponent = __decorate$90([
        i0.Component({
            selector: 'nb-chat-message-text',
            template: "\n    <p class=\"sender\" *ngIf=\"sender || date\">{{ sender }} <time>{{ date  | date:'shortTime' }}</time></p>\n    <p class=\"text\" *ngIf=\"message\">{{ message }}</p>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        })
    ], NbChatMessageTextComponent);
    return NbChatMessageTextComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$91 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$60 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Chat form component.
 *
 * Show a message form with a send message button.
 *
 * ```ts
 * <nb-chat-form showButton="true" buttonIcon="nb-send">
 * </nb-chat-form>
 * ```
 *
 * When `[dropFiles]="true"` handles files drag&drop with a file preview.
 *
 * Drag & drop available for files and images:
 * @stacked-example(Drag & Drop Chat, chat/chat-drop.component)
 *
 * New message could be tracked outside by using `(send)` output.
 *
 * ```ts
 * <nb-chat-form (send)="onNewMessage($event)">
 * </nb-chat-form>
 *
 * // ...
 *
 * onNewMessage({ message: string, files: any[] }) {
 *   this.service.sendToServer(message, files);
 * }
 * ```
 *
 * @styles
 *
 * chat-form-bg:
 * chat-form-fg:
 * chat-form-border:
 * chat-form-active-border:
 *
 */
var NbChatFormComponent = /** @class */ (function () {
    function NbChatFormComponent(cd, domSanitizer) {
        this.cd = cd;
        this.domSanitizer = domSanitizer;
        this.droppedFiles = [];
        this.imgDropTypes = ['image/png', 'image/jpeg', 'image/gif'];
        /**
         * Predefined message text
         * @type {string}
         */
        this.message = '';
        /**
         * Send button title
         * @type {string}
         */
        this.buttonTitle = '';
        /**
         * Send button icon, shown if `buttonTitle` is empty
         * @type {string}
         */
        this.buttonIcon = 'nb-paper-plane';
        /**
         * Show send button
         * @type {boolean}
         */
        this.showButton = true;
        /**
         * Show send button
         * @type {boolean}
         */
        this.dropFiles = false;
        /**
         *
         * @type {EventEmitter<{ message: string, files: File[] }>}
         */
        this.send = new i0.EventEmitter();
        this.fileOver = false;
    }
    NbChatFormComponent.prototype.onDrop = function (event) {
        var _this = this;
        if (this.dropFiles) {
            event.preventDefault();
            event.stopPropagation();
            this.fileOver = false;
            if (event.dataTransfer && event.dataTransfer.files) {
                var _loop_1 = function (file) {
                    var res = file;
                    if (this_1.imgDropTypes.includes(file.type)) {
                        var fr = new FileReader();
                        fr.onload = function (e) {
                            res.src = e.target.result;
                            res.urlStyle = _this.domSanitizer.bypassSecurityTrustStyle("url(" + res.src + ")");
                            _this.cd.detectChanges();
                        };
                        fr.readAsDataURL(file);
                    }
                    this_1.droppedFiles.push(res);
                };
                var this_1 = this;
                // tslint:disable-next-line
                for (var _i = 0, _a = event.dataTransfer.files; _i < _a.length; _i++) {
                    var file = _a[_i];
                    _loop_1(file);
                }
            }
        }
    };
    NbChatFormComponent.prototype.removeFile = function (file) {
        var index = this.droppedFiles.indexOf(file);
        if (index >= 0) {
            this.droppedFiles.splice(index, 1);
        }
    };
    NbChatFormComponent.prototype.onDragOver = function () {
        if (this.dropFiles) {
            this.fileOver = true;
        }
    };
    NbChatFormComponent.prototype.onDragLeave = function () {
        if (this.dropFiles) {
            this.fileOver = false;
        }
    };
    NbChatFormComponent.prototype.sendMessage = function () {
        if (this.droppedFiles.length || String(this.message).trim().length) {
            this.send.emit({ message: this.message, files: this.droppedFiles });
            this.message = '';
            this.droppedFiles = [];
        }
    };
    __decorate$91([
        i0.Input(),
        __metadata$60("design:type", String)
    ], NbChatFormComponent.prototype, "message", void 0);
    __decorate$91([
        i0.Input(),
        __metadata$60("design:type", String)
    ], NbChatFormComponent.prototype, "buttonTitle", void 0);
    __decorate$91([
        i0.Input(),
        __metadata$60("design:type", String)
    ], NbChatFormComponent.prototype, "buttonIcon", void 0);
    __decorate$91([
        i0.Input(),
        __metadata$60("design:type", Boolean)
    ], NbChatFormComponent.prototype, "showButton", void 0);
    __decorate$91([
        i0.Input(),
        __metadata$60("design:type", Boolean)
    ], NbChatFormComponent.prototype, "dropFiles", void 0);
    __decorate$91([
        i0.Output(),
        __metadata$60("design:type", Object)
    ], NbChatFormComponent.prototype, "send", void 0);
    __decorate$91([
        i0.HostBinding('class.file-over'),
        __metadata$60("design:type", Object)
    ], NbChatFormComponent.prototype, "fileOver", void 0);
    __decorate$91([
        i0.HostListener('drop', ['$event']),
        __metadata$60("design:type", Function),
        __metadata$60("design:paramtypes", [Object]),
        __metadata$60("design:returntype", void 0)
    ], NbChatFormComponent.prototype, "onDrop", null);
    __decorate$91([
        i0.HostListener('dragover'),
        __metadata$60("design:type", Function),
        __metadata$60("design:paramtypes", []),
        __metadata$60("design:returntype", void 0)
    ], NbChatFormComponent.prototype, "onDragOver", null);
    __decorate$91([
        i0.HostListener('dragleave'),
        __metadata$60("design:type", Function),
        __metadata$60("design:paramtypes", []),
        __metadata$60("design:returntype", void 0)
    ], NbChatFormComponent.prototype, "onDragLeave", null);
    NbChatFormComponent = __decorate$91([
        i0.Component({
            selector: 'nb-chat-form',
            template: "\n    <div class=\"dropped-files\" *ngIf=\"droppedFiles?.length\">\n      <ng-container *ngFor=\"let file of droppedFiles\">\n        <div *ngIf=\"file.urlStyle\" [style.background-image]=\"file.urlStyle\">\n          <span class=\"remove\" (click)=\"removeFile(file)\">&times;</span>\n        </div>\n        <div *ngIf=\"!file.urlStyle\" class=\"nb-compose\">\n          <span class=\"remove\" (click)=\"removeFile(file)\">&times;</span>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"message-row\">\n      <input [(ngModel)]=\"message\"\n             [class.with-button]=\"showButton\"\n             type=\"text\"\n             placeholder=\"{{ fileOver ? 'Drop file to send' : 'Type a message' }}\"\n             (keyup.enter)=\"sendMessage()\">\n      <button *ngIf=\"showButton\" class=\"btn\" [class.with-icon]=\"!buttonTitle\" (click)=\"sendMessage()\">\n        {{ buttonTitle }}<span *ngIf=\"!buttonTitle\" [class]=\"buttonIcon\"></span>\n      </button>\n    </div>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __metadata$60("design:paramtypes", [i0.ChangeDetectorRef, _angular_platformBrowser.DomSanitizer])
    ], NbChatFormComponent);
    return NbChatFormComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$92 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_CHAT_COMPONENTS = [
    NbChatComponent,
    NbChatMessageComponent,
    NbChatFormComponent,
    NbChatMessageTextComponent,
    NbChatMessageFileComponent,
    NbChatMessageQuoteComponent,
    NbChatMessageMapComponent,
];
var NbChatModule = /** @class */ (function () {
    function NbChatModule() {
    }
    NbChatModule_1 = NbChatModule;
    NbChatModule.forRoot = function (options) {
        return {
            ngModule: NbChatModule_1,
            providers: [
                { provide: NbChatOptions, useValue: options },
            ],
        };
    };
    NbChatModule.forChild = function (options) {
        return {
            ngModule: NbChatModule_1,
            providers: [
                { provide: NbChatOptions, useValue: options },
            ],
        };
    };
    var NbChatModule_1;
    NbChatModule = NbChatModule_1 = __decorate$92([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: NB_CHAT_COMPONENTS.slice(),
            exports: NB_CHAT_COMPONENTS.slice(),
        })
    ], NbChatModule);
    return NbChatModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$93 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$61 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Styled spinner component
 */
var NbSpinnerComponent = /** @class */ (function () {
    function NbSpinnerComponent() {
        this.size = NbSpinnerComponent_1.SIZE_MEDIUM;
        this.status = NbSpinnerComponent_1.STATUS_ACTIVE;
        /**
         * Loading text that is shown near the icon
         * @type string
         */
        this.message = 'Loading...';
    }
    NbSpinnerComponent_1 = NbSpinnerComponent;
    Object.defineProperty(NbSpinnerComponent.prototype, "setSize", {
        /**
         * Spiiner size, available sizes:
         * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "setStatus", {
        /**
         * Spiiner status (adds specific styles):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "small", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "medium", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "large", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbSpinnerComponent_1.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "active", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "primary", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "info", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "success", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "warning", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "danger", {
        get: function () {
            return this.status === NbSpinnerComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    var NbSpinnerComponent_1;
    NbSpinnerComponent.SIZE_XXSMALL = 'xxsmall';
    NbSpinnerComponent.SIZE_XSMALL = 'xsmall';
    NbSpinnerComponent.SIZE_SMALL = 'small';
    NbSpinnerComponent.SIZE_MEDIUM = 'medium';
    NbSpinnerComponent.SIZE_LARGE = 'large';
    NbSpinnerComponent.SIZE_XLARGE = 'xlarge';
    NbSpinnerComponent.SIZE_XXLARGE = 'xxlarge';
    NbSpinnerComponent.STATUS_ACTIVE = 'active';
    NbSpinnerComponent.STATUS_DISABLED = 'disabled';
    NbSpinnerComponent.STATUS_PRIMARY = 'primary';
    NbSpinnerComponent.STATUS_INFO = 'info';
    NbSpinnerComponent.STATUS_SUCCESS = 'success';
    NbSpinnerComponent.STATUS_WARNING = 'warning';
    NbSpinnerComponent.STATUS_DANGER = 'danger';
    __decorate$93([
        i0.Input(),
        __metadata$61("design:type", String)
    ], NbSpinnerComponent.prototype, "message", void 0);
    __decorate$93([
        i0.Input('size'),
        __metadata$61("design:type", String),
        __metadata$61("design:paramtypes", [String])
    ], NbSpinnerComponent.prototype, "setSize", null);
    __decorate$93([
        i0.Input('status'),
        __metadata$61("design:type", String),
        __metadata$61("design:paramtypes", [String])
    ], NbSpinnerComponent.prototype, "setStatus", null);
    __decorate$93([
        i0.HostBinding('class.xxsmall-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "xxsmall", null);
    __decorate$93([
        i0.HostBinding('class.xsmall-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "xsmall", null);
    __decorate$93([
        i0.HostBinding('class.small-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "small", null);
    __decorate$93([
        i0.HostBinding('class.medium-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "medium", null);
    __decorate$93([
        i0.HostBinding('class.large-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "large", null);
    __decorate$93([
        i0.HostBinding('class.xlarge-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "xlarge", null);
    __decorate$93([
        i0.HostBinding('class.xxlarge-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "xxlarge", null);
    __decorate$93([
        i0.HostBinding('class.active-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "active", null);
    __decorate$93([
        i0.HostBinding('class.disabled-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "disabled", null);
    __decorate$93([
        i0.HostBinding('class.primary-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "primary", null);
    __decorate$93([
        i0.HostBinding('class.info-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "info", null);
    __decorate$93([
        i0.HostBinding('class.success-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "success", null);
    __decorate$93([
        i0.HostBinding('class.warning-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "warning", null);
    __decorate$93([
        i0.HostBinding('class.danger-spinner'),
        __metadata$61("design:type", Object),
        __metadata$61("design:paramtypes", [])
    ], NbSpinnerComponent.prototype, "danger", null);
    NbSpinnerComponent = NbSpinnerComponent_1 = __decorate$93([
        i0.Component({
            selector: 'nb-spinner',
            template: "\n    <span class=\"spin-circle\"></span>\n    <span class=\"message\" *ngIf=\"message\">{{ message }}</span>\n  ",
            styles: [":host{opacity:1;position:absolute;border-radius:inherit;top:0;right:0;left:0;bottom:0;overflow:hidden;z-index:9999;display:flex;justify-content:center;align-items:center;visibility:visible}:host .spin-circle{animation:spin 0.8s infinite linear;border-radius:50%;border-style:solid;border-width:0.125em;width:1em;height:1em}:host .message{margin-left:0.5rem;line-height:1rem;font-size:1rem} "],
        })
    ], NbSpinnerComponent);
    return NbSpinnerComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$94 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$62 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Styled spinner directive
 *
 * @stacked-example(Spinner Showcase, spinner/spinner-card.component)
 *
 *
 * ```ts
 * <nb-card [nbSpinner]="loading" nbSpinnerStatus="danger">
 *   <nb-card-body>Card Content</nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbSpinnerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSpinnerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Could be colored using `status` property
 *
 * @stacked-example(Spinner Colors, spinner/spinner-colors.component)
 *
 * Available in different sizes with `size` property:
 *
 * @stacked-example(Spinner Sizes, spinner/spinner-sizes.component)
 *
 * It is also possible to place it into the button:
 * @stacked-example(Buttons with spinner, spinner/spinner-button.component)
 *
 * Or tabs:
 * @stacked-example(Spinner in tabs, spinner/spinner-tabs.component)
 */
var NbSpinnerDirective = /** @class */ (function () {
    function NbSpinnerDirective(directiveView, componentFactoryResolver, renderer, directiveElement) {
        this.directiveView = directiveView;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.directiveElement = directiveElement;
        this.isSpinnerExist = false;
        this.shouldShow = false;
    }
    Object.defineProperty(NbSpinnerDirective.prototype, "nbSpinner", {
        /**
         * Directive value - show or hide spinner
         * @param {boolean} val
         */
        set: function (val) {
            if (this.componentFactory) {
                if (val) {
                    this.show();
                }
                else {
                    this.hide();
                }
            }
            else {
                this.shouldShow = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    NbSpinnerDirective.prototype.ngOnInit = function () {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(NbSpinnerComponent);
        if (this.shouldShow) {
            this.show();
        }
    };
    NbSpinnerDirective.prototype.hide = function () {
        if (this.isSpinnerExist) {
            this.directiveView.remove();
            this.isSpinnerExist = false;
        }
    };
    NbSpinnerDirective.prototype.show = function () {
        if (!this.isSpinnerExist) {
            this.spinner = this.directiveView.createComponent(this.componentFactory);
            this.setInstanceInputs(this.spinner.instance);
            this.spinner.changeDetectorRef.detectChanges();
            this.renderer.appendChild(this.directiveElement.nativeElement, this.spinner.location.nativeElement);
            this.isSpinnerExist = true;
        }
    };
    NbSpinnerDirective.prototype.setInstanceInputs = function (instance) {
        typeof this.spinnerMessage !== 'undefined' && (instance.message = this.spinnerMessage);
        typeof this.spinnerStatus !== 'undefined' && (instance.status = this.spinnerStatus);
        typeof this.spinnerSize !== 'undefined' && (instance.size = this.spinnerSize);
    };
    __decorate$94([
        i0.HostBinding('class.nb-spinner-container'),
        __metadata$62("design:type", Object)
    ], NbSpinnerDirective.prototype, "isSpinnerExist", void 0);
    __decorate$94([
        i0.Input('nbSpinnerMessage'),
        __metadata$62("design:type", String)
    ], NbSpinnerDirective.prototype, "spinnerMessage", void 0);
    __decorate$94([
        i0.Input('nbSpinnerStatus'),
        __metadata$62("design:type", String)
    ], NbSpinnerDirective.prototype, "spinnerStatus", void 0);
    __decorate$94([
        i0.Input('nbSpinnerSize'),
        __metadata$62("design:type", String)
    ], NbSpinnerDirective.prototype, "spinnerSize", void 0);
    __decorate$94([
        i0.Input('nbSpinner'),
        __metadata$62("design:type", Boolean),
        __metadata$62("design:paramtypes", [Boolean])
    ], NbSpinnerDirective.prototype, "nbSpinner", null);
    NbSpinnerDirective = __decorate$94([
        i0.Directive({ selector: '[nbSpinner]' }),
        __metadata$62("design:paramtypes", [i0.ViewContainerRef,
            i0.ComponentFactoryResolver,
            i0.Renderer2,
            i0.ElementRef])
    ], NbSpinnerDirective);
    return NbSpinnerDirective;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$95 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbSpinnerModule = /** @class */ (function () {
    function NbSpinnerModule() {
    }
    NbSpinnerModule = __decorate$95([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            exports: [NbSpinnerComponent, NbSpinnerDirective],
            declarations: [NbSpinnerComponent, NbSpinnerDirective],
            entryComponents: [NbSpinnerComponent],
        })
    ], NbSpinnerModule);
    return NbSpinnerModule;
}());

var __decorate$97 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$64 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$14 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Component intended to be used within  the `<nb-stepper>` component.
 * Container for a step
 */
var NbStepComponent = /** @class */ (function () {
    function NbStepComponent(stepper) {
        this.stepper = stepper;
        this.completedValue = false;
        this.interacted = false;
    }
    Object.defineProperty(NbStepComponent.prototype, "isLabelTemplate", {
        /**
         * Check that label is a TemplateRef.
         *
         * @return boolean
         * */
        get: function () {
            return this.label instanceof i0.TemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepComponent.prototype, "completed", {
        /**
         * Whether step is marked as completed.
         *
         * @type {boolean}
         */
        get: function () {
            return this.completedValue || this.isCompleted;
        },
        set: function (value) {
            this.completedValue = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepComponent.prototype, "isCompleted", {
        get: function () {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Mark step as selected
     * */
    NbStepComponent.prototype.select = function () {
        this.stepper.selected = this;
    };
    /**
     * Reset step and stepControl state
     * */
    NbStepComponent.prototype.reset = function () {
        this.interacted = false;
        if (this.stepControl) {
            this.stepControl.reset();
        }
    };
    __decorate$97([
        i0.ViewChild(i0.TemplateRef),
        __metadata$64("design:type", i0.TemplateRef)
    ], NbStepComponent.prototype, "content", void 0);
    __decorate$97([
        i0.Input(),
        __metadata$64("design:type", _angular_forms.AbstractControl)
    ], NbStepComponent.prototype, "stepControl", void 0);
    __decorate$97([
        i0.Input(),
        __metadata$64("design:type", Object)
    ], NbStepComponent.prototype, "label", void 0);
    __decorate$97([
        i0.Input(),
        __metadata$64("design:type", Boolean)
    ], NbStepComponent.prototype, "hidden", void 0);
    __decorate$97([
        i0.Input(),
        __metadata$64("design:type", Boolean),
        __metadata$64("design:paramtypes", [Boolean])
    ], NbStepComponent.prototype, "completed", null);
    NbStepComponent = __decorate$97([
        i0.Component({
            selector: 'nb-step',
            template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
        }),
        __param$14(0, i0.Inject(i0.forwardRef(function () { return NbStepperComponent; }))),
        __metadata$64("design:paramtypes", [NbStepperComponent])
    ], NbStepComponent);
    return NbStepComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$96 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$63 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

(function (NbStepperOrientation) {
    NbStepperOrientation["VERTICAL"] = "vertical";
    NbStepperOrientation["HORIZONTAL"] = "horizontal";
})(exports.NbStepperOrientation || (exports.NbStepperOrientation = {}));
/**
 * Stepper component
 *
 * @stacked-example(Showcase, stepper/stepper-showcase.component)
 *
 * ### Installation
 *
 * Import `NbStepperModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbStepperModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If step label is string you can pass it as `label` attribute. Otherwise ng-template should be used:
 * ```html
 * // ...
 * <nb-stepper orientation="horizontal">
 *   <nb-step label="step number one">
 *       // ... step content here
 *   <nb-step>
 *   <nb-step label="stepLabel">
 *       <ng-template #stepLabel>
 *           <div>
 *               step number two
 *           </div>
 *       </ng-template>
 *       // ... step content here
 *   <nb-step>
 * </nb-stepper>
 * ```
 * Specify `[stepControl]="form"` and user can navigates only if submit previous step's form.
 * ```html
 * // ...
 * <nb-stepper  orientation="horizontal">
 *   <nb-step label="step number one" [stepControl]="form">
 *     <form [formGroup]="form">
 *       // ...
 *     </form>
 *   <nb-step>
 *    // ...
 * </nb-stepper>
 * ```
 *
 * @stacked-example(Validation, stepper/stepper-validation.component)
 *
 * Stepper component has two layout options - `vertical` & `horizontal`
 * @stacked-example(Vertical, stepper/stepper-vertical.component)
 *
 * @styles
 *
 * stepper-index-size:
 * stepper-label-font-size:
 * stepper-label-font-weight:
 * stepper-accent-color:
 * stepper-completed-fg:
 * stepper-fg:
 * stepper-completed-icon-size:
 * stepper-completed-icon-weight:
 */
var NbStepperComponent = /** @class */ (function () {
    function NbStepperComponent() {
        /**
         * Stepper orientation - `horizontal`|`vertical`
         * @type {string}
         */
        this.orientation = exports.NbStepperOrientation.HORIZONTAL;
        this.index = 0;
    }
    Object.defineProperty(NbStepperComponent.prototype, "vertical", {
        get: function () {
            return this.orientation === exports.NbStepperOrientation.VERTICAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepperComponent.prototype, "horizontal", {
        get: function () {
            return this.orientation === exports.NbStepperOrientation.HORIZONTAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepperComponent.prototype, "selectedIndex", {
        /**
         * Selected step index
         *
         * @type {boolean}
         */
        get: function () {
            return this.index;
        },
        set: function (index) {
            if (this.steps) {
                if (this.index !== index && this.isStepValid(index)) {
                    this.index = index;
                }
            }
            else {
                this.index = index;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepperComponent.prototype, "selected", {
        /**
         * Selected step component
         *
         * @type {boolean}
         */
        get: function () {
            return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
        },
        set: function (step) {
            this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Navigate to next step
     * */
    NbStepperComponent.prototype.next = function () {
        this.selectedIndex = Math.min(this.index + 1, this.steps.length - 1);
    };
    /**
     * Navigate to previous step
     * */
    NbStepperComponent.prototype.previous = function () {
        this.selectedIndex = Math.max(this.index - 1, 0);
    };
    /**
     * Reset stepper and stepControls to initial state
     * */
    NbStepperComponent.prototype.reset = function () {
        this.selectedIndex = 0;
        this.steps.forEach(function (step) { return step.reset(); });
    };
    NbStepperComponent.prototype.isStepSelected = function (step) {
        return this.index === this.steps.toArray().indexOf(step);
    };
    NbStepperComponent.prototype.isStepValid = function (index) {
        var steps = this.steps.toArray();
        steps[this.index].interacted = true;
        if (index >= this.index && index > 0) {
            var currentStep = steps[this.index];
            return currentStep.completed;
        }
        return true;
    };
    __decorate$96([
        i0.ContentChildren(NbStepComponent),
        __metadata$63("design:type", i0.QueryList)
    ], NbStepperComponent.prototype, "steps", void 0);
    __decorate$96([
        i0.HostBinding('class.vertical'),
        __metadata$63("design:type", Object),
        __metadata$63("design:paramtypes", [])
    ], NbStepperComponent.prototype, "vertical", null);
    __decorate$96([
        i0.HostBinding('class.horizontal'),
        __metadata$63("design:type", Object),
        __metadata$63("design:paramtypes", [])
    ], NbStepperComponent.prototype, "horizontal", null);
    __decorate$96([
        i0.Input(),
        __metadata$63("design:type", Number),
        __metadata$63("design:paramtypes", [Number])
    ], NbStepperComponent.prototype, "selectedIndex", null);
    __decorate$96([
        i0.Input(),
        __metadata$63("design:type", NbStepComponent),
        __metadata$63("design:paramtypes", [NbStepComponent])
    ], NbStepperComponent.prototype, "selected", null);
    __decorate$96([
        i0.Input(),
        __metadata$63("design:type", String)
    ], NbStepperComponent.prototype, "orientation", void 0);
    NbStepperComponent = __decorate$96([
        i0.Component({
            selector: 'nb-stepper',
            styles: [":host.horizontal .header .step{flex-direction:column}:host.horizontal .header .connector{height:2px}:host.vertical{display:flex;height:100%}:host.vertical .header{flex-direction:column}:host.vertical .header .label{margin:0 10px}:host.vertical .header .connector{width:2px}.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}.header .connector{flex:auto}.header .step{display:flex;align-items:center;cursor:pointer}.header .label-index{margin-bottom:10px;display:flex;justify-content:center;align-items:center}.header .label{width:max-content} "],
            template: "<ng-template><ng-content select=\"nb-step\"></ng-content></ng-template> <div class=\"header\"> <ng-container *ngFor=\"let step of steps; let index = index; let first = first\"> <div *ngIf=\"!first && !step.hidden\" [class.connector-past]=\"index < selectedIndex\" class=\"connector\"></div> <div *ngIf=\"!step.hidden\" class=\"step\" [class.selected]=\"isStepSelected(step)\" [class.completed]=\"!isStepSelected(step) && step.completed\" (click)=\"step.select()\"> <div class=\"label-index\"> <span *ngIf=\"!step.completed || isStepSelected(step)\">{{ index + 1 }}</span> <i *ngIf=\"!isStepSelected(step) && step.completed\" class=\"icon nb-checkmark\"></i> </div> <div class=\"label\"> <ng-container *ngIf=\"step.isLabelTemplate\"> <ng-container *ngTemplateOutlet=\"step.label\"></ng-container> </ng-container> <span *ngIf=\"!step.isLabelTemplate\">{{ step.label }}</span> </div> </div> </ng-container> </div> <div class=\"step-content\"> <ng-container [ngTemplateOutlet]=\"selected?.content\"></ng-container> </div> ",
        })
    ], NbStepperComponent);
    return NbStepperComponent;
}());

var __decorate$99 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$65 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbStepperNextDirective = /** @class */ (function () {
    function NbStepperNextDirective(stepper) {
        this.stepper = stepper;
        this.type = 'submit';
    }
    NbStepperNextDirective.prototype.onClick = function () {
        this.stepper.next();
    };
    __decorate$99([
        i0.Input(), i0.HostBinding('attr.type'),
        __metadata$65("design:type", String)
    ], NbStepperNextDirective.prototype, "type", void 0);
    __decorate$99([
        i0.HostListener('click'),
        __metadata$65("design:type", Function),
        __metadata$65("design:paramtypes", []),
        __metadata$65("design:returntype", void 0)
    ], NbStepperNextDirective.prototype, "onClick", null);
    NbStepperNextDirective = __decorate$99([
        i0.Directive({
            selector: 'button[nbStepperNext]',
        }),
        __metadata$65("design:paramtypes", [NbStepperComponent])
    ], NbStepperNextDirective);
    return NbStepperNextDirective;
}());
var NbStepperPreviousDirective = /** @class */ (function () {
    function NbStepperPreviousDirective(stepper) {
        this.stepper = stepper;
        this.type = 'button';
    }
    NbStepperPreviousDirective.prototype.onClick = function () {
        this.stepper.previous();
    };
    __decorate$99([
        i0.Input(), i0.HostBinding('attr.type'),
        __metadata$65("design:type", String)
    ], NbStepperPreviousDirective.prototype, "type", void 0);
    __decorate$99([
        i0.HostListener('click'),
        __metadata$65("design:type", Function),
        __metadata$65("design:paramtypes", []),
        __metadata$65("design:returntype", void 0)
    ], NbStepperPreviousDirective.prototype, "onClick", null);
    NbStepperPreviousDirective = __decorate$99([
        i0.Directive({
            selector: 'button[nbStepperPrevious]',
        }),
        __metadata$65("design:paramtypes", [NbStepperComponent])
    ], NbStepperPreviousDirective);
    return NbStepperPreviousDirective;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$98 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbStepperModule = /** @class */ (function () {
    function NbStepperModule() {
    }
    NbStepperModule = __decorate$98([
        i0.NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: [
                NbStepperComponent,
                NbStepComponent,
                NbStepperNextDirective,
                NbStepperPreviousDirective,
            ],
            exports: [
                NbStepperComponent,
                NbStepComponent,
                NbStepperNextDirective,
                NbStepperPreviousDirective,
            ],
        })
    ], NbStepperModule);
    return NbStepperModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$100 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$66 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * An accordion allows to toggle the display of sections of content
 *
 * Basic example
 * @stacked-example(Showcase, accordion/accordion-showcase.component)
 *
 * ```ts
 * <nb-accordion>
 *  <nb-accordion-item>
 *   <nb-accordion-item-header>Product Details</nb-accordion-item-header>
 *   <nb-accordion-item-body>
 *     Item Content
 *   </nb-accordion-item-body>
 *  </nb-accordion-item>
 * </nb-accordion>
 * ```
 * ### Installation
 *
 * Import `NbAccordionModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbAccordionModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * With `multi` mode acordion can have multiple items expanded:
 * @stacked-example(Showcase, accordion/accordion-multi.component)
 *
 * `NbAccordionItemComponent` has several method, for example it is possible to trigger item click/toggle:
 * @stacked-example(Showcase, accordion/accordion-toggle.component)
 *
 * @styles
 *
 * accordion-padding:
 * accordion-separator:
 * accordion-header-font-family:
 * accordion-header-font-size:
 * accordion-header-font-weight:
 * accordion-header-fg-heading:
 * accordion-header-disabled-fg:
 * accordion-header-border-width:
 * accordion-header-border-type:
 * accordion-header-border-color:
 * accordion-item-bg:
 * accordion-item-font-size:
 * accordion-item-font-weight:
 * accordion-item-font-family:
 * accordion-item-fg-text:
 * accordion-item-shadow:
 */
var NbAccordionComponent = /** @class */ (function () {
    function NbAccordionComponent() {
        this.openCloseItems = new rxjs.Subject();
        this.multiValue = false;
    }
    Object.defineProperty(NbAccordionComponent.prototype, "multi", {
        /**
         *  Allow multiple items to be expanded at the same time.
         * @type {boolean}
         */
        get: function () {
            return this.multiValue;
        },
        set: function (val) {
            this.multiValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens all enabled accordion items.
     */
    NbAccordionComponent.prototype.openAll = function () {
        if (this.multi) {
            this.openCloseItems.next(false);
        }
    };
    /**
     * Closes all enabled accordion items.
     */
    NbAccordionComponent.prototype.closeAll = function () {
        this.openCloseItems.next(true);
    };
    NbAccordionComponent.STATUS_ACTIVE = 'active';
    NbAccordionComponent.STATUS_DISABLED = 'disabled';
    NbAccordionComponent.STATUS_PRIMARY = 'primary';
    NbAccordionComponent.STATUS_INFO = 'info';
    NbAccordionComponent.STATUS_SUCCESS = 'success';
    NbAccordionComponent.STATUS_WARNING = 'warning';
    NbAccordionComponent.STATUS_DANGER = 'danger';
    __decorate$100([
        i0.Input('multi'),
        __metadata$66("design:type", Boolean),
        __metadata$66("design:paramtypes", [Boolean])
    ], NbAccordionComponent.prototype, "multi", null);
    NbAccordionComponent = __decorate$100([
        i0.Component({
            selector: 'nb-accordion',
            template: "\n    <ng-content select=\"nb-accordion-item\"></ng-content>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        })
    ], NbAccordionComponent);
    return NbAccordionComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$101 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$67 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$15 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Component intended to be used within `<nb-accordion>` component
 */
var NbAccordionItemComponent = /** @class */ (function () {
    function NbAccordionItemComponent(accordion, cd) {
        this.accordion = accordion;
        this.cd = cd;
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         */
        this.collapsedChange = new i0.EventEmitter();
        this.accordionItemInvalidate = new rxjs.Subject();
        this.collapsedValue = true;
        this.disabledValue = false;
        this.alive = true;
    }
    Object.defineProperty(NbAccordionItemComponent.prototype, "collapsed", {
        /**
         * Item is collapse (`true` by default)
         * @type {boolean}
         */
        get: function () {
            return this.collapsedValue;
        },
        set: function (val) {
            this.collapsedValue = convertToBoolProperty(val);
            this.collapsedChange.emit(this.collapsedValue);
            this.invalidate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemComponent.prototype, "expanded", {
        /**
         * Item is expanded (`false` by default)
         * @type {boolean}
         */
        get: function () {
            return !this.collapsed;
        },
        set: function (val) {
            this.collapsedValue = !convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemComponent.prototype, "disabled", {
        /**
         * Item is disabled and cannot be opened.
         * @type {boolean}
         */
        get: function () {
            return this.disabledValue;
        },
        set: function (val) {
            this.disabledValue = convertToBoolProperty(val);
            this.invalidate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Open/close the item
     */
    NbAccordionItemComponent.prototype.toggle = function () {
        if (!this.disabled) {
            // we need this temporary variable as `openCloseItems.next` will change current value we need to save
            var willSet = !this.collapsed;
            if (!this.accordion.multi) {
                this.accordion.openCloseItems.next(true);
            }
            this.collapsed = willSet;
        }
    };
    /**
     * Open the item.
     */
    NbAccordionItemComponent.prototype.open = function () {
        !this.disabled && (this.collapsed = false);
    };
    /**
     * Collapse the item.
     */
    NbAccordionItemComponent.prototype.close = function () {
        !this.disabled && (this.collapsed = true);
    };
    NbAccordionItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordion.openCloseItems
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (collapsed) {
            !_this.disabled && (_this.collapsed = collapsed);
        });
    };
    NbAccordionItemComponent.prototype.ngOnChanges = function (changes) {
        this.accordionItemInvalidate.next(true);
    };
    NbAccordionItemComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.accordionItemInvalidate.complete();
    };
    NbAccordionItemComponent.prototype.invalidate = function () {
        this.accordionItemInvalidate.next(true);
        this.cd.markForCheck();
    };
    __decorate$101([
        i0.Input('collapsed'),
        i0.HostBinding('class.collapsed'),
        __metadata$67("design:type", Boolean),
        __metadata$67("design:paramtypes", [Boolean])
    ], NbAccordionItemComponent.prototype, "collapsed", null);
    __decorate$101([
        i0.Input('expanded'),
        i0.HostBinding('class.expanded'),
        __metadata$67("design:type", Boolean),
        __metadata$67("design:paramtypes", [Boolean])
    ], NbAccordionItemComponent.prototype, "expanded", null);
    __decorate$101([
        i0.Input('disabled'),
        i0.HostBinding('class.disabled'),
        __metadata$67("design:type", Boolean),
        __metadata$67("design:paramtypes", [Boolean])
    ], NbAccordionItemComponent.prototype, "disabled", null);
    __decorate$101([
        i0.Output(),
        __metadata$67("design:type", Object)
    ], NbAccordionItemComponent.prototype, "collapsedChange", void 0);
    NbAccordionItemComponent = __decorate$101([
        i0.Component({
            selector: 'nb-accordion-item',
            styles: [":host{display:flex;flex-direction:column} "],
            template: "\n    <ng-content select=\"nb-accordion-item-header\"></ng-content>\n    <ng-content select=\"nb-accordion-item-body\"></ng-content>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __param$15(0, i0.Host()),
        __metadata$67("design:paramtypes", [NbAccordionComponent, i0.ChangeDetectorRef])
    ], NbAccordionItemComponent);
    return NbAccordionItemComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$102 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$68 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$16 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var accordionItemBodyTrigger = _angular_animations.trigger('accordionItemBody', [
    _angular_animations.state('collapsed', _angular_animations.style({
        overflow: 'hidden',
        visibility: 'hidden',
        height: 0,
    })),
    _angular_animations.state('expanded', _angular_animations.style({
        overflow: 'hidden',
        visibility: 'visible',
    })),
    _angular_animations.transition('collapsed => expanded', _angular_animations.animate('100ms ease-in')),
    _angular_animations.transition('expanded => collapsed', _angular_animations.animate('100ms ease-out')),
]);
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
var NbAccordionItemBodyComponent = /** @class */ (function () {
    function NbAccordionItemBodyComponent(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.alive = true;
    }
    Object.defineProperty(NbAccordionItemBodyComponent.prototype, "state", {
        get: function () {
            return this.accordionItem.collapsed ? 'collapsed' : 'expanded';
        },
        enumerable: true,
        configurable: true
    });
    NbAccordionItemBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordionItem.accordionItemInvalidate
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.cd.markForCheck(); });
    };
    NbAccordionItemBodyComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbAccordionItemBodyComponent = __decorate$102([
        i0.Component({
            selector: 'nb-accordion-item-body',
            template: "\n    <div [@accordionItemBody]=\"{ value: state }\">\n      <div class=\"item-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
            animations: [accordionItemBodyTrigger],
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __param$16(0, i0.Host()),
        __metadata$68("design:paramtypes", [NbAccordionItemComponent, i0.ChangeDetectorRef])
    ], NbAccordionItemBodyComponent);
    return NbAccordionItemBodyComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$103 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$69 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$17 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
var NbAccordionItemHeaderComponent = /** @class */ (function () {
    function NbAccordionItemHeaderComponent(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.alive = true;
    }
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "isCollapsed", {
        get: function () {
            return this.accordionItem.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "expanded", {
        get: function () {
            return !this.accordionItem.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "tabbable", {
        // issue #794
        get: function () {
            return this.accordionItem.disabled ? '-1' : '0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "disabled", {
        get: function () {
            return this.accordionItem.disabled;
        },
        enumerable: true,
        configurable: true
    });
    NbAccordionItemHeaderComponent.prototype.toggle = function () {
        this.accordionItem.toggle();
    };
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "state", {
        get: function () {
            if (this.isCollapsed) {
                return 'collapsed';
            }
            if (this.expanded) {
                return 'expanded';
            }
        },
        enumerable: true,
        configurable: true
    });
    NbAccordionItemHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordionItem.accordionItemInvalidate
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.cd.markForCheck(); });
    };
    NbAccordionItemHeaderComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    __decorate$103([
        i0.HostBinding('class.accordion-item-header-collapsed'),
        __metadata$69("design:type", Boolean),
        __metadata$69("design:paramtypes", [])
    ], NbAccordionItemHeaderComponent.prototype, "isCollapsed", null);
    __decorate$103([
        i0.HostBinding('class.accordion-item-header-expanded'),
        i0.HostBinding('attr.aria-expanded'),
        __metadata$69("design:type", Boolean),
        __metadata$69("design:paramtypes", [])
    ], NbAccordionItemHeaderComponent.prototype, "expanded", null);
    __decorate$103([
        i0.HostBinding('attr.tabindex'),
        __metadata$69("design:type", String),
        __metadata$69("design:paramtypes", [])
    ], NbAccordionItemHeaderComponent.prototype, "tabbable", null);
    __decorate$103([
        i0.HostBinding('attr.aria-disabled'),
        __metadata$69("design:type", Boolean),
        __metadata$69("design:paramtypes", [])
    ], NbAccordionItemHeaderComponent.prototype, "disabled", null);
    __decorate$103([
        i0.HostListener('click'),
        __metadata$69("design:type", Function),
        __metadata$69("design:paramtypes", []),
        __metadata$69("design:returntype", void 0)
    ], NbAccordionItemHeaderComponent.prototype, "toggle", null);
    NbAccordionItemHeaderComponent = __decorate$103([
        i0.Component({
            selector: 'nb-accordion-item-header',
            styles: [":host{display:flex;align-items:center;cursor:pointer}:host:focus{outline:0} "],
            template: "\n    <ng-content select=\"nb-accordion-item-title\"></ng-content>\n    <ng-content select=\"nb-accordion-item-description\"></ng-content>\n    <ng-content></ng-content>\n    <i [@expansionIndicator]=\"state\" *ngIf=\"!disabled\" class=\"nb-arrow-down\"></i>\n  ",
            animations: [
                _angular_animations.trigger('expansionIndicator', [
                    _angular_animations.state('expanded', _angular_animations.style({
                        transform: 'rotate(180deg)',
                    })),
                    _angular_animations.transition('collapsed => expanded', _angular_animations.animate('100ms ease-in')),
                    _angular_animations.transition('expanded => collapsed', _angular_animations.animate('100ms ease-out')),
                ]),
            ],
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __param$17(0, i0.Host()),
        __metadata$69("design:paramtypes", [NbAccordionItemComponent, i0.ChangeDetectorRef])
    ], NbAccordionItemHeaderComponent);
    return NbAccordionItemHeaderComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$104 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_ACCORDION_COMPONENTS = [
    NbAccordionComponent,
    NbAccordionItemComponent,
    NbAccordionItemHeaderComponent,
    NbAccordionItemBodyComponent,
];
var NbAccordionModule = /** @class */ (function () {
    function NbAccordionModule() {
    }
    NbAccordionModule = __decorate$104([
        i0.NgModule({
            imports: [i1.CommonModule],
            exports: NB_ACCORDION_COMPONENTS.slice(),
            declarations: NB_ACCORDION_COMPONENTS.slice(),
            providers: [],
        })
    ], NbAccordionModule);
    return NbAccordionModule;
}());

var __decorate$105 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$70 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * List is a container component that wraps `nb-list-item` component.
 *
 * Basic example:
 * @stacked-example(Simple list, list/simple-list-showcase.component)
 *
 * `nb-list-item` accepts arbitrary content, so you can create a list of any components.
 *
 * ### Installation
 *
 * Import `NbListModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbListModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * List of users:
 * @stacked-example(Users list, list/users-list-showcase.component)
 *
 * @styles
 *
 * list-item-border-color:
 * list-item-padding:
 */
var NbListComponent = /** @class */ (function () {
    function NbListComponent() {
        /**
         * Role attribute value
         *
         * @type {string}
         */
        this.role = 'list';
    }
    __decorate$105([
        i0.Input(),
        i0.HostBinding('attr.role'),
        __metadata$70("design:type", Object)
    ], NbListComponent.prototype, "role", void 0);
    NbListComponent = __decorate$105([
        i0.Component({
            selector: 'nb-list',
            template: "<ng-content select=\"nb-list-item\"></ng-content>",
            styles: [":host{display:flex;flex-direction:column;flex:1 1 auto;overflow:auto} "],
        })
    ], NbListComponent);
    return NbListComponent;
}());
/**
 * List item component is a grouping component that accepts arbitrary content.
 * It should be direct child of `nb-list` componet.
 */
var NbListItemComponent = /** @class */ (function () {
    function NbListItemComponent() {
        /**
         * Role attribute value
         *
         * @type {string}
         */
        this.role = 'listitem';
    }
    __decorate$105([
        i0.Input(),
        i0.HostBinding('attr.role'),
        __metadata$70("design:type", Object)
    ], NbListItemComponent.prototype, "role", void 0);
    NbListItemComponent = __decorate$105([
        i0.Component({
            selector: 'nb-list-item',
            template: "<ng-content></ng-content>",
            styles: [":host{flex-shrink:0} "],
        })
    ], NbListItemComponent);
    return NbListItemComponent;
}());

var __decorate$107 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$71 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * List pager directive
 *
 * Directive allows you to determine page of currently viewing items.
 *
 */
var NbListPageTrackerDirective = /** @class */ (function () {
    function NbListPageTrackerDirective() {
        var _this = this;
        this.alive = true;
        /**
         * Page to start counting with.
         */
        this.startPage = 1;
        /**
         * Emits when another page become visible.
         */
        this.pageChange = new i0.EventEmitter();
        this.observer = new IntersectionObserver(function (entries) { return _this.checkForPageChange(entries); }, { threshold: 0.5 });
    }
    NbListPageTrackerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.listItems && this.listItems.length) {
            this.observeItems();
        }
        this.listItems.changes
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.observeItems(); });
    };
    NbListPageTrackerDirective.prototype.ngOnDestroy = function () {
        this.observer.disconnect && this.observer.disconnect();
    };
    NbListPageTrackerDirective.prototype.observeItems = function () {
        var _this = this;
        this.listItems.forEach(function (i) { return _this.observer.observe(i.nativeElement); });
    };
    NbListPageTrackerDirective.prototype.checkForPageChange = function (entries) {
        var mostVisiblePage = this.findMostVisiblePage(entries);
        if (mostVisiblePage && this.currentPage !== mostVisiblePage) {
            this.currentPage = mostVisiblePage;
            this.pageChange.emit(this.currentPage);
        }
    };
    NbListPageTrackerDirective.prototype.findMostVisiblePage = function (entries) {
        var intersectionRatioByPage = new Map();
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            if (entry.intersectionRatio < 0.5) {
                continue;
            }
            var elementIndex = this.elementIndex(entry.target);
            if (elementIndex === -1) {
                continue;
            }
            var page = this.startPage + Math.floor(elementIndex / this.pageSize);
            var ratio = entry.intersectionRatio;
            if (intersectionRatioByPage.has(page)) {
                ratio += intersectionRatioByPage.get(page);
            }
            intersectionRatioByPage.set(page, ratio);
        }
        var maxRatio = 0;
        var mostVisiblePage;
        intersectionRatioByPage.forEach(function (ratio, page) {
            if (ratio > maxRatio) {
                maxRatio = ratio;
                mostVisiblePage = page;
            }
        });
        return mostVisiblePage;
    };
    NbListPageTrackerDirective.prototype.elementIndex = function (element) {
        return element.parentElement && element.parentElement.children
            ? Array.from(element.parentElement.children).indexOf(element)
            : -1;
    };
    __decorate$107([
        i0.Input(),
        __metadata$71("design:type", Number)
    ], NbListPageTrackerDirective.prototype, "pageSize", void 0);
    __decorate$107([
        i0.Input(),
        __metadata$71("design:type", Number)
    ], NbListPageTrackerDirective.prototype, "startPage", void 0);
    __decorate$107([
        i0.Output(),
        __metadata$71("design:type", Object)
    ], NbListPageTrackerDirective.prototype, "pageChange", void 0);
    __decorate$107([
        i0.ContentChildren(NbListItemComponent, { read: i0.ElementRef }),
        __metadata$71("design:type", i0.QueryList)
    ], NbListPageTrackerDirective.prototype, "listItems", void 0);
    NbListPageTrackerDirective = __decorate$107([
        i0.Directive({
            selector: '[nbListPageTracker]',
        }),
        __metadata$71("design:paramtypes", [])
    ], NbListPageTrackerDirective);
    return NbListPageTrackerDirective;
}());

var __decorate$108 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$72 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbScrollableContainerDimentions = /** @class */ (function () {
    function NbScrollableContainerDimentions() {
    }
    return NbScrollableContainerDimentions;
}());
/**
 * Infinite List Directive
 *
 * ```html
 *  <nb-list nbInfiniteList [threshold]="500" (bottomThreshold)="loadNext()">
 *    <nb-list-item *ngFor="let item of items"></nb-list-item>
 *  </nb-list>
 * ```
 *
 * @stacked-example(Simple infinite list, infinite-list/infinite-list-showcase.component)
 *
 * Directive will notify when list scrolled up or down to given a threshold.
 * By default it listen to scroll of list on which applied, but also can be set to listen to window scroll.
 *
 * @stacked-example(Scroll modes, infinite-list/infinite-list-scroll-modes.component)
 *
 * To improve UX of infinite lists, it's better to keep current page in url,
 * so user able to return to the last viewed page or to share a link to this page.
 * `nbListPageTracker` directive will help you to know, what page user currently viewing.
 * Just put it on a list, set page size and it will calculate page that currently in viewport.
 * You can [open the example](example/infinite-list/infinite-news-list.component)
 * in a new tab to check out this feature.
 *
 * @stacked-example(Infinite list with pager, infinite-list/infinite-news-list.component)
 *
 * @stacked-example(Infinite list with placeholders at the top, infinite-list/infinite-list-placeholders.component)
 *
 */
var NbInfiniteListDirective = /** @class */ (function () {
    function NbInfiniteListDirective(elementRef, scrollService, dimensionsService) {
        this.elementRef = elementRef;
        this.scrollService = scrollService;
        this.dimensionsService = dimensionsService;
        this.alive = true;
        this.windowScroll = false;
        /**
         * Emits when distance between list bottom and current scroll position is less than threshold.
         */
        this.bottomThreshold = new i0.EventEmitter(true);
        /**
         * Emits when distance between list top and current scroll position is less than threshold.
         */
        this.topThreshold = new i0.EventEmitter(true);
    }
    Object.defineProperty(NbInfiniteListDirective.prototype, "elementScroll", {
        get: function () {
            return !this.windowScroll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInfiniteListDirective.prototype, "listenWindowScroll", {
        /**
         * By default component observes list scroll position.
         * If set to `true`, component will observe position of page scroll instead.
         */
        set: function (value) {
            this.windowScroll = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    NbInfiniteListDirective.prototype.onElementScroll = function () {
        if (this.elementScroll) {
            this.checkPosition(this.elementRef.nativeElement);
        }
    };
    NbInfiniteListDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scrollService.onScroll()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.filter(function () { return _this.windowScroll; }), rxjs_operators.switchMap(function () { return _this.getContainerDimensions(); }))
            .subscribe(function (dimentions) { return _this.checkPosition(dimentions); });
        this.listItems.changes
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), 
        // For some reason, changes are emitted before list item removed from dom,
        // so dimensions will be incorrect.
        // Check every 50ms for a second if dom and query are in sync.
        // Once they synchronized, we can get proper dimensions.
        rxjs_operators.switchMap(function () { return rxjs.interval(50).pipe(rxjs_operators.takeUntil(rxjs.timer(1000)), rxjs_operators.filter(function () { return _this.inSyncWithDom(); }), rxjs_operators.take(1)); }), rxjs_operators.switchMap(function () { return _this.getContainerDimensions(); }))
            .subscribe(function (dimentions) { return _this.checkPosition(dimentions); });
        this.getContainerDimensions().subscribe(function (dimentions) { return _this.checkPosition(dimentions); });
    };
    NbInfiniteListDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbInfiniteListDirective.prototype.checkPosition = function (_a) {
        var scrollHeight = _a.scrollHeight, scrollTop = _a.scrollTop, clientHeight = _a.clientHeight;
        var initialCheck = this.lastScrollPosition == null;
        var manualCheck = this.lastScrollPosition === scrollTop;
        var scrollUp = scrollTop < this.lastScrollPosition;
        var scrollDown = scrollTop > this.lastScrollPosition;
        var distanceToBottom = scrollHeight - scrollTop - clientHeight;
        if ((initialCheck || manualCheck || scrollDown) && distanceToBottom <= this.threshold) {
            this.bottomThreshold.emit();
        }
        if ((initialCheck || scrollUp) && scrollTop <= this.threshold) {
            this.topThreshold.emit();
        }
        this.lastScrollPosition = scrollTop;
    };
    NbInfiniteListDirective.prototype.getContainerDimensions = function () {
        if (this.elementScroll) {
            var _a = this.elementRef.nativeElement, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            return rxjs.of({ scrollTop: scrollTop, scrollHeight: scrollHeight, clientHeight: clientHeight });
        }
        return rxjs.forkJoin(this.scrollService.getPosition(), this.dimensionsService.getDimensions())
            .pipe(rxjs_operators.map(function (_a) {
            var scrollPosition = _a[0], dimensions = _a[1];
            return ({
                scrollTop: scrollPosition.y,
                scrollHeight: dimensions.scrollHeight,
                clientHeight: dimensions.clientHeight,
            });
        }));
    };
    NbInfiniteListDirective.prototype.inSyncWithDom = function () {
        return this.elementRef.nativeElement.children.length === this.listItems.length;
    };
    __decorate$108([
        i0.Input(),
        __metadata$72("design:type", Number)
    ], NbInfiniteListDirective.prototype, "threshold", void 0);
    __decorate$108([
        i0.Input(),
        __metadata$72("design:type", Object),
        __metadata$72("design:paramtypes", [Object])
    ], NbInfiniteListDirective.prototype, "listenWindowScroll", null);
    __decorate$108([
        i0.Output(),
        __metadata$72("design:type", Object)
    ], NbInfiniteListDirective.prototype, "bottomThreshold", void 0);
    __decorate$108([
        i0.Output(),
        __metadata$72("design:type", Object)
    ], NbInfiniteListDirective.prototype, "topThreshold", void 0);
    __decorate$108([
        i0.HostListener('scroll'),
        __metadata$72("design:type", Function),
        __metadata$72("design:paramtypes", []),
        __metadata$72("design:returntype", void 0)
    ], NbInfiniteListDirective.prototype, "onElementScroll", null);
    __decorate$108([
        i0.ContentChildren(NbListItemComponent),
        __metadata$72("design:type", i0.QueryList)
    ], NbInfiniteListDirective.prototype, "listItems", void 0);
    NbInfiniteListDirective = __decorate$108([
        i0.Directive({
            selector: '[nbInfiniteList]',
        }),
        __metadata$72("design:paramtypes", [i0.ElementRef,
            NbLayoutScrollService,
            NbLayoutRulerService])
    ], NbInfiniteListDirective);
    return NbInfiniteListDirective;
}());

var __decorate$106 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var components = [
    NbListComponent,
    NbListItemComponent,
    NbListPageTrackerDirective,
    NbInfiniteListDirective,
];
var NbListModule = /** @class */ (function () {
    function NbListModule() {
    }
    NbListModule = __decorate$106([
        i0.NgModule({
            declarations: components,
            exports: components,
        })
    ], NbListModule);
    return NbListModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$109 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$73 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Basic input directive.
 *
 * ```html
 * <input nbInput></input>
 * ```
 *
 * ### Installation
 *
 * Import `NbInputModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbInputModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Default input size is `medium`:
 * @stacked-example(Showcase, input/input-showcase.component)
 *
 * Inputs are available in multiple colors using `status` property:
 * @stacked-example(Input Colors, input/input-colors.component)
 *
 * There are three input sizes:
 *
 * @stacked-example(Input Sizes, input/input-sizes.component)
 *
 * Inputs available in different shapes, which could be combined with the other properties:
 * @stacked-example(Input Shapes, input/input-shapes.component)
 *
 * `nbInput` could be applied to the following selectors - `input`, `textarea`:
 * @stacked-example(Input Elements, input/input-types.component)
 *
 * You can add `fullWidth` attribute to make element fill container:
 * @stacked-example(Full width inputs, input/input-full-width.component)
 *
 * Or you can bind control with form controls or ngModel:
 * @stacked-example(Input form binding, input/input-form.component)
 *
 * @styles
 *
 * form-control-bg:
 * form-control-border-width:
 * form-control-border-type:
 * form-control-border-color:
 * form-control-text-primary-color:
 * form-control-focus-bg:
 * form-control-selected-border-color:
 * form-control-placeholder-font-size:
 * form-control-placeholder-color:
 * form-control-font-size:
 * form-control-padding:
 * form-control-font-size-sm:
 * form-control-padding-sm:
 * form-control-font-size-lg:
 * form-control-padding-lg:
 * form-control-border-radius:
 * form-control-semi-round-border-radius:
 * form-control-round-border-radius:
 * form-control-info-border-color:
 * form-control-success-border-color:
 * form-control-warning-border-color:
 * form-control-danger-border-color:
 */
var NbInputDirective = /** @class */ (function () {
    function NbInputDirective() {
        this.size = NbInputDirective_1.SIZE_MEDIUM;
        /**
         * Field shapes: `rectangle`, `round`, `semi-round`
         * @param {string} val
         */
        this.shape = NbInputDirective_1.SHAPE_RECTANGLE;
        this.fullWidth = false;
    }
    NbInputDirective_1 = NbInputDirective;
    Object.defineProperty(NbInputDirective.prototype, "setSize", {
        /**
         * Field size, available sizes:
         * `small`, `medium`, `large`
         * @param {string} val
         */
        set: function (value) {
            this.size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "setFullWidth", {
        /**
         * If set element will fill container
         * @param {string}
         */
        set: function (value) {
            this.fullWidth = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "small", {
        get: function () {
            return this.size === NbInputDirective_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "medium", {
        get: function () {
            return this.size === NbInputDirective_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "large", {
        get: function () {
            return this.size === NbInputDirective_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "info", {
        get: function () {
            return this.status === NbInputDirective_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "success", {
        get: function () {
            return this.status === NbInputDirective_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "warning", {
        get: function () {
            return this.status === NbInputDirective_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "danger", {
        get: function () {
            return this.status === NbInputDirective_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "rectangle", {
        get: function () {
            return this.shape === NbInputDirective_1.SHAPE_RECTANGLE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "semiRound", {
        get: function () {
            return this.shape === NbInputDirective_1.SHAPE_SEMI_ROUND;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "round", {
        get: function () {
            return this.shape === NbInputDirective_1.SHAPE_ROUND;
        },
        enumerable: true,
        configurable: true
    });
    var NbInputDirective_1;
    NbInputDirective.SIZE_SMALL = 'small';
    NbInputDirective.SIZE_MEDIUM = 'medium';
    NbInputDirective.SIZE_LARGE = 'large';
    NbInputDirective.STATUS_INFO = 'info';
    NbInputDirective.STATUS_SUCCESS = 'success';
    NbInputDirective.STATUS_WARNING = 'warning';
    NbInputDirective.STATUS_DANGER = 'danger';
    NbInputDirective.SHAPE_RECTANGLE = 'rectangle';
    NbInputDirective.SHAPE_SEMI_ROUND = 'semi-round';
    NbInputDirective.SHAPE_ROUND = 'round';
    __decorate$109([
        i0.Input('fieldSize'),
        __metadata$73("design:type", String),
        __metadata$73("design:paramtypes", [String])
    ], NbInputDirective.prototype, "setSize", null);
    __decorate$109([
        i0.Input('status'),
        __metadata$73("design:type", String)
    ], NbInputDirective.prototype, "status", void 0);
    __decorate$109([
        i0.Input('shape'),
        __metadata$73("design:type", String)
    ], NbInputDirective.prototype, "shape", void 0);
    __decorate$109([
        i0.Input('fullWidth'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [Object])
    ], NbInputDirective.prototype, "setFullWidth", null);
    __decorate$109([
        i0.HostBinding('class.input-full-width'),
        __metadata$73("design:type", Object)
    ], NbInputDirective.prototype, "fullWidth", void 0);
    __decorate$109([
        i0.HostBinding('class.input-sm'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "small", null);
    __decorate$109([
        i0.HostBinding('class.input-md'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "medium", null);
    __decorate$109([
        i0.HostBinding('class.input-lg'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "large", null);
    __decorate$109([
        i0.HostBinding('class.input-info'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "info", null);
    __decorate$109([
        i0.HostBinding('class.input-success'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "success", null);
    __decorate$109([
        i0.HostBinding('class.input-warning'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "warning", null);
    __decorate$109([
        i0.HostBinding('class.input-danger'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "danger", null);
    __decorate$109([
        i0.HostBinding('class.input-rectangle'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "rectangle", null);
    __decorate$109([
        i0.HostBinding('class.input-semi-round'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "semiRound", null);
    __decorate$109([
        i0.HostBinding('class.input-round'),
        __metadata$73("design:type", Object),
        __metadata$73("design:paramtypes", [])
    ], NbInputDirective.prototype, "round", null);
    NbInputDirective = NbInputDirective_1 = __decorate$109([
        i0.Directive({
            selector: 'input[nbInput],textarea[nbInput]',
        })
    ], NbInputDirective);
    return NbInputDirective;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$110 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_INPUT_COMPONENTS = [
    NbInputDirective,
];
var NbInputModule = /** @class */ (function () {
    function NbInputModule() {
    }
    NbInputModule = __decorate$110([
        i0.NgModule({
            imports: [NbSharedModule],
            declarations: NB_INPUT_COMPONENTS,
            exports: NB_INPUT_COMPONENTS,
        })
    ], NbInputModule);
    return NbInputModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_DIALOG_CONFIG = new i0.InjectionToken('Default dialog options');
/**
 * Describes all available options that may be passed to the NbDialogService.
 * */
var NbDialogConfig = /** @class */ (function () {
    function NbDialogConfig(config) {
        /**
         * If true than overlay will render backdrop under a dialog.
         * */
        this.hasBackdrop = true;
        /**
         * Class that'll be assigned to the backdrop element.
         * */
        this.backdropClass = 'overlay-backdrop';
        /**
         * If true then mouse clicks by backdrop will close a dialog.
         * */
        this.closeOnBackdropClick = true;
        /**
         * If true then escape press will close a dialog.
         * */
        this.closeOnEsc = true;
        /**
         * Disables scroll on content under dialog if true and does nothing otherwise.
         * */
        this.hasScroll = false;
        /**
         * Focuses dialog automatically after open if true.
         * */
        this.autoFocus = true;
        Object.assign(this, config);
    }
    return NbDialogConfig;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbDialogRef` helps to manipulate dialog after it was created.
 * The dialog can be dismissed by using `close` method of the dialogRef.
 * You can access rendered component as `content` property of the dialogRef.
 * `onBackdropClick` streams click events on the backdrop of the dialog.
 * */
var NbDialogRef = /** @class */ (function () {
    function NbDialogRef(overlayRef) {
        this.overlayRef = overlayRef;
        this.onClose$ = new rxjs.Subject();
        this.onClose = this.onClose$.asObservable();
        this.onBackdropClick = this.overlayRef.backdropClick();
    }
    /**
     * Hides dialog.
     * */
    NbDialogRef.prototype.close = function (res) {
        this.overlayRef.detach();
        this.overlayRef.dispose();
        this.onClose$.next(res);
        this.onClose$.complete();
    };
    return NbDialogRef;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$112 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$75 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Container component for each dialog.
 * All the dialogs will be attached to it.
 * // TODO add animations
 * */
var NbDialogContainerComponent = /** @class */ (function () {
    function NbDialogContainerComponent(config, elementRef, focusTrapFactory) {
        this.config = config;
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
    }
    NbDialogContainerComponent.prototype.ngOnInit = function () {
        if (this.config.autoFocus) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            this.focusTrap.blurPreviouslyFocusedElement();
            this.focusTrap.focusInitialElement();
        }
    };
    NbDialogContainerComponent.prototype.ngOnDestroy = function () {
        if (this.config.autoFocus && this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
    };
    NbDialogContainerComponent.prototype.attachComponentPortal = function (portal) {
        return this.portalOutlet.attachComponentPortal(portal);
    };
    NbDialogContainerComponent.prototype.attachTemplatePortal = function (portal) {
        return this.portalOutlet.attachTemplatePortal(portal);
    };
    __decorate$112([
        i0.ViewChild(NbPortalOutletDirective),
        __metadata$75("design:type", NbPortalOutletDirective)
    ], NbDialogContainerComponent.prototype, "portalOutlet", void 0);
    NbDialogContainerComponent = __decorate$112([
        i0.Component({
            selector: 'nb-dialog-container',
            template: '<ng-template nbPortalOutlet></ng-template>',
        }),
        __metadata$75("design:paramtypes", [NbDialogConfig,
            i0.ElementRef,
            NbFocusTrapFactoryService])
    ], NbDialogContainerComponent);
    return NbDialogContainerComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __assign$2 = (this && this.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
var __decorate$111 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$74 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$18 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The `NbDialogService` helps to open dialogs.
 *
 * @stacked-example(Showcase, dialog/dialog-showcase.component)
 *
 * A new dialog is opened by calling the `open` method with a component to be loaded and an optional configuration.
 * `open` method will return `NbDialogRef` that can be used for the further manipulations.
 *
 * ### Installation
 *
 * Import `NbDialogModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbDialogModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install it with `NbDialogModule.forChild()`:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbDialogModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * ```ts
 * const dialogRef = this.dialogService.open(MyDialogComponent, { ... });
 * ```
 *
 * `NbDialogRef` gives capability access reference to the rendered dialog component,
 * destroy dialog and some other options described below.
 *
 * Also, you can inject `NbDialogRef` in dialog component.
 *
 * ```ts
 * this.dialogService.open(MyDialogComponent, { ... });
 *
 * // my-dialog.component.ts
 * constructor(protected dialogRef: NbDialogRef) {
 * }
 *
 * close() {
 *   this.dialogRef.close();
 * }
 * ```
 *
 * Instead of component you can create dialog from TemplateRef:
 *
 * @stacked-example(Template ref, dialog/dialog-template.component)
 *
 * The dialog may return result through `NbDialogRef`. Calling component can receive this result with `onClose`
 * stream of `NbDialogRef`.
 *
 * @stacked-example(Result, dialog/dialog-result.component)
 *
 * ### Configuration
 *
 * As we mentioned above, `open` method of the `NbDialogService` may receive optional configuration options.
 * Also, you can provide global dialogs configuration through `NbDialogModule.forRoot({ ... })`.
 *
 * This config may contain the following:
 *
 * `context` - both, template and component may receive data through `config.context` property.
 * For components, this data will be assigned through inputs.
 * For templates, you can access it inside template as $implicit.
 *
 * ```ts
 * this.dialogService.open(template, { context: 'pass data in template' });
 * ```
 *
 * ```html
 * <ng-template let-some-additional-data>
 *   {{ some-additional-data }}
 * <ng-template/>
 * ```
 *
 * `hasBackdrop` - determines is service have to render backdrop under the dialog.
 * Default is true.
 * @stacked-example(Backdrop, dialog/dialog-has-backdrop.component)
 *
 * `closeOnBackdropClick` - close dialog on backdrop click if true.
 * Default is true.
 * @stacked-example(Backdrop click, dialog/dialog-backdrop-click.component)
 *
 * `closeOnEsc` - close dialog on escape button on the keyboard.
 * Default is true.
 * @stacked-example(Escape hit, dialog/dialog-esc.component)
 *
 * `hasScroll` - Disables scroll on content under dialog if true and does nothing otherwise.
 * Default is false.
 * Please, open dialogs in the separate window and try to scroll.
 * @stacked-example(Scroll, dialog/dialog-scroll.component)
 *
 * `autoFocus` - Focuses dialog automatically after open if true. It's useful to prevent misclicks on
 * trigger elements and opening multiple dialogs.
 * Default is true.
 *
 * As you can see, if you open dialog with auto focus dialog will focus first focusable element
 * or just blur previously focused automatically.
 * Otherwise, without auto focus, the focus will stay on the previously focused element.
 * Please, open dialogs in the separate window and try to click on the button without focus
 * and then hit space any times. Multiple same dialogs will be opened.
 * @stacked-example(Auto focus, dialog/dialog-auto-focus.component)
 * */
var NbDialogService = /** @class */ (function () {
    function NbDialogService(document, globalConfig, positionBuilder, overlay, injector, cfr) {
        this.document = document;
        this.globalConfig = globalConfig;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.injector = injector;
        this.cfr = cfr;
    }
    /**
     * Opens new instance of the dialog, may receive optional config.
     * */
    NbDialogService.prototype.open = function (content, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        var config = new NbDialogConfig(__assign$2({}, this.globalConfig, userConfig));
        var overlayRef = this.createOverlay(config);
        var dialogRef = new NbDialogRef(overlayRef);
        var container = this.createContainer(config, overlayRef);
        this.createContent(config, content, container, dialogRef);
        this.registerCloseListeners(config, overlayRef, dialogRef);
        return dialogRef;
    };
    NbDialogService.prototype.createOverlay = function (config) {
        var positionStrategy = this.createPositionStrategy();
        var scrollStrategy = this.createScrollStrategy(config.hasScroll);
        return this.overlay.create({
            positionStrategy: positionStrategy,
            scrollStrategy: scrollStrategy,
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
        });
    };
    NbDialogService.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .global()
            .centerVertically()
            .centerHorizontally();
    };
    NbDialogService.prototype.createScrollStrategy = function (hasScroll) {
        if (hasScroll) {
            return this.overlay.scrollStrategies.noop();
        }
        else {
            return this.overlay.scrollStrategies.block();
        }
    };
    NbDialogService.prototype.createContainer = function (config, overlayRef) {
        var injector = new NbPortalInjector(this.createInjector(config), new WeakMap([[NbDialogConfig, config]]));
        var containerPortal = new NbComponentPortal(NbDialogContainerComponent, null, injector, this.cfr);
        var containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    };
    NbDialogService.prototype.createContent = function (config, content, container, dialogRef) {
        if (content instanceof i0.TemplateRef) {
            var portal = this.createTemplatePortal(config, content, dialogRef);
            container.attachTemplatePortal(portal);
        }
        else {
            var portal = this.createComponentPortal(config, content, dialogRef);
            dialogRef.componentRef = container.attachComponentPortal(portal);
            if (config.context) {
                Object.assign(dialogRef.componentRef.instance, __assign$2({}, config.context));
            }
        }
    };
    NbDialogService.prototype.createTemplatePortal = function (config, content, dialogRef) {
        return new NbTemplatePortal(content, null, { $implicit: config.context, dialogRef: dialogRef });
    };
    /**
     * We're creating portal with custom injector provided through config or using global injector.
     * This approach provides us capability inject `NbDialogRef` in dialog component.
     * */
    NbDialogService.prototype.createComponentPortal = function (config, content, dialogRef) {
        var injector = this.createInjector(config);
        var portalInjector = new NbPortalInjector(injector, new WeakMap([[NbDialogRef, dialogRef]]));
        return new NbComponentPortal(content, config.viewContainerRef, portalInjector);
    };
    NbDialogService.prototype.createInjector = function (config) {
        return config.viewContainerRef && config.viewContainerRef.injector || this.injector;
    };
    NbDialogService.prototype.registerCloseListeners = function (config, overlayRef, dialogRef) {
        if (config.closeOnBackdropClick) {
            overlayRef.backdropClick().subscribe(function () { return dialogRef.close(); });
        }
        if (config.closeOnEsc) {
            rxjs.fromEvent(this.document, 'keyup')
                .pipe(rxjs_operators.filter(function (event) { return event.keyCode === 27; }))
                .subscribe(function () { return dialogRef.close(); });
        }
    };
    NbDialogService = __decorate$111([
        i0.Injectable(),
        __param$18(0, i0.Inject(NB_DOCUMENT)),
        __param$18(1, i0.Inject(NB_DIALOG_CONFIG)),
        __metadata$74("design:paramtypes", [Object, Object, NbPositionBuilderService,
            NbOverlayService,
            i0.Injector,
            i0.ComponentFactoryResolver])
    ], NbDialogService);
    return NbDialogService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$113 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbDialogModule = /** @class */ (function () {
    function NbDialogModule() {
    }
    NbDialogModule_1 = NbDialogModule;
    NbDialogModule.forRoot = function (dialogConfig) {
        if (dialogConfig === void 0) { dialogConfig = {}; }
        return {
            ngModule: NbDialogModule_1,
            providers: [
                NbDialogService,
                { provide: NB_DIALOG_CONFIG, useValue: dialogConfig },
            ],
        };
    };
    NbDialogModule.forChild = function (dialogConfig) {
        if (dialogConfig === void 0) { dialogConfig = {}; }
        return {
            ngModule: NbDialogModule_1,
            providers: [
                NbDialogService,
                { provide: NB_DIALOG_CONFIG, useValue: dialogConfig },
            ],
        };
    };
    var NbDialogModule_1;
    NbDialogModule = NbDialogModule_1 = __decorate$113([
        i0.NgModule({
            imports: [NbSharedModule, NbOverlayModule],
            declarations: [NbDialogContainerComponent],
            entryComponents: [NbDialogContainerComponent],
        })
    ], NbDialogModule);
    return NbDialogModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbToastStatus;
(function (NbToastStatus) {
    NbToastStatus["SUCCESS"] = "success";
    NbToastStatus["INFO"] = "info";
    NbToastStatus["WARNING"] = "warning";
    NbToastStatus["PRIMARY"] = "primary";
    NbToastStatus["DANGER"] = "danger";
    NbToastStatus["DEFAULT"] = "default";
})(NbToastStatus || (NbToastStatus = {}));
var NbToast = /** @class */ (function () {
    function NbToast() {
    }
    return NbToast;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$117 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$78 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-bg
 * toastr-padding
 * toastr-fg
 * toastr-border
 * toastr-border-radius
 * toastr-border-color
 * */
/**
 * TODO
 * Remove svg icons, include them in font.
 * */
var NbToastComponent = /** @class */ (function () {
    function NbToastComponent() {
        this.destroy = new i0.EventEmitter();
    }
    Object.defineProperty(NbToastComponent.prototype, "success", {
        get: function () {
            return this.toast.config.status === NbToastStatus.SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "info", {
        get: function () {
            return this.toast.config.status === NbToastStatus.INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "warning", {
        get: function () {
            return this.toast.config.status === NbToastStatus.WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "primary", {
        get: function () {
            return this.toast.config.status === NbToastStatus.PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "danger", {
        get: function () {
            return this.toast.config.status === NbToastStatus.DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "default", {
        get: function () {
            return this.toast.config.status === NbToastStatus.DEFAULT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "destroyByClick", {
        get: function () {
            return this.toast.config.destroyByClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "hasIcon", {
        get: function () {
            return this.toast.config.hasIcon && this.toast.config.status !== NbToastStatus.DEFAULT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "customIcon", {
        get: function () {
            return !!this.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "icon", {
        get: function () {
            return this.toast.config.icon;
        },
        enumerable: true,
        configurable: true
    });
    NbToastComponent.prototype.onClick = function () {
        this.destroy.emit();
    };
    __decorate$117([
        i0.Input(),
        __metadata$78("design:type", NbToast)
    ], NbToastComponent.prototype, "toast", void 0);
    __decorate$117([
        i0.Output(),
        __metadata$78("design:type", i0.EventEmitter)
    ], NbToastComponent.prototype, "destroy", void 0);
    __decorate$117([
        i0.HostBinding('class.success'),
        __metadata$78("design:type", Boolean),
        __metadata$78("design:paramtypes", [])
    ], NbToastComponent.prototype, "success", null);
    __decorate$117([
        i0.HostBinding('class.info'),
        __metadata$78("design:type", Boolean),
        __metadata$78("design:paramtypes", [])
    ], NbToastComponent.prototype, "info", null);
    __decorate$117([
        i0.HostBinding('class.warning'),
        __metadata$78("design:type", Boolean),
        __metadata$78("design:paramtypes", [])
    ], NbToastComponent.prototype, "warning", null);
    __decorate$117([
        i0.HostBinding('class.primary'),
        __metadata$78("design:type", Boolean),
        __metadata$78("design:paramtypes", [])
    ], NbToastComponent.prototype, "primary", null);
    __decorate$117([
        i0.HostBinding('class.danger'),
        __metadata$78("design:type", Boolean),
        __metadata$78("design:paramtypes", [])
    ], NbToastComponent.prototype, "danger", null);
    __decorate$117([
        i0.HostBinding('class.default'),
        __metadata$78("design:type", Boolean),
        __metadata$78("design:paramtypes", [])
    ], NbToastComponent.prototype, "default", null);
    __decorate$117([
        i0.HostBinding('class.destroy-by-click'),
        __metadata$78("design:type", Boolean),
        __metadata$78("design:paramtypes", [])
    ], NbToastComponent.prototype, "destroyByClick", null);
    __decorate$117([
        i0.HostBinding('class.has-icon'),
        __metadata$78("design:type", Boolean),
        __metadata$78("design:paramtypes", [])
    ], NbToastComponent.prototype, "hasIcon", null);
    __decorate$117([
        i0.HostBinding('class.custom-icon'),
        __metadata$78("design:type", Boolean),
        __metadata$78("design:paramtypes", [])
    ], NbToastComponent.prototype, "customIcon", null);
    __decorate$117([
        i0.HostListener('click'),
        __metadata$78("design:type", Function),
        __metadata$78("design:paramtypes", []),
        __metadata$78("design:returntype", void 0)
    ], NbToastComponent.prototype, "onClick", null);
    NbToastComponent = __decorate$117([
        i0.Component({
            selector: 'nb-toast',
            styles: [":host{display:flex;align-items:center;width:25rem;margin:0.5rem;opacity:0.9}:host .title{font-weight:800;margin-right:0.25rem}:host>.content-container{line-height:1.25}:host>.content-container>.message{font-weight:300}:host.default .content-container,:host:not(.has-icon) .content-container{display:flex;flex-direction:row}:host.destroy-by-click{cursor:pointer}:host.destroy-by-click:hover{opacity:1}:host .icon{font-size:2.5rem}:host svg{width:2.5rem;height:2.5rem} "],
            template: "<i class=\"icon {{ icon }}\" *ngIf=\"hasIcon\"></i> <div class=\"content-container\"> <span class=\"title\">{{ toast.title }}</span> <div class=\"message\">{{ toast.message }}</div> </div> ",
        })
    ], NbToastComponent);
    return NbToastComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$116 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$77 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var voidState = _angular_animations.style({
    transform: 'translateX({{ direction }}110%)',
    height: 0,
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    marginBottom: '0',
});
var defaultOptions = { params: { direction: '' } };
var NbToastrContainerComponent = /** @class */ (function () {
    function NbToastrContainerComponent(layoutDirection, positionHelper) {
        this.layoutDirection = layoutDirection;
        this.positionHelper = positionHelper;
        this.content = [];
        this.alive = true;
    }
    NbToastrContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutDirection.onDirectionChange()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.onDirectionChange(); });
    };
    NbToastrContainerComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbToastrContainerComponent.prototype.onDirectionChange = function () {
        var direction = this.positionHelper.isRightPosition(this.position) ? '' : '-';
        this.fadeIn = { value: '', params: { direction: direction } };
    };
    __decorate$116([
        i0.Input(),
        __metadata$77("design:type", Array)
    ], NbToastrContainerComponent.prototype, "content", void 0);
    __decorate$116([
        i0.Input(),
        __metadata$77("design:type", Object)
    ], NbToastrContainerComponent.prototype, "context", void 0);
    __decorate$116([
        i0.Input(),
        __metadata$77("design:type", String)
    ], NbToastrContainerComponent.prototype, "position", void 0);
    __decorate$116([
        i0.ViewChildren(NbToastComponent),
        __metadata$77("design:type", i0.QueryList)
    ], NbToastrContainerComponent.prototype, "toasts", void 0);
    NbToastrContainerComponent = __decorate$116([
        i0.Component({
            selector: 'nb-toastr-container',
            template: "\n    <nb-toast [@fadeIn]=\"fadeIn\" *ngFor=\"let toast of content\" [toast]=\"toast\"></nb-toast>",
            animations: [
                _angular_animations.trigger('fadeIn', [
                    _angular_animations.transition(':enter', [voidState, _angular_animations.animate(100)], defaultOptions),
                    _angular_animations.transition(':leave', [_angular_animations.animate(100, voidState)], defaultOptions),
                ]),
            ],
        }),
        __metadata$77("design:paramtypes", [NbLayoutDirectionService,
            NbPositionHelper])
    ], NbToastrContainerComponent);
    return NbToastrContainerComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_TOASTR_CONFIG = new i0.InjectionToken('Default toastr options');
/**
 * The `NbToastrConfig` class describes configuration of the `NbToastrService.show` and global toastr configuration.
 * */
var NbToastrConfig = /** @class */ (function () {
    function NbToastrConfig(config) {
        var _a;
        /**
         * Determines where on the screen toast have to be rendered.
         * */
        this.position = exports.NbGlobalLogicalPosition.TOP_END;
        /**
         * Status chooses color scheme for the toast.
         * */
        this.status = NbToastStatus.PRIMARY;
        /**
         * Duration is timeout between toast appears and disappears.
         * */
        this.duration = 3000;
        /**
         * Destroy by click means you can hide the toast by clicking it.
         * */
        this.destroyByClick = true;
        /**
         * If preventDuplicates is true then the next toast with the same title and message will not be rendered.
         * */
        this.preventDuplicates = false;
        /**
         * Determines render icon or not.
         * */
        this.hasIcon = true;
        /**
         * Icon class that can be provided to render custom icon.
         * */
        this.icon = 'nb-email';
        /**
         * Toast status icon-class mapping.
         * */
        this.icons = (_a = {},
            _a[NbToastStatus.DANGER] = 'nb-danger',
            _a[NbToastStatus.SUCCESS] = 'nb-checkmark-circle',
            _a[NbToastStatus.INFO] = 'nb-help',
            _a[NbToastStatus.WARNING] = 'nb-alert',
            _a[NbToastStatus.PRIMARY] = 'nb-email',
            _a);
        this.patchIcon(config);
        Object.assign(this, config);
    }
    NbToastrConfig.prototype.patchIcon = function (config) {
        if (!('icon' in config)) {
            config.icon = this.icons[config.status || NbToastStatus.PRIMARY];
        }
    };
    return NbToastrConfig;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __assign$3 = (this && this.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};
var __decorate$115 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$76 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$19 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NbToastRef = /** @class */ (function () {
    function NbToastRef(toastContainer, toast) {
        this.toastContainer = toastContainer;
        this.toast = toast;
    }
    NbToastRef.prototype.close = function () {
        this.toastContainer.destroy(this.toast);
    };
    return NbToastRef;
}());
var NbToastContainer = /** @class */ (function () {
    function NbToastContainer(position, containerRef, positionHelper) {
        this.position = position;
        this.containerRef = containerRef;
        this.positionHelper = positionHelper;
        this.toasts = [];
    }
    NbToastContainer.prototype.attach = function (toast) {
        if (toast.config.preventDuplicates && this.isDuplicate(toast)) {
            return;
        }
        var toastComponent = this.attachToast(toast);
        if (toast.config.destroyByClick) {
            this.subscribeOnClick(toastComponent, toast);
        }
        if (toast.config.duration) {
            this.setDestroyTimeout(toast);
        }
        this.prevToast = toast;
        return new NbToastRef(this, toast);
    };
    NbToastContainer.prototype.destroy = function (toast) {
        this.toasts = this.toasts.filter(function (t) { return t !== toast; });
        this.updateContainer();
    };
    NbToastContainer.prototype.isDuplicate = function (toast) {
        return this.prevToast
            && this.prevToast.message === toast.message
            && this.prevToast.title === toast.title;
    };
    NbToastContainer.prototype.attachToast = function (toast) {
        if (this.positionHelper.isTopPosition(toast.config.position)) {
            return this.attachToTop(toast);
        }
        else {
            return this.attachToBottom(toast);
        }
    };
    NbToastContainer.prototype.attachToTop = function (toast) {
        this.toasts.unshift(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.first;
    };
    NbToastContainer.prototype.attachToBottom = function (toast) {
        this.toasts.push(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.last;
    };
    NbToastContainer.prototype.setDestroyTimeout = function (toast) {
        var _this = this;
        setTimeout(function () { return _this.destroy(toast); }, toast.config.duration);
    };
    NbToastContainer.prototype.subscribeOnClick = function (toastComponent, toast) {
        var _this = this;
        toastComponent.destroy.subscribe(function () { return _this.destroy(toast); });
    };
    NbToastContainer.prototype.updateContainer = function () {
        patch(this.containerRef, { content: this.toasts, position: this.position });
    };
    return NbToastContainer;
}());
var NbToastrContainerRegistry = /** @class */ (function () {
    function NbToastrContainerRegistry(overlay, positionBuilder, positionHelper, cfr) {
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.positionHelper = positionHelper;
        this.cfr = cfr;
        this.overlays = new Map();
    }
    NbToastrContainerRegistry.prototype.get = function (position) {
        var logicalPosition = this.positionHelper.toLogicalPosition(position);
        if (!this.overlays.has(logicalPosition)) {
            this.instantiateContainer(logicalPosition);
        }
        return this.overlays.get(logicalPosition);
    };
    NbToastrContainerRegistry.prototype.instantiateContainer = function (position) {
        var container = this.createContainer(position);
        this.overlays.set(position, container);
    };
    NbToastrContainerRegistry.prototype.createContainer = function (position) {
        var positionStrategy = this.positionBuilder.global().position(position);
        var ref = this.overlay.create({ positionStrategy: positionStrategy });
        var containerRef = ref.attach(new NbComponentPortal(NbToastrContainerComponent, null, null, this.cfr));
        return new NbToastContainer(position, containerRef, this.positionHelper);
    };
    NbToastrContainerRegistry = __decorate$115([
        i0.Injectable(),
        __metadata$76("design:paramtypes", [NbOverlayService,
            NbPositionBuilderService,
            NbPositionHelper,
            i0.ComponentFactoryResolver])
    ], NbToastrContainerRegistry);
    return NbToastrContainerRegistry;
}());
/**
 * The `NbToastrService` provides a capability to build toast notifications.
 *
 * @stacked-example(Showcase, toastr/toastr-showcase.component)
 *
 * `NbToastrService.show(message, title, config)` accepts three params, title and config are optional.
 *
 * ### Installation
 *
 * Import `NbToastrModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbToastrModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * Calling `NbToastrService.show(...)` will render new toast and return `NbToastrRef` with
 * help of which you may close newly created toast by calling `close` method.
 *
 * ```ts
 * const toastRef: NbToastRef = this.toastrService.show(...);
 * toastRef.close();
 * ```
 *
 * Config accepts following options:
 *
 * `position` - determines where on the screen toast will be rendered.
 * Default is `top-end`.
 *
 * @stacked-example(Position, toastr/toastr-positions.component)
 *
 * `status` - coloring and icon of the toast.
 * Default is `primary`
 *
 * @stacked-example(Status, toastr/toastr-statuses.component)
 *
 * `duration` - the time after which the toast will be destroyed.
 * `0` means endless toast, that may be destroyed by click only.
 * Default is 3000 ms.
 *
 * @stacked-example(Duration, toastr/toastr-duration.component)
 *
 * `destroyByClick` - provides a capability to destroy toast by click.
 * Default is true.
 *
 * @stacked-example(Destroy by click, toastr/toastr-destroy-by-click.component)
 *
 * `preventDuplicates` - don't create new toast if it has the same title and the same message with previous one.
 * Default is false.
 *
 * @stacked-example(Prevent duplicates, toastr/toastr-prevent-duplicates.component)
 *
 * `hasIcon` - if true then render toast icon.
 * `icon` - you can pass icon class that will be applied into the toast.
 *
 * @stacked-example(Has icon, toastr/toastr-icon.component)
 * */
var NbToastrService = /** @class */ (function () {
    function NbToastrService(globalConfig, containerRegistry) {
        this.globalConfig = globalConfig;
        this.containerRegistry = containerRegistry;
    }
    /**
     * Shows toast with message, title and user config.
     * */
    NbToastrService.prototype.show = function (message, title, userConfig) {
        var config = new NbToastrConfig(__assign$3({}, this.globalConfig, userConfig));
        var container = this.containerRegistry.get(config.position);
        var toast = { message: message, title: title, config: config };
        return container.attach(toast);
    };
    /**
     * Shows success toast with message, title and user config.
     * */
    NbToastrService.prototype.success = function (message, title, config) {
        return this.show(message, title, __assign$3({}, config, { status: NbToastStatus.SUCCESS }));
    };
    /**
     * Shows info toast with message, title and user config.
     * */
    NbToastrService.prototype.info = function (message, title, config) {
        return this.show(message, title, __assign$3({}, config, { status: NbToastStatus.INFO }));
    };
    /**
     * Shows warning toast with message, title and user config.
     * */
    NbToastrService.prototype.warning = function (message, title, config) {
        return this.show(message, title, __assign$3({}, config, { status: NbToastStatus.WARNING }));
    };
    /**
     * Shows primary toast with message, title and user config.
     * */
    NbToastrService.prototype.primary = function (message, title, config) {
        return this.show(message, title, __assign$3({}, config, { status: NbToastStatus.PRIMARY }));
    };
    /**
     * Shows danger toast with message, title and user config.
     * */
    NbToastrService.prototype.danger = function (message, title, config) {
        return this.show(message, title, __assign$3({}, config, { status: NbToastStatus.DANGER }));
    };
    /**
     * Shows default toast with message, title and user config.
     * */
    NbToastrService.prototype.default = function (message, title, config) {
        return this.show(message, title, __assign$3({}, config, { status: NbToastStatus.DEFAULT }));
    };
    NbToastrService = __decorate$115([
        i0.Injectable(),
        __param$19(0, i0.Inject(NB_TOASTR_CONFIG)),
        __metadata$76("design:paramtypes", [NbToastrConfig,
            NbToastrContainerRegistry])
    ], NbToastrService);
    return NbToastrService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$114 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbToastrModule = /** @class */ (function () {
    function NbToastrModule() {
    }
    NbToastrModule_1 = NbToastrModule;
    NbToastrModule.forRoot = function (toastrConfig) {
        if (toastrConfig === void 0) { toastrConfig = {}; }
        return {
            ngModule: NbToastrModule_1,
            providers: [
                NbToastrService,
                NbToastrContainerRegistry,
                { provide: NB_TOASTR_CONFIG, useValue: toastrConfig },
            ],
        };
    };
    var NbToastrModule_1;
    NbToastrModule = NbToastrModule_1 = __decorate$114([
        i0.NgModule({
            imports: [NbSharedModule, NbOverlayModule],
            declarations: [NbToastrContainerComponent, NbToastComponent],
            entryComponents: [NbToastrContainerComponent, NbToastComponent],
        })
    ], NbToastrModule);
    return NbToastrModule;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$119 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$79 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-bg
 * tooltip-primary-bg
 * tooltip-info-bg
 * tooltip-success-bg
 * tooltip-warning-bg
 * tooltip-danger-bg
 * tooltip-fg
 * tooltip-shadow
 * tooltip-font-size
 *
 */
var NbTooltipComponent = /** @class */ (function () {
    function NbTooltipComponent() {
        /**
         * Popover position relatively host element.
         * */
        this.position = exports.NbPosition.TOP;
        this.context = {};
    }
    Object.defineProperty(NbTooltipComponent.prototype, "binding", {
        get: function () {
            return this.position + " " + this.context.status + "-tooltip";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTooltipComponent.prototype, "show", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$119([
        i0.Input(),
        __metadata$79("design:type", String)
    ], NbTooltipComponent.prototype, "content", void 0);
    __decorate$119([
        i0.Input(),
        __metadata$79("design:type", String)
    ], NbTooltipComponent.prototype, "position", void 0);
    __decorate$119([
        i0.HostBinding('class'),
        __metadata$79("design:type", Object),
        __metadata$79("design:paramtypes", [])
    ], NbTooltipComponent.prototype, "binding", null);
    __decorate$119([
        i0.HostBinding('@showTooltip'),
        __metadata$79("design:type", Object),
        __metadata$79("design:paramtypes", [])
    ], NbTooltipComponent.prototype, "show", null);
    __decorate$119([
        i0.Input(),
        __metadata$79("design:type", Object)
    ], NbTooltipComponent.prototype, "context", void 0);
    NbTooltipComponent = __decorate$119([
        i0.Component({
            selector: 'nb-tooltip',
            styles: [":host{z-index:10000;border-radius:5px}:host .content{padding:0.5rem 1.25rem;display:flex}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host .icon{font-size:1.25rem}:host span{line-height:1.25rem}:host .icon+span{margin-left:0.5rem}:host.right .icon+span{margin-right:0.5rem}:host .arrow{border-left:5px solid transparent;border-right:5px solid transparent}:host.bottom .arrow{top:-5px;left:calc(50% - 5px)}:host.left .arrow{right:-7px;top:calc(50% - 2px);transform:rotate(90deg)}:host.top .arrow{bottom:-5px;left:calc(50% - 5px);transform:rotate(180deg)}:host.right .arrow{left:-7px;top:calc(50% - 2px);transform:rotate(270deg)} "],
            template: "\n    <span class=\"arrow\"></span>\n    <div class=\"content\">\n      <i *ngIf=\"context?.icon\" class=\"icon {{ context?.icon }}\"></i>\n      <span *ngIf=\"content\">{{ content }}</span>\n    </div>\n  ",
            animations: [
                _angular_animations.trigger('showTooltip', [
                    _angular_animations.state('in', _angular_animations.style({ opacity: 1 })),
                    _angular_animations.transition('void => *', [
                        _angular_animations.style({ opacity: 0 }),
                        _angular_animations.animate(100),
                    ]),
                    _angular_animations.transition('* => void', [
                        _angular_animations.animate(100, _angular_animations.style({ opacity: 0 })),
                    ]),
                ]),
            ],
        })
    ], NbTooltipComponent);
    return NbTooltipComponent;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$120 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$80 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$20 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 *
 * Tooltip directive for small text/icon hints.
 *
 * ### Installation
 *
 * Import `NbTooltipModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbTooltipModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * @stacked-example(Showcase, tooltip/tooltip-showcase.component)
 *
 * Tooltip can accept a hint text and/or an icon:
 * @stacked-example(With Icon, tooltip/tooltip-with-icon.component)
 *
 * Same way as Popover, tooltip can accept placement position with `nbTooltipPlacement` proprety:
 * @stacked-example(Placements, tooltip/tooltip-placements.component)
 *
 * It is also possible to specify tooltip color using `nbTooltipStatus` property:
 * @stacked-example(Colored Tooltips, tooltip/tooltip-colors.component)
 *
 */
var NbTooltipDirective = /** @class */ (function () {
    function NbTooltipDirective(document, hostRef, positionBuilder, overlay, componentFactoryResolver) {
        this.document = document;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         */
        this.position = exports.NbPosition.TOP;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         */
        this.adjustment = exports.NbAdjustment.CLOCKWISE;
        this.alive = true;
    }
    Object.defineProperty(NbTooltipDirective.prototype, "icon", {
        /**
         *
         * @param {string} icon
         */
        set: function (icon) {
            this.context = Object.assign(this.context, { icon: icon });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTooltipDirective.prototype, "status", {
        /**
         *
         * @param {string} status
         */
        set: function (status) {
            this.context = Object.assign(this.context, { status: status });
        },
        enumerable: true,
        configurable: true
    });
    NbTooltipDirective.prototype.ngAfterViewInit = function () {
        this.subscribeOnTriggers();
    };
    NbTooltipDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbTooltipDirective.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openTooltip();
    };
    NbTooltipDirective.prototype.hide = function () {
        this.ref.detach();
    };
    NbTooltipDirective.prototype.toggle = function () {
        if (this.ref && this.ref.hasAttached()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    NbTooltipDirective.prototype.createOverlay = function () {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.subscribeOnPositionChange();
    };
    NbTooltipDirective.prototype.openTooltip = function () {
        this.container = createContainer(this.ref, NbTooltipComponent, {
            position: this.position,
            content: this.content,
            context: this.context,
            cfr: this.componentFactoryResolver,
        }, this.componentFactoryResolver);
    };
    NbTooltipDirective.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(this.position)
            .adjustment(this.adjustment)
            .offset(8);
    };
    NbTooltipDirective.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(exports.NbTrigger.HINT)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.container; })
            .build();
    };
    NbTooltipDirective.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy.positionChange
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return patch(_this.container, { position: position }); });
    };
    NbTooltipDirective.prototype.subscribeOnTriggers = function () {
        var _this = this;
        var triggerStrategy = this.createTriggerStrategy();
        triggerStrategy.show$.pipe(rxjs_operators.takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.show(); });
        triggerStrategy.hide$.pipe(rxjs_operators.takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.hide(); });
    };
    __decorate$120([
        i0.Input('nbTooltip'),
        __metadata$80("design:type", String)
    ], NbTooltipDirective.prototype, "content", void 0);
    __decorate$120([
        i0.Input('nbTooltipPlacement'),
        __metadata$80("design:type", String)
    ], NbTooltipDirective.prototype, "position", void 0);
    __decorate$120([
        i0.Input('nbTooltipAdjustment'),
        __metadata$80("design:type", String)
    ], NbTooltipDirective.prototype, "adjustment", void 0);
    __decorate$120([
        i0.Input('nbTooltipIcon'),
        __metadata$80("design:type", String),
        __metadata$80("design:paramtypes", [String])
    ], NbTooltipDirective.prototype, "icon", null);
    __decorate$120([
        i0.Input('nbTooltipStatus'),
        __metadata$80("design:type", String),
        __metadata$80("design:paramtypes", [String])
    ], NbTooltipDirective.prototype, "status", null);
    NbTooltipDirective = __decorate$120([
        i0.Directive({ selector: '[nbTooltip]' }),
        __param$20(0, i0.Inject(NB_DOCUMENT)),
        __metadata$80("design:paramtypes", [Object, i0.ElementRef,
            NbPositionBuilderService,
            NbOverlayService,
            i0.ComponentFactoryResolver])
    ], NbTooltipDirective);
    return NbTooltipDirective;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$118 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbTooltipModule = /** @class */ (function () {
    function NbTooltipModule() {
    }
    NbTooltipModule = __decorate$118([
        i0.NgModule({
            imports: [NbSharedModule, NbOverlayModule],
            declarations: [NbTooltipComponent, NbTooltipDirective],
            exports: [NbTooltipDirective],
            entryComponents: [NbTooltipComponent],
        })
    ], NbTooltipModule);
    return NbTooltipModule;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$123 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$82 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$22 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NbOptionComponent = /** @class */ (function () {
    function NbOptionComponent(parent, elementRef, cd) {
        this.parent = parent;
        this.elementRef = elementRef;
        this.cd = cd;
        /**
         * Fires value on click.
         * */
        this.selectionChange = new i0.EventEmitter();
        this.selected = false;
        this.disabled = false;
        this.alive = true;
    }
    Object.defineProperty(NbOptionComponent.prototype, "setDisabled", {
        set: function (disabled) {
            this.disabled = convertToBoolProperty(disabled);
        },
        enumerable: true,
        configurable: true
    });
    NbOptionComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Object.defineProperty(NbOptionComponent.prototype, "withCheckbox", {
        /**
         * Determines should we render checkbox.
         * */
        get: function () {
            return this.multiple && !!this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "content", {
        get: function () {
            return this.elementRef.nativeElement.textContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "multiple", {
        get: function () {
            return this.parent.multiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "selectedClass", {
        get: function () {
            return this.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "disabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    NbOptionComponent.prototype.onClick = function () {
        this.selectionChange.emit(this);
    };
    NbOptionComponent.prototype.select = function () {
        this.selected = true;
        this.cd.markForCheck();
        this.cd.detectChanges();
    };
    NbOptionComponent.prototype.deselect = function () {
        /**
         * In case of changing options in runtime the reference to the selected option will be kept in select component.
         * This may lead to exceptions with detecting changes in destroyed component.
         * */
        if (!this.alive) {
            return;
        }
        this.selected = false;
        this.cd.markForCheck();
        this.cd.detectChanges();
    };
    __decorate$123([
        i0.Input(),
        __metadata$82("design:type", Object)
    ], NbOptionComponent.prototype, "value", void 0);
    __decorate$123([
        i0.Input('disabled'),
        __metadata$82("design:type", Boolean),
        __metadata$82("design:paramtypes", [Boolean])
    ], NbOptionComponent.prototype, "setDisabled", null);
    __decorate$123([
        i0.Output(),
        __metadata$82("design:type", i0.EventEmitter)
    ], NbOptionComponent.prototype, "selectionChange", void 0);
    __decorate$123([
        i0.HostBinding('class.selected'),
        __metadata$82("design:type", Boolean),
        __metadata$82("design:paramtypes", [])
    ], NbOptionComponent.prototype, "selectedClass", null);
    __decorate$123([
        i0.HostBinding('class.disabled'),
        __metadata$82("design:type", Boolean),
        __metadata$82("design:paramtypes", [])
    ], NbOptionComponent.prototype, "disabledClass", null);
    __decorate$123([
        i0.HostListener('click'),
        __metadata$82("design:type", Function),
        __metadata$82("design:paramtypes", []),
        __metadata$82("design:returntype", void 0)
    ], NbOptionComponent.prototype, "onClick", null);
    NbOptionComponent = __decorate$123([
        i0.Component({
            selector: 'nb-option',
            styles: ["/*! * @license * Copyright Akveo. All Rights Reserved. * Licensed under the MIT License. See License.txt in the project root for license information. */:host{display:block}:host.disabled{pointer-events:none}:host:hover{cursor:pointer}:host nb-checkbox{pointer-events:none} "],
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            template: "\n    <nb-checkbox *ngIf=\"withCheckbox\" [(ngModel)]=\"selected\">\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n    </nb-checkbox>\n\n    <ng-container *ngIf=\"!withCheckbox\">\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n    </ng-container>\n\n    <ng-template #content>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
        }),
        __param$22(0, i0.Inject(i0.forwardRef(function () { return NbSelectComponent; }))),
        __metadata$82("design:paramtypes", [Object, i0.ElementRef,
            i0.ChangeDetectorRef])
    ], NbOptionComponent);
    return NbOptionComponent;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$122 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$81 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$21 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NbSelectLabelComponent = /** @class */ (function () {
    function NbSelectLabelComponent() {
    }
    NbSelectLabelComponent = __decorate$122([
        i0.Component({
            selector: 'nb-select-label',
            template: '<ng-content></ng-content>',
        })
    ], NbSelectLabelComponent);
    return NbSelectLabelComponent;
}());
/**
 * The `NbSelectComponent` provides a capability to select one of the passed items.
 *
 * @stacked-example(Showcase, select/select-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSelectModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSelectModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use it as the multi-select control you have to mark it as `multiple`.
 * In this case, `nb-select` will work only with arrays - accept arrays and propagate arrays.
 *
 * @stacked-example(Multiple, select/select-multiple.component)
 *
 * Items without values will clean selection.
 *
 * @stacked-example(Clean selection, select/select-clean.component)
 *
 * Select may be bounded using `selected` input:
 *
 * ```html
 * <nb-select [(selected)]="selected"></nb-selected>
 * ```
 *
 * Or you can bind control with form controls or ngModel:
 *
 * @stacked-example(Select form binding, select/select-form.component)
 *
 * Options in the select may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, select/select-groups.component)
 *
 * Select may have a placeholder that will be shown when nothing selected:
 *
 * @stacked-example(Placeholder, select/select-placeholder.component)
 *
 * You can disable select, options and whole groups.
 *
 * @stacked-example(Disabled select, select/select-disabled.component)
 *
 * Also, the custom label may be provided in select.
 * This custom label will be used for instead placeholder when something selected.
 *
 * @stacked-example(Custom label, select/select-label.component)
 *
 * Default `nb-select` size is `medium` and status color is `primary`.
 * Select is available in multiple colors using `status` property:
 *
 * @stacked-example(Select statuses, select/select-status.component)
 *
 * There are four select sizes:
 *
 * @stacked-example(Select sizes, select/select-sizes.component)
 *
 * And two additional style types - `outline`:
 *
 * @stacked-example(Outline select, select/select-outline.component)
 *
 * and `hero`:
 *
 * @stacked-example(Select colors, select/select-hero.component)
 *
 * Select is available in different shapes, that could be combined with the other properties:
 *
 * @stacked-example(Select shapes, select/select-shapes.component)
 *
 *
 * @styles
 *
 * select-border-width:
 * select-max-height:
 * select-bg:
 * select-checkbox-color:
 * select-checkmark-color:
 * select-option-disabled-bg:
 * select-option-disabled-opacity:
 * select-option-padding:
 * */
var NbSelectComponent = /** @class */ (function () {
    function NbSelectComponent(document, overlay, hostRef, positionBuilder, cd) {
        this.document = document;
        this.overlay = overlay;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.cd = cd;
        /**
         * Select status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         */
        this.status = 'primary';
        /**
         * Renders select placeholder if nothing selected.
         * */
        this.placeholder = '';
        /**
         * Will be emitted when selected value changes.
         * */
        this.selectedChange = new i0.EventEmitter();
        this.multiple = false;
        /**
         * List of selected options.
         * */
        this.selectionModel = [];
        /**
         * Current overlay position because of we have to toggle overlayPosition
         * in [ngClass] direction and this directive can use only string.
         */
        this.overlayPosition = '';
        /**
         * Stream of events that will fire when one of the options fire selectionChange event.
         * */
        this.selectionChange$ = new rxjs.Subject();
        this.selectionChange = this.selectionChange$.asObservable();
        this.alive = true;
        /**
         * Function passed through control value accessor to propagate changes.
         * */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    NbSelectComponent_1 = NbSelectComponent;
    Object.defineProperty(NbSelectComponent.prototype, "setSelected", {
        /**
         * Accepts selected item or array of selected items.
         * */
        set: function (value) {
            this.writeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "setMultiple", {
        /**
         * Gives capability just write `multiple` over the element.
         * */
        set: function (multiple) {
            this.multiple = convertToBoolProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "isOpened", {
        /**
         * Determines is select opened.
         * */
        get: function () {
            return this.ref && this.ref.hasAttached();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "isHidden", {
        /**
         * Determines is select hidden.
         * */
        get: function () {
            return !this.isOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "hostWidth", {
        /**
         * Returns width of the select button.
         * */
        get: function () {
            return this.hostRef.nativeElement.getBoundingClientRect().width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "selectionView", {
        /**
         * Content rendered in the label.
         * */
        get: function () {
            if (this.selectionModel.length > 1) {
                return this.selectionModel.map(function (option) { return option.content; }).join(', ');
            }
            return this.selectionModel[0].content;
        },
        enumerable: true,
        configurable: true
    });
    NbSelectComponent.prototype.ngOnInit = function () {
        this.createOverlay();
    };
    NbSelectComponent.prototype.ngAfterViewInit = function () {
        this.triggerStrategy = this.createTriggerStrategy();
        this.subscribeOnTriggers();
        this.subscribeOnPositionChange();
        this.subscribeOnSelectionChange();
    };
    NbSelectComponent.prototype.ngAfterContentInit = function () {
        if (this.queue) {
            this.writeValue(this.queue);
            this.cd.detectChanges();
        }
    };
    NbSelectComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.ref.dispose();
    };
    NbSelectComponent.prototype.show = function () {
        if (this.isHidden) {
            this.ref.attach(this.portal);
            this.cd.markForCheck();
        }
    };
    NbSelectComponent.prototype.hide = function () {
        if (this.isOpened) {
            this.ref.detach();
            this.cd.markForCheck();
        }
    };
    NbSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cd.detectChanges();
    };
    NbSelectComponent.prototype.writeValue = function (value) {
        if (!value) {
            return;
        }
        if (this.options) {
            this.setSelection(value);
        }
        else {
            this.queue = value;
        }
    };
    /**
     * Selects option or clear all selected options if value is null.
     * */
    NbSelectComponent.prototype.handleSelect = function (option) {
        if (option.value) {
            this.selectOption(option);
        }
        else {
            this.reset();
        }
        this.cd.detectChanges();
    };
    /**
     * Deselect all selected options.
     * */
    NbSelectComponent.prototype.reset = function () {
        this.selectionModel.forEach(function (option) { return option.deselect(); });
        this.selectionModel = [];
        this.hide();
        this.button.nativeElement.focus();
        this.emitSelected(null);
    };
    /**
     * Determines how to select option as multiple or single.
     * */
    NbSelectComponent.prototype.selectOption = function (option) {
        if (this.multiple) {
            this.handleMultipleSelect(option);
        }
        else {
            this.handleSingleSelect(option);
        }
    };
    /**
     * Select single option.
     * */
    NbSelectComponent.prototype.handleSingleSelect = function (option) {
        var selected = this.selectionModel.pop();
        if (selected && selected !== option) {
            selected.deselect();
        }
        this.selectionModel = [option];
        option.select();
        this.hide();
        this.button.nativeElement.focus();
        this.emitSelected(option.value);
    };
    /**
     * Select for multiple options.
     * */
    NbSelectComponent.prototype.handleMultipleSelect = function (option) {
        if (option.selected) {
            this.selectionModel = this.selectionModel.filter(function (s) { return s.value !== option.value; });
            option.deselect();
        }
        else {
            this.selectionModel.push(option);
            option.select();
        }
        this.emitSelected(this.selectionModel.map(function (opt) { return opt.value; }));
    };
    NbSelectComponent.prototype.createOverlay = function () {
        var scrollStrategy = this.createScrollStrategy();
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({ positionStrategy: this.positionStrategy, scrollStrategy: scrollStrategy });
    };
    NbSelectComponent.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(exports.NbPosition.BOTTOM)
            .offset(0)
            .adjustment(exports.NbAdjustment.VERTICAL);
    };
    NbSelectComponent.prototype.createScrollStrategy = function () {
        return this.overlay.scrollStrategies.block();
    };
    NbSelectComponent.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(exports.NbTrigger.CLICK)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.getContainer(); })
            .build();
    };
    NbSelectComponent.prototype.subscribeOnTriggers = function () {
        var _this = this;
        this.triggerStrategy.show$
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.show(); });
        this.triggerStrategy.hide$
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function ($event) {
            _this.hide();
            if (!_this.isClickedWithinComponent($event)) {
                _this.onTouched();
            }
        });
    };
    NbSelectComponent.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy.positionChange
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return _this.overlayPosition = position; });
        this.positionStrategy.positionChange
            .pipe(rxjs_operators.take(1))
            .subscribe(function () { return _this.cd.detectChanges(); });
    };
    NbSelectComponent.prototype.subscribeOnSelectionChange = function () {
        var _this = this;
        this.subscribeOnOptionsSelectionChange();
        /**
         * If the user changes provided options list in the runtime we have to handle this
         * and resubscribe on options selection changes event.
         * Otherwise, the user will not be able to select new options.
         * */
        this.options.changes
            .subscribe(function () { return _this.subscribeOnOptionsSelectionChange(); });
        this.selectionChange
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (option) { return _this.handleSelect(option); });
    };
    NbSelectComponent.prototype.getContainer = function () {
        return this.ref && this.ref.hasAttached() && {
            location: {
                nativeElement: this.ref.overlayElement,
            },
        };
    };
    /**
     * Propagate selected value.
     * */
    NbSelectComponent.prototype.emitSelected = function (selected) {
        this.onChange(selected);
        this.selectedChange.emit(selected);
    };
    /**
     * Set selected value in model.
     * */
    NbSelectComponent.prototype.setSelection = function (value) {
        var _this = this;
        var isArray = Array.isArray(value);
        if (this.multiple && !isArray) {
            throw new Error('Can\'t assign single value if select is marked as multiple');
        }
        if (!this.multiple && isArray) {
            throw new Error('Can\'t assign array if select is not marked as multiple');
        }
        this.cleanSelection();
        if (isArray) {
            value.forEach(function (option) { return _this.selectValue(option); });
        }
        else {
            this.selectValue(value);
        }
        this.cd.markForCheck();
        this.cd.detectChanges();
    };
    NbSelectComponent.prototype.cleanSelection = function () {
        this.selectionModel.forEach(function (option) { return option.deselect(); });
        this.selectionModel = [];
    };
    /**
     * Selects value.
     * */
    NbSelectComponent.prototype.selectValue = function (value) {
        var corresponding = this.options.find(function (option) { return option.value === value; });
        if (corresponding) {
            corresponding.select();
            this.selectionModel.push(corresponding);
        }
    };
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    NbSelectComponent.prototype.trySetTouched = function () {
        if (this.isHidden) {
            this.onTouched();
        }
    };
    NbSelectComponent.prototype.isClickedWithinComponent = function ($event) {
        return this.hostRef.nativeElement === $event.target || this.hostRef.nativeElement.contains($event.target);
    };
    NbSelectComponent.prototype.subscribeOnOptionsSelectionChange = function () {
        var _this = this;
        rxjs.merge.apply(void 0, this.options.map(function (it) { return it.selectionChange; })).pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (change) { return _this.selectionChange$.next(change); });
    };
    var NbSelectComponent_1;
    __decorate$122([
        i0.Input(),
        __metadata$81("design:type", String)
    ], NbSelectComponent.prototype, "size", void 0);
    __decorate$122([
        i0.Input(),
        __metadata$81("design:type", String)
    ], NbSelectComponent.prototype, "status", void 0);
    __decorate$122([
        i0.Input(),
        __metadata$81("design:type", String)
    ], NbSelectComponent.prototype, "shape", void 0);
    __decorate$122([
        i0.Input(),
        __metadata$81("design:type", Boolean)
    ], NbSelectComponent.prototype, "hero", void 0);
    __decorate$122([
        i0.Input(),
        __metadata$81("design:type", Boolean)
    ], NbSelectComponent.prototype, "disabled", void 0);
    __decorate$122([
        i0.Input(),
        __metadata$81("design:type", Boolean)
    ], NbSelectComponent.prototype, "fullWidth", void 0);
    __decorate$122([
        i0.Input(),
        __metadata$81("design:type", Boolean)
    ], NbSelectComponent.prototype, "outline", void 0);
    __decorate$122([
        i0.Input(),
        __metadata$81("design:type", String)
    ], NbSelectComponent.prototype, "placeholder", void 0);
    __decorate$122([
        i0.Output(),
        __metadata$81("design:type", i0.EventEmitter)
    ], NbSelectComponent.prototype, "selectedChange", void 0);
    __decorate$122([
        i0.Input('selected'),
        __metadata$81("design:type", Object),
        __metadata$81("design:paramtypes", [Object])
    ], NbSelectComponent.prototype, "setSelected", null);
    __decorate$122([
        i0.Input('multiple'),
        __metadata$81("design:type", Boolean),
        __metadata$81("design:paramtypes", [Boolean])
    ], NbSelectComponent.prototype, "setMultiple", null);
    __decorate$122([
        i0.ContentChildren(NbOptionComponent, { descendants: true }),
        __metadata$81("design:type", i0.QueryList)
    ], NbSelectComponent.prototype, "options", void 0);
    __decorate$122([
        i0.ContentChild(NbSelectLabelComponent),
        __metadata$81("design:type", Object)
    ], NbSelectComponent.prototype, "customLabel", void 0);
    __decorate$122([
        i0.ViewChild(NbPortalDirective),
        __metadata$81("design:type", NbPortalDirective)
    ], NbSelectComponent.prototype, "portal", void 0);
    __decorate$122([
        i0.ViewChild(NbButtonComponent, { read: i0.ElementRef }),
        __metadata$81("design:type", i0.ElementRef)
    ], NbSelectComponent.prototype, "button", void 0);
    NbSelectComponent = NbSelectComponent_1 = __decorate$122([
        i0.Component({
            selector: 'nb-select',
            template: "<button nbButton [size]=\"size\" [status]=\"status\" [shape]=\"shape\" [hero]=\"hero\" [disabled]=\"disabled\" [fullWidth]=\"fullWidth\" [outline]=\"outline\" [class.opened]=\"isOpened\" [ngClass]=\"overlayPosition\" (blur)=\"trySetTouched()\" type=\"button\"> <ng-container *ngIf=\"selectionModel?.length\"> <ng-container *ngIf=\"customLabel\"> <ng-content select=\"nb-select-label\"></ng-content> </ng-container> <ng-container *ngIf=\"!customLabel\">{{ selectionView }}</ng-container> </ng-container> <ng-container *ngIf=\"!selectionModel?.length\">{{ placeholder }}</ng-container> </button> <nb-card *nbPortal class=\"select\" [ngClass]=\"[status, overlayPosition]\" [style.width.px]=\"hostWidth\"> <nb-card-body> <ng-content select=\"nb-option, nb-option-group\"></ng-content> </nb-card-body> </nb-card> ",
            styles: ["/*! * @license * Copyright Akveo. All Rights Reserved. * Licensed under the MIT License. See License.txt in the project root for license information. */:host{display:block}:host button{position:relative;width:100%;text-align:start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border:none}:host button::after{top:50%;right:0.75rem;position:absolute;display:inline-block;width:0;height:0;margin-left:0.255em;vertical-align:0.255em;content:'';border-top:0.3em solid;border-right:0.3em solid transparent;border-bottom:0;border-left:0.3em solid transparent} "],
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            providers: [
                {
                    provide: _angular_forms.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return NbSelectComponent_1; }),
                    multi: true,
                },
            ],
        }),
        __param$21(0, i0.Inject(NB_DOCUMENT)),
        __metadata$81("design:paramtypes", [Object, NbOverlayService,
            i0.ElementRef,
            NbPositionBuilderService,
            i0.ChangeDetectorRef])
    ], NbSelectComponent);
    return NbSelectComponent;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$124 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$83 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbOptionGroupComponent = /** @class */ (function () {
    function NbOptionGroupComponent() {
        this.disabled = false;
    }
    Object.defineProperty(NbOptionGroupComponent.prototype, "setDisabled", {
        set: function (disabled) {
            this.disabled = convertToBoolProperty(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionGroupComponent.prototype, "disabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$124([
        i0.Input(),
        __metadata$83("design:type", String)
    ], NbOptionGroupComponent.prototype, "title", void 0);
    __decorate$124([
        i0.Input('disabled'),
        __metadata$83("design:type", Boolean),
        __metadata$83("design:paramtypes", [Boolean])
    ], NbOptionGroupComponent.prototype, "setDisabled", null);
    __decorate$124([
        i0.HostBinding('class.disabled'),
        __metadata$83("design:type", Boolean),
        __metadata$83("design:paramtypes", [])
    ], NbOptionGroupComponent.prototype, "disabledClass", null);
    NbOptionGroupComponent = __decorate$124([
        i0.Component({
            selector: 'nb-option-group',
            styles: [":host{display:block}:host span{padding:1.125rem 0.5rem;display:block}:host.disabled{pointer-events:none}:host /deep/ nb-option{padding:0.75rem 0.75rem 0.75rem 2.5rem} "],
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            template: "\n    <span>{{ title }}</span>\n    <ng-content select=\"nb-option, ng-container\"></ng-content>\n  ",
        })
    ], NbOptionGroupComponent);
    return NbOptionGroupComponent;
}());

var __decorate$121 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NB_SELECT_COMPONENTS = [
    NbSelectComponent,
    NbOptionComponent,
    NbOptionGroupComponent,
    NbSelectLabelComponent,
];
var NbSelectModule = /** @class */ (function () {
    function NbSelectModule() {
    }
    NbSelectModule = __decorate$121([
        i0.NgModule({
            imports: [NbSharedModule, NbOverlayModule, NbButtonModule, NbInputModule, NbCardModule, NbCheckboxModule],
            exports: NB_SELECT_COMPONENTS.slice(),
            declarations: NB_SELECT_COMPONENTS.slice(),
        })
    ], NbSelectModule);
    return NbSelectModule;
}());

(function (NbWindowState) {
    NbWindowState["MINIMIZED"] = "minimized";
    NbWindowState["MAXIMIZED"] = "maximized";
    NbWindowState["FULL_SCREEN"] = "full-screen";
})(exports.NbWindowState || (exports.NbWindowState = {}));
/**
 * Window configuration options.
 */
var NbWindowConfig = /** @class */ (function () {
    function NbWindowConfig() {
        var configs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            configs[_i] = arguments[_i];
        }
        /**
         * Window title.
         */
        this.title = '';
        /**
         * Initial window state. Full screen by default.
         */
        this.initialState = exports.NbWindowState.FULL_SCREEN;
        /**
         * If true than backdrop will be rendered behind window.
         * By default set to true.
         */
        this.hasBackdrop = true;
        /**
         * If set to true mouse clicks on backdrop will close a window.
         * Default is true.
         */
        this.closeOnBackdropClick = true;
        /**
         * If true then escape press will close a window.
         * Default is true.
         */
        this.closeOnEsc = true;
        /**
         * Class to be applied to the window.
         */
        this.windowClass = '';
        /**
         * Both, template and component may receive data through `config.context` property.
         * For components, this data will be set as component properties.
         * For templates, you can access it inside template as $implicit.
         */
        this.context = {};
        /**
         * Where the attached component should live in Angular's *logical* component tree.
         * This affects what is available for injection and the change detection order for the
         * component instantiated inside of the window. This does not affect where the window
         * content will be rendered.
         */
        this.viewContainerRef = null;
        Object.assign.apply(Object, [this].concat(configs));
    }
    return NbWindowConfig;
}());
var NB_WINDOW_CONTENT = new i0.InjectionToken('Nebular Window Content');
var NB_WINDOW_CONFIG = new i0.InjectionToken('Nebular Window Config');
var NB_WINDOW_CONTEXT = new i0.InjectionToken('Nebular Window Context');

/**
 * The `NbWindowRef` helps to manipulate window after it was created.
 * The window can be dismissed by using `close` method of the windowRef.
 * You can access rendered component as `componentRef` property of the windowRef.
 */
var NbWindowRef = /** @class */ (function () {
    function NbWindowRef(config) {
        this.config = config;
        this.stateChange$ = new rxjs.ReplaySubject(1);
        this._closed = false;
        this.closed$ = new rxjs.Subject();
        this.state = config.initialState;
    }
    Object.defineProperty(NbWindowRef.prototype, "state", {
        /**
         * Current window state.
         */
        get: function () {
            return this.stateValue;
        },
        set: function (newState) {
            if (newState && this.stateValue !== newState) {
                this.prevStateValue = this.state;
                this.stateValue = newState;
                this.stateChange$.next({ oldState: this.prevStateValue, newState: newState });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbWindowRef.prototype, "stateChange", {
        /**
         * Emits when window state change.
         */
        get: function () {
            return this.stateChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbWindowRef.prototype, "onClose", {
        /**
         * Emits when window was closed.
         */
        get: function () {
            return this.closed$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Minimize window.
     */
    NbWindowRef.prototype.minimize = function () {
        this.state = exports.NbWindowState.MINIMIZED;
    };
    /**
     * Maximize window.
     */
    NbWindowRef.prototype.maximize = function () {
        this.state = exports.NbWindowState.MAXIMIZED;
    };
    /**
     * Set window on top.
     */
    NbWindowRef.prototype.fullScreen = function () {
        this.state = exports.NbWindowState.FULL_SCREEN;
    };
    NbWindowRef.prototype.toPreviousState = function () {
        this.state = this.prevStateValue;
    };
    /**
     * Closes window.
     * */
    NbWindowRef.prototype.close = function () {
        if (this._closed) {
            return;
        }
        this._closed = true;
        this.componentRef.destroy();
        this.stateChange$.complete();
        this.closed$.next();
        this.closed$.complete();
    };
    return NbWindowRef;
}());

var __decorate$127 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$85 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbWindowsContainerComponent = /** @class */ (function () {
    function NbWindowsContainerComponent() {
    }
    __decorate$127([
        i0.ViewChild('viewContainerRef', { read: i0.ViewContainerRef }),
        __metadata$85("design:type", i0.ViewContainerRef)
    ], NbWindowsContainerComponent.prototype, "viewContainerRef", void 0);
    NbWindowsContainerComponent = __decorate$127([
        i0.Component({
            selector: 'nb-windows-container',
            template: "<ng-container #viewContainerRef></ng-container>",
            styles: [":host{display:flex;align-items:flex-end;overflow-x:auto}:host /deep/ nb-window:not(.full-screen){margin:0 2rem} "],
        })
    ], NbWindowsContainerComponent);
    return NbWindowsContainerComponent;
}());

var __decorate$128 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$86 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$24 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NbWindowComponent = /** @class */ (function () {
    function NbWindowComponent(content, context, windowRef, config, focusTrapFactory, elementRef, renderer) {
        this.content = content;
        this.context = context;
        this.windowRef = windowRef;
        this.config = config;
        this.focusTrapFactory = focusTrapFactory;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    Object.defineProperty(NbWindowComponent.prototype, "isFullScreen", {
        get: function () {
            return this.windowRef.state === exports.NbWindowState.FULL_SCREEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbWindowComponent.prototype, "maximized", {
        get: function () {
            return this.windowRef.state === exports.NbWindowState.MAXIMIZED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbWindowComponent.prototype, "minimized", {
        get: function () {
            return this.windowRef.state === exports.NbWindowState.MINIMIZED;
        },
        enumerable: true,
        configurable: true
    });
    NbWindowComponent.prototype.ngOnInit = function () {
        this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        this.focusTrap.blurPreviouslyFocusedElement();
        this.focusTrap.focusInitialElement();
        if (this.config.windowClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.config.windowClass);
        }
    };
    NbWindowComponent.prototype.ngAfterViewChecked = function () {
        if (!this.overlayContainer || this.overlayContainer.isAttached) {
            return;
        }
        if (this.content instanceof i0.TemplateRef) {
            this.attachTemplate();
        }
        else {
            this.attachComponent();
        }
    };
    NbWindowComponent.prototype.ngOnDestroy = function () {
        if (this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
        this.close();
    };
    NbWindowComponent.prototype.minimize = function () {
        if (this.windowRef.state === exports.NbWindowState.MINIMIZED) {
            this.windowRef.toPreviousState();
        }
        else {
            this.windowRef.minimize();
        }
    };
    NbWindowComponent.prototype.maximize = function () {
        this.windowRef.maximize();
    };
    NbWindowComponent.prototype.fullScreen = function () {
        this.windowRef.fullScreen();
    };
    NbWindowComponent.prototype.maximizeOrFullScreen = function () {
        if (this.windowRef.state === exports.NbWindowState.MINIMIZED) {
            this.maximize();
        }
        else {
            this.fullScreen();
        }
    };
    NbWindowComponent.prototype.close = function () {
        this.windowRef.close();
    };
    NbWindowComponent.prototype.attachTemplate = function () {
        this.overlayContainer.attachTemplatePortal(new NbTemplatePortal(this.content, null, {
            $implicit: this.context,
        }));
    };
    NbWindowComponent.prototype.attachComponent = function () {
        var portal = new NbComponentPortal(this.content, null, null, this.cfr);
        var ref = this.overlayContainer.attachComponentPortal(portal);
        Object.assign(ref.instance, this.context);
        ref.changeDetectorRef.detectChanges();
    };
    __decorate$128([
        i0.Input(),
        __metadata$86("design:type", i0.ComponentFactoryResolver)
    ], NbWindowComponent.prototype, "cfr", void 0);
    __decorate$128([
        i0.HostBinding('class.full-screen'),
        __metadata$86("design:type", Object),
        __metadata$86("design:paramtypes", [])
    ], NbWindowComponent.prototype, "isFullScreen", null);
    __decorate$128([
        i0.HostBinding('class.maximized'),
        __metadata$86("design:type", Object),
        __metadata$86("design:paramtypes", [])
    ], NbWindowComponent.prototype, "maximized", null);
    __decorate$128([
        i0.HostBinding('class.minimized'),
        __metadata$86("design:type", Object),
        __metadata$86("design:paramtypes", [])
    ], NbWindowComponent.prototype, "minimized", null);
    __decorate$128([
        i0.ViewChild(NbOverlayContainerComponent),
        __metadata$86("design:type", NbOverlayContainerComponent)
    ], NbWindowComponent.prototype, "overlayContainer", void 0);
    NbWindowComponent = __decorate$128([
        i0.Component({
            selector: 'nb-window',
            template: "\n    <nb-card>\n      <nb-card-header>\n        <div cdkFocusInitial class=\"title\" tabindex=\"-1\">{{ config.title }}</div>\n\n        <div class=\"buttons\">\n          <button class=\"button\" (click)=\"minimize()\">\n            <i class=\"nb-fold\"></i>\n          </button>\n          <button class=\"button\" *ngIf=\"isFullScreen\" (click)=\"maximize()\">\n            <i class=\"nb-minimize\"></i>\n          </button>\n          <button class=\"button\" *ngIf=\"minimized || maximized\" (click)=\"maximizeOrFullScreen()\">\n            <i class=\"nb-maximize\"></i>\n          </button>\n          <button class=\"button\" (click)=\"close()\">\n            <i class=\"nb-close\"></i>\n          </button>\n        </div>\n      </nb-card-header>\n      <nb-card-body *ngIf=\"maximized || isFullScreen\">\n        <nb-overlay-container></nb-overlay-container>\n      </nb-card-body>\n    </nb-card>\n  ",
            styles: [":host{flex:1 0 auto;min-width:20rem}:host nb-card{margin:0}:host nb-card-header{display:flex;justify-content:space-between;align-items:center;padding-right:0;overflow:hidden}:host .title{flex:1 0 auto;margin-right:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .buttons{width:9.5rem;display:flex;justify-content:space-evenly}:host .buttons .button{background:none;border:none;flex:0 0 3rem;padding:0 0.8rem}:host(.full-screen){position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}:host(.maximized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.minimized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0;height:auto}:host(.minimized) nb-card nb-card-header{border-bottom:none} "],
        }),
        __param$24(0, i0.Inject(NB_WINDOW_CONTENT)),
        __param$24(1, i0.Inject(NB_WINDOW_CONTEXT)),
        __metadata$86("design:paramtypes", [Object, Object,
            NbWindowRef,
            NbWindowConfig,
            NbFocusTrapFactoryService,
            i0.ElementRef,
            i0.Renderer2])
    ], NbWindowComponent);
    return NbWindowComponent;
}());

var __decorate$126 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$84 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$23 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The `NbWindowService` can be used to open windows.
 *
 * @stacked-example(Showcase, window/window-showcase.component)
 *
 * ### Installation
 *
 * Import `NbWindowModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbWindowModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install `NbWindowModule.forChild`:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbWindowModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * A new window can be opened by calling the `open` method with a component or template to be loaded
 * and an optional configuration.
 * `open` method will return `NbWindowRef` that can be used for the further manipulations.
 *
 * ```ts
 * const windowRef = this.windowService.open(MyComponent, { ... });
 * ```
 *
 * `NbWindowRef` gives you ability manipulate opened window.
 * Also, you can inject `NbWindowRef` inside provided component which rendered in window.
 *
 * ```ts
 * this.windowService.open(MyWindowComponent, { ... });
 *
 * // my.component.ts
 * constructor(protected windowRef: NbWindowRef) {
 * }
 *
 * minimize() {
 *   this.windowRef.minimize();
 * }
 *
 * close() {
 *   this.windowRef.close();
 * }
 * ```
 *
 * Instead of component you can create window from TemplateRef. As usual you can access context provided via config
 * via `let-` variables. Also you can get reference to the `NbWindowRef` in context's `windowRef` property.
 *
 * @stacked-example(Window content from TemplateRef, window/template-window.component)
 *
 * ### Configuration
 *
 * As mentioned above, `open` method of the `NbWindowService` may receive optional configuration options.
 * Also, you can modify default windows configuration through `NbWindowModule.forRoot({ ... })`.
 * You can read about all available options on [API tab](docs/components/window/api#nbwindowconfig).
 *
 * @stacked-example(Configuration, window/windows-backdrop.component)
 */
var NbWindowService = /** @class */ (function () {
    function NbWindowService(componentFactoryResolver, overlayService, overlayPositionBuilder, blockScrollStrategy, defaultWindowsConfig, cfr) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.overlayService = overlayService;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.blockScrollStrategy = blockScrollStrategy;
        this.defaultWindowsConfig = defaultWindowsConfig;
        this.cfr = cfr;
        this.openWindows = [];
    }
    /**
     * Opens new window.
     * @param windowContent
     * @param windowConfig
     * */
    NbWindowService.prototype.open = function (windowContent, windowConfig) {
        if (windowConfig === void 0) { windowConfig = {}; }
        if (this.windowsContainerViewRef == null) {
            this.createWindowsContainer();
        }
        var config = new NbWindowConfig(this.defaultWindowsConfig, windowConfig);
        var windowRef = new NbWindowRef(config);
        windowRef.componentRef = this.appendWindow(windowContent, config, windowRef);
        this.openWindows.push(windowRef);
        this.subscribeToEvents(windowRef);
        return windowRef;
    };
    NbWindowService.prototype.createWindowsContainer = function () {
        this.overlayRef = this.overlayService.create({
            scrollStrategy: this.overlayService.scrollStrategies.noop(),
            positionStrategy: this.overlayPositionBuilder.global().bottom().right(),
            hasBackdrop: true,
        });
        var windowsContainerPortal = new NbComponentPortal(NbWindowsContainerComponent, null, null, this.cfr);
        var overlayRef = this.overlayRef.attach(windowsContainerPortal);
        this.windowsContainerViewRef = overlayRef.instance.viewContainerRef;
    };
    NbWindowService.prototype.appendWindow = function (content, config, windowRef) {
        var context = content instanceof i0.TemplateRef
            ? { $implicit: config.context, windowRef: windowRef }
            : config.context;
        var providers = [
            { provide: NB_WINDOW_CONTENT, useValue: content },
            { provide: NB_WINDOW_CONTEXT, useValue: context },
            { provide: NbWindowConfig, useValue: config },
            { provide: NbWindowRef, useValue: windowRef },
        ];
        var parentInjector = config.viewContainerRef
            ? config.viewContainerRef.injector
            : this.windowsContainerViewRef.injector;
        var injector = i0.Injector.create({ parent: parentInjector, providers: providers });
        var windowFactory = this.componentFactoryResolver.resolveComponentFactory(NbWindowComponent);
        var ref = this.windowsContainerViewRef.createComponent(windowFactory, null, injector);
        ref.instance.cfr = this.cfr;
        ref.changeDetectorRef.detectChanges();
        return ref;
    };
    NbWindowService.prototype.subscribeToEvents = function (windowRef) {
        var _this = this;
        if (windowRef.config.closeOnBackdropClick) {
            this.overlayRef.backdropClick().subscribe(function () { return windowRef.close(); });
        }
        if (windowRef.config.closeOnEsc) {
            this.overlayRef.keydownEvents()
                .pipe(rxjs_operators.filter(function (event) { return event.keyCode === 27; }))
                .subscribe(function () { return windowRef.close(); });
        }
        windowRef.stateChange.subscribe(function () { return _this.checkAndUpdateOverlay(); });
        windowRef.onClose.subscribe(function () {
            _this.openWindows.splice(_this.openWindows.indexOf(windowRef), 1);
            _this.checkAndUpdateOverlay();
        });
    };
    NbWindowService.prototype.checkAndUpdateOverlay = function () {
        var fullScreenWindows = this.openWindows.filter(function (w) { return w.state === exports.NbWindowState.FULL_SCREEN; });
        if (fullScreenWindows.length > 0) {
            this.blockScrollStrategy.enable();
        }
        else {
            this.blockScrollStrategy.disable();
        }
        if (fullScreenWindows.some(function (w) { return w.config.hasBackdrop; })) {
            this.overlayRef.backdropElement.removeAttribute('hidden');
        }
        else {
            this.overlayRef.backdropElement.setAttribute('hidden', '');
        }
    };
    NbWindowService = __decorate$126([
        i0.Injectable(),
        __param$23(4, i0.Inject(NB_WINDOW_CONFIG)),
        __metadata$84("design:paramtypes", [i0.ComponentFactoryResolver,
            NbOverlayService,
            NbOverlayPositionBuilder,
            NbBlockScrollStrategyAdapter,
            NbWindowConfig,
            i0.ComponentFactoryResolver])
    ], NbWindowService);
    return NbWindowService;
}());

var __decorate$125 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbWindowModule = /** @class */ (function () {
    function NbWindowModule() {
    }
    NbWindowModule_1 = NbWindowModule;
    NbWindowModule.forRoot = function (defaultConfig) {
        return {
            ngModule: NbWindowModule_1,
            providers: [
                NbWindowService,
                { provide: NB_WINDOW_CONFIG, useValue: defaultConfig },
            ],
        };
    };
    NbWindowModule.forChild = function (defaultConfig) {
        return {
            ngModule: NbWindowModule_1,
            providers: [
                NbWindowService,
                { provide: NB_WINDOW_CONFIG, useValue: defaultConfig },
            ],
        };
    };
    var NbWindowModule_1;
    NbWindowModule = NbWindowModule_1 = __decorate$125([
        i0.NgModule({
            imports: [i1.CommonModule, NbOverlayModule, NbCardModule],
            declarations: [
                NbWindowsContainerComponent,
                NbWindowComponent,
            ],
            entryComponents: [NbWindowsContainerComponent, NbWindowComponent],
        })
    ], NbWindowModule);
    return NbWindowModule;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$130 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$87 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$25 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The `NbDatepickerAdapter` instances provide way how to parse, format and validate
 * different date types.
 * */
var NbDatepickerAdapter = /** @class */ (function () {
    function NbDatepickerAdapter() {
    }
    return NbDatepickerAdapter;
}());
/**
 * Datepicker is an control that can pick any values anyway.
 * It has to be bound to the datepicker directive through nbDatepicker input.
 * */
var NbDatepicker = /** @class */ (function () {
    function NbDatepicker() {
    }
    return NbDatepicker;
}());
var NB_DATE_ADAPTER = new i0.InjectionToken('Datepicker Adapter');
/**
 * The `NbDatepickerDirective` is form control that gives you ability to select dates and ranges. The datepicker
 * is shown when input receives a `focus` event.
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker></nb-datepicker>
 * ```
 *
 * @stacked-example(Showcase, datepicker/datepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbDatepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbDatepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbDatepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbDatepickerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use range selection, you have to use `NbRangepickerComponent` instead:
 *
 * ```html
 * <input [nbDatepicker]="rangepicker">
 * <nb-rangepicker #rangepicker></nb-rangepicker>
 * ```
 *
 * Both range and date pickers support all parameters as calendar, so, check `NbCalendarComponent` for additional
 * info.
 *
 * @stacked-example(Range showcase, datepicker/rangepicker-showcase.component)
 *
 * Datepicker is the form control so it can be bound with angular forms through ngModel and form controls.
 *
 * @stacked-example(Forms, datepicker/datepicker-forms.component)
 *
 * `NbDatepickerDirective` may be validated using `min` and `max` dates passed to the datepicker.
 * And `filter` predicate that receives date object and has to return a boolean value.
 *
 * @stacked-example(Validation, datepicker/datepicker-validation.component)
 *
 * The `NbDatepickerComponent` supports date formatting:
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker format="MM\dd\yyyy"></nb-datepicker>
 * ```
 *
 * ## Formatting Issue
 *
 * By default, datepicker uses angulars `LOCALE_ID` token for localization and `DatePipe` for dates formatting.
 * And native `Date.parse(...)` for dates parsing. But native `Date.parse` function doesn't support formats.
 * To provide custom formatting you have to use one of the following packages:
 *
 * - `@nebular/moment` - provides moment date adapter that uses moment for date objects. This means datepicker than
 * will operate only moment date objects. If you want to use it you have to install it: `npm i @nebular/moment`, and
 * import `NbMomentDateModule` from this package.
 *
 * - `@nebular/date-fns` - adapter for popular date-fns library. This way is preferred if you need only date formatting.
 * Because date-fns is treeshakable, tiny and operates native date objects. If you want to use it you have to
 * install it: `npm i @nebular/date-fns`, and import `NbDateFnsDateModule` from this package.
 *
 * @styles
 *
 * datepicker-fg
 * datepicker-bg
 * datepicker-border
 * datepicker-border-radius
 * datepicker-shadow
 * datepicker-arrow-size
 * */
var NbDatepickerDirective = /** @class */ (function () {
    function NbDatepickerDirective(document, datepickerAdapters, hostRef, dateService) {
        var _this = this;
        this.document = document;
        this.datepickerAdapters = datepickerAdapters;
        this.hostRef = hostRef;
        this.dateService = dateService;
        this.alive = true;
        this.onChange = function () { };
        this.onTouched = function () { };
        /**
         * Form control validators will be called in validators context, so, we need to bind them.
         * */
        this.validator = _angular_forms.Validators.compose([
            this.parseValidator,
            this.minValidator,
            this.maxValidator,
            this.filterValidator,
        ].map(function (fn) { return fn.bind(_this); }));
        this.subscribeOnInputChange();
    }
    NbDatepickerDirective_1 = NbDatepickerDirective;
    Object.defineProperty(NbDatepickerDirective.prototype, "setPicker", {
        /**
         * Provides datepicker component.
         * */
        set: function (picker) {
            this.picker = picker;
            this.setupPicker();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerDirective.prototype, "input", {
        /**
         * Returns html input element.
         * */
        get: function () {
            return this.hostRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerDirective.prototype, "inputValue", {
        /**
         * Returns host input value.
         * */
        get: function () {
            return this.input.value;
        },
        enumerable: true,
        configurable: true
    });
    NbDatepickerDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    /**
     * Writes value in picker and html input element.
     * */
    NbDatepickerDirective.prototype.writeValue = function (value) {
        this.writePicker(value);
        this.writeInput(value);
    };
    NbDatepickerDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbDatepickerDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbDatepickerDirective.prototype.setDisabledState = function (isDisabled) {
        this.input.disabled = isDisabled;
    };
    /**
     * Form control validation based on picker validator config.
     * */
    NbDatepickerDirective.prototype.validate = function () {
        return this.validator(null);
    };
    /**
     * Hides picker, focuses the input
     */
    NbDatepickerDirective.prototype.hidePicker = function () {
        this.input.focus();
        this.picker.hide();
    };
    /**
     * Validates that we can parse value correctly.
     * */
    NbDatepickerDirective.prototype.parseValidator = function () {
        var isValid = this.datepickerAdapter.isValid(this.inputValue, this.picker.format);
        return isValid ? null : { nbDatepickerParse: { value: this.inputValue } };
    };
    /**
     * Validates passed value is greater than min.
     * */
    NbDatepickerDirective.prototype.minValidator = function () {
        var config = this.picker.getValidatorConfig();
        var date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.min || !date || this.dateService.compareDates(config.min, date) <= 0) ?
            null : { nbDatepickerMin: { min: config.min, actual: date } };
    };
    /**
     * Validates passed value is smaller than max.
     * */
    NbDatepickerDirective.prototype.maxValidator = function () {
        var config = this.picker.getValidatorConfig();
        var date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.max || !date || this.dateService.compareDates(config.max, date) >= 0) ?
            null : { nbDatepickerMax: { max: config.max, actual: date } };
    };
    /**
     * Validates passed value satisfy the filter.
     * */
    NbDatepickerDirective.prototype.filterValidator = function () {
        var config = this.picker.getValidatorConfig();
        var date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.filter || !date || config.filter(date)) ?
            null : { nbDatepickerFilter: true };
    };
    /**
     * Chooses datepicker adapter based on passed picker component.
     * */
    NbDatepickerDirective.prototype.chooseDatepickerAdapter = function () {
        var _this = this;
        this.datepickerAdapter = this.datepickerAdapters.find(function (_a) {
            var picker = _a.picker;
            return _this.picker instanceof picker;
        });
        if (this.noDatepickerAdapterProvided()) {
            throw new Error('No datepickerAdapter provided for picker');
        }
    };
    /**
     * Attaches picker to the host input element and subscribes on value changes.
     * */
    NbDatepickerDirective.prototype.setupPicker = function () {
        var _this = this;
        this.chooseDatepickerAdapter();
        this.picker.attach(this.hostRef);
        if (this.hostRef.nativeElement.value) {
            this.picker.value = this.datepickerAdapter.parse(this.hostRef.nativeElement.value, this.picker.format);
        }
        this.picker.valueChange
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (value) {
            _this.writePicker(value);
            _this.writeInput(value);
            _this.onChange(value);
            if (_this.picker.shouldHide()) {
                _this.hidePicker();
            }
        });
        rxjs.merge(this.picker.blur, rxjs.fromEvent(this.input, 'blur').pipe(rxjs_operators.filter(function () { return !_this.picker.isShown && _this.document.activeElement !== _this.input; }))).pipe(rxjs_operators.takeWhile(function () { return _this.alive; }), rxjs_operators.take(1)).subscribe(function () { return _this.onTouched(); });
    };
    NbDatepickerDirective.prototype.writePicker = function (value) {
        this.picker.value = value;
    };
    NbDatepickerDirective.prototype.writeInput = function (value) {
        var stringRepresentation = this.datepickerAdapter.format(value, this.picker.format);
        this.hostRef.nativeElement.value = stringRepresentation;
    };
    /**
     * Validates if no datepicker adapter provided.
     * */
    NbDatepickerDirective.prototype.noDatepickerAdapterProvided = function () {
        return !this.datepickerAdapter || !(this.datepickerAdapter instanceof NbDatepickerAdapter);
    };
    NbDatepickerDirective.prototype.subscribeOnInputChange = function () {
        var _this = this;
        rxjs.fromEvent(this.input, 'input')
            .pipe(rxjs_operators.map(function () { return _this.inputValue; }), rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (value) { return _this.handleInputChange(value); });
    };
    /**
     * Parses input value and write if it isn't null.
     * */
    NbDatepickerDirective.prototype.handleInputChange = function (value) {
        var date = this.parseInputValue(value);
        this.onChange(date);
        this.writePicker(date);
    };
    NbDatepickerDirective.prototype.parseInputValue = function (value) {
        if (this.datepickerAdapter.isValid(value, this.picker.format)) {
            return this.datepickerAdapter.parse(value, this.picker.format);
        }
        return null;
    };
    var NbDatepickerDirective_1;
    __decorate$130([
        i0.Input('nbDatepicker'),
        __metadata$87("design:type", NbDatepicker),
        __metadata$87("design:paramtypes", [NbDatepicker])
    ], NbDatepickerDirective.prototype, "setPicker", null);
    NbDatepickerDirective = NbDatepickerDirective_1 = __decorate$130([
        i0.Directive({
            selector: 'input[nbDatepicker]',
            providers: [
                {
                    provide: _angular_forms.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return NbDatepickerDirective_1; }),
                    multi: true,
                },
                {
                    provide: _angular_forms.NG_VALIDATORS,
                    useExisting: i0.forwardRef(function () { return NbDatepickerDirective_1; }),
                    multi: true,
                },
            ],
        }),
        __param$25(0, i0.Inject(NB_DOCUMENT)),
        __param$25(1, i0.Inject(NB_DATE_ADAPTER)),
        __metadata$87("design:paramtypes", [Object, Array, i0.ElementRef,
            NbDateService])
    ], NbDatepickerDirective);
    return NbDatepickerDirective;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends$11 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$131 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$88 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbDatepickerContainerComponent = /** @class */ (function (_super) {
    __extends$11(NbDatepickerContainerComponent, _super);
    function NbDatepickerContainerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbDatepickerContainerComponent.prototype.attach = function (portal) {
        return this.overlayContainer.attachComponentPortal(portal);
    };
    __decorate$131([
        i0.ViewChild(NbOverlayContainerComponent),
        __metadata$88("design:type", NbOverlayContainerComponent)
    ], NbDatepickerContainerComponent.prototype, "overlayContainer", void 0);
    NbDatepickerContainerComponent = __decorate$131([
        i0.Component({
            selector: 'nb-datepicker-container',
            styles: [":host .arrow{position:absolute;width:0;height:0}:host /deep/ nb-overlay-container .primitive-overlay{padding:0.75rem 1rem} "],
            template: "\n    <span class=\"arrow\"></span>\n    <nb-overlay-container></nb-overlay-container>\n  ",
        })
    ], NbDatepickerContainerComponent);
    return NbDatepickerContainerComponent;
}(NbPositionedContainer));

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends$12 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$132 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$89 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$26 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The `NbBasePicker` component concentrates overlay manipulation logic.
 * */
var NbBasePicker = /** @class */ (function (_super) {
    __extends$12(NbBasePicker, _super);
    function NbBasePicker(document, positionBuilder, overlay, cfr, dateService) {
        var _this = _super.call(this) || this;
        _this.document = document;
        _this.positionBuilder = positionBuilder;
        _this.overlay = overlay;
        _this.cfr = cfr;
        _this.dateService = dateService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        _this.boundingMonth = true;
        /**
         * Defines starting view for calendar.
         * */
        _this.startView = exports.NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        _this.size = exports.NbCalendarSize.MEDIUM;
        /**
         * Hide picker when a date or a range is selected, `true` by default
         * @type {boolean}
         */
        _this.hideOnSelect = true;
        /**
         * Stream of picker changes. Required to be the subject because picker hides and shows and picker
         * change stream becomes recreated.
         * */
        _this.onChange$ = new rxjs.Subject();
        _this.alive = true;
        _this.blur$ = new rxjs.Subject();
        return _this;
    }
    Object.defineProperty(NbBasePicker.prototype, "picker", {
        /**
         * Returns picker instance.
         * */
        get: function () {
            return this.pickerRef && this.pickerRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "valueChange", {
        /**
         * Stream of picker value changes.
         * */
        get: function () {
            return this.onChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "isShown", {
        get: function () {
            return this.ref && this.ref.hasAttached();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "blur", {
        /**
         * Emits when datepicker looses focus.
         */
        get: function () {
            return this.blur$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NbBasePicker.prototype.ngOnChanges = function () {
        if (this.dateService.getId() === 'native' && this.format) {
            throw new Error('Can\'t format native date. To use custom formatting you have to install @nebular/moment or ' +
                '@nebular/date-fns package and import NbMomentDateModule or NbDateFnsDateModule accordingly.' +
                'More information at "Formatting issue" ' +
                'https://akveo.github.io/nebular/docs/components/datepicker/overview#nbdatepickercomponent');
        }
    };
    NbBasePicker.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.hide();
        if (this.ref) {
            this.ref.dispose();
        }
    };
    /**
     * Datepicker knows nothing about host html input element.
     * So, attach method attaches datepicker to the host input element.
     * */
    NbBasePicker.prototype.attach = function (hostRef) {
        this.hostRef = hostRef;
        this.subscribeOnTriggers();
    };
    NbBasePicker.prototype.getValidatorConfig = function () {
        return { min: this.min, max: this.max, filter: this.filter };
    };
    NbBasePicker.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openDatepicker();
    };
    NbBasePicker.prototype.shouldHide = function () {
        return this.hideOnSelect && !!this.value;
    };
    NbBasePicker.prototype.hide = function () {
        if (this.ref) {
            this.ref.detach();
        }
        // save current value if picker was rendered
        if (this.picker) {
            this.queue = this.value;
            this.pickerRef.destroy();
            this.pickerRef = null;
            this.container = null;
        }
    };
    NbBasePicker.prototype.createOverlay = function () {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.subscribeOnPositionChange();
    };
    NbBasePicker.prototype.openDatepicker = function () {
        this.container = this.ref.attach(new NbComponentPortal(NbDatepickerContainerComponent, null, null, this.cfr));
        this.instantiatePicker();
        this.subscribeOnValueChange();
        this.writeQueue();
        this.patchWithInputs();
    };
    NbBasePicker.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(exports.NbPosition.BOTTOM)
            .adjustment(exports.NbAdjustment.COUNTERCLOCKWISE);
    };
    NbBasePicker.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy.positionChange
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return patch(_this.container, { position: position }); });
    };
    NbBasePicker.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(exports.NbTrigger.FOCUS)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.container; })
            .build();
    };
    NbBasePicker.prototype.subscribeOnTriggers = function () {
        var _this = this;
        var triggerStrategy = this.createTriggerStrategy();
        triggerStrategy.show$.pipe(rxjs_operators.takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.show(); });
        triggerStrategy.hide$.pipe(rxjs_operators.takeWhile(function () { return _this.alive; })).subscribe(function () {
            _this.blur$.next();
            _this.hide();
        });
    };
    NbBasePicker.prototype.instantiatePicker = function () {
        this.pickerRef = this.container.instance.attach(new NbComponentPortal(this.pickerClass, null, null, this.cfr));
    };
    /**
     * Subscribes on picker value changes and emit data through this.onChange$ subject.
     * */
    NbBasePicker.prototype.subscribeOnValueChange = function () {
        var _this = this;
        this.pickerValueChange.subscribe(function (date) {
            _this.onChange$.next(date);
        });
    };
    NbBasePicker.prototype.patchWithInputs = function () {
        this.picker.boundingMonth = this.boundingMonth;
        this.picker.startView = this.startView;
        this.picker.min = this.min;
        this.picker.max = this.max;
        this.picker.filter = this.filter;
        this.picker._cellComponent = this.dayCellComponent;
        this.picker.monthCellComponent = this.monthCellComponent;
        this.picker._yearCellComponent = this.yearCellComponent;
        this.picker.size = this.size;
        this.picker.visibleDate = this.visibleDate;
    };
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", String)
    ], NbBasePicker.prototype, "format", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", Boolean)
    ], NbBasePicker.prototype, "boundingMonth", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", String)
    ], NbBasePicker.prototype, "startView", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", Object)
    ], NbBasePicker.prototype, "min", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", Object)
    ], NbBasePicker.prototype, "max", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", Function)
    ], NbBasePicker.prototype, "filter", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", i0.Type)
    ], NbBasePicker.prototype, "dayCellComponent", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", i0.Type)
    ], NbBasePicker.prototype, "monthCellComponent", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", i0.Type)
    ], NbBasePicker.prototype, "yearCellComponent", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", String)
    ], NbBasePicker.prototype, "size", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", Object)
    ], NbBasePicker.prototype, "visibleDate", void 0);
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", Boolean)
    ], NbBasePicker.prototype, "hideOnSelect", void 0);
    NbBasePicker = __decorate$132([
        __param$26(0, i0.Inject(NB_DOCUMENT)),
        __metadata$89("design:paramtypes", [Object, NbPositionBuilderService,
            NbOverlayService,
            i0.ComponentFactoryResolver,
            NbDateService])
    ], NbBasePicker);
    return NbBasePicker;
}(NbDatepicker));
/**
 * The DatePicker components itself.
 * Provides a proxy to `NbCalendar` options as well as custom picker options.
 */
var NbDatepickerComponent = /** @class */ (function (_super) {
    __extends$12(NbDatepickerComponent, _super);
    function NbDatepickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pickerClass = NbCalendarComponent;
        return _this;
    }
    Object.defineProperty(NbDatepickerComponent.prototype, "date", {
        /**
         * Date which will be rendered as selected.
         * */
        set: function (date) {
            this.value = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerComponent.prototype, "dateChange", {
        /**
         * Emits date when selected.
         * */
        get: function () {
            return this.valueChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerComponent.prototype, "value", {
        get: function () {
            return this.picker.date;
        },
        set: function (date) {
            if (!this.picker) {
                this.queue = date;
                return;
            }
            if (date) {
                this.picker.visibleDate = date;
                this.picker.date = date;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerComponent.prototype, "pickerValueChange", {
        get: function () {
            return this.picker.dateChange;
        },
        enumerable: true,
        configurable: true
    });
    NbDatepickerComponent.prototype.writeQueue = function () {
        this.value = this.queue;
    };
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", Object),
        __metadata$89("design:paramtypes", [Object])
    ], NbDatepickerComponent.prototype, "date", null);
    __decorate$132([
        i0.Output(),
        __metadata$89("design:type", i0.EventEmitter),
        __metadata$89("design:paramtypes", [])
    ], NbDatepickerComponent.prototype, "dateChange", null);
    NbDatepickerComponent = __decorate$132([
        i0.Component({
            selector: 'nb-datepicker',
            template: '',
        })
    ], NbDatepickerComponent);
    return NbDatepickerComponent;
}(NbBasePicker));
/**
 * The RangeDatePicker components itself.
 * Provides a proxy to `NbCalendarRange` options as well as custom picker options.
 */
var NbRangepickerComponent = /** @class */ (function (_super) {
    __extends$12(NbRangepickerComponent, _super);
    function NbRangepickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pickerClass = NbCalendarRangeComponent;
        return _this;
    }
    Object.defineProperty(NbRangepickerComponent.prototype, "range", {
        /**
         * Range which will be rendered as selected.
         * */
        set: function (range) {
            this.value = range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRangepickerComponent.prototype, "rangeChange", {
        /**
         * Emits range when start selected and emits again when end selected.
         * */
        get: function () {
            return this.valueChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRangepickerComponent.prototype, "value", {
        get: function () {
            return this.picker.range;
        },
        set: function (range) {
            if (!this.picker) {
                this.queue = range;
                return;
            }
            if (range) {
                this.picker.visibleDate = range && range.start;
                this.picker.range = range;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRangepickerComponent.prototype, "pickerValueChange", {
        get: function () {
            return this.picker.rangeChange;
        },
        enumerable: true,
        configurable: true
    });
    NbRangepickerComponent.prototype.shouldHide = function () {
        return _super.prototype.shouldHide.call(this) && !!(this.value.start && this.value.end);
    };
    NbRangepickerComponent.prototype.writeQueue = function () {
        this.value = this.queue;
    };
    __decorate$132([
        i0.Input(),
        __metadata$89("design:type", Object),
        __metadata$89("design:paramtypes", [Object])
    ], NbRangepickerComponent.prototype, "range", null);
    __decorate$132([
        i0.Output(),
        __metadata$89("design:type", i0.EventEmitter),
        __metadata$89("design:paramtypes", [])
    ], NbRangepickerComponent.prototype, "rangeChange", null);
    NbRangepickerComponent = __decorate$132([
        i0.Component({
            selector: 'nb-rangepicker',
            template: '',
        })
    ], NbRangepickerComponent);
    return NbRangepickerComponent;
}(NbBasePicker));

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends$13 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$133 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$90 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbDateAdapterService = /** @class */ (function (_super) {
    __extends$13(NbDateAdapterService, _super);
    function NbDateAdapterService(dateService) {
        var _this = _super.call(this) || this;
        _this.dateService = dateService;
        _this.picker = NbDatepickerComponent;
        return _this;
    }
    NbDateAdapterService.prototype.parse = function (date, format) {
        return this.dateService.parse(date, format);
    };
    NbDateAdapterService.prototype.format = function (date, format) {
        return this.dateService.format(date, format);
    };
    NbDateAdapterService.prototype.isValid = function (date, format) {
        return this.dateService.isValidDateString(date, format);
    };
    NbDateAdapterService = __decorate$133([
        i0.Injectable(),
        __metadata$90("design:paramtypes", [NbDateService])
    ], NbDateAdapterService);
    return NbDateAdapterService;
}(NbDatepickerAdapter));
var NbRangeAdapterService = /** @class */ (function (_super) {
    __extends$13(NbRangeAdapterService, _super);
    function NbRangeAdapterService(dateService) {
        var _this = _super.call(this) || this;
        _this.dateService = dateService;
        _this.picker = NbRangepickerComponent;
        return _this;
    }
    NbRangeAdapterService.prototype.parse = function (range, format) {
        var _a = range.split('-').map(function (subDate) { return subDate.trim(); }), start = _a[0], end = _a[1];
        return {
            start: this.dateService.parse(start, format),
            end: this.dateService.parse(end, format),
        };
    };
    NbRangeAdapterService.prototype.format = function (range, format) {
        if (!range) {
            return '';
        }
        var start = this.dateService.format(range.start, format);
        var end = this.dateService.format(range.end, format);
        if (end) {
            return start + " - " + end;
        }
        else {
            return start;
        }
    };
    NbRangeAdapterService.prototype.isValid = function (range, format) {
        var _a = range.split('-').map(function (subDate) { return subDate.trim(); }), start = _a[0], end = _a[1];
        return this.dateService.isValidDateString(start, format) && this.dateService.isValidDateString(end, format);
    };
    NbRangeAdapterService = __decorate$133([
        i0.Injectable(),
        __metadata$90("design:paramtypes", [NbDateService])
    ], NbRangeAdapterService);
    return NbRangeAdapterService;
}(NbDatepickerAdapter));

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$129 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbDatepickerModule = /** @class */ (function () {
    function NbDatepickerModule() {
    }
    NbDatepickerModule_1 = NbDatepickerModule;
    NbDatepickerModule.forRoot = function () {
        return {
            ngModule: NbDatepickerModule_1,
            providers: [
                i1.DatePipe,
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbDateAdapterService,
                },
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbRangeAdapterService,
                },
            ],
        };
    };
    var NbDatepickerModule_1;
    NbDatepickerModule = NbDatepickerModule_1 = __decorate$129([
        i0.NgModule({
            imports: [NbOverlayModule, NbCalendarModule, NbCalendarRangeModule],
            exports: [NbDatepickerDirective, NbDatepickerComponent, NbRangepickerComponent],
            declarations: [NbDatepickerDirective, NbDatepickerContainerComponent, NbDatepickerComponent, NbRangepickerComponent],
            entryComponents: [NbCalendarComponent, NbCalendarRangeComponent, NbDatepickerContainerComponent],
        })
    ], NbDatepickerModule);
    return NbDatepickerModule;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$135 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$91 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The `NbRadioComponent` provides the same functionality as native `<input type="radio">`
 * with Nebular styles and animations.
 *
 * @stacked-example(Showcase, radio/radio-showcase.component)
 *
 * ### Installation
 *
 * Import `NbRadioModule` to your feature module.
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbRadioModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * Radio buttons should be wrapped in `nb-radio-group` to provide form bindings.
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio>Option 1</nb-radio>
 *   <nb-radio>Option 2</nb-radio>
 *   <nb-radio>Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * You can disable some radios in the group using a `disabled` attribute.
 *
 * @stacked-example(Disabled, radio/radio-disabled.component)
 *
 *
 * @styles
 *
 * radio-bg
 * radio-fg
 * radio-size
 * radio-border-size
 * radio-border-color
 * radio-checkmark
 * radio-checked-bg
 * radio-checked-size
 * radio-checked-border-size
 * radio-checked-border-color
 * radio-checked-checkmark
 * radio-disabled-bg
 * radio-disabled-size
 * radio-disabled-border-size
 * radio-disabled-border-color
 * radio-disabled-checkmark
 * */
var NbRadioComponent = /** @class */ (function () {
    function NbRadioComponent(cd) {
        this.cd = cd;
        this.valueChange = new i0.EventEmitter();
        this.blur = new i0.EventEmitter();
    }
    Object.defineProperty(NbRadioComponent.prototype, "setDisabled", {
        set: function (disabled) {
            this.disabled = convertToBoolProperty(disabled);
        },
        enumerable: true,
        configurable: true
    });
    NbRadioComponent.prototype.markForCheck = function () {
        this.cd.markForCheck();
        this.cd.detectChanges();
    };
    NbRadioComponent.prototype.onChange = function (event) {
        event.stopPropagation();
        this.checked = true;
        this.valueChange.emit(this.value);
    };
    NbRadioComponent.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate$135([
        i0.Input(),
        __metadata$91("design:type", String)
    ], NbRadioComponent.prototype, "name", void 0);
    __decorate$135([
        i0.Input(),
        __metadata$91("design:type", Boolean)
    ], NbRadioComponent.prototype, "checked", void 0);
    __decorate$135([
        i0.Input(),
        __metadata$91("design:type", Object)
    ], NbRadioComponent.prototype, "value", void 0);
    __decorate$135([
        i0.Input('disabled'),
        __metadata$91("design:type", Boolean),
        __metadata$91("design:paramtypes", [Boolean])
    ], NbRadioComponent.prototype, "setDisabled", null);
    __decorate$135([
        i0.Output(),
        __metadata$91("design:type", i0.EventEmitter)
    ], NbRadioComponent.prototype, "valueChange", void 0);
    __decorate$135([
        i0.Output(),
        __metadata$91("design:type", i0.EventEmitter)
    ], NbRadioComponent.prototype, "blur", void 0);
    NbRadioComponent = __decorate$135([
        i0.Component({
            selector: 'nb-radio',
            template: "\n    <label>\n      <input\n        type=\"radio\"\n        [name]=\"name\"\n        [value]=\"value\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        (change)=\"onChange($event)\"\n        (click)=\"onClick($event)\">\n      <span class=\"radio-indicator\"></span>\n      <span class=\"radio-description\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            styles: [":host{display:block}:host label{position:relative;display:inline-flex;margin:0;min-height:inherit;padding:0.375rem 1.5rem 0.375rem 0}:host input{position:absolute;opacity:0}:host input:disabled+.radio-indicator,:host input:disabled ~ .radio-description{opacity:0.5}:host .radio-indicator{border-radius:50%;flex-shrink:0;display:flex;justify-content:center;align-items:center}:host .radio-indicator::before{content:'';transition:all 0.1s;border-radius:50%}[dir=ltr] :host .radio-description{padding-left:.5rem}[dir=rtl] :host .radio-description{padding-right:.5rem} "],
        }),
        __metadata$91("design:paramtypes", [i0.ChangeDetectorRef])
    ], NbRadioComponent);
    return NbRadioComponent;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$136 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$92 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$27 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The `NbRadioGroupComponent` is the wrapper for `nb-radio` button.
 * It provides form bindings:
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio>Option 1</nb-radio>
 *   <nb-radio>Option 2</nb-radio>
 *   <nb-radio>Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Also, you can use `value` and `valueChange` for binding without forms.
 *
 * ```html
 * <nb-radio-group [(value)]="selectedOption">
 *   <nb-radio>Option 1</nb-radio>
 *   <nb-radio>Option 2</nb-radio>
 *   <nb-radio>Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Radio items name has to be provided through `name` input property of the radio group.
 *
 * ```html
 * <nb-radio-group name="my-radio-group">
 *   ...
 * </nb-radio-group>
 * ```
 *
 * Also, you can disable the whole group using `disabled` attribute.
 *
 * ```html
 * <nb-radio-group disabled>
 *   ...
 * </nb-radio-group>
 * ```
 * */
var NbRadioGroupComponent = /** @class */ (function () {
    function NbRadioGroupComponent(cd, hostElement, platformId, document) {
        this.cd = cd;
        this.hostElement = hostElement;
        this.platformId = platformId;
        this.document = document;
        this.valueChange = new i0.EventEmitter();
        this.alive = true;
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    NbRadioGroupComponent_1 = NbRadioGroupComponent;
    Object.defineProperty(NbRadioGroupComponent.prototype, "setValue", {
        set: function (value) {
            this.value = value;
            this.updateValues();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRadioGroupComponent.prototype, "setName", {
        set: function (name) {
            this.name = name;
            this.updateNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRadioGroupComponent.prototype, "setDisabled", {
        set: function (disabled) {
            this.disabled = convertToBoolProperty(disabled);
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    NbRadioGroupComponent.prototype.ngAfterContentInit = function () {
        this.updateNames();
        this.updateValues();
        this.updateDisabled();
        this.subscribeOnRadiosValueChange();
        this.subscribeOnRadiosBlur();
    };
    NbRadioGroupComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbRadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbRadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbRadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        if (typeof value !== 'undefined') {
            this.updateValues();
        }
    };
    NbRadioGroupComponent.prototype.updateNames = function () {
        var _this = this;
        if (this.radios) {
            this.radios.forEach(function (radio) { return radio.name = _this.name; });
            this.markRadiosForCheck();
        }
    };
    NbRadioGroupComponent.prototype.updateValues = function () {
        var _this = this;
        if (this.radios && typeof this.value !== 'undefined') {
            this.radios.forEach(function (radio) { return radio.checked = radio.value === _this.value; });
            this.markRadiosForCheck();
        }
    };
    NbRadioGroupComponent.prototype.updateDisabled = function () {
        var _this = this;
        if (this.radios && typeof this.disabled !== 'undefined') {
            this.radios.forEach(function (radio) { return radio.setDisabled = _this.disabled; });
            this.markRadiosForCheck();
        }
    };
    NbRadioGroupComponent.prototype.subscribeOnRadiosValueChange = function () {
        var _this = this;
        rxjs.merge.apply(void 0, this.radios.map(function (radio) { return radio.valueChange; })).pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (value) {
            _this.writeValue(value);
            _this.propagateValue(value);
        });
    };
    NbRadioGroupComponent.prototype.propagateValue = function (value) {
        this.valueChange.emit(value);
        this.onChange(value);
    };
    NbRadioGroupComponent.prototype.markRadiosForCheck = function () {
        this.radios.forEach(function (radio) { return radio.markForCheck(); });
    };
    NbRadioGroupComponent.prototype.subscribeOnRadiosBlur = function () {
        var _this = this;
        if (!i1.isPlatformBrowser(this.platformId)) {
            return;
        }
        var hostElement = this.hostElement.nativeElement;
        rxjs.fromEvent(hostElement, 'focusin')
            .pipe(rxjs_operators.filter(function (event) { return hostElement.contains(event.target); }), rxjs_operators.switchMap(function () { return rxjs.merge(rxjs.fromEvent(_this.document, 'focusin'), rxjs.fromEvent(_this.document, 'click')); }), rxjs_operators.filter(function (event) { return !hostElement.contains(event.target); }), rxjs_operators.take(1))
            .subscribe(function () { return _this.onTouched(); });
    };
    var NbRadioGroupComponent_1;
    __decorate$136([
        i0.ContentChildren(NbRadioComponent, { descendants: true }),
        __metadata$92("design:type", i0.QueryList)
    ], NbRadioGroupComponent.prototype, "radios", void 0);
    __decorate$136([
        i0.Input('value'),
        __metadata$92("design:type", Object),
        __metadata$92("design:paramtypes", [Object])
    ], NbRadioGroupComponent.prototype, "setValue", null);
    __decorate$136([
        i0.Input('name'),
        __metadata$92("design:type", String),
        __metadata$92("design:paramtypes", [String])
    ], NbRadioGroupComponent.prototype, "setName", null);
    __decorate$136([
        i0.Input('disabled'),
        __metadata$92("design:type", Boolean),
        __metadata$92("design:paramtypes", [Boolean])
    ], NbRadioGroupComponent.prototype, "setDisabled", null);
    __decorate$136([
        i0.Output(),
        __metadata$92("design:type", i0.EventEmitter)
    ], NbRadioGroupComponent.prototype, "valueChange", void 0);
    NbRadioGroupComponent = NbRadioGroupComponent_1 = __decorate$136([
        i0.Component({
            selector: 'nb-radio-group',
            template: "\n    <ng-content select=\"nb-radio\"></ng-content>",
            providers: [
                {
                    provide: _angular_forms.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return NbRadioGroupComponent_1; }),
                    multi: true,
                },
            ],
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
        }),
        __param$27(2, i0.Inject(i0.PLATFORM_ID)),
        __param$27(3, i0.Inject(NB_DOCUMENT)),
        __metadata$92("design:paramtypes", [i0.ChangeDetectorRef,
            i0.ElementRef, Object, Object])
    ], NbRadioGroupComponent);
    return NbRadioGroupComponent;
}());

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$134 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbRadioModule = /** @class */ (function () {
    function NbRadioModule() {
    }
    NbRadioModule = __decorate$134([
        i0.NgModule({
            imports: [],
            exports: [NbRadioComponent, NbRadioGroupComponent],
            declarations: [NbRadioComponent, NbRadioGroupComponent],
        })
    ], NbRadioModule);
    return NbRadioModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// TODO: export all components

exports.NbMenuService = NbMenuService;
exports.NbMenuItem = NbMenuItem;
exports.NB_THEME_OPTIONS = NB_THEME_OPTIONS;
exports.NB_MEDIA_BREAKPOINTS = NB_MEDIA_BREAKPOINTS;
exports.NB_BUILT_IN_JS_THEMES = NB_BUILT_IN_JS_THEMES;
exports.NB_JS_THEMES = NB_JS_THEMES;
exports.NB_WINDOW = NB_WINDOW;
exports.NB_DOCUMENT = NB_DOCUMENT;
exports.nbWindowFactory = nbWindowFactory;
exports.NbThemeModule = NbThemeModule;
exports.NbThemeService = NbThemeService;
exports.NbSpinnerService = NbSpinnerService;
exports.DEFAULT_MEDIA_BREAKPOINTS = DEFAULT_MEDIA_BREAKPOINTS;
exports.NbMediaBreakpointsService = NbMediaBreakpointsService;
exports.NbColorHelper = NbColorHelper;
exports.NB_LAYOUT_DIRECTION = NB_LAYOUT_DIRECTION;
exports.NbLayoutDirectionService = NbLayoutDirectionService;
exports.NbLayoutScrollService = NbLayoutScrollService;
exports.NbLayoutRulerService = NbLayoutRulerService;
exports.NbCardModule = NbCardModule;
exports.NbCalendarModule = NbCalendarModule;
exports.NbCalendarComponent = NbCalendarComponent;
exports.NbCalendarRangeModule = NbCalendarRangeModule;
exports.NbCalendarRangeComponent = NbCalendarRangeComponent;
exports.NbCalendarHeaderComponent = NbCalendarHeaderComponent;
exports.NbCalendarDayCellComponent = NbCalendarDayCellComponent;
exports.NbCalendarYearPickerComponent = NbCalendarYearPickerComponent;
exports.NbCalendarMonthPickerComponent = NbCalendarMonthPickerComponent;
exports.NbCalendarDayPickerComponent = NbCalendarDayPickerComponent;
exports.NbCalendarNavigationComponent = NbCalendarNavigationComponent;
exports.NbCalendarPageableNavigationComponent = NbCalendarPageableNavigationComponent;
exports.NbCalendarDaysNamesComponent = NbCalendarDaysNamesComponent;
exports.NbCalendarMonthCellComponent = NbCalendarMonthCellComponent;
exports.NbCalendarYearCellComponent = NbCalendarYearCellComponent;
exports.NbCalendarPickerRowComponent = NbCalendarPickerRowComponent;
exports.NbCalendarPickerComponent = NbCalendarPickerComponent;
exports.NbCalendarMonthModelService = NbCalendarMonthModelService;
exports.NbNativeDateService = NbNativeDateService;
exports.NbDateService = NbDateService;
exports.NbCalendarKitModule = NbCalendarKitModule;
exports.NbLayoutModule = NbLayoutModule;
exports.NbRestoreScrollTopHelper = NbRestoreScrollTopHelper;
exports.NbMenuModule = NbMenuModule;
exports.NbRouteTabsetModule = NbRouteTabsetModule;
exports.NbSidebarModule = NbSidebarModule;
exports.NbSidebarService = NbSidebarService;
exports.NbTabsetModule = NbTabsetModule;
exports.NbUserModule = NbUserModule;
exports.NbActionsModule = NbActionsModule;
exports.NbSearchModule = NbSearchModule;
exports.NbSearchService = NbSearchService;
exports.NbCheckboxComponent = NbCheckboxComponent;
exports.NbCheckboxModule = NbCheckboxModule;
exports.NbBadgeComponent = NbBadgeComponent;
exports.NbBadgeModule = NbBadgeModule;
exports.NbPopoverDirective = NbPopoverDirective;
exports.NbPopoverModule = NbPopoverModule;
exports.NbContextMenuDirective = NbContextMenuDirective;
exports.NbContextMenuModule = NbContextMenuModule;
exports.NbProgressBarComponent = NbProgressBarComponent;
exports.NbProgressBarModule = NbProgressBarModule;
exports.NbAlertComponent = NbAlertComponent;
exports.NbAlertModule = NbAlertModule;
exports.NbChatComponent = NbChatComponent;
exports.NbChatMessageComponent = NbChatMessageComponent;
exports.NbChatMessageMapComponent = NbChatMessageMapComponent;
exports.NbChatMessageFileComponent = NbChatMessageFileComponent;
exports.NbChatMessageQuoteComponent = NbChatMessageQuoteComponent;
exports.NbChatMessageTextComponent = NbChatMessageTextComponent;
exports.NbChatFormComponent = NbChatFormComponent;
exports.NbChatModule = NbChatModule;
exports.NbSpinnerComponent = NbSpinnerComponent;
exports.NbSpinnerDirective = NbSpinnerDirective;
exports.NbSpinnerModule = NbSpinnerModule;
exports.NbStepperComponent = NbStepperComponent;
exports.NbStepperModule = NbStepperModule;
exports.NbAccordionComponent = NbAccordionComponent;
exports.NbAccordionItemComponent = NbAccordionItemComponent;
exports.NbAccordionItemBodyComponent = NbAccordionItemBodyComponent;
exports.NbAccordionItemHeaderComponent = NbAccordionItemHeaderComponent;
exports.NbAccordionModule = NbAccordionModule;
exports.NbButtonComponent = NbButtonComponent;
exports.NbButtonModule = NbButtonModule;
exports.NbListComponent = NbListComponent;
exports.NbListItemComponent = NbListItemComponent;
exports.NbListModule = NbListModule;
exports.NbListPageTrackerDirective = NbListPageTrackerDirective;
exports.NbScrollableContainerDimentions = NbScrollableContainerDimentions;
exports.NbInfiniteListDirective = NbInfiniteListDirective;
exports.NbInputDirective = NbInputDirective;
exports.NbInputModule = NbInputModule;
exports.NbOverlayModule = NbOverlayModule;
exports.patch = patch;
exports.createContainer = createContainer;
exports.NbOverlayService = NbOverlayService;
exports.NbAdjustableConnectedPositionStrategy = NbAdjustableConnectedPositionStrategy;
exports.NbGlobalPositionStrategy = NbGlobalPositionStrategy;
exports.NbPositionBuilderService = NbPositionBuilderService;
exports.NbPositionedContainer = NbPositionedContainer;
exports.NbOverlayContainerComponent = NbOverlayContainerComponent;
exports.NbTriggerStrategy = NbTriggerStrategy;
exports.NbClickTriggerStrategy = NbClickTriggerStrategy;
exports.NbHoverTriggerStrategy = NbHoverTriggerStrategy;
exports.NbHintTriggerStrategy = NbHintTriggerStrategy;
exports.NbFocusTriggerStrategy = NbFocusTriggerStrategy;
exports.NbTriggerStrategyBuilder = NbTriggerStrategyBuilder;
exports.NbPortalDirective = NbPortalDirective;
exports.NbPortalOutletDirective = NbPortalOutletDirective;
exports.NbComponentPortal = NbComponentPortal;
exports.NbDomPortalOutlet = NbDomPortalOutlet;
exports.NbOverlay = NbOverlay;
exports.NbPlatform = NbPlatform;
exports.NbOverlayPositionBuilder = NbOverlayPositionBuilder;
exports.NbTemplatePortal = NbTemplatePortal;
exports.NbOverlayContainer = NbOverlayContainer;
exports.NbFlexibleConnectedPositionStrategy = NbFlexibleConnectedPositionStrategy;
exports.NbPortalInjector = NbPortalInjector;
exports.NbCdkMappingModule = NbCdkMappingModule;
exports.NbPositionHelper = NbPositionHelper;
exports.NB_DIALOG_CONFIG = NB_DIALOG_CONFIG;
exports.NbDialogConfig = NbDialogConfig;
exports.NbDialogRef = NbDialogRef;
exports.NbDialogService = NbDialogService;
exports.NbDialogModule = NbDialogModule;
exports.NbToastrModule = NbToastrModule;
exports.NbToastRef = NbToastRef;
exports.NbToastContainer = NbToastContainer;
exports.NbToastrContainerRegistry = NbToastrContainerRegistry;
exports.NbToastrService = NbToastrService;
exports.NbTooltipModule = NbTooltipModule;
exports.NbTooltipDirective = NbTooltipDirective;
exports.NbSelectModule = NbSelectModule;
exports.NbWindowConfig = NbWindowConfig;
exports.NB_WINDOW_CONFIG = NB_WINDOW_CONFIG;
exports.NbWindowModule = NbWindowModule;
exports.NbWindowService = NbWindowService;
exports.NbWindowRef = NbWindowRef;
exports.NbDatepickerModule = NbDatepickerModule;
exports.NbDatepickerAdapter = NbDatepickerAdapter;
exports.NbDatepicker = NbDatepicker;
exports.NB_DATE_ADAPTER = NB_DATE_ADAPTER;
exports.NbDatepickerDirective = NbDatepickerDirective;
exports.NbRadioModule = NbRadioModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
