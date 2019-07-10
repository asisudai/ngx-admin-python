export declare class LocalSorter {
    protected static COMPARE: (direction: any, a: any, b: any) => any;
    static sort(data: Array<any>, field: string, direction: string, customCompare?: Function): Array<any>;
}
