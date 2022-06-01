/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  const getIndexToInsert = (val, endIndex, arr) => {
    let index = endIndex - 1,
      found = false;

    while (!found && index >= 0) {
      if (arr[index] <= val) {
        found = true;
      } else {
        index--;
      }
    }

    return index + 1;
  };

  const insert = (oldIndex, newIndex, arr) => {
    let shiftVal = arr[newIndex];

    arr[newIndex] = arr[oldIndex];

    while (newIndex < oldIndex) {
      newIndex++;

      let temp = arr[newIndex];
      arr[newIndex] = shiftVal;
      shiftVal = temp;
    }
  };

  /************************** */

  let currIndex = 1;

  while (currIndex < nums.length) {
    let indexToInsert = getIndexToInsert(nums[currIndex], currIndex, nums);

    insert(currIndex, indexToInsert, nums);

    currIndex++;
  }
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
