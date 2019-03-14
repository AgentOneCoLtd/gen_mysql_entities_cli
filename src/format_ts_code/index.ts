import { format } from 'prettier';

export function formatTsCode(str: string): string {
    return format(str, {
        printWidth: 120,
        tabWidth: 4,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        parser: 'typescript',
    });
}
