import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthResult } from '../services/auth-result';
import { NbAuthStrategyOptions } from './auth-strategy-options';
import { NbAuthToken } from '../services/token/token';
export declare abstract class NbAuthStrategy {
    protected defaultOptions: NbAuthStrategyOptions;
    protected options: NbAuthStrategyOptions;
    setOptions(options: any): void;
    getOption(key: string): any;
    createToken<T extends NbAuthToken>(value: any, failWhenInvalidToken?: boolean): T;
    getName(): string;
    abstract authenticate(data?: any): Observable<NbAuthResult>;
    abstract register(data?: any): Observable<NbAuthResult>;
    abstract requestPassword(data?: any): Observable<NbAuthResult>;
    abstract resetPassword(data?: any): Observable<NbAuthResult>;
    abstract logout(): Observable<NbAuthResult>;
    abstract refreshToken(data?: any): Observable<NbAuthResult>;
    protected createFailResponse(data?: any): HttpResponse<Object>;
    protected createSuccessResponse(data?: any): HttpResponse<Object>;
    protected getActionEndpoint(action: string): string;
}
