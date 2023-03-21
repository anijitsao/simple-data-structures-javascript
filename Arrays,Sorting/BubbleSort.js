function bubbleSort(arrayToSort) {
  if (!arrayToSort) {
    return false;
  }
  // looping over every elements of the received array
  for (let rows = 0; rows < arrayToSort.length; rows++) {
    for (let columns = 0; columns < arrayToSort.length; columns++) {
      // checking each element for the sorting condition

      // to sort in descending order change it to less than <
      if (arrayToSort[columns] > arrayToSort[columns + 1]) {
        // swapping element
        let temp = arrayToSort[columns];
        arrayToSort[columns] = arrayToSort[columns + 1];
        arrayToSort[columns + 1] = temp;
      }
    }
  }

  return arrayToSort;
}

// console.log("Sorting of array [20, 35, 2, 78, 1, 4]", bubbleSort([20, 35, 2, 78, 1, 4]));

export { bubbleSort };
