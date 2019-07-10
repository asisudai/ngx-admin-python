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
import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { NbComponentPortal, NbOverlayService, NbPositionBuilderService, NbPositionHelper, patch, } from '../cdk';
import { NbToastrContainerComponent } from './toastr-container.component';
import { NB_TOASTR_CONFIG, NbToastrConfig } from './toastr-config';
import { NbToastStatus } from './model';
var NbToastRef = /** @class */ (function () {
    function NbToastRef(toastContainer, toast) {
        this.toastContainer = toastContainer;
        this.toast = toast;
    }
    NbToastRef.prototype.close = function () {
        this.toastContainer.destroy(this.toast);
    };
    return NbToastRef;
}());
export { NbToastRef };
var NbToastContainer = /** @class */ (function () {
    function NbToastContainer(position, containerRef, positionHelper) {
        this.position = position;
        this.containerRef = containerRef;
        this.positionHelper = positionHelper;
        this.toasts = [];
    }
    NbToastContainer.prototype.attach = function (toast) {
        if (toast.config.preventDuplicates && this.isDuplicate(toast)) {
            return;
        }
        var toastComponent = this.attachToast(toast);
        if (toast.config.destroyByClick) {
            this.subscribeOnClick(toastComponent, toast);
        }
        if (toast.config.duration) {
            this.setDestroyTimeout(toast);
        }
        this.prevToast = toast;
        return new NbToastRef(this, toast);
    };
    NbToastContainer.prototype.destroy = function (toast) {
        this.toasts = this.toasts.filter(function (t) { return t !== toast; });
        this.updateContainer();
    };
    NbToastContainer.prototype.isDuplicate = function (toast) {
        return this.prevToast
            && this.prevToast.message === toast.message
            && this.prevToast.title === toast.title;
    };
    NbToastContainer.prototype.attachToast = function (toast) {
        if (this.positionHelper.isTopPosition(toast.config.position)) {
            return this.attachToTop(toast);
        }
        else {
            return this.attachToBottom(toast);
        }
    };
    NbToastContainer.prototype.attachToTop = function (toast) {
        this.toasts.unshift(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.first;
    };
    NbToastContainer.prototype.attachToBottom = function (toast) {
        this.toasts.push(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.last;
    };
    NbToastContainer.prototype.setDestroyTimeout = function (toast) {
        var _this = this;
        setTimeout(function () { return _this.destroy(toast); }, toast.config.duration);
    };
    NbToastContainer.prototype.subscribeOnClick = function (toastComponent, toast) {
        var _this = this;
        toastComponent.destroy.subscribe(function () { return _this.destroy(toast); });
    };
    NbToastContainer.prototype.updateContainer = function () {
        patch(this.containerRef, { content: this.toasts, position: this.position });
    };
    return NbToastContainer;
}());
export { NbToastContainer };
var NbToastrContainerRegistry = /** @class */ (function () {
    function NbToastrContainerRegistry(overlay, positionBuilder, positionHelper, cfr) {
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.positionHelper = positionHelper;
        this.cfr = cfr;
        this.overlays = new Map();
    }
    NbToastrContainerRegistry.prototype.get = function (position) {
        var logicalPosition = this.positionHelper.toLogicalPosition(position);
        if (!this.overlays.has(logicalPosition)) {
            this.instantiateContainer(logicalPosition);
        }
        return this.overlays.get(logicalPosition);
    };
    NbToastrContainerRegistry.prototype.instantiateContainer = function (position) {
        var container = this.createContainer(position);
        this.overlays.set(position, container);
    };
    NbToastrContainerRegistry.prototype.createContainer = function (position) {
        var positionStrategy = this.positionBuilder.global().position(position);
        var ref = this.overlay.create({ positionStrategy: positionStrategy });
        var containerRef = ref.attach(new NbComponentPortal(NbToastrContainerComponent, null, null, this.cfr));
        return new NbToastContainer(position, containerRef, this.positionHelper);
    };
    NbToastrContainerRegistry = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NbOverlayService,
            NbPositionBuilderService,
            NbPositionHelper,
            ComponentFactoryResolver])
    ], NbToastrContainerRegistry);
    return NbToastrContainerRegistry;
}());
export { NbToastrContainerRegistry };
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
var NbToastrService = /** @class */ (function () {
    function NbToastrService(globalConfig, containerRegistry) {
        this.globalConfig = globalConfig;
        this.containerRegistry = containerRegistry;
    }
    /**
     * Shows toast with message, title and user config.
     * */
    NbToastrService.prototype.show = function (message, title, userConfig) {
        var config = new NbToastrConfig(__assign({}, this.globalConfig, userConfig));
        var container = this.containerRegistry.get(config.position);
        var toast = { message: message, title: title, config: config };
        return container.attach(toast);
    };
    /**
     * Shows success toast with message, title and user config.
     * */
    NbToastrService.prototype.success = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: NbToastStatus.SUCCESS }));
    };
    /**
     * Shows info toast with message, title and user config.
     * */
    NbToastrService.prototype.info = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: NbToastStatus.INFO }));
    };
    /**
     * Shows warning toast with message, title and user config.
     * */
    NbToastrService.prototype.warning = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: NbToastStatus.WARNING }));
    };
    /**
     * Shows primary toast with message, title and user config.
     * */
    NbToastrService.prototype.primary = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: NbToastStatus.PRIMARY }));
    };
    /**
     * Shows danger toast with message, title and user config.
     * */
    NbToastrService.prototype.danger = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: NbToastStatus.DANGER }));
    };
    /**
     * Shows default toast with message, title and user config.
     * */
    NbToastrService.prototype.default = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: NbToastStatus.DEFAULT }));
    };
    NbToastrService = __decorate([
        Injectable(),
        __param(0, Inject(NB_TOASTR_CONFIG)),
        __metadata("design:paramtypes", [NbToastrConfig,
            NbToastrContainerRegistry])
    ], NbToastrService);
    return NbToastrService;
}());
export { NbToastrService };
//# sourceMappingURL=toastr.service.js.map