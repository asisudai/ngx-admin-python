import { NbAuthToken } from './token/token';
export declare class NbAuthResult {
    protected success: boolean;
    protected response?: any;
    protected redirect?: any;
    protected token: NbAuthToken;
    protected errors: string[];
    protected messages: string[];
    constructor(success: boolean, response?: any, redirect?: any, errors?: any, messages?: any, token?: NbAuthToken);
    getResponse(): any;
    getToken(): NbAuthToken;
    getRedirect(): string;
    getErrors(): string[];
    getMessages(): string[];
    isSuccess(): boolean;
    isFailure(): boolean;
}
