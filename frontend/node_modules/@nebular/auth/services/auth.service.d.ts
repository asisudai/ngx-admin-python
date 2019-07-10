import { Observable } from 'rxjs';
import { NbAuthStrategy } from '../strategies/auth-strategy';
import { NbAuthResult } from './auth-result';
import { NbTokenService } from './token/token.service';
import { NbAuthToken } from './token/token';
/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
export declare class NbAuthService {
    protected tokenService: NbTokenService;
    protected strategies: any;
    constructor(tokenService: NbTokenService, strategies: any);
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    getToken(): Observable<NbAuthToken>;
    /**
     * Returns true if auth token is present in the token storage
     * @returns {Observable<boolean>}
     */
    isAuthenticated(): Observable<boolean>;
    /**
     * Returns true if valid auth token is present in the token storage.
     * If not, calls the strategy refreshToken, and returns isAuthenticated() if success, false otherwise
     * @returns {Observable<boolean>}
     */
    isAuthenticatedOrRefresh(): Observable<boolean>;
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    onTokenChange(): Observable<NbAuthToken>;
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    onAuthenticationChange(): Observable<boolean>;
    /**
     * Authenticates with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    authenticate(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Registers with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    register(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Sign outs with the selected strategy
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param strategyName
     * @returns {Observable<NbAuthResult>}
     */
    logout(strategyName: string): Observable<NbAuthResult>;
    /**
     * Sends forgot password request to the selected strategy
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    requestPassword(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Tries to reset password with the selected strategy
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    resetPassword(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Sends a refresh token request
     * Stores received token in the token storage
     *
     * Example:
     * refreshToken('email', {token: token})
     *
     * @param {string} strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    refreshToken(strategyName: string, data?: any): Observable<NbAuthResult>;
    /**
     * Get registered strategy by name
     *
     * Example:
     * getStrategy('email')
     *
     * @param {string} provider
     * @returns {NbAbstractAuthProvider}
     */
    protected getStrategy(strategyName: string): NbAuthStrategy;
    private processResultToken;
}
