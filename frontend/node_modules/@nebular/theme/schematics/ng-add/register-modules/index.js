"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var schematics_2 = require("@angular/cdk/schematics");
var core_1 = require("@angular-devkit/core");
var terminal_1 = require("@angular-devkit/core/src/terminal");
var util_1 = require("../../util");
var app_routing_module_content_1 = require("./app-routing-module-content");
function registerModules(options) {
    return schematics_1.chain([
        registerAnimationsModule(options),
        registerNebularModules(options),
        registerRouterIfNeeded(options),
    ]);
}
exports.registerModules = registerModules;
function registerAnimationsModule(options) {
    return function (tree, context) {
        var project = util_1.getProject(tree, options.project);
        var appModulePath = util_1.getAppModulePath(tree, schematics_2.getProjectMainFile(project));
        var browserAnimationsModuleName = 'BrowserAnimationsModule';
        var noopAnimationsModuleName = 'NoopAnimationsModule';
        var animationsPackage = '@angular/platform-browser/animations';
        if (options.animations) {
            // In case the project explicitly uses the NoopAnimationsModule, we should print a warning
            // message that makes the user aware of the fact that we won't automatically set up
            // animations. If we would add the BrowserAnimationsModule while the NoopAnimationsModule
            // is already configured, we would cause unexpected behavior and runtime exceptions.
            if (schematics_2.hasNgModuleImport(tree, appModulePath, noopAnimationsModuleName)) {
                return context.logger.warn(terminal_1.red("Could not set up \"" + terminal_1.bold(browserAnimationsModuleName) + "\" " +
                    ("because \"" + terminal_1.bold(noopAnimationsModuleName) + "\" is already imported. Please manually ") +
                    "set up browser animations."));
            }
            schematics_2.addModuleImportToRootModule(tree, browserAnimationsModuleName, animationsPackage, project);
        }
        else if (!schematics_2.hasNgModuleImport(tree, appModulePath, browserAnimationsModuleName)) {
            // Do not add the NoopAnimationsModule module if the project already explicitly uses
            // the BrowserAnimationsModule.
            schematics_2.addModuleImportToRootModule(tree, noopAnimationsModuleName, animationsPackage, project);
        }
    };
}
function registerNebularModules(options) {
    return function (tree) {
        var project = util_1.getProject(tree, options.project);
        var nebularThemeModule = "NbThemeModule.forRoot({ name: '" + options.theme + "' })";
        schematics_2.addModuleImportToRootModule(tree, nebularThemeModule, '@nebular/theme', project);
        schematics_2.addModuleImportToRootModule(tree, 'NbLayoutModule', '@nebular/theme', project);
    };
}
/**
 * Creates `AppRoutingModule` if no either `RouterModule` or `AppRoutingModule` already imported
 * in the `AppModule`.
 * */
function registerRouterIfNeeded(options) {
    return function (tree) {
        var project = util_1.getProject(tree, options.project);
        if (shouldRegisterRouter(tree, project)) {
            registerRoutingModule(tree, options.project);
        }
        return tree;
    };
}
/**
 * Checks if `RouterModule` or `AppRoutingModule` already imported in the `AppModule`.
 * */
function shouldRegisterRouter(tree, project) {
    var appRoutingModuleAlreadyImported = util_1.isImportedInMainModule(tree, project, 'AppRoutingModule', './app-routing.module');
    var routerModuleAlreadyImported = util_1.isImportedInMainModule(tree, project, 'RouterModule', '@angular/router');
    return !(appRoutingModuleAlreadyImported || routerModuleAlreadyImported);
}
function registerRoutingModule(tree, projectName) {
    registerAppRoutingModule(tree, projectName);
    createAppRoutingModule(tree, projectName);
}
/**
 * We're just adding app-routing.module without any interpolations
 * and customization. So, I don't think we have to use schematics
 * template files.
 * */
function createAppRoutingModule(tree, projectName) {
    var project = util_1.getProject(tree, projectName);
    var appRoutingModulePath = core_1.normalize(project.sourceRoot + "/app/app-routing.module.ts");
    tree.create(appRoutingModulePath, app_routing_module_content_1.appRoutingModuleContent);
}
function registerAppRoutingModule(tree, projectName) {
    var project = util_1.getProject(tree, projectName);
    schematics_2.addModuleImportToRootModule(tree, 'AppRoutingModule', './app-routing.module', project);
}
//# sourceMappingURL=index.js.map