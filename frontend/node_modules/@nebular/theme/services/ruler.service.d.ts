import { Observable, Subject } from 'rxjs';
/**
 * Layout dimensions type
 */
export interface NbLayoutDimensions {
    /**
     * clientWidth
     * @type {number}
     */
    clientWidth: number;
    /**
     * clientHeight
     * @type {number}
     */
    clientHeight: number;
    /**
     * scrollWidth
     * @type {number}
     */
    scrollWidth: number;
    /**
     * scrollHeight
     * @type {number}
     */
    scrollHeight: number;
}
/**
 * Simple helper service to return Layout dimensions
 * Depending of current Layout scroll mode (default or `withScroll` when scroll is moved to an element
 * inside of the layout) corresponding dimensions will be returns  - of `documentElement` in first case and
 * `.scrollable-container` in the second.
 */
export declare class NbLayoutRulerService {
    private contentDimensionsReq$;
    /**
     * Content dimensions
     * @returns {Observable<NbLayoutDimensions>}
     */
    getDimensions(): Observable<NbLayoutDimensions>;
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetDimensions(): Subject<any>;
}
