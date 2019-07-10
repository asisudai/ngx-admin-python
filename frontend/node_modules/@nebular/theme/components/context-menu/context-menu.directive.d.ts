/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterViewInit, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy } from '@angular/core';
import { NbAdjustableConnectedPositionStrategy, NbAdjustment, NbOverlayRef, NbOverlayService, NbPosition, NbPositionBuilderService, NbTriggerStrategy } from '../cdk';
import { NbMenuItem, NbMenuService } from '../menu/menu.service';
/**
 * Full featured context menu directive.
 *
 * @stacked-example(Showcase, context-menu/context-menu-showcase.component)
 *
 * Just pass menu items array:
 *
 * ```html
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * ### Installation
 *
 * Import `NbContextMenuModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbContextMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to handle context menu clicks you have to pass `nbContextMenuTag`
 * param and register to events using NbMenuService.
 * `NbContextMenu` renders plain `NbMenu` inside, so
 * you have to work with it just like with `NbMenu` component:
 *
 * @stacked-example(Menu item click, context-menu/context-menu-click.component)
 *
 * Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * */
export declare class NbContextMenuDirective implements AfterViewInit, OnDestroy {
    protected document: any;
    private menuService;
    private hostRef;
    private positionBuilder;
    private overlay;
    private componentFactoryResolver;
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom and left.
     * */
    position: NbPosition;
    /**
     * Container position will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to any falsy value if you want to disable automatically adjustment.
     * Available values: clockwise, counterclockwise.
     * */
    adjustment: NbAdjustment;
    /**
     * Set NbMenu tag, which helps identify menu when working with NbMenuService.
     * */
    tag: string;
    /**
     * Basic menu items, will be passed to the internal NbMenuComponent.
     * */
    setItems: NbMenuItem[];
    protected ref: NbOverlayRef;
    protected container: ComponentRef<any>;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected alive: boolean;
    private items;
    constructor(document: any, menuService: NbMenuService, hostRef: ElementRef, positionBuilder: NbPositionBuilderService, overlay: NbOverlayService, componentFactoryResolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    protected createOverlay(): void;
    protected openContextMenu(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnPositionChange(): void;
    protected subscribeOnTriggers(): void;
    private validateItems;
    private subscribeOnItemClick;
}
