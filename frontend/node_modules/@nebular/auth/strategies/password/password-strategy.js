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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { NbAuthResult } from '../../services/auth-result';
import { NbAuthStrategy } from '../auth-strategy';
import { passwordStrategyOptions } from './password-strategy-options';
import { NbAuthIllegalTokenError } from '../../services/token/token';
/**
 * The most common authentication provider for email/password strategy.
 *
 * Strategy settings. Note, there is no need to copy over the whole object to change the settings you need.
 * Also, this.getOption call won't work outside of the default options declaration
 * (which is inside of the `NbPasswordAuthStrategy` class), so you have to replace it with a custom helper function
 * if you need it.
 *
 * ```ts
 *export class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
 *  name: string;
 *  baseEndpoint? = '/api/auth/';
 *  login?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'login',
 *    method: 'post',
 *    requireValidToken: false,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Login/Email combination is not correct, please try again.'],
 *    defaultMessages: ['You have been successfully logged in.'],
 *  };
 *  register?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'register',
 *    method: 'post',
 *    requireValidToken: false,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully registered.'],
 *  };
 *  requestPass?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'request-pass',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Reset password instructions have been sent to your email.'],
 *  };
 *  resetPass?: boolean | NbPasswordStrategyReset = {
 *    endpoint: 'reset-pass',
 *    method: 'put',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    resetPasswordTokenKey: 'reset_password_token',
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your password has been successfully changed.'],
 *  };
 *  logout?: boolean | NbPasswordStrategyReset = {
 *    alwaysFail: false,
 *    endpoint: 'logout',
 *    method: 'delete',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully logged out.'],
 *  };
 *  refreshToken?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'refresh-token',
 *    method: 'post',
 *    requireValidToken: false,
 *    redirect: {
 *      success: null,
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your token has been successfully refreshed.'],
 *  };
 *  token?: NbPasswordStrategyToken = {
 *    class: NbAuthSimpleToken,
 *    key: 'data.token',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.token.key,
 *    ),
 *  };
 *  errors?: NbPasswordStrategyMessage = {
 *    key: 'data.errors',
 *    getter: (module: string, res: HttpErrorResponse, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.error,
 *      options.errors.key,
 *      options[module].defaultErrors,
 *    ),
 *  };
 *  messages?: NbPasswordStrategyMessage = {
 *    key: 'data.messages',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.messages.key,
 *      options[module].defaultMessages,
 *    ),
 *  };
 *  validation?: {
 *    password?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *    email?: {
 *      required?: boolean;
 *      regexp?: string | null;
 *    };
 *    fullName?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *  };
 *}
 * ```
 */
var NbPasswordAuthStrategy = /** @class */ (function (_super) {
    __extends(NbPasswordAuthStrategy, _super);
    function NbPasswordAuthStrategy(http, route) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.route = route;
        _this.defaultOptions = passwordStrategyOptions;
        return _this;
    }
    NbPasswordAuthStrategy_1 = NbPasswordAuthStrategy;
    NbPasswordAuthStrategy.setup = function (options) {
        return [NbPasswordAuthStrategy_1, options];
    };
    NbPasswordAuthStrategy.prototype.authenticate = function (data) {
        var _this = this;
        var module = 'login';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options), _this.createToken(_this.getOption('token.getter')(module, res, _this.options), requireValidToken));
        }), catchError(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.register = function (data) {
        var _this = this;
        var module = 'register';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options), _this.createToken(_this.getOption('token.getter')('login', res, _this.options), requireValidToken));
        }), catchError(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.requestPassword = function (data) {
        var _this = this;
        var module = 'requestPass';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse();
            }
            return res;
        }), map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options));
        }), catchError(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.resetPassword = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var module = 'resetPass';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        var tokenKey = this.getOption(module + ".resetPasswordTokenKey");
        data[tokenKey] = this.route.snapshot.queryParams[tokenKey];
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse();
            }
            return res;
        }), map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options));
        }), catchError(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.logout = function () {
        var _this = this;
        var module = 'logout';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        return observableOf({})
            .pipe(switchMap(function (res) {
            if (!url) {
                return observableOf(res);
            }
            return _this.http.request(method, url, { observe: 'response' });
        }), map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse();
            }
            return res;
        }), map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options));
        }), catchError(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.refreshToken = function (data) {
        var _this = this;
        var module = 'refreshToken';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options), _this.createToken(_this.getOption('token.getter')(module, res, _this.options), requireValidToken));
        }), catchError(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.handleResponseError = function (res, module) {
        var errors = [];
        if (res instanceof HttpErrorResponse) {
            errors = this.getOption('errors.getter')(module, res, this.options);
        }
        else if (res instanceof NbAuthIllegalTokenError) {
            errors.push(res.message);
        }
        else {
            errors.push('Something went wrong.');
        }
        return observableOf(new NbAuthResult(false, res, this.getOption(module + ".redirect.failure"), errors));
    };
    var NbPasswordAuthStrategy_1;
    NbPasswordAuthStrategy = NbPasswordAuthStrategy_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, ActivatedRoute])
    ], NbPasswordAuthStrategy);
    return NbPasswordAuthStrategy;
}(NbAuthStrategy));
export { NbPasswordAuthStrategy };
//# sourceMappingURL=password-strategy.js.map