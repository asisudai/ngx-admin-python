/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export function convertToBoolProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === '');
    }
    return !!val;
}
export function getElementHeight(el) {
    /**
     *
     * TODO: Move helpers in separate common module.
     * TODO: Provide window through di token.
     * */
    var style = window.getComputedStyle(el);
    var marginTop = parseInt(style.getPropertyValue('margin-top'), 10);
    var marginBottom = parseInt(style.getPropertyValue('margin-bottom'), 10);
    return el.offsetHeight + marginTop + marginBottom;
}
//# sourceMappingURL=helpers.js.map