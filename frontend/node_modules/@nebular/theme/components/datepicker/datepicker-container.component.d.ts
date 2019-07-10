import { ComponentRef } from '@angular/core';
import { NbComponentPortal, NbOverlayContainerComponent, NbPositionedContainer } from '../cdk';
export declare class NbDatepickerContainerComponent extends NbPositionedContainer {
    overlayContainer: NbOverlayContainerComponent;
    attach<T>(portal: NbComponentPortal<T>): ComponentRef<T>;
}
