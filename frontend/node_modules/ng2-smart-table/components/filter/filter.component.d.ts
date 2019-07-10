import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';
import { Subscription } from 'rxjs';
export declare class FilterComponent implements OnChanges {
    column: Column;
    source: DataSource;
    inputClass: string;
    filter: EventEmitter<any>;
    query: string;
    protected dataChangedSub: Subscription;
    ngOnChanges(changes: SimpleChanges): void;
    onFilter(query: string): void;
}
