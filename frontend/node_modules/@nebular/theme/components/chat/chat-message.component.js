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
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
/**
 * Chat message component.
 *
 * Multiple message types are available through a `type` property, such as
 * - text - simple text message
 * - file - could be a file preview or a file icon
 * if multiple files are provided grouped files are shown
 * - quote - quotes a message with specific quote styles
 * - map - shows a google map picture by provided [latitude] and [longitude] properties
 *
 * @stacked-example(Available Types, chat/chat-message-types-showcase.component)
 *
 * Message with attached files:
 * ```html
 * <nb-chat-message
 *   type="file"
 *   [files]="[ { url: '...' } ]"
 *   message="Hello world!">
 * </nb-chat-message>
 * ```
 *
 * Map message:
 * ```html
 * <nb-chat-message
 *   type="map"
 *   [latitude]="53.914"
 *   [longitude]="27.59"
 *   message="Here I am">
 * </nb-chat-message>
 * ```
 *
 * @styles
 *
 * chat-message-fg:
 * chat-message-bg:
 * chat-message-reply-bg:
 * chat-message-reply-fg:
 * chat-message-avatar-bg:
 * chat-message-sender-fg:
 * chat-message-quote-fg:
 * chat-message-quote-bg:
 * chat-message-file-fg:
 * chat-message-file-bg:
 */
var NbChatMessageComponent = /** @class */ (function () {
    function NbChatMessageComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.replyValue = false;
    }
    Object.defineProperty(NbChatMessageComponent.prototype, "flyInOut", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatMessageComponent.prototype, "notReply", {
        get: function () {
            return !this.replyValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatMessageComponent.prototype, "reply", {
        /**
         * Determines if a message is a reply
         */
        set: function (val) {
            this.replyValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatMessageComponent.prototype, "avatar", {
        /**
         * Message send avatar
         * @type {string}
         */
        set: function (value) {
            this.avatarStyle = value ? this.domSanitizer.bypassSecurityTrustStyle("url(" + value + ")") : null;
        },
        enumerable: true,
        configurable: true
    });
    NbChatMessageComponent.prototype.getInitials = function () {
        if (this.sender) {
            var names = this.sender.split(' ');
            return names.map(function (n) { return n.charAt(0); }).splice(0, 2).join('').toUpperCase();
        }
        return '';
    };
    __decorate([
        HostBinding('@flyInOut'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatMessageComponent.prototype, "flyInOut", null);
    __decorate([
        HostBinding('class.reply'),
        __metadata("design:type", Boolean)
    ], NbChatMessageComponent.prototype, "replyValue", void 0);
    __decorate([
        HostBinding('class.not-reply'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbChatMessageComponent.prototype, "notReply", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbChatMessageComponent.prototype, "reply", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbChatMessageComponent.prototype, "message", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbChatMessageComponent.prototype, "sender", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], NbChatMessageComponent.prototype, "date", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NbChatMessageComponent.prototype, "files", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbChatMessageComponent.prototype, "quote", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NbChatMessageComponent.prototype, "latitude", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NbChatMessageComponent.prototype, "longitude", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbChatMessageComponent.prototype, "avatar", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbChatMessageComponent.prototype, "type", void 0);
    NbChatMessageComponent = __decorate([
        Component({
            selector: 'nb-chat-message',
            template: "\n    <div class=\"avatar\" [style.background-image]=\"avatarStyle\" *ngIf=\"!replyValue\">\n      <ng-container *ngIf=\"!avatarStyle\">\n        {{ getInitials() }}\n      </ng-container>\n    </div>\n    <div class=\"message\">\n      <ng-container [ngSwitch]=\"type\">\n\n        <nb-chat-message-file *ngSwitchCase=\"'file'\"\n                              [sender]=\"sender\" [date]=\"date\" [message]=\"message\" [files]=\"files\">\n        </nb-chat-message-file>\n\n        <nb-chat-message-quote *ngSwitchCase=\"'quote'\"\n                              [sender]=\"sender\" [date]=\"date\" [message]=\"message\" [quote]=\"quote\">\n        </nb-chat-message-quote>\n\n        <nb-chat-message-map *ngSwitchCase=\"'map'\"\n                              [sender]=\"sender\" [date]=\"date\"\n                              [message]=\"message\" [latitude]=\"latitude\" [longitude]=\"longitude\">\n        </nb-chat-message-map>\n\n        <nb-chat-message-text *ngSwitchDefault\n                              [sender]=\"sender\" [date]=\"date\" [message]=\"message\">\n        </nb-chat-message-text>\n      </ng-container>\n    </div>\n  ",
            animations: [
                trigger('flyInOut', [
                    state('in', style({ transform: 'translateX(0)' })),
                    transition('void => *', [
                        style({ transform: 'translateX(-100%)' }),
                        animate(80),
                    ]),
                    transition('* => void', [
                        animate(80, style({ transform: 'translateX(100%)' })),
                    ]),
                ]),
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], NbChatMessageComponent);
    return NbChatMessageComponent;
}());
export { NbChatMessageComponent };
//# sourceMappingURL=chat-message.component.js.map