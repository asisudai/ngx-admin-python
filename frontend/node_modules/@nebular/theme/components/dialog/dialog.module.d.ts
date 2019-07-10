/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbDialogConfig } from './dialog-config';
export declare class NbDialogModule {
    static forRoot(dialogConfig?: Partial<NbDialogConfig>): ModuleWithProviders;
    static forChild(dialogConfig?: Partial<NbDialogConfig>): ModuleWithProviders;
}
