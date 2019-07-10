import { InjectionToken } from '@angular/core';
import { NbAuthToken, NbAuthTokenClass } from './token';
export interface NbTokenPack {
    name: string;
    ownerStrategyName: string;
    createdAt: Number;
    value: string;
}
export declare const NB_AUTH_FALLBACK_TOKEN: InjectionToken<NbAuthTokenClass<NbAuthToken>>;
/**
 * Creates a token parcel which could be stored/restored
 */
export declare class NbAuthTokenParceler {
    private fallbackClass;
    private tokenClasses;
    constructor(fallbackClass: NbAuthTokenClass, tokenClasses: NbAuthTokenClass[]);
    wrap(token: NbAuthToken): string;
    unwrap(value: string): NbAuthToken;
    protected getClassByName(name: any): NbAuthTokenClass;
    protected parseTokenPack(value: any): NbTokenPack;
}
