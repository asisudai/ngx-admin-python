import { ElementRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { TreeVirtualScroll } from '../models/tree-virtual-scroll.model';
import { Cancelable } from 'lodash';
export declare class TreeViewportComponent implements AfterViewInit, OnInit, OnDestroy {
    private elementRef;
    virtualScroll: TreeVirtualScroll;
    setViewport: (() => void) & Cancelable;
    constructor(elementRef: ElementRef, virtualScroll: TreeVirtualScroll);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getTotalHeight(): string;
    onScroll(): void;
}
