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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable } from '@angular/core';
import { NB_MEDIA_BREAKPOINTS } from '../theme.options';
export var DEFAULT_MEDIA_BREAKPOINTS = [
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
    NbMediaBreakpointsService = __decorate([
        Injectable(),
        __param(0, Inject(NB_MEDIA_BREAKPOINTS)),
        __metadata("design:paramtypes", [Object])
    ], NbMediaBreakpointsService);
    return NbMediaBreakpointsService;
}());
export { NbMediaBreakpointsService };
//# sourceMappingURL=breakpoints.service.js.map