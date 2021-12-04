import { add } from '../src/calc';
import { mocked } from 'ts-jest/utils';


describe("test add function", () => {
    beforeEach(() => {
        
    });

    it("should return 15 for add(10,5)", () => {
        expect(add(10, 5)).toBe(15);
    });
    it("should return 5 for add(2,3)", () => {
        expect(add(2, 3)).toBe(5);
    });

    test('null', () => {
        const n = null;
        expect(n).toBeNull();
    })
});