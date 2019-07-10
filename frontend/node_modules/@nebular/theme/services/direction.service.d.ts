import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * Layout direction.
 * */
export declare enum NbLayoutDirection {
    LTR = "ltr",
    RTL = "rtl"
}
/**
 * Layout direction setting injection token.
 * */
export declare const NB_LAYOUT_DIRECTION: InjectionToken<NbLayoutDirection>;
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to its changes
 */
export declare class NbLayoutDirectionService {
    private direction;
    private $directionChange;
    constructor(direction?: NbLayoutDirection);
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    isLtr(): boolean;
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    isRtl(): boolean;
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    getDirection(): NbLayoutDirection;
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    setDirection(direction: NbLayoutDirection): void;
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    onDirectionChange(): Observable<NbLayoutDirection>;
}
