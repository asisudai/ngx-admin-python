export declare class LocalFilter {
    protected static FILTER: (value: string, search: string) => boolean;
    static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any>;
}
