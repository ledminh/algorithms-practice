/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
  array = createMaxHeap(array);

  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, 0, i - 1);
  }

  return array;
};

const createMaxHeap = (array) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }

  return array;
};

const heapify = (array, index, heapSize) => {
  const lIndex = 2 * index + 1;
  const rIndex = 2 * index + 2;

  const leftChild = lIndex > heapSize ? -10000 : array[lIndex];
  const rightChild = rIndex > heapSize ? -10000 : array[rIndex];

  const elem = array[index];

  if (elem <= leftChild) {
    if (leftChild < rightChild) {
      swap(array, rIndex, index);
      heapify(array, rIndex, heapSize);
    } else {
      swap(array, lIndex, index);
      heapify(array, lIndex, heapSize);
    }
  } else if (elem <= rightChild) {
    if (rightChild < leftChild) {
      swap(array, lIndex, index);
      heapify(array, lIndex, heapSize);
    } else {
      swap(array, rIndex, index);
      heapify(array, rIndex, heapSize);
    }
  }
};

const swap = (array, i1, i2) => {
  let temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;
};

// unit tests
// do not modify the below code
test("heap sort", function () {
  const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
  heapSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// test("heap sort", function () {
//   const nums = [2, 5, 3, 8, 10];
//   heapSort(nums);
//   expect(nums).toEqual([2, 3, 5, 8, 10]);
// });
