/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthTokenClass } from '../../services';
import { NbAuthStrategyOptions } from '../auth-strategy-options';
export declare enum NbOAuth2ResponseType {
    CODE = "code",
    TOKEN = "token"
}
export declare enum NbOAuth2GrantType {
    AUTHORIZATION_CODE = "authorization_code",
    PASSWORD = "password",
    REFRESH_TOKEN = "refresh_token"
}
export declare enum NbOAuth2ClientAuthMethod {
    NONE = "none",
    BASIC = "basic",
    REQUEST_BODY = "request-body"
}
export declare class NbOAuth2AuthStrategyOptions extends NbAuthStrategyOptions {
    baseEndpoint?: string;
    clientId: string;
    clientSecret?: string;
    clientAuthMethod?: string;
    redirect?: {
        success?: string;
        failure?: string;
    };
    defaultErrors?: any[];
    defaultMessages?: any[];
    authorize?: {
        endpoint?: string;
        redirectUri?: string;
        responseType?: string;
        requireValidToken?: boolean;
        scope?: string;
        state?: string;
        params?: {
            [key: string]: string;
        };
    };
    token?: {
        endpoint?: string;
        grantType?: string;
        redirectUri?: string;
        scope?: string;
        requireValidToken?: boolean;
        class: NbAuthTokenClass;
    };
    refresh?: {
        endpoint?: string;
        grantType?: string;
        scope?: string;
        requireValidToken?: boolean;
    };
}
export declare const auth2StrategyOptions: NbOAuth2AuthStrategyOptions;
