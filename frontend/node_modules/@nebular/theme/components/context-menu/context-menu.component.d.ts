/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbMenuItem } from '../../components/menu/menu.service';
import { NbPositionedContainer } from '../cdk';
/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-fg
 * context-menu-active-fg
 * context-menu-active-bg
 * */
export declare class NbContextMenuComponent extends NbPositionedContainer {
    items: NbMenuItem[];
    tag: string;
}
