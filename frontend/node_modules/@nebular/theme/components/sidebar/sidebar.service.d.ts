/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Observable } from 'rxjs';
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 *
 * Allows you to change sidebar state dynamically from any part of the app:
 * @stacked-example(Sidebar State, sidebar/sidebar-toggle.component)
 */
export declare class NbSidebarService {
    private toggle$;
    private expand$;
    private collapse$;
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    onToggle(): Observable<{
        compact: boolean;
        tag: string;
    }>;
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    onExpand(): Observable<{
        tag: string;
    }>;
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    onCollapse(): Observable<{
        tag: string;
    }>;
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    toggle(compact?: boolean, tag?: string): void;
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    expand(tag?: string): void;
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    collapse(tag?: string): void;
}
