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
import { NbAuthSimpleToken } from '../../services';
import { NbAuthStrategyOptions } from '../auth-strategy-options';
import { getDeepFromObject } from '../../helpers';
var NbPasswordAuthStrategyOptions = /** @class */ (function (_super) {
    __extends(NbPasswordAuthStrategyOptions, _super);
    function NbPasswordAuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseEndpoint = '/api/auth/';
        _this.login = {
            alwaysFail: false,
            endpoint: 'login',
            method: 'post',
            requireValidToken: false,
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
        };
        _this.register = {
            alwaysFail: false,
            endpoint: 'register',
            method: 'post',
            requireValidToken: false,
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
        };
        _this.requestPass = {
            endpoint: 'request-pass',
            method: 'post',
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Reset password instructions have been sent to your email.'],
        };
        _this.resetPass = {
            endpoint: 'reset-pass',
            method: 'put',
            redirect: {
                success: '/',
                failure: null,
            },
            resetPasswordTokenKey: 'reset_password_token',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
        };
        _this.logout = {
            alwaysFail: false,
            endpoint: 'logout',
            method: 'delete',
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
        };
        _this.refreshToken = {
            endpoint: 'refresh-token',
            method: 'post',
            requireValidToken: false,
            redirect: {
                success: null,
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your token has been successfully refreshed.'],
        };
        _this.token = {
            class: NbAuthSimpleToken,
            key: 'data.token',
            getter: function (module, res, options) { return getDeepFromObject(res.body, options.token.key); },
        };
        _this.errors = {
            key: 'data.errors',
            getter: function (module, res, options) { return getDeepFromObject(res.error, options.errors.key, options[module].defaultErrors); },
        };
        _this.messages = {
            key: 'data.messages',
            getter: function (module, res, options) { return getDeepFromObject(res.body, options.messages.key, options[module].defaultMessages); },
        };
        return _this;
    }
    return NbPasswordAuthStrategyOptions;
}(NbAuthStrategyOptions));
export { NbPasswordAuthStrategyOptions };
export var passwordStrategyOptions = new NbPasswordAuthStrategyOptions();
//# sourceMappingURL=password-strategy-options.js.map