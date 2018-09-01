import { isNil } from '@ag1/nil';

export function isOptional(isNullable: string, columnDefault: any) {
    if (isNullable === 'YES') {
        return true;
    }

    const isNullableRequired = columnDefault === '' || isNil(columnDefault);

    return !isNullableRequired;
}
