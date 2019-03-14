import { isNil } from '@ag1/nil';

export interface IIsOptionalParam {
    isNullable: string;
    // tslint:disable-next-line no-any
    columnDefault: any;
    isIdentity: 0 | 1;
}
export function isOptional(param: IIsOptionalParam) {
    const { isNullable, columnDefault, isIdentity } = param;

    if (isNullable === 'YES' || isIdentity === 1) {
        return true;
    }

    const isNullableRequired = columnDefault === '' || isNil(columnDefault);

    return !isNullableRequired;
}
