import { quickSort, swap, partition } from './quicksort';

describe('swap', () => {
    test('swaps two elements when they need swapping', () => {
        expect(swap(3, 1)).toEqual([1, 3]);
    });

    test('doesnt swap when no need', () => {
        expect(swap(1, 2)).toEqual([1, 2]);
    });

    test('doesnt swap when two numbers are equal', () => {
        expect(swap(1, 1)).toEqual([1, 1]);
    });
});

describe('partitition', () => {
    test('returns elements in correct order with 3 elements, sorted', () => {
        expect(partition([2, 3, 4], 3).flat()).toEqual([2, 3, 4]);
    });

    test('returns elements in correct order with 3 elements, unsorted', () => {
        expect(partition([14, 3, 1], 3).flat()).toEqual([1, 3, 14]);
    });

    test('has lesser elements left of pivot and greater right in array with multiple elements', () => {
        expect(partition([24, 1, 0, 5, 32, 6, 99], 5)[0]).toContain(0, 1);
        expect(partition([24, 1, 0, 5, 32, 6, 99], 5)[2]).toContain(24, 99, 6, 32);
    });
});

describe('quickSort', () => {
    test('returns the array itself when 1 or less elements', () => {
        expect(quickSort([1])).toEqual([1]);
        expect(quickSort([])).toEqual([]);
    });
    test('returns sorted array with 2 elements when needs sorting', () => {
        expect(quickSort([4, 1])).toEqual([1, 4]);
    });
    test('returns array with 2 elements itself when sorting not needed', () => {
        expect(quickSort([4, 1])).toEqual([1, 4]);
    });

    test('returns array with multiple elements in the correct order', () => {
        expect(quickSort([34, 1, 90, 4, 2, 50])).toEqual([1, 2, 4, 34, 50, 90]);
        expect(quickSort([0, 33, 90, 4, 2, 50])).toEqual([0, 2, 4, 33, 50, 90]);
        expect(quickSort([0, -33, 90, 4, 2, 50])).toEqual([-33, 0, 2, 4, 50, 90]);
    });
});

