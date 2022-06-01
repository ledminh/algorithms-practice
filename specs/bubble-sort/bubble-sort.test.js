/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  if (nums.length <= 1) return nums;

  const shouldSwap = (aIndex, bIndex, arr) => arr[aIndex] > arr[bIndex];

  const swap = (aIndex, bIndex, arr) => {
    let temp = arr[aIndex];

    arr[aIndex] = arr[bIndex];
    arr[bIndex] = temp;
  };

  // ******************************************

  let aIndex = 0,
    bIndex = 1,
    sortedArr = [...nums];

  let done = false,
    endIndex = sortedArr.length;

  while (!done) {
    done = true;

    while (bIndex < endIndex) {
      if (shouldSwap(aIndex, bIndex, sortedArr)) {
        swap(aIndex, bIndex, sortedArr);
        done = false;
      }
      aIndex++;
      bIndex++;
    }

    aIndex = 0;
    bIndex = 1;
    endIndex--;
  }

  return sortedArr;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
