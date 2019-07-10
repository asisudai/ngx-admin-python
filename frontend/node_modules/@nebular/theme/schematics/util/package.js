"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var file_1 = require("./file");
var packageJsonName = 'package.json';
function getNebularVersion() {
    return getNebularPackageJson().version;
}
exports.getNebularVersion = getNebularVersion;
/**
 * Gets the version of the specified Nebular peerDependency
 * */
function getNebularPeerDependencyVersionFromPackageJson(packageName) {
    var packageJson = getNebularPackageJson();
    if (noInfoAboutPeerDependency(packageJson, packageName)) {
        throwNoPackageInfoInPackageJson(packageName);
    }
    return packageJson.peerDependencies[packageName];
}
exports.getNebularPeerDependencyVersionFromPackageJson = getNebularPeerDependencyVersionFromPackageJson;
/**
 * Gets the version of the specified dependency by looking at the package.json in the specified tree
 * */
function getDependencyVersionFromPackageJson(tree, packageName) {
    if (!tree.exists(packageJsonName)) {
        throwNoPackageJsonError();
    }
    var packageJson = file_1.readJSON(tree, packageJsonName);
    if (noInfoAboutDependency(packageJson, packageName)) {
        throwNoPackageInfoInPackageJson(packageName);
    }
    return packageJson.dependencies[packageName];
}
exports.getDependencyVersionFromPackageJson = getDependencyVersionFromPackageJson;
function addDependencyToPackageJson(tree, packageName, packageVersion) {
    if (!tree.exists(packageJsonName)) {
        throwNoPackageJsonError();
    }
    var packageJson = file_1.readJSON(tree, packageJsonName);
    if (!packageJson.dependencies) {
        packageJson.dependencies = {};
    }
    if (!packageJson.dependencies[packageName]) {
        packageJson.dependencies[packageName] = packageVersion;
        packageJson.dependencies = sortObjectByKeys(packageJson.dependencies);
    }
    file_1.writeJSON(tree, packageJsonName, packageJson);
}
exports.addDependencyToPackageJson = addDependencyToPackageJson;
function addDevDependencyToPackageJson(tree, packageName, packageVersion) {
    if (!tree.exists(packageJsonName)) {
        throwNoPackageJsonError();
    }
    var packageJson = file_1.readJSON(tree, packageJsonName);
    if (!packageJson.devDependencies) {
        packageJson.devDependencies = {};
    }
    if (!packageJson.devDependencies[packageName]) {
        packageJson.devDependencies[packageName] = packageVersion;
        packageJson.devDependencies = sortObjectByKeys(packageJson.devDependencies);
    }
    file_1.writeJSON(tree, packageJsonName, packageJson);
}
exports.addDevDependencyToPackageJson = addDevDependencyToPackageJson;
function throwNoPackageJsonError() {
    throw new Error('No package.json found in the tree.');
}
function throwNoPackageInfoInPackageJson(packageName) {
    throw new Error("No info found in package.json for " + packageName);
}
/**
 * Validates packageJson has dependencies, also as specified dependency not exists.
 * */
function noInfoAboutDependency(packageJson, packageName) {
    return !dependencyAlreadyExists(packageJson, packageName);
}
/**
 * Validates packageJson has peerDependencies, also as specified peerDependency not exists.
 * */
function noInfoAboutPeerDependency(packageJson, packageName) {
    return !peerDependencyAlreadyExists(packageJson, packageName);
}
/**
 * Validates packageJson has dependencies, also as specified dependency exists.
 * */
function dependencyAlreadyExists(packageJson, packageName) {
    return !!(packageJson.dependencies && packageJson.dependencies[packageName]);
}
/**
 * Validates packageJson has peerDependencies, also as specified peerDependency exists.
 * */
function peerDependencyAlreadyExists(packageJson, packageName) {
    return !!(packageJson.peerDependencies && packageJson.peerDependencies[packageName]);
}
/**
 * Sorts the keys of the given object.
 * @returns A new object instance with sorted keys
 */
function sortObjectByKeys(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) { return (result[key] = obj[key]) && result; }, {});
}
function getNebularPackageJson() {
    return require('../../package.json');
}
//# sourceMappingURL=package.js.map