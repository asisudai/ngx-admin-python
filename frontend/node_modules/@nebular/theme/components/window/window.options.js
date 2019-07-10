import { InjectionToken } from '@angular/core';
export var NbWindowState;
(function (NbWindowState) {
    NbWindowState["MINIMIZED"] = "minimized";
    NbWindowState["MAXIMIZED"] = "maximized";
    NbWindowState["FULL_SCREEN"] = "full-screen";
})(NbWindowState || (NbWindowState = {}));
/**
 * Window configuration options.
 */
var NbWindowConfig = /** @class */ (function () {
    function NbWindowConfig() {
        var configs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            configs[_i] = arguments[_i];
        }
        /**
         * Window title.
         */
        this.title = '';
        /**
         * Initial window state. Full screen by default.
         */
        this.initialState = NbWindowState.FULL_SCREEN;
        /**
         * If true than backdrop will be rendered behind window.
         * By default set to true.
         */
        this.hasBackdrop = true;
        /**
         * If set to true mouse clicks on backdrop will close a window.
         * Default is true.
         */
        this.closeOnBackdropClick = true;
        /**
         * If true then escape press will close a window.
         * Default is true.
         */
        this.closeOnEsc = true;
        /**
         * Class to be applied to the window.
         */
        this.windowClass = '';
        /**
         * Both, template and component may receive data through `config.context` property.
         * For components, this data will be set as component properties.
         * For templates, you can access it inside template as $implicit.
         */
        this.context = {};
        /**
         * Where the attached component should live in Angular's *logical* component tree.
         * This affects what is available for injection and the change detection order for the
         * component instantiated inside of the window. This does not affect where the window
         * content will be rendered.
         */
        this.viewContainerRef = null;
        Object.assign.apply(Object, [this].concat(configs));
    }
    return NbWindowConfig;
}());
export { NbWindowConfig };
export var NB_WINDOW_CONTENT = new InjectionToken('Nebular Window Content');
export var NB_WINDOW_CONFIG = new InjectionToken('Nebular Window Config');
export var NB_WINDOW_CONTEXT = new InjectionToken('Nebular Window Context');
//# sourceMappingURL=window.options.js.map