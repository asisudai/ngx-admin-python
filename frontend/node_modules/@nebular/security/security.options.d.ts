import { InjectionToken } from '@angular/core';
export interface NbAclRole {
    parent?: string;
    [permission: string]: string | string[];
}
export interface NbAccessControl {
    [role: string]: NbAclRole;
}
export interface NbAclOptions {
    accessControl?: NbAccessControl;
}
export declare const NB_SECURITY_OPTIONS_TOKEN: InjectionToken<NbAclOptions>;
