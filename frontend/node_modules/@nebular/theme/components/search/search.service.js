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
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';
/**
 * Search component service, connects your code to a page-level search component.
 */
var NbSearchService = /** @class */ (function () {
    function NbSearchService() {
        this.searchSubmittings$ = new Subject();
        this.searchActivations$ = new Subject();
        this.searchDeactivations$ = new Subject();
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
        return this.searchActivations$.pipe(share());
    };
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchDeactivate = function () {
        return this.searchDeactivations$.pipe(share());
    };
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchSubmit = function () {
        return this.searchSubmittings$.pipe(share());
    };
    NbSearchService = __decorate([
        Injectable()
    ], NbSearchService);
    return NbSearchService;
}());
export { NbSearchService };
//# sourceMappingURL=search.service.js.map