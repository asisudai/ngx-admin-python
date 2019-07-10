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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { NB_WINDOW } from '@nebular/theme';
import { NbAuthStrategy } from '../auth-strategy';
import { NbAuthIllegalTokenError, NbAuthResult, } from '../../services/';
import { NbOAuth2ResponseType, auth2StrategyOptions, NbOAuth2GrantType, NbOAuth2ClientAuthMethod, } from './oauth2-strategy.options';
/**
 * OAuth2 authentication strategy.
 *
 * Strategy settings:
 *
 * ```ts
 * export enum NbOAuth2ResponseType {
 *   CODE = 'code',
 *   TOKEN = 'token',
 * }
 *
 * export enum NbOAuth2GrantType {
 *   AUTHORIZATION_CODE = 'authorization_code',
 *   PASSWORD = 'password',
 *   REFRESH_TOKEN = 'refresh_token',
 * }
 *
 * export class NbOAuth2AuthStrategyOptions {
 *   name: string;
 *   baseEndpoint?: string = '';
 *   clientId: string = '';
 *   clientSecret: string = '';
 *   clientAuthMethod: string = NbOAuth2ClientAuthMethod.NONE;
 *   redirect?: { success?: string; failure?: string } = {
 *     success: '/',
 *     failure: null,
 *   };
 *   defaultErrors?: any[] = ['Something went wrong, please try again.'];
 *   defaultMessages?: any[] = ['You have been successfully authenticated.'];
 *   authorize?: {
 *     endpoint?: string;
 *     redirectUri?: string;
 *     responseType?: string;
 *     requireValidToken: false,
 *     scope?: string;
 *     state?: string;
 *     params?: { [key: string]: string };
 *   } = {
 *     endpoint: 'authorize',
 *     responseType: NbOAuth2ResponseType.CODE,
 *   };
 *   token?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     requireValidToken: false,
 *     redirectUri?: string;
 *     scope?: string;
 *     class: NbAuthTokenClass,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
 *     class: NbAuthOAuth2Token,
 *   };
 *   refresh?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     scope?: string;
 *     requireValidToken: false,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.REFRESH_TOKEN,
 *   };
 * }
 * ```
 *
 */
var NbOAuth2AuthStrategy = /** @class */ (function (_super) {
    __extends(NbOAuth2AuthStrategy, _super);
    function NbOAuth2AuthStrategy(http, route, window) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.route = route;
        _this.window = window;
        _this.redirectResultHandlers = (_a = {},
            _a[NbOAuth2ResponseType.CODE] = function () {
                return observableOf(_this.route.snapshot.queryParams).pipe(switchMap(function (params) {
                    if (params.code) {
                        return _this.requestToken(params.code);
                    }
                    return observableOf(new NbAuthResult(false, params, _this.getOption('redirect.failure'), _this.getOption('defaultErrors'), []));
                }));
            },
            _a[NbOAuth2ResponseType.TOKEN] = function () {
                var module = 'authorize';
                var requireValidToken = _this.getOption(module + ".requireValidToken");
                return observableOf(_this.route.snapshot.fragment).pipe(map(function (fragment) { return _this.parseHashAsQueryParams(fragment); }), map(function (params) {
                    if (!params.error) {
                        return new NbAuthResult(true, params, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(params, requireValidToken));
                    }
                    return new NbAuthResult(false, params, _this.getOption('redirect.failure'), _this.getOption('defaultErrors'), []);
                }), catchError(function (err) {
                    var errors = [];
                    if (err instanceof NbAuthIllegalTokenError) {
                        errors.push(err.message);
                    }
                    else {
                        errors.push('Something went wrong.');
                    }
                    return observableOf(new NbAuthResult(false, err, _this.getOption('redirect.failure'), errors));
                }));
            },
            _a);
        _this.redirectResults = (_b = {},
            _b[NbOAuth2ResponseType.CODE] = function () {
                return observableOf(_this.route.snapshot.queryParams).pipe(map(function (params) { return !!(params && (params.code || params.error)); }));
            },
            _b[NbOAuth2ResponseType.TOKEN] = function () {
                return observableOf(_this.route.snapshot.fragment).pipe(map(function (fragment) { return _this.parseHashAsQueryParams(fragment); }), map(function (params) { return !!(params && (params.access_token || params.error)); }));
            },
            _b);
        _this.defaultOptions = auth2StrategyOptions;
        return _this;
    }
    NbOAuth2AuthStrategy_1 = NbOAuth2AuthStrategy;
    NbOAuth2AuthStrategy.setup = function (options) {
        return [NbOAuth2AuthStrategy_1, options];
    };
    Object.defineProperty(NbOAuth2AuthStrategy.prototype, "responseType", {
        get: function () {
            return this.getOption('authorize.responseType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOAuth2AuthStrategy.prototype, "clientAuthMethod", {
        get: function () {
            return this.getOption('clientAuthMethod');
        },
        enumerable: true,
        configurable: true
    });
    NbOAuth2AuthStrategy.prototype.authenticate = function (data) {
        var _this = this;
        if (this.getOption('token.grantType') === NbOAuth2GrantType.PASSWORD) {
            return this.passwordToken(data.email, data.password);
        }
        else {
            return this.isRedirectResult()
                .pipe(switchMap(function (result) {
                if (!result) {
                    _this.authorizeRedirect();
                    return observableOf(new NbAuthResult(true));
                }
                return _this.getAuthorizationResult();
            }));
        }
    };
    NbOAuth2AuthStrategy.prototype.getAuthorizationResult = function () {
        var redirectResultHandler = this.redirectResultHandlers[this.responseType];
        if (redirectResultHandler) {
            return redirectResultHandler.call(this);
        }
        throw new Error("'" + this.responseType + "' responseType is not supported,\n                      only 'token' and 'code' are supported now");
    };
    NbOAuth2AuthStrategy.prototype.refreshToken = function (token) {
        var _this = this;
        var module = 'refresh';
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        var headers = this.buildAuthHeader() || new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildRefreshRequestData(token), { headers: headers })
            .pipe(map(function (res) {
            return new NbAuthResult(true, res, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createRefreshedToken(res, token, requireValidToken));
        }), catchError(function (res) { return _this.handleResponseError(res); }));
    };
    NbOAuth2AuthStrategy.prototype.passwordToken = function (username, password) {
        var _this = this;
        var module = 'token';
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        var headers = this.buildAuthHeader() || new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildPasswordRequestData(username, password), { headers: headers })
            .pipe(map(function (res) {
            return new NbAuthResult(true, res, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(res, requireValidToken));
        }), catchError(function (res) { return _this.handleResponseError(res); }));
    };
    NbOAuth2AuthStrategy.prototype.authorizeRedirect = function () {
        this.window.location.href = this.buildRedirectUrl();
    };
    NbOAuth2AuthStrategy.prototype.isRedirectResult = function () {
        return this.redirectResults[this.responseType].call(this);
    };
    NbOAuth2AuthStrategy.prototype.requestToken = function (code) {
        var _this = this;
        var module = 'token';
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        var headers = this.buildAuthHeader() || new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildCodeRequestData(code), { headers: headers })
            .pipe(map(function (res) {
            return new NbAuthResult(true, res, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(res, requireValidToken));
        }), catchError(function (res) { return _this.handleResponseError(res); }));
    };
    NbOAuth2AuthStrategy.prototype.buildCodeRequestData = function (code) {
        var params = {
            grant_type: this.getOption('token.grantType'),
            code: code,
            redirect_uri: this.getOption('token.redirectUri'),
            client_id: this.getOption('clientId'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    };
    NbOAuth2AuthStrategy.prototype.buildRefreshRequestData = function (token) {
        var params = {
            grant_type: this.getOption('refresh.grantType'),
            refresh_token: token.getRefreshToken(),
            scope: this.getOption('refresh.scope'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    };
    NbOAuth2AuthStrategy.prototype.buildPasswordRequestData = function (username, password) {
        var params = {
            grant_type: this.getOption('token.grantType'),
            username: username,
            password: password,
            scope: this.getOption('token.scope'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    };
    NbOAuth2AuthStrategy.prototype.buildAuthHeader = function () {
        if (this.clientAuthMethod === NbOAuth2ClientAuthMethod.BASIC) {
            if (this.getOption('clientId') && this.getOption('clientSecret')) {
                return new HttpHeaders({
                    'Authorization': 'Basic ' + btoa(this.getOption('clientId') + ':' + this.getOption('clientSecret')),
                });
            }
            else {
                throw Error('For basic client authentication method, please provide both clientId & clientSecret.');
            }
        }
    };
    NbOAuth2AuthStrategy.prototype.cleanParams = function (params) {
        Object.entries(params)
            .forEach(function (_a) {
            var key = _a[0], val = _a[1];
            return !val && delete params[key];
        });
        return params;
    };
    NbOAuth2AuthStrategy.prototype.addCredentialsToParams = function (params) {
        if (this.clientAuthMethod === NbOAuth2ClientAuthMethod.REQUEST_BODY) {
            if (this.getOption('clientId') && this.getOption('clientSecret')) {
                return __assign({}, params, { client_id: this.getOption('clientId'), client_secret: this.getOption('clientSecret') });
            }
            else {
                throw Error('For request body client authentication method, please provide both clientId & clientSecret.');
            }
        }
        return params;
    };
    NbOAuth2AuthStrategy.prototype.handleResponseError = function (res) {
        var errors = [];
        if (res instanceof HttpErrorResponse) {
            if (res.error.error_description) {
                errors.push(res.error.error_description);
            }
            else {
                errors = this.getOption('defaultErrors');
            }
        }
        else if (res instanceof NbAuthIllegalTokenError) {
            errors.push(res.message);
        }
        else {
            errors.push('Something went wrong.');
        }
        ;
        return observableOf(new NbAuthResult(false, res, this.getOption('redirect.failure'), errors, []));
    };
    NbOAuth2AuthStrategy.prototype.buildRedirectUrl = function () {
        var params = __assign({ response_type: this.getOption('authorize.responseType'), client_id: this.getOption('clientId'), redirect_uri: this.getOption('authorize.redirectUri'), scope: this.getOption('authorize.scope'), state: this.getOption('authorize.state') }, this.getOption('authorize.params'));
        var endpoint = this.getActionEndpoint('authorize');
        var query = this.urlEncodeParameters(this.cleanParams(params));
        return endpoint + "?" + query;
    };
    NbOAuth2AuthStrategy.prototype.parseHashAsQueryParams = function (hash) {
        return hash ? hash.split('&').reduce(function (acc, part) {
            var item = part.split('=');
            acc[item[0]] = decodeURIComponent(item[1]);
            return acc;
        }, {}) : {};
    };
    NbOAuth2AuthStrategy.prototype.urlEncodeParameters = function (params) {
        return Object.keys(params).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
        }).join('&');
    };
    NbOAuth2AuthStrategy.prototype.createRefreshedToken = function (res, existingToken, requireValidToken) {
        var refreshedToken = this.createToken(res, requireValidToken);
        if (!refreshedToken.getRefreshToken() && existingToken.getRefreshToken()) {
            refreshedToken.setRefreshToken(existingToken.getRefreshToken());
        }
        return refreshedToken;
    };
    NbOAuth2AuthStrategy.prototype.register = function (data) {
        throw new Error('`register` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    };
    NbOAuth2AuthStrategy.prototype.requestPassword = function (data) {
        throw new Error('`requestPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    };
    NbOAuth2AuthStrategy.prototype.resetPassword = function (data) {
        if (data === void 0) { data = {}; }
        throw new Error('`resetPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    };
    NbOAuth2AuthStrategy.prototype.logout = function () {
        return observableOf(new NbAuthResult(true));
    };
    var NbOAuth2AuthStrategy_1;
    NbOAuth2AuthStrategy = NbOAuth2AuthStrategy_1 = __decorate([
        Injectable(),
        __param(2, Inject(NB_WINDOW)),
        __metadata("design:paramtypes", [HttpClient,
            ActivatedRoute, Object])
    ], NbOAuth2AuthStrategy);
    return NbOAuth2AuthStrategy;
}(NbAuthStrategy));
export { NbOAuth2AuthStrategy };
//# sourceMappingURL=oauth2-strategy.js.map