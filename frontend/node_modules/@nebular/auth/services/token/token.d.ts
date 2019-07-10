export declare abstract class NbAuthToken {
    protected payload: any;
    abstract getValue(): string;
    abstract isValid(): boolean;
    abstract getOwnerStrategyName(): string;
    abstract getCreatedAt(): Date;
    abstract toString(): string;
    getName(): string;
    getPayload(): any;
}
export declare class NbAuthTokenNotFoundError extends Error {
    constructor(message: string);
}
export declare class NbAuthIllegalTokenError extends Error {
    constructor(message: string);
}
export declare class NbAuthEmptyTokenError extends NbAuthIllegalTokenError {
    constructor(message: string);
}
export declare class NbAuthIllegalJWTTokenError extends NbAuthIllegalTokenError {
    constructor(message: string);
}
export interface NbAuthRefreshableToken {
    getRefreshToken(): string;
    setRefreshToken(refreshToken: string): any;
}
export interface NbAuthTokenClass<T = NbAuthToken> {
    NAME: string;
    new (raw: any, strategyName: string, expDate?: Date): T;
}
export declare function nbAuthCreateToken<T extends NbAuthToken>(tokenClass: NbAuthTokenClass<T>, token: any, ownerStrategyName: string, createdAt?: Date): T;
export declare function decodeJwtPayload(payload: string): any;
/**
 * Wrapper for simple (text) token
 */
export declare class NbAuthSimpleToken extends NbAuthToken {
    protected readonly token: any;
    protected readonly ownerStrategyName: string;
    protected createdAt?: Date;
    static NAME: string;
    constructor(token: any, ownerStrategyName: string, createdAt?: Date);
    protected parsePayload(): any;
    protected prepareCreatedAt(date: Date): Date;
    /**
     * Returns the token's creation date
     * @returns {Date}
     */
    getCreatedAt(): Date;
    /**
     * Returns the token value
     * @returns string
     */
    getValue(): string;
    getOwnerStrategyName(): string;
    /**
     * Is non empty and valid
     * @returns {boolean}
     */
    isValid(): boolean;
    /**
     * Validate value and convert to string, if value is not valid return empty string
     * @returns {string}
     */
    toString(): string;
}
/**
 * Wrapper for JWT token with additional methods.
 */
export declare class NbAuthJWTToken extends NbAuthSimpleToken {
    static NAME: string;
    /**
     * for JWT token, the iat (issued at) field of the token payload contains the creation Date
     */
    protected prepareCreatedAt(date: Date): Date;
    /**
     * Returns payload object
     * @returns any
     */
    protected parsePayload(): void;
    /**
     * Returns expiration date
     * @returns Date
     */
    getTokenExpDate(): Date;
    /**
     * Is data expired
     * @returns {boolean}
     */
    isValid(): boolean;
}
/**
 * Wrapper for OAuth2 token whose access_token is a JWT Token
 */
export declare class NbAuthOAuth2Token extends NbAuthSimpleToken {
    static NAME: string;
    constructor(data: {
        [key: string]: string | number;
    } | string, ownerStrategyName: string, createdAt?: Date);
    /**
     * Returns the token value
     * @returns string
     */
    getValue(): string;
    /**
     * Returns the refresh token
     * @returns string
     */
    getRefreshToken(): string;
    /**
     *  put refreshToken in the token payload
      * @param refreshToken
     */
    setRefreshToken(refreshToken: string): void;
    /**
     * Parses token payload
     * @returns any
     */
    protected parsePayload(): void;
    /**
     * Returns the token type
     * @returns string
     */
    getType(): string;
    /**
     * Is data expired
     * @returns {boolean}
     */
    isValid(): boolean;
    /**
     * Returns expiration date
     * @returns Date
     */
    getTokenExpDate(): Date;
    /**
     * Convert to string
     * @returns {string}
     */
    toString(): string;
}
/**
 * Wrapper for OAuth2 token embedding JWT tokens
 */
export declare class NbAuthOAuth2JWTToken extends NbAuthOAuth2Token {
    static NAME: string;
    protected accessTokenPayload: any;
    protected parsePayload(): void;
    protected parseAccessTokenPayload(): any;
    /**
     * Returns access token payload
     * @returns any
     */
    getAccessTokenPayload(): any;
    /**
     * for Oauth2 JWT token, the iat (issued at) field of the access_token payload
     */
    protected prepareCreatedAt(date: Date): Date;
    /**
     * Is token valid
     * @returns {boolean}
     */
    isValid(): boolean;
    /**
     * Returns expiration date :
     * - exp if set,
     * - super.getExpDate() otherwise
     * @returns Date
     */
    getTokenExpDate(): Date;
}
