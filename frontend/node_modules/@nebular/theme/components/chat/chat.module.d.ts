/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbChatOptions } from './chat.options';
export declare class NbChatModule {
    static forRoot(options?: NbChatOptions): ModuleWithProviders<any>;
    static forChild(options?: NbChatOptions): ModuleWithProviders<any>;
}
