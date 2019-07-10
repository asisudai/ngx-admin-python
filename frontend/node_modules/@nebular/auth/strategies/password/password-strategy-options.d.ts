/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthTokenClass } from '../../services';
import { NbAuthStrategyOptions } from '../auth-strategy-options';
export interface NbPasswordStrategyModule {
    alwaysFail?: boolean;
    endpoint?: string;
    method?: string;
    redirect?: {
        success?: string | null;
        failure?: string | null;
    };
    requireValidToken?: boolean;
    defaultErrors?: string[];
    defaultMessages?: string[];
}
export interface NbPasswordStrategyReset extends NbPasswordStrategyModule {
    resetPasswordTokenKey?: string;
}
export interface NbPasswordStrategyToken {
    class?: NbAuthTokenClass;
    key?: string;
    getter?: Function;
}
export interface NbPasswordStrategyMessage {
    key?: string;
    getter?: Function;
}
export declare class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
    baseEndpoint?: string;
    login?: boolean | NbPasswordStrategyModule;
    register?: boolean | NbPasswordStrategyModule;
    requestPass?: boolean | NbPasswordStrategyModule;
    resetPass?: boolean | NbPasswordStrategyReset;
    logout?: boolean | NbPasswordStrategyReset;
    refreshToken?: boolean | NbPasswordStrategyModule;
    token?: NbPasswordStrategyToken;
    errors?: NbPasswordStrategyMessage;
    messages?: NbPasswordStrategyMessage;
    validation?: {
        password?: {
            required?: boolean;
            minLength?: number | null;
            maxLength?: number | null;
            regexp?: string | null;
        };
        email?: {
            required?: boolean;
            regexp?: string | null;
        };
        fullName?: {
            required?: boolean;
            minLength?: number | null;
            maxLength?: number | null;
            regexp?: string | null;
        };
    };
}
export declare const passwordStrategyOptions: NbPasswordAuthStrategyOptions;
