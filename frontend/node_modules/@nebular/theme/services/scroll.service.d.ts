import { Observable, Subject } from 'rxjs';
/**
 * Scroll position type
 */
export interface NbScrollPosition {
    /**
     * x - left
     * @type {number}
     */
    x: number;
    /**
     * y - top
     * @type {number}
     */
    y: number;
}
/**
 * Layout scroll service. Provides information about current scroll position,
 * as well as methods to update position of the scroll.
 *
 * The reason we added this service is that in Nebular there are two scroll modes:
 * - the default mode when scroll is on body
 * - and the `withScroll` mode, when scroll is removed from the body and moved to an element inside of the
 * `nb-layout` component
 */
export declare class NbLayoutScrollService {
    private scrollPositionReq$;
    private manualScroll$;
    private scroll$;
    private scrollable$;
    /**
     * Returns scroll position
     *
     * @returns {Observable<NbScrollPosition>}
     */
    getPosition(): Observable<NbScrollPosition>;
    /**
     * Sets scroll position
     *
     * @param {number} x
     * @param {number} y
     */
    scrollTo(x?: number, y?: number): void;
    /**
     * Returns a stream of scroll events
     *
     * @returns {Observable<any>}
     */
    onScroll(): Observable<any>;
    /**
     * @private
     * @returns Observable<NbScrollPosition>.
     */
    onManualScroll(): Observable<NbScrollPosition>;
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetPosition(): Subject<any>;
    onScrollableChange(): Observable<boolean>;
    /**
     * @private
     * @param {any} event
     */
    fireScrollChange(event: any): void;
    scrollable(scrollable: boolean): void;
}
