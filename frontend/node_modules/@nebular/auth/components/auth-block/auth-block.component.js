/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var NbAuthBlockComponent = /** @class */ (function () {
    function NbAuthBlockComponent() {
    }
    NbAuthBlockComponent = __decorate([
        Component({
            selector: 'nb-auth-block',
            styles: [":host{display:block;width:100%;max-width:35rem}:host /deep/ form{width:100%}:host /deep/ .label{display:block;margin-bottom:0.5rem}:host /deep/ .error-message{margin-top:0.5rem}:host /deep/ .alert{text-align:center}:host /deep/ .title{margin-top:0;margin-bottom:0.75rem;text-align:center}:host /deep/ .sub-title{margin-bottom:2rem;text-align:center}:host /deep/ .checkbox{display:flex;justify-content:space-between;margin-bottom:10px;font-weight:normal}:host /deep/ .form-control-group{margin-bottom:2rem}:host /deep/ .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host /deep/ .form-control-group.accept-group .forgot-password{line-height:2}:host /deep/ .links{text-align:center;margin-top:1.75rem}:host /deep/ .links .socials{margin-top:1.5rem}:host /deep/ .links .socials a{margin:0 1rem;text-decoration:none;font-size:1rem;vertical-align:middle}:host /deep/ .links .socials a.with-icon{font-size:2rem}:host /deep/ .another-action{margin-top:2rem;text-align:center}:host /deep/ .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host /deep/ nb-alert .alert-title,:host /deep/ nb-alert .alert-message{margin:0 0 0.5rem}:host /deep/ nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0} "],
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], NbAuthBlockComponent);
    return NbAuthBlockComponent;
}());
export { NbAuthBlockComponent };
//# sourceMappingURL=auth-block.component.js.map