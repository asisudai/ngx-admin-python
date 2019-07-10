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
import { urlBase64Decode } from '../../helpers';
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
export { NbAuthToken };
var NbAuthTokenNotFoundError = /** @class */ (function (_super) {
    __extends(NbAuthTokenNotFoundError, _super);
    function NbAuthTokenNotFoundError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthTokenNotFoundError;
}(Error));
export { NbAuthTokenNotFoundError };
var NbAuthIllegalTokenError = /** @class */ (function (_super) {
    __extends(NbAuthIllegalTokenError, _super);
    function NbAuthIllegalTokenError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthIllegalTokenError;
}(Error));
export { NbAuthIllegalTokenError };
var NbAuthEmptyTokenError = /** @class */ (function (_super) {
    __extends(NbAuthEmptyTokenError, _super);
    function NbAuthEmptyTokenError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthEmptyTokenError;
}(NbAuthIllegalTokenError));
export { NbAuthEmptyTokenError };
var NbAuthIllegalJWTTokenError = /** @class */ (function (_super) {
    __extends(NbAuthIllegalJWTTokenError, _super);
    function NbAuthIllegalJWTTokenError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthIllegalJWTTokenError;
}(NbAuthIllegalTokenError));
export { NbAuthIllegalJWTTokenError };
export function nbAuthCreateToken(tokenClass, token, ownerStrategyName, createdAt) {
    return new tokenClass(token, ownerStrategyName, createdAt);
}
export function decodeJwtPayload(payload) {
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
    __extends(NbAuthSimpleToken, _super);
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
export { NbAuthSimpleToken };
/**
 * Wrapper for JWT token with additional methods.
 */
var NbAuthJWTToken = /** @class */ (function (_super) {
    __extends(NbAuthJWTToken, _super);
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
export { NbAuthJWTToken };
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
    __extends(NbAuthOAuth2Token, _super);
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
export { NbAuthOAuth2Token };
/**
 * Wrapper for OAuth2 token embedding JWT tokens
 */
var NbAuthOAuth2JWTToken = /** @class */ (function (_super) {
    __extends(NbAuthOAuth2JWTToken, _super);
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
export { NbAuthOAuth2JWTToken };
export { ɵ0 };
//# sourceMappingURL=token.js.map