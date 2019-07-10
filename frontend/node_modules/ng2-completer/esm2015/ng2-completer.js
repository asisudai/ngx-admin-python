/**
 * @license ng2-completer
 * MIT license
 */
import { ChangeDetectorRef, Component, Directive, ElementRef, EventEmitter, Host, HostListener, Injectable, Input, NgModule, Output, Renderer, TemplateRef, ViewChild, ViewContainerRef, forwardRef } from '@angular/core';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { catchError, map, take } from 'rxjs/operators';
import { Subject as Subject$1 } from 'rxjs/Subject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { timer as timer$1 } from 'rxjs/observable/timer';
import 'rxjs/add/operator/catch';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const MAX_CHARS = 524288; // the default max length per the html maxlength attribute
const MIN_SEARCH_LENGTH = 3;
const PAUSE = 10;
const TEXT_SEARCHING = "Searching...";
const TEXT_NO_RESULTS = "No results found";
const CLEAR_TIMEOUT = 50;
/**
 * @param {?} value
 * @return {?}
 */
function isNil(value) {
    return typeof value === "undefined" || value === null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class CompleterBaseData extends Subject$1 {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    cancel() {
        return;
    }
    /**
     * @param {?} searchFields
     * @return {?}
     */
    searchFields(searchFields) {
        this._searchFields = searchFields;
        return this;
    }
    /**
     * @param {?} titleField
     * @return {?}
     */
    titleField(titleField) {
        this._titleField = titleField;
        return this;
    }
    /**
     * @param {?} descriptionField
     * @return {?}
     */
    descriptionField(descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    }
    /**
     * @param {?} imageField
     * @return {?}
     */
    imageField(imageField) {
        this._imageField = imageField;
        return this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        let /** @type {?} */ image = null;
        let /** @type {?} */ formattedText;
        let /** @type {?} */ formattedDesc = null;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (typeof formattedText !== "string") {
            formattedText = JSON.stringify(formattedText);
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (isNil(formattedText)) {
            return null;
        }
        return /** @type {?} */ ({
            description: formattedDesc,
            image,
            originalObject: data,
            title: formattedText
        });
    }
    /**
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    extractMatches(data, term) {
        let /** @type {?} */ matches = [];
        const /** @type {?} */ searchFields = this._searchFields ? this._searchFields.split(",") : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== "") {
            matches = data.filter((item) => {
                const /** @type {?} */ values = searchFields ? this.extractBySearchFields(searchFields, item) : [item];
                return values.some((value) => value
                    .toString()
                    .toLowerCase()
                    .indexOf(term.toString().toLowerCase()) >= 0);
            });
        }
        else {
            matches = data;
        }
        return matches;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    extractTitle(item) {
        // split title fields and run extractValue for each and join with ' '
        if (!this._titleField) {
            return "";
        }
        return this._titleField.split(",")
            .map((field) => {
            return this.extractValue(item, field);
        })
            .reduce((acc, titlePart) => acc ? `${acc} ${titlePart}` : titlePart);
    }
    /**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    extractValue(obj, key) {
        let /** @type {?} */ keys;
        let /** @type {?} */ result;
        if (key) {
            keys = key.split(".");
            result = obj;
            for (key of keys) {
                if (result) {
                    result = result[key];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    }
    /**
     * @param {?} matches
     * @return {?}
     */
    processResults(matches) {
        let /** @type {?} */ i;
        const /** @type {?} */ results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                const /** @type {?} */ item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    }
    /**
     * @param {?} searchFields
     * @param {?} item
     * @return {?}
     */
    extractBySearchFields(searchFields, item) {
        return searchFields
            .map((searchField) => this.extractValue(item, searchField)).filter((value) => !!value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LocalData extends CompleterBaseData {
    constructor() {
        super();
        this.dataSourceChange = new EventEmitter();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    data(data) {
        if (data instanceof Observable$1) {
            const /** @type {?} */ data$ = /** @type {?} */ (data);
            data$
                .pipe(catchError(() => []))
                .subscribe((res) => {
                this._data = res;
                if (this.savedTerm) {
                    this.search(this.savedTerm);
                }
                this.dataSourceChange.emit();
            });
        }
        else {
            this._data = data;
        }
        this.dataSourceChange.emit();
        return this;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            const /** @type {?} */ matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        return super.convertToItem(data);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RemoteData extends CompleterBaseData {
    /**
     * @param {?} http
     */
    constructor(http$$1) {
        super();
        this.http = http$$1;
        this.dataSourceChange = new EventEmitter();
        this._urlFormater = null;
        this._dataField = null;
    }
    /**
     * @param {?} remoteUrl
     * @return {?}
     */
    remoteUrl(remoteUrl) {
        this._remoteUrl = remoteUrl;
        this.dataSourceChange.emit();
        return this;
    }
    /**
     * @param {?} urlFormater
     * @return {?}
     */
    urlFormater(urlFormater) {
        this._urlFormater = urlFormater;
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    dataField(dataField) {
        this._dataField = dataField;
    }
    /**
     * @param {?} requestOptions
     * @return {?}
     */
    requestOptions(requestOptions) {
        this._requestOptions = requestOptions;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        this.cancel();
        // let params = {};
        let /** @type {?} */ url = "";
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        this.remoteSearch = this.http
            .get(url, Object.assign({}, this._requestOptions))
            .pipe(map((data) => {
            const /** @type {?} */ matches = this.extractValue(data, this._dataField);
            return this.extractMatches(matches, term);
        }), catchError(() => []))
            .subscribe((matches) => {
            const /** @type {?} */ results = this.processResults(matches);
            this.next(results);
        });
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        return super.convertToItem(data);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LocalDataFactory {
    /**
     * @return {?}
     */
    create() {
        return new LocalData();
    }
}
LocalDataFactory.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LocalDataFactory.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RemoteDataFactory {
    /**
     * @param {?} http
     */
    constructor(http$$1) {
        this.http = http$$1;
    }
    /**
     * @return {?}
     */
    create() {
        return new RemoteData(this.http);
    }
}
RemoteDataFactory.decorators = [
    { type: Injectable },
];
/** @nocollapse */
RemoteDataFactory.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CompleterService {
    /**
     * @param {?} localDataFactory
     * @param {?} remoteDataFactory
     */
    constructor(localDataFactory, remoteDataFactory // Using any instead of () => LocalData because of AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    /**
     * @param {?} data
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    local(data, searchFields = "", titleField = "") {
        const /** @type {?} */ localData = this.localDataFactory.create();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    }
    /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    remote(url, searchFields = "", titleField = "") {
        const /** @type {?} */ remoteData = this.remoteDataFactory.create();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    }
}
CompleterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CompleterService.ctorParameters = () => [
    { type: LocalDataFactory, },
    { type: RemoteDataFactory, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

class CtrCompleter {
    constructor() {
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.opened = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    registerList(list) {
        this.list = list;
    }
    /**
     * @param {?} dropdown
     * @return {?}
     */
    registerDropdown(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onHighlighted(item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    }
    /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    onSelected(item, clearList = true) {
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    }
    /**
     * @return {?}
     */
    onDataSourceChange() {
        if (this.hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        this.dataSourceChange.emit();
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (this._hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this._hasHighlighted = false;
        this.isOpen = false;
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
    }
    /**
     * @return {?}
     */
    selectCurrent() {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    }
    /**
     * @return {?}
     */
    nextRow() {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    }
    /**
     * @return {?}
     */
    prevRow() {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    }
    /**
     * @return {?}
     */
    hasHighlighted() {
        return this._hasHighlighted;
    }
    /**
     * @param {?} cancel
     * @return {?}
     */
    cancelBlur(cancel) {
        this._cancelBlur = cancel;
    }
    /**
     * @return {?}
     */
    isCancelBlur() {
        return this._cancelBlur;
    }
    /**
     * @return {?}
     */
    open() {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set isOpen(open) {
        this._isOpen = open;
        this.opened.emit(this._isOpen);
        if (this.list) {
            this.list.isOpen(open);
        }
    }
    /**
     * @return {?}
     */
    get autoHighlightIndex() {
        return this._autoHighlightIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set autoHighlightIndex(index) {
        this._autoHighlightIndex = index;
        if (this.dropdown) {
            this.dropdown.highlightRow(this._autoHighlightIndex);
        }
    }
    /**
     * @return {?}
     */
    get hasSelected() {
        return this._hasSelected;
    }
}
CtrCompleter.decorators = [
    { type: Directive, args: [{
                selector: "[ctrCompleter]",
            },] },
];
/** @nocollapse */
CtrCompleter.ctorParameters = () => [];
CtrCompleter.propDecorators = {
    "selected": [{ type: Output },],
    "highlighted": [{ type: Output },],
    "opened": [{ type: Output },],
    "dataSourceChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class CtrRowItem {
    /**
     * @param {?} row
     * @param {?} index
     */
    constructor(row, index) {
        this.row = row;
        this.index = index;
    }
}
class CtrDropdown {
    /**
     * @param {?} completer
     * @param {?} el
     */
    constructor(completer, el) {
        this.completer = completer;
        this.el = el;
        this.rows = [];
        this._rowMouseDown = false;
        this.completer.registerDropdown(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.completer.registerDropdown(null);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ css = getComputedStyle(this.el.nativeElement);
        const /** @type {?} */ autoHighlightIndex = this.completer.autoHighlightIndex;
        this.isScrollOn = !!css.maxHeight && css.overflowY === "auto";
        if (autoHighlightIndex) {
            setTimeout(() => {
                this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        // Support for canceling blur on IE (issue #158)
        if (!this._rowMouseDown) {
            this.completer.cancelBlur(true);
            setTimeout(() => {
                this.completer.cancelBlur(false);
            }, 0);
        }
        else {
            this._rowMouseDown = false;
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    registerRow(row) {
        const /** @type {?} */ arrIndex = this.rows.findIndex(_row => _row.index === row.index);
        if (arrIndex >= 0) {
            this.rows[arrIndex] = row;
        }
        else {
            this.rows.push(row);
        }
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    unregisterRow(rowIndex) {
        const /** @type {?} */ arrIndex = this.rows.findIndex(_row => _row.index === rowIndex);
        this.rows.splice(arrIndex, 1);
        if (this.currHighlighted && rowIndex === this.currHighlighted.index) {
            this.highlightRow(null);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    highlightRow(index) {
        const /** @type {?} */ highlighted = this.rows.find(row => row.index === index);
        if (isNil(index) || /** @type {?} */ ((index)) < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(null);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            const /** @type {?} */ rowTop = this.dropdownRowTop();
            if (!rowTop) {
                return;
            }
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                const /** @type {?} */ row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop), 10)));
                    }
                }
            }
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.rows = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelected(item) {
        this.completer.onSelected(item);
    }
    /**
     * @return {?}
     */
    rowMouseDown() {
        this._rowMouseDown = true;
    }
    /**
     * @return {?}
     */
    selectCurrent() {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    }
    /**
     * @return {?}
     */
    nextRow() {
        let /** @type {?} */ nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @return {?}
     */
    prevRow() {
        let /** @type {?} */ nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    dropdownScrollTopTo(offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    }
    /**
     * @return {?}
     */
    dropdownRowTop() {
        if (!this.currHighlighted) {
            return;
        }
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop), 10));
    }
    /**
     * @return {?}
     */
    dropdownHeight() {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight), 10);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    dropdownRowOffsetHeight(row) {
        let /** @type {?} */ css = getComputedStyle(row.parentElement);
        return row.parentElement.offsetHeight +
            parseInt(/** @type {?} */ (css.marginTop), 10) + parseInt(/** @type {?} */ (css.marginBottom), 10);
    }
}
CtrDropdown.decorators = [
    { type: Directive, args: [{
                selector: "[ctrDropdown]",
            },] },
];
/** @nocollapse */
CtrDropdown.ctorParameters = () => [
    { type: CtrCompleter, decorators: [{ type: Host },] },
    { type: ElementRef, },
];
CtrDropdown.propDecorators = {
    "onMouseDown": [{ type: HostListener, args: ["mousedown", ["$event"],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// keyboard events
const KEY_DW = 40;
const KEY_RT = 39;
const KEY_UP = 38;
const KEY_LF = 37;
const KEY_ES = 27;
const KEY_EN = 13;
const KEY_TAB = 9;
const KEY_BK = 8;
const KEY_SH = 16;
const KEY_CL = 20;
const KEY_F1 = 112;
const KEY_F12 = 123;
class CtrInput {
    /**
     * @param {?} completer
     * @param {?} ngModel
     * @param {?} el
     */
    constructor(completer, ngModel, el) {
        this.completer = completer;
        this.ngModel = ngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.ngModelChange = new EventEmitter();
        this._searchStr = "";
        this._displayStr = "";
        this.blurTimer = null;
        this.completer.selected.subscribe((item) => {
            if (!item) {
                return;
            }
            if (this.clearSelected) {
                this.searchStr = "";
            }
            else {
                this.searchStr = item.title;
            }
            this.ngModelChange.emit(this.searchStr);
        });
        this.completer.highlighted.subscribe((item) => {
            if (this.fillHighlighted) {
                if (item) {
                    this._displayStr = item.title;
                    this.ngModelChange.emit(item.title);
                }
                else {
                    this._displayStr = this.searchStr;
                    this.ngModelChange.emit(this.searchStr);
                }
            }
        });
        this.completer.dataSourceChange.subscribe(() => {
            this.completer.search(this.searchStr);
        });
        if (this.ngModel.valueChanges) {
            this.ngModel.valueChanges.subscribe(value => {
                if (!isNil(value) && this._displayStr !== value) {
                    if (this.searchStr !== value) {
                        this.completer.search(value);
                    }
                    this.searchStr = value;
                }
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyupHandler(event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            if (this.completer.isOpen) {
                this.restoreSearchValue();
                this.completer.clear();
                event.stopPropagation();
                event.preventDefault();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    pasteHandler(event) {
        this.completer.open();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownHandler(event) {
        const /** @type {?} */ keyCode = event.keyCode || event.which;
        if (keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (keyCode === KEY_BK) {
            this.completer.open();
        }
        else if (keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
            if (this.completer.isOpen) {
                event.stopPropagation();
            }
        }
        else {
            if (keyCode !== 0 && keyCode !== KEY_SH && keyCode !== KEY_CL &&
                (keyCode <= KEY_F1 || keyCode >= KEY_F12) &&
                !event.ctrlKey && !event.metaKey && !event.altKey) {
                this.completer.open();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(() => {
                // get the focus back
                this.el.nativeElement.focus();
            }, 0);
            return;
        }
        if (this.completer.isOpen) {
            this.blurTimer = timer$1(200).pipe(take(1)).subscribe(() => this.doBlur());
        }
    }
    /**
     * @return {?}
     */
    onfocus() {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.selectOnFocus) {
            this.el.nativeElement.select();
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.selectOnClick) {
            this.el.nativeElement.select();
        }
        if (this.openOnClick) {
            if (this.completer.isOpen) {
                this.completer.clear();
            }
            else {
                this.completer.open();
            }
        }
    }
    /**
     * @return {?}
     */
    get searchStr() {
        return this._searchStr;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    set searchStr(term) {
        this._searchStr = term;
        this._displayStr = term;
    }
    /**
     * @return {?}
     */
    handleSelection() {
        if (this.completer.hasHighlighted()) {
            this._searchStr = "";
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
            }
            this.completer.clear();
        }
    }
    /**
     * @return {?}
     */
    restoreSearchValue() {
        if (this.fillHighlighted) {
            if (this._displayStr != this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    }
    /**
     * @return {?}
     */
    doBlur() {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
            }
            else {
                this.restoreSearchValue();
            }
        }
        this.completer.clear();
    }
}
CtrInput.decorators = [
    { type: Directive, args: [{
                selector: "[ctrInput]",
            },] },
];
/** @nocollapse */
CtrInput.ctorParameters = () => [
    { type: CtrCompleter, decorators: [{ type: Host },] },
    { type: NgModel, },
    { type: ElementRef, },
];
CtrInput.propDecorators = {
    "clearSelected": [{ type: Input, args: ["clearSelected",] },],
    "clearUnselected": [{ type: Input, args: ["clearUnselected",] },],
    "overrideSuggested": [{ type: Input, args: ["overrideSuggested",] },],
    "fillHighlighted": [{ type: Input, args: ["fillHighlighted",] },],
    "openOnFocus": [{ type: Input, args: ["openOnFocus",] },],
    "openOnClick": [{ type: Input, args: ["openOnClick",] },],
    "selectOnClick": [{ type: Input, args: ["selectOnClick",] },],
    "selectOnFocus": [{ type: Input, args: ["selectOnFocus",] },],
    "ngModelChange": [{ type: Output },],
    "keyupHandler": [{ type: HostListener, args: ["keyup", ["$event"],] },],
    "pasteHandler": [{ type: HostListener, args: ["paste", ["$event"],] },],
    "keydownHandler": [{ type: HostListener, args: ["keydown", ["$event"],] },],
    "onBlur": [{ type: HostListener, args: ["blur", ["$event"],] },],
    "onfocus": [{ type: HostListener, args: ["focus", [],] },],
    "onClick": [{ type: HostListener, args: ["click", ["$event"],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CtrListContext {
    /**
     * @param {?} results
     * @param {?} searching
     * @param {?} searchInitialized
     * @param {?} isOpen
     */
    constructor(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
}
class CtrList {
    /**
     * @param {?} completer
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(completer, templateRef, viewContainer, cd) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.ctrListMinSearchLength = MIN_SEARCH_LENGTH;
        this.ctrListPause = PAUSE;
        this.ctrListAutoMatch = false;
        this.ctrListAutoHighlight = false;
        this.ctrListDisplaySearching = true;
        this.term = null;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
        this.viewRef = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.completer.registerList(this);
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    }
    /**
     * @param {?} newService
     * @return {?}
     */
    set dataService(newService) {
        this._dataService = newService;
        this.dataServiceSubscribe();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set initialValue(value) {
        if (this._dataService && typeof this._dataService.convertToItem === "function") {
            setTimeout(() => {
                const /** @type {?} */ initialItem = /** @type {?} */ ((this._dataService.convertToItem))(value);
                if (initialItem) {
                    this.completer.onSelected(initialItem, false);
                }
            });
        }
        else if (!this._dataService) {
            this._initialValue = value;
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (!isNil(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                if (this.ctrListDisplaySearching) {
                    this.ctx.results = [];
                }
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = timer$1(this.ctrListPause).pipe(take(1)).subscribe(() => {
                this.searchTimerComplete(term);
            });
        }
        else if (!isNil(term) && term.length < this.ctrListMinSearchLength) {
            this.clear();
            this.term = "";
        }
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = timer$1(CLEAR_TIMEOUT).pipe(take(1)).subscribe(() => {
            this._clear();
        });
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.ctx.searchInitialized) {
            this.search("");
        }
        this.refreshTemplate();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    isOpen(open) {
        this.ctx.isOpen = open;
    }
    /**
     * @return {?}
     */
    _clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
        this.viewRef = null;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    searchTimerComplete(term) {
        // Begin the search
        if (isNil(term) || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    }
    /**
     * @return {?}
     */
    refreshTemplate() {
        // create the template if it doesn't exist
        if (!this.viewRef) {
            this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        else if (!this.viewRef.destroyed) {
            /** @type {?} */ ((
            // refresh the template
            this.viewRef)).context.isOpen = this.ctx.isOpen; /** @type {?} */
            ((this.viewRef)).context.results = this.ctx.results; /** @type {?} */
            ((this.viewRef)).context.searching = this.ctx.searching; /** @type {?} */
            ((this.viewRef)).context.searchInitialized = this.ctx.searchInitialized;
            this.viewRef.detectChanges();
        }
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    getBestMatchIndex() {
        if (!this.ctx.results || !this.term) {
            return null;
        }
        // First try to find the exact term
        let /** @type {?} */ bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase() === /** @type {?} */ ((this.term)).toLocaleLowerCase());
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase().startsWith(/** @type {?} */ ((this.term)).toLocaleLowerCase()));
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase().includes(/** @type {?} */ ((this.term)).toLocaleLowerCase()));
        }
        return bestMatch < 0 ? null : bestMatch;
    }
    /**
     * @return {?}
     */
    dataServiceSubscribe() {
        if (this._dataService) {
            this._dataService.pipe(catchError(err => {
                console.error(err);
                console.error("Unexpected error in dataService: errors should be handled by the dataService Observable");
                return [];
            }))
                .subscribe(results => {
                this.ctx.searchInitialized = true;
                this.ctx.searching = false;
                this.ctx.results = results;
                if (this.ctrListAutoMatch && results && results.length === 1 && results[0].title && !isNil(this.term) &&
                    results[0].title.toLocaleLowerCase() === /** @type {?} */ ((this.term)).toLocaleLowerCase()) {
                    // Do automatch
                    this.completer.onSelected(results[0]);
                    return;
                }
                if (this._initialValue) {
                    this.initialValue = this._initialValue;
                    this._initialValue = null;
                }
                this.refreshTemplate();
                if (this.ctrListAutoHighlight) {
                    this.completer.autoHighlightIndex = this.getBestMatchIndex();
                }
            });
            if (this._dataService.dataSourceChange) {
                this._dataService.dataSourceChange.subscribe(() => {
                    this.term = null;
                    this.ctx.searchInitialized = false;
                    this.ctx.searching = false;
                    this.ctx.results = [];
                    this.refreshTemplate();
                    this.completer.onDataSourceChange();
                });
            }
        }
    }
}
CtrList.decorators = [
    { type: Directive, args: [{
                selector: "[ctrList]",
            },] },
];
/** @nocollapse */
CtrList.ctorParameters = () => [
    { type: CtrCompleter, decorators: [{ type: Host },] },
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
CtrList.propDecorators = {
    "ctrListMinSearchLength": [{ type: Input },],
    "ctrListPause": [{ type: Input },],
    "ctrListAutoMatch": [{ type: Input },],
    "ctrListAutoHighlight": [{ type: Input },],
    "ctrListDisplaySearching": [{ type: Input },],
    "dataService": [{ type: Input, args: ["ctrList",] },],
    "initialValue": [{ type: Input, args: ["ctrListInitialValue",] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CtrRow {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} dropdown
     */
    constructor(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._rowIndex) {
            this.dropdown.unregisterRow(this._rowIndex);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set ctrRow(index) {
        this._rowIndex = index;
        this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    set dataItem(item) {
        this._item = item;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.dropdown.onSelected(this._item);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseEnter(event) {
        this.dropdown.highlightRow(this._rowIndex);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        this.dropdown.rowMouseDown();
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    setHighlighted(selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, "completer-selected-row", this.selected);
    }
    /**
     * @return {?}
     */
    getNativeElement() {
        return this.el.nativeElement;
    }
    /**
     * @return {?}
     */
    getDataItem() {
        return this._item;
    }
}
CtrRow.decorators = [
    { type: Directive, args: [{
                selector: "[ctrRow]",
            },] },
];
/** @nocollapse */
CtrRow.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
    { type: CtrDropdown, decorators: [{ type: Host },] },
];
CtrRow.propDecorators = {
    "ctrRow": [{ type: Input },],
    "dataItem": [{ type: Input },],
    "onClick": [{ type: HostListener, args: ["click", ["$event"],] },],
    "onMouseEnter": [{ type: HostListener, args: ["mouseenter", ["$event"],] },],
    "onMouseDown": [{ type: HostListener, args: ["mousedown", ["$event"],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
"use strict";
/**
 * @record
 */

class CompleterListItemCmp {
    constructor() {
        this.parts = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        let /** @type {?} */ matchStr = this.text.toLowerCase();
        let /** @type {?} */ matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        let /** @type {?} */ startIndex = 0;
        while (matchPos >= 0) {
            let /** @type {?} */ matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                let /** @type {?} */ matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    }
}
CompleterListItemCmp.decorators = [
    { type: Component, args: [{
                selector: "completer-list-item",
                template: `<span class="completer-list-item-holder" [ngClass]= "{'completer-title': type === 'title', 'completer-description': type === 'description'}" >
        <span class="completer-list-item" *ngFor="let part of parts" [ngClass]= "part.isMatch ? matchClass : null">{{part.text}}</span>
    </span>`
            },] },
];
/** @nocollapse */
CompleterListItemCmp.ctorParameters = () => [];
CompleterListItemCmp.propDecorators = {
    "text": [{ type: Input },],
    "searchStr": [{ type: Input },],
    "matchClass": [{ type: Input },],
    "type": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
"use strict";
const noop = () => {
    return;
};
const COMPLETER_CONTROL_VALUE_ACCESSOR = {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CompleterCmp),
};
class CompleterCmp {
    /**
     * @param {?} completerService
     * @param {?} cdr
     */
    constructor(completerService, cdr) {
        this.completerService = completerService;
        this.cdr = cdr;
        this.inputName = "";
        this.inputId = "";
        this.pause = PAUSE;
        this.minSearchLength = MIN_SEARCH_LENGTH;
        this.maxChars = MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = "";
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.autoHighlight = false;
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.blurEvent = new EventEmitter();
        this.click = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.opened = new EventEmitter();
        this.keyup = new EventEmitter();
        this.keydown = new EventEmitter();
        this.control = new FormControl("");
        this.displaySearching = true;
        this.displayNoResults = true;
        this._textNoResults = TEXT_NO_RESULTS;
        this._textSearching = TEXT_SEARCHING;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._searchStr = "";
    }
    /**
     * @return {?}
     */
    get value() { return this.searchStr; }
    ;
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.searchStr) {
            this.searchStr = v;
        }
        // Propagate the change in any case
        this._onChangeCallback(v);
    }
    /**
     * @return {?}
     */
    get searchStr() {
        return this._searchStr;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set searchStr(value) {
        if (typeof value === "string" || isNil(value)) {
            this._searchStr = value;
        }
        else {
            this._searchStr = JSON.stringify(value);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autofocus) {
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._focus) {
            setTimeout(() => {
                this.ctrInput.nativeElement.focus();
                this._focus = false;
            }, 0);
        }
    }
    /**
     * @return {?}
     */
    onTouched() {
        this._onTouchedCallback();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.searchStr = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disableInput = isDisabled;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    set datasource(source) {
        if (source) {
            if (source instanceof Array) {
                this.dataService = this.completerService.local(source);
            }
            else if (typeof (source) === "string") {
                this.dataService = this.completerService.remote(source);
            }
            else {
                this.dataService = /** @type {?} */ (source);
            }
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textNoResults(text) {
        if (this._textNoResults !== text) {
            this._textNoResults = text;
            this.displayNoResults = !!this._textNoResults && this._textNoResults !== "false";
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textSearching(text) {
        if (this._textSearching !== text) {
            this._textSearching = text;
            this.displaySearching = !!this._textSearching && this._textSearching !== "false";
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.completer.selected.subscribe((item) => {
            this.selected.emit(item);
        });
        this.completer.highlighted.subscribe((item) => {
            this.highlighted.emit(item);
        });
        this.completer.opened.subscribe((isOpen) => {
            this._open = isOpen;
            this.opened.emit(isOpen);
        });
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.blurEvent.emit();
        this.onTouched();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focusEvent.emit();
        this.onTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.click.emit(event);
        this.onTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyup(event) {
        this.keyup.emit(event);
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        this.keydown.emit(event);
        event.stopPropagation();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChange(value) {
        this.value = value;
    }
    /**
     * @return {?}
     */
    open() {
        this.completer.open();
    }
    /**
     * @return {?}
     */
    close() {
        this.completer.clear();
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.blur();
        }
        else {
            this._focus = false;
        }
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this._open;
    }
}
CompleterCmp.decorators = [
    { type: Component, args: [{
                selector: "ng2-completer",
                template: `
        <div class="completer-holder" ctrCompleter>
            <input #ctrInput [attr.id]="inputId.length > 0 ? inputId : null" type="search"
                class="completer-input" ctrInput [ngClass]="inputClass"
                [(ngModel)]="searchStr" (ngModelChange)="onChange($event)"
                [attr.name]="inputName" [placeholder]="placeholder"
                [attr.maxlength]="maxChars" [tabindex]="fieldTabindex" [disabled]="disableInput"
                [clearSelected]="clearSelected" [clearUnselected]="clearUnselected"
                [overrideSuggested]="overrideSuggested" [openOnFocus]="openOnFocus" [fillHighlighted]="fillHighlighted"
                [openOnClick]="openOnClick" [selectOnClick]="selectOnClick" [selectOnFocus]="selectOnFocus"
                (blur)="onBlur()" (focus)="onFocus()" (keyup)="onKeyup($event)"
                (keydown)="onKeydown($event)" (click)="onClick($event)"
                autocomplete="off" autocorrect="off" autocapitalize="off" />

            <div class="completer-dropdown-holder"
                *ctrList="dataService;
                    minSearchLength: minSearchLength;
                    pause: pause;
                    autoMatch: autoMatch;
                    initialValue: initialValue;
                    autoHighlight: autoHighlight;
                    displaySearching: displaySearching;
                    let items = results;
                    let searchActive = searching;
                    let isInitialized = searchInitialized;
                    let isOpen = isOpen;">
                <div class="completer-dropdown" ctrDropdown 
                    *ngIf="isInitialized && isOpen && (( items?.length > 0|| (displayNoResults && !searchActive)) || (searchActive && displaySearching))">
                    <div *ngIf="searchActive && displaySearching" class="completer-searching">{{ _textSearching }}</div>
                    <div *ngIf="!searchActive && (!items || items?.length === 0)"
                    class="completer-no-results">{{ _textNoResults }}</div>
                    <div class="completer-row-wrapper" *ngFor="let item of items; let rowIndex=index">
                        <div class="completer-row" [ctrRow]="rowIndex" [dataItem]="item">
                            <div *ngIf="item.image || item.image === ''" class="completer-image-holder">
                                <img *ngIf="item.image != ''" src="{{item.image}}" class="completer-image" />
                                <div *ngIf="item.image === ''" class="completer-image-default"></div>
                            </div>
                            <div class="completer-item-text"
                            [ngClass]="{'completer-item-text-image': item.image || item.image === '' }">
                                <completer-list-item
                                class="completer-title" [text]="item.title" [matchClass]="matchClass"
                                [searchStr]="searchStr" [type]="'title'"></completer-list-item>
                                <completer-list-item *ngIf="item.description && item.description != ''"
                                class="completer-description" [text]="item.description"
                                    [matchClass]="matchClass" [searchStr]="searchStr" [type]="'description'">
                                </completer-list-item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
                styles: [`
    .completer-dropdown {
        border-color: #ececec;
        border-width: 1px;
        border-style: solid;
        border-radius: 2px;
        width: 250px;
        padding: 6px;
        cursor: pointer;
        z-index: 9999;
        position: absolute;
        margin-top: -6px;
        background-color: #ffffff;
    }

    .completer-row {
        padding: 5px;
        color: #000000;
        margin-bottom: 4px;
        clear: both;
        display: inline-block;
        width: 103%;
    }

    .completer-selected-row {
        background-color: lightblue;
        color: #ffffff;
    }

    .completer-description {
        font-size: 14px;
    }

    .completer-image-default {
        width: 16px;
        height: 16px;
        background-image: url("demo/res/img/default.png");
    }

    .completer-image-holder {
        float: left;
        width: 10%;
    }
    .completer-item-text-image {
        float: right;
        width: 90%;
    }
    `],
                providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
CompleterCmp.ctorParameters = () => [
    { type: CompleterService, },
    { type: ChangeDetectorRef, },
];
CompleterCmp.propDecorators = {
    "dataService": [{ type: Input },],
    "inputName": [{ type: Input },],
    "inputId": [{ type: Input },],
    "pause": [{ type: Input },],
    "minSearchLength": [{ type: Input },],
    "maxChars": [{ type: Input },],
    "overrideSuggested": [{ type: Input },],
    "clearSelected": [{ type: Input },],
    "clearUnselected": [{ type: Input },],
    "fillHighlighted": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "matchClass": [{ type: Input },],
    "fieldTabindex": [{ type: Input },],
    "autoMatch": [{ type: Input },],
    "disableInput": [{ type: Input },],
    "inputClass": [{ type: Input },],
    "autofocus": [{ type: Input },],
    "openOnFocus": [{ type: Input },],
    "openOnClick": [{ type: Input },],
    "selectOnClick": [{ type: Input },],
    "selectOnFocus": [{ type: Input },],
    "initialValue": [{ type: Input },],
    "autoHighlight": [{ type: Input },],
    "selected": [{ type: Output },],
    "highlighted": [{ type: Output },],
    "blurEvent": [{ type: Output, args: ["blur",] },],
    "click": [{ type: Output },],
    "focusEvent": [{ type: Output, args: ["focus",] },],
    "opened": [{ type: Output },],
    "keyup": [{ type: Output },],
    "keydown": [{ type: Output },],
    "completer": [{ type: ViewChild, args: [CtrCompleter,] },],
    "ctrInput": [{ type: ViewChild, args: ["ctrInput",] },],
    "datasource": [{ type: Input },],
    "textNoResults": [{ type: Input },],
    "textSearching": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const providers = [
    CompleterService,
    LocalDataFactory,
    RemoteDataFactory
];
class Ng2CompleterModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: Ng2CompleterModule,
            providers
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: Ng2CompleterModule,
            providers
        };
    }
}
Ng2CompleterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CompleterListItemCmp,
                    CtrCompleter,
                    CtrDropdown,
                    CtrInput,
                    CtrList,
                    CtrRow,
                    CompleterCmp
                ],
                exports: [
                    CompleterListItemCmp,
                    CtrCompleter,
                    CtrDropdown,
                    CtrInput,
                    CtrList,
                    CtrRow,
                    CompleterCmp
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule
                ],
                providers
            },] },
];
/** @nocollapse */
Ng2CompleterModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Public classes.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Entry point for all public APIs of the package.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { LocalData, RemoteData, LocalDataFactory, RemoteDataFactory, CompleterService, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterListItemCmp, CompleterCmp, Ng2CompleterModule, CtrListContext as ɵa, CompleterBaseData as ɵb };
//# sourceMappingURL=ng2-completer.js.map
