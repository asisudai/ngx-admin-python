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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbChatOptions } from './chat.options';
/**
 * Chat message component.
 *
 * @styles
 *
 */
var NbChatMessageMapComponent = /** @class */ (function () {
    function NbChatMessageMapComponent(options) {
        this.mapKey = options.messageGoogleMapKey;
    }
    Object.defineProperty(NbChatMessageMapComponent.prototype, "file", {
        get: function () {
            return {
                // tslint:disable-next-line
                url: "https://maps.googleapis.com/maps/api/staticmap?center=" + this.latitude + "," + this.longitude + "&zoom=12&size=400x400&key=" + this.mapKey,
                type: 'image/png',
                icon: 'nb-location',
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbChatMessageMapComponent.prototype, "message", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbChatMessageMapComponent.prototype, "sender", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], NbChatMessageMapComponent.prototype, "date", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NbChatMessageMapComponent.prototype, "latitude", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NbChatMessageMapComponent.prototype, "longitude", void 0);
    NbChatMessageMapComponent = __decorate([
        Component({
            selector: 'nb-chat-message-map',
            template: "\n    <nb-chat-message-file [files]=\"[file]\" [message]=\"message\" [sender]=\"sender\" [date]=\"date\"></nb-chat-message-file>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [NbChatOptions])
    ], NbChatMessageMapComponent);
    return NbChatMessageMapComponent;
}());
export { NbChatMessageMapComponent };
//# sourceMappingURL=chat-message-map.component.js.map