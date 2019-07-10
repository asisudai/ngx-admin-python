import { ModuleWithProviders } from '@angular/core';
import { NbWindowConfig } from './window.options';
export declare class NbWindowModule {
    static forRoot(defaultConfig?: Partial<NbWindowConfig>): ModuleWithProviders<any>;
    static forChild(defaultConfig?: Partial<NbWindowConfig>): ModuleWithProviders<any>;
}
