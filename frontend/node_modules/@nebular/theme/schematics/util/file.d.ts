import { Tree } from '@angular-devkit/schematics';
/**
 * Reads specified file from the given tree
 * Throws the exception if file not found
 * */
export declare function readText(tree: Tree, fileName: string, encoding?: string): string;
/**
 * Reads specified file as JSON from the given tree
 * */
export declare function readJSON(tree: Tree, fileName: string, encoding?: string): any;
/**
 * Writes specified files to the given tree
 * */
export declare function writeText(tree: Tree, fileName: string, content: string): void;
/**
 * Writes specified JSON to the given tree
 * */
export declare function writeJSON(tree: Tree, fileName: string, content: any): void;
