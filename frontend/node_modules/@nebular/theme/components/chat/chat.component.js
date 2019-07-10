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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ViewChild, ElementRef, ContentChildren, QueryList, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NbChatMessageComponent } from './chat-message.component';
/**
 * Conversational UI collection - a set of components for chat-like UI construction.
 *
 * Main features:
 * - different message types support (text, image, file, file group, map, etc)
 * - drag & drop for images and files with preview
 * - different UI styles
 * - custom action buttons (coming soon)
 *
 * Here's a complete example build in a bot-like app. Type `help` to be able to receive different message types.
 * Enjoy the conversation and the beautiful UI.
 * @stacked-example(Showcase, chat/chat-showcase.component)
 *
 * Basic chat configuration and usage:
 * ```ts
 * <nb-chat title="Nebular Conversational UI">
 *       <nb-chat-message *ngFor="let msg of messages"
 *                        [type]="msg.type"
 *                        [message]="msg.text"
 *                        [reply]="msg.reply"
 *                        [sender]="msg.user.name"
 *                        [date]="msg.date"
 *                        [files]="msg.files"
 *                        [quote]="msg.quote"
 *                        [latitude]="msg.latitude"
 *                        [longitude]="msg.longitude"
 *                        [avatar]="msg.user.avatar">
 *   </nb-chat-message>
 *
 *   <nb-chat-form (send)="sendMessage($event)" [dropFiles]="true">
 *   </nb-chat-form>
 * </nb-chat>
 * ```
 * ### Installation
 *
 * Import `NbChatModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbChatModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * If you need to provide an API key for a `map` message type (which is required by Google Maps)
 * you may use `NbChatModule.forRoot({ ... })` call if this is a global app configuration
 * or `NbChatModule.forChild({ ... })` for a feature module configuration:
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
 *   ],
 * })
 * export class AppModule { }
 *
 * ### Usage
 *
 * There are three main components:
 * ```ts
 * <nb-chat>
 * </nb-chat> // chat container
 *
 * <nb-chat-form>
 * </nb-chat-form> // chat form with drag&drop files feature
 *
 * <nb-chat-message>
 * </nb-chat-message> // chat message, available multiple types
 * ```
 *
 * Two users conversation showcase:
 * @stacked-example(Conversation, chat/chat-conversation-showcase.component)
 *
 * Chat UI is also available in different colors by specifying a `[status]` input:
 *
 * @stacked-example(Colored Chat, chat/chat-colors.component)
 *
 * Also it is possible to configure sizes through `[size]` input:
 *
 * @stacked-example(Chat Sizes, chat/chat-sizes.component)
 *
 * @styles
 *
 * chat-font-size:
 * chat-fg:
 * chat-bg:
 * chat-border-radius:
 * chat-fg-text:
 * chat-height-xxsmall:
 * chat-height-xsmall:
 * chat-height-small:
 * chat-height-medium:
 * chat-height-large:
 * chat-height-xlarge:
 * chat-height-xxlarge:
 * chat-border:
 * chat-padding:
 * chat-shadow:
 * chat-separator:
 * chat-active-bg:
 * chat-disabled-bg:
 * chat-disabled-fg:
 * chat-primary-bg:
 * chat-info-bg:
 * chat-success-bg:
 * chat-warning-bg:
 * chat-danger-bg:
 */
var NbChatComponent = /** @class */ (function () {
    function NbChatComponent() {
        this.scrollBottom = true;
    }
    NbChatComponent_1 = NbChatComponent;
    Object.defineProperty(NbChatComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "small", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "medium", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "large", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbChatComponent_1.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "active", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "primary", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "info", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "success", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "warning", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "danger", {
        get: function () {
            return this.status === NbChatComponent_1.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "hasAccent", {
        get: function () {
            return this.accent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "setSize", {
        /**
         * Chat size, available sizes:
         * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
         * @param {string} val
         */
        set: function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "setStatus", {
        /**
         * Chat status color (adds specific styles):
         * active, disabled, primary, info, success, warning, danger
         * @param {string} val
         */
        set: function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "setScrollBottom", {
        /**
         * Scroll chat to the bottom of the list when a new message arrives
         * @param {boolean} val
         */
        set: function (val) {
            this.scrollBottom = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbChatComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.messages.changes
            .subscribe(function (messages) {
            _this.messages = messages;
            _this.updateView();
        });
        this.updateView();
    };
    NbChatComponent.prototype.updateView = function () {
        if (this.scrollBottom) {
            this.scrollListBottom();
        }
    };
    NbChatComponent.prototype.scrollListBottom = function () {
        this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
    };
    var NbChatComponent_1;
    NbChatComponent.SIZE_XXSMALL = 'xxsmall';
    NbChatComponent.SIZE_XSMALL = 'xsmall';
    NbChatComponent.SIZE_SMALL = 'small';
    NbChatComponent.SIZE_MEDIUM = 'medium';
    NbChatComponent.SIZE_LARGE = 'large';
    NbChatComponent.SIZE_XLARGE = 'xlarge';
    NbChatComponent.SIZE_XXLARGE = 'xxlarge';
    NbChatComponent.STATUS_ACTIVE = 'active';
    NbChatComponent.STATUS_DISABLED = 'disabled';
    NbChatComponent.STATUS_PRIMARY = 'primary';
    NbChatComponent.STATUS_INFO = 'info';
    NbChatComponent.STATUS_SUCCESS = 'success';
    NbChatComponent.STATUS_WARNING = 'warning';
    NbChatComponent.STATUS_DANGER = 'danger';
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbChatComponent.prototype, "title", void 0);
    __decorate([
        HostBinding('class.xxsmall-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "xxsmall", null);
    __decorate([
        HostBinding('class.xsmall-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "xsmall", null);
    __decorate([
        HostBinding('class.small-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "small", null);
    __decorate([
        HostBinding('class.medium-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.large-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "large", null);
    __decorate([
        HostBinding('class.xlarge-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "xlarge", null);
    __decorate([
        HostBinding('class.xxlarge-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "xxlarge", null);
    __decorate([
        HostBinding('class.active-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "active", null);
    __decorate([
        HostBinding('class.disabled-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "disabled", null);
    __decorate([
        HostBinding('class.primary-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "primary", null);
    __decorate([
        HostBinding('class.info-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "info", null);
    __decorate([
        HostBinding('class.success-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.warning-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.danger-chat'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "danger", null);
    __decorate([
        HostBinding('class.accent'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatComponent.prototype, "hasAccent", null);
    __decorate([
        Input('size'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbChatComponent.prototype, "setSize", null);
    __decorate([
        Input('status'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbChatComponent.prototype, "setStatus", null);
    __decorate([
        Input('scrollBottom'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbChatComponent.prototype, "setScrollBottom", null);
    __decorate([
        ViewChild('scrollable'),
        __metadata("design:type", ElementRef)
    ], NbChatComponent.prototype, "scrollable", void 0);
    __decorate([
        ContentChildren(NbChatMessageComponent),
        __metadata("design:type", QueryList)
    ], NbChatComponent.prototype, "messages", void 0);
    NbChatComponent = NbChatComponent_1 = __decorate([
        Component({
            selector: 'nb-chat',
            styles: [":host{display:flex;flex-direction:column;position:relative;height:100%} "],
            template: "\n    <div class=\"header\">{{ title }}</div>\n    <div class=\"scrollable\" #scrollable>\n      <div class=\"messages\">\n        <ng-content select=\"nb-chat-message\"></ng-content>\n        <p class=\"no-messages\" *ngIf=\"!messages?.length\">No messages yet.</p>\n      </div>\n    </div>\n    <div class=\"form\">\n      <ng-content select=\"nb-chat-form\"></ng-content>\n    </div>\n  ",
        })
    ], NbChatComponent);
    return NbChatComponent;
}());
export { NbChatComponent };
//# sourceMappingURL=chat.component.js.map