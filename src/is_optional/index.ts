import { isNil } from '@ag1/nil';

export interface IIsOptionalParam {
    isNullable: string;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    columnDefault: any;
    isIdentity: 0 | 1;
}
export function isOptional(param: IIsOptionalParam): boolean {
    const { isNullable, columnDefault, isIdentity } = param;

    if (isNullable === 'YES' || isIdentity === 1) {
        return true;
    }

    const isNullableRequired = columnDefault === '' || isNil(columnDefault);

    return !isNullableRequired;
}
