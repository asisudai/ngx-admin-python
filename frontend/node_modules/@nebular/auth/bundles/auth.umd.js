(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@nebular/theme'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/forms', '@nebular/theme', 'rxjs', 'rxjs/operators', '@angular/common/http'], factory) :
	(factory((global.nb = global.nb || {}, global.nb.auth = global.nb.auth || {}),global.ng.core,global.ng.common,global.ng.router,global.ng.forms,global.nb.theme,global.Rx,global.Rx.operators,global.ng.common.http));
}(this, (function (exports,_angular_core,_angular_common,_angular_router,_angular_forms,_nebular_theme,rxjs,rxjs_operators,_angular_common_http) { 'use strict';

var socialLinks = [];
var defaultAuthOptions = {
    strategies: [],
    forms: {
        login: {
            redirectDelay: 500,
            strategy: 'email',
            rememberMe: true,
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        register: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
            socialLinks: socialLinks,
        },
        requestPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        resetPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        logout: {
            redirectDelay: 500,
            strategy: 'email',
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            email: {
                required: true,
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50,
            },
        },
    },
};
var NB_AUTH_OPTIONS = new _angular_core.InjectionToken('Nebular Auth Options');
var NB_AUTH_USER_OPTIONS = new _angular_core.InjectionToken('Nebular User Auth Options');
var NB_AUTH_STRATEGIES = new _angular_core.InjectionToken('Nebular Auth Strategies');
var NB_AUTH_TOKENS = new _angular_core.InjectionToken('Nebular Auth Tokens');
var NB_AUTH_INTERCEPTOR_HEADER = new _angular_core.InjectionToken('Nebular Simple Interceptor Header');
var NB_AUTH_TOKEN_INTERCEPTOR_FILTER = new _angular_core.InjectionToken('Nebular Interceptor Filter');

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;
                // custom cloning and overwrite for specific objects
            }
            else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
function isSpecificValue(val) {
    return (val instanceof Date
        || val instanceof RegExp) ? true : false;
}
function cloneSpecificValue(val) {
    if (val instanceof Date) {
        return new Date(val.getTime());
    }
    else if (val instanceof RegExp) {
        return new RegExp(val);
    }
    else {
        throw new Error('cloneSpecificValue: Unexpected situation');
    }
}
/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    var clone = [];
    arr.forEach(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            }
            else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            }
            else {
                clone[index] = deepExtend({}, item);
            }
        }
        else {
            clone[index] = item;
        }
    });
    return clone;
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = deepExtend({}, object || {});
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
        else {
            level = undefined;
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function urlBase64Decode(str) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    return b64DecodeUnicode(output);
}
function b64decode(str) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = '';
    str = String(str).replace(/=+$/, '');
    if (str.length % 4 === 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
    // initialize result and counters
    var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
    // get next character
    buffer = str.charAt(idx++); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(b64decode(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NbAuthToken = /** @class */ (function () {
    function NbAuthToken() {
        this.payload = null;
    }
    NbAuthToken.prototype.getName = function () {
        return this.constructor.NAME;
    };
    NbAuthToken.prototype.getPayload = function () {
        return this.payload;
    };
    return NbAuthToken;
}());
var NbAuthTokenNotFoundError = /** @class */ (function (_super) {
    __extends$1(NbAuthTokenNotFoundError, _super);
    function NbAuthTokenNotFoundError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthTokenNotFoundError;
}(Error));
var NbAuthIllegalTokenError = /** @class */ (function (_super) {
    __extends$1(NbAuthIllegalTokenError, _super);
    function NbAuthIllegalTokenError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthIllegalTokenError;
}(Error));
var NbAuthEmptyTokenError = /** @class */ (function (_super) {
    __extends$1(NbAuthEmptyTokenError, _super);
    function NbAuthEmptyTokenError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthEmptyTokenError;
}(NbAuthIllegalTokenError));
var NbAuthIllegalJWTTokenError = /** @class */ (function (_super) {
    __extends$1(NbAuthIllegalJWTTokenError, _super);
    function NbAuthIllegalJWTTokenError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthIllegalJWTTokenError;
}(NbAuthIllegalTokenError));
function nbAuthCreateToken(tokenClass, token, ownerStrategyName, createdAt) {
    return new tokenClass(token, ownerStrategyName, createdAt);
}
function decodeJwtPayload(payload) {
    if (payload.length === 0) {
        throw new NbAuthEmptyTokenError('Cannot extract from an empty payload.');
    }
    var parts = payload.split('.');
    if (parts.length !== 3) {
        throw new NbAuthIllegalJWTTokenError("The payload " + payload + " is not valid JWT payload and must consist of three parts.");
    }
    var decoded;
    try {
        decoded = urlBase64Decode(parts[1]);
    }
    catch (e) {
        throw new NbAuthIllegalJWTTokenError("The payload " + payload + " is not valid JWT payload and cannot be parsed.");
    }
    if (!decoded) {
        throw new NbAuthIllegalJWTTokenError("The payload " + payload + " is not valid JWT payload and cannot be decoded.");
    }
    return JSON.parse(decoded);
}
/**
 * Wrapper for simple (text) token
 */
var NbAuthSimpleToken = /** @class */ (function (_super) {
    __extends$1(NbAuthSimpleToken, _super);
    function NbAuthSimpleToken(token, ownerStrategyName, createdAt) {
        var _this = _super.call(this) || this;
        _this.token = token;
        _this.ownerStrategyName = ownerStrategyName;
        _this.createdAt = createdAt;
        try {
            _this.parsePayload();
        }
        catch (err) {
            if (!(err instanceof NbAuthTokenNotFoundError)) {
                // token is present but has got a problem, including illegal
                throw err;
            }
        }
        _this.createdAt = _this.prepareCreatedAt(createdAt);
        return _this;
    }
    NbAuthSimpleToken.prototype.parsePayload = function () {
        this.payload = null;
    };
    NbAuthSimpleToken.prototype.prepareCreatedAt = function (date) {
        return date ? date : new Date();
    };
    /**
     * Returns the token's creation date
     * @returns {Date}
     */
    NbAuthSimpleToken.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Returns the token value
     * @returns string
     */
    NbAuthSimpleToken.prototype.getValue = function () {
        return this.token;
    };
    NbAuthSimpleToken.prototype.getOwnerStrategyName = function () {
        return this.ownerStrategyName;
    };
    /**
     * Is non empty and valid
     * @returns {boolean}
     */
    NbAuthSimpleToken.prototype.isValid = function () {
        return !!this.getValue();
    };
    /**
     * Validate value and convert to string, if value is not valid return empty string
     * @returns {string}
     */
    NbAuthSimpleToken.prototype.toString = function () {
        return !!this.token ? this.token : '';
    };
    NbAuthSimpleToken.NAME = 'nb:auth:simple:token';
    return NbAuthSimpleToken;
}(NbAuthToken));
/**
 * Wrapper for JWT token with additional methods.
 */
var NbAuthJWTToken = /** @class */ (function (_super) {
    __extends$1(NbAuthJWTToken, _super);
    function NbAuthJWTToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * for JWT token, the iat (issued at) field of the token payload contains the creation Date
     */
    NbAuthJWTToken.prototype.prepareCreatedAt = function (date) {
        var decoded = this.getPayload();
        return decoded && decoded.iat ? new Date(Number(decoded.iat) * 1000) : _super.prototype.prepareCreatedAt.call(this, date);
    };
    /**
     * Returns payload object
     * @returns any
     */
    NbAuthJWTToken.prototype.parsePayload = function () {
        if (!this.token) {
            throw new NbAuthTokenNotFoundError('Token not found. ');
        }
        this.payload = decodeJwtPayload(this.token);
    };
    /**
     * Returns expiration date
     * @returns Date
     */
    NbAuthJWTToken.prototype.getTokenExpDate = function () {
        var decoded = this.getPayload();
        if (decoded && !decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp); // 'cause jwt token are set in seconds
        return date;
    };
    /**
     * Is data expired
     * @returns {boolean}
     */
    NbAuthJWTToken.prototype.isValid = function () {
        return _super.prototype.isValid.call(this) && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    };
    NbAuthJWTToken.NAME = 'nb:auth:jwt:token';
    return NbAuthJWTToken;
}(NbAuthSimpleToken));
var prepareOAuth2Token = function (data) {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        }
        catch (e) { }
    }
    return data;
};
var ɵ0 = prepareOAuth2Token;
/**
 * Wrapper for OAuth2 token whose access_token is a JWT Token
 */
var NbAuthOAuth2Token = /** @class */ (function (_super) {
    __extends$1(NbAuthOAuth2Token, _super);
    function NbAuthOAuth2Token(data, ownerStrategyName, createdAt) {
        if (data === void 0) { data = {}; }
        // we may get it as string when retrieving from a storage
        return _super.call(this, prepareOAuth2Token(data), ownerStrategyName, createdAt) || this;
    }
    /**
     * Returns the token value
     * @returns string
     */
    NbAuthOAuth2Token.prototype.getValue = function () {
        return this.token.access_token;
    };
    /**
     * Returns the refresh token
     * @returns string
     */
    NbAuthOAuth2Token.prototype.getRefreshToken = function () {
        return this.token.refresh_token;
    };
    /**
     *  put refreshToken in the token payload
      * @param refreshToken
     */
    NbAuthOAuth2Token.prototype.setRefreshToken = function (refreshToken) {
        this.token.refresh_token = refreshToken;
    };
    /**
     * Parses token payload
     * @returns any
     */
    NbAuthOAuth2Token.prototype.parsePayload = function () {
        if (!this.token) {
            throw new NbAuthTokenNotFoundError('Token not found.');
        }
        else {
            if (!Object.keys(this.token).length) {
                throw new NbAuthEmptyTokenError('Cannot extract payload from an empty token.');
            }
        }
        this.payload = this.token;
    };
    /**
     * Returns the token type
     * @returns string
     */
    NbAuthOAuth2Token.prototype.getType = function () {
        return this.token.token_type;
    };
    /**
     * Is data expired
     * @returns {boolean}
     */
    NbAuthOAuth2Token.prototype.isValid = function () {
        return _super.prototype.isValid.call(this) && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    };
    /**
     * Returns expiration date
     * @returns Date
     */
    NbAuthOAuth2Token.prototype.getTokenExpDate = function () {
        if (!this.token.hasOwnProperty('expires_in')) {
            return null;
        }
        return new Date(this.createdAt.getTime() + Number(this.token.expires_in) * 1000);
    };
    /**
     * Convert to string
     * @returns {string}
     */
    NbAuthOAuth2Token.prototype.toString = function () {
        return JSON.stringify(this.token);
    };
    NbAuthOAuth2Token.NAME = 'nb:auth:oauth2:token';
    return NbAuthOAuth2Token;
}(NbAuthSimpleToken));
/**
 * Wrapper for OAuth2 token embedding JWT tokens
 */
var NbAuthOAuth2JWTToken = /** @class */ (function (_super) {
    __extends$1(NbAuthOAuth2JWTToken, _super);
    function NbAuthOAuth2JWTToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbAuthOAuth2JWTToken.prototype.parsePayload = function () {
        _super.prototype.parsePayload.call(this);
        this.parseAccessTokenPayload();
    };
    NbAuthOAuth2JWTToken.prototype.parseAccessTokenPayload = function () {
        var accessToken = this.getValue();
        if (!accessToken) {
            throw new NbAuthTokenNotFoundError('access_token key not found.');
        }
        this.accessTokenPayload = decodeJwtPayload(accessToken);
    };
    /**
     * Returns access token payload
     * @returns any
     */
    NbAuthOAuth2JWTToken.prototype.getAccessTokenPayload = function () {
        return this.accessTokenPayload;
    };
    /**
     * for Oauth2 JWT token, the iat (issued at) field of the access_token payload
     */
    NbAuthOAuth2JWTToken.prototype.prepareCreatedAt = function (date) {
        var payload = this.accessTokenPayload;
        return payload && payload.iat ? new Date(Number(payload.iat) * 1000) : _super.prototype.prepareCreatedAt.call(this, date);
    };
    /**
     * Is token valid
     * @returns {boolean}
     */
    NbAuthOAuth2JWTToken.prototype.isValid = function () {
        return this.accessTokenPayload && _super.prototype.isValid.call(this);
    };
    /**
     * Returns expiration date :
     * - exp if set,
     * - super.getExpDate() otherwise
     * @returns Date
     */
    NbAuthOAuth2JWTToken.prototype.getTokenExpDate = function () {
        if (this.accessTokenPayload && this.accessTokenPayload.hasOwnProperty('exp')) {
            var date = new Date(0);
            date.setUTCSeconds(this.accessTokenPayload.exp);
            return date;
        }
        else {
            return _super.prototype.getTokenExpDate.call(this);
        }
    };
    NbAuthOAuth2JWTToken.NAME = 'nb:auth:oauth2:jwt:token';
    return NbAuthOAuth2JWTToken;
}(NbAuthOAuth2Token));

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NB_AUTH_FALLBACK_TOKEN = new _angular_core.InjectionToken('Nebular Auth Options');
/**
 * Creates a token parcel which could be stored/restored
 */
var NbAuthTokenParceler = /** @class */ (function () {
    function NbAuthTokenParceler(fallbackClass, tokenClasses) {
        this.fallbackClass = fallbackClass;
        this.tokenClasses = tokenClasses;
    }
    NbAuthTokenParceler.prototype.wrap = function (token) {
        return JSON.stringify({
            name: token.getName(),
            ownerStrategyName: token.getOwnerStrategyName(),
            createdAt: token.getCreatedAt().getTime(),
            value: token.toString(),
        });
    };
    NbAuthTokenParceler.prototype.unwrap = function (value) {
        var tokenClass = this.fallbackClass;
        var tokenValue = '';
        var tokenOwnerStrategyName = '';
        var tokenCreatedAt = null;
        var tokenPack = this.parseTokenPack(value);
        if (tokenPack) {
            tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
            tokenValue = tokenPack.value;
            tokenOwnerStrategyName = tokenPack.ownerStrategyName;
            tokenCreatedAt = new Date(Number(tokenPack.createdAt));
        }
        return nbAuthCreateToken(tokenClass, tokenValue, tokenOwnerStrategyName, tokenCreatedAt);
    };
    // TODO: this could be moved to a separate token registry
    NbAuthTokenParceler.prototype.getClassByName = function (name) {
        return this.tokenClasses.find(function (tokenClass) { return tokenClass.NAME === name; });
    };
    NbAuthTokenParceler.prototype.parseTokenPack = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) { }
        return null;
    };
    NbAuthTokenParceler = __decorate$4([
        _angular_core.Injectable(),
        __param$1(0, _angular_core.Inject(NB_AUTH_FALLBACK_TOKEN)),
        __param$1(1, _angular_core.Inject(NB_AUTH_TOKENS)),
        __metadata$3("design:paramtypes", [Object, Array])
    ], NbAuthTokenParceler);
    return NbAuthTokenParceler;
}());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbTokenStorage = /** @class */ (function () {
    function NbTokenStorage() {
    }
    return NbTokenStorage;
}());
/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `NbTokenStorage`
 * or `NbTokenLocalStorage` and provide in your `app.module`:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
 * ```
 *
 */
var NbTokenLocalStorage = /** @class */ (function (_super) {
    __extends(NbTokenLocalStorage, _super);
    function NbTokenLocalStorage(parceler) {
        var _this = _super.call(this) || this;
        _this.parceler = parceler;
        _this.key = 'auth_app_token';
        return _this;
    }
    /**
     * Returns token from localStorage
     * @returns {NbAuthToken}
     */
    NbTokenLocalStorage.prototype.get = function () {
        var raw = localStorage.getItem(this.key);
        return this.parceler.unwrap(raw);
    };
    /**
     * Sets token to localStorage
     * @param {NbAuthToken} token
     */
    NbTokenLocalStorage.prototype.set = function (token) {
        var raw = this.parceler.wrap(token);
        localStorage.setItem(this.key, raw);
    };
    /**
     * Clears token from localStorage
     */
    NbTokenLocalStorage.prototype.clear = function () {
        localStorage.removeItem(this.key);
    };
    NbTokenLocalStorage = __decorate$3([
        _angular_core.Injectable(),
        __metadata$2("design:paramtypes", [NbAuthTokenParceler])
    ], NbTokenLocalStorage);
    return NbTokenLocalStorage;
}(NbTokenStorage));

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
var NbTokenService = /** @class */ (function () {
    function NbTokenService(tokenStorage) {
        this.tokenStorage = tokenStorage;
        this.token$ = new rxjs.BehaviorSubject(null);
        this.publishStoredToken();
    }
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.tokenChange = function () {
        return this.token$
            .pipe(rxjs_operators.filter(function (value) { return !!value; }), rxjs_operators.share());
    };
    /**
     * Sets a token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {NbAuthToken} token
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.set = function (token) {
        this.tokenStorage.set(token);
        this.publishStoredToken();
        return rxjs.of(null);
    };
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.get = function () {
        var token = this.tokenStorage.get();
        return rxjs.of(token);
    };
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.clear = function () {
        this.tokenStorage.clear();
        this.publishStoredToken();
        return rxjs.of(null);
    };
    NbTokenService.prototype.publishStoredToken = function () {
        this.token$.next(this.tokenStorage.get());
    };
    NbTokenService = __decorate$2([
        _angular_core.Injectable(),
        __metadata$1("design:paramtypes", [NbTokenStorage])
    ], NbTokenService);
    return NbTokenService;
}());

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
var NbAuthService = /** @class */ (function () {
    function NbAuthService(tokenService, strategies) {
        this.tokenService = tokenService;
        this.strategies = strategies;
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    NbAuthService.prototype.getToken = function () {
        return this.tokenService.get();
    };
    /**
     * Returns true if auth token is present in the token storage
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.isAuthenticated = function () {
        return this.getToken()
            .pipe(rxjs_operators.map(function (token) { return token.isValid(); }));
    };
    /**
     * Returns true if valid auth token is present in the token storage.
     * If not, calls the strategy refreshToken, and returns isAuthenticated() if success, false otherwise
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.isAuthenticatedOrRefresh = function () {
        var _this = this;
        return this.getToken()
            .pipe(rxjs_operators.switchMap(function (token) {
            if (token.getValue() && !token.isValid()) {
                return _this.refreshToken(token.getOwnerStrategyName(), token)
                    .pipe(rxjs_operators.switchMap(function (res) {
                    if (res.isSuccess()) {
                        return _this.isAuthenticated();
                    }
                    else {
                        return rxjs.of(false);
                    }
                }));
            }
            else {
                return rxjs.of(token.isValid());
            }
        }));
    };
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    NbAuthService.prototype.onTokenChange = function () {
        return this.tokenService.tokenChange();
    };
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.onAuthenticationChange = function () {
        return this.onTokenChange()
            .pipe(rxjs_operators.map(function (token) { return token.isValid(); }));
    };
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
    NbAuthService.prototype.authenticate = function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).authenticate(data)
            .pipe(rxjs_operators.switchMap(function (result) {
            return _this.processResultToken(result);
        }));
    };
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
    NbAuthService.prototype.register = function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).register(data)
            .pipe(rxjs_operators.switchMap(function (result) {
            return _this.processResultToken(result);
        }));
    };
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
    NbAuthService.prototype.logout = function (strategyName) {
        var _this = this;
        return this.getStrategy(strategyName).logout()
            .pipe(rxjs_operators.switchMap(function (result) {
            if (result.isSuccess()) {
                _this.tokenService.clear()
                    .pipe(rxjs_operators.map(function () { return result; }));
            }
            return rxjs.of(result);
        }));
    };
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
    NbAuthService.prototype.requestPassword = function (strategyName, data) {
        return this.getStrategy(strategyName).requestPassword(data);
    };
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
    NbAuthService.prototype.resetPassword = function (strategyName, data) {
        return this.getStrategy(strategyName).resetPassword(data);
    };
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
    NbAuthService.prototype.refreshToken = function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).refreshToken(data)
            .pipe(rxjs_operators.switchMap(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Get registered strategy by name
     *
     * Example:
     * getStrategy('email')
     *
     * @param {string} provider
     * @returns {NbAbstractAuthProvider}
     */
    NbAuthService.prototype.getStrategy = function (strategyName) {
        var found = this.strategies.find(function (strategy) { return strategy.getName() === strategyName; });
        if (!found) {
            throw new TypeError("There is no Auth Strategy registered under '" + strategyName + "' name");
        }
        return found;
    };
    NbAuthService.prototype.processResultToken = function (result) {
        if (result.isSuccess() && result.getToken()) {
            return this.tokenService.set(result.getToken())
                .pipe(rxjs_operators.map(function (token) {
                return result;
            }));
        }
        return rxjs.of(result);
    };
    NbAuthService = __decorate$1([
        _angular_core.Injectable(),
        __param(1, _angular_core.Inject(NB_AUTH_STRATEGIES)),
        __metadata("design:paramtypes", [NbTokenService, Object])
    ], NbAuthService);
    return NbAuthService;
}());

var NbAuthResult = /** @class */ (function () {
    // TODO: better pass object
    function NbAuthResult(success, response, redirect, errors, messages, token) {
        if (token === void 0) { token = null; }
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if (messages instanceof Array) {
            this.messages = messages;
        }
        this.token = token;
    }
    NbAuthResult.prototype.getResponse = function () {
        return this.response;
    };
    NbAuthResult.prototype.getToken = function () {
        return this.token;
    };
    NbAuthResult.prototype.getRedirect = function () {
        return this.redirect;
    };
    NbAuthResult.prototype.getErrors = function () {
        return this.errors.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.getMessages = function () {
        return this.messages.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.isSuccess = function () {
        return this.success;
    };
    NbAuthResult.prototype.isFailure = function () {
        return !this.success;
    };
    return NbAuthResult;
}());

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NbAuthJWTInterceptor = /** @class */ (function () {
    function NbAuthJWTInterceptor(injector, filter$$1) {
        this.injector = injector;
        this.filter = filter$$1;
    }
    NbAuthJWTInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // do not intercept request whose urls are filtered by the injected filter
        if (!this.filter(req)) {
            return this.authService.isAuthenticatedOrRefresh()
                .pipe(rxjs_operators.switchMap(function (authenticated) {
                if (authenticated) {
                    return _this.authService.getToken().pipe(rxjs_operators.switchMap(function (token) {
                        var JWT = "Bearer " + token.getValue();
                        req = req.clone({
                            setHeaders: {
                                Authorization: JWT,
                            },
                        });
                        return next.handle(req);
                    }));
                }
                else {
                    // Request is sent to server without authentication so that the client code
                    // receives the 401/403 error and can act as desired ('session expired', redirect to login, aso)
                    return next.handle(req);
                }
            }));
        }
        else {
            return next.handle(req);
        }
    };
    Object.defineProperty(NbAuthJWTInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(NbAuthService);
        },
        enumerable: true,
        configurable: true
    });
    NbAuthJWTInterceptor = __decorate$5([
        _angular_core.Injectable(),
        __param$2(1, _angular_core.Inject(NB_AUTH_TOKEN_INTERCEPTOR_FILTER)),
        __metadata$4("design:paramtypes", [_angular_core.Injector, Object])
    ], NbAuthJWTInterceptor);
    return NbAuthJWTInterceptor;
}());

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NbAuthSimpleInterceptor = /** @class */ (function () {
    function NbAuthSimpleInterceptor(injector, headerName) {
        if (headerName === void 0) { headerName = 'Authorization'; }
        this.injector = injector;
        this.headerName = headerName;
    }
    NbAuthSimpleInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return this.authService.getToken()
            .pipe(rxjs_operators.switchMap(function (token) {
            var _a;
            if (token && token.getValue()) {
                req = req.clone({
                    setHeaders: (_a = {},
                        _a[_this.headerName] = token.getValue(),
                        _a),
                });
            }
            return next.handle(req);
        }));
    };
    Object.defineProperty(NbAuthSimpleInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(NbAuthService);
        },
        enumerable: true,
        configurable: true
    });
    NbAuthSimpleInterceptor = __decorate$6([
        _angular_core.Injectable(),
        __param$3(1, _angular_core.Inject(NB_AUTH_INTERCEPTOR_HEADER)),
        __metadata$5("design:paramtypes", [_angular_core.Injector, String])
    ], NbAuthSimpleInterceptor);
    return NbAuthSimpleInterceptor;
}());

var NbAuthStrategy = /** @class */ (function () {
    function NbAuthStrategy() {
    }
    // we should keep this any and validation should be done in `register` method instead
    // otherwise it won't be possible to pass an empty object
    NbAuthStrategy.prototype.setOptions = function (options) {
        this.options = deepExtend({}, this.defaultOptions, options);
    };
    NbAuthStrategy.prototype.getOption = function (key) {
        return getDeepFromObject(this.options, key, null);
    };
    NbAuthStrategy.prototype.createToken = function (value, failWhenInvalidToken) {
        var token = nbAuthCreateToken(this.getOption('token.class'), value, this.getName());
        // At this point, nbAuthCreateToken failed with NbAuthIllegalTokenError which MUST be intercepted by strategies
        // Or token is created. It MAY be created even if backend did not return any token, in this case it is !Valid
        if (failWhenInvalidToken && !token.isValid()) {
            // If we require a valid token (i.e. isValid), then we MUST throw NbAuthIllegalTokenError so that the strategies
            // intercept it
            throw new NbAuthIllegalTokenError('Token is empty or invalid.');
        }
        return token;
    };
    NbAuthStrategy.prototype.getName = function () {
        return this.getOption('name');
    };
    NbAuthStrategy.prototype.createFailResponse = function (data) {
        return new _angular_common_http.HttpResponse({ body: {}, status: 401 });
    };
    NbAuthStrategy.prototype.createSuccessResponse = function (data) {
        return new _angular_common_http.HttpResponse({ body: {}, status: 200 });
    };
    NbAuthStrategy.prototype.getActionEndpoint = function (action) {
        var actionEndpoint = this.getOption(action + ".endpoint");
        var baseEndpoint = this.getOption('baseEndpoint');
        return baseEndpoint + actionEndpoint;
    };
    return NbAuthStrategy;
}());

var NbAuthStrategyOptions = /** @class */ (function () {
    function NbAuthStrategyOptions() {
    }
    return NbAuthStrategyOptions;
}());

var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbDummyAuthStrategyOptions = /** @class */ (function (_super) {
    __extends$3(NbDummyAuthStrategyOptions, _super);
    function NbDummyAuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.token = {
            class: NbAuthSimpleToken,
        };
        _this.delay = 1000;
        _this.alwaysFail = false;
        return _this;
    }
    return NbDummyAuthStrategyOptions;
}(NbAuthStrategyOptions));
var dummyStrategyOptions = new NbDummyAuthStrategyOptions();

var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var NbDummyAuthStrategy = /** @class */ (function (_super) {
    __extends$2(NbDummyAuthStrategy, _super);
    function NbDummyAuthStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = dummyStrategyOptions;
        return _this;
    }
    NbDummyAuthStrategy_1 = NbDummyAuthStrategy;
    NbDummyAuthStrategy.setup = function (options) {
        return [NbDummyAuthStrategy_1, options];
    };
    NbDummyAuthStrategy.prototype.authenticate = function (data) {
        return rxjs.of(this.createDummyResult(data))
            .pipe(rxjs_operators.delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.register = function (data) {
        return rxjs.of(this.createDummyResult(data))
            .pipe(rxjs_operators.delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.requestPassword = function (data) {
        return rxjs.of(this.createDummyResult(data))
            .pipe(rxjs_operators.delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.resetPassword = function (data) {
        return rxjs.of(this.createDummyResult(data))
            .pipe(rxjs_operators.delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.logout = function (data) {
        return rxjs.of(this.createDummyResult(data))
            .pipe(rxjs_operators.delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.refreshToken = function (data) {
        return rxjs.of(this.createDummyResult(data))
            .pipe(rxjs_operators.delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.createDummyResult = function (data) {
        if (this.getOption('alwaysFail')) {
            return new NbAuthResult(false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        try {
            var token = this.createToken('test token', true);
            return new NbAuthResult(true, this.createSuccessResponse(data), '/', [], ['Successfully logged in.'], token);
        }
        catch (err) {
            return new NbAuthResult(false, this.createFailResponse(data), null, [err.message]);
        }
    };
    var NbDummyAuthStrategy_1;
    NbDummyAuthStrategy = NbDummyAuthStrategy_1 = __decorate$7([
        _angular_core.Injectable()
    ], NbDummyAuthStrategy);
    return NbDummyAuthStrategy;
}(NbAuthStrategy));

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NbPasswordAuthStrategyOptions = /** @class */ (function (_super) {
    __extends$5(NbPasswordAuthStrategyOptions, _super);
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
var passwordStrategyOptions = new NbPasswordAuthStrategyOptions();

var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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
    __extends$4(NbPasswordAuthStrategy, _super);
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
            .pipe(rxjs_operators.map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), rxjs_operators.map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options), _this.createToken(_this.getOption('token.getter')(module, res, _this.options), requireValidToken));
        }), rxjs_operators.catchError(function (res) {
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
            .pipe(rxjs_operators.map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), rxjs_operators.map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options), _this.createToken(_this.getOption('token.getter')('login', res, _this.options), requireValidToken));
        }), rxjs_operators.catchError(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.requestPassword = function (data) {
        var _this = this;
        var module = 'requestPass';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(rxjs_operators.map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse();
            }
            return res;
        }), rxjs_operators.map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options));
        }), rxjs_operators.catchError(function (res) {
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
            .pipe(rxjs_operators.map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse();
            }
            return res;
        }), rxjs_operators.map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options));
        }), rxjs_operators.catchError(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.logout = function () {
        var _this = this;
        var module = 'logout';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        return rxjs.of({})
            .pipe(rxjs_operators.switchMap(function (res) {
            if (!url) {
                return rxjs.of(res);
            }
            return _this.http.request(method, url, { observe: 'response' });
        }), rxjs_operators.map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse();
            }
            return res;
        }), rxjs_operators.map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options));
        }), rxjs_operators.catchError(function (res) {
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
            .pipe(rxjs_operators.map(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), rxjs_operators.map(function (res) {
            return new NbAuthResult(true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options), _this.createToken(_this.getOption('token.getter')(module, res, _this.options), requireValidToken));
        }), rxjs_operators.catchError(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.handleResponseError = function (res, module) {
        var errors = [];
        if (res instanceof _angular_common_http.HttpErrorResponse) {
            errors = this.getOption('errors.getter')(module, res, this.options);
        }
        else if (res instanceof NbAuthIllegalTokenError) {
            errors.push(res.message);
        }
        else {
            errors.push('Something went wrong.');
        }
        return rxjs.of(new NbAuthResult(false, res, this.getOption(module + ".redirect.failure"), errors));
    };
    var NbPasswordAuthStrategy_1;
    NbPasswordAuthStrategy = NbPasswordAuthStrategy_1 = __decorate$8([
        _angular_core.Injectable(),
        __metadata$6("design:paramtypes", [_angular_common_http.HttpClient, _angular_router.ActivatedRoute])
    ], NbPasswordAuthStrategy);
    return NbPasswordAuthStrategy;
}(NbAuthStrategy));

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends$7 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

(function (NbOAuth2ResponseType) {
    NbOAuth2ResponseType["CODE"] = "code";
    NbOAuth2ResponseType["TOKEN"] = "token";
})(exports.NbOAuth2ResponseType || (exports.NbOAuth2ResponseType = {}));
// TODO: client_credentials

(function (NbOAuth2GrantType) {
    NbOAuth2GrantType["AUTHORIZATION_CODE"] = "authorization_code";
    NbOAuth2GrantType["PASSWORD"] = "password";
    NbOAuth2GrantType["REFRESH_TOKEN"] = "refresh_token";
})(exports.NbOAuth2GrantType || (exports.NbOAuth2GrantType = {}));

(function (NbOAuth2ClientAuthMethod) {
    NbOAuth2ClientAuthMethod["NONE"] = "none";
    NbOAuth2ClientAuthMethod["BASIC"] = "basic";
    NbOAuth2ClientAuthMethod["REQUEST_BODY"] = "request-body";
})(exports.NbOAuth2ClientAuthMethod || (exports.NbOAuth2ClientAuthMethod = {}));
var NbOAuth2AuthStrategyOptions = /** @class */ (function (_super) {
    __extends$7(NbOAuth2AuthStrategyOptions, _super);
    function NbOAuth2AuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseEndpoint = '';
        _this.clientId = '';
        _this.clientSecret = '';
        _this.clientAuthMethod = exports.NbOAuth2ClientAuthMethod.NONE;
        _this.redirect = {
            success: '/',
            failure: null,
        };
        _this.defaultErrors = ['Something went wrong, please try again.'];
        _this.defaultMessages = ['You have been successfully authenticated.'];
        _this.authorize = {
            endpoint: 'authorize',
            responseType: exports.NbOAuth2ResponseType.CODE,
        };
        _this.token = {
            endpoint: 'token',
            grantType: exports.NbOAuth2GrantType.AUTHORIZATION_CODE,
            requireValidToken: false,
            class: NbAuthOAuth2Token,
        };
        _this.refresh = {
            endpoint: 'token',
            grantType: exports.NbOAuth2GrantType.REFRESH_TOKEN,
        };
        return _this;
    }
    return NbOAuth2AuthStrategyOptions;
}(NbAuthStrategyOptions));
var auth2StrategyOptions = new NbOAuth2AuthStrategyOptions();

var __extends$6 = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$4 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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
    __extends$6(NbOAuth2AuthStrategy, _super);
    function NbOAuth2AuthStrategy(http, route, window) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.route = route;
        _this.window = window;
        _this.redirectResultHandlers = (_a = {},
            _a[exports.NbOAuth2ResponseType.CODE] = function () {
                return rxjs.of(_this.route.snapshot.queryParams).pipe(rxjs_operators.switchMap(function (params) {
                    if (params.code) {
                        return _this.requestToken(params.code);
                    }
                    return rxjs.of(new NbAuthResult(false, params, _this.getOption('redirect.failure'), _this.getOption('defaultErrors'), []));
                }));
            },
            _a[exports.NbOAuth2ResponseType.TOKEN] = function () {
                var module = 'authorize';
                var requireValidToken = _this.getOption(module + ".requireValidToken");
                return rxjs.of(_this.route.snapshot.fragment).pipe(rxjs_operators.map(function (fragment) { return _this.parseHashAsQueryParams(fragment); }), rxjs_operators.map(function (params) {
                    if (!params.error) {
                        return new NbAuthResult(true, params, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(params, requireValidToken));
                    }
                    return new NbAuthResult(false, params, _this.getOption('redirect.failure'), _this.getOption('defaultErrors'), []);
                }), rxjs_operators.catchError(function (err) {
                    var errors = [];
                    if (err instanceof NbAuthIllegalTokenError) {
                        errors.push(err.message);
                    }
                    else {
                        errors.push('Something went wrong.');
                    }
                    return rxjs.of(new NbAuthResult(false, err, _this.getOption('redirect.failure'), errors));
                }));
            },
            _a);
        _this.redirectResults = (_b = {},
            _b[exports.NbOAuth2ResponseType.CODE] = function () {
                return rxjs.of(_this.route.snapshot.queryParams).pipe(rxjs_operators.map(function (params) { return !!(params && (params.code || params.error)); }));
            },
            _b[exports.NbOAuth2ResponseType.TOKEN] = function () {
                return rxjs.of(_this.route.snapshot.fragment).pipe(rxjs_operators.map(function (fragment) { return _this.parseHashAsQueryParams(fragment); }), rxjs_operators.map(function (params) { return !!(params && (params.access_token || params.error)); }));
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
        if (this.getOption('token.grantType') === exports.NbOAuth2GrantType.PASSWORD) {
            return this.passwordToken(data.email, data.password);
        }
        else {
            return this.isRedirectResult()
                .pipe(rxjs_operators.switchMap(function (result) {
                if (!result) {
                    _this.authorizeRedirect();
                    return rxjs.of(new NbAuthResult(true));
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
        var headers = this.buildAuthHeader() || new _angular_common_http.HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildRefreshRequestData(token), { headers: headers })
            .pipe(rxjs_operators.map(function (res) {
            return new NbAuthResult(true, res, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createRefreshedToken(res, token, requireValidToken));
        }), rxjs_operators.catchError(function (res) { return _this.handleResponseError(res); }));
    };
    NbOAuth2AuthStrategy.prototype.passwordToken = function (username, password) {
        var _this = this;
        var module = 'token';
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        var headers = this.buildAuthHeader() || new _angular_common_http.HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildPasswordRequestData(username, password), { headers: headers })
            .pipe(rxjs_operators.map(function (res) {
            return new NbAuthResult(true, res, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(res, requireValidToken));
        }), rxjs_operators.catchError(function (res) { return _this.handleResponseError(res); }));
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
        var headers = this.buildAuthHeader() || new _angular_common_http.HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildCodeRequestData(code), { headers: headers })
            .pipe(rxjs_operators.map(function (res) {
            return new NbAuthResult(true, res, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(res, requireValidToken));
        }), rxjs_operators.catchError(function (res) { return _this.handleResponseError(res); }));
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
        if (this.clientAuthMethod === exports.NbOAuth2ClientAuthMethod.BASIC) {
            if (this.getOption('clientId') && this.getOption('clientSecret')) {
                return new _angular_common_http.HttpHeaders({
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
        if (this.clientAuthMethod === exports.NbOAuth2ClientAuthMethod.REQUEST_BODY) {
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
        if (res instanceof _angular_common_http.HttpErrorResponse) {
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
        
        return rxjs.of(new NbAuthResult(false, res, this.getOption('redirect.failure'), errors, []));
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
        return rxjs.of(new NbAuthResult(true));
    };
    var NbOAuth2AuthStrategy_1;
    NbOAuth2AuthStrategy = NbOAuth2AuthStrategy_1 = __decorate$9([
        _angular_core.Injectable(),
        __param$4(2, _angular_core.Inject(_nebular_theme.NB_WINDOW)),
        __metadata$7("design:paramtypes", [_angular_common_http.HttpClient,
            _angular_router.ActivatedRoute, Object])
    ], NbOAuth2AuthStrategy);
    return NbOAuth2AuthStrategy;
}(NbAuthStrategy));

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbAuthComponent = /** @class */ (function () {
    // showcase of how to use the onAuthenticationChange method
    function NbAuthComponent(auth, location) {
        var _this = this;
        this.auth = auth;
        this.location = location;
        this.alive = true;
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(rxjs_operators.takeWhile(function () { return _this.alive; }))
            .subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    NbAuthComponent.prototype.back = function () {
        this.location.back();
        return false;
    };
    NbAuthComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbAuthComponent = __decorate$10([
        _angular_core.Component({
            selector: 'nb-auth',
            styles: ["/*! * @license * Copyright Akveo. All Rights Reserved. * Licensed under the MIT License. See License.txt in the project root for license information. */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{text-decoration:none}:host .navigation .link .icon{font-size:2rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}} "],
            template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-header>\n            <nav class=\"navigation\">\n              <a href=\"#\" (click)=\"back()\" class=\"link\" aria-label=\"Back\"><i class=\"icon nb-arrow-thin-left\"></i></a>\n            </nav>\n          </nb-card-header>\n          <nb-card-body>\n            <nb-auth-block>\n              <router-outlet></router-outlet>\n            </nb-auth-block>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
        }),
        __metadata$8("design:paramtypes", [NbAuthService, _angular_common.Location])
    ], NbAuthComponent);
    return NbAuthComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NbAuthBlockComponent = /** @class */ (function () {
    function NbAuthBlockComponent() {
    }
    NbAuthBlockComponent = __decorate$11([
        _angular_core.Component({
            selector: 'nb-auth-block',
            styles: [":host{display:block;width:100%;max-width:35rem}:host /deep/ form{width:100%}:host /deep/ .label{display:block;margin-bottom:0.5rem}:host /deep/ .error-message{margin-top:0.5rem}:host /deep/ .alert{text-align:center}:host /deep/ .title{margin-top:0;margin-bottom:0.75rem;text-align:center}:host /deep/ .sub-title{margin-bottom:2rem;text-align:center}:host /deep/ .checkbox{display:flex;justify-content:space-between;margin-bottom:10px;font-weight:normal}:host /deep/ .form-control-group{margin-bottom:2rem}:host /deep/ .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host /deep/ .form-control-group.accept-group .forgot-password{line-height:2}:host /deep/ .links{text-align:center;margin-top:1.75rem}:host /deep/ .links .socials{margin-top:1.5rem}:host /deep/ .links .socials a{margin:0 1rem;text-decoration:none;font-size:1rem;vertical-align:middle}:host /deep/ .links .socials a.with-icon{font-size:2rem}:host /deep/ .another-action{margin-top:2rem;text-align:center}:host /deep/ .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host /deep/ nb-alert .alert-title,:host /deep/ nb-alert .alert-message{margin:0 0 0.5rem}:host /deep/ nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0} "],
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], NbAuthBlockComponent);
    return NbAuthBlockComponent;
}());

var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$5 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbLoginComponent = /** @class */ (function () {
    function NbLoginComponent(service, options, cd, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.socialLinks = [];
        this.rememberMe = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.strategy = this.getConfigValue('forms.login.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.rememberMe = this.getConfigValue('forms.login.rememberMe');
    }
    NbLoginComponent.prototype.login = function () {
        var _this = this;
        this.errors = [];
        this.messages = [];
        this.submitted = true;
        this.service.authenticate(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbLoginComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.options, key, null);
    };
    NbLoginComponent = __decorate$12([
        _angular_core.Component({
            selector: 'nb-login',
            template: "<h1 id=\"title\" class=\"title\">Login</h1> <p class=\"sub-title\">Hello! Log in with your email.</p> <nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\"> <p class=\"alert-title\"><b>Oh snap!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li> </ul> </nb-alert> <nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\"> <p class=\"alert-title\"><b>Hooray!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li> </ul> </nb-alert> <form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\"> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-email\">Email address:</label> <input nbInput fullWidth [(ngModel)]=\"user.email\" #email=\"ngModel\" name=\"email\" id=\"input-email\" pattern=\".+@.+\..+\" placeholder=\"Email address\" autofocus [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.email.required')\" [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\"> <ng-container *ngIf=\"email.invalid && email.touched\"> <p class=\"error-message\" *ngIf=\"email.errors?.required\"> Email is required! </p> <p class=\"error-message\" *ngIf=\"email.errors?.pattern\"> Email should be the real one! </p> </ng-container> </div> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-password\">Password:</label> <input nbInput fullWidth [(ngModel)]=\"user.password\" #password=\"ngModel\" name=\"password\" type=\"password\" id=\"input-password\" placeholder=\"Password\" [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.password.required')\" [minlength]=\"getConfigValue('forms.validation.password.minLength')\" [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\" [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\"> <ng-container *ngIf=\"password.invalid && password.touched \"> <p class=\"error-message\" *ngIf=\"password.errors?.required\"> Password is required! </p> <p class=\"error-message\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\"> Password should contains from {{ getConfigValue('forms.validation.password.minLength') }} to {{ getConfigValue('forms.validation.password.maxLength') }} characters </p> </ng-container> </div> <div class=\"form-control-group accept-group\"> <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox> <a class=\"forgot-password\" routerLink=\"../request-password\">Forgot Password?</a> </div> <button nbButton fullWidth status=\"success\" [disabled]=\"submitted || !form.valid\" [class.btn-pulse]=\"submitted\"> Log In </button> </form> <section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\"> or enter with: <div class=\"socials\"> <ng-container *ngFor=\"let socialLink of socialLinks\"> <a *ngIf=\"socialLink.link\" [routerLink]=\"socialLink.link\" [attr.target]=\"socialLink.target\" [attr.class]=\"socialLink.icon\" [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a> <a *ngIf=\"socialLink.url\" [attr.href]=\"socialLink.url\" [attr.target]=\"socialLink.target\" [attr.class]=\"socialLink.icon\" [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a> </ng-container> </div> </section> <section class=\"another-action\" aria-label=\"Register\"> Don't have an account? <a class=\"text-link\" routerLink=\"../register\">Register</a> </section> ",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        }),
        __param$5(1, _angular_core.Inject(NB_AUTH_OPTIONS)),
        __metadata$9("design:paramtypes", [NbAuthService, Object, _angular_core.ChangeDetectorRef,
            _angular_router.Router])
    ], NbLoginComponent);
    return NbLoginComponent;
}());

var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$6 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbRegisterComponent = /** @class */ (function () {
    function NbRegisterComponent(service, options, cd, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.strategy = this.getConfigValue('forms.register.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    NbRegisterComponent.prototype.register = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.register(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbRegisterComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.options, key, null);
    };
    NbRegisterComponent = __decorate$13([
        _angular_core.Component({
            selector: 'nb-register',
            styles: [":host .title{margin-bottom:2rem} "],
            template: "<h1 id=\"title\" class=\"title\">Register</h1> <nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\"> <p class=\"alert-title\"><b>Oh snap!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li> </ul> </nb-alert> <nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\"> <p class=\"alert-title\"><b>Hooray!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li> </ul> </nb-alert> <form (ngSubmit)=\"register()\" #form=\"ngForm\" aria-labelledby=\"title\"> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-name\">Full name:</label> <input nbInput [(ngModel)]=\"user.fullName\" #fullName=\"ngModel\" id=\"input-name\" name=\"fullName\" placeholder=\"Full name\" autofocus fullWidth [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.fullName.required')\" [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\" [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\" [attr.aria-invalid]=\"fullName.invalid && fullName.touched ? true : null\"> <ng-container *ngIf=\"fullName.invalid && fullName.touched\"> <p class=\"error-message\" *ngIf=\"fullName.errors?.required\"> Full name is required! </p> <p class=\"error-message\" *ngIf=\"fullName.errors?.minlength || fullName.errors?.maxlength\"> Full name should contains from {{getConfigValue('forms.validation.fullName.minLength')}} to {{getConfigValue('forms.validation.fullName.maxLength')}} characters </p> </ng-container> </div> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-email\">Email address:</label> <input nbInput [(ngModel)]=\"user.email\" #email=\"ngModel\" id=\"input-email\" name=\"email\" pattern=\".+@.+..+\" placeholder=\"Email address\" fullWidth [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.email.required')\" [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\"> <ng-container *ngIf=\"email.invalid && email.touched\"> <p class=\"error-message\" *ngIf=\"email.errors?.required\"> Email is required! </p> <p class=\"error-message\" *ngIf=\"email.errors?.pattern\"> Email should be the real one! </p> </ng-container> </div> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-password\">Password:</label> <input nbInput [(ngModel)]=\"user.password\" #password=\"ngModel\" type=\"password\" id=\"input-password\" name=\"password\" placeholder=\"Password\" fullWidth [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.password.required')\" [minlength]=\"getConfigValue('forms.validation.password.minLength')\" [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\" [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\"> <ng-container *ngIf=\"password.invalid && password.touched\"> <p class=\"error-message\" *ngIf=\"password.errors?.required\"> Password is required! </p> <p class=\"error-message\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\"> Password should contains from {{ getConfigValue('forms.validation.password.minLength') }} to {{ getConfigValue('forms.validation.password.maxLength') }} characters </p> </ng-container> </div> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-re-password\">Repeat password:</label> <input nbInput [(ngModel)]=\"user.confirmPassword\" #rePass=\"ngModel\" type=\"password\" id=\"input-re-password\" name=\"rePass\" placeholder=\"Confirm Password\" fullWidth [status]=\"email.dirty ? (email.invalid || password.value != rePass.value  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.password.required')\" [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\"> <ng-container *ngIf=\"rePass.invalid && rePass.touched\"> <p class=\"error-message\" *ngIf=\"rePass.errors?.required\"> Password confirmation is required! </p> <p class=\"error-message\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\"> Password does not match the confirm password. </p> </ng-container> </div> <div class=\"form-control-group accept-group\" *ngIf=\"getConfigValue('forms.register.terms')\"> <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\"> Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a> </nb-checkbox> </div> <button nbButton fullWidth status=\"success\" [disabled]=\"submitted || !form.valid\" [class.btn-pulse]=\"submitted\"> Register </button> </form> <section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\"> or enter with: <div class=\"socials\"> <ng-container *ngFor=\"let socialLink of socialLinks\"> <a *ngIf=\"socialLink.link\" [routerLink]=\"socialLink.link\" [attr.target]=\"socialLink.target\" [attr.class]=\"socialLink.icon\" [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a> <a *ngIf=\"socialLink.url\" [attr.href]=\"socialLink.url\" [attr.target]=\"socialLink.target\" [attr.class]=\"socialLink.icon\" [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a> </ng-container> </div> </section> <section class=\"another-action\" aria-label=\"Sign in\"> Already have an account? <a class=\"text-link\" routerLink=\"../login\">Log in</a> </section> ",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        }),
        __param$6(1, _angular_core.Inject(NB_AUTH_OPTIONS)),
        __metadata$10("design:paramtypes", [NbAuthService, Object, _angular_core.ChangeDetectorRef,
            _angular_router.Router])
    ], NbRegisterComponent);
    return NbRegisterComponent;
}());

var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$7 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbLogoutComponent = /** @class */ (function () {
    function NbLogoutComponent(service, options, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.router = router;
        this.redirectDelay = 0;
        this.strategy = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
    }
    NbLogoutComponent.prototype.ngOnInit = function () {
        this.logout(this.strategy);
    };
    NbLogoutComponent.prototype.logout = function (strategy) {
        var _this = this;
        this.service.logout(strategy).subscribe(function (result) {
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbLogoutComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.options, key, null);
    };
    NbLogoutComponent = __decorate$14([
        _angular_core.Component({
            selector: 'nb-logout',
            template: "<div>Logging out, please wait...</div> ",
        }),
        __param$7(1, _angular_core.Inject(NB_AUTH_OPTIONS)),
        __metadata$11("design:paramtypes", [NbAuthService, Object, _angular_router.Router])
    ], NbLogoutComponent);
    return NbLogoutComponent;
}());

var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$8 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbRequestPasswordComponent = /** @class */ (function () {
    function NbRequestPasswordComponent(service, options, cd, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
        this.strategy = this.getConfigValue('forms.requestPassword.strategy');
    }
    NbRequestPasswordComponent.prototype.requestPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.requestPassword(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbRequestPasswordComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.options, key, null);
    };
    NbRequestPasswordComponent = __decorate$15([
        _angular_core.Component({
            selector: 'nb-request-password-page',
            styles: [":host .form-group:last-of-type{margin-bottom:3rem} "],
            template: "<h1 id=\"title\" class=\"title\">Forgot Password</h1> <p class=\"sub-title\">Enter your email address and we’ll send a link to reset your password</p> <nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\"> <p class=\"alert-title\"><b>Oh snap!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li> </ul> </nb-alert> <nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\"> <p class=\"alert-title\"><b>Hooray!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li> </ul> </nb-alert> <form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\" aria-labelledby=\"title\"> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-email\">Enter your email address:</label> <input nbInput [(ngModel)]=\"user.email\" #email=\"ngModel\" id=\"input-email\" name=\"email\" pattern=\".+@.+\..+\" placeholder=\"Email address\" autofocus fullWidth [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.email.required')\" [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\"> <ng-container *ngIf=\"email.invalid && email.touched\"> <p class=\"error-message\" *ngIf=\"email.errors?.required\"> Email is required! </p> <p class=\"error-message\" *ngIf=\"email.errors?.pattern\"> Email should be the real one! </p> </ng-container> </div> <button nbButton fullWidth status=\"success\" [disabled]=\"submitted || !requestPassForm.valid\" [class.btn-pulse]=\"submitted\"> Request password </button> </form> <section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\"> <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p> <p><a routerLink=\"../register\" class=\"text-link\">Register</a></p> </section> ",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        }),
        __param$8(1, _angular_core.Inject(NB_AUTH_OPTIONS)),
        __metadata$12("design:paramtypes", [NbAuthService, Object, _angular_core.ChangeDetectorRef,
            _angular_router.Router])
    ], NbRequestPasswordComponent);
    return NbRequestPasswordComponent;
}());

var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$9 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbResetPasswordComponent = /** @class */ (function () {
    function NbResetPasswordComponent(service, options, cd, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
        this.strategy = this.getConfigValue('forms.resetPassword.strategy');
    }
    NbResetPasswordComponent.prototype.resetPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.resetPassword(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbResetPasswordComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.options, key, null);
    };
    NbResetPasswordComponent = __decorate$16([
        _angular_core.Component({
            selector: 'nb-reset-password-page',
            styles: [":host .form-group:last-of-type{margin-bottom:3rem} "],
            template: "<h1 id=\"title\" class=\"title\">Change password</h1> <p class=\"sub-title\">Please set a new password</p> <nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\"> <p class=\"alert-title\"><b>Oh snap!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li> </ul> </nb-alert> <nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\"> <p class=\"alert-title\"><b>Hooray!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li> </ul> </nb-alert> <form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\" aria-labelledby=\"title\"> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-password\">New Password:</label> <input nbInput [(ngModel)]=\"user.password\" #password=\"ngModel\" type=\"password\" id=\"input-password\" name=\"password\" class=\"first\" placeholder=\"New Password\" autofocus fullWidth [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.password.required')\" [minlength]=\"getConfigValue('forms.validation.password.minLength')\" [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\" [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\"> <ng-container *ngIf=\"password.invalid && password.touched\"> <p class=\"error-message\" *ngIf=\"password.errors?.required\"> Password is required! </p> <p class=\"error-message\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\"> Password should contains from {{getConfigValue('forms.validation.password.minLength')}} to {{getConfigValue('forms.validation.password.maxLength')}} characters </p> </ng-container> </div> <div class=\"form-group\"> <label class=\"label\" for=\"input-re-password\">Confirm Password:</label> <input nbInput [(ngModel)]=\"user.confirmPassword\" #rePass=\"ngModel\" id=\"input-re-password\" name=\"rePass\" type=\"password\" class=\"last\" placeholder=\"Confirm Password\" fullWidth [status]=\"rePass.touched ? (rePass.invalid || password.value != rePass.value ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.password.required')\" [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\"> <ng-container *ngIf=\"rePass.touched\"> <p class=\"error-message\" *ngIf=\"rePass.invalid && rePass.errors?.required\"> Password confirmation is required! </p> <p class=\"error-message\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\"> Password does not match the confirm password. </p> </ng-container> </div> <button nbButton status=\"success\" fullWidth [disabled]=\"submitted || !resetPassForm.valid\" [class.btn-pulse]=\"submitted\"> Change password </button> </form> <section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\"> <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p> <p><a class=\"text-link\" routerLink=\"../register\">Register</a></p> </section> ",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        }),
        __param$9(1, _angular_core.Inject(NB_AUTH_OPTIONS)),
        __metadata$13("design:paramtypes", [NbAuthService, Object, _angular_core.ChangeDetectorRef,
            _angular_router.Router])
    ], NbResetPasswordComponent);
    return NbResetPasswordComponent;
}());

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function nbStrategiesFactory(options, injector) {
    var strategies = [];
    options.strategies
        .forEach(function (_a) {
        var strategyClass = _a[0], strategyOptions = _a[1];
        var strategy = injector.get(strategyClass);
        strategy.setOptions(strategyOptions);
        strategies.push(strategy);
    });
    return strategies;
}
function nbTokensFactory(strategies) {
    var tokens = [];
    strategies
        .forEach(function (strategy) {
        tokens.push(strategy.getOption('token.class'));
    });
    return tokens;
}
function nbOptionsFactory(options) {
    return deepExtend(defaultAuthOptions, options);
}
function nbNoOpInterceptorFilter(req) {
    return true;
}
var NbAuthModule = /** @class */ (function () {
    function NbAuthModule() {
    }
    NbAuthModule_1 = NbAuthModule;
    NbAuthModule.forRoot = function (nbAuthOptions) {
        return {
            ngModule: NbAuthModule_1,
            providers: [
                { provide: NB_AUTH_USER_OPTIONS, useValue: nbAuthOptions },
                { provide: NB_AUTH_OPTIONS, useFactory: nbOptionsFactory, deps: [NB_AUTH_USER_OPTIONS] },
                { provide: NB_AUTH_STRATEGIES, useFactory: nbStrategiesFactory, deps: [NB_AUTH_OPTIONS, _angular_core.Injector] },
                { provide: NB_AUTH_TOKENS, useFactory: nbTokensFactory, deps: [NB_AUTH_STRATEGIES] },
                { provide: NB_AUTH_FALLBACK_TOKEN, useValue: NbAuthSimpleToken },
                { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
                { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: nbNoOpInterceptorFilter },
                { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
                NbAuthTokenParceler,
                NbAuthService,
                NbTokenService,
                NbDummyAuthStrategy,
                NbPasswordAuthStrategy,
                NbOAuth2AuthStrategy,
            ],
        };
    };
    var NbAuthModule_1;
    NbAuthModule = NbAuthModule_1 = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                _nebular_theme.NbLayoutModule,
                _nebular_theme.NbCardModule,
                _nebular_theme.NbCheckboxModule,
                _nebular_theme.NbAlertModule,
                _nebular_theme.NbInputModule,
                _nebular_theme.NbButtonModule,
                _angular_router.RouterModule,
                _angular_forms.FormsModule,
            ],
            declarations: [
                NbAuthComponent,
                NbAuthBlockComponent,
                NbLoginComponent,
                NbRegisterComponent,
                NbRequestPasswordComponent,
                NbResetPasswordComponent,
                NbLogoutComponent,
            ],
            exports: [
                NbAuthComponent,
                NbAuthBlockComponent,
                NbLoginComponent,
                NbRegisterComponent,
                NbRequestPasswordComponent,
                NbResetPasswordComponent,
                NbLogoutComponent,
            ],
        })
    ], NbAuthModule);
    return NbAuthModule;
}());

var routes = [
    {
        path: 'auth',
        component: NbAuthComponent,
        children: [
            {
                path: '',
                component: NbLoginComponent,
            },
            {
                path: 'login',
                component: NbLoginComponent,
            },
            {
                path: 'register',
                component: NbRegisterComponent,
            },
            {
                path: 'logout',
                component: NbLogoutComponent,
            },
            {
                path: 'request-password',
                component: NbRequestPasswordComponent,
            },
            {
                path: 'reset-password',
                component: NbResetPasswordComponent,
            },
        ],
    },
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

exports.defaultAuthOptions = defaultAuthOptions;
exports.NB_AUTH_OPTIONS = NB_AUTH_OPTIONS;
exports.NB_AUTH_USER_OPTIONS = NB_AUTH_USER_OPTIONS;
exports.NB_AUTH_STRATEGIES = NB_AUTH_STRATEGIES;
exports.NB_AUTH_TOKENS = NB_AUTH_TOKENS;
exports.NB_AUTH_INTERCEPTOR_HEADER = NB_AUTH_INTERCEPTOR_HEADER;
exports.NB_AUTH_TOKEN_INTERCEPTOR_FILTER = NB_AUTH_TOKEN_INTERCEPTOR_FILTER;
exports.nbStrategiesFactory = nbStrategiesFactory;
exports.nbTokensFactory = nbTokensFactory;
exports.nbOptionsFactory = nbOptionsFactory;
exports.nbNoOpInterceptorFilter = nbNoOpInterceptorFilter;
exports.NbAuthModule = NbAuthModule;
exports.routes = routes;
exports.NbAuthComponent = NbAuthComponent;
exports.NbAuthBlockComponent = NbAuthBlockComponent;
exports.NbLoginComponent = NbLoginComponent;
exports.NbLogoutComponent = NbLogoutComponent;
exports.NbRegisterComponent = NbRegisterComponent;
exports.NbRequestPasswordComponent = NbRequestPasswordComponent;
exports.NbResetPasswordComponent = NbResetPasswordComponent;
exports.NbAuthService = NbAuthService;
exports.NbAuthResult = NbAuthResult;
exports.NbAuthJWTInterceptor = NbAuthJWTInterceptor;
exports.NbAuthSimpleInterceptor = NbAuthSimpleInterceptor;
exports.NbAuthToken = NbAuthToken;
exports.NbAuthTokenNotFoundError = NbAuthTokenNotFoundError;
exports.NbAuthIllegalTokenError = NbAuthIllegalTokenError;
exports.NbAuthEmptyTokenError = NbAuthEmptyTokenError;
exports.NbAuthIllegalJWTTokenError = NbAuthIllegalJWTTokenError;
exports.nbAuthCreateToken = nbAuthCreateToken;
exports.decodeJwtPayload = decodeJwtPayload;
exports.NbAuthSimpleToken = NbAuthSimpleToken;
exports.NbAuthJWTToken = NbAuthJWTToken;
exports.NbAuthOAuth2Token = NbAuthOAuth2Token;
exports.NbAuthOAuth2JWTToken = NbAuthOAuth2JWTToken;
exports.ɵ0 = ɵ0;
exports.NbTokenStorage = NbTokenStorage;
exports.NbTokenLocalStorage = NbTokenLocalStorage;
exports.NbTokenService = NbTokenService;
exports.NB_AUTH_FALLBACK_TOKEN = NB_AUTH_FALLBACK_TOKEN;
exports.NbAuthTokenParceler = NbAuthTokenParceler;
exports.NbAuthStrategy = NbAuthStrategy;
exports.NbAuthStrategyOptions = NbAuthStrategyOptions;
exports.NbDummyAuthStrategy = NbDummyAuthStrategy;
exports.NbDummyAuthStrategyOptions = NbDummyAuthStrategyOptions;
exports.dummyStrategyOptions = dummyStrategyOptions;
exports.NbPasswordAuthStrategy = NbPasswordAuthStrategy;
exports.NbPasswordAuthStrategyOptions = NbPasswordAuthStrategyOptions;
exports.passwordStrategyOptions = passwordStrategyOptions;
exports.NbOAuth2AuthStrategy = NbOAuth2AuthStrategy;
exports.NbOAuth2AuthStrategyOptions = NbOAuth2AuthStrategyOptions;
exports.auth2StrategyOptions = auth2StrategyOptions;

Object.defineProperty(exports, '__esModule', { value: true });

})));
