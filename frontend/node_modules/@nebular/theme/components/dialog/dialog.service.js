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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ComponentFactoryResolver, Inject, Injectable, Injector, TemplateRef } from '@angular/core';
import { fromEvent as observableFromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NbComponentPortal, NbOverlayService, NbPortalInjector, NbPositionBuilderService, NbTemplatePortal, } from '../cdk';
import { NB_DOCUMENT } from '../../theme.options';
import { NB_DIALOG_CONFIG, NbDialogConfig } from './dialog-config';
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
var NbDialogService = /** @class */ (function () {
    function NbDialogService(document, globalConfig, positionBuilder, overlay, injector, cfr) {
        this.document = document;
        this.globalConfig = globalConfig;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.injector = injector;
        this.cfr = cfr;
    }
    /**
     * Opens new instance of the dialog, may receive optional config.
     * */
    NbDialogService.prototype.open = function (content, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        var config = new NbDialogConfig(__assign({}, this.globalConfig, userConfig));
        var overlayRef = this.createOverlay(config);
        var dialogRef = new NbDialogRef(overlayRef);
        var container = this.createContainer(config, overlayRef);
        this.createContent(config, content, container, dialogRef);
        this.registerCloseListeners(config, overlayRef, dialogRef);
        return dialogRef;
    };
    NbDialogService.prototype.createOverlay = function (config) {
        var positionStrategy = this.createPositionStrategy();
        var scrollStrategy = this.createScrollStrategy(config.hasScroll);
        return this.overlay.create({
            positionStrategy: positionStrategy,
            scrollStrategy: scrollStrategy,
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
        });
    };
    NbDialogService.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .global()
            .centerVertically()
            .centerHorizontally();
    };
    NbDialogService.prototype.createScrollStrategy = function (hasScroll) {
        if (hasScroll) {
            return this.overlay.scrollStrategies.noop();
        }
        else {
            return this.overlay.scrollStrategies.block();
        }
    };
    NbDialogService.prototype.createContainer = function (config, overlayRef) {
        var injector = new NbPortalInjector(this.createInjector(config), new WeakMap([[NbDialogConfig, config]]));
        var containerPortal = new NbComponentPortal(NbDialogContainerComponent, null, injector, this.cfr);
        var containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    };
    NbDialogService.prototype.createContent = function (config, content, container, dialogRef) {
        if (content instanceof TemplateRef) {
            var portal = this.createTemplatePortal(config, content, dialogRef);
            container.attachTemplatePortal(portal);
        }
        else {
            var portal = this.createComponentPortal(config, content, dialogRef);
            dialogRef.componentRef = container.attachComponentPortal(portal);
            if (config.context) {
                Object.assign(dialogRef.componentRef.instance, __assign({}, config.context));
            }
        }
    };
    NbDialogService.prototype.createTemplatePortal = function (config, content, dialogRef) {
        return new NbTemplatePortal(content, null, { $implicit: config.context, dialogRef: dialogRef });
    };
    /**
     * We're creating portal with custom injector provided through config or using global injector.
     * This approach provides us capability inject `NbDialogRef` in dialog component.
     * */
    NbDialogService.prototype.createComponentPortal = function (config, content, dialogRef) {
        var injector = this.createInjector(config);
        var portalInjector = new NbPortalInjector(injector, new WeakMap([[NbDialogRef, dialogRef]]));
        return new NbComponentPortal(content, config.viewContainerRef, portalInjector);
    };
    NbDialogService.prototype.createInjector = function (config) {
        return config.viewContainerRef && config.viewContainerRef.injector || this.injector;
    };
    NbDialogService.prototype.registerCloseListeners = function (config, overlayRef, dialogRef) {
        if (config.closeOnBackdropClick) {
            overlayRef.backdropClick().subscribe(function () { return dialogRef.close(); });
        }
        if (config.closeOnEsc) {
            observableFromEvent(this.document, 'keyup')
                .pipe(filter(function (event) { return event.keyCode === 27; }))
                .subscribe(function () { return dialogRef.close(); });
        }
    };
    NbDialogService = __decorate([
        Injectable(),
        __param(0, Inject(NB_DOCUMENT)),
        __param(1, Inject(NB_DIALOG_CONFIG)),
        __metadata("design:paramtypes", [Object, Object, NbPositionBuilderService,
            NbOverlayService,
            Injector,
            ComponentFactoryResolver])
    ], NbDialogService);
    return NbDialogService;
}());
export { NbDialogService };
//# sourceMappingURL=dialog.service.js.map