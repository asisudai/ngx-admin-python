import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CompleterBaseData } from "./completer-base-data";
import { CompleterItem } from "../components/completer-item";
export declare class RemoteData extends CompleterBaseData {
    private http;
    dataSourceChange: EventEmitter<void>;
    private _remoteUrl;
    private remoteSearch;
    private _urlFormater;
    private _dataField;
    private _requestOptions;
    constructor(http: HttpClient);
    remoteUrl(remoteUrl: string | null): this;
    urlFormater(urlFormater: (term: string) => string): void;
    dataField(dataField: string): void;
    requestOptions(requestOptions: any): void;
    search(term: string): void;
    cancel(): void;
    convertToItem(data: any): CompleterItem | null;
}
