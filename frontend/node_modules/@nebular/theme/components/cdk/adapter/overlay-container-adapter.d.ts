import { NbOverlayContainer } from '../overlay/mapping';
/**
 * Provides nb-layout as overlay container.
 * Container has to be cleared when layout destroys.
 * Another way previous version of the container will be used
 * but it isn't inserted in DOM and exists in memory only.
 * This case important only if you switch between multiple layouts.
 * */
export declare class NbOverlayContainerAdapter extends NbOverlayContainer {
    protected container: HTMLElement;
    setContainer(container: HTMLElement): void;
    clearContainer(): void;
    protected _createContainer(): void;
}
