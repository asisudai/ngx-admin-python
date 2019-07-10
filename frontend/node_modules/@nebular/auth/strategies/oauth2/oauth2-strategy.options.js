/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { NbAuthOAuth2Token } from '../../services';
import { NbAuthStrategyOptions } from '../auth-strategy-options';
export var NbOAuth2ResponseType;
(function (NbOAuth2ResponseType) {
    NbOAuth2ResponseType["CODE"] = "code";
    NbOAuth2ResponseType["TOKEN"] = "token";
})(NbOAuth2ResponseType || (NbOAuth2ResponseType = {}));
// TODO: client_credentials
export var NbOAuth2GrantType;
(function (NbOAuth2GrantType) {
    NbOAuth2GrantType["AUTHORIZATION_CODE"] = "authorization_code";
    NbOAuth2GrantType["PASSWORD"] = "password";
    NbOAuth2GrantType["REFRESH_TOKEN"] = "refresh_token";
})(NbOAuth2GrantType || (NbOAuth2GrantType = {}));
export var NbOAuth2ClientAuthMethod;
(function (NbOAuth2ClientAuthMethod) {
    NbOAuth2ClientAuthMethod["NONE"] = "none";
    NbOAuth2ClientAuthMethod["BASIC"] = "basic";
    NbOAuth2ClientAuthMethod["REQUEST_BODY"] = "request-body";
})(NbOAuth2ClientAuthMethod || (NbOAuth2ClientAuthMethod = {}));
var NbOAuth2AuthStrategyOptions = /** @class */ (function (_super) {
    __extends(NbOAuth2AuthStrategyOptions, _super);
    function NbOAuth2AuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseEndpoint = '';
        _this.clientId = '';
        _this.clientSecret = '';
        _this.clientAuthMethod = NbOAuth2ClientAuthMethod.NONE;
        _this.redirect = {
            success: '/',
            failure: null,
        };
        _this.defaultErrors = ['Something went wrong, please try again.'];
        _this.defaultMessages = ['You have been successfully authenticated.'];
        _this.authorize = {
            endpoint: 'authorize',
            responseType: NbOAuth2ResponseType.CODE,
        };
        _this.token = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
            requireValidToken: false,
            class: NbAuthOAuth2Token,
        };
        _this.refresh = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.REFRESH_TOKEN,
        };
        return _this;
    }
    return NbOAuth2AuthStrategyOptions;
}(NbAuthStrategyOptions));
export { NbOAuth2AuthStrategyOptions };
export var auth2StrategyOptions = new NbOAuth2AuthStrategyOptions();
//# sourceMappingURL=oauth2-strategy.options.js.map