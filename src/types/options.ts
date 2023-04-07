export interface Option<Value> {
    label: string;
    value: Value;
    data?: any;
}

export interface OptionName<Value> {
    name: string;
    value: Value;
}

export enum Locales {
    Ru = 'RU',
}
