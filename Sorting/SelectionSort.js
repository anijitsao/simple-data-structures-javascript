function selectionSort(arrayToSort) {
  if (!arrayToSort) {
    return false;
  }
  // no of passes should be less than number of element
  const noOfPass = arrayToSort.length - 1;

  // looping over every elements of the received array
  for (let rows = 0; rows < noOfPass; rows++) {
    let min = rows;
    for (let columns = rows + 1; columns < arrayToSort.length; columns++) {
      // checking each element for the linear search for minimum
      // to sort in descending order change it to less than <
      if (arrayToSort[min] > arrayToSort[columns]) {
        min = columns;
      }
    }
    if (min !== rows) {
      // swapping element
      let temp = arrayToSort[rows];
      arrayToSort[rows] = arrayToSort[min];
      arrayToSort[min] = temp;
    }
  }

  return arrayToSort;
}

export { selectionSort };
