import { AfterViewInit, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy } from '@angular/core';
import { NbAdjustableConnectedPositionStrategy, NbAdjustment, NbOverlayRef, NbOverlayService, NbPosition, NbPositionBuilderService, NbTriggerStrategy } from '../cdk';
/**
 *
 * Tooltip directive for small text/icon hints.
 *
 * ### Installation
 *
 * Import `NbTooltipModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbTooltipModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * @stacked-example(Showcase, tooltip/tooltip-showcase.component)
 *
 * Tooltip can accept a hint text and/or an icon:
 * @stacked-example(With Icon, tooltip/tooltip-with-icon.component)
 *
 * Same way as Popover, tooltip can accept placement position with `nbTooltipPlacement` proprety:
 * @stacked-example(Placements, tooltip/tooltip-placements.component)
 *
 * It is also possible to specify tooltip color using `nbTooltipStatus` property:
 * @stacked-example(Colored Tooltips, tooltip/tooltip-colors.component)
 *
 */
export declare class NbTooltipDirective implements AfterViewInit, OnDestroy {
    protected document: any;
    private hostRef;
    private positionBuilder;
    private overlay;
    private componentFactoryResolver;
    context: Object;
    /**
     * Popover content which will be rendered in NbTooltipComponent.
     * Available content: template ref, component and any primitive.
     *
     */
    content: string;
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom, left, start or end.
     */
    position: NbPosition;
    /**
     * Container position will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to any falsy value if you want to disable automatically adjustment.
     * Available values: clockwise, counterclockwise.
     */
    adjustment: NbAdjustment;
    /**
     *
     * @param {string} icon
     */
    icon: string;
    /**
     *
     * @param {string} status
     */
    status: string;
    protected ref: NbOverlayRef;
    protected container: ComponentRef<any>;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected alive: boolean;
    constructor(document: any, hostRef: ElementRef, positionBuilder: NbPositionBuilderService, overlay: NbOverlayService, componentFactoryResolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    protected createOverlay(): void;
    protected openTooltip(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnPositionChange(): void;
    protected subscribeOnTriggers(): void;
}
