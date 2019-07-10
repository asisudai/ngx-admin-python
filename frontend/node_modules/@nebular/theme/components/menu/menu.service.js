/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { isUrlPathContain, isUrlPathEqual } from './url-matching-helpers';
var itemClick$ = new Subject();
var addItems$ = new ReplaySubject(1);
var navigateHome$ = new ReplaySubject(1);
var getSelectedItem$ = new ReplaySubject(1);
var itemSelect$ = new ReplaySubject(1);
var itemHover$ = new ReplaySubject(1);
var submenuToggle$ = new ReplaySubject(1);
var collapseAll$ = new ReplaySubject(1);
// TODO: check if we need both URL and LINK
/**
 *
 *
 * Menu Item options example
 * @stacked-example(Menu Link Parameters, menu/menu-link-params.component)
 *
 *
 */
var NbMenuItem = /** @class */ (function () {
    function NbMenuItem() {
        /**
         * Item is selected when partly or fully equal to the current url
         * @type {string}
         */
        this.pathMatch = 'full';
    }
    /**
     * @returns item parents in top-down order
     */
    NbMenuItem.getParents = function (item) {
        var parents = [];
        var parent = item.parent;
        while (parent) {
            parents.unshift(parent);
            parent = parent.parent;
        }
        return parents;
    };
    NbMenuItem.isParent = function (item, possibleChild) {
        return possibleChild.parent
            ? possibleChild.parent === item || this.isParent(item, possibleChild.parent)
            : false;
    };
    return NbMenuItem;
}());
export { NbMenuItem };
// TODO: map select events to router change events
// TODO: review the interface
/**
 *
 *
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 * @stacked-example(Menu Service, menu/menu-service.component)
 *
 *
 */
var NbMenuService = /** @class */ (function () {
    function NbMenuService() {
    }
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    NbMenuService.prototype.addItems = function (items, tag) {
        addItems$.next({ tag: tag, items: items });
    };
    /**
     * Collapses all menu items
     * @param {string} tag
     */
    NbMenuService.prototype.collapseAll = function (tag) {
        collapseAll$.next({ tag: tag });
    };
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    NbMenuService.prototype.navigateHome = function (tag) {
        navigateHome$.next({ tag: tag });
    };
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    NbMenuService.prototype.getSelectedItem = function (tag) {
        var listener = new BehaviorSubject(null);
        getSelectedItem$.next({ tag: tag, listener: listener });
        return listener.asObservable();
    };
    NbMenuService.prototype.onItemClick = function () {
        return itemClick$.pipe(share());
    };
    NbMenuService.prototype.onItemSelect = function () {
        return itemSelect$.pipe(share());
    };
    NbMenuService.prototype.onItemHover = function () {
        return itemHover$.pipe(share());
    };
    NbMenuService.prototype.onSubmenuToggle = function () {
        return submenuToggle$.pipe(share());
    };
    NbMenuService = __decorate([
        Injectable()
    ], NbMenuService);
    return NbMenuService;
}());
export { NbMenuService };
var NbMenuInternalService = /** @class */ (function () {
    function NbMenuInternalService(location) {
        this.location = location;
    }
    NbMenuInternalService.prototype.prepareItems = function (items) {
        var _this = this;
        var defaultItem = new NbMenuItem();
        items.forEach(function (i) {
            _this.applyDefaults(i, defaultItem);
            _this.setParent(i);
        });
    };
    NbMenuInternalService.prototype.selectFromUrl = function (items, tag, collapseOther) {
        if (collapseOther === void 0) { collapseOther = false; }
        var selectedItem = this.findItemByUrl(items);
        if (selectedItem) {
            this.selectItem(selectedItem, items, collapseOther, tag);
        }
    };
    NbMenuInternalService.prototype.selectItem = function (item, items, collapseOther, tag) {
        if (collapseOther === void 0) { collapseOther = false; }
        var unselectedItems = this.resetSelection(items);
        var collapsedItems = collapseOther ? this.collapseItems(items) : [];
        for (var _i = 0, _a = NbMenuItem.getParents(item); _i < _a.length; _i++) {
            var parent_1 = _a[_i];
            parent_1.selected = true;
            // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
            if (!unselectedItems.includes(parent_1)) {
                this.itemSelect(parent_1, tag);
            }
            var wasNotExpanded = !parent_1.expanded;
            parent_1.expanded = true;
            var i = collapsedItems.indexOf(parent_1);
            // emit event only for items that weren't expanded before.
            // 'collapsedItems' contains items that were expanded, so no need to emit event.
            // in case 'collapseOther' is false, 'collapsedItems' will be empty,
            // so also check if item isn't expanded already ('wasNotExpanded').
            if (i === -1 && wasNotExpanded) {
                this.submenuToggle(parent_1, tag);
            }
            else {
                collapsedItems.splice(i, 1);
            }
        }
        item.selected = true;
        // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
        if (!unselectedItems.includes(item)) {
            this.itemSelect(item, tag);
        }
        // remaining items which wasn't expanded back after expanding all currently selected items
        for (var _b = 0, collapsedItems_1 = collapsedItems; _b < collapsedItems_1.length; _b++) {
            var collapsedItem = collapsedItems_1[_b];
            this.submenuToggle(collapsedItem, tag);
        }
    };
    NbMenuInternalService.prototype.collapseAll = function (items, tag, except) {
        var collapsedItems = this.collapseItems(items, except);
        for (var _i = 0, collapsedItems_2 = collapsedItems; _i < collapsedItems_2.length; _i++) {
            var item = collapsedItems_2[_i];
            this.submenuToggle(item, tag);
        }
    };
    NbMenuInternalService.prototype.onAddItem = function () {
        return addItems$.pipe(share());
    };
    NbMenuInternalService.prototype.onNavigateHome = function () {
        return navigateHome$.pipe(share());
    };
    NbMenuInternalService.prototype.onCollapseAll = function () {
        return collapseAll$.pipe(share());
    };
    NbMenuInternalService.prototype.onGetSelectedItem = function () {
        return getSelectedItem$.pipe(share());
    };
    NbMenuInternalService.prototype.itemHover = function (item, tag) {
        itemHover$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.submenuToggle = function (item, tag) {
        submenuToggle$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemSelect = function (item, tag) {
        itemSelect$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemClick = function (item, tag) {
        itemClick$.next({ tag: tag, item: item });
    };
    /**
     * Unselect all given items deeply.
     * @param items array of items to unselect.
     * @returns items which selected value was changed.
     */
    NbMenuInternalService.prototype.resetSelection = function (items) {
        var unselectedItems = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.selected) {
                unselectedItems.push(item);
            }
            item.selected = false;
            if (item.children) {
                unselectedItems.push.apply(unselectedItems, this.resetSelection(item.children));
            }
        }
        return unselectedItems;
    };
    /**
     * Collapse all given items deeply.
     * @param items array of items to collapse.
     * @param except menu item which shouldn't be collapsed, also disables collapsing for parents of this item.
     * @returns items which expanded value was changed.
     */
    NbMenuInternalService.prototype.collapseItems = function (items, except) {
        var collapsedItems = [];
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            if (except && (item === except || NbMenuItem.isParent(item, except))) {
                continue;
            }
            if (item.expanded) {
                collapsedItems.push(item);
            }
            item.expanded = false;
            if (item.children) {
                collapsedItems.push.apply(collapsedItems, this.collapseItems(item.children));
            }
        }
        return collapsedItems;
    };
    NbMenuInternalService.prototype.applyDefaults = function (item, defaultItem) {
        var _this = this;
        var menuItem = __assign({}, item);
        Object.assign(item, defaultItem, menuItem);
        item.children && item.children.forEach(function (child) {
            _this.applyDefaults(child, defaultItem);
        });
    };
    NbMenuInternalService.prototype.setParent = function (item) {
        var _this = this;
        item.children && item.children.forEach(function (child) {
            child.parent = item;
            _this.setParent(child);
        });
    };
    /**
     * Find deepest item which link matches current URL path.
     * @param items array of items to search in.
     * @returns found item of undefined.
     */
    NbMenuInternalService.prototype.findItemByUrl = function (items) {
        var _this = this;
        var selectedItem;
        items.some(function (item) {
            if (item.children) {
                selectedItem = _this.findItemByUrl(item.children);
            }
            if (!selectedItem && _this.isSelectedInUrl(item)) {
                selectedItem = item;
            }
            return selectedItem;
        });
        return selectedItem;
    };
    NbMenuInternalService.prototype.isSelectedInUrl = function (item) {
        var exact = item.pathMatch === 'full';
        return exact
            ? isUrlPathEqual(this.location.path(), item.link)
            : isUrlPathContain(this.location.path(), item.link);
    };
    NbMenuInternalService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Location])
    ], NbMenuInternalService);
    return NbMenuInternalService;
}());
export { NbMenuInternalService };
//# sourceMappingURL=menu.service.js.map