import {
  selectionSort,
  bubbleSort,
  insertionSort,
  mergeSort,
} from "@/sort/index";

const source = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000)
);

const data = source.slice();

const upperResult = source.slice().sort((x, y) => x - y);

const lowerResult = source.slice().sort((x, y) => y - x);

describe("Selection sort", () => {
  it("sort from small to large", () => {
    expect(selectionSort(data)).toEqual(upperResult);
  });

  it("sort from large to small", () => {
    expect(selectionSort(data, 2)).toEqual(lowerResult);
  });
});

describe("Bubble sort", () => {
  it("sort from small to large", () => {
    expect(bubbleSort(data)).toEqual(upperResult);
  });

  it("sort from large to small", () => {
    expect(bubbleSort(data, 2)).toEqual(lowerResult);
  });
});

describe("Insertion sort", () => {
  it("sort from small to large", () => {
    expect(insertionSort(data)).toEqual(upperResult);
  });

  it("sort from large to small", () => {
    expect(insertionSort(data, 2)).toEqual(lowerResult);
  });
});

describe("Merge sort", () => {
  it("sort from small to large", () => {
    expect(mergeSort(data)).toEqual(upperResult);
  });

  it("sort from large to small", () => {
    expect(mergeSort(data, 2)).toEqual(lowerResult);
  });
});
