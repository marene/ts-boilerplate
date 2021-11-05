    import {biggerOrSmaller, Comparison, countComparisons, filterOdds, filterWithComparison, multiplyAllNumbers} from "../src/level_04";

describe('level_04', () => {
    describe('biggerOrSmaller', () => {
        it('should return SMALLER if the number is smaller - 1', () => {
            const ret = biggerOrSmaller(2, 1);

            expect(ret).toEqual(Comparison.SMALLER);
        });

        it('should return SMALLER if the number is smaller - 2', () => {
            const ret = biggerOrSmaller(58, 13);

            expect(ret).toEqual(Comparison.SMALLER);
        });

        it('should return BIGGER if the number is smaller - 1', () => {
            const ret = biggerOrSmaller(15, 18);

            expect(ret).toEqual(Comparison.BIGGER);
        });

        it('should return BIGGER if the number is smaller - 2', () => {
            const ret = biggerOrSmaller(58, 89);

            expect(ret).toEqual(Comparison.BIGGER);
        });

        it('should return EQUAL if the number is equal - 1', () => {
            const ret = biggerOrSmaller(2, 2);

            expect(ret).toEqual(Comparison.EQUAL);
        });

        it('should return EQUAL if the number is equal - 2', () => {
            const ret = biggerOrSmaller(23, 23);

            expect(ret).toEqual(Comparison.EQUAL);
        });
    });

    describe('multiplyAllNumbers', () => {
        it('should do nothing if the array is empty', () => {
            const ret = multiplyAllNumbers([], 12);

            expect(ret).toEqual([]);
        });

        it('should multiply all the numbers in the array if that number is 2', () => {
            const ret = multiplyAllNumbers([4, 8, 15, 16, 23, 42], 2);

            expect(ret).toEqual([8, 16, 30, 32, 46, 84]);
        });

        it('should multiply all the numbers in the array if that number is 3', () => {
            const ret = multiplyAllNumbers([2, 6, 7, 21, 12], 3);

            expect(ret).toEqual([6, 18, 21, 63, 36]);
        });

        it('should multiply all the numbers in the array if that number is 0', () => {
            const ret = multiplyAllNumbers([12, 45, 87, 34, 56], 0);

            expect(ret).toEqual([0, 0, 0, 0, 0]);
        });
    });

    describe('filterOdds', () => {
        it('should return an empty array if an empty array is sent as an input', () => {
            const ret = filterOdds([]);

            expect(ret).toEqual([]);
        });

        it('should return an empty array if no odd numbers are passed', () => {
            const ret = filterOdds([2, 4, 8, 16, 32]);

            expect(ret).toEqual([]);
        });

        it('should return an array only containing the odd nunbers', () => {
            const ret = filterOdds([4, 8, 15, 16, 23, 42]);

            expect(ret).toEqual([15, 23]);
        });
    });

    describe('filterWithComparison', () => {
        it('should filter all numbers equal to 1', () => {
            const ret = filterWithComparison([1, 12, 31, 45, 1], 1, Comparison.EQUAL);

            expect(ret).toEqual([1, 1]);
        });

        it('should filter all numbers equal to 21', () => {
            const ret = filterWithComparison([13, 42, 21, 35, 21, 64, 21, 34], 21, Comparison.EQUAL);

            expect(ret).toEqual([21, 21, 21]);
        });

        it('should filter all numbers smaller than 12', () => {
            const ret = filterWithComparison([1, 32, 6, 14, 432, 5, 2, 8], 12, Comparison.SMALLER);

            expect(ret).toEqual([1, 6, 5, 2, 8]);
        });

        it('should filter all numbers smaller than 35', () => {
            const ret = filterWithComparison([12, 42, 67, 1, 5, 23, 42, 14], 35, Comparison.SMALLER);

            expect(ret).toEqual([12, 1, 5, 23, 14]);
        });

        it('should filter all numbers bigger than 26', () => {
            const ret = filterWithComparison([43, 51, 56, 12, 34, 12, 16], 26, Comparison.BIGGER);

            expect(ret).toEqual([43, 51, 56, 34]);
        });

        it('should filter all numbers bigger than 42', () => {
            const ret = filterWithComparison([194, 12, 34, 52, 15, 67, 89], 42, Comparison.BIGGER);

            expect(ret).toEqual([194, 52, 67, 89]);
        });
    });

    describe('countComparisons', () => {
        it('should return a zero count if the array is empty', () => {
            const ret = countComparisons([], 12);

            expect(ret).toEqual({
                equal: 0,
                smaller: 0,
                bigger: 0,
            });
        });

        it('should return the count of comparisons if the number is 12', () => {
            const ret = countComparisons([12, 34, 1, 3, 67, 11], 12);

            expect(ret).toEqual({
                equal: 1,
                smaller: 3,
                bigger: 2,
            });
        });

        it('should return the count of comparisons if the number is 32', () => {
            const ret = countComparisons([35, 56, 17, 821, 45, 1, 3, 67, 5], 32);

            expect(ret).toEqual({
                equal: 0,
                smaller: 4,
                bigger: 5,
            });
        });

        it('should return the count of comparisons if the number is 3', () => {
            const ret = countComparisons([3, 12, 1, 43, 3, 91, 2, 7, 1, 0, 2], 3);

            expect(ret).toEqual({
                equal: 2,
                smaller: 5,
                bigger: 4,
            });
        });

        it('should return the count of comparisons if the number is 67', () => {
            const ret = countComparisons([75, 23, 64, 12, 93, 56, 34, 86, 12, 54, 67, 91, 23], 67);

            expect(ret).toEqual({
                equal: 1,
                smaller: 8,
                bigger: 4,
            });
        });
    });
});
