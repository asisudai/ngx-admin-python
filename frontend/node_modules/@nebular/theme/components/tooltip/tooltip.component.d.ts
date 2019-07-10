import { NbPosition } from '../cdk';
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-bg
 * tooltip-primary-bg
 * tooltip-info-bg
 * tooltip-success-bg
 * tooltip-warning-bg
 * tooltip-danger-bg
 * tooltip-fg
 * tooltip-shadow
 * tooltip-font-size
 *
 */
export declare class NbTooltipComponent {
    content: string;
    /**
     * Popover position relatively host element.
     * */
    position: NbPosition;
    readonly binding: string;
    readonly show: boolean;
    context: {
        icon?: string;
        status?: string;
    };
}
