export const chunkArray = (arr: any[], cnt: number) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

export function dedupe(array: any[], key: string) {
    return array.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t[key] === item[key]
        )),
    );
}

export function convertObjectValues (object: { [key: string]: any }): any {
    for (const key in object) {
        if (typeof object[key] === 'string') {
            object[key] = String(object[key]);
        } else if (typeof object[key] === 'number') {
            object[key] = parseInt(object[key]);
        }
    }
    return object;
}

export function invalidateFalsy (object: any): any {
    if (typeof  object !== 'object' && object === null) return {};

    const invalidatedArrayEntries =  Object.entries(object).filter(([key, value]) => value);
    return { ...Object.fromEntries(invalidatedArrayEntries) };
}

export function getKeyByValue<T extends {[key: string]: string}>(
    enumType: T,
    enumValue: string,
): keyof T {
    return Object.keys(enumType).find(key => enumType[key] === enumValue) as keyof T;
}

