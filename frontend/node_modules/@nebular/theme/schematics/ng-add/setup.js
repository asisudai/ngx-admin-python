"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var register_modules_1 = require("./register-modules");
var register_theme_1 = require("./register-theme");
var wrap_in_layout_1 = require("./wrap-in-layout");
/**
 * Setting up Nebular for the specified project by registering required modules,
 * adding Nebular themes and wrapping root component in the Nebular Layout.
 * */
function default_1(options) {
    return schematics_1.chain([
        register_modules_1.registerModules(options),
        options.customization ? register_theme_1.registerCustomizableTheme(options) : register_theme_1.registerPrebuiltTheme(options),
        options.layout ? wrap_in_layout_1.wrapRootComponentInLayout(options) : schematics_1.noop(),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=setup.js.map