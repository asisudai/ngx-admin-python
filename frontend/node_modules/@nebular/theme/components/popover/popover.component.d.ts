/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { NbOverlayContainerComponent, NbPositionedContainer } from '../cdk';
/**
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-fg
 * popover-bg
 * popover-border
 * popover-shadow
 * */
export declare class NbPopoverComponent extends NbPositionedContainer implements AfterViewInit {
    overlayContainer: NbOverlayContainerComponent;
    content: any;
    context: Object;
    cfr: ComponentFactoryResolver;
    ngAfterViewInit(): void;
    protected attachTemplate(): void;
    protected attachComponent(): void;
    protected attachString(): void;
}
