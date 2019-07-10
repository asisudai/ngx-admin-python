import { NbAuthToken } from './token';
import { NbAuthTokenParceler } from './token-parceler';
export declare abstract class NbTokenStorage {
    abstract get(): NbAuthToken;
    abstract set(token: NbAuthToken): any;
    abstract clear(): any;
}
/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `NbTokenStorage`
 * or `NbTokenLocalStorage` and provide in your `app.module`:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
 * ```
 *
 */
export declare class NbTokenLocalStorage extends NbTokenStorage {
    private parceler;
    protected key: string;
    constructor(parceler: NbAuthTokenParceler);
    /**
     * Returns token from localStorage
     * @returns {NbAuthToken}
     */
    get(): NbAuthToken;
    /**
     * Sets token to localStorage
     * @param {NbAuthToken} token
     */
    set(token: NbAuthToken): void;
    /**
     * Clears token from localStorage
     */
    clear(): void;
}
