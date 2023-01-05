import { selectionSort } from "./SelectionSort";

describe("Testing Selection Sort", () => {
  test("Testing Selection Sort Ascending order", () => {
    const arrayToSort = [20, 35, 2, 78, 1, 4];
    expect(selectionSort(arrayToSort)).toEqual([1, 2, 4, 20, 35, 78]);
  });
  
  test("If no array present", () => {
    expect(selectionSort()).toEqual(false);
  });
});
