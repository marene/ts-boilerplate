export enum Comparison {
    BIGGER = 'bigger',
    SMALLER = 'smaller',
    EQUAL = 'equal'
};

/*
 * This function compares `guess` to `numberToCompareTo` and returns:
 *   - EQUAL if they are equal
 *   - SMALLER if guess is smaller
 *   - BIGGER if guess is bigger
 */
export function biggerOrSmaller(numberToCompareTo: number, guess: number): Comparison {
    return Comparison.EQUAL;
}

/*
 * This functions returns an array of all the numbers presents in numbersArray multiplyBy by
 * multiplyBy.
 * Ex: [2, 4, 5, 1] with multiplyBy set to 2 will return [4, 8, 10, 2]
 */
export function multiplyAllNumbers(numbersArray: number[], multiplyBy: number): number[] {
    return [];
}


/*
 * This function returns an array of all the odd numbers (non divisible by 2) contained in
 * numbersArray
 */
export function filterOdds(numbersArray: number[]): number[] {
    return []
}


/*
 * This function returns an array of all the numbers present in numbersArray that validate the comparison with numberToCompareTo.
 * If comparison is EQUAL, then a number must be equal to numberToCompareTo to validate the comparison.
 * If comparison is SMALLER, then a number must be smaller than numberToCompareTo to validate the comparison.
 * If comparison is BIGGER, then a number must be bigger than numberToCompareTo to validate the comparison.
 */
export function filterWithComparison(numbersArray: number[], numberToCompareTo: number, comparison: Comparison): number[] {
    return [];
}

/*
 * This function returns a count of all the numbers present in numbersArray that are equal, bigger or smaller
 * than numberToCompareTo.
 * The count returned is under the form: { equal: 0, smaller: 0, bigger: 0 }
 */
export function countComparisons(numbersArray: number[], numberToCompareTo: number): { [key: string]: number } {
    return {
        equal: 0,
        smaller: 0,
        bigger: 0,
    };
}
