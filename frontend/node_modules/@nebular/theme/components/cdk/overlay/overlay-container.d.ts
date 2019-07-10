import { ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injector, ViewContainerRef } from '@angular/core';
import { NbPosition } from './overlay-position';
import { NbComponentPortal, NbPortalInjector, NbTemplatePortal } from './mapping';
export declare abstract class NbPositionedContainer {
    position: NbPosition;
    readonly top: boolean;
    readonly right: boolean;
    readonly bottom: boolean;
    readonly left: boolean;
}
export declare class NbOverlayContainerComponent {
    protected vcr: ViewContainerRef;
    protected injector: Injector;
    isAttached: boolean;
    content: string;
    constructor(vcr: ViewContainerRef, injector: Injector);
    readonly isStringContent: boolean;
    attachComponentPortal<T>(portal: NbComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal<C>(portal: NbTemplatePortal<C>): EmbeddedViewRef<C>;
    attachStringContent(content: string): void;
    protected createChildInjector(cfr: ComponentFactoryResolver): NbPortalInjector;
}
