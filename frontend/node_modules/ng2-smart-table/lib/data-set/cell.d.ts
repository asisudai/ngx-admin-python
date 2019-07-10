import { Column } from './column';
import { DataSet } from './data-set';
import { Row } from './row';
export declare class Cell {
    protected value: any;
    protected row: Row;
    protected column: any;
    protected dataSet: DataSet;
    newValue: any;
    protected static PREPARE: (value: any) => any;
    constructor(value: any, row: Row, column: any, dataSet: DataSet);
    getColumn(): Column;
    getRow(): Row;
    getValue(): any;
    setValue(value: any): any;
    getId(): string;
    getTitle(): string;
    isEditable(): boolean;
}
