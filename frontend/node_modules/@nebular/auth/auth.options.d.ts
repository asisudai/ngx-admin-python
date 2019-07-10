import { InjectionToken } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { NbAuthStrategy, NbAuthStrategyOptions } from './strategies';
import { NbAuthToken, NbAuthTokenClass } from './services/token/token';
export declare type NbAuthStrategyClass = new (...params: any[]) => NbAuthStrategy;
export declare type NbAuthStrategies = [NbAuthStrategyClass, NbAuthStrategyOptions][];
export interface NbAuthOptions {
    forms?: any;
    strategies?: NbAuthStrategies;
}
export interface NbAuthSocialLink {
    link?: string;
    url?: string;
    target?: string;
    title?: string;
    icon?: string;
}
export declare const defaultAuthOptions: any;
export declare const NB_AUTH_OPTIONS: InjectionToken<NbAuthOptions>;
export declare const NB_AUTH_USER_OPTIONS: InjectionToken<NbAuthOptions>;
export declare const NB_AUTH_STRATEGIES: InjectionToken<[NbAuthStrategyClass, NbAuthStrategyOptions][]>;
export declare const NB_AUTH_TOKENS: InjectionToken<NbAuthTokenClass<NbAuthToken>[]>;
export declare const NB_AUTH_INTERCEPTOR_HEADER: InjectionToken<string>;
export declare const NB_AUTH_TOKEN_INTERCEPTOR_FILTER: InjectionToken<(req: HttpRequest<any>) => boolean>;
