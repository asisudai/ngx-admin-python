import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CompleterBaseData } from "./completer-base-data";
import { CompleterItem } from "../components/completer-item";
export declare class LocalData extends CompleterBaseData {
    dataSourceChange: EventEmitter<void>;
    protected _data: any[];
    protected savedTerm: string | null;
    constructor();
    data(data: any[] | Observable<any[]>): this;
    search(term: string): void;
    convertToItem(data: any): CompleterItem | null;
}
