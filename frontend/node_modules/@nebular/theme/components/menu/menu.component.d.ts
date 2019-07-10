/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnInit, OnDestroy, AfterViewInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuInternalService, NbMenuItem, NbMenuService } from './menu.service';
export declare enum NbToggleStates {
    Expanded = "expanded",
    Collapsed = "collapsed"
}
export declare class NbMenuItemComponent implements DoCheck, AfterViewInit, OnDestroy {
    private menuService;
    menuItem: NbMenuItem;
    hoverItem: EventEmitter<any>;
    toggleSubMenu: EventEmitter<any>;
    selectItem: EventEmitter<any>;
    itemClick: EventEmitter<any>;
    private alive;
    toggleState: NbToggleStates;
    constructor(menuService: NbMenuService);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onToggleSubMenu(item: NbMenuItem): void;
    onHoverItem(item: NbMenuItem): void;
    onSelectItem(item: NbMenuItem): void;
    onItemClick(item: NbMenuItem): void;
}
/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * Basic example
 * @stacked-example(Showcase, menu/menu-showcase.component)
 *
 * ```ts
 * // ...
 * items: NbMenuItem[] = [
 *  {
 *    title: home,
 *    link: '/'
 *  },
 *  {
 *    title: dashboard,
 *    link: 'dashboard'
 *  }
 * ];
 * // ...
 * <nb-menu [items]="items"></nb-menu>
 * ```
 * ### Installation
 *
 * Import `NbMenuModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbMenuModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Two-level menu example
 * @stacked-example(Two Levels, menu/menu-children.component)
 *
 *
 * Autocollapse menu example
 * @stacked-example(Autocollapse Menu, menu/menu-autocollapse.component)
 *
 *
 * @styles
 *
 * menu-font-family:
 * menu-font-size:
 * menu-font-weight:
 * menu-fg:
 * menu-bg:
 * menu-active-fg:
 * menu-active-bg:
 * menu-active-font-weight:
 * menu-submenu-bg:
 * menu-submenu-fg:
 * menu-submenu-active-fg:
 * menu-submenu-active-bg:
 * menu-submenu-active-border-color:
 * menu-submenu-active-shadow:
 * menu-submenu-hover-fg:
 * menu-submenu-hover-bg:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-container-padding:
 * menu-submenu-padding:
 * menu-group-font-weight:
 * menu-group-font-size:
 * menu-group-fg:
 * menu-group-padding
 * menu-item-padding:
 * menu-item-separator:
 * menu-icon-font-size:
 * menu-icon-margin:
 * menu-icon-color:
 * menu-icon-active-color:
 */
export declare class NbMenuComponent implements OnInit, AfterViewInit, OnDestroy {
    private window;
    private menuInternalService;
    private router;
    inverseValue: boolean;
    /**
     * Tags a menu with some ID, can be later used in the menu service
     * to determine which menu triggered the action, if multiple menus exist on the page.
     *
     * @type {string}
     */
    tag: string;
    /**
     * List of menu items.
     * @type List<NbMenuItem> | List<any> | any
     */
    items: NbMenuItem[];
    /**
     * Makes colors inverse based on current theme
     * @type boolean
     */
    inverse: boolean;
    /**
     * Collapse all opened submenus on the toggle event
     * Default value is "false"
     * @type boolean
     */
    autoCollapse: boolean;
    private alive;
    private autoCollapseValue;
    constructor(window: any, menuInternalService: NbMenuInternalService, router: Router);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onAddItem(data: {
        tag: string;
        items: NbMenuItem[];
    }): void;
    onHoverItem(item: NbMenuItem): void;
    onToggleSubMenu(item: NbMenuItem): void;
    onSelectItem(item: NbMenuItem): void;
    onItemClick(item: NbMenuItem): void;
    ngOnDestroy(): void;
    private navigateHome;
    private collapseAll;
    private getHomeItem;
    private compareTag;
    private getSelectedItem;
}
