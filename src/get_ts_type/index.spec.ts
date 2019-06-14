import { getEnumOrSetType } from './index';

describe('getEnumOrSetType', () => {
    it("should return '1' | '2' (set)", () => {
        const result = getEnumOrSetType('set', "set('1','2')");
        expect(result).toBe("'1' | '2'");
    });

    it("should return '1' | '2' (enum)", () => {
        const result = getEnumOrSetType('enum', "enum('1','2')");
        expect(result).toBe("'1' | '2'");
    });
});
