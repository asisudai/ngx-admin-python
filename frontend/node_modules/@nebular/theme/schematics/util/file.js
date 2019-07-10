"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function throwFileNotFoundError(fileName) {
    throw new Error(fileName + " file not found in the tree.");
}
/**
 * Reads specified file from the given tree
 * Throws the exception if file not found
 * */
function readText(tree, fileName, encoding) {
    if (encoding === void 0) { encoding = 'utf8'; }
    var file = tree.read(fileName);
    if (!file) {
        throwFileNotFoundError(fileName);
    }
    return file.toString(encoding);
}
exports.readText = readText;
/**
 * Reads specified file as JSON from the given tree
 * */
function readJSON(tree, fileName, encoding) {
    if (encoding === void 0) { encoding = 'utf8'; }
    return JSON.parse(readText(tree, fileName, encoding));
}
exports.readJSON = readJSON;
/**
 * Writes specified files to the given tree
 * */
function writeText(tree, fileName, content) {
    tree.overwrite(fileName, content);
}
exports.writeText = writeText;
/**
 * Writes specified JSON to the given tree
 * */
function writeJSON(tree, fileName, content) {
    writeText(tree, fileName, JSON.stringify(content, null, 2));
}
exports.writeJSON = writeJSON;
//# sourceMappingURL=file.js.map