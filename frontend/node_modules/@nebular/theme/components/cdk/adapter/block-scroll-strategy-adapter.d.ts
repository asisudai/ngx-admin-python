import { NgZone } from '@angular/core';
import { BlockScrollStrategy, ScrollDispatcher, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NbLayoutScrollService } from '../../../services/scroll.service';
import { NbViewportRulerAdapter } from './viewport-ruler-adapter';
/**
 * Overrides default block scroll strategy because default strategy blocks scrolling on the body only.
 * But Nebular has its own scrollable container - nb-layout. So, we need to block scrolling in it to.
 * */
export declare class NbBlockScrollStrategyAdapter extends BlockScrollStrategy {
    protected scrollService: NbLayoutScrollService;
    constructor(document: any, viewportRuler: NbViewportRulerAdapter, scrollService: NbLayoutScrollService);
    enable(): void;
    disable(): void;
}
export declare class NbScrollStrategyOptions extends ScrollStrategyOptions {
    protected scrollService: NbLayoutScrollService;
    protected scrollDispatcher: ScrollDispatcher;
    protected viewportRuler: NbViewportRulerAdapter;
    protected ngZone: NgZone;
    protected document: any;
    constructor(scrollService: NbLayoutScrollService, scrollDispatcher: ScrollDispatcher, viewportRuler: NbViewportRulerAdapter, ngZone: NgZone, document: any);
    block: () => NbBlockScrollStrategyAdapter;
}
