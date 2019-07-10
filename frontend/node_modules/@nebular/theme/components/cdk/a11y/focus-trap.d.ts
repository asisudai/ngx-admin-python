import { NgZone } from '@angular/core';
import { FocusTrap, FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
/**
 * Overrides angular cdk focus trap to keep restore functionality inside trap.
 * */
export declare class NbFocusTrap extends FocusTrap {
    protected element: HTMLElement;
    protected checker: InteractivityChecker;
    protected ngZone: NgZone;
    protected document: Document;
    protected previouslyFocusedElement: HTMLElement;
    constructor(element: HTMLElement, checker: InteractivityChecker, ngZone: NgZone, document: Document, deferAnchors: any);
    restoreFocus(): void;
    blurPreviouslyFocusedElement(): void;
    protected savePreviouslyFocusedElement(): void;
}
export declare class NbFocusTrapFactoryService extends FocusTrapFactory {
    protected checker: InteractivityChecker;
    protected ngZone: NgZone;
    private document;
    constructor(checker: InteractivityChecker, ngZone: NgZone, document: any);
    create(element: HTMLElement, deferCaptureElements?: boolean): NbFocusTrap;
}
