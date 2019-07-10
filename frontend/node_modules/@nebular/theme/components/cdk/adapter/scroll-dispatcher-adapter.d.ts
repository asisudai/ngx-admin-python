import { NgZone } from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { NbPlatform } from '../overlay/mapping';
import { NbLayoutScrollService } from '../../../services/scroll.service';
export declare class NbScrollDispatcherAdapter extends ScrollDispatcher {
    protected scrollService: NbLayoutScrollService;
    constructor(ngZone: NgZone, platform: NbPlatform, scrollService: NbLayoutScrollService);
    scrolled(auditTimeInMs?: number): Observable<CdkScrollable | void>;
}
