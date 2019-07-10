import { NgZone } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/overlay';
import { NbPlatform } from '../overlay/mapping';
import { NbLayoutRulerService } from '../../../services/ruler.service';
import { NbLayoutScrollService } from '../../../services/scroll.service';
export declare class NbViewportRulerAdapter extends ViewportRuler {
    protected ruler: NbLayoutRulerService;
    protected scroll: NbLayoutScrollService;
    constructor(platform: NbPlatform, ngZone: NgZone, ruler: NbLayoutRulerService, scroll: NbLayoutScrollService);
    getViewportSize(): Readonly<{
        width: number;
        height: number;
    }>;
    getViewportScrollPosition(): {
        left: number;
        top: number;
    };
}
