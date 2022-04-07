import { selectionSort, bubbleSort, insertionSort, mergeSort, heapSort, quickSort, countingSort, radixSort, sort, } from "@/sort/index";
const source = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
const upperResult = source.slice().sort((x, y) => x - y);
const lowerResult = source.slice().sort((x, y) => y - x);
describe("Selection sort", () => {
    it("sort from small to large", () => {
        expect(selectionSort(source.slice())).toEqual(upperResult);
    });
    it("sort from large to small", () => {
        expect(selectionSort(source.slice(), 2)).toEqual(lowerResult);
    });
});
describe("Bubble sort", () => {
    it("sort from small to large", () => {
        expect(bubbleSort(source.slice())).toEqual(upperResult);
    });
    it("sort from large to small", () => {
        expect(bubbleSort(source.slice(), 2)).toEqual(lowerResult);
    });
});
describe("Insertion sort", () => {
    it("sort from small to large", () => {
        expect(insertionSort(source.slice())).toEqual(upperResult);
    });
    it("sort from large to small", () => {
        expect(insertionSort(source.slice(), 2)).toEqual(lowerResult);
    });
});
describe("Merge sort", () => {
    it("sort from small to large", () => {
        expect(mergeSort(source.slice())).toEqual(upperResult);
    });
    it("sort from large to small", () => {
        expect(mergeSort(source.slice(), 2)).toEqual(lowerResult);
    });
});
describe("Heap sort", () => {
    it("sort from small to large", () => {
        expect(heapSort(source.slice())).toEqual(upperResult);
    });
    it("sort from large to small", () => {
        expect(heapSort(source.slice(), 2)).toEqual(lowerResult);
    });
});
describe("Quick sort", () => {
    it("sort from small to large", () => {
        expect(quickSort(source.slice())).toEqual(upperResult);
    });
    it("sort from large to small", () => {
        expect(quickSort(source.slice(), 2)).toEqual(lowerResult);
    });
});
describe("Counting sort", () => {
    it("sort from small to large", () => {
        expect(countingSort(source.slice())).toEqual(upperResult);
    });
    it("sort from large to small", () => {
        expect(countingSort(source.slice(), 2)).toEqual(lowerResult);
    });
});
describe("Radix sort", () => {
    it("sort from small to large", () => {
        expect(radixSort(source.slice())).toEqual(upperResult);
    });
    it("sort from large to small", () => {
        expect(radixSort(source.slice(), 2)).toEqual(lowerResult);
    });
});
describe("Sort", () => {
    it("sort from small to large", () => {
        expect(sort(source.slice())).toEqual(upperResult);
    });
    it("sort from large to small", () => {
        expect(sort(source.slice(), 2)).toEqual(lowerResult);
    });
});
//# sourceMappingURL=sort.test.js.map