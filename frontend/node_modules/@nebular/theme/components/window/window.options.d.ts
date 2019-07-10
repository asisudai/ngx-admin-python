import { TemplateRef, InjectionToken, ViewContainerRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
export declare enum NbWindowState {
    MINIMIZED = "minimized",
    MAXIMIZED = "maximized",
    FULL_SCREEN = "full-screen"
}
export interface NbWindowStateChange {
    oldState: NbWindowState;
    newState: NbWindowState;
}
/**
 * Window configuration options.
 */
export declare class NbWindowConfig {
    /**
     * Window title.
     */
    title: string;
    /**
     * Initial window state. Full screen by default.
     */
    initialState: NbWindowState;
    /**
     * If true than backdrop will be rendered behind window.
     * By default set to true.
     */
    hasBackdrop: boolean;
    /**
     * If set to true mouse clicks on backdrop will close a window.
     * Default is true.
     */
    closeOnBackdropClick: boolean;
    /**
     * If true then escape press will close a window.
     * Default is true.
     */
    closeOnEsc: boolean;
    /**
     * Class to be applied to the window.
     */
    windowClass: string;
    /**
     * Both, template and component may receive data through `config.context` property.
     * For components, this data will be set as component properties.
     * For templates, you can access it inside template as $implicit.
     */
    context?: Object;
    /**
     * Where the attached component should live in Angular's *logical* component tree.
     * This affects what is available for injection and the change detection order for the
     * component instantiated inside of the window. This does not affect where the window
     * content will be rendered.
     */
    viewContainerRef: ViewContainerRef;
    constructor(...configs: Partial<NbWindowConfig>[]);
}
export declare const NB_WINDOW_CONTENT: InjectionToken<TemplateRef<any> | ComponentType<any>>;
export declare const NB_WINDOW_CONFIG: InjectionToken<NbWindowConfig>;
export declare const NB_WINDOW_CONTEXT: InjectionToken<Object>;
