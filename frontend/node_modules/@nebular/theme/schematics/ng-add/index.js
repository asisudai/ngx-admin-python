"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tasks_1 = require("@angular-devkit/schematics/tasks");
/**
 * This utils has to imported directly from the `/util/package`, not from the `/util/`.
 * Other utilities use `@angular/sdk/schematics` and `@schematics/angular` packages.
 * But these packages are not installed in this step.
 * */
var package_1 = require("../util/package");
/**
 * ng-add schematics, installs peer dependencies and runs project setup schematics.
 * */
function default_1(options) {
    return function (host, context) {
        registerPeerDependencies(host);
        runSetupSchematics(context, options);
    };
}
exports.default = default_1;
/**
 * Add required peer dependencies in package.json if needed.
 * */
function registerPeerDependencies(host) {
    var angularCoreVersion = package_1.getDependencyVersionFromPackageJson(host, '@angular/core');
    var nebularThemeVersion = package_1.getNebularVersion();
    var nebularIconsVersion = package_1.getNebularPeerDependencyVersionFromPackageJson('nebular-icons');
    package_1.addDependencyToPackageJson(host, '@angular/cdk', angularCoreVersion);
    package_1.addDependencyToPackageJson(host, '@angular/animations', angularCoreVersion);
    package_1.addDependencyToPackageJson(host, '@nebular/theme', nebularThemeVersion);
    package_1.addDependencyToPackageJson(host, 'nebular-icons', nebularIconsVersion);
    package_1.addDevDependencyToPackageJson(host, '@schematics/angular', angularCoreVersion);
}
/**
 * Runs `npm install` and after complete runs `setup` schematics.
 * The rest part of the ng-add schematics uses `@angular/cdk/schematics` and `@schematics/angular`
 * utilities. That's why we have to install `@angular/cdk` and `@schematics/angular` package
 * before running Nebular setup in the project.
 *
 * The only possibility to run `setup` schematics after required packages installed
 * is to use context tasks and add `npm install` task as the dependency to `setup` schematics task.
 * */
function runSetupSchematics(context, options) {
    var installTaskId = context.addTask(new tasks_1.NodePackageInstallTask());
    context.addTask(new tasks_1.RunSchematicTask('setup', options), [installTaskId]);
}
//# sourceMappingURL=index.js.map