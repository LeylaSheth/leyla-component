import React, { ReactElement } from 'react';
import { InputProps } from '../Input/input';
interface DataSourceObj {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObj;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderOptions?: (item: DataSourceType) => ReactElement;
}
export declare const AutoComplete: React.FC<AutoCompleteProps>;
export {};
