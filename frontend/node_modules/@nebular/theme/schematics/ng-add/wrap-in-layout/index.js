"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular-devkit/core");
var util_1 = require("../../util");
var layout_content_1 = require("./layout-content");
/**
 * Wraps `AppComponent` in `NbLayoutComponent`. It's required for correct
 * work of Nebular components.
 * */
function wrapRootComponentInLayout(options) {
    return function (tree) {
        var componentPath = util_1.getAppComponentPath(tree, options.project);
        var templateDescriptor = util_1.getComponentTemplateDescriptor(tree, componentPath);
        if (templateDescriptor.isInline()) {
            wrapInlineTemplate(tree, templateDescriptor);
        }
        else {
            wrapHtmlFileTemplate(tree, templateDescriptor);
        }
        return tree;
    };
}
exports.wrapRootComponentInLayout = wrapRootComponentInLayout;
function wrapInlineTemplate(tree, templateDescriptor) {
    var templateProp = templateDescriptor.templateProp, componentPath = templateDescriptor.componentPath, template = templateDescriptor.template;
    var wrappedTemplate = layout_content_1.wrapInlineTemplateInLayout(template);
    var recorder = tree.beginUpdate(componentPath)
        .remove(templateProp.initializer.pos, template.length)
        .insertLeft(templateProp.initializer.pos, wrappedTemplate);
    tree.commitUpdate(recorder);
}
function wrapHtmlFileTemplate(tree, templateDescriptor) {
    var templateUrlProp = templateDescriptor.templateUrlProp, componentPath = templateDescriptor.componentPath, template = templateDescriptor.template;
    var templateUrl = templateUrlProp.initializer.text;
    var dir = core_1.dirname(core_1.normalize(componentPath));
    var templatePath = core_1.join(dir, templateUrl);
    util_1.writeText(tree, templatePath, layout_content_1.wrapHtmlFileTemplateInLayout(template));
}
//# sourceMappingURL=index.js.map