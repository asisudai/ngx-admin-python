import { Subject } from "rxjs/Subject";
import { CompleterItem } from "../components/completer-item";
import { CompleterData } from "./completer-data";
export declare abstract class CompleterBaseData extends Subject<CompleterItem[] | null> implements CompleterData {
    protected _searchFields: string | null;
    protected _titleField: string | null;
    protected _descriptionField: string;
    protected _imageField: string;
    constructor();
    abstract search(term: string): void;
    cancel(): void;
    searchFields(searchFields: string | null): this;
    titleField(titleField: string | null): this;
    descriptionField(descriptionField: string): this;
    imageField(imageField: string): this;
    convertToItem(data: any): CompleterItem | null;
    protected extractMatches(data: any[], term: string): any[];
    protected extractTitle(item: any): any;
    protected extractValue(obj: any, key: string | null): any;
    protected processResults(matches: string[]): CompleterItem[];
    private extractBySearchFields(searchFields, item);
}
