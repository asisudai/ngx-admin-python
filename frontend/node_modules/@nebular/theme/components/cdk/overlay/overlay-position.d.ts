import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NbConnectedPosition, NbFlexibleConnectedPositionStrategy, NbOverlayPositionBuilder, NbOverlayRef, NbPlatform, NbPositionStrategy } from './mapping';
import { NbViewportRulerAdapter } from '../adapter/viewport-ruler-adapter';
import { NbGlobalLogicalPosition } from './position-helper';
import { GlobalPositionStrategy } from '@angular/cdk/overlay';
export declare enum NbAdjustment {
    NOOP = "noop",
    CLOCKWISE = "clockwise",
    COUNTERCLOCKWISE = "counterclockwise",
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
export declare enum NbPosition {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    START = "start",
    END = "end"
}
/**
 * The main idea of the adjustable connected strategy is to provide predefined set of positions for your overlay.
 * You have to provide adjustment and appropriate strategy will be chosen in runtime.
 * */
export declare class NbAdjustableConnectedPositionStrategy extends NbFlexibleConnectedPositionStrategy implements NbPositionStrategy {
    protected _position: NbPosition;
    protected _offset: number;
    protected _adjustment: NbAdjustment;
    protected appliedPositions: {
        key: NbPosition;
        connectedPosition: NbConnectedPosition;
    }[];
    readonly positionChange: Observable<NbPosition>;
    attach(overlayRef: NbOverlayRef): void;
    apply(): void;
    position(position: NbPosition): this;
    adjustment(adjustment: NbAdjustment): this;
    offset(offset: number): this;
    protected applyPositions(): void;
    protected createPositions(): NbPosition[];
    protected persistChosenPositions(positions: NbPosition[]): void;
    protected reorderPreferredPositions(positions: NbPosition[]): NbPosition[];
}
export declare class NbGlobalPositionStrategy extends GlobalPositionStrategy {
    position(position: NbGlobalLogicalPosition): this;
}
export declare class NbPositionBuilderService {
    protected document: any;
    protected viewportRuler: NbViewportRulerAdapter;
    protected platform: NbPlatform;
    protected positionBuilder: NbOverlayPositionBuilder;
    constructor(document: any, viewportRuler: NbViewportRulerAdapter, platform: NbPlatform, positionBuilder: NbOverlayPositionBuilder);
    global(): NbGlobalPositionStrategy;
    connectedTo(elementRef: ElementRef): NbAdjustableConnectedPositionStrategy;
}
