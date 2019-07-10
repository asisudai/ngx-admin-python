var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbLayoutModule, } from '@nebular/theme';
import { NB_AUTH_FALLBACK_TOKEN, NbAuthService, NbAuthSimpleToken, NbAuthTokenParceler, NbTokenLocalStorage, NbTokenService, NbTokenStorage, } from './services';
import { NbDummyAuthStrategy, NbOAuth2AuthStrategy, NbPasswordAuthStrategy, } from './strategies';
import { defaultAuthOptions, NB_AUTH_INTERCEPTOR_HEADER, NB_AUTH_OPTIONS, NB_AUTH_STRATEGIES, NB_AUTH_TOKEN_INTERCEPTOR_FILTER, NB_AUTH_TOKENS, NB_AUTH_USER_OPTIONS, } from './auth.options';
import { NbAuthComponent } from './components/auth.component';
import { NbAuthBlockComponent } from './components/auth-block/auth-block.component';
import { NbLoginComponent } from './components/login/login.component';
import { NbRegisterComponent } from './components/register/register.component';
import { NbLogoutComponent } from './components/logout/logout.component';
import { NbRequestPasswordComponent } from './components/request-password/request-password.component';
import { NbResetPasswordComponent } from './components/reset-password/reset-password.component';
import { deepExtend } from './helpers';
export function nbStrategiesFactory(options, injector) {
    var strategies = [];
    options.strategies
        .forEach(function (_a) {
        var strategyClass = _a[0], strategyOptions = _a[1];
        var strategy = injector.get(strategyClass);
        strategy.setOptions(strategyOptions);
        strategies.push(strategy);
    });
    return strategies;
}
export function nbTokensFactory(strategies) {
    var tokens = [];
    strategies
        .forEach(function (strategy) {
        tokens.push(strategy.getOption('token.class'));
    });
    return tokens;
}
export function nbOptionsFactory(options) {
    return deepExtend(defaultAuthOptions, options);
}
export function nbNoOpInterceptorFilter(req) {
    return true;
}
var NbAuthModule = /** @class */ (function () {
    function NbAuthModule() {
    }
    NbAuthModule_1 = NbAuthModule;
    NbAuthModule.forRoot = function (nbAuthOptions) {
        return {
            ngModule: NbAuthModule_1,
            providers: [
                { provide: NB_AUTH_USER_OPTIONS, useValue: nbAuthOptions },
                { provide: NB_AUTH_OPTIONS, useFactory: nbOptionsFactory, deps: [NB_AUTH_USER_OPTIONS] },
                { provide: NB_AUTH_STRATEGIES, useFactory: nbStrategiesFactory, deps: [NB_AUTH_OPTIONS, Injector] },
                { provide: NB_AUTH_TOKENS, useFactory: nbTokensFactory, deps: [NB_AUTH_STRATEGIES] },
                { provide: NB_AUTH_FALLBACK_TOKEN, useValue: NbAuthSimpleToken },
                { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
                { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: nbNoOpInterceptorFilter },
                { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
                NbAuthTokenParceler,
                NbAuthService,
                NbTokenService,
                NbDummyAuthStrategy,
                NbPasswordAuthStrategy,
                NbOAuth2AuthStrategy,
            ],
        };
    };
    var NbAuthModule_1;
    NbAuthModule = NbAuthModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule,
                NbLayoutModule,
                NbCardModule,
                NbCheckboxModule,
                NbAlertModule,
                NbInputModule,
                NbButtonModule,
                RouterModule,
                FormsModule,
            ],
            declarations: [
                NbAuthComponent,
                NbAuthBlockComponent,
                NbLoginComponent,
                NbRegisterComponent,
                NbRequestPasswordComponent,
                NbResetPasswordComponent,
                NbLogoutComponent,
            ],
            exports: [
                NbAuthComponent,
                NbAuthBlockComponent,
                NbLoginComponent,
                NbRegisterComponent,
                NbRequestPasswordComponent,
                NbResetPasswordComponent,
                NbLogoutComponent,
            ],
        })
    ], NbAuthModule);
    return NbAuthModule;
}());
export { NbAuthModule };
//# sourceMappingURL=auth.module.js.map