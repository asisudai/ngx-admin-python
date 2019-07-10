/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthSocialLink } from '../../auth.options';
import { NbAuthService } from '../../services/auth.service';
export declare class NbLoginComponent {
    protected service: NbAuthService;
    protected options: {};
    protected cd: ChangeDetectorRef;
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    errors: string[];
    messages: string[];
    user: any;
    submitted: boolean;
    socialLinks: NbAuthSocialLink[];
    rememberMe: boolean;
    constructor(service: NbAuthService, options: {}, cd: ChangeDetectorRef, router: Router);
    login(): void;
    getConfigValue(key: string): any;
}
