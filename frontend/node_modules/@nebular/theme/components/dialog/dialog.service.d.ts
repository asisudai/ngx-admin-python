/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver, Injector, TemplateRef, Type } from '@angular/core';
import { NbComponentPortal, NbGlobalPositionStrategy, NbOverlayRef, NbOverlayService, NbPositionBuilderService, NbScrollStrategy, NbTemplatePortal } from '../cdk';
import { NbDialogConfig } from './dialog-config';
import { NbDialogRef } from './dialog-ref';
import { NbDialogContainerComponent } from './dialog-container';
/**
 * The `NbDialogService` helps to open dialogs.
 *
 * @stacked-example(Showcase, dialog/dialog-showcase.component)
 *
 * A new dialog is opened by calling the `open` method with a component to be loaded and an optional configuration.
 * `open` method will return `NbDialogRef` that can be used for the further manipulations.
 *
 * ### Installation
 *
 * Import `NbDialogModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbDialogModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install it with `NbDialogModule.forChild()`:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbDialogModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * ```ts
 * const dialogRef = this.dialogService.open(MyDialogComponent, { ... });
 * ```
 *
 * `NbDialogRef` gives capability access reference to the rendered dialog component,
 * destroy dialog and some other options described below.
 *
 * Also, you can inject `NbDialogRef` in dialog component.
 *
 * ```ts
 * this.dialogService.open(MyDialogComponent, { ... });
 *
 * // my-dialog.component.ts
 * constructor(protected dialogRef: NbDialogRef) {
 * }
 *
 * close() {
 *   this.dialogRef.close();
 * }
 * ```
 *
 * Instead of component you can create dialog from TemplateRef:
 *
 * @stacked-example(Template ref, dialog/dialog-template.component)
 *
 * The dialog may return result through `NbDialogRef`. Calling component can receive this result with `onClose`
 * stream of `NbDialogRef`.
 *
 * @stacked-example(Result, dialog/dialog-result.component)
 *
 * ### Configuration
 *
 * As we mentioned above, `open` method of the `NbDialogService` may receive optional configuration options.
 * Also, you can provide global dialogs configuration through `NbDialogModule.forRoot({ ... })`.
 *
 * This config may contain the following:
 *
 * `context` - both, template and component may receive data through `config.context` property.
 * For components, this data will be assigned through inputs.
 * For templates, you can access it inside template as $implicit.
 *
 * ```ts
 * this.dialogService.open(template, { context: 'pass data in template' });
 * ```
 *
 * ```html
 * <ng-template let-some-additional-data>
 *   {{ some-additional-data }}
 * <ng-template/>
 * ```
 *
 * `hasBackdrop` - determines is service have to render backdrop under the dialog.
 * Default is true.
 * @stacked-example(Backdrop, dialog/dialog-has-backdrop.component)
 *
 * `closeOnBackdropClick` - close dialog on backdrop click if true.
 * Default is true.
 * @stacked-example(Backdrop click, dialog/dialog-backdrop-click.component)
 *
 * `closeOnEsc` - close dialog on escape button on the keyboard.
 * Default is true.
 * @stacked-example(Escape hit, dialog/dialog-esc.component)
 *
 * `hasScroll` - Disables scroll on content under dialog if true and does nothing otherwise.
 * Default is false.
 * Please, open dialogs in the separate window and try to scroll.
 * @stacked-example(Scroll, dialog/dialog-scroll.component)
 *
 * `autoFocus` - Focuses dialog automatically after open if true. It's useful to prevent misclicks on
 * trigger elements and opening multiple dialogs.
 * Default is true.
 *
 * As you can see, if you open dialog with auto focus dialog will focus first focusable element
 * or just blur previously focused automatically.
 * Otherwise, without auto focus, the focus will stay on the previously focused element.
 * Please, open dialogs in the separate window and try to click on the button without focus
 * and then hit space any times. Multiple same dialogs will be opened.
 * @stacked-example(Auto focus, dialog/dialog-auto-focus.component)
 * */
export declare class NbDialogService {
    protected document: any;
    protected globalConfig: any;
    protected positionBuilder: NbPositionBuilderService;
    protected overlay: NbOverlayService;
    protected injector: Injector;
    protected cfr: ComponentFactoryResolver;
    constructor(document: any, globalConfig: any, positionBuilder: NbPositionBuilderService, overlay: NbOverlayService, injector: Injector, cfr: ComponentFactoryResolver);
    /**
     * Opens new instance of the dialog, may receive optional config.
     * */
    open<T>(content: Type<T> | TemplateRef<T>, userConfig?: Partial<NbDialogConfig<T>>): NbDialogRef<T>;
    protected createOverlay(config: NbDialogConfig): NbOverlayRef;
    protected createPositionStrategy(): NbGlobalPositionStrategy;
    protected createScrollStrategy(hasScroll: boolean): NbScrollStrategy;
    protected createContainer(config: NbDialogConfig, overlayRef: NbOverlayRef): NbDialogContainerComponent;
    protected createContent<T>(config: NbDialogConfig, content: Type<T> | TemplateRef<T>, container: NbDialogContainerComponent, dialogRef: NbDialogRef<T>): void;
    protected createTemplatePortal<T>(config: NbDialogConfig, content: TemplateRef<T>, dialogRef: NbDialogRef<T>): NbTemplatePortal;
    /**
     * We're creating portal with custom injector provided through config or using global injector.
     * This approach provides us capability inject `NbDialogRef` in dialog component.
     * */
    protected createComponentPortal<T>(config: NbDialogConfig, content: Type<T>, dialogRef: NbDialogRef<T>): NbComponentPortal;
    protected createInjector(config: NbDialogConfig): Injector;
    protected registerCloseListeners<T>(config: NbDialogConfig, overlayRef: NbOverlayRef, dialogRef: NbDialogRef<T>): void;
}
