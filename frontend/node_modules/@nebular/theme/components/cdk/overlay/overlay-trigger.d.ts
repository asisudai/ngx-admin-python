import { ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';
export declare enum NbTrigger {
    CLICK = "click",
    HOVER = "hover",
    HINT = "hint",
    FOCUS = "focus"
}
/**
 * Provides entity with two event stream: show and hide.
 * Each stream provides different events depends on implementation.
 * We have three main trigger strategies: click, hint and hover.
 * */
/**
 * TODO maybe we have to use renderer.listen instead of observableFromEvent?
 * Renderer provides capability use it in service worker, ssr and so on.
 * */
export declare abstract class NbTriggerStrategy {
    protected document: Document;
    protected host: HTMLElement;
    protected container: () => ComponentRef<any>;
    protected isNotOnHostOrContainer(event: Event): boolean;
    protected isOnHostOrContainer(event: Event): boolean;
    protected isOnHost({ target }: Event): boolean;
    protected isOnContainer({ target }: Event): boolean;
    protected isElementInBody(element: HTMLElement): boolean;
    protected isHostInBody(): boolean;
    abstract show$: Observable<Event>;
    abstract hide$: Observable<Event>;
    constructor(document: Document, host: HTMLElement, container: () => ComponentRef<any>);
}
/**
 * Creates show and hide event streams.
 * Fires toggle event when the click was performed on the host element.
 * Fires close event when the click was performed on the document but
 * not on the host or container.
 * */
export declare class NbClickTriggerStrategy extends NbTriggerStrategy {
    protected click$: Observable<[boolean, Event]>;
    readonly show$: Observable<Event>;
    readonly hide$: Observable<Event>;
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element and stops out of the host and popover container.
 * */
export declare class NbHoverTriggerStrategy extends NbTriggerStrategy {
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element.
 * */
export declare class NbHintTriggerStrategy extends NbTriggerStrategy {
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
/**
 * Creates show and hide event streams.
 * Fires open event when a focus is on the host element and stay over at least 100 milliseconds.
 * Fires close event when the focus leaves the host element.
 * */
export declare class NbFocusTriggerStrategy extends NbTriggerStrategy {
    protected focusOut$: Observable<Event>;
    protected clickIn$: Observable<Event>;
    protected clickOut$: Observable<Event>;
    protected tabKeyPress$: Observable<Event>;
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
export declare class NbTriggerStrategyBuilder {
    protected _host: HTMLElement;
    protected _container: () => ComponentRef<any>;
    protected _trigger: NbTrigger;
    protected _document: Document;
    document(document: Document): this;
    trigger(trigger: NbTrigger): this;
    host(host: HTMLElement): this;
    container(container: () => ComponentRef<any>): this;
    build(): NbTriggerStrategy;
}
