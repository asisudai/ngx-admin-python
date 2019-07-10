/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { NbGlobalLogicalPosition, NbGlobalPosition, NbOverlayService, NbPositionBuilderService, NbPositionHelper } from '../cdk';
import { NbToastrContainerComponent } from './toastr-container.component';
import { NbToastrConfig } from './toastr-config';
import { NbToast } from './model';
import { NbToastComponent } from './toast.component';
export declare class NbToastRef {
    private toastContainer;
    private toast;
    constructor(toastContainer: NbToastContainer, toast: NbToast);
    close(): void;
}
export declare class NbToastContainer {
    protected position: NbGlobalPosition;
    protected containerRef: ComponentRef<NbToastrContainerComponent>;
    protected positionHelper: NbPositionHelper;
    protected toasts: NbToast[];
    protected prevToast: NbToast;
    constructor(position: NbGlobalPosition, containerRef: ComponentRef<NbToastrContainerComponent>, positionHelper: NbPositionHelper);
    attach(toast: NbToast): NbToastRef;
    destroy(toast: NbToast): void;
    protected isDuplicate(toast: NbToast): boolean;
    protected attachToast(toast: NbToast): NbToastComponent;
    protected attachToTop(toast: NbToast): NbToastComponent;
    protected attachToBottom(toast: NbToast): NbToastComponent;
    protected setDestroyTimeout(toast: NbToast): void;
    protected subscribeOnClick(toastComponent: NbToastComponent, toast: NbToast): void;
    protected updateContainer(): void;
}
export declare class NbToastrContainerRegistry {
    protected overlay: NbOverlayService;
    protected positionBuilder: NbPositionBuilderService;
    protected positionHelper: NbPositionHelper;
    protected cfr: ComponentFactoryResolver;
    protected overlays: Map<NbGlobalPosition, NbToastContainer>;
    constructor(overlay: NbOverlayService, positionBuilder: NbPositionBuilderService, positionHelper: NbPositionHelper, cfr: ComponentFactoryResolver);
    get(position: NbGlobalPosition): NbToastContainer;
    protected instantiateContainer(position: NbGlobalLogicalPosition): void;
    protected createContainer(position: NbGlobalLogicalPosition): NbToastContainer;
}
/**
 * The `NbToastrService` provides a capability to build toast notifications.
 *
 * @stacked-example(Showcase, toastr/toastr-showcase.component)
 *
 * `NbToastrService.show(message, title, config)` accepts three params, title and config are optional.
 *
 * ### Installation
 *
 * Import `NbToastrModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbToastrModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * Calling `NbToastrService.show(...)` will render new toast and return `NbToastrRef` with
 * help of which you may close newly created toast by calling `close` method.
 *
 * ```ts
 * const toastRef: NbToastRef = this.toastrService.show(...);
 * toastRef.close();
 * ```
 *
 * Config accepts following options:
 *
 * `position` - determines where on the screen toast will be rendered.
 * Default is `top-end`.
 *
 * @stacked-example(Position, toastr/toastr-positions.component)
 *
 * `status` - coloring and icon of the toast.
 * Default is `primary`
 *
 * @stacked-example(Status, toastr/toastr-statuses.component)
 *
 * `duration` - the time after which the toast will be destroyed.
 * `0` means endless toast, that may be destroyed by click only.
 * Default is 3000 ms.
 *
 * @stacked-example(Duration, toastr/toastr-duration.component)
 *
 * `destroyByClick` - provides a capability to destroy toast by click.
 * Default is true.
 *
 * @stacked-example(Destroy by click, toastr/toastr-destroy-by-click.component)
 *
 * `preventDuplicates` - don't create new toast if it has the same title and the same message with previous one.
 * Default is false.
 *
 * @stacked-example(Prevent duplicates, toastr/toastr-prevent-duplicates.component)
 *
 * `hasIcon` - if true then render toast icon.
 * `icon` - you can pass icon class that will be applied into the toast.
 *
 * @stacked-example(Has icon, toastr/toastr-icon.component)
 * */
export declare class NbToastrService {
    protected globalConfig: NbToastrConfig;
    protected containerRegistry: NbToastrContainerRegistry;
    constructor(globalConfig: NbToastrConfig, containerRegistry: NbToastrContainerRegistry);
    /**
     * Shows toast with message, title and user config.
     * */
    show(message: any, title?: any, userConfig?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows success toast with message, title and user config.
     * */
    success(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows info toast with message, title and user config.
     * */
    info(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows warning toast with message, title and user config.
     * */
    warning(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows primary toast with message, title and user config.
     * */
    primary(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows danger toast with message, title and user config.
     * */
    danger(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows default toast with message, title and user config.
     * */
    default(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
}
