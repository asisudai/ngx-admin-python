import { Observable } from 'rxjs';
import { NbAuthStrategy } from '../auth-strategy';
import { NbAuthResult } from '../../services/auth-result';
import { NbDummyAuthStrategyOptions } from './dummy-strategy-options';
import { NbAuthStrategyClass } from '../../auth.options';
/**
 * Dummy auth strategy. Could be useful for auth setup when backend is not available yet.
 *
 *
 * Strategy settings.
 *
 * ```ts
 * export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
 *   name = 'dummy';
 *   token = {
 *     class: NbAuthSimpleToken,
 *   };
 *   delay? = 1000;
 *   alwaysFail? = false;
 * }
 * ```
 */
export declare class NbDummyAuthStrategy extends NbAuthStrategy {
    protected defaultOptions: NbDummyAuthStrategyOptions;
    static setup(options: NbDummyAuthStrategyOptions): [NbAuthStrategyClass, NbDummyAuthStrategyOptions];
    authenticate(data?: any): Observable<NbAuthResult>;
    register(data?: any): Observable<NbAuthResult>;
    requestPassword(data?: any): Observable<NbAuthResult>;
    resetPassword(data?: any): Observable<NbAuthResult>;
    logout(data?: any): Observable<NbAuthResult>;
    refreshToken(data?: any): Observable<NbAuthResult>;
    protected createDummyResult(data?: any): NbAuthResult;
}
