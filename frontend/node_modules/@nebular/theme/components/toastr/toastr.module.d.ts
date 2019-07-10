/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbToastrConfig } from './toastr-config';
export declare class NbToastrModule {
    static forRoot(toastrConfig?: Partial<NbToastrConfig>): ModuleWithProviders;
}
