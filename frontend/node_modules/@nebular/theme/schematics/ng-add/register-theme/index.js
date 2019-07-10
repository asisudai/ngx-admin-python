"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular/cdk/schematics");
var schematics_2 = require("@angular-devkit/schematics");
var config_1 = require("@schematics/angular/utility/config");
var core_1 = require("@angular-devkit/core");
var theme_content_1 = require("./theme-content");
var util_1 = require("../../util");
/**
 * Registers customizable scss theme in the specified project.
 * It creates `theme.scss` file which manages theme content and it's customization.
 * Also as importing `theme.scss` in the styles.scss file and installing the theme globally.
 * If the project uses *.css files it'll throw the error. Because we can't use scss themes
 * in the css Angular project.
 * */
function registerCustomizableTheme(options) {
    return function (tree) {
        var project = util_1.getProject(tree, options.project);
        var stylesPath = schematics_1.getProjectStyleFile(project, 'scss');
        if (!tree.exists(stylesPath)) {
            throwSCSSRequiredForCustomizableThemes();
        }
        createThemeSCSS(tree, options.theme, project.sourceRoot);
        insertThemeImportInStyles(tree, stylesPath);
        return tree;
    };
}
exports.registerCustomizableTheme = registerCustomizableTheme;
/**
 * Registers prebuilt css themes by inserting them in the angular.json styles.
 * */
function registerPrebuiltTheme(options) {
    return function (tree) {
        var workspace = config_1.getWorkspace(tree);
        var project = schematics_1.getProjectFromWorkspace(workspace, options.project);
        var themePath = "./node_modules/@nebular/theme/styles/prebuilt/" + options.theme + ".css";
        addStyleToTarget(project, 'build', tree, themePath, workspace);
        return tree;
    };
}
exports.registerPrebuiltTheme = registerPrebuiltTheme;
/**
 * Creates theme.scss with Nebular theme setup.
 * */
function createThemeSCSS(tree, theme, sourceRoot) {
    var themeContent = theme_content_1.createThemeContent(theme);
    var customThemePath = core_1.normalize(core_1.join(sourceRoot, 'themes.scss'));
    tree.create(customThemePath, themeContent);
}
/**
 * Updates styles.scss and insert theme.scss import.
 * */
function insertThemeImportInStyles(tree, stylesPath) {
    var recorder = tree.beginUpdate(stylesPath)
        .insertLeft(0, theme_content_1.stylesContent);
    tree.commitUpdate(recorder);
}
/**
 * Adds a style entry to the given project target.
 * */
function addStyleToTarget(project, targetName, tree, stylesPath, workspace) {
    var targetOptions = schematics_1.getProjectTargetOptions(project, targetName);
    if (!targetOptions.styles) {
        targetOptions.styles = [stylesPath];
    }
    else if (noNebularThemeIncluded(targetOptions, stylesPath)) {
        targetOptions.styles.unshift(stylesPath);
    }
    util_1.writeJSON(tree, 'angular.json', workspace);
}
/**
 * Validates no Nebular styles already included into the specified project.
 * */
function noNebularThemeIncluded(targetOptions, stylesPath) {
    var existingStyles = targetOptions.styles.map(function (s) { return typeof s === 'string' ? s : s.input; });
    var hasGivenTheme = existingStyles.find(function (s) { return s.includes(stylesPath); });
    var hasOtherTheme = existingStyles.find(function (s) { return s.includes('@nebular/theme/styles/prebuilt'); });
    return !hasGivenTheme && !hasOtherTheme;
}
function throwSCSSRequiredForCustomizableThemes() {
    throw new schematics_2.SchematicsException('No scss root found. Customizable theme requires scss to be enabled in the project.');
}
//# sourceMappingURL=index.js.map