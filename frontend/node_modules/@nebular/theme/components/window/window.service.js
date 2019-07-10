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
import { ComponentFactoryResolver, Inject, Injectable, Injector, TemplateRef, } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NbComponentPortal, NbOverlayPositionBuilder, NbOverlayService, } from '../cdk/overlay';
import { NbBlockScrollStrategyAdapter } from '../cdk/adapter/block-scroll-strategy-adapter';
import { NB_WINDOW_CONFIG, NB_WINDOW_CONTENT, NB_WINDOW_CONTEXT, NbWindowConfig, NbWindowState, } from './window.options';
import { NbWindowRef } from './window-ref';
import { NbWindowsContainerComponent } from './windows-container.component';
import { NbWindowComponent } from './window.component';
/**
 * The `NbWindowService` can be used to open windows.
 *
 * @stacked-example(Showcase, window/window-showcase.component)
 *
 * ### Installation
 *
 * Import `NbWindowModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbWindowModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install `NbWindowModule.forChild`:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbWindowModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * A new window can be opened by calling the `open` method with a component or template to be loaded
 * and an optional configuration.
 * `open` method will return `NbWindowRef` that can be used for the further manipulations.
 *
 * ```ts
 * const windowRef = this.windowService.open(MyComponent, { ... });
 * ```
 *
 * `NbWindowRef` gives you ability manipulate opened window.
 * Also, you can inject `NbWindowRef` inside provided component which rendered in window.
 *
 * ```ts
 * this.windowService.open(MyWindowComponent, { ... });
 *
 * // my.component.ts
 * constructor(protected windowRef: NbWindowRef) {
 * }
 *
 * minimize() {
 *   this.windowRef.minimize();
 * }
 *
 * close() {
 *   this.windowRef.close();
 * }
 * ```
 *
 * Instead of component you can create window from TemplateRef. As usual you can access context provided via config
 * via `let-` variables. Also you can get reference to the `NbWindowRef` in context's `windowRef` property.
 *
 * @stacked-example(Window content from TemplateRef, window/template-window.component)
 *
 * ### Configuration
 *
 * As mentioned above, `open` method of the `NbWindowService` may receive optional configuration options.
 * Also, you can modify default windows configuration through `NbWindowModule.forRoot({ ... })`.
 * You can read about all available options on [API tab](docs/components/window/api#nbwindowconfig).
 *
 * @stacked-example(Configuration, window/windows-backdrop.component)
 */
var NbWindowService = /** @class */ (function () {
    function NbWindowService(componentFactoryResolver, overlayService, overlayPositionBuilder, blockScrollStrategy, defaultWindowsConfig, cfr) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.overlayService = overlayService;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.blockScrollStrategy = blockScrollStrategy;
        this.defaultWindowsConfig = defaultWindowsConfig;
        this.cfr = cfr;
        this.openWindows = [];
    }
    /**
     * Opens new window.
     * @param windowContent
     * @param windowConfig
     * */
    NbWindowService.prototype.open = function (windowContent, windowConfig) {
        if (windowConfig === void 0) { windowConfig = {}; }
        if (this.windowsContainerViewRef == null) {
            this.createWindowsContainer();
        }
        var config = new NbWindowConfig(this.defaultWindowsConfig, windowConfig);
        var windowRef = new NbWindowRef(config);
        windowRef.componentRef = this.appendWindow(windowContent, config, windowRef);
        this.openWindows.push(windowRef);
        this.subscribeToEvents(windowRef);
        return windowRef;
    };
    NbWindowService.prototype.createWindowsContainer = function () {
        this.overlayRef = this.overlayService.create({
            scrollStrategy: this.overlayService.scrollStrategies.noop(),
            positionStrategy: this.overlayPositionBuilder.global().bottom().right(),
            hasBackdrop: true,
        });
        var windowsContainerPortal = new NbComponentPortal(NbWindowsContainerComponent, null, null, this.cfr);
        var overlayRef = this.overlayRef.attach(windowsContainerPortal);
        this.windowsContainerViewRef = overlayRef.instance.viewContainerRef;
    };
    NbWindowService.prototype.appendWindow = function (content, config, windowRef) {
        var context = content instanceof TemplateRef
            ? { $implicit: config.context, windowRef: windowRef }
            : config.context;
        var providers = [
            { provide: NB_WINDOW_CONTENT, useValue: content },
            { provide: NB_WINDOW_CONTEXT, useValue: context },
            { provide: NbWindowConfig, useValue: config },
            { provide: NbWindowRef, useValue: windowRef },
        ];
        var parentInjector = config.viewContainerRef
            ? config.viewContainerRef.injector
            : this.windowsContainerViewRef.injector;
        var injector = Injector.create({ parent: parentInjector, providers: providers });
        var windowFactory = this.componentFactoryResolver.resolveComponentFactory(NbWindowComponent);
        var ref = this.windowsContainerViewRef.createComponent(windowFactory, null, injector);
        ref.instance.cfr = this.cfr;
        ref.changeDetectorRef.detectChanges();
        return ref;
    };
    NbWindowService.prototype.subscribeToEvents = function (windowRef) {
        var _this = this;
        if (windowRef.config.closeOnBackdropClick) {
            this.overlayRef.backdropClick().subscribe(function () { return windowRef.close(); });
        }
        if (windowRef.config.closeOnEsc) {
            this.overlayRef.keydownEvents()
                .pipe(filter(function (event) { return event.keyCode === 27; }))
                .subscribe(function () { return windowRef.close(); });
        }
        windowRef.stateChange.subscribe(function () { return _this.checkAndUpdateOverlay(); });
        windowRef.onClose.subscribe(function () {
            _this.openWindows.splice(_this.openWindows.indexOf(windowRef), 1);
            _this.checkAndUpdateOverlay();
        });
    };
    NbWindowService.prototype.checkAndUpdateOverlay = function () {
        var fullScreenWindows = this.openWindows.filter(function (w) { return w.state === NbWindowState.FULL_SCREEN; });
        if (fullScreenWindows.length > 0) {
            this.blockScrollStrategy.enable();
        }
        else {
            this.blockScrollStrategy.disable();
        }
        if (fullScreenWindows.some(function (w) { return w.config.hasBackdrop; })) {
            this.overlayRef.backdropElement.removeAttribute('hidden');
        }
        else {
            this.overlayRef.backdropElement.setAttribute('hidden', '');
        }
    };
    NbWindowService = __decorate([
        Injectable(),
        __param(4, Inject(NB_WINDOW_CONFIG)),
        __metadata("design:paramtypes", [ComponentFactoryResolver,
            NbOverlayService,
            NbOverlayPositionBuilder,
            NbBlockScrollStrategyAdapter,
            NbWindowConfig,
            ComponentFactoryResolver])
    ], NbWindowService);
    return NbWindowService;
}());
export { NbWindowService };
//# sourceMappingURL=window.service.js.map