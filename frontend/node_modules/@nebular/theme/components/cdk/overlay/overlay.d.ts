import { ComponentFactoryResolver, ComponentRef, TemplateRef, Type } from '@angular/core';
import { NbComponentType, NbOverlay, NbOverlayConfig, NbOverlayRef, NbScrollStrategyOptions } from './mapping';
import { NbLayoutDirectionService } from '../../../services/direction.service';
export declare type NbOverlayContent = Type<any> | TemplateRef<any> | string;
export declare function patch<T>(container: ComponentRef<T>, containerContext: Object): ComponentRef<T>;
export declare function createContainer<T>(ref: NbOverlayRef, container: NbComponentType<T>, context: Object, componentFactoryResolver?: ComponentFactoryResolver): ComponentRef<T>;
export declare class NbOverlayService {
    protected overlay: NbOverlay;
    protected layoutDirection: NbLayoutDirectionService;
    constructor(overlay: NbOverlay, layoutDirection: NbLayoutDirectionService);
    readonly scrollStrategies: NbScrollStrategyOptions;
    create(config?: NbOverlayConfig): NbOverlayRef;
}
