var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { ApplicationRef, ComponentFactoryResolver, Directive, Inject, Injectable, Injector, NgModule, NgZone, } from '@angular/core';
import { CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortalOutlet, PortalInjector, PortalModule, TemplatePortal, } from '@angular/cdk/portal';
import { FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayPositionBuilder, OverlayRef, ScrollStrategyOptions, } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { Directionality } from '@angular/cdk/bidi';
import { NB_DOCUMENT } from '../../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var NbPortalDirective = /** @class */ (function (_super) {
    __extends(NbPortalDirective, _super);
    function NbPortalDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPortalDirective = __decorate([
        Directive({ selector: '[nbPortal]' })
    ], NbPortalDirective);
    return NbPortalDirective;
}(CdkPortal));
export { NbPortalDirective };
var NbPortalOutletDirective = /** @class */ (function (_super) {
    __extends(NbPortalOutletDirective, _super);
    function NbPortalOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPortalOutletDirective = __decorate([
        Directive({ selector: '[nbPortalOutlet]' })
    ], NbPortalOutletDirective);
    return NbPortalOutletDirective;
}(CdkPortalOutlet));
export { NbPortalOutletDirective };
var NbComponentPortal = /** @class */ (function (_super) {
    __extends(NbComponentPortal, _super);
    function NbComponentPortal(component, vcr, injector, cfr) {
        var _this = _super.call(this, component, vcr, injector) || this;
        _this.cfr = cfr;
        return _this;
    }
    return NbComponentPortal;
}(ComponentPortal));
export { NbComponentPortal };
/**
 * TODO remove after @angular/cdk@7.0.0 relased
 * */
var NbDomPortalOutlet = /** @class */ (function (_super) {
    __extends(NbDomPortalOutlet, _super);
    function NbDomPortalOutlet(
    /** Element into which the content is projected. */
    outletElement, componentFactoryResolver, appRef, defaultInjector) {
        var _this = _super.call(this, outletElement, componentFactoryResolver, appRef, defaultInjector) || this;
        _this.outletElement = outletElement;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.appRef = appRef;
        _this.defaultInjector = defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    NbDomPortalOutlet.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        var resolver = portal.cfr || this.componentFactoryResolver;
        var componentFactory = resolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this.defaultInjector);
            this.appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this.appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this.getComponentRootNode(componentRef));
        return componentRef;
    };
    /** Gets the root HTMLElement for an instantiated component. */
    NbDomPortalOutlet.prototype.getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return NbDomPortalOutlet;
}(DomPortalOutlet));
export { NbDomPortalOutlet };
var NbOverlay = /** @class */ (function (_super) {
    __extends(NbOverlay, _super);
    function NbOverlay(
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies, overlayContainer, componentFactoryResolver, positionBuilder, keyboardDispatcher, injector, ngZone, document, directionality) {
        var _this = _super.call(this, scrollStrategies, overlayContainer, componentFactoryResolver, positionBuilder, keyboardDispatcher, injector, ngZone, document, directionality) || this;
        _this.scrollStrategies = scrollStrategies;
        _this.overlayContainer = overlayContainer;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.positionBuilder = positionBuilder;
        _this.keyboardDispatcher = keyboardDispatcher;
        _this.injector = injector;
        _this.ngZone = ngZone;
        _this.document = document;
        _this.directionality = directionality;
        return _this;
    }
    NbOverlay_1 = NbOverlay;
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    NbOverlay.prototype.create = function (config) {
        var host = this.createHostElement();
        var pane = this.createPaneElement(host);
        var portalOutlet = this.createPortalOutlet(pane);
        var overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this.directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this.ngZone, this.keyboardDispatcher, this.document);
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    NbOverlay.prototype.createPaneElement = function (host) {
        var pane = this.document.createElement('div');
        pane.id = "cdk-overlay-" + NbOverlay_1.nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    };
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @returns Newly-create host element.
     */
    NbOverlay.prototype.createHostElement = function () {
        var host = this.document.createElement('div');
        this.overlayContainer.getContainerElement().appendChild(host);
        return host;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal outlet.
     * @returns A portal outlet for the given DOM element.
     */
    NbOverlay.prototype.createPortalOutlet = function (pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this.appRef) {
            this.appRef = this.injector.get(ApplicationRef);
        }
        return new NbDomPortalOutlet(pane, this.componentFactoryResolver, this.appRef, this.injector);
    };
    var NbOverlay_1;
    NbOverlay.nextUniqueId = 0;
    NbOverlay = NbOverlay_1 = __decorate([
        Injectable(),
        __param(7, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [ScrollStrategyOptions,
            OverlayContainer,
            ComponentFactoryResolver,
            OverlayPositionBuilder,
            OverlayKeyboardDispatcher,
            Injector,
            NgZone, Object, Directionality])
    ], NbOverlay);
    return NbOverlay;
}(Overlay));
export { NbOverlay };
var NbPlatform = /** @class */ (function (_super) {
    __extends(NbPlatform, _super);
    function NbPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPlatform = __decorate([
        Injectable()
    ], NbPlatform);
    return NbPlatform;
}(Platform));
export { NbPlatform };
var NbOverlayPositionBuilder = /** @class */ (function (_super) {
    __extends(NbOverlayPositionBuilder, _super);
    function NbOverlayPositionBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayPositionBuilder = __decorate([
        Injectable()
    ], NbOverlayPositionBuilder);
    return NbOverlayPositionBuilder;
}(OverlayPositionBuilder));
export { NbOverlayPositionBuilder };
var NbTemplatePortal = /** @class */ (function (_super) {
    __extends(NbTemplatePortal, _super);
    function NbTemplatePortal(template, viewContainerRef, context) {
        return _super.call(this, template, viewContainerRef, context) || this;
    }
    return NbTemplatePortal;
}(TemplatePortal));
export { NbTemplatePortal };
var NbOverlayContainer = /** @class */ (function (_super) {
    __extends(NbOverlayContainer, _super);
    function NbOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayContainer.ngInjectableDef = i0.defineInjectable({ factory: function NbOverlayContainer_Factory() { return new NbOverlayContainer(i0.inject(i1.DOCUMENT)); }, token: NbOverlayContainer, providedIn: "root" });
    return NbOverlayContainer;
}(OverlayContainer));
export { NbOverlayContainer };
var NbFlexibleConnectedPositionStrategy = /** @class */ (function (_super) {
    __extends(NbFlexibleConnectedPositionStrategy, _super);
    function NbFlexibleConnectedPositionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbFlexibleConnectedPositionStrategy;
}(FlexibleConnectedPositionStrategy));
export { NbFlexibleConnectedPositionStrategy };
var NbPortalInjector = /** @class */ (function (_super) {
    __extends(NbPortalInjector, _super);
    function NbPortalInjector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbPortalInjector;
}(PortalInjector));
export { NbPortalInjector };
var CDK_MODULES = [OverlayModule, PortalModule];
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
var NbCdkMappingModule = /** @class */ (function () {
    function NbCdkMappingModule() {
    }
    NbCdkMappingModule_1 = NbCdkMappingModule;
    NbCdkMappingModule.forRoot = function () {
        return {
            ngModule: NbCdkMappingModule_1,
            providers: [
                NbOverlay,
                NbPlatform,
                NbOverlayPositionBuilder,
            ],
        };
    };
    var NbCdkMappingModule_1;
    NbCdkMappingModule = NbCdkMappingModule_1 = __decorate([
        NgModule({
            imports: CDK_MODULES.slice(),
            exports: CDK_MODULES.concat([
                NbPortalDirective,
                NbPortalOutletDirective,
            ]),
            declarations: [NbPortalDirective, NbPortalOutletDirective],
        })
    ], NbCdkMappingModule);
    return NbCdkMappingModule;
}());
export { NbCdkMappingModule };
//# sourceMappingURL=mapping.js.map