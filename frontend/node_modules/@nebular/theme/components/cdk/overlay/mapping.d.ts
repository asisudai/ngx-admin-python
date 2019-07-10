import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, ModuleWithProviders, NgZone, TemplateRef, ViewContainerRef } from '@angular/core';
import { CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortalOutlet, Portal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ComponentType, ConnectedOverlayPositionChange, ConnectedPosition, ConnectionPositionPair, FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayPositionBuilder, OverlayRef, PositionStrategy, ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { Directionality } from '@angular/cdk/bidi';
export declare class NbPortalDirective extends CdkPortal {
}
export declare class NbPortalOutletDirective extends CdkPortalOutlet {
}
export declare class NbComponentPortal<T = any> extends ComponentPortal<T> {
    cfr?: ComponentFactoryResolver;
    constructor(component: ComponentType<T>, vcr?: ViewContainerRef, injector?: Injector, cfr?: ComponentFactoryResolver);
}
/**
 * TODO remove after @angular/cdk@7.0.0 relased
 * */
export declare class NbDomPortalOutlet extends DomPortalOutlet {
    /** Element into which the content is projected. */
    outletElement: Element;
    private componentFactoryResolver;
    private appRef;
    private defaultInjector;
    constructor(
    /** Element into which the content is projected. */
    outletElement: Element, componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, defaultInjector: Injector);
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    attachComponentPortal<T>(portal: NbComponentPortal<T>): ComponentRef<T>;
    /** Gets the root HTMLElement for an instantiated component. */
    private getComponentRootNode;
}
export declare class NbOverlay extends Overlay {
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies: ScrollStrategyOptions;
    protected overlayContainer: OverlayContainer;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected positionBuilder: OverlayPositionBuilder;
    protected keyboardDispatcher: OverlayKeyboardDispatcher;
    protected injector: Injector;
    protected ngZone: NgZone;
    private document;
    private directionality;
    protected appRef: ApplicationRef;
    protected static nextUniqueId: number;
    constructor(
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies: ScrollStrategyOptions, overlayContainer: OverlayContainer, componentFactoryResolver: ComponentFactoryResolver, positionBuilder: OverlayPositionBuilder, keyboardDispatcher: OverlayKeyboardDispatcher, injector: Injector, ngZone: NgZone, document: any, directionality: Directionality);
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    create(config?: OverlayConfig): OverlayRef;
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    protected createPaneElement(host: HTMLElement): HTMLElement;
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @returns Newly-create host element.
     */
    protected createHostElement(): HTMLElement;
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal outlet.
     * @returns A portal outlet for the given DOM element.
     */
    protected createPortalOutlet(pane: HTMLElement): NbDomPortalOutlet;
}
export declare class NbPlatform extends Platform {
}
export declare class NbOverlayPositionBuilder extends OverlayPositionBuilder {
}
export declare class NbTemplatePortal<T = any> extends TemplatePortal<T> {
    constructor(template: TemplateRef<T>, viewContainerRef?: ViewContainerRef, context?: T);
}
export declare class NbOverlayContainer extends OverlayContainer {
}
export declare class NbFlexibleConnectedPositionStrategy extends FlexibleConnectedPositionStrategy {
}
export declare class NbPortalInjector extends PortalInjector {
}
export declare type NbPortal<T = any> = Portal<T>;
export declare type NbOverlayRef = OverlayRef;
export declare type NbComponentType<T = any> = ComponentType<T>;
export declare type NbPositionStrategy = PositionStrategy;
export declare type NbConnectedPosition = ConnectedPosition;
export declare type NbConnectedOverlayPositionChange = ConnectedOverlayPositionChange;
export declare type NbConnectionPositionPair = ConnectionPositionPair;
export declare type NbOverlayConfig = OverlayConfig;
export declare type NbScrollStrategyOptions = ScrollStrategyOptions;
export declare type NbScrollStrategy = ScrollStrategy;
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
export declare class NbCdkMappingModule {
    static forRoot(): ModuleWithProviders;
}
