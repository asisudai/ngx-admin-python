var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NbAuthService } from '../services/auth.service';
import { takeWhile } from 'rxjs/operators';
var NbAuthComponent = /** @class */ (function () {
    // showcase of how to use the onAuthenticationChange method
    function NbAuthComponent(auth, location) {
        var _this = this;
        this.auth = auth;
        this.location = location;
        this.alive = true;
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    NbAuthComponent.prototype.back = function () {
        this.location.back();
        return false;
    };
    NbAuthComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbAuthComponent = __decorate([
        Component({
            selector: 'nb-auth',
            styles: ["/*! * @license * Copyright Akveo. All Rights Reserved. * Licensed under the MIT License. See License.txt in the project root for license information. */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{text-decoration:none}:host .navigation .link .icon{font-size:2rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}} "],
            template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-header>\n            <nav class=\"navigation\">\n              <a href=\"#\" (click)=\"back()\" class=\"link\" aria-label=\"Back\"><i class=\"icon nb-arrow-thin-left\"></i></a>\n            </nav>\n          </nb-card-header>\n          <nb-card-body>\n            <nb-auth-block>\n              <router-outlet></router-outlet>\n            </nb-auth-block>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [NbAuthService, Location])
    ], NbAuthComponent);
    return NbAuthComponent;
}());
export { NbAuthComponent };
//# sourceMappingURL=auth.component.js.map