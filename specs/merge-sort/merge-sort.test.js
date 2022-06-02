/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  const midI = Math.floor(nums.length / 2);
  const arr1 = mergeSort(nums.slice(0, midI)),
    arr2 = mergeSort(nums.slice(midI));

  const merge = (arrA, arrB) => {
    let iA = 0,
      iB = 0;
    const arr = [];

    while (iA < arrA.length && iB < arrB.length) {
      if (arrA[iA] < arrB[iB]) {
        arr.push(arrA[iA]);
        iA++;
      } else {
        arr.push(arrB[iB]);
        iB++;
      }
    }

    if (iA < arrA.length) {
      while (iA < arrA.length) {
        arr.push(arrA[iA]);
        iA++;
      }
    } else {
      while (iB < arrB.length) {
        arr.push(arrB[iB]);
        iB++;
      }
    }

    return arr;
  };

  return merge(arr1, arr2);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 2, 6, 4, 7, 11, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 10, 11]);
});
