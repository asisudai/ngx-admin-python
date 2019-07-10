/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Observable } from 'rxjs';
/**
 * Search component service, connects your code to a page-level search component.
 */
export declare class NbSearchService {
    private searchSubmittings$;
    private searchActivations$;
    private searchDeactivations$;
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    activateSearch(searchType: string, tag?: string): void;
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    deactivateSearch(searchType: string, tag?: string): void;
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    submitSearch(term: string, tag?: string): void;
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchActivate(): Observable<{
        searchType: string;
        tag?: string;
    }>;
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchDeactivate(): Observable<{
        searchType: string;
        tag?: string;
    }>;
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchSubmit(): Observable<{
        term: string;
        tag?: string;
    }>;
}
