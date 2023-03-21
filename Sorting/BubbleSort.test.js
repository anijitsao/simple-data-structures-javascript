import { bubbleSort } from "./BubbleSort";

describe("Testing Bubble Sort", () => {
  test("Testing Bubble Sort Ascending order", () => {
    const arrayToSort = [20, 35, 2, 78, 1, 4];
    expect(bubbleSort(arrayToSort)).toEqual([1, 2, 4, 20, 35, 78]);
  });

  test("If no array present", () => {
    expect(bubbleSort()).toEqual(false);
  });
});
