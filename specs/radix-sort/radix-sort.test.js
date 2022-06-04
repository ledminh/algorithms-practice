/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDigit(number, place) {
  return Math.floor(number / place) % 10;
}

function getLongestNumber(nums) {
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max.toString().length;
}

function radixSort(array) {
  const longestLength = getLongestNumber(array);

  for (let place = 1; place <= Math.pow(10, longestLength - 1); place *= 10) {
    // [3,0,0,1]
    const bucketArr = Array.from(Array(10), () => []);

    while (array.length > 0) {
      const val = array.shift();

      bucketArr[getDigit(val, place)].push(val);
    }

    for (let i = 0; i < bucketArr.length; i++) {
      if (bucketArr[i].length > 0) {
        while (bucketArr[i].length > 0) {
          array.push(bucketArr[i].shift());
        }
      }
    }
  }

  return array;
}

// unit tests
// do not modify the below code
test("radix sort", function () {
  test("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  test("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
