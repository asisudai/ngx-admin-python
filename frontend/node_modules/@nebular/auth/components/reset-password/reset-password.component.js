var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';
import { NbAuthService } from '../../services/auth.service';
var NbResetPasswordComponent = /** @class */ (function () {
    function NbResetPasswordComponent(service, options, cd, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
        this.strategy = this.getConfigValue('forms.resetPassword.strategy');
    }
    NbResetPasswordComponent.prototype.resetPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.resetPassword(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbResetPasswordComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.options, key, null);
    };
    NbResetPasswordComponent = __decorate([
        Component({
            selector: 'nb-reset-password-page',
            styles: [":host .form-group:last-of-type{margin-bottom:3rem} "],
            template: "<h1 id=\"title\" class=\"title\">Change password</h1> <p class=\"sub-title\">Please set a new password</p> <nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\"> <p class=\"alert-title\"><b>Oh snap!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li> </ul> </nb-alert> <nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\"> <p class=\"alert-title\"><b>Hooray!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li> </ul> </nb-alert> <form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\" aria-labelledby=\"title\"> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-password\">New Password:</label> <input nbInput [(ngModel)]=\"user.password\" #password=\"ngModel\" type=\"password\" id=\"input-password\" name=\"password\" class=\"first\" placeholder=\"New Password\" autofocus fullWidth [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.password.required')\" [minlength]=\"getConfigValue('forms.validation.password.minLength')\" [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\" [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\"> <ng-container *ngIf=\"password.invalid && password.touched\"> <p class=\"error-message\" *ngIf=\"password.errors?.required\"> Password is required! </p> <p class=\"error-message\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\"> Password should contains from {{getConfigValue('forms.validation.password.minLength')}} to {{getConfigValue('forms.validation.password.maxLength')}} characters </p> </ng-container> </div> <div class=\"form-group\"> <label class=\"label\" for=\"input-re-password\">Confirm Password:</label> <input nbInput [(ngModel)]=\"user.confirmPassword\" #rePass=\"ngModel\" id=\"input-re-password\" name=\"rePass\" type=\"password\" class=\"last\" placeholder=\"Confirm Password\" fullWidth [status]=\"rePass.touched ? (rePass.invalid || password.value != rePass.value ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.password.required')\" [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\"> <ng-container *ngIf=\"rePass.touched\"> <p class=\"error-message\" *ngIf=\"rePass.invalid && rePass.errors?.required\"> Password confirmation is required! </p> <p class=\"error-message\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\"> Password does not match the confirm password. </p> </ng-container> </div> <button nbButton status=\"success\" fullWidth [disabled]=\"submitted || !resetPassForm.valid\" [class.btn-pulse]=\"submitted\"> Change password </button> </form> <section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\"> <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p> <p><a class=\"text-link\" routerLink=\"../register\">Register</a></p> </section> ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __param(1, Inject(NB_AUTH_OPTIONS)),
        __metadata("design:paramtypes", [NbAuthService, Object, ChangeDetectorRef,
            Router])
    ], NbResetPasswordComponent);
    return NbResetPasswordComponent;
}());
export { NbResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map