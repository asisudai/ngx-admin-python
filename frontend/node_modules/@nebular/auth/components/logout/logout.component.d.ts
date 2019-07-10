/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '../../services/auth.service';
export declare class NbLogoutComponent implements OnInit {
    protected service: NbAuthService;
    protected options: {};
    protected router: Router;
    redirectDelay: number;
    strategy: string;
    constructor(service: NbAuthService, options: {}, router: Router);
    ngOnInit(): void;
    logout(strategy: string): void;
    getConfigValue(key: string): any;
}
