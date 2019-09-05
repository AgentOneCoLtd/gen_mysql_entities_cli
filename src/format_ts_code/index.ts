import { format } from 'prettier';

export function formatTsCode(str: string): string {
    const prettierCode = format(str, {
        printWidth: 120,
        tabWidth: 4,
        trailingComma: 'all',
        semi: true,
        arrowParens: 'always',
        singleQuote: true,
        parser: 'typescript',
    });

    return prettierCode;
}
