import { HttpClient } from "@angular/common/http";
import { RemoteData } from "./remote-data";
export declare class RemoteDataFactory {
    private http;
    constructor(http: HttpClient);
    create(): RemoteData;
}
